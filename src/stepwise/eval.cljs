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

(defn desc [state & parts]
  (assoc state :desc parts))

(defn go [state loc]
  (assoc state :loc loc))

(defn zip [state f & args]
  (apply update state :loc f args))

(defn resolve [{:keys [defs loc] :as state}]
  (let [{:keys [text]} (z/node loc)
        sym (symbol text)]
    (-> (zip state z/replace (or (lookup-local state sym) (defs sym)))
        (desc "Replace the symbol " [:code text] " by its value."))))

(defrecord UserFn [methods])

(defn method-for-argc [user-fn argc]
  (first (filter #(= (count (:params %)) argc) (:methods user-fn))))

(defn step-sequence [& steps]
  (mapcat #(if (or (sequential? %) (nil? %)) % [%]) steps))

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
        init-steps (steps (go state init-loc))
        state' (last init-steps)
        value (extract-value (z/node (:loc state')))]
    (step-sequence
      (-> (go state head-loc)
          (desc "It's a " [:code "def"] " form. Let's define a new var."))
      (-> (go state name-loc)
          (desc "The var's name will be " [:code (str name)] "..."))
      (-> (go state init-loc)
          (desc "...and its value will be the result of evaluating this form."))
      init-steps
      (-> (zip state' #(-> % z/up (z/replace {:type :value :text (str "#'user/" name)})))
          (assoc-in [:defs name] {:type :value :value value :text (str "user/" name)})
          (desc "Establish the new binding in the current namespace.")))))

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
        fn-node {:type :value :value (UserFn. (map parse-method method-locs))
                 :text (str "#<fn " (or name (gensym "f")) ">")}]
    (step-sequence
      (-> (go state head-loc)
          (desc "It's an " [:code "fn"] " form. Let's define a function."))
      (when name
        [(-> (go state name-loc)
             (desc "This function has the local name " [:code name] "."))
         (-> (go state name-loc)
             (desc "Within the function body, " [:code name] " refers to the function itself."))])
      (for [method-loc method-locs
            :let [arity (count (:children (z/node (z/down method-loc))))]]
        (-> (go state method-loc)
            (desc "Define a method that takes " (human-readable-number arity)
                  " " (if (= arity 1) "argument" "arguments") ".")))
      (-> (zip state z/replace fn-node)
          (desc "Replace the entire form with the newly defined function.")))))

(defmethod special-steps "if" [{:keys [loc] :as state}]
  (let [head-loc (z/down loc)
        test-loc (z/right head-loc)
        test-steps (steps (go state test-loc))
        state' (last test-steps)
        test-value (extract-value (z/node (:loc state')))
        [truthy branch1 branch2] (if test-value ["truthy" "first" "second"]
                                                ["falsey" "second" "first"])
        branch-loc (cond-> (z/right (:loc state')) (not test-value) z/right)
        branch-steps (steps (go state' branch-loc))
        state'' (last branch-steps)]
    (step-sequence
      (-> (go state head-loc)
          (desc "It's an " [:code "if"] " form. Let's simplify."))
      (-> (go state test-loc)
          (desc "Evaluate the condition to determine which branch to take."))
      test-steps
      (desc state' "The condition is " truthy ". Evaluate the " branch1
                   " branch and ignore the " branch2 ".")
      branch-steps
      (-> (zip state'' #(-> % z/up (z/replace (z/node (:loc state'')))))
          (desc "Replace the entire form with the value of the " branch1 " branch.")))))

(defn bpair-steps [{:keys [loc] :as state}]
  (let [name (symbol (:text (z/node loc)))
        init-loc (z/right loc)
        init-steps (steps (go state init-loc))
        state' (last init-steps)
        value (extract-value (z/node (:loc state')))]
    (step-sequence
      (desc state "Bind the symbol " [:code (str name)] "...")
      (-> (go state init-loc)
          (desc "...to the result of evaluating this form."))
      (butlast init-steps)
      (locally-bind state' name (model/parse value)))))

(defn bvec-steps [{:keys [loc] :as original-state}]
  (loop [paths (->> loc z/node :children count range
                    (map (partial conj (:path loc))) (take-nth 2))
         state (update original-state :scopes conj {}) ; push new local scope
         the-steps ()]
    (if-let [path (first paths)]
      (let [more-steps (bpair-steps (assoc-in state [:loc :path] path))]
        (recur (rest paths) (last more-steps) (concat the-steps more-steps)))
      (step-sequence
        (desc original-state "Establish local bindings according to these binding pairs.")
        the-steps
        (-> (if-let [state' (last the-steps)] (zip state' z/up) state)
            (desc "Bindings established. Let's evaluate the body."))))))

(defmethod special-steps "let" [{:keys [loc] :as state}]
  (let [head-loc (z/down loc)
        bvec-steps (bvec-steps (go state (z/right head-loc)))
        body-steps (steps (zip (last bvec-steps) z/right))
        state' (last body-steps)]
    (step-sequence
      (-> (go state head-loc)
          (desc "It's a " [:code "let"] " form. Let's simplify."))
      bvec-steps
      body-steps
      (-> (zip state' #(-> % z/up (z/replace (z/node (:loc state')))))
          (desc "Replace the entire form with the value of its body.")
          (update :scopes pop)))))

(defn funcall-steps [{:keys [loc] :as state}]
  (let [fn-loc (z/down loc)]
    (if-let [user-fn (ensure (partial instance? UserFn) (:value (z/node fn-loc)))]
      (let [args (map (comp extract-value z/node) (z/followers fn-loc z/right))
            {:keys [params body]} (method-for-argc user-fn (count args))
            let-form `(~'let [~@(interleave params args)] ~@body)
            state' (-> (zip state z/replace (model/parse let-form))
                       (desc "Rewrite the function call as a " [:code "let"] " form."))]
        (cons state' (drop 2 (steps state'))))
      [(-> (zip state z/edit call-function)
           (desc "Call the function with the given arguments."))])))

(defn seq-steps [state]
  (step-sequence
    (desc state "Looks like a function call, or maybe a special form. Let's go deeper.")
    (if-let [special-steps* (get-method special-steps (head-text state))]
      (special-steps* state)
      (let [item-steps (steps* state)]
        (concat item-steps (funcall-steps (zip (last item-steps) z/up)))))))

(defn coll-steps [state]
  (let [item-steps (steps* state)]
    (step-sequence
      (desc state "This form is a collection. Let's take a look at its items.")
      item-steps
      (-> (zip (last item-steps) z/up)
          (desc "All items have been simplified. Let's move on.")))))

(defn program-steps [state]
  (let [top-level-steps (steps* state)]
    (step-sequence
      (desc state "Let's evaluate these forms step by step.")
      top-level-steps
      (-> (zip (last top-level-steps) z/up)
          (desc "Nothing left to simplify. Looks like our work here is done!")))))

(defn steps [state]
  (let [node (z/node (:loc state))]
    (if (fully-simplified? node)
      [(desc state "This form is completely simplified. Let's move on.")]
      (case (:type node)
        :symbol [(resolve state)]
        :seq (seq-steps state)
        (:map :set :vec) (coll-steps state)
        :program (program-steps state)))))

(defn init-state [forms]
  {:index 0 :steps (vec (steps (init-step forms)))})
