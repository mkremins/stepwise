(ns stepwise.eval
  (:require [stepwise.model :as model]
            [stepwise.util :refer [ensure]]
            [xyzzy.core :as z]))

(def core-defs
  (reduce (fn [defs [sym val]]
            (assoc defs sym {:type :value :value val :text (str "cljs.core/" sym)}))
          {}
          {'+ + '- - '* * '/ / 'apply apply 'dec dec 'inc inc 'println println
           'range range 'str str}))

(defn init-step [forms]
  {:loc (model/zipper forms) :defs core-defs :scopes []})

(defn fully-simplified? [{:keys [children type]}]
  (case type
    (:bool :keyword :nil :number :string :regex :value) true
    (:map :set :vec :program) (every? fully-simplified? children)
    :seq (empty? children) ; even if children are all fully simplified, it has to be replaced
                           ; by the value of the function call
    :symbol false))

(defn extract-value [{:keys [children type value]}]
  (case type
    (:bool :keyword :nil :number :string :regex :value) value
    :map (apply hash-map (map extract-value children))
    :seq (map extract-value children)
    :set (set (map extract-value children))
    :vec (mapv extract-value children)))

(defn call-function [{[f & args] :children}]
  (model/parse (apply (extract-value f) (map extract-value args))))

(defn locally-bind [state sym value]
  (update state :scopes #(conj (pop %) (assoc (peek %) sym value))))

(defn lookup-local [{:keys [scopes]} sym]
  ((or (->> scopes reverse (filter #(contains? % sym)) first) {}) sym))

(defn resolve [{:keys [defs loc] :as state}]
  (let [{:keys [text]} (z/node loc)
        sym (symbol text)]
    (-> (update state :loc z/replace (or (lookup-local state sym) (defs sym)))
        (assoc :desc ["Replace the symbol " [:code text] " by its value."]))))

(defrecord MyFn [methods])

(defn method-for-argc [my-fn argc]
  (first (filter #(= (count (:params %)) argc) (:methods my-fn))))

(declare steps)

(defn- steps* [{:keys [loc] :as state}]
  (loop [paths (map #(conj (:path loc) %) (-> loc z/node :children count range))
         state state
         the-steps ()]
    (if-let [path (first paths)]
      (let [more-steps (steps (assoc-in state [:loc :path] path))]
        (recur (rest paths) (last more-steps) (concat the-steps more-steps)))
      the-steps)))

(def ^:private head-text
  (comp :text first :children z/node :loc))

(defmulti special-steps head-text)

(defmethod special-steps "def" [{:keys [loc] :as state}]
  (let [head-loc (z/down loc)
        name-loc (z/right head-loc)
        name (symbol (:text (z/node name-loc)))
        init-loc (z/right name-loc)
        init-steps (steps (assoc state :loc init-loc))
        state' (last init-steps)
        value (extract-value (z/node (:loc state')))]
    (concat
      [(assoc state :loc head-loc
         :desc ["It's a " [:code "def"] " form. Let's define a new var."])
       (assoc state :loc name-loc
         :desc ["The var's name will be " [:code (str name)] "..."])
       (assoc state :loc init-loc
         :desc ["...and its value will be the result of evaluating this form."])]
      init-steps
      [(-> state'
           (update :loc #(-> % z/up (z/replace {:type :value :text (str "#'user/" name)})))
           (assoc-in [:defs name]
             {:type :value :value value :text (str "user/" name)})
           (assoc :desc ["Establish the new binding in the current namespace."]))])))

(defn- human-readable-number [n]
  (case n 0 "zero" 1 "one" 2 "two" 3 "three" 4 "four"
          5 "five" 6 "six" 7 "seven" 8 "eight" 9 "nine"
          (str n)))

(defmethod special-steps "fn" [{:keys [loc] :as state}]
  (let [head-loc (z/down loc)
        next-loc (z/right head-loc)
        name-loc (when (= (:type (z/node next-loc)) :symbol) next-loc)
        name (when name-loc (:text (z/node name-loc)))
        method-locs (cond-> (z/followers head-loc z/right) name rest)
        parse-method (comp #(-> {:params (first %) :body (rest %)}) :value z/node)
        fn-node {:type :value :value (MyFn. (map parse-method method-locs))
                 :text (str "#<fn " (or name (gensym "f")) ">")}]
    (concat
      [(assoc state :loc head-loc
         :desc ["It's an " [:code "fn"] " form. Let's define a function."])]
      (when name
        [(assoc state :loc name-loc
           :desc ["This function has the local name " [:code name] ". "])
         (assoc state :loc name-loc
           :desc ["Within the function body, "
                  [:code name] " refers to the function itself."])])
      (for [method-loc method-locs
            :let [arity (count (:children (z/node (z/down method-loc))))]]
        (assoc state :loc method-loc
          :desc ["Define a method that takes " (human-readable-number arity)
                 " " (if (= arity 1) "argument" "arguments") "."]))
      [(-> (update state :loc z/replace fn-node)
           (assoc :desc ["Replace the entire form with the newly defined function."]))])))

(defmethod special-steps "if" [{:keys [loc] :as state}]
  (let [head-loc (z/down loc)
        test-loc (z/right head-loc)
        test-steps (steps (assoc state :loc test-loc))
        state' (last test-steps)
        test-value (extract-value (z/node (:loc state')))
        [truthy branch1 branch2] (if test-value ["truthy" "first" "second"]
                                                ["falsey" "second" "first"])
        branch-loc (cond-> (z/right (:loc state')) (not test-value) z/right)
        branch-steps (steps (assoc state' :loc branch-loc))
        state'' (last branch-steps)]
    (concat
      [(assoc state :loc head-loc
         :desc ["It's an " [:code "if"] " form. Let's simplify."])
       (assoc state :loc test-loc
         :desc ["Evaluate the condition to determine which branch to take."])]
      test-steps
      [(assoc state' :desc ["The condition is " truthy ". Evaluate the "
                            branch1 " branch and ignore the " branch2 "."])]
      branch-steps
      [(-> state''
           (update :loc #(-> % z/up (z/replace (z/node (:loc state'')))))
           (assoc :desc ["Replace the entire form with the value of the "
                         branch1 " branch."]))])))

(defn bpair-steps [{:keys [loc] :as state}]
  (let [name (symbol (:text (z/node loc)))
        init-loc (z/right loc)
        init-steps (steps (assoc state :loc init-loc))
        state' (last init-steps)
        value (extract-value (z/node (:loc state')))]
    (concat
      [(assoc state
         :desc ["Bind the symbol " [:code (str name)] "..."])
       (assoc state :loc init-loc
         :desc ["...to the result of evaluating this form."])]
      (butlast init-steps)
      [(locally-bind state' name (model/parse value))])))

(defn bvec-steps [{:keys [loc] :as original-state}]
  (loop [paths (->> loc z/node :children count range
                    (map (partial conj (:path loc))) (take-nth 2))
         state (update original-state :scopes conj {}) ; push new local scope
         the-steps ()]
    (if-let [path (first paths)]
      (let [more-steps (bpair-steps (assoc-in state [:loc :path] path))]
        (recur (rest paths) (last more-steps) (concat the-steps more-steps)))
      (concat
        [(assoc original-state
           :desc ["Establish local bindings according to these binding pairs."])]
        the-steps
        [(-> (if-let [state' (last the-steps)]
               (update state' :loc z/up)
               state)
             (assoc :desc ["Bindings established. Let's evaluate the body."]))]))))

(defmethod special-steps "let" [{:keys [loc] :as state}]
  (let [head-loc (z/down loc)
        bvec-steps (bvec-steps (assoc state :loc (z/right head-loc)))
        body-steps (steps (update (last bvec-steps) :loc z/right))
        state' (last body-steps)]
    (concat
      [(assoc state :loc head-loc
         :desc ["It's a " [:code "let"] " form. Let's simplify."])]
      bvec-steps
      body-steps
      [(-> (update state' :loc #(-> % z/up (z/replace (z/node (:loc state')))))
           (assoc :desc ["Replace the entire form with the value of its body."])
           (update :scopes pop))])))

(defn function-call-steps [{:keys [loc] :as state}]
  (let [fn-loc (z/down loc)]
    (if-let [my-fn (ensure (partial instance? MyFn) (:value (z/node fn-loc)))]
      (let [args (map (comp extract-value z/node) (z/followers fn-loc z/right))
            {:keys [params body]} (method-for-argc my-fn (count args))
            let-form `(~'let [~@(interleave params args)] ~@body)
            state' (-> (update state :loc z/replace (model/parse let-form))
                       (assoc :desc ["Rewrite the function call as a " [:code "let"] " form."]))]
        (cons state' (drop 2 (steps state'))))
      [(-> (update state :loc z/edit call-function)
           (assoc :desc ["Call the function with the given arguments."]))])))

(defn seq-steps [state]
  (concat
    [(assoc state :desc ["Looks like a function call, or maybe a special form. Let's go deeper."])]
    (if-let [special-steps* (get-method special-steps (head-text state))]
      (special-steps* state)
      (let [item-steps (steps* state)]
        (concat
          item-steps
          (function-call-steps (update (last item-steps) :loc z/up)))))))

(defn coll-steps [state]
  (let [item-steps (steps* state)]
    (concat
      [(assoc state :desc ["This form is a collection. Let's take a look at its items."])]
      item-steps
      [(-> (last item-steps)
           (update :loc z/up)
           (assoc :desc ["All items have been simplified. Let's move on."]))])))

(defn program-steps [state]
  (let [top-level-steps (steps* state)]
    (concat
      [(assoc state :desc ["Let's evaluate these forms step by step."])]
      top-level-steps
      [(-> (last top-level-steps)
           (update :loc z/up)
           (assoc :desc ["Nothing left to simplify. Looks like our work here is done!"]))])))

(defn steps [state]
  (let [node (z/node (:loc state))]
    (if (fully-simplified? node)
      [(assoc state :desc ["This form is completely simplified. Let's move on."])]
      (case (:type node)
        :symbol [(resolve state)]
        :seq (seq-steps state)
        (:map :set :vec) (coll-steps state)
        :program (program-steps state)))))

(defn init-state [forms]
  {:index 0 :steps (vec (steps (init-step forms)))})
