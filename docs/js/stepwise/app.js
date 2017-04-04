// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('stepwise.app');
goog.require('cljs.core');
goog.require('om_tools.dom');
goog.require('stepwise.model');
goog.require('stepwise.eval');
goog.require('stepwise.util');
goog.require('om_tools.core');
goog.require('stepwise.layout');
goog.require('xyzzy.core');
goog.require('om.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_();
stepwise.app.default_examples = new cljs.core.PersistentArrayMap(null, 5, ["example-1",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(stepwise.eval.init_state("(println \"Hello world!\")\n\n(apply + [1 2 (- 10 7) 4 5])"),cljs.core.cst$kw$title,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Calling functions"], null)),"example-2",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(stepwise.eval.init_state("(if (+ 1 1) (* 3 5) :nope)\n\n(if nil (+ 42 11 13) 0)"),cljs.core.cst$kw$title,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["The ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"if"], null)," special form"], null)),"example-3",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(stepwise.eval.init_state("(def foo 5)\n\n(let [foo (+ 1 2 3) bar (- foo 4)] (* foo bar))\n\nfoo"),cljs.core.cst$kw$title,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["The ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"def"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"let"], null)," special forms"], null)),"example-4",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(stepwise.eval.init_state("(let [foo (apply + (range 10))\n      bar (* foo 10)]\n  (let [foo (dec bar)\n        baz (inc foo)]\n    (* foo bar baz)))"),cljs.core.cst$kw$title,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Nested ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"let"], null)," forms"], null)),"example-5",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(stepwise.eval.init_state("(def greet\n  (fn greet\n    ([] (greet \"world\"))\n    ([name] (str \"Hello, \" name \"!\"))))\n\n(greet \"Max\")\n\n(greet)"),cljs.core.cst$kw$title,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["User-defined functions"], null))], null);
stepwise.app.app_state = (function (){var G__20601 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$route,"example-1",cljs.core.cst$kw$examples,stepwise.app.default_examples,cljs.core.cst$kw$sandbox,stepwise.eval.init_state("")], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20601) : cljs.core.atom.call(null,G__20601));
})();

var ufv___20620 = schema.utils.use_fn_validation;
var output_schema20603_20621 = schema.core.Any;
var input_schema20604_20622 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker20605_20623 = schema.core.checker(input_schema20604_20622);
var output_checker20606_20624 = schema.core.checker(output_schema20603_20621);
/**
 * Inputs: [form owner]
 */
stepwise.app.atom_STAR_ = ((function (ufv___20620,output_schema20603_20621,input_schema20604_20622,input_checker20605_20623,output_checker20606_20624){
return (function stepwise$app$atom_STAR_(G__20607,G__20608){
var validate__12100__auto__ = ufv___20620.get_cell();
if(cljs.core.truth_(validate__12100__auto__)){
var args__12101__auto___20625 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20607,G__20608], null);
var temp__4657__auto___20626 = (input_checker20605_20623.cljs$core$IFn$_invoke$arity$1 ? input_checker20605_20623.cljs$core$IFn$_invoke$arity$1(args__12101__auto___20625) : input_checker20605_20623.call(null,args__12101__auto___20625));
if(cljs.core.truth_(temp__4657__auto___20626)){
var error__12102__auto___20627 = temp__4657__auto___20626;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$atom_STAR_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12102__auto___20627], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema20604_20622,cljs.core.cst$kw$value,args__12101__auto___20625,cljs.core.cst$kw$error,error__12102__auto___20627], null));
} else {
}
} else {
}

var o__12103__auto__ = (function (){var form = G__20607;
var owner = G__20608;
while(true){
if(typeof stepwise.app.t_stepwise$app20613 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
stepwise.app.t_stepwise$app20613 = (function (form,owner,output_schema20603,input_schema20604,output_checker20606,G__20607,input_checker20605,G__20608,ufv__,atom_STAR_,validate__12100__auto__,meta20614){
this.form = form;
this.owner = owner;
this.output_schema20603 = output_schema20603;
this.input_schema20604 = input_schema20604;
this.output_checker20606 = output_checker20606;
this.G__20607 = G__20607;
this.input_checker20605 = input_checker20605;
this.G__20608 = G__20608;
this.ufv__ = ufv__;
this.atom_STAR_ = atom_STAR_;
this.validate__12100__auto__ = validate__12100__auto__;
this.meta20614 = meta20614;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
stepwise.app.t_stepwise$app20613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__12100__auto__,ufv___20620,output_schema20603_20621,input_schema20604_20622,input_checker20605_20623,output_checker20606_20624){
return (function (_20615,meta20614__$1){
var self__ = this;
var _20615__$1 = this;
return (new stepwise.app.t_stepwise$app20613(self__.form,self__.owner,self__.output_schema20603,self__.input_schema20604,self__.output_checker20606,self__.G__20607,self__.input_checker20605,self__.G__20608,self__.ufv__,self__.atom_STAR_,self__.validate__12100__auto__,meta20614__$1));
});})(validate__12100__auto__,ufv___20620,output_schema20603_20621,input_schema20604_20622,input_checker20605_20623,output_checker20606_20624))
;

stepwise.app.t_stepwise$app20613.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__12100__auto__,ufv___20620,output_schema20603_20621,input_schema20604_20622,input_checker20605_20623,output_checker20606_20624){
return (function (_20615){
var self__ = this;
var _20615__$1 = this;
return self__.meta20614;
});})(validate__12100__auto__,ufv___20620,output_schema20603_20621,input_schema20604_20622,input_checker20605_20623,output_checker20606_20624))
;

stepwise.app.t_stepwise$app20613.prototype.om$core$IDisplayName$ = true;

stepwise.app.t_stepwise$app20613.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__12100__auto__,ufv___20620,output_schema20603_20621,input_schema20604_20622,input_checker20605_20623,output_checker20606_20624){
return (function (_){
var self__ = this;
var ___$1 = this;
return "atom*";
});})(validate__12100__auto__,ufv___20620,output_schema20603_20621,input_schema20604_20622,input_checker20605_20623,output_checker20606_20624))
;

stepwise.app.t_stepwise$app20613.prototype.om$core$IRender$ = true;

stepwise.app.t_stepwise$app20613.prototype.om$core$IRender$render$arity$1 = ((function (validate__12100__auto__,ufv___20620,output_schema20603_20621,input_schema20604_20622,input_checker20605_20623,output_checker20606_20624){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": om_tools.dom.format_opts((function (){var G__20616 = [cljs.core.str("atom "),cljs.core.str(cljs.core.name(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(self__.form)))].join('');
var G__20616__$1 = (cljs.core.truth_(cljs.core.cst$kw$selected_QMARK_.cljs$core$IFn$_invoke$arity$1(self__.form))?[cljs.core.str(G__20616),cljs.core.str(" selected")].join(''):G__20616);
if(cljs.core.truth_(cljs.core.cst$kw$head_QMARK_.cljs$core$IFn$_invoke$arity$1(self__.form))){
return [cljs.core.str(G__20616__$1),cljs.core.str(" head")].join('');
} else {
return G__20616__$1;
}
})())},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element(React.DOM.span,cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(self__.form),cljs.core.PersistentVector.EMPTY)],null))));
});})(validate__12100__auto__,ufv___20620,output_schema20603_20621,input_schema20604_20622,input_checker20605_20623,output_checker20606_20624))
;

stepwise.app.t_stepwise$app20613.getBasis = ((function (validate__12100__auto__,ufv___20620,output_schema20603_20621,input_schema20604_20622,input_checker20605_20623,output_checker20606_20624){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$owner,cljs.core.cst$sym$output_DASH_schema20603,cljs.core.cst$sym$input_DASH_schema20604,cljs.core.cst$sym$output_DASH_checker20606,cljs.core.with_meta(cljs.core.cst$sym$G__20607,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_checker20605,cljs.core.with_meta(cljs.core.cst$sym$G__20608,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$ufv__,cljs.core.with_meta(cljs.core.cst$sym$atom_STAR_,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema20603,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema20604], null)),cljs.core.cst$kw$doc,"Inputs: [form owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$validate__12100__auto__,cljs.core.cst$sym$meta20614], null);
});})(validate__12100__auto__,ufv___20620,output_schema20603_20621,input_schema20604_20622,input_checker20605_20623,output_checker20606_20624))
;

stepwise.app.t_stepwise$app20613.cljs$lang$type = true;

stepwise.app.t_stepwise$app20613.cljs$lang$ctorStr = "stepwise.app/t_stepwise$app20613";

stepwise.app.t_stepwise$app20613.cljs$lang$ctorPrWriter = ((function (validate__12100__auto__,ufv___20620,output_schema20603_20621,input_schema20604_20622,input_checker20605_20623,output_checker20606_20624){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"stepwise.app/t_stepwise$app20613");
});})(validate__12100__auto__,ufv___20620,output_schema20603_20621,input_schema20604_20622,input_checker20605_20623,output_checker20606_20624))
;

stepwise.app.__GT_t_stepwise$app20613 = ((function (validate__12100__auto__,ufv___20620,output_schema20603_20621,input_schema20604_20622,input_checker20605_20623,output_checker20606_20624){
return (function stepwise$app$atom_STAR__$___GT_t_stepwise$app20613(form__$1,owner__$1,output_schema20603__$1,input_schema20604__$1,output_checker20606__$1,G__20607__$1,input_checker20605__$1,G__20608__$1,ufv____$1,atom_STAR___$1,validate__12100__auto____$1,meta20614){
return (new stepwise.app.t_stepwise$app20613(form__$1,owner__$1,output_schema20603__$1,input_schema20604__$1,output_checker20606__$1,G__20607__$1,input_checker20605__$1,G__20608__$1,ufv____$1,atom_STAR___$1,validate__12100__auto____$1,meta20614));
});})(validate__12100__auto__,ufv___20620,output_schema20603_20621,input_schema20604_20622,input_checker20605_20623,output_checker20606_20624))
;

}

return (new stepwise.app.t_stepwise$app20613(form,owner,output_schema20603_20621,input_schema20604_20622,output_checker20606_20624,G__20607,input_checker20605_20623,G__20608,ufv___20620,stepwise$app$atom_STAR_,validate__12100__auto__,null));
break;
}
})();
if(cljs.core.truth_(validate__12100__auto__)){
var temp__4657__auto___20628 = (output_checker20606_20624.cljs$core$IFn$_invoke$arity$1 ? output_checker20606_20624.cljs$core$IFn$_invoke$arity$1(o__12103__auto__) : output_checker20606_20624.call(null,o__12103__auto__));
if(cljs.core.truth_(temp__4657__auto___20628)){
var error__12102__auto___20629 = temp__4657__auto___20628;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$atom_STAR_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12102__auto___20629], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema20603_20621,cljs.core.cst$kw$value,o__12103__auto__,cljs.core.cst$kw$error,error__12102__auto___20629], null));
} else {
}
} else {
}

return o__12103__auto__;
});})(ufv___20620,output_schema20603_20621,input_schema20604_20622,input_checker20605_20623,output_checker20606_20624))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(stepwise.app.atom_STAR_),schema.core.make_fn_schema(output_schema20603_20621,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20604_20622], null)));

stepwise.app.__GT_atom_STAR_ = (function stepwise$app$__GT_atom_STAR_(var_args){
var args20617 = [];
var len__7214__auto___20630 = arguments.length;
var i__7215__auto___20631 = (0);
while(true){
if((i__7215__auto___20631 < len__7214__auto___20630)){
args20617.push((arguments[i__7215__auto___20631]));

var G__20632 = (i__7215__auto___20631 + (1));
i__7215__auto___20631 = G__20632;
continue;
} else {
}
break;
}

var G__20619 = args20617.length;
switch (G__20619) {
case 1:
return stepwise.app.__GT_atom_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stepwise.app.__GT_atom_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20617.length)].join('')));

}
});

stepwise.app.__GT_atom_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__20546__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(stepwise.app.atom_STAR_,cursor__20546__auto__);
});

stepwise.app.__GT_atom_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__20546__auto__,m20602){
return om.core.build.cljs$core$IFn$_invoke$arity$3(stepwise.app.atom_STAR_,cursor__20546__auto__,m20602);
});

stepwise.app.__GT_atom_STAR_.cljs$lang$maxFixedArity = 2;

var ufv___20653 = schema.utils.use_fn_validation;
var output_schema20636_20654 = schema.core.Any;
var input_schema20637_20655 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker20638_20656 = schema.core.checker(input_schema20637_20655);
var output_checker20639_20657 = schema.core.checker(output_schema20636_20654);
/**
 * Inputs: [form owner]
 */
stepwise.app.stringlike = ((function (ufv___20653,output_schema20636_20654,input_schema20637_20655,input_checker20638_20656,output_checker20639_20657){
return (function stepwise$app$stringlike(G__20640,G__20641){
var validate__12100__auto__ = ufv___20653.get_cell();
if(cljs.core.truth_(validate__12100__auto__)){
var args__12101__auto___20658 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20640,G__20641], null);
var temp__4657__auto___20659 = (input_checker20638_20656.cljs$core$IFn$_invoke$arity$1 ? input_checker20638_20656.cljs$core$IFn$_invoke$arity$1(args__12101__auto___20658) : input_checker20638_20656.call(null,args__12101__auto___20658));
if(cljs.core.truth_(temp__4657__auto___20659)){
var error__12102__auto___20660 = temp__4657__auto___20659;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$stringlike,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12102__auto___20660], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema20637_20655,cljs.core.cst$kw$value,args__12101__auto___20658,cljs.core.cst$kw$error,error__12102__auto___20660], null));
} else {
}
} else {
}

var o__12103__auto__ = (function (){var form = G__20640;
var owner = G__20641;
while(true){
if(typeof stepwise.app.t_stepwise$app20646 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
stepwise.app.t_stepwise$app20646 = (function (form,input_checker20638,G__20640,owner,input_schema20637,stringlike,output_schema20636,G__20641,output_checker20639,ufv__,validate__12100__auto__,meta20647){
this.form = form;
this.input_checker20638 = input_checker20638;
this.G__20640 = G__20640;
this.owner = owner;
this.input_schema20637 = input_schema20637;
this.stringlike = stringlike;
this.output_schema20636 = output_schema20636;
this.G__20641 = G__20641;
this.output_checker20639 = output_checker20639;
this.ufv__ = ufv__;
this.validate__12100__auto__ = validate__12100__auto__;
this.meta20647 = meta20647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
stepwise.app.t_stepwise$app20646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__12100__auto__,ufv___20653,output_schema20636_20654,input_schema20637_20655,input_checker20638_20656,output_checker20639_20657){
return (function (_20648,meta20647__$1){
var self__ = this;
var _20648__$1 = this;
return (new stepwise.app.t_stepwise$app20646(self__.form,self__.input_checker20638,self__.G__20640,self__.owner,self__.input_schema20637,self__.stringlike,self__.output_schema20636,self__.G__20641,self__.output_checker20639,self__.ufv__,self__.validate__12100__auto__,meta20647__$1));
});})(validate__12100__auto__,ufv___20653,output_schema20636_20654,input_schema20637_20655,input_checker20638_20656,output_checker20639_20657))
;

stepwise.app.t_stepwise$app20646.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__12100__auto__,ufv___20653,output_schema20636_20654,input_schema20637_20655,input_checker20638_20656,output_checker20639_20657){
return (function (_20648){
var self__ = this;
var _20648__$1 = this;
return self__.meta20647;
});})(validate__12100__auto__,ufv___20653,output_schema20636_20654,input_schema20637_20655,input_checker20638_20656,output_checker20639_20657))
;

stepwise.app.t_stepwise$app20646.prototype.om$core$IDisplayName$ = true;

stepwise.app.t_stepwise$app20646.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__12100__auto__,ufv___20653,output_schema20636_20654,input_schema20637_20655,input_checker20638_20656,output_checker20639_20657){
return (function (_){
var self__ = this;
var ___$1 = this;
return "stringlike";
});})(validate__12100__auto__,ufv___20653,output_schema20636_20654,input_schema20637_20655,input_checker20638_20656,output_checker20639_20657))
;

stepwise.app.t_stepwise$app20646.prototype.om$core$IRender$ = true;

