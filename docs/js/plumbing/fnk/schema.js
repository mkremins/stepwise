// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.utils');
plumbing.fnk.schema.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$proto_DASH_sym,cljs.core.cst$sym$s_SLASH_Schema,cljs.core.cst$kw$proto_DASH_pred,(function (p1__12504__12505__auto__){
if(!((p1__12504__12505__auto__ == null))){
if((false) || (p1__12504__12505__auto__.schema$core$Schema$)){
return true;
} else {
if((!p1__12504__12505__auto__.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,p1__12504__12505__auto__);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,p1__12504__12505__auto__);
}
})], null));
plumbing.fnk.schema.InputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.eq(schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword], 0)),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,cljs.core.cst$sym$input),schema.core.one(plumbing.fnk.schema.OutputSchema,cljs.core.cst$sym$output)], null);
plumbing.fnk.schema.GraphInputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.OptionalKey,schema.core.Keyword], 0)),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphInputSchema,cljs.core.cst$sym$input),schema.core.one(plumbing.fnk.schema.MapOutputSchema,cljs.core.cst$sym$output)], null);
/**
 * Like (assert (distinct? things)) but with a more helpful error message.
 */
plumbing.fnk.schema.assert_distinct = (function plumbing$fnk$schema$assert_distinct(things){
var repeated_things = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__13766_SHARP_){
return (cljs.core.val(p1__13766_SHARP_) > (1));
}),cljs.core.frequencies(things)));
if(cljs.core.empty_QMARK_(repeated_things)){
return null;
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Got repeated items (expected distinct): %s",cljs.core.array_seq([repeated_things], 0))));
}
});
/**
 * Like (get m k), but throws if k is not present in m.
 */
plumbing.fnk.schema.safe_get = (function plumbing$fnk$schema$safe_get(m,k,key_path){
if(cljs.core.map_QMARK_(m)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected a map at key-path %s, got type %s",cljs.core.array_seq([key_path,schema.utils.type_of(m)], 0))));
}

var vec__13768 = cljs.core.find(m,k);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13768,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13768,(1),null);
var p = vec__13768;
if(cljs.core.truth_(p)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k,cljs.core.keys(m)], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$missing_DASH_key,cljs.core.cst$kw$key,k,cljs.core.cst$kw$map,m], null));
}

return v;
});
plumbing.fnk.schema.non_map_union = (function plumbing$fnk$schema$non_map_union(s1,s2){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s1,s2)){
return s1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s1,schema.core.Any)){
return s2;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s2,schema.core.Any)){
return s1;
} else {
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s1,s2], 0));

}
}
}
});
/**
 * Return a difference of schmas s1 and s2, where one is not a map.
 * Punt for now, assuming s2 always satisfies s1.
 */
plumbing.fnk.schema.non_map_diff = (function plumbing$fnk$schema$non_map_diff(s1,s2){
return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function plumbing$fnk$schema$map_schema_QMARK_(m){
return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___13774 = schema.utils.use_fn_validation;
var output_schema13769_13775 = schema.core.maybe(schema.core.pair(schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema13770_13776 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$k,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker13771_13777 = schema.core.checker(input_schema13770_13776);
var output_checker13772_13778 = schema.core.checker(output_schema13769_13775);
/**
 * Inputs: [k]
 *   Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
 * 
 *   Given a possibly-unevaluated schema map key form, unpack an explicit keyword
 * and optional? flag, or return nil for a non-explicit key
 */
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___13774,output_schema13769_13775,input_schema13770_13776,input_checker13771_13777,output_checker13772_13778){
return (function plumbing$fnk$schema$unwrap_schema_form_key(G__13773){
var validate__12100__auto__ = ufv___13774.get_cell();
if(cljs.core.truth_(validate__12100__auto__)){
var args__12101__auto___13779 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__13773], null);
var temp__4657__auto___13780 = (input_checker13771_13777.cljs$core$IFn$_invoke$arity$1 ? input_checker13771_13777.cljs$core$IFn$_invoke$arity$1(args__12101__auto___13779) : input_checker13771_13777.call(null,args__12101__auto___13779));
if(cljs.core.truth_(temp__4657__auto___13780)){
var error__12102__auto___13781 = temp__4657__auto___13780;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$unwrap_DASH_schema_DASH_form_DASH_key,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$s_SLASH_maybe,cljs.core.list(cljs.core.cst$sym$s_SLASH_pair,cljs.core.cst$sym$s_SLASH_Keyword,"k",cljs.core.cst$sym$s_SLASH_Bool,"optional?")),cljs.core.cst$kw$doc,"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12102__auto___13781], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema13770_13776,cljs.core.cst$kw$value,args__12101__auto___13779,cljs.core.cst$kw$error,error__12102__auto___13781], null));
} else {
}
} else {
}

var o__12103__auto__ = (function (){var k = G__13773;
while(true){
if(cljs.core.truth_(schema.core.specific_key_QMARK_(k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key(k),schema.core.required_key_QMARK_(k)], null);
} else {
if((cljs.core.sequential_QMARK_(k)) && (!(cljs.core.vector_QMARK_(k))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(k),(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(k),cljs.core.cst$sym$schema$core_SLASH_optional_DASH_key))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(k),false], null);
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(validate__12100__auto__)){
var temp__4657__auto___13782 = (output_checker13772_13778.cljs$core$IFn$_invoke$arity$1 ? output_checker13772_13778.cljs$core$IFn$_invoke$arity$1(o__12103__auto__) : output_checker13772_13778.call(null,o__12103__auto__));
if(cljs.core.truth_(temp__4657__auto___13782)){
var error__12102__auto___13783 = temp__4657__auto___13782;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$unwrap_DASH_schema_DASH_form_DASH_key,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$s_SLASH_maybe,cljs.core.list(cljs.core.cst$sym$s_SLASH_pair,cljs.core.cst$sym$s_SLASH_Keyword,"k",cljs.core.cst$sym$s_SLASH_Bool,"optional?")),cljs.core.cst$kw$doc,"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12102__auto___13783], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema13769_13775,cljs.core.cst$kw$value,o__12103__auto__,cljs.core.cst$kw$error,error__12102__auto___13783], null));
} else {
}
} else {
}

return o__12103__auto__;
});})(ufv___13774,output_schema13769_13775,input_schema13770_13776,input_checker13771_13777,output_checker13772_13778))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema(output_schema13769_13775,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema13770_13776], null)));
var ufv___13789 = schema.utils.use_fn_validation;
var output_schema13784_13790 = cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema13785_13791 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$s,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker13786_13792 = schema.core.checker(input_schema13785_13791);
var output_checker13787_13793 = schema.core.checker(output_schema13784_13790);
/**
 * Inputs: [s]
 *   Returns: {s/Keyword s/Bool}
 * 
 *   Given a possibly-unevaluated map schema, return a map from bare keyword to true
 * (for required) or false (for optional)
 */
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___13789,output_schema13784_13790,input_schema13785_13791,input_checker13786_13792,output_checker13787_13793){
return (function plumbing$fnk$schema$explicit_schema_key_map(G__13788){
var validate__12100__auto__ = ufv___13789.get_cell();
if(cljs.core.truth_(validate__12100__auto__)){
var args__12101__auto___13794 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__13788], null);
var temp__4657__auto___13795 = (input_checker13786_13792.cljs$core$IFn$_invoke$arity$1 ? input_checker13786_13792.cljs$core$IFn$_invoke$arity$1(args__12101__auto___13794) : input_checker13786_13792.call(null,args__12101__auto___13794));
if(cljs.core.truth_(temp__4657__auto___13795)){
var error__12102__auto___13796 = temp__4657__auto___13795;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$explicit_DASH_schema_DASH_key_DASH_map,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$s_SLASH_Keyword,cljs.core.cst$sym$s_SLASH_Bool], null),cljs.core.cst$kw$doc,"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12102__auto___13796], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema13785_13791,cljs.core.cst$kw$value,args__12101__auto___13794,cljs.core.cst$kw$error,error__12102__auto___13796], null));
} else {
}
} else {
}

