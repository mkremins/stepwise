(ns stepwise.eval
  (:require [stepwise.model :as model]
            [xyzzy.core :as z]))

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
    :set (set (map extract-value children))
    :vec (mapv extract-value children)))

(defn call-function [{[f & args] :children}]
  (model/parse (apply (extract-value f) (map extract-value args))))

(defn resolve [{:keys [bindings loc] :as state}]
  (let [{:keys [text]} (z/node loc)]
    (-> state
        (update :loc z/replace (bindings (symbol text)))
        (assoc :desc ["Replace the symbol " [:code text] " by its value."]))))

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
           (update :loc #(-> % z/up (z/replace {:type :value :text "#'user/x"})))
           (assoc-in [:bindings name]
             {:type :value :value value :text (str "user/" name)})
           (assoc :desc ["Establish the new binding in the current namespace."]))])))

(defn seq-steps [state]
  (concat
    [(assoc state :desc ["Looks like a function call, or maybe a special form. Let's go deeper."])]
    (if-let [special-steps* (get-method special-steps (head-text state))]
      (special-steps* state)
      (let [item-steps (steps* state)]
        (concat
          item-steps
          [(-> (last item-steps)
               (update :loc #(-> % z/up (z/edit call-function)))
               (assoc :desc ["Call the function with the given arguments."]))])))))

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
      [(assoc state :desc ["This form is already completely simplified. Let's move on."])]
      (case (:type node)
        :symbol [(resolve state)]
        :seq (seq-steps state)
        (:map :set :vec) (coll-steps state)
        :program (program-steps state)))))
