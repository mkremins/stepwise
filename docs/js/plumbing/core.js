// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('plumbing.fnk.schema');
/**
 * A sentinel value representing missing portions of the input data.
 */
plumbing.core._PLUS_none_PLUS_ = cljs.core.cst$kw$plumbing$core_SLASH_missing;
/**
 * Updates the value in map m at k with the function f.
 * 
 *  Like update-in, but for updating a single top-level key.
 *  Any additional args will be passed to f after the value.
 * 
 *  WARNING As of Clojure 1.7 this function exists in clojure.core and
 *  will not be exported by this namespace.
 */
plumbing.core.update = (function plumbing$core$update(var_args){
var args14523 = [];
var len__7214__auto___14538 = arguments.length;
var i__7215__auto___14539 = (0);
while(true){
if((i__7215__auto___14539 < len__7214__auto___14538)){
args14523.push((arguments[i__7215__auto___14539]));

var G__14540 = (i__7215__auto___14539 + (1));
i__7215__auto___14539 = G__14540;
continue;
} else {
}
break;
}

var G__14531 = args14523.length;
switch (G__14531) {
case 3:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args14523.slice((5)),(0)));
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__7233__auto__);

}
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$3 = (function (m,k,f){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__14532 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14532) : f.call(null,G__14532));
})());
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$4 = (function (m,k,f,x1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__14533 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__14534 = x1;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14533,G__14534) : f.call(null,G__14533,G__14534));
})());
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__14535 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__14536 = x1;
var G__14537 = x2;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14535,G__14536,G__14537) : f.call(null,G__14535,G__14536,G__14537));
})());
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,f,x1,x2,xs){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2,xs));
});

plumbing.core.update.cljs$lang$applyTo = (function (seq14524){
var G__14525 = cljs.core.first(seq14524);
var seq14524__$1 = cljs.core.next(seq14524);
var G__14526 = cljs.core.first(seq14524__$1);
var seq14524__$2 = cljs.core.next(seq14524__$1);
var G__14527 = cljs.core.first(seq14524__$2);
var seq14524__$3 = cljs.core.next(seq14524__$2);
var G__14528 = cljs.core.first(seq14524__$3);
var seq14524__$4 = cljs.core.next(seq14524__$3);
var G__14529 = cljs.core.first(seq14524__$4);
var seq14524__$5 = cljs.core.next(seq14524__$4);
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic(G__14525,G__14526,G__14527,G__14528,G__14529,seq14524__$5);
});

plumbing.core.update.cljs$lang$maxFixedArity = (5);
/**
 * Build map k -> (f v) for [k v] in map, preserving the initial type
 */
plumbing.core.map_vals = (function plumbing$core$map_vals(f,m){
if(cljs.core.sorted_QMARK_(m)){
return cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out_m,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}),cljs.core.sorted_map(),m);
} else {
if(cljs.core.map_QMARK_(m)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__14261__auto__ = (function (){var G__14555 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14555) : cljs.core.atom.call(null,G__14555));
})();
var seq__14556_14566 = cljs.core.seq(m);
var chunk__14557_14567 = null;
var count__14558_14568 = (0);
var i__14559_14569 = (0);
while(true){
if((i__14559_14569 < count__14558_14568)){
var vec__14560_14570 = chunk__14557_14567.cljs$core$IIndexed$_nth$arity$2(null,i__14559_14569);
var k_14571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14560_14570,(0),null);
var v_14572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14560_14570,(1),null);
var m14554_14573 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__14261__auto__) : cljs.core.deref.call(null,m_atom__14261__auto__));
var G__14561_14574 = m_atom__14261__auto__;
var G__14562_14575 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m14554_14573,k_14571,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_14572) : f.call(null,v_14572)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14561_14574,G__14562_14575) : cljs.core.reset_BANG_.call(null,G__14561_14574,G__14562_14575));