var o__12103__auto__ = (function (){var s = G__13788;
while(true){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys(s)));
break;
}
})();
if(cljs.core.truth_(validate__12100__auto__)){
var temp__4657__auto___13797 = (output_checker13787_13793.cljs$core$IFn$_invoke$arity$1 ? output_checker13787_13793.cljs$core$IFn$_invoke$arity$1(o__12103__auto__) : output_checker13787_13793.call(null,o__12103__auto__));
if(cljs.core.truth_(temp__4657__auto___13797)){
var error__12102__auto___13798 = temp__4657__auto___13797;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$explicit_DASH_schema_DASH_key_DASH_map,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$s_SLASH_Keyword,cljs.core.cst$sym$s_SLASH_Bool], null),cljs.core.cst$kw$doc,"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12102__auto___13798], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema13784_13790,cljs.core.cst$kw$value,o__12103__auto__,cljs.core.cst$kw$error,error__12102__auto___13798], null));
} else {
}
} else {
}

return o__12103__auto__;
});})(ufv___13789,output_schema13784_13790,input_schema13785_13791,input_checker13786_13792,output_checker13787_13793))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema(output_schema13784_13790,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema13785_13791], null)));
var ufv___13804 = schema.utils.use_fn_validation;
var output_schema13799_13805 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),cljs.core.cst$sym$required),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),cljs.core.cst$sym$optional)], null);
var input_schema13800_13806 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),cljs.core.with_meta(cljs.core.cst$sym$s,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$s_SLASH_Keyword,cljs.core.cst$sym$s_SLASH_Bool], null)], null)))], null);
var input_checker13801_13807 = schema.core.checker(input_schema13800_13806);
var output_checker13802_13808 = schema.core.checker(output_schema13799_13805);
/**
 * Inputs: [s :- {s/Keyword s/Bool}]
 *   Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
 * 
 *   Given output of explicit-schema-key-map, split into seq [req opt].
 */
plumbing.fnk.schema.split_schema_keys = ((function (ufv___13804,output_schema13799_13805,input_schema13800_13806,input_checker13801_13807,output_checker13802_13808){
return (function plumbing$fnk$schema$split_schema_keys(G__13803){
var validate__12100__auto__ = ufv___13804.get_cell();
if(cljs.core.truth_(validate__12100__auto__)){
var args__12101__auto___13809 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__13803], null);
var temp__4657__auto___13810 = (input_checker13801_13807.cljs$core$IFn$_invoke$arity$1 ? input_checker13801_13807.cljs$core$IFn$_invoke$arity$1(args__12101__auto___13809) : input_checker13801_13807.call(null,args__12101__auto___13809));
if(cljs.core.truth_(temp__4657__auto___13810)){
var error__12102__auto___13811 = temp__4657__auto___13810;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$split_DASH_schema_DASH_keys,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$s_SLASH_one,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$required)),cljs.core.list(cljs.core.cst$sym$s_SLASH_one,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$optional))], null),cljs.core.cst$kw$doc,"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12102__auto___13811], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema13800_13806,cljs.core.cst$kw$value,args__12101__auto___13809,cljs.core.cst$kw$error,error__12102__auto___13811], null));
} else {
}
} else {
}

