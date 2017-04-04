// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('schema.utils');
goog.require('cljs.core');
goog.require('goog.string.format');
goog.require('goog.string');
/**
 * Like assoc but only assocs when value is truthy.  Copied from plumbing.core so that
 * schema need not depend on plumbing.
 */
schema.utils.assoc_when = (function schema$utils$assoc_when(var_args){
var args__7221__auto__ = [];
var len__7214__auto___11877 = arguments.length;
var i__7215__auto___11878 = (0);
while(true){
if((i__7215__auto___11878 < len__7214__auto___11877)){
args__7221__auto__.push((arguments[i__7215__auto___11878]));

var G__11879 = (i__7215__auto___11878 + (1));
i__7215__auto___11878 = G__11879;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$even_QMARK_,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$kvs))], 0)))].join('')));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__6156__auto__ = m;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__6928__auto__ = (function schema$utils$iter__11867(s__11868){
return (new cljs.core.LazySeq(null,(function (){
var s__11868__$1 = s__11868;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__11868__$1);
if(temp__4657__auto__){
var s__11868__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11868__$2)){
var c__6926__auto__ = cljs.core.chunk_first(s__11868__$2);
var size__6927__auto__ = cljs.core.count(c__6926__auto__);
var b__11870 = cljs.core.chunk_buffer(size__6927__auto__);
if((function (){var i__11869 = (0);
while(true){
if((i__11869 < size__6927__auto__)){
var vec__11875 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6926__auto__,i__11869);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11875,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11875,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__11870,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__11880 = (i__11869 + (1));
i__11869 = G__11880;
continue;
} else {
var G__11881 = (i__11869 + (1));
i__11869 = G__11881;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11870),schema$utils$iter__11867(cljs.core.chunk_rest(s__11868__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11870),null);
}
} else {
var vec__11876 = cljs.core.first(s__11868__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11876,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11876,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),schema$utils$iter__11867(cljs.core.rest(s__11868__$2)));
} else {
var G__11882 = cljs.core.rest(s__11868__$2);
s__11868__$1 = G__11882;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6928__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
});

schema.utils.assoc_when.cljs$lang$maxFixedArity = (1);

schema.utils.assoc_when.cljs$lang$applyTo = (function (seq11865){
var G__11866 = cljs.core.first(seq11865);
var seq11865__$1 = cljs.core.next(seq11865);
return schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__11866,seq11865__$1);
});
schema.utils.type_of = (function schema$utils$type_of(x){
return typeof x;
});
/**
 * What class can we associate the fn schema with? In Clojure use the class of the fn; in
 * cljs just use the fn itself.
 */
schema.utils.fn_schema_bearer = (function schema$utils$fn_schema_bearer(f){
return f;
});
schema.utils.format_STAR_ = (function schema$utils$format_STAR_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___11885 = arguments.length;
var i__7215__auto___11886 = (0);
while(true){
if((i__7215__auto___11886 < len__7214__auto___11885)){
args__7221__auto__.push((arguments[i__7215__auto___11886]));

var G__11887 = (i__7215__auto___11886 + (1));
i__7215__auto___11886 = G__11887;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
});

schema.utils.format_STAR_.cljs$lang$maxFixedArity = (1);

schema.utils.format_STAR_.cljs$lang$applyTo = (function (seq11883){
var G__11884 = cljs.core.first(seq11883);
var seq11883__$1 = cljs.core.next(seq11883);
return schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__11884,seq11883__$1);
});
/**
 * Provide a descriptive short name for a value.
 */
schema.utils.value_name = (function schema$utils$value_name(value){
var t = schema.utils.type_of(value);
if((cljs.core.count([cljs.core.str(value)].join('')) < (20))){
return value;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("a-"),cljs.core.str(t)].join(''));
}
});
/**
 * Identity version of memoize, because many schemas are records, and records
 * don't cache their hash codes (at least in Clojure 1.5.1).
 * Not thread safe, and doesn't cache falsey values.
 */
schema.utils.memoize_id = (function schema$utils$memoize_id(f){
return cljs.core.memoize(f);
});
schema.utils.record_QMARK_ = (function schema$utils$record_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (67108864))) || (x.cljs$core$IRecord$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,x);
}
});

