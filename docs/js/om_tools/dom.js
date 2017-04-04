// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('om_tools.dom');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('om.dom');
/**
 * Converts kebab-case to camelCase
 */
om_tools.dom.camel_case = (function om_tools$dom$camel_case(s){
return clojure.string.replace(s,/-(\w)/,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(clojure.string.upper_case,cljs.core.second));
});
/**
 * Converts attributes that are kebab-case and should be camelCase
 */
om_tools.dom.opt_key_case = (function om_tools$dom$opt_key_case(attr){
if(cljs.core.truth_((function (){var or__6156__auto__ = (cljs.core.count(attr) < (5));
if(or__6156__auto__){
return or__6156__auto__;
} else {
var G__18283 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(attr,(0),(5));
switch (G__18283) {
case "data-":
case "aria-":
return true;

break;
default:
return false;

}
}
})())){
return attr;
} else {
return om_tools.dom.camel_case(attr);
}
});
/**
 * Converts aliased attributes
 */
om_tools.dom.opt_key_alias = (function om_tools$dom$opt_key_alias(opt){
var G__18286 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__18286) {
case "class":
return cljs.core.cst$kw$className;

break;
case "for":
return cljs.core.cst$kw$htmlFor;

break;
default:
return opt;

}
});
/**
 * Returns potentially formatted name for DOM element attribute.
 * Converts kebab-case to camelCase.
 */
om_tools.dom.format_opt_key = (function om_tools$dom$format_opt_key(opt_key){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(om_tools.dom.opt_key_case(cljs.core.name(om_tools.dom.opt_key_alias(opt_key))));
});
/**
 * Returns potentially modified value for DOM element attribute.
 * Recursively formats map values (ie :style attribute)
 */
om_tools.dom.format_opt_val = (function om_tools$dom$format_opt_val(opt_val){
if(cljs.core.map_QMARK_(opt_val)){
return (om_tools.dom.format_opts.cljs$core$IFn$_invoke$arity$1 ? om_tools.dom.format_opts.cljs$core$IFn$_invoke$arity$1(opt_val) : om_tools.dom.format_opts.call(null,opt_val));
} else {
return opt_val;

}
});
/**
 * Returns JavaScript object for React DOM attributes from opts map
 */
om_tools.dom.format_opts = (function om_tools$dom$format_opts(opts){
if(cljs.core.map_QMARK_(opts)){
return cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18290){
var vec__18291 = p__18290;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18291,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18291,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opt_key(k),om_tools.dom.format_opt_val(v)], null);
}),opts)));
} else {
return opts;
}
});
om_tools.dom.possible_coll_QMARK_ = (function om_tools$dom$possible_coll_QMARK_(form){
return (cljs.core.coll_QMARK_(form)) || ((form instanceof cljs.core.Symbol)) || (cljs.core.list_QMARK_(form));
});
om_tools.dom.valid_element_QMARK_ = (function om_tools$dom$valid_element_QMARK_(x){
return (function (){var or__6156__auto__ = React.isValidElement;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return React.isValidComponent;
}
})().call(null,x);
});
om_tools.dom.js_opts_QMARK_ = (function om_tools$dom$js_opts_QMARK_(x){
return (cljs.core.object_QMARK_(x)) && (!(om_tools.dom.valid_element_QMARK_(x)));
});
/**
 * Returns a vector of [opts children] for from first and second
 *   argument given to DOM function
 */
om_tools.dom.element_args = (function om_tools$dom$element_args(opts,children){
if((opts == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,children], null);
} else {
if(cljs.core.map_QMARK_(opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opts(opts),children], null);
} else {
if(cljs.core.truth_(om_tools.dom.js_opts_QMARK_(opts))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts,children], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons(opts,children)], null);

}
}
}
});
om_tools.dom.element = (function om_tools$dom$element(ctor,opts,children){
var vec__18293 = om_tools.dom.element_args(opts,children);
var opts__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18293,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18293,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor,cljs.core.flatten(cljs.core.cons(opts__$1,children__$1)));
});
om_tools.dom.a = (function om_tools$dom$a(var_args){
var args18294 = [];
var len__7214__auto___18919 = arguments.length;
var i__7215__auto___18920 = (0);
while(true){
if((i__7215__auto___18920 < len__7214__auto___18919)){
args18294.push((arguments[i__7215__auto___18920]));

var G__18921 = (i__7215__auto___18920 + (1));
i__7215__auto___18920 = G__18921;
continue;
} else {
}
break;
}

var G__18298 = args18294.length;
switch (G__18298) {
case 0:
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18294.slice((1)),(0)));
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.a,null,null);
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.a,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.a.cljs$lang$applyTo = (function (seq18295){
var G__18296 = cljs.core.first(seq18295);
var seq18295__$1 = cljs.core.next(seq18295);
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic(G__18296,seq18295__$1);
});

om_tools.dom.a.cljs$lang$maxFixedArity = (1);

om_tools.dom.abbr = (function om_tools$dom$abbr(var_args){
var args18299 = [];
var len__7214__auto___18923 = arguments.length;
var i__7215__auto___18924 = (0);
while(true){
if((i__7215__auto___18924 < len__7214__auto___18923)){
args18299.push((arguments[i__7215__auto___18924]));

var G__18925 = (i__7215__auto___18924 + (1));
i__7215__auto___18924 = G__18925;
continue;
} else {
}
break;
}

var G__18303 = args18299.length;
switch (G__18303) {
case 0:
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18299.slice((1)),(0)));
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.abbr,null,null);
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.abbr,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.abbr.cljs$lang$applyTo = (function (seq18300){
var G__18301 = cljs.core.first(seq18300);
var seq18300__$1 = cljs.core.next(seq18300);
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(G__18301,seq18300__$1);
});

om_tools.dom.abbr.cljs$lang$maxFixedArity = (1);

om_tools.dom.address = (function om_tools$dom$address(var_args){
var args18304 = [];
var len__7214__auto___18927 = arguments.length;
var i__7215__auto___18928 = (0);
while(true){
if((i__7215__auto___18928 < len__7214__auto___18927)){
args18304.push((arguments[i__7215__auto___18928]));

var G__18929 = (i__7215__auto___18928 + (1));
i__7215__auto___18928 = G__18929;
continue;
} else {
}
break;
}

var G__18308 = args18304.length;
switch (G__18308) {
case 0:
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18304.slice((1)),(0)));
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.address,null,null);
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.address,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.address.cljs$lang$applyTo = (function (seq18305){
var G__18306 = cljs.core.first(seq18305);
var seq18305__$1 = cljs.core.next(seq18305);
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic(G__18306,seq18305__$1);
});

om_tools.dom.address.cljs$lang$maxFixedArity = (1);

om_tools.dom.area = (function om_tools$dom$area(var_args){
var args18309 = [];
var len__7214__auto___18931 = arguments.length;
var i__7215__auto___18932 = (0);
while(true){
if((i__7215__auto___18932 < len__7214__auto___18931)){
args18309.push((arguments[i__7215__auto___18932]));

var G__18933 = (i__7215__auto___18932 + (1));
i__7215__auto___18932 = G__18933;
continue;
} else {
}
break;
}

var G__18313 = args18309.length;
switch (G__18313) {
case 0:
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18309.slice((1)),(0)));
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.area,null,null);
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.area,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.area.cljs$lang$applyTo = (function (seq18310){
var G__18311 = cljs.core.first(seq18310);
var seq18310__$1 = cljs.core.next(seq18310);
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic(G__18311,seq18310__$1);
});

om_tools.dom.area.cljs$lang$maxFixedArity = (1);

om_tools.dom.article = (function om_tools$dom$article(var_args){
var args18314 = [];
var len__7214__auto___18935 = arguments.length;
var i__7215__auto___18936 = (0);
while(true){
if((i__7215__auto___18936 < len__7214__auto___18935)){
args18314.push((arguments[i__7215__auto___18936]));

var G__18937 = (i__7215__auto___18936 + (1));
i__7215__auto___18936 = G__18937;
continue;
} else {
}
break;
}

var G__18318 = args18314.length;
switch (G__18318) {
case 0:
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18314.slice((1)),(0)));
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.article,null,null);
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.article,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.article.cljs$lang$applyTo = (function (seq18315){
var G__18316 = cljs.core.first(seq18315);
var seq18315__$1 = cljs.core.next(seq18315);
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic(G__18316,seq18315__$1);
});

om_tools.dom.article.cljs$lang$maxFixedArity = (1);

om_tools.dom.aside = (function om_tools$dom$aside(var_args){
var args18319 = [];
var len__7214__auto___18939 = arguments.length;
var i__7215__auto___18940 = (0);
while(true){
if((i__7215__auto___18940 < len__7214__auto___18939)){
args18319.push((arguments[i__7215__auto___18940]));

var G__18941 = (i__7215__auto___18940 + (1));
i__7215__auto___18940 = G__18941;
continue;
} else {
}
break;
}

var G__18323 = args18319.length;
switch (G__18323) {
case 0:
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18319.slice((1)),(0)));
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.aside,null,null);
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.aside,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.aside.cljs$lang$applyTo = (function (seq18320){
var G__18321 = cljs.core.first(seq18320);
var seq18320__$1 = cljs.core.next(seq18320);
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic(G__18321,seq18320__$1);
});

om_tools.dom.aside.cljs$lang$maxFixedArity = (1);

om_tools.dom.audio = (function om_tools$dom$audio(var_args){
var args18324 = [];
var len__7214__auto___18943 = arguments.length;
var i__7215__auto___18944 = (0);
while(true){
if((i__7215__auto___18944 < len__7214__auto___18943)){
args18324.push((arguments[i__7215__auto___18944]));

var G__18945 = (i__7215__auto___18944 + (1));
i__7215__auto___18944 = G__18945;
continue;
} else {
}
break;
}

var G__18328 = args18324.length;
switch (G__18328) {
case 0:
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18324.slice((1)),(0)));
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.audio,null,null);
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.audio,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.audio.cljs$lang$applyTo = (function (seq18325){
var G__18326 = cljs.core.first(seq18325);
var seq18325__$1 = cljs.core.next(seq18325);
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic(G__18326,seq18325__$1);
});

om_tools.dom.audio.cljs$lang$maxFixedArity = (1);

om_tools.dom.b = (function om_tools$dom$b(var_args){
var args18329 = [];
var len__7214__auto___18947 = arguments.length;
var i__7215__auto___18948 = (0);
while(true){
if((i__7215__auto___18948 < len__7214__auto___18947)){
args18329.push((arguments[i__7215__auto___18948]));

var G__18949 = (i__7215__auto___18948 + (1));
i__7215__auto___18948 = G__18949;
continue;
} else {
}
break;
}

var G__18333 = args18329.length;
switch (G__18333) {
case 0:
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18329.slice((1)),(0)));
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.b,null,null);
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.b,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.b.cljs$lang$applyTo = (function (seq18330){
var G__18331 = cljs.core.first(seq18330);
var seq18330__$1 = cljs.core.next(seq18330);
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic(G__18331,seq18330__$1);
});

om_tools.dom.b.cljs$lang$maxFixedArity = (1);

om_tools.dom.base = (function om_tools$dom$base(var_args){
var args18334 = [];
var len__7214__auto___18951 = arguments.length;
var i__7215__auto___18952 = (0);
while(true){
if((i__7215__auto___18952 < len__7214__auto___18951)){
args18334.push((arguments[i__7215__auto___18952]));

var G__18953 = (i__7215__auto___18952 + (1));
i__7215__auto___18952 = G__18953;
continue;
} else {
}
break;
}

var G__18338 = args18334.length;
switch (G__18338) {
case 0:
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18334.slice((1)),(0)));
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.base,null,null);
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.base,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.base.cljs$lang$applyTo = (function (seq18335){
var G__18336 = cljs.core.first(seq18335);
var seq18335__$1 = cljs.core.next(seq18335);
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic(G__18336,seq18335__$1);
});

om_tools.dom.base.cljs$lang$maxFixedArity = (1);

om_tools.dom.bdi = (function om_tools$dom$bdi(var_args){
var args18339 = [];
var len__7214__auto___18955 = arguments.length;
var i__7215__auto___18956 = (0);
while(true){
if((i__7215__auto___18956 < len__7214__auto___18955)){
args18339.push((arguments[i__7215__auto___18956]));

var G__18957 = (i__7215__auto___18956 + (1));
i__7215__auto___18956 = G__18957;
continue;
} else {
}
break;
}

var G__18343 = args18339.length;
switch (G__18343) {
case 0:
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18339.slice((1)),(0)));
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.bdi,null,null);
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.bdi,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.bdi.cljs$lang$applyTo = (function (seq18340){
var G__18341 = cljs.core.first(seq18340);
var seq18340__$1 = cljs.core.next(seq18340);
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(G__18341,seq18340__$1);
});

om_tools.dom.bdi.cljs$lang$maxFixedArity = (1);

om_tools.dom.bdo = (function om_tools$dom$bdo(var_args){
var args18344 = [];
var len__7214__auto___18959 = arguments.length;
var i__7215__auto___18960 = (0);
while(true){
if((i__7215__auto___18960 < len__7214__auto___18959)){
args18344.push((arguments[i__7215__auto___18960]));

var G__18961 = (i__7215__auto___18960 + (1));
i__7215__auto___18960 = G__18961;
continue;
} else {
}
break;
}

var G__18348 = args18344.length;
switch (G__18348) {
case 0:
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18344.slice((1)),(0)));
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.bdo,null,null);
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.bdo,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.bdo.cljs$lang$applyTo = (function (seq18345){
var G__18346 = cljs.core.first(seq18345);
var seq18345__$1 = cljs.core.next(seq18345);
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(G__18346,seq18345__$1);
});

om_tools.dom.bdo.cljs$lang$maxFixedArity = (1);

om_tools.dom.big = (function om_tools$dom$big(var_args){
var args18349 = [];
var len__7214__auto___18963 = arguments.length;
var i__7215__auto___18964 = (0);
while(true){
if((i__7215__auto___18964 < len__7214__auto___18963)){
args18349.push((arguments[i__7215__auto___18964]));

var G__18965 = (i__7215__auto___18964 + (1));
i__7215__auto___18964 = G__18965;
continue;
} else {
}
break;
}

var G__18353 = args18349.length;
switch (G__18353) {
case 0:
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18349.slice((1)),(0)));
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.big,null,null);
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.big,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.big.cljs$lang$applyTo = (function (seq18350){
var G__18351 = cljs.core.first(seq18350);
var seq18350__$1 = cljs.core.next(seq18350);
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic(G__18351,seq18350__$1);
});

