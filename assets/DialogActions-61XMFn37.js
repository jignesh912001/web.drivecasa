import{ar as g,as as p,s as u,ah as e,r as d,at as m,ag as f,j as x,au as D,aj as A}from"./index-d_hKz2zC.js";function y(s){return g("MuiDialogActions",s)}p("MuiDialogActions",["root","spacing"]);const S=["className","disableSpacing"],b=s=>{const{classes:t,disableSpacing:o}=s;return A({root:["root",!o&&"spacing"]},y,t)},j=u("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:o}=s;return[t.root,!o.disableSpacing&&t.spacing]}})(({ownerState:s})=>e({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!s.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),C=d.forwardRef(function(t,o){const a=m({props:t,name:"MuiDialogActions"}),{className:n,disableSpacing:c=!1}=a,l=f(a,S),i=e({},a,{disableSpacing:c}),r=b(i);return x.jsx(j,e({className:D(r.root,n),ownerState:i,ref:o},l))}),h=C;export{h as D};
