// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('stepwise.util');
goog.require('cljs.core');
/**
 * Takes two arguments: a predicate `pred` and a value `x`. If `(pred x)` is
 *   truthy, returns `x`; otherwise, returns nil.
 * 
 *   Use with `if-let` and `when-let` to conditionally bind values to names.
 *   `(when-let [foo (ensure seq? (get-some-value))] (do-something foo))` will
 *   only bind `foo` if `get-some-value` returns a seq.
 * 
 *   Implicitly curried: `(ensure pred)` expands to `(partial ensure pred)`.
 */
stepwise.util.ensure = (function stepwise$util$ensure(var_args){
var args19421 = [];
var len__7214__auto___19424 = arguments.length;
var i__7215__auto___19425 = (0);
while(true){
if((i__7215__auto___19425 < len__7214__auto___19424)){
args19421.push((arguments[i__7215__auto___19425]));

var G__19426 = (i__7215__auto___19425 + (1));
i__7215__auto___19425 = G__19426;
continue;
} else {
}
break;
}

var G__19423 = args19421.length;
switch (G__19423) {
case 1:
return stepwise.util.ensure.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stepwise.util.ensure.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19421.length)].join('')));

}
});

stepwise.util.ensure.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(stepwise.util.ensure,pred);
});

stepwise.util.ensure.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return x;
} else {
return null;
}
});

stepwise.util.ensure.cljs$lang$maxFixedArity = 2;
/**
 * Returns the value of the target of a JS input event.
 */
stepwise.util.value = (function stepwise$util$value(ev){
return ev.target.value;
});
