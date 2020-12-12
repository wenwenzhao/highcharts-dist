/*
 Highstock JS v8.2.2 (2020-12-12)

 Indicator series type for Highstock

 (c) 2010-2019 Pawe Fus

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/bollinger-bands",["highcharts","highcharts/modules/stock"],function(c){a(c);a.Highcharts=c;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function c(a,f,e,c){a.hasOwnProperty(f)||(a[f]=c.apply(null,e))}a=a?a._modules:{};c(a,"Mixins/MultipleLines.js",[a["Core/Globals.js"],a["Core/Utilities.js"]],function(a,f){var e=
f.defined,c=f.error,x=f.merge,h=a.seriesTypes.sma;return{pointArrayMap:["top","bottom"],pointValKey:"top",linesApiNames:["bottomLine"],getTranslatedLinesNames:function(m){var a=[];(this.pointArrayMap||[]).forEach(function(b){b!==m&&a.push("plot"+b.charAt(0).toUpperCase()+b.slice(1))});return a},toYData:function(m){var a=[];(this.pointArrayMap||[]).forEach(function(b){a.push(m[b])});return a},translate:function(){var a=this,c=a.pointArrayMap,b=[],g;b=a.getTranslatedLinesNames();h.prototype.translate.apply(a,
arguments);a.points.forEach(function(d){c.forEach(function(m,y){g=d[m];null!==g&&(d[b[y]]=a.yAxis.toPixels(g,!0))})})},drawGraph:function(){var a=this,f=a.linesApiNames,b=a.points,g=b.length,d=a.options,B=a.graph,y={options:{gapSize:d.gapSize}},u=[],t;a.getTranslatedLinesNames(a.pointValKey).forEach(function(a,d){for(u[d]=[];g--;)t=b[g],u[d].push({x:t.x,plotX:t.plotX,plotY:t[a],isNull:!e(t[a])});g=b.length});f.forEach(function(b,g){u[g]?(a.points=u[g],d[b]?a.options=x(d[b].styles,y):c('Error: "There is no '+
b+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names." at mixin/multiple-line.js:34'),a.graph=a["graph"+b],h.prototype.drawGraph.call(a),a["graph"+b]=a.graph):c('Error: "'+b+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")});a.points=b;a.options=d;a.graph=B;h.prototype.drawGraph.call(a)}}});c(a,"Stock/Indicators/BB/BBIndicator.js",[a["Core/Series/Series.js"],a["Mixins/MultipleLines.js"],a["Core/Utilities.js"]],
function(a,c,e){var f=this&&this.__extends||function(){var a=function(b,d){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,d){a.__proto__=d}||function(a,d){for(var b in d)d.hasOwnProperty(b)&&(a[b]=d[b])};return a(b,d)};return function(b,d){function c(){this.constructor=b}a(b,d);b.prototype=null===d?Object.create(d):(c.prototype=d.prototype,new c)}}(),q=a.seriesTypes.sma,h=e.extend,m=e.isArray,r=e.merge;e=function(b){function c(){var a=null!==b&&b.apply(this,arguments)||this;a.data=
void 0;a.options=void 0;a.points=void 0;return a}f(c,b);c.prototype.init=function(){a.seriesTypes.sma.prototype.init.apply(this,arguments);this.options=r({topLine:{styles:{lineColor:this.color}},bottomLine:{styles:{lineColor:this.color}}},this.options)};c.prototype.getValues=function(b,c){var d=c.period,e=c.standardDeviation,f=b.xData,g=(b=b.yData)?b.length:0,h=[],q=[],r=[],n;if(!(f.length<d)){var x=m(b[0]);for(n=d;n<=g;n++){var v=f.slice(n-d,n);var p=b.slice(n-d,n);var k=a.seriesTypes.sma.prototype.getValues.call(this,
{xData:v,yData:p},c);v=k.xData[0];k=k.yData[0];for(var z=0,A=p.length,w=0;w<A;w++){var l=(x?p[w][c.index]:p[w])-k;z+=l*l}l=Math.sqrt(z/(A-1));p=k+e*l;l=k-e*l;h.push([v,p,k,l]);q.push(v);r.push([p,k,l])}return{values:h,xData:q,yData:r}}};c.defaultOptions=r(q.defaultOptions,{params:{period:20,standardDeviation:2,index:3},bottomLine:{styles:{lineWidth:1,lineColor:void 0}},topLine:{styles:{lineWidth:1,lineColor:void 0}},tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span><b> {series.name}</b><br/>Top: {point.top}<br/>Middle: {point.middle}<br/>Bottom: {point.bottom}<br/>'},
marker:{enabled:!1},dataGrouping:{approximation:"averages"}});return c}(q);h(e.prototype,{pointArrayMap:["top","middle","bottom"],pointValKey:"middle",nameComponents:["period","standardDeviation"],linesApiNames:["topLine","bottomLine"],drawGraph:c.drawGraph,getTranslatedLinesNames:c.getTranslatedLinesNames,translate:c.translate,toYData:c.toYData});a.registerSeriesType("bb",e);"";return e});c(a,"masters/indicators/bollinger-bands.src.js",[],function(){})});
//# sourceMappingURL=bollinger-bands.js.map