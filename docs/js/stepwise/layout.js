// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('stepwise.layout');
goog.require('cljs.core');
goog.require('stepwise.model');
stepwise.layout.delimiter_QMARK_ = (function stepwise$layout$delimiter_QMARK_(token){
return cljs.core.contains_QMARK_(cljs.core.cst$kw$classes.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$delimiter);
});
stepwise.layout.spacer_QMARK_ = (function stepwise$layout$spacer_QMARK_(token){
return cljs.core.contains_QMARK_(cljs.core.cst$kw$classes.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$spacer);
});
stepwise.layout.chars = (function stepwise$layout$chars(token){
if(cljs.core.truth_((stepwise.model.stringlike_QMARK_.cljs$core$IFn$_invoke$arity$1 ? stepwise.model.stringlike_QMARK_.cljs$core$IFn$_invoke$arity$1(token) : stepwise.model.stringlike_QMARK_.call(null,token)))){
return ((2) + (function (){var x__6494__auto__ = cljs.core.count(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(token));
var y__6495__auto__ = (stepwise.layout._STAR_line_length_STAR_ - (8));
return ((x__6494__auto__ < y__6495__auto__) ? x__6494__auto__ : y__6495__auto__);
})());
} else {
return cljs.core.count((function (){var or__6156__auto__ = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return stepwise.model.stringify(token);
}
})());
}
});
stepwise.layout.delimiter = (function stepwise$layout$delimiter(opener_QMARK_,p__20342){
var map__20346 = p__20342;
var map__20346__$1 = ((((!((map__20346 == null)))?((((map__20346.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20346.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20346):map__20346);
var form = map__20346__$1;
var editing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20346__$1,cljs.core.cst$kw$editing_QMARK_);
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20346__$1,cljs.core.cst$kw$selected_QMARK_);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20346__$1,cljs.core.cst$kw$type);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$classes,(function (){var G__20348 = cljs.core.PersistentHashSet.fromArray([cljs.core.cst$kw$delimiter,type,(cljs.core.truth_(opener_QMARK_)?cljs.core.cst$kw$left:cljs.core.cst$kw$right)], true);
var G__20348__$1 = (cljs.core.truth_(editing_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__20348,cljs.core.cst$kw$editing):G__20348);
if(cljs.core.truth_(selected_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__20348__$1,cljs.core.cst$kw$selected);
} else {
return G__20348__$1;
}
})(),cljs.core.cst$kw$path,cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(form),cljs.core.cst$kw$text,(cljs.core.truth_(opener_QMARK_)?stepwise.model.opener:stepwise.model.closer).call(null,type)], null)], null);
});
stepwise.layout.opener = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(stepwise.layout.delimiter,true);
stepwise.layout.closer = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(stepwise.layout.delimiter,false);
stepwise.layout.spacer = (function stepwise$layout$spacer(var_args){
var args20349 = [];
var len__7214__auto___20352 = arguments.length;
var i__7215__auto___20353 = (0);
while(true){
if((i__7215__auto___20353 < len__7214__auto___20352)){
args20349.push((arguments[i__7215__auto___20353]));

var G__20354 = (i__7215__auto___20353 + (1));
i__7215__auto___20353 = G__20354;
continue;
} else {
}
break;
}

var G__20351 = args20349.length;
switch (G__20351) {
case 0:
return stepwise.layout.spacer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return stepwise.layout.spacer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20349.length)].join('')));

}
});

stepwise.layout.spacer.cljs$core$IFn$_invoke$arity$0 = (function (){
return stepwise.layout.spacer.cljs$core$IFn$_invoke$arity$1((1));
});

stepwise.layout.spacer.cljs$core$IFn$_invoke$arity$1 = (function (n){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$classes,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spacer,null], null), null),cljs.core.cst$kw$text,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n," "))], null)], null);
});

