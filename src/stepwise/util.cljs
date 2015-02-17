(ns stepwise.util)

(defn ensure
  "Takes two arguments: a predicate `pred` and a value `x`. If `(pred x)` is
  truthy, returns `x`; otherwise, returns nil.

  Use with `if-let` and `when-let` to conditionally bind values to names.
  `(when-let [foo (ensure seq? (get-some-value))] (do-something foo))` will
  only bind `foo` if `get-some-value` returns a seq.

  Implicitly curried: `(ensure pred)` expands to `(partial ensure pred)`."
  ([pred] (partial ensure pred))
  ([pred x] (when (pred x) x)))