stepwise.app.t_stepwise$app20646.prototype.om$core$IRender$render$arity$1 = ((function (validate__12100__auto__,ufv___20653,output_schema20636_20654,input_schema20637_20655,input_checker20638_20656,output_checker20639_20657){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": om_tools.dom.format_opts((function (){var G__20649 = [cljs.core.str("stringlike "),cljs.core.str(cljs.core.name(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(self__.form)))].join('');
if(cljs.core.truth_(cljs.core.cst$kw$selected_QMARK_.cljs$core$IFn$_invoke$arity$1(self__.form))){
return [cljs.core.str(G__20649),cljs.core.str(" selected")].join('');
} else {
return G__20649;
}
})()), "style": {"maxWidth": om_tools.dom.format_opts([cljs.core.str((cljs.core.cst$kw$max_DASH_width.cljs$core$IFn$_invoke$arity$1(self__.form) / (2))),cljs.core.str("rem")].join(''))}},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (___$1,validate__12100__auto__,ufv___20653,output_schema20636_20654,input_schema20637_20655,input_checker20638_20656,output_checker20639_20657){
return (function (p1__20634_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,{"className": "char"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__20634_SHARP_],null))));
});})(___$1,validate__12100__auto__,ufv___20653,output_schema20636_20654,input_schema20637_20655,input_checker20638_20656,output_checker20639_20657))
,cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(self__.form))],null))));
});})(validate__12100__auto__,ufv___20653,output_schema20636_20654,input_schema20637_20655,input_checker20638_20656,output_checker20639_20657))
;

stepwise.app.t_stepwise$app20646.getBasis = ((function (validate__12100__auto__,ufv___20653,output_schema20636_20654,input_schema20637_20655,input_checker20638_20656,output_checker20639_20657){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$input_DASH_checker20638,cljs.core.with_meta(cljs.core.cst$sym$G__20640,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$owner,cljs.core.cst$sym$input_DASH_schema20637,cljs.core.with_meta(cljs.core.cst$sym$stringlike,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema20636,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema20637], null)),cljs.core.cst$kw$doc,"Inputs: [form owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$output_DASH_schema20636,cljs.core.with_meta(cljs.core.cst$sym$G__20641,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$output_DASH_checker20639,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$validate__12100__auto__,cljs.core.cst$sym$meta20647], null);
});})(validate__12100__auto__,ufv___20653,output_schema20636_20654,input_schema20637_20655,input_checker20638_20656,output_checker20639_20657))
;

stepwise.app.t_stepwise$app20646.cljs$lang$type = true;

stepwise.app.t_stepwise$app20646.cljs$lang$ctorStr = "stepwise.app/t_stepwise$app20646";

stepwise.app.t_stepwise$app20646.cljs$lang$ctorPrWriter = ((function (validate__12100__auto__,ufv___20653,output_schema20636_20654,input_schema20637_20655,input_checker20638_20656,output_checker20639_20657){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"stepwise.app/t_stepwise$app20646");
});})(validate__12100__auto__,ufv___20653,output_schema20636_20654,input_schema20637_20655,input_checker20638_20656,output_checker20639_20657))
;

stepwise.app.__GT_t_stepwise$app20646 = ((function (validate__12100__auto__,ufv___20653,output_schema20636_20654,input_schema20637_20655,input_checker20638_20656,output_checker20639_20657){
return (function stepwise$app$stringlike_$___GT_t_stepwise$app20646(form__$1,input_checker20638__$1,G__20640__$1,owner__$1,input_schema20637__$1,stringlike__$1,output_schema20636__$1,G__20641__$1,output_checker20639__$1,ufv____$1,validate__12100__auto____$1,meta20647){
return (new stepwise.app.t_stepwise$app20646(form__$1,input_checker20638__$1,G__20640__$1,owner__$1,input_schema20637__$1,stringlike__$1,output_schema20636__$1,G__20641__$1,output_checker20639__$1,ufv____$1,validate__12100__auto____$1,meta20647));
});})(validate__12100__auto__,ufv___20653,output_schema20636_20654,input_schema20637_20655,input_checker20638_20656,output_checker20639_20657))
;

}

return (new stepwise.app.t_stepwise$app20646(form,input_checker20638_20656,G__20640,owner,input_schema20637_20655,stepwise$app$stringlike,output_schema20636_20654,G__20641,output_checker20639_20657,ufv___20653,validate__12100__auto__,null));
break;
}
})();
if(cljs.core.truth_(validate__12100__auto__)){
var temp__4657__auto___20661 = (output_checker20639_20657.cljs$core$IFn$_invoke$arity$1 ? output_checker20639_20657.cljs$core$IFn$_invoke$arity$1(o__12103__auto__) : output_checker20639_20657.call(null,o__12103__auto__));
if(cljs.core.truth_(temp__4657__auto___20661)){
var error__12102__auto___20662 = temp__4657__auto___20661;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$stringlike,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12102__auto___20662], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema20636_20654,cljs.core.cst$kw$value,o__12103__auto__,cljs.core.cst$kw$error,error__12102__auto___20662], null));
} else {
}
} else {
}

return o__12103__auto__;
});})(ufv___20653,output_schema20636_20654,input_schema20637_20655,input_checker20638_20656,output_checker20639_20657))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(stepwise.app.stringlike),schema.core.make_fn_schema(output_schema20636_20654,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20637_20655], null)));

stepwise.app.__GT_stringlike = (function stepwise$app$__GT_stringlike(var_args){
var args20650 = [];
var len__7214__auto___20663 = arguments.length;
var i__7215__auto___20664 = (0);
while(true){
if((i__7215__auto___20664 < len__7214__auto___20663)){
args20650.push((arguments[i__7215__auto___20664]));

var G__20665 = (i__7215__auto___20664 + (1));
i__7215__auto___20664 = G__20665;
continue;
} else {
}
break;
}

var G__20652 = args20650.length;
switch (G__20652) {
case 1:
return stepwise.app.__GT_stringlike.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stepwise.app.__GT_stringlike.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20650.length)].join('')));

}
});

stepwise.app.__GT_stringlike.cljs$core$IFn$_invoke$arity$1 = (function (cursor__20546__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(stepwise.app.stringlike,cursor__20546__auto__);
});

stepwise.app.__GT_stringlike.cljs$core$IFn$_invoke$arity$2 = (function (cursor__20546__auto__,m20635){
return om.core.build.cljs$core$IFn$_invoke$arity$3(stepwise.app.stringlike,cursor__20546__auto__,m20635);
});

stepwise.app.__GT_stringlike.cljs$lang$maxFixedArity = 2;

var ufv___20683 = schema.utils.use_fn_validation;
var output_schema20668_20684 = schema.core.Any;
var input_schema20669_20685 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$token,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker20670_20686 = schema.core.checker(input_schema20669_20685);
var output_checker20671_20687 = schema.core.checker(output_schema20668_20684);
/**
 * Inputs: [token owner]
 */
stepwise.app.delimiter = ((function (ufv___20683,output_schema20668_20684,input_schema20669_20685,input_checker20670_20686,output_checker20671_20687){
return (function stepwise$app$delimiter(G__20672,G__20673){
var validate__12100__auto__ = ufv___20683.get_cell();
if(cljs.core.truth_(validate__12100__auto__)){
var args__12101__auto___20688 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20672,G__20673], null);
var temp__4657__auto___20689 = (input_checker20670_20686.cljs$core$IFn$_invoke$arity$1 ? input_checker20670_20686.cljs$core$IFn$_invoke$arity$1(args__12101__auto___20688) : input_checker20670_20686.call(null,args__12101__auto___20688));
if(cljs.core.truth_(temp__4657__auto___20689)){
var error__12102__auto___20690 = temp__4657__auto___20689;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$delimiter,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12102__auto___20690], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema20669_20685,cljs.core.cst$kw$value,args__12101__auto___20688,cljs.core.cst$kw$error,error__12102__auto___20690], null));
} else {
}
} else {
}

var o__12103__auto__ = (function (){var token = G__20672;
var owner = G__20673;
while(true){
if(typeof stepwise.app.t_stepwise$app20677 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
stepwise.app.t_stepwise$app20677 = (function (owner,output_checker20671,input_schema20669,input_checker20670,G__20673,delimiter,token,G__20672,ufv__,output_schema20668,validate__12100__auto__,meta20678){
this.owner = owner;
this.output_checker20671 = output_checker20671;
this.input_schema20669 = input_schema20669;
this.input_checker20670 = input_checker20670;
this.G__20673 = G__20673;
this.delimiter = delimiter;
this.token = token;
this.G__20672 = G__20672;
this.ufv__ = ufv__;
this.output_schema20668 = output_schema20668;
this.validate__12100__auto__ = validate__12100__auto__;
this.meta20678 = meta20678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
stepwise.app.t_stepwise$app20677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__12100__auto__,ufv___20683,output_schema20668_20684,input_schema20669_20685,input_checker20670_20686,output_checker20671_20687){
return (function (_20679,meta20678__$1){
var self__ = this;
var _20679__$1 = this;
return (new stepwise.app.t_stepwise$app20677(self__.owner,self__.output_checker20671,self__.input_schema20669,self__.input_checker20670,self__.G__20673,self__.delimiter,self__.token,self__.G__20672,self__.ufv__,self__.output_schema20668,self__.validate__12100__auto__,meta20678__$1));
});})(validate__12100__auto__,ufv___20683,output_schema20668_20684,input_schema20669_20685,input_checker20670_20686,output_checker20671_20687))
;

stepwise.app.t_stepwise$app20677.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__12100__auto__,ufv___20683,output_schema20668_20684,input_schema20669_20685,input_checker20670_20686,output_checker20671_20687){
return (function (_20679){
var self__ = this;
var _20679__$1 = this;
return self__.meta20678;
});})(validate__12100__auto__,ufv___20683,output_schema20668_20684,input_schema20669_20685,input_checker20670_20686,output_checker20671_20687))
;

stepwise.app.t_stepwise$app20677.prototype.om$core$IDisplayName$ = true;

stepwise.app.t_stepwise$app20677.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__12100__auto__,ufv___20683,output_schema20668_20684,input_schema20669_20685,input_checker20670_20686,output_checker20671_20687){
return (function (_){
var self__ = this;
var ___$1 = this;
return "delimiter";
});})(validate__12100__auto__,ufv___20683,output_schema20668_20684,input_schema20669_20685,input_checker20670_20686,output_checker20671_20687))
;

stepwise.app.t_stepwise$app20677.prototype.om$core$IRender$ = true;

stepwise.app.t_stepwise$app20677.prototype.om$core$IRender$render$arity$1 = ((function (validate__12100__auto__,ufv___20683,output_schema20668_20684,input_schema20669_20685,input_checker20670_20686,output_checker20671_20687){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,{"className": om_tools.dom.format_opts(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.cst$kw$classes.cljs$core$IFn$_invoke$arity$1(self__.token))))},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(self__.token)],null))));
});})(validate__12100__auto__,ufv___20683,output_schema20668_20684,input_schema20669_20685,input_checker20670_20686,output_checker20671_20687))
;

stepwise.app.t_stepwise$app20677.getBasis = ((function (validate__12100__auto__,ufv___20683,output_schema20668_20684,input_schema20669_20685,input_checker20670_20686,output_checker20671_20687){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$owner,cljs.core.cst$sym$output_DASH_checker20671,cljs.core.cst$sym$input_DASH_schema20669,cljs.core.cst$sym$input_DASH_checker20670,cljs.core.with_meta(cljs.core.cst$sym$G__20673,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$delimiter,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$token,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema20668,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema20669], null)),cljs.core.cst$kw$doc,"Inputs: [token owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$token,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$token,cljs.core.with_meta(cljs.core.cst$sym$G__20672,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$ufv__,cljs.core.cst$sym$output_DASH_schema20668,cljs.core.cst$sym$validate__12100__auto__,cljs.core.cst$sym$meta20678], null);
});})(validate__12100__auto__,ufv___20683,output_schema20668_20684,input_schema20669_20685,input_checker20670_20686,output_checker20671_20687))
;

stepwise.app.t_stepwise$app20677.cljs$lang$type = true;

stepwise.app.t_stepwise$app20677.cljs$lang$ctorStr = "stepwise.app/t_stepwise$app20677";

stepwise.app.t_stepwise$app20677.cljs$lang$ctorPrWriter = ((function (validate__12100__auto__,ufv___20683,output_schema20668_20684,input_schema20669_20685,input_checker20670_20686,output_checker20671_20687){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"stepwise.app/t_stepwise$app20677");
});})(validate__12100__auto__,ufv___20683,output_schema20668_20684,input_schema20669_20685,input_checker20670_20686,output_checker20671_20687))
;

stepwise.app.__GT_t_stepwise$app20677 = ((function (validate__12100__auto__,ufv___20683,output_schema20668_20684,input_schema20669_20685,input_checker20670_20686,output_checker20671_20687){
return (function stepwise$app$delimiter_$___GT_t_stepwise$app20677(owner__$1,output_checker20671__$1,input_schema20669__$1,input_checker20670__$1,G__20673__$1,delimiter__$1,token__$1,G__20672__$1,ufv____$1,output_schema20668__$1,validate__12100__auto____$1,meta20678){
return (new stepwise.app.t_stepwise$app20677(owner__$1,output_checker20671__$1,input_schema20669__$1,input_checker20670__$1,G__20673__$1,delimiter__$1,token__$1,G__20672__$1,ufv____$1,output_schema20668__$1,validate__12100__auto____$1,meta20678));
});})(validate__12100__auto__,ufv___20683,output_schema20668_20684,input_schema20669_20685,input_checker20670_20686,output_checker20671_20687))
;

}

return (new stepwise.app.t_stepwise$app20677(owner,output_checker20671_20687,input_schema20669_20685,input_checker20670_20686,G__20673,stepwise$app$delimiter,token,G__20672,ufv___20683,output_schema20668_20684,validate__12100__auto__,null));
break;
}
})();
if(cljs.core.truth_(validate__12100__auto__)){
var temp__4657__auto___20691 = (output_checker20671_20687.cljs$core$IFn$_invoke$arity$1 ? output_checker20671_20687.cljs$core$IFn$_invoke$arity$1(o__12103__auto__) : output_checker20671_20687.call(null,o__12103__auto__));
if(cljs.core.truth_(temp__4657__auto___20691)){
var error__12102__auto___20692 = temp__4657__auto___20691;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$delimiter,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12102__auto___20692], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema20668_20684,cljs.core.cst$kw$value,o__12103__auto__,cljs.core.cst$kw$error,error__12102__auto___20692], null));
} else {
}
} else {
}

return o__12103__auto__;
});})(ufv___20683,output_schema20668_20684,input_schema20669_20685,input_checker20670_20686,output_checker20671_20687))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(stepwise.app.delimiter),schema.core.make_fn_schema(output_schema20668_20684,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20669_20685], null)));

stepwise.app.__GT_delimiter = (function stepwise$app$__GT_delimiter(var_args){
var args20680 = [];
var len__7214__auto___20693 = arguments.length;
var i__7215__auto___20694 = (0);
while(true){
if((i__7215__auto___20694 < len__7214__auto___20693)){
args20680.push((arguments[i__7215__auto___20694]));

var G__20695 = (i__7215__auto___20694 + (1));
i__7215__auto___20694 = G__20695;
continue;
} else {
}
break;
}

var G__20682 = args20680.length;
switch (G__20682) {
case 1:
return stepwise.app.__GT_delimiter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stepwise.app.__GT_delimiter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20680.length)].join('')));

}
});

stepwise.app.__GT_delimiter.cljs$core$IFn$_invoke$arity$1 = (function (cursor__20546__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(stepwise.app.delimiter,cursor__20546__auto__);
});

stepwise.app.__GT_delimiter.cljs$core$IFn$_invoke$arity$2 = (function (cursor__20546__auto__,m20667){
return om.core.build.cljs$core$IFn$_invoke$arity$3(stepwise.app.delimiter,cursor__20546__auto__,m20667);
});

stepwise.app.__GT_delimiter.cljs$lang$maxFixedArity = 2;

var ufv___20871 = schema.utils.use_fn_validation;
var output_schema20700_20872 = schema.core.Any;
var input_schema20701_20873 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker20702_20874 = schema.core.checker(input_schema20701_20873);
var output_checker20703_20875 = schema.core.checker(output_schema20700_20872);
/**
 * Inputs: [form owner]
 */