var o__12103__auto__ = (function (){var s = G__13803;
while(true){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.key),cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__12100__auto__)){
var temp__4657__auto___13812 = (output_checker13802_13808.cljs$core$IFn$_invoke$arity$1 ? output_checker13802_13808.cljs$core$IFn$_invoke$arity$1(o__12103__auto__) : output_checker13802_13808.call(null,o__12103__auto__));
if(cljs.core.truth_(temp__4657__auto___13812)){
var error__12102__auto___13813 = temp__4657__auto___13812;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$split_DASH_schema_DASH_keys,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$s_SLASH_one,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$required)),cljs.core.list(cljs.core.cst$sym$s_SLASH_one,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$optional))], null),cljs.core.cst$kw$doc,"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12102__auto___13813], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema13799_13805,cljs.core.cst$kw$value,o__12103__auto__,cljs.core.cst$kw$error,error__12102__auto___13813], null));
} else {
}
} else {
}

return o__12103__auto__;
});})(ufv___13804,output_schema13799_13805,input_schema13800_13806,input_checker13801_13807,output_checker13802_13808))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema(output_schema13799_13805,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema13800_13806], null)));
/**
 * Like merge-with, but also projects keys to a smaller space and merges them similar to the
 * values.
 */
plumbing.fnk.schema.merge_on_with = (function plumbing$fnk$schema$merge_on_with(var_args){
var args__7221__auto__ = [];
var len__7214__auto___13821 = arguments.length;
var i__7215__auto___13822 = (0);
while(true){
if((i__7215__auto___13822 < len__7214__auto___13821)){
args__7221__auto__.push((arguments[i__7215__auto___13822]));

var G__13823 = (i__7215__auto___13822 + (1));
i__7215__auto___13822 = G__13823;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((3) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((3)),(0))):null);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7222__auto__);
});

plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic = (function (key_project,key_combine,val_combine,maps){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__13818){
var vec__13819 = p__13818;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13819,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13819,(1),null);
var pk = (key_project.cljs$core$IFn$_invoke$arity$1 ? key_project.cljs$core$IFn$_invoke$arity$1(k) : key_project.call(null,k));
var temp__4655__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pk);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__13820 = temp__4655__auto__;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13820,(0),null);
var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13820,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(key_combine.cljs$core$IFn$_invoke$arity$2 ? key_combine.cljs$core$IFn$_invoke$arity$2(ok,k) : key_combine.call(null,ok,k)),(val_combine.cljs$core$IFn$_invoke$arity$2 ? val_combine.cljs$core$IFn$_invoke$arity$2(ov,v) : val_combine.call(null,ov,v))], null));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,maps))));
});

plumbing.fnk.schema.merge_on_with.cljs$lang$maxFixedArity = (3);

plumbing.fnk.schema.merge_on_with.cljs$lang$applyTo = (function (seq13814){
var G__13815 = cljs.core.first(seq13814);
var seq13814__$1 = cljs.core.next(seq13814);
var G__13816 = cljs.core.first(seq13814__$1);
var seq13814__$2 = cljs.core.next(seq13814__$1);
var G__13817 = cljs.core.first(seq13814__$2);
var seq13814__$3 = cljs.core.next(seq13814__$2);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(G__13815,G__13816,G__13817,seq13814__$3);
});
var ufv___13831 = schema.utils.use_fn_validation;
var output_schema13825_13832 = plumbing.fnk.schema.InputSchema;
var input_schema13826_13833 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,cljs.core.with_meta(cljs.core.cst$sym$i1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema], null))),schema.core.one(plumbing.fnk.schema.InputSchema,cljs.core.with_meta(cljs.core.cst$sym$i2,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema], null)))], null);
var input_checker13827_13834 = schema.core.checker(input_schema13826_13833);
var output_checker13828_13835 = schema.core.checker(output_schema13825_13832);
/**
 * Inputs: [i1 :- InputSchema i2 :- InputSchema]
 *   Returns: InputSchema
 * 
 *   Returns a minimal input schema schema that entails satisfaction of both s1 and s2
 */
plumbing.fnk.schema.union_input_schemata = ((function (ufv___13831,output_schema13825_13832,input_schema13826_13833,input_checker13827_13834,output_checker13828_13835){
return (function plumbing$fnk$schema$union_input_schemata(G__13829,G__13830){
var validate__12100__auto__ = ufv___13831.get_cell();
if(cljs.core.truth_(validate__12100__auto__)){
var args__12101__auto___13836 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__13829,G__13830], null);
var temp__4657__auto___13837 = (input_checker13827_13834.cljs$core$IFn$_invoke$arity$1 ? input_checker13827_13834.cljs$core$IFn$_invoke$arity$1(args__12101__auto___13836) : input_checker13827_13834.call(null,args__12101__auto___13836));
if(cljs.core.truth_(temp__4657__auto___13837)){
var error__12102__auto___13838 = temp__4657__auto___13837;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$union_DASH_input_DASH_schemata,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema,cljs.core.cst$kw$doc,"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12102__auto___13838], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema13826_13833,cljs.core.cst$kw$value,args__12101__auto___13836,cljs.core.cst$kw$error,error__12102__auto___13838], null));
} else {
}
} else {
}

var o__12103__auto__ = (function (){var i1 = G__13829;
var i2 = G__13830;
while(true){
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(((function (validate__12100__auto__,ufv___13831,output_schema13825_13832,input_schema13826_13833,input_checker13827_13834,output_checker13828_13835){
return (function (p1__13824_SHARP_){
if(cljs.core.truth_(schema.core.specific_key_QMARK_(p1__13824_SHARP_))){
return schema.core.explicit_schema_key(p1__13824_SHARP_);
} else {
return cljs.core.cst$kw$extra;
}
});})(validate__12100__auto__,ufv___13831,output_schema13825_13832,input_schema13826_13833,input_checker13827_13834,output_checker13828_13835))
,((function (validate__12100__auto__,ufv___13831,output_schema13825_13832,input_schema13826_13833,input_checker13827_13834,output_checker13828_13835){
return (function (k1,k2){
if(cljs.core.truth_(schema.core.required_key_QMARK_(k1))){
return k1;
} else {
if(cljs.core.truth_(schema.core.required_key_QMARK_(k2))){
return k2;
} else {
if(cljs.core.truth_(schema.core.optional_key_QMARK_(k1))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k1,k2)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$k1,cljs.core.cst$sym$k2)], 0)))].join('')));
}

return k1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k1,k2)){
return k1;
} else {
throw (new Error(schema.utils.format_STAR_("Only one extra schema allowed")));


}
}
}
}
});})(validate__12100__auto__,ufv___13831,output_schema13825_13832,input_schema13826_13833,input_checker13827_13834,output_checker13828_13835))
,((function (validate__12100__auto__,ufv___13831,output_schema13825_13832,input_schema13826_13833,input_checker13827_13834,output_checker13828_13835){
return (function (s1,s2){
if(cljs.core.truth_((function (){var and__6144__auto__ = plumbing.fnk.schema.map_schema_QMARK_(s1);
if(cljs.core.truth_(and__6144__auto__)){
return plumbing.fnk.schema.map_schema_QMARK_(s2);
} else {
return and__6144__auto__;
}
})())){
return plumbing$fnk$schema$union_input_schemata(s1,s2);
} else {
return plumbing.fnk.schema.non_map_union(s1,s2);
}
});})(validate__12100__auto__,ufv___13831,output_schema13825_13832,input_schema13826_13833,input_checker13827_13834,output_checker13828_13835))
,cljs.core.array_seq([i1,i2], 0));
break;
}
})();
if(cljs.core.truth_(validate__12100__auto__)){
var temp__4657__auto___13839 = (output_checker13828_13835.cljs$core$IFn$_invoke$arity$1 ? output_checker13828_13835.cljs$core$IFn$_invoke$arity$1(o__12103__auto__) : output_checker13828_13835.call(null,o__12103__auto__));
if(cljs.core.truth_(temp__4657__auto___13839)){
var error__12102__auto___13840 = temp__4657__auto___13839;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$union_DASH_input_DASH_schemata,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema,cljs.core.cst$kw$doc,"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12102__auto___13840], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema13825_13832,cljs.core.cst$kw$value,o__12103__auto__,cljs.core.cst$kw$error,error__12102__auto___13840], null));
} else {
}
} else {
}