/**
* @constructor
 * @implements {cljs.core.IPrintWithWriter}
*/
schema.utils.ValidationError = (function (schema,value,expectation_delay,fail_explanation){
this.schema = schema;
this.value = value;
this.expectation_delay = expectation_delay;
this.fail_explanation = fail_explanation;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
schema.utils.ValidationError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer((schema.utils.validation_error_explain.cljs$core$IFn$_invoke$arity$1 ? schema.utils.validation_error_explain.cljs$core$IFn$_invoke$arity$1(this$__$1) : schema.utils.validation_error_explain.call(null,this$__$1)),writer,opts);
});

schema.utils.ValidationError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema,cljs.core.cst$sym$value,cljs.core.cst$sym$expectation_DASH_delay,cljs.core.cst$sym$fail_DASH_explanation], null);
});

schema.utils.ValidationError.cljs$lang$type = true;

schema.utils.ValidationError.cljs$lang$ctorStr = "schema.utils/ValidationError";

schema.utils.ValidationError.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"schema.utils/ValidationError");
});

schema.utils.__GT_ValidationError = (function schema$utils$__GT_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});

schema.utils.validation_error_explain = (function schema$utils$validation_error_explain(err){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(function (){var G__11891 = err.expectation_delay;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11891) : cljs.core.deref.call(null,G__11891));
})()),(function (){var or__6156__auto__ = err.fail_explanation;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return cljs.core.cst$sym$not;
}
})());
});
/**
 * for cljs sake (easier than normalizing imports in macros.clj)
 */
schema.utils.make_ValidationError = (function schema$utils$make_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});

/**
* @constructor
 * @implements {cljs.core.IPrintWithWriter}
*/
schema.utils.NamedError = (function (name,error){
this.name = name;
this.error = error;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
schema.utils.NamedError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer((schema.utils.named_error_explain.cljs$core$IFn$_invoke$arity$1 ? schema.utils.named_error_explain.cljs$core$IFn$_invoke$arity$1(this$__$1) : schema.utils.named_error_explain.call(null,this$__$1)),writer,opts);
});

schema.utils.NamedError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$name,cljs.core.cst$sym$error], null);
});

schema.utils.NamedError.cljs$lang$type = true;

schema.utils.NamedError.cljs$lang$ctorStr = "schema.utils/NamedError";

schema.utils.NamedError.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"schema.utils/NamedError");
});

schema.utils.__GT_NamedError = (function schema$utils$__GT_NamedError(name,error){
return (new schema.utils.NamedError(name,error));
});

schema.utils.named_error_explain = (function schema$utils$named_error_explain(err){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,err.name),err.error),cljs.core.cst$sym$named);
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
schema.utils.ErrorContainer = (function (error,__meta,__extmap,__hash){
this.error = error;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6770__auto__,k__6771__auto__){
var self__ = this;
var this__6770__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__6770__auto____$1,k__6771__auto__,null);
});

schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6772__auto__,k11893,else__6773__auto__){
var self__ = this;
var this__6772__auto____$1 = this;
var G__11895 = (((k11893 instanceof cljs.core.Keyword))?k11893.fqn:null);
switch (G__11895) {
case "error":
return self__.error;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k11893,else__6773__auto__);

}
});

schema.utils.ErrorContainer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6784__auto__,writer__6785__auto__,opts__6786__auto__){
var self__ = this;
var this__6784__auto____$1 = this;
var pr_pair__6787__auto__ = ((function (this__6784__auto____$1){
return (function (keyval__6788__auto__){
return cljs.core.pr_sequential_writer(writer__6785__auto__,cljs.core.pr_writer,""," ","",opts__6786__auto__,keyval__6788__auto__);
});})(this__6784__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__6785__auto__,pr_pair__6787__auto__,"#schema.utils.ErrorContainer{",", ","}",opts__6786__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$error,self__.error],null))], null),self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IIterable$ = true;

schema.utils.ErrorContainer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11892){
var self__ = this;
var G__11892__$1 = this;
return (new cljs.core.RecordIter((0),G__11892__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core._iterator(self__.__extmap)));
});

