import{aq as E,ap as _,s as N,ag as o,r as d,ar as w,ae as S,cR as I,j as l,as as L,ah as T,o as x,cS as Z,bj as tt,b3 as et,cj as U,B as st}from"./index-w2TjI0MF.js";import{i as ot}from"./isMuiElement-c8Cd3wTs.js";function at(t){return _("MuiListItem",t)}const nt=E("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),b=nt;function it(t){return _("MuiListItemSecondaryAction",t)}E("MuiListItemSecondaryAction",["root","disableGutters"]);const rt=["className"],ct=t=>{const{disableGutters:e,classes:s}=t;return T({root:["root",e&&"disableGutters"]},it,s)},lt=N("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.root,s.disableGutters&&e.disableGutters]}})(({ownerState:t})=>o({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),D=d.forwardRef(function(e,s){const a=w({props:e,name:"MuiListItemSecondaryAction"}),{className:n}=a,i=S(a,rt),p=d.useContext(I),u=o({},a,{disableGutters:p.disableGutters}),g=ct(u);return l.jsx(lt,o({className:L(g.root,n),ownerState:u,ref:s},i))});D.muiName="ListItemSecondaryAction";const dt=D,pt=["className"],ut=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],mt=(t,e)=>{const{ownerState:s}=t;return[e.root,s.dense&&e.dense,s.alignItems==="flex-start"&&e.alignItemsFlexStart,s.divider&&e.divider,!s.disableGutters&&e.gutters,!s.disablePadding&&e.padding,s.button&&e.button,s.hasSecondaryAction&&e.secondaryAction]},bt=t=>{const{alignItems:e,button:s,classes:a,dense:n,disabled:i,disableGutters:p,disablePadding:u,divider:g,hasSecondaryAction:f,selected:A}=t;return T({root:["root",n&&"dense",!p&&"gutters",!u&&"padding",g&&"divider",i&&"disabled",s&&"button",e==="flex-start"&&"alignItemsFlexStart",f&&"secondaryAction",A&&"selected"],container:["container"]},at,a)},gt=N("div",{name:"MuiListItem",slot:"Root",overridesResolver:mt})(({theme:t,ownerState:e})=>o({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!e.disablePadding&&o({paddingTop:8,paddingBottom:8},e.dense&&{paddingTop:4,paddingBottom:4},!e.disableGutters&&{paddingLeft:16,paddingRight:16},!!e.secondaryAction&&{paddingRight:48}),!!e.secondaryAction&&{[`& > .${Z.root}`]:{paddingRight:48}},{[`&.${b.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${b.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:x(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${b.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:x(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${b.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.alignItems==="flex-start"&&{alignItems:"flex-start"},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},e.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${b.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:x(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:x(t.palette.primary.main,t.palette.action.selectedOpacity)}}},e.hasSecondaryAction&&{paddingRight:48})),ft=N("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,e)=>e.container})({position:"relative"}),vt=d.forwardRef(function(e,s){const a=w({props:e,name:"MuiListItem"}),{alignItems:n="center",autoFocus:i=!1,button:p=!1,children:u,className:g,component:f,components:A={},componentsProps:j={},ContainerComponent:G="li",ContainerProps:{className:q}={},dense:O=!1,disabled:h=!1,disableGutters:$=!1,disablePadding:z=!1,divider:H=!1,focusVisibleClassName:W,secondaryAction:M,selected:Y=!1,slotProps:J={},slots:K={}}=a,Q=S(a.ContainerProps,pt),X=S(a,ut),k=d.useContext(I),P=d.useMemo(()=>({dense:O||k.dense||!1,alignItems:n,disableGutters:$}),[n,k.dense,O,$]),R=d.useRef(null);tt(()=>{i&&R.current&&R.current.focus()},[i]);const m=d.Children.toArray(u),B=m.length&&ot(m[m.length-1],["ListItemSecondaryAction"]),y=o({},a,{alignItems:n,autoFocus:i,button:p,dense:P.dense,disabled:h,disableGutters:$,disablePadding:z,divider:H,hasSecondaryAction:B,selected:Y}),V=bt(y),F=et(R,s),C=K.root||A.Root||gt,v=J.root||j.root||{},r=o({className:L(V.root,v.className,g),disabled:h},X);let c=f||"li";return p&&(r.component=f||"div",r.focusVisibleClassName=L(b.focusVisible,W),c=st),B?(c=!r.component&&!f?"div":c,G==="li"&&(c==="li"?c="div":r.component==="li"&&(r.component="div")),l.jsx(I.Provider,{value:P,children:l.jsxs(ft,o({as:G,className:L(V.container,q),ref:F,ownerState:y},Q,{children:[l.jsx(C,o({},v,!U(C)&&{as:c,ownerState:o({},y,v.ownerState)},r,{children:m})),m.pop()]}))})):l.jsx(I.Provider,{value:P,children:l.jsxs(C,o({},v,{as:c,ref:F},!U(C)&&{ownerState:o({},y,v.ownerState)},r,{children:[m,M&&l.jsx(dt,{children:M})]}))})}),xt=vt;export{xt as L};