var G__14576 = seq__14556_14566;
var G__14577 = chunk__14557_14567;
var G__14578 = count__14558_14568;
var G__14579 = (i__14559_14569 + (1));
seq__14556_14566 = G__14576;
chunk__14557_14567 = G__14577;
count__14558_14568 = G__14578;
i__14559_14569 = G__14579;
continue;
} else {
var temp__4657__auto___14580 = cljs.core.seq(seq__14556_14566);
if(temp__4657__auto___14580){
var seq__14556_14581__$1 = temp__4657__auto___14580;
if(cljs.core.chunked_seq_QMARK_(seq__14556_14581__$1)){
var c__6959__auto___14582 = cljs.core.chunk_first(seq__14556_14581__$1);
var G__14583 = cljs.core.chunk_rest(seq__14556_14581__$1);
var G__14584 = c__6959__auto___14582;
var G__14585 = cljs.core.count(c__6959__auto___14582);
var G__14586 = (0);
seq__14556_14566 = G__14583;
chunk__14557_14567 = G__14584;
count__14558_14568 = G__14585;
i__14559_14569 = G__14586;
continue;
} else {
var vec__14563_14587 = cljs.core.first(seq__14556_14581__$1);
var k_14588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14563_14587,(0),null);
var v_14589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14563_14587,(1),null);
var m14554_14590 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__14261__auto__) : cljs.core.deref.call(null,m_atom__14261__auto__));
var G__14564_14591 = m_atom__14261__auto__;
var G__14565_14592 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m14554_14590,k_14588,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_14589) : f.call(null,v_14589)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14564_14591,G__14565_14592) : cljs.core.reset_BANG_.call(null,G__14564_14591,G__14565_14592));

var G__14593 = cljs.core.next(seq__14556_14581__$1);
var G__14594 = null;
var G__14595 = (0);
var G__14596 = (0);
seq__14556_14566 = G__14593;
chunk__14557_14567 = G__14594;
count__14558_14568 = G__14595;
i__14559_14569 = G__14596;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__14261__auto__) : cljs.core.deref.call(null,m_atom__14261__auto__)));

}
}
});
/**
 * Build map (f k) -> v for [k v] in map m
 */
plumbing.core.map_keys = (function plumbing$core$map_keys(f,m){
if(cljs.core.map_QMARK_(m)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__14261__auto__ = (function (){var G__14610 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14610) : cljs.core.atom.call(null,G__14610));
})();
var seq__14611_14621 = cljs.core.seq(m);
var chunk__14612_14622 = null;
var count__14613_14623 = (0);
var i__14614_14624 = (0);
while(true){
if((i__14614_14624 < count__14613_14623)){
var vec__14615_14625 = chunk__14612_14622.cljs$core$IIndexed$_nth$arity$2(null,i__14614_14624);
var k_14626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14615_14625,(0),null);
var v_14627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14615_14625,(1),null);
var m14609_14628 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__14261__auto__) : cljs.core.deref.call(null,m_atom__14261__auto__));
var G__14616_14629 = m_atom__14261__auto__;
var G__14617_14630 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m14609_14628,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_14626) : f.call(null,k_14626)),v_14627);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14616_14629,G__14617_14630) : cljs.core.reset_BANG_.call(null,G__14616_14629,G__14617_14630));

var G__14631 = seq__14611_14621;
var G__14632 = chunk__14612_14622;
var G__14633 = count__14613_14623;
var G__14634 = (i__14614_14624 + (1));
seq__14611_14621 = G__14631;
chunk__14612_14622 = G__14632;
count__14613_14623 = G__14633;
i__14614_14624 = G__14634;
continue;
} else {
var temp__4657__auto___14635 = cljs.core.seq(seq__14611_14621);
if(temp__4657__auto___14635){
var seq__14611_14636__$1 = temp__4657__auto___14635;
if(cljs.core.chunked_seq_QMARK_(seq__14611_14636__$1)){
var c__6959__auto___14637 = cljs.core.chunk_first(seq__14611_14636__$1);
var G__14638 = cljs.core.chunk_rest(seq__14611_14636__$1);
var G__14639 = c__6959__auto___14637;
var G__14640 = cljs.core.count(c__6959__auto___14637);
var G__14641 = (0);
seq__14611_14621 = G__14638;
chunk__14612_14622 = G__14639;
count__14613_14623 = G__14640;
i__14614_14624 = G__14641;
continue;
} else {
var vec__14618_14642 = cljs.core.first(seq__14611_14636__$1);
var k_14643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14618_14642,(0),null);
var v_14644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14618_14642,(1),null);
var m14609_14645 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__14261__auto__) : cljs.core.deref.call(null,m_atom__14261__auto__));
var G__14619_14646 = m_atom__14261__auto__;
var G__14620_14647 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m14609_14645,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_14643) : f.call(null,k_14643)),v_14644);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14619_14646,G__14620_14647) : cljs.core.reset_BANG_.call(null,G__14619_14646,G__14620_14647));

