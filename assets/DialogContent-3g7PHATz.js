import{ar as c,as as p,s as u,ah as a,r as g,at as v,ag as x,j as C,au as f,aj as m}from"./index-xB1vvAyJ.js";import{d as D}from"./dialogTitleClasses-mQgoVcO8.js";function j(o){return c("MuiDialogContent",o)}p("MuiDialogContent",["root","dividers"]);const w=["className","dividers"],R=o=>{const{classes:s,dividers:t}=o;return m({root:["root",t&&"dividers"]},j,s)},b=u("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,s)=>{const{ownerState:t}=o;return[s.root,t.dividers&&s.dividers]}})(({theme:o,ownerState:s})=>a({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},s.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${D.root} + &`]:{paddingTop:0}})),y=g.forwardRef(function(s,t){const e=v({props:s,name:"MuiDialogContent"}),{className:r,dividers:n=!1}=e,l=x(e,w),i=a({},e,{dividers:n}),d=R(i);return C.jsx(b,a({className:f(d.root,r),ownerState:i,ref:t},l))}),U=y;export{U as D};
