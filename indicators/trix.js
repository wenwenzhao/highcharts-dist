/*
 Highstock JS v8.2.2 (2020-12-12)

 Indicator series type for Highstock

 (c) 2010-2019 Rafal Sebestjanski

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/trix",["highcharts","highcharts/modules/stock"],function(b){a(b);a.Highcharts=b;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function b(a,b,c,e){a.hasOwnProperty(b)||(a[b]=e.apply(null,c))}a=a?a._modules:{};b(a,"Mixins/IndicatorRequired.js",[a["Core/Utilities.js"]],function(a){var b=a.error;return{isParentLoaded:function(a,
e,g,h,k){if(a)return h?h(a):!0;b(k||this.generateMessage(g,e));return!1},generateMessage:function(a,b){return'Error: "'+a+'" indicator type requires "'+b+'" indicator loaded before. Please read docs: https://api.highcharts.com/highstock/plotOptions.'+a}}});b(a,"Stock/Indicators/TRIX/TRIXIndicator.js",[a["Core/Series/Series.js"],a["Mixins/IndicatorRequired.js"],a["Core/Utilities.js"]],function(a,b,c){var e=this&&this.__extends||function(){var a=function(b,d){a=Object.setPrototypeOf||{__proto__:[]}instanceof
Array&&function(a,b){a.__proto__=b}||function(a,b){for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d])};return a(b,d)};return function(b,d){function c(){this.constructor=b}a(b,d);b.prototype=null===d?Object.create(d):(c.prototype=d.prototype,new c)}}(),g=a.seriesTypes.tema,h=c.correctFloat,k=c.merge;c=function(c){function f(){var a=null!==c&&c.apply(this,arguments)||this;a.data=void 0;a.options=void 0;a.points=void 0;return a}e(f,c);f.prototype.init=function(){var c=arguments,e=this;b.isParentLoaded(a.seriesTypes.tema,
"tema",e.type,function(a){a.prototype.init.apply(e,c)})};f.prototype.getTemaPoint=function(a,b,c,e){if(e>b)var d=[a[e-3],0!==c.prevLevel3?h(c.level3-c.prevLevel3)/c.prevLevel3*100:null];return d};f.defaultOptions=k(g.defaultOptions);return f}(g);a.registerSeriesType("trix",c);"";return c});b(a,"masters/indicators/trix.src.js",[],function(){})});
//# sourceMappingURL=trix.js.map