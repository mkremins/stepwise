// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('xyzzy.core');
goog.require('cljs.core');
goog.require('xyzzy.util');
xyzzy.core.assoc_STAR_ = cljs.core.assoc;
xyzzy.core.dissoc_STAR_ = cljs.core.dissoc;
xyzzy.core.update_STAR_ = cljs.core.update;
xyzzy.core.sibling_STAR_ = (function xyzzy$core$sibling_STAR_(path,n){
if((n >= (0))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(path),n);
} else {
return null;
}
});
xyzzy.core.down_STAR_ = (function xyzzy$core$down_STAR_(path){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,(0));
});
xyzzy.core.left_STAR_ = (function xyzzy$core$left_STAR_(path){
if(cljs.core.seq(path)){
return xyzzy.core.sibling_STAR_(path,(cljs.core.peek(path) - (1)));
} else {
return null;
}
});
xyzzy.core.leftmost_STAR_ = (function xyzzy$core$leftmost_STAR_(path){
if(cljs.core.seq(path)){
return xyzzy.core.sibling_STAR_(path,(0));
} else {
return null;
}
});
xyzzy.core.right_STAR_ = (function xyzzy$core$right_STAR_(path){
if(cljs.core.seq(path)){
return xyzzy.core.sibling_STAR_(path,(cljs.core.peek(path) + (1)));
} else {
return null;
}
});
xyzzy.core.up_STAR_ = (function xyzzy$core$up_STAR_(path){
if(cljs.core.seq(path)){
return cljs.core.pop(path);
} else {
return null;
}
});
xyzzy.core.full_path = (function xyzzy$core$full_path(path){
return cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$children),path);
});
xyzzy.core.node = (function xyzzy$core$node(p__20120){
var map__20123 = p__20120;
var map__20123__$1 = ((((!((map__20123 == null)))?((((map__20123.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20123.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20123):map__20123);
var tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20123__$1,cljs.core.cst$kw$tree);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20123__$1,cljs.core.cst$kw$path);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,xyzzy.core.full_path(path));
});
/**
 * Tests whether `node` is a branch node (i.e. permitted to have children).
 */
xyzzy.core.branch_QMARK_ = (function xyzzy$core$branch_QMARK_(node){
return cljs.core.contains_QMARK_(node,cljs.core.cst$kw$children);
});
xyzzy.core.ensure = (function xyzzy$core$ensure(loc,pred){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(loc) : pred.call(null,loc)))){
return loc;
} else {
return null;
}
});
/**
 * Tests whether `(:path loc)` points to an extant node in `(:tree loc)`,
 * returning `loc` if the test passes and `nil` if it does not.
 */