stepwise.layout.spacer.cljs$lang$maxFixedArity = 1;
stepwise.layout.annotate_head = (function stepwise$layout$annotate_head(form){
if(cljs.core.truth_((function (){var and__6144__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,null,cljs.core.cst$kw$seq,null], null), null).call(null,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(form));
if(cljs.core.truth_(and__6144__auto__)){
return cljs.core.seq(cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(form));
} else {
return and__6144__auto__;
}
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$children,(0)], null),cljs.core.assoc,cljs.core.cst$kw$head_QMARK_,true);
} else {
return form;
}
});
stepwise.layout.__GT_tokens = (function stepwise$layout$__GT_tokens(form){
var pred__20361 = (function (p1__20356_SHARP_,p2__20357_SHARP_){
return (p1__20356_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__20356_SHARP_.cljs$core$IFn$_invoke$arity$1(p2__20357_SHARP_) : p1__20356_SHARP_.call(null,p2__20357_SHARP_));
});
var expr__20362 = form;
if(cljs.core.truth_(pred__20361(stepwise.model.coll_QMARK_,expr__20362))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((stepwise.layout.opener.cljs$core$IFn$_invoke$arity$1 ? stepwise.layout.opener.cljs$core$IFn$_invoke$arity$1(form) : stepwise.layout.opener.call(null,form)),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(stepwise.layout.spacer.cljs$core$IFn$_invoke$arity$0(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(stepwise$layout$__GT_tokens,cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(stepwise.layout.annotate_head(form))))),cljs.core.array_seq([(stepwise.layout.closer.cljs$core$IFn$_invoke$arity$1 ? stepwise.layout.closer.cljs$core$IFn$_invoke$arity$1(form) : stepwise.layout.closer.call(null,form))], 0));
} else {
if(cljs.core.truth_(pred__20361(stepwise.model.stringlike_QMARK_,expr__20362))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((stepwise.layout.opener.cljs$core$IFn$_invoke$arity$1 ? stepwise.layout.opener.cljs$core$IFn$_invoke$arity$1(form) : stepwise.layout.opener.call(null,form)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form,cljs.core.cst$kw$max_DASH_width,(stepwise.layout._STAR_line_length_STAR_ - (8)))], null),cljs.core.array_seq([(stepwise.layout.closer.cljs$core$IFn$_invoke$arity$1 ? stepwise.layout.closer.cljs$core$IFn$_invoke$arity$1(form) : stepwise.layout.closer.call(null,form))], 0));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [form], null);
}
}
});
stepwise.layout.close_off = (function stepwise$layout$close_off(lines,closer){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(lines),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(lines),closer));
});
stepwise.layout.fits_on_line_QMARK_ = (function stepwise$layout$fits_on_line_QMARK_(line,form){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._PLUS_,stepwise.layout.chars(form),(1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(stepwise.layout.chars,line)) <= stepwise.layout._STAR_line_length_STAR_);
});
stepwise.layout.fits_on_own_line_QMARK_ = (function stepwise$layout$fits_on_own_line_QMARK_(form){
return (stepwise.layout.chars(form) <= stepwise.layout._STAR_line_length_STAR_);
});
stepwise.layout.has_content_QMARK_ = (function stepwise$layout$has_content_QMARK_(line){
return cljs.core.not_every_QMARK_((function (p1__20364_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.cst$kw$classes.cljs$core$IFn$_invoke$arity$1(p1__20364_SHARP_),cljs.core.cst$kw$spacer);
}),line);
});
if(typeof stepwise.layout.__GT_lines_STAR_ !== 'undefined'){
} else {
stepwise.layout.__GT_lines_STAR_ = (function (){var method_table__7069__auto__ = (function (){var G__20365 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20365) : cljs.core.atom.call(null,G__20365));
})();
var prefer_table__7070__auto__ = (function (){var G__20366 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20366) : cljs.core.atom.call(null,G__20366));
})();
var method_cache__7071__auto__ = (function (){var G__20367 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20367) : cljs.core.atom.call(null,G__20367));
})();
var cached_hierarchy__7072__auto__ = (function (){var G__20368 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20368) : cljs.core.atom.call(null,G__20368));
})();
var hierarchy__7073__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("stepwise.layout","->lines*"),((function (method_table__7069__auto__,prefer_table__7070__auto__,method_cache__7071__auto__,cached_hierarchy__7072__auto__,hierarchy__7073__auto__){
return (function (form){
if(cljs.core.truth_((function (){var and__6144__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,null,cljs.core.cst$kw$seq,null], null), null).call(null,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(form));
if(cljs.core.truth_(and__6144__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(form))),cljs.core.cst$kw$symbol);
} else {
return and__6144__auto__;
}
})())){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$children,(0),cljs.core.cst$kw$text], null)));
} else {
return null;
}
});})(method_table__7069__auto__,prefer_table__7070__auto__,method_cache__7071__auto__,cached_hierarchy__7072__auto__,hierarchy__7073__auto__))
,cljs.core.cst$kw$default,hierarchy__7073__auto__,method_table__7069__auto__,prefer_table__7070__auto__,method_cache__7071__auto__,cached_hierarchy__7072__auto__));
})();
}
stepwise.layout.pair__GT_lines = (function stepwise$layout$pair__GT_lines(p__20370){
var vec__20372 = p__20370;
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20372,(0),null);
var right = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20372,(1),null);
if((((stepwise.layout.chars(left) + (1)) + stepwise.layout.chars(right)) > stepwise.layout._STAR_line_length_STAR_)){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((stepwise.layout.__GT_lines.cljs$core$IFn$_invoke$arity$1 ? stepwise.layout.__GT_lines.cljs$core$IFn$_invoke$arity$1(left) : stepwise.layout.__GT_lines.call(null,left)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__20372,left,right){
return (function (p1__20369_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(stepwise.layout.spacer.cljs$core$IFn$_invoke$arity$1((2)),p1__20369_SHARP_);
});})(vec__20372,left,right))
,(stepwise.layout.__GT_lines.cljs$core$IFn$_invoke$arity$1 ? stepwise.layout.__GT_lines.cljs$core$IFn$_invoke$arity$1(right) : stepwise.layout.__GT_lines.call(null,right)))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(stepwise.layout.__GT_tokens(left),stepwise.layout.spacer.cljs$core$IFn$_invoke$arity$0(),cljs.core.array_seq([stepwise.layout.__GT_tokens(right)], 0))], null);
}
});
stepwise.layout.pairs__GT_lines = (function stepwise$layout$pairs__GT_lines(forms){
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),forms);
var extra = ((cljs.core.odd_QMARK_(cljs.core.count(forms)))?cljs.core.last(forms):null);
var lines = (function (){var G__20374 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(stepwise.layout.pair__GT_lines,cljs.core.array_seq([pairs], 0));
if(cljs.core.truth_(extra)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(G__20374,(stepwise.layout.__GT_lines.cljs$core$IFn$_invoke$arity$1 ? stepwise.layout.__GT_lines.cljs$core$IFn$_invoke$arity$1(extra) : stepwise.layout.__GT_lines.call(null,extra)));
} else {
return G__20374;
}
})();
return cljs.core.vec(lines);
});
stepwise.layout.map__GT_lines = (function stepwise$layout$map__GT_lines(form){
var lines = stepwise.layout.pairs__GT_lines(cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(form));
var init_line = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((stepwise.layout.opener.cljs$core$IFn$_invoke$arity$1 ? stepwise.layout.opener.cljs$core$IFn$_invoke$arity$1(form) : stepwise.layout.opener.call(null,form)),cljs.core.first(lines));
var rest_lines = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lines,init_line){
return (function (p1__20375_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(stepwise.layout.spacer.cljs$core$IFn$_invoke$arity$0(),p1__20375_SHARP_);
});})(lines,init_line))
,cljs.core.rest(lines));
return stepwise.layout.close_off(cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,init_line),rest_lines)))),(stepwise.layout.closer.cljs$core$IFn$_invoke$arity$1 ? stepwise.layout.closer.cljs$core$IFn$_invoke$arity$1(form) : stepwise.layout.closer.call(null,form)));
});
stepwise.layout.indent_size_STAR_ = (function stepwise$layout$indent_size_STAR_(form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(form),cljs.core.cst$kw$fn)){
return (3);
} else {
return (2);
}
});
stepwise.layout.indent_size = (function stepwise$layout$indent_size(form){
var head_size = (function stepwise$layout$indent_size_$_head_size(form__$1){
var head = cljs.core.first(cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(form__$1));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$symbol,null,cljs.core.cst$kw$keyword,null], null), null).call(null,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(head)))){
return cljs.core.count(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(head));
} else {
return null;
}
});
var G__20377 = (((cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(form) instanceof cljs.core.Keyword))?cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(form).fqn:null);
switch (G__20377) {
case "fn":
return (stepwise.layout.indent_size_STAR_(form) + head_size(form));

break;
case "seq":
return (stepwise.layout.indent_size_STAR_(form) + head_size(form));

break;
case "set":
return (2);

break;
default:
return (1);

}
});
stepwise.layout.__GT_lines_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (form){
var children = cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(form);
var indent = stepwise.layout.spacer.cljs$core$IFn$_invoke$arity$1(stepwise.layout.indent_size(form));
var lines = cljs.core.PersistentVector.EMPTY;
var line = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((stepwise.layout.opener.cljs$core$IFn$_invoke$arity$1 ? stepwise.layout.opener.cljs$core$IFn$_invoke$arity$1(form) : stepwise.layout.opener.call(null,form)),stepwise.layout.__GT_tokens(cljs.core.first(children)));
var children__$1 = cljs.core.rest(children);
while(true){
var temp__4655__auto__ = cljs.core.first(children__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var child = temp__4655__auto__;
if(cljs.core.truth_(stepwise.layout.fits_on_line_QMARK_(line,child))){
var line__$1 = (function (){var G__20380 = line;
if(cljs.core.truth_(stepwise.layout.has_content_QMARK_(line))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(G__20380,stepwise.layout.spacer.cljs$core$IFn$_invoke$arity$0());
} else {
return G__20380;
}
})();
var G__20382 = lines;
var G__20383 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(line__$1,stepwise.layout.__GT_tokens(child));
var G__20384 = cljs.core.rest(children__$1);
lines = G__20382;
line = G__20383;
children__$1 = G__20384;
continue;
} else {
if(cljs.core.truth_(stepwise.layout.fits_on_own_line_QMARK_(child))){
var G__20385 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lines,line);
var G__20386 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(indent,stepwise.layout.__GT_tokens(child));
var G__20387 = cljs.core.rest(children__$1);
lines = G__20385;
line = G__20386;
children__$1 = G__20387;
continue;
} else {
var lines__$1 = (function (){var G__20381 = lines;
if(cljs.core.truth_(stepwise.layout.has_content_QMARK_(line))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__20381,line);
} else {
return G__20381;
}
})();
var G__20388 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lines,line,children__$1,lines__$1,child,temp__4655__auto__,children,indent){
return (function (p1__20379_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(indent,p1__20379_SHARP_);
});})(lines,line,children__$1,lines__$1,child,temp__4655__auto__,children,indent))
,(stepwise.layout.__GT_lines.cljs$core$IFn$_invoke$arity$1 ? stepwise.layout.__GT_lines.cljs$core$IFn$_invoke$arity$1(child) : stepwise.layout.__GT_lines.call(null,child)))));
var G__20389 = ((cljs.core.rest(children__$1))?indent:cljs.core.List.EMPTY);
var G__20390 = cljs.core.rest(children__$1);
lines = G__20388;
line = G__20389;
children__$1 = G__20390;
continue;

}
}
} else {
if(cljs.core.truth_(stepwise.layout.has_content_QMARK_(line))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lines,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(line,(stepwise.layout.closer.cljs$core$IFn$_invoke$arity$1 ? stepwise.layout.closer.cljs$core$IFn$_invoke$arity$1(form) : stepwise.layout.closer.call(null,form))));
} else {
return stepwise.layout.close_off(lines,(stepwise.layout.closer.cljs$core$IFn$_invoke$arity$1 ? stepwise.layout.closer.cljs$core$IFn$_invoke$arity$1(form) : stepwise.layout.closer.call(null,form)));
}
}
break;
}
}));
stepwise.layout.always_multiline_QMARK_ = (function stepwise$layout$always_multiline_QMARK_(form){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(form),cljs.core.cst$kw$seq)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(form))),"let"));
});
stepwise.layout.multiline_QMARK_ = (function stepwise$layout$multiline_QMARK_(form){
var and__6144__auto__ = (stepwise.model.coll_QMARK_.cljs$core$IFn$_invoke$arity$1 ? stepwise.model.coll_QMARK_.cljs$core$IFn$_invoke$arity$1(form) : stepwise.model.coll_QMARK_.call(null,form));
if(cljs.core.truth_(and__6144__auto__)){
var or__6156__auto__ = cljs.core.not(stepwise.layout.fits_on_own_line_QMARK_(form));
if(or__6156__auto__){
return or__6156__auto__;
} else {
return stepwise.layout.always_multiline_QMARK_(form);
}
} else {
return and__6144__auto__;
}
});
stepwise.layout.__GT_lines = (function stepwise$layout$__GT_lines(var_args){
var args20391 = [];
var len__7214__auto___20398 = arguments.length;
var i__7215__auto___20399 = (0);
while(true){
if((i__7215__auto___20399 < len__7214__auto___20398)){
args20391.push((arguments[i__7215__auto___20399]));

var G__20400 = (i__7215__auto___20399 + (1));
i__7215__auto___20399 = G__20400;
continue;
} else {
}
break;
}

var G__20393 = args20391.length;
switch (G__20393) {
case 1:
return stepwise.layout.__GT_lines.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stepwise.layout.__GT_lines.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20391.length)].join('')));

}
});

