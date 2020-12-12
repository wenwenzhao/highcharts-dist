/*
 Highcharts JS v8.2.2 (2020-12-12)

 Sankey diagram module

 (c) 2010-2019 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(c){"object"===typeof module&&module.exports?(c["default"]=c,module.exports=c):"function"===typeof define&&define.amd?define("highcharts/modules/sankey",["highcharts"],function(q){c(q);c.Highcharts=q;return c}):c("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(c){function q(c,f,k,h){c.hasOwnProperty(f)||(c[f]=h.apply(null,k))}c=c?c._modules:{};q(c,"Mixins/Nodes.js",[c["Core/Globals.js"],c["Series/Line/LineSeries.js"],c["Core/Series/Point.js"],c["Core/Utilities.js"]],function(c,
f,k,h){var t=h.defined,l=h.extend,g=h.find,p=h.pick;return c.NodesMixin={createNode:function(b){function d(a,d){return g(a,function(a){return a.id===d})}var a=d(this.nodes,b),c=this.pointClass;if(!a){var h=this.options.nodes&&d(this.options.nodes,b);a=(new c).init(this,l({className:"highcharts-node",isNode:!0,id:b,y:1},h));a.linksTo=[];a.linksFrom=[];a.formatPrefix="node";a.name=a.name||a.options.id||"";a.mass=p(a.options.mass,a.options.marker&&a.options.marker.radius,this.options.marker&&this.options.marker.radius,
4);a.getSum=function(){var d=0,b=0;a.linksTo.forEach(function(a){d+=a.weight});a.linksFrom.forEach(function(a){b+=a.weight});return Math.max(d,b)};a.offset=function(d,b){for(var c=0,g=0;g<a[b].length;g++){if(a[b][g]===d)return c;c+=a[b][g].weight}};a.hasShape=function(){var d=0;a.linksTo.forEach(function(a){a.outgoing&&d++});return!a.linksTo.length||d!==a.linksTo.length};this.nodes.push(a)}return a},generatePoints:function(){var b=this.chart,d={};f.prototype.generatePoints.call(this);this.nodes||
(this.nodes=[]);this.colorCounter=0;this.nodes.forEach(function(a){a.linksFrom.length=0;a.linksTo.length=0;a.level=a.options.level});this.points.forEach(function(a){t(a.from)&&(d[a.from]||(d[a.from]=this.createNode(a.from)),d[a.from].linksFrom.push(a),a.fromNode=d[a.from],b.styledMode?a.colorIndex=p(a.options.colorIndex,d[a.from].colorIndex):a.color=a.options.color||d[a.from].color);t(a.to)&&(d[a.to]||(d[a.to]=this.createNode(a.to)),d[a.to].linksTo.push(a),a.toNode=d[a.to]);a.name=a.name||a.id},this);
this.nodeLookup=d},setData:function(){this.nodes&&(this.nodes.forEach(function(b){b.destroy()}),this.nodes.length=0);f.prototype.setData.apply(this,arguments)},destroy:function(){this.data=[].concat(this.points||[],this.nodes);return f.prototype.destroy.apply(this,arguments)},setNodeState:function(b){var d=arguments,a=this.isNode?this.linksTo.concat(this.linksFrom):[this.fromNode,this.toNode];"select"!==b&&a.forEach(function(a){a&&a.series&&(k.prototype.setState.apply(a,d),a.isNode||(a.fromNode.graphic&&
k.prototype.setState.apply(a.fromNode,d),a.toNode&&a.toNode.graphic&&k.prototype.setState.apply(a.toNode,d)))});k.prototype.setState.apply(this,d)}}});q(c,"Series/Sankey/SankeyPoint.js",[c["Core/Series/Series.js"],c["Mixins/Nodes.js"],c["Core/Series/Point.js"],c["Core/Utilities.js"]],function(c,f,k,h){var t=this&&this.__extends||function(){var c=function(g,b){c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,a){d.__proto__=a}||function(d,a){for(var b in a)a.hasOwnProperty(b)&&(d[b]=
a[b])};return c(g,b)};return function(g,b){function d(){this.constructor=g}c(g,b);g.prototype=null===b?Object.create(b):(d.prototype=b.prototype,new d)}}(),l=h.defined;h=h.extend;c=function(c){function g(){var b=null!==c&&c.apply(this,arguments)||this;b.className=void 0;b.fromNode=void 0;b.level=void 0;b.linkBase=void 0;b.linksFrom=void 0;b.linksTo=void 0;b.mass=void 0;b.nodeX=void 0;b.nodeY=void 0;b.options=void 0;b.series=void 0;b.toNode=void 0;return b}t(g,c);g.prototype.applyOptions=function(b,
d){k.prototype.applyOptions.call(this,b,d);l(this.options.level)&&(this.options.column=this.column=this.options.level);return this};g.prototype.getClassName=function(){return(this.isNode?"highcharts-node ":"highcharts-link ")+k.prototype.getClassName.call(this)};g.prototype.isValid=function(){return this.isNode||"number"===typeof this.weight};return g}(c.seriesTypes.column.prototype.pointClass);h(c.prototype,{setState:f.setNodeState});return c});q(c,"Mixins/TreeSeries.js",[c["Core/Color/Color.js"],
c["Core/Utilities.js"]],function(c,f){var k=f.extend,h=f.isArray,t=f.isNumber,l=f.isObject,g=f.merge,p=f.pick;return{getColor:function(b,d){var a=d.index,g=d.mapOptionsToLevel,h=d.parentColor,f=d.parentColorIndex,k=d.series,r=d.colors,l=d.siblings,m=k.points,v=k.chart.options.chart,u;if(b){m=m[b.i];b=g[b.level]||{};if(g=m&&b.colorByPoint){var e=m.index%(r?r.length:v.colorCount);var n=r&&r[e]}if(!k.chart.styledMode){r=m&&m.options.color;v=b&&b.color;if(u=h)u=(u=b&&b.colorVariation)&&"brightness"===
u.key?c.parse(h).brighten(a/l*u.to).get():h;u=p(r,v,n,u,k.color)}var y=p(m&&m.options.colorIndex,b&&b.colorIndex,e,f,d.colorIndex)}return{color:u,colorIndex:y}},getLevelOptions:function(b){var d=null;if(l(b)){d={};var a=t(b.from)?b.from:1;var c=b.levels;var f={};var p=l(b.defaults)?b.defaults:{};h(c)&&(f=c.reduce(function(d,b){if(l(b)&&t(b.level)){var c=g({},b);var h="boolean"===typeof c.levelIsConstant?c.levelIsConstant:p.levelIsConstant;delete c.levelIsConstant;delete c.level;b=b.level+(h?0:a-1);
l(d[b])?k(d[b],c):d[b]=c}return d},{}));c=t(b.to)?b.to:1;for(b=0;b<=c;b++)d[b]=g({},p,l(f[b])?f[b]:{})}return d},setTreeValues:function K(d,a){var c=a.before,g=a.idRoot,h=a.mapIdToNode[g],f=a.points[d.i],l=f&&f.options||{},m=0,v=[];k(d,{levelDynamic:d.level-(("boolean"===typeof a.levelIsConstant?a.levelIsConstant:1)?0:h.level),name:p(f&&f.name,""),visible:g===d.id||("boolean"===typeof a.visible?a.visible:!1)});"function"===typeof c&&(d=c(d,a));d.children.forEach(function(c,e){var n=k({},a);k(n,{index:e,
siblings:d.children.length,visible:d.visible});c=K(c,n);v.push(c);c.visible&&(m+=c.val)});d.visible=0<m||d.visible;c=p(l.value,m);k(d,{children:v,childrenTotal:m,isLeaf:d.visible&&!m,val:c});return d},updateRootId:function(d){if(l(d)){var a=l(d.options)?d.options:{};a=p(d.rootNode,a.rootId,"");l(d.userOptions)&&(d.userOptions.rootId=a);d.rootNode=a}return a}}});q(c,"Series/Sankey/SankeySeries.js",[c["Core/Series/Series.js"],c["Core/Color/Color.js"],c["Core/Globals.js"],c["Mixins/Nodes.js"],c["Series/Sankey/SankeyPoint.js"],
c["Mixins/TreeSeries.js"],c["Core/Utilities.js"]],function(c,f,k,h,t,l,g){var p=this&&this.__extends||function(){var a=function(c,e){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,e){a.__proto__=e}||function(a,e){for(var c in e)e.hasOwnProperty(c)&&(a[c]=e[c])};return a(c,e)};return function(c,e){function b(){this.constructor=c}a(c,e);c.prototype=null===e?Object.create(e):(b.prototype=e.prototype,new b)}}(),b=c.seriesTypes,d=b.column;b=b.line;var a=l.getLevelOptions,q=g.defined;
l=g.extend;var L=g.find,z=g.isObject,A=g.merge,r=g.pick,B=g.relativeLength,m=g.stableSort;g=function(c){function b(){var e=null!==c&&c.apply(this,arguments)||this;e.colDistance=void 0;e.data=void 0;e.group=void 0;e.nodeLookup=void 0;e.nodePadding=void 0;e.nodes=void 0;e.nodeWidth=void 0;e.options=void 0;e.points=void 0;e.translationFactor=void 0;return e}p(b,c);b.getDLOptions=function(e){var a=z(e.optionsPoint)?e.optionsPoint.dataLabels:{};e=z(e.level)?e.level.dataLabels:{};return A({style:{}},e,
a)};b.prototype.createNodeColumn=function(){var a=this,b=this.chart,c=[];c.sum=function(){return this.reduce(function(a,e){return a+e.getSum()},0)};c.offset=function(e,b){for(var d=0,n,F=a.nodePadding,y=0;y<c.length;y++){n=c[y].getSum();var M=Math.max(n*b,a.options.minLinkWidth);n=n?M+F:0;if(c[y]===e)return{relativeTop:d+B(e.options.offset||0,n)};d+=n}};c.top=function(e){var c=a.nodePadding,d=this.reduce(function(b,d){0<b&&(b+=c);d=Math.max(d.getSum()*e,a.options.minLinkWidth);return b+d},0);return(b.plotSizeY-
d)/2};return c};b.prototype.createNodeColumns=function(){var a=[];this.nodes.forEach(function(b){var e=-1,c;if(!q(b.options.column))if(0===b.linksTo.length)b.column=0;else{for(c=0;c<b.linksTo.length;c++){var d=b.linksTo[0];if(d.fromNode.column>e){var n=d.fromNode;e=n.column}}b.column=e+1;n&&"hanging"===n.options.layout&&(b.hangsFrom=n,c=-1,L(n.linksFrom,function(a,e){(a=a.toNode===b)&&(c=e);return a}),b.column+=c)}a[b.column]||(a[b.column]=this.createNodeColumn());a[b.column].push(b)},this);for(var b=
0;b<a.length;b++)"undefined"===typeof a[b]&&(a[b]=this.createNodeColumn());return a};b.prototype.generatePoints=function(){function a(b,c){"undefined"===typeof b.level&&(b.level=c,b.linksFrom.forEach(function(b){b.toNode&&a(b.toNode,c+1)}))}h.generatePoints.apply(this,arguments);this.orderNodes&&(this.nodes.filter(function(a){return 0===a.linksTo.length}).forEach(function(b){a(b,0)}),m(this.nodes,function(a,b){return a.level-b.level}))};b.prototype.getNodePadding=function(){var a=this.options.nodePadding||
0;if(this.nodeColumns){var b=this.nodeColumns.reduce(function(a,b){return Math.max(a,b.length)},0);b*a>this.chart.plotSizeY&&(a=this.chart.plotSizeY/b)}return a};b.prototype.hasData=function(){return!!this.processedXData.length};b.prototype.pointAttribs=function(a,b){if(!a)return{};var c=this,e=c.mapOptionsToLevel[(a.isNode?a.level:a.fromNode.level)||0]||{},d=a.options,n=e.states&&e.states[b||""]||{};b=["colorByPoint","borderColor","borderWidth","linkOpacity"].reduce(function(a,b){a[b]=r(n[b],d[b],
e[b],c.options[b]);return a},{});var g=r(n.color,d.color,b.colorByPoint?a.color:e.color);return a.isNode?{fill:g,stroke:b.borderColor,"stroke-width":b.borderWidth}:{fill:f.parse(g).setOpacity(b.linkOpacity).get()}};b.prototype.render=function(){var b=this.points;this.points=this.points.concat(this.nodes||[]);d.prototype.render.call(this);this.points=b};b.prototype.translate=function(){var b=this,c=function(a){for(var c=a.slice(),e=b.options.minLinkWidth||0,n,w=0,h,F=g.plotSizeY-f.borderWidth-(a.length-
1)*d.nodePadding;a.length;){w=F/a.sum();n=!1;for(h=a.length;h--;)a[h].getSum()*w<e&&(a.splice(h,1),F-=e,n=!0);if(!n)break}a.length=0;c.forEach(function(b){return a.push(b)});return w};this.processedXData||this.processData();this.generatePoints();this.nodeColumns=this.createNodeColumns();this.nodeWidth=B(this.options.nodeWidth,this.chart.plotSizeX);var d=this,g=this.chart,f=this.options,h=this.nodeWidth,w=this.nodeColumns;this.nodePadding=this.getNodePadding();this.translationFactor=w.reduce(function(a,
b){return Math.min(a,c(b))},Infinity);this.colDistance=(g.plotSizeX-h-f.borderWidth)/Math.max(1,w.length-1);d.mapOptionsToLevel=a({from:1,levels:f.levels,to:w.length-1,defaults:{borderColor:f.borderColor,borderRadius:f.borderRadius,borderWidth:f.borderWidth,color:d.color,colorByPoint:f.colorByPoint,levelIsConstant:!0,linkColor:f.linkColor,linkLineWidth:f.linkLineWidth,linkOpacity:f.linkOpacity,states:f.states}});w.forEach(function(a){a.forEach(function(b){d.translateNode(b,a)})},this);this.nodes.forEach(function(a){a.linksFrom.forEach(function(a){(a.weight||
a.isNull)&&a.to&&(d.translateLink(a),a.allowShadow=!1)})})};b.prototype.translateLink=function(a){var b=function(b,c){var d;c=b.offset(a,c)*g;return Math.min(b.nodeY+c,b.nodeY+(null===(d=b.shapeArgs)||void 0===d?void 0:d.height)-f)},c=a.fromNode,d=a.toNode,e=this.chart,g=this.translationFactor,f=Math.max(a.weight*g,this.options.minLinkWidth),h=(e.inverted?-this.colDistance:this.colDistance)*this.options.curveFactor,k=b(c,"linksFrom");b=b(d,"linksTo");var l=c.nodeX,m=this.nodeWidth;d=d.column*this.colDistance;
var p=a.outgoing,q=d>l+m;e.inverted&&(k=e.plotSizeY-k,b=(e.plotSizeY||0)-b,d=e.plotSizeX-d,m=-m,f=-f,q=l>d);a.shapeType="path";a.linkBase=[k,k+f,b,b+f];if(q&&"number"===typeof b)a.shapeArgs={d:[["M",l+m,k],["C",l+m+h,k,d-h,b,d,b],["L",d+(p?m:0),b+f/2],["L",d,b+f],["C",d-h,b+f,l+m+h,k+f,l+m,k+f],["Z"]]};else if("number"===typeof b){h=d-20-f;p=d-20;q=d;var t=l+m,r=t+20,u=r+f,v=k,C=k+f,H=C+20,D=H+(e.plotHeight-k-f),x=D+20,G=x+f,I=b,E=I+f,z=E+20,A=x+.7*f,B=q-.7*f,J=t+.7*f;a.shapeArgs={d:[["M",t,v],["C",
J,v,u,C-.7*f,u,H],["L",u,D],["C",u,A,J,G,t,G],["L",q,G],["C",B,G,h,A,h,D],["L",h,z],["C",h,E-.7*f,B,I,q,I],["L",q,E],["C",p,E,p,E,p,z],["L",p,D],["C",p,x,p,x,q,x],["L",t,x],["C",r,x,r,x,r,D],["L",r,H],["C",r,C,r,C,t,C],["Z"]]}}a.dlBox={x:l+(d-l+m)/2,y:k+(b-k)/2,height:f,width:0};a.tooltipPos=e.inverted?[e.plotSizeY-a.dlBox.y-f/2,e.plotSizeX-a.dlBox.x]:[a.dlBox.x,a.dlBox.y+f/2];a.y=a.plotY=1;a.color||(a.color=c.color)};b.prototype.translateNode=function(a,c){var d=this.translationFactor,e=this.chart,
f=this.options,g=a.getSum(),h=Math.max(Math.round(g*d),this.options.minLinkWidth),k=Math.round(f.borderWidth)%2/2,l=c.offset(a,d);c=Math.floor(r(l.absoluteTop,c.top(d)+l.relativeTop))+k;k=Math.floor(this.colDistance*a.column+f.borderWidth/2)+k;k=e.inverted?e.plotSizeX-k:k;d=Math.round(this.nodeWidth);(a.sum=g)?(a.shapeType="rect",a.nodeX=k,a.nodeY=c,a.shapeArgs=e.inverted?{x:k-d,y:e.plotSizeY-c-h,width:a.options.height||f.height||d,height:a.options.width||f.width||h}:{x:k,y:c,width:a.options.width||
f.width||d,height:a.options.height||f.height||h},a.shapeArgs.display=a.hasShape()?"":"none",a.dlOptions=b.getDLOptions({level:this.mapOptionsToLevel[a.level],optionsPoint:a.options}),a.plotY=1,a.tooltipPos=e.inverted?[e.plotSizeY-a.shapeArgs.y-a.shapeArgs.height/2,e.plotSizeX-a.shapeArgs.x-a.shapeArgs.width/2]:[a.shapeArgs.x+a.shapeArgs.width/2,a.shapeArgs.y+a.shapeArgs.height/2]):a.dlOptions={enabled:!1}};b.defaultOptions=A(d.defaultOptions,{borderWidth:0,colorByPoint:!0,curveFactor:.33,dataLabels:{enabled:!0,
backgroundColor:"none",crop:!1,nodeFormat:void 0,nodeFormatter:function(){return this.point.name},format:void 0,formatter:function(){},inside:!0},inactiveOtherPoints:!0,linkOpacity:.5,minLinkWidth:0,nodeWidth:20,nodePadding:10,showInLegend:!1,states:{hover:{linkOpacity:1},inactive:{linkOpacity:.1,opacity:.1,animation:{duration:50}}},tooltip:{followPointer:!0,headerFormat:'<span style="font-size: 10px">{series.name}</span><br/>',pointFormat:"{point.fromNode.name} \u2192 {point.toNode.name}: <b>{point.weight}</b><br/>",
nodeFormat:"{point.name}: <b>{point.sum}</b><br/>"}});return b}(d);l(g.prototype,{animate:b.prototype.animate,createNode:h.createNode,destroy:h.destroy,forceDL:!0,invertable:!0,isCartesian:!1,orderNodes:!0,pointArrayMap:["from","to"],pointClass:t,searchPoint:k.noop,setData:h.setData});c.registerSeriesType("sankey",g);"";"";return g});q(c,"masters/modules/sankey.src.js",[],function(){})});
//# sourceMappingURL=sankey.js.map