stepwise.app.top_level_form = ((function (ufv___20871,output_schema20700_20872,input_schema20701_20873,input_checker20702_20874,output_checker20703_20875){
return (function stepwise$app$top_level_form(G__20704,G__20705){
var validate__12100__auto__ = ufv___20871.get_cell();
if(cljs.core.truth_(validate__12100__auto__)){
var args__12101__auto___20876 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20704,G__20705], null);
var temp__4657__auto___20877 = (input_checker20702_20874.cljs$core$IFn$_invoke$arity$1 ? input_checker20702_20874.cljs$core$IFn$_invoke$arity$1(args__12101__auto___20876) : input_checker20702_20874.call(null,args__12101__auto___20876));
if(cljs.core.truth_(temp__4657__auto___20877)){
var error__12102__auto___20878 = temp__4657__auto___20877;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$top_DASH_level_DASH_form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12102__auto___20878], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema20701_20873,cljs.core.cst$kw$value,args__12101__auto___20876,cljs.core.cst$kw$error,error__12102__auto___20878], null));
} else {
}
} else {
}

var o__12103__auto__ = (function (){var form = G__20704;
var owner = G__20705;
while(true){
if(typeof stepwise.app.t_stepwise$app20787 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
stepwise.app.t_stepwise$app20787 = (function (form,output_schema20700,owner,input_schema20701,G__20705,input_checker20702,output_checker20703,top_level_form,G__20704,ufv__,validate__12100__auto__,meta20788){
this.form = form;
this.output_schema20700 = output_schema20700;
this.owner = owner;
this.input_schema20701 = input_schema20701;
this.G__20705 = G__20705;
this.input_checker20702 = input_checker20702;
this.output_checker20703 = output_checker20703;
this.top_level_form = top_level_form;
this.G__20704 = G__20704;
this.ufv__ = ufv__;
this.validate__12100__auto__ = validate__12100__auto__;
this.meta20788 = meta20788;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
stepwise.app.t_stepwise$app20787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__12100__auto__,ufv___20871,output_schema20700_20872,input_schema20701_20873,input_checker20702_20874,output_checker20703_20875){
return (function (_20789,meta20788__$1){
var self__ = this;
var _20789__$1 = this;
return (new stepwise.app.t_stepwise$app20787(self__.form,self__.output_schema20700,self__.owner,self__.input_schema20701,self__.G__20705,self__.input_checker20702,self__.output_checker20703,self__.top_level_form,self__.G__20704,self__.ufv__,self__.validate__12100__auto__,meta20788__$1));
});})(validate__12100__auto__,ufv___20871,output_schema20700_20872,input_schema20701_20873,input_checker20702_20874,output_checker20703_20875))
;

stepwise.app.t_stepwise$app20787.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__12100__auto__,ufv___20871,output_schema20700_20872,input_schema20701_20873,input_checker20702_20874,output_checker20703_20875){
return (function (_20789){
var self__ = this;
var _20789__$1 = this;
return self__.meta20788;
});})(validate__12100__auto__,ufv___20871,output_schema20700_20872,input_schema20701_20873,input_checker20702_20874,output_checker20703_20875))
;

stepwise.app.t_stepwise$app20787.prototype.om$core$IDisplayName$ = true;

stepwise.app.t_stepwise$app20787.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__12100__auto__,ufv___20871,output_schema20700_20872,input_schema20701_20873,input_checker20702_20874,output_checker20703_20875){
return (function (_){
var self__ = this;
var ___$1 = this;
return "top-level-form";
});})(validate__12100__auto__,ufv___20871,output_schema20700_20872,input_schema20701_20873,input_checker20702_20874,output_checker20703_20875))
;

stepwise.app.t_stepwise$app20787.prototype.om$core$IRender$ = true;

stepwise.app.t_stepwise$app20787.prototype.om$core$IRender$render$arity$1 = ((function (validate__12100__auto__,ufv___20871,output_schema20700_20872,input_schema20701_20873,input_checker20702_20874,output_checker20703_20875){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": "toplevel"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__6928__auto__ = ((function (___$1,validate__12100__auto__,ufv___20871,output_schema20700_20872,input_schema20701_20873,input_checker20702_20874,output_checker20703_20875){
return (function stepwise$app$top_level_form_$_iter__20790(s__20791){
return (new cljs.core.LazySeq(null,((function (___$1,validate__12100__auto__,ufv___20871,output_schema20700_20872,input_schema20701_20873,input_checker20702_20874,output_checker20703_20875){
return (function (){
var s__20791__$1 = s__20791;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__20791__$1);
if(temp__4657__auto__){
var s__20791__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20791__$2)){
var c__6926__auto__ = cljs.core.chunk_first(s__20791__$2);
var size__6927__auto__ = cljs.core.count(c__6926__auto__);
var b__20793 = cljs.core.chunk_buffer(size__6927__auto__);
if((function (){var i__20792 = (0);
while(true){
if((i__20792 < size__6927__auto__)){
var line = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6926__auto__,i__20792);
cljs.core.chunk_append(b__20793,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": "line"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__6928__auto__ = ((function (i__20792,line,c__6926__auto__,size__6927__auto__,b__20793,s__20791__$2,temp__4657__auto__,___$1,validate__12100__auto__,ufv___20871,output_schema20700_20872,input_schema20701_20873,input_checker20702_20874,output_checker20703_20875){
return (function stepwise$app$top_level_form_$_iter__20790_$_iter__20832(s__20833){
return (new cljs.core.LazySeq(null,((function (i__20792,line,c__6926__auto__,size__6927__auto__,b__20793,s__20791__$2,temp__4657__auto__,___$1,validate__12100__auto__,ufv___20871,output_schema20700_20872,input_schema20701_20873,input_checker20702_20874,output_checker20703_20875){
return (function (){
var s__20833__$1 = s__20833;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__20833__$1);
if(temp__4657__auto____$1){
var s__20833__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20833__$2)){
var c__6926__auto____$1 = cljs.core.chunk_first(s__20833__$2);
var size__6927__auto____$1 = cljs.core.count(c__6926__auto____$1);
var b__20835 = cljs.core.chunk_buffer(size__6927__auto____$1);
if((function (){var i__20834 = (0);
while(true){
if((i__20834 < size__6927__auto____$1)){
var token = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6926__auto____$1,i__20834);
cljs.core.chunk_append(b__20835,(function (){var pred__20844 = ((function (i__20834,i__20792,token,c__6926__auto____$1,size__6927__auto____$1,b__20835,s__20833__$2,temp__4657__auto____$1,line,c__6926__auto__,size__6927__auto__,b__20793,s__20791__$2,temp__4657__auto__,___$1,validate__12100__auto__,ufv___20871,output_schema20700_20872,input_schema20701_20873,input_checker20702_20874,output_checker20703_20875){
return (function (p1__20697_SHARP_,p2__20698_SHARP_){
return (p1__20697_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__20697_SHARP_.cljs$core$IFn$_invoke$arity$1(p2__20698_SHARP_) : p1__20697_SHARP_.call(null,p2__20698_SHARP_));
});})(i__20834,i__20792,token,c__6926__auto____$1,size__6927__auto____$1,b__20835,s__20833__$2,temp__4657__auto____$1,line,c__6926__auto__,size__6927__auto__,b__20793,s__20791__$2,temp__4657__auto__,___$1,validate__12100__auto__,ufv___20871,output_schema20700_20872,input_schema20701_20873,input_checker20702_20874,output_checker20703_20875))
;
var expr__20845 = token;
if(cljs.core.truth_(pred__20844(stepwise.layout.spacer_QMARK_,expr__20845))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,{"className": "spacer"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(token)],null))));
} else {
if(cljs.core.truth_(pred__20844(stepwise.layout.delimiter_QMARK_,expr__20845))){
return om.core.build.cljs$core$IFn$_invoke$arity$2(stepwise.app.delimiter,token);
} else {
if(cljs.core.truth_(pred__20844(stepwise.model.stringlike_QMARK_,expr__20845))){
return om.core.build.cljs$core$IFn$_invoke$arity$2(stepwise.app.stringlike,token);
} else {
return om.core.build.cljs$core$IFn$_invoke$arity$2(stepwise.app.atom_STAR_,token);
}
}
}
})());

var G__20879 = (i__20834 + (1));
i__20834 = G__20879;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20835),stepwise$app$top_level_form_$_iter__20790_$_iter__20832(cljs.core.chunk_rest(s__20833__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20835),null);
}
} else {
var token = cljs.core.first(s__20833__$2);
return cljs.core.cons((function (){var pred__20847 = ((function (i__20792,token,s__20833__$2,temp__4657__auto____$1,line,c__6926__auto__,size__6927__auto__,b__20793,s__20791__$2,temp__4657__auto__,___$1,validate__12100__auto__,ufv___20871,output_schema20700_20872,input_schema20701_20873,input_checker20702_20874,output_checker20703_20875){
return (function (p1__20697_SHARP_,p2__20698_SHARP_){
return (p1__20697_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__20697_SHARP_.cljs$core$IFn$_invoke$arity$1(p2__20698_SHARP_) : p1__20697_SHARP_.call(null,p2__20698_SHARP_));
});})(i__20792,token,s__20833__$2,temp__4657__auto____$1,line,c__6926__auto__,size__6927__auto__,b__20793,s__20791__$2,temp__4657__auto__,___$1,validate__12100__auto__,ufv___20871,output_schema20700_20872,input_schema20701_20873,input_checker20702_20874,output_checker20703_20875))
;
var expr__20848 = token;
if(cljs.core.truth_(pred__20847(stepwise.layout.spacer_QMARK_,expr__20848))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,{"className": "spacer"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(token)],null))));
} else {
if(cljs.core.truth_(pred__20847(stepwise.layout.delimiter_QMARK_,expr__20848))){
return om.core.build.cljs$core$IFn$_invoke$arity$2(stepwise.app.delimiter,token);
} else {
if(cljs.core.truth_(pred__20847(stepwise.model.stringlike_QMARK_,expr__20848))){
return om.core.build.cljs$core$IFn$_invoke$arity$2(stepwise.app.stringlike,token);
} else {
return om.core.build.cljs$core$IFn$_invoke$arity$2(stepwise.app.atom_STAR_,token);
}
}
}
})(),stepwise$app$top_level_form_$_iter__20790_$_iter__20832(cljs.core.rest(s__20833__$2)));
}
} else {
return null;
}
break;
}
});})(i__20792,line,c__6926__auto__,size__6927__auto__,b__20793,s__20791__$2,temp__4657__auto__,___$1,validate__12100__auto__,ufv___20871,output_schema20700_20872,input_schema20701_20873,input_checker20702_20874,output_checker20703_20875))
,null,null));
});})(i__20792,line,c__6926__auto__,size__6927__auto__,b__20793,s__20791__$2,temp__4657__auto__,___$1,validate__12100__auto__,ufv___20871,output_schema20700_20872,input_schema20701_20873,input_checker20702_20874,output_checker20703_20875))
;
return iter__6928__auto__(line);
})()],null)))));

var G__20880 = (i__20792 + (1));
i__20792 = G__20880;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20793),stepwise$app$top_level_form_$_iter__20790(cljs.core.chunk_rest(s__20791__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20793),null);
}
} else {
var line = cljs.core.first(s__20791__$2);
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": "line"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__6928__auto__ = ((function (line,s__20791__$2,temp__4657__auto__,___$1,validate__12100__auto__,ufv___20871,output_schema20700_20872,input_schema20701_20873,input_checker20702_20874,output_checker20703_20875){
return (function stepwise$app$top_level_form_$_iter__20790_$_iter__20850(s__20851){
return (new cljs.core.LazySeq(null,((function (line,s__20791__$2,temp__4657__auto__,___$1,validate__12100__auto__,ufv___20871,output_schema20700_20872,input_schema20701_20873,input_checker20702_20874,output_checker20703_20875){
return (function (){
var s__20851__$1 = s__20851;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__20851__$1);
if(temp__4657__auto____$1){
var s__20851__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20851__$2)){
var c__6926__auto__ = cljs.core.chunk_first(s__20851__$2);
var size__6927__auto__ = cljs.core.count(c__6926__auto__);
var b__20853 = cljs.core.chunk_buffer(size__6927__auto__);
if((function (){var i__20852 = (0);
while(true){
if((i__20852 < size__6927__auto__)){
var token = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6926__auto__,i__20852);
cljs.core.chunk_append(b__20853,(function (){var pred__20862 = ((function (i__20852,token,c__6926__auto__,size__6927__auto__,b__20853,s__20851__$2,temp__4657__auto____$1,line,s__20791__$2,temp__4657__auto__,___$1,validate__12100__auto__,ufv___20871,output_schema20700_20872,input_schema20701_20873,input_checker20702_20874,output_checker20703_20875){
return (function (p1__20697_SHARP_,p2__20698_SHARP_){
return (p1__20697_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__20697_SHARP_.cljs$core$IFn$_invoke$arity$1(p2__20698_SHARP_) : p1__20697_SHARP_.call(null,p2__20698_SHARP_));
});})(i__20852,token,c__6926__auto__,size__6927__auto__,b__20853,s__20851__$2,temp__4657__auto____$1,line,s__20791__$2,temp__4657__auto__,___$1,validate__12100__auto__,ufv___20871,output_schema20700_20872,input_schema20701_20873,input_checker20702_20874,output_checker20703_20875))
;
var expr__20863 = token;
if(cljs.core.truth_(pred__20862(stepwise.layout.spacer_QMARK_,expr__20863))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,{"className": "spacer"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(token)],null))));
} else {
if(cljs.core.truth_(pred__20862(stepwise.layout.delimiter_QMARK_,expr__20863))){
return om.core.build.cljs$core$IFn$_invoke$arity$2(stepwise.app.delimiter,token);
} else {
if(cljs.core.truth_(pred__20862(stepwise.model.stringlike_QMARK_,expr__20863))){
return om.core.build.cljs$core$IFn$_invoke$arity$2(stepwise.app.stringlike,token);
} else {
return om.core.build.cljs$core$IFn$_invoke$arity$2(stepwise.app.atom_STAR_,token);
}
}
}
})());

var G__20881 = (i__20852 + (1));
i__20852 = G__20881;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20853),stepwise$app$top_level_form_$_iter__20790_$_iter__20850(cljs.core.chunk_rest(s__20851__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20853),null);
}
} else {
var token = cljs.core.first(s__20851__$2);
return cljs.core.cons((function (){var pred__20865 = ((function (token,s__20851__$2,temp__4657__auto____$1,line,s__20791__$2,temp__4657__auto__,___$1,validate__12100__auto__,ufv___20871,output_schema20700_20872,input_schema20701_20873,input_checker20702_20874,output_checker20703_20875){
return (function (p1__20697_SHARP_,p2__20698_SHARP_){
return (p1__20697_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__20697_SHARP_.cljs$core$IFn$_invoke$arity$1(p2__20698_SHARP_) : p1__20697_SHARP_.call(null,p2__20698_SHARP_));
});})(token,s__20851__$2,temp__4657__auto____$1,line,s__20791__$2,temp__4657__auto__,___$1,validate__12100__auto__,ufv___20871,output_schema20700_20872,input_schema20701_20873,input_checker20702_20874,output_checker20703_20875))
;
var expr__20866 = token;
if(cljs.core.truth_(pred__20865(stepwise.layout.spacer_QMARK_,expr__20866))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,{"className": "spacer"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(token)],null))));
} else {
if(cljs.core.truth_(pred__20865(stepwise.layout.delimiter_QMARK_,expr__20866))){
return om.core.build.cljs$core$IFn$_invoke$arity$2(stepwise.app.delimiter,token);
} else {
if(cljs.core.truth_(pred__20865(stepwise.model.stringlike_QMARK_,expr__20866))){
return om.core.build.cljs$core$IFn$_invoke$arity$2(stepwise.app.stringlike,token);
} else {
return om.core.build.cljs$core$IFn$_invoke$arity$2(stepwise.app.atom_STAR_,token);
}
}
}
})(),stepwise$app$top_level_form_$_iter__20790_$_iter__20850(cljs.core.rest(s__20851__$2)));
}
} else {
return null;
}
break;
}
});})(line,s__20791__$2,temp__4657__auto__,___$1,validate__12100__auto__,ufv___20871,output_schema20700_20872,input_schema20701_20873,input_checker20702_20874,output_checker20703_20875))
,null,null));
});})(line,s__20791__$2,temp__4657__auto__,___$1,validate__12100__auto__,ufv___20871,output_schema20700_20872,input_schema20701_20873,input_checker20702_20874,output_checker20703_20875))
;
return iter__6928__auto__(line);
})()],null)))),stepwise$app$top_level_form_$_iter__20790(cljs.core.rest(s__20791__$2)));
}
} else {
return null;
}
break;
}
});})(___$1,validate__12100__auto__,ufv___20871,output_schema20700_20872,input_schema20701_20873,input_checker20702_20874,output_checker20703_20875))
,null,null));
});})(___$1,validate__12100__auto__,ufv___20871,output_schema20700_20872,input_schema20701_20873,input_checker20702_20874,output_checker20703_20875))
;
return iter__6928__auto__(stepwise.layout.__GT_lines.cljs$core$IFn$_invoke$arity$2(self__.form,(60)));
})()],null))));
});})(validate__12100__auto__,ufv___20871,output_schema20700_20872,input_schema20701_20873,input_checker20702_20874,output_checker20703_20875))
;