return o__12103__auto__;
});})(ufv___13831,output_schema13825_13832,input_schema13826_13833,input_checker13827_13834,output_checker13828_13835))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema(output_schema13825_13832,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema13826_13833], null)));
var ufv___13846 = schema.utils.use_fn_validation;
var output_schema13841_13847 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema13842_13848 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,cljs.core.with_meta(cljs.core.cst$sym$input_DASH_schema,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema], null)))], null);
var input_checker13843_13849 = schema.core.checker(input_schema13842_13848);
var output_checker13844_13850 = schema.core.checker(output_schema13841_13847);
/**
 * Inputs: [input-schema :- InputSchema]
 *   Returns: [s/Keyword]
 * 
 *   Which top-level keys are required (i.e., non-false) by this input schema.
 */
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___13846,output_schema13841_13847,input_schema13842_13848,input_checker13843_13849,output_checker13844_13850){
return (function plumbing$fnk$schema$required_toplevel_keys(G__13845){
var validate__12100__auto__ = ufv___13846.get_cell();
if(cljs.core.truth_(validate__12100__auto__)){
var args__12101__auto___13851 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__13845], null);
var temp__4657__auto___13852 = (input_checker13843_13849.cljs$core$IFn$_invoke$arity$1 ? input_checker13843_13849.cljs$core$IFn$_invoke$arity$1(args__12101__auto___13851) : input_checker13843_13849.call(null,args__12101__auto___13851));
if(cljs.core.truth_(temp__4657__auto___13852)){
var error__12102__auto___13853 = temp__4657__auto___13852;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$required_DASH_toplevel_DASH_keys,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.cst$kw$doc,"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12102__auto___13853], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema13842_13848,cljs.core.cst$kw$value,args__12101__auto___13851,cljs.core.cst$kw$error,error__12102__auto___13853], null));
} else {
}
} else {
}

var o__12103__auto__ = (function (){var input_schema = G__13845;
while(true){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__12100__auto__,ufv___13846,output_schema13841_13847,input_schema13842_13848,input_checker13843_13849,output_checker13844_13850){
return (function (k){
if(cljs.core.truth_(schema.core.required_key_QMARK_(k))){
return schema.core.explicit_schema_key(k);
} else {
return null;
}
});})(validate__12100__auto__,ufv___13846,output_schema13841_13847,input_schema13842_13848,input_checker13843_13849,output_checker13844_13850))
,cljs.core.keys(input_schema));
break;
}
})();
if(cljs.core.truth_(validate__12100__auto__)){
var temp__4657__auto___13854 = (output_checker13844_13850.cljs$core$IFn$_invoke$arity$1 ? output_checker13844_13850.cljs$core$IFn$_invoke$arity$1(o__12103__auto__) : output_checker13844_13850.call(null,o__12103__auto__));
if(cljs.core.truth_(temp__4657__auto___13854)){
var error__12102__auto___13855 = temp__4657__auto___13854;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$required_DASH_toplevel_DASH_keys,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.cst$kw$doc,"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12102__auto___13855], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema13841_13847,cljs.core.cst$kw$value,o__12103__auto__,cljs.core.cst$kw$error,error__12102__auto___13855], null));
} else {
}
} else {
}

return o__12103__auto__;
});})(ufv___13846,output_schema13841_13847,input_schema13842_13848,input_checker13843_13849,output_checker13844_13850))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema(output_schema13841_13847,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema13842_13848], null)));
/**
 * Guess an output schema for an expr.  Currently just looks for literal map structure and
 * all keyword keys.
 */
