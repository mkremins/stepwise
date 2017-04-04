(defproject mkremins/stepwise "0.0-SNAPSHOT"
  :dependencies
  [[org.clojure/clojure "1.8.0"]
   [org.clojure/clojurescript "1.7.228"]
   [org.clojure/tools.reader "1.0.0-alpha4"]
   [org.omcljs/om "0.8.8"]
   [prismatic/om-tools "0.3.12"]
   [mkremins/xyzzy "0.3.4"]]
  
  :plugins
  [[lein-cljsbuild "1.1.3"]]
  
  :cljsbuild
  {:builds [{:source-paths ["src"]
             :compiler {:main stepwise.app
                        :output-dir "docs/js"
                        :output-to "docs/js/stepwise.js"
                        :optimizations :advanced}}]})
