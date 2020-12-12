/*
 Highcharts JS v8.2.2 (2020-12-12)

 (c) 2016-2019 Highsoft AS
 Authors: Jon Arild Nygard

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/sunburst",["highcharts"],function(r){a(r);a.Highcharts=r;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function r(a,k,d,q){a.hasOwnProperty(k)||(a[k]=q.apply(null,d))}a=a?a._modules:{};r(a,"Mixins/ColorMapSeries.js",[a["Core/Globals.js"],a["Core/Series/Point.js"],a["Core/Utilities.js"]],function(a,k,d){var q=d.defined;
return{colorMapPointMixin:{dataLabelOnNull:!0,isValid:function(){return null!==this.value&&Infinity!==this.value&&-Infinity!==this.value},setState:function(a){k.prototype.setState.call(this,a);this.graphic&&this.graphic.attr({zIndex:"hover"===a?1:0})}},colorMapSeriesMixin:{pointArrayMap:["value"],axisTypes:["xAxis","yAxis","colorAxis"],trackerGroups:["group","markerGroup","dataLabelsGroup"],getSymbol:a.noop,parallelArrays:["x","y","value"],colorKey:"value",pointAttribs:a.seriesTypes.column.prototype.pointAttribs,
colorAttribs:function(a){var h={};q(a.color)&&(h[this.colorProp||"fill"]=a.color);return h}}}});r(a,"Series/Treemap/TreemapAlgorithmGroup.js",[],function(){return function(){function a(a,d,q,m){this.height=a;this.width=d;this.plot=m;this.startDirection=this.direction=q;this.lH=this.nH=this.lW=this.nW=this.total=0;this.elArr=[];this.lP={total:0,lH:0,nH:0,lW:0,nW:0,nR:0,lR:0,aspectRatio:function(a,d){return Math.max(a/d,d/a)}}}a.prototype.addElement=function(a){this.lP.total=this.elArr[this.elArr.length-
1];this.total+=a;0===this.direction?(this.lW=this.nW,this.lP.lH=this.lP.total/this.lW,this.lP.lR=this.lP.aspectRatio(this.lW,this.lP.lH),this.nW=this.total/this.height,this.lP.nH=this.lP.total/this.nW,this.lP.nR=this.lP.aspectRatio(this.nW,this.lP.nH)):(this.lH=this.nH,this.lP.lW=this.lP.total/this.lH,this.lP.lR=this.lP.aspectRatio(this.lP.lW,this.lH),this.nH=this.total/this.width,this.lP.nW=this.lP.total/this.nH,this.lP.nR=this.lP.aspectRatio(this.lP.nW,this.nH));this.elArr.push(a)};a.prototype.reset=
function(){this.lW=this.nW=0;this.elArr=[];this.total=0};return a}()});r(a,"Mixins/DrawPoint.js",[],function(){var a=function(a){return"function"===typeof a},k=function(d){var k,m=this,h=m.graphic,n=d.animatableAttribs,f=d.onComplete,p=d.css,b=d.renderer,c=null===(k=m.series)||void 0===k?void 0:k.options.animation;if(m.shouldDraw())h||(m.graphic=h=b[d.shapeType](d.shapeArgs).add(d.group)),h.css(p).attr(d.attribs).animate(n,d.isNew?!1:c,f);else if(h){var C=function(){m.graphic=h=h.destroy();a(f)&&
f()};Object.keys(n).length?h.animate(n,void 0,function(){C()}):C()}};return{draw:k,drawPoint:function(a){(a.attribs=a.attribs||{})["class"]=this.getClassName();k.call(this,a)},isFn:a}});r(a,"Series/Treemap/TreemapPoint.js",[a["Core/Series/Series.js"],a["Mixins/DrawPoint.js"],a["Core/Utilities.js"]],function(a,k,d){var q=this&&this.__extends||function(){var a=function(b,h){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&
(a[c]=b[c])};return a(b,h)};return function(b,h){function c(){this.constructor=b}a(b,h);b.prototype=null===h?Object.create(h):(c.prototype=h.prototype,new c)}}(),m=a.seriesTypes,h=m.line.prototype.pointClass;a=m.pie.prototype.pointClass;var n=d.extend,f=d.isNumber,p=d.pick;d=function(a){function b(){var b=null!==a&&a.apply(this,arguments)||this;b.name=void 0;b.node=void 0;b.options=void 0;b.series=void 0;b.value=void 0;return b}q(b,a);b.prototype.getClassName=function(){var a=h.prototype.getClassName.call(this),
b=this.series,c=b.options;this.node.level<=b.nodeMap[b.rootNode].level?a+=" highcharts-above-level":this.node.isLeaf||p(c.interactByLeaf,!c.allowTraversingTree)?this.node.isLeaf||(a+=" highcharts-internal-node"):a+=" highcharts-internal-node-interactive";return a};b.prototype.isValid=function(){return!(!this.id&&!f(this.value))};b.prototype.setState=function(a){h.prototype.setState.call(this,a);this.graphic&&this.graphic.attr({zIndex:"hover"===a?1:0})};b.prototype.shouldDraw=function(){return f(this.plotY)&&
null!==this.y};return b}(m.scatter.prototype.pointClass);n(d.prototype,{draw:k.drawPoint,setVisible:a.prototype.setVisible});return d});r(a,"Series/Treemap/TreemapUtilities.js",[a["Core/Utilities.js"]],function(a){var k=a.objectEach,d;(function(a){function d(a,k,f){void 0===f&&(f=this);a=k.call(f,a);!1!==a&&d(a,k,f)}a.AXIS_MAX=100;a.isBoolean=function(a){return"boolean"===typeof a};a.eachObject=function(a,d,f){f=f||this;k(a,function(p,b){d.call(f,p,b,a)})};a.recursive=d})(d||(d={}));return d});r(a,
"Mixins/TreeSeries.js",[a["Core/Color/Color.js"],a["Core/Utilities.js"]],function(a,k){var d=k.extend,q=k.isArray,m=k.isNumber,h=k.isObject,n=k.merge,f=k.pick;return{getColor:function(p,b){var c=b.index,h=b.mapOptionsToLevel,d=b.parentColor,k=b.parentColorIndex,n=b.series,t=b.colors,m=b.siblings,w=n.points,q=n.chart.options.chart,z;if(p){w=w[p.i];p=h[p.level]||{};if(h=w&&p.colorByPoint){var r=w.index%(t?t.length:q.colorCount);var J=t&&t[r]}if(!n.chart.styledMode){t=w&&w.options.color;q=p&&p.color;
if(z=d)z=(z=p&&p.colorVariation)&&"brightness"===z.key?a.parse(d).brighten(c/m*z.to).get():d;z=f(t,q,J,z,n.color)}var G=f(w&&w.options.colorIndex,p&&p.colorIndex,r,k,b.colorIndex)}return{color:z,colorIndex:G}},getLevelOptions:function(a){var b=null;if(h(a)){b={};var c=m(a.from)?a.from:1;var f=a.levels;var k={};var p=h(a.defaults)?a.defaults:{};q(f)&&(k=f.reduce(function(a,b){if(h(b)&&m(b.level)){var f=n({},b);var k="boolean"===typeof f.levelIsConstant?f.levelIsConstant:p.levelIsConstant;delete f.levelIsConstant;
delete f.level;b=b.level+(k?0:c-1);h(a[b])?d(a[b],f):a[b]=f}return a},{}));f=m(a.to)?a.to:1;for(a=0;a<=f;a++)b[a]=n({},p,h(k[a])?k[a]:{})}return b},setTreeValues:function C(a,c){var b=c.before,h=c.idRoot,k=c.mapIdToNode[h],n=c.points[a.i],m=n&&n.options||{},w=0,q=[];d(a,{levelDynamic:a.level-(("boolean"===typeof c.levelIsConstant?c.levelIsConstant:1)?0:k.level),name:f(n&&n.name,""),visible:h===a.id||("boolean"===typeof c.visible?c.visible:!1)});"function"===typeof b&&(a=b(a,c));a.children.forEach(function(b,
f){var h=d({},c);d(h,{index:f,siblings:a.children.length,visible:a.visible});b=C(b,h);q.push(b);b.visible&&(w+=b.val)});a.visible=0<w||a.visible;b=f(m.value,w);d(a,{children:q,childrenTotal:w,isLeaf:a.visible&&!w,val:b});return a},updateRootId:function(a){if(h(a)){var b=h(a.options)?a.options:{};b=f(a.rootNode,b.rootId,"");h(a.userOptions)&&(a.userOptions.rootId=b);a.rootNode=b}return b}}});r(a,"Series/Treemap/TreemapComposition.js",[a["Core/Series/Series.js"],a["Series/Treemap/TreemapUtilities.js"],
a["Core/Utilities.js"]],function(a,k,d){var q=d.addEvent,m=d.extend,h=!1;q(a.seriesTypes.line,"afterBindAxes",function(){var a=this.xAxis,f=this.yAxis;if(a&&f)if(this.is("treemap")){var d={endOnTick:!1,gridLineWidth:0,lineWidth:0,min:0,dataMin:0,minPadding:0,max:k.AXIS_MAX,dataMax:k.AXIS_MAX,maxPadding:0,startOnTick:!1,title:null,tickPositions:[]};m(f.options,d);m(a.options,d);h=!0}else h&&(f.setOptions(f.userOptions),a.setOptions(a.userOptions),h=!1)})});r(a,"Series/Treemap/TreemapSeries.js",[a["Core/Series/Series.js"],
a["Core/Color/Color.js"],a["Mixins/ColorMapSeries.js"],a["Core/Globals.js"],a["Mixins/LegendSymbol.js"],a["Core/Color/Palette.js"],a["Series/Treemap/TreemapAlgorithmGroup.js"],a["Series/Treemap/TreemapPoint.js"],a["Series/Treemap/TreemapUtilities.js"],a["Mixins/TreeSeries.js"],a["Core/Utilities.js"]],function(a,k,d,q,m,h,n,f,p,b,c){var C=this&&this.__extends||function(){var a=function(b,e){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,a){e.__proto__=a}||function(e,a){for(var l in a)a.hasOwnProperty(l)&&
(e[l]=a[l])};return a(b,e)};return function(b,e){function l(){this.constructor=b}a(b,e);b.prototype=null===e?Object.create(e):(l.prototype=e.prototype,new l)}}(),D=a.seriesTypes,r=D.column,J=D.heatmap,t=D.line,O=D.scatter,w=k.parse,P=d.colorMapSeriesMixin;k=q.noop;var z=b.getColor,M=b.getLevelOptions,N=b.updateRootId,G=c.addEvent,Q=c.correctFloat,F=c.defined,R=c.error,L=c.extend,V=c.fireEvent,T=c.isArray,g=c.isObject,S=c.isString,A=c.merge,y=c.pick,W=c.stableSort;b=function(a){function b(){var e=
null!==a&&a.apply(this,arguments)||this;e.axisRatio=void 0;e.data=void 0;e.mapOptionsToLevel=void 0;e.nodeMap=void 0;e.options=void 0;e.points=void 0;e.rootNode=void 0;e.tree=void 0;return e}C(b,a);b.prototype.algorithmCalcPoints=function(e,a,b,g){var l,I,u,c,f=b.lW,h=b.lH,d=b.plot,k=0,K=b.elArr.length-1;if(a)f=b.nW,h=b.nH;else var n=b.elArr[b.elArr.length-1];b.elArr.forEach(function(e){if(a||k<K)0===b.direction?(l=d.x,I=d.y,u=f,c=e/u):(l=d.x,I=d.y,c=h,u=e/c),g.push({x:l,y:I,width:u,height:Q(c)}),
0===b.direction?d.y+=c:d.x+=u;k+=1});b.reset();0===b.direction?b.width-=f:b.height-=h;d.y=d.parent.y+(d.parent.height-b.height);d.x=d.parent.x+(d.parent.width-b.width);e&&(b.direction=1-b.direction);a||b.addElement(n)};b.prototype.algorithmFill=function(e,a,b){var l=[],B,g=a.direction,u=a.x,c=a.y,d=a.width,f=a.height,h,k,K,n;b.forEach(function(b){B=b.val/a.val*a.height*a.width;h=u;k=c;0===g?(n=f,K=B/n,d-=K,u+=K):(K=d,n=B/K,f-=n,c+=n);l.push({x:h,y:k,width:K,height:n});e&&(g=1-g)});return l};b.prototype.algorithmLowAspectRatio=
function(e,a,b){var l=[],B=this,g,u={x:a.x,y:a.y,parent:a},c=0,d=b.length-1,f=new n(a.height,a.width,a.direction,u);b.forEach(function(b){g=b.val/a.val*a.height*a.width;f.addElement(g);f.lP.nR>f.lP.lR&&B.algorithmCalcPoints(e,!1,f,l,u);c===d&&B.algorithmCalcPoints(e,!0,f,l,u);c+=1});return l};b.prototype.alignDataLabel=function(a,b,g){var e=g.style;!F(e.textOverflow)&&b.text&&b.getBBox().width>b.text.textWidth&&b.css({textOverflow:"ellipsis",width:e.width+="px"});r.prototype.alignDataLabel.apply(this,
arguments);a.dataLabel&&a.dataLabel.attr({zIndex:(a.node.zIndex||0)+1})};b.prototype.buildNode=function(a,b,g,c,B){var e=this,l=[],u=e.points[b],d=0,f;(c[a]||[]).forEach(function(b){f=e.buildNode(e.points[b].id,b,g+1,c,a);d=Math.max(f.height+1,d);l.push(f)});b={id:a,i:b,children:l,height:d,level:g,parent:B,visible:!1};e.nodeMap[b.id]=b;u&&(u.node=b);return b};b.prototype.calculateChildrenAreas=function(a,b){var e=this,l=e.options,g=e.mapOptionsToLevel[a.level+1],c=y(e[g&&g.layoutAlgorithm]&&g.layoutAlgorithm,
l.layoutAlgorithm),d=l.alternateStartingDirection,f=[];a=a.children.filter(function(a){return!a.ignore});g&&g.layoutStartingDirection&&(b.direction="vertical"===g.layoutStartingDirection?0:1);f=e[c](b,a);a.forEach(function(a,l){l=f[l];a.values=A(l,{val:a.childrenTotal,direction:d?1-b.direction:b.direction});a.pointValues=A(l,{x:l.x/e.axisRatio,y:p.AXIS_MAX-l.y-l.height,width:l.width/e.axisRatio});a.children.length&&e.calculateChildrenAreas(a,a.values)})};b.prototype.drawDataLabels=function(){var a=
this,b=a.mapOptionsToLevel,g,c;a.points.filter(function(a){return a.node.visible}).forEach(function(e){c=b[e.node.level];g={style:{}};e.node.isLeaf||(g.enabled=!1);c&&c.dataLabels&&(g=A(g,c.dataLabels),a._hasPointLabels=!0);e.shapeArgs&&(g.style.width=e.shapeArgs.width,e.dataLabel&&e.dataLabel.css({width:e.shapeArgs.width+"px"}));e.dlOptions=A(g,e.options.dataLabels)});t.prototype.drawDataLabels.call(this)};b.prototype.drawPoints=function(){var a=this,b=a.chart,g=b.renderer,c=b.styledMode,f=a.options,
d=c?{}:f.shadow,h=f.borderRadius,k=b.pointCount<f.animationLimit,n=f.allowTraversingTree;a.points.forEach(function(e){var b=e.node.levelDynamic,l={},B={},u={},I="level-group-"+e.node.level,E=!!e.graphic,X=k&&E,p=e.shapeArgs;e.shouldDraw()&&(h&&(B.r=h),A(!0,X?l:B,E?p:{},c?{}:a.pointAttribs(e,e.selected?"select":void 0)),a.colorAttribs&&c&&L(u,a.colorAttribs(e)),a[I]||(a[I]=g.g(I).attr({zIndex:1E3-(b||0)}).add(a.group),a[I].survive=!0));e.draw({animatableAttribs:l,attribs:B,css:u,group:a[I],renderer:g,
shadow:d,shapeArgs:p,shapeType:"rect"});n&&e.graphic&&(e.drillId=f.interactByLeaf?a.drillToByLeaf(e):a.drillToByGroup(e))})};b.prototype.drillToByGroup=function(a){var e=!1;1!==a.node.level-this.nodeMap[this.rootNode].level||a.node.isLeaf||(e=a.id);return e};b.prototype.drillToByLeaf=function(a){var e=!1;if(a.node.parent!==this.rootNode&&a.node.isLeaf)for(a=a.node;!e;)a=this.nodeMap[a.parent],a.parent===this.rootNode&&(e=a.id);return e};b.prototype.drillToNode=function(a,b){R(32,!1,void 0,{"treemap.drillToNode":"use treemap.setRootNode"});
this.setRootNode(a,b)};b.prototype.drillUp=function(){var a=this.nodeMap[this.rootNode];a&&S(a.parent)&&this.setRootNode(a.parent,!0,{trigger:"traverseUpButton"})};b.prototype.getExtremes=function(){var a=t.prototype.getExtremes.call(this,this.colorValueData),b=a.dataMax;this.valueMin=a.dataMin;this.valueMax=b;return t.prototype.getExtremes.call(this)};b.prototype.getListOfParents=function(a,b){a=T(a)?a:[];var e=T(b)?b:[];b=a.reduce(function(a,b,e){b=y(b.parent,"");"undefined"===typeof a[b]&&(a[b]=
[]);a[b].push(e);return a},{"":[]});p.eachObject(b,function(a,b,g){""!==b&&-1===e.indexOf(b)&&(a.forEach(function(a){g[""].push(a)}),delete g[b])});return b};b.prototype.getTree=function(){var a=this.data.map(function(a){return a.id});a=this.getListOfParents(this.data,a);this.nodeMap={};return this.buildNode("",-1,0,a)};b.prototype.hasData=function(){return!!this.processedXData.length};b.prototype.init=function(a,b){P&&(this.colorAttribs=P.colorAttribs);var e=G(this,"setOptions",function(a){a=a.userOptions;
F(a.allowDrillToNode)&&!F(a.allowTraversingTree)&&(a.allowTraversingTree=a.allowDrillToNode,delete a.allowDrillToNode);F(a.drillUpButton)&&!F(a.traverseUpButton)&&(a.traverseUpButton=a.drillUpButton,delete a.drillUpButton)});t.prototype.init.call(this,a,b);delete this.opacity;this.eventsToUnbind.push(e);this.options.allowTraversingTree&&this.eventsToUnbind.push(G(this,"click",this.onClickDrillToNode))};b.prototype.onClickDrillToNode=function(a){var b=(a=a.point)&&a.drillId;S(b)&&(a.setState(""),this.setRootNode(b,
!0,{trigger:"click"}))};b.prototype.pointAttribs=function(a,b){var e=g(this.mapOptionsToLevel)?this.mapOptionsToLevel:{},l=a&&e[a.node.level]||{};e=this.options;var c=b&&e.states[b]||{},f=a&&a.getClassName()||"";a={stroke:a&&a.borderColor||l.borderColor||c.borderColor||e.borderColor,"stroke-width":y(a&&a.borderWidth,l.borderWidth,c.borderWidth,e.borderWidth),dashstyle:a&&a.borderDashStyle||l.borderDashStyle||c.borderDashStyle||e.borderDashStyle,fill:a&&a.color||this.color};-1!==f.indexOf("highcharts-above-level")?
(a.fill="none",a["stroke-width"]=0):-1!==f.indexOf("highcharts-internal-node-interactive")?(b=y(c.opacity,e.opacity),a.fill=w(a.fill).setOpacity(b).get(),a.cursor="pointer"):-1!==f.indexOf("highcharts-internal-node")?a.fill="none":b&&(a.fill=w(a.fill).brighten(c.brightness).get());return a};b.prototype.renderTraverseUpButton=function(a){var b=this,e=b.options.traverseUpButton,g=y(e.text,b.nodeMap[a].name,"\u25c1 Back");if(""===a||b.is("sunburst")&&1===b.tree.children.length&&a===b.tree.children[0].id)b.drillUpButton&&
(b.drillUpButton=b.drillUpButton.destroy());else if(this.drillUpButton)this.drillUpButton.placed=!1,this.drillUpButton.attr({text:g}).align();else{var c=(a=e.theme)&&a.states;this.drillUpButton=this.chart.renderer.button(g,0,0,function(){b.drillUp()},a,c&&c.hover,c&&c.select).addClass("highcharts-drillup-button").attr({align:e.position.align,zIndex:7}).add().align(e.position,!1,e.relativeTo||"plotBox")}};b.prototype.setColorRecursive=function(a,b,g,c,f){var e=this,l=e&&e.chart;l=l&&l.options&&l.options.colors;
if(a){var d=z(a,{colors:l,index:c,mapOptionsToLevel:e.mapOptionsToLevel,parentColor:b,parentColorIndex:g,series:e,siblings:f});if(b=e.points[a.i])b.color=d.color,b.colorIndex=d.colorIndex;(a.children||[]).forEach(function(b,g){e.setColorRecursive(b,d.color,d.colorIndex,g,a.children.length)})}};b.prototype.setPointValues=function(){var a=this,b=a.xAxis,g=a.yAxis,c=a.chart.styledMode;a.points.forEach(function(e){var f=e.node,l=f.pointValues;f=f.visible;if(l&&f){f=l.height;var d=l.width,h=l.x,k=l.y,
n=c?0:(a.pointAttribs(e)["stroke-width"]||0)%2/2;l=Math.round(b.toPixels(h,!0))-n;d=Math.round(b.toPixels(h+d,!0))-n;h=Math.round(g.toPixels(k,!0))-n;f=Math.round(g.toPixels(k+f,!0))-n;e.shapeArgs={x:Math.min(l,d),y:Math.min(h,f),width:Math.abs(d-l),height:Math.abs(f-h)};e.plotX=e.shapeArgs.x+e.shapeArgs.width/2;e.plotY=e.shapeArgs.y+e.shapeArgs.height/2}else delete e.plotX,delete e.plotY})};b.prototype.setRootNode=function(a,b,g){a=L({newRootId:a,previousRootId:this.rootNode,redraw:y(b,!0),series:this},
g);V(this,"setRootNode",a,function(a){var b=a.series;b.idPreviousRoot=a.previousRootId;b.rootNode=a.newRootId;b.isDirty=!0;a.redraw&&b.chart.redraw()})};b.prototype.setState=function(a){this.options.inactiveOtherPoints=!0;t.prototype.setState.call(this,a,!1);this.options.inactiveOtherPoints=!1};b.prototype.setTreeValues=function(a){var b=this,e=b.options,g=b.nodeMap[b.rootNode];e=p.isBoolean(e.levelIsConstant)?e.levelIsConstant:!0;var c=0,f=[],d=b.points[a.i];a.children.forEach(function(a){a=b.setTreeValues(a);
f.push(a);a.ignore||(c+=a.val)});W(f,function(a,b){return(a.sortIndex||0)-(b.sortIndex||0)});var h=y(d&&d.options.value,c);d&&(d.value=h);L(a,{children:f,childrenTotal:c,ignore:!(y(d&&d.visible,!0)&&0<h),isLeaf:a.visible&&!c,levelDynamic:a.level-(e?0:g.level),name:y(d&&d.name,""),sortIndex:y(d&&d.sortIndex,-h),val:h});return a};b.prototype.sliceAndDice=function(a,b){return this.algorithmFill(!0,a,b)};b.prototype.squarified=function(a,b){return this.algorithmLowAspectRatio(!0,a,b)};b.prototype.strip=
function(a,b){return this.algorithmLowAspectRatio(!1,a,b)};b.prototype.stripes=function(a,b){return this.algorithmFill(!1,a,b)};b.prototype.translate=function(){var a=this,b=a.options,g=N(a);t.prototype.translate.call(a);var c=a.tree=a.getTree();var f=a.nodeMap[g];a.renderTraverseUpButton(g);a.mapOptionsToLevel=M({from:f.level+1,levels:b.levels,to:c.height,defaults:{levelIsConstant:a.options.levelIsConstant,colorByPoint:b.colorByPoint}});""===g||f&&f.children.length||(a.setRootNode("",!1),g=a.rootNode,
f=a.nodeMap[g]);p.recursive(a.nodeMap[a.rootNode],function(b){var g=!1,e=b.parent;b.visible=!0;if(e||""===e)g=a.nodeMap[e];return g});p.recursive(a.nodeMap[a.rootNode].children,function(a){var b=!1;a.forEach(function(a){a.visible=!0;a.children.length&&(b=(b||[]).concat(a.children))});return b});a.setTreeValues(c);a.axisRatio=a.xAxis.len/a.yAxis.len;a.nodeMap[""].pointValues=g={x:0,y:0,width:p.AXIS_MAX,height:p.AXIS_MAX};a.nodeMap[""].values=g=A(g,{width:g.width*a.axisRatio,direction:"vertical"===
b.layoutStartingDirection?0:1,val:c.val});a.calculateChildrenAreas(c,g);a.colorAxis||b.colorByPoint||a.setColorRecursive(a.tree);b.allowTraversingTree&&(b=f.pointValues,a.xAxis.setExtremes(b.x,b.x+b.width,!1),a.yAxis.setExtremes(b.y,b.y+b.height,!1),a.xAxis.setScale(),a.yAxis.setScale());a.setPointValues()};b.defaultOptions=A(O.defaultOptions,{allowTraversingTree:!1,animationLimit:250,showInLegend:!1,marker:void 0,colorByPoint:!1,dataLabels:{defer:!1,enabled:!0,formatter:function(){var a=this&&this.point?
this.point:{};return S(a.name)?a.name:""},inside:!0,verticalAlign:"middle"},tooltip:{headerFormat:"",pointFormat:"<b>{point.name}</b>: {point.value}<br/>"},ignoreHiddenPoint:!0,layoutAlgorithm:"sliceAndDice",layoutStartingDirection:"vertical",alternateStartingDirection:!1,levelIsConstant:!0,drillUpButton:{position:{align:"right",x:-10,y:10}},traverseUpButton:{position:{align:"right",x:-10,y:10}},borderColor:h.neutralColor10,borderWidth:1,colorKey:"colorValue",opacity:.15,states:{hover:{borderColor:h.neutralColor40,
brightness:J?0:.1,halo:!1,opacity:.75,shadow:!1}}});return b}(O);L(b.prototype,{buildKDTree:k,colorKey:"colorValue",directTouch:!0,drawLegendSymbol:m.drawRectangle,getExtremesFromAll:!0,getSymbol:k,optionalAxis:"colorAxis",parallelArrays:["x","y","value","colorValue"],pointArrayMap:["value"],pointClass:f,trackerGroups:["group","dataLabelsGroup"],utils:{recursive:p.recursive}});a.registerSeriesType("treemap",b);"";return b});r(a,"Series/Sunburst/SunburstPoint.js",[a["Core/Series/Series.js"],a["Core/Utilities.js"]],
function(a,k){var d=this&&this.__extends||function(){var a=function(d,f){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return a(d,f)};return function(d,f){function h(){this.constructor=d}a(d,f);d.prototype=null===f?Object.create(f):(h.prototype=f.prototype,new h)}}(),q=a.seriesTypes;a=q.line.prototype.pointClass;var m=k.correctFloat;k=k.extend;q=function(a){function h(){var f=null!==a&&a.apply(this,
arguments)||this;f.node=void 0;f.options=void 0;f.series=void 0;f.shapeExisting=void 0;return f}d(h,a);h.prototype.getDataLabelPath=function(a){var f=this.series.chart.renderer,b=this.shapeExisting,c=b.start,d=b.end,h=c+(d-c)/2;h=0>h&&h>-Math.PI||h>Math.PI;var k=b.r+(a.options.distance||0);c===-Math.PI/2&&m(d)===m(1.5*Math.PI)&&(c=-Math.PI+Math.PI/360,d=-Math.PI/360,h=!0);if(d-c>Math.PI){h=!1;var n=!0}this.dataLabelPath&&(this.dataLabelPath=this.dataLabelPath.destroy());this.dataLabelPath=f.arc({open:!0,
longArc:n?1:0}).add(a);this.dataLabelPath.attr({start:h?c:d,end:h?d:c,clockwise:+h,x:b.x,y:b.y,r:(k+b.innerR)/2});return this.dataLabelPath};h.prototype.isValid=function(){return!0};h.prototype.shouldDraw=function(){return!this.isNull};return h}(q.treemap.prototype.pointClass);k(q.prototype,{getClassName:a.prototype.getClassName,haloPath:a.prototype.haloPath,setState:a.prototype.setState});return q});r(a,"Series/Sunburst/SunburstUtilities.js",[a["Core/Series/Series.js"],a["Core/Utilities.js"]],function(a,
k){var d=a.seriesTypes.treemap,q=k.isNumber,m=k.isObject,h=k.merge,n;(function(a){function f(a,c){var b=[];if(q(a)&&q(c)&&a<=c)for(;a<=c;a++)b.push(a);return b}a.recursive=d.prototype.utils.recursive;a.calculateLevelSizes=function(a,c){c=m(c)?c:{};var b=0,d;if(m(a)){var k=h({},a);a=q(c.from)?c.from:0;var n=q(c.to)?c.to:0;var p=f(a,n);a=Object.keys(k).filter(function(a){return-1===p.indexOf(+a)});var r=d=q(c.diffRadius)?c.diffRadius:0;p.forEach(function(a){a=k[a];var c=a.levelSize.unit,f=a.levelSize.value;
"weight"===c?b+=f:"percentage"===c?(a.levelSize={unit:"pixels",value:f/100*r},d-=a.levelSize.value):"pixels"===c&&(d-=f)});p.forEach(function(a){var c=k[a];"weight"===c.levelSize.unit&&(c=c.levelSize.value,k[a].levelSize={unit:"pixels",value:c/b*d})});a.forEach(function(a){k[a].levelSize={value:0,unit:"pixels"}})}return k};a.getLevelFromAndTo=function(a){var b=a.level;return{from:0<b?b:1,to:b+a.height}};a.range=f})(n||(n={}));return n});r(a,"Series/Sunburst/SunburstSeries.js",[a["Core/Series/Series.js"],
a["Mixins/CenteredSeries.js"],a["Core/Globals.js"],a["Series/Sunburst/SunburstPoint.js"],a["Series/Sunburst/SunburstUtilities.js"],a["Mixins/TreeSeries.js"],a["Core/Utilities.js"]],function(a,k,d,q,m,h,n){function f(a,b){var g=b.mapIdToNode[a.parent],c=b.series,d=c.chart,f=c.points[a.i];g=t(a,{colors:c.options.colors||d&&d.options.colors,colorIndex:c.colorIndex,index:b.index,mapOptionsToLevel:b.mapOptionsToLevel,parentColor:g&&g.color,parentColorIndex:g&&g.colorIndex,series:b.series,siblings:b.siblings});
a.color=g.color;a.colorIndex=g.colorIndex;f&&(f.color=a.color,f.colorIndex=a.colorIndex,a.sliced=a.id!==b.idRoot?f.sliced:!1);return a}var p=this&&this.__extends||function(){var a=function(b,g){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var g in b)b.hasOwnProperty(g)&&(a[g]=b[g])};return a(b,g)};return function(b,g){function c(){this.constructor=b}a(b,g);b.prototype=null===g?Object.create(g):(c.prototype=g.prototype,new c)}}(),b=a.seriesTypes,
c=b.column,r=b.line,D=b.treemap,J=k.getCenter,U=k.getStartAndEndRadians;k=d.noop;var t=h.getColor,O=h.getLevelOptions,w=h.setTreeValues,P=h.updateRootId,z=n.error,M=n.extend,N=n.isNumber,G=n.isObject,Q=n.isString,F=n.merge,R=n.splat,L=180/Math.PI;h=function(a){function b(){var b=null!==a&&a.apply(this,arguments)||this;b.center=void 0;b.data=void 0;b.mapOptionsToLevel=void 0;b.nodeMap=void 0;b.options=void 0;b.points=void 0;b.shapeRoot=void 0;b.startAndEndRadians=void 0;b.tree=void 0;return b}p(b,
a);b.prototype.alignDataLabel=function(b,c,d){if(!d.textPath||!d.textPath.enabled)return a.prototype.alignDataLabel.apply(this,arguments)};b.prototype.animate=function(a){var b=this.chart,g=[b.plotWidth/2,b.plotHeight/2],c=b.plotLeft,d=b.plotTop;b=this.group;a?(a={translateX:g[0]+c,translateY:g[1]+d,scaleX:.001,scaleY:.001,rotation:10,opacity:.01},b.attr(a)):(a={translateX:c,translateY:d,scaleX:1,scaleY:1,rotation:0,opacity:1},b.animate(a,this.options.animation))};b.prototype.drawPoints=function(){var a=
this,b=a.mapOptionsToLevel,c=a.shapeRoot,d=a.group,f=a.hasRendered,h=a.rootNode,k=a.idPreviousRoot,e=a.nodeMap,l=e[k],n=l&&l.shapeArgs;l=a.points;var p=a.startAndEndRadians,q=a.chart,m=q&&q.options&&q.options.chart||{},w="boolean"===typeof m.animation?m.animation:!0,t=a.center[3]/2,z=a.chart.renderer,D=!1,C=!1;if(m=!!(w&&f&&h!==k&&a.dataLabelsGroup)){a.dataLabelsGroup.attr({opacity:0});var J=function(){D=!0;a.dataLabelsGroup&&a.dataLabelsGroup.animate({opacity:1,visibility:"visible"})}}l.forEach(function(g){var l=
g.node,m=b[l.level];var u=g.shapeExisting||{};var x=l.shapeArgs||{},r=!(!l.visible||!l.shapeArgs);if(f&&w){var A={};var y={end:x.end,start:x.start,innerR:x.innerR,r:x.r,x:x.x,y:x.y};r?!g.graphic&&n&&(A=h===g.id?{start:p.start,end:p.end}:n.end<=x.start?{start:p.end,end:p.end}:{start:p.start,end:p.start},A.innerR=A.r=t):g.graphic&&(k===g.id?y={innerR:t,r:t}:c&&(y=c.end<=u.start?{innerR:t,r:t,start:p.end,end:p.end}:{innerR:t,r:t,start:p.start,end:p.start}));u=A}else y=x,u={};A=[x.plotX,x.plotY];if(!g.node.isLeaf)if(h===
g.id){var v=e[h];v=v.parent}else v=g.id;M(g,{shapeExisting:x,tooltipPos:A,drillId:v,name:""+(g.name||g.id||g.index),plotX:x.plotX,plotY:x.plotY,value:l.val,isNull:!r});v=g.options;l=G(x)?x:{};v=G(v)?v.dataLabels:{};m=R(G(m)?m.dataLabels:{})[0];m=F({style:{}},m,v);v=m.rotationMode;if(!N(m.rotation)){if("auto"===v||"circular"===v)if(1>g.innerArcLength&&g.outerArcLength>l.radius){var H=0;g.dataLabelPath&&"circular"===v&&(m.textPath={enabled:!0})}else 1<g.innerArcLength&&g.outerArcLength>1.5*l.radius?
"circular"===v?m.textPath={enabled:!0,attributes:{dy:5}}:v="parallel":(g.dataLabel&&g.dataLabel.textPathWrapper&&"circular"===v&&(m.textPath={enabled:!1}),v="perpendicular");"auto"!==v&&"circular"!==v&&(H=l.end-(l.end-l.start)/2);m.style.width="parallel"===v?Math.min(2.5*l.radius,(g.outerArcLength+g.innerArcLength)/2):l.radius;"perpendicular"===v&&g.series.chart.renderer.fontMetrics(m.style.fontSize).h>g.outerArcLength&&(m.style.width=1);m.style.width=Math.max(m.style.width-2*(m.padding||0),1);H=
H*L%180;"parallel"===v&&(H-=90);90<H?H-=180:-90>H&&(H+=180);m.rotation=H}m.textPath&&(0===g.shapeExisting.innerR&&m.textPath.enabled?(m.rotation=0,m.textPath.enabled=!1,m.style.width=Math.max(2*g.shapeExisting.r-2*(m.padding||0),1)):g.dlOptions&&g.dlOptions.textPath&&!g.dlOptions.textPath.enabled&&"circular"===v&&(m.textPath.enabled=!0),m.textPath.enabled&&(m.rotation=0,m.style.width=Math.max((g.outerArcLength+g.innerArcLength)/2-2*(m.padding||0),1)));0===m.rotation&&(m.rotation=.001);g.dlOptions=
m;if(!C&&r){C=!0;var B=J}g.draw({animatableAttribs:y,attribs:M(u,!q.styledMode&&a.pointAttribs(g,g.selected&&"select")),onComplete:B,group:d,renderer:z,shapeType:"arc",shapeArgs:x})});m&&C?(a.hasRendered=!1,a.options.dataLabels.defer=!0,r.prototype.drawDataLabels.call(a),a.hasRendered=!0,D&&J()):r.prototype.drawDataLabels.call(a)};b.prototype.layoutAlgorithm=function(a,b,c){var g=a.start,d=a.end-g,f=a.val,h=a.x,e=a.y,l=c&&G(c.levelSize)&&N(c.levelSize.value)?c.levelSize.value:0,k=a.r,m=k+l,n=c&&N(c.slicedOffset)?
c.slicedOffset:0;return(b||[]).reduce(function(a,b){var c=1/f*b.val*d,p=g+c/2,x=h+Math.cos(p)*n;p=e+Math.sin(p)*n;b={x:b.sliced?x:h,y:b.sliced?p:e,innerR:k,r:m,radius:l,start:g,end:g+c};a.push(b);g=b.end;return a},[])};b.prototype.setShapeArgs=function(a,b,c){var g=[],d=c[a.level+1];a=a.children.filter(function(a){return a.visible});g=this.layoutAlgorithm(b,a,d);a.forEach(function(a,b){b=g[b];var e=b.start+(b.end-b.start)/2,d=b.innerR+(b.r-b.innerR)/2,f=b.end-b.start;d=0===b.innerR&&6.28<f?{x:b.x,
y:b.y}:{x:b.x+Math.cos(e)*d,y:b.y+Math.sin(e)*d};var h=a.val?a.childrenTotal>a.val?a.childrenTotal:a.val:a.childrenTotal;this.points[a.i]&&(this.points[a.i].innerArcLength=f*b.innerR,this.points[a.i].outerArcLength=f*b.r);a.shapeArgs=F(b,{plotX:d.x,plotY:d.y+4*Math.abs(Math.cos(e))});a.values=F(b,{val:h});a.children.length&&this.setShapeArgs(a,a.values,c)},this)};b.prototype.translate=function(){var a=this,b=a.options,c=a.center=J.call(a),d=a.startAndEndRadians=U(b.startAngle,b.endAngle),h=c[3]/2,
k=c[2]/2-h,n=P(a),e=a.nodeMap,l=e&&e[n],p={};a.shapeRoot=l&&l.shapeArgs;r.prototype.translate.call(a);var q=a.tree=a.getTree();a.renderTraverseUpButton(n);e=a.nodeMap;l=e[n];var t=Q(l.parent)?l.parent:"";t=e[t];var E=m.getLevelFromAndTo(l);var C=E.from,D=E.to;E=O({from:C,levels:a.options.levels,to:D,defaults:{colorByPoint:b.colorByPoint,dataLabels:b.dataLabels,levelIsConstant:b.levelIsConstant,levelSize:b.levelSize,slicedOffset:b.slicedOffset}});E=m.calculateLevelSizes(E,{diffRadius:k,from:C,to:D});
w(q,{before:f,idRoot:n,levelIsConstant:b.levelIsConstant,mapOptionsToLevel:E,mapIdToNode:e,points:a.points,series:a});b=e[""].shapeArgs={end:d.end,r:h,start:d.start,val:l.val,x:c[0],y:c[1]};this.setShapeArgs(t,b,E);a.mapOptionsToLevel=E;a.data.forEach(function(b){p[b.id]&&z(31,!1,a.chart);p[b.id]=!0});p={}};b.defaultOptions=F(D.defaultOptions,{center:["50%","50%"],colorByPoint:!1,opacity:1,dataLabels:{allowOverlap:!0,defer:!0,rotationMode:"auto",style:{textOverflow:"ellipsis"}},rootId:void 0,levelIsConstant:!0,
levelSize:{value:1,unit:"weight"},slicedOffset:10});return b}(D);M(h.prototype,{drawDataLabels:k,pointAttribs:c.prototype.pointAttribs,pointClass:q,utils:m});a.registerSeriesType("sunburst",h);"";return h});r(a,"masters/modules/sunburst.src.js",[],function(){})});
//# sourceMappingURL=sunburst.js.map