schema.utils.ErrorContainer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6768__auto__){
var self__ = this;
var this__6768__auto____$1 = this;
return self__.__meta;
});

schema.utils.ErrorContainer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6764__auto__){
var self__ = this;
var this__6764__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,self__.__extmap,self__.__hash));
});

schema.utils.ErrorContainer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6774__auto__){
var self__ = this;
var this__6774__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6765__auto__){
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

schema.utils.ErrorContainer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6766__auto__,other__6767__auto__){
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

schema.utils.ErrorContainer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6779__auto__,k__6780__auto__){
var self__ = this;
var this__6779__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,null], null), null),k__6780__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__6779__auto____$1),self__.__meta),k__6780__auto__);
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__6780__auto__)),null));
}
});

schema.utils.ErrorContainer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6777__auto__,k__6778__auto__,G__11892){
var self__ = this;
var this__6777__auto____$1 = this;
var pred__11896 = cljs.core.keyword_identical_QMARK_;
var expr__11897 = k__6778__auto__;
if(cljs.core.truth_((pred__11896.cljs$core$IFn$_invoke$arity$2 ? pred__11896.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error,expr__11897) : pred__11896.call(null,cljs.core.cst$kw$error,expr__11897)))){
return (new schema.utils.ErrorContainer(G__11892,self__.__meta,self__.__extmap,null));
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6778__auto__,G__11892),null));
}
});

schema.utils.ErrorContainer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6782__auto__){
var self__ = this;
var this__6782__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$error,self__.error],null))], null),self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6769__auto__,G__11892){
var self__ = this;
var this__6769__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,G__11892,self__.__extmap,self__.__hash));
});

schema.utils.ErrorContainer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6775__auto__,entry__6776__auto__){
var self__ = this;
var this__6775__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__6776__auto__)){
return cljs.core._assoc(this__6775__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6776__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6776__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__6775__auto____$1,entry__6776__auto__);
}
});

schema.utils.ErrorContainer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$error], null);
});

schema.utils.ErrorContainer.cljs$lang$type = true;

schema.utils.ErrorContainer.cljs$lang$ctorPrSeq = (function (this__6804__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.utils/ErrorContainer");
});

schema.utils.ErrorContainer.cljs$lang$ctorPrWriter = (function (this__6804__auto__,writer__6805__auto__){
return cljs.core._write(writer__6805__auto__,"schema.utils/ErrorContainer");
});

schema.utils.__GT_ErrorContainer = (function schema$utils$__GT_ErrorContainer(error){
return (new schema.utils.ErrorContainer(error,null,null,null));
});

schema.utils.map__GT_ErrorContainer = (function schema$utils$map__GT_ErrorContainer(G__11894){
return (new schema.utils.ErrorContainer(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(G__11894),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__11894,cljs.core.cst$kw$error),null));
});

/**
 * Distinguish a value (must be non-nil) as an error.
 */
schema.utils.error = (function schema$utils$error(x){
if(cljs.core.truth_(x)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$x], 0)))].join('')));
}

return schema.utils.__GT_ErrorContainer(x);
});
schema.utils.error_QMARK_ = (function schema$utils$error_QMARK_(x){
return (x instanceof schema.utils.ErrorContainer);
});
schema.utils.error_val = (function schema$utils$error_val(x){
if(cljs.core.truth_(schema.utils.error_QMARK_(x))){
return x.error;
} else {
return null;
}
});
/**
 * If maybe-error is an error, wrap the inner value in a NamedError; otherwise, return as-is
 */
schema.utils.wrap_error_name = (function schema$utils$wrap_error_name(name,maybe_error){
var temp__4655__auto__ = schema.utils.error_val(maybe_error);
if(cljs.core.truth_(temp__4655__auto__)){
var e = temp__4655__auto__;
return schema.utils.error((new schema.utils.NamedError(name,e)));
} else {
return maybe_error;
}
});
/**
 * Build up a result by conjing values, producing an error if at least one
 * sub-value returns an error.
 */