var G__14648 = cljs.core.next(seq__14611_14636__$1);
var G__14649 = null;
var G__14650 = (0);
var G__14651 = (0);
seq__14611_14621 = G__14648;
chunk__14612_14622 = G__14649;
count__14613_14623 = G__14650;
i__14614_14624 = G__14651;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__14261__auto__) : cljs.core.deref.call(null,m_atom__14261__auto__)));
}
});
/**
 * Build map k -> (f k) for keys in ks
 */
plumbing.core.map_from_keys = (function plumbing$core$map_from_keys(f,ks){
var m_atom__14261__auto__ = (function (){var G__14663 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14663) : cljs.core.atom.call(null,G__14663));
})();
var seq__14664_14672 = cljs.core.seq(ks);
var chunk__14665_14673 = null;
var count__14666_14674 = (0);
var i__14667_14675 = (0);
while(true){
if((i__14667_14675 < count__14666_14674)){
var k_14676 = chunk__14665_14673.cljs$core$IIndexed$_nth$arity$2(null,i__14667_14675);
var m14662_14677 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__14261__auto__) : cljs.core.deref.call(null,m_atom__14261__auto__));
var G__14668_14678 = m_atom__14261__auto__;
var G__14669_14679 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m14662_14677,k_14676,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_14676) : f.call(null,k_14676)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14668_14678,G__14669_14679) : cljs.core.reset_BANG_.call(null,G__14668_14678,G__14669_14679));

var G__14680 = seq__14664_14672;
var G__14681 = chunk__14665_14673;
var G__14682 = count__14666_14674;
var G__14683 = (i__14667_14675 + (1));
seq__14664_14672 = G__14680;
chunk__14665_14673 = G__14681;
count__14666_14674 = G__14682;
i__14667_14675 = G__14683;
continue;
} else {
var temp__4657__auto___14684 = cljs.core.seq(seq__14664_14672);
if(temp__4657__auto___14684){
var seq__14664_14685__$1 = temp__4657__auto___14684;
if(cljs.core.chunked_seq_QMARK_(seq__14664_14685__$1)){
var c__6959__auto___14686 = cljs.core.chunk_first(seq__14664_14685__$1);
var G__14687 = cljs.core.chunk_rest(seq__14664_14685__$1);
var G__14688 = c__6959__auto___14686;
var G__14689 = cljs.core.count(c__6959__auto___14686);
var G__14690 = (0);
seq__14664_14672 = G__14687;
chunk__14665_14673 = G__14688;
count__14666_14674 = G__14689;
i__14667_14675 = G__14690;
continue;
} else {
var k_14691 = cljs.core.first(seq__14664_14685__$1);
var m14662_14692 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__14261__auto__) : cljs.core.deref.call(null,m_atom__14261__auto__));
var G__14670_14693 = m_atom__14261__auto__;
var G__14671_14694 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m14662_14692,k_14691,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_14691) : f.call(null,k_14691)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14670_14693,G__14671_14694) : cljs.core.reset_BANG_.call(null,G__14670_14693,G__14671_14694));

var G__14695 = cljs.core.next(seq__14664_14685__$1);
var G__14696 = null;
var G__14697 = (0);
var G__14698 = (0);
seq__14664_14672 = G__14695;
chunk__14665_14673 = G__14696;
count__14666_14674 = G__14697;
i__14667_14675 = G__14698;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__14261__auto__) : cljs.core.deref.call(null,m_atom__14261__auto__)));
});
/**
 * Build map (f v) -> v for vals in vs
 */
plumbing.core.map_from_vals = (function plumbing$core$map_from_vals(f,vs){
var m_atom__14261__auto__ = (function (){var G__14710 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14710) : cljs.core.atom.call(null,G__14710));
})();
var seq__14711_14719 = cljs.core.seq(vs);
var chunk__14712_14720 = null;
var count__14713_14721 = (0);
var i__14714_14722 = (0);
while(true){
if((i__14714_14722 < count__14713_14721)){
var v_14723 = chunk__14712_14720.cljs$core$IIndexed$_nth$arity$2(null,i__14714_14722);
var m14709_14724 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__14261__auto__) : cljs.core.deref.call(null,m_atom__14261__auto__));
var G__14715_14725 = m_atom__14261__auto__;
var G__14716_14726 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m14709_14724,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_14723) : f.call(null,v_14723)),v_14723);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14715_14725,G__14716_14726) : cljs.core.reset_BANG_.call(null,G__14715_14725,G__14716_14726));

