/*
 Highstock JS v8.2.2 (2020-12-12)

 Indicator series type for Highstock

 (c) 2010-2019 Rafal Sebestjanski

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/tema",["highcharts","highcharts/modules/stock"],function(b){a(b);a.Highcharts=b;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function b(a,b,d,k){a.hasOwnProperty(b)||(a[b]=k.apply(null,d))}a=a?a._modules:{};b(a,"Mixins/IndicatorRequired.js",[a["Core/Utilities.js"]],function(a){var b=a.error;return{isParentLoaded:function(a,
k,m,l,r){if(a)return l?l(a):!0;b(r||this.generateMessage(m,k));return!1},generateMessage:function(a,b){return'Error: "'+a+'" indicator type requires "'+b+'" indicator loaded before. Please read docs: https://api.highcharts.com/highstock/plotOptions.'+a}}});b(a,"Stock/Indicators/TEMA/TEMAIndicator.js",[a["Core/Series/Series.js"],a["Mixins/IndicatorRequired.js"],a["Core/Utilities.js"]],function(a,b,d){var k=this&&this.__extends||function(){var a=function(b,e){a=Object.setPrototypeOf||{__proto__:[]}instanceof
Array&&function(a,c){a.__proto__=c}||function(a,c){for(var e in c)c.hasOwnProperty(e)&&(a[e]=c[e])};return a(b,e)};return function(b,e){function h(){this.constructor=b}a(b,e);b.prototype=null===e?Object.create(e):(h.prototype=e.prototype,new h)}}(),m=a.seriesTypes.ema,l=d.correctFloat,r=d.isArray,t=d.merge;d=function(a){function d(){var e=null!==a&&a.apply(this,arguments)||this;e.EMApercent=void 0;e.data=void 0;e.options=void 0;e.points=void 0;return e}k(d,a);d.prototype.init=function(){var a=arguments,
h=this;b.isParentLoaded(m,"ema",h.type,function(e){e.prototype.init.apply(h,a)})};d.prototype.getEMA=function(a,b,c,d,v,k){return m.prototype.calculateEma(k||[],a,"undefined"===typeof v?1:v,this.EMApercent,b,"undefined"===typeof d?-1:d,c)};d.prototype.getTemaPoint=function(a,b,c,d){return[a[d-3],l(3*c.level1-3*c.level2+c.level3)]};d.prototype.getValues=function(a,b){var c=b.period,d=2*c,e=3*c,k=a.xData,h=(a=a.yData)?a.length:0,l=-1,w=[],x=[],y=[],p=[],u=[],g,q,f={};this.EMApercent=2/(c+1);if(!(h<
3*c-2)){r(a[0])&&(l=b.index?b.index:0);b=m.prototype.accumulatePeriodPoints(c,l,a);var n=b/c;b=0;for(g=c;g<h+3;g++){g<h+1&&(f.level1=this.getEMA(a,t,n,l,g)[1],p.push(f.level1));var t=f.level1;if(g<d)b+=f.level1;else{g===d&&(n=b/c,b=0);f.level1=p[g-c-1];f.level2=this.getEMA([f.level1],z,n)[1];u.push(f.level2);var z=f.level2;if(g<e)b+=f.level2;else{g===e&&(n=b/c);g===h+1&&(f.level1=p[g-c-1],f.level2=this.getEMA([f.level1],z,n)[1],u.push(f.level2));f.level1=p[g-c-2];f.level2=u[g-2*c-1];f.level3=this.getEMA([f.level2],
f.prevLevel3,n)[1];if(q=this.getTemaPoint(k,e,f,g))w.push(q),x.push(q[0]),y.push(q[1]);f.prevLevel3=f.level3}}}return{values:w,xData:x,yData:y}}};d.defaultOptions=t(m.defaultOptions);return d}(m);a.registerSeriesType("tema",d);"";return d});b(a,"masters/indicators/tema.src.js",[],function(){})});
//# sourceMappingURL=tema.js.map