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

(defn call-function [{[f & args] :children}]
  (model/parse (apply (:value f) (map :value args))))

(defn advance [{:keys [loc] :as interpreter}]
  (when-let [loc' ((some-fn z/down z/right z/up) loc)]
    (assoc interpreter :loc loc')))

(defn resolve [{:keys [loc bindings] :as interpreter}]
  (let [{:keys [text]} (z/node loc)
        value (bindings (symbol text))]
    (-> interpreter
        (update :loc z/replace value)
        (assoc :desc (str "Replace the symbol `" text "` by its value.")))))

(defn step-seq [{:keys [loc] :as interpreter}]
  (if (every? fully-simplified? (:children (z/node loc)))
    (-> interpreter
        (update :loc z/edit call-function)
        (assoc :desc "Call the function with the given arguments."))
    (assoc interpreter
      :desc "Looks like a function call, or maybe a special form. Let's go deeper.")))

(defn step-coll [interpreter]
  (assoc interpreter
    :desc "This form is a collection. Let's take a look at its items."))

(defn step [interpreter]
  (if-let [{:keys [loc] :as next} (advance interpreter)]
    (let [{:keys [children type] :as node} (z/node loc)]
      (if (fully-simplified? node)
        (assoc next
          :desc "This form is already completely simplified. Let's move on.")
        (case type
          :symbol (resolve next)
          :seq (step-seq next)
          (:map :set :vec) (step-coll next))))
    (assoc interpreter
      :desc "Nothing left to simplify. Looks like our work here is done!")))
