// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('stepwise.model');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('xyzzy.core');
stepwise.model.unwrap = (function stepwise$model$unwrap(m){
var or__6156__auto__ = xyzzy.core.node(m);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return m;
}
});
stepwise.model.type_pred = (function stepwise$model$type_pred(var_args){
var args__7221__auto__ = [];
var len__7214__auto___20162 = arguments.length;
var i__7215__auto___20163 = (0);
while(true){
if((i__7215__auto___20163 < len__7214__auto___20162)){
args__7221__auto__.push((arguments[i__7215__auto___20163]));

var G__20164 = (i__7215__auto___20163 + (1));
i__7215__auto___20163 = G__20164;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((0) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((0)),(0))):null);
return stepwise.model.type_pred.cljs$core$IFn$_invoke$arity$variadic(argseq__7222__auto__);
});

stepwise.model.type_pred.cljs$core$IFn$_invoke$arity$variadic = (function (types){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.set(types),cljs.core.cst$kw$type,stepwise.model.unwrap);
});

stepwise.model.type_pred.cljs$lang$maxFixedArity = (0);

stepwise.model.type_pred.cljs$lang$applyTo = (function (seq20161){
return stepwise.model.type_pred.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20161));
});
stepwise.model.atom_QMARK_ = stepwise.model.type_pred.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$bool,cljs.core.cst$kw$keyword,cljs.core.cst$kw$nil,cljs.core.cst$kw$number,cljs.core.cst$kw$symbol], 0));
stepwise.model.bool_QMARK_ = stepwise.model.type_pred.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$bool], 0));
stepwise.model.coll_QMARK_ = stepwise.model.type_pred.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$fn,cljs.core.cst$kw$map,cljs.core.cst$kw$seq,cljs.core.cst$kw$set,cljs.core.cst$kw$vec], 0));
stepwise.model.fn_QMARK_ = stepwise.model.type_pred.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$fn], 0));
stepwise.model.keyword_QMARK_ = stepwise.model.type_pred.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$keyword], 0));
stepwise.model.map_QMARK_ = stepwise.model.type_pred.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$map], 0));
stepwise.model.nil_QMARK_ = stepwise.model.type_pred.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$nil], 0));
stepwise.model.nonempty_QMARK_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.seq,cljs.core.cst$kw$children,stepwise.model.unwrap);
stepwise.model.number_QMARK_ = stepwise.model.type_pred.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$number], 0));
stepwise.model.regex_QMARK_ = stepwise.model.type_pred.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$regex], 0));
stepwise.model.seq_QMARK_ = stepwise.model.type_pred.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$seq], 0));
stepwise.model.set_QMARK_ = stepwise.model.type_pred.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$set], 0));
stepwise.model.string_QMARK_ = stepwise.model.type_pred.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$string], 0));
stepwise.model.stringlike_QMARK_ = stepwise.model.type_pred.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$regex,cljs.core.cst$kw$string], 0));
stepwise.model.symbol_QMARK_ = stepwise.model.type_pred.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$symbol], 0));
stepwise.model.vec_QMARK_ = stepwise.model.type_pred.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$vec], 0));
stepwise.model.classify = (function stepwise$model$classify(x){
var pred__20171 = (function (p1__20165_SHARP_,p2__20166_SHARP_){
return (p1__20165_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__20165_SHARP_.cljs$core$IFn$_invoke$arity$1(p2__20166_SHARP_) : p1__20165_SHARP_.call(null,p2__20166_SHARP_));
});
var expr__20172 = x;
if(cljs.core.truth_(pred__20171(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.true_QMARK_,cljs.core.false_QMARK_),expr__20172))){
return cljs.core.cst$kw$bool;
} else {
if(cljs.core.truth_(pred__20171(cljs.core.keyword_QMARK_,expr__20172))){
return cljs.core.cst$kw$keyword;
} else {
if(cljs.core.truth_(pred__20171(cljs.core.map_QMARK_,expr__20172))){
return cljs.core.cst$kw$map;
} else {
if(cljs.core.truth_(pred__20171(cljs.core.nil_QMARK_,expr__20172))){
return cljs.core.cst$kw$nil;
} else {
if(cljs.core.truth_(pred__20171(cljs.core.number_QMARK_,expr__20172))){
return cljs.core.cst$kw$number;
} else {
if(cljs.core.truth_(pred__20171(((function (pred__20171,expr__20172){
return (function (p1__20167_SHARP_){
return (p1__20167_SHARP_ instanceof RegExp);
});})(pred__20171,expr__20172))
,expr__20172))){
return cljs.core.cst$kw$regex;
} else {
if(cljs.core.truth_(pred__20171(cljs.core.seq_QMARK_,expr__20172))){
return cljs.core.cst$kw$seq;
} else {
if(cljs.core.truth_(pred__20171(cljs.core.set_QMARK_,expr__20172))){
return cljs.core.cst$kw$set;
} else {
if(cljs.core.truth_(pred__20171(cljs.core.string_QMARK_,expr__20172))){
return cljs.core.cst$kw$string;
} else {
if(cljs.core.truth_(pred__20171(cljs.core.symbol_QMARK_,expr__20172))){
return cljs.core.cst$kw$symbol;
} else {
if(cljs.core.truth_(pred__20171(cljs.core.vector_QMARK_,expr__20172))){
return cljs.core.cst$kw$vec;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__20172)].join('')));
}
}
}
}
}
}
}
}
}
}
}
});
/**
 * Returns the parse tree representation of a single Clojure `form`. A parse
 *   tree node is a map containing at minimum a `:type` keyword and either a
 *   `:text` string (if representing an atom) or a `:children` vector (if
 *   representing a collection).
 */