plumbing.fnk.schema.guess_expr_output_schema = (function plumbing$fnk$schema$guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_(expr)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__6928__auto__ = (function plumbing$fnk$schema$guess_expr_output_schema_$_iter__13866(s__13867){
return (new cljs.core.LazySeq(null,(function (){
var s__13867__$1 = s__13867;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13867__$1);
if(temp__4657__auto__){
var s__13867__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13867__$2)){
var c__6926__auto__ = cljs.core.chunk_first(s__13867__$2);
var size__6927__auto__ = cljs.core.count(c__6926__auto__);
var b__13869 = cljs.core.chunk_buffer(size__6927__auto__);
if((function (){var i__13868 = (0);
while(true){
if((i__13868 < size__6927__auto__)){
var vec__13874 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6926__auto__,i__13868);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13874,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13874,(1),null);
cljs.core.chunk_append(b__13869,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema(v)], null));

var G__13876 = (i__13868 + (1));
i__13868 = G__13876;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13869),plumbing$fnk$schema$guess_expr_output_schema_$_iter__13866(cljs.core.chunk_rest(s__13867__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13869),null);
}
} else {
var vec__13875 = cljs.core.first(s__13867__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13875,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13875,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema(v)], null),plumbing$fnk$schema$guess_expr_output_schema_$_iter__13866(cljs.core.rest(s__13867__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6928__auto__(expr);
})());
} else {
return cljs.core.cst$sym$schema$core_SLASH_Any;
}
});
/**
 * Subtract output-schema from input-schema, returning nil if it's possible that an object
 * satisfying the output-schema satisfies the input-schema, or otherwise a description
 * of the part(s) of input-schema not met by output-schema.  Strict about the map structure
 * of output-schema matching input-schema, but loose about everything else (only looks at
 * required keys of output-schema.
 */
plumbing.fnk.schema.schema_diff = (function plumbing$fnk$schema$schema_diff(input_schema,output_schema){
if(cljs.core.not(plumbing.fnk.schema.map_schema_QMARK_(input_schema))){
return plumbing.fnk.schema.non_map_diff(input_schema,output_schema);
} else {
if(cljs.core.not(plumbing.fnk.schema.map_schema_QMARK_(output_schema))){
return schema.utils.error(schema.utils.make_ValidationError(input_schema,output_schema,(new cljs.core.Delay((function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(output_schema)),cljs.core.cst$sym$map_QMARK_);
}),null)),null));
} else {
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__6928__auto__ = (function plumbing$fnk$schema$schema_diff_$_iter__13895(s__13896){
return (new cljs.core.LazySeq(null,(function (){
var s__13896__$1 = s__13896;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13896__$1);
if(temp__4657__auto__){
var s__13896__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13896__$2)){
var c__6926__auto__ = cljs.core.chunk_first(s__13896__$2);
var size__6927__auto__ = cljs.core.count(c__6926__auto__);
var b__13898 = cljs.core.chunk_buffer(size__6927__auto__);
if((function (){var i__13897 = (0);
while(true){
if((i__13897 < size__6927__auto__)){
var vec__13903 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6926__auto__,i__13897);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13903,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13903,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_(k))){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if(cljs.core.truth_((function (){var or__6156__auto__ = required_QMARK_;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?cljs.core.cst$sym$missing_DASH_required_DASH_key:plumbing$fnk$schema$schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append(b__13898,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__13905 = (i__13897 + (1));
i__13897 = G__13905;
continue;
} else {
var G__13906 = (i__13897 + (1));
i__13897 = G__13906;
continue;
}
} else {
var G__13907 = (i__13897 + (1));
i__13897 = G__13907;
continue;
}
} else {
var G__13908 = (i__13897 + (1));
i__13897 = G__13908;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13898),plumbing$fnk$schema$schema_diff_$_iter__13895(cljs.core.chunk_rest(s__13896__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13898),null);
}
} else {
var vec__13904 = cljs.core.first(s__13896__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13904,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13904,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_(k))){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if(cljs.core.truth_((function (){var or__6156__auto__ = required_QMARK_;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?cljs.core.cst$sym$missing_DASH_required_DASH_key:plumbing$fnk$schema$schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),plumbing$fnk$schema$schema_diff_$_iter__13895(cljs.core.rest(s__13896__$2)));
} else {
var G__13909 = cljs.core.rest(s__13896__$2);
s__13896__$1 = G__13909;
continue;
}
} else {
var G__13910 = cljs.core.rest(s__13896__$2);
s__13896__$1 = G__13910;
continue;
}
} else {
var G__13911 = cljs.core.rest(s__13896__$2);
s__13896__$1 = G__13911;
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
return iter__6928__auto__(input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function plumbing$fnk$schema$assert_satisfies_schema(input_schema,output_schema){
var fails = plumbing.fnk.schema.schema_diff(input_schema,output_schema);
if(cljs.core.truth_(fails)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$does_DASH_not_DASH_satisfy_DASH_schema,cljs.core.cst$kw$failures,fails], null));
} else {
return null;
}
});
var ufv___13934 = schema.utils.use_fn_validation;
var output_schema13912_13935 = schema.core.Any;
var input_schema13913_13936 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.IOSchemata,cljs.core.cst$sym$arg0),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,cljs.core.cst$sym$input),schema.core.one(plumbing.fnk.schema.MapOutputSchema,cljs.core.cst$sym$output)], null),cljs.core.cst$sym$arg1)], null);
var input_checker13914_13937 = schema.core.checker(input_schema13913_13936);
var output_checker13915_13938 = schema.core.checker(output_schema13912_13935);
/**
 * Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2,
 * return a pair of input and output schemata for #(f2 (merge % (f1 %))).
 * f1's output schema must not contain any optional keys.
 */
