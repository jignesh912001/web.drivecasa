import{c1 as R,s as k,ak as n,ah as o,c2 as _,r as N,at as w,ag as z,j as v,au as E,aj as F,c3 as I}from"./index-kRLXSnYb.js";const K=["className","color","disableShrink","size","style","thickness","value","variant"];let l=r=>r,P,$,b,S;const a=44,U=R(P||(P=l`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),W=R($||($=l`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),B=r=>{const{classes:s,variant:e,color:t,disableShrink:d}=r,u={root:["root",e,`color${n(t)}`],svg:["svg"],circle:["circle",`circle${n(e)}`,d&&"circleDisableShrink"]};return F(u,I,s)},G=k("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,s)=>{const{ownerState:e}=r;return[s.root,s[e.variant],s[`color${n(e.color)}`]]}})(({ownerState:r,theme:s})=>o({display:"inline-block"},r.variant==="determinate"&&{transition:s.transitions.create("transform")},r.color!=="inherit"&&{color:(s.vars||s).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&_(b||(b=l`
      animation: ${0} 1.4s linear infinite;
    `),U)),L=k("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,s)=>s.svg})({display:"block"}),T=k("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,s)=>{const{ownerState:e}=r;return[s.circle,s[`circle${n(e.variant)}`],e.disableShrink&&s.circleDisableShrink]}})(({ownerState:r,theme:s})=>o({stroke:"currentColor"},r.variant==="determinate"&&{transition:s.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&_(S||(S=l`
      animation: ${0} 1.4s ease-in-out infinite;
    `),W)),V=N.forwardRef(function(s,e){const t=w({props:s,name:"MuiCircularProgress"}),{className:d,color:u="primary",disableShrink:j=!1,size:h=40,style:D,thickness:i=3.6,value:p=0,variant:x="indeterminate"}=t,M=z(t,K),c=o({},t,{color:u,disableShrink:j,size:h,thickness:i,value:p,variant:x}),m=B(c),f={},g={},C={};if(x==="determinate"){const y=2*Math.PI*((a-i)/2);f.strokeDasharray=y.toFixed(3),C["aria-valuenow"]=Math.round(p),f.strokeDashoffset=`${((100-p)/100*y).toFixed(3)}px`,g.transform="rotate(-90deg)"}return v.jsx(G,o({className:E(m.root,d),style:o({width:h,height:h},g,D),ownerState:c,ref:e,role:"progressbar"},C,M,{children:v.jsx(L,{className:m.svg,ownerState:c,viewBox:`${a/2} ${a/2} ${a} ${a}`,children:v.jsx(T,{className:m.circle,style:f,ownerState:c,cx:a,cy:a,r:(a-i)/2,fill:"none",strokeWidth:i})})}))}),q=V;export{q as C};
