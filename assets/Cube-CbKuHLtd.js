import{S as y,P as B,W as C,O as W,B as g,M,a as v}from"./OrbitControls-Dcn42Zex.js";import{d as z,b as S,o as _,c as k,a as i,u as p}from"./index-CvSOj0ug.js";function c(){const r=document.getElementById("three-container");if(!r)return;const n=r,e=n.offsetWidth,s=n.offsetWidth,d=new y,o=new B(75,e/s,.1,1e3),t=new C;o.position.z=2,t.setSize(e,s);const w=new W(o,t.domElement),b=new g,h=new M({color:65280,wireframe:!0}),a=new v(b,h);d.add(a),n?n.appendChild(t.domElement):(confirm("No container found"),document.body.appendChild(t.domElement)),window.addEventListener("resize",E,!1);function E(){const f=n.offsetWidth,u=n.offsetWidth,x=f/u;o.aspect=x,o.updateProjectionMatrix(),t.setSize(f,u),m()}function m(){t.render(d,o)}function l(){requestAnimationFrame(l),a.rotation.x+=.01,a.rotation.y+=.01,w.update(),m()}l()}const P={class:"greetings"},A=z({__name:"Cube",setup(r){return S(()=>{c()}),(n,e)=>(_(),k("div",P,[e[1]||(e[1]=i("h3",null,"Three EARTH",-1)),i("button",{onClick:e[0]||(e[0]=(...s)=>p(c)&&p(c)(...s)),class:"bg-amber-300 hover:bg-amber-700"}," animate "),e[2]||(e[2]=i("div",{class:"w-full",id:"three-container"},null,-1))]))}});export{A as default};