var G__14727 = seq__14711_14719;
var G__14728 = chunk__14712_14720;
var G__14729 = count__14713_14721;
var G__14730 = (i__14714_14722 + (1));
seq__14711_14719 = G__14727;
chunk__14712_14720 = G__14728;
count__14713_14721 = G__14729;
i__14714_14722 = G__14730;
continue;
} else {
var temp__4657__auto___14731 = cljs.core.seq(seq__14711_14719);
if(temp__4657__auto___14731){
var seq__14711_14732__$1 = temp__4657__auto___14731;
if(cljs.core.chunked_seq_QMARK_(seq__14711_14732__$1)){
var c__6959__auto___14733 = cljs.core.chunk_first(seq__14711_14732__$1);
var G__14734 = cljs.core.chunk_rest(seq__14711_14732__$1);
var G__14735 = c__6959__auto___14733;
var G__14736 = cljs.core.count(c__6959__auto___14733);
var G__14737 = (0);
seq__14711_14719 = G__14734;
chunk__14712_14720 = G__14735;
count__14713_14721 = G__14736;
i__14714_14722 = G__14737;
continue;
} else {
var v_14738 = cljs.core.first(seq__14711_14732__$1);
var m14709_14739 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__14261__auto__) : cljs.core.deref.call(null,m_atom__14261__auto__));
var G__14717_14740 = m_atom__14261__auto__;
var G__14718_14741 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m14709_14739,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_14738) : f.call(null,v_14738)),v_14738);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14717_14740,G__14718_14741) : cljs.core.reset_BANG_.call(null,G__14717_14740,G__14718_14741));

var G__14742 = cljs.core.next(seq__14711_14732__$1);
var G__14743 = null;
var G__14744 = (0);
var G__14745 = (0);
seq__14711_14719 = G__14742;
chunk__14712_14720 = G__14743;
count__14713_14721 = G__14744;
i__14714_14722 = G__14745;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__14261__auto__) : cljs.core.deref.call(null,m_atom__14261__auto__)));
});
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
plumbing.core.dissoc_in = (function plumbing$core$dissoc_in(m,p__14746){
var vec__14750 = p__14746;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14750,(0),null);
var ks = cljs.core.nthnext(vec__14750,(1));
if(cljs.core.truth_(m)){
var temp__4655__auto__ = (function (){var and__6144__auto__ = ks;
if(cljs.core.truth_(and__6144__auto__)){
return plumbing$core$dissoc_in(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks);
} else {
return and__6144__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var res = temp__4655__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,res);
} else {
var res = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.empty_QMARK_(res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
/**
 * Recursively convert maps in m (including itself)
 * to have keyword keys instead of string
 */
plumbing.core.keywordize_map = (function plumbing$core$keywordize_map(x){
if(cljs.core.map_QMARK_(x)){
var m_atom__14261__auto__ = (function (){var G__14764 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14764) : cljs.core.atom.call(null,G__14764));
})();
var seq__14765_14775 = cljs.core.seq(x);
var chunk__14766_14776 = null;
var count__14767_14777 = (0);
var i__14768_14778 = (0);
while(true){
if((i__14768_14778 < count__14767_14777)){
var vec__14769_14779 = chunk__14766_14776.cljs$core$IIndexed$_nth$arity$2(null,i__14768_14778);
var k_14780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14769_14779,(0),null);
var v_14781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14769_14779,(1),null);
var m14763_14782 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__14261__auto__) : cljs.core.deref.call(null,m_atom__14261__auto__));
var G__14770_14783 = m_atom__14261__auto__;
var G__14771_14784 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m14763_14782,((typeof k_14780 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_14780):k_14780),plumbing$core$keywordize_map(v_14781));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14770_14783,G__14771_14784) : cljs.core.reset_BANG_.call(null,G__14770_14783,G__14771_14784));

var G__14785 = seq__14765_14775;
var G__14786 = chunk__14766_14776;
var G__14787 = count__14767_14777;
var G__14788 = (i__14768_14778 + (1));
seq__14765_14775 = G__14785;
chunk__14766_14776 = G__14786;
count__14767_14777 = G__14787;
i__14768_14778 = G__14788;
continue;
} else {
var temp__4657__auto___14789 = cljs.core.seq(seq__14765_14775);
if(temp__4657__auto___14789){
var seq__14765_14790__$1 = temp__4657__auto___14789;
if(cljs.core.chunked_seq_QMARK_(seq__14765_14790__$1)){
var c__6959__auto___14791 = cljs.core.chunk_first(seq__14765_14790__$1);
var G__14792 = cljs.core.chunk_rest(seq__14765_14790__$1);
var G__14793 = c__6959__auto___14791;
var G__14794 = cljs.core.count(c__6959__auto___14791);
var G__14795 = (0);
seq__14765_14775 = G__14792;
chunk__14766_14776 = G__14793;
count__14767_14777 = G__14794;
i__14768_14778 = G__14795;
continue;
} else {
var vec__14772_14796 = cljs.core.first(seq__14765_14790__$1);
var k_14797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14772_14796,(0),null);
var v_14798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14772_14796,(1),null);
var m14763_14799 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__14261__auto__) : cljs.core.deref.call(null,m_atom__14261__auto__));
var G__14773_14800 = m_atom__14261__auto__;
var G__14774_14801 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m14763_14799,((typeof k_14797 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_14797):k_14797),plumbing$core$keywordize_map(v_14798));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14773_14800,G__14774_14801) : cljs.core.reset_BANG_.call(null,G__14773_14800,G__14774_14801));

