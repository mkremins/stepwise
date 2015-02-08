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

(defn seq-steps [state]
  (let [item-steps (steps* state)]
    (concat
      [(assoc state :desc ["Looks like a function call, or maybe a special form. Let's go deeper."])]
      item-steps
      [(-> (last item-steps)
           (update :loc #(-> % z/up (z/edit call-function)))
           (assoc :desc ["Call the function with the given arguments."]))])))

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
