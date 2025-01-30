import{au as R,ap as E,ao as F}from"./three.module-aqEX2t9A.js";function O(n,u=1e-4){u=Math.max(u,Number.EPSILON);const s={},f=n.getIndex(),r=n.getAttribute("position"),m=f?f.count:r.count;let t=0;const l=Object.keys(n.attributes),h={},p={},S=[],A=["getX","getY","getZ","getW"],D=["setX","setY","setZ","setW"];for(let o=0,a=l.length;o<a;o++){const i=l[o],e=n.attributes[i];h[i]=new e.constructor(new e.array.constructor(e.count*e.itemSize),e.itemSize,e.normalized);const b=n.morphAttributes[i];b&&(p[i]||(p[i]=[]),b.forEach((c,d)=>{const g=new c.array.constructor(c.count*c.itemSize);p[i][d]=new c.constructor(g,c.itemSize,c.normalized)}))}const G=u*.5,U=Math.log10(1/u),X=Math.pow(10,U),j=G*X;for(let o=0;o<m;o++){const a=f?f.getX(o):o;let i="";for(let e=0,b=l.length;e<b;e++){const c=l[e],d=n.getAttribute(c),g=d.itemSize;for(let w=0;w<g;w++)i+=`${~~(d[A[w]](a)*X+j)},`}if(i in s)S.push(s[i]);else{for(let e=0,b=l.length;e<b;e++){const c=l[e],d=n.getAttribute(c),g=n.morphAttributes[c],w=d.itemSize,k=h[c],B=p[c];for(let x=0;x<w;x++){const I=A[x],M=D[x];if(k[M](t,d[I](a)),g)for(let T=0,H=g.length;T<H;T++)B[T][M](t,g[T][I](a))}}s[i]=t,S.push(t),t++}}const z=n.clone();for(const o in n.attributes){const a=h[o];if(z.setAttribute(o,new a.constructor(a.array.slice(0,t*a.itemSize),a.itemSize,a.normalized)),o in p)for(let i=0;i<p[o].length;i++){const e=p[o][i];z.morphAttributes[o][i]=new e.constructor(e.array.slice(0,t*e.itemSize),e.itemSize,e.normalized)}}return z.setIndex(S),z}function v(n,u){if(u===R)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(u===E||u===F){let s=n.getIndex();if(s===null){const t=[],l=n.getAttribute("position");if(l!==void 0){for(let h=0;h<l.count;h++)t.push(h);n.setIndex(t),s=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const f=s.count-2,r=[];if(u===E)for(let t=1;t<=f;t++)r.push(s.getX(0)),r.push(s.getX(t)),r.push(s.getX(t+1));else for(let t=0;t<f;t++)t%2===0?(r.push(s.getX(t)),r.push(s.getX(t+1)),r.push(s.getX(t+2))):(r.push(s.getX(t+2)),r.push(s.getX(t+1)),r.push(s.getX(t)));r.length/3!==f&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const m=n.clone();return m.setIndex(r),m.clearGroups(),m}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",u),n}export{O as m,v as t};
