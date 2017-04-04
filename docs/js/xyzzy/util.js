// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('xyzzy.util');
goog.require('cljs.core');
/**
 * Deletes the item at `idx` in the vector `v`.
 */
xyzzy.util.delete$ = (function xyzzy$util$delete(v,idx){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(v),(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,(0)))){
return cljs.core.empty(v);
} else {
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),idx),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(idx + (1)))));
}
});
/**
 * Inserts `item` into vector `v` at `idx`, pushing whatever was already at
 * `idx` one slot to the right.
 */
xyzzy.util.insert = (function xyzzy$util$insert(v,idx,item){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.conj,cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),idx),item,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,idx));
});
