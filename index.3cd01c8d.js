var qu=Object.defineProperty;var Yu=(o,e,t)=>e in o?qu(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var K=(o,e,t)=>(Yu(o,typeof e!="symbol"?e+"":e,t),t);const Zu=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}};Zu();class Ku{constructor(e={}){K(this,"opt");K(this,"el");this.opt=e,this.el=this.opt.el}init(){}dispose(){this.opt=null,this.el=null}getEl(){return this.el}hasData(e){return this.getEl().getAttribute(e)!=null}getData(e,t){const i=this.getEl().getAttribute(e);return i==null?t:i}qs(e){return this.el.querySelector(e)}qsAll(e){return this.el.querySelectorAll(e)}hasClass(e){return this.el.classList.contains(e)}addClass(e){this.el.classList.add(e)}attachClass(e,t){e!=null&&e.classList.add(t)}detachClass(e,t){e!=null&&e.classList.remove(t)}removeClass(e){this.el.classList.remove(e)}getWidth(e){var i;let t=(i=document.defaultView)==null?void 0:i.getComputedStyle(e,null).width;return Number(t==null?void 0:t.replace("px",""))}getHeight(e){var t;if(e==null)return 0;{let i=(t=document.defaultView)==null?void 0:t.getComputedStyle(e,null).height;return Number(i==null?void 0:i.replace("px",""))}}getRect(e){var i;const t=(i=document.defaultView)==null?void 0:i.getComputedStyle(e,null);return t!=null?{width:Number(t.width.replace("px","")),height:Number(t.height.replace("px",""))}:{}}getDataNumber(e){const t=this.getEl().getAttribute(e);return t==null?0:Number(t)}getOffsetTop(e){const t=e.getBoundingClientRect();var i=window.pageYOffset||document.documentElement.scrollTop;return t.top+i}getOffset(e){const t=e.getBoundingClientRect();var i=window.pageYOffset||document.documentElement.scrollTop;return{y:t.top+i,x:t.left}}_call(e,t=null){e!=null&&(t!=null?e(t):e())}}const To=class{constructor(){K(this,"cnt",0);K(this,"_updateList",[]);K(this,"play",!0);K(this,"_update",()=>{if(this.play){this.cnt++;for(var e of this._updateList)e!=null&&e();window.requestAnimationFrame(this._update)}});window.requestAnimationFrame(this._update)}static get instance(){return this._instance||(this._instance=new To),this._instance}add(e){this._updateList.push(e)}remove(e){const t=[];this._updateList.forEach(i=>{i!=e&&t.push(i)}),this._updateList=t}};let Ai=To;K(Ai,"_instance");class Ra{constructor(e=0,t=0,i=0,n=0){K(this,"x",0);K(this,"y",0);K(this,"width",0);K(this,"height",0);this.x=e,this.y=t,this.width=i,this.height=n}}const bo=class{constructor(){K(this,"_list",[]);K(this,"_timer",null);K(this,"size",new Ra);K(this,"oldSize",new Ra);K(this,"_call",()=>{for(var e of this._list)e!=null&&e()});window.addEventListener("resize",()=>{this._eResize()},!1)}static get instance(){return this._instance||(this._instance=new bo),this._instance}_eResize(){this._setStageSize(),this._timer===null&&(clearInterval(this._timer),this._timer=null),this._timer=setTimeout(()=>{this._call(),this.oldSize.width=this.size.width,this.oldSize.height=this.size.height},300)}_setStageSize(){this.size.width=window.innerWidth,this.size.height=window.innerHeight}add(e){this._list.push(e)}remove(e){const t=[];this._list.forEach(i=>{i!=e&&t.push(i)}),this._list=t}};let dn=bo;K(dn,"_instance");class ki{constructor(e=0,t=0){K(this,"x",0);K(this,"y",0);this.x=e,this.y=t}set(e=0,t=0){this.x=e,this.y=t}copy(e){this.x=e.x,this.y=e.y}}class hc extends Ku{constructor(t={}){super(t);K(this,"_updateHandler");K(this,"_resizeHandler");K(this,"_c",0);K(this,"_isEnter",!1);K(this,"_isOneEnter",!1);K(this,"_observer");K(this,"_elPos",new ki(0,9999));K(this,"_eRollOverHandler");K(this,"_eRollOutHandler");(t.isDefEvent==null||t.isDefEvent)&&(this._updateHandler=this._update.bind(this),Ai.instance.add(this._updateHandler),this._resizeHandler=this._resize.bind(this),dn.instance.add(this._resizeHandler))}init(){super.init()}_setHover(){this._eRollOverHandler=this._eRollOver.bind(this),this._eRollOutHandler=this._eRollOut.bind(this),this.getEl().addEventListener("mouseenter",this._eRollOverHandler),this.getEl().addEventListener("mouseleave",this._eRollOutHandler)}_disposeHover(){this._eRollOverHandler!=null&&(this.getEl().removeEventListener("mouseenter",this._eRollOverHandler),this.getEl().removeEventListener("mouseleave",this._eRollOutHandler),this._eRollOverHandler=null,this._eRollOutHandler=null)}_eRollOver(){}_eRollOut(){}_setObserver(){this._observer=new IntersectionObserver(t=>{t!=null&&t.forEach(i=>{i!=null&&i.intersectionRatio>0?this._eEnter():this._eLeave()})},{root:null}),setTimeout(()=>{if(this._observer!=null&&this._observer!=null){const t=this.getEl();t!=null&&this._observer.observe(t)}},100)}_eEnter(){this._isEnter=!0}_eLeave(){this._isEnter=!1}_disposeObserver(){(this._observer!=null||this._observer!=null)&&(this._observer.unobserve(this.getEl()),this._observer=null)}dispose(){this._updateHandler!=null&&(Ai.instance.remove(this._updateHandler),this._updateHandler=null),this._resizeHandler!=null&&(dn.instance.remove(this._resizeHandler),this._resizeHandler=null),this._disposeHover(),this._disposeObserver(),super.dispose()}css(t,i){const n=t.style;for(var r in i)n[r]=i[r]}_update(){this._c++}_resize(){}}var Ns=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},He={exports:{}};/*!
 * matter-js 0.18.0 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 * 
 * The MIT License (MIT)
 * 
 * Copyright (c) Liam Brummitt and contributors.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(function(o,e){(function(i,n){o.exports=n()})(Ns,function(){return function(t){var i={};function n(r){if(i[r])return i[r].exports;var a=i[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=i,n.d=function(r,a,s){n.o(r,a)||Object.defineProperty(r,a,{enumerable:!0,get:s})},n.r=function(r){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},n.t=function(r,a){if(a&1&&(r=n(r)),a&8||a&4&&typeof r=="object"&&r&&r.__esModule)return r;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:r}),a&2&&typeof r!="string")for(var l in r)n.d(s,l,function(u){return r[u]}.bind(null,l));return s},n.n=function(r){var a=r&&r.__esModule?function(){return r.default}:function(){return r};return n.d(a,"a",a),a},n.o=function(r,a){return Object.prototype.hasOwnProperty.call(r,a)},n.p="",n(n.s=21)}([function(t,i){var n={};t.exports=n,function(){n._nextId=0,n._seed=0,n._nowStartTime=+new Date,n._warnedOnce={},n._decomp=null,n.extend=function(a,s){var l,u;typeof s=="boolean"?(l=2,u=s):(l=1,u=!0);for(var c=l;c<arguments.length;c++){var p=arguments[c];if(p)for(var h in p)u&&p[h]&&p[h].constructor===Object&&(!a[h]||a[h].constructor===Object)?(a[h]=a[h]||{},n.extend(a[h],u,p[h])):a[h]=p[h]}return a},n.clone=function(a,s){return n.extend({},s,a)},n.keys=function(a){if(Object.keys)return Object.keys(a);var s=[];for(var l in a)s.push(l);return s},n.values=function(a){var s=[];if(Object.keys){for(var l=Object.keys(a),u=0;u<l.length;u++)s.push(a[l[u]]);return s}for(var c in a)s.push(a[c]);return s},n.get=function(a,s,l,u){s=s.split(".").slice(l,u);for(var c=0;c<s.length;c+=1)a=a[s[c]];return a},n.set=function(a,s,l,u,c){var p=s.split(".").slice(u,c);return n.get(a,s,0,-1)[p[p.length-1]]=l,l},n.shuffle=function(a){for(var s=a.length-1;s>0;s--){var l=Math.floor(n.random()*(s+1)),u=a[s];a[s]=a[l],a[l]=u}return a},n.choose=function(a){return a[Math.floor(n.random()*a.length)]},n.isElement=function(a){return typeof HTMLElement!="undefined"?a instanceof HTMLElement:!!(a&&a.nodeType&&a.nodeName)},n.isArray=function(a){return Object.prototype.toString.call(a)==="[object Array]"},n.isFunction=function(a){return typeof a=="function"},n.isPlainObject=function(a){return typeof a=="object"&&a.constructor===Object},n.isString=function(a){return toString.call(a)==="[object String]"},n.clamp=function(a,s,l){return a<s?s:a>l?l:a},n.sign=function(a){return a<0?-1:1},n.now=function(){if(typeof window!="undefined"&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return Date.now?Date.now():new Date-n._nowStartTime},n.random=function(a,s){return a=typeof a!="undefined"?a:0,s=typeof s!="undefined"?s:1,a+r()*(s-a)};var r=function(){return n._seed=(n._seed*9301+49297)%233280,n._seed/233280};n.colorToNumber=function(a){return a=a.replace("#",""),a.length==3&&(a=a.charAt(0)+a.charAt(0)+a.charAt(1)+a.charAt(1)+a.charAt(2)+a.charAt(2)),parseInt(a,16)},n.logLevel=1,n.log=function(){console&&n.logLevel>0&&n.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},n.info=function(){console&&n.logLevel>0&&n.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},n.warn=function(){console&&n.logLevel>0&&n.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},n.warnOnce=function(){var a=Array.prototype.slice.call(arguments).join(" ");n._warnedOnce[a]||(n.warn(a),n._warnedOnce[a]=!0)},n.deprecated=function(a,s,l){a[s]=n.chain(function(){n.warnOnce("\u{1F505} deprecated \u{1F505}",l)},a[s])},n.nextId=function(){return n._nextId++},n.indexOf=function(a,s){if(a.indexOf)return a.indexOf(s);for(var l=0;l<a.length;l++)if(a[l]===s)return l;return-1},n.map=function(a,s){if(a.map)return a.map(s);for(var l=[],u=0;u<a.length;u+=1)l.push(s(a[u]));return l},n.topologicalSort=function(a){var s=[],l=[],u=[];for(var c in a)!l[c]&&!u[c]&&n._topologicalSort(c,l,u,a,s);return s},n._topologicalSort=function(a,s,l,u,c){var p=u[a]||[];l[a]=!0;for(var h=0;h<p.length;h+=1){var f=p[h];l[f]||s[f]||n._topologicalSort(f,s,l,u,c)}l[a]=!1,s[a]=!0,c.push(a)},n.chain=function(){for(var a=[],s=0;s<arguments.length;s+=1){var l=arguments[s];l._chained?a.push.apply(a,l._chained):a.push(l)}var u=function(){for(var c,p=new Array(arguments.length),h=0,f=arguments.length;h<f;h++)p[h]=arguments[h];for(h=0;h<a.length;h+=1){var g=a[h].apply(c,p);typeof g!="undefined"&&(c=g)}return c};return u._chained=a,u},n.chainPathBefore=function(a,s,l){return n.set(a,s,n.chain(l,n.get(a,s)))},n.chainPathAfter=function(a,s,l){return n.set(a,s,n.chain(n.get(a,s),l))},n.setDecomp=function(a){n._decomp=a},n.getDecomp=function(){var a=n._decomp;try{!a&&typeof window!="undefined"&&(a=window.decomp),!a&&typeof Ns!="undefined"&&(a=Ns.decomp)}catch{a=null}return a}}()},function(t,i){var n={};t.exports=n,function(){n.create=function(r){var a={min:{x:0,y:0},max:{x:0,y:0}};return r&&n.update(a,r),a},n.update=function(r,a,s){r.min.x=1/0,r.max.x=-1/0,r.min.y=1/0,r.max.y=-1/0;for(var l=0;l<a.length;l++){var u=a[l];u.x>r.max.x&&(r.max.x=u.x),u.x<r.min.x&&(r.min.x=u.x),u.y>r.max.y&&(r.max.y=u.y),u.y<r.min.y&&(r.min.y=u.y)}s&&(s.x>0?r.max.x+=s.x:r.min.x+=s.x,s.y>0?r.max.y+=s.y:r.min.y+=s.y)},n.contains=function(r,a){return a.x>=r.min.x&&a.x<=r.max.x&&a.y>=r.min.y&&a.y<=r.max.y},n.overlaps=function(r,a){return r.min.x<=a.max.x&&r.max.x>=a.min.x&&r.max.y>=a.min.y&&r.min.y<=a.max.y},n.translate=function(r,a){r.min.x+=a.x,r.max.x+=a.x,r.min.y+=a.y,r.max.y+=a.y},n.shift=function(r,a){var s=r.max.x-r.min.x,l=r.max.y-r.min.y;r.min.x=a.x,r.max.x=a.x+s,r.min.y=a.y,r.max.y=a.y+l}}()},function(t,i){var n={};t.exports=n,function(){n.create=function(r,a){return{x:r||0,y:a||0}},n.clone=function(r){return{x:r.x,y:r.y}},n.magnitude=function(r){return Math.sqrt(r.x*r.x+r.y*r.y)},n.magnitudeSquared=function(r){return r.x*r.x+r.y*r.y},n.rotate=function(r,a,s){var l=Math.cos(a),u=Math.sin(a);s||(s={});var c=r.x*l-r.y*u;return s.y=r.x*u+r.y*l,s.x=c,s},n.rotateAbout=function(r,a,s,l){var u=Math.cos(a),c=Math.sin(a);l||(l={});var p=s.x+((r.x-s.x)*u-(r.y-s.y)*c);return l.y=s.y+((r.x-s.x)*c+(r.y-s.y)*u),l.x=p,l},n.normalise=function(r){var a=n.magnitude(r);return a===0?{x:0,y:0}:{x:r.x/a,y:r.y/a}},n.dot=function(r,a){return r.x*a.x+r.y*a.y},n.cross=function(r,a){return r.x*a.y-r.y*a.x},n.cross3=function(r,a,s){return(a.x-r.x)*(s.y-r.y)-(a.y-r.y)*(s.x-r.x)},n.add=function(r,a,s){return s||(s={}),s.x=r.x+a.x,s.y=r.y+a.y,s},n.sub=function(r,a,s){return s||(s={}),s.x=r.x-a.x,s.y=r.y-a.y,s},n.mult=function(r,a){return{x:r.x*a,y:r.y*a}},n.div=function(r,a){return{x:r.x/a,y:r.y/a}},n.perp=function(r,a){return a=a===!0?-1:1,{x:a*-r.y,y:a*r.x}},n.neg=function(r){return{x:-r.x,y:-r.y}},n.angle=function(r,a){return Math.atan2(a.y-r.y,a.x-r.x)},n._temp=[n.create(),n.create(),n.create(),n.create(),n.create(),n.create()]}()},function(t,i,n){var r={};t.exports=r;var a=n(2),s=n(0);(function(){r.create=function(l,u){for(var c=[],p=0;p<l.length;p++){var h=l[p],f={x:h.x,y:h.y,index:p,body:u,isInternal:!1};c.push(f)}return c},r.fromPath=function(l,u){var c=/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,p=[];return l.replace(c,function(h,f,g){p.push({x:parseFloat(f),y:parseFloat(g)})}),r.create(p,u)},r.centre=function(l){for(var u=r.area(l,!0),c={x:0,y:0},p,h,f,g=0;g<l.length;g++)f=(g+1)%l.length,p=a.cross(l[g],l[f]),h=a.mult(a.add(l[g],l[f]),p),c=a.add(c,h);return a.div(c,6*u)},r.mean=function(l){for(var u={x:0,y:0},c=0;c<l.length;c++)u.x+=l[c].x,u.y+=l[c].y;return a.div(u,l.length)},r.area=function(l,u){for(var c=0,p=l.length-1,h=0;h<l.length;h++)c+=(l[p].x-l[h].x)*(l[p].y+l[h].y),p=h;return u?c/2:Math.abs(c)/2},r.inertia=function(l,u){for(var c=0,p=0,h=l,f,g,d=0;d<h.length;d++)g=(d+1)%h.length,f=Math.abs(a.cross(h[g],h[d])),c+=f*(a.dot(h[g],h[g])+a.dot(h[g],h[d])+a.dot(h[d],h[d])),p+=f;return u/6*(c/p)},r.translate=function(l,u,c){c=typeof c!="undefined"?c:1;var p=l.length,h=u.x*c,f=u.y*c,g;for(g=0;g<p;g++)l[g].x+=h,l[g].y+=f;return l},r.rotate=function(l,u,c){if(u!==0){var p=Math.cos(u),h=Math.sin(u),f=c.x,g=c.y,d=l.length,m,_,E,T;for(T=0;T<d;T++)m=l[T],_=m.x-f,E=m.y-g,m.x=f+(_*p-E*h),m.y=g+(_*h+E*p);return l}},r.contains=function(l,u){for(var c=u.x,p=u.y,h=l.length,f=l[h-1],g,d=0;d<h;d++){if(g=l[d],(c-f.x)*(g.y-f.y)+(p-f.y)*(f.x-g.x)>0)return!1;f=g}return!0},r.scale=function(l,u,c,p){if(u===1&&c===1)return l;p=p||r.centre(l);for(var h,f,g=0;g<l.length;g++)h=l[g],f=a.sub(h,p),l[g].x=p.x+f.x*u,l[g].y=p.y+f.y*c;return l},r.chamfer=function(l,u,c,p,h){typeof u=="number"?u=[u]:u=u||[8],c=typeof c!="undefined"?c:-1,p=p||2,h=h||14;for(var f=[],g=0;g<l.length;g++){var d=l[g-1>=0?g-1:l.length-1],m=l[g],_=l[(g+1)%l.length],E=u[g<u.length?g:u.length-1];if(E===0){f.push(m);continue}var T=a.normalise({x:m.y-d.y,y:d.x-m.x}),x=a.normalise({x:_.y-m.y,y:m.x-_.x}),v=Math.sqrt(2*Math.pow(E,2)),S=a.mult(s.clone(T),E),M=a.normalise(a.mult(a.add(T,x),.5)),y=a.sub(m,a.mult(M,v)),w=c;c===-1&&(w=Math.pow(E,.32)*1.75),w=s.clamp(w,p,h),w%2===1&&(w+=1);for(var A=Math.acos(a.dot(T,x)),b=A/w,L=0;L<w;L++)f.push(a.add(a.rotate(S,b*L),y))}return f},r.clockwiseSort=function(l){var u=r.mean(l);return l.sort(function(c,p){return a.angle(u,c)-a.angle(u,p)}),l},r.isConvex=function(l){var u=0,c=l.length,p,h,f,g;if(c<3)return null;for(p=0;p<c;p++)if(h=(p+1)%c,f=(p+2)%c,g=(l[h].x-l[p].x)*(l[f].y-l[h].y),g-=(l[h].y-l[p].y)*(l[f].x-l[h].x),g<0?u|=1:g>0&&(u|=2),u===3)return!1;return u!==0?!0:null},r.hull=function(l){var u=[],c=[],p,h;for(l=l.slice(0),l.sort(function(f,g){var d=f.x-g.x;return d!==0?d:f.y-g.y}),h=0;h<l.length;h+=1){for(p=l[h];c.length>=2&&a.cross3(c[c.length-2],c[c.length-1],p)<=0;)c.pop();c.push(p)}for(h=l.length-1;h>=0;h-=1){for(p=l[h];u.length>=2&&a.cross3(u[u.length-2],u[u.length-1],p)<=0;)u.pop();u.push(p)}return u.pop(),c.pop(),u.concat(c)}})()},function(t,i,n){var r={};t.exports=r;var a=n(0);(function(){r.on=function(s,l,u){for(var c=l.split(" "),p,h=0;h<c.length;h++)p=c[h],s.events=s.events||{},s.events[p]=s.events[p]||[],s.events[p].push(u);return u},r.off=function(s,l,u){if(!l){s.events={};return}typeof l=="function"&&(u=l,l=a.keys(s.events).join(" "));for(var c=l.split(" "),p=0;p<c.length;p++){var h=s.events[c[p]],f=[];if(u&&h)for(var g=0;g<h.length;g++)h[g]!==u&&f.push(h[g]);s.events[c[p]]=f}},r.trigger=function(s,l,u){var c,p,h,f,g=s.events;if(g&&a.keys(g).length>0){u||(u={}),c=l.split(" ");for(var d=0;d<c.length;d++)if(p=c[d],h=g[p],h){f=a.clone(u,!1),f.name=p,f.source=s;for(var m=0;m<h.length;m++)h[m].apply(s,[f])}}}})()},function(t,i,n){var r={};t.exports=r;var a=n(4),s=n(0),l=n(1),u=n(6);(function(){r.create=function(c){return s.extend({id:s.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{},cache:{allBodies:null,allConstraints:null,allComposites:null}},c)},r.setModified=function(c,p,h,f){if(c.isModified=p,p&&c.cache&&(c.cache.allBodies=null,c.cache.allConstraints=null,c.cache.allComposites=null),h&&c.parent&&r.setModified(c.parent,p,h,f),f)for(var g=0;g<c.composites.length;g++){var d=c.composites[g];r.setModified(d,p,h,f)}},r.add=function(c,p){var h=[].concat(p);a.trigger(c,"beforeAdd",{object:p});for(var f=0;f<h.length;f++){var g=h[f];switch(g.type){case"body":if(g.parent!==g){s.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}r.addBody(c,g);break;case"constraint":r.addConstraint(c,g);break;case"composite":r.addComposite(c,g);break;case"mouseConstraint":r.addConstraint(c,g.constraint);break}}return a.trigger(c,"afterAdd",{object:p}),c},r.remove=function(c,p,h){var f=[].concat(p);a.trigger(c,"beforeRemove",{object:p});for(var g=0;g<f.length;g++){var d=f[g];switch(d.type){case"body":r.removeBody(c,d,h);break;case"constraint":r.removeConstraint(c,d,h);break;case"composite":r.removeComposite(c,d,h);break;case"mouseConstraint":r.removeConstraint(c,d.constraint);break}}return a.trigger(c,"afterRemove",{object:p}),c},r.addComposite=function(c,p){return c.composites.push(p),p.parent=c,r.setModified(c,!0,!0,!1),c},r.removeComposite=function(c,p,h){var f=s.indexOf(c.composites,p);if(f!==-1&&r.removeCompositeAt(c,f),h)for(var g=0;g<c.composites.length;g++)r.removeComposite(c.composites[g],p,!0);return c},r.removeCompositeAt=function(c,p){return c.composites.splice(p,1),r.setModified(c,!0,!0,!1),c},r.addBody=function(c,p){return c.bodies.push(p),r.setModified(c,!0,!0,!1),c},r.removeBody=function(c,p,h){var f=s.indexOf(c.bodies,p);if(f!==-1&&r.removeBodyAt(c,f),h)for(var g=0;g<c.composites.length;g++)r.removeBody(c.composites[g],p,!0);return c},r.removeBodyAt=function(c,p){return c.bodies.splice(p,1),r.setModified(c,!0,!0,!1),c},r.addConstraint=function(c,p){return c.constraints.push(p),r.setModified(c,!0,!0,!1),c},r.removeConstraint=function(c,p,h){var f=s.indexOf(c.constraints,p);if(f!==-1&&r.removeConstraintAt(c,f),h)for(var g=0;g<c.composites.length;g++)r.removeConstraint(c.composites[g],p,!0);return c},r.removeConstraintAt=function(c,p){return c.constraints.splice(p,1),r.setModified(c,!0,!0,!1),c},r.clear=function(c,p,h){if(h)for(var f=0;f<c.composites.length;f++)r.clear(c.composites[f],p,!0);return p?c.bodies=c.bodies.filter(function(g){return g.isStatic}):c.bodies.length=0,c.constraints.length=0,c.composites.length=0,r.setModified(c,!0,!0,!1),c},r.allBodies=function(c){if(c.cache&&c.cache.allBodies)return c.cache.allBodies;for(var p=[].concat(c.bodies),h=0;h<c.composites.length;h++)p=p.concat(r.allBodies(c.composites[h]));return c.cache&&(c.cache.allBodies=p),p},r.allConstraints=function(c){if(c.cache&&c.cache.allConstraints)return c.cache.allConstraints;for(var p=[].concat(c.constraints),h=0;h<c.composites.length;h++)p=p.concat(r.allConstraints(c.composites[h]));return c.cache&&(c.cache.allConstraints=p),p},r.allComposites=function(c){if(c.cache&&c.cache.allComposites)return c.cache.allComposites;for(var p=[].concat(c.composites),h=0;h<c.composites.length;h++)p=p.concat(r.allComposites(c.composites[h]));return c.cache&&(c.cache.allComposites=p),p},r.get=function(c,p,h){var f,g;switch(h){case"body":f=r.allBodies(c);break;case"constraint":f=r.allConstraints(c);break;case"composite":f=r.allComposites(c).concat(c);break}return f?(g=f.filter(function(d){return d.id.toString()===p.toString()}),g.length===0?null:g[0]):null},r.move=function(c,p,h){return r.remove(c,p),r.add(h,p),c},r.rebase=function(c){for(var p=r.allBodies(c).concat(r.allConstraints(c)).concat(r.allComposites(c)),h=0;h<p.length;h++)p[h].id=s.nextId();return c},r.translate=function(c,p,h){for(var f=h?r.allBodies(c):c.bodies,g=0;g<f.length;g++)u.translate(f[g],p);return c},r.rotate=function(c,p,h,f){for(var g=Math.cos(p),d=Math.sin(p),m=f?r.allBodies(c):c.bodies,_=0;_<m.length;_++){var E=m[_],T=E.position.x-h.x,x=E.position.y-h.y;u.setPosition(E,{x:h.x+(T*g-x*d),y:h.y+(T*d+x*g)}),u.rotate(E,p)}return c},r.scale=function(c,p,h,f,g){for(var d=g?r.allBodies(c):c.bodies,m=0;m<d.length;m++){var _=d[m],E=_.position.x-f.x,T=_.position.y-f.y;u.setPosition(_,{x:f.x+E*p,y:f.y+T*h}),u.scale(_,p,h)}return c},r.bounds=function(c){for(var p=r.allBodies(c),h=[],f=0;f<p.length;f+=1){var g=p[f];h.push(g.bounds.min,g.bounds.max)}return l.create(h)}})()},function(t,i,n){var r={};t.exports=r;var a=n(3),s=n(2),l=n(7);n(16);var u=n(0),c=n(1),p=n(11);(function(){r._inertiaScale=4,r._nextCollidingGroupId=1,r._nextNonCollidingGroupId=-1,r._nextCategory=1,r.create=function(f){var g={id:u.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:a.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,_original:null},d=u.extend(g,f);return h(d,f),d},r.nextGroup=function(f){return f?r._nextNonCollidingGroupId--:r._nextCollidingGroupId++},r.nextCategory=function(){return r._nextCategory=r._nextCategory<<1,r._nextCategory};var h=function(f,g){g=g||{},r.set(f,{bounds:f.bounds||c.create(f.vertices),positionPrev:f.positionPrev||s.clone(f.position),anglePrev:f.anglePrev||f.angle,vertices:f.vertices,parts:f.parts||[f],isStatic:f.isStatic,isSleeping:f.isSleeping,parent:f.parent||f}),a.rotate(f.vertices,f.angle,f.position),p.rotate(f.axes,f.angle),c.update(f.bounds,f.vertices,f.velocity),r.set(f,{axes:g.axes||f.axes,area:g.area||f.area,mass:g.mass||f.mass,inertia:g.inertia||f.inertia});var d=f.isStatic?"#14151f":u.choose(["#f19648","#f5d259","#f55a3c","#063e7b","#ececd1"]),m=f.isStatic?"#555":"#ccc",_=f.isStatic&&f.render.fillStyle===null?1:0;f.render.fillStyle=f.render.fillStyle||d,f.render.strokeStyle=f.render.strokeStyle||m,f.render.lineWidth=f.render.lineWidth||_,f.render.sprite.xOffset+=-(f.bounds.min.x-f.position.x)/(f.bounds.max.x-f.bounds.min.x),f.render.sprite.yOffset+=-(f.bounds.min.y-f.position.y)/(f.bounds.max.y-f.bounds.min.y)};r.set=function(f,g,d){var m;typeof g=="string"&&(m=g,g={},g[m]=d);for(m in g)if(!!Object.prototype.hasOwnProperty.call(g,m))switch(d=g[m],m){case"isStatic":r.setStatic(f,d);break;case"isSleeping":l.set(f,d);break;case"mass":r.setMass(f,d);break;case"density":r.setDensity(f,d);break;case"inertia":r.setInertia(f,d);break;case"vertices":r.setVertices(f,d);break;case"position":r.setPosition(f,d);break;case"angle":r.setAngle(f,d);break;case"velocity":r.setVelocity(f,d);break;case"angularVelocity":r.setAngularVelocity(f,d);break;case"parts":r.setParts(f,d);break;case"centre":r.setCentre(f,d);break;default:f[m]=d}},r.setStatic=function(f,g){for(var d=0;d<f.parts.length;d++){var m=f.parts[d];m.isStatic=g,g?(m._original={restitution:m.restitution,friction:m.friction,mass:m.mass,inertia:m.inertia,density:m.density,inverseMass:m.inverseMass,inverseInertia:m.inverseInertia},m.restitution=0,m.friction=1,m.mass=m.inertia=m.density=1/0,m.inverseMass=m.inverseInertia=0,m.positionPrev.x=m.position.x,m.positionPrev.y=m.position.y,m.anglePrev=m.angle,m.angularVelocity=0,m.speed=0,m.angularSpeed=0,m.motion=0):m._original&&(m.restitution=m._original.restitution,m.friction=m._original.friction,m.mass=m._original.mass,m.inertia=m._original.inertia,m.density=m._original.density,m.inverseMass=m._original.inverseMass,m.inverseInertia=m._original.inverseInertia,m._original=null)}},r.setMass=function(f,g){var d=f.inertia/(f.mass/6);f.inertia=d*(g/6),f.inverseInertia=1/f.inertia,f.mass=g,f.inverseMass=1/f.mass,f.density=f.mass/f.area},r.setDensity=function(f,g){r.setMass(f,g*f.area),f.density=g},r.setInertia=function(f,g){f.inertia=g,f.inverseInertia=1/f.inertia},r.setVertices=function(f,g){g[0].body===f?f.vertices=g:f.vertices=a.create(g,f),f.axes=p.fromVertices(f.vertices),f.area=a.area(f.vertices),r.setMass(f,f.density*f.area);var d=a.centre(f.vertices);a.translate(f.vertices,d,-1),r.setInertia(f,r._inertiaScale*a.inertia(f.vertices,f.mass)),a.translate(f.vertices,f.position),c.update(f.bounds,f.vertices,f.velocity)},r.setParts=function(f,g,d){var m;for(g=g.slice(0),f.parts.length=0,f.parts.push(f),f.parent=f,m=0;m<g.length;m++){var _=g[m];_!==f&&(_.parent=f,f.parts.push(_))}if(f.parts.length!==1){if(d=typeof d!="undefined"?d:!0,d){var E=[];for(m=0;m<g.length;m++)E=E.concat(g[m].vertices);a.clockwiseSort(E);var T=a.hull(E),x=a.centre(T);r.setVertices(f,T),a.translate(f.vertices,x)}var v=r._totalProperties(f);f.area=v.area,f.parent=f,f.position.x=v.centre.x,f.position.y=v.centre.y,f.positionPrev.x=v.centre.x,f.positionPrev.y=v.centre.y,r.setMass(f,v.mass),r.setInertia(f,v.inertia),r.setPosition(f,v.centre)}},r.setCentre=function(f,g,d){d?(f.positionPrev.x+=g.x,f.positionPrev.y+=g.y,f.position.x+=g.x,f.position.y+=g.y):(f.positionPrev.x=g.x-(f.position.x-f.positionPrev.x),f.positionPrev.y=g.y-(f.position.y-f.positionPrev.y),f.position.x=g.x,f.position.y=g.y)},r.setPosition=function(f,g){var d=s.sub(g,f.position);f.positionPrev.x+=d.x,f.positionPrev.y+=d.y;for(var m=0;m<f.parts.length;m++){var _=f.parts[m];_.position.x+=d.x,_.position.y+=d.y,a.translate(_.vertices,d),c.update(_.bounds,_.vertices,f.velocity)}},r.setAngle=function(f,g){var d=g-f.angle;f.anglePrev+=d;for(var m=0;m<f.parts.length;m++){var _=f.parts[m];_.angle+=d,a.rotate(_.vertices,d,f.position),p.rotate(_.axes,d),c.update(_.bounds,_.vertices,f.velocity),m>0&&s.rotateAbout(_.position,d,f.position,_.position)}},r.setVelocity=function(f,g){f.positionPrev.x=f.position.x-g.x,f.positionPrev.y=f.position.y-g.y,f.velocity.x=g.x,f.velocity.y=g.y,f.speed=s.magnitude(f.velocity)},r.setAngularVelocity=function(f,g){f.anglePrev=f.angle-g,f.angularVelocity=g,f.angularSpeed=Math.abs(f.angularVelocity)},r.translate=function(f,g){r.setPosition(f,s.add(f.position,g))},r.rotate=function(f,g,d){if(!d)r.setAngle(f,f.angle+g);else{var m=Math.cos(g),_=Math.sin(g),E=f.position.x-d.x,T=f.position.y-d.y;r.setPosition(f,{x:d.x+(E*m-T*_),y:d.y+(E*_+T*m)}),r.setAngle(f,f.angle+g)}},r.scale=function(f,g,d,m){var _=0,E=0;m=m||f.position;for(var T=0;T<f.parts.length;T++){var x=f.parts[T];a.scale(x.vertices,g,d,m),x.axes=p.fromVertices(x.vertices),x.area=a.area(x.vertices),r.setMass(x,f.density*x.area),a.translate(x.vertices,{x:-x.position.x,y:-x.position.y}),r.setInertia(x,r._inertiaScale*a.inertia(x.vertices,x.mass)),a.translate(x.vertices,{x:x.position.x,y:x.position.y}),T>0&&(_+=x.area,E+=x.inertia),x.position.x=m.x+(x.position.x-m.x)*g,x.position.y=m.y+(x.position.y-m.y)*d,c.update(x.bounds,x.vertices,f.velocity)}f.parts.length>1&&(f.area=_,f.isStatic||(r.setMass(f,f.density*_),r.setInertia(f,E))),f.circleRadius&&(g===d?f.circleRadius*=g:f.circleRadius=null)},r.update=function(f,g,d,m){var _=Math.pow(g*d*f.timeScale,2),E=1-f.frictionAir*d*f.timeScale,T=f.position.x-f.positionPrev.x,x=f.position.y-f.positionPrev.y;f.velocity.x=T*E*m+f.force.x/f.mass*_,f.velocity.y=x*E*m+f.force.y/f.mass*_,f.positionPrev.x=f.position.x,f.positionPrev.y=f.position.y,f.position.x+=f.velocity.x,f.position.y+=f.velocity.y,f.angularVelocity=(f.angle-f.anglePrev)*E*m+f.torque/f.inertia*_,f.anglePrev=f.angle,f.angle+=f.angularVelocity,f.speed=s.magnitude(f.velocity),f.angularSpeed=Math.abs(f.angularVelocity);for(var v=0;v<f.parts.length;v++){var S=f.parts[v];a.translate(S.vertices,f.velocity),v>0&&(S.position.x+=f.velocity.x,S.position.y+=f.velocity.y),f.angularVelocity!==0&&(a.rotate(S.vertices,f.angularVelocity,f.position),p.rotate(S.axes,f.angularVelocity),v>0&&s.rotateAbout(S.position,f.angularVelocity,f.position,S.position)),c.update(S.bounds,S.vertices,f.velocity)}},r.applyForce=function(f,g,d){f.force.x+=d.x,f.force.y+=d.y;var m={x:g.x-f.position.x,y:g.y-f.position.y};f.torque+=m.x*d.y-m.y*d.x},r._totalProperties=function(f){for(var g={mass:0,area:0,inertia:0,centre:{x:0,y:0}},d=f.parts.length===1?0:1;d<f.parts.length;d++){var m=f.parts[d],_=m.mass!==1/0?m.mass:1;g.mass+=_,g.area+=m.area,g.inertia+=m.inertia,g.centre=s.add(g.centre,s.mult(m.position,_))}return g.centre=s.div(g.centre,g.mass),g}})()},function(t,i,n){var r={};t.exports=r;var a=n(4);(function(){r._motionWakeThreshold=.18,r._motionSleepThreshold=.08,r._minBias=.9,r.update=function(s,l){for(var u=l*l*l,c=0;c<s.length;c++){var p=s[c],h=p.speed*p.speed+p.angularSpeed*p.angularSpeed;if(p.force.x!==0||p.force.y!==0){r.set(p,!1);continue}var f=Math.min(p.motion,h),g=Math.max(p.motion,h);p.motion=r._minBias*f+(1-r._minBias)*g,p.sleepThreshold>0&&p.motion<r._motionSleepThreshold*u?(p.sleepCounter+=1,p.sleepCounter>=p.sleepThreshold&&r.set(p,!0)):p.sleepCounter>0&&(p.sleepCounter-=1)}},r.afterCollisions=function(s,l){for(var u=l*l*l,c=0;c<s.length;c++){var p=s[c];if(!!p.isActive){var h=p.collision,f=h.bodyA.parent,g=h.bodyB.parent;if(!(f.isSleeping&&g.isSleeping||f.isStatic||g.isStatic)&&(f.isSleeping||g.isSleeping)){var d=f.isSleeping&&!f.isStatic?f:g,m=d===f?g:f;!d.isStatic&&m.motion>r._motionWakeThreshold*u&&r.set(d,!1)}}}},r.set=function(s,l){var u=s.isSleeping;l?(s.isSleeping=!0,s.sleepCounter=s.sleepThreshold,s.positionImpulse.x=0,s.positionImpulse.y=0,s.positionPrev.x=s.position.x,s.positionPrev.y=s.position.y,s.anglePrev=s.angle,s.speed=0,s.angularSpeed=0,s.motion=0,u||a.trigger(s,"sleepStart")):(s.isSleeping=!1,s.sleepCounter=0,u&&a.trigger(s,"sleepEnd"))}})()},function(t,i,n){var r={};t.exports=r;var a=n(3),s=n(9);(function(){var l=[],u={overlap:0,axis:null},c={overlap:0,axis:null};r.create=function(p,h){return{pair:null,collided:!1,bodyA:p,bodyB:h,parentA:p.parent,parentB:h.parent,depth:0,normal:{x:0,y:0},tangent:{x:0,y:0},penetration:{x:0,y:0},supports:[]}},r.collides=function(p,h,f){if(r._overlapAxes(u,p.vertices,h.vertices,p.axes),u.overlap<=0||(r._overlapAxes(c,h.vertices,p.vertices,h.axes),c.overlap<=0))return null;var g=f&&f.table[s.id(p,h)],d;g?d=g.collision:(d=r.create(p,h),d.collided=!0,d.bodyA=p.id<h.id?p:h,d.bodyB=p.id<h.id?h:p,d.parentA=d.bodyA.parent,d.parentB=d.bodyB.parent),p=d.bodyA,h=d.bodyB;var m;u.overlap<c.overlap?m=u:m=c;var _=d.normal,E=d.supports,T=m.axis,x=T.x,v=T.y;x*(h.position.x-p.position.x)+v*(h.position.y-p.position.y)<0?(_.x=x,_.y=v):(_.x=-x,_.y=-v),d.tangent.x=-_.y,d.tangent.y=_.x,d.depth=m.overlap,d.penetration.x=_.x*d.depth,d.penetration.y=_.y*d.depth;var S=r._findSupports(p,h,_,1),M=0;if(a.contains(p.vertices,S[0])&&(E[M++]=S[0]),a.contains(p.vertices,S[1])&&(E[M++]=S[1]),M<2){var y=r._findSupports(h,p,_,-1);a.contains(h.vertices,y[0])&&(E[M++]=y[0]),M<2&&a.contains(h.vertices,y[1])&&(E[M++]=y[1])}return M===0&&(E[M++]=S[0]),E.length=M,d},r._overlapAxes=function(p,h,f,g){var d=h.length,m=f.length,_=h[0].x,E=h[0].y,T=f[0].x,x=f[0].y,v=g.length,S=Number.MAX_VALUE,M=0,y,w,A,b,L,F;for(L=0;L<v;L++){var P=g[L],N=P.x,I=P.y,z=_*N+E*I,k=T*N+x*I,B=z,W=k;for(F=1;F<d;F+=1)b=h[F].x*N+h[F].y*I,b>B?B=b:b<z&&(z=b);for(F=1;F<m;F+=1)b=f[F].x*N+f[F].y*I,b>W?W=b:b<k&&(k=b);if(w=B-k,A=W-z,y=w<A?w:A,y<S&&(S=y,M=L,y<=0))break}p.axis=g[M],p.overlap=S},r._projectToAxis=function(p,h,f){for(var g=h[0].x*f.x+h[0].y*f.y,d=g,m=1;m<h.length;m+=1){var _=h[m].x*f.x+h[m].y*f.y;_>d?d=_:_<g&&(g=_)}p.min=g,p.max=d},r._findSupports=function(p,h,f,g){var d=h.vertices,m=d.length,_=p.position.x,E=p.position.y,T=f.x*g,x=f.y*g,v=Number.MAX_VALUE,S,M,y,w,A;for(A=0;A<m;A+=1)M=d[A],w=T*(_-M.x)+x*(E-M.y),w<v&&(v=w,S=M);return y=d[(m+S.index-1)%m],v=T*(_-y.x)+x*(E-y.y),M=d[(S.index+1)%m],T*(_-M.x)+x*(E-M.y)<v?(l[0]=S,l[1]=M,l):(l[0]=S,l[1]=y,l)}})()},function(t,i,n){var r={};t.exports=r;var a=n(17);(function(){r.create=function(s,l){var u=s.bodyA,c=s.bodyB,p={id:r.id(u,c),bodyA:u,bodyB:c,collision:s,contacts:[],activeContacts:[],separation:0,isActive:!0,confirmedActive:!0,isSensor:u.isSensor||c.isSensor,timeCreated:l,timeUpdated:l,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return r.update(p,s,l),p},r.update=function(s,l,u){var c=s.contacts,p=l.supports,h=s.activeContacts,f=l.parentA,g=l.parentB,d=f.vertices.length;s.isActive=!0,s.timeUpdated=u,s.collision=l,s.separation=l.depth,s.inverseMass=f.inverseMass+g.inverseMass,s.friction=f.friction<g.friction?f.friction:g.friction,s.frictionStatic=f.frictionStatic>g.frictionStatic?f.frictionStatic:g.frictionStatic,s.restitution=f.restitution>g.restitution?f.restitution:g.restitution,s.slop=f.slop>g.slop?f.slop:g.slop,l.pair=s,h.length=0;for(var m=0;m<p.length;m++){var _=p[m],E=_.body===f?_.index:d+_.index,T=c[E];T?h.push(T):h.push(c[E]=a.create(_))}},r.setActive=function(s,l,u){l?(s.isActive=!0,s.timeUpdated=u):(s.isActive=!1,s.activeContacts.length=0)},r.id=function(s,l){return s.id<l.id?"A"+s.id+"B"+l.id:"A"+l.id+"B"+s.id}})()},function(t,i,n){var r={};t.exports=r;var a=n(3),s=n(2),l=n(7),u=n(1),c=n(11),p=n(0);(function(){r._warming=.4,r._torqueDampen=1,r._minLength=1e-6,r.create=function(h){var f=h;f.bodyA&&!f.pointA&&(f.pointA={x:0,y:0}),f.bodyB&&!f.pointB&&(f.pointB={x:0,y:0});var g=f.bodyA?s.add(f.bodyA.position,f.pointA):f.pointA,d=f.bodyB?s.add(f.bodyB.position,f.pointB):f.pointB,m=s.magnitude(s.sub(g,d));f.length=typeof f.length!="undefined"?f.length:m,f.id=f.id||p.nextId(),f.label=f.label||"Constraint",f.type="constraint",f.stiffness=f.stiffness||(f.length>0?1:.7),f.damping=f.damping||0,f.angularStiffness=f.angularStiffness||0,f.angleA=f.bodyA?f.bodyA.angle:f.angleA,f.angleB=f.bodyB?f.bodyB.angle:f.angleB,f.plugin={};var _={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return f.length===0&&f.stiffness>.1?(_.type="pin",_.anchors=!1):f.stiffness<.9&&(_.type="spring"),f.render=p.extend(_,f.render),f},r.preSolveAll=function(h){for(var f=0;f<h.length;f+=1){var g=h[f],d=g.constraintImpulse;g.isStatic||d.x===0&&d.y===0&&d.angle===0||(g.position.x+=d.x,g.position.y+=d.y,g.angle+=d.angle)}},r.solveAll=function(h,f){for(var g=0;g<h.length;g+=1){var d=h[g],m=!d.bodyA||d.bodyA&&d.bodyA.isStatic,_=!d.bodyB||d.bodyB&&d.bodyB.isStatic;(m||_)&&r.solve(h[g],f)}for(g=0;g<h.length;g+=1)d=h[g],m=!d.bodyA||d.bodyA&&d.bodyA.isStatic,_=!d.bodyB||d.bodyB&&d.bodyB.isStatic,!m&&!_&&r.solve(h[g],f)},r.solve=function(h,f){var g=h.bodyA,d=h.bodyB,m=h.pointA,_=h.pointB;if(!(!g&&!d)){g&&!g.isStatic&&(s.rotate(m,g.angle-h.angleA,m),h.angleA=g.angle),d&&!d.isStatic&&(s.rotate(_,d.angle-h.angleB,_),h.angleB=d.angle);var E=m,T=_;if(g&&(E=s.add(g.position,m)),d&&(T=s.add(d.position,_)),!(!E||!T)){var x=s.sub(E,T),v=s.magnitude(x);v<r._minLength&&(v=r._minLength);var S=(v-h.length)/v,M=h.stiffness<1?h.stiffness*f:h.stiffness,y=s.mult(x,S*M),w=(g?g.inverseMass:0)+(d?d.inverseMass:0),A=(g?g.inverseInertia:0)+(d?d.inverseInertia:0),b=w+A,L,F,P,N,I;if(h.damping){var z=s.create();P=s.div(x,v),I=s.sub(d&&s.sub(d.position,d.positionPrev)||z,g&&s.sub(g.position,g.positionPrev)||z),N=s.dot(P,I)}g&&!g.isStatic&&(F=g.inverseMass/w,g.constraintImpulse.x-=y.x*F,g.constraintImpulse.y-=y.y*F,g.position.x-=y.x*F,g.position.y-=y.y*F,h.damping&&(g.positionPrev.x-=h.damping*P.x*N*F,g.positionPrev.y-=h.damping*P.y*N*F),L=s.cross(m,y)/b*r._torqueDampen*g.inverseInertia*(1-h.angularStiffness),g.constraintImpulse.angle-=L,g.angle-=L),d&&!d.isStatic&&(F=d.inverseMass/w,d.constraintImpulse.x+=y.x*F,d.constraintImpulse.y+=y.y*F,d.position.x+=y.x*F,d.position.y+=y.y*F,h.damping&&(d.positionPrev.x+=h.damping*P.x*N*F,d.positionPrev.y+=h.damping*P.y*N*F),L=s.cross(_,y)/b*r._torqueDampen*d.inverseInertia*(1-h.angularStiffness),d.constraintImpulse.angle+=L,d.angle+=L)}}},r.postSolveAll=function(h){for(var f=0;f<h.length;f++){var g=h[f],d=g.constraintImpulse;if(!(g.isStatic||d.x===0&&d.y===0&&d.angle===0)){l.set(g,!1);for(var m=0;m<g.parts.length;m++){var _=g.parts[m];a.translate(_.vertices,d),m>0&&(_.position.x+=d.x,_.position.y+=d.y),d.angle!==0&&(a.rotate(_.vertices,d.angle,g.position),c.rotate(_.axes,d.angle),m>0&&s.rotateAbout(_.position,d.angle,g.position,_.position)),u.update(_.bounds,_.vertices,g.velocity)}d.angle*=r._warming,d.x*=r._warming,d.y*=r._warming}}},r.pointAWorld=function(h){return{x:(h.bodyA?h.bodyA.position.x:0)+h.pointA.x,y:(h.bodyA?h.bodyA.position.y:0)+h.pointA.y}},r.pointBWorld=function(h){return{x:(h.bodyB?h.bodyB.position.x:0)+h.pointB.x,y:(h.bodyB?h.bodyB.position.y:0)+h.pointB.y}}})()},function(t,i,n){var r={};t.exports=r;var a=n(2),s=n(0);(function(){r.fromVertices=function(l){for(var u={},c=0;c<l.length;c++){var p=(c+1)%l.length,h=a.normalise({x:l[p].y-l[c].y,y:l[c].x-l[p].x}),f=h.y===0?1/0:h.x/h.y;f=f.toFixed(3).toString(),u[f]=h}return s.values(u)},r.rotate=function(l,u){if(u!==0)for(var c=Math.cos(u),p=Math.sin(u),h=0;h<l.length;h++){var f=l[h],g;g=f.x*c-f.y*p,f.y=f.x*p+f.y*c,f.x=g}}})()},function(t,i,n){var r={};t.exports=r;var a=n(3),s=n(0),l=n(6),u=n(1),c=n(2);(function(){r.rectangle=function(p,h,f,g,d){d=d||{};var m={label:"Rectangle Body",position:{x:p,y:h},vertices:a.fromPath("L 0 0 L "+f+" 0 L "+f+" "+g+" L 0 "+g)};if(d.chamfer){var _=d.chamfer;m.vertices=a.chamfer(m.vertices,_.radius,_.quality,_.qualityMin,_.qualityMax),delete d.chamfer}return l.create(s.extend({},m,d))},r.trapezoid=function(p,h,f,g,d,m){m=m||{},d*=.5;var _=(1-d*2)*f,E=f*d,T=E+_,x=T+E,v;d<.5?v="L 0 0 L "+E+" "+-g+" L "+T+" "+-g+" L "+x+" 0":v="L 0 0 L "+T+" "+-g+" L "+x+" 0";var S={label:"Trapezoid Body",position:{x:p,y:h},vertices:a.fromPath(v)};if(m.chamfer){var M=m.chamfer;S.vertices=a.chamfer(S.vertices,M.radius,M.quality,M.qualityMin,M.qualityMax),delete m.chamfer}return l.create(s.extend({},S,m))},r.circle=function(p,h,f,g,d){g=g||{};var m={label:"Circle Body",circleRadius:f};d=d||25;var _=Math.ceil(Math.max(10,Math.min(d,f)));return _%2===1&&(_+=1),r.polygon(p,h,_,f,s.extend({},m,g))},r.polygon=function(p,h,f,g,d){if(d=d||{},f<3)return r.circle(p,h,g,d);for(var m=2*Math.PI/f,_="",E=m*.5,T=0;T<f;T+=1){var x=E+T*m,v=Math.cos(x)*g,S=Math.sin(x)*g;_+="L "+v.toFixed(3)+" "+S.toFixed(3)+" "}var M={label:"Polygon Body",position:{x:p,y:h},vertices:a.fromPath(_)};if(d.chamfer){var y=d.chamfer;M.vertices=a.chamfer(M.vertices,y.radius,y.quality,y.qualityMin,y.qualityMax),delete d.chamfer}return l.create(s.extend({},M,d))},r.fromVertices=function(p,h,f,g,d,m,_,E){var T=s.getDecomp(),x,v,S,M,y,w,A,b,L,F,P;for(x=Boolean(T&&T.quickDecomp),g=g||{},S=[],d=typeof d!="undefined"?d:!1,m=typeof m!="undefined"?m:.01,_=typeof _!="undefined"?_:10,E=typeof E!="undefined"?E:.01,s.isArray(f[0])||(f=[f]),F=0;F<f.length;F+=1)if(w=f[F],M=a.isConvex(w),y=!M,y&&!x&&s.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),M||!x)M?w=a.clockwiseSort(w):w=a.hull(w),S.push({position:{x:p,y:h},vertices:w});else{var N=w.map(function(U){return[U.x,U.y]});T.makeCCW(N),m!==!1&&T.removeCollinearPoints(N,m),E!==!1&&T.removeDuplicatePoints&&T.removeDuplicatePoints(N,E);var I=T.quickDecomp(N);for(A=0;A<I.length;A++){var z=I[A],k=z.map(function(U){return{x:U[0],y:U[1]}});_>0&&a.area(k)<_||S.push({position:a.centre(k),vertices:k})}}for(A=0;A<S.length;A++)S[A]=l.create(s.extend(S[A],g));if(d){var B=5;for(A=0;A<S.length;A++){var W=S[A];for(b=A+1;b<S.length;b++){var J=S[b];if(u.overlaps(W.bounds,J.bounds)){var Z=W.vertices,j=J.vertices;for(L=0;L<W.vertices.length;L++)for(P=0;P<J.vertices.length;P++){var ie=c.magnitudeSquared(c.sub(Z[(L+1)%Z.length],j[P])),oe=c.magnitudeSquared(c.sub(Z[L],j[(P+1)%j.length]));ie<B&&oe<B&&(Z[L].isInternal=!0,j[P].isInternal=!0)}}}}}return S.length>1?(v=l.create(s.extend({parts:S.slice(0)},g)),l.setPosition(v,{x:p,y:h}),v):S[0]}})()},function(t,i,n){var r={};t.exports=r;var a=n(0);(function(){r.create=function(s){var l={};return s||a.log("Mouse.create: element was undefined, defaulting to document.body","warn"),l.element=s||document.body,l.absolute={x:0,y:0},l.position={x:0,y:0},l.mousedownPosition={x:0,y:0},l.mouseupPosition={x:0,y:0},l.offset={x:0,y:0},l.scale={x:1,y:1},l.wheelDelta=0,l.button=-1,l.pixelRatio=parseInt(l.element.getAttribute("data-pixel-ratio"),10)||1,l.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},l.mousemove=function(u){var c=r._getRelativeMousePosition(u,l.element,l.pixelRatio),p=u.changedTouches;p&&(l.button=0,u.preventDefault()),l.absolute.x=c.x,l.absolute.y=c.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.sourceEvents.mousemove=u},l.mousedown=function(u){var c=r._getRelativeMousePosition(u,l.element,l.pixelRatio),p=u.changedTouches;p?(l.button=0,u.preventDefault()):l.button=u.button,l.absolute.x=c.x,l.absolute.y=c.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.mousedownPosition.x=l.position.x,l.mousedownPosition.y=l.position.y,l.sourceEvents.mousedown=u},l.mouseup=function(u){var c=r._getRelativeMousePosition(u,l.element,l.pixelRatio),p=u.changedTouches;p&&u.preventDefault(),l.button=-1,l.absolute.x=c.x,l.absolute.y=c.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.mouseupPosition.x=l.position.x,l.mouseupPosition.y=l.position.y,l.sourceEvents.mouseup=u},l.mousewheel=function(u){l.wheelDelta=Math.max(-1,Math.min(1,u.wheelDelta||-u.detail)),u.preventDefault()},r.setElement(l,l.element),l},r.setElement=function(s,l){s.element=l,l.addEventListener("mousemove",s.mousemove),l.addEventListener("mousedown",s.mousedown),l.addEventListener("mouseup",s.mouseup),l.addEventListener("mousewheel",s.mousewheel),l.addEventListener("DOMMouseScroll",s.mousewheel),l.addEventListener("touchmove",s.mousemove),l.addEventListener("touchstart",s.mousedown),l.addEventListener("touchend",s.mouseup)},r.clearSourceEvents=function(s){s.sourceEvents.mousemove=null,s.sourceEvents.mousedown=null,s.sourceEvents.mouseup=null,s.sourceEvents.mousewheel=null,s.wheelDelta=0},r.setOffset=function(s,l){s.offset.x=l.x,s.offset.y=l.y,s.position.x=s.absolute.x*s.scale.x+s.offset.x,s.position.y=s.absolute.y*s.scale.y+s.offset.y},r.setScale=function(s,l){s.scale.x=l.x,s.scale.y=l.y,s.position.x=s.absolute.x*s.scale.x+s.offset.x,s.position.y=s.absolute.y*s.scale.y+s.offset.y},r._getRelativeMousePosition=function(s,l,u){var c=l.getBoundingClientRect(),p=document.documentElement||document.body.parentNode||document.body,h=window.pageXOffset!==void 0?window.pageXOffset:p.scrollLeft,f=window.pageYOffset!==void 0?window.pageYOffset:p.scrollTop,g=s.changedTouches,d,m;return g?(d=g[0].pageX-c.left-h,m=g[0].pageY-c.top-f):(d=s.pageX-c.left-h,m=s.pageY-c.top-f),{x:d/(l.clientWidth/(l.width||l.clientWidth)*u),y:m/(l.clientHeight/(l.height||l.clientHeight)*u)}}})()},function(t,i,n){var r={};t.exports=r;var a=n(0),s=n(8);(function(){r.create=function(l){var u={bodies:[],pairs:null};return a.extend(u,l)},r.setBodies=function(l,u){l.bodies=u.slice(0)},r.clear=function(l){l.bodies=[]},r.collisions=function(l){var u=[],c=l.pairs,p=l.bodies,h=p.length,f=r.canCollide,g=s.collides,d,m;for(p.sort(r._compareBoundsX),d=0;d<h;d++){var _=p[d],E=_.bounds,T=_.bounds.max.x,x=_.bounds.max.y,v=_.bounds.min.y,S=_.isStatic||_.isSleeping,M=_.parts.length,y=M===1;for(m=d+1;m<h;m++){var w=p[m],A=w.bounds;if(A.min.x>T)break;if(!(x<A.min.y||v>A.max.y)&&!(S&&(w.isStatic||w.isSleeping))&&!!f(_.collisionFilter,w.collisionFilter)){var b=w.parts.length;if(y&&b===1){var L=g(_,w,c);L&&u.push(L)}else for(var F=M>1?1:0,P=b>1?1:0,N=F;N<M;N++)for(var I=_.parts[N],E=I.bounds,z=P;z<b;z++){var k=w.parts[z],A=k.bounds;if(!(E.min.x>A.max.x||E.max.x<A.min.x||E.max.y<A.min.y||E.min.y>A.max.y)){var L=g(I,k,c);L&&u.push(L)}}}}}return u},r.canCollide=function(l,u){return l.group===u.group&&l.group!==0?l.group>0:(l.mask&u.category)!==0&&(u.mask&l.category)!==0},r._compareBoundsX=function(l,u){return l.bounds.min.x-u.bounds.min.x}})()},function(t,i,n){var r={};t.exports=r;var a=n(0);(function(){r._registry={},r.register=function(s){if(r.isPlugin(s)||a.warn("Plugin.register:",r.toString(s),"does not implement all required fields."),s.name in r._registry){var l=r._registry[s.name],u=r.versionParse(s.version).number,c=r.versionParse(l.version).number;u>c?(a.warn("Plugin.register:",r.toString(l),"was upgraded to",r.toString(s)),r._registry[s.name]=s):u<c?a.warn("Plugin.register:",r.toString(l),"can not be downgraded to",r.toString(s)):s!==l&&a.warn("Plugin.register:",r.toString(s),"is already registered to different plugin object")}else r._registry[s.name]=s;return s},r.resolve=function(s){return r._registry[r.dependencyParse(s).name]},r.toString=function(s){return typeof s=="string"?s:(s.name||"anonymous")+"@"+(s.version||s.range||"0.0.0")},r.isPlugin=function(s){return s&&s.name&&s.version&&s.install},r.isUsed=function(s,l){return s.used.indexOf(l)>-1},r.isFor=function(s,l){var u=s.for&&r.dependencyParse(s.for);return!s.for||l.name===u.name&&r.versionSatisfies(l.version,u.range)},r.use=function(s,l){if(s.uses=(s.uses||[]).concat(l||[]),s.uses.length===0){a.warn("Plugin.use:",r.toString(s),"does not specify any dependencies to install.");return}for(var u=r.dependencies(s),c=a.topologicalSort(u),p=[],h=0;h<c.length;h+=1)if(c[h]!==s.name){var f=r.resolve(c[h]);if(!f){p.push("\u274C "+c[h]);continue}r.isUsed(s,f.name)||(r.isFor(f,s)||(a.warn("Plugin.use:",r.toString(f),"is for",f.for,"but installed on",r.toString(s)+"."),f._warned=!0),f.install?f.install(s):(a.warn("Plugin.use:",r.toString(f),"does not specify an install function."),f._warned=!0),f._warned?(p.push("\u{1F536} "+r.toString(f)),delete f._warned):p.push("\u2705 "+r.toString(f)),s.used.push(f.name))}p.length>0&&a.info(p.join("  "))},r.dependencies=function(s,l){var u=r.dependencyParse(s),c=u.name;if(l=l||{},!(c in l)){s=r.resolve(s)||s,l[c]=a.map(s.uses||[],function(h){r.isPlugin(h)&&r.register(h);var f=r.dependencyParse(h),g=r.resolve(h);return g&&!r.versionSatisfies(g.version,f.range)?(a.warn("Plugin.dependencies:",r.toString(g),"does not satisfy",r.toString(f),"used by",r.toString(u)+"."),g._warned=!0,s._warned=!0):g||(a.warn("Plugin.dependencies:",r.toString(h),"used by",r.toString(u),"could not be resolved."),s._warned=!0),f.name});for(var p=0;p<l[c].length;p+=1)r.dependencies(l[c][p],l);return l}},r.dependencyParse=function(s){if(a.isString(s)){var l=/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;return l.test(s)||a.warn("Plugin.dependencyParse:",s,"is not a valid dependency string."),{name:s.split("@")[0],range:s.split("@")[1]||"*"}}return{name:s.name,range:s.range||s.version}},r.versionParse=function(s){var l=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;l.test(s)||a.warn("Plugin.versionParse:",s,"is not a valid version or range.");var u=l.exec(s),c=Number(u[4]),p=Number(u[5]),h=Number(u[6]);return{isRange:Boolean(u[1]||u[2]),version:u[3],range:s,operator:u[1]||u[2]||"",major:c,minor:p,patch:h,parts:[c,p,h],prerelease:u[7],number:c*1e8+p*1e4+h}},r.versionSatisfies=function(s,l){l=l||"*";var u=r.versionParse(l),c=r.versionParse(s);if(u.isRange){if(u.operator==="*"||s==="*")return!0;if(u.operator===">")return c.number>u.number;if(u.operator===">=")return c.number>=u.number;if(u.operator==="~")return c.major===u.major&&c.minor===u.minor&&c.patch>=u.patch;if(u.operator==="^")return u.major>0?c.major===u.major&&c.number>=u.number:u.minor>0?c.minor===u.minor&&c.patch>=u.patch:c.patch===u.patch}return s===l||s==="*"}})()},function(t,i,n){var r={};t.exports=r;var a=n(0),s=n(5),l=n(1),u=n(4),c=n(2),p=n(13);(function(){var h,f;typeof window!="undefined"&&(h=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(x){window.setTimeout(function(){x(a.now())},1e3/60)},f=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),r._goodFps=30,r._goodDelta=1e3/60,r.create=function(x){var v={controller:r,engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,timing:{historySize:60,delta:0,deltaHistory:[],lastTime:0,lastTimestamp:0,lastElapsed:0,timestampElapsed:0,timestampElapsedHistory:[],engineDeltaHistory:[],engineElapsedHistory:[],elapsedHistory:[]},options:{width:800,height:600,pixelRatio:1,background:"#14151f",wireframeBackground:"#14151f",hasBounds:!!x.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showStats:!1,showPerformance:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},S=a.extend(v,x);return S.canvas&&(S.canvas.width=S.options.width||S.canvas.width,S.canvas.height=S.options.height||S.canvas.height),S.mouse=x.mouse,S.engine=x.engine,S.canvas=S.canvas||m(S.options.width,S.options.height),S.context=S.canvas.getContext("2d"),S.textures={},S.bounds=S.bounds||{min:{x:0,y:0},max:{x:S.canvas.width,y:S.canvas.height}},S.options.showBroadphase=!1,S.options.pixelRatio!==1&&r.setPixelRatio(S,S.options.pixelRatio),a.isElement(S.element)?S.element.appendChild(S.canvas):S.canvas.parentNode||a.log("Render.create: options.element was undefined, render.canvas was created but not appended","warn"),S},r.run=function(x){(function v(S){x.frameRequestId=h(v),g(x,S),r.world(x,S),(x.options.showStats||x.options.showDebug)&&r.stats(x,x.context,S),(x.options.showPerformance||x.options.showDebug)&&r.performance(x,x.context,S)})()},r.stop=function(x){f(x.frameRequestId)},r.setPixelRatio=function(x,v){var S=x.options,M=x.canvas;v==="auto"&&(v=_(M)),S.pixelRatio=v,M.setAttribute("data-pixel-ratio",v),M.width=S.width*v,M.height=S.height*v,M.style.width=S.width+"px",M.style.height=S.height+"px"},r.lookAt=function(x,v,S,M){M=typeof M!="undefined"?M:!0,v=a.isArray(v)?v:[v],S=S||{x:0,y:0};for(var y={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},w=0;w<v.length;w+=1){var A=v[w],b=A.bounds?A.bounds.min:A.min||A.position||A,L=A.bounds?A.bounds.max:A.max||A.position||A;b&&L&&(b.x<y.min.x&&(y.min.x=b.x),L.x>y.max.x&&(y.max.x=L.x),b.y<y.min.y&&(y.min.y=b.y),L.y>y.max.y&&(y.max.y=L.y))}var F=y.max.x-y.min.x+2*S.x,P=y.max.y-y.min.y+2*S.y,N=x.canvas.height,I=x.canvas.width,z=I/N,k=F/P,B=1,W=1;k>z?W=k/z:B=z/k,x.options.hasBounds=!0,x.bounds.min.x=y.min.x,x.bounds.max.x=y.min.x+F*B,x.bounds.min.y=y.min.y,x.bounds.max.y=y.min.y+P*W,M&&(x.bounds.min.x+=F*.5-F*B*.5,x.bounds.max.x+=F*.5-F*B*.5,x.bounds.min.y+=P*.5-P*W*.5,x.bounds.max.y+=P*.5-P*W*.5),x.bounds.min.x-=S.x,x.bounds.max.x-=S.x,x.bounds.min.y-=S.y,x.bounds.max.y-=S.y,x.mouse&&(p.setScale(x.mouse,{x:(x.bounds.max.x-x.bounds.min.x)/x.canvas.width,y:(x.bounds.max.y-x.bounds.min.y)/x.canvas.height}),p.setOffset(x.mouse,x.bounds.min))},r.startViewTransform=function(x){var v=x.bounds.max.x-x.bounds.min.x,S=x.bounds.max.y-x.bounds.min.y,M=v/x.options.width,y=S/x.options.height;x.context.setTransform(x.options.pixelRatio/M,0,0,x.options.pixelRatio/y,0,0),x.context.translate(-x.bounds.min.x,-x.bounds.min.y)},r.endViewTransform=function(x){x.context.setTransform(x.options.pixelRatio,0,0,x.options.pixelRatio,0,0)},r.world=function(x,v){var S=a.now(),M=x.engine,y=M.world,w=x.canvas,A=x.context,b=x.options,L=x.timing,F=s.allBodies(y),P=s.allConstraints(y),N=b.wireframes?b.wireframeBackground:b.background,I=[],z=[],k,B={timestamp:M.timing.timestamp};if(u.trigger(x,"beforeRender",B),x.currentBackground!==N&&T(x,N),A.globalCompositeOperation="source-in",A.fillStyle="transparent",A.fillRect(0,0,w.width,w.height),A.globalCompositeOperation="source-over",b.hasBounds){for(k=0;k<F.length;k++){var W=F[k];l.overlaps(W.bounds,x.bounds)&&I.push(W)}for(k=0;k<P.length;k++){var J=P[k],Z=J.bodyA,j=J.bodyB,ie=J.pointA,oe=J.pointB;Z&&(ie=c.add(Z.position,J.pointA)),j&&(oe=c.add(j.position,J.pointB)),!(!ie||!oe)&&(l.contains(x.bounds,ie)||l.contains(x.bounds,oe))&&z.push(J)}r.startViewTransform(x),x.mouse&&(p.setScale(x.mouse,{x:(x.bounds.max.x-x.bounds.min.x)/x.options.width,y:(x.bounds.max.y-x.bounds.min.y)/x.options.height}),p.setOffset(x.mouse,x.bounds.min))}else z=P,I=F,x.options.pixelRatio!==1&&x.context.setTransform(x.options.pixelRatio,0,0,x.options.pixelRatio,0,0);!b.wireframes||M.enableSleeping&&b.showSleeping?r.bodies(x,I,A):(b.showConvexHulls&&r.bodyConvexHulls(x,I,A),r.bodyWireframes(x,I,A)),b.showBounds&&r.bodyBounds(x,I,A),(b.showAxes||b.showAngleIndicator)&&r.bodyAxes(x,I,A),b.showPositions&&r.bodyPositions(x,I,A),b.showVelocity&&r.bodyVelocity(x,I,A),b.showIds&&r.bodyIds(x,I,A),b.showSeparations&&r.separations(x,M.pairs.list,A),b.showCollisions&&r.collisions(x,M.pairs.list,A),b.showVertexNumbers&&r.vertexNumbers(x,I,A),b.showMousePosition&&r.mousePosition(x,x.mouse,A),r.constraints(z,A),b.hasBounds&&r.endViewTransform(x),u.trigger(x,"afterRender",B),L.lastElapsed=a.now()-S},r.stats=function(x,v,S){for(var M=x.engine,y=M.world,w=s.allBodies(y),A=0,b=55,L=44,F=0,P=0,N=0;N<w.length;N+=1)A+=w[N].parts.length;var I={Part:A,Body:w.length,Cons:s.allConstraints(y).length,Comp:s.allComposites(y).length,Pair:M.pairs.list.length};v.fillStyle="#0e0f19",v.fillRect(F,P,b*5.5,L),v.font="12px Arial",v.textBaseline="top",v.textAlign="right";for(var z in I){var k=I[z];v.fillStyle="#aaa",v.fillText(z,F+b,P+8),v.fillStyle="#eee",v.fillText(k,F+b,P+26),F+=b}},r.performance=function(x,v){var S=x.engine,M=x.timing,y=M.deltaHistory,w=M.elapsedHistory,A=M.timestampElapsedHistory,b=M.engineDeltaHistory,L=M.engineElapsedHistory,F=S.timing.lastDelta,P=d(y),N=d(w),I=d(b),z=d(L),k=d(A),B=k/P||0,W=1e3/P||0,J=4,Z=12,j=60,ie=34,oe=10,U=69;v.fillStyle="#0e0f19",v.fillRect(0,50,Z*4+j*5+22,ie),r.status(v,oe,U,j,J,y.length,Math.round(W)+" fps",W/r._goodFps,function(Te){return y[Te]/P-1}),r.status(v,oe+Z+j,U,j,J,b.length,F.toFixed(2)+" dt",r._goodDelta/F,function(Te){return b[Te]/I-1}),r.status(v,oe+(Z+j)*2,U,j,J,L.length,z.toFixed(2)+" ut",1-z/r._goodFps,function(Te){return L[Te]/z-1}),r.status(v,oe+(Z+j)*3,U,j,J,w.length,N.toFixed(2)+" rt",1-N/r._goodFps,function(Te){return w[Te]/N-1}),r.status(v,oe+(Z+j)*4,U,j,J,A.length,B.toFixed(2)+" x",B*B*B,function(Te){return(A[Te]/y[Te]/B||0)-1})},r.status=function(x,v,S,M,y,w,A,b,L){x.strokeStyle="#888",x.fillStyle="#444",x.lineWidth=1,x.fillRect(v,S+7,M,1),x.beginPath(),x.moveTo(v,S+7-y*a.clamp(.4*L(0),-2,2));for(var F=0;F<M;F+=1)x.lineTo(v+F,S+7-(F<w?y*a.clamp(.4*L(F),-2,2):0));x.stroke(),x.fillStyle="hsl("+a.clamp(25+95*b,0,120)+",100%,60%)",x.fillRect(v,S-7,4,4),x.font="12px Arial",x.textBaseline="middle",x.textAlign="right",x.fillStyle="#eee",x.fillText(A,v+M,S-5)},r.constraints=function(x,v){for(var S=v,M=0;M<x.length;M++){var y=x[M];if(!(!y.render.visible||!y.pointA||!y.pointB)){var w=y.bodyA,A=y.bodyB,b,L;if(w?b=c.add(w.position,y.pointA):b=y.pointA,y.render.type==="pin")S.beginPath(),S.arc(b.x,b.y,3,0,2*Math.PI),S.closePath();else{if(A?L=c.add(A.position,y.pointB):L=y.pointB,S.beginPath(),S.moveTo(b.x,b.y),y.render.type==="spring")for(var F=c.sub(L,b),P=c.perp(c.normalise(F)),N=Math.ceil(a.clamp(y.length/5,12,20)),I,z=1;z<N;z+=1)I=z%2===0?1:-1,S.lineTo(b.x+F.x*(z/N)+P.x*I*4,b.y+F.y*(z/N)+P.y*I*4);S.lineTo(L.x,L.y)}y.render.lineWidth&&(S.lineWidth=y.render.lineWidth,S.strokeStyle=y.render.strokeStyle,S.stroke()),y.render.anchors&&(S.fillStyle=y.render.strokeStyle,S.beginPath(),S.arc(b.x,b.y,3,0,2*Math.PI),S.arc(L.x,L.y,3,0,2*Math.PI),S.closePath(),S.fill())}}},r.bodies=function(x,v,S){var M=S;x.engine;var y=x.options,w=y.showInternalEdges||!y.wireframes,A,b,L,F;for(L=0;L<v.length;L++)if(A=v[L],!!A.render.visible){for(F=A.parts.length>1?1:0;F<A.parts.length;F++)if(b=A.parts[F],!!b.render.visible){if(y.showSleeping&&A.isSleeping?M.globalAlpha=.5*b.render.opacity:b.render.opacity!==1&&(M.globalAlpha=b.render.opacity),b.render.sprite&&b.render.sprite.texture&&!y.wireframes){var P=b.render.sprite,N=E(x,P.texture);M.translate(b.position.x,b.position.y),M.rotate(b.angle),M.drawImage(N,N.width*-P.xOffset*P.xScale,N.height*-P.yOffset*P.yScale,N.width*P.xScale,N.height*P.yScale),M.rotate(-b.angle),M.translate(-b.position.x,-b.position.y)}else{if(b.circleRadius)M.beginPath(),M.arc(b.position.x,b.position.y,b.circleRadius,0,2*Math.PI);else{M.beginPath(),M.moveTo(b.vertices[0].x,b.vertices[0].y);for(var I=1;I<b.vertices.length;I++)!b.vertices[I-1].isInternal||w?M.lineTo(b.vertices[I].x,b.vertices[I].y):M.moveTo(b.vertices[I].x,b.vertices[I].y),b.vertices[I].isInternal&&!w&&M.moveTo(b.vertices[(I+1)%b.vertices.length].x,b.vertices[(I+1)%b.vertices.length].y);M.lineTo(b.vertices[0].x,b.vertices[0].y),M.closePath()}y.wireframes?(M.lineWidth=1,M.strokeStyle="#bbb",M.stroke()):(M.fillStyle=b.render.fillStyle,b.render.lineWidth&&(M.lineWidth=b.render.lineWidth,M.strokeStyle=b.render.strokeStyle,M.stroke()),M.fill())}M.globalAlpha=1}}},r.bodyWireframes=function(x,v,S){var M=S,y=x.options.showInternalEdges,w,A,b,L,F;for(M.beginPath(),b=0;b<v.length;b++)if(w=v[b],!!w.render.visible)for(F=w.parts.length>1?1:0;F<w.parts.length;F++){for(A=w.parts[F],M.moveTo(A.vertices[0].x,A.vertices[0].y),L=1;L<A.vertices.length;L++)!A.vertices[L-1].isInternal||y?M.lineTo(A.vertices[L].x,A.vertices[L].y):M.moveTo(A.vertices[L].x,A.vertices[L].y),A.vertices[L].isInternal&&!y&&M.moveTo(A.vertices[(L+1)%A.vertices.length].x,A.vertices[(L+1)%A.vertices.length].y);M.lineTo(A.vertices[0].x,A.vertices[0].y)}M.lineWidth=1,M.strokeStyle="#bbb",M.stroke()},r.bodyConvexHulls=function(x,v,S){var M=S,y,w,A;for(M.beginPath(),w=0;w<v.length;w++)if(y=v[w],!(!y.render.visible||y.parts.length===1)){for(M.moveTo(y.vertices[0].x,y.vertices[0].y),A=1;A<y.vertices.length;A++)M.lineTo(y.vertices[A].x,y.vertices[A].y);M.lineTo(y.vertices[0].x,y.vertices[0].y)}M.lineWidth=1,M.strokeStyle="rgba(255,255,255,0.2)",M.stroke()},r.vertexNumbers=function(x,v,S){var M=S,y,w,A;for(y=0;y<v.length;y++){var b=v[y].parts;for(A=b.length>1?1:0;A<b.length;A++){var L=b[A];for(w=0;w<L.vertices.length;w++)M.fillStyle="rgba(255,255,255,0.2)",M.fillText(y+"_"+w,L.position.x+(L.vertices[w].x-L.position.x)*.8,L.position.y+(L.vertices[w].y-L.position.y)*.8)}}},r.mousePosition=function(x,v,S){var M=S;M.fillStyle="rgba(255,255,255,0.8)",M.fillText(v.position.x+"  "+v.position.y,v.position.x+5,v.position.y-5)},r.bodyBounds=function(x,v,S){var M=S;x.engine;var y=x.options;M.beginPath();for(var w=0;w<v.length;w++){var A=v[w];if(A.render.visible)for(var b=v[w].parts,L=b.length>1?1:0;L<b.length;L++){var F=b[L];M.rect(F.bounds.min.x,F.bounds.min.y,F.bounds.max.x-F.bounds.min.x,F.bounds.max.y-F.bounds.min.y)}}y.wireframes?M.strokeStyle="rgba(255,255,255,0.08)":M.strokeStyle="rgba(0,0,0,0.1)",M.lineWidth=1,M.stroke()},r.bodyAxes=function(x,v,S){var M=S;x.engine;var y=x.options,w,A,b,L;for(M.beginPath(),A=0;A<v.length;A++){var F=v[A],P=F.parts;if(!!F.render.visible)if(y.showAxes)for(b=P.length>1?1:0;b<P.length;b++)for(w=P[b],L=0;L<w.axes.length;L++){var N=w.axes[L];M.moveTo(w.position.x,w.position.y),M.lineTo(w.position.x+N.x*20,w.position.y+N.y*20)}else for(b=P.length>1?1:0;b<P.length;b++)for(w=P[b],L=0;L<w.axes.length;L++)M.moveTo(w.position.x,w.position.y),M.lineTo((w.vertices[0].x+w.vertices[w.vertices.length-1].x)/2,(w.vertices[0].y+w.vertices[w.vertices.length-1].y)/2)}y.wireframes?(M.strokeStyle="indianred",M.lineWidth=1):(M.strokeStyle="rgba(255, 255, 255, 0.4)",M.globalCompositeOperation="overlay",M.lineWidth=2),M.stroke(),M.globalCompositeOperation="source-over"},r.bodyPositions=function(x,v,S){var M=S;x.engine;var y=x.options,w,A,b,L;for(M.beginPath(),b=0;b<v.length;b++)if(w=v[b],!!w.render.visible)for(L=0;L<w.parts.length;L++)A=w.parts[L],M.arc(A.position.x,A.position.y,3,0,2*Math.PI,!1),M.closePath();for(y.wireframes?M.fillStyle="indianred":M.fillStyle="rgba(0,0,0,0.5)",M.fill(),M.beginPath(),b=0;b<v.length;b++)w=v[b],w.render.visible&&(M.arc(w.positionPrev.x,w.positionPrev.y,2,0,2*Math.PI,!1),M.closePath());M.fillStyle="rgba(255,165,0,0.8)",M.fill()},r.bodyVelocity=function(x,v,S){var M=S;M.beginPath();for(var y=0;y<v.length;y++){var w=v[y];!w.render.visible||(M.moveTo(w.position.x,w.position.y),M.lineTo(w.position.x+(w.position.x-w.positionPrev.x)*2,w.position.y+(w.position.y-w.positionPrev.y)*2))}M.lineWidth=3,M.strokeStyle="cornflowerblue",M.stroke()},r.bodyIds=function(x,v,S){var M=S,y,w;for(y=0;y<v.length;y++)if(!!v[y].render.visible){var A=v[y].parts;for(w=A.length>1?1:0;w<A.length;w++){var b=A[w];M.font="12px Arial",M.fillStyle="rgba(255,255,255,0.5)",M.fillText(b.id,b.position.x+10,b.position.y-10)}}},r.collisions=function(x,v,S){var M=S,y=x.options,w,A,b,L;for(M.beginPath(),b=0;b<v.length;b++)if(w=v[b],!!w.isActive)for(A=w.collision,L=0;L<w.activeContacts.length;L++){var F=w.activeContacts[L],P=F.vertex;M.rect(P.x-1.5,P.y-1.5,3.5,3.5)}for(y.wireframes?M.fillStyle="rgba(255,255,255,0.7)":M.fillStyle="orange",M.fill(),M.beginPath(),b=0;b<v.length;b++)if(w=v[b],!!w.isActive&&(A=w.collision,w.activeContacts.length>0)){var N=w.activeContacts[0].vertex.x,I=w.activeContacts[0].vertex.y;w.activeContacts.length===2&&(N=(w.activeContacts[0].vertex.x+w.activeContacts[1].vertex.x)/2,I=(w.activeContacts[0].vertex.y+w.activeContacts[1].vertex.y)/2),A.bodyB===A.supports[0].body||A.bodyA.isStatic===!0?M.moveTo(N-A.normal.x*8,I-A.normal.y*8):M.moveTo(N+A.normal.x*8,I+A.normal.y*8),M.lineTo(N,I)}y.wireframes?M.strokeStyle="rgba(255,165,0,0.7)":M.strokeStyle="orange",M.lineWidth=1,M.stroke()},r.separations=function(x,v,S){var M=S,y=x.options,w,A,b,L,F;for(M.beginPath(),F=0;F<v.length;F++)if(w=v[F],!!w.isActive){A=w.collision,b=A.bodyA,L=A.bodyB;var P=1;!L.isStatic&&!b.isStatic&&(P=.5),L.isStatic&&(P=0),M.moveTo(L.position.x,L.position.y),M.lineTo(L.position.x-A.penetration.x*P,L.position.y-A.penetration.y*P),P=1,!L.isStatic&&!b.isStatic&&(P=.5),b.isStatic&&(P=0),M.moveTo(b.position.x,b.position.y),M.lineTo(b.position.x+A.penetration.x*P,b.position.y+A.penetration.y*P)}y.wireframes?M.strokeStyle="rgba(255,165,0,0.5)":M.strokeStyle="orange",M.stroke()},r.inspector=function(x,v){x.engine;var S=x.selected,M=x.render,y=M.options,w;if(y.hasBounds){var A=M.bounds.max.x-M.bounds.min.x,b=M.bounds.max.y-M.bounds.min.y,L=A/M.options.width,F=b/M.options.height;v.scale(1/L,1/F),v.translate(-M.bounds.min.x,-M.bounds.min.y)}for(var P=0;P<S.length;P++){var N=S[P].data;switch(v.translate(.5,.5),v.lineWidth=1,v.strokeStyle="rgba(255,165,0,0.9)",v.setLineDash([1,2]),N.type){case"body":w=N.bounds,v.beginPath(),v.rect(Math.floor(w.min.x-3),Math.floor(w.min.y-3),Math.floor(w.max.x-w.min.x+6),Math.floor(w.max.y-w.min.y+6)),v.closePath(),v.stroke();break;case"constraint":var I=N.pointA;N.bodyA&&(I=N.pointB),v.beginPath(),v.arc(I.x,I.y,10,0,2*Math.PI),v.closePath(),v.stroke();break}v.setLineDash([]),v.translate(-.5,-.5)}x.selectStart!==null&&(v.translate(.5,.5),v.lineWidth=1,v.strokeStyle="rgba(255,165,0,0.6)",v.fillStyle="rgba(255,165,0,0.1)",w=x.selectBounds,v.beginPath(),v.rect(Math.floor(w.min.x),Math.floor(w.min.y),Math.floor(w.max.x-w.min.x),Math.floor(w.max.y-w.min.y)),v.closePath(),v.stroke(),v.fill(),v.translate(-.5,-.5)),y.hasBounds&&v.setTransform(1,0,0,1,0,0)};var g=function(x,v){var S=x.engine,M=x.timing,y=M.historySize,w=S.timing.timestamp;M.delta=v-M.lastTime||r._goodDelta,M.lastTime=v,M.timestampElapsed=w-M.lastTimestamp||0,M.lastTimestamp=w,M.deltaHistory.unshift(M.delta),M.deltaHistory.length=Math.min(M.deltaHistory.length,y),M.engineDeltaHistory.unshift(S.timing.lastDelta),M.engineDeltaHistory.length=Math.min(M.engineDeltaHistory.length,y),M.timestampElapsedHistory.unshift(M.timestampElapsed),M.timestampElapsedHistory.length=Math.min(M.timestampElapsedHistory.length,y),M.engineElapsedHistory.unshift(S.timing.lastElapsed),M.engineElapsedHistory.length=Math.min(M.engineElapsedHistory.length,y),M.elapsedHistory.unshift(M.lastElapsed),M.elapsedHistory.length=Math.min(M.elapsedHistory.length,y)},d=function(x){for(var v=0,S=0;S<x.length;S+=1)v+=x[S];return v/x.length||0},m=function(x,v){var S=document.createElement("canvas");return S.width=x,S.height=v,S.oncontextmenu=function(){return!1},S.onselectstart=function(){return!1},S},_=function(x){var v=x.getContext("2d"),S=window.devicePixelRatio||1,M=v.webkitBackingStorePixelRatio||v.mozBackingStorePixelRatio||v.msBackingStorePixelRatio||v.oBackingStorePixelRatio||v.backingStorePixelRatio||1;return S/M},E=function(x,v){var S=x.textures[v];return S||(S=x.textures[v]=new Image,S.src=v,S)},T=function(x,v){var S=v;/(jpg|gif|png)$/.test(v)&&(S="url("+v+")"),x.canvas.style.background=S,x.canvas.style.backgroundSize="contain",x.currentBackground=v}})()},function(t,i){var n={};t.exports=n,function(){n.create=function(r){return{vertex:r,normalImpulse:0,tangentImpulse:0}}}()},function(t,i,n){var r={};t.exports=r;var a=n(7),s=n(19),l=n(14),u=n(20),c=n(4),p=n(5),h=n(10),f=n(0),g=n(6);(function(){r.create=function(d){d=d||{};var m={positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},gravity:{x:0,y:1,scale:.001},timing:{timestamp:0,timeScale:1,lastDelta:0,lastElapsed:0}},_=f.extend(m,d);return _.world=d.world||p.create({label:"World"}),_.pairs=d.pairs||u.create(),_.detector=d.detector||l.create(),_.grid={buckets:[]},_.world.gravity=_.gravity,_.broadphase=_.grid,_.metrics={},_},r.update=function(d,m,_){var E=f.now();m=m||1e3/60,_=_||1;var T=d.world,x=d.detector,v=d.pairs,S=d.timing,M=S.timestamp,y;S.timestamp+=m*S.timeScale,S.lastDelta=m*S.timeScale;var w={timestamp:S.timestamp};c.trigger(d,"beforeUpdate",w);var A=p.allBodies(T),b=p.allConstraints(T);for(T.isModified&&l.setBodies(x,A),T.isModified&&p.setModified(T,!1,!1,!0),d.enableSleeping&&a.update(A,S.timeScale),r._bodiesApplyGravity(A,d.gravity),r._bodiesUpdate(A,m,S.timeScale,_,T.bounds),h.preSolveAll(A),y=0;y<d.constraintIterations;y++)h.solveAll(b,S.timeScale);h.postSolveAll(A),x.pairs=d.pairs;var L=l.collisions(x);for(u.update(v,L,M),d.enableSleeping&&a.afterCollisions(v.list,S.timeScale),v.collisionStart.length>0&&c.trigger(d,"collisionStart",{pairs:v.collisionStart}),s.preSolvePosition(v.list),y=0;y<d.positionIterations;y++)s.solvePosition(v.list,S.timeScale);for(s.postSolvePosition(A),h.preSolveAll(A),y=0;y<d.constraintIterations;y++)h.solveAll(b,S.timeScale);for(h.postSolveAll(A),s.preSolveVelocity(v.list),y=0;y<d.velocityIterations;y++)s.solveVelocity(v.list,S.timeScale);return v.collisionActive.length>0&&c.trigger(d,"collisionActive",{pairs:v.collisionActive}),v.collisionEnd.length>0&&c.trigger(d,"collisionEnd",{pairs:v.collisionEnd}),r._bodiesClearForces(A),c.trigger(d,"afterUpdate",w),d.timing.lastElapsed=f.now()-E,d},r.merge=function(d,m){if(f.extend(d,m),m.world){d.world=m.world,r.clear(d);for(var _=p.allBodies(d.world),E=0;E<_.length;E++){var T=_[E];a.set(T,!1),T.id=f.nextId()}}},r.clear=function(d){u.clear(d.pairs),l.clear(d.detector)},r._bodiesClearForces=function(d){for(var m=0;m<d.length;m++){var _=d[m];_.force.x=0,_.force.y=0,_.torque=0}},r._bodiesApplyGravity=function(d,m){var _=typeof m.scale!="undefined"?m.scale:.001;if(!(m.x===0&&m.y===0||_===0))for(var E=0;E<d.length;E++){var T=d[E];T.isStatic||T.isSleeping||(T.force.y+=T.mass*m.y*_,T.force.x+=T.mass*m.x*_)}},r._bodiesUpdate=function(d,m,_,E,T){for(var x=0;x<d.length;x++){var v=d[x];v.isStatic||v.isSleeping||g.update(v,m,_,E)}}})()},function(t,i,n){var r={};t.exports=r;var a=n(3),s=n(1);(function(){r._restingThresh=4,r._restingThreshTangent=6,r._positionDampen=.9,r._positionWarming=.8,r._frictionNormalMultiplier=5,r.preSolvePosition=function(l){var u,c,p,h=l.length;for(u=0;u<h;u++)c=l[u],c.isActive&&(p=c.activeContacts.length,c.collision.parentA.totalContacts+=p,c.collision.parentB.totalContacts+=p)},r.solvePosition=function(l,u){var c,p,h,f,g,d,m,_,E=r._positionDampen,T=l.length;for(c=0;c<T;c++)p=l[c],!(!p.isActive||p.isSensor)&&(h=p.collision,f=h.parentA,g=h.parentB,d=h.normal,p.separation=d.x*(g.positionImpulse.x+h.penetration.x-f.positionImpulse.x)+d.y*(g.positionImpulse.y+h.penetration.y-f.positionImpulse.y));for(c=0;c<T;c++)p=l[c],!(!p.isActive||p.isSensor)&&(h=p.collision,f=h.parentA,g=h.parentB,d=h.normal,_=(p.separation-p.slop)*u,(f.isStatic||g.isStatic)&&(_*=2),f.isStatic||f.isSleeping||(m=E/f.totalContacts,f.positionImpulse.x+=d.x*_*m,f.positionImpulse.y+=d.y*_*m),g.isStatic||g.isSleeping||(m=E/g.totalContacts,g.positionImpulse.x-=d.x*_*m,g.positionImpulse.y-=d.y*_*m))},r.postSolvePosition=function(l){for(var u=r._positionWarming,c=l.length,p=a.translate,h=s.update,f=0;f<c;f++){var g=l[f],d=g.positionImpulse,m=d.x,_=d.y,E=g.velocity;if(g.totalContacts=0,m!==0||_!==0){for(var T=0;T<g.parts.length;T++){var x=g.parts[T];p(x.vertices,d),h(x.bounds,x.vertices,E),x.position.x+=m,x.position.y+=_}g.positionPrev.x+=m,g.positionPrev.y+=_,m*E.x+_*E.y<0?(d.x=0,d.y=0):(d.x*=u,d.y*=u)}}},r.preSolveVelocity=function(l){var u=l.length,c,p;for(c=0;c<u;c++){var h=l[c];if(!(!h.isActive||h.isSensor)){var f=h.activeContacts,g=f.length,d=h.collision,m=d.parentA,_=d.parentB,E=d.normal,T=d.tangent;for(p=0;p<g;p++){var x=f[p],v=x.vertex,S=x.normalImpulse,M=x.tangentImpulse;if(S!==0||M!==0){var y=E.x*S+T.x*M,w=E.y*S+T.y*M;m.isStatic||m.isSleeping||(m.positionPrev.x+=y*m.inverseMass,m.positionPrev.y+=w*m.inverseMass,m.anglePrev+=m.inverseInertia*((v.x-m.position.x)*w-(v.y-m.position.y)*y)),_.isStatic||_.isSleeping||(_.positionPrev.x-=y*_.inverseMass,_.positionPrev.y-=w*_.inverseMass,_.anglePrev-=_.inverseInertia*((v.x-_.position.x)*w-(v.y-_.position.y)*y))}}}}},r.solveVelocity=function(l,u){var c=u*u,p=r._restingThresh*c,h=r._frictionNormalMultiplier,f=r._restingThreshTangent*c,g=Number.MAX_VALUE,d=l.length,m,_,E,T;for(E=0;E<d;E++){var x=l[E];if(!(!x.isActive||x.isSensor)){var v=x.collision,S=v.parentA,M=v.parentB,y=S.velocity,w=M.velocity,A=v.normal.x,b=v.normal.y,L=v.tangent.x,F=v.tangent.y,P=x.activeContacts,N=P.length,I=1/N,z=S.inverseMass+M.inverseMass,k=x.friction*x.frictionStatic*h*c;for(y.x=S.position.x-S.positionPrev.x,y.y=S.position.y-S.positionPrev.y,w.x=M.position.x-M.positionPrev.x,w.y=M.position.y-M.positionPrev.y,S.angularVelocity=S.angle-S.anglePrev,M.angularVelocity=M.angle-M.anglePrev,T=0;T<N;T++){var B=P[T],W=B.vertex,J=W.x-S.position.x,Z=W.y-S.position.y,j=W.x-M.position.x,ie=W.y-M.position.y,oe=y.x-Z*S.angularVelocity,U=y.y+J*S.angularVelocity,Te=w.x-ie*M.angularVelocity,Se=w.y+j*M.angularVelocity,ye=oe-Te,le=U-Se,Re=A*ye+b*le,me=L*ye+F*le,ge=x.separation+Re,$e=Math.min(ge,1);$e=ge<0?0:$e;var lt=$e*k;me>lt||-me>lt?(_=me>0?me:-me,m=x.friction*(me>0?1:-1)*c,m<-_?m=-_:m>_&&(m=_)):(m=me,_=g);var ft=J*b-Z*A,Dt=j*b-ie*A,Je=I/(z+S.inverseInertia*ft*ft+M.inverseInertia*Dt*Dt),De=(1+x.restitution)*Re*Je;if(m*=Je,Re*Re>p&&Re<0)B.normalImpulse=0;else{var Zt=B.normalImpulse;B.normalImpulse+=De,B.normalImpulse=Math.min(B.normalImpulse,0),De=B.normalImpulse-Zt}if(me*me>f)B.tangentImpulse=0;else{var Kt=B.tangentImpulse;B.tangentImpulse+=m,B.tangentImpulse<-_&&(B.tangentImpulse=-_),B.tangentImpulse>_&&(B.tangentImpulse=_),m=B.tangentImpulse-Kt}var D=A*De+L*m,C=b*De+F*m;S.isStatic||S.isSleeping||(S.positionPrev.x+=D*S.inverseMass,S.positionPrev.y+=C*S.inverseMass,S.anglePrev+=(J*C-Z*D)*S.inverseInertia),M.isStatic||M.isSleeping||(M.positionPrev.x-=D*M.inverseMass,M.positionPrev.y-=C*M.inverseMass,M.anglePrev-=(j*C-ie*D)*M.inverseInertia)}}}}})()},function(t,i,n){var r={};t.exports=r;var a=n(9),s=n(0);(function(){r.create=function(l){return s.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},l)},r.update=function(l,u,c){var p=l.list,h=p.length,f=l.table,g=u.length,d=l.collisionStart,m=l.collisionEnd,_=l.collisionActive,E,T,x,v;for(d.length=0,m.length=0,_.length=0,v=0;v<h;v++)p[v].confirmedActive=!1;for(v=0;v<g;v++)E=u[v],x=E.pair,x?(x.isActive?_.push(x):d.push(x),a.update(x,E,c),x.confirmedActive=!0):(x=a.create(E,c),f[x.id]=x,d.push(x),p.push(x));var S=[];for(h=p.length,v=0;v<h;v++)x=p[v],x.confirmedActive||(a.setActive(x,!1,c),m.push(x),!x.collision.bodyA.isSleeping&&!x.collision.bodyB.isSleeping&&S.push(v));for(v=0;v<S.length;v++)T=S[v]-v,x=p[T],p.splice(T,1),delete f[x.id]},r.clear=function(l){return l.table={},l.list.length=0,l.collisionStart.length=0,l.collisionActive.length=0,l.collisionEnd.length=0,l}})()},function(t,i,n){var r=t.exports=n(22);r.Axes=n(11),r.Bodies=n(12),r.Body=n(6),r.Bounds=n(1),r.Collision=n(8),r.Common=n(0),r.Composite=n(5),r.Composites=n(23),r.Constraint=n(10),r.Contact=n(17),r.Detector=n(14),r.Engine=n(18),r.Events=n(4),r.Grid=n(24),r.Mouse=n(13),r.MouseConstraint=n(25),r.Pair=n(9),r.Pairs=n(20),r.Plugin=n(15),r.Query=n(26),r.Render=n(16),r.Resolver=n(19),r.Runner=n(27),r.SAT=n(28),r.Sleeping=n(7),r.Svg=n(29),r.Vector=n(2),r.Vertices=n(3),r.World=n(30),r.Engine.run=r.Runner.run,r.Common.deprecated(r.Engine,"run","Engine.run \u27A4 use Matter.Runner.run(engine) instead")},function(t,i,n){var r={};t.exports=r;var a=n(15),s=n(0);(function(){r.name="matter-js",r.version="0.18.0",r.uses=[],r.used=[],r.use=function(){a.use(r,Array.prototype.slice.call(arguments))},r.before=function(l,u){return l=l.replace(/^Matter./,""),s.chainPathBefore(r,l,u)},r.after=function(l,u){return l=l.replace(/^Matter./,""),s.chainPathAfter(r,l,u)}})()},function(t,i,n){var r={};t.exports=r;var a=n(5),s=n(10),l=n(0),u=n(6),c=n(12),p=l.deprecated;(function(){r.stack=function(h,f,g,d,m,_,E){for(var T=a.create({label:"Stack"}),x=h,v=f,S,M=0,y=0;y<d;y++){for(var w=0,A=0;A<g;A++){var b=E(x,v,A,y,S,M);if(b){var L=b.bounds.max.y-b.bounds.min.y,F=b.bounds.max.x-b.bounds.min.x;L>w&&(w=L),u.translate(b,{x:F*.5,y:L*.5}),x=b.bounds.max.x+m,a.addBody(T,b),S=b,M+=1}else x+=m}v+=w+_,x=h}return T},r.chain=function(h,f,g,d,m,_){for(var E=h.bodies,T=1;T<E.length;T++){var x=E[T-1],v=E[T],S=x.bounds.max.y-x.bounds.min.y,M=x.bounds.max.x-x.bounds.min.x,y=v.bounds.max.y-v.bounds.min.y,w=v.bounds.max.x-v.bounds.min.x,A={bodyA:x,pointA:{x:M*f,y:S*g},bodyB:v,pointB:{x:w*d,y:y*m}},b=l.extend(A,_);a.addConstraint(h,s.create(b))}return h.label+=" Chain",h},r.mesh=function(h,f,g,d,m){var _=h.bodies,E,T,x,v,S;for(E=0;E<g;E++){for(T=1;T<f;T++)x=_[T-1+E*f],v=_[T+E*f],a.addConstraint(h,s.create(l.extend({bodyA:x,bodyB:v},m)));if(E>0)for(T=0;T<f;T++)x=_[T+(E-1)*f],v=_[T+E*f],a.addConstraint(h,s.create(l.extend({bodyA:x,bodyB:v},m))),d&&T>0&&(S=_[T-1+(E-1)*f],a.addConstraint(h,s.create(l.extend({bodyA:S,bodyB:v},m)))),d&&T<f-1&&(S=_[T+1+(E-1)*f],a.addConstraint(h,s.create(l.extend({bodyA:S,bodyB:v},m))))}return h.label+=" Mesh",h},r.pyramid=function(h,f,g,d,m,_,E){return r.stack(h,f,g,d,m,_,function(T,x,v,S,M,y){var w=Math.min(d,Math.ceil(g/2)),A=M?M.bounds.max.x-M.bounds.min.x:0;if(!(S>w)){S=w-S;var b=S,L=g-1-S;if(!(v<b||v>L)){y===1&&u.translate(M,{x:(v+(g%2===1?1:-1))*A,y:0});var F=M?v*A:0;return E(h+F+v*m,x,v,S,M,y)}}})},r.newtonsCradle=function(h,f,g,d,m){for(var _=a.create({label:"Newtons Cradle"}),E=0;E<g;E++){var T=1.9,x=c.circle(h+E*(d*T),f+m,d,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),v=s.create({pointA:{x:h+E*(d*T),y:f},bodyB:x});a.addBody(_,x),a.addConstraint(_,v)}return _},p(r,"newtonsCradle","Composites.newtonsCradle \u27A4 moved to newtonsCradle example"),r.car=function(h,f,g,d,m){var _=u.nextGroup(!0),E=20,T=-g*.5+E,x=g*.5-E,v=0,S=a.create({label:"Car"}),M=c.rectangle(h,f,g,d,{collisionFilter:{group:_},chamfer:{radius:d*.5},density:2e-4}),y=c.circle(h+T,f+v,m,{collisionFilter:{group:_},friction:.8}),w=c.circle(h+x,f+v,m,{collisionFilter:{group:_},friction:.8}),A=s.create({bodyB:M,pointB:{x:T,y:v},bodyA:y,stiffness:1,length:0}),b=s.create({bodyB:M,pointB:{x,y:v},bodyA:w,stiffness:1,length:0});return a.addBody(S,M),a.addBody(S,y),a.addBody(S,w),a.addConstraint(S,A),a.addConstraint(S,b),S},p(r,"car","Composites.car \u27A4 moved to car example"),r.softBody=function(h,f,g,d,m,_,E,T,x,v){x=l.extend({inertia:1/0},x),v=l.extend({stiffness:.2,render:{type:"line",anchors:!1}},v);var S=r.stack(h,f,g,d,m,_,function(M,y){return c.circle(M,y,T,x)});return r.mesh(S,g,d,E,v),S.label="Soft Body",S},p(r,"softBody","Composites.softBody \u27A4 moved to softBody and cloth examples")})()},function(t,i,n){var r={};t.exports=r;var a=n(9),s=n(0),l=s.deprecated;(function(){r.create=function(u){var c={buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48};return s.extend(c,u)},r.update=function(u,c,p,h){var f,g,d,m=p.world,_=u.buckets,E,T,x=!1;for(f=0;f<c.length;f++){var v=c[f];if(!(v.isSleeping&&!h)&&!(m.bounds&&(v.bounds.max.x<m.bounds.min.x||v.bounds.min.x>m.bounds.max.x||v.bounds.max.y<m.bounds.min.y||v.bounds.min.y>m.bounds.max.y))){var S=r._getRegion(u,v);if(!v.region||S.id!==v.region.id||h){(!v.region||h)&&(v.region=S);var M=r._regionUnion(S,v.region);for(g=M.startCol;g<=M.endCol;g++)for(d=M.startRow;d<=M.endRow;d++){T=r._getBucketId(g,d),E=_[T];var y=g>=S.startCol&&g<=S.endCol&&d>=S.startRow&&d<=S.endRow,w=g>=v.region.startCol&&g<=v.region.endCol&&d>=v.region.startRow&&d<=v.region.endRow;!y&&w&&w&&E&&r._bucketRemoveBody(u,E,v),(v.region===S||y&&!w||h)&&(E||(E=r._createBucket(_,T)),r._bucketAddBody(u,E,v))}v.region=S,x=!0}}}x&&(u.pairsList=r._createActivePairsList(u))},l(r,"update","Grid.update \u27A4 replaced by Matter.Detector"),r.clear=function(u){u.buckets={},u.pairs={},u.pairsList=[]},l(r,"clear","Grid.clear \u27A4 replaced by Matter.Detector"),r._regionUnion=function(u,c){var p=Math.min(u.startCol,c.startCol),h=Math.max(u.endCol,c.endCol),f=Math.min(u.startRow,c.startRow),g=Math.max(u.endRow,c.endRow);return r._createRegion(p,h,f,g)},r._getRegion=function(u,c){var p=c.bounds,h=Math.floor(p.min.x/u.bucketWidth),f=Math.floor(p.max.x/u.bucketWidth),g=Math.floor(p.min.y/u.bucketHeight),d=Math.floor(p.max.y/u.bucketHeight);return r._createRegion(h,f,g,d)},r._createRegion=function(u,c,p,h){return{id:u+","+c+","+p+","+h,startCol:u,endCol:c,startRow:p,endRow:h}},r._getBucketId=function(u,c){return"C"+u+"R"+c},r._createBucket=function(u,c){var p=u[c]=[];return p},r._bucketAddBody=function(u,c,p){var h=u.pairs,f=a.id,g=c.length,d;for(d=0;d<g;d++){var m=c[d];if(!(p.id===m.id||p.isStatic&&m.isStatic)){var _=f(p,m),E=h[_];E?E[2]+=1:h[_]=[p,m,1]}}c.push(p)},r._bucketRemoveBody=function(u,c,p){var h=u.pairs,f=a.id,g;c.splice(s.indexOf(c,p),1);var d=c.length;for(g=0;g<d;g++){var m=h[f(p,c[g])];m&&(m[2]-=1)}},r._createActivePairsList=function(u){var c,p=u.pairs,h=s.keys(p),f=h.length,g=[],d;for(d=0;d<f;d++)c=p[h[d]],c[2]>0?g.push(c):delete p[h[d]];return g}})()},function(t,i,n){var r={};t.exports=r;var a=n(3),s=n(7),l=n(13),u=n(4),c=n(14),p=n(10),h=n(5),f=n(0),g=n(1);(function(){r.create=function(d,m){var _=(d?d.mouse:null)||(m?m.mouse:null);_||(d&&d.render&&d.render.canvas?_=l.create(d.render.canvas):m&&m.element?_=l.create(m.element):(_=l.create(),f.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var E=p.create({label:"Mouse Constraint",pointA:_.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),T={type:"mouseConstraint",mouse:_,element:null,body:null,constraint:E,collisionFilter:{category:1,mask:4294967295,group:0}},x=f.extend(T,m);return u.on(d,"beforeUpdate",function(){var v=h.allBodies(d.world);r.update(x,v),r._triggerEvents(x)}),x},r.update=function(d,m){var _=d.mouse,E=d.constraint,T=d.body;if(_.button===0){if(E.bodyB)s.set(E.bodyB,!1),E.pointA=_.position;else for(var x=0;x<m.length;x++)if(T=m[x],g.contains(T.bounds,_.position)&&c.canCollide(T.collisionFilter,d.collisionFilter))for(var v=T.parts.length>1?1:0;v<T.parts.length;v++){var S=T.parts[v];if(a.contains(S.vertices,_.position)){E.pointA=_.position,E.bodyB=d.body=T,E.pointB={x:_.position.x-T.position.x,y:_.position.y-T.position.y},E.angleB=T.angle,s.set(T,!1),u.trigger(d,"startdrag",{mouse:_,body:T});break}}}else E.bodyB=d.body=null,E.pointB=null,T&&u.trigger(d,"enddrag",{mouse:_,body:T})},r._triggerEvents=function(d){var m=d.mouse,_=m.sourceEvents;_.mousemove&&u.trigger(d,"mousemove",{mouse:m}),_.mousedown&&u.trigger(d,"mousedown",{mouse:m}),_.mouseup&&u.trigger(d,"mouseup",{mouse:m}),l.clearSourceEvents(m)}})()},function(t,i,n){var r={};t.exports=r;var a=n(2),s=n(8),l=n(1),u=n(12),c=n(3);(function(){r.collides=function(p,h){for(var f=[],g=h.length,d=p.bounds,m=s.collides,_=l.overlaps,E=0;E<g;E++){var T=h[E],x=T.parts.length,v=x===1?0:1;if(_(T.bounds,d))for(var S=v;S<x;S++){var M=T.parts[S];if(_(M.bounds,d)){var y=m(M,p);if(y){f.push(y);break}}}}return f},r.ray=function(p,h,f,g){g=g||1e-100;for(var d=a.angle(h,f),m=a.magnitude(a.sub(h,f)),_=(f.x+h.x)*.5,E=(f.y+h.y)*.5,T=u.rectangle(_,E,m,g,{angle:d}),x=r.collides(T,p),v=0;v<x.length;v+=1){var S=x[v];S.body=S.bodyB=S.bodyA}return x},r.region=function(p,h,f){for(var g=[],d=0;d<p.length;d++){var m=p[d],_=l.overlaps(m.bounds,h);(_&&!f||!_&&f)&&g.push(m)}return g},r.point=function(p,h){for(var f=[],g=0;g<p.length;g++){var d=p[g];if(l.contains(d.bounds,h))for(var m=d.parts.length===1?0:1;m<d.parts.length;m++){var _=d.parts[m];if(l.contains(_.bounds,h)&&c.contains(_.vertices,h)){f.push(d);break}}}return f}})()},function(t,i,n){var r={};t.exports=r;var a=n(4),s=n(18),l=n(0);(function(){var u,c;if(typeof window!="undefined"&&(u=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame,c=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),!u){var p;u=function(h){p=setTimeout(function(){h(l.now())},1e3/60)},c=function(){clearTimeout(p)}}r.create=function(h){var f={fps:60,correction:1,deltaSampleSize:60,counterTimestamp:0,frameCounter:0,deltaHistory:[],timePrev:null,timeScalePrev:1,frameRequestId:null,isFixed:!1,enabled:!0},g=l.extend(f,h);return g.delta=g.delta||1e3/g.fps,g.deltaMin=g.deltaMin||1e3/g.fps,g.deltaMax=g.deltaMax||1e3/(g.fps*.5),g.fps=1e3/g.delta,g},r.run=function(h,f){return typeof h.positionIterations!="undefined"&&(f=h,h=r.create()),function g(d){h.frameRequestId=u(g),d&&h.enabled&&r.tick(h,f,d)}(),h},r.tick=function(h,f,g){var d=f.timing,m=1,_,E={timestamp:d.timestamp};a.trigger(h,"beforeTick",E),h.isFixed?_=h.delta:(_=g-h.timePrev||h.delta,h.timePrev=g,h.deltaHistory.push(_),h.deltaHistory=h.deltaHistory.slice(-h.deltaSampleSize),_=Math.min.apply(null,h.deltaHistory),_=_<h.deltaMin?h.deltaMin:_,_=_>h.deltaMax?h.deltaMax:_,m=_/h.delta,h.delta=_),h.timeScalePrev!==0&&(m*=d.timeScale/h.timeScalePrev),d.timeScale===0&&(m=0),h.timeScalePrev=d.timeScale,h.correction=m,h.frameCounter+=1,g-h.counterTimestamp>=1e3&&(h.fps=h.frameCounter*((g-h.counterTimestamp)/1e3),h.counterTimestamp=g,h.frameCounter=0),a.trigger(h,"tick",E),a.trigger(h,"beforeUpdate",E),s.update(f,_,m),a.trigger(h,"afterUpdate",E),a.trigger(h,"afterTick",E)},r.stop=function(h){c(h.frameRequestId)},r.start=function(h,f){r.run(h,f)}})()},function(t,i,n){var r={};t.exports=r;var a=n(8),s=n(0),l=s.deprecated;(function(){r.collides=function(u,c){return a.collides(u,c)},l(r,"collides","SAT.collides \u27A4 replaced by Collision.collides")})()},function(t,i,n){var r={};t.exports=r,n(1);var a=n(0);(function(){r.pathToVertices=function(s,l){typeof window!="undefined"&&!("SVGPathSeg"in window)&&a.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");var u,c,p,h,f,g,d,m,_,E,T=[],x,v,S=0,M=0,y=0;l=l||15;var w=function(b,L,F){var P=F%2===1&&F>1;if(!_||b!=_.x||L!=_.y){_&&P?(x=_.x,v=_.y):(x=0,v=0);var N={x:x+b,y:v+L};(P||!_)&&(_=N),T.push(N),M=x+b,y=v+L}},A=function(b){var L=b.pathSegTypeAsLetter.toUpperCase();if(L!=="Z"){switch(L){case"M":case"L":case"T":case"C":case"S":case"Q":M=b.x,y=b.y;break;case"H":M=b.x;break;case"V":y=b.y;break}w(M,y,b.pathSegType)}};for(r._svgPathToAbsolute(s),p=s.getTotalLength(),g=[],u=0;u<s.pathSegList.numberOfItems;u+=1)g.push(s.pathSegList.getItem(u));for(d=g.concat();S<p;){if(E=s.getPathSegAtLength(S),f=g[E],f!=m){for(;d.length&&d[0]!=f;)A(d.shift());m=f}switch(f.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":h=s.getPointAtLength(S),w(h.x,h.y,0);break}S+=l}for(u=0,c=d.length;u<c;++u)A(d[u]);return T},r._svgPathToAbsolute=function(s){for(var l,u,c,p,h,f,g=s.pathSegList,d=0,m=0,_=g.numberOfItems,E=0;E<_;++E){var T=g.getItem(E),x=T.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(x))"x"in T&&(d=T.x),"y"in T&&(m=T.y);else switch("x1"in T&&(c=d+T.x1),"x2"in T&&(h=d+T.x2),"y1"in T&&(p=m+T.y1),"y2"in T&&(f=m+T.y2),"x"in T&&(d+=T.x),"y"in T&&(m+=T.y),x){case"m":g.replaceItem(s.createSVGPathSegMovetoAbs(d,m),E);break;case"l":g.replaceItem(s.createSVGPathSegLinetoAbs(d,m),E);break;case"h":g.replaceItem(s.createSVGPathSegLinetoHorizontalAbs(d),E);break;case"v":g.replaceItem(s.createSVGPathSegLinetoVerticalAbs(m),E);break;case"c":g.replaceItem(s.createSVGPathSegCurvetoCubicAbs(d,m,c,p,h,f),E);break;case"s":g.replaceItem(s.createSVGPathSegCurvetoCubicSmoothAbs(d,m,h,f),E);break;case"q":g.replaceItem(s.createSVGPathSegCurvetoQuadraticAbs(d,m,c,p),E);break;case"t":g.replaceItem(s.createSVGPathSegCurvetoQuadraticSmoothAbs(d,m),E);break;case"a":g.replaceItem(s.createSVGPathSegArcAbs(d,m,T.r1,T.r2,T.angle,T.largeArcFlag,T.sweepFlag),E);break;case"z":case"Z":d=l,m=u;break}(x=="M"||x=="m")&&(l=d,u=m)}}})()},function(t,i,n){var r={};t.exports=r;var a=n(5);n(0),function(){r.create=a.create,r.add=a.add,r.remove=a.remove,r.clear=a.clear,r.addComposite=a.addComposite,r.addBody=a.addBody,r.addConstraint=a.addConstraint}()}])})})(He);var ju=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},$u=window.device,Q={},Pa=[];window.device=Q;var Tr=window.document.documentElement,Ju=window.navigator.userAgent.toLowerCase(),Io=["googletv","viera","smarttv","internet.tv","netcast","nettv","appletv","boxee","kylo","roku","dlnadoc","pov_tv","hbbtv","ce-html"];Q.macos=function(){return je("mac")};Q.ios=function(){return Q.iphone()||Q.ipod()||Q.ipad()};Q.iphone=function(){return!Q.windows()&&je("iphone")};Q.ipod=function(){return je("ipod")};Q.ipad=function(){var o=navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1;return je("ipad")||o};Q.android=function(){return!Q.windows()&&je("android")};Q.androidPhone=function(){return Q.android()&&je("mobile")};Q.androidTablet=function(){return Q.android()&&!je("mobile")};Q.blackberry=function(){return je("blackberry")||je("bb10")};Q.blackberryPhone=function(){return Q.blackberry()&&!je("tablet")};Q.blackberryTablet=function(){return Q.blackberry()&&je("tablet")};Q.windows=function(){return je("windows")};Q.windowsPhone=function(){return Q.windows()&&je("phone")};Q.windowsTablet=function(){return Q.windows()&&je("touch")&&!Q.windowsPhone()};Q.fxos=function(){return(je("(mobile")||je("(tablet"))&&je(" rv:")};Q.fxosPhone=function(){return Q.fxos()&&je("mobile")};Q.fxosTablet=function(){return Q.fxos()&&je("tablet")};Q.meego=function(){return je("meego")};Q.cordova=function(){return window.cordova&&location.protocol==="file:"};Q.nodeWebkit=function(){return ju(window.process)==="object"};Q.mobile=function(){return Q.androidPhone()||Q.iphone()||Q.ipod()||Q.windowsPhone()||Q.blackberryPhone()||Q.fxosPhone()||Q.meego()};Q.tablet=function(){return Q.ipad()||Q.androidTablet()||Q.blackberryTablet()||Q.windowsTablet()||Q.fxosTablet()};Q.desktop=function(){return!Q.tablet()&&!Q.mobile()};Q.television=function(){for(var o=0;o<Io.length;){if(je(Io[o]))return!0;o++}return!1};Q.portrait=function(){return screen.orientation&&Object.prototype.hasOwnProperty.call(window,"onorientationchange")?eo(screen.orientation.type,"portrait"):Q.ios()&&Object.prototype.hasOwnProperty.call(window,"orientation")?Math.abs(window.orientation)!==90:window.innerHeight/window.innerWidth>1};Q.landscape=function(){return screen.orientation&&Object.prototype.hasOwnProperty.call(window,"onorientationchange")?eo(screen.orientation.type,"landscape"):Q.ios()&&Object.prototype.hasOwnProperty.call(window,"orientation")?Math.abs(window.orientation)===90:window.innerHeight/window.innerWidth<1};Q.noConflict=function(){return window.device=$u,this};function eo(o,e){return o.indexOf(e)!==-1}function je(o){return eo(Ju,o)}function dc(o){return Tr.className.match(new RegExp(o,"i"))}function tt(o){var e=null;dc(o)||(e=Tr.className.replace(/^\s+|\s+$/g,""),Tr.className=e+" "+o)}function Oo(o){dc(o)&&(Tr.className=Tr.className.replace(" "+o,""))}Q.ios()?Q.ipad()?tt("ios ipad tablet"):Q.iphone()?tt("ios iphone mobile"):Q.ipod()&&tt("ios ipod mobile"):Q.macos()?tt("macos desktop"):Q.android()?Q.androidTablet()?tt("android tablet"):tt("android mobile"):Q.blackberry()?Q.blackberryTablet()?tt("blackberry tablet"):tt("blackberry mobile"):Q.windows()?Q.windowsTablet()?tt("windows tablet"):Q.windowsPhone()?tt("windows mobile"):tt("windows desktop"):Q.fxos()?Q.fxosTablet()?tt("fxos tablet"):tt("fxos mobile"):Q.meego()?tt("meego mobile"):Q.nodeWebkit()?tt("node-webkit"):Q.television()?tt("television"):Q.desktop()&&tt("desktop");Q.cordova()&&tt("cordova");function hs(){Q.landscape()?(Oo("portrait"),tt("landscape"),No("landscape")):(Oo("landscape"),tt("portrait"),No("portrait")),pc()}function No(o){for(var e=0;e<Pa.length;e++)Pa[e](o)}Q.onChangeOrientation=function(o){typeof o=="function"&&Pa.push(o)};var ds="resize";Object.prototype.hasOwnProperty.call(window,"onorientationchange")&&(ds="orientationchange");window.addEventListener?window.addEventListener(ds,hs,!1):window.attachEvent?window.attachEvent(ds,hs):window[ds]=hs;hs();function to(o){for(var e=0;e<o.length;e++)if(Q[o[e]]())return o[e];return"unknown"}Q.type=to(["mobile","tablet","desktop"]);Q.os=to(["ios","iphone","ipad","ipod","android","blackberry","macos","windows","fxos","meego","television"]);function pc(){Q.orientation=to(["portrait","landscape"])}pc();const Ao=class{constructor(){}static get instance(){return this._instance||(this._instance=new Ao),this._instance}random(e,t){return Math.random()*(t-e)+e}random2(e,t){let i=Math.random()*(t-e)+e;return this.hit(2)&&(i*=-1),i}randomInt(e,t){return Math.floor(Math.random()*(t-e+1))+e}hit(e=0){return e<2&&(e=2),this.randomInt(0,e-1)==0}randomArr(e){return e[this.randomInt(0,e.length-1)]}range(e){return this.random(-e,e)}clamp(e,t,i){return Math.min(i,Math.max(e,t))}map(e,t,i,n,r){if(e<=n)return t;if(e>=r)return i;const a=(i-t)/(r-n);return(e-n)*a+t}mix(e,t,i){return e*(1-i)+t*i}radian(e){return e*Math.PI/180}degree(e){return e*180/Math.PI}shuffle(e){let t=e.length;for(;--t;){let i=Math.floor(Math.random()*(t+1));if(t==i)continue;let n=e[t];e[t]=e[i],e[i]=n}}replaceAll(e,t,i){return e.split(t).join(i)}sort(e,t,i=!0){i?e.sort((n,r)=>r[t]-n[t]):e.sort((n,r)=>n[t]-r[t])}distance(e,t,i,n){const r=e-i,a=t-n;return Math.sqrt(r*r+a*a)}numStr(e,t){let i=String(e);if(i.length>=t)return i;const n=t-i.length;let r=0;for(;r<n;)i="0"+i,r++;return i}isIE(){const e=window.navigator.userAgent.toLowerCase();return e.indexOf("msie")!=-1||e.indexOf("trident/7")!=-1||e.indexOf("edge")!=-1}isIE2(){const e=window.navigator.userAgent.toLowerCase();return e.indexOf("msie")!=-1||e.indexOf("trident/7")!=-1}isWin(){return window.navigator.platform.indexOf("Win")!=-1}isChrome(){return window.navigator.userAgent.toLowerCase().indexOf("chrome")!=-1}isFF(){return window.navigator.userAgent.toLowerCase().indexOf("firefox")!=-1}isSafari(){return window.navigator.userAgent.toLowerCase().indexOf("safari")!=-1&&!this.isChrome()}useWebGL(){try{const e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");return!!(window.WebGLRenderingContext&&t&&t.getShaderPrecisionFormat)}catch{return!1}}getQuery(e){e=e.replace(/[€[]/,"\u20AC\u20AC\u20AC[").replace(/[€]]/,"\u20AC\u20AC\u20AC]");const i=new RegExp("[\u20AC\u20AC?&]"+e+"=([^&//]*)").exec(window.location.href);return i==null?"":i[1]}isTouchDevice(){return"ontouchstart"in window||navigator!=null&&navigator.maxTouchPoints>0}isPc(){return Q.mobile()==!1}isSp(){return Q.mobile()}isAod(){return Q.android()}isIPhone(){return Q.iphone()}isIPad(){return Q.tablet()}};let Ye=Ao;K(Ye,"_instance");const ct=[];for(let o=0;o<256;o++)ct[o]=(o<16?"0":"")+o.toString(16);const Us=Math.PI/180,Uo=180/Math.PI;function Or(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ct[o&255]+ct[o>>8&255]+ct[o>>16&255]+ct[o>>24&255]+"-"+ct[e&255]+ct[e>>8&255]+"-"+ct[e>>16&15|64]+ct[e>>24&255]+"-"+ct[t&63|128]+ct[t>>8&255]+"-"+ct[t>>16&255]+ct[t>>24&255]+ct[i&255]+ct[i>>8&255]+ct[i>>16&255]+ct[i>>24&255]).toLowerCase()}function Ot(o,e,t){return Math.max(e,Math.min(t,o))}function Qu(o,e){return(o%e+e)%e}function Bs(o,e,t){return(1-t)*o+t*e}function Bo(o){return(o&o-1)===0&&o!==0}function Da(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}const ef="141",tf=0,zo=1,nf=2,mc=1,rf=2,vr=3,br=0,ii=1,yn=2,sf=1,Xi=0,jn=1,Go=2,ko=3,Ho=4,af=5,Wn=100,of=101,lf=102,Vo=103,Wo=104,cf=200,uf=201,ff=202,hf=203,gc=204,_c=205,df=206,pf=207,mf=208,gf=209,_f=210,vf=0,xf=1,yf=2,La=3,Sf=4,Mf=5,Ef=6,wf=7,vc=0,Tf=1,bf=2,Ci=0,Af=1,Cf=2,Rf=3,Pf=4,Df=5,xc=300,tr=301,ir=302,Fa=303,Ia=304,As=306,Oa=1e3,ei=1001,Na=1002,wt=1003,Xo=1004,qo=1005,Ht=1006,Lf=1007,Cs=1008,Sn=1009,Ff=1010,If=1011,yc=1012,Of=1013,cn=1014,un=1015,Ar=1016,Nf=1017,Uf=1018,$n=1020,Bf=1021,zf=1022,Wt=1023,Gf=1024,kf=1025,pn=1026,nr=1027,Hf=1028,Vf=1029,Wf=1030,Xf=1031,qf=1033,zs=33776,Gs=33777,ks=33778,Hs=33779,Yo=35840,Zo=35841,Ko=35842,jo=35843,Yf=36196,$o=37492,Jo=37496,Qo=37808,el=37809,tl=37810,il=37811,nl=37812,rl=37813,sl=37814,al=37815,ol=37816,ll=37817,cl=37818,ul=37819,fl=37820,hl=37821,dl=36492,Mn=3e3,Ve=3001,Zf=3200,Kf=3201,jf=0,$f=1,Ei="srgb",fn="srgb-linear",Vs=7680,Jf=519,pl=35044,ml="300 es",Ua=1035;function mn(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ps(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Ws={[Ei]:{[fn]:mn},[fn]:{[Ei]:ps}},jt={legacyMode:!0,get workingColorSpace(){return fn},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.legacyMode||e===t||!e||!t)return o;if(Ws[e]&&Ws[e][t]!==void 0){const i=Ws[e][t];return o.r=i(o.r),o.g=i(o.g),o.b=i(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}},Sc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nt={r:0,g:0,b:0},$t={h:0,s:0,l:0},Wr={h:0,s:0,l:0};function Xs(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}function Xr(o,e){return e.r=o.r,e.g=o.g,e.b=o.b,e}class Fe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,jt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=fn){return this.r=e,this.g=t,this.b=i,jt.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=fn){if(e=Qu(e,1),t=Ot(t,0,1),i=Ot(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Xs(a,r,e+1/3),this.g=Xs(a,r,e),this.b=Xs(a,r,e-1/3)}return jt.toWorkingColorSpace(this,n),this}setStyle(e,t=Ei){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const a=n[1],s=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,jt.toWorkingColorSpace(this,t),i(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,jt.toWorkingColorSpace(this,t),i(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const l=parseFloat(r[1])/360,u=parseInt(r[2],10)/100,c=parseInt(r[3],10)/100;return i(r[4]),this.setHSL(l,u,c,t)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,jt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,jt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Ei){const i=Sc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mn(e.r),this.g=mn(e.g),this.b=mn(e.b),this}copyLinearToSRGB(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ei){return jt.fromWorkingColorSpace(Xr(this,nt),e),Ot(nt.r*255,0,255)<<16^Ot(nt.g*255,0,255)<<8^Ot(nt.b*255,0,255)<<0}getHexString(e=Ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=fn){jt.fromWorkingColorSpace(Xr(this,nt),t);const i=nt.r,n=nt.g,r=nt.b,a=Math.max(i,n,r),s=Math.min(i,n,r);let l,u;const c=(s+a)/2;if(s===a)l=0,u=0;else{const p=a-s;switch(u=c<=.5?p/(a+s):p/(2-a-s),a){case i:l=(n-r)/p+(n<r?6:0);break;case n:l=(r-i)/p+2;break;case r:l=(i-n)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=fn){return jt.fromWorkingColorSpace(Xr(this,nt),t),e.r=nt.r,e.g=nt.g,e.b=nt.b,e}getStyle(e=Ei){return jt.fromWorkingColorSpace(Xr(this,nt),e),e!==Ei?`color(${e} ${nt.r} ${nt.g} ${nt.b})`:`rgb(${nt.r*255|0},${nt.g*255|0},${nt.b*255|0})`}offsetHSL(e,t,i){return this.getHSL($t),$t.h+=e,$t.s+=t,$t.l+=i,this.setHSL($t.h,$t.s,$t.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($t),e.getHSL(Wr);const i=Bs($t.h,Wr.h,t),n=Bs($t.s,Wr.s,t),r=Bs($t.l,Wr.l,t);return this.setHSL(i,n,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Fe.NAMES=Sc;const Co=class{constructor(){K(this,"FLG_PARAM",location.href.includes("p=yes"));K(this,"FLG_SHOW_MATTERJS",!1);K(this,"FLG_STATS",location.href.includes("p=yes"));K(this,"PATH_IMG","./assets/img/");K(this,"USE_TOUCH",Ye.instance.isTouchDevice());K(this,"BREAKPOINT",768);K(this,"LG_PSD_WIDTH",1600);K(this,"XS_PSD_WIDTH",750);K(this,"IS_SIMPLE",Ye.instance.isPc()&&Ye.instance.isSafari());K(this,"IS_PC",Ye.instance.isPc());K(this,"IS_SP",Ye.instance.isSp());K(this,"IS_AND",Ye.instance.isAod());K(this,"IS_TAB",Ye.instance.isIPad());K(this,"USE_ROLLOVER",Ye.instance.isPc()&&!Ye.instance.isIPad());K(this,"BLUR_SCALE",(this.IS_PC,.1));K(this,"COLOR",[new Fe(16383230),new Fe(15007812),new Fe(15629056),new Fe(16769280),new Fe(41313),new Fe(29622),new Fe(1855393),new Fe(6765459)])}static get instance(){return this._instance||(this._instance=new Co),this._instance}};let st=Co;K(st,"_instance");class qn{constructor(){}}K(qn,"LG",0),K(qn,"XS",1);const Ro=class{constructor(){K(this,"_useFullScreen",st.instance.IS_SP)}static get instance(){return this._instance||(this._instance=new Ro),this._instance}ratio(){return window.devicePixelRatio||1}px(e){return e+"px"}useScreen(){return screen!=null}sw(){return window.innerWidth}sh(){return this._useFullScreen?screen.height:window.innerHeight}screenOffsetY(){return(window.innerHeight-this.sh())*.5}screen(){return window.innerWidth<=st.instance.BREAKPOINT?qn.XS:qn.LG}isXS(){return this.screen()==qn.XS}isLG(){return this.screen()==qn.LG}val(e,t){return this.isXS()?e:t}r(e){const t=this.val(st.instance.XS_PSD_WIDTH,st.instance.LG_PSD_WIDTH);return e/t*this.sw()}sin1(e){return Math.sin(e)+Math.sin(2*e)}sin2(e){return(Math.sin(e)+Math.sin(2.2*e+5.52)+Math.sin(2.9*e+.93)+Math.sin(4.6*e+8.94))/4}};let dt=Ro;K(dt,"_instance");const Po=class{constructor(){K(this,"x",window.innerWidth*.5);K(this,"y",window.innerHeight*.5);K(this,"old",new ki);K(this,"normal",new ki);K(this,"easeNormal",new ki);K(this,"start",new ki);K(this,"moveDist",new ki);K(this,"dist",0);K(this,"isDown",!1);K(this,"usePreventDefault",!0);K(this,"onSwipe");K(this,"_updateHandler");if(Ye.instance.isTouchDevice()){const e=document.querySelector(".matter")||window;e.addEventListener("touchstart",(t={})=>{this._eTouchStart(t)},{passive:!1}),e.addEventListener("touchend",()=>{this._eTouchEnd()},{passive:!1}),e.addEventListener("touchmove",(t={})=>{this._eTouchMove(t)},{passive:!1})}else window.addEventListener("mousedown",(e={})=>{this._eDown(e)}),window.addEventListener("mouseup",()=>{this._eUp()}),window.addEventListener("mousemove",(e={})=>{this._eMove(e)});this._updateHandler=this._update.bind(this),Ai.instance.add(this._updateHandler)}static get instance(){return this._instance||(this._instance=new Po),this._instance}_eTouchStart(e={}){this.isDown=!0,this._eTouchMove(e);const t=this._getTouchPoint(e);this.start.x=t.x,this.start.y=t.y}_eTouchEnd(){this.isDown=!1;const e=this.old.x-this.x,t=this.old.y-this.y;(Math.abs(t)>0||Math.abs(e)>0)&&this.onSwipe!=null&&this.onSwipe({move:t}),this.dist=0}_eTouchMove(e={}){const t=this._getTouchPoint(e);this.old.x=this.x,this.old.y=this.y,this.x=t.x,this.y=t.y;const i=this.old.x-this.x,n=this.old.y-this.y;this.dist=Math.sqrt(i*i+n*n),this.usePreventDefault&&e.preventDefault()}_eDown(e={}){this.isDown=!0,this._eMove(e),this.start.x=this.x,this.start.y=this.y}_eUp(){this.isDown=!1}_eMove(e={}){this.old.x=this.x,this.old.y=this.y,this.x=e.clientX,this.y=e.clientY;const t=this.old.x-this.x,i=this.old.y-this.y;this.dist=Math.sqrt(t*t+i*i)}_getTouchPoint(e){const t=new ki,i=e.touches;return i!=null&&i.length>0&&(t.x=i[0].pageX,t.y=i[0].pageY),t}_update(){this.isDown?(this.moveDist.x=this.start.x-this.x,this.moveDist.y=this.start.y-this.y):(this.moveDist.x+=(0-this.moveDist.x)*.25,this.moveDist.y+=(0-this.moveDist.y)*.25),this.normal.x=Ye.instance.map(this.x,-1,1,0,window.innerWidth),this.normal.y=Ye.instance.map(this.y,-1,1,0,window.innerHeight);const e=.1;this.easeNormal.x+=(this.normal.x-this.easeNormal.x)*e,this.easeNormal.y+=(this.normal.y-this.easeNormal.y)*e}};let ui=Po;K(ui,"_instance");class Nr{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerp(e,t,i,n){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,n)}static slerpFlat(e,t,i,n,r,a,s){let l=i[n+0],u=i[n+1],c=i[n+2],p=i[n+3];const h=r[a+0],f=r[a+1],g=r[a+2],d=r[a+3];if(s===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=p;return}if(s===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=d;return}if(p!==d||l!==h||u!==f||c!==g){let m=1-s;const _=l*h+u*f+c*g+p*d,E=_>=0?1:-1,T=1-_*_;if(T>Number.EPSILON){const v=Math.sqrt(T),S=Math.atan2(v,_*E);m=Math.sin(m*S)/v,s=Math.sin(s*S)/v}const x=s*E;if(l=l*m+h*x,u=u*m+f*x,c=c*m+g*x,p=p*m+d*x,m===1-s){const v=1/Math.sqrt(l*l+u*u+c*c+p*p);l*=v,u*=v,c*=v,p*=v}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,n,r,a){const s=i[n],l=i[n+1],u=i[n+2],c=i[n+3],p=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return e[t]=s*g+c*p+l*f-u*h,e[t+1]=l*g+c*h+u*p-s*f,e[t+2]=u*g+c*f+s*h-l*p,e[t+3]=c*g-s*p-l*h-u*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,n=e._y,r=e._z,a=e._order,s=Math.cos,l=Math.sin,u=s(i/2),c=s(n/2),p=s(r/2),h=l(i/2),f=l(n/2),g=l(r/2);switch(a){case"XYZ":this._x=h*c*p+u*f*g,this._y=u*f*p-h*c*g,this._z=u*c*g+h*f*p,this._w=u*c*p-h*f*g;break;case"YXZ":this._x=h*c*p+u*f*g,this._y=u*f*p-h*c*g,this._z=u*c*g-h*f*p,this._w=u*c*p+h*f*g;break;case"ZXY":this._x=h*c*p-u*f*g,this._y=u*f*p+h*c*g,this._z=u*c*g+h*f*p,this._w=u*c*p-h*f*g;break;case"ZYX":this._x=h*c*p-u*f*g,this._y=u*f*p+h*c*g,this._z=u*c*g-h*f*p,this._w=u*c*p+h*f*g;break;case"YZX":this._x=h*c*p+u*f*g,this._y=u*f*p+h*c*g,this._z=u*c*g-h*f*p,this._w=u*c*p-h*f*g;break;case"XZY":this._x=h*c*p-u*f*g,this._y=u*f*p-h*c*g,this._z=u*c*g+h*f*p,this._w=u*c*p+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],r=t[8],a=t[1],s=t[5],l=t[9],u=t[2],c=t[6],p=t[10],h=i+s+p;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(c-l)*f,this._y=(r-u)*f,this._z=(a-n)*f}else if(i>s&&i>p){const f=2*Math.sqrt(1+i-s-p);this._w=(c-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(r+u)/f}else if(s>p){const f=2*Math.sqrt(1+s-i-p);this._w=(r-u)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+c)/f}else{const f=2*Math.sqrt(1+p-i-s);this._w=(a-n)/f,this._x=(r+u)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,r=e._z,a=e._w,s=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+a*s+n*u-r*l,this._y=n*c+a*l+r*s-i*u,this._z=r*c+a*u+i*l-n*s,this._w=a*c-i*s-n*l-r*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,r=this._z,a=this._w;let s=a*e._w+i*e._x+n*e._y+r*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=i,this._y=n,this._z=r,this;const l=1-s*s;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*n+t*this._y,this._z=f*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,s),p=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=a*p+this._w*h,this._x=i*p+this._x*h,this._y=n*p+this._y*h,this._z=r*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(r),i*Math.cos(r),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){this.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(gl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,s=e.z,l=e.w,u=l*t+a*n-s*i,c=l*i+s*t-r*n,p=l*n+r*i-a*t,h=-r*t-a*i-s*n;return this.x=u*l+h*-r+c*-s-p*-a,this.y=c*l+h*-a+p*-r-u*-s,this.z=p*l+h*-s+u*-a-c*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,r=e.z,a=t.x,s=t.y,l=t.z;return this.x=n*l-r*s,this.y=r*a-i*l,this.z=i*s-n*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qs.copy(this).projectOnVector(e),this.sub(qs)}reflect(e){return this.sub(qs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qs=new H,gl=new Nr;class gt{constructor(){this.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,n,r,a,s,l,u,c,p,h,f,g,d,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=n,_[1]=r,_[5]=a,_[9]=s,_[13]=l,_[2]=u,_[6]=c,_[10]=p,_[14]=h,_[3]=f,_[7]=g,_[11]=d,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/Rn.setFromMatrixColumn(e,0).length(),r=1/Rn.setFromMatrixColumn(e,1).length(),a=1/Rn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,i=e.x,n=e.y,r=e.z,a=Math.cos(i),s=Math.sin(i),l=Math.cos(n),u=Math.sin(n),c=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const h=a*c,f=a*p,g=s*c,d=s*p;t[0]=l*c,t[4]=-l*p,t[8]=u,t[1]=f+g*u,t[5]=h-d*u,t[9]=-s*l,t[2]=d-h*u,t[6]=g+f*u,t[10]=a*l}else if(e.order==="YXZ"){const h=l*c,f=l*p,g=u*c,d=u*p;t[0]=h+d*s,t[4]=g*s-f,t[8]=a*u,t[1]=a*p,t[5]=a*c,t[9]=-s,t[2]=f*s-g,t[6]=d+h*s,t[10]=a*l}else if(e.order==="ZXY"){const h=l*c,f=l*p,g=u*c,d=u*p;t[0]=h-d*s,t[4]=-a*p,t[8]=g+f*s,t[1]=f+g*s,t[5]=a*c,t[9]=d-h*s,t[2]=-a*u,t[6]=s,t[10]=a*l}else if(e.order==="ZYX"){const h=a*c,f=a*p,g=s*c,d=s*p;t[0]=l*c,t[4]=g*u-f,t[8]=h*u+d,t[1]=l*p,t[5]=d*u+h,t[9]=f*u-g,t[2]=-u,t[6]=s*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*u,g=s*l,d=s*u;t[0]=l*c,t[4]=d-h*p,t[8]=g*p+f,t[1]=p,t[5]=a*c,t[9]=-s*c,t[2]=-u*c,t[6]=f*p+g,t[10]=h-d*p}else if(e.order==="XZY"){const h=a*l,f=a*u,g=s*l,d=s*u;t[0]=l*c,t[4]=-p,t[8]=u*c,t[1]=h*p+d,t[5]=a*c,t[9]=f*p-g,t[2]=g*p-f,t[6]=s*c,t[10]=d*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qf,e,eh)}lookAt(e,t,i){const n=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),Ii.crossVectors(i,Lt),Ii.lengthSq()===0&&(Math.abs(i.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),Ii.crossVectors(i,Lt)),Ii.normalize(),qr.crossVectors(Lt,Ii),n[0]=Ii.x,n[4]=qr.x,n[8]=Lt.x,n[1]=Ii.y,n[5]=qr.y,n[9]=Lt.y,n[2]=Ii.z,n[6]=qr.z,n[10]=Lt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,a=i[0],s=i[4],l=i[8],u=i[12],c=i[1],p=i[5],h=i[9],f=i[13],g=i[2],d=i[6],m=i[10],_=i[14],E=i[3],T=i[7],x=i[11],v=i[15],S=n[0],M=n[4],y=n[8],w=n[12],A=n[1],b=n[5],L=n[9],F=n[13],P=n[2],N=n[6],I=n[10],z=n[14],k=n[3],B=n[7],W=n[11],J=n[15];return r[0]=a*S+s*A+l*P+u*k,r[4]=a*M+s*b+l*N+u*B,r[8]=a*y+s*L+l*I+u*W,r[12]=a*w+s*F+l*z+u*J,r[1]=c*S+p*A+h*P+f*k,r[5]=c*M+p*b+h*N+f*B,r[9]=c*y+p*L+h*I+f*W,r[13]=c*w+p*F+h*z+f*J,r[2]=g*S+d*A+m*P+_*k,r[6]=g*M+d*b+m*N+_*B,r[10]=g*y+d*L+m*I+_*W,r[14]=g*w+d*F+m*z+_*J,r[3]=E*S+T*A+x*P+v*k,r[7]=E*M+T*b+x*N+v*B,r[11]=E*y+T*L+x*I+v*W,r[15]=E*w+T*F+x*z+v*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],a=e[1],s=e[5],l=e[9],u=e[13],c=e[2],p=e[6],h=e[10],f=e[14],g=e[3],d=e[7],m=e[11],_=e[15];return g*(+r*l*p-n*u*p-r*s*h+i*u*h+n*s*f-i*l*f)+d*(+t*l*f-t*u*h+r*a*h-n*a*f+n*u*c-r*l*c)+m*(+t*u*p-t*s*f-r*a*p+i*a*f+r*s*c-i*u*c)+_*(-n*s*c-t*l*p+t*s*h+n*a*p-i*a*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],s=e[5],l=e[6],u=e[7],c=e[8],p=e[9],h=e[10],f=e[11],g=e[12],d=e[13],m=e[14],_=e[15],E=p*m*u-d*h*u+d*l*f-s*m*f-p*l*_+s*h*_,T=g*h*u-c*m*u-g*l*f+a*m*f+c*l*_-a*h*_,x=c*d*u-g*p*u+g*s*f-a*d*f-c*s*_+a*p*_,v=g*p*l-c*d*l-g*s*h+a*d*h+c*s*m-a*p*m,S=t*E+i*T+n*x+r*v;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/S;return e[0]=E*M,e[1]=(d*h*r-p*m*r-d*n*f+i*m*f+p*n*_-i*h*_)*M,e[2]=(s*m*r-d*l*r+d*n*u-i*m*u-s*n*_+i*l*_)*M,e[3]=(p*l*r-s*h*r-p*n*u+i*h*u+s*n*f-i*l*f)*M,e[4]=T*M,e[5]=(c*m*r-g*h*r+g*n*f-t*m*f-c*n*_+t*h*_)*M,e[6]=(g*l*r-a*m*r-g*n*u+t*m*u+a*n*_-t*l*_)*M,e[7]=(a*h*r-c*l*r+c*n*u-t*h*u-a*n*f+t*l*f)*M,e[8]=x*M,e[9]=(g*p*r-c*d*r-g*i*f+t*d*f+c*i*_-t*p*_)*M,e[10]=(a*d*r-g*s*r+g*i*u-t*d*u-a*i*_+t*s*_)*M,e[11]=(c*s*r-a*p*r-c*i*u+t*p*u+a*i*f-t*s*f)*M,e[12]=v*M,e[13]=(c*d*n-g*p*n+g*i*h-t*d*h-c*i*m+t*p*m)*M,e[14]=(g*s*n-a*d*n-g*i*l+t*d*l+a*i*m-t*s*m)*M,e[15]=(a*p*n-c*s*n+c*i*l-t*p*l-a*i*h+t*s*h)*M,this}scale(e){const t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),r=1-i,a=e.x,s=e.y,l=e.z,u=r*a,c=r*s;return this.set(u*a+i,u*s-n*l,u*l+n*s,0,u*s+n*l,c*s+i,c*l-n*a,0,u*l-n*s,c*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,a){return this.set(1,i,r,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,r=t._x,a=t._y,s=t._z,l=t._w,u=r+r,c=a+a,p=s+s,h=r*u,f=r*c,g=r*p,d=a*c,m=a*p,_=s*p,E=l*u,T=l*c,x=l*p,v=i.x,S=i.y,M=i.z;return n[0]=(1-(d+_))*v,n[1]=(f+x)*v,n[2]=(g-T)*v,n[3]=0,n[4]=(f-x)*S,n[5]=(1-(h+_))*S,n[6]=(m+E)*S,n[7]=0,n[8]=(g+T)*M,n[9]=(m-E)*M,n[10]=(1-(h+d))*M,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let r=Rn.set(n[0],n[1],n[2]).length();const a=Rn.set(n[4],n[5],n[6]).length(),s=Rn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),e.x=n[12],e.y=n[13],e.z=n[14],Jt.copy(this);const u=1/r,c=1/a,p=1/s;return Jt.elements[0]*=u,Jt.elements[1]*=u,Jt.elements[2]*=u,Jt.elements[4]*=c,Jt.elements[5]*=c,Jt.elements[6]*=c,Jt.elements[8]*=p,Jt.elements[9]*=p,Jt.elements[10]*=p,t.setFromRotationMatrix(Jt),i.x=r,i.y=a,i.z=s,this}makePerspective(e,t,i,n,r,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const s=this.elements,l=2*r/(t-e),u=2*r/(i-n),c=(t+e)/(t-e),p=(i+n)/(i-n),h=-(a+r)/(a-r),f=-2*a*r/(a-r);return s[0]=l,s[4]=0,s[8]=c,s[12]=0,s[1]=0,s[5]=u,s[9]=p,s[13]=0,s[2]=0,s[6]=0,s[10]=h,s[14]=f,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,i,n,r,a){const s=this.elements,l=1/(t-e),u=1/(i-n),c=1/(a-r),p=(t+e)*l,h=(i+n)*u,f=(a+r)*c;return s[0]=2*l,s[4]=0,s[8]=0,s[12]=-p,s[1]=0,s[5]=2*u,s[9]=0,s[13]=-h,s[2]=0,s[6]=0,s[10]=-2*c,s[14]=-f,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Rn=new H,Jt=new gt,Qf=new H(0,0,0),eh=new H(1,1,1),Ii=new H,qr=new H,Lt=new H;class ur{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,e);e.target=null}}}const _l=new gt,vl=new Nr;class Ur{constructor(e=0,t=0,i=0,n=Ur.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,r=n[0],a=n[4],s=n[8],l=n[1],u=n[5],c=n[9],p=n[2],h=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(Ot(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(s,f),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ot(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(s,f));break;case"XZY":this._z=Math.asin(-Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return _l.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_l,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vl.setFromEuler(this),this.setFromQuaternion(vl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ur.DefaultOrder="XYZ";Ur.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Mc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}class hi{constructor(){this.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,n,r,a,s,l,u){const c=this.elements;return c[0]=e,c[1]=n,c[2]=s,c[3]=t,c[4]=r,c[5]=l,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,a=i[0],s=i[3],l=i[6],u=i[1],c=i[4],p=i[7],h=i[2],f=i[5],g=i[8],d=n[0],m=n[3],_=n[6],E=n[1],T=n[4],x=n[7],v=n[2],S=n[5],M=n[8];return r[0]=a*d+s*E+l*v,r[3]=a*m+s*T+l*S,r[6]=a*_+s*x+l*M,r[1]=u*d+c*E+p*v,r[4]=u*m+c*T+p*S,r[7]=u*_+c*x+p*M,r[2]=h*d+f*E+g*v,r[5]=h*m+f*T+g*S,r[8]=h*_+f*x+g*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],s=e[5],l=e[6],u=e[7],c=e[8];return t*a*c-t*s*u-i*r*c+i*s*l+n*r*u-n*a*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],s=e[5],l=e[6],u=e[7],c=e[8],p=c*a-s*u,h=s*l-c*r,f=u*r-a*l,g=t*p+i*h+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=p*d,e[1]=(n*u-c*i)*d,e[2]=(s*i-n*a)*d,e[3]=h*d,e[4]=(c*t-n*l)*d,e[5]=(n*r-s*t)*d,e[6]=f*d,e[7]=(i*l-u*t)*d,e[8]=(a*t-i*r)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,a,s){const l=Math.cos(r),u=Math.sin(r);return this.set(i*l,i*u,-i*(l*a+u*s)+a+e,-n*u,n*l,-n*(-u*a+l*s)+s+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),n=this.elements,r=n[0],a=n[3],s=n[6],l=n[1],u=n[4],c=n[7];return n[0]=t*r+i*l,n[3]=t*a+i*u,n[6]=t*s+i*c,n[1]=-i*r+t*l,n[4]=-i*a+t*u,n[7]=-i*s+t*c,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}let th=0;const xl=new H,Pn=new Nr,vi=new gt,Yr=new H,pr=new H,ih=new H,nh=new Nr,yl=new H(1,0,0),Sl=new H(0,1,0),Ml=new H(0,0,1),rh={type:"added"},El={type:"removed"};class Rt extends ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=Or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DefaultUp.clone();const e=new H,t=new Ur,i=new Nr,n=new H(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new gt},normalMatrix:{value:new hi}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Rt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pn.setFromAxisAngle(e,t),this.quaternion.multiply(Pn),this}rotateOnWorldAxis(e,t){return Pn.setFromAxisAngle(e,t),this.quaternion.premultiply(Pn),this}rotateX(e){return this.rotateOnAxis(yl,e)}rotateY(e){return this.rotateOnAxis(Sl,e)}rotateZ(e){return this.rotateOnAxis(Ml,e)}translateOnAxis(e,t){return xl.copy(e).applyQuaternion(this.quaternion),this.position.add(xl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yl,e)}translateY(e){return this.translateOnAxis(Sl,e)}translateZ(e){return this.translateOnAxis(Ml,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Yr.copy(e):Yr.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(pr,Yr,this.up):vi.lookAt(Yr,pr,this.up),this.quaternion.setFromRotationMatrix(vi),n&&(vi.extractRotation(n.matrixWorld),Pn.setFromRotationMatrix(vi),this.quaternion.premultiply(Pn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(rh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(El)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(El)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,e,ih),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,nh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function r(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const p=l[u];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,u=this.material.length;l<u;l++)s.push(r(e.materials,this.material[l]));n.material=s}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let s=0;s<this.children.length;s++)n.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];n.animations.push(r(e.animations,l))}}if(t){const s=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),p=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(s){const l=[];for(const u in s){const c=s[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}Rt.DefaultUp=new H(0,1,0);Rt.DefaultMatrixAutoUpdate=!0;class Ec extends Rt{constructor(){super();K(this,"_updateHandler");K(this,"_layoutHandler");K(this,"_c",0);this._updateHandler=this._update.bind(this),Ai.instance.add(this._updateHandler),this._layoutHandler=this._resize.bind(this),dn.instance.add(this._layoutHandler)}init(){}dispose(){Ai.instance.remove(this._updateHandler),this._updateHandler=null,dn.instance.remove(this._layoutHandler),this._layoutHandler=null}_update(){this._c++}_resize(){}_getUni(t){return t.material.uniforms}_setUni(t,i,n){const r=this._getUni(t);r[i].value=n}_call(t){t!=null&&t()}}class sh extends Ec{constructor(){super();K(this,"engine");K(this,"render");K(this,"_runner");K(this,"lineBodies",[]);K(this,"mouse");const t=dt.instance.sw(),i=dt.instance.sh();this.engine=He.exports.Engine.create(),this.engine.gravity.x=0,this.engine.gravity.y=0,this.render=He.exports.Render.create({element:document.body,engine:this.engine,options:{width:t,height:i,showAngleIndicator:!1,showCollisions:!1,showVelocity:!1,pixelRatio:st.instance.FLG_SHOW_MATTERJS?1:.1}}),this.render.canvas.classList.add("l-matter"),st.instance.FLG_SHOW_MATTERJS||this.render.canvas.classList.add("-hide"),this._makeLine(0),this._makeLine(1),this._makeLine(2),this._makeLine(3);const n=t*dt.instance.val(.2,.1);this.mouse=He.exports.Bodies.circle(0,0,n,{isStatic:!0,render:{visible:st.instance.FLG_SHOW_MATTERJS}}),He.exports.Composite.add(this.engine.world,[this.mouse]),He.exports.Body.setPosition(this.mouse,{x:9999,y:9999}),this._runner=He.exports.Runner.create(),this.start(),this._resize()}_makeLine(t){const i=dt.instance.sw(),n=dt.instance.sh(),r=t==0||t==2,a=.015,s=10,l=.2,u=r?i/s*l:n/s*l,c=He.exports.Composites.stack(0,0,s,1,0,0,(_,E)=>He.exports.Bodies.circle(_,E,u,{collisionFilter:{group:He.exports.Body.nextGroup(!0)},friction:.9,render:{fillStyle:"#060a19",visible:st.instance.FLG_SHOW_MATTERJS}}));He.exports.Composites.chain(c,0,0,0,0,{stiffness:a,length:2,render:{visible:st.instance.FLG_SHOW_MATTERJS}});const p=i*.5,h=n*.5;let f={x:0,y:0},g={x:0,y:0};t==0&&(f={x:p,y:h},g={x:i-p,y:h}),t==2&&(f={x:p,y:n-h},g={x:i-p,y:n-h}),t==1&&(f={x:i-p,y:h},g={x:i-p,y:n-h}),t==3&&(f={x:p,y:h},g={x:p,y:n-h}),He.exports.Composite.add(this.engine.world,[c,He.exports.Constraint.create({pointA:f,bodyB:c.bodies[0],pointB:{x:0,y:0},length:1,stiffness:1}),He.exports.Constraint.create({pointA:g,bodyB:c.bodies[c.bodies.length-1],pointB:{x:0,y:0},length:1,stiffness:1})]);const d=r?i/s:n/s;this.lineBodies.push([]);const m=this.lineBodies.length-1;c.bodies.forEach((_,E)=>{t==0&&He.exports.Body.setPosition(_,{x:d*E,y:0}),t==2&&He.exports.Body.setPosition(_,{x:d*E,y:n}),t==1&&He.exports.Body.setPosition(_,{x:i,y:d*E}),t==3&&He.exports.Body.setPosition(_,{x:0,y:d*E}),this.lineBodies[m].push(_)})}start(){He.exports.Render.run(this.render),He.exports.Runner.run(this._runner,this.engine)}stop(){He.exports.Render.stop(this.render),He.exports.Runner.stop(this._runner)}_update(){super._update();let t=ui.instance.x,i=ui.instance.y;this.engine.gravity.y=ui.instance.easeNormal.y,this.engine.gravity.x=ui.instance.easeNormal.x,st.instance.USE_TOUCH&&ui.instance.isDown==!1&&(t=9999,i=9999),He.exports.Body.setPosition(this.mouse,{x:t,y:i})}_resize(){super._resize();const t=dt.instance.sw(),i=dt.instance.sh();this.render.canvas.width=t,this.render.canvas.height=i}}class Br{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,n=1/0,r=-1/0,a=-1/0,s=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],p=e[l+1],h=e[l+2];c<t&&(t=c),p<i&&(i=p),h<n&&(n=h),c>r&&(r=c),p>a&&(a=p),h>s&&(s=h)}return this.min.set(t,i,n),this.max.set(r,a,s),this}setFromBufferAttribute(e){let t=1/0,i=1/0,n=1/0,r=-1/0,a=-1/0,s=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),p=e.getY(l),h=e.getZ(l);c<t&&(t=c),p<i&&(i=p),h<n&&(n=h),c>r&&(r=c),p>a&&(a=p),h>s&&(s=h)}return this.min.set(t,i,n),this.max.set(r,a,s),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const r=i.attributes.position;for(let a=0,s=r.count;a<s;a++)Qi.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Qi)}else i.boundingBox===null&&i.computeBoundingBox(),Ys.copy(i.boundingBox),Ys.applyMatrix4(e.matrixWorld),this.union(Ys);const n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Qi),Qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mr),Zr.subVectors(this.max,mr),Dn.subVectors(e.a,mr),Ln.subVectors(e.b,mr),Fn.subVectors(e.c,mr),Oi.subVectors(Ln,Dn),Ni.subVectors(Fn,Ln),en.subVectors(Dn,Fn);let t=[0,-Oi.z,Oi.y,0,-Ni.z,Ni.y,0,-en.z,en.y,Oi.z,0,-Oi.x,Ni.z,0,-Ni.x,en.z,0,-en.x,-Oi.y,Oi.x,0,-Ni.y,Ni.x,0,-en.y,en.x,0];return!Zs(t,Dn,Ln,Fn,Zr)||(t=[1,0,0,0,1,0,0,0,1],!Zs(t,Dn,Ln,Fn,Zr))?!1:(Kr.crossVectors(Oi,Ni),t=[Kr.x,Kr.y,Kr.z],Zs(t,Dn,Ln,Fn,Zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Qi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Qi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xi=[new H,new H,new H,new H,new H,new H,new H,new H],Qi=new H,Ys=new Br,Dn=new H,Ln=new H,Fn=new H,Oi=new H,Ni=new H,en=new H,mr=new H,Zr=new H,Kr=new H,tn=new H;function Zs(o,e,t,i,n){for(let r=0,a=o.length-3;r<=a;r+=3){tn.fromArray(o,r);const s=n.x*Math.abs(tn.x)+n.y*Math.abs(tn.y)+n.z*Math.abs(tn.z),l=e.dot(tn),u=t.dot(tn),c=i.dot(tn);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>s)return!1}return!0}const ah=new Br,wl=new H,jr=new H,Ks=new H;class io{constructor(e=new H,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ah.setFromPoints(e).getCenter(i);let n=0;for(let r=0,a=e.length;r<a;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Ks.subVectors(e,this.center);const t=Ks.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.add(Ks.multiplyScalar(n/i)),this.radius+=n}return this}union(e){return this.center.equals(e.center)===!0?jr.set(0,0,1).multiplyScalar(e.radius):jr.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(wl.copy(e.center).add(jr)),this.expandByPoint(wl.copy(e.center).sub(jr)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const js=new H,oh=new H,lh=new hi;class sn{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=js.subVectors(i,t).cross(oh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(js),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(i).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||lh.getNormalMatrix(e),n=this.coplanarPoint(js).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const In=new io,$r=new H;class wc{constructor(e=new sn,t=new sn,i=new sn,n=new sn,r=new sn,a=new sn){this.planes=[e,t,i,n,r,a]}set(e,t,i,n,r,a){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(n),s[4].copy(r),s[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,n=i[0],r=i[1],a=i[2],s=i[3],l=i[4],u=i[5],c=i[6],p=i[7],h=i[8],f=i[9],g=i[10],d=i[11],m=i[12],_=i[13],E=i[14],T=i[15];return t[0].setComponents(s-n,p-l,d-h,T-m).normalize(),t[1].setComponents(s+n,p+l,d+h,T+m).normalize(),t[2].setComponents(s+r,p+u,d+f,T+_).normalize(),t[3].setComponents(s-r,p-u,d-f,T-_).normalize(),t[4].setComponents(s-a,p-c,d-g,T-E).normalize(),t[5].setComponents(s+a,p+c,d+g,T+E).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(In)}intersectsSprite(e){return In.center.set(0,0,0),In.radius=.7071067811865476,In.applyMatrix4(e.matrixWorld),this.intersectsSphere(In)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if($r.x=n.normal.x>0?e.max.x:e.min.x,$r.y=n.normal.y>0?e.max.y:e.min.y,$r.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint($r)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ze{constructor(e=0,t=0){this.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*n+e.x,this.y=r*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mt{constructor(e=0,t=0,i=0,n=1){this.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r;const l=e.elements,u=l[0],c=l[4],p=l[8],h=l[1],f=l[5],g=l[9],d=l[2],m=l[6],_=l[10];if(Math.abs(c-h)<.01&&Math.abs(p-d)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(p+d)<.1&&Math.abs(g+m)<.1&&Math.abs(u+f+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(u+1)/2,x=(f+1)/2,v=(_+1)/2,S=(c+h)/4,M=(p+d)/4,y=(g+m)/4;return T>x&&T>v?T<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(T),n=S/i,r=M/i):x>v?x<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(x),i=S/n,r=y/n):v<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(v),i=M/r,n=y/r),this.set(i,n,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(p-d)*(p-d)+(h-c)*(h-c));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(p-d)/E,this.z=(h-c)/E,this.w=Math.acos((u+f+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}function Tc(){let o=null,e=!1,t=null,i=null;function n(r,a){t(r,a),i=o.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(n),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){o=r}}}function ch(o,e){const t=e.isWebGL2,i=new WeakMap;function n(u,c){const p=u.array,h=u.usage,f=o.createBuffer();o.bindBuffer(c,f),o.bufferData(c,p,h),u.onUploadCallback();let g;if(p instanceof Float32Array)g=o.FLOAT;else if(p instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)g=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)g=o.SHORT;else if(p instanceof Uint32Array)g=o.UNSIGNED_INT;else if(p instanceof Int32Array)g=o.INT;else if(p instanceof Int8Array)g=o.BYTE;else if(p instanceof Uint8Array)g=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)g=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:f,type:g,bytesPerElement:p.BYTES_PER_ELEMENT,version:u.version}}function r(u,c,p){const h=c.array,f=c.updateRange;o.bindBuffer(p,u),f.count===-1?o.bufferSubData(p,0,h):(t?o.bufferSubData(p,f.offset*h.BYTES_PER_ELEMENT,h,f.offset,f.count):o.bufferSubData(p,f.offset*h.BYTES_PER_ELEMENT,h.subarray(f.offset,f.offset+f.count)),f.count=-1)}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function s(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(o.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const p=i.get(u);p===void 0?i.set(u,n(u,c)):p.version<u.version&&(r(p.buffer,u,c),p.version=u.version)}return{get:a,remove:s,update:l}}const et=new H,Jr=new ze;class pi{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=pl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let n=0,r=e.length;n<r;n++){let a=e[n];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",n),a=new Fe),t[i++]=a.r,t[i++]=a.g,t[i++]=a.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let n=0,r=e.length;n<r;n++){let a=e[n];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",n),a=new ze),t[i++]=a.x,t[i++]=a.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let n=0,r=e.length;n<r;n++){let a=e[n];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",n),a=new H),t[i++]=a.x,t[i++]=a.y,t[i++]=a.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let n=0,r=e.length;n<r;n++){let a=e[n];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",n),a=new mt),t[i++]=a.x,t[i++]=a.y,t[i++]=a.z,t[i++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Jr.fromBufferAttribute(this,t),Jr.applyMatrix3(e),this.setXY(t,Jr.x,Jr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)et.fromBufferAttribute(this,t),et.applyMatrix3(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)et.fromBufferAttribute(this,t),et.applyMatrix4(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)et.fromBufferAttribute(this,t),et.applyNormalMatrix(e),this.setXYZ(t,et.x,et.y,et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)et.fromBufferAttribute(this,t),et.transformDirection(e),this.setXYZ(t,et.x,et.y,et.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class bc extends pi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ac extends pi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class mi extends pi{constructor(e,t,i){super(new Float32Array(e),t,i)}}function Cc(o){for(let e=o.length-1;e>=0;--e)if(o[e]>65535)return!0;return!1}function xs(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}let uh=0;const Gt=new gt,$s=new Rt,On=new H,Ft=new Br,gr=new Br,rt=new H;class ji extends ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=Or(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cc(e)?Ac:bc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new hi().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,i){return Gt.makeTranslation(e,t,i),this.applyMatrix4(Gt),this}scale(e,t,i){return Gt.makeScale(e,t,i),this.applyMatrix4(Gt),this}lookAt(e){return $s.lookAt(e),$s.updateMatrix(),this.applyMatrix4($s.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(On).negate(),this.translate(On.x,On.y,On.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new mi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const r=t[i];Ft.setFromBufferAttribute(r),this.morphTargetsRelative?(rt.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(rt),rt.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(rt)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new io);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const s=t[r];gr.setFromBufferAttribute(s),this.morphTargetsRelative?(rt.addVectors(Ft.min,gr.min),Ft.expandByPoint(rt),rt.addVectors(Ft.max,gr.max),Ft.expandByPoint(rt)):(Ft.expandByPoint(gr.min),Ft.expandByPoint(gr.max))}Ft.getCenter(i);let n=0;for(let r=0,a=e.count;r<a;r++)rt.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(rt));if(t)for(let r=0,a=t.length;r<a;r++){const s=t[r],l=this.morphTargetsRelative;for(let u=0,c=s.count;u<c;u++)rt.fromBufferAttribute(s,u),l&&(On.fromBufferAttribute(e,u),rt.add(On)),n=Math.max(n,i.distanceToSquared(rt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,n=t.position.array,r=t.normal.array,a=t.uv.array,s=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pi(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let A=0;A<s;A++)u[A]=new H,c[A]=new H;const p=new H,h=new H,f=new H,g=new ze,d=new ze,m=new ze,_=new H,E=new H;function T(A,b,L){p.fromArray(n,A*3),h.fromArray(n,b*3),f.fromArray(n,L*3),g.fromArray(a,A*2),d.fromArray(a,b*2),m.fromArray(a,L*2),h.sub(p),f.sub(p),d.sub(g),m.sub(g);const F=1/(d.x*m.y-m.x*d.y);!isFinite(F)||(_.copy(h).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(F),E.copy(f).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(F),u[A].add(_),u[b].add(_),u[L].add(_),c[A].add(E),c[b].add(E),c[L].add(E))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let A=0,b=x.length;A<b;++A){const L=x[A],F=L.start,P=L.count;for(let N=F,I=F+P;N<I;N+=3)T(i[N+0],i[N+1],i[N+2])}const v=new H,S=new H,M=new H,y=new H;function w(A){M.fromArray(r,A*3),y.copy(M);const b=u[A];v.copy(b),v.sub(M.multiplyScalar(M.dot(b))).normalize(),S.crossVectors(y,b);const F=S.dot(c[A])<0?-1:1;l[A*4]=v.x,l[A*4+1]=v.y,l[A*4+2]=v.z,l[A*4+3]=F}for(let A=0,b=x.length;A<b;++A){const L=x[A],F=L.start,P=L.count;for(let N=F,I=F+P;N<I;N+=3)w(i[N+0]),w(i[N+1]),w(i[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const n=new H,r=new H,a=new H,s=new H,l=new H,u=new H,c=new H,p=new H;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),d=e.getX(h+1),m=e.getX(h+2);n.fromBufferAttribute(t,g),r.fromBufferAttribute(t,d),a.fromBufferAttribute(t,m),c.subVectors(a,r),p.subVectors(n,r),c.cross(p),s.fromBufferAttribute(i,g),l.fromBufferAttribute(i,d),u.fromBufferAttribute(i,m),s.add(c),l.add(c),u.add(c),i.setXYZ(g,s.x,s.y,s.z),i.setXYZ(d,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,f=t.count;h<f;h+=3)n.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),c.subVectors(a,r),p.subVectors(n,r),c.cross(p),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const n in i){if(e.attributes[n]===void 0)continue;const a=i[n].array,s=e.attributes[n],l=s.array,u=s.itemSize*t,c=Math.min(l.length,a.length-u);for(let p=0,h=u;p<c;p++,h++)a[h]=l[p]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)rt.fromBufferAttribute(e,t),rt.normalize(),e.setXYZ(t,rt.x,rt.y,rt.z)}toNonIndexed(){function e(s,l){const u=s.array,c=s.itemSize,p=s.normalized,h=new u.constructor(l.length*c);let f=0,g=0;for(let d=0,m=l.length;d<m;d++){s.isInterleavedBufferAttribute?f=l[d]*s.data.stride+s.offset:f=l[d]*c;for(let _=0;_<c;_++)h[g++]=u[f++]}return new pi(h,c,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ji,i=this.index.array,n=this.attributes;for(const s in n){const l=n[s],u=e(l,i);t.setAttribute(s,u)}const r=this.morphAttributes;for(const s in r){const l=[],u=r[s];for(let c=0,p=u.length;c<p;c++){const h=u[c],f=e(h,i);l.push(f)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,l=a.length;s<l;s++){const u=a[s];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const n={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let p=0,h=u.length;p<h;p++){const f=u[p];c.push(f.toJSON(e.data))}c.length>0&&(n[l]=c,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const u in n){const c=n[u];this.setAttribute(u,c.clone(t))}const r=e.morphAttributes;for(const u in r){const c=[],p=r[u];for(let h=0,f=p.length;h<f;h++)c.push(p[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}class zr extends ji{constructor(e=1,t=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};const s=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);const l=[],u=[],c=[],p=[];let h=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,n,a,2),g("x","z","y",1,-1,e,i,-t,n,a,3),g("x","y","z",1,-1,e,t,i,n,r,4),g("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new mi(u,3)),this.setAttribute("normal",new mi(c,3)),this.setAttribute("uv",new mi(p,2));function g(d,m,_,E,T,x,v,S,M,y,w){const A=x/M,b=v/y,L=x/2,F=v/2,P=S/2,N=M+1,I=y+1;let z=0,k=0;const B=new H;for(let W=0;W<I;W++){const J=W*b-F;for(let Z=0;Z<N;Z++){const j=Z*A-L;B[d]=j*E,B[m]=J*T,B[_]=P,u.push(B.x,B.y,B.z),B[d]=0,B[m]=0,B[_]=S>0?1:-1,c.push(B.x,B.y,B.z),p.push(Z/M),p.push(1-W/y),z+=1}}for(let W=0;W<y;W++)for(let J=0;J<M;J++){const Z=h+J+N*W,j=h+J+N*(W+1),ie=h+(J+1)+N*(W+1),oe=h+(J+1)+N*W;l.push(Z,j,oe),l.push(j,ie,oe),k+=6}s.addGroup(f,k,w),f+=k,h+=z}}static fromJSON(e){return new zr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Gr extends ji{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const r=e/2,a=t/2,s=Math.floor(i),l=Math.floor(n),u=s+1,c=l+1,p=e/s,h=t/l,f=[],g=[],d=[],m=[];for(let _=0;_<c;_++){const E=_*h-a;for(let T=0;T<u;T++){const x=T*p-r;g.push(x,-E,0),d.push(0,0,1),m.push(T/s),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let E=0;E<s;E++){const T=E+u*_,x=E+u*(_+1),v=E+1+u*(_+1),S=E+1+u*_;f.push(T,x,S),f.push(x,v,S)}this.setIndex(f),this.setAttribute("position",new mi(g,3)),this.setAttribute("normal",new mi(d,3)),this.setAttribute("uv",new mi(m,2))}static fromJSON(e){return new Gr(e.width,e.height,e.widthSegments,e.heightSegments)}}let fh=0;class kr extends ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=Or(),this.name="",this.type="Material",this.blending=jn,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=gc,this.blendDst=_c,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=La,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vs,this.stencilZFail=Vs,this.stencilZPass=Vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===sf;continue}const n=this[t];if(n===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==jn&&(i.blending=this.blending),this.side!==br&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function n(r){const a=[];for(const s in r){const l=r[s];delete l.metadata,a.push(l)}return a}if(t){const r=n(e.textures),a=n(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}get vertexTangents(){return console.warn("THREE."+this.type+": .vertexTangents has been removed."),!1}set vertexTangents(e){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}kr.fromType=function(){return null};function rr(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const n=o[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function ht(o){const e={};for(let t=0;t<o.length;t++){const i=rr(o[t]);for(const n in i)e[n]=i[n]}return e}const hh={clone:rr,merge:ht};var dh=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,ph=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;class Pi extends kr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=dh,this.fragmentShader=ph,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rr(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}const yi=new H,Js=new H,Qr=new H,Ui=new H,Qs=new H,es=new H,ea=new H;class mh{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.direction).multiplyScalar(t).add(this.origin),yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Js.copy(e).add(t).multiplyScalar(.5),Qr.copy(t).sub(e).normalize(),Ui.copy(this.origin).sub(Js);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Qr),s=Ui.dot(this.direction),l=-Ui.dot(Qr),u=Ui.lengthSq(),c=Math.abs(1-a*a);let p,h,f,g;if(c>0)if(p=a*l-s,h=a*s-l,g=r*c,p>=0)if(h>=-g)if(h<=g){const d=1/c;p*=d,h*=d,f=p*(p+a*h+2*s)+h*(a*p+h+2*l)+u}else h=r,p=Math.max(0,-(a*h+s)),f=-p*p+h*(h+2*l)+u;else h=-r,p=Math.max(0,-(a*h+s)),f=-p*p+h*(h+2*l)+u;else h<=-g?(p=Math.max(0,-(-a*r+s)),h=p>0?-r:Math.min(Math.max(-r,-l),r),f=-p*p+h*(h+2*l)+u):h<=g?(p=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+u):(p=Math.max(0,-(a*r+s)),h=p>0?r:Math.min(Math.max(-r,-l),r),f=-p*p+h*(h+2*l)+u);else h=a>0?-r:r,p=Math.max(0,-(a*h+s)),f=-p*p+h*(h+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(p).add(this.origin),n&&n.copy(Qr).multiplyScalar(h).add(Js),f}intersectSphere(e,t){yi.subVectors(e.center,this.origin);const i=yi.dot(this.direction),n=yi.dot(yi)-i*i,r=e.radius*e.radius;if(n>r)return null;const a=Math.sqrt(r-n),s=i-a,l=i+a;return s<0&&l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,a,s,l;const u=1/this.direction.x,c=1/this.direction.y,p=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,n=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,n=(e.min.x-h.x)*u),c>=0?(r=(e.min.y-h.y)*c,a=(e.max.y-h.y)*c):(r=(e.max.y-h.y)*c,a=(e.min.y-h.y)*c),i>a||r>n||((r>i||i!==i)&&(i=r),(a<n||n!==n)&&(n=a),p>=0?(s=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(s=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),i>l||s>n)||((s>i||i!==i)&&(i=s),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,i,n,r){Qs.subVectors(t,e),es.subVectors(i,e),ea.crossVectors(Qs,es);let a=this.direction.dot(ea),s;if(a>0){if(n)return null;s=1}else if(a<0)s=-1,a=-a;else return null;Ui.subVectors(this.origin,e);const l=s*this.direction.dot(es.crossVectors(Ui,es));if(l<0)return null;const u=s*this.direction.dot(Qs.cross(Ui));if(u<0||l+u>a)return null;const c=-s*Ui.dot(ea);return c<0?null:this.at(c/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}const Qt=new H,Si=new H,ta=new H,Mi=new H,Nn=new H,Un=new H,Tl=new H,ia=new H,na=new H,ra=new H;class bi{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Qt.subVectors(e,t),n.cross(Qt);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){Qt.subVectors(n,t),Si.subVectors(i,t),ta.subVectors(e,t);const a=Qt.dot(Qt),s=Qt.dot(Si),l=Qt.dot(ta),u=Si.dot(Si),c=Si.dot(ta),p=a*u-s*s;if(p===0)return r.set(-2,-1,-1);const h=1/p,f=(u*l-s*c)*h,g=(a*c-s*l)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Mi),Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getUV(e,t,i,n,r,a,s,l){return this.getBarycoord(e,t,i,n,Mi),l.set(0,0),l.addScaledVector(r,Mi.x),l.addScaledVector(a,Mi.y),l.addScaledVector(s,Mi.z),l}static isFrontFacing(e,t,i,n){return Qt.subVectors(i,t),Si.subVectors(e,t),Qt.cross(Si).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Qt.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,r){return bi.getUV(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,r=this.c;let a,s;Nn.subVectors(n,i),Un.subVectors(r,i),ia.subVectors(e,i);const l=Nn.dot(ia),u=Un.dot(ia);if(l<=0&&u<=0)return t.copy(i);na.subVectors(e,n);const c=Nn.dot(na),p=Un.dot(na);if(c>=0&&p<=c)return t.copy(n);const h=l*p-c*u;if(h<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(Nn,a);ra.subVectors(e,r);const f=Nn.dot(ra),g=Un.dot(ra);if(g>=0&&f<=g)return t.copy(r);const d=f*u-l*g;if(d<=0&&u>=0&&g<=0)return s=u/(u-g),t.copy(i).addScaledVector(Un,s);const m=c*g-f*p;if(m<=0&&p-c>=0&&f-g>=0)return Tl.subVectors(r,n),s=(p-c)/(p-c+(f-g)),t.copy(n).addScaledVector(Tl,s);const _=1/(m+d+h);return a=d*_,s=h*_,t.copy(i).addScaledVector(Nn,a).addScaledVector(Un,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class no extends kr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bl=new gt,Bn=new mh,sa=new io,Bi=new H,zi=new H,Gi=new H,aa=new H,oa=new H,la=new H,ts=new H,is=new H,ns=new H,rs=new ze,ss=new ze,as=new ze,ca=new H,os=new H;class ti extends Rt{constructor(e=new ji,t=new no){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const s=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}raycast(e,t){const i=this.geometry,n=this.material,r=this.matrixWorld;if(n===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),sa.copy(i.boundingSphere),sa.applyMatrix4(r),e.ray.intersectsSphere(sa)===!1)||(bl.copy(r).invert(),Bn.copy(e.ray).applyMatrix4(bl),i.boundingBox!==null&&Bn.intersectsBox(i.boundingBox)===!1))return;let a;const s=i.index,l=i.attributes.position,u=i.morphAttributes.position,c=i.morphTargetsRelative,p=i.attributes.uv,h=i.attributes.uv2,f=i.groups,g=i.drawRange;if(s!==null)if(Array.isArray(n))for(let d=0,m=f.length;d<m;d++){const _=f[d],E=n[_.materialIndex],T=Math.max(_.start,g.start),x=Math.min(s.count,Math.min(_.start+_.count,g.start+g.count));for(let v=T,S=x;v<S;v+=3){const M=s.getX(v),y=s.getX(v+1),w=s.getX(v+2);a=ls(this,E,e,Bn,l,u,c,p,h,M,y,w),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const d=Math.max(0,g.start),m=Math.min(s.count,g.start+g.count);for(let _=d,E=m;_<E;_+=3){const T=s.getX(_),x=s.getX(_+1),v=s.getX(_+2);a=ls(this,n,e,Bn,l,u,c,p,h,T,x,v),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(n))for(let d=0,m=f.length;d<m;d++){const _=f[d],E=n[_.materialIndex],T=Math.max(_.start,g.start),x=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let v=T,S=x;v<S;v+=3){const M=v,y=v+1,w=v+2;a=ls(this,E,e,Bn,l,u,c,p,h,M,y,w),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const d=Math.max(0,g.start),m=Math.min(l.count,g.start+g.count);for(let _=d,E=m;_<E;_+=3){const T=_,x=_+1,v=_+2;a=ls(this,n,e,Bn,l,u,c,p,h,T,x,v),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}}}function gh(o,e,t,i,n,r,a,s){let l;if(e.side===ii?l=i.intersectTriangle(a,r,n,!0,s):l=i.intersectTriangle(n,r,a,e.side!==yn,s),l===null)return null;os.copy(s),os.applyMatrix4(o.matrixWorld);const u=t.ray.origin.distanceTo(os);return u<t.near||u>t.far?null:{distance:u,point:os.clone(),object:o}}function ls(o,e,t,i,n,r,a,s,l,u,c,p){Bi.fromBufferAttribute(n,u),zi.fromBufferAttribute(n,c),Gi.fromBufferAttribute(n,p);const h=o.morphTargetInfluences;if(r&&h){ts.set(0,0,0),is.set(0,0,0),ns.set(0,0,0);for(let g=0,d=r.length;g<d;g++){const m=h[g],_=r[g];m!==0&&(aa.fromBufferAttribute(_,u),oa.fromBufferAttribute(_,c),la.fromBufferAttribute(_,p),a?(ts.addScaledVector(aa,m),is.addScaledVector(oa,m),ns.addScaledVector(la,m)):(ts.addScaledVector(aa.sub(Bi),m),is.addScaledVector(oa.sub(zi),m),ns.addScaledVector(la.sub(Gi),m)))}Bi.add(ts),zi.add(is),Gi.add(ns)}o.isSkinnedMesh&&(o.boneTransform(u,Bi),o.boneTransform(c,zi),o.boneTransform(p,Gi));const f=gh(o,e,t,i,Bi,zi,Gi,ca);if(f){s&&(rs.fromBufferAttribute(s,u),ss.fromBufferAttribute(s,c),as.fromBufferAttribute(s,p),f.uv=bi.getUV(ca,Bi,zi,Gi,rs,ss,as,new ze)),l&&(rs.fromBufferAttribute(l,u),ss.fromBufferAttribute(l,c),as.fromBufferAttribute(l,p),f.uv2=bi.getUV(ca,Bi,zi,Gi,rs,ss,as,new ze));const g={a:u,b:c,c:p,normal:new H,materialIndex:0};bi.getNormal(Bi,zi,Gi,g.normal),f.face=g}return f}var _h=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vUv ).g;

#endif
`,vh=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,xh=`
#ifdef USE_ALPHATEST

	if ( diffuseColor.a < alphaTest ) discard;

#endif
`,yh=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`,Sh=`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;

	reflectedLight.indirectDiffuse *= ambientOcclusion;

	#if defined( USE_ENVMAP ) && defined( STANDARD )

		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );

		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );

	#endif

#endif
`,Mh=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`,Eh=`
vec3 transformed = vec3( position );
`,wh=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`,Th=`

vec3 BRDF_Lambert( const in vec3 diffuseColor ) {

	return RECIPROCAL_PI * diffuseColor;

} // validated

vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated

float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated

vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );

    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}

// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2
// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {

	float a2 = pow2( alpha );

	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

	return 0.5 / max( gv + gl, EPSILON );

}

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney\u2019s reparameterization
float D_GGX( const in float alpha, const in float dotNH ) {

	float a2 = pow2( alpha );

	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

	return RECIPROCAL_PI * a2 / pow2( denom );

}

// GGX Distribution, Schlick Fresnel, GGX_SmithCorrelated Visibility
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {

	float alpha = pow2( roughness ); // UE4's roughness

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( f0, f90, dotVH );

	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

	float D = D_GGX( alpha, dotNH );

	return F * ( V * D );

}

#ifdef USE_IRIDESCENCE

vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {

	float alpha = pow2( roughness ); // UE4's roughness

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);

	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

	float D = D_GGX( alpha, dotNH );

	return F * ( V * D );

}

#endif

// Rect Area Light

// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt
// code: https://github.com/selfshadow/ltc_code/

vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	float dotNV = saturate( dot( N, V ) );

	// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );

	uv = uv * LUT_SCALE + LUT_BIAS;

	return uv;

}

float LTC_ClippedSphereFormFactor( const in vec3 f ) {

	// Real-Time Area Lighting: a Journey from Research to Production (p.102)
	// An approximation of the form factor of a horizon-clipped rectangle.

	float l = length( f );

	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );

}

vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {

	float x = dot( v1, v2 );

	float y = abs( x );

	// rational polynomial approximation to theta / sin( theta ) / 2PI
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;

	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;

	return cross( v1, v2 ) * theta_sintheta;

}

vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {

	// bail if point is on back side of plane of light
	// assumes ccw winding order of light vertices
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );

	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );

	// construct orthonormal basis around N
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system

	// compute transform
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );

	// transform rect
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );

	// project rect onto sphere
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );

	// calculate vector form factor
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );

	// adjust for horizon clipping
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );

/*
	// alternate method of adjusting for horizon clipping (see referece)
	// refactoring required
	float len = length( vectorFormFactor );
	float z = vectorFormFactor.z / len;

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	// tabulated horizon-clipped sphere, apparently...
	vec2 uv = vec2( z * 0.5 + 0.5, len );
	uv = uv * LUT_SCALE + LUT_BIAS;

	float scale = texture2D( ltc_2, uv ).w;

	float result = len * scale;
*/

	return vec3( result );

}

// End Rect Area Light


float G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {

	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
	return 0.25;

}

float D_BlinnPhong( const in float shininess, const in float dotNH ) {

	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );

}

vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( specularColor, 1.0, dotVH );

	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );

	float D = D_BlinnPhong( shininess, dotNH );

	return F * ( G * D );

} // validated

#if defined( USE_SHEEN )

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float D_Charlie( float roughness, float dotNH ) {

	float alpha = pow2( roughness );

	// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF"
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 ); // 2^(-14/2), so sin2h^2 > 0 in fp16

	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );

}

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float V_Neubelt( float dotNV, float dotNL ) {

	// Neubelt and Pettineo 2013, "Crafting a Next-gen Material Pipeline for The Order: 1886"
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );

}

vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );

	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );

	return sheenColor * ( D * V );

}

#endif
`,bh=`

#ifdef USE_IRIDESCENCE

// XYZ to sRGB color space
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);

// Assume air interface for top
// Note: We don't handle the case fresnel0 == 1
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}

// Conversion FO/IOR
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}

// ior is a value between 1.0 and 3.0. 1.0 is air interface
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}

// Fresnel equations for dielectric/dielectric interfaces.
// Ref: https://belcour.github.io/blog/research/2017/05/01/brdf-thin-film.html
// Evaluation XYZ sensitivity curves in Fourier space
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );

   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;

   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}

vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;

   // Force iridescenceIOR -> outsideIOR when thinFilmThickness -> 0.0
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   // Evaluate the cosTheta on the base layer (Snell law)
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );

   // Handle TIR:
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }

   float cosTheta2 = sqrt( cosTheta2Sq );

   // First interface
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;

   // Second interface
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) ); // guard against 1.0
   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;

   // Phase shift
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;

   // Compound terms
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );

   // Reflectance term for m = 0 (DC term amplitude)
   vec3 C0 = R12 + Rs;
   I = C0;

   // Reflectance term for m > 0 (pairs of diracs)
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }

   // Since out of gamut colors might be produced, negative color values are clamped to 0.
   return max( I, vec3( 0.0 ) );
}

#endif

`,Ah=`
#ifdef USE_BUMPMAP

	uniform sampler2D bumpMap;
	uniform float bumpScale;

	// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen
	// https://mmikk.github.io/papers3d/mm_sfgrad_bump.pdf

	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)

	vec2 dHdxy_fwd() {

		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );

		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;

		return vec2( dBx, dBy );

	}

	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {

		// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988

		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;		// normalized

		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );

		float fDet = dot( vSigmaX, R1 ) * faceDirection;

		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );

	}

#endif
`,Ch=`
#if NUM_CLIPPING_PLANES > 0

	vec4 plane;

	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {

		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;

	}
	#pragma unroll_loop_end

	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES

		bool clipped = true;

		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {

			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;

		}
		#pragma unroll_loop_end

		if ( clipped ) discard;

	#endif

#endif
`,Rh=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`,Ph=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`,Dh=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`,Lh=`
#if defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#elif defined( USE_COLOR )

	diffuseColor.rgb *= vColor;

#endif
`,Fh=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR )

	varying vec3 vColor;

#endif
`,Ih=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	varying vec3 vColor;

#endif
`,Oh=`
#if defined( USE_COLOR_ALPHA )

	vColor = vec4( 1.0 );

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	vColor = vec3( 1.0 );

#endif

#ifdef USE_COLOR

	vColor *= color;

#endif

#ifdef USE_INSTANCING_COLOR

	vColor.xyz *= instanceColor.xyz;

#endif
`,Nh=`
#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6

#ifndef saturate
// <tonemapping_pars_fragment> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )

float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }

// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.
// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand( const in vec2 uv ) {

	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );

	return fract( sin( sn ) * c );

}

#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif

struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};

struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};

struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};

vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

}

vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {

	// dir can be either a direction vector or a normal vector
	// upper-left 3x3 of matrix is assumed to be orthogonal

	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );

}

mat3 transposeMat3( const in mat3 m ) {

	mat3 tmp;

	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );

	return tmp;

}

// https://en.wikipedia.org/wiki/Relative_luminance
float linearToRelativeLuminance( const in vec3 color ) {

	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );

	return dot( weights, color.rgb );

}

bool isPerspectiveMatrix( mat4 m ) {

	return m[ 2 ][ 3 ] == - 1.0;

}

vec2 equirectUv( in vec3 dir ) {

	// dir is assumed to be unit length

	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;

	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;

	return vec2( u, v );

}
`,Uh=`
#ifdef ENVMAP_TYPE_CUBE_UV

	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0

	// These shader functions convert between the UV coordinates of a single face of
	// a cubemap, the 0-5 integer index of a cube face, and the direction vector for
	// sampling a textureCube (not generally normalized ).

	float getFace( vec3 direction ) {

		vec3 absDirection = abs( direction );

		float face = - 1.0;

		if ( absDirection.x > absDirection.z ) {

			if ( absDirection.x > absDirection.y )

				face = direction.x > 0.0 ? 0.0 : 3.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		} else {

			if ( absDirection.z > absDirection.y )

				face = direction.z > 0.0 ? 2.0 : 5.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		}

		return face;

	}

	// RH coordinate system; PMREM face-indexing convention
	vec2 getUV( vec3 direction, float face ) {

		vec2 uv;

		if ( face == 0.0 ) {

			uv = vec2( direction.z, direction.y ) / abs( direction.x ); // pos x

		} else if ( face == 1.0 ) {

			uv = vec2( - direction.x, - direction.z ) / abs( direction.y ); // pos y

		} else if ( face == 2.0 ) {

			uv = vec2( - direction.x, direction.y ) / abs( direction.z ); // pos z

		} else if ( face == 3.0 ) {

			uv = vec2( - direction.z, direction.y ) / abs( direction.x ); // neg x

		} else if ( face == 4.0 ) {

			uv = vec2( - direction.x, direction.z ) / abs( direction.y ); // neg y

		} else {

			uv = vec2( direction.x, direction.y ) / abs( direction.z ); // neg z

		}

		return 0.5 * ( uv + 1.0 );

	}

	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {

		float face = getFace( direction );

		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );

		mipInt = max( mipInt, cubeUV_minMipLevel );

		float faceSize = exp2( mipInt );

		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;

		if ( face > 2.0 ) {

			uv.y += faceSize;

			face -= 3.0;

		}

		uv.x += face * faceSize;

		uv.x += filterInt * 3.0 * cubeUV_minTileSize;

		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );

		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;

		#ifdef texture2DGradEXT

			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb; // disable anisotropic filtering

		#else

			return texture2D( envMap, uv ).rgb;

		#endif

	}

	// These defines must match with PMREMGenerator

	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0

	float roughnessToMip( float roughness ) {

		float mip = 0.0;

		if ( roughness >= r1 ) {

			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;

		} else if ( roughness >= r4 ) {

			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;

		} else if ( roughness >= r5 ) {

			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;

		} else if ( roughness >= r6 ) {

			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;

		} else {

			mip = - 2.0 * log2( 1.16 * roughness ); // 1.16 = 1.79^0.25
		}

		return mip;

	}

	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {

		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );

		float mipF = fract( mip );

		float mipInt = floor( mip );

		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );

		if ( mipF == 0.0 ) {

			return vec4( color0, 1.0 );

		} else {

			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );

			return vec4( mix( color0, color1, mipF ), 1.0 );

		}

	}

#endif
`,Bh=`
vec3 transformedNormal = objectNormal;

#ifdef USE_INSTANCING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

	mat3 m = mat3( instanceMatrix );

	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );

	transformedNormal = m * transformedNormal;

#endif

transformedNormal = normalMatrix * transformedNormal;

#ifdef FLIP_SIDED

	transformedNormal = - transformedNormal;

#endif

#ifdef USE_TANGENT

	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;

	#ifdef FLIP_SIDED

		transformedTangent = - transformedTangent;

	#endif

#endif
`,zh=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`,Gh=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );

#endif
`,kh=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vUv );

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`,Hh=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`,Vh=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`,Wh=`

vec4 LinearToLinear( in vec4 value ) {
	return value;
}

vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`,Xh=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vec3 cameraToFrag;

		if ( isOrthographic ) {

			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToFrag = normalize( vWorldPosition - cameraPosition );

		}

		// Transforming Normal Vectors with the Inverse Transformation
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vec3 reflectVec = reflect( cameraToFrag, worldNormal );

		#else

			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );

		#endif

	#else

		vec3 reflectVec = vReflect;

	#endif

	#ifdef ENVMAP_TYPE_CUBE

		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );

	#elif defined( ENVMAP_TYPE_CUBE_UV )

		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );

	#else

		vec4 envColor = vec4( 0.0 );

	#endif

	#ifdef ENVMAP_BLENDING_MULTIPLY

		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_MIX )

		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_ADD )

		outgoingLight += envColor.xyz * specularStrength * reflectivity;

	#endif

#endif
`,qh=`
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform float flipEnvMap;

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif
`,Yh=`
#ifdef USE_ENVMAP

	uniform float reflectivity;

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif

#endif
`,Zh=`
#ifdef USE_ENVMAP

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;

	#else

		varying vec3 vReflect;
		uniform float refractionRatio;

	#endif

#endif
`,Kh=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vWorldPosition = worldPosition.xyz;

	#else

		vec3 cameraToVertex;

		if ( isOrthographic ) {

			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );

		}

		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vReflect = reflect( cameraToVertex, worldNormal );

		#else

			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );

		#endif

	#endif

#endif
`,jh=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`,$h=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`,Jh=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`,Qh=`
#ifdef USE_FOG

	uniform vec3 fogColor;
	varying float vFogDepth;

	#ifdef FOG_EXP2

		uniform float fogDensity;

	#else

		uniform float fogNear;
		uniform float fogFar;

	#endif

#endif
`,ed=`

#ifdef USE_GRADIENTMAP

	uniform sampler2D gradientMap;

#endif

vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {

	// dotNL will be from -1.0 to 1.0
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );

	#ifdef USE_GRADIENTMAP

		return vec3( texture2D( gradientMap, coord ).r );

	#else

		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );

	#endif

}
`,td=`
#ifdef USE_LIGHTMAP

	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

	reflectedLight.indirectDiffuse += lightMapIrradiance;

#endif
`,id=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`,nd=`
vec3 diffuse = vec3( 1.0 );

GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );

GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;

vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif

IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;

vIndirectFront += getAmbientLightIrradiance( ambientLightColor );

vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );

#ifdef DOUBLE_SIDED

	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );

	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );

#endif

#if NUM_POINT_LIGHTS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		getPointLightInfo( pointLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;

		#endif

	}
	#pragma unroll_loop_end

#endif

#if NUM_SPOT_LIGHTS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		getSpotLightInfo( spotLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;

		#endif
	}
	#pragma unroll_loop_end

#endif

#if NUM_DIR_LIGHTS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;

		#endif

	}
	#pragma unroll_loop_end

#endif

#if NUM_HEMI_LIGHTS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );

		#ifdef DOUBLE_SIDED

			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );

		#endif

	}
	#pragma unroll_loop_end

#endif
`,rd=`
uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];

// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere
// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {

	// normal is assumed to have unit length

	float x = normal.x, y = normal.y, z = normal.z;

	// band 0
	vec3 result = shCoefficients[ 0 ] * 0.886227;

	// band 1
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;

	// band 2
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );

	return result;

}

vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {

	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );

	return irradiance;

}

vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {

	vec3 irradiance = ambientLightColor;

	return irradiance;

}

float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

	#if defined ( PHYSICALLY_CORRECT_LIGHTS )

		// based upon Frostbite 3 Moving to Physically-based Rendering
		// page 32, equation 26: E[window1]
		// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );

		if ( cutoffDistance > 0.0 ) {

			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

		}

		return distanceFalloff;

	#else

		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {

			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );

		}

		return 1.0;

	#endif

}

float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {

	return smoothstep( coneCosine, penumbraCosine, angleCosine );

}

#if NUM_DIR_LIGHTS > 0

	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};

	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];

	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {

		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;

	}

#endif


#if NUM_POINT_LIGHTS > 0

	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};

	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {

		vec3 lVector = pointLight.position - geometry.position;

		light.direction = normalize( lVector );

		float lightDistance = length( lVector );

		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );

	}

#endif


#if NUM_SPOT_LIGHTS > 0

	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};

	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {

		vec3 lVector = spotLight.position - geometry.position;

		light.direction = normalize( lVector );

		float angleCos = dot( light.direction, spotLight.direction );

		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );

		if ( spotAttenuation > 0.0 ) {

			float lightDistance = length( lVector );

			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );

		} else {

			light.color = vec3( 0.0 );
			light.visible = false;

		}

	}

#endif


#if NUM_RECT_AREA_LIGHTS > 0

	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};

	// Pre-computed values of LinearTransformedCosine approximation of BRDF
	// BRDF approximation Texture is 64x64
	uniform sampler2D ltc_1; // RGBA Float
	uniform sampler2D ltc_2; // RGBA Float

	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];

#endif


#if NUM_HEMI_LIGHTS > 0

	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};

	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];

	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {

		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;

		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );

		return irradiance;

	}

#endif
`,sd=`
#if defined( USE_ENVMAP )

	vec3 getIBLIrradiance( const in vec3 normal ) {

		#if defined( ENVMAP_TYPE_CUBE_UV )

			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );

			return PI * envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {

		#if defined( ENVMAP_TYPE_CUBE_UV )

			vec3 reflectVec = reflect( - viewDir, normal );

			// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );

			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );

			return envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

#endif
`,ad=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`,od=`
varying vec3 vViewPosition;

struct ToonMaterial {

	vec3 diffuseColor;

};

void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon

#define Material_LightProbeLOD( material )	(0)
`,ld=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`,cd=`
varying vec3 vViewPosition;

struct BlinnPhongMaterial {

	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;

};

void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;

}

void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong

#define Material_LightProbeLOD( material )	(0)
`,ud=`
PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );

vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );

material.roughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );

#ifdef IOR

	#ifdef SPECULAR

		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;

		#ifdef USE_SPECULARINTENSITYMAP

			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;

		#endif

		#ifdef USE_SPECULARCOLORMAP

			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;

		#endif

		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );

	#else

		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;

	#endif

	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );

#else

	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;

#endif

#ifdef USE_CLEARCOAT

	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;

	#ifdef USE_CLEARCOATMAP

		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;

	#endif

	#ifdef USE_CLEARCOAT_ROUGHNESSMAP

		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;

	#endif

	material.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model
	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );

#endif

#ifdef USE_IRIDESCENCE

	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;

	#ifdef USE_IRIDESCENCEMAP

		material.iridescence *= texture2D( iridescenceMap, vUv ).r;

	#endif

	#ifdef USE_IRIDESCENCE_THICKNESSMAP

		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;

	#else

		material.iridescenceThickness = iridescenceThicknessMaximum;

	#endif

#endif

#ifdef USE_SHEEN

	material.sheenColor = sheenColor;

	#ifdef USE_SHEENCOLORMAP

		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;

	#endif

	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );

	#ifdef USE_SHEENROUGHNESSMAP

		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;

	#endif

#endif
`,fd=`
struct PhysicalMaterial {

	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;

	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif

	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif

	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif

};

// temporary
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );

// This is a curve-fit approxmation to the "Charlie sheen" BRDF integrated over the hemisphere from 
// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF". The analysis can be found
// in the Sheen section of https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {

	float dotNV = saturate( dot( normal, viewDir ) );

	float r2 = roughness * roughness;

	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;

	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;

	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );

	return saturate( DG * RECIPROCAL_PI );

}

// Analytical approximation of the DFG LUT, one half of the
// split-sum approximation used in indirect specular lighting.
// via 'environmentBRDF' from "Physically Based Shading on Mobile"
// https://www.unrealengine.com/blog/physically-based-shading-on-mobile
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );

	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );

	vec4 r = roughness * c0 + c1;

	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;

	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;

	return fab;

}

vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	return specularColor * fab.x + specularF90 * fab.y;

}

// Fdez-Ag\xFCera's "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"
// Approximates multiscattering in order to preserve energy.
// http://www.jcgt.org/published/0008/01/03/
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	#ifdef USE_IRIDESCENCE

		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );

	#else

		vec3 Fr = specularColor;

	#endif

	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;

	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;

	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619; // 1/21
	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );

	singleScatter += FssEss;
	multiScatter += Fms * Ems;

}

#if NUM_RECT_AREA_LIGHTS > 0

	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;

		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction
		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;

		vec2 uv = LTC_Uv( normal, viewDir, roughness );

		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );

		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);

		// LTC Fresnel Approximation by Stephen Hill
		// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );

		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );

		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );

	}

#endif

void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );

	vec3 irradiance = dotNL * directLight.color;

	#ifdef USE_CLEARCOAT

		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );

		vec3 ccIrradiance = dotNLcc * directLight.color;

		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );

	#endif

	#ifdef USE_SHEEN

		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );

	#endif

	#ifdef USE_IRIDESCENCE

		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );

	#else

		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );

	#endif

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}

void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {

	#ifdef USE_CLEARCOAT

		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );

	#endif

	#ifdef USE_SHEEN

		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );

	#endif

	// Both indirect specular and indirect diffuse light accumulate here

	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;

	#ifdef USE_IRIDESCENCE

		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );

	#else

		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );

	#endif

	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );

	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;

	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;

}

#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical

// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {

	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );

}
`,hd=`
/**
 * This is a template that can be used to light a material, it uses pluggable
 * RenderEquations (RE)for specific lighting scenarios.
 *
 * Instructions for use:
 * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined
 * - If you have defined an RE_IndirectSpecular, you need to also provide a Material_LightProbeLOD. <---- ???
 * - Create a material parameter that is to be passed as the third parameter to your lighting functions.
 *
 * TODO:
 * - Add area light support.
 * - Add sphere light support.
 * - Add diffuse light probe (irradiance cubemap) support.
 */

GeometricContext geometry;

geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

#ifdef USE_CLEARCOAT

	geometry.clearcoatNormal = clearcoatNormal;

#endif

#ifdef USE_IRIDESCENCE

float dotNVi = saturate( dot( normal, geometry.viewDir ) );

if ( material.iridescenceThickness == 0.0 ) {

	material.iridescence = 0.0;

} else {

	material.iridescence = saturate( material.iridescence );

}

if ( material.iridescence > 0.0 ) {

	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );

	// Iridescence F0 approximation
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );

}

#endif

IncidentLight directLight;

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointLightInfo( pointLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotLightInfo( spotLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalLightInfo( directionalLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );

		}
		#pragma unroll_loop_end

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`,dd=`
#if defined( RE_IndirectDiffuse )

	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

		irradiance += lightMapIrradiance;

	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )

		iblIrradiance += getIBLIrradiance( geometry.normal );

	#endif

#endif

#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )

	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );

	#ifdef USE_CLEARCOAT

		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );

	#endif

#endif
`,pd=`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );

#endif
`,md=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`,gd=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,_d=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		varying float vFragDepth;
		varying float vIsPerspective;

	#else

		uniform float logDepthBufFC;

	#endif

#endif
`,vd=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

	#else

		if ( isPerspectiveMatrix( projectionMatrix ) ) {

			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;

			gl_Position.z *= gl_Position.w;

		}

	#endif

#endif
`,xd=`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)

		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );

	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`,yd=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`,Sd=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;

#endif

#ifdef USE_MAP

	diffuseColor *= texture2D( map, uv );

#endif

#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, uv ).g;

#endif
`,Md=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	uniform mat3 uvTransform;

#endif

#ifdef USE_MAP

	uniform sampler2D map;

#endif

#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,Ed=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`,wd=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`,Td=`
#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	vColor *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		#if defined( USE_COLOR_ALPHA )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];

		#elif defined( USE_COLOR )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];

		#endif

	}

#endif
`,bd=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	#ifdef MORPHTARGETS_TEXTURE

		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];

		}

	#else

		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];

	#endif

#endif
`,Ad=`
#ifdef USE_MORPHTARGETS

	uniform float morphTargetBaseInfluence;

	#ifdef MORPHTARGETS_TEXTURE

		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;

		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {

			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;

			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );

		}

	#else

		#ifndef USE_MORPHNORMALS

			uniform float morphTargetInfluences[ 8 ];

		#else

			uniform float morphTargetInfluences[ 4 ];

		#endif

	#endif

#endif
`,Cd=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	#ifdef MORPHTARGETS_TEXTURE

		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];

		}

	#else

		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];

		#ifndef USE_MORPHNORMALS

			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];

		#endif

	#endif

#endif
`,Rd=`
float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;

#ifdef FLAT_SHADED

	// Workaround for Adreno GPUs not able to do dFdx( vViewPosition )

	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );

#else

	vec3 normal = normalize( vNormal );

	#ifdef DOUBLE_SIDED

		normal = normal * faceDirection;

	#endif

	#ifdef USE_TANGENT

		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );

		#ifdef DOUBLE_SIDED

			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;

		#endif

		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )

			mat3 vTBN = mat3( tangent, bitangent, normal );

		#endif

	#endif

#endif

// non perturbed normal for clearcoat among others

vec3 geometryNormal = normal;

`,Pd=`

#ifdef OBJECTSPACE_NORMALMAP

	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

	#ifdef FLIP_SIDED

		normal = - normal;

	#endif

	#ifdef DOUBLE_SIDED

		normal = normal * faceDirection;

	#endif

	normal = normalize( normalMatrix * normal );

#elif defined( TANGENTSPACE_NORMALMAP )

	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;

	#ifdef USE_TANGENT

		normal = normalize( vTBN * mapN );

	#else

		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );

	#endif

#elif defined( USE_BUMPMAP )

	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );

#endif
`,Dd=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,Ld=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,Fd=`
#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif
`,Id=`
#ifdef USE_NORMALMAP

	uniform sampler2D normalMap;
	uniform vec2 normalScale;

#endif

#ifdef OBJECTSPACE_NORMALMAP

	uniform mat3 normalMatrix;

#endif

#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )

	// Normal Mapping Without Precomputed Tangents
	// http://www.thetenthplanet.de/archives/1180

	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {

		// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988

		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );

		vec3 N = surf_norm; // normalized

		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );

		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;

		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );

		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );

	}

#endif
`,Od=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = geometryNormal;

#endif
`,Nd=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	#ifdef USE_TANGENT

		clearcoatNormal = normalize( vTBN * clearcoatMapN );

	#else

		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );

	#endif

#endif
`,Ud=`

#ifdef USE_CLEARCOATMAP

	uniform sampler2D clearcoatMap;

#endif

#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform sampler2D clearcoatRoughnessMap;

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;

#endif
`,Bd=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`,zd=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

// https://github.com/mrdoob/three.js/pull/22425
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`,Gd=`
vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}

vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}

const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)
const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)

const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );

const float ShiftRight8 = 1. / 256.;

vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8; // tidy overflow
	return r * PackUpscale;
}

float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}

vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}

vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}

// NOTE: viewZ/eyeZ is < 0 when in front of the camera per OpenGL conventions

float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}

// NOTE: https://twitter.com/gonnavis/status/1377183786949959682

float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}
`,kd=`
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`,Hd=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`,Vd=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`,Wd=`
#ifdef DITHERING

	// based on https://www.shadertoy.com/view/MslGR8
	vec3 dithering( vec3 color ) {
		//Calculate grid position
		float grid_position = rand( gl_FragCoord.xy );

		//Shift the individual colors differently, thus making it even harder to see the dithering pattern
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );

		//modify shift according to grid position.
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );

		//shift the color by dither_shift
		return color + dither_shift_RGB;
	}

#endif
`,Xd=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`,qd=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`,Yd=`
#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];

		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): create uniforms for area light shadows

	#endif
	*/

	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {

		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );

	}

	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {

		return unpackRGBATo2Half( texture2D( shadow, uv ) );

	}

	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){

		float occlusion = 1.0;

		vec2 distribution = texture2DDistribution( shadow, uv );

		float hard_shadow = step( compare , distribution.x ); // Hard Shadow

		if (hard_shadow != 1.0 ) {

			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality
			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed
			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );

		}
		return occlusion;

	}

	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

		float shadow = 1.0;

		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;

		// if ( something && something ) breaks ATI OpenGL shader compiler
		// if ( all( something, something ) ) using this instead

		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );

		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );

		bool frustumTest = all( frustumTestVec );

		if ( frustumTest ) {

		#if defined( SHADOWMAP_TYPE_PCF )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;

			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;

			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );

		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;

			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;

			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );

		#elif defined( SHADOWMAP_TYPE_VSM )

			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );

		#else // no percentage-closer filtering:

			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );

		#endif

		}

		return shadow;

	}

	// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D
	// vector suitable for 2D texture mapping. This code uses the following layout for the
	// 2D texture:
	//
	// xzXZ
	//  y Y
	//
	// Y - Positive y direction
	// y - Negative y direction
	// X - Positive x direction
	// x - Negative x direction
	// Z - Positive z direction
	// z - Negative z direction
	//
	// Source and test bed:
	// https://gist.github.com/tschw/da10c43c467ce8afd0c4

	vec2 cubeToUV( vec3 v, float texelSizeY ) {

		// Number of texels to avoid at the edge of each square

		vec3 absV = abs( v );

		// Intersect unit cube

		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;

		// Apply scale to avoid seams

		// two texels less per square (one texel will do for NEAREST)
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );

		// Unwrap

		// space: -1 ... 1 range for each square
		//
		// #X##		dim    := ( 4 , 2 )
		//  # #		center := ( 1 , 1 )

		vec2 planar = v.xy;

		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;

		if ( absV.z >= almostOne ) {

			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;

		} else if ( absV.x >= almostOne ) {

			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;

		} else if ( absV.y >= almostOne ) {

			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;

		}

		// Transform to UV space

		// scale := 0.5 / dim
		// translate := ( center + 0.5 ) / dim
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );

	}

	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );

		// for point lights, the uniform @vShadowCoord is re-purposed to hold
		// the vector from the light to the world-space position of the fragment.
		vec3 lightToPosition = shadowCoord.xyz;

		// dp = normalized distance from light to fragment position
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?
		dp += shadowBias;

		// bd3D = base direction 3D
		vec3 bd3D = normalize( lightToPosition );

		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )

			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;

			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );

		#else // no percentage-closer filtering

			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );

		#endif

	}

#endif
`,Zd=`
#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];

		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): uniforms for area light shadows

	#endif
	*/

#endif
`,Kd=`
#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0

		// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;

	#endif

	#if NUM_DIR_LIGHT_SHADOWS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {

		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update vAreaShadowCoord with area light info

	#endif
	*/

#endif
`,jd=`
float getShadowMask() {

	float shadow = 1.0;

	#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

	DirectionalLightShadow directionalLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

	SpotLightShadow spotLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {

		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	PointLightShadow pointLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update shadow for Area light

	#endif
	*/

	#endif

	return shadow;

}
`,$d=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`,Jd=`
#ifdef USE_SKINNING

	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;

	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;

	mat4 getBoneMatrix( const in float i ) {

		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );

		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );

		y = dy * ( y + 0.5 );

		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );

		mat4 bone = mat4( v1, v2, v3, v4 );

		return bone;

	}

#endif
`,Qd=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`,ep=`
#ifdef USE_SKINNING

	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;

	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;

	#ifdef USE_TANGENT

		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;

	#endif

#endif
`,tp=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`,ip=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`,np=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`,rp=`
#ifndef saturate
// <common> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif

uniform float toneMappingExposure;

// exposure only
vec3 LinearToneMapping( vec3 color ) {

	return toneMappingExposure * color;

}

// source: https://www.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf
vec3 ReinhardToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );

}

// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/
vec3 OptimizedCineonToneMapping( vec3 color ) {

	// optimized filmic operator by Jim Hejl and Richard Burgess-Dawson
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );

}

// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs
vec3 RRTAndODTFit( vec3 v ) {

	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;

}

// this implementation of ACES is modified to accommodate a brighter viewing environment.
// the scale factor of 1/0.6 is subjective. see discussion in #19621.

vec3 ACESFilmicToneMapping( vec3 color ) {

	// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source
		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);

	// ODT_SAT => XYZ => D60_2_D65 => sRGB
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source
		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);

	color *= toneMappingExposure / 0.6;

	color = ACESInputMat * color;

	// Apply RRT and ODT
	color = RRTAndODTFit( color );

	color = ACESOutputMat * color;

	// Clamp to [0, 1]
	return saturate( color );

}

vec3 CustomToneMapping( vec3 color ) { return color; }
`,sp=`
#ifdef USE_TRANSMISSION

	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;

	#ifdef USE_TRANSMISSIONMAP

		transmissionFactor *= texture2D( transmissionMap, vUv ).r;

	#endif

	#ifdef USE_THICKNESSMAP

		thicknessFactor *= texture2D( thicknessMap, vUv ).g;

	#endif

	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );

	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );

	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif
`,ap=`
#ifdef USE_TRANSMISSION

	// Transmission code is based on glTF-Sampler-Viewer
	// https://github.com/KhronosGroup/glTF-Sample-Viewer

	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		uniform sampler2D transmissionMap;

	#endif

	#ifdef USE_THICKNESSMAP

		uniform sampler2D thicknessMap;

	#endif

	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;

	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;

	varying vec3 vWorldPosition;

	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {

		// Direction of refracted light.
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );

		// Compute rotation-independant scaling of the model matrix.
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );

		// The thickness is specified in local space.
		return normalize( refractionVector ) * thickness * modelScale;

	}

	float applyIorToRoughness( const in float roughness, const in float ior ) {

		// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
		// an IOR of 1.5 results in the default amount of microfacet refraction.
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );

	}

	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {

		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );

		#ifdef texture2DLodEXT

			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );

		#else

			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );

		#endif

	}

	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {

		if ( attenuationDistance == 0.0 ) {

			// Attenuation distance is +\u221E (which we indicate by zero), i.e. the transmitted color is not attenuated at all.
			return radiance;

		} else {

			// Compute light attenuation using Beer's law.
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
			return transmittance * radiance;

		}

	}

	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {

		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;

		// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;

		// Sample framebuffer to get pixel the refracted ray hits.
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );

		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );

		// Get the specular component.
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );

		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );

	}
#endif
`,op=`
#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )

	varying vec2 vUv;

#endif
`,lp=`
#ifdef USE_UV

	#ifdef UVS_VERTEX_ONLY

		vec2 vUv;

	#else

		varying vec2 vUv;

	#endif

	uniform mat3 uvTransform;

#endif
`,cp=`
#ifdef USE_UV

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

#endif
`,up=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	varying vec2 vUv2;

#endif
`,fp=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	attribute vec2 uv2;
	varying vec2 vUv2;

	uniform mat3 uv2Transform;

#endif
`,hp=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;

#endif
`,dp=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`;const pp=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,mp=`
uniform sampler2D t2D;

varying vec2 vUv;

void main() {

	gl_FragColor = texture2D( t2D, vUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)

		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );

	#endif

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,gp=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,_p=`
#include <envmap_common_pars_fragment>
uniform float opacity;

varying vec3 vWorldDirection;

#include <cube_uv_reflection_fragment>

void main() {

	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>

	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,vp=`
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

// This is used for computing an equivalent of gl_FragCoord.z that is as high precision as possible.
// Some platforms compute gl_FragCoord at a lower precision which makes the manually computed value better for
// depth-based postprocessing effects. Reproduced on iPad with A10 processor / iPadOS 13.3.1.
varying vec2 vHighPrecisionZW;

void main() {

	#include <uv_vertex>

	#include <skinbase_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vHighPrecisionZW = gl_Position.zw;

}
`,xp=`
#if DEPTH_PACKING == 3200

	uniform float opacity;

#endif

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

varying vec2 vHighPrecisionZW;

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#if DEPTH_PACKING == 3200

		diffuseColor.a = opacity;

	#endif

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	#include <logdepthbuf_fragment>

	// Higher precision equivalent of gl_FragCoord.z. This assumes depthRange has been left to its default values.
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );

	#elif DEPTH_PACKING == 3201

		gl_FragColor = packDepthToRGBA( fragCoordZ );

	#endif

}
`,yp=`
#define DISTANCE

varying vec3 vWorldPosition;

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <skinbase_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>

	vWorldPosition = worldPosition.xyz;

}
`,Sp=`
#define DISTANCE

uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>

void main () {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = packDepthToRGBA( dist );

}
`,Mp=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,Ep=`
uniform sampler2D tEquirect;

varying vec3 vWorldDirection;

#include <common>

void main() {

	vec3 direction = normalize( vWorldDirection );

	vec2 sampleUV = equirectUv( direction );

	gl_FragColor = texture2D( tEquirect, sampleUV );

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,wp=`
uniform float scale;
attribute float lineDistance;

varying float vLineDistance;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	vLineDistance = scale * lineDistance;

	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,Tp=`
uniform vec3 diffuse;
uniform float opacity;

uniform float dashSize;
uniform float totalSize;

varying float vLineDistance;

#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	if ( mod( vLineDistance, totalSize ) > dashSize ) {

		discard;

	}

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <color_fragment>

	outgoingLight = diffuseColor.rgb; // simple shader

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,bp=`
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>

	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>

}
`,Ap=`
uniform vec3 diffuse;
uniform float opacity;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );

	// accumulation (baked indirect lighting only)
	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;

	#else

		reflectedLight.indirectDiffuse += vec3( 1.0 );

	#endif

	// modulation
	#include <aomap_fragment>

	reflectedLight.indirectDiffuse *= diffuseColor.rgb;

	vec3 outgoingLight = reflectedLight.indirectDiffuse;

	#include <envmap_fragment>

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Cp=`
#define LAMBERT

varying vec3 vLightFront;
varying vec3 vIndirectFront;

#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}
`,Rp=`
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

varying vec3 vLightFront;
varying vec3 vIndirectFront;

#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif


#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>

	// accumulation

	#ifdef DOUBLE_SIDED

		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;

	#else

		reflectedLight.indirectDiffuse += vIndirectFront;

	#endif

	#include <lightmap_fragment>

	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );

	#ifdef DOUBLE_SIDED

		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;

	#else

		reflectedLight.directDiffuse = vLightFront;

	#endif

	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();

	// modulation

	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <envmap_fragment>

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}
`,Pp=`
#define MATCAP

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>

#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

	vViewPosition = - mvPosition.xyz;

}
`,Dp=`
#define MATCAP

uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;

varying vec3 vViewPosition;

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks

	#ifdef USE_MATCAP

		vec4 matcapColor = texture2D( matcap, uv );

	#else

		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 ); // default if matcap is missing

	#endif

	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Lp=`
#define NORMAL

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

	varying vec3 vViewPosition;

#endif

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

	vViewPosition = - mvPosition.xyz;

#endif

}
`,Fp=`
#define NORMAL

uniform float opacity;

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

	varying vec3 vViewPosition;

#endif

#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );

	#ifdef OPAQUE

		gl_FragColor.a = 1.0;

	#endif

}
`,Ip=`
#define PHONG

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,Op=`
#define PHONG

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Np=`
#define STANDARD

varying vec3 vViewPosition;

#ifdef USE_TRANSMISSION

	varying vec3 vWorldPosition;

#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

#ifdef USE_TRANSMISSION

	vWorldPosition = worldPosition.xyz;

#endif
}
`,Up=`
#define STANDARD

#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef IOR
	uniform float ior;
#endif

#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;

	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif

	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif

#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif

#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif

#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;

	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif

	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif

varying vec3 vViewPosition;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;

	#include <transmission_fragment>

	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

	#ifdef USE_SHEEN

		// Sheen energy compensation approximation calculation can be found at the end of
		// https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );

		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;

	#endif

	#ifdef USE_CLEARCOAT

		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );

		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );

		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;

	#endif

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Bp=`
#define TOON

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,zp=`
#define TOON

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Gp=`
uniform float size;
uniform float scale;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>

	gl_PointSize = size;

	#ifdef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );

	#endif

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>

}
`,kp=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,Hp=`
#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>

void main() {

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,Vp=`
uniform vec3 color;
uniform float opacity;

#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>

void main() {

	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`,Wp=`
uniform float rotation;
uniform vec2 center;

#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );

	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

	#ifndef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) scale *= - mvPosition.z;

	#endif

	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;

	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;

	mvPosition.xy += rotatedPosition;

	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,Xp=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`,Ae={alphamap_fragment:_h,alphamap_pars_fragment:vh,alphatest_fragment:xh,alphatest_pars_fragment:yh,aomap_fragment:Sh,aomap_pars_fragment:Mh,begin_vertex:Eh,beginnormal_vertex:wh,bsdfs:Th,iridescence_fragment:bh,bumpmap_pars_fragment:Ah,clipping_planes_fragment:Ch,clipping_planes_pars_fragment:Rh,clipping_planes_pars_vertex:Ph,clipping_planes_vertex:Dh,color_fragment:Lh,color_pars_fragment:Fh,color_pars_vertex:Ih,color_vertex:Oh,common:Nh,cube_uv_reflection_fragment:Uh,defaultnormal_vertex:Bh,displacementmap_pars_vertex:zh,displacementmap_vertex:Gh,emissivemap_fragment:kh,emissivemap_pars_fragment:Hh,encodings_fragment:Vh,encodings_pars_fragment:Wh,envmap_fragment:Xh,envmap_common_pars_fragment:qh,envmap_pars_fragment:Yh,envmap_pars_vertex:Zh,envmap_physical_pars_fragment:sd,envmap_vertex:Kh,fog_vertex:jh,fog_pars_vertex:$h,fog_fragment:Jh,fog_pars_fragment:Qh,gradientmap_pars_fragment:ed,lightmap_fragment:td,lightmap_pars_fragment:id,lights_lambert_vertex:nd,lights_pars_begin:rd,lights_toon_fragment:ad,lights_toon_pars_fragment:od,lights_phong_fragment:ld,lights_phong_pars_fragment:cd,lights_physical_fragment:ud,lights_physical_pars_fragment:fd,lights_fragment_begin:hd,lights_fragment_maps:dd,lights_fragment_end:pd,logdepthbuf_fragment:md,logdepthbuf_pars_fragment:gd,logdepthbuf_pars_vertex:_d,logdepthbuf_vertex:vd,map_fragment:xd,map_pars_fragment:yd,map_particle_fragment:Sd,map_particle_pars_fragment:Md,metalnessmap_fragment:Ed,metalnessmap_pars_fragment:wd,morphcolor_vertex:Td,morphnormal_vertex:bd,morphtarget_pars_vertex:Ad,morphtarget_vertex:Cd,normal_fragment_begin:Rd,normal_fragment_maps:Pd,normal_pars_fragment:Dd,normal_pars_vertex:Ld,normal_vertex:Fd,normalmap_pars_fragment:Id,clearcoat_normal_fragment_begin:Od,clearcoat_normal_fragment_maps:Nd,clearcoat_pars_fragment:Ud,iridescence_pars_fragment:Bd,output_fragment:zd,packing:Gd,premultiplied_alpha_fragment:kd,project_vertex:Hd,dithering_fragment:Vd,dithering_pars_fragment:Wd,roughnessmap_fragment:Xd,roughnessmap_pars_fragment:qd,shadowmap_pars_fragment:Yd,shadowmap_pars_vertex:Zd,shadowmap_vertex:Kd,shadowmask_pars_fragment:jd,skinbase_vertex:$d,skinning_pars_vertex:Jd,skinning_vertex:Qd,skinnormal_vertex:ep,specularmap_fragment:tp,specularmap_pars_fragment:ip,tonemapping_fragment:np,tonemapping_pars_fragment:rp,transmission_fragment:sp,transmission_pars_fragment:ap,uv_pars_fragment:op,uv_pars_vertex:lp,uv_vertex:cp,uv2_pars_fragment:up,uv2_pars_vertex:fp,uv2_vertex:hp,worldpos_vertex:dp,background_vert:pp,background_frag:mp,cube_vert:gp,cube_frag:_p,depth_vert:vp,depth_frag:xp,distanceRGBA_vert:yp,distanceRGBA_frag:Sp,equirect_vert:Mp,equirect_frag:Ep,linedashed_vert:wp,linedashed_frag:Tp,meshbasic_vert:bp,meshbasic_frag:Ap,meshlambert_vert:Cp,meshlambert_frag:Rp,meshmatcap_vert:Pp,meshmatcap_frag:Dp,meshnormal_vert:Lp,meshnormal_frag:Fp,meshphong_vert:Ip,meshphong_frag:Op,meshphysical_vert:Np,meshphysical_frag:Up,meshtoon_vert:Bp,meshtoon_frag:zp,points_vert:Gp,points_frag:kp,shadow_vert:Hp,shadow_frag:Vp,sprite_vert:Wp,sprite_frag:Xp},ae={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new hi},uv2Transform:{value:new hi},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new hi}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new hi}}},ci={basic:{uniforms:ht([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:ht([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.fog,ae.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:ht([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:ht([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:ht([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:ht([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:ht([ae.points,ae.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:ht([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:ht([ae.common,ae.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:ht([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.meshnormal_vert,fragmentShader:Ae.meshnormal_frag},sprite:{uniforms:ht([ae.sprite,ae.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new hi},t2D:{value:null}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},cube:{uniforms:ht([ae.envmap,{opacity:{value:1}}]),vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distanceRGBA:{uniforms:ht([ae.common,ae.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distanceRGBA_vert,fragmentShader:Ae.distanceRGBA_frag},shadow:{uniforms:ht([ae.lights,ae.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};ci.physical={uniforms:ht([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ze(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};function qp(o,e,t,i,n,r){const a=new Fe(0);let s=n===!0?0:1,l,u,c=null,p=0,h=null;function f(d,m){let _=!1,E=m.isScene===!0?m.background:null;E&&E.isTexture&&(E=e.get(E));const T=o.xr,x=T.getSession&&T.getSession();x&&x.environmentBlendMode==="additive"&&(E=null),E===null?g(a,s):E&&E.isColor&&(g(E,1),_=!0),(o.autoClear||_)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),E&&(E.isCubeTexture||E.mapping===As)?(u===void 0&&(u=new ti(new zr(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:rr(ci.cube.uniforms),vertexShader:ci.cube.vertexShader,fragmentShader:ci.cube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(v,S,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,(c!==E||p!==E.version||h!==o.toneMapping)&&(u.material.needsUpdate=!0,c=E,p=E.version,h=o.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new ti(new Gr(2,2),new Pi({name:"BackgroundMaterial",uniforms:rr(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(c!==E||p!==E.version||h!==o.toneMapping)&&(l.material.needsUpdate=!0,c=E,p=E.version,h=o.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function g(d,m){t.buffers.color.setClear(d.r,d.g,d.b,m,r)}return{getClearColor:function(){return a},setClearColor:function(d,m=1){a.set(d),s=m,g(a,s)},getClearAlpha:function(){return s},setClearAlpha:function(d){s=d,g(a,s)},render:f}}function Yp(o,e,t,i){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,s={},l=m(null);let u=l,c=!1;function p(P,N,I,z,k){let B=!1;if(a){const W=d(z,I,N);u!==W&&(u=W,f(u.object)),B=_(P,z,I,k),B&&E(P,z,I,k)}else{const W=N.wireframe===!0;(u.geometry!==z.id||u.program!==I.id||u.wireframe!==W)&&(u.geometry=z.id,u.program=I.id,u.wireframe=W,B=!0)}k!==null&&t.update(k,o.ELEMENT_ARRAY_BUFFER),(B||c)&&(c=!1,y(P,N,I,z),k!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function h(){return i.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function f(P){return i.isWebGL2?o.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return i.isWebGL2?o.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function d(P,N,I){const z=I.wireframe===!0;let k=s[P.id];k===void 0&&(k={},s[P.id]=k);let B=k[N.id];B===void 0&&(B={},k[N.id]=B);let W=B[z];return W===void 0&&(W=m(h()),B[z]=W),W}function m(P){const N=[],I=[],z=[];for(let k=0;k<n;k++)N[k]=0,I[k]=0,z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:I,attributeDivisors:z,object:P,attributes:{},index:null}}function _(P,N,I,z){const k=u.attributes,B=N.attributes;let W=0;const J=I.getAttributes();for(const Z in J)if(J[Z].location>=0){const ie=k[Z];let oe=B[Z];if(oe===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(oe=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(oe=P.instanceColor)),ie===void 0||ie.attribute!==oe||oe&&ie.data!==oe.data)return!0;W++}return u.attributesNum!==W||u.index!==z}function E(P,N,I,z){const k={},B=N.attributes;let W=0;const J=I.getAttributes();for(const Z in J)if(J[Z].location>=0){let ie=B[Z];ie===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(ie=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(ie=P.instanceColor));const oe={};oe.attribute=ie,ie&&ie.data&&(oe.data=ie.data),k[Z]=oe,W++}u.attributes=k,u.attributesNum=W,u.index=z}function T(){const P=u.newAttributes;for(let N=0,I=P.length;N<I;N++)P[N]=0}function x(P){v(P,0)}function v(P,N){const I=u.newAttributes,z=u.enabledAttributes,k=u.attributeDivisors;I[P]=1,z[P]===0&&(o.enableVertexAttribArray(P),z[P]=1),k[P]!==N&&((i.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,N),k[P]=N)}function S(){const P=u.newAttributes,N=u.enabledAttributes;for(let I=0,z=N.length;I<z;I++)N[I]!==P[I]&&(o.disableVertexAttribArray(I),N[I]=0)}function M(P,N,I,z,k,B){i.isWebGL2===!0&&(I===o.INT||I===o.UNSIGNED_INT)?o.vertexAttribIPointer(P,N,I,k,B):o.vertexAttribPointer(P,N,I,z,k,B)}function y(P,N,I,z){if(i.isWebGL2===!1&&(P.isInstancedMesh||z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;T();const k=z.attributes,B=I.getAttributes(),W=N.defaultAttributeValues;for(const J in B){const Z=B[J];if(Z.location>=0){let j=k[J];if(j===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(j=P.instanceColor)),j!==void 0){const ie=j.normalized,oe=j.itemSize,U=t.get(j);if(U===void 0)continue;const Te=U.buffer,Se=U.type,ye=U.bytesPerElement;if(j.isInterleavedBufferAttribute){const le=j.data,Re=le.stride,me=j.offset;if(le.isInstancedInterleavedBuffer){for(let ge=0;ge<Z.locationSize;ge++)v(Z.location+ge,le.meshPerAttribute);P.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ge=0;ge<Z.locationSize;ge++)x(Z.location+ge);o.bindBuffer(o.ARRAY_BUFFER,Te);for(let ge=0;ge<Z.locationSize;ge++)M(Z.location+ge,oe/Z.locationSize,Se,ie,Re*ye,(me+oe/Z.locationSize*ge)*ye)}else{if(j.isInstancedBufferAttribute){for(let le=0;le<Z.locationSize;le++)v(Z.location+le,j.meshPerAttribute);P.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let le=0;le<Z.locationSize;le++)x(Z.location+le);o.bindBuffer(o.ARRAY_BUFFER,Te);for(let le=0;le<Z.locationSize;le++)M(Z.location+le,oe/Z.locationSize,Se,ie,oe*ye,oe/Z.locationSize*le*ye)}}else if(W!==void 0){const ie=W[J];if(ie!==void 0)switch(ie.length){case 2:o.vertexAttrib2fv(Z.location,ie);break;case 3:o.vertexAttrib3fv(Z.location,ie);break;case 4:o.vertexAttrib4fv(Z.location,ie);break;default:o.vertexAttrib1fv(Z.location,ie)}}}}S()}function w(){L();for(const P in s){const N=s[P];for(const I in N){const z=N[I];for(const k in z)g(z[k].object),delete z[k];delete N[I]}delete s[P]}}function A(P){if(s[P.id]===void 0)return;const N=s[P.id];for(const I in N){const z=N[I];for(const k in z)g(z[k].object),delete z[k];delete N[I]}delete s[P.id]}function b(P){for(const N in s){const I=s[N];if(I[P.id]===void 0)continue;const z=I[P.id];for(const k in z)g(z[k].object),delete z[k];delete I[P.id]}}function L(){F(),c=!0,u!==l&&(u=l,f(u.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:L,resetDefaultState:F,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:T,enableAttribute:x,disableUnusedAttributes:S}}function Zp(o,e,t,i){const n=i.isWebGL2;let r;function a(u){r=u}function s(u,c){o.drawArrays(r,u,c),t.update(c,r,1)}function l(u,c,p){if(p===0)return;let h,f;if(n)h=o,f="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[f](r,u,c,p),t.update(c,r,p)}this.setMode=a,this.render=s,this.renderInstances=l}function Kp(o,e,t){let i;function n(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=o.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(M){if(M==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext!="undefined"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&o instanceof WebGL2ComputeRenderingContext;let s=t.precision!==void 0?t.precision:"highp";const l=r(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const u=a||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,p=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),h=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=o.getParameter(o.MAX_TEXTURE_SIZE),g=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),d=o.getParameter(o.MAX_VERTEX_ATTRIBS),m=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),_=o.getParameter(o.MAX_VARYING_VECTORS),E=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),T=h>0,x=a||e.has("OES_texture_float"),v=T&&x,S=a?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:n,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:c,maxTextures:p,maxVertexTextures:h,maxTextureSize:f,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:E,vertexTextures:T,floatFragmentTextures:x,floatVertexTextures:v,maxSamples:S}}function jp(o){const e=this;let t=null,i=0,n=!1,r=!1;const a=new sn,s=new hi,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h,f){const g=p.length!==0||h||i!==0||n;return n=h,t=c(p,f,0),i=p.length,g},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1,u()},this.setState=function(p,h,f){const g=p.clippingPlanes,d=p.clipIntersection,m=p.clipShadows,_=o.get(p);if(!n||g===null||g.length===0||r&&!m)r?c(null):u();else{const E=r?0:i,T=E*4;let x=_.clippingState||null;l.value=x,x=c(g,h,T,f);for(let v=0;v!==T;++v)x[v]=t[v];_.clippingState=x,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=E}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(p,h,f,g){const d=p!==null?p.length:0;let m=null;if(d!==0){if(m=l.value,g!==!0||m===null){const _=f+d*4,E=h.matrixWorldInverse;s.getNormalMatrix(E),(m===null||m.length<_)&&(m=new Float32Array(_));for(let T=0,x=f;T!==d;++T,x+=4)a.copy(p[T]).applyMatrix4(E,s),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,m}}let zn;class Rc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zn===void 0&&(zn=xs("canvas")),zn.width=e.width,zn.height=e.height;const i=zn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=zn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=xs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=mn(r[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(mn(t[i]/255)*255):t[i]=mn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Pc{constructor(e=null){this.isSource=!0,this.uuid=Or(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,s=n.length;a<s;a++)n[a].isDataTexture?r.push(ua(n[a].image)):r.push(ua(n[a]))}else r=ua(n);i.url=r}return t||(e.images[this.uuid]=i),i}}function ua(o){return typeof HTMLImageElement!="undefined"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&o instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&o instanceof ImageBitmap?Rc.getDataURL(o):o.data?{data:Array.prototype.slice.call(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $p=0;class ni extends ur{constructor(e=ni.DEFAULT_IMAGE,t=ni.DEFAULT_MAPPING,i=ei,n=ei,r=Ht,a=Cs,s=Wt,l=Sn,u=1,c=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=Or(),this.name="",this.source=new Pc(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=s,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new hi,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oa:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case Na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oa:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case Na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}ni.DEFAULT_IMAGE=null;ni.DEFAULT_MAPPING=xc;class Ri extends ur{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const n={width:e,height:t,depth:1};this.texture=new ni(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ht,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Pc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dc extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Vt extends Dc{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Uo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Us*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uo*2*Math.atan(Math.tan(Us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Us*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;r+=a.offsetX*n/l,t-=a.offsetY*i/u,n*=a.width/l,i*=a.height/u}const s=this.filmOffset;s!==0&&(r+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gn=90,kn=1;class Jp extends Rt{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const n=new Vt(Gn,kn,e,t);n.layers=this.layers,n.up.set(0,-1,0),n.lookAt(new H(1,0,0)),this.add(n);const r=new Vt(Gn,kn,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new H(-1,0,0)),this.add(r);const a=new Vt(Gn,kn,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new H(0,1,0)),this.add(a);const s=new Vt(Gn,kn,e,t);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(new H(0,-1,0)),this.add(s);const l=new Vt(Gn,kn,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new H(0,0,1)),this.add(l);const u=new Vt(Gn,kn,e,t);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new H(0,0,-1)),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[n,r,a,s,l,u]=this.children,c=e.getRenderTarget(),p=e.toneMapping,h=e.xr.enabled;e.toneMapping=Ci,e.xr.enabled=!1;const f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,n),e.setRenderTarget(i,1),e.render(t,r),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,s),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=f,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=p,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Lc extends ni{constructor(e,t,i,n,r,a,s,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:tr,super(e,t,i,n,r,a,s,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qp extends Ri{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Lc(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new zr(5,5,5),r=new Pi({name:"CubemapFromEquirect",uniforms:rr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ii,blending:Xi});r.uniforms.tEquirect.value=t;const a=new ti(n,r),s=t.minFilter;return t.minFilter===Cs&&(t.minFilter=Ht),new Jp(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(r)}}function em(o){let e=new WeakMap;function t(a,s){return s===Fa?a.mapping=tr:s===Ia&&(a.mapping=ir),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const s=a.mapping;if(s===Fa||s===Ia)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new Qp(l.height/2);return u.fromEquirectangularTexture(o,a),e.set(a,u),a.addEventListener("dispose",n),t(u.texture,a.mapping)}else return null}}return a}function n(a){const s=a.target;s.removeEventListener("dispose",n);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Fc extends Dc{constructor(e=-1,t=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-e,a=i+e,s=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,s-=c*this.view.offsetY,l=s-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,s,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Yn=4,Al=[.125,.215,.35,.446,.526,.582],ln=20,fa=new Fc,Cl=new Fe;let ha=null;const an=(1+Math.sqrt(5))/2,Hn=1/an,Rl=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,an,Hn),new H(0,an,-Hn),new H(Hn,0,an),new H(-Hn,0,an),new H(an,Hn,0),new H(-an,Hn,0)];class Pl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){ha=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,n,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ll(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ha),e.scissorTest=!1,cs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===tr||e.mapping===ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ha=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:Ar,format:Wt,encoding:Mn,depthBuffer:!1},n=Dl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dl(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tm(r)),this._blurMaterial=im(r,e,t)}return n}_compileMaterial(e){const t=new ti(this._lodPlanes[0],e);this._renderer.compile(t,fa)}_sceneToCubeUV(e,t,i,n){const s=new Vt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,p=c.autoClear,h=c.toneMapping;c.getClearColor(Cl),c.toneMapping=Ci,c.autoClear=!1;const f=new no({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1}),g=new ti(new zr,f);let d=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,d=!0):(f.color.copy(Cl),d=!0);for(let _=0;_<6;_++){const E=_%3;E===0?(s.up.set(0,l[_],0),s.lookAt(u[_],0,0)):E===1?(s.up.set(0,0,l[_]),s.lookAt(0,u[_],0)):(s.up.set(0,l[_],0),s.lookAt(0,0,u[_]));const T=this._cubeSize;cs(n,E*T,_>2?T:0,T,T),c.setRenderTarget(n),d&&c.render(g,s),c.render(e,s)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=h,c.autoClear=p,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===tr||e.mapping===ir;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ll());const r=n?this._cubemapMaterial:this._equirectMaterial,a=new ti(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=e;const l=this._cubeSize;cs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,fa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const r=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=Rl[(n-1)%Rl.length];this._blur(e,n-1,n,r,a)}t.autoClear=i}_blur(e,t,i,n,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",r),this._halfBlur(a,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,a,s){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,p=new ti(this._lodPlanes[n],u),h=u.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ln-1),d=r/g,m=isFinite(r)?1+Math.floor(c*d):ln;m>ln&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ln}`);const _=[];let E=0;for(let M=0;M<ln;++M){const y=M/d,w=Math.exp(-y*y/2);_.push(w),M===0?E+=w:M<m&&(E+=2*w)}for(let M=0;M<_.length;M++)_[M]=_[M]/E;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=_,h.latitudinal.value=a==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:T}=this;h.dTheta.value=g,h.mipInt.value=T-i;const x=this._sizeLods[n],v=3*x*(n>T-Yn?n-T+Yn:0),S=4*(this._cubeSize-x);cs(t,v,S,3*x,2*x),l.setRenderTarget(t),l.render(p,fa)}}function tm(o){const e=[],t=[],i=[];let n=o;const r=o-Yn+1+Al.length;for(let a=0;a<r;a++){const s=Math.pow(2,n);t.push(s);let l=1/s;a>o-Yn?l=Al[a-o+Yn-1]:a===0&&(l=0),i.push(l);const u=1/(s-2),c=-u,p=1+u,h=[c,c,p,c,p,p,c,c,p,p,c,p],f=6,g=6,d=3,m=2,_=1,E=new Float32Array(d*g*f),T=new Float32Array(m*g*f),x=new Float32Array(_*g*f);for(let S=0;S<f;S++){const M=S%3*2/3-1,y=S>2?0:-1,w=[M,y,0,M+2/3,y,0,M+2/3,y+1,0,M,y,0,M+2/3,y+1,0,M,y+1,0];E.set(w,d*g*S),T.set(h,m*g*S);const A=[S,S,S,S,S,S];x.set(A,_*g*S)}const v=new ji;v.setAttribute("position",new pi(E,d)),v.setAttribute("uv",new pi(T,m)),v.setAttribute("faceIndex",new pi(x,_)),e.push(v),n>Yn&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Dl(o,e,t){const i=new Ri(o,e,t);return i.texture.mapping=As,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function cs(o,e,t,i,n){o.viewport.set(e,t,i,n),o.scissor.set(e,t,i,n)}function im(o,e,t){const i=new Float32Array(ln),n=new H(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:ln,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Ll(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Fl(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function ro(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nm(o){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const l=s.mapping,u=l===Fa||l===Ia,c=l===tr||l===ir;if(u||c)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let p=e.get(s);return t===null&&(t=new Pl(o)),p=u?t.fromEquirectangular(s,p):t.fromCubemap(s,p),e.set(s,p),p.texture}else{if(e.has(s))return e.get(s).texture;{const p=s.image;if(u&&p&&p.height>0||c&&p&&n(p)){t===null&&(t=new Pl(o));const h=u?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,h),s.addEventListener("dispose",r),h.texture}else return null}}}return s}function n(s){let l=0;const u=6;for(let c=0;c<u;c++)s[c]!==void 0&&l++;return l===u}function r(s){const l=s.target;l.removeEventListener("dispose",r);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function rm(o){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=o.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function sm(o,e,t,i){const n={},r=new WeakMap;function a(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete n[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function s(p,h){return n[h.id]===!0||(h.addEventListener("dispose",a),n[h.id]=!0,t.memory.geometries++),h}function l(p){const h=p.attributes;for(const g in h)e.update(h[g],o.ARRAY_BUFFER);const f=p.morphAttributes;for(const g in f){const d=f[g];for(let m=0,_=d.length;m<_;m++)e.update(d[m],o.ARRAY_BUFFER)}}function u(p){const h=[],f=p.index,g=p.attributes.position;let d=0;if(f!==null){const E=f.array;d=f.version;for(let T=0,x=E.length;T<x;T+=3){const v=E[T+0],S=E[T+1],M=E[T+2];h.push(v,S,S,M,M,v)}}else{const E=g.array;d=g.version;for(let T=0,x=E.length/3-1;T<x;T+=3){const v=T+0,S=T+1,M=T+2;h.push(v,S,S,M,M,v)}}const m=new(Cc(h)?Ac:bc)(h,1);m.version=d;const _=r.get(p);_&&e.remove(_),r.set(p,m)}function c(p){const h=r.get(p);if(h){const f=p.index;f!==null&&h.version<f.version&&u(p)}else u(p);return r.get(p)}return{get:s,update:l,getWireframeAttribute:c}}function am(o,e,t,i){const n=i.isWebGL2;let r;function a(h){r=h}let s,l;function u(h){s=h.type,l=h.bytesPerElement}function c(h,f){o.drawElements(r,f,s,h*l),t.update(f,r,1)}function p(h,f,g){if(g===0)return;let d,m;if(n)d=o,m="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,f,s,h*l,g),t.update(f,r,g)}this.setMode=a,this.setIndex=u,this.render=c,this.renderInstances=p}function om(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,s){switch(t.calls++,a){case o.TRIANGLES:t.triangles+=s*(r/3);break;case o.LINES:t.lines+=s*(r/2);break;case o.LINE_STRIP:t.lines+=s*(r-1);break;case o.LINE_LOOP:t.lines+=s*r;break;case o.POINTS:t.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}class Ic extends ni{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=wt,this.minFilter=wt,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}function lm(o,e){return o[0]-e[0]}function cm(o,e){return Math.abs(e[1])-Math.abs(o[1])}function da(o,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),o.divideScalar(t)}function um(o,e,t){const i={},n=new Float32Array(8),r=new WeakMap,a=new mt,s=[];for(let u=0;u<8;u++)s[u]=[u,0];function l(u,c,p,h){const f=u.morphTargetInfluences;if(e.isWebGL2===!0){const d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=d!==void 0?d.length:0;let _=r.get(c);if(_===void 0||_.count!==m){let I=function(){P.dispose(),r.delete(c),c.removeEventListener("dispose",I)};var g=I;_!==void 0&&_.texture.dispose();const x=c.morphAttributes.position!==void 0,v=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,M=c.morphAttributes.position||[],y=c.morphAttributes.normal||[],w=c.morphAttributes.color||[];let A=0;x===!0&&(A=1),v===!0&&(A=2),S===!0&&(A=3);let b=c.attributes.position.count*A,L=1;b>e.maxTextureSize&&(L=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const F=new Float32Array(b*L*4*m),P=new Ic(F,b,L,m);P.type=un,P.needsUpdate=!0;const N=A*4;for(let z=0;z<m;z++){const k=M[z],B=y[z],W=w[z],J=b*L*4*z;for(let Z=0;Z<k.count;Z++){const j=Z*N;x===!0&&(a.fromBufferAttribute(k,Z),k.normalized===!0&&da(a,k),F[J+j+0]=a.x,F[J+j+1]=a.y,F[J+j+2]=a.z,F[J+j+3]=0),v===!0&&(a.fromBufferAttribute(B,Z),B.normalized===!0&&da(a,B),F[J+j+4]=a.x,F[J+j+5]=a.y,F[J+j+6]=a.z,F[J+j+7]=0),S===!0&&(a.fromBufferAttribute(W,Z),W.normalized===!0&&da(a,W),F[J+j+8]=a.x,F[J+j+9]=a.y,F[J+j+10]=a.z,F[J+j+11]=W.itemSize===4?a.w:1)}}_={count:m,texture:P,size:new ze(b,L)},r.set(c,_),c.addEventListener("dispose",I)}let E=0;for(let x=0;x<f.length;x++)E+=f[x];const T=c.morphTargetsRelative?1:1-E;h.getUniforms().setValue(o,"morphTargetBaseInfluence",T),h.getUniforms().setValue(o,"morphTargetInfluences",f),h.getUniforms().setValue(o,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}else{const d=f===void 0?0:f.length;let m=i[c.id];if(m===void 0||m.length!==d){m=[];for(let v=0;v<d;v++)m[v]=[v,0];i[c.id]=m}for(let v=0;v<d;v++){const S=m[v];S[0]=v,S[1]=f[v]}m.sort(cm);for(let v=0;v<8;v++)v<d&&m[v][1]?(s[v][0]=m[v][0],s[v][1]=m[v][1]):(s[v][0]=Number.MAX_SAFE_INTEGER,s[v][1]=0);s.sort(lm);const _=c.morphAttributes.position,E=c.morphAttributes.normal;let T=0;for(let v=0;v<8;v++){const S=s[v],M=S[0],y=S[1];M!==Number.MAX_SAFE_INTEGER&&y?(_&&c.getAttribute("morphTarget"+v)!==_[M]&&c.setAttribute("morphTarget"+v,_[M]),E&&c.getAttribute("morphNormal"+v)!==E[M]&&c.setAttribute("morphNormal"+v,E[M]),n[v]=y,T+=y):(_&&c.hasAttribute("morphTarget"+v)===!0&&c.deleteAttribute("morphTarget"+v),E&&c.hasAttribute("morphNormal"+v)===!0&&c.deleteAttribute("morphNormal"+v),n[v]=0)}const x=c.morphTargetsRelative?1:1-T;h.getUniforms().setValue(o,"morphTargetBaseInfluence",x),h.getUniforms().setValue(o,"morphTargetInfluences",n)}}return{update:l}}function fm(o,e,t,i){let n=new WeakMap;function r(l){const u=i.render.frame,c=l.geometry,p=e.get(l,c);return n.get(p)!==u&&(e.update(p),n.set(p,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),t.update(l.instanceMatrix,o.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,o.ARRAY_BUFFER)),p}function a(){n=new WeakMap}function s(l){const u=l.target;u.removeEventListener("dispose",s),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:a}}class hm extends ni{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=wt,this.minFilter=wt,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Oc=new ni,Nc=new Ic,Uc=new hm,Bc=new Lc,Il=[],Ol=[],Nl=new Float32Array(16),Ul=new Float32Array(9),Bl=new Float32Array(4);function fr(o,e,t){const i=o[0];if(i<=0||i>0)return o;const n=e*t;let r=Il[n];if(r===void 0&&(r=new Float32Array(n),Il[n]=r),e!==0){i.toArray(r,0);for(let a=1,s=0;a!==e;++a)s+=t,o[a].toArray(r,s)}return r}function Mt(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function Et(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function Rs(o,e){let t=Ol[e];t===void 0&&(t=new Int32Array(e),Ol[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function dm(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function pm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;o.uniform2fv(this.addr,e),Et(t,e)}}function mm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;o.uniform3fv(this.addr,e),Et(t,e)}}function gm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;o.uniform4fv(this.addr,e),Et(t,e)}}function _m(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(Mt(t,i))return;Bl.set(i),o.uniformMatrix2fv(this.addr,!1,Bl),Et(t,i)}}function vm(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(Mt(t,i))return;Ul.set(i),o.uniformMatrix3fv(this.addr,!1,Ul),Et(t,i)}}function xm(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(Mt(t,i))return;Nl.set(i),o.uniformMatrix4fv(this.addr,!1,Nl),Et(t,i)}}function ym(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function Sm(o,e){const t=this.cache;Mt(t,e)||(o.uniform2iv(this.addr,e),Et(t,e))}function Mm(o,e){const t=this.cache;Mt(t,e)||(o.uniform3iv(this.addr,e),Et(t,e))}function Em(o,e){const t=this.cache;Mt(t,e)||(o.uniform4iv(this.addr,e),Et(t,e))}function wm(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function Tm(o,e){const t=this.cache;Mt(t,e)||(o.uniform2uiv(this.addr,e),Et(t,e))}function bm(o,e){const t=this.cache;Mt(t,e)||(o.uniform3uiv(this.addr,e),Et(t,e))}function Am(o,e){const t=this.cache;Mt(t,e)||(o.uniform4uiv(this.addr,e),Et(t,e))}function Cm(o,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),t.setTexture2D(e||Oc,n)}function Rm(o,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Uc,n)}function Pm(o,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Bc,n)}function Dm(o,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Nc,n)}function Lm(o){switch(o){case 5126:return dm;case 35664:return pm;case 35665:return mm;case 35666:return gm;case 35674:return _m;case 35675:return vm;case 35676:return xm;case 5124:case 35670:return ym;case 35667:case 35671:return Sm;case 35668:case 35672:return Mm;case 35669:case 35673:return Em;case 5125:return wm;case 36294:return Tm;case 36295:return bm;case 36296:return Am;case 35678:case 36198:case 36298:case 36306:case 35682:return Cm;case 35679:case 36299:case 36307:return Rm;case 35680:case 36300:case 36308:case 36293:return Pm;case 36289:case 36303:case 36311:case 36292:return Dm}}function Fm(o,e){o.uniform1fv(this.addr,e)}function Im(o,e){const t=fr(e,this.size,2);o.uniform2fv(this.addr,t)}function Om(o,e){const t=fr(e,this.size,3);o.uniform3fv(this.addr,t)}function Nm(o,e){const t=fr(e,this.size,4);o.uniform4fv(this.addr,t)}function Um(o,e){const t=fr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function Bm(o,e){const t=fr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function zm(o,e){const t=fr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function Gm(o,e){o.uniform1iv(this.addr,e)}function km(o,e){o.uniform2iv(this.addr,e)}function Hm(o,e){o.uniform3iv(this.addr,e)}function Vm(o,e){o.uniform4iv(this.addr,e)}function Wm(o,e){o.uniform1uiv(this.addr,e)}function Xm(o,e){o.uniform2uiv(this.addr,e)}function qm(o,e){o.uniform3uiv(this.addr,e)}function Ym(o,e){o.uniform4uiv(this.addr,e)}function Zm(o,e,t){const i=e.length,n=Rs(t,i);o.uniform1iv(this.addr,n);for(let r=0;r!==i;++r)t.setTexture2D(e[r]||Oc,n[r])}function Km(o,e,t){const i=e.length,n=Rs(t,i);o.uniform1iv(this.addr,n);for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Uc,n[r])}function jm(o,e,t){const i=e.length,n=Rs(t,i);o.uniform1iv(this.addr,n);for(let r=0;r!==i;++r)t.setTextureCube(e[r]||Bc,n[r])}function $m(o,e,t){const i=e.length,n=Rs(t,i);o.uniform1iv(this.addr,n);for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Nc,n[r])}function Jm(o){switch(o){case 5126:return Fm;case 35664:return Im;case 35665:return Om;case 35666:return Nm;case 35674:return Um;case 35675:return Bm;case 35676:return zm;case 5124:case 35670:return Gm;case 35667:case 35671:return km;case 35668:case 35672:return Hm;case 35669:case 35673:return Vm;case 5125:return Wm;case 36294:return Xm;case 36295:return qm;case 36296:return Ym;case 35678:case 36198:case 36298:case 36306:case 35682:return Zm;case 35679:case 36299:case 36307:return Km;case 35680:case 36300:case 36308:case 36293:return jm;case 36289:case 36303:case 36311:case 36292:return $m}}class Qm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Lm(t.type)}}class eg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Jm(t.type)}}class tg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let r=0,a=n.length;r!==a;++r){const s=n[r];s.setValue(e,t[s.id],i)}}}const pa=/(\w+)(\])?(\[|\.)?/g;function zl(o,e){o.seq.push(e),o.map[e.id]=e}function ig(o,e,t){const i=o.name,n=i.length;for(pa.lastIndex=0;;){const r=pa.exec(i),a=pa.lastIndex;let s=r[1];const l=r[2]==="]",u=r[3];if(l&&(s=s|0),u===void 0||u==="["&&a+2===n){zl(t,u===void 0?new Qm(s,o,e):new eg(s,o,e));break}else{let p=t.map[s];p===void 0&&(p=new tg(s),zl(t,p)),t=p}}}class ms{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=e.getActiveUniform(t,n),a=e.getUniformLocation(t,r.name);ig(r,a,this)}}setValue(e,t,i,n){const r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,a=t.length;r!==a;++r){const s=t[r],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,r=e.length;n!==r;++n){const a=e[n];a.id in t&&i.push(a)}return i}}function Gl(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}let ng=0;function rg(o,e){const t=o.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=n;a<r;a++){const s=a+1;i.push(`${s===e?">":" "} ${s}: ${t[a]}`)}return i.join(`
`)}function sg(o){switch(o){case Mn:return["Linear","( value )"];case Ve:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function kl(o,e,t){const i=o.getShaderParameter(e,o.COMPILE_STATUS),n=o.getShaderInfoLog(e).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+n+`

`+rg(o.getShaderSource(e),a)}else return n}function ag(o,e){const t=sg(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function og(o,e){let t;switch(e){case Af:t="Linear";break;case Cf:t="Reinhard";break;case Rf:t="OptimizedCineon";break;case Pf:t="ACESFilmic";break;case Df:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function lg(o){return[o.extensionDerivatives||!!o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xr).join(`
`)}function cg(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ug(o,e){const t={},i=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=o.getActiveAttrib(e,n),a=r.name;let s=1;r.type===o.FLOAT_MAT2&&(s=2),r.type===o.FLOAT_MAT3&&(s=3),r.type===o.FLOAT_MAT4&&(s=4),t[a]={type:r.type,location:o.getAttribLocation(e,a),locationSize:s}}return t}function xr(o){return o!==""}function Hl(o,e){return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vl(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ba(o){return o.replace(fg,hg)}function hg(o,e){const t=Ae[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ba(t)}const dg=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,pg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wl(o){return o.replace(pg,zc).replace(dg,mg)}function mg(o,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),zc(o,e,t,i)}function zc(o,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Xl(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gg(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===mc?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===rf?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===vr&&(e="SHADOWMAP_TYPE_VSM"),e}function _g(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case tr:case ir:e="ENVMAP_TYPE_CUBE";break;case As:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vg(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ir:e="ENVMAP_MODE_REFRACTION";break}return e}function xg(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case vc:e="ENVMAP_BLENDING_MULTIPLY";break;case Tf:e="ENVMAP_BLENDING_MIX";break;case bf:e="ENVMAP_BLENDING_ADD";break}return e}function yg(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Sg(o,e,t,i){const n=o.getContext(),r=t.defines;let a=t.vertexShader,s=t.fragmentShader;const l=gg(t),u=_g(t),c=vg(t),p=xg(t),h=yg(t),f=t.isWebGL2?"":lg(t),g=cg(r),d=n.createProgram();let m,_,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(xr).join(`
`),m.length>0&&(m+=`
`),_=[f,g].filter(xr).join(`
`),_.length>0&&(_+=`
`)):(m=[Xl(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),_=[f,Xl(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ci?"#define TONE_MAPPING":"",t.toneMapping!==Ci?Ae.tonemapping_pars_fragment:"",t.toneMapping!==Ci?og("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ae.encodings_pars_fragment,ag("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xr).join(`
`)),a=Ba(a),a=Hl(a,t),a=Vl(a,t),s=Ba(s),s=Hl(s,t),s=Vl(s,t),a=Wl(a),s=Wl(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const T=E+m+a,x=E+_+s,v=Gl(n,n.VERTEX_SHADER,T),S=Gl(n,n.FRAGMENT_SHADER,x);if(n.attachShader(d,v),n.attachShader(d,S),t.index0AttributeName!==void 0?n.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(d,0,"position"),n.linkProgram(d),o.debug.checkShaderErrors){const w=n.getProgramInfoLog(d).trim(),A=n.getShaderInfoLog(v).trim(),b=n.getShaderInfoLog(S).trim();let L=!0,F=!0;if(n.getProgramParameter(d,n.LINK_STATUS)===!1){L=!1;const P=kl(n,v,"vertex"),N=kl(n,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(d,n.VALIDATE_STATUS)+`

Program Info Log: `+w+`
`+P+`
`+N)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(A===""||b==="")&&(F=!1);F&&(this.diagnostics={runnable:L,programLog:w,vertexShader:{log:A,prefix:m},fragmentShader:{log:b,prefix:_}})}n.deleteShader(v),n.deleteShader(S);let M;this.getUniforms=function(){return M===void 0&&(M=new ms(n,d)),M};let y;return this.getAttributes=function(){return y===void 0&&(y=ug(n,d)),y},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=ng++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=v,this.fragmentShader=S,this}let Mg=0;class Eg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const i=new wg(e);t.set(e,i)}return t.get(e)}}class wg{constructor(e){this.id=Mg++,this.code=e,this.usedTimes=0}}function Tg(o,e,t,i,n,r,a){const s=new Mc,l=new Eg,u=[],c=n.isWebGL2,p=n.logarithmicDepthBuffer,h=n.vertexTextures;let f=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(y,w,A,b,L){const F=b.fog,P=L.geometry,N=y.isMeshStandardMaterial?b.environment:null,I=(y.isMeshStandardMaterial?t:e).get(y.envMap||N),z=!!I&&I.mapping===As?I.image.height:null,k=g[y.type];y.precision!==null&&(f=n.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const B=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,W=B!==void 0?B.length:0;let J=0;P.morphAttributes.position!==void 0&&(J=1),P.morphAttributes.normal!==void 0&&(J=2),P.morphAttributes.color!==void 0&&(J=3);let Z,j,ie,oe;if(k){const Re=ci[k];Z=Re.vertexShader,j=Re.fragmentShader}else Z=y.vertexShader,j=y.fragmentShader,l.update(y),ie=l.getVertexShaderID(y),oe=l.getFragmentShaderID(y);const U=o.getRenderTarget(),Te=y.alphaTest>0,Se=y.clearcoat>0,ye=y.iridescence>0;return{isWebGL2:c,shaderID:k,shaderName:y.type,vertexShader:Z,fragmentShader:j,defines:y.defines,customVertexShaderID:ie,customFragmentShaderID:oe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,instancing:L.isInstancedMesh===!0,instancingColor:L.isInstancedMesh===!0&&L.instanceColor!==null,supportsVertexTextures:h,outputEncoding:U===null?o.outputEncoding:U.isXRRenderTarget===!0?U.texture.encoding:Mn,map:!!y.map,matcap:!!y.matcap,envMap:!!I,envMapMode:I&&I.mapping,envMapCubeUVHeight:z,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===$f,tangentSpaceNormalMap:y.normalMapType===jf,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Ve,clearcoat:Se,clearcoatMap:Se&&!!y.clearcoatMap,clearcoatRoughnessMap:Se&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:Se&&!!y.clearcoatNormalMap,iridescence:ye,iridescenceMap:ye&&!!y.iridescenceMap,iridescenceThicknessMap:ye&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===jn,alphaMap:!!y.alphaMap,alphaTest:Te,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!P.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!F,useFog:y.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:p,skinning:L.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:J,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:o.shadowMap.enabled&&A.length>0,shadowMapType:o.shadowMap.type,toneMapping:y.toneMapped?o.toneMapping:Ci,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===yn,flipSided:y.side===ii,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function m(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const A in y.defines)w.push(A),w.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(_(w,y),E(w,y),w.push(o.outputEncoding)),w.push(y.customProgramCacheKey),w.join()}function _(y,w){y.push(w.precision),y.push(w.outputEncoding),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.combine),y.push(w.vertexUvs),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function E(y,w){s.disableAll(),w.isWebGL2&&s.enable(0),w.supportsVertexTextures&&s.enable(1),w.instancing&&s.enable(2),w.instancingColor&&s.enable(3),w.map&&s.enable(4),w.matcap&&s.enable(5),w.envMap&&s.enable(6),w.lightMap&&s.enable(7),w.aoMap&&s.enable(8),w.emissiveMap&&s.enable(9),w.bumpMap&&s.enable(10),w.normalMap&&s.enable(11),w.objectSpaceNormalMap&&s.enable(12),w.tangentSpaceNormalMap&&s.enable(13),w.clearcoat&&s.enable(14),w.clearcoatMap&&s.enable(15),w.clearcoatRoughnessMap&&s.enable(16),w.clearcoatNormalMap&&s.enable(17),w.iridescence&&s.enable(18),w.iridescenceMap&&s.enable(19),w.iridescenceThicknessMap&&s.enable(20),w.displacementMap&&s.enable(21),w.specularMap&&s.enable(22),w.roughnessMap&&s.enable(23),w.metalnessMap&&s.enable(24),w.gradientMap&&s.enable(25),w.alphaMap&&s.enable(26),w.alphaTest&&s.enable(27),w.vertexColors&&s.enable(28),w.vertexAlphas&&s.enable(29),w.vertexUvs&&s.enable(30),w.vertexTangents&&s.enable(31),w.uvsVertexOnly&&s.enable(32),w.fog&&s.enable(33),y.push(s.mask),s.disableAll(),w.useFog&&s.enable(0),w.flatShading&&s.enable(1),w.logarithmicDepthBuffer&&s.enable(2),w.skinning&&s.enable(3),w.morphTargets&&s.enable(4),w.morphNormals&&s.enable(5),w.morphColors&&s.enable(6),w.premultipliedAlpha&&s.enable(7),w.shadowMapEnabled&&s.enable(8),w.physicallyCorrectLights&&s.enable(9),w.doubleSided&&s.enable(10),w.flipSided&&s.enable(11),w.useDepthPacking&&s.enable(12),w.dithering&&s.enable(13),w.specularIntensityMap&&s.enable(14),w.specularColorMap&&s.enable(15),w.transmission&&s.enable(16),w.transmissionMap&&s.enable(17),w.thicknessMap&&s.enable(18),w.sheen&&s.enable(19),w.sheenColorMap&&s.enable(20),w.sheenRoughnessMap&&s.enable(21),w.decodeVideoTexture&&s.enable(22),w.opaque&&s.enable(23),y.push(s.mask)}function T(y){const w=g[y.type];let A;if(w){const b=ci[w];A=hh.clone(b.uniforms)}else A=y.uniforms;return A}function x(y,w){let A;for(let b=0,L=u.length;b<L;b++){const F=u[b];if(F.cacheKey===w){A=F,++A.usedTimes;break}}return A===void 0&&(A=new Sg(o,w,y,r),u.push(A)),A}function v(y){if(--y.usedTimes===0){const w=u.indexOf(y);u[w]=u[u.length-1],u.pop(),y.destroy()}}function S(y){l.remove(y)}function M(){l.dispose()}return{getParameters:d,getProgramCacheKey:m,getUniforms:T,acquireProgram:x,releaseProgram:v,releaseShaderCache:S,programs:u,dispose:M}}function bg(){let o=new WeakMap;function e(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function t(r){o.delete(r)}function i(r,a,s){o.get(r)[a]=s}function n(){o=new WeakMap}return{get:e,remove:t,update:i,dispose:n}}function Ag(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function ql(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Yl(){const o=[];let e=0;const t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function a(p,h,f,g,d,m){let _=o[e];return _===void 0?(_={id:p.id,object:p,geometry:h,material:f,groupOrder:g,renderOrder:p.renderOrder,z:d,group:m},o[e]=_):(_.id=p.id,_.object=p,_.geometry=h,_.material=f,_.groupOrder=g,_.renderOrder=p.renderOrder,_.z=d,_.group=m),e++,_}function s(p,h,f,g,d,m){const _=a(p,h,f,g,d,m);f.transmission>0?i.push(_):f.transparent===!0?n.push(_):t.push(_)}function l(p,h,f,g,d,m){const _=a(p,h,f,g,d,m);f.transmission>0?i.unshift(_):f.transparent===!0?n.unshift(_):t.unshift(_)}function u(p,h){t.length>1&&t.sort(p||Ag),i.length>1&&i.sort(h||ql),n.length>1&&n.sort(h||ql)}function c(){for(let p=e,h=o.length;p<h;p++){const f=o[p];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:s,unshift:l,finish:c,sort:u}}function Cg(){let o=new WeakMap;function e(i,n){let r;return o.has(i)===!1?(r=new Yl,o.set(i,[r])):n>=o.get(i).length?(r=new Yl,o.get(i).push(r)):r=o.get(i)[n],r}function t(){o=new WeakMap}return{get:e,dispose:t}}function Rg(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Fe};break;case"SpotLight":t={position:new H,direction:new H,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new H,halfWidth:new H,halfHeight:new H};break}return o[e.id]=t,t}}}function Pg(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let Dg=0;function Lg(o,e){return(e.castShadow?1:0)-(o.castShadow?1:0)}function Fg(o,e){const t=new Rg,i=Pg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let c=0;c<9;c++)n.probe.push(new H);const r=new H,a=new gt,s=new gt;function l(c,p){let h=0,f=0,g=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let d=0,m=0,_=0,E=0,T=0,x=0,v=0,S=0;c.sort(Lg);const M=p!==!0?Math.PI:1;for(let w=0,A=c.length;w<A;w++){const b=c[w],L=b.color,F=b.intensity,P=b.distance,N=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=L.r*F*M,f+=L.g*F*M,g+=L.b*F*M;else if(b.isLightProbe)for(let I=0;I<9;I++)n.probe[I].addScaledVector(b.sh.coefficients[I],F);else if(b.isDirectionalLight){const I=t.get(b);if(I.color.copy(b.color).multiplyScalar(b.intensity*M),b.castShadow){const z=b.shadow,k=i.get(b);k.shadowBias=z.bias,k.shadowNormalBias=z.normalBias,k.shadowRadius=z.radius,k.shadowMapSize=z.mapSize,n.directionalShadow[d]=k,n.directionalShadowMap[d]=N,n.directionalShadowMatrix[d]=b.shadow.matrix,x++}n.directional[d]=I,d++}else if(b.isSpotLight){const I=t.get(b);if(I.position.setFromMatrixPosition(b.matrixWorld),I.color.copy(L).multiplyScalar(F*M),I.distance=P,I.coneCos=Math.cos(b.angle),I.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),I.decay=b.decay,b.castShadow){const z=b.shadow,k=i.get(b);k.shadowBias=z.bias,k.shadowNormalBias=z.normalBias,k.shadowRadius=z.radius,k.shadowMapSize=z.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=N,n.spotShadowMatrix[_]=b.shadow.matrix,S++}n.spot[_]=I,_++}else if(b.isRectAreaLight){const I=t.get(b);I.color.copy(L).multiplyScalar(F),I.halfWidth.set(b.width*.5,0,0),I.halfHeight.set(0,b.height*.5,0),n.rectArea[E]=I,E++}else if(b.isPointLight){const I=t.get(b);if(I.color.copy(b.color).multiplyScalar(b.intensity*M),I.distance=b.distance,I.decay=b.decay,b.castShadow){const z=b.shadow,k=i.get(b);k.shadowBias=z.bias,k.shadowNormalBias=z.normalBias,k.shadowRadius=z.radius,k.shadowMapSize=z.mapSize,k.shadowCameraNear=z.camera.near,k.shadowCameraFar=z.camera.far,n.pointShadow[m]=k,n.pointShadowMap[m]=N,n.pointShadowMatrix[m]=b.shadow.matrix,v++}n.point[m]=I,m++}else if(b.isHemisphereLight){const I=t.get(b);I.skyColor.copy(b.color).multiplyScalar(F*M),I.groundColor.copy(b.groundColor).multiplyScalar(F*M),n.hemi[T]=I,T++}}E>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=g;const y=n.hash;(y.directionalLength!==d||y.pointLength!==m||y.spotLength!==_||y.rectAreaLength!==E||y.hemiLength!==T||y.numDirectionalShadows!==x||y.numPointShadows!==v||y.numSpotShadows!==S)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=E,n.point.length=m,n.hemi.length=T,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotShadowMatrix.length=S,y.directionalLength=d,y.pointLength=m,y.spotLength=_,y.rectAreaLength=E,y.hemiLength=T,y.numDirectionalShadows=x,y.numPointShadows=v,y.numSpotShadows=S,n.version=Dg++)}function u(c,p){let h=0,f=0,g=0,d=0,m=0;const _=p.matrixWorldInverse;for(let E=0,T=c.length;E<T;E++){const x=c[E];if(x.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(_),h++}else if(x.isSpotLight){const v=n.spot[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(_),v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(_),g++}else if(x.isRectAreaLight){const v=n.rectArea[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(_),s.identity(),a.copy(x.matrixWorld),a.premultiply(_),s.extractRotation(a),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),d++}else if(x.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(_),f++}else if(x.isHemisphereLight){const v=n.hemi[m];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(_),m++}}}return{setup:l,setupView:u,state:n}}function Zl(o,e){const t=new Fg(o,e),i=[],n=[];function r(){i.length=0,n.length=0}function a(p){i.push(p)}function s(p){n.push(p)}function l(p){t.setup(i,p)}function u(p){t.setupView(i,p)}return{init:r,state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:l,setupLightsView:u,pushLight:a,pushShadow:s}}function Ig(o,e){let t=new WeakMap;function i(r,a=0){let s;return t.has(r)===!1?(s=new Zl(o,e),t.set(r,[s])):a>=t.get(r).length?(s=new Zl(o,e),t.get(r).push(s)):s=t.get(r)[a],s}function n(){t=new WeakMap}return{get:i,dispose:n}}class Og extends kr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ng extends kr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new H,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ug=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,Bg=`
uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;

#include <packing>

void main() {

	const float samples = float( VSM_SAMPLES );

	float mean = 0.0;
	float squared_mean = 0.0;

	// This seems totally useless but it's a crazy work around for a Adreno compiler bug
	// float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );

	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {

		float uvOffset = uvStart + i * uvStride;

		#ifdef HORIZONTAL_PASS

			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;

		#else

			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;

		#endif

	}

	mean = mean / samples;
	squared_mean = squared_mean / samples;

	float std_dev = sqrt( squared_mean - mean * mean );

	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );

}
`;function zg(o,e,t){let i=new wc;const n=new ze,r=new ze,a=new mt,s=new Og({depthPacking:Kf}),l=new Ng,u={},c=t.maxTextureSize,p={0:ii,1:br,2:yn},h=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:Ug,fragmentShader:Bg}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new ji;g.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new ti(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mc,this.render=function(x,v,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;const M=o.getRenderTarget(),y=o.getActiveCubeFace(),w=o.getActiveMipmapLevel(),A=o.state;A.setBlending(Xi),A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);for(let b=0,L=x.length;b<L;b++){const F=x[b],P=F.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;n.copy(P.mapSize);const N=P.getFrameExtents();if(n.multiply(N),r.copy(P.mapSize),(n.x>c||n.y>c)&&(n.x>c&&(r.x=Math.floor(c/N.x),n.x=r.x*N.x,P.mapSize.x=r.x),n.y>c&&(r.y=Math.floor(c/N.y),n.y=r.y*N.y,P.mapSize.y=r.y)),P.map===null&&!P.isPointLightShadow&&this.type===vr&&(P.map=new Ri(n.x,n.y),P.map.texture.name=F.name+".shadowMap",P.mapPass=new Ri(n.x,n.y),P.camera.updateProjectionMatrix()),P.map===null){const z={minFilter:wt,magFilter:wt,format:Wt};P.map=new Ri(n.x,n.y,z),P.map.texture.name=F.name+".shadowMap",P.camera.updateProjectionMatrix()}o.setRenderTarget(P.map),o.clear();const I=P.getViewportCount();for(let z=0;z<I;z++){const k=P.getViewport(z);a.set(r.x*k.x,r.y*k.y,r.x*k.z,r.y*k.w),A.viewport(a),P.updateMatrices(F,z),i=P.getFrustum(),T(v,S,P.camera,F,this.type)}!P.isPointLightShadow&&this.type===vr&&_(P,S),P.needsUpdate=!1}m.needsUpdate=!1,o.setRenderTarget(M,y,w)};function _(x,v){const S=e.update(d);h.defines.VSM_SAMPLES!==x.blurSamples&&(h.defines.VSM_SAMPLES=x.blurSamples,f.defines.VSM_SAMPLES=x.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),h.uniforms.shadow_pass.value=x.map.texture,h.uniforms.resolution.value=x.mapSize,h.uniforms.radius.value=x.radius,o.setRenderTarget(x.mapPass),o.clear(),o.renderBufferDirect(v,null,S,h,d,null),f.uniforms.shadow_pass.value=x.mapPass.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,o.setRenderTarget(x.map),o.clear(),o.renderBufferDirect(v,null,S,f,d,null)}function E(x,v,S,M,y,w){let A=null;const b=S.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(b!==void 0?A=b:A=S.isPointLight===!0?l:s,o.localClippingEnabled&&v.clipShadows===!0&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0){const L=A.uuid,F=v.uuid;let P=u[L];P===void 0&&(P={},u[L]=P);let N=P[F];N===void 0&&(N=A.clone(),P[F]=N),A=N}return A.visible=v.visible,A.wireframe=v.wireframe,w===vr?A.side=v.shadowSide!==null?v.shadowSide:v.side:A.side=v.shadowSide!==null?v.shadowSide:p[v.side],A.alphaMap=v.alphaMap,A.alphaTest=v.alphaTest,A.clipShadows=v.clipShadows,A.clippingPlanes=v.clippingPlanes,A.clipIntersection=v.clipIntersection,A.displacementMap=v.displacementMap,A.displacementScale=v.displacementScale,A.displacementBias=v.displacementBias,A.wireframeLinewidth=v.wireframeLinewidth,A.linewidth=v.linewidth,S.isPointLight===!0&&A.isMeshDistanceMaterial===!0&&(A.referencePosition.setFromMatrixPosition(S.matrixWorld),A.nearDistance=M,A.farDistance=y),A}function T(x,v,S,M,y){if(x.visible===!1)return;if(x.layers.test(v.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&y===vr)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,x.matrixWorld);const b=e.update(x),L=x.material;if(Array.isArray(L)){const F=b.groups;for(let P=0,N=F.length;P<N;P++){const I=F[P],z=L[I.materialIndex];if(z&&z.visible){const k=E(x,z,M,S.near,S.far,y);o.renderBufferDirect(S,null,b,k,x,I)}}}else if(L.visible){const F=E(x,L,M,S.near,S.far,y);o.renderBufferDirect(S,null,b,F,x,null)}}const A=x.children;for(let b=0,L=A.length;b<L;b++)T(A[b],v,S,M,y)}}function Gg(o,e,t){const i=t.isWebGL2;function n(){let O=!1;const se=new mt;let re=null;const pe=new mt(0,0,0,0);return{setMask:function(fe){re!==fe&&!O&&(o.colorMask(fe,fe,fe,fe),re=fe)},setLocked:function(fe){O=fe},setClear:function(fe,ve,te,xe,Oe){Oe===!0&&(fe*=xe,ve*=xe,te*=xe),se.set(fe,ve,te,xe),pe.equals(se)===!1&&(o.clearColor(fe,ve,te,xe),pe.copy(se))},reset:function(){O=!1,re=null,pe.set(-1,0,0,0)}}}function r(){let O=!1,se=null,re=null,pe=null;return{setTest:function(fe){fe?oe(o.DEPTH_TEST):U(o.DEPTH_TEST)},setMask:function(fe){se!==fe&&!O&&(o.depthMask(fe),se=fe)},setFunc:function(fe){if(re!==fe){if(fe)switch(fe){case vf:o.depthFunc(o.NEVER);break;case xf:o.depthFunc(o.ALWAYS);break;case yf:o.depthFunc(o.LESS);break;case La:o.depthFunc(o.LEQUAL);break;case Sf:o.depthFunc(o.EQUAL);break;case Mf:o.depthFunc(o.GEQUAL);break;case Ef:o.depthFunc(o.GREATER);break;case wf:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}else o.depthFunc(o.LEQUAL);re=fe}},setLocked:function(fe){O=fe},setClear:function(fe){pe!==fe&&(o.clearDepth(fe),pe=fe)},reset:function(){O=!1,se=null,re=null,pe=null}}}function a(){let O=!1,se=null,re=null,pe=null,fe=null,ve=null,te=null,xe=null,Oe=null;return{setTest:function(Ne){O||(Ne?oe(o.STENCIL_TEST):U(o.STENCIL_TEST))},setMask:function(Ne){se!==Ne&&!O&&(o.stencilMask(Ne),se=Ne)},setFunc:function(Ne,xt,ri){(re!==Ne||pe!==xt||fe!==ri)&&(o.stencilFunc(Ne,xt,ri),re=Ne,pe=xt,fe=ri)},setOp:function(Ne,xt,ri){(ve!==Ne||te!==xt||xe!==ri)&&(o.stencilOp(Ne,xt,ri),ve=Ne,te=xt,xe=ri)},setLocked:function(Ne){O=Ne},setClear:function(Ne){Oe!==Ne&&(o.clearStencil(Ne),Oe=Ne)},reset:function(){O=!1,se=null,re=null,pe=null,fe=null,ve=null,te=null,xe=null,Oe=null}}}const s=new n,l=new r,u=new a;let c={},p={},h=new WeakMap,f=[],g=null,d=!1,m=null,_=null,E=null,T=null,x=null,v=null,S=null,M=!1,y=null,w=null,A=null,b=null,L=null;const F=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,N=0;const I=o.getParameter(o.VERSION);I.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(I)[1]),P=N>=1):I.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),P=N>=2);let z=null,k={};const B=o.getParameter(o.SCISSOR_BOX),W=o.getParameter(o.VIEWPORT),J=new mt().fromArray(B),Z=new mt().fromArray(W);function j(O,se,re){const pe=new Uint8Array(4),fe=o.createTexture();o.bindTexture(O,fe),o.texParameteri(O,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(O,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ve=0;ve<re;ve++)o.texImage2D(se+ve,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,pe);return fe}const ie={};ie[o.TEXTURE_2D]=j(o.TEXTURE_2D,o.TEXTURE_2D,1),ie[o.TEXTURE_CUBE_MAP]=j(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),s.setClear(0,0,0,1),l.setClear(1),u.setClear(0),oe(o.DEPTH_TEST),l.setFunc(La),$e(!1),lt(zo),oe(o.CULL_FACE),me(Xi);function oe(O){c[O]!==!0&&(o.enable(O),c[O]=!0)}function U(O){c[O]!==!1&&(o.disable(O),c[O]=!1)}function Te(O,se){return p[O]!==se?(o.bindFramebuffer(O,se),p[O]=se,i&&(O===o.DRAW_FRAMEBUFFER&&(p[o.FRAMEBUFFER]=se),O===o.FRAMEBUFFER&&(p[o.DRAW_FRAMEBUFFER]=se)),!0):!1}function Se(O,se){let re=f,pe=!1;if(O)if(re=h.get(se),re===void 0&&(re=[],h.set(se,re)),O.isWebGLMultipleRenderTargets){const fe=O.texture;if(re.length!==fe.length||re[0]!==o.COLOR_ATTACHMENT0){for(let ve=0,te=fe.length;ve<te;ve++)re[ve]=o.COLOR_ATTACHMENT0+ve;re.length=fe.length,pe=!0}}else re[0]!==o.COLOR_ATTACHMENT0&&(re[0]=o.COLOR_ATTACHMENT0,pe=!0);else re[0]!==o.BACK&&(re[0]=o.BACK,pe=!0);pe&&(t.isWebGL2?o.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function ye(O){return g!==O?(o.useProgram(O),g=O,!0):!1}const le={[Wn]:o.FUNC_ADD,[of]:o.FUNC_SUBTRACT,[lf]:o.FUNC_REVERSE_SUBTRACT};if(i)le[Vo]=o.MIN,le[Wo]=o.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(le[Vo]=O.MIN_EXT,le[Wo]=O.MAX_EXT)}const Re={[cf]:o.ZERO,[uf]:o.ONE,[ff]:o.SRC_COLOR,[gc]:o.SRC_ALPHA,[_f]:o.SRC_ALPHA_SATURATE,[mf]:o.DST_COLOR,[df]:o.DST_ALPHA,[hf]:o.ONE_MINUS_SRC_COLOR,[_c]:o.ONE_MINUS_SRC_ALPHA,[gf]:o.ONE_MINUS_DST_COLOR,[pf]:o.ONE_MINUS_DST_ALPHA};function me(O,se,re,pe,fe,ve,te,xe){if(O===Xi){d===!0&&(U(o.BLEND),d=!1);return}if(d===!1&&(oe(o.BLEND),d=!0),O!==af){if(O!==m||xe!==M){if((_!==Wn||x!==Wn)&&(o.blendEquation(o.FUNC_ADD),_=Wn,x=Wn),xe)switch(O){case jn:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Go:o.blendFunc(o.ONE,o.ONE);break;case ko:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ho:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case jn:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Go:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case ko:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ho:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}E=null,T=null,v=null,S=null,m=O,M=xe}return}fe=fe||se,ve=ve||re,te=te||pe,(se!==_||fe!==x)&&(o.blendEquationSeparate(le[se],le[fe]),_=se,x=fe),(re!==E||pe!==T||ve!==v||te!==S)&&(o.blendFuncSeparate(Re[re],Re[pe],Re[ve],Re[te]),E=re,T=pe,v=ve,S=te),m=O,M=null}function ge(O,se){O.side===yn?U(o.CULL_FACE):oe(o.CULL_FACE);let re=O.side===ii;se&&(re=!re),$e(re),O.blending===jn&&O.transparent===!1?me(Xi):me(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),s.setMask(O.colorWrite);const pe=O.stencilWrite;u.setTest(pe),pe&&(u.setMask(O.stencilWriteMask),u.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),u.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Dt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?oe(o.SAMPLE_ALPHA_TO_COVERAGE):U(o.SAMPLE_ALPHA_TO_COVERAGE)}function $e(O){y!==O&&(O?o.frontFace(o.CW):o.frontFace(o.CCW),y=O)}function lt(O){O!==tf?(oe(o.CULL_FACE),O!==w&&(O===zo?o.cullFace(o.BACK):O===nf?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):U(o.CULL_FACE),w=O}function ft(O){O!==A&&(P&&o.lineWidth(O),A=O)}function Dt(O,se,re){O?(oe(o.POLYGON_OFFSET_FILL),(b!==se||L!==re)&&(o.polygonOffset(se,re),b=se,L=re)):U(o.POLYGON_OFFSET_FILL)}function Je(O){O?oe(o.SCISSOR_TEST):U(o.SCISSOR_TEST)}function De(O){O===void 0&&(O=o.TEXTURE0+F-1),z!==O&&(o.activeTexture(O),z=O)}function Zt(O,se){z===null&&De();let re=k[z];re===void 0&&(re={type:void 0,texture:void 0},k[z]=re),(re.type!==O||re.texture!==se)&&(o.bindTexture(O,se||ie[O]),re.type=O,re.texture=se)}function Kt(){const O=k[z];O!==void 0&&O.type!==void 0&&(o.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function D(){try{o.compressedTexImage2D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function C(){try{o.texSubImage2D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{o.texSubImage3D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ee(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ne(){try{o.texStorage2D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{o.texStorage3D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{o.texImage2D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function q(){try{o.texImage3D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(O){J.equals(O)===!1&&(o.scissor(O.x,O.y,O.z,O.w),J.copy(O))}function he(O){Z.equals(O)===!1&&(o.viewport(O.x,O.y,O.z,O.w),Z.copy(O))}function ue(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),i===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),c={},z=null,k={},p={},h=new WeakMap,f=[],g=null,d=!1,m=null,_=null,E=null,T=null,x=null,v=null,S=null,M=!1,y=null,w=null,A=null,b=null,L=null,J.set(0,0,o.canvas.width,o.canvas.height),Z.set(0,0,o.canvas.width,o.canvas.height),s.reset(),l.reset(),u.reset()}return{buffers:{color:s,depth:l,stencil:u},enable:oe,disable:U,bindFramebuffer:Te,drawBuffers:Se,useProgram:ye,setBlending:me,setMaterial:ge,setFlipSided:$e,setCullFace:lt,setLineWidth:ft,setPolygonOffset:Dt,setScissorTest:Je,activeTexture:De,bindTexture:Zt,unbindTexture:Kt,compressedTexImage2D:D,texImage2D:Me,texImage3D:q,texStorage2D:ne,texStorage3D:ce,texSubImage2D:C,texSubImage3D:Y,compressedTexSubImage2D:ee,scissor:de,viewport:he,reset:ue}}function kg(o,e,t,i,n,r,a){const s=n.isWebGL2,l=n.maxTextures,u=n.maxCubemapSize,c=n.maxTextureSize,p=n.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,C){return _?new OffscreenCanvas(D,C):xs("canvas")}function T(D,C,Y,ee){let ne=1;if((D.width>ee||D.height>ee)&&(ne=ee/Math.max(D.width,D.height)),ne<1||C===!0)if(typeof HTMLImageElement!="undefined"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&D instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&D instanceof ImageBitmap){const ce=C?Da:Math.floor,Me=ce(ne*D.width),q=ce(ne*D.height);d===void 0&&(d=E(Me,q));const de=Y?E(Me,q):d;return de.width=Me,de.height=q,de.getContext("2d").drawImage(D,0,0,Me,q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+Me+"x"+q+")."),de}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function x(D){return Bo(D.width)&&Bo(D.height)}function v(D){return s?!1:D.wrapS!==ei||D.wrapT!==ei||D.minFilter!==wt&&D.minFilter!==Ht}function S(D,C){return D.generateMipmaps&&C&&D.minFilter!==wt&&D.minFilter!==Ht}function M(D){o.generateMipmap(D)}function y(D,C,Y,ee,ne=!1){if(s===!1)return C;if(D!==null){if(o[D]!==void 0)return o[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ce=C;return C===o.RED&&(Y===o.FLOAT&&(ce=o.R32F),Y===o.HALF_FLOAT&&(ce=o.R16F),Y===o.UNSIGNED_BYTE&&(ce=o.R8)),C===o.RG&&(Y===o.FLOAT&&(ce=o.RG32F),Y===o.HALF_FLOAT&&(ce=o.RG16F),Y===o.UNSIGNED_BYTE&&(ce=o.RG8)),C===o.RGBA&&(Y===o.FLOAT&&(ce=o.RGBA32F),Y===o.HALF_FLOAT&&(ce=o.RGBA16F),Y===o.UNSIGNED_BYTE&&(ce=ee===Ve&&ne===!1?o.SRGB8_ALPHA8:o.RGBA8),Y===o.UNSIGNED_SHORT_4_4_4_4&&(ce=o.RGBA4),Y===o.UNSIGNED_SHORT_5_5_5_1&&(ce=o.RGB5_A1)),(ce===o.R16F||ce===o.R32F||ce===o.RG16F||ce===o.RG32F||ce===o.RGBA16F||ce===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function w(D,C,Y){return S(D,Y)===!0||D.isFramebufferTexture&&D.minFilter!==wt&&D.minFilter!==Ht?Math.log2(Math.max(C.width,C.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?C.mipmaps.length:1}function A(D){return D===wt||D===Xo||D===qo?o.NEAREST:o.LINEAR}function b(D){const C=D.target;C.removeEventListener("dispose",b),F(C),C.isVideoTexture&&g.delete(C)}function L(D){const C=D.target;C.removeEventListener("dispose",L),N(C)}function F(D){const C=i.get(D);if(C.__webglInit===void 0)return;const Y=D.source,ee=m.get(Y);if(ee){const ne=ee[C.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&P(D),Object.keys(ee).length===0&&m.delete(Y)}i.remove(D)}function P(D){const C=i.get(D);o.deleteTexture(C.__webglTexture);const Y=D.source,ee=m.get(Y);delete ee[C.__cacheKey],a.memory.textures--}function N(D){const C=D.texture,Y=i.get(D),ee=i.get(C);if(ee.__webglTexture!==void 0&&(o.deleteTexture(ee.__webglTexture),a.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)o.deleteFramebuffer(Y.__webglFramebuffer[ne]),Y.__webglDepthbuffer&&o.deleteRenderbuffer(Y.__webglDepthbuffer[ne]);else{if(o.deleteFramebuffer(Y.__webglFramebuffer),Y.__webglDepthbuffer&&o.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&o.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let ne=0;ne<Y.__webglColorRenderbuffer.length;ne++)Y.__webglColorRenderbuffer[ne]&&o.deleteRenderbuffer(Y.__webglColorRenderbuffer[ne]);Y.__webglDepthRenderbuffer&&o.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let ne=0,ce=C.length;ne<ce;ne++){const Me=i.get(C[ne]);Me.__webglTexture&&(o.deleteTexture(Me.__webglTexture),a.memory.textures--),i.remove(C[ne])}i.remove(C),i.remove(D)}let I=0;function z(){I=0}function k(){const D=I;return D>=l&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l),I+=1,D}function B(D){const C=[];return C.push(D.wrapS),C.push(D.wrapT),C.push(D.magFilter),C.push(D.minFilter),C.push(D.anisotropy),C.push(D.internalFormat),C.push(D.format),C.push(D.type),C.push(D.generateMipmaps),C.push(D.premultiplyAlpha),C.push(D.flipY),C.push(D.unpackAlignment),C.push(D.encoding),C.join()}function W(D,C){const Y=i.get(D);if(D.isVideoTexture&&Zt(D),D.isRenderTargetTexture===!1&&D.version>0&&Y.__version!==D.version){const ee=D.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(Y,D,C);return}}t.activeTexture(o.TEXTURE0+C),t.bindTexture(o.TEXTURE_2D,Y.__webglTexture)}function J(D,C){const Y=i.get(D);if(D.version>0&&Y.__version!==D.version){Se(Y,D,C);return}t.activeTexture(o.TEXTURE0+C),t.bindTexture(o.TEXTURE_2D_ARRAY,Y.__webglTexture)}function Z(D,C){const Y=i.get(D);if(D.version>0&&Y.__version!==D.version){Se(Y,D,C);return}t.activeTexture(o.TEXTURE0+C),t.bindTexture(o.TEXTURE_3D,Y.__webglTexture)}function j(D,C){const Y=i.get(D);if(D.version>0&&Y.__version!==D.version){ye(Y,D,C);return}t.activeTexture(o.TEXTURE0+C),t.bindTexture(o.TEXTURE_CUBE_MAP,Y.__webglTexture)}const ie={[Oa]:o.REPEAT,[ei]:o.CLAMP_TO_EDGE,[Na]:o.MIRRORED_REPEAT},oe={[wt]:o.NEAREST,[Xo]:o.NEAREST_MIPMAP_NEAREST,[qo]:o.NEAREST_MIPMAP_LINEAR,[Ht]:o.LINEAR,[Lf]:o.LINEAR_MIPMAP_NEAREST,[Cs]:o.LINEAR_MIPMAP_LINEAR};function U(D,C,Y){if(Y?(o.texParameteri(D,o.TEXTURE_WRAP_S,ie[C.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,ie[C.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,ie[C.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,oe[C.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,oe[C.minFilter])):(o.texParameteri(D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(C.wrapS!==ei||C.wrapT!==ei)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(D,o.TEXTURE_MAG_FILTER,A(C.magFilter)),o.texParameteri(D,o.TEXTURE_MIN_FILTER,A(C.minFilter)),C.minFilter!==wt&&C.minFilter!==Ht&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(C.type===un&&e.has("OES_texture_float_linear")===!1||s===!1&&C.type===Ar&&e.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||i.get(C).__currentAnisotropy)&&(o.texParameterf(D,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,n.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy)}}function Te(D,C){let Y=!1;D.__webglInit===void 0&&(D.__webglInit=!0,C.addEventListener("dispose",b));const ee=C.source;let ne=m.get(ee);ne===void 0&&(ne={},m.set(ee,ne));const ce=B(C);if(ce!==D.__cacheKey){ne[ce]===void 0&&(ne[ce]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),ne[ce].usedTimes++;const Me=ne[D.__cacheKey];Me!==void 0&&(ne[D.__cacheKey].usedTimes--,Me.usedTimes===0&&P(C)),D.__cacheKey=ce,D.__webglTexture=ne[ce].texture}return Y}function Se(D,C,Y){let ee=o.TEXTURE_2D;C.isDataArrayTexture&&(ee=o.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ee=o.TEXTURE_3D);const ne=Te(D,C),ce=C.source;if(t.activeTexture(o.TEXTURE0+Y),t.bindTexture(ee,D.__webglTexture),ce.version!==ce.__currentVersion||ne===!0){o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,C.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,C.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.NONE);const Me=v(C)&&x(C.image)===!1;let q=T(C.image,Me,!1,c);q=Kt(C,q);const de=x(q)||s,he=r.convert(C.format,C.encoding);let ue=r.convert(C.type),O=y(C.internalFormat,he,ue,C.encoding,C.isVideoTexture);U(ee,C,de);let se;const re=C.mipmaps,pe=s&&C.isVideoTexture!==!0,fe=ce.__currentVersion===void 0||ne===!0,ve=w(C,q,de);if(C.isDepthTexture)O=o.DEPTH_COMPONENT,s?C.type===un?O=o.DEPTH_COMPONENT32F:C.type===cn?O=o.DEPTH_COMPONENT24:C.type===$n?O=o.DEPTH24_STENCIL8:O=o.DEPTH_COMPONENT16:C.type===un&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===pn&&O===o.DEPTH_COMPONENT&&C.type!==yc&&C.type!==cn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=cn,ue=r.convert(C.type)),C.format===nr&&O===o.DEPTH_COMPONENT&&(O=o.DEPTH_STENCIL,C.type!==$n&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=$n,ue=r.convert(C.type))),fe&&(pe?t.texStorage2D(o.TEXTURE_2D,1,O,q.width,q.height):t.texImage2D(o.TEXTURE_2D,0,O,q.width,q.height,0,he,ue,null));else if(C.isDataTexture)if(re.length>0&&de){pe&&fe&&t.texStorage2D(o.TEXTURE_2D,ve,O,re[0].width,re[0].height);for(let te=0,xe=re.length;te<xe;te++)se=re[te],pe?t.texSubImage2D(o.TEXTURE_2D,te,0,0,se.width,se.height,he,ue,se.data):t.texImage2D(o.TEXTURE_2D,te,O,se.width,se.height,0,he,ue,se.data);C.generateMipmaps=!1}else pe?(fe&&t.texStorage2D(o.TEXTURE_2D,ve,O,q.width,q.height),t.texSubImage2D(o.TEXTURE_2D,0,0,0,q.width,q.height,he,ue,q.data)):t.texImage2D(o.TEXTURE_2D,0,O,q.width,q.height,0,he,ue,q.data);else if(C.isCompressedTexture){pe&&fe&&t.texStorage2D(o.TEXTURE_2D,ve,O,re[0].width,re[0].height);for(let te=0,xe=re.length;te<xe;te++)se=re[te],C.format!==Wt?he!==null?pe?t.compressedTexSubImage2D(o.TEXTURE_2D,te,0,0,se.width,se.height,he,se.data):t.compressedTexImage2D(o.TEXTURE_2D,te,O,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?t.texSubImage2D(o.TEXTURE_2D,te,0,0,se.width,se.height,he,ue,se.data):t.texImage2D(o.TEXTURE_2D,te,O,se.width,se.height,0,he,ue,se.data)}else if(C.isDataArrayTexture)pe?(fe&&t.texStorage3D(o.TEXTURE_2D_ARRAY,ve,O,q.width,q.height,q.depth),t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,he,ue,q.data)):t.texImage3D(o.TEXTURE_2D_ARRAY,0,O,q.width,q.height,q.depth,0,he,ue,q.data);else if(C.isData3DTexture)pe?(fe&&t.texStorage3D(o.TEXTURE_3D,ve,O,q.width,q.height,q.depth),t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,he,ue,q.data)):t.texImage3D(o.TEXTURE_3D,0,O,q.width,q.height,q.depth,0,he,ue,q.data);else if(C.isFramebufferTexture){if(fe)if(pe)t.texStorage2D(o.TEXTURE_2D,ve,O,q.width,q.height);else{let te=q.width,xe=q.height;for(let Oe=0;Oe<ve;Oe++)t.texImage2D(o.TEXTURE_2D,Oe,O,te,xe,0,he,ue,null),te>>=1,xe>>=1}}else if(re.length>0&&de){pe&&fe&&t.texStorage2D(o.TEXTURE_2D,ve,O,re[0].width,re[0].height);for(let te=0,xe=re.length;te<xe;te++)se=re[te],pe?t.texSubImage2D(o.TEXTURE_2D,te,0,0,he,ue,se):t.texImage2D(o.TEXTURE_2D,te,O,he,ue,se);C.generateMipmaps=!1}else pe?(fe&&t.texStorage2D(o.TEXTURE_2D,ve,O,q.width,q.height),t.texSubImage2D(o.TEXTURE_2D,0,0,0,he,ue,q)):t.texImage2D(o.TEXTURE_2D,0,O,he,ue,q);S(C,de)&&M(ee),ce.__currentVersion=ce.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function ye(D,C,Y){if(C.image.length!==6)return;const ee=Te(D,C),ne=C.source;if(t.activeTexture(o.TEXTURE0+Y),t.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture),ne.version!==ne.__currentVersion||ee===!0){o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,C.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,C.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.NONE);const ce=C.isCompressedTexture||C.image[0].isCompressedTexture,Me=C.image[0]&&C.image[0].isDataTexture,q=[];for(let te=0;te<6;te++)!ce&&!Me?q[te]=T(C.image[te],!1,!0,u):q[te]=Me?C.image[te].image:C.image[te],q[te]=Kt(C,q[te]);const de=q[0],he=x(de)||s,ue=r.convert(C.format,C.encoding),O=r.convert(C.type),se=y(C.internalFormat,ue,O,C.encoding),re=s&&C.isVideoTexture!==!0,pe=ne.__currentVersion===void 0||ee===!0;let fe=w(C,de,he);U(o.TEXTURE_CUBE_MAP,C,he);let ve;if(ce){re&&pe&&t.texStorage2D(o.TEXTURE_CUBE_MAP,fe,se,de.width,de.height);for(let te=0;te<6;te++){ve=q[te].mipmaps;for(let xe=0;xe<ve.length;xe++){const Oe=ve[xe];C.format!==Wt?ue!==null?re?t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,0,0,Oe.width,Oe.height,ue,Oe.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,se,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):re?t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,0,0,Oe.width,Oe.height,ue,O,Oe.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,se,Oe.width,Oe.height,0,ue,O,Oe.data)}}}else{ve=C.mipmaps,re&&pe&&(ve.length>0&&fe++,t.texStorage2D(o.TEXTURE_CUBE_MAP,fe,se,q[0].width,q[0].height));for(let te=0;te<6;te++)if(Me){re?t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,q[te].width,q[te].height,ue,O,q[te].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,se,q[te].width,q[te].height,0,ue,O,q[te].data);for(let xe=0;xe<ve.length;xe++){const Ne=ve[xe].image[te].image;re?t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,0,0,Ne.width,Ne.height,ue,O,Ne.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,se,Ne.width,Ne.height,0,ue,O,Ne.data)}}else{re?t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ue,O,q[te]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,se,ue,O,q[te]);for(let xe=0;xe<ve.length;xe++){const Oe=ve[xe];re?t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,0,0,ue,O,Oe.image[te]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,se,ue,O,Oe.image[te])}}}S(C,he)&&M(o.TEXTURE_CUBE_MAP),ne.__currentVersion=ne.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function le(D,C,Y,ee,ne){const ce=r.convert(Y.format,Y.encoding),Me=r.convert(Y.type),q=y(Y.internalFormat,ce,Me,Y.encoding);i.get(C).__hasExternalTextures||(ne===o.TEXTURE_3D||ne===o.TEXTURE_2D_ARRAY?t.texImage3D(ne,0,q,C.width,C.height,C.depth,0,ce,Me,null):t.texImage2D(ne,0,q,C.width,C.height,0,ce,Me,null)),t.bindFramebuffer(o.FRAMEBUFFER,D),De(C)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ee,ne,i.get(Y).__webglTexture,0,Je(C)):o.framebufferTexture2D(o.FRAMEBUFFER,ee,ne,i.get(Y).__webglTexture,0),t.bindFramebuffer(o.FRAMEBUFFER,null)}function Re(D,C,Y){if(o.bindRenderbuffer(o.RENDERBUFFER,D),C.depthBuffer&&!C.stencilBuffer){let ee=o.DEPTH_COMPONENT16;if(Y||De(C)){const ne=C.depthTexture;ne&&ne.isDepthTexture&&(ne.type===un?ee=o.DEPTH_COMPONENT32F:ne.type===cn&&(ee=o.DEPTH_COMPONENT24));const ce=Je(C);De(C)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ce,ee,C.width,C.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,ce,ee,C.width,C.height)}else o.renderbufferStorage(o.RENDERBUFFER,ee,C.width,C.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,D)}else if(C.depthBuffer&&C.stencilBuffer){const ee=Je(C);Y&&De(C)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ee,o.DEPTH24_STENCIL8,C.width,C.height):De(C)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ee,o.DEPTH24_STENCIL8,C.width,C.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,C.width,C.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,D)}else{const ee=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ne=0;ne<ee.length;ne++){const ce=ee[ne],Me=r.convert(ce.format,ce.encoding),q=r.convert(ce.type),de=y(ce.internalFormat,Me,q,ce.encoding),he=Je(C);Y&&De(C)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,he,de,C.width,C.height):De(C)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,he,de,C.width,C.height):o.renderbufferStorage(o.RENDERBUFFER,de,C.width,C.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function me(D,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,D),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),W(C.depthTexture,0);const ee=i.get(C.depthTexture).__webglTexture,ne=Je(C);if(C.depthTexture.format===pn)De(C)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ee,0,ne):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ee,0);else if(C.depthTexture.format===nr)De(C)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ee,0,ne):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function ge(D){const C=i.get(D),Y=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!C.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");me(C.__webglFramebuffer,D)}else if(Y){C.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(o.FRAMEBUFFER,C.__webglFramebuffer[ee]),C.__webglDepthbuffer[ee]=o.createRenderbuffer(),Re(C.__webglDepthbuffer[ee],D,!1)}else t.bindFramebuffer(o.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=o.createRenderbuffer(),Re(C.__webglDepthbuffer,D,!1);t.bindFramebuffer(o.FRAMEBUFFER,null)}function $e(D,C,Y){const ee=i.get(D);C!==void 0&&le(ee.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D),Y!==void 0&&ge(D)}function lt(D){const C=D.texture,Y=i.get(D),ee=i.get(C);D.addEventListener("dispose",L),D.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=o.createTexture()),ee.__version=C.version,a.memory.textures++);const ne=D.isWebGLCubeRenderTarget===!0,ce=D.isWebGLMultipleRenderTargets===!0,Me=x(D)||s;if(ne){Y.__webglFramebuffer=[];for(let q=0;q<6;q++)Y.__webglFramebuffer[q]=o.createFramebuffer()}else{if(Y.__webglFramebuffer=o.createFramebuffer(),ce)if(n.drawBuffers){const q=D.texture;for(let de=0,he=q.length;de<he;de++){const ue=i.get(q[de]);ue.__webglTexture===void 0&&(ue.__webglTexture=o.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&D.samples>0&&De(D)===!1){const q=ce?C:[C];Y.__webglMultisampledFramebuffer=o.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let de=0;de<q.length;de++){const he=q[de];Y.__webglColorRenderbuffer[de]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Y.__webglColorRenderbuffer[de]);const ue=r.convert(he.format,he.encoding),O=r.convert(he.type),se=y(he.internalFormat,ue,O,he.encoding),re=Je(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,re,se,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+de,o.RENDERBUFFER,Y.__webglColorRenderbuffer[de])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(Y.__webglDepthRenderbuffer=o.createRenderbuffer(),Re(Y.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ne){t.bindTexture(o.TEXTURE_CUBE_MAP,ee.__webglTexture),U(o.TEXTURE_CUBE_MAP,C,Me);for(let q=0;q<6;q++)le(Y.__webglFramebuffer[q],D,C,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+q);S(C,Me)&&M(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){const q=D.texture;for(let de=0,he=q.length;de<he;de++){const ue=q[de],O=i.get(ue);t.bindTexture(o.TEXTURE_2D,O.__webglTexture),U(o.TEXTURE_2D,ue,Me),le(Y.__webglFramebuffer,D,ue,o.COLOR_ATTACHMENT0+de,o.TEXTURE_2D),S(ue,Me)&&M(o.TEXTURE_2D)}t.unbindTexture()}else{let q=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(s?q=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(q,ee.__webglTexture),U(q,C,Me),le(Y.__webglFramebuffer,D,C,o.COLOR_ATTACHMENT0,q),S(C,Me)&&M(q),t.unbindTexture()}D.depthBuffer&&ge(D)}function ft(D){const C=x(D)||s,Y=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let ee=0,ne=Y.length;ee<ne;ee++){const ce=Y[ee];if(S(ce,C)){const Me=D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,q=i.get(ce).__webglTexture;t.bindTexture(Me,q),M(Me),t.unbindTexture()}}}function Dt(D){if(s&&D.samples>0&&De(D)===!1){const C=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],Y=D.width,ee=D.height;let ne=o.COLOR_BUFFER_BIT;const ce=[],Me=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,q=i.get(D),de=D.isWebGLMultipleRenderTargets===!0;if(de)for(let he=0;he<C.length;he++)t.bindFramebuffer(o.FRAMEBUFFER,q.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+he,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,q.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+he,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,q.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,q.__webglFramebuffer);for(let he=0;he<C.length;he++){ce.push(o.COLOR_ATTACHMENT0+he),D.depthBuffer&&ce.push(Me);const ue=q.__ignoreDepthValues!==void 0?q.__ignoreDepthValues:!1;if(ue===!1&&(D.depthBuffer&&(ne|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&(ne|=o.STENCIL_BUFFER_BIT)),de&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,q.__webglColorRenderbuffer[he]),ue===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[Me]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[Me])),de){const O=i.get(C[he]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,O,0)}o.blitFramebuffer(0,0,Y,ee,0,0,Y,ee,ne,o.NEAREST),f&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),de)for(let he=0;he<C.length;he++){t.bindFramebuffer(o.FRAMEBUFFER,q.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+he,o.RENDERBUFFER,q.__webglColorRenderbuffer[he]);const ue=i.get(C[he]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,q.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+he,o.TEXTURE_2D,ue,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,q.__webglMultisampledFramebuffer)}}function Je(D){return Math.min(p,D.samples)}function De(D){const C=i.get(D);return s&&D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Zt(D){const C=a.render.frame;g.get(D)!==C&&(g.set(D,C),D.update())}function Kt(D,C){const Y=D.encoding,ee=D.format,ne=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||D.format===Ua||Y!==Mn&&(Y===Ve?s===!1?e.has("EXT_sRGB")===!0&&ee===Wt?(D.format=Ua,D.minFilter=Ht,D.generateMipmaps=!1):C=Rc.sRGBToLinear(C):(ee!==Wt||ne!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Y)),C}this.allocateTextureUnit=k,this.resetTextureUnits=z,this.setTexture2D=W,this.setTexture2DArray=J,this.setTexture3D=Z,this.setTextureCube=j,this.rebindTextures=$e,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=le,this.useMultisampledRTT=De}function Hg(o,e,t){const i=t.isWebGL2;function n(r,a=null){let s;if(r===Sn)return o.UNSIGNED_BYTE;if(r===Nf)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Uf)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Ff)return o.BYTE;if(r===If)return o.SHORT;if(r===yc)return o.UNSIGNED_SHORT;if(r===Of)return o.INT;if(r===cn)return o.UNSIGNED_INT;if(r===un)return o.FLOAT;if(r===Ar)return i?o.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===Bf)return o.ALPHA;if(r===Wt)return o.RGBA;if(r===Gf)return o.LUMINANCE;if(r===kf)return o.LUMINANCE_ALPHA;if(r===pn)return o.DEPTH_COMPONENT;if(r===nr)return o.DEPTH_STENCIL;if(r===Hf)return o.RED;if(r===zf)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),o.RGBA;if(r===Ua)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(r===Vf)return o.RED_INTEGER;if(r===Wf)return o.RG;if(r===Xf)return o.RG_INTEGER;if(r===qf)return o.RGBA_INTEGER;if(r===zs||r===Gs||r===ks||r===Hs)if(a===Ve)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===zs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Hs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===zs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Gs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ks)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Hs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Yo||r===Zo||r===Ko||r===jo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===Yo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Zo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ko)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===jo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Yf)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===$o||r===Jo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===$o)return a===Ve?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===Jo)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Qo||r===el||r===tl||r===il||r===nl||r===rl||r===sl||r===al||r===ol||r===ll||r===cl||r===ul||r===fl||r===hl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===Qo)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===el)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===tl)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===il)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===nl)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===rl)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===sl)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===al)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ol)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ll)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===cl)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ul)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===fl)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===hl)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===dl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===dl)return a===Ve?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===$n?i?o.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):o[r]!==void 0?o[r]:null}return{convert:n}}class Vg extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class us extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wg={type:"move"};class ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,a=null;const s=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(s!==null&&(n=t.getPose(e.targetRaySpace,i),n!==null&&(s.matrix.fromArray(n.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),n.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(n.linearVelocity)):s.hasLinearVelocity=!1,n.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(n.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Wg))),u&&e.hand){a=!0;for(const d of e.hand.values()){const m=t.getJointPose(d,i);if(u.joints[d.jointName]===void 0){const E=new us;E.matrixAutoUpdate=!1,E.visible=!1,u.joints[d.jointName]=E,u.add(E)}const _=u.joints[d.jointName];m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const c=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],h=c.position.distanceTo(p.position),f=.02,g=.005;u.inputState.pinching&&h>f+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=f-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));return s!==null&&(s.visible=n!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=a!==null),this}}class Xg extends ni{constructor(e,t,i,n,r,a,s,l,u,c){if(c=c!==void 0?c:pn,c!==pn&&c!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===pn&&(i=cn),i===void 0&&c===nr&&(i=$n),super(null,n,r,a,s,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:wt,this.minFilter=l!==void 0?l:wt,this.flipY=!1,this.generateMipmaps=!1}}class qg extends ur{constructor(e,t){super();const i=this;let n=null,r=1,a=null,s="local-floor",l=null,u=null,c=null,p=null,h=null,f=null;const g=t.getContextAttributes();let d=null,m=null;const _=[],E=new Map,T=new Vt;T.layers.enable(1),T.viewport=new mt;const x=new Vt;x.layers.enable(2),x.viewport=new mt;const v=[T,x],S=new Vg;S.layers.enable(1),S.layers.enable(2);let M=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let W=_[B];return W===void 0&&(W=new ma,_[B]=W),W.getTargetRaySpace()},this.getControllerGrip=function(B){let W=_[B];return W===void 0&&(W=new ma,_[B]=W),W.getGripSpace()},this.getHand=function(B){let W=_[B];return W===void 0&&(W=new ma,_[B]=W),W.getHandSpace()};function w(B){const W=E.get(B.inputSource);W!==void 0&&W.dispatchEvent({type:B.type,data:B.inputSource})}function A(){n.removeEventListener("select",w),n.removeEventListener("selectstart",w),n.removeEventListener("selectend",w),n.removeEventListener("squeeze",w),n.removeEventListener("squeezestart",w),n.removeEventListener("squeezeend",w),n.removeEventListener("end",A),n.removeEventListener("inputsourceschange",b),E.forEach(function(B,W){B!==void 0&&B.disconnect(W)}),E.clear(),M=null,y=null,e.setRenderTarget(d),h=null,p=null,c=null,n=null,m=null,k.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return p!==null?p:h},this.getBinding=function(){return c},this.getFrame=function(){return f},this.getSession=function(){return n},this.setSession=async function(B){if(n=B,n!==null){if(d=e.getRenderTarget(),n.addEventListener("select",w),n.addEventListener("selectstart",w),n.addEventListener("selectend",w),n.addEventListener("squeeze",w),n.addEventListener("squeezestart",w),n.addEventListener("squeezeend",w),n.addEventListener("end",A),n.addEventListener("inputsourceschange",b),g.xrCompatible!==!0&&await t.makeXRCompatible(),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const W={antialias:n.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(n,t,W),n.updateRenderState({baseLayer:h}),m=new Ri(h.framebufferWidth,h.framebufferHeight,{format:Wt,type:Sn,encoding:e.outputEncoding})}else{let W=null,J=null,Z=null;g.depth&&(Z=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,W=g.stencil?nr:pn,J=g.stencil?$n:cn);const j={colorFormat:e.outputEncoding===Ve?t.SRGB8_ALPHA8:t.RGBA8,depthFormat:Z,scaleFactor:r};c=new XRWebGLBinding(n,t),p=c.createProjectionLayer(j),n.updateRenderState({layers:[p]}),m=new Ri(p.textureWidth,p.textureHeight,{format:Wt,type:Sn,depthTexture:new Xg(p.textureWidth,p.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const ie=e.properties.get(m);ie.__ignoreDepthValues=p.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await n.requestReferenceSpace(s),k.setContext(n),k.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function b(B){const W=n.inputSources;for(let J=0;J<W.length;J++){const Z=W[J].handedness==="right"?1:0;E.set(W[J],_[Z])}for(let J=0;J<B.removed.length;J++){const Z=B.removed[J],j=E.get(Z);j&&(j.dispatchEvent({type:"disconnected",data:Z}),E.delete(Z))}for(let J=0;J<B.added.length;J++){const Z=B.added[J],j=E.get(Z);j&&j.dispatchEvent({type:"connected",data:Z})}}const L=new H,F=new H;function P(B,W,J){L.setFromMatrixPosition(W.matrixWorld),F.setFromMatrixPosition(J.matrixWorld);const Z=L.distanceTo(F),j=W.projectionMatrix.elements,ie=J.projectionMatrix.elements,oe=j[14]/(j[10]-1),U=j[14]/(j[10]+1),Te=(j[9]+1)/j[5],Se=(j[9]-1)/j[5],ye=(j[8]-1)/j[0],le=(ie[8]+1)/ie[0],Re=oe*ye,me=oe*le,ge=Z/(-ye+le),$e=ge*-ye;W.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX($e),B.translateZ(ge),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const lt=oe+ge,ft=U+ge,Dt=Re-$e,Je=me+(Z-$e),De=Te*U/ft*lt,Zt=Se*U/ft*lt;B.projectionMatrix.makePerspective(Dt,Je,De,Zt,lt,ft)}function N(B,W){W===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(W.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(n===null)return;S.near=x.near=T.near=B.near,S.far=x.far=T.far=B.far,(M!==S.near||y!==S.far)&&(n.updateRenderState({depthNear:S.near,depthFar:S.far}),M=S.near,y=S.far);const W=B.parent,J=S.cameras;N(S,W);for(let j=0;j<J.length;j++)N(J[j],W);S.matrixWorld.decompose(S.position,S.quaternion,S.scale),B.position.copy(S.position),B.quaternion.copy(S.quaternion),B.scale.copy(S.scale),B.matrix.copy(S.matrix),B.matrixWorld.copy(S.matrixWorld);const Z=B.children;for(let j=0,ie=Z.length;j<ie;j++)Z[j].updateMatrixWorld(!0);J.length===2?P(S,T,x):S.projectionMatrix.copy(T.projectionMatrix)},this.getCamera=function(){return S},this.getFoveation=function(){if(p!==null)return p.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(B){p!==null&&(p.fixedFoveation=B),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=B)};let I=null;function z(B,W){if(u=W.getViewerPose(l||a),f=W,u!==null){const Z=u.views;h!==null&&(e.setRenderTargetFramebuffer(m,h.framebuffer),e.setRenderTarget(m));let j=!1;Z.length!==S.cameras.length&&(S.cameras.length=0,j=!0);for(let ie=0;ie<Z.length;ie++){const oe=Z[ie];let U=null;if(h!==null)U=h.getViewport(oe);else{const Se=c.getViewSubImage(p,oe);U=Se.viewport,ie===0&&(e.setRenderTargetTextures(m,Se.colorTexture,p.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(m))}let Te=v[ie];Te===void 0&&(Te=new Vt,Te.layers.enable(ie),Te.viewport=new mt,v[ie]=Te),Te.matrix.fromArray(oe.transform.matrix),Te.projectionMatrix.fromArray(oe.projectionMatrix),Te.viewport.set(U.x,U.y,U.width,U.height),ie===0&&S.matrix.copy(Te.matrix),j===!0&&S.cameras.push(Te)}}const J=n.inputSources;for(let Z=0;Z<_.length;Z++){const j=J[Z],ie=E.get(j);ie!==void 0&&ie.update(j,W,l||a)}I&&I(B,W),f=null}const k=new Tc;k.setAnimationLoop(z),this.setAnimationLoop=function(B){I=B},this.dispose=function(){}}}function Yg(o,e){function t(d,m){d.fogColor.value.copy(m.color),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function i(d,m,_,E,T){m.isMeshBasicMaterial||m.isMeshLambertMaterial?n(d,m):m.isMeshToonMaterial?(n(d,m),c(d,m)):m.isMeshPhongMaterial?(n(d,m),u(d,m)):m.isMeshStandardMaterial?(n(d,m),p(d,m),m.isMeshPhysicalMaterial&&h(d,m,T)):m.isMeshMatcapMaterial?(n(d,m),f(d,m)):m.isMeshDepthMaterial?n(d,m):m.isMeshDistanceMaterial?(n(d,m),g(d,m)):m.isMeshNormalMaterial?n(d,m):m.isLineBasicMaterial?(r(d,m),m.isLineDashedMaterial&&a(d,m)):m.isPointsMaterial?s(d,m,_,E):m.isSpriteMaterial?l(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function n(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.bumpMap&&(d.bumpMap.value=m.bumpMap,d.bumpScale.value=m.bumpScale,m.side===ii&&(d.bumpScale.value*=-1)),m.displacementMap&&(d.displacementMap.value=m.displacementMap,d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap),m.normalMap&&(d.normalMap.value=m.normalMap,d.normalScale.value.copy(m.normalScale),m.side===ii&&d.normalScale.value.negate()),m.specularMap&&(d.specularMap.value=m.specularMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap){d.lightMap.value=m.lightMap;const x=o.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=m.lightMapIntensity*x}m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity);let E;m.map?E=m.map:m.specularMap?E=m.specularMap:m.displacementMap?E=m.displacementMap:m.normalMap?E=m.normalMap:m.bumpMap?E=m.bumpMap:m.roughnessMap?E=m.roughnessMap:m.metalnessMap?E=m.metalnessMap:m.alphaMap?E=m.alphaMap:m.emissiveMap?E=m.emissiveMap:m.clearcoatMap?E=m.clearcoatMap:m.clearcoatNormalMap?E=m.clearcoatNormalMap:m.clearcoatRoughnessMap?E=m.clearcoatRoughnessMap:m.iridescenceMap?E=m.iridescenceMap:m.iridescenceThicknessMap?E=m.iridescenceThicknessMap:m.specularIntensityMap?E=m.specularIntensityMap:m.specularColorMap?E=m.specularColorMap:m.transmissionMap?E=m.transmissionMap:m.thicknessMap?E=m.thicknessMap:m.sheenColorMap?E=m.sheenColorMap:m.sheenRoughnessMap&&(E=m.sheenRoughnessMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),d.uvTransform.value.copy(E.matrix));let T;m.aoMap?T=m.aoMap:m.lightMap&&(T=m.lightMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),d.uv2Transform.value.copy(T.matrix))}function r(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity}function a(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function s(d,m,_,E){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*_,d.scale.value=E*.5,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let T;m.map?T=m.map:m.alphaMap&&(T=m.alphaMap),T!==void 0&&(T.matrixAutoUpdate===!0&&T.updateMatrix(),d.uvTransform.value.copy(T.matrix))}function l(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function u(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function c(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function p(d,m){d.roughness.value=m.roughness,d.metalness.value=m.metalness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function h(d,m,_){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),d.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===ii&&d.clearcoatNormalScale.value.negate())),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap)}function f(d,m){m.matcap&&(d.matcap.value=m.matcap)}function g(d,m){d.referencePosition.value.copy(m.referencePosition),d.nearDistance.value=m.nearDistance,d.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function Zg(){const o=xs("canvas");return o.style.display="block",o}function Kg(o={}){this.isWebGLRenderer=!0;const e=o.canvas!==void 0?o.canvas:Zg(),t=o.context!==void 0?o.context:null,i=o.depth!==void 0?o.depth:!0,n=o.stencil!==void 0?o.stencil:!0,r=o.antialias!==void 0?o.antialias:!1,a=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,s=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",u=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let c;t!==null?c=t.getContextAttributes().alpha:c=o.alpha!==void 0?o.alpha:!1;let p=null,h=null;const f=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Mn,this.physicallyCorrectLights=!1,this.toneMapping=Ci,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const d=this;let m=!1,_=0,E=0,T=null,x=-1,v=null;const S=new mt,M=new mt;let y=null,w=e.width,A=e.height,b=1,L=null,F=null;const P=new mt(0,0,w,A),N=new mt(0,0,w,A);let I=!1;const z=new wc;let k=!1,B=!1,W=null;const J=new gt,Z=new ze,j=new H,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function oe(){return T===null?b:1}let U=t;function Te(R,G){for(let X=0;X<R.length;X++){const V=R[X],$=e.getContext(V,G);if($!==null)return $}return null}try{const R={alpha:!0,depth:i,stencil:n,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:s,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ef}`),e.addEventListener("webglcontextlost",O,!1),e.addEventListener("webglcontextrestored",se,!1),e.addEventListener("webglcontextcreationerror",re,!1),U===null){const G=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&G.shift(),U=Te(G,R),U===null)throw Te(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Se,ye,le,Re,me,ge,$e,lt,ft,Dt,Je,De,Zt,Kt,D,C,Y,ee,ne,ce,Me,q,de;function he(){Se=new rm(U),ye=new Kp(U,Se,o),Se.init(ye),q=new Hg(U,Se,ye),le=new Gg(U,Se,ye),Re=new om(U),me=new bg,ge=new kg(U,Se,le,me,ye,q,Re),$e=new em(d),lt=new nm(d),ft=new ch(U,ye),de=new Yp(U,Se,ft,ye),Dt=new sm(U,ft,Re,de),Je=new fm(U,Dt,ft,Re),ne=new um(U,ye,ge),C=new jp(me),De=new Tg(d,$e,lt,Se,ye,de,C),Zt=new Yg(d,me),Kt=new Cg,D=new Ig(Se,ye),ee=new qp(d,$e,le,Je,c,a),Y=new zg(d,Je,ye),ce=new Zp(U,Se,Re,ye),Me=new am(U,Se,Re,ye),Re.programs=De.programs,d.capabilities=ye,d.extensions=Se,d.properties=me,d.renderLists=Kt,d.shadowMap=Y,d.state=le,d.info=Re}he();const ue=new qg(d,U);this.xr=ue,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const R=Se.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Se.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return b},this.setPixelRatio=function(R){R!==void 0&&(b=R,this.setSize(w,A,!1))},this.getSize=function(R){return R.set(w,A)},this.setSize=function(R,G,X){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=R,A=G,e.width=Math.floor(R*b),e.height=Math.floor(G*b),X!==!1&&(e.style.width=R+"px",e.style.height=G+"px"),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(w*b,A*b).floor()},this.setDrawingBufferSize=function(R,G,X){w=R,A=G,b=X,e.width=Math.floor(R*X),e.height=Math.floor(G*X),this.setViewport(0,0,R,G)},this.getCurrentViewport=function(R){return R.copy(S)},this.getViewport=function(R){return R.copy(P)},this.setViewport=function(R,G,X,V){R.isVector4?P.set(R.x,R.y,R.z,R.w):P.set(R,G,X,V),le.viewport(S.copy(P).multiplyScalar(b).floor())},this.getScissor=function(R){return R.copy(N)},this.setScissor=function(R,G,X,V){R.isVector4?N.set(R.x,R.y,R.z,R.w):N.set(R,G,X,V),le.scissor(M.copy(N).multiplyScalar(b).floor())},this.getScissorTest=function(){return I},this.setScissorTest=function(R){le.setScissorTest(I=R)},this.setOpaqueSort=function(R){L=R},this.setTransparentSort=function(R){F=R},this.getClearColor=function(R){return R.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(R=!0,G=!0,X=!0){let V=0;R&&(V|=U.COLOR_BUFFER_BIT),G&&(V|=U.DEPTH_BUFFER_BIT),X&&(V|=U.STENCIL_BUFFER_BIT),U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",O,!1),e.removeEventListener("webglcontextrestored",se,!1),e.removeEventListener("webglcontextcreationerror",re,!1),Kt.dispose(),D.dispose(),me.dispose(),$e.dispose(),lt.dispose(),Je.dispose(),de.dispose(),De.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Oe),ue.removeEventListener("sessionend",Ne),W&&(W.dispose(),W=null),xt.stop()};function O(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const R=Re.autoReset,G=Y.enabled,X=Y.autoUpdate,V=Y.needsUpdate,$=Y.type;he(),Re.autoReset=R,Y.enabled=G,Y.autoUpdate=X,Y.needsUpdate=V,Y.type=$}function re(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function pe(R){const G=R.target;G.removeEventListener("dispose",pe),fe(G)}function fe(R){ve(R),me.remove(R)}function ve(R){const G=me.get(R).programs;G!==void 0&&(G.forEach(function(X){De.releaseProgram(X)}),R.isShaderMaterial&&De.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,X,V,$,_e){G===null&&(G=ie);const Ee=$.isMesh&&$.matrixWorld.determinant()<0,be=Vu(R,G,X,V,$);le.setMaterial(V,Ee);let we=X.index;const Ue=X.attributes.position;if(we===null){if(Ue===void 0||Ue.count===0)return}else if(we.count===0)return;let Pe=1;V.wireframe===!0&&(we=Dt.getWireframeAttribute(X),Pe=2),de.setup($,V,be,X,we);let Le,qe=ce;we!==null&&(Le=ft.get(we),qe=Me,qe.setIndex(Le));const Ji=we!==null?we.count:Ue.count,bn=X.drawRange.start*Pe,An=X.drawRange.count*Pe,si=_e!==null?_e.start*Pe:0,Ie=_e!==null?_e.count*Pe:1/0,Cn=Math.max(bn,si),Qe=Math.min(Ji,bn+An,si+Ie)-1,ai=Math.max(0,Qe-Cn+1);if(ai!==0){if($.isMesh)V.wireframe===!0?(le.setLineWidth(V.wireframeLinewidth*oe()),qe.setMode(U.LINES)):qe.setMode(U.TRIANGLES);else if($.isLine){let Fi=V.linewidth;Fi===void 0&&(Fi=1),le.setLineWidth(Fi*oe()),$.isLineSegments?qe.setMode(U.LINES):$.isLineLoop?qe.setMode(U.LINE_LOOP):qe.setMode(U.LINE_STRIP)}else $.isPoints?qe.setMode(U.POINTS):$.isSprite&&qe.setMode(U.TRIANGLES);if($.isInstancedMesh)qe.renderInstances(Cn,ai,$.count);else if(X.isInstancedBufferGeometry){const Fi=Math.min(X.instanceCount,X._maxInstanceCount);qe.renderInstances(Cn,ai,Fi)}else qe.render(Cn,ai)}},this.compile=function(R,G){h=D.get(R),h.init(),g.push(h),R.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(h.pushLight(X),X.castShadow&&h.pushShadow(X))}),h.setupLights(d.physicallyCorrectLights),R.traverse(function(X){const V=X.material;if(V)if(Array.isArray(V))for(let $=0;$<V.length;$++){const _e=V[$];Fs(_e,R,X)}else Fs(V,R,X)}),g.pop(),h=null};let te=null;function xe(R){te&&te(R)}function Oe(){xt.stop()}function Ne(){xt.start()}const xt=new Tc;xt.setAnimationLoop(xe),typeof self!="undefined"&&xt.setContext(self),this.setAnimationLoop=function(R){te=R,ue.setAnimationLoop(R),R===null?xt.stop():xt.start()},ue.addEventListener("sessionstart",Oe),ue.addEventListener("sessionend",Ne),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;R.autoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(G),G=ue.getCamera()),R.isScene===!0&&R.onBeforeRender(d,R,G,T),h=D.get(R,g.length),h.init(),g.push(h),J.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),z.setFromProjectionMatrix(J),B=this.localClippingEnabled,k=C.init(this.clippingPlanes,B,G),p=Kt.get(R,f.length),p.init(),f.push(p),ri(R,G,0,d.sortObjects),p.finish(),d.sortObjects===!0&&p.sort(L,F),k===!0&&C.beginShadows();const X=h.state.shadowsArray;if(Y.render(X,R,G),k===!0&&C.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(p,R),h.setupLights(d.physicallyCorrectLights),G.isArrayCamera){const V=G.cameras;for(let $=0,_e=V.length;$<_e;$++){const Ee=V[$];Lo(p,R,Ee,Ee.viewport)}}else Lo(p,R,G);T!==null&&(ge.updateMultisampleRenderTarget(T),ge.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(d,R,G),de.resetDefaultState(),x=-1,v=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,f.pop(),f.length>0?p=f[f.length-1]:p=null};function ri(R,G,X,V){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)X=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)h.pushLight(R),R.castShadow&&h.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||z.intersectsSprite(R)){V&&j.setFromMatrixPosition(R.matrixWorld).applyMatrix4(J);const Ee=Je.update(R),be=R.material;be.visible&&p.push(R,Ee,be,X,j.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(R.isSkinnedMesh&&R.skeleton.frame!==Re.render.frame&&(R.skeleton.update(),R.skeleton.frame=Re.render.frame),!R.frustumCulled||z.intersectsObject(R))){V&&j.setFromMatrixPosition(R.matrixWorld).applyMatrix4(J);const Ee=Je.update(R),be=R.material;if(Array.isArray(be)){const we=Ee.groups;for(let Ue=0,Pe=we.length;Ue<Pe;Ue++){const Le=we[Ue],qe=be[Le.materialIndex];qe&&qe.visible&&p.push(R,Ee,qe,X,j.z,Le)}}else be.visible&&p.push(R,Ee,be,X,j.z,null)}}const _e=R.children;for(let Ee=0,be=_e.length;Ee<be;Ee++)ri(_e[Ee],G,X,V)}function Lo(R,G,X,V){const $=R.opaque,_e=R.transmissive,Ee=R.transparent;h.setupLightsView(X),_e.length>0&&ku($,G,X),V&&le.viewport(S.copy(V)),$.length>0&&Vr($,G,X),_e.length>0&&Vr(_e,G,X),Ee.length>0&&Vr(Ee,G,X),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function ku(R,G,X){const V=ye.isWebGL2;W===null&&(W=new Ri(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?Ar:Sn,minFilter:Cs,samples:V&&r===!0?4:0})),d.getDrawingBufferSize(Z),V?W.setSize(Z.x,Z.y):W.setSize(Da(Z.x),Da(Z.y));const $=d.getRenderTarget();d.setRenderTarget(W),d.clear();const _e=d.toneMapping;d.toneMapping=Ci,Vr(R,G,X),d.toneMapping=_e,ge.updateMultisampleRenderTarget(W),ge.updateRenderTargetMipmap(W),d.setRenderTarget($)}function Vr(R,G,X){const V=G.isScene===!0?G.overrideMaterial:null;for(let $=0,_e=R.length;$<_e;$++){const Ee=R[$],be=Ee.object,we=Ee.geometry,Ue=V===null?Ee.material:V,Pe=Ee.group;be.layers.test(X.layers)&&Hu(be,G,X,we,Ue,Pe)}}function Hu(R,G,X,V,$,_e){R.onBeforeRender(d,G,X,V,$,_e),R.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(d,G,X,V,R,_e),$.transparent===!0&&$.side===yn?($.side=ii,$.needsUpdate=!0,d.renderBufferDirect(X,G,V,$,R,_e),$.side=br,$.needsUpdate=!0,d.renderBufferDirect(X,G,V,$,R,_e),$.side=yn):d.renderBufferDirect(X,G,V,$,R,_e),R.onAfterRender(d,G,X,V,$,_e)}function Fs(R,G,X){G.isScene!==!0&&(G=ie);const V=me.get(R),$=h.state.lights,_e=h.state.shadowsArray,Ee=$.state.version,be=De.getParameters(R,$.state,_e,G,X),we=De.getProgramCacheKey(be);let Ue=V.programs;V.environment=R.isMeshStandardMaterial?G.environment:null,V.fog=G.fog,V.envMap=(R.isMeshStandardMaterial?lt:$e).get(R.envMap||V.environment),Ue===void 0&&(R.addEventListener("dispose",pe),Ue=new Map,V.programs=Ue);let Pe=Ue.get(we);if(Pe!==void 0){if(V.currentProgram===Pe&&V.lightsStateVersion===Ee)return Fo(R,be),Pe}else be.uniforms=De.getUniforms(R),R.onBuild(X,be,d),R.onBeforeCompile(be,d),Pe=De.acquireProgram(be,we),Ue.set(we,Pe),V.uniforms=be.uniforms;const Le=V.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Le.clippingPlanes=C.uniform),Fo(R,be),V.needsLights=Xu(R),V.lightsStateVersion=Ee,V.needsLights&&(Le.ambientLightColor.value=$.state.ambient,Le.lightProbe.value=$.state.probe,Le.directionalLights.value=$.state.directional,Le.directionalLightShadows.value=$.state.directionalShadow,Le.spotLights.value=$.state.spot,Le.spotLightShadows.value=$.state.spotShadow,Le.rectAreaLights.value=$.state.rectArea,Le.ltc_1.value=$.state.rectAreaLTC1,Le.ltc_2.value=$.state.rectAreaLTC2,Le.pointLights.value=$.state.point,Le.pointLightShadows.value=$.state.pointShadow,Le.hemisphereLights.value=$.state.hemi,Le.directionalShadowMap.value=$.state.directionalShadowMap,Le.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Le.spotShadowMap.value=$.state.spotShadowMap,Le.spotShadowMatrix.value=$.state.spotShadowMatrix,Le.pointShadowMap.value=$.state.pointShadowMap,Le.pointShadowMatrix.value=$.state.pointShadowMatrix);const qe=Pe.getUniforms(),Ji=ms.seqWithValue(qe.seq,Le);return V.currentProgram=Pe,V.uniformsList=Ji,Pe}function Fo(R,G){const X=me.get(R);X.outputEncoding=G.outputEncoding,X.instancing=G.instancing,X.skinning=G.skinning,X.morphTargets=G.morphTargets,X.morphNormals=G.morphNormals,X.morphColors=G.morphColors,X.morphTargetsCount=G.morphTargetsCount,X.numClippingPlanes=G.numClippingPlanes,X.numIntersection=G.numClipIntersection,X.vertexAlphas=G.vertexAlphas,X.vertexTangents=G.vertexTangents,X.toneMapping=G.toneMapping}function Vu(R,G,X,V,$){G.isScene!==!0&&(G=ie),ge.resetTextureUnits();const _e=G.fog,Ee=V.isMeshStandardMaterial?G.environment:null,be=T===null?d.outputEncoding:T.isXRRenderTarget===!0?T.texture.encoding:Mn,we=(V.isMeshStandardMaterial?lt:$e).get(V.envMap||Ee),Ue=V.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Pe=!!V.normalMap&&!!X.attributes.tangent,Le=!!X.morphAttributes.position,qe=!!X.morphAttributes.normal,Ji=!!X.morphAttributes.color,bn=V.toneMapped?d.toneMapping:Ci,An=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,si=An!==void 0?An.length:0,Ie=me.get(V),Cn=h.state.lights;if(k===!0&&(B===!0||R!==v)){const oi=R===v&&V.id===x;C.setState(V,R,oi)}let Qe=!1;V.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Cn.state.version||Ie.outputEncoding!==be||$.isInstancedMesh&&Ie.instancing===!1||!$.isInstancedMesh&&Ie.instancing===!0||$.isSkinnedMesh&&Ie.skinning===!1||!$.isSkinnedMesh&&Ie.skinning===!0||Ie.envMap!==we||V.fog===!0&&Ie.fog!==_e||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==C.numPlanes||Ie.numIntersection!==C.numIntersection)||Ie.vertexAlphas!==Ue||Ie.vertexTangents!==Pe||Ie.morphTargets!==Le||Ie.morphNormals!==qe||Ie.morphColors!==Ji||Ie.toneMapping!==bn||ye.isWebGL2===!0&&Ie.morphTargetsCount!==si)&&(Qe=!0):(Qe=!0,Ie.__version=V.version);let ai=Ie.currentProgram;Qe===!0&&(ai=Fs(V,G,$));let Fi=!1,hr=!1,Is=!1;const yt=ai.getUniforms(),dr=Ie.uniforms;if(le.useProgram(ai.program)&&(Fi=!0,hr=!0,Is=!0),V.id!==x&&(x=V.id,hr=!0),Fi||v!==R){if(yt.setValue(U,"projectionMatrix",R.projectionMatrix),ye.logarithmicDepthBuffer&&yt.setValue(U,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),v!==R&&(v=R,hr=!0,Is=!0),V.isShaderMaterial||V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshStandardMaterial||V.envMap){const oi=yt.map.cameraPosition;oi!==void 0&&oi.setValue(U,j.setFromMatrixPosition(R.matrixWorld))}(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&yt.setValue(U,"isOrthographic",R.isOrthographicCamera===!0),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial||V.isShadowMaterial||$.isSkinnedMesh)&&yt.setValue(U,"viewMatrix",R.matrixWorldInverse)}if($.isSkinnedMesh){yt.setOptional(U,$,"bindMatrix"),yt.setOptional(U,$,"bindMatrixInverse");const oi=$.skeleton;oi&&(ye.floatVertexTextures?(oi.boneTexture===null&&oi.computeBoneTexture(),yt.setValue(U,"boneTexture",oi.boneTexture,ge),yt.setValue(U,"boneTextureSize",oi.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Os=X.morphAttributes;return(Os.position!==void 0||Os.normal!==void 0||Os.color!==void 0&&ye.isWebGL2===!0)&&ne.update($,X,V,ai),(hr||Ie.receiveShadow!==$.receiveShadow)&&(Ie.receiveShadow=$.receiveShadow,yt.setValue(U,"receiveShadow",$.receiveShadow)),hr&&(yt.setValue(U,"toneMappingExposure",d.toneMappingExposure),Ie.needsLights&&Wu(dr,Is),_e&&V.fog===!0&&Zt.refreshFogUniforms(dr,_e),Zt.refreshMaterialUniforms(dr,V,b,A,W),ms.upload(U,Ie.uniformsList,dr,ge)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ms.upload(U,Ie.uniformsList,dr,ge),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&yt.setValue(U,"center",$.center),yt.setValue(U,"modelViewMatrix",$.modelViewMatrix),yt.setValue(U,"normalMatrix",$.normalMatrix),yt.setValue(U,"modelMatrix",$.matrixWorld),ai}function Wu(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function Xu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,G,X){me.get(R.texture).__webglTexture=G,me.get(R.depthTexture).__webglTexture=X;const V=me.get(R);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=X===void 0,V.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,G){const X=me.get(R);X.__webglFramebuffer=G,X.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,X=0){T=R,_=G,E=X;let V=!0;if(R){const we=me.get(R);we.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(U.FRAMEBUFFER,null),V=!1):we.__webglFramebuffer===void 0?ge.setupRenderTarget(R):we.__hasExternalTextures&&ge.rebindTextures(R,me.get(R.texture).__webglTexture,me.get(R.depthTexture).__webglTexture)}let $=null,_e=!1,Ee=!1;if(R){const we=R.texture;(we.isData3DTexture||we.isDataArrayTexture)&&(Ee=!0);const Ue=me.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?($=Ue[G],_e=!0):ye.isWebGL2&&R.samples>0&&ge.useMultisampledRTT(R)===!1?$=me.get(R).__webglMultisampledFramebuffer:$=Ue,S.copy(R.viewport),M.copy(R.scissor),y=R.scissorTest}else S.copy(P).multiplyScalar(b).floor(),M.copy(N).multiplyScalar(b).floor(),y=I;if(le.bindFramebuffer(U.FRAMEBUFFER,$)&&ye.drawBuffers&&V&&le.drawBuffers(R,$),le.viewport(S),le.scissor(M),le.setScissorTest(y),_e){const we=me.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+G,we.__webglTexture,X)}else if(Ee){const we=me.get(R.texture),Ue=G||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,we.__webglTexture,X||0,Ue)}x=-1},this.readRenderTargetPixels=function(R,G,X,V,$,_e,Ee){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=me.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ee!==void 0&&(be=be[Ee]),be){le.bindFramebuffer(U.FRAMEBUFFER,be);try{const we=R.texture,Ue=we.format,Pe=we.type;if(Ue!==Wt&&q.convert(Ue)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=Pe===Ar&&(Se.has("EXT_color_buffer_half_float")||ye.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Pe!==Sn&&q.convert(Pe)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pe===un&&(ye.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-V&&X>=0&&X<=R.height-$&&U.readPixels(G,X,V,$,q.convert(Ue),q.convert(Pe),_e)}finally{const we=T!==null?me.get(T).__webglFramebuffer:null;le.bindFramebuffer(U.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(R,G,X=0){const V=Math.pow(2,-X),$=Math.floor(G.image.width*V),_e=Math.floor(G.image.height*V);ge.setTexture2D(G,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,R.x,R.y,$,_e),le.unbindTexture()},this.copyTextureToTexture=function(R,G,X,V=0){const $=G.image.width,_e=G.image.height,Ee=q.convert(X.format),be=q.convert(X.type);ge.setTexture2D(X,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,X.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,X.unpackAlignment),G.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,V,R.x,R.y,$,_e,Ee,be,G.image.data):G.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,V,R.x,R.y,G.mipmaps[0].width,G.mipmaps[0].height,Ee,G.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,V,R.x,R.y,Ee,be,G.image),V===0&&X.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),le.unbindTexture()},this.copyTextureToTexture3D=function(R,G,X,V,$=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=R.max.x-R.min.x+1,Ee=R.max.y-R.min.y+1,be=R.max.z-R.min.z+1,we=q.convert(V.format),Ue=q.convert(V.type);let Pe;if(V.isData3DTexture)ge.setTexture3D(V,0),Pe=U.TEXTURE_3D;else if(V.isDataArrayTexture)ge.setTexture2DArray(V,0),Pe=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);const Le=U.getParameter(U.UNPACK_ROW_LENGTH),qe=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ji=U.getParameter(U.UNPACK_SKIP_PIXELS),bn=U.getParameter(U.UNPACK_SKIP_ROWS),An=U.getParameter(U.UNPACK_SKIP_IMAGES),si=X.isCompressedTexture?X.mipmaps[0]:X.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,si.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,si.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,R.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,R.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,R.min.z),X.isDataTexture||X.isData3DTexture?U.texSubImage3D(Pe,$,G.x,G.y,G.z,_e,Ee,be,we,Ue,si.data):X.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Pe,$,G.x,G.y,G.z,_e,Ee,be,we,si.data)):U.texSubImage3D(Pe,$,G.x,G.y,G.z,_e,Ee,be,we,Ue,si),U.pixelStorei(U.UNPACK_ROW_LENGTH,Le),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,qe),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ji),U.pixelStorei(U.UNPACK_SKIP_ROWS,bn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,An),$===0&&V.generateMipmaps&&U.generateMipmap(Pe),le.unbindTexture()},this.initTexture=function(R){ge.setTexture2D(R,0),le.unbindTexture()},this.resetState=function(){_=0,E=0,T=null,le.reset(),de.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Gc extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class jg extends hc{constructor(t={}){super(t);K(this,"cameraPers");K(this,"cameraOrth");K(this,"renderer");K(this,"mainScene");K(this,"isRender",!0);K(this,"renderSize",new Ra);t.transparent==null&&(t.transparent=!1);let i={canvas:this.el,antialias:!1,preserveDrawingBuffer:!0,powerPreference:"low-power"};t.transparent&&(i.premultipliedAlpha=!0,i.alpha=!0),this.renderer=new Kg(i),this.renderer.autoClear=!0,this.renderer.setClearColor(16777215,1),this.mainScene=new Gc,this.cameraPers=this._makePersCamera(),this._updatePersCamera(this.cameraPers,10,10),this.cameraOrth=this._makeOrthCamera(),this._updateOrthCamera(this.cameraOrth,10,10)}init(){super.init()}_makePersCamera(){return new Vt(60,1,1e-7,5e4)}_makeOrthCamera(){return new Fc(1,1,1,1)}_updatePersCamera(t,i=10,n=10){t.aspect=i/n,t.updateProjectionMatrix(),t.position.z=n/Math.tan(t.fov*Math.PI/360)/2}_updateOrthCamera(t,i=10,n=10){t.left=-i*.5,t.right=i*.5,t.top=n*.5,t.bottom=-n*.5,t.near=-1e4,t.far=1e4,t.updateProjectionMatrix(),t.position.set(0,0,1e3)}_update(){super._update()}_setUni(t,i,n){const r=this._getUni(t);r[i].value=n}_getUni(t){return t.material.uniforms}}class so extends ji{constructor(e=1,t=8,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);const r=[],a=[],s=[],l=[],u=new H,c=new ze;a.push(0,0,0),s.push(0,0,1),l.push(.5,.5);for(let p=0,h=3;p<=t;p++,h+=3){const f=i+p/t*n;u.x=e*Math.cos(f),u.y=e*Math.sin(f),a.push(u.x,u.y,u.z),s.push(0,0,1),c.x=(a[h]/e+1)/2,c.y=(a[h+1]/e+1)/2,l.push(c.x,c.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new mi(a,3)),this.setAttribute("normal",new mi(s,3)),this.setAttribute("uv",new mi(l,2))}static fromJSON(e){return new so(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class kc extends Gc{constructor(t=1){super();K(this,"opt",{});K(this,"_tgNum",1);K(this,"_texture",[]);this._tgNum=t;for(let i=0;i<this._tgNum;i++){const n=new Ri(16,16,{format:Wt});this._texture.push(n)}}dispose(){this._texture!=null&&(this._texture.forEach(t=>{t.dispose()}),this._texture.splice(0))}texture(t=0){return this._texture[t].texture}render(t,i,n=0,r=!0){const a=this._texture[n];t.setRenderTarget(a),r&&t.clear(),t.render(this,i),t.setRenderTarget(null)}setSize(t,i,n=1){const r=this._texture.length;for(let a=0;a<r;a++)this._texture[a].setSize(t*n,i*n)}}var $g=`void main(){
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Jg=`uniform sampler2D tDiffuse;
uniform float weight[10];
uniform float ratio;
uniform bool horizontal;
uniform vec2 resolution;

void main(void) {

  vec2 tFrag = 1.0 / resolution;
  vec2 fc;
  vec3 destColor = vec3(0.0);

  if(horizontal){
    fc = vec2(gl_FragCoord.s, gl_FragCoord.t);
    
    
    
    
    
    

    destColor += texture2D(tDiffuse, (fc + vec2(-9.0, 0.0)) * tFrag).rgb * weight[9];
    destColor += texture2D(tDiffuse, (fc + vec2(-8.0, 0.0)) * tFrag).rgb * weight[8];
    destColor += texture2D(tDiffuse, (fc + vec2(-7.0, 0.0)) * tFrag).rgb * weight[7];
    destColor += texture2D(tDiffuse, (fc + vec2(-6.0, 0.0)) * tFrag).rgb * weight[6];
    destColor += texture2D(tDiffuse, (fc + vec2(-5.0, 0.0)) * tFrag).rgb * weight[5];
    destColor += texture2D(tDiffuse, (fc + vec2(-4.0, 0.0)) * tFrag).rgb * weight[4];
    destColor += texture2D(tDiffuse, (fc + vec2(-3.0, 0.0)) * tFrag).rgb * weight[3];
    destColor += texture2D(tDiffuse, (fc + vec2(-2.0, 0.0)) * tFrag).rgb * weight[2];
    destColor += texture2D(tDiffuse, (fc + vec2(-1.0, 0.0)) * tFrag).rgb * weight[1];
    destColor += texture2D(tDiffuse, (fc + vec2( 0.0, 0.0)) * tFrag).rgb * weight[0];
    destColor += texture2D(tDiffuse, (fc + vec2( 1.0, 0.0)) * tFrag).rgb * weight[1];
    destColor += texture2D(tDiffuse, (fc + vec2( 2.0, 0.0)) * tFrag).rgb * weight[2];
    destColor += texture2D(tDiffuse, (fc + vec2( 3.0, 0.0)) * tFrag).rgb * weight[3];
    destColor += texture2D(tDiffuse, (fc + vec2( 4.0, 0.0)) * tFrag).rgb * weight[4];
    destColor += texture2D(tDiffuse, (fc + vec2( 5.0, 0.0)) * tFrag).rgb * weight[5];
    destColor += texture2D(tDiffuse, (fc + vec2( 6.0, 0.0)) * tFrag).rgb * weight[6];
    destColor += texture2D(tDiffuse, (fc + vec2( 7.0, 0.0)) * tFrag).rgb * weight[7];
    destColor += texture2D(tDiffuse, (fc + vec2( 8.0, 0.0)) * tFrag).rgb * weight[8];
    destColor += texture2D(tDiffuse, (fc + vec2( 9.0, 0.0)) * tFrag).rgb * weight[9];

    
    
    
    
    
    
  }else{
    fc = gl_FragCoord.st;

    
    
    
    
    
    

    destColor += texture2D(tDiffuse, (fc + vec2(0.0, -9.0)) * tFrag).rgb * weight[9];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0, -8.0)) * tFrag).rgb * weight[8];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0, -7.0)) * tFrag).rgb * weight[7];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0, -6.0)) * tFrag).rgb * weight[6];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0, -5.0)) * tFrag).rgb * weight[5];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0, -4.0)) * tFrag).rgb * weight[4];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0, -3.0)) * tFrag).rgb * weight[3];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0, -2.0)) * tFrag).rgb * weight[2];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0, -1.0)) * tFrag).rgb * weight[1];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0,  0.0)) * tFrag).rgb * weight[0];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0,  1.0)) * tFrag).rgb * weight[1];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0,  2.0)) * tFrag).rgb * weight[2];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0,  3.0)) * tFrag).rgb * weight[3];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0,  4.0)) * tFrag).rgb * weight[4];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0,  5.0)) * tFrag).rgb * weight[5];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0,  6.0)) * tFrag).rgb * weight[6];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0,  7.0)) * tFrag).rgb * weight[7];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0,  8.0)) * tFrag).rgb * weight[8];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0,  9.0)) * tFrag).rgb * weight[9];

    
    
    
    
    
    
  }

  gl_FragColor = vec4(destColor, 1.0);

}`;class ao{constructor(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}clone(){return new ao(this.value.clone===void 0?this.value:this.value.clone())}}class Qg{constructor(){K(this,"_capture");K(this,"_mesh");K(this,"_num",10);this._capture=new kc(2),this._mesh=new ti(new Gr(1,1),new Pi({vertexShader:$g,fragmentShader:Jg,transparent:!0,uniforms:{tDiffuse:{value:null},horizontal:{value:!0},rate:{value:1},weight:new ao(new Array(this._num)),resolution:{value:new ze(0,0)}}})),this._capture.add(this._mesh)}getTexture(){return this._capture.texture(1)}render(e,t,i,n,r,a=100){const s=window.devicePixelRatio||1;this._capture.setSize(e,t,s),this._mesh.scale.set(e,t,1);const l=this._mesh.material.uniforms;l.resolution.value.set(e*s,t*s);const u=[],c=l.weight.value.length;let p=0,h=0;for(;p<c;){const f=1+2*p;let g=Math.exp(-.5*(f*f)/a);u.push(g),p>0&&(g*=2),h+=g,p++}for(p=0;p<c;)u[p]/=h,p++;l.weight.value=u,l.tDiffuse.value=i,l.horizontal.value=!0,this._capture.render(n,r,0),l.tDiffuse.value=this._capture.texture(0),l.horizontal.value=!1,this._capture.render(n,r,1)}}var e_=`varying vec2 vUv;

void main(){
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,t_=`uniform sampler2D tDiffuse;
uniform vec3 color;
uniform float time;
uniform float bright;
uniform float alpha;
uniform float contrast;

varying vec2 vUv;

void main(void) {

  vec4 dest = texture2D(tDiffuse, vUv);
  dest.rgb = (dest.rgb - 0.5) / (1.0 - contrast) + 0.5;
  
  dest.rgb = min(vec3(1.0), dest.rgb);
  dest.a *= alpha;

  dest.a *= 1.0 - step(0.1, distance(dest.rgb, vec3(1.0)));

  float t = time * 0.01;
  dest.rgb *= color;

  float kake = 1000.0;
  dest.rgb -= sin(vUv.x * kake) * cos(vUv.y * kake) * 0.2;

  

  

  

  

  gl_FragColor = dest;

}`;class i_ extends Ec{constructor(t={}){super();K(this,"_mesh");this._mesh=new ti(new Gr(1,1),new Pi({vertexShader:e_,fragmentShader:t_,transparent:!0,side:yn,depthTest:!1,uniforms:{tDiffuse:{value:t.tex},alpha:{value:1},color:{value:Ye.instance.randomArr(st.instance.COLOR)},time:{value:Ye.instance.randomInt(0,1e3)},bright:{value:0},contrast:{value:1}}})),this.add(this._mesh)}_update(){super._update()}_resize(){super._resize()}}function wi(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Hc(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Bt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},sr={duration:.5,overwrite:!1,delay:0},oo,_t,ke,Xt=1e8,Ge=1/Xt,za=Math.PI*2,n_=za/4,r_=0,Vc=Math.sqrt,s_=Math.cos,a_=Math.sin,ot=function(e){return typeof e=="string"},Ze=function(e){return typeof e=="function"},Di=function(e){return typeof e=="number"},lo=function(e){return typeof e=="undefined"},_i=function(e){return typeof e=="object"},Tt=function(e){return e!==!1},co=function(){return typeof window!="undefined"},fs=function(e){return Ze(e)||ot(e)},Wc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},vt=Array.isArray,Ga=/(?:-?\.?\d|\.)+/gi,Xc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Zn=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ga=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,qc=/[+-]=-?[.\d]+/,Yc=/[^,'"\[\]\s]+/gi,o_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,We,li,ka,uo,zt={},ys={},Zc,Kc=function(e){return(ys=En(e,zt))&&Pt},fo=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Cr=function(e,t){return!t&&console.warn(e)},jc=function(e,t){return e&&(zt[e]=t)&&ys&&(ys[e]=t)||zt},Rr=function(){return 0},l_={suppressEvents:!0,isStart:!0,kill:!1},gs={suppressEvents:!0,kill:!1},c_={suppressEvents:!0},ho={},qi=[],Ha={},$c,It={},_a={},Kl=30,_s=[],po="",mo=function(e){var t=e[0],i,n;if(_i(t)||Ze(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=_s.length;n--&&!_s[n].targetTest(t););i=_s[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new Su(e[n],i)))||e.splice(n,1);return e},gn=function(e){return e._gsap||mo(qt(e))[0]._gsap},Jc=function(e,t,i){return(i=e[t])&&Ze(i)?e[t]():lo(i)&&e.getAttribute&&e.getAttribute(t)||i},bt=function(e,t){return(e=e.split(",")).forEach(t)||e},Ke=function(e){return Math.round(e*1e5)/1e5||0},at=function(e){return Math.round(e*1e7)/1e7||0},Jn=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},u_=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},Ss=function(){var e=qi.length,t=qi.slice(0),i,n;for(Ha={},qi.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Qc=function(e,t,i,n){qi.length&&!_t&&Ss(),e.render(t,i,n||_t&&t<0&&(e._initted||e._startAt)),qi.length&&!_t&&Ss()},eu=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Yc).length<2?t:ot(e)?e.trim():e},tu=function(e){return e},Yt=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},f_=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},En=function(e,t){for(var i in t)e[i]=t[i];return e},jl=function o(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=_i(t[i])?o(e[i]||(e[i]={}),t[i]):t[i]);return e},Ms=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},Mr=function(e){var t=e.parent||We,i=e.keyframes?f_(vt(e.keyframes)):Yt;if(Tt(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},h_=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},iu=function(e,t,i,n,r){i===void 0&&(i="_first"),n===void 0&&(n="_last");var a=e[n],s;if(r)for(s=t[r];a&&a[r]>s;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=a,t.parent=t._dp=e,t},Ps=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var r=t._prev,a=t._next;r?r._next=a:e[i]===t&&(e[i]=a),a?a._prev=r:e[n]===t&&(e[n]=r),t._next=t._prev=t.parent=null},Zi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},_n=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},d_=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Va=function(e,t,i,n){return e._startAt&&(_t?e._startAt.revert(gs):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},p_=function o(e){return!e||e._ts&&o(e.parent)},$l=function(e){return e._repeat?ar(e._tTime,e=e.duration()+e._rDelay)*e:0},ar=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},Es=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ds=function(e){return e._end=at(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ge)||0))},Ls=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=at(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ds(e),i._dirty||_n(i,e)),e},nu=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Es(e.rawTime(),t),(!t._dur||Hr(0,t.totalDuration(),i)-t._tTime>Ge)&&t.render(i,!0)),_n(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Ge}},fi=function(e,t,i,n){return t.parent&&Zi(t),t._start=at((Di(i)?i:i||e!==We?kt(e,i,t):e._time)+t._delay),t._end=at(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),iu(e,t,"_first","_last",e._sort?"_start":0),Wa(t)||(e._recent=t),n||nu(e,t),e._ts<0&&Ls(e,e._tTime),e},ru=function(e,t){return(zt.ScrollTrigger||fo("scrollTrigger",t))&&zt.ScrollTrigger.create(t,e)},su=function(e,t,i,n,r){if(_o(e,t,r),!e._initted)return 1;if(!i&&e._pt&&!_t&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&$c!==Nt.frame)return qi.push(e),e._lazy=[r,n],1},m_=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},Wa=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},g_=function(e,t,i,n){var r=e.ratio,a=t<0||!t&&(!e._start&&m_(e)&&!(!e._initted&&Wa(e))||(e._ts<0||e._dp._ts<0)&&!Wa(e))?0:1,s=e._rDelay,l=0,u,c,p;if(s&&e._repeat&&(l=Hr(0,e._tDur,t),c=ar(l,s),e._yoyo&&c&1&&(a=1-a),c!==ar(e._tTime,s)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||_t||n||e._zTime===Ge||!t&&e._zTime){if(!e._initted&&su(e,t,n,i,l))return;for(p=e._zTime,e._zTime=t||(i?Ge:0),i||(i=t&&!p),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,u=e._pt;u;)u.r(a,u.d),u=u._next;t<0&&Va(e,t,i,!0),e._onUpdate&&!i&&Ut(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Ut(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Zi(e,1),!i&&!_t&&(Ut(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},__=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},or=function(e,t,i,n){var r=e._repeat,a=at(t)||0,s=e._tTime/e._tDur;return s&&!n&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:at(a*(r+1)+e._rDelay*r):a,s>0&&!n&&Ls(e,e._tTime=e._tDur*s),e.parent&&Ds(e),i||_n(e.parent,e),e},Jl=function(e){return e instanceof St?_n(e):or(e,e._dur)},v_={_start:0,endTime:Rr,totalDuration:Rr},kt=function o(e,t,i){var n=e.labels,r=e._recent||v_,a=e.duration()>=Xt?r.endTime(!1):e._dur,s,l,u;return ot(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),u=t.substr(-1)==="%",s=t.indexOf("="),l==="<"||l===">"?(s>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(s<0?r:i).totalDuration()/100:1)):s<0?(t in n||(n[t]=a),n[t]):(l=parseFloat(t.charAt(s-1)+t.substr(s+1)),u&&i&&(l=l/100*(vt(i)?i[0]:i).totalDuration()),s>1?o(e,t.substr(0,s-1),i)+l:a+l)):t==null?a:+t},Er=function(e,t,i){var n=Di(t[1]),r=(n?2:1)+(e<2?0:1),a=t[r],s,l;if(n&&(a.duration=t[1]),a.parent=i,e){for(s=a,l=i;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=Tt(l.vars.inherit)&&l.parent;a.immediateRender=Tt(s.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new it(t[0],a,t[r+1])},$i=function(e,t){return e||e===0?t(e):t},Hr=function(e,t,i){return i<e?e:i>t?t:i},pt=function(e,t){return!ot(e)||!(t=o_.exec(e))?"":t[1]},x_=function(e,t,i){return $i(i,function(n){return Hr(e,t,n)})},Xa=[].slice,au=function(e,t){return e&&_i(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&_i(e[0]))&&!e.nodeType&&e!==li},y_=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var r;return ot(n)&&!t||au(n,1)?(r=i).push.apply(r,qt(n)):i.push(n)})||i},qt=function(e,t,i){return ke&&!t&&ke.selector?ke.selector(e):ot(e)&&!i&&(ka||!lr())?Xa.call((t||uo).querySelectorAll(e),0):vt(e)?y_(e,i):au(e)?Xa.call(e,0):e?[e]:[]},qa=function(e){return e=qt(e)[0]||Cr("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return qt(t,i.querySelectorAll?i:i===e?Cr("Invalid scope")||uo.createElement("div"):e)}},ou=function(e){return e.sort(function(){return .5-Math.random()})},lu=function(e){if(Ze(e))return e;var t=_i(e)?e:{each:e},i=vn(t.ease),n=t.from||0,r=parseFloat(t.base)||0,a={},s=n>0&&n<1,l=isNaN(n)||s,u=t.axis,c=n,p=n;return ot(n)?c=p={center:.5,edges:.5,end:1}[n]||0:!s&&l&&(c=n[0],p=n[1]),function(h,f,g){var d=(g||t).length,m=a[d],_,E,T,x,v,S,M,y,w;if(!m){if(w=t.grid==="auto"?0:(t.grid||[1,Xt])[1],!w){for(M=-Xt;M<(M=g[w++].getBoundingClientRect().left)&&w<d;);w<d&&w--}for(m=a[d]=[],_=l?Math.min(w,d)*c-.5:n%w,E=w===Xt?0:l?d*p/w-.5:n/w|0,M=0,y=Xt,S=0;S<d;S++)T=S%w-_,x=E-(S/w|0),m[S]=v=u?Math.abs(u==="y"?x:T):Vc(T*T+x*x),v>M&&(M=v),v<y&&(y=v);n==="random"&&ou(m),m.max=M-y,m.min=y,m.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(w>d?d-1:u?u==="y"?d/w:w:Math.max(w,d/w))||0)*(n==="edges"?-1:1),m.b=d<0?r-d:r,m.u=pt(t.amount||t.each)||0,i=i&&d<0?vu(i):i}return d=(m[h]-m.min)/m.max||0,at(m.b+(i?i(d):d)*m.v)+m.u}},Ya=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=at(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(Di(i)?0:pt(i))}},cu=function(e,t){var i=vt(e),n,r;return!i&&_i(e)&&(n=i=e.radius||Xt,e.values?(e=qt(e.values),(r=!Di(e[0]))&&(n*=n)):e=Ya(e.increment)),$i(t,i?Ze(e)?function(a){return r=e(a),Math.abs(r-a)<=n?r:a}:function(a){for(var s=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),u=Xt,c=0,p=e.length,h,f;p--;)r?(h=e[p].x-s,f=e[p].y-l,h=h*h+f*f):h=Math.abs(e[p]-s),h<u&&(u=h,c=p);return c=!n||u<=n?e[c]:a,r||c===a||Di(a)?c:c+pt(a)}:Ya(e))},uu=function(e,t,i,n){return $i(vt(e)?!t:i===!0?!!(i=0):!n,function(){return vt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},S_=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(r,a){return a(r)},n)}},M_=function(e,t){return function(i){return e(parseFloat(i))+(t||pt(i))}},E_=function(e,t,i){return hu(e,t,0,1,i)},fu=function(e,t,i){return $i(i,function(n){return e[~~t(n)]})},w_=function o(e,t,i){var n=t-e;return vt(e)?fu(e,o(0,e.length),t):$i(i,function(r){return(n+(r-e)%n)%n+e})},T_=function o(e,t,i){var n=t-e,r=n*2;return vt(e)?fu(e,o(0,e.length-1),t):$i(i,function(a){return a=(r+(a-e)%r)%r||0,e+(a>n?r-a:a)})},Pr=function(e){for(var t=0,i="",n,r,a,s;~(n=e.indexOf("random(",t));)a=e.indexOf(")",n),s=e.charAt(n+7)==="[",r=e.substr(n+7,a-n-7).match(s?Yc:Ga),i+=e.substr(t,n-t)+uu(s?r:+r[0],s?0:+r[1],+r[2]||1e-5),t=a+1;return i+e.substr(t,e.length-t)},hu=function(e,t,i,n,r){var a=t-e,s=n-i;return $i(r,function(l){return i+((l-e)/a*s||0)})},b_=function o(e,t,i,n){var r=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!r){var a=ot(e),s={},l,u,c,p,h;if(i===!0&&(n=1)&&(i=null),a)e={p:e},t={p:t};else if(vt(e)&&!vt(t)){for(c=[],p=e.length,h=p-2,u=1;u<p;u++)c.push(o(e[u-1],e[u]));p--,r=function(g){g*=p;var d=Math.min(h,~~g);return c[d](g-d)},i=t}else n||(e=En(vt(e)?[]:{},e));if(!c){for(l in t)go.call(s,e,l,"get",t[l]);r=function(g){return yo(g,s)||(a?e.p:e)}}}return $i(i,r)},Ql=function(e,t,i){var n=e.labels,r=Xt,a,s,l;for(a in n)s=n[a]-t,s<0==!!i&&s&&r>(s=Math.abs(s))&&(l=a,r=s);return l},Ut=function(e,t,i){var n=e.vars,r=n[t],a=ke,s=e._ctx,l,u,c;if(!!r)return l=n[t+"Params"],u=n.callbackScope||e,i&&qi.length&&Ss(),s&&(ke=s),c=l?r.apply(u,l):r.call(u),ke=a,c},yr=function(e){return Zi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!_t),e.progress()<1&&Ut(e,"onInterrupt"),e},Kn,du=[],pu=function(e){if(!!e)if(e=!e.name&&e.default||e,co()||e.headless){var t=e.name,i=Ze(e),n=t&&!i&&e.init?function(){this._props=[]}:e,r={init:Rr,render:yo,add:go,kill:H_,modifier:k_,rawVars:0},a={targetTest:0,get:0,getSetter:xo,aliases:{},register:0};if(lr(),e!==n){if(It[t])return;Yt(n,Yt(Ms(e,r),a)),En(n.prototype,En(r,Ms(e,a))),It[n.prop=t]=n,e.targetTest&&(_s.push(n),ho[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}jc(t,n),e.register&&e.register(Pt,n,At)}else du.push(e)},Be=255,Sr={aqua:[0,Be,Be],lime:[0,Be,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Be],navy:[0,0,128],white:[Be,Be,Be],olive:[128,128,0],yellow:[Be,Be,0],orange:[Be,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Be,0,0],pink:[Be,192,203],cyan:[0,Be,Be],transparent:[Be,Be,Be,0]},va=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Be+.5|0},mu=function(e,t,i){var n=e?Di(e)?[e>>16,e>>8&Be,e&Be]:0:Sr.black,r,a,s,l,u,c,p,h,f,g;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Sr[e])n=Sr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),s=e.charAt(3),e="#"+r+r+a+a+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&Be,n&Be,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&Be,e&Be]}else if(e.substr(0,3)==="hsl"){if(n=g=e.match(Ga),!t)l=+n[0]%360/360,u=+n[1]/100,c=+n[2]/100,a=c<=.5?c*(u+1):c+u-c*u,r=c*2-a,n.length>3&&(n[3]*=1),n[0]=va(l+1/3,r,a),n[1]=va(l,r,a),n[2]=va(l-1/3,r,a);else if(~e.indexOf("="))return n=e.match(Xc),i&&n.length<4&&(n[3]=1),n}else n=e.match(Ga)||Sr.transparent;n=n.map(Number)}return t&&!g&&(r=n[0]/Be,a=n[1]/Be,s=n[2]/Be,p=Math.max(r,a,s),h=Math.min(r,a,s),c=(p+h)/2,p===h?l=u=0:(f=p-h,u=c>.5?f/(2-p-h):f/(p+h),l=p===r?(a-s)/f+(a<s?6:0):p===a?(s-r)/f+2:(r-a)/f+4,l*=60),n[0]=~~(l+.5),n[1]=~~(u*100+.5),n[2]=~~(c*100+.5)),i&&n.length<4&&(n[3]=1),n},gu=function(e){var t=[],i=[],n=-1;return e.split(Yi).forEach(function(r){var a=r.match(Zn)||[];t.push.apply(t,a),i.push(n+=a.length+1)}),t.c=i,t},ec=function(e,t,i){var n="",r=(e+n).match(Yi),a=t?"hsla(":"rgba(",s=0,l,u,c,p;if(!r)return e;if(r=r.map(function(h){return(h=mu(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=gu(e),l=i.c,l.join(n)!==c.c.join(n)))for(u=e.replace(Yi,"1").split(Zn),p=u.length-1;s<p;s++)n+=u[s]+(~l.indexOf(s)?r.shift()||a+"0,0,0,0)":(c.length?c:r.length?r:i).shift());if(!u)for(u=e.split(Yi),p=u.length-1;s<p;s++)n+=u[s]+r[s];return n+u[p]},Yi=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Sr)o+="|"+e+"\\b";return new RegExp(o+")","gi")}(),A_=/hsl[a]?\(/,_u=function(e){var t=e.join(" "),i;if(Yi.lastIndex=0,Yi.test(t))return i=A_.test(t),e[1]=ec(e[1],i),e[0]=ec(e[0],i,gu(e[1])),!0},Dr,Nt=function(){var o=Date.now,e=500,t=33,i=o(),n=i,r=1e3/240,a=r,s=[],l,u,c,p,h,f,g=function d(m){var _=o()-n,E=m===!0,T,x,v,S;if((_>e||_<0)&&(i+=_-t),n+=_,v=n-i,T=v-a,(T>0||E)&&(S=++p.frame,h=v-p.time*1e3,p.time=v=v/1e3,a+=T+(T>=r?4:r-T),x=1),E||(l=u(d)),x)for(f=0;f<s.length;f++)s[f](v,h,S,m)};return p={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Zc&&(!ka&&co()&&(li=ka=window,uo=li.document||{},zt.gsap=Pt,(li.gsapVersions||(li.gsapVersions=[])).push(Pt.version),Kc(ys||li.GreenSockGlobals||!li.gsap&&li||{}),du.forEach(pu)),c=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&p.sleep(),u=c||function(m){return setTimeout(m,a-p.time*1e3+1|0)},Dr=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Dr=0,u=Rr},lagSmoothing:function(m,_){e=m||1/0,t=Math.min(_||33,e)},fps:function(m){r=1e3/(m||240),a=p.time*1e3+r},add:function(m,_,E){var T=_?function(x,v,S,M){m(x,v,S,M),p.remove(T)}:m;return p.remove(m),s[E?"unshift":"push"](T),lr(),T},remove:function(m,_){~(_=s.indexOf(m))&&s.splice(_,1)&&f>=_&&f--},_listeners:s},p}(),lr=function(){return!Dr&&Nt.wake()},Ce={},C_=/^[\d.\-M][\d.\-,\s]/,R_=/["']/g,P_=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],r=1,a=i.length,s,l,u;r<a;r++)l=i[r],s=r!==a-1?l.lastIndexOf(","):l.length,u=l.substr(0,s),t[n]=isNaN(u)?u.replace(R_,"").trim():+u,n=l.substr(s+1).trim();return t},D_=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},L_=function(e){var t=(e+"").split("("),i=Ce[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[P_(t[1])]:D_(e).split(",").map(eu)):Ce._CE&&C_.test(e)?Ce._CE("",e):i},vu=function(e){return function(t){return 1-e(1-t)}},xu=function o(e,t){for(var i=e._first,n;i;)i instanceof St?o(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?o(i.timeline,t):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=t)),i=i._next},vn=function(e,t){return e&&(Ze(e)?e:Ce[e]||L_(e))||t},Tn=function(e,t,i,n){i===void 0&&(i=function(l){return 1-t(1-l)}),n===void 0&&(n=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:i,easeInOut:n},a;return bt(e,function(s){Ce[s]=zt[s]=r,Ce[a=s.toLowerCase()]=i;for(var l in r)Ce[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ce[s+"."+l]=r[l]}),r},yu=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},xa=function o(e,t,i){var n=t>=1?t:1,r=(i||(e?.3:.45))/(t<1?t:1),a=r/za*(Math.asin(1/n)||0),s=function(c){return c===1?1:n*Math.pow(2,-10*c)*a_((c-a)*r)+1},l=e==="out"?s:e==="in"?function(u){return 1-s(1-u)}:yu(s);return r=za/r,l.config=function(u,c){return o(e,u,c)},l},ya=function o(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},n=e==="out"?i:e==="in"?function(r){return 1-i(1-r)}:yu(i);return n.config=function(r){return o(e,r)},n};bt("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;Tn(o+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Ce.Linear.easeNone=Ce.none=Ce.Linear.easeIn;Tn("Elastic",xa("in"),xa("out"),xa());(function(o,e){var t=1/e,i=2*t,n=2.5*t,r=function(s){return s<t?o*s*s:s<i?o*Math.pow(s-1.5/e,2)+.75:s<n?o*(s-=2.25/e)*s+.9375:o*Math.pow(s-2.625/e,2)+.984375};Tn("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Tn("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});Tn("Circ",function(o){return-(Vc(1-o*o)-1)});Tn("Sine",function(o){return o===1?1:-s_(o*n_)+1});Tn("Back",ya("in"),ya("out"),ya());Ce.SteppedEase=Ce.steps=zt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),r=t?1:0,a=1-Ge;return function(s){return((n*Hr(0,a,s)|0)+r)*i}}};sr.ease=Ce["quad.out"];bt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return po+=o+","+o+"Params,"});var Su=function(e,t){this.id=r_++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Jc,this.set=t?t.getSetter:xo},Lr=function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,or(this,+t.duration,1,1),this.data=t.data,ke&&(this._ctx=ke,ke.data.push(this)),Dr||Nt.wake()}var e=o.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,or(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(lr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ls(this,i),!r._dp||r.parent||nu(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&fi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===Ge||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Qc(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+$l(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+$l(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,n){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,n):this._repeat?ar(this._tTime,r)+1:1},e.timeScale=function(i,n){if(!arguments.length)return this._rts===-Ge?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?Es(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Ge?0:this._rts,this.totalTime(Hr(-Math.abs(this._delay),this._tDur,r),n!==!1),Ds(this),d_(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(lr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ge&&(this._tTime-=Ge)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&fi(n,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Tt(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Es(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=c_);var n=_t;return _t=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),_t=n,this},e.globalTime=function(i){for(var n=this,r=arguments.length?i:n.rawTime();n;)r=n._start+r/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):r},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Jl(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,Jl(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(kt(this,i),Tt(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,Tt(n))},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Ge:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ge,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=n&&r<this.endTime(!0)-Ge)},e.eventCallback=function(i,n,r){var a=this.vars;return arguments.length>1?(n?(a[i]=n,r&&(a[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=n)):delete a[i],this):a[i]},e.then=function(i){var n=this;return new Promise(function(r){var a=Ze(i)?i:tu,s=function(){var u=n.then;n.then=null,Ze(a)&&(a=a(n))&&(a.then||a===n)&&(n.then=u),r(a),n.then=u};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?s():n._prom=s})},e.kill=function(){yr(this)},o}();Yt(Lr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ge,_prom:0,_ps:!1,_rts:1});var St=function(o){Hc(e,o);function e(i,n){var r;return i===void 0&&(i={}),r=o.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=Tt(i.sortChildren),We&&fi(i.parent||We,wi(r),n),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&ru(wi(r),i.scrollTrigger),r}var t=e.prototype;return t.to=function(n,r,a){return Er(0,arguments,this),this},t.from=function(n,r,a){return Er(1,arguments,this),this},t.fromTo=function(n,r,a,s){return Er(2,arguments,this),this},t.set=function(n,r,a){return r.duration=0,r.parent=this,Mr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new it(n,r,kt(this,a),1),this},t.call=function(n,r,a){return fi(this,it.delayedCall(0,n,r),a)},t.staggerTo=function(n,r,a,s,l,u,c){return a.duration=r,a.stagger=a.stagger||s,a.onComplete=u,a.onCompleteParams=c,a.parent=this,new it(n,a,kt(this,l)),this},t.staggerFrom=function(n,r,a,s,l,u,c){return a.runBackwards=1,Mr(a).immediateRender=Tt(a.immediateRender),this.staggerTo(n,r,a,s,l,u,c)},t.staggerFromTo=function(n,r,a,s,l,u,c,p){return s.startAt=a,Mr(s).immediateRender=Tt(s.immediateRender),this.staggerTo(n,r,s,l,u,c,p)},t.render=function(n,r,a){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=n<=0?0:at(n),p=this._zTime<0!=n<0&&(this._initted||!u),h,f,g,d,m,_,E,T,x,v,S,M;if(this!==We&&c>l&&n>=0&&(c=l),c!==this._tTime||a||p){if(s!==this._time&&u&&(c+=this._time-s,n+=this._time-s),h=c,x=this._start,T=this._ts,_=!T,p&&(u||(s=this._zTime),(n||!r)&&(this._zTime=n)),this._repeat){if(S=this._yoyo,m=u+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(m*100+n,r,a);if(h=at(c%m),c===l?(d=this._repeat,h=u):(d=~~(c/m),d&&d===c/m&&(h=u,d--),h>u&&(h=u)),v=ar(this._tTime,m),!s&&this._tTime&&v!==d&&this._tTime-v*m-this._dur<=0&&(v=d),S&&d&1&&(h=u-h,M=1),d!==v&&!this._lock){var y=S&&v&1,w=y===(S&&d&1);if(d<v&&(y=!y),s=y?0:c%u?u:c,this._lock=1,this.render(s||(M?0:at(d*m)),r,!u)._lock=0,this._tTime=c,!r&&this.parent&&Ut(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1),s&&s!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,w&&(this._lock=2,s=y?u:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;xu(this,M)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=__(this,at(s),at(h)),E&&(c-=h-(h=E._start))),this._tTime=c,this._time=h,this._act=!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,s=0),!s&&h&&!r&&!d&&(Ut(this,"onStart"),this._tTime!==c))return this;if(h>=s&&n>=0)for(f=this._first;f;){if(g=f._next,(f._act||h>=f._start)&&f._ts&&E!==f){if(f.parent!==this)return this.render(n,r,a);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,r,a),h!==this._time||!this._ts&&!_){E=0,g&&(c+=this._zTime=-Ge);break}}f=g}else{f=this._last;for(var A=n<0?n:h;f;){if(g=f._prev,(f._act||A<=f._end)&&f._ts&&E!==f){if(f.parent!==this)return this.render(n,r,a);if(f.render(f._ts>0?(A-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(A-f._start)*f._ts,r,a||_t&&(f._initted||f._startAt)),h!==this._time||!this._ts&&!_){E=0,g&&(c+=this._zTime=A?-Ge:Ge);break}}f=g}}if(E&&!r&&(this.pause(),E.render(h>=s?0:-Ge)._zTime=h>=s?1:-1,this._ts))return this._start=x,Ds(this),this.render(n,r,a);this._onUpdate&&!r&&Ut(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&s)&&(x===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((n||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Zi(this,1),!r&&!(n<0&&!s)&&(c||s||!l)&&(Ut(this,c===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,r){var a=this;if(Di(r)||(r=kt(this,r,n)),!(n instanceof Lr)){if(vt(n))return n.forEach(function(s){return a.add(s,r)}),this;if(ot(n))return this.addLabel(n,r);if(Ze(n))n=it.delayedCall(0,n);else return this}return this!==n?fi(this,n,r):this},t.getChildren=function(n,r,a,s){n===void 0&&(n=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),s===void 0&&(s=-Xt);for(var l=[],u=this._first;u;)u._start>=s&&(u instanceof it?r&&l.push(u):(a&&l.push(u),n&&l.push.apply(l,u.getChildren(!0,r,a)))),u=u._next;return l},t.getById=function(n){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===n)return r[a]},t.remove=function(n){return ot(n)?this.removeLabel(n):Ze(n)?this.killTweensOf(n):(Ps(this,n),n===this._recent&&(this._recent=this._last),_n(this))},t.totalTime=function(n,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=at(Nt.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),o.prototype.totalTime.call(this,n,r),this._forcing=0,this):this._tTime},t.addLabel=function(n,r){return this.labels[n]=kt(this,r),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,r,a){var s=it.delayedCall(0,r||Rr,a);return s.data="isPause",this._hasPause=1,fi(this,s,kt(this,n))},t.removePause=function(n){var r=this._first;for(n=kt(this,n);r;)r._start===n&&r.data==="isPause"&&Zi(r),r=r._next},t.killTweensOf=function(n,r,a){for(var s=this.getTweensOf(n,a),l=s.length;l--;)Hi!==s[l]&&s[l].kill(n,r);return this},t.getTweensOf=function(n,r){for(var a=[],s=qt(n),l=this._first,u=Di(r),c;l;)l instanceof it?u_(l._targets,s)&&(u?(!Hi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(c=l.getTweensOf(s,r)).length&&a.push.apply(a,c),l=l._next;return a},t.tweenTo=function(n,r){r=r||{};var a=this,s=kt(a,n),l=r,u=l.startAt,c=l.onStart,p=l.onStartParams,h=l.immediateRender,f,g=it.to(a,Yt({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(u&&"time"in u?u.time:a._time))/a.timeScale())||Ge,onStart:function(){if(a.pause(),!f){var m=r.duration||Math.abs((s-(u&&"time"in u?u.time:a._time))/a.timeScale());g._dur!==m&&or(g,m,0,1).render(g._time,!0,!0),f=1}c&&c.apply(g,p||[])}},r));return h?g.render(0):g},t.tweenFromTo=function(n,r,a){return this.tweenTo(r,Yt({startAt:{time:kt(this,n)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),Ql(this,kt(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),Ql(this,kt(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+Ge)},t.shiftChildren=function(n,r,a){a===void 0&&(a=0);for(var s=this._first,l=this.labels,u;s;)s._start>=a&&(s._start+=n,s._end+=n),s=s._next;if(r)for(u in l)l[u]>=a&&(l[u]+=n);return _n(this)},t.invalidate=function(n){var r=this._first;for(this._lock=0;r;)r.invalidate(n),r=r._next;return o.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),_n(this)},t.totalDuration=function(n){var r=0,a=this,s=a._last,l=Xt,u,c,p;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-n:n));if(a._dirty){for(p=a.parent;s;)u=s._prev,s._dirty&&s.totalDuration(),c=s._start,c>l&&a._sort&&s._ts&&!a._lock?(a._lock=1,fi(a,s,c-s._delay,1)._lock=0):l=c,c<0&&s._ts&&(r-=c,(!p&&!a._dp||p&&p.smoothChildTiming)&&(a._start+=c/a._ts,a._time-=c,a._tTime-=c),a.shiftChildren(-c,!1,-1/0),l=0),s._end>r&&s._ts&&(r=s._end),s=u;or(a,a===We&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(n){if(We._ts&&(Qc(We,Es(n,We)),$c=Nt.frame),Nt.frame>=Kl){Kl+=Bt.autoSleep||120;var r=We._first;if((!r||!r._ts)&&Bt.autoSleep&&Nt._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Nt.sleep()}}},e}(Lr);Yt(St.prototype,{_lock:0,_hasPause:0,_forcing:0});var F_=function(e,t,i,n,r,a,s){var l=new At(this._pt,e,t,0,1,Au,null,r),u=0,c=0,p,h,f,g,d,m,_,E;for(l.b=i,l.e=n,i+="",n+="",(_=~n.indexOf("random("))&&(n=Pr(n)),a&&(E=[i,n],a(E,e,t),i=E[0],n=E[1]),h=i.match(ga)||[];p=ga.exec(n);)g=p[0],d=n.substring(u,p.index),f?f=(f+1)%5:d.substr(-5)==="rgba("&&(f=1),g!==h[c++]&&(m=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:d||c===1?d:",",s:m,c:g.charAt(1)==="="?Jn(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},u=ga.lastIndex);return l.c=u<n.length?n.substring(u,n.length):"",l.fp=s,(qc.test(n)||_)&&(l.e=0),this._pt=l,l},go=function(e,t,i,n,r,a,s,l,u,c){Ze(n)&&(n=n(r||0,e,a));var p=e[t],h=i!=="get"?i:Ze(p)?u?e[t.indexOf("set")||!Ze(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():p,f=Ze(p)?u?B_:Tu:vo,g;if(ot(n)&&(~n.indexOf("random(")&&(n=Pr(n)),n.charAt(1)==="="&&(g=Jn(h,n)+(pt(h)||0),(g||g===0)&&(n=g))),!c||h!==n||Za)return!isNaN(h*n)&&n!==""?(g=new At(this._pt,e,t,+h||0,n-(h||0),typeof p=="boolean"?G_:bu,0,f),u&&(g.fp=u),s&&g.modifier(s,this,e),this._pt=g):(!p&&!(t in e)&&fo(t,n),F_.call(this,e,t,h,n,f,l||Bt.stringFilter,u))},I_=function(e,t,i,n,r){if(Ze(e)&&(e=wr(e,r,t,i,n)),!_i(e)||e.style&&e.nodeType||vt(e)||Wc(e))return ot(e)?wr(e,r,t,i,n):e;var a={},s;for(s in e)a[s]=wr(e[s],r,t,i,n);return a},Mu=function(e,t,i,n,r,a){var s,l,u,c;if(It[e]&&(s=new It[e]).init(r,s.rawVars?t[e]:I_(t[e],n,r,a,i),i,n,a)!==!1&&(i._pt=l=new At(i._pt,r,e,0,1,s.render,s,0,s.priority),i!==Kn))for(u=i._ptLookup[i._targets.indexOf(r)],c=s._props.length;c--;)u[s._props[c]]=l;return s},Hi,Za,_o=function o(e,t,i){var n=e.vars,r=n.ease,a=n.startAt,s=n.immediateRender,l=n.lazy,u=n.onUpdate,c=n.runBackwards,p=n.yoyoEase,h=n.keyframes,f=n.autoRevert,g=e._dur,d=e._startAt,m=e._targets,_=e.parent,E=_&&_.data==="nested"?_.vars.targets:m,T=e._overwrite==="auto"&&!oo,x=e.timeline,v,S,M,y,w,A,b,L,F,P,N,I,z;if(x&&(!h||!r)&&(r="none"),e._ease=vn(r,sr.ease),e._yEase=p?vu(vn(p===!0?r:p,sr.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!x&&!!n.runBackwards,!x||h&&!n.stagger){if(L=m[0]?gn(m[0]).harness:0,I=L&&n[L.prop],v=Ms(n,ho),d&&(d._zTime<0&&d.progress(1),t<0&&c&&s&&!f?d.render(-1,!0):d.revert(c&&g?gs:l_),d._lazy=0),a){if(Zi(e._startAt=it.set(m,Yt({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!d&&Tt(l),startAt:null,delay:0,onUpdate:u&&function(){return Ut(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(_t||!s&&!f)&&e._startAt.revert(gs),s&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&g&&!d){if(t&&(s=!1),M=Yt({overwrite:!1,data:"isFromStart",lazy:s&&!d&&Tt(l),immediateRender:s,stagger:0,parent:_},v),I&&(M[L.prop]=I),Zi(e._startAt=it.set(m,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(_t?e._startAt.revert(gs):e._startAt.render(-1,!0)),e._zTime=t,!s)o(e._startAt,Ge,Ge);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Tt(l)||l&&!g,S=0;S<m.length;S++){if(w=m[S],b=w._gsap||mo(m)[S]._gsap,e._ptLookup[S]=P={},Ha[b.id]&&qi.length&&Ss(),N=E===m?S:E.indexOf(w),L&&(F=new L).init(w,I||v,e,N,E)!==!1&&(e._pt=y=new At(e._pt,w,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(k){P[k]=y}),F.priority&&(A=1)),!L||I)for(M in v)It[M]&&(F=Mu(M,v,e,N,w,E))?F.priority&&(A=1):P[M]=y=go.call(e,w,M,"get",v[M],N,E,0,n.stringFilter);e._op&&e._op[S]&&e.kill(w,e._op[S]),T&&e._pt&&(Hi=e,We.killTweensOf(w,P,e.globalTime(t)),z=!e.parent,Hi=0),e._pt&&l&&(Ha[b.id]=1)}A&&Cu(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!z,h&&t<=0&&x.render(Xt,!0,!0)},O_=function(e,t,i,n,r,a,s,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,p,h,f;if(!u)for(u=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(c=h[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Za=1,e.vars[t]="+=0",_o(e,s),Za=0,l?Cr(t+" not eligible for reset"):1;u.push(c)}for(f=u.length;f--;)p=u[f],c=p._pt||p,c.s=(n||n===0)&&!r?n:c.s+(n||0)+a*c.c,c.c=i-c.s,p.e&&(p.e=Ke(i)+pt(p.e)),p.b&&(p.b=c.s+pt(p.b))},N_=function(e,t){var i=e[0]?gn(e[0]).harness:0,n=i&&i.aliases,r,a,s,l;if(!n)return t;r=En({},t);for(a in n)if(a in r)for(l=n[a].split(","),s=l.length;s--;)r[l[s]]=r[a];return r},U_=function(e,t,i,n){var r=t.ease||n||"power1.inOut",a,s;if(vt(t))s=i[e]||(i[e]=[]),t.forEach(function(l,u){return s.push({t:u/(t.length-1)*100,v:l,e:r})});else for(a in t)s=i[a]||(i[a]=[]),a==="ease"||s.push({t:parseFloat(e),v:t[a],e:r})},wr=function(e,t,i,n,r){return Ze(e)?e.call(t,i,n,r):ot(e)&&~e.indexOf("random(")?Pr(e):e},Eu=po+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",wu={};bt(Eu+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return wu[o]=1});var it=function(o){Hc(e,o);function e(i,n,r,a){var s;typeof n=="number"&&(r.duration=n,n=r,r=null),s=o.call(this,a?n:Mr(n))||this;var l=s.vars,u=l.duration,c=l.delay,p=l.immediateRender,h=l.stagger,f=l.overwrite,g=l.keyframes,d=l.defaults,m=l.scrollTrigger,_=l.yoyoEase,E=n.parent||We,T=(vt(i)||Wc(i)?Di(i[0]):"length"in n)?[i]:qt(i),x,v,S,M,y,w,A,b;if(s._targets=T.length?mo(T):Cr("GSAP target "+i+" not found. https://gsap.com",!Bt.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=f,g||h||fs(u)||fs(c)){if(n=s.vars,x=s.timeline=new St({data:"nested",defaults:d||{},targets:E&&E.data==="nested"?E.vars.targets:T}),x.kill(),x.parent=x._dp=wi(s),x._start=0,h||fs(u)||fs(c)){if(M=T.length,A=h&&lu(h),_i(h))for(y in h)~Eu.indexOf(y)&&(b||(b={}),b[y]=h[y]);for(v=0;v<M;v++)S=Ms(n,wu),S.stagger=0,_&&(S.yoyoEase=_),b&&En(S,b),w=T[v],S.duration=+wr(u,wi(s),v,w,T),S.delay=(+wr(c,wi(s),v,w,T)||0)-s._delay,!h&&M===1&&S.delay&&(s._delay=c=S.delay,s._start+=c,S.delay=0),x.to(w,S,A?A(v,w,T):0),x._ease=Ce.none;x.duration()?u=c=0:s.timeline=0}else if(g){Mr(Yt(x.vars.defaults,{ease:"none"})),x._ease=vn(g.ease||n.ease||"none");var L=0,F,P,N;if(vt(g))g.forEach(function(I){return x.to(T,I,">")}),x.duration();else{S={};for(y in g)y==="ease"||y==="easeEach"||U_(y,g[y],S,g.easeEach);for(y in S)for(F=S[y].sort(function(I,z){return I.t-z.t}),L=0,v=0;v<F.length;v++)P=F[v],N={ease:P.e,duration:(P.t-(v?F[v-1].t:0))/100*u},N[y]=P.v,x.to(T,N,L),L+=N.duration;x.duration()<u&&x.to({},{duration:u-x.duration()})}}u||s.duration(u=x.duration())}else s.timeline=0;return f===!0&&!oo&&(Hi=wi(s),We.killTweensOf(T),Hi=0),fi(E,wi(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),(p||!u&&!g&&s._start===at(E._time)&&Tt(p)&&p_(wi(s))&&E.data!=="nested")&&(s._tTime=-Ge,s.render(Math.max(0,-c)||0)),m&&ru(wi(s),m),s}var t=e.prototype;return t.render=function(n,r,a){var s=this._time,l=this._tDur,u=this._dur,c=n<0,p=n>l-Ge&&!c?l:n<Ge?0:n,h,f,g,d,m,_,E,T,x;if(!u)g_(this,n,r,a);else if(p!==this._tTime||!n||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c){if(h=p,T=this.timeline,this._repeat){if(d=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(d*100+n,r,a);if(h=at(p%d),p===l?(g=this._repeat,h=u):(g=~~(p/d),g&&g===at(p/d)&&(h=u,g--),h>u&&(h=u)),_=this._yoyo&&g&1,_&&(x=this._yEase,h=u-h),m=ar(this._tTime,d),h===s&&!a&&this._initted&&g===m)return this._tTime=p,this;g!==m&&(T&&this._yEase&&xu(T,_),this.vars.repeatRefresh&&!_&&!this._lock&&this._time!==d&&this._initted&&(this._lock=a=1,this.render(at(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(su(this,c?n:h,a,r,p))return this._tTime=0,this;if(s!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(u!==this._dur)return this.render(n,r,a)}if(this._tTime=p,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=E=(x||this._ease)(h/u),this._from&&(this.ratio=E=1-E),h&&!s&&!r&&!g&&(Ut(this,"onStart"),this._tTime!==p))return this;for(f=this._pt;f;)f.r(E,f.d),f=f._next;T&&T.render(n<0?n:T._dur*T._ease(h/this._dur),r,a)||this._startAt&&(this._zTime=n),this._onUpdate&&!r&&(c&&Va(this,n,r,a),Ut(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&Ut(this,"onRepeat"),(p===this._tDur||!p)&&this._tTime===p&&(c&&!this._onUpdate&&Va(this,n,!0,!0),(n||!u)&&(p===this._tDur&&this._ts>0||!p&&this._ts<0)&&Zi(this,1),!r&&!(c&&!s)&&(p||s||_)&&(Ut(this,p===l?"onComplete":"onReverseComplete",!0),this._prom&&!(p<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),o.prototype.invalidate.call(this,n)},t.resetTo=function(n,r,a,s,l){Dr||Nt.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||_o(this,u),c=this._ease(u/this._dur),O_(this,n,r,a,s,c,u,l)?this.resetTo(n,r,a,s,1):(Ls(this,0),this.parent||iu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,r){if(r===void 0&&(r="all"),!n&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?yr(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(n,r,Hi&&Hi.vars.overwrite!==!0)._first||yr(this),this.parent&&a!==this.timeline.totalDuration()&&or(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,l=n?qt(n):s,u=this._ptLookup,c=this._pt,p,h,f,g,d,m,_;if((!r||r==="all")&&h_(s,l))return r==="all"&&(this._pt=0),yr(this);for(p=this._op=this._op||[],r!=="all"&&(ot(r)&&(d={},bt(r,function(E){return d[E]=1}),r=d),r=N_(s,r)),_=s.length;_--;)if(~l.indexOf(s[_])){h=u[_],r==="all"?(p[_]=r,g=h,f={}):(f=p[_]=p[_]||{},g=r);for(d in g)m=h&&h[d],m&&((!("kill"in m.d)||m.d.kill(d)===!0)&&Ps(this,m,"_pt"),delete h[d]),f!=="all"&&(f[d]=1)}return this._initted&&!this._pt&&c&&yr(this),this},e.to=function(n,r){return new e(n,r,arguments[2])},e.from=function(n,r){return Er(1,arguments)},e.delayedCall=function(n,r,a,s){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},e.fromTo=function(n,r,a){return Er(2,arguments)},e.set=function(n,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(n,r)},e.killTweensOf=function(n,r,a){return We.killTweensOf(n,r,a)},e}(Lr);Yt(it.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});bt("staggerTo,staggerFrom,staggerFromTo",function(o){it[o]=function(){var e=new St,t=Xa.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var vo=function(e,t,i){return e[t]=i},Tu=function(e,t,i){return e[t](i)},B_=function(e,t,i,n){return e[t](n.fp,i)},z_=function(e,t,i){return e.setAttribute(t,i)},xo=function(e,t){return Ze(e[t])?Tu:lo(e[t])&&e.setAttribute?z_:vo},bu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},G_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Au=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},yo=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},k_=function(e,t,i,n){for(var r=this._pt,a;r;)a=r._next,r.p===n&&r.modifier(e,t,i),r=a},H_=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?Ps(this,t,"_pt"):t.dep||(i=1),t=n;return!i},V_=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},Cu=function(e){for(var t=e._pt,i,n,r,a;t;){for(i=t._next,n=r;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:a)?t._prev._next=t:r=t,(t._next=n)?n._prev=t:a=t,t=i}e._pt=r},At=function(){function o(t,i,n,r,a,s,l,u,c){this.t=i,this.s=r,this.c=a,this.p=n,this.r=s||bu,this.d=l||this,this.set=u||vo,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(i,n,r){this.mSet=this.mSet||this.set,this.set=V_,this.m=i,this.mt=r,this.tween=n},o}();bt(po+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return ho[o]=1});zt.TweenMax=zt.TweenLite=it;zt.TimelineLite=zt.TimelineMax=St;We=new St({sortChildren:!1,defaults:sr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Bt.stringFilter=_u;var xn=[],vs={},W_=[],tc=0,X_=0,Sa=function(e){return(vs[e]||W_).map(function(t){return t()})},Ka=function(){var e=Date.now(),t=[];e-tc>2&&(Sa("matchMediaInit"),xn.forEach(function(i){var n=i.queries,r=i.conditions,a,s,l,u;for(s in n)a=li.matchMedia(n[s]).matches,a&&(l=1),a!==r[s]&&(r[s]=a,u=1);u&&(i.revert(),l&&t.push(i))}),Sa("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),tc=e,Sa("matchMedia"))},Ru=function(){function o(t,i){this.selector=i&&qa(i),this.data=[],this._r=[],this.isReverted=!1,this.id=X_++,t&&this.add(t)}var e=o.prototype;return e.add=function(i,n,r){Ze(i)&&(r=n,n=i,i=Ze);var a=this,s=function(){var u=ke,c=a.selector,p;return u&&u!==a&&u.data.push(a),r&&(a.selector=qa(r)),ke=a,p=n.apply(a,arguments),Ze(p)&&a._r.push(p),ke=u,a.selector=c,a.isReverted=!1,p};return a.last=s,i===Ze?s(a,function(l){return a.add(null,l)}):i?a[i]=s:s},e.ignore=function(i){var n=ke;ke=null,i(this),ke=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof o?i.push.apply(i,n.getTweens()):n instanceof it&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var r=this;if(i?function(){for(var s=r.getTweens(),l=r.data.length,u;l--;)u=r.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return s.splice(s.indexOf(c),1)}));for(s.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,p){return p.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=r.data.length;l--;)u=r.data[l],u instanceof St?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof it)&&u.revert&&u.revert(i);r._r.forEach(function(c){return c(i,r)}),r.isReverted=!0}():this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),n)for(var a=xn.length;a--;)xn[a].id===this.id&&xn.splice(a,1)},e.revert=function(i){this.kill(i||{})},o}(),q_=function(){function o(t){this.contexts=[],this.scope=t,ke&&ke.data.push(this)}var e=o.prototype;return e.add=function(i,n,r){_i(i)||(i={matches:i});var a=new Ru(0,r||this.scope),s=a.conditions={},l,u,c;ke&&!a.selector&&(a.selector=ke.selector),this.contexts.push(a),n=a.add("onMatch",n),a.queries=i;for(u in i)u==="all"?c=1:(l=li.matchMedia(i[u]),l&&(xn.indexOf(a)<0&&xn.push(a),(s[u]=l.matches)&&(c=1),l.addListener?l.addListener(Ka):l.addEventListener("change",Ka)));return c&&n(a,function(p){return a.add(null,p)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},o}(),ws={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return pu(n)})},timeline:function(e){return new St(e)},getTweensOf:function(e,t){return We.getTweensOf(e,t)},getProperty:function(e,t,i,n){ot(e)&&(e=qt(e)[0]);var r=gn(e||{}).get,a=i?tu:eu;return i==="native"&&(i=""),e&&(t?a((It[t]&&It[t].get||r)(e,t,i,n)):function(s,l,u){return a((It[s]&&It[s].get||r)(e,s,l,u))})},quickSetter:function(e,t,i){if(e=qt(e),e.length>1){var n=e.map(function(c){return Pt.quickSetter(c,t,i)}),r=n.length;return function(c){for(var p=r;p--;)n[p](c)}}e=e[0]||{};var a=It[t],s=gn(e),l=s.harness&&(s.harness.aliases||{})[t]||t,u=a?function(c){var p=new a;Kn._pt=0,p.init(e,i?c+i:c,Kn,0,[e]),p.render(1,p),Kn._pt&&yo(1,Kn)}:s.set(e,l);return a?u:function(c){return u(e,l,i?c+i:c,s,1)}},quickTo:function(e,t,i){var n,r=Pt.to(e,En((n={},n[t]="+=0.1",n.paused=!0,n),i||{})),a=function(l,u,c){return r.resetTo(t,l,u,c)};return a.tween=r,a},isTweening:function(e){return We.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=vn(e.ease,sr.ease)),jl(sr,e||{})},config:function(e){return jl(Bt,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,r=e.defaults,a=e.extendTimeline;(n||"").split(",").forEach(function(s){return s&&!It[s]&&!zt[s]&&Cr(t+" effect requires "+s+" plugin.")}),_a[t]=function(s,l,u){return i(qt(s),Yt(l||{},r),u)},a&&(St.prototype[t]=function(s,l,u){return this.add(_a[t](s,_i(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){Ce[e]=vn(t)},parseEase:function(e,t){return arguments.length?vn(e,t):Ce},getById:function(e){return We.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new St(e),n,r;for(i.smoothChildTiming=Tt(e.smoothChildTiming),We.remove(i),i._dp=0,i._time=i._tTime=We._time,n=We._first;n;)r=n._next,(t||!(!n._dur&&n instanceof it&&n.vars.onComplete===n._targets[0]))&&fi(i,n,n._start-n._delay),n=r;return fi(We,i,0),i},context:function(e,t){return e?new Ru(e,t):ke},matchMedia:function(e){return new q_(e)},matchMediaRefresh:function(){return xn.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||Ka()},addEventListener:function(e,t){var i=vs[e]||(vs[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=vs[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:w_,wrapYoyo:T_,distribute:lu,random:uu,snap:cu,normalize:E_,getUnit:pt,clamp:x_,splitColor:mu,toArray:qt,selector:qa,mapRange:hu,pipe:S_,unitize:M_,interpolate:b_,shuffle:ou},install:Kc,effects:_a,ticker:Nt,updateRoot:St.updateRoot,plugins:It,globalTimeline:We,core:{PropTween:At,globals:jc,Tween:it,Timeline:St,Animation:Lr,getCache:gn,_removeLinkedListItem:Ps,reverting:function(){return _t},context:function(e){return e&&ke&&(ke.data.push(e),e._ctx=ke),ke},suppressOverwrites:function(e){return oo=e}}};bt("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return ws[o]=it[o]});Nt.add(St.updateRoot);Kn=ws.to({},{duration:0});var Y_=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},Z_=function(e,t){var i=e._targets,n,r,a;for(n in t)for(r=i.length;r--;)a=e._ptLookup[r][n],a&&(a=a.d)&&(a._pt&&(a=Y_(a,n)),a&&a.modifier&&a.modifier(t[n],e,i[r],n))},Ma=function(e,t){return{name:e,rawVars:1,init:function(n,r,a){a._onInit=function(s){var l,u;if(ot(r)&&(l={},bt(r,function(c){return l[c]=1}),r=l),t){l={};for(u in r)l[u]=t(r[u]);r=l}Z_(s,r)}}}},Pt=ws.registerPlugin({name:"attr",init:function(e,t,i,n,r){var a,s,l;this.tween=i;for(a in t)l=e.getAttribute(a)||"",s=this.add(e,"setAttribute",(l||0)+"",t[a],n,r,0,0,a),s.op=a,s.b=l,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)_t?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Ma("roundProps",Ya),Ma("modifiers"),Ma("snap",cu))||ws;it.version=St.version=Pt.version="3.12.5";Zc=1;co()&&lr();var ic=Ce.Power0,Ea=Ce.Power1,wa=Ce.Power2,Ta=Ce.Power3;Ce.Power4;Ce.Linear;Ce.Quad;Ce.Cubic;Ce.Quart;Ce.Quint;Ce.Strong;Ce.Elastic;Ce.Back;Ce.SteppedEase;Ce.Bounce;Ce.Sine;var ba=Ce.Expo;Ce.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var nc,Vi,Qn,So,hn,rc,Mo,K_=function(){return typeof window!="undefined"},Li={},on=180/Math.PI,er=Math.PI/180,Vn=Math.atan2,sc=1e8,Eo=/([A-Z])/g,j_=/(left|right|width|margin|padding|x)/i,$_=/[\s,\(]\S/,di={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ja=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},J_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Q_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},e0=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Pu=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Du=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},t0=function(e,t,i){return e.style[t]=i},i0=function(e,t,i){return e.style.setProperty(t,i)},n0=function(e,t,i){return e._gsap[t]=i},r0=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},s0=function(e,t,i,n,r){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(r,a)},a0=function(e,t,i,n,r){var a=e._gsap;a[t]=i,a.renderTransform(r,a)},Xe="transform",Ct=Xe+"Origin",o0=function o(e,t){var i=this,n=this.target,r=n.style,a=n._gsap;if(e in Li&&r){if(this.tfm=this.tfm||{},e!=="transform")e=di[e]||e,~e.indexOf(",")?e.split(",").forEach(function(s){return i.tfm[s]=Ti(n,s)}):this.tfm[e]=a.x?a[e]:Ti(n,e),e===Ct&&(this.tfm.zOrigin=a.zOrigin);else return di.transform.split(",").forEach(function(s){return o.call(i,s,t)});if(this.props.indexOf(Xe)>=0)return;a.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(Ct,t,"")),e=Xe}(r||t)&&this.props.push(e,t,r[e])},Lu=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},l0=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?i[e[r]]=e[r+2]:i.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Eo,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)n[a]=this.tfm[a];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Mo(),(!r||!r.isStart)&&!i[Xe]&&(Lu(i),n.zOrigin&&i[Ct]&&(i[Ct]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},Fu=function(e,t){var i={target:e,props:[],revert:l0,save:o0};return e._gsap||Pt.core.getCache(e),t&&t.split(",").forEach(function(n){return i.save(n)}),i},Iu,$a=function(e,t){var i=Vi.createElementNS?Vi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Vi.createElement(e);return i&&i.style?i:Vi.createElement(e)},gi=function o(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(Eo,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&o(e,cr(t)||t,1)||""},ac="O,Moz,ms,Ms,Webkit".split(","),cr=function(e,t,i){var n=t||hn,r=n.style,a=5;if(e in r&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(ac[a]+e in r););return a<0?null:(a===3?"ms":a>=0?ac[a]:"")+e},Ja=function(){K_()&&window.document&&(nc=window,Vi=nc.document,Qn=Vi.documentElement,hn=$a("div")||{style:{}},$a("div"),Xe=cr(Xe),Ct=Xe+"Origin",hn.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Iu=!!cr("perspective"),Mo=Pt.core.reverting,So=1)},Aa=function o(e){var t=$a("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,r=this.style.cssText,a;if(Qn.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(a=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),Qn.removeChild(t),this.style.cssText=r,a},oc=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Ou=function(e){var t;try{t=e.getBBox()}catch{t=Aa.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Aa||(t=Aa.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+oc(e,["x","cx","x1"])||0,y:+oc(e,["y","cy","y1"])||0,width:0,height:0}:t},Nu=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Ou(e))},wn=function(e,t){if(t){var i=e.style,n;t in Li&&t!==Ct&&(t=Xe),i.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(n==="--"?t:t.replace(Eo,"-$1").toLowerCase())):i.removeAttribute(t)}},Wi=function(e,t,i,n,r,a){var s=new At(e._pt,t,i,0,1,a?Du:Pu);return e._pt=s,s.b=n,s.e=r,e._props.push(i),s},lc={deg:1,rad:1,turn:1},c0={grid:1,flex:1},Ki=function o(e,t,i,n){var r=parseFloat(i)||0,a=(i+"").trim().substr((r+"").length)||"px",s=hn.style,l=j_.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),p=100,h=n==="px",f=n==="%",g,d,m,_;if(n===a||!r||lc[n]||lc[a])return r;if(a!=="px"&&!h&&(r=o(e,t,i,"px")),_=e.getCTM&&Nu(e),(f||a==="%")&&(Li[t]||~t.indexOf("adius")))return g=_?e.getBBox()[l?"width":"height"]:e[c],Ke(f?r/g*p:r/100*g);if(s[l?"width":"height"]=p+(h?a:n),d=~t.indexOf("adius")||n==="em"&&e.appendChild&&!u?e:e.parentNode,_&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===Vi||!d.appendChild)&&(d=Vi.body),m=d._gsap,m&&f&&m.width&&l&&m.time===Nt.time&&!m.uncache)return Ke(r/m.width*p);if(f&&(t==="height"||t==="width")){var E=e.style[t];e.style[t]=p+n,g=e[c],E?e.style[t]=E:wn(e,t)}else(f||a==="%")&&!c0[gi(d,"display")]&&(s.position=gi(e,"position")),d===e&&(s.position="static"),d.appendChild(hn),g=hn[c],d.removeChild(hn),s.position="absolute";return l&&f&&(m=gn(d),m.time=Nt.time,m.width=d[c]),Ke(h?g*r/p:g&&r?p/g*r:0)},Ti=function(e,t,i,n){var r;return So||Ja(),t in di&&t!=="transform"&&(t=di[t],~t.indexOf(",")&&(t=t.split(",")[0])),Li[t]&&t!=="transform"?(r=Ir(e,n),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:bs(gi(e,Ct))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||n||~(r+"").indexOf("calc("))&&(r=Ts[t]&&Ts[t](e,t,i)||gi(e,t)||Jc(e,t)||(t==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?Ki(e,t,r,i)+i:r},u0=function(e,t,i,n){if(!i||i==="none"){var r=cr(t,e,1),a=r&&gi(e,r,1);a&&a!==i?(t=r,i=a):t==="borderColor"&&(i=gi(e,"borderTopColor"))}var s=new At(this._pt,e.style,t,0,1,Au),l=0,u=0,c,p,h,f,g,d,m,_,E,T,x,v;if(s.b=i,s.e=n,i+="",n+="",n==="auto"&&(d=e.style[t],e.style[t]=n,n=gi(e,t)||n,d?e.style[t]=d:wn(e,t)),c=[i,n],_u(c),i=c[0],n=c[1],h=i.match(Zn)||[],v=n.match(Zn)||[],v.length){for(;p=Zn.exec(n);)m=p[0],E=n.substring(l,p.index),g?g=(g+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(g=1),m!==(d=h[u++]||"")&&(f=parseFloat(d)||0,x=d.substr((f+"").length),m.charAt(1)==="="&&(m=Jn(f,m)+x),_=parseFloat(m),T=m.substr((_+"").length),l=Zn.lastIndex-T.length,T||(T=T||Bt.units[t]||x,l===n.length&&(n+=T,s.e+=T)),x!==T&&(f=Ki(e,t,d,T)||0),s._pt={_next:s._pt,p:E||u===1?E:",",s:f,c:_-f,m:g&&g<4||t==="zIndex"?Math.round:0});s.c=l<n.length?n.substring(l,n.length):""}else s.r=t==="display"&&n==="none"?Du:Pu;return qc.test(n)&&(s.e=0),this._pt=s,s},cc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},f0=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=cc[i]||i,t[1]=cc[n]||n,t.join(" ")},h0=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,r=t.u,a=i._gsap,s,l,u;if(r==="all"||r===!0)n.cssText="",l=1;else for(r=r.split(","),u=r.length;--u>-1;)s=r[u],Li[s]&&(l=1,s=s==="transformOrigin"?Ct:Xe),wn(i,s);l&&(wn(i,Xe),a&&(a.svg&&i.removeAttribute("transform"),Ir(i,1),a.uncache=1,Lu(n)))}},Ts={clearProps:function(e,t,i,n,r){if(r.data!=="isFromStart"){var a=e._pt=new At(e._pt,t,i,0,0,h0);return a.u=n,a.pr=-10,a.tween=r,e._props.push(i),1}}},Fr=[1,0,0,1,0,0],Uu={},Bu=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},uc=function(e){var t=gi(e,Xe);return Bu(t)?Fr:t.substr(7).match(Xc).map(Ke)},wo=function(e,t){var i=e._gsap||gn(e),n=e.style,r=uc(e),a,s,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Fr:r):(r===Fr&&!e.offsetParent&&e!==Qn&&!i.svg&&(l=n.display,n.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(u=1,s=e.nextElementSibling,Qn.appendChild(e)),r=uc(e),l?n.display=l:wn(e,"display"),u&&(s?a.insertBefore(e,s):a?a.appendChild(e):Qn.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Qa=function(e,t,i,n,r,a){var s=e._gsap,l=r||wo(e,!0),u=s.xOrigin||0,c=s.yOrigin||0,p=s.xOffset||0,h=s.yOffset||0,f=l[0],g=l[1],d=l[2],m=l[3],_=l[4],E=l[5],T=t.split(" "),x=parseFloat(T[0])||0,v=parseFloat(T[1])||0,S,M,y,w;i?l!==Fr&&(M=f*m-g*d)&&(y=x*(m/M)+v*(-d/M)+(d*E-m*_)/M,w=x*(-g/M)+v*(f/M)-(f*E-g*_)/M,x=y,v=w):(S=Ou(e),x=S.x+(~T[0].indexOf("%")?x/100*S.width:x),v=S.y+(~(T[1]||T[0]).indexOf("%")?v/100*S.height:v)),n||n!==!1&&s.smooth?(_=x-u,E=v-c,s.xOffset=p+(_*f+E*d)-_,s.yOffset=h+(_*g+E*m)-E):s.xOffset=s.yOffset=0,s.xOrigin=x,s.yOrigin=v,s.smooth=!!n,s.origin=t,s.originIsAbsolute=!!i,e.style[Ct]="0px 0px",a&&(Wi(a,s,"xOrigin",u,x),Wi(a,s,"yOrigin",c,v),Wi(a,s,"xOffset",p,s.xOffset),Wi(a,s,"yOffset",h,s.yOffset)),e.setAttribute("data-svg-origin",x+" "+v)},Ir=function(e,t){var i=e._gsap||new Su(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,r=i.scaleX<0,a="px",s="deg",l=getComputedStyle(e),u=gi(e,Ct)||"0",c,p,h,f,g,d,m,_,E,T,x,v,S,M,y,w,A,b,L,F,P,N,I,z,k,B,W,J,Z,j,ie,oe;return c=p=h=d=m=_=E=T=x=0,f=g=1,i.svg=!!(e.getCTM&&Nu(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[Xe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Xe]!=="none"?l[Xe]:"")),n.scale=n.rotate=n.translate="none"),M=wo(e,i.svg),i.svg&&(i.uncache?(k=e.getBBox(),u=i.xOrigin-k.x+"px "+(i.yOrigin-k.y)+"px",z=""):z=!t&&e.getAttribute("data-svg-origin"),Qa(e,z||u,!!z||i.originIsAbsolute,i.smooth!==!1,M)),v=i.xOrigin||0,S=i.yOrigin||0,M!==Fr&&(b=M[0],L=M[1],F=M[2],P=M[3],c=N=M[4],p=I=M[5],M.length===6?(f=Math.sqrt(b*b+L*L),g=Math.sqrt(P*P+F*F),d=b||L?Vn(L,b)*on:0,E=F||P?Vn(F,P)*on+d:0,E&&(g*=Math.abs(Math.cos(E*er))),i.svg&&(c-=v-(v*b+S*F),p-=S-(v*L+S*P))):(oe=M[6],j=M[7],W=M[8],J=M[9],Z=M[10],ie=M[11],c=M[12],p=M[13],h=M[14],y=Vn(oe,Z),m=y*on,y&&(w=Math.cos(-y),A=Math.sin(-y),z=N*w+W*A,k=I*w+J*A,B=oe*w+Z*A,W=N*-A+W*w,J=I*-A+J*w,Z=oe*-A+Z*w,ie=j*-A+ie*w,N=z,I=k,oe=B),y=Vn(-F,Z),_=y*on,y&&(w=Math.cos(-y),A=Math.sin(-y),z=b*w-W*A,k=L*w-J*A,B=F*w-Z*A,ie=P*A+ie*w,b=z,L=k,F=B),y=Vn(L,b),d=y*on,y&&(w=Math.cos(y),A=Math.sin(y),z=b*w+L*A,k=N*w+I*A,L=L*w-b*A,I=I*w-N*A,b=z,N=k),m&&Math.abs(m)+Math.abs(d)>359.9&&(m=d=0,_=180-_),f=Ke(Math.sqrt(b*b+L*L+F*F)),g=Ke(Math.sqrt(I*I+oe*oe)),y=Vn(N,I),E=Math.abs(y)>2e-4?y*on:0,x=ie?1/(ie<0?-ie:ie):0),i.svg&&(z=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Bu(gi(e,Xe)),z&&e.setAttribute("transform",z))),Math.abs(E)>90&&Math.abs(E)<270&&(r?(f*=-1,E+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,E+=E<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=p-((i.yPercent=p&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-p)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=h+a,i.scaleX=Ke(f),i.scaleY=Ke(g),i.rotation=Ke(d)+s,i.rotationX=Ke(m)+s,i.rotationY=Ke(_)+s,i.skewX=E+s,i.skewY=T+s,i.transformPerspective=x+a,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(n[Ct]=bs(u)),i.xOffset=i.yOffset=0,i.force3D=Bt.force3D,i.renderTransform=i.svg?p0:Iu?zu:d0,i.uncache=0,i},bs=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ca=function(e,t,i){var n=pt(t);return Ke(parseFloat(t)+parseFloat(Ki(e,"x",i+"px",n)))+n},d0=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,zu(e,t)},nn="0deg",_r="0px",rn=") ",zu=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,a=i.x,s=i.y,l=i.z,u=i.rotation,c=i.rotationY,p=i.rotationX,h=i.skewX,f=i.skewY,g=i.scaleX,d=i.scaleY,m=i.transformPerspective,_=i.force3D,E=i.target,T=i.zOrigin,x="",v=_==="auto"&&e&&e!==1||_===!0;if(T&&(p!==nn||c!==nn)){var S=parseFloat(c)*er,M=Math.sin(S),y=Math.cos(S),w;S=parseFloat(p)*er,w=Math.cos(S),a=Ca(E,a,M*w*-T),s=Ca(E,s,-Math.sin(S)*-T),l=Ca(E,l,y*w*-T+T)}m!==_r&&(x+="perspective("+m+rn),(n||r)&&(x+="translate("+n+"%, "+r+"%) "),(v||a!==_r||s!==_r||l!==_r)&&(x+=l!==_r||v?"translate3d("+a+", "+s+", "+l+") ":"translate("+a+", "+s+rn),u!==nn&&(x+="rotate("+u+rn),c!==nn&&(x+="rotateY("+c+rn),p!==nn&&(x+="rotateX("+p+rn),(h!==nn||f!==nn)&&(x+="skew("+h+", "+f+rn),(g!==1||d!==1)&&(x+="scale("+g+", "+d+rn),E.style[Xe]=x||"translate(0, 0)"},p0=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,a=i.x,s=i.y,l=i.rotation,u=i.skewX,c=i.skewY,p=i.scaleX,h=i.scaleY,f=i.target,g=i.xOrigin,d=i.yOrigin,m=i.xOffset,_=i.yOffset,E=i.forceCSS,T=parseFloat(a),x=parseFloat(s),v,S,M,y,w;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=er,u*=er,v=Math.cos(l)*p,S=Math.sin(l)*p,M=Math.sin(l-u)*-h,y=Math.cos(l-u)*h,u&&(c*=er,w=Math.tan(u-c),w=Math.sqrt(1+w*w),M*=w,y*=w,c&&(w=Math.tan(c),w=Math.sqrt(1+w*w),v*=w,S*=w)),v=Ke(v),S=Ke(S),M=Ke(M),y=Ke(y)):(v=p,y=h,S=M=0),(T&&!~(a+"").indexOf("px")||x&&!~(s+"").indexOf("px"))&&(T=Ki(f,"x",a,"px"),x=Ki(f,"y",s,"px")),(g||d||m||_)&&(T=Ke(T+g-(g*v+d*M)+m),x=Ke(x+d-(g*S+d*y)+_)),(n||r)&&(w=f.getBBox(),T=Ke(T+n/100*w.width),x=Ke(x+r/100*w.height)),w="matrix("+v+","+S+","+M+","+y+","+T+","+x+")",f.setAttribute("transform",w),E&&(f.style[Xe]=w)},m0=function(e,t,i,n,r){var a=360,s=ot(r),l=parseFloat(r)*(s&&~r.indexOf("rad")?on:1),u=l-n,c=n+u+"deg",p,h;return s&&(p=r.split("_")[1],p==="short"&&(u%=a,u!==u%(a/2)&&(u+=u<0?a:-a)),p==="cw"&&u<0?u=(u+a*sc)%a-~~(u/a)*a:p==="ccw"&&u>0&&(u=(u-a*sc)%a-~~(u/a)*a)),e._pt=h=new At(e._pt,t,i,n,u,J_),h.e=c,h.u="deg",e._props.push(i),h},fc=function(e,t){for(var i in t)e[i]=t[i];return e},g0=function(e,t,i){var n=fc({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=i.style,s,l,u,c,p,h,f,g;n.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),a[Xe]=t,s=Ir(i,1),wn(i,Xe),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Xe],a[Xe]=t,s=Ir(i,1),a[Xe]=u);for(l in Li)u=n[l],c=s[l],u!==c&&r.indexOf(l)<0&&(f=pt(u),g=pt(c),p=f!==g?Ki(i,l,u,g):parseFloat(u),h=parseFloat(c),e._pt=new At(e._pt,s,l,p,h-p,ja),e._pt.u=g||0,e._props.push(l));fc(s,n)};bt("padding,margin,Width,Radius",function(o,e){var t="Top",i="Right",n="Bottom",r="Left",a=(e<3?[t,i,n,r]:[t+r,t+i,n+i,n+r]).map(function(s){return e<2?o+s:"border"+s+o});Ts[e>1?"border"+o:o]=function(s,l,u,c,p){var h,f;if(arguments.length<4)return h=a.map(function(g){return Ti(s,g,u)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(c+"").split(" "),f={},a.forEach(function(g,d){return f[g]=h[d]=h[d]||h[(d-1)/2|0]}),s.init(l,f,p)}});var Gu={name:"css",register:Ja,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,r){var a=this._props,s=e.style,l=i.vars.startAt,u,c,p,h,f,g,d,m,_,E,T,x,v,S,M,y;So||Ja(),this.styles=this.styles||Fu(e),y=this.styles.props,this.tween=i;for(d in t)if(d!=="autoRound"&&(c=t[d],!(It[d]&&Mu(d,t,i,n,e,r)))){if(f=typeof c,g=Ts[d],f==="function"&&(c=c.call(i,n,e,r),f=typeof c),f==="string"&&~c.indexOf("random(")&&(c=Pr(c)),g)g(this,e,d,c,i)&&(M=1);else if(d.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(d)+"").trim(),c+="",Yi.lastIndex=0,Yi.test(u)||(m=pt(u),_=pt(c)),_?m!==_&&(u=Ki(e,d,u,_)+_):m&&(c+=m),this.add(s,"setProperty",u,c,n,r,0,0,d),a.push(d),y.push(d,0,s[d]);else if(f!=="undefined"){if(l&&d in l?(u=typeof l[d]=="function"?l[d].call(i,n,e,r):l[d],ot(u)&&~u.indexOf("random(")&&(u=Pr(u)),pt(u+"")||u==="auto"||(u+=Bt.units[d]||pt(Ti(e,d))||""),(u+"").charAt(1)==="="&&(u=Ti(e,d))):u=Ti(e,d),h=parseFloat(u),E=f==="string"&&c.charAt(1)==="="&&c.substr(0,2),E&&(c=c.substr(2)),p=parseFloat(c),d in di&&(d==="autoAlpha"&&(h===1&&Ti(e,"visibility")==="hidden"&&p&&(h=0),y.push("visibility",0,s.visibility),Wi(this,s,"visibility",h?"inherit":"hidden",p?"inherit":"hidden",!p)),d!=="scale"&&d!=="transform"&&(d=di[d],~d.indexOf(",")&&(d=d.split(",")[0]))),T=d in Li,T){if(this.styles.save(d),x||(v=e._gsap,v.renderTransform&&!t.parseTransform||Ir(e,t.parseTransform),S=t.smoothOrigin!==!1&&v.smooth,x=this._pt=new At(this._pt,s,Xe,0,1,v.renderTransform,v,0,-1),x.dep=1),d==="scale")this._pt=new At(this._pt,v,"scaleY",v.scaleY,(E?Jn(v.scaleY,E+p):p)-v.scaleY||0,ja),this._pt.u=0,a.push("scaleY",d),d+="X";else if(d==="transformOrigin"){y.push(Ct,0,s[Ct]),c=f0(c),v.svg?Qa(e,c,0,S,0,this):(_=parseFloat(c.split(" ")[2])||0,_!==v.zOrigin&&Wi(this,v,"zOrigin",v.zOrigin,_),Wi(this,s,d,bs(u),bs(c)));continue}else if(d==="svgOrigin"){Qa(e,c,1,S,0,this);continue}else if(d in Uu){m0(this,v,d,h,E?Jn(h,E+c):c);continue}else if(d==="smoothOrigin"){Wi(this,v,"smooth",v.smooth,c);continue}else if(d==="force3D"){v[d]=c;continue}else if(d==="transform"){g0(this,c,e);continue}}else d in s||(d=cr(d)||d);if(T||(p||p===0)&&(h||h===0)&&!$_.test(c)&&d in s)m=(u+"").substr((h+"").length),p||(p=0),_=pt(c)||(d in Bt.units?Bt.units[d]:m),m!==_&&(h=Ki(e,d,u,_)),this._pt=new At(this._pt,T?v:s,d,h,(E?Jn(h,E+p):p)-h,!T&&(_==="px"||d==="zIndex")&&t.autoRound!==!1?e0:ja),this._pt.u=_||0,m!==_&&_!=="%"&&(this._pt.b=u,this._pt.r=Q_);else if(d in s)u0.call(this,e,d,u,E?E+c:c);else if(d in e)this.add(e,d,u||e[d],E?E+c:c,n,r);else if(d!=="parseTransform"){fo(d,c);continue}T||(d in s?y.push(d,0,s[d]):y.push(d,1,u||e[d])),a.push(d)}}M&&Cu(this)},render:function(e,t){if(t.tween._time||!Mo())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Ti,aliases:di,getSetter:function(e,t,i){var n=di[t];return n&&n.indexOf(",")<0&&(t=n),t in Li&&t!==Ct&&(e._gsap.x||Ti(e,"x"))?i&&rc===i?t==="scale"?r0:n0:(rc=i||{})&&(t==="scale"?s0:a0):e.style&&!lo(e.style[t])?t0:~t.indexOf("-")?i0:xo(e,t)},core:{_removeProperty:wn,_getMatrix:wo}};Pt.utils.checkPrefix=cr;Pt.core.getStyleSaver=Fu;(function(o,e,t,i){var n=bt(o+","+e+","+t,function(r){Li[r]=1});bt(e,function(r){Bt.units[r]="deg",Uu[r]=1}),di[n[13]]=o+","+e,bt(i,function(r){var a=r.split(":");di[a[1]]=n[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");bt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Bt.units[o]="px"});Pt.registerPlugin(Gu);var Xn=Pt.registerPlugin(Gu)||Pt;Xn.core.Tween;const Do=class{constructor(){}static get instance(){return this._instance||(this._instance=new Do),this._instance}a(e,t,i=1,n=0,r=void 0,a=void 0,s=void 0,l=void 0){Xn.killTweensOf(e);let u={},c={};for(var p in t){const h=t[p];h[0]!=null&&h[0]!=null?(u[p]=h[0],c[p]=h[1]):c[p]=h}Xn.set(e,u),r==null&&(r=ic.easeNone),c.ease=r,c.duration=i,c.delay=n,a!=null&&(c.onStart=a),s!=null&&(c.onUpdate=s),l!=null&&(c.onComplete=l),Xn.to(e,c)}set(e,t){Xn.set(e,t)}kill(e){Xn.killTweensOf(e)}};let ut=Do;K(ut,"_instance"),K(ut,"EaseNone",ic.easeNone),K(ut,"Power1EaseIn",Ea.easeIn),K(ut,"Power1EaseOut",Ea.easeOut),K(ut,"Power1EaseInOut",Ea.easeInOut),K(ut,"Power2EaseIn",wa.easeIn),K(ut,"Power2EaseOut",wa.easeOut),K(ut,"Power2EaseInOut",wa.easeInOut),K(ut,"Power3EaseIn",Ta.easeIn),K(ut,"Power3EaseOut",Ta.easeOut),K(ut,"Power3EaseInOut",Ta.easeInOut),K(ut,"ExpoEaseIn",ba.easeIn),K(ut,"ExpoEaseOut",ba.easeOut),K(ut,"ExpoEaseInOut",ba.easeInOut);class _0 extends jg{constructor(t){super(t);K(this,"_con");K(this,"_conDest");K(this,"_matterjs");K(this,"_item",[]);K(this,"_blurCap");K(this,"_blur",[]);K(this,"_blurCamera");K(this,"_dest",[]);K(this,"_hoverText");K(this,"_hoverTextPos",new ki);this._hoverText=document.querySelector(".l-text span"),this._matterjs=t.matterjs,this._con=new Rt,this._conDest=new Rt,this.mainScene.add(this._conDest),this._blurCap=new kc,this._blurCap.add(this._con),this._blurCamera=this._makeOrthCamera(),this._updateOrthCamera(this._blurCamera,10,10);for(let r=0;r<3;r++){const a=new Qg;this._blur.push(a)}const i=new so(.5,32);this._matterjs.lineBodies.forEach((r,a)=>{this._item.push([]),r.forEach(()=>{const s=new ti(i,new no({color:16777215,transparent:!0,depthTest:!1}));this._con.add(s),this._item[a].push({mesh:s,noise:new H(Ye.instance.random(0,1),Ye.instance.random(0,1),Ye.instance.random(0,1))})})});const n=20;for(let r=0;r<n;r++){const a=new i_({tex:this._blur[this._blur.length-1].getTexture()});this._conDest.add(a),this._dest.push(a)}this._resize()}_update(){super._update(),this._conDest.position.y=dt.instance.screenOffsetY()*-1;const t=dt.instance.sw(),i=dt.instance.sh(),n=this._matterjs.lineBodies[0],r=t/n.length*.15;this._matterjs.lineBodies.forEach((h,f)=>{h.forEach((g,d)=>{let m=g.position.x-t*.5,_=g.position.y*-1+i*.5;const E=this._item[f][d],T=E.mesh;T.position.x=m,T.position.y=_;const x=E.noise,v=r*dt.instance.val(1.5,1);T.scale.set(v*Ye.instance.mix(2,5,x.x),v*Ye.instance.mix(2,5,x.y),1)})});const a=1;this._conDest.scale.set(a,a,a);const s=ui.instance.easeNormal.x*10,l=ui.instance.easeNormal.y*10,u=10;let c=s*1*u,p=l*1*u;this._hoverTextPos.x+=(c-this._hoverTextPos.x)*.5,this._hoverTextPos.y+=(p-this._hoverTextPos.y)*.5,ut.instance.set(this._hoverText,{x:this._hoverTextPos.x,y:this._hoverTextPos.y}),this._dest.forEach((h,f)=>{h.scale.set(t,i,1),h.position.x=f*s,h.position.y=f*l}),this.isNowRenderFrame()&&this._render()}_render(){this.renderer.setClearColor(0,0),this._blurCap.render(this.renderer,this.cameraPers);const t=this.renderSize.width*st.instance.BLUR_SCALE,i=this.renderSize.height*st.instance.BLUR_SCALE;this._blur.forEach((n,r)=>{const a=r==0?this._blurCap.texture():this._blur[r-1].getTexture();n.render(t,i,a,this.renderer,this._blurCamera,100)}),this.renderer.setClearColor(16777215,0),this.renderer.render(this.mainScene,this.cameraPers)}isNowRenderFrame(){return this.isRender&&Ai.instance.cnt%2==0}_resize(t=!0){super._resize();const i=dt.instance.sw(),n=dt.instance.sh();this.renderSize.width=i,this.renderSize.height=n,this._updatePersCamera(this.cameraPers,i,n);let r=window.devicePixelRatio||1;this._blurCap.setSize(i,n,r),this._updateOrthCamera(this._blurCamera,i*st.instance.BLUR_SCALE,n*st.instance.BLUR_SCALE),this.renderer.setPixelRatio(r),this.renderer.setSize(i,n),this.renderer.clear(),t&&this._render()}}class v0 extends hc{constructor(t){super(t);K(this,"_matterjs");this._matterjs=new sh,new _0({transparent:!0,matterjs:this._matterjs,isBack:!1,el:document.querySelector(".l-main")})}_update(){super._update()}}new v0({el:document.body});