stepwise.layout.__GT_lines.cljs$core$IFn$_invoke$arity$1 = (function (form){
return stepwise.layout.__GT_lines.cljs$core$IFn$_invoke$arity$2(form,stepwise.layout._STAR_line_length_STAR_);
});

stepwise.layout.__GT_lines.cljs$core$IFn$_invoke$arity$2 = (function (form,line_length){
var _STAR_line_length_STAR_20394 = stepwise.layout._STAR_line_length_STAR_;
stepwise.layout._STAR_line_length_STAR_ = line_length;

try{if(cljs.core.truth_(stepwise.layout.multiline_QMARK_(form))){
var G__20395 = (((cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(form) instanceof cljs.core.Keyword))?cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(form).fqn:null);
switch (G__20395) {
case "map":
return stepwise.layout.map__GT_lines(form);

break;
case "fn":
var G__20396 = stepwise.layout.annotate_head(form);
return (stepwise.layout.__GT_lines_STAR_.cljs$core$IFn$_invoke$arity$1 ? stepwise.layout.__GT_lines_STAR_.cljs$core$IFn$_invoke$arity$1(G__20396) : stepwise.layout.__GT_lines_STAR_.call(null,G__20396));

break;
case "seq":
var G__20397 = stepwise.layout.annotate_head(form);
return (stepwise.layout.__GT_lines_STAR_.cljs$core$IFn$_invoke$arity$1 ? stepwise.layout.__GT_lines_STAR_.cljs$core$IFn$_invoke$arity$1(G__20397) : stepwise.layout.__GT_lines_STAR_.call(null,G__20397));

break;
case "vec":
return (stepwise.layout.__GT_lines_STAR_.cljs$core$IFn$_invoke$arity$1 ? stepwise.layout.__GT_lines_STAR_.cljs$core$IFn$_invoke$arity$1(form) : stepwise.layout.__GT_lines_STAR_.call(null,form));

break;
case "set":
return (stepwise.layout.__GT_lines_STAR_.cljs$core$IFn$_invoke$arity$1 ? stepwise.layout.__GT_lines_STAR_.cljs$core$IFn$_invoke$arity$1(form) : stepwise.layout.__GT_lines_STAR_.call(null,form));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(form))].join('')));

}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stepwise.layout.__GT_tokens(form)], null);
}
}finally {stepwise.layout._STAR_line_length_STAR_ = _STAR_line_length_STAR_20394;
}});