xyzzy.core.check = (function xyzzy$core$check(loc){
return xyzzy.core.ensure(loc,cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$path,xyzzy.core.node));
});
xyzzy.core.down = (function xyzzy$core$down(loc){
return xyzzy.core.check((xyzzy.core.update_STAR_.cljs$core$IFn$_invoke$arity$3 ? xyzzy.core.update_STAR_.cljs$core$IFn$_invoke$arity$3(loc,cljs.core.cst$kw$path,xyzzy.core.down_STAR_) : xyzzy.core.update_STAR_.call(null,loc,cljs.core.cst$kw$path,xyzzy.core.down_STAR_)));
});
xyzzy.core.sibling = (function xyzzy$core$sibling(loc,n){
return xyzzy.core.check((xyzzy.core.update_STAR_.cljs$core$IFn$_invoke$arity$4 ? xyzzy.core.update_STAR_.cljs$core$IFn$_invoke$arity$4(loc,cljs.core.cst$kw$path,xyzzy.core.sibling_STAR_,n) : xyzzy.core.update_STAR_.call(null,loc,cljs.core.cst$kw$path,xyzzy.core.sibling_STAR_,n)));
});
xyzzy.core.child = (function xyzzy$core$child(loc,n){
return xyzzy.core.sibling(xyzzy.core.down(loc),n);
});
xyzzy.core.left = (function xyzzy$core$left(loc){
return xyzzy.core.check((xyzzy.core.update_STAR_.cljs$core$IFn$_invoke$arity$3 ? xyzzy.core.update_STAR_.cljs$core$IFn$_invoke$arity$3(loc,cljs.core.cst$kw$path,xyzzy.core.left_STAR_) : xyzzy.core.update_STAR_.call(null,loc,cljs.core.cst$kw$path,xyzzy.core.left_STAR_)));
});
xyzzy.core.leftmost = (function xyzzy$core$leftmost(loc){
return xyzzy.core.check((xyzzy.core.update_STAR_.cljs$core$IFn$_invoke$arity$3 ? xyzzy.core.update_STAR_.cljs$core$IFn$_invoke$arity$3(loc,cljs.core.cst$kw$path,xyzzy.core.leftmost_STAR_) : xyzzy.core.update_STAR_.call(null,loc,cljs.core.cst$kw$path,xyzzy.core.leftmost_STAR_)));
});
xyzzy.core.right = (function xyzzy$core$right(loc){
return xyzzy.core.check((xyzzy.core.update_STAR_.cljs$core$IFn$_invoke$arity$3 ? xyzzy.core.update_STAR_.cljs$core$IFn$_invoke$arity$3(loc,cljs.core.cst$kw$path,xyzzy.core.right_STAR_) : xyzzy.core.update_STAR_.call(null,loc,cljs.core.cst$kw$path,xyzzy.core.right_STAR_)));
});
xyzzy.core.up = (function xyzzy$core$up(loc){
return xyzzy.core.check((xyzzy.core.update_STAR_.cljs$core$IFn$_invoke$arity$3 ? xyzzy.core.update_STAR_.cljs$core$IFn$_invoke$arity$3(loc,cljs.core.cst$kw$path,xyzzy.core.up_STAR_) : xyzzy.core.update_STAR_.call(null,loc,cljs.core.cst$kw$path,xyzzy.core.up_STAR_)));
});
xyzzy.core.rightmost = (function xyzzy$core$rightmost(loc){
var temp__4657__auto__ = xyzzy.core.node(xyzzy.core.up(loc));
if(cljs.core.truth_(temp__4657__auto__)){
var parent = temp__4657__auto__;
return xyzzy.core.sibling(loc,(cljs.core.count(cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(parent)) - (1)));
} else {
return null;
}
});
xyzzy.core.top = (function xyzzy$core$top(loc){
var G__20128 = loc;
var G__20129 = cljs.core.cst$kw$path;
var G__20130 = cljs.core.PersistentVector.EMPTY;
return (xyzzy.core.assoc_STAR_.cljs$core$IFn$_invoke$arity$3 ? xyzzy.core.assoc_STAR_.cljs$core$IFn$_invoke$arity$3(G__20128,G__20129,G__20130) : xyzzy.core.assoc_STAR_.call(null,G__20128,G__20129,G__20130));
});
/**
 * Returns the location immediately to the left of `loc` (if it exists), the
 * rightmost sibling of `loc` (if it doesn't), or `loc` itself (if `loc` is at
 * the top of the tree).
 */
xyzzy.core.left_or_wrap = (function xyzzy$core$left_or_wrap(loc){
var or__6156__auto__ = xyzzy.core.left(loc);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
var or__6156__auto____$1 = xyzzy.core.rightmost(loc);
if(cljs.core.truth_(or__6156__auto____$1)){
return or__6156__auto____$1;
} else {
return loc;
}
}
});
/**
 * Returns the location immediately to the right of `loc` (if it exists), the
 * leftmost sibling of `loc` (if it doesn't), or `loc` itself (if `loc` is at
 * the top of the tree).
 */
