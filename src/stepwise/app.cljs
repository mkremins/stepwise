(ns stepwise.app
  (:require [clojure.string :as str]
            [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]
            [stepwise.eval :as eval]
            [stepwise.model :as model]
            [stepwise.layout :as layout]
            [stepwise.util :refer [value]]
            [xyzzy.core :as z]))

(enable-console-print!)

(defn update-code [state new-code]
  (merge (dissoc state :error) (eval/init-state new-code)))

(def default-examples
  [(update-code {:title ["Calling functions"]}
     "(println \"Hello world!\")\n\n(apply + [1 2 (- 10 7) 4 5])")

   (update-code {:title ["The " [:code "if"] " special form"]}
     "(if (+ 1 1) (* 3 5) :nope)\n\n(if nil (+ 42 11 13) 0)")

   (update-code {:title ["The " [:code "def"] " and " [:code "let"] " special forms"]}
     "(def foo 5)\n\n(let [foo (+ 1 2 3) bar (- foo 4)] (* foo bar))\n\nfoo")

   (update-code {:title ["Nested " [:code "let"] " forms"]}
"(let [foo (apply + (range 10))
      bar (* foo 10)]
  (let [foo (dec bar)
        baz (inc foo)]
    (* foo bar baz)))")

   (update-code {:title ["User-defined functions"]}
"(def greet
  (fn greet
    ([] (greet \"world\"))
    ([name] (str \"Hello, \" name \"!\"))))

(greet \"Max\")

(greet)")])

(def app-state
  (atom {:index 0 :examples default-examples}))

(defcomponent atom* [form owner]
  (render [_]
    (dom/div {:class (cond-> (str "atom " (name (:type form)))
                             (:selected? form) (str " selected")
                             (:head? form) (str " head"))}
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
      (for [line (layout/->lines form 60)]
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

(defcomponent stepper [data owner]
  (render [_]
    (let [{:keys [index steps]} data
          last-index (dec (count steps))
          step (nth steps index)]
      (dom/div
        (om/build forms (:loc step))
        (dom/p {:class "description"}
          (for [part (:desc step)]
            (if (= (first part) :code)
              (dom/code (second part))
              (dom/span part))))
        (dom/input
          {:type "range" :min 0 :max last-index :value index
           :on-change #(om/update! data :index (js/parseInt (value %) 10))})
        (dom/button (if (<= index 0)
                      {:disabled true}
                      {:on-click #(om/transact! data :index dec)})
          "<< Prev")
        (dom/span {:class "counter"} (str (inc index) " / " (inc last-index)))
        (dom/button (if (>= index last-index)
                      {:disabled true}
                      {:on-click #(om/transact! data :index inc)})
          "Next >>")))))

(defcomponent explanation [data owner]
  (render [_]
    (let [{:keys [code error title] :or {title ["Sandbox"]}} data]
      (dom/div
        (dom/h2 {:class "title"}
          (for [part title]
            (if (= (first part) :code)
              (dom/code (second part))
              (dom/span part))))
        (dom/textarea
          {:on-change (fn [ev] (om/transact! data #(update-code % (value ev))))
           :placeholder "Enter code to explain here..."
           :value code})
        (if error
          (dom/p {:class "error"} error)
          (om/build stepper data))))))

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
        (om/build explanation (nth examples index))))))

(om/root view app-state {:target (.getElementById js/document "app")})