stepwise.layout.__GT_lines.cljs$lang$maxFixedArity = 2;
stepwise.layout.header_PLUS_body__GT_lines = (function stepwise$layout$header_PLUS_body__GT_lines(form,headc){
var vec__20405 = cljs.core.split_at((headc + (1)),cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(form));
var inits = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20405,(0),null);
var rests = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20405,(1),null);
var init_line = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,(stepwise.layout.opener.cljs$core$IFn$_invoke$arity$1 ? stepwise.layout.opener.cljs$core$IFn$_invoke$arity$1(form) : stepwise.layout.opener.call(null,form)),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(stepwise.layout.spacer.cljs$core$IFn$_invoke$arity$0(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(stepwise.layout.__GT_tokens,inits)));
var rest_lines = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__20405,inits,rests,init_line){
return (function (p1__20403_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(stepwise.layout.spacer.cljs$core$IFn$_invoke$arity$1(stepwise.layout.indent_size_STAR_(form)),p1__20403_SHARP_);
});})(vec__20405,inits,rests,init_line))
,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(stepwise.layout.__GT_lines,cljs.core.array_seq([rests], 0)));
return stepwise.layout.close_off(cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,init_line),rest_lines)))),(stepwise.layout.closer.cljs$core$IFn$_invoke$arity$1 ? stepwise.layout.closer.cljs$core$IFn$_invoke$arity$1(form) : stepwise.layout.closer.call(null,form)));
});
stepwise.layout.header_counts = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$when_DASH_first,cljs.core.cst$sym$specify,cljs.core.cst$sym$specify_BANG_,cljs.core.cst$sym$if_DASH_not,cljs.core.cst$sym$deftype,cljs.core.cst$sym$when_DASH_let,cljs.core.cst$sym$if_DASH_some,cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$defstruct,cljs.core.cst$sym$definline,cljs.core.cst$sym$fn,cljs.core.cst$sym$definterface,cljs.core.cst$sym$as_DASH__GT_,cljs.core.cst$sym$do,cljs.core.cst$sym$when_DASH_not,cljs.core.cst$sym$when,cljs.core.cst$sym$extend,cljs.core.cst$sym$some_DASH__GT__GT_,cljs.core.cst$sym$defn,cljs.core.cst$sym$if,cljs.core.cst$sym$extend_DASH_type,cljs.core.cst$sym$defmethod,cljs.core.cst$sym$extend_DASH_protocol,cljs.core.cst$sym$dotimes,cljs.core.cst$sym$reify,cljs.core.cst$sym$defonce,cljs.core.cst$sym$defn_DASH_,cljs.core.cst$sym$defprotocol,cljs.core.cst$sym$some_DASH__GT_,cljs.core.cst$sym$defmacro,cljs.core.cst$sym$proxy,cljs.core.cst$sym$defmulti,cljs.core.cst$sym$if_DASH_let,cljs.core.cst$sym$defrecord,cljs.core.cst$sym$when_DASH_some,cljs.core.cst$sym$def,cljs.core.cst$sym$_DASH__GT__GT_],[(1),(1),(1),(1),(2),(1),(1),(1),(1),(1),(1),(1),(2),(1),(1),(1),(1),(1),(1),(1),(1),(2),(1),(1),(0),(1),(1),(1),(1),(1),(2),(1),(1),(2),(1),(1),(1)]);
var seq__20406_20412 = cljs.core.seq(stepwise.layout.header_counts);
var chunk__20407_20413 = null;
var count__20408_20414 = (0);
var i__20409_20415 = (0);
while(true){
if((i__20409_20415 < count__20408_20414)){
var vec__20410_20416 = chunk__20407_20413.cljs$core$IIndexed$_nth$arity$2(null,i__20409_20415);
var core_macro_20417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20410_20416,(0),null);
var headc_20418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20410_20416,(1),null);
stepwise.layout.__GT_lines_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,core_macro_20417,((function (seq__20406_20412,chunk__20407_20413,count__20408_20414,i__20409_20415,vec__20410_20416,core_macro_20417,headc_20418){
return (function (form){
return stepwise.layout.header_PLUS_body__GT_lines(form,headc_20418);
});})(seq__20406_20412,chunk__20407_20413,count__20408_20414,i__20409_20415,vec__20410_20416,core_macro_20417,headc_20418))
);