xyzzy.core.right_or_wrap = (function xyzzy$core$right_or_wrap(loc){
var or__6156__auto__ = xyzzy.core.right(loc);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
var or__6156__auto____$1 = xyzzy.core.leftmost(loc);
if(cljs.core.truth_(or__6156__auto____$1)){
return or__6156__auto____$1;
} else {
return loc;
}
}
});
xyzzy.core.followers = (function xyzzy$core$followers(loc,direction){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.rest(cljs.core.iterate(direction,loc)));
});
xyzzy.core.next = (function xyzzy$core$next(loc){
var or__6156__auto__ = xyzzy.core.down(loc);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
var or__6156__auto____$1 = xyzzy.core.right(loc);
if(cljs.core.truth_(or__6156__auto____$1)){
return or__6156__auto____$1;
} else {
var loc_SINGLEQUOTE_ = xyzzy.core.up(loc);
while(true){
var or__6156__auto____$2 = xyzzy.core.right(loc_SINGLEQUOTE_);
if(cljs.core.truth_(or__6156__auto____$2)){
return or__6156__auto____$2;
} else {
var temp__4657__auto__ = xyzzy.core.up(loc_SINGLEQUOTE_);
if(cljs.core.truth_(temp__4657__auto__)){
var loc_SINGLEQUOTE___$1 = temp__4657__auto__;
var G__20131 = loc_SINGLEQUOTE___$1;
loc_SINGLEQUOTE_ = G__20131;
continue;
} else {
return null;
}
}
break;
}
}
}
});
xyzzy.core.prev = (function xyzzy$core$prev(loc){
var temp__4655__auto__ = xyzzy.core.left(loc);
if(cljs.core.truth_(temp__4655__auto__)){
var left_loc = temp__4655__auto__;
return cljs.core.last(cljs.core.cons(left_loc,xyzzy.core.followers(left_loc,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xyzzy.core.rightmost,xyzzy.core.down))));
} else {
return xyzzy.core.up(loc);
}
});
xyzzy.core.children = (function xyzzy$core$children(loc){
var temp__4657__auto__ = xyzzy.core.down(loc);
if(cljs.core.truth_(temp__4657__auto__)){
var down_loc = temp__4657__auto__;
return cljs.core.cons(down_loc,xyzzy.core.followers(down_loc,xyzzy.core.right));
} else {
return null;
}
});
xyzzy.core.descendants = (function xyzzy$core$descendants(loc){
var temp__4657__auto__ = xyzzy.core.children(loc);
if(cljs.core.truth_(temp__4657__auto__)){
var cs = temp__4657__auto__;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cs,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(xyzzy$core$descendants,cljs.core.array_seq([cs], 0)));
} else {
return null;
}
});
xyzzy.core.find_next = (function xyzzy$core$find_next(loc,pred,direction){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,xyzzy.core.followers(loc,direction)));
});
xyzzy.core.find = (function xyzzy$core$find(loc,pred,direction){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(loc) : pred.call(null,loc)))){
return loc;
} else {
return xyzzy.core.find_next(loc,pred,direction);
}
});
xyzzy.core.find_next_node = (function xyzzy$core$find_next_node(loc,pred,direction){
return xyzzy.core.find_next(loc,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(pred,xyzzy.core.node),direction);
});
xyzzy.core.find_node = (function xyzzy$core$find_node(loc,pred,direction){
return xyzzy.core.find(loc,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(pred,xyzzy.core.node),direction);
});
xyzzy.core.replace = (function xyzzy$core$replace(loc,new_node){
return xyzzy.core.check(cljs.core.assoc_in(loc,cljs.core.cons(cljs.core.cst$kw$tree,xyzzy.core.full_path(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(loc))),new_node));
});
xyzzy.core.edit = (function xyzzy$core$edit(var_args){
var args__7221__auto__ = [];
var len__7214__auto___20135 = arguments.length;
var i__7215__auto___20136 = (0);
while(true){
if((i__7215__auto___20136 < len__7214__auto___20135)){
args__7221__auto__.push((arguments[i__7215__auto___20136]));

var G__20137 = (i__7215__auto___20136 + (1));
i__7215__auto___20136 = G__20137;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((2) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((2)),(0))):null);
return xyzzy.core.edit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7222__auto__);
});

xyzzy.core.edit.cljs$core$IFn$_invoke$arity$variadic = (function (loc,f,args){
return xyzzy.core.replace(loc,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,xyzzy.core.node(loc),args));
});

xyzzy.core.edit.cljs$lang$maxFixedArity = (2);

