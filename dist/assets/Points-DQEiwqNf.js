import{S as A}from"./stats.module--VATS4Kh.js";import{m as E}from"./BufferGeometryUtils-BX0ELi2D.js";import{s as S}from"./Init-DS8Ej40i.js";import{B,C as z,e as F,F as T,f as L,T as M,g as G,R,V}from"./three.module-aqEX2t9A.js";import{d as H,b as I,o as W,c as j,a as p,u as _}from"./index-Dod1TsIU.js";let l,g,i,v,r;const m=20;let w,d,u,n;const k=`

			attribute float size;
			attribute vec3 customColor;

			varying vec3 vColor;

			void main() {

				vColor = customColor;

				vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );

				gl_PointSize = size * ( 300.0 / -mvPosition.z );

				gl_Position = projectionMatrix * mvPosition;

			}`,D=`

			uniform vec3 color;
			uniform sampler2D pointTexture;
			uniform float alphaTest;

			varying vec3 vColor;

			void main() {

				gl_FragColor = vec4( color * vColor, 1.0 );

				gl_FragColor = gl_FragColor * texture2D( pointTexture, gl_PointCoord );

				if ( gl_FragColor.a < alphaTest ) discard;

			}`;function f(){const o=document.getElementById("three-container-points");if(!o)return;const e=S(o);g=e.scene,i=e.camera,l=e.renderer;const t=e.container;i.position.z=250,l.setAnimationLoop(O),t.appendChild(l.domElement);const s=new B(200,200,200,16,16,16);s.deleteAttribute("normal"),s.deleteAttribute("uv");const b=E(s).getAttribute("position"),C=[],x=[],y=new z;for(let a=0,h=b.count;a<h;a++)y.setHSL(.01+.1*(a/h),1,.5),y.toArray(C,a*3),x[a]=m*.5;const c=new F;c.setAttribute("position",b),c.setAttribute("customColor",new T(C,3)),c.setAttribute("size",new T(x,1));const P=new L({uniforms:{color:{value:new z(16777215)},pointTexture:{value:new M().load("img/icons/favicon-16x16.png")},alphaTest:{value:.9}},vertexShader:k,fragmentShader:D});r=new G(c,P),g.add(r),w=new R,u=new V,v=new A,t.appendChild(v.dom),window.addEventListener("resize",U),document.addEventListener("pointermove",N)}function N(o){u.x=o.clientX/window.innerWidth*2-1,u.y=-(o.clientY/window.innerHeight)*2+1}function U(){i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)}function O(){X(),v.update()}function X(){r.rotation.x+=5e-4,r.rotation.y+=.001;const e=r.geometry.attributes;w.setFromCamera(u,i),d=w.intersectObject(r),d.length>0?n!=d[0].index&&(e.size.array[n]=m,n=d[0].index,e.size.array[n]=m*1.25,e.size.needsUpdate=!0):n!==null&&(e.size.array[n]=m,e.size.needsUpdate=!0,n=null),l.render(g,i)}const Y={class:"greetings"},ee=H({__name:"Points",setup(o){return I(()=>{f()}),(e,t)=>(W(),j("div",Y,[t[1]||(t[1]=p("h3",null,"Three Points",-1)),p("button",{onClick:t[0]||(t[0]=(...s)=>_(f)&&_(f)(...s)),class:"bg-amber-300 hover:bg-amber-700"}," animate "),t[2]||(t[2]=p("div",{class:"w-full",id:"three-container-points"},null,-1))]))}});export{ee as default};