var G__14802 = cljs.core.next(seq__14765_14790__$1);
var G__14803 = null;
var G__14804 = (0);
var G__14805 = (0);
seq__14765_14775 = G__14802;
chunk__14766_14776 = G__14803;
count__14767_14777 = G__14804;
i__14768_14778 = G__14805;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__14261__auto__) : cljs.core.deref.call(null,m_atom__14261__auto__)));
} else {
if(cljs.core.seq_QMARK_(x)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(plumbing$core$keywordize_map,x);
} else {
if(cljs.core.vector_QMARK_(x)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(plumbing$core$keywordize_map,x);
} else {
return x;

}
}
}
});
/**
 * Like get but throw an exception if not found
 */
plumbing.core.safe_get = (function plumbing$core$safe_get(m,k){
var temp__4655__auto__ = cljs.core.find(m,k);
if(cljs.core.truth_(temp__4655__auto__)){
var pair__14337__auto__ = temp__4655__auto__;
return cljs.core.val(pair__14337__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.key,m)], 0))));

}
});
/**
 * Like get-in but throws exception if not found
 */
plumbing.core.safe_get_in = (function plumbing$core$safe_get_in(m,ks){
while(true){
if(cljs.core.seq(ks)){
var G__14806 = plumbing.core.safe_get(m,cljs.core.first(ks));
var G__14807 = cljs.core.next(ks);
m = G__14806;
ks = G__14807;
continue;
} else {
return m;
}
break;
}
});
/**
 * Like assoc but only assocs when value is truthy
 */
