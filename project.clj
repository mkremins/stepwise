(defproject stepwise "0.0-SNAPSHOT"
  :dependencies
  [[org.clojure/clojure "1.6.0"]
   [org.clojure/clojurescript "0.0-2760"]
   [org.omcljs/om "0.8.6"]
   [prismatic/om-tools "0.3.10"]
   [mkremins/xyzzy "0.3.3"]]
  
  :plugins
  [[lein-cljsbuild "1.0.4"]]
  
  :cljsbuild
  {:builds [{:source-paths ["src"]
             :compiler {:main stepwise.app
                        :output-dir "target"
                        :output-to "target/stepwise.js"
                        :source-map true
                        :optimizations :none}}]})
