/*
 Highcharts JS v8.2.2 (2020-12-12)

 Old IE (v6, v7, v8) module for Highcharts v6+.

 (c) 2010-2019 Highsoft AS
 Author: Torstein Honsi

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/oldie",["highcharts"],function(E){a(E);a.Highcharts=E;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function E(a,D,n,G){a.hasOwnProperty(D)||(a[D]=G.apply(null,n))}a=a?a._modules:{};E(a,"Extensions/Math3D.js",[a["Core/Globals.js"],a["Core/Utilities.js"]],function(a,D){function n(a,f,c){f=0<c&&c<Number.POSITIVE_INFINITY?
c/(a.z+f.z+c):1;return{x:a.x*f,y:a.y*f}}function l(a,f,c,g){var A=f.options.chart.options3d,l=e(g,c?f.inverted:!1),q={x:f.plotWidth/2,y:f.plotHeight/2,z:A.depth/2,vd:e(A.depth,1)*e(A.viewDistance,0)},p=f.scale3d||1;g=B*A.beta*(l?-1:1);A=B*A.alpha*(l?-1:1);var I=Math.cos(A),t=Math.cos(-g),R=Math.sin(A),G=Math.sin(-g);c||(q.x+=f.plotLeft,q.y+=f.plotTop);return a.map(function(c){var f=(l?c.y:c.x)-q.x;var x=(l?c.x:c.y)-q.y;c=(c.z||0)-q.z;f={x:t*f-G*c,y:-R*G*f+I*x-t*R*c,z:I*G*f+R*x+I*t*c};x=n(f,q,q.vd);
x.x=x.x*p+q.x;x.y=x.y*p+q.y;x.z=f.z*p+q.z;return{x:l?x.y:x.x,y:l?x.x:x.y,z:x.z}})}function g(a,f){var c=f.options.chart.options3d,g=f.plotWidth/2;f=f.plotHeight/2;c=e(c.depth,1)*e(c.viewDistance,0)+c.depth;return Math.sqrt(Math.pow(g-e(a.plotX,a.x),2)+Math.pow(f-e(a.plotY,a.y),2)+Math.pow(c-e(a.plotZ,a.z),2))}function t(a){var f=0,c;for(c=0;c<a.length;c++){var e=(c+1)%a.length;f+=a[c].x*a[e].y-a[e].x*a[c].y}return f/2}function p(a,f,c){return t(l(a,f,c))}var e=D.pick,B=a.deg2rad;a.perspective3D=n;
a.perspective=l;a.pointCameraDistance=g;a.shapeArea=t;a.shapeArea3d=p;return{perspective:l,perspective3D:n,pointCameraDistance:g,shapeArea:t,shapeArea3D:p}});E(a,"Core/Renderer/SVG/SVGElement3D.js",[a["Core/Color/Color.js"],a["Core/Renderer/SVG/SVGElement.js"],a["Core/Utilities.js"]],function(a,D,n){var l=a.parse,g=n.defined,t=n.merge,p=n.objectEach,e=n.pick,B;(function(a){a.base={initArgs:function(a){var c=this,f=c.renderer,e=f[c.pathType+"Path"](a),g=e.zIndexes;c.parts.forEach(function(a){c[a]=
f.path(e[a]).attr({"class":"highcharts-3d-"+a,zIndex:g[a]||0}).add(c)});c.attr({"stroke-linejoin":"round",zIndex:g.group});c.originalDestroy=c.destroy;c.destroy=c.destroyParts;c.forcedSides=e.forcedSides},singleSetterForParts:function(a,c,e,g,l,B){var f={};g=[null,null,g||"attr",l,B];var n=e&&e.zIndexes;e?(n&&n.group&&this.attr({zIndex:n.group}),p(e,function(c,g){f[g]={};f[g][a]=c;n&&(f[g].zIndex=e.zIndexes[g]||0)}),g[1]=f):(f[a]=c,g[0]=f);return this.processParts.apply(this,g)},processParts:function(a,
c,g,l,n){var f=this;f.parts.forEach(function(B){c&&(a=e(c[B],!1));if(!1!==a)f[B][g](a,l,n)});return f},destroyParts:function(){this.processParts(null,null,"destroy");return this.originalDestroy()}};a.cuboid=t(a.base,{parts:["front","top","side"],pathType:"cuboid",attr:function(a,c,e,l){if("string"===typeof a&&"undefined"!==typeof c){var f=a;a={};a[f]=c}return a.shapeArgs||g(a.x)?this.singleSetterForParts("d",null,this.renderer[this.pathType+"Path"](a.shapeArgs||a)):D.prototype.attr.call(this,a,void 0,
e,l)},animate:function(f,c,e){if(g(f.x)&&g(f.y)){f=this.renderer[this.pathType+"Path"](f);var l=f.forcedSides;this.singleSetterForParts("d",null,f,"animate",c,e);this.attr({zIndex:f.zIndexes.group});l!==this.forcedSides&&(this.forcedSides=l,a.cuboid.fillSetter.call(this,this.fill))}else D.prototype.animate.call(this,f,c,e);return this},fillSetter:function(a){this.forcedSides=this.forcedSides||[];this.singleSetterForParts("fill",null,{front:a,top:l(a).brighten(0<=this.forcedSides.indexOf("top")?0:
.1).get(),side:l(a).brighten(0<=this.forcedSides.indexOf("side")?0:-.1).get()});this.color=this.fill=a;return this}})})(B||(B={}));return B});E(a,"Core/Renderer/SVG/SVGRenderer3D.js",[a["Core/Animation/AnimationUtilities.js"],a["Core/Color/Color.js"],a["Core/Globals.js"],a["Extensions/Math3D.js"],a["Core/Renderer/SVG/SVGElement.js"],a["Core/Renderer/SVG/SVGElement3D.js"],a["Core/Renderer/SVG/SVGRenderer.js"],a["Core/Utilities.js"]],function(a,D,n,G,g,t,p,e){function l(a,c,b,u,w,k,y,d){var h=[],m=
k-w;return k>w&&k-w>Math.PI/2+.0001?(h=h.concat(l(a,c,b,u,w,w+Math.PI/2,y,d)),h=h.concat(l(a,c,b,u,w+Math.PI/2,k,y,d))):k<w&&w-k>Math.PI/2+.0001?(h=h.concat(l(a,c,b,u,w,w-Math.PI/2,y,d)),h=h.concat(l(a,c,b,u,w-Math.PI/2,k,y,d))):[["C",a+b*Math.cos(w)-b*Q*m*Math.sin(w)+y,c+u*Math.sin(w)+u*Q*m*Math.cos(w)+d,a+b*Math.cos(k)+b*Q*m*Math.sin(k)+y,c+u*Math.sin(k)-u*Q*m*Math.cos(k)+d,a+b*Math.cos(k)+y,c+u*Math.sin(k)+d]]}var E=a.animObject,f=D.parse,c=n.charts,I=n.deg2rad,A=G.perspective,H=G.shapeArea,q=
e.defined,M=e.extend,S=e.merge,C=e.pick,O=Math.cos,P=Math.sin,F=Math.PI,Q=4*(Math.sqrt(2)-1)/3/(F/2);p.prototype.elements3d=t;p.prototype.toLinePath=function(a,c){var b=[];a.forEach(function(a){b.push(["L",a.x,a.y])});a.length&&(b[0][0]="M",c&&b.push(["Z"]));return b};p.prototype.toLineSegments=function(a){var c=[],b=!0;a.forEach(function(a){c.push(b?["M",a.x,a.y]:["L",a.x,a.y]);b=!b});return c};p.prototype.face3d=function(a){var f=this,b=this.createElement("path");b.vertexes=[];b.insidePlotArea=
!1;b.enabled=!0;b.attr=function(a){if("object"===typeof a&&(q(a.enabled)||q(a.vertexes)||q(a.insidePlotArea))){this.enabled=C(a.enabled,this.enabled);this.vertexes=C(a.vertexes,this.vertexes);this.insidePlotArea=C(a.insidePlotArea,this.insidePlotArea);delete a.enabled;delete a.vertexes;delete a.insidePlotArea;var b=A(this.vertexes,c[f.chartIndex],this.insidePlotArea),k=f.toLinePath(b,!0);b=H(b);b=this.enabled&&0<b?"visible":"hidden";a.d=k;a.visibility=b}return g.prototype.attr.apply(this,arguments)};
b.animate=function(a){if("object"===typeof a&&(q(a.enabled)||q(a.vertexes)||q(a.insidePlotArea))){this.enabled=C(a.enabled,this.enabled);this.vertexes=C(a.vertexes,this.vertexes);this.insidePlotArea=C(a.insidePlotArea,this.insidePlotArea);delete a.enabled;delete a.vertexes;delete a.insidePlotArea;var b=A(this.vertexes,c[f.chartIndex],this.insidePlotArea),k=f.toLinePath(b,!0);b=H(b);b=this.enabled&&0<b?"visible":"hidden";a.d=k;this.attr("visibility",b)}return g.prototype.animate.apply(this,arguments)};
return b.attr(a)};p.prototype.polyhedron=function(a){var c=this,b=this.g(),u=b.destroy;this.styledMode||b.attr({"stroke-linejoin":"round"});b.faces=[];b.destroy=function(){for(var a=0;a<b.faces.length;a++)b.faces[a].destroy();return u.call(this)};b.attr=function(a,k,y,d){if("object"===typeof a&&q(a.faces)){for(;b.faces.length>a.faces.length;)b.faces.pop().destroy();for(;b.faces.length<a.faces.length;)b.faces.push(c.face3d().add(b));for(var h=0;h<a.faces.length;h++)c.styledMode&&delete a.faces[h].fill,
b.faces[h].attr(a.faces[h],null,y,d);delete a.faces}return g.prototype.attr.apply(this,arguments)};b.animate=function(a,k,y){if(a&&a.faces){for(;b.faces.length>a.faces.length;)b.faces.pop().destroy();for(;b.faces.length<a.faces.length;)b.faces.push(c.face3d().add(b));for(var d=0;d<a.faces.length;d++)b.faces[d].animate(a.faces[d],k,y);delete a.faces}return g.prototype.animate.apply(this,arguments)};return b.attr(a)};p.prototype.element3d=function(a,c){var b=this.g();M(b,this.elements3d[a]);b.initArgs(c);
return b};p.prototype.cuboid=function(a){return this.element3d("cuboid",a)};p.prototype.cuboidPath=function(a){function f(d){return 0===y&&1<d&&6>d?{x:l[d].x,y:l[d].y+10,z:l[d].z}:l[0].x===l[7].x&&4<=d?{x:l[d].x+10,y:l[d].y,z:l[d].z}:0===h&&2>d||5<d?{x:l[d].x,y:l[d].y,z:l[d].z+10}:l[d]}function b(d){return l[d]}var u=a.x,e=a.y,k=a.z||0,y=a.height,d=a.width,h=a.depth,m=c[this.chartIndex],r=m.options.chart.options3d.alpha,J=0,l=[{x:u,y:e,z:k},{x:u+d,y:e,z:k},{x:u+d,y:e+y,z:k},{x:u,y:e+y,z:k},{x:u,y:e+
y,z:k+h},{x:u+d,y:e+y,z:k+h},{x:u+d,y:e,z:k+h},{x:u,y:e,z:k+h}],g=[];l=A(l,m,a.insidePlotArea);var v=function(d,h,a){var m=[[],-1],k=d.map(b),r=h.map(b);d=d.map(f);h=h.map(f);0>H(k)?m=[k,0]:0>H(r)?m=[r,1]:a&&(g.push(a),m=0>H(d)?[k,0]:0>H(h)?[r,1]:[k,0]);return m};var z=v([3,2,1,0],[7,6,5,4],"front");a=z[0];var x=z[1];z=v([1,6,7,0],[4,5,2,3],"top");d=z[0];var n=z[1];z=v([1,2,5,6],[0,7,4,3],"side");v=z[0];z=z[1];1===z?J+=1E6*(m.plotWidth-u):z||(J+=1E6*u);J+=10*(!n||0<=r&&180>=r||360>r&&357.5<r?m.plotHeight-
e:10+e);1===x?J+=100*k:x||(J+=100*(1E3-k));return{front:this.toLinePath(a,!0),top:this.toLinePath(d,!0),side:this.toLinePath(v,!0),zIndexes:{group:Math.round(J)},forcedSides:g,isFront:x,isTop:n}};p.prototype.arc3d=function(a){function c(a){var b=!1,d={},h;a=S(a);for(h in a)-1!==e.indexOf(h)&&(d[h]=a[h],delete a[h],b=!0);return b?[d,a]:!1}var b=this.g(),l=b.renderer,e="x y r innerR start end depth".split(" ");a=S(a);a.alpha=(a.alpha||0)*I;a.beta=(a.beta||0)*I;b.top=l.path();b.side1=l.path();b.side2=
l.path();b.inn=l.path();b.out=l.path();b.onAdd=function(){var a=b.parentGroup,c=b.attr("class");b.top.add(b);["out","inn","side1","side2"].forEach(function(d){b[d].attr({"class":c+" highcharts-3d-side"}).add(a)})};["addClass","removeClass"].forEach(function(a){b[a]=function(){var c=arguments;["top","out","inn","side1","side2"].forEach(function(d){b[d][a].apply(b[d],c)})}});b.setPaths=function(a){var c=b.renderer.arc3dPath(a),d=100*c.zTop;b.attribs=a;b.top.attr({d:c.top,zIndex:c.zTop});b.inn.attr({d:c.inn,
zIndex:c.zInn});b.out.attr({d:c.out,zIndex:c.zOut});b.side1.attr({d:c.side1,zIndex:c.zSide1});b.side2.attr({d:c.side2,zIndex:c.zSide2});b.zIndex=d;b.attr({zIndex:d});a.center&&(b.top.setRadialReference(a.center),delete a.center)};b.setPaths(a);b.fillSetter=function(a){var b=f(a).brighten(-.1).get();this.fill=a;this.side1.attr({fill:b});this.side2.attr({fill:b});this.inn.attr({fill:b});this.out.attr({fill:b});this.top.attr({fill:a});return this};["opacity","translateX","translateY","visibility"].forEach(function(a){b[a+
"Setter"]=function(a,d){b[d]=a;["out","inn","side1","side2","top"].forEach(function(h){b[h].attr(d,a)})}});b.attr=function(a){var k;if("object"===typeof a&&(k=c(a))){var d=k[0];arguments[0]=k[1];M(b.attribs,d);b.setPaths(b.attribs)}return g.prototype.attr.apply(b,arguments)};b.animate=function(a,l,d){var h=this.attribs,m="data-"+Math.random().toString(26).substring(2,9);delete a.center;delete a.z;delete a.alpha;delete a.beta;var r=E(C(l,this.renderer.globalAnimation));if(r.duration){l=c(a);b[m]=0;
a[m]=1;b[m+"Setter"]=n.noop;if(l){var k=l[0];r.step=function(d,a){function b(d){return h[d]+(C(k[d],h[d])-h[d])*a.pos}a.prop===m&&a.elem.setPaths(S(h,{x:b("x"),y:b("y"),r:b("r"),innerR:b("innerR"),start:b("start"),end:b("end"),depth:b("depth")}))}}l=r}return g.prototype.animate.call(this,a,l,d)};b.destroy=function(){this.top.destroy();this.out.destroy();this.inn.destroy();this.side1.destroy();this.side2.destroy();return g.prototype.destroy.call(this)};b.hide=function(){this.top.hide();this.out.hide();
this.inn.hide();this.side1.hide();this.side2.hide()};b.show=function(a){this.top.show(a);this.out.show(a);this.inn.show(a);this.side1.show(a);this.side2.show(a)};return b};p.prototype.arc3dPath=function(a){function c(d){d%=2*Math.PI;d>Math.PI&&(d=2*Math.PI-d);return d}var b=a.x,e=a.y,f=a.start,k=a.end-.00001,g=a.r,d=a.innerR||0,h=a.depth||0,m=a.alpha,r=a.beta,J=Math.cos(f),n=Math.sin(f);a=Math.cos(k);var N=Math.sin(k),v=g*Math.cos(r);g*=Math.cos(m);var z=d*Math.cos(r),p=d*Math.cos(m);d=h*Math.sin(r);
var K=h*Math.sin(m);h=[["M",b+v*J,e+g*n]];h=h.concat(l(b,e,v,g,f,k,0,0));h.push(["L",b+z*a,e+p*N]);h=h.concat(l(b,e,z,p,k,f,0,0));h.push(["Z"]);var t=0<r?Math.PI/2:0;r=0<m?0:Math.PI/2;t=f>-t?f:k>-t?-t:f;var L=k<F-r?k:f<F-r?F-r:k,q=2*F-r;m=[["M",b+v*O(t),e+g*P(t)]];m=m.concat(l(b,e,v,g,t,L,0,0));k>q&&f<q?(m.push(["L",b+v*O(L)+d,e+g*P(L)+K]),m=m.concat(l(b,e,v,g,L,q,d,K)),m.push(["L",b+v*O(q),e+g*P(q)]),m=m.concat(l(b,e,v,g,q,k,0,0)),m.push(["L",b+v*O(k)+d,e+g*P(k)+K]),m=m.concat(l(b,e,v,g,k,q,d,K)),
m.push(["L",b+v*O(q),e+g*P(q)]),m=m.concat(l(b,e,v,g,q,L,0,0))):k>F-r&&f<F-r&&(m.push(["L",b+v*Math.cos(L)+d,e+g*Math.sin(L)+K]),m=m.concat(l(b,e,v,g,L,k,d,K)),m.push(["L",b+v*Math.cos(k),e+g*Math.sin(k)]),m=m.concat(l(b,e,v,g,k,L,0,0)));m.push(["L",b+v*Math.cos(L)+d,e+g*Math.sin(L)+K]);m=m.concat(l(b,e,v,g,L,t,d,K));m.push(["Z"]);r=[["M",b+z*J,e+p*n]];r=r.concat(l(b,e,z,p,f,k,0,0));r.push(["L",b+z*Math.cos(k)+d,e+p*Math.sin(k)+K]);r=r.concat(l(b,e,z,p,k,f,d,K));r.push(["Z"]);J=[["M",b+v*J,e+g*n],
["L",b+v*J+d,e+g*n+K],["L",b+z*J+d,e+p*n+K],["L",b+z*J,e+p*n],["Z"]];b=[["M",b+v*a,e+g*N],["L",b+v*a+d,e+g*N+K],["L",b+z*a+d,e+p*N+K],["L",b+z*a,e+p*N],["Z"]];N=Math.atan2(K,-d);e=Math.abs(k+N);a=Math.abs(f+N);f=Math.abs((f+k)/2+N);e=c(e);a=c(a);f=c(f);f*=1E5;k=1E5*a;e*=1E5;return{top:h,zTop:1E5*Math.PI+1,out:m,zOut:Math.max(f,k,e),inn:r,zInn:Math.max(f,k,e),side1:J,zSide1:.99*e,side2:b,zSide2:.99*k}};return p});E(a,"Extensions/Oldie/VMLAxis3D.js",[a["Core/Utilities.js"]],function(a){var l=a.addEvent,
n=function(){return function(a){this.axis=a}}();return function(){function a(){}a.compose=function(g){g.keepProps.push("vml");l(g,"init",a.onInit);l(g,"render",a.onRender)};a.onInit=function(){this.vml||(this.vml=new n(this))};a.onRender=function(){var a=this.vml;a.sideFrame&&(a.sideFrame.css({zIndex:0}),a.sideFrame.front.attr({fill:a.sideFrame.color}));a.bottomFrame&&(a.bottomFrame.css({zIndex:1}),a.bottomFrame.front.attr({fill:a.bottomFrame.color}));a.backFrame&&(a.backFrame.css({zIndex:0}),a.backFrame.front.attr({fill:a.backFrame.color}))};
return a}()});E(a,"Extensions/Oldie/VMLRenderer3D.js",[a["Core/Axis/Axis.js"],a["Core/Utilities.js"],a["Extensions/Oldie/VMLAxis3D.js"]],function(a,D,n){var l=D.setOptions;return function(){function g(){}g.compose=function(g,p){var e=p.prototype;g=g.prototype;l({animate:!1});g.face3d=e.face3d;g.polyhedron=e.polyhedron;g.elements3d=e.elements3d;g.element3d=e.element3d;g.cuboid=e.cuboid;g.cuboidPath=e.cuboidPath;g.toLinePath=e.toLinePath;g.toLineSegments=e.toLineSegments;g.arc3d=function(a){a=e.arc3d.call(this,
a);a.css({zIndex:a.zIndex});return a};g.arc3dPath=e.arc3dPath;n.compose(a)};return g}()});E(a,"Extensions/Oldie/Oldie.js",[a["Core/Chart/Chart.js"],a["Core/Color/Color.js"],a["Core/Globals.js"],a["Core/Color/Palette.js"],a["Core/Pointer.js"],a["Core/Renderer/SVG/SVGElement.js"],a["Core/Renderer/SVG/SVGRenderer3D.js"],a["Core/Utilities.js"],a["Extensions/Oldie/VMLRenderer3D.js"]],function(a,D,n,E,g,t,p,e,B){var l=D.parse,f=n.deg2rad,c=n.doc,I=n.noop,A=n.svg,H=n.win,q=e.addEvent,M=e.createElement,G=
e.css,C=e.defined,O=e.discardElement,P=e.erase,F=e.extend;D=e.extendClass;var Q=e.getOptions,x=e.isArray,T=e.isNumber,b=e.isObject,u=e.offset,w=e.pick,k=e.pInt,y=e.uniqueKey;Q().global.VMLRadialGradientURL="http://code.highcharts.com/8.2.2/gfx/vml-radial-gradient.png";c&&!c.defaultView&&(n.getStyle=e.getStyle=function(d,a){var h={width:"clientWidth",height:"clientHeight"}[a];if(d.style[a])return k(d.style[a]);"opacity"===a&&(a="filter");if(h)return d.style.zoom=1,Math.max(d[h]-2*e.getStyle(d,"padding"),
0);d=d.currentStyle[a.replace(/\-(\w)/g,function(a,d){return d.toUpperCase()})];"filter"===a&&(d=d.replace(/alpha\(opacity=([0-9]+)\)/,function(a,d){return d/100}));return""===d?1:k(d)});A||(q(t,"afterInit",function(){"text"===this.element.nodeName&&this.css({position:"absolute"})}),g.prototype.normalize=function(a,h){a=a||H.event;a.target||(a.target=a.srcElement);h||(this.chartPosition=h=u(this.chart.container));return F(a,{chartX:Math.round(Math.max(a.x,a.clientX-h.left)),chartY:Math.round(a.y)})},
a.prototype.ieSanitizeSVG=function(a){return a=a.replace(/<IMG /g,"<image ").replace(/<(\/?)TITLE>/g,"<$1title>").replace(/height=([^" ]+)/g,'height="$1"').replace(/width=([^" ]+)/g,'width="$1"').replace(/hc-svg-href="([^"]+)">/g,'xlink:href="$1"/>').replace(/ id=([^" >]+)/g,' id="$1"').replace(/class=([^" >]+)/g,'class="$1"').replace(/ transform /g," ").replace(/:(path|rect)/g,"$1").replace(/style="([^"]+)"/g,function(a){return a.toLowerCase()})},a.prototype.isReadyToRender=function(){var a=this;
return A||H!=H.top||"complete"===c.readyState?!0:(c.attachEvent("onreadystatechange",function(){c.detachEvent("onreadystatechange",a.firstRender);"complete"===c.readyState&&a.firstRender()}),!1)},c.createElementNS||(c.createElementNS=function(a,h){return c.createElement(h)}),n.addEventListenerPolyfill=function(a,h){function d(a){a.target=a.srcElement||H;h.call(b,a)}var b=this;b.attachEvent&&(b.hcEventsIE||(b.hcEventsIE={}),h.hcKey||(h.hcKey=y()),b.hcEventsIE[h.hcKey]=d,b.attachEvent("on"+a,d))},n.removeEventListenerPolyfill=
function(a,h){this.detachEvent&&(h=this.hcEventsIE[h.hcKey],this.detachEvent("on"+a,h))},a={docMode8:c&&8===c.documentMode,init:function(a,h){var d=["<",h,' filled="f" stroked="f"'],b=["position: ","absolute",";"],c="div"===h;("shape"===h||c)&&b.push("left:0;top:0;width:1px;height:1px;");b.push("visibility: ",c?"hidden":"visible");d.push(' style="',b.join(""),'"/>');h&&(d=c||"span"===h||"img"===h?d.join(""):a.prepVML(d),this.element=M(d));this.renderer=a},add:function(a){var d=this.renderer,b=this.element,
c=d.box,e=a&&a.inverted;c=a?a.element||a:c;a&&(this.parentGroup=a);e&&d.invertChild(b,c);c.appendChild(b);this.added=!0;this.alignOnAdd&&!this.deferUpdateTransform&&this.updateTransform();if(this.onAdd)this.onAdd();this.className&&this.attr("class",this.className);return this},updateTransform:t.prototype.htmlUpdateTransform,setSpanRotation:function(){var a=this.rotation,h=Math.cos(a*f),b=Math.sin(a*f);G(this.element,{filter:a?["progid:DXImageTransform.Microsoft.Matrix(M11=",h,", M12=",-b,", M21=",
b,", M22=",h,", sizingMethod='auto expand')"].join(""):"none"})},getSpanCorrection:function(a,h,b,c,e){var d=c?Math.cos(c*f):1,m=c?Math.sin(c*f):0,g=w(this.elemHeight,this.element.offsetHeight);this.xCorr=0>d&&-a;this.yCorr=0>m&&-g;var k=0>d*m;this.xCorr+=m*h*(k?1-b:b);this.yCorr-=d*h*(c?k?b:1-b:1);e&&"left"!==e&&(this.xCorr-=a*b*(0>d?-1:1),c&&(this.yCorr-=g*b*(0>m?-1:1)),G(this.element,{textAlign:e}))},pathToVML:function(a){for(var d=a.length,b=[];d--;)T(a[d])?b[d]=Math.round(10*a[d])-5:"Z"===a[d]?
b[d]="x":(b[d]=a[d],!a.isArc||"wa"!==a[d]&&"at"!==a[d]||(b[d+5]===b[d+7]&&(b[d+7]+=a[d+7]>a[d+5]?1:-1),b[d+6]===b[d+8]&&(b[d+8]+=a[d+8]>a[d+6]?1:-1)));return b.join(" ")||"x"},clip:function(a){var d=this;if(a){var b=a.members;P(b,d);b.push(d);d.destroyClip=function(){P(b,d)};a=a.getCSS(d)}else d.destroyClip&&d.destroyClip(),a={clip:d.docMode8?"inherit":"rect(auto)"};return d.css(a)},css:t.prototype.htmlCss,safeRemoveChild:function(a){a.parentNode&&O(a)},destroy:function(){this.destroyClip&&this.destroyClip();
return t.prototype.destroy.apply(this)},on:function(a,b){this.element["on"+a]=function(){var a=H.event;a.target=a.srcElement;b(a)};return this},cutOffPath:function(a,b){a=a.split(/[ ,]/);var d=a.length;if(9===d||11===d)a[d-4]=a[d-2]=k(a[d-2])-10*b;return a.join(" ")},shadow:function(a,b,m){var d=[],h,c=this.element,e=this.renderer,f=c.style,g=c.path;g&&"string"!==typeof g.value&&(g="x");var l=g;if(a){var n=w(a.width,3);var p=(a.opacity||.15)/n;for(h=1;3>=h;h++){var q=2*n+1-2*h;m&&(l=this.cutOffPath(g.value,
q+.5));var t=['<shape isShadow="true" strokeweight="',q,'" filled="false" path="',l,'" coordsize="10 10" style="',c.style.cssText,'" />'];var u=M(e.prepVML(t),null,{left:k(f.left)+w(a.offsetX,1),top:k(f.top)+w(a.offsetY,1)});m&&(u.cutOff=q+1);t=['<stroke color="',a.color||E.neutralColor100,'" opacity="',p*h,'"/>'];M(e.prepVML(t),null,null,u);b?b.element.appendChild(u):c.parentNode.insertBefore(u,c);d.push(u)}this.shadows=d}return this},updateShadows:I,setAttr:function(a,b){this.docMode8?this.element[a]=
b:this.element.setAttribute(a,b)},getAttr:function(a){return this.docMode8?this.element[a]:this.element.getAttribute(a)},classSetter:function(a){(this.added?this.element:this).className=a},dashstyleSetter:function(a,b,c){(c.getElementsByTagName("stroke")[0]||M(this.renderer.prepVML(["<stroke/>"]),null,null,c))[b]=a||"solid";this[b]=a},dSetter:function(a,b,c){var d=this.shadows;a=a||[];this.d=a.join&&a.join(" ");c.path=a=this.pathToVML(a);if(d)for(c=d.length;c--;)d[c].path=d[c].cutOff?this.cutOffPath(a,
d[c].cutOff):a;this.setAttr(b,a)},fillSetter:function(a,b,c){var d=c.nodeName;"SPAN"===d?c.style.color=a:"IMG"!==d&&(c.filled="none"!==a,this.setAttr("fillcolor",this.renderer.color(a,c,b,this)))},"fill-opacitySetter":function(a,b,c){M(this.renderer.prepVML(["<",b.split("-")[0],' opacity="',a,'"/>']),null,null,c)},opacitySetter:I,rotationSetter:function(a,b,c){c=c.style;this[b]=c[b]=a;c.left=-Math.round(Math.sin(a*f)+1)+"px";c.top=Math.round(Math.cos(a*f))+"px"},strokeSetter:function(a,b,c){this.setAttr("strokecolor",
this.renderer.color(a,c,b,this))},"stroke-widthSetter":function(a,b,c){c.stroked=!!a;this[b]=a;T(a)&&(a+="px");this.setAttr("strokeweight",a)},titleSetter:function(a,b){this.setAttr(b,a)},visibilitySetter:function(a,b,c){"inherit"===a&&(a="visible");this.shadows&&this.shadows.forEach(function(d){d.style[b]=a});"DIV"===c.nodeName&&(a="hidden"===a?"-999em":0,this.docMode8||(c.style[b]=a?"visible":"hidden"),b="top");c.style[b]=a},xSetter:function(a,b,c){this[b]=a;"x"===b?b="left":"y"===b&&(b="top");
this.updateClipping?(this[b]=a,this.updateClipping()):c.style[b]=a},zIndexSetter:function(a,b,c){c.style[b]=a},fillGetter:function(){return this.getAttr("fillcolor")||""},strokeGetter:function(){return this.getAttr("strokecolor")||""},classGetter:function(){return this.getAttr("className")||""}},a["stroke-opacitySetter"]=a["fill-opacitySetter"],n.VMLElement=a=D(t,a),a.prototype.ySetter=a.prototype.widthSetter=a.prototype.heightSetter=a.prototype.xSetter,g={Element:a,isIE8:-1<H.navigator.userAgent.indexOf("MSIE 8.0"),
init:function(a,b,e){this.crispPolyLine=p.prototype.crispPolyLine;this.alignedObjects=[];var d=this.createElement("div").css({position:"relative"});var h=d.element;a.appendChild(d.element);this.isVML=!0;this.box=h;this.boxWrapper=d;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(b,e,!1);if(!c.namespaces.hcv){c.namespaces.add("hcv","urn:schemas-microsoft-com:vml");try{c.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}catch(U){c.styleSheets[0].cssText+=
"hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}}},isHidden:function(){return!this.box.offsetWidth},clipRect:function(a,c,e,g){var d=this.createElement(),h=b(a);return F(d,{members:[],count:0,left:(h?a.x:a)+1,top:(h?a.y:c)+1,width:(h?a.width:e)-1,height:(h?a.height:g)-1,getCSS:function(a){var d=a.element,b=d.nodeName,c=a.inverted,h=this.top-("shape"===b?d.offsetTop:0),e=this.left;d=e+this.width;var m=h+this.height;h={clip:"rect("+Math.round(c?
e:h)+"px,"+Math.round(c?m:d)+"px,"+Math.round(c?d:m)+"px,"+Math.round(c?h:e)+"px)"};!c&&a.docMode8&&"DIV"===b&&F(h,{width:d+"px",height:m+"px"});return h},updateClipping:function(){d.members.forEach(function(a){a.element&&a.css(d.getCSS(a))})}})},color:function(a,b,c,e){var d=this,h=/^rgba/,g,m,f="none";a&&a.linearGradient?m="gradient":a&&a.radialGradient&&(m="pattern");if(m){var k,r,n=a.linearGradient||a.radialGradient,p,q,t,u,w="";a=a.stops;var x=[],y=function(){g=['<fill colors="'+x.join(",")+
'" opacity="',q,'" o:opacity2="',p,'" type="',m,'" ',w,'focus="100%" method="any" />'];M(d.prepVML(g),null,null,b)};var A=a[0];var D=a[a.length-1];0<A[0]&&a.unshift([0,A[1]]);1>D[0]&&a.push([1,D[1]]);a.forEach(function(a,b){h.test(a[1])?(I=l(a[1]),k=I.get("rgb"),r=I.get("a")):(k=a[1],r=1);x.push(100*a[0]+"% "+k);b?(q=r,t=k):(p=r,u=k)});if("fill"===c)if("gradient"===m)c=n.x1||n[0]||0,a=n.y1||n[1]||0,A=n.x2||n[2]||0,n=n.y2||n[3]||0,w='angle="'+(90-180*Math.atan((n-a)/(A-c))/Math.PI)+'"',y();else{f=
n.r;var E=2*f,F=2*f,G=n.cx,H=n.cy,B=b.radialReference,C;f=function(){B&&(C=e.getBBox(),G+=(B[0]-C.x)/C.width-.5,H+=(B[1]-C.y)/C.height-.5,E*=B[2]/C.width,F*=B[2]/C.height);w='src="'+Q().global.VMLRadialGradientURL+'" size="'+E+","+F+'" origin="0.5,0.5" position="'+G+","+H+'" color2="'+u+'" ';y()};e.added?f():e.onAdd=f;f=t}else f=k}else if(h.test(a)&&"IMG"!==b.tagName){var I=l(a);e[c+"-opacitySetter"](I.get("a"),c,b);f=I.get("rgb")}else f=b.getElementsByTagName(c),f.length&&(f[0].opacity=1,f[0].type=
"solid"),f=a;return f},prepVML:function(a){var b=this.isIE8;a=a.join("");b?(a=a.replace("/>",' xmlns="urn:schemas-microsoft-com:vml" />'),a=-1===a.indexOf('style="')?a.replace("/>",' style="display:inline-block;behavior:url(#default#VML);" />'):a.replace('style="','style="display:inline-block;behavior:url(#default#VML);')):a=a.replace("<","<hcv:");return a},text:p.prototype.html,path:function(a){var d={coordsize:"10 10"};x(a)?d.d=a:b(a)&&F(d,a);return this.createElement("shape").attr(d)},circle:function(a,
c,e){var d=this.symbol("circle");b(a)&&(e=a.r,c=a.y,a=a.x);d.isCircle=!0;d.r=e;return d.attr({x:a,y:c})},g:function(a){var b;a&&(b={className:"highcharts-"+a,"class":"highcharts-"+a});return this.createElement("div").attr(b)},image:function(a,b,c,e,f){var d=this.createElement("img").attr({src:a});1<arguments.length&&d.attr({x:b,y:c,width:e,height:f});return d},createElement:function(a){return"rect"===a?this.symbol(a):p.prototype.createElement.call(this,a)},invertChild:function(a,b){var d=this;b=b.style;
var c="IMG"===a.tagName&&a.style;G(a,{flip:"x",left:k(b.width)-(c?k(c.top):1),top:k(b.height)-(c?k(c.left):1),rotation:-90});[].forEach.call(a.childNodes,function(b){d.invertChild(b,a)})},symbols:{arc:function(a,b,c,e,f){var d=f.start,h=f.end,g=f.r||c||e;c=f.innerR;e=Math.cos(d);var k=Math.sin(d),m=Math.cos(h),l=Math.sin(h);if(0===h-d)return["x"];d=["wa",a-g,b-g,a+g,b+g,a+g*e,b+g*k,a+g*m,b+g*l];f.open&&!c&&d.push("e","M",a,b);d.push("at",a-c,b-c,a+c,b+c,a+c*m,b+c*l,a+c*e,b+c*k,"x","e");d.isArc=!0;
return d},circle:function(a,b,c,e,f){f&&C(f.r)&&(c=e=2*f.r);f&&f.isCircle&&(a-=c/2,b-=e/2);return["wa",a,b,a+c,b+e,a+c,b+e/2,a+c,b+e/2,"e"]},rect:function(a,b,c,e,f){return p.prototype.symbols[C(f)&&f.r?"callout":"square"].call(0,a,b,c,e,f)}}},n.VMLRenderer=a=function(){this.init.apply(this,arguments)},F(a.prototype,p.prototype),F(a.prototype,g),n.Renderer=a,B.compose(a,p));p.prototype.getSpanWidth=function(a,b){var c=a.getBBox(!0).width;!A&&this.forExport&&(c=this.measureSpanWidth(b.firstChild.data,
a.styles));return c};p.prototype.measureSpanWidth=function(a,b){var d=c.createElement("span");a=c.createTextNode(a);d.appendChild(a);G(d,b);this.box.appendChild(d);b=d.offsetWidth;O(d);return b}});E(a,"masters/modules/oldie.src.js",[],function(){})});
//# sourceMappingURL=oldie.js.map