// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('stepwise.eval');
goog.require('cljs.core');
goog.require('stepwise.stdlib');
goog.require('stepwise.model');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.reader_types');
goog.require('stepwise.util');
goog.require('xyzzy.core');
stepwise.eval.init_step = (function stepwise$eval$init_step(forms){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$loc,stepwise.model.zipper(forms),cljs.core.cst$kw$defs,stepwise.stdlib.core_defs,cljs.core.cst$kw$scopes,cljs.core.PersistentVector.EMPTY], null);
});
stepwise.eval.fully_simplified_QMARK_ = (function stepwise$eval$fully_simplified_QMARK_(p__20198){
var map__20202 = p__20198;
var map__20202__$1 = ((((!((map__20202 == null)))?((((map__20202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20202):map__20202);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20202__$1,cljs.core.cst$kw$children);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20202__$1,cljs.core.cst$kw$type);
var G__20204 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20204) {
case "vec":
return cljs.core.every_QMARK_(stepwise$eval$fully_simplified_QMARK_,children);

break;
case "number":
return true;

break;
case "symbol":
return false;

break;
case "value":
return true;

break;
case "string":
return true;

break;
case "keyword":
return true;

break;
case "nil":
return true;

break;
case "regex":
return true;

break;
case "bool":
return true;

break;
case "seq":
return cljs.core.empty_QMARK_(children);

break;
case "set":
return cljs.core.every_QMARK_(stepwise$eval$fully_simplified_QMARK_,children);

break;
case "program":
return cljs.core.every_QMARK_(stepwise$eval$fully_simplified_QMARK_,children);

break;
case "map":
return cljs.core.every_QMARK_(stepwise$eval$fully_simplified_QMARK_,children);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
});
stepwise.eval.extract_value = (function stepwise$eval$extract_value(p__20206){
var map__20210 = p__20206;
var map__20210__$1 = ((((!((map__20210 == null)))?((((map__20210.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20210.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20210):map__20210);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20210__$1,cljs.core.cst$kw$children);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20210__$1,cljs.core.cst$kw$type);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20210__$1,cljs.core.cst$kw$value);
var G__20212 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20212) {
case "vec":
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(stepwise$eval$extract_value,children);

break;
case "number":
return value;

break;
case "value":
return value;

break;
case "string":
return value;

break;
case "keyword":
return value;

break;
case "nil":
return value;

break;
case "regex":
return value;

break;
case "bool":
return value;

break;
case "seq":
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(stepwise$eval$extract_value,children);

break;
case "set":
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(stepwise$eval$extract_value,children));

break;
case "map":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.map.cljs$core$IFn$_invoke$arity$2(stepwise$eval$extract_value,children));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
});
stepwise.eval.call_function = (function stepwise$eval$call_function(p__20214){
var map__20218 = p__20214;
var map__20218__$1 = ((((!((map__20218 == null)))?((((map__20218.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20218.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20218):map__20218);
var vec__20219 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20218__$1,cljs.core.cst$kw$children);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20219,(0),null);
var args = cljs.core.nthnext(vec__20219,(1));
return stepwise.model.parse(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(stepwise.eval.extract_value(f),cljs.core.map.cljs$core$IFn$_invoke$arity$2(stepwise.eval.extract_value,args)));
});
stepwise.eval.locally_bind = (function stepwise$eval$locally_bind(state,sym,value){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$scopes,(function (p1__20221_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(p1__20221_SHARP_),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.peek(p1__20221_SHARP_),sym,value));
}));
});
/**
 * Sentinel value used by `lookup-local` and `resolve` to indicate that a
 *   symbol is not bound to any value.
 */
stepwise.eval.undefined = (new Object());
stepwise.eval.lookup_local = (function stepwise$eval$lookup_local(p__20223,sym){
var map__20226 = p__20223;
var map__20226__$1 = ((((!((map__20226 == null)))?((((map__20226.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20226.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20226):map__20226);
var scopes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20226__$1,cljs.core.cst$kw$scopes);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__20226,map__20226__$1,scopes){
return (function (p1__20222_SHARP_){
return cljs.core.contains_QMARK_(p1__20222_SHARP_,sym);
});})(map__20226,map__20226__$1,scopes))
,cljs.core.reverse(scopes))),sym,stepwise.eval.undefined);
});
stepwise.eval.desc = (function stepwise$eval$desc(var_args){
var args__7221__auto__ = [];
var len__7214__auto___20230 = arguments.length;
var i__7215__auto___20231 = (0);
while(true){
if((i__7215__auto___20231 < len__7214__auto___20230)){
args__7221__auto__.push((arguments[i__7215__auto___20231]));

var G__20232 = (i__7215__auto___20231 + (1));
i__7215__auto___20231 = G__20232;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return stepwise.eval.desc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

stepwise.eval.desc.cljs$core$IFn$_invoke$arity$variadic = (function (state,parts){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$desc,parts);
});

stepwise.eval.desc.cljs$lang$maxFixedArity = (1);

stepwise.eval.desc.cljs$lang$applyTo = (function (seq20228){
var G__20229 = cljs.core.first(seq20228);
var seq20228__$1 = cljs.core.next(seq20228);
return stepwise.eval.desc.cljs$core$IFn$_invoke$arity$variadic(G__20229,seq20228__$1);
});
stepwise.eval.go = (function stepwise$eval$go(state,loc){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$loc,loc);
});
stepwise.eval.zip = (function stepwise$eval$zip(var_args){
var args__7221__auto__ = [];
var len__7214__auto___20236 = arguments.length;
var i__7215__auto___20237 = (0);
while(true){
if((i__7215__auto___20237 < len__7214__auto___20236)){
args__7221__auto__.push((arguments[i__7215__auto___20237]));

var G__20238 = (i__7215__auto___20237 + (1));
i__7215__auto___20237 = G__20238;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((2) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((2)),(0))):null);
return stepwise.eval.zip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7222__auto__);
});

stepwise.eval.zip.cljs$core$IFn$_invoke$arity$variadic = (function (state,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update,state,cljs.core.cst$kw$loc,f,args);
});

stepwise.eval.zip.cljs$lang$maxFixedArity = (2);

stepwise.eval.zip.cljs$lang$applyTo = (function (seq20233){
var G__20234 = cljs.core.first(seq20233);
var seq20233__$1 = cljs.core.next(seq20233);
var G__20235 = cljs.core.first(seq20233__$1);
var seq20233__$2 = cljs.core.next(seq20233__$1);
return stepwise.eval.zip.cljs$core$IFn$_invoke$arity$variadic(G__20234,G__20235,seq20233__$2);
});
stepwise.eval.resolve = (function stepwise$eval$resolve(p__20239){
var map__20244 = p__20239;
var map__20244__$1 = ((((!((map__20244 == null)))?((((map__20244.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20244.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20244):map__20244);
var state = map__20244__$1;
var defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20244__$1,cljs.core.cst$kw$defs);
var loc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20244__$1,cljs.core.cst$kw$loc);
var map__20246 = xyzzy.core.node(loc);
var map__20246__$1 = ((((!((map__20246 == null)))?((((map__20246.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20246.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20246):map__20246);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20246__$1,cljs.core.cst$kw$text);
var sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(text);
var local = stepwise.eval.lookup_local(state,sym);
var value = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(local,stepwise.eval.undefined))?(defs.cljs$core$IFn$_invoke$arity$2 ? defs.cljs$core$IFn$_invoke$arity$2(sym,stepwise.eval.undefined) : defs.call(null,sym,stepwise.eval.undefined)):local);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,stepwise.eval.undefined)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("The symbol "),cljs.core.str(sym),cljs.core.str(" isn't bound to any value")].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return stepwise.eval.desc.cljs$core$IFn$_invoke$arity$variadic(stepwise.eval.zip.cljs$core$IFn$_invoke$arity$variadic(state,xyzzy.core.replace,cljs.core.array_seq([value], 0)),cljs.core.array_seq(["Replace the symbol ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,text], null)," by its value."], 0));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
stepwise.eval.UserFn = (function (methods$,__meta,__extmap,__hash){
this.methods$ = methods$;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
stepwise.eval.UserFn.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6770__auto__,k__6771__auto__){
var self__ = this;
var this__6770__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__6770__auto____$1,k__6771__auto__,null);
});

stepwise.eval.UserFn.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6772__auto__,k20249,else__6773__auto__){
var self__ = this;
var this__6772__auto____$1 = this;
var G__20251 = (((k20249 instanceof cljs.core.Keyword))?k20249.fqn:null);
switch (G__20251) {
case "methods":
return self__.methods$;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20249,else__6773__auto__);

}
});

stepwise.eval.UserFn.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6784__auto__,writer__6785__auto__,opts__6786__auto__){
var self__ = this;
var this__6784__auto____$1 = this;
var pr_pair__6787__auto__ = ((function (this__6784__auto____$1){
return (function (keyval__6788__auto__){
return cljs.core.pr_sequential_writer(writer__6785__auto__,cljs.core.pr_writer,""," ","",opts__6786__auto__,keyval__6788__auto__);
});})(this__6784__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__6785__auto__,pr_pair__6787__auto__,"#stepwise.eval.UserFn{",", ","}",opts__6786__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$methods,self__.methods$],null))], null),self__.__extmap));
});

stepwise.eval.UserFn.prototype.cljs$core$IIterable$ = true;

stepwise.eval.UserFn.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20248){
var self__ = this;
var G__20248__$1 = this;
return (new cljs.core.RecordIter((0),G__20248__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$methods], null),cljs.core._iterator(self__.__extmap)));
});

stepwise.eval.UserFn.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6768__auto__){
var self__ = this;
var this__6768__auto____$1 = this;
return self__.__meta;
});

stepwise.eval.UserFn.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6764__auto__){
var self__ = this;
var this__6764__auto____$1 = this;
return (new stepwise.eval.UserFn(self__.methods$,self__.__meta,self__.__extmap,self__.__hash));
});

stepwise.eval.UserFn.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6774__auto__){
var self__ = this;
var this__6774__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

stepwise.eval.UserFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6765__auto__){
var self__ = this;
var this__6765__auto____$1 = this;
var h__6591__auto__ = self__.__hash;
if(!((h__6591__auto__ == null))){
return h__6591__auto__;
} else {
var h__6591__auto____$1 = cljs.core.hash_imap(this__6765__auto____$1);
self__.__hash = h__6591__auto____$1;

return h__6591__auto____$1;
}
});

stepwise.eval.UserFn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6766__auto__,other__6767__auto__){
var self__ = this;
var this__6766__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6144__auto__ = other__6767__auto__;
if(cljs.core.truth_(and__6144__auto__)){
var and__6144__auto____$1 = (this__6766__auto____$1.constructor === other__6767__auto__.constructor);
if(and__6144__auto____$1){
return cljs.core.equiv_map(this__6766__auto____$1,other__6767__auto__);
} else {
return and__6144__auto____$1;
}
} else {
return and__6144__auto__;
}
})())){
return true;
} else {
return false;
}
});

stepwise.eval.UserFn.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6779__auto__,k__6780__auto__){
var self__ = this;
var this__6779__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$methods,null], null), null),k__6780__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__6779__auto____$1),self__.__meta),k__6780__auto__);
} else {
return (new stepwise.eval.UserFn(self__.methods$,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__6780__auto__)),null));
}
});

stepwise.eval.UserFn.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6777__auto__,k__6778__auto__,G__20248){
var self__ = this;
var this__6777__auto____$1 = this;
var pred__20252 = cljs.core.keyword_identical_QMARK_;
var expr__20253 = k__6778__auto__;
if(cljs.core.truth_((pred__20252.cljs$core$IFn$_invoke$arity$2 ? pred__20252.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$methods,expr__20253) : pred__20252.call(null,cljs.core.cst$kw$methods,expr__20253)))){
return (new stepwise.eval.UserFn(G__20248,self__.__meta,self__.__extmap,null));
} else {
return (new stepwise.eval.UserFn(self__.methods$,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6778__auto__,G__20248),null));
}
});

stepwise.eval.UserFn.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6782__auto__){
var self__ = this;
var this__6782__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$methods,self__.methods$],null))], null),self__.__extmap));
});

stepwise.eval.UserFn.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6769__auto__,G__20248){
var self__ = this;
var this__6769__auto____$1 = this;
return (new stepwise.eval.UserFn(self__.methods$,G__20248,self__.__extmap,self__.__hash));
});

stepwise.eval.UserFn.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6775__auto__,entry__6776__auto__){
var self__ = this;
var this__6775__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__6776__auto__)){
return cljs.core._assoc(this__6775__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6776__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6776__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__6775__auto____$1,entry__6776__auto__);
}
});

stepwise.eval.UserFn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$methods], null);
});

stepwise.eval.UserFn.cljs$lang$type = true;

stepwise.eval.UserFn.cljs$lang$ctorPrSeq = (function (this__6804__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"stepwise.eval/UserFn");
});

stepwise.eval.UserFn.cljs$lang$ctorPrWriter = (function (this__6804__auto__,writer__6805__auto__){
return cljs.core._write(writer__6805__auto__,"stepwise.eval/UserFn");
});

stepwise.eval.__GT_UserFn = (function stepwise$eval$__GT_UserFn(methods$){
return (new stepwise.eval.UserFn(methods$,null,null,null));
});

stepwise.eval.map__GT_UserFn = (function stepwise$eval$map__GT_UserFn(G__20250){
return (new stepwise.eval.UserFn(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(G__20250),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20250,cljs.core.cst$kw$methods),null));
});

stepwise.eval.method_for_argc = (function stepwise$eval$method_for_argc(user_fn,argc){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20256_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(p1__20256_SHARP_)),argc);
}),cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(user_fn)));
});
stepwise.eval.step_sequence = (function stepwise$eval$step_sequence(var_args){
var args__7221__auto__ = [];
var len__7214__auto___20259 = arguments.length;
var i__7215__auto___20260 = (0);
while(true){
if((i__7215__auto___20260 < len__7214__auto___20259)){
args__7221__auto__.push((arguments[i__7215__auto___20260]));

var G__20261 = (i__7215__auto___20260 + (1));
i__7215__auto___20260 = G__20261;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((0) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((0)),(0))):null);
return stepwise.eval.step_sequence.cljs$core$IFn$_invoke$arity$variadic(argseq__7222__auto__);
});

stepwise.eval.step_sequence.cljs$core$IFn$_invoke$arity$variadic = (function (steps){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__20257_SHARP_){
if((cljs.core.sequential_QMARK_(p1__20257_SHARP_)) || ((p1__20257_SHARP_ == null))){
return p1__20257_SHARP_;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20257_SHARP_], null);
}
}),cljs.core.array_seq([steps], 0));
});

stepwise.eval.step_sequence.cljs$lang$maxFixedArity = (0);