stepwise.app.t_stepwise$app20787.getBasis = ((function (validate__12100__auto__,ufv___20871,output_schema20700_20872,input_schema20701_20873,input_checker20702_20874,output_checker20703_20875){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$output_DASH_schema20700,cljs.core.cst$sym$owner,cljs.core.cst$sym$input_DASH_schema20701,cljs.core.with_meta(cljs.core.cst$sym$G__20705,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_checker20702,cljs.core.cst$sym$output_DASH_checker20703,cljs.core.with_meta(cljs.core.cst$sym$top_DASH_level_DASH_form,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema20700,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema20701], null)),cljs.core.cst$kw$doc,"Inputs: [form owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$owner], null)))], null)),cljs.core.with_meta(cljs.core.cst$sym$G__20704,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$ufv__,cljs.core.cst$sym$validate__12100__auto__,cljs.core.cst$sym$meta20788], null);
});})(validate__12100__auto__,ufv___20871,output_schema20700_20872,input_schema20701_20873,input_checker20702_20874,output_checker20703_20875))
;

stepwise.app.t_stepwise$app20787.cljs$lang$type = true;

stepwise.app.t_stepwise$app20787.cljs$lang$ctorStr = "stepwise.app/t_stepwise$app20787";

stepwise.app.t_stepwise$app20787.cljs$lang$ctorPrWriter = ((function (validate__12100__auto__,ufv___20871,output_schema20700_20872,input_schema20701_20873,input_checker20702_20874,output_checker20703_20875){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"stepwise.app/t_stepwise$app20787");
});})(validate__12100__auto__,ufv___20871,output_schema20700_20872,input_schema20701_20873,input_checker20702_20874,output_checker20703_20875))
;

stepwise.app.__GT_t_stepwise$app20787 = ((function (validate__12100__auto__,ufv___20871,output_schema20700_20872,input_schema20701_20873,input_checker20702_20874,output_checker20703_20875){
return (function stepwise$app$top_level_form_$___GT_t_stepwise$app20787(form__$1,output_schema20700__$1,owner__$1,input_schema20701__$1,G__20705__$1,input_checker20702__$1,output_checker20703__$1,top_level_form__$1,G__20704__$1,ufv____$1,validate__12100__auto____$1,meta20788){
return (new stepwise.app.t_stepwise$app20787(form__$1,output_schema20700__$1,owner__$1,input_schema20701__$1,G__20705__$1,input_checker20702__$1,output_checker20703__$1,top_level_form__$1,G__20704__$1,ufv____$1,validate__12100__auto____$1,meta20788));
});})(validate__12100__auto__,ufv___20871,output_schema20700_20872,input_schema20701_20873,input_checker20702_20874,output_checker20703_20875))
;

}

return (new stepwise.app.t_stepwise$app20787(form,output_schema20700_20872,owner,input_schema20701_20873,G__20705,input_checker20702_20874,output_checker20703_20875,stepwise$app$top_level_form,G__20704,ufv___20871,validate__12100__auto__,null));
break;
}
})();
if(cljs.core.truth_(validate__12100__auto__)){
var temp__4657__auto___20882 = (output_checker20703_20875.cljs$core$IFn$_invoke$arity$1 ? output_checker20703_20875.cljs$core$IFn$_invoke$arity$1(o__12103__auto__) : output_checker20703_20875.call(null,o__12103__auto__));
if(cljs.core.truth_(temp__4657__auto___20882)){
var error__12102__auto___20883 = temp__4657__auto___20882;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$top_DASH_level_DASH_form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12102__auto___20883], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema20700_20872,cljs.core.cst$kw$value,o__12103__auto__,cljs.core.cst$kw$error,error__12102__auto___20883], null));
} else {
}
} else {
}

return o__12103__auto__;
});})(ufv___20871,output_schema20700_20872,input_schema20701_20873,input_checker20702_20874,output_checker20703_20875))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(stepwise.app.top_level_form),schema.core.make_fn_schema(output_schema20700_20872,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20701_20873], null)));

stepwise.app.__GT_top_level_form = (function stepwise$app$__GT_top_level_form(var_args){
var args20868 = [];
var len__7214__auto___20884 = arguments.length;
var i__7215__auto___20885 = (0);
while(true){
if((i__7215__auto___20885 < len__7214__auto___20884)){
args20868.push((arguments[i__7215__auto___20885]));

var G__20886 = (i__7215__auto___20885 + (1));
i__7215__auto___20885 = G__20886;
continue;
} else {
}
break;
}

var G__20870 = args20868.length;
switch (G__20870) {
case 1:
return stepwise.app.__GT_top_level_form.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stepwise.app.__GT_top_level_form.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20868.length)].join('')));

}
});

stepwise.app.__GT_top_level_form.cljs$core$IFn$_invoke$arity$1 = (function (cursor__20546__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(stepwise.app.top_level_form,cursor__20546__auto__);
});

stepwise.app.__GT_top_level_form.cljs$core$IFn$_invoke$arity$2 = (function (cursor__20546__auto__,m20699){
return om.core.build.cljs$core$IFn$_invoke$arity$3(stepwise.app.top_level_form,cursor__20546__auto__,m20699);
});

stepwise.app.__GT_top_level_form.cljs$lang$maxFixedArity = 2;

var ufv___20908 = schema.utils.use_fn_validation;
var output_schema20889_20909 = schema.core.Any;
var input_schema20890_20910 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$loc,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker20891_20911 = schema.core.checker(input_schema20890_20910);
var output_checker20892_20912 = schema.core.checker(output_schema20889_20909);
/**
 * Inputs: [loc owner]
 */
stepwise.app.forms = ((function (ufv___20908,output_schema20889_20909,input_schema20890_20910,input_checker20891_20911,output_checker20892_20912){
return (function stepwise$app$forms(G__20893,G__20894){
var validate__12100__auto__ = ufv___20908.get_cell();
if(cljs.core.truth_(validate__12100__auto__)){
var args__12101__auto___20913 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20893,G__20894], null);
var temp__4657__auto___20914 = (input_checker20891_20911.cljs$core$IFn$_invoke$arity$1 ? input_checker20891_20911.cljs$core$IFn$_invoke$arity$1(args__12101__auto___20913) : input_checker20891_20911.call(null,args__12101__auto___20913));
if(cljs.core.truth_(temp__4657__auto___20914)){
var error__12102__auto___20915 = temp__4657__auto___20914;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$forms,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12102__auto___20915], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema20890_20910,cljs.core.cst$kw$value,args__12101__auto___20913,cljs.core.cst$kw$error,error__12102__auto___20915], null));
} else {
}
} else {
}

var o__12103__auto__ = (function (){var loc = G__20893;
var owner = G__20894;
while(true){
if(typeof stepwise.app.t_stepwise$app20900 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
stepwise.app.t_stepwise$app20900 = (function (output_schema20889,loc,owner,forms,G__20894,input_checker20891,input_schema20890,output_checker20892,G__20893,ufv__,validate__12100__auto__,meta20901){
this.output_schema20889 = output_schema20889;
this.loc = loc;
this.owner = owner;
this.forms = forms;
this.G__20894 = G__20894;
this.input_checker20891 = input_checker20891;
this.input_schema20890 = input_schema20890;
this.output_checker20892 = output_checker20892;
this.G__20893 = G__20893;
this.ufv__ = ufv__;
this.validate__12100__auto__ = validate__12100__auto__;
this.meta20901 = meta20901;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
stepwise.app.t_stepwise$app20900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__12100__auto__,ufv___20908,output_schema20889_20909,input_schema20890_20910,input_checker20891_20911,output_checker20892_20912){
return (function (_20902,meta20901__$1){
var self__ = this;
var _20902__$1 = this;
return (new stepwise.app.t_stepwise$app20900(self__.output_schema20889,self__.loc,self__.owner,self__.forms,self__.G__20894,self__.input_checker20891,self__.input_schema20890,self__.output_checker20892,self__.G__20893,self__.ufv__,self__.validate__12100__auto__,meta20901__$1));
});})(validate__12100__auto__,ufv___20908,output_schema20889_20909,input_schema20890_20910,input_checker20891_20911,output_checker20892_20912))
;

stepwise.app.t_stepwise$app20900.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__12100__auto__,ufv___20908,output_schema20889_20909,input_schema20890_20910,input_checker20891_20911,output_checker20892_20912){
return (function (_20902){
var self__ = this;
var _20902__$1 = this;
return self__.meta20901;
});})(validate__12100__auto__,ufv___20908,output_schema20889_20909,input_schema20890_20910,input_checker20891_20911,output_checker20892_20912))
;

stepwise.app.t_stepwise$app20900.prototype.om$core$IDisplayName$ = true;

stepwise.app.t_stepwise$app20900.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__12100__auto__,ufv___20908,output_schema20889_20909,input_schema20890_20910,input_checker20891_20911,output_checker20892_20912){
return (function (_){
var self__ = this;
var ___$1 = this;
return "forms";
});})(validate__12100__auto__,ufv___20908,output_schema20889_20909,input_schema20890_20910,input_checker20891_20911,output_checker20892_20912))
;

stepwise.app.t_stepwise$app20900.prototype.om$core$IRender$ = true;

stepwise.app.t_stepwise$app20900.prototype.om$core$IRender$render$arity$1 = ((function (validate__12100__auto__,ufv___20908,output_schema20889_20909,input_schema20890_20910,input_checker20891_20911,output_checker20892_20912){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__20903 = xyzzy.core.assoc.cljs$core$IFn$_invoke$arity$variadic(self__.loc,cljs.core.array_seq([cljs.core.cst$kw$selected_QMARK_,true], 0));
var map__20903__$1 = ((((!((map__20903 == null)))?((((map__20903.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20903.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20903):map__20903);
var tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20903__$1,cljs.core.cst$kw$tree);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": "forms"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build_all.cljs$core$IFn$_invoke$arity$2(stepwise.app.top_level_form,cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(tree))],null))));
});})(validate__12100__auto__,ufv___20908,output_schema20889_20909,input_schema20890_20910,input_checker20891_20911,output_checker20892_20912))
;

stepwise.app.t_stepwise$app20900.getBasis = ((function (validate__12100__auto__,ufv___20908,output_schema20889_20909,input_schema20890_20910,input_checker20891_20911,output_checker20892_20912){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$output_DASH_schema20889,cljs.core.cst$sym$loc,cljs.core.cst$sym$owner,cljs.core.with_meta(cljs.core.cst$sym$forms,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$loc,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema20889,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema20890], null)),cljs.core.cst$kw$doc,"Inputs: [loc owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$loc,cljs.core.cst$sym$owner], null)))], null)),cljs.core.with_meta(cljs.core.cst$sym$G__20894,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_checker20891,cljs.core.cst$sym$input_DASH_schema20890,cljs.core.cst$sym$output_DASH_checker20892,cljs.core.with_meta(cljs.core.cst$sym$G__20893,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$ufv__,cljs.core.cst$sym$validate__12100__auto__,cljs.core.cst$sym$meta20901], null);
});})(validate__12100__auto__,ufv___20908,output_schema20889_20909,input_schema20890_20910,input_checker20891_20911,output_checker20892_20912))
;

stepwise.app.t_stepwise$app20900.cljs$lang$type = true;

stepwise.app.t_stepwise$app20900.cljs$lang$ctorStr = "stepwise.app/t_stepwise$app20900";

stepwise.app.t_stepwise$app20900.cljs$lang$ctorPrWriter = ((function (validate__12100__auto__,ufv___20908,output_schema20889_20909,input_schema20890_20910,input_checker20891_20911,output_checker20892_20912){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"stepwise.app/t_stepwise$app20900");
});})(validate__12100__auto__,ufv___20908,output_schema20889_20909,input_schema20890_20910,input_checker20891_20911,output_checker20892_20912))
;

stepwise.app.__GT_t_stepwise$app20900 = ((function (validate__12100__auto__,ufv___20908,output_schema20889_20909,input_schema20890_20910,input_checker20891_20911,output_checker20892_20912){
return (function stepwise$app$forms_$___GT_t_stepwise$app20900(output_schema20889__$1,loc__$1,owner__$1,forms__$1,G__20894__$1,input_checker20891__$1,input_schema20890__$1,output_checker20892__$1,G__20893__$1,ufv____$1,validate__12100__auto____$1,meta20901){
return (new stepwise.app.t_stepwise$app20900(output_schema20889__$1,loc__$1,owner__$1,forms__$1,G__20894__$1,input_checker20891__$1,input_schema20890__$1,output_checker20892__$1,G__20893__$1,ufv____$1,validate__12100__auto____$1,meta20901));
});})(validate__12100__auto__,ufv___20908,output_schema20889_20909,input_schema20890_20910,input_checker20891_20911,output_checker20892_20912))
;

}

return (new stepwise.app.t_stepwise$app20900(output_schema20889_20909,loc,owner,stepwise$app$forms,G__20894,input_checker20891_20911,input_schema20890_20910,output_checker20892_20912,G__20893,ufv___20908,validate__12100__auto__,null));
break;
}
})();
if(cljs.core.truth_(validate__12100__auto__)){
var temp__4657__auto___20916 = (output_checker20892_20912.cljs$core$IFn$_invoke$arity$1 ? output_checker20892_20912.cljs$core$IFn$_invoke$arity$1(o__12103__auto__) : output_checker20892_20912.call(null,o__12103__auto__));
if(cljs.core.truth_(temp__4657__auto___20916)){
var error__12102__auto___20917 = temp__4657__auto___20916;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$forms,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12102__auto___20917], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema20889_20909,cljs.core.cst$kw$value,o__12103__auto__,cljs.core.cst$kw$error,error__12102__auto___20917], null));
} else {
}
} else {
}

return o__12103__auto__;
});})(ufv___20908,output_schema20889_20909,input_schema20890_20910,input_checker20891_20911,output_checker20892_20912))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(stepwise.app.forms),schema.core.make_fn_schema(output_schema20889_20909,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20890_20910], null)));

stepwise.app.__GT_forms = (function stepwise$app$__GT_forms(var_args){
var args20905 = [];
var len__7214__auto___20918 = arguments.length;
var i__7215__auto___20919 = (0);
while(true){
if((i__7215__auto___20919 < len__7214__auto___20918)){
args20905.push((arguments[i__7215__auto___20919]));

var G__20920 = (i__7215__auto___20919 + (1));
i__7215__auto___20919 = G__20920;
continue;
} else {
}
break;
}

var G__20907 = args20905.length;
switch (G__20907) {
case 1:
return stepwise.app.__GT_forms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stepwise.app.__GT_forms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20905.length)].join('')));

}
});

stepwise.app.__GT_forms.cljs$core$IFn$_invoke$arity$1 = (function (cursor__20546__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(stepwise.app.forms,cursor__20546__auto__);
});

stepwise.app.__GT_forms.cljs$core$IFn$_invoke$arity$2 = (function (cursor__20546__auto__,m20888){
return om.core.build.cljs$core$IFn$_invoke$arity$3(stepwise.app.forms,cursor__20546__auto__,m20888);
});