om_tools.dom.big.cljs$lang$maxFixedArity = (1);

om_tools.dom.blockquote = (function om_tools$dom$blockquote(var_args){
var args18354 = [];
var len__7214__auto___18967 = arguments.length;
var i__7215__auto___18968 = (0);
while(true){
if((i__7215__auto___18968 < len__7214__auto___18967)){
args18354.push((arguments[i__7215__auto___18968]));

var G__18969 = (i__7215__auto___18968 + (1));
i__7215__auto___18968 = G__18969;
continue;
} else {
}
break;
}

var G__18358 = args18354.length;
switch (G__18358) {
case 0:
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18354.slice((1)),(0)));
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.blockquote,null,null);
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.blockquote,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.blockquote.cljs$lang$applyTo = (function (seq18355){
var G__18356 = cljs.core.first(seq18355);
var seq18355__$1 = cljs.core.next(seq18355);
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(G__18356,seq18355__$1);
});

om_tools.dom.blockquote.cljs$lang$maxFixedArity = (1);

om_tools.dom.body = (function om_tools$dom$body(var_args){
var args18359 = [];
var len__7214__auto___18971 = arguments.length;
var i__7215__auto___18972 = (0);
while(true){
if((i__7215__auto___18972 < len__7214__auto___18971)){
args18359.push((arguments[i__7215__auto___18972]));

var G__18973 = (i__7215__auto___18972 + (1));
i__7215__auto___18972 = G__18973;
continue;
} else {
}
break;
}

var G__18363 = args18359.length;
switch (G__18363) {
case 0:
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18359.slice((1)),(0)));
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.body,null,null);
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.body,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.body.cljs$lang$applyTo = (function (seq18360){
var G__18361 = cljs.core.first(seq18360);
var seq18360__$1 = cljs.core.next(seq18360);
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic(G__18361,seq18360__$1);
});

om_tools.dom.body.cljs$lang$maxFixedArity = (1);

om_tools.dom.br = (function om_tools$dom$br(var_args){
var args18364 = [];
var len__7214__auto___18975 = arguments.length;
var i__7215__auto___18976 = (0);
while(true){
if((i__7215__auto___18976 < len__7214__auto___18975)){
args18364.push((arguments[i__7215__auto___18976]));

var G__18977 = (i__7215__auto___18976 + (1));
i__7215__auto___18976 = G__18977;
continue;
} else {
}
break;
}

var G__18368 = args18364.length;
switch (G__18368) {
case 0:
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18364.slice((1)),(0)));
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.br,null,null);
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.br,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.br.cljs$lang$applyTo = (function (seq18365){
var G__18366 = cljs.core.first(seq18365);
var seq18365__$1 = cljs.core.next(seq18365);
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic(G__18366,seq18365__$1);
});

om_tools.dom.br.cljs$lang$maxFixedArity = (1);

om_tools.dom.button = (function om_tools$dom$button(var_args){
var args18369 = [];
var len__7214__auto___18979 = arguments.length;
var i__7215__auto___18980 = (0);
while(true){
if((i__7215__auto___18980 < len__7214__auto___18979)){
args18369.push((arguments[i__7215__auto___18980]));

var G__18981 = (i__7215__auto___18980 + (1));
i__7215__auto___18980 = G__18981;
continue;
} else {
}
break;
}

var G__18373 = args18369.length;
switch (G__18373) {
case 0:
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18369.slice((1)),(0)));
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.button,null,null);
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.button,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.button.cljs$lang$applyTo = (function (seq18370){
var G__18371 = cljs.core.first(seq18370);
var seq18370__$1 = cljs.core.next(seq18370);
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic(G__18371,seq18370__$1);
});

om_tools.dom.button.cljs$lang$maxFixedArity = (1);

om_tools.dom.canvas = (function om_tools$dom$canvas(var_args){
var args18374 = [];
var len__7214__auto___18983 = arguments.length;
var i__7215__auto___18984 = (0);
while(true){
if((i__7215__auto___18984 < len__7214__auto___18983)){
args18374.push((arguments[i__7215__auto___18984]));

var G__18985 = (i__7215__auto___18984 + (1));
i__7215__auto___18984 = G__18985;
continue;
} else {
}
break;
}

var G__18378 = args18374.length;
switch (G__18378) {
case 0:
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18374.slice((1)),(0)));
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.canvas,null,null);
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.canvas,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.canvas.cljs$lang$applyTo = (function (seq18375){
var G__18376 = cljs.core.first(seq18375);
var seq18375__$1 = cljs.core.next(seq18375);
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(G__18376,seq18375__$1);
});

om_tools.dom.canvas.cljs$lang$maxFixedArity = (1);

om_tools.dom.caption = (function om_tools$dom$caption(var_args){
var args18379 = [];
var len__7214__auto___18987 = arguments.length;
var i__7215__auto___18988 = (0);
while(true){
if((i__7215__auto___18988 < len__7214__auto___18987)){
args18379.push((arguments[i__7215__auto___18988]));

var G__18989 = (i__7215__auto___18988 + (1));
i__7215__auto___18988 = G__18989;
continue;
} else {
}
break;
}

var G__18383 = args18379.length;
switch (G__18383) {
case 0:
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18379.slice((1)),(0)));
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.caption,null,null);
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.caption,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.caption.cljs$lang$applyTo = (function (seq18380){
var G__18381 = cljs.core.first(seq18380);
var seq18380__$1 = cljs.core.next(seq18380);
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic(G__18381,seq18380__$1);
});

om_tools.dom.caption.cljs$lang$maxFixedArity = (1);

om_tools.dom.cite = (function om_tools$dom$cite(var_args){
var args18384 = [];
var len__7214__auto___18991 = arguments.length;
var i__7215__auto___18992 = (0);
while(true){
if((i__7215__auto___18992 < len__7214__auto___18991)){
args18384.push((arguments[i__7215__auto___18992]));

var G__18993 = (i__7215__auto___18992 + (1));
i__7215__auto___18992 = G__18993;
continue;
} else {
}
break;
}

var G__18388 = args18384.length;
switch (G__18388) {
case 0:
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18384.slice((1)),(0)));
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.cite,null,null);
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.cite,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.cite.cljs$lang$applyTo = (function (seq18385){
var G__18386 = cljs.core.first(seq18385);
var seq18385__$1 = cljs.core.next(seq18385);
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic(G__18386,seq18385__$1);
});

om_tools.dom.cite.cljs$lang$maxFixedArity = (1);

om_tools.dom.code = (function om_tools$dom$code(var_args){
var args18389 = [];
var len__7214__auto___18995 = arguments.length;
var i__7215__auto___18996 = (0);
while(true){
if((i__7215__auto___18996 < len__7214__auto___18995)){
args18389.push((arguments[i__7215__auto___18996]));

var G__18997 = (i__7215__auto___18996 + (1));
i__7215__auto___18996 = G__18997;
continue;
} else {
}
break;
}

var G__18393 = args18389.length;
switch (G__18393) {
case 0:
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18389.slice((1)),(0)));
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.code,null,null);
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.code,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.code.cljs$lang$applyTo = (function (seq18390){
var G__18391 = cljs.core.first(seq18390);
var seq18390__$1 = cljs.core.next(seq18390);
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic(G__18391,seq18390__$1);
});

om_tools.dom.code.cljs$lang$maxFixedArity = (1);

om_tools.dom.col = (function om_tools$dom$col(var_args){
var args18394 = [];
var len__7214__auto___18999 = arguments.length;
var i__7215__auto___19000 = (0);
while(true){
if((i__7215__auto___19000 < len__7214__auto___18999)){
args18394.push((arguments[i__7215__auto___19000]));

var G__19001 = (i__7215__auto___19000 + (1));
i__7215__auto___19000 = G__19001;
continue;
} else {
}
break;
}

var G__18398 = args18394.length;
switch (G__18398) {
case 0:
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18394.slice((1)),(0)));
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.col,null,null);
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.col,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.col.cljs$lang$applyTo = (function (seq18395){
var G__18396 = cljs.core.first(seq18395);
var seq18395__$1 = cljs.core.next(seq18395);
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic(G__18396,seq18395__$1);
});

om_tools.dom.col.cljs$lang$maxFixedArity = (1);

om_tools.dom.colgroup = (function om_tools$dom$colgroup(var_args){
var args18399 = [];
var len__7214__auto___19003 = arguments.length;
var i__7215__auto___19004 = (0);
while(true){
if((i__7215__auto___19004 < len__7214__auto___19003)){
args18399.push((arguments[i__7215__auto___19004]));

var G__19005 = (i__7215__auto___19004 + (1));
i__7215__auto___19004 = G__19005;
continue;
} else {
}
break;
}

var G__18403 = args18399.length;
switch (G__18403) {
case 0:
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18399.slice((1)),(0)));
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.colgroup,null,null);
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.colgroup,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.colgroup.cljs$lang$applyTo = (function (seq18400){
var G__18401 = cljs.core.first(seq18400);
var seq18400__$1 = cljs.core.next(seq18400);
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(G__18401,seq18400__$1);
});

om_tools.dom.colgroup.cljs$lang$maxFixedArity = (1);

om_tools.dom.data = (function om_tools$dom$data(var_args){
var args18404 = [];
var len__7214__auto___19007 = arguments.length;
var i__7215__auto___19008 = (0);
while(true){
if((i__7215__auto___19008 < len__7214__auto___19007)){
args18404.push((arguments[i__7215__auto___19008]));

var G__19009 = (i__7215__auto___19008 + (1));
i__7215__auto___19008 = G__19009;
continue;
} else {
}
break;
}

var G__18408 = args18404.length;
switch (G__18408) {
case 0:
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18404.slice((1)),(0)));
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.data,null,null);
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.data,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.data.cljs$lang$applyTo = (function (seq18405){
var G__18406 = cljs.core.first(seq18405);
var seq18405__$1 = cljs.core.next(seq18405);
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic(G__18406,seq18405__$1);
});

om_tools.dom.data.cljs$lang$maxFixedArity = (1);

om_tools.dom.datalist = (function om_tools$dom$datalist(var_args){
var args18409 = [];
var len__7214__auto___19011 = arguments.length;
var i__7215__auto___19012 = (0);
while(true){
if((i__7215__auto___19012 < len__7214__auto___19011)){
args18409.push((arguments[i__7215__auto___19012]));

var G__19013 = (i__7215__auto___19012 + (1));
i__7215__auto___19012 = G__19013;
continue;
} else {
}
break;
}

var G__18413 = args18409.length;
switch (G__18413) {
case 0:
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18409.slice((1)),(0)));
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.datalist,null,null);
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.datalist,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.datalist.cljs$lang$applyTo = (function (seq18410){
var G__18411 = cljs.core.first(seq18410);
var seq18410__$1 = cljs.core.next(seq18410);
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(G__18411,seq18410__$1);
});

om_tools.dom.datalist.cljs$lang$maxFixedArity = (1);

om_tools.dom.dd = (function om_tools$dom$dd(var_args){
var args18414 = [];
var len__7214__auto___19015 = arguments.length;
var i__7215__auto___19016 = (0);
while(true){
if((i__7215__auto___19016 < len__7214__auto___19015)){
args18414.push((arguments[i__7215__auto___19016]));

var G__19017 = (i__7215__auto___19016 + (1));
i__7215__auto___19016 = G__19017;
continue;
} else {
}
break;
}

var G__18418 = args18414.length;
switch (G__18418) {
case 0:
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18414.slice((1)),(0)));
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.dd,null,null);
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.dd,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.dd.cljs$lang$applyTo = (function (seq18415){
var G__18416 = cljs.core.first(seq18415);
var seq18415__$1 = cljs.core.next(seq18415);
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic(G__18416,seq18415__$1);
});

om_tools.dom.dd.cljs$lang$maxFixedArity = (1);

om_tools.dom.del = (function om_tools$dom$del(var_args){
var args18419 = [];
var len__7214__auto___19019 = arguments.length;
var i__7215__auto___19020 = (0);
while(true){
if((i__7215__auto___19020 < len__7214__auto___19019)){
args18419.push((arguments[i__7215__auto___19020]));

var G__19021 = (i__7215__auto___19020 + (1));
i__7215__auto___19020 = G__19021;
continue;
} else {
}
break;
}

var G__18423 = args18419.length;
switch (G__18423) {
case 0:
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18419.slice((1)),(0)));
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.del,null,null);
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.del,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.del.cljs$lang$applyTo = (function (seq18420){
var G__18421 = cljs.core.first(seq18420);
var seq18420__$1 = cljs.core.next(seq18420);
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic(G__18421,seq18420__$1);
});

om_tools.dom.del.cljs$lang$maxFixedArity = (1);

om_tools.dom.dfn = (function om_tools$dom$dfn(var_args){
var args18424 = [];
var len__7214__auto___19023 = arguments.length;
var i__7215__auto___19024 = (0);
while(true){
if((i__7215__auto___19024 < len__7214__auto___19023)){
args18424.push((arguments[i__7215__auto___19024]));

var G__19025 = (i__7215__auto___19024 + (1));
i__7215__auto___19024 = G__19025;
continue;
} else {
}
break;
}

var G__18428 = args18424.length;
switch (G__18428) {
case 0:
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18424.slice((1)),(0)));
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.dfn,null,null);
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.dfn,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.dfn.cljs$lang$applyTo = (function (seq18425){
var G__18426 = cljs.core.first(seq18425);
var seq18425__$1 = cljs.core.next(seq18425);
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(G__18426,seq18425__$1);
});

om_tools.dom.dfn.cljs$lang$maxFixedArity = (1);

om_tools.dom.div = (function om_tools$dom$div(var_args){
var args18429 = [];
var len__7214__auto___19027 = arguments.length;
var i__7215__auto___19028 = (0);
while(true){
if((i__7215__auto___19028 < len__7214__auto___19027)){
args18429.push((arguments[i__7215__auto___19028]));

var G__19029 = (i__7215__auto___19028 + (1));
i__7215__auto___19028 = G__19029;
continue;
} else {
}
break;
}

var G__18433 = args18429.length;
switch (G__18433) {
case 0:
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18429.slice((1)),(0)));
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.div,null,null);
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.div,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.div.cljs$lang$applyTo = (function (seq18430){
var G__18431 = cljs.core.first(seq18430);
var seq18430__$1 = cljs.core.next(seq18430);
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic(G__18431,seq18430__$1);
});

om_tools.dom.div.cljs$lang$maxFixedArity = (1);

