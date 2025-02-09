const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AboutView-CzTWiBE7.js","assets/AboutView-CSIvawM9.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function km(i){const e=Object.create(null);for(const t of i.split(","))e[t]=1;return t=>t in e}const Ut={},Aa=[],Ar=()=>{},qb=()=>!1,Jf=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),zm=i=>i.startsWith("onUpdate:"),zn=Object.assign,Hm=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},$b=Object.prototype.hasOwnProperty,Tt=(i,e)=>$b.call(i,e),Ze=Array.isArray,Ra=i=>Qf(i)==="[object Map]",zv=i=>Qf(i)==="[object Set]",Je=i=>typeof i=="function",Qt=i=>typeof i=="string",ds=i=>typeof i=="symbol",Ht=i=>i!==null&&typeof i=="object",Hv=i=>(Ht(i)||Je(i))&&Je(i.then)&&Je(i.catch),Vv=Object.prototype.toString,Qf=i=>Vv.call(i),Kb=i=>Qf(i).slice(8,-1),Gv=i=>Qf(i)==="[object Object]",Vm=i=>Qt(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Kl=km(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),eh=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},Zb=/-(\w)/g,Zi=eh(i=>i.replace(Zb,(e,t)=>t?t.toUpperCase():"")),Jb=/\B([A-Z])/g,$s=eh(i=>i.replace(Jb,"-$1").toLowerCase()),th=eh(i=>i.charAt(0).toUpperCase()+i.slice(1)),Eh=eh(i=>i?`on${th(i)}`:""),Bs=(i,e)=>!Object.is(i,e),Th=(i,...e)=>{for(let t=0;t<i.length;t++)i[t](...e)},Wv=(i,e,t,n=!1)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,writable:n,value:t})},Qb=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let vg;const nh=()=>vg||(vg=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Gm(i){if(Ze(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=Qt(n)?iE(n):Gm(n);if(r)for(const s in r)e[s]=r[s]}return e}else if(Qt(i)||Ht(i))return i}const eE=/;(?![^(]*\))/g,tE=/:([^]+)/,nE=/\/\*[^]*?\*\//g;function iE(i){const e={};return i.replace(nE,"").split(eE).forEach(t=>{if(t){const n=t.split(tE);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Xa(i){let e="";if(Qt(i))e=i;else if(Ze(i))for(let t=0;t<i.length;t++){const n=Xa(i[t]);n&&(e+=n+" ")}else if(Ht(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const rE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sE=km(rE);function Xv(i){return!!i||i===""}const jv=i=>!!(i&&i.__v_isRef===!0),Wm=i=>Qt(i)?i:i==null?"":Ze(i)||Ht(i)&&(i.toString===Vv||!Je(i.toString))?jv(i)?Wm(i.value):JSON.stringify(i,Yv,2):String(i),Yv=(i,e)=>jv(e)?Yv(i,e.value):Ra(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,r],s)=>(t[wh(n,s)+" =>"]=r,t),{})}:zv(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>wh(t))}:ds(e)?wh(e):Ht(e)&&!Ze(e)&&!Gv(e)?String(e):e,wh=(i,e="")=>{var t;return ds(i)?`Symbol(${(t=i.description)!=null?t:e})`:i};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zn;class qv{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Zn,!e&&Zn&&(this.index=(Zn.scopes||(Zn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Zn;try{return Zn=this,e()}finally{Zn=t}}}on(){Zn=this}off(){Zn=this.parent}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function $v(i){return new qv(i)}function Xm(){return Zn}function Kv(i,e=!1){Zn&&Zn.cleanups.push(i)}let Ot;const Ah=new WeakSet;class Zv{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Zn&&Zn.active&&Zn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ah.has(this)&&(Ah.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Qv(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,yg(this),ey(this);const e=Ot,t=ar;Ot=this,ar=!0;try{return this.fn()}finally{ty(this),Ot=e,ar=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)qm(e);this.deps=this.depsTail=void 0,yg(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ah.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){$d(this)&&this.run()}get dirty(){return $d(this)}}let Jv=0,Zl,Jl;function Qv(i,e=!1){if(i.flags|=8,e){i.next=Jl,Jl=i;return}i.next=Zl,Zl=i}function jm(){Jv++}function Ym(){if(--Jv>0)return;if(Jl){let e=Jl;for(Jl=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let i;for(;Zl;){let e=Zl;for(Zl=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(n){i||(i=n)}e=t}}if(i)throw i}function ey(i){for(let e=i.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ty(i){let e,t=i.depsTail,n=t;for(;n;){const r=n.prevDep;n.version===-1?(n===t&&(t=r),qm(n),oE(n)):e=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=r}i.deps=e,i.depsTail=t}function $d(i){for(let e=i.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ny(e.dep.computed)||e.dep.version!==e.version))return!0;return!!i._dirty}function ny(i){if(i.flags&4&&!(i.flags&16)||(i.flags&=-17,i.globalVersion===Mc))return;i.globalVersion=Mc;const e=i.dep;if(i.flags|=2,e.version>0&&!i.isSSR&&i.deps&&!$d(i)){i.flags&=-3;return}const t=Ot,n=ar;Ot=i,ar=!0;try{ey(i);const r=i.fn(i._value);(e.version===0||Bs(r,i._value))&&(i._value=r,e.version++)}catch(r){throw e.version++,r}finally{Ot=t,ar=n,ty(i),i.flags&=-3}}function qm(i,e=!1){const{dep:t,prevSub:n,nextSub:r}=i;if(n&&(n.nextSub=r,i.prevSub=void 0),r&&(r.prevSub=n,i.nextSub=void 0),t.subs===i&&(t.subs=n,!n&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)qm(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function oE(i){const{prevDep:e,nextDep:t}=i;e&&(e.nextDep=t,i.prevDep=void 0),t&&(t.prevDep=e,i.nextDep=void 0)}let ar=!0;const iy=[];function Ks(){iy.push(ar),ar=!1}function Zs(){const i=iy.pop();ar=i===void 0?!0:i}function yg(i){const{cleanup:e}=i;if(i.cleanup=void 0,e){const t=Ot;Ot=void 0;try{e()}finally{Ot=t}}}let Mc=0;class aE{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class $m{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ot||!ar||Ot===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ot)t=this.activeLink=new aE(Ot,this),Ot.deps?(t.prevDep=Ot.depsTail,Ot.depsTail.nextDep=t,Ot.depsTail=t):Ot.deps=Ot.depsTail=t,ry(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const n=t.nextDep;n.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=n),t.prevDep=Ot.depsTail,t.nextDep=void 0,Ot.depsTail.nextDep=t,Ot.depsTail=t,Ot.deps===t&&(Ot.deps=n)}return t}trigger(e){this.version++,Mc++,this.notify(e)}notify(e){jm();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ym()}}}function ry(i){if(i.dep.sc++,i.sub.flags&4){const e=i.dep.computed;if(e&&!i.dep.subs){e.flags|=20;for(let n=e.deps;n;n=n.nextDep)ry(n)}const t=i.dep.subs;t!==i&&(i.prevSub=t,t&&(t.nextSub=i)),i.dep.subs=i}}const yf=new WeakMap,Eo=Symbol(""),Kd=Symbol(""),bc=Symbol("");function Nn(i,e,t){if(ar&&Ot){let n=yf.get(i);n||yf.set(i,n=new Map);let r=n.get(t);r||(n.set(t,r=new $m),r.map=n,r.key=t),r.track()}}function Jr(i,e,t,n,r,s){const o=yf.get(i);if(!o){Mc++;return}const a=l=>{l&&l.trigger()};if(jm(),e==="clear")o.forEach(a);else{const l=Ze(i),c=l&&Vm(t);if(l&&t==="length"){const u=Number(n);o.forEach((f,h)=>{(h==="length"||h===bc||!ds(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(bc)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Eo)),Ra(i)&&a(o.get(Kd)));break;case"delete":l||(a(o.get(Eo)),Ra(i)&&a(o.get(Kd)));break;case"set":Ra(i)&&a(o.get(Eo));break}}Ym()}function lE(i,e){const t=yf.get(i);return t&&t.get(e)}function jo(i){const e=gt(i);return e===i?e:(Nn(e,"iterate",bc),$i(i)?e:e.map(On))}function ih(i){return Nn(i=gt(i),"iterate",bc),i}const cE={__proto__:null,[Symbol.iterator](){return Rh(this,Symbol.iterator,On)},concat(...i){return jo(this).concat(...i.map(e=>Ze(e)?jo(e):e))},entries(){return Rh(this,"entries",i=>(i[1]=On(i[1]),i))},every(i,e){return Br(this,"every",i,e,void 0,arguments)},filter(i,e){return Br(this,"filter",i,e,t=>t.map(On),arguments)},find(i,e){return Br(this,"find",i,e,On,arguments)},findIndex(i,e){return Br(this,"findIndex",i,e,void 0,arguments)},findLast(i,e){return Br(this,"findLast",i,e,On,arguments)},findLastIndex(i,e){return Br(this,"findLastIndex",i,e,void 0,arguments)},forEach(i,e){return Br(this,"forEach",i,e,void 0,arguments)},includes(...i){return Ch(this,"includes",i)},indexOf(...i){return Ch(this,"indexOf",i)},join(i){return jo(this).join(i)},lastIndexOf(...i){return Ch(this,"lastIndexOf",i)},map(i,e){return Br(this,"map",i,e,void 0,arguments)},pop(){return Ml(this,"pop")},push(...i){return Ml(this,"push",i)},reduce(i,...e){return Sg(this,"reduce",i,e)},reduceRight(i,...e){return Sg(this,"reduceRight",i,e)},shift(){return Ml(this,"shift")},some(i,e){return Br(this,"some",i,e,void 0,arguments)},splice(...i){return Ml(this,"splice",i)},toReversed(){return jo(this).toReversed()},toSorted(i){return jo(this).toSorted(i)},toSpliced(...i){return jo(this).toSpliced(...i)},unshift(...i){return Ml(this,"unshift",i)},values(){return Rh(this,"values",On)}};function Rh(i,e,t){const n=ih(i),r=n[e]();return n!==i&&!$i(i)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const uE=Array.prototype;function Br(i,e,t,n,r,s){const o=ih(i),a=o!==i&&!$i(i),l=o[e];if(l!==uE[e]){const f=l.apply(i,s);return a?On(f):f}let c=t;o!==i&&(a?c=function(f,h){return t.call(this,On(f),h,i)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,i)}));const u=l.call(o,c,n);return a&&r?r(u):u}function Sg(i,e,t,n){const r=ih(i);let s=t;return r!==i&&($i(i)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,i)}):s=function(o,a,l){return t.call(this,o,On(a),l,i)}),r[e](s,...n)}function Ch(i,e,t){const n=gt(i);Nn(n,"iterate",bc);const r=n[e](...t);return(r===-1||r===!1)&&Jm(t[0])?(t[0]=gt(t[0]),n[e](...t)):r}function Ml(i,e,t=[]){Ks(),jm();const n=gt(i)[e].apply(i,t);return Ym(),Zs(),n}const fE=km("__proto__,__v_isRef,__isVue"),sy=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(ds));function hE(i){ds(i)||(i=String(i));const e=gt(this);return Nn(e,"has",i),e.hasOwnProperty(i)}class oy{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return n===(r?s?ME:uy:s?cy:ly).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=Ze(e);if(!r){let l;if(o&&(l=cE[t]))return l;if(t==="hasOwnProperty")return hE}const a=Reflect.get(e,t,Jt(e)?e:n);return(ds(t)?sy.has(t):fE(t))||(r||Nn(e,"get",t),s)?a:Jt(a)?o&&Vm(t)?a:a.value:Ht(a)?r?hy(a):Xc(a):a}}class ay extends oy{constructor(e=!1){super(!1,e)}set(e,t,n,r){let s=e[t];if(!this._isShallow){const l=Uo(s);if(!$i(n)&&!Uo(n)&&(s=gt(s),n=gt(n)),!Ze(e)&&Jt(s)&&!Jt(n))return l?!1:(s.value=n,!0)}const o=Ze(e)&&Vm(t)?Number(t)<e.length:Tt(e,t),a=Reflect.set(e,t,n,Jt(e)?e:r);return e===gt(r)&&(o?Bs(n,s)&&Jr(e,"set",t,n):Jr(e,"add",t,n)),a}deleteProperty(e,t){const n=Tt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Jr(e,"delete",t,void 0),r}has(e,t){const n=Reflect.has(e,t);return(!ds(t)||!sy.has(t))&&Nn(e,"has",t),n}ownKeys(e){return Nn(e,"iterate",Ze(e)?"length":Eo),Reflect.ownKeys(e)}}class dE extends oy{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const pE=new ay,mE=new dE,_E=new ay(!0);const Zd=i=>i,eu=i=>Reflect.getPrototypeOf(i);function gE(i,e,t){return function(...n){const r=this.__v_raw,s=gt(r),o=Ra(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=t?Zd:e?Jd:On;return!e&&Nn(s,"iterate",l?Kd:Eo),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function tu(i){return function(...e){return i==="delete"?!1:i==="clear"?void 0:this}}function xE(i,e){const t={get(r){const s=this.__v_raw,o=gt(s),a=gt(r);i||(Bs(r,a)&&Nn(o,"get",r),Nn(o,"get",a));const{has:l}=eu(o),c=e?Zd:i?Jd:On;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!i&&Nn(gt(r),"iterate",Eo),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=gt(s),a=gt(r);return i||(Bs(r,a)&&Nn(o,"has",r),Nn(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=gt(a),c=e?Zd:i?Jd:On;return!i&&Nn(l,"iterate",Eo),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return zn(t,i?{add:tu("add"),set:tu("set"),delete:tu("delete"),clear:tu("clear")}:{add(r){!e&&!$i(r)&&!Uo(r)&&(r=gt(r));const s=gt(this);return eu(s).has.call(s,r)||(s.add(r),Jr(s,"add",r,r)),this},set(r,s){!e&&!$i(s)&&!Uo(s)&&(s=gt(s));const o=gt(this),{has:a,get:l}=eu(o);let c=a.call(o,r);c||(r=gt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Bs(s,u)&&Jr(o,"set",r,s):Jr(o,"add",r,s),this},delete(r){const s=gt(this),{has:o,get:a}=eu(s);let l=o.call(s,r);l||(r=gt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Jr(s,"delete",r,void 0),c},clear(){const r=gt(this),s=r.size!==0,o=r.clear();return s&&Jr(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=gE(r,i,e)}),t}function Km(i,e){const t=xE(i,e);return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(Tt(t,r)&&r in n?t:n,r,s)}const vE={get:Km(!1,!1)},yE={get:Km(!1,!0)},SE={get:Km(!0,!1)};const ly=new WeakMap,cy=new WeakMap,uy=new WeakMap,ME=new WeakMap;function bE(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function EE(i){return i.__v_skip||!Object.isExtensible(i)?0:bE(Kb(i))}function Xc(i){return Uo(i)?i:Zm(i,!1,pE,vE,ly)}function fy(i){return Zm(i,!1,_E,yE,cy)}function hy(i){return Zm(i,!0,mE,SE,uy)}function Zm(i,e,t,n,r){if(!Ht(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const o=EE(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return r.set(i,a),a}function ks(i){return Uo(i)?ks(i.__v_raw):!!(i&&i.__v_isReactive)}function Uo(i){return!!(i&&i.__v_isReadonly)}function $i(i){return!!(i&&i.__v_isShallow)}function Jm(i){return i?!!i.__v_raw:!1}function gt(i){const e=i&&i.__v_raw;return e?gt(e):i}function Qm(i){return!Tt(i,"__v_skip")&&Object.isExtensible(i)&&Wv(i,"__v_skip",!0),i}const On=i=>Ht(i)?Xc(i):i,Jd=i=>Ht(i)?hy(i):i;function Jt(i){return i?i.__v_isRef===!0:!1}function si(i){return py(i,!1)}function dy(i){return py(i,!0)}function py(i,e){return Jt(i)?i:new TE(i,e)}class TE{constructor(e,t){this.dep=new $m,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:gt(e),this._value=t?e:On(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,n=this.__v_isShallow||$i(e)||Uo(e);e=n?e:gt(e),Bs(e,t)&&(this._rawValue=e,this._value=n?e:On(e),this.dep.trigger())}}function Ft(i){return Jt(i)?i.value:i}function Ca(i){return Je(i)?i():Ft(i)}const wE={get:(i,e,t)=>e==="__v_raw"?i:Ft(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return Jt(r)&&!Jt(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function my(i){return ks(i)?i:new Proxy(i,wE)}function AE(i){const e=Ze(i)?new Array(i.length):{};for(const t in i)e[t]=CE(i,t);return e}class RE{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return lE(gt(this._object),this._key)}}function CE(i,e,t){const n=i[e];return Jt(n)?n:new RE(i,e,t)}class PE{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new $m(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Mc-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&Ot!==this)return Qv(this,!0),!0}get value(){const e=this.dep.track();return ny(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function DE(i,e,t=!1){let n,r;return Je(i)?n=i:(n=i.get,r=i.set),new PE(n,r,t)}const nu={},Sf=new WeakMap;let po;function LE(i,e=!1,t=po){if(t){let n=Sf.get(t);n||Sf.set(t,n=[]),n.push(i)}}function IE(i,e,t=Ut){const{immediate:n,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=x=>r?x:$i(x)||r===!1||r===0?Cs(x,1):Cs(x);let u,f,h,d,_=!1,g=!1;if(Jt(i)?(f=()=>i.value,_=$i(i)):ks(i)?(f=()=>c(i),_=!0):Ze(i)?(g=!0,_=i.some(x=>ks(x)||$i(x)),f=()=>i.map(x=>{if(Jt(x))return x.value;if(ks(x))return c(x);if(Je(x))return l?l(x,2):x()})):Je(i)?e?f=l?()=>l(i,2):i:f=()=>{if(h){Ks();try{h()}finally{Zs()}}const x=po;po=u;try{return l?l(i,3,[d]):i(d)}finally{po=x}}:f=Ar,e&&r){const x=f,E=r===!0?1/0:r;f=()=>Cs(x(),E)}const m=Xm(),p=()=>{u.stop(),m&&m.active&&Hm(m.effects,u)};if(s&&e){const x=e;e=(...E)=>{x(...E),p()}}let v=g?new Array(i.length).fill(nu):nu;const y=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const E=u.run();if(r||_||(g?E.some((A,b)=>Bs(A,v[b])):Bs(E,v))){h&&h();const A=po;po=u;try{const b=[E,v===nu?void 0:g&&v[0]===nu?[]:v,d];l?l(e,3,b):e(...b),v=E}finally{po=A}}}else u.run()};return a&&a(y),u=new Zv(f),u.scheduler=o?()=>o(y,!1):y,d=x=>LE(x,!1,u),h=u.onStop=()=>{const x=Sf.get(u);if(x){if(l)l(x,4);else for(const E of x)E();Sf.delete(u)}},e?n?y(!0):v=u.run():o?o(y.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Cs(i,e=1/0,t){if(e<=0||!Ht(i)||i.__v_skip||(t=t||new Set,t.has(i)))return i;if(t.add(i),e--,Jt(i))Cs(i.value,e,t);else if(Ze(i))for(let n=0;n<i.length;n++)Cs(i[n],e,t);else if(zv(i)||Ra(i))i.forEach(n=>{Cs(n,e,t)});else if(Gv(i)){for(const n in i)Cs(i[n],e,t);for(const n of Object.getOwnPropertySymbols(i))Object.prototype.propertyIsEnumerable.call(i,n)&&Cs(i[n],e,t)}return i}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function jc(i,e,t,n){try{return n?i(...n):i()}catch(r){rh(r,e,t)}}function Dr(i,e,t,n){if(Je(i)){const r=jc(i,e,t,n);return r&&Hv(r)&&r.catch(s=>{rh(s,e,t)}),r}if(Ze(i)){const r=[];for(let s=0;s<i.length;s++)r.push(Dr(i[s],e,t,n));return r}}function rh(i,e,t,n=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ut;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](i,l,c)===!1)return}a=a.parent}if(s){Ks(),jc(s,null,10,[i,l,c]),Zs();return}}NE(i,t,r,n,o)}function NE(i,e,t,n=!0,r=!1){if(r)throw i;console.error(i)}const ei=[];let gr=-1;const Pa=[];let Ts=null,da=0;const _y=Promise.resolve();let Mf=null;function sh(i){const e=Mf||_y;return i?e.then(this?i.bind(this):i):e}function OE(i){let e=gr+1,t=ei.length;for(;e<t;){const n=e+t>>>1,r=ei[n],s=Ec(r);s<i||s===i&&r.flags&2?e=n+1:t=n}return e}function e_(i){if(!(i.flags&1)){const e=Ec(i),t=ei[ei.length-1];!t||!(i.flags&2)&&e>=Ec(t)?ei.push(i):ei.splice(OE(e),0,i),i.flags|=1,gy()}}function gy(){Mf||(Mf=_y.then(vy))}function UE(i){Ze(i)?Pa.push(...i):Ts&&i.id===-1?Ts.splice(da+1,0,i):i.flags&1||(Pa.push(i),i.flags|=1),gy()}function Mg(i,e,t=gr+1){for(;t<ei.length;t++){const n=ei[t];if(n&&n.flags&2){if(i&&n.id!==i.uid)continue;ei.splice(t,1),t--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function xy(i){if(Pa.length){const e=[...new Set(Pa)].sort((t,n)=>Ec(t)-Ec(n));if(Pa.length=0,Ts){Ts.push(...e);return}for(Ts=e,da=0;da<Ts.length;da++){const t=Ts[da];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ts=null,da=0}}const Ec=i=>i.id==null?i.flags&2?-1:1/0:i.id;function vy(i){try{for(gr=0;gr<ei.length;gr++){const e=ei[gr];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),jc(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;gr<ei.length;gr++){const e=ei[gr];e&&(e.flags&=-2)}gr=-1,ei.length=0,xy(),Mf=null,(ei.length||Pa.length)&&vy()}}let wn=null,yy=null;function bf(i){const e=wn;return wn=i,yy=i&&i.type.__scopeId||null,e}function Yc(i,e=wn,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&Ig(-1);const s=bf(e);let o;try{o=i(...r)}finally{bf(s),n._d&&Ig(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function to(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(Ks(),Dr(l,t,8,[i.el,a,i,e]),Zs())}}const FE=Symbol("_vte"),BE=i=>i.__isTeleport;function t_(i,e){i.shapeFlag&6&&i.component?(i.transition=e,t_(i.component.subTree,e)):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Ui(i,e){return Je(i)?zn({name:i.name},e,{setup:i}):i}function Sy(i){i.ids=[i.ids[0]+i.ids[2]+++"-",0,0]}function Ef(i,e,t,n,r=!1){if(Ze(i)){i.forEach((_,g)=>Ef(_,e&&(Ze(e)?e[g]:e),t,n,r));return}if(Da(n)&&!r){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Ef(i,e,t,n.component.subTree);return}const s=n.shapeFlag&4?c_(n.component):n.el,o=r?null:s,{i:a,r:l}=i,c=e&&e.r,u=a.refs===Ut?a.refs={}:a.refs,f=a.setupState,h=gt(f),d=f===Ut?()=>!1:_=>Tt(h,_);if(c!=null&&c!==l&&(Qt(c)?(u[c]=null,d(c)&&(f[c]=null)):Jt(c)&&(c.value=null)),Je(l))jc(l,a,12,[o,u]);else{const _=Qt(l),g=Jt(l);if(_||g){const m=()=>{if(i.f){const p=_?d(l)?f[l]:u[l]:l.value;r?Ze(p)&&Hm(p,s):Ze(p)?p.includes(s)||p.push(s):_?(u[l]=[s],d(l)&&(f[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else _?(u[l]=o,d(l)&&(f[l]=o)):g&&(l.value=o,i.k&&(u[i.k]=o))};o?(m.id=-1,bi(m,t)):m()}}}nh().requestIdleCallback;nh().cancelIdleCallback;const Da=i=>!!i.type.__asyncLoader,My=i=>i.type.__isKeepAlive;function kE(i,e){by(i,"a",e)}function zE(i,e){by(i,"da",e)}function by(i,e,t=vn){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(oh(e,n,t),t){let r=t.parent;for(;r&&r.parent;)My(r.parent.vnode)&&HE(n,e,t,r),r=r.parent}}function HE(i,e,t,n){const r=oh(e,i,n,!0);n_(()=>{Hm(n[e],r)},t)}function oh(i,e,t=vn,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...o)=>{Ks();const a=qc(t),l=Dr(e,t,i,o);return a(),Zs(),l});return n?r.unshift(s):r.push(s),s}}const ps=i=>(e,t=vn)=>{(!Ac||i==="sp")&&oh(i,(...n)=>e(...n),t)},VE=ps("bm"),Or=ps("m"),GE=ps("bu"),WE=ps("u"),XE=ps("bum"),n_=ps("um"),jE=ps("sp"),YE=ps("rtg"),qE=ps("rtc");function $E(i,e=vn){oh("ec",i,e)}const KE="components",Ey=Symbol.for("v-ndc");function Ty(i){return Qt(i)?ZE(KE,i,!1)||i:i||Ey}function ZE(i,e,t=!0,n=!1){const r=wn||vn;if(r){const s=r.type;{const a=kT(s,!1);if(a&&(a===e||a===Zi(e)||a===th(Zi(e))))return s}const o=bg(r[i]||s[i],e)||bg(r.appContext[i],e);return!o&&n?s:o}}function bg(i,e){return i&&(i[e]||i[Zi(e)]||i[th(Zi(e))])}function Eg(i,e,t,n){let r;const s=t,o=Ze(i);if(o||Qt(i)){const a=o&&ks(i);let l=!1;a&&(l=!$i(i),i=ih(i)),r=new Array(i.length);for(let c=0,u=i.length;c<u;c++)r[c]=e(l?On(i[c]):i[c],c,void 0,s)}else if(typeof i=="number"){r=new Array(i);for(let a=0;a<i;a++)r[a]=e(a+1,a,void 0,s)}else if(Ht(i))if(i[Symbol.iterator])r=Array.from(i,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(i);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(i[u],u,l,s)}}else r=[];return r}function JE(i,e,t={},n,r){if(wn.ce||wn.parent&&Da(wn.parent)&&wn.parent.ce)return An(),Ya(ti,null,[on("slot",t,n)],64);let s=i[e];s&&s._c&&(s._d=!1),An();const o=s&&wy(s(t)),a=t.key||o&&o.key,l=Ya(ti,{key:(a&&!ds(a)?a:`_${e}`)+""},o||[],o&&i._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function wy(i){return i.some(e=>wc(e)?!(e.type===ja||e.type===ti&&!wy(e.children)):!0)?i:null}const Qd=i=>i?Yy(i)?c_(i):Qd(i.parent):null,Ql=zn(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Qd(i.parent),$root:i=>Qd(i.root),$host:i=>i.ce,$emit:i=>i.emit,$options:i=>Ry(i),$forceUpdate:i=>i.f||(i.f=()=>{e_(i.update)}),$nextTick:i=>i.n||(i.n=sh.bind(i.proxy)),$watch:i=>yT.bind(i)}),Ph=(i,e)=>i!==Ut&&!i.__isScriptSetup&&Tt(i,e),QE={get({_:i},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Ph(n,e))return o[e]=1,n[e];if(r!==Ut&&Tt(r,e))return o[e]=2,r[e];if((c=i.propsOptions[0])&&Tt(c,e))return o[e]=3,s[e];if(t!==Ut&&Tt(t,e))return o[e]=4,t[e];ep&&(o[e]=0)}}const u=Ql[e];let f,h;if(u)return e==="$attrs"&&Nn(i.attrs,"get",""),u(i);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==Ut&&Tt(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Tt(h,e))return h[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return Ph(r,e)?(r[e]=t,!0):n!==Ut&&Tt(n,e)?(n[e]=t,!0):Tt(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},o){let a;return!!t[o]||i!==Ut&&Tt(i,o)||Ph(e,o)||(a=s[0])&&Tt(a,o)||Tt(n,o)||Tt(Ql,o)||Tt(r.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:Tt(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function Tg(i){return Ze(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let ep=!0;function eT(i){const e=Ry(i),t=i.proxy,n=i.ctx;ep=!1,e.beforeCreate&&wg(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:_,activated:g,deactivated:m,beforeDestroy:p,beforeUnmount:v,destroyed:y,unmounted:x,render:E,renderTracked:A,renderTriggered:b,errorCaptured:C,serverPrefetch:S,expose:M,inheritAttrs:N,components:B,directives:z,filters:q}=e;if(c&&tT(c,n,null),o)for(const j in o){const V=o[j];Je(V)&&(n[j]=V.bind(t))}if(r){const j=r.call(t,t);Ht(j)&&(i.data=Xc(j))}if(ep=!0,s)for(const j in s){const V=s[j],he=Je(V)?V.bind(t,t):Je(V.get)?V.get.bind(t,t):Ar,O=!Je(V)&&Je(V.set)?V.set.bind(t):Ar,ge=ni({get:he,set:O});Object.defineProperty(n,j,{enumerable:!0,configurable:!0,get:()=>ge.value,set:Ce=>ge.value=Ce})}if(a)for(const j in a)Ay(a[j],n,t,j);if(l){const j=Je(l)?l.call(t):l;Reflect.ownKeys(j).forEach(V=>{Ku(V,j[V])})}u&&wg(u,i,"c");function W(j,V){Ze(V)?V.forEach(he=>j(he.bind(t))):V&&j(V.bind(t))}if(W(VE,f),W(Or,h),W(GE,d),W(WE,_),W(kE,g),W(zE,m),W($E,C),W(qE,A),W(YE,b),W(XE,v),W(n_,x),W(jE,S),Ze(M))if(M.length){const j=i.exposed||(i.exposed={});M.forEach(V=>{Object.defineProperty(j,V,{get:()=>t[V],set:he=>t[V]=he})})}else i.exposed||(i.exposed={});E&&i.render===Ar&&(i.render=E),N!=null&&(i.inheritAttrs=N),B&&(i.components=B),z&&(i.directives=z),S&&Sy(i)}function tT(i,e,t=Ar){Ze(i)&&(i=tp(i));for(const n in i){const r=i[n];let s;Ht(r)?"default"in r?s=lr(r.from||n,r.default,!0):s=lr(r.from||n):s=lr(r),Jt(s)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[n]=s}}function wg(i,e,t){Dr(Ze(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function Ay(i,e,t,n){let r=n.includes(".")?Hy(t,n):()=>t[n];if(Qt(i)){const s=e[i];Je(s)&&zs(r,s)}else if(Je(i))zs(r,i.bind(t));else if(Ht(i))if(Ze(i))i.forEach(s=>Ay(s,e,t,n));else{const s=Je(i.handler)?i.handler.bind(t):e[i.handler];Je(s)&&zs(r,s,i)}}function Ry(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>Tf(l,c,o,!0)),Tf(l,e,o)),Ht(e)&&s.set(e,l),l}function Tf(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&Tf(i,s,t,!0),r&&r.forEach(o=>Tf(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=nT[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const nT={data:Ag,props:Rg,emits:Rg,methods:Bl,computed:Bl,beforeCreate:jn,created:jn,beforeMount:jn,mounted:jn,beforeUpdate:jn,updated:jn,beforeDestroy:jn,beforeUnmount:jn,destroyed:jn,unmounted:jn,activated:jn,deactivated:jn,errorCaptured:jn,serverPrefetch:jn,components:Bl,directives:Bl,watch:rT,provide:Ag,inject:iT};function Ag(i,e){return e?i?function(){return zn(Je(i)?i.call(this,this):i,Je(e)?e.call(this,this):e)}:e:i}function iT(i,e){return Bl(tp(i),tp(e))}function tp(i){if(Ze(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function jn(i,e){return i?[...new Set([].concat(i,e))]:e}function Bl(i,e){return i?zn(Object.create(null),i,e):e}function Rg(i,e){return i?Ze(i)&&Ze(e)?[...new Set([...i,...e])]:zn(Object.create(null),Tg(i),Tg(e??{})):e}function rT(i,e){if(!i)return e;if(!e)return i;const t=zn(Object.create(null),i);for(const n in e)t[n]=jn(i[n],e[n]);return t}function Cy(){return{app:null,config:{isNativeTag:qb,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sT=0;function oT(i,e){return function(n,r=null){Je(n)||(n=zn({},n)),r!=null&&!Ht(r)&&(r=null);const s=Cy(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:sT++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:HT,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Je(u.install)?(o.add(u),u.install(c,...f)):Je(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||on(n,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),i(d,u,h),l=!0,c._container=u,u.__vue_app__=c,c_(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Dr(a,c._instance,16),i(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=To;To=c;try{return u()}finally{To=f}}};return c}}let To=null;function Ku(i,e){if(vn){let t=vn.provides;const n=vn.parent&&vn.parent.provides;n===t&&(t=vn.provides=Object.create(n)),t[i]=e}}function lr(i,e,t=!1){const n=vn||wn;if(n||To){const r=To?To._context.provides:n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(r&&i in r)return r[i];if(arguments.length>1)return t&&Je(e)?e.call(n&&n.proxy):e}}function i_(){return!!(vn||wn||To)}const Py={},Dy=()=>Object.create(Py),Ly=i=>Object.getPrototypeOf(i)===Py;function aT(i,e,t,n=!1){const r={},s=Dy();i.propsDefaults=Object.create(null),Iy(i,e,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);t?i.props=n?r:fy(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function lT(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=gt(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(ah(i.emitsOptions,h))continue;const d=e[h];if(l)if(Tt(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const _=Zi(h);r[_]=np(l,a,_,d,i,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{Iy(i,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Tt(e,f)&&((u=$s(f))===f||!Tt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=np(l,a,f,void 0,i,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Tt(e,f))&&(delete s[f],c=!0)}c&&Jr(i.attrs,"set","")}function Iy(i,e,t,n){const[r,s]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(Kl(l))continue;const c=e[l];let u;r&&Tt(r,u=Zi(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:ah(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=gt(t),c=a||Ut;for(let u=0;u<s.length;u++){const f=s[u];t[f]=np(r,l,f,c[f],i,!Tt(c,f))}}return o}function np(i,e,t,n,r,s){const o=i[t];if(o!=null){const a=Tt(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Je(l)){const{propsDefaults:c}=r;if(t in c)n=c[t];else{const u=qc(r);n=c[t]=l.call(null,e),u()}}else n=l;r.ce&&r.ce._setProp(t,n)}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===$s(t))&&(n=!0))}return n}const cT=new WeakMap;function Ny(i,e,t=!1){const n=t?cT:e.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!Je(i)){const u=f=>{l=!0;const[h,d]=Ny(f,e,!0);zn(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return Ht(i)&&n.set(i,Aa),Aa;if(Ze(s))for(let u=0;u<s.length;u++){const f=Zi(s[u]);Cg(f)&&(o[f]=Ut)}else if(s)for(const u in s){const f=Zi(u);if(Cg(f)){const h=s[u],d=o[f]=Ze(h)||Je(h)?{type:h}:zn({},h),_=d.type;let g=!1,m=!0;if(Ze(_))for(let p=0;p<_.length;++p){const v=_[p],y=Je(v)&&v.name;if(y==="Boolean"){g=!0;break}else y==="String"&&(m=!1)}else g=Je(_)&&_.name==="Boolean";d[0]=g,d[1]=m,(g||Tt(d,"default"))&&a.push(f)}}const c=[o,a];return Ht(i)&&n.set(i,c),c}function Cg(i){return i[0]!=="$"&&!Kl(i)}const Oy=i=>i[0]==="_"||i==="$stable",r_=i=>Ze(i)?i.map(Sr):[Sr(i)],uT=(i,e,t)=>{if(e._n)return e;const n=Yc((...r)=>r_(e(...r)),t);return n._c=!1,n},Uy=(i,e,t)=>{const n=i._ctx;for(const r in i){if(Oy(r))continue;const s=i[r];if(Je(s))e[r]=uT(r,s,n);else if(s!=null){const o=r_(s);e[r]=()=>o}}},Fy=(i,e)=>{const t=r_(e);i.slots.default=()=>t},By=(i,e,t)=>{for(const n in e)(t||n!=="_")&&(i[n]=e[n])},fT=(i,e,t)=>{const n=i.slots=Dy();if(i.vnode.shapeFlag&32){const r=e._;r?(By(n,e,t),t&&Wv(n,"_",r,!0)):Uy(e,n)}else e&&Fy(i,e)},hT=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,o=Ut;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:By(r,e,t):(s=!e.$stable,Uy(e,r)),o=e}else e&&(Fy(i,e),o={default:1});if(s)for(const a in r)!Oy(a)&&o[a]==null&&delete r[a]},bi=AT;function dT(i){return pT(i)}function pT(i,e){const t=nh();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=Ar,insertStaticContent:_}=i,g=(I,D,w,re=null,J=null,L=null,ie=void 0,ue=null,ne=!!D.dynamicChildren)=>{if(I===D)return;I&&!bl(I,D)&&(re=k(I),Ce(I,J,L,!0),I=null),D.patchFlag===-2&&(ne=!1,D.dynamicChildren=null);const{type:R,ref:T,shapeFlag:U}=D;switch(R){case lh:m(I,D,w,re);break;case ja:p(I,D,w,re);break;case Zu:I==null&&v(D,w,re,ie);break;case ti:B(I,D,w,re,J,L,ie,ue,ne);break;default:U&1?E(I,D,w,re,J,L,ie,ue,ne):U&6?z(I,D,w,re,J,L,ie,ue,ne):(U&64||U&128)&&R.process(I,D,w,re,J,L,ie,ue,ne,ae)}T!=null&&J&&Ef(T,I&&I.ref,L,D||I,!D)},m=(I,D,w,re)=>{if(I==null)n(D.el=a(D.children),w,re);else{const J=D.el=I.el;D.children!==I.children&&c(J,D.children)}},p=(I,D,w,re)=>{I==null?n(D.el=l(D.children||""),w,re):D.el=I.el},v=(I,D,w,re)=>{[I.el,I.anchor]=_(I.children,D,w,re,I.el,I.anchor)},y=({el:I,anchor:D},w,re)=>{let J;for(;I&&I!==D;)J=h(I),n(I,w,re),I=J;n(D,w,re)},x=({el:I,anchor:D})=>{let w;for(;I&&I!==D;)w=h(I),r(I),I=w;r(D)},E=(I,D,w,re,J,L,ie,ue,ne)=>{D.type==="svg"?ie="svg":D.type==="math"&&(ie="mathml"),I==null?A(D,w,re,J,L,ie,ue,ne):S(I,D,J,L,ie,ue,ne)},A=(I,D,w,re,J,L,ie,ue)=>{let ne,R;const{props:T,shapeFlag:U,transition:Y,dirs:$}=I;if(ne=I.el=o(I.type,L,T&&T.is,T),U&8?u(ne,I.children):U&16&&C(I.children,ne,null,re,J,Dh(I,L),ie,ue),$&&to(I,null,re,"created"),b(ne,I,I.scopeId,ie,re),T){for(const pe in T)pe!=="value"&&!Kl(pe)&&s(ne,pe,null,T[pe],L,re);"value"in T&&s(ne,"value",null,T.value,L),(R=T.onVnodeBeforeMount)&&_r(R,re,I)}$&&to(I,null,re,"beforeMount");const Z=mT(J,Y);Z&&Y.beforeEnter(ne),n(ne,D,w),((R=T&&T.onVnodeMounted)||Z||$)&&bi(()=>{R&&_r(R,re,I),Z&&Y.enter(ne),$&&to(I,null,re,"mounted")},J)},b=(I,D,w,re,J)=>{if(w&&d(I,w),re)for(let L=0;L<re.length;L++)d(I,re[L]);if(J){let L=J.subTree;if(D===L||Gy(L.type)&&(L.ssContent===D||L.ssFallback===D)){const ie=J.vnode;b(I,ie,ie.scopeId,ie.slotScopeIds,J.parent)}}},C=(I,D,w,re,J,L,ie,ue,ne=0)=>{for(let R=ne;R<I.length;R++){const T=I[R]=ue?ws(I[R]):Sr(I[R]);g(null,T,D,w,re,J,L,ie,ue)}},S=(I,D,w,re,J,L,ie)=>{const ue=D.el=I.el;let{patchFlag:ne,dynamicChildren:R,dirs:T}=D;ne|=I.patchFlag&16;const U=I.props||Ut,Y=D.props||Ut;let $;if(w&&no(w,!1),($=Y.onVnodeBeforeUpdate)&&_r($,w,D,I),T&&to(D,I,w,"beforeUpdate"),w&&no(w,!0),(U.innerHTML&&Y.innerHTML==null||U.textContent&&Y.textContent==null)&&u(ue,""),R?M(I.dynamicChildren,R,ue,w,re,Dh(D,J),L):ie||V(I,D,ue,null,w,re,Dh(D,J),L,!1),ne>0){if(ne&16)N(ue,U,Y,w,J);else if(ne&2&&U.class!==Y.class&&s(ue,"class",null,Y.class,J),ne&4&&s(ue,"style",U.style,Y.style,J),ne&8){const Z=D.dynamicProps;for(let pe=0;pe<Z.length;pe++){const fe=Z[pe],ve=U[fe],Fe=Y[fe];(Fe!==ve||fe==="value")&&s(ue,fe,ve,Fe,J,w)}}ne&1&&I.children!==D.children&&u(ue,D.children)}else!ie&&R==null&&N(ue,U,Y,w,J);(($=Y.onVnodeUpdated)||T)&&bi(()=>{$&&_r($,w,D,I),T&&to(D,I,w,"updated")},re)},M=(I,D,w,re,J,L,ie)=>{for(let ue=0;ue<D.length;ue++){const ne=I[ue],R=D[ue],T=ne.el&&(ne.type===ti||!bl(ne,R)||ne.shapeFlag&70)?f(ne.el):w;g(ne,R,T,null,re,J,L,ie,!0)}},N=(I,D,w,re,J)=>{if(D!==w){if(D!==Ut)for(const L in D)!Kl(L)&&!(L in w)&&s(I,L,D[L],null,J,re);for(const L in w){if(Kl(L))continue;const ie=w[L],ue=D[L];ie!==ue&&L!=="value"&&s(I,L,ue,ie,J,re)}"value"in w&&s(I,"value",D.value,w.value,J)}},B=(I,D,w,re,J,L,ie,ue,ne)=>{const R=D.el=I?I.el:a(""),T=D.anchor=I?I.anchor:a("");let{patchFlag:U,dynamicChildren:Y,slotScopeIds:$}=D;$&&(ue=ue?ue.concat($):$),I==null?(n(R,w,re),n(T,w,re),C(D.children||[],w,T,J,L,ie,ue,ne)):U>0&&U&64&&Y&&I.dynamicChildren?(M(I.dynamicChildren,Y,w,J,L,ie,ue),(D.key!=null||J&&D===J.subTree)&&ky(I,D,!0)):V(I,D,w,T,J,L,ie,ue,ne)},z=(I,D,w,re,J,L,ie,ue,ne)=>{D.slotScopeIds=ue,I==null?D.shapeFlag&512?J.ctx.activate(D,w,re,ie,ne):q(D,w,re,J,L,ie,ne):Q(I,D,ne)},q=(I,D,w,re,J,L,ie)=>{const ue=I.component=NT(I,re,J);if(My(I)&&(ue.ctx.renderer=ae),OT(ue,!1,ie),ue.asyncDep){if(J&&J.registerDep(ue,W,ie),!I.el){const ne=ue.subTree=on(ja);p(null,ne,D,w)}}else W(ue,I,D,w,J,L,ie)},Q=(I,D,w)=>{const re=D.component=I.component;if(TT(I,D,w))if(re.asyncDep&&!re.asyncResolved){j(re,D,w);return}else re.next=D,re.update();else D.el=I.el,re.vnode=D},W=(I,D,w,re,J,L,ie)=>{const ue=()=>{if(I.isMounted){let{next:U,bu:Y,u:$,parent:Z,vnode:pe}=I;{const xe=zy(I);if(xe){U&&(U.el=pe.el,j(I,U,ie)),xe.asyncDep.then(()=>{I.isUnmounted||ue()});return}}let fe=U,ve;no(I,!1),U?(U.el=pe.el,j(I,U,ie)):U=pe,Y&&Th(Y),(ve=U.props&&U.props.onVnodeBeforeUpdate)&&_r(ve,Z,U,pe),no(I,!0);const Fe=Dg(I),me=I.subTree;I.subTree=Fe,g(me,Fe,f(me.el),k(me),I,J,L),U.el=Fe.el,fe===null&&wT(I,Fe.el),$&&bi($,J),(ve=U.props&&U.props.onVnodeUpdated)&&bi(()=>_r(ve,Z,U,pe),J)}else{let U;const{el:Y,props:$}=D,{bm:Z,m:pe,parent:fe,root:ve,type:Fe}=I,me=Da(D);no(I,!1),Z&&Th(Z),!me&&(U=$&&$.onVnodeBeforeMount)&&_r(U,fe,D),no(I,!0);{ve.ce&&ve.ce._injectChildStyle(Fe);const xe=I.subTree=Dg(I);g(null,xe,w,re,I,J,L),D.el=xe.el}if(pe&&bi(pe,J),!me&&(U=$&&$.onVnodeMounted)){const xe=D;bi(()=>_r(U,fe,xe),J)}(D.shapeFlag&256||fe&&Da(fe.vnode)&&fe.vnode.shapeFlag&256)&&I.a&&bi(I.a,J),I.isMounted=!0,D=w=re=null}};I.scope.on();const ne=I.effect=new Zv(ue);I.scope.off();const R=I.update=ne.run.bind(ne),T=I.job=ne.runIfDirty.bind(ne);T.i=I,T.id=I.uid,ne.scheduler=()=>e_(T),no(I,!0),R()},j=(I,D,w)=>{D.component=I;const re=I.vnode.props;I.vnode=D,I.next=null,lT(I,D.props,re,w),hT(I,D.children,w),Ks(),Mg(I),Zs()},V=(I,D,w,re,J,L,ie,ue,ne=!1)=>{const R=I&&I.children,T=I?I.shapeFlag:0,U=D.children,{patchFlag:Y,shapeFlag:$}=D;if(Y>0){if(Y&128){O(R,U,w,re,J,L,ie,ue,ne);return}else if(Y&256){he(R,U,w,re,J,L,ie,ue,ne);return}}$&8?(T&16&&ye(R,J,L),U!==R&&u(w,U)):T&16?$&16?O(R,U,w,re,J,L,ie,ue,ne):ye(R,J,L,!0):(T&8&&u(w,""),$&16&&C(U,w,re,J,L,ie,ue,ne))},he=(I,D,w,re,J,L,ie,ue,ne)=>{I=I||Aa,D=D||Aa;const R=I.length,T=D.length,U=Math.min(R,T);let Y;for(Y=0;Y<U;Y++){const $=D[Y]=ne?ws(D[Y]):Sr(D[Y]);g(I[Y],$,w,null,J,L,ie,ue,ne)}R>T?ye(I,J,L,!0,!1,U):C(D,w,re,J,L,ie,ue,ne,U)},O=(I,D,w,re,J,L,ie,ue,ne)=>{let R=0;const T=D.length;let U=I.length-1,Y=T-1;for(;R<=U&&R<=Y;){const $=I[R],Z=D[R]=ne?ws(D[R]):Sr(D[R]);if(bl($,Z))g($,Z,w,null,J,L,ie,ue,ne);else break;R++}for(;R<=U&&R<=Y;){const $=I[U],Z=D[Y]=ne?ws(D[Y]):Sr(D[Y]);if(bl($,Z))g($,Z,w,null,J,L,ie,ue,ne);else break;U--,Y--}if(R>U){if(R<=Y){const $=Y+1,Z=$<T?D[$].el:re;for(;R<=Y;)g(null,D[R]=ne?ws(D[R]):Sr(D[R]),w,Z,J,L,ie,ue,ne),R++}}else if(R>Y)for(;R<=U;)Ce(I[R],J,L,!0),R++;else{const $=R,Z=R,pe=new Map;for(R=Z;R<=Y;R++){const Se=D[R]=ne?ws(D[R]):Sr(D[R]);Se.key!=null&&pe.set(Se.key,R)}let fe,ve=0;const Fe=Y-Z+1;let me=!1,xe=0;const Oe=new Array(Fe);for(R=0;R<Fe;R++)Oe[R]=0;for(R=$;R<=U;R++){const Se=I[R];if(ve>=Fe){Ce(Se,J,L,!0);continue}let Ve;if(Se.key!=null)Ve=pe.get(Se.key);else for(fe=Z;fe<=Y;fe++)if(Oe[fe-Z]===0&&bl(Se,D[fe])){Ve=fe;break}Ve===void 0?Ce(Se,J,L,!0):(Oe[Ve-Z]=R+1,Ve>=xe?xe=Ve:me=!0,g(Se,D[Ve],w,null,J,L,ie,ue,ne),ve++)}const Be=me?_T(Oe):Aa;for(fe=Be.length-1,R=Fe-1;R>=0;R--){const Se=Z+R,Ve=D[Se],Ge=Se+1<T?D[Se+1].el:re;Oe[R]===0?g(null,Ve,w,Ge,J,L,ie,ue,ne):me&&(fe<0||R!==Be[fe]?ge(Ve,w,Ge,2):fe--)}}},ge=(I,D,w,re,J=null)=>{const{el:L,type:ie,transition:ue,children:ne,shapeFlag:R}=I;if(R&6){ge(I.component.subTree,D,w,re);return}if(R&128){I.suspense.move(D,w,re);return}if(R&64){ie.move(I,D,w,ae);return}if(ie===ti){n(L,D,w);for(let U=0;U<ne.length;U++)ge(ne[U],D,w,re);n(I.anchor,D,w);return}if(ie===Zu){y(I,D,w);return}if(re!==2&&R&1&&ue)if(re===0)ue.beforeEnter(L),n(L,D,w),bi(()=>ue.enter(L),J);else{const{leave:U,delayLeave:Y,afterLeave:$}=ue,Z=()=>n(L,D,w),pe=()=>{U(L,()=>{Z(),$&&$()})};Y?Y(L,Z,pe):pe()}else n(L,D,w)},Ce=(I,D,w,re=!1,J=!1)=>{const{type:L,props:ie,ref:ue,children:ne,dynamicChildren:R,shapeFlag:T,patchFlag:U,dirs:Y,cacheIndex:$}=I;if(U===-2&&(J=!1),ue!=null&&Ef(ue,null,w,I,!0),$!=null&&(D.renderCache[$]=void 0),T&256){D.ctx.deactivate(I);return}const Z=T&1&&Y,pe=!Da(I);let fe;if(pe&&(fe=ie&&ie.onVnodeBeforeUnmount)&&_r(fe,D,I),T&6)de(I.component,w,re);else{if(T&128){I.suspense.unmount(w,re);return}Z&&to(I,null,D,"beforeUnmount"),T&64?I.type.remove(I,D,w,ae,re):R&&!R.hasOnce&&(L!==ti||U>0&&U&64)?ye(R,D,w,!1,!0):(L===ti&&U&384||!J&&T&16)&&ye(ne,D,w),re&&ze(I)}(pe&&(fe=ie&&ie.onVnodeUnmounted)||Z)&&bi(()=>{fe&&_r(fe,D,I),Z&&to(I,null,D,"unmounted")},w)},ze=I=>{const{type:D,el:w,anchor:re,transition:J}=I;if(D===ti){te(w,re);return}if(D===Zu){x(I);return}const L=()=>{r(w),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(I.shapeFlag&1&&J&&!J.persisted){const{leave:ie,delayLeave:ue}=J,ne=()=>ie(w,L);ue?ue(I.el,L,ne):ne()}else L()},te=(I,D)=>{let w;for(;I!==D;)w=h(I),r(I),I=w;r(D)},de=(I,D,w)=>{const{bum:re,scope:J,job:L,subTree:ie,um:ue,m:ne,a:R}=I;Pg(ne),Pg(R),re&&Th(re),J.stop(),L&&(L.flags|=8,Ce(ie,I,D,w)),ue&&bi(ue,D),bi(()=>{I.isUnmounted=!0},D),D&&D.pendingBranch&&!D.isUnmounted&&I.asyncDep&&!I.asyncResolved&&I.suspenseId===D.pendingId&&(D.deps--,D.deps===0&&D.resolve())},ye=(I,D,w,re=!1,J=!1,L=0)=>{for(let ie=L;ie<I.length;ie++)Ce(I[ie],D,w,re,J)},k=I=>{if(I.shapeFlag&6)return k(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const D=h(I.anchor||I.el),w=D&&D[FE];return w?h(w):D};let oe=!1;const le=(I,D,w)=>{I==null?D._vnode&&Ce(D._vnode,null,null,!0):g(D._vnode||null,I,D,null,null,null,w),D._vnode=I,oe||(oe=!0,Mg(),xy(),oe=!1)},ae={p:g,um:Ce,m:ge,r:ze,mt:q,mc:C,pc:V,pbc:M,n:k,o:i};return{render:le,hydrate:void 0,createApp:oT(le)}}function Dh({type:i,props:e},t){return t==="svg"&&i==="foreignObject"||t==="mathml"&&i==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function no({effect:i,job:e},t){t?(i.flags|=32,e.flags|=4):(i.flags&=-33,e.flags&=-5)}function mT(i,e){return(!i||i&&!i.pendingBranch)&&e&&!e.persisted}function ky(i,e,t=!1){const n=i.children,r=e.children;if(Ze(n)&&Ze(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=ws(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&ky(o,a)),a.type===lh&&(a.el=o.el)}}function _T(i){const e=i.slice(),t=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,i[t[a]]<c?s=a+1:o=a;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function zy(i){const e=i.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:zy(e)}function Pg(i){if(i)for(let e=0;e<i.length;e++)i[e].flags|=8}const gT=Symbol.for("v-scx"),xT=()=>lr(gT);function vT(i,e){return s_(i,null,e)}function zs(i,e,t){return s_(i,e,t)}function s_(i,e,t=Ut){const{immediate:n,deep:r,flush:s,once:o}=t,a=zn({},t),l=e&&n||!e&&s!=="post";let c;if(Ac){if(s==="sync"){const d=xT();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Ar,d.resume=Ar,d.pause=Ar,d}}const u=vn;a.call=(d,_,g)=>Dr(d,u,_,g);let f=!1;s==="post"?a.scheduler=d=>{bi(d,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(d,_)=>{_?d():e_(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=IE(i,e,a);return Ac&&(c?c.push(h):l&&h()),h}function yT(i,e,t){const n=this.proxy,r=Qt(i)?i.includes(".")?Hy(n,i):()=>n[i]:i.bind(n,n);let s;Je(e)?s=e:(s=e.handler,t=e);const o=qc(this),a=s_(r,s.bind(n),t);return o(),a}function Hy(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}const ST=(i,e)=>e==="modelValue"||e==="model-value"?i.modelModifiers:i[`${e}Modifiers`]||i[`${Zi(e)}Modifiers`]||i[`${$s(e)}Modifiers`];function MT(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||Ut;let r=t;const s=e.startsWith("update:"),o=s&&ST(n,e.slice(7));o&&(o.trim&&(r=t.map(u=>Qt(u)?u.trim():u)),o.number&&(r=t.map(Qb)));let a,l=n[a=Eh(e)]||n[a=Eh(Zi(e))];!l&&s&&(l=n[a=Eh($s(e))]),l&&Dr(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,Dr(c,i,6,r)}}function Vy(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!Je(i)){const l=c=>{const u=Vy(c,e,!0);u&&(a=!0,zn(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(Ht(i)&&n.set(i,null),null):(Ze(s)?s.forEach(l=>o[l]=null):zn(o,s),Ht(i)&&n.set(i,o),o)}function ah(i,e){return!i||!Jf(e)?!1:(e=e.slice(2).replace(/Once$/,""),Tt(i,e[0].toLowerCase()+e.slice(1))||Tt(i,$s(e))||Tt(i,e))}function Dg(i){const{type:e,vnode:t,proxy:n,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:_,inheritAttrs:g}=i,m=bf(i);let p,v;try{if(t.shapeFlag&4){const x=r||n,E=x;p=Sr(c.call(E,x,u,f,d,h,_)),v=a}else{const x=e;p=Sr(x.length>1?x(f,{attrs:a,slots:o,emit:l}):x(f,null)),v=e.props?a:bT(a)}}catch(x){ec.length=0,rh(x,i,1),p=on(ja)}let y=p;if(v&&g!==!1){const x=Object.keys(v),{shapeFlag:E}=y;x.length&&E&7&&(s&&x.some(zm)&&(v=ET(v,s)),y=qa(y,v,!1,!0))}return t.dirs&&(y=qa(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&t_(y,t.transition),p=y,bf(m),p}const bT=i=>{let e;for(const t in i)(t==="class"||t==="style"||Jf(t))&&((e||(e={}))[t]=i[t]);return e},ET=(i,e)=>{const t={};for(const n in i)(!zm(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function TT(i,e,t){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Lg(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==n[h]&&!ah(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Lg(n,o,c):!0:!!o;return!1}function Lg(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!ah(t,s))return!0}return!1}function wT({vnode:i,parent:e},t){for(;e;){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===i&&(n.el=i.el),n===i)(i=e.vnode).el=t,e=e.parent;else break}}const Gy=i=>i.__isSuspense;function AT(i,e){e&&e.pendingBranch?Ze(i)?e.effects.push(...i):e.effects.push(i):UE(i)}const ti=Symbol.for("v-fgt"),lh=Symbol.for("v-txt"),ja=Symbol.for("v-cmt"),Zu=Symbol.for("v-stc"),ec=[];let Pi=null;function An(i=!1){ec.push(Pi=i?null:[])}function RT(){ec.pop(),Pi=ec[ec.length-1]||null}let Tc=1;function Ig(i,e=!1){Tc+=i,i<0&&Pi&&e&&(Pi.hasOnce=!0)}function Wy(i){return i.dynamicChildren=Tc>0?Pi||Aa:null,RT(),Tc>0&&Pi&&Pi.push(i),i}function cr(i,e,t,n,r,s){return Wy(it(i,e,t,n,r,s,!0))}function Ya(i,e,t,n,r){return Wy(on(i,e,t,n,r,!0))}function wc(i){return i?i.__v_isVNode===!0:!1}function bl(i,e){return i.type===e.type&&i.key===e.key}const Xy=({key:i})=>i??null,Ju=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?Qt(i)||Jt(i)||Je(i)?{i:wn,r:i,k:e,f:!!t}:i:null);function it(i,e=null,t=null,n=0,r=null,s=i===ti?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Xy(e),ref:e&&Ju(e),scopeId:yy,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:wn};return a?(a_(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=Qt(t)?8:16),Tc>0&&!o&&Pi&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Pi.push(l),l}const on=CT;function CT(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===Ey)&&(i=ja),wc(i)){const a=qa(i,e,!0);return t&&a_(a,t),Tc>0&&!s&&Pi&&(a.shapeFlag&6?Pi[Pi.indexOf(i)]=a:Pi.push(a)),a.patchFlag=-2,a}if(zT(i)&&(i=i.__vccOpts),e){e=PT(e);let{class:a,style:l}=e;a&&!Qt(a)&&(e.class=Xa(a)),Ht(l)&&(Jm(l)&&!Ze(l)&&(l=zn({},l)),e.style=Gm(l))}const o=Qt(i)?1:Gy(i)?128:BE(i)?64:Ht(i)?4:Je(i)?2:0;return it(i,e,t,n,r,o,s,!0)}function PT(i){return i?Jm(i)||Ly(i)?zn({},i):i:null}function qa(i,e,t=!1,n=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=i,c=e?jy(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:i.type,props:c,key:c&&Xy(c),ref:e&&e.ref?t&&s?Ze(s)?s.concat(Ju(e)):[s,Ju(e)]:Ju(e):s,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetStart:i.targetStart,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==ti?o===-1?16:o|16:o,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:l,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&qa(i.ssContent),ssFallback:i.ssFallback&&qa(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce};return l&&n&&t_(u,l.clone(u)),u}function o_(i=" ",e=0){return on(lh,null,i,e)}function DT(i,e){const t=on(Zu,null,i);return t.staticCount=e,t}function Sr(i){return i==null||typeof i=="boolean"?on(ja):Ze(i)?on(ti,null,i.slice()):wc(i)?ws(i):on(lh,null,String(i))}function ws(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:qa(i)}function a_(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Ze(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),a_(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Ly(e)?e._ctx=wn:r===3&&wn&&(wn.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Je(e)?(e={default:e,_ctx:wn},t=32):(e=String(e),n&64?(t=16,e=[o_(e)]):t=8);i.children=e,i.shapeFlag|=t}function jy(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=Xa([e.class,n.class]));else if(r==="style")e.style=Gm([e.style,n.style]);else if(Jf(r)){const s=e[r],o=n[r];o&&s!==o&&!(Ze(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=n[r])}return e}function _r(i,e,t,n=null){Dr(i,e,7,[t,n])}const LT=Cy();let IT=0;function NT(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||LT,s={uid:IT++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new qv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ny(n,r),emitsOptions:Vy(n,r),emit:null,emitted:null,propsDefaults:Ut,inheritAttrs:n.inheritAttrs,ctx:Ut,data:Ut,props:Ut,attrs:Ut,slots:Ut,refs:Ut,setupState:Ut,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=MT.bind(null,s),i.ce&&i.ce(s),s}let vn=null;const l_=()=>vn||wn;let wf,ip;{const i=nh(),e=(t,n)=>{let r;return(r=i[t])||(r=i[t]=[]),r.push(n),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};wf=e("__VUE_INSTANCE_SETTERS__",t=>vn=t),ip=e("__VUE_SSR_SETTERS__",t=>Ac=t)}const qc=i=>{const e=vn;return wf(i),i.scope.on(),()=>{i.scope.off(),wf(e)}},Ng=()=>{vn&&vn.scope.off(),wf(null)};function Yy(i){return i.vnode.shapeFlag&4}let Ac=!1;function OT(i,e=!1,t=!1){e&&ip(e);const{props:n,children:r}=i.vnode,s=Yy(i);aT(i,n,s,e),fT(i,r,t);const o=s?UT(i,e):void 0;return e&&ip(!1),o}function UT(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=new Proxy(i.ctx,QE);const{setup:n}=t;if(n){Ks();const r=i.setupContext=n.length>1?BT(i):null,s=qc(i),o=jc(n,i,0,[i.props,r]),a=Hv(o);if(Zs(),s(),(a||i.sp)&&!Da(i)&&Sy(i),a){if(o.then(Ng,Ng),e)return o.then(l=>{Og(i,l)}).catch(l=>{rh(l,i,0)});i.asyncDep=o}else Og(i,o)}else qy(i)}function Og(i,e,t){Je(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:Ht(e)&&(i.setupState=my(e)),qy(i)}function qy(i,e,t){const n=i.type;i.render||(i.render=n.render||Ar);{const r=qc(i);Ks();try{eT(i)}finally{Zs(),r()}}}const FT={get(i,e){return Nn(i,"get",""),i[e]}};function BT(i){const e=t=>{i.exposed=t||{}};return{attrs:new Proxy(i.attrs,FT),slots:i.slots,emit:i.emit,expose:e}}function c_(i){return i.exposed?i.exposeProxy||(i.exposeProxy=new Proxy(my(Qm(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ql)return Ql[t](i)},has(e,t){return t in e||t in Ql}})):i.proxy}function kT(i,e=!0){return Je(i)?i.displayName||i.name:i.name||e&&i.__name}function zT(i){return Je(i)&&"__vccOpts"in i}const ni=(i,e)=>DE(i,e,Ac);function $y(i,e,t){const n=arguments.length;return n===2?Ht(e)&&!Ze(e)?wc(e)?on(i,null,[e]):on(i,e):on(i,null,e):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&wc(t)&&(t=[t]),on(i,e,t))}const HT="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rp;const Ug=typeof window<"u"&&window.trustedTypes;if(Ug)try{rp=Ug.createPolicy("vue",{createHTML:i=>i})}catch{}const Ky=rp?i=>rp.createHTML(i):i=>i,VT="http://www.w3.org/2000/svg",GT="http://www.w3.org/1998/Math/MathML",Yr=typeof document<"u"?document:null,Fg=Yr&&Yr.createElement("template"),WT={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e==="svg"?Yr.createElementNS(VT,i):e==="mathml"?Yr.createElementNS(GT,i):t?Yr.createElement(i,{is:t}):Yr.createElement(i);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>Yr.createTextNode(i),createComment:i=>Yr.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Yr.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Fg.innerHTML=Ky(n==="svg"?`<svg>${i}</svg>`:n==="mathml"?`<math>${i}</math>`:i);const a=Fg.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},XT=Symbol("_vtc");function jT(i,e,t){const n=i[XT];n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}const Bg=Symbol("_vod"),YT=Symbol("_vsh"),qT=Symbol(""),$T=/(^|;)\s*display\s*:/;function KT(i,e,t){const n=i.style,r=Qt(t);let s=!1;if(t&&!r){if(e)if(Qt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Qu(n,a,"")}else for(const o in e)t[o]==null&&Qu(n,o,"");for(const o in t)o==="display"&&(s=!0),Qu(n,o,t[o])}else if(r){if(e!==t){const o=n[qT];o&&(t+=";"+o),n.cssText=t,s=$T.test(t)}}else e&&i.removeAttribute("style");Bg in i&&(i[Bg]=s?n.display:"",i[YT]&&(n.display="none"))}const kg=/\s*!important$/;function Qu(i,e,t){if(Ze(t))t.forEach(n=>Qu(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=ZT(i,e);kg.test(t)?i.setProperty($s(n),t.replace(kg,""),"important"):i[n]=t}}const zg=["Webkit","Moz","ms"],Lh={};function ZT(i,e){const t=Lh[e];if(t)return t;let n=Zi(e);if(n!=="filter"&&n in i)return Lh[e]=n;n=th(n);for(let r=0;r<zg.length;r++){const s=zg[r]+n;if(s in i)return Lh[e]=s}return e}const Hg="http://www.w3.org/1999/xlink";function Vg(i,e,t,n,r,s=sE(e)){n&&e.startsWith("xlink:")?t==null?i.removeAttributeNS(Hg,e.slice(6,e.length)):i.setAttributeNS(Hg,e,t):t==null||s&&!Xv(t)?i.removeAttribute(e):i.setAttribute(e,s?"":ds(t)?String(t):t)}function Gg(i,e,t,n,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(i[e]=e==="innerHTML"?Ky(t):t);return}const s=i.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?i.getAttribute("value")||"":i.value,l=t==null?i.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in i))&&(i.value=l),t==null&&i.removeAttribute(e),i._value=t;return}let o=!1;if(t===""||t==null){const a=typeof i[e];a==="boolean"?t=Xv(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{i[e]=t}catch{}o&&i.removeAttribute(r||e)}function JT(i,e,t,n){i.addEventListener(e,t,n)}function QT(i,e,t,n){i.removeEventListener(e,t,n)}const Wg=Symbol("_vei");function ew(i,e,t,n,r=null){const s=i[Wg]||(i[Wg]={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=tw(e);if(n){const c=s[e]=rw(n,r);JT(i,a,c,l)}else o&&(QT(i,a,o,l),s[e]=void 0)}}const Xg=/(?:Once|Passive|Capture)$/;function tw(i){let e;if(Xg.test(i)){e={};let n;for(;n=i.match(Xg);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):$s(i.slice(2)),e]}let Ih=0;const nw=Promise.resolve(),iw=()=>Ih||(nw.then(()=>Ih=0),Ih=Date.now());function rw(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;Dr(sw(n,t.value),e,5,[n])};return t.value=i,t.attached=iw(),t}function sw(i,e){if(Ze(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const jg=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,ow=(i,e,t,n,r,s)=>{const o=r==="svg";e==="class"?jT(i,n,o):e==="style"?KT(i,t,n):Jf(e)?zm(e)||ew(i,e,t,n,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):aw(i,e,n,o))?(Gg(i,e,n),!i.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Vg(i,e,n,o,s,e!=="value")):i._isVueCE&&(/[A-Z]/.test(e)||!Qt(n))?Gg(i,Zi(e),n,s,e):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),Vg(i,e,n,o))};function aw(i,e,t,n){if(n)return!!(e==="innerHTML"||e==="textContent"||e in i&&jg(e)&&Je(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=i.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return jg(e)&&Qt(t)?!1:e in i}const lw={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},cw=(i,e)=>{const t=i._withKeys||(i._withKeys={}),n=e.join(".");return t[n]||(t[n]=r=>{if(!("key"in r))return;const s=$s(r.key);if(e.some(o=>o===s||lw[o]===s))return i(r)})},uw=zn({patchProp:ow},WT);let Yg;function fw(){return Yg||(Yg=dT(uw))}const hw=(...i)=>{const e=fw().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=pw(n);if(!r)return;const s=e._component;!Je(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,dw(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function dw(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function pw(i){return Qt(i)?document.querySelector(i):i}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Zy;const ch=i=>Zy=i,Jy=Symbol();function sp(i){return i&&typeof i=="object"&&Object.prototype.toString.call(i)==="[object Object]"&&typeof i.toJSON!="function"}var tc;(function(i){i.direct="direct",i.patchObject="patch object",i.patchFunction="patch function"})(tc||(tc={}));function mw(){const i=$v(!0),e=i.run(()=>si({}));let t=[],n=[];const r=Qm({install(s){ch(r),r._a=s,s.provide(Jy,r),s.config.globalProperties.$pinia=r,n.forEach(o=>t.push(o)),n=[]},use(s){return this._a?t.push(s):n.push(s),this},_p:t,_a:null,_e:i,_s:new Map,state:e});return r}const Qy=()=>{};function qg(i,e,t,n=Qy){i.push(e);const r=()=>{const s=i.indexOf(e);s>-1&&(i.splice(s,1),n())};return!t&&Xm()&&Kv(r),r}function Yo(i,...e){i.slice().forEach(t=>{t(...e)})}const _w=i=>i(),$g=Symbol(),Nh=Symbol();function op(i,e){i instanceof Map&&e instanceof Map?e.forEach((t,n)=>i.set(n,t)):i instanceof Set&&e instanceof Set&&e.forEach(i.add,i);for(const t in e){if(!e.hasOwnProperty(t))continue;const n=e[t],r=i[t];sp(r)&&sp(n)&&i.hasOwnProperty(t)&&!Jt(n)&&!ks(n)?i[t]=op(r,n):i[t]=n}return i}const gw=Symbol();function xw(i){return!sp(i)||!i.hasOwnProperty(gw)}const{assign:bs}=Object;function vw(i){return!!(Jt(i)&&i.effect)}function yw(i,e,t,n){const{state:r,actions:s,getters:o}=e,a=t.state.value[i];let l;function c(){a||(t.state.value[i]=r?r():{});const u=AE(t.state.value[i]);return bs(u,s,Object.keys(o||{}).reduce((f,h)=>(f[h]=Qm(ni(()=>{ch(t);const d=t._s.get(i);return o[h].call(d,d)})),f),{}))}return l=eS(i,c,e,t,n,!0),l}function eS(i,e,t={},n,r,s){let o;const a=bs({actions:{}},t),l={deep:!0};let c,u,f=[],h=[],d;const _=n.state.value[i];!s&&!_&&(n.state.value[i]={}),si({});let g;function m(C){let S;c=u=!1,typeof C=="function"?(C(n.state.value[i]),S={type:tc.patchFunction,storeId:i,events:d}):(op(n.state.value[i],C),S={type:tc.patchObject,payload:C,storeId:i,events:d});const M=g=Symbol();sh().then(()=>{g===M&&(c=!0)}),u=!0,Yo(f,S,n.state.value[i])}const p=s?function(){const{state:S}=t,M=S?S():{};this.$patch(N=>{bs(N,M)})}:Qy;function v(){o.stop(),f=[],h=[],n._s.delete(i)}const y=(C,S="")=>{if($g in C)return C[Nh]=S,C;const M=function(){ch(n);const N=Array.from(arguments),B=[],z=[];function q(j){B.push(j)}function Q(j){z.push(j)}Yo(h,{args:N,name:M[Nh],store:E,after:q,onError:Q});let W;try{W=C.apply(this&&this.$id===i?this:E,N)}catch(j){throw Yo(z,j),j}return W instanceof Promise?W.then(j=>(Yo(B,j),j)).catch(j=>(Yo(z,j),Promise.reject(j))):(Yo(B,W),W)};return M[$g]=!0,M[Nh]=S,M},x={_p:n,$id:i,$onAction:qg.bind(null,h),$patch:m,$reset:p,$subscribe(C,S={}){const M=qg(f,C,S.detached,()=>N()),N=o.run(()=>zs(()=>n.state.value[i],B=>{(S.flush==="sync"?u:c)&&C({storeId:i,type:tc.direct,events:d},B)},bs({},l,S)));return M},$dispose:v},E=Xc(x);n._s.set(i,E);const b=(n._a&&n._a.runWithContext||_w)(()=>n._e.run(()=>(o=$v()).run(()=>e({action:y}))));for(const C in b){const S=b[C];if(Jt(S)&&!vw(S)||ks(S))s||(_&&xw(S)&&(Jt(S)?S.value=_[C]:op(S,_[C])),n.state.value[i][C]=S);else if(typeof S=="function"){const M=y(S,C);b[C]=M,a.actions[C]=S}}return bs(E,b),bs(gt(E),b),Object.defineProperty(E,"$state",{get:()=>n.state.value[i],set:C=>{m(S=>{bs(S,C)})}}),n._p.forEach(C=>{bs(E,o.run(()=>C({store:E,app:n._a,pinia:n,options:a})))}),_&&s&&t.hydrate&&t.hydrate(E.$state,_),c=!0,u=!0,E}/*! #__NO_SIDE_EFFECTS__ */function Sw(i,e,t){let n,r;const s=typeof e=="function";n=i,r=s?t:e;function o(a,l){const c=i_();return a=a||(c?lr(Jy,null):null),a&&ch(a),a=Zy,a._s.has(n)||(s?eS(n,e,r,a):yw(n,r,a)),a._s.get(n)}return o.$id=n,o}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const pa=typeof document<"u";function tS(i){return typeof i=="object"||"displayName"in i||"props"in i||"__vccOpts"in i}function Mw(i){return i.__esModule||i[Symbol.toStringTag]==="Module"||i.default&&tS(i.default)}const bt=Object.assign;function Oh(i,e){const t={};for(const n in e){const r=e[n];t[n]=hr(r)?r.map(i):i(r)}return t}const nc=()=>{},hr=Array.isArray,nS=/#/g,bw=/&/g,Ew=/\//g,Tw=/=/g,ww=/\?/g,iS=/\+/g,Aw=/%5B/g,Rw=/%5D/g,rS=/%5E/g,Cw=/%60/g,sS=/%7B/g,Pw=/%7C/g,oS=/%7D/g,Dw=/%20/g;function u_(i){return encodeURI(""+i).replace(Pw,"|").replace(Aw,"[").replace(Rw,"]")}function Lw(i){return u_(i).replace(sS,"{").replace(oS,"}").replace(rS,"^")}function ap(i){return u_(i).replace(iS,"%2B").replace(Dw,"+").replace(nS,"%23").replace(bw,"%26").replace(Cw,"`").replace(sS,"{").replace(oS,"}").replace(rS,"^")}function Iw(i){return ap(i).replace(Tw,"%3D")}function Nw(i){return u_(i).replace(nS,"%23").replace(ww,"%3F")}function Ow(i){return i==null?"":Nw(i).replace(Ew,"%2F")}function Rc(i){try{return decodeURIComponent(""+i)}catch{}return""+i}const Uw=/\/$/,Fw=i=>i.replace(Uw,"");function Uh(i,e,t="/"){let n,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(n=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=i(s)),a>-1&&(n=n||e.slice(0,a),o=e.slice(a,e.length)),n=Hw(n??e,t),{fullPath:n+(s&&"?")+s+o,path:n,query:r,hash:Rc(o)}}function Bw(i,e){const t=e.query?i(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Kg(i,e){return!e||!i.toLowerCase().startsWith(e.toLowerCase())?i:i.slice(e.length)||"/"}function kw(i,e,t){const n=e.matched.length-1,r=t.matched.length-1;return n>-1&&n===r&&$a(e.matched[n],t.matched[r])&&aS(e.params,t.params)&&i(e.query)===i(t.query)&&e.hash===t.hash}function $a(i,e){return(i.aliasOf||i)===(e.aliasOf||e)}function aS(i,e){if(Object.keys(i).length!==Object.keys(e).length)return!1;for(const t in i)if(!zw(i[t],e[t]))return!1;return!0}function zw(i,e){return hr(i)?Zg(i,e):hr(e)?Zg(e,i):i===e}function Zg(i,e){return hr(e)?i.length===e.length&&i.every((t,n)=>t===e[n]):i.length===1&&i[0]===e}function Hw(i,e){if(i.startsWith("/"))return i;if(!i)return e;const t=e.split("/"),n=i.split("/"),r=n[n.length-1];(r===".."||r===".")&&n.push("");let s=t.length-1,o,a;for(o=0;o<n.length;o++)if(a=n[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+n.slice(o).join("/")}const ms={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Cc;(function(i){i.pop="pop",i.push="push"})(Cc||(Cc={}));var ic;(function(i){i.back="back",i.forward="forward",i.unknown=""})(ic||(ic={}));function Vw(i){if(!i)if(pa){const e=document.querySelector("base");i=e&&e.getAttribute("href")||"/",i=i.replace(/^\w+:\/\/[^\/]+/,"")}else i="/";return i[0]!=="/"&&i[0]!=="#"&&(i="/"+i),Fw(i)}const Gw=/^[^#]+#/;function Ww(i,e){return i.replace(Gw,"#")+e}function Xw(i,e){const t=document.documentElement.getBoundingClientRect(),n=i.getBoundingClientRect();return{behavior:e.behavior,left:n.left-t.left-(e.left||0),top:n.top-t.top-(e.top||0)}}const uh=()=>({left:window.scrollX,top:window.scrollY});function jw(i){let e;if("el"in i){const t=i.el,n=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?n?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=Xw(r,i)}else e=i;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Jg(i,e){return(history.state?history.state.position-e:-1)+i}const lp=new Map;function Yw(i,e){lp.set(i,e)}function qw(i){const e=lp.get(i);return lp.delete(i),e}let $w=()=>location.protocol+"//"+location.host;function lS(i,e){const{pathname:t,search:n,hash:r}=e,s=i.indexOf("#");if(s>-1){let a=r.includes(i.slice(s))?i.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Kg(l,"")}return Kg(t,i)+n+r}function Kw(i,e,t,n){let r=[],s=[],o=null;const a=({state:h})=>{const d=lS(i,location),_=t.value,g=e.value;let m=0;if(h){if(t.value=d,e.value=h,o&&o===_){o=null;return}m=g?h.position-g.position:0}else n(d);r.forEach(p=>{p(t.value,_,{delta:m,type:Cc.pop,direction:m?m>0?ic.forward:ic.back:ic.unknown})})};function l(){o=t.value}function c(h){r.push(h);const d=()=>{const _=r.indexOf(h);_>-1&&r.splice(_,1)};return s.push(d),d}function u(){const{history:h}=window;h.state&&h.replaceState(bt({},h.state,{scroll:uh()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Qg(i,e,t,n=!1,r=!1){return{back:i,current:e,forward:t,replaced:n,position:window.history.length,scroll:r?uh():null}}function Zw(i){const{history:e,location:t}=window,n={value:lS(i,t)},r={value:e.state};r.value||s(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=i.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?i:i.slice(f))+l:$w()+i+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(d){console.error(d),t[u?"replace":"assign"](h)}}function o(l,c){const u=bt({},e.state,Qg(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),n.value=l}function a(l,c){const u=bt({},r.value,e.state,{forward:l,scroll:uh()});s(u.current,u,!0);const f=bt({},Qg(n.value,l,null),{position:u.position+1},c);s(l,f,!1),n.value=l}return{location:n,state:r,push:a,replace:o}}function Jw(i){i=Vw(i);const e=Zw(i),t=Kw(i,e.state,e.location,e.replace);function n(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=bt({location:"",base:i,go:n,createHref:Ww.bind(null,i)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Qw(i){return typeof i=="string"||i&&typeof i=="object"}function cS(i){return typeof i=="string"||typeof i=="symbol"}const uS=Symbol("");var e0;(function(i){i[i.aborted=4]="aborted",i[i.cancelled=8]="cancelled",i[i.duplicated=16]="duplicated"})(e0||(e0={}));function Ka(i,e){return bt(new Error,{type:i,[uS]:!0},e)}function kr(i,e){return i instanceof Error&&uS in i&&(e==null||!!(i.type&e))}const t0="[^/]+?",e1={sensitive:!1,strict:!1,start:!0,end:!0},t1=/[.+*?^${}()[\]/\\]/g;function n1(i,e){const t=bt({},e1,e),n=[];let r=t.start?"^":"";const s=[];for(const c of i){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(t1,"\\$&"),d+=40;else if(h.type===1){const{value:_,repeatable:g,optional:m,regexp:p}=h;s.push({name:_,repeatable:g,optional:m});const v=p||t0;if(v!==t0){d+=10;try{new RegExp(`(${v})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${_}" (${v}): `+x.message)}}let y=g?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;f||(y=m&&c.length<2?`(?:/${y})`:"/"+y),m&&(y+="?"),r+=y,d+=20,m&&(d+=-8),g&&(d+=-20),v===".*"&&(d+=-50)}u.push(d)}n.push(u)}if(t.strict&&t.end){const c=n.length-1;n[c][n[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",_=s[h-1];f[_.name]=d&&_.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of i){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:_,repeatable:g,optional:m}=d,p=_ in c?c[_]:"";if(hr(p)&&!g)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const v=hr(p)?p.join("/"):p;if(!v)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=v}}return u||"/"}return{re:o,score:n,keys:s,parse:a,stringify:l}}function i1(i,e){let t=0;for(;t<i.length&&t<e.length;){const n=e[t]-i[t];if(n)return n;t++}return i.length<e.length?i.length===1&&i[0]===80?-1:1:i.length>e.length?e.length===1&&e[0]===80?1:-1:0}function fS(i,e){let t=0;const n=i.score,r=e.score;for(;t<n.length&&t<r.length;){const s=i1(n[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-n.length)===1){if(n0(n))return 1;if(n0(r))return-1}return r.length-n.length}function n0(i){const e=i[i.length-1];return i.length>0&&e[e.length-1]<0}const r1={type:0,value:""},s1=/[a-zA-Z0-9_]/;function o1(i){if(!i)return[[]];if(i==="/")return[[r1]];if(!i.startsWith("/"))throw new Error(`Invalid path "${i}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,n=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<i.length;){if(l=i[a++],l==="\\"&&t!==2){n=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=n;break;case 1:l==="("?t=2:s1.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function a1(i,e,t){const n=n1(o1(i.path),t),r=bt(n,{record:i,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function l1(i,e){const t=[],n=new Map;e=o0({strict:!1,end:!0,sensitive:!1},e);function r(f){return n.get(f)}function s(f,h,d){const _=!d,g=r0(f);g.aliasOf=d&&d.record;const m=o0(e,f),p=[g];if("alias"in f){const x=typeof f.alias=="string"?[f.alias]:f.alias;for(const E of x)p.push(r0(bt({},g,{components:d?d.record.components:g.components,path:E,aliasOf:d?d.record:g})))}let v,y;for(const x of p){const{path:E}=x;if(h&&E[0]!=="/"){const A=h.record.path,b=A[A.length-1]==="/"?"":"/";x.path=h.record.path+(E&&b+E)}if(v=a1(x,h,m),d?d.alias.push(v):(y=y||v,y!==v&&y.alias.push(v),_&&f.name&&!s0(v)&&o(f.name)),hS(v)&&l(v),g.children){const A=g.children;for(let b=0;b<A.length;b++)s(A[b],v,d&&d.children[b])}d=d||v}return y?()=>{o(y)}:nc}function o(f){if(cS(f)){const h=n.get(f);h&&(n.delete(f),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(f);h>-1&&(t.splice(h,1),f.record.name&&n.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function l(f){const h=f1(f,t);t.splice(h,0,f),f.record.name&&!s0(f)&&n.set(f.record.name,f)}function c(f,h){let d,_={},g,m;if("name"in f&&f.name){if(d=n.get(f.name),!d)throw Ka(1,{location:f});m=d.record.name,_=bt(i0(h.params,d.keys.filter(y=>!y.optional).concat(d.parent?d.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),f.params&&i0(f.params,d.keys.map(y=>y.name))),g=d.stringify(_)}else if(f.path!=null)g=f.path,d=t.find(y=>y.re.test(g)),d&&(_=d.parse(g),m=d.record.name);else{if(d=h.name?n.get(h.name):t.find(y=>y.re.test(h.path)),!d)throw Ka(1,{location:f,currentLocation:h});m=d.record.name,_=bt({},h.params,f.params),g=d.stringify(_)}const p=[];let v=d;for(;v;)p.unshift(v.record),v=v.parent;return{name:m,path:g,params:_,matched:p,meta:u1(p)}}i.forEach(f=>s(f));function u(){t.length=0,n.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function i0(i,e){const t={};for(const n of e)n in i&&(t[n]=i[n]);return t}function r0(i){const e={path:i.path,redirect:i.redirect,name:i.name,meta:i.meta||{},aliasOf:i.aliasOf,beforeEnter:i.beforeEnter,props:c1(i),children:i.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in i?i.components||null:i.component&&{default:i.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function c1(i){const e={},t=i.props||!1;if("component"in i)e.default=t;else for(const n in i.components)e[n]=typeof t=="object"?t[n]:t;return e}function s0(i){for(;i;){if(i.record.aliasOf)return!0;i=i.parent}return!1}function u1(i){return i.reduce((e,t)=>bt(e,t.meta),{})}function o0(i,e){const t={};for(const n in i)t[n]=n in e?e[n]:i[n];return t}function f1(i,e){let t=0,n=e.length;for(;t!==n;){const s=t+n>>1;fS(i,e[s])<0?n=s:t=s+1}const r=h1(i);return r&&(n=e.lastIndexOf(r,n-1)),n}function h1(i){let e=i;for(;e=e.parent;)if(hS(e)&&fS(i,e)===0)return e}function hS({record:i}){return!!(i.name||i.components&&Object.keys(i.components).length||i.redirect)}function d1(i){const e={};if(i===""||i==="?")return e;const n=(i[0]==="?"?i.slice(1):i).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(iS," "),o=s.indexOf("="),a=Rc(o<0?s:s.slice(0,o)),l=o<0?null:Rc(s.slice(o+1));if(a in e){let c=e[a];hr(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function a0(i){let e="";for(let t in i){const n=i[t];if(t=Iw(t),n==null){n!==void 0&&(e+=(e.length?"&":"")+t);continue}(hr(n)?n.map(s=>s&&ap(s)):[n&&ap(n)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function p1(i){const e={};for(const t in i){const n=i[t];n!==void 0&&(e[t]=hr(n)?n.map(r=>r==null?null:""+r):n==null?n:""+n)}return e}const m1=Symbol(""),l0=Symbol(""),f_=Symbol(""),dS=Symbol(""),cp=Symbol("");function El(){let i=[];function e(n){return i.push(n),()=>{const r=i.indexOf(n);r>-1&&i.splice(r,1)}}function t(){i=[]}return{add:e,list:()=>i.slice(),reset:t}}function As(i,e,t,n,r,s=o=>o()){const o=n&&(n.enterCallbacks[r]=n.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(Ka(4,{from:t,to:e})):h instanceof Error?l(h):Qw(h)?l(Ka(2,{from:e,to:h})):(o&&n.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},u=s(()=>i.call(n&&n.instances[r],e,t,c));let f=Promise.resolve(u);i.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function Fh(i,e,t,n,r=s=>s()){const s=[];for(const o of i)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(tS(l)){const u=(l.__vccOpts||l)[e];u&&s.push(As(u,t,n,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=Mw(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const d=(f.__vccOpts||f)[e];return d&&As(d,t,n,o,a,r)()}))}}return s}function c0(i){const e=lr(f_),t=lr(dS),n=ni(()=>{const l=Ft(i.to);return e.resolve(l)}),r=ni(()=>{const{matched:l}=n.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex($a.bind(null,u));if(h>-1)return h;const d=u0(l[c-2]);return c>1&&u0(u)===d&&f[f.length-1].path!==d?f.findIndex($a.bind(null,l[c-2])):h}),s=ni(()=>r.value>-1&&y1(t.params,n.value.params)),o=ni(()=>r.value>-1&&r.value===t.matched.length-1&&aS(t.params,n.value.params));function a(l={}){if(v1(l)){const c=e[Ft(i.replace)?"replace":"push"](Ft(i.to)).catch(nc);return i.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:n,href:ni(()=>n.value.href),isActive:s,isExactActive:o,navigate:a}}function _1(i){return i.length===1?i[0]:i}const g1=Ui({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:c0,setup(i,{slots:e}){const t=Xc(c0(i)),{options:n}=lr(f_),r=ni(()=>({[f0(i.activeClass,n.linkActiveClass,"router-link-active")]:t.isActive,[f0(i.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&_1(e.default(t));return i.custom?s:$y("a",{"aria-current":t.isExactActive?i.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),x1=g1;function v1(i){if(!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)&&!i.defaultPrevented&&!(i.button!==void 0&&i.button!==0)){if(i.currentTarget&&i.currentTarget.getAttribute){const e=i.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return i.preventDefault&&i.preventDefault(),!0}}function y1(i,e){for(const t in e){const n=e[t],r=i[t];if(typeof n=="string"){if(n!==r)return!1}else if(!hr(r)||r.length!==n.length||n.some((s,o)=>s!==r[o]))return!1}return!0}function u0(i){return i?i.aliasOf?i.aliasOf.path:i.path:""}const f0=(i,e,t)=>i??e??t,S1=Ui({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(i,{attrs:e,slots:t}){const n=lr(cp),r=ni(()=>i.route||n.value),s=lr(l0,0),o=ni(()=>{let c=Ft(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=ni(()=>r.value.matched[o.value]);Ku(l0,ni(()=>o.value+1)),Ku(m1,a),Ku(cp,r);const l=si();return zs(()=>[l.value,a.value,i.name],([c,u,f],[h,d,_])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!$a(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=r.value,u=i.name,f=a.value,h=f&&f.components[u];if(!h)return h0(t.default,{Component:h,route:c});const d=f.props[u],_=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=$y(h,bt({},_,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return h0(t.default,{Component:m,route:c})||m}}});function h0(i,e){if(!i)return null;const t=i(e);return t.length===1?t[0]:t}const pS=S1;function M1(i){const e=l1(i.routes,i),t=i.parseQuery||d1,n=i.stringifyQuery||a0,r=i.history,s=El(),o=El(),a=El(),l=dy(ms);let c=ms;pa&&i.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Oh.bind(null,k=>""+k),f=Oh.bind(null,Ow),h=Oh.bind(null,Rc);function d(k,oe){let le,ae;return cS(k)?(le=e.getRecordMatcher(k),ae=oe):ae=k,e.addRoute(ae,le)}function _(k){const oe=e.getRecordMatcher(k);oe&&e.removeRoute(oe)}function g(){return e.getRoutes().map(k=>k.record)}function m(k){return!!e.getRecordMatcher(k)}function p(k,oe){if(oe=bt({},oe||l.value),typeof k=="string"){const w=Uh(t,k,oe.path),re=e.resolve({path:w.path},oe),J=r.createHref(w.fullPath);return bt(w,re,{params:h(re.params),hash:Rc(w.hash),redirectedFrom:void 0,href:J})}let le;if(k.path!=null)le=bt({},k,{path:Uh(t,k.path,oe.path).path});else{const w=bt({},k.params);for(const re in w)w[re]==null&&delete w[re];le=bt({},k,{params:f(w)}),oe.params=f(oe.params)}const ae=e.resolve(le,oe),Le=k.hash||"";ae.params=u(h(ae.params));const I=Bw(n,bt({},k,{hash:Lw(Le),path:ae.path})),D=r.createHref(I);return bt({fullPath:I,hash:Le,query:n===a0?p1(k.query):k.query||{}},ae,{redirectedFrom:void 0,href:D})}function v(k){return typeof k=="string"?Uh(t,k,l.value.path):bt({},k)}function y(k,oe){if(c!==k)return Ka(8,{from:oe,to:k})}function x(k){return b(k)}function E(k){return x(bt(v(k),{replace:!0}))}function A(k){const oe=k.matched[k.matched.length-1];if(oe&&oe.redirect){const{redirect:le}=oe;let ae=typeof le=="function"?le(k):le;return typeof ae=="string"&&(ae=ae.includes("?")||ae.includes("#")?ae=v(ae):{path:ae},ae.params={}),bt({query:k.query,hash:k.hash,params:ae.path!=null?{}:k.params},ae)}}function b(k,oe){const le=c=p(k),ae=l.value,Le=k.state,I=k.force,D=k.replace===!0,w=A(le);if(w)return b(bt(v(w),{state:typeof w=="object"?bt({},Le,w.state):Le,force:I,replace:D}),oe||le);const re=le;re.redirectedFrom=oe;let J;return!I&&kw(n,ae,le)&&(J=Ka(16,{to:re,from:ae}),ge(ae,ae,!0,!1)),(J?Promise.resolve(J):M(re,ae)).catch(L=>kr(L)?kr(L,2)?L:O(L):V(L,re,ae)).then(L=>{if(L){if(kr(L,2))return b(bt({replace:D},v(L.to),{state:typeof L.to=="object"?bt({},Le,L.to.state):Le,force:I}),oe||re)}else L=B(re,ae,!0,D,Le);return N(re,ae,L),L})}function C(k,oe){const le=y(k,oe);return le?Promise.reject(le):Promise.resolve()}function S(k){const oe=te.values().next().value;return oe&&typeof oe.runWithContext=="function"?oe.runWithContext(k):k()}function M(k,oe){let le;const[ae,Le,I]=b1(k,oe);le=Fh(ae.reverse(),"beforeRouteLeave",k,oe);for(const w of ae)w.leaveGuards.forEach(re=>{le.push(As(re,k,oe))});const D=C.bind(null,k,oe);return le.push(D),ye(le).then(()=>{le=[];for(const w of s.list())le.push(As(w,k,oe));return le.push(D),ye(le)}).then(()=>{le=Fh(Le,"beforeRouteUpdate",k,oe);for(const w of Le)w.updateGuards.forEach(re=>{le.push(As(re,k,oe))});return le.push(D),ye(le)}).then(()=>{le=[];for(const w of I)if(w.beforeEnter)if(hr(w.beforeEnter))for(const re of w.beforeEnter)le.push(As(re,k,oe));else le.push(As(w.beforeEnter,k,oe));return le.push(D),ye(le)}).then(()=>(k.matched.forEach(w=>w.enterCallbacks={}),le=Fh(I,"beforeRouteEnter",k,oe,S),le.push(D),ye(le))).then(()=>{le=[];for(const w of o.list())le.push(As(w,k,oe));return le.push(D),ye(le)}).catch(w=>kr(w,8)?w:Promise.reject(w))}function N(k,oe,le){a.list().forEach(ae=>S(()=>ae(k,oe,le)))}function B(k,oe,le,ae,Le){const I=y(k,oe);if(I)return I;const D=oe===ms,w=pa?history.state:{};le&&(ae||D?r.replace(k.fullPath,bt({scroll:D&&w&&w.scroll},Le)):r.push(k.fullPath,Le)),l.value=k,ge(k,oe,le,D),O()}let z;function q(){z||(z=r.listen((k,oe,le)=>{if(!de.listening)return;const ae=p(k),Le=A(ae);if(Le){b(bt(Le,{replace:!0,force:!0}),ae).catch(nc);return}c=ae;const I=l.value;pa&&Yw(Jg(I.fullPath,le.delta),uh()),M(ae,I).catch(D=>kr(D,12)?D:kr(D,2)?(b(bt(v(D.to),{force:!0}),ae).then(w=>{kr(w,20)&&!le.delta&&le.type===Cc.pop&&r.go(-1,!1)}).catch(nc),Promise.reject()):(le.delta&&r.go(-le.delta,!1),V(D,ae,I))).then(D=>{D=D||B(ae,I,!1),D&&(le.delta&&!kr(D,8)?r.go(-le.delta,!1):le.type===Cc.pop&&kr(D,20)&&r.go(-1,!1)),N(ae,I,D)}).catch(nc)}))}let Q=El(),W=El(),j;function V(k,oe,le){O(k);const ae=W.list();return ae.length?ae.forEach(Le=>Le(k,oe,le)):console.error(k),Promise.reject(k)}function he(){return j&&l.value!==ms?Promise.resolve():new Promise((k,oe)=>{Q.add([k,oe])})}function O(k){return j||(j=!k,q(),Q.list().forEach(([oe,le])=>k?le(k):oe()),Q.reset()),k}function ge(k,oe,le,ae){const{scrollBehavior:Le}=i;if(!pa||!Le)return Promise.resolve();const I=!le&&qw(Jg(k.fullPath,0))||(ae||!le)&&history.state&&history.state.scroll||null;return sh().then(()=>Le(k,oe,I)).then(D=>D&&jw(D)).catch(D=>V(D,k,oe))}const Ce=k=>r.go(k);let ze;const te=new Set,de={currentRoute:l,listening:!0,addRoute:d,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:g,resolve:p,options:i,push:x,replace:E,go:Ce,back:()=>Ce(-1),forward:()=>Ce(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:W.add,isReady:he,install(k){const oe=this;k.component("RouterLink",x1),k.component("RouterView",pS),k.config.globalProperties.$router=oe,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>Ft(l)}),pa&&!ze&&l.value===ms&&(ze=!0,x(r.location).catch(Le=>{}));const le={};for(const Le in ms)Object.defineProperty(le,Le,{get:()=>l.value[Le],enumerable:!0});k.provide(f_,oe),k.provide(dS,fy(le)),k.provide(cp,l);const ae=k.unmount;te.add(k),k.unmount=function(){te.delete(k),te.size<1&&(c=ms,z&&z(),z=null,l.value=ms,ze=!1,j=!1),ae()}}};function ye(k){return k.reduce((oe,le)=>oe.then(()=>S(le)),Promise.resolve())}return de}function b1(i,e){const t=[],n=[],r=[],s=Math.max(e.matched.length,i.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(i.matched.find(c=>$a(c,a))?n.push(a):t.push(a));const l=i.matched[o];l&&(e.matched.find(c=>$a(c,l))||r.push(l))}return[t,n,r]}const $c=(i,e)=>{const t=i.__vccOpts||i;for(const[n,r]of e)t[n]=r;return t},E1={};function T1(i,e){return An(),cr("div",null,e[0]||(e[0]=[DT('<svg width="245" height="327" viewBox="0 0 245 327" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M124.649 288.937C35.0401 224.32 14.7804 99.2946 79.3978 9.68556C144.015 -79.9235 269.04 -100.183 358.649 -35.5658C448.258 29.0516 468.518 154.077 403.901 243.686C339.283 333.295 214.258 353.555 124.649 288.937Z" fill="url(#paint0_linear_4980_800)"></path><path d="M92.75 234.997C-6.70156 163.282 -29.1866 24.5246 42.5283 -74.927C114.243 -174.379 253.001 -196.864 352.453 -125.149C451.904 -53.4338 474.389 85.324 402.674 184.776C330.959 284.227 192.202 306.712 92.75 234.997Z" fill="#D1D1C7"></path><defs><linearGradient id="paint0_linear_4980_800" x1="424.09" y1="215.688" x2="35.1898" y2="-64.7502" gradientUnits="userSpaceOnUse"><stop stop-color="#AFAF9D"></stop><stop offset="1" stop-color="#AFAF9D" stop-opacity="0"></stop></linearGradient></defs></svg>',1)]))}const w1=$c(E1,[["render",T1]]);function qr(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function mS(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ii={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Za={duration:.5,overwrite:!1,delay:0},h_,Cn,zt,Rr=1e8,Bn=1/Rr,up=Math.PI*2,A1=up/4,R1=0,_S=Math.sqrt,C1=Math.cos,P1=Math.sin,Mn=function(e){return typeof e=="string"},Yt=function(e){return typeof e=="function"},cs=function(e){return typeof e=="number"},d_=function(e){return typeof e>"u"},Lr=function(e){return typeof e=="object"},di=function(e){return e!==!1},p_=function(){return typeof window<"u"},iu=function(e){return Yt(e)||Mn(e)},gS=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},kn=Array.isArray,fp=/(?:-?\.?\d|\.)+/gi,xS=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ya=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Bh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,vS=/[+-]=-?[.\d]+/,yS=/[^,'"\[\]\s]+/gi,D1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Vt,vr,hp,m_,Ni={},Af={},SS,MS=function(e){return(Af=Ja(e,Ni))&&xi},__=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Pc=function(e,t){return!t&&console.warn(e)},bS=function(e,t){return e&&(Ni[e]=t)&&Af&&(Af[e]=t)||Ni},Dc=function(){return 0},L1={suppressEvents:!0,isStart:!0,kill:!1},ef={suppressEvents:!0,kill:!1},I1={suppressEvents:!0},g_={},Hs=[],dp={},ES,wi={},kh={},d0=30,tf=[],x_="",v_=function(e){var t=e[0],n,r;if(Lr(t)||Yt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=tf.length;r--&&!tf[r].targetTest(t););n=tf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new qS(e[r],n)))||e.splice(r,1);return e},wo=function(e){return e._gsap||v_(ji(e))[0]._gsap},TS=function(e,t,n){return(n=e[t])&&Yt(n)?e[t]():d_(n)&&e.getAttribute&&e.getAttribute(t)||n},pi=function(e,t){return(e=e.split(",")).forEach(t)||e},Kt=function(e){return Math.round(e*1e5)/1e5||0},sn=function(e){return Math.round(e*1e7)/1e7||0},La=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},N1=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Rf=function(){var e=Hs.length,t=Hs.slice(0),n,r;for(dp={},Hs.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},wS=function(e,t,n,r){Hs.length&&!Cn&&Rf(),e.render(t,n,Cn&&t<0&&(e._initted||e._startAt)),Hs.length&&!Cn&&Rf()},AS=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(yS).length<2?t:Mn(e)?e.trim():e},RS=function(e){return e},Oi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},O1=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},Ja=function(e,t){for(var n in t)e[n]=t[n];return e},p0=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Lr(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Cf=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},rc=function(e){var t=e.parent||Vt,n=e.keyframes?O1(kn(e.keyframes)):Oi;if(di(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},U1=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},CS=function(e,t,n,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},fh=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},js=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ao=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},F1=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},pp=function(e,t,n,r){return e._startAt&&(Cn?e._startAt.revert(ef):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},B1=function i(e){return!e||e._ts&&i(e.parent)},m0=function(e){return e._repeat?Qa(e._tTime,e=e.duration()+e._rDelay)*e:0},Qa=function(e,t){var n=Math.floor(e=sn(e/t));return e&&n===e?n-1:n},Pf=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},hh=function(e){return e._end=sn(e._start+(e._tDur/Math.abs(e._ts||e._rts||Bn)||0))},dh=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=sn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),hh(e),n._dirty||Ao(n,e)),e},PS=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Pf(e.rawTime(),t),(!t._dur||Kc(0,t.totalDuration(),n)-t._tTime>Bn)&&t.render(n,!0)),Ao(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},Mr=function(e,t,n,r){return t.parent&&js(t),t._start=sn((cs(n)?n:n||e!==Vt?Hi(e,n,t):e._time)+t._delay),t._end=sn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),CS(e,t,"_first","_last",e._sort?"_start":0),mp(t)||(e._recent=t),r||PS(e,t),e._ts<0&&dh(e,e._tTime),e},DS=function(e,t){return(Ni.ScrollTrigger||__("scrollTrigger",t))&&Ni.ScrollTrigger.create(t,e)},LS=function(e,t,n,r,s){if(S_(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Cn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ES!==Ri.frame)return Hs.push(e),e._lazy=[s,r],1},k1=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},mp=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},z1=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&k1(e)&&!(!e._initted&&mp(e))||(e._ts<0||e._dp._ts<0)&&!mp(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=Kc(0,e._tDur,t),u=Qa(l,a),e._yoyo&&u&1&&(o=1-o),u!==Qa(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Cn||r||e._zTime===Bn||!t&&e._zTime){if(!e._initted&&LS(e,t,r,n,l))return;for(f=e._zTime,e._zTime=t||(n?Bn:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&pp(e,t,n,!0),e._onUpdate&&!n&&Di(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Di(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&js(e,1),!n&&!Cn&&(Di(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},H1=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},el=function(e,t,n,r){var s=e._repeat,o=sn(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:sn(o*(s+1)+e._rDelay*s):o,a>0&&!r&&dh(e,e._tTime=e._tDur*a),e.parent&&hh(e),n||Ao(e.parent,e),e},_0=function(e){return e instanceof ii?Ao(e):el(e,e._dur)},V1={_start:0,endTime:Dc,totalDuration:Dc},Hi=function i(e,t,n){var r=e.labels,s=e._recent||V1,o=e.duration()>=Rr?s.endTime(!1):e._dur,a,l,c;return Mn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(kn(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},sc=function(e,t,n){var r=cs(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=di(l.vars.inherit)&&l.parent;o.immediateRender=di(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new rn(t[0],o,t[s+1])},Js=function(e,t){return e||e===0?t(e):t},Kc=function(e,t,n){return n<e?e:n>t?t:n},Un=function(e,t){return!Mn(e)||!(t=D1.exec(e))?"":t[1]},G1=function(e,t,n){return Js(n,function(r){return Kc(e,t,r)})},_p=[].slice,IS=function(e,t){return e&&Lr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Lr(e[0]))&&!e.nodeType&&e!==vr},W1=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return Mn(r)&&!t||IS(r,1)?(s=n).push.apply(s,ji(r)):n.push(r)})||n},ji=function(e,t,n){return zt&&!t&&zt.selector?zt.selector(e):Mn(e)&&!n&&(hp||!tl())?_p.call((t||m_).querySelectorAll(e),0):kn(e)?W1(e,n):IS(e)?_p.call(e,0):e?[e]:[]},gp=function(e){return e=ji(e)[0]||Pc("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ji(t,n.querySelectorAll?n:n===e?Pc("Invalid scope")||m_.createElement("div"):e)}},NS=function(e){return e.sort(function(){return .5-Math.random()})},OS=function(e){if(Yt(e))return e;var t=Lr(e)?e:{each:e},n=Ro(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,f=r;return Mn(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(h,d,_){var g=(_||t).length,m=o[g],p,v,y,x,E,A,b,C,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,Rr])[1],!S){for(b=-1e8;b<(b=_[S++].getBoundingClientRect().left)&&S<g;);S<g&&S--}for(m=o[g]=[],p=l?Math.min(S,g)*u-.5:r%S,v=S===Rr?0:l?g*f/S-.5:r/S|0,b=0,C=Rr,A=0;A<g;A++)y=A%S-p,x=v-(A/S|0),m[A]=E=c?Math.abs(c==="y"?x:y):_S(y*y+x*x),E>b&&(b=E),E<C&&(C=E);r==="random"&&NS(m),m.max=b-C,m.min=C,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(S>g?g-1:c?c==="y"?g/S:S:Math.max(S,g/S))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Un(t.amount||t.each)||0,n=n&&g<0?XS(n):n}return g=(m[h]-m.min)/m.max||0,sn(m.b+(n?n(g):g)*m.v)+m.u}},xp=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=sn(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(cs(n)?0:Un(n))}},US=function(e,t){var n=kn(e),r,s;return!n&&Lr(e)&&(r=n=e.radius||Rr,e.values?(e=ji(e.values),(s=!cs(e[0]))&&(r*=r)):e=xp(e.increment)),Js(t,n?Yt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Rr,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-a,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!r||c<=r?e[u]:o,s||u===o||cs(o)?u:u+Un(o)}:xp(e))},FS=function(e,t,n,r){return Js(kn(e)?!t:n===!0?!!(n=0):!r,function(){return kn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},X1=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},j1=function(e,t){return function(n){return e(parseFloat(n))+(t||Un(n))}},Y1=function(e,t,n){return kS(e,t,0,1,n)},BS=function(e,t,n){return Js(n,function(r){return e[~~t(r)]})},q1=function i(e,t,n){var r=t-e;return kn(e)?BS(e,i(0,e.length),t):Js(n,function(s){return(r+(s-e)%r)%r+e})},$1=function i(e,t,n){var r=t-e,s=r*2;return kn(e)?BS(e,i(0,e.length-1),t):Js(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Lc=function(e){for(var t=0,n="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?yS:fp),n+=e.substr(t,r-t)+FS(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},kS=function(e,t,n,r,s){var o=t-e,a=r-n;return Js(s,function(l){return n+((l-e)/o*a||0)})},K1=function i(e,t,n,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=Mn(e),a={},l,c,u,f,h;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(kn(e)&&!kn(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(i(e[c-1],e[c]));f--,s=function(_){_*=f;var g=Math.min(h,~~_);return u[g](_-g)},n=t}else r||(e=Ja(kn(e)?[]:{},e));if(!u){for(l in t)y_.call(a,e,l,"get",t[l]);s=function(_){return E_(_,a)||(o?e.p:e)}}}return Js(n,s)},g0=function(e,t,n){var r=e.labels,s=Rr,o,a,l;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Di=function(e,t,n){var r=e.vars,s=r[t],o=zt,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&Hs.length&&Rf(),a&&(zt=a),u=l?s.apply(c,l):s.call(c),zt=o,u},kl=function(e){return js(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Cn),e.progress()<1&&Di(e,"onInterrupt"),e},Sa,zS=[],HS=function(e){if(e)if(e=!e.name&&e.default||e,p_()||e.headless){var t=e.name,n=Yt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Dc,render:E_,add:y_,kill:hA,modifier:fA,rawVars:0},o={targetTest:0,get:0,getSetter:b_,aliases:{},register:0};if(tl(),e!==r){if(wi[t])return;Oi(r,Oi(Cf(e,s),o)),Ja(r.prototype,Ja(s,Cf(e,o))),wi[r.prop=t]=r,e.targetTest&&(tf.push(r),g_[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}bS(t,r),e.register&&e.register(xi,r,mi)}else zS.push(e)},Lt=255,zl={aqua:[0,Lt,Lt],lime:[0,Lt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Lt],navy:[0,0,128],white:[Lt,Lt,Lt],olive:[128,128,0],yellow:[Lt,Lt,0],orange:[Lt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Lt,0,0],pink:[Lt,192,203],cyan:[0,Lt,Lt],transparent:[Lt,Lt,Lt,0]},zh=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Lt+.5|0},VS=function(e,t,n){var r=e?cs(e)?[e>>16,e>>8&Lt,e&Lt]:0:zl.black,s,o,a,l,c,u,f,h,d,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),zl[e])r=zl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Lt,r&Lt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Lt,e&Lt]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(fp),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=zh(l+1/3,s,o),r[1]=zh(l,s,o),r[2]=zh(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(xS),n&&r.length<4&&(r[3]=1),r}else r=e.match(fp)||zl.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/Lt,o=r[1]/Lt,a=r[2]/Lt,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},GS=function(e){var t=[],n=[],r=-1;return e.split(Vs).forEach(function(s){var o=s.match(ya)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},x0=function(e,t,n){var r="",s=(e+r).match(Vs),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=VS(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=GS(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Vs,"1").split(ya),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Vs),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},Vs=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in zl)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),Z1=/hsl[a]?\(/,WS=function(e){var t=e.join(" "),n;if(Vs.lastIndex=0,Vs.test(t))return n=Z1.test(t),e[1]=x0(e[1],n),e[0]=x0(e[0],n,GS(e[1])),!0},Ic,Ri=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,f,h,d,_=function g(m){var p=i()-r,v=m===!0,y,x,E,A;if((p>e||p<0)&&(n+=p-t),r+=p,E=r-n,y=E-o,(y>0||v)&&(A=++f.frame,h=E-f.time*1e3,f.time=E=E/1e3,o+=y+(y>=s?4:s-y),x=1),v||(l=c(g)),x)for(d=0;d<a.length;d++)a[d](E,h,A,m)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){SS&&(!hp&&p_()&&(vr=hp=window,m_=vr.document||{},Ni.gsap=xi,(vr.gsapVersions||(vr.gsapVersions=[])).push(xi.version),MS(Af||vr.GreenSockGlobals||!vr.gsap&&vr||{}),zS.forEach(HS)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Ic=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ic=0,c=Dc},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,v){var y=p?function(x,E,A,b){m(x,E,A,b),f.remove(y)}:m;return f.remove(m),a[v?"unshift":"push"](y),tl(),y},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},f}(),tl=function(){return!Ic&&Ri.wake()},ht={},J1=/^[\d.\-M][\d.\-,\s]/,Q1=/["']/g,eA=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(Q1,"").trim():+c,r=l.substr(a+1).trim();return t},tA=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},nA=function(e){var t=(e+"").split("("),n=ht[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[eA(t[1])]:tA(e).split(",").map(AS)):ht._CE&&J1.test(e)?ht._CE("",e):n},XS=function(e){return function(t){return 1-e(1-t)}},jS=function i(e,t){for(var n=e._first,r;n;)n instanceof ii?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},Ro=function(e,t){return e&&(Yt(e)?e:ht[e]||nA(e))||t},Go=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return pi(e,function(a){ht[a]=Ni[a]=s,ht[o=a.toLowerCase()]=n;for(var l in s)ht[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ht[a+"."+l]=s[l]}),s},YS=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Hh=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/up*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*P1((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:YS(a);return s=up/s,l.config=function(c,u){return i(e,c,u)},l},Vh=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:YS(n);return r.config=function(s){return i(e,s)},r};pi("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Go(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ht.Linear.easeNone=ht.none=ht.Linear.easeIn;Go("Elastic",Hh("in"),Hh("out"),Hh());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};Go("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Go("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});Go("Circ",function(i){return-(_S(1-i*i)-1)});Go("Sine",function(i){return i===1?1:-C1(i*A1)+1});Go("Back",Vh("in"),Vh("out"),Vh());ht.SteppedEase=ht.steps=Ni.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-Bn;return function(a){return((r*Kc(0,o,a)|0)+s)*n}}};Za.ease=ht["quad.out"];pi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return x_+=i+","+i+"Params,"});var qS=function(e,t){this.id=R1++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:TS,this.set=t?t.getSetter:b_},Nc=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,el(this,+t.duration,1,1),this.data=t.data,zt&&(this._ctx=zt,zt.data.push(this)),Ic||Ri.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,el(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(tl(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(dh(this,n),!s._dp||s.parent||PS(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Mr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Bn||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),wS(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+m0(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+m0(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Qa(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Pf(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(Kc(-Math.abs(this._delay),this._tDur,s),r!==!1),hh(this),F1(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(tl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Bn&&(this._tTime-=Bn)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Mr(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(di(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Pf(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=I1);var r=Cn;return Cn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Cn=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,_0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,_0(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Hi(this,n),di(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,di(r)),this._dur||(this._zTime=-1e-8),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-Bn)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this;return new Promise(function(s){var o=Yt(n)?n:RS,a=function(){var c=r.then;r.then=null,Yt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){kl(this)},i}();Oi(Nc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var ii=function(i){mS(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=di(n.sortChildren),Vt&&Mr(n.parent||Vt,qr(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&DS(qr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return sc(0,arguments,this),this},t.from=function(r,s,o){return sc(1,arguments,this),this},t.fromTo=function(r,s,o,a){return sc(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,rc(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new rn(r,s,Hi(this,o),1),this},t.call=function(r,s,o){return Mr(this,rn.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new rn(r,o,Hi(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,rc(o).immediateRender=di(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,rc(a).immediateRender=di(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:sn(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,d,_,g,m,p,v,y,x,E,A,b;if(this!==Vt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),h=u,x=this._start,y=this._ts,p=!y,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=sn(u%m),u===l?(g=this._repeat,h=c):(E=sn(u/m),g=~~E,g&&g===E&&(h=c,g--),h>c&&(h=c)),E=Qa(this._tTime,m),!a&&this._tTime&&E!==g&&this._tTime-E*m-this._dur<=0&&(E=g),A&&g&1&&(h=c-h,b=1),g!==E&&!this._lock){var C=A&&E&1,S=C===(A&&g&1);if(g<E&&(C=!C),a=C?0:u%c?c:u,this._lock=1,this.render(a||(b?0:sn(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Di(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;jS(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=H1(this,sn(a),sn(h)),v&&(u-=h-(h=v._start))),this._tTime=u,this._time=h,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&h&&!s&&!g&&(Di(this,"onStart"),this._tTime!==u))return this;if(h>=a&&r>=0)for(d=this._first;d;){if(_=d._next,(d._act||h>=d._start)&&d._ts&&v!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!p){v=0,_&&(u+=this._zTime=-1e-8);break}}d=_}else{d=this._last;for(var M=r<0?r:h;d;){if(_=d._prev,(d._act||M<=d._end)&&d._ts&&v!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(M-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(M-d._start)*d._ts,s,o||Cn&&(d._initted||d._startAt)),h!==this._time||!this._ts&&!p){v=0,_&&(u+=this._zTime=M?-1e-8:Bn);break}}d=_}}if(v&&!s&&(this.pause(),v.render(h>=a?0:-1e-8)._zTime=h>=a?1:-1,this._ts))return this._start=x,hh(this),this.render(r,s,o);this._onUpdate&&!s&&Di(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&js(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(Di(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(cs(s)||(s=Hi(this,s,r)),!(r instanceof Nc)){if(kn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Mn(r))return this.addLabel(r,s);if(Yt(r))r=rn.delayedCall(0,r);else return this}return this!==r?Mr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-1e8);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof rn?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Mn(r)?this.removeLabel(r):Yt(r)?this.killTweensOf(r):(r.parent===this&&fh(this,r),r===this._recent&&(this._recent=this._last),Ao(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=sn(Ri.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Hi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=rn.delayedCall(0,s||Dc,o);return a.data="isPause",this._hasPause=1,Mr(this,a,Hi(this,r))},t.removePause=function(r){var s=this._first;for(r=Hi(this,r);s;)s._start===r&&s.data==="isPause"&&js(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Ds!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=ji(r),l=this._first,c=cs(s),u;l;)l instanceof rn?N1(l._targets,a)&&(c?(!Ds||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Hi(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,_=rn.to(o,Oi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Bn,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&el(_,m,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,f||[])}},s));return h?_.render(0):_},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Oi({startAt:{time:Hi(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),g0(this,Hi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),g0(this,Hi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Bn)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return Ao(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Ao(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Rr,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Mr(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;el(o,o===Vt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Vt._ts&&(wS(Vt,Pf(r,Vt)),ES=Ri.frame),Ri.frame>=d0){d0+=Ii.autoSleep||120;var s=Vt._first;if((!s||!s._ts)&&Ii.autoSleep&&Ri._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ri.sleep()}}},e}(Nc);Oi(ii.prototype,{_lock:0,_hasPause:0,_forcing:0});var iA=function(e,t,n,r,s,o,a){var l=new mi(this._pt,e,t,0,1,eM,null,s),c=0,u=0,f,h,d,_,g,m,p,v;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=Lc(r)),o&&(v=[n,r],o(v,e,t),n=v[0],r=v[1]),h=n.match(Bh)||[];f=Bh.exec(r);)_=f[0],g=r.substring(c,f.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?La(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},c=Bh.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(vS.test(r)||p)&&(l.e=0),this._pt=l,l},y_=function(e,t,n,r,s,o,a,l,c,u){Yt(r)&&(r=r(s||0,e,o));var f=e[t],h=n!=="get"?n:Yt(f)?c?e[t.indexOf("set")||!Yt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=Yt(f)?c?lA:JS:M_,_;if(Mn(r)&&(~r.indexOf("random(")&&(r=Lc(r)),r.charAt(1)==="="&&(_=La(h,r)+(Un(h)||0),(_||_===0)&&(r=_))),!u||h!==r||vp)return!isNaN(h*r)&&r!==""?(_=new mi(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?uA:QS,0,d),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!f&&!(t in e)&&__(t,r),iA.call(this,e,t,h,r,d,l||Ii.stringFilter,c))},rA=function(e,t,n,r,s){if(Yt(e)&&(e=oc(e,s,t,n,r)),!Lr(e)||e.style&&e.nodeType||kn(e)||gS(e))return Mn(e)?oc(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=oc(e[a],s,t,n,r);return o},$S=function(e,t,n,r,s,o){var a,l,c,u;if(wi[e]&&(a=new wi[e]).init(s,a.rawVars?t[e]:rA(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new mi(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Sa))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Ds,vp,S_=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,h=r.keyframes,d=r.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,v=p&&p.data==="nested"?p.vars.targets:m,y=e._overwrite==="auto"&&!h_,x=e.timeline,E,A,b,C,S,M,N,B,z,q,Q,W,j;if(x&&(!h||!s)&&(s="none"),e._ease=Ro(s,Za.ease),e._yEase=f?XS(Ro(f===!0?s:f,Za.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!x&&!!r.runBackwards,!x||h&&!r.stagger){if(B=m[0]?wo(m[0]).harness:0,W=B&&r[B.prop],E=Cf(r,g_),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!d?g.render(-1,!0):g.revert(u&&_?ef:L1),g._lazy=0),o){if(js(e._startAt=rn.set(m,Oi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&di(l),startAt:null,delay:0,onUpdate:c&&function(){return Di(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Cn||!a&&!d)&&e._startAt.revert(ef),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(a=!1),b=Oi({overwrite:!1,data:"isFromStart",lazy:a&&!g&&di(l),immediateRender:a,stagger:0,parent:p},E),W&&(b[B.prop]=W),js(e._startAt=rn.set(m,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Cn?e._startAt.revert(ef):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,Bn,Bn);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&di(l)||l&&!_,A=0;A<m.length;A++){if(S=m[A],N=S._gsap||v_(m)[A]._gsap,e._ptLookup[A]=q={},dp[N.id]&&Hs.length&&Rf(),Q=v===m?A:v.indexOf(S),B&&(z=new B).init(S,W||E,e,Q,v)!==!1&&(e._pt=C=new mi(e._pt,S,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(V){q[V]=C}),z.priority&&(M=1)),!B||W)for(b in E)wi[b]&&(z=$S(b,E,e,Q,S,v))?z.priority&&(M=1):q[b]=C=y_.call(e,S,b,"get",E[b],Q,v,0,r.stringFilter);e._op&&e._op[A]&&e.kill(S,e._op[A]),y&&e._pt&&(Ds=e,Vt.killTweensOf(S,q,e.globalTime(t)),j=!e.parent,Ds=0),e._pt&&l&&(dp[N.id]=1)}M&&tM(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!j,h&&t<=0&&x.render(Rr,!0,!0)},sA=function(e,t,n,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return vp=1,e.vars[t]="+=0",S_(e,a),vp=0,l?Pc(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=Kt(n)+Un(f.e)),f.b&&(f.b=u.s+Un(f.b))},oA=function(e,t){var n=e[0]?wo(e[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return t;s=Ja({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},aA=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(kn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},oc=function(e,t,n,r,s){return Yt(e)?e.call(t,n,r,s):Mn(e)&&~e.indexOf("random(")?Lc(e):e},KS=x_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",ZS={};pi(KS+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return ZS[i]=1});var rn=function(i){mS(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:rc(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,v=r.parent||Vt,y=(kn(n)||gS(n)?cs(n[0]):"length"in r)?[n]:ji(n),x,E,A,b,C,S,M,N;if(a._targets=y.length?v_(y):Pc("GSAP target "+n+" not found. https://gsap.com",!Ii.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||h||iu(c)||iu(u)){if(r=a.vars,x=a.timeline=new ii({data:"nested",defaults:g||{},targets:v&&v.data==="nested"?v.vars.targets:y}),x.kill(),x.parent=x._dp=qr(a),x._start=0,h||iu(c)||iu(u)){if(b=y.length,M=h&&OS(h),Lr(h))for(C in h)~KS.indexOf(C)&&(N||(N={}),N[C]=h[C]);for(E=0;E<b;E++)A=Cf(r,ZS),A.stagger=0,p&&(A.yoyoEase=p),N&&Ja(A,N),S=y[E],A.duration=+oc(c,qr(a),E,S,y),A.delay=(+oc(u,qr(a),E,S,y)||0)-a._delay,!h&&b===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),x.to(S,A,M?M(E,S,y):0),x._ease=ht.none;x.duration()?c=u=0:a.timeline=0}else if(_){rc(Oi(x.vars.defaults,{ease:"none"})),x._ease=Ro(_.ease||r.ease||"none");var B=0,z,q,Q;if(kn(_))_.forEach(function(W){return x.to(y,W,">")}),x.duration();else{A={};for(C in _)C==="ease"||C==="easeEach"||aA(C,_[C],A,_.easeEach);for(C in A)for(z=A[C].sort(function(W,j){return W.t-j.t}),B=0,E=0;E<z.length;E++)q=z[E],Q={ease:q.e,duration:(q.t-(E?z[E-1].t:0))/100*c},Q[C]=q.v,x.to(y,Q,B),B+=Q.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return d===!0&&!h_&&(Ds=qr(a),Vt.killTweensOf(y),Ds=0),Mr(v,qr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!_&&a._start===sn(v._time)&&di(f)&&B1(qr(a))&&v.data!=="nested")&&(a._tTime=-1e-8,a.render(Math.max(0,-u)||0)),m&&DS(qr(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-Bn&&!u?l:r<Bn?0:r,h,d,_,g,m,p,v,y,x;if(!c)z1(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,y=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,s,o);if(h=sn(f%g),f===l?(_=this._repeat,h=c):(m=sn(f/g),_=~~m,_&&_===m?(h=c,_--):h>c&&(h=c)),p=this._yoyo&&_&1,p&&(x=this._yEase,h=c-h),m=Qa(this._tTime,g),h===a&&!o&&this._initted&&_===m)return this._tTime=f,this;_!==m&&(y&&this._yEase&&jS(y,p),this.vars.repeatRefresh&&!p&&!this._lock&&h!==g&&this._initted&&(this._lock=o=1,this.render(sn(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(LS(this,u?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(x||this._ease)(h/c),this._from&&(this.ratio=v=1-v),h&&!a&&!s&&!_&&(Di(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(v,d.d),d=d._next;y&&y.render(r<0?r:y._dur*y._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&pp(this,r,s,o),Di(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Di(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&pp(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&js(this,1),!s&&!(u&&!a)&&(f||a||p)&&(Di(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Ic||Ri.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||S_(this,c),u=this._ease(c/this._dur),sA(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(dh(this,0),this.parent||CS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?kl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Cn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Ds&&Ds.vars.overwrite!==!0)._first||kl(this),this.parent&&o!==this.timeline.totalDuration()&&el(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?ji(r):a,c=this._ptLookup,u=this._pt,f,h,d,_,g,m,p;if((!s||s==="all")&&U1(a,l))return s==="all"&&(this._pt=0),kl(this);for(f=this._op=this._op||[],s!=="all"&&(Mn(s)&&(g={},pi(s,function(v){return g[v]=1}),s=g),s=oA(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){h=c[p],s==="all"?(f[p]=s,_=h,d={}):(d=f[p]=f[p]||{},_=s);for(g in _)m=h&&h[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&fh(this,m,"_pt"),delete h[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&kl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return sc(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return sc(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Vt.killTweensOf(r,s,o)},e}(Nc);Oi(rn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});pi("staggerTo,staggerFrom,staggerFromTo",function(i){rn[i]=function(){var e=new ii,t=_p.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var M_=function(e,t,n){return e[t]=n},JS=function(e,t,n){return e[t](n)},lA=function(e,t,n,r){return e[t](r.fp,n)},cA=function(e,t,n){return e.setAttribute(t,n)},b_=function(e,t){return Yt(e[t])?JS:d_(e[t])&&e.setAttribute?cA:M_},QS=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},uA=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},eM=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},E_=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},fA=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},hA=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?fh(this,t,"_pt"):t.dep||(n=1),t=r;return!n},dA=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},tM=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},mi=function(){function i(t,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||QS,this.d=l||this,this.set=c||M_,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=dA,this.m=n,this.mt=s,this.tween=r},i}();pi(x_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return g_[i]=1});Ni.TweenMax=Ni.TweenLite=rn;Ni.TimelineLite=Ni.TimelineMax=ii;Vt=new ii({sortChildren:!1,defaults:Za,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ii.stringFilter=WS;var Co=[],nf={},pA=[],v0=0,mA=0,Gh=function(e){return(nf[e]||pA).map(function(t){return t()})},yp=function(){var e=Date.now(),t=[];e-v0>2&&(Gh("matchMediaInit"),Co.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=vr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Gh("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),v0=e,Gh("matchMedia"))},nM=function(){function i(t,n){this.selector=n&&gp(n),this.data=[],this._r=[],this.isReverted=!1,this.id=mA++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){Yt(n)&&(s=r,r=n,n=Yt);var o=this,a=function(){var c=zt,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=gp(s)),zt=o,f=r.apply(o,arguments),Yt(f)&&o._r.push(f),zt=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===Yt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var r=zt;zt=null,n(this),zt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof rn&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof ii?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof rn)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Co.length;o--;)Co[o].id===this.id&&Co.splice(o,1)},e.revert=function(n){this.kill(n||{})},i}(),_A=function(){function i(t){this.contexts=[],this.scope=t,zt&&zt.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){Lr(n)||(n={matches:n});var o=new nM(0,s||this.scope),a=o.conditions={},l,c,u;zt&&!o.selector&&(o.selector=zt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=vr.matchMedia(n[c]),l&&(Co.indexOf(o)<0&&Co.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(yp):l.addEventListener("change",yp)));return u&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),Df={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return HS(r)})},timeline:function(e){return new ii(e)},getTweensOf:function(e,t){return Vt.getTweensOf(e,t)},getProperty:function(e,t,n,r){Mn(e)&&(e=ji(e)[0]);var s=wo(e||{}).get,o=n?RS:AS;return n==="native"&&(n=""),e&&(t?o((wi[t]&&wi[t].get||s)(e,t,n,r)):function(a,l,c){return o((wi[a]&&wi[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=ji(e),e.length>1){var r=e.map(function(u){return xi.quickSetter(u,t,n)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var o=wi[t],a=wo(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;Sa._pt=0,f.init(e,n?u+n:u,Sa,0,[e]),f.render(1,f),Sa._pt&&E_(1,Sa)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,s=xi.to(e,Oi((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Vt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ro(e.ease,Za.ease)),p0(Za,e||{})},config:function(e){return p0(Ii,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!wi[a]&&!Ni[a]&&Pc(t+" effect requires "+a+" plugin.")}),kh[t]=function(a,l,c){return n(ji(a),Oi(l||{},s),c)},o&&(ii.prototype[t]=function(a,l,c){return this.add(kh[t](a,Lr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ht[e]=Ro(t)},parseEase:function(e,t){return arguments.length?Ro(e,t):ht},getById:function(e){return Vt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new ii(e),r,s;for(n.smoothChildTiming=di(e.smoothChildTiming),Vt.remove(n),n._dp=0,n._time=n._tTime=Vt._time,r=Vt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof rn&&r.vars.onComplete===r._targets[0]))&&Mr(n,r,r._start-r._delay),r=s;return Mr(Vt,n,0),n},context:function(e,t){return e?new nM(e,t):zt},matchMedia:function(e){return new _A(e)},matchMediaRefresh:function(){return Co.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||yp()},addEventListener:function(e,t){var n=nf[e]||(nf[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=nf[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:q1,wrapYoyo:$1,distribute:OS,random:FS,snap:US,normalize:Y1,getUnit:Un,clamp:G1,splitColor:VS,toArray:ji,selector:gp,mapRange:kS,pipe:X1,unitize:j1,interpolate:K1,shuffle:NS},install:MS,effects:kh,ticker:Ri,updateRoot:ii.updateRoot,plugins:wi,globalTimeline:Vt,core:{PropTween:mi,globals:bS,Tween:rn,Timeline:ii,Animation:Nc,getCache:wo,_removeLinkedListItem:fh,reverting:function(){return Cn},context:function(e){return e&&zt&&(zt.data.push(e),e._ctx=zt),zt},suppressOverwrites:function(e){return h_=e}}};pi("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Df[i]=rn[i]});Ri.add(ii.updateRoot);Sa=Df.to({},{duration:0});var gA=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},xA=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=gA(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},Wh=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(Mn(s)&&(l={},pi(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}xA(a,s)}}}},xi=Df.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Cn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Wh("roundProps",xp),Wh("modifiers"),Wh("snap",US))||Df;rn.version=ii.version=xi.version="3.12.7";SS=1;p_()&&tl();ht.Power0;ht.Power1;ht.Power2;ht.Power3;ht.Power4;ht.Linear;ht.Quad;ht.Cubic;ht.Quart;ht.Quint;ht.Strong;ht.Elastic;ht.Back;ht.SteppedEase;ht.Bounce;ht.Sine;ht.Expo;ht.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var y0,Ls,Ia,T_,So,S0,w_,vA=function(){return typeof window<"u"},us={},mo=180/Math.PI,Na=Math.PI/180,qo=Math.atan2,M0=1e8,A_=/([A-Z])/g,yA=/(left|right|width|margin|padding|x)/i,SA=/[\s,\(]\S/,Er={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Sp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},MA=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},bA=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},EA=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},iM=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},rM=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},TA=function(e,t,n){return e.style[t]=n},wA=function(e,t,n){return e.style.setProperty(t,n)},AA=function(e,t,n){return e._gsap[t]=n},RA=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},CA=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},PA=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Gt="transform",_i=Gt+"Origin",DA=function i(e,t){var n=this,r=this.target,s=r.style,o=r._gsap;if(e in us&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Er[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Zr(r,a)}):this.tfm[e]=o.x?o[e]:Zr(r,e),e===_i&&(this.tfm.zOrigin=o.zOrigin);else return Er.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(Gt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(_i,t,"")),e=Gt}(s||t)&&this.props.push(e,t,s[e])},sM=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},LA=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(A_,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=w_(),(!s||!s.isStart)&&!n[Gt]&&(sM(n),r.zOrigin&&n[_i]&&(n[_i]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},oM=function(e,t){var n={target:e,props:[],revert:LA,save:DA};return e._gsap||xi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},aM,Mp=function(e,t){var n=Ls.createElementNS?Ls.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ls.createElement(e);return n&&n.style?n:Ls.createElement(e)},Cr=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(A_,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,nl(t)||t,1)||""},b0="O,Moz,ms,Ms,Webkit".split(","),nl=function(e,t,n){var r=t||So,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(b0[o]+e in s););return o<0?null:(o===3?"ms":o>=0?b0[o]:"")+e},bp=function(){vA()&&window.document&&(y0=window,Ls=y0.document,Ia=Ls.documentElement,So=Mp("div")||{style:{}},Mp("div"),Gt=nl(Gt),_i=Gt+"Origin",So.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",aM=!!nl("perspective"),w_=xi.core.reverting,T_=1)},E0=function(e){var t=e.ownerSVGElement,n=Mp("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),Ia.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),Ia.removeChild(n),s},T0=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},lM=function(e){var t,n;try{t=e.getBBox()}catch{t=E0(e),n=1}return t&&(t.width||t.height)||n||(t=E0(e)),t&&!t.width&&!t.x&&!t.y?{x:+T0(e,["x","cx","x1"])||0,y:+T0(e,["y","cy","y1"])||0,width:0,height:0}:t},cM=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&lM(e))},Fo=function(e,t){if(t){var n=e.style,r;t in us&&t!==_i&&(t=Gt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(A_,"-$1").toLowerCase())):n.removeAttribute(t)}},Is=function(e,t,n,r,s,o){var a=new mi(e._pt,t,n,0,1,o?rM:iM);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},w0={deg:1,rad:1,turn:1},IA={grid:1,flex:1},Ys=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=So.style,l=yA.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",_,g,m,p;if(r===o||!s||w0[r]||w0[o])return s;if(o!=="px"&&!h&&(s=i(e,t,n,"px")),p=e.getCTM&&cM(e),(d||o==="%")&&(us[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[u],Kt(d?s/_*f:s/100*_);if(a[l?"width":"height"]=f+(h?o:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Ls||!g.appendChild)&&(g=Ls.body),m=g._gsap,m&&d&&m.width&&l&&m.time===Ri.time&&!m.uncache)return Kt(s/m.width*f);if(d&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=f+r,_=e[u],v?e.style[t]=v:Fo(e,t)}else(d||o==="%")&&!IA[Cr(g,"display")]&&(a.position=Cr(e,"position")),g===e&&(a.position="static"),g.appendChild(So),_=So[u],g.removeChild(So),a.position="absolute";return l&&d&&(m=wo(g),m.time=Ri.time,m.width=g[u]),Kt(h?_*s/f:_&&s?f/_*s:0)},Zr=function(e,t,n,r){var s;return T_||bp(),t in Er&&t!=="transform"&&(t=Er[t],~t.indexOf(",")&&(t=t.split(",")[0])),us[t]&&t!=="transform"?(s=Uc(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:If(Cr(e,_i))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Lf[t]&&Lf[t](e,t,n)||Cr(e,t)||TS(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ys(e,t,s,n)+n:s},NA=function(e,t,n,r){if(!n||n==="none"){var s=nl(t,e,1),o=s&&Cr(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Cr(e,"borderTopColor"))}var a=new mi(this._pt,e.style,t,0,1,eM),l=0,c=0,u,f,h,d,_,g,m,p,v,y,x,E;if(a.b=n,a.e=r,n+="",r+="",r==="auto"&&(g=e.style[t],e.style[t]=r,r=Cr(e,t)||r,g?e.style[t]=g:Fo(e,t)),u=[n,r],WS(u),n=u[0],r=u[1],h=n.match(ya)||[],E=r.match(ya)||[],E.length){for(;f=ya.exec(r);)m=f[0],v=r.substring(l,f.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),m!==(g=h[c++]||"")&&(d=parseFloat(g)||0,x=g.substr((d+"").length),m.charAt(1)==="="&&(m=La(d,m)+x),p=parseFloat(m),y=m.substr((p+"").length),l=ya.lastIndex-y.length,y||(y=y||Ii.units[t]||x,l===r.length&&(r+=y,a.e+=y)),x!==y&&(d=Ys(e,t,g,y)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:d,c:p-d,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?rM:iM;return vS.test(r)&&(a.e=0),this._pt=a,a},A0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},OA=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=A0[n]||n,t[1]=A0[r]||r,t.join(" ")},UA=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],us[a]&&(l=1,a=a==="transformOrigin"?_i:Gt),Fo(n,a);l&&(Fo(n,Gt),o&&(o.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Uc(n,1),o.uncache=1,sM(r)))}},Lf={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new mi(e._pt,t,n,0,0,UA);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},Oc=[1,0,0,1,0,0],uM={},fM=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},R0=function(e){var t=Cr(e,Gt);return fM(t)?Oc:t.substr(7).match(xS).map(Kt)},R_=function(e,t){var n=e._gsap||wo(e),r=e.style,s=R0(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Oc:s):(s===Oc&&!e.offsetParent&&e!==Ia&&!n.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Ia.appendChild(e)),s=R0(e),l?r.display=l:Fo(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ia.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ep=function(e,t,n,r,s,o){var a=e._gsap,l=s||R_(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],_=l[1],g=l[2],m=l[3],p=l[4],v=l[5],y=t.split(" "),x=parseFloat(y[0])||0,E=parseFloat(y[1])||0,A,b,C,S;n?l!==Oc&&(b=d*m-_*g)&&(C=x*(m/b)+E*(-g/b)+(g*v-m*p)/b,S=x*(-_/b)+E*(d/b)-(d*v-_*p)/b,x=C,E=S):(A=lM(e),x=A.x+(~y[0].indexOf("%")?x/100*A.width:x),E=A.y+(~(y[1]||y[0]).indexOf("%")?E/100*A.height:E)),r||r!==!1&&a.smooth?(p=x-c,v=E-u,a.xOffset=f+(p*d+v*g)-p,a.yOffset=h+(p*_+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=E,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[_i]="0px 0px",o&&(Is(o,a,"xOrigin",c,x),Is(o,a,"yOrigin",u,E),Is(o,a,"xOffset",f,a.xOffset),Is(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+E)},Uc=function(e,t){var n=e._gsap||new qS(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Cr(e,_i)||"0",u,f,h,d,_,g,m,p,v,y,x,E,A,b,C,S,M,N,B,z,q,Q,W,j,V,he,O,ge,Ce,ze,te,de;return u=f=h=g=m=p=v=y=x=0,d=_=1,n.svg=!!(e.getCTM&&cM(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Gt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Gt]!=="none"?l[Gt]:"")),r.scale=r.rotate=r.translate="none"),b=R_(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",j=""):j=!t&&e.getAttribute("data-svg-origin"),Ep(e,j||c,!!j||n.originIsAbsolute,n.smooth!==!1,b)),E=n.xOrigin||0,A=n.yOrigin||0,b!==Oc&&(N=b[0],B=b[1],z=b[2],q=b[3],u=Q=b[4],f=W=b[5],b.length===6?(d=Math.sqrt(N*N+B*B),_=Math.sqrt(q*q+z*z),g=N||B?qo(B,N)*mo:0,v=z||q?qo(z,q)*mo+g:0,v&&(_*=Math.abs(Math.cos(v*Na))),n.svg&&(u-=E-(E*N+A*z),f-=A-(E*B+A*q))):(de=b[6],ze=b[7],O=b[8],ge=b[9],Ce=b[10],te=b[11],u=b[12],f=b[13],h=b[14],C=qo(de,Ce),m=C*mo,C&&(S=Math.cos(-C),M=Math.sin(-C),j=Q*S+O*M,V=W*S+ge*M,he=de*S+Ce*M,O=Q*-M+O*S,ge=W*-M+ge*S,Ce=de*-M+Ce*S,te=ze*-M+te*S,Q=j,W=V,de=he),C=qo(-z,Ce),p=C*mo,C&&(S=Math.cos(-C),M=Math.sin(-C),j=N*S-O*M,V=B*S-ge*M,he=z*S-Ce*M,te=q*M+te*S,N=j,B=V,z=he),C=qo(B,N),g=C*mo,C&&(S=Math.cos(C),M=Math.sin(C),j=N*S+B*M,V=Q*S+W*M,B=B*S-N*M,W=W*S-Q*M,N=j,Q=V),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=Kt(Math.sqrt(N*N+B*B+z*z)),_=Kt(Math.sqrt(W*W+de*de)),C=qo(Q,W),v=Math.abs(C)>2e-4?C*mo:0,x=te?1/(te<0?-te:te):0),n.svg&&(j=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!fM(Cr(e,Gt)),j&&e.setAttribute("transform",j))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(d*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=Kt(d),n.scaleY=Kt(_),n.rotation=Kt(g)+a,n.rotationX=Kt(m)+a,n.rotationY=Kt(p)+a,n.skewX=v+a,n.skewY=y+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[_i]=If(c)),n.xOffset=n.yOffset=0,n.force3D=Ii.force3D,n.renderTransform=n.svg?BA:aM?hM:FA,n.uncache=0,n},If=function(e){return(e=e.split(" "))[0]+" "+e[1]},Xh=function(e,t,n){var r=Un(t);return Kt(parseFloat(t)+parseFloat(Ys(e,"x",n+"px",r)))+r},FA=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,hM(e,t)},io="0deg",Tl="0px",ro=") ",hM=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,v=n.target,y=n.zOrigin,x="",E=p==="auto"&&e&&e!==1||p===!0;if(y&&(f!==io||u!==io)){var A=parseFloat(u)*Na,b=Math.sin(A),C=Math.cos(A),S;A=parseFloat(f)*Na,S=Math.cos(A),o=Xh(v,o,b*S*-y),a=Xh(v,a,-Math.sin(A)*-y),l=Xh(v,l,C*S*-y+y)}m!==Tl&&(x+="perspective("+m+ro),(r||s)&&(x+="translate("+r+"%, "+s+"%) "),(E||o!==Tl||a!==Tl||l!==Tl)&&(x+=l!==Tl||E?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ro),c!==io&&(x+="rotate("+c+ro),u!==io&&(x+="rotateY("+u+ro),f!==io&&(x+="rotateX("+f+ro),(h!==io||d!==io)&&(x+="skew("+h+", "+d+ro),(_!==1||g!==1)&&(x+="scale("+_+", "+g+ro),v.style[Gt]=x||"translate(0, 0)"},BA=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,v=n.forceCSS,y=parseFloat(o),x=parseFloat(a),E,A,b,C,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Na,c*=Na,E=Math.cos(l)*f,A=Math.sin(l)*f,b=Math.sin(l-c)*-h,C=Math.cos(l-c)*h,c&&(u*=Na,S=Math.tan(c-u),S=Math.sqrt(1+S*S),b*=S,C*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),E*=S,A*=S)),E=Kt(E),A=Kt(A),b=Kt(b),C=Kt(C)):(E=f,C=h,A=b=0),(y&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(y=Ys(d,"x",o,"px"),x=Ys(d,"y",a,"px")),(_||g||m||p)&&(y=Kt(y+_-(_*E+g*b)+m),x=Kt(x+g-(_*A+g*C)+p)),(r||s)&&(S=d.getBBox(),y=Kt(y+r/100*S.width),x=Kt(x+s/100*S.height)),S="matrix("+E+","+A+","+b+","+C+","+y+","+x+")",d.setAttribute("transform",S),v&&(d.style[Gt]=S)},kA=function(e,t,n,r,s){var o=360,a=Mn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?mo:1),c=l-r,u=r+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-360)),f==="cw"&&c<0?c=(c+o*M0)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*M0)%o-~~(c/o)*o)),e._pt=h=new mi(e._pt,t,n,r,c,MA),h.e=u,h.u="deg",e._props.push(n),h},C0=function(e,t){for(var n in t)e[n]=t[n];return e},zA=function(e,t,n){var r=C0({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,d,_;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Gt]=t,a=Uc(n,1),Fo(n,Gt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Gt],o[Gt]=t,a=Uc(n,1),o[Gt]=c);for(l in us)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Un(c),_=Un(u),f=d!==_?Ys(n,l,c,_):parseFloat(c),h=parseFloat(u),e._pt=new mi(e._pt,a,l,f,h-f,Sp),e._pt.u=_||0,e._props.push(l));C0(a,r)};pi("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});Lf[e>1?"border"+i:i]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(_){return Zr(a,_,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(_,g){return d[_]=h[g]=h[g]||h[(g-1)/2|0]}),a.init(l,d,f)}});var dM={name:"css",register:bp,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,h,d,_,g,m,p,v,y,x,E,A,b,C;T_||bp(),this.styles=this.styles||oM(e),C=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(wi[g]&&$S(g,t,n,r,e,s)))){if(d=typeof u,_=Lf[g],d==="function"&&(u=u.call(n,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Lc(u)),_)_(this,e,g,u,n)&&(b=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Vs.lastIndex=0,Vs.test(c)||(m=Un(c),p=Un(u)),p?m!==p&&(c=Ys(e,g,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,r,s,0,0,g),o.push(g),C.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,r,e,s):l[g],Mn(c)&&~c.indexOf("random(")&&(c=Lc(c)),Un(c+"")||c==="auto"||(c+=Ii.units[g]||Un(Zr(e,g))||""),(c+"").charAt(1)==="="&&(c=Zr(e,g))):c=Zr(e,g),h=parseFloat(c),v=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),f=parseFloat(u),g in Er&&(g==="autoAlpha"&&(h===1&&Zr(e,"visibility")==="hidden"&&f&&(h=0),C.push("visibility",0,a.visibility),Is(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=Er[g],~g.indexOf(",")&&(g=g.split(",")[0]))),y=g in us,y){if(this.styles.save(g),x||(E=e._gsap,E.renderTransform&&!t.parseTransform||Uc(e,t.parseTransform),A=t.smoothOrigin!==!1&&E.smooth,x=this._pt=new mi(this._pt,a,Gt,0,1,E.renderTransform,E,0,-1),x.dep=1),g==="scale")this._pt=new mi(this._pt,E,"scaleY",E.scaleY,(v?La(E.scaleY,v+f):f)-E.scaleY||0,Sp),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(_i,0,a[_i]),u=OA(u),E.svg?Ep(e,u,0,A,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==E.zOrigin&&Is(this,E,"zOrigin",E.zOrigin,p),Is(this,a,g,If(c),If(u)));continue}else if(g==="svgOrigin"){Ep(e,u,1,A,0,this);continue}else if(g in uM){kA(this,E,g,h,v?La(h,v+u):u);continue}else if(g==="smoothOrigin"){Is(this,E,"smooth",E.smooth,u);continue}else if(g==="force3D"){E[g]=u;continue}else if(g==="transform"){zA(this,u,e);continue}}else g in a||(g=nl(g)||g);if(y||(f||f===0)&&(h||h===0)&&!SA.test(u)&&g in a)m=(c+"").substr((h+"").length),f||(f=0),p=Un(u)||(g in Ii.units?Ii.units[g]:m),m!==p&&(h=Ys(e,g,c,p)),this._pt=new mi(this._pt,y?E:a,g,h,(v?La(h,v+f):f)-h,!y&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?EA:Sp),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=bA);else if(g in a)NA.call(this,e,g,c,v?v+u:u);else if(g in e)this.add(e,g,c||e[g],v?v+u:u,r,s);else if(g!=="parseTransform"){__(g,u);continue}y||(g in a?C.push(g,0,a[g]):typeof e[g]=="function"?C.push(g,2,e[g]()):C.push(g,1,c||e[g])),o.push(g)}}b&&tM(this)},render:function(e,t){if(t.tween._time||!w_())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Zr,aliases:Er,getSetter:function(e,t,n){var r=Er[t];return r&&r.indexOf(",")<0&&(t=r),t in us&&t!==_i&&(e._gsap.x||Zr(e,"x"))?n&&S0===n?t==="scale"?RA:AA:(S0=n||{})&&(t==="scale"?CA:PA):e.style&&!d_(e.style[t])?TA:~t.indexOf("-")?wA:b_(e,t)},core:{_removeProperty:Fo,_getMatrix:R_}};xi.utils.checkPrefix=nl;xi.core.getStyleSaver=oM;(function(i,e,t,n){var r=pi(i+","+e+","+t,function(s){us[s]=1});pi(e,function(s){Ii.units[s]="deg",uM[s]=1}),Er[r[13]]=i+","+e,pi(n,function(s){var o=s.split(":");Er[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");pi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Ii.units[i]="px"});xi.registerPlugin(dM);var dn=xi.registerPlugin(dM)||xi;dn.core.Tween;/*!
 * paths 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var HA=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,VA=/(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,GA=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,WA=/(^[#\.][a-z]|[a-y][a-z])/i,XA=Math.PI/180,jA=180/Math.PI,ru=Math.sin,su=Math.cos,Yi=Math.abs,Qr=Math.sqrt,YA=Math.atan2,Tp=1e8,P0=function(e){return typeof e=="string"},pM=function(e){return typeof e=="number"},qA=function(e){return typeof e>"u"},$A={},KA={},Nf=1e5,mM=function(e){return Math.round((e+Tp)%1*Nf)/Nf||(e<0?0:1)},vt=function(e){return Math.round(e*Nf)/Nf||0},D0=function(e){return Math.round(e*1e10)/1e10||0},L0=function(e,t,n,r){var s=e[t],o=r===1?6:wp(s,n,r);if((o||!r)&&o+n+2<s.length)return e.splice(t,0,s.slice(0,n+o+2)),s.splice(0,n+o),1},_M=function(e,t,n){var r=e.length,s=~~(n*r);if(e[s]>t){for(;--s&&e[s]>t;);s<0&&(s=0)}else for(;e[++s]<t&&s<r;);return s<r?s:r-1},ZA=function(e,t){var n=e.length;for(e.reverse();n--;)e[n].reversed||eR(e[n])},I0=function(e,t){return t.totalLength=e.totalLength,e.samples?(t.samples=e.samples.slice(0),t.lookup=e.lookup.slice(0),t.minLength=e.minLength,t.resolution=e.resolution):e.totalPoints&&(t.totalPoints=e.totalPoints),t},JA=function(e,t){var n=e.length,r=e[n-1]||[],s=r.length;n&&t[0]===r[s-2]&&t[1]===r[s-1]&&(t=r.concat(t.slice(2)),n--),e[n]=t};function rf(i){i=P0(i)&&WA.test(i)&&document.querySelector(i)||i;var e=i.getAttribute?i:0,t;return e&&(i=i.getAttribute("d"))?(e._gsPath||(e._gsPath={}),t=e._gsPath[i],t&&!t._dirty?t:e._gsPath[i]=Of(i)):i?P0(i)?Of(i):pM(i[0])?[i]:i:console.warn("Expecting a <path> element or an SVG path data string")}function QA(i){for(var e=[],t=0;t<i.length;t++)e[t]=I0(i[t],i[t].slice(0));return I0(i,e)}function eR(i){var e=0,t;for(i.reverse();e<i.length;e+=2)t=i[e],i[e]=i[e+1],i[e+1]=t;i.reversed=!i.reversed}var tR=function(e,t){var n=document.createElementNS("http://www.w3.org/2000/svg","path"),r=[].slice.call(e.attributes),s=r.length,o;for(t=","+t+",";--s>-1;)o=r[s].nodeName.toLowerCase(),t.indexOf(","+o+",")<0&&n.setAttributeNS(null,o,r[s].nodeValue);return n},nR={rect:"rx,ry,x,y,width,height",circle:"r,cx,cy",ellipse:"rx,ry,cx,cy",line:"x1,x2,y1,y2"},iR=function(e,t){for(var n=t?t.split(","):[],r={},s=n.length;--s>-1;)r[n[s]]=+e.getAttribute(n[s])||0;return r};function rR(i,e){var t=i.tagName.toLowerCase(),n=.552284749831,r,s,o,a,l,c,u,f,h,d,_,g,m,p,v,y,x,E,A,b,C,S;return t==="path"||!i.getBBox?i:(c=tR(i,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),S=iR(i,nR[t]),t==="rect"?(a=S.rx,l=S.ry||a,s=S.x,o=S.y,d=S.width-a*2,_=S.height-l*2,a||l?(g=s+a*(1-n),m=s+a,p=m+d,v=p+a*n,y=p+a,x=o+l*(1-n),E=o+l,A=E+_,b=A+l*n,C=A+l,r="M"+y+","+E+" V"+A+" C"+[y,b,v,C,p,C,p-(p-m)/3,C,m+(p-m)/3,C,m,C,g,C,s,b,s,A,s,A-(A-E)/3,s,E+(A-E)/3,s,E,s,x,g,o,m,o,m+(p-m)/3,o,p-(p-m)/3,o,p,o,v,o,y,x,y,E].join(",")+"z"):r="M"+(s+d)+","+o+" v"+_+" h"+-d+" v"+-_+" h"+d+"z"):t==="circle"||t==="ellipse"?(t==="circle"?(a=l=S.r,f=a*n):(a=S.rx,l=S.ry,f=l*n),s=S.cx,o=S.cy,u=a*n,r="M"+(s+a)+","+o+" C"+[s+a,o+f,s+u,o+l,s,o+l,s-u,o+l,s-a,o+f,s-a,o,s-a,o-f,s-u,o-l,s,o-l,s+u,o-l,s+a,o-f,s+a,o].join(",")+"z"):t==="line"?r="M"+S.x1+","+S.y1+" L"+S.x2+","+S.y2:(t==="polyline"||t==="polygon")&&(h=(i.getAttribute("points")+"").match(VA)||[],s=h.shift(),o=h.shift(),r="M"+s+","+o+" L"+h.join(","),t==="polygon"&&(r+=","+s+","+o+"z")),c.setAttribute("d",vM(c._gsRawPath=Of(r))),e&&i.parentNode&&(i.parentNode.insertBefore(c,i),i.parentNode.removeChild(i)),c)}function gM(i,e,t){var n=i[e],r=i[e+2],s=i[e+4],o;return n+=(r-n)*t,r+=(s-r)*t,n+=(r-n)*t,o=r+(s+(i[e+6]-s)*t-r)*t-n,n=i[e+1],r=i[e+3],s=i[e+5],n+=(r-n)*t,r+=(s-r)*t,n+=(r-n)*t,vt(YA(r+(s+(i[e+7]-s)*t-r)*t-n,o)*jA)}function xM(i,e,t){t=qA(t)?1:D0(t)||0,e=D0(e)||0;var n=Math.max(0,~~(Yi(t-e)-1e-8)),r=QA(i);if(e>t&&(e=1-e,t=1-t,ZA(r),r.totalLength=0),e<0||t<0){var s=Math.abs(~~Math.min(e,t))+1;e+=s,t+=s}r.totalLength||Po(r);var o=t>1,a=N0(r,e,$A,!0),l=N0(r,t,KA),c=l.segment,u=a.segment,f=l.segIndex,h=a.segIndex,d=l.i,_=a.i,g=h===f,m=d===_&&g,p,v,y,x,E,A,b,C;if(o||n){for(p=f<h||g&&d<_||m&&l.t<a.t,L0(r,h,_,a.t)&&(h++,p||(f++,m?(l.t=(l.t-a.t)/(1-a.t),d=0):g&&(d-=_))),Math.abs(1-(t-e))<1e-5?f=h-1:!l.t&&f?f--:L0(r,f,d,l.t)&&p&&h++,a.t===1&&(h=(h+1)%r.length),E=[],A=r.length,b=1+A*n,C=h,b+=(A-h+f)%A,x=0;x<b;x++)JA(E,r[C++%A]);r=E}else if(y=l.t===1?6:wp(c,d,l.t),e!==t)for(v=wp(u,_,m?a.t/l.t:a.t),g&&(y+=v),c.splice(d+y+2),(v||_)&&u.splice(0,_+v),x=r.length;x--;)(x<h||x>f)&&r.splice(x,1);else c.angle=gM(c,d+y,0),d+=y,a=c[d],l=c[d+1],c.length=c.totalLength=0,c.totalPoints=r.totalPoints=8,c.push(a,l,a,l,a,l,a,l);return r.totalLength=0,r}function sR(i,e,t){e=e||0,i.samples||(i.samples=[],i.lookup=[]);var n=~~i.resolution||12,r=1/n,s=i.length,o=i[e],a=i[e+1],l=e?e/6*n:0,c=i.samples,u=i.lookup,f=(e?i.minLength:Tp)||Tp,h=c[l+t*n-1],d=e?c[l-1]:0,_,g,m,p,v,y,x,E,A,b,C,S,M,N,B,z,q;for(c.length=u.length=0,g=e+2;g<s;g+=6){if(m=i[g+4]-o,p=i[g+2]-o,v=i[g]-o,E=i[g+5]-a,A=i[g+3]-a,b=i[g+1]-a,y=x=C=S=0,Yi(m)<.01&&Yi(E)<.01&&Yi(v)+Yi(b)<.01)i.length>8&&(i.splice(g,6),g-=6,s-=6);else for(_=1;_<=n;_++)N=r*_,M=1-N,y=x-(x=(N*N*m+3*M*(N*p+M*v))*N),C=S-(S=(N*N*E+3*M*(N*A+M*b))*N),z=Qr(C*C+y*y),z<f&&(f=z),d+=z,c[l++]=d;o+=m,a+=E}if(h)for(h-=d;l<c.length;l++)c[l]+=h;if(c.length&&f){if(i.totalLength=q=c[c.length-1]||0,i.minLength=f,q/f<9999)for(z=B=0,_=0;_<q;_+=f)u[z++]=c[B]<_?++B:B}else i.totalLength=c[0]=0;return e?d-c[e/2-1]:d}function Po(i,e){var t,n,r;for(r=t=n=0;r<i.length;r++)i[r].resolution=~~e||12,n+=i[r].length,t+=sR(i[r]);return i.totalPoints=n,i.totalLength=t,i}function wp(i,e,t){if(t<=0||t>=1)return 0;var n=i[e],r=i[e+1],s=i[e+2],o=i[e+3],a=i[e+4],l=i[e+5],c=i[e+6],u=i[e+7],f=n+(s-n)*t,h=s+(a-s)*t,d=r+(o-r)*t,_=o+(l-o)*t,g=f+(h-f)*t,m=d+(_-d)*t,p=a+(c-a)*t,v=l+(u-l)*t;return h+=(p-h)*t,_+=(v-_)*t,i.splice(e+2,4,vt(f),vt(d),vt(g),vt(m),vt(g+(h-g)*t),vt(m+(_-m)*t),vt(h),vt(_),vt(p),vt(v)),i.samples&&i.samples.splice(e/6*i.resolution|0,0,0,0,0,0,0,0),6}function N0(i,e,t,n){t=t||{},i.totalLength||Po(i),(e<0||e>1)&&(e=mM(e));var r=0,s=i[0],o,a,l,c,u,f,h;if(!e)h=f=r=0,s=i[0];else if(e===1)h=1,r=i.length-1,s=i[r],f=s.length-8;else{if(i.length>1){for(l=i.totalLength*e,u=f=0;(u+=i[f++].totalLength)<l;)r=f;s=i[r],c=u-s.totalLength,e=(l-c)/(u-c)||0}o=s.samples,a=s.resolution,l=s.totalLength*e,f=s.lookup.length?s.lookup[~~(l/s.minLength)]||0:_M(o,l,e),c=f?o[f-1]:0,u=o[f],u<l&&(c=u,u=o[++f]),h=1/a*((l-c)/(u-c)+f%a),f=~~(f/a)*6,n&&h===1&&(f+6<s.length?(f+=6,h=0):r+1<i.length&&(f=h=0,s=i[++r]))}return t.t=h,t.i=f,t.path=i,t.segment=s,t.segIndex=r,t}function O0(i,e,t,n){var r=i[0],s=n||{},o,a,l,c,u,f,h,d,_;if((e<0||e>1)&&(e=mM(e)),r.lookup||Po(i),i.length>1){for(l=i.totalLength*e,u=f=0;(u+=i[f++].totalLength)<l;)r=i[f];c=u-r.totalLength,e=(l-c)/(u-c)||0}return o=r.samples,a=r.resolution,l=r.totalLength*e,f=r.lookup.length?r.lookup[e<1?~~(l/r.minLength):r.lookup.length-1]||0:_M(o,l,e),c=f?o[f-1]:0,u=o[f],u<l&&(c=u,u=o[++f]),h=1/a*((l-c)/(u-c)+f%a)||0,_=1-h,f=~~(f/a)*6,d=r[f],s.x=vt((h*h*(r[f+6]-d)+3*_*(h*(r[f+4]-d)+_*(r[f+2]-d)))*h+d),s.y=vt((h*h*(r[f+7]-(d=r[f+1]))+3*_*(h*(r[f+5]-d)+_*(r[f+3]-d)))*h+d),t&&(s.angle=r.totalLength?gM(r,f,h>=1?1-1e-9:h||1e-9):r.angle||0),s}function Hl(i,e,t,n,r,s,o){for(var a=i.length,l,c,u,f,h;--a>-1;)for(l=i[a],c=l.length,u=0;u<c;u+=2)f=l[u],h=l[u+1],l[u]=f*e+h*n+s,l[u+1]=f*t+h*r+o;return i._dirty=1,i}function oR(i,e,t,n,r,s,o,a,l){if(!(i===a&&e===l)){t=Yi(t),n=Yi(n);var c=r%360*XA,u=su(c),f=ru(c),h=Math.PI,d=h*2,_=(i-a)/2,g=(e-l)/2,m=u*_+f*g,p=-f*_+u*g,v=m*m,y=p*p,x=v/(t*t)+y/(n*n);x>1&&(t=Qr(x)*t,n=Qr(x)*n);var E=t*t,A=n*n,b=(E*A-E*y-A*v)/(E*y+A*v);b<0&&(b=0);var C=(s===o?-1:1)*Qr(b),S=C*(t*p/n),M=C*-(n*m/t),N=(i+a)/2,B=(e+l)/2,z=N+(u*S-f*M),q=B+(f*S+u*M),Q=(m-S)/t,W=(p-M)/n,j=(-m-S)/t,V=(-p-M)/n,he=Q*Q+W*W,O=(W<0?-1:1)*Math.acos(Q/Qr(he)),ge=(Q*V-W*j<0?-1:1)*Math.acos((Q*j+W*V)/Qr(he*(j*j+V*V)));isNaN(ge)&&(ge=h),!o&&ge>0?ge-=d:o&&ge<0&&(ge+=d),O%=d,ge%=d;var Ce=Math.ceil(Yi(ge)/(d/4)),ze=[],te=ge/Ce,de=4/3*ru(te/2)/(1+su(te/2)),ye=u*t,k=f*t,oe=f*-n,le=u*n,ae;for(ae=0;ae<Ce;ae++)r=O+ae*te,m=su(r),p=ru(r),Q=su(r+=te),W=ru(r),ze.push(m-de*p,p+de*m,Q+de*W,W-de*Q,Q,W);for(ae=0;ae<ze.length;ae+=2)m=ze[ae],p=ze[ae+1],ze[ae]=m*ye+p*oe+z,ze[ae+1]=m*k+p*le+q;return ze[ae-2]=a,ze[ae-1]=l,ze}}function Of(i){var e=(i+"").replace(GA,function(S){var M=+S;return M<1e-4&&M>-1e-4?0:M}).match(HA)||[],t=[],n=0,r=0,s=2/3,o=e.length,a=0,l="ERROR: malformed path: "+i,c,u,f,h,d,_,g,m,p,v,y,x,E,A,b,C=function(M,N,B,z){v=(B-M)/3,y=(z-N)/3,g.push(M+v,N+y,B-v,z-y,B,z)};if(!i||!isNaN(e[0])||isNaN(e[1]))return console.log(l),t;for(c=0;c<o;c++)if(E=d,isNaN(e[c])?(d=e[c].toUpperCase(),_=d!==e[c]):c--,f=+e[c+1],h=+e[c+2],_&&(f+=n,h+=r),c||(m=f,p=h),d==="M")g&&(g.length<8?t.length-=1:a+=g.length),n=m=f,r=p=h,g=[f,h],t.push(g),c+=2,d="L";else if(d==="C")g||(g=[0,0]),_||(n=r=0),g.push(f,h,n+e[c+3]*1,r+e[c+4]*1,n+=e[c+5]*1,r+=e[c+6]*1),c+=6;else if(d==="S")v=n,y=r,(E==="C"||E==="S")&&(v+=n-g[g.length-4],y+=r-g[g.length-3]),_||(n=r=0),g.push(v,y,f,h,n+=e[c+3]*1,r+=e[c+4]*1),c+=4;else if(d==="Q")v=n+(f-n)*s,y=r+(h-r)*s,_||(n=r=0),n+=e[c+3]*1,r+=e[c+4]*1,g.push(v,y,n+(f-n)*s,r+(h-r)*s,n,r),c+=4;else if(d==="T")v=n-g[g.length-4],y=r-g[g.length-3],g.push(n+v,r+y,f+(n+v*1.5-f)*s,h+(r+y*1.5-h)*s,n=f,r=h),c+=2;else if(d==="H")C(n,r,n=f,r),c+=1;else if(d==="V")C(n,r,n,r=f+(_?r-n:0)),c+=1;else if(d==="L"||d==="Z")d==="Z"&&(f=m,h=p,g.closed=!0),(d==="L"||Yi(n-f)>.5||Yi(r-h)>.5)&&(C(n,r,f,h),d==="L"&&(c+=2)),n=f,r=h;else if(d==="A"){if(A=e[c+4],b=e[c+5],v=e[c+6],y=e[c+7],u=7,A.length>1&&(A.length<3?(y=v,v=b,u--):(y=b,v=A.substr(2),u-=2),b=A.charAt(1),A=A.charAt(0)),x=oR(n,r,+e[c+1],+e[c+2],+e[c+3],+A,+b,(_?n:0)+v*1,(_?r:0)+y*1),c+=u,x)for(u=0;u<x.length;u++)g.push(x[u]);n=g[g.length-2],r=g[g.length-1]}else console.log(l);return c=g.length,c<6?(t.pop(),c=0):g[0]===g[c-2]&&g[1]===g[c-1]&&(g.closed=!0),t.totalPoints=a+c,t}function aR(i,e){e===void 0&&(e=1);for(var t=i[0],n=0,r=[t,n],s=2;s<i.length;s+=2)r.push(t,n,i[s],n=(i[s]-t)*e/2,t=i[s],-n);return r}function Ap(i,e){Yi(i[0]-i[2])<1e-4&&Yi(i[1]-i[3])<1e-4&&(i=i.slice(2));var t=i.length-2,n=+i[0],r=+i[1],s=+i[2],o=+i[3],a=[n,r,n,r],l=s-n,c=o-r,u=Math.abs(i[t]-n)<.001&&Math.abs(i[t+1]-r)<.001,f,h,d,_,g,m,p,v,y,x,E,A,b,C,S;for(u&&(i.push(s,o),s=n,o=r,n=i[t-2],r=i[t-1],i.unshift(n,r),t+=4),e=e||e===0?+e:1,d=2;d<t;d+=2)f=n,h=r,n=s,r=o,s=+i[d+2],o=+i[d+3],!(n===s&&r===o)&&(_=l,g=c,l=s-n,c=o-r,m=Qr(_*_+g*g),p=Qr(l*l+c*c),v=Qr(Math.pow(l/p+_/m,2)+Math.pow(c/p+g/m,2)),y=(m+p)*e*.25/v,x=n-(n-f)*(m?y/m:0),E=n+(s-n)*(p?y/p:0),A=n-(x+((E-x)*(m*3/(m+p)+.5)/4||0)),b=r-(r-h)*(m?y/m:0),C=r+(o-r)*(p?y/p:0),S=r-(b+((C-b)*(m*3/(m+p)+.5)/4||0)),(n!==f||r!==h)&&a.push(vt(x+A),vt(b+S),vt(n),vt(r),vt(E+A),vt(C+S)));return n!==s||r!==o||a.length<4?a.push(vt(s),vt(o),vt(s),vt(o)):a.length-=2,a.length===2?a.push(n,r,n,r,n,r):u&&(a.splice(0,6),a.length=a.length-6),a}function vM(i){pM(i[0])&&(i=[i]);var e="",t=i.length,n,r,s,o;for(r=0;r<t;r++){for(o=i[r],e+="M"+vt(o[0])+","+vt(o[1])+" C",n=o.length,s=2;s<n;s++)e+=vt(o[s++])+","+vt(o[s++])+" "+vt(o[s++])+","+vt(o[s++])+" "+vt(o[s++])+","+vt(o[s])+" ";o.closed&&(e+="z")}return e}/*!
 * matrix 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ts,Do,C_,ph,Vl,sf,Uf,ac,sr="transform",Rp=sr+"Origin",yM,SM=function(e){var t=e.ownerDocument||e;for(!(sr in e.style)&&("msTransform"in e.style)&&(sr="msTransform",Rp=sr+"Origin");t.parentNode&&(t=t.parentNode););if(Do=window,Uf=new Fc,t){ts=t,C_=t.documentElement,ph=t.body,ac=ts.createElementNS("http://www.w3.org/2000/svg","g"),ac.style.transform="none";var n=t.createElement("div"),r=t.createElement("div"),s=t&&(t.body||t.firstElementChild);s&&s.appendChild&&(s.appendChild(n),n.appendChild(r),n.setAttribute("style","position:static;transform:translate3d(0,0,1px)"),yM=r.offsetParent!==n,s.removeChild(n))}return t},lR=function(e){for(var t,n;e&&e!==ph;)n=e._gsap,n&&n.uncache&&n.get(e,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),t?t.push(n):t=[n]),e=e.parentNode;return t},MM=[],bM=[],cR=function(){return Do.pageYOffset||ts.scrollTop||C_.scrollTop||ph.scrollTop||0},uR=function(){return Do.pageXOffset||ts.scrollLeft||C_.scrollLeft||ph.scrollLeft||0},P_=function(e){return e.ownerSVGElement||((e.tagName+"").toLowerCase()==="svg"?e:null)},fR=function i(e){if(Do.getComputedStyle(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return i(e)},jh=function i(e,t){if(e.parentNode&&(ts||SM(e))){var n=P_(e),r=n?n.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",s=n?t?"rect":"g":"div",o=t!==2?0:100,a=t===3?100:0,l="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",c=ts.createElementNS?ts.createElementNS(r.replace(/^https/,"http"),s):ts.createElement(s);return t&&(n?(sf||(sf=i(e)),c.setAttribute("width",.01),c.setAttribute("height",.01),c.setAttribute("transform","translate("+o+","+a+")"),sf.appendChild(c)):(Vl||(Vl=i(e),Vl.style.cssText=l),c.style.cssText=l+"width:0.1px;height:0.1px;top:"+a+"px;left:"+o+"px",Vl.appendChild(c))),c}throw"Need document and parent."},hR=function(e){for(var t=new Fc,n=0;n<e.numberOfItems;n++)t.multiply(e.getItem(n).matrix);return t},dR=function(e){var t=e.getCTM(),n;return t||(n=e.style[sr],e.style[sr]="none",e.appendChild(ac),t=ac.getCTM(),e.removeChild(ac),n?e.style[sr]=n:e.style.removeProperty(sr.replace(/([A-Z])/g,"-$1").toLowerCase())),t||Uf.clone()},pR=function(e,t){var n=P_(e),r=e===n,s=n?MM:bM,o=e.parentNode,a,l,c,u,f,h;if(e===Do)return e;if(s.length||s.push(jh(e,1),jh(e,2),jh(e,3)),a=n?sf:Vl,n)r?(c=dR(e),u=-c.e/c.a,f=-c.f/c.d,l=Uf):e.getBBox?(c=e.getBBox(),l=e.transform?e.transform.baseVal:{},l=l.numberOfItems?l.numberOfItems>1?hR(l):l.getItem(0).matrix:Uf,u=l.a*c.x+l.c*c.y,f=l.b*c.x+l.d*c.y):(l=new Fc,u=f=0),t&&e.tagName.toLowerCase()==="g"&&(u=f=0),(r?n:o).appendChild(a),a.setAttribute("transform","matrix("+l.a+","+l.b+","+l.c+","+l.d+","+(l.e+u)+","+(l.f+f)+")");else{if(u=f=0,yM)for(l=e.offsetParent,c=e;c&&(c=c.parentNode)&&c!==l&&c.parentNode;)(Do.getComputedStyle(c)[sr]+"").length>4&&(u=c.offsetLeft,f=c.offsetTop,c=0);if(h=Do.getComputedStyle(e),h.position!=="absolute"&&h.position!=="fixed")for(l=e.offsetParent;o&&o!==l;)u+=o.scrollLeft||0,f+=o.scrollTop||0,o=o.parentNode;c=a.style,c.top=e.offsetTop-f+"px",c.left=e.offsetLeft-u+"px",c[sr]=h[sr],c[Rp]=h[Rp],c.position=h.position==="fixed"?"fixed":"absolute",e.parentNode.appendChild(a)}return a},Yh=function(e,t,n,r,s,o,a){return e.a=t,e.b=n,e.c=r,e.d=s,e.e=o,e.f=a,e},Fc=function(){function i(t,n,r,s,o,a){t===void 0&&(t=1),n===void 0&&(n=0),r===void 0&&(r=0),s===void 0&&(s=1),o===void 0&&(o=0),a===void 0&&(a=0),Yh(this,t,n,r,s,o,a)}var e=i.prototype;return e.inverse=function(){var n=this.a,r=this.b,s=this.c,o=this.d,a=this.e,l=this.f,c=n*o-r*s||1e-10;return Yh(this,o/c,-r/c,-s/c,n/c,(s*l-o*a)/c,-(n*l-r*a)/c)},e.multiply=function(n){var r=this.a,s=this.b,o=this.c,a=this.d,l=this.e,c=this.f,u=n.a,f=n.c,h=n.b,d=n.d,_=n.e,g=n.f;return Yh(this,u*r+h*o,u*s+h*a,f*r+d*o,f*s+d*a,l+_*r+g*o,c+_*s+g*a)},e.clone=function(){return new i(this.a,this.b,this.c,this.d,this.e,this.f)},e.equals=function(n){var r=this.a,s=this.b,o=this.c,a=this.d,l=this.e,c=this.f;return r===n.a&&s===n.b&&o===n.c&&a===n.d&&l===n.e&&c===n.f},e.apply=function(n,r){r===void 0&&(r={});var s=n.x,o=n.y,a=this.a,l=this.b,c=this.c,u=this.d,f=this.e,h=this.f;return r.x=s*a+o*c+f||0,r.y=s*l+o*u+h||0,r},i}();function Oa(i,e,t,n){if(!i||!i.parentNode||(ts||SM(i)).documentElement===i)return new Fc;var r=lR(i),s=P_(i),o=s?MM:bM,a=pR(i,t),l=o[0].getBoundingClientRect(),c=o[1].getBoundingClientRect(),u=o[2].getBoundingClientRect(),f=a.parentNode,h=!n&&fR(i),d=new Fc((c.left-l.left)/100,(c.top-l.top)/100,(u.left-l.left)/100,(u.top-l.top)/100,l.left+(h?0:uR()),l.top+(h?0:cR()));if(f.removeChild(a),r)for(l=r.length;l--;)c=r[l],c.scaleX=c.scaleY=0,c.renderTransform(1,c);return e?d.inverse():d}/*!
 * MotionPathPlugin 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var mR="x,translateX,left,marginLeft,xPercent".split(","),_R="y,translateY,top,marginTop,yPercent".split(","),gR=Math.PI/180,Gi,EM,ma,Cp,qh,U0,xR=function(){return Gi||typeof window<"u"&&(Gi=window.gsap)&&Gi.registerPlugin&&Gi},wl=function(e,t,n,r){for(var s=t.length,o=r===2?0:r,a=0;a<s;a++)e[o]=parseFloat(t[a][n]),r===2&&(e[o+1]=0),o+=2;return e},Ma=function(e,t,n){return parseFloat(e._gsap.get(e,t,n||"px"))||0},TM=function(e){var t=e[0],n=e[1],r;for(r=2;r<e.length;r+=2)t=e[r]+=t,n=e[r+1]+=n},F0=function(e,t,n,r,s,o,a,l,c){if(a.type==="cubic")t=[t];else{a.fromCurrent!==!1&&t.unshift(Ma(n,r,l),s?Ma(n,s,c):0),a.relative&&TM(t);var u=s?Ap:aR;t=[u(t,a.curviness)]}return t=o(wM(t,n,a)),Ff(e,n,r,t,"x",l),s&&Ff(e,n,s,t,"y",c),Po(t,a.resolution||(a.curviness===0?20:12))},vR=function(e){return e},yR=/[-+\.]*\d+\.?(?:e-|e\+)?\d*/g,B0=function(e,t,n){var r=Oa(e),s=0,o=0,a;return(e.tagName+"").toLowerCase()==="svg"?(a=e.viewBox.baseVal,a.width||(a={width:+e.getAttribute("width"),height:+e.getAttribute("height")})):a=t&&e.getBBox&&e.getBBox(),t&&t!=="auto"&&(s=t.push?t[0]*(a?a.width:e.offsetWidth||0):t.x,o=t.push?t[1]*(a?a.height:e.offsetHeight||0):t.y),n.apply(s||o?r.apply({x:s,y:o}):{x:r.e,y:r.f})},Pp=function(e,t,n,r){var s=Oa(e.parentNode,!0,!0),o=s.clone().multiply(Oa(t)),a=B0(e,n,s),l=B0(t,r,s),c=l.x,u=l.y,f;return o.e=o.f=0,r==="auto"&&t.getTotalLength&&t.tagName.toLowerCase()==="path"&&(f=t.getAttribute("d").match(yR)||[],f=o.apply({x:+f[0],y:+f[1]}),c+=f.x,u+=f.y),f&&(f=o.apply(t.getBBox()),c-=f.x,u-=f.y),o.e=c-a.x,o.f=u-a.y,o},wM=function(e,t,n){var r=n.align,s=n.matrix,o=n.offsetX,a=n.offsetY,l=n.alignOrigin,c=e[0][0],u=e[0][1],f=Ma(t,"x"),h=Ma(t,"y"),d,_,g;return!e||!e.length?rf("M0,0L0,0"):(r&&(r==="self"||(d=Cp(r)[0]||t)===t?Hl(e,1,0,0,1,f-c,h-u):(l&&l[2]!==!1?Gi.set(t,{transformOrigin:l[0]*100+"% "+l[1]*100+"%"}):l=[Ma(t,"xPercent")/-100,Ma(t,"yPercent")/-100],_=Pp(t,d,l,"auto"),g=_.apply({x:c,y:u}),Hl(e,_.a,_.b,_.c,_.d,f+_.e-(g.x-_.e),h+_.f-(g.y-_.f)))),s?Hl(e,s.a,s.b,s.c,s.d,s.e,s.f):(o||a)&&Hl(e,1,0,0,1,o||0,a||0),e)},Ff=function(e,t,n,r,s,o){var a=t._gsap,l=a.harness,c=l&&l.aliases&&l.aliases[n],u=c&&c.indexOf(",")<0?c:n,f=e._pt=new EM(e._pt,t,u,0,0,vR,0,a.set(t,u,e));f.u=ma(a.get(t,u,o))||0,f.path=r,f.pp=s,e._props.push(u)},SR=function(e,t){return function(n){return e||t!==1?xM(n,e,t):n}},AM={version:"3.12.7",name:"motionPath",register:function(e,t,n){Gi=e,ma=Gi.utils.getUnit,Cp=Gi.utils.toArray,qh=Gi.core.getStyleSaver,U0=Gi.core.reverting||function(){},EM=n},init:function(e,t,n){if(!Gi)return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"),!1;(!(typeof t=="object"&&!t.style)||!t.path)&&(t={path:t});var r=[],s=t,o=s.path,a=s.autoRotate,l=s.unitX,c=s.unitY,u=s.x,f=s.y,h=o[0],d=SR(t.start,"end"in t?t.end:1),_,g;if(this.rawPaths=r,this.target=e,this.tween=n,this.styles=qh&&qh(e,"transform"),(this.rotate=a||a===0)&&(this.rOffset=parseFloat(a)||0,this.radians=!!t.useRadians,this.rProp=t.rotation||"rotation",this.rSet=e._gsap.set(e,this.rProp,this),this.ru=ma(e._gsap.get(e,this.rProp))||0),Array.isArray(o)&&!("closed"in o)&&typeof h!="number"){for(g in h)!u&&~mR.indexOf(g)?u=g:!f&&~_R.indexOf(g)&&(f=g);u&&f?r.push(F0(this,wl(wl([],o,u,0),o,f,1),e,u,f,d,t,l||ma(o[0][u]),c||ma(o[0][f]))):u=f=0;for(g in h)g!==u&&g!==f&&r.push(F0(this,wl([],o,g,2),e,g,0,d,t,ma(o[0][g])))}else _=d(wM(rf(t.path),e,t)),Po(_,t.resolution),r.push(_),Ff(this,e,t.x||"x",_,"x",t.unitX||"px"),Ff(this,e,t.y||"y",_,"y",t.unitY||"px");n.vars.immediateRender&&this.render(n.progress(),this)},render:function(e,t){var n=t.rawPaths,r=n.length,s=t._pt;if(t.tween._time||!U0()){for(e>1?e=1:e<0&&(e=0);r--;)O0(n[r],e,!r&&t.rotate,n[r]);for(;s;)s.set(s.t,s.p,s.path[s.pp]+s.u,s.d,e),s=s._next;t.rotate&&t.rSet(t.target,t.rProp,n[0].angle*(t.radians?gR:1)+t.rOffset+t.ru,t,e)}else t.styles.revert()},getLength:function(e){return Po(rf(e)).totalLength},sliceRawPath:xM,getRawPath:rf,pointsToSegment:Ap,stringToRawPath:Of,rawPathToString:vM,transformRawPath:Hl,getGlobalMatrix:Oa,getPositionOnPath:O0,cacheRawPathMeasurements:Po,convertToPath:function(e,t){return Cp(e).map(function(n){return rR(n,t!==!1)})},convertCoordinates:function(e,t,n){var r=Oa(t,!0,!0).multiply(Oa(e));return n?r.apply(n):r},getAlignMatrix:Pp,getRelativePosition:function(e,t,n,r){var s=Pp(e,t,n,r);return{x:s.e,y:s.f}},arrayToRawPath:function(e,t){t=t||{};var n=wl(wl([],e,t.x||"x",0),e,t.y||"y",1);return t.relative&&TM(n),[t.type==="cubic"?n:Ap(n,t.curviness)]}};xR()&&Gi.registerPlugin(AM);function MR(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function bR(i,e,t){return MR(i.prototype,e),i}/*!
 * Observer 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Rn,of,Ci,Ns,Os,Ua,RM,_o,lc,CM,ns,nr,PM,DM=function(){return Rn||typeof window<"u"&&(Rn=window.gsap)&&Rn.registerPlugin&&Rn},LM=1,ba=[],ct=[],Pr=[],cc=Date.now,Dp=function(e,t){return t},ER=function(){var e=lc.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,ct),r.push.apply(r,Pr),ct=n,Pr=r,Dp=function(o,a){return t[o](a)}},Gs=function(e,t){return~Pr.indexOf(e)&&Pr[Pr.indexOf(e)+1][t]},uc=function(e){return!!~CM.indexOf(e)},Yn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:r!==!1,capture:!!s})},Wn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},ou="scrollLeft",au="scrollTop",Lp=function(){return ns&&ns.isPressed||ct.cache++},Bf=function(e,t){var n=function r(s){if(s||s===0){LM&&(Ci.history.scrollRestoration="manual");var o=ns&&ns.isPressed;s=r.v=Math.round(s)||(ns&&ns.iOS?1:0),e(s),r.cacheID=ct.cache,o&&Dp("ss",s)}else(t||ct.cache!==r.cacheID||Dp("ref"))&&(r.cacheID=ct.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},ri={s:ou,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Bf(function(i){return arguments.length?Ci.scrollTo(i,hn.sc()):Ci.pageXOffset||Ns[ou]||Os[ou]||Ua[ou]||0})},hn={s:au,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:ri,sc:Bf(function(i){return arguments.length?Ci.scrollTo(ri.sc(),i):Ci.pageYOffset||Ns[au]||Os[au]||Ua[au]||0})},fi=function(e,t){return(t&&t._ctx&&t._ctx.selector||Rn.utils.toArray)(e)[0]||(typeof e=="string"&&Rn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},qs=function(e,t){var n=t.s,r=t.sc;uc(e)&&(e=Ns.scrollingElement||Os);var s=ct.indexOf(e),o=r===hn.sc?1:2;!~s&&(s=ct.push(e)-1),ct[s+o]||Yn(e,"scroll",Lp);var a=ct[s+o],l=a||(ct[s+o]=Bf(Gs(e,n),!0)||(uc(e)?r:Bf(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=Rn.getProperty(e,"scrollBehavior")==="smooth"),l},Ip=function(e,t,n){var r=e,s=e,o=cc(),a=o,l=t||50,c=Math.max(500,l*3),u=function(_,g){var m=cc();g||m-o>l?(s=r,r=_,a=o,o=m):n?r+=_:r=s+(_-s)/(m-a)*(o-a)},f=function(){s=r=n?0:r,a=o=0},h=function(_){var g=a,m=s,p=cc();return(_||_===0)&&_!==r&&u(_),o===a||p-a>c?0:(r+(n?m:-m))/((n?p:o)-g)*1e3};return{update:u,reset:f,getVelocity:h}},Al=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},k0=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},IM=function(){lc=Rn.core.globals().ScrollTrigger,lc&&lc.core&&ER()},NM=function(e){return Rn=e||DM(),!of&&Rn&&typeof document<"u"&&document.body&&(Ci=window,Ns=document,Os=Ns.documentElement,Ua=Ns.body,CM=[Ci,Ns,Os,Ua],Rn.utils.clamp,PM=Rn.core.context||function(){},_o="onpointerenter"in Ua?"pointer":"mouse",RM=Zt.isTouch=Ci.matchMedia&&Ci.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ci||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,nr=Zt.eventTypes=("ontouchstart"in Os?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Os?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return LM=0},500),IM(),of=1),of};ri.op=hn;ct.cache=0;var Zt=function(){function i(t){this.init(t)}var e=i.prototype;return e.init=function(n){of||NM(Rn)||console.warn("Please gsap.registerPlugin(Observer)"),lc||IM();var r=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,v=n.onDrag,y=n.onPress,x=n.onRelease,E=n.onRight,A=n.onLeft,b=n.onUp,C=n.onDown,S=n.onChangeX,M=n.onChangeY,N=n.onChange,B=n.onToggleX,z=n.onToggleY,q=n.onHover,Q=n.onHoverEnd,W=n.onMove,j=n.ignoreCheck,V=n.isNormalizer,he=n.onGestureStart,O=n.onGestureEnd,ge=n.onWheel,Ce=n.onEnable,ze=n.onDisable,te=n.onClick,de=n.scrollSpeed,ye=n.capture,k=n.allowClicks,oe=n.lockAxis,le=n.onLockAxis;this.target=a=fi(a)||Os,this.vars=n,d&&(d=Rn.utils.toArray(d)),r=r||1e-9,s=s||0,_=_||1,de=de||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Ci.getComputedStyle(Ua).lineHeight)||22);var ae,Le,I,D,w,re,J,L=this,ie=0,ue=0,ne=n.passive||!u&&n.passive!==!1,R=qs(a,ri),T=qs(a,hn),U=R(),Y=T(),$=~o.indexOf("touch")&&!~o.indexOf("pointer")&&nr[0]==="pointerdown",Z=uc(a),pe=a.ownerDocument||Ns,fe=[0,0,0],ve=[0,0,0],Fe=0,me=function(){return Fe=cc()},xe=function(Ne,et){return(L.event=Ne)&&d&&~d.indexOf(Ne.target)||et&&$&&Ne.pointerType!=="touch"||j&&j(Ne,et)},Oe=function(){L._vx.reset(),L._vy.reset(),Le.pause(),f&&f(L)},Be=function(){var Ne=L.deltaX=k0(fe),et=L.deltaY=k0(ve),we=Math.abs(Ne)>=r,Ke=Math.abs(et)>=r;N&&(we||Ke)&&N(L,Ne,et,fe,ve),we&&(E&&L.deltaX>0&&E(L),A&&L.deltaX<0&&A(L),S&&S(L),B&&L.deltaX<0!=ie<0&&B(L),ie=L.deltaX,fe[0]=fe[1]=fe[2]=0),Ke&&(C&&L.deltaY>0&&C(L),b&&L.deltaY<0&&b(L),M&&M(L),z&&L.deltaY<0!=ue<0&&z(L),ue=L.deltaY,ve[0]=ve[1]=ve[2]=0),(D||I)&&(W&&W(L),I&&(m&&I===1&&m(L),v&&v(L),I=0),D=!1),re&&!(re=!1)&&le&&le(L),w&&(ge(L),w=!1),ae=0},Se=function(Ne,et,we){fe[we]+=Ne,ve[we]+=et,L._vx.update(Ne),L._vy.update(et),c?ae||(ae=requestAnimationFrame(Be)):Be()},Ve=function(Ne,et){oe&&!J&&(L.axis=J=Math.abs(Ne)>Math.abs(et)?"x":"y",re=!0),J!=="y"&&(fe[2]+=Ne,L._vx.update(Ne,!0)),J!=="x"&&(ve[2]+=et,L._vy.update(et,!0)),c?ae||(ae=requestAnimationFrame(Be)):Be()},Ge=function(Ne){if(!xe(Ne,1)){Ne=Al(Ne,u);var et=Ne.clientX,we=Ne.clientY,Ke=et-L.x,Ue=we-L.y,$e=L.isDragging;L.x=et,L.y=we,($e||(Ke||Ue)&&(Math.abs(L.startX-et)>=s||Math.abs(L.startY-we)>=s))&&(I=$e?2:1,$e||(L.isDragging=!0),Ve(Ke,Ue))}},dt=L.onPress=function(Re){xe(Re,1)||Re&&Re.button||(L.axis=J=null,Le.pause(),L.isPressed=!0,Re=Al(Re),ie=ue=0,L.startX=L.x=Re.clientX,L.startY=L.y=Re.clientY,L._vx.reset(),L._vy.reset(),Yn(V?a:pe,nr[1],Ge,ne,!0),L.deltaX=L.deltaY=0,y&&y(L))},F=L.onRelease=function(Re){if(!xe(Re,1)){Wn(V?a:pe,nr[1],Ge,!0);var Ne=!isNaN(L.y-L.startY),et=L.isDragging,we=et&&(Math.abs(L.x-L.startX)>3||Math.abs(L.y-L.startY)>3),Ke=Al(Re);!we&&Ne&&(L._vx.reset(),L._vy.reset(),u&&k&&Rn.delayedCall(.08,function(){if(cc()-Fe>300&&!Re.defaultPrevented){if(Re.target.click)Re.target.click();else if(pe.createEvent){var Ue=pe.createEvent("MouseEvents");Ue.initMouseEvent("click",!0,!0,Ci,1,Ke.screenX,Ke.screenY,Ke.clientX,Ke.clientY,!1,!1,!1,!1,0,null),Re.target.dispatchEvent(Ue)}}})),L.isDragging=L.isGesturing=L.isPressed=!1,f&&et&&!V&&Le.restart(!0),I&&Be(),p&&et&&p(L),x&&x(L,we)}},be=function(Ne){return Ne.touches&&Ne.touches.length>1&&(L.isGesturing=!0)&&he(Ne,L.isDragging)},se=function(){return(L.isGesturing=!1)||O(L)},ce=function(Ne){if(!xe(Ne)){var et=R(),we=T();Se((et-U)*de,(we-Y)*de,1),U=et,Y=we,f&&Le.restart(!0)}},Me=function(Ne){if(!xe(Ne)){Ne=Al(Ne,u),ge&&(w=!0);var et=(Ne.deltaMode===1?l:Ne.deltaMode===2?Ci.innerHeight:1)*_;Se(Ne.deltaX*et,Ne.deltaY*et,0),f&&!V&&Le.restart(!0)}},Te=function(Ne){if(!xe(Ne)){var et=Ne.clientX,we=Ne.clientY,Ke=et-L.x,Ue=we-L.y;L.x=et,L.y=we,D=!0,f&&Le.restart(!0),(Ke||Ue)&&Ve(Ke,Ue)}},qe=function(Ne){L.event=Ne,q(L)},mt=function(Ne){L.event=Ne,Q(L)},Xt=function(Ne){return xe(Ne)||Al(Ne,u)&&te(L)};Le=L._dc=Rn.delayedCall(h||.25,Oe).pause(),L.deltaX=L.deltaY=0,L._vx=Ip(0,50,!0),L._vy=Ip(0,50,!0),L.scrollX=R,L.scrollY=T,L.isDragging=L.isGesturing=L.isPressed=!1,PM(this),L.enable=function(Re){return L.isEnabled||(Yn(Z?pe:a,"scroll",Lp),o.indexOf("scroll")>=0&&Yn(Z?pe:a,"scroll",ce,ne,ye),o.indexOf("wheel")>=0&&Yn(a,"wheel",Me,ne,ye),(o.indexOf("touch")>=0&&RM||o.indexOf("pointer")>=0)&&(Yn(a,nr[0],dt,ne,ye),Yn(pe,nr[2],F),Yn(pe,nr[3],F),k&&Yn(a,"click",me,!0,!0),te&&Yn(a,"click",Xt),he&&Yn(pe,"gesturestart",be),O&&Yn(pe,"gestureend",se),q&&Yn(a,_o+"enter",qe),Q&&Yn(a,_o+"leave",mt),W&&Yn(a,_o+"move",Te)),L.isEnabled=!0,L.isDragging=L.isGesturing=L.isPressed=D=I=!1,L._vx.reset(),L._vy.reset(),U=R(),Y=T(),Re&&Re.type&&dt(Re),Ce&&Ce(L)),L},L.disable=function(){L.isEnabled&&(ba.filter(function(Re){return Re!==L&&uc(Re.target)}).length||Wn(Z?pe:a,"scroll",Lp),L.isPressed&&(L._vx.reset(),L._vy.reset(),Wn(V?a:pe,nr[1],Ge,!0)),Wn(Z?pe:a,"scroll",ce,ye),Wn(a,"wheel",Me,ye),Wn(a,nr[0],dt,ye),Wn(pe,nr[2],F),Wn(pe,nr[3],F),Wn(a,"click",me,!0),Wn(a,"click",Xt),Wn(pe,"gesturestart",be),Wn(pe,"gestureend",se),Wn(a,_o+"enter",qe),Wn(a,_o+"leave",mt),Wn(a,_o+"move",Te),L.isEnabled=L.isPressed=L.isDragging=!1,ze&&ze(L))},L.kill=L.revert=function(){L.disable();var Re=ba.indexOf(L);Re>=0&&ba.splice(Re,1),ns===L&&(ns=0)},ba.push(L),V&&uc(a)&&(ns=L),L.enable(g)},bR(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i}();Zt.version="3.12.7";Zt.create=function(i){return new Zt(i)};Zt.register=NM;Zt.getAll=function(){return ba.slice()};Zt.getById=function(i){return ba.filter(function(e){return e.vars.id===i})[0]};DM()&&Rn.registerPlugin(Zt);/*!
 * ScrollTrigger 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ie,_a,lt,Nt,Ai,Et,D_,kf,Bc,fc,Gl,lu,Ln,mh,Np,Jn,z0,H0,ga,OM,$h,UM,$n,Op,FM,BM,Es,Up,L_,Fa,I_,zf,Fp,Kh,cu=1,In=Date.now,Zh=In(),Ki=0,Wl=0,V0=function(e,t,n){var r=Ti(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},G0=function(e,t){return t&&(!Ti(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},TR=function i(){return Wl&&requestAnimationFrame(i)},W0=function(){return mh=1},X0=function(){return mh=0},yr=function(e){return e},Xl=function(e){return Math.round(e*1e5)/1e5||0},kM=function(){return typeof window<"u"},zM=function(){return Ie||kM()&&(Ie=window.gsap)&&Ie.registerPlugin&&Ie},Bo=function(e){return!!~D_.indexOf(e)},HM=function(e){return(e==="Height"?I_:lt["inner"+e])||Ai["client"+e]||Et["client"+e]},VM=function(e){return Gs(e,"getBoundingClientRect")||(Bo(e)?function(){return ff.width=lt.innerWidth,ff.height=I_,ff}:function(){return es(e)})},wR=function(e,t,n){var r=n.d,s=n.d2,o=n.a;return(o=Gs(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?HM(s):e["client"+s])||0}},AR=function(e,t){return!t||~Pr.indexOf(e)?VM(e):function(){return ff}},Tr=function(e,t){var n=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+r)&&(o=Gs(e,n))?o()-VM(e)()[s]:Bo(e)?(Ai[n]||Et[n])-HM(r):e[n]-e["offset"+r])},uu=function(e,t){for(var n=0;n<ga.length;n+=3)(!t||~t.indexOf(ga[n+1]))&&e(ga[n],ga[n+1],ga[n+2])},Ti=function(e){return typeof e=="string"},Fn=function(e){return typeof e=="function"},jl=function(e){return typeof e=="number"},go=function(e){return typeof e=="object"},Rl=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Jh=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},$o=Math.abs,GM="left",WM="top",N_="right",O_="bottom",Lo="width",Io="height",hc="Right",dc="Left",pc="Top",mc="Bottom",nn="padding",Wi="margin",il="Width",U_="Height",fn="px",Xi=function(e){return lt.getComputedStyle(e)},RR=function(e){var t=Xi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},j0=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},es=function(e,t){var n=t&&Xi(e)[Np]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ie.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},Hf=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},XM=function(e){var t=[],n=e.labels,r=e.duration(),s;for(s in n)t.push(n[s]/r);return t},CR=function(e){return function(t){return Ie.utils.snap(XM(e),t)}},F_=function(e){var t=Ie.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return n?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<n.length;a++)if(n[a]>=r)return n[a];return n[a-1]}else for(a=n.length,r+=o;a--;)if(n[a]<=r)return n[a];return n[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},PR=function(e){return function(t,n){return F_(XM(e))(t,n.direction)}},fu=function(e,t,n,r){return n.split(",").forEach(function(s){return e(t,s,r)})},xn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:!r,capture:!!s})},gn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},hu=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Y0={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},du={toggleActions:"play",anticipatePin:0},Vf={top:0,left:0,center:.5,bottom:1,right:1},af=function(e,t){if(Ti(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in Vf?Vf[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},pu=function(e,t,n,r,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,_=Nt.createElement("div"),g=Bo(n)||Gs(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=g?Et:n,v=e.indexOf("start")!==-1,y=v?c:u,x="border-color:"+y+";font-size:"+f+";color:"+y+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(x+=(r===hn?N_:O_)+":"+(o+parseFloat(h))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=v,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=x,_.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+r.op.d2],lf(_,0,r,v),_},lf=function(e,t,n,r){var s={display:"block"},o=n[r?"os2":"p2"],a=n[r?"p2":"os2"];e._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+o+il]=1,s["border"+a+il]=0,s[n.p]=t+"px",Ie.set(e,s)},st=[],Bp={},kc,q0=function(){return In()-Ki>34&&(kc||(kc=requestAnimationFrame(as)))},Ko=function(){(!$n||!$n.isPressed||$n.startX>Et.clientWidth)&&(ct.cache++,$n?kc||(kc=requestAnimationFrame(as)):as(),Ki||zo("scrollStart"),Ki=In())},Qh=function(){BM=lt.innerWidth,FM=lt.innerHeight},Yl=function(e){ct.cache++,(e===!0||!Ln&&!UM&&!Nt.fullscreenElement&&!Nt.webkitFullscreenElement&&(!Op||BM!==lt.innerWidth||Math.abs(lt.innerHeight-FM)>lt.innerHeight*.25))&&kf.restart(!0)},ko={},DR=[],jM=function i(){return gn(ft,"scrollEnd",i)||Mo(!0)},zo=function(e){return ko[e]&&ko[e].map(function(t){return t()})||DR},Ei=[],YM=function(e){for(var t=0;t<Ei.length;t+=5)(!e||Ei[t+4]&&Ei[t+4].query===e)&&(Ei[t].style.cssText=Ei[t+1],Ei[t].getBBox&&Ei[t].setAttribute("transform",Ei[t+2]||""),Ei[t+3].uncache=1)},B_=function(e,t){var n;for(Jn=0;Jn<st.length;Jn++)n=st[Jn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));zf=!0,t&&YM(t),t||zo("revert")},qM=function(e,t){ct.cache++,(t||!Qn)&&ct.forEach(function(n){return Fn(n)&&n.cacheID++&&(n.rec=0)}),Ti(e)&&(lt.history.scrollRestoration=L_=e)},Qn,No=0,$0,LR=function(){if($0!==No){var e=$0=No;requestAnimationFrame(function(){return e===No&&Mo(!0)})}},$M=function(){Et.appendChild(Fa),I_=!$n&&Fa.offsetHeight||lt.innerHeight,Et.removeChild(Fa)},K0=function(e){return Bc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Mo=function(e,t){if(Ai=Nt.documentElement,Et=Nt.body,D_=[lt,Nt,Ai,Et],Ki&&!e&&!zf){xn(ft,"scrollEnd",jM);return}$M(),Qn=ft.isRefreshing=!0,ct.forEach(function(r){return Fn(r)&&++r.cacheID&&(r.rec=r())});var n=zo("refreshInit");OM&&ft.sort(),t||B_(),ct.forEach(function(r){Fn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),st.slice(0).forEach(function(r){return r.refresh()}),zf=!1,st.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),Fp=1,K0(!0),st.forEach(function(r){var s=Tr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),K0(!1),Fp=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),ct.forEach(function(r){Fn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),qM(L_,1),kf.pause(),No++,Qn=2,as(2),st.forEach(function(r){return Fn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Qn=ft.isRefreshing=!1,zo("refresh")},kp=0,cf=1,_c,as=function(e){if(e===2||!Qn&&!zf){ft.isUpdating=!0,_c&&_c.update(0);var t=st.length,n=In(),r=n-Zh>=50,s=t&&st[0].scroll();if(cf=kp>s?-1:1,Qn||(kp=s),r&&(Ki&&!mh&&n-Ki>200&&(Ki=0,zo("scrollEnd")),Gl=Zh,Zh=n),cf<0){for(Jn=t;Jn-- >0;)st[Jn]&&st[Jn].update(0,r);cf=1}else for(Jn=0;Jn<t;Jn++)st[Jn]&&st[Jn].update(0,r);ft.isUpdating=!1}kc=0},zp=[GM,WM,O_,N_,Wi+mc,Wi+hc,Wi+pc,Wi+dc,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],uf=zp.concat([Lo,Io,"boxSizing","max"+il,"max"+U_,"position",Wi,nn,nn+pc,nn+hc,nn+mc,nn+dc]),IR=function(e,t,n){Ba(n);var r=e._gsap;if(r.spacerIsNative)Ba(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},ed=function(e,t,n,r){if(!e._gsap.swappedIn){for(var s=zp.length,o=t.style,a=e.style,l;s--;)l=zp[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[O_]=a[N_]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Lo]=Hf(e,ri)+fn,o[Io]=Hf(e,hn)+fn,o[nn]=a[Wi]=a[WM]=a[GM]="0",Ba(r),a[Lo]=a["max"+il]=n[Lo],a[Io]=a["max"+U_]=n[Io],a[nn]=n[nn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},NR=/([A-Z])/g,Ba=function(e){if(e){var t=e.t.style,n=e.length,r=0,s,o;for((e.t._gsap||Ie.core.getCache(e.t)).uncache=1;r<n;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(NR,"-$1").toLowerCase())}},mu=function(e){for(var t=uf.length,n=e.style,r=[],s=0;s<t;s++)r.push(uf[s],n[uf[s]]);return r.t=e,r},OR=function(e,t,n){for(var r=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},ff={left:0,top:0},Z0=function(e,t,n,r,s,o,a,l,c,u,f,h,d,_){Fn(e)&&(e=e(l)),Ti(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?af("0"+e.substr(3),n):0));var g=d?d.time():0,m,p,v;if(d&&d.seek(0),isNaN(e)||(e=+e),jl(e))d&&(e=Ie.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),a&&lf(a,n,r,!0);else{Fn(t)&&(t=t(l));var y=(e||"0").split(" "),x,E,A,b;v=fi(t,l)||Et,x=es(v)||{},(!x||!x.left&&!x.top)&&Xi(v).display==="none"&&(b=v.style.display,v.style.display="block",x=es(v),b?v.style.display=b:v.style.removeProperty("display")),E=af(y[0],x[r.d]),A=af(y[1]||"0",n),e=x[r.p]-c[r.p]-u+E+s-A,a&&lf(a,A,r,n-A<20||a._isStart&&A>20),n-=n-A}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var C=e+n,S=o._isStart;m="scroll"+r.d2,lf(o,C,r,S&&C>20||!S&&(f?Math.max(Et[m],Ai[m]):o.parentNode[m])<=C+1),f&&(c=es(a),f&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+fn))}return d&&v&&(m=es(v),d.seek(h),p=es(v),d._caScrollDist=m[r.p]-p[r.p],e=e/d._caScrollDist*h),d&&d.seek(g),d?e:Math.round(e)},UR=/(webkit|moz|length|cssText|inset)/i,J0=function(e,t,n,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===Et){e._stOrig=s.cssText,a=Xi(e);for(o in a)!+o&&!UR.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=r}else s.cssText=e._stOrig;Ie.core.getCache(e).uncache=1,t.appendChild(e)}},KM=function(e,t,n){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=r,r=Math.round(o),r}},_u=function(e,t,n){var r={};r[t.p]="+="+n,Ie.set(e,r)},Q0=function(e,t){var n=qs(e,t),r="_scroll"+t.p2,s=function o(a,l,c,u,f){var h=o.tween,d=l.onComplete,_={};c=c||n();var g=KM(n,c,function(){h.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,h&&h.kill(),l[r]=a,l.inherit=!1,l.modifiers=_,_[r]=function(){return g(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){ct.cache++,o.tween&&as()},l.onComplete=function(){o.tween=0,d&&d.call(h)},h=o.tween=Ie.to(e,l),h};return e[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},xn(e,"wheel",n.wheelHandler),ft.isTouch&&xn(e,"touchmove",n.wheelHandler),s},ft=function(){function i(t,n){_a||i.register(Ie)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Up(this),this.init(t,n)}var e=i.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Wl){this.update=this.refresh=this.kill=yr;return}n=j0(Ti(n)||jl(n)||n.nodeType?{trigger:n}:n,du);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,v=s.onSnapComplete,y=s.once,x=s.snap,E=s.pinReparent,A=s.pinSpacer,b=s.containerAnimation,C=s.fastScrollEnd,S=s.preventOverlaps,M=n.horizontal||n.containerAnimation&&n.horizontal!==!1?ri:hn,N=!f&&f!==0,B=fi(n.scroller||lt),z=Ie.core.getCache(B),q=Bo(B),Q=("pinType"in n?n.pinType:Gs(B,"pinType")||q&&"fixed")==="fixed",W=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],j=N&&n.toggleActions.split(" "),V="markers"in n?n.markers:du.markers,he=q?0:parseFloat(Xi(B)["border"+M.p2+il])||0,O=this,ge=n.onRefreshInit&&function(){return n.onRefreshInit(O)},Ce=wR(B,q,M),ze=AR(B,q),te=0,de=0,ye=0,k=qs(B,M),oe,le,ae,Le,I,D,w,re,J,L,ie,ue,ne,R,T,U,Y,$,Z,pe,fe,ve,Fe,me,xe,Oe,Be,Se,Ve,Ge,dt,F,be,se,ce,Me,Te,qe,mt;if(O._startClamp=O._endClamp=!1,O._dir=M,m*=45,O.scroller=B,O.scroll=b?b.time.bind(b):k,Le=k(),O.vars=n,r=r||n.animation,"refreshPriority"in n&&(OM=1,n.refreshPriority===-9999&&(_c=O)),z.tweenScroll=z.tweenScroll||{top:Q0(B,hn),left:Q0(B,ri)},O.tweenTo=oe=z.tweenScroll[M.p],O.scrubDuration=function(we){be=jl(we)&&we,be?F?F.duration(we):F=Ie.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:be,paused:!0,onComplete:function(){return p&&p(O)}}):(F&&F.progress(1).kill(),F=0)},r&&(r.vars.lazy=!1,r._initted&&!O.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),O.animation=r.pause(),r.scrollTrigger=O,O.scrubDuration(f),Ge=0,l||(l=r.vars.id)),x&&((!go(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in Et.style&&Ie.set(q?[Et,Ai]:B,{scrollBehavior:"auto"}),ct.forEach(function(we){return Fn(we)&&we.target===(q?Nt.scrollingElement||Ai:B)&&(we.smooth=!1)}),ae=Fn(x.snapTo)?x.snapTo:x.snapTo==="labels"?CR(r):x.snapTo==="labelsDirectional"?PR(r):x.directional!==!1?function(we,Ke){return F_(x.snapTo)(we,In()-de<500?0:Ke.direction)}:Ie.utils.snap(x.snapTo),se=x.duration||{min:.1,max:2},se=go(se)?fc(se.min,se.max):fc(se,se),ce=Ie.delayedCall(x.delay||be/2||.1,function(){var we=k(),Ke=In()-de<500,Ue=oe.tween;if((Ke||Math.abs(O.getVelocity())<10)&&!Ue&&!mh&&te!==we){var $e=(we-D)/R,$t=r&&!N?r.totalProgress():$e,at=Ke?0:($t-dt)/(In()-Gl)*1e3||0,It=Ie.utils.clamp(-$e,1-$e,$o(at/2)*at/.185),an=$e+(x.inertia===!1?0:It),Pt,Dt,yt=x,vi=yt.onStart,Bt=yt.onInterrupt,Vn=yt.onComplete;if(Pt=ae(an,O),jl(Pt)||(Pt=an),Dt=Math.max(0,Math.round(D+Pt*R)),we<=w&&we>=D&&Dt!==we){if(Ue&&!Ue._initted&&Ue.data<=$o(Dt-we))return;x.inertia===!1&&(It=Pt-$e),oe(Dt,{duration:se($o(Math.max($o(an-$t),$o(Pt-$t))*.185/at/.05||0)),ease:x.ease||"power3",data:$o(Dt-we),onInterrupt:function(){return ce.restart(!0)&&Bt&&Bt(O)},onComplete:function(){O.update(),te=k(),r&&!N&&(F?F.resetTo("totalProgress",Pt,r._tTime/r._tDur):r.progress(Pt)),Ge=dt=r&&!N?r.totalProgress():O.progress,v&&v(O),Vn&&Vn(O)}},we,It*R,Dt-we-It*R),vi&&vi(O,oe.tween)}}else O.isActive&&te!==we&&ce.restart(!0)}).pause()),l&&(Bp[l]=O),h=O.trigger=fi(h||d!==!0&&d),mt=h&&h._gsap&&h._gsap.stRevert,mt&&(mt=mt(O)),d=d===!0?h:fi(d),Ti(a)&&(a={targets:h,className:a}),d&&(_===!1||_===Wi||(_=!_&&d.parentNode&&d.parentNode.style&&Xi(d.parentNode).display==="flex"?!1:nn),O.pin=d,le=Ie.core.getCache(d),le.spacer?T=le.pinState:(A&&(A=fi(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),le.spacerIsNative=!!A,A&&(le.spacerState=mu(A))),le.spacer=$=A||Nt.createElement("div"),$.classList.add("pin-spacer"),l&&$.classList.add("pin-spacer-"+l),le.pinState=T=mu(d)),n.force3D!==!1&&Ie.set(d,{force3D:!0}),O.spacer=$=le.spacer,Ve=Xi(d),me=Ve[_+M.os2],pe=Ie.getProperty(d),fe=Ie.quickSetter(d,M.a,fn),ed(d,$,Ve),Y=mu(d)),V){ue=go(V)?j0(V,Y0):Y0,L=pu("scroller-start",l,B,M,ue,0),ie=pu("scroller-end",l,B,M,ue,0,L),Z=L["offset"+M.op.d2];var Xt=fi(Gs(B,"content")||B);re=this.markerStart=pu("start",l,Xt,M,ue,Z,0,b),J=this.markerEnd=pu("end",l,Xt,M,ue,Z,0,b),b&&(qe=Ie.quickSetter([re,J],M.a,fn)),!Q&&!(Pr.length&&Gs(B,"fixedMarkers")===!0)&&(RR(q?Et:B),Ie.set([L,ie],{force3D:!0}),Oe=Ie.quickSetter(L,M.a,fn),Se=Ie.quickSetter(ie,M.a,fn))}if(b){var Re=b.vars.onUpdate,Ne=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){O.update(0,0,1),Re&&Re.apply(b,Ne||[])})}if(O.previous=function(){return st[st.indexOf(O)-1]},O.next=function(){return st[st.indexOf(O)+1]},O.revert=function(we,Ke){if(!Ke)return O.kill(!0);var Ue=we!==!1||!O.enabled,$e=Ln;Ue!==O.isReverted&&(Ue&&(Me=Math.max(k(),O.scroll.rec||0),ye=O.progress,Te=r&&r.progress()),re&&[re,J,L,ie].forEach(function($t){return $t.style.display=Ue?"none":"block"}),Ue&&(Ln=O,O.update(Ue)),d&&(!E||!O.isActive)&&(Ue?IR(d,$,T):ed(d,$,Xi(d),xe)),Ue||O.update(Ue),Ln=$e,O.isReverted=Ue)},O.refresh=function(we,Ke,Ue,$e){if(!((Ln||!O.enabled)&&!Ke)){if(d&&we&&Ki){xn(i,"scrollEnd",jM);return}!Qn&&ge&&ge(O),Ln=O,oe.tween&&!Ue&&(oe.tween.kill(),oe.tween=0),F&&F.pause(),g&&r&&r.revert({kill:!1}).invalidate(),O.isReverted||O.revert(!0,!0),O._subPinOffset=!1;var $t=Ce(),at=ze(),It=b?b.duration():Tr(B,M),an=R<=.01,Pt=0,Dt=$e||0,yt=go(Ue)?Ue.end:n.end,vi=n.endTrigger||h,Bt=go(Ue)?Ue.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),Vn=O.pinnedContainer=n.pinnedContainer&&fi(n.pinnedContainer,O),Fi=h&&Math.max(0,st.indexOf(O))||0,ln=Fi,cn,P,X,ee,K,G,_e,Ae,De,Pe,He,Ye,ke;for(V&&go(Ue)&&(Ye=Ie.getProperty(L,M.p),ke=Ie.getProperty(ie,M.p));ln-- >0;)G=st[ln],G.end||G.refresh(0,1)||(Ln=O),_e=G.pin,_e&&(_e===h||_e===d||_e===Vn)&&!G.isReverted&&(Pe||(Pe=[]),Pe.unshift(G),G.revert(!0,!0)),G!==st[ln]&&(Fi--,ln--);for(Fn(Bt)&&(Bt=Bt(O)),Bt=V0(Bt,"start",O),D=Z0(Bt,h,$t,M,k(),re,L,O,at,he,Q,It,b,O._startClamp&&"_startClamp")||(d?-.001:0),Fn(yt)&&(yt=yt(O)),Ti(yt)&&!yt.indexOf("+=")&&(~yt.indexOf(" ")?yt=(Ti(Bt)?Bt.split(" ")[0]:"")+yt:(Pt=af(yt.substr(2),$t),yt=Ti(Bt)?Bt:(b?Ie.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,D):D)+Pt,vi=h)),yt=V0(yt,"end",O),w=Math.max(D,Z0(yt||(vi?"100% 0":It),vi,$t,M,k()+Pt,J,ie,O,at,he,Q,It,b,O._endClamp&&"_endClamp"))||-.001,Pt=0,ln=Fi;ln--;)G=st[ln],_e=G.pin,_e&&G.start-G._pinPush<=D&&!b&&G.end>0&&(cn=G.end-(O._startClamp?Math.max(0,G.start):G.start),(_e===h&&G.start-G._pinPush<D||_e===Vn)&&isNaN(Bt)&&(Pt+=cn*(1-G.progress)),_e===d&&(Dt+=cn));if(D+=Pt,w+=Pt,O._startClamp&&(O._startClamp+=Pt),O._endClamp&&!Qn&&(O._endClamp=w||-.001,w=Math.min(w,Tr(B,M))),R=w-D||(D-=.01)&&.001,an&&(ye=Ie.utils.clamp(0,1,Ie.utils.normalize(D,w,Me))),O._pinPush=Dt,re&&Pt&&(cn={},cn[M.a]="+="+Pt,Vn&&(cn[M.p]="-="+k()),Ie.set([re,J],cn)),d&&!(Fp&&O.end>=Tr(B,M)))cn=Xi(d),ee=M===hn,X=k(),ve=parseFloat(pe(M.a))+Dt,!It&&w>1&&(He=(q?Nt.scrollingElement||Ai:B).style,He={style:He,value:He["overflow"+M.a.toUpperCase()]},q&&Xi(Et)["overflow"+M.a.toUpperCase()]!=="scroll"&&(He.style["overflow"+M.a.toUpperCase()]="scroll")),ed(d,$,cn),Y=mu(d),P=es(d,!0),Ae=Q&&qs(B,ee?ri:hn)(),_?(xe=[_+M.os2,R+Dt+fn],xe.t=$,ln=_===nn?Hf(d,M)+R+Dt:0,ln&&(xe.push(M.d,ln+fn),$.style.flexBasis!=="auto"&&($.style.flexBasis=ln+fn)),Ba(xe),Vn&&st.forEach(function(rt){rt.pin===Vn&&rt.vars.pinSpacing!==!1&&(rt._subPinOffset=!0)}),Q&&k(Me)):(ln=Hf(d,M),ln&&$.style.flexBasis!=="auto"&&($.style.flexBasis=ln+fn)),Q&&(K={top:P.top+(ee?X-D:Ae)+fn,left:P.left+(ee?Ae:X-D)+fn,boxSizing:"border-box",position:"fixed"},K[Lo]=K["max"+il]=Math.ceil(P.width)+fn,K[Io]=K["max"+U_]=Math.ceil(P.height)+fn,K[Wi]=K[Wi+pc]=K[Wi+hc]=K[Wi+mc]=K[Wi+dc]="0",K[nn]=cn[nn],K[nn+pc]=cn[nn+pc],K[nn+hc]=cn[nn+hc],K[nn+mc]=cn[nn+mc],K[nn+dc]=cn[nn+dc],U=OR(T,K,E),Qn&&k(0)),r?(De=r._initted,$h(1),r.render(r.duration(),!0,!0),Fe=pe(M.a)-ve+R+Dt,Be=Math.abs(R-Fe)>1,Q&&Be&&U.splice(U.length-2,2),r.render(0,!0,!0),De||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),$h(0)):Fe=R,He&&(He.value?He.style["overflow"+M.a.toUpperCase()]=He.value:He.style.removeProperty("overflow-"+M.a));else if(h&&k()&&!b)for(P=h.parentNode;P&&P!==Et;)P._pinOffset&&(D-=P._pinOffset,w-=P._pinOffset),P=P.parentNode;Pe&&Pe.forEach(function(rt){return rt.revert(!1,!0)}),O.start=D,O.end=w,Le=I=Qn?Me:k(),!b&&!Qn&&(Le<Me&&k(Me),O.scroll.rec=0),O.revert(!1,!0),de=In(),ce&&(te=-1,ce.restart(!0)),Ln=0,r&&N&&(r._initted||Te)&&r.progress()!==Te&&r.progress(Te||0,!0).render(r.time(),!0,!0),(an||ye!==O.progress||b||g||r&&!r._initted)&&(r&&!N&&r.totalProgress(b&&D<-.001&&!ye?Ie.utils.normalize(D,w,0):ye,!0),O.progress=an||(Le-D)/R===ye?0:ye),d&&_&&($._pinOffset=Math.round(O.progress*Fe)),F&&F.invalidate(),isNaN(Ye)||(Ye-=Ie.getProperty(L,M.p),ke-=Ie.getProperty(ie,M.p),_u(L,M,Ye),_u(re,M,Ye-($e||0)),_u(ie,M,ke),_u(J,M,ke-($e||0))),an&&!Qn&&O.update(),u&&!Qn&&!ne&&(ne=!0,u(O),ne=!1)}},O.getVelocity=function(){return(k()-I)/(In()-Gl)*1e3||0},O.endAnimation=function(){Rl(O.callbackAnimation),r&&(F?F.progress(1):r.paused()?N||Rl(r,O.direction<0,1):Rl(r,r.reversed()))},O.labelToScroll=function(we){return r&&r.labels&&(D||O.refresh()||D)+r.labels[we]/r.duration()*R||0},O.getTrailing=function(we){var Ke=st.indexOf(O),Ue=O.direction>0?st.slice(0,Ke).reverse():st.slice(Ke+1);return(Ti(we)?Ue.filter(function($e){return $e.vars.preventOverlaps===we}):Ue).filter(function($e){return O.direction>0?$e.end<=D:$e.start>=w})},O.update=function(we,Ke,Ue){if(!(b&&!Ue&&!we)){var $e=Qn===!0?Me:O.scroll(),$t=we?0:($e-D)/R,at=$t<0?0:$t>1?1:$t||0,It=O.progress,an,Pt,Dt,yt,vi,Bt,Vn,Fi;if(Ke&&(I=Le,Le=b?k():$e,x&&(dt=Ge,Ge=r&&!N?r.totalProgress():at)),m&&d&&!Ln&&!cu&&Ki&&(!at&&D<$e+($e-I)/(In()-Gl)*m?at=1e-4:at===1&&w>$e+($e-I)/(In()-Gl)*m&&(at=.9999)),at!==It&&O.enabled){if(an=O.isActive=!!at&&at<1,Pt=!!It&&It<1,Bt=an!==Pt,vi=Bt||!!at!=!!It,O.direction=at>It?1:-1,O.progress=at,vi&&!Ln&&(Dt=at&&!It?0:at===1?1:It===1?2:3,N&&(yt=!Bt&&j[Dt+1]!=="none"&&j[Dt+1]||j[Dt],Fi=r&&(yt==="complete"||yt==="reset"||yt in r))),S&&(Bt||Fi)&&(Fi||f||!r)&&(Fn(S)?S(O):O.getTrailing(S).forEach(function(X){return X.endAnimation()})),N||(F&&!Ln&&!cu?(F._dp._time-F._start!==F._time&&F.render(F._dp._time-F._start),F.resetTo?F.resetTo("totalProgress",at,r._tTime/r._tDur):(F.vars.totalProgress=at,F.invalidate().restart())):r&&r.totalProgress(at,!!(Ln&&(de||we)))),d){if(we&&_&&($.style[_+M.os2]=me),!Q)fe(Xl(ve+Fe*at));else if(vi){if(Vn=!we&&at>It&&w+1>$e&&$e+1>=Tr(B,M),E)if(!we&&(an||Vn)){var ln=es(d,!0),cn=$e-D;J0(d,Et,ln.top+(M===hn?cn:0)+fn,ln.left+(M===hn?0:cn)+fn)}else J0(d,$);Ba(an||Vn?U:Y),Be&&at<1&&an||fe(ve+(at===1&&!Vn?Fe:0))}}x&&!oe.tween&&!Ln&&!cu&&ce.restart(!0),a&&(Bt||y&&at&&(at<1||!Kh))&&Bc(a.targets).forEach(function(X){return X.classList[an||y?"add":"remove"](a.className)}),o&&!N&&!we&&o(O),vi&&!Ln?(N&&(Fi&&(yt==="complete"?r.pause().totalProgress(1):yt==="reset"?r.restart(!0).pause():yt==="restart"?r.restart(!0):r[yt]()),o&&o(O)),(Bt||!Kh)&&(c&&Bt&&Jh(O,c),W[Dt]&&Jh(O,W[Dt]),y&&(at===1?O.kill(!1,1):W[Dt]=0),Bt||(Dt=at===1?1:3,W[Dt]&&Jh(O,W[Dt]))),C&&!an&&Math.abs(O.getVelocity())>(jl(C)?C:2500)&&(Rl(O.callbackAnimation),F?F.progress(1):Rl(r,yt==="reverse"?1:!at,1))):N&&o&&!Ln&&o(O)}if(Se){var P=b?$e/b.duration()*(b._caScrollDist||0):$e;Oe(P+(L._isFlipped?1:0)),Se(P)}qe&&qe(-$e/b.duration()*(b._caScrollDist||0))}},O.enable=function(we,Ke){O.enabled||(O.enabled=!0,xn(B,"resize",Yl),q||xn(B,"scroll",Ko),ge&&xn(i,"refreshInit",ge),we!==!1&&(O.progress=ye=0,Le=I=te=k()),Ke!==!1&&O.refresh())},O.getTween=function(we){return we&&oe?oe.tween:F},O.setPositions=function(we,Ke,Ue,$e){if(b){var $t=b.scrollTrigger,at=b.duration(),It=$t.end-$t.start;we=$t.start+It*we/at,Ke=$t.start+It*Ke/at}O.refresh(!1,!1,{start:G0(we,Ue&&!!O._startClamp),end:G0(Ke,Ue&&!!O._endClamp)},$e),O.update()},O.adjustPinSpacing=function(we){if(xe&&we){var Ke=xe.indexOf(M.d)+1;xe[Ke]=parseFloat(xe[Ke])+we+fn,xe[1]=parseFloat(xe[1])+we+fn,Ba(xe)}},O.disable=function(we,Ke){if(O.enabled&&(we!==!1&&O.revert(!0,!0),O.enabled=O.isActive=!1,Ke||F&&F.pause(),Me=0,le&&(le.uncache=1),ge&&gn(i,"refreshInit",ge),ce&&(ce.pause(),oe.tween&&oe.tween.kill()&&(oe.tween=0)),!q)){for(var Ue=st.length;Ue--;)if(st[Ue].scroller===B&&st[Ue]!==O)return;gn(B,"resize",Yl),q||gn(B,"scroll",Ko)}},O.kill=function(we,Ke){O.disable(we,Ke),F&&!Ke&&F.kill(),l&&delete Bp[l];var Ue=st.indexOf(O);Ue>=0&&st.splice(Ue,1),Ue===Jn&&cf>0&&Jn--,Ue=0,st.forEach(function($e){return $e.scroller===O.scroller&&(Ue=1)}),Ue||Qn||(O.scroll.rec=0),r&&(r.scrollTrigger=null,we&&r.revert({kill:!1}),Ke||r.kill()),re&&[re,J,L,ie].forEach(function($e){return $e.parentNode&&$e.parentNode.removeChild($e)}),_c===O&&(_c=0),d&&(le&&(le.uncache=1),Ue=0,st.forEach(function($e){return $e.pin===d&&Ue++}),Ue||(le.spacer=0)),n.onKill&&n.onKill(O)},st.push(O),O.enable(!1,!1),mt&&mt(O),r&&r.add&&!R){var et=O.update;O.update=function(){O.update=et,ct.cache++,D||w||O.refresh()},Ie.delayedCall(.01,O.update),R=.01,D=w=0}else O.refresh();d&&LR()},i.register=function(n){return _a||(Ie=n||zM(),kM()&&window.document&&i.enable(),_a=Wl),_a},i.defaults=function(n){if(n)for(var r in n)du[r]=n[r];return du},i.disable=function(n,r){Wl=0,st.forEach(function(o){return o[r?"kill":"disable"](n)}),gn(lt,"wheel",Ko),gn(Nt,"scroll",Ko),clearInterval(lu),gn(Nt,"touchcancel",yr),gn(Et,"touchstart",yr),fu(gn,Nt,"pointerdown,touchstart,mousedown",W0),fu(gn,Nt,"pointerup,touchend,mouseup",X0),kf.kill(),uu(gn);for(var s=0;s<ct.length;s+=3)hu(gn,ct[s],ct[s+1]),hu(gn,ct[s],ct[s+2])},i.enable=function(){if(lt=window,Nt=document,Ai=Nt.documentElement,Et=Nt.body,Ie&&(Bc=Ie.utils.toArray,fc=Ie.utils.clamp,Up=Ie.core.context||yr,$h=Ie.core.suppressOverwrites||yr,L_=lt.history.scrollRestoration||"auto",kp=lt.pageYOffset||0,Ie.core.globals("ScrollTrigger",i),Et)){Wl=1,Fa=document.createElement("div"),Fa.style.height="100vh",Fa.style.position="absolute",$M(),TR(),Zt.register(Ie),i.isTouch=Zt.isTouch,Es=Zt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Op=Zt.isTouch===1,xn(lt,"wheel",Ko),D_=[lt,Nt,Ai,Et],Ie.matchMedia?(i.matchMedia=function(c){var u=Ie.matchMedia(),f;for(f in c)u.add(f,c[f]);return u},Ie.addEventListener("matchMediaInit",function(){return B_()}),Ie.addEventListener("matchMediaRevert",function(){return YM()}),Ie.addEventListener("matchMedia",function(){Mo(0,1),zo("matchMedia")}),Ie.matchMedia().add("(orientation: portrait)",function(){return Qh(),Qh})):console.warn("Requires GSAP 3.11.0 or later"),Qh(),xn(Nt,"scroll",Ko);var n=Et.hasAttribute("style"),r=Et.style,s=r.borderTopStyle,o=Ie.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=es(Et),hn.m=Math.round(a.top+hn.sc())||0,ri.m=Math.round(a.left+ri.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),n||(Et.setAttribute("style",""),Et.removeAttribute("style")),lu=setInterval(q0,250),Ie.delayedCall(.5,function(){return cu=0}),xn(Nt,"touchcancel",yr),xn(Et,"touchstart",yr),fu(xn,Nt,"pointerdown,touchstart,mousedown",W0),fu(xn,Nt,"pointerup,touchend,mouseup",X0),Np=Ie.utils.checkPrefix("transform"),uf.push(Np),_a=In(),kf=Ie.delayedCall(.2,Mo).pause(),ga=[Nt,"visibilitychange",function(){var c=lt.innerWidth,u=lt.innerHeight;Nt.hidden?(z0=c,H0=u):(z0!==c||H0!==u)&&Yl()},Nt,"DOMContentLoaded",Mo,lt,"load",Mo,lt,"resize",Yl],uu(xn),st.forEach(function(c){return c.enable(0,1)}),l=0;l<ct.length;l+=3)hu(gn,ct[l],ct[l+1]),hu(gn,ct[l],ct[l+2])}},i.config=function(n){"limitCallbacks"in n&&(Kh=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(lu)||(lu=r)&&setInterval(q0,r),"ignoreMobileResize"in n&&(Op=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(uu(gn)||uu(xn,n.autoRefreshEvents||"none"),UM=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=fi(n),o=ct.indexOf(s),a=Bo(s);~o&&ct.splice(o,a?6:2),r&&(a?Pr.unshift(lt,r,Et,r,Ai,r):Pr.unshift(s,r))},i.clearMatchMedia=function(n){st.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var o=(Ti(n)?fi(n):n).getBoundingClientRect(),a=o[s?Lo:Io]*r||0;return s?o.right-a>0&&o.left+a<lt.innerWidth:o.bottom-a>0&&o.top+a<lt.innerHeight},i.positionInViewport=function(n,r,s){Ti(n)&&(n=fi(n));var o=n.getBoundingClientRect(),a=o[s?Lo:Io],l=r==null?a/2:r in Vf?Vf[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/lt.innerWidth:(o.top+l)/lt.innerHeight},i.killAll=function(n){if(st.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=ko.killAll||[];ko={},r.forEach(function(s){return s()})}},i}();ft.version="3.12.7";ft.saveStyles=function(i){return i?Bc(i).forEach(function(e){if(e&&e.style){var t=Ei.indexOf(e);t>=0&&Ei.splice(t,5),Ei.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ie.core.getCache(e),Up())}}):Ei};ft.revert=function(i,e){return B_(!i,e)};ft.create=function(i,e){return new ft(i,e)};ft.refresh=function(i){return i?Yl(!0):(_a||ft.register())&&Mo(!0)};ft.update=function(i){return++ct.cache&&as(i===!0?2:0)};ft.clearScrollMemory=qM;ft.maxScroll=function(i,e){return Tr(i,e?ri:hn)};ft.getScrollFunc=function(i,e){return qs(fi(i),e?ri:hn)};ft.getById=function(i){return Bp[i]};ft.getAll=function(){return st.filter(function(i){return i.vars.id!=="ScrollSmoother"})};ft.isScrolling=function(){return!!Ki};ft.snapDirectional=F_;ft.addEventListener=function(i,e){var t=ko[i]||(ko[i]=[]);~t.indexOf(e)||t.push(e)};ft.removeEventListener=function(i,e){var t=ko[i],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ft.batch=function(i,e){var t=[],n={},r=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var f=[],h=[],d=Ie.delayedCall(r,function(){u(f,h),f=[],h=[]}).pause();return function(_){f.length||d.restart(!0),f.push(_.trigger),h.push(_),s<=f.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Fn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Fn(s)&&(s=s(),xn(ft,"refresh",function(){return s=e.batchMax()})),Bc(i).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(ft.create(c))}),t};var ex=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},td=function i(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Zt.isTouch?" pinch-zoom":""):"none",e===Ai&&i(Et,t)},gu={auto:1,scroll:1},FR=function(e){var t=e.event,n=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ie.core.getCache(s),a=In(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Et&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(gu[(l=Xi(s)).overflowY]||gu[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Bo(s)&&(gu[(l=Xi(s)).overflowY]||gu[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},ZM=function(e,t,n,r){return Zt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&FR,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&xn(Nt,Zt.eventTypes[0],nx,!1,!0)},onDisable:function(){return gn(Nt,Zt.eventTypes[0],nx,!0)}})},BR=/(input|label|select|textarea)/i,tx,nx=function(e){var t=BR.test(e.target.tagName);(t||tx)&&(e._gsapAllow=!0,tx=t)},kR=function(e){go(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=fi(e.target)||Ai,u=Ie.core.globals().ScrollSmoother,f=u&&u.get(),h=Es&&(e.content&&fi(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=qs(c,hn),_=qs(c,ri),g=1,m=(Zt.isTouch&&lt.visualViewport?lt.visualViewport.scale*lt.visualViewport.width:lt.outerWidth)/lt.innerWidth,p=0,v=Fn(r)?function(){return r(a)}:function(){return r||2.8},y,x,E=ZM(c,e.type,!0,s),A=function(){return x=!1},b=yr,C=yr,S=function(){l=Tr(c,hn),C=fc(Es?1:0,l),n&&(b=fc(0,Tr(c,ri))),y=No},M=function(){h._gsap.y=Xl(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},N=function(){if(x){requestAnimationFrame(A);var V=Xl(a.deltaY/2),he=C(d.v-V);if(h&&he!==d.v+d.offset){d.offset=he-d.v;var O=Xl((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+O+", 0, 1)",h._gsap.y=O+"px",d.cacheID=ct.cache,as()}return!0}d.offset&&M(),x=!0},B,z,q,Q,W=function(){S(),B.isActive()&&B.vars.scrollY>l&&(d()>l?B.progress(1)&&d(l):B.resetTo("scrollY",l))};return h&&Ie.set(h,{y:"+=0"}),e.ignoreCheck=function(j){return Es&&j.type==="touchmove"&&N()||g>1.05&&j.type!=="touchstart"||a.isGesturing||j.touches&&j.touches.length>1},e.onPress=function(){x=!1;var j=g;g=Xl((lt.visualViewport&&lt.visualViewport.scale||1)/m),B.pause(),j!==g&&td(c,g>1.01?!0:n?!1:"x"),z=_(),q=d(),S(),y=No},e.onRelease=e.onGestureStart=function(j,V){if(d.offset&&M(),!V)Q.restart(!0);else{ct.cache++;var he=v(),O,ge;n&&(O=_(),ge=O+he*.05*-j.velocityX/.227,he*=ex(_,O,ge,Tr(c,ri)),B.vars.scrollX=b(ge)),O=d(),ge=O+he*.05*-j.velocityY/.227,he*=ex(d,O,ge,Tr(c,hn)),B.vars.scrollY=C(ge),B.invalidate().duration(he).play(.01),(Es&&B.vars.scrollY>=l||O>=l-1)&&Ie.to({},{onUpdate:W,duration:he})}o&&o(j)},e.onWheel=function(){B._ts&&B.pause(),In()-p>1e3&&(y=0,p=In())},e.onChange=function(j,V,he,O,ge){if(No!==y&&S(),V&&n&&_(b(O[2]===V?z+(j.startX-j.x):_()+V-O[1])),he){d.offset&&M();var Ce=ge[2]===he,ze=Ce?q+j.startY-j.y:d()+he-ge[1],te=C(ze);Ce&&ze!==te&&(q+=te-ze),d(te)}(he||V)&&as()},e.onEnable=function(){td(c,n?!1:"x"),ft.addEventListener("refresh",W),xn(lt,"resize",W),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),E.enable()},e.onDisable=function(){td(c,!0),gn(lt,"resize",W),ft.removeEventListener("refresh",W),E.kill()},e.lockAxis=e.lockAxis!==!1,a=new Zt(e),a.iOS=Es,Es&&!d()&&d(1),Es&&Ie.ticker.add(yr),Q=a._dc,B=Ie.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:KM(d,d(),function(){return B.pause()})},onUpdate:as,onComplete:Q.vars.onComplete}),a};ft.sort=function(i){if(Fn(i))return st.sort(i);var e=lt.pageYOffset||0;return ft.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+lt.innerHeight}),st.sort(i||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ft.observe=function(i){return new Zt(i)};ft.normalizeScroll=function(i){if(typeof i>"u")return $n;if(i===!0&&$n)return $n.enable();if(i===!1){$n&&$n.kill(),$n=i;return}var e=i instanceof Zt?i:kR(i);return $n&&$n.target===e.target&&$n.kill(),Bo(e.target)&&($n=e),e};ft.core={_getVelocityProp:Ip,_inputObserver:ZM,_scrollers:ct,_proxies:Pr,bridge:{ss:function(){Ki||zo("scrollStart"),Ki=In()},ref:function(){return Ln}}};zM()&&Ie.registerPlugin(ft);dn.registerPlugin(ft);dn.registerPlugin(AM);const zR=(i,e)=>{dn.to(i,{scrollTrigger:{trigger:e,start:"bottom center",toggleActions:"play none none reverse"},duration:.6,scale:1,ease:"power1"})},HR=i=>{dn.to(i,{y:0,duration:.4,ease:"power1.inOut",stagger:.1})},VR=i=>{dn.set(i,{y:"100%"})},GR=(i,e=1,t=.5)=>{dn.to(i,{opacity:e,duration:t,ease:"power4.inOut",scrollTrigger:{trigger:i,toggleActions:"play none none reverse"},stagger:.1})},WR=(i,e=0)=>{dn.set(i,{opacity:e})},XR=(i,e,t,n,r)=>{const s=dn.quickTo(e.value,"x",{duration:1,ease:"elastic.out(1, 0.3)"}),o=dn.quickTo(t.value,"x",{duration:1,ease:"elastic.out(1, 0.3)"}),a=dn.quickTo(t.value,"y",{duration:1,ease:"elastic.out(1, 0.3)"}),l=dn.quickTo(e.value,"y",{duration:1,ease:"elastic.out(1, 0.3)"}),{clientX:c,clientY:u}=i,{width:f,height:h,left:d,top:_}=e.value.getBoundingClientRect(),g=n,m=r,p=((c-d)/f-.5)*g,v=((u-_)/h-.5)*m;s(p),l(v),o(p),a(v)},jR=(i,e)=>{const t=dn.quickTo(i.value,"x",{duration:1,ease:"elastic.out(1, 0.3)"}),n=dn.quickTo(e.value,"x",{duration:1,ease:"elastic.out(1, 0.3)"}),r=dn.quickTo(e.value,"y",{duration:1,ease:"elastic.out(1, 0.3)"}),s=dn.quickTo(i.value,"y",{duration:1,ease:"elastic.out(1, 0.3)"});t(0),s(0),n(0),r(0)},YR=i=>{dn.to(i,{x:"0%",opacity:1,duration:.7})},qR=i=>{const e="100%";dn.to(i,{opacity:0,onComplete:()=>{dn.set(i,{x:e})}})},$R=(i,e,t)=>{YR(i),HR(e),GR(t)},KR=(i,e,t)=>{qR(i),VR(e),WR(t)},ZR=[{label:"GitHub",url:"https://github.com/dspwithaheart"},{label:"LinkedIn",url:"https://www.linkedin.com/in/aayush-y-4434301aa"}];/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const k_="173",ka={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ea={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},JR=0,ix=1,QR=2,JM=1,eC=2,jr=3,fs=0,gi=1,br=2,Ws=0,za=1,rx=2,sx=3,ox=4,tC=5,vo=100,nC=101,iC=102,rC=103,sC=104,oC=200,aC=201,lC=202,cC=203,Hp=204,Vp=205,uC=206,fC=207,hC=208,dC=209,pC=210,mC=211,_C=212,gC=213,xC=214,Gp=0,Wp=1,Xp=2,rl=3,jp=4,Yp=5,qp=6,$p=7,z_=0,vC=1,yC=2,Xs=0,SC=1,MC=2,bC=3,EC=4,TC=5,wC=6,AC=7,ax="attached",RC="detached",QM=300,sl=301,ol=302,Kp=303,Zp=304,_h=306,al=1e3,Us=1001,Gf=1002,oi=1003,eb=1004,ql=1005,Li=1006,hf=1007,is=1008,hs=1009,tb=1010,nb=1011,zc=1012,H_=1013,Ho=1014,or=1015,Zc=1016,V_=1017,G_=1018,ll=1020,ib=35902,rb=1021,sb=1022,qi=1023,ob=1024,ab=1025,Ha=1026,cl=1027,W_=1028,X_=1029,lb=1030,j_=1031,Y_=1033,df=33776,pf=33777,mf=33778,_f=33779,Jp=35840,Qp=35841,em=35842,tm=35843,nm=36196,im=37492,rm=37496,sm=37808,om=37809,am=37810,lm=37811,cm=37812,um=37813,fm=37814,hm=37815,dm=37816,pm=37817,mm=37818,_m=37819,gm=37820,xm=37821,gf=36492,vm=36494,ym=36495,cb=36283,Sm=36284,Mm=36285,bm=36286,Hc=2300,Vc=2301,nd=2302,lx=2400,cx=2401,ux=2402,CC=2500,PC=0,ub=1,Em=2,DC=3200,LC=3201,q_=0,IC=1,Ps="",En="srgb",li="srgb-linear",Wf="linear",Rt="srgb",Zo=7680,fx=519,NC=512,OC=513,UC=514,fb=515,FC=516,BC=517,kC=518,zC=519,Tm=35044,hx="300 es",rs=2e3,Xf=2001;class Wo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let dx=1234567;const gc=Math.PI/180,ul=180/Math.PI;function ur(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[t&63|128]+Pn[t>>8&255]+"-"+Pn[t>>16&255]+Pn[t>>24&255]+Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]).toLowerCase()}function ot(i,e,t){return Math.max(e,Math.min(t,i))}function $_(i,e){return(i%e+e)%e}function HC(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function VC(i,e,t){return i!==e?(t-i)/(e-i):0}function xc(i,e,t){return(1-t)*i+t*e}function GC(i,e,t,n){return xc(i,e,1-Math.exp(-t*n))}function WC(i,e=1){return e-Math.abs($_(i,e*2)-e)}function XC(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function jC(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function YC(i,e){return i+Math.floor(Math.random()*(e-i+1))}function qC(i,e){return i+Math.random()*(e-i)}function $C(i){return i*(.5-Math.random())}function KC(i){i!==void 0&&(dx=i);let e=dx+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ZC(i){return i*gc}function JC(i){return i*ul}function QC(i){return(i&i-1)===0&&i!==0}function eP(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function tP(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function nP(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),h=o((e-n)/2),d=s((n-e)/2),_=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*f,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*_,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*_,a*c);break;case"ZYZ":i.set(l*_,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ir(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function wt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const hb={DEG2RAD:gc,RAD2DEG:ul,generateUUID:ur,clamp:ot,euclideanModulo:$_,mapLinear:HC,inverseLerp:VC,lerp:xc,damp:GC,pingpong:WC,smoothstep:XC,smootherstep:jC,randInt:YC,randFloat:qC,randFloatSpread:$C,seededRandom:KC,degToRad:ZC,radToDeg:JC,isPowerOfTwo:QC,ceilPowerOfTwo:eP,floorPowerOfTwo:tP,setQuaternionFromProperEuler:nP,normalize:wt,denormalize:ir};class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,t,n,r,s,o,a,l,c){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],_=n[8],g=r[0],m=r[3],p=r[6],v=r[1],y=r[4],x=r[7],E=r[2],A=r[5],b=r[8];return s[0]=o*g+a*v+l*E,s[3]=o*m+a*y+l*A,s[6]=o*p+a*x+l*b,s[1]=c*g+u*v+f*E,s[4]=c*m+u*y+f*A,s[7]=c*p+u*x+f*b,s[2]=h*g+d*v+_*E,s[5]=h*m+d*y+_*A,s[8]=h*p+d*x+_*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,_=t*f+n*h+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(r*c-u*n)*g,e[2]=(a*n-r*o)*g,e[3]=h*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(id.makeScale(e,t)),this}rotate(e){return this.premultiply(id.makeRotation(-e)),this}translate(e,t){return this.premultiply(id.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const id=new tt;function db(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Gc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function iP(){const i=Gc("canvas");return i.style.display="block",i}const px={};function xa(i){i in px||(px[i]=!0,console.warn(i))}function rP(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function sP(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function oP(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const mx=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_x=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function aP(){const i={enabled:!0,workingColorSpace:li,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Rt&&(r.r=ls(r.r),r.g=ls(r.g),r.b=ls(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Rt&&(r.r=Va(r.r),r.g=Va(r.g),r.b=Va(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ps?Wf:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[li]:{primaries:e,whitePoint:n,transfer:Wf,toXYZ:mx,fromXYZ:_x,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:e,whitePoint:n,transfer:Rt,toXYZ:mx,fromXYZ:_x,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:En}}}),i}const pt=aP();function ls(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Va(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Jo;class lP{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Jo===void 0&&(Jo=Gc("canvas")),Jo.width=e.width,Jo.height=e.height;const n=Jo.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Jo}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gc("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ls(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ls(t[n]/255)*255):t[n]=ls(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cP=0;class pb{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cP++}),this.uuid=ur(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(rd(r[o].image)):s.push(rd(r[o]))}else s=rd(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function rd(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?lP.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uP=0;class Sn extends Wo{constructor(e=Sn.DEFAULT_IMAGE,t=Sn.DEFAULT_MAPPING,n=Us,r=Us,s=Li,o=is,a=qi,l=hs,c=Sn.DEFAULT_ANISOTROPY,u=Ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uP++}),this.uuid=ur(),this.name="",this.source=new pb(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==QM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case al:e.x=e.x-Math.floor(e.x);break;case Us:e.x=e.x<0?0:1;break;case Gf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case al:e.y=e.y-Math.floor(e.y);break;case Us:e.y=e.y<0?0:1;break;case Gf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=QM;Sn.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,n=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,x=(d+1)/2,E=(p+1)/2,A=(u+h)/4,b=(f+g)/4,C=(_+m)/4;return y>x&&y>E?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=A/n,s=b/n):x>E?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=A/r,s=C/r):E<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),n=b/s,r=C/s),this.set(n,r,s,t),this}let v=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(f-g)/v,this.z=(h-u)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fP extends Wo{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Sn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new pb(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vo extends fP{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class mb extends Sn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=oi,this.minFilter=oi,this.wrapR=Us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hP extends Sn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=oi,this.minFilter=oi,this.wrapR=Us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ir{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const h=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(f!==g||l!==h||c!==d||u!==_){let m=1-a;const p=l*h+c*d+u*_+f*g,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const E=Math.sqrt(y),A=Math.atan2(E,p*v);m=Math.sin(m*A)/E,a=Math.sin(a*A)/E}const x=a*v;if(l=l*m+h*x,c=c*m+d*x,u=u*m+_*x,f=f*m+g*x,m===1-a){const E=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=E,c*=E,u*=E,f*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[o],h=s[o+1],d=s[o+2],_=s[o+3];return e[t]=a*_+u*f+l*d-c*h,e[t+1]=l*_+u*h+c*f-a*d,e[t+2]=c*_+u*d+a*h-l*f,e[t+3]=u*_-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),f=a(s/2),h=l(n/2),d=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gx.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sd.copy(this).projectOnVector(e),this.sub(sd)}reflect(e){return this.sub(sd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sd=new H,gx=new Ir;class pr{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qi):Qi.fromBufferAttribute(s,o),Qi.applyMatrix4(e.matrixWorld),this.expandByPoint(Qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xu.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xu.copy(n.boundingBox)),xu.applyMatrix4(e.matrixWorld),this.union(xu)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qi),Qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cl),vu.subVectors(this.max,Cl),Qo.subVectors(e.a,Cl),ea.subVectors(e.b,Cl),ta.subVectors(e.c,Cl),_s.subVectors(ea,Qo),gs.subVectors(ta,ea),so.subVectors(Qo,ta);let t=[0,-_s.z,_s.y,0,-gs.z,gs.y,0,-so.z,so.y,_s.z,0,-_s.x,gs.z,0,-gs.x,so.z,0,-so.x,-_s.y,_s.x,0,-gs.y,gs.x,0,-so.y,so.x,0];return!od(t,Qo,ea,ta,vu)||(t=[1,0,0,0,1,0,0,0,1],!od(t,Qo,ea,ta,vu))?!1:(yu.crossVectors(_s,gs),t=[yu.x,yu.y,yu.z],od(t,Qo,ea,ta,vu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zr=[new H,new H,new H,new H,new H,new H,new H,new H],Qi=new H,xu=new pr,Qo=new H,ea=new H,ta=new H,_s=new H,gs=new H,so=new H,Cl=new H,vu=new H,yu=new H,oo=new H;function od(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){oo.fromArray(i,s);const a=r.x*Math.abs(oo.x)+r.y*Math.abs(oo.y)+r.z*Math.abs(oo.z),l=e.dot(oo),c=t.dot(oo),u=n.dot(oo);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const dP=new pr,Pl=new H,ad=new H;class mr{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):dP.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pl.subVectors(e,this.center);const t=Pl.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Pl,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ad.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pl.copy(e.center).add(ad)),this.expandByPoint(Pl.copy(e.center).sub(ad))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hr=new H,ld=new H,Su=new H,xs=new H,cd=new H,Mu=new H,ud=new H;class _l{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hr.copy(this.origin).addScaledVector(this.direction,t),Hr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ld.copy(e).add(t).multiplyScalar(.5),Su.copy(t).sub(e).normalize(),xs.copy(this.origin).sub(ld);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Su),a=xs.dot(this.direction),l=-xs.dot(Su),c=xs.lengthSq(),u=Math.abs(1-o*o);let f,h,d,_;if(u>0)if(f=o*l-a,h=o*a-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const g=1/u;f*=g,h*=g,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ld).addScaledVector(Su,h),d}intersectSphere(e,t){Hr.subVectors(e.center,this.origin);const n=Hr.dot(this.direction),r=Hr.dot(Hr)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Hr)!==null}intersectTriangle(e,t,n,r,s){cd.subVectors(t,e),Mu.subVectors(n,e),ud.crossVectors(cd,Mu);let o=this.direction.dot(ud),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xs.subVectors(this.origin,e);const l=a*this.direction.dot(Mu.crossVectors(xs,Mu));if(l<0)return null;const c=a*this.direction.dot(cd.cross(xs));if(c<0||l+c>o)return null;const u=-a*xs.dot(ud);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(e,t,n,r,s,o,a,l,c,u,f,h,d,_,g,m){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,f,h,d,_,g,m)}set(e,t,n,r,s,o,a,l,c,u,f,h,d,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/na.setFromMatrixColumn(e,0).length(),s=1/na.setFromMatrixColumn(e,1).length(),o=1/na.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,_=a*u,g=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+_*c,t[5]=h-g*c,t[9]=-a*l,t[2]=g-h*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,_=c*u,g=c*f;t[0]=h+g*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=g+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,_=c*u,g=c*f;t[0]=h-g*a,t[4]=-o*f,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=g-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,_=a*u,g=a*f;t[0]=l*u,t[4]=_*c-d,t[8]=h*c+g,t[1]=l*f,t[5]=g*c+h,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-h*f,t[8]=_*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+_,t[10]=h-g*f}else if(e.order==="XZY"){const h=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+g,t[5]=o*u,t[9]=d*f-_,t[2]=_*f-d,t[6]=a*u,t[10]=g*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pP,e,mP)}lookAt(e,t,n){const r=this.elements;return Si.subVectors(e,t),Si.lengthSq()===0&&(Si.z=1),Si.normalize(),vs.crossVectors(n,Si),vs.lengthSq()===0&&(Math.abs(n.z)===1?Si.x+=1e-4:Si.z+=1e-4,Si.normalize(),vs.crossVectors(n,Si)),vs.normalize(),bu.crossVectors(Si,vs),r[0]=vs.x,r[4]=bu.x,r[8]=Si.x,r[1]=vs.y,r[5]=bu.y,r[9]=Si.y,r[2]=vs.z,r[6]=bu.z,r[10]=Si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],v=n[3],y=n[7],x=n[11],E=n[15],A=r[0],b=r[4],C=r[8],S=r[12],M=r[1],N=r[5],B=r[9],z=r[13],q=r[2],Q=r[6],W=r[10],j=r[14],V=r[3],he=r[7],O=r[11],ge=r[15];return s[0]=o*A+a*M+l*q+c*V,s[4]=o*b+a*N+l*Q+c*he,s[8]=o*C+a*B+l*W+c*O,s[12]=o*S+a*z+l*j+c*ge,s[1]=u*A+f*M+h*q+d*V,s[5]=u*b+f*N+h*Q+d*he,s[9]=u*C+f*B+h*W+d*O,s[13]=u*S+f*z+h*j+d*ge,s[2]=_*A+g*M+m*q+p*V,s[6]=_*b+g*N+m*Q+p*he,s[10]=_*C+g*B+m*W+p*O,s[14]=_*S+g*z+m*j+p*ge,s[3]=v*A+y*M+x*q+E*V,s[7]=v*b+y*N+x*Q+E*he,s[11]=v*C+y*B+x*W+E*O,s[15]=v*S+y*z+x*j+E*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+s*l*f-r*c*f-s*a*h+n*c*h+r*a*d-n*l*d)+g*(+t*l*d-t*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+m*(+t*c*f-t*a*d-s*o*f+n*o*d+s*a*u-n*c*u)+p*(-r*a*u-t*l*f+t*a*h+r*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],v=f*m*c-g*h*c+g*l*d-a*m*d-f*l*p+a*h*p,y=_*h*c-u*m*c-_*l*d+o*m*d+u*l*p-o*h*p,x=u*g*c-_*f*c+_*a*d-o*g*d-u*a*p+o*f*p,E=_*f*l-u*g*l-_*a*h+o*g*h+u*a*m-o*f*m,A=t*v+n*y+r*x+s*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=v*b,e[1]=(g*h*s-f*m*s-g*r*d+n*m*d+f*r*p-n*h*p)*b,e[2]=(a*m*s-g*l*s+g*r*c-n*m*c-a*r*p+n*l*p)*b,e[3]=(f*l*s-a*h*s-f*r*c+n*h*c+a*r*d-n*l*d)*b,e[4]=y*b,e[5]=(u*m*s-_*h*s+_*r*d-t*m*d-u*r*p+t*h*p)*b,e[6]=(_*l*s-o*m*s-_*r*c+t*m*c+o*r*p-t*l*p)*b,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*d+t*l*d)*b,e[8]=x*b,e[9]=(_*f*s-u*g*s-_*n*d+t*g*d+u*n*p-t*f*p)*b,e[10]=(o*g*s-_*a*s+_*n*c-t*g*c-o*n*p+t*a*p)*b,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*d-t*a*d)*b,e[12]=E*b,e[13]=(u*g*r-_*f*r+_*n*h-t*g*h-u*n*m+t*f*m)*b,e[14]=(_*a*r-o*g*r-_*n*l+t*g*l+o*n*m-t*a*m)*b,e[15]=(o*f*r-u*a*r+u*n*l-t*f*l-o*n*h+t*a*h)*b,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,_=s*f,g=o*u,m=o*f,p=a*f,v=l*c,y=l*u,x=l*f,E=n.x,A=n.y,b=n.z;return r[0]=(1-(g+p))*E,r[1]=(d+x)*E,r[2]=(_-y)*E,r[3]=0,r[4]=(d-x)*A,r[5]=(1-(h+p))*A,r[6]=(m+v)*A,r[7]=0,r[8]=(_+y)*b,r[9]=(m-v)*b,r[10]=(1-(h+g))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=na.set(r[0],r[1],r[2]).length();const o=na.set(r[4],r[5],r[6]).length(),a=na.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],er.copy(this);const c=1/s,u=1/o,f=1/a;return er.elements[0]*=c,er.elements[1]*=c,er.elements[2]*=c,er.elements[4]*=u,er.elements[5]*=u,er.elements[6]*=u,er.elements[8]*=f,er.elements[9]*=f,er.elements[10]*=f,t.setFromRotationMatrix(er),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=rs){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),f=(t+e)/(t-e),h=(n+r)/(n-r);let d,_;if(a===rs)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Xf)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=rs){const l=this.elements,c=1/(t-e),u=1/(n-r),f=1/(o-s),h=(t+e)*c,d=(n+r)*u;let _,g;if(a===rs)_=(o+s)*f,g=-2*f;else if(a===Xf)_=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const na=new H,er=new Qe,pP=new H(0,0,0),mP=new H(1,1,1),vs=new H,bu=new H,Si=new H,xx=new Qe,vx=new Ir;class dr{constructor(e=0,t=0,n=0,r=dr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ot(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xx,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vx.setFromEuler(this),this.setFromQuaternion(vx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dr.DEFAULT_ORDER="XYZ";class K_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _P=0;const yx=new H,ia=new Ir,Vr=new Qe,Eu=new H,Dl=new H,gP=new H,xP=new Ir,Sx=new H(1,0,0),Mx=new H(0,1,0),bx=new H(0,0,1),Ex={type:"added"},vP={type:"removed"},ra={type:"childadded",child:null},fd={type:"childremoved",child:null};class Wt extends Wo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_P++}),this.uuid=ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new H,t=new dr,n=new Ir,r=new H(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qe},normalMatrix:{value:new tt}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new K_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ia.setFromAxisAngle(e,t),this.quaternion.multiply(ia),this}rotateOnWorldAxis(e,t){return ia.setFromAxisAngle(e,t),this.quaternion.premultiply(ia),this}rotateX(e){return this.rotateOnAxis(Sx,e)}rotateY(e){return this.rotateOnAxis(Mx,e)}rotateZ(e){return this.rotateOnAxis(bx,e)}translateOnAxis(e,t){return yx.copy(e).applyQuaternion(this.quaternion),this.position.add(yx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sx,e)}translateY(e){return this.translateOnAxis(Mx,e)}translateZ(e){return this.translateOnAxis(bx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Eu.copy(e):Eu.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Dl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vr.lookAt(Dl,Eu,this.up):Vr.lookAt(Eu,Dl,this.up),this.quaternion.setFromRotationMatrix(Vr),r&&(Vr.extractRotation(r.matrixWorld),ia.setFromRotationMatrix(Vr),this.quaternion.premultiply(ia.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ex),ra.child=e,this.dispatchEvent(ra),ra.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vP),fd.child=e,this.dispatchEvent(fd),fd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ex),ra.child=e,this.dispatchEvent(ra),ra.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dl,e,gP),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dl,xP,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Wt.DEFAULT_UP=new H(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tr=new H,Gr=new H,hd=new H,Wr=new H,sa=new H,oa=new H,Tx=new H,dd=new H,pd=new H,md=new H,_d=new xt,gd=new xt,xd=new xt;class rr{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),tr.subVectors(e,t),r.cross(tr);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){tr.subVectors(r,t),Gr.subVectors(n,t),hd.subVectors(e,t);const o=tr.dot(tr),a=tr.dot(Gr),l=tr.dot(hd),c=Gr.dot(Gr),u=Gr.dot(hd),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-d-_,_,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Wr)===null?!1:Wr.x>=0&&Wr.y>=0&&Wr.x+Wr.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Wr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Wr.x),l.addScaledVector(o,Wr.y),l.addScaledVector(a,Wr.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return _d.setScalar(0),gd.setScalar(0),xd.setScalar(0),_d.fromBufferAttribute(e,t),gd.fromBufferAttribute(e,n),xd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(_d,s.x),o.addScaledVector(gd,s.y),o.addScaledVector(xd,s.z),o}static isFrontFacing(e,t,n,r){return tr.subVectors(n,t),Gr.subVectors(e,t),tr.cross(Gr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tr.subVectors(this.c,this.b),Gr.subVectors(this.a,this.b),tr.cross(Gr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return rr.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return rr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;sa.subVectors(r,n),oa.subVectors(s,n),dd.subVectors(e,n);const l=sa.dot(dd),c=oa.dot(dd);if(l<=0&&c<=0)return t.copy(n);pd.subVectors(e,r);const u=sa.dot(pd),f=oa.dot(pd);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(sa,o);md.subVectors(e,s);const d=sa.dot(md),_=oa.dot(md);if(_>=0&&d<=_)return t.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(oa,a);const m=u*_-d*f;if(m<=0&&f-u>=0&&d-_>=0)return Tx.subVectors(s,r),a=(f-u)/(f-u+(d-_)),t.copy(r).addScaledVector(Tx,a);const p=1/(m+g+h);return o=g*p,a=h*p,t.copy(n).addScaledVector(sa,o).addScaledVector(oa,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _b={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ys={h:0,s:0,l:0},Tu={h:0,s:0,l:0};function vd(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=pt.workingColorSpace){if(e=$_(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=vd(o,s,e+1/3),this.g=vd(o,s,e),this.b=vd(o,s,e-1/3)}return pt.toWorkingColorSpace(this,r),this}setStyle(e,t=En){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=En){const n=_b[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}copyLinearToSRGB(e){return this.r=Va(e.r),this.g=Va(e.g),this.b=Va(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return pt.fromWorkingColorSpace(Dn.copy(this),e),Math.round(ot(Dn.r*255,0,255))*65536+Math.round(ot(Dn.g*255,0,255))*256+Math.round(ot(Dn.b*255,0,255))}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(Dn.copy(this),t);const n=Dn.r,r=Dn.g,s=Dn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=En){pt.fromWorkingColorSpace(Dn.copy(this),e);const t=Dn.r,n=Dn.g,r=Dn.b;return e!==En?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ys),this.setHSL(ys.h+e,ys.s+t,ys.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ys),e.getHSL(Tu);const n=xc(ys.h,Tu.h,t),r=xc(ys.s,Tu.s,t),s=xc(ys.l,Tu.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new We;We.NAMES=_b;let yP=0;class fr extends Wo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yP++}),this.uuid=ur(),this.name="",this.type="Material",this.blending=za,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hp,this.blendDst=Vp,this.blendEquation=vo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=rl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zo,this.stencilZFail=Zo,this.stencilZPass=Zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==za&&(n.blending=this.blending),this.side!==fs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Hp&&(n.blendSrc=this.blendSrc),this.blendDst!==Vp&&(n.blendDst=this.blendDst),this.blendEquation!==vo&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rl&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fx&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class wr extends fr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dr,this.combine=z_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tn=new H,wu=new je;let SP=0;class ai{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:SP++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Tm,this.updateRanges=[],this.gpuType=or,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wu.fromBufferAttribute(this,t),wu.applyMatrix3(e),this.setXY(t,wu.x,wu.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ir(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ir(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ir(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ir(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ir(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),r=wt(r,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tm&&(e.usage=this.usage),e}}class gb extends ai{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class xb extends ai{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class qt extends ai{constructor(e,t,n){super(new Float32Array(e),t,n)}}let MP=0;const zi=new Qe,yd=new Wt,aa=new H,Mi=new pr,Ll=new pr,_n=new H;class Hn extends Wo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:MP++}),this.uuid=ur(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(db(e)?xb:gb)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new tt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zi.makeRotationFromQuaternion(e),this.applyMatrix4(zi),this}rotateX(e){return zi.makeRotationX(e),this.applyMatrix4(zi),this}rotateY(e){return zi.makeRotationY(e),this.applyMatrix4(zi),this}rotateZ(e){return zi.makeRotationZ(e),this.applyMatrix4(zi),this}translate(e,t,n){return zi.makeTranslation(e,t,n),this.applyMatrix4(zi),this}scale(e,t,n){return zi.makeScale(e,t,n),this.applyMatrix4(zi),this}lookAt(e){return yd.lookAt(e),yd.updateMatrix(),this.applyMatrix4(yd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(aa).negate(),this.translate(aa.x,aa.y,aa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new qt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Mi.setFromBufferAttribute(s),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Mi.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Mi.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Mi.min),this.boundingBox.expandByPoint(Mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(Mi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ll.setFromBufferAttribute(a),this.morphTargetsRelative?(_n.addVectors(Mi.min,Ll.min),Mi.expandByPoint(_n),_n.addVectors(Mi.max,Ll.max),Mi.expandByPoint(_n)):(Mi.expandByPoint(Ll.min),Mi.expandByPoint(Ll.max))}Mi.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)_n.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(_n));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)_n.fromBufferAttribute(a,c),l&&(aa.fromBufferAttribute(e,c),_n.add(aa)),r=Math.max(r,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new H,l[C]=new H;const c=new H,u=new H,f=new H,h=new je,d=new je,_=new je,g=new H,m=new H;function p(C,S,M){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,S),f.fromBufferAttribute(n,M),h.fromBufferAttribute(s,C),d.fromBufferAttribute(s,S),_.fromBufferAttribute(s,M),u.sub(c),f.sub(c),d.sub(h),_.sub(h);const N=1/(d.x*_.y-_.x*d.y);isFinite(N)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(N),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(N),a[C].add(g),a[S].add(g),a[M].add(g),l[C].add(m),l[S].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let C=0,S=v.length;C<S;++C){const M=v[C],N=M.start,B=M.count;for(let z=N,q=N+B;z<q;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const y=new H,x=new H,E=new H,A=new H;function b(C){E.fromBufferAttribute(r,C),A.copy(E);const S=a[C];y.copy(S),y.sub(E.multiplyScalar(E.dot(S))).normalize(),x.crossVectors(A,S);const N=x.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,N)}for(let C=0,S=v.length;C<S;++C){const M=v[C],N=M.start,B=M.count;for(let z=N,q=N+B;z<q;z+=3)b(e.getX(z+0)),b(e.getX(z+1)),b(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ai(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,u=new H,f=new H;if(e)for(let h=0,d=e.count;h<d;h+=3){const _=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let p=0;p<u;p++)h[_++]=c[d++]}return new ai(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Hn,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wx=new Qe,ao=new _l,Au=new mr,Ax=new H,Ru=new H,Cu=new H,Pu=new H,Sd=new H,Du=new H,Rx=new H,Lu=new H;class yn extends Wt{constructor(e=new Hn,t=new wr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Du.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Sd.fromBufferAttribute(f,e),o?Du.addScaledVector(Sd,u):Du.addScaledVector(Sd.sub(t),u))}t.add(Du)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Au.copy(n.boundingSphere),Au.applyMatrix4(s),ao.copy(e.ray).recast(e.near),!(Au.containsPoint(ao.origin)===!1&&(ao.intersectSphere(Au,Ax)===null||ao.origin.distanceToSquared(Ax)>(e.far-e.near)**2))&&(wx.copy(s).invert(),ao.copy(e.ray).applyMatrix4(wx),!(n.boundingBox!==null&&ao.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ao)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const m=h[_],p=o[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,E=y;x<E;x+=3){const A=a.getX(x),b=a.getX(x+1),C=a.getX(x+2);r=Iu(this,p,e,n,c,u,f,A,b,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const v=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);r=Iu(this,o,e,n,c,u,f,v,y,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const m=h[_],p=o[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,E=y;x<E;x+=3){const A=x,b=x+1,C=x+2;r=Iu(this,p,e,n,c,u,f,A,b,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const v=m,y=m+1,x=m+2;r=Iu(this,o,e,n,c,u,f,v,y,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function bP(i,e,t,n,r,s,o,a){let l;if(e.side===gi?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===fs,a),l===null)return null;Lu.copy(a),Lu.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Lu);return c<t.near||c>t.far?null:{distance:c,point:Lu.clone(),object:i}}function Iu(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Ru),i.getVertexPosition(l,Cu),i.getVertexPosition(c,Pu);const u=bP(i,e,t,n,Ru,Cu,Pu,Rx);if(u){const f=new H;rr.getBarycoord(Rx,Ru,Cu,Pu,f),r&&(u.uv=rr.getInterpolatedAttribute(r,a,l,c,f,new je)),s&&(u.uv1=rr.getInterpolatedAttribute(s,a,l,c,f,new je)),o&&(u.normal=rr.getInterpolatedAttribute(o,a,l,c,f,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new H,materialIndex:0};rr.getNormal(Ru,Cu,Pu,h.normal),u.face=h,u.barycoord=f}return u}class Qs extends Hn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,r,o,2),_("x","z","y",1,-1,e,n,-t,r,o,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(f,2));function _(g,m,p,v,y,x,E,A,b,C,S){const M=x/b,N=E/C,B=x/2,z=E/2,q=A/2,Q=b+1,W=C+1;let j=0,V=0;const he=new H;for(let O=0;O<W;O++){const ge=O*N-z;for(let Ce=0;Ce<Q;Ce++){const ze=Ce*M-B;he[g]=ze*v,he[m]=ge*y,he[p]=q,c.push(he.x,he.y,he.z),he[g]=0,he[m]=0,he[p]=A>0?1:-1,u.push(he.x,he.y,he.z),f.push(Ce/b),f.push(1-O/C),j+=1}}for(let O=0;O<C;O++)for(let ge=0;ge<b;ge++){const Ce=h+ge+Q*O,ze=h+ge+Q*(O+1),te=h+(ge+1)+Q*(O+1),de=h+(ge+1)+Q*O;l.push(Ce,ze,de),l.push(ze,te,de),V+=6}a.addGroup(d,V,S),d+=V,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fl(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function qn(i){const e={};for(let t=0;t<i.length;t++){const n=fl(i[t]);for(const r in n)e[r]=n[r]}return e}function EP(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function vb(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}const Z_={clone:fl,merge:qn};var TP=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wP=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nr extends fr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=TP,this.fragmentShader=wP,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fl(e.uniforms),this.uniformsGroups=EP(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class yb extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=rs}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ss=new H,Cx=new je,Px=new je;class Tn extends yb{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ul*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ul*2*Math.atan(Math.tan(gc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ss.x,Ss.y).multiplyScalar(-e/Ss.z),Ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ss.x,Ss.y).multiplyScalar(-e/Ss.z)}getViewSize(e,t){return this.getViewBounds(e,Cx,Px),t.subVectors(Px,Cx)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(gc*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const la=-90,ca=1;class AP extends Wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Tn(la,ca,e,t);r.layers=this.layers,this.add(r);const s=new Tn(la,ca,e,t);s.layers=this.layers,this.add(s);const o=new Tn(la,ca,e,t);o.layers=this.layers,this.add(o);const a=new Tn(la,ca,e,t);a.layers=this.layers,this.add(a);const l=new Tn(la,ca,e,t);l.layers=this.layers,this.add(l);const c=new Tn(la,ca,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===rs)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xf)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Sb extends Sn{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:sl,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class RP extends Vo{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Sb(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Li}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Qs(5,5,5),s=new Nr({name:"CubemapFromEquirect",uniforms:fl(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gi,blending:Ws});s.uniforms.tEquirect.value=t;const o=new yn(r,s),a=t.minFilter;return t.minFilter===is&&(t.minFilter=Li),new AP(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class bo extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const CP={type:"move"};class Md{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(CP)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new bo;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Mb extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dr,this.environmentIntensity=1,this.environmentRotation=new dr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class bb{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Tm,this.updateRanges=[],this.version=0,this.uuid=ur()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ur()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ur()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xn=new H;class ss{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyMatrix4(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyNormalMatrix(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.transformDirection(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ir(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ir(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ir(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ir(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ir(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),r=wt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),r=wt(r,this.array),s=wt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new ai(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ss(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Dx=new H,Lx=new xt,Ix=new xt,PP=new H,Nx=new Qe,Nu=new H,bd=new mr,Ox=new Qe,Ed=new _l;class DP extends yn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ax,this.bindMatrix=new Qe,this.bindMatrixInverse=new Qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new pr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Nu),this.boundingBox.expandByPoint(Nu)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new mr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Nu),this.boundingSphere.expandByPoint(Nu)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bd.copy(this.boundingSphere),bd.applyMatrix4(r),e.ray.intersectsSphere(bd)!==!1&&(Ox.copy(r).invert(),Ed.copy(e.ray).applyMatrix4(Ox),!(this.boundingBox!==null&&Ed.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ed)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new xt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ax?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===RC?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;Lx.fromBufferAttribute(r.attributes.skinIndex,e),Ix.fromBufferAttribute(r.attributes.skinWeight,e),Dx.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Ix.getComponent(s);if(o!==0){const a=Lx.getComponent(s);Nx.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(PP.copy(Dx).applyMatrix4(Nx),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Eb extends Wt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Tb extends Sn{constructor(e=null,t=1,n=1,r,s,o,a,l,c=oi,u=oi,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ux=new Qe,LP=new Qe;class J_{constructor(e=[],t=[]){this.uuid=ur(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:LP;Ux.multiplyMatrices(a,t[s]),Ux.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new J_(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Tb(t,e,e,qi,or);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Eb),this.bones.push(o),this.boneInverses.push(new Qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}class wm extends ai{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ua=new Qe,Fx=new Qe,Ou=[],Bx=new pr,IP=new Qe,Il=new yn,Nl=new mr;class NP extends yn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wm(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,IP)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ua),Bx.copy(e.boundingBox).applyMatrix4(ua),this.boundingBox.union(Bx)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ua),Nl.copy(e.boundingSphere).applyMatrix4(ua),this.boundingSphere.union(Nl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Il.geometry=this.geometry,Il.material=this.material,Il.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nl.copy(this.boundingSphere),Nl.applyMatrix4(n),e.ray.intersectsSphere(Nl)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ua),Fx.multiplyMatrices(n,ua),Il.matrixWorld=Fx,Il.raycast(e,Ou);for(let o=0,a=Ou.length;o<a;o++){const l=Ou[o];l.instanceId=s,l.object=this,t.push(l)}Ou.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new wm(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Tb(new Float32Array(r*this.count),r,this.count,W_,or));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Td=new H,OP=new H,UP=new tt;class Rs{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Td.subVectors(n,t).cross(OP.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Td),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||UP.getNormalMatrix(e),r=this.coplanarPoint(Td).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lo=new mr,Uu=new H;class Q_{constructor(e=new Rs,t=new Rs,n=new Rs,r=new Rs,s=new Rs,o=new Rs){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=rs){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],_=r[9],g=r[10],m=r[11],p=r[12],v=r[13],y=r[14],x=r[15];if(n[0].setComponents(l-s,h-c,m-d,x-p).normalize(),n[1].setComponents(l+s,h+c,m+d,x+p).normalize(),n[2].setComponents(l+o,h+u,m+_,x+v).normalize(),n[3].setComponents(l-o,h-u,m-_,x-v).normalize(),n[4].setComponents(l-a,h-f,m-g,x-y).normalize(),t===rs)n[5].setComponents(l+a,h+f,m+g,x+y).normalize();else if(t===Xf)n[5].setComponents(a,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),lo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lo)}intersectsSprite(e){return lo.center.set(0,0,0),lo.radius=.7071067811865476,lo.applyMatrix4(e.matrixWorld),this.intersectsSphere(lo)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Uu.x=r.normal.x>0?e.max.x:e.min.x,Uu.y=r.normal.y>0?e.max.y:e.min.y,Uu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Uu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jc extends fr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jf=new H,Yf=new H,kx=new Qe,Ol=new _l,Fu=new mr,wd=new H,zx=new H;class eg extends Wt{constructor(e=new Hn,t=new Jc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)jf.fromBufferAttribute(t,r-1),Yf.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=jf.distanceTo(Yf);e.setAttribute("lineDistance",new qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fu.copy(n.boundingSphere),Fu.applyMatrix4(r),Fu.radius+=s,e.ray.intersectsSphere(Fu)===!1)return;kx.copy(r).invert(),Ol.copy(e.ray).applyMatrix4(kx);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let g=d,m=_-1;g<m;g+=c){const p=u.getX(g),v=u.getX(g+1),y=Bu(this,e,Ol,l,p,v,g);y&&t.push(y)}if(this.isLineLoop){const g=u.getX(_-1),m=u.getX(d),p=Bu(this,e,Ol,l,g,m,_-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let g=d,m=_-1;g<m;g+=c){const p=Bu(this,e,Ol,l,g,g+1,g);p&&t.push(p)}if(this.isLineLoop){const g=Bu(this,e,Ol,l,_-1,d,_-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Bu(i,e,t,n,r,s,o){const a=i.geometry.attributes.position;if(jf.fromBufferAttribute(a,r),Yf.fromBufferAttribute(a,s),t.distanceSqToSegment(jf,Yf,wd,zx)>n)return;wd.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(wd);if(!(c<e.near||c>e.far))return{distance:c,point:zx.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Hx=new H,Vx=new H;class tg extends eg{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Hx.fromBufferAttribute(t,r),Vx.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Hx.distanceTo(Vx);e.setAttribute("lineDistance",new qt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class FP extends eg{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ng extends fr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gx=new Qe,Am=new _l,ku=new mr,zu=new H;class ig extends Wt{constructor(e=new Hn,t=new ng){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ku.copy(n.boundingSphere),ku.applyMatrix4(r),ku.radius+=s,e.ray.intersectsSphere(ku)===!1)return;Gx.copy(r).invert(),Am.copy(e.ray).applyMatrix4(Gx);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=h,g=d;_<g;_++){const m=c.getX(_);zu.fromBufferAttribute(f,m),Wx(zu,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let _=h,g=d;_<g;_++)zu.fromBufferAttribute(f,_),Wx(zu,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Wx(i,e,t,n,r,s,o){const a=Am.distanceSqToPoint(i);if(a<t){const l=new H;Am.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class wb extends Sn{constructor(e,t,n,r,s,o,a,l,c,u=Ha){if(u!==Ha&&u!==cl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ha&&(n=Ho),n===void 0&&u===cl&&(n=ll),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:oi,this.minFilter=l!==void 0?l:oi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class rg extends Hn{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];a(r),c(n),u(),this.setAttribute("position",new qt(s,3)),this.setAttribute("normal",new qt(s.slice(),3)),this.setAttribute("uv",new qt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const y=new H,x=new H,E=new H;for(let A=0;A<t.length;A+=3)d(t[A+0],y),d(t[A+1],x),d(t[A+2],E),l(y,x,E,v)}function l(v,y,x,E){const A=E+1,b=[];for(let C=0;C<=A;C++){b[C]=[];const S=v.clone().lerp(x,C/A),M=y.clone().lerp(x,C/A),N=A-C;for(let B=0;B<=N;B++)B===0&&C===A?b[C][B]=S:b[C][B]=S.clone().lerp(M,B/N)}for(let C=0;C<A;C++)for(let S=0;S<2*(A-C)-1;S++){const M=Math.floor(S/2);S%2===0?(h(b[C][M+1]),h(b[C+1][M]),h(b[C][M])):(h(b[C][M+1]),h(b[C+1][M+1]),h(b[C+1][M]))}}function c(v){const y=new H;for(let x=0;x<s.length;x+=3)y.x=s[x+0],y.y=s[x+1],y.z=s[x+2],y.normalize().multiplyScalar(v),s[x+0]=y.x,s[x+1]=y.y,s[x+2]=y.z}function u(){const v=new H;for(let y=0;y<s.length;y+=3){v.x=s[y+0],v.y=s[y+1],v.z=s[y+2];const x=m(v)/2/Math.PI+.5,E=p(v)/Math.PI+.5;o.push(x,1-E)}_(),f()}function f(){for(let v=0;v<o.length;v+=6){const y=o[v+0],x=o[v+2],E=o[v+4],A=Math.max(y,x,E),b=Math.min(y,x,E);A>.9&&b<.1&&(y<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),E<.2&&(o[v+4]+=1))}}function h(v){s.push(v.x,v.y,v.z)}function d(v,y){const x=v*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function _(){const v=new H,y=new H,x=new H,E=new H,A=new je,b=new je,C=new je;for(let S=0,M=0;S<s.length;S+=9,M+=6){v.set(s[S+0],s[S+1],s[S+2]),y.set(s[S+3],s[S+4],s[S+5]),x.set(s[S+6],s[S+7],s[S+8]),A.set(o[M+0],o[M+1]),b.set(o[M+2],o[M+3]),C.set(o[M+4],o[M+5]),E.copy(v).add(y).add(x).divideScalar(3);const N=m(E);g(A,M+0,v,N),g(b,M+2,y,N),g(C,M+4,x,N)}}function g(v,y,x,E){E<0&&v.x===1&&(o[y]=v.x-1),x.x===0&&x.z===0&&(o[y]=E/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rg(e.vertices,e.indices,e.radius,e.details)}}class sg extends rg{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new sg(e.radius,e.detail)}}class gh extends Hn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const v=p*h-o;for(let y=0;y<c;y++){const x=y*f-s;_.push(x,-v,0),g.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const y=v+c*p,x=v+c*(p+1),E=v+1+c*(p+1),A=v+1+c*p;d.push(y,x,A),d.push(x,E,A)}this.setIndex(d),this.setAttribute("position",new qt(_,3)),this.setAttribute("normal",new qt(g,3)),this.setAttribute("uv",new qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gh(e.width,e.height,e.widthSegments,e.heightSegments)}}class qf extends Hn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new H,h=new H,d=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const v=[],y=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let E=0;E<=t;E++){const A=E/t;f.x=-e*Math.cos(r+A*s)*Math.sin(o+y*a),f.y=e*Math.cos(o+y*a),f.z=e*Math.sin(r+A*s)*Math.sin(o+y*a),_.push(f.x,f.y,f.z),h.copy(f).normalize(),g.push(h.x,h.y,h.z),m.push(A+x,1-y),v.push(c++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const y=u[p][v+1],x=u[p][v],E=u[p+1][v],A=u[p+1][v+1];(p!==0||o>0)&&d.push(y,x,A),(p!==n-1||l<Math.PI)&&d.push(x,E,A)}this.setIndex(d),this.setAttribute("position",new qt(_,3)),this.setAttribute("normal",new qt(g,3)),this.setAttribute("uv",new qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class og extends Hn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,r=new H,s=new H;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const f=l[c],h=f.start,d=f.count;for(let _=h,g=h+d;_<g;_+=3)for(let m=0;m<3;m++){const p=a.getX(_+m),v=a.getX(_+(m+1)%3);r.fromBufferAttribute(o,p),s.fromBufferAttribute(o,v),Xx(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,f=3*a+(c+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,f),Xx(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new qt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Xx(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(r)===!0?!1:(t.add(n),t.add(r),!0)}class ag extends fr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=q_,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ur extends ag{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class BP extends fr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new We(16777215),this.specular=new We(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=q_,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dr,this.combine=z_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kP extends fr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=DC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zP extends fr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class HP extends Jc{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Hu(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function VP(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function GP(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function jx(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r}function Ab(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}class Qc{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class WP extends Qc{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lx,endingEnd:lx}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case cx:s=e,a=2*t-n;break;case ux:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case cx:o=e,l=2*n-t;break;case ux:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,_=(n-t)/(r-t),g=_*_,m=g*_,p=-h*m+2*h*g-h*_,v=(1+h)*m+(-1.5-2*h)*g+(-.5+h)*_+1,y=(-1-d)*m+(1.5+d)*g+.5*_,x=d*m-d*g;for(let E=0;E!==a;++E)s[E]=p*o[u+E]+v*o[c+E]+y*o[l+E]+x*o[f+E];return s}}class XP extends Qc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),f=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*f+o[l+h]*u;return s}}class jP extends Qc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Fr{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Hu(t,this.TimeBufferType),this.values=Hu(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Hu(e.times,Array),values:Hu(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new jP(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new XP(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new WP(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Hc:t=this.InterpolantFactoryMethodDiscrete;break;case Vc:t=this.InterpolantFactoryMethodLinear;break;case nd:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hc;case this.InterpolantFactoryMethodLinear:return Vc;case this.InterpolantFactoryMethodSmooth:return nd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&VP(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===nd,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const f=a*n,h=f-n,d=f+n;for(let _=0;_!==n;++_){const g=t[f+_];if(g!==t[h+_]||g!==t[d+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*n,h=o*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Fr.prototype.TimeBufferType=Float32Array;Fr.prototype.ValueBufferType=Float32Array;Fr.prototype.DefaultInterpolation=Vc;class gl extends Fr{constructor(e,t,n){super(e,t,n)}}gl.prototype.ValueTypeName="bool";gl.prototype.ValueBufferType=Array;gl.prototype.DefaultInterpolation=Hc;gl.prototype.InterpolantFactoryMethodLinear=void 0;gl.prototype.InterpolantFactoryMethodSmooth=void 0;class Rb extends Fr{}Rb.prototype.ValueTypeName="color";class hl extends Fr{}hl.prototype.ValueTypeName="number";class YP extends Qc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Ir.slerpFlat(s,0,o,c-a,o,c,l);return s}}class dl extends Fr{InterpolantFactoryMethodLinear(e){return new YP(this.times,this.values,this.getValueSize(),e)}}dl.prototype.ValueTypeName="quaternion";dl.prototype.InterpolantFactoryMethodSmooth=void 0;class xl extends Fr{constructor(e,t,n){super(e,t,n)}}xl.prototype.ValueTypeName="string";xl.prototype.ValueBufferType=Array;xl.prototype.DefaultInterpolation=Hc;xl.prototype.InterpolantFactoryMethodLinear=void 0;xl.prototype.InterpolantFactoryMethodSmooth=void 0;class pl extends Fr{}pl.prototype.ValueTypeName="vector";class qP{constructor(e="",t=-1,n=[],r=CC){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=ur(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(KP(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Fr.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=GP(l);l=jx(l,1,u),c=jx(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new hl(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let h=r[f];h||(r[f]=h=[]),h.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,h,d,_,g){if(d.length!==0){const m=[],p=[];Ab(d,m,p,_),m.length!==0&&g.push(new f(h,m,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let _;for(_=0;_<h.length;_++)if(h[_].morphTargets)for(let g=0;g<h[_].morphTargets.length;g++)d[h[_].morphTargets[g]]=-1;for(const g in d){const m=[],p=[];for(let v=0;v!==h[_].morphTargets.length;++v){const y=h[_];m.push(y.time),p.push(y.morphTarget===g?1:0)}r.push(new hl(".morphTargetInfluence["+g+"]",m,p))}l=d.length*o}else{const d=".bones["+t[f].name+"]";n(pl,d+".position",h,"pos",r),n(dl,d+".quaternion",h,"rot",r),n(pl,d+".scale",h,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function $P(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return hl;case"vector":case"vector2":case"vector3":case"vector4":return pl;case"color":return Rb;case"quaternion":return dl;case"bool":case"boolean":return gl;case"string":return xl}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function KP(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=$P(i.type);if(i.times===void 0){const t=[],n=[];Ab(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Fs={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class ZP{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],_=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const JP=new ZP;class vl{constructor(e){this.manager=e!==void 0?e:JP,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}vl.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xr={};class QP extends Error{constructor(e,t){super(e),this.response=t}}class Cb extends vl{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Fs.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Xr[e]!==void 0){Xr[e].push({onLoad:t,onProgress:n,onError:r});return}Xr[e]=[],Xr[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Xr[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,_=d!==0;let g=0;const m=new ReadableStream({start(p){v();function v(){f.read().then(({done:y,value:x})=>{if(y)p.close();else{g+=x.byteLength;const E=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let A=0,b=u.length;A<b;A++){const C=u[A];C.onProgress&&C.onProgress(E)}p.enqueue(x),v()}},y=>{p.error(y)})}}});return new Response(m)}else throw new QP(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{Fs.add(e,c);const u=Xr[e];delete Xr[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Xr[e];if(u===void 0)throw this.manager.itemError(e),c;delete Xr[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class eD extends vl{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Fs.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Gc("img");function l(){u(),Fs.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class xh extends vl{constructor(e){super(e)}load(e,t,n,r){const s=new Sn,o=new eD(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class vh extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ad=new Qe,Yx=new H,qx=new H;class lg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Q_,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Yx.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yx),qx.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qx),t.updateMatrixWorld(),Ad.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ad),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ad)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class tD extends lg{constructor(){super(new Tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ul*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Pb extends vh{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new tD}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const $x=new Qe,Ul=new H,Rd=new H;class nD extends lg{constructor(){super(new Tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new je(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ul.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ul),Rd.copy(n.position),Rd.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Rd),n.updateMatrixWorld(),r.makeTranslation(-Ul.x,-Ul.y,-Ul.z),$x.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($x)}}class Rm extends vh{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new nD}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class cg extends yb{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class iD extends lg{constructor(){super(new cg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rD extends vh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new iD}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Db extends vh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class vc{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class sD extends Hn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class oD extends vl{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Fs.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Fs.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),Fs.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Fs.add(e,l),s.manager.itemStart(e)}}class aD extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const ug="\\[\\]\\.:\\/",lD=new RegExp("["+ug+"]","g"),fg="[^"+ug+"]",cD="[^"+ug.replace("\\.","")+"]",uD=/((?:WC+[\/:])*)/.source.replace("WC",fg),fD=/(WCOD+)?/.source.replace("WCOD",cD),hD=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fg),dD=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fg),pD=new RegExp("^"+uD+fD+hD+dD+"$"),mD=["material","materials","bones","map"];class _D{constructor(e,t,n){const r=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class At{constructor(e,t,n){this.path=t,this.parsedPath=n||At.parseTrackName(t),this.node=At.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new At.Composite(e,t,n):new At(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lD,"")}static parseTrackName(e){const t=pD.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);mD.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=At.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}At.Composite=_D;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Cm extends bb{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const Kx=new Qe;class gD{constructor(e,t,n=0,r=1/0){this.ray=new _l(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new K_,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Kx.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Kx),this}intersectObject(e,t=!0,n=[]){return Pm(e,this,n,t),n.sort(Zx),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Pm(e[r],this,n,t);return n.sort(Zx),n}}function Zx(i,e){return i.distance-e.distance}function Pm(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)Pm(s[o],e,t,!0)}}class Jx{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ot(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ot(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Qx extends tg{constructor(e=10,t=10,n=4473924,r=8947848){n=new We(n),r=new We(r);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let h=0,d=0,_=-a;h<=t;h++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const g=h===s?n:r;g.toArray(c,d),d+=3,g.toArray(c,d),d+=3,g.toArray(c,d),d+=3,g.toArray(c,d),d+=3}const u=new Hn;u.setAttribute("position",new qt(l,3)),u.setAttribute("color",new qt(c,3));const f=new Jc({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class xD extends Wo{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function ev(i,e,t,n){const r=vD(n);switch(t){case rb:return i*e;case ob:return i*e;case ab:return i*e*2;case W_:return i*e/r.components*r.byteLength;case X_:return i*e/r.components*r.byteLength;case lb:return i*e*2/r.components*r.byteLength;case j_:return i*e*2/r.components*r.byteLength;case sb:return i*e*3/r.components*r.byteLength;case qi:return i*e*4/r.components*r.byteLength;case Y_:return i*e*4/r.components*r.byteLength;case df:case pf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case mf:case _f:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qp:case tm:return Math.max(i,16)*Math.max(e,8)/4;case Jp:case em:return Math.max(i,8)*Math.max(e,8)/2;case nm:case im:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case rm:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sm:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case om:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case am:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case lm:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case cm:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case um:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case fm:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case hm:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case dm:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case pm:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case mm:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case _m:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case gm:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case xm:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case gf:case vm:case ym:return Math.ceil(i/4)*Math.ceil(e/4)*16;case cb:case Sm:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Mm:case bm:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vD(i){switch(i){case hs:case tb:return{byteLength:1,components:1};case zc:case nb:case Zc:return{byteLength:2,components:1};case V_:case G_:return{byteLength:2,components:4};case Ho:case H_:case or:return{byteLength:4,components:1};case ib:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:k_}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=k_);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Lb(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function yD(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<f.length;d++){const _=f[h],g=f[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++h,f[h]=g)}f.length=h+1;for(let d=0,_=f.length;d<_;d++){const g=f[d];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var SD=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,MD=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bD=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ED=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TD=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wD=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AD=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,RD=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CD=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,PD=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,DD=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LD=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ID=`float G_BlinnPhong_Implicit( ) {
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
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ND=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,OD=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,UD=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
#endif`,FD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,BD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kD=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zD=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,HD=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,VD=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,GD=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,WD=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,XD=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
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
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
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
#endif`,jD=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,YD=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qD=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$D=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,KD=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ZD="gl_FragColor = linearToOutputTexel( gl_FragColor );",JD=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,QD=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,eL=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tL=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nL=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iL=`#ifdef USE_ENVMAP
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
#endif`,rL=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sL=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oL=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aL=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lL=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cL=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uL=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fL=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hL=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
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
#endif`,dL=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,pL=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mL=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_L=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gL=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xL=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vL=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
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
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
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
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yL=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,SL=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ML=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bL=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,EL=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TL=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wL=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,AL=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RL=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CL=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,PL=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DL=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LL=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,IL=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,NL=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,OL=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UL=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,FL=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BL=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kL=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VL=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,GL=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,WL=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,XL=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jL=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YL=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qL=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$L=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,KL=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ZL=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,JL=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QL=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eI=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tI=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nI=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
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
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,iI=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rI=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sI=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oI=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aI=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lI=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cI=`#ifdef USE_SKINNING
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
#endif`,uI=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fI=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hI=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dI=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pI=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mI=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_I=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vI=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yI=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SI=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bI=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TI=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wI=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,AI=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,RI=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,CI=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,PI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DI=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LI=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,II=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NI=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,OI=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UI=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,FI=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BI=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,kI=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zI=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,HI=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,VI=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,GI=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WI=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,XI=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jI=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,YI=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qI=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,$I=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KI=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZI=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,JI=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,QI=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:SD,alphahash_pars_fragment:MD,alphamap_fragment:bD,alphamap_pars_fragment:ED,alphatest_fragment:TD,alphatest_pars_fragment:wD,aomap_fragment:AD,aomap_pars_fragment:RD,batching_pars_vertex:CD,batching_vertex:PD,begin_vertex:DD,beginnormal_vertex:LD,bsdfs:ID,iridescence_fragment:ND,bumpmap_pars_fragment:OD,clipping_planes_fragment:UD,clipping_planes_pars_fragment:FD,clipping_planes_pars_vertex:BD,clipping_planes_vertex:kD,color_fragment:zD,color_pars_fragment:HD,color_pars_vertex:VD,color_vertex:GD,common:WD,cube_uv_reflection_fragment:XD,defaultnormal_vertex:jD,displacementmap_pars_vertex:YD,displacementmap_vertex:qD,emissivemap_fragment:$D,emissivemap_pars_fragment:KD,colorspace_fragment:ZD,colorspace_pars_fragment:JD,envmap_fragment:QD,envmap_common_pars_fragment:eL,envmap_pars_fragment:tL,envmap_pars_vertex:nL,envmap_physical_pars_fragment:dL,envmap_vertex:iL,fog_vertex:rL,fog_pars_vertex:sL,fog_fragment:oL,fog_pars_fragment:aL,gradientmap_pars_fragment:lL,lightmap_pars_fragment:cL,lights_lambert_fragment:uL,lights_lambert_pars_fragment:fL,lights_pars_begin:hL,lights_toon_fragment:pL,lights_toon_pars_fragment:mL,lights_phong_fragment:_L,lights_phong_pars_fragment:gL,lights_physical_fragment:xL,lights_physical_pars_fragment:vL,lights_fragment_begin:yL,lights_fragment_maps:SL,lights_fragment_end:ML,logdepthbuf_fragment:bL,logdepthbuf_pars_fragment:EL,logdepthbuf_pars_vertex:TL,logdepthbuf_vertex:wL,map_fragment:AL,map_pars_fragment:RL,map_particle_fragment:CL,map_particle_pars_fragment:PL,metalnessmap_fragment:DL,metalnessmap_pars_fragment:LL,morphinstance_vertex:IL,morphcolor_vertex:NL,morphnormal_vertex:OL,morphtarget_pars_vertex:UL,morphtarget_vertex:FL,normal_fragment_begin:BL,normal_fragment_maps:kL,normal_pars_fragment:zL,normal_pars_vertex:HL,normal_vertex:VL,normalmap_pars_fragment:GL,clearcoat_normal_fragment_begin:WL,clearcoat_normal_fragment_maps:XL,clearcoat_pars_fragment:jL,iridescence_pars_fragment:YL,opaque_fragment:qL,packing:$L,premultiplied_alpha_fragment:KL,project_vertex:ZL,dithering_fragment:JL,dithering_pars_fragment:QL,roughnessmap_fragment:eI,roughnessmap_pars_fragment:tI,shadowmap_pars_fragment:nI,shadowmap_pars_vertex:iI,shadowmap_vertex:rI,shadowmask_pars_fragment:sI,skinbase_vertex:oI,skinning_pars_vertex:aI,skinning_vertex:lI,skinnormal_vertex:cI,specularmap_fragment:uI,specularmap_pars_fragment:fI,tonemapping_fragment:hI,tonemapping_pars_fragment:dI,transmission_fragment:pI,transmission_pars_fragment:mI,uv_pars_fragment:_I,uv_pars_vertex:gI,uv_vertex:xI,worldpos_vertex:vI,background_vert:yI,background_frag:SI,backgroundCube_vert:MI,backgroundCube_frag:bI,cube_vert:EI,cube_frag:TI,depth_vert:wI,depth_frag:AI,distanceRGBA_vert:RI,distanceRGBA_frag:CI,equirect_vert:PI,equirect_frag:DI,linedashed_vert:LI,linedashed_frag:II,meshbasic_vert:NI,meshbasic_frag:OI,meshlambert_vert:UI,meshlambert_frag:FI,meshmatcap_vert:BI,meshmatcap_frag:kI,meshnormal_vert:zI,meshnormal_frag:HI,meshphong_vert:VI,meshphong_frag:GI,meshphysical_vert:WI,meshphysical_frag:XI,meshtoon_vert:jI,meshtoon_frag:YI,points_vert:qI,points_frag:$I,shadow_vert:KI,shadow_frag:ZI,sprite_vert:JI,sprite_frag:QI},Ee={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},hi={basic:{uniforms:qn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:qn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new We(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:qn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:qn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:qn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new We(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:qn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:qn([Ee.points,Ee.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:qn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:qn([Ee.common,Ee.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:qn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:qn([Ee.sprite,Ee.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:qn([Ee.common,Ee.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:qn([Ee.lights,Ee.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};hi.physical={uniforms:qn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const Vu={r:0,b:0,g:0},co=new dr,e2=new Qe;function t2(i,e,t,n,r,s,o){const a=new We(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function _(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function g(y){let x=!1;const E=_(y);E===null?p(a,l):E&&E.isColor&&(p(E,1),x=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,x){const E=_(x);E&&(E.isCubeTexture||E.mapping===_h)?(u===void 0&&(u=new yn(new Qs(1,1,1),new Nr({name:"BackgroundCubeMaterial",uniforms:fl(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),co.copy(x.backgroundRotation),co.x*=-1,co.y*=-1,co.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(co.y*=-1,co.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(e2.makeRotationFromEuler(co)),u.material.toneMapped=pt.getTransfer(E.colorSpace)!==Rt,(f!==E||h!==E.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=E,h=E.version,d=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new yn(new gh(2,2),new Nr({name:"BackgroundMaterial",uniforms:fl(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=pt.getTransfer(E.colorSpace)!==Rt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||h!==E.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=E,h=E.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,x){y.getRGB(Vu,vb(i)),n.buffers.color.setClear(Vu.r,Vu.g,Vu.b,x,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:g,addToRenderList:m,dispose:v}}function n2(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,o=!1;function a(M,N,B,z,q){let Q=!1;const W=f(z,B,N);s!==W&&(s=W,c(s.object)),Q=d(M,z,B,q),Q&&_(M,z,B,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,x(M,N,B,z),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function f(M,N,B){const z=B.wireframe===!0;let q=n[M.id];q===void 0&&(q={},n[M.id]=q);let Q=q[N.id];Q===void 0&&(Q={},q[N.id]=Q);let W=Q[z];return W===void 0&&(W=h(l()),Q[z]=W),W}function h(M){const N=[],B=[],z=[];for(let q=0;q<t;q++)N[q]=0,B[q]=0,z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:z,object:M,attributes:{},index:null}}function d(M,N,B,z){const q=s.attributes,Q=N.attributes;let W=0;const j=B.getAttributes();for(const V in j)if(j[V].location>=0){const O=q[V];let ge=Q[V];if(ge===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor)),O===void 0||O.attribute!==ge||ge&&O.data!==ge.data)return!0;W++}return s.attributesNum!==W||s.index!==z}function _(M,N,B,z){const q={},Q=N.attributes;let W=0;const j=B.getAttributes();for(const V in j)if(j[V].location>=0){let O=Q[V];O===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(O=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(O=M.instanceColor));const ge={};ge.attribute=O,O&&O.data&&(ge.data=O.data),q[V]=ge,W++}s.attributes=q,s.attributesNum=W,s.index=z}function g(){const M=s.newAttributes;for(let N=0,B=M.length;N<B;N++)M[N]=0}function m(M){p(M,0)}function p(M,N){const B=s.newAttributes,z=s.enabledAttributes,q=s.attributeDivisors;B[M]=1,z[M]===0&&(i.enableVertexAttribArray(M),z[M]=1),q[M]!==N&&(i.vertexAttribDivisor(M,N),q[M]=N)}function v(){const M=s.newAttributes,N=s.enabledAttributes;for(let B=0,z=N.length;B<z;B++)N[B]!==M[B]&&(i.disableVertexAttribArray(B),N[B]=0)}function y(M,N,B,z,q,Q,W){W===!0?i.vertexAttribIPointer(M,N,B,q,Q):i.vertexAttribPointer(M,N,B,z,q,Q)}function x(M,N,B,z){g();const q=z.attributes,Q=B.getAttributes(),W=N.defaultAttributeValues;for(const j in Q){const V=Q[j];if(V.location>=0){let he=q[j];if(he===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(he=M.instanceColor)),he!==void 0){const O=he.normalized,ge=he.itemSize,Ce=e.get(he);if(Ce===void 0)continue;const ze=Ce.buffer,te=Ce.type,de=Ce.bytesPerElement,ye=te===i.INT||te===i.UNSIGNED_INT||he.gpuType===H_;if(he.isInterleavedBufferAttribute){const k=he.data,oe=k.stride,le=he.offset;if(k.isInstancedInterleavedBuffer){for(let ae=0;ae<V.locationSize;ae++)p(V.location+ae,k.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ae=0;ae<V.locationSize;ae++)m(V.location+ae);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let ae=0;ae<V.locationSize;ae++)y(V.location+ae,ge/V.locationSize,te,O,oe*de,(le+ge/V.locationSize*ae)*de,ye)}else{if(he.isInstancedBufferAttribute){for(let k=0;k<V.locationSize;k++)p(V.location+k,he.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let k=0;k<V.locationSize;k++)m(V.location+k);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let k=0;k<V.locationSize;k++)y(V.location+k,ge/V.locationSize,te,O,ge*de,ge/V.locationSize*k*de,ye)}}else if(W!==void 0){const O=W[j];if(O!==void 0)switch(O.length){case 2:i.vertexAttrib2fv(V.location,O);break;case 3:i.vertexAttrib3fv(V.location,O);break;case 4:i.vertexAttrib4fv(V.location,O);break;default:i.vertexAttrib1fv(V.location,O)}}}}v()}function E(){C();for(const M in n){const N=n[M];for(const B in N){const z=N[B];for(const q in z)u(z[q].object),delete z[q];delete N[B]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const N=n[M.id];for(const B in N){const z=N[B];for(const q in z)u(z[q].object),delete z[q];delete N[B]}delete n[M.id]}function b(M){for(const N in n){const B=n[N];if(B[M.id]===void 0)continue;const z=B[M.id];for(const q in z)u(z[q].object),delete z[q];delete B[M.id]}}function C(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function i2(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let _=0;_<f;_++)d+=u[_];t.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g]*h[g];t.update(_,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function r2(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==qi&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const C=b===Zc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==hs&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==or&&!C)}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=_>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:E,maxSamples:A}}function s2(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Rs,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||r;return r=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const v=s?0:n,y=v*4;let x=p.clippingState||null;l.value=x,x=u(_,h,y,d);for(let E=0;E!==y;++E)x[E]=t[E];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,_){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=d+g*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=d;y!==g;++y,x+=4)o.copy(f[y]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function o2(i){let e=new WeakMap;function t(o,a){return a===Kp?o.mapping=sl:a===Zp&&(o.mapping=ol),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Kp||a===Zp)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new RP(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Ta=4,tv=[.125,.215,.35,.446,.526,.582],yo=20,Cd=new cg,nv=new We;let Pd=null,Dd=0,Ld=0,Id=!1;const xo=(1+Math.sqrt(5))/2,fa=1/xo,iv=[new H(-xo,fa,0),new H(xo,fa,0),new H(-fa,0,xo),new H(fa,0,xo),new H(0,xo,-fa),new H(0,xo,fa),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class rv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Pd=this._renderer.getRenderTarget(),Dd=this._renderer.getActiveCubeFace(),Ld=this._renderer.getActiveMipmapLevel(),Id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=av(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ov(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pd,Dd,Ld),this._renderer.xr.enabled=Id,e.scissorTest=!1,Gu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sl||e.mapping===ol?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pd=this._renderer.getRenderTarget(),Dd=this._renderer.getActiveCubeFace(),Ld=this._renderer.getActiveMipmapLevel(),Id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Li,minFilter:Li,generateMipmaps:!1,type:Zc,format:qi,colorSpace:li,depthBuffer:!1},r=sv(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sv(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=a2(s)),this._blurMaterial=l2(s,e,t)}return r}_compileMaterial(e){const t=new yn(this._lodPlanes[0],e);this._renderer.compile(t,Cd)}_sceneToCubeUV(e,t,n,r){const a=new Tn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(nv),u.toneMapping=Xs,u.autoClear=!1;const d=new wr({name:"PMREM.Background",side:gi,depthWrite:!1,depthTest:!1}),_=new yn(new Qs,d);let g=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,g=!0):(d.color.copy(nv),g=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;Gu(r,v*y,p>2?y:0,y,y),u.setRenderTarget(r),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===sl||e.mapping===ol;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=av()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ov());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new yn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Gu(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Cd)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=iv[(r-s-1)%iv.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new yn(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*yo-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):yo;m>yo&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yo}`);const p=[];let v=0;for(let b=0;b<yo;++b){const C=b/g,S=Math.exp(-C*C/2);p.push(S),b===0?v+=S:b<m&&(v+=2*S)}for(let b=0;b<p.length;b++)p[b]=p[b]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=_,h.mipInt.value=y-n;const x=this._sizeLods[r],E=3*x*(r>y-Ta?r-y+Ta:0),A=4*(this._cubeSize-x);Gu(t,E,A,3*x,2*x),l.setRenderTarget(t),l.render(f,Cd)}}function a2(i){const e=[],t=[],n=[];let r=i;const s=i-Ta+1+tv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Ta?l=tv[o-i+Ta-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,_=6,g=3,m=2,p=1,v=new Float32Array(g*_*d),y=new Float32Array(m*_*d),x=new Float32Array(p*_*d);for(let A=0;A<d;A++){const b=A%3*2/3-1,C=A>2?0:-1,S=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];v.set(S,g*_*A),y.set(h,m*_*A);const M=[A,A,A,A,A,A];x.set(M,p*_*A)}const E=new Hn;E.setAttribute("position",new ai(v,g)),E.setAttribute("uv",new ai(y,m)),E.setAttribute("faceIndex",new ai(x,p)),e.push(E),r>Ta&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function sv(i,e,t){const n=new Vo(i,e,t);return n.texture.mapping=_h,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gu(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function l2(i,e,t){const n=new Float32Array(yo),r=new H(0,1,0);return new Nr({name:"SphericalGaussianBlur",defines:{n:yo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:hg(),fragmentShader:`

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
		`,blending:Ws,depthTest:!1,depthWrite:!1})}function ov(){return new Nr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hg(),fragmentShader:`

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
		`,blending:Ws,depthTest:!1,depthWrite:!1})}function av(){return new Nr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ws,depthTest:!1,depthWrite:!1})}function hg(){return`

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
	`}function c2(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Kp||l===Zp,u=l===sl||l===ol;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new rv(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new rv(i)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function u2(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&xa("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function f2(i,e,t,n){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],i.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,_=f.attributes.position;let g=0;if(d!==null){const v=d.array;g=d.version;for(let y=0,x=v.length;y<x;y+=3){const E=v[y+0],A=v[y+1],b=v[y+2];h.push(E,A,A,b,b,E)}}else if(_!==void 0){const v=_.array;g=_.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const E=y+0,A=y+1,b=y+2;h.push(E,A,A,b,b,E)}}else return;const m=new(db(h)?xb:gb)(h,1);m.version=g;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function h2(i,e,t){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){i.drawElements(n,d,s,h*o),t.update(d,n,1)}function c(h,d,_){_!==0&&(i.drawElementsInstanced(n,d,s,h*o,_),t.update(d,n,_))}function u(h,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];t.update(m,n,1)}function f(h,d,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,g,0,_);let p=0;for(let v=0;v<_;v++)p+=d[v]*g[v];t.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function d2(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function p2(i,e,t){const n=new WeakMap,r=new xt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let S=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",S)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;d===!0&&(y=1),_===!0&&(y=2),g===!0&&(y=3);let x=a.attributes.position.count*y,E=1;x>e.maxTextureSize&&(E=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const A=new Float32Array(x*E*4*f),b=new mb(A,x,E,f);b.type=or,b.needsUpdate=!0;const C=y*4;for(let M=0;M<f;M++){const N=m[M],B=p[M],z=v[M],q=x*E*4*M;for(let Q=0;Q<N.count;Q++){const W=Q*C;d===!0&&(r.fromBufferAttribute(N,Q),A[q+W+0]=r.x,A[q+W+1]=r.y,A[q+W+2]=r.z,A[q+W+3]=0),_===!0&&(r.fromBufferAttribute(B,Q),A[q+W+4]=r.x,A[q+W+5]=r.y,A[q+W+6]=r.z,A[q+W+7]=0),g===!0&&(r.fromBufferAttribute(z,Q),A[q+W+8]=r.x,A[q+W+9]=r.y,A[q+W+10]=r.z,A[q+W+11]=z.itemSize===4?r.w:1)}}h={count:f,texture:b,size:new je(x,E)},n.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];const _=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function m2(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Ib=new Sn,lv=new wb(1,1),Nb=new mb,Ob=new hP,Ub=new Sb,cv=[],uv=[],fv=new Float32Array(16),hv=new Float32Array(9),dv=new Float32Array(4);function yl(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=cv[r];if(s===void 0&&(s=new Float32Array(r),cv[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function pn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function mn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function yh(i,e){let t=uv[e];t===void 0&&(t=new Int32Array(e),uv[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function _2(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function g2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;i.uniform2fv(this.addr,e),mn(t,e)}}function x2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pn(t,e))return;i.uniform3fv(this.addr,e),mn(t,e)}}function v2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;i.uniform4fv(this.addr,e),mn(t,e)}}function y2(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;dv.set(n),i.uniformMatrix2fv(this.addr,!1,dv),mn(t,n)}}function S2(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;hv.set(n),i.uniformMatrix3fv(this.addr,!1,hv),mn(t,n)}}function M2(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;fv.set(n),i.uniformMatrix4fv(this.addr,!1,fv),mn(t,n)}}function b2(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function E2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;i.uniform2iv(this.addr,e),mn(t,e)}}function T2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;i.uniform3iv(this.addr,e),mn(t,e)}}function w2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;i.uniform4iv(this.addr,e),mn(t,e)}}function A2(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function R2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;i.uniform2uiv(this.addr,e),mn(t,e)}}function C2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;i.uniform3uiv(this.addr,e),mn(t,e)}}function P2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;i.uniform4uiv(this.addr,e),mn(t,e)}}function D2(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(lv.compareFunction=fb,s=lv):s=Ib,t.setTexture2D(e||s,r)}function L2(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ob,r)}function I2(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Ub,r)}function N2(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Nb,r)}function O2(i){switch(i){case 5126:return _2;case 35664:return g2;case 35665:return x2;case 35666:return v2;case 35674:return y2;case 35675:return S2;case 35676:return M2;case 5124:case 35670:return b2;case 35667:case 35671:return E2;case 35668:case 35672:return T2;case 35669:case 35673:return w2;case 5125:return A2;case 36294:return R2;case 36295:return C2;case 36296:return P2;case 35678:case 36198:case 36298:case 36306:case 35682:return D2;case 35679:case 36299:case 36307:return L2;case 35680:case 36300:case 36308:case 36293:return I2;case 36289:case 36303:case 36311:case 36292:return N2}}function U2(i,e){i.uniform1fv(this.addr,e)}function F2(i,e){const t=yl(e,this.size,2);i.uniform2fv(this.addr,t)}function B2(i,e){const t=yl(e,this.size,3);i.uniform3fv(this.addr,t)}function k2(i,e){const t=yl(e,this.size,4);i.uniform4fv(this.addr,t)}function z2(i,e){const t=yl(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function H2(i,e){const t=yl(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function V2(i,e){const t=yl(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function G2(i,e){i.uniform1iv(this.addr,e)}function W2(i,e){i.uniform2iv(this.addr,e)}function X2(i,e){i.uniform3iv(this.addr,e)}function j2(i,e){i.uniform4iv(this.addr,e)}function Y2(i,e){i.uniform1uiv(this.addr,e)}function q2(i,e){i.uniform2uiv(this.addr,e)}function $2(i,e){i.uniform3uiv(this.addr,e)}function K2(i,e){i.uniform4uiv(this.addr,e)}function Z2(i,e,t){const n=this.cache,r=e.length,s=yh(t,r);pn(n,s)||(i.uniform1iv(this.addr,s),mn(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Ib,s[o])}function J2(i,e,t){const n=this.cache,r=e.length,s=yh(t,r);pn(n,s)||(i.uniform1iv(this.addr,s),mn(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ob,s[o])}function Q2(i,e,t){const n=this.cache,r=e.length,s=yh(t,r);pn(n,s)||(i.uniform1iv(this.addr,s),mn(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Ub,s[o])}function eN(i,e,t){const n=this.cache,r=e.length,s=yh(t,r);pn(n,s)||(i.uniform1iv(this.addr,s),mn(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Nb,s[o])}function tN(i){switch(i){case 5126:return U2;case 35664:return F2;case 35665:return B2;case 35666:return k2;case 35674:return z2;case 35675:return H2;case 35676:return V2;case 5124:case 35670:return G2;case 35667:case 35671:return W2;case 35668:case 35672:return X2;case 35669:case 35673:return j2;case 5125:return Y2;case 36294:return q2;case 36295:return $2;case 36296:return K2;case 35678:case 36198:case 36298:case 36306:case 35682:return Z2;case 35679:case 36299:case 36307:return J2;case 35680:case 36300:case 36308:case 36293:return Q2;case 36289:case 36303:case 36311:case 36292:return eN}}class nN{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=O2(t.type)}}class iN{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tN(t.type)}}class rN{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Nd=/(\w+)(\])?(\[|\.)?/g;function pv(i,e){i.seq.push(e),i.map[e.id]=e}function sN(i,e,t){const n=i.name,r=n.length;for(Nd.lastIndex=0;;){const s=Nd.exec(n),o=Nd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){pv(t,c===void 0?new nN(a,i,e):new iN(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new rN(a),pv(t,f)),t=f}}}class xf{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);sN(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function mv(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const oN=37297;let aN=0;function lN(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const _v=new tt;function cN(i){pt._getMatrix(_v,pt.workingColorSpace,i);const e=`mat3( ${_v.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(i)){case Wf:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function gv(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+lN(i.getShaderSource(e),o)}else return r}function uN(i,e){const t=cN(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function fN(i,e){let t;switch(e){case SC:t="Linear";break;case MC:t="Reinhard";break;case bC:t="Cineon";break;case EC:t="ACESFilmic";break;case wC:t="AgX";break;case AC:t="Neutral";break;case TC:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wu=new H;function hN(){pt.getLuminanceCoefficients(Wu);const i=Wu.x.toFixed(4),e=Wu.y.toFixed(4),t=Wu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dN(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($l).join(`
`)}function pN(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function mN(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function $l(i){return i!==""}function xv(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vv(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _N=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dm(i){return i.replace(_N,xN)}const gN=new Map;function xN(i,e){let t=nt[e];if(t===void 0){const n=gN.get(e);if(n!==void 0)t=nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Dm(t)}const vN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yv(i){return i.replace(vN,yN)}function yN(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Sv(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function SN(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===JM?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===eC?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===jr&&(e="SHADOWMAP_TYPE_VSM"),e}function MN(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case sl:case ol:e="ENVMAP_TYPE_CUBE";break;case _h:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bN(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ol:e="ENVMAP_MODE_REFRACTION";break}return e}function EN(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case z_:e="ENVMAP_BLENDING_MULTIPLY";break;case vC:e="ENVMAP_BLENDING_MIX";break;case yC:e="ENVMAP_BLENDING_ADD";break}return e}function TN(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function wN(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=SN(t),c=MN(t),u=bN(t),f=EN(t),h=TN(t),d=dN(t),_=pN(s),g=r.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter($l).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter($l).join(`
`),p.length>0&&(p+=`
`)):(m=[Sv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($l).join(`
`),p=[Sv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xs?"#define TONE_MAPPING":"",t.toneMapping!==Xs?nt.tonemapping_pars_fragment:"",t.toneMapping!==Xs?fN("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,uN("linearToOutputTexel",t.outputColorSpace),hN(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($l).join(`
`)),o=Dm(o),o=xv(o,t),o=vv(o,t),a=Dm(a),a=xv(a,t),a=vv(a,t),o=yv(o),a=yv(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===hx?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+m+o,x=v+p+a,E=mv(r,r.VERTEX_SHADER,y),A=mv(r,r.FRAGMENT_SHADER,x);r.attachShader(g,E),r.attachShader(g,A),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function b(N){if(i.debug.checkShaderErrors){const B=r.getProgramInfoLog(g).trim(),z=r.getShaderInfoLog(E).trim(),q=r.getShaderInfoLog(A).trim();let Q=!0,W=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,E,A);else{const j=gv(r,E,"vertex"),V=gv(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+B+`
`+j+`
`+V)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(z===""||q==="")&&(W=!1);W&&(N.diagnostics={runnable:Q,programLog:B,vertexShader:{log:z,prefix:m},fragmentShader:{log:q,prefix:p}})}r.deleteShader(E),r.deleteShader(A),C=new xf(r,g),S=mN(r,g)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(g,oN)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=aN++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=A,this}let AN=0;class RN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new CN(e),t.set(e,n)),n}}class CN{constructor(e){this.id=AN++,this.code=e,this.usedTimes=0}}function PN(i,e,t,n,r,s,o){const a=new K_,l=new RN,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,N,B,z){const q=B.fog,Q=z.geometry,W=S.isMeshStandardMaterial?B.environment:null,j=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),V=j&&j.mapping===_h?j.image.height:null,he=_[S.type];S.precision!==null&&(d=r.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const O=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ge=O!==void 0?O.length:0;let Ce=0;Q.morphAttributes.position!==void 0&&(Ce=1),Q.morphAttributes.normal!==void 0&&(Ce=2),Q.morphAttributes.color!==void 0&&(Ce=3);let ze,te,de,ye;if(he){const Re=hi[he];ze=Re.vertexShader,te=Re.fragmentShader}else ze=S.vertexShader,te=S.fragmentShader,l.update(S),de=l.getVertexShaderID(S),ye=l.getFragmentShaderID(S);const k=i.getRenderTarget(),oe=i.state.buffers.depth.getReversed(),le=z.isInstancedMesh===!0,ae=z.isBatchedMesh===!0,Le=!!S.map,I=!!S.matcap,D=!!j,w=!!S.aoMap,re=!!S.lightMap,J=!!S.bumpMap,L=!!S.normalMap,ie=!!S.displacementMap,ue=!!S.emissiveMap,ne=!!S.metalnessMap,R=!!S.roughnessMap,T=S.anisotropy>0,U=S.clearcoat>0,Y=S.dispersion>0,$=S.iridescence>0,Z=S.sheen>0,pe=S.transmission>0,fe=T&&!!S.anisotropyMap,ve=U&&!!S.clearcoatMap,Fe=U&&!!S.clearcoatNormalMap,me=U&&!!S.clearcoatRoughnessMap,xe=$&&!!S.iridescenceMap,Oe=$&&!!S.iridescenceThicknessMap,Be=Z&&!!S.sheenColorMap,Se=Z&&!!S.sheenRoughnessMap,Ve=!!S.specularMap,Ge=!!S.specularColorMap,dt=!!S.specularIntensityMap,F=pe&&!!S.transmissionMap,be=pe&&!!S.thicknessMap,se=!!S.gradientMap,ce=!!S.alphaMap,Me=S.alphaTest>0,Te=!!S.alphaHash,qe=!!S.extensions;let mt=Xs;S.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(mt=i.toneMapping);const Xt={shaderID:he,shaderType:S.type,shaderName:S.name,vertexShader:ze,fragmentShader:te,defines:S.defines,customVertexShaderID:de,customFragmentShaderID:ye,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:ae,batchingColor:ae&&z._colorsTexture!==null,instancing:le,instancingColor:le&&z.instanceColor!==null,instancingMorph:le&&z.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:k===null?i.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:li,alphaToCoverage:!!S.alphaToCoverage,map:Le,matcap:I,envMap:D,envMapMode:D&&j.mapping,envMapCubeUVHeight:V,aoMap:w,lightMap:re,bumpMap:J,normalMap:L,displacementMap:h&&ie,emissiveMap:ue,normalMapObjectSpace:L&&S.normalMapType===IC,normalMapTangentSpace:L&&S.normalMapType===q_,metalnessMap:ne,roughnessMap:R,anisotropy:T,anisotropyMap:fe,clearcoat:U,clearcoatMap:ve,clearcoatNormalMap:Fe,clearcoatRoughnessMap:me,dispersion:Y,iridescence:$,iridescenceMap:xe,iridescenceThicknessMap:Oe,sheen:Z,sheenColorMap:Be,sheenRoughnessMap:Se,specularMap:Ve,specularColorMap:Ge,specularIntensityMap:dt,transmission:pe,transmissionMap:F,thicknessMap:be,gradientMap:se,opaque:S.transparent===!1&&S.blending===za&&S.alphaToCoverage===!1,alphaMap:ce,alphaTest:Me,alphaHash:Te,combine:S.combine,mapUv:Le&&g(S.map.channel),aoMapUv:w&&g(S.aoMap.channel),lightMapUv:re&&g(S.lightMap.channel),bumpMapUv:J&&g(S.bumpMap.channel),normalMapUv:L&&g(S.normalMap.channel),displacementMapUv:ie&&g(S.displacementMap.channel),emissiveMapUv:ue&&g(S.emissiveMap.channel),metalnessMapUv:ne&&g(S.metalnessMap.channel),roughnessMapUv:R&&g(S.roughnessMap.channel),anisotropyMapUv:fe&&g(S.anisotropyMap.channel),clearcoatMapUv:ve&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Se&&g(S.sheenRoughnessMap.channel),specularMapUv:Ve&&g(S.specularMap.channel),specularColorMapUv:Ge&&g(S.specularColorMap.channel),specularIntensityMapUv:dt&&g(S.specularIntensityMap.channel),transmissionMapUv:F&&g(S.transmissionMap.channel),thicknessMapUv:be&&g(S.thicknessMap.channel),alphaMapUv:ce&&g(S.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(L||T),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Q.attributes.uv&&(Le||ce),fog:!!q,useFog:S.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:oe,skinning:z.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Ce,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:mt,decodeVideoTexture:Le&&S.map.isVideoTexture===!0&&pt.getTransfer(S.map.colorSpace)===Rt,decodeVideoTextureEmissive:ue&&S.emissiveMap.isVideoTexture===!0&&pt.getTransfer(S.emissiveMap.colorSpace)===Rt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===br,flipSided:S.side===gi,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:qe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&S.extensions.multiDraw===!0||ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Xt.vertexUv1s=c.has(1),Xt.vertexUv2s=c.has(2),Xt.vertexUv3s=c.has(3),c.clear(),Xt}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const N in S.defines)M.push(N),M.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(v(M,S),y(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function v(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const M=_[S.type];let N;if(M){const B=hi[M];N=Z_.clone(B.uniforms)}else N=S.uniforms;return N}function E(S,M){let N;for(let B=0,z=u.length;B<z;B++){const q=u[B];if(q.cacheKey===M){N=q,++N.usedTimes;break}}return N===void 0&&(N=new wN(i,M,S,s),u.push(N)),N}function A(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function b(S){l.remove(S)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:E,releaseProgram:A,releaseShaderCache:b,programs:u,dispose:C}}function DN(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function LN(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Mv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function bv(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,h,d,_,g,m){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},i[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=g,p.group=m),e++,p}function a(f,h,d,_,g,m){const p=o(f,h,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,_,g,m){const p=o(f,h,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||LN),n.length>1&&n.sort(h||Mv),r.length>1&&r.sort(h||Mv)}function u(){for(let f=e,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function IN(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new bv,i.set(n,[o])):r>=s.length?(o=new bv,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function NN(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new We};break;case"SpotLight":t={position:new H,direction:new H,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function ON(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let UN=0;function FN(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function BN(i){const e=new NN,t=ON(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);const r=new H,s=new Qe,o=new Qe;function a(c){let u=0,f=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,_=0,g=0,m=0,p=0,v=0,y=0,x=0,E=0,A=0,b=0;c.sort(FN);for(let S=0,M=c.length;S<M;S++){const N=c[S],B=N.color,z=N.intensity,q=N.distance,Q=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=B.r*z,f+=B.g*z,h+=B.b*z;else if(N.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(N.sh.coefficients[W],z);b++}else if(N.isDirectionalLight){const W=e.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const j=N.shadow,V=t.get(N);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=Q,n.directionalShadowMatrix[d]=N.shadow.matrix,v++}n.directional[d]=W,d++}else if(N.isSpotLight){const W=e.get(N);W.position.setFromMatrixPosition(N.matrixWorld),W.color.copy(B).multiplyScalar(z),W.distance=q,W.coneCos=Math.cos(N.angle),W.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),W.decay=N.decay,n.spot[g]=W;const j=N.shadow;if(N.map&&(n.spotLightMap[E]=N.map,E++,j.updateMatrices(N),N.castShadow&&A++),n.spotLightMatrix[g]=j.matrix,N.castShadow){const V=t.get(N);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.spotShadow[g]=V,n.spotShadowMap[g]=Q,x++}g++}else if(N.isRectAreaLight){const W=e.get(N);W.color.copy(B).multiplyScalar(z),W.halfWidth.set(N.width*.5,0,0),W.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=W,m++}else if(N.isPointLight){const W=e.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),W.distance=N.distance,W.decay=N.decay,N.castShadow){const j=N.shadow,V=t.get(N);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,V.shadowCameraNear=j.camera.near,V.shadowCameraFar=j.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=Q,n.pointShadowMatrix[_]=N.shadow.matrix,y++}n.point[_]=W,_++}else if(N.isHemisphereLight){const W=e.get(N);W.skyColor.copy(N.color).multiplyScalar(z),W.groundColor.copy(N.groundColor).multiplyScalar(z),n.hemi[p]=W,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const C=n.hash;(C.directionalLength!==d||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==v||C.numPointShadows!==y||C.numSpotShadows!==x||C.numSpotMaps!==E||C.numLightProbes!==b)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+E-A,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=b,C.directionalLength=d,C.pointLength=_,C.spotLength=g,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=v,C.numPointShadows=y,C.numSpotShadows=x,C.numSpotMaps=E,C.numLightProbes=b,n.version=UN++)}function l(c,u){let f=0,h=0,d=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const y=c[p];if(y.isDirectionalLight){const x=n.directional[f];x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(y.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const x=n.point[h];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Ev(i){const e=new BN(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function kN(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ev(i),e.set(r,[a])):s>=o.length?(a=new Ev(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const zN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
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
}`;function VN(i,e,t){let n=new Q_;const r=new je,s=new je,o=new xt,a=new kP({depthPacking:LC}),l=new zP,c={},u=t.maxTextureSize,f={[fs]:gi,[gi]:fs,[br]:br},h=new Nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:zN,fragmentShader:HN}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new Hn;_.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new yn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=JM;let p=this.type;this.render=function(A,b,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Ws),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const z=p!==jr&&this.type===jr,q=p===jr&&this.type!==jr;for(let Q=0,W=A.length;Q<W;Q++){const j=A[Q],V=j.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const he=V.getFrameExtents();if(r.multiply(he),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/he.x),r.x=s.x*he.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/he.y),r.y=s.y*he.y,V.mapSize.y=s.y)),V.map===null||z===!0||q===!0){const ge=this.type!==jr?{minFilter:oi,magFilter:oi}:{};V.map!==null&&V.map.dispose(),V.map=new Vo(r.x,r.y,ge),V.map.texture.name=j.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const O=V.getViewportCount();for(let ge=0;ge<O;ge++){const Ce=V.getViewport(ge);o.set(s.x*Ce.x,s.y*Ce.y,s.x*Ce.z,s.y*Ce.w),B.viewport(o),V.updateMatrices(j,ge),n=V.getFrustum(),x(b,C,V.camera,j,this.type)}V.isPointLightShadow!==!0&&this.type===jr&&v(V,C),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,N)};function v(A,b){const C=e.update(g);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Vo(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(b,null,C,h,g,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(b,null,C,d,g,null)}function y(A,b,C,S){let M=null;const N=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)M=N;else if(M=C.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const B=M.uuid,z=b.uuid;let q=c[B];q===void 0&&(q={},c[B]=q);let Q=q[z];Q===void 0&&(Q=M.clone(),q[z]=Q,b.addEventListener("dispose",E)),M=Q}if(M.visible=b.visible,M.wireframe=b.wireframe,S===jr?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:f[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=i.properties.get(M);B.light=C}return M}function x(A,b,C,S,M){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===jr)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const z=e.update(A),q=A.material;if(Array.isArray(q)){const Q=z.groups;for(let W=0,j=Q.length;W<j;W++){const V=Q[W],he=q[V.materialIndex];if(he&&he.visible){const O=y(A,he,S,M);A.onBeforeShadow(i,A,b,C,z,O,V),i.renderBufferDirect(C,null,z,O,A,V),A.onAfterShadow(i,A,b,C,z,O,V)}}}else if(q.visible){const Q=y(A,q,S,M);A.onBeforeShadow(i,A,b,C,z,Q,null),i.renderBufferDirect(C,null,z,Q,A,null),A.onAfterShadow(i,A,b,C,z,Q,null)}}const B=A.children;for(let z=0,q=B.length;z<q;z++)x(B[z],b,C,S,M)}function E(A){A.target.removeEventListener("dispose",E);for(const C in c){const S=c[C],M=A.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const GN={[Gp]:Wp,[Xp]:qp,[jp]:$p,[rl]:Yp,[Wp]:Gp,[qp]:Xp,[$p]:jp,[Yp]:rl};function WN(i,e){function t(){let F=!1;const be=new xt;let se=null;const ce=new xt(0,0,0,0);return{setMask:function(Me){se!==Me&&!F&&(i.colorMask(Me,Me,Me,Me),se=Me)},setLocked:function(Me){F=Me},setClear:function(Me,Te,qe,mt,Xt){Xt===!0&&(Me*=mt,Te*=mt,qe*=mt),be.set(Me,Te,qe,mt),ce.equals(be)===!1&&(i.clearColor(Me,Te,qe,mt),ce.copy(be))},reset:function(){F=!1,se=null,ce.set(-1,0,0,0)}}}function n(){let F=!1,be=!1,se=null,ce=null,Me=null;return{setReversed:function(Te){if(be!==Te){const qe=e.get("EXT_clip_control");be?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT);const mt=Me;Me=null,this.setClear(mt)}be=Te},getReversed:function(){return be},setTest:function(Te){Te?k(i.DEPTH_TEST):oe(i.DEPTH_TEST)},setMask:function(Te){se!==Te&&!F&&(i.depthMask(Te),se=Te)},setFunc:function(Te){if(be&&(Te=GN[Te]),ce!==Te){switch(Te){case Gp:i.depthFunc(i.NEVER);break;case Wp:i.depthFunc(i.ALWAYS);break;case Xp:i.depthFunc(i.LESS);break;case rl:i.depthFunc(i.LEQUAL);break;case jp:i.depthFunc(i.EQUAL);break;case Yp:i.depthFunc(i.GEQUAL);break;case qp:i.depthFunc(i.GREATER);break;case $p:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ce=Te}},setLocked:function(Te){F=Te},setClear:function(Te){Me!==Te&&(be&&(Te=1-Te),i.clearDepth(Te),Me=Te)},reset:function(){F=!1,se=null,ce=null,Me=null,be=!1}}}function r(){let F=!1,be=null,se=null,ce=null,Me=null,Te=null,qe=null,mt=null,Xt=null;return{setTest:function(Re){F||(Re?k(i.STENCIL_TEST):oe(i.STENCIL_TEST))},setMask:function(Re){be!==Re&&!F&&(i.stencilMask(Re),be=Re)},setFunc:function(Re,Ne,et){(se!==Re||ce!==Ne||Me!==et)&&(i.stencilFunc(Re,Ne,et),se=Re,ce=Ne,Me=et)},setOp:function(Re,Ne,et){(Te!==Re||qe!==Ne||mt!==et)&&(i.stencilOp(Re,Ne,et),Te=Re,qe=Ne,mt=et)},setLocked:function(Re){F=Re},setClear:function(Re){Xt!==Re&&(i.clearStencil(Re),Xt=Re)},reset:function(){F=!1,be=null,se=null,ce=null,Me=null,Te=null,qe=null,mt=null,Xt=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],_=null,g=!1,m=null,p=null,v=null,y=null,x=null,E=null,A=null,b=new We(0,0,0),C=0,S=!1,M=null,N=null,B=null,z=null,q=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,j=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=j>=1):V.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=j>=2);let he=null,O={};const ge=i.getParameter(i.SCISSOR_BOX),Ce=i.getParameter(i.VIEWPORT),ze=new xt().fromArray(ge),te=new xt().fromArray(Ce);function de(F,be,se,ce){const Me=new Uint8Array(4),Te=i.createTexture();i.bindTexture(F,Te),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qe=0;qe<se;qe++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(be,0,i.RGBA,1,1,ce,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(be+qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return Te}const ye={};ye[i.TEXTURE_2D]=de(i.TEXTURE_2D,i.TEXTURE_2D,1),ye[i.TEXTURE_CUBE_MAP]=de(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[i.TEXTURE_2D_ARRAY]=de(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ye[i.TEXTURE_3D]=de(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),k(i.DEPTH_TEST),o.setFunc(rl),J(!1),L(ix),k(i.CULL_FACE),w(Ws);function k(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function oe(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function le(F,be){return f[F]!==be?(i.bindFramebuffer(F,be),f[F]=be,F===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=be),F===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=be),!0):!1}function ae(F,be){let se=d,ce=!1;if(F){se=h.get(be),se===void 0&&(se=[],h.set(be,se));const Me=F.textures;if(se.length!==Me.length||se[0]!==i.COLOR_ATTACHMENT0){for(let Te=0,qe=Me.length;Te<qe;Te++)se[Te]=i.COLOR_ATTACHMENT0+Te;se.length=Me.length,ce=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,ce=!0);ce&&i.drawBuffers(se)}function Le(F){return _!==F?(i.useProgram(F),_=F,!0):!1}const I={[vo]:i.FUNC_ADD,[nC]:i.FUNC_SUBTRACT,[iC]:i.FUNC_REVERSE_SUBTRACT};I[rC]=i.MIN,I[sC]=i.MAX;const D={[oC]:i.ZERO,[aC]:i.ONE,[lC]:i.SRC_COLOR,[Hp]:i.SRC_ALPHA,[pC]:i.SRC_ALPHA_SATURATE,[hC]:i.DST_COLOR,[uC]:i.DST_ALPHA,[cC]:i.ONE_MINUS_SRC_COLOR,[Vp]:i.ONE_MINUS_SRC_ALPHA,[dC]:i.ONE_MINUS_DST_COLOR,[fC]:i.ONE_MINUS_DST_ALPHA,[mC]:i.CONSTANT_COLOR,[_C]:i.ONE_MINUS_CONSTANT_COLOR,[gC]:i.CONSTANT_ALPHA,[xC]:i.ONE_MINUS_CONSTANT_ALPHA};function w(F,be,se,ce,Me,Te,qe,mt,Xt,Re){if(F===Ws){g===!0&&(oe(i.BLEND),g=!1);return}if(g===!1&&(k(i.BLEND),g=!0),F!==tC){if(F!==m||Re!==S){if((p!==vo||x!==vo)&&(i.blendEquation(i.FUNC_ADD),p=vo,x=vo),Re)switch(F){case za:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rx:i.blendFunc(i.ONE,i.ONE);break;case sx:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ox:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case za:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rx:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case sx:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ox:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}v=null,y=null,E=null,A=null,b.set(0,0,0),C=0,m=F,S=Re}return}Me=Me||be,Te=Te||se,qe=qe||ce,(be!==p||Me!==x)&&(i.blendEquationSeparate(I[be],I[Me]),p=be,x=Me),(se!==v||ce!==y||Te!==E||qe!==A)&&(i.blendFuncSeparate(D[se],D[ce],D[Te],D[qe]),v=se,y=ce,E=Te,A=qe),(mt.equals(b)===!1||Xt!==C)&&(i.blendColor(mt.r,mt.g,mt.b,Xt),b.copy(mt),C=Xt),m=F,S=!1}function re(F,be){F.side===br?oe(i.CULL_FACE):k(i.CULL_FACE);let se=F.side===gi;be&&(se=!se),J(se),F.blending===za&&F.transparent===!1?w(Ws):w(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const ce=F.stencilWrite;a.setTest(ce),ce&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ue(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?k(i.SAMPLE_ALPHA_TO_COVERAGE):oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function J(F){M!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),M=F)}function L(F){F!==JR?(k(i.CULL_FACE),F!==N&&(F===ix?i.cullFace(i.BACK):F===QR?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):oe(i.CULL_FACE),N=F}function ie(F){F!==B&&(W&&i.lineWidth(F),B=F)}function ue(F,be,se){F?(k(i.POLYGON_OFFSET_FILL),(z!==be||q!==se)&&(i.polygonOffset(be,se),z=be,q=se)):oe(i.POLYGON_OFFSET_FILL)}function ne(F){F?k(i.SCISSOR_TEST):oe(i.SCISSOR_TEST)}function R(F){F===void 0&&(F=i.TEXTURE0+Q-1),he!==F&&(i.activeTexture(F),he=F)}function T(F,be,se){se===void 0&&(he===null?se=i.TEXTURE0+Q-1:se=he);let ce=O[se];ce===void 0&&(ce={type:void 0,texture:void 0},O[se]=ce),(ce.type!==F||ce.texture!==be)&&(he!==se&&(i.activeTexture(se),he=se),i.bindTexture(F,be||ye[F]),ce.type=F,ce.texture=be)}function U(){const F=O[he];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Fe(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function me(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Oe(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Be(F){ze.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),ze.copy(F))}function Se(F){te.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),te.copy(F))}function Ve(F,be){let se=c.get(be);se===void 0&&(se=new WeakMap,c.set(be,se));let ce=se.get(F);ce===void 0&&(ce=i.getUniformBlockIndex(be,F.name),se.set(F,ce))}function Ge(F,be){const ce=c.get(be).get(F);l.get(be)!==ce&&(i.uniformBlockBinding(be,ce,F.__bindingPointIndex),l.set(be,ce))}function dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},he=null,O={},f={},h=new WeakMap,d=[],_=null,g=!1,m=null,p=null,v=null,y=null,x=null,E=null,A=null,b=new We(0,0,0),C=0,S=!1,M=null,N=null,B=null,z=null,q=null,ze.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:k,disable:oe,bindFramebuffer:le,drawBuffers:ae,useProgram:Le,setBlending:w,setMaterial:re,setFlipSided:J,setCullFace:L,setLineWidth:ie,setPolygonOffset:ue,setScissorTest:ne,activeTexture:R,bindTexture:T,unbindTexture:U,compressedTexImage2D:Y,compressedTexImage3D:$,texImage2D:xe,texImage3D:Oe,updateUBOMapping:Ve,uniformBlockBinding:Ge,texStorage2D:Fe,texStorage3D:me,texSubImage2D:Z,texSubImage3D:pe,compressedTexSubImage2D:fe,compressedTexSubImage3D:ve,scissor:Be,viewport:Se,reset:dt}}function XN(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,T){return d?new OffscreenCanvas(R,T):Gc("canvas")}function g(R,T,U){let Y=1;const $=ne(R);if(($.width>U||$.height>U)&&(Y=U/Math.max($.width,$.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Z=Math.floor(Y*$.width),pe=Math.floor(Y*$.height);f===void 0&&(f=_(Z,pe));const fe=T?_(Z,pe):f;return fe.width=Z,fe.height=pe,fe.getContext("2d").drawImage(R,0,0,Z,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Z+"x"+pe+")."),fe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,T,U,Y,$=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=T;if(T===i.RED&&(U===i.FLOAT&&(Z=i.R32F),U===i.HALF_FLOAT&&(Z=i.R16F),U===i.UNSIGNED_BYTE&&(Z=i.R8)),T===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(Z=i.R8UI),U===i.UNSIGNED_SHORT&&(Z=i.R16UI),U===i.UNSIGNED_INT&&(Z=i.R32UI),U===i.BYTE&&(Z=i.R8I),U===i.SHORT&&(Z=i.R16I),U===i.INT&&(Z=i.R32I)),T===i.RG&&(U===i.FLOAT&&(Z=i.RG32F),U===i.HALF_FLOAT&&(Z=i.RG16F),U===i.UNSIGNED_BYTE&&(Z=i.RG8)),T===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(Z=i.RG8UI),U===i.UNSIGNED_SHORT&&(Z=i.RG16UI),U===i.UNSIGNED_INT&&(Z=i.RG32UI),U===i.BYTE&&(Z=i.RG8I),U===i.SHORT&&(Z=i.RG16I),U===i.INT&&(Z=i.RG32I)),T===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),U===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),U===i.UNSIGNED_INT&&(Z=i.RGB32UI),U===i.BYTE&&(Z=i.RGB8I),U===i.SHORT&&(Z=i.RGB16I),U===i.INT&&(Z=i.RGB32I)),T===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),U===i.UNSIGNED_INT&&(Z=i.RGBA32UI),U===i.BYTE&&(Z=i.RGBA8I),U===i.SHORT&&(Z=i.RGBA16I),U===i.INT&&(Z=i.RGBA32I)),T===i.RGB&&U===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),T===i.RGBA){const pe=$?Wf:pt.getTransfer(Y);U===i.FLOAT&&(Z=i.RGBA32F),U===i.HALF_FLOAT&&(Z=i.RGBA16F),U===i.UNSIGNED_BYTE&&(Z=pe===Rt?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function x(R,T){let U;return R?T===null||T===Ho||T===ll?U=i.DEPTH24_STENCIL8:T===or?U=i.DEPTH32F_STENCIL8:T===zc&&(U=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ho||T===ll?U=i.DEPTH_COMPONENT24:T===or?U=i.DEPTH_COMPONENT32F:T===zc&&(U=i.DEPTH_COMPONENT16),U}function E(R,T){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==oi&&R.minFilter!==Li?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function A(R){const T=R.target;T.removeEventListener("dispose",A),C(T),T.isVideoTexture&&u.delete(T)}function b(R){const T=R.target;T.removeEventListener("dispose",b),M(T)}function C(R){const T=n.get(R);if(T.__webglInit===void 0)return;const U=R.source,Y=h.get(U);if(Y){const $=Y[T.__cacheKey];$.usedTimes--,$.usedTimes===0&&S(R),Object.keys(Y).length===0&&h.delete(U)}n.remove(R)}function S(R){const T=n.get(R);i.deleteTexture(T.__webglTexture);const U=R.source,Y=h.get(U);delete Y[T.__cacheKey],o.memory.textures--}function M(R){const T=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(T.__webglFramebuffer[Y]))for(let $=0;$<T.__webglFramebuffer[Y].length;$++)i.deleteFramebuffer(T.__webglFramebuffer[Y][$]);else i.deleteFramebuffer(T.__webglFramebuffer[Y]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[Y])}else{if(Array.isArray(T.__webglFramebuffer))for(let Y=0;Y<T.__webglFramebuffer.length;Y++)i.deleteFramebuffer(T.__webglFramebuffer[Y]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Y=0;Y<T.__webglColorRenderbuffer.length;Y++)T.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[Y]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const U=R.textures;for(let Y=0,$=U.length;Y<$;Y++){const Z=n.get(U[Y]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(U[Y])}n.remove(R)}let N=0;function B(){N=0}function z(){const R=N;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),N+=1,R}function q(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function Q(R,T){const U=n.get(R);if(R.isVideoTexture&&ie(R),R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){const Y=R.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(U,R,T);return}}t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+T)}function W(R,T){const U=n.get(R);if(R.version>0&&U.__version!==R.version){te(U,R,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+T)}function j(R,T){const U=n.get(R);if(R.version>0&&U.__version!==R.version){te(U,R,T);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+T)}function V(R,T){const U=n.get(R);if(R.version>0&&U.__version!==R.version){de(U,R,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+T)}const he={[al]:i.REPEAT,[Us]:i.CLAMP_TO_EDGE,[Gf]:i.MIRRORED_REPEAT},O={[oi]:i.NEAREST,[eb]:i.NEAREST_MIPMAP_NEAREST,[ql]:i.NEAREST_MIPMAP_LINEAR,[Li]:i.LINEAR,[hf]:i.LINEAR_MIPMAP_NEAREST,[is]:i.LINEAR_MIPMAP_LINEAR},ge={[NC]:i.NEVER,[zC]:i.ALWAYS,[OC]:i.LESS,[fb]:i.LEQUAL,[UC]:i.EQUAL,[kC]:i.GEQUAL,[FC]:i.GREATER,[BC]:i.NOTEQUAL};function Ce(R,T){if(T.type===or&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Li||T.magFilter===hf||T.magFilter===ql||T.magFilter===is||T.minFilter===Li||T.minFilter===hf||T.minFilter===ql||T.minFilter===is)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,he[T.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,he[T.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,he[T.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,O[T.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,O[T.minFilter]),T.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,ge[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===oi||T.minFilter!==ql&&T.minFilter!==is||T.type===or&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function ze(R,T){let U=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",A));const Y=T.source;let $=h.get(Y);$===void 0&&($={},h.set(Y,$));const Z=q(T);if(Z!==R.__cacheKey){$[Z]===void 0&&($[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),$[Z].usedTimes++;const pe=$[R.__cacheKey];pe!==void 0&&($[R.__cacheKey].usedTimes--,pe.usedTimes===0&&S(T)),R.__cacheKey=Z,R.__webglTexture=$[Z].texture}return U}function te(R,T,U){let Y=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Y=i.TEXTURE_3D);const $=ze(R,T),Z=T.source;t.bindTexture(Y,R.__webglTexture,i.TEXTURE0+U);const pe=n.get(Z);if(Z.version!==pe.__version||$===!0){t.activeTexture(i.TEXTURE0+U);const fe=pt.getPrimaries(pt.workingColorSpace),ve=T.colorSpace===Ps?null:pt.getPrimaries(T.colorSpace),Fe=T.colorSpace===Ps||fe===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let me=g(T.image,!1,r.maxTextureSize);me=ue(T,me);const xe=s.convert(T.format,T.colorSpace),Oe=s.convert(T.type);let Be=y(T.internalFormat,xe,Oe,T.colorSpace,T.isVideoTexture);Ce(Y,T);let Se;const Ve=T.mipmaps,Ge=T.isVideoTexture!==!0,dt=pe.__version===void 0||$===!0,F=Z.dataReady,be=E(T,me);if(T.isDepthTexture)Be=x(T.format===cl,T.type),dt&&(Ge?t.texStorage2D(i.TEXTURE_2D,1,Be,me.width,me.height):t.texImage2D(i.TEXTURE_2D,0,Be,me.width,me.height,0,xe,Oe,null));else if(T.isDataTexture)if(Ve.length>0){Ge&&dt&&t.texStorage2D(i.TEXTURE_2D,be,Be,Ve[0].width,Ve[0].height);for(let se=0,ce=Ve.length;se<ce;se++)Se=Ve[se],Ge?F&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Se.width,Se.height,xe,Oe,Se.data):t.texImage2D(i.TEXTURE_2D,se,Be,Se.width,Se.height,0,xe,Oe,Se.data);T.generateMipmaps=!1}else Ge?(dt&&t.texStorage2D(i.TEXTURE_2D,be,Be,me.width,me.height),F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me.width,me.height,xe,Oe,me.data)):t.texImage2D(i.TEXTURE_2D,0,Be,me.width,me.height,0,xe,Oe,me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ge&&dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,Be,Ve[0].width,Ve[0].height,me.depth);for(let se=0,ce=Ve.length;se<ce;se++)if(Se=Ve[se],T.format!==qi)if(xe!==null)if(Ge){if(F)if(T.layerUpdates.size>0){const Me=ev(Se.width,Se.height,T.format,T.type);for(const Te of T.layerUpdates){const qe=Se.data.subarray(Te*Me/Se.data.BYTES_PER_ELEMENT,(Te+1)*Me/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,Te,Se.width,Se.height,1,xe,qe)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Se.width,Se.height,me.depth,xe,Se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,Be,Se.width,Se.height,me.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?F&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Se.width,Se.height,me.depth,xe,Oe,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,Be,Se.width,Se.height,me.depth,0,xe,Oe,Se.data)}else{Ge&&dt&&t.texStorage2D(i.TEXTURE_2D,be,Be,Ve[0].width,Ve[0].height);for(let se=0,ce=Ve.length;se<ce;se++)Se=Ve[se],T.format!==qi?xe!==null?Ge?F&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,Se.width,Se.height,xe,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,se,Be,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?F&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Se.width,Se.height,xe,Oe,Se.data):t.texImage2D(i.TEXTURE_2D,se,Be,Se.width,Se.height,0,xe,Oe,Se.data)}else if(T.isDataArrayTexture)if(Ge){if(dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,Be,me.width,me.height,me.depth),F)if(T.layerUpdates.size>0){const se=ev(me.width,me.height,T.format,T.type);for(const ce of T.layerUpdates){const Me=me.data.subarray(ce*se/me.data.BYTES_PER_ELEMENT,(ce+1)*se/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ce,me.width,me.height,1,xe,Oe,Me)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,xe,Oe,me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Be,me.width,me.height,me.depth,0,xe,Oe,me.data);else if(T.isData3DTexture)Ge?(dt&&t.texStorage3D(i.TEXTURE_3D,be,Be,me.width,me.height,me.depth),F&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,xe,Oe,me.data)):t.texImage3D(i.TEXTURE_3D,0,Be,me.width,me.height,me.depth,0,xe,Oe,me.data);else if(T.isFramebufferTexture){if(dt)if(Ge)t.texStorage2D(i.TEXTURE_2D,be,Be,me.width,me.height);else{let se=me.width,ce=me.height;for(let Me=0;Me<be;Me++)t.texImage2D(i.TEXTURE_2D,Me,Be,se,ce,0,xe,Oe,null),se>>=1,ce>>=1}}else if(Ve.length>0){if(Ge&&dt){const se=ne(Ve[0]);t.texStorage2D(i.TEXTURE_2D,be,Be,se.width,se.height)}for(let se=0,ce=Ve.length;se<ce;se++)Se=Ve[se],Ge?F&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,xe,Oe,Se):t.texImage2D(i.TEXTURE_2D,se,Be,xe,Oe,Se);T.generateMipmaps=!1}else if(Ge){if(dt){const se=ne(me);t.texStorage2D(i.TEXTURE_2D,be,Be,se.width,se.height)}F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,Oe,me)}else t.texImage2D(i.TEXTURE_2D,0,Be,xe,Oe,me);m(T)&&p(Y),pe.__version=Z.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function de(R,T,U){if(T.image.length!==6)return;const Y=ze(R,T),$=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+U);const Z=n.get($);if($.version!==Z.__version||Y===!0){t.activeTexture(i.TEXTURE0+U);const pe=pt.getPrimaries(pt.workingColorSpace),fe=T.colorSpace===Ps?null:pt.getPrimaries(T.colorSpace),ve=T.colorSpace===Ps||pe===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Fe=T.isCompressedTexture||T.image[0].isCompressedTexture,me=T.image[0]&&T.image[0].isDataTexture,xe=[];for(let ce=0;ce<6;ce++)!Fe&&!me?xe[ce]=g(T.image[ce],!0,r.maxCubemapSize):xe[ce]=me?T.image[ce].image:T.image[ce],xe[ce]=ue(T,xe[ce]);const Oe=xe[0],Be=s.convert(T.format,T.colorSpace),Se=s.convert(T.type),Ve=y(T.internalFormat,Be,Se,T.colorSpace),Ge=T.isVideoTexture!==!0,dt=Z.__version===void 0||Y===!0,F=$.dataReady;let be=E(T,Oe);Ce(i.TEXTURE_CUBE_MAP,T);let se;if(Fe){Ge&&dt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,be,Ve,Oe.width,Oe.height);for(let ce=0;ce<6;ce++){se=xe[ce].mipmaps;for(let Me=0;Me<se.length;Me++){const Te=se[Me];T.format!==qi?Be!==null?Ge?F&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Me,0,0,Te.width,Te.height,Be,Te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Me,Ve,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Me,0,0,Te.width,Te.height,Be,Se,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Me,Ve,Te.width,Te.height,0,Be,Se,Te.data)}}}else{if(se=T.mipmaps,Ge&&dt){se.length>0&&be++;const ce=ne(xe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,be,Ve,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(me){Ge?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,xe[ce].width,xe[ce].height,Be,Se,xe[ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ve,xe[ce].width,xe[ce].height,0,Be,Se,xe[ce].data);for(let Me=0;Me<se.length;Me++){const qe=se[Me].image[ce].image;Ge?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Me+1,0,0,qe.width,qe.height,Be,Se,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Me+1,Ve,qe.width,qe.height,0,Be,Se,qe.data)}}else{Ge?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Be,Se,xe[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ve,Be,Se,xe[ce]);for(let Me=0;Me<se.length;Me++){const Te=se[Me];Ge?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Me+1,0,0,Be,Se,Te.image[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Me+1,Ve,Be,Se,Te.image[ce])}}}m(T)&&p(i.TEXTURE_CUBE_MAP),Z.__version=$.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function ye(R,T,U,Y,$,Z){const pe=s.convert(U.format,U.colorSpace),fe=s.convert(U.type),ve=y(U.internalFormat,pe,fe,U.colorSpace),Fe=n.get(T),me=n.get(U);if(me.__renderTarget=T,!Fe.__hasExternalTextures){const xe=Math.max(1,T.width>>Z),Oe=Math.max(1,T.height>>Z);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,Z,ve,xe,Oe,T.depth,0,pe,fe,null):t.texImage2D($,Z,ve,xe,Oe,0,pe,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),L(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,$,me.__webglTexture,0,J(T)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,$,me.__webglTexture,Z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function k(R,T,U){if(i.bindRenderbuffer(i.RENDERBUFFER,R),T.depthBuffer){const Y=T.depthTexture,$=Y&&Y.isDepthTexture?Y.type:null,Z=x(T.stencilBuffer,$),pe=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=J(T);L(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,Z,T.width,T.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,Z,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Z,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,R)}else{const Y=T.textures;for(let $=0;$<Y.length;$++){const Z=Y[$],pe=s.convert(Z.format,Z.colorSpace),fe=s.convert(Z.type),ve=y(Z.internalFormat,pe,fe,Z.colorSpace),Fe=J(T);U&&L(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,ve,T.width,T.height):L(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Fe,ve,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ve,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function oe(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(T.depthTexture);Y.__renderTarget=T,(!Y.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Q(T.depthTexture,0);const $=Y.__webglTexture,Z=J(T);if(T.depthTexture.format===Ha)L(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(T.depthTexture.format===cl)L(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function le(R){const T=n.get(R),U=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){const Y=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Y){const $=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Y.removeEventListener("dispose",$)};Y.addEventListener("dispose",$),T.__depthDisposeCallback=$}T.__boundDepthTexture=Y}if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");oe(T.__webglFramebuffer,R)}else if(U){T.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[Y]),T.__webglDepthbuffer[Y]===void 0)T.__webglDepthbuffer[Y]=i.createRenderbuffer(),k(T.__webglDepthbuffer[Y],R,!1);else{const $=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=T.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),k(T.__webglDepthbuffer,R,!1);else{const Y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,$)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(R,T,U){const Y=n.get(R);T!==void 0&&ye(Y.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&le(R)}function Le(R){const T=R.texture,U=n.get(R),Y=n.get(T);R.addEventListener("dispose",b);const $=R.textures,Z=R.isWebGLCubeRenderTarget===!0,pe=$.length>1;if(pe||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=T.version,o.memory.textures++),Z){U.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(T.mipmaps&&T.mipmaps.length>0){U.__webglFramebuffer[fe]=[];for(let ve=0;ve<T.mipmaps.length;ve++)U.__webglFramebuffer[fe][ve]=i.createFramebuffer()}else U.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){U.__webglFramebuffer=[];for(let fe=0;fe<T.mipmaps.length;fe++)U.__webglFramebuffer[fe]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(pe)for(let fe=0,ve=$.length;fe<ve;fe++){const Fe=n.get($[fe]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&L(R)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let fe=0;fe<$.length;fe++){const ve=$[fe];U.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[fe]);const Fe=s.convert(ve.format,ve.colorSpace),me=s.convert(ve.type),xe=y(ve.internalFormat,Fe,me,ve.colorSpace,R.isXRRenderTarget===!0),Oe=J(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,xe,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,U.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),k(U.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Ce(i.TEXTURE_CUBE_MAP,T);for(let fe=0;fe<6;fe++)if(T.mipmaps&&T.mipmaps.length>0)for(let ve=0;ve<T.mipmaps.length;ve++)ye(U.__webglFramebuffer[fe][ve],R,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ve);else ye(U.__webglFramebuffer[fe],R,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(T)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let fe=0,ve=$.length;fe<ve;fe++){const Fe=$[fe],me=n.get(Fe);t.bindTexture(i.TEXTURE_2D,me.__webglTexture),Ce(i.TEXTURE_2D,Fe),ye(U.__webglFramebuffer,R,Fe,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,0),m(Fe)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,Y.__webglTexture),Ce(fe,T),T.mipmaps&&T.mipmaps.length>0)for(let ve=0;ve<T.mipmaps.length;ve++)ye(U.__webglFramebuffer[ve],R,T,i.COLOR_ATTACHMENT0,fe,ve);else ye(U.__webglFramebuffer,R,T,i.COLOR_ATTACHMENT0,fe,0);m(T)&&p(fe),t.unbindTexture()}R.depthBuffer&&le(R)}function I(R){const T=R.textures;for(let U=0,Y=T.length;U<Y;U++){const $=T[U];if(m($)){const Z=v(R),pe=n.get($).__webglTexture;t.bindTexture(Z,pe),p(Z),t.unbindTexture()}}}const D=[],w=[];function re(R){if(R.samples>0){if(L(R)===!1){const T=R.textures,U=R.width,Y=R.height;let $=i.COLOR_BUFFER_BIT;const Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(R),fe=T.length>1;if(fe)for(let ve=0;ve<T.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ve=0;ve<T.length;ve++){if(R.resolveDepthBuffer&&(R.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[ve]);const Fe=n.get(T[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Fe,0)}i.blitFramebuffer(0,0,U,Y,0,0,U,Y,$,i.NEAREST),l===!0&&(D.length=0,w.length=0,D.push(i.COLOR_ATTACHMENT0+ve),R.depthBuffer&&R.resolveDepthBuffer===!1&&(D.push(Z),w.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,w)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,D))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let ve=0;ve<T.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,pe.__webglColorRenderbuffer[ve]);const Fe=n.get(T[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,Fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const T=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function J(R){return Math.min(r.maxSamples,R.samples)}function L(R){const T=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ie(R){const T=o.render.frame;u.get(R)!==T&&(u.set(R,T),R.update())}function ue(R,T){const U=R.colorSpace,Y=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||U!==li&&U!==Ps&&(pt.getTransfer(U)===Rt?(Y!==qi||$!==hs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),T}function ne(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=B,this.setTexture2D=Q,this.setTexture2DArray=W,this.setTexture3D=j,this.setTextureCube=V,this.rebindTextures=ae,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=L}function jN(i,e){function t(n,r=Ps){let s;const o=pt.getTransfer(r);if(n===hs)return i.UNSIGNED_BYTE;if(n===V_)return i.UNSIGNED_SHORT_4_4_4_4;if(n===G_)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ib)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===tb)return i.BYTE;if(n===nb)return i.SHORT;if(n===zc)return i.UNSIGNED_SHORT;if(n===H_)return i.INT;if(n===Ho)return i.UNSIGNED_INT;if(n===or)return i.FLOAT;if(n===Zc)return i.HALF_FLOAT;if(n===rb)return i.ALPHA;if(n===sb)return i.RGB;if(n===qi)return i.RGBA;if(n===ob)return i.LUMINANCE;if(n===ab)return i.LUMINANCE_ALPHA;if(n===Ha)return i.DEPTH_COMPONENT;if(n===cl)return i.DEPTH_STENCIL;if(n===W_)return i.RED;if(n===X_)return i.RED_INTEGER;if(n===lb)return i.RG;if(n===j_)return i.RG_INTEGER;if(n===Y_)return i.RGBA_INTEGER;if(n===df||n===pf||n===mf||n===_f)if(o===Rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===df)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_f)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===df)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pf)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mf)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_f)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jp||n===Qp||n===em||n===tm)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Jp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qp)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===em)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tm)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nm||n===im||n===rm)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===nm||n===im)return o===Rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===rm)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===sm||n===om||n===am||n===lm||n===cm||n===um||n===fm||n===hm||n===dm||n===pm||n===mm||n===_m||n===gm||n===xm)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===sm)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===om)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===am)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===lm)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cm)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===um)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fm)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hm)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===dm)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pm)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===mm)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_m)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gm)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xm)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===gf||n===vm||n===ym)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===gf)return o===Rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vm)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ym)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cb||n===Sm||n===Mm||n===bm)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===gf)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Sm)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mm)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bm)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ll?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const YN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qN=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $N{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Sn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Nr({vertexShader:YN,fragmentShader:qN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yn(new gh(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class KN extends Wo{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null;const g=new $N,m=t.getContextAttributes();let p=null,v=null;const y=[],x=[],E=new je;let A=null;const b=new Tn;b.viewport=new xt;const C=new Tn;C.viewport=new xt;const S=[b,C],M=new aD;let N=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let de=y[te];return de===void 0&&(de=new Md,y[te]=de),de.getTargetRaySpace()},this.getControllerGrip=function(te){let de=y[te];return de===void 0&&(de=new Md,y[te]=de),de.getGripSpace()},this.getHand=function(te){let de=y[te];return de===void 0&&(de=new Md,y[te]=de),de.getHandSpace()};function z(te){const de=x.indexOf(te.inputSource);if(de===-1)return;const ye=y[de];ye!==void 0&&(ye.update(te.inputSource,te.frame,c||o),ye.dispatchEvent({type:te.type,data:te.inputSource}))}function q(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",Q);for(let te=0;te<y.length;te++){const de=x[te];de!==null&&(x[te]=null,y[te].disconnect(de))}N=null,B=null,g.reset(),e.setRenderTarget(p),d=null,h=null,f=null,r=null,v=null,ze.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",q),r.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(E),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,k=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=m.stencil?cl:Ha,k=m.stencil?ll:Ho);const le={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(le),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Vo(h.textureWidth,h.textureHeight,{format:qi,type:hs,depthTexture:new wb(h.textureWidth,h.textureHeight,k,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}else{const ye={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,ye),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Vo(d.framebufferWidth,d.framebufferHeight,{format:qi,type:hs,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ze.setContext(r),ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Q(te){for(let de=0;de<te.removed.length;de++){const ye=te.removed[de],k=x.indexOf(ye);k>=0&&(x[k]=null,y[k].disconnect(ye))}for(let de=0;de<te.added.length;de++){const ye=te.added[de];let k=x.indexOf(ye);if(k===-1){for(let le=0;le<y.length;le++)if(le>=x.length){x.push(ye),k=le;break}else if(x[le]===null){x[le]=ye,k=le;break}if(k===-1)break}const oe=y[k];oe&&oe.connect(ye)}}const W=new H,j=new H;function V(te,de,ye){W.setFromMatrixPosition(de.matrixWorld),j.setFromMatrixPosition(ye.matrixWorld);const k=W.distanceTo(j),oe=de.projectionMatrix.elements,le=ye.projectionMatrix.elements,ae=oe[14]/(oe[10]-1),Le=oe[14]/(oe[10]+1),I=(oe[9]+1)/oe[5],D=(oe[9]-1)/oe[5],w=(oe[8]-1)/oe[0],re=(le[8]+1)/le[0],J=ae*w,L=ae*re,ie=k/(-w+re),ue=ie*-w;if(de.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ue),te.translateZ(ie),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),oe[10]===-1)te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const ne=ae+ie,R=Le+ie,T=J-ue,U=L+(k-ue),Y=I*Le/R*ne,$=D*Le/R*ne;te.projectionMatrix.makePerspective(T,U,Y,$,ne,R),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function he(te,de){de===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(de.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let de=te.near,ye=te.far;g.texture!==null&&(g.depthNear>0&&(de=g.depthNear),g.depthFar>0&&(ye=g.depthFar)),M.near=C.near=b.near=de,M.far=C.far=b.far=ye,(N!==M.near||B!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),N=M.near,B=M.far),b.layers.mask=te.layers.mask|2,C.layers.mask=te.layers.mask|4,M.layers.mask=b.layers.mask|C.layers.mask;const k=te.parent,oe=M.cameras;he(M,k);for(let le=0;le<oe.length;le++)he(oe[le],k);oe.length===2?V(M,b,C):M.projectionMatrix.copy(b.projectionMatrix),O(te,M,k)};function O(te,de,ye){ye===null?te.matrix.copy(de.matrixWorld):(te.matrix.copy(ye.matrixWorld),te.matrix.invert(),te.matrix.multiply(de.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=ul*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(te){l=te,h!==null&&(h.fixedFoveation=te),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=te)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let ge=null;function Ce(te,de){if(u=de.getViewerPose(c||o),_=de,u!==null){const ye=u.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let k=!1;ye.length!==M.cameras.length&&(M.cameras.length=0,k=!0);for(let ae=0;ae<ye.length;ae++){const Le=ye[ae];let I=null;if(d!==null)I=d.getViewport(Le);else{const w=f.getViewSubImage(h,Le);I=w.viewport,ae===0&&(e.setRenderTargetTextures(v,w.colorTexture,h.ignoreDepthValues?void 0:w.depthStencilTexture),e.setRenderTarget(v))}let D=S[ae];D===void 0&&(D=new Tn,D.layers.enable(ae),D.viewport=new xt,S[ae]=D),D.matrix.fromArray(Le.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(Le.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(I.x,I.y,I.width,I.height),ae===0&&(M.matrix.copy(D.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),k===!0&&M.cameras.push(D)}const oe=r.enabledFeatures;if(oe&&oe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const ae=f.getDepthInformation(ye[0]);ae&&ae.isValid&&ae.texture&&g.init(e,ae,r.renderState)}}for(let ye=0;ye<y.length;ye++){const k=x[ye],oe=y[ye];k!==null&&oe!==void 0&&oe.update(k,de,c||o)}ge&&ge(te,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),_=null}const ze=new Lb;ze.setAnimationLoop(Ce),this.setAnimationLoop=function(te){ge=te},this.dispose=function(){}}}const uo=new dr,ZN=new Qe;function JN(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,vb(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,v,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===gi&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===gi&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),y=v.envMap,x=v.envMapRotation;y&&(m.envMap.value=y,uo.copy(x),uo.x*=-1,uo.y*=-1,uo.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(uo.y*=-1,uo.z*=-1),m.envMapRotation.value.setFromMatrix4(ZN.makeRotationFromEuler(uo)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===gi&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function QN(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const x=y.program;n.uniformBlockBinding(v,x)}function c(v,y){let x=r[v.id];x===void 0&&(_(v),x=u(v),r[v.id]=x,v.addEventListener("dispose",m));const E=y.program;n.updateUBOMapping(v,E);const A=e.render.frame;s[v.id]!==A&&(h(v),s[v.id]=A)}function u(v){const y=f();v.__bindingPointIndex=y;const x=i.createBuffer(),E=v.__size,A=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,E,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const y=r[v.id],x=v.uniforms,E=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let A=0,b=x.length;A<b;A++){const C=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,M=C.length;S<M;S++){const N=C[S];if(d(N,A,S,E)===!0){const B=N.__offset,z=Array.isArray(N.value)?N.value:[N.value];let q=0;for(let Q=0;Q<z.length;Q++){const W=z[Q],j=g(W);typeof W=="number"||typeof W=="boolean"?(N.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,B+q,N.__data)):W.isMatrix3?(N.__data[0]=W.elements[0],N.__data[1]=W.elements[1],N.__data[2]=W.elements[2],N.__data[3]=0,N.__data[4]=W.elements[3],N.__data[5]=W.elements[4],N.__data[6]=W.elements[5],N.__data[7]=0,N.__data[8]=W.elements[6],N.__data[9]=W.elements[7],N.__data[10]=W.elements[8],N.__data[11]=0):(W.toArray(N.__data,q),q+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,y,x,E){const A=v.value,b=y+"_"+x;if(E[b]===void 0)return typeof A=="number"||typeof A=="boolean"?E[b]=A:E[b]=A.clone(),!0;{const C=E[b];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return E[b]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function _(v){const y=v.uniforms;let x=0;const E=16;for(let b=0,C=y.length;b<C;b++){const S=Array.isArray(y[b])?y[b]:[y[b]];for(let M=0,N=S.length;M<N;M++){const B=S[M],z=Array.isArray(B.value)?B.value:[B.value];for(let q=0,Q=z.length;q<Q;q++){const W=z[q],j=g(W),V=x%E,he=V%j.boundary,O=V+he;x+=he,O!==0&&E-O<j.storage&&(x+=E-O),B.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=x,x+=j.storage}}}const A=x%E;return A>0&&(x+=E-A),v.__size=x,v.__cache={},this}function g(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const v in r)i.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class dg{constructor(e={}){const{canvas:t=iP(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=En,this.toneMapping=Xs,this.toneMappingExposure=1;const x=this;let E=!1,A=0,b=0,C=null,S=-1,M=null;const N=new xt,B=new xt;let z=null;const q=new We(0);let Q=0,W=t.width,j=t.height,V=1,he=null,O=null;const ge=new xt(0,0,W,j),Ce=new xt(0,0,W,j);let ze=!1;const te=new Q_;let de=!1,ye=!1;this.transmissionResolutionScale=1;const k=new Qe,oe=new Qe,le=new H,ae=new xt,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let I=!1;function D(){return C===null?V:1}let w=n;function re(P,X){return t.getContext(P,X)}try{const P={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${k_}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",Te,!1),w===null){const X="webgl2";if(w=re(X,P),w===null)throw re(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let J,L,ie,ue,ne,R,T,U,Y,$,Z,pe,fe,ve,Fe,me,xe,Oe,Be,Se,Ve,Ge,dt,F;function be(){J=new u2(w),J.init(),Ge=new jN(w,J),L=new r2(w,J,e,Ge),ie=new WN(w,J),L.reverseDepthBuffer&&h&&ie.buffers.depth.setReversed(!0),ue=new d2(w),ne=new DN,R=new XN(w,J,ie,ne,L,Ge,ue),T=new o2(x),U=new c2(x),Y=new yD(w),dt=new n2(w,Y),$=new f2(w,Y,ue,dt),Z=new m2(w,$,Y,ue),Be=new p2(w,L,R),me=new s2(ne),pe=new PN(x,T,U,J,L,dt,me),fe=new JN(x,ne),ve=new IN,Fe=new kN(J),Oe=new t2(x,T,U,ie,Z,d,l),xe=new VN(x,Z,L),F=new QN(w,ue,L,ie),Se=new i2(w,J,ue),Ve=new h2(w,J,ue),ue.programs=pe.programs,x.capabilities=L,x.extensions=J,x.properties=ne,x.renderLists=ve,x.shadowMap=xe,x.state=ie,x.info=ue}be();const se=new KN(x,w);this.xr=se,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const P=J.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=J.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(P){P!==void 0&&(V=P,this.setSize(W,j,!1))},this.getSize=function(P){return P.set(W,j)},this.setSize=function(P,X,ee=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=P,j=X,t.width=Math.floor(P*V),t.height=Math.floor(X*V),ee===!0&&(t.style.width=P+"px",t.style.height=X+"px"),this.setViewport(0,0,P,X)},this.getDrawingBufferSize=function(P){return P.set(W*V,j*V).floor()},this.setDrawingBufferSize=function(P,X,ee){W=P,j=X,V=ee,t.width=Math.floor(P*ee),t.height=Math.floor(X*ee),this.setViewport(0,0,P,X)},this.getCurrentViewport=function(P){return P.copy(N)},this.getViewport=function(P){return P.copy(ge)},this.setViewport=function(P,X,ee,K){P.isVector4?ge.set(P.x,P.y,P.z,P.w):ge.set(P,X,ee,K),ie.viewport(N.copy(ge).multiplyScalar(V).round())},this.getScissor=function(P){return P.copy(Ce)},this.setScissor=function(P,X,ee,K){P.isVector4?Ce.set(P.x,P.y,P.z,P.w):Ce.set(P,X,ee,K),ie.scissor(B.copy(Ce).multiplyScalar(V).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(P){ie.setScissorTest(ze=P)},this.setOpaqueSort=function(P){he=P},this.setTransparentSort=function(P){O=P},this.getClearColor=function(P){return P.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(P=!0,X=!0,ee=!0){let K=0;if(P){let G=!1;if(C!==null){const _e=C.texture.format;G=_e===Y_||_e===j_||_e===X_}if(G){const _e=C.texture.type,Ae=_e===hs||_e===Ho||_e===zc||_e===ll||_e===V_||_e===G_,De=Oe.getClearColor(),Pe=Oe.getClearAlpha(),He=De.r,Ye=De.g,ke=De.b;Ae?(_[0]=He,_[1]=Ye,_[2]=ke,_[3]=Pe,w.clearBufferuiv(w.COLOR,0,_)):(g[0]=He,g[1]=Ye,g[2]=ke,g[3]=Pe,w.clearBufferiv(w.COLOR,0,g))}else K|=w.COLOR_BUFFER_BIT}X&&(K|=w.DEPTH_BUFFER_BIT),ee&&(K|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),Oe.dispose(),ve.dispose(),Fe.dispose(),ne.dispose(),T.dispose(),U.dispose(),Z.dispose(),dt.dispose(),F.dispose(),pe.dispose(),se.dispose(),se.removeEventListener("sessionstart",we),se.removeEventListener("sessionend",Ke),Ue.stop()};function ce(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const P=ue.autoReset,X=xe.enabled,ee=xe.autoUpdate,K=xe.needsUpdate,G=xe.type;be(),ue.autoReset=P,xe.enabled=X,xe.autoUpdate=ee,xe.needsUpdate=K,xe.type=G}function Te(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function qe(P){const X=P.target;X.removeEventListener("dispose",qe),mt(X)}function mt(P){Xt(P),ne.remove(P)}function Xt(P){const X=ne.get(P).programs;X!==void 0&&(X.forEach(function(ee){pe.releaseProgram(ee)}),P.isShaderMaterial&&pe.releaseShaderCache(P))}this.renderBufferDirect=function(P,X,ee,K,G,_e){X===null&&(X=Le);const Ae=G.isMesh&&G.matrixWorld.determinant()<0,De=vi(P,X,ee,K,G);ie.setMaterial(K,Ae);let Pe=ee.index,He=1;if(K.wireframe===!0){if(Pe=$.getWireframeAttribute(ee),Pe===void 0)return;He=2}const Ye=ee.drawRange,ke=ee.attributes.position;let rt=Ye.start*He,St=(Ye.start+Ye.count)*He;_e!==null&&(rt=Math.max(rt,_e.start*He),St=Math.min(St,(_e.start+_e.count)*He)),Pe!==null?(rt=Math.max(rt,0),St=Math.min(St,Pe.count)):ke!=null&&(rt=Math.max(rt,0),St=Math.min(St,ke.count));const en=St-rt;if(en<0||en===1/0)return;dt.setup(G,K,De,ee,Pe);let jt,_t=Se;if(Pe!==null&&(jt=Y.get(Pe),_t=Ve,_t.setIndex(jt)),G.isMesh)K.wireframe===!0?(ie.setLineWidth(K.wireframeLinewidth*D()),_t.setMode(w.LINES)):_t.setMode(w.TRIANGLES);else if(G.isLine){let Xe=K.linewidth;Xe===void 0&&(Xe=1),ie.setLineWidth(Xe*D()),G.isLineSegments?_t.setMode(w.LINES):G.isLineLoop?_t.setMode(w.LINE_LOOP):_t.setMode(w.LINE_STRIP)}else G.isPoints?_t.setMode(w.POINTS):G.isSprite&&_t.setMode(w.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)_t.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))_t.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Xe=G._multiDrawStarts,bn=G._multiDrawCounts,Mt=G._multiDrawCount,Ji=Pe?Y.get(Pe).bytesPerElement:1,Xo=ne.get(K).currentProgram.getUniforms();for(let yi=0;yi<Mt;yi++)Xo.setValue(w,"_gl_DrawID",yi),_t.render(Xe[yi]/Ji,bn[yi])}else if(G.isInstancedMesh)_t.renderInstances(rt,en,G.count);else if(ee.isInstancedBufferGeometry){const Xe=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,bn=Math.min(ee.instanceCount,Xe);_t.renderInstances(rt,en,bn)}else _t.render(rt,en)};function Re(P,X,ee){P.transparent===!0&&P.side===br&&P.forceSinglePass===!1?(P.side=gi,P.needsUpdate=!0,Pt(P,X,ee),P.side=fs,P.needsUpdate=!0,Pt(P,X,ee),P.side=br):Pt(P,X,ee)}this.compile=function(P,X,ee=null){ee===null&&(ee=P),p=Fe.get(ee),p.init(X),y.push(p),ee.traverseVisible(function(G){G.isLight&&G.layers.test(X.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),P!==ee&&P.traverseVisible(function(G){G.isLight&&G.layers.test(X.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();const K=new Set;return P.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const _e=G.material;if(_e)if(Array.isArray(_e))for(let Ae=0;Ae<_e.length;Ae++){const De=_e[Ae];Re(De,ee,G),K.add(De)}else Re(_e,ee,G),K.add(_e)}),y.pop(),p=null,K},this.compileAsync=function(P,X,ee=null){const K=this.compile(P,X,ee);return new Promise(G=>{function _e(){if(K.forEach(function(Ae){ne.get(Ae).currentProgram.isReady()&&K.delete(Ae)}),K.size===0){G(P);return}setTimeout(_e,10)}J.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Ne=null;function et(P){Ne&&Ne(P)}function we(){Ue.stop()}function Ke(){Ue.start()}const Ue=new Lb;Ue.setAnimationLoop(et),typeof self<"u"&&Ue.setContext(self),this.setAnimationLoop=function(P){Ne=P,se.setAnimationLoop(P),P===null?Ue.stop():Ue.start()},se.addEventListener("sessionstart",we),se.addEventListener("sessionend",Ke),this.render=function(P,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(X),X=se.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,X,C),p=Fe.get(P,y.length),p.init(X),y.push(p),oe.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),te.setFromProjectionMatrix(oe),ye=this.localClippingEnabled,de=me.init(this.clippingPlanes,ye),m=ve.get(P,v.length),m.init(),v.push(m),se.enabled===!0&&se.isPresenting===!0){const _e=x.xr.getDepthSensingMesh();_e!==null&&$e(_e,X,-1/0,x.sortObjects)}$e(P,X,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(he,O),I=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,I&&Oe.addToRenderList(m,P),this.info.render.frame++,de===!0&&me.beginShadows();const ee=p.state.shadowsArray;xe.render(ee,P,X),de===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=m.opaque,G=m.transmissive;if(p.setupLights(),X.isArrayCamera){const _e=X.cameras;if(G.length>0)for(let Ae=0,De=_e.length;Ae<De;Ae++){const Pe=_e[Ae];at(K,G,P,Pe)}I&&Oe.render(P);for(let Ae=0,De=_e.length;Ae<De;Ae++){const Pe=_e[Ae];$t(m,P,Pe,Pe.viewport)}}else G.length>0&&at(K,G,P,X),I&&Oe.render(P),$t(m,P,X);C!==null&&b===0&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),P.isScene===!0&&P.onAfterRender(x,P,X),dt.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],de===!0&&me.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function $e(P,X,ee,K){if(P.visible===!1)return;if(P.layers.test(X.layers)){if(P.isGroup)ee=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(X);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||te.intersectsSprite(P)){K&&ae.setFromMatrixPosition(P.matrixWorld).applyMatrix4(oe);const Ae=Z.update(P),De=P.material;De.visible&&m.push(P,Ae,De,ee,ae.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||te.intersectsObject(P))){const Ae=Z.update(P),De=P.material;if(K&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ae.copy(P.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),ae.copy(Ae.boundingSphere.center)),ae.applyMatrix4(P.matrixWorld).applyMatrix4(oe)),Array.isArray(De)){const Pe=Ae.groups;for(let He=0,Ye=Pe.length;He<Ye;He++){const ke=Pe[He],rt=De[ke.materialIndex];rt&&rt.visible&&m.push(P,Ae,rt,ee,ae.z,ke)}}else De.visible&&m.push(P,Ae,De,ee,ae.z,null)}}const _e=P.children;for(let Ae=0,De=_e.length;Ae<De;Ae++)$e(_e[Ae],X,ee,K)}function $t(P,X,ee,K){const G=P.opaque,_e=P.transmissive,Ae=P.transparent;p.setupLightsView(ee),de===!0&&me.setGlobalState(x.clippingPlanes,ee),K&&ie.viewport(N.copy(K)),G.length>0&&It(G,X,ee),_e.length>0&&It(_e,X,ee),Ae.length>0&&It(Ae,X,ee),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function at(P,X,ee,K){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new Vo(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?Zc:hs,minFilter:is,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace}));const _e=p.state.transmissionRenderTarget[K.id],Ae=K.viewport||N;_e.setSize(Ae.z*x.transmissionResolutionScale,Ae.w*x.transmissionResolutionScale);const De=x.getRenderTarget();x.setRenderTarget(_e),x.getClearColor(q),Q=x.getClearAlpha(),Q<1&&x.setClearColor(16777215,.5),x.clear(),I&&Oe.render(ee);const Pe=x.toneMapping;x.toneMapping=Xs;const He=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),de===!0&&me.setGlobalState(x.clippingPlanes,K),It(P,ee,K),R.updateMultisampleRenderTarget(_e),R.updateRenderTargetMipmap(_e),J.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let ke=0,rt=X.length;ke<rt;ke++){const St=X[ke],en=St.object,jt=St.geometry,_t=St.material,Xe=St.group;if(_t.side===br&&en.layers.test(K.layers)){const bn=_t.side;_t.side=gi,_t.needsUpdate=!0,an(en,ee,K,jt,_t,Xe),_t.side=bn,_t.needsUpdate=!0,Ye=!0}}Ye===!0&&(R.updateMultisampleRenderTarget(_e),R.updateRenderTargetMipmap(_e))}x.setRenderTarget(De),x.setClearColor(q,Q),He!==void 0&&(K.viewport=He),x.toneMapping=Pe}function It(P,X,ee){const K=X.isScene===!0?X.overrideMaterial:null;for(let G=0,_e=P.length;G<_e;G++){const Ae=P[G],De=Ae.object,Pe=Ae.geometry,He=K===null?Ae.material:K,Ye=Ae.group;De.layers.test(ee.layers)&&an(De,X,ee,Pe,He,Ye)}}function an(P,X,ee,K,G,_e){P.onBeforeRender(x,X,ee,K,G,_e),P.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),G.onBeforeRender(x,X,ee,K,P,_e),G.transparent===!0&&G.side===br&&G.forceSinglePass===!1?(G.side=gi,G.needsUpdate=!0,x.renderBufferDirect(ee,X,K,G,P,_e),G.side=fs,G.needsUpdate=!0,x.renderBufferDirect(ee,X,K,G,P,_e),G.side=br):x.renderBufferDirect(ee,X,K,G,P,_e),P.onAfterRender(x,X,ee,K,G,_e)}function Pt(P,X,ee){X.isScene!==!0&&(X=Le);const K=ne.get(P),G=p.state.lights,_e=p.state.shadowsArray,Ae=G.state.version,De=pe.getParameters(P,G.state,_e,X,ee),Pe=pe.getProgramCacheKey(De);let He=K.programs;K.environment=P.isMeshStandardMaterial?X.environment:null,K.fog=X.fog,K.envMap=(P.isMeshStandardMaterial?U:T).get(P.envMap||K.environment),K.envMapRotation=K.environment!==null&&P.envMap===null?X.environmentRotation:P.envMapRotation,He===void 0&&(P.addEventListener("dispose",qe),He=new Map,K.programs=He);let Ye=He.get(Pe);if(Ye!==void 0){if(K.currentProgram===Ye&&K.lightsStateVersion===Ae)return yt(P,De),Ye}else De.uniforms=pe.getUniforms(P),P.onBeforeCompile(De,x),Ye=pe.acquireProgram(De,Pe),He.set(Pe,Ye),K.uniforms=De.uniforms;const ke=K.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(ke.clippingPlanes=me.uniform),yt(P,De),K.needsLights=Vn(P),K.lightsStateVersion=Ae,K.needsLights&&(ke.ambientLightColor.value=G.state.ambient,ke.lightProbe.value=G.state.probe,ke.directionalLights.value=G.state.directional,ke.directionalLightShadows.value=G.state.directionalShadow,ke.spotLights.value=G.state.spot,ke.spotLightShadows.value=G.state.spotShadow,ke.rectAreaLights.value=G.state.rectArea,ke.ltc_1.value=G.state.rectAreaLTC1,ke.ltc_2.value=G.state.rectAreaLTC2,ke.pointLights.value=G.state.point,ke.pointLightShadows.value=G.state.pointShadow,ke.hemisphereLights.value=G.state.hemi,ke.directionalShadowMap.value=G.state.directionalShadowMap,ke.directionalShadowMatrix.value=G.state.directionalShadowMatrix,ke.spotShadowMap.value=G.state.spotShadowMap,ke.spotLightMatrix.value=G.state.spotLightMatrix,ke.spotLightMap.value=G.state.spotLightMap,ke.pointShadowMap.value=G.state.pointShadowMap,ke.pointShadowMatrix.value=G.state.pointShadowMatrix),K.currentProgram=Ye,K.uniformsList=null,Ye}function Dt(P){if(P.uniformsList===null){const X=P.currentProgram.getUniforms();P.uniformsList=xf.seqWithValue(X.seq,P.uniforms)}return P.uniformsList}function yt(P,X){const ee=ne.get(P);ee.outputColorSpace=X.outputColorSpace,ee.batching=X.batching,ee.batchingColor=X.batchingColor,ee.instancing=X.instancing,ee.instancingColor=X.instancingColor,ee.instancingMorph=X.instancingMorph,ee.skinning=X.skinning,ee.morphTargets=X.morphTargets,ee.morphNormals=X.morphNormals,ee.morphColors=X.morphColors,ee.morphTargetsCount=X.morphTargetsCount,ee.numClippingPlanes=X.numClippingPlanes,ee.numIntersection=X.numClipIntersection,ee.vertexAlphas=X.vertexAlphas,ee.vertexTangents=X.vertexTangents,ee.toneMapping=X.toneMapping}function vi(P,X,ee,K,G){X.isScene!==!0&&(X=Le),R.resetTextureUnits();const _e=X.fog,Ae=K.isMeshStandardMaterial?X.environment:null,De=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:li,Pe=(K.isMeshStandardMaterial?U:T).get(K.envMap||Ae),He=K.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Ye=!!ee.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),ke=!!ee.morphAttributes.position,rt=!!ee.morphAttributes.normal,St=!!ee.morphAttributes.color;let en=Xs;K.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(en=x.toneMapping);const jt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,_t=jt!==void 0?jt.length:0,Xe=ne.get(K),bn=p.state.lights;if(de===!0&&(ye===!0||P!==M)){const Gn=P===M&&K.id===S;me.setState(K,P,Gn)}let Mt=!1;K.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==bn.state.version||Xe.outputColorSpace!==De||G.isBatchedMesh&&Xe.batching===!1||!G.isBatchedMesh&&Xe.batching===!0||G.isBatchedMesh&&Xe.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Xe.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Xe.instancing===!1||!G.isInstancedMesh&&Xe.instancing===!0||G.isSkinnedMesh&&Xe.skinning===!1||!G.isSkinnedMesh&&Xe.skinning===!0||G.isInstancedMesh&&Xe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Xe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Xe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Xe.instancingMorph===!1&&G.morphTexture!==null||Xe.envMap!==Pe||K.fog===!0&&Xe.fog!==_e||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==me.numPlanes||Xe.numIntersection!==me.numIntersection)||Xe.vertexAlphas!==He||Xe.vertexTangents!==Ye||Xe.morphTargets!==ke||Xe.morphNormals!==rt||Xe.morphColors!==St||Xe.toneMapping!==en||Xe.morphTargetsCount!==_t)&&(Mt=!0):(Mt=!0,Xe.__version=K.version);let Ji=Xe.currentProgram;Mt===!0&&(Ji=Pt(K,X,G));let Xo=!1,yi=!1,Sl=!1;const kt=Ji.getUniforms(),Bi=Xe.uniforms;if(ie.useProgram(Ji.program)&&(Xo=!0,yi=!0,Sl=!0),K.id!==S&&(S=K.id,yi=!0),Xo||M!==P){ie.buffers.depth.getReversed()?(k.copy(P.projectionMatrix),sP(k),oP(k),kt.setValue(w,"projectionMatrix",k)):kt.setValue(w,"projectionMatrix",P.projectionMatrix),kt.setValue(w,"viewMatrix",P.matrixWorldInverse);const ci=kt.map.cameraPosition;ci!==void 0&&ci.setValue(w,le.setFromMatrixPosition(P.matrixWorld)),L.logarithmicDepthBuffer&&kt.setValue(w,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&kt.setValue(w,"isOrthographic",P.isOrthographicCamera===!0),M!==P&&(M=P,yi=!0,Sl=!0)}if(G.isSkinnedMesh){kt.setOptional(w,G,"bindMatrix"),kt.setOptional(w,G,"bindMatrixInverse");const Gn=G.skeleton;Gn&&(Gn.boneTexture===null&&Gn.computeBoneTexture(),kt.setValue(w,"boneTexture",Gn.boneTexture,R))}G.isBatchedMesh&&(kt.setOptional(w,G,"batchingTexture"),kt.setValue(w,"batchingTexture",G._matricesTexture,R),kt.setOptional(w,G,"batchingIdTexture"),kt.setValue(w,"batchingIdTexture",G._indirectTexture,R),kt.setOptional(w,G,"batchingColorTexture"),G._colorsTexture!==null&&kt.setValue(w,"batchingColorTexture",G._colorsTexture,R));const ki=ee.morphAttributes;if((ki.position!==void 0||ki.normal!==void 0||ki.color!==void 0)&&Be.update(G,ee,Ji),(yi||Xe.receiveShadow!==G.receiveShadow)&&(Xe.receiveShadow=G.receiveShadow,kt.setValue(w,"receiveShadow",G.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Bi.envMap.value=Pe,Bi.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&X.environment!==null&&(Bi.envMapIntensity.value=X.environmentIntensity),yi&&(kt.setValue(w,"toneMappingExposure",x.toneMappingExposure),Xe.needsLights&&Bt(Bi,Sl),_e&&K.fog===!0&&fe.refreshFogUniforms(Bi,_e),fe.refreshMaterialUniforms(Bi,K,V,j,p.state.transmissionRenderTarget[P.id]),xf.upload(w,Dt(Xe),Bi,R)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(xf.upload(w,Dt(Xe),Bi,R),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&kt.setValue(w,"center",G.center),kt.setValue(w,"modelViewMatrix",G.modelViewMatrix),kt.setValue(w,"normalMatrix",G.normalMatrix),kt.setValue(w,"modelMatrix",G.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Gn=K.uniformsGroups;for(let ci=0,bh=Gn.length;ci<bh;ci++){const eo=Gn[ci];F.update(eo,Ji),F.bind(eo,Ji)}}return Ji}function Bt(P,X){P.ambientLightColor.needsUpdate=X,P.lightProbe.needsUpdate=X,P.directionalLights.needsUpdate=X,P.directionalLightShadows.needsUpdate=X,P.pointLights.needsUpdate=X,P.pointLightShadows.needsUpdate=X,P.spotLights.needsUpdate=X,P.spotLightShadows.needsUpdate=X,P.rectAreaLights.needsUpdate=X,P.hemisphereLights.needsUpdate=X}function Vn(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(P,X,ee){ne.get(P.texture).__webglTexture=X,ne.get(P.depthTexture).__webglTexture=ee;const K=ne.get(P);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=ee===void 0,K.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,X){const ee=ne.get(P);ee.__webglFramebuffer=X,ee.__useDefaultFramebuffer=X===void 0};const Fi=w.createFramebuffer();this.setRenderTarget=function(P,X=0,ee=0){C=P,A=X,b=ee;let K=!0,G=null,_e=!1,Ae=!1;if(P){const Pe=ne.get(P);if(Pe.__useDefaultFramebuffer!==void 0)ie.bindFramebuffer(w.FRAMEBUFFER,null),K=!1;else if(Pe.__webglFramebuffer===void 0)R.setupRenderTarget(P);else if(Pe.__hasExternalTextures)R.rebindTextures(P,ne.get(P.texture).__webglTexture,ne.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const ke=P.depthTexture;if(Pe.__boundDepthTexture!==ke){if(ke!==null&&ne.has(ke)&&(P.width!==ke.image.width||P.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(P)}}const He=P.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Ae=!0);const Ye=ne.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ye[X])?G=Ye[X][ee]:G=Ye[X],_e=!0):P.samples>0&&R.useMultisampledRTT(P)===!1?G=ne.get(P).__webglMultisampledFramebuffer:Array.isArray(Ye)?G=Ye[ee]:G=Ye,N.copy(P.viewport),B.copy(P.scissor),z=P.scissorTest}else N.copy(ge).multiplyScalar(V).floor(),B.copy(Ce).multiplyScalar(V).floor(),z=ze;if(ee!==0&&(G=Fi),ie.bindFramebuffer(w.FRAMEBUFFER,G)&&K&&ie.drawBuffers(P,G),ie.viewport(N),ie.scissor(B),ie.setScissorTest(z),_e){const Pe=ne.get(P.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+X,Pe.__webglTexture,ee)}else if(Ae){const Pe=ne.get(P.texture),He=X;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Pe.__webglTexture,ee,He)}else if(P!==null&&ee!==0){const Pe=ne.get(P.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Pe.__webglTexture,ee)}S=-1},this.readRenderTargetPixels=function(P,X,ee,K,G,_e,Ae){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=ne.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ae!==void 0&&(De=De[Ae]),De){ie.bindFramebuffer(w.FRAMEBUFFER,De);try{const Pe=P.texture,He=Pe.format,Ye=Pe.type;if(!L.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!L.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=P.width-K&&ee>=0&&ee<=P.height-G&&w.readPixels(X,ee,K,G,Ge.convert(He),Ge.convert(Ye),_e)}finally{const Pe=C!==null?ne.get(C).__webglFramebuffer:null;ie.bindFramebuffer(w.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(P,X,ee,K,G,_e,Ae){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=ne.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ae!==void 0&&(De=De[Ae]),De){const Pe=P.texture,He=Pe.format,Ye=Pe.type;if(!L.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!L.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=P.width-K&&ee>=0&&ee<=P.height-G){ie.bindFramebuffer(w.FRAMEBUFFER,De);const ke=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,ke),w.bufferData(w.PIXEL_PACK_BUFFER,_e.byteLength,w.STREAM_READ),w.readPixels(X,ee,K,G,Ge.convert(He),Ge.convert(Ye),0);const rt=C!==null?ne.get(C).__webglFramebuffer:null;ie.bindFramebuffer(w.FRAMEBUFFER,rt);const St=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await rP(w,St,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,ke),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,_e),w.deleteBuffer(ke),w.deleteSync(St),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,X=null,ee=0){P.isTexture!==!0&&(xa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,P=arguments[1]);const K=Math.pow(2,-ee),G=Math.floor(P.image.width*K),_e=Math.floor(P.image.height*K),Ae=X!==null?X.x:0,De=X!==null?X.y:0;R.setTexture2D(P,0),w.copyTexSubImage2D(w.TEXTURE_2D,ee,0,0,Ae,De,G,_e),ie.unbindTexture()};const ln=w.createFramebuffer(),cn=w.createFramebuffer();this.copyTextureToTexture=function(P,X,ee=null,K=null,G=0,_e=null){P.isTexture!==!0&&(xa("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,P=arguments[1],X=arguments[2],_e=arguments[3]||0,ee=null),_e===null&&(G!==0?(xa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_e=G,G=0):_e=0);let Ae,De,Pe,He,Ye,ke,rt,St,en;const jt=P.isCompressedTexture?P.mipmaps[_e]:P.image;if(ee!==null)Ae=ee.max.x-ee.min.x,De=ee.max.y-ee.min.y,Pe=ee.isBox3?ee.max.z-ee.min.z:1,He=ee.min.x,Ye=ee.min.y,ke=ee.isBox3?ee.min.z:0;else{const ki=Math.pow(2,-G);Ae=Math.floor(jt.width*ki),De=Math.floor(jt.height*ki),P.isDataArrayTexture?Pe=jt.depth:P.isData3DTexture?Pe=Math.floor(jt.depth*ki):Pe=1,He=0,Ye=0,ke=0}K!==null?(rt=K.x,St=K.y,en=K.z):(rt=0,St=0,en=0);const _t=Ge.convert(X.format),Xe=Ge.convert(X.type);let bn;X.isData3DTexture?(R.setTexture3D(X,0),bn=w.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(R.setTexture2DArray(X,0),bn=w.TEXTURE_2D_ARRAY):(R.setTexture2D(X,0),bn=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,X.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,X.unpackAlignment);const Mt=w.getParameter(w.UNPACK_ROW_LENGTH),Ji=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Xo=w.getParameter(w.UNPACK_SKIP_PIXELS),yi=w.getParameter(w.UNPACK_SKIP_ROWS),Sl=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,jt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,jt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,He),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ye),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ke);const kt=P.isDataArrayTexture||P.isData3DTexture,Bi=X.isDataArrayTexture||X.isData3DTexture;if(P.isDepthTexture){const ki=ne.get(P),Gn=ne.get(X),ci=ne.get(ki.__renderTarget),bh=ne.get(Gn.__renderTarget);ie.bindFramebuffer(w.READ_FRAMEBUFFER,ci.__webglFramebuffer),ie.bindFramebuffer(w.DRAW_FRAMEBUFFER,bh.__webglFramebuffer);for(let eo=0;eo<Pe;eo++)kt&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,ne.get(P).__webglTexture,G,ke+eo),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,ne.get(X).__webglTexture,_e,en+eo)),w.blitFramebuffer(He,Ye,Ae,De,rt,St,Ae,De,w.DEPTH_BUFFER_BIT,w.NEAREST);ie.bindFramebuffer(w.READ_FRAMEBUFFER,null),ie.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(G!==0||P.isRenderTargetTexture||ne.has(P)){const ki=ne.get(P),Gn=ne.get(X);ie.bindFramebuffer(w.READ_FRAMEBUFFER,ln),ie.bindFramebuffer(w.DRAW_FRAMEBUFFER,cn);for(let ci=0;ci<Pe;ci++)kt?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,ki.__webglTexture,G,ke+ci):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,ki.__webglTexture,G),Bi?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Gn.__webglTexture,_e,en+ci):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Gn.__webglTexture,_e),G!==0?w.blitFramebuffer(He,Ye,Ae,De,rt,St,Ae,De,w.COLOR_BUFFER_BIT,w.NEAREST):Bi?w.copyTexSubImage3D(bn,_e,rt,St,en+ci,He,Ye,Ae,De):w.copyTexSubImage2D(bn,_e,rt,St,He,Ye,Ae,De);ie.bindFramebuffer(w.READ_FRAMEBUFFER,null),ie.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Bi?P.isDataTexture||P.isData3DTexture?w.texSubImage3D(bn,_e,rt,St,en,Ae,De,Pe,_t,Xe,jt.data):X.isCompressedArrayTexture?w.compressedTexSubImage3D(bn,_e,rt,St,en,Ae,De,Pe,_t,jt.data):w.texSubImage3D(bn,_e,rt,St,en,Ae,De,Pe,_t,Xe,jt):P.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,_e,rt,St,Ae,De,_t,Xe,jt.data):P.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,_e,rt,St,jt.width,jt.height,_t,jt.data):w.texSubImage2D(w.TEXTURE_2D,_e,rt,St,Ae,De,_t,Xe,jt);w.pixelStorei(w.UNPACK_ROW_LENGTH,Mt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ji),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Xo),w.pixelStorei(w.UNPACK_SKIP_ROWS,yi),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Sl),_e===0&&X.generateMipmaps&&w.generateMipmap(bn),ie.unbindTexture()},this.copyTextureToTexture3D=function(P,X,ee=null,K=null,G=0){return P.isTexture!==!0&&(xa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,K=arguments[1]||null,P=arguments[2],X=arguments[3],G=arguments[4]||0),xa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,X,ee,K,G)},this.initRenderTarget=function(P){ne.get(P).__webglFramebuffer===void 0&&R.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?R.setTextureCube(P,0):P.isData3DTexture?R.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?R.setTexture2DArray(P,0):R.setTexture2D(P,0),ie.unbindTexture()},this.resetState=function(){A=0,b=0,C=null,ie.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}}const Tv={type:"change"},pg={type:"start"},Fb={type:"end"},Xu=new _l,wv=new Rs,eO=Math.cos(70*hb.DEG2RAD),un=new H,ui=2*Math.PI,Ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Od=1e-6;class Sh extends xD{constructor(e,t=null){super(e,t),this.state=Ct.NONE,this.enabled=!0,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ka.ROTATE,MIDDLE:ka.DOLLY,RIGHT:ka.PAN},this.touches={ONE:Ea.ROTATE,TWO:Ea.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new Ir,this._lastTargetPosition=new H,this._quat=new Ir().setFromUnitVectors(e.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Jx,this._sphericalDelta=new Jx,this._scale=1,this._panOffset=new H,this._rotateStart=new je,this._rotateEnd=new je,this._rotateDelta=new je,this._panStart=new je,this._panEnd=new je,this._panDelta=new je,this._dollyStart=new je,this._dollyEnd=new je,this._dollyDelta=new je,this._dollyDirection=new H,this._mouse=new je,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=nO.bind(this),this._onPointerDown=tO.bind(this),this._onPointerUp=iO.bind(this),this._onContextMenu=uO.bind(this),this._onMouseWheel=oO.bind(this),this._onKeyDown=aO.bind(this),this._onTouchStart=lO.bind(this),this._onTouchMove=cO.bind(this),this._onMouseDown=rO.bind(this),this._onMouseMove=sO.bind(this),this._interceptControlDown=fO.bind(this),this._interceptControlUp=hO.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Tv),this.update(),this.state=Ct.NONE}update(e=null){const t=this.object.position;un.copy(t).sub(this.target),un.applyQuaternion(this._quat),this._spherical.setFromVector3(un),this.autoRotate&&this.state===Ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=ui:n>Math.PI&&(n-=ui),r<-Math.PI?r+=ui:r>Math.PI&&(r-=ui),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(un.setFromSpherical(this._spherical),un.applyQuaternion(this._quatInverse),t.copy(this.target).add(un),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=un.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new H(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new H(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=un.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Xu.origin.copy(this.object.position),Xu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Xu.direction))<eO?this.object.lookAt(this.target):(wv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Xu.intersectPlane(wv,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Od||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Od||this._lastTargetPosition.distanceToSquared(this.target)>Od?(this.dispatchEvent(Tv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ui/60*this.autoRotateSpeed*e:ui/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){un.setFromMatrixColumn(t,0),un.multiplyScalar(-e),this._panOffset.add(un)}_panUp(e,t){this.screenSpacePanning===!0?un.setFromMatrixColumn(t,1):(un.setFromMatrixColumn(t,0),un.crossVectors(this.object.up,un)),un.multiplyScalar(e),this._panOffset.add(un)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;un.copy(r).sub(this.target);let s=un.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ui*this._rotateDelta.x/t.clientHeight),this._rotateUp(ui*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ui*this._rotateDelta.x/t.clientHeight),this._rotateUp(ui*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new je,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function tO(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function nO(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function iO(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Fb),this.state=Ct.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function rO(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ka.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ct.DOLLY;break;case ka.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ct.ROTATE}break;case ka.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ct.PAN}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(pg)}function sO(i){switch(this.state){case Ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function oO(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ct.NONE||(i.preventDefault(),this.dispatchEvent(pg),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Fb))}function aO(i){this.enabled!==!1&&this._handleKeyDown(i)}function lO(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ea.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ct.TOUCH_ROTATE;break;case Ea.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ct.TOUCH_PAN;break;default:this.state=Ct.NONE}break;case 2:switch(this.touches.TWO){case Ea.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ct.TOUCH_DOLLY_PAN;break;case Ea.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ct.TOUCH_DOLLY_ROTATE;break;default:this.state=Ct.NONE}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(pg)}function cO(i){switch(this._trackPointer(i),this.state){case Ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ct.NONE}}function uO(i){this.enabled!==!1&&i.preventDefault()}function fO(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hO(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Mh(i){const e=i,t=e.offsetWidth,n=e.offsetWidth,r=new Mb,s=new Tn(75,t/n,.1,1e3),o=new dg;return o.setSize(t,n),{camera:s,renderer:o,scene:r,container:e}}function Ud(){const i=document.getElementById("three-container");if(!i)return;const{camera:e,renderer:t,scene:n,container:r}=Mh(i);e.position.z=2;const s=new Sh(e,t.domElement),o=new Qs,a=new wr({color:65280,wireframe:!0}),l=new yn(o,a);n.add(l),r?r.appendChild(t.domElement):(confirm("No container found"),document.body.appendChild(t.domElement)),window.addEventListener("resize",c,!1);function c(){const h=r.offsetWidth,d=r.offsetWidth,_=h/d;e.aspect=_,e.updateProjectionMatrix(),t.setSize(h,d),u()}function u(){t.render(n,e)}function f(){requestAnimationFrame(f),l.rotation.x+=.01,l.rotation.y+=.01,s.update(),u()}f()}const dO={class:"greetings"},Bb=Ui({__name:"Cube",setup(i){return Or(()=>{Ud()}),(e,t)=>(An(),cr("div",dO,[t[1]||(t[1]=it("h3",null,"Three EARTH",-1)),it("button",{onClick:t[0]||(t[0]=(...n)=>Ft(Ud)&&Ft(Ud)(...n)),class:"bg-amber-300 hover:bg-amber-700"}," animate "),t[2]||(t[2]=it("div",{class:"w-full",id:"three-container"},null,-1))]))}});function Fd(){new URLSearchParams(new URL(window.location.href).search.slice(1)).get("coord");const e=document.getElementById("three-container-earth");if(!e){alert("F");return}const t=e;t.offsetWidth,t.offsetWidth;const n=new Mb,r=new Tn(7,window.innerWidth/window.innerHeight,1,100),s=new dg,o=new Sh(r,s.domElement),a=new Qs,l=new wr({color:65280,wireframe:!0}),c=new yn(a,l);n.add(c),t?t.appendChild(s.domElement):(confirm("No container found"),document.body.appendChild(s.domElement)),window.addEventListener("resize",u,!1);function u(){const m=t.offsetWidth,p=t.offsetWidth,v=m/p;r.aspect=v,r.updateProjectionMatrix(),s.setSize(m,p),_()}function f(m,p,v){const y=(90-m)*(Math.PI/180),x=(p+180)*(Math.PI/180),E=-(v*Math.sin(y)*Math.cos(x)),A=v*Math.sin(y)*Math.sin(x),b=v*Math.cos(y);return console.log([E,b,A]),[E,b,A]}function h(){const m=[];for(let p=0;p<10;p++){const v=new qf(.025,20,20),y=new wr({color:new We("white")}),x=new yn(v,y);m.push(x)}return m}function d(){r.position.z=10,n.background=new We(61695),n.add(r),n.add(new Db(15790320));const m=new Pb(16777215,1.5);m.position.set(0,10,0),m.angle=Math.PI*.2,m.castShadow=!0,m.shadow.camera.near=20,m.shadow.camera.far=50,m.shadow.bias=-.222,m.shadow.mapSize.width=10,m.shadow.mapSize.height=10,n.add(m);let p=new Qx(2e3,1e3);p.position.y=-20,p.material.opacity=.7,p.material.transparent=!1,n.add(p),p=new Qx(2e3,500),p.position.y=20,p.material.opacity=1,p.material.transparent=!0,n.add(p),s.setPixelRatio(window.devicePixelRatio),s.setSize(window.innerWidth*.8,window.innerHeight*.8),s.shadowMap.enabled=!0,o.target.set(0,0,0),o.update();const v=new qf(.5,32,32),y=new xh,x=new BP({map:y.load("./img/map/night.jpg"),bumpMap:y.load("./img/map/bump.jpg"),specularMap:y.load("./img/map/spekular.jpg")}),E=new yn(v,x);n.add(E);const A=[[40.71427,-74.00597],[52.52437,13.41053]],b=h();for(let C=0;C<b.length;C++){n.add(b[C]);const S=A[Math.floor(Math.random()*A.length)],M=f(S[0],S[1],.5);b[C].position.set(M[0],M[1],M[2])}t?t.appendChild(s.domElement):(confirm("No container found"),document.body.appendChild(s.domElement))}function _(){s.render(n,r)}function g(){requestAnimationFrame(g),o.update(),_()}d(),g()}const pO={class:"greetings"},kb=Ui({__name:"Earth",setup(i){return Or(()=>{Fd()}),(e,t)=>(An(),cr("div",pO,[t[1]||(t[1]=it("h3",null,"Three EARTH",-1)),it("button",{onClick:t[0]||(t[0]=(...n)=>Ft(Fd)&&Ft(Fd)(...n)),class:"bg-amber-300 hover:bg-amber-700"}," animate "),t[2]||(t[2]=it("div",{class:"w-full",id:"three-container-earth"},null,-1))]))}});var Ga=function(){var i=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(u){u.preventDefault(),n(++i%e.children.length)},!1);function t(u){return e.appendChild(u.dom),u}function n(u){for(var f=0;f<e.children.length;f++)e.children[f].style.display=f===u?"block":"none";i=u}var r=(performance||Date).now(),s=r,o=0,a=t(new Ga.Panel("FPS","#0ff","#002")),l=t(new Ga.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new Ga.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:e,addPanel:t,showPanel:n,begin:function(){r=(performance||Date).now()},end:function(){o++;var u=(performance||Date).now();if(l.update(u-r,200),u>=s+1e3&&(a.update(o*1e3/(u-s),100),s=u,o=0,c)){var f=performance.memory;c.update(f.usedJSHeapSize/1048576,f.jsHeapSizeLimit/1048576)}return u},update:function(){r=this.end()},domElement:e,setMode:n}};Ga.Panel=function(i,e,t){var n=1/0,r=0,s=Math.round,o=s(window.devicePixelRatio||1),a=80*o,l=48*o,c=3*o,u=2*o,f=3*o,h=15*o,d=74*o,_=30*o,g=document.createElement("canvas");g.width=a,g.height=l,g.style.cssText="width:80px;height:48px";var m=g.getContext("2d");return m.font="bold "+9*o+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=t,m.fillRect(0,0,a,l),m.fillStyle=e,m.fillText(i,c,u),m.fillRect(f,h,d,_),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(f,h,d,_),{dom:g,update:function(p,v){n=Math.min(n,p),r=Math.max(r,p),m.fillStyle=t,m.globalAlpha=1,m.fillRect(0,0,a,h),m.fillStyle=e,m.fillText(s(p)+" "+i+" ("+s(n)+"-"+s(r)+")",c,u),m.drawImage(g,f+o,h,d-o,_,f,h,d-o,_),m.fillRect(f+d-o,h,o,_),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(f+d-o,h,o,s((1-p/v)*_))}}};function mO(i,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=i.getIndex(),r=i.getAttribute("position"),s=n?n.count:r.count;let o=0;const a=Object.keys(i.attributes),l={},c={},u=[],f=["getX","getY","getZ","getW"],h=["setX","setY","setZ","setW"];for(let v=0,y=a.length;v<y;v++){const x=a[v],E=i.attributes[x];l[x]=new E.constructor(new E.array.constructor(E.count*E.itemSize),E.itemSize,E.normalized);const A=i.morphAttributes[x];A&&(c[x]||(c[x]=[]),A.forEach((b,C)=>{const S=new b.array.constructor(b.count*b.itemSize);c[x][C]=new b.constructor(S,b.itemSize,b.normalized)}))}const d=e*.5,_=Math.log10(1/e),g=Math.pow(10,_),m=d*g;for(let v=0;v<s;v++){const y=n?n.getX(v):v;let x="";for(let E=0,A=a.length;E<A;E++){const b=a[E],C=i.getAttribute(b),S=C.itemSize;for(let M=0;M<S;M++)x+=`${~~(C[f[M]](y)*g+m)},`}if(x in t)u.push(t[x]);else{for(let E=0,A=a.length;E<A;E++){const b=a[E],C=i.getAttribute(b),S=i.morphAttributes[b],M=C.itemSize,N=l[b],B=c[b];for(let z=0;z<M;z++){const q=f[z],Q=h[z];if(N[Q](o,C[q](y)),S)for(let W=0,j=S.length;W<j;W++)B[W][Q](o,S[W][q](y))}}t[x]=o,u.push(o),o++}}const p=i.clone();for(const v in i.attributes){const y=l[v];if(p.setAttribute(v,new y.constructor(y.array.slice(0,o*y.itemSize),y.itemSize,y.normalized)),v in c)for(let x=0;x<c[v].length;x++){const E=c[v][x];p.morphAttributes[v][x]=new E.constructor(E.array.slice(0,o*E.itemSize),E.itemSize,E.normalized)}}return p.setIndex(u),p}function Av(i,e){if(e===PC)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Em||e===ub){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===Em)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}let yc,Lm,ml,Im,wa;const vf=20;let Nm,ju,$f,fo;const _O=`

			attribute float size;
			attribute vec3 customColor;

			varying vec3 vColor;

			void main() {

				vColor = customColor;

				vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );

				gl_PointSize = size * ( 300.0 / -mvPosition.z );

				gl_Position = projectionMatrix * mvPosition;

			}`,gO=`

			uniform vec3 color;
			uniform sampler2D pointTexture;
			uniform float alphaTest;

			varying vec3 vColor;

			void main() {

				gl_FragColor = vec4( color * vColor, 1.0 );

				gl_FragColor = gl_FragColor * texture2D( pointTexture, gl_PointCoord );

				if ( gl_FragColor.a < alphaTest ) discard;

			}`;function Bd(){const i=document.getElementById("three-container-points");if(!i)return;const e=Mh(i);Lm=e.scene,ml=e.camera,yc=e.renderer;const t=e.container;ml.position.z=250,yc.setAnimationLoop(yO),t.appendChild(yc.domElement);const n=new Qs(200,200,200,16,16,16);n.deleteAttribute("normal"),n.deleteAttribute("uv");const s=mO(n).getAttribute("position"),o=[],a=[],l=new We;for(let f=0,h=s.count;f<h;f++)l.setHSL(.01+.1*(f/h),1,.5),l.toArray(o,f*3),a[f]=vf*.5;const c=new Hn;c.setAttribute("position",s),c.setAttribute("customColor",new qt(o,3)),c.setAttribute("size",new qt(a,1));const u=new Nr({uniforms:{color:{value:new We(16777215)},pointTexture:{value:new xh().load("img/icons/favicon-16x16.png")},alphaTest:{value:.9}},vertexShader:_O,fragmentShader:gO});wa=new ig(c,u),Lm.add(wa),Nm=new gD,$f=new je,Im=new Ga,t.appendChild(Im.dom),window.addEventListener("resize",vO),document.addEventListener("pointermove",xO)}function xO(i){$f.x=i.clientX/window.innerWidth*2-1,$f.y=-(i.clientY/window.innerHeight)*2+1}function vO(){ml.aspect=window.innerWidth/window.innerHeight,ml.updateProjectionMatrix(),yc.setSize(window.innerWidth,window.innerHeight)}function yO(){SO(),Im.update()}function SO(){wa.rotation.x+=5e-4,wa.rotation.y+=.001;const e=wa.geometry.attributes;Nm.setFromCamera($f,ml),ju=Nm.intersectObject(wa),ju.length>0?fo!=ju[0].index&&(e.size.array[fo]=vf,fo=ju[0].index,e.size.array[fo]=vf*1.25,e.size.needsUpdate=!0):fo!==null&&(e.size.array[fo]=vf,e.size.needsUpdate=!0,fo=null),yc.render(Lm,ml)}const MO={class:"greetings"},zb=Ui({__name:"Points",setup(i){return Or(()=>{Bd()}),(e,t)=>(An(),cr("div",MO,[t[1]||(t[1]=it("h3",null,"Three Points",-1)),it("button",{onClick:t[0]||(t[0]=(...n)=>Ft(Bd)&&Ft(Bd)(...n)),class:"bg-amber-300 hover:bg-amber-700"}," animate "),t[2]||(t[2]=it("div",{class:"w-full",id:"three-container-points"},null,-1))]))}});Ee.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new je(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};hi.line={uniforms:Z_.merge([Ee.common,Ee.fog,Ee.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Hb extends Nr{constructor(e){super({type:"LineMaterial",uniforms:Z_.clone(hi.line.uniforms),vertexShader:hi.line.vertexShader,fragmentShader:hi.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Rv=new pr,Yu=new H;class Vb extends sD{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new qt(e,3)),this.setAttribute("uv",new qt(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Cm(t,6,1);return this.setAttribute("instanceStart",new ss(n,3,0)),this.setAttribute("instanceEnd",new ss(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Cm(t,6,1);return this.setAttribute("instanceColorStart",new ss(n,3,0)),this.setAttribute("instanceColorEnd",new ss(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new og(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pr);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Rv.setFromBufferAttribute(t),this.boundingBox.union(Rv))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mr),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Yu.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Yu)),Yu.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Yu));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}const Cv=new H,Pv=new H,kd=new xt;class bO extends yn{constructor(e=new Vb,t=new Hb({color:Math.random()*16777215})){super(e,t),this.isWireframe=!0,this.type="Wireframe"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)Cv.fromBufferAttribute(t,o),Pv.fromBufferAttribute(n,o),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Cv.distanceTo(Pv);const s=new Cm(r,2,1);return e.setAttribute("instanceDistanceStart",new ss(s,1,0)),e.setAttribute("instanceDistanceEnd",new ss(s,1,1)),this}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(kd),this.material.uniforms.resolution.value.set(kd.z,kd.w))}}class EO extends Vb{constructor(e){super(),this.isWireframeGeometry2=!0,this.type="WireframeGeometry2",this.fromWireframeGeometry(new og(e))}}let qu,Kn,Sc,os,Oo,zd,$u,Dv,Lv,Om,Kf,Zf;function Hd(){const i=document.getElementById("three-container-wireframe");if(!i)return;const e=Mh(i);Sc=e.scene,os=e.camera,Kn=e.renderer;const t=e.container;Kn.setAnimationLoop(TO),t.appendChild(Kn.domElement),os.position.set(-50,0,50),Oo=new Tn(40,1,1,1e3),Oo.position.copy(os.position),zd=new Sh(os,Kn.domElement),zd.minDistance=10,zd.maxDistance=500;const n=new sg(20,1),r=new EO(n);Dv=new Hb({color:4227327,linewidth:5,dashed:!1}),qu=new bO(r,Dv),qu.computeLineDistances(),qu.scale.set(1,1,1),Sc.add(qu);const s=new og(n);Lv=new Jc({color:4227327}),new HP({scale:2,dashSize:1,gapSize:1}),$u=new tg(s,Lv),$u.computeLineDistances(),$u.visible=!1,Sc.add($u),window.addEventListener("resize",()=>Iv(t)),Iv(t),Om=new Ga,t.appendChild(Om.dom)}function Iv(i){const e=i.offsetWidth,t=i.offsetWidth,n=e/t;os.aspect=n,os.updateProjectionMatrix(),Kn.setSize(e,t),Kf=e/4,Zf=t/4,Oo.aspect=Kf/Zf,Oo.updateProjectionMatrix()}function TO(){Kn.setClearColor(0,0),Kn.setViewport(0,0,window.innerWidth,window.innerHeight),Kn.render(Sc,os),Kn.setClearColor(2236962,1),Kn.clearDepth(),Kn.setScissorTest(!0),Kn.setScissor(20,20,Kf,Zf),Kn.setViewport(20,20,Kf,Zf),Oo.position.copy(os.position),Oo.quaternion.copy(os.quaternion),Kn.render(Sc,Oo),Kn.setScissorTest(!1),Om.update()}const wO={class:"greetings"},Gb=Ui({__name:"WireFrame",setup(i){return Or(()=>{Hd()}),(e,t)=>(An(),cr("div",wO,[t[1]||(t[1]=it("h3",null,"Three Points",-1)),it("button",{onClick:t[0]||(t[0]=(...n)=>Ft(Hd)&&Ft(Hd)(...n)),class:"bg-amber-300 hover:bg-amber-700"},"animate"),t[2]||(t[2]=it("div",{class:"w-full",id:"three-container-wireframe"},null,-1))]))}});class AO extends vl{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new LO(t)}),this.register(function(t){return new IO(t)}),this.register(function(t){return new VO(t)}),this.register(function(t){return new GO(t)}),this.register(function(t){return new WO(t)}),this.register(function(t){return new OO(t)}),this.register(function(t){return new UO(t)}),this.register(function(t){return new FO(t)}),this.register(function(t){return new BO(t)}),this.register(function(t){return new DO(t)}),this.register(function(t){return new kO(t)}),this.register(function(t){return new NO(t)}),this.register(function(t){return new HO(t)}),this.register(function(t){return new zO(t)}),this.register(function(t){return new CO(t)}),this.register(function(t){return new XO(t)}),this.register(function(t){return new jO(t)})}load(e,t,n,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=vc.extractUrlBase(e);o=vc.resolveURL(c,this.path)}else o=vc.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Cb(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Wb){try{o[ut.KHR_BINARY_GLTF]=new YO(e)}catch(f){r&&r(f);return}s=JSON.parse(o[ut.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new oU(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const f=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(f){case ut.KHR_MATERIALS_UNLIT:o[f]=new PO;break;case ut.KHR_DRACO_MESH_COMPRESSION:o[f]=new qO(s,this.dracoLoader);break;case ut.KHR_TEXTURE_TRANSFORM:o[f]=new $O;break;case ut.KHR_MESH_QUANTIZATION:o[f]=new KO;break;default:h.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function RO(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const ut={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class CO{constructor(e){this.parser=e,this.name=ut.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new We(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],li);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new rD(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Rm(u),c.distance=f;break;case"spot":c=new Pb(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),$r(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class PO{constructor(){this.name=ut.KHR_MATERIALS_UNLIT}getMaterialType(){return wr}extendParams(e,t,n){const r=[];e.color=new We(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],li),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,En))}return Promise.all(r)}}class DO{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class LO{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ur}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new je(a,a)}return Promise.all(s)}}class IO{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ur}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class NO{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ur}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class OO{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ur}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new We(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],li)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,En)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class UO{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ur}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class FO{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ur}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new We().setRGB(a[0],a[1],a[2],li),Promise.all(s)}}class BO{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ur}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class kO{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ur}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new We().setRGB(a[0],a[1],a[2],li),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,En)),Promise.all(s)}}class zO{constructor(e){this.parser=e,this.name=ut.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ur}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class HO{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ur}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class VO{constructor(e){this.parser=e,this.name=ut.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class GO{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class WO{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class XO{constructor(e){this.name=ut.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,f=r.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,h,r.mode,r.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(d),u,f,h,r.mode,r.filter),d})})}else return null}}class jO{constructor(e){this.name=ut.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const c of r.primitives)if(c.mode!==Vi.TRIANGLES&&c.mode!==Vi.TRIANGLE_STRIP&&c.mode!==Vi.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,d=[];for(const _ of f){const g=new Qe,m=new H,p=new Ir,v=new H(1,1,1),y=new NP(_.geometry,_.material,h);for(let x=0;x<h;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&v.fromBufferAttribute(l.SCALE,x),y.setMatrixAt(x,g.compose(m,p,v));for(const x in l)if(x==="_COLOR_0"){const E=l[x];y.instanceColor=new wm(E.array,E.itemSize,E.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&_.geometry.setAttribute(x,l[x]);Wt.prototype.copy.call(y,_),this.parser.assignFinalMaterial(y),d.push(y)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Wb="glTF",Fl=12,Nv={JSON:1313821514,BIN:5130562};class YO{constructor(e){this.name=ut.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Fl),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Wb)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Fl,s=new DataView(e,Fl);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Nv.JSON){const c=new Uint8Array(e,Fl+o,a);this.content=n.decode(c)}else if(l===Nv.BIN){const c=Fl+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class qO{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ut.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=Um[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=Um[u]||u.toLowerCase();if(o[u]!==void 0){const h=n.accessors[e.attributes[u]],d=Wa[h.componentType];c[f]=d.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f,h){r.decodeDracoFile(u,function(d){for(const _ in d.attributes){const g=d.attributes[_],m=l[_];m!==void 0&&(g.normalized=m)}f(d)},a,c,li,h)})})}}class $O{constructor(){this.name=ut.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class KO{constructor(){this.name=ut.KHR_MESH_QUANTIZATION}}class Xb extends Qc{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,f=(n-t)/u,h=f*f,d=h*f,_=e*c,g=_-c,m=-2*d+3*h,p=d-h,v=1-m,y=p-h+f;for(let x=0;x!==a;x++){const E=o[g+x+a],A=o[g+x+l]*u,b=o[_+x+a],C=o[_+x]*u;s[x]=v*E+y*A+m*b+p*C}return s}}const ZO=new Ir;class JO extends Xb{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return ZO.fromArray(s).normalize().toArray(s),s}}const Vi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Wa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ov={9728:oi,9729:Li,9984:eb,9985:hf,9986:ql,9987:is},Uv={33071:Us,33648:Gf,10497:al},Vd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Um={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ms={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},QO={CUBICSPLINE:void 0,LINEAR:Vc,STEP:Hc},Gd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function eU(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ag({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:fs})),i.DefaultMaterial}function ho(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function $r(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function tU(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(n){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):i.attributes.position;o.push(h)}if(r){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):i.attributes.normal;a.push(h)}if(s){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):i.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=f),s&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function nU(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function iU(i){let e;const t=i.extensions&&i.extensions[ut.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Wd(t.attributes):e=i.indices+":"+Wd(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+Wd(i.targets[n]);return e}function Wd(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Fm(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function rU(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const sU=new Qe;class oU{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new RO,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);r=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&o<98?this.textureLoader=new xh(this.options.manager):this.textureLoader=new oD(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Cb(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};return ho(s,a,r),$r(a,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ut.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){n.load(vc.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Vd[r.type],a=Wa[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new ai(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Vd[r.type],c=Wa[r.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=r.byteOffset||0,d=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,_=r.normalized===!0;let g,m;if(d&&d!==f){const p=Math.floor(h/d),v="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let y=t.cache.get(v);y||(g=new c(a,p*d,r.count*d/u),y=new bb(g,d/u),t.cache.add(v,y)),m=new ss(y,l,h%d/u,_)}else a===null?g=new c(r.count*l):g=new c(a,h,r.count*l),m=new ai(g,l,_);if(r.sparse!==void 0){const p=Vd.SCALAR,v=Wa[r.sparse.indices.componentType],y=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,E=new v(o[1],y,r.sparse.count*p),A=new c(o[2],x,r.sparse.count*l);a!==null&&(m=new ai(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let b=0,C=E.length;b<C;b++){const S=E[b];if(m.setX(S,A[b*l]),l>=2&&m.setY(S,A[b*l+1]),l>=3&&m.setZ(S,A[b*l+2]),l>=4&&m.setW(S,A[b*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(s.samplers||{})[o.sampler]||{};return u.magFilter=Ov[h.magFilter]||Li,u.minFilter=Ov[h.minFilter]||is,u.wrapS=Uv[h.wrapS]||al,u.wrapT=Uv[h.wrapT]||al,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==oi&&u.minFilter!==Li,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const h=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(h,d){let _=h;t.isImageBitmapLoader===!0&&(_=function(g){const m=new Sn(g);m.needsUpdate=!0,h(m)}),t.load(vc.resolveURL(f,s.path),_,void 0,d)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),$r(f,o),f.userData.mimeType=o.mimeType||rU(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[ut.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ut.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[ut.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ng,fr.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Jc,fr.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(r||s||o){let a="ClonedMaterial:"+n.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ag}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[ut.KHR_MATERIALS_UNLIT]){const f=r[ut.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,s,t))}else{const f=s.pbrMetallicRoughness||{};if(a.color=new We(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],li),a.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,En)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=br);const u=s.alphaMode||Gd.OPAQUE;if(u===Gd.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Gd.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==wr&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new je(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;a.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&o!==wr&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==wr){const f=s.emissiveFactor;a.emissive=new We().setRGB(f[0],f[1],f[2],li)}return s.emissiveTexture!==void 0&&o!==wr&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,En)),Promise.all(c).then(function(){const f=new o(a);return s.name&&(f.name=s.name),$r(f,s),t.associations.set(f,{materials:e}),s.extensions&&ho(r,f,s),f})}createUniqueName(e){const t=At.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(a){return n[ut.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Fv(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=iU(c),f=r[u];if(f)o.push(f.promise);else{let h;c.extensions&&c.extensions[ut.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=Fv(new Hn,c,t),r[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?eU(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let d=0,_=u.length;d<_;d++){const g=u[d],m=o[d];let p;const v=c[d];if(m.mode===Vi.TRIANGLES||m.mode===Vi.TRIANGLE_STRIP||m.mode===Vi.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new DP(g,v):new yn(g,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Vi.TRIANGLE_STRIP?p.geometry=Av(p.geometry,ub):m.mode===Vi.TRIANGLE_FAN&&(p.geometry=Av(p.geometry,Em));else if(m.mode===Vi.LINES)p=new tg(g,v);else if(m.mode===Vi.LINE_STRIP)p=new eg(g,v);else if(m.mode===Vi.LINE_LOOP)p=new FP(g,v);else if(m.mode===Vi.POINTS)p=new ig(g,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&nU(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),$r(p,s),m.extensions&&ho(r,p,m),t.assignFinalMaterial(p),f.push(p)}for(let d=0,_=f.length;d<_;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return s.extensions&&ho(r,f[0],s),f[0];const h=new bo;s.extensions&&ho(r,h,s),t.associations.set(h,{meshes:e});for(let d=0,_=f.length;d<_;d++)h.add(f[d]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Tn(hb.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new cg(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),$r(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const f=o[c];if(f){a.push(f);const h=new Qe;s!==null&&h.fromArray(s.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new J_(a,l)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let f=0,h=r.channels.length;f<h;f++){const d=r.channels[f],_=r.samplers[d.sampler],g=d.target,m=g.node,p=r.parameters!==void 0?r.parameters[_.input]:_.input,v=r.parameters!==void 0?r.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(_),u.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const h=f[0],d=f[1],_=f[2],g=f[3],m=f[4],p=[];for(let v=0,y=h.length;v<y;v++){const x=h[v],E=d[v],A=_[v],b=g[v],C=m[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const S=n._createAnimationTracks(x,E,A,b,C);if(S)for(let M=0;M<S.length;M++)p.push(S[M])}return new qP(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],f=c[1],h=c[2];h!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(h,sU)});for(let d=0,_=f.length;d<_;d++)u.add(f[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Eb:c.length>1?u=new bo:c.length===1?u=c[0]:u=new Wt,u!==c[0])for(let f=0,h=c.length;f<h;f++)u.add(c[f]);if(s.name&&(u.userData.name=s.name,u.name=o),$r(u,s),s.extensions&&ho(n,u,s),s.matrix!==void 0){const f=new Qe;f.fromArray(s.matrix),u.applyMatrix4(f)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new bo;n.name&&(s.name=r.createUniqueName(n.name)),$r(s,n),n.extensions&&ho(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++)s.add(l[u]);const c=u=>{const f=new Map;for(const[h,d]of r.associations)(h instanceof fr||h instanceof Sn)&&f.set(h,d);return u.traverse(h=>{const d=r.associations.get(h);d!=null&&f.set(h,d)}),f};return r.associations=c(s),s})}_createAnimationTracks(e,t,n,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];Ms[s.path]===Ms.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(Ms[s.path]){case Ms.weights:c=hl;break;case Ms.rotation:c=dl;break;case Ms.position:case Ms.scale:c=pl;break;default:switch(n.itemSize){case 1:c=hl;break;case 2:case 3:default:c=pl;break}break}const u=r.interpolation!==void 0?QO[r.interpolation]:Vc,f=this._getArrayFromAccessor(n);for(let h=0,d=l.length;h<d;h++){const _=new c(l[h]+"."+Ms[s.path],t.array,f,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Fm(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof dl?JO:Xb;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function aU(i,e,t){const n=e.attributes,r=new pr;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new H(l[0],l[1],l[2]),new H(c[0],c[1],c[2])),a.normalized){const u=Fm(Wa[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new H,l=new H;for(let c=0,u=s.length;c<u;c++){const f=s[c];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],d=h.min,_=h.max;if(d!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),h.normalized){const g=Fm(Wa[h.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}i.boundingBox=r;const o=new mr;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function Fv(i,e,t){const n=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=Um[o]||o.toLowerCase();a in i.attributes||r.push(s(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});r.push(o)}return pt.workingColorSpace!==li&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${pt.workingColorSpace}" not supported.`),$r(i,e),aU(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?tU(i,e.targets,t):i})}class lU{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=Xd(),this._delta=0,this._elapsed=0,this._timescale=1,this._usePageVisibilityAPI=typeof document<"u"&&document.hidden!==void 0,this._usePageVisibilityAPI===!0&&(this._pageVisibilityHandler=cU.bind(this),document.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=Xd()-this._startTime,this}dispose(){return this._usePageVisibilityAPI===!0&&document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this}update(e){return this._usePageVisibilityAPI===!0&&document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:Xd())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Xd(){return performance.now()}function cU(){document.hidden===!1&&this.reset()}let Wc,va,Kr,mg,xr;const uU=.5;function jd(){const i=document.getElementById("three-container-morphingsphere");if(!i)return;const e=Mh(i);va=e.scene,Wc=e.camera,Kr=e.renderer;const t=e.container;mg=new lU;const n=new Rm(16720384,5e4);n.position.set(100,100,100),va.add(n);const r=new Rm(2293504,1e4);r.position.set(-100,-100,-100),va.add(r),va.add(new Db(1118481)),new AO().load("/PrimaryIonDrive.gltf",function(a){xr=a.scene.getObjectByName("OSG_Scene"),xr&&(xr.rotation.z=Math.PI/2,va.add(xr));const l=new ng({size:10,sizeAttenuation:!1,map:new xh().load("textures/sprites/disc.png"),alphaTest:.5}),c=new ig(xr.geometry,l);c.morphTargetInfluences=xr.morphTargetInfluences,c.morphTargetDictionary=xr.morphTargetDictionary,xr.add(c)}),Kr=new dg,Kr.setPixelRatio(window.devicePixelRatio),Kr.setSize(window.innerWidth,window.innerHeight),Kr.setAnimationLoop(hU),t.appendChild(Kr.domElement);const o=new Sh(Wc,Kr.domElement);o.minDistance=1,o.maxDistance=20,window.addEventListener("resize",fU)}function fU(){Wc.aspect=window.innerWidth/window.innerHeight,Wc.updateProjectionMatrix(),Kr.setSize(window.innerWidth,window.innerHeight)}function hU(){mg.update(),dU()}function dU(){const i=mg.getDelta();if(xr!==void 0){const e=i*uU;xr.rotation.y+=e}Kr.render(va,Wc)}const pU={class:"greetings"},jb=Ui({__name:"MorphingSphere",setup(i){return Or(()=>{jd()}),(e,t)=>(An(),cr("div",pU,[t[1]||(t[1]=it("h3",null,"Three Points",-1)),it("button",{onClick:t[0]||(t[0]=(...n)=>Ft(jd)&&Ft(jd)(...n)),class:"bg-amber-300 hover:bg-amber-700"},"animate"),t[2]||(t[2]=it("div",{class:"w-full",id:"three-container-morphingsphere"},null,-1))]))}}),Yb=Sw("login",()=>{const i=si("DataPrep"),e=si("home"),t=si(!1),n=si("100%"),r=60*60*1e3,s=Date.now();function o(){t.value=!0}async function a(){console.debug("init store");let c;try{c=localStorage.getItem("piniaState")}catch(u){console.error(u)}if(c){const u=JSON.parse(c);t.value=u.login.loggedin,i.value=u.login.currentView,e.value=u.login.currentTab}}return a(),setTimeout(()=>{t.value=!1,alert("Session timed out!")},r),{currentView:i,currentTab:e,loggedin:t,sessionTimeoutProgress:n,login:o,calculateSessionTimeout:()=>{n.value.includes("-")||(n.value=`${((s+r-Date.now())/r*100%100).toFixed(2)}%`)}}});function mU(i){return Xm()?(Kv(i),!0):!1}const Yd=new WeakMap,_U=(...i)=>{var e;const t=i[0],n=(e=l_())==null?void 0:e.proxy;if(n==null&&!i_())throw new Error("injectLocal must be called in setup");return n&&Yd.has(n)&&t in Yd.get(n)?Yd.get(n)[t]:lr(...i)},gU=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const xU=Object.prototype.toString,vU=i=>xU.call(i)==="[object Object]";function Bv(i){return i.endsWith("rem")?Number.parseFloat(i)*16:Number.parseFloat(i)}function yU(i){return l_()}function qd(i){return Array.isArray(i)?i:[i]}function SU(i,e=!0,t){yU()?Or(i,t):e?i():sh(i)}function MU(i,e,t){return zs(i,e,{...t,immediate:!0})}const _g=gU?window:void 0;function bU(i){var e;const t=Ca(i);return(e=t==null?void 0:t.$el)!=null?e:t}function Bm(...i){const e=[],t=()=>{e.forEach(a=>a()),e.length=0},n=(a,l,c,u)=>(a.addEventListener(l,c,u),()=>a.removeEventListener(l,c,u)),r=ni(()=>{const a=qd(Ca(i[0])).filter(l=>l!=null);return a.every(l=>typeof l!="string")?a:void 0}),s=MU(()=>{var a,l;return[(l=(a=r.value)==null?void 0:a.map(c=>bU(c)))!=null?l:[_g].filter(c=>c!=null),qd(Ca(r.value?i[1]:i[0])),qd(Ft(r.value?i[2]:i[1])),Ca(r.value?i[3]:i[2])]},([a,l,c,u])=>{if(t(),!(a!=null&&a.length)||!(l!=null&&l.length)||!(c!=null&&c.length))return;const f=vU(u)?{...u}:u;e.push(...a.flatMap(h=>l.flatMap(d=>c.map(_=>n(h,d,_,f)))))},{flush:"post"}),o=()=>{s(),t()};return mU(t),o}function EU(){const i=si(!1),e=l_();return e&&Or(()=>{i.value=!0},e),i}function TU(i){const e=EU();return ni(()=>(e.value,!!i()))}const wU=Symbol("vueuse-ssr-width");function AU(){const i=i_()?_U(wU,null):null;return typeof i=="number"?i:void 0}function RU(i,e={}){const{window:t=_g,ssrWidth:n=AU()}=e,r=TU(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function"),s=si(typeof n=="number"),o=dy(),a=si(!1),l=c=>{a.value=c.matches};return vT(()=>{if(s.value){s.value=!r.value;const c=Ca(i).split(",");a.value=c.some(u=>{const f=u.includes("not all"),h=u.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),d=u.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);let _=!!(h||d);return h&&_&&(_=n>=Bv(h[1])),d&&_&&(_=n<=Bv(d[1])),f?!_:_});return}r.value&&(o.value=t.matchMedia(Ca(i)),a.value=o.value.matches)}),Bm(o,"change",l,{passive:!0}),ni(()=>a.value)}function CU(i={}){const{window:e=_g,initialWidth:t=Number.POSITIVE_INFINITY,initialHeight:n=Number.POSITIVE_INFINITY,listenOrientation:r=!0,includeScrollbar:s=!0,type:o="inner"}=i,a=si(t),l=si(n),c=()=>{if(e)if(o==="outer")a.value=e.outerWidth,l.value=e.outerHeight;else if(o==="visual"&&e.visualViewport){const{width:f,height:h,scale:d}=e.visualViewport;a.value=Math.round(f*d),l.value=Math.round(h*d)}else s?(a.value=e.innerWidth,l.value=e.innerHeight):(a.value=e.document.documentElement.clientWidth,l.value=e.document.documentElement.clientHeight)};c(),SU(c);const u={passive:!0};if(Bm("resize",c,u),e&&o==="visual"&&e.visualViewport&&Bm(e.visualViewport,"resize",c,u),r){const f=RU("(orientation: portrait)");zs(f,()=>c())}return{width:a,height:l}}const gg=Ui({__name:"MagneticEffect",props:{divId:{type:String,required:!0},textId:{type:String,required:!0},magnetoStrengthVal:{type:Number,default:70},magnetoTextStrengthVal:{type:Number,default:50}},setup(i){const e=i,{width:t}=CU();let n,r;const s=a=>{XR(a,n,r,e.magnetoStrengthVal,e.magnetoTextStrengthVal)},o=()=>{jR(n,r)};return Or(()=>{n=si(document.getElementById(e.divId)),r=si(document.getElementById(e.textId)),t.value>700&&(n.value.addEventListener("mousemove",s),n.value.addEventListener("mouseleave",o))}),n_(()=>{n.value.removeEventListener("mousemove",s),r.value.removeEventListener("mouseleave",o)}),(a,l)=>JE(a.$slots,"default")}}),PU={class:"flex h-full flex-col items-center justify-between"},DU={class:"relative z-[19] w-full"},LU={class:"heading-2 mt-12 font-bold text-stone-50 md:mt-24",id:"navLinks"},IU=["onClick"],NU={class:"font-fancy -translate-x-5 transition-all duration-300 ease-in-out group-hover:translate-x-5"},OU={class:"w-full"},UU={class:"mt-2 h-full font-normal text-stone-50"},FU={class:"mt-6 flex flex-wrap justify-start gap-1"},BU=Ui({__name:"Nav",emits:["isLocked"],setup(i,{emit:e}){const t={Cube:Bb,Earth:kb,Points:zb,WireFrame:Gb,MorphingSphere:jb},n=Yb();function r(l){n.currentTab=l}const s=si(!1),o=()=>{var c;s.value=!s.value,(c=document.getElementById("magneto"))==null||c.classList.toggle("active");const l=document.getElementById("navbar");s.value?($R("#navbar","#navLinks li a",".contact"),l.focus()):(KR("#navbar","#navLinks li a",".contact"),l.blur())};Or(()=>{zR("#burger","#hero")});const a=e;return zs(s,l=>{a("isLocked",l)}),(l,c)=>(An(),cr(ti,null,[on(Ft(XU),{onClick:o,class:"z-[9999] scale-0 drop-shadow-lg",id:"burger"}),it("div",{onClick:o,class:Xa(["fixed inset-0 z-[9998] size-full select-none bg-black opacity-50",{hidden:!s.value}])},null,2),it("div",{tabindex:"0",id:"navbar",onKeydown:c[0]||(c[0]=cw(u=>o(),["esc"])),class:"fixed right-0 top-0 z-[9998] h-full w-full translate-x-full select-none rounded-s-lg p-5 will-change-auto focus:outline-none max-md:w-[98%] sm:p-10 md:w-2/5 md:px-20 lg:w-2/5 bg-gradient-to-r from-stone-950 from-10% via-stone-900 via-30% to-transparent to-90%"},[on(w1,{id:"circles",class:"absolute right-0 top-0 opacity-25"}),it("div",PU,[it("div",DU,[it("ul",LU,[(An(),cr(ti,null,Eg(t,(u,f)=>it("li",{class:Xa(["overflow-y-clip",["",{active:Ft(n).currentTab===f}]]),key:f},[it("a",{onClick:h=>r(f),class:"group my-2 flex h-full w-fit translate-y-full cursor-pointer items-center justify-start leading-none will-change-auto"},[c[1]||(c[1]=it("span",{class:"h-4 w-4 scale-0 rounded-full bg-stone-50 opacity-0 transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100"},null,-1)),it("p",NU,Wm(f),1)],8,IU)],2)),64))])]),on(gg,{divId:"name-container",textId:"name"},{default:Yc(()=>c[2]||(c[2]=[it("div",{id:"name-container",class:"group -m-10 h-fit cursor-pointer p-10"},[it("h1",{id:"name",class:"font-fancy flex items-start text-xl font-extrabold uppercase md:text-3xl"},[o_(" dspwithaheart "),it("span",{class:"font-fancy !inline !origin-center text-xl transition-transform duration-500 ease-in-out group-hover:rotate-[360deg]"},"©")])],-1)])),_:1}),it("div",OU,[it("div",UU,[it("div",FU,[(An(!0),cr(ti,null,Eg(Ft(ZR),u=>(An(),Ya(Ft(GU),{class:"contact border border-stone-600 opacity-100",key:u.label,label:u.label,url:u.url},null,8,["label","url"]))),128))])])])])],32)],64))}}),kU=i=>{},zU={class:"after:ease-expo flex-center relative z-20 overflow-hidden transition-all after:absolute after:left-0 after:inline-block after:will-change-auto after:translate-y-0 after:text-stone-200 after:transition-all after:duration-700 after:content-[attr(after)] group-hover:after:-translate-y-[100%]"},HU={class:"ease-expo text-nowrap font-fancy transition-all duration-700 group-hover:-translate-y-full"},VU=Ui({__name:"Button",props:{label:{type:String,required:!0},url:{type:String,required:!1}},setup(i){return(e,t)=>(An(),Ya(Ty(i.url?"a":"button"),{onClick:t[0]||(t[0]=()=>{i.url&&Ft(kU)(i.url)}),id:"button",class:Xa(["leading-base group pointer-events-auto relative h-full max-w-full transform-none overflow-clip px-5 py-2 text-[1rem] font-semibold uppercase tracking-normal text-stone-100 sm:text-sm",e.$attrs.class]),href:i.url},{default:Yc(()=>[it("span",zU,[it("span",HU,Wm(i.label),1)])]),_:1},8,["class","href"]))}}),GU=$c(VU,[["__scopeId","data-v-0c490f03"]]),WU=Ui({__name:"BurgerMenuBtn",setup(i){return(e,t)=>(An(),Ya(gg,{divId:"magneto",textId:"magnetoText"},{default:Yc(()=>[it("div",jy(e.$attrs,{class:"fixed right-7 top-7 z-[20]"}),t[0]||(t[0]=[it("div",{id:"magneto",class:"flex items-center size-10 cursor-pointer rounded-full bg-stone-200 brightness-90 ease-in-out lg:size-[4.5rem]"},[it("h1",{class:"w-full before:bg-cyan-700 after:bg-stone-700",id:"magnetoText"})],-1)]),16)]),_:1}))}}),XU=$c(WU,[["__scopeId","data-v-c9571ac8"]]),jU={class:"relative container w-full h-full mx-auto"},YU=Ui({__name:"App",setup(i){return(e,t)=>(An(),cr("div",jU,[on(gg,{magnetoStrengthVal:10,magnetoTextStrengthVal:20,divId:"name-container",textId:"name"},{default:Yc(()=>t[0]||(t[0]=[it("div",{id:"name-container",class:"group -m-10 h-fit cursor-pointer p-10"},[it("h1",{id:"name",class:"font-fancy flex items-start text-xl font-extrabold uppercase md:text-3xl gradientText"},[o_(" dspwithaheart "),it("span",{class:"gradientText font-fancy !inline !origin-center text-xl transition-transform duration-500 ease-in-out group-hover:rotate-[360deg]"},"©")])],-1)])),_:1}),on(Ft(BU),{onIsLocked:n=>!0}),on(Ft(pS))]))}}),qU=$c(YU,[["__scopeId","data-v-ba191a9f"]]),$U="modulepreload",KU=function(i){return"/"+i},kv={},ha=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(t.map(l=>{if(l=KU(l),l in kv)return;kv[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":$U,c||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((h,d)=>{f.addEventListener("load",h),f.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},ZU={class:"relative container mx-auto gradientBackground"},JU=Ui({__name:"HomeView",setup(i){const e={Cube:Bb,Earth:kb,Points:zb,WireFrame:Gb,MorphingSphere:jb},t=Yb();return(n,r)=>(An(),cr("div",ZU,[(An(),Ya(Ty(e[Ft(t).currentTab])))]))}}),QU=$c(JU,[["__scopeId","data-v-b5fc521b"]]),e3=M1({history:Jw("/"),routes:[{path:"/",name:"home",component:QU},{path:"/about",name:"about",component:()=>ha(()=>import("./AboutView-CzTWiBE7.js"),__vite__mapDeps([0,1]))},{path:"/earth",name:"earth",component:()=>ha(()=>import("./Earth-CEJdYYN6.js"),[])},{path:"/cube",name:"cube",component:()=>ha(()=>import("./Cube-BmJ6esb-.js"),[])},{path:"/points",name:"points",component:()=>ha(()=>import("./Points-DgT_KXHa.js"),[])},{path:"/wireframe",name:"wireframe",component:()=>ha(()=>import("./WireFrame-BqjliiQp.js"),[])},{path:"/morphingsphere",name:"morphingsphere",component:()=>ha(()=>import("./MorphingSphere-CGQmA_1z.js"),[])}]}),xg=hw(qU);xg.use(mw());xg.use(e3);xg.mount("#app");export{$c as _,it as a,kb as b,cr as c,Bb as d,zb as e,Gb as f,jb as g,An as o};