schema.utils.result_builder = (function schema$utils$result_builder(lift_to_error){
return (function schema$utils$result_builder_$_conjer(m,e){
var temp__4655__auto__ = schema.utils.error_val(e);
if(cljs.core.truth_(temp__4655__auto__)){
var err = temp__4655__auto__;
return schema.utils.error(cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__6156__auto__ = schema.utils.error_val(m);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return (lift_to_error.cljs$core$IFn$_invoke$arity$1 ? lift_to_error.cljs$core$IFn$_invoke$arity$1(m) : lift_to_error.call(null,m));
}
})(),err));
} else {
var temp__4655__auto____$1 = schema.utils.error_val(m);
if(cljs.core.truth_(temp__4655__auto____$1)){
var merr = temp__4655__auto____$1;
return schema.utils.error(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(merr,null));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,e);
}
}
});
});
schema.utils.declare_class_schema_BANG_ = (function schema$utils$declare_class_schema_BANG_(klass,schema__$1){
return (klass["schema$utils$schema"] = schema__$1);
});

schema.utils.class_schema = (function schema$utils$class_schema(klass){
return (klass["schema$utils$schema"]);
});

/**
 * @interface
 */
schema.utils.PSimpleCell = function(){};

schema.utils.get_cell = (function schema$utils$get_cell(this$){
if((!((this$ == null))) && (!((this$.schema$utils$PSimpleCell$get_cell$arity$1 == null)))){
return this$.schema$utils$PSimpleCell$get_cell$arity$1(this$);
} else {
var x__6811__auto__ = (((this$ == null))?null:this$);
var m__6812__auto__ = (schema.utils.get_cell[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return (m__6812__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6812__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__6812__auto__.call(null,this$));
} else {
var m__6812__auto____$1 = (schema.utils.get_cell["_"]);
if(!((m__6812__auto____$1 == null))){
return (m__6812__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6812__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__6812__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("PSimpleCell.get_cell",this$);
}
}
}
});

schema.utils.set_cell = (function schema$utils$set_cell(this$,x){
if((!((this$ == null))) && (!((this$.schema$utils$PSimpleCell$set_cell$arity$2 == null)))){
return this$.schema$utils$PSimpleCell$set_cell$arity$2(this$,x);
} else {
var x__6811__auto__ = (((this$ == null))?null:this$);
var m__6812__auto__ = (schema.utils.set_cell[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return (m__6812__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6812__auto__.cljs$core$IFn$_invoke$arity$2(this$,x) : m__6812__auto__.call(null,this$,x));
} else {
var m__6812__auto____$1 = (schema.utils.set_cell["_"]);
if(!((m__6812__auto____$1 == null))){
return (m__6812__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6812__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,x) : m__6812__auto____$1.call(null,this$,x));
} else {
throw cljs.core.missing_protocol("PSimpleCell.set_cell",this$);
}
}
}
});


/**
* @constructor
 * @implements {schema.utils.PSimpleCell}
*/
schema.utils.SimpleVCell = (function (q){
this.q = q;
})
schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$ = true;

schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$get_cell$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.q;
});

schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$set_cell$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return self__.q = x;
});

schema.utils.SimpleVCell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$q,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$sym$boolean,cljs.core.cst$kw$volatile_DASH_mutable,true], null))], null);
});

schema.utils.SimpleVCell.cljs$lang$type = true;

schema.utils.SimpleVCell.cljs$lang$ctorStr = "schema.utils/SimpleVCell";

schema.utils.SimpleVCell.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"schema.utils/SimpleVCell");
});

schema.utils.__GT_SimpleVCell = (function schema$utils$__GT_SimpleVCell(q){
return (new schema.utils.SimpleVCell(q));
});

/**
 * Turn on run-time function validation for functions compiled when
 * s/compile-fn-validation was true -- has no effect for functions compiled
 * when it is false.
 */
schema.utils.use_fn_validation = (new schema.utils.SimpleVCell(false));
schema.utils.use_fn_validation.get_cell = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(schema.utils.get_cell,schema.utils.use_fn_validation);

schema.utils.use_fn_validation.set_cell = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(schema.utils.set_cell,schema.utils.use_fn_validation);
