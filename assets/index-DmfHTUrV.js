const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AboutView-DRQJdnXA.js","assets/AboutView-CSIvawM9.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Wm(i){const e=Object.create(null);for(const t of i.split(","))e[t]=1;return t=>t in e}const Ft={},Ia=[],Cr=()=>{},pT=()=>!1,oh=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),Xm=i=>i.startsWith("onUpdate:"),Wn=Object.assign,jm=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},mT=Object.prototype.hasOwnProperty,Et=(i,e)=>mT.call(i,e),Je=Array.isArray,Na=i=>ah(i)==="[object Map]",Yx=i=>ah(i)==="[object Set]",Qe=i=>typeof i=="function",en=i=>typeof i=="string",gs=i=>typeof i=="symbol",Ht=i=>i!==null&&typeof i=="object",qx=i=>(Ht(i)||Qe(i))&&Qe(i.then)&&Qe(i.catch),$x=Object.prototype.toString,ah=i=>$x.call(i),gT=i=>ah(i).slice(8,-1),Kx=i=>ah(i)==="[object Object]",Ym=i=>en(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,tc=Wm(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),lh=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},_T=/-(\w)/g,er=lh(i=>i.replace(_T,(e,t)=>t?t.toUpperCase():"")),vT=/\B([A-Z])/g,eo=lh(i=>i.replace(vT,"-$1").toLowerCase()),ch=lh(i=>i.charAt(0).toUpperCase()+i.slice(1)),Lh=lh(i=>i?`on${ch(i)}`:""),Vs=(i,e)=>!Object.is(i,e),Ih=(i,...e)=>{for(let t=0;t<i.length;t++)i[t](...e)},Zx=(i,e,t,n=!1)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,writable:n,value:t})},xT=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let b_;const uh=()=>b_||(b_=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function qm(i){if(Je(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=en(n)?bT(n):qm(n);if(r)for(const s in r)e[s]=r[s]}return e}else if(en(i)||Ht(i))return i}const yT=/;(?![^(]*\))/g,ST=/:([^]+)/,MT=/\/\*[^]*?\*\//g;function bT(i){const e={};return i.replace(MT,"").split(yT).forEach(t=>{if(t){const n=t.split(ST);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function fs(i){let e="";if(en(i))e=i;else if(Je(i))for(let t=0;t<i.length;t++){const n=fs(i[t]);n&&(e+=n+" ")}else if(Ht(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const TT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ET=Wm(TT);function Jx(i){return!!i||i===""}const Qx=i=>!!(i&&i.__v_isRef===!0),Ls=i=>en(i)?i:i==null?"":Je(i)||Ht(i)&&(i.toString===$x||!Qe(i.toString))?Qx(i)?Ls(i.value):JSON.stringify(i,ey,2):String(i),ey=(i,e)=>Qx(e)?ey(i,e.value):Na(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,r],s)=>(t[Nh(n,s)+" =>"]=r,t),{})}:Yx(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Nh(t))}:gs(e)?Nh(e):Ht(e)&&!Je(e)&&!Kx(e)?String(e):e,Nh=(i,e="")=>{var t;return gs(i)?`Symbol(${(t=i.description)!=null?t:e})`:i};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ni;class ty{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ni,!e&&ni&&(this.index=(ni.scopes||(ni.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=ni;try{return ni=this,e()}finally{ni=t}}}on(){ni=this}off(){ni=this.parent}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function ny(i){return new ty(i)}function $m(){return ni}function iy(i,e=!1){ni&&ni.cleanups.push(i)}let Ot;const Uh=new WeakSet;class ry{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ni&&ni.active&&ni.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Uh.has(this)&&(Uh.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||oy(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,T_(this),ay(this);const e=Ot,t=ur;Ot=this,ur=!0;try{return this.fn()}finally{ly(this),Ot=e,ur=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Jm(e);this.deps=this.depsTail=void 0,T_(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Uh.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Jd(this)&&this.run()}get dirty(){return Jd(this)}}let sy=0,nc,ic;function oy(i,e=!1){if(i.flags|=8,e){i.next=ic,ic=i;return}i.next=nc,nc=i}function Km(){sy++}function Zm(){if(--sy>0)return;if(ic){let e=ic;for(ic=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let i;for(;nc;){let e=nc;for(nc=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(n){i||(i=n)}e=t}}if(i)throw i}function ay(i){for(let e=i.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ly(i){let e,t=i.depsTail,n=t;for(;n;){const r=n.prevDep;n.version===-1?(n===t&&(t=r),Jm(n),wT(n)):e=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=r}i.deps=e,i.depsTail=t}function Jd(i){for(let e=i.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(cy(e.dep.computed)||e.dep.version!==e.version))return!0;return!!i._dirty}function cy(i){if(i.flags&4&&!(i.flags&16)||(i.flags&=-17,i.globalVersion===Ac))return;i.globalVersion=Ac;const e=i.dep;if(i.flags|=2,e.version>0&&!i.isSSR&&i.deps&&!Jd(i)){i.flags&=-3;return}const t=Ot,n=ur;Ot=i,ur=!0;try{ay(i);const r=i.fn(i._value);(e.version===0||Vs(r,i._value))&&(i._value=r,e.version++)}catch(r){throw e.version++,r}finally{Ot=t,ur=n,ly(i),i.flags&=-3}}function Jm(i,e=!1){const{dep:t,prevSub:n,nextSub:r}=i;if(n&&(n.nextSub=r,i.prevSub=void 0),r&&(r.prevSub=n,i.nextSub=void 0),t.subs===i&&(t.subs=n,!n&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Jm(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function wT(i){const{prevDep:e,nextDep:t}=i;e&&(e.nextDep=t,i.prevDep=void 0),t&&(t.prevDep=e,i.nextDep=void 0)}let ur=!0;const uy=[];function to(){uy.push(ur),ur=!1}function no(){const i=uy.pop();ur=i===void 0?!0:i}function T_(i){const{cleanup:e}=i;if(i.cleanup=void 0,e){const t=Ot;Ot=void 0;try{e()}finally{Ot=t}}}let Ac=0;class AT{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Qm{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ot||!ur||Ot===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ot)t=this.activeLink=new AT(Ot,this),Ot.deps?(t.prevDep=Ot.depsTail,Ot.depsTail.nextDep=t,Ot.depsTail=t):Ot.deps=Ot.depsTail=t,fy(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const n=t.nextDep;n.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=n),t.prevDep=Ot.depsTail,t.nextDep=void 0,Ot.depsTail.nextDep=t,Ot.depsTail=t,Ot.deps===t&&(Ot.deps=n)}return t}trigger(e){this.version++,Ac++,this.notify(e)}notify(e){Km();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Zm()}}}function fy(i){if(i.dep.sc++,i.sub.flags&4){const e=i.dep.computed;if(e&&!i.dep.subs){e.flags|=20;for(let n=e.deps;n;n=n.nextDep)fy(n)}const t=i.dep.subs;t!==i&&(i.prevSub=t,t&&(t.nextSub=i)),i.dep.subs=i}}const Af=new WeakMap,Co=Symbol(""),Qd=Symbol(""),Rc=Symbol("");function Fn(i,e,t){if(ur&&Ot){let n=Af.get(i);n||Af.set(i,n=new Map);let r=n.get(t);r||(n.set(t,r=new Qm),r.map=n,r.key=t),r.track()}}function Qr(i,e,t,n,r,s){const o=Af.get(i);if(!o){Ac++;return}const a=l=>{l&&l.trigger()};if(Km(),e==="clear")o.forEach(a);else{const l=Je(i),c=l&&Ym(t);if(l&&t==="length"){const u=Number(n);o.forEach((f,h)=>{(h==="length"||h===Rc||!gs(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Rc)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Co)),Na(i)&&a(o.get(Qd)));break;case"delete":l||(a(o.get(Co)),Na(i)&&a(o.get(Qd)));break;case"set":Na(i)&&a(o.get(Co));break}}Zm()}function RT(i,e){const t=Af.get(i);return t&&t.get(e)}function Jo(i){const e=_t(i);return e===i?e:(Fn(e,"iterate",Rc),Ji(i)?e:e.map(Bn))}function fh(i){return Fn(i=_t(i),"iterate",Rc),i}const CT={__proto__:null,[Symbol.iterator](){return Oh(this,Symbol.iterator,Bn)},concat(...i){return Jo(this).concat(...i.map(e=>Je(e)?Jo(e):e))},entries(){return Oh(this,"entries",i=>(i[1]=Bn(i[1]),i))},every(i,e){return kr(this,"every",i,e,void 0,arguments)},filter(i,e){return kr(this,"filter",i,e,t=>t.map(Bn),arguments)},find(i,e){return kr(this,"find",i,e,Bn,arguments)},findIndex(i,e){return kr(this,"findIndex",i,e,void 0,arguments)},findLast(i,e){return kr(this,"findLast",i,e,Bn,arguments)},findLastIndex(i,e){return kr(this,"findLastIndex",i,e,void 0,arguments)},forEach(i,e){return kr(this,"forEach",i,e,void 0,arguments)},includes(...i){return Fh(this,"includes",i)},indexOf(...i){return Fh(this,"indexOf",i)},join(i){return Jo(this).join(i)},lastIndexOf(...i){return Fh(this,"lastIndexOf",i)},map(i,e){return kr(this,"map",i,e,void 0,arguments)},pop(){return Al(this,"pop")},push(...i){return Al(this,"push",i)},reduce(i,...e){return E_(this,"reduce",i,e)},reduceRight(i,...e){return E_(this,"reduceRight",i,e)},shift(){return Al(this,"shift")},some(i,e){return kr(this,"some",i,e,void 0,arguments)},splice(...i){return Al(this,"splice",i)},toReversed(){return Jo(this).toReversed()},toSorted(i){return Jo(this).toSorted(i)},toSpliced(...i){return Jo(this).toSpliced(...i)},unshift(...i){return Al(this,"unshift",i)},values(){return Oh(this,"values",Bn)}};function Oh(i,e,t){const n=fh(i),r=n[e]();return n!==i&&!Ji(i)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const PT=Array.prototype;function kr(i,e,t,n,r,s){const o=fh(i),a=o!==i&&!Ji(i),l=o[e];if(l!==PT[e]){const f=l.apply(i,s);return a?Bn(f):f}let c=t;o!==i&&(a?c=function(f,h){return t.call(this,Bn(f),h,i)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,i)}));const u=l.call(o,c,n);return a&&r?r(u):u}function E_(i,e,t,n){const r=fh(i);let s=t;return r!==i&&(Ji(i)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,i)}):s=function(o,a,l){return t.call(this,o,Bn(a),l,i)}),r[e](s,...n)}function Fh(i,e,t){const n=_t(i);Fn(n,"iterate",Rc);const r=n[e](...t);return(r===-1||r===!1)&&ng(t[0])?(t[0]=_t(t[0]),n[e](...t)):r}function Al(i,e,t=[]){to(),Km();const n=_t(i)[e].apply(i,t);return Zm(),no(),n}const DT=Wm("__proto__,__v_isRef,__isVue"),hy=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(gs));function LT(i){gs(i)||(i=String(i));const e=_t(this);return Fn(e,"has",i),e.hasOwnProperty(i)}class dy{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return n===(r?s?VT:_y:s?gy:my).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=Je(e);if(!r){let l;if(o&&(l=CT[t]))return l;if(t==="hasOwnProperty")return LT}const a=Reflect.get(e,t,Qt(e)?e:n);return(gs(t)?hy.has(t):DT(t))||(r||Fn(e,"get",t),s)?a:Qt(a)?o&&Ym(t)?a:a.value:Ht(a)?r?xy(a):Kc(a):a}}class py extends dy{constructor(e=!1){super(!1,e)}set(e,t,n,r){let s=e[t];if(!this._isShallow){const l=Vo(s);if(!Ji(n)&&!Vo(n)&&(s=_t(s),n=_t(n)),!Je(e)&&Qt(s)&&!Qt(n))return l?!1:(s.value=n,!0)}const o=Je(e)&&Ym(t)?Number(t)<e.length:Et(e,t),a=Reflect.set(e,t,n,Qt(e)?e:r);return e===_t(r)&&(o?Vs(n,s)&&Qr(e,"set",t,n):Qr(e,"add",t,n)),a}deleteProperty(e,t){const n=Et(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Qr(e,"delete",t,void 0),r}has(e,t){const n=Reflect.has(e,t);return(!gs(t)||!hy.has(t))&&Fn(e,"has",t),n}ownKeys(e){return Fn(e,"iterate",Je(e)?"length":Co),Reflect.ownKeys(e)}}class IT extends dy{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const NT=new py,UT=new IT,OT=new py(!0);const ep=i=>i,ou=i=>Reflect.getPrototypeOf(i);function FT(i,e,t){return function(...n){const r=this.__v_raw,s=_t(r),o=Na(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=t?ep:e?tp:Bn;return!e&&Fn(s,"iterate",l?Qd:Co),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function au(i){return function(...e){return i==="delete"?!1:i==="clear"?void 0:this}}function BT(i,e){const t={get(r){const s=this.__v_raw,o=_t(s),a=_t(r);i||(Vs(r,a)&&Fn(o,"get",r),Fn(o,"get",a));const{has:l}=ou(o),c=e?ep:i?tp:Bn;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!i&&Fn(_t(r),"iterate",Co),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=_t(s),a=_t(r);return i||(Vs(r,a)&&Fn(o,"has",r),Fn(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=_t(a),c=e?ep:i?tp:Bn;return!i&&Fn(l,"iterate",Co),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Wn(t,i?{add:au("add"),set:au("set"),delete:au("delete"),clear:au("clear")}:{add(r){!e&&!Ji(r)&&!Vo(r)&&(r=_t(r));const s=_t(this);return ou(s).has.call(s,r)||(s.add(r),Qr(s,"add",r,r)),this},set(r,s){!e&&!Ji(s)&&!Vo(s)&&(s=_t(s));const o=_t(this),{has:a,get:l}=ou(o);let c=a.call(o,r);c||(r=_t(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Vs(s,u)&&Qr(o,"set",r,s):Qr(o,"add",r,s),this},delete(r){const s=_t(this),{has:o,get:a}=ou(s);let l=o.call(s,r);l||(r=_t(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Qr(s,"delete",r,void 0),c},clear(){const r=_t(this),s=r.size!==0,o=r.clear();return s&&Qr(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=FT(r,i,e)}),t}function eg(i,e){const t=BT(i,e);return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(Et(t,r)&&r in n?t:n,r,s)}const kT={get:eg(!1,!1)},zT={get:eg(!1,!0)},HT={get:eg(!0,!1)};const my=new WeakMap,gy=new WeakMap,_y=new WeakMap,VT=new WeakMap;function GT(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function WT(i){return i.__v_skip||!Object.isExtensible(i)?0:GT(gT(i))}function Kc(i){return Vo(i)?i:tg(i,!1,NT,kT,my)}function vy(i){return tg(i,!1,OT,zT,gy)}function xy(i){return tg(i,!0,UT,HT,_y)}function tg(i,e,t,n,r){if(!Ht(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const o=WT(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return r.set(i,a),a}function Gs(i){return Vo(i)?Gs(i.__v_raw):!!(i&&i.__v_isReactive)}function Vo(i){return!!(i&&i.__v_isReadonly)}function Ji(i){return!!(i&&i.__v_isShallow)}function ng(i){return i?!!i.__v_raw:!1}function _t(i){const e=i&&i.__v_raw;return e?_t(e):i}function ig(i){return!Et(i,"__v_skip")&&Object.isExtensible(i)&&Zx(i,"__v_skip",!0),i}const Bn=i=>Ht(i)?Kc(i):i,tp=i=>Ht(i)?xy(i):i;function Qt(i){return i?i.__v_isRef===!0:!1}function Hn(i){return Sy(i,!1)}function yy(i){return Sy(i,!0)}function Sy(i,e){return Qt(i)?i:new XT(i,e)}class XT{constructor(e,t){this.dep=new Qm,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:_t(e),this._value=t?e:Bn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,n=this.__v_isShallow||Ji(e)||Vo(e);e=n?e:_t(e),Vs(e,t)&&(this._rawValue=e,this._value=n?e:Bn(e),this.dep.trigger())}}function bn(i){return Qt(i)?i.value:i}function Ua(i){return Qe(i)?i():bn(i)}const jT={get:(i,e,t)=>e==="__v_raw"?i:bn(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return Qt(r)&&!Qt(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function My(i){return Gs(i)?i:new Proxy(i,jT)}function YT(i){const e=Je(i)?new Array(i.length):{};for(const t in i)e[t]=$T(i,t);return e}class qT{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return RT(_t(this._object),this._key)}}function $T(i,e,t){const n=i[e];return Qt(n)?n:new qT(i,e,t)}class KT{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Qm(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ac-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&Ot!==this)return oy(this,!0),!0}get value(){const e=this.dep.track();return cy(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ZT(i,e,t=!1){let n,r;return Qe(i)?n=i:(n=i.get,r=i.set),new KT(n,r,t)}const lu={},Rf=new WeakMap;let xo;function JT(i,e=!1,t=xo){if(t){let n=Rf.get(t);n||Rf.set(t,n=[]),n.push(i)}}function QT(i,e,t=Ft){const{immediate:n,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=v=>r?v:Ji(v)||r===!1||r===0?Is(v,1):Is(v);let u,f,h,d,g=!1,_=!1;if(Qt(i)?(f=()=>i.value,g=Ji(i)):Gs(i)?(f=()=>c(i),g=!0):Je(i)?(_=!0,g=i.some(v=>Gs(v)||Ji(v)),f=()=>i.map(v=>{if(Qt(v))return v.value;if(Gs(v))return c(v);if(Qe(v))return l?l(v,2):v()})):Qe(i)?e?f=l?()=>l(i,2):i:f=()=>{if(h){to();try{h()}finally{no()}}const v=xo;xo=u;try{return l?l(i,3,[d]):i(d)}finally{xo=v}}:f=Cr,e&&r){const v=f,b=r===!0?1/0:r;f=()=>Is(v(),b)}const m=$m(),p=()=>{u.stop(),m&&m.active&&jm(m.effects,u)};if(s&&e){const v=e;e=(...b)=>{v(...b),p()}}let x=_?new Array(i.length).fill(lu):lu;const y=v=>{if(!(!(u.flags&1)||!u.dirty&&!v))if(e){const b=u.run();if(r||g||(_?b.some((A,T)=>Vs(A,x[T])):Vs(b,x))){h&&h();const A=xo;xo=u;try{const T=[b,x===lu?void 0:_&&x[0]===lu?[]:x,d];l?l(e,3,T):e(...T),x=b}finally{xo=A}}}else u.run()};return a&&a(y),u=new ry(f),u.scheduler=o?()=>o(y,!1):y,d=v=>JT(v,!1,u),h=u.onStop=()=>{const v=Rf.get(u);if(v){if(l)l(v,4);else for(const b of v)b();Rf.delete(u)}},e?n?y(!0):x=u.run():o?o(y.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Is(i,e=1/0,t){if(e<=0||!Ht(i)||i.__v_skip||(t=t||new Set,t.has(i)))return i;if(t.add(i),e--,Qt(i))Is(i.value,e,t);else if(Je(i))for(let n=0;n<i.length;n++)Is(i[n],e,t);else if(Yx(i)||Na(i))i.forEach(n=>{Is(n,e,t)});else if(Kx(i)){for(const n in i)Is(i[n],e,t);for(const n of Object.getOwnPropertySymbols(i))Object.prototype.propertyIsEnumerable.call(i,n)&&Is(i[n],e,t)}return i}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zc(i,e,t,n){try{return n?i(...n):i()}catch(r){hh(r,e,t)}}function Ir(i,e,t,n){if(Qe(i)){const r=Zc(i,e,t,n);return r&&qx(r)&&r.catch(s=>{hh(s,e,t)}),r}if(Je(i)){const r=[];for(let s=0;s<i.length;s++)r.push(Ir(i[s],e,t,n));return r}}function hh(i,e,t,n=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ft;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](i,l,c)===!1)return}a=a.parent}if(s){to(),Zc(s,null,10,[i,l,c]),no();return}}eE(i,t,r,n,o)}function eE(i,e,t,n=!0,r=!1){if(r)throw i;console.error(i)}const si=[];let xr=-1;const Oa=[];let Rs=null,xa=0;const by=Promise.resolve();let Cf=null;function dh(i){const e=Cf||by;return i?e.then(this?i.bind(this):i):e}function tE(i){let e=xr+1,t=si.length;for(;e<t;){const n=e+t>>>1,r=si[n],s=Cc(r);s<i||s===i&&r.flags&2?e=n+1:t=n}return e}function rg(i){if(!(i.flags&1)){const e=Cc(i),t=si[si.length-1];!t||!(i.flags&2)&&e>=Cc(t)?si.push(i):si.splice(tE(e),0,i),i.flags|=1,Ty()}}function Ty(){Cf||(Cf=by.then(wy))}function nE(i){Je(i)?Oa.push(...i):Rs&&i.id===-1?Rs.splice(xa+1,0,i):i.flags&1||(Oa.push(i),i.flags|=1),Ty()}function w_(i,e,t=xr+1){for(;t<si.length;t++){const n=si[t];if(n&&n.flags&2){if(i&&n.id!==i.uid)continue;si.splice(t,1),t--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function Ey(i){if(Oa.length){const e=[...new Set(Oa)].sort((t,n)=>Cc(t)-Cc(n));if(Oa.length=0,Rs){Rs.push(...e);return}for(Rs=e,xa=0;xa<Rs.length;xa++){const t=Rs[xa];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Rs=null,xa=0}}const Cc=i=>i.id==null?i.flags&2?-1:1/0:i.id;function wy(i){try{for(xr=0;xr<si.length;xr++){const e=si[xr];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Zc(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;xr<si.length;xr++){const e=si[xr];e&&(e.flags&=-2)}xr=-1,si.length=0,Ey(),Cf=null,(si.length||Oa.length)&&wy()}}let Cn=null,Ay=null;function Pf(i){const e=Cn;return Cn=i,Ay=i&&i.type.__scopeId||null,e}function Jc(i,e=Cn,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&O_(-1);const s=Pf(e);let o;try{o=i(...r)}finally{Pf(s),n._d&&O_(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function oo(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(to(),Ir(l,t,8,[i.el,a,i,e]),no())}}const iE=Symbol("_vte"),rE=i=>i.__isTeleport;function sg(i,e){i.shapeFlag&6&&i.component?(i.transition=e,sg(i.component.subTree,e)):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}/*! #__NO_SIDE_EFFECTS__ */function jn(i,e){return Qe(i)?Wn({name:i.name},e,{setup:i}):i}function Ry(i){i.ids=[i.ids[0]+i.ids[2]+++"-",0,0]}function Df(i,e,t,n,r=!1){if(Je(i)){i.forEach((g,_)=>Df(g,e&&(Je(e)?e[_]:e),t,n,r));return}if(Fa(n)&&!r){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Df(i,e,t,n.component.subTree);return}const s=n.shapeFlag&4?hg(n.component):n.el,o=r?null:s,{i:a,r:l}=i,c=e&&e.r,u=a.refs===Ft?a.refs={}:a.refs,f=a.setupState,h=_t(f),d=f===Ft?()=>!1:g=>Et(h,g);if(c!=null&&c!==l&&(en(c)?(u[c]=null,d(c)&&(f[c]=null)):Qt(c)&&(c.value=null)),Qe(l))Zc(l,a,12,[o,u]);else{const g=en(l),_=Qt(l);if(g||_){const m=()=>{if(i.f){const p=g?d(l)?f[l]:u[l]:l.value;r?Je(p)&&jm(p,s):Je(p)?p.includes(s)||p.push(s):g?(u[l]=[s],d(l)&&(f[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else g?(u[l]=o,d(l)&&(f[l]=o)):_&&(l.value=o,i.k&&(u[i.k]=o))};o?(m.id=-1,wi(m,t)):m()}}}uh().requestIdleCallback;uh().cancelIdleCallback;const Fa=i=>!!i.type.__asyncLoader,Cy=i=>i.type.__isKeepAlive;function sE(i,e){Py(i,"a",e)}function oE(i,e){Py(i,"da",e)}function Py(i,e,t=Mn){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(ph(e,n,t),t){let r=t.parent;for(;r&&r.parent;)Cy(r.parent.vnode)&&aE(n,e,t,r),r=r.parent}}function aE(i,e,t,n){const r=ph(e,i,n,!0);og(()=>{jm(n[e],r)},t)}function ph(i,e,t=Mn,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...o)=>{to();const a=Qc(t),l=Ir(e,t,i,o);return a(),no(),l});return n?r.unshift(s):r.push(s),s}}const _s=i=>(e,t=Mn)=>{(!Lc||i==="sp")&&ph(i,(...n)=>e(...n),t)},Dy=_s("bm"),ki=_s("m"),lE=_s("bu"),cE=_s("u"),uE=_s("bum"),og=_s("um"),fE=_s("sp"),hE=_s("rtg"),dE=_s("rtc");function pE(i,e=Mn){ph("ec",i,e)}const mE="components",Ly=Symbol.for("v-ndc");function Iy(i){return en(i)?gE(mE,i,!1)||i:i||Ly}function gE(i,e,t=!0,n=!1){const r=Cn||Mn;if(r){const s=r.type;{const a=iw(s,!1);if(a&&(a===e||a===er(e)||a===ch(er(e))))return s}const o=A_(r[i]||s[i],e)||A_(r.appContext[i],e);return!o&&n?s:o}}function A_(i,e){return i&&(i[e]||i[er(e)]||i[ch(er(e))])}function Lf(i,e,t,n){let r;const s=t,o=Je(i);if(o||en(i)){const a=o&&Gs(i);let l=!1;a&&(l=!Ji(i),i=fh(i)),r=new Array(i.length);for(let c=0,u=i.length;c<u;c++)r[c]=e(l?Bn(i[c]):i[c],c,void 0,s)}else if(typeof i=="number"){r=new Array(i);for(let a=0;a<i;a++)r[a]=e(a+1,a,void 0,s)}else if(Ht(i))if(i[Symbol.iterator])r=Array.from(i,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(i);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(i[u],u,l,s)}}else r=[];return r}function _E(i,e,t={},n,r){if(Cn.ce||Cn.parent&&Fa(Cn.parent)&&Cn.parent.ce)return Wt(),Ja(Sn,null,[Zt("slot",t,n)],64);let s=i[e];s&&s._c&&(s._d=!1),Wt();const o=s&&Ny(s(t)),a=t.key||o&&o.key,l=Ja(Sn,{key:(a&&!gs(a)?a:`_${e}`)+""},o||[],o&&i._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function Ny(i){return i.some(e=>Dc(e)?!(e.type===Za||e.type===Sn&&!Ny(e.children)):!0)?i:null}const np=i=>i?nS(i)?hg(i):np(i.parent):null,rc=Wn(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>np(i.parent),$root:i=>np(i.root),$host:i=>i.ce,$emit:i=>i.emit,$options:i=>Oy(i),$forceUpdate:i=>i.f||(i.f=()=>{rg(i.update)}),$nextTick:i=>i.n||(i.n=dh.bind(i.proxy)),$watch:i=>kE.bind(i)}),Bh=(i,e)=>i!==Ft&&!i.__isScriptSetup&&Et(i,e),vE={get({_:i},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Bh(n,e))return o[e]=1,n[e];if(r!==Ft&&Et(r,e))return o[e]=2,r[e];if((c=i.propsOptions[0])&&Et(c,e))return o[e]=3,s[e];if(t!==Ft&&Et(t,e))return o[e]=4,t[e];ip&&(o[e]=0)}}const u=rc[e];let f,h;if(u)return e==="$attrs"&&Fn(i.attrs,"get",""),u(i);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==Ft&&Et(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Et(h,e))return h[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return Bh(r,e)?(r[e]=t,!0):n!==Ft&&Et(n,e)?(n[e]=t,!0):Et(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},o){let a;return!!t[o]||i!==Ft&&Et(i,o)||Bh(e,o)||(a=s[0])&&Et(a,o)||Et(n,o)||Et(rc,o)||Et(r.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:Et(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function R_(i){return Je(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let ip=!0;function xE(i){const e=Oy(i),t=i.proxy,n=i.ctx;ip=!1,e.beforeCreate&&C_(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:x,destroyed:y,unmounted:v,render:b,renderTracked:A,renderTriggered:T,errorCaptured:C,serverPrefetch:S,expose:M,inheritAttrs:N,components:B,directives:H,filters:q}=e;if(c&&yE(c,n,null),o)for(const j in o){const V=o[j];Qe(V)&&(n[j]=V.bind(t))}if(r){const j=r.call(t,t);Ht(j)&&(i.data=Kc(j))}if(ip=!0,s)for(const j in s){const V=s[j],he=Qe(V)?V.bind(t,t):Qe(V.get)?V.get.bind(t,t):Cr,U=!Qe(V)&&Qe(V.set)?V.set.bind(t):Cr,_e=oi({get:he,set:U});Object.defineProperty(n,j,{enumerable:!0,configurable:!0,get:()=>_e.value,set:Ce=>_e.value=Ce})}if(a)for(const j in a)Uy(a[j],n,t,j);if(l){const j=Qe(l)?l.call(t):l;Reflect.ownKeys(j).forEach(V=>{rf(V,j[V])})}u&&C_(u,i,"c");function W(j,V){Je(V)?V.forEach(he=>j(he.bind(t))):V&&j(V.bind(t))}if(W(Dy,f),W(ki,h),W(lE,d),W(cE,g),W(sE,_),W(oE,m),W(pE,C),W(dE,A),W(hE,T),W(uE,x),W(og,v),W(fE,S),Je(M))if(M.length){const j=i.exposed||(i.exposed={});M.forEach(V=>{Object.defineProperty(j,V,{get:()=>t[V],set:he=>t[V]=he})})}else i.exposed||(i.exposed={});b&&i.render===Cr&&(i.render=b),N!=null&&(i.inheritAttrs=N),B&&(i.components=B),H&&(i.directives=H),S&&Ry(i)}function yE(i,e,t=Cr){Je(i)&&(i=rp(i));for(const n in i){const r=i[n];let s;Ht(r)?"default"in r?s=fr(r.from||n,r.default,!0):s=fr(r.from||n):s=fr(r),Qt(s)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[n]=s}}function C_(i,e,t){Ir(Je(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function Uy(i,e,t,n){let r=n.includes(".")?$y(t,n):()=>t[n];if(en(i)){const s=e[i];Qe(s)&&Ws(r,s)}else if(Qe(i))Ws(r,i.bind(t));else if(Ht(i))if(Je(i))i.forEach(s=>Uy(s,e,t,n));else{const s=Qe(i.handler)?i.handler.bind(t):e[i.handler];Qe(s)&&Ws(r,s,i)}}function Oy(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>If(l,c,o,!0)),If(l,e,o)),Ht(e)&&s.set(e,l),l}function If(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&If(i,s,t,!0),r&&r.forEach(o=>If(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=SE[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const SE={data:P_,props:D_,emits:D_,methods:Gl,computed:Gl,beforeCreate:Zn,created:Zn,beforeMount:Zn,mounted:Zn,beforeUpdate:Zn,updated:Zn,beforeDestroy:Zn,beforeUnmount:Zn,destroyed:Zn,unmounted:Zn,activated:Zn,deactivated:Zn,errorCaptured:Zn,serverPrefetch:Zn,components:Gl,directives:Gl,watch:bE,provide:P_,inject:ME};function P_(i,e){return e?i?function(){return Wn(Qe(i)?i.call(this,this):i,Qe(e)?e.call(this,this):e)}:e:i}function ME(i,e){return Gl(rp(i),rp(e))}function rp(i){if(Je(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function Zn(i,e){return i?[...new Set([].concat(i,e))]:e}function Gl(i,e){return i?Wn(Object.create(null),i,e):e}function D_(i,e){return i?Je(i)&&Je(e)?[...new Set([...i,...e])]:Wn(Object.create(null),R_(i),R_(e??{})):e}function bE(i,e){if(!i)return e;if(!e)return i;const t=Wn(Object.create(null),i);for(const n in e)t[n]=Zn(i[n],e[n]);return t}function Fy(){return{app:null,config:{isNativeTag:pT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let TE=0;function EE(i,e){return function(n,r=null){Qe(n)||(n=Wn({},n)),r!=null&&!Ht(r)&&(r=null);const s=Fy(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:TE++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:sw,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Qe(u.install)?(o.add(u),u.install(c,...f)):Qe(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||Zt(n,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),i(d,u,h),l=!0,c._container=u,u.__vue_app__=c,hg(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Ir(a,c._instance,16),i(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Po;Po=c;try{return u()}finally{Po=f}}};return c}}let Po=null;function rf(i,e){if(Mn){let t=Mn.provides;const n=Mn.parent&&Mn.parent.provides;n===t&&(t=Mn.provides=Object.create(n)),t[i]=e}}function fr(i,e,t=!1){const n=Mn||Cn;if(n||Po){const r=Po?Po._context.provides:n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(r&&i in r)return r[i];if(arguments.length>1)return t&&Qe(e)?e.call(n&&n.proxy):e}}function ag(){return!!(Mn||Cn||Po)}const By={},ky=()=>Object.create(By),zy=i=>Object.getPrototypeOf(i)===By;function wE(i,e,t,n=!1){const r={},s=ky();i.propsDefaults=Object.create(null),Hy(i,e,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);t?i.props=n?r:vy(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function AE(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=_t(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(mh(i.emitsOptions,h))continue;const d=e[h];if(l)if(Et(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const g=er(h);r[g]=sp(l,a,g,d,i,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{Hy(i,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Et(e,f)&&((u=eo(f))===f||!Et(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=sp(l,a,f,void 0,i,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Et(e,f))&&(delete s[f],c=!0)}c&&Qr(i.attrs,"set","")}function Hy(i,e,t,n){const[r,s]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(tc(l))continue;const c=e[l];let u;r&&Et(r,u=er(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:mh(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=_t(t),c=a||Ft;for(let u=0;u<s.length;u++){const f=s[u];t[f]=sp(r,l,f,c[f],i,!Et(c,f))}}return o}function sp(i,e,t,n,r,s){const o=i[t];if(o!=null){const a=Et(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Qe(l)){const{propsDefaults:c}=r;if(t in c)n=c[t];else{const u=Qc(r);n=c[t]=l.call(null,e),u()}}else n=l;r.ce&&r.ce._setProp(t,n)}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===eo(t))&&(n=!0))}return n}const RE=new WeakMap;function Vy(i,e,t=!1){const n=t?RE:e.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!Qe(i)){const u=f=>{l=!0;const[h,d]=Vy(f,e,!0);Wn(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return Ht(i)&&n.set(i,Ia),Ia;if(Je(s))for(let u=0;u<s.length;u++){const f=er(s[u]);L_(f)&&(o[f]=Ft)}else if(s)for(const u in s){const f=er(u);if(L_(f)){const h=s[u],d=o[f]=Je(h)||Qe(h)?{type:h}:Wn({},h),g=d.type;let _=!1,m=!0;if(Je(g))for(let p=0;p<g.length;++p){const x=g[p],y=Qe(x)&&x.name;if(y==="Boolean"){_=!0;break}else y==="String"&&(m=!1)}else _=Qe(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||Et(d,"default"))&&a.push(f)}}const c=[o,a];return Ht(i)&&n.set(i,c),c}function L_(i){return i[0]!=="$"&&!tc(i)}const Gy=i=>i[0]==="_"||i==="$stable",lg=i=>Je(i)?i.map(br):[br(i)],CE=(i,e,t)=>{if(e._n)return e;const n=Jc((...r)=>lg(e(...r)),t);return n._c=!1,n},Wy=(i,e,t)=>{const n=i._ctx;for(const r in i){if(Gy(r))continue;const s=i[r];if(Qe(s))e[r]=CE(r,s,n);else if(s!=null){const o=lg(s);e[r]=()=>o}}},Xy=(i,e)=>{const t=lg(e);i.slots.default=()=>t},jy=(i,e,t)=>{for(const n in e)(t||n!=="_")&&(i[n]=e[n])},PE=(i,e,t)=>{const n=i.slots=ky();if(i.vnode.shapeFlag&32){const r=e._;r?(jy(n,e,t),t&&Zx(n,"_",r,!0)):Wy(e,n)}else e&&Xy(i,e)},DE=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,o=Ft;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:jy(r,e,t):(s=!e.$stable,Wy(e,r)),o=e}else e&&(Xy(i,e),o={default:1});if(s)for(const a in r)!Gy(a)&&o[a]==null&&delete r[a]},wi=jE;function LE(i){return IE(i)}function IE(i,e){const t=uh();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=Cr,insertStaticContent:g}=i,_=(I,D,w,re=null,J=null,L=null,ie=void 0,ue=null,ne=!!D.dynamicChildren)=>{if(I===D)return;I&&!Rl(I,D)&&(re=k(I),Ce(I,J,L,!0),I=null),D.patchFlag===-2&&(ne=!1,D.dynamicChildren=null);const{type:R,ref:E,shapeFlag:O}=D;switch(R){case gh:m(I,D,w,re);break;case Za:p(I,D,w,re);break;case sf:I==null&&x(D,w,re,ie);break;case Sn:B(I,D,w,re,J,L,ie,ue,ne);break;default:O&1?b(I,D,w,re,J,L,ie,ue,ne):O&6?H(I,D,w,re,J,L,ie,ue,ne):(O&64||O&128)&&R.process(I,D,w,re,J,L,ie,ue,ne,ae)}E!=null&&J&&Df(E,I&&I.ref,L,D||I,!D)},m=(I,D,w,re)=>{if(I==null)n(D.el=a(D.children),w,re);else{const J=D.el=I.el;D.children!==I.children&&c(J,D.children)}},p=(I,D,w,re)=>{I==null?n(D.el=l(D.children||""),w,re):D.el=I.el},x=(I,D,w,re)=>{[I.el,I.anchor]=g(I.children,D,w,re,I.el,I.anchor)},y=({el:I,anchor:D},w,re)=>{let J;for(;I&&I!==D;)J=h(I),n(I,w,re),I=J;n(D,w,re)},v=({el:I,anchor:D})=>{let w;for(;I&&I!==D;)w=h(I),r(I),I=w;r(D)},b=(I,D,w,re,J,L,ie,ue,ne)=>{D.type==="svg"?ie="svg":D.type==="math"&&(ie="mathml"),I==null?A(D,w,re,J,L,ie,ue,ne):S(I,D,J,L,ie,ue,ne)},A=(I,D,w,re,J,L,ie,ue)=>{let ne,R;const{props:E,shapeFlag:O,transition:Y,dirs:$}=I;if(ne=I.el=o(I.type,L,E&&E.is,E),O&8?u(ne,I.children):O&16&&C(I.children,ne,null,re,J,kh(I,L),ie,ue),$&&oo(I,null,re,"created"),T(ne,I,I.scopeId,ie,re),E){for(const pe in E)pe!=="value"&&!tc(pe)&&s(ne,pe,null,E[pe],L,re);"value"in E&&s(ne,"value",null,E.value,L),(R=E.onVnodeBeforeMount)&&vr(R,re,I)}$&&oo(I,null,re,"beforeMount");const Z=NE(J,Y);Z&&Y.beforeEnter(ne),n(ne,D,w),((R=E&&E.onVnodeMounted)||Z||$)&&wi(()=>{R&&vr(R,re,I),Z&&Y.enter(ne),$&&oo(I,null,re,"mounted")},J)},T=(I,D,w,re,J)=>{if(w&&d(I,w),re)for(let L=0;L<re.length;L++)d(I,re[L]);if(J){let L=J.subTree;if(D===L||Zy(L.type)&&(L.ssContent===D||L.ssFallback===D)){const ie=J.vnode;T(I,ie,ie.scopeId,ie.slotScopeIds,J.parent)}}},C=(I,D,w,re,J,L,ie,ue,ne=0)=>{for(let R=ne;R<I.length;R++){const E=I[R]=ue?Cs(I[R]):br(I[R]);_(null,E,D,w,re,J,L,ie,ue)}},S=(I,D,w,re,J,L,ie)=>{const ue=D.el=I.el;let{patchFlag:ne,dynamicChildren:R,dirs:E}=D;ne|=I.patchFlag&16;const O=I.props||Ft,Y=D.props||Ft;let $;if(w&&ao(w,!1),($=Y.onVnodeBeforeUpdate)&&vr($,w,D,I),E&&oo(D,I,w,"beforeUpdate"),w&&ao(w,!0),(O.innerHTML&&Y.innerHTML==null||O.textContent&&Y.textContent==null)&&u(ue,""),R?M(I.dynamicChildren,R,ue,w,re,kh(D,J),L):ie||V(I,D,ue,null,w,re,kh(D,J),L,!1),ne>0){if(ne&16)N(ue,O,Y,w,J);else if(ne&2&&O.class!==Y.class&&s(ue,"class",null,Y.class,J),ne&4&&s(ue,"style",O.style,Y.style,J),ne&8){const Z=D.dynamicProps;for(let pe=0;pe<Z.length;pe++){const fe=Z[pe],xe=O[fe],Be=Y[fe];(Be!==xe||fe==="value")&&s(ue,fe,xe,Be,J,w)}}ne&1&&I.children!==D.children&&u(ue,D.children)}else!ie&&R==null&&N(ue,O,Y,w,J);(($=Y.onVnodeUpdated)||E)&&wi(()=>{$&&vr($,w,D,I),E&&oo(D,I,w,"updated")},re)},M=(I,D,w,re,J,L,ie)=>{for(let ue=0;ue<D.length;ue++){const ne=I[ue],R=D[ue],E=ne.el&&(ne.type===Sn||!Rl(ne,R)||ne.shapeFlag&70)?f(ne.el):w;_(ne,R,E,null,re,J,L,ie,!0)}},N=(I,D,w,re,J)=>{if(D!==w){if(D!==Ft)for(const L in D)!tc(L)&&!(L in w)&&s(I,L,D[L],null,J,re);for(const L in w){if(tc(L))continue;const ie=w[L],ue=D[L];ie!==ue&&L!=="value"&&s(I,L,ue,ie,J,re)}"value"in w&&s(I,"value",D.value,w.value,J)}},B=(I,D,w,re,J,L,ie,ue,ne)=>{const R=D.el=I?I.el:a(""),E=D.anchor=I?I.anchor:a("");let{patchFlag:O,dynamicChildren:Y,slotScopeIds:$}=D;$&&(ue=ue?ue.concat($):$),I==null?(n(R,w,re),n(E,w,re),C(D.children||[],w,E,J,L,ie,ue,ne)):O>0&&O&64&&Y&&I.dynamicChildren?(M(I.dynamicChildren,Y,w,J,L,ie,ue),(D.key!=null||J&&D===J.subTree)&&Yy(I,D,!0)):V(I,D,w,E,J,L,ie,ue,ne)},H=(I,D,w,re,J,L,ie,ue,ne)=>{D.slotScopeIds=ue,I==null?D.shapeFlag&512?J.ctx.activate(D,w,re,ie,ne):q(D,w,re,J,L,ie,ne):Q(I,D,ne)},q=(I,D,w,re,J,L,ie)=>{const ue=I.component=JE(I,re,J);if(Cy(I)&&(ue.ctx.renderer=ae),QE(ue,!1,ie),ue.asyncDep){if(J&&J.registerDep(ue,W,ie),!I.el){const ne=ue.subTree=Zt(Za);p(null,ne,D,w)}}else W(ue,I,D,w,J,L,ie)},Q=(I,D,w)=>{const re=D.component=I.component;if(WE(I,D,w))if(re.asyncDep&&!re.asyncResolved){j(re,D,w);return}else re.next=D,re.update();else D.el=I.el,re.vnode=D},W=(I,D,w,re,J,L,ie)=>{const ue=()=>{if(I.isMounted){let{next:O,bu:Y,u:$,parent:Z,vnode:pe}=I;{const ve=qy(I);if(ve){O&&(O.el=pe.el,j(I,O,ie)),ve.asyncDep.then(()=>{I.isUnmounted||ue()});return}}let fe=O,xe;ao(I,!1),O?(O.el=pe.el,j(I,O,ie)):O=pe,Y&&Ih(Y),(xe=O.props&&O.props.onVnodeBeforeUpdate)&&vr(xe,Z,O,pe),ao(I,!0);const Be=N_(I),me=I.subTree;I.subTree=Be,_(me,Be,f(me.el),k(me),I,J,L),O.el=Be.el,fe===null&&XE(I,Be.el),$&&wi($,J),(xe=O.props&&O.props.onVnodeUpdated)&&wi(()=>vr(xe,Z,O,pe),J)}else{let O;const{el:Y,props:$}=D,{bm:Z,m:pe,parent:fe,root:xe,type:Be}=I,me=Fa(D);ao(I,!1),Z&&Ih(Z),!me&&(O=$&&$.onVnodeBeforeMount)&&vr(O,fe,D),ao(I,!0);{xe.ce&&xe.ce._injectChildStyle(Be);const ve=I.subTree=N_(I);_(null,ve,w,re,I,J,L),D.el=ve.el}if(pe&&wi(pe,J),!me&&(O=$&&$.onVnodeMounted)){const ve=D;wi(()=>vr(O,fe,ve),J)}(D.shapeFlag&256||fe&&Fa(fe.vnode)&&fe.vnode.shapeFlag&256)&&I.a&&wi(I.a,J),I.isMounted=!0,D=w=re=null}};I.scope.on();const ne=I.effect=new ry(ue);I.scope.off();const R=I.update=ne.run.bind(ne),E=I.job=ne.runIfDirty.bind(ne);E.i=I,E.id=I.uid,ne.scheduler=()=>rg(E),ao(I,!0),R()},j=(I,D,w)=>{D.component=I;const re=I.vnode.props;I.vnode=D,I.next=null,AE(I,D.props,re,w),DE(I,D.children,w),to(),w_(I),no()},V=(I,D,w,re,J,L,ie,ue,ne=!1)=>{const R=I&&I.children,E=I?I.shapeFlag:0,O=D.children,{patchFlag:Y,shapeFlag:$}=D;if(Y>0){if(Y&128){U(R,O,w,re,J,L,ie,ue,ne);return}else if(Y&256){he(R,O,w,re,J,L,ie,ue,ne);return}}$&8?(E&16&&ye(R,J,L),O!==R&&u(w,O)):E&16?$&16?U(R,O,w,re,J,L,ie,ue,ne):ye(R,J,L,!0):(E&8&&u(w,""),$&16&&C(O,w,re,J,L,ie,ue,ne))},he=(I,D,w,re,J,L,ie,ue,ne)=>{I=I||Ia,D=D||Ia;const R=I.length,E=D.length,O=Math.min(R,E);let Y;for(Y=0;Y<O;Y++){const $=D[Y]=ne?Cs(D[Y]):br(D[Y]);_(I[Y],$,w,null,J,L,ie,ue,ne)}R>E?ye(I,J,L,!0,!1,O):C(D,w,re,J,L,ie,ue,ne,O)},U=(I,D,w,re,J,L,ie,ue,ne)=>{let R=0;const E=D.length;let O=I.length-1,Y=E-1;for(;R<=O&&R<=Y;){const $=I[R],Z=D[R]=ne?Cs(D[R]):br(D[R]);if(Rl($,Z))_($,Z,w,null,J,L,ie,ue,ne);else break;R++}for(;R<=O&&R<=Y;){const $=I[O],Z=D[Y]=ne?Cs(D[Y]):br(D[Y]);if(Rl($,Z))_($,Z,w,null,J,L,ie,ue,ne);else break;O--,Y--}if(R>O){if(R<=Y){const $=Y+1,Z=$<E?D[$].el:re;for(;R<=Y;)_(null,D[R]=ne?Cs(D[R]):br(D[R]),w,Z,J,L,ie,ue,ne),R++}}else if(R>Y)for(;R<=O;)Ce(I[R],J,L,!0),R++;else{const $=R,Z=R,pe=new Map;for(R=Z;R<=Y;R++){const Se=D[R]=ne?Cs(D[R]):br(D[R]);Se.key!=null&&pe.set(Se.key,R)}let fe,xe=0;const Be=Y-Z+1;let me=!1,ve=0;const Ue=new Array(Be);for(R=0;R<Be;R++)Ue[R]=0;for(R=$;R<=O;R++){const Se=I[R];if(xe>=Be){Ce(Se,J,L,!0);continue}let We;if(Se.key!=null)We=pe.get(Se.key);else for(fe=Z;fe<=Y;fe++)if(Ue[fe-Z]===0&&Rl(Se,D[fe])){We=fe;break}We===void 0?Ce(Se,J,L,!0):(Ue[We-Z]=R+1,We>=ve?ve=We:me=!0,_(Se,D[We],w,null,J,L,ie,ue,ne),xe++)}const ke=me?UE(Ue):Ia;for(fe=ke.length-1,R=Be-1;R>=0;R--){const Se=Z+R,We=D[Se],Xe=Se+1<E?D[Se+1].el:re;Ue[R]===0?_(null,We,w,Xe,J,L,ie,ue,ne):me&&(fe<0||R!==ke[fe]?_e(We,w,Xe,2):fe--)}}},_e=(I,D,w,re,J=null)=>{const{el:L,type:ie,transition:ue,children:ne,shapeFlag:R}=I;if(R&6){_e(I.component.subTree,D,w,re);return}if(R&128){I.suspense.move(D,w,re);return}if(R&64){ie.move(I,D,w,ae);return}if(ie===Sn){n(L,D,w);for(let O=0;O<ne.length;O++)_e(ne[O],D,w,re);n(I.anchor,D,w);return}if(ie===sf){y(I,D,w);return}if(re!==2&&R&1&&ue)if(re===0)ue.beforeEnter(L),n(L,D,w),wi(()=>ue.enter(L),J);else{const{leave:O,delayLeave:Y,afterLeave:$}=ue,Z=()=>n(L,D,w),pe=()=>{O(L,()=>{Z(),$&&$()})};Y?Y(L,Z,pe):pe()}else n(L,D,w)},Ce=(I,D,w,re=!1,J=!1)=>{const{type:L,props:ie,ref:ue,children:ne,dynamicChildren:R,shapeFlag:E,patchFlag:O,dirs:Y,cacheIndex:$}=I;if(O===-2&&(J=!1),ue!=null&&Df(ue,null,w,I,!0),$!=null&&(D.renderCache[$]=void 0),E&256){D.ctx.deactivate(I);return}const Z=E&1&&Y,pe=!Fa(I);let fe;if(pe&&(fe=ie&&ie.onVnodeBeforeUnmount)&&vr(fe,D,I),E&6)de(I.component,w,re);else{if(E&128){I.suspense.unmount(w,re);return}Z&&oo(I,null,D,"beforeUnmount"),E&64?I.type.remove(I,D,w,ae,re):R&&!R.hasOnce&&(L!==Sn||O>0&&O&64)?ye(R,D,w,!1,!0):(L===Sn&&O&384||!J&&E&16)&&ye(ne,D,w),re&&He(I)}(pe&&(fe=ie&&ie.onVnodeUnmounted)||Z)&&wi(()=>{fe&&vr(fe,D,I),Z&&oo(I,null,D,"unmounted")},w)},He=I=>{const{type:D,el:w,anchor:re,transition:J}=I;if(D===Sn){te(w,re);return}if(D===sf){v(I);return}const L=()=>{r(w),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(I.shapeFlag&1&&J&&!J.persisted){const{leave:ie,delayLeave:ue}=J,ne=()=>ie(w,L);ue?ue(I.el,L,ne):ne()}else L()},te=(I,D)=>{let w;for(;I!==D;)w=h(I),r(I),I=w;r(D)},de=(I,D,w)=>{const{bum:re,scope:J,job:L,subTree:ie,um:ue,m:ne,a:R}=I;I_(ne),I_(R),re&&Ih(re),J.stop(),L&&(L.flags|=8,Ce(ie,I,D,w)),ue&&wi(ue,D),wi(()=>{I.isUnmounted=!0},D),D&&D.pendingBranch&&!D.isUnmounted&&I.asyncDep&&!I.asyncResolved&&I.suspenseId===D.pendingId&&(D.deps--,D.deps===0&&D.resolve())},ye=(I,D,w,re=!1,J=!1,L=0)=>{for(let ie=L;ie<I.length;ie++)Ce(I[ie],D,w,re,J)},k=I=>{if(I.shapeFlag&6)return k(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const D=h(I.anchor||I.el),w=D&&D[iE];return w?h(w):D};let oe=!1;const le=(I,D,w)=>{I==null?D._vnode&&Ce(D._vnode,null,null,!0):_(D._vnode||null,I,D,null,null,null,w),D._vnode=I,oe||(oe=!0,w_(),Ey(),oe=!1)},ae={p:_,um:Ce,m:_e,r:He,mt:q,mc:C,pc:V,pbc:M,n:k,o:i};return{render:le,hydrate:void 0,createApp:EE(le)}}function kh({type:i,props:e},t){return t==="svg"&&i==="foreignObject"||t==="mathml"&&i==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ao({effect:i,job:e},t){t?(i.flags|=32,e.flags|=4):(i.flags&=-33,e.flags&=-5)}function NE(i,e){return(!i||i&&!i.pendingBranch)&&e&&!e.persisted}function Yy(i,e,t=!1){const n=i.children,r=e.children;if(Je(n)&&Je(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Cs(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Yy(o,a)),a.type===gh&&(a.el=o.el)}}function UE(i){const e=i.slice(),t=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,i[t[a]]<c?s=a+1:o=a;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function qy(i){const e=i.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:qy(e)}function I_(i){if(i)for(let e=0;e<i.length;e++)i[e].flags|=8}const OE=Symbol.for("v-scx"),FE=()=>fr(OE);function BE(i,e){return cg(i,null,e)}function Ws(i,e,t){return cg(i,e,t)}function cg(i,e,t=Ft){const{immediate:n,deep:r,flush:s,once:o}=t,a=Wn({},t),l=e&&n||!e&&s!=="post";let c;if(Lc){if(s==="sync"){const d=FE();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Cr,d.resume=Cr,d.pause=Cr,d}}const u=Mn;a.call=(d,g,_)=>Ir(d,u,g,_);let f=!1;s==="post"?a.scheduler=d=>{wi(d,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(d,g)=>{g?d():rg(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=QT(i,e,a);return Lc&&(c?c.push(h):l&&h()),h}function kE(i,e,t){const n=this.proxy,r=en(i)?i.includes(".")?$y(n,i):()=>n[i]:i.bind(n,n);let s;Qe(e)?s=e:(s=e.handler,t=e);const o=Qc(this),a=cg(r,s.bind(n),t);return o(),a}function $y(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}const zE=(i,e)=>e==="modelValue"||e==="model-value"?i.modelModifiers:i[`${e}Modifiers`]||i[`${er(e)}Modifiers`]||i[`${eo(e)}Modifiers`];function HE(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||Ft;let r=t;const s=e.startsWith("update:"),o=s&&zE(n,e.slice(7));o&&(o.trim&&(r=t.map(u=>en(u)?u.trim():u)),o.number&&(r=t.map(xT)));let a,l=n[a=Lh(e)]||n[a=Lh(er(e))];!l&&s&&(l=n[a=Lh(eo(e))]),l&&Ir(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,Ir(c,i,6,r)}}function Ky(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!Qe(i)){const l=c=>{const u=Ky(c,e,!0);u&&(a=!0,Wn(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(Ht(i)&&n.set(i,null),null):(Je(s)?s.forEach(l=>o[l]=null):Wn(o,s),Ht(i)&&n.set(i,o),o)}function mh(i,e){return!i||!oh(e)?!1:(e=e.slice(2).replace(/Once$/,""),Et(i,e[0].toLowerCase()+e.slice(1))||Et(i,eo(e))||Et(i,e))}function N_(i){const{type:e,vnode:t,proxy:n,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:g,inheritAttrs:_}=i,m=Pf(i);let p,x;try{if(t.shapeFlag&4){const v=r||n,b=v;p=br(c.call(b,v,u,f,d,h,g)),x=a}else{const v=e;p=br(v.length>1?v(f,{attrs:a,slots:o,emit:l}):v(f,null)),x=e.props?a:VE(a)}}catch(v){sc.length=0,hh(v,i,1),p=Zt(Za)}let y=p;if(x&&_!==!1){const v=Object.keys(x),{shapeFlag:b}=y;v.length&&b&7&&(s&&v.some(Xm)&&(x=GE(x,s)),y=Qa(y,x,!1,!0))}return t.dirs&&(y=Qa(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&sg(y,t.transition),p=y,Pf(m),p}const VE=i=>{let e;for(const t in i)(t==="class"||t==="style"||oh(t))&&((e||(e={}))[t]=i[t]);return e},GE=(i,e)=>{const t={};for(const n in i)(!Xm(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function WE(i,e,t){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?U_(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==n[h]&&!mh(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?U_(n,o,c):!0:!!o;return!1}function U_(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!mh(t,s))return!0}return!1}function XE({vnode:i,parent:e},t){for(;e;){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===i&&(n.el=i.el),n===i)(i=e.vnode).el=t,e=e.parent;else break}}const Zy=i=>i.__isSuspense;function jE(i,e){e&&e.pendingBranch?Je(i)?e.effects.push(...i):e.effects.push(i):nE(i)}const Sn=Symbol.for("v-fgt"),gh=Symbol.for("v-txt"),Za=Symbol.for("v-cmt"),sf=Symbol.for("v-stc"),sc=[];let Ii=null;function Wt(i=!1){sc.push(Ii=i?null:[])}function YE(){sc.pop(),Ii=sc[sc.length-1]||null}let Pc=1;function O_(i,e=!1){Pc+=i,i<0&&Ii&&e&&(Ii.hasOnce=!0)}function Jy(i){return i.dynamicChildren=Pc>0?Ii||Ia:null,YE(),Pc>0&&Ii&&Ii.push(i),i}function Dn(i,e,t,n,r,s){return Jy(je(i,e,t,n,r,s,!0))}function Ja(i,e,t,n,r){return Jy(Zt(i,e,t,n,r,!0))}function Dc(i){return i?i.__v_isVNode===!0:!1}function Rl(i,e){return i.type===e.type&&i.key===e.key}const Qy=({key:i})=>i??null,of=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?en(i)||Qt(i)||Qe(i)?{i:Cn,r:i,k:e,f:!!t}:i:null);function je(i,e=null,t=null,n=0,r=null,s=i===Sn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Qy(e),ref:e&&of(e),scopeId:Ay,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Cn};return a?(ug(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=en(t)?8:16),Pc>0&&!o&&Ii&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Ii.push(l),l}const Zt=qE;function qE(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===Ly)&&(i=Za),Dc(i)){const a=Qa(i,e,!0);return t&&ug(a,t),Pc>0&&!s&&Ii&&(a.shapeFlag&6?Ii[Ii.indexOf(i)]=a:Ii.push(a)),a.patchFlag=-2,a}if(rw(i)&&(i=i.__vccOpts),e){e=$E(e);let{class:a,style:l}=e;a&&!en(a)&&(e.class=fs(a)),Ht(l)&&(ng(l)&&!Je(l)&&(l=Wn({},l)),e.style=qm(l))}const o=en(i)?1:Zy(i)?128:rE(i)?64:Ht(i)?4:Qe(i)?2:0;return je(i,e,t,n,r,o,s,!0)}function $E(i){return i?ng(i)||zy(i)?Wn({},i):i:null}function Qa(i,e,t=!1,n=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=i,c=e?tS(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:i.type,props:c,key:c&&Qy(c),ref:e&&e.ref?t&&s?Je(s)?s.concat(of(e)):[s,of(e)]:of(e):s,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetStart:i.targetStart,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==Sn?o===-1?16:o|16:o,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:l,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Qa(i.ssContent),ssFallback:i.ssFallback&&Qa(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce};return l&&n&&sg(u,l.clone(u)),u}function _h(i=" ",e=0){return Zt(gh,null,i,e)}function eS(i,e){const t=Zt(sf,null,i);return t.staticCount=e,t}function br(i){return i==null||typeof i=="boolean"?Zt(Za):Je(i)?Zt(Sn,null,i.slice()):Dc(i)?Cs(i):Zt(gh,null,String(i))}function Cs(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:Qa(i)}function ug(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Je(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),ug(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!zy(e)?e._ctx=Cn:r===3&&Cn&&(Cn.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Qe(e)?(e={default:e,_ctx:Cn},t=32):(e=String(e),n&64?(t=16,e=[_h(e)]):t=8);i.children=e,i.shapeFlag|=t}function tS(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=fs([e.class,n.class]));else if(r==="style")e.style=qm([e.style,n.style]);else if(oh(r)){const s=e[r],o=n[r];o&&s!==o&&!(Je(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=n[r])}return e}function vr(i,e,t,n=null){Ir(i,e,7,[t,n])}const KE=Fy();let ZE=0;function JE(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||KE,s={uid:ZE++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ty(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vy(n,r),emitsOptions:Ky(n,r),emit:null,emitted:null,propsDefaults:Ft,inheritAttrs:n.inheritAttrs,ctx:Ft,data:Ft,props:Ft,attrs:Ft,slots:Ft,refs:Ft,setupState:Ft,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=HE.bind(null,s),i.ce&&i.ce(s),s}let Mn=null;const fg=()=>Mn||Cn;let Nf,op;{const i=uh(),e=(t,n)=>{let r;return(r=i[t])||(r=i[t]=[]),r.push(n),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Nf=e("__VUE_INSTANCE_SETTERS__",t=>Mn=t),op=e("__VUE_SSR_SETTERS__",t=>Lc=t)}const Qc=i=>{const e=Mn;return Nf(i),i.scope.on(),()=>{i.scope.off(),Nf(e)}},F_=()=>{Mn&&Mn.scope.off(),Nf(null)};function nS(i){return i.vnode.shapeFlag&4}let Lc=!1;function QE(i,e=!1,t=!1){e&&op(e);const{props:n,children:r}=i.vnode,s=nS(i);wE(i,n,s,e),PE(i,r,t);const o=s?ew(i,e):void 0;return e&&op(!1),o}function ew(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=new Proxy(i.ctx,vE);const{setup:n}=t;if(n){to();const r=i.setupContext=n.length>1?nw(i):null,s=Qc(i),o=Zc(n,i,0,[i.props,r]),a=qx(o);if(no(),s(),(a||i.sp)&&!Fa(i)&&Ry(i),a){if(o.then(F_,F_),e)return o.then(l=>{B_(i,l)}).catch(l=>{hh(l,i,0)});i.asyncDep=o}else B_(i,o)}else iS(i)}function B_(i,e,t){Qe(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:Ht(e)&&(i.setupState=My(e)),iS(i)}function iS(i,e,t){const n=i.type;i.render||(i.render=n.render||Cr);{const r=Qc(i);to();try{xE(i)}finally{no(),r()}}}const tw={get(i,e){return Fn(i,"get",""),i[e]}};function nw(i){const e=t=>{i.exposed=t||{}};return{attrs:new Proxy(i.attrs,tw),slots:i.slots,emit:i.emit,expose:e}}function hg(i){return i.exposed?i.exposeProxy||(i.exposeProxy=new Proxy(My(ig(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in rc)return rc[t](i)},has(e,t){return t in e||t in rc}})):i.proxy}function iw(i,e=!0){return Qe(i)?i.displayName||i.name:i.name||e&&i.__name}function rw(i){return Qe(i)&&"__vccOpts"in i}const oi=(i,e)=>ZT(i,e,Lc);function rS(i,e,t){const n=arguments.length;return n===2?Ht(e)&&!Je(e)?Dc(e)?Zt(i,null,[e]):Zt(i,e):Zt(i,null,e):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&Dc(t)&&(t=[t]),Zt(i,e,t))}const sw="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ap;const k_=typeof window<"u"&&window.trustedTypes;if(k_)try{ap=k_.createPolicy("vue",{createHTML:i=>i})}catch{}const sS=ap?i=>ap.createHTML(i):i=>i,ow="http://www.w3.org/2000/svg",aw="http://www.w3.org/1998/Math/MathML",qr=typeof document<"u"?document:null,z_=qr&&qr.createElement("template"),lw={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e==="svg"?qr.createElementNS(ow,i):e==="mathml"?qr.createElementNS(aw,i):t?qr.createElement(i,{is:t}):qr.createElement(i);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>qr.createTextNode(i),createComment:i=>qr.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>qr.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{z_.innerHTML=sS(n==="svg"?`<svg>${i}</svg>`:n==="mathml"?`<math>${i}</math>`:i);const a=z_.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},cw=Symbol("_vtc");function uw(i,e,t){const n=i[cw];n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}const H_=Symbol("_vod"),fw=Symbol("_vsh"),hw=Symbol(""),dw=/(^|;)\s*display\s*:/;function pw(i,e,t){const n=i.style,r=en(t);let s=!1;if(t&&!r){if(e)if(en(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&af(n,a,"")}else for(const o in e)t[o]==null&&af(n,o,"");for(const o in t)o==="display"&&(s=!0),af(n,o,t[o])}else if(r){if(e!==t){const o=n[hw];o&&(t+=";"+o),n.cssText=t,s=dw.test(t)}}else e&&i.removeAttribute("style");H_ in i&&(i[H_]=s?n.display:"",i[fw]&&(n.display="none"))}const V_=/\s*!important$/;function af(i,e,t){if(Je(t))t.forEach(n=>af(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=mw(i,e);V_.test(t)?i.setProperty(eo(n),t.replace(V_,""),"important"):i[n]=t}}const G_=["Webkit","Moz","ms"],zh={};function mw(i,e){const t=zh[e];if(t)return t;let n=er(e);if(n!=="filter"&&n in i)return zh[e]=n;n=ch(n);for(let r=0;r<G_.length;r++){const s=G_[r]+n;if(s in i)return zh[e]=s}return e}const W_="http://www.w3.org/1999/xlink";function X_(i,e,t,n,r,s=ET(e)){n&&e.startsWith("xlink:")?t==null?i.removeAttributeNS(W_,e.slice(6,e.length)):i.setAttributeNS(W_,e,t):t==null||s&&!Jx(t)?i.removeAttribute(e):i.setAttribute(e,s?"":gs(t)?String(t):t)}function j_(i,e,t,n,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(i[e]=e==="innerHTML"?sS(t):t);return}const s=i.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?i.getAttribute("value")||"":i.value,l=t==null?i.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in i))&&(i.value=l),t==null&&i.removeAttribute(e),i._value=t;return}let o=!1;if(t===""||t==null){const a=typeof i[e];a==="boolean"?t=Jx(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{i[e]=t}catch{}o&&i.removeAttribute(r||e)}function gw(i,e,t,n){i.addEventListener(e,t,n)}function _w(i,e,t,n){i.removeEventListener(e,t,n)}const Y_=Symbol("_vei");function vw(i,e,t,n,r=null){const s=i[Y_]||(i[Y_]={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=xw(e);if(n){const c=s[e]=Mw(n,r);gw(i,a,c,l)}else o&&(_w(i,a,o,l),s[e]=void 0)}}const q_=/(?:Once|Passive|Capture)$/;function xw(i){let e;if(q_.test(i)){e={};let n;for(;n=i.match(q_);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):eo(i.slice(2)),e]}let Hh=0;const yw=Promise.resolve(),Sw=()=>Hh||(yw.then(()=>Hh=0),Hh=Date.now());function Mw(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;Ir(bw(n,t.value),e,5,[n])};return t.value=i,t.attached=Sw(),t}function bw(i,e){if(Je(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const $_=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,Tw=(i,e,t,n,r,s)=>{const o=r==="svg";e==="class"?uw(i,n,o):e==="style"?pw(i,t,n):oh(e)?Xm(e)||vw(i,e,t,n,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ew(i,e,n,o))?(j_(i,e,n),!i.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&X_(i,e,n,o,s,e!=="value")):i._isVueCE&&(/[A-Z]/.test(e)||!en(n))?j_(i,er(e),n,s,e):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),X_(i,e,n,o))};function Ew(i,e,t,n){if(n)return!!(e==="innerHTML"||e==="textContent"||e in i&&$_(e)&&Qe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=i.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return $_(e)&&en(t)?!1:e in i}const ww={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Aw=(i,e)=>{const t=i._withKeys||(i._withKeys={}),n=e.join(".");return t[n]||(t[n]=r=>{if(!("key"in r))return;const s=eo(r.key);if(e.some(o=>o===s||ww[o]===s))return i(r)})},Rw=Wn({patchProp:Tw},lw);let K_;function Cw(){return K_||(K_=LE(Rw))}const Pw=(...i)=>{const e=Cw().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=Lw(n);if(!r)return;const s=e._component;!Qe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Dw(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Dw(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function Lw(i){return en(i)?document.querySelector(i):i}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let oS;const vh=i=>oS=i,aS=Symbol();function lp(i){return i&&typeof i=="object"&&Object.prototype.toString.call(i)==="[object Object]"&&typeof i.toJSON!="function"}var oc;(function(i){i.direct="direct",i.patchObject="patch object",i.patchFunction="patch function"})(oc||(oc={}));function Iw(){const i=ny(!0),e=i.run(()=>Hn({}));let t=[],n=[];const r=ig({install(s){vh(r),r._a=s,s.provide(aS,r),s.config.globalProperties.$pinia=r,n.forEach(o=>t.push(o)),n=[]},use(s){return this._a?t.push(s):n.push(s),this},_p:t,_a:null,_e:i,_s:new Map,state:e});return r}const lS=()=>{};function Z_(i,e,t,n=lS){i.push(e);const r=()=>{const s=i.indexOf(e);s>-1&&(i.splice(s,1),n())};return!t&&$m()&&iy(r),r}function Qo(i,...e){i.slice().forEach(t=>{t(...e)})}const Nw=i=>i(),J_=Symbol(),Vh=Symbol();function cp(i,e){i instanceof Map&&e instanceof Map?e.forEach((t,n)=>i.set(n,t)):i instanceof Set&&e instanceof Set&&e.forEach(i.add,i);for(const t in e){if(!e.hasOwnProperty(t))continue;const n=e[t],r=i[t];lp(r)&&lp(n)&&i.hasOwnProperty(t)&&!Qt(n)&&!Gs(n)?i[t]=cp(r,n):i[t]=n}return i}const Uw=Symbol();function Ow(i){return!lp(i)||!i.hasOwnProperty(Uw)}const{assign:ws}=Object;function Fw(i){return!!(Qt(i)&&i.effect)}function Bw(i,e,t,n){const{state:r,actions:s,getters:o}=e,a=t.state.value[i];let l;function c(){a||(t.state.value[i]=r?r():{});const u=YT(t.state.value[i]);return ws(u,s,Object.keys(o||{}).reduce((f,h)=>(f[h]=ig(oi(()=>{vh(t);const d=t._s.get(i);return o[h].call(d,d)})),f),{}))}return l=cS(i,c,e,t,n,!0),l}function cS(i,e,t={},n,r,s){let o;const a=ws({actions:{}},t),l={deep:!0};let c,u,f=[],h=[],d;const g=n.state.value[i];!s&&!g&&(n.state.value[i]={}),Hn({});let _;function m(C){let S;c=u=!1,typeof C=="function"?(C(n.state.value[i]),S={type:oc.patchFunction,storeId:i,events:d}):(cp(n.state.value[i],C),S={type:oc.patchObject,payload:C,storeId:i,events:d});const M=_=Symbol();dh().then(()=>{_===M&&(c=!0)}),u=!0,Qo(f,S,n.state.value[i])}const p=s?function(){const{state:S}=t,M=S?S():{};this.$patch(N=>{ws(N,M)})}:lS;function x(){o.stop(),f=[],h=[],n._s.delete(i)}const y=(C,S="")=>{if(J_ in C)return C[Vh]=S,C;const M=function(){vh(n);const N=Array.from(arguments),B=[],H=[];function q(j){B.push(j)}function Q(j){H.push(j)}Qo(h,{args:N,name:M[Vh],store:b,after:q,onError:Q});let W;try{W=C.apply(this&&this.$id===i?this:b,N)}catch(j){throw Qo(H,j),j}return W instanceof Promise?W.then(j=>(Qo(B,j),j)).catch(j=>(Qo(H,j),Promise.reject(j))):(Qo(B,W),W)};return M[J_]=!0,M[Vh]=S,M},v={_p:n,$id:i,$onAction:Z_.bind(null,h),$patch:m,$reset:p,$subscribe(C,S={}){const M=Z_(f,C,S.detached,()=>N()),N=o.run(()=>Ws(()=>n.state.value[i],B=>{(S.flush==="sync"?u:c)&&C({storeId:i,type:oc.direct,events:d},B)},ws({},l,S)));return M},$dispose:x},b=Kc(v);n._s.set(i,b);const T=(n._a&&n._a.runWithContext||Nw)(()=>n._e.run(()=>(o=ny()).run(()=>e({action:y}))));for(const C in T){const S=T[C];if(Qt(S)&&!Fw(S)||Gs(S))s||(g&&Ow(S)&&(Qt(S)?S.value=g[C]:cp(S,g[C])),n.state.value[i][C]=S);else if(typeof S=="function"){const M=y(S,C);T[C]=M,a.actions[C]=S}}return ws(b,T),ws(_t(b),T),Object.defineProperty(b,"$state",{get:()=>n.state.value[i],set:C=>{m(S=>{ws(S,C)})}}),n._p.forEach(C=>{ws(b,o.run(()=>C({store:b,app:n._a,pinia:n,options:a})))}),g&&s&&t.hydrate&&t.hydrate(b.$state,g),c=!0,u=!0,b}/*! #__NO_SIDE_EFFECTS__ */function kw(i,e,t){let n,r;const s=typeof e=="function";n=i,r=s?t:e;function o(a,l){const c=ag();return a=a||(c?fr(aS,null):null),a&&vh(a),a=oS,a._s.has(n)||(s?cS(n,e,r,a):Bw(n,r,a)),a._s.get(n)}return o.$id=n,o}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ya=typeof document<"u";function uS(i){return typeof i=="object"||"displayName"in i||"props"in i||"__vccOpts"in i}function zw(i){return i.__esModule||i[Symbol.toStringTag]==="Module"||i.default&&uS(i.default)}const bt=Object.assign;function Gh(i,e){const t={};for(const n in e){const r=e[n];t[n]=pr(r)?r.map(i):i(r)}return t}const ac=()=>{},pr=Array.isArray,fS=/#/g,Hw=/&/g,Vw=/\//g,Gw=/=/g,Ww=/\?/g,hS=/\+/g,Xw=/%5B/g,jw=/%5D/g,dS=/%5E/g,Yw=/%60/g,pS=/%7B/g,qw=/%7C/g,mS=/%7D/g,$w=/%20/g;function dg(i){return encodeURI(""+i).replace(qw,"|").replace(Xw,"[").replace(jw,"]")}function Kw(i){return dg(i).replace(pS,"{").replace(mS,"}").replace(dS,"^")}function up(i){return dg(i).replace(hS,"%2B").replace($w,"+").replace(fS,"%23").replace(Hw,"%26").replace(Yw,"`").replace(pS,"{").replace(mS,"}").replace(dS,"^")}function Zw(i){return up(i).replace(Gw,"%3D")}function Jw(i){return dg(i).replace(fS,"%23").replace(Ww,"%3F")}function Qw(i){return i==null?"":Jw(i).replace(Vw,"%2F")}function Ic(i){try{return decodeURIComponent(""+i)}catch{}return""+i}const e1=/\/$/,t1=i=>i.replace(e1,"");function Wh(i,e,t="/"){let n,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(n=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=i(s)),a>-1&&(n=n||e.slice(0,a),o=e.slice(a,e.length)),n=s1(n??e,t),{fullPath:n+(s&&"?")+s+o,path:n,query:r,hash:Ic(o)}}function n1(i,e){const t=e.query?i(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Q_(i,e){return!e||!i.toLowerCase().startsWith(e.toLowerCase())?i:i.slice(e.length)||"/"}function i1(i,e,t){const n=e.matched.length-1,r=t.matched.length-1;return n>-1&&n===r&&el(e.matched[n],t.matched[r])&&gS(e.params,t.params)&&i(e.query)===i(t.query)&&e.hash===t.hash}function el(i,e){return(i.aliasOf||i)===(e.aliasOf||e)}function gS(i,e){if(Object.keys(i).length!==Object.keys(e).length)return!1;for(const t in i)if(!r1(i[t],e[t]))return!1;return!0}function r1(i,e){return pr(i)?e0(i,e):pr(e)?e0(e,i):i===e}function e0(i,e){return pr(e)?i.length===e.length&&i.every((t,n)=>t===e[n]):i.length===1&&i[0]===e}function s1(i,e){if(i.startsWith("/"))return i;if(!i)return e;const t=e.split("/"),n=i.split("/"),r=n[n.length-1];(r===".."||r===".")&&n.push("");let s=t.length-1,o,a;for(o=0;o<n.length;o++)if(a=n[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+n.slice(o).join("/")}const vs={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Nc;(function(i){i.pop="pop",i.push="push"})(Nc||(Nc={}));var lc;(function(i){i.back="back",i.forward="forward",i.unknown=""})(lc||(lc={}));function o1(i){if(!i)if(ya){const e=document.querySelector("base");i=e&&e.getAttribute("href")||"/",i=i.replace(/^\w+:\/\/[^\/]+/,"")}else i="/";return i[0]!=="/"&&i[0]!=="#"&&(i="/"+i),t1(i)}const a1=/^[^#]+#/;function l1(i,e){return i.replace(a1,"#")+e}function c1(i,e){const t=document.documentElement.getBoundingClientRect(),n=i.getBoundingClientRect();return{behavior:e.behavior,left:n.left-t.left-(e.left||0),top:n.top-t.top-(e.top||0)}}const xh=()=>({left:window.scrollX,top:window.scrollY});function u1(i){let e;if("el"in i){const t=i.el,n=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?n?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=c1(r,i)}else e=i;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function t0(i,e){return(history.state?history.state.position-e:-1)+i}const fp=new Map;function f1(i,e){fp.set(i,e)}function h1(i){const e=fp.get(i);return fp.delete(i),e}let d1=()=>location.protocol+"//"+location.host;function _S(i,e){const{pathname:t,search:n,hash:r}=e,s=i.indexOf("#");if(s>-1){let a=r.includes(i.slice(s))?i.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Q_(l,"")}return Q_(t,i)+n+r}function p1(i,e,t,n){let r=[],s=[],o=null;const a=({state:h})=>{const d=_S(i,location),g=t.value,_=e.value;let m=0;if(h){if(t.value=d,e.value=h,o&&o===g){o=null;return}m=_?h.position-_.position:0}else n(d);r.forEach(p=>{p(t.value,g,{delta:m,type:Nc.pop,direction:m?m>0?lc.forward:lc.back:lc.unknown})})};function l(){o=t.value}function c(h){r.push(h);const d=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(d),d}function u(){const{history:h}=window;h.state&&h.replaceState(bt({},h.state,{scroll:xh()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function n0(i,e,t,n=!1,r=!1){return{back:i,current:e,forward:t,replaced:n,position:window.history.length,scroll:r?xh():null}}function m1(i){const{history:e,location:t}=window,n={value:_S(i,t)},r={value:e.state};r.value||s(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=i.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?i:i.slice(f))+l:d1()+i+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(d){console.error(d),t[u?"replace":"assign"](h)}}function o(l,c){const u=bt({},e.state,n0(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),n.value=l}function a(l,c){const u=bt({},r.value,e.state,{forward:l,scroll:xh()});s(u.current,u,!0);const f=bt({},n0(n.value,l,null),{position:u.position+1},c);s(l,f,!1),n.value=l}return{location:n,state:r,push:a,replace:o}}function g1(i){i=o1(i);const e=m1(i),t=p1(i,e.state,e.location,e.replace);function n(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=bt({location:"",base:i,go:n,createHref:l1.bind(null,i)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function _1(i){return typeof i=="string"||i&&typeof i=="object"}function vS(i){return typeof i=="string"||typeof i=="symbol"}const xS=Symbol("");var i0;(function(i){i[i.aborted=4]="aborted",i[i.cancelled=8]="cancelled",i[i.duplicated=16]="duplicated"})(i0||(i0={}));function tl(i,e){return bt(new Error,{type:i,[xS]:!0},e)}function zr(i,e){return i instanceof Error&&xS in i&&(e==null||!!(i.type&e))}const r0="[^/]+?",v1={sensitive:!1,strict:!1,start:!0,end:!0},x1=/[.+*?^${}()[\]/\\]/g;function y1(i,e){const t=bt({},v1,e),n=[];let r=t.start?"^":"";const s=[];for(const c of i){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(x1,"\\$&"),d+=40;else if(h.type===1){const{value:g,repeatable:_,optional:m,regexp:p}=h;s.push({name:g,repeatable:_,optional:m});const x=p||r0;if(x!==r0){d+=10;try{new RegExp(`(${x})`)}catch(v){throw new Error(`Invalid custom RegExp for param "${g}" (${x}): `+v.message)}}let y=_?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;f||(y=m&&c.length<2?`(?:/${y})`:"/"+y),m&&(y+="?"),r+=y,d+=20,m&&(d+=-8),_&&(d+=-20),x===".*"&&(d+=-50)}u.push(d)}n.push(u)}if(t.strict&&t.end){const c=n.length-1;n[c][n[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",g=s[h-1];f[g.name]=d&&g.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of i){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:_,optional:m}=d,p=g in c?c[g]:"";if(pr(p)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const x=pr(p)?p.join("/"):p;if(!x)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=x}}return u||"/"}return{re:o,score:n,keys:s,parse:a,stringify:l}}function S1(i,e){let t=0;for(;t<i.length&&t<e.length;){const n=e[t]-i[t];if(n)return n;t++}return i.length<e.length?i.length===1&&i[0]===80?-1:1:i.length>e.length?e.length===1&&e[0]===80?1:-1:0}function yS(i,e){let t=0;const n=i.score,r=e.score;for(;t<n.length&&t<r.length;){const s=S1(n[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-n.length)===1){if(s0(n))return 1;if(s0(r))return-1}return r.length-n.length}function s0(i){const e=i[i.length-1];return i.length>0&&e[e.length-1]<0}const M1={type:0,value:""},b1=/[a-zA-Z0-9_]/;function T1(i){if(!i)return[[]];if(i==="/")return[[M1]];if(!i.startsWith("/"))throw new Error(`Invalid path "${i}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,n=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<i.length;){if(l=i[a++],l==="\\"&&t!==2){n=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=n;break;case 1:l==="("?t=2:b1.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function E1(i,e,t){const n=y1(T1(i.path),t),r=bt(n,{record:i,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function w1(i,e){const t=[],n=new Map;e=c0({strict:!1,end:!0,sensitive:!1},e);function r(f){return n.get(f)}function s(f,h,d){const g=!d,_=a0(f);_.aliasOf=d&&d.record;const m=c0(e,f),p=[_];if("alias"in f){const v=typeof f.alias=="string"?[f.alias]:f.alias;for(const b of v)p.push(a0(bt({},_,{components:d?d.record.components:_.components,path:b,aliasOf:d?d.record:_})))}let x,y;for(const v of p){const{path:b}=v;if(h&&b[0]!=="/"){const A=h.record.path,T=A[A.length-1]==="/"?"":"/";v.path=h.record.path+(b&&T+b)}if(x=E1(v,h,m),d?d.alias.push(x):(y=y||x,y!==x&&y.alias.push(x),g&&f.name&&!l0(x)&&o(f.name)),SS(x)&&l(x),_.children){const A=_.children;for(let T=0;T<A.length;T++)s(A[T],x,d&&d.children[T])}d=d||x}return y?()=>{o(y)}:ac}function o(f){if(vS(f)){const h=n.get(f);h&&(n.delete(f),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(f);h>-1&&(t.splice(h,1),f.record.name&&n.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function l(f){const h=C1(f,t);t.splice(h,0,f),f.record.name&&!l0(f)&&n.set(f.record.name,f)}function c(f,h){let d,g={},_,m;if("name"in f&&f.name){if(d=n.get(f.name),!d)throw tl(1,{location:f});m=d.record.name,g=bt(o0(h.params,d.keys.filter(y=>!y.optional).concat(d.parent?d.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),f.params&&o0(f.params,d.keys.map(y=>y.name))),_=d.stringify(g)}else if(f.path!=null)_=f.path,d=t.find(y=>y.re.test(_)),d&&(g=d.parse(_),m=d.record.name);else{if(d=h.name?n.get(h.name):t.find(y=>y.re.test(h.path)),!d)throw tl(1,{location:f,currentLocation:h});m=d.record.name,g=bt({},h.params,f.params),_=d.stringify(g)}const p=[];let x=d;for(;x;)p.unshift(x.record),x=x.parent;return{name:m,path:_,params:g,matched:p,meta:R1(p)}}i.forEach(f=>s(f));function u(){t.length=0,n.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function o0(i,e){const t={};for(const n of e)n in i&&(t[n]=i[n]);return t}function a0(i){const e={path:i.path,redirect:i.redirect,name:i.name,meta:i.meta||{},aliasOf:i.aliasOf,beforeEnter:i.beforeEnter,props:A1(i),children:i.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in i?i.components||null:i.component&&{default:i.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function A1(i){const e={},t=i.props||!1;if("component"in i)e.default=t;else for(const n in i.components)e[n]=typeof t=="object"?t[n]:t;return e}function l0(i){for(;i;){if(i.record.aliasOf)return!0;i=i.parent}return!1}function R1(i){return i.reduce((e,t)=>bt(e,t.meta),{})}function c0(i,e){const t={};for(const n in i)t[n]=n in e?e[n]:i[n];return t}function C1(i,e){let t=0,n=e.length;for(;t!==n;){const s=t+n>>1;yS(i,e[s])<0?n=s:t=s+1}const r=P1(i);return r&&(n=e.lastIndexOf(r,n-1)),n}function P1(i){let e=i;for(;e=e.parent;)if(SS(e)&&yS(i,e)===0)return e}function SS({record:i}){return!!(i.name||i.components&&Object.keys(i.components).length||i.redirect)}function D1(i){const e={};if(i===""||i==="?")return e;const n=(i[0]==="?"?i.slice(1):i).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(hS," "),o=s.indexOf("="),a=Ic(o<0?s:s.slice(0,o)),l=o<0?null:Ic(s.slice(o+1));if(a in e){let c=e[a];pr(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function u0(i){let e="";for(let t in i){const n=i[t];if(t=Zw(t),n==null){n!==void 0&&(e+=(e.length?"&":"")+t);continue}(pr(n)?n.map(s=>s&&up(s)):[n&&up(n)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function L1(i){const e={};for(const t in i){const n=i[t];n!==void 0&&(e[t]=pr(n)?n.map(r=>r==null?null:""+r):n==null?n:""+n)}return e}const I1=Symbol(""),f0=Symbol(""),pg=Symbol(""),MS=Symbol(""),hp=Symbol("");function Cl(){let i=[];function e(n){return i.push(n),()=>{const r=i.indexOf(n);r>-1&&i.splice(r,1)}}function t(){i=[]}return{add:e,list:()=>i.slice(),reset:t}}function Ps(i,e,t,n,r,s=o=>o()){const o=n&&(n.enterCallbacks[r]=n.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(tl(4,{from:t,to:e})):h instanceof Error?l(h):_1(h)?l(tl(2,{from:e,to:h})):(o&&n.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},u=s(()=>i.call(n&&n.instances[r],e,t,c));let f=Promise.resolve(u);i.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function Xh(i,e,t,n,r=s=>s()){const s=[];for(const o of i)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(uS(l)){const u=(l.__vccOpts||l)[e];u&&s.push(Ps(u,t,n,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=zw(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const d=(f.__vccOpts||f)[e];return d&&Ps(d,t,n,o,a,r)()}))}}return s}function h0(i){const e=fr(pg),t=fr(MS),n=oi(()=>{const l=bn(i.to);return e.resolve(l)}),r=oi(()=>{const{matched:l}=n.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(el.bind(null,u));if(h>-1)return h;const d=d0(l[c-2]);return c>1&&d0(u)===d&&f[f.length-1].path!==d?f.findIndex(el.bind(null,l[c-2])):h}),s=oi(()=>r.value>-1&&B1(t.params,n.value.params)),o=oi(()=>r.value>-1&&r.value===t.matched.length-1&&gS(t.params,n.value.params));function a(l={}){if(F1(l)){const c=e[bn(i.replace)?"replace":"push"](bn(i.to)).catch(ac);return i.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:n,href:oi(()=>n.value.href),isActive:s,isExactActive:o,navigate:a}}function N1(i){return i.length===1?i[0]:i}const U1=jn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:h0,setup(i,{slots:e}){const t=Kc(h0(i)),{options:n}=fr(pg),r=oi(()=>({[p0(i.activeClass,n.linkActiveClass,"router-link-active")]:t.isActive,[p0(i.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&N1(e.default(t));return i.custom?s:rS("a",{"aria-current":t.isExactActive?i.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),O1=U1;function F1(i){if(!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)&&!i.defaultPrevented&&!(i.button!==void 0&&i.button!==0)){if(i.currentTarget&&i.currentTarget.getAttribute){const e=i.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return i.preventDefault&&i.preventDefault(),!0}}function B1(i,e){for(const t in e){const n=e[t],r=i[t];if(typeof n=="string"){if(n!==r)return!1}else if(!pr(r)||r.length!==n.length||n.some((s,o)=>s!==r[o]))return!1}return!0}function d0(i){return i?i.aliasOf?i.aliasOf.path:i.path:""}const p0=(i,e,t)=>i??e??t,k1=jn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(i,{attrs:e,slots:t}){const n=fr(hp),r=oi(()=>i.route||n.value),s=fr(f0,0),o=oi(()=>{let c=bn(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=oi(()=>r.value.matched[o.value]);rf(f0,oi(()=>o.value+1)),rf(I1,a),rf(hp,r);const l=Hn();return Ws(()=>[l.value,a.value,i.name],([c,u,f],[h,d,g])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!el(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=r.value,u=i.name,f=a.value,h=f&&f.components[u];if(!h)return m0(t.default,{Component:h,route:c});const d=f.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=rS(h,bt({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return m0(t.default,{Component:m,route:c})||m}}});function m0(i,e){if(!i)return null;const t=i(e);return t.length===1?t[0]:t}const bS=k1;function z1(i){const e=w1(i.routes,i),t=i.parseQuery||D1,n=i.stringifyQuery||u0,r=i.history,s=Cl(),o=Cl(),a=Cl(),l=yy(vs);let c=vs;ya&&i.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Gh.bind(null,k=>""+k),f=Gh.bind(null,Qw),h=Gh.bind(null,Ic);function d(k,oe){let le,ae;return vS(k)?(le=e.getRecordMatcher(k),ae=oe):ae=k,e.addRoute(ae,le)}function g(k){const oe=e.getRecordMatcher(k);oe&&e.removeRoute(oe)}function _(){return e.getRoutes().map(k=>k.record)}function m(k){return!!e.getRecordMatcher(k)}function p(k,oe){if(oe=bt({},oe||l.value),typeof k=="string"){const w=Wh(t,k,oe.path),re=e.resolve({path:w.path},oe),J=r.createHref(w.fullPath);return bt(w,re,{params:h(re.params),hash:Ic(w.hash),redirectedFrom:void 0,href:J})}let le;if(k.path!=null)le=bt({},k,{path:Wh(t,k.path,oe.path).path});else{const w=bt({},k.params);for(const re in w)w[re]==null&&delete w[re];le=bt({},k,{params:f(w)}),oe.params=f(oe.params)}const ae=e.resolve(le,oe),Le=k.hash||"";ae.params=u(h(ae.params));const I=n1(n,bt({},k,{hash:Kw(Le),path:ae.path})),D=r.createHref(I);return bt({fullPath:I,hash:Le,query:n===u0?L1(k.query):k.query||{}},ae,{redirectedFrom:void 0,href:D})}function x(k){return typeof k=="string"?Wh(t,k,l.value.path):bt({},k)}function y(k,oe){if(c!==k)return tl(8,{from:oe,to:k})}function v(k){return T(k)}function b(k){return v(bt(x(k),{replace:!0}))}function A(k){const oe=k.matched[k.matched.length-1];if(oe&&oe.redirect){const{redirect:le}=oe;let ae=typeof le=="function"?le(k):le;return typeof ae=="string"&&(ae=ae.includes("?")||ae.includes("#")?ae=x(ae):{path:ae},ae.params={}),bt({query:k.query,hash:k.hash,params:ae.path!=null?{}:k.params},ae)}}function T(k,oe){const le=c=p(k),ae=l.value,Le=k.state,I=k.force,D=k.replace===!0,w=A(le);if(w)return T(bt(x(w),{state:typeof w=="object"?bt({},Le,w.state):Le,force:I,replace:D}),oe||le);const re=le;re.redirectedFrom=oe;let J;return!I&&i1(n,ae,le)&&(J=tl(16,{to:re,from:ae}),_e(ae,ae,!0,!1)),(J?Promise.resolve(J):M(re,ae)).catch(L=>zr(L)?zr(L,2)?L:U(L):V(L,re,ae)).then(L=>{if(L){if(zr(L,2))return T(bt({replace:D},x(L.to),{state:typeof L.to=="object"?bt({},Le,L.to.state):Le,force:I}),oe||re)}else L=B(re,ae,!0,D,Le);return N(re,ae,L),L})}function C(k,oe){const le=y(k,oe);return le?Promise.reject(le):Promise.resolve()}function S(k){const oe=te.values().next().value;return oe&&typeof oe.runWithContext=="function"?oe.runWithContext(k):k()}function M(k,oe){let le;const[ae,Le,I]=H1(k,oe);le=Xh(ae.reverse(),"beforeRouteLeave",k,oe);for(const w of ae)w.leaveGuards.forEach(re=>{le.push(Ps(re,k,oe))});const D=C.bind(null,k,oe);return le.push(D),ye(le).then(()=>{le=[];for(const w of s.list())le.push(Ps(w,k,oe));return le.push(D),ye(le)}).then(()=>{le=Xh(Le,"beforeRouteUpdate",k,oe);for(const w of Le)w.updateGuards.forEach(re=>{le.push(Ps(re,k,oe))});return le.push(D),ye(le)}).then(()=>{le=[];for(const w of I)if(w.beforeEnter)if(pr(w.beforeEnter))for(const re of w.beforeEnter)le.push(Ps(re,k,oe));else le.push(Ps(w.beforeEnter,k,oe));return le.push(D),ye(le)}).then(()=>(k.matched.forEach(w=>w.enterCallbacks={}),le=Xh(I,"beforeRouteEnter",k,oe,S),le.push(D),ye(le))).then(()=>{le=[];for(const w of o.list())le.push(Ps(w,k,oe));return le.push(D),ye(le)}).catch(w=>zr(w,8)?w:Promise.reject(w))}function N(k,oe,le){a.list().forEach(ae=>S(()=>ae(k,oe,le)))}function B(k,oe,le,ae,Le){const I=y(k,oe);if(I)return I;const D=oe===vs,w=ya?history.state:{};le&&(ae||D?r.replace(k.fullPath,bt({scroll:D&&w&&w.scroll},Le)):r.push(k.fullPath,Le)),l.value=k,_e(k,oe,le,D),U()}let H;function q(){H||(H=r.listen((k,oe,le)=>{if(!de.listening)return;const ae=p(k),Le=A(ae);if(Le){T(bt(Le,{replace:!0,force:!0}),ae).catch(ac);return}c=ae;const I=l.value;ya&&f1(t0(I.fullPath,le.delta),xh()),M(ae,I).catch(D=>zr(D,12)?D:zr(D,2)?(T(bt(x(D.to),{force:!0}),ae).then(w=>{zr(w,20)&&!le.delta&&le.type===Nc.pop&&r.go(-1,!1)}).catch(ac),Promise.reject()):(le.delta&&r.go(-le.delta,!1),V(D,ae,I))).then(D=>{D=D||B(ae,I,!1),D&&(le.delta&&!zr(D,8)?r.go(-le.delta,!1):le.type===Nc.pop&&zr(D,20)&&r.go(-1,!1)),N(ae,I,D)}).catch(ac)}))}let Q=Cl(),W=Cl(),j;function V(k,oe,le){U(k);const ae=W.list();return ae.length?ae.forEach(Le=>Le(k,oe,le)):console.error(k),Promise.reject(k)}function he(){return j&&l.value!==vs?Promise.resolve():new Promise((k,oe)=>{Q.add([k,oe])})}function U(k){return j||(j=!k,q(),Q.list().forEach(([oe,le])=>k?le(k):oe()),Q.reset()),k}function _e(k,oe,le,ae){const{scrollBehavior:Le}=i;if(!ya||!Le)return Promise.resolve();const I=!le&&h1(t0(k.fullPath,0))||(ae||!le)&&history.state&&history.state.scroll||null;return dh().then(()=>Le(k,oe,I)).then(D=>D&&u1(D)).catch(D=>V(D,k,oe))}const Ce=k=>r.go(k);let He;const te=new Set,de={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:_,resolve:p,options:i,push:v,replace:b,go:Ce,back:()=>Ce(-1),forward:()=>Ce(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:W.add,isReady:he,install(k){const oe=this;k.component("RouterLink",O1),k.component("RouterView",bS),k.config.globalProperties.$router=oe,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>bn(l)}),ya&&!He&&l.value===vs&&(He=!0,v(r.location).catch(Le=>{}));const le={};for(const Le in vs)Object.defineProperty(le,Le,{get:()=>l.value[Le],enumerable:!0});k.provide(pg,oe),k.provide(MS,vy(le)),k.provide(hp,l);const ae=k.unmount;te.add(k),k.unmount=function(){te.delete(k),te.size<1&&(c=vs,H&&H(),H=null,l.value=vs,He=!1,j=!1),ae()}}};function ye(k){return k.reduce((oe,le)=>oe.then(()=>S(le)),Promise.resolve())}return de}function H1(i,e){const t=[],n=[],r=[],s=Math.max(e.matched.length,i.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(i.matched.find(c=>el(c,a))?n.push(a):t.push(a));const l=i.matched[o];l&&(e.matched.find(c=>el(c,l))||r.push(l))}return[t,n,r]}const eu=(i,e)=>{const t=i.__vccOpts||i;for(const[n,r]of e)t[n]=r;return t},V1={};function G1(i,e){return Wt(),Dn("div",null,e[0]||(e[0]=[eS('<svg width="245" height="327" viewBox="0 0 245 327" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M124.649 288.937C35.0401 224.32 14.7804 99.2946 79.3978 9.68556C144.015 -79.9235 269.04 -100.183 358.649 -35.5658C448.258 29.0516 468.518 154.077 403.901 243.686C339.283 333.295 214.258 353.555 124.649 288.937Z" fill="url(#paint0_linear_4980_800)"></path><path d="M92.75 234.997C-6.70156 163.282 -29.1866 24.5246 42.5283 -74.927C114.243 -174.379 253.001 -196.864 352.453 -125.149C451.904 -53.4338 474.389 85.324 402.674 184.776C330.959 284.227 192.202 306.712 92.75 234.997Z" fill="#D1D1C7"></path><defs><linearGradient id="paint0_linear_4980_800" x1="424.09" y1="215.688" x2="35.1898" y2="-64.7502" gradientUnits="userSpaceOnUse"><stop stop-color="#AFAF9D"></stop><stop offset="1" stop-color="#AFAF9D" stop-opacity="0"></stop></linearGradient></defs></svg>',1)]))}const W1=eu(V1,[["render",G1]]);function $r(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function TS(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Oi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},nl={duration:.5,overwrite:!1,delay:0},mg,Ln,zt,Pr=1e8,Vn=1/Pr,dp=Math.PI*2,X1=dp/4,j1=0,ES=Math.sqrt,Y1=Math.cos,q1=Math.sin,En=function(e){return typeof e=="string"},qt=function(e){return typeof e=="function"},hs=function(e){return typeof e=="number"},gg=function(e){return typeof e>"u"},Nr=function(e){return typeof e=="object"},gi=function(e){return e!==!1},_g=function(){return typeof window<"u"},cu=function(e){return qt(e)||En(e)},wS=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Gn=Array.isArray,pp=/(?:-?\.?\d|\.)+/gi,AS=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,wa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,jh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,RS=/[+-]=-?[.\d]+/,CS=/[^,'"\[\]\s]+/gi,$1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Vt,Sr,mp,vg,Fi={},Uf={},PS,DS=function(e){return(Uf=il(e,Fi))&&Si},xg=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Uc=function(e,t){return!t&&console.warn(e)},LS=function(e,t){return e&&(Fi[e]=t)&&Uf&&(Uf[e]=t)||Fi},Oc=function(){return 0},K1={suppressEvents:!0,isStart:!0,kill:!1},lf={suppressEvents:!0,kill:!1},Z1={suppressEvents:!0},yg={},Xs=[],gp={},IS,Ci={},Yh={},g0=30,cf=[],Sg="",Mg=function(e){var t=e[0],n,r;if(Nr(t)||qt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=cf.length;r--&&!cf[r].targetTest(t););n=cf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new iM(e[r],n)))||e.splice(r,1);return e},Do=function(e){return e._gsap||Mg($i(e))[0]._gsap},NS=function(e,t,n){return(n=e[t])&&qt(n)?e[t]():gg(n)&&e.getAttribute&&e.getAttribute(t)||n},_i=function(e,t){return(e=e.split(",")).forEach(t)||e},Kt=function(e){return Math.round(e*1e5)/1e5||0},on=function(e){return Math.round(e*1e7)/1e7||0},Ba=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},J1=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Of=function(){var e=Xs.length,t=Xs.slice(0),n,r;for(gp={},Xs.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},US=function(e,t,n,r){Xs.length&&!Ln&&Of(),e.render(t,n,Ln&&t<0&&(e._initted||e._startAt)),Xs.length&&!Ln&&Of()},OS=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(CS).length<2?t:En(e)?e.trim():e},FS=function(e){return e},Bi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Q1=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},il=function(e,t){for(var n in t)e[n]=t[n];return e},_0=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Nr(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Ff=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},cc=function(e){var t=e.parent||Vt,n=e.keyframes?Q1(Gn(e.keyframes)):Bi;if(gi(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},eA=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},BS=function(e,t,n,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},yh=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},$s=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Lo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},tA=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},_p=function(e,t,n,r){return e._startAt&&(Ln?e._startAt.revert(lf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},nA=function i(e){return!e||e._ts&&i(e.parent)},v0=function(e){return e._repeat?rl(e._tTime,e=e.duration()+e._rDelay)*e:0},rl=function(e,t){var n=Math.floor(e=on(e/t));return e&&n===e?n-1:n},Bf=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Sh=function(e){return e._end=on(e._start+(e._tDur/Math.abs(e._ts||e._rts||Vn)||0))},Mh=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=on(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Sh(e),n._dirty||Lo(n,e)),e},kS=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Bf(e.rawTime(),t),(!t._dur||tu(0,t.totalDuration(),n)-t._tTime>Vn)&&t.render(n,!0)),Lo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},Tr=function(e,t,n,r){return t.parent&&$s(t),t._start=on((hs(n)?n:n||e!==Vt?Wi(e,n,t):e._time)+t._delay),t._end=on(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),BS(e,t,"_first","_last",e._sort?"_start":0),vp(t)||(e._recent=t),r||kS(e,t),e._ts<0&&Mh(e,e._tTime),e},zS=function(e,t){return(Fi.ScrollTrigger||xg("scrollTrigger",t))&&Fi.ScrollTrigger.create(t,e)},HS=function(e,t,n,r,s){if(Tg(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Ln&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&IS!==Di.frame)return Xs.push(e),e._lazy=[s,r],1},iA=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},vp=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},rA=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&iA(e)&&!(!e._initted&&vp(e))||(e._ts<0||e._dp._ts<0)&&!vp(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=tu(0,e._tDur,t),u=rl(l,a),e._yoyo&&u&1&&(o=1-o),u!==rl(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Ln||r||e._zTime===Vn||!t&&e._zTime){if(!e._initted&&HS(e,t,r,n,l))return;for(f=e._zTime,e._zTime=t||(n?Vn:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&_p(e,t,n,!0),e._onUpdate&&!n&&Ni(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Ni(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&$s(e,1),!n&&!Ln&&(Ni(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},sA=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},sl=function(e,t,n,r){var s=e._repeat,o=on(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:on(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Mh(e,e._tTime=e._tDur*a),e.parent&&Sh(e),n||Lo(e.parent,e),e},x0=function(e){return e instanceof ai?Lo(e):sl(e,e._dur)},oA={_start:0,endTime:Oc,totalDuration:Oc},Wi=function i(e,t,n){var r=e.labels,s=e._recent||oA,o=e.duration()>=Pr?s.endTime(!1):e._dur,a,l,c;return En(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Gn(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},uc=function(e,t,n){var r=hs(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=gi(l.vars.inherit)&&l.parent;o.immediateRender=gi(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new sn(t[0],o,t[s+1])},io=function(e,t){return e||e===0?t(e):t},tu=function(e,t,n){return n<e?e:n>t?t:n},kn=function(e,t){return!En(e)||!(t=$1.exec(e))?"":t[1]},aA=function(e,t,n){return io(n,function(r){return tu(e,t,r)})},xp=[].slice,VS=function(e,t){return e&&Nr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Nr(e[0]))&&!e.nodeType&&e!==Sr},lA=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return En(r)&&!t||VS(r,1)?(s=n).push.apply(s,$i(r)):n.push(r)})||n},$i=function(e,t,n){return zt&&!t&&zt.selector?zt.selector(e):En(e)&&!n&&(mp||!ol())?xp.call((t||vg).querySelectorAll(e),0):Gn(e)?lA(e,n):VS(e)?xp.call(e,0):e?[e]:[]},yp=function(e){return e=$i(e)[0]||Uc("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return $i(t,n.querySelectorAll?n:n===e?Uc("Invalid scope")||vg.createElement("div"):e)}},GS=function(e){return e.sort(function(){return .5-Math.random()})},WS=function(e){if(qt(e))return e;var t=Nr(e)?e:{each:e},n=Io(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,f=r;return En(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(h,d,g){var _=(g||t).length,m=o[_],p,x,y,v,b,A,T,C,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,Pr])[1],!S){for(T=-1e8;T<(T=g[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(m=o[_]=[],p=l?Math.min(S,_)*u-.5:r%S,x=S===Pr?0:l?_*f/S-.5:r/S|0,T=0,C=Pr,A=0;A<_;A++)y=A%S-p,v=x-(A/S|0),m[A]=b=c?Math.abs(c==="y"?v:y):ES(y*y+v*v),b>T&&(T=b),b<C&&(C=b);r==="random"&&GS(m),m.max=T-C,m.min=C,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=kn(t.amount||t.each)||0,n=n&&_<0?eM(n):n}return _=(m[h]-m.min)/m.max||0,on(m.b+(n?n(_):_)*m.v)+m.u}},Sp=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=on(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(hs(n)?0:kn(n))}},XS=function(e,t){var n=Gn(e),r,s;return!n&&Nr(e)&&(r=n=e.radius||Pr,e.values?(e=$i(e.values),(s=!hs(e[0]))&&(r*=r)):e=Sp(e.increment)),io(t,n?qt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Pr,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-a,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!r||c<=r?e[u]:o,s||u===o||hs(o)?u:u+kn(o)}:Sp(e))},jS=function(e,t,n,r){return io(Gn(e)?!t:n===!0?!!(n=0):!r,function(){return Gn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},cA=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},uA=function(e,t){return function(n){return e(parseFloat(n))+(t||kn(n))}},fA=function(e,t,n){return qS(e,t,0,1,n)},YS=function(e,t,n){return io(n,function(r){return e[~~t(r)]})},hA=function i(e,t,n){var r=t-e;return Gn(e)?YS(e,i(0,e.length),t):io(n,function(s){return(r+(s-e)%r)%r+e})},dA=function i(e,t,n){var r=t-e,s=r*2;return Gn(e)?YS(e,i(0,e.length-1),t):io(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Fc=function(e){for(var t=0,n="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?CS:pp),n+=e.substr(t,r-t)+jS(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},qS=function(e,t,n,r,s){var o=t-e,a=r-n;return io(s,function(l){return n+((l-e)/o*a||0)})},pA=function i(e,t,n,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=En(e),a={},l,c,u,f,h;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(Gn(e)&&!Gn(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(i(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},n=t}else r||(e=il(Gn(e)?[]:{},e));if(!u){for(l in t)bg.call(a,e,l,"get",t[l]);s=function(g){return Ag(g,a)||(o?e.p:e)}}}return io(n,s)},y0=function(e,t,n){var r=e.labels,s=Pr,o,a,l;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Ni=function(e,t,n){var r=e.vars,s=r[t],o=zt,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&Xs.length&&Of(),a&&(zt=a),u=l?s.apply(c,l):s.call(c),zt=o,u},Wl=function(e){return $s(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ln),e.progress()<1&&Ni(e,"onInterrupt"),e},Aa,$S=[],KS=function(e){if(e)if(e=!e.name&&e.default||e,_g()||e.headless){var t=e.name,n=qt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Oc,render:Ag,add:bg,kill:PA,modifier:CA,rawVars:0},o={targetTest:0,get:0,getSetter:wg,aliases:{},register:0};if(ol(),e!==r){if(Ci[t])return;Bi(r,Bi(Ff(e,s),o)),il(r.prototype,il(s,Ff(e,o))),Ci[r.prop=t]=r,e.targetTest&&(cf.push(r),yg[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}LS(t,r),e.register&&e.register(Si,r,vi)}else $S.push(e)},Lt=255,Xl={aqua:[0,Lt,Lt],lime:[0,Lt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Lt],navy:[0,0,128],white:[Lt,Lt,Lt],olive:[128,128,0],yellow:[Lt,Lt,0],orange:[Lt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Lt,0,0],pink:[Lt,192,203],cyan:[0,Lt,Lt],transparent:[Lt,Lt,Lt,0]},qh=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Lt+.5|0},ZS=function(e,t,n){var r=e?hs(e)?[e>>16,e>>8&Lt,e&Lt]:0:Xl.black,s,o,a,l,c,u,f,h,d,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Xl[e])r=Xl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Lt,r&Lt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Lt,e&Lt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(pp),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=qh(l+1/3,s,o),r[1]=qh(l,s,o),r[2]=qh(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(AS),n&&r.length<4&&(r[3]=1),r}else r=e.match(pp)||Xl.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/Lt,o=r[1]/Lt,a=r[2]/Lt,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},JS=function(e){var t=[],n=[],r=-1;return e.split(js).forEach(function(s){var o=s.match(wa)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},S0=function(e,t,n){var r="",s=(e+r).match(js),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=ZS(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=JS(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(js,"1").split(wa),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(js),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},js=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Xl)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),mA=/hsl[a]?\(/,QS=function(e){var t=e.join(" "),n;if(js.lastIndex=0,js.test(t))return n=mA.test(t),e[1]=S0(e[1],n),e[0]=S0(e[0],n,JS(e[1])),!0},Bc,Di=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,f,h,d,g=function _(m){var p=i()-r,x=m===!0,y,v,b,A;if((p>e||p<0)&&(n+=p-t),r+=p,b=r-n,y=b-o,(y>0||x)&&(A=++f.frame,h=b-f.time*1e3,f.time=b=b/1e3,o+=y+(y>=s?4:s-y),v=1),x||(l=c(_)),v)for(d=0;d<a.length;d++)a[d](b,h,A,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){PS&&(!mp&&_g()&&(Sr=mp=window,vg=Sr.document||{},Fi.gsap=Si,(Sr.gsapVersions||(Sr.gsapVersions=[])).push(Si.version),DS(Uf||Sr.GreenSockGlobals||!Sr.gsap&&Sr||{}),$S.forEach(KS)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Bc=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Bc=0,c=Oc},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,x){var y=p?function(v,b,A,T){m(v,b,A,T),f.remove(y)}:m;return f.remove(m),a[x?"unshift":"push"](y),ol(),y},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},f}(),ol=function(){return!Bc&&Di.wake()},dt={},gA=/^[\d.\-M][\d.\-,\s]/,_A=/["']/g,vA=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(_A,"").trim():+c,r=l.substr(a+1).trim();return t},xA=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},yA=function(e){var t=(e+"").split("("),n=dt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[vA(t[1])]:xA(e).split(",").map(OS)):dt._CE&&gA.test(e)?dt._CE("",e):n},eM=function(e){return function(t){return 1-e(1-t)}},tM=function i(e,t){for(var n=e._first,r;n;)n instanceof ai?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},Io=function(e,t){return e&&(qt(e)?e:dt[e]||yA(e))||t},$o=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return _i(e,function(a){dt[a]=Fi[a]=s,dt[o=a.toLowerCase()]=n;for(var l in s)dt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=dt[a+"."+l]=s[l]}),s},nM=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},$h=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/dp*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*q1((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:nM(a);return s=dp/s,l.config=function(c,u){return i(e,c,u)},l},Kh=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:nM(n);return r.config=function(s){return i(e,s)},r};_i("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;$o(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});dt.Linear.easeNone=dt.none=dt.Linear.easeIn;$o("Elastic",$h("in"),$h("out"),$h());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};$o("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);$o("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});$o("Circ",function(i){return-(ES(1-i*i)-1)});$o("Sine",function(i){return i===1?1:-Y1(i*X1)+1});$o("Back",Kh("in"),Kh("out"),Kh());dt.SteppedEase=dt.steps=Fi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-Vn;return function(a){return((r*tu(0,o,a)|0)+s)*n}}};nl.ease=dt["quad.out"];_i("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Sg+=i+","+i+"Params,"});var iM=function(e,t){this.id=j1++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:NS,this.set=t?t.getSetter:wg},kc=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,sl(this,+t.duration,1,1),this.data=t.data,zt&&(this._ctx=zt,zt.data.push(this)),Bc||Di.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,sl(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(ol(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Mh(this,n),!s._dp||s.parent||kS(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Tr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Vn||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),US(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+v0(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+v0(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?rl(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Bf(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(tu(-Math.abs(this._delay),this._tDur,s),r!==!1),Sh(this),tA(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ol(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Vn&&(this._tTime-=Vn)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Tr(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(gi(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Bf(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Z1);var r=Ln;return Ln=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ln=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,x0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,x0(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Wi(this,n),gi(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,gi(r)),this._dur||(this._zTime=-1e-8),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-Vn)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this;return new Promise(function(s){var o=qt(n)?n:FS,a=function(){var c=r.then;r.then=null,qt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){Wl(this)},i}();Bi(kc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var ai=function(i){TS(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=gi(n.sortChildren),Vt&&Tr(n.parent||Vt,$r(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&zS($r(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return uc(0,arguments,this),this},t.from=function(r,s,o){return uc(1,arguments,this),this},t.fromTo=function(r,s,o,a){return uc(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,cc(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new sn(r,s,Wi(this,o),1),this},t.call=function(r,s,o){return Tr(this,sn.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new sn(r,o,Wi(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,cc(o).immediateRender=gi(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,cc(a).immediateRender=gi(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:on(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,d,g,_,m,p,x,y,v,b,A,T;if(this!==Vt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),h=u,v=this._start,y=this._ts,p=!y,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=on(u%m),u===l?(_=this._repeat,h=c):(b=on(u/m),_=~~b,_&&_===b&&(h=c,_--),h>c&&(h=c)),b=rl(this._tTime,m),!a&&this._tTime&&b!==_&&this._tTime-b*m-this._dur<=0&&(b=_),A&&_&1&&(h=c-h,T=1),_!==b&&!this._lock){var C=A&&b&1,S=C===(A&&_&1);if(_<b&&(C=!C),a=C?0:u%c?c:u,this._lock=1,this.render(a||(T?0:on(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Ni(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;tM(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=sA(this,on(a),on(h)),x&&(u-=h-(h=x._start))),this._tTime=u,this._time=h,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&h&&!s&&!_&&(Ni(this,"onStart"),this._tTime!==u))return this;if(h>=a&&r>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!p){x=0,g&&(u+=this._zTime=-1e-8);break}}d=g}else{d=this._last;for(var M=r<0?r:h;d;){if(g=d._prev,(d._act||M<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(M-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(M-d._start)*d._ts,s,o||Ln&&(d._initted||d._startAt)),h!==this._time||!this._ts&&!p){x=0,g&&(u+=this._zTime=M?-1e-8:Vn);break}}d=g}}if(x&&!s&&(this.pause(),x.render(h>=a?0:-1e-8)._zTime=h>=a?1:-1,this._ts))return this._start=v,Sh(this),this.render(r,s,o);this._onUpdate&&!s&&Ni(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&$s(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(Ni(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(hs(s)||(s=Wi(this,s,r)),!(r instanceof kc)){if(Gn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(En(r))return this.addLabel(r,s);if(qt(r))r=sn.delayedCall(0,r);else return this}return this!==r?Tr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-1e8);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof sn?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return En(r)?this.removeLabel(r):qt(r)?this.killTweensOf(r):(r.parent===this&&yh(this,r),r===this._recent&&(this._recent=this._last),Lo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=on(Di.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Wi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=sn.delayedCall(0,s||Oc,o);return a.data="isPause",this._hasPause=1,Tr(this,a,Wi(this,r))},t.removePause=function(r){var s=this._first;for(r=Wi(this,r);s;)s._start===r&&s.data==="isPause"&&$s(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Us!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=$i(r),l=this._first,c=hs(s),u;l;)l instanceof sn?J1(l._targets,a)&&(c?(!Us||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Wi(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=sn.to(o,Bi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Vn,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&sl(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Bi({startAt:{time:Wi(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),y0(this,Wi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),y0(this,Wi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Vn)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return Lo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Lo(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Pr,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Tr(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;sl(o,o===Vt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Vt._ts&&(US(Vt,Bf(r,Vt)),IS=Di.frame),Di.frame>=g0){g0+=Oi.autoSleep||120;var s=Vt._first;if((!s||!s._ts)&&Oi.autoSleep&&Di._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Di.sleep()}}},e}(kc);Bi(ai.prototype,{_lock:0,_hasPause:0,_forcing:0});var SA=function(e,t,n,r,s,o,a){var l=new vi(this._pt,e,t,0,1,cM,null,s),c=0,u=0,f,h,d,g,_,m,p,x;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=Fc(r)),o&&(x=[n,r],o(x,e,t),n=x[0],r=x[1]),h=n.match(jh)||[];f=jh.exec(r);)g=f[0],_=r.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Ba(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=jh.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(RS.test(r)||p)&&(l.e=0),this._pt=l,l},bg=function(e,t,n,r,s,o,a,l,c,u){qt(r)&&(r=r(s||0,e,o));var f=e[t],h=n!=="get"?n:qt(f)?c?e[t.indexOf("set")||!qt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=qt(f)?c?wA:aM:Eg,g;if(En(r)&&(~r.indexOf("random(")&&(r=Fc(r)),r.charAt(1)==="="&&(g=Ba(h,r)+(kn(h)||0),(g||g===0)&&(r=g))),!u||h!==r||Mp)return!isNaN(h*r)&&r!==""?(g=new vi(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?RA:lM,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&xg(t,r),SA.call(this,e,t,h,r,d,l||Oi.stringFilter,c))},MA=function(e,t,n,r,s){if(qt(e)&&(e=fc(e,s,t,n,r)),!Nr(e)||e.style&&e.nodeType||Gn(e)||wS(e))return En(e)?fc(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=fc(e[a],s,t,n,r);return o},rM=function(e,t,n,r,s,o){var a,l,c,u;if(Ci[e]&&(a=new Ci[e]).init(s,a.rawVars?t[e]:MA(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new vi(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Aa))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Us,Mp,Tg=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,h=r.keyframes,d=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,x=p&&p.data==="nested"?p.vars.targets:m,y=e._overwrite==="auto"&&!mg,v=e.timeline,b,A,T,C,S,M,N,B,H,q,Q,W,j;if(v&&(!h||!s)&&(s="none"),e._ease=Io(s,nl.ease),e._yEase=f?eM(Io(f===!0?s:f,nl.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!v&&!!r.runBackwards,!v||h&&!r.stagger){if(B=m[0]?Do(m[0]).harness:0,W=B&&r[B.prop],b=Ff(r,yg),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?lf:K1),_._lazy=0),o){if($s(e._startAt=sn.set(m,Bi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&gi(l),startAt:null,delay:0,onUpdate:c&&function(){return Ni(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ln||!a&&!d)&&e._startAt.revert(lf),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),T=Bi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&gi(l),immediateRender:a,stagger:0,parent:p},b),W&&(T[B.prop]=W),$s(e._startAt=sn.set(m,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ln?e._startAt.revert(lf):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,Vn,Vn);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&gi(l)||l&&!g,A=0;A<m.length;A++){if(S=m[A],N=S._gsap||Mg(m)[A]._gsap,e._ptLookup[A]=q={},gp[N.id]&&Xs.length&&Of(),Q=x===m?A:x.indexOf(S),B&&(H=new B).init(S,W||b,e,Q,x)!==!1&&(e._pt=C=new vi(e._pt,S,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(V){q[V]=C}),H.priority&&(M=1)),!B||W)for(T in b)Ci[T]&&(H=rM(T,b,e,Q,S,x))?H.priority&&(M=1):q[T]=C=bg.call(e,S,T,"get",b[T],Q,x,0,r.stringFilter);e._op&&e._op[A]&&e.kill(S,e._op[A]),y&&e._pt&&(Us=e,Vt.killTweensOf(S,q,e.globalTime(t)),j=!e.parent,Us=0),e._pt&&l&&(gp[N.id]=1)}M&&uM(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!j,h&&t<=0&&v.render(Pr,!0,!0)},bA=function(e,t,n,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Mp=1,e.vars[t]="+=0",Tg(e,a),Mp=0,l?Uc(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=Kt(n)+kn(f.e)),f.b&&(f.b=u.s+kn(f.b))},TA=function(e,t){var n=e[0]?Do(e[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return t;s=il({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},EA=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(Gn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},fc=function(e,t,n,r,s){return qt(e)?e.call(t,n,r,s):En(e)&&~e.indexOf("random(")?Fc(e):e},sM=Sg+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",oM={};_i(sM+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return oM[i]=1});var sn=function(i){TS(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:cc(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,x=r.parent||Vt,y=(Gn(n)||wS(n)?hs(n[0]):"length"in r)?[n]:$i(n),v,b,A,T,C,S,M,N;if(a._targets=y.length?Mg(y):Uc("GSAP target "+n+" not found. https://gsap.com",!Oi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||h||cu(c)||cu(u)){if(r=a.vars,v=a.timeline=new ai({data:"nested",defaults:_||{},targets:x&&x.data==="nested"?x.vars.targets:y}),v.kill(),v.parent=v._dp=$r(a),v._start=0,h||cu(c)||cu(u)){if(T=y.length,M=h&&WS(h),Nr(h))for(C in h)~sM.indexOf(C)&&(N||(N={}),N[C]=h[C]);for(b=0;b<T;b++)A=Ff(r,oM),A.stagger=0,p&&(A.yoyoEase=p),N&&il(A,N),S=y[b],A.duration=+fc(c,$r(a),b,S,y),A.delay=(+fc(u,$r(a),b,S,y)||0)-a._delay,!h&&T===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),v.to(S,A,M?M(b,S,y):0),v._ease=dt.none;v.duration()?c=u=0:a.timeline=0}else if(g){cc(Bi(v.vars.defaults,{ease:"none"})),v._ease=Io(g.ease||r.ease||"none");var B=0,H,q,Q;if(Gn(g))g.forEach(function(W){return v.to(y,W,">")}),v.duration();else{A={};for(C in g)C==="ease"||C==="easeEach"||EA(C,g[C],A,g.easeEach);for(C in A)for(H=A[C].sort(function(W,j){return W.t-j.t}),B=0,b=0;b<H.length;b++)q=H[b],Q={ease:q.e,duration:(q.t-(b?H[b-1].t:0))/100*c},Q[C]=q.v,v.to(y,Q,B),B+=Q.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return d===!0&&!mg&&(Us=$r(a),Vt.killTweensOf(y),Us=0),Tr(x,$r(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!g&&a._start===on(x._time)&&gi(f)&&nA($r(a))&&x.data!=="nested")&&(a._tTime=-1e-8,a.render(Math.max(0,-u)||0)),m&&zS($r(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-Vn&&!u?l:r<Vn?0:r,h,d,g,_,m,p,x,y,v;if(!c)rA(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,y=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(h=on(f%_),f===l?(g=this._repeat,h=c):(m=on(f/_),g=~~m,g&&g===m?(h=c,g--):h>c&&(h=c)),p=this._yoyo&&g&1,p&&(v=this._yEase,h=c-h),m=rl(this._tTime,_),h===a&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(y&&this._yEase&&tM(y,p),this.vars.repeatRefresh&&!p&&!this._lock&&h!==_&&this._initted&&(this._lock=o=1,this.render(on(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(HS(this,u?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(v||this._ease)(h/c),this._from&&(this.ratio=x=1-x),h&&!a&&!s&&!g&&(Ni(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(x,d.d),d=d._next;y&&y.render(r<0?r:y._dur*y._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&_p(this,r,s,o),Ni(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Ni(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&_p(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&$s(this,1),!s&&!(u&&!a)&&(f||a||p)&&(Ni(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Bc||Di.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Tg(this,c),u=this._ease(c/this._dur),bA(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(Mh(this,0),this.parent||BS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Wl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ln),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Us&&Us.vars.overwrite!==!0)._first||Wl(this),this.parent&&o!==this.timeline.totalDuration()&&sl(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?$i(r):a,c=this._ptLookup,u=this._pt,f,h,d,g,_,m,p;if((!s||s==="all")&&eA(a,l))return s==="all"&&(this._pt=0),Wl(this);for(f=this._op=this._op||[],s!=="all"&&(En(s)&&(_={},_i(s,function(x){return _[x]=1}),s=_),s=TA(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){h=c[p],s==="all"?(f[p]=s,g=h,d={}):(d=f[p]=f[p]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&yh(this,m,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Wl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return uc(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return uc(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Vt.killTweensOf(r,s,o)},e}(kc);Bi(sn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});_i("staggerTo,staggerFrom,staggerFromTo",function(i){sn[i]=function(){var e=new ai,t=xp.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Eg=function(e,t,n){return e[t]=n},aM=function(e,t,n){return e[t](n)},wA=function(e,t,n,r){return e[t](r.fp,n)},AA=function(e,t,n){return e.setAttribute(t,n)},wg=function(e,t){return qt(e[t])?aM:gg(e[t])&&e.setAttribute?AA:Eg},lM=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},RA=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},cM=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Ag=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},CA=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},PA=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?yh(this,t,"_pt"):t.dep||(n=1),t=r;return!n},DA=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},uM=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},vi=function(){function i(t,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||lM,this.d=l||this,this.set=c||Eg,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=DA,this.m=n,this.mt=s,this.tween=r},i}();_i(Sg+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return yg[i]=1});Fi.TweenMax=Fi.TweenLite=sn;Fi.TimelineLite=Fi.TimelineMax=ai;Vt=new ai({sortChildren:!1,defaults:nl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Oi.stringFilter=QS;var No=[],uf={},LA=[],M0=0,IA=0,Zh=function(e){return(uf[e]||LA).map(function(t){return t()})},bp=function(){var e=Date.now(),t=[];e-M0>2&&(Zh("matchMediaInit"),No.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=Sr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Zh("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),M0=e,Zh("matchMedia"))},fM=function(){function i(t,n){this.selector=n&&yp(n),this.data=[],this._r=[],this.isReverted=!1,this.id=IA++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){qt(n)&&(s=r,r=n,n=qt);var o=this,a=function(){var c=zt,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=yp(s)),zt=o,f=r.apply(o,arguments),qt(f)&&o._r.push(f),zt=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===qt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var r=zt;zt=null,n(this),zt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof sn&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof ai?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof sn)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=No.length;o--;)No[o].id===this.id&&No.splice(o,1)},e.revert=function(n){this.kill(n||{})},i}(),NA=function(){function i(t){this.contexts=[],this.scope=t,zt&&zt.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){Nr(n)||(n={matches:n});var o=new fM(0,s||this.scope),a=o.conditions={},l,c,u;zt&&!o.selector&&(o.selector=zt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=Sr.matchMedia(n[c]),l&&(No.indexOf(o)<0&&No.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(bp):l.addEventListener("change",bp)));return u&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),kf={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return KS(r)})},timeline:function(e){return new ai(e)},getTweensOf:function(e,t){return Vt.getTweensOf(e,t)},getProperty:function(e,t,n,r){En(e)&&(e=$i(e)[0]);var s=Do(e||{}).get,o=n?FS:OS;return n==="native"&&(n=""),e&&(t?o((Ci[t]&&Ci[t].get||s)(e,t,n,r)):function(a,l,c){return o((Ci[a]&&Ci[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=$i(e),e.length>1){var r=e.map(function(u){return Si.quickSetter(u,t,n)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var o=Ci[t],a=Do(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;Aa._pt=0,f.init(e,n?u+n:u,Aa,0,[e]),f.render(1,f),Aa._pt&&Ag(1,Aa)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,s=Si.to(e,Bi((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Vt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Io(e.ease,nl.ease)),_0(nl,e||{})},config:function(e){return _0(Oi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Ci[a]&&!Fi[a]&&Uc(t+" effect requires "+a+" plugin.")}),Yh[t]=function(a,l,c){return n($i(a),Bi(l||{},s),c)},o&&(ai.prototype[t]=function(a,l,c){return this.add(Yh[t](a,Nr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){dt[e]=Io(t)},parseEase:function(e,t){return arguments.length?Io(e,t):dt},getById:function(e){return Vt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new ai(e),r,s;for(n.smoothChildTiming=gi(e.smoothChildTiming),Vt.remove(n),n._dp=0,n._time=n._tTime=Vt._time,r=Vt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof sn&&r.vars.onComplete===r._targets[0]))&&Tr(n,r,r._start-r._delay),r=s;return Tr(Vt,n,0),n},context:function(e,t){return e?new fM(e,t):zt},matchMedia:function(e){return new NA(e)},matchMediaRefresh:function(){return No.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||bp()},addEventListener:function(e,t){var n=uf[e]||(uf[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=uf[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:hA,wrapYoyo:dA,distribute:WS,random:jS,snap:XS,normalize:fA,getUnit:kn,clamp:aA,splitColor:ZS,toArray:$i,selector:yp,mapRange:qS,pipe:cA,unitize:uA,interpolate:pA,shuffle:GS},install:DS,effects:Yh,ticker:Di,updateRoot:ai.updateRoot,plugins:Ci,globalTimeline:Vt,core:{PropTween:vi,globals:LS,Tween:sn,Timeline:ai,Animation:kc,getCache:Do,_removeLinkedListItem:yh,reverting:function(){return Ln},context:function(e){return e&&zt&&(zt.data.push(e),e._ctx=zt),zt},suppressOverwrites:function(e){return mg=e}}};_i("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return kf[i]=sn[i]});Di.add(ai.updateRoot);Aa=kf.to({},{duration:0});var UA=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},OA=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=UA(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},Jh=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(En(s)&&(l={},_i(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}OA(a,s)}}}},Si=kf.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Ln?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Jh("roundProps",Sp),Jh("modifiers"),Jh("snap",XS))||kf;sn.version=ai.version=Si.version="3.12.7";PS=1;_g()&&ol();dt.Power0;dt.Power1;dt.Power2;dt.Power3;dt.Power4;dt.Linear;dt.Quad;dt.Cubic;dt.Quart;dt.Quint;dt.Strong;dt.Elastic;dt.Back;dt.SteppedEase;dt.Bounce;dt.Sine;dt.Expo;dt.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var b0,Os,ka,Rg,wo,T0,Cg,FA=function(){return typeof window<"u"},ds={},yo=180/Math.PI,za=Math.PI/180,ea=Math.atan2,E0=1e8,Pg=/([A-Z])/g,BA=/(left|right|width|margin|padding|x)/i,kA=/[\s,\(]\S/,wr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Tp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},zA=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},HA=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},VA=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},hM=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},dM=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},GA=function(e,t,n){return e.style[t]=n},WA=function(e,t,n){return e.style.setProperty(t,n)},XA=function(e,t,n){return e._gsap[t]=n},jA=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},YA=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},qA=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Gt="transform",xi=Gt+"Origin",$A=function i(e,t){var n=this,r=this.target,s=r.style,o=r._gsap;if(e in ds&&s){if(this.tfm=this.tfm||{},e!=="transform")e=wr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Jr(r,a)}):this.tfm[e]=o.x?o[e]:Jr(r,e),e===xi&&(this.tfm.zOrigin=o.zOrigin);else return wr.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(Gt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(xi,t,"")),e=Gt}(s||t)&&this.props.push(e,t,s[e])},pM=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},KA=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Pg,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Cg(),(!s||!s.isStart)&&!n[Gt]&&(pM(n),r.zOrigin&&n[xi]&&(n[xi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},mM=function(e,t){var n={target:e,props:[],revert:KA,save:$A};return e._gsap||Si.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},gM,Ep=function(e,t){var n=Os.createElementNS?Os.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Os.createElement(e);return n&&n.style?n:Os.createElement(e)},Dr=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Pg,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,al(t)||t,1)||""},w0="O,Moz,ms,Ms,Webkit".split(","),al=function(e,t,n){var r=t||wo,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(w0[o]+e in s););return o<0?null:(o===3?"ms":o>=0?w0[o]:"")+e},wp=function(){FA()&&window.document&&(b0=window,Os=b0.document,ka=Os.documentElement,wo=Ep("div")||{style:{}},Ep("div"),Gt=al(Gt),xi=Gt+"Origin",wo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",gM=!!al("perspective"),Cg=Si.core.reverting,Rg=1)},A0=function(e){var t=e.ownerSVGElement,n=Ep("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),ka.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),ka.removeChild(n),s},R0=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},_M=function(e){var t,n;try{t=e.getBBox()}catch{t=A0(e),n=1}return t&&(t.width||t.height)||n||(t=A0(e)),t&&!t.width&&!t.x&&!t.y?{x:+R0(e,["x","cx","x1"])||0,y:+R0(e,["y","cy","y1"])||0,width:0,height:0}:t},vM=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&_M(e))},Go=function(e,t){if(t){var n=e.style,r;t in ds&&t!==xi&&(t=Gt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Pg,"-$1").toLowerCase())):n.removeAttribute(t)}},Fs=function(e,t,n,r,s,o){var a=new vi(e._pt,t,n,0,1,o?dM:hM);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},C0={deg:1,rad:1,turn:1},ZA={grid:1,flex:1},Ks=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=wo.style,l=BA.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",g,_,m,p;if(r===o||!s||C0[r]||C0[o])return s;if(o!=="px"&&!h&&(s=i(e,t,n,"px")),p=e.getCTM&&vM(e),(d||o==="%")&&(ds[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Kt(d?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(h?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Os||!_.appendChild)&&(_=Os.body),m=_._gsap,m&&d&&m.width&&l&&m.time===Di.time&&!m.uncache)return Kt(s/m.width*f);if(d&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=f+r,g=e[u],x?e.style[t]=x:Go(e,t)}else(d||o==="%")&&!ZA[Dr(_,"display")]&&(a.position=Dr(e,"position")),_===e&&(a.position="static"),_.appendChild(wo),g=wo[u],_.removeChild(wo),a.position="absolute";return l&&d&&(m=Do(_),m.time=Di.time,m.width=_[u]),Kt(h?g*s/f:g&&s?f/g*s:0)},Jr=function(e,t,n,r){var s;return Rg||wp(),t in wr&&t!=="transform"&&(t=wr[t],~t.indexOf(",")&&(t=t.split(",")[0])),ds[t]&&t!=="transform"?(s=Hc(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Hf(Dr(e,xi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=zf[t]&&zf[t](e,t,n)||Dr(e,t)||NS(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ks(e,t,s,n)+n:s},JA=function(e,t,n,r){if(!n||n==="none"){var s=al(t,e,1),o=s&&Dr(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Dr(e,"borderTopColor"))}var a=new vi(this._pt,e.style,t,0,1,cM),l=0,c=0,u,f,h,d,g,_,m,p,x,y,v,b;if(a.b=n,a.e=r,n+="",r+="",r==="auto"&&(_=e.style[t],e.style[t]=r,r=Dr(e,t)||r,_?e.style[t]=_:Go(e,t)),u=[n,r],QS(u),n=u[0],r=u[1],h=n.match(wa)||[],b=r.match(wa)||[],b.length){for(;f=wa.exec(r);)m=f[0],x=r.substring(l,f.index),g?g=(g+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(g=1),m!==(_=h[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),m.charAt(1)==="="&&(m=Ba(d,m)+v),p=parseFloat(m),y=m.substr((p+"").length),l=wa.lastIndex-y.length,y||(y=y||Oi.units[t]||v,l===r.length&&(r+=y,a.e+=y)),v!==y&&(d=Ks(e,t,_,y)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?dM:hM;return RS.test(r)&&(a.e=0),this._pt=a,a},P0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},QA=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=P0[n]||n,t[1]=P0[r]||r,t.join(" ")},eR=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],ds[a]&&(l=1,a=a==="transformOrigin"?xi:Gt),Go(n,a);l&&(Go(n,Gt),o&&(o.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Hc(n,1),o.uncache=1,pM(r)))}},zf={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new vi(e._pt,t,n,0,0,eR);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},zc=[1,0,0,1,0,0],xM={},yM=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},D0=function(e){var t=Dr(e,Gt);return yM(t)?zc:t.substr(7).match(AS).map(Kt)},Dg=function(e,t){var n=e._gsap||Do(e),r=e.style,s=D0(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?zc:s):(s===zc&&!e.offsetParent&&e!==ka&&!n.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,ka.appendChild(e)),s=D0(e),l?r.display=l:Go(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):ka.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ap=function(e,t,n,r,s,o){var a=e._gsap,l=s||Dg(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],x=l[5],y=t.split(" "),v=parseFloat(y[0])||0,b=parseFloat(y[1])||0,A,T,C,S;n?l!==zc&&(T=d*m-g*_)&&(C=v*(m/T)+b*(-_/T)+(_*x-m*p)/T,S=v*(-g/T)+b*(d/T)-(d*x-g*p)/T,v=C,b=S):(A=_M(e),v=A.x+(~y[0].indexOf("%")?v/100*A.width:v),b=A.y+(~(y[1]||y[0]).indexOf("%")?b/100*A.height:b)),r||r!==!1&&a.smooth?(p=v-c,x=b-u,a.xOffset=f+(p*d+x*_)-p,a.yOffset=h+(p*g+x*m)-x):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=b,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[xi]="0px 0px",o&&(Fs(o,a,"xOrigin",c,v),Fs(o,a,"yOrigin",u,b),Fs(o,a,"xOffset",f,a.xOffset),Fs(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+b)},Hc=function(e,t){var n=e._gsap||new iM(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Dr(e,xi)||"0",u,f,h,d,g,_,m,p,x,y,v,b,A,T,C,S,M,N,B,H,q,Q,W,j,V,he,U,_e,Ce,He,te,de;return u=f=h=_=m=p=x=y=v=0,d=g=1,n.svg=!!(e.getCTM&&vM(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Gt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Gt]!=="none"?l[Gt]:"")),r.scale=r.rotate=r.translate="none"),T=Dg(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",j=""):j=!t&&e.getAttribute("data-svg-origin"),Ap(e,j||c,!!j||n.originIsAbsolute,n.smooth!==!1,T)),b=n.xOrigin||0,A=n.yOrigin||0,T!==zc&&(N=T[0],B=T[1],H=T[2],q=T[3],u=Q=T[4],f=W=T[5],T.length===6?(d=Math.sqrt(N*N+B*B),g=Math.sqrt(q*q+H*H),_=N||B?ea(B,N)*yo:0,x=H||q?ea(H,q)*yo+_:0,x&&(g*=Math.abs(Math.cos(x*za))),n.svg&&(u-=b-(b*N+A*H),f-=A-(b*B+A*q))):(de=T[6],He=T[7],U=T[8],_e=T[9],Ce=T[10],te=T[11],u=T[12],f=T[13],h=T[14],C=ea(de,Ce),m=C*yo,C&&(S=Math.cos(-C),M=Math.sin(-C),j=Q*S+U*M,V=W*S+_e*M,he=de*S+Ce*M,U=Q*-M+U*S,_e=W*-M+_e*S,Ce=de*-M+Ce*S,te=He*-M+te*S,Q=j,W=V,de=he),C=ea(-H,Ce),p=C*yo,C&&(S=Math.cos(-C),M=Math.sin(-C),j=N*S-U*M,V=B*S-_e*M,he=H*S-Ce*M,te=q*M+te*S,N=j,B=V,H=he),C=ea(B,N),_=C*yo,C&&(S=Math.cos(C),M=Math.sin(C),j=N*S+B*M,V=Q*S+W*M,B=B*S-N*M,W=W*S-Q*M,N=j,Q=V),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Kt(Math.sqrt(N*N+B*B+H*H)),g=Kt(Math.sqrt(W*W+de*de)),C=ea(Q,W),x=Math.abs(C)>2e-4?C*yo:0,v=te?1/(te<0?-te:te):0),n.svg&&(j=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!yM(Dr(e,Gt)),j&&e.setAttribute("transform",j))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(d*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=Kt(d),n.scaleY=Kt(g),n.rotation=Kt(_)+a,n.rotationX=Kt(m)+a,n.rotationY=Kt(p)+a,n.skewX=x+a,n.skewY=y+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[xi]=Hf(c)),n.xOffset=n.yOffset=0,n.force3D=Oi.force3D,n.renderTransform=n.svg?nR:gM?SM:tR,n.uncache=0,n},Hf=function(e){return(e=e.split(" "))[0]+" "+e[1]},Qh=function(e,t,n){var r=kn(t);return Kt(parseFloat(t)+parseFloat(Ks(e,"x",n+"px",r)))+r},tR=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,SM(e,t)},lo="0deg",Pl="0px",co=") ",SM=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,x=n.target,y=n.zOrigin,v="",b=p==="auto"&&e&&e!==1||p===!0;if(y&&(f!==lo||u!==lo)){var A=parseFloat(u)*za,T=Math.sin(A),C=Math.cos(A),S;A=parseFloat(f)*za,S=Math.cos(A),o=Qh(x,o,T*S*-y),a=Qh(x,a,-Math.sin(A)*-y),l=Qh(x,l,C*S*-y+y)}m!==Pl&&(v+="perspective("+m+co),(r||s)&&(v+="translate("+r+"%, "+s+"%) "),(b||o!==Pl||a!==Pl||l!==Pl)&&(v+=l!==Pl||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+co),c!==lo&&(v+="rotate("+c+co),u!==lo&&(v+="rotateY("+u+co),f!==lo&&(v+="rotateX("+f+co),(h!==lo||d!==lo)&&(v+="skew("+h+", "+d+co),(g!==1||_!==1)&&(v+="scale("+g+", "+_+co),x.style[Gt]=v||"translate(0, 0)"},nR=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,x=n.forceCSS,y=parseFloat(o),v=parseFloat(a),b,A,T,C,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=za,c*=za,b=Math.cos(l)*f,A=Math.sin(l)*f,T=Math.sin(l-c)*-h,C=Math.cos(l-c)*h,c&&(u*=za,S=Math.tan(c-u),S=Math.sqrt(1+S*S),T*=S,C*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),b*=S,A*=S)),b=Kt(b),A=Kt(A),T=Kt(T),C=Kt(C)):(b=f,C=h,A=T=0),(y&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(y=Ks(d,"x",o,"px"),v=Ks(d,"y",a,"px")),(g||_||m||p)&&(y=Kt(y+g-(g*b+_*T)+m),v=Kt(v+_-(g*A+_*C)+p)),(r||s)&&(S=d.getBBox(),y=Kt(y+r/100*S.width),v=Kt(v+s/100*S.height)),S="matrix("+b+","+A+","+T+","+C+","+y+","+v+")",d.setAttribute("transform",S),x&&(d.style[Gt]=S)},iR=function(e,t,n,r,s){var o=360,a=En(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?yo:1),c=l-r,u=r+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-360)),f==="cw"&&c<0?c=(c+o*E0)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*E0)%o-~~(c/o)*o)),e._pt=h=new vi(e._pt,t,n,r,c,zA),h.e=u,h.u="deg",e._props.push(n),h},L0=function(e,t){for(var n in t)e[n]=t[n];return e},rR=function(e,t,n){var r=L0({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,d,g;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Gt]=t,a=Hc(n,1),Go(n,Gt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Gt],o[Gt]=t,a=Hc(n,1),o[Gt]=c);for(l in ds)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=kn(c),g=kn(u),f=d!==g?Ks(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new vi(e._pt,a,l,f,h-f,Tp),e._pt.u=g||0,e._props.push(l));L0(a,r)};_i("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});zf[e>1?"border"+i:i]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(g){return Jr(a,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,d,f)}});var MM={name:"css",register:wp,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,h,d,g,_,m,p,x,y,v,b,A,T,C;Rg||wp(),this.styles=this.styles||mM(e),C=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Ci[_]&&rM(_,t,n,r,e,s)))){if(d=typeof u,g=zf[_],d==="function"&&(u=u.call(n,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Fc(u)),g)g(this,e,_,u,n)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",js.lastIndex=0,js.test(c)||(m=kn(c),p=kn(u)),p?m!==p&&(c=Ks(e,_,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),C.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,r,e,s):l[_],En(c)&&~c.indexOf("random(")&&(c=Fc(c)),kn(c+"")||c==="auto"||(c+=Oi.units[_]||kn(Jr(e,_))||""),(c+"").charAt(1)==="="&&(c=Jr(e,_))):c=Jr(e,_),h=parseFloat(c),x=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),f=parseFloat(u),_ in wr&&(_==="autoAlpha"&&(h===1&&Jr(e,"visibility")==="hidden"&&f&&(h=0),C.push("visibility",0,a.visibility),Fs(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=wr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in ds,y){if(this.styles.save(_),v||(b=e._gsap,b.renderTransform&&!t.parseTransform||Hc(e,t.parseTransform),A=t.smoothOrigin!==!1&&b.smooth,v=this._pt=new vi(this._pt,a,Gt,0,1,b.renderTransform,b,0,-1),v.dep=1),_==="scale")this._pt=new vi(this._pt,b,"scaleY",b.scaleY,(x?Ba(b.scaleY,x+f):f)-b.scaleY||0,Tp),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(xi,0,a[xi]),u=QA(u),b.svg?Ap(e,u,0,A,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==b.zOrigin&&Fs(this,b,"zOrigin",b.zOrigin,p),Fs(this,a,_,Hf(c),Hf(u)));continue}else if(_==="svgOrigin"){Ap(e,u,1,A,0,this);continue}else if(_ in xM){iR(this,b,_,h,x?Ba(h,x+u):u);continue}else if(_==="smoothOrigin"){Fs(this,b,"smooth",b.smooth,u);continue}else if(_==="force3D"){b[_]=u;continue}else if(_==="transform"){rR(this,u,e);continue}}else _ in a||(_=al(_)||_);if(y||(f||f===0)&&(h||h===0)&&!kA.test(u)&&_ in a)m=(c+"").substr((h+"").length),f||(f=0),p=kn(u)||(_ in Oi.units?Oi.units[_]:m),m!==p&&(h=Ks(e,_,c,p)),this._pt=new vi(this._pt,y?b:a,_,h,(x?Ba(h,x+f):f)-h,!y&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?VA:Tp),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=HA);else if(_ in a)JA.call(this,e,_,c,x?x+u:u);else if(_ in e)this.add(e,_,c||e[_],x?x+u:u,r,s);else if(_!=="parseTransform"){xg(_,u);continue}y||(_ in a?C.push(_,0,a[_]):typeof e[_]=="function"?C.push(_,2,e[_]()):C.push(_,1,c||e[_])),o.push(_)}}T&&uM(this)},render:function(e,t){if(t.tween._time||!Cg())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Jr,aliases:wr,getSetter:function(e,t,n){var r=wr[t];return r&&r.indexOf(",")<0&&(t=r),t in ds&&t!==xi&&(e._gsap.x||Jr(e,"x"))?n&&T0===n?t==="scale"?jA:XA:(T0=n||{})&&(t==="scale"?YA:qA):e.style&&!gg(e.style[t])?GA:~t.indexOf("-")?WA:wg(e,t)},core:{_removeProperty:Go,_getMatrix:Dg}};Si.utils.checkPrefix=al;Si.core.getStyleSaver=mM;(function(i,e,t,n){var r=_i(i+","+e+","+t,function(s){ds[s]=1});_i(e,function(s){Oi.units[s]="deg",xM[s]=1}),wr[r[13]]=i+","+e,_i(n,function(s){var o=s.split(":");wr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");_i("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Oi.units[i]="px"});Si.registerPlugin(MM);var an=Si.registerPlugin(MM)||Si;an.core.Tween;/*!
 * paths 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var sR=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,oR=/(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,aR=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,lR=/(^[#\.][a-z]|[a-y][a-z])/i,cR=Math.PI/180,uR=180/Math.PI,uu=Math.sin,fu=Math.cos,Ki=Math.abs,es=Math.sqrt,fR=Math.atan2,Rp=1e8,I0=function(e){return typeof e=="string"},bM=function(e){return typeof e=="number"},hR=function(e){return typeof e>"u"},dR={},pR={},Vf=1e5,TM=function(e){return Math.round((e+Rp)%1*Vf)/Vf||(e<0?0:1)},xt=function(e){return Math.round(e*Vf)/Vf||0},N0=function(e){return Math.round(e*1e10)/1e10||0},U0=function(e,t,n,r){var s=e[t],o=r===1?6:Cp(s,n,r);if((o||!r)&&o+n+2<s.length)return e.splice(t,0,s.slice(0,n+o+2)),s.splice(0,n+o),1},EM=function(e,t,n){var r=e.length,s=~~(n*r);if(e[s]>t){for(;--s&&e[s]>t;);s<0&&(s=0)}else for(;e[++s]<t&&s<r;);return s<r?s:r-1},mR=function(e,t){var n=e.length;for(e.reverse();n--;)e[n].reversed||vR(e[n])},O0=function(e,t){return t.totalLength=e.totalLength,e.samples?(t.samples=e.samples.slice(0),t.lookup=e.lookup.slice(0),t.minLength=e.minLength,t.resolution=e.resolution):e.totalPoints&&(t.totalPoints=e.totalPoints),t},gR=function(e,t){var n=e.length,r=e[n-1]||[],s=r.length;n&&t[0]===r[s-2]&&t[1]===r[s-1]&&(t=r.concat(t.slice(2)),n--),e[n]=t};function ff(i){i=I0(i)&&lR.test(i)&&document.querySelector(i)||i;var e=i.getAttribute?i:0,t;return e&&(i=i.getAttribute("d"))?(e._gsPath||(e._gsPath={}),t=e._gsPath[i],t&&!t._dirty?t:e._gsPath[i]=Gf(i)):i?I0(i)?Gf(i):bM(i[0])?[i]:i:console.warn("Expecting a <path> element or an SVG path data string")}function _R(i){for(var e=[],t=0;t<i.length;t++)e[t]=O0(i[t],i[t].slice(0));return O0(i,e)}function vR(i){var e=0,t;for(i.reverse();e<i.length;e+=2)t=i[e],i[e]=i[e+1],i[e+1]=t;i.reversed=!i.reversed}var xR=function(e,t){var n=document.createElementNS("http://www.w3.org/2000/svg","path"),r=[].slice.call(e.attributes),s=r.length,o;for(t=","+t+",";--s>-1;)o=r[s].nodeName.toLowerCase(),t.indexOf(","+o+",")<0&&n.setAttributeNS(null,o,r[s].nodeValue);return n},yR={rect:"rx,ry,x,y,width,height",circle:"r,cx,cy",ellipse:"rx,ry,cx,cy",line:"x1,x2,y1,y2"},SR=function(e,t){for(var n=t?t.split(","):[],r={},s=n.length;--s>-1;)r[n[s]]=+e.getAttribute(n[s])||0;return r};function MR(i,e){var t=i.tagName.toLowerCase(),n=.552284749831,r,s,o,a,l,c,u,f,h,d,g,_,m,p,x,y,v,b,A,T,C,S;return t==="path"||!i.getBBox?i:(c=xR(i,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),S=SR(i,yR[t]),t==="rect"?(a=S.rx,l=S.ry||a,s=S.x,o=S.y,d=S.width-a*2,g=S.height-l*2,a||l?(_=s+a*(1-n),m=s+a,p=m+d,x=p+a*n,y=p+a,v=o+l*(1-n),b=o+l,A=b+g,T=A+l*n,C=A+l,r="M"+y+","+b+" V"+A+" C"+[y,T,x,C,p,C,p-(p-m)/3,C,m+(p-m)/3,C,m,C,_,C,s,T,s,A,s,A-(A-b)/3,s,b+(A-b)/3,s,b,s,v,_,o,m,o,m+(p-m)/3,o,p-(p-m)/3,o,p,o,x,o,y,v,y,b].join(",")+"z"):r="M"+(s+d)+","+o+" v"+g+" h"+-d+" v"+-g+" h"+d+"z"):t==="circle"||t==="ellipse"?(t==="circle"?(a=l=S.r,f=a*n):(a=S.rx,l=S.ry,f=l*n),s=S.cx,o=S.cy,u=a*n,r="M"+(s+a)+","+o+" C"+[s+a,o+f,s+u,o+l,s,o+l,s-u,o+l,s-a,o+f,s-a,o,s-a,o-f,s-u,o-l,s,o-l,s+u,o-l,s+a,o-f,s+a,o].join(",")+"z"):t==="line"?r="M"+S.x1+","+S.y1+" L"+S.x2+","+S.y2:(t==="polyline"||t==="polygon")&&(h=(i.getAttribute("points")+"").match(oR)||[],s=h.shift(),o=h.shift(),r="M"+s+","+o+" L"+h.join(","),t==="polygon"&&(r+=","+s+","+o+"z")),c.setAttribute("d",RM(c._gsRawPath=Gf(r))),e&&i.parentNode&&(i.parentNode.insertBefore(c,i),i.parentNode.removeChild(i)),c)}function wM(i,e,t){var n=i[e],r=i[e+2],s=i[e+4],o;return n+=(r-n)*t,r+=(s-r)*t,n+=(r-n)*t,o=r+(s+(i[e+6]-s)*t-r)*t-n,n=i[e+1],r=i[e+3],s=i[e+5],n+=(r-n)*t,r+=(s-r)*t,n+=(r-n)*t,xt(fR(r+(s+(i[e+7]-s)*t-r)*t-n,o)*uR)}function AM(i,e,t){t=hR(t)?1:N0(t)||0,e=N0(e)||0;var n=Math.max(0,~~(Ki(t-e)-1e-8)),r=_R(i);if(e>t&&(e=1-e,t=1-t,mR(r),r.totalLength=0),e<0||t<0){var s=Math.abs(~~Math.min(e,t))+1;e+=s,t+=s}r.totalLength||Uo(r);var o=t>1,a=F0(r,e,dR,!0),l=F0(r,t,pR),c=l.segment,u=a.segment,f=l.segIndex,h=a.segIndex,d=l.i,g=a.i,_=h===f,m=d===g&&_,p,x,y,v,b,A,T,C;if(o||n){for(p=f<h||_&&d<g||m&&l.t<a.t,U0(r,h,g,a.t)&&(h++,p||(f++,m?(l.t=(l.t-a.t)/(1-a.t),d=0):_&&(d-=g))),Math.abs(1-(t-e))<1e-5?f=h-1:!l.t&&f?f--:U0(r,f,d,l.t)&&p&&h++,a.t===1&&(h=(h+1)%r.length),b=[],A=r.length,T=1+A*n,C=h,T+=(A-h+f)%A,v=0;v<T;v++)gR(b,r[C++%A]);r=b}else if(y=l.t===1?6:Cp(c,d,l.t),e!==t)for(x=Cp(u,g,m?a.t/l.t:a.t),_&&(y+=x),c.splice(d+y+2),(x||g)&&u.splice(0,g+x),v=r.length;v--;)(v<h||v>f)&&r.splice(v,1);else c.angle=wM(c,d+y,0),d+=y,a=c[d],l=c[d+1],c.length=c.totalLength=0,c.totalPoints=r.totalPoints=8,c.push(a,l,a,l,a,l,a,l);return r.totalLength=0,r}function bR(i,e,t){e=e||0,i.samples||(i.samples=[],i.lookup=[]);var n=~~i.resolution||12,r=1/n,s=i.length,o=i[e],a=i[e+1],l=e?e/6*n:0,c=i.samples,u=i.lookup,f=(e?i.minLength:Rp)||Rp,h=c[l+t*n-1],d=e?c[l-1]:0,g,_,m,p,x,y,v,b,A,T,C,S,M,N,B,H,q;for(c.length=u.length=0,_=e+2;_<s;_+=6){if(m=i[_+4]-o,p=i[_+2]-o,x=i[_]-o,b=i[_+5]-a,A=i[_+3]-a,T=i[_+1]-a,y=v=C=S=0,Ki(m)<.01&&Ki(b)<.01&&Ki(x)+Ki(T)<.01)i.length>8&&(i.splice(_,6),_-=6,s-=6);else for(g=1;g<=n;g++)N=r*g,M=1-N,y=v-(v=(N*N*m+3*M*(N*p+M*x))*N),C=S-(S=(N*N*b+3*M*(N*A+M*T))*N),H=es(C*C+y*y),H<f&&(f=H),d+=H,c[l++]=d;o+=m,a+=b}if(h)for(h-=d;l<c.length;l++)c[l]+=h;if(c.length&&f){if(i.totalLength=q=c[c.length-1]||0,i.minLength=f,q/f<9999)for(H=B=0,g=0;g<q;g+=f)u[H++]=c[B]<g?++B:B}else i.totalLength=c[0]=0;return e?d-c[e/2-1]:d}function Uo(i,e){var t,n,r;for(r=t=n=0;r<i.length;r++)i[r].resolution=~~e||12,n+=i[r].length,t+=bR(i[r]);return i.totalPoints=n,i.totalLength=t,i}function Cp(i,e,t){if(t<=0||t>=1)return 0;var n=i[e],r=i[e+1],s=i[e+2],o=i[e+3],a=i[e+4],l=i[e+5],c=i[e+6],u=i[e+7],f=n+(s-n)*t,h=s+(a-s)*t,d=r+(o-r)*t,g=o+(l-o)*t,_=f+(h-f)*t,m=d+(g-d)*t,p=a+(c-a)*t,x=l+(u-l)*t;return h+=(p-h)*t,g+=(x-g)*t,i.splice(e+2,4,xt(f),xt(d),xt(_),xt(m),xt(_+(h-_)*t),xt(m+(g-m)*t),xt(h),xt(g),xt(p),xt(x)),i.samples&&i.samples.splice(e/6*i.resolution|0,0,0,0,0,0,0,0),6}function F0(i,e,t,n){t=t||{},i.totalLength||Uo(i),(e<0||e>1)&&(e=TM(e));var r=0,s=i[0],o,a,l,c,u,f,h;if(!e)h=f=r=0,s=i[0];else if(e===1)h=1,r=i.length-1,s=i[r],f=s.length-8;else{if(i.length>1){for(l=i.totalLength*e,u=f=0;(u+=i[f++].totalLength)<l;)r=f;s=i[r],c=u-s.totalLength,e=(l-c)/(u-c)||0}o=s.samples,a=s.resolution,l=s.totalLength*e,f=s.lookup.length?s.lookup[~~(l/s.minLength)]||0:EM(o,l,e),c=f?o[f-1]:0,u=o[f],u<l&&(c=u,u=o[++f]),h=1/a*((l-c)/(u-c)+f%a),f=~~(f/a)*6,n&&h===1&&(f+6<s.length?(f+=6,h=0):r+1<i.length&&(f=h=0,s=i[++r]))}return t.t=h,t.i=f,t.path=i,t.segment=s,t.segIndex=r,t}function B0(i,e,t,n){var r=i[0],s=n||{},o,a,l,c,u,f,h,d,g;if((e<0||e>1)&&(e=TM(e)),r.lookup||Uo(i),i.length>1){for(l=i.totalLength*e,u=f=0;(u+=i[f++].totalLength)<l;)r=i[f];c=u-r.totalLength,e=(l-c)/(u-c)||0}return o=r.samples,a=r.resolution,l=r.totalLength*e,f=r.lookup.length?r.lookup[e<1?~~(l/r.minLength):r.lookup.length-1]||0:EM(o,l,e),c=f?o[f-1]:0,u=o[f],u<l&&(c=u,u=o[++f]),h=1/a*((l-c)/(u-c)+f%a)||0,g=1-h,f=~~(f/a)*6,d=r[f],s.x=xt((h*h*(r[f+6]-d)+3*g*(h*(r[f+4]-d)+g*(r[f+2]-d)))*h+d),s.y=xt((h*h*(r[f+7]-(d=r[f+1]))+3*g*(h*(r[f+5]-d)+g*(r[f+3]-d)))*h+d),t&&(s.angle=r.totalLength?wM(r,f,h>=1?1-1e-9:h||1e-9):r.angle||0),s}function jl(i,e,t,n,r,s,o){for(var a=i.length,l,c,u,f,h;--a>-1;)for(l=i[a],c=l.length,u=0;u<c;u+=2)f=l[u],h=l[u+1],l[u]=f*e+h*n+s,l[u+1]=f*t+h*r+o;return i._dirty=1,i}function TR(i,e,t,n,r,s,o,a,l){if(!(i===a&&e===l)){t=Ki(t),n=Ki(n);var c=r%360*cR,u=fu(c),f=uu(c),h=Math.PI,d=h*2,g=(i-a)/2,_=(e-l)/2,m=u*g+f*_,p=-f*g+u*_,x=m*m,y=p*p,v=x/(t*t)+y/(n*n);v>1&&(t=es(v)*t,n=es(v)*n);var b=t*t,A=n*n,T=(b*A-b*y-A*x)/(b*y+A*x);T<0&&(T=0);var C=(s===o?-1:1)*es(T),S=C*(t*p/n),M=C*-(n*m/t),N=(i+a)/2,B=(e+l)/2,H=N+(u*S-f*M),q=B+(f*S+u*M),Q=(m-S)/t,W=(p-M)/n,j=(-m-S)/t,V=(-p-M)/n,he=Q*Q+W*W,U=(W<0?-1:1)*Math.acos(Q/es(he)),_e=(Q*V-W*j<0?-1:1)*Math.acos((Q*j+W*V)/es(he*(j*j+V*V)));isNaN(_e)&&(_e=h),!o&&_e>0?_e-=d:o&&_e<0&&(_e+=d),U%=d,_e%=d;var Ce=Math.ceil(Ki(_e)/(d/4)),He=[],te=_e/Ce,de=4/3*uu(te/2)/(1+fu(te/2)),ye=u*t,k=f*t,oe=f*-n,le=u*n,ae;for(ae=0;ae<Ce;ae++)r=U+ae*te,m=fu(r),p=uu(r),Q=fu(r+=te),W=uu(r),He.push(m-de*p,p+de*m,Q+de*W,W-de*Q,Q,W);for(ae=0;ae<He.length;ae+=2)m=He[ae],p=He[ae+1],He[ae]=m*ye+p*oe+H,He[ae+1]=m*k+p*le+q;return He[ae-2]=a,He[ae-1]=l,He}}function Gf(i){var e=(i+"").replace(aR,function(S){var M=+S;return M<1e-4&&M>-1e-4?0:M}).match(sR)||[],t=[],n=0,r=0,s=2/3,o=e.length,a=0,l="ERROR: malformed path: "+i,c,u,f,h,d,g,_,m,p,x,y,v,b,A,T,C=function(M,N,B,H){x=(B-M)/3,y=(H-N)/3,_.push(M+x,N+y,B-x,H-y,B,H)};if(!i||!isNaN(e[0])||isNaN(e[1]))return console.log(l),t;for(c=0;c<o;c++)if(b=d,isNaN(e[c])?(d=e[c].toUpperCase(),g=d!==e[c]):c--,f=+e[c+1],h=+e[c+2],g&&(f+=n,h+=r),c||(m=f,p=h),d==="M")_&&(_.length<8?t.length-=1:a+=_.length),n=m=f,r=p=h,_=[f,h],t.push(_),c+=2,d="L";else if(d==="C")_||(_=[0,0]),g||(n=r=0),_.push(f,h,n+e[c+3]*1,r+e[c+4]*1,n+=e[c+5]*1,r+=e[c+6]*1),c+=6;else if(d==="S")x=n,y=r,(b==="C"||b==="S")&&(x+=n-_[_.length-4],y+=r-_[_.length-3]),g||(n=r=0),_.push(x,y,f,h,n+=e[c+3]*1,r+=e[c+4]*1),c+=4;else if(d==="Q")x=n+(f-n)*s,y=r+(h-r)*s,g||(n=r=0),n+=e[c+3]*1,r+=e[c+4]*1,_.push(x,y,n+(f-n)*s,r+(h-r)*s,n,r),c+=4;else if(d==="T")x=n-_[_.length-4],y=r-_[_.length-3],_.push(n+x,r+y,f+(n+x*1.5-f)*s,h+(r+y*1.5-h)*s,n=f,r=h),c+=2;else if(d==="H")C(n,r,n=f,r),c+=1;else if(d==="V")C(n,r,n,r=f+(g?r-n:0)),c+=1;else if(d==="L"||d==="Z")d==="Z"&&(f=m,h=p,_.closed=!0),(d==="L"||Ki(n-f)>.5||Ki(r-h)>.5)&&(C(n,r,f,h),d==="L"&&(c+=2)),n=f,r=h;else if(d==="A"){if(A=e[c+4],T=e[c+5],x=e[c+6],y=e[c+7],u=7,A.length>1&&(A.length<3?(y=x,x=T,u--):(y=T,x=A.substr(2),u-=2),T=A.charAt(1),A=A.charAt(0)),v=TR(n,r,+e[c+1],+e[c+2],+e[c+3],+A,+T,(g?n:0)+x*1,(g?r:0)+y*1),c+=u,v)for(u=0;u<v.length;u++)_.push(v[u]);n=_[_.length-2],r=_[_.length-1]}else console.log(l);return c=_.length,c<6?(t.pop(),c=0):_[0]===_[c-2]&&_[1]===_[c-1]&&(_.closed=!0),t.totalPoints=a+c,t}function ER(i,e){e===void 0&&(e=1);for(var t=i[0],n=0,r=[t,n],s=2;s<i.length;s+=2)r.push(t,n,i[s],n=(i[s]-t)*e/2,t=i[s],-n);return r}function Pp(i,e){Ki(i[0]-i[2])<1e-4&&Ki(i[1]-i[3])<1e-4&&(i=i.slice(2));var t=i.length-2,n=+i[0],r=+i[1],s=+i[2],o=+i[3],a=[n,r,n,r],l=s-n,c=o-r,u=Math.abs(i[t]-n)<.001&&Math.abs(i[t+1]-r)<.001,f,h,d,g,_,m,p,x,y,v,b,A,T,C,S;for(u&&(i.push(s,o),s=n,o=r,n=i[t-2],r=i[t-1],i.unshift(n,r),t+=4),e=e||e===0?+e:1,d=2;d<t;d+=2)f=n,h=r,n=s,r=o,s=+i[d+2],o=+i[d+3],!(n===s&&r===o)&&(g=l,_=c,l=s-n,c=o-r,m=es(g*g+_*_),p=es(l*l+c*c),x=es(Math.pow(l/p+g/m,2)+Math.pow(c/p+_/m,2)),y=(m+p)*e*.25/x,v=n-(n-f)*(m?y/m:0),b=n+(s-n)*(p?y/p:0),A=n-(v+((b-v)*(m*3/(m+p)+.5)/4||0)),T=r-(r-h)*(m?y/m:0),C=r+(o-r)*(p?y/p:0),S=r-(T+((C-T)*(m*3/(m+p)+.5)/4||0)),(n!==f||r!==h)&&a.push(xt(v+A),xt(T+S),xt(n),xt(r),xt(b+A),xt(C+S)));return n!==s||r!==o||a.length<4?a.push(xt(s),xt(o),xt(s),xt(o)):a.length-=2,a.length===2?a.push(n,r,n,r,n,r):u&&(a.splice(0,6),a.length=a.length-6),a}function RM(i){bM(i[0])&&(i=[i]);var e="",t=i.length,n,r,s,o;for(r=0;r<t;r++){for(o=i[r],e+="M"+xt(o[0])+","+xt(o[1])+" C",n=o.length,s=2;s<n;s++)e+=xt(o[s++])+","+xt(o[s++])+" "+xt(o[s++])+","+xt(o[s++])+" "+xt(o[s++])+","+xt(o[s])+" ";o.closed&&(e+="z")}return e}/*!
 * matrix 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ns,Oo,Lg,bh,Yl,hf,Wf,hc,lr="transform",Dp=lr+"Origin",CM,PM=function(e){var t=e.ownerDocument||e;for(!(lr in e.style)&&("msTransform"in e.style)&&(lr="msTransform",Dp=lr+"Origin");t.parentNode&&(t=t.parentNode););if(Oo=window,Wf=new Vc,t){ns=t,Lg=t.documentElement,bh=t.body,hc=ns.createElementNS("http://www.w3.org/2000/svg","g"),hc.style.transform="none";var n=t.createElement("div"),r=t.createElement("div"),s=t&&(t.body||t.firstElementChild);s&&s.appendChild&&(s.appendChild(n),n.appendChild(r),n.setAttribute("style","position:static;transform:translate3d(0,0,1px)"),CM=r.offsetParent!==n,s.removeChild(n))}return t},wR=function(e){for(var t,n;e&&e!==bh;)n=e._gsap,n&&n.uncache&&n.get(e,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),t?t.push(n):t=[n]),e=e.parentNode;return t},DM=[],LM=[],AR=function(){return Oo.pageYOffset||ns.scrollTop||Lg.scrollTop||bh.scrollTop||0},RR=function(){return Oo.pageXOffset||ns.scrollLeft||Lg.scrollLeft||bh.scrollLeft||0},Ig=function(e){return e.ownerSVGElement||((e.tagName+"").toLowerCase()==="svg"?e:null)},CR=function i(e){if(Oo.getComputedStyle(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return i(e)},ed=function i(e,t){if(e.parentNode&&(ns||PM(e))){var n=Ig(e),r=n?n.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",s=n?t?"rect":"g":"div",o=t!==2?0:100,a=t===3?100:0,l="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",c=ns.createElementNS?ns.createElementNS(r.replace(/^https/,"http"),s):ns.createElement(s);return t&&(n?(hf||(hf=i(e)),c.setAttribute("width",.01),c.setAttribute("height",.01),c.setAttribute("transform","translate("+o+","+a+")"),hf.appendChild(c)):(Yl||(Yl=i(e),Yl.style.cssText=l),c.style.cssText=l+"width:0.1px;height:0.1px;top:"+a+"px;left:"+o+"px",Yl.appendChild(c))),c}throw"Need document and parent."},PR=function(e){for(var t=new Vc,n=0;n<e.numberOfItems;n++)t.multiply(e.getItem(n).matrix);return t},DR=function(e){var t=e.getCTM(),n;return t||(n=e.style[lr],e.style[lr]="none",e.appendChild(hc),t=hc.getCTM(),e.removeChild(hc),n?e.style[lr]=n:e.style.removeProperty(lr.replace(/([A-Z])/g,"-$1").toLowerCase())),t||Wf.clone()},LR=function(e,t){var n=Ig(e),r=e===n,s=n?DM:LM,o=e.parentNode,a,l,c,u,f,h;if(e===Oo)return e;if(s.length||s.push(ed(e,1),ed(e,2),ed(e,3)),a=n?hf:Yl,n)r?(c=DR(e),u=-c.e/c.a,f=-c.f/c.d,l=Wf):e.getBBox?(c=e.getBBox(),l=e.transform?e.transform.baseVal:{},l=l.numberOfItems?l.numberOfItems>1?PR(l):l.getItem(0).matrix:Wf,u=l.a*c.x+l.c*c.y,f=l.b*c.x+l.d*c.y):(l=new Vc,u=f=0),t&&e.tagName.toLowerCase()==="g"&&(u=f=0),(r?n:o).appendChild(a),a.setAttribute("transform","matrix("+l.a+","+l.b+","+l.c+","+l.d+","+(l.e+u)+","+(l.f+f)+")");else{if(u=f=0,CM)for(l=e.offsetParent,c=e;c&&(c=c.parentNode)&&c!==l&&c.parentNode;)(Oo.getComputedStyle(c)[lr]+"").length>4&&(u=c.offsetLeft,f=c.offsetTop,c=0);if(h=Oo.getComputedStyle(e),h.position!=="absolute"&&h.position!=="fixed")for(l=e.offsetParent;o&&o!==l;)u+=o.scrollLeft||0,f+=o.scrollTop||0,o=o.parentNode;c=a.style,c.top=e.offsetTop-f+"px",c.left=e.offsetLeft-u+"px",c[lr]=h[lr],c[Dp]=h[Dp],c.position=h.position==="fixed"?"fixed":"absolute",e.parentNode.appendChild(a)}return a},td=function(e,t,n,r,s,o,a){return e.a=t,e.b=n,e.c=r,e.d=s,e.e=o,e.f=a,e},Vc=function(){function i(t,n,r,s,o,a){t===void 0&&(t=1),n===void 0&&(n=0),r===void 0&&(r=0),s===void 0&&(s=1),o===void 0&&(o=0),a===void 0&&(a=0),td(this,t,n,r,s,o,a)}var e=i.prototype;return e.inverse=function(){var n=this.a,r=this.b,s=this.c,o=this.d,a=this.e,l=this.f,c=n*o-r*s||1e-10;return td(this,o/c,-r/c,-s/c,n/c,(s*l-o*a)/c,-(n*l-r*a)/c)},e.multiply=function(n){var r=this.a,s=this.b,o=this.c,a=this.d,l=this.e,c=this.f,u=n.a,f=n.c,h=n.b,d=n.d,g=n.e,_=n.f;return td(this,u*r+h*o,u*s+h*a,f*r+d*o,f*s+d*a,l+g*r+_*o,c+g*s+_*a)},e.clone=function(){return new i(this.a,this.b,this.c,this.d,this.e,this.f)},e.equals=function(n){var r=this.a,s=this.b,o=this.c,a=this.d,l=this.e,c=this.f;return r===n.a&&s===n.b&&o===n.c&&a===n.d&&l===n.e&&c===n.f},e.apply=function(n,r){r===void 0&&(r={});var s=n.x,o=n.y,a=this.a,l=this.b,c=this.c,u=this.d,f=this.e,h=this.f;return r.x=s*a+o*c+f||0,r.y=s*l+o*u+h||0,r},i}();function Ha(i,e,t,n){if(!i||!i.parentNode||(ns||PM(i)).documentElement===i)return new Vc;var r=wR(i),s=Ig(i),o=s?DM:LM,a=LR(i,t),l=o[0].getBoundingClientRect(),c=o[1].getBoundingClientRect(),u=o[2].getBoundingClientRect(),f=a.parentNode,h=!n&&CR(i),d=new Vc((c.left-l.left)/100,(c.top-l.top)/100,(u.left-l.left)/100,(u.top-l.top)/100,l.left+(h?0:RR()),l.top+(h?0:AR()));if(f.removeChild(a),r)for(l=r.length;l--;)c=r[l],c.scaleX=c.scaleY=0,c.renderTransform(1,c);return e?d.inverse():d}/*!
 * MotionPathPlugin 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var IR="x,translateX,left,marginLeft,xPercent".split(","),NR="y,translateY,top,marginTop,yPercent".split(","),UR=Math.PI/180,ji,IM,Sa,Lp,nd,k0,OR=function(){return ji||typeof window<"u"&&(ji=window.gsap)&&ji.registerPlugin&&ji},Dl=function(e,t,n,r){for(var s=t.length,o=r===2?0:r,a=0;a<s;a++)e[o]=parseFloat(t[a][n]),r===2&&(e[o+1]=0),o+=2;return e},Ra=function(e,t,n){return parseFloat(e._gsap.get(e,t,n||"px"))||0},NM=function(e){var t=e[0],n=e[1],r;for(r=2;r<e.length;r+=2)t=e[r]+=t,n=e[r+1]+=n},z0=function(e,t,n,r,s,o,a,l,c){if(a.type==="cubic")t=[t];else{a.fromCurrent!==!1&&t.unshift(Ra(n,r,l),s?Ra(n,s,c):0),a.relative&&NM(t);var u=s?Pp:ER;t=[u(t,a.curviness)]}return t=o(UM(t,n,a)),Xf(e,n,r,t,"x",l),s&&Xf(e,n,s,t,"y",c),Uo(t,a.resolution||(a.curviness===0?20:12))},FR=function(e){return e},BR=/[-+\.]*\d+\.?(?:e-|e\+)?\d*/g,H0=function(e,t,n){var r=Ha(e),s=0,o=0,a;return(e.tagName+"").toLowerCase()==="svg"?(a=e.viewBox.baseVal,a.width||(a={width:+e.getAttribute("width"),height:+e.getAttribute("height")})):a=t&&e.getBBox&&e.getBBox(),t&&t!=="auto"&&(s=t.push?t[0]*(a?a.width:e.offsetWidth||0):t.x,o=t.push?t[1]*(a?a.height:e.offsetHeight||0):t.y),n.apply(s||o?r.apply({x:s,y:o}):{x:r.e,y:r.f})},Ip=function(e,t,n,r){var s=Ha(e.parentNode,!0,!0),o=s.clone().multiply(Ha(t)),a=H0(e,n,s),l=H0(t,r,s),c=l.x,u=l.y,f;return o.e=o.f=0,r==="auto"&&t.getTotalLength&&t.tagName.toLowerCase()==="path"&&(f=t.getAttribute("d").match(BR)||[],f=o.apply({x:+f[0],y:+f[1]}),c+=f.x,u+=f.y),f&&(f=o.apply(t.getBBox()),c-=f.x,u-=f.y),o.e=c-a.x,o.f=u-a.y,o},UM=function(e,t,n){var r=n.align,s=n.matrix,o=n.offsetX,a=n.offsetY,l=n.alignOrigin,c=e[0][0],u=e[0][1],f=Ra(t,"x"),h=Ra(t,"y"),d,g,_;return!e||!e.length?ff("M0,0L0,0"):(r&&(r==="self"||(d=Lp(r)[0]||t)===t?jl(e,1,0,0,1,f-c,h-u):(l&&l[2]!==!1?ji.set(t,{transformOrigin:l[0]*100+"% "+l[1]*100+"%"}):l=[Ra(t,"xPercent")/-100,Ra(t,"yPercent")/-100],g=Ip(t,d,l,"auto"),_=g.apply({x:c,y:u}),jl(e,g.a,g.b,g.c,g.d,f+g.e-(_.x-g.e),h+g.f-(_.y-g.f)))),s?jl(e,s.a,s.b,s.c,s.d,s.e,s.f):(o||a)&&jl(e,1,0,0,1,o||0,a||0),e)},Xf=function(e,t,n,r,s,o){var a=t._gsap,l=a.harness,c=l&&l.aliases&&l.aliases[n],u=c&&c.indexOf(",")<0?c:n,f=e._pt=new IM(e._pt,t,u,0,0,FR,0,a.set(t,u,e));f.u=Sa(a.get(t,u,o))||0,f.path=r,f.pp=s,e._props.push(u)},kR=function(e,t){return function(n){return e||t!==1?AM(n,e,t):n}},OM={version:"3.12.7",name:"motionPath",register:function(e,t,n){ji=e,Sa=ji.utils.getUnit,Lp=ji.utils.toArray,nd=ji.core.getStyleSaver,k0=ji.core.reverting||function(){},IM=n},init:function(e,t,n){if(!ji)return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"),!1;(!(typeof t=="object"&&!t.style)||!t.path)&&(t={path:t});var r=[],s=t,o=s.path,a=s.autoRotate,l=s.unitX,c=s.unitY,u=s.x,f=s.y,h=o[0],d=kR(t.start,"end"in t?t.end:1),g,_;if(this.rawPaths=r,this.target=e,this.tween=n,this.styles=nd&&nd(e,"transform"),(this.rotate=a||a===0)&&(this.rOffset=parseFloat(a)||0,this.radians=!!t.useRadians,this.rProp=t.rotation||"rotation",this.rSet=e._gsap.set(e,this.rProp,this),this.ru=Sa(e._gsap.get(e,this.rProp))||0),Array.isArray(o)&&!("closed"in o)&&typeof h!="number"){for(_ in h)!u&&~IR.indexOf(_)?u=_:!f&&~NR.indexOf(_)&&(f=_);u&&f?r.push(z0(this,Dl(Dl([],o,u,0),o,f,1),e,u,f,d,t,l||Sa(o[0][u]),c||Sa(o[0][f]))):u=f=0;for(_ in h)_!==u&&_!==f&&r.push(z0(this,Dl([],o,_,2),e,_,0,d,t,Sa(o[0][_])))}else g=d(UM(ff(t.path),e,t)),Uo(g,t.resolution),r.push(g),Xf(this,e,t.x||"x",g,"x",t.unitX||"px"),Xf(this,e,t.y||"y",g,"y",t.unitY||"px");n.vars.immediateRender&&this.render(n.progress(),this)},render:function(e,t){var n=t.rawPaths,r=n.length,s=t._pt;if(t.tween._time||!k0()){for(e>1?e=1:e<0&&(e=0);r--;)B0(n[r],e,!r&&t.rotate,n[r]);for(;s;)s.set(s.t,s.p,s.path[s.pp]+s.u,s.d,e),s=s._next;t.rotate&&t.rSet(t.target,t.rProp,n[0].angle*(t.radians?UR:1)+t.rOffset+t.ru,t,e)}else t.styles.revert()},getLength:function(e){return Uo(ff(e)).totalLength},sliceRawPath:AM,getRawPath:ff,pointsToSegment:Pp,stringToRawPath:Gf,rawPathToString:RM,transformRawPath:jl,getGlobalMatrix:Ha,getPositionOnPath:B0,cacheRawPathMeasurements:Uo,convertToPath:function(e,t){return Lp(e).map(function(n){return MR(n,t!==!1)})},convertCoordinates:function(e,t,n){var r=Ha(t,!0,!0).multiply(Ha(e));return n?r.apply(n):r},getAlignMatrix:Ip,getRelativePosition:function(e,t,n,r){var s=Ip(e,t,n,r);return{x:s.e,y:s.f}},arrayToRawPath:function(e,t){t=t||{};var n=Dl(Dl([],e,t.x||"x",0),e,t.y||"y",1);return t.relative&&NM(n),[t.type==="cubic"?n:Pp(n,t.curviness)]}};OR()&&ji.registerPlugin(OM);function zR(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function HR(i,e,t){return zR(i.prototype,e),i}/*!
 * Observer 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Pn,df,Li,Bs,ks,Va,FM,So,dc,BM,is,sr,kM,zM=function(){return Pn||typeof window<"u"&&(Pn=window.gsap)&&Pn.registerPlugin&&Pn},HM=1,Ca=[],ct=[],Lr=[],pc=Date.now,Np=function(e,t){return t},VR=function(){var e=dc.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,ct),r.push.apply(r,Lr),ct=n,Lr=r,Np=function(o,a){return t[o](a)}},Ys=function(e,t){return~Lr.indexOf(e)&&Lr[Lr.indexOf(e)+1][t]},mc=function(e){return!!~BM.indexOf(e)},Jn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:r!==!1,capture:!!s})},$n=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},hu="scrollLeft",du="scrollTop",Up=function(){return is&&is.isPressed||ct.cache++},jf=function(e,t){var n=function r(s){if(s||s===0){HM&&(Li.history.scrollRestoration="manual");var o=is&&is.isPressed;s=r.v=Math.round(s)||(is&&is.iOS?1:0),e(s),r.cacheID=ct.cache,o&&Np("ss",s)}else(t||ct.cache!==r.cacheID||Np("ref"))&&(r.cacheID=ct.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},li={s:hu,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:jf(function(i){return arguments.length?Li.scrollTo(i,pn.sc()):Li.pageXOffset||Bs[hu]||ks[hu]||Va[hu]||0})},pn={s:du,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:li,sc:jf(function(i){return arguments.length?Li.scrollTo(li.sc(),i):Li.pageYOffset||Bs[du]||ks[du]||Va[du]||0})},pi=function(e,t){return(t&&t._ctx&&t._ctx.selector||Pn.utils.toArray)(e)[0]||(typeof e=="string"&&Pn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Zs=function(e,t){var n=t.s,r=t.sc;mc(e)&&(e=Bs.scrollingElement||ks);var s=ct.indexOf(e),o=r===pn.sc?1:2;!~s&&(s=ct.push(e)-1),ct[s+o]||Jn(e,"scroll",Up);var a=ct[s+o],l=a||(ct[s+o]=jf(Ys(e,n),!0)||(mc(e)?r:jf(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=Pn.getProperty(e,"scrollBehavior")==="smooth"),l},Op=function(e,t,n){var r=e,s=e,o=pc(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=pc();_||m-o>l?(s=r,r=g,a=o,o=m):n?r+=g:r=s+(g-s)/(m-a)*(o-a)},f=function(){s=r=n?0:r,a=o=0},h=function(g){var _=a,m=s,p=pc();return(g||g===0)&&g!==r&&u(g),o===a||p-a>c?0:(r+(n?m:-m))/((n?p:o)-_)*1e3};return{update:u,reset:f,getVelocity:h}},Ll=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},V0=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},VM=function(){dc=Pn.core.globals().ScrollTrigger,dc&&dc.core&&VR()},GM=function(e){return Pn=e||zM(),!df&&Pn&&typeof document<"u"&&document.body&&(Li=window,Bs=document,ks=Bs.documentElement,Va=Bs.body,BM=[Li,Bs,ks,Va],Pn.utils.clamp,kM=Pn.core.context||function(){},So="onpointerenter"in Va?"pointer":"mouse",FM=Jt.isTouch=Li.matchMedia&&Li.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Li||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,sr=Jt.eventTypes=("ontouchstart"in ks?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ks?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return HM=0},500),VM(),df=1),df};li.op=pn;ct.cache=0;var Jt=function(){function i(t){this.init(t)}var e=i.prototype;return e.init=function(n){df||GM(Pn)||console.warn("Please gsap.registerPlugin(Observer)"),dc||VM();var r=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,x=n.onDrag,y=n.onPress,v=n.onRelease,b=n.onRight,A=n.onLeft,T=n.onUp,C=n.onDown,S=n.onChangeX,M=n.onChangeY,N=n.onChange,B=n.onToggleX,H=n.onToggleY,q=n.onHover,Q=n.onHoverEnd,W=n.onMove,j=n.ignoreCheck,V=n.isNormalizer,he=n.onGestureStart,U=n.onGestureEnd,_e=n.onWheel,Ce=n.onEnable,He=n.onDisable,te=n.onClick,de=n.scrollSpeed,ye=n.capture,k=n.allowClicks,oe=n.lockAxis,le=n.onLockAxis;this.target=a=pi(a)||ks,this.vars=n,d&&(d=Pn.utils.toArray(d)),r=r||1e-9,s=s||0,g=g||1,de=de||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Li.getComputedStyle(Va).lineHeight)||22);var ae,Le,I,D,w,re,J,L=this,ie=0,ue=0,ne=n.passive||!u&&n.passive!==!1,R=Zs(a,li),E=Zs(a,pn),O=R(),Y=E(),$=~o.indexOf("touch")&&!~o.indexOf("pointer")&&sr[0]==="pointerdown",Z=mc(a),pe=a.ownerDocument||Bs,fe=[0,0,0],xe=[0,0,0],Be=0,me=function(){return Be=pc()},ve=function(Ne,tt){return(L.event=Ne)&&d&&~d.indexOf(Ne.target)||tt&&$&&Ne.pointerType!=="touch"||j&&j(Ne,tt)},Ue=function(){L._vx.reset(),L._vy.reset(),Le.pause(),f&&f(L)},ke=function(){var Ne=L.deltaX=V0(fe),tt=L.deltaY=V0(xe),we=Math.abs(Ne)>=r,Ze=Math.abs(tt)>=r;N&&(we||Ze)&&N(L,Ne,tt,fe,xe),we&&(b&&L.deltaX>0&&b(L),A&&L.deltaX<0&&A(L),S&&S(L),B&&L.deltaX<0!=ie<0&&B(L),ie=L.deltaX,fe[0]=fe[1]=fe[2]=0),Ze&&(C&&L.deltaY>0&&C(L),T&&L.deltaY<0&&T(L),M&&M(L),H&&L.deltaY<0!=ue<0&&H(L),ue=L.deltaY,xe[0]=xe[1]=xe[2]=0),(D||I)&&(W&&W(L),I&&(m&&I===1&&m(L),x&&x(L),I=0),D=!1),re&&!(re=!1)&&le&&le(L),w&&(_e(L),w=!1),ae=0},Se=function(Ne,tt,we){fe[we]+=Ne,xe[we]+=tt,L._vx.update(Ne),L._vy.update(tt),c?ae||(ae=requestAnimationFrame(ke)):ke()},We=function(Ne,tt){oe&&!J&&(L.axis=J=Math.abs(Ne)>Math.abs(tt)?"x":"y",re=!0),J!=="y"&&(fe[2]+=Ne,L._vx.update(Ne,!0)),J!=="x"&&(xe[2]+=tt,L._vy.update(tt,!0)),c?ae||(ae=requestAnimationFrame(ke)):ke()},Xe=function(Ne){if(!ve(Ne,1)){Ne=Ll(Ne,u);var tt=Ne.clientX,we=Ne.clientY,Ze=tt-L.x,Oe=we-L.y,Ke=L.isDragging;L.x=tt,L.y=we,(Ke||(Ze||Oe)&&(Math.abs(L.startX-tt)>=s||Math.abs(L.startY-we)>=s))&&(I=Ke?2:1,Ke||(L.isDragging=!0),We(Ze,Oe))}},pt=L.onPress=function(Re){ve(Re,1)||Re&&Re.button||(L.axis=J=null,Le.pause(),L.isPressed=!0,Re=Ll(Re),ie=ue=0,L.startX=L.x=Re.clientX,L.startY=L.y=Re.clientY,L._vx.reset(),L._vy.reset(),Jn(V?a:pe,sr[1],Xe,ne,!0),L.deltaX=L.deltaY=0,y&&y(L))},F=L.onRelease=function(Re){if(!ve(Re,1)){$n(V?a:pe,sr[1],Xe,!0);var Ne=!isNaN(L.y-L.startY),tt=L.isDragging,we=tt&&(Math.abs(L.x-L.startX)>3||Math.abs(L.y-L.startY)>3),Ze=Ll(Re);!we&&Ne&&(L._vx.reset(),L._vy.reset(),u&&k&&Pn.delayedCall(.08,function(){if(pc()-Be>300&&!Re.defaultPrevented){if(Re.target.click)Re.target.click();else if(pe.createEvent){var Oe=pe.createEvent("MouseEvents");Oe.initMouseEvent("click",!0,!0,Li,1,Ze.screenX,Ze.screenY,Ze.clientX,Ze.clientY,!1,!1,!1,!1,0,null),Re.target.dispatchEvent(Oe)}}})),L.isDragging=L.isGesturing=L.isPressed=!1,f&&tt&&!V&&Le.restart(!0),I&&ke(),p&&tt&&p(L),v&&v(L,we)}},be=function(Ne){return Ne.touches&&Ne.touches.length>1&&(L.isGesturing=!0)&&he(Ne,L.isDragging)},se=function(){return(L.isGesturing=!1)||U(L)},ce=function(Ne){if(!ve(Ne)){var tt=R(),we=E();Se((tt-O)*de,(we-Y)*de,1),O=tt,Y=we,f&&Le.restart(!0)}},Me=function(Ne){if(!ve(Ne)){Ne=Ll(Ne,u),_e&&(w=!0);var tt=(Ne.deltaMode===1?l:Ne.deltaMode===2?Li.innerHeight:1)*g;Se(Ne.deltaX*tt,Ne.deltaY*tt,0),f&&!V&&Le.restart(!0)}},Ee=function(Ne){if(!ve(Ne)){var tt=Ne.clientX,we=Ne.clientY,Ze=tt-L.x,Oe=we-L.y;L.x=tt,L.y=we,D=!0,f&&Le.restart(!0),(Ze||Oe)&&We(Ze,Oe)}},$e=function(Ne){L.event=Ne,q(L)},mt=function(Ne){L.event=Ne,Q(L)},jt=function(Ne){return ve(Ne)||Ll(Ne,u)&&te(L)};Le=L._dc=Pn.delayedCall(h||.25,Ue).pause(),L.deltaX=L.deltaY=0,L._vx=Op(0,50,!0),L._vy=Op(0,50,!0),L.scrollX=R,L.scrollY=E,L.isDragging=L.isGesturing=L.isPressed=!1,kM(this),L.enable=function(Re){return L.isEnabled||(Jn(Z?pe:a,"scroll",Up),o.indexOf("scroll")>=0&&Jn(Z?pe:a,"scroll",ce,ne,ye),o.indexOf("wheel")>=0&&Jn(a,"wheel",Me,ne,ye),(o.indexOf("touch")>=0&&FM||o.indexOf("pointer")>=0)&&(Jn(a,sr[0],pt,ne,ye),Jn(pe,sr[2],F),Jn(pe,sr[3],F),k&&Jn(a,"click",me,!0,!0),te&&Jn(a,"click",jt),he&&Jn(pe,"gesturestart",be),U&&Jn(pe,"gestureend",se),q&&Jn(a,So+"enter",$e),Q&&Jn(a,So+"leave",mt),W&&Jn(a,So+"move",Ee)),L.isEnabled=!0,L.isDragging=L.isGesturing=L.isPressed=D=I=!1,L._vx.reset(),L._vy.reset(),O=R(),Y=E(),Re&&Re.type&&pt(Re),Ce&&Ce(L)),L},L.disable=function(){L.isEnabled&&(Ca.filter(function(Re){return Re!==L&&mc(Re.target)}).length||$n(Z?pe:a,"scroll",Up),L.isPressed&&(L._vx.reset(),L._vy.reset(),$n(V?a:pe,sr[1],Xe,!0)),$n(Z?pe:a,"scroll",ce,ye),$n(a,"wheel",Me,ye),$n(a,sr[0],pt,ye),$n(pe,sr[2],F),$n(pe,sr[3],F),$n(a,"click",me,!0),$n(a,"click",jt),$n(pe,"gesturestart",be),$n(pe,"gestureend",se),$n(a,So+"enter",$e),$n(a,So+"leave",mt),$n(a,So+"move",Ee),L.isEnabled=L.isPressed=L.isDragging=!1,He&&He(L))},L.kill=L.revert=function(){L.disable();var Re=Ca.indexOf(L);Re>=0&&Ca.splice(Re,1),is===L&&(is=0)},Ca.push(L),V&&mc(a)&&(is=L),L.enable(_)},HR(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i}();Jt.version="3.12.7";Jt.create=function(i){return new Jt(i)};Jt.register=GM;Jt.getAll=function(){return Ca.slice()};Jt.getById=function(i){return Ca.filter(function(e){return e.vars.id===i})[0]};zM()&&Pn.registerPlugin(Jt);/*!
 * ScrollTrigger 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ie,Ma,lt,Ut,Pi,Tt,Ng,Yf,Gc,gc,ql,pu,Un,Th,Fp,ii,G0,W0,ba,WM,id,XM,ei,Bp,jM,YM,As,kp,Ug,Ga,Og,qf,zp,rd,mu=1,On=Date.now,sd=On(),Qi=0,$l=0,X0=function(e,t,n){var r=Ri(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},j0=function(e,t){return t&&(!Ri(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},GR=function i(){return $l&&requestAnimationFrame(i)},Y0=function(){return Th=1},q0=function(){return Th=0},Mr=function(e){return e},Kl=function(e){return Math.round(e*1e5)/1e5||0},qM=function(){return typeof window<"u"},$M=function(){return Ie||qM()&&(Ie=window.gsap)&&Ie.registerPlugin&&Ie},Wo=function(e){return!!~Ng.indexOf(e)},KM=function(e){return(e==="Height"?Og:lt["inner"+e])||Pi["client"+e]||Tt["client"+e]},ZM=function(e){return Ys(e,"getBoundingClientRect")||(Wo(e)?function(){return vf.width=lt.innerWidth,vf.height=Og,vf}:function(){return ts(e)})},WR=function(e,t,n){var r=n.d,s=n.d2,o=n.a;return(o=Ys(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?KM(s):e["client"+s])||0}},XR=function(e,t){return!t||~Lr.indexOf(e)?ZM(e):function(){return vf}},Ar=function(e,t){var n=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+r)&&(o=Ys(e,n))?o()-ZM(e)()[s]:Wo(e)?(Pi[n]||Tt[n])-KM(r):e[n]-e["offset"+r])},gu=function(e,t){for(var n=0;n<ba.length;n+=3)(!t||~t.indexOf(ba[n+1]))&&e(ba[n],ba[n+1],ba[n+2])},Ri=function(e){return typeof e=="string"},zn=function(e){return typeof e=="function"},Zl=function(e){return typeof e=="number"},Mo=function(e){return typeof e=="object"},Il=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},od=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},ta=Math.abs,JM="left",QM="top",Fg="right",Bg="bottom",Fo="width",Bo="height",_c="Right",vc="Left",xc="Top",yc="Bottom",rn="padding",Yi="margin",ll="Width",kg="Height",dn="px",qi=function(e){return lt.getComputedStyle(e)},jR=function(e){var t=qi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},$0=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ts=function(e,t){var n=t&&qi(e)[Fp]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ie.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},$f=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},eb=function(e){var t=[],n=e.labels,r=e.duration(),s;for(s in n)t.push(n[s]/r);return t},YR=function(e){return function(t){return Ie.utils.snap(eb(e),t)}},zg=function(e){var t=Ie.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return n?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<n.length;a++)if(n[a]>=r)return n[a];return n[a-1]}else for(a=n.length,r+=o;a--;)if(n[a]<=r)return n[a];return n[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},qR=function(e){return function(t,n){return zg(eb(e))(t,n.direction)}},_u=function(e,t,n,r){return n.split(",").forEach(function(s){return e(t,s,r)})},xn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:!r,capture:!!s})},vn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},vu=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},K0={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},xu={toggleActions:"play",anticipatePin:0},Kf={top:0,left:0,center:.5,bottom:1,right:1},pf=function(e,t){if(Ri(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in Kf?Kf[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},yu=function(e,t,n,r,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,g=Ut.createElement("div"),_=Wo(n)||Ys(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?Tt:n,x=e.indexOf("start")!==-1,y=x?c:u,v="border-color:"+y+";font-size:"+f+";color:"+y+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(v+=(r===pn?Fg:Bg)+":"+(o+parseFloat(h))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=x,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=v,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+r.op.d2],mf(g,0,r,x),g},mf=function(e,t,n,r){var s={display:"block"},o=n[r?"os2":"p2"],a=n[r?"p2":"os2"];e._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+o+ll]=1,s["border"+a+ll]=0,s[n.p]=t+"px",Ie.set(e,s)},st=[],Hp={},Wc,Z0=function(){return On()-Qi>34&&(Wc||(Wc=requestAnimationFrame(ls)))},na=function(){(!ei||!ei.isPressed||ei.startX>Tt.clientWidth)&&(ct.cache++,ei?Wc||(Wc=requestAnimationFrame(ls)):ls(),Qi||jo("scrollStart"),Qi=On())},ad=function(){YM=lt.innerWidth,jM=lt.innerHeight},Jl=function(e){ct.cache++,(e===!0||!Un&&!XM&&!Ut.fullscreenElement&&!Ut.webkitFullscreenElement&&(!Bp||YM!==lt.innerWidth||Math.abs(lt.innerHeight-jM)>lt.innerHeight*.25))&&Yf.restart(!0)},Xo={},$R=[],tb=function i(){return vn(ft,"scrollEnd",i)||Ao(!0)},jo=function(e){return Xo[e]&&Xo[e].map(function(t){return t()})||$R},Ai=[],nb=function(e){for(var t=0;t<Ai.length;t+=5)(!e||Ai[t+4]&&Ai[t+4].query===e)&&(Ai[t].style.cssText=Ai[t+1],Ai[t].getBBox&&Ai[t].setAttribute("transform",Ai[t+2]||""),Ai[t+3].uncache=1)},Hg=function(e,t){var n;for(ii=0;ii<st.length;ii++)n=st[ii],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));qf=!0,t&&nb(t),t||jo("revert")},ib=function(e,t){ct.cache++,(t||!ri)&&ct.forEach(function(n){return zn(n)&&n.cacheID++&&(n.rec=0)}),Ri(e)&&(lt.history.scrollRestoration=Ug=e)},ri,ko=0,J0,KR=function(){if(J0!==ko){var e=J0=ko;requestAnimationFrame(function(){return e===ko&&Ao(!0)})}},rb=function(){Tt.appendChild(Ga),Og=!ei&&Ga.offsetHeight||lt.innerHeight,Tt.removeChild(Ga)},Q0=function(e){return Gc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Ao=function(e,t){if(Pi=Ut.documentElement,Tt=Ut.body,Ng=[lt,Ut,Pi,Tt],Qi&&!e&&!qf){xn(ft,"scrollEnd",tb);return}rb(),ri=ft.isRefreshing=!0,ct.forEach(function(r){return zn(r)&&++r.cacheID&&(r.rec=r())});var n=jo("refreshInit");WM&&ft.sort(),t||Hg(),ct.forEach(function(r){zn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),st.slice(0).forEach(function(r){return r.refresh()}),qf=!1,st.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),zp=1,Q0(!0),st.forEach(function(r){var s=Ar(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),Q0(!1),zp=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),ct.forEach(function(r){zn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),ib(Ug,1),Yf.pause(),ko++,ri=2,ls(2),st.forEach(function(r){return zn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),ri=ft.isRefreshing=!1,jo("refresh")},Vp=0,gf=1,Sc,ls=function(e){if(e===2||!ri&&!qf){ft.isUpdating=!0,Sc&&Sc.update(0);var t=st.length,n=On(),r=n-sd>=50,s=t&&st[0].scroll();if(gf=Vp>s?-1:1,ri||(Vp=s),r&&(Qi&&!Th&&n-Qi>200&&(Qi=0,jo("scrollEnd")),ql=sd,sd=n),gf<0){for(ii=t;ii-- >0;)st[ii]&&st[ii].update(0,r);gf=1}else for(ii=0;ii<t;ii++)st[ii]&&st[ii].update(0,r);ft.isUpdating=!1}Wc=0},Gp=[JM,QM,Bg,Fg,Yi+yc,Yi+_c,Yi+xc,Yi+vc,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],_f=Gp.concat([Fo,Bo,"boxSizing","max"+ll,"max"+kg,"position",Yi,rn,rn+xc,rn+_c,rn+yc,rn+vc]),ZR=function(e,t,n){Wa(n);var r=e._gsap;if(r.spacerIsNative)Wa(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},ld=function(e,t,n,r){if(!e._gsap.swappedIn){for(var s=Gp.length,o=t.style,a=e.style,l;s--;)l=Gp[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Bg]=a[Fg]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Fo]=$f(e,li)+dn,o[Bo]=$f(e,pn)+dn,o[rn]=a[Yi]=a[QM]=a[JM]="0",Wa(r),a[Fo]=a["max"+ll]=n[Fo],a[Bo]=a["max"+kg]=n[Bo],a[rn]=n[rn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},JR=/([A-Z])/g,Wa=function(e){if(e){var t=e.t.style,n=e.length,r=0,s,o;for((e.t._gsap||Ie.core.getCache(e.t)).uncache=1;r<n;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(JR,"-$1").toLowerCase())}},Su=function(e){for(var t=_f.length,n=e.style,r=[],s=0;s<t;s++)r.push(_f[s],n[_f[s]]);return r.t=e,r},QR=function(e,t,n){for(var r=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},vf={left:0,top:0},ev=function(e,t,n,r,s,o,a,l,c,u,f,h,d,g){zn(e)&&(e=e(l)),Ri(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?pf("0"+e.substr(3),n):0));var _=d?d.time():0,m,p,x;if(d&&d.seek(0),isNaN(e)||(e=+e),Zl(e))d&&(e=Ie.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),a&&mf(a,n,r,!0);else{zn(t)&&(t=t(l));var y=(e||"0").split(" "),v,b,A,T;x=pi(t,l)||Tt,v=ts(x)||{},(!v||!v.left&&!v.top)&&qi(x).display==="none"&&(T=x.style.display,x.style.display="block",v=ts(x),T?x.style.display=T:x.style.removeProperty("display")),b=pf(y[0],v[r.d]),A=pf(y[1]||"0",n),e=v[r.p]-c[r.p]-u+b+s-A,a&&mf(a,A,r,n-A<20||a._isStart&&A>20),n-=n-A}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var C=e+n,S=o._isStart;m="scroll"+r.d2,mf(o,C,r,S&&C>20||!S&&(f?Math.max(Tt[m],Pi[m]):o.parentNode[m])<=C+1),f&&(c=ts(a),f&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+dn))}return d&&x&&(m=ts(x),d.seek(h),p=ts(x),d._caScrollDist=m[r.p]-p[r.p],e=e/d._caScrollDist*h),d&&d.seek(_),d?e:Math.round(e)},eC=/(webkit|moz|length|cssText|inset)/i,tv=function(e,t,n,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===Tt){e._stOrig=s.cssText,a=qi(e);for(o in a)!+o&&!eC.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=r}else s.cssText=e._stOrig;Ie.core.getCache(e).uncache=1,t.appendChild(e)}},sb=function(e,t,n){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=r,r=Math.round(o),r}},Mu=function(e,t,n){var r={};r[t.p]="+="+n,Ie.set(e,r)},nv=function(e,t){var n=Zs(e,t),r="_scroll"+t.p2,s=function o(a,l,c,u,f){var h=o.tween,d=l.onComplete,g={};c=c||n();var _=sb(n,c,function(){h.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,h&&h.kill(),l[r]=a,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){ct.cache++,o.tween&&ls()},l.onComplete=function(){o.tween=0,d&&d.call(h)},h=o.tween=Ie.to(e,l),h};return e[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},xn(e,"wheel",n.wheelHandler),ft.isTouch&&xn(e,"touchmove",n.wheelHandler),s},ft=function(){function i(t,n){Ma||i.register(Ie)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),kp(this),this.init(t,n)}var e=i.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!$l){this.update=this.refresh=this.kill=Mr;return}n=$0(Ri(n)||Zl(n)||n.nodeType?{trigger:n}:n,xu);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,x=s.onSnapComplete,y=s.once,v=s.snap,b=s.pinReparent,A=s.pinSpacer,T=s.containerAnimation,C=s.fastScrollEnd,S=s.preventOverlaps,M=n.horizontal||n.containerAnimation&&n.horizontal!==!1?li:pn,N=!f&&f!==0,B=pi(n.scroller||lt),H=Ie.core.getCache(B),q=Wo(B),Q=("pinType"in n?n.pinType:Ys(B,"pinType")||q&&"fixed")==="fixed",W=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],j=N&&n.toggleActions.split(" "),V="markers"in n?n.markers:xu.markers,he=q?0:parseFloat(qi(B)["border"+M.p2+ll])||0,U=this,_e=n.onRefreshInit&&function(){return n.onRefreshInit(U)},Ce=WR(B,q,M),He=XR(B,q),te=0,de=0,ye=0,k=Zs(B,M),oe,le,ae,Le,I,D,w,re,J,L,ie,ue,ne,R,E,O,Y,$,Z,pe,fe,xe,Be,me,ve,Ue,ke,Se,We,Xe,pt,F,be,se,ce,Me,Ee,$e,mt;if(U._startClamp=U._endClamp=!1,U._dir=M,m*=45,U.scroller=B,U.scroll=T?T.time.bind(T):k,Le=k(),U.vars=n,r=r||n.animation,"refreshPriority"in n&&(WM=1,n.refreshPriority===-9999&&(Sc=U)),H.tweenScroll=H.tweenScroll||{top:nv(B,pn),left:nv(B,li)},U.tweenTo=oe=H.tweenScroll[M.p],U.scrubDuration=function(we){be=Zl(we)&&we,be?F?F.duration(we):F=Ie.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:be,paused:!0,onComplete:function(){return p&&p(U)}}):(F&&F.progress(1).kill(),F=0)},r&&(r.vars.lazy=!1,r._initted&&!U.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),U.animation=r.pause(),r.scrollTrigger=U,U.scrubDuration(f),Xe=0,l||(l=r.vars.id)),v&&((!Mo(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in Tt.style&&Ie.set(q?[Tt,Pi]:B,{scrollBehavior:"auto"}),ct.forEach(function(we){return zn(we)&&we.target===(q?Ut.scrollingElement||Pi:B)&&(we.smooth=!1)}),ae=zn(v.snapTo)?v.snapTo:v.snapTo==="labels"?YR(r):v.snapTo==="labelsDirectional"?qR(r):v.directional!==!1?function(we,Ze){return zg(v.snapTo)(we,On()-de<500?0:Ze.direction)}:Ie.utils.snap(v.snapTo),se=v.duration||{min:.1,max:2},se=Mo(se)?gc(se.min,se.max):gc(se,se),ce=Ie.delayedCall(v.delay||be/2||.1,function(){var we=k(),Ze=On()-de<500,Oe=oe.tween;if((Ze||Math.abs(U.getVelocity())<10)&&!Oe&&!Th&&te!==we){var Ke=(we-D)/R,$t=r&&!N?r.totalProgress():Ke,at=Ze?0:($t-pt)/(On()-ql)*1e3||0,Nt=Ie.utils.clamp(-Ke,1-Ke,ta(at/2)*at/.185),cn=Ke+(v.inertia===!1?0:Nt),Pt,Dt,yt=v,Mi=yt.onStart,Bt=yt.onInterrupt,Yn=yt.onComplete;if(Pt=ae(cn,U),Zl(Pt)||(Pt=cn),Dt=Math.max(0,Math.round(D+Pt*R)),we<=w&&we>=D&&Dt!==we){if(Oe&&!Oe._initted&&Oe.data<=ta(Dt-we))return;v.inertia===!1&&(Nt=Pt-Ke),oe(Dt,{duration:se(ta(Math.max(ta(cn-$t),ta(Pt-$t))*.185/at/.05||0)),ease:v.ease||"power3",data:ta(Dt-we),onInterrupt:function(){return ce.restart(!0)&&Bt&&Bt(U)},onComplete:function(){U.update(),te=k(),r&&!N&&(F?F.resetTo("totalProgress",Pt,r._tTime/r._tDur):r.progress(Pt)),Xe=pt=r&&!N?r.totalProgress():U.progress,x&&x(U),Yn&&Yn(U)}},we,Nt*R,Dt-we-Nt*R),Mi&&Mi(U,oe.tween)}}else U.isActive&&te!==we&&ce.restart(!0)}).pause()),l&&(Hp[l]=U),h=U.trigger=pi(h||d!==!0&&d),mt=h&&h._gsap&&h._gsap.stRevert,mt&&(mt=mt(U)),d=d===!0?h:pi(d),Ri(a)&&(a={targets:h,className:a}),d&&(g===!1||g===Yi||(g=!g&&d.parentNode&&d.parentNode.style&&qi(d.parentNode).display==="flex"?!1:rn),U.pin=d,le=Ie.core.getCache(d),le.spacer?E=le.pinState:(A&&(A=pi(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),le.spacerIsNative=!!A,A&&(le.spacerState=Su(A))),le.spacer=$=A||Ut.createElement("div"),$.classList.add("pin-spacer"),l&&$.classList.add("pin-spacer-"+l),le.pinState=E=Su(d)),n.force3D!==!1&&Ie.set(d,{force3D:!0}),U.spacer=$=le.spacer,We=qi(d),me=We[g+M.os2],pe=Ie.getProperty(d),fe=Ie.quickSetter(d,M.a,dn),ld(d,$,We),Y=Su(d)),V){ue=Mo(V)?$0(V,K0):K0,L=yu("scroller-start",l,B,M,ue,0),ie=yu("scroller-end",l,B,M,ue,0,L),Z=L["offset"+M.op.d2];var jt=pi(Ys(B,"content")||B);re=this.markerStart=yu("start",l,jt,M,ue,Z,0,T),J=this.markerEnd=yu("end",l,jt,M,ue,Z,0,T),T&&($e=Ie.quickSetter([re,J],M.a,dn)),!Q&&!(Lr.length&&Ys(B,"fixedMarkers")===!0)&&(jR(q?Tt:B),Ie.set([L,ie],{force3D:!0}),Ue=Ie.quickSetter(L,M.a,dn),Se=Ie.quickSetter(ie,M.a,dn))}if(T){var Re=T.vars.onUpdate,Ne=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){U.update(0,0,1),Re&&Re.apply(T,Ne||[])})}if(U.previous=function(){return st[st.indexOf(U)-1]},U.next=function(){return st[st.indexOf(U)+1]},U.revert=function(we,Ze){if(!Ze)return U.kill(!0);var Oe=we!==!1||!U.enabled,Ke=Un;Oe!==U.isReverted&&(Oe&&(Me=Math.max(k(),U.scroll.rec||0),ye=U.progress,Ee=r&&r.progress()),re&&[re,J,L,ie].forEach(function($t){return $t.style.display=Oe?"none":"block"}),Oe&&(Un=U,U.update(Oe)),d&&(!b||!U.isActive)&&(Oe?ZR(d,$,E):ld(d,$,qi(d),ve)),Oe||U.update(Oe),Un=Ke,U.isReverted=Oe)},U.refresh=function(we,Ze,Oe,Ke){if(!((Un||!U.enabled)&&!Ze)){if(d&&we&&Qi){xn(i,"scrollEnd",tb);return}!ri&&_e&&_e(U),Un=U,oe.tween&&!Oe&&(oe.tween.kill(),oe.tween=0),F&&F.pause(),_&&r&&r.revert({kill:!1}).invalidate(),U.isReverted||U.revert(!0,!0),U._subPinOffset=!1;var $t=Ce(),at=He(),Nt=T?T.duration():Ar(B,M),cn=R<=.01,Pt=0,Dt=Ke||0,yt=Mo(Oe)?Oe.end:n.end,Mi=n.endTrigger||h,Bt=Mo(Oe)?Oe.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),Yn=U.pinnedContainer=n.pinnedContainer&&pi(n.pinnedContainer,U),zi=h&&Math.max(0,st.indexOf(U))||0,un=zi,fn,P,X,ee,K,G,ge,Ae,De,Pe,Ve,qe,ze;for(V&&Mo(Oe)&&(qe=Ie.getProperty(L,M.p),ze=Ie.getProperty(ie,M.p));un-- >0;)G=st[un],G.end||G.refresh(0,1)||(Un=U),ge=G.pin,ge&&(ge===h||ge===d||ge===Yn)&&!G.isReverted&&(Pe||(Pe=[]),Pe.unshift(G),G.revert(!0,!0)),G!==st[un]&&(zi--,un--);for(zn(Bt)&&(Bt=Bt(U)),Bt=X0(Bt,"start",U),D=ev(Bt,h,$t,M,k(),re,L,U,at,he,Q,Nt,T,U._startClamp&&"_startClamp")||(d?-.001:0),zn(yt)&&(yt=yt(U)),Ri(yt)&&!yt.indexOf("+=")&&(~yt.indexOf(" ")?yt=(Ri(Bt)?Bt.split(" ")[0]:"")+yt:(Pt=pf(yt.substr(2),$t),yt=Ri(Bt)?Bt:(T?Ie.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,D):D)+Pt,Mi=h)),yt=X0(yt,"end",U),w=Math.max(D,ev(yt||(Mi?"100% 0":Nt),Mi,$t,M,k()+Pt,J,ie,U,at,he,Q,Nt,T,U._endClamp&&"_endClamp"))||-.001,Pt=0,un=zi;un--;)G=st[un],ge=G.pin,ge&&G.start-G._pinPush<=D&&!T&&G.end>0&&(fn=G.end-(U._startClamp?Math.max(0,G.start):G.start),(ge===h&&G.start-G._pinPush<D||ge===Yn)&&isNaN(Bt)&&(Pt+=fn*(1-G.progress)),ge===d&&(Dt+=fn));if(D+=Pt,w+=Pt,U._startClamp&&(U._startClamp+=Pt),U._endClamp&&!ri&&(U._endClamp=w||-.001,w=Math.min(w,Ar(B,M))),R=w-D||(D-=.01)&&.001,cn&&(ye=Ie.utils.clamp(0,1,Ie.utils.normalize(D,w,Me))),U._pinPush=Dt,re&&Pt&&(fn={},fn[M.a]="+="+Pt,Yn&&(fn[M.p]="-="+k()),Ie.set([re,J],fn)),d&&!(zp&&U.end>=Ar(B,M)))fn=qi(d),ee=M===pn,X=k(),xe=parseFloat(pe(M.a))+Dt,!Nt&&w>1&&(Ve=(q?Ut.scrollingElement||Pi:B).style,Ve={style:Ve,value:Ve["overflow"+M.a.toUpperCase()]},q&&qi(Tt)["overflow"+M.a.toUpperCase()]!=="scroll"&&(Ve.style["overflow"+M.a.toUpperCase()]="scroll")),ld(d,$,fn),Y=Su(d),P=ts(d,!0),Ae=Q&&Zs(B,ee?li:pn)(),g?(ve=[g+M.os2,R+Dt+dn],ve.t=$,un=g===rn?$f(d,M)+R+Dt:0,un&&(ve.push(M.d,un+dn),$.style.flexBasis!=="auto"&&($.style.flexBasis=un+dn)),Wa(ve),Yn&&st.forEach(function(rt){rt.pin===Yn&&rt.vars.pinSpacing!==!1&&(rt._subPinOffset=!0)}),Q&&k(Me)):(un=$f(d,M),un&&$.style.flexBasis!=="auto"&&($.style.flexBasis=un+dn)),Q&&(K={top:P.top+(ee?X-D:Ae)+dn,left:P.left+(ee?Ae:X-D)+dn,boxSizing:"border-box",position:"fixed"},K[Fo]=K["max"+ll]=Math.ceil(P.width)+dn,K[Bo]=K["max"+kg]=Math.ceil(P.height)+dn,K[Yi]=K[Yi+xc]=K[Yi+_c]=K[Yi+yc]=K[Yi+vc]="0",K[rn]=fn[rn],K[rn+xc]=fn[rn+xc],K[rn+_c]=fn[rn+_c],K[rn+yc]=fn[rn+yc],K[rn+vc]=fn[rn+vc],O=QR(E,K,b),ri&&k(0)),r?(De=r._initted,id(1),r.render(r.duration(),!0,!0),Be=pe(M.a)-xe+R+Dt,ke=Math.abs(R-Be)>1,Q&&ke&&O.splice(O.length-2,2),r.render(0,!0,!0),De||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),id(0)):Be=R,Ve&&(Ve.value?Ve.style["overflow"+M.a.toUpperCase()]=Ve.value:Ve.style.removeProperty("overflow-"+M.a));else if(h&&k()&&!T)for(P=h.parentNode;P&&P!==Tt;)P._pinOffset&&(D-=P._pinOffset,w-=P._pinOffset),P=P.parentNode;Pe&&Pe.forEach(function(rt){return rt.revert(!1,!0)}),U.start=D,U.end=w,Le=I=ri?Me:k(),!T&&!ri&&(Le<Me&&k(Me),U.scroll.rec=0),U.revert(!1,!0),de=On(),ce&&(te=-1,ce.restart(!0)),Un=0,r&&N&&(r._initted||Ee)&&r.progress()!==Ee&&r.progress(Ee||0,!0).render(r.time(),!0,!0),(cn||ye!==U.progress||T||_||r&&!r._initted)&&(r&&!N&&r.totalProgress(T&&D<-.001&&!ye?Ie.utils.normalize(D,w,0):ye,!0),U.progress=cn||(Le-D)/R===ye?0:ye),d&&g&&($._pinOffset=Math.round(U.progress*Be)),F&&F.invalidate(),isNaN(qe)||(qe-=Ie.getProperty(L,M.p),ze-=Ie.getProperty(ie,M.p),Mu(L,M,qe),Mu(re,M,qe-(Ke||0)),Mu(ie,M,ze),Mu(J,M,ze-(Ke||0))),cn&&!ri&&U.update(),u&&!ri&&!ne&&(ne=!0,u(U),ne=!1)}},U.getVelocity=function(){return(k()-I)/(On()-ql)*1e3||0},U.endAnimation=function(){Il(U.callbackAnimation),r&&(F?F.progress(1):r.paused()?N||Il(r,U.direction<0,1):Il(r,r.reversed()))},U.labelToScroll=function(we){return r&&r.labels&&(D||U.refresh()||D)+r.labels[we]/r.duration()*R||0},U.getTrailing=function(we){var Ze=st.indexOf(U),Oe=U.direction>0?st.slice(0,Ze).reverse():st.slice(Ze+1);return(Ri(we)?Oe.filter(function(Ke){return Ke.vars.preventOverlaps===we}):Oe).filter(function(Ke){return U.direction>0?Ke.end<=D:Ke.start>=w})},U.update=function(we,Ze,Oe){if(!(T&&!Oe&&!we)){var Ke=ri===!0?Me:U.scroll(),$t=we?0:(Ke-D)/R,at=$t<0?0:$t>1?1:$t||0,Nt=U.progress,cn,Pt,Dt,yt,Mi,Bt,Yn,zi;if(Ze&&(I=Le,Le=T?k():Ke,v&&(pt=Xe,Xe=r&&!N?r.totalProgress():at)),m&&d&&!Un&&!mu&&Qi&&(!at&&D<Ke+(Ke-I)/(On()-ql)*m?at=1e-4:at===1&&w>Ke+(Ke-I)/(On()-ql)*m&&(at=.9999)),at!==Nt&&U.enabled){if(cn=U.isActive=!!at&&at<1,Pt=!!Nt&&Nt<1,Bt=cn!==Pt,Mi=Bt||!!at!=!!Nt,U.direction=at>Nt?1:-1,U.progress=at,Mi&&!Un&&(Dt=at&&!Nt?0:at===1?1:Nt===1?2:3,N&&(yt=!Bt&&j[Dt+1]!=="none"&&j[Dt+1]||j[Dt],zi=r&&(yt==="complete"||yt==="reset"||yt in r))),S&&(Bt||zi)&&(zi||f||!r)&&(zn(S)?S(U):U.getTrailing(S).forEach(function(X){return X.endAnimation()})),N||(F&&!Un&&!mu?(F._dp._time-F._start!==F._time&&F.render(F._dp._time-F._start),F.resetTo?F.resetTo("totalProgress",at,r._tTime/r._tDur):(F.vars.totalProgress=at,F.invalidate().restart())):r&&r.totalProgress(at,!!(Un&&(de||we)))),d){if(we&&g&&($.style[g+M.os2]=me),!Q)fe(Kl(xe+Be*at));else if(Mi){if(Yn=!we&&at>Nt&&w+1>Ke&&Ke+1>=Ar(B,M),b)if(!we&&(cn||Yn)){var un=ts(d,!0),fn=Ke-D;tv(d,Tt,un.top+(M===pn?fn:0)+dn,un.left+(M===pn?0:fn)+dn)}else tv(d,$);Wa(cn||Yn?O:Y),ke&&at<1&&cn||fe(xe+(at===1&&!Yn?Be:0))}}v&&!oe.tween&&!Un&&!mu&&ce.restart(!0),a&&(Bt||y&&at&&(at<1||!rd))&&Gc(a.targets).forEach(function(X){return X.classList[cn||y?"add":"remove"](a.className)}),o&&!N&&!we&&o(U),Mi&&!Un?(N&&(zi&&(yt==="complete"?r.pause().totalProgress(1):yt==="reset"?r.restart(!0).pause():yt==="restart"?r.restart(!0):r[yt]()),o&&o(U)),(Bt||!rd)&&(c&&Bt&&od(U,c),W[Dt]&&od(U,W[Dt]),y&&(at===1?U.kill(!1,1):W[Dt]=0),Bt||(Dt=at===1?1:3,W[Dt]&&od(U,W[Dt]))),C&&!cn&&Math.abs(U.getVelocity())>(Zl(C)?C:2500)&&(Il(U.callbackAnimation),F?F.progress(1):Il(r,yt==="reverse"?1:!at,1))):N&&o&&!Un&&o(U)}if(Se){var P=T?Ke/T.duration()*(T._caScrollDist||0):Ke;Ue(P+(L._isFlipped?1:0)),Se(P)}$e&&$e(-Ke/T.duration()*(T._caScrollDist||0))}},U.enable=function(we,Ze){U.enabled||(U.enabled=!0,xn(B,"resize",Jl),q||xn(B,"scroll",na),_e&&xn(i,"refreshInit",_e),we!==!1&&(U.progress=ye=0,Le=I=te=k()),Ze!==!1&&U.refresh())},U.getTween=function(we){return we&&oe?oe.tween:F},U.setPositions=function(we,Ze,Oe,Ke){if(T){var $t=T.scrollTrigger,at=T.duration(),Nt=$t.end-$t.start;we=$t.start+Nt*we/at,Ze=$t.start+Nt*Ze/at}U.refresh(!1,!1,{start:j0(we,Oe&&!!U._startClamp),end:j0(Ze,Oe&&!!U._endClamp)},Ke),U.update()},U.adjustPinSpacing=function(we){if(ve&&we){var Ze=ve.indexOf(M.d)+1;ve[Ze]=parseFloat(ve[Ze])+we+dn,ve[1]=parseFloat(ve[1])+we+dn,Wa(ve)}},U.disable=function(we,Ze){if(U.enabled&&(we!==!1&&U.revert(!0,!0),U.enabled=U.isActive=!1,Ze||F&&F.pause(),Me=0,le&&(le.uncache=1),_e&&vn(i,"refreshInit",_e),ce&&(ce.pause(),oe.tween&&oe.tween.kill()&&(oe.tween=0)),!q)){for(var Oe=st.length;Oe--;)if(st[Oe].scroller===B&&st[Oe]!==U)return;vn(B,"resize",Jl),q||vn(B,"scroll",na)}},U.kill=function(we,Ze){U.disable(we,Ze),F&&!Ze&&F.kill(),l&&delete Hp[l];var Oe=st.indexOf(U);Oe>=0&&st.splice(Oe,1),Oe===ii&&gf>0&&ii--,Oe=0,st.forEach(function(Ke){return Ke.scroller===U.scroller&&(Oe=1)}),Oe||ri||(U.scroll.rec=0),r&&(r.scrollTrigger=null,we&&r.revert({kill:!1}),Ze||r.kill()),re&&[re,J,L,ie].forEach(function(Ke){return Ke.parentNode&&Ke.parentNode.removeChild(Ke)}),Sc===U&&(Sc=0),d&&(le&&(le.uncache=1),Oe=0,st.forEach(function(Ke){return Ke.pin===d&&Oe++}),Oe||(le.spacer=0)),n.onKill&&n.onKill(U)},st.push(U),U.enable(!1,!1),mt&&mt(U),r&&r.add&&!R){var tt=U.update;U.update=function(){U.update=tt,ct.cache++,D||w||U.refresh()},Ie.delayedCall(.01,U.update),R=.01,D=w=0}else U.refresh();d&&KR()},i.register=function(n){return Ma||(Ie=n||$M(),qM()&&window.document&&i.enable(),Ma=$l),Ma},i.defaults=function(n){if(n)for(var r in n)xu[r]=n[r];return xu},i.disable=function(n,r){$l=0,st.forEach(function(o){return o[r?"kill":"disable"](n)}),vn(lt,"wheel",na),vn(Ut,"scroll",na),clearInterval(pu),vn(Ut,"touchcancel",Mr),vn(Tt,"touchstart",Mr),_u(vn,Ut,"pointerdown,touchstart,mousedown",Y0),_u(vn,Ut,"pointerup,touchend,mouseup",q0),Yf.kill(),gu(vn);for(var s=0;s<ct.length;s+=3)vu(vn,ct[s],ct[s+1]),vu(vn,ct[s],ct[s+2])},i.enable=function(){if(lt=window,Ut=document,Pi=Ut.documentElement,Tt=Ut.body,Ie&&(Gc=Ie.utils.toArray,gc=Ie.utils.clamp,kp=Ie.core.context||Mr,id=Ie.core.suppressOverwrites||Mr,Ug=lt.history.scrollRestoration||"auto",Vp=lt.pageYOffset||0,Ie.core.globals("ScrollTrigger",i),Tt)){$l=1,Ga=document.createElement("div"),Ga.style.height="100vh",Ga.style.position="absolute",rb(),GR(),Jt.register(Ie),i.isTouch=Jt.isTouch,As=Jt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Bp=Jt.isTouch===1,xn(lt,"wheel",na),Ng=[lt,Ut,Pi,Tt],Ie.matchMedia?(i.matchMedia=function(c){var u=Ie.matchMedia(),f;for(f in c)u.add(f,c[f]);return u},Ie.addEventListener("matchMediaInit",function(){return Hg()}),Ie.addEventListener("matchMediaRevert",function(){return nb()}),Ie.addEventListener("matchMedia",function(){Ao(0,1),jo("matchMedia")}),Ie.matchMedia().add("(orientation: portrait)",function(){return ad(),ad})):console.warn("Requires GSAP 3.11.0 or later"),ad(),xn(Ut,"scroll",na);var n=Tt.hasAttribute("style"),r=Tt.style,s=r.borderTopStyle,o=Ie.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=ts(Tt),pn.m=Math.round(a.top+pn.sc())||0,li.m=Math.round(a.left+li.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),n||(Tt.setAttribute("style",""),Tt.removeAttribute("style")),pu=setInterval(Z0,250),Ie.delayedCall(.5,function(){return mu=0}),xn(Ut,"touchcancel",Mr),xn(Tt,"touchstart",Mr),_u(xn,Ut,"pointerdown,touchstart,mousedown",Y0),_u(xn,Ut,"pointerup,touchend,mouseup",q0),Fp=Ie.utils.checkPrefix("transform"),_f.push(Fp),Ma=On(),Yf=Ie.delayedCall(.2,Ao).pause(),ba=[Ut,"visibilitychange",function(){var c=lt.innerWidth,u=lt.innerHeight;Ut.hidden?(G0=c,W0=u):(G0!==c||W0!==u)&&Jl()},Ut,"DOMContentLoaded",Ao,lt,"load",Ao,lt,"resize",Jl],gu(xn),st.forEach(function(c){return c.enable(0,1)}),l=0;l<ct.length;l+=3)vu(vn,ct[l],ct[l+1]),vu(vn,ct[l],ct[l+2])}},i.config=function(n){"limitCallbacks"in n&&(rd=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(pu)||(pu=r)&&setInterval(Z0,r),"ignoreMobileResize"in n&&(Bp=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(gu(vn)||gu(xn,n.autoRefreshEvents||"none"),XM=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=pi(n),o=ct.indexOf(s),a=Wo(s);~o&&ct.splice(o,a?6:2),r&&(a?Lr.unshift(lt,r,Tt,r,Pi,r):Lr.unshift(s,r))},i.clearMatchMedia=function(n){st.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var o=(Ri(n)?pi(n):n).getBoundingClientRect(),a=o[s?Fo:Bo]*r||0;return s?o.right-a>0&&o.left+a<lt.innerWidth:o.bottom-a>0&&o.top+a<lt.innerHeight},i.positionInViewport=function(n,r,s){Ri(n)&&(n=pi(n));var o=n.getBoundingClientRect(),a=o[s?Fo:Bo],l=r==null?a/2:r in Kf?Kf[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/lt.innerWidth:(o.top+l)/lt.innerHeight},i.killAll=function(n){if(st.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=Xo.killAll||[];Xo={},r.forEach(function(s){return s()})}},i}();ft.version="3.12.7";ft.saveStyles=function(i){return i?Gc(i).forEach(function(e){if(e&&e.style){var t=Ai.indexOf(e);t>=0&&Ai.splice(t,5),Ai.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ie.core.getCache(e),kp())}}):Ai};ft.revert=function(i,e){return Hg(!i,e)};ft.create=function(i,e){return new ft(i,e)};ft.refresh=function(i){return i?Jl(!0):(Ma||ft.register())&&Ao(!0)};ft.update=function(i){return++ct.cache&&ls(i===!0?2:0)};ft.clearScrollMemory=ib;ft.maxScroll=function(i,e){return Ar(i,e?li:pn)};ft.getScrollFunc=function(i,e){return Zs(pi(i),e?li:pn)};ft.getById=function(i){return Hp[i]};ft.getAll=function(){return st.filter(function(i){return i.vars.id!=="ScrollSmoother"})};ft.isScrolling=function(){return!!Qi};ft.snapDirectional=zg;ft.addEventListener=function(i,e){var t=Xo[i]||(Xo[i]=[]);~t.indexOf(e)||t.push(e)};ft.removeEventListener=function(i,e){var t=Xo[i],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ft.batch=function(i,e){var t=[],n={},r=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var f=[],h=[],d=Ie.delayedCall(r,function(){u(f,h),f=[],h=[]}).pause();return function(g){f.length||d.restart(!0),f.push(g.trigger),h.push(g),s<=f.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&zn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return zn(s)&&(s=s(),xn(ft,"refresh",function(){return s=e.batchMax()})),Gc(i).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(ft.create(c))}),t};var iv=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},cd=function i(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Jt.isTouch?" pinch-zoom":""):"none",e===Pi&&i(Tt,t)},bu={auto:1,scroll:1},tC=function(e){var t=e.event,n=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ie.core.getCache(s),a=On(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Tt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(bu[(l=qi(s)).overflowY]||bu[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Wo(s)&&(bu[(l=qi(s)).overflowY]||bu[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},ob=function(e,t,n,r){return Jt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&tC,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&xn(Ut,Jt.eventTypes[0],sv,!1,!0)},onDisable:function(){return vn(Ut,Jt.eventTypes[0],sv,!0)}})},nC=/(input|label|select|textarea)/i,rv,sv=function(e){var t=nC.test(e.target.tagName);(t||rv)&&(e._gsapAllow=!0,rv=t)},iC=function(e){Mo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=pi(e.target)||Pi,u=Ie.core.globals().ScrollSmoother,f=u&&u.get(),h=As&&(e.content&&pi(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=Zs(c,pn),g=Zs(c,li),_=1,m=(Jt.isTouch&&lt.visualViewport?lt.visualViewport.scale*lt.visualViewport.width:lt.outerWidth)/lt.innerWidth,p=0,x=zn(r)?function(){return r(a)}:function(){return r||2.8},y,v,b=ob(c,e.type,!0,s),A=function(){return v=!1},T=Mr,C=Mr,S=function(){l=Ar(c,pn),C=gc(As?1:0,l),n&&(T=gc(0,Ar(c,li))),y=ko},M=function(){h._gsap.y=Kl(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},N=function(){if(v){requestAnimationFrame(A);var V=Kl(a.deltaY/2),he=C(d.v-V);if(h&&he!==d.v+d.offset){d.offset=he-d.v;var U=Kl((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+U+", 0, 1)",h._gsap.y=U+"px",d.cacheID=ct.cache,ls()}return!0}d.offset&&M(),v=!0},B,H,q,Q,W=function(){S(),B.isActive()&&B.vars.scrollY>l&&(d()>l?B.progress(1)&&d(l):B.resetTo("scrollY",l))};return h&&Ie.set(h,{y:"+=0"}),e.ignoreCheck=function(j){return As&&j.type==="touchmove"&&N()||_>1.05&&j.type!=="touchstart"||a.isGesturing||j.touches&&j.touches.length>1},e.onPress=function(){v=!1;var j=_;_=Kl((lt.visualViewport&&lt.visualViewport.scale||1)/m),B.pause(),j!==_&&cd(c,_>1.01?!0:n?!1:"x"),H=g(),q=d(),S(),y=ko},e.onRelease=e.onGestureStart=function(j,V){if(d.offset&&M(),!V)Q.restart(!0);else{ct.cache++;var he=x(),U,_e;n&&(U=g(),_e=U+he*.05*-j.velocityX/.227,he*=iv(g,U,_e,Ar(c,li)),B.vars.scrollX=T(_e)),U=d(),_e=U+he*.05*-j.velocityY/.227,he*=iv(d,U,_e,Ar(c,pn)),B.vars.scrollY=C(_e),B.invalidate().duration(he).play(.01),(As&&B.vars.scrollY>=l||U>=l-1)&&Ie.to({},{onUpdate:W,duration:he})}o&&o(j)},e.onWheel=function(){B._ts&&B.pause(),On()-p>1e3&&(y=0,p=On())},e.onChange=function(j,V,he,U,_e){if(ko!==y&&S(),V&&n&&g(T(U[2]===V?H+(j.startX-j.x):g()+V-U[1])),he){d.offset&&M();var Ce=_e[2]===he,He=Ce?q+j.startY-j.y:d()+he-_e[1],te=C(He);Ce&&He!==te&&(q+=te-He),d(te)}(he||V)&&ls()},e.onEnable=function(){cd(c,n?!1:"x"),ft.addEventListener("refresh",W),xn(lt,"resize",W),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),b.enable()},e.onDisable=function(){cd(c,!0),vn(lt,"resize",W),ft.removeEventListener("refresh",W),b.kill()},e.lockAxis=e.lockAxis!==!1,a=new Jt(e),a.iOS=As,As&&!d()&&d(1),As&&Ie.ticker.add(Mr),Q=a._dc,B=Ie.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:sb(d,d(),function(){return B.pause()})},onUpdate:ls,onComplete:Q.vars.onComplete}),a};ft.sort=function(i){if(zn(i))return st.sort(i);var e=lt.pageYOffset||0;return ft.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+lt.innerHeight}),st.sort(i||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ft.observe=function(i){return new Jt(i)};ft.normalizeScroll=function(i){if(typeof i>"u")return ei;if(i===!0&&ei)return ei.enable();if(i===!1){ei&&ei.kill(),ei=i;return}var e=i instanceof Jt?i:iC(i);return ei&&ei.target===e.target&&ei.kill(),Wo(e.target)&&(ei=e),e};ft.core={_getVelocityProp:Op,_inputObserver:ob,_scrollers:ct,_proxies:Lr,bridge:{ss:function(){Qi||jo("scrollStart"),Qi=On()},ref:function(){return Un}}};$M()&&Ie.registerPlugin(ft);an.registerPlugin(ft);an.registerPlugin(OM);const rC=(i,e,t=.8,n=.005,r=0,s=()=>{})=>{an.to(i,{onStart:()=>{ab(e,100,2),s()},scrollTrigger:{trigger:i,toggleActions:"play none none reverse",start:"top bottom"},delay:r,duration:t,y:0,autoAlpha:1,stagger:n,ease:"power4.inOut"})},sC=(i,e)=>{an.to(i,{scrollTrigger:{trigger:e,start:"bottom center",toggleActions:"play none none reverse"},duration:.6,scale:1,ease:"power1"})},oC=i=>{an.to(i,{y:0,duration:.4,ease:"power1.inOut",stagger:.1})},aC=i=>{an.set(i,{y:"100%"})},ab=(i,e=1,t=.5)=>{an.to(i,{opacity:e,duration:t,ease:"power4.inOut",scrollTrigger:{trigger:i,toggleActions:"play none none reverse"},stagger:.1})},lC=(i,e=0)=>{an.set(i,{opacity:e})},cC=(i,e,t,n,r)=>{const s=an.quickTo(e.value,"x",{duration:1,ease:"elastic.out(1, 0.3)"}),o=an.quickTo(t.value,"x",{duration:1,ease:"elastic.out(1, 0.3)"}),a=an.quickTo(t.value,"y",{duration:1,ease:"elastic.out(1, 0.3)"}),l=an.quickTo(e.value,"y",{duration:1,ease:"elastic.out(1, 0.3)"}),{clientX:c,clientY:u}=i,{width:f,height:h,left:d,top:g}=e.value.getBoundingClientRect(),_=n,m=r,p=((c-d)/f-.5)*_,x=((u-g)/h-.5)*m;s(p),l(x),o(p),a(x)},uC=(i,e)=>{const t=an.quickTo(i.value,"x",{duration:1,ease:"elastic.out(1, 0.3)"}),n=an.quickTo(e.value,"x",{duration:1,ease:"elastic.out(1, 0.3)"}),r=an.quickTo(e.value,"y",{duration:1,ease:"elastic.out(1, 0.3)"}),s=an.quickTo(i.value,"y",{duration:1,ease:"elastic.out(1, 0.3)"});t(0),s(0),n(0),r(0)},fC=i=>{an.to(i,{x:"0%",opacity:1,duration:.7})},hC=i=>{const e="100%";an.to(i,{opacity:0,onComplete:()=>{an.set(i,{x:e})}})},dC=(i,e,t)=>{fC(i),oC(e),ab(t)},pC=(i,e,t)=>{hC(i),aC(e),lC(t)},mC=[{label:"GitHub",url:"https://github.com/dspwithaheart"},{label:"LinkedIn",url:"https://www.linkedin.com/in/aayush-y-4434301aa"}];/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vg="173",Xa={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Pa={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gC=0,ov=1,_C=2,lb=1,vC=2,Yr=3,ps=0,yi=1,Er=2,cs=0,ja=1,Wp=2,av=3,lv=4,xC=5,To=100,yC=101,SC=102,MC=103,bC=104,TC=200,EC=201,wC=202,AC=203,Xp=204,jp=205,RC=206,CC=207,PC=208,DC=209,LC=210,IC=211,NC=212,UC=213,OC=214,Yp=0,qp=1,$p=2,cl=3,Kp=4,Zp=5,Jp=6,Qp=7,Gg=0,FC=1,BC=2,qs=0,cb=1,ub=2,fb=3,hb=4,db=5,pb=6,mb=7,cv="attached",kC="detached",gb=300,ul=301,fl=302,em=303,tm=304,Eh=306,Js=1e3,zs=1001,Zf=1002,ci=1003,_b=1004,Ql=1005,Ui=1006,xf=1007,rs=1008,ms=1009,vb=1010,xb=1011,Xc=1012,Wg=1013,Yo=1014,cr=1015,Qs=1016,Xg=1017,jg=1018,hl=1020,yb=35902,Sb=1021,Mb=1022,Zi=1023,bb=1024,Tb=1025,Ya=1026,dl=1027,Yg=1028,qg=1029,Eb=1030,$g=1031,Kg=1033,yf=33776,Sf=33777,Mf=33778,bf=33779,nm=35840,im=35841,rm=35842,sm=35843,om=36196,am=37492,lm=37496,cm=37808,um=37809,fm=37810,hm=37811,dm=37812,pm=37813,mm=37814,gm=37815,_m=37816,vm=37817,xm=37818,ym=37819,Sm=37820,Mm=37821,Tf=36492,bm=36494,Tm=36495,wb=36283,Em=36284,wm=36285,Am=36286,jc=2300,Yc=2301,ud=2302,uv=2400,fv=2401,hv=2402,zC=2500,HC=0,Ab=1,Rm=2,VC=3200,GC=3201,Zg=0,WC=1,Ns="",yn="srgb",fi="srgb-linear",Jf="linear",wt="srgb",ia=7680,dv=519,XC=512,jC=513,YC=514,Rb=515,qC=516,$C=517,KC=518,ZC=519,Cm=35044,pv="300 es",ss=2e3,Qf=2001;class Ko{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mv=1234567;const Mc=Math.PI/180,pl=180/Math.PI;function hr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(In[i&255]+In[i>>8&255]+In[i>>16&255]+In[i>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[t&63|128]+In[t>>8&255]+"-"+In[t>>16&255]+In[t>>24&255]+In[n&255]+In[n>>8&255]+In[n>>16&255]+In[n>>24&255]).toLowerCase()}function ot(i,e,t){return Math.max(e,Math.min(t,i))}function Jg(i,e){return(i%e+e)%e}function JC(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function QC(i,e,t){return i!==e?(t-i)/(e-i):0}function bc(i,e,t){return(1-t)*i+t*e}function eP(i,e,t,n){return bc(i,e,1-Math.exp(-t*n))}function tP(i,e=1){return e-Math.abs(Jg(i,e*2)-e)}function nP(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function iP(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function rP(i,e){return i+Math.floor(Math.random()*(e-i+1))}function sP(i,e){return i+Math.random()*(e-i)}function oP(i){return i*(.5-Math.random())}function aP(i){i!==void 0&&(mv=i);let e=mv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lP(i){return i*Mc}function cP(i){return i*pl}function uP(i){return(i&i-1)===0&&i!==0}function fP(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hP(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function dP(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),h=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*f,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function or(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function At(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Cb={DEG2RAD:Mc,RAD2DEG:pl,generateUUID:hr,clamp:ot,euclideanModulo:Jg,mapLinear:JC,inverseLerp:QC,lerp:bc,damp:eP,pingpong:tP,smoothstep:nP,smootherstep:iP,randInt:rP,randFloat:sP,randFloatSpread:oP,seededRandom:aP,degToRad:lP,radToDeg:cP,isPowerOfTwo:uP,ceilPowerOfTwo:fP,floorPowerOfTwo:hP,setQuaternionFromProperEuler:dP,normalize:At,denormalize:or};class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nt{constructor(e,t,n,r,s,o,a,l,c){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],_=r[0],m=r[3],p=r[6],x=r[1],y=r[4],v=r[7],b=r[2],A=r[5],T=r[8];return s[0]=o*_+a*x+l*b,s[3]=o*m+a*y+l*A,s[6]=o*p+a*v+l*T,s[1]=c*_+u*x+f*b,s[4]=c*m+u*y+f*A,s[7]=c*p+u*v+f*T,s[2]=h*_+d*x+g*b,s[5]=h*m+d*y+g*A,s[8]=h*p+d*v+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=t*f+n*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*n)*_,e[2]=(a*n-r*o)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(fd.makeScale(e,t)),this}rotate(e){return this.premultiply(fd.makeRotation(-e)),this}translate(e,t){return this.premultiply(fd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fd=new nt;function Pb(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function qc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pP(){const i=qc("canvas");return i.style.display="block",i}const gv={};function Ta(i){i in gv||(gv[i]=!0,console.warn(i))}function mP(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function gP(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function _P(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const _v=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vv=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vP(){const i={enabled:!0,workingColorSpace:fi,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===wt&&(r.r=us(r.r),r.g=us(r.g),r.b=us(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===wt&&(r.r=qa(r.r),r.g=qa(r.g),r.b=qa(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ns?Jf:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[fi]:{primaries:e,whitePoint:n,transfer:Jf,toXYZ:_v,fromXYZ:vv,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yn},outputColorSpaceConfig:{drawingBufferColorSpace:yn}},[yn]:{primaries:e,whitePoint:n,transfer:wt,toXYZ:_v,fromXYZ:vv,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yn}}}),i}const ht=vP();function us(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ra;class xP{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ra===void 0&&(ra=qc("canvas")),ra.width=e.width,ra.height=e.height;const n=ra.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ra}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qc("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=us(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(us(t[n]/255)*255):t[n]=us(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yP=0;class Db{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yP++}),this.uuid=hr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(hd(r[o].image)):s.push(hd(r[o]))}else s=hd(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function hd(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xP.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let SP=0;class Tn extends Ko{constructor(e=Tn.DEFAULT_IMAGE,t=Tn.DEFAULT_MAPPING,n=zs,r=zs,s=Ui,o=rs,a=Zi,l=ms,c=Tn.DEFAULT_ANISOTROPY,u=Ns){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:SP++}),this.uuid=hr(),this.name="",this.source=new Db(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gb)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Js:e.x=e.x-Math.floor(e.x);break;case zs:e.x=e.x<0?0:1;break;case Zf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Js:e.y=e.y-Math.floor(e.y);break;case zs:e.y=e.y<0?0:1;break;case Zf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=gb;Tn.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,n=0,r=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,v=(d+1)/2,b=(p+1)/2,A=(u+h)/4,T=(f+_)/4,C=(g+m)/4;return y>v&&y>b?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=A/n,s=T/n):v>b?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=A/r,s=C/r):b<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),n=T/s,r=C/s),this.set(n,r,s,t),this}let x=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(f-_)/x,this.z=(h-u)/x,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class MP extends Ko{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Tn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Db(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ur extends MP{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Lb extends Tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ci,this.minFilter=ci,this.wrapR=zs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bP extends Tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ci,this.minFilter=ci,this.wrapR=zs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Or{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const h=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*_,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const b=Math.sqrt(y),A=Math.atan2(b,p*x);m=Math.sin(m*A)/b,a=Math.sin(a*A)/b}const v=a*x;if(l=l*m+h*v,c=c*m+d*v,u=u*m+g*v,f=f*m+_*v,m===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),f=a(s/2),h=l(n/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return dd.copy(this).projectOnVector(e),this.sub(dd)}reflect(e){return this.sub(dd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dd=new z,xv=new Or;class gr{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=nr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,nr):nr.fromBufferAttribute(s,o),nr.applyMatrix4(e.matrixWorld),this.expandByPoint(nr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tu.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tu.copy(n.boundingBox)),Tu.applyMatrix4(e.matrixWorld),this.union(Tu)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nr),nr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nl),Eu.subVectors(this.max,Nl),sa.subVectors(e.a,Nl),oa.subVectors(e.b,Nl),aa.subVectors(e.c,Nl),xs.subVectors(oa,sa),ys.subVectors(aa,oa),uo.subVectors(sa,aa);let t=[0,-xs.z,xs.y,0,-ys.z,ys.y,0,-uo.z,uo.y,xs.z,0,-xs.x,ys.z,0,-ys.x,uo.z,0,-uo.x,-xs.y,xs.x,0,-ys.y,ys.x,0,-uo.y,uo.x,0];return!pd(t,sa,oa,aa,Eu)||(t=[1,0,0,0,1,0,0,0,1],!pd(t,sa,oa,aa,Eu))?!1:(wu.crossVectors(xs,ys),t=[wu.x,wu.y,wu.z],pd(t,sa,oa,aa,Eu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hr=[new z,new z,new z,new z,new z,new z,new z,new z],nr=new z,Tu=new gr,sa=new z,oa=new z,aa=new z,xs=new z,ys=new z,uo=new z,Nl=new z,Eu=new z,wu=new z,fo=new z;function pd(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){fo.fromArray(i,s);const a=r.x*Math.abs(fo.x)+r.y*Math.abs(fo.y)+r.z*Math.abs(fo.z),l=e.dot(fo),c=t.dot(fo),u=n.dot(fo);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const TP=new gr,Ul=new z,md=new z;class _r{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):TP.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ul.subVectors(e,this.center);const t=Ul.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ul,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(md.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ul.copy(e.center).add(md)),this.expandByPoint(Ul.copy(e.center).sub(md))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vr=new z,gd=new z,Au=new z,Ss=new z,_d=new z,Ru=new z,vd=new z;class yl{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vr.copy(this.origin).addScaledVector(this.direction,t),Vr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){gd.copy(e).add(t).multiplyScalar(.5),Au.copy(t).sub(e).normalize(),Ss.copy(this.origin).sub(gd);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Au),a=Ss.dot(this.direction),l=-Ss.dot(Au),c=Ss.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(gd).addScaledVector(Au,h),d}intersectSphere(e,t){Vr.subVectors(e.center,this.origin);const n=Vr.dot(this.direction),r=Vr.dot(Vr)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Vr)!==null}intersectTriangle(e,t,n,r,s){_d.subVectors(t,e),Ru.subVectors(n,e),vd.crossVectors(_d,Ru);let o=this.direction.dot(vd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ss.subVectors(this.origin,e);const l=a*this.direction.dot(Ru.crossVectors(Ss,Ru));if(l<0)return null;const c=a*this.direction.dot(_d.cross(Ss));if(c<0||l+c>o)return null;const u=-a*Ss.dot(vd);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(e,t,n,r,s,o,a,l,c,u,f,h,d,g,_,m){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,f,h,d,g,_,m)}set(e,t,n,r,s,o,a,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/la.setFromMatrixColumn(e,0).length(),s=1/la.setFromMatrixColumn(e,1).length(),o=1/la.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(EP,e,wP)}lookAt(e,t,n){const r=this.elements;return Ti.subVectors(e,t),Ti.lengthSq()===0&&(Ti.z=1),Ti.normalize(),Ms.crossVectors(n,Ti),Ms.lengthSq()===0&&(Math.abs(n.z)===1?Ti.x+=1e-4:Ti.z+=1e-4,Ti.normalize(),Ms.crossVectors(n,Ti)),Ms.normalize(),Cu.crossVectors(Ti,Ms),r[0]=Ms.x,r[4]=Cu.x,r[8]=Ti.x,r[1]=Ms.y,r[5]=Cu.y,r[9]=Ti.y,r[2]=Ms.z,r[6]=Cu.z,r[10]=Ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],y=n[7],v=n[11],b=n[15],A=r[0],T=r[4],C=r[8],S=r[12],M=r[1],N=r[5],B=r[9],H=r[13],q=r[2],Q=r[6],W=r[10],j=r[14],V=r[3],he=r[7],U=r[11],_e=r[15];return s[0]=o*A+a*M+l*q+c*V,s[4]=o*T+a*N+l*Q+c*he,s[8]=o*C+a*B+l*W+c*U,s[12]=o*S+a*H+l*j+c*_e,s[1]=u*A+f*M+h*q+d*V,s[5]=u*T+f*N+h*Q+d*he,s[9]=u*C+f*B+h*W+d*U,s[13]=u*S+f*H+h*j+d*_e,s[2]=g*A+_*M+m*q+p*V,s[6]=g*T+_*N+m*Q+p*he,s[10]=g*C+_*B+m*W+p*U,s[14]=g*S+_*H+m*j+p*_e,s[3]=x*A+y*M+v*q+b*V,s[7]=x*T+y*N+v*Q+b*he,s[11]=x*C+y*B+v*W+b*U,s[15]=x*S+y*H+v*j+b*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*a*h+n*c*h+r*a*d-n*l*d)+_*(+t*l*d-t*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+m*(+t*c*f-t*a*d-s*o*f+n*o*d+s*a*u-n*c*u)+p*(-r*a*u-t*l*f+t*a*h+r*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],x=f*m*c-_*h*c+_*l*d-a*m*d-f*l*p+a*h*p,y=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,v=u*_*c-g*f*c+g*a*d-o*_*d-u*a*p+o*f*p,b=g*f*l-u*_*l-g*a*h+o*_*h+u*a*m-o*f*m,A=t*x+n*y+r*v+s*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=x*T,e[1]=(_*h*s-f*m*s-_*r*d+n*m*d+f*r*p-n*h*p)*T,e[2]=(a*m*s-_*l*s+_*r*c-n*m*c-a*r*p+n*l*p)*T,e[3]=(f*l*s-a*h*s-f*r*c+n*h*c+a*r*d-n*l*d)*T,e[4]=y*T,e[5]=(u*m*s-g*h*s+g*r*d-t*m*d-u*r*p+t*h*p)*T,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*p-t*l*p)*T,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*d+t*l*d)*T,e[8]=v*T,e[9]=(g*f*s-u*_*s-g*n*d+t*_*d+u*n*p-t*f*p)*T,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*p+t*a*p)*T,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*d-t*a*d)*T,e[12]=b*T,e[13]=(u*_*r-g*f*r+g*n*h-t*_*h-u*n*m+t*f*m)*T,e[14]=(g*a*r-o*_*r-g*n*l+t*_*l+o*n*m-t*a*m)*T,e[15]=(o*f*r-u*a*r+u*n*l-t*f*l-o*n*h+t*a*h)*T,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,_=o*u,m=o*f,p=a*f,x=l*c,y=l*u,v=l*f,b=n.x,A=n.y,T=n.z;return r[0]=(1-(_+p))*b,r[1]=(d+v)*b,r[2]=(g-y)*b,r[3]=0,r[4]=(d-v)*A,r[5]=(1-(h+p))*A,r[6]=(m+x)*A,r[7]=0,r[8]=(g+y)*T,r[9]=(m-x)*T,r[10]=(1-(h+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=la.set(r[0],r[1],r[2]).length();const o=la.set(r[4],r[5],r[6]).length(),a=la.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ir.copy(this);const c=1/s,u=1/o,f=1/a;return ir.elements[0]*=c,ir.elements[1]*=c,ir.elements[2]*=c,ir.elements[4]*=u,ir.elements[5]*=u,ir.elements[6]*=u,ir.elements[8]*=f,ir.elements[9]*=f,ir.elements[10]*=f,t.setFromRotationMatrix(ir),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=ss){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),f=(t+e)/(t-e),h=(n+r)/(n-r);let d,g;if(a===ss)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Qf)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=ss){const l=this.elements,c=1/(t-e),u=1/(n-r),f=1/(o-s),h=(t+e)*c,d=(n+r)*u;let g,_;if(a===ss)g=(o+s)*f,_=-2*f;else if(a===Qf)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const la=new z,ir=new et,EP=new z(0,0,0),wP=new z(1,1,1),Ms=new z,Cu=new z,Ti=new z,yv=new et,Sv=new Or;class mr{constructor(e=0,t=0,n=0,r=mr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ot(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yv,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sv.setFromEuler(this),this.setFromQuaternion(Sv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mr.DEFAULT_ORDER="XYZ";class Qg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let AP=0;const Mv=new z,ca=new Or,Gr=new et,Pu=new z,Ol=new z,RP=new z,CP=new Or,bv=new z(1,0,0),Tv=new z(0,1,0),Ev=new z(0,0,1),wv={type:"added"},PP={type:"removed"},ua={type:"childadded",child:null},xd={type:"childremoved",child:null};class Xt extends Ko{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:AP++}),this.uuid=hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new z,t=new mr,n=new Or,r=new z(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new et},normalMatrix:{value:new nt}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ca.setFromAxisAngle(e,t),this.quaternion.multiply(ca),this}rotateOnWorldAxis(e,t){return ca.setFromAxisAngle(e,t),this.quaternion.premultiply(ca),this}rotateX(e){return this.rotateOnAxis(bv,e)}rotateY(e){return this.rotateOnAxis(Tv,e)}rotateZ(e){return this.rotateOnAxis(Ev,e)}translateOnAxis(e,t){return Mv.copy(e).applyQuaternion(this.quaternion),this.position.add(Mv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bv,e)}translateY(e){return this.translateOnAxis(Tv,e)}translateZ(e){return this.translateOnAxis(Ev,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Pu.copy(e):Pu.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ol.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gr.lookAt(Ol,Pu,this.up):Gr.lookAt(Pu,Ol,this.up),this.quaternion.setFromRotationMatrix(Gr),r&&(Gr.extractRotation(r.matrixWorld),ca.setFromRotationMatrix(Gr),this.quaternion.premultiply(ca.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wv),ua.child=e,this.dispatchEvent(ua),ua.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(PP),xd.child=e,this.dispatchEvent(xd),xd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wv),ua.child=e,this.dispatchEvent(ua),ua.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ol,e,RP),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ol,CP,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Xt.DEFAULT_UP=new z(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rr=new z,Wr=new z,yd=new z,Xr=new z,fa=new z,ha=new z,Av=new z,Sd=new z,Md=new z,bd=new z,Td=new vt,Ed=new vt,wd=new vt;class ar{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),rr.subVectors(e,t),r.cross(rr);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){rr.subVectors(r,t),Wr.subVectors(n,t),yd.subVectors(e,t);const o=rr.dot(rr),a=rr.dot(Wr),l=rr.dot(yd),c=Wr.dot(Wr),u=Wr.dot(yd),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Xr)===null?!1:Xr.x>=0&&Xr.y>=0&&Xr.x+Xr.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Xr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Xr.x),l.addScaledVector(o,Xr.y),l.addScaledVector(a,Xr.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Td.setScalar(0),Ed.setScalar(0),wd.setScalar(0),Td.fromBufferAttribute(e,t),Ed.fromBufferAttribute(e,n),wd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Td,s.x),o.addScaledVector(Ed,s.y),o.addScaledVector(wd,s.z),o}static isFrontFacing(e,t,n,r){return rr.subVectors(n,t),Wr.subVectors(e,t),rr.cross(Wr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rr.subVectors(this.c,this.b),Wr.subVectors(this.a,this.b),rr.cross(Wr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ar.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ar.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return ar.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return ar.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ar.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;fa.subVectors(r,n),ha.subVectors(s,n),Sd.subVectors(e,n);const l=fa.dot(Sd),c=ha.dot(Sd);if(l<=0&&c<=0)return t.copy(n);Md.subVectors(e,r);const u=fa.dot(Md),f=ha.dot(Md);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(fa,o);bd.subVectors(e,s);const d=fa.dot(bd),g=ha.dot(bd);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ha,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Av.subVectors(s,r),a=(f-u)/(f-u+(d-g)),t.copy(r).addScaledVector(Av,a);const p=1/(m+_+h);return o=_*p,a=h*p,t.copy(n).addScaledVector(fa,o).addScaledVector(ha,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ib={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bs={h:0,s:0,l:0},Du={h:0,s:0,l:0};function Ad(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ht.workingColorSpace){if(e=Jg(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ad(o,s,e+1/3),this.g=Ad(o,s,e),this.b=Ad(o,s,e-1/3)}return ht.toWorkingColorSpace(this,r),this}setStyle(e,t=yn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yn){const n=Ib[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}copyLinearToSRGB(e){return this.r=qa(e.r),this.g=qa(e.g),this.b=qa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return ht.fromWorkingColorSpace(Nn.copy(this),e),Math.round(ot(Nn.r*255,0,255))*65536+Math.round(ot(Nn.g*255,0,255))*256+Math.round(ot(Nn.b*255,0,255))}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(Nn.copy(this),t);const n=Nn.r,r=Nn.g,s=Nn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(Nn.copy(this),t),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=yn){ht.fromWorkingColorSpace(Nn.copy(this),e);const t=Nn.r,n=Nn.g,r=Nn.b;return e!==yn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(bs),this.setHSL(bs.h+e,bs.s+t,bs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bs),e.getHSL(Du);const n=bc(bs.h,Du.h,t),r=bc(bs.s,Du.s,t),s=bc(bs.l,Du.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Ge;Ge.NAMES=Ib;let DP=0;class dr extends Ko{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DP++}),this.uuid=hr(),this.name="",this.type="Material",this.blending=ja,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xp,this.blendDst=jp,this.blendEquation=To,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=cl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ia,this.stencilZFail=ia,this.stencilZPass=ia,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ja&&(n.blending=this.blending),this.side!==ps&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xp&&(n.blendSrc=this.blendSrc),this.blendDst!==jp&&(n.blendDst=this.blendDst),this.blendEquation!==To&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cl&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dv&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ia&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ia&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ia&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Rr extends dr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mr,this.combine=Gg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nn=new z,Lu=new Fe;let LP=0;class ui{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:LP++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Cm,this.updateRanges=[],this.gpuType=cr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Lu.fromBufferAttribute(this,t),Lu.applyMatrix3(e),this.setXY(t,Lu.x,Lu.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=or(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=or(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=or(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=or(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=or(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cm&&(e.usage=this.usage),e}}class Nb extends ui{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ub extends ui{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class It extends ui{constructor(e,t,n){super(new Float32Array(e),t,n)}}let IP=0;const Gi=new et,Rd=new Xt,da=new z,Ei=new gr,Fl=new gr,_n=new z;class wn extends Ko{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IP++}),this.uuid=hr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pb(e)?Ub:Nb)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new nt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gi.makeRotationFromQuaternion(e),this.applyMatrix4(Gi),this}rotateX(e){return Gi.makeRotationX(e),this.applyMatrix4(Gi),this}rotateY(e){return Gi.makeRotationY(e),this.applyMatrix4(Gi),this}rotateZ(e){return Gi.makeRotationZ(e),this.applyMatrix4(Gi),this}translate(e,t,n){return Gi.makeTranslation(e,t,n),this.applyMatrix4(Gi),this}scale(e,t,n){return Gi.makeScale(e,t,n),this.applyMatrix4(Gi),this}lookAt(e){return Rd.lookAt(e),Rd.updateMatrix(),this.applyMatrix4(Rd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(da).negate(),this.translate(da.x,da.y,da.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new It(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Ei.setFromBufferAttribute(s),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Ei.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Ei.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Ei.min),this.boundingBox.expandByPoint(Ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _r);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(Ei.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Fl.setFromBufferAttribute(a),this.morphTargetsRelative?(_n.addVectors(Ei.min,Fl.min),Ei.expandByPoint(_n),_n.addVectors(Ei.max,Fl.max),Ei.expandByPoint(_n)):(Ei.expandByPoint(Fl.min),Ei.expandByPoint(Fl.max))}Ei.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)_n.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(_n));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)_n.fromBufferAttribute(a,c),l&&(da.fromBufferAttribute(e,c),_n.add(da)),r=Math.max(r,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new z,l[C]=new z;const c=new z,u=new z,f=new z,h=new Fe,d=new Fe,g=new Fe,_=new z,m=new z;function p(C,S,M){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,S),f.fromBufferAttribute(n,M),h.fromBufferAttribute(s,C),d.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const N=1/(d.x*g.y-g.x*d.y);isFinite(N)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(N),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(N),a[C].add(_),a[S].add(_),a[M].add(_),l[C].add(m),l[S].add(m),l[M].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let C=0,S=x.length;C<S;++C){const M=x[C],N=M.start,B=M.count;for(let H=N,q=N+B;H<q;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const y=new z,v=new z,b=new z,A=new z;function T(C){b.fromBufferAttribute(r,C),A.copy(b);const S=a[C];y.copy(S),y.sub(b.multiplyScalar(b.dot(S))).normalize(),v.crossVectors(A,S);const N=v.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,N)}for(let C=0,S=x.length;C<S;++C){const M=x[C],N=M.start,B=M.count;for(let H=N,q=N+B;H<q;H+=3)T(e.getX(H+0)),T(e.getX(H+1)),T(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ui(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,f=new z;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new ui(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wn,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rv=new et,ho=new yl,Iu=new _r,Cv=new z,Nu=new z,Uu=new z,Ou=new z,Cd=new z,Fu=new z,Pv=new z,Bu=new z;class ln extends Xt{constructor(e=new wn,t=new Rr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Fu.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Cd.fromBufferAttribute(f,e),o?Fu.addScaledVector(Cd,u):Fu.addScaledVector(Cd.sub(t),u))}t.add(Fu)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Iu.copy(n.boundingSphere),Iu.applyMatrix4(s),ho.copy(e.ray).recast(e.near),!(Iu.containsPoint(ho.origin)===!1&&(ho.intersectSphere(Iu,Cv)===null||ho.origin.distanceToSquared(Cv)>(e.far-e.near)**2))&&(Rv.copy(s).invert(),ho.copy(e.ray).applyMatrix4(Rv),!(n.boundingBox!==null&&ho.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ho)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=x,b=y;v<b;v+=3){const A=a.getX(v),T=a.getX(v+1),C=a.getX(v+2);r=ku(this,p,e,n,c,u,f,A,T,C),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const x=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);r=ku(this,o,e,n,c,u,f,x,y,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=x,b=y;v<b;v+=3){const A=v,T=v+1,C=v+2;r=ku(this,p,e,n,c,u,f,A,T,C),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const x=m,y=m+1,v=m+2;r=ku(this,o,e,n,c,u,f,x,y,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function NP(i,e,t,n,r,s,o,a){let l;if(e.side===yi?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===ps,a),l===null)return null;Bu.copy(a),Bu.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Bu);return c<t.near||c>t.far?null:{distance:c,point:Bu.clone(),object:i}}function ku(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Nu),i.getVertexPosition(l,Uu),i.getVertexPosition(c,Ou);const u=NP(i,e,t,n,Nu,Uu,Ou,Pv);if(u){const f=new z;ar.getBarycoord(Pv,Nu,Uu,Ou,f),r&&(u.uv=ar.getInterpolatedAttribute(r,a,l,c,f,new Fe)),s&&(u.uv1=ar.getInterpolatedAttribute(s,a,l,c,f,new Fe)),o&&(u.normal=ar.getInterpolatedAttribute(o,a,l,c,f,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new z,materialIndex:0};ar.getNormal(Nu,Uu,Ou,h.normal),u.face=h,u.barycoord=f}return u}class ro extends wn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(u,3)),this.setAttribute("uv",new It(f,2));function g(_,m,p,x,y,v,b,A,T,C,S){const M=v/T,N=b/C,B=v/2,H=b/2,q=A/2,Q=T+1,W=C+1;let j=0,V=0;const he=new z;for(let U=0;U<W;U++){const _e=U*N-H;for(let Ce=0;Ce<Q;Ce++){const He=Ce*M-B;he[_]=He*x,he[m]=_e*y,he[p]=q,c.push(he.x,he.y,he.z),he[_]=0,he[m]=0,he[p]=A>0?1:-1,u.push(he.x,he.y,he.z),f.push(Ce/T),f.push(1-U/C),j+=1}}for(let U=0;U<C;U++)for(let _e=0;_e<T;_e++){const Ce=h+_e+Q*U,He=h+_e+Q*(U+1),te=h+(_e+1)+Q*(U+1),de=h+(_e+1)+Q*U;l.push(Ce,He,de),l.push(He,te,de),V+=6}a.addGroup(d,V,S),d+=V,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ro(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ml(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Qn(i){const e={};for(let t=0;t<i.length;t++){const n=ml(i[t]);for(const r in n)e[r]=n[r]}return e}function UP(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ob(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const qo={clone:ml,merge:Qn};var OP=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FP=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends dr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=OP,this.fragmentShader=FP,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ml(e.uniforms),this.uniformsGroups=UP(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Fb extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=ss}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ts=new z,Dv=new Fe,Lv=new Fe;class Rn extends Fb{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pl*2*Math.atan(Math.tan(Mc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ts.x,Ts.y).multiplyScalar(-e/Ts.z),Ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ts.x,Ts.y).multiplyScalar(-e/Ts.z)}getViewSize(e,t){return this.getViewBounds(e,Dv,Lv),t.subVectors(Lv,Dv)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mc*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const pa=-90,ma=1;class BP extends Xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Rn(pa,ma,e,t);r.layers=this.layers,this.add(r);const s=new Rn(pa,ma,e,t);s.layers=this.layers,this.add(s);const o=new Rn(pa,ma,e,t);o.layers=this.layers,this.add(o);const a=new Rn(pa,ma,e,t);a.layers=this.layers,this.add(a);const l=new Rn(pa,ma,e,t);l.layers=this.layers,this.add(l);const c=new Rn(pa,ma,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===ss)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qf)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Bb extends Tn{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ul,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kP extends Ur{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Bb(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ui}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ro(5,5,5),s=new Xn({name:"CubemapFromEquirect",uniforms:ml(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yi,blending:cs});s.uniforms.tEquirect.value=t;const o=new ln(r,s),a=t.minFilter;return t.minFilter===rs&&(t.minFilter=Ui),new BP(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class Ro extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zP={type:"move"};class Pd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ro,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ro,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ro,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zP)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ro;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class kb extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mr,this.environmentIntensity=1,this.environmentRotation=new mr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class zb{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Cm,this.updateRanges=[],this.version=0,this.uuid=hr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Kn=new z;class os{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Kn.fromBufferAttribute(this,t),Kn.applyMatrix4(e),this.setXYZ(t,Kn.x,Kn.y,Kn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kn.fromBufferAttribute(this,t),Kn.applyNormalMatrix(e),this.setXYZ(t,Kn.x,Kn.y,Kn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kn.fromBufferAttribute(this,t),Kn.transformDirection(e),this.setXYZ(t,Kn.x,Kn.y,Kn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=or(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=or(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=or(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=or(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=or(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array),s=At(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new ui(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new os(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Iv=new z,Nv=new vt,Uv=new vt,HP=new z,Ov=new et,zu=new z,Dd=new _r,Fv=new et,Ld=new yl;class VP extends ln{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=cv,this.bindMatrix=new et,this.bindMatrixInverse=new et,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new gr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,zu),this.boundingBox.expandByPoint(zu)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new _r),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,zu),this.boundingSphere.expandByPoint(zu)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dd.copy(this.boundingSphere),Dd.applyMatrix4(r),e.ray.intersectsSphere(Dd)!==!1&&(Fv.copy(r).invert(),Ld.copy(e.ray).applyMatrix4(Fv),!(this.boundingBox!==null&&Ld.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ld)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new vt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===cv?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===kC?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;Nv.fromBufferAttribute(r.attributes.skinIndex,e),Uv.fromBufferAttribute(r.attributes.skinWeight,e),Iv.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Uv.getComponent(s);if(o!==0){const a=Nv.getComponent(s);Ov.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(HP.copy(Iv).applyMatrix4(Ov),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Hb extends Xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Vb extends Tn{constructor(e=null,t=1,n=1,r,s,o,a,l,c=ci,u=ci,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Bv=new et,GP=new et;class e_{constructor(e=[],t=[]){this.uuid=hr(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new et)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new et;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:GP;Bv.multiplyMatrices(a,t[s]),Bv.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e_(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Vb(t,e,e,Zi,cr);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Hb),this.bones.push(o),this.boneInverses.push(new et().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}class Pm extends ui{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ga=new et,kv=new et,Hu=[],zv=new gr,WP=new et,Bl=new ln,kl=new _r;class XP extends ln{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Pm(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,WP)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ga),zv.copy(e.boundingBox).applyMatrix4(ga),this.boundingBox.union(zv)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _r),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ga),kl.copy(e.boundingSphere).applyMatrix4(ga),this.boundingSphere.union(kl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Bl.geometry=this.geometry,Bl.material=this.material,Bl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),kl.copy(this.boundingSphere),kl.applyMatrix4(n),e.ray.intersectsSphere(kl)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ga),kv.multiplyMatrices(n,ga),Bl.matrixWorld=kv,Bl.raycast(e,Hu);for(let o=0,a=Hu.length;o<a;o++){const l=Hu[o];l.instanceId=s,l.object=this,t.push(l)}Hu.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Pm(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Vb(new Float32Array(r*this.count),r,this.count,Yg,cr));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Id=new z,jP=new z,YP=new nt;class Ds{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Id.subVectors(n,t).cross(jP.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Id),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||YP.getNormalMatrix(e),r=this.coplanarPoint(Id).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const po=new _r,Vu=new z;class t_{constructor(e=new Ds,t=new Ds,n=new Ds,r=new Ds,s=new Ds,o=new Ds){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ss){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],x=r[13],y=r[14],v=r[15];if(n[0].setComponents(l-s,h-c,m-d,v-p).normalize(),n[1].setComponents(l+s,h+c,m+d,v+p).normalize(),n[2].setComponents(l+o,h+u,m+g,v+x).normalize(),n[3].setComponents(l-o,h-u,m-g,v-x).normalize(),n[4].setComponents(l-a,h-f,m-_,v-y).normalize(),t===ss)n[5].setComponents(l+a,h+f,m+_,v+y).normalize();else if(t===Qf)n[5].setComponents(a,f,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),po.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),po.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(po)}intersectsSprite(e){return po.center.set(0,0,0),po.radius=.7071067811865476,po.applyMatrix4(e.matrixWorld),this.intersectsSphere(po)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Vu.x=r.normal.x>0?e.max.x:e.min.x,Vu.y=r.normal.y>0?e.max.y:e.min.y,Vu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class nu extends dr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const eh=new z,th=new z,Hv=new et,zl=new yl,Gu=new _r,Nd=new z,Vv=new z;class n_ extends Xt{constructor(e=new wn,t=new nu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)eh.fromBufferAttribute(t,r-1),th.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=eh.distanceTo(th);e.setAttribute("lineDistance",new It(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gu.copy(n.boundingSphere),Gu.applyMatrix4(r),Gu.radius+=s,e.ray.intersectsSphere(Gu)===!1)return;Hv.copy(r).invert(),zl.copy(e.ray).applyMatrix4(Hv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),x=u.getX(_+1),y=Wu(this,e,zl,l,p,x,_);y&&t.push(y)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=Wu(this,e,zl,l,_,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=Wu(this,e,zl,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Wu(this,e,zl,l,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Wu(i,e,t,n,r,s,o){const a=i.geometry.attributes.position;if(eh.fromBufferAttribute(a,r),th.fromBufferAttribute(a,s),t.distanceSqToSegment(eh,th,Nd,Vv)>n)return;Nd.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Nd);if(!(c<e.near||c>e.far))return{distance:c,point:Vv.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Gv=new z,Wv=new z;class i_ extends n_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Gv.fromBufferAttribute(t,r),Wv.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Gv.distanceTo(Wv);e.setAttribute("lineDistance",new It(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qP extends n_{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class r_ extends dr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Xv=new et,Dm=new yl,Xu=new _r,ju=new z;class s_ extends Xt{constructor(e=new wn,t=new r_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xu.copy(n.boundingSphere),Xu.applyMatrix4(r),Xu.radius+=s,e.ray.intersectsSphere(Xu)===!1)return;Xv.copy(r).invert(),Dm.copy(e.ray).applyMatrix4(Xv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,_=d;g<_;g++){const m=c.getX(g);ju.fromBufferAttribute(f,m),jv(ju,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,_=d;g<_;g++)ju.fromBufferAttribute(f,g),jv(ju,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function jv(i,e,t,n,r,s,o){const a=Dm.distanceSqToPoint(i);if(a<t){const l=new z;Dm.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Gb extends Tn{constructor(e,t,n,r,s,o,a,l,c,u=Ya){if(u!==Ya&&u!==dl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ya&&(n=Yo),n===void 0&&u===dl&&(n=hl),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ci,this.minFilter=l!==void 0?l:ci,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class o_ extends wn{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];a(r),c(n),u(),this.setAttribute("position",new It(s,3)),this.setAttribute("normal",new It(s.slice(),3)),this.setAttribute("uv",new It(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const y=new z,v=new z,b=new z;for(let A=0;A<t.length;A+=3)d(t[A+0],y),d(t[A+1],v),d(t[A+2],b),l(y,v,b,x)}function l(x,y,v,b){const A=b+1,T=[];for(let C=0;C<=A;C++){T[C]=[];const S=x.clone().lerp(v,C/A),M=y.clone().lerp(v,C/A),N=A-C;for(let B=0;B<=N;B++)B===0&&C===A?T[C][B]=S:T[C][B]=S.clone().lerp(M,B/N)}for(let C=0;C<A;C++)for(let S=0;S<2*(A-C)-1;S++){const M=Math.floor(S/2);S%2===0?(h(T[C][M+1]),h(T[C+1][M]),h(T[C][M])):(h(T[C][M+1]),h(T[C+1][M+1]),h(T[C+1][M]))}}function c(x){const y=new z;for(let v=0;v<s.length;v+=3)y.x=s[v+0],y.y=s[v+1],y.z=s[v+2],y.normalize().multiplyScalar(x),s[v+0]=y.x,s[v+1]=y.y,s[v+2]=y.z}function u(){const x=new z;for(let y=0;y<s.length;y+=3){x.x=s[y+0],x.y=s[y+1],x.z=s[y+2];const v=m(x)/2/Math.PI+.5,b=p(x)/Math.PI+.5;o.push(v,1-b)}g(),f()}function f(){for(let x=0;x<o.length;x+=6){const y=o[x+0],v=o[x+2],b=o[x+4],A=Math.max(y,v,b),T=Math.min(y,v,b);A>.9&&T<.1&&(y<.2&&(o[x+0]+=1),v<.2&&(o[x+2]+=1),b<.2&&(o[x+4]+=1))}}function h(x){s.push(x.x,x.y,x.z)}function d(x,y){const v=x*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function g(){const x=new z,y=new z,v=new z,b=new z,A=new Fe,T=new Fe,C=new Fe;for(let S=0,M=0;S<s.length;S+=9,M+=6){x.set(s[S+0],s[S+1],s[S+2]),y.set(s[S+3],s[S+4],s[S+5]),v.set(s[S+6],s[S+7],s[S+8]),A.set(o[M+0],o[M+1]),T.set(o[M+2],o[M+3]),C.set(o[M+4],o[M+5]),b.copy(x).add(y).add(v).divideScalar(3);const N=m(b);_(A,M+0,x,N),_(T,M+2,y,N),_(C,M+4,v,N)}}function _(x,y,v,b){b<0&&x.x===1&&(o[y]=x.x-1),v.x===0&&v.z===0&&(o[y]=b/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new o_(e.vertices,e.indices,e.radius,e.details)}}class a_ extends o_{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new a_(e.radius,e.detail)}}class wh extends wn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const x=p*h-o;for(let y=0;y<c;y++){const v=y*f-s;g.push(v,-x,0),_.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const y=x+c*p,v=x+c*(p+1),b=x+1+c*(p+1),A=x+1+c*p;d.push(y,v,A),d.push(v,b,A)}this.setIndex(d),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(_,3)),this.setAttribute("uv",new It(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wh(e.width,e.height,e.widthSegments,e.heightSegments)}}class nh extends wn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new z,h=new z,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const x=[],y=p/n;let v=0;p===0&&o===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let b=0;b<=t;b++){const A=b/t;f.x=-e*Math.cos(r+A*s)*Math.sin(o+y*a),f.y=e*Math.cos(o+y*a),f.z=e*Math.sin(r+A*s)*Math.sin(o+y*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),m.push(A+v,1-y),x.push(c++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const y=u[p][x+1],v=u[p][x],b=u[p+1][x],A=u[p+1][x+1];(p!==0||o>0)&&d.push(y,v,A),(p!==n-1||l<Math.PI)&&d.push(v,b,A)}this.setIndex(d),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(_,3)),this.setAttribute("uv",new It(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class l_ extends wn{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new z,f=new z,h=new z;for(let d=0;d<=n;d++)for(let g=0;g<=r;g++){const _=g/r*s,m=d/n*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(_),f.y=(e+t*Math.cos(m))*Math.sin(_),f.z=t*Math.sin(m),a.push(f.x,f.y,f.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),h.subVectors(f,u).normalize(),l.push(h.x,h.y,h.z),c.push(g/r),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=r;g++){const _=(r+1)*d+g-1,m=(r+1)*(d-1)+g-1,p=(r+1)*(d-1)+g,x=(r+1)*d+g;o.push(_,m,x),o.push(m,p,x)}this.setIndex(o),this.setAttribute("position",new It(a,3)),this.setAttribute("normal",new It(l,3)),this.setAttribute("uv",new It(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new l_(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class c_ extends wn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,r=new z,s=new z;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const f=l[c],h=f.start,d=f.count;for(let g=h,_=h+d;g<_;g+=3)for(let m=0;m<3;m++){const p=a.getX(g+m),x=a.getX(g+(m+1)%3);r.fromBufferAttribute(o,p),s.fromBufferAttribute(o,x),Yv(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,f=3*a+(c+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,f),Yv(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new It(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Yv(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(r)===!0?!1:(t.add(n),t.add(r),!0)}class $P extends Xn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class u_ extends dr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zg,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fr extends u_{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class KP extends dr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ge(16777215),this.specular=new Ge(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zg,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mr,this.combine=Gg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ZP extends dr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=VC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class JP extends dr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class QP extends nu{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Yu(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function eD(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function tD(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function qv(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r}function Wb(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}class iu{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class nD extends iu{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uv,endingEnd:uv}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case fv:s=e,a=2*t-n;break;case hv:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case fv:o=e,l=2*n-t;break;case hv:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(n-t)/(r-t),_=g*g,m=_*g,p=-h*m+2*h*_-h*g,x=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*g+1,y=(-1-d)*m+(1.5+d)*_+.5*g,v=d*m-d*_;for(let b=0;b!==a;++b)s[b]=p*o[u+b]+x*o[c+b]+y*o[l+b]+v*o[f+b];return s}}class iD extends iu{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),f=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*f+o[l+h]*u;return s}}class rD extends iu{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Br{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Yu(t,this.TimeBufferType),this.values=Yu(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Yu(e.times,Array),values:Yu(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new rD(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new iD(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new nD(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case jc:t=this.InterpolantFactoryMethodDiscrete;break;case Yc:t=this.InterpolantFactoryMethodLinear;break;case ud:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return jc;case this.InterpolantFactoryMethodLinear:return Yc;case this.InterpolantFactoryMethodSmooth:return ud}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&eD(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ud,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const f=a*n,h=f-n,d=f+n;for(let g=0;g!==n;++g){const _=t[f+g];if(_!==t[h+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*n,h=o*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Br.prototype.TimeBufferType=Float32Array;Br.prototype.ValueBufferType=Float32Array;Br.prototype.DefaultInterpolation=Yc;class Sl extends Br{constructor(e,t,n){super(e,t,n)}}Sl.prototype.ValueTypeName="bool";Sl.prototype.ValueBufferType=Array;Sl.prototype.DefaultInterpolation=jc;Sl.prototype.InterpolantFactoryMethodLinear=void 0;Sl.prototype.InterpolantFactoryMethodSmooth=void 0;class Xb extends Br{}Xb.prototype.ValueTypeName="color";class gl extends Br{}gl.prototype.ValueTypeName="number";class sD extends iu{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Or.slerpFlat(s,0,o,c-a,o,c,l);return s}}class _l extends Br{InterpolantFactoryMethodLinear(e){return new sD(this.times,this.values,this.getValueSize(),e)}}_l.prototype.ValueTypeName="quaternion";_l.prototype.InterpolantFactoryMethodSmooth=void 0;class Ml extends Br{constructor(e,t,n){super(e,t,n)}}Ml.prototype.ValueTypeName="string";Ml.prototype.ValueBufferType=Array;Ml.prototype.DefaultInterpolation=jc;Ml.prototype.InterpolantFactoryMethodLinear=void 0;Ml.prototype.InterpolantFactoryMethodSmooth=void 0;class vl extends Br{}vl.prototype.ValueTypeName="vector";class oD{constructor(e="",t=-1,n=[],r=zC){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=hr(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(lD(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Br.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=tD(l);l=qv(l,1,u),c=qv(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new gl(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let h=r[f];h||(r[f]=h=[]),h.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,h,d,g,_){if(d.length!==0){const m=[],p=[];Wb(d,m,p,g),m.length!==0&&_.push(new f(h,m,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let _=0;_<h[g].morphTargets.length;_++)d[h[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let x=0;x!==h[g].morphTargets.length;++x){const y=h[g];m.push(y.time),p.push(y.morphTarget===_?1:0)}r.push(new gl(".morphTargetInfluence["+_+"]",m,p))}l=d.length*o}else{const d=".bones["+t[f].name+"]";n(vl,d+".position",h,"pos",r),n(_l,d+".quaternion",h,"rot",r),n(vl,d+".scale",h,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function aD(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return gl;case"vector":case"vector2":case"vector3":case"vector4":return vl;case"color":return Xb;case"quaternion":return _l;case"bool":case"boolean":return Sl;case"string":return Ml}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function lD(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=aD(i.type);if(i.times===void 0){const t=[],n=[];Wb(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Hs={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class cD{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const uD=new cD;class bl{constructor(e){this.manager=e!==void 0?e:uD,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}bl.DEFAULT_MATERIAL_NAME="__DEFAULT";const jr={};class fD extends Error{constructor(e,t){super(e),this.response=t}}class jb extends bl{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Hs.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(jr[e]!==void 0){jr[e].push({onLoad:t,onProgress:n,onError:r});return}jr[e]=[],jr[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=jr[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){x();function x(){f.read().then(({done:y,value:v})=>{if(y)p.close();else{_+=v.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let A=0,T=u.length;A<T;A++){const C=u[A];C.onProgress&&C.onProgress(b)}p.enqueue(v),x()}},y=>{p.error(y)})}}});return new Response(m)}else throw new fD(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Hs.add(e,c);const u=jr[e];delete jr[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=jr[e];if(u===void 0)throw this.manager.itemError(e),c;delete jr[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class hD extends bl{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Hs.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=qc("img");function l(){u(),Hs.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class ru extends bl{constructor(e){super(e)}load(e,t,n,r){const s=new Tn,o=new hD(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Ah extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ud=new et,$v=new z,Kv=new z;class f_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new t_,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;$v.setFromMatrixPosition(e.matrixWorld),t.position.copy($v),Kv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kv),t.updateMatrixWorld(),Ud.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ud),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ud)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class dD extends f_{constructor(){super(new Rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=pl*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Yb extends Ah{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new dD}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Zv=new et,Hl=new z,Od=new z;class pD extends f_{constructor(){super(new Rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Fe(4,2),this._viewportCount=6,this._viewports=[new vt(2,1,1,1),new vt(0,1,1,1),new vt(3,1,1,1),new vt(1,1,1,1),new vt(3,0,1,1),new vt(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Hl.setFromMatrixPosition(e.matrixWorld),n.position.copy(Hl),Od.copy(n.position),Od.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Od),n.updateMatrixWorld(),r.makeTranslation(-Hl.x,-Hl.y,-Hl.z),Zv.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zv)}}class Lm extends Ah{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new pD}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Rh extends Fb{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class mD extends f_{constructor(){super(new Rh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gD extends Ah{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new mD}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class qb extends Ah{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Tc{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class _D extends wn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class vD extends bl{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Hs.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Hs.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),Hs.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Hs.add(e,l),s.manager.itemStart(e)}}class xD extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class $b{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Jv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Jv();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Jv(){return performance.now()}const h_="\\[\\]\\.:\\/",yD=new RegExp("["+h_+"]","g"),d_="[^"+h_+"]",SD="[^"+h_.replace("\\.","")+"]",MD=/((?:WC+[\/:])*)/.source.replace("WC",d_),bD=/(WCOD+)?/.source.replace("WCOD",SD),TD=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",d_),ED=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",d_),wD=new RegExp("^"+MD+bD+TD+ED+"$"),AD=["material","materials","bones","map"];class RD{constructor(e,t,n){const r=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Rt{constructor(e,t,n){this.path=t,this.parsedPath=n||Rt.parseTrackName(t),this.node=Rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Rt.Composite(e,t,n):new Rt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(yD,"")}static parseTrackName(e){const t=wD.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);AD.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=Rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Rt.Composite=RD;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Im extends zb{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const Qv=new et;class CD{constructor(e,t,n=0,r=1/0){this.ray=new yl(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Qg,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Qv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qv),this}intersectObject(e,t=!0,n=[]){return Nm(e,this,n,t),n.sort(ex),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Nm(e[r],this,n,t);return n.sort(ex),n}}function ex(i,e){return i.distance-e.distance}function Nm(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)Nm(s[o],e,t,!0)}}class tx{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ot(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ot(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class nx extends i_{constructor(e=10,t=10,n=4473924,r=8947848){n=new Ge(n),r=new Ge(r);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let h=0,d=0,g=-a;h<=t;h++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=h===s?n:r;_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3}const u=new wn;u.setAttribute("position",new It(l,3)),u.setAttribute("color",new It(c,3));const f=new nu({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class PD extends Ko{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function ix(i,e,t,n){const r=DD(n);switch(t){case Sb:return i*e;case bb:return i*e;case Tb:return i*e*2;case Yg:return i*e/r.components*r.byteLength;case qg:return i*e/r.components*r.byteLength;case Eb:return i*e*2/r.components*r.byteLength;case $g:return i*e*2/r.components*r.byteLength;case Mb:return i*e*3/r.components*r.byteLength;case Zi:return i*e*4/r.components*r.byteLength;case Kg:return i*e*4/r.components*r.byteLength;case yf:case Sf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Mf:case bf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case im:case sm:return Math.max(i,16)*Math.max(e,8)/4;case nm:case rm:return Math.max(i,8)*Math.max(e,8)/2;case om:case am:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case lm:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cm:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case um:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case fm:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case hm:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case dm:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case pm:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case mm:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case gm:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case _m:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case vm:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case xm:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ym:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Sm:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Mm:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Tf:case bm:case Tm:return Math.ceil(i/4)*Math.ceil(e/4)*16;case wb:case Em:return Math.ceil(i/4)*Math.ceil(e/4)*8;case wm:case Am:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function DD(i){switch(i){case ms:case vb:return{byteLength:1,components:1};case Xc:case xb:case Qs:return{byteLength:2,components:1};case Xg:case jg:return{byteLength:2,components:4};case Yo:case Wg:case cr:return{byteLength:4,components:1};case yb:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vg}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vg);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Kb(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function LD(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var ID=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ND=`#ifdef USE_ALPHAHASH
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
#endif`,UD=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,OD=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FD=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,BD=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kD=`#ifdef USE_AOMAP
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
#endif`,zD=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,HD=`#ifdef USE_BATCHING
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
#endif`,VD=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,GD=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,WD=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,XD=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jD=`#ifdef USE_IRIDESCENCE
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
#endif`,YD=`#ifdef USE_BUMPMAP
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
#endif`,qD=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$D=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,KD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ZD=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,JD=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,QD=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eL=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tL=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nL=`#define PI 3.141592653589793
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
} // validated`,iL=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rL=`vec3 transformedNormal = objectNormal;
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
#endif`,sL=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oL=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aL=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lL=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cL="gl_FragColor = linearToOutputTexel( gl_FragColor );",uL=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fL=`#ifdef USE_ENVMAP
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
#endif`,hL=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dL=`#ifdef USE_ENVMAP
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
#endif`,pL=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mL=`#ifdef USE_ENVMAP
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
#endif`,gL=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_L=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vL=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xL=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yL=`#ifdef USE_GRADIENTMAP
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
}`,SL=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ML=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,TL=`uniform bool receiveShadow;
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
#endif`,EL=`#ifdef USE_ENVMAP
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
#endif`,wL=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,AL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,RL=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,CL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,PL=`PhysicalMaterial material;
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
#endif`,DL=`struct PhysicalMaterial {
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
}`,LL=`
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
#endif`,IL=`#if defined( RE_IndirectDiffuse )
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
#endif`,NL=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,UL=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OL=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FL=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BL=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kL=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zL=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,HL=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,VL=`#if defined( USE_POINTS_UV )
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
#endif`,GL=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,WL=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,XL=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jL=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,YL=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qL=`#ifdef USE_MORPHTARGETS
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
#endif`,$L=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KL=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ZL=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,JL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,t2=`#ifdef USE_NORMALMAP
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
#endif`,n2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,i2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,r2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,s2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,o2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,a2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,l2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,c2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,u2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,f2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,h2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,d2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,p2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,m2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,g2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_2=`float getShadowMask() {
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
}`,v2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,x2=`#ifdef USE_SKINNING
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
#endif`,y2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,S2=`#ifdef USE_SKINNING
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
#endif`,M2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,b2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,E2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,w2=`#ifdef USE_TRANSMISSION
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
#endif`,A2=`#ifdef USE_TRANSMISSION
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
#endif`,R2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const L2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,I2=`uniform sampler2D t2D;
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
}`,N2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,O2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B2=`#include <common>
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
}`,k2=`#if DEPTH_PACKING == 3200
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
}`,z2=`#define DISTANCE
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
}`,H2=`#define DISTANCE
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
}`,V2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,G2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W2=`uniform float scale;
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
}`,X2=`uniform vec3 diffuse;
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
}`,j2=`#include <common>
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
}`,Y2=`uniform vec3 diffuse;
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
}`,q2=`#define LAMBERT
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
}`,$2=`#define LAMBERT
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
}`,K2=`#define MATCAP
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
}`,Z2=`#define MATCAP
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
}`,J2=`#define NORMAL
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
}`,Q2=`#define NORMAL
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
}`,eI=`#define PHONG
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
}`,tI=`#define PHONG
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
}`,nI=`#define STANDARD
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
}`,iI=`#define STANDARD
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
}`,rI=`#define TOON
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
}`,sI=`#define TOON
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
}`,oI=`uniform float size;
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
}`,aI=`uniform vec3 diffuse;
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
}`,lI=`#include <common>
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
}`,cI=`uniform vec3 color;
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
}`,uI=`uniform float rotation;
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
}`,fI=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:ID,alphahash_pars_fragment:ND,alphamap_fragment:UD,alphamap_pars_fragment:OD,alphatest_fragment:FD,alphatest_pars_fragment:BD,aomap_fragment:kD,aomap_pars_fragment:zD,batching_pars_vertex:HD,batching_vertex:VD,begin_vertex:GD,beginnormal_vertex:WD,bsdfs:XD,iridescence_fragment:jD,bumpmap_pars_fragment:YD,clipping_planes_fragment:qD,clipping_planes_pars_fragment:$D,clipping_planes_pars_vertex:KD,clipping_planes_vertex:ZD,color_fragment:JD,color_pars_fragment:QD,color_pars_vertex:eL,color_vertex:tL,common:nL,cube_uv_reflection_fragment:iL,defaultnormal_vertex:rL,displacementmap_pars_vertex:sL,displacementmap_vertex:oL,emissivemap_fragment:aL,emissivemap_pars_fragment:lL,colorspace_fragment:cL,colorspace_pars_fragment:uL,envmap_fragment:fL,envmap_common_pars_fragment:hL,envmap_pars_fragment:dL,envmap_pars_vertex:pL,envmap_physical_pars_fragment:EL,envmap_vertex:mL,fog_vertex:gL,fog_pars_vertex:_L,fog_fragment:vL,fog_pars_fragment:xL,gradientmap_pars_fragment:yL,lightmap_pars_fragment:SL,lights_lambert_fragment:ML,lights_lambert_pars_fragment:bL,lights_pars_begin:TL,lights_toon_fragment:wL,lights_toon_pars_fragment:AL,lights_phong_fragment:RL,lights_phong_pars_fragment:CL,lights_physical_fragment:PL,lights_physical_pars_fragment:DL,lights_fragment_begin:LL,lights_fragment_maps:IL,lights_fragment_end:NL,logdepthbuf_fragment:UL,logdepthbuf_pars_fragment:OL,logdepthbuf_pars_vertex:FL,logdepthbuf_vertex:BL,map_fragment:kL,map_pars_fragment:zL,map_particle_fragment:HL,map_particle_pars_fragment:VL,metalnessmap_fragment:GL,metalnessmap_pars_fragment:WL,morphinstance_vertex:XL,morphcolor_vertex:jL,morphnormal_vertex:YL,morphtarget_pars_vertex:qL,morphtarget_vertex:$L,normal_fragment_begin:KL,normal_fragment_maps:ZL,normal_pars_fragment:JL,normal_pars_vertex:QL,normal_vertex:e2,normalmap_pars_fragment:t2,clearcoat_normal_fragment_begin:n2,clearcoat_normal_fragment_maps:i2,clearcoat_pars_fragment:r2,iridescence_pars_fragment:s2,opaque_fragment:o2,packing:a2,premultiplied_alpha_fragment:l2,project_vertex:c2,dithering_fragment:u2,dithering_pars_fragment:f2,roughnessmap_fragment:h2,roughnessmap_pars_fragment:d2,shadowmap_pars_fragment:p2,shadowmap_pars_vertex:m2,shadowmap_vertex:g2,shadowmask_pars_fragment:_2,skinbase_vertex:v2,skinning_pars_vertex:x2,skinning_vertex:y2,skinnormal_vertex:S2,specularmap_fragment:M2,specularmap_pars_fragment:b2,tonemapping_fragment:T2,tonemapping_pars_fragment:E2,transmission_fragment:w2,transmission_pars_fragment:A2,uv_pars_fragment:R2,uv_pars_vertex:C2,uv_vertex:P2,worldpos_vertex:D2,background_vert:L2,background_frag:I2,backgroundCube_vert:N2,backgroundCube_frag:U2,cube_vert:O2,cube_frag:F2,depth_vert:B2,depth_frag:k2,distanceRGBA_vert:z2,distanceRGBA_frag:H2,equirect_vert:V2,equirect_frag:G2,linedashed_vert:W2,linedashed_frag:X2,meshbasic_vert:j2,meshbasic_frag:Y2,meshlambert_vert:q2,meshlambert_frag:$2,meshmatcap_vert:K2,meshmatcap_frag:Z2,meshnormal_vert:J2,meshnormal_frag:Q2,meshphong_vert:eI,meshphong_frag:tI,meshphysical_vert:nI,meshphysical_frag:iI,meshtoon_vert:rI,meshtoon_frag:sI,points_vert:oI,points_frag:aI,shadow_vert:lI,shadow_frag:cI,sprite_vert:uI,sprite_frag:fI},Te={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},mi={basic:{uniforms:Qn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Qn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ge(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Qn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Qn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Qn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Ge(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Qn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Qn([Te.points,Te.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Qn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Qn([Te.common,Te.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Qn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Qn([Te.sprite,Te.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:Qn([Te.common,Te.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:Qn([Te.lights,Te.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};mi.physical={uniforms:Qn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const qu={r:0,b:0,g:0},mo=new mr,hI=new et;function dI(i,e,t,n,r,s,o){const a=new Ge(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function _(y){let v=!1;const b=g(y);b===null?p(a,l):b&&b.isColor&&(p(b,1),v=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,v){const b=g(v);b&&(b.isCubeTexture||b.mapping===Eh)?(u===void 0&&(u=new ln(new ro(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:ml(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),mo.copy(v.backgroundRotation),mo.x*=-1,mo.y*=-1,mo.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(mo.y*=-1,mo.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(hI.makeRotationFromEuler(mo)),u.material.toneMapped=ht.getTransfer(b.colorSpace)!==wt,(f!==b||h!==b.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=b,h=b.version,d=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new ln(new wh(2,2),new Xn({name:"BackgroundMaterial",uniforms:ml(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ht.getTransfer(b.colorSpace)!==wt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||h!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=b,h=b.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,v){y.getRGB(qu,Ob(i)),n.buffers.color.setClear(qu.r,qu.g,qu.b,v,o)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:_,addToRenderList:m,dispose:x}}function pI(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,o=!1;function a(M,N,B,H,q){let Q=!1;const W=f(H,B,N);s!==W&&(s=W,c(s.object)),Q=d(M,H,B,q),Q&&g(M,H,B,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,v(M,N,B,H),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function f(M,N,B){const H=B.wireframe===!0;let q=n[M.id];q===void 0&&(q={},n[M.id]=q);let Q=q[N.id];Q===void 0&&(Q={},q[N.id]=Q);let W=Q[H];return W===void 0&&(W=h(l()),Q[H]=W),W}function h(M){const N=[],B=[],H=[];for(let q=0;q<t;q++)N[q]=0,B[q]=0,H[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:H,object:M,attributes:{},index:null}}function d(M,N,B,H){const q=s.attributes,Q=N.attributes;let W=0;const j=B.getAttributes();for(const V in j)if(j[V].location>=0){const U=q[V];let _e=Q[V];if(_e===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(_e=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(_e=M.instanceColor)),U===void 0||U.attribute!==_e||_e&&U.data!==_e.data)return!0;W++}return s.attributesNum!==W||s.index!==H}function g(M,N,B,H){const q={},Q=N.attributes;let W=0;const j=B.getAttributes();for(const V in j)if(j[V].location>=0){let U=Q[V];U===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(U=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(U=M.instanceColor));const _e={};_e.attribute=U,U&&U.data&&(_e.data=U.data),q[V]=_e,W++}s.attributes=q,s.attributesNum=W,s.index=H}function _(){const M=s.newAttributes;for(let N=0,B=M.length;N<B;N++)M[N]=0}function m(M){p(M,0)}function p(M,N){const B=s.newAttributes,H=s.enabledAttributes,q=s.attributeDivisors;B[M]=1,H[M]===0&&(i.enableVertexAttribArray(M),H[M]=1),q[M]!==N&&(i.vertexAttribDivisor(M,N),q[M]=N)}function x(){const M=s.newAttributes,N=s.enabledAttributes;for(let B=0,H=N.length;B<H;B++)N[B]!==M[B]&&(i.disableVertexAttribArray(B),N[B]=0)}function y(M,N,B,H,q,Q,W){W===!0?i.vertexAttribIPointer(M,N,B,q,Q):i.vertexAttribPointer(M,N,B,H,q,Q)}function v(M,N,B,H){_();const q=H.attributes,Q=B.getAttributes(),W=N.defaultAttributeValues;for(const j in Q){const V=Q[j];if(V.location>=0){let he=q[j];if(he===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(he=M.instanceColor)),he!==void 0){const U=he.normalized,_e=he.itemSize,Ce=e.get(he);if(Ce===void 0)continue;const He=Ce.buffer,te=Ce.type,de=Ce.bytesPerElement,ye=te===i.INT||te===i.UNSIGNED_INT||he.gpuType===Wg;if(he.isInterleavedBufferAttribute){const k=he.data,oe=k.stride,le=he.offset;if(k.isInstancedInterleavedBuffer){for(let ae=0;ae<V.locationSize;ae++)p(V.location+ae,k.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ae=0;ae<V.locationSize;ae++)m(V.location+ae);i.bindBuffer(i.ARRAY_BUFFER,He);for(let ae=0;ae<V.locationSize;ae++)y(V.location+ae,_e/V.locationSize,te,U,oe*de,(le+_e/V.locationSize*ae)*de,ye)}else{if(he.isInstancedBufferAttribute){for(let k=0;k<V.locationSize;k++)p(V.location+k,he.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let k=0;k<V.locationSize;k++)m(V.location+k);i.bindBuffer(i.ARRAY_BUFFER,He);for(let k=0;k<V.locationSize;k++)y(V.location+k,_e/V.locationSize,te,U,_e*de,_e/V.locationSize*k*de,ye)}}else if(W!==void 0){const U=W[j];if(U!==void 0)switch(U.length){case 2:i.vertexAttrib2fv(V.location,U);break;case 3:i.vertexAttrib3fv(V.location,U);break;case 4:i.vertexAttrib4fv(V.location,U);break;default:i.vertexAttrib1fv(V.location,U)}}}}x()}function b(){C();for(const M in n){const N=n[M];for(const B in N){const H=N[B];for(const q in H)u(H[q].object),delete H[q];delete N[B]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const N=n[M.id];for(const B in N){const H=N[B];for(const q in H)u(H[q].object),delete H[q];delete N[B]}delete n[M.id]}function T(M){for(const N in n){const B=n[N];if(B[M.id]===void 0)continue;const H=B[M.id];for(const q in H)u(H[q].object),delete H[q];delete B[M.id]}}function C(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function mI(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function gI(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Zi&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const C=T===Qs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==ms&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==cr&&!C)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:b,maxSamples:A}}function _I(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Ds,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||r;return r=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const x=s?0:n,y=x*4;let v=p.clippingState||null;l.value=v,v=u(g,h,y,d);for(let b=0;b!==y;++b)v[b]=t[b];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=d;y!==_;++y,v+=4)o.copy(f[y]).applyMatrix4(x,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function vI(i){let e=new WeakMap;function t(o,a){return a===em?o.mapping=ul:a===tm&&(o.mapping=fl),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===em||a===tm)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new kP(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Da=4,rx=[.125,.215,.35,.446,.526,.582],Eo=20,Fd=new Rh,sx=new Ge;let Bd=null,kd=0,zd=0,Hd=!1;const bo=(1+Math.sqrt(5))/2,_a=1/bo,ox=[new z(-bo,_a,0),new z(bo,_a,0),new z(-_a,0,bo),new z(_a,0,bo),new z(0,bo,-_a),new z(0,bo,_a),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class ax{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Bd=this._renderer.getRenderTarget(),kd=this._renderer.getActiveCubeFace(),zd=this._renderer.getActiveMipmapLevel(),Hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ux(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bd,kd,zd),this._renderer.xr.enabled=Hd,e.scissorTest=!1,$u(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ul||e.mapping===fl?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bd=this._renderer.getRenderTarget(),kd=this._renderer.getActiveCubeFace(),zd=this._renderer.getActiveMipmapLevel(),Hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ui,minFilter:Ui,generateMipmaps:!1,type:Qs,format:Zi,colorSpace:fi,depthBuffer:!1},r=lx(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lx(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xI(s)),this._blurMaterial=yI(s,e,t)}return r}_compileMaterial(e){const t=new ln(this._lodPlanes[0],e);this._renderer.compile(t,Fd)}_sceneToCubeUV(e,t,n,r){const a=new Rn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(sx),u.toneMapping=qs,u.autoClear=!1;const d=new Rr({name:"PMREM.Background",side:yi,depthWrite:!1,depthTest:!1}),g=new ln(new ro,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(sx),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;$u(r,x*y,p>2?y:0,y,y),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ul||e.mapping===fl;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ux()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cx());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ln(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;$u(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Fd)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ox[(r-s-1)%ox.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ln(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Eo-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Eo;m>Eo&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Eo}`);const p=[];let x=0;for(let T=0;T<Eo;++T){const C=T/_,S=Math.exp(-C*C/2);p.push(S),T===0?x+=S:T<m&&(x+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-n;const v=this._sizeLods[r],b=3*v*(r>y-Da?r-y+Da:0),A=4*(this._cubeSize-v);$u(t,b,A,3*v,2*v),l.setRenderTarget(t),l.render(f,Fd)}}function xI(i){const e=[],t=[],n=[];let r=i;const s=i-Da+1+rx.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Da?l=rx[o-i+Da-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*d),y=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let A=0;A<d;A++){const T=A%3*2/3-1,C=A>2?0:-1,S=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];x.set(S,_*g*A),y.set(h,m*g*A);const M=[A,A,A,A,A,A];v.set(M,p*g*A)}const b=new wn;b.setAttribute("position",new ui(x,_)),b.setAttribute("uv",new ui(y,m)),b.setAttribute("faceIndex",new ui(v,p)),e.push(b),r>Da&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function lx(i,e,t){const n=new Ur(i,e,t);return n.texture.mapping=Eh,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $u(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function yI(i,e,t){const n=new Float32Array(Eo),r=new z(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:Eo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:p_(),fragmentShader:`

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
		`,blending:cs,depthTest:!1,depthWrite:!1})}function cx(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:p_(),fragmentShader:`

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
		`,blending:cs,depthTest:!1,depthWrite:!1})}function ux(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:p_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cs,depthTest:!1,depthWrite:!1})}function p_(){return`

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
	`}function SI(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===em||l===tm,u=l===ul||l===fl;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new ax(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new ax(i)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function MI(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Ta("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function bI(i,e,t,n){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],i.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const x=d.array;_=d.version;for(let y=0,v=x.length;y<v;y+=3){const b=x[y+0],A=x[y+1],T=x[y+2];h.push(b,A,A,T,T,b)}}else if(g!==void 0){const x=g.array;_=g.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const b=y+0,A=y+1,T=y+2;h.push(b,A,A,T,T,b)}}else return;const m=new(Pb(h)?Ub:Nb)(h,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function TI(i,e,t){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){i.drawElements(n,d,s,h*o),t.update(d,n,1)}function c(h,d,g){g!==0&&(i.drawElementsInstanced(n,d,s,h*o,g),t.update(d,n,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function f(h,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=d[x]*_[x];t.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function EI(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function wI(i,e,t){const n=new WeakMap,r=new vt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let S=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",S)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;d===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let v=a.attributes.position.count*y,b=1;v>e.maxTextureSize&&(b=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const A=new Float32Array(v*b*4*f),T=new Lb(A,v,b,f);T.type=cr,T.needsUpdate=!0;const C=y*4;for(let M=0;M<f;M++){const N=m[M],B=p[M],H=x[M],q=v*b*4*M;for(let Q=0;Q<N.count;Q++){const W=Q*C;d===!0&&(r.fromBufferAttribute(N,Q),A[q+W+0]=r.x,A[q+W+1]=r.y,A[q+W+2]=r.z,A[q+W+3]=0),g===!0&&(r.fromBufferAttribute(B,Q),A[q+W+4]=r.x,A[q+W+5]=r.y,A[q+W+6]=r.z,A[q+W+7]=0),_===!0&&(r.fromBufferAttribute(H,Q),A[q+W+8]=r.x,A[q+W+9]=r.y,A[q+W+10]=r.z,A[q+W+11]=H.itemSize===4?r.w:1)}}h={count:f,texture:T,size:new Fe(v,b)},n.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function AI(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Zb=new Tn,fx=new Gb(1,1),Jb=new Lb,Qb=new bP,eT=new Bb,hx=[],dx=[],px=new Float32Array(16),mx=new Float32Array(9),gx=new Float32Array(4);function Tl(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=hx[r];if(s===void 0&&(s=new Float32Array(r),hx[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function mn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function gn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ch(i,e){let t=dx[e];t===void 0&&(t=new Int32Array(e),dx[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function RI(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function CI(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2fv(this.addr,e),gn(t,e)}}function PI(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mn(t,e))return;i.uniform3fv(this.addr,e),gn(t,e)}}function DI(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4fv(this.addr,e),gn(t,e)}}function LI(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;gx.set(n),i.uniformMatrix2fv(this.addr,!1,gx),gn(t,n)}}function II(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;mx.set(n),i.uniformMatrix3fv(this.addr,!1,mx),gn(t,n)}}function NI(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;px.set(n),i.uniformMatrix4fv(this.addr,!1,px),gn(t,n)}}function UI(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function OI(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2iv(this.addr,e),gn(t,e)}}function FI(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;i.uniform3iv(this.addr,e),gn(t,e)}}function BI(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4iv(this.addr,e),gn(t,e)}}function kI(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function zI(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2uiv(this.addr,e),gn(t,e)}}function HI(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;i.uniform3uiv(this.addr,e),gn(t,e)}}function VI(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4uiv(this.addr,e),gn(t,e)}}function GI(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(fx.compareFunction=Rb,s=fx):s=Zb,t.setTexture2D(e||s,r)}function WI(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Qb,r)}function XI(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||eT,r)}function jI(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Jb,r)}function YI(i){switch(i){case 5126:return RI;case 35664:return CI;case 35665:return PI;case 35666:return DI;case 35674:return LI;case 35675:return II;case 35676:return NI;case 5124:case 35670:return UI;case 35667:case 35671:return OI;case 35668:case 35672:return FI;case 35669:case 35673:return BI;case 5125:return kI;case 36294:return zI;case 36295:return HI;case 36296:return VI;case 35678:case 36198:case 36298:case 36306:case 35682:return GI;case 35679:case 36299:case 36307:return WI;case 35680:case 36300:case 36308:case 36293:return XI;case 36289:case 36303:case 36311:case 36292:return jI}}function qI(i,e){i.uniform1fv(this.addr,e)}function $I(i,e){const t=Tl(e,this.size,2);i.uniform2fv(this.addr,t)}function KI(i,e){const t=Tl(e,this.size,3);i.uniform3fv(this.addr,t)}function ZI(i,e){const t=Tl(e,this.size,4);i.uniform4fv(this.addr,t)}function JI(i,e){const t=Tl(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function QI(i,e){const t=Tl(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function eN(i,e){const t=Tl(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function tN(i,e){i.uniform1iv(this.addr,e)}function nN(i,e){i.uniform2iv(this.addr,e)}function iN(i,e){i.uniform3iv(this.addr,e)}function rN(i,e){i.uniform4iv(this.addr,e)}function sN(i,e){i.uniform1uiv(this.addr,e)}function oN(i,e){i.uniform2uiv(this.addr,e)}function aN(i,e){i.uniform3uiv(this.addr,e)}function lN(i,e){i.uniform4uiv(this.addr,e)}function cN(i,e,t){const n=this.cache,r=e.length,s=Ch(t,r);mn(n,s)||(i.uniform1iv(this.addr,s),gn(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Zb,s[o])}function uN(i,e,t){const n=this.cache,r=e.length,s=Ch(t,r);mn(n,s)||(i.uniform1iv(this.addr,s),gn(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Qb,s[o])}function fN(i,e,t){const n=this.cache,r=e.length,s=Ch(t,r);mn(n,s)||(i.uniform1iv(this.addr,s),gn(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||eT,s[o])}function hN(i,e,t){const n=this.cache,r=e.length,s=Ch(t,r);mn(n,s)||(i.uniform1iv(this.addr,s),gn(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Jb,s[o])}function dN(i){switch(i){case 5126:return qI;case 35664:return $I;case 35665:return KI;case 35666:return ZI;case 35674:return JI;case 35675:return QI;case 35676:return eN;case 5124:case 35670:return tN;case 35667:case 35671:return nN;case 35668:case 35672:return iN;case 35669:case 35673:return rN;case 5125:return sN;case 36294:return oN;case 36295:return aN;case 36296:return lN;case 35678:case 36198:case 36298:case 36306:case 35682:return cN;case 35679:case 36299:case 36307:return uN;case 35680:case 36300:case 36308:case 36293:return fN;case 36289:case 36303:case 36311:case 36292:return hN}}class pN{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=YI(t.type)}}class mN{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dN(t.type)}}class gN{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Vd=/(\w+)(\])?(\[|\.)?/g;function _x(i,e){i.seq.push(e),i.map[e.id]=e}function _N(i,e,t){const n=i.name,r=n.length;for(Vd.lastIndex=0;;){const s=Vd.exec(n),o=Vd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){_x(t,c===void 0?new pN(a,i,e):new mN(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new gN(a),_x(t,f)),t=f}}}class Ef{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);_N(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function vx(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const vN=37297;let xN=0;function yN(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const xx=new nt;function SN(i){ht._getMatrix(xx,ht.workingColorSpace,i);const e=`mat3( ${xx.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case Jf:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function yx(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+yN(i.getShaderSource(e),o)}else return r}function MN(i,e){const t=SN(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function bN(i,e){let t;switch(e){case cb:t="Linear";break;case ub:t="Reinhard";break;case fb:t="Cineon";break;case hb:t="ACESFilmic";break;case pb:t="AgX";break;case mb:t="Neutral";break;case db:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ku=new z;function TN(){ht.getLuminanceCoefficients(Ku);const i=Ku.x.toFixed(4),e=Ku.y.toFixed(4),t=Ku.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function EN(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ec).join(`
`)}function wN(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function AN(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ec(i){return i!==""}function Sx(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mx(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const RN=/^[ \t]*#include +<([\w\d./]+)>/gm;function Um(i){return i.replace(RN,PN)}const CN=new Map;function PN(i,e){let t=it[e];if(t===void 0){const n=CN.get(e);if(n!==void 0)t=it[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Um(t)}const DN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bx(i){return i.replace(DN,LN)}function LN(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tx(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function IN(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===lb?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===vC?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Yr&&(e="SHADOWMAP_TYPE_VSM"),e}function NN(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ul:case fl:e="ENVMAP_TYPE_CUBE";break;case Eh:e="ENVMAP_TYPE_CUBE_UV";break}return e}function UN(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fl:e="ENVMAP_MODE_REFRACTION";break}return e}function ON(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Gg:e="ENVMAP_BLENDING_MULTIPLY";break;case FC:e="ENVMAP_BLENDING_MIX";break;case BC:e="ENVMAP_BLENDING_ADD";break}return e}function FN(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function BN(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=IN(t),c=NN(t),u=UN(t),f=ON(t),h=FN(t),d=EN(t),g=wN(s),_=r.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ec).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ec).join(`
`),p.length>0&&(p+=`
`)):(m=[Tx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ec).join(`
`),p=[Tx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qs?"#define TONE_MAPPING":"",t.toneMapping!==qs?it.tonemapping_pars_fragment:"",t.toneMapping!==qs?bN("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,MN("linearToOutputTexel",t.outputColorSpace),TN(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ec).join(`
`)),o=Um(o),o=Sx(o,t),o=Mx(o,t),a=Um(a),a=Sx(a,t),a=Mx(a,t),o=bx(o),a=bx(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===pv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+m+o,v=x+p+a,b=vx(r,r.VERTEX_SHADER,y),A=vx(r,r.FRAGMENT_SHADER,v);r.attachShader(_,b),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(N){if(i.debug.checkShaderErrors){const B=r.getProgramInfoLog(_).trim(),H=r.getShaderInfoLog(b).trim(),q=r.getShaderInfoLog(A).trim();let Q=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,b,A);else{const j=yx(r,b,"vertex"),V=yx(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+B+`
`+j+`
`+V)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(H===""||q==="")&&(W=!1);W&&(N.diagnostics={runnable:Q,programLog:B,vertexShader:{log:H,prefix:m},fragmentShader:{log:q,prefix:p}})}r.deleteShader(b),r.deleteShader(A),C=new Ef(r,_),S=AN(r,_)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,vN)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xN++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=A,this}let kN=0;class zN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new HN(e),t.set(e,n)),n}}class HN{constructor(e){this.id=kN++,this.code=e,this.usedTimes=0}}function VN(i,e,t,n,r,s,o){const a=new Qg,l=new zN,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,N,B,H){const q=B.fog,Q=H.geometry,W=S.isMeshStandardMaterial?B.environment:null,j=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),V=j&&j.mapping===Eh?j.image.height:null,he=g[S.type];S.precision!==null&&(d=r.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const U=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,_e=U!==void 0?U.length:0;let Ce=0;Q.morphAttributes.position!==void 0&&(Ce=1),Q.morphAttributes.normal!==void 0&&(Ce=2),Q.morphAttributes.color!==void 0&&(Ce=3);let He,te,de,ye;if(he){const Re=mi[he];He=Re.vertexShader,te=Re.fragmentShader}else He=S.vertexShader,te=S.fragmentShader,l.update(S),de=l.getVertexShaderID(S),ye=l.getFragmentShaderID(S);const k=i.getRenderTarget(),oe=i.state.buffers.depth.getReversed(),le=H.isInstancedMesh===!0,ae=H.isBatchedMesh===!0,Le=!!S.map,I=!!S.matcap,D=!!j,w=!!S.aoMap,re=!!S.lightMap,J=!!S.bumpMap,L=!!S.normalMap,ie=!!S.displacementMap,ue=!!S.emissiveMap,ne=!!S.metalnessMap,R=!!S.roughnessMap,E=S.anisotropy>0,O=S.clearcoat>0,Y=S.dispersion>0,$=S.iridescence>0,Z=S.sheen>0,pe=S.transmission>0,fe=E&&!!S.anisotropyMap,xe=O&&!!S.clearcoatMap,Be=O&&!!S.clearcoatNormalMap,me=O&&!!S.clearcoatRoughnessMap,ve=$&&!!S.iridescenceMap,Ue=$&&!!S.iridescenceThicknessMap,ke=Z&&!!S.sheenColorMap,Se=Z&&!!S.sheenRoughnessMap,We=!!S.specularMap,Xe=!!S.specularColorMap,pt=!!S.specularIntensityMap,F=pe&&!!S.transmissionMap,be=pe&&!!S.thicknessMap,se=!!S.gradientMap,ce=!!S.alphaMap,Me=S.alphaTest>0,Ee=!!S.alphaHash,$e=!!S.extensions;let mt=qs;S.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(mt=i.toneMapping);const jt={shaderID:he,shaderType:S.type,shaderName:S.name,vertexShader:He,fragmentShader:te,defines:S.defines,customVertexShaderID:de,customFragmentShaderID:ye,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:ae,batchingColor:ae&&H._colorsTexture!==null,instancing:le,instancingColor:le&&H.instanceColor!==null,instancingMorph:le&&H.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:k===null?i.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:fi,alphaToCoverage:!!S.alphaToCoverage,map:Le,matcap:I,envMap:D,envMapMode:D&&j.mapping,envMapCubeUVHeight:V,aoMap:w,lightMap:re,bumpMap:J,normalMap:L,displacementMap:h&&ie,emissiveMap:ue,normalMapObjectSpace:L&&S.normalMapType===WC,normalMapTangentSpace:L&&S.normalMapType===Zg,metalnessMap:ne,roughnessMap:R,anisotropy:E,anisotropyMap:fe,clearcoat:O,clearcoatMap:xe,clearcoatNormalMap:Be,clearcoatRoughnessMap:me,dispersion:Y,iridescence:$,iridescenceMap:ve,iridescenceThicknessMap:Ue,sheen:Z,sheenColorMap:ke,sheenRoughnessMap:Se,specularMap:We,specularColorMap:Xe,specularIntensityMap:pt,transmission:pe,transmissionMap:F,thicknessMap:be,gradientMap:se,opaque:S.transparent===!1&&S.blending===ja&&S.alphaToCoverage===!1,alphaMap:ce,alphaTest:Me,alphaHash:Ee,combine:S.combine,mapUv:Le&&_(S.map.channel),aoMapUv:w&&_(S.aoMap.channel),lightMapUv:re&&_(S.lightMap.channel),bumpMapUv:J&&_(S.bumpMap.channel),normalMapUv:L&&_(S.normalMap.channel),displacementMapUv:ie&&_(S.displacementMap.channel),emissiveMapUv:ue&&_(S.emissiveMap.channel),metalnessMapUv:ne&&_(S.metalnessMap.channel),roughnessMapUv:R&&_(S.roughnessMap.channel),anisotropyMapUv:fe&&_(S.anisotropyMap.channel),clearcoatMapUv:xe&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Be&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Se&&_(S.sheenRoughnessMap.channel),specularMapUv:We&&_(S.specularMap.channel),specularColorMapUv:Xe&&_(S.specularColorMap.channel),specularIntensityMapUv:pt&&_(S.specularIntensityMap.channel),transmissionMapUv:F&&_(S.transmissionMap.channel),thicknessMapUv:be&&_(S.thicknessMap.channel),alphaMapUv:ce&&_(S.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(L||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Q.attributes.uv&&(Le||ce),fog:!!q,useFog:S.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:oe,skinning:H.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Ce,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:mt,decodeVideoTexture:Le&&S.map.isVideoTexture===!0&&ht.getTransfer(S.map.colorSpace)===wt,decodeVideoTextureEmissive:ue&&S.emissiveMap.isVideoTexture===!0&&ht.getTransfer(S.emissiveMap.colorSpace)===wt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Er,flipSided:S.side===yi,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:$e&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&S.extensions.multiDraw===!0||ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return jt.vertexUv1s=c.has(1),jt.vertexUv2s=c.has(2),jt.vertexUv3s=c.has(3),c.clear(),jt}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const N in S.defines)M.push(N),M.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(x(M,S),y(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function x(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const M=g[S.type];let N;if(M){const B=mi[M];N=qo.clone(B.uniforms)}else N=S.uniforms;return N}function b(S,M){let N;for(let B=0,H=u.length;B<H;B++){const q=u[B];if(q.cacheKey===M){N=q,++N.usedTimes;break}}return N===void 0&&(N=new BN(i,M,S,s),u.push(N)),N}function A(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function T(S){l.remove(S)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:b,releaseProgram:A,releaseShaderCache:T,programs:u,dispose:C}}function GN(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function WN(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ex(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function wx(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,h,d,g,_,m){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},i[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||WN),n.length>1&&n.sort(h||Ex),r.length>1&&r.sort(h||Ex)}function u(){for(let f=e,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function XN(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new wx,i.set(n,[o])):r>=s.length?(o=new wx,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function jN(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Ge};break;case"SpotLight":t={position:new z,direction:new z,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function YN(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let qN=0;function $N(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function KN(i){const e=new jN,t=YN(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const r=new z,s=new et,o=new et;function a(c){let u=0,f=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,x=0,y=0,v=0,b=0,A=0,T=0;c.sort($N);for(let S=0,M=c.length;S<M;S++){const N=c[S],B=N.color,H=N.intensity,q=N.distance,Q=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=B.r*H,f+=B.g*H,h+=B.b*H;else if(N.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(N.sh.coefficients[W],H);T++}else if(N.isDirectionalLight){const W=e.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const j=N.shadow,V=t.get(N);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=Q,n.directionalShadowMatrix[d]=N.shadow.matrix,x++}n.directional[d]=W,d++}else if(N.isSpotLight){const W=e.get(N);W.position.setFromMatrixPosition(N.matrixWorld),W.color.copy(B).multiplyScalar(H),W.distance=q,W.coneCos=Math.cos(N.angle),W.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),W.decay=N.decay,n.spot[_]=W;const j=N.shadow;if(N.map&&(n.spotLightMap[b]=N.map,b++,j.updateMatrices(N),N.castShadow&&A++),n.spotLightMatrix[_]=j.matrix,N.castShadow){const V=t.get(N);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=Q,v++}_++}else if(N.isRectAreaLight){const W=e.get(N);W.color.copy(B).multiplyScalar(H),W.halfWidth.set(N.width*.5,0,0),W.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=W,m++}else if(N.isPointLight){const W=e.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),W.distance=N.distance,W.decay=N.decay,N.castShadow){const j=N.shadow,V=t.get(N);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,V.shadowCameraNear=j.camera.near,V.shadowCameraFar=j.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=N.shadow.matrix,y++}n.point[g]=W,g++}else if(N.isHemisphereLight){const W=e.get(N);W.skyColor.copy(N.color).multiplyScalar(H),W.groundColor.copy(N.groundColor).multiplyScalar(H),n.hemi[p]=W,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==x||C.numPointShadows!==y||C.numSpotShadows!==v||C.numSpotMaps!==b||C.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+b-A,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,C.directionalLength=d,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=x,C.numPointShadows=y,C.numSpotShadows=v,C.numSpotMaps=b,C.numLightProbes=T,n.version=qN++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const y=c[p];if(y.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),f++}else if(y.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const v=n.point[h];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Ax(i){const e=new KN(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function ZN(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ax(i),e.set(r,[a])):s>=o.length?(a=new Ax(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const JN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QN=`uniform sampler2D shadow_pass;
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
}`;function eU(i,e,t){let n=new t_;const r=new Fe,s=new Fe,o=new vt,a=new ZP({depthPacking:GC}),l=new JP,c={},u=t.maxTextureSize,f={[ps]:yi,[yi]:ps,[Er]:Er},h=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:JN,fragmentShader:QN}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new wn;g.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ln(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lb;let p=this.type;this.render=function(A,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),B=i.state;B.setBlending(cs),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const H=p!==Yr&&this.type===Yr,q=p===Yr&&this.type!==Yr;for(let Q=0,W=A.length;Q<W;Q++){const j=A[Q],V=j.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const he=V.getFrameExtents();if(r.multiply(he),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/he.x),r.x=s.x*he.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/he.y),r.y=s.y*he.y,V.mapSize.y=s.y)),V.map===null||H===!0||q===!0){const _e=this.type!==Yr?{minFilter:ci,magFilter:ci}:{};V.map!==null&&V.map.dispose(),V.map=new Ur(r.x,r.y,_e),V.map.texture.name=j.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const U=V.getViewportCount();for(let _e=0;_e<U;_e++){const Ce=V.getViewport(_e);o.set(s.x*Ce.x,s.y*Ce.y,s.x*Ce.z,s.y*Ce.w),B.viewport(o),V.updateMatrices(j,_e),n=V.getFrustum(),v(T,C,V.camera,j,this.type)}V.isPointLightShadow!==!0&&this.type===Yr&&x(V,C),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,N)};function x(A,T){const C=e.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ur(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(T,null,C,h,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(T,null,C,d,_,null)}function y(A,T,C,S){let M=null;const N=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)M=N;else if(M=C.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const B=M.uuid,H=T.uuid;let q=c[B];q===void 0&&(q={},c[B]=q);let Q=q[H];Q===void 0&&(Q=M.clone(),q[H]=Q,T.addEventListener("dispose",b)),M=Q}if(M.visible=T.visible,M.wireframe=T.wireframe,S===Yr?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:f[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=i.properties.get(M);B.light=C}return M}function v(A,T,C,S,M){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Yr)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const H=e.update(A),q=A.material;if(Array.isArray(q)){const Q=H.groups;for(let W=0,j=Q.length;W<j;W++){const V=Q[W],he=q[V.materialIndex];if(he&&he.visible){const U=y(A,he,S,M);A.onBeforeShadow(i,A,T,C,H,U,V),i.renderBufferDirect(C,null,H,U,A,V),A.onAfterShadow(i,A,T,C,H,U,V)}}}else if(q.visible){const Q=y(A,q,S,M);A.onBeforeShadow(i,A,T,C,H,Q,null),i.renderBufferDirect(C,null,H,Q,A,null),A.onAfterShadow(i,A,T,C,H,Q,null)}}const B=A.children;for(let H=0,q=B.length;H<q;H++)v(B[H],T,C,S,M)}function b(A){A.target.removeEventListener("dispose",b);for(const C in c){const S=c[C],M=A.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const tU={[Yp]:qp,[$p]:Jp,[Kp]:Qp,[cl]:Zp,[qp]:Yp,[Jp]:$p,[Qp]:Kp,[Zp]:cl};function nU(i,e){function t(){let F=!1;const be=new vt;let se=null;const ce=new vt(0,0,0,0);return{setMask:function(Me){se!==Me&&!F&&(i.colorMask(Me,Me,Me,Me),se=Me)},setLocked:function(Me){F=Me},setClear:function(Me,Ee,$e,mt,jt){jt===!0&&(Me*=mt,Ee*=mt,$e*=mt),be.set(Me,Ee,$e,mt),ce.equals(be)===!1&&(i.clearColor(Me,Ee,$e,mt),ce.copy(be))},reset:function(){F=!1,se=null,ce.set(-1,0,0,0)}}}function n(){let F=!1,be=!1,se=null,ce=null,Me=null;return{setReversed:function(Ee){if(be!==Ee){const $e=e.get("EXT_clip_control");be?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT);const mt=Me;Me=null,this.setClear(mt)}be=Ee},getReversed:function(){return be},setTest:function(Ee){Ee?k(i.DEPTH_TEST):oe(i.DEPTH_TEST)},setMask:function(Ee){se!==Ee&&!F&&(i.depthMask(Ee),se=Ee)},setFunc:function(Ee){if(be&&(Ee=tU[Ee]),ce!==Ee){switch(Ee){case Yp:i.depthFunc(i.NEVER);break;case qp:i.depthFunc(i.ALWAYS);break;case $p:i.depthFunc(i.LESS);break;case cl:i.depthFunc(i.LEQUAL);break;case Kp:i.depthFunc(i.EQUAL);break;case Zp:i.depthFunc(i.GEQUAL);break;case Jp:i.depthFunc(i.GREATER);break;case Qp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ce=Ee}},setLocked:function(Ee){F=Ee},setClear:function(Ee){Me!==Ee&&(be&&(Ee=1-Ee),i.clearDepth(Ee),Me=Ee)},reset:function(){F=!1,se=null,ce=null,Me=null,be=!1}}}function r(){let F=!1,be=null,se=null,ce=null,Me=null,Ee=null,$e=null,mt=null,jt=null;return{setTest:function(Re){F||(Re?k(i.STENCIL_TEST):oe(i.STENCIL_TEST))},setMask:function(Re){be!==Re&&!F&&(i.stencilMask(Re),be=Re)},setFunc:function(Re,Ne,tt){(se!==Re||ce!==Ne||Me!==tt)&&(i.stencilFunc(Re,Ne,tt),se=Re,ce=Ne,Me=tt)},setOp:function(Re,Ne,tt){(Ee!==Re||$e!==Ne||mt!==tt)&&(i.stencilOp(Re,Ne,tt),Ee=Re,$e=Ne,mt=tt)},setLocked:function(Re){F=Re},setClear:function(Re){jt!==Re&&(i.clearStencil(Re),jt=Re)},reset:function(){F=!1,be=null,se=null,ce=null,Me=null,Ee=null,$e=null,mt=null,jt=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,x=null,y=null,v=null,b=null,A=null,T=new Ge(0,0,0),C=0,S=!1,M=null,N=null,B=null,H=null,q=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,j=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=j>=1):V.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=j>=2);let he=null,U={};const _e=i.getParameter(i.SCISSOR_BOX),Ce=i.getParameter(i.VIEWPORT),He=new vt().fromArray(_e),te=new vt().fromArray(Ce);function de(F,be,se,ce){const Me=new Uint8Array(4),Ee=i.createTexture();i.bindTexture(F,Ee),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<se;$e++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(be,0,i.RGBA,1,1,ce,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(be+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return Ee}const ye={};ye[i.TEXTURE_2D]=de(i.TEXTURE_2D,i.TEXTURE_2D,1),ye[i.TEXTURE_CUBE_MAP]=de(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[i.TEXTURE_2D_ARRAY]=de(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ye[i.TEXTURE_3D]=de(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),k(i.DEPTH_TEST),o.setFunc(cl),J(!1),L(ov),k(i.CULL_FACE),w(cs);function k(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function oe(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function le(F,be){return f[F]!==be?(i.bindFramebuffer(F,be),f[F]=be,F===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=be),F===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=be),!0):!1}function ae(F,be){let se=d,ce=!1;if(F){se=h.get(be),se===void 0&&(se=[],h.set(be,se));const Me=F.textures;if(se.length!==Me.length||se[0]!==i.COLOR_ATTACHMENT0){for(let Ee=0,$e=Me.length;Ee<$e;Ee++)se[Ee]=i.COLOR_ATTACHMENT0+Ee;se.length=Me.length,ce=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,ce=!0);ce&&i.drawBuffers(se)}function Le(F){return g!==F?(i.useProgram(F),g=F,!0):!1}const I={[To]:i.FUNC_ADD,[yC]:i.FUNC_SUBTRACT,[SC]:i.FUNC_REVERSE_SUBTRACT};I[MC]=i.MIN,I[bC]=i.MAX;const D={[TC]:i.ZERO,[EC]:i.ONE,[wC]:i.SRC_COLOR,[Xp]:i.SRC_ALPHA,[LC]:i.SRC_ALPHA_SATURATE,[PC]:i.DST_COLOR,[RC]:i.DST_ALPHA,[AC]:i.ONE_MINUS_SRC_COLOR,[jp]:i.ONE_MINUS_SRC_ALPHA,[DC]:i.ONE_MINUS_DST_COLOR,[CC]:i.ONE_MINUS_DST_ALPHA,[IC]:i.CONSTANT_COLOR,[NC]:i.ONE_MINUS_CONSTANT_COLOR,[UC]:i.CONSTANT_ALPHA,[OC]:i.ONE_MINUS_CONSTANT_ALPHA};function w(F,be,se,ce,Me,Ee,$e,mt,jt,Re){if(F===cs){_===!0&&(oe(i.BLEND),_=!1);return}if(_===!1&&(k(i.BLEND),_=!0),F!==xC){if(F!==m||Re!==S){if((p!==To||v!==To)&&(i.blendEquation(i.FUNC_ADD),p=To,v=To),Re)switch(F){case ja:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wp:i.blendFunc(i.ONE,i.ONE);break;case av:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lv:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ja:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wp:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case av:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lv:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}x=null,y=null,b=null,A=null,T.set(0,0,0),C=0,m=F,S=Re}return}Me=Me||be,Ee=Ee||se,$e=$e||ce,(be!==p||Me!==v)&&(i.blendEquationSeparate(I[be],I[Me]),p=be,v=Me),(se!==x||ce!==y||Ee!==b||$e!==A)&&(i.blendFuncSeparate(D[se],D[ce],D[Ee],D[$e]),x=se,y=ce,b=Ee,A=$e),(mt.equals(T)===!1||jt!==C)&&(i.blendColor(mt.r,mt.g,mt.b,jt),T.copy(mt),C=jt),m=F,S=!1}function re(F,be){F.side===Er?oe(i.CULL_FACE):k(i.CULL_FACE);let se=F.side===yi;be&&(se=!se),J(se),F.blending===ja&&F.transparent===!1?w(cs):w(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const ce=F.stencilWrite;a.setTest(ce),ce&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ue(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?k(i.SAMPLE_ALPHA_TO_COVERAGE):oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function J(F){M!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),M=F)}function L(F){F!==gC?(k(i.CULL_FACE),F!==N&&(F===ov?i.cullFace(i.BACK):F===_C?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):oe(i.CULL_FACE),N=F}function ie(F){F!==B&&(W&&i.lineWidth(F),B=F)}function ue(F,be,se){F?(k(i.POLYGON_OFFSET_FILL),(H!==be||q!==se)&&(i.polygonOffset(be,se),H=be,q=se)):oe(i.POLYGON_OFFSET_FILL)}function ne(F){F?k(i.SCISSOR_TEST):oe(i.SCISSOR_TEST)}function R(F){F===void 0&&(F=i.TEXTURE0+Q-1),he!==F&&(i.activeTexture(F),he=F)}function E(F,be,se){se===void 0&&(he===null?se=i.TEXTURE0+Q-1:se=he);let ce=U[se];ce===void 0&&(ce={type:void 0,texture:void 0},U[se]=ce),(ce.type!==F||ce.texture!==be)&&(he!==se&&(i.activeTexture(se),he=se),i.bindTexture(F,be||ye[F]),ce.type=F,ce.texture=be)}function O(){const F=U[he];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Be(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function me(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ue(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ke(F){He.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),He.copy(F))}function Se(F){te.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),te.copy(F))}function We(F,be){let se=c.get(be);se===void 0&&(se=new WeakMap,c.set(be,se));let ce=se.get(F);ce===void 0&&(ce=i.getUniformBlockIndex(be,F.name),se.set(F,ce))}function Xe(F,be){const ce=c.get(be).get(F);l.get(be)!==ce&&(i.uniformBlockBinding(be,ce,F.__bindingPointIndex),l.set(be,ce))}function pt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},he=null,U={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,x=null,y=null,v=null,b=null,A=null,T=new Ge(0,0,0),C=0,S=!1,M=null,N=null,B=null,H=null,q=null,He.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:k,disable:oe,bindFramebuffer:le,drawBuffers:ae,useProgram:Le,setBlending:w,setMaterial:re,setFlipSided:J,setCullFace:L,setLineWidth:ie,setPolygonOffset:ue,setScissorTest:ne,activeTexture:R,bindTexture:E,unbindTexture:O,compressedTexImage2D:Y,compressedTexImage3D:$,texImage2D:ve,texImage3D:Ue,updateUBOMapping:We,uniformBlockBinding:Xe,texStorage2D:Be,texStorage3D:me,texSubImage2D:Z,texSubImage3D:pe,compressedTexSubImage2D:fe,compressedTexSubImage3D:xe,scissor:ke,viewport:Se,reset:pt}}function iU(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Fe,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,E){return d?new OffscreenCanvas(R,E):qc("canvas")}function _(R,E,O){let Y=1;const $=ne(R);if(($.width>O||$.height>O)&&(Y=O/Math.max($.width,$.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Z=Math.floor(Y*$.width),pe=Math.floor(Y*$.height);f===void 0&&(f=g(Z,pe));const fe=E?g(Z,pe):f;return fe.width=Z,fe.height=pe,fe.getContext("2d").drawImage(R,0,0,Z,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Z+"x"+pe+")."),fe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,E,O,Y,$=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=E;if(E===i.RED&&(O===i.FLOAT&&(Z=i.R32F),O===i.HALF_FLOAT&&(Z=i.R16F),O===i.UNSIGNED_BYTE&&(Z=i.R8)),E===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.R8UI),O===i.UNSIGNED_SHORT&&(Z=i.R16UI),O===i.UNSIGNED_INT&&(Z=i.R32UI),O===i.BYTE&&(Z=i.R8I),O===i.SHORT&&(Z=i.R16I),O===i.INT&&(Z=i.R32I)),E===i.RG&&(O===i.FLOAT&&(Z=i.RG32F),O===i.HALF_FLOAT&&(Z=i.RG16F),O===i.UNSIGNED_BYTE&&(Z=i.RG8)),E===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RG8UI),O===i.UNSIGNED_SHORT&&(Z=i.RG16UI),O===i.UNSIGNED_INT&&(Z=i.RG32UI),O===i.BYTE&&(Z=i.RG8I),O===i.SHORT&&(Z=i.RG16I),O===i.INT&&(Z=i.RG32I)),E===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),O===i.UNSIGNED_INT&&(Z=i.RGB32UI),O===i.BYTE&&(Z=i.RGB8I),O===i.SHORT&&(Z=i.RGB16I),O===i.INT&&(Z=i.RGB32I)),E===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),O===i.UNSIGNED_INT&&(Z=i.RGBA32UI),O===i.BYTE&&(Z=i.RGBA8I),O===i.SHORT&&(Z=i.RGBA16I),O===i.INT&&(Z=i.RGBA32I)),E===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),E===i.RGBA){const pe=$?Jf:ht.getTransfer(Y);O===i.FLOAT&&(Z=i.RGBA32F),O===i.HALF_FLOAT&&(Z=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Z=pe===wt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function v(R,E){let O;return R?E===null||E===Yo||E===hl?O=i.DEPTH24_STENCIL8:E===cr?O=i.DEPTH32F_STENCIL8:E===Xc&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Yo||E===hl?O=i.DEPTH_COMPONENT24:E===cr?O=i.DEPTH_COMPONENT32F:E===Xc&&(O=i.DEPTH_COMPONENT16),O}function b(R,E){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==ci&&R.minFilter!==Ui?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function A(R){const E=R.target;E.removeEventListener("dispose",A),C(E),E.isVideoTexture&&u.delete(E)}function T(R){const E=R.target;E.removeEventListener("dispose",T),M(E)}function C(R){const E=n.get(R);if(E.__webglInit===void 0)return;const O=R.source,Y=h.get(O);if(Y){const $=Y[E.__cacheKey];$.usedTimes--,$.usedTimes===0&&S(R),Object.keys(Y).length===0&&h.delete(O)}n.remove(R)}function S(R){const E=n.get(R);i.deleteTexture(E.__webglTexture);const O=R.source,Y=h.get(O);delete Y[E.__cacheKey],o.memory.textures--}function M(R){const E=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(E.__webglFramebuffer[Y]))for(let $=0;$<E.__webglFramebuffer[Y].length;$++)i.deleteFramebuffer(E.__webglFramebuffer[Y][$]);else i.deleteFramebuffer(E.__webglFramebuffer[Y]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[Y])}else{if(Array.isArray(E.__webglFramebuffer))for(let Y=0;Y<E.__webglFramebuffer.length;Y++)i.deleteFramebuffer(E.__webglFramebuffer[Y]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Y=0;Y<E.__webglColorRenderbuffer.length;Y++)E.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[Y]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const O=R.textures;for(let Y=0,$=O.length;Y<$;Y++){const Z=n.get(O[Y]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(O[Y])}n.remove(R)}let N=0;function B(){N=0}function H(){const R=N;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),N+=1,R}function q(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function Q(R,E){const O=n.get(R);if(R.isVideoTexture&&ie(R),R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){const Y=R.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(O,R,E);return}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+E)}function W(R,E){const O=n.get(R);if(R.version>0&&O.__version!==R.version){te(O,R,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+E)}function j(R,E){const O=n.get(R);if(R.version>0&&O.__version!==R.version){te(O,R,E);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+E)}function V(R,E){const O=n.get(R);if(R.version>0&&O.__version!==R.version){de(O,R,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+E)}const he={[Js]:i.REPEAT,[zs]:i.CLAMP_TO_EDGE,[Zf]:i.MIRRORED_REPEAT},U={[ci]:i.NEAREST,[_b]:i.NEAREST_MIPMAP_NEAREST,[Ql]:i.NEAREST_MIPMAP_LINEAR,[Ui]:i.LINEAR,[xf]:i.LINEAR_MIPMAP_NEAREST,[rs]:i.LINEAR_MIPMAP_LINEAR},_e={[XC]:i.NEVER,[ZC]:i.ALWAYS,[jC]:i.LESS,[Rb]:i.LEQUAL,[YC]:i.EQUAL,[KC]:i.GEQUAL,[qC]:i.GREATER,[$C]:i.NOTEQUAL};function Ce(R,E){if(E.type===cr&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Ui||E.magFilter===xf||E.magFilter===Ql||E.magFilter===rs||E.minFilter===Ui||E.minFilter===xf||E.minFilter===Ql||E.minFilter===rs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,he[E.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,he[E.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,he[E.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,U[E.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,U[E.minFilter]),E.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,_e[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ci||E.minFilter!==Ql&&E.minFilter!==rs||E.type===cr&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function He(R,E){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",A));const Y=E.source;let $=h.get(Y);$===void 0&&($={},h.set(Y,$));const Z=q(E);if(Z!==R.__cacheKey){$[Z]===void 0&&($[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),$[Z].usedTimes++;const pe=$[R.__cacheKey];pe!==void 0&&($[R.__cacheKey].usedTimes--,pe.usedTimes===0&&S(E)),R.__cacheKey=Z,R.__webglTexture=$[Z].texture}return O}function te(R,E,O){let Y=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Y=i.TEXTURE_3D);const $=He(R,E),Z=E.source;t.bindTexture(Y,R.__webglTexture,i.TEXTURE0+O);const pe=n.get(Z);if(Z.version!==pe.__version||$===!0){t.activeTexture(i.TEXTURE0+O);const fe=ht.getPrimaries(ht.workingColorSpace),xe=E.colorSpace===Ns?null:ht.getPrimaries(E.colorSpace),Be=E.colorSpace===Ns||fe===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let me=_(E.image,!1,r.maxTextureSize);me=ue(E,me);const ve=s.convert(E.format,E.colorSpace),Ue=s.convert(E.type);let ke=y(E.internalFormat,ve,Ue,E.colorSpace,E.isVideoTexture);Ce(Y,E);let Se;const We=E.mipmaps,Xe=E.isVideoTexture!==!0,pt=pe.__version===void 0||$===!0,F=Z.dataReady,be=b(E,me);if(E.isDepthTexture)ke=v(E.format===dl,E.type),pt&&(Xe?t.texStorage2D(i.TEXTURE_2D,1,ke,me.width,me.height):t.texImage2D(i.TEXTURE_2D,0,ke,me.width,me.height,0,ve,Ue,null));else if(E.isDataTexture)if(We.length>0){Xe&&pt&&t.texStorage2D(i.TEXTURE_2D,be,ke,We[0].width,We[0].height);for(let se=0,ce=We.length;se<ce;se++)Se=We[se],Xe?F&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Se.width,Se.height,ve,Ue,Se.data):t.texImage2D(i.TEXTURE_2D,se,ke,Se.width,Se.height,0,ve,Ue,Se.data);E.generateMipmaps=!1}else Xe?(pt&&t.texStorage2D(i.TEXTURE_2D,be,ke,me.width,me.height),F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me.width,me.height,ve,Ue,me.data)):t.texImage2D(i.TEXTURE_2D,0,ke,me.width,me.height,0,ve,Ue,me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Xe&&pt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,ke,We[0].width,We[0].height,me.depth);for(let se=0,ce=We.length;se<ce;se++)if(Se=We[se],E.format!==Zi)if(ve!==null)if(Xe){if(F)if(E.layerUpdates.size>0){const Me=ix(Se.width,Se.height,E.format,E.type);for(const Ee of E.layerUpdates){const $e=Se.data.subarray(Ee*Me/Se.data.BYTES_PER_ELEMENT,(Ee+1)*Me/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,Ee,Se.width,Se.height,1,ve,$e)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Se.width,Se.height,me.depth,ve,Se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,ke,Se.width,Se.height,me.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?F&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Se.width,Se.height,me.depth,ve,Ue,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,ke,Se.width,Se.height,me.depth,0,ve,Ue,Se.data)}else{Xe&&pt&&t.texStorage2D(i.TEXTURE_2D,be,ke,We[0].width,We[0].height);for(let se=0,ce=We.length;se<ce;se++)Se=We[se],E.format!==Zi?ve!==null?Xe?F&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,Se.width,Se.height,ve,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,se,ke,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?F&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Se.width,Se.height,ve,Ue,Se.data):t.texImage2D(i.TEXTURE_2D,se,ke,Se.width,Se.height,0,ve,Ue,Se.data)}else if(E.isDataArrayTexture)if(Xe){if(pt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,ke,me.width,me.height,me.depth),F)if(E.layerUpdates.size>0){const se=ix(me.width,me.height,E.format,E.type);for(const ce of E.layerUpdates){const Me=me.data.subarray(ce*se/me.data.BYTES_PER_ELEMENT,(ce+1)*se/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ce,me.width,me.height,1,ve,Ue,Me)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,ve,Ue,me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ke,me.width,me.height,me.depth,0,ve,Ue,me.data);else if(E.isData3DTexture)Xe?(pt&&t.texStorage3D(i.TEXTURE_3D,be,ke,me.width,me.height,me.depth),F&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,ve,Ue,me.data)):t.texImage3D(i.TEXTURE_3D,0,ke,me.width,me.height,me.depth,0,ve,Ue,me.data);else if(E.isFramebufferTexture){if(pt)if(Xe)t.texStorage2D(i.TEXTURE_2D,be,ke,me.width,me.height);else{let se=me.width,ce=me.height;for(let Me=0;Me<be;Me++)t.texImage2D(i.TEXTURE_2D,Me,ke,se,ce,0,ve,Ue,null),se>>=1,ce>>=1}}else if(We.length>0){if(Xe&&pt){const se=ne(We[0]);t.texStorage2D(i.TEXTURE_2D,be,ke,se.width,se.height)}for(let se=0,ce=We.length;se<ce;se++)Se=We[se],Xe?F&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,ve,Ue,Se):t.texImage2D(i.TEXTURE_2D,se,ke,ve,Ue,Se);E.generateMipmaps=!1}else if(Xe){if(pt){const se=ne(me);t.texStorage2D(i.TEXTURE_2D,be,ke,se.width,se.height)}F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Ue,me)}else t.texImage2D(i.TEXTURE_2D,0,ke,ve,Ue,me);m(E)&&p(Y),pe.__version=Z.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function de(R,E,O){if(E.image.length!==6)return;const Y=He(R,E),$=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+O);const Z=n.get($);if($.version!==Z.__version||Y===!0){t.activeTexture(i.TEXTURE0+O);const pe=ht.getPrimaries(ht.workingColorSpace),fe=E.colorSpace===Ns?null:ht.getPrimaries(E.colorSpace),xe=E.colorSpace===Ns||pe===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Be=E.isCompressedTexture||E.image[0].isCompressedTexture,me=E.image[0]&&E.image[0].isDataTexture,ve=[];for(let ce=0;ce<6;ce++)!Be&&!me?ve[ce]=_(E.image[ce],!0,r.maxCubemapSize):ve[ce]=me?E.image[ce].image:E.image[ce],ve[ce]=ue(E,ve[ce]);const Ue=ve[0],ke=s.convert(E.format,E.colorSpace),Se=s.convert(E.type),We=y(E.internalFormat,ke,Se,E.colorSpace),Xe=E.isVideoTexture!==!0,pt=Z.__version===void 0||Y===!0,F=$.dataReady;let be=b(E,Ue);Ce(i.TEXTURE_CUBE_MAP,E);let se;if(Be){Xe&&pt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,be,We,Ue.width,Ue.height);for(let ce=0;ce<6;ce++){se=ve[ce].mipmaps;for(let Me=0;Me<se.length;Me++){const Ee=se[Me];E.format!==Zi?ke!==null?Xe?F&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Me,0,0,Ee.width,Ee.height,ke,Ee.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Me,We,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Me,0,0,Ee.width,Ee.height,ke,Se,Ee.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Me,We,Ee.width,Ee.height,0,ke,Se,Ee.data)}}}else{if(se=E.mipmaps,Xe&&pt){se.length>0&&be++;const ce=ne(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,be,We,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(me){Xe?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,ve[ce].width,ve[ce].height,ke,Se,ve[ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,We,ve[ce].width,ve[ce].height,0,ke,Se,ve[ce].data);for(let Me=0;Me<se.length;Me++){const $e=se[Me].image[ce].image;Xe?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Me+1,0,0,$e.width,$e.height,ke,Se,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Me+1,We,$e.width,$e.height,0,ke,Se,$e.data)}}else{Xe?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,ke,Se,ve[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,We,ke,Se,ve[ce]);for(let Me=0;Me<se.length;Me++){const Ee=se[Me];Xe?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Me+1,0,0,ke,Se,Ee.image[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Me+1,We,ke,Se,Ee.image[ce])}}}m(E)&&p(i.TEXTURE_CUBE_MAP),Z.__version=$.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ye(R,E,O,Y,$,Z){const pe=s.convert(O.format,O.colorSpace),fe=s.convert(O.type),xe=y(O.internalFormat,pe,fe,O.colorSpace),Be=n.get(E),me=n.get(O);if(me.__renderTarget=E,!Be.__hasExternalTextures){const ve=Math.max(1,E.width>>Z),Ue=Math.max(1,E.height>>Z);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,Z,xe,ve,Ue,E.depth,0,pe,fe,null):t.texImage2D($,Z,xe,ve,Ue,0,pe,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),L(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,$,me.__webglTexture,0,J(E)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,$,me.__webglTexture,Z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function k(R,E,O){if(i.bindRenderbuffer(i.RENDERBUFFER,R),E.depthBuffer){const Y=E.depthTexture,$=Y&&Y.isDepthTexture?Y.type:null,Z=v(E.stencilBuffer,$),pe=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=J(E);L(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,Z,E.width,E.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,Z,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Z,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,R)}else{const Y=E.textures;for(let $=0;$<Y.length;$++){const Z=Y[$],pe=s.convert(Z.format,Z.colorSpace),fe=s.convert(Z.type),xe=y(Z.internalFormat,pe,fe,Z.colorSpace),Be=J(E);O&&L(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,xe,E.width,E.height):L(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Be,xe,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,xe,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function oe(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(E.depthTexture);Y.__renderTarget=E,(!Y.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Q(E.depthTexture,0);const $=Y.__webglTexture,Z=J(E);if(E.depthTexture.format===Ya)L(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(E.depthTexture.format===dl)L(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function le(R){const E=n.get(R),O=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const Y=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Y){const $=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Y.removeEventListener("dispose",$)};Y.addEventListener("dispose",$),E.__depthDisposeCallback=$}E.__boundDepthTexture=Y}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");oe(E.__webglFramebuffer,R)}else if(O){E.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[Y]),E.__webglDepthbuffer[Y]===void 0)E.__webglDepthbuffer[Y]=i.createRenderbuffer(),k(E.__webglDepthbuffer[Y],R,!1);else{const $=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),k(E.__webglDepthbuffer,R,!1);else{const Y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,$)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(R,E,O){const Y=n.get(R);E!==void 0&&ye(Y.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&le(R)}function Le(R){const E=R.texture,O=n.get(R),Y=n.get(E);R.addEventListener("dispose",T);const $=R.textures,Z=R.isWebGLCubeRenderTarget===!0,pe=$.length>1;if(pe||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=E.version,o.memory.textures++),Z){O.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer[fe]=[];for(let xe=0;xe<E.mipmaps.length;xe++)O.__webglFramebuffer[fe][xe]=i.createFramebuffer()}else O.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)O.__webglFramebuffer[fe]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(pe)for(let fe=0,xe=$.length;fe<xe;fe++){const Be=n.get($[fe]);Be.__webglTexture===void 0&&(Be.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&L(R)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let fe=0;fe<$.length;fe++){const xe=$[fe];O.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[fe]);const Be=s.convert(xe.format,xe.colorSpace),me=s.convert(xe.type),ve=y(xe.internalFormat,Be,me,xe.colorSpace,R.isXRRenderTarget===!0),Ue=J(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,ve,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,O.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),k(O.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Ce(i.TEXTURE_CUBE_MAP,E);for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)ye(O.__webglFramebuffer[fe][xe],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe);else ye(O.__webglFramebuffer[fe],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(E)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let fe=0,xe=$.length;fe<xe;fe++){const Be=$[fe],me=n.get(Be);t.bindTexture(i.TEXTURE_2D,me.__webglTexture),Ce(i.TEXTURE_2D,Be),ye(O.__webglFramebuffer,R,Be,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,0),m(Be)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,Y.__webglTexture),Ce(fe,E),E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)ye(O.__webglFramebuffer[xe],R,E,i.COLOR_ATTACHMENT0,fe,xe);else ye(O.__webglFramebuffer,R,E,i.COLOR_ATTACHMENT0,fe,0);m(E)&&p(fe),t.unbindTexture()}R.depthBuffer&&le(R)}function I(R){const E=R.textures;for(let O=0,Y=E.length;O<Y;O++){const $=E[O];if(m($)){const Z=x(R),pe=n.get($).__webglTexture;t.bindTexture(Z,pe),p(Z),t.unbindTexture()}}}const D=[],w=[];function re(R){if(R.samples>0){if(L(R)===!1){const E=R.textures,O=R.width,Y=R.height;let $=i.COLOR_BUFFER_BIT;const Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(R),fe=E.length>1;if(fe)for(let xe=0;xe<E.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let xe=0;xe<E.length;xe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[xe]);const Be=n.get(E[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Be,0)}i.blitFramebuffer(0,0,O,Y,0,0,O,Y,$,i.NEAREST),l===!0&&(D.length=0,w.length=0,D.push(i.COLOR_ATTACHMENT0+xe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(D.push(Z),w.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,w)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,D))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let xe=0;xe<E.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,pe.__webglColorRenderbuffer[xe]);const Be=n.get(E[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,Be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function J(R){return Math.min(r.maxSamples,R.samples)}function L(R){const E=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ie(R){const E=o.render.frame;u.get(R)!==E&&(u.set(R,E),R.update())}function ue(R,E){const O=R.colorSpace,Y=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==fi&&O!==Ns&&(ht.getTransfer(O)===wt?(Y!==Zi||$!==ms)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),E}function ne(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=B,this.setTexture2D=Q,this.setTexture2DArray=W,this.setTexture3D=j,this.setTextureCube=V,this.rebindTextures=ae,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=L}function rU(i,e){function t(n,r=Ns){let s;const o=ht.getTransfer(r);if(n===ms)return i.UNSIGNED_BYTE;if(n===Xg)return i.UNSIGNED_SHORT_4_4_4_4;if(n===jg)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yb)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===vb)return i.BYTE;if(n===xb)return i.SHORT;if(n===Xc)return i.UNSIGNED_SHORT;if(n===Wg)return i.INT;if(n===Yo)return i.UNSIGNED_INT;if(n===cr)return i.FLOAT;if(n===Qs)return i.HALF_FLOAT;if(n===Sb)return i.ALPHA;if(n===Mb)return i.RGB;if(n===Zi)return i.RGBA;if(n===bb)return i.LUMINANCE;if(n===Tb)return i.LUMINANCE_ALPHA;if(n===Ya)return i.DEPTH_COMPONENT;if(n===dl)return i.DEPTH_STENCIL;if(n===Yg)return i.RED;if(n===qg)return i.RED_INTEGER;if(n===Eb)return i.RG;if(n===$g)return i.RG_INTEGER;if(n===Kg)return i.RGBA_INTEGER;if(n===yf||n===Sf||n===Mf||n===bf)if(o===wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===yf)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===yf)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sf)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mf)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bf)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nm||n===im||n===rm||n===sm)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===nm)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===im)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===rm)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sm)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===om||n===am||n===lm)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===om||n===am)return o===wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===lm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===cm||n===um||n===fm||n===hm||n===dm||n===pm||n===mm||n===gm||n===_m||n===vm||n===xm||n===ym||n===Sm||n===Mm)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===cm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===um)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_m)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ym)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Tf||n===bm||n===Tm)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Tf)return o===wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bm)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tm)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wb||n===Em||n===wm||n===Am)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Tf)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Em)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wm)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Am)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hl?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const sU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oU=`
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

}`;class aU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Tn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Xn({vertexShader:sU,fragmentShader:oU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ln(new wh(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lU extends Ko{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=new aU,m=t.getContextAttributes();let p=null,x=null;const y=[],v=[],b=new Fe;let A=null;const T=new Rn;T.viewport=new vt;const C=new Rn;C.viewport=new vt;const S=[T,C],M=new xD;let N=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let de=y[te];return de===void 0&&(de=new Pd,y[te]=de),de.getTargetRaySpace()},this.getControllerGrip=function(te){let de=y[te];return de===void 0&&(de=new Pd,y[te]=de),de.getGripSpace()},this.getHand=function(te){let de=y[te];return de===void 0&&(de=new Pd,y[te]=de),de.getHandSpace()};function H(te){const de=v.indexOf(te.inputSource);if(de===-1)return;const ye=y[de];ye!==void 0&&(ye.update(te.inputSource,te.frame,c||o),ye.dispatchEvent({type:te.type,data:te.inputSource}))}function q(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",Q);for(let te=0;te<y.length;te++){const de=v[te];de!==null&&(v[te]=null,y[te].disconnect(de))}N=null,B=null,_.reset(),e.setRenderTarget(p),d=null,h=null,f=null,r=null,x=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",q),r.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(b),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,k=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=m.stencil?dl:Ya,k=m.stencil?hl:Yo);const le={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(le),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new Ur(h.textureWidth,h.textureHeight,{format:Zi,type:ms,depthTexture:new Gb(h.textureWidth,h.textureHeight,k,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}else{const ye={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,ye),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Ur(d.framebufferWidth,d.framebufferHeight,{format:Zi,type:ms,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),He.setContext(r),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Q(te){for(let de=0;de<te.removed.length;de++){const ye=te.removed[de],k=v.indexOf(ye);k>=0&&(v[k]=null,y[k].disconnect(ye))}for(let de=0;de<te.added.length;de++){const ye=te.added[de];let k=v.indexOf(ye);if(k===-1){for(let le=0;le<y.length;le++)if(le>=v.length){v.push(ye),k=le;break}else if(v[le]===null){v[le]=ye,k=le;break}if(k===-1)break}const oe=y[k];oe&&oe.connect(ye)}}const W=new z,j=new z;function V(te,de,ye){W.setFromMatrixPosition(de.matrixWorld),j.setFromMatrixPosition(ye.matrixWorld);const k=W.distanceTo(j),oe=de.projectionMatrix.elements,le=ye.projectionMatrix.elements,ae=oe[14]/(oe[10]-1),Le=oe[14]/(oe[10]+1),I=(oe[9]+1)/oe[5],D=(oe[9]-1)/oe[5],w=(oe[8]-1)/oe[0],re=(le[8]+1)/le[0],J=ae*w,L=ae*re,ie=k/(-w+re),ue=ie*-w;if(de.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ue),te.translateZ(ie),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),oe[10]===-1)te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const ne=ae+ie,R=Le+ie,E=J-ue,O=L+(k-ue),Y=I*Le/R*ne,$=D*Le/R*ne;te.projectionMatrix.makePerspective(E,O,Y,$,ne,R),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function he(te,de){de===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(de.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let de=te.near,ye=te.far;_.texture!==null&&(_.depthNear>0&&(de=_.depthNear),_.depthFar>0&&(ye=_.depthFar)),M.near=C.near=T.near=de,M.far=C.far=T.far=ye,(N!==M.near||B!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),N=M.near,B=M.far),T.layers.mask=te.layers.mask|2,C.layers.mask=te.layers.mask|4,M.layers.mask=T.layers.mask|C.layers.mask;const k=te.parent,oe=M.cameras;he(M,k);for(let le=0;le<oe.length;le++)he(oe[le],k);oe.length===2?V(M,T,C):M.projectionMatrix.copy(T.projectionMatrix),U(te,M,k)};function U(te,de,ye){ye===null?te.matrix.copy(de.matrixWorld):(te.matrix.copy(ye.matrixWorld),te.matrix.invert(),te.matrix.multiply(de.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=pl*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(te){l=te,h!==null&&(h.fixedFoveation=te),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=te)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let _e=null;function Ce(te,de){if(u=de.getViewerPose(c||o),g=de,u!==null){const ye=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let k=!1;ye.length!==M.cameras.length&&(M.cameras.length=0,k=!0);for(let ae=0;ae<ye.length;ae++){const Le=ye[ae];let I=null;if(d!==null)I=d.getViewport(Le);else{const w=f.getViewSubImage(h,Le);I=w.viewport,ae===0&&(e.setRenderTargetTextures(x,w.colorTexture,h.ignoreDepthValues?void 0:w.depthStencilTexture),e.setRenderTarget(x))}let D=S[ae];D===void 0&&(D=new Rn,D.layers.enable(ae),D.viewport=new vt,S[ae]=D),D.matrix.fromArray(Le.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(Le.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(I.x,I.y,I.width,I.height),ae===0&&(M.matrix.copy(D.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),k===!0&&M.cameras.push(D)}const oe=r.enabledFeatures;if(oe&&oe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const ae=f.getDepthInformation(ye[0]);ae&&ae.isValid&&ae.texture&&_.init(e,ae,r.renderState)}}for(let ye=0;ye<y.length;ye++){const k=v[ye],oe=y[ye];k!==null&&oe!==void 0&&oe.update(k,de,c||o)}_e&&_e(te,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),g=null}const He=new Kb;He.setAnimationLoop(Ce),this.setAnimationLoop=function(te){_e=te},this.dispose=function(){}}}const go=new mr,cU=new et;function uU(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ob(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,x,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===yi&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===yi&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),y=x.envMap,v=x.envMapRotation;y&&(m.envMap.value=y,go.copy(v),go.x*=-1,go.y*=-1,go.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(go.y*=-1,go.z*=-1),m.envMapRotation.value.setFromMatrix4(cU.makeRotationFromEuler(go)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===yi&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function fU(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function c(x,y){let v=r[x.id];v===void 0&&(g(x),v=u(x),r[x.id]=v,x.addEventListener("dispose",m));const b=y.program;n.updateUBOMapping(x,b);const A=e.render.frame;s[x.id]!==A&&(h(x),s[x.id]=A)}function u(x){const y=f();x.__bindingPointIndex=y;const v=i.createBuffer(),b=x.__size,A=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,b,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const y=r[x.id],v=x.uniforms,b=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let A=0,T=v.length;A<T;A++){const C=Array.isArray(v[A])?v[A]:[v[A]];for(let S=0,M=C.length;S<M;S++){const N=C[S];if(d(N,A,S,b)===!0){const B=N.__offset,H=Array.isArray(N.value)?N.value:[N.value];let q=0;for(let Q=0;Q<H.length;Q++){const W=H[Q],j=_(W);typeof W=="number"||typeof W=="boolean"?(N.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,B+q,N.__data)):W.isMatrix3?(N.__data[0]=W.elements[0],N.__data[1]=W.elements[1],N.__data[2]=W.elements[2],N.__data[3]=0,N.__data[4]=W.elements[3],N.__data[5]=W.elements[4],N.__data[6]=W.elements[5],N.__data[7]=0,N.__data[8]=W.elements[6],N.__data[9]=W.elements[7],N.__data[10]=W.elements[8],N.__data[11]=0):(W.toArray(N.__data,q),q+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,y,v,b){const A=x.value,T=y+"_"+v;if(b[T]===void 0)return typeof A=="number"||typeof A=="boolean"?b[T]=A:b[T]=A.clone(),!0;{const C=b[T];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return b[T]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(x){const y=x.uniforms;let v=0;const b=16;for(let T=0,C=y.length;T<C;T++){const S=Array.isArray(y[T])?y[T]:[y[T]];for(let M=0,N=S.length;M<N;M++){const B=S[M],H=Array.isArray(B.value)?B.value:[B.value];for(let q=0,Q=H.length;q<Q;q++){const W=H[q],j=_(W),V=v%b,he=V%j.boundary,U=V+he;v+=he,U!==0&&b-U<j.storage&&(v+=b-U),B.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=j.storage}}}const A=v%b;return A>0&&(v+=b-A),x.__size=v,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const x in r)i.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class m_{constructor(e={}){const{canvas:t=pP(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const x=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yn,this.toneMapping=qs,this.toneMappingExposure=1;const v=this;let b=!1,A=0,T=0,C=null,S=-1,M=null;const N=new vt,B=new vt;let H=null;const q=new Ge(0);let Q=0,W=t.width,j=t.height,V=1,he=null,U=null;const _e=new vt(0,0,W,j),Ce=new vt(0,0,W,j);let He=!1;const te=new t_;let de=!1,ye=!1;this.transmissionResolutionScale=1;const k=new et,oe=new et,le=new z,ae=new vt,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let I=!1;function D(){return C===null?V:1}let w=n;function re(P,X){return t.getContext(P,X)}try{const P={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vg}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),w===null){const X="webgl2";if(w=re(X,P),w===null)throw re(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let J,L,ie,ue,ne,R,E,O,Y,$,Z,pe,fe,xe,Be,me,ve,Ue,ke,Se,We,Xe,pt,F;function be(){J=new MI(w),J.init(),Xe=new rU(w,J),L=new gI(w,J,e,Xe),ie=new nU(w,J),L.reverseDepthBuffer&&h&&ie.buffers.depth.setReversed(!0),ue=new EI(w),ne=new GN,R=new iU(w,J,ie,ne,L,Xe,ue),E=new vI(v),O=new SI(v),Y=new LD(w),pt=new pI(w,Y),$=new bI(w,Y,ue,pt),Z=new AI(w,$,Y,ue),ke=new wI(w,L,R),me=new _I(ne),pe=new VN(v,E,O,J,L,pt,me),fe=new uU(v,ne),xe=new XN,Be=new ZN(J),Ue=new dI(v,E,O,ie,Z,d,l),ve=new eU(v,Z,L),F=new fU(w,ue,L,ie),Se=new mI(w,J,ue),We=new TI(w,J,ue),ue.programs=pe.programs,v.capabilities=L,v.extensions=J,v.properties=ne,v.renderLists=xe,v.shadowMap=ve,v.state=ie,v.info=ue}be();const se=new lU(v,w);this.xr=se,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const P=J.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=J.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(P){P!==void 0&&(V=P,this.setSize(W,j,!1))},this.getSize=function(P){return P.set(W,j)},this.setSize=function(P,X,ee=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=P,j=X,t.width=Math.floor(P*V),t.height=Math.floor(X*V),ee===!0&&(t.style.width=P+"px",t.style.height=X+"px"),this.setViewport(0,0,P,X)},this.getDrawingBufferSize=function(P){return P.set(W*V,j*V).floor()},this.setDrawingBufferSize=function(P,X,ee){W=P,j=X,V=ee,t.width=Math.floor(P*ee),t.height=Math.floor(X*ee),this.setViewport(0,0,P,X)},this.getCurrentViewport=function(P){return P.copy(N)},this.getViewport=function(P){return P.copy(_e)},this.setViewport=function(P,X,ee,K){P.isVector4?_e.set(P.x,P.y,P.z,P.w):_e.set(P,X,ee,K),ie.viewport(N.copy(_e).multiplyScalar(V).round())},this.getScissor=function(P){return P.copy(Ce)},this.setScissor=function(P,X,ee,K){P.isVector4?Ce.set(P.x,P.y,P.z,P.w):Ce.set(P,X,ee,K),ie.scissor(B.copy(Ce).multiplyScalar(V).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(P){ie.setScissorTest(He=P)},this.setOpaqueSort=function(P){he=P},this.setTransparentSort=function(P){U=P},this.getClearColor=function(P){return P.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(P=!0,X=!0,ee=!0){let K=0;if(P){let G=!1;if(C!==null){const ge=C.texture.format;G=ge===Kg||ge===$g||ge===qg}if(G){const ge=C.texture.type,Ae=ge===ms||ge===Yo||ge===Xc||ge===hl||ge===Xg||ge===jg,De=Ue.getClearColor(),Pe=Ue.getClearAlpha(),Ve=De.r,qe=De.g,ze=De.b;Ae?(g[0]=Ve,g[1]=qe,g[2]=ze,g[3]=Pe,w.clearBufferuiv(w.COLOR,0,g)):(_[0]=Ve,_[1]=qe,_[2]=ze,_[3]=Pe,w.clearBufferiv(w.COLOR,0,_))}else K|=w.COLOR_BUFFER_BIT}X&&(K|=w.DEPTH_BUFFER_BIT),ee&&(K|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),Ue.dispose(),xe.dispose(),Be.dispose(),ne.dispose(),E.dispose(),O.dispose(),Z.dispose(),pt.dispose(),F.dispose(),pe.dispose(),se.dispose(),se.removeEventListener("sessionstart",we),se.removeEventListener("sessionend",Ze),Oe.stop()};function ce(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const P=ue.autoReset,X=ve.enabled,ee=ve.autoUpdate,K=ve.needsUpdate,G=ve.type;be(),ue.autoReset=P,ve.enabled=X,ve.autoUpdate=ee,ve.needsUpdate=K,ve.type=G}function Ee(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function $e(P){const X=P.target;X.removeEventListener("dispose",$e),mt(X)}function mt(P){jt(P),ne.remove(P)}function jt(P){const X=ne.get(P).programs;X!==void 0&&(X.forEach(function(ee){pe.releaseProgram(ee)}),P.isShaderMaterial&&pe.releaseShaderCache(P))}this.renderBufferDirect=function(P,X,ee,K,G,ge){X===null&&(X=Le);const Ae=G.isMesh&&G.matrixWorld.determinant()<0,De=Mi(P,X,ee,K,G);ie.setMaterial(K,Ae);let Pe=ee.index,Ve=1;if(K.wireframe===!0){if(Pe=$.getWireframeAttribute(ee),Pe===void 0)return;Ve=2}const qe=ee.drawRange,ze=ee.attributes.position;let rt=qe.start*Ve,St=(qe.start+qe.count)*Ve;ge!==null&&(rt=Math.max(rt,ge.start*Ve),St=Math.min(St,(ge.start+ge.count)*Ve)),Pe!==null?(rt=Math.max(rt,0),St=Math.min(St,Pe.count)):ze!=null&&(rt=Math.max(rt,0),St=Math.min(St,ze.count));const tn=St-rt;if(tn<0||tn===1/0)return;pt.setup(G,K,De,ee,Pe);let Yt,gt=Se;if(Pe!==null&&(Yt=Y.get(Pe),gt=We,gt.setIndex(Yt)),G.isMesh)K.wireframe===!0?(ie.setLineWidth(K.wireframeLinewidth*D()),gt.setMode(w.LINES)):gt.setMode(w.TRIANGLES);else if(G.isLine){let Ye=K.linewidth;Ye===void 0&&(Ye=1),ie.setLineWidth(Ye*D()),G.isLineSegments?gt.setMode(w.LINES):G.isLineLoop?gt.setMode(w.LINE_LOOP):gt.setMode(w.LINE_STRIP)}else G.isPoints?gt.setMode(w.POINTS):G.isSprite&&gt.setMode(w.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)gt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))gt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ye=G._multiDrawStarts,An=G._multiDrawCounts,Mt=G._multiDrawCount,tr=Pe?Y.get(Pe).bytesPerElement:1,Zo=ne.get(K).currentProgram.getUniforms();for(let bi=0;bi<Mt;bi++)Zo.setValue(w,"_gl_DrawID",bi),gt.render(Ye[bi]/tr,An[bi])}else if(G.isInstancedMesh)gt.renderInstances(rt,tn,G.count);else if(ee.isInstancedBufferGeometry){const Ye=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,An=Math.min(ee.instanceCount,Ye);gt.renderInstances(rt,tn,An)}else gt.render(rt,tn)};function Re(P,X,ee){P.transparent===!0&&P.side===Er&&P.forceSinglePass===!1?(P.side=yi,P.needsUpdate=!0,Pt(P,X,ee),P.side=ps,P.needsUpdate=!0,Pt(P,X,ee),P.side=Er):Pt(P,X,ee)}this.compile=function(P,X,ee=null){ee===null&&(ee=P),p=Be.get(ee),p.init(X),y.push(p),ee.traverseVisible(function(G){G.isLight&&G.layers.test(X.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),P!==ee&&P.traverseVisible(function(G){G.isLight&&G.layers.test(X.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();const K=new Set;return P.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ge=G.material;if(ge)if(Array.isArray(ge))for(let Ae=0;Ae<ge.length;Ae++){const De=ge[Ae];Re(De,ee,G),K.add(De)}else Re(ge,ee,G),K.add(ge)}),y.pop(),p=null,K},this.compileAsync=function(P,X,ee=null){const K=this.compile(P,X,ee);return new Promise(G=>{function ge(){if(K.forEach(function(Ae){ne.get(Ae).currentProgram.isReady()&&K.delete(Ae)}),K.size===0){G(P);return}setTimeout(ge,10)}J.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Ne=null;function tt(P){Ne&&Ne(P)}function we(){Oe.stop()}function Ze(){Oe.start()}const Oe=new Kb;Oe.setAnimationLoop(tt),typeof self<"u"&&Oe.setContext(self),this.setAnimationLoop=function(P){Ne=P,se.setAnimationLoop(P),P===null?Oe.stop():Oe.start()},se.addEventListener("sessionstart",we),se.addEventListener("sessionend",Ze),this.render=function(P,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(X),X=se.getCamera()),P.isScene===!0&&P.onBeforeRender(v,P,X,C),p=Be.get(P,y.length),p.init(X),y.push(p),oe.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),te.setFromProjectionMatrix(oe),ye=this.localClippingEnabled,de=me.init(this.clippingPlanes,ye),m=xe.get(P,x.length),m.init(),x.push(m),se.enabled===!0&&se.isPresenting===!0){const ge=v.xr.getDepthSensingMesh();ge!==null&&Ke(ge,X,-1/0,v.sortObjects)}Ke(P,X,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(he,U),I=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,I&&Ue.addToRenderList(m,P),this.info.render.frame++,de===!0&&me.beginShadows();const ee=p.state.shadowsArray;ve.render(ee,P,X),de===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=m.opaque,G=m.transmissive;if(p.setupLights(),X.isArrayCamera){const ge=X.cameras;if(G.length>0)for(let Ae=0,De=ge.length;Ae<De;Ae++){const Pe=ge[Ae];at(K,G,P,Pe)}I&&Ue.render(P);for(let Ae=0,De=ge.length;Ae<De;Ae++){const Pe=ge[Ae];$t(m,P,Pe,Pe.viewport)}}else G.length>0&&at(K,G,P,X),I&&Ue.render(P),$t(m,P,X);C!==null&&T===0&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),P.isScene===!0&&P.onAfterRender(v,P,X),pt.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],de===!0&&me.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Ke(P,X,ee,K){if(P.visible===!1)return;if(P.layers.test(X.layers)){if(P.isGroup)ee=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(X);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||te.intersectsSprite(P)){K&&ae.setFromMatrixPosition(P.matrixWorld).applyMatrix4(oe);const Ae=Z.update(P),De=P.material;De.visible&&m.push(P,Ae,De,ee,ae.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||te.intersectsObject(P))){const Ae=Z.update(P),De=P.material;if(K&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ae.copy(P.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),ae.copy(Ae.boundingSphere.center)),ae.applyMatrix4(P.matrixWorld).applyMatrix4(oe)),Array.isArray(De)){const Pe=Ae.groups;for(let Ve=0,qe=Pe.length;Ve<qe;Ve++){const ze=Pe[Ve],rt=De[ze.materialIndex];rt&&rt.visible&&m.push(P,Ae,rt,ee,ae.z,ze)}}else De.visible&&m.push(P,Ae,De,ee,ae.z,null)}}const ge=P.children;for(let Ae=0,De=ge.length;Ae<De;Ae++)Ke(ge[Ae],X,ee,K)}function $t(P,X,ee,K){const G=P.opaque,ge=P.transmissive,Ae=P.transparent;p.setupLightsView(ee),de===!0&&me.setGlobalState(v.clippingPlanes,ee),K&&ie.viewport(N.copy(K)),G.length>0&&Nt(G,X,ee),ge.length>0&&Nt(ge,X,ee),Ae.length>0&&Nt(Ae,X,ee),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function at(P,X,ee,K){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new Ur(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?Qs:ms,minFilter:rs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));const ge=p.state.transmissionRenderTarget[K.id],Ae=K.viewport||N;ge.setSize(Ae.z*v.transmissionResolutionScale,Ae.w*v.transmissionResolutionScale);const De=v.getRenderTarget();v.setRenderTarget(ge),v.getClearColor(q),Q=v.getClearAlpha(),Q<1&&v.setClearColor(16777215,.5),v.clear(),I&&Ue.render(ee);const Pe=v.toneMapping;v.toneMapping=qs;const Ve=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),de===!0&&me.setGlobalState(v.clippingPlanes,K),Nt(P,ee,K),R.updateMultisampleRenderTarget(ge),R.updateRenderTargetMipmap(ge),J.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let ze=0,rt=X.length;ze<rt;ze++){const St=X[ze],tn=St.object,Yt=St.geometry,gt=St.material,Ye=St.group;if(gt.side===Er&&tn.layers.test(K.layers)){const An=gt.side;gt.side=yi,gt.needsUpdate=!0,cn(tn,ee,K,Yt,gt,Ye),gt.side=An,gt.needsUpdate=!0,qe=!0}}qe===!0&&(R.updateMultisampleRenderTarget(ge),R.updateRenderTargetMipmap(ge))}v.setRenderTarget(De),v.setClearColor(q,Q),Ve!==void 0&&(K.viewport=Ve),v.toneMapping=Pe}function Nt(P,X,ee){const K=X.isScene===!0?X.overrideMaterial:null;for(let G=0,ge=P.length;G<ge;G++){const Ae=P[G],De=Ae.object,Pe=Ae.geometry,Ve=K===null?Ae.material:K,qe=Ae.group;De.layers.test(ee.layers)&&cn(De,X,ee,Pe,Ve,qe)}}function cn(P,X,ee,K,G,ge){P.onBeforeRender(v,X,ee,K,G,ge),P.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),G.onBeforeRender(v,X,ee,K,P,ge),G.transparent===!0&&G.side===Er&&G.forceSinglePass===!1?(G.side=yi,G.needsUpdate=!0,v.renderBufferDirect(ee,X,K,G,P,ge),G.side=ps,G.needsUpdate=!0,v.renderBufferDirect(ee,X,K,G,P,ge),G.side=Er):v.renderBufferDirect(ee,X,K,G,P,ge),P.onAfterRender(v,X,ee,K,G,ge)}function Pt(P,X,ee){X.isScene!==!0&&(X=Le);const K=ne.get(P),G=p.state.lights,ge=p.state.shadowsArray,Ae=G.state.version,De=pe.getParameters(P,G.state,ge,X,ee),Pe=pe.getProgramCacheKey(De);let Ve=K.programs;K.environment=P.isMeshStandardMaterial?X.environment:null,K.fog=X.fog,K.envMap=(P.isMeshStandardMaterial?O:E).get(P.envMap||K.environment),K.envMapRotation=K.environment!==null&&P.envMap===null?X.environmentRotation:P.envMapRotation,Ve===void 0&&(P.addEventListener("dispose",$e),Ve=new Map,K.programs=Ve);let qe=Ve.get(Pe);if(qe!==void 0){if(K.currentProgram===qe&&K.lightsStateVersion===Ae)return yt(P,De),qe}else De.uniforms=pe.getUniforms(P),P.onBeforeCompile(De,v),qe=pe.acquireProgram(De,Pe),Ve.set(Pe,qe),K.uniforms=De.uniforms;const ze=K.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(ze.clippingPlanes=me.uniform),yt(P,De),K.needsLights=Yn(P),K.lightsStateVersion=Ae,K.needsLights&&(ze.ambientLightColor.value=G.state.ambient,ze.lightProbe.value=G.state.probe,ze.directionalLights.value=G.state.directional,ze.directionalLightShadows.value=G.state.directionalShadow,ze.spotLights.value=G.state.spot,ze.spotLightShadows.value=G.state.spotShadow,ze.rectAreaLights.value=G.state.rectArea,ze.ltc_1.value=G.state.rectAreaLTC1,ze.ltc_2.value=G.state.rectAreaLTC2,ze.pointLights.value=G.state.point,ze.pointLightShadows.value=G.state.pointShadow,ze.hemisphereLights.value=G.state.hemi,ze.directionalShadowMap.value=G.state.directionalShadowMap,ze.directionalShadowMatrix.value=G.state.directionalShadowMatrix,ze.spotShadowMap.value=G.state.spotShadowMap,ze.spotLightMatrix.value=G.state.spotLightMatrix,ze.spotLightMap.value=G.state.spotLightMap,ze.pointShadowMap.value=G.state.pointShadowMap,ze.pointShadowMatrix.value=G.state.pointShadowMatrix),K.currentProgram=qe,K.uniformsList=null,qe}function Dt(P){if(P.uniformsList===null){const X=P.currentProgram.getUniforms();P.uniformsList=Ef.seqWithValue(X.seq,P.uniforms)}return P.uniformsList}function yt(P,X){const ee=ne.get(P);ee.outputColorSpace=X.outputColorSpace,ee.batching=X.batching,ee.batchingColor=X.batchingColor,ee.instancing=X.instancing,ee.instancingColor=X.instancingColor,ee.instancingMorph=X.instancingMorph,ee.skinning=X.skinning,ee.morphTargets=X.morphTargets,ee.morphNormals=X.morphNormals,ee.morphColors=X.morphColors,ee.morphTargetsCount=X.morphTargetsCount,ee.numClippingPlanes=X.numClippingPlanes,ee.numIntersection=X.numClipIntersection,ee.vertexAlphas=X.vertexAlphas,ee.vertexTangents=X.vertexTangents,ee.toneMapping=X.toneMapping}function Mi(P,X,ee,K,G){X.isScene!==!0&&(X=Le),R.resetTextureUnits();const ge=X.fog,Ae=K.isMeshStandardMaterial?X.environment:null,De=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:fi,Pe=(K.isMeshStandardMaterial?O:E).get(K.envMap||Ae),Ve=K.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,qe=!!ee.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),ze=!!ee.morphAttributes.position,rt=!!ee.morphAttributes.normal,St=!!ee.morphAttributes.color;let tn=qs;K.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(tn=v.toneMapping);const Yt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,gt=Yt!==void 0?Yt.length:0,Ye=ne.get(K),An=p.state.lights;if(de===!0&&(ye===!0||P!==M)){const qn=P===M&&K.id===S;me.setState(K,P,qn)}let Mt=!1;K.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==An.state.version||Ye.outputColorSpace!==De||G.isBatchedMesh&&Ye.batching===!1||!G.isBatchedMesh&&Ye.batching===!0||G.isBatchedMesh&&Ye.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ye.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ye.instancing===!1||!G.isInstancedMesh&&Ye.instancing===!0||G.isSkinnedMesh&&Ye.skinning===!1||!G.isSkinnedMesh&&Ye.skinning===!0||G.isInstancedMesh&&Ye.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ye.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ye.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ye.instancingMorph===!1&&G.morphTexture!==null||Ye.envMap!==Pe||K.fog===!0&&Ye.fog!==ge||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==me.numPlanes||Ye.numIntersection!==me.numIntersection)||Ye.vertexAlphas!==Ve||Ye.vertexTangents!==qe||Ye.morphTargets!==ze||Ye.morphNormals!==rt||Ye.morphColors!==St||Ye.toneMapping!==tn||Ye.morphTargetsCount!==gt)&&(Mt=!0):(Mt=!0,Ye.__version=K.version);let tr=Ye.currentProgram;Mt===!0&&(tr=Pt(K,X,G));let Zo=!1,bi=!1,wl=!1;const kt=tr.getUniforms(),Hi=Ye.uniforms;if(ie.useProgram(tr.program)&&(Zo=!0,bi=!0,wl=!0),K.id!==S&&(S=K.id,bi=!0),Zo||M!==P){ie.buffers.depth.getReversed()?(k.copy(P.projectionMatrix),gP(k),_P(k),kt.setValue(w,"projectionMatrix",k)):kt.setValue(w,"projectionMatrix",P.projectionMatrix),kt.setValue(w,"viewMatrix",P.matrixWorldInverse);const hi=kt.map.cameraPosition;hi!==void 0&&hi.setValue(w,le.setFromMatrixPosition(P.matrixWorld)),L.logarithmicDepthBuffer&&kt.setValue(w,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&kt.setValue(w,"isOrthographic",P.isOrthographicCamera===!0),M!==P&&(M=P,bi=!0,wl=!0)}if(G.isSkinnedMesh){kt.setOptional(w,G,"bindMatrix"),kt.setOptional(w,G,"bindMatrixInverse");const qn=G.skeleton;qn&&(qn.boneTexture===null&&qn.computeBoneTexture(),kt.setValue(w,"boneTexture",qn.boneTexture,R))}G.isBatchedMesh&&(kt.setOptional(w,G,"batchingTexture"),kt.setValue(w,"batchingTexture",G._matricesTexture,R),kt.setOptional(w,G,"batchingIdTexture"),kt.setValue(w,"batchingIdTexture",G._indirectTexture,R),kt.setOptional(w,G,"batchingColorTexture"),G._colorsTexture!==null&&kt.setValue(w,"batchingColorTexture",G._colorsTexture,R));const Vi=ee.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0)&&ke.update(G,ee,tr),(bi||Ye.receiveShadow!==G.receiveShadow)&&(Ye.receiveShadow=G.receiveShadow,kt.setValue(w,"receiveShadow",G.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Hi.envMap.value=Pe,Hi.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&X.environment!==null&&(Hi.envMapIntensity.value=X.environmentIntensity),bi&&(kt.setValue(w,"toneMappingExposure",v.toneMappingExposure),Ye.needsLights&&Bt(Hi,wl),ge&&K.fog===!0&&fe.refreshFogUniforms(Hi,ge),fe.refreshMaterialUniforms(Hi,K,V,j,p.state.transmissionRenderTarget[P.id]),Ef.upload(w,Dt(Ye),Hi,R)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ef.upload(w,Dt(Ye),Hi,R),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&kt.setValue(w,"center",G.center),kt.setValue(w,"modelViewMatrix",G.modelViewMatrix),kt.setValue(w,"normalMatrix",G.normalMatrix),kt.setValue(w,"modelMatrix",G.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const qn=K.uniformsGroups;for(let hi=0,Dh=qn.length;hi<Dh;hi++){const so=qn[hi];F.update(so,tr),F.bind(so,tr)}}return tr}function Bt(P,X){P.ambientLightColor.needsUpdate=X,P.lightProbe.needsUpdate=X,P.directionalLights.needsUpdate=X,P.directionalLightShadows.needsUpdate=X,P.pointLights.needsUpdate=X,P.pointLightShadows.needsUpdate=X,P.spotLights.needsUpdate=X,P.spotLightShadows.needsUpdate=X,P.rectAreaLights.needsUpdate=X,P.hemisphereLights.needsUpdate=X}function Yn(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(P,X,ee){ne.get(P.texture).__webglTexture=X,ne.get(P.depthTexture).__webglTexture=ee;const K=ne.get(P);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=ee===void 0,K.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,X){const ee=ne.get(P);ee.__webglFramebuffer=X,ee.__useDefaultFramebuffer=X===void 0};const zi=w.createFramebuffer();this.setRenderTarget=function(P,X=0,ee=0){C=P,A=X,T=ee;let K=!0,G=null,ge=!1,Ae=!1;if(P){const Pe=ne.get(P);if(Pe.__useDefaultFramebuffer!==void 0)ie.bindFramebuffer(w.FRAMEBUFFER,null),K=!1;else if(Pe.__webglFramebuffer===void 0)R.setupRenderTarget(P);else if(Pe.__hasExternalTextures)R.rebindTextures(P,ne.get(P.texture).__webglTexture,ne.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const ze=P.depthTexture;if(Pe.__boundDepthTexture!==ze){if(ze!==null&&ne.has(ze)&&(P.width!==ze.image.width||P.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(P)}}const Ve=P.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ae=!0);const qe=ne.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(qe[X])?G=qe[X][ee]:G=qe[X],ge=!0):P.samples>0&&R.useMultisampledRTT(P)===!1?G=ne.get(P).__webglMultisampledFramebuffer:Array.isArray(qe)?G=qe[ee]:G=qe,N.copy(P.viewport),B.copy(P.scissor),H=P.scissorTest}else N.copy(_e).multiplyScalar(V).floor(),B.copy(Ce).multiplyScalar(V).floor(),H=He;if(ee!==0&&(G=zi),ie.bindFramebuffer(w.FRAMEBUFFER,G)&&K&&ie.drawBuffers(P,G),ie.viewport(N),ie.scissor(B),ie.setScissorTest(H),ge){const Pe=ne.get(P.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+X,Pe.__webglTexture,ee)}else if(Ae){const Pe=ne.get(P.texture),Ve=X;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Pe.__webglTexture,ee,Ve)}else if(P!==null&&ee!==0){const Pe=ne.get(P.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Pe.__webglTexture,ee)}S=-1},this.readRenderTargetPixels=function(P,X,ee,K,G,ge,Ae){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=ne.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ae!==void 0&&(De=De[Ae]),De){ie.bindFramebuffer(w.FRAMEBUFFER,De);try{const Pe=P.texture,Ve=Pe.format,qe=Pe.type;if(!L.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!L.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=P.width-K&&ee>=0&&ee<=P.height-G&&w.readPixels(X,ee,K,G,Xe.convert(Ve),Xe.convert(qe),ge)}finally{const Pe=C!==null?ne.get(C).__webglFramebuffer:null;ie.bindFramebuffer(w.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(P,X,ee,K,G,ge,Ae){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=ne.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ae!==void 0&&(De=De[Ae]),De){const Pe=P.texture,Ve=Pe.format,qe=Pe.type;if(!L.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!L.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=P.width-K&&ee>=0&&ee<=P.height-G){ie.bindFramebuffer(w.FRAMEBUFFER,De);const ze=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,ze),w.bufferData(w.PIXEL_PACK_BUFFER,ge.byteLength,w.STREAM_READ),w.readPixels(X,ee,K,G,Xe.convert(Ve),Xe.convert(qe),0);const rt=C!==null?ne.get(C).__webglFramebuffer:null;ie.bindFramebuffer(w.FRAMEBUFFER,rt);const St=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await mP(w,St,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,ze),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,ge),w.deleteBuffer(ze),w.deleteSync(St),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,X=null,ee=0){P.isTexture!==!0&&(Ta("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,P=arguments[1]);const K=Math.pow(2,-ee),G=Math.floor(P.image.width*K),ge=Math.floor(P.image.height*K),Ae=X!==null?X.x:0,De=X!==null?X.y:0;R.setTexture2D(P,0),w.copyTexSubImage2D(w.TEXTURE_2D,ee,0,0,Ae,De,G,ge),ie.unbindTexture()};const un=w.createFramebuffer(),fn=w.createFramebuffer();this.copyTextureToTexture=function(P,X,ee=null,K=null,G=0,ge=null){P.isTexture!==!0&&(Ta("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,P=arguments[1],X=arguments[2],ge=arguments[3]||0,ee=null),ge===null&&(G!==0?(Ta("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=G,G=0):ge=0);let Ae,De,Pe,Ve,qe,ze,rt,St,tn;const Yt=P.isCompressedTexture?P.mipmaps[ge]:P.image;if(ee!==null)Ae=ee.max.x-ee.min.x,De=ee.max.y-ee.min.y,Pe=ee.isBox3?ee.max.z-ee.min.z:1,Ve=ee.min.x,qe=ee.min.y,ze=ee.isBox3?ee.min.z:0;else{const Vi=Math.pow(2,-G);Ae=Math.floor(Yt.width*Vi),De=Math.floor(Yt.height*Vi),P.isDataArrayTexture?Pe=Yt.depth:P.isData3DTexture?Pe=Math.floor(Yt.depth*Vi):Pe=1,Ve=0,qe=0,ze=0}K!==null?(rt=K.x,St=K.y,tn=K.z):(rt=0,St=0,tn=0);const gt=Xe.convert(X.format),Ye=Xe.convert(X.type);let An;X.isData3DTexture?(R.setTexture3D(X,0),An=w.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(R.setTexture2DArray(X,0),An=w.TEXTURE_2D_ARRAY):(R.setTexture2D(X,0),An=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,X.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,X.unpackAlignment);const Mt=w.getParameter(w.UNPACK_ROW_LENGTH),tr=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Zo=w.getParameter(w.UNPACK_SKIP_PIXELS),bi=w.getParameter(w.UNPACK_SKIP_ROWS),wl=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Yt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Yt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ve),w.pixelStorei(w.UNPACK_SKIP_ROWS,qe),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ze);const kt=P.isDataArrayTexture||P.isData3DTexture,Hi=X.isDataArrayTexture||X.isData3DTexture;if(P.isDepthTexture){const Vi=ne.get(P),qn=ne.get(X),hi=ne.get(Vi.__renderTarget),Dh=ne.get(qn.__renderTarget);ie.bindFramebuffer(w.READ_FRAMEBUFFER,hi.__webglFramebuffer),ie.bindFramebuffer(w.DRAW_FRAMEBUFFER,Dh.__webglFramebuffer);for(let so=0;so<Pe;so++)kt&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,ne.get(P).__webglTexture,G,ze+so),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,ne.get(X).__webglTexture,ge,tn+so)),w.blitFramebuffer(Ve,qe,Ae,De,rt,St,Ae,De,w.DEPTH_BUFFER_BIT,w.NEAREST);ie.bindFramebuffer(w.READ_FRAMEBUFFER,null),ie.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(G!==0||P.isRenderTargetTexture||ne.has(P)){const Vi=ne.get(P),qn=ne.get(X);ie.bindFramebuffer(w.READ_FRAMEBUFFER,un),ie.bindFramebuffer(w.DRAW_FRAMEBUFFER,fn);for(let hi=0;hi<Pe;hi++)kt?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Vi.__webglTexture,G,ze+hi):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Vi.__webglTexture,G),Hi?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,qn.__webglTexture,ge,tn+hi):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,qn.__webglTexture,ge),G!==0?w.blitFramebuffer(Ve,qe,Ae,De,rt,St,Ae,De,w.COLOR_BUFFER_BIT,w.NEAREST):Hi?w.copyTexSubImage3D(An,ge,rt,St,tn+hi,Ve,qe,Ae,De):w.copyTexSubImage2D(An,ge,rt,St,Ve,qe,Ae,De);ie.bindFramebuffer(w.READ_FRAMEBUFFER,null),ie.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Hi?P.isDataTexture||P.isData3DTexture?w.texSubImage3D(An,ge,rt,St,tn,Ae,De,Pe,gt,Ye,Yt.data):X.isCompressedArrayTexture?w.compressedTexSubImage3D(An,ge,rt,St,tn,Ae,De,Pe,gt,Yt.data):w.texSubImage3D(An,ge,rt,St,tn,Ae,De,Pe,gt,Ye,Yt):P.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,ge,rt,St,Ae,De,gt,Ye,Yt.data):P.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,ge,rt,St,Yt.width,Yt.height,gt,Yt.data):w.texSubImage2D(w.TEXTURE_2D,ge,rt,St,Ae,De,gt,Ye,Yt);w.pixelStorei(w.UNPACK_ROW_LENGTH,Mt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,tr),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Zo),w.pixelStorei(w.UNPACK_SKIP_ROWS,bi),w.pixelStorei(w.UNPACK_SKIP_IMAGES,wl),ge===0&&X.generateMipmaps&&w.generateMipmap(An),ie.unbindTexture()},this.copyTextureToTexture3D=function(P,X,ee=null,K=null,G=0){return P.isTexture!==!0&&(Ta("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,K=arguments[1]||null,P=arguments[2],X=arguments[3],G=arguments[4]||0),Ta('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,X,ee,K,G)},this.initRenderTarget=function(P){ne.get(P).__webglFramebuffer===void 0&&R.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?R.setTextureCube(P,0):P.isData3DTexture?R.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?R.setTexture2DArray(P,0):R.setTexture2D(P,0),ie.unbindTexture()},this.resetState=function(){A=0,T=0,C=null,ie.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ss}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}}const Rx={type:"change"},g_={type:"start"},tT={type:"end"},Zu=new yl,Cx=new Ds,hU=Math.cos(70*Cb.DEG2RAD),hn=new z,di=2*Math.PI,Ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Gd=1e-6;class Ph extends PD{constructor(e,t=null){super(e,t),this.state=Ct.NONE,this.enabled=!0,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xa.ROTATE,MIDDLE:Xa.DOLLY,RIGHT:Xa.PAN},this.touches={ONE:Pa.ROTATE,TWO:Pa.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new Or,this._lastTargetPosition=new z,this._quat=new Or().setFromUnitVectors(e.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new tx,this._sphericalDelta=new tx,this._scale=1,this._panOffset=new z,this._rotateStart=new Fe,this._rotateEnd=new Fe,this._rotateDelta=new Fe,this._panStart=new Fe,this._panEnd=new Fe,this._panDelta=new Fe,this._dollyStart=new Fe,this._dollyEnd=new Fe,this._dollyDelta=new Fe,this._dollyDirection=new z,this._mouse=new Fe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=pU.bind(this),this._onPointerDown=dU.bind(this),this._onPointerUp=mU.bind(this),this._onContextMenu=MU.bind(this),this._onMouseWheel=vU.bind(this),this._onKeyDown=xU.bind(this),this._onTouchStart=yU.bind(this),this._onTouchMove=SU.bind(this),this._onMouseDown=gU.bind(this),this._onMouseMove=_U.bind(this),this._interceptControlDown=bU.bind(this),this._interceptControlUp=TU.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Rx),this.update(),this.state=Ct.NONE}update(e=null){const t=this.object.position;hn.copy(t).sub(this.target),hn.applyQuaternion(this._quat),this._spherical.setFromVector3(hn),this.autoRotate&&this.state===Ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=di:n>Math.PI&&(n-=di),r<-Math.PI?r+=di:r>Math.PI&&(r-=di),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(hn.setFromSpherical(this._spherical),hn.applyQuaternion(this._quatInverse),t.copy(this.target).add(hn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=hn.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new z(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new z(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=hn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Zu.origin.copy(this.object.position),Zu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Zu.direction))<hU?this.object.lookAt(this.target):(Cx.setFromNormalAndCoplanarPoint(this.object.up,this.target),Zu.intersectPlane(Cx,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Gd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Gd||this._lastTargetPosition.distanceToSquared(this.target)>Gd?(this.dispatchEvent(Rx),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?di/60*this.autoRotateSpeed*e:di/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){hn.setFromMatrixColumn(t,0),hn.multiplyScalar(-e),this._panOffset.add(hn)}_panUp(e,t){this.screenSpacePanning===!0?hn.setFromMatrixColumn(t,1):(hn.setFromMatrixColumn(t,0),hn.crossVectors(this.object.up,hn)),hn.multiplyScalar(e),this._panOffset.add(hn)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;hn.copy(r).sub(this.target);let s=hn.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(di*this._rotateDelta.x/t.clientHeight),this._rotateUp(di*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(di*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-di*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(di*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-di*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(di*this._rotateDelta.x/t.clientHeight),this._rotateUp(di*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Fe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function dU(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function pU(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function mU(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(tT),this.state=Ct.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function gU(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Xa.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ct.DOLLY;break;case Xa.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ct.ROTATE}break;case Xa.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ct.PAN}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(g_)}function _U(i){switch(this.state){case Ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function vU(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ct.NONE||(i.preventDefault(),this.dispatchEvent(g_),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(tT))}function xU(i){this.enabled!==!1&&this._handleKeyDown(i)}function yU(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Pa.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ct.TOUCH_ROTATE;break;case Pa.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ct.TOUCH_PAN;break;default:this.state=Ct.NONE}break;case 2:switch(this.touches.TWO){case Pa.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ct.TOUCH_DOLLY_PAN;break;case Pa.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ct.TOUCH_DOLLY_ROTATE;break;default:this.state=Ct.NONE}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(g_)}function SU(i){switch(this._trackPointer(i),this.state){case Ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ct.NONE}}function MU(i){this.enabled!==!1&&i.preventDefault()}function bU(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function TU(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function su(i){const e=i,t=e.offsetWidth,n=e.offsetWidth,r=new kb,s=new Rn(75,t/n,.1,1e3),o=new m_;return o.setSize(t,n),{camera:s,renderer:o,scene:r,container:e}}function EU(){const i=document.getElementById("three-container");if(!i)return;const{camera:e,renderer:t,scene:n,container:r}=su(i);e.position.z=2;const s=new Ph(e,t.domElement),o=new ro,a=new Rr({color:65280,wireframe:!0}),l=new ln(o,a);n.add(l),r?r.appendChild(t.domElement):(confirm("No container found"),document.body.appendChild(t.domElement)),window.addEventListener("resize",c,!1);function c(){const h=r.offsetWidth,d=r.offsetWidth,g=h/d;e.aspect=g,e.updateProjectionMatrix(),t.setSize(h,d),u()}function u(){t.render(n,e)}function f(){requestAnimationFrame(f),l.rotation.x+=.01,l.rotation.y+=.01,s.update(),u()}f()}const wU={class:"greetings"},nT=jn({__name:"Cube",setup(i){return ki(()=>{EU()}),(e,t)=>(Wt(),Dn("div",wU,t[0]||(t[0]=[je("h3",null,"Three CUBE",-1),je("div",{class:"w-full",id:"three-container"},null,-1)])))}});function AU(){new URLSearchParams(new URL(window.location.href).search.slice(1)).get("coord");const e=document.getElementById("three-container-earth");if(!e){alert("F");return}const t=e;t.offsetWidth,t.offsetWidth;const n=new kb,r=new Rn(7,window.innerWidth/window.innerHeight,1,100),s=new m_,o=new Ph(r,s.domElement),a=new ro,l=new Rr({color:65280,wireframe:!0}),c=new ln(a,l);n.add(c),t?t.appendChild(s.domElement):(confirm("No container found"),document.body.appendChild(s.domElement)),window.addEventListener("resize",u,!1);function u(){const m=t.offsetWidth,p=t.offsetWidth,x=m/p;r.aspect=x,r.updateProjectionMatrix(),s.setSize(m,p),g()}function f(m,p,x){const y=(90-m)*(Math.PI/180),v=(p+180)*(Math.PI/180),b=-(x*Math.sin(y)*Math.cos(v)),A=x*Math.sin(y)*Math.sin(v),T=x*Math.cos(y);return console.log([b,T,A]),[b,T,A]}function h(){const m=[];for(let p=0;p<10;p++){const x=new nh(.025,20,20),y=new Rr({color:new Ge("white")}),v=new ln(x,y);m.push(v)}return m}function d(){r.position.z=10,n.background=new Ge(61695),n.add(r),n.add(new qb(15790320));const m=new Yb(16777215,1.5);m.position.set(0,10,0),m.angle=Math.PI*.2,m.castShadow=!0,m.shadow.camera.near=20,m.shadow.camera.far=50,m.shadow.bias=-.222,m.shadow.mapSize.width=10,m.shadow.mapSize.height=10,n.add(m);let p=new nx(2e3,1e3);p.position.y=-20,p.material.opacity=.7,p.material.transparent=!1,n.add(p),p=new nx(2e3,500),p.position.y=20,p.material.opacity=1,p.material.transparent=!0,n.add(p),s.setPixelRatio(window.devicePixelRatio),s.setSize(window.innerWidth*.8,window.innerHeight*.8),s.shadowMap.enabled=!0,o.target.set(0,0,0),o.update();const x=new nh(.5,32,32),y=new ru,v=new KP({map:y.load("./img/map/night.jpg"),bumpMap:y.load("./img/map/bump.jpg"),specularMap:y.load("./img/map/spekular.jpg")}),b=new ln(x,v);n.add(b);const A=[[40.71427,-74.00597],[52.52437,13.41053]],T=h();for(let C=0;C<T.length;C++){n.add(T[C]);const S=A[Math.floor(Math.random()*A.length)],M=f(S[0],S[1],.5);T[C].position.set(M[0],M[1],M[2])}t?t.appendChild(s.domElement):(confirm("No container found"),document.body.appendChild(s.domElement))}function g(){s.render(n,r)}function _(){requestAnimationFrame(_),o.update(),g()}d(),_()}const RU={class:"greetings"},iT=jn({__name:"Earth",setup(i){return ki(()=>{AU()}),(e,t)=>(Wt(),Dn("div",RU,t[0]||(t[0]=[je("h3",null,"Three EARTH",-1),je("div",{class:"w-full",id:"three-container-earth"},null,-1)])))}});var $a=function(){var i=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(u){u.preventDefault(),n(++i%e.children.length)},!1);function t(u){return e.appendChild(u.dom),u}function n(u){for(var f=0;f<e.children.length;f++)e.children[f].style.display=f===u?"block":"none";i=u}var r=(performance||Date).now(),s=r,o=0,a=t(new $a.Panel("FPS","#0ff","#002")),l=t(new $a.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new $a.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:e,addPanel:t,showPanel:n,begin:function(){r=(performance||Date).now()},end:function(){o++;var u=(performance||Date).now();if(l.update(u-r,200),u>=s+1e3&&(a.update(o*1e3/(u-s),100),s=u,o=0,c)){var f=performance.memory;c.update(f.usedJSHeapSize/1048576,f.jsHeapSizeLimit/1048576)}return u},update:function(){r=this.end()},domElement:e,setMode:n}};$a.Panel=function(i,e,t){var n=1/0,r=0,s=Math.round,o=s(window.devicePixelRatio||1),a=80*o,l=48*o,c=3*o,u=2*o,f=3*o,h=15*o,d=74*o,g=30*o,_=document.createElement("canvas");_.width=a,_.height=l,_.style.cssText="width:80px;height:48px";var m=_.getContext("2d");return m.font="bold "+9*o+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=t,m.fillRect(0,0,a,l),m.fillStyle=e,m.fillText(i,c,u),m.fillRect(f,h,d,g),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(f,h,d,g),{dom:_,update:function(p,x){n=Math.min(n,p),r=Math.max(r,p),m.fillStyle=t,m.globalAlpha=1,m.fillRect(0,0,a,h),m.fillStyle=e,m.fillText(s(p)+" "+i+" ("+s(n)+"-"+s(r)+")",c,u),m.drawImage(_,f+o,h,d-o,g,f,h,d-o,g),m.fillRect(f+d-o,h,o,g),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(f+d-o,h,o,s((1-p/x)*g))}}};function CU(i,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=i.getIndex(),r=i.getAttribute("position"),s=n?n.count:r.count;let o=0;const a=Object.keys(i.attributes),l={},c={},u=[],f=["getX","getY","getZ","getW"],h=["setX","setY","setZ","setW"];for(let x=0,y=a.length;x<y;x++){const v=a[x],b=i.attributes[v];l[v]=new b.constructor(new b.array.constructor(b.count*b.itemSize),b.itemSize,b.normalized);const A=i.morphAttributes[v];A&&(c[v]||(c[v]=[]),A.forEach((T,C)=>{const S=new T.array.constructor(T.count*T.itemSize);c[v][C]=new T.constructor(S,T.itemSize,T.normalized)}))}const d=e*.5,g=Math.log10(1/e),_=Math.pow(10,g),m=d*_;for(let x=0;x<s;x++){const y=n?n.getX(x):x;let v="";for(let b=0,A=a.length;b<A;b++){const T=a[b],C=i.getAttribute(T),S=C.itemSize;for(let M=0;M<S;M++)v+=`${~~(C[f[M]](y)*_+m)},`}if(v in t)u.push(t[v]);else{for(let b=0,A=a.length;b<A;b++){const T=a[b],C=i.getAttribute(T),S=i.morphAttributes[T],M=C.itemSize,N=l[T],B=c[T];for(let H=0;H<M;H++){const q=f[H],Q=h[H];if(N[Q](o,C[q](y)),S)for(let W=0,j=S.length;W<j;W++)B[W][Q](o,S[W][q](y))}}t[v]=o,u.push(o),o++}}const p=i.clone();for(const x in i.attributes){const y=l[x];if(p.setAttribute(x,new y.constructor(y.array.slice(0,o*y.itemSize),y.itemSize,y.normalized)),x in c)for(let v=0;v<c[x].length;v++){const b=c[x][v];p.morphAttributes[x][v]=new b.constructor(b.array.slice(0,o*b.itemSize),b.itemSize,b.normalized)}}return p.setIndex(u),p}function Px(i,e){if(e===HC)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Rm||e===Ab){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===Rm)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}let Ec,Om,xl,Fm,La;const wf=20;let Bm,Ju,ih,_o;const PU=`

			attribute float size;
			attribute vec3 customColor;

			varying vec3 vColor;

			void main() {

				vColor = customColor;

				vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );

				gl_PointSize = size * ( 300.0 / -mvPosition.z );

				gl_Position = projectionMatrix * mvPosition;

			}`,DU=`

			uniform vec3 color;
			uniform sampler2D pointTexture;
			uniform float alphaTest;

			varying vec3 vColor;

			void main() {

				gl_FragColor = vec4( color * vColor, 1.0 );

				gl_FragColor = gl_FragColor * texture2D( pointTexture, gl_PointCoord );

				if ( gl_FragColor.a < alphaTest ) discard;

			}`;function LU(){const i=document.getElementById("three-container-points");if(!i)return;const e=su(i);Om=e.scene,xl=e.camera,Ec=e.renderer;const t=e.container;xl.position.z=250,Ec.setAnimationLoop(UU),t.appendChild(Ec.domElement);const n=new ro(200,200,200,16,16,16);n.deleteAttribute("normal"),n.deleteAttribute("uv");const s=CU(n).getAttribute("position"),o=[],a=[],l=new Ge;for(let f=0,h=s.count;f<h;f++)l.setHSL(.01+.1*(f/h),1,.5),l.toArray(o,f*3),a[f]=wf*.5;const c=new wn;c.setAttribute("position",s),c.setAttribute("customColor",new It(o,3)),c.setAttribute("size",new It(a,1));const u=new Xn({uniforms:{color:{value:new Ge(16777215)},pointTexture:{value:new ru().load("img/icons/favicon-16x16.png")},alphaTest:{value:.9}},vertexShader:PU,fragmentShader:DU});La=new s_(c,u),Om.add(La),Bm=new CD,ih=new Fe,Fm=new $a,t.appendChild(Fm.dom),window.addEventListener("resize",NU),document.addEventListener("pointermove",IU)}function IU(i){ih.x=i.clientX/window.innerWidth*2-1,ih.y=-(i.clientY/window.innerHeight)*2+1}function NU(){xl.aspect=window.innerWidth/window.innerHeight,xl.updateProjectionMatrix(),Ec.setSize(window.innerWidth,window.innerHeight)}function UU(){OU(),Fm.update()}function OU(){La.rotation.x+=5e-4,La.rotation.y+=.001;const e=La.geometry.attributes;Bm.setFromCamera(ih,xl),Ju=Bm.intersectObject(La),Ju.length>0?_o!=Ju[0].index&&(e.size.array[_o]=wf,_o=Ju[0].index,e.size.array[_o]=wf*1.25,e.size.needsUpdate=!0):_o!==null&&(e.size.array[_o]=wf,e.size.needsUpdate=!0,_o=null),Ec.render(Om,xl)}const FU={class:"greetings"},rT=jn({__name:"Points",setup(i){return ki(()=>{LU()}),(e,t)=>(Wt(),Dn("div",FU,t[0]||(t[0]=[je("h3",null,"Three Points",-1),je("div",{class:"w-full",id:"three-container-points"},null,-1)])))}});Te.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Fe(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};mi.line={uniforms:qo.merge([Te.common,Te.fog,Te.line]),vertexShader:`
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
		`};class sT extends Xn{constructor(e){super({type:"LineMaterial",uniforms:qo.clone(mi.line.uniforms),vertexShader:mi.line.vertexShader,fragmentShader:mi.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Dx=new gr,Qu=new z;class oT extends _D{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new It(e,3)),this.setAttribute("uv",new It(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Im(t,6,1);return this.setAttribute("instanceStart",new os(n,3,0)),this.setAttribute("instanceEnd",new os(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Im(t,6,1);return this.setAttribute("instanceColorStart",new os(n,3,0)),this.setAttribute("instanceColorEnd",new os(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new c_(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gr);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Dx.setFromBufferAttribute(t),this.boundingBox.union(Dx))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _r),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Qu.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Qu)),Qu.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Qu));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}const Lx=new z,Ix=new z,Wd=new vt;class BU extends ln{constructor(e=new oT,t=new sT({color:Math.random()*16777215})){super(e,t),this.isWireframe=!0,this.type="Wireframe"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)Lx.fromBufferAttribute(t,o),Ix.fromBufferAttribute(n,o),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Lx.distanceTo(Ix);const s=new Im(r,2,1);return e.setAttribute("instanceDistanceStart",new os(s,1,0)),e.setAttribute("instanceDistanceEnd",new os(s,1,1)),this}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Wd),this.material.uniforms.resolution.value.set(Wd.z,Wd.w))}}class kU extends oT{constructor(e){super(),this.isWireframeGeometry2=!0,this.type="WireframeGeometry2",this.fromWireframeGeometry(new c_(e))}}let ef,ti,wc,as,zo,Xd,tf,Nx,Ux,km,rh,sh;function zU(){const i=document.getElementById("three-container-wireframe");if(!i)return;const e=su(i);wc=e.scene,as=e.camera,ti=e.renderer;const t=e.container;ti.setAnimationLoop(HU),t.appendChild(ti.domElement),as.position.set(-50,0,50),zo=new Rn(40,1,1,1e3),zo.position.copy(as.position),Xd=new Ph(as,ti.domElement),Xd.minDistance=10,Xd.maxDistance=500;const n=new a_(20,1),r=new kU(n);Nx=new sT({color:4227327,linewidth:5,dashed:!1}),ef=new BU(r,Nx),ef.computeLineDistances(),ef.scale.set(1,1,1),wc.add(ef);const s=new c_(n);Ux=new nu({color:4227327}),new QP({scale:2,dashSize:1,gapSize:1}),tf=new i_(s,Ux),tf.computeLineDistances(),tf.visible=!1,wc.add(tf),window.addEventListener("resize",()=>Ox(t)),Ox(t),km=new $a,t.appendChild(km.dom)}function Ox(i){const e=i.offsetWidth,t=i.offsetWidth,n=e/t;as.aspect=n,as.updateProjectionMatrix(),ti.setSize(e,t),rh=e/4,sh=t/4,zo.aspect=rh/sh,zo.updateProjectionMatrix()}function HU(){ti.setClearColor(0,0),ti.setViewport(0,0,window.innerWidth,window.innerHeight),ti.render(wc,as),ti.setClearColor(2236962,1),ti.clearDepth(),ti.setScissorTest(!0),ti.setScissor(20,20,rh,sh),ti.setViewport(20,20,rh,sh),zo.position.copy(as.position),zo.quaternion.copy(as.quaternion),ti.render(wc,zo),ti.setScissorTest(!1),km.update()}const VU={class:"greetings"},aT=jn({__name:"WireFrame",setup(i){return ki(()=>{zU()}),(e,t)=>(Wt(),Dn("div",VU,t[0]||(t[0]=[je("h3",null,"Three WireFrame",-1),je("div",{class:"w-full",id:"three-container-wireframe"},null,-1)])))}});class GU extends bl{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new qU(t)}),this.register(function(t){return new $U(t)}),this.register(function(t){return new rO(t)}),this.register(function(t){return new sO(t)}),this.register(function(t){return new oO(t)}),this.register(function(t){return new ZU(t)}),this.register(function(t){return new JU(t)}),this.register(function(t){return new QU(t)}),this.register(function(t){return new eO(t)}),this.register(function(t){return new YU(t)}),this.register(function(t){return new tO(t)}),this.register(function(t){return new KU(t)}),this.register(function(t){return new iO(t)}),this.register(function(t){return new nO(t)}),this.register(function(t){return new XU(t)}),this.register(function(t){return new aO(t)}),this.register(function(t){return new lO(t)})}load(e,t,n,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Tc.extractUrlBase(e);o=Tc.resolveURL(c,this.path)}else o=Tc.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new jb(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===lT){try{o[ut.KHR_BINARY_GLTF]=new cO(e)}catch(f){r&&r(f);return}s=JSON.parse(o[ut.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new MO(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const f=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(f){case ut.KHR_MATERIALS_UNLIT:o[f]=new jU;break;case ut.KHR_DRACO_MESH_COMPRESSION:o[f]=new uO(s,this.dracoLoader);break;case ut.KHR_TEXTURE_TRANSFORM:o[f]=new fO;break;case ut.KHR_MESH_QUANTIZATION:o[f]=new hO;break;default:h.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function WU(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const ut={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class XU{constructor(e){this.parser=e,this.name=ut.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ge(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],fi);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new gD(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Lm(u),c.distance=f;break;case"spot":c=new Yb(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Kr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class jU{constructor(){this.name=ut.KHR_MATERIALS_UNLIT}getMaterialType(){return Rr}extendParams(e,t,n){const r=[];e.color=new Ge(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],fi),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,yn))}return Promise.all(r)}}class YU{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class qU{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fr}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Fe(a,a)}return Promise.all(s)}}class $U{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fr}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class KU{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fr}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class ZU{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fr}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ge(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],fi)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,yn)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class JU{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fr}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class QU{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fr}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ge().setRGB(a[0],a[1],a[2],fi),Promise.all(s)}}class eO{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fr}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class tO{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fr}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ge().setRGB(a[0],a[1],a[2],fi),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,yn)),Promise.all(s)}}class nO{constructor(e){this.parser=e,this.name=ut.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fr}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class iO{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fr}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class rO{constructor(e){this.parser=e,this.name=ut.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class sO{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class oO{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class aO{constructor(e){this.name=ut.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,f=r.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,h,r.mode,r.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(d),u,f,h,r.mode,r.filter),d})})}else return null}}class lO{constructor(e){this.name=ut.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const c of r.primitives)if(c.mode!==Xi.TRIANGLES&&c.mode!==Xi.TRIANGLE_STRIP&&c.mode!==Xi.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,d=[];for(const g of f){const _=new et,m=new z,p=new Or,x=new z(1,1,1),y=new XP(g.geometry,g.material,h);for(let v=0;v<h;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&x.fromBufferAttribute(l.SCALE,v),y.setMatrixAt(v,_.compose(m,p,x));for(const v in l)if(v==="_COLOR_0"){const b=l[v];y.instanceColor=new Pm(b.array,b.itemSize,b.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);Xt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),d.push(y)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const lT="glTF",Vl=12,Fx={JSON:1313821514,BIN:5130562};class cO{constructor(e){this.name=ut.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Vl),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==lT)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Vl,s=new DataView(e,Vl);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Fx.JSON){const c=new Uint8Array(e,Vl+o,a);this.content=n.decode(c)}else if(l===Fx.BIN){const c=Vl+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class uO{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ut.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=zm[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=zm[u]||u.toLowerCase();if(o[u]!==void 0){const h=n.accessors[e.attributes[u]],d=Ka[h.componentType];c[f]=d.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f,h){r.decodeDracoFile(u,function(d){for(const g in d.attributes){const _=d.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}f(d)},a,c,fi,h)})})}}class fO{constructor(){this.name=ut.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class hO{constructor(){this.name=ut.KHR_MESH_QUANTIZATION}}class cT extends iu{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,f=(n-t)/u,h=f*f,d=h*f,g=e*c,_=g-c,m=-2*d+3*h,p=d-h,x=1-m,y=p-h+f;for(let v=0;v!==a;v++){const b=o[_+v+a],A=o[_+v+l]*u,T=o[g+v+a],C=o[g+v]*u;s[v]=x*b+y*A+m*T+p*C}return s}}const dO=new Or;class pO extends cT{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return dO.fromArray(s).normalize().toArray(s),s}}const Xi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ka={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Bx={9728:ci,9729:Ui,9984:_b,9985:xf,9986:Ql,9987:rs},kx={33071:zs,33648:Zf,10497:Js},jd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},zm={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Es={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},mO={CUBICSPLINE:void 0,LINEAR:Yc,STEP:jc},Yd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function gO(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new u_({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ps})),i.DefaultMaterial}function vo(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Kr(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function _O(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(n){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):i.attributes.position;o.push(h)}if(r){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):i.attributes.normal;a.push(h)}if(s){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):i.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=f),s&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function vO(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function xO(i){let e;const t=i.extensions&&i.extensions[ut.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+qd(t.attributes):e=i.indices+":"+qd(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+qd(i.targets[n]);return e}function qd(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Hm(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function yO(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const SO=new et;class MO{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new WU,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);r=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&o<98?this.textureLoader=new ru(this.options.manager):this.textureLoader=new vD(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new jb(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};return vo(s,a,r),Kr(a,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ut.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){n.load(Tc.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=jd[r.type],a=Ka[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new ui(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=jd[r.type],c=Ka[r.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=r.byteOffset||0,d=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let _,m;if(d&&d!==f){const p=Math.floor(h/d),x="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let y=t.cache.get(x);y||(_=new c(a,p*d,r.count*d/u),y=new zb(_,d/u),t.cache.add(x,y)),m=new os(y,l,h%d/u,g)}else a===null?_=new c(r.count*l):_=new c(a,h,r.count*l),m=new ui(_,l,g);if(r.sparse!==void 0){const p=jd.SCALAR,x=Ka[r.sparse.indices.componentType],y=r.sparse.indices.byteOffset||0,v=r.sparse.values.byteOffset||0,b=new x(o[1],y,r.sparse.count*p),A=new c(o[2],v,r.sparse.count*l);a!==null&&(m=new ui(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,C=b.length;T<C;T++){const S=b[T];if(m.setX(S,A[T*l]),l>=2&&m.setY(S,A[T*l+1]),l>=3&&m.setZ(S,A[T*l+2]),l>=4&&m.setW(S,A[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(s.samplers||{})[o.sampler]||{};return u.magFilter=Bx[h.magFilter]||Ui,u.minFilter=Bx[h.minFilter]||rs,u.wrapS=kx[h.wrapS]||Js,u.wrapT=kx[h.wrapT]||Js,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==ci&&u.minFilter!==Ui,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const h=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(h,d){let g=h;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Tn(_);m.needsUpdate=!0,h(m)}),t.load(Tc.resolveURL(f,s.path),g,void 0,d)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),Kr(f,o),f.userData.mimeType=o.mimeType||yO(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[ut.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ut.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[ut.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new r_,dr.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new nu,dr.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(r||s||o){let a="ClonedMaterial:"+n.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return u_}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[ut.KHR_MATERIALS_UNLIT]){const f=r[ut.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,s,t))}else{const f=s.pbrMetallicRoughness||{};if(a.color=new Ge(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],fi),a.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,yn)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Er);const u=s.alphaMode||Yd.OPAQUE;if(u===Yd.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Yd.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Rr&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Fe(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;a.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&o!==Rr&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Rr){const f=s.emissiveFactor;a.emissive=new Ge().setRGB(f[0],f[1],f[2],fi)}return s.emissiveTexture!==void 0&&o!==Rr&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,yn)),Promise.all(c).then(function(){const f=new o(a);return s.name&&(f.name=s.name),Kr(f,s),t.associations.set(f,{materials:e}),s.extensions&&vo(r,f,s),f})}createUniqueName(e){const t=Rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(a){return n[ut.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return zx(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=xO(c),f=r[u];if(f)o.push(f.promise);else{let h;c.extensions&&c.extensions[ut.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=zx(new wn,c,t),r[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?gO(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],m=o[d];let p;const x=c[d];if(m.mode===Xi.TRIANGLES||m.mode===Xi.TRIANGLE_STRIP||m.mode===Xi.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new VP(_,x):new ln(_,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Xi.TRIANGLE_STRIP?p.geometry=Px(p.geometry,Ab):m.mode===Xi.TRIANGLE_FAN&&(p.geometry=Px(p.geometry,Rm));else if(m.mode===Xi.LINES)p=new i_(_,x);else if(m.mode===Xi.LINE_STRIP)p=new n_(_,x);else if(m.mode===Xi.LINE_LOOP)p=new qP(_,x);else if(m.mode===Xi.POINTS)p=new s_(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&vO(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Kr(p,s),m.extensions&&vo(r,p,m),t.assignFinalMaterial(p),f.push(p)}for(let d=0,g=f.length;d<g;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return s.extensions&&vo(r,f[0],s),f[0];const h=new Ro;s.extensions&&vo(r,h,s),t.associations.set(h,{meshes:e});for(let d=0,g=f.length;d<g;d++)h.add(f[d]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Rn(Cb.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Rh(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Kr(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const f=o[c];if(f){a.push(f);const h=new et;s!==null&&h.fromArray(s.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new e_(a,l)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let f=0,h=r.channels.length;f<h;f++){const d=r.channels[f],g=r.samplers[d.sampler],_=d.target,m=_.node,p=r.parameters!==void 0?r.parameters[g.input]:g.input,x=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",x)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const h=f[0],d=f[1],g=f[2],_=f[3],m=f[4],p=[];for(let x=0,y=h.length;x<y;x++){const v=h[x],b=d[x],A=g[x],T=_[x],C=m[x];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const S=n._createAnimationTracks(v,b,A,T,C);if(S)for(let M=0;M<S.length;M++)p.push(S[M])}return new oD(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],f=c[1],h=c[2];h!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(h,SO)});for(let d=0,g=f.length;d<g;d++)u.add(f[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Hb:c.length>1?u=new Ro:c.length===1?u=c[0]:u=new Xt,u!==c[0])for(let f=0,h=c.length;f<h;f++)u.add(c[f]);if(s.name&&(u.userData.name=s.name,u.name=o),Kr(u,s),s.extensions&&vo(n,u,s),s.matrix!==void 0){const f=new et;f.fromArray(s.matrix),u.applyMatrix4(f)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new Ro;n.name&&(s.name=r.createUniqueName(n.name)),Kr(s,n),n.extensions&&vo(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++)s.add(l[u]);const c=u=>{const f=new Map;for(const[h,d]of r.associations)(h instanceof dr||h instanceof Tn)&&f.set(h,d);return u.traverse(h=>{const d=r.associations.get(h);d!=null&&f.set(h,d)}),f};return r.associations=c(s),s})}_createAnimationTracks(e,t,n,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];Es[s.path]===Es.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(Es[s.path]){case Es.weights:c=gl;break;case Es.rotation:c=_l;break;case Es.position:case Es.scale:c=vl;break;default:switch(n.itemSize){case 1:c=gl;break;case 2:case 3:default:c=vl;break}break}const u=r.interpolation!==void 0?mO[r.interpolation]:Yc,f=this._getArrayFromAccessor(n);for(let h=0,d=l.length;h<d;h++){const g=new c(l[h]+"."+Es[s.path],t.array,f,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Hm(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof _l?pO:cT;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function bO(i,e,t){const n=e.attributes,r=new gr;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new z(l[0],l[1],l[2]),new z(c[0],c[1],c[2])),a.normalized){const u=Hm(Ka[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new z,l=new z;for(let c=0,u=s.length;c<u;c++){const f=s[c];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],d=h.min,g=h.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),h.normalized){const _=Hm(Ka[h.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}i.boundingBox=r;const o=new _r;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function zx(i,e,t){const n=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=zm[o]||o.toLowerCase();a in i.attributes||r.push(s(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});r.push(o)}return ht.workingColorSpace!==fi&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ht.workingColorSpace}" not supported.`),Kr(i,e),bO(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?_O(i,e.targets,t):i})}class TO{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=$d(),this._delta=0,this._elapsed=0,this._timescale=1,this._usePageVisibilityAPI=typeof document<"u"&&document.hidden!==void 0,this._usePageVisibilityAPI===!0&&(this._pageVisibilityHandler=EO.bind(this),document.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=$d()-this._startTime,this}dispose(){return this._usePageVisibilityAPI===!0&&document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this}update(e){return this._usePageVisibilityAPI===!0&&document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:$d())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function $d(){return performance.now()}function EO(){document.hidden===!1&&this.reset()}let $c,Ea,Zr,__,yr;const wO=.5;function AO(){const i=document.getElementById("three-container-morphingsphere");if(!i)return;const e=su(i);Ea=e.scene,$c=e.camera,Zr=e.renderer;const t=e.container;__=new TO;const n=new Lm(16720384,5e4);n.position.set(100,100,100),Ea.add(n);const r=new Lm(2293504,1e4);r.position.set(-100,-100,-100),Ea.add(r),Ea.add(new qb(1118481)),new GU().load("/PrimaryIonDrive.gltf",function(a){yr=a.scene.getObjectByName("OSG_Scene"),yr&&(yr.rotation.z=Math.PI/2,Ea.add(yr));const l=new r_({size:10,sizeAttenuation:!1,map:new ru().load("textures/sprites/disc.png"),alphaTest:.5}),c=new s_(yr.geometry,l);c.morphTargetInfluences=yr.morphTargetInfluences,c.morphTargetDictionary=yr.morphTargetDictionary,yr.add(c)}),Zr=new m_,Zr.setPixelRatio(window.devicePixelRatio),Zr.setSize(window.innerWidth,window.innerHeight),Zr.setAnimationLoop(CO),t.appendChild(Zr.domElement);const o=new Ph($c,Zr.domElement);o.minDistance=1,o.maxDistance=20,window.addEventListener("resize",RO)}function RO(){$c.aspect=window.innerWidth/window.innerHeight,$c.updateProjectionMatrix(),Zr.setSize(window.innerWidth,window.innerHeight)}function CO(){__.update(),PO()}function PO(){const i=__.getDelta();if(yr!==void 0){const e=i*wO;yr.rotation.y+=e}Zr.render(Ea,$c)}const DO={class:"greetings"},uT=jn({__name:"MorphingSphere",setup(i){return ki(()=>{AO()}),(e,t)=>(Wt(),Dn("div",DO,t[0]||(t[0]=[je("h3",null,"Three Morph",-1),je("div",{class:"w-full",id:"three-container-morphingsphere"},null,-1)])))}}),v_=kw("login",()=>{const i=Hn("DataPrep"),e=Hn("home"),t=Hn(!1),n=Hn("100%"),r=60*60*1e3,s=Date.now();function o(){t.value=!0}async function a(){console.debug("init store");let c;try{c=localStorage.getItem("piniaState")}catch(u){console.error(u)}if(c){const u=JSON.parse(c);t.value=u.login.loggedin,i.value=u.login.currentView,e.value=u.login.currentTab}}return a(),setTimeout(()=>{t.value=!1,alert("Session timed out!")},r),{currentView:i,currentTab:e,loggedin:t,sessionTimeoutProgress:n,login:o,calculateSessionTimeout:()=>{n.value.includes("-")||(n.value=`${((s+r-Date.now())/r*100%100).toFixed(2)}%`)}}});function LO(i){return $m()?(iy(i),!0):!1}const Kd=new WeakMap,IO=(...i)=>{var e;const t=i[0],n=(e=fg())==null?void 0:e.proxy;if(n==null&&!ag())throw new Error("injectLocal must be called in setup");return n&&Kd.has(n)&&t in Kd.get(n)?Kd.get(n)[t]:fr(...i)},NO=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const UO=Object.prototype.toString,OO=i=>UO.call(i)==="[object Object]";function Hx(i){return i.endsWith("rem")?Number.parseFloat(i)*16:Number.parseFloat(i)}function FO(i){return fg()}function Zd(i){return Array.isArray(i)?i:[i]}function BO(i,e=!0,t){FO()?ki(i,t):e?i():dh(i)}function kO(i,e,t){return Ws(i,e,{...t,immediate:!0})}const x_=NO?window:void 0;function zO(i){var e;const t=Ua(i);return(e=t==null?void 0:t.$el)!=null?e:t}function Vm(...i){const e=[],t=()=>{e.forEach(a=>a()),e.length=0},n=(a,l,c,u)=>(a.addEventListener(l,c,u),()=>a.removeEventListener(l,c,u)),r=oi(()=>{const a=Zd(Ua(i[0])).filter(l=>l!=null);return a.every(l=>typeof l!="string")?a:void 0}),s=kO(()=>{var a,l;return[(l=(a=r.value)==null?void 0:a.map(c=>zO(c)))!=null?l:[x_].filter(c=>c!=null),Zd(Ua(r.value?i[1]:i[0])),Zd(bn(r.value?i[2]:i[1])),Ua(r.value?i[3]:i[2])]},([a,l,c,u])=>{if(t(),!(a!=null&&a.length)||!(l!=null&&l.length)||!(c!=null&&c.length))return;const f=OO(u)?{...u}:u;e.push(...a.flatMap(h=>l.flatMap(d=>c.map(g=>n(h,d,g,f)))))},{flush:"post"}),o=()=>{s(),t()};return LO(t),o}function HO(){const i=Hn(!1),e=fg();return e&&ki(()=>{i.value=!0},e),i}function VO(i){const e=HO();return oi(()=>(e.value,!!i()))}const GO=Symbol("vueuse-ssr-width");function WO(){const i=ag()?IO(GO,null):null;return typeof i=="number"?i:void 0}function XO(i,e={}){const{window:t=x_,ssrWidth:n=WO()}=e,r=VO(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function"),s=Hn(typeof n=="number"),o=yy(),a=Hn(!1),l=c=>{a.value=c.matches};return BE(()=>{if(s.value){s.value=!r.value;const c=Ua(i).split(",");a.value=c.some(u=>{const f=u.includes("not all"),h=u.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),d=u.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);let g=!!(h||d);return h&&g&&(g=n>=Hx(h[1])),d&&g&&(g=n<=Hx(d[1])),f?!g:g});return}r.value&&(o.value=t.matchMedia(Ua(i)),a.value=o.value.matches)}),Vm(o,"change",l,{passive:!0}),oi(()=>a.value)}function jO(i={}){const{window:e=x_,initialWidth:t=Number.POSITIVE_INFINITY,initialHeight:n=Number.POSITIVE_INFINITY,listenOrientation:r=!0,includeScrollbar:s=!0,type:o="inner"}=i,a=Hn(t),l=Hn(n),c=()=>{if(e)if(o==="outer")a.value=e.outerWidth,l.value=e.outerHeight;else if(o==="visual"&&e.visualViewport){const{width:f,height:h,scale:d}=e.visualViewport;a.value=Math.round(f*d),l.value=Math.round(h*d)}else s?(a.value=e.innerWidth,l.value=e.innerHeight):(a.value=e.document.documentElement.clientWidth,l.value=e.document.documentElement.clientHeight)};c(),BO(c);const u={passive:!0};if(Vm("resize",c,u),e&&o==="visual"&&e.visualViewport&&Vm(e.visualViewport,"resize",c,u),r){const f=XO("(orientation: portrait)");Ws(f,()=>c())}return{width:a,height:l}}const y_=jn({__name:"MagneticEffect",props:{divId:{type:String,required:!0},textId:{type:String,required:!0},magnetoStrengthVal:{type:Number,default:70},magnetoTextStrengthVal:{type:Number,default:50}},setup(i){const e=i,{width:t}=jO();let n,r;const s=a=>{cC(a,n,r,e.magnetoStrengthVal,e.magnetoTextStrengthVal)},o=()=>{uC(n,r)};return ki(()=>{n=Hn(document.getElementById(e.divId)),r=Hn(document.getElementById(e.textId)),t.value>700&&(n.value.addEventListener("mousemove",s),n.value.addEventListener("mouseleave",o))}),og(()=>{n.value.removeEventListener("mousemove",s),r.value.removeEventListener("mouseleave",o)}),(a,l)=>_E(a.$slots,"default")}}),YO=(i,e=!1,t=!1)=>{const r=i.split(" ").map(o=>o.split(""));let s="";return r.forEach(o=>{s+='<span class="!text-nowrap  overflow-clip ',t?s+=" leading-none block  ":s+=" inline-block ",s+='">',o.forEach(a=>{let l="letters translate-y-[120%] inline-block will-change-auto will-change-transform ";e&&(l+=" font-fancy "),s+=`<span class="${l}">${a}</span>`}),s+="</span> "}),s},qO=i=>{},$O={id:"services",class:"padding-x mb-20"},KO={class:"flex w-full flex-col"},ZO=["innerHTML"],JO={class:"relative mt-12 w-full lg:mt-[10%]"},QO={class:"mt-12 flex flex-col justify-between gap-y-16"},fT=jn({__name:"About",setup(i){const e=Hn("My services /"),t=[{title:"Software/Automation Engineer",body:"Development and support of process automation solutions (data prep, inspection, metrology, lithography, etch) for photomask manufacturing processes in semiconductor production Integration/testing of developed applications on laser or electron beam writers. System architecture/requirements engineering/design reviews for existing process optimization. Fullstack development with CI/CD using Gitlab CI and Docker Swarm. Integration with ETL/data warehouse",headings:["Typescript, Python and Java","Docker, Gitlab CI and Protrainer","Oracle PL/SQL, MySLQ, MongoDB and GraphQL"],shape:`<svg viewBox="0 0 200 200"  xmlns="http://www.w3.org/2000/svg">
  <path d="M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z"/>
  </svg>
  `},{title:"University",body:"I have a Masters and Bachelors in Electrical Engineering and Information Technology. I have worked on projects in the field of Machine Learning, Computer Vision, and Signal Processing. I have also worked on projects in the field of Embedded Systems and Robotics. I have experience in programming microcontrollers, desiging analog and digital circuits and RF circuits .",headings:["Signal processing","Analog and Digital circuits","RF circuits"],shape:`<svg viewBox="0 0 200 200"  xmlns="http://www.w3.org/2000/svg">
  <path d="M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z"/>
  </svg>
  `},{title:"Fullstack Web Development",body:"I develop modern websites with animations and motion. I have built scalable web applications Django, Node.js, Vue and MongoDB. I have built multiple GraphQL and REST APIs.",headings:["Vue, Node, Typescript","Three, CSS Animations","GraphQL, REST"],shape:`<svg viewBox="0 0 200 200"  xmlns="http://www.w3.org/2000/svg">
  <path d="M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z"/>
  </svg>
  `}];Dy(()=>{e.value=YO("ABOUT",!0)}),ki(()=>{rC("#what-i-do .letters","#services-text",.7,.01,0)});const n=r=>{if(r===0)return"top-[calc(20vh_+_0em)] mb-[17.25em]";if(r===1)return"top-[calc(20vh_+_5.75em)] mb-[11.5em]";if(r===2)return"top-[calc(20vh_+_11.5em)] mb-[5.75em]"};return(r,s)=>(Wt(),Dn("section",$O,[je("div",KO,[je("h1",{id:"what-i-do",innerHTML:e.value,class:"heading-1 font-extrabold uppercase"},null,8,ZO),s[0]||(s[0]=je("div",{id:"services-text",class:"grid-gap mt-[5%] grid grid-cols-12 justify-end text-flax-smoke-300 opacity-0 lg:grid"},[je("p",{class:"heading-4 font-fancy col-span-8 w-full text-balance sm:font-semibold col-span-4 md:col-start-5"},' Studied how electromagnetic waves work, currently flipping Bits to flip more Bits. Currently working as a Software Engineer have a Masters and Bachelors in Electrical Engineering and Information Technology. Like working with people smarter and more driven than me. Always ready to learn something new and build something amazing. I am language agnostic. I believe in using the right tool for the job not "just my tool for the job". ')],-1))]),je("div",JO,[je("div",QO,[(Wt(),Dn(Sn,null,Lf(t,(o,a)=>Zt(bn(U3),{key:a,number:a+1,title:o.title,body:o.body,headings:o.headings,shape:o.shape,class:fs(["sticky border-t border--500/50 opacity-90 gradientBackground",n(a)])},null,8,["number","title","body","headings","shape","class"])),64))])])]))}}),Vx="/img/511927459_b45f463401_o.jpg",e3={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class El{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const t3=new Rh(-1,1,1,-1,0,1);class n3 extends wn{constructor(){super(),this.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new It([0,2,0,0,2,0],2))}}const i3=new n3;class S_{constructor(e){this._mesh=new ln(i3,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,t3)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Gm extends El{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Xn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=qo.clone(e.uniforms),this.material=new Xn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new S_(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Gx extends El{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class r3 extends El{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class s3{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Fe);this._width=n.width,this._height=n.height,t=new Ur(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Qs}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Gm(e3),this.copyPass.material.blending=cs,this.clock=new $b}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Gx!==void 0&&(o instanceof Gx?n=!0:o instanceof r3&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class o3 extends El{constructor(e,t,n=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ge}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const Wx={name:"ConvolutionShader",defines:{KERNEL_SIZE_FLOAT:"25.0",KERNEL_SIZE_INT:"25"},uniforms:{tDiffuse:{value:null},uImageIncrement:{value:new Fe(.001953125,0)},cKernel:{value:[]}},vertexShader:`

		uniform vec2 uImageIncrement;

		varying vec2 vUv;

		void main() {

			vUv = uv - ( ( KERNEL_SIZE_FLOAT - 1.0 ) / 2.0 ) * uImageIncrement;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float cKernel[ KERNEL_SIZE_INT ];

		uniform sampler2D tDiffuse;
		uniform vec2 uImageIncrement;

		varying vec2 vUv;

		void main() {

			vec2 imageCoord = vUv;
			vec4 sum = vec4( 0.0, 0.0, 0.0, 0.0 );

			for( int i = 0; i < KERNEL_SIZE_INT; i ++ ) {

				sum += texture2D( tDiffuse, imageCoord ) * cKernel[ i ];
				imageCoord += uImageIncrement;

			}

			gl_FragColor = sum;

		}`,buildKernel:function(i){let t=2*Math.ceil(i*3)+1;t>25&&(t=25);const n=(t-1)*.5,r=new Array(t);let s=0;for(let o=0;o<t;++o)r[o]=a3(o-n,i),s+=r[o];for(let o=0;o<t;++o)r[o]/=s;return r}};function a3(i,e){return Math.exp(-(i*i)/(2*e*e))}class Ho extends El{constructor(e=1,t=25,n=4){super(),this.renderTargetX=new Ur(1,1,{type:Qs}),this.renderTargetX.texture.name="BloomPass.x",this.renderTargetY=new Ur(1,1,{type:Qs}),this.renderTargetY.texture.name="BloomPass.y",this.combineUniforms=qo.clone(nf.uniforms),this.combineUniforms.strength.value=e,this.materialCombine=new Xn({name:nf.name,uniforms:this.combineUniforms,vertexShader:nf.vertexShader,fragmentShader:nf.fragmentShader,blending:Wp,transparent:!0});const r=Wx;this.convolutionUniforms=qo.clone(r.uniforms),this.convolutionUniforms.uImageIncrement.value=Ho.blurX,this.convolutionUniforms.cKernel.value=Wx.buildKernel(n),this.materialConvolution=new Xn({name:r.name,uniforms:this.convolutionUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,defines:{KERNEL_SIZE_FLOAT:t.toFixed(1),KERNEL_SIZE_INT:t.toFixed(0)}}),this.needsSwap=!1,this.fsQuad=new S_(null)}render(e,t,n,r,s){s&&e.state.buffers.stencil.setTest(!1),this.fsQuad.material=this.materialConvolution,this.convolutionUniforms.tDiffuse.value=n.texture,this.convolutionUniforms.uImageIncrement.value=Ho.blurX,e.setRenderTarget(this.renderTargetX),e.clear(),this.fsQuad.render(e),this.convolutionUniforms.tDiffuse.value=this.renderTargetX.texture,this.convolutionUniforms.uImageIncrement.value=Ho.blurY,e.setRenderTarget(this.renderTargetY),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCombine,this.combineUniforms.tDiffuse.value=this.renderTargetY.texture,s&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(n),this.clear&&e.clear(),this.fsQuad.render(e)}setSize(e,t){this.renderTargetX.setSize(e,t),this.renderTargetY.setSize(e,t)}dispose(){this.renderTargetX.dispose(),this.renderTargetY.dispose(),this.materialCombine.dispose(),this.materialConvolution.dispose(),this.fsQuad.dispose()}}const nf={name:"CombineShader",uniforms:{tDiffuse:{value:null},strength:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float strength;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = strength * texel;

		}`};Ho.blurX=new Fe(.001953125,0);Ho.blurY=new Fe(0,.001953125);const l3={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Xx extends El{constructor(){super();const e=l3;this.uniforms=qo.clone(e.uniforms),this.material=new $P({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new S_(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ht.getTransfer(this._outputColorSpace)===wt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===cb?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ub?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===fb?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===hb?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===pb?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===mb?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===db&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const c3={name:"RGBShiftShader",uniforms:{tDiffuse:{value:null},amount:{value:.005},angle:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float amount;
		uniform float angle;

		varying vec2 vUv;

		void main() {

			vec2 offset = amount * vec2( cos(angle), sin(angle));
			vec4 cr = texture2D(tDiffuse, vUv + offset);
			vec4 cga = texture2D(tDiffuse, vUv);
			vec4 cb = texture2D(tDiffuse, vUv - offset);
			gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);

		}`},u3={name:"DotScreenShader",uniforms:{tDiffuse:{value:null},tSize:{value:new Fe(256,256)},center:{value:new Fe(.5,.5)},angle:{value:1.57},scale:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform vec2 center;
		uniform float angle;
		uniform float scale;
		uniform vec2 tSize;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		float pattern() {

			float s = sin( angle ), c = cos( angle );

			vec2 tex = vUv * tSize - center;
			vec2 point = vec2( c * tex.x - s * tex.y, s * tex.x + c * tex.y ) * scale;

			return ( sin( point.x ) * sin( point.y ) ) * 4.0;

		}

		void main() {

			vec4 color = texture2D( tDiffuse, vUv );

			float average = ( color.r + color.g + color.b ) / 3.0;

			gl_FragColor = vec4( vec3( average * 10.0 - 5.0 + pattern() ), color.a );

		}`};function hT(){const i=document.getElementById("three-container-background");if(!i)return;const{camera:e,renderer:t,scene:n,container:r}=su(i);let s,o,a,l;c();function c(){e.position.z=4,o=new $b;const h=new ru,d=h.load("textures/lava/cloud.png"),g=h.load("textures/lava/lavatile.jpg");g.colorSpace=yn,d.wrapS=d.wrapT=Js,g.wrapS=g.wrapT=Js,a={fogDensity:{value:.45},fogColor:{value:new z(0,0,0)},time:{value:1},uvScale:{value:new Fe(3,1)},texture1:{value:d},texture2:{value:g}};const _=.7,m=new Xn({uniforms:a,vertexShader:`uniform vec2 uvScale;
			varying vec2 vUv;

			void main()
			{

				vUv = uvScale * uv;
				vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
				gl_Position = projectionMatrix * mvPosition;

			}`,fragmentShader:`uniform float time;

			uniform float fogDensity;
			uniform vec3 fogColor;

			uniform sampler2D texture1;
			uniform sampler2D texture2;

			varying vec2 vUv;

			void main( void ) {

				vec2 position = - 1.0 + 2.0 * vUv;

				vec4 noise = texture2D( texture1, vUv );
				vec2 T1 = vUv + vec2( 1.5, - 1.5 ) * time * 0.02;
				vec2 T2 = vUv + vec2( - 0.5, 2.0 ) * time * 0.01;

				T1.x += noise.x * 2.0;
				T1.y += noise.y * 2.0;
				T2.x -= noise.y * 0.2;
				T2.y += noise.z * 0.2;

				float p = texture2D( texture1, T1 * 2.0 ).a;

				vec4 color = texture2D( texture2, T2 * 2.0 );
				vec4 temp = color * ( vec4( p, p, p, p ) * 2.0 ) + ( color * color - 0.1 );

				if( temp.r > 1.0 ) { temp.bg += clamp( temp.r - 2.0, 0.0, 100.0 ); }
				if( temp.g > 1.0 ) { temp.rb += temp.g - 1.0; }
				if( temp.b > 1.0 ) { temp.rg += temp.b - 1.0; }

				gl_FragColor = temp;

				float depth = gl_FragCoord.z / gl_FragCoord.w;
				const float LOG2 = 1.442695;
				float fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );
				fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );

				gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );

			}
`});l=new ln(new l_(_,.3,30,30),m),l.rotation.x=.3,n.add(l),t.setClearColor(0,0),t.setPixelRatio(window.devicePixelRatio),t.setSize(window.innerWidth,window.innerHeight),t.setAnimationLoop(f),t.autoClear=!1,r.appendChild(t.domElement);const p=new o3(n,e),x=new Ho(1.25),y=new Xx;s=new s3(t),s.addPass(p),s.addPass(x),s.addPass(y);const v=new Gm(u3);v.uniforms.scale.value=6,s.addPass(v);const b=new Gm(c3);b.uniforms.amount.value=.0015,s.addPass(b);const A=new Xx;s.addPass(A),window.addEventListener("resize",u)}function u(){e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight),s.setSize(window.innerWidth,window.innerHeight)}function f(){const h=5*o.getDelta();a.time.value+=.2*h,l.rotation.y+=.0125*h,l.rotation.x+=.05*h,t.clear(),s.render(.01)}}const f3={id:"default-carousel",class:"relative w-full","data-carousel":"slide"},dT=jn({__name:"Carousel",setup(i){return ki(()=>{hT()}),(e,t)=>(Wt(),Dn("div",f3,t[0]||(t[0]=[eS('<div class="relative h-56 overflow-hidden rounded-lg md:h-96"><div class="hidden duration-700 ease-in-out" data-carousel-item><img src="'+Vx+'" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></div><div class="hidden duration-700 ease-in-out" data-carousel-item><img src="'+Vx+'" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></div></div><div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse"><button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button><button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button><button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button><button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button><button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button></div><button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev><span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"><svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"></path></svg><span class="sr-only">Previous</span></span></button><button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next><span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"><svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path></svg><span class="sr-only">Next</span></span></button>',4)])))}}),h3={class:"flex h-full flex-col items-center justify-between"},d3={class:"relative z-[19] w-full"},p3={class:"heading-2 mt-12 font-bold text-stone-50 md:mt-24",id:"navLinks"},m3=["onClick"],g3={class:"font-fancy -translate-x-5 transition-all duration-300 ease-in-out group-hover:translate-x-5"},_3={class:"w-full"},v3={class:"mt-2 h-full font-normal text-stone-50"},x3={class:"mt-6 flex flex-wrap justify-start gap-1"},y3=jn({__name:"Nav",emits:["isLocked"],setup(i,{emit:e}){const t={About:fT,Cube:nT,Earth:iT,Points:rT,WireFrame:aT,MorphingSphere:uT,Carousel:dT},n=v_();function r(l){n.currentTab=l}const s=Hn(!1),o=()=>{var c;s.value=!s.value,(c=document.getElementById("magneto"))==null||c.classList.toggle("active");const l=document.getElementById("navbar");s.value?(dC("#navbar","#navLinks li a",".contact"),l.focus()):(pC("#navbar","#navLinks li a",".contact"),l.blur())};ki(()=>{sC("#burger","#hero")});const a=e;return Ws(s,l=>{a("isLocked",l)}),(l,c)=>(Wt(),Dn(Sn,null,[Zt(bn(w3),{onClick:o,class:"z-[9999] scale-0 drop-shadow-lg",id:"burger"}),je("div",{onClick:o,class:fs(["fixed inset-0 z-[9998] size-full select-none bg-black opacity-50",{hidden:!s.value}])},null,2),je("div",{tabindex:"0",id:"navbar",onKeydown:c[0]||(c[0]=Aw(u=>o(),["esc"])),class:"fixed right-0 top-0 z-[9998] h-full w-full translate-x-full select-none rounded-s-lg p-5 will-change-auto focus:outline-none max-md:w-[98%] sm:p-10 md:w-2/5 md:px-20 lg:w-1/5 bg-gradient-to-r from-zinc-950 from-5% via-black via-30% to-transparent to-90%"},[Zt(W1,{id:"circles",class:"absolute right-0 top-0 opacity-25"}),je("div",h3,[je("div",d3,[je("ul",p3,[(Wt(),Dn(Sn,null,Lf(t,(u,f)=>je("li",{class:fs(["overflow-y-clip",["",{active:bn(n).currentTab===f}]]),key:f},[je("a",{onClick:h=>{r(f),o()},class:"group my-2 flex h-full w-fit translate-y-full cursor-pointer items-center justify-start leading-none will-change-auto"},[c[1]||(c[1]=je("span",{class:"h-4 w-4 scale-0 rounded-full bg-stone-50 opacity-0 transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100"},null,-1)),je("p",g3,Ls(f),1)],8,m3)],2)),64))])]),Zt(y_,{divId:"name-container",textId:"name"},{default:Jc(()=>c[2]||(c[2]=[je("div",{id:"name-container",class:"group -m-10 h-fit cursor-pointer p-10"},[je("h1",{id:"name",class:"font-fancy flex items-start text-xl font-extrabold uppercase md:text-3xl"},[_h(" dspwithaheart "),je("span",{class:"font-fancy !inline !origin-center text-xl transition-transform duration-500 ease-in-out group-hover:rotate-[360deg]"},"©")])],-1)])),_:1}),je("div",_3,[je("div",v3,[je("div",x3,[(Wt(!0),Dn(Sn,null,Lf(bn(mC),u=>(Wt(),Ja(bn(T3),{class:"contact border border-stone-600 opacity-100",key:u.label,label:u.label,url:u.url},null,8,["label","url"]))),128))])])])])],32)],64))}}),S3={class:"after:ease-expo flex-center relative z-20 overflow-hidden transition-all after:absolute after:left-0 after:inline-block after:will-change-auto after:translate-y-0 after:text-stone-200 after:transition-all after:duration-700 after:content-[attr(after)] group-hover:after:-translate-y-[100%]"},M3={class:"ease-expo text-nowrap font-fancy transition-all duration-700 group-hover:-translate-y-full"},b3=jn({__name:"Button",props:{label:{type:String,required:!0},url:{type:String,required:!1}},setup(i){return(e,t)=>(Wt(),Ja(Iy(i.url?"a":"button"),{onClick:t[0]||(t[0]=()=>{i.url&&bn(qO)(i.url)}),id:"button",class:fs(["leading-base group pointer-events-auto relative h-full max-w-full transform-none overflow-clip px-5 py-2 text-[1rem] font-semibold uppercase tracking-normal text-stone-100 sm:text-sm",e.$attrs.class]),href:i.url},{default:Jc(()=>[je("span",S3,[je("span",M3,Ls(i.label),1)])]),_:1},8,["class","href"]))}}),T3=eu(b3,[["__scopeId","data-v-0c490f03"]]),E3=jn({__name:"BurgerMenuBtn",setup(i){return(e,t)=>(Wt(),Ja(y_,{divId:"magneto",textId:"magnetoText"},{default:Jc(()=>[je("div",tS(e.$attrs,{class:"fixed right-7 top-7 z-[20]"}),t[0]||(t[0]=[je("div",{id:"magneto",class:"flex items-center size-10 cursor-pointer rounded-full bg-stone-200 brightness-90 ease-in-out lg:size-[4.5rem] radialBackground"},[je("h1",{class:"w-full before:bg-cyan-950 after:bg-black",id:"magnetoText"})],-1)]),16)]),_:1}))}}),w3=eu(E3,[["__scopeId","data-v-d766df22"]]),A3={class:"heading-2 max-sm:heading-3 flex grid-cols-12 items-center justify-start gap-5 py-6 text-left font-semibold sm:py-5 md:grid md:justify-between"},R3={class:"col-span-2 self-center text-nowrap"},C3={class:"col-span-6 col-start-5 text-nowrap"},P3=["innerHTML"],D3={class:"relative flex min-h-[35vh] flex-col place-items-start md:grid md:min-h-[40vh] md:grid-cols-12"},L3={class:"heading-4 text-heading-4 col-span-7 col-start-5 flex w-full flex-col gap-y-5"},I3={class:"text-balance text-base font-medium sm:max-w-[120ch]"},N3={class:"self-center font-mono text-base font-medium text-flax-smoke-500/70"},U3=jn({__name:"ServicesCard",props:{number:{type:Number,required:!0},title:{type:String,required:!0},body:{type:String,required:!0},headings:{type:Array,required:!0},shape:{type:String,required:!0}},setup(i){return(e,t)=>(Wt(),Dn("div",{class:fs(e.$attrs.class)},[je("div",A3,[je("span",R3," ( "+Ls(`0${i.number}`)+" ) ",1),je("h3",C3,Ls(i.title),1),je("div",{innerHTML:i.shape,class:"heading-size-3 hidden animate-[spin_10s_linear_infinite] fill-flax-smoke-400/50 lg:block"},null,8,P3)]),je("div",D3,[je("div",L3,[je("p",I3,Ls(i.body),1),je("div",null,[(Wt(!0),Dn(Sn,null,Lf(i.headings,(n,r)=>(Wt(),Dn("p",{key:r,class:fs(["flex gap-x-3 py-1 font-bold",{"border-y border-flax-smoke-500/50 !py-1.5":r===1}])},[je("span",N3,Ls((r+1).toString().padStart(2,"0")),1),_h(" "+Ls(n),1)],2))),128))])])])],2))}}),O3={class:"relative container w-full h-full mx-auto p-9"},F3=jn({__name:"App",setup(i){ki(()=>{hT()});const e=v_();return(t,n)=>(Wt(),Dn(Sn,null,[n[2]||(n[2]=je("div",{class:"w-full h-full background",id:"three-container-background"},null,-1)),je("div",O3,[Zt(y_,{magnetoStrengthVal:10,magnetoTextStrengthVal:20,divId:"name-container",textId:"name"},{default:Jc(()=>[je("div",{id:"name-container",class:"group -m-10 h-fit cursor-pointer p-10",onClick:n[0]||(n[0]=r=>bn(e).currentTab="Home")},n[1]||(n[1]=[je("h1",{id:"name",class:"font-fancy flex items-start text-xl font-extrabold uppercase md:text-3xl gradientText"},[_h(" dspwithaheart "),je("span",{class:"gradientText font-fancy !inline !origin-center text-xl transition-transform duration-500 ease-in-out group-hover:rotate-[360deg]"},"©")],-1)]))]),_:1}),Zt(bn(y3),{onIsLocked:r=>!0}),Zt(bn(bS))])],64))}}),B3=eu(F3,[["__scopeId","data-v-219b6cd2"]]),k3="modulepreload",z3=function(i){return"/"+i},jx={},va=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(t.map(l=>{if(l=z3(l),l in jx)return;jx[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":k3,c||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((h,d)=>{f.addEventListener("load",h),f.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},H3={class:"relative container mx-auto"},V3=jn({__name:"HomeView",setup(i){const e={About:fT,Carousel:dT,Cube:nT,Earth:iT,Points:rT,WireFrame:aT,MorphingSphere:uT},t=v_();return(n,r)=>(Wt(),Dn("div",H3,[(Wt(),Ja(Iy(e[bn(t).currentTab])))]))}}),G3=eu(V3,[["__scopeId","data-v-e4640c15"]]),W3=z1({history:g1("/"),routes:[{path:"/",name:"home",component:G3},{path:"/about",name:"about",component:()=>va(()=>import("./AboutView-DRQJdnXA.js"),__vite__mapDeps([0,1]))},{path:"/earth",name:"earth",component:()=>va(()=>import("./Earth-bfW_rboD.js"),[])},{path:"/cube",name:"cube",component:()=>va(()=>import("./Cube-BpbiMQjK.js"),[])},{path:"/points",name:"points",component:()=>va(()=>import("./Points-Z6tzuSTo.js"),[])},{path:"/wireframe",name:"wireframe",component:()=>va(()=>import("./WireFrame-DSedOC6M.js"),[])},{path:"/morphingsphere",name:"morphingsphere",component:()=>va(()=>import("./MorphingSphere-CY_FiV2O.js"),[])}]}),M_=Pw(B3);M_.use(Iw());M_.use(W3);M_.mount("#app");export{eu as _,je as a,iT as b,Dn as c,nT as d,rT as e,aT as f,uT as g,Wt as o};