var G__20419 = seq__20406_20412;
var G__20420 = chunk__20407_20413;
var G__20421 = count__20408_20414;
var G__20422 = (i__20409_20415 + (1));
seq__20406_20412 = G__20419;
chunk__20407_20413 = G__20420;
count__20408_20414 = G__20421;
i__20409_20415 = G__20422;
continue;
} else {
var temp__4657__auto___20423 = cljs.core.seq(seq__20406_20412);
if(temp__4657__auto___20423){
var seq__20406_20424__$1 = temp__4657__auto___20423;
if(cljs.core.chunked_seq_QMARK_(seq__20406_20424__$1)){
var c__6959__auto___20425 = cljs.core.chunk_first(seq__20406_20424__$1);
var G__20426 = cljs.core.chunk_rest(seq__20406_20424__$1);
var G__20427 = c__6959__auto___20425;
var G__20428 = cljs.core.count(c__6959__auto___20425);
var G__20429 = (0);
seq__20406_20412 = G__20426;
chunk__20407_20413 = G__20427;
count__20408_20414 = G__20428;
i__20409_20415 = G__20429;
continue;
} else {
var vec__20411_20430 = cljs.core.first(seq__20406_20424__$1);
var core_macro_20431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20411_20430,(0),null);
var headc_20432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20411_20430,(1),null);
stepwise.layout.__GT_lines_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,core_macro_20431,((function (seq__20406_20412,chunk__20407_20413,count__20408_20414,i__20409_20415,vec__20411_20430,core_macro_20431,headc_20432,seq__20406_20424__$1,temp__4657__auto___20423){
return (function (form){
return stepwise.layout.header_PLUS_body__GT_lines(form,headc_20432);
});})(seq__20406_20412,chunk__20407_20413,count__20408_20414,i__20409_20415,vec__20411_20430,core_macro_20431,headc_20432,seq__20406_20424__$1,temp__4657__auto___20423))
);

