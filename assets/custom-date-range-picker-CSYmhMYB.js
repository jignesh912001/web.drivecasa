import{b as s}from"./format-time-_tAHxme9.js";import{dt as x,du as g,dv as j,$ as b,j as e,W as C,S as v,K as f,q as h,k as r}from"./index-WqsZrxyt.js";import{D as w}from"./DialogTitle-rV3M0Rcu.js";import{D as S}from"./DialogContent-eTSRr2KN.js";import{a as y,D as M}from"./DatePicker-qNTB6Vx9.js";import{a as D}from"./TextField-2tCbVTps.js";import{D as $}from"./DialogActions-b1hCZYzf.js";function E(a,n){const t=new Date().getFullYear(),l=a?x(a):null,d=n?x(n):null,c=t===l&&t===d,u=a&&n?g(new Date(a),new Date(n)):!1,i=a&&n?j(new Date(a),new Date(n)):!1;return c?i?u?s(n,"dd MMM yy"):`${s(a,"dd")} - ${s(n,"dd MMM yy")}`:`${s(a,"dd MMM")} - ${s(n,"dd MMM yy")}`:`${s(a,"dd MMM yy")} - ${s(n,"dd MMM yy")}`}function k({title:a="Select date range",variant:n="input",startDate:t,endDate:l,onChangeStartDate:d,onChangeEndDate:c,open:u,onClose:i,error:p}){const m=b("up","md"),o=n==="calendar";return e.jsxs(C,{fullWidth:!0,maxWidth:o?!1:"xs",open:u,onClose:i,PaperProps:{sx:{...o&&{maxWidth:720}}},children:[e.jsx(w,{sx:{pb:2},children:a}),e.jsxs(S,{sx:{...o&&m&&{overflow:"unset"}},children:[e.jsx(v,{justifyContent:"center",spacing:o?3:2,direction:o&&m?"row":"column",sx:{pt:1},children:o?e.jsxs(e.Fragment,{children:[e.jsx(f,{variant:"outlined",sx:{borderRadius:2,borderColor:"divider",borderStyle:"dashed"},children:e.jsx(y,{value:t,onChange:d})}),e.jsx(f,{variant:"outlined",sx:{borderRadius:2,borderColor:"divider",borderStyle:"dashed"},children:e.jsx(y,{value:l,onChange:c})})]}):e.jsxs(e.Fragment,{children:[e.jsx(M,{label:"Start date",value:t,onChange:d}),e.jsx(M,{label:"End date",value:l,onChange:c})]})}),p&&e.jsx(D,{error:!0,sx:{px:2},children:"End date must be later than start date"})]}),e.jsxs($,{children:[e.jsx(h,{variant:"outlined",color:"inherit",onClick:i,children:"Cancel"}),e.jsx(h,{disabled:p,variant:"contained",onClick:i,children:"Apply"})]})]})}k.propTypes={error:r.bool,onChangeEndDate:r.func,onChangeStartDate:r.func,onClose:r.func,open:r.bool,title:r.string,variant:r.oneOf(["input","calendar"]),startDate:r.oneOfType([r.string,r.number,r.instanceOf(Date)]),endDate:r.oneOfType([r.string,r.number,r.instanceOf(Date)])};export{k as C,E as s};