om_tools.dom.dl = (function om_tools$dom$dl(var_args){
var args18434 = [];
var len__7214__auto___19031 = arguments.length;
var i__7215__auto___19032 = (0);
while(true){
if((i__7215__auto___19032 < len__7214__auto___19031)){
args18434.push((arguments[i__7215__auto___19032]));

var G__19033 = (i__7215__auto___19032 + (1));
i__7215__auto___19032 = G__19033;
continue;
} else {
}
break;
}

var G__18438 = args18434.length;
switch (G__18438) {
case 0:
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18434.slice((1)),(0)));
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.dl,null,null);
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.dl,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.dl.cljs$lang$applyTo = (function (seq18435){
var G__18436 = cljs.core.first(seq18435);
var seq18435__$1 = cljs.core.next(seq18435);
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic(G__18436,seq18435__$1);
});

om_tools.dom.dl.cljs$lang$maxFixedArity = (1);

om_tools.dom.dt = (function om_tools$dom$dt(var_args){
var args18439 = [];
var len__7214__auto___19035 = arguments.length;
var i__7215__auto___19036 = (0);
while(true){
if((i__7215__auto___19036 < len__7214__auto___19035)){
args18439.push((arguments[i__7215__auto___19036]));

var G__19037 = (i__7215__auto___19036 + (1));
i__7215__auto___19036 = G__19037;
continue;
} else {
}
break;
}

var G__18443 = args18439.length;
switch (G__18443) {
case 0:
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18439.slice((1)),(0)));
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.dt,null,null);
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.dt,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.dt.cljs$lang$applyTo = (function (seq18440){
var G__18441 = cljs.core.first(seq18440);
var seq18440__$1 = cljs.core.next(seq18440);
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic(G__18441,seq18440__$1);
});

om_tools.dom.dt.cljs$lang$maxFixedArity = (1);

om_tools.dom.em = (function om_tools$dom$em(var_args){
var args18444 = [];
var len__7214__auto___19039 = arguments.length;
var i__7215__auto___19040 = (0);
while(true){
if((i__7215__auto___19040 < len__7214__auto___19039)){
args18444.push((arguments[i__7215__auto___19040]));

var G__19041 = (i__7215__auto___19040 + (1));
i__7215__auto___19040 = G__19041;
continue;
} else {
}
break;
}

var G__18448 = args18444.length;
switch (G__18448) {
case 0:
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18444.slice((1)),(0)));
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.em,null,null);
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.em,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.em.cljs$lang$applyTo = (function (seq18445){
var G__18446 = cljs.core.first(seq18445);
var seq18445__$1 = cljs.core.next(seq18445);
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic(G__18446,seq18445__$1);
});

om_tools.dom.em.cljs$lang$maxFixedArity = (1);

om_tools.dom.embed = (function om_tools$dom$embed(var_args){
var args18449 = [];
var len__7214__auto___19043 = arguments.length;
var i__7215__auto___19044 = (0);
while(true){
if((i__7215__auto___19044 < len__7214__auto___19043)){
args18449.push((arguments[i__7215__auto___19044]));

var G__19045 = (i__7215__auto___19044 + (1));
i__7215__auto___19044 = G__19045;
continue;
} else {
}
break;
}

var G__18453 = args18449.length;
switch (G__18453) {
case 0:
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18449.slice((1)),(0)));
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.embed,null,null);
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.embed,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.embed.cljs$lang$applyTo = (function (seq18450){
var G__18451 = cljs.core.first(seq18450);
var seq18450__$1 = cljs.core.next(seq18450);
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic(G__18451,seq18450__$1);
});

om_tools.dom.embed.cljs$lang$maxFixedArity = (1);

om_tools.dom.fieldset = (function om_tools$dom$fieldset(var_args){
var args18459 = [];
var len__7214__auto___19047 = arguments.length;
var i__7215__auto___19048 = (0);
while(true){
if((i__7215__auto___19048 < len__7214__auto___19047)){
args18459.push((arguments[i__7215__auto___19048]));

var G__19049 = (i__7215__auto___19048 + (1));
i__7215__auto___19048 = G__19049;
continue;
} else {
}
break;
}

var G__18463 = args18459.length;
switch (G__18463) {
case 0:
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18459.slice((1)),(0)));
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.fieldset,null,null);
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.fieldset,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.fieldset.cljs$lang$applyTo = (function (seq18460){
var G__18461 = cljs.core.first(seq18460);
var seq18460__$1 = cljs.core.next(seq18460);
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(G__18461,seq18460__$1);
});

om_tools.dom.fieldset.cljs$lang$maxFixedArity = (1);

om_tools.dom.figcaption = (function om_tools$dom$figcaption(var_args){
var args18464 = [];
var len__7214__auto___19051 = arguments.length;
var i__7215__auto___19052 = (0);
while(true){
if((i__7215__auto___19052 < len__7214__auto___19051)){
args18464.push((arguments[i__7215__auto___19052]));

var G__19053 = (i__7215__auto___19052 + (1));
i__7215__auto___19052 = G__19053;
continue;
} else {
}
break;
}

var G__18468 = args18464.length;
switch (G__18468) {
case 0:
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18464.slice((1)),(0)));
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.figcaption,null,null);
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.figcaption,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.figcaption.cljs$lang$applyTo = (function (seq18465){
var G__18466 = cljs.core.first(seq18465);
var seq18465__$1 = cljs.core.next(seq18465);
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(G__18466,seq18465__$1);
});

om_tools.dom.figcaption.cljs$lang$maxFixedArity = (1);

om_tools.dom.figure = (function om_tools$dom$figure(var_args){
var args18469 = [];
var len__7214__auto___19055 = arguments.length;
var i__7215__auto___19056 = (0);
while(true){
if((i__7215__auto___19056 < len__7214__auto___19055)){
args18469.push((arguments[i__7215__auto___19056]));

var G__19057 = (i__7215__auto___19056 + (1));
i__7215__auto___19056 = G__19057;
continue;
} else {
}
break;
}

var G__18473 = args18469.length;
switch (G__18473) {
case 0:
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18469.slice((1)),(0)));
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.figure,null,null);
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.figure,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.figure.cljs$lang$applyTo = (function (seq18470){
var G__18471 = cljs.core.first(seq18470);
var seq18470__$1 = cljs.core.next(seq18470);
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic(G__18471,seq18470__$1);
});

om_tools.dom.figure.cljs$lang$maxFixedArity = (1);

om_tools.dom.footer = (function om_tools$dom$footer(var_args){
var args18474 = [];
var len__7214__auto___19059 = arguments.length;
var i__7215__auto___19060 = (0);
while(true){
if((i__7215__auto___19060 < len__7214__auto___19059)){
args18474.push((arguments[i__7215__auto___19060]));

var G__19061 = (i__7215__auto___19060 + (1));
i__7215__auto___19060 = G__19061;
continue;
} else {
}
break;
}

var G__18478 = args18474.length;
switch (G__18478) {
case 0:
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18474.slice((1)),(0)));
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.footer,null,null);
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.footer,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.footer.cljs$lang$applyTo = (function (seq18475){
var G__18476 = cljs.core.first(seq18475);
var seq18475__$1 = cljs.core.next(seq18475);
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic(G__18476,seq18475__$1);
});

om_tools.dom.footer.cljs$lang$maxFixedArity = (1);

om_tools.dom.form = (function om_tools$dom$form(var_args){
var args18479 = [];
var len__7214__auto___19063 = arguments.length;
var i__7215__auto___19064 = (0);
while(true){
if((i__7215__auto___19064 < len__7214__auto___19063)){
args18479.push((arguments[i__7215__auto___19064]));

var G__19065 = (i__7215__auto___19064 + (1));
i__7215__auto___19064 = G__19065;
continue;
} else {
}
break;
}

var G__18483 = args18479.length;
switch (G__18483) {
case 0:
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18479.slice((1)),(0)));
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.form,null,null);
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.form,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.form.cljs$lang$applyTo = (function (seq18480){
var G__18481 = cljs.core.first(seq18480);
var seq18480__$1 = cljs.core.next(seq18480);
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic(G__18481,seq18480__$1);
});

om_tools.dom.form.cljs$lang$maxFixedArity = (1);

om_tools.dom.h1 = (function om_tools$dom$h1(var_args){
var args18484 = [];
var len__7214__auto___19067 = arguments.length;
var i__7215__auto___19068 = (0);
while(true){
if((i__7215__auto___19068 < len__7214__auto___19067)){
args18484.push((arguments[i__7215__auto___19068]));

var G__19069 = (i__7215__auto___19068 + (1));
i__7215__auto___19068 = G__19069;
continue;
} else {
}
break;
}

var G__18488 = args18484.length;
switch (G__18488) {
case 0:
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18484.slice((1)),(0)));
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h1,null,null);
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.h1,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.h1.cljs$lang$applyTo = (function (seq18485){
var G__18486 = cljs.core.first(seq18485);
var seq18485__$1 = cljs.core.next(seq18485);
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic(G__18486,seq18485__$1);
});

om_tools.dom.h1.cljs$lang$maxFixedArity = (1);

om_tools.dom.h2 = (function om_tools$dom$h2(var_args){
var args18489 = [];
var len__7214__auto___19071 = arguments.length;
var i__7215__auto___19072 = (0);
while(true){
if((i__7215__auto___19072 < len__7214__auto___19071)){
args18489.push((arguments[i__7215__auto___19072]));

var G__19073 = (i__7215__auto___19072 + (1));
i__7215__auto___19072 = G__19073;
continue;
} else {
}
break;
}

var G__18493 = args18489.length;
switch (G__18493) {
case 0:
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18489.slice((1)),(0)));
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h2,null,null);
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.h2,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.h2.cljs$lang$applyTo = (function (seq18490){
var G__18491 = cljs.core.first(seq18490);
var seq18490__$1 = cljs.core.next(seq18490);
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic(G__18491,seq18490__$1);
});

om_tools.dom.h2.cljs$lang$maxFixedArity = (1);

om_tools.dom.h3 = (function om_tools$dom$h3(var_args){
var args18494 = [];
var len__7214__auto___19075 = arguments.length;
var i__7215__auto___19076 = (0);
while(true){
if((i__7215__auto___19076 < len__7214__auto___19075)){
args18494.push((arguments[i__7215__auto___19076]));

var G__19077 = (i__7215__auto___19076 + (1));
i__7215__auto___19076 = G__19077;
continue;
} else {
}
break;
}

var G__18498 = args18494.length;
switch (G__18498) {
case 0:
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18494.slice((1)),(0)));
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h3,null,null);
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.h3,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.h3.cljs$lang$applyTo = (function (seq18495){
var G__18496 = cljs.core.first(seq18495);
var seq18495__$1 = cljs.core.next(seq18495);
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic(G__18496,seq18495__$1);
});

om_tools.dom.h3.cljs$lang$maxFixedArity = (1);

om_tools.dom.h4 = (function om_tools$dom$h4(var_args){
var args18499 = [];
var len__7214__auto___19079 = arguments.length;
var i__7215__auto___19080 = (0);
while(true){
if((i__7215__auto___19080 < len__7214__auto___19079)){
args18499.push((arguments[i__7215__auto___19080]));

var G__19081 = (i__7215__auto___19080 + (1));
i__7215__auto___19080 = G__19081;
continue;
} else {
}
break;
}

var G__18503 = args18499.length;
switch (G__18503) {
case 0:
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18499.slice((1)),(0)));
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h4,null,null);
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.h4,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.h4.cljs$lang$applyTo = (function (seq18500){
var G__18501 = cljs.core.first(seq18500);
var seq18500__$1 = cljs.core.next(seq18500);
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic(G__18501,seq18500__$1);
});

om_tools.dom.h4.cljs$lang$maxFixedArity = (1);

om_tools.dom.h5 = (function om_tools$dom$h5(var_args){
var args18504 = [];
var len__7214__auto___19083 = arguments.length;
var i__7215__auto___19084 = (0);
while(true){
if((i__7215__auto___19084 < len__7214__auto___19083)){
args18504.push((arguments[i__7215__auto___19084]));

var G__19085 = (i__7215__auto___19084 + (1));
i__7215__auto___19084 = G__19085;
continue;
} else {
}
break;
}

var G__18508 = args18504.length;
switch (G__18508) {
case 0:
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18504.slice((1)),(0)));
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h5,null,null);
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.h5,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.h5.cljs$lang$applyTo = (function (seq18505){
var G__18506 = cljs.core.first(seq18505);
var seq18505__$1 = cljs.core.next(seq18505);
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic(G__18506,seq18505__$1);
});

om_tools.dom.h5.cljs$lang$maxFixedArity = (1);

om_tools.dom.h6 = (function om_tools$dom$h6(var_args){
var args18509 = [];
var len__7214__auto___19087 = arguments.length;
var i__7215__auto___19088 = (0);
while(true){
if((i__7215__auto___19088 < len__7214__auto___19087)){
args18509.push((arguments[i__7215__auto___19088]));

var G__19089 = (i__7215__auto___19088 + (1));
i__7215__auto___19088 = G__19089;
continue;
} else {
}
break;
}

var G__18513 = args18509.length;
switch (G__18513) {
case 0:
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18509.slice((1)),(0)));
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h6,null,null);
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.h6,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.h6.cljs$lang$applyTo = (function (seq18510){
var G__18511 = cljs.core.first(seq18510);
var seq18510__$1 = cljs.core.next(seq18510);
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic(G__18511,seq18510__$1);
});

om_tools.dom.h6.cljs$lang$maxFixedArity = (1);

om_tools.dom.head = (function om_tools$dom$head(var_args){
var args18514 = [];
var len__7214__auto___19091 = arguments.length;
var i__7215__auto___19092 = (0);
while(true){
if((i__7215__auto___19092 < len__7214__auto___19091)){
args18514.push((arguments[i__7215__auto___19092]));

var G__19093 = (i__7215__auto___19092 + (1));
i__7215__auto___19092 = G__19093;
continue;
} else {
}
break;
}

var G__18518 = args18514.length;
switch (G__18518) {
case 0:
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18514.slice((1)),(0)));
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.head,null,null);
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.head,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.head.cljs$lang$applyTo = (function (seq18515){
var G__18516 = cljs.core.first(seq18515);
var seq18515__$1 = cljs.core.next(seq18515);
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic(G__18516,seq18515__$1);
});

om_tools.dom.head.cljs$lang$maxFixedArity = (1);