stepwise.eval.step_sequence.cljs$lang$applyTo = (function (seq20258){
return stepwise.eval.step_sequence.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20258));
});
stepwise.eval.steps_STAR_ = (function stepwise$eval$steps_STAR_(p__20263){
var map__20267 = p__20263;
var map__20267__$1 = ((((!((map__20267 == null)))?((((map__20267.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20267.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20267):map__20267);
var state = map__20267__$1;
var loc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20267__$1,cljs.core.cst$kw$loc);
var paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__20267,map__20267__$1,state,loc){
return (function (p1__20262_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(loc),p1__20262_SHARP_);
});})(map__20267,map__20267__$1,state,loc))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(xyzzy.core.node(loc)))));
var state__$1 = state;
var the_steps = cljs.core.List.EMPTY;
while(true){
var temp__4655__auto__ = cljs.core.first(paths);
if(cljs.core.truth_(temp__4655__auto__)){
var path = temp__4655__auto__;
var more_steps = (function (){var G__20269 = cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loc,cljs.core.cst$kw$path], null),path);
return (stepwise.eval.steps.cljs$core$IFn$_invoke$arity$1 ? stepwise.eval.steps.cljs$core$IFn$_invoke$arity$1(G__20269) : stepwise.eval.steps.call(null,G__20269));
})();
var G__20270 = cljs.core.rest(paths);
var G__20271 = cljs.core.last(more_steps);
var G__20272 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(the_steps,more_steps);
paths = G__20270;
state__$1 = G__20271;
the_steps = G__20272;
continue;
} else {
return the_steps;
}
break;
}
});
stepwise.eval.head_text = cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$text,cljs.core.first,cljs.core.cst$kw$children,cljs.core.array_seq([xyzzy.core.node,cljs.core.cst$kw$loc], 0));
if(typeof stepwise.eval.special_steps !== 'undefined'){
} else {
stepwise.eval.special_steps = (function (){var method_table__7069__auto__ = (function (){var G__20273 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20273) : cljs.core.atom.call(null,G__20273));
})();
var prefer_table__7070__auto__ = (function (){var G__20274 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20274) : cljs.core.atom.call(null,G__20274));
})();
var method_cache__7071__auto__ = (function (){var G__20275 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20275) : cljs.core.atom.call(null,G__20275));
})();
var cached_hierarchy__7072__auto__ = (function (){var G__20276 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20276) : cljs.core.atom.call(null,G__20276));
})();
var hierarchy__7073__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("stepwise.eval","special-steps"),stepwise.eval.head_text,cljs.core.cst$kw$default,hierarchy__7073__auto__,method_table__7069__auto__,prefer_table__7070__auto__,method_cache__7071__auto__,cached_hierarchy__7072__auto__));
})();
}
stepwise.eval.special_steps.cljs$core$IMultiFn$_add_method$arity$3(null,"def",(function (p__20278){
var map__20279 = p__20278;
var map__20279__$1 = ((((!((map__20279 == null)))?((((map__20279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20279):map__20279);
var state = map__20279__$1;
var loc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20279__$1,cljs.core.cst$kw$loc);
var head = xyzzy.core.down(loc);
var name = xyzzy.core.right(head);
var var$ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(xyzzy.core.node(name)));
var init = xyzzy.core.right(name);
var init_steps = (function (){var G__20281 = stepwise.eval.go(state,init);
return (stepwise.eval.steps.cljs$core$IFn$_invoke$arity$1 ? stepwise.eval.steps.cljs$core$IFn$_invoke$arity$1(G__20281) : stepwise.eval.steps.call(null,G__20281));
})();
var state_SINGLEQUOTE_ = cljs.core.last(init_steps);
var value = stepwise.eval.extract_value(xyzzy.core.node(cljs.core.cst$kw$loc.cljs$core$IFn$_invoke$arity$1(state_SINGLEQUOTE_)));
return stepwise.eval.step_sequence.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([stepwise.eval.desc.cljs$core$IFn$_invoke$arity$variadic(stepwise.eval.go(state,head),cljs.core.array_seq(["It's a ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"def"], null)," form. Let's define a new var."], 0)),stepwise.eval.desc.cljs$core$IFn$_invoke$arity$variadic(stepwise.eval.go(state,name),cljs.core.array_seq(["The var's name will be ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,[cljs.core.str(var$)].join('')], null),"..."], 0)),stepwise.eval.desc.cljs$core$IFn$_invoke$arity$variadic(stepwise.eval.go(state,init),cljs.core.array_seq(["...and its value will be the result of evaluating this form."], 0)),init_steps,stepwise.eval.desc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc_in(stepwise.eval.zip(state_SINGLEQUOTE_,((function (head,name,var$,init,init_steps,state_SINGLEQUOTE_,value,map__20279,map__20279__$1,state,loc){
return (function (p1__20277_SHARP_){
return xyzzy.core.replace(xyzzy.core.up(p1__20277_SHARP_),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$value,cljs.core.cst$kw$text,[cljs.core.str("#'user/"),cljs.core.str(var$)].join('')], null));
});})(head,name,var$,init,init_steps,state_SINGLEQUOTE_,value,map__20279,map__20279__$1,state,loc))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$defs,var$], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$value,cljs.core.cst$kw$value,value,cljs.core.cst$kw$text,[cljs.core.str("user/"),cljs.core.str(var$)].join('')], null)),cljs.core.array_seq(["Establish the new binding in the current namespace."], 0))], 0));
}));
stepwise.eval.human_readable_number = (function stepwise$eval$human_readable_number(n){
var G__20283 = n;
switch (G__20283) {
case (0):
return "zero";

break;
case (1):
return "one";

break;
case (2):
return "two";

break;
case (3):
return "three";

break;
case (4):
return "four";

break;
case (5):
return "five";

break;
case (6):
return "six";

break;
case (7):
return "seven";

break;
case (8):
return "eight";

break;
case (9):
return "nine";

break;
default:
return [cljs.core.str(n)].join('');

}
});
stepwise.eval.special_steps.cljs$core$IMultiFn$_add_method$arity$3(null,"fn",(function (p__20286){
var map__20287 = p__20286;
var map__20287__$1 = ((((!((map__20287 == null)))?((((map__20287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20287):map__20287);
var state = map__20287__$1;
var loc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20287__$1,cljs.core.cst$kw$loc);
var head = xyzzy.core.down(loc);
var next = xyzzy.core.right(head);
var local = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(xyzzy.core.node(next)),cljs.core.cst$kw$symbol))?next:null);
var name = (cljs.core.truth_(local)?cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(xyzzy.core.node(local)):null);
var methods$ = (function (){var G__20289 = xyzzy.core.followers(head,xyzzy.core.right);
if(cljs.core.truth_(local)){
return cljs.core.rest(G__20289);
} else {
return G__20289;
}
})();
var parse_method = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(((function (head,next,local,name,methods$,map__20287,map__20287__$1,state,loc){
return (function (p1__20285_SHARP_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$params,cljs.core.first(p1__20285_SHARP_),cljs.core.cst$kw$body,cljs.core.rest(p1__20285_SHARP_)], null);
});})(head,next,local,name,methods$,map__20287,map__20287__$1,state,loc))
,cljs.core.cst$kw$value,xyzzy.core.node);
var fn_node = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$value,cljs.core.cst$kw$value,(new stepwise.eval.UserFn(cljs.core.map.cljs$core$IFn$_invoke$arity$2(parse_method,methods$),null,null,null)),cljs.core.cst$kw$text,[cljs.core.str("#<fn "),cljs.core.str((function (){var or__6156__auto__ = name;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("f");
}
})()),cljs.core.str(">")].join('')], null);
return stepwise.eval.step_sequence.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([stepwise.eval.desc.cljs$core$IFn$_invoke$arity$variadic(stepwise.eval.go(state,head),cljs.core.array_seq(["It's a ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"fn"], null)," form. Let's define a function."], 0)),(function (){var temp__4657__auto__ = (cljs.core.truth_(local)?stepwise.eval.go(state,local):null);
if(cljs.core.truth_(temp__4657__auto__)){
var state_SINGLEQUOTE_ = temp__4657__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stepwise.eval.desc.cljs$core$IFn$_invoke$arity$variadic(state_SINGLEQUOTE_,cljs.core.array_seq(["This function has the local name ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,name], null),"."], 0)),stepwise.eval.desc.cljs$core$IFn$_invoke$arity$variadic(state_SINGLEQUOTE_,cljs.core.array_seq(["Within the function body, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,name], null)," refers to the function itself."], 0))], null);
} else {
return null;
}
})(),(function (){var iter__6928__auto__ = ((function (head,next,local,name,methods$,parse_method,fn_node,map__20287,map__20287__$1,state,loc){
return (function stepwise$eval$iter__20290(s__20291){
return (new cljs.core.LazySeq(null,((function (head,next,local,name,methods$,parse_method,fn_node,map__20287,map__20287__$1,state,loc){
return (function (){
var s__20291__$1 = s__20291;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__20291__$1);
if(temp__4657__auto__){
var s__20291__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20291__$2)){
var c__6926__auto__ = cljs.core.chunk_first(s__20291__$2);
var size__6927__auto__ = cljs.core.count(c__6926__auto__);
var b__20293 = cljs.core.chunk_buffer(size__6927__auto__);
if((function (){var i__20292 = (0);
while(true){
if((i__20292 < size__6927__auto__)){
var method = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6926__auto__,i__20292);
var argc = cljs.core.count(cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(xyzzy.core.node(xyzzy.core.down(method))));
cljs.core.chunk_append(b__20293,stepwise.eval.desc.cljs$core$IFn$_invoke$arity$variadic(stepwise.eval.go(state,method),cljs.core.array_seq(["Define a method that takes ",stepwise.eval.human_readable_number(argc)," ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(argc,(1)))?"argument":"arguments"),"."], 0)));

var G__20296 = (i__20292 + (1));
i__20292 = G__20296;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20293),stepwise$eval$iter__20290(cljs.core.chunk_rest(s__20291__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20293),null);
}
} else {
var method = cljs.core.first(s__20291__$2);
var argc = cljs.core.count(cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(xyzzy.core.node(xyzzy.core.down(method))));
return cljs.core.cons(stepwise.eval.desc.cljs$core$IFn$_invoke$arity$variadic(stepwise.eval.go(state,method),cljs.core.array_seq(["Define a method that takes ",stepwise.eval.human_readable_number(argc)," ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(argc,(1)))?"argument":"arguments"),"."], 0)),stepwise$eval$iter__20290(cljs.core.rest(s__20291__$2)));
}
} else {
return null;
}
break;
}
});})(head,next,local,name,methods$,parse_method,fn_node,map__20287,map__20287__$1,state,loc))
,null,null));
});})(head,next,local,name,methods$,parse_method,fn_node,map__20287,map__20287__$1,state,loc))
;
return iter__6928__auto__(methods$);
})(),stepwise.eval.desc.cljs$core$IFn$_invoke$arity$variadic(stepwise.eval.zip.cljs$core$IFn$_invoke$arity$variadic(state,xyzzy.core.replace,cljs.core.array_seq([fn_node], 0)),cljs.core.array_seq(["Replace the entire ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"fn"], null)," form with the newly defined function."], 0))], 0));
}));
stepwise.eval.special_steps.cljs$core$IMultiFn$_add_method$arity$3(null,"if",(function (p__20298){
var map__20299 = p__20298;
var map__20299__$1 = ((((!((map__20299 == null)))?((((map__20299.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20299.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20299):map__20299);
var state = map__20299__$1;
var loc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20299__$1,cljs.core.cst$kw$loc);
var head = xyzzy.core.down(loc);
var test = xyzzy.core.right(head);
var test_steps = (function (){var G__20302 = stepwise.eval.go(state,test);
return (stepwise.eval.steps.cljs$core$IFn$_invoke$arity$1 ? stepwise.eval.steps.cljs$core$IFn$_invoke$arity$1(G__20302) : stepwise.eval.steps.call(null,G__20302));
})();
var state_SINGLEQUOTE_ = cljs.core.last(test_steps);
var test_value = stepwise.eval.extract_value(xyzzy.core.node(cljs.core.cst$kw$loc.cljs$core$IFn$_invoke$arity$1(state_SINGLEQUOTE_)));
var vec__20301 = (cljs.core.truth_(test_value)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["truthy","first","second"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["falsey","second","first"], null));
var truthy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20301,(0),null);
var branch1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20301,(1),null);
var branch2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20301,(2),null);
var branch = (function (){var G__20303 = xyzzy.core.right(cljs.core.cst$kw$loc.cljs$core$IFn$_invoke$arity$1(state_SINGLEQUOTE_));
if(cljs.core.not(test_value)){
return xyzzy.core.right(G__20303);
} else {
return G__20303;
}
})();
var branch_steps = (function (){var G__20304 = stepwise.eval.go(state_SINGLEQUOTE_,branch);
return (stepwise.eval.steps.cljs$core$IFn$_invoke$arity$1 ? stepwise.eval.steps.cljs$core$IFn$_invoke$arity$1(G__20304) : stepwise.eval.steps.call(null,G__20304));
})();
var state_SINGLEQUOTE__SINGLEQUOTE_ = cljs.core.last(branch_steps);
return stepwise.eval.step_sequence.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([stepwise.eval.desc.cljs$core$IFn$_invoke$arity$variadic(stepwise.eval.go(state,head),cljs.core.array_seq(["It's an ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"if"], null)," form. Let's simplify."], 0)),stepwise.eval.desc.cljs$core$IFn$_invoke$arity$variadic(stepwise.eval.go(state,test),cljs.core.array_seq(["Evaluate the condition to determine which branch to take."], 0)),test_steps,stepwise.eval.desc.cljs$core$IFn$_invoke$arity$variadic(state_SINGLEQUOTE_,cljs.core.array_seq(["The condition is ",truthy,". Evaluate the ",branch1," branch and ignore the ",branch2,"."], 0)),branch_steps,stepwise.eval.desc.cljs$core$IFn$_invoke$arity$variadic(stepwise.eval.zip(state_SINGLEQUOTE__SINGLEQUOTE_,((function (head,test,test_steps,state_SINGLEQUOTE_,test_value,vec__20301,truthy,branch1,branch2,branch,branch_steps,state_SINGLEQUOTE__SINGLEQUOTE_,map__20299,map__20299__$1,state,loc){
return (function (p1__20297_SHARP_){
return xyzzy.core.replace(xyzzy.core.up(p1__20297_SHARP_),xyzzy.core.node(cljs.core.cst$kw$loc.cljs$core$IFn$_invoke$arity$1(state_SINGLEQUOTE__SINGLEQUOTE_)));
});})(head,test,test_steps,state_SINGLEQUOTE_,test_value,vec__20301,truthy,branch1,branch2,branch,branch_steps,state_SINGLEQUOTE__SINGLEQUOTE_,map__20299,map__20299__$1,state,loc))
),cljs.core.array_seq(["Replace the entire ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"if"], null)," form with the value of the ",branch1," branch."], 0))], 0));
}));
stepwise.eval.bpair_steps = (function stepwise$eval$bpair_steps(p__20305){
var map__20309 = p__20305;
var map__20309__$1 = ((((!((map__20309 == null)))?((((map__20309.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20309.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20309):map__20309);
var state = map__20309__$1;
var loc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20309__$1,cljs.core.cst$kw$loc);
var name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(xyzzy.core.node(loc)));
var init = xyzzy.core.right(loc);
var init_steps = (function (){var G__20311 = stepwise.eval.go(state,init);
return (stepwise.eval.steps.cljs$core$IFn$_invoke$arity$1 ? stepwise.eval.steps.cljs$core$IFn$_invoke$arity$1(G__20311) : stepwise.eval.steps.call(null,G__20311));
})();
var state_SINGLEQUOTE_ = cljs.core.last(init_steps);
var value = stepwise.eval.extract_value(xyzzy.core.node(cljs.core.cst$kw$loc.cljs$core$IFn$_invoke$arity$1(state_SINGLEQUOTE_)));
return stepwise.eval.step_sequence.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([stepwise.eval.desc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.array_seq(["Bind the symbol ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,[cljs.core.str(name)].join('')], null),"..."], 0)),stepwise.eval.desc.cljs$core$IFn$_invoke$arity$variadic(stepwise.eval.go(state,init),cljs.core.array_seq(["...to the result of evaluating this form."], 0)),cljs.core.butlast(init_steps),stepwise.eval.locally_bind(state_SINGLEQUOTE_,name,stepwise.model.parse(value))], 0));
});
stepwise.eval.bvec_steps = (function stepwise$eval$bvec_steps(p__20312){
var map__20315 = p__20312;
var map__20315__$1 = ((((!((map__20315 == null)))?((((map__20315.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20315.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20315):map__20315);
var original_state = map__20315__$1;
var loc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20315__$1,cljs.core.cst$kw$loc);
var paths = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(loc)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(xyzzy.core.node(loc))))));
var state = cljs.core.update.cljs$core$IFn$_invoke$arity$4(original_state,cljs.core.cst$kw$scopes,cljs.core.conj,cljs.core.PersistentArrayMap.EMPTY);
var the_steps = cljs.core.List.EMPTY;
while(true){
var temp__4655__auto__ = cljs.core.first(paths);
if(cljs.core.truth_(temp__4655__auto__)){
var path = temp__4655__auto__;
var more_steps = stepwise.eval.bpair_steps(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loc,cljs.core.cst$kw$path], null),path));
var G__20317 = cljs.core.rest(paths);
var G__20318 = cljs.core.last(more_steps);
var G__20319 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(the_steps,more_steps);
paths = G__20317;
state = G__20318;
the_steps = G__20319;
continue;
} else {
return stepwise.eval.step_sequence.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([stepwise.eval.desc.cljs$core$IFn$_invoke$arity$variadic(original_state,cljs.core.array_seq(["Establish local bindings according to these binding pairs."], 0)),the_steps,stepwise.eval.desc.cljs$core$IFn$_invoke$arity$variadic((function (){var temp__4655__auto____$1 = cljs.core.last(the_steps);
if(cljs.core.truth_(temp__4655__auto____$1)){
var state_SINGLEQUOTE_ = temp__4655__auto____$1;
return stepwise.eval.zip(state_SINGLEQUOTE_,xyzzy.core.up);
} else {
return state;
}
})(),cljs.core.array_seq(["Bindings established. Let's evaluate the body."], 0))], 0));
}
break;
}
});
stepwise.eval.special_steps.cljs$core$IMultiFn$_add_method$arity$3(null,"let",(function (p__20321){
var map__20322 = p__20321;
var map__20322__$1 = ((((!((map__20322 == null)))?((((map__20322.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20322.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20322):map__20322);
var state = map__20322__$1;
var loc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20322__$1,cljs.core.cst$kw$loc);
var head = xyzzy.core.down(loc);
var bvec_steps = stepwise.eval.bvec_steps(stepwise.eval.go(state,xyzzy.core.right(head)));
var body_steps = (function (){var G__20324 = stepwise.eval.zip(cljs.core.last(bvec_steps),xyzzy.core.right);
return (stepwise.eval.steps.cljs$core$IFn$_invoke$arity$1 ? stepwise.eval.steps.cljs$core$IFn$_invoke$arity$1(G__20324) : stepwise.eval.steps.call(null,G__20324));
})();
var state_SINGLEQUOTE_ = cljs.core.last(body_steps);
return stepwise.eval.step_sequence.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([stepwise.eval.desc.cljs$core$IFn$_invoke$arity$variadic(stepwise.eval.go(state,head),cljs.core.array_seq(["It's a ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"let"], null)," form. Let's simplify."], 0)),bvec_steps,body_steps,stepwise.eval.desc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update.cljs$core$IFn$_invoke$arity$3(stepwise.eval.zip(state_SINGLEQUOTE_,((function (head,bvec_steps,body_steps,state_SINGLEQUOTE_,map__20322,map__20322__$1,state,loc){
return (function (p1__20320_SHARP_){
return xyzzy.core.replace(xyzzy.core.up(p1__20320_SHARP_),xyzzy.core.node(cljs.core.cst$kw$loc.cljs$core$IFn$_invoke$arity$1(state_SINGLEQUOTE_)));
});})(head,bvec_steps,body_steps,state_SINGLEQUOTE_,map__20322,map__20322__$1,state,loc))
),cljs.core.cst$kw$scopes,cljs.core.pop),cljs.core.array_seq(["Replace the entire ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"let"], null)," form with the value of its body."], 0))], 0));
}));
stepwise.eval.funcall_steps = (function stepwise$eval$funcall_steps(p__20325){
var map__20330 = p__20325;
var map__20330__$1 = ((((!((map__20330 == null)))?((((map__20330.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20330.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20330):map__20330);
var state = map__20330__$1;
var loc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20330__$1,cljs.core.cst$kw$loc);
var func = xyzzy.core.down(loc);
var temp__4655__auto__ = stepwise.util.ensure.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.instance_QMARK_,stepwise.eval.UserFn),cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(xyzzy.core.node(func)));
if(cljs.core.truth_(temp__4655__auto__)){
var user_fn = temp__4655__auto__;
var args = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(stepwise.eval.extract_value,xyzzy.core.node),xyzzy.core.followers(func,xyzzy.core.right));
var map__20332 = stepwise.eval.method_for_argc(user_fn,cljs.core.count(args));
var map__20332__$1 = ((((!((map__20332 == null)))?((((map__20332.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20332.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20332):map__20332);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20332__$1,cljs.core.cst$kw$params);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20332__$1,cljs.core.cst$kw$body);
var let_form = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(params,args)))))),cljs.core.array_seq([body], 0))));
var state_SINGLEQUOTE_ = stepwise.eval.desc.cljs$core$IFn$_invoke$arity$variadic(stepwise.eval.zip.cljs$core$IFn$_invoke$arity$variadic(state,xyzzy.core.replace,cljs.core.array_seq([stepwise.model.parse(let_form)], 0)),cljs.core.array_seq(["Rewrite the function call as a ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"let"], null)," form."], 0));
return cljs.core.cons(state_SINGLEQUOTE_,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),(stepwise.eval.steps.cljs$core$IFn$_invoke$arity$1 ? stepwise.eval.steps.cljs$core$IFn$_invoke$arity$1(state_SINGLEQUOTE_) : stepwise.eval.steps.call(null,state_SINGLEQUOTE_))));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stepwise.eval.desc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.array_seq(["Call the function ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(xyzzy.core.node(func))], null)," with the given arguments..."], 0)),stepwise.eval.desc.cljs$core$IFn$_invoke$arity$variadic(stepwise.eval.zip.cljs$core$IFn$_invoke$arity$variadic(state,xyzzy.core.edit,cljs.core.array_seq([stepwise.eval.call_function], 0)),cljs.core.array_seq(["...and replace the entire function call with its return value."], 0))], null);
}
});
stepwise.eval.seq_steps = (function stepwise$eval$seq_steps(state){
return stepwise.eval.step_sequence.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([stepwise.eval.desc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.array_seq(["Looks like a function call, or maybe a special form. Let's go deeper."], 0)),(function (){var temp__4655__auto__ = cljs.core.get_method(stepwise.eval.special_steps,(stepwise.eval.head_text.cljs$core$IFn$_invoke$arity$1 ? stepwise.eval.head_text.cljs$core$IFn$_invoke$arity$1(state) : stepwise.eval.head_text.call(null,state)));
if(cljs.core.truth_(temp__4655__auto__)){
var special_steps_STAR_ = temp__4655__auto__;
return (special_steps_STAR_.cljs$core$IFn$_invoke$arity$1 ? special_steps_STAR_.cljs$core$IFn$_invoke$arity$1(state) : special_steps_STAR_.call(null,state));
} else {
var item_steps = stepwise.eval.steps_STAR_(state);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(item_steps,stepwise.eval.funcall_steps(stepwise.eval.zip(cljs.core.last(item_steps),xyzzy.core.up)));
}
})()], 0));
});
stepwise.eval.coll_steps = (function stepwise$eval$coll_steps(state){
var item_steps = stepwise.eval.steps_STAR_(state);
return stepwise.eval.step_sequence.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([stepwise.eval.desc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.array_seq(["This form is a collection. Let's take a look at its items."], 0)),item_steps,stepwise.eval.desc.cljs$core$IFn$_invoke$arity$variadic(stepwise.eval.zip(cljs.core.last(item_steps),xyzzy.core.up),cljs.core.array_seq(["All items have been simplified. Let's move on."], 0))], 0));
});
stepwise.eval.program_steps = (function stepwise$eval$program_steps(state){
var top_level_steps = stepwise.eval.steps_STAR_(state);
return stepwise.eval.step_sequence.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([stepwise.eval.desc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.array_seq(["Let's evaluate these forms step by step."], 0)),top_level_steps,stepwise.eval.desc.cljs$core$IFn$_invoke$arity$variadic(stepwise.eval.zip(cljs.core.last(top_level_steps),xyzzy.core.up),cljs.core.array_seq(["Nothing left to simplify. Looks like our work here is done!"], 0))], 0));
});
stepwise.eval.steps = (function stepwise$eval$steps(state){
var node = xyzzy.core.node(cljs.core.cst$kw$loc.cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(stepwise.eval.fully_simplified_QMARK_(node))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stepwise.eval.desc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.array_seq(["This form is completely simplified. Let's move on."], 0))], null);
} else {
var G__20335 = (((cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(node) instanceof cljs.core.Keyword))?cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(node).fqn:null);
switch (G__20335) {
case "symbol":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stepwise.eval.resolve(state)], null);

break;
case "seq":
return stepwise.eval.seq_steps(state);

break;
case "map":
return stepwise.eval.coll_steps(state);

break;
case "set":
return stepwise.eval.coll_steps(state);

break;
case "vec":
return stepwise.eval.coll_steps(state);

break;
case "program":
return stepwise.eval.program_steps(state);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(node))].join('')));

}
}
});
stepwise.eval.read_all_forms = (function stepwise$eval$read_all_forms(code){
var reader = cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(code);
var eof = (new Object());
var forms = cljs.core.PersistentVector.EMPTY;
while(true){
var form = cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$3(reader,false,eof);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,eof)){
return forms;
} else {
var G__20337 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(forms,form);
forms = G__20337;
continue;
}
break;
}
});
stepwise.eval.init_state = (function stepwise$eval$init_state(code){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){try{var forms = stepwise.eval.read_all_forms(code);
if(cljs.core.empty_QMARK_(forms)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,"Must provide at least one valid form"], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$index,(0),cljs.core.cst$kw$steps,cljs.core.vec(stepwise.eval.steps(stepwise.eval.init_step(forms)))], null);
}
}catch (e20339){if((e20339 instanceof Error)){
var err = e20339;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,err.message], null);
} else {
throw e20339;

}
}})(),cljs.core.cst$kw$code,code);
});
