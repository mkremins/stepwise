(ns stepwise.model
  (:refer-clojure
    :exclude [coll? fn? keyword? map? nil? number? seq? set? string? symbol?])
  (:require [clojure.string :as str]
            [xyzzy.core :as z]))

(defn unwrap [m]
  (or (z/node m) m))

(defn type-pred [& types]
  (comp (set types) :type unwrap))

(def atom? (type-pred :bool :keyword :nil :number :symbol))
(def bool? (type-pred :bool))
(def coll? (type-pred :fn :map :seq :set :vec))
(def fn? (type-pred :fn))
(def keyword? (type-pred :keyword))
(def map? (type-pred :map))
(def nil? (type-pred :nil))
(def nonempty? (comp seq :children unwrap))
(def number? (type-pred :number))
(def regex? (type-pred :regex))
(def seq? (type-pred :seq))
(def set? (type-pred :set))
(def string? (type-pred :string))
(def stringlike? (type-pred :regex :string))
(def symbol? (type-pred :symbol))
(def vec? (type-pred :vec))

(defn classify [x]
  (condp #(%1 %2) x
    (some-fn true? false?) :bool
    cljs.core/keyword? :keyword
    cljs.core/map? :map
    cljs.core/nil? :nil
    cljs.core/number? :number
    #(instance? js/RegExp %) :regex
    cljs.core/seq? :seq
    cljs.core/set? :set
    cljs.core/string? :string
    cljs.core/symbol? :symbol
    vector? :vec))

(defn parse
  "Returns the parse tree representation of a single Clojure `form`. A parse
  tree node is a map containing at minimum a `:type` keyword and either a
  `:text` string (if representing an atom) or a `:children` vector (if
  representing a collection)."
  [form]
  (let [type (classify form)]
    (merge {:type type :value form}
      (case type
        (:bool :keyword :number :string :symbol) {:text (str form)}
        :nil {:text "nil"}
        (:seq :set :vec) {:children (mapv parse form)}
        :map {:children (mapv parse (interleave (keys form) (vals form)))}
        :regex {:text (.-source form)}))))

(defn zipper [forms]
  {:path [] :tree {:type :program :children (mapv parse forms)}})

(defn opener [type]
  (case type
    :fn "#(" :map "{" :seq "(" :set "#{" :vec "[" :string "\"" :regex "#\""))

(defn closer [type]
  (case type
    (:fn :seq) ")" (:map :set) "}" :vec "]" (:string :regex) "\""))

(defn stringify [{:keys [type] :as node}]
  (condp #(%1 %2) node
    coll?
      (str (opener type)
           (str/join \space (map stringify (:children node)))
           (closer type))
    stringlike?
      (str (opener type) (:text node) (closer type))
    (:text node)))