xyzzy.core.edit.cljs$lang$applyTo = (function (seq20132){
var G__20133 = cljs.core.first(seq20132);
var seq20132__$1 = cljs.core.next(seq20132);
var G__20134 = cljs.core.first(seq20132__$1);
var seq20132__$2 = cljs.core.next(seq20132__$1);
return xyzzy.core.edit.cljs$core$IFn$_invoke$arity$variadic(G__20133,G__20134,seq20132__$2);
});
xyzzy.core.edit_parent = (function xyzzy$core$edit_parent(var_args){
var args__7221__auto__ = [];
var len__7214__auto___20141 = arguments.length;
var i__7215__auto___20142 = (0);
while(true){
if((i__7215__auto___20142 < len__7214__auto___20141)){
args__7221__auto__.push((arguments[i__7215__auto___20142]));

var G__20143 = (i__7215__auto___20142 + (1));
i__7215__auto___20142 = G__20143;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((2) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((2)),(0))):null);
return xyzzy.core.edit_parent.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7222__auto__);
});

xyzzy.core.edit_parent.cljs$core$IFn$_invoke$arity$variadic = (function (loc,f,args){
var temp__4657__auto__ = xyzzy.core.up(loc);
if(cljs.core.truth_(temp__4657__auto__)){
var parent_loc = temp__4657__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(xyzzy.core.edit,parent_loc,f,cljs.core.peek(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(loc)),args);
} else {
return null;
}
});

xyzzy.core.edit_parent.cljs$lang$maxFixedArity = (2);