plumbing.core.assoc_when = (function plumbing$core$assoc_when(var_args){
var args__7221__auto__ = [];
var len__7214__auto___14820 = arguments.length;
var i__7215__auto___14821 = (0);
while(true){
if((i__7215__auto___14821 < len__7214__auto___14820)){
args__7221__auto__.push((arguments[i__7215__auto___14821]));

var G__14822 = (i__7215__auto___14821 + (1));
i__7215__auto___14821 = G__14822;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
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
})(),(function (){var iter__6928__auto__ = (function plumbing$core$iter__14810(s__14811){
return (new cljs.core.LazySeq(null,(function (){
var s__14811__$1 = s__14811;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14811__$1);
if(temp__4657__auto__){
var s__14811__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14811__$2)){
var c__6926__auto__ = cljs.core.chunk_first(s__14811__$2);
var size__6927__auto__ = cljs.core.count(c__6926__auto__);
var b__14813 = cljs.core.chunk_buffer(size__6927__auto__);
if((function (){var i__14812 = (0);
while(true){
if((i__14812 < size__6927__auto__)){
var vec__14818 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6926__auto__,i__14812);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14818,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14818,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__14813,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__14823 = (i__14812 + (1));
i__14812 = G__14823;
continue;
} else {
var G__14824 = (i__14812 + (1));
i__14812 = G__14824;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14813),plumbing$core$iter__14810(cljs.core.chunk_rest(s__14811__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14813),null);
}
} else {
var vec__14819 = cljs.core.first(s__14811__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14819,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14819,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$core$iter__14810(cljs.core.rest(s__14811__$2)));
} else {
var G__14825 = cljs.core.rest(s__14811__$2);
s__14811__$1 = G__14825;
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

plumbing.core.assoc_when.cljs$lang$maxFixedArity = (1);

plumbing.core.assoc_when.cljs$lang$applyTo = (function (seq14808){
var G__14809 = cljs.core.first(seq14808);
var seq14808__$1 = cljs.core.next(seq14808);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__14809,seq14808__$1);
});
/**
 * Like update-in but returns m unchanged if key-seq is not present.
 */
plumbing.core.update_in_when = (function plumbing$core$update_in_when(var_args){
var args__7221__auto__ = [];
var len__7214__auto___14830 = arguments.length;
var i__7215__auto___14831 = (0);
while(true){
if((i__7215__auto___14831 < len__7214__auto___14830)){
args__7221__auto__.push((arguments[i__7215__auto___14831]));

var G__14832 = (i__7215__auto___14831 + (1));
i__7215__auto___14831 = G__14832;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((3) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((3)),(0))):null);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7222__auto__);
});

plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,key_seq,f,args){
var found = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m,key_seq,plumbing.core._PLUS_none_PLUS_);
if(!((plumbing.core._PLUS_none_PLUS_ === found))){
return cljs.core.assoc_in(m,key_seq,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,found,args));
} else {
return m;
}
});

plumbing.core.update_in_when.cljs$lang$maxFixedArity = (3);

plumbing.core.update_in_when.cljs$lang$applyTo = (function (seq14826){
var G__14827 = cljs.core.first(seq14826);
var seq14826__$1 = cljs.core.next(seq14826);
var G__14828 = cljs.core.first(seq14826__$1);
var seq14826__$2 = cljs.core.next(seq14826__$1);
var G__14829 = cljs.core.first(seq14826__$2);
var seq14826__$3 = cljs.core.next(seq14826__$2);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic(G__14827,G__14828,G__14829,seq14826__$3);
});
/**
 * Like group-by, but accepts a map-fn that is applied to values before
 * collected.
 */
plumbing.core.grouped_map = (function plumbing$core$grouped_map(key_fn,map_fn,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){
var k = (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(x) : key_fn.call(null,x));
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),(map_fn.cljs$core$IFn$_invoke$arity$1 ? map_fn.cljs$core$IFn$_invoke$arity$1(x) : map_fn.call(null,x))));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
 * Like (apply concat s) but lazier (and shorter) 
 */
plumbing.core.aconcat = (function plumbing$core$aconcat(s){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.LazySeq(null,(function (){
return cljs.core.first(s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
var temp__4657__auto__ = cljs.core.next(s);
if(temp__4657__auto__){
var n = temp__4657__auto__;
return plumbing$core$aconcat(n);
} else {
return null;
}
}),null,null)));
});
/**
 * Takes a seqable and returns a lazy sequence that
 * is maximally lazy and doesn't realize elements due to either
 * chunking or apply.
 * 
 * Useful when you don't want chunking, for instance,
 * (first awesome-website? (map slurp +a-bunch-of-urls+))
 * may slurp up to 31 unneed webpages, wherease
 * (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
 * is guaranteed to stop slurping after the first awesome website.
 * 
 *   Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
 */
plumbing.core.unchunk = (function plumbing$core$unchunk(s){
if(cljs.core.seq(s)){
return cljs.core.cons(cljs.core.first(s),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$unchunk(cljs.core.rest(s));
}),null,null)));
} else {
return null;
}
});
/**
 * Return sum of (f x) for each x in xs
 */
plumbing.core.sum = (function plumbing$core$sum(var_args){
var args14834 = [];
var len__7214__auto___14837 = arguments.length;
var i__7215__auto___14838 = (0);
while(true){
if((i__7215__auto___14838 < len__7214__auto___14837)){
args14834.push((arguments[i__7215__auto___14838]));

var G__14839 = (i__7215__auto___14838 + (1));
i__7215__auto___14838 = G__14839;
continue;
} else {
}
break;
}

var G__14836 = args14834.length;
switch (G__14836) {
case 2:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14834.length)].join('')));

}
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,xs));
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,xs);
});