var G__20433 = cljs.core.next(seq__20406_20424__$1);
var G__20434 = null;
var G__20435 = (0);
var G__20436 = (0);
seq__20406_20412 = G__20433;
chunk__20407_20413 = G__20434;
count__20408_20414 = G__20435;
i__20409_20415 = G__20436;
continue;
}
} else {
}
}
break;
}
stepwise.layout.header_PLUS_pairs__GT_lines = (function stepwise$layout$header_PLUS_pairs__GT_lines(form,headc){
var vec__20439 = cljs.core.split_at((headc + (1)),cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(form));
var inits = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20439,(0),null);
var rests = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20439,(1),null);
var init_line = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,(stepwise.layout.opener.cljs$core$IFn$_invoke$arity$1 ? stepwise.layout.opener.cljs$core$IFn$_invoke$arity$1(form) : stepwise.layout.opener.call(null,form)),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(stepwise.layout.spacer.cljs$core$IFn$_invoke$arity$0(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(stepwise.layout.__GT_tokens,inits)));
var rest_lines = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__20439,inits,rests,init_line){
return (function (p1__20437_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(stepwise.layout.spacer.cljs$core$IFn$_invoke$arity$1(stepwise.layout.indent_size_STAR_(form)),p1__20437_SHARP_);
});})(vec__20439,inits,rests,init_line))
,stepwise.layout.pairs__GT_lines(rests));
return stepwise.layout.close_off(cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,init_line),rest_lines)))),(stepwise.layout.closer.cljs$core$IFn$_invoke$arity$1 ? stepwise.layout.closer.cljs$core$IFn$_invoke$arity$1(form) : stepwise.layout.closer.call(null,form)));
});
stepwise.layout.paired_header_counts = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$sym$case,(1),cljs.core.cst$sym$cond,(0),cljs.core.cst$sym$cond_DASH__GT_,(1),cljs.core.cst$sym$cond_DASH__GT__GT_,(1),cljs.core.cst$sym$condp,(2)], null);
var seq__20440_20446 = cljs.core.seq(stepwise.layout.paired_header_counts);
var chunk__20441_20447 = null;
var count__20442_20448 = (0);
var i__20443_20449 = (0);
while(true){
if((i__20443_20449 < count__20442_20448)){
var vec__20444_20450 = chunk__20441_20447.cljs$core$IIndexed$_nth$arity$2(null,i__20443_20449);
var core_macro_20451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20444_20450,(0),null);
var headc_20452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20444_20450,(1),null);
stepwise.layout.__GT_lines_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,core_macro_20451,((function (seq__20440_20446,chunk__20441_20447,count__20442_20448,i__20443_20449,vec__20444_20450,core_macro_20451,headc_20452){
return (function (form){
return stepwise.layout.header_PLUS_pairs__GT_lines(form,headc_20452);
});})(seq__20440_20446,chunk__20441_20447,count__20442_20448,i__20443_20449,vec__20444_20450,core_macro_20451,headc_20452))
);

