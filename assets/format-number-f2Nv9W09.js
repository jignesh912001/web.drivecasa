import{c4 as i}from"./index-d_hKz2zC.js";function m(){const{currentLang:{numberFormat:{code:t,currency:r}}}=i();return{code:t??"en-US",currency:r??"USD"}}function a(t){const{code:r}=m();if(!t)return"";const n=Number(t);return new Intl.NumberFormat(r,{minimumFractionDigits:0,maximumFractionDigits:2}).format(n)}function f(t){const{code:r,currency:n}=m();if(!t)return"";const e=Number(t);return new Intl.NumberFormat(r,{style:"currency",currency:n,minimumFractionDigits:0,maximumFractionDigits:2}).format(e)}function b(t){const{code:r}=m();if(!t)return"";const n=Number(t)/100;return new Intl.NumberFormat(r,{style:"percent",minimumFractionDigits:0,maximumFractionDigits:1}).format(n)}function F(t){const{code:r}=m();if(!t)return"";const n=Number(t);return new Intl.NumberFormat(r,{notation:"compact",maximumFractionDigits:2}).format(n).replace(/[A-Z]/g,o=>o.toLowerCase())}function g(t){if(!t)return"";if(t===0)return"0 Bytes";const r=["bytes","Kb","Mb","Gb","Tb","Pb","Eb","Zb","Yb"],n=2,e=1024,o=Number(t),c=Math.floor(Math.log(o)/Math.log(e));return`${parseFloat((o/e**c).toFixed(n))} ${r[c]}`}export{b as a,f as b,F as c,g as d,a as f};
