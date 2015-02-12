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

(def default-examples
  [[["Calling functions"]
    '[(println "Hello world!")
      (apply + [1 2 (- 10 7) 4 5])]]

   [["The " [:code "if"] " special form"]
    '[(if (+ 1 1) (* 3 5) :nope)
      (if nil (+ 42 11 13) 0)]]

   [["The " [:code "def"] " and " [:code "let"] " special forms"]
    '[(def foo 5)
      (let [foo (+ 1 2 3) bar (- foo 4)] (* foo bar))
      foo]]])

(def app-state
  (atom {:index 0
         :examples (mapv #(assoc (eval/init-state (second %)) :title (first %))
                         default-examples)}))

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

(defcomponent example [data owner]
  (render [_]
    (let [{:keys [index steps title]} data
          last-index (dec (count steps))
          step (nth steps index)]
      (dom/div
        (dom/h2 {:class "title"}
          (for [part title]
            (if (= (first part) :code)
              (dom/code (second part))
              (dom/span part))))
        (om/build forms (:loc step))
        (dom/p {:class "description"}
          (for [part (:desc step)]
            (if (= (first part) :code)
              (dom/code (second part))
              (dom/span part))))
        (dom/input
          {:type "range" :min 0 :max last-index :value index
           :on-change #(om/update! data :index
                         (js/parseInt (.. % -target -value) 10))})
        (dom/button (if (<= index 0)
                      {:disabled true}
                      {:on-click #(om/transact! data :index dec)})
          "<< Prev")
        (dom/span {:class "counter"} (str (inc index) " / " (inc last-index)))
        (dom/button (if (>= index last-index)
                      {:disabled true}
                      {:on-click #(om/transact! data :index inc)})
          "Next >>")))))

(defcomponent view [data owner]
  (render [_]
    (let [{:keys [index examples]} data]
      (dom/div
        (dom/div {:class "menu"}
          (dom/strong "Examples:")
          (for [n (range (count examples))]
            (if (= n index)
              (dom/span (str (inc n)))
              (dom/a {:href "#" :on-click #(om/update! data :index n)}
                (str (inc n))))))
        (om/build example (nth examples index))))))

(om/root view app-state {:target (.getElementById js/document "app")})