plumbing.fnk.schema.compose_schemata = ((function (ufv___13934,output_schema13912_13935,input_schema13913_13936,input_checker13914_13937,output_checker13915_13938){
return (function plumbing$fnk$schema$compose_schemata(G__13916,G__13917){
var validate__12100__auto__ = true;
if(validate__12100__auto__){
var args__12101__auto___13939 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__13916,G__13917], null);
var temp__4657__auto___13940 = (input_checker13914_13937.cljs$core$IFn$_invoke$arity$1 ? input_checker13914_13937.cljs$core$IFn$_invoke$arity$1(args__12101__auto___13939) : input_checker13914_13937.call(null,args__12101__auto___13939));
if(cljs.core.truth_(temp__4657__auto___13940)){
var error__12102__auto___13941 = temp__4657__auto___13940;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$compose_DASH_schemata,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$always_DASH_validate,true,cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any,cljs.core.cst$kw$doc,"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12102__auto___13941], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema13913_13936,cljs.core.cst$kw$value,args__12101__auto___13939,cljs.core.cst$kw$error,error__12102__auto___13941], null));
} else {
}
} else {
}

var o__12103__auto__ = (function (){var G__13928 = G__13916;
var vec__13930 = G__13928;
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13930,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13930,(1),null);
var G__13929 = G__13917;
var vec__13931 = G__13929;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13931,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13931,(1),null);
var G__13928__$1 = G__13928;
var G__13929__$1 = G__13929;
while(true){
var vec__13932 = G__13928__$1;
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13932,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13932,(1),null);
var vec__13933 = G__13929__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13933,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13933,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(cljs.core.select_keys(i2__$1,cljs.core.keys(o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,i2__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(o1__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.optional_key,cljs.core.keys(o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__12100__auto__){
var temp__4657__auto___13942 = (output_checker13915_13938.cljs$core$IFn$_invoke$arity$1 ? output_checker13915_13938.cljs$core$IFn$_invoke$arity$1(o__12103__auto__) : output_checker13915_13938.call(null,o__12103__auto__));
if(cljs.core.truth_(temp__4657__auto___13942)){
var error__12102__auto___13943 = temp__4657__auto___13942;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$compose_DASH_schemata,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$always_DASH_validate,true,cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any,cljs.core.cst$kw$doc,"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12102__auto___13943], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema13912_13935,cljs.core.cst$kw$value,o__12103__auto__,cljs.core.cst$kw$error,error__12102__auto___13943], null));
} else {
}
} else {
}

return o__12103__auto__;
});})(ufv___13934,output_schema13912_13935,input_schema13913_13936,input_checker13914_13937,output_checker13915_13938))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema(output_schema13912_13935,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema13913_13936], null)));
plumbing.fnk.schema.schema_key = (function plumbing$fnk$schema$schema_key(m,k){
if(cljs.core.contains_QMARK_(m,k)){
return k;
} else {
if(cljs.core.contains_QMARK_(m,schema.core.optional_key(k))){
return schema.core.optional_key(k);
} else {
return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function plumbing$fnk$schema$possibly_contains_QMARK_(m,k){
return cljs.core.boolean$(plumbing.fnk.schema.schema_key(m,k));
});
var ufv___14042 = schema.utils.use_fn_validation;
var output_schema13944_14043 = schema.core.Any;
var input_schema13945_14044 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,cljs.core.with_meta(cljs.core.cst$sym$s,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema], null))),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),cljs.core.with_meta(cljs.core.cst$sym$ks,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null)], null)))], null);
var input_checker13946_14045 = schema.core.checker(input_schema13945_14044);
var output_checker13947_14046 = schema.core.checker(output_schema13944_14043);
/**
 * Inputs: [s :- InputSchema ks :- [s/Keyword]]
 * 
 *   Return a pair [ks-part non-ks-part], with any extra schema removed.
 */