var G__20453 = seq__20440_20446;
var G__20454 = chunk__20441_20447;
var G__20455 = count__20442_20448;
var G__20456 = (i__20443_20449 + (1));
seq__20440_20446 = G__20453;
chunk__20441_20447 = G__20454;
count__20442_20448 = G__20455;
i__20443_20449 = G__20456;
continue;
} else {
var temp__4657__auto___20457 = cljs.core.seq(seq__20440_20446);
if(temp__4657__auto___20457){
var seq__20440_20458__$1 = temp__4657__auto___20457;
if(cljs.core.chunked_seq_QMARK_(seq__20440_20458__$1)){
var c__6959__auto___20459 = cljs.core.chunk_first(seq__20440_20458__$1);
var G__20460 = cljs.core.chunk_rest(seq__20440_20458__$1);
var G__20461 = c__6959__auto___20459;
var G__20462 = cljs.core.count(c__6959__auto___20459);
var G__20463 = (0);
seq__20440_20446 = G__20460;
chunk__20441_20447 = G__20461;
count__20442_20448 = G__20462;
i__20443_20449 = G__20463;
continue;
} else {
var vec__20445_20464 = cljs.core.first(seq__20440_20458__$1);
var core_macro_20465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20445_20464,(0),null);
var headc_20466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20445_20464,(1),null);
stepwise.layout.__GT_lines_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,core_macro_20465,((function (seq__20440_20446,chunk__20441_20447,count__20442_20448,i__20443_20449,vec__20445_20464,core_macro_20465,headc_20466,seq__20440_20458__$1,temp__4657__auto___20457){
return (function (form){
return stepwise.layout.header_PLUS_pairs__GT_lines(form,headc_20466);
});})(seq__20440_20446,chunk__20441_20447,count__20442_20448,i__20443_20449,vec__20445_20464,core_macro_20465,headc_20466,seq__20440_20458__$1,temp__4657__auto___20457))
);

