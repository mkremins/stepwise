(ns stepwise.eval
  (:require [stepwise.model :as model]
            [stepwise.stdlib :as stdlib]
            [stepwise.util :refer [ensure]]
            [xyzzy.core :as z]))

(defn init-step [forms]
  {:loc (model/zipper forms) :defs stdlib/core-defs :scopes []})

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
    (desc (zip state z/replace (or (lookup-local state sym) (defs sym)))
          "Replace the symbol " [:code text] " by its value.")))

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
  (let [head (z/down loc)
        name (z/right head)
        var (symbol (:text (z/node name)))
        init (z/right name)
        init-steps (steps (go state init))
        state' (last init-steps)
        value (extract-value (z/node (:loc state')))]
    (step-sequence
      (desc (go state head) "It's a " [:code "def"] " form. Let's define a new var.")
      (desc (go state name) "The var's name will be " [:code (str var)] "...")
      (desc (go state init) "...and its value will be the result of evaluating this form.")
      init-steps
      (desc (-> (zip state' #(-> % z/up (z/replace {:type :value :text (str "#'user/" var)})))
                (assoc-in [:defs var] {:type :value :value value :text (str "user/" var)}))
            "Establish the new binding in the current namespace."))))

(defn- human-readable-number [n]
  (case n 0 "zero" 1 "one" 2 "two" 3 "three" 4 "four"
          5 "five" 6 "six" 7 "seven" 8 "eight" 9 "nine"
          (str n)))

(defmethod special-steps "fn" [{:keys [loc] :as state}]
  (let [head (z/down loc)
        next (z/right head)
        local (when (= (:type (z/node next)) :symbol) next)
        name (when local (:text (z/node local)))
        methods (cond-> (z/followers head z/right) local rest)
        parse-method (comp #(-> {:params (first %) :body (rest %)}) :value z/node)
        fn-node {:type :value :value (UserFn. (map parse-method methods))
                 :text (str "#<fn " (or name (gensym "f")) ">")}]
    (step-sequence
      (desc (go state head) "It's a " [:code "fn"] " form. Let's define a function.")
      (when-let [state' (when local (go state local))]
        [(desc state' "This function has the local name " [:code name] ".")
         (desc state' "Within the function body, " [:code name] " refers to the function itself.")])
      (for [method methods
            :let [argc (count (:children (z/node (z/down method))))]]
        (desc (go state method) "Define a method that takes " (human-readable-number argc)
                                " " (if (= argc 1) "argument" "arguments") "."))
      (desc (zip state z/replace fn-node)
            "Replace the entire " [:code "fn"] " form with the newly defined function."))))

(defmethod special-steps "if" [{:keys [loc] :as state}]
  (let [head (z/down loc)
        test (z/right head)
        test-steps (steps (go state test))
        state' (last test-steps)
        test-value (extract-value (z/node (:loc state')))
        [truthy branch1 branch2] (if test-value ["truthy" "first" "second"]
                                                ["falsey" "second" "first"])
        branch (cond-> (z/right (:loc state')) (not test-value) z/right)
        branch-steps (steps (go state' branch))
        state'' (last branch-steps)]
    (step-sequence
      (desc (go state head) "It's an " [:code "if"] " form. Let's simplify.")
      (desc (go state test) "Evaluate the condition to determine which branch to take.")
      test-steps
      (desc state' "The condition is " truthy ". Evaluate the " branch1
                   " branch and ignore the " branch2 ".")
      branch-steps
      (desc (zip state'' #(-> % z/up (z/replace (z/node (:loc state'')))))
            "Replace the entire " [:code "if"] " form with the value of the " branch1 " branch."))))

(defn bpair-steps [{:keys [loc] :as state}]
  (let [name (symbol (:text (z/node loc)))
        init (z/right loc)
        init-steps (steps (go state init))
        state' (last init-steps)
        value (extract-value (z/node (:loc state')))]
    (step-sequence
      (desc state "Bind the symbol " [:code (str name)] "...")
      (desc (go state init) "...to the result of evaluating this form.")
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
        (desc (if-let [state' (last the-steps)] (zip state' z/up) state)
              "Bindings established. Let's evaluate the body.")))))

(defmethod special-steps "let" [{:keys [loc] :as state}]
  (let [head (z/down loc)
        bvec-steps (bvec-steps (go state (z/right head)))
        body-steps (steps (zip (last bvec-steps) z/right))
        state' (last body-steps)]
    (step-sequence
      (desc (go state head) "It's a " [:code "let"] " form. Let's simplify.")
      bvec-steps
      body-steps
      (desc (-> (zip state' #(-> % z/up (z/replace (z/node (:loc state')))))
                (update :scopes pop))
            "Replace the entire " [:code "let"] " form with the value of its body."))))

(defn funcall-steps [{:keys [loc] :as state}]
  (let [func (z/down loc)]
    (if-let [user-fn (ensure (partial instance? UserFn) (:value (z/node func)))]
      (let [args (map (comp extract-value z/node) (z/followers func z/right))
            {:keys [params body]} (method-for-argc user-fn (count args))
            let-form `(~'let [~@(interleave params args)] ~@body)
            state' (desc (zip state z/replace (model/parse let-form))
                         "Rewrite the function call as a " [:code "let"] " form.")]
        (cons state' (drop 2 (steps state'))))
      [(desc state "Call the function " [:code (:text (z/node func))] " with the given arguments...")
       (desc (zip state z/edit call-function)
             "...and replace the entire function call with its return value.")])))

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
      (desc (zip (last item-steps) z/up) "All items have been simplified. Let's move on."))))

(defn program-steps [state]
  (let [top-level-steps (steps* state)]
    (step-sequence
      (desc state "Let's evaluate these forms step by step.")
      top-level-steps
      (desc (zip (last top-level-steps) z/up)
            "Nothing left to simplify. Looks like our work here is done!"))))

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