plumbing.fnk.schema.split_schema = ((function (ufv___14042,output_schema13944_14043,input_schema13945_14044,input_checker13946_14045,output_checker13947_14046){
return (function plumbing$fnk$schema$split_schema(G__13948,G__13949){
var validate__12100__auto__ = ufv___14042.get_cell();
if(cljs.core.truth_(validate__12100__auto__)){
var args__12101__auto___14047 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__13948,G__13949], null);
var temp__4657__auto___14048 = (input_checker13946_14045.cljs$core$IFn$_invoke$arity$1 ? input_checker13946_14045.cljs$core$IFn$_invoke$arity$1(args__12101__auto___14047) : input_checker13946_14045.call(null,args__12101__auto___14047));
if(cljs.core.truth_(temp__4657__auto___14048)){
var error__12102__auto___14049 = temp__4657__auto___14048;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$split_DASH_schema,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any,cljs.core.cst$kw$doc,"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12102__auto___14049], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema13945_14044,cljs.core.cst$kw$value,args__12101__auto___14047,cljs.core.cst$kw$error,error__12102__auto___14049], null));
} else {
}
} else {
}

var o__12103__auto__ = (function (){var s = G__13948;
var ks = G__13949;
while(true){
var ks__$1 = cljs.core.set(ks);
var iter__6928__auto__ = ((function (ks__$1,validate__12100__auto__,ufv___14042,output_schema13944_14043,input_schema13945_14044,input_checker13946_14045,output_checker13947_14046){
return (function plumbing$fnk$schema$split_schema_$_iter__13996(s__13997){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__12100__auto__,ufv___14042,output_schema13944_14043,input_schema13945_14044,input_checker13946_14045,output_checker13947_14046){
return (function (){
var s__13997__$1 = s__13997;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13997__$1);
if(temp__4657__auto__){
var s__13997__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13997__$2)){
var c__6926__auto__ = cljs.core.chunk_first(s__13997__$2);
var size__6927__auto__ = cljs.core.count(c__6926__auto__);
var b__13999 = cljs.core.chunk_buffer(size__6927__auto__);
if((function (){var i__13998 = (0);
while(true){
if((i__13998 < size__6927__auto__)){
var in_QMARK_ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6926__auto__,i__13998);
cljs.core.chunk_append(b__13999,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__6928__auto__ = ((function (i__13998,in_QMARK_,c__6926__auto__,size__6927__auto__,b__13999,s__13997__$2,temp__4657__auto__,ks__$1,validate__12100__auto__,ufv___14042,output_schema13944_14043,input_schema13945_14044,input_checker13946_14045,output_checker13947_14046){
return (function plumbing$fnk$schema$split_schema_$_iter__13996_$_iter__14022(s__14023){
return (new cljs.core.LazySeq(null,((function (i__13998,in_QMARK_,c__6926__auto__,size__6927__auto__,b__13999,s__13997__$2,temp__4657__auto__,ks__$1,validate__12100__auto__,ufv___14042,output_schema13944_14043,input_schema13945_14044,input_checker13946_14045,output_checker13947_14046){
return (function (){
var s__14023__$1 = s__14023;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__14023__$1);
if(temp__4657__auto____$1){
var s__14023__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__14023__$2)){
var c__6926__auto____$1 = cljs.core.chunk_first(s__14023__$2);
var size__6927__auto____$1 = cljs.core.count(c__6926__auto____$1);
var b__14025 = cljs.core.chunk_buffer(size__6927__auto____$1);
if((function (){var i__14024 = (0);
while(true){
if((i__14024 < size__6927__auto____$1)){
var vec__14030 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6926__auto____$1,i__14024);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14030,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14030,(1),null);
if(cljs.core.truth_((function (){var and__6144__auto__ = schema.core.specific_key_QMARK_(k);
if(cljs.core.truth_(and__6144__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)));
} else {
return and__6144__auto__;
}
})())){
cljs.core.chunk_append(b__14025,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__14050 = (i__14024 + (1));
i__14024 = G__14050;
continue;
} else {
var G__14051 = (i__14024 + (1));
i__14024 = G__14051;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14025),plumbing$fnk$schema$split_schema_$_iter__13996_$_iter__14022(cljs.core.chunk_rest(s__14023__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14025),null);
}
} else {
var vec__14031 = cljs.core.first(s__14023__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14031,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14031,(1),null);
if(cljs.core.truth_((function (){var and__6144__auto__ = schema.core.specific_key_QMARK_(k);
if(cljs.core.truth_(and__6144__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)));
} else {
return and__6144__auto__;
}
})())){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__13996_$_iter__14022(cljs.core.rest(s__14023__$2)));
} else {
var G__14052 = cljs.core.rest(s__14023__$2);
s__14023__$1 = G__14052;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__13998,in_QMARK_,c__6926__auto__,size__6927__auto__,b__13999,s__13997__$2,temp__4657__auto__,ks__$1,validate__12100__auto__,ufv___14042,output_schema13944_14043,input_schema13945_14044,input_checker13946_14045,output_checker13947_14046))
,null,null));
});})(i__13998,in_QMARK_,c__6926__auto__,size__6927__auto__,b__13999,s__13997__$2,temp__4657__auto__,ks__$1,validate__12100__auto__,ufv___14042,output_schema13944_14043,input_schema13945_14044,input_checker13946_14045,output_checker13947_14046))
;
return iter__6928__auto__(s);
})()));

var G__14053 = (i__13998 + (1));
i__13998 = G__14053;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13999),plumbing$fnk$schema$split_schema_$_iter__13996(cljs.core.chunk_rest(s__13997__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13999),null);
}
} else {
var in_QMARK_ = cljs.core.first(s__13997__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__6928__auto__ = ((function (in_QMARK_,s__13997__$2,temp__4657__auto__,ks__$1,validate__12100__auto__,ufv___14042,output_schema13944_14043,input_schema13945_14044,input_checker13946_14045,output_checker13947_14046){
return (function plumbing$fnk$schema$split_schema_$_iter__13996_$_iter__14032(s__14033){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__13997__$2,temp__4657__auto__,ks__$1,validate__12100__auto__,ufv___14042,output_schema13944_14043,input_schema13945_14044,input_checker13946_14045,output_checker13947_14046){
return (function (){
var s__14033__$1 = s__14033;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__14033__$1);
if(temp__4657__auto____$1){
var s__14033__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__14033__$2)){
var c__6926__auto__ = cljs.core.chunk_first(s__14033__$2);
var size__6927__auto__ = cljs.core.count(c__6926__auto__);
var b__14035 = cljs.core.chunk_buffer(size__6927__auto__);
if((function (){var i__14034 = (0);
while(true){
if((i__14034 < size__6927__auto__)){
var vec__14040 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6926__auto__,i__14034);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14040,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14040,(1),null);
if(cljs.core.truth_((function (){var and__6144__auto__ = schema.core.specific_key_QMARK_(k);
if(cljs.core.truth_(and__6144__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)));
} else {
return and__6144__auto__;
}
})())){
cljs.core.chunk_append(b__14035,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__14054 = (i__14034 + (1));
i__14034 = G__14054;
continue;
} else {
var G__14055 = (i__14034 + (1));
i__14034 = G__14055;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14035),plumbing$fnk$schema$split_schema_$_iter__13996_$_iter__14032(cljs.core.chunk_rest(s__14033__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14035),null);
}
} else {
var vec__14041 = cljs.core.first(s__14033__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14041,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14041,(1),null);
if(cljs.core.truth_((function (){var and__6144__auto__ = schema.core.specific_key_QMARK_(k);
if(cljs.core.truth_(and__6144__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)));
} else {
return and__6144__auto__;
}
})())){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__13996_$_iter__14032(cljs.core.rest(s__14033__$2)));
} else {
var G__14056 = cljs.core.rest(s__14033__$2);
s__14033__$1 = G__14056;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__13997__$2,temp__4657__auto__,ks__$1,validate__12100__auto__,ufv___14042,output_schema13944_14043,input_schema13945_14044,input_checker13946_14045,output_checker13947_14046))
,null,null));
});})(in_QMARK_,s__13997__$2,temp__4657__auto__,ks__$1,validate__12100__auto__,ufv___14042,output_schema13944_14043,input_schema13945_14044,input_checker13946_14045,output_checker13947_14046))
;
return iter__6928__auto__(s);
})()),plumbing$fnk$schema$split_schema_$_iter__13996(cljs.core.rest(s__13997__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__12100__auto__,ufv___14042,output_schema13944_14043,input_schema13945_14044,input_checker13946_14045,output_checker13947_14046))
,null,null));
});})(ks__$1,validate__12100__auto__,ufv___14042,output_schema13944_14043,input_schema13945_14044,input_checker13946_14045,output_checker13947_14046))
;
return iter__6928__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__12100__auto__)){
var temp__4657__auto___14057 = (output_checker13947_14046.cljs$core$IFn$_invoke$arity$1 ? output_checker13947_14046.cljs$core$IFn$_invoke$arity$1(o__12103__auto__) : output_checker13947_14046.call(null,o__12103__auto__));
if(cljs.core.truth_(temp__4657__auto___14057)){
var error__12102__auto___14058 = temp__4657__auto___14057;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$split_DASH_schema,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any,cljs.core.cst$kw$doc,"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12102__auto___14058], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema13944_14043,cljs.core.cst$kw$value,o__12103__auto__,cljs.core.cst$kw$error,error__12102__auto___14058], null));
} else {
}
} else {
}