var G__20467 = cljs.core.next(seq__20440_20458__$1);
var G__20468 = null;
var G__20469 = (0);
var G__20470 = (0);
seq__20440_20446 = G__20467;
chunk__20441_20447 = G__20468;
count__20442_20448 = G__20469;
i__20443_20449 = G__20470;
continue;
}
} else {
}
}
break;
}
stepwise.layout.letlike__GT_lines = (function stepwise$layout$letlike__GT_lines(form){
var vec__20475 = cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(form);
var head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20475,(0),null);
var bvec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20475,(1),null);
var body = cljs.core.nthnext(vec__20475,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(bvec),cljs.core.cst$kw$vec)){
var indent = stepwise.layout.indent_size_STAR_(form);
var vec__20476 = stepwise.layout.map__GT_lines(bvec);
var init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20476,(0),null);
var more = cljs.core.nthnext(vec__20476,(1));
var init_line = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((stepwise.layout.opener.cljs$core$IFn$_invoke$arity$1 ? stepwise.layout.opener.cljs$core$IFn$_invoke$arity$1(form) : stepwise.layout.opener.call(null,form)),stepwise.layout.__GT_tokens(head),cljs.core.array_seq([stepwise.layout.spacer.cljs$core$IFn$_invoke$arity$0(),init], 0));
var bvec_indent = stepwise.layout.spacer.cljs$core$IFn$_invoke$arity$1((cljs.core.count(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(head)) + indent));
var bvec_lines = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (indent,vec__20476,init,more,init_line,bvec_indent,vec__20475,head,bvec,body){
return (function (p1__20471_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(bvec_indent,p1__20471_SHARP_);
});})(indent,vec__20476,init,more,init_line,bvec_indent,vec__20475,head,bvec,body))
,more);
var body_lines = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (indent,vec__20476,init,more,init_line,bvec_indent,bvec_lines,vec__20475,head,bvec,body){
return (function (p1__20472_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(stepwise.layout.spacer.cljs$core$IFn$_invoke$arity$1(indent),p1__20472_SHARP_);
});})(indent,vec__20476,init,more,init_line,bvec_indent,bvec_lines,vec__20475,head,bvec,body))
,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(stepwise.layout.__GT_lines,cljs.core.array_seq([body], 0)));
return stepwise.layout.close_off(cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,init_line),bvec_lines,cljs.core.array_seq([body_lines], 0))))),(stepwise.layout.closer.cljs$core$IFn$_invoke$arity$1 ? stepwise.layout.closer.cljs$core$IFn$_invoke$arity$1(form) : stepwise.layout.closer.call(null,form)));
} else {
return cljs.core.get_method(stepwise.layout.__GT_lines_STAR_,cljs.core.cst$kw$default).call(null,form);
}
});
var seq__20477_20481 = cljs.core.seq(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$binding,cljs.core.cst$sym$doseq,cljs.core.cst$sym$for,cljs.core.cst$sym$let,cljs.core.cst$sym$loop], null));
var chunk__20478_20482 = null;
var count__20479_20483 = (0);
var i__20480_20484 = (0);
while(true){
if((i__20480_20484 < count__20479_20483)){
var letlike_20485 = chunk__20478_20482.cljs$core$IIndexed$_nth$arity$2(null,i__20480_20484);
stepwise.layout.__GT_lines_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,letlike_20485,((function (seq__20477_20481,chunk__20478_20482,count__20479_20483,i__20480_20484,letlike_20485){
return (function (form){
return stepwise.layout.letlike__GT_lines(form);
});})(seq__20477_20481,chunk__20478_20482,count__20479_20483,i__20480_20484,letlike_20485))
);

var G__20486 = seq__20477_20481;
var G__20487 = chunk__20478_20482;
var G__20488 = count__20479_20483;
var G__20489 = (i__20480_20484 + (1));
seq__20477_20481 = G__20486;
chunk__20478_20482 = G__20487;
count__20479_20483 = G__20488;
i__20480_20484 = G__20489;
continue;
} else {
var temp__4657__auto___20490 = cljs.core.seq(seq__20477_20481);
if(temp__4657__auto___20490){
var seq__20477_20491__$1 = temp__4657__auto___20490;
if(cljs.core.chunked_seq_QMARK_(seq__20477_20491__$1)){
var c__6959__auto___20492 = cljs.core.chunk_first(seq__20477_20491__$1);
var G__20493 = cljs.core.chunk_rest(seq__20477_20491__$1);
var G__20494 = c__6959__auto___20492;
var G__20495 = cljs.core.count(c__6959__auto___20492);
var G__20496 = (0);
seq__20477_20481 = G__20493;
chunk__20478_20482 = G__20494;
count__20479_20483 = G__20495;
i__20480_20484 = G__20496;
continue;
} else {
var letlike_20497 = cljs.core.first(seq__20477_20491__$1);
stepwise.layout.__GT_lines_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,letlike_20497,((function (seq__20477_20481,chunk__20478_20482,count__20479_20483,i__20480_20484,letlike_20497,seq__20477_20491__$1,temp__4657__auto___20490){
return (function (form){
return stepwise.layout.letlike__GT_lines(form);
});})(seq__20477_20481,chunk__20478_20482,count__20479_20483,i__20480_20484,letlike_20497,seq__20477_20491__$1,temp__4657__auto___20490))
);

var G__20498 = cljs.core.next(seq__20477_20491__$1);
var G__20499 = null;
var G__20500 = (0);
var G__20501 = (0);
seq__20477_20481 = G__20498;
chunk__20478_20482 = G__20499;
count__20479_20483 = G__20500;
i__20480_20484 = G__20501;
continue;
}
} else {
}
}
break;
}