om_tools.dom.header = (function om_tools$dom$header(var_args){
var args18519 = [];
var len__7214__auto___19095 = arguments.length;
var i__7215__auto___19096 = (0);
while(true){
if((i__7215__auto___19096 < len__7214__auto___19095)){
args18519.push((arguments[i__7215__auto___19096]));

var G__19097 = (i__7215__auto___19096 + (1));
i__7215__auto___19096 = G__19097;
continue;
} else {
}
break;
}

var G__18523 = args18519.length;
switch (G__18523) {
case 0:
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18519.slice((1)),(0)));
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.header,null,null);
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.header,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.header.cljs$lang$applyTo = (function (seq18520){
var G__18521 = cljs.core.first(seq18520);
var seq18520__$1 = cljs.core.next(seq18520);
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic(G__18521,seq18520__$1);
});

om_tools.dom.header.cljs$lang$maxFixedArity = (1);

om_tools.dom.hr = (function om_tools$dom$hr(var_args){
var args18524 = [];
var len__7214__auto___19099 = arguments.length;
var i__7215__auto___19100 = (0);
while(true){
if((i__7215__auto___19100 < len__7214__auto___19099)){
args18524.push((arguments[i__7215__auto___19100]));

var G__19101 = (i__7215__auto___19100 + (1));
i__7215__auto___19100 = G__19101;
continue;
} else {
}
break;
}

var G__18528 = args18524.length;
switch (G__18528) {
case 0:
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18524.slice((1)),(0)));
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.hr,null,null);
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.hr,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.hr.cljs$lang$applyTo = (function (seq18525){
var G__18526 = cljs.core.first(seq18525);
var seq18525__$1 = cljs.core.next(seq18525);
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic(G__18526,seq18525__$1);
});

om_tools.dom.hr.cljs$lang$maxFixedArity = (1);

om_tools.dom.html = (function om_tools$dom$html(var_args){
var args18529 = [];
var len__7214__auto___19103 = arguments.length;
var i__7215__auto___19104 = (0);
while(true){
if((i__7215__auto___19104 < len__7214__auto___19103)){
args18529.push((arguments[i__7215__auto___19104]));

var G__19105 = (i__7215__auto___19104 + (1));
i__7215__auto___19104 = G__19105;
continue;
} else {
}
break;
}

var G__18533 = args18529.length;
switch (G__18533) {
case 0:
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18529.slice((1)),(0)));
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.html,null,null);
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.html,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.html.cljs$lang$applyTo = (function (seq18530){
var G__18531 = cljs.core.first(seq18530);
var seq18530__$1 = cljs.core.next(seq18530);
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic(G__18531,seq18530__$1);
});

om_tools.dom.html.cljs$lang$maxFixedArity = (1);

om_tools.dom.i = (function om_tools$dom$i(var_args){
var args18534 = [];
var len__7214__auto___19107 = arguments.length;
var i__7215__auto___19108 = (0);
while(true){
if((i__7215__auto___19108 < len__7214__auto___19107)){
args18534.push((arguments[i__7215__auto___19108]));

var G__19109 = (i__7215__auto___19108 + (1));
i__7215__auto___19108 = G__19109;
continue;
} else {
}
break;
}

var G__18538 = args18534.length;
switch (G__18538) {
case 0:
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18534.slice((1)),(0)));
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.i,null,null);
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.i,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.i.cljs$lang$applyTo = (function (seq18535){
var G__18536 = cljs.core.first(seq18535);
var seq18535__$1 = cljs.core.next(seq18535);
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic(G__18536,seq18535__$1);
});

om_tools.dom.i.cljs$lang$maxFixedArity = (1);

om_tools.dom.iframe = (function om_tools$dom$iframe(var_args){
var args18539 = [];
var len__7214__auto___19111 = arguments.length;
var i__7215__auto___19112 = (0);
while(true){
if((i__7215__auto___19112 < len__7214__auto___19111)){
args18539.push((arguments[i__7215__auto___19112]));

var G__19113 = (i__7215__auto___19112 + (1));
i__7215__auto___19112 = G__19113;
continue;
} else {
}
break;
}

var G__18543 = args18539.length;
switch (G__18543) {
case 0:
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18539.slice((1)),(0)));
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.iframe,null,null);
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.iframe,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.iframe.cljs$lang$applyTo = (function (seq18540){
var G__18541 = cljs.core.first(seq18540);
var seq18540__$1 = cljs.core.next(seq18540);
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(G__18541,seq18540__$1);
});

om_tools.dom.iframe.cljs$lang$maxFixedArity = (1);

om_tools.dom.img = (function om_tools$dom$img(var_args){
var args18544 = [];
var len__7214__auto___19115 = arguments.length;
var i__7215__auto___19116 = (0);
while(true){
if((i__7215__auto___19116 < len__7214__auto___19115)){
args18544.push((arguments[i__7215__auto___19116]));

var G__19117 = (i__7215__auto___19116 + (1));
i__7215__auto___19116 = G__19117;
continue;
} else {
}
break;
}

var G__18548 = args18544.length;
switch (G__18548) {
case 0:
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18544.slice((1)),(0)));
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.img,null,null);
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.img,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.img.cljs$lang$applyTo = (function (seq18545){
var G__18546 = cljs.core.first(seq18545);
var seq18545__$1 = cljs.core.next(seq18545);
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic(G__18546,seq18545__$1);
});

om_tools.dom.img.cljs$lang$maxFixedArity = (1);

om_tools.dom.ins = (function om_tools$dom$ins(var_args){
var args18549 = [];
var len__7214__auto___19119 = arguments.length;
var i__7215__auto___19120 = (0);
while(true){
if((i__7215__auto___19120 < len__7214__auto___19119)){
args18549.push((arguments[i__7215__auto___19120]));

var G__19121 = (i__7215__auto___19120 + (1));
i__7215__auto___19120 = G__19121;
continue;
} else {
}
break;
}

var G__18553 = args18549.length;
switch (G__18553) {
case 0:
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18549.slice((1)),(0)));
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.ins,null,null);
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.ins,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.ins.cljs$lang$applyTo = (function (seq18550){
var G__18551 = cljs.core.first(seq18550);
var seq18550__$1 = cljs.core.next(seq18550);
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic(G__18551,seq18550__$1);
});

om_tools.dom.ins.cljs$lang$maxFixedArity = (1);

om_tools.dom.kbd = (function om_tools$dom$kbd(var_args){
var args18554 = [];
var len__7214__auto___19123 = arguments.length;
var i__7215__auto___19124 = (0);
while(true){
if((i__7215__auto___19124 < len__7214__auto___19123)){
args18554.push((arguments[i__7215__auto___19124]));

var G__19125 = (i__7215__auto___19124 + (1));
i__7215__auto___19124 = G__19125;
continue;
} else {
}
break;
}

var G__18558 = args18554.length;
switch (G__18558) {
case 0:
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18554.slice((1)),(0)));
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.kbd,null,null);
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.kbd,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.kbd.cljs$lang$applyTo = (function (seq18555){
var G__18556 = cljs.core.first(seq18555);
var seq18555__$1 = cljs.core.next(seq18555);
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(G__18556,seq18555__$1);
});

om_tools.dom.kbd.cljs$lang$maxFixedArity = (1);

om_tools.dom.keygen = (function om_tools$dom$keygen(var_args){
var args18559 = [];
var len__7214__auto___19127 = arguments.length;
var i__7215__auto___19128 = (0);
while(true){
if((i__7215__auto___19128 < len__7214__auto___19127)){
args18559.push((arguments[i__7215__auto___19128]));

var G__19129 = (i__7215__auto___19128 + (1));
i__7215__auto___19128 = G__19129;
continue;
} else {
}
break;
}

var G__18563 = args18559.length;
switch (G__18563) {
case 0:
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18559.slice((1)),(0)));
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.keygen,null,null);
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.keygen,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.keygen.cljs$lang$applyTo = (function (seq18560){
var G__18561 = cljs.core.first(seq18560);
var seq18560__$1 = cljs.core.next(seq18560);
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(G__18561,seq18560__$1);
});

om_tools.dom.keygen.cljs$lang$maxFixedArity = (1);

om_tools.dom.label = (function om_tools$dom$label(var_args){
var args18564 = [];
var len__7214__auto___19131 = arguments.length;
var i__7215__auto___19132 = (0);
while(true){
if((i__7215__auto___19132 < len__7214__auto___19131)){
args18564.push((arguments[i__7215__auto___19132]));

var G__19133 = (i__7215__auto___19132 + (1));
i__7215__auto___19132 = G__19133;
continue;
} else {
}
break;
}

var G__18568 = args18564.length;
switch (G__18568) {
case 0:
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18564.slice((1)),(0)));
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.label,null,null);
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.label,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.label.cljs$lang$applyTo = (function (seq18565){
var G__18566 = cljs.core.first(seq18565);
var seq18565__$1 = cljs.core.next(seq18565);
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic(G__18566,seq18565__$1);
});

om_tools.dom.label.cljs$lang$maxFixedArity = (1);

om_tools.dom.legend = (function om_tools$dom$legend(var_args){
var args18569 = [];
var len__7214__auto___19135 = arguments.length;
var i__7215__auto___19136 = (0);
while(true){
if((i__7215__auto___19136 < len__7214__auto___19135)){
args18569.push((arguments[i__7215__auto___19136]));

var G__19137 = (i__7215__auto___19136 + (1));
i__7215__auto___19136 = G__19137;
continue;
} else {
}
break;
}

var G__18573 = args18569.length;
switch (G__18573) {
case 0:
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18569.slice((1)),(0)));
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.legend,null,null);
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.legend,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.legend.cljs$lang$applyTo = (function (seq18570){
var G__18571 = cljs.core.first(seq18570);
var seq18570__$1 = cljs.core.next(seq18570);
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic(G__18571,seq18570__$1);
});

om_tools.dom.legend.cljs$lang$maxFixedArity = (1);

om_tools.dom.li = (function om_tools$dom$li(var_args){
var args18574 = [];
var len__7214__auto___19139 = arguments.length;
var i__7215__auto___19140 = (0);
while(true){
if((i__7215__auto___19140 < len__7214__auto___19139)){
args18574.push((arguments[i__7215__auto___19140]));

var G__19141 = (i__7215__auto___19140 + (1));
i__7215__auto___19140 = G__19141;
continue;
} else {
}
break;
}

var G__18578 = args18574.length;
switch (G__18578) {
case 0:
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18574.slice((1)),(0)));
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.li,null,null);
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.li,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.li.cljs$lang$applyTo = (function (seq18575){
var G__18576 = cljs.core.first(seq18575);
var seq18575__$1 = cljs.core.next(seq18575);
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic(G__18576,seq18575__$1);
});

om_tools.dom.li.cljs$lang$maxFixedArity = (1);

om_tools.dom.link = (function om_tools$dom$link(var_args){
var args18579 = [];
var len__7214__auto___19143 = arguments.length;
var i__7215__auto___19144 = (0);
while(true){
if((i__7215__auto___19144 < len__7214__auto___19143)){
args18579.push((arguments[i__7215__auto___19144]));

var G__19145 = (i__7215__auto___19144 + (1));
i__7215__auto___19144 = G__19145;
continue;
} else {
}
break;
}

var G__18583 = args18579.length;
switch (G__18583) {
case 0:
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18579.slice((1)),(0)));
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.link,null,null);
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.link,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.link.cljs$lang$applyTo = (function (seq18580){
var G__18581 = cljs.core.first(seq18580);
var seq18580__$1 = cljs.core.next(seq18580);
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic(G__18581,seq18580__$1);
});

om_tools.dom.link.cljs$lang$maxFixedArity = (1);

om_tools.dom.main = (function om_tools$dom$main(var_args){
var args18584 = [];
var len__7214__auto___19147 = arguments.length;
var i__7215__auto___19148 = (0);
while(true){
if((i__7215__auto___19148 < len__7214__auto___19147)){
args18584.push((arguments[i__7215__auto___19148]));

var G__19149 = (i__7215__auto___19148 + (1));
i__7215__auto___19148 = G__19149;
continue;
} else {
}
break;
}

var G__18588 = args18584.length;
switch (G__18588) {
case 0:
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18584.slice((1)),(0)));
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.main,null,null);
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.main,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.main.cljs$lang$applyTo = (function (seq18585){
var G__18586 = cljs.core.first(seq18585);
var seq18585__$1 = cljs.core.next(seq18585);
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic(G__18586,seq18585__$1);
});

om_tools.dom.main.cljs$lang$maxFixedArity = (1);

om_tools.dom.map = (function om_tools$dom$map(var_args){
var args18589 = [];
var len__7214__auto___19151 = arguments.length;
var i__7215__auto___19152 = (0);
while(true){
if((i__7215__auto___19152 < len__7214__auto___19151)){
args18589.push((arguments[i__7215__auto___19152]));

var G__19153 = (i__7215__auto___19152 + (1));
i__7215__auto___19152 = G__19153;
continue;
} else {
}
break;
}

var G__18593 = args18589.length;
switch (G__18593) {
case 0:
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18589.slice((1)),(0)));
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.map,null,null);
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.map,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.map.cljs$lang$applyTo = (function (seq18590){
var G__18591 = cljs.core.first(seq18590);
var seq18590__$1 = cljs.core.next(seq18590);
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic(G__18591,seq18590__$1);
});

om_tools.dom.map.cljs$lang$maxFixedArity = (1);

om_tools.dom.mark = (function om_tools$dom$mark(var_args){
var args18594 = [];
var len__7214__auto___19155 = arguments.length;
var i__7215__auto___19156 = (0);
while(true){
if((i__7215__auto___19156 < len__7214__auto___19155)){
args18594.push((arguments[i__7215__auto___19156]));

var G__19157 = (i__7215__auto___19156 + (1));
i__7215__auto___19156 = G__19157;
continue;
} else {
}
break;
}

var G__18598 = args18594.length;
switch (G__18598) {
case 0:
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18594.slice((1)),(0)));
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.mark,null,null);
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.mark,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.mark.cljs$lang$applyTo = (function (seq18595){
var G__18596 = cljs.core.first(seq18595);
var seq18595__$1 = cljs.core.next(seq18595);
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic(G__18596,seq18595__$1);
});

om_tools.dom.mark.cljs$lang$maxFixedArity = (1);

om_tools.dom.marquee = (function om_tools$dom$marquee(var_args){
var args18599 = [];
var len__7214__auto___19159 = arguments.length;
var i__7215__auto___19160 = (0);
while(true){
if((i__7215__auto___19160 < len__7214__auto___19159)){
args18599.push((arguments[i__7215__auto___19160]));

var G__19161 = (i__7215__auto___19160 + (1));
i__7215__auto___19160 = G__19161;
continue;
} else {
}
break;
}

var G__18603 = args18599.length;
switch (G__18603) {
case 0:
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18599.slice((1)),(0)));
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.marquee,null,null);
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.marquee,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.marquee.cljs$lang$applyTo = (function (seq18600){
var G__18601 = cljs.core.first(seq18600);
var seq18600__$1 = cljs.core.next(seq18600);
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic(G__18601,seq18600__$1);
});