return o__12103__auto__;
});})(ufv___14042,output_schema13944_14043,input_schema13945_14044,input_checker13946_14045,output_checker13947_14046))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema),schema.core.make_fn_schema(output_schema13944_14043,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema13945_14044], null)));
var ufv___14089 = schema.utils.use_fn_validation;
var output_schema14059_14090 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema14060_14091 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphIOSchemata,cljs.core.cst$sym$arg0),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Keyword,"key"),schema.core.one(plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),cljs.core.cst$sym$arg1)], null);
var input_checker14061_14092 = schema.core.checker(input_schema14060_14091);
var output_checker14062_14093 = schema.core.checker(output_schema14059_14090);
/**
 * Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
 *   Returns: GraphIOSchemata
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
 * return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
 */
plumbing.fnk.schema.sequence_schemata = ((function (ufv___14089,output_schema14059_14090,input_schema14060_14091,input_checker14061_14092,output_checker14062_14093){
return (function plumbing$fnk$schema$sequence_schemata(G__14063,G__14064){
var validate__12100__auto__ = ufv___14089.get_cell();
if(cljs.core.truth_(validate__12100__auto__)){
var args__12101__auto___14094 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14063,G__14064], null);
var temp__4657__auto___14095 = (input_checker14061_14092.cljs$core$IFn$_invoke$arity$1 ? input_checker14061_14092.cljs$core$IFn$_invoke$arity$1(args__12101__auto___14094) : input_checker14061_14092.call(null,args__12101__auto___14094));
if(cljs.core.truth_(temp__4657__auto___14095)){
var error__12102__auto___14096 = temp__4657__auto___14095;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$sequence_DASH_schemata,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$GraphIOSchemata,cljs.core.cst$kw$doc,"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12102__auto___14096], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema14060_14091,cljs.core.cst$kw$value,args__12101__auto___14094,cljs.core.cst$kw$error,error__12102__auto___14096], null));
} else {
}
} else {
}

var o__12103__auto__ = (function (){var G__14080 = G__14063;
var vec__14082 = G__14080;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14082,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14082,(1),null);
var G__14081 = G__14064;
var vec__14083 = G__14081;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14083,(0),null);
var vec__14084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14083,(1),null);
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14084,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14084,(1),null);
var G__14080__$1 = G__14080;
var G__14081__$1 = G__14081;
while(true){
var vec__14085 = G__14080__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14085,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14085,(1),null);
var vec__14086 = G__14081__$1;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14086,(0),null);
var vec__14087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14086,(1),null);
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14087,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14087,(1),null);
if(cljs.core.not(plumbing.fnk.schema.possibly_contains_QMARK_(i1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",cljs.core.array_seq([k__$1,schema.core.explain(i2__$1),schema.core.explain(i1__$1)], 0))));
}

if(cljs.core.not(plumbing.fnk.schema.possibly_contains_QMARK_(i2__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Node outputs a key %s in its inputs %s",cljs.core.array_seq([k__$1,schema.core.explain(i2__$1)], 0))));
}

if(cljs.core.not(plumbing.fnk.schema.possibly_contains_QMARK_(o1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Node outputs a duplicate key %s given inputs %s",cljs.core.array_seq([k__$1,schema.core.explain(i1__$1)], 0))));
}

var vec__14088 = plumbing.fnk.schema.split_schema(i2__$1,cljs.core.keys(o1__$1));
var used = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14088,(0),null);
var unused = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14088,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(unused,i1__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__12100__auto__)){
var temp__4657__auto___14097 = (output_checker14062_14093.cljs$core$IFn$_invoke$arity$1 ? output_checker14062_14093.cljs$core$IFn$_invoke$arity$1(o__12103__auto__) : output_checker14062_14093.call(null,o__12103__auto__));
if(cljs.core.truth_(temp__4657__auto___14097)){
var error__12102__auto___14098 = temp__4657__auto___14097;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$sequence_DASH_schemata,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$GraphIOSchemata,cljs.core.cst$kw$doc,"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12102__auto___14098], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema14059_14090,cljs.core.cst$kw$value,o__12103__auto__,cljs.core.cst$kw$error,error__12102__auto___14098], null));
} else {
}
} else {
}

return o__12103__auto__;
});})(ufv___14089,output_schema14059_14090,input_schema14060_14091,input_checker14061_14092,output_checker14062_14093))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema(output_schema14059_14090,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14060_14091], null)));