plumbing.core.sum.cljs$lang$maxFixedArity = 2;
/**
 * returns (first xs) when xs has only 1 element
 */
plumbing.core.singleton = (function plumbing$core$singleton(xs){
var temp__4657__auto__ = cljs.core.seq(xs);
if(temp__4657__auto__){
var xs__$1 = temp__4657__auto__;
if(cljs.core.next(xs__$1)){
return null;
} else {
return cljs.core.first(xs__$1);
}
} else {
return null;
}
});
/**
 * Returns [idx x] for x in seqable s
 */
plumbing.core.indexed = (function plumbing$core$indexed(s){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,s);
});
/**
 * Returns indices idx of sequence s where (f (nth s idx))
 */
plumbing.core.positions = (function plumbing$core$positions(f,s){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)))){
return i;
} else {
return null;
}
}),s);
});
/**
 * Returns elements of xs which return unique
 * values according to f. If multiple elements of xs return the same
 * value under f, the first is returned
 */
plumbing.core.distinct_by = (function plumbing$core$distinct_by(f,xs){
var s = (function (){var G__14848 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14848) : cljs.core.atom.call(null,G__14848));
})();
var iter__6928__auto__ = ((function (s){
return (function plumbing$core$distinct_by_$_iter__14849(s__14850){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__14850__$1 = s__14850;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14850__$1);
if(temp__4657__auto__){
var s__14850__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14850__$2)){
var c__6926__auto__ = cljs.core.chunk_first(s__14850__$2);
var size__6927__auto__ = cljs.core.count(c__6926__auto__);
var b__14852 = cljs.core.chunk_buffer(size__6927__auto__);
if((function (){var i__14851 = (0);
while(true){
if((i__14851 < size__6927__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6926__auto__,i__14851);
var id = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(!(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(s) : cljs.core.deref.call(null,s)),id))){
cljs.core.chunk_append(b__14852,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
);

var G__14855 = (i__14851 + (1));
i__14851 = G__14855;
continue;
} else {
var G__14856 = (i__14851 + (1));
i__14851 = G__14856;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14852),plumbing$core$distinct_by_$_iter__14849(cljs.core.chunk_rest(s__14850__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14852),null);
}
} else {
var x = cljs.core.first(s__14850__$2);
var id = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(!(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(s) : cljs.core.deref.call(null,s)),id))){
return cljs.core.cons((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
,plumbing$core$distinct_by_$_iter__14849(cljs.core.rest(s__14850__$2)));
} else {
var G__14857 = cljs.core.rest(s__14850__$2);
s__14850__$1 = G__14857;
continue;
}
}
} else {
return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;
return iter__6928__auto__(xs);
});
/**
 * Analogy: partition:partition-all :: interleave:interleave-all
 */
plumbing.core.interleave_all = (function plumbing$core$interleave_all(var_args){
var args__7221__auto__ = [];
var len__7214__auto___14860 = arguments.length;
var i__7215__auto___14861 = (0);
while(true){
if((i__7215__auto___14861 < len__7214__auto___14860)){
args__7221__auto__.push((arguments[i__7215__auto___14861]));

var G__14862 = (i__7215__auto___14861 + (1));
i__7215__auto___14861 = G__14862;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((0) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((0)),(0))):null);
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(argseq__7222__auto__);
});

plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (colls){
return (new cljs.core.LazySeq(null,(function (){
return (function plumbing$core$helper(seqs){
if(cljs.core.seq(seqs)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$helper(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.next,seqs));
}),null,null)));
} else {
return null;
}
}).call(null,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,colls));
}),null,null));
});

plumbing.core.interleave_all.cljs$lang$maxFixedArity = (0);

plumbing.core.interleave_all.cljs$lang$applyTo = (function (seq14858){
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14858));
});
/**
 * Returns # of elements of xs where pred holds
 */
plumbing.core.count_when = (function plumbing$core$count_when(pred,xs){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,xs));
});
/**
 * Like conj but ignores non-truthy values
 */