om_tools.dom.marquee.cljs$lang$maxFixedArity = (1);

om_tools.dom.menu = (function om_tools$dom$menu(var_args){
var args18604 = [];
var len__7214__auto___19163 = arguments.length;
var i__7215__auto___19164 = (0);
while(true){
if((i__7215__auto___19164 < len__7214__auto___19163)){
args18604.push((arguments[i__7215__auto___19164]));

var G__19165 = (i__7215__auto___19164 + (1));
i__7215__auto___19164 = G__19165;
continue;
} else {
}
break;
}

var G__18608 = args18604.length;
switch (G__18608) {
case 0:
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18604.slice((1)),(0)));
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.menu,null,null);
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.menu,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.menu.cljs$lang$applyTo = (function (seq18605){
var G__18606 = cljs.core.first(seq18605);
var seq18605__$1 = cljs.core.next(seq18605);
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic(G__18606,seq18605__$1);
});

om_tools.dom.menu.cljs$lang$maxFixedArity = (1);

om_tools.dom.menuitem = (function om_tools$dom$menuitem(var_args){
var args18609 = [];
var len__7214__auto___19167 = arguments.length;
var i__7215__auto___19168 = (0);
while(true){
if((i__7215__auto___19168 < len__7214__auto___19167)){
args18609.push((arguments[i__7215__auto___19168]));

var G__19169 = (i__7215__auto___19168 + (1));
i__7215__auto___19168 = G__19169;
continue;
} else {
}
break;
}

var G__18613 = args18609.length;
switch (G__18613) {
case 0:
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18609.slice((1)),(0)));
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.menuitem,null,null);
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.menuitem,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.menuitem.cljs$lang$applyTo = (function (seq18610){
var G__18611 = cljs.core.first(seq18610);
var seq18610__$1 = cljs.core.next(seq18610);
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(G__18611,seq18610__$1);
});

om_tools.dom.menuitem.cljs$lang$maxFixedArity = (1);

om_tools.dom.meta = (function om_tools$dom$meta(var_args){
var args18614 = [];
var len__7214__auto___19171 = arguments.length;
var i__7215__auto___19172 = (0);
while(true){
if((i__7215__auto___19172 < len__7214__auto___19171)){
args18614.push((arguments[i__7215__auto___19172]));

var G__19173 = (i__7215__auto___19172 + (1));
i__7215__auto___19172 = G__19173;
continue;
} else {
}
break;
}

var G__18618 = args18614.length;
switch (G__18618) {
case 0:
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18614.slice((1)),(0)));
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.meta,null,null);
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.meta,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.meta.cljs$lang$applyTo = (function (seq18615){
var G__18616 = cljs.core.first(seq18615);
var seq18615__$1 = cljs.core.next(seq18615);
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic(G__18616,seq18615__$1);
});

om_tools.dom.meta.cljs$lang$maxFixedArity = (1);

om_tools.dom.meter = (function om_tools$dom$meter(var_args){
var args18619 = [];
var len__7214__auto___19175 = arguments.length;
var i__7215__auto___19176 = (0);
while(true){
if((i__7215__auto___19176 < len__7214__auto___19175)){
args18619.push((arguments[i__7215__auto___19176]));

var G__19177 = (i__7215__auto___19176 + (1));
i__7215__auto___19176 = G__19177;
continue;
} else {
}
break;
}

var G__18623 = args18619.length;
switch (G__18623) {
case 0:
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18619.slice((1)),(0)));
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.meter,null,null);
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.meter,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.meter.cljs$lang$applyTo = (function (seq18620){
var G__18621 = cljs.core.first(seq18620);
var seq18620__$1 = cljs.core.next(seq18620);
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic(G__18621,seq18620__$1);
});

om_tools.dom.meter.cljs$lang$maxFixedArity = (1);

om_tools.dom.nav = (function om_tools$dom$nav(var_args){
var args18624 = [];
var len__7214__auto___19179 = arguments.length;
var i__7215__auto___19180 = (0);
while(true){
if((i__7215__auto___19180 < len__7214__auto___19179)){
args18624.push((arguments[i__7215__auto___19180]));

var G__19181 = (i__7215__auto___19180 + (1));
i__7215__auto___19180 = G__19181;
continue;
} else {
}
break;
}

var G__18628 = args18624.length;
switch (G__18628) {
case 0:
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18624.slice((1)),(0)));
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.nav,null,null);
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.nav,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.nav.cljs$lang$applyTo = (function (seq18625){
var G__18626 = cljs.core.first(seq18625);
var seq18625__$1 = cljs.core.next(seq18625);
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic(G__18626,seq18625__$1);
});

om_tools.dom.nav.cljs$lang$maxFixedArity = (1);

om_tools.dom.noscript = (function om_tools$dom$noscript(var_args){
var args18629 = [];
var len__7214__auto___19183 = arguments.length;
var i__7215__auto___19184 = (0);
while(true){
if((i__7215__auto___19184 < len__7214__auto___19183)){
args18629.push((arguments[i__7215__auto___19184]));

var G__19185 = (i__7215__auto___19184 + (1));
i__7215__auto___19184 = G__19185;
continue;
} else {
}
break;
}

var G__18633 = args18629.length;
switch (G__18633) {
case 0:
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18629.slice((1)),(0)));
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.noscript,null,null);
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.noscript,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.noscript.cljs$lang$applyTo = (function (seq18630){
var G__18631 = cljs.core.first(seq18630);
var seq18630__$1 = cljs.core.next(seq18630);
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(G__18631,seq18630__$1);
});

om_tools.dom.noscript.cljs$lang$maxFixedArity = (1);

om_tools.dom.object = (function om_tools$dom$object(var_args){
var args18634 = [];
var len__7214__auto___19187 = arguments.length;
var i__7215__auto___19188 = (0);
while(true){
if((i__7215__auto___19188 < len__7214__auto___19187)){
args18634.push((arguments[i__7215__auto___19188]));

var G__19189 = (i__7215__auto___19188 + (1));
i__7215__auto___19188 = G__19189;
continue;
} else {
}
break;
}

var G__18638 = args18634.length;
switch (G__18638) {
case 0:
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18634.slice((1)),(0)));
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.object,null,null);
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.object,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.object.cljs$lang$applyTo = (function (seq18635){
var G__18636 = cljs.core.first(seq18635);
var seq18635__$1 = cljs.core.next(seq18635);
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic(G__18636,seq18635__$1);
});

om_tools.dom.object.cljs$lang$maxFixedArity = (1);

om_tools.dom.ol = (function om_tools$dom$ol(var_args){
var args18639 = [];
var len__7214__auto___19191 = arguments.length;
var i__7215__auto___19192 = (0);
while(true){
if((i__7215__auto___19192 < len__7214__auto___19191)){
args18639.push((arguments[i__7215__auto___19192]));

var G__19193 = (i__7215__auto___19192 + (1));
i__7215__auto___19192 = G__19193;
continue;
} else {
}
break;
}

var G__18643 = args18639.length;
switch (G__18643) {
case 0:
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18639.slice((1)),(0)));
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.ol,null,null);
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.ol,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.ol.cljs$lang$applyTo = (function (seq18640){
var G__18641 = cljs.core.first(seq18640);
var seq18640__$1 = cljs.core.next(seq18640);
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic(G__18641,seq18640__$1);
});

om_tools.dom.ol.cljs$lang$maxFixedArity = (1);

om_tools.dom.optgroup = (function om_tools$dom$optgroup(var_args){
var args18644 = [];
var len__7214__auto___19195 = arguments.length;
var i__7215__auto___19196 = (0);
while(true){
if((i__7215__auto___19196 < len__7214__auto___19195)){
args18644.push((arguments[i__7215__auto___19196]));

var G__19197 = (i__7215__auto___19196 + (1));
i__7215__auto___19196 = G__19197;
continue;
} else {
}
break;
}

var G__18648 = args18644.length;
switch (G__18648) {
case 0:
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18644.slice((1)),(0)));
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.optgroup,null,null);
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.optgroup,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.optgroup.cljs$lang$applyTo = (function (seq18645){
var G__18646 = cljs.core.first(seq18645);
var seq18645__$1 = cljs.core.next(seq18645);
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(G__18646,seq18645__$1);
});

om_tools.dom.optgroup.cljs$lang$maxFixedArity = (1);

om_tools.dom.output = (function om_tools$dom$output(var_args){
var args18649 = [];
var len__7214__auto___19199 = arguments.length;
var i__7215__auto___19200 = (0);
while(true){
if((i__7215__auto___19200 < len__7214__auto___19199)){
args18649.push((arguments[i__7215__auto___19200]));

var G__19201 = (i__7215__auto___19200 + (1));
i__7215__auto___19200 = G__19201;
continue;
} else {
}
break;
}

var G__18653 = args18649.length;
switch (G__18653) {
case 0:
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18649.slice((1)),(0)));
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.output,null,null);
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.output,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.output.cljs$lang$applyTo = (function (seq18650){
var G__18651 = cljs.core.first(seq18650);
var seq18650__$1 = cljs.core.next(seq18650);
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic(G__18651,seq18650__$1);
});

om_tools.dom.output.cljs$lang$maxFixedArity = (1);

om_tools.dom.p = (function om_tools$dom$p(var_args){
var args18654 = [];
var len__7214__auto___19203 = arguments.length;
var i__7215__auto___19204 = (0);
while(true){
if((i__7215__auto___19204 < len__7214__auto___19203)){
args18654.push((arguments[i__7215__auto___19204]));

var G__19205 = (i__7215__auto___19204 + (1));
i__7215__auto___19204 = G__19205;
continue;
} else {
}
break;
}

var G__18658 = args18654.length;
switch (G__18658) {
case 0:
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18654.slice((1)),(0)));
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.p,null,null);
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.p,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.p.cljs$lang$applyTo = (function (seq18655){
var G__18656 = cljs.core.first(seq18655);
var seq18655__$1 = cljs.core.next(seq18655);
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic(G__18656,seq18655__$1);
});

om_tools.dom.p.cljs$lang$maxFixedArity = (1);

om_tools.dom.param = (function om_tools$dom$param(var_args){
var args18659 = [];
var len__7214__auto___19207 = arguments.length;
var i__7215__auto___19208 = (0);
while(true){
if((i__7215__auto___19208 < len__7214__auto___19207)){
args18659.push((arguments[i__7215__auto___19208]));

var G__19209 = (i__7215__auto___19208 + (1));
i__7215__auto___19208 = G__19209;
continue;
} else {
}
break;
}

var G__18663 = args18659.length;
switch (G__18663) {
case 0:
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18659.slice((1)),(0)));
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.param,null,null);
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.param,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.param.cljs$lang$applyTo = (function (seq18660){
var G__18661 = cljs.core.first(seq18660);
var seq18660__$1 = cljs.core.next(seq18660);
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic(G__18661,seq18660__$1);
});

om_tools.dom.param.cljs$lang$maxFixedArity = (1);

om_tools.dom.pre = (function om_tools$dom$pre(var_args){
var args18664 = [];
var len__7214__auto___19211 = arguments.length;
var i__7215__auto___19212 = (0);
while(true){
if((i__7215__auto___19212 < len__7214__auto___19211)){
args18664.push((arguments[i__7215__auto___19212]));

var G__19213 = (i__7215__auto___19212 + (1));
i__7215__auto___19212 = G__19213;
continue;
} else {
}
break;
}

var G__18668 = args18664.length;
switch (G__18668) {
case 0:
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18664.slice((1)),(0)));
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.pre,null,null);
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.pre,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.pre.cljs$lang$applyTo = (function (seq18665){
var G__18666 = cljs.core.first(seq18665);
var seq18665__$1 = cljs.core.next(seq18665);
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic(G__18666,seq18665__$1);
});

om_tools.dom.pre.cljs$lang$maxFixedArity = (1);

om_tools.dom.progress = (function om_tools$dom$progress(var_args){
var args18669 = [];
var len__7214__auto___19215 = arguments.length;
var i__7215__auto___19216 = (0);
while(true){
if((i__7215__auto___19216 < len__7214__auto___19215)){
args18669.push((arguments[i__7215__auto___19216]));

var G__19217 = (i__7215__auto___19216 + (1));
i__7215__auto___19216 = G__19217;
continue;
} else {
}
break;
}

var G__18673 = args18669.length;
switch (G__18673) {
case 0:
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18669.slice((1)),(0)));
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.progress,null,null);
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.progress,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.progress.cljs$lang$applyTo = (function (seq18670){
var G__18671 = cljs.core.first(seq18670);
var seq18670__$1 = cljs.core.next(seq18670);
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic(G__18671,seq18670__$1);
});

om_tools.dom.progress.cljs$lang$maxFixedArity = (1);

om_tools.dom.q = (function om_tools$dom$q(var_args){
var args18674 = [];
var len__7214__auto___19219 = arguments.length;
var i__7215__auto___19220 = (0);
while(true){
if((i__7215__auto___19220 < len__7214__auto___19219)){
args18674.push((arguments[i__7215__auto___19220]));

var G__19221 = (i__7215__auto___19220 + (1));
i__7215__auto___19220 = G__19221;
continue;
} else {
}
break;
}

var G__18678 = args18674.length;
switch (G__18678) {
case 0:
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18674.slice((1)),(0)));
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.q,null,null);
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.q,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.q.cljs$lang$applyTo = (function (seq18675){
var G__18676 = cljs.core.first(seq18675);
var seq18675__$1 = cljs.core.next(seq18675);
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic(G__18676,seq18675__$1);
});

om_tools.dom.q.cljs$lang$maxFixedArity = (1);

om_tools.dom.rp = (function om_tools$dom$rp(var_args){
var args18679 = [];
var len__7214__auto___19223 = arguments.length;
var i__7215__auto___19224 = (0);
while(true){
if((i__7215__auto___19224 < len__7214__auto___19223)){
args18679.push((arguments[i__7215__auto___19224]));

var G__19225 = (i__7215__auto___19224 + (1));
i__7215__auto___19224 = G__19225;
continue;
} else {
}
break;
}

var G__18683 = args18679.length;
switch (G__18683) {
case 0:
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18679.slice((1)),(0)));
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.rp,null,null);
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.rp,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.rp.cljs$lang$applyTo = (function (seq18680){
var G__18681 = cljs.core.first(seq18680);
var seq18680__$1 = cljs.core.next(seq18680);
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic(G__18681,seq18680__$1);
});