xyzzy.core.edit_parent.cljs$lang$applyTo = (function (seq20138){
var G__20139 = cljs.core.first(seq20138);
var seq20138__$1 = cljs.core.next(seq20138);
var G__20140 = cljs.core.first(seq20138__$1);
var seq20138__$2 = cljs.core.next(seq20138__$1);
return xyzzy.core.edit_parent.cljs$core$IFn$_invoke$arity$variadic(G__20139,G__20140,seq20138__$2);
});
xyzzy.core.assoc = (function xyzzy$core$assoc(var_args){
var args__7221__auto__ = [];
var len__7214__auto___20146 = arguments.length;
var i__7215__auto___20147 = (0);
while(true){
if((i__7215__auto___20147 < len__7214__auto___20146)){
args__7221__auto__.push((arguments[i__7215__auto___20147]));

var G__20148 = (i__7215__auto___20147 + (1));
i__7215__auto___20147 = G__20148;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return xyzzy.core.assoc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

xyzzy.core.assoc.cljs$core$IFn$_invoke$arity$variadic = (function (loc,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(xyzzy.core.edit,loc,xyzzy.core.assoc_STAR_,args);
});

xyzzy.core.assoc.cljs$lang$maxFixedArity = (1);

xyzzy.core.assoc.cljs$lang$applyTo = (function (seq20144){
var G__20145 = cljs.core.first(seq20144);
var seq20144__$1 = cljs.core.next(seq20144);
return xyzzy.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__20145,seq20144__$1);
});
xyzzy.core.dissoc = (function xyzzy$core$dissoc(var_args){
var args__7221__auto__ = [];
var len__7214__auto___20151 = arguments.length;
var i__7215__auto___20152 = (0);
while(true){
if((i__7215__auto___20152 < len__7214__auto___20151)){
args__7221__auto__.push((arguments[i__7215__auto___20152]));

var G__20153 = (i__7215__auto___20152 + (1));
i__7215__auto___20152 = G__20153;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return xyzzy.core.dissoc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

xyzzy.core.dissoc.cljs$core$IFn$_invoke$arity$variadic = (function (loc,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(xyzzy.core.edit,loc,xyzzy.core.dissoc_STAR_,args);
});

xyzzy.core.dissoc.cljs$lang$maxFixedArity = (1);

xyzzy.core.dissoc.cljs$lang$applyTo = (function (seq20149){
var G__20150 = cljs.core.first(seq20149);
var seq20149__$1 = cljs.core.next(seq20149);
return xyzzy.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20150,seq20149__$1);
});
xyzzy.core.update = (function xyzzy$core$update(var_args){
var args__7221__auto__ = [];
var len__7214__auto___20156 = arguments.length;
var i__7215__auto___20157 = (0);
while(true){
if((i__7215__auto___20157 < len__7214__auto___20156)){
args__7221__auto__.push((arguments[i__7215__auto___20157]));

var G__20158 = (i__7215__auto___20157 + (1));
i__7215__auto___20157 = G__20158;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return xyzzy.core.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

xyzzy.core.update.cljs$core$IFn$_invoke$arity$variadic = (function (loc,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(xyzzy.core.edit,loc,xyzzy.core.update_STAR_,args);
});

xyzzy.core.update.cljs$lang$maxFixedArity = (1);

xyzzy.core.update.cljs$lang$applyTo = (function (seq20154){
var G__20155 = cljs.core.first(seq20154);
var seq20154__$1 = cljs.core.next(seq20154);
return xyzzy.core.update.cljs$core$IFn$_invoke$arity$variadic(G__20155,seq20154__$1);
});
xyzzy.core.insert_child_STAR_ = (function xyzzy$core$insert_child_STAR_(parent,n,child){
return (xyzzy.core.update_STAR_.cljs$core$IFn$_invoke$arity$5 ? xyzzy.core.update_STAR_.cljs$core$IFn$_invoke$arity$5(parent,cljs.core.cst$kw$children,xyzzy.util.insert,n,child) : xyzzy.core.update_STAR_.call(null,parent,cljs.core.cst$kw$children,xyzzy.util.insert,n,child));
});
xyzzy.core.remove_child_STAR_ = (function xyzzy$core$remove_child_STAR_(parent,n){
return (xyzzy.core.update_STAR_.cljs$core$IFn$_invoke$arity$4 ? xyzzy.core.update_STAR_.cljs$core$IFn$_invoke$arity$4(parent,cljs.core.cst$kw$children,xyzzy.util.delete$,n) : xyzzy.core.update_STAR_.call(null,parent,cljs.core.cst$kw$children,xyzzy.util.delete$,n));
});
xyzzy.core.insert_child = (function xyzzy$core$insert_child(loc,n,child){
return xyzzy.core.edit.cljs$core$IFn$_invoke$arity$variadic(loc,xyzzy.core.insert_child_STAR_,cljs.core.array_seq([n,child], 0));
});
xyzzy.core.insert_leftmost_child = (function xyzzy$core$insert_leftmost_child(loc,child){
return xyzzy.core.insert_child(loc,(0),child);
});
xyzzy.core.insert_rightmost_child = (function xyzzy$core$insert_rightmost_child(loc,child){
return xyzzy.core.update.cljs$core$IFn$_invoke$arity$variadic(loc,cljs.core.array_seq([cljs.core.cst$kw$children,cljs.core.conj,child], 0));
});
xyzzy.core.insert_left = (function xyzzy$core$insert_left(loc,sib){
var n = cljs.core.peek(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(loc));
return xyzzy.core.child(xyzzy.core.insert_child(xyzzy.core.up(loc),n,sib),(n + (1)));
});
xyzzy.core.insert_right = (function xyzzy$core$insert_right(loc,sib){
var n = (cljs.core.peek(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(loc)) + (1));
return xyzzy.core.child(xyzzy.core.insert_child(xyzzy.core.up(loc),n,sib),(n - (1)));
});
xyzzy.core.remove = (function xyzzy$core$remove(loc){
var n = cljs.core.peek(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(loc));
var loc_SINGLEQUOTE_ = xyzzy.core.edit.cljs$core$IFn$_invoke$arity$variadic(xyzzy.core.up(loc),xyzzy.core.remove_child_STAR_,cljs.core.array_seq([n], 0));
if(cljs.core.empty_QMARK_(cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(xyzzy.core.node(loc_SINGLEQUOTE_)))){
return loc_SINGLEQUOTE_;
} else {
return xyzzy.core.child(loc_SINGLEQUOTE_,(function (){var x__6487__auto__ = (n - (1));
var y__6488__auto__ = (0);
return ((x__6487__auto__ > y__6488__auto__) ? x__6487__auto__ : y__6488__auto__);
})());
}
});
xyzzy.core.remove_child = (function xyzzy$core$remove_child(loc,n){
return xyzzy.core.edit.cljs$core$IFn$_invoke$arity$variadic(loc,xyzzy.core.remove_child_STAR_,cljs.core.array_seq([n], 0));
});
