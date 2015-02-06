(ns stepwise.app
  (:require [clojure.string :as str]
            [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]
            [stepwise.eval :as eval]
            [stepwise.model :as model]
            [stepwise.layout :as layout]
            [xyzzy.core :as z]))

(enable-console-print!)

(def app-state
  (atom {:loc (model/zipper '[(println "Hello world!")
                              (apply + [1 2 (- 10 7) 4 5])])
         :bindings {'+ {:type :value :value + :text "cljs.core/+"}
                    '- {:type :value :value - :text "cljs.core/-"}
                    'apply {:type :value :value apply :text "cljs.core/apply"}
                    'println {:type :value :value println :text "cljs.core/println"}}
         :desc ["Let's evaluate these forms step by step."]}))

(defcomponent atom* [form owner]
  (render [_]
    (dom/div {:class (cond-> (str "atom " (name (:type form)))
                             (:selected? form) (str " selected"))}
      (dom/span (:text form)))))

(defcomponent stringlike [form owner]
  (render [_]
    (dom/div {:class (cond-> (str "stringlike " (name (:type form)))
                             (:selected? form) (str " selected"))
              :style {:max-width (str (/ (:max-width form) 2) "rem")}}
      (map #(dom/span {:class "char"} %) (:text form)))))

(defcomponent delimiter [token owner]
  (render [_]
    (dom/span {:class (str/join \space (map name (:classes token)))}
      (:text token))))

(defcomponent top-level-form [form owner]
  (render [_]
    (dom/div {:class "toplevel"}
      (for [line (layout/->lines form 80)]
        (dom/div {:class "line"}
          (for [token line]
            (condp #(%1 %2) token
              layout/spacer? (dom/span {:class "spacer"} (:text token))
              layout/delimiter? (om/build delimiter token)
              model/stringlike? (om/build stringlike token)
              (om/build atom* token))))))))

(defcomponent forms [loc owner]
  (render [_]
    (let [{:keys [tree]} (z/assoc loc :selected? true)]
      (dom/div {:class "forms"}
        (om/build-all top-level-form (:children tree))))))

(defcomponent view [data owner]
  (render [_]
    (dom/div
      (om/build forms (:loc data))
      (dom/p {:class "description"}
        (for [part (:desc data)]
          (if (= (first part) :code)
            (dom/code (second part))
            (dom/span part))))
      (dom/button {:on-click #(om/transact! data eval/step)} "Step >>"))))

(om/root view app-state {:target (.getElementById js/document "app")})
