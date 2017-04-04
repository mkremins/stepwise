// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('om_tools.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('plumbing.fnk.schema');
goog.require('plumbing.core');
goog.require('schema.core');
/**
 * Returns an atom-like object for reading and writing Om component
 * state.
 * 
 * Note: Behavior may exactly not match atoms when deref'ing
 * immediately following a reset!/swap! because Om processes state
 * changes asynchronously in separate render phases.
 */
om_tools.core.state_proxy = (function om_tools$core$state_proxy(owner){
if(cljs.core.truth_(owner)){
var get_state = (function (){
return om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
});
if(typeof om_tools.core.t_om_tools$core20102 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
om_tools.core.t_om_tools$core20102 = (function (state_proxy,owner,get_state,meta20103){
this.state_proxy = state_proxy;
this.owner = owner;
this.get_state = get_state;
this.meta20103 = meta20103;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 98304;
})
om_tools.core.t_om_tools$core20102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (get_state){
return (function (_20104,meta20103__$1){
var self__ = this;
var _20104__$1 = this;
return (new om_tools.core.t_om_tools$core20102(self__.state_proxy,self__.owner,self__.get_state,meta20103__$1));
});})(get_state))
;

om_tools.core.t_om_tools$core20102.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (get_state){
return (function (_20104){
var self__ = this;
var _20104__$1 = this;
return self__.meta20103;
});})(get_state))
;

om_tools.core.t_om_tools$core20102.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (get_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return (self__.get_state.cljs$core$IFn$_invoke$arity$0 ? self__.get_state.cljs$core$IFn$_invoke$arity$0() : self__.get_state.call(null));
});})(get_state))
;

om_tools.core.t_om_tools$core20102.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = ((function (get_state){
return (function (_,v){
var self__ = this;
var ___$1 = this;
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(self__.owner,v);
});})(get_state))
;

om_tools.core.t_om_tools$core20102.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = ((function (get_state){
return (function (s,f){
var self__ = this;
var s__$1 = this;
return cljs.core._reset_BANG_(s__$1,(function (){var G__20105 = (self__.get_state.cljs$core$IFn$_invoke$arity$0 ? self__.get_state.cljs$core$IFn$_invoke$arity$0() : self__.get_state.call(null));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20105) : f.call(null,G__20105));
})());
});})(get_state))
;

om_tools.core.t_om_tools$core20102.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = ((function (get_state){
return (function (s,f,x){
var self__ = this;
var s__$1 = this;
return cljs.core._reset_BANG_(s__$1,(function (){var G__20106 = (self__.get_state.cljs$core$IFn$_invoke$arity$0 ? self__.get_state.cljs$core$IFn$_invoke$arity$0() : self__.get_state.call(null));
var G__20107 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20106,G__20107) : f.call(null,G__20106,G__20107));
})());
});})(get_state))
;

om_tools.core.t_om_tools$core20102.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = ((function (get_state){
return (function (s,f,x,y){
var self__ = this;
var s__$1 = this;
return cljs.core._reset_BANG_(s__$1,(function (){var G__20108 = (self__.get_state.cljs$core$IFn$_invoke$arity$0 ? self__.get_state.cljs$core$IFn$_invoke$arity$0() : self__.get_state.call(null));
var G__20109 = x;
var G__20110 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__20108,G__20109,G__20110) : f.call(null,G__20108,G__20109,G__20110));
})());
});})(get_state))
;

om_tools.core.t_om_tools$core20102.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = ((function (get_state){
return (function (s,f,x,y,more){
var self__ = this;
var s__$1 = this;
return cljs.core._reset_BANG_(s__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(self__.get_state.cljs$core$IFn$_invoke$arity$0 ? self__.get_state.cljs$core$IFn$_invoke$arity$0() : self__.get_state.call(null)),x,y,more));
});})(get_state))
;

om_tools.core.t_om_tools$core20102.getBasis = ((function (get_state){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$state_DASH_proxy,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$owner], null))),cljs.core.cst$kw$doc,"Returns an atom-like object for reading and writing Om component\n   state.\n\n   Note: Behavior may exactly not match atoms when deref'ing\n   immediately following a reset!/swap! because Om processes state\n   changes asynchronously in separate render phases."], null)),cljs.core.cst$sym$owner,cljs.core.cst$sym$get_DASH_state,cljs.core.cst$sym$meta20103], null);
});})(get_state))
;

om_tools.core.t_om_tools$core20102.cljs$lang$type = true;

om_tools.core.t_om_tools$core20102.cljs$lang$ctorStr = "om-tools.core/t_om_tools$core20102";

om_tools.core.t_om_tools$core20102.cljs$lang$ctorPrWriter = ((function (get_state){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"om-tools.core/t_om_tools$core20102");
});})(get_state))
;

om_tools.core.__GT_t_om_tools$core20102 = ((function (get_state){
return (function om_tools$core$state_proxy_$___GT_t_om_tools$core20102(state_proxy__$1,owner__$1,get_state__$1,meta20103){
return (new om_tools.core.t_om_tools$core20102(state_proxy__$1,owner__$1,get_state__$1,meta20103));
});})(get_state))
;

}

return (new om_tools.core.t_om_tools$core20102(om_tools$core$state_proxy,owner,get_state,cljs.core.PersistentArrayMap.EMPTY));
} else {
return null;
}
});
/**
 * Calls om.core/set-state! when current value not= to v and returns
 * updated owner, otherwise nil.
 * Used to prevent no-op updates from entering render queue
 */
om_tools.core.set_state_QMARK__BANG_ = (function om_tools$core$set_state_QMARK__BANG_(var_args){
var args20111 = [];
var len__7214__auto___20114 = arguments.length;
var i__7215__auto___20115 = (0);
while(true){
if((i__7215__auto___20115 < len__7214__auto___20114)){
args20111.push((arguments[i__7215__auto___20115]));

var G__20116 = (i__7215__auto___20115 + (1));
i__7215__auto___20115 = G__20116;
continue;
} else {
}
break;
}

var G__20113 = args20111.length;
switch (G__20113) {
case 2:
return om_tools.core.set_state_QMARK__BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om_tools.core.set_state_QMARK__BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20111.length)].join('')));

}
});

om_tools.core.set_state_QMARK__BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner))){
return null;
} else {
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,v);
}
});

om_tools.core.set_state_QMARK__BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks))){
return null;
} else {
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,v);
}
});

om_tools.core.set_state_QMARK__BANG_.cljs$lang$maxFixedArity = 3;