plumbing.core.conj_when = (function plumbing$core$conj_when(var_args){
var args14863 = [];
var len__7214__auto___14869 = arguments.length;
var i__7215__auto___14870 = (0);
while(true){
if((i__7215__auto___14870 < len__7214__auto___14869)){
args14863.push((arguments[i__7215__auto___14870]));

var G__14871 = (i__7215__auto___14870 + (1));
i__7215__auto___14870 = G__14871;
continue;
} else {
}
break;
}

var G__14868 = args14863.length;
switch (G__14868) {
case 2:
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args14863.slice((2)),(0)));
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7233__auto__);

}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
} else {
return coll;
}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__14873 = plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__14874 = cljs.core.first(xs);
var G__14875 = cljs.core.next(xs);
coll = G__14873;
x = G__14874;
xs = G__14875;
continue;
} else {
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
});

plumbing.core.conj_when.cljs$lang$applyTo = (function (seq14864){
var G__14865 = cljs.core.first(seq14864);
var seq14864__$1 = cljs.core.next(seq14864);
var G__14866 = cljs.core.first(seq14864__$1);
var seq14864__$2 = cljs.core.next(seq14864__$1);
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__14865,G__14866,seq14864__$2);
});

plumbing.core.conj_when.cljs$lang$maxFixedArity = (2);
/**
 * Like cons but does nothing if x is non-truthy.
 */
plumbing.core.cons_when = (function plumbing$core$cons_when(x,s){
if(cljs.core.truth_(x)){
return cljs.core.cons(x,s);
} else {
return s;
}
});
/**
 * Like sort-by, but prefers higher values rather than lower ones.
 */
plumbing.core.rsort_by = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,cljs.core.sort_by);
/**
 * Like swap! but returns a pair [old-val new-val]
 */
plumbing.core.swap_pair_BANG_ = (function plumbing$core$swap_pair_BANG_(var_args){
var args14877 = [];
var len__7214__auto___14883 = arguments.length;
var i__7215__auto___14884 = (0);
while(true){
if((i__7215__auto___14884 < len__7214__auto___14883)){
args14877.push((arguments[i__7215__auto___14884]));

var G__14885 = (i__7215__auto___14884 + (1));
i__7215__auto___14884 = G__14885;
continue;
} else {
}
break;
}

var G__14882 = args14877.length;
switch (G__14882) {
case 2:
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args14877.slice((2)),(0)));
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7233__auto__);

}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,f){
while(true){
var old_val = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a));
var new_val = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_val) : f.call(null,old_val));
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_(a,old_val,new_val))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (p1__14876_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__14876_SHARP_,args);
}));
});

plumbing.core.swap_pair_BANG_.cljs$lang$applyTo = (function (seq14878){
var G__14879 = cljs.core.first(seq14878);
var seq14878__$1 = cljs.core.next(seq14878);
var G__14880 = cljs.core.first(seq14878__$1);
var seq14878__$2 = cljs.core.next(seq14878__$1);
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14879,G__14880,seq14878__$2);
});

plumbing.core.swap_pair_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Like reset! but returns old-val
 */
plumbing.core.get_and_set_BANG_ = (function plumbing$core$get_and_set_BANG_(a,new_val){
return cljs.core.first(plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.constantly(new_val)));
});
plumbing.core.millis = (function plumbing$core$millis(){
return (new Date()).getTime();
});
/**
 * Like apply, but applies a map to a function with positional map
 *   arguments. Can take optional initial args just like apply.
 */
plumbing.core.mapply = (function plumbing$core$mapply(var_args){
var args14887 = [];
var len__7214__auto___14893 = arguments.length;
var i__7215__auto___14894 = (0);
while(true){
if((i__7215__auto___14894 < len__7214__auto___14893)){
args14887.push((arguments[i__7215__auto___14894]));

var G__14895 = (i__7215__auto___14894 + (1));
i__7215__auto___14894 = G__14895;
continue;
} else {
}
break;
}

var G__14892 = args14887.length;
switch (G__14892) {
case 2:
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7233__auto__ = (new cljs.core.IndexedSeq(args14887.slice((2)),(0)));
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7233__auto__);

}
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,m));
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,arg,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.last(args))));
});

plumbing.core.mapply.cljs$lang$applyTo = (function (seq14888){
var G__14889 = cljs.core.first(seq14888);
var seq14888__$1 = cljs.core.next(seq14888);
var G__14890 = cljs.core.first(seq14888__$1);
var seq14888__$2 = cljs.core.next(seq14888__$1);
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic(G__14889,G__14890,seq14888__$2);
});

plumbing.core.mapply.cljs$lang$maxFixedArity = (2);