stepwise.app.__GT_forms.cljs$lang$maxFixedArity = 2;

var ufv___20965 = schema.utils.use_fn_validation;
var output_schema20924_20966 = schema.core.Any;
var input_schema20925_20967 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker20926_20968 = schema.core.checker(input_schema20925_20967);
var output_checker20927_20969 = schema.core.checker(output_schema20924_20966);
/**
 * Inputs: [data owner]
 */
stepwise.app.stepper = ((function (ufv___20965,output_schema20924_20966,input_schema20925_20967,input_checker20926_20968,output_checker20927_20969){
return (function stepwise$app$stepper(G__20928,G__20929){
var validate__12100__auto__ = ufv___20965.get_cell();
if(cljs.core.truth_(validate__12100__auto__)){
var args__12101__auto___20970 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20928,G__20929], null);
var temp__4657__auto___20971 = (input_checker20926_20968.cljs$core$IFn$_invoke$arity$1 ? input_checker20926_20968.cljs$core$IFn$_invoke$arity$1(args__12101__auto___20970) : input_checker20926_20968.call(null,args__12101__auto___20970));
if(cljs.core.truth_(temp__4657__auto___20971)){
var error__12102__auto___20972 = temp__4657__auto___20971;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$stepper,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12102__auto___20972], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema20925_20967,cljs.core.cst$kw$value,args__12101__auto___20970,cljs.core.cst$kw$error,error__12102__auto___20972], null));
} else {
}
} else {
}

var o__12103__auto__ = (function (){var data = G__20928;
var owner = G__20929;
while(true){
if(typeof stepwise.app.t_stepwise$app20946 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
stepwise.app.t_stepwise$app20946 = (function (G__20929,stepper,input_schema20925,owner,data,output_checker20927,input_checker20926,G__20928,output_schema20924,ufv__,validate__12100__auto__,meta20947){
this.G__20929 = G__20929;
this.stepper = stepper;
this.input_schema20925 = input_schema20925;
this.owner = owner;
this.data = data;
this.output_checker20927 = output_checker20927;
this.input_checker20926 = input_checker20926;
this.G__20928 = G__20928;
this.output_schema20924 = output_schema20924;
this.ufv__ = ufv__;
this.validate__12100__auto__ = validate__12100__auto__;
this.meta20947 = meta20947;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
stepwise.app.t_stepwise$app20946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__12100__auto__,ufv___20965,output_schema20924_20966,input_schema20925_20967,input_checker20926_20968,output_checker20927_20969){
return (function (_20948,meta20947__$1){
var self__ = this;
var _20948__$1 = this;
return (new stepwise.app.t_stepwise$app20946(self__.G__20929,self__.stepper,self__.input_schema20925,self__.owner,self__.data,self__.output_checker20927,self__.input_checker20926,self__.G__20928,self__.output_schema20924,self__.ufv__,self__.validate__12100__auto__,meta20947__$1));
});})(validate__12100__auto__,ufv___20965,output_schema20924_20966,input_schema20925_20967,input_checker20926_20968,output_checker20927_20969))
;

stepwise.app.t_stepwise$app20946.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__12100__auto__,ufv___20965,output_schema20924_20966,input_schema20925_20967,input_checker20926_20968,output_checker20927_20969){
return (function (_20948){
var self__ = this;
var _20948__$1 = this;
return self__.meta20947;
});})(validate__12100__auto__,ufv___20965,output_schema20924_20966,input_schema20925_20967,input_checker20926_20968,output_checker20927_20969))
;

stepwise.app.t_stepwise$app20946.prototype.om$core$IDisplayName$ = true;

stepwise.app.t_stepwise$app20946.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__12100__auto__,ufv___20965,output_schema20924_20966,input_schema20925_20967,input_checker20926_20968,output_checker20927_20969){
return (function (_){
var self__ = this;
var ___$1 = this;
return "stepper";
});})(validate__12100__auto__,ufv___20965,output_schema20924_20966,input_schema20925_20967,input_checker20926_20968,output_checker20927_20969))
;

stepwise.app.t_stepwise$app20946.prototype.om$core$IRender$ = true;

stepwise.app.t_stepwise$app20946.prototype.om$core$IRender$render$arity$1 = ((function (validate__12100__auto__,ufv___20965,output_schema20924_20966,input_schema20925_20967,input_checker20926_20968,output_checker20927_20969){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__20949 = self__.data;
var map__20949__$1 = ((((!((map__20949 == null)))?((((map__20949.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20949.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20949):map__20949);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20949__$1,cljs.core.cst$kw$index);
var steps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20949__$1,cljs.core.cst$kw$steps);
var last_index = (cljs.core.count(steps) - (1));
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(steps,index);
return om_tools.dom.element(React.DOM.div,om.core.build.cljs$core$IFn$_invoke$arity$2(stepwise.app.forms,cljs.core.cst$kw$loc.cljs$core$IFn$_invoke$arity$1(step)),(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.p,{"className": "description"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__6928__auto__ = ((function (map__20949,map__20949__$1,index,steps,last_index,step,___$1,validate__12100__auto__,ufv___20965,output_schema20924_20966,input_schema20925_20967,input_checker20926_20968,output_checker20927_20969){
return (function stepwise$app$stepper_$_iter__20951(s__20952){
return (new cljs.core.LazySeq(null,((function (map__20949,map__20949__$1,index,steps,last_index,step,___$1,validate__12100__auto__,ufv___20965,output_schema20924_20966,input_schema20925_20967,input_checker20926_20968,output_checker20927_20969){
return (function (){
var s__20952__$1 = s__20952;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__20952__$1);
if(temp__4657__auto__){
var s__20952__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20952__$2)){
var c__6926__auto__ = cljs.core.chunk_first(s__20952__$2);
var size__6927__auto__ = cljs.core.count(c__6926__auto__);
var b__20954 = cljs.core.chunk_buffer(size__6927__auto__);
if((function (){var i__20953 = (0);
while(true){
if((i__20953 < size__6927__auto__)){
var part = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6926__auto__,i__20953);
cljs.core.chunk_append(b__20954,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(part),cljs.core.cst$kw$code))?om_tools.dom.element(React.DOM.code,cljs.core.second(part),cljs.core.PersistentVector.EMPTY):om_tools.dom.element(React.DOM.span,part,cljs.core.PersistentVector.EMPTY)));

var G__20973 = (i__20953 + (1));
i__20953 = G__20973;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20954),stepwise$app$stepper_$_iter__20951(cljs.core.chunk_rest(s__20952__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20954),null);
}
} else {
var part = cljs.core.first(s__20952__$2);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(part),cljs.core.cst$kw$code))?om_tools.dom.element(React.DOM.code,cljs.core.second(part),cljs.core.PersistentVector.EMPTY):om_tools.dom.element(React.DOM.span,part,cljs.core.PersistentVector.EMPTY)),stepwise$app$stepper_$_iter__20951(cljs.core.rest(s__20952__$2)));
}
} else {
return null;
}
break;
}
});})(map__20949,map__20949__$1,index,steps,last_index,step,___$1,validate__12100__auto__,ufv___20965,output_schema20924_20966,input_schema20925_20967,input_checker20926_20968,output_checker20927_20969))
,null,null));
});})(map__20949,map__20949__$1,index,steps,last_index,step,___$1,validate__12100__auto__,ufv___20965,output_schema20924_20966,input_schema20925_20967,input_checker20926_20968,output_checker20927_20969))
;
return iter__6928__auto__(cljs.core.cst$kw$desc.cljs$core$IFn$_invoke$arity$1(step));
})()],null)))),(function (){var G__20959 = {"type": "range", "min": (0), "max": om_tools.dom.format_opts(last_index), "value": om_tools.dom.format_opts(index), "onChange": om_tools.dom.format_opts(((function (map__20949,map__20949__$1,index,steps,last_index,step,___$1,validate__12100__auto__,ufv___20965,output_schema20924_20966,input_schema20925_20967,input_checker20926_20968,output_checker20927_20969){
return (function (p1__20922_SHARP_){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$index,(function (){var G__20960 = stepwise.util.value(p1__20922_SHARP_);
var G__20961 = (10);
return parseInt(G__20960,G__20961);
})());
});})(map__20949,map__20949__$1,index,steps,last_index,step,___$1,validate__12100__auto__,ufv___20965,output_schema20924_20966,input_schema20925_20967,input_checker20926_20968,output_checker20927_20969))
)};
return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__20959) : om.dom.input.call(null,G__20959));
})(),om_tools.dom.element(React.DOM.button,(((index <= (0)))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$disabled,true], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (map__20949,map__20949__$1,index,steps,last_index,step,___$1,validate__12100__auto__,ufv___20965,output_schema20924_20966,input_schema20925_20967,input_checker20926_20968,output_checker20927_20969){
return (function (){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$index,cljs.core.dec);
});})(map__20949,map__20949__$1,index,steps,last_index,step,___$1,validate__12100__auto__,ufv___20965,output_schema20924_20966,input_schema20925_20967,input_checker20926_20968,output_checker20927_20969))
], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,["<< Prev"],null))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,{"className": "counter"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[[cljs.core.str((index + (1))),cljs.core.str(" / "),cljs.core.str((last_index + (1)))].join('')],null)))),om_tools.dom.element(React.DOM.button,(((index >= last_index))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$disabled,true], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (map__20949,map__20949__$1,index,steps,last_index,step,___$1,validate__12100__auto__,ufv___20965,output_schema20924_20966,input_schema20925_20967,input_checker20926_20968,output_checker20927_20969){
return (function (){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$index,cljs.core.inc);
});})(map__20949,map__20949__$1,index,steps,last_index,step,___$1,validate__12100__auto__,ufv___20965,output_schema20924_20966,input_schema20925_20967,input_checker20926_20968,output_checker20927_20969))
], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,["Next >>"],null)))],null)));
});})(validate__12100__auto__,ufv___20965,output_schema20924_20966,input_schema20925_20967,input_checker20926_20968,output_checker20927_20969))
;

stepwise.app.t_stepwise$app20946.getBasis = ((function (validate__12100__auto__,ufv___20965,output_schema20924_20966,input_schema20925_20967,input_checker20926_20968,output_checker20927_20969){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$G__20929,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$stepper,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema20924,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema20925], null)),cljs.core.cst$kw$doc,"Inputs: [data owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$input_DASH_schema20925,cljs.core.cst$sym$owner,cljs.core.cst$sym$data,cljs.core.cst$sym$output_DASH_checker20927,cljs.core.cst$sym$input_DASH_checker20926,cljs.core.with_meta(cljs.core.cst$sym$G__20928,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$output_DASH_schema20924,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$validate__12100__auto__,cljs.core.cst$sym$meta20947], null);
});})(validate__12100__auto__,ufv___20965,output_schema20924_20966,input_schema20925_20967,input_checker20926_20968,output_checker20927_20969))
;

stepwise.app.t_stepwise$app20946.cljs$lang$type = true;

stepwise.app.t_stepwise$app20946.cljs$lang$ctorStr = "stepwise.app/t_stepwise$app20946";

stepwise.app.t_stepwise$app20946.cljs$lang$ctorPrWriter = ((function (validate__12100__auto__,ufv___20965,output_schema20924_20966,input_schema20925_20967,input_checker20926_20968,output_checker20927_20969){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"stepwise.app/t_stepwise$app20946");
});})(validate__12100__auto__,ufv___20965,output_schema20924_20966,input_schema20925_20967,input_checker20926_20968,output_checker20927_20969))
;

stepwise.app.__GT_t_stepwise$app20946 = ((function (validate__12100__auto__,ufv___20965,output_schema20924_20966,input_schema20925_20967,input_checker20926_20968,output_checker20927_20969){
return (function stepwise$app$stepper_$___GT_t_stepwise$app20946(G__20929__$1,stepper__$1,input_schema20925__$1,owner__$1,data__$1,output_checker20927__$1,input_checker20926__$1,G__20928__$1,output_schema20924__$1,ufv____$1,validate__12100__auto____$1,meta20947){
return (new stepwise.app.t_stepwise$app20946(G__20929__$1,stepper__$1,input_schema20925__$1,owner__$1,data__$1,output_checker20927__$1,input_checker20926__$1,G__20928__$1,output_schema20924__$1,ufv____$1,validate__12100__auto____$1,meta20947));
});})(validate__12100__auto__,ufv___20965,output_schema20924_20966,input_schema20925_20967,input_checker20926_20968,output_checker20927_20969))
;

}

return (new stepwise.app.t_stepwise$app20946(G__20929,stepwise$app$stepper,input_schema20925_20967,owner,data,output_checker20927_20969,input_checker20926_20968,G__20928,output_schema20924_20966,ufv___20965,validate__12100__auto__,null));
break;
}
})();
if(cljs.core.truth_(validate__12100__auto__)){
var temp__4657__auto___20974 = (output_checker20927_20969.cljs$core$IFn$_invoke$arity$1 ? output_checker20927_20969.cljs$core$IFn$_invoke$arity$1(o__12103__auto__) : output_checker20927_20969.call(null,o__12103__auto__));
if(cljs.core.truth_(temp__4657__auto___20974)){
var error__12102__auto___20975 = temp__4657__auto___20974;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$stepper,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12102__auto___20975], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema20924_20966,cljs.core.cst$kw$value,o__12103__auto__,cljs.core.cst$kw$error,error__12102__auto___20975], null));
} else {
}
} else {
}

return o__12103__auto__;
});})(ufv___20965,output_schema20924_20966,input_schema20925_20967,input_checker20926_20968,output_checker20927_20969))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(stepwise.app.stepper),schema.core.make_fn_schema(output_schema20924_20966,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20925_20967], null)));

stepwise.app.__GT_stepper = (function stepwise$app$__GT_stepper(var_args){
var args20962 = [];
var len__7214__auto___20976 = arguments.length;
var i__7215__auto___20977 = (0);
while(true){
if((i__7215__auto___20977 < len__7214__auto___20976)){
args20962.push((arguments[i__7215__auto___20977]));

var G__20978 = (i__7215__auto___20977 + (1));
i__7215__auto___20977 = G__20978;
continue;
} else {
}
break;
}

var G__20964 = args20962.length;
switch (G__20964) {
case 1:
return stepwise.app.__GT_stepper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stepwise.app.__GT_stepper.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20962.length)].join('')));

}
});

stepwise.app.__GT_stepper.cljs$core$IFn$_invoke$arity$1 = (function (cursor__20546__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(stepwise.app.stepper,cursor__20546__auto__);
});

stepwise.app.__GT_stepper.cljs$core$IFn$_invoke$arity$2 = (function (cursor__20546__auto__,m20923){
return om.core.build.cljs$core$IFn$_invoke$arity$3(stepwise.app.stepper,cursor__20546__auto__,m20923);
});

stepwise.app.__GT_stepper.cljs$lang$maxFixedArity = 2;

var ufv___21008 = schema.utils.use_fn_validation;
var output_schema20981_21009 = schema.core.Any;
var input_schema20982_21010 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker20983_21011 = schema.core.checker(input_schema20982_21010);
var output_checker20984_21012 = schema.core.checker(output_schema20981_21009);
/**
 * Inputs: [data owner]
 */
stepwise.app.example = ((function (ufv___21008,output_schema20981_21009,input_schema20982_21010,input_checker20983_21011,output_checker20984_21012){
return (function stepwise$app$example(G__20985,G__20986){
var validate__12100__auto__ = ufv___21008.get_cell();
if(cljs.core.truth_(validate__12100__auto__)){
var args__12101__auto___21013 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20985,G__20986], null);
var temp__4657__auto___21014 = (input_checker20983_21011.cljs$core$IFn$_invoke$arity$1 ? input_checker20983_21011.cljs$core$IFn$_invoke$arity$1(args__12101__auto___21013) : input_checker20983_21011.call(null,args__12101__auto___21013));
if(cljs.core.truth_(temp__4657__auto___21014)){
var error__12102__auto___21015 = temp__4657__auto___21014;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$example,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12102__auto___21015], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema20982_21010,cljs.core.cst$kw$value,args__12101__auto___21013,cljs.core.cst$kw$error,error__12102__auto___21015], null));
} else {
}
} else {
}

