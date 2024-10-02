import{r as m,ap as ae,aq as oe,s as ie,ag as M,ar as ce,g as Q,c9 as le,ae as pe,j as s,as as de,eQ as R,eS as O,ah as ue,k as S,a9 as J,U as xe,T as X,aH as fe,w as F,dC as ge,o as H,R as he,f as me,q as K,dw as ye,G as Se,H as je}from"./index-w2TjI0MF.js";import{C as Ce}from"./custom-breadcrumbs-RjSW2biQ.js";import{A as ve,U as we,C as Ie,G as $e,a as ke,S as be}from"./UserAccess-k2Lt9elC.js";import{D as Te}from"./DialogTitle-RlTLSsU3.js";import{D as Ae}from"./DialogContent-ITde-Yrn.js";import{B as De}from"./Box-wOnCFSTh.js";import{T as Ue}from"./TextField-Rnx-roig.js";import{D as Me}from"./DialogActions-UxlkhUlJ.js";import{B as Y}from"./Button-craGvtks.js";import{L as ee}from"./LoadingButton-pMu7UJc1.js";import{c as L,d as Be,T as Pe,a as Ge,b as We}from"./TableHead-YLlfzKMZ.js";import{T as U}from"./TableCell-Fp4KwiAp.js";import{C as _}from"./Checkbox-MPmUmIhR.js";import{C as Re}from"./Card-huoyhVY-.js";import{S as V}from"./Stack-_q8zbVdT.js";import"./index-q81m-9gd.js";import"./dialogTitleClasses-DEvrnnr4.js";import"./isMuiElement-c8Cd3wTs.js";import"./Select-fj7_ZCHL.js";import"./CircularProgress-DldaBh_H.js";import"./SwitchBase-0oakK23s.js";const Ee=m.createContext(),Z=Ee;function Ne(e){return ae("MuiGrid",e)}const Ve=[0,1,2,3,4,5,6,7,8,9,10],ze=["column-reverse","column","row-reverse","row"],Fe=["nowrap","wrap-reverse","wrap"],D=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],Le=oe("MuiGrid",["root","container","item","zeroMinWidth",...Ve.map(e=>`spacing-xs-${e}`),...ze.map(e=>`direction-xs-${e}`),...Fe.map(e=>`wrap-xs-${e}`),...D.map(e=>`grid-xs-${e}`),...D.map(e=>`grid-sm-${e}`),...D.map(e=>`grid-md-${e}`),...D.map(e=>`grid-lg-${e}`),...D.map(e=>`grid-xl-${e}`)]),B=Le,Oe=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function T(e){const r=parseFloat(e);return`${r}${String(e).replace(String(r),"")||"px"}`}function qe({theme:e,ownerState:r}){let a;return e.breakpoints.keys.reduce((n,o)=>{let c={};if(r[o]&&(a=r[o]),!a)return n;if(a===!0)c={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(a==="auto")c={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const f=R({values:r.columns,breakpoints:e.breakpoints.values}),t=typeof f=="object"?f[o]:f;if(t==null)return n;const u=`${Math.round(a/t*1e8)/1e6}%`;let p={};if(r.container&&r.item&&r.columnSpacing!==0){const l=e.spacing(r.columnSpacing);if(l!=="0px"){const g=`calc(${u} + ${T(l)})`;p={flexBasis:g,maxWidth:g}}}c=M({flexBasis:u,flexGrow:0,maxWidth:u},p)}return e.breakpoints.values[o]===0?Object.assign(n,c):n[e.breakpoints.up(o)]=c,n},{})}function He({theme:e,ownerState:r}){const a=R({values:r.direction,breakpoints:e.breakpoints.values});return O({theme:e},a,n=>{const o={flexDirection:n};return n.indexOf("column")===0&&(o[`& > .${B.item}`]={maxWidth:"none"}),o})}function se({breakpoints:e,values:r}){let a="";Object.keys(r).forEach(o=>{a===""&&r[o]!==0&&(a=o)});const n=Object.keys(e).sort((o,c)=>e[o]-e[c]);return n.slice(0,n.indexOf(a))}function Ke({theme:e,ownerState:r}){const{container:a,rowSpacing:n}=r;let o={};if(a&&n!==0){const c=R({values:n,breakpoints:e.breakpoints.values});let f;typeof c=="object"&&(f=se({breakpoints:e.breakpoints.values,values:c})),o=O({theme:e},c,(t,u)=>{var p;const l=e.spacing(t);return l!=="0px"?{marginTop:`-${T(l)}`,[`& > .${B.item}`]:{paddingTop:T(l)}}:(p=f)!=null&&p.includes(u)?{}:{marginTop:0,[`& > .${B.item}`]:{paddingTop:0}}})}return o}function _e({theme:e,ownerState:r}){const{container:a,columnSpacing:n}=r;let o={};if(a&&n!==0){const c=R({values:n,breakpoints:e.breakpoints.values});let f;typeof c=="object"&&(f=se({breakpoints:e.breakpoints.values,values:c})),o=O({theme:e},c,(t,u)=>{var p;const l=e.spacing(t);return l!=="0px"?{width:`calc(100% + ${T(l)})`,marginLeft:`-${T(l)}`,[`& > .${B.item}`]:{paddingLeft:T(l)}}:(p=f)!=null&&p.includes(u)?{}:{width:"100%",marginLeft:0,[`& > .${B.item}`]:{paddingLeft:0}}})}return o}function Ze(e,r,a={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[a[`spacing-xs-${String(e)}`]];const n=[];return r.forEach(o=>{const c=e[o];Number(c)>0&&n.push(a[`spacing-${o}-${String(c)}`])}),n}const Qe=ie("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:a}=e,{container:n,direction:o,item:c,spacing:f,wrap:t,zeroMinWidth:u,breakpoints:p}=a;let l=[];n&&(l=Ze(f,p,r));const g=[];return p.forEach(x=>{const i=a[x];i&&g.push(r[`grid-${x}-${String(i)}`])}),[r.root,n&&r.container,c&&r.item,u&&r.zeroMinWidth,...l,o!=="row"&&r[`direction-xs-${String(o)}`],t!=="wrap"&&r[`wrap-xs-${String(t)}`],...g]}})(({ownerState:e})=>M({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),He,Ke,_e,qe);function Je(e,r){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const a=[];return r.forEach(n=>{const o=e[n];if(Number(o)>0){const c=`spacing-${n}-${String(o)}`;a.push(c)}}),a}const Xe=e=>{const{classes:r,container:a,direction:n,item:o,spacing:c,wrap:f,zeroMinWidth:t,breakpoints:u}=e;let p=[];a&&(p=Je(c,u));const l=[];u.forEach(x=>{const i=e[x];i&&l.push(`grid-${x}-${String(i)}`)});const g={root:["root",a&&"container",o&&"item",t&&"zeroMinWidth",...p,n!=="row"&&`direction-xs-${String(n)}`,f!=="wrap"&&`wrap-xs-${String(f)}`,...l]};return ue(g,Ne,r)},Ye=m.forwardRef(function(r,a){const n=ce({props:r,name:"MuiGrid"}),{breakpoints:o}=Q(),c=le(n),{className:f,columns:t,columnSpacing:u,component:p="div",container:l=!1,direction:g="row",item:x=!1,rowSpacing:i,spacing:h=0,wrap:y="wrap",zeroMinWidth:$=!1}=c,C=pe(c,Oe),v=i||h,k=u||h,w=m.useContext(Z),A=l?t||12:w,P={},G=M({},C);o.keys.forEach(b=>{C[b]!=null&&(P[b]=C[b],delete G[b])});const W=M({},c,{columns:A,container:l,direction:g,item:x,rowSpacing:v,columnSpacing:k,wrap:y,zeroMinWidth:$,spacing:h},P,{breakpoints:o.keys}),E=Xe(W);return s.jsx(Z.Provider,{value:A,children:s.jsx(Qe,M({ownerState:W,className:de(E.root,f),as:p,ref:a},G))})}),z=Ye,re=({open:e,onClose:r,setOpen:a,userRoleName:n,setUserRoleName:o,setLoading:c,handleEditRow:f,setSelectedData:t,setError:u,error:p})=>{const{enqueueSnackbar:l}=J(),g=m.useCallback(async()=>{if((n==null?void 0:n.length)===0){u(!0);return}let x={UserTypeID:0,UserGroupCode:0,Name:n,IsActive:!0,IsAdmin:!0};const{data:i,status:h,message:y}=await ve(x);h?(l("Create success!"),o(""),c(!0),a(!e),f(i==null?void 0:i.UserTypeID),t(i==null?void 0:i.UserTypeID)):l(y,{variant:"error"})},[l,n]);return s.jsxs(xe,{fullWidth:!0,maxWidth:!1,open:e,onClose:r,PaperProps:{sx:{maxWidth:520}},children:[s.jsx(Te,{children:"Add User Access"}),s.jsx(Ae,{children:s.jsxs(De,{rowGap:1,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)"},my:2,children:[s.jsx(Ue,{id:"outlined-basic",label:"Role Name",variant:"outlined",onChange:x=>{o(x.target.value),u(!1)},value:n}),p&&s.jsx(X,{variant:"subtitle2",sx:{color:"red"},children:"Role Name is Required."})]})}),s.jsxs(Me,{children:[s.jsx(Y,{variant:"outlined",onClick:r,children:"Cancel"}),s.jsx(ee,{type:"submit",variant:"contained",onClick:()=>{g()},children:"Save"})]})]})};re.propTypes={open:S.bool,onClose:S.func};function te({row:e,headLabel:r,setData:a,data:n}){var c,f;const o=(t,u,p)=>{const{checked:l}=t.target,g=p.charAt(0).toUpperCase()+p.slice(1);a(x=>{const i=x.findIndex(h=>h.ModuleID===u);if(i!==-1){const h=[...x],y=h[i];return p==="view"?(h[i]={...y,[`Is${g}`]:l,IsAudit:!1,IsExport:!1,IsPrint:!1},h):(h[i]={...y,[`Is${g}`]:l},h)}else return[...x,{ModuleID:u,[`Is${g}`]:l}]})};return s.jsx(s.Fragment,{children:((c=e==null?void 0:e.SubModule)==null?void 0:c.length)>0&&((f=e==null?void 0:e.SubModule)==null?void 0:f.map(t=>{var u,p,l,g,x;return s.jsxs(fe.Fragment,{children:[s.jsxs(L,{children:[s.jsx(U,{colSpan:r==null?void 0:r.length,children:s.jsx(F,{primary:t==null?void 0:t.PageName,primaryTypographyProps:{typography:"subtitle1",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),((u=t==null?void 0:t.ForCheckBox)==null?void 0:u.length)>0&&((l=(p=t==null?void 0:t.ForCheckBox)==null?void 0:p.split(","))==null?void 0:l.map((i,h)=>s.jsx(U,{sx:{textAlign:"center"},children:s.jsx(_,{checked:n.some(y=>y.ModuleID===(t==null?void 0:t.ModuleID)&&y[`Is${i.charAt(0).toUpperCase()+i.slice(1)}`]),onChange:y=>o(y,t==null?void 0:t.ModuleID,i)})},h)))]}),((g=t==null?void 0:t.SubModule)==null?void 0:g.length)>0&&((x=t==null?void 0:t.SubModule)==null?void 0:x.map((i,h)=>{var y,$,C;return s.jsx(s.Fragment,{children:s.jsxs(L,{children:[s.jsx(U,{sx:{pl:5},colSpan:r==null?void 0:r.length,children:s.jsx(F,{primary:i==null?void 0:i.PageName,primaryTypographyProps:{typography:"subtitle1",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),((y=i==null?void 0:i.ForCheckBox)==null?void 0:y.length)>0&&((C=($=i==null?void 0:i.ForCheckBox)==null?void 0:$.split(","))==null?void 0:C.map((v,k)=>s.jsx(U,{sx:{textAlign:"center"},children:s.jsx(_,{checked:n.some(w=>w.ModuleID===(i==null?void 0:i.ModuleID)&&w[`Is${v.charAt(0).toUpperCase()+v.slice(1)}`]),onChange:w=>o(w,i==null?void 0:i.ModuleID,v)})},k)))]},h)})}))]},t==null?void 0:t.ModuleID)}))})}te.propTypes={row:S.object.isRequired,headLabel:S.array,setData:S.func.isRequired,data:S.array.isRequired};function ne({headLabel:e,sx:r}){return s.jsx(Be,{sx:r,style:{position:"sticky",top:"0",zIndex:"999"},children:s.jsx(L,{children:e.map(a=>s.jsx(U,{align:a.align||"center",sx:{width:200,minWidth:a.minWidth},children:a.label},a.id))})})}ne.propTypes={sx:S.object,onSort:S.func,orderBy:S.string,headLabel:S.array,rowCount:S.number,numSelected:S.number,onSelectAllRows:S.func,order:S.oneOf(["asc","desc"])};const es=()=>{m.useContext(ge);const{enqueueSnackbar:e}=J(),r=Q(),[a,n]=m.useState(!1),[o,c]=m.useState(""),[f,t]=m.useState(!0),[u,p]=m.useState(!1),[l,g]=m.useState([]),[x,i]=m.useState([]),[h,y]=m.useState(""),[$,C]=m.useState(""),[v,k]=m.useState([]),[w,A]=m.useState(!1),P=[{id:"pageName",label:"Page Name",alignRight:!1},{id:"isView",label:"View",alignRight:!0},{id:"isPrint",label:"Print",alignRight:!0},{id:"isExport",label:"Export",alignRight:!0}];m.useState({IsAudit:!1,IsExport:!1,IsPrint:!1});const G=async()=>{const d={Search:""},{data:j}=await $e(d);g(j==null?void 0:j.data),t(!1)},W=async d=>{const j={UserTypeID:d},{result:I,status:N}=await ke(j);N&&i(I)};m.useEffect(()=>{f&&G()},[f]);const E=()=>{A(!1),c(""),n(!a)},b=async()=>{try{p(!0);let d={...h,ModuleAccess:v};const{status:j,message:I}=await be(d);j?(p(!1),e("Save success!")):(p(!1),e(I,{variant:"error"}))}catch(d){console.error(d)}},q=m.useCallback(async d=>{let j={UserTypeID:d};const{result:I,status:N}=await we(j);N&&(W(d),k(I==null?void 0:I.ModuleAccess),y(I))},[]);return s.jsxs(s.Fragment,{children:[s.jsxs(Ie,{maxWidth:!1,sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:[s.jsx(Ce,{heading:"User Access",links:[{name:""}],action:s.jsx(s.Fragment,{children:s.jsx(ee,{type:"submit",variant:"contained",onClick:()=>{b()},loading:u,children:"Save User Access"})}),sx:{mb:{xs:3,md:3}}}),s.jsx(Re,{sx:{height:{xs:800,md:2},flexGrow:{md:1},display:{md:"flex"},flexDirection:{md:"column"}},children:s.jsxs(z,{container:!0,height:"100%",children:[s.jsx(z,{item:!0,xl:3,md:4,xs:6,height:"100%",children:s.jsxs(V,{sx:{p:2,borderRight:`solid 1px ${H(r.palette.grey[500],.24)}`,height:"100%"},children:[s.jsxs(V,{sx:{display:"flex",flexDirection:{xl:"row",md:"row",xs:"column"},justifyContent:"space-between",alignItems:"center",pb:2,borderBottom:`solid 1px ${H(r.palette.grey[500],.24)}`},children:[s.jsx(X,{variant:"h6",children:"Role List"}),s.jsx(Y,{component:he,onClick:()=>{n(!a)},variant:"contained",startIcon:s.jsx(me,{icon:"mingcute:add-line"}),children:"New Role"})]}),s.jsx(K,{children:s.jsx(V,{sx:{p:1,pr:2},children:l==null?void 0:l.map((d,j)=>s.jsx(ye,{disableGutters:!0,onClick:()=>{q(d==null?void 0:d.UserTypeID),C(d==null?void 0:d.UserTypeID)},sx:{p:1.5,borderRadius:1,...$===(d==null?void 0:d.UserTypeID)&&{bgcolor:"action.selected"}},children:s.jsx(F,{sx:{ml:2},primary:d==null?void 0:d.Name,primaryTypographyProps:{noWrap:!0,variant:"subtitle2"}})},j))})})]})}),s.jsx(z,{item:!0,xl:9,md:8,xs:6,height:"100%",children:(x==null?void 0:x.length)>0&&s.jsx(K,{children:s.jsx(Se,{sx:{width:"100%",overflow:"hidden",height:"100%"},children:s.jsx(Pe,{TableContainer:!0,sx:{maxHeight:680},children:s.jsxs(Ge,{stickyHeader:!0,children:[s.jsx(ne,{headLabel:P}),s.jsx(We,{children:x==null?void 0:x.map(d=>s.jsx(te,{row:d,setData:k,data:v},d.ModuleID))})]})})})})})]})})]}),s.jsx(re,{open:a,setOpen:n,handleEditRow:q,onClose:E,setUserRoleName:c,userRoleName:o,setLoading:t,setSelectedData:C,setError:A,error:w})]})},ss=es;function ws(){return s.jsxs(s.Fragment,{children:[s.jsx(je,{children:s.jsx("title",{children:"Setting | User Access List"})}),s.jsx(ss,{})]})}export{ws as default};
