import{s as $}from"./Init-DNB9XVsI.js";import{B as q,C as V,l as K,F as Y,m as Q,T as ee,n as te,o as ne,j as oe}from"./three.module-D_HBOI3Z.js";import{d as ie,b as re,o as se,c as ae,a as j,u as O}from"./index-DcENlOKV.js";var _=function(){var n=0,t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",function(r){r.preventDefault(),l(++n%t.children.length)},!1);function o(r){return t.appendChild(r.dom),r}function l(r){for(var i=0;i<t.children.length;i++)t.children[i].style.display=i===r?"block":"none";n=r}var v=(performance||Date).now(),f=v,e=0,m=o(new _.Panel("FPS","#0ff","#002")),w=o(new _.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=o(new _.Panel("MB","#f08","#201"));return l(0),{REVISION:16,dom:t,addPanel:o,showPanel:l,begin:function(){v=(performance||Date).now()},end:function(){e++;var r=(performance||Date).now();if(w.update(r-v,200),r>=f+1e3&&(m.update(e*1e3/(r-f),100),f=r,e=0,c)){var i=performance.memory;c.update(i.usedJSHeapSize/1048576,i.jsHeapSizeLimit/1048576)}return r},update:function(){v=this.end()},domElement:t,setMode:l}};_.Panel=function(n,t,o){var l=1/0,v=0,f=Math.round,e=f(window.devicePixelRatio||1),m=80*e,w=48*e,c=3*e,r=2*e,i=3*e,h=15*e,S=74*e,z=30*e,g=document.createElement("canvas");g.width=m,g.height=w,g.style.cssText="width:80px;height:48px";var s=g.getContext("2d");return s.font="bold "+9*e+"px Helvetica,Arial,sans-serif",s.textBaseline="top",s.fillStyle=o,s.fillRect(0,0,m,w),s.fillStyle=t,s.fillText(n,c,r),s.fillRect(i,h,S,z),s.fillStyle=o,s.globalAlpha=.9,s.fillRect(i,h,S,z),{dom:g,update:function(x,u){l=Math.min(l,x),v=Math.max(v,x),s.fillStyle=o,s.globalAlpha=1,s.fillRect(0,0,m,h),s.fillStyle=t,s.fillText(f(x)+" "+n+" ("+f(l)+"-"+f(v)+")",c,r),s.drawImage(g,i+e,h,S-e,z,i,h,S-e,z),s.fillRect(i+S-e,h,e,z),s.fillStyle=o,s.globalAlpha=.9,s.fillRect(i+S-e,h,e,f((1-x/u)*z))}}};function le(n,t=1e-4){t=Math.max(t,Number.EPSILON);const o={},l=n.getIndex(),v=n.getAttribute("position"),f=l?l.count:v.count;let e=0;const m=Object.keys(n.attributes),w={},c={},r=[],i=["getX","getY","getZ","getW"],h=["setX","setY","setZ","setW"];for(let u=0,b=m.length;u<b;u++){const d=m[u],a=n.attributes[d];w[d]=new a.constructor(new a.array.constructor(a.count*a.itemSize),a.itemSize,a.normalized);const T=n.morphAttributes[d];T&&(c[d]||(c[d]=[]),T.forEach((p,y)=>{const A=new p.array.constructor(p.count*p.itemSize);c[d][y]=new p.constructor(A,p.itemSize,p.normalized)}))}const S=t*.5,z=Math.log10(1/t),g=Math.pow(10,z),s=S*g;for(let u=0;u<f;u++){const b=l?l.getX(u):u;let d="";for(let a=0,T=m.length;a<T;a++){const p=m[a],y=n.getAttribute(p),A=y.itemSize;for(let M=0;M<A;M++)d+=`${~~(y[i[M]](b)*g+s)},`}if(d in o)r.push(o[d]);else{for(let a=0,T=m.length;a<T;a++){const p=m[a],y=n.getAttribute(p),A=n.morphAttributes[p],M=y.itemSize,Z=w[p],U=c[p];for(let H=0;H<M;H++){const X=i[H],N=h[H];if(Z[N](e,y[X](b)),A)for(let R=0,J=A.length;R<J;R++)U[R][N](e,A[R][X](b))}}o[d]=e,r.push(e),e++}}const x=n.clone();for(const u in n.attributes){const b=w[u];if(x.setAttribute(u,new b.constructor(b.array.slice(0,e*b.itemSize),b.itemSize,b.normalized)),u in c)for(let d=0;d<c[u].length;d++){const a=c[u][d];x.morphAttributes[u][d]=new a.constructor(a.array.slice(0,e*a.itemSize),a.itemSize,a.normalized)}}return x.setIndex(r),x}let I,L,E,k,C;const B=20;let W,G,F,P;const ce=`

			attribute float size;
			attribute vec3 customColor;

			varying vec3 vColor;

			void main() {

				vColor = customColor;

				vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );

				gl_PointSize = size * ( 300.0 / -mvPosition.z );

				gl_Position = projectionMatrix * mvPosition;

			}`,ue=`

			uniform vec3 color;
			uniform sampler2D pointTexture;
			uniform float alphaTest;

			varying vec3 vColor;

			void main() {

				gl_FragColor = vec4( color * vColor, 1.0 );

				gl_FragColor = gl_FragColor * texture2D( pointTexture, gl_PointCoord );

				if ( gl_FragColor.a < alphaTest ) discard;

			}`;function D(){const n=document.getElementById("three-container-points");if(!n)return;const t=$(n);L=t.scene,E=t.camera,I=t.renderer;const o=t.container;E.position.z=250,I.setAnimationLoop(fe),o.appendChild(I.domElement);const l=new q(200,200,200,16,16,16);l.deleteAttribute("normal"),l.deleteAttribute("uv");const f=le(l).getAttribute("position"),e=[],m=[],w=new V;for(let i=0,h=f.count;i<h;i++)w.setHSL(.01+.1*(i/h),1,.5),w.toArray(e,i*3),m[i]=B*.5;const c=new K;c.setAttribute("position",f),c.setAttribute("customColor",new Y(e,3)),c.setAttribute("size",new Y(m,1));const r=new Q({uniforms:{color:{value:new V(16777215)},pointTexture:{value:new ee().load("img/icons/favicon-16x16.png")},alphaTest:{value:.9}},vertexShader:ce,fragmentShader:ue});C=new te(c,r),L.add(C),W=new ne,F=new oe,k=new _,o.appendChild(k.dom),window.addEventListener("resize",me),document.addEventListener("pointermove",de)}function de(n){F.x=n.clientX/window.innerWidth*2-1,F.y=-(n.clientY/window.innerHeight)*2+1}function me(){E.aspect=window.innerWidth/window.innerHeight,E.updateProjectionMatrix(),I.setSize(window.innerWidth,window.innerHeight)}function fe(){pe(),k.update()}function pe(){C.rotation.x+=5e-4,C.rotation.y+=.001;const t=C.geometry.attributes;W.setFromCamera(F,E),G=W.intersectObject(C),G.length>0?P!=G[0].index&&(t.size.array[P]=B,P=G[0].index,t.size.array[P]=B*1.25,t.size.needsUpdate=!0):P!==null&&(t.size.array[P]=B,t.size.needsUpdate=!0,P=null),I.render(L,E)}const he={class:"greetings"},ge=ie({__name:"Points",setup(n){return re(()=>{D()}),(t,o)=>(se(),ae("div",he,[o[1]||(o[1]=j("h3",null,"Three Points",-1)),j("button",{onClick:o[0]||(o[0]=(...l)=>O(D)&&O(D)(...l)),class:"bg-amber-300 hover:bg-amber-700"}," animate "),o[2]||(o[2]=j("div",{class:"w-full",id:"three-container-points"},null,-1))]))}});export{ge as default};