var o__12103__auto__ = (function (){var data = G__20985;
var owner = G__20986;
while(true){
if(typeof stepwise.app.t_stepwise$app20996 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
stepwise.app.t_stepwise$app20996 = (function (owner,data,G__20986,input_checker20983,input_schema20982,G__20985,output_checker20984,output_schema20981,ufv__,example,validate__12100__auto__,meta20997){
this.owner = owner;
this.data = data;
this.G__20986 = G__20986;
this.input_checker20983 = input_checker20983;
this.input_schema20982 = input_schema20982;
this.G__20985 = G__20985;
this.output_checker20984 = output_checker20984;
this.output_schema20981 = output_schema20981;
this.ufv__ = ufv__;
this.example = example;
this.validate__12100__auto__ = validate__12100__auto__;
this.meta20997 = meta20997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
stepwise.app.t_stepwise$app20996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__12100__auto__,ufv___21008,output_schema20981_21009,input_schema20982_21010,input_checker20983_21011,output_checker20984_21012){
return (function (_20998,meta20997__$1){
var self__ = this;
var _20998__$1 = this;
return (new stepwise.app.t_stepwise$app20996(self__.owner,self__.data,self__.G__20986,self__.input_checker20983,self__.input_schema20982,self__.G__20985,self__.output_checker20984,self__.output_schema20981,self__.ufv__,self__.example,self__.validate__12100__auto__,meta20997__$1));
});})(validate__12100__auto__,ufv___21008,output_schema20981_21009,input_schema20982_21010,input_checker20983_21011,output_checker20984_21012))
;

stepwise.app.t_stepwise$app20996.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__12100__auto__,ufv___21008,output_schema20981_21009,input_schema20982_21010,input_checker20983_21011,output_checker20984_21012){
return (function (_20998){
var self__ = this;
var _20998__$1 = this;
return self__.meta20997;
});})(validate__12100__auto__,ufv___21008,output_schema20981_21009,input_schema20982_21010,input_checker20983_21011,output_checker20984_21012))
;

stepwise.app.t_stepwise$app20996.prototype.om$core$IDisplayName$ = true;

stepwise.app.t_stepwise$app20996.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__12100__auto__,ufv___21008,output_schema20981_21009,input_schema20982_21010,input_checker20983_21011,output_checker20984_21012){
return (function (_){
var self__ = this;
var ___$1 = this;
return "example";
});})(validate__12100__auto__,ufv___21008,output_schema20981_21009,input_schema20982_21010,input_checker20983_21011,output_checker20984_21012))
;

stepwise.app.t_stepwise$app20996.prototype.om$core$IRender$ = true;

stepwise.app.t_stepwise$app20996.prototype.om$core$IRender$render$arity$1 = ((function (validate__12100__auto__,ufv___21008,output_schema20981_21009,input_schema20982_21010,input_checker20983_21011,output_checker20984_21012){
return (function (_){
var self__ = this;
var ___$1 = this;
return om_tools.dom.element(React.DOM.div,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h2,{"className": "title"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__6928__auto__ = ((function (___$1,validate__12100__auto__,ufv___21008,output_schema20981_21009,input_schema20982_21010,input_checker20983_21011,output_checker20984_21012){
return (function stepwise$app$example_$_iter__20999(s__21000){
return (new cljs.core.LazySeq(null,((function (___$1,validate__12100__auto__,ufv___21008,output_schema20981_21009,input_schema20982_21010,input_checker20983_21011,output_checker20984_21012){
return (function (){
var s__21000__$1 = s__21000;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__21000__$1);
if(temp__4657__auto__){
var s__21000__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21000__$2)){
var c__6926__auto__ = cljs.core.chunk_first(s__21000__$2);
var size__6927__auto__ = cljs.core.count(c__6926__auto__);
var b__21002 = cljs.core.chunk_buffer(size__6927__auto__);
if((function (){var i__21001 = (0);
while(true){
if((i__21001 < size__6927__auto__)){
var part = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6926__auto__,i__21001);
cljs.core.chunk_append(b__21002,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(part),cljs.core.cst$kw$code))?om_tools.dom.element(React.DOM.code,cljs.core.second(part),cljs.core.PersistentVector.EMPTY):om_tools.dom.element(React.DOM.span,part,cljs.core.PersistentVector.EMPTY)));

var G__21016 = (i__21001 + (1));
i__21001 = G__21016;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21002),stepwise$app$example_$_iter__20999(cljs.core.chunk_rest(s__21000__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21002),null);
}
} else {
var part = cljs.core.first(s__21000__$2);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(part),cljs.core.cst$kw$code))?om_tools.dom.element(React.DOM.code,cljs.core.second(part),cljs.core.PersistentVector.EMPTY):om_tools.dom.element(React.DOM.span,part,cljs.core.PersistentVector.EMPTY)),stepwise$app$example_$_iter__20999(cljs.core.rest(s__21000__$2)));
}
} else {
return null;
}
break;
}
});})(___$1,validate__12100__auto__,ufv___21008,output_schema20981_21009,input_schema20982_21010,input_checker20983_21011,output_checker20984_21012))
,null,null));
});})(___$1,validate__12100__auto__,ufv___21008,output_schema20981_21009,input_schema20982_21010,input_checker20983_21011,output_checker20984_21012))
;
return iter__6928__auto__(cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(self__.data));
})()],null)))),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.cljs$core$IFn$_invoke$arity$2(stepwise.app.stepper,self__.data)],null)));
});})(validate__12100__auto__,ufv___21008,output_schema20981_21009,input_schema20982_21010,input_checker20983_21011,output_checker20984_21012))
;

stepwise.app.t_stepwise$app20996.getBasis = ((function (validate__12100__auto__,ufv___21008,output_schema20981_21009,input_schema20982_21010,input_checker20983_21011,output_checker20984_21012){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$owner,cljs.core.cst$sym$data,cljs.core.with_meta(cljs.core.cst$sym$G__20986,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_checker20983,cljs.core.cst$sym$input_DASH_schema20982,cljs.core.with_meta(cljs.core.cst$sym$G__20985,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$output_DASH_checker20984,cljs.core.cst$sym$output_DASH_schema20981,cljs.core.cst$sym$ufv__,cljs.core.with_meta(cljs.core.cst$sym$example,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema20981,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema20982], null)),cljs.core.cst$kw$doc,"Inputs: [data owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$validate__12100__auto__,cljs.core.cst$sym$meta20997], null);
});})(validate__12100__auto__,ufv___21008,output_schema20981_21009,input_schema20982_21010,input_checker20983_21011,output_checker20984_21012))
;

stepwise.app.t_stepwise$app20996.cljs$lang$type = true;

stepwise.app.t_stepwise$app20996.cljs$lang$ctorStr = "stepwise.app/t_stepwise$app20996";

stepwise.app.t_stepwise$app20996.cljs$lang$ctorPrWriter = ((function (validate__12100__auto__,ufv___21008,output_schema20981_21009,input_schema20982_21010,input_checker20983_21011,output_checker20984_21012){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"stepwise.app/t_stepwise$app20996");
});})(validate__12100__auto__,ufv___21008,output_schema20981_21009,input_schema20982_21010,input_checker20983_21011,output_checker20984_21012))
;

stepwise.app.__GT_t_stepwise$app20996 = ((function (validate__12100__auto__,ufv___21008,output_schema20981_21009,input_schema20982_21010,input_checker20983_21011,output_checker20984_21012){
return (function stepwise$app$example_$___GT_t_stepwise$app20996(owner__$1,data__$1,G__20986__$1,input_checker20983__$1,input_schema20982__$1,G__20985__$1,output_checker20984__$1,output_schema20981__$1,ufv____$1,example__$1,validate__12100__auto____$1,meta20997){
return (new stepwise.app.t_stepwise$app20996(owner__$1,data__$1,G__20986__$1,input_checker20983__$1,input_schema20982__$1,G__20985__$1,output_checker20984__$1,output_schema20981__$1,ufv____$1,example__$1,validate__12100__auto____$1,meta20997));
});})(validate__12100__auto__,ufv___21008,output_schema20981_21009,input_schema20982_21010,input_checker20983_21011,output_checker20984_21012))
;

}

return (new stepwise.app.t_stepwise$app20996(owner,data,G__20986,input_checker20983_21011,input_schema20982_21010,G__20985,output_checker20984_21012,output_schema20981_21009,ufv___21008,stepwise$app$example,validate__12100__auto__,null));
break;
}
})();
if(cljs.core.truth_(validate__12100__auto__)){
var temp__4657__auto___21017 = (output_checker20984_21012.cljs$core$IFn$_invoke$arity$1 ? output_checker20984_21012.cljs$core$IFn$_invoke$arity$1(o__12103__auto__) : output_checker20984_21012.call(null,o__12103__auto__));
if(cljs.core.truth_(temp__4657__auto___21017)){
var error__12102__auto___21018 = temp__4657__auto___21017;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$example,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12102__auto___21018], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema20981_21009,cljs.core.cst$kw$value,o__12103__auto__,cljs.core.cst$kw$error,error__12102__auto___21018], null));
} else {
}
} else {
}

return o__12103__auto__;
});})(ufv___21008,output_schema20981_21009,input_schema20982_21010,input_checker20983_21011,output_checker20984_21012))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(stepwise.app.example),schema.core.make_fn_schema(output_schema20981_21009,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20982_21010], null)));

stepwise.app.__GT_example = (function stepwise$app$__GT_example(var_args){
var args21005 = [];
var len__7214__auto___21019 = arguments.length;
var i__7215__auto___21020 = (0);
while(true){
if((i__7215__auto___21020 < len__7214__auto___21019)){
args21005.push((arguments[i__7215__auto___21020]));

var G__21021 = (i__7215__auto___21020 + (1));
i__7215__auto___21020 = G__21021;
continue;
} else {
}
break;
}

var G__21007 = args21005.length;
switch (G__21007) {
case 1:
return stepwise.app.__GT_example.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stepwise.app.__GT_example.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21005.length)].join('')));

}
});

stepwise.app.__GT_example.cljs$core$IFn$_invoke$arity$1 = (function (cursor__20546__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(stepwise.app.example,cursor__20546__auto__);
});

stepwise.app.__GT_example.cljs$core$IFn$_invoke$arity$2 = (function (cursor__20546__auto__,m20980){
return om.core.build.cljs$core$IFn$_invoke$arity$3(stepwise.app.example,cursor__20546__auto__,m20980);
});

stepwise.app.__GT_example.cljs$lang$maxFixedArity = 2;

var ufv___21046 = schema.utils.use_fn_validation;
var output_schema21025_21047 = schema.core.Any;
var input_schema21026_21048 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker21027_21049 = schema.core.checker(input_schema21026_21048);
var output_checker21028_21050 = schema.core.checker(output_schema21025_21047);
/**
 * Inputs: [data owner]
 */
stepwise.app.sandbox = ((function (ufv___21046,output_schema21025_21047,input_schema21026_21048,input_checker21027_21049,output_checker21028_21050){
return (function stepwise$app$sandbox(G__21029,G__21030){
var validate__12100__auto__ = ufv___21046.get_cell();
if(cljs.core.truth_(validate__12100__auto__)){
var args__12101__auto___21051 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21029,G__21030], null);
var temp__4657__auto___21052 = (input_checker21027_21049.cljs$core$IFn$_invoke$arity$1 ? input_checker21027_21049.cljs$core$IFn$_invoke$arity$1(args__12101__auto___21051) : input_checker21027_21049.call(null,args__12101__auto___21051));
if(cljs.core.truth_(temp__4657__auto___21052)){
var error__12102__auto___21053 = temp__4657__auto___21052;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$sandbox,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12102__auto___21053], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema21026_21048,cljs.core.cst$kw$value,args__12101__auto___21051,cljs.core.cst$kw$error,error__12102__auto___21053], null));
} else {
}
} else {
}

var o__12103__auto__ = (function (){var data = G__21029;
var owner = G__21030;
while(true){
if(typeof stepwise.app.t_stepwise$app21037 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
stepwise.app.t_stepwise$app21037 = (function (input_checker21027,owner,output_schema21025,data,G__21029,input_schema21026,output_checker21028,G__21030,sandbox,ufv__,validate__12100__auto__,meta21038){
this.input_checker21027 = input_checker21027;
this.owner = owner;
this.output_schema21025 = output_schema21025;
this.data = data;
this.G__21029 = G__21029;
this.input_schema21026 = input_schema21026;
this.output_checker21028 = output_checker21028;
this.G__21030 = G__21030;
this.sandbox = sandbox;
this.ufv__ = ufv__;
this.validate__12100__auto__ = validate__12100__auto__;
this.meta21038 = meta21038;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
stepwise.app.t_stepwise$app21037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__12100__auto__,ufv___21046,output_schema21025_21047,input_schema21026_21048,input_checker21027_21049,output_checker21028_21050){
return (function (_21039,meta21038__$1){
var self__ = this;
var _21039__$1 = this;
return (new stepwise.app.t_stepwise$app21037(self__.input_checker21027,self__.owner,self__.output_schema21025,self__.data,self__.G__21029,self__.input_schema21026,self__.output_checker21028,self__.G__21030,self__.sandbox,self__.ufv__,self__.validate__12100__auto__,meta21038__$1));
});})(validate__12100__auto__,ufv___21046,output_schema21025_21047,input_schema21026_21048,input_checker21027_21049,output_checker21028_21050))
;

stepwise.app.t_stepwise$app21037.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__12100__auto__,ufv___21046,output_schema21025_21047,input_schema21026_21048,input_checker21027_21049,output_checker21028_21050){
return (function (_21039){
var self__ = this;
var _21039__$1 = this;
return self__.meta21038;
});})(validate__12100__auto__,ufv___21046,output_schema21025_21047,input_schema21026_21048,input_checker21027_21049,output_checker21028_21050))
;

stepwise.app.t_stepwise$app21037.prototype.om$core$IDisplayName$ = true;

stepwise.app.t_stepwise$app21037.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__12100__auto__,ufv___21046,output_schema21025_21047,input_schema21026_21048,input_checker21027_21049,output_checker21028_21050){
return (function (_){
var self__ = this;
var ___$1 = this;
return "sandbox";
});})(validate__12100__auto__,ufv___21046,output_schema21025_21047,input_schema21026_21048,input_checker21027_21049,output_checker21028_21050))
;

stepwise.app.t_stepwise$app21037.prototype.om$core$IRender$ = true;

stepwise.app.t_stepwise$app21037.prototype.om$core$IRender$render$arity$1 = ((function (validate__12100__auto__,ufv___21046,output_schema21025_21047,input_schema21026_21048,input_checker21027_21049,output_checker21028_21050){
return (function (_){
var self__ = this;
var ___$1 = this;
return om_tools.dom.element(React.DOM.div,(function (){var G__21040 = {"className": "title"};
var G__21041 = "Sandbox";
return React.DOM.h2(G__21040,G__21041);
})(),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__21042 = {"onChange": om_tools.dom.format_opts(((function (___$1,validate__12100__auto__,ufv___21046,output_schema21025_21047,input_schema21026_21048,input_checker21027_21049,output_checker21028_21050){
return (function (p1__21023_SHARP_){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2(self__.data,stepwise.eval.init_state(stepwise.util.value(p1__21023_SHARP_)));
});})(___$1,validate__12100__auto__,ufv___21046,output_schema21025_21047,input_schema21026_21048,input_checker21027_21049,output_checker21028_21050))
), "placeholder": "Enter code to explain here...", "value": om_tools.dom.format_opts(cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(self__.data))};
return (om.dom.textarea.cljs$core$IFn$_invoke$arity$1 ? om.dom.textarea.cljs$core$IFn$_invoke$arity$1(G__21042) : om.dom.textarea.call(null,G__21042));
})(),(function (){var temp__4655__auto__ = cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(self__.data);
if(cljs.core.truth_(temp__4655__auto__)){
var error = temp__4655__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.p,{"className": "error"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[error],null))));
} else {
return om.core.build.cljs$core$IFn$_invoke$arity$2(stepwise.app.stepper,self__.data);
}
})()],null)));
});})(validate__12100__auto__,ufv___21046,output_schema21025_21047,input_schema21026_21048,input_checker21027_21049,output_checker21028_21050))
;

