import{j as e,S as a,K as T,T as p,i as f,v as g,k as t,W as C,aV as F,q as S,r as b,dw as q,cR as N,I as L,f as D,aW as I}from"./index-8hdvFbfH.js";import{c as $,a as c,j as R,u as k,F as H,t as B,R as h,m as G,v as O,o as P}from"./rhf-autocomplete-lC0u78o0.js";import{D as W}from"./DialogTitle-geylUioq.js";import{D as z}from"./DialogContent-R8McoZ1F.js";import{D as E}from"./DialogActions-fHc6sLr8.js";import{L as V}from"./LoadingButton-pJ-fgWc5.js";import{T as Z}from"./TextField-XB6qHceY.js";function K({address:i,action:o,sx:n,...y}){const{name:d,fullAddress:m,addressType:u,phoneNumber:l,primary:x}=i;return e.jsxs(a,{component:T,spacing:2,alignItems:{md:"flex-end"},direction:{xs:"column",md:"row"},sx:{position:"relative",...n},...y,children:[e.jsxs(a,{flexGrow:1,spacing:1,children:[e.jsxs(a,{direction:"row",alignItems:"center",children:[e.jsxs(p,{variant:"subtitle2",children:[d,e.jsxs(f,{component:"span",sx:{ml:.5,typography:"body2",color:"text.secondary"},children:["(",u,")"]})]}),x&&e.jsx(g,{color:"info",sx:{ml:1},children:"Default"})]}),e.jsx(p,{variant:"body2",sx:{color:"text.secondary"},children:m}),e.jsx(p,{variant:"body2",sx:{color:"text.secondary"},children:l})]}),o&&o]})}K.propTypes={action:t.node,address:t.object,sx:t.object};function U({open:i,onClose:o,onCreate:n}){const y=$().shape({name:c().required("Fullname is required"),phoneNumber:c().required("Phone number is required"),address:c().required("Address is required"),city:c().required("City is required"),state:c().required("State is required"),country:c().required("Country is required"),zipCode:c().required("Zip code is required"),addressType:c(),primary:R()}),d={name:"",city:"",state:"",address:"",zipCode:"",primary:!0,phoneNumber:"",addressType:"Home",country:""},m=k({resolver:P(y),defaultValues:d}),{handleSubmit:u,formState:{isSubmitting:l}}=m,x=u(async r=>{try{n({name:r.name,phoneNumber:r.phoneNumber,fullAddress:`${r.address}, ${r.city}, ${r.state}, ${r.country}, ${r.zipCode}`,addressType:r.addressType,primary:r.primary}),o()}catch(j){console.error(j)}});return e.jsx(C,{fullWidth:!0,maxWidth:"sm",open:i,onClose:o,children:e.jsxs(H,{methods:m,onSubmit:x,children:[e.jsx(W,{children:"New address"}),e.jsx(z,{dividers:!0,children:e.jsxs(a,{spacing:3,children:[e.jsx(B,{row:!0,name:"addressType",options:[{label:"Home",value:"Home"},{label:"Office",value:"Office"}]}),e.jsxs(f,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[e.jsx(h,{name:"name",label:"Full Name"}),e.jsx(h,{name:"phoneNumber",label:"Phone Number"})]}),e.jsx(h,{name:"address",label:"Address"}),e.jsxs(f,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(3, 1fr)"},children:[e.jsx(h,{name:"city",label:"Town / City"}),e.jsx(h,{name:"state",label:"State"}),e.jsx(h,{name:"zipCode",label:"Zip/Code"})]}),e.jsx(G,{name:"country",type:"country",label:"Country",placeholder:"Choose a country",options:F.map(r=>r.label),getOptionLabel:r=>r}),e.jsx(O,{name:"primary",label:"Use this address as default."})]})}),e.jsxs(E,{children:[e.jsx(S,{color:"inherit",variant:"outlined",onClick:o,children:"Cancel"}),e.jsx(V,{type:"submit",variant:"contained",loading:l,children:"Deliver to this Address"})]})]})})}U.propTypes={onClose:t.func,onCreate:t.func,open:t.bool};function X({title:i="Address Book",list:o,action:n,open:y,onClose:d,selected:m,onSelect:u}){const[l,x]=b.useState(""),r=J({inputData:o,query:l}),j=!r.length&&!!l,v=b.useCallback(s=>{x(s.target.value)},[]),w=b.useCallback(s=>{u(s),x(""),d()},[d,u]),A=e.jsx(a,{spacing:.5,sx:{p:.5,maxHeight:80*8,overflowX:"hidden"},children:r.map(s=>e.jsxs(a,{spacing:.5,component:q,selected:m(`${s.id}`),onClick:()=>w(s),sx:{py:1,px:1.5,borderRadius:1,flexDirection:"column",alignItems:"flex-start",[`&.${N.selected}`]:{bgcolor:"action.selected","&:hover":{bgcolor:"action.selected"}}},children:[e.jsxs(a,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(p,{variant:"subtitle2",children:s.name}),s.primary&&e.jsx(g,{color:"info",children:"Default"})]}),s.company&&e.jsx(f,{sx:{color:"primary.main",typography:"caption"},children:s.company}),e.jsx(p,{variant:"body2",sx:{color:"text.secondary"},children:s.fullAddress}),s.phoneNumber&&e.jsx(p,{variant:"body2",sx:{color:"text.secondary"},children:s.phoneNumber})]},s.id))});return e.jsxs(C,{fullWidth:!0,maxWidth:"xs",open:y,onClose:d,children:[e.jsxs(a,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{p:3,pr:1.5},children:[e.jsxs(p,{variant:"h6",children:[" ",i," "]}),n&&n]}),e.jsx(a,{sx:{p:2,pt:0},children:e.jsx(Z,{value:l,onChange:v,placeholder:"Search...",InputProps:{startAdornment:e.jsx(L,{position:"start",children:e.jsx(D,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})}),j?e.jsx(I,{query:l,sx:{px:3,pt:5,pb:10}}):A]})}X.propTypes={action:t.node,list:t.array,onClose:t.func,onSelect:t.func,open:t.bool,selected:t.func,title:t.string};function J({inputData:i,query:o}){return o?i.filter(n=>n.name.toLowerCase().indexOf(o.toLowerCase())!==-1||n.fullAddress.toLowerCase().indexOf(o.toLowerCase())!==-1||`${n.company}`.toLowerCase().indexOf(o.toLowerCase())!==-1):i}export{X as A,K as a,U as b};
