(ns stepwise.stdlib)

(def core-functions
  {'+ +
   '- -
   '* *
   '/ /
   'apply apply
   'dec dec
   'inc inc
   'println println
   'range range
   'str str})

(def core-defs
  (reduce (fn [defs [sym val]]
            (assoc defs sym {:type :value :value val :text (str "cljs.core/" sym)}))
          {} core-functions))