stepwise.app.t_stepwise$app21037.getBasis = ((function (validate__12100__auto__,ufv___21046,output_schema21025_21047,input_schema21026_21048,input_checker21027_21049,output_checker21028_21050){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_checker21027,cljs.core.cst$sym$owner,cljs.core.cst$sym$output_DASH_schema21025,cljs.core.cst$sym$data,cljs.core.with_meta(cljs.core.cst$sym$G__21029,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_schema21026,cljs.core.cst$sym$output_DASH_checker21028,cljs.core.with_meta(cljs.core.cst$sym$G__21030,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$sandbox,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema21025,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema21026], null)),cljs.core.cst$kw$doc,"Inputs: [data owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$ufv__,cljs.core.cst$sym$validate__12100__auto__,cljs.core.cst$sym$meta21038], null);
});})(validate__12100__auto__,ufv___21046,output_schema21025_21047,input_schema21026_21048,input_checker21027_21049,output_checker21028_21050))
;

stepwise.app.t_stepwise$app21037.cljs$lang$type = true;

stepwise.app.t_stepwise$app21037.cljs$lang$ctorStr = "stepwise.app/t_stepwise$app21037";

stepwise.app.t_stepwise$app21037.cljs$lang$ctorPrWriter = ((function (validate__12100__auto__,ufv___21046,output_schema21025_21047,input_schema21026_21048,input_checker21027_21049,output_checker21028_21050){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"stepwise.app/t_stepwise$app21037");
});})(validate__12100__auto__,ufv___21046,output_schema21025_21047,input_schema21026_21048,input_checker21027_21049,output_checker21028_21050))
;

stepwise.app.__GT_t_stepwise$app21037 = ((function (validate__12100__auto__,ufv___21046,output_schema21025_21047,input_schema21026_21048,input_checker21027_21049,output_checker21028_21050){
return (function stepwise$app$sandbox_$___GT_t_stepwise$app21037(input_checker21027__$1,owner__$1,output_schema21025__$1,data__$1,G__21029__$1,input_schema21026__$1,output_checker21028__$1,G__21030__$1,sandbox__$1,ufv____$1,validate__12100__auto____$1,meta21038){
return (new stepwise.app.t_stepwise$app21037(input_checker21027__$1,owner__$1,output_schema21025__$1,data__$1,G__21029__$1,input_schema21026__$1,output_checker21028__$1,G__21030__$1,sandbox__$1,ufv____$1,validate__12100__auto____$1,meta21038));
});})(validate__12100__auto__,ufv___21046,output_schema21025_21047,input_schema21026_21048,input_checker21027_21049,output_checker21028_21050))
;

}

return (new stepwise.app.t_stepwise$app21037(input_checker21027_21049,owner,output_schema21025_21047,data,G__21029,input_schema21026_21048,output_checker21028_21050,G__21030,stepwise$app$sandbox,ufv___21046,validate__12100__auto__,null));
break;
}
})();
if(cljs.core.truth_(validate__12100__auto__)){
var temp__4657__auto___21054 = (output_checker21028_21050.cljs$core$IFn$_invoke$arity$1 ? output_checker21028_21050.cljs$core$IFn$_invoke$arity$1(o__12103__auto__) : output_checker21028_21050.call(null,o__12103__auto__));
if(cljs.core.truth_(temp__4657__auto___21054)){
var error__12102__auto___21055 = temp__4657__auto___21054;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$sandbox,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12102__auto___21055], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema21025_21047,cljs.core.cst$kw$value,o__12103__auto__,cljs.core.cst$kw$error,error__12102__auto___21055], null));
} else {
}
} else {
}

return o__12103__auto__;
});})(ufv___21046,output_schema21025_21047,input_schema21026_21048,input_checker21027_21049,output_checker21028_21050))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(stepwise.app.sandbox),schema.core.make_fn_schema(output_schema21025_21047,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21026_21048], null)));

stepwise.app.__GT_sandbox = (function stepwise$app$__GT_sandbox(var_args){
var args21043 = [];
var len__7214__auto___21056 = arguments.length;
var i__7215__auto___21057 = (0);
while(true){
if((i__7215__auto___21057 < len__7214__auto___21056)){
args21043.push((arguments[i__7215__auto___21057]));

var G__21058 = (i__7215__auto___21057 + (1));
i__7215__auto___21057 = G__21058;
continue;
} else {
}
break;
}

var G__21045 = args21043.length;
switch (G__21045) {
case 1:
return stepwise.app.__GT_sandbox.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stepwise.app.__GT_sandbox.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21043.length)].join('')));

}
});

stepwise.app.__GT_sandbox.cljs$core$IFn$_invoke$arity$1 = (function (cursor__20546__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(stepwise.app.sandbox,cursor__20546__auto__);
});

stepwise.app.__GT_sandbox.cljs$core$IFn$_invoke$arity$2 = (function (cursor__20546__auto__,m21024){
return om.core.build.cljs$core$IFn$_invoke$arity$3(stepwise.app.sandbox,cursor__20546__auto__,m21024);
});

stepwise.app.__GT_sandbox.cljs$lang$maxFixedArity = 2;

var ufv___21089 = schema.utils.use_fn_validation;
var output_schema21061_21090 = schema.core.Any;
var input_schema21062_21091 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.cst$sym$arg2)], null);
var input_checker21063_21092 = schema.core.checker(input_schema21062_21091);
var output_checker21064_21093 = schema.core.checker(output_schema21061_21090);
/**
 * Inputs: [data owner {:keys [label], my-route :route}]
 */
stepwise.app.route_button = ((function (ufv___21089,output_schema21061_21090,input_schema21062_21091,input_checker21063_21092,output_checker21064_21093){
return (function stepwise$app$route_button(G__21065,G__21066,G__21067){
var validate__12100__auto__ = ufv___21089.get_cell();
if(cljs.core.truth_(validate__12100__auto__)){
var args__12101__auto___21094 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21065,G__21066,G__21067], null);
var temp__4657__auto___21095 = (input_checker21063_21092.cljs$core$IFn$_invoke$arity$1 ? input_checker21063_21092.cljs$core$IFn$_invoke$arity$1(args__12101__auto___21094) : input_checker21063_21092.call(null,args__12101__auto___21094));
if(cljs.core.truth_(temp__4657__auto___21095)){
var error__12102__auto___21096 = temp__4657__auto___21095;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$route_DASH_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12102__auto___21096], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema21062_21091,cljs.core.cst$kw$value,args__12101__auto___21094,cljs.core.cst$kw$error,error__12102__auto___21096], null));
} else {
}
} else {
}

var o__12103__auto__ = (function (){var data = G__21065;
var owner = G__21066;
var G__21078 = G__21067;
var map__21079 = G__21078;
var map__21079__$1 = ((((!((map__21079 == null)))?((((map__21079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21079):map__21079);
var my_route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21079__$1,cljs.core.cst$kw$route);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21079__$1,cljs.core.cst$kw$label);
var data__$1 = data;
var owner__$1 = owner;
var G__21078__$1 = G__21078;
while(true){
var data__$2 = data__$1;
var owner__$2 = owner__$1;
var map__21081 = G__21078__$1;
var map__21081__$1 = ((((!((map__21081 == null)))?((((map__21081.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21081.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21081):map__21081);
var my_route__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21081__$1,cljs.core.cst$kw$route);
var label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21081__$1,cljs.core.cst$kw$label);
if(typeof stepwise.app.t_stepwise$app21083 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
stepwise.app.t_stepwise$app21083 = (function (my_route,G__21078,owner,data,output_schema21061,G__21067,map__21081,output_checker21064,route_button,input_checker21063,label,map__21079,G__21066,ufv__,G__21065,input_schema21062,validate__12100__auto__,meta21084){
this.my_route = my_route;
this.G__21078 = G__21078;
this.owner = owner;
this.data = data;
this.output_schema21061 = output_schema21061;
this.G__21067 = G__21067;
this.map__21081 = map__21081;
this.output_checker21064 = output_checker21064;
this.route_button = route_button;
this.input_checker21063 = input_checker21063;
this.label = label;
this.map__21079 = map__21079;
this.G__21066 = G__21066;
this.ufv__ = ufv__;
this.G__21065 = G__21065;
this.input_schema21062 = input_schema21062;
this.validate__12100__auto__ = validate__12100__auto__;
this.meta21084 = meta21084;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
stepwise.app.t_stepwise$app21083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (data__$2,owner__$2,map__21081,map__21081__$1,my_route__$1,label__$1,data,owner,G__21078,map__21079,map__21079__$1,my_route,label,validate__12100__auto__,ufv___21089,output_schema21061_21090,input_schema21062_21091,input_checker21063_21092,output_checker21064_21093){
return (function (_21085,meta21084__$1){
var self__ = this;
var _21085__$1 = this;
return (new stepwise.app.t_stepwise$app21083(self__.my_route,self__.G__21078,self__.owner,self__.data,self__.output_schema21061,self__.G__21067,self__.map__21081,self__.output_checker21064,self__.route_button,self__.input_checker21063,self__.label,self__.map__21079,self__.G__21066,self__.ufv__,self__.G__21065,self__.input_schema21062,self__.validate__12100__auto__,meta21084__$1));
});})(data__$2,owner__$2,map__21081,map__21081__$1,my_route__$1,label__$1,data,owner,G__21078,map__21079,map__21079__$1,my_route,label,validate__12100__auto__,ufv___21089,output_schema21061_21090,input_schema21062_21091,input_checker21063_21092,output_checker21064_21093))
;

stepwise.app.t_stepwise$app21083.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (data__$2,owner__$2,map__21081,map__21081__$1,my_route__$1,label__$1,data,owner,G__21078,map__21079,map__21079__$1,my_route,label,validate__12100__auto__,ufv___21089,output_schema21061_21090,input_schema21062_21091,input_checker21063_21092,output_checker21064_21093){
return (function (_21085){
var self__ = this;
var _21085__$1 = this;
return self__.meta21084;
});})(data__$2,owner__$2,map__21081,map__21081__$1,my_route__$1,label__$1,data,owner,G__21078,map__21079,map__21079__$1,my_route,label,validate__12100__auto__,ufv___21089,output_schema21061_21090,input_schema21062_21091,input_checker21063_21092,output_checker21064_21093))
;

stepwise.app.t_stepwise$app21083.prototype.om$core$IDisplayName$ = true;

stepwise.app.t_stepwise$app21083.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (data__$2,owner__$2,map__21081,map__21081__$1,my_route__$1,label__$1,data,owner,G__21078,map__21079,map__21079__$1,my_route,label,validate__12100__auto__,ufv___21089,output_schema21061_21090,input_schema21062_21091,input_checker21063_21092,output_checker21064_21093){
return (function (_){
var self__ = this;
var ___$1 = this;
return "route-button";
});})(data__$2,owner__$2,map__21081,map__21081__$1,my_route__$1,label__$1,data,owner,G__21078,map__21079,map__21079__$1,my_route,label,validate__12100__auto__,ufv___21089,output_schema21061_21090,input_schema21062_21091,input_checker21063_21092,output_checker21064_21093))
;

stepwise.app.t_stepwise$app21083.prototype.om$core$IRender$ = true;

stepwise.app.t_stepwise$app21083.prototype.om$core$IRender$render$arity$1 = ((function (data__$2,owner__$2,map__21081,map__21081__$1,my_route__$1,label__$1,data,owner,G__21078,map__21079,map__21079__$1,my_route,label,validate__12100__auto__,ufv___21089,output_schema21061_21090,input_schema21062_21091,input_checker21063_21092,output_checker21064_21093){
return (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$route.cljs$core$IFn$_invoke$arity$1(self__.data),self__.my_route)){
return om_tools.dom.element(React.DOM.span,self__.label,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.a,{"href": om_tools.dom.format_opts([cljs.core.str("#"),cljs.core.str(self__.my_route)].join('')), "onClick": om_tools.dom.format_opts(((function (___$1,data__$2,owner__$2,map__21081,map__21081__$1,my_route__$1,label__$1,data,owner,G__21078,map__21079,map__21079__$1,my_route,label,validate__12100__auto__,ufv___21089,output_schema21061_21090,input_schema21062_21091,input_checker21063_21092,output_checker21064_21093){
return (function (){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$route,self__.my_route);
});})(___$1,data__$2,owner__$2,map__21081,map__21081__$1,my_route__$1,label__$1,data,owner,G__21078,map__21079,map__21079__$1,my_route,label,validate__12100__auto__,ufv___21089,output_schema21061_21090,input_schema21062_21091,input_checker21063_21092,output_checker21064_21093))
)},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[self__.label],null))));
}
});})(data__$2,owner__$2,map__21081,map__21081__$1,my_route__$1,label__$1,data,owner,G__21078,map__21079,map__21079__$1,my_route,label,validate__12100__auto__,ufv___21089,output_schema21061_21090,input_schema21062_21091,input_checker21063_21092,output_checker21064_21093))
;

stepwise.app.t_stepwise$app21083.getBasis = ((function (data__$2,owner__$2,map__21081,map__21081__$1,my_route__$1,label__$1,data,owner,G__21078,map__21079,map__21079__$1,my_route,label,validate__12100__auto__,ufv___21089,output_schema21061_21090,input_schema21062_21091,input_checker21063_21092,output_checker21064_21093){
return (function (){
return new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$my_DASH_route,cljs.core.cst$sym$G__21078,cljs.core.cst$sym$owner,cljs.core.cst$sym$data,cljs.core.cst$sym$output_DASH_schema21061,cljs.core.with_meta(cljs.core.cst$sym$G__21067,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$map__21081,cljs.core.cst$sym$output_DASH_checker21064,cljs.core.with_meta(cljs.core.cst$sym$route_DASH_button,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$label], null),cljs.core.cst$sym$my_DASH_route,cljs.core.cst$kw$route], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema21061,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema21062], null)),cljs.core.cst$kw$doc,"Inputs: [data owner {:keys [label], my-route :route}]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$label], null),cljs.core.cst$sym$my_DASH_route,cljs.core.cst$kw$route], null)], null)))], null)),cljs.core.cst$sym$input_DASH_checker21063,cljs.core.cst$sym$label,cljs.core.cst$sym$map__21079,cljs.core.with_meta(cljs.core.cst$sym$G__21066,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$ufv__,cljs.core.with_meta(cljs.core.cst$sym$G__21065,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_schema21062,cljs.core.cst$sym$validate__12100__auto__,cljs.core.cst$sym$meta21084], null);
});})(data__$2,owner__$2,map__21081,map__21081__$1,my_route__$1,label__$1,data,owner,G__21078,map__21079,map__21079__$1,my_route,label,validate__12100__auto__,ufv___21089,output_schema21061_21090,input_schema21062_21091,input_checker21063_21092,output_checker21064_21093))
;

stepwise.app.t_stepwise$app21083.cljs$lang$type = true;

stepwise.app.t_stepwise$app21083.cljs$lang$ctorStr = "stepwise.app/t_stepwise$app21083";

stepwise.app.t_stepwise$app21083.cljs$lang$ctorPrWriter = ((function (data__$2,owner__$2,map__21081,map__21081__$1,my_route__$1,label__$1,data,owner,G__21078,map__21079,map__21079__$1,my_route,label,validate__12100__auto__,ufv___21089,output_schema21061_21090,input_schema21062_21091,input_checker21063_21092,output_checker21064_21093){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"stepwise.app/t_stepwise$app21083");
});})(data__$2,owner__$2,map__21081,map__21081__$1,my_route__$1,label__$1,data,owner,G__21078,map__21079,map__21079__$1,my_route,label,validate__12100__auto__,ufv___21089,output_schema21061_21090,input_schema21062_21091,input_checker21063_21092,output_checker21064_21093))
;