om_tools.dom.rp.cljs$lang$maxFixedArity = (1);

om_tools.dom.rt = (function om_tools$dom$rt(var_args){
var args18684 = [];
var len__7214__auto___19227 = arguments.length;
var i__7215__auto___19228 = (0);
while(true){
if((i__7215__auto___19228 < len__7214__auto___19227)){
args18684.push((arguments[i__7215__auto___19228]));

var G__19229 = (i__7215__auto___19228 + (1));
i__7215__auto___19228 = G__19229;
continue;
} else {
}
break;
}

var G__18688 = args18684.length;
switch (G__18688) {
case 0:
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18684.slice((1)),(0)));
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.rt,null,null);
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.rt,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.rt.cljs$lang$applyTo = (function (seq18685){
var G__18686 = cljs.core.first(seq18685);
var seq18685__$1 = cljs.core.next(seq18685);
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic(G__18686,seq18685__$1);
});

om_tools.dom.rt.cljs$lang$maxFixedArity = (1);

om_tools.dom.ruby = (function om_tools$dom$ruby(var_args){
var args18689 = [];
var len__7214__auto___19231 = arguments.length;
var i__7215__auto___19232 = (0);
while(true){
if((i__7215__auto___19232 < len__7214__auto___19231)){
args18689.push((arguments[i__7215__auto___19232]));

var G__19233 = (i__7215__auto___19232 + (1));
i__7215__auto___19232 = G__19233;
continue;
} else {
}
break;
}

var G__18693 = args18689.length;
switch (G__18693) {
case 0:
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18689.slice((1)),(0)));
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.ruby,null,null);
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.ruby,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.ruby.cljs$lang$applyTo = (function (seq18690){
var G__18691 = cljs.core.first(seq18690);
var seq18690__$1 = cljs.core.next(seq18690);
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(G__18691,seq18690__$1);
});

om_tools.dom.ruby.cljs$lang$maxFixedArity = (1);

om_tools.dom.s = (function om_tools$dom$s(var_args){
var args18694 = [];
var len__7214__auto___19235 = arguments.length;
var i__7215__auto___19236 = (0);
while(true){
if((i__7215__auto___19236 < len__7214__auto___19235)){
args18694.push((arguments[i__7215__auto___19236]));

var G__19237 = (i__7215__auto___19236 + (1));
i__7215__auto___19236 = G__19237;
continue;
} else {
}
break;
}

var G__18698 = args18694.length;
switch (G__18698) {
case 0:
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18694.slice((1)),(0)));
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.s,null,null);
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.s,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.s.cljs$lang$applyTo = (function (seq18695){
var G__18696 = cljs.core.first(seq18695);
var seq18695__$1 = cljs.core.next(seq18695);
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic(G__18696,seq18695__$1);
});

om_tools.dom.s.cljs$lang$maxFixedArity = (1);

om_tools.dom.samp = (function om_tools$dom$samp(var_args){
var args18699 = [];
var len__7214__auto___19239 = arguments.length;
var i__7215__auto___19240 = (0);
while(true){
if((i__7215__auto___19240 < len__7214__auto___19239)){
args18699.push((arguments[i__7215__auto___19240]));

var G__19241 = (i__7215__auto___19240 + (1));
i__7215__auto___19240 = G__19241;
continue;
} else {
}
break;
}

var G__18703 = args18699.length;
switch (G__18703) {
case 0:
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18699.slice((1)),(0)));
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.samp,null,null);
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.samp,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.samp.cljs$lang$applyTo = (function (seq18700){
var G__18701 = cljs.core.first(seq18700);
var seq18700__$1 = cljs.core.next(seq18700);
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic(G__18701,seq18700__$1);
});

om_tools.dom.samp.cljs$lang$maxFixedArity = (1);

om_tools.dom.script = (function om_tools$dom$script(var_args){
var args18704 = [];
var len__7214__auto___19243 = arguments.length;
var i__7215__auto___19244 = (0);
while(true){
if((i__7215__auto___19244 < len__7214__auto___19243)){
args18704.push((arguments[i__7215__auto___19244]));

var G__19245 = (i__7215__auto___19244 + (1));
i__7215__auto___19244 = G__19245;
continue;
} else {
}
break;
}

var G__18708 = args18704.length;
switch (G__18708) {
case 0:
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18704.slice((1)),(0)));
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.script,null,null);
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.script,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.script.cljs$lang$applyTo = (function (seq18705){
var G__18706 = cljs.core.first(seq18705);
var seq18705__$1 = cljs.core.next(seq18705);
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic(G__18706,seq18705__$1);
});

om_tools.dom.script.cljs$lang$maxFixedArity = (1);

om_tools.dom.section = (function om_tools$dom$section(var_args){
var args18709 = [];
var len__7214__auto___19247 = arguments.length;
var i__7215__auto___19248 = (0);
while(true){
if((i__7215__auto___19248 < len__7214__auto___19247)){
args18709.push((arguments[i__7215__auto___19248]));

var G__19249 = (i__7215__auto___19248 + (1));
i__7215__auto___19248 = G__19249;
continue;
} else {
}
break;
}

var G__18713 = args18709.length;
switch (G__18713) {
case 0:
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18709.slice((1)),(0)));
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.section,null,null);
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.section,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.section.cljs$lang$applyTo = (function (seq18710){
var G__18711 = cljs.core.first(seq18710);
var seq18710__$1 = cljs.core.next(seq18710);
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic(G__18711,seq18710__$1);
});

om_tools.dom.section.cljs$lang$maxFixedArity = (1);

om_tools.dom.select = (function om_tools$dom$select(var_args){
var args18714 = [];
var len__7214__auto___19251 = arguments.length;
var i__7215__auto___19252 = (0);
while(true){
if((i__7215__auto___19252 < len__7214__auto___19251)){
args18714.push((arguments[i__7215__auto___19252]));

var G__19253 = (i__7215__auto___19252 + (1));
i__7215__auto___19252 = G__19253;
continue;
} else {
}
break;
}

var G__18718 = args18714.length;
switch (G__18718) {
case 0:
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18714.slice((1)),(0)));
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.select,null,null);
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.select,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.select.cljs$lang$applyTo = (function (seq18715){
var G__18716 = cljs.core.first(seq18715);
var seq18715__$1 = cljs.core.next(seq18715);
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic(G__18716,seq18715__$1);
});

om_tools.dom.select.cljs$lang$maxFixedArity = (1);

om_tools.dom.small = (function om_tools$dom$small(var_args){
var args18719 = [];
var len__7214__auto___19255 = arguments.length;
var i__7215__auto___19256 = (0);
while(true){
if((i__7215__auto___19256 < len__7214__auto___19255)){
args18719.push((arguments[i__7215__auto___19256]));

var G__19257 = (i__7215__auto___19256 + (1));
i__7215__auto___19256 = G__19257;
continue;
} else {
}
break;
}

var G__18723 = args18719.length;
switch (G__18723) {
case 0:
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18719.slice((1)),(0)));
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.small,null,null);
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.small,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.small.cljs$lang$applyTo = (function (seq18720){
var G__18721 = cljs.core.first(seq18720);
var seq18720__$1 = cljs.core.next(seq18720);
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic(G__18721,seq18720__$1);
});

om_tools.dom.small.cljs$lang$maxFixedArity = (1);

om_tools.dom.source = (function om_tools$dom$source(var_args){
var args18724 = [];
var len__7214__auto___19259 = arguments.length;
var i__7215__auto___19260 = (0);
while(true){
if((i__7215__auto___19260 < len__7214__auto___19259)){
args18724.push((arguments[i__7215__auto___19260]));

var G__19261 = (i__7215__auto___19260 + (1));
i__7215__auto___19260 = G__19261;
continue;
} else {
}
break;
}

var G__18728 = args18724.length;
switch (G__18728) {
case 0:
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18724.slice((1)),(0)));
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.source,null,null);
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.source,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.source.cljs$lang$applyTo = (function (seq18725){
var G__18726 = cljs.core.first(seq18725);
var seq18725__$1 = cljs.core.next(seq18725);
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic(G__18726,seq18725__$1);
});

om_tools.dom.source.cljs$lang$maxFixedArity = (1);

om_tools.dom.span = (function om_tools$dom$span(var_args){
var args18729 = [];
var len__7214__auto___19263 = arguments.length;
var i__7215__auto___19264 = (0);
while(true){
if((i__7215__auto___19264 < len__7214__auto___19263)){
args18729.push((arguments[i__7215__auto___19264]));

var G__19265 = (i__7215__auto___19264 + (1));
i__7215__auto___19264 = G__19265;
continue;
} else {
}
break;
}

var G__18733 = args18729.length;
switch (G__18733) {
case 0:
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18729.slice((1)),(0)));
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.span,null,null);
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.span,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.span.cljs$lang$applyTo = (function (seq18730){
var G__18731 = cljs.core.first(seq18730);
var seq18730__$1 = cljs.core.next(seq18730);
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic(G__18731,seq18730__$1);
});

om_tools.dom.span.cljs$lang$maxFixedArity = (1);

om_tools.dom.strong = (function om_tools$dom$strong(var_args){
var args18734 = [];
var len__7214__auto___19267 = arguments.length;
var i__7215__auto___19268 = (0);
while(true){
if((i__7215__auto___19268 < len__7214__auto___19267)){
args18734.push((arguments[i__7215__auto___19268]));

var G__19269 = (i__7215__auto___19268 + (1));
i__7215__auto___19268 = G__19269;
continue;
} else {
}
break;
}

var G__18738 = args18734.length;
switch (G__18738) {
case 0:
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18734.slice((1)),(0)));
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.strong,null,null);
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.strong,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.strong.cljs$lang$applyTo = (function (seq18735){
var G__18736 = cljs.core.first(seq18735);
var seq18735__$1 = cljs.core.next(seq18735);
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic(G__18736,seq18735__$1);
});

om_tools.dom.strong.cljs$lang$maxFixedArity = (1);

om_tools.dom.style = (function om_tools$dom$style(var_args){
var args18739 = [];
var len__7214__auto___19271 = arguments.length;
var i__7215__auto___19272 = (0);
while(true){
if((i__7215__auto___19272 < len__7214__auto___19271)){
args18739.push((arguments[i__7215__auto___19272]));

var G__19273 = (i__7215__auto___19272 + (1));
i__7215__auto___19272 = G__19273;
continue;
} else {
}
break;
}

var G__18743 = args18739.length;
switch (G__18743) {
case 0:
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18739.slice((1)),(0)));
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.style,null,null);
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.style,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.style.cljs$lang$applyTo = (function (seq18740){
var G__18741 = cljs.core.first(seq18740);
var seq18740__$1 = cljs.core.next(seq18740);
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic(G__18741,seq18740__$1);
});

om_tools.dom.style.cljs$lang$maxFixedArity = (1);

om_tools.dom.sub = (function om_tools$dom$sub(var_args){
var args18744 = [];
var len__7214__auto___19275 = arguments.length;
var i__7215__auto___19276 = (0);
while(true){
if((i__7215__auto___19276 < len__7214__auto___19275)){
args18744.push((arguments[i__7215__auto___19276]));

var G__19277 = (i__7215__auto___19276 + (1));
i__7215__auto___19276 = G__19277;
continue;
} else {
}
break;
}

var G__18748 = args18744.length;
switch (G__18748) {
case 0:
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18744.slice((1)),(0)));
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.sub,null,null);
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.sub,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.sub.cljs$lang$applyTo = (function (seq18745){
var G__18746 = cljs.core.first(seq18745);
var seq18745__$1 = cljs.core.next(seq18745);
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic(G__18746,seq18745__$1);
});

om_tools.dom.sub.cljs$lang$maxFixedArity = (1);

om_tools.dom.summary = (function om_tools$dom$summary(var_args){
var args18749 = [];
var len__7214__auto___19279 = arguments.length;
var i__7215__auto___19280 = (0);
while(true){
if((i__7215__auto___19280 < len__7214__auto___19279)){
args18749.push((arguments[i__7215__auto___19280]));

var G__19281 = (i__7215__auto___19280 + (1));
i__7215__auto___19280 = G__19281;
continue;
} else {
}
break;
}

var G__18753 = args18749.length;
switch (G__18753) {
case 0:
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18749.slice((1)),(0)));
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.summary,null,null);
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.summary,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.summary.cljs$lang$applyTo = (function (seq18750){
var G__18751 = cljs.core.first(seq18750);
var seq18750__$1 = cljs.core.next(seq18750);
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic(G__18751,seq18750__$1);
});

om_tools.dom.summary.cljs$lang$maxFixedArity = (1);

om_tools.dom.sup = (function om_tools$dom$sup(var_args){
var args18754 = [];
var len__7214__auto___19283 = arguments.length;
var i__7215__auto___19284 = (0);
while(true){
if((i__7215__auto___19284 < len__7214__auto___19283)){
args18754.push((arguments[i__7215__auto___19284]));

var G__19285 = (i__7215__auto___19284 + (1));
i__7215__auto___19284 = G__19285;
continue;
} else {
}
break;
}

var G__18758 = args18754.length;
switch (G__18758) {
case 0:
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18754.slice((1)),(0)));
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.sup,null,null);
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.sup,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.sup.cljs$lang$applyTo = (function (seq18755){
var G__18756 = cljs.core.first(seq18755);
var seq18755__$1 = cljs.core.next(seq18755);
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic(G__18756,seq18755__$1);
});

om_tools.dom.sup.cljs$lang$maxFixedArity = (1);

om_tools.dom.table = (function om_tools$dom$table(var_args){
var args18759 = [];
var len__7214__auto___19287 = arguments.length;
var i__7215__auto___19288 = (0);
while(true){
if((i__7215__auto___19288 < len__7214__auto___19287)){
args18759.push((arguments[i__7215__auto___19288]));

var G__19289 = (i__7215__auto___19288 + (1));
i__7215__auto___19288 = G__19289;
continue;
} else {
}
break;
}

var G__18763 = args18759.length;
switch (G__18763) {
case 0:
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18759.slice((1)),(0)));
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.table,null,null);
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.table,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.table.cljs$lang$applyTo = (function (seq18760){
var G__18761 = cljs.core.first(seq18760);
var seq18760__$1 = cljs.core.next(seq18760);
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic(G__18761,seq18760__$1);
});

om_tools.dom.table.cljs$lang$maxFixedArity = (1);

