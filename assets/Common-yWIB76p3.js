import"./index-xB1vvAyJ.js";const f=t=>{const e=new Date().getFullYear(),a=[];for(let n=t;n<=e;n++)a.push(n.toString());return a};f(2020);function w(t){const e=new Date(t),a=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${a}-${n}-${r}`}function U(t){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t)}function m(t,e=8){const a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let n="";const r=a.length;for(let o=0;o<e;o++){const c=Math.floor(Math.random()*r);n+=a.charAt(c)}return n+t}let M=128,Y=m(M),p=btoa(Y),u=atob(p);parseInt(u==null?void 0:u.replace(/\D/g,""),10);const T=t=>{if(!t||isNaN(t))return null;const e=new Date(1900,0,1),a=Math.floor(t),n=t-a,r=new Date(e);r.setDate(e.getDate()+a-2);const o=Math.floor(n*24),c=Math.floor((n*24-o)*60),l=Math.floor(((n*24-o)*60-c)*60);r.setHours(o,c,l);const s=new Date(r),D=String(s.getUTCDate()).padStart(2,"0"),g=String(s.getUTCMonth()+1).padStart(2,"0"),i=s.getUTCFullYear(),S=String(s.getUTCHours()).padStart(2,"0"),h=String(s.getUTCMinutes()).padStart(2,"0"),d=String(s.getUTCSeconds()).padStart(2,"0");return`${i}-${g}-${D} ${S}:${h}:${d}`},$=()=>{const t=new Date;return new Date(t.setDate(t.getDate()-7))},C=()=>{const t=new Date,e=new Date(t.setFullYear(t.getFullYear()-1));return e.setHours(0,0,0,0),e};export{T as E,U as a,C as b,w as f,$ as g};