stepwise.app.__GT_t_stepwise$app21083 = ((function (data__$2,owner__$2,map__21081,map__21081__$1,my_route__$1,label__$1,data,owner,G__21078,map__21079,map__21079__$1,my_route,label,validate__12100__auto__,ufv___21089,output_schema21061_21090,input_schema21062_21091,input_checker21063_21092,output_checker21064_21093){
return (function stepwise$app$route_button_$___GT_t_stepwise$app21083(my_route__$2,G__21078__$2,owner__$3,data__$3,output_schema21061__$1,G__21067__$1,map__21081__$2,output_checker21064__$1,route_button__$1,input_checker21063__$1,label__$2,map__21079__$2,G__21066__$1,ufv____$1,G__21065__$1,input_schema21062__$1,validate__12100__auto____$1,meta21084){
return (new stepwise.app.t_stepwise$app21083(my_route__$2,G__21078__$2,owner__$3,data__$3,output_schema21061__$1,G__21067__$1,map__21081__$2,output_checker21064__$1,route_button__$1,input_checker21063__$1,label__$2,map__21079__$2,G__21066__$1,ufv____$1,G__21065__$1,input_schema21062__$1,validate__12100__auto____$1,meta21084));
});})(data__$2,owner__$2,map__21081,map__21081__$1,my_route__$1,label__$1,data,owner,G__21078,map__21079,map__21079__$1,my_route,label,validate__12100__auto__,ufv___21089,output_schema21061_21090,input_schema21062_21091,input_checker21063_21092,output_checker21064_21093))
;

}

return (new stepwise.app.t_stepwise$app21083(my_route__$1,G__21078__$1,owner__$2,data__$2,output_schema21061_21090,G__21067,map__21081__$1,output_checker21064_21093,stepwise$app$route_button,input_checker21063_21092,label__$1,map__21079__$1,G__21066,ufv___21089,G__21065,input_schema21062_21091,validate__12100__auto__,null));
break;
}
})();
if(cljs.core.truth_(validate__12100__auto__)){
var temp__4657__auto___21097 = (output_checker21064_21093.cljs$core$IFn$_invoke$arity$1 ? output_checker21064_21093.cljs$core$IFn$_invoke$arity$1(o__12103__auto__) : output_checker21064_21093.call(null,o__12103__auto__));
if(cljs.core.truth_(temp__4657__auto___21097)){
var error__12102__auto___21098 = temp__4657__auto___21097;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$route_DASH_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12102__auto___21098], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema21061_21090,cljs.core.cst$kw$value,o__12103__auto__,cljs.core.cst$kw$error,error__12102__auto___21098], null));
} else {
}
} else {
}

return o__12103__auto__;
});})(ufv___21089,output_schema21061_21090,input_schema21062_21091,input_checker21063_21092,output_checker21064_21093))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(stepwise.app.route_button),schema.core.make_fn_schema(output_schema21061_21090,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21062_21091], null)));

stepwise.app.__GT_route_button = (function stepwise$app$__GT_route_button(var_args){
var args21086 = [];
var len__7214__auto___21099 = arguments.length;
var i__7215__auto___21100 = (0);
while(true){
if((i__7215__auto___21100 < len__7214__auto___21099)){
args21086.push((arguments[i__7215__auto___21100]));

var G__21101 = (i__7215__auto___21100 + (1));
i__7215__auto___21100 = G__21101;
continue;
} else {
}
break;
}

var G__21088 = args21086.length;
switch (G__21088) {
case 1:
return stepwise.app.__GT_route_button.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stepwise.app.__GT_route_button.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21086.length)].join('')));

}
});

stepwise.app.__GT_route_button.cljs$core$IFn$_invoke$arity$1 = (function (cursor__20546__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(stepwise.app.route_button,cursor__20546__auto__);
});

stepwise.app.__GT_route_button.cljs$core$IFn$_invoke$arity$2 = (function (cursor__20546__auto__,m21060){
return om.core.build.cljs$core$IFn$_invoke$arity$3(stepwise.app.route_button,cursor__20546__auto__,m21060);
});

stepwise.app.__GT_route_button.cljs$lang$maxFixedArity = 2;

var ufv___21135 = schema.utils.use_fn_validation;
var output_schema21104_21136 = schema.core.Any;
var input_schema21105_21137 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker21106_21138 = schema.core.checker(input_schema21105_21137);
var output_checker21107_21139 = schema.core.checker(output_schema21104_21136);
/**
 * Inputs: [data owner]
 */
stepwise.app.view = ((function (ufv___21135,output_schema21104_21136,input_schema21105_21137,input_checker21106_21138,output_checker21107_21139){
return (function stepwise$app$view(G__21108,G__21109){
var validate__12100__auto__ = ufv___21135.get_cell();
if(cljs.core.truth_(validate__12100__auto__)){
var args__12101__auto___21140 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21108,G__21109], null);
var temp__4657__auto___21141 = (input_checker21106_21138.cljs$core$IFn$_invoke$arity$1 ? input_checker21106_21138.cljs$core$IFn$_invoke$arity$1(args__12101__auto___21140) : input_checker21106_21138.call(null,args__12101__auto___21140));
if(cljs.core.truth_(temp__4657__auto___21141)){
var error__12102__auto___21142 = temp__4657__auto___21141;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12102__auto___21142], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema21105_21137,cljs.core.cst$kw$value,args__12101__auto___21140,cljs.core.cst$kw$error,error__12102__auto___21142], null));
} else {
}
} else {
}

var o__12103__auto__ = (function (){var data = G__21108;
var owner = G__21109;
while(true){
if(typeof stepwise.app.t_stepwise$app21121 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
stepwise.app.t_stepwise$app21121 = (function (G__21109,owner,view,data,output_checker21107,G__21108,output_schema21104,input_checker21106,input_schema21105,ufv__,validate__12100__auto__,meta21122){
this.G__21109 = G__21109;
this.owner = owner;
this.view = view;
this.data = data;
this.output_checker21107 = output_checker21107;
this.G__21108 = G__21108;
this.output_schema21104 = output_schema21104;
this.input_checker21106 = input_checker21106;
this.input_schema21105 = input_schema21105;
this.ufv__ = ufv__;
this.validate__12100__auto__ = validate__12100__auto__;
this.meta21122 = meta21122;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
stepwise.app.t_stepwise$app21121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__12100__auto__,ufv___21135,output_schema21104_21136,input_schema21105_21137,input_checker21106_21138,output_checker21107_21139){
return (function (_21123,meta21122__$1){
var self__ = this;
var _21123__$1 = this;
return (new stepwise.app.t_stepwise$app21121(self__.G__21109,self__.owner,self__.view,self__.data,self__.output_checker21107,self__.G__21108,self__.output_schema21104,self__.input_checker21106,self__.input_schema21105,self__.ufv__,self__.validate__12100__auto__,meta21122__$1));
});})(validate__12100__auto__,ufv___21135,output_schema21104_21136,input_schema21105_21137,input_checker21106_21138,output_checker21107_21139))
;

stepwise.app.t_stepwise$app21121.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__12100__auto__,ufv___21135,output_schema21104_21136,input_schema21105_21137,input_checker21106_21138,output_checker21107_21139){
return (function (_21123){
var self__ = this;
var _21123__$1 = this;
return self__.meta21122;
});})(validate__12100__auto__,ufv___21135,output_schema21104_21136,input_schema21105_21137,input_checker21106_21138,output_checker21107_21139))
;

stepwise.app.t_stepwise$app21121.prototype.om$core$IDisplayName$ = true;

stepwise.app.t_stepwise$app21121.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__12100__auto__,ufv___21135,output_schema21104_21136,input_schema21105_21137,input_checker21106_21138,output_checker21107_21139){
return (function (_){
var self__ = this;
var ___$1 = this;
return "view";
});})(validate__12100__auto__,ufv___21135,output_schema21104_21136,input_schema21105_21137,input_checker21106_21138,output_checker21107_21139))
;

stepwise.app.t_stepwise$app21121.prototype.om$core$IRender$ = true;

stepwise.app.t_stepwise$app21121.prototype.om$core$IRender$render$arity$1 = ((function (validate__12100__auto__,ufv___21135,output_schema21104_21136,input_schema21105_21137,input_checker21106_21138,output_checker21107_21139){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__21124 = self__.data;
var map__21124__$1 = ((((!((map__21124 == null)))?((((map__21124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21124):map__21124);
var examples = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21124__$1,cljs.core.cst$kw$examples);
var route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21124__$1,cljs.core.cst$kw$route);
return om_tools.dom.element(React.DOM.div,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": "menu"},cljs.core.flatten((new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.strong(null,"Examples:"),(function (){var iter__6928__auto__ = ((function (map__21124,map__21124__$1,examples,route,___$1,validate__12100__auto__,ufv___21135,output_schema21104_21136,input_schema21105_21137,input_checker21106_21138,output_checker21107_21139){
return (function stepwise$app$view_$_iter__21126(s__21127){
return (new cljs.core.LazySeq(null,((function (map__21124,map__21124__$1,examples,route,___$1,validate__12100__auto__,ufv___21135,output_schema21104_21136,input_schema21105_21137,input_checker21106_21138,output_checker21107_21139){
return (function (){
var s__21127__$1 = s__21127;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__21127__$1);
if(temp__4657__auto__){
var s__21127__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21127__$2)){
var c__6926__auto__ = cljs.core.chunk_first(s__21127__$2);
var size__6927__auto__ = cljs.core.count(c__6926__auto__);
var b__21129 = cljs.core.chunk_buffer(size__6927__auto__);
if((function (){var i__21128 = (0);
while(true){
if((i__21128 < size__6927__auto__)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6926__auto__,i__21128);
cljs.core.chunk_append(b__21129,om.core.build.cljs$core$IFn$_invoke$arity$3(stepwise.app.route_button,self__.data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,n,cljs.core.cst$kw$route,[cljs.core.str("example-"),cljs.core.str(n)].join('')], null)], null)));

var G__21143 = (i__21128 + (1));
i__21128 = G__21143;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21129),stepwise$app$view_$_iter__21126(cljs.core.chunk_rest(s__21127__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21129),null);
}
} else {
var n = cljs.core.first(s__21127__$2);
return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(stepwise.app.route_button,self__.data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,n,cljs.core.cst$kw$route,[cljs.core.str("example-"),cljs.core.str(n)].join('')], null)], null)),stepwise$app$view_$_iter__21126(cljs.core.rest(s__21127__$2)));
}
} else {
return null;
}
break;
}
});})(map__21124,map__21124__$1,examples,route,___$1,validate__12100__auto__,ufv___21135,output_schema21104_21136,input_schema21105_21137,input_checker21106_21138,output_checker21107_21139))
,null,null));
});})(map__21124,map__21124__$1,examples,route,___$1,validate__12100__auto__,ufv___21135,output_schema21104_21136,input_schema21105_21137,input_checker21106_21138,output_checker21107_21139))
;
return iter__6928__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(examples))));
})(),React.DOM.span(null,"|"),om.core.build.cljs$core$IFn$_invoke$arity$3(stepwise.app.route_button,self__.data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,"Sandbox",cljs.core.cst$kw$route,"sandbox"], null)], null))],null)))),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var temp__4655__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(examples,route);
if(cljs.core.truth_(temp__4655__auto__)){
var example_data = temp__4655__auto__;
return om.core.build.cljs$core$IFn$_invoke$arity$2(stepwise.app.example,example_data);
} else {
return om.core.build.cljs$core$IFn$_invoke$arity$2(stepwise.app.sandbox,cljs.core.cst$kw$sandbox.cljs$core$IFn$_invoke$arity$1(self__.data));
}
})()],null)));
});})(validate__12100__auto__,ufv___21135,output_schema21104_21136,input_schema21105_21137,input_checker21106_21138,output_checker21107_21139))
;

stepwise.app.t_stepwise$app21121.getBasis = ((function (validate__12100__auto__,ufv___21135,output_schema21104_21136,input_schema21105_21137,input_checker21106_21138,output_checker21107_21139){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$G__21109,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$owner,cljs.core.with_meta(cljs.core.cst$sym$view,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema21104,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema21105], null)),cljs.core.cst$kw$doc,"Inputs: [data owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$data,cljs.core.cst$sym$output_DASH_checker21107,cljs.core.with_meta(cljs.core.cst$sym$G__21108,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$output_DASH_schema21104,cljs.core.cst$sym$input_DASH_checker21106,cljs.core.cst$sym$input_DASH_schema21105,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$validate__12100__auto__,cljs.core.cst$sym$meta21122], null);
});})(validate__12100__auto__,ufv___21135,output_schema21104_21136,input_schema21105_21137,input_checker21106_21138,output_checker21107_21139))
;

stepwise.app.t_stepwise$app21121.cljs$lang$type = true;

stepwise.app.t_stepwise$app21121.cljs$lang$ctorStr = "stepwise.app/t_stepwise$app21121";

stepwise.app.t_stepwise$app21121.cljs$lang$ctorPrWriter = ((function (validate__12100__auto__,ufv___21135,output_schema21104_21136,input_schema21105_21137,input_checker21106_21138,output_checker21107_21139){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"stepwise.app/t_stepwise$app21121");
});})(validate__12100__auto__,ufv___21135,output_schema21104_21136,input_schema21105_21137,input_checker21106_21138,output_checker21107_21139))
;

stepwise.app.__GT_t_stepwise$app21121 = ((function (validate__12100__auto__,ufv___21135,output_schema21104_21136,input_schema21105_21137,input_checker21106_21138,output_checker21107_21139){
return (function stepwise$app$view_$___GT_t_stepwise$app21121(G__21109__$1,owner__$1,view__$1,data__$1,output_checker21107__$1,G__21108__$1,output_schema21104__$1,input_checker21106__$1,input_schema21105__$1,ufv____$1,validate__12100__auto____$1,meta21122){
return (new stepwise.app.t_stepwise$app21121(G__21109__$1,owner__$1,view__$1,data__$1,output_checker21107__$1,G__21108__$1,output_schema21104__$1,input_checker21106__$1,input_schema21105__$1,ufv____$1,validate__12100__auto____$1,meta21122));
});})(validate__12100__auto__,ufv___21135,output_schema21104_21136,input_schema21105_21137,input_checker21106_21138,output_checker21107_21139))
;

}

return (new stepwise.app.t_stepwise$app21121(G__21109,owner,stepwise$app$view,data,output_checker21107_21139,G__21108,output_schema21104_21136,input_checker21106_21138,input_schema21105_21137,ufv___21135,validate__12100__auto__,null));
break;
}
})();
if(cljs.core.truth_(validate__12100__auto__)){
var temp__4657__auto___21144 = (output_checker21107_21139.cljs$core$IFn$_invoke$arity$1 ? output_checker21107_21139.cljs$core$IFn$_invoke$arity$1(o__12103__auto__) : output_checker21107_21139.call(null,o__12103__auto__));
if(cljs.core.truth_(temp__4657__auto___21144)){
var error__12102__auto___21145 = temp__4657__auto___21144;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12102__auto___21145], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema21104_21136,cljs.core.cst$kw$value,o__12103__auto__,cljs.core.cst$kw$error,error__12102__auto___21145], null));
} else {
}
} else {
}

return o__12103__auto__;
});})(ufv___21135,output_schema21104_21136,input_schema21105_21137,input_checker21106_21138,output_checker21107_21139))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(stepwise.app.view),schema.core.make_fn_schema(output_schema21104_21136,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21105_21137], null)));

stepwise.app.__GT_view = (function stepwise$app$__GT_view(var_args){
var args21132 = [];
var len__7214__auto___21146 = arguments.length;
var i__7215__auto___21147 = (0);
while(true){
if((i__7215__auto___21147 < len__7214__auto___21146)){
args21132.push((arguments[i__7215__auto___21147]));

var G__21148 = (i__7215__auto___21147 + (1));
i__7215__auto___21147 = G__21148;
continue;
} else {
}
break;
}

var G__21134 = args21132.length;
switch (G__21134) {
case 1:
return stepwise.app.__GT_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stepwise.app.__GT_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21132.length)].join('')));

}
});

stepwise.app.__GT_view.cljs$core$IFn$_invoke$arity$1 = (function (cursor__20546__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(stepwise.app.view,cursor__20546__auto__);
});

stepwise.app.__GT_view.cljs$core$IFn$_invoke$arity$2 = (function (cursor__20546__auto__,m21103){
return om.core.build.cljs$core$IFn$_invoke$arity$3(stepwise.app.view,cursor__20546__auto__,m21103);
});

stepwise.app.__GT_view.cljs$lang$maxFixedArity = 2;
om.core.root(stepwise.app.view,stepwise.app.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,document.getElementById("app")], null));