om_tools.dom.tbody = (function om_tools$dom$tbody(var_args){
var args18764 = [];
var len__7214__auto___19291 = arguments.length;
var i__7215__auto___19292 = (0);
while(true){
if((i__7215__auto___19292 < len__7214__auto___19291)){
args18764.push((arguments[i__7215__auto___19292]));

var G__19293 = (i__7215__auto___19292 + (1));
i__7215__auto___19292 = G__19293;
continue;
} else {
}
break;
}

var G__18768 = args18764.length;
switch (G__18768) {
case 0:
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18764.slice((1)),(0)));
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.tbody,null,null);
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.tbody,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.tbody.cljs$lang$applyTo = (function (seq18765){
var G__18766 = cljs.core.first(seq18765);
var seq18765__$1 = cljs.core.next(seq18765);
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(G__18766,seq18765__$1);
});

om_tools.dom.tbody.cljs$lang$maxFixedArity = (1);

om_tools.dom.td = (function om_tools$dom$td(var_args){
var args18769 = [];
var len__7214__auto___19295 = arguments.length;
var i__7215__auto___19296 = (0);
while(true){
if((i__7215__auto___19296 < len__7214__auto___19295)){
args18769.push((arguments[i__7215__auto___19296]));

var G__19297 = (i__7215__auto___19296 + (1));
i__7215__auto___19296 = G__19297;
continue;
} else {
}
break;
}

var G__18773 = args18769.length;
switch (G__18773) {
case 0:
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18769.slice((1)),(0)));
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.td,null,null);
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.td,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.td.cljs$lang$applyTo = (function (seq18770){
var G__18771 = cljs.core.first(seq18770);
var seq18770__$1 = cljs.core.next(seq18770);
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic(G__18771,seq18770__$1);
});

om_tools.dom.td.cljs$lang$maxFixedArity = (1);

om_tools.dom.tfoot = (function om_tools$dom$tfoot(var_args){
var args18774 = [];
var len__7214__auto___19299 = arguments.length;
var i__7215__auto___19300 = (0);
while(true){
if((i__7215__auto___19300 < len__7214__auto___19299)){
args18774.push((arguments[i__7215__auto___19300]));

var G__19301 = (i__7215__auto___19300 + (1));
i__7215__auto___19300 = G__19301;
continue;
} else {
}
break;
}

var G__18778 = args18774.length;
switch (G__18778) {
case 0:
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18774.slice((1)),(0)));
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.tfoot,null,null);
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.tfoot,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.tfoot.cljs$lang$applyTo = (function (seq18775){
var G__18776 = cljs.core.first(seq18775);
var seq18775__$1 = cljs.core.next(seq18775);
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(G__18776,seq18775__$1);
});

om_tools.dom.tfoot.cljs$lang$maxFixedArity = (1);

om_tools.dom.th = (function om_tools$dom$th(var_args){
var args18779 = [];
var len__7214__auto___19303 = arguments.length;
var i__7215__auto___19304 = (0);
while(true){
if((i__7215__auto___19304 < len__7214__auto___19303)){
args18779.push((arguments[i__7215__auto___19304]));

var G__19305 = (i__7215__auto___19304 + (1));
i__7215__auto___19304 = G__19305;
continue;
} else {
}
break;
}

var G__18783 = args18779.length;
switch (G__18783) {
case 0:
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18779.slice((1)),(0)));
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.th,null,null);
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.th,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.th.cljs$lang$applyTo = (function (seq18780){
var G__18781 = cljs.core.first(seq18780);
var seq18780__$1 = cljs.core.next(seq18780);
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic(G__18781,seq18780__$1);
});

om_tools.dom.th.cljs$lang$maxFixedArity = (1);

om_tools.dom.thead = (function om_tools$dom$thead(var_args){
var args18784 = [];
var len__7214__auto___19307 = arguments.length;
var i__7215__auto___19308 = (0);
while(true){
if((i__7215__auto___19308 < len__7214__auto___19307)){
args18784.push((arguments[i__7215__auto___19308]));

var G__19309 = (i__7215__auto___19308 + (1));
i__7215__auto___19308 = G__19309;
continue;
} else {
}
break;
}

var G__18788 = args18784.length;
switch (G__18788) {
case 0:
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18784.slice((1)),(0)));
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.thead,null,null);
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.thead,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.thead.cljs$lang$applyTo = (function (seq18785){
var G__18786 = cljs.core.first(seq18785);
var seq18785__$1 = cljs.core.next(seq18785);
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic(G__18786,seq18785__$1);
});

om_tools.dom.thead.cljs$lang$maxFixedArity = (1);

om_tools.dom.time = (function om_tools$dom$time(var_args){
var args18789 = [];
var len__7214__auto___19311 = arguments.length;
var i__7215__auto___19312 = (0);
while(true){
if((i__7215__auto___19312 < len__7214__auto___19311)){
args18789.push((arguments[i__7215__auto___19312]));

var G__19313 = (i__7215__auto___19312 + (1));
i__7215__auto___19312 = G__19313;
continue;
} else {
}
break;
}

var G__18793 = args18789.length;
switch (G__18793) {
case 0:
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18789.slice((1)),(0)));
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.time,null,null);
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.time,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.time.cljs$lang$applyTo = (function (seq18790){
var G__18791 = cljs.core.first(seq18790);
var seq18790__$1 = cljs.core.next(seq18790);
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic(G__18791,seq18790__$1);
});

om_tools.dom.time.cljs$lang$maxFixedArity = (1);

om_tools.dom.title = (function om_tools$dom$title(var_args){
var args18794 = [];
var len__7214__auto___19315 = arguments.length;
var i__7215__auto___19316 = (0);
while(true){
if((i__7215__auto___19316 < len__7214__auto___19315)){
args18794.push((arguments[i__7215__auto___19316]));

var G__19317 = (i__7215__auto___19316 + (1));
i__7215__auto___19316 = G__19317;
continue;
} else {
}
break;
}

var G__18798 = args18794.length;
switch (G__18798) {
case 0:
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18794.slice((1)),(0)));
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.title,null,null);
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.title,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.title.cljs$lang$applyTo = (function (seq18795){
var G__18796 = cljs.core.first(seq18795);
var seq18795__$1 = cljs.core.next(seq18795);
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic(G__18796,seq18795__$1);
});

om_tools.dom.title.cljs$lang$maxFixedArity = (1);

om_tools.dom.tr = (function om_tools$dom$tr(var_args){
var args18799 = [];
var len__7214__auto___19319 = arguments.length;
var i__7215__auto___19320 = (0);
while(true){
if((i__7215__auto___19320 < len__7214__auto___19319)){
args18799.push((arguments[i__7215__auto___19320]));

var G__19321 = (i__7215__auto___19320 + (1));
i__7215__auto___19320 = G__19321;
continue;
} else {
}
break;
}

var G__18803 = args18799.length;
switch (G__18803) {
case 0:
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18799.slice((1)),(0)));
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.tr,null,null);
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.tr,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.tr.cljs$lang$applyTo = (function (seq18800){
var G__18801 = cljs.core.first(seq18800);
var seq18800__$1 = cljs.core.next(seq18800);
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic(G__18801,seq18800__$1);
});

om_tools.dom.tr.cljs$lang$maxFixedArity = (1);

om_tools.dom.track = (function om_tools$dom$track(var_args){
var args18804 = [];
var len__7214__auto___19323 = arguments.length;
var i__7215__auto___19324 = (0);
while(true){
if((i__7215__auto___19324 < len__7214__auto___19323)){
args18804.push((arguments[i__7215__auto___19324]));

var G__19325 = (i__7215__auto___19324 + (1));
i__7215__auto___19324 = G__19325;
continue;
} else {
}
break;
}

var G__18808 = args18804.length;
switch (G__18808) {
case 0:
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18804.slice((1)),(0)));
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.track,null,null);
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.track,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.track.cljs$lang$applyTo = (function (seq18805){
var G__18806 = cljs.core.first(seq18805);
var seq18805__$1 = cljs.core.next(seq18805);
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic(G__18806,seq18805__$1);
});

om_tools.dom.track.cljs$lang$maxFixedArity = (1);

om_tools.dom.u = (function om_tools$dom$u(var_args){
var args18809 = [];
var len__7214__auto___19327 = arguments.length;
var i__7215__auto___19328 = (0);
while(true){
if((i__7215__auto___19328 < len__7214__auto___19327)){
args18809.push((arguments[i__7215__auto___19328]));

var G__19329 = (i__7215__auto___19328 + (1));
i__7215__auto___19328 = G__19329;
continue;
} else {
}
break;
}

var G__18813 = args18809.length;
switch (G__18813) {
case 0:
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18809.slice((1)),(0)));
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.u,null,null);
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.u,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.u.cljs$lang$applyTo = (function (seq18810){
var G__18811 = cljs.core.first(seq18810);
var seq18810__$1 = cljs.core.next(seq18810);
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic(G__18811,seq18810__$1);
});

om_tools.dom.u.cljs$lang$maxFixedArity = (1);

om_tools.dom.ul = (function om_tools$dom$ul(var_args){
var args18814 = [];
var len__7214__auto___19331 = arguments.length;
var i__7215__auto___19332 = (0);
while(true){
if((i__7215__auto___19332 < len__7214__auto___19331)){
args18814.push((arguments[i__7215__auto___19332]));

var G__19333 = (i__7215__auto___19332 + (1));
i__7215__auto___19332 = G__19333;
continue;
} else {
}
break;
}

var G__18818 = args18814.length;
switch (G__18818) {
case 0:
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18814.slice((1)),(0)));
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.ul,null,null);
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.ul,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.ul.cljs$lang$applyTo = (function (seq18815){
var G__18816 = cljs.core.first(seq18815);
var seq18815__$1 = cljs.core.next(seq18815);
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic(G__18816,seq18815__$1);
});

om_tools.dom.ul.cljs$lang$maxFixedArity = (1);

om_tools.dom.var$ = (function om_tools$dom$var(var_args){
var args18819 = [];
var len__7214__auto___19335 = arguments.length;
var i__7215__auto___19336 = (0);
while(true){
if((i__7215__auto___19336 < len__7214__auto___19335)){
args18819.push((arguments[i__7215__auto___19336]));

var G__19337 = (i__7215__auto___19336 + (1));
i__7215__auto___19336 = G__19337;
continue;
} else {
}
break;
}

var G__18823 = args18819.length;
switch (G__18823) {
case 0:
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18819.slice((1)),(0)));
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.var$,null,null);
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.var$,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.var$.cljs$lang$applyTo = (function (seq18820){
var G__18821 = cljs.core.first(seq18820);
var seq18820__$1 = cljs.core.next(seq18820);
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic(G__18821,seq18820__$1);
});

om_tools.dom.var$.cljs$lang$maxFixedArity = (1);

om_tools.dom.video = (function om_tools$dom$video(var_args){
var args18824 = [];
var len__7214__auto___19339 = arguments.length;
var i__7215__auto___19340 = (0);
while(true){
if((i__7215__auto___19340 < len__7214__auto___19339)){
args18824.push((arguments[i__7215__auto___19340]));

var G__19341 = (i__7215__auto___19340 + (1));
i__7215__auto___19340 = G__19341;
continue;
} else {
}
break;
}

var G__18828 = args18824.length;
switch (G__18828) {
case 0:
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18824.slice((1)),(0)));
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.video,null,null);
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.video,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.video.cljs$lang$applyTo = (function (seq18825){
var G__18826 = cljs.core.first(seq18825);
var seq18825__$1 = cljs.core.next(seq18825);
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic(G__18826,seq18825__$1);
});

om_tools.dom.video.cljs$lang$maxFixedArity = (1);

om_tools.dom.wbr = (function om_tools$dom$wbr(var_args){
var args18829 = [];
var len__7214__auto___19343 = arguments.length;
var i__7215__auto___19344 = (0);
while(true){
if((i__7215__auto___19344 < len__7214__auto___19343)){
args18829.push((arguments[i__7215__auto___19344]));

var G__19345 = (i__7215__auto___19344 + (1));
i__7215__auto___19344 = G__19345;
continue;
} else {
}
break;
}

var G__18833 = args18829.length;
switch (G__18833) {
case 0:
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18829.slice((1)),(0)));
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.wbr,null,null);
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.wbr,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.wbr.cljs$lang$applyTo = (function (seq18830){
var G__18831 = cljs.core.first(seq18830);
var seq18830__$1 = cljs.core.next(seq18830);
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(G__18831,seq18830__$1);
});

om_tools.dom.wbr.cljs$lang$maxFixedArity = (1);

om_tools.dom.circle = (function om_tools$dom$circle(var_args){
var args18834 = [];
var len__7214__auto___19347 = arguments.length;
var i__7215__auto___19348 = (0);
while(true){
if((i__7215__auto___19348 < len__7214__auto___19347)){
args18834.push((arguments[i__7215__auto___19348]));

var G__19349 = (i__7215__auto___19348 + (1));
i__7215__auto___19348 = G__19349;
continue;
} else {
}
break;
}

var G__18838 = args18834.length;
switch (G__18838) {
case 0:
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18834.slice((1)),(0)));
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.circle,null,null);
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.circle,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.circle.cljs$lang$applyTo = (function (seq18835){
var G__18836 = cljs.core.first(seq18835);
var seq18835__$1 = cljs.core.next(seq18835);
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic(G__18836,seq18835__$1);
});

om_tools.dom.circle.cljs$lang$maxFixedArity = (1);

om_tools.dom.ellipse = (function om_tools$dom$ellipse(var_args){
var args18839 = [];
var len__7214__auto___19351 = arguments.length;
var i__7215__auto___19352 = (0);
while(true){
if((i__7215__auto___19352 < len__7214__auto___19351)){
args18839.push((arguments[i__7215__auto___19352]));

var G__19353 = (i__7215__auto___19352 + (1));
i__7215__auto___19352 = G__19353;
continue;
} else {
}
break;
}

var G__18843 = args18839.length;
switch (G__18843) {
case 0:
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18839.slice((1)),(0)));
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.ellipse,null,null);
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.ellipse,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.ellipse.cljs$lang$applyTo = (function (seq18840){
var G__18841 = cljs.core.first(seq18840);
var seq18840__$1 = cljs.core.next(seq18840);
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(G__18841,seq18840__$1);
});

om_tools.dom.ellipse.cljs$lang$maxFixedArity = (1);

