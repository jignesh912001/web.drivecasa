import{r as j,ar as E,as as U,s as g,ah as u,at as _,ag as H,j as e,au as B,aj as V,bu as re,eP as ge,ak as se,q as C,f as h,S as b,T as v,J as ee,i as f,I as Le,k as i,A as we,v as Ie,d as ke,t as Te,c_ as Y,G as S,R as Pe,p as $e,K as te,x as ae,c as ie,W as De,bj as Re,eQ as Ae,L as Ne,aB as Me,l as ze,m as We,eR as Fe,H as Be}from"./index-d_hKz2zC.js";import{E as Oe}from"./empty-content-rjL4BROV.js";import{b as F}from"./format-number-f2Nv9W09.js";import{C as G}from"./Card-L-UFOQRR.js";import{C as Q}from"./CardHeader-BM7-LZab.js";import{C as Ee}from"./CardContent-eE4gOu4N.js";import{T as le,a as Ue}from"./TextField-e_4V3qEH.js";import{a as _e,T as He}from"./table-pagination-custom-GFjC1PtU.js";import{C as Ve}from"./color-preview-eTDi2-j_.js";import{I as Ge}from"./incrementer-button-Navim5an.js";import{T as O}from"./TablePagination-D8rHsU24.js";import{T as Qe,a as qe,b as Ye}from"./TableContainer-yVzHDa8q.js";import{b as ce,C as pe,c as Je,a as Ke,u as Xe,F as Ze,o as et}from"./rhf-autocomplete-_8pQr_Sz.js";import{P as tt}from"./payment-new-card-dialog-YumFhinX.js";import{L as ot}from"./LoadingButton-pq5LNWCS.js";import{v as nt}from"./fade-ls6DDpMI.js";import{A as rt}from"./upload-avatar-x1OF_FD8.js";import{a as st,b as at}from"./address-list-dialog-URQcSsTZ.js";import"./Select-2T8XbQkD.js";import"./index-q81m-9gd.js";import"./Checkbox-18nfoWP1.js";import"./SwitchBase-dTKHZsQn.js";import"./FormControlLabel-D_dWO09R.js";import"./Switch-JVioLfQ0.js";import"./KeyboardArrowRight-UESfApTO.js";import"./FirstPage-ebjW-duc.js";import"./Chip-zv-zFcnm.js";import"./editor-SAG00BKs.js";import"./Radio-h2a34wQq.js";import"./Autocomplete-kTg74uCO.js";import"./Close-xsTIKsBy.js";import"./DialogTitle-1n2MjgSP.js";import"./dialogTitleClasses-eDgHBsb0.js";import"./DialogContent-djGsL5zT.js";import"./DialogActions-61XMFn37.js";import"./CircularProgress-HMYL4JU-.js";import"./image-91fQnaiI.js";const it=j.createContext({}),J=it,lt=j.createContext({}),oe=lt;function ct(t){return E("MuiStep",t)}U("MuiStep",["root","horizontal","vertical","alternativeLabel","completed"]);const pt=["active","children","className","component","completed","disabled","expanded","index","last"],dt=t=>{const{classes:o,orientation:n,alternativeLabel:s,completed:r}=t;return V({root:["root",n,s&&"alternativeLabel",r&&"completed"]},ct,o)},xt=g("div",{name:"MuiStep",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.root,o[n.orientation],n.alternativeLabel&&o.alternativeLabel,n.completed&&o.completed]}})(({ownerState:t})=>u({},t.orientation==="horizontal"&&{paddingLeft:8,paddingRight:8},t.alternativeLabel&&{flex:1,position:"relative"})),ut=j.forwardRef(function(o,n){const s=_({props:o,name:"MuiStep"}),{active:r,children:a,className:l,component:c="div",completed:d,disabled:p,expanded:m=!1,index:x,last:y}=s,R=H(s,pt),{activeStep:P,connector:w,alternativeLabel:$,orientation:A,nonLinear:D}=j.useContext(J);let[L=!1,N=!1,k=!1]=[r,d,p];P===x?L=r!==void 0?r:!0:!D&&P>x?N=d!==void 0?d:!0:!D&&P<x&&(k=p!==void 0?p:!0);const M=j.useMemo(()=>({index:x,last:y,expanded:m,icon:x+1,active:L,completed:N,disabled:k}),[x,y,m,L,N,k]),T=u({},s,{active:L,orientation:A,alternativeLabel:$,completed:N,disabled:k,expanded:m,component:c}),z=dt(T),W=e.jsxs(xt,u({as:c,className:B(z.root,l),ref:n,ownerState:T},R,{children:[w&&$&&x!==0?w:null,a]}));return e.jsx(oe.Provider,{value:M,children:w&&!$&&x!==0?e.jsxs(j.Fragment,{children:[w,W]}):W})}),mt=ut,ht=re(e.jsx("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),bt=re(e.jsx("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");function jt(t){return E("MuiStepIcon",t)}const vt=U("MuiStepIcon",["root","active","completed","error","text"]),X=vt;var ne;const yt=["active","className","completed","error","icon"],Ct=t=>{const{classes:o,active:n,completed:s,error:r}=t;return V({root:["root",n&&"active",s&&"completed",r&&"error"],text:["text"]},jt,o)},Z=g(ge,{name:"MuiStepIcon",slot:"Root",overridesResolver:(t,o)=>o.root})(({theme:t})=>({display:"block",transition:t.transitions.create("color",{duration:t.transitions.duration.shortest}),color:(t.vars||t).palette.text.disabled,[`&.${X.completed}`]:{color:(t.vars||t).palette.primary.main},[`&.${X.active}`]:{color:(t.vars||t).palette.primary.main},[`&.${X.error}`]:{color:(t.vars||t).palette.error.main}})),ft=g("text",{name:"MuiStepIcon",slot:"Text",overridesResolver:(t,o)=>o.text})(({theme:t})=>({fill:(t.vars||t).palette.primary.contrastText,fontSize:t.typography.caption.fontSize,fontFamily:t.typography.fontFamily})),St=j.forwardRef(function(o,n){const s=_({props:o,name:"MuiStepIcon"}),{active:r=!1,className:a,completed:l=!1,error:c=!1,icon:d}=s,p=H(s,yt),m=u({},s,{active:r,completed:l,error:c}),x=Ct(m);if(typeof d=="number"||typeof d=="string"){const y=B(a,x.root);return c?e.jsx(Z,u({as:bt,className:y,ref:n,ownerState:m},p)):l?e.jsx(Z,u({as:ht,className:y,ref:n,ownerState:m},p)):e.jsxs(Z,u({className:y,ref:n,ownerState:m},p,{children:[ne||(ne=e.jsx("circle",{cx:"12",cy:"12",r:"12"})),e.jsx(ft,{className:x.text,x:"12",y:"12",textAnchor:"middle",dominantBaseline:"central",ownerState:m,children:d})]}))}return d}),gt=St;function Lt(t){return E("MuiStepLabel",t)}const wt=U("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"]),I=wt,It=["children","className","componentsProps","error","icon","optional","slotProps","StepIconComponent","StepIconProps"],kt=t=>{const{classes:o,orientation:n,active:s,completed:r,error:a,disabled:l,alternativeLabel:c}=t;return V({root:["root",n,a&&"error",l&&"disabled",c&&"alternativeLabel"],label:["label",s&&"active",r&&"completed",a&&"error",l&&"disabled",c&&"alternativeLabel"],iconContainer:["iconContainer",s&&"active",r&&"completed",a&&"error",l&&"disabled",c&&"alternativeLabel"],labelContainer:["labelContainer",c&&"alternativeLabel"]},Lt,o)},Tt=g("span",{name:"MuiStepLabel",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.root,o[n.orientation]]}})(({ownerState:t})=>u({display:"flex",alignItems:"center",[`&.${I.alternativeLabel}`]:{flexDirection:"column"},[`&.${I.disabled}`]:{cursor:"default"}},t.orientation==="vertical"&&{textAlign:"left",padding:"8px 0"})),Pt=g("span",{name:"MuiStepLabel",slot:"Label",overridesResolver:(t,o)=>o.label})(({theme:t})=>u({},t.typography.body2,{display:"block",transition:t.transitions.create("color",{duration:t.transitions.duration.shortest}),[`&.${I.active}`]:{color:(t.vars||t).palette.text.primary,fontWeight:500},[`&.${I.completed}`]:{color:(t.vars||t).palette.text.primary,fontWeight:500},[`&.${I.alternativeLabel}`]:{marginTop:16},[`&.${I.error}`]:{color:(t.vars||t).palette.error.main}})),$t=g("span",{name:"MuiStepLabel",slot:"IconContainer",overridesResolver:(t,o)=>o.iconContainer})(()=>({flexShrink:0,display:"flex",paddingRight:8,[`&.${I.alternativeLabel}`]:{paddingRight:0}})),Dt=g("span",{name:"MuiStepLabel",slot:"LabelContainer",overridesResolver:(t,o)=>o.labelContainer})(({theme:t})=>({width:"100%",color:(t.vars||t).palette.text.secondary,[`&.${I.alternativeLabel}`]:{textAlign:"center"}})),de=j.forwardRef(function(o,n){var s;const r=_({props:o,name:"MuiStepLabel"}),{children:a,className:l,componentsProps:c={},error:d=!1,icon:p,optional:m,slotProps:x={},StepIconComponent:y,StepIconProps:R}=r,P=H(r,It),{alternativeLabel:w,orientation:$}=j.useContext(J),{active:A,disabled:D,completed:L,icon:N}=j.useContext(oe),k=p||N;let M=y;k&&!M&&(M=gt);const T=u({},r,{active:A,alternativeLabel:w,completed:L,disabled:D,error:d,orientation:$}),z=kt(T),W=(s=x.label)!=null?s:c.label;return e.jsxs(Tt,u({className:B(z.root,l),ref:n,ownerState:T},P,{children:[k||M?e.jsx($t,{className:z.iconContainer,ownerState:T,children:e.jsx(M,u({completed:L,active:A,error:d,icon:k},R))}):null,e.jsxs(Dt,{className:z.labelContainer,ownerState:T,children:[a?e.jsx(Pt,u({ownerState:T},W,{className:B(z.label,W==null?void 0:W.className),children:a})):null,m]})]}))});de.muiName="StepLabel";const Rt=de;function At(t){return E("MuiStepConnector",t)}const Nt=U("MuiStepConnector",["root","horizontal","vertical","alternativeLabel","active","completed","disabled","line","lineHorizontal","lineVertical"]),q=Nt,Mt=["className"],zt=t=>{const{classes:o,orientation:n,alternativeLabel:s,active:r,completed:a,disabled:l}=t,c={root:["root",n,s&&"alternativeLabel",r&&"active",a&&"completed",l&&"disabled"],line:["line",`line${se(n)}`]};return V(c,At,o)},Wt=g("div",{name:"MuiStepConnector",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.root,o[n.orientation],n.alternativeLabel&&o.alternativeLabel,n.completed&&o.completed]}})(({ownerState:t})=>u({flex:"1 1 auto"},t.orientation==="vertical"&&{marginLeft:12},t.alternativeLabel&&{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"})),Ft=g("span",{name:"MuiStepConnector",slot:"Line",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.line,o[`line${se(n.orientation)}`]]}})(({ownerState:t,theme:o})=>{const n=o.palette.mode==="light"?o.palette.grey[400]:o.palette.grey[600];return u({display:"block",borderColor:o.vars?o.vars.palette.StepConnector.border:n},t.orientation==="horizontal"&&{borderTopStyle:"solid",borderTopWidth:1},t.orientation==="vertical"&&{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24})}),Bt=j.forwardRef(function(o,n){const s=_({props:o,name:"MuiStepConnector"}),{className:r}=s,a=H(s,Mt),{alternativeLabel:l,orientation:c="horizontal"}=j.useContext(J),{active:d,disabled:p,completed:m}=j.useContext(oe),x=u({},s,{alternativeLabel:l,orientation:c,active:d,completed:m,disabled:p}),y=zt(x);return e.jsx(Wt,u({className:B(y.root,r),ref:n,ownerState:x},a,{children:e.jsx(Ft,{className:y.line,ownerState:x})}))}),xe=Bt;function Ot(t){return E("MuiStepper",t)}U("MuiStepper",["root","horizontal","vertical","alternativeLabel"]);const Et=["activeStep","alternativeLabel","children","className","component","connector","nonLinear","orientation"],Ut=t=>{const{orientation:o,alternativeLabel:n,classes:s}=t;return V({root:["root",o,n&&"alternativeLabel"]},Ot,s)},_t=g("div",{name:"MuiStepper",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.root,o[n.orientation],n.alternativeLabel&&o.alternativeLabel]}})(({ownerState:t})=>u({display:"flex"},t.orientation==="horizontal"&&{flexDirection:"row",alignItems:"center"},t.orientation==="vertical"&&{flexDirection:"column"},t.alternativeLabel&&{alignItems:"flex-start"})),Ht=e.jsx(xe,{}),Vt=j.forwardRef(function(o,n){const s=_({props:o,name:"MuiStepper"}),{activeStep:r=0,alternativeLabel:a=!1,children:l,className:c,component:d="div",connector:p=Ht,nonLinear:m=!1,orientation:x="horizontal"}=s,y=H(s,Et),R=u({},s,{alternativeLabel:a,orientation:x,component:d}),P=Ut(R),w=j.Children.toArray(l).filter(Boolean),$=w.map((D,L)=>j.cloneElement(D,u({index:L,last:L+1===w.length},D.props))),A=j.useMemo(()=>({activeStep:r,alternativeLabel:a,connector:p,nonLinear:m,orientation:x}),[r,a,p,m,x]);return e.jsx(J.Provider,{value:A,children:e.jsx(_t,u({as:d,ownerState:R,className:B(P.root,c),ref:n},y,{children:$}))})}),Gt=Vt;function K({total:t,discount:o,subTotal:n,shipping:s,onEdit:r,onApplyDiscount:a}){const l=s!==null?"Free":"-";return e.jsxs(G,{sx:{mb:3},children:[e.jsx(Q,{title:"Order Summary",action:r&&e.jsx(C,{size:"small",onClick:r,startIcon:e.jsx(h,{icon:"solar:pen-bold"}),children:"Edit"})}),e.jsx(Ee,{children:e.jsxs(b,{spacing:2,children:[e.jsxs(b,{direction:"row",justifyContent:"space-between",children:[e.jsx(v,{variant:"body2",sx:{color:"text.secondary"},children:"Sub Total"}),e.jsx(v,{variant:"subtitle2",children:F(n)})]}),e.jsxs(b,{direction:"row",justifyContent:"space-between",children:[e.jsx(v,{variant:"body2",sx:{color:"text.secondary"},children:"Discount"}),e.jsx(v,{variant:"subtitle2",children:o?F(-o):"-"})]}),e.jsxs(b,{direction:"row",justifyContent:"space-between",children:[e.jsx(v,{variant:"body2",sx:{color:"text.secondary"},children:"Shipping"}),e.jsx(v,{variant:"subtitle2",children:s?F(s):l})]}),e.jsx(ee,{sx:{borderStyle:"dashed"}}),e.jsxs(b,{direction:"row",justifyContent:"space-between",children:[e.jsx(v,{variant:"subtitle1",children:"Total"}),e.jsxs(f,{sx:{textAlign:"right"},children:[e.jsx(v,{variant:"subtitle1",sx:{color:"error.main"},children:F(t)}),e.jsx(v,{variant:"caption",sx:{fontStyle:"italic"},children:"(VAT included if applicable)"})]})]}),a&&e.jsx(le,{fullWidth:!0,placeholder:"Discount codes / Gifts",value:"DISCOUNT5",InputProps:{endAdornment:e.jsx(Le,{position:"end",children:e.jsx(C,{color:"primary",onClick:()=>a(5),sx:{mr:-.5},children:"Apply"})})}})]})})]})}K.propTypes={total:i.number,discount:i.number,shipping:i.number,subTotal:i.number,onEdit:i.func,onApplyDiscount:i.func};function ue({row:t,onDelete:o,onDecrease:n,onIncrease:s}){const{name:r,size:a,price:l,colors:c,coverUrl:d,quantity:p,available:m}=t;return e.jsxs(_e,{children:[e.jsxs(O,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(we,{variant:"rounded",alt:r,src:d,sx:{width:64,height:64,mr:2}}),e.jsxs(b,{spacing:.5,children:[e.jsx(v,{noWrap:!0,variant:"subtitle2",sx:{maxWidth:240},children:r}),e.jsxs(b,{direction:"row",alignItems:"center",sx:{typography:"body2",color:"text.secondary"},children:["size: ",e.jsxs(Ie,{sx:{ml:.5},children:[" ",a," "]}),e.jsx(ee,{orientation:"vertical",sx:{mx:1,height:16}}),e.jsx(Ve,{colors:c})]})]})]}),e.jsx(O,{children:F(l)}),e.jsx(O,{children:e.jsxs(f,{sx:{width:88,textAlign:"right"},children:[e.jsx(Ge,{quantity:p,onDecrease:n,onIncrease:s,disabledDecrease:p<=1,disabledIncrease:p>=m}),e.jsxs(v,{variant:"caption",component:"div",sx:{color:"text.secondary",mt:1},children:["available: ",m]})]})}),e.jsx(O,{align:"right",children:F(l*p)}),e.jsx(O,{align:"right",sx:{px:1},children:e.jsx(ke,{onClick:o,children:e.jsx(h,{icon:"solar:trash-bin-trash-bold"})})})]})}ue.propTypes={row:i.object,onDelete:i.func,onDecrease:i.func,onIncrease:i.func};const Qt=[{id:"product",label:"Product"},{id:"price",label:"Price"},{id:"quantity",label:"Quantity"},{id:"totalAmount",label:"Total Price",align:"right"},{id:""}];function me({products:t,onDelete:o,onIncreaseQuantity:n,onDecreaseQuantity:s}){return e.jsx(Qe,{sx:{overflow:"unset"},children:e.jsx(Te,{children:e.jsxs(qe,{sx:{minWidth:720},children:[e.jsx(He,{headLabel:Qt}),e.jsx(Ye,{children:t.map(r=>e.jsx(ue,{row:r,onDelete:()=>o(r.id),onDecrease:()=>s(r.id),onIncrease:()=>n(r.id)},r.id))})]})})})}me.propTypes={onDelete:i.func,products:i.array,onDecreaseQuantity:i.func,onIncreaseQuantity:i.func};function qt(){const t=Y(),o=!t.items.length;return e.jsxs(S,{container:!0,spacing:3,children:[e.jsxs(S,{xs:12,md:8,children:[e.jsxs(G,{sx:{mb:3},children:[e.jsx(Q,{title:e.jsxs(v,{variant:"h6",children:["Cart",e.jsxs(v,{component:"span",sx:{color:"text.secondary"},children:[" (",t.totalItems," item)"]})]}),sx:{mb:3}}),o?e.jsx(Oe,{title:"Cart is Empty!",description:"Look like you have no items in your shopping cart.",imgUrl:"/assets/icons/empty/ic_cart.svg",sx:{pt:5,pb:10}}):e.jsx(me,{products:t.items,onDelete:t.onDeleteCart,onIncreaseQuantity:t.onIncreaseQuantity,onDecreaseQuantity:t.onDecreaseQuantity})]}),e.jsx(C,{component:Pe,href:$e.product.root,color:"inherit",startIcon:e.jsx(h,{icon:"eva:arrow-ios-back-fill"}),children:"Continue Shopping"})]}),e.jsxs(S,{xs:12,md:4,children:[e.jsx(K,{total:t.total,discount:t.discount,subTotal:t.subTotal,onApplyDiscount:t.onApplyDiscount}),e.jsx(C,{fullWidth:!0,size:"large",type:"submit",variant:"contained",disabled:o,onClick:t.onNextStep,children:"Check Out"})]})]})}const Yt=g(xe)(({theme:t})=>({top:10,left:"calc(-50% + 20px)",right:"calc(50% + 20px)",[`& .${q.line}`]:{borderTopWidth:2,borderColor:t.palette.divider},[`&.${q.active}, &.${q.completed}`]:{[`& .${q.line}`]:{borderColor:t.palette.primary.main}}}));function he({steps:t,activeStep:o,sx:n,...s}){return e.jsx(Gt,{alternativeLabel:!0,activeStep:o,connector:e.jsx(Yt,{}),sx:{mb:{xs:3,md:5},...n},...s,children:t.map(r=>e.jsx(mt,{children:e.jsx(Rt,{StepIconComponent:be,sx:{[`& .${I.label}`]:{fontWeight:"fontWeightSemiBold"}},children:r})},r))})}he.propTypes={activeStep:i.number,steps:i.arrayOf(i.string),sx:i.object};function be({active:t,completed:o}){return e.jsx(b,{alignItems:"center",justifyContent:"center",sx:{width:24,height:24,color:"text.disabled",...t&&{color:"primary.main"}},children:o?e.jsx(h,{icon:"eva:checkmark-fill",sx:{color:"primary.main"}}):e.jsx(f,{sx:{width:8,height:8,borderRadius:"50%",backgroundColor:"currentColor"}})})}be.propTypes={active:i.bool,completed:i.bool};function je({options:t,onApplyShipping:o,...n}){const{control:s}=ce();return e.jsxs(G,{...n,children:[e.jsx(Q,{title:"Delivery"}),e.jsx(pe,{name:"delivery",control:s,render:({field:r})=>e.jsx(f,{columnGap:2,rowGap:2.5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},sx:{p:3},children:t.map(a=>e.jsx(ve,{option:a,selected:r.value===a.value,onClick:()=>{r.onChange(a.value),o(a.value)}},a.label))})})]})}je.propTypes={onApplyShipping:i.func,options:i.array};function ve({option:t,selected:o,...n}){const{value:s,label:r,description:a}=t;return e.jsxs(te,{variant:"outlined",sx:{p:2.5,cursor:"pointer",display:"flex",...o&&{boxShadow:l=>`0 0 0 2px ${l.palette.text.primary}`}},...n,children:[r==="Free"&&e.jsx(h,{icon:"carbon:bicycle",width:32}),r==="Standard"&&e.jsx(h,{icon:"carbon:delivery",width:32}),r==="Express"&&e.jsx(h,{icon:"carbon:rocket",width:32}),e.jsx(ae,{sx:{ml:2},primary:e.jsxs(b,{direction:"row",alignItems:"center",children:[e.jsx(f,{component:"span",sx:{flexGrow:1},children:r}),e.jsx(f,{component:"span",sx:{typography:"h6"},children:`$${s}`})]}),secondary:a,primaryTypographyProps:{typography:"subtitle1",mb:.5},secondaryTypographyProps:{typography:"body2"}})]},s)}ve.propTypes={option:i.object,selected:i.bool};function ye({billing:t,onBackStep:o}){return e.jsxs(G,{sx:{mb:3},children:[e.jsx(Q,{title:"Address",action:e.jsx(C,{size:"small",startIcon:e.jsx(h,{icon:"solar:pen-bold"}),onClick:o,children:"Edit"})}),e.jsxs(b,{spacing:1,sx:{p:3},children:[e.jsxs(f,{sx:{typography:"subtitle2"},children:[`${t==null?void 0:t.name} `,e.jsxs(f,{component:"span",sx:{color:"text.secondary",typography:"body2"},children:["(",t==null?void 0:t.addressType,")"]})]}),e.jsx(f,{sx:{color:"text.secondary",typography:"body2"},children:t==null?void 0:t.fullAddress}),e.jsx(f,{sx:{color:"text.secondary",typography:"body2"},children:t==null?void 0:t.phoneNumber})]})]})}ye.propTypes={billing:i.object,onBackStep:i.func};function Ce({options:t,cardOptions:o,...n}){const{control:s}=ce(),r=ie();return e.jsxs(e.Fragment,{children:[e.jsxs(G,{...n,children:[e.jsx(Q,{title:"Payment"}),e.jsx(pe,{name:"payment",control:s,render:({field:a,fieldState:{error:l}})=>e.jsxs(b,{sx:{px:3,pb:3},children:[t.map(c=>e.jsx(fe,{option:c,onOpen:r.onTrue,cardOptions:o,selected:a.value===c.value,isCredit:c.value==="credit"&&a.value==="credit",onClick:()=>{a.onChange(c.value)}},c.label)),!!l&&e.jsx(Ue,{error:!0,sx:{pt:1,px:2},children:l.message})]})})]}),e.jsx(tt,{open:r.value,onClose:r.onFalse})]})}Ce.propTypes={cardOptions:i.array,options:i.array};function fe({option:t,cardOptions:o,selected:n,isCredit:s,onOpen:r,...a}){const{value:l,label:c,description:d}=t;return e.jsxs(te,{variant:"outlined",sx:{p:2.5,mt:2.5,cursor:"pointer",...n&&{boxShadow:p=>`0 0 0 2px ${p.palette.text.primary}`}},...a,children:[e.jsx(ae,{primary:e.jsxs(b,{direction:"row",alignItems:"center",children:[e.jsx(f,{component:"span",sx:{flexGrow:1},children:c}),e.jsxs(b,{spacing:1,direction:"row",alignItems:"center",children:[l==="credit"&&e.jsxs(e.Fragment,{children:[e.jsx(h,{icon:"logos:mastercard",width:24}),",",e.jsx(h,{icon:"logos:visa",width:24})]}),l==="paypal"&&e.jsx(h,{icon:"logos:paypal",width:24}),l==="cash"&&e.jsx(h,{icon:"solar:wad-of-money-bold",width:32})]})]}),secondary:d,primaryTypographyProps:{typography:"subtitle1",mb:.5},secondaryTypographyProps:{typography:"body2"}}),s&&e.jsxs(b,{spacing:2.5,alignItems:"flex-end",sx:{pt:2.5},children:[e.jsx(le,{select:!0,fullWidth:!0,label:"Cards",SelectProps:{native:!0},children:o.map(p=>e.jsx("option",{value:p.value,children:p.label},p.value))}),e.jsx(C,{size:"small",color:"primary",startIcon:e.jsx(h,{icon:"mingcute:add-line"}),onClick:r,children:"Add New Card"})]})]},l)}fe.propTypes={cardOptions:i.array,isCredit:i.bool,onOpen:i.func,option:i.object,selected:i.bool};const Jt=[{value:0,label:"Free",description:"5-7 Days delivery"},{value:10,label:"Standard",description:"3-5 Days delivery"},{value:20,label:"Express",description:"2-3 Days delivery"}],Kt=[{value:"paypal",label:"Pay with Paypal",description:"You will be redirected to PayPal website to complete your purchase securely."},{value:"credit",label:"Credit / Debit Card",description:"We support Mastercard, Visa, Discover and Stripe."},{value:"cash",label:"Cash",description:"Pay with cash when your order is delivered."}],Xt=[{value:"ViSa1",label:"**** **** **** 1212 - Jimmy Holland"},{value:"ViSa2",label:"**** **** **** 2424 - Shawn Stokes"},{value:"MasterCard",label:"**** **** **** 4545 - Cole Armstrong"}];function Zt(){const t=Y(),o=Je().shape({payment:Ke().required("Payment is required")}),n={delivery:t.shipping,payment:""},s=Xe({resolver:et(o),defaultValues:n}),{handleSubmit:r,formState:{isSubmitting:a}}=s,l=r(async c=>{try{t.onNextStep(),t.onReset(),console.info("DATA",c)}catch(d){console.error(d)}});return e.jsx(Ze,{methods:s,onSubmit:l,children:e.jsxs(S,{container:!0,spacing:3,children:[e.jsxs(S,{xs:12,md:8,children:[e.jsx(je,{onApplyShipping:t.onApplyShipping,options:Jt}),e.jsx(Ce,{cardOptions:Xt,options:Kt,sx:{my:3}}),e.jsx(C,{size:"small",color:"inherit",onClick:t.onBackStep,startIcon:e.jsx(h,{icon:"eva:arrow-ios-back-fill"}),children:"Back"})]}),e.jsxs(S,{xs:12,md:4,children:[e.jsx(ye,{billing:t.billing,onBackStep:t.onBackStep}),e.jsx(K,{total:t.total,subTotal:t.subTotal,discount:t.discount,shipping:t.shipping,onEdit:()=>t.onGotoStep(0)}),e.jsx(ot,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:a,children:"Complete Order"})]})]})})}function Se({open:t,onReset:o,onDownloadPDF:n}){const s=e.jsxs(b,{spacing:5,sx:{m:"auto",maxWidth:480,textAlign:"center",px:{xs:2,sm:0}},children:[e.jsx(v,{variant:"h4",children:"Thank you for your purchase!"}),e.jsx(Ae,{sx:{height:260}}),e.jsxs(v,{children:["Thanks for placing order",e.jsx("br",{}),e.jsx("br",{}),e.jsx(Ne,{children:"01dc1370-3df6-11eb-b378-0242ac130002"}),e.jsx("br",{}),e.jsx("br",{}),"We will send you a notification within 5 days when it ships.",e.jsx("br",{})," If you have any question or queries then fell to get in contact us. ",e.jsx("br",{})," ",e.jsx("br",{}),"All the best,"]}),e.jsx(ee,{sx:{borderStyle:"dashed"}}),e.jsxs(b,{spacing:2,justifyContent:"space-between",direction:{xs:"column-reverse",sm:"row"},children:[e.jsx(C,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",onClick:o,startIcon:e.jsx(h,{icon:"eva:arrow-ios-back-fill"}),children:"Continue Shopping"}),e.jsx(C,{fullWidth:!0,size:"large",variant:"contained",startIcon:e.jsx(h,{icon:"eva:cloud-download-fill"}),onClick:n,children:"Download as PDF"})]})]});return e.jsx(rt,{children:t&&e.jsx(De,{fullWidth:!0,fullScreen:!0,open:t,PaperComponent:r=>e.jsx(f,{component:Re.div,...nt({distance:120,durationIn:.32,durationOut:.24,easeIn:"easeInOut"}).inUp,sx:{width:1,height:1,p:{md:3}},children:e.jsx(te,{...r,children:r.children})}),children:s})})}Se.propTypes={open:i.bool,onReset:i.func,children:i.node,onDownloadPDF:i.func};function eo(){const t=Y(),o=ie();return e.jsxs(e.Fragment,{children:[e.jsxs(S,{container:!0,spacing:3,children:[e.jsxs(S,{xs:12,md:8,children:[Me.slice(0,4).map(n=>e.jsx(st,{address:n,action:e.jsxs(b,{flexDirection:"row",flexWrap:"wrap",flexShrink:0,children:[!n.primary&&e.jsx(C,{size:"small",color:"error",sx:{mr:1},children:"Delete"}),e.jsx(C,{variant:"outlined",size:"small",onClick:()=>t.onCreateBilling(n),children:"Deliver to this Address"})]}),sx:{p:3,mb:3,borderRadius:2,boxShadow:s=>s.customShadows.card}},n.id)),e.jsxs(b,{direction:"row",justifyContent:"space-between",children:[e.jsx(C,{size:"small",color:"inherit",onClick:t.onBackStep,startIcon:e.jsx(h,{icon:"eva:arrow-ios-back-fill"}),children:"Back"}),e.jsx(C,{size:"small",color:"primary",onClick:o.onTrue,startIcon:e.jsx(h,{icon:"mingcute:add-line"}),children:"New Address"})]})]}),e.jsx(S,{xs:12,md:4,children:e.jsx(K,{total:t.total,subTotal:t.subTotal,discount:t.discount})})]}),e.jsx(at,{open:o.value,onClose:o.onFalse,onCreate:t.onCreateBilling})]})}function to(){const t=ze(),o=Y();return e.jsxs(We,{maxWidth:t.themeStretch?!1:"lg",sx:{mb:10},children:[e.jsx(v,{variant:"h4",sx:{my:{xs:3,md:5}},children:"Checkout"}),e.jsx(S,{container:!0,justifyContent:o.completed?"center":"flex-start",children:e.jsx(S,{xs:12,md:8,children:e.jsx(he,{activeStep:o.activeStep,steps:Fe})})}),o.completed?e.jsx(Se,{open:o.completed,onReset:o.onReset,onDownloadPDF:()=>{}}):e.jsxs(e.Fragment,{children:[o.activeStep===0&&e.jsx(qt,{}),o.activeStep===1&&e.jsx(eo,{}),o.activeStep===2&&o.billing&&e.jsx(Zt,{})]})]})}function Oo(){return e.jsxs(e.Fragment,{children:[e.jsx(Be,{children:e.jsx("title",{children:" Checkout"})}),e.jsx(to,{})]})}export{Oo as default};
