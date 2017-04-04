// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('stepwise.stdlib');
goog.require('cljs.core');
stepwise.stdlib.core_functions = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$println,cljs.core.cst$sym$inc,cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$_PLUS_,cljs.core.cst$sym$apply,cljs.core.cst$sym$range,cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$dec,cljs.core.cst$sym$str,cljs.core.cst$sym$_DASH_],[cljs.core.println,cljs.core.inc,cljs.core._SLASH_,cljs.core._PLUS_,cljs.core.apply,cljs.core.range,cljs.core._STAR_,cljs.core.dec,cljs.core.str,cljs.core._]);
stepwise.stdlib.core_defs = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (defs,p__14899){
var vec__14900 = p__14899;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14900,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14900,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(defs,sym,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$value,cljs.core.cst$kw$value,val,cljs.core.cst$kw$text,[cljs.core.str("cljs.core/"),cljs.core.str(sym)].join('')], null));
}),cljs.core.PersistentArrayMap.EMPTY,stepwise.stdlib.core_functions);