stepwise.model.parse = (function stepwise$model$parse(form){
var type = stepwise.model.classify(form);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$value,form], null),(function (){var G__20175 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20175) {
case "vec":
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$children,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(stepwise$model$parse,form)], null);

break;
case "number":
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,[cljs.core.str(form)].join('')], null);

break;
case "symbol":
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,[cljs.core.str(form)].join('')], null);

break;
case "string":
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,[cljs.core.str(form)].join('')], null);

break;
case "keyword":
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,[cljs.core.str(form)].join('')], null);

break;
case "nil":
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,"nil"], null);

break;
case "regex":
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,form.source], null);

break;
case "bool":
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,[cljs.core.str(form)].join('')], null);

break;
case "seq":
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$children,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(stepwise$model$parse,form)], null);

break;
case "set":
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$children,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(stepwise$model$parse,form)], null);

break;
case "map":
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$children,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(stepwise$model$parse,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(form),cljs.core.vals(form)))], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})()], 0));
});
stepwise.model.zipper = (function stepwise$model$zipper(forms){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$tree,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$program,cljs.core.cst$kw$children,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(stepwise.model.parse,forms)], null)], null);
});
stepwise.model.opener = (function stepwise$model$opener(type){
var G__20178 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20178) {
case "fn":
return "#(";

break;
case "map":
return "{";

break;
case "seq":
return "(";

break;
case "set":
return "#{";

break;
case "vec":
return "[";

break;
case "string":
return "\"";

break;
case "regex":
return "#\"";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
});
stepwise.model.closer = (function stepwise$model$closer(type){
var G__20181 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20181) {
case "fn":
return ")";

break;
case "seq":
return ")";

break;
case "map":
return "}";

break;
case "set":
return "}";

break;
case "vec":
return "]";

break;
case "string":
return "\"";

break;
case "regex":
return "\"";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
});
stepwise.model.stringify = (function stepwise$model$stringify(p__20185){
var map__20191 = p__20185;
var map__20191__$1 = ((((!((map__20191 == null)))?((((map__20191.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20191.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20191):map__20191);
var node = map__20191__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20191__$1,cljs.core.cst$kw$type);
var pred__20193 = ((function (map__20191,map__20191__$1,node,type){
return (function (p1__20183_SHARP_,p2__20184_SHARP_){
return (p1__20183_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__20183_SHARP_.cljs$core$IFn$_invoke$arity$1(p2__20184_SHARP_) : p1__20183_SHARP_.call(null,p2__20184_SHARP_));
});})(map__20191,map__20191__$1,node,type))
;
var expr__20194 = node;
if(cljs.core.truth_(pred__20193(stepwise.model.coll_QMARK_,expr__20194))){
return [cljs.core.str(stepwise.model.opener(type)),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(stepwise$model$stringify,cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(node)))),cljs.core.str(stepwise.model.closer(type))].join('');
} else {
if(cljs.core.truth_(pred__20193(stepwise.model.stringlike_QMARK_,expr__20194))){
return [cljs.core.str(stepwise.model.opener(type)),cljs.core.str(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(node)),cljs.core.str(stepwise.model.closer(type))].join('');
} else {
return cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(node);
}
}
});