om_tools.dom.g = (function om_tools$dom$g(var_args){
var args18844 = [];
var len__7214__auto___19355 = arguments.length;
var i__7215__auto___19356 = (0);
while(true){
if((i__7215__auto___19356 < len__7214__auto___19355)){
args18844.push((arguments[i__7215__auto___19356]));

var G__19357 = (i__7215__auto___19356 + (1));
i__7215__auto___19356 = G__19357;
continue;
} else {
}
break;
}

var G__18848 = args18844.length;
switch (G__18848) {
case 0:
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18844.slice((1)),(0)));
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.g,null,null);
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.g,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.g.cljs$lang$applyTo = (function (seq18845){
var G__18846 = cljs.core.first(seq18845);
var seq18845__$1 = cljs.core.next(seq18845);
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic(G__18846,seq18845__$1);
});

om_tools.dom.g.cljs$lang$maxFixedArity = (1);

om_tools.dom.line = (function om_tools$dom$line(var_args){
var args18849 = [];
var len__7214__auto___19359 = arguments.length;
var i__7215__auto___19360 = (0);
while(true){
if((i__7215__auto___19360 < len__7214__auto___19359)){
args18849.push((arguments[i__7215__auto___19360]));

var G__19361 = (i__7215__auto___19360 + (1));
i__7215__auto___19360 = G__19361;
continue;
} else {
}
break;
}

var G__18853 = args18849.length;
switch (G__18853) {
case 0:
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18849.slice((1)),(0)));
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.line,null,null);
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.line,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.line.cljs$lang$applyTo = (function (seq18850){
var G__18851 = cljs.core.first(seq18850);
var seq18850__$1 = cljs.core.next(seq18850);
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic(G__18851,seq18850__$1);
});

om_tools.dom.line.cljs$lang$maxFixedArity = (1);

om_tools.dom.path = (function om_tools$dom$path(var_args){
var args18854 = [];
var len__7214__auto___19363 = arguments.length;
var i__7215__auto___19364 = (0);
while(true){
if((i__7215__auto___19364 < len__7214__auto___19363)){
args18854.push((arguments[i__7215__auto___19364]));

var G__19365 = (i__7215__auto___19364 + (1));
i__7215__auto___19364 = G__19365;
continue;
} else {
}
break;
}

var G__18858 = args18854.length;
switch (G__18858) {
case 0:
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18854.slice((1)),(0)));
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.path,null,null);
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.path,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.path.cljs$lang$applyTo = (function (seq18855){
var G__18856 = cljs.core.first(seq18855);
var seq18855__$1 = cljs.core.next(seq18855);
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic(G__18856,seq18855__$1);
});

om_tools.dom.path.cljs$lang$maxFixedArity = (1);

om_tools.dom.polyline = (function om_tools$dom$polyline(var_args){
var args18859 = [];
var len__7214__auto___19367 = arguments.length;
var i__7215__auto___19368 = (0);
while(true){
if((i__7215__auto___19368 < len__7214__auto___19367)){
args18859.push((arguments[i__7215__auto___19368]));

var G__19369 = (i__7215__auto___19368 + (1));
i__7215__auto___19368 = G__19369;
continue;
} else {
}
break;
}

var G__18863 = args18859.length;
switch (G__18863) {
case 0:
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18859.slice((1)),(0)));
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.polyline,null,null);
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.polyline,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.polyline.cljs$lang$applyTo = (function (seq18860){
var G__18861 = cljs.core.first(seq18860);
var seq18860__$1 = cljs.core.next(seq18860);
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(G__18861,seq18860__$1);
});

om_tools.dom.polyline.cljs$lang$maxFixedArity = (1);

om_tools.dom.rect = (function om_tools$dom$rect(var_args){
var args18864 = [];
var len__7214__auto___19371 = arguments.length;
var i__7215__auto___19372 = (0);
while(true){
if((i__7215__auto___19372 < len__7214__auto___19371)){
args18864.push((arguments[i__7215__auto___19372]));

var G__19373 = (i__7215__auto___19372 + (1));
i__7215__auto___19372 = G__19373;
continue;
} else {
}
break;
}

var G__18868 = args18864.length;
switch (G__18868) {
case 0:
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18864.slice((1)),(0)));
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.rect,null,null);
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.rect,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.rect.cljs$lang$applyTo = (function (seq18865){
var G__18866 = cljs.core.first(seq18865);
var seq18865__$1 = cljs.core.next(seq18865);
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic(G__18866,seq18865__$1);
});

om_tools.dom.rect.cljs$lang$maxFixedArity = (1);

om_tools.dom.svg = (function om_tools$dom$svg(var_args){
var args18869 = [];
var len__7214__auto___19375 = arguments.length;
var i__7215__auto___19376 = (0);
while(true){
if((i__7215__auto___19376 < len__7214__auto___19375)){
args18869.push((arguments[i__7215__auto___19376]));

var G__19377 = (i__7215__auto___19376 + (1));
i__7215__auto___19376 = G__19377;
continue;
} else {
}
break;
}

var G__18873 = args18869.length;
switch (G__18873) {
case 0:
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18869.slice((1)),(0)));
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.svg,null,null);
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.svg,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.svg.cljs$lang$applyTo = (function (seq18870){
var G__18871 = cljs.core.first(seq18870);
var seq18870__$1 = cljs.core.next(seq18870);
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic(G__18871,seq18870__$1);
});

om_tools.dom.svg.cljs$lang$maxFixedArity = (1);

om_tools.dom.text = (function om_tools$dom$text(var_args){
var args18874 = [];
var len__7214__auto___19379 = arguments.length;
var i__7215__auto___19380 = (0);
while(true){
if((i__7215__auto___19380 < len__7214__auto___19379)){
args18874.push((arguments[i__7215__auto___19380]));

var G__19381 = (i__7215__auto___19380 + (1));
i__7215__auto___19380 = G__19381;
continue;
} else {
}
break;
}

var G__18878 = args18874.length;
switch (G__18878) {
case 0:
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18874.slice((1)),(0)));
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.text,null,null);
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.text,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.text.cljs$lang$applyTo = (function (seq18875){
var G__18876 = cljs.core.first(seq18875);
var seq18875__$1 = cljs.core.next(seq18875);
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic(G__18876,seq18875__$1);
});

om_tools.dom.text.cljs$lang$maxFixedArity = (1);

om_tools.dom.defs = (function om_tools$dom$defs(var_args){
var args18879 = [];
var len__7214__auto___19383 = arguments.length;
var i__7215__auto___19384 = (0);
while(true){
if((i__7215__auto___19384 < len__7214__auto___19383)){
args18879.push((arguments[i__7215__auto___19384]));

var G__19385 = (i__7215__auto___19384 + (1));
i__7215__auto___19384 = G__19385;
continue;
} else {
}
break;
}

var G__18883 = args18879.length;
switch (G__18883) {
case 0:
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18879.slice((1)),(0)));
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.defs,null,null);
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.defs,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.defs.cljs$lang$applyTo = (function (seq18880){
var G__18881 = cljs.core.first(seq18880);
var seq18880__$1 = cljs.core.next(seq18880);
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic(G__18881,seq18880__$1);
});

om_tools.dom.defs.cljs$lang$maxFixedArity = (1);

om_tools.dom.linearGradient = (function om_tools$dom$linearGradient(var_args){
var args18884 = [];
var len__7214__auto___19387 = arguments.length;
var i__7215__auto___19388 = (0);
while(true){
if((i__7215__auto___19388 < len__7214__auto___19387)){
args18884.push((arguments[i__7215__auto___19388]));

var G__19389 = (i__7215__auto___19388 + (1));
i__7215__auto___19388 = G__19389;
continue;
} else {
}
break;
}

var G__18888 = args18884.length;
switch (G__18888) {
case 0:
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18884.slice((1)),(0)));
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.linearGradient,null,null);
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.linearGradient,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.linearGradient.cljs$lang$applyTo = (function (seq18885){
var G__18886 = cljs.core.first(seq18885);
var seq18885__$1 = cljs.core.next(seq18885);
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(G__18886,seq18885__$1);
});

om_tools.dom.linearGradient.cljs$lang$maxFixedArity = (1);

om_tools.dom.polygon = (function om_tools$dom$polygon(var_args){
var args18889 = [];
var len__7214__auto___19391 = arguments.length;
var i__7215__auto___19392 = (0);
while(true){
if((i__7215__auto___19392 < len__7214__auto___19391)){
args18889.push((arguments[i__7215__auto___19392]));

var G__19393 = (i__7215__auto___19392 + (1));
i__7215__auto___19392 = G__19393;
continue;
} else {
}
break;
}

var G__18893 = args18889.length;
switch (G__18893) {
case 0:
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18889.slice((1)),(0)));
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.polygon,null,null);
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.polygon,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.polygon.cljs$lang$applyTo = (function (seq18890){
var G__18891 = cljs.core.first(seq18890);
var seq18890__$1 = cljs.core.next(seq18890);
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(G__18891,seq18890__$1);
});

om_tools.dom.polygon.cljs$lang$maxFixedArity = (1);

om_tools.dom.radialGradient = (function om_tools$dom$radialGradient(var_args){
var args18894 = [];
var len__7214__auto___19395 = arguments.length;
var i__7215__auto___19396 = (0);
while(true){
if((i__7215__auto___19396 < len__7214__auto___19395)){
args18894.push((arguments[i__7215__auto___19396]));

var G__19397 = (i__7215__auto___19396 + (1));
i__7215__auto___19396 = G__19397;
continue;
} else {
}
break;
}

var G__18898 = args18894.length;
switch (G__18898) {
case 0:
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18894.slice((1)),(0)));
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.radialGradient,null,null);
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.radialGradient,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.radialGradient.cljs$lang$applyTo = (function (seq18895){
var G__18896 = cljs.core.first(seq18895);
var seq18895__$1 = cljs.core.next(seq18895);
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(G__18896,seq18895__$1);
});

om_tools.dom.radialGradient.cljs$lang$maxFixedArity = (1);

om_tools.dom.stop = (function om_tools$dom$stop(var_args){
var args18899 = [];
var len__7214__auto___19399 = arguments.length;
var i__7215__auto___19400 = (0);
while(true){
if((i__7215__auto___19400 < len__7214__auto___19399)){
args18899.push((arguments[i__7215__auto___19400]));

var G__19401 = (i__7215__auto___19400 + (1));
i__7215__auto___19400 = G__19401;
continue;
} else {
}
break;
}

var G__18903 = args18899.length;
switch (G__18903) {
case 0:
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18899.slice((1)),(0)));
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.stop,null,null);
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.stop,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.stop.cljs$lang$applyTo = (function (seq18900){
var G__18901 = cljs.core.first(seq18900);
var seq18900__$1 = cljs.core.next(seq18900);
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic(G__18901,seq18900__$1);
});

om_tools.dom.stop.cljs$lang$maxFixedArity = (1);

om_tools.dom.tspan = (function om_tools$dom$tspan(var_args){
var args18904 = [];
var len__7214__auto___19403 = arguments.length;
var i__7215__auto___19404 = (0);
while(true){
if((i__7215__auto___19404 < len__7214__auto___19403)){
args18904.push((arguments[i__7215__auto___19404]));

var G__19405 = (i__7215__auto___19404 + (1));
i__7215__auto___19404 = G__19405;
continue;
} else {
}
break;
}

var G__18908 = args18904.length;
switch (G__18908) {
case 0:
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18904.slice((1)),(0)));
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.tspan,null,null);
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(React.DOM.tspan,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.tspan.cljs$lang$applyTo = (function (seq18905){
var G__18906 = cljs.core.first(seq18905);
var seq18905__$1 = cljs.core.next(seq18905);
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(G__18906,seq18905__$1);
});

om_tools.dom.tspan.cljs$lang$maxFixedArity = (1);

om_tools.dom.input = (function om_tools$dom$input(var_args){
var args18909 = [];
var len__7214__auto___19407 = arguments.length;
var i__7215__auto___19408 = (0);
while(true){
if((i__7215__auto___19408 < len__7214__auto___19407)){
args18909.push((arguments[i__7215__auto___19408]));

var G__19409 = (i__7215__auto___19408 + (1));
i__7215__auto___19408 = G__19409;
continue;
} else {
}
break;
}

var G__18913 = args18909.length;
switch (G__18913) {
case 0:
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18909.slice((1)),(0)));
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(om.dom.input,null,null);
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(om.dom.input,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.input.cljs$lang$applyTo = (function (seq18910){
var G__18911 = cljs.core.first(seq18910);
var seq18910__$1 = cljs.core.next(seq18910);
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic(G__18911,seq18910__$1);
});

om_tools.dom.input.cljs$lang$maxFixedArity = (1);

om_tools.dom.textarea = (function om_tools$dom$textarea(var_args){
var args18914 = [];
var len__7214__auto___19411 = arguments.length;
var i__7215__auto___19412 = (0);
while(true){
if((i__7215__auto___19412 < len__7214__auto___19411)){
args18914.push((arguments[i__7215__auto___19412]));

var G__19413 = (i__7215__auto___19412 + (1));
i__7215__auto___19412 = G__19413;
continue;
} else {
}
break;
}

var G__18918 = args18914.length;
switch (G__18918) {
case 0:
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18914.slice((1)),(0)));
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(om.dom.textarea,null,null);
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(om.dom.textarea,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.textarea.cljs$lang$applyTo = (function (seq18915){
var G__18916 = cljs.core.first(seq18915);
var seq18915__$1 = cljs.core.next(seq18915);
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(G__18916,seq18915__$1);
});

om_tools.dom.textarea.cljs$lang$maxFixedArity = (1);

om_tools.dom.option = (function om_tools$dom$option(var_args){
var args18454 = [];
var len__7214__auto___19415 = arguments.length;
var i__7215__auto___19416 = (0);
while(true){
if((i__7215__auto___19416 < len__7214__auto___19415)){
args18454.push((arguments[i__7215__auto___19416]));

var G__19417 = (i__7215__auto___19416 + (1));
i__7215__auto___19416 = G__19417;
continue;
} else {
}
break;
}

var G__18458 = args18454.length;
switch (G__18458) {
case 0:
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args18454.slice((1)),(0)));
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7233__auto__);

}
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(om.dom.option,null,null);
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18270__auto__,children__18271__auto__){
return om_tools.dom.element(om.dom.option,opts__18270__auto__,children__18271__auto__);
});

om_tools.dom.option.cljs$lang$applyTo = (function (seq18455){
var G__18456 = cljs.core.first(seq18455);
var seq18455__$1 = cljs.core.next(seq18455);
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic(G__18456,seq18455__$1);
});

om_tools.dom.option.cljs$lang$maxFixedArity = (1);
om_tools.dom.class_set = (function om_tools$dom$class_set(m){

var temp__4657__auto__ = cljs.core.seq(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.val,m)))));
if(temp__4657__auto__){
var ks = temp__4657__auto__;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",ks);
} else {
return null;
}
});
