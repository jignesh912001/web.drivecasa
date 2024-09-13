import{ab as I,r as b,j as e,G as p,T as F,q as C,i as A,aV as re,S as h,F as ae,h as z,K as O,f as i,v as _,d as T,C as H,M as S,k as j,W as te,I as k,aW as ie,c as P,J as G,x as M,L as le,l as ce,m as de,p as U,aX as pe,aY as me,aZ as xe,a_ as ue,aM as he,H as je}from"./index-d_hKz2zC.js";import{C as be}from"./custom-breadcrumbs-m3uTbUbB.js";import{c as W,a as f,f as ye,j as ge,u as q,F as N,k as fe,l as we,R as w,m as Ce,o as $,C as ve,n as Se}from"./rhf-autocomplete-_8pQr_Sz.js";import{d as Pe,b as Ae}from"./format-number-f2Nv9W09.js";import{C as v}from"./Card-L-UFOQRR.js";import{L as D}from"./LoadingButton-pq5LNWCS.js";import{P as Te,a as ke,b as Ie}from"./new-password-icon-WHlXJRaB.js";import{A as Fe,a as qe,b as Ne}from"./address-list-dialog-URQcSsTZ.js";import{T as De}from"./TextField-e_4V3qEH.js";import{C as L}from"./CardHeader-BM7-LZab.js";import{P as Le}from"./payment-new-card-dialog-YumFhinX.js";import{b as Re}from"./format-time-z29mBrbB.js";import{F as Be}from"./FormControlLabel-D_dWO09R.js";import{S as Ee}from"./Switch-JVioLfQ0.js";import{T as Ue,a as ze}from"./Tabs-gZf5pLFf.js";import"./index-q81m-9gd.js";import"./upload-avatar-x1OF_FD8.js";import"./fade-ls6DDpMI.js";import"./image-91fQnaiI.js";import"./Select-2T8XbQkD.js";import"./Checkbox-18nfoWP1.js";import"./SwitchBase-dTKHZsQn.js";import"./Chip-zv-zFcnm.js";import"./editor-SAG00BKs.js";import"./Radio-h2a34wQq.js";import"./Autocomplete-kTg74uCO.js";import"./Close-xsTIKsBy.js";import"./CircularProgress-HMYL4JU-.js";import"./DialogTitle-1n2MjgSP.js";import"./dialogTitleClasses-eDgHBsb0.js";import"./DialogContent-djGsL5zT.js";import"./DialogActions-61XMFn37.js";import"./KeyboardArrowRight-UESfApTO.js";function Oe(){const{enqueueSnackbar:o}=I(),{user:s}=ae(),r=W().shape({displayName:f().required("Name is required"),email:f().required("Email is required").email("Email must be a valid email address"),photoURL:ye().nullable().required("Avatar is required"),phoneNumber:f().required("Phone number is required"),country:f().required("Country is required"),address:f().required("Address is required"),state:f().required("State is required"),city:f().required("City is required"),zipCode:f().required("Zip code is required"),about:f().required("About is required"),isPublic:ge()}),a={displayName:(s==null?void 0:s.displayName)||"",email:(s==null?void 0:s.email)||"",photoURL:(s==null?void 0:s.photoURL)||null,phoneNumber:(s==null?void 0:s.phoneNumber)||"",country:(s==null?void 0:s.country)||"",address:(s==null?void 0:s.address)||"",state:(s==null?void 0:s.state)||"",city:(s==null?void 0:s.city)||"",zipCode:(s==null?void 0:s.zipCode)||"",about:(s==null?void 0:s.about)||"",isPublic:(s==null?void 0:s.isPublic)||!1},c=q({resolver:$(r),defaultValues:a}),{setValue:u,handleSubmit:y,formState:{isSubmitting:l}}=c,x=y(async t=>{try{await new Promise(m=>setTimeout(m,500)),o("Update success!"),console.info("DATA",t)}catch(m){console.error(m)}}),n=b.useCallback(t=>{const m=t[0],g=Object.assign(m,{preview:URL.createObjectURL(m)});m&&u("photoURL",g,{shouldValidate:!0})},[u]);return e.jsx(N,{methods:c,onSubmit:x,children:e.jsxs(p,{container:!0,spacing:3,children:[e.jsx(p,{xs:12,md:4,children:e.jsxs(v,{sx:{pt:10,pb:5,px:3,textAlign:"center"},children:[e.jsx(fe,{name:"photoURL",maxSize:3145728,onDrop:n,helperText:e.jsxs(F,{variant:"caption",sx:{mt:3,mx:"auto",display:"block",textAlign:"center",color:"text.disabled"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",e.jsx("br",{})," max size of ",Pe(3145728)]})}),e.jsx(we,{name:"isPublic",labelPlacement:"start",label:"Public Profile",sx:{mt:5}}),e.jsx(C,{variant:"soft",color:"error",sx:{mt:3},children:"Delete User"})]})}),e.jsx(p,{xs:12,md:8,children:e.jsxs(v,{sx:{p:3},children:[e.jsxs(A,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[e.jsx(w,{name:"displayName",label:"Name"}),e.jsx(w,{name:"email",label:"Email Address"}),e.jsx(w,{name:"phoneNumber",label:"Phone Number"}),e.jsx(w,{name:"address",label:"Address"}),e.jsx(Ce,{name:"country",type:"country",label:"Country",placeholder:"Choose a country",options:re.map(t=>t.label),getOptionLabel:t=>t}),e.jsx(w,{name:"state",label:"State/Region"}),e.jsx(w,{name:"city",label:"City"}),e.jsx(w,{name:"zipCode",label:"Zip/Code"})]}),e.jsxs(h,{spacing:3,alignItems:"flex-end",sx:{mt:3},children:[e.jsx(w,{name:"about",multiline:!0,rows:4,label:"About"}),e.jsx(D,{type:"submit",variant:"contained",loading:l,children:"Save Changes"})]})]})})]})})}function B({card:o,sx:s,...r}){const a=z();return e.jsxs(e.Fragment,{children:[e.jsxs(h,{spacing:1,component:O,variant:"outlined",sx:{p:2.5,width:1,position:"relative",...s},...r,children:[e.jsxs(h,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(i,{icon:o.cardType==="visa"&&"logos:visa"||"logos:mastercard",width:36}),o.primary&&e.jsx(_,{color:"info",children:"Default"})]}),e.jsx(F,{variant:"subtitle2",children:o.cardNumber}),e.jsx(T,{onClick:a.onOpen,sx:{top:8,right:8,position:"absolute"},children:e.jsx(i,{icon:"eva:more-vertical-fill"})})]}),e.jsxs(H,{open:a.open,onClose:a.onClose,children:[e.jsxs(S,{onClick:a.onClose,children:[e.jsx(i,{icon:"eva:star-fill"}),"Set as primary"]}),e.jsxs(S,{onClick:a.onClose,children:[e.jsx(i,{icon:"solar:pen-bold"}),"Edit"]}),e.jsxs(S,{onClick:a.onClose,sx:{color:"error.main"},children:[e.jsx(i,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})]})}B.propTypes={card:j.object,sx:j.object};function V({open:o,list:s,onClose:r,selected:a,onSelect:c}){const[u,y]=b.useState(""),x=!_e({inputData:s,query:u}).length&&!!u,n=b.useCallback(g=>{y(g.target.value)},[]),t=b.useCallback(g=>{c(g),y(""),r()},[r,c]),m=e.jsx(h,{spacing:2.5,sx:{p:3},children:s.map(g=>e.jsx(B,{card:g,onClick:()=>t(g),sx:{cursor:"pointer",...a(g.id)&&{boxShadow:R=>`0 0 0 2px ${R.palette.text.primary}`}}},g.id))});return e.jsxs(te,{fullWidth:!0,maxWidth:"xs",open:o,onClose:r,children:[e.jsxs(h,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{p:3,pr:1.5},children:[e.jsx(F,{variant:"h6",children:" Cards "}),e.jsx(C,{size:"small",startIcon:e.jsx(i,{icon:"mingcute:add-line"}),sx:{alignSelf:"flex-end"},children:"New"})]}),e.jsx(h,{sx:{px:3},children:e.jsx(De,{value:u,onChange:n,placeholder:"Search...",InputProps:{startAdornment:e.jsx(k,{position:"start",children:e.jsx(i,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})}),x?e.jsx(ie,{query:u,sx:{px:3,pt:5,pb:10}}):m]})}V.propTypes={list:j.array,onClose:j.func,onSelect:j.func,open:j.bool,selected:j.func};function _e({inputData:o,query:s}){return s?o.filter(r=>r.cardNumber.toLowerCase().indexOf(s.toLowerCase())!==-1):o}function Z({cardList:o,addressBook:s,plans:r}){const a=P(),c=P(),u=s.filter(d=>d.primary)[0],y=o.filter(d=>d.primary)[0],[l,x]=b.useState(""),[n,t]=b.useState(u),[m,g]=b.useState(y),R=b.useCallback(d=>{r.filter(ne=>ne.primary)[0].subscription!==d&&x(d)},[r]),ee=b.useCallback(d=>{t(d)},[]),se=b.useCallback(d=>{g(d)},[]),oe=r.map(d=>e.jsx(p,{xs:12,md:4,children:e.jsxs(h,{component:O,variant:"outlined",onClick:()=>R(d.subscription),sx:{p:2.5,position:"relative",cursor:"pointer",...d.primary&&{opacity:.48,cursor:"default"},...d.subscription===l&&{boxShadow:E=>`0 0 0 2px ${E.palette.text.primary}`}},children:[d.primary&&e.jsx(_,{color:"info",startIcon:e.jsx(i,{icon:"eva:star-fill"}),sx:{position:"absolute",top:8,right:8},children:"Current"}),e.jsxs(A,{sx:{width:48,height:48},children:[d.subscription==="basic"&&e.jsx(Te,{}),d.subscription==="starter"&&e.jsx(ke,{}),d.subscription==="premium"&&e.jsx(Ie,{})]}),e.jsx(A,{sx:{typography:"subtitle2",mt:2,mb:.5,textTransform:"capitalize"},children:d.subscription}),e.jsxs(h,{direction:"row",alignItems:"center",sx:{typography:"h4"},children:[d.price||"Free",!!d.price&&e.jsx(A,{component:"span",sx:{typography:"body2",color:"text.disabled",ml:.5},children:"/mo"})]})]})},d.subscription));return e.jsxs(e.Fragment,{children:[e.jsxs(v,{children:[e.jsx(L,{title:"Plan"}),e.jsx(p,{container:!0,spacing:2,sx:{p:3},children:oe}),e.jsxs(h,{spacing:2,sx:{p:3,pt:0,typography:"body2"},children:[e.jsxs(p,{container:!0,spacing:{xs:.5,md:2},children:[e.jsx(p,{xs:12,md:4,sx:{color:"text.secondary"},children:"Plan"}),e.jsx(p,{xs:12,md:8,sx:{typography:"subtitle2",textTransform:"capitalize"},children:l||"-"})]}),e.jsxs(p,{container:!0,spacing:{xs:.5,md:2},children:[e.jsx(p,{xs:12,md:4,sx:{color:"text.secondary"},children:"Billing name"}),e.jsx(p,{xs:12,md:8,children:e.jsx(C,{onClick:a.onTrue,endIcon:e.jsx(i,{width:16,icon:"eva:arrow-ios-downward-fill"}),sx:{typography:"subtitle2",p:0,borderRadius:0},children:n==null?void 0:n.name})})]}),e.jsxs(p,{container:!0,spacing:{xs:.5,md:2},children:[e.jsx(p,{xs:12,md:4,sx:{color:"text.secondary"},children:"Billing address"}),e.jsx(p,{xs:12,md:8,sx:{color:"text.secondary"},children:n==null?void 0:n.fullAddress})]}),e.jsxs(p,{container:!0,spacing:{xs:.5,md:2},children:[e.jsx(p,{xs:12,md:4,sx:{color:"text.secondary"},children:"Billing phone number"}),e.jsx(p,{xs:12,md:8,sx:{color:"text.secondary"},children:n==null?void 0:n.phoneNumber})]}),e.jsxs(p,{container:!0,spacing:{xs:.5,md:2},children:[e.jsx(p,{xs:12,md:4,sx:{color:"text.secondary"},children:"Payment method"}),e.jsx(p,{xs:12,md:8,children:e.jsx(C,{onClick:c.onTrue,endIcon:e.jsx(i,{width:16,icon:"eva:arrow-ios-downward-fill"}),sx:{typography:"subtitle2",p:0,borderRadius:0},children:m==null?void 0:m.cardNumber})})]})]}),e.jsx(G,{sx:{borderStyle:"dashed"}}),e.jsxs(h,{spacing:1.5,direction:"row",justifyContent:"flex-end",sx:{p:3},children:[e.jsx(C,{variant:"outlined",children:"Cancel Plan"}),e.jsx(C,{variant:"contained",children:"Upgrade Plan"})]})]}),e.jsx(V,{list:o,open:c.value,onClose:c.onFalse,selected:d=>(m==null?void 0:m.id)===d,onSelect:se}),e.jsx(Fe,{list:s,open:a.value,onClose:a.onFalse,selected:d=>(n==null?void 0:n.id)===d,onSelect:ee,action:e.jsx(C,{size:"small",startIcon:e.jsx(i,{icon:"mingcute:add-line"}),sx:{alignSelf:"flex-end"},children:"New"})})]})}Z.propTypes={addressBook:j.array,cardList:j.array,plans:j.array};function Y({cards:o}){const s=P();return e.jsxs(e.Fragment,{children:[e.jsxs(v,{sx:{my:3},children:[e.jsx(L,{title:"Payment Method",action:e.jsx(C,{size:"small",color:"primary",startIcon:e.jsx(i,{icon:"mingcute:add-line"}),onClick:s.onTrue,children:"New Card"})}),e.jsx(A,{rowGap:2.5,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},sx:{p:3},children:o.map(r=>e.jsx(B,{card:r},r.id))})]}),e.jsx(Le,{open:s.value,onClose:s.onFalse})]})}Y.propTypes={cards:j.array};function J({invoices:o}){const s=P();return e.jsxs(v,{children:[e.jsx(L,{title:"Invoice History"}),e.jsxs(h,{spacing:1.5,sx:{px:3,pt:3},children:[(s.value?o:o.slice(0,8)).map(r=>e.jsxs(h,{direction:"row",alignItems:"center",children:[e.jsx(M,{primary:r.invoiceNumber,secondary:Re(r.createdAt),primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption",color:"text.disabled"}}),e.jsx(F,{variant:"body2",sx:{textAlign:"right",mr:5},children:Ae(r.price)}),e.jsx(le,{color:"inherit",underline:"always",variant:"body2",href:"#",children:"PDF"})]},r.id)),e.jsx(G,{sx:{borderStyle:"dashed"}})]}),e.jsx(h,{alignItems:"flex-start",sx:{p:2},children:e.jsx(C,{size:"small",color:"inherit",startIcon:e.jsx(i,{icon:s.value?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill"}),onClick:s.onToggle,children:s.value?"Show Less":"Show More"})})]})}J.propTypes={invoices:j.array};function K({addressBook:o}){const[s,r]=b.useState(""),a=z(),c=P(),u=b.useCallback(x=>{console.info("ADDRESS",x)},[]),y=b.useCallback((x,n)=>{a.onOpen(x),r(n)},[a]),l=b.useCallback(()=>{a.onClose(),r("")},[a]);return e.jsxs(e.Fragment,{children:[e.jsxs(v,{children:[e.jsx(L,{title:"Address Book",action:e.jsx(C,{size:"small",color:"primary",startIcon:e.jsx(i,{icon:"mingcute:add-line"}),onClick:c.onTrue,children:"Address"})}),e.jsx(h,{spacing:2.5,sx:{p:3},children:o.map(x=>e.jsx(qe,{variant:"outlined",address:x,action:e.jsx(T,{onClick:n=>{y(n,`${x.id}`)},sx:{position:"absolute",top:8,right:8},children:e.jsx(i,{icon:"eva:more-vertical-fill"})}),sx:{p:2.5,borderRadius:1}},x.id))})]}),e.jsxs(H,{open:a.open,onClose:l,children:[e.jsxs(S,{onClick:()=>{l(),console.info("SET AS PRIMARY",s)},children:[e.jsx(i,{icon:"eva:star-fill"}),"Set as primary"]}),e.jsxs(S,{onClick:()=>{l(),console.info("EDIT",s)},children:[e.jsx(i,{icon:"solar:pen-bold"}),"Edit"]}),e.jsxs(S,{onClick:()=>{l(),console.info("DELETE",s)},sx:{color:"error.main"},children:[e.jsx(i,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]}),e.jsx(Ne,{open:c.value,onClose:c.onFalse,onCreate:u})]})}K.propTypes={addressBook:j.array};function X({cards:o,plans:s,invoices:r,addressBook:a}){return e.jsxs(p,{container:!0,spacing:5,disableEqualOverflow:!0,children:[e.jsxs(p,{xs:12,md:8,children:[e.jsx(Z,{plans:s,cardList:o,addressBook:a}),e.jsx(Y,{cards:o}),e.jsx(K,{addressBook:a})]}),e.jsx(p,{xs:12,md:4,children:e.jsx(J,{invoices:r})})]})}X.propTypes={addressBook:j.array,cards:j.array,invoices:j.array,plans:j.array};function Q({socialLinks:o}){const{enqueueSnackbar:s}=I(),r={facebook:o.facebook,instagram:o.instagram,linkedin:o.linkedin,twitter:o.twitter},a=q({defaultValues:r}),{handleSubmit:c,formState:{isSubmitting:u}}=a,y=c(async l=>{try{await new Promise(x=>setTimeout(x,500)),s("Update success!"),console.info("DATA",l)}catch(x){console.error(x)}});return e.jsx(N,{methods:a,onSubmit:y,children:e.jsxs(h,{component:v,spacing:3,sx:{p:3},children:[Object.keys(o).map(l=>e.jsx(w,{name:l,InputProps:{startAdornment:e.jsx(k,{position:"start",children:e.jsx(i,{width:24,icon:l==="facebook"&&"eva:facebook-fill"||l==="instagram"&&"ant-design:instagram-filled"||l==="linkedin"&&"eva:linkedin-fill"||l==="twitter"&&"eva:twitter-fill"||"",color:l==="facebook"&&"#1877F2"||l==="instagram"&&"#DF3E30"||l==="linkedin"&&"#006097"||l==="twitter"&&"#1C9CEA"||""})})}},l)),e.jsx(D,{type:"submit",variant:"contained",loading:u,sx:{ml:"auto"},children:"Save Changes"})]})})}Q.propTypes={socialLinks:j.object};const He=[{subheader:"Activity",caption:"Donec mi odio, faucibus at, scelerisque quis",items:[{id:"activity_comments",label:"Email me when someone comments onmy article"},{id:"activity_answers",label:"Email me when someone answers on my form"},{id:"activityFollows",label:"Email me hen someone follows me"}]},{subheader:"Application",caption:"Donec mi odio, faucibus at, scelerisque quis",items:[{id:"application_news",label:"News and announcements"},{id:"application_product",label:"Weekly product updates"},{id:"application_blog",label:"Weekly blog digest"}]}];function Ge(){const{enqueueSnackbar:o}=I(),s=q({defaultValues:{selected:["activity_comments","application_product"]}}),{watch:r,control:a,handleSubmit:c,formState:{isSubmitting:u}}=s,y=r(),l=c(async n=>{try{await new Promise(t=>setTimeout(t,500)),o("Update success!"),console.info("DATA",n)}catch(t){console.error(t)}}),x=(n,t)=>n.includes(t)?n.filter(m=>m!==t):[...n,t];return e.jsx(N,{methods:s,onSubmit:l,children:e.jsxs(h,{component:v,spacing:3,sx:{p:3},children:[He.map(n=>e.jsxs(p,{container:!0,spacing:3,children:[e.jsx(p,{xs:12,md:4,children:e.jsx(M,{primary:n.subheader,secondary:n.caption,primaryTypographyProps:{typography:"h6",mb:.5},secondaryTypographyProps:{component:"span"}})}),e.jsx(p,{xs:12,md:8,children:e.jsx(h,{spacing:1,sx:{p:3,borderRadius:2,bgcolor:"background.neutral"},children:e.jsx(ve,{name:"selected",control:a,render:({field:t})=>e.jsx(e.Fragment,{children:n.items.map(m=>e.jsx(Be,{label:m.label,labelPlacement:"start",control:e.jsx(Ee,{checked:t.value.includes(m.id),onChange:()=>t.onChange(x(y.selected,m.id))}),sx:{m:0,width:1,justifyContent:"space-between"}},m.id))})})})})]},n.subheader)),e.jsx(D,{type:"submit",variant:"contained",loading:u,sx:{ml:"auto"},children:"Save Changes"})]})})}function Me(){const{enqueueSnackbar:o}=I(),s=P(),r=W().shape({oldPassword:f().required("Old Password is required"),newPassword:f().required("New Password is required").min(6,"Password must be at least 6 characters").test("no-match","New password must be different than old password",(n,{parent:t})=>n!==t.oldPassword),confirmNewPassword:f().oneOf([Se("newPassword")],"Passwords must match")}),a={oldPassword:"",newPassword:"",confirmNewPassword:""},c=q({resolver:$(r),defaultValues:a}),{reset:u,handleSubmit:y,formState:{isSubmitting:l}}=c,x=y(async n=>{try{await new Promise(t=>setTimeout(t,500)),u(),o("Update success!"),console.info("DATA",n)}catch(t){console.error(t)}});return e.jsx(N,{methods:c,onSubmit:x,children:e.jsxs(h,{component:v,spacing:3,sx:{p:3},children:[e.jsx(w,{name:"oldPassword",type:s.value?"text":"password",label:"Old Password",InputProps:{endAdornment:e.jsx(k,{position:"end",children:e.jsx(T,{onClick:s.onToggle,edge:"end",children:e.jsx(i,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(w,{name:"newPassword",label:"New Password",type:s.value?"text":"password",InputProps:{endAdornment:e.jsx(k,{position:"end",children:e.jsx(T,{onClick:s.onToggle,edge:"end",children:e.jsx(i,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})},helperText:e.jsxs(h,{component:"span",direction:"row",alignItems:"center",children:[e.jsx(i,{icon:"eva:info-fill",width:16,sx:{mr:.5}})," Password must be minimum 6+"]})}),e.jsx(w,{name:"confirmNewPassword",type:s.value?"text":"password",label:"Confirm New Password",InputProps:{endAdornment:e.jsx(k,{position:"end",children:e.jsx(T,{onClick:s.onToggle,edge:"end",children:e.jsx(i,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(D,{type:"submit",variant:"contained",loading:l,sx:{ml:"auto"},children:"Save Changes"})]})})}const We=[{value:"general",label:"General",icon:e.jsx(i,{icon:"solar:user-id-bold",width:24})},{value:"billing",label:"Billing",icon:e.jsx(i,{icon:"solar:bill-list-bold",width:24})},{value:"notifications",label:"Notifications",icon:e.jsx(i,{icon:"solar:bell-bing-bold",width:24})},{value:"social",label:"Social links",icon:e.jsx(i,{icon:"solar:share-bold",width:24})},{value:"security",label:"Security",icon:e.jsx(i,{icon:"ic:round-vpn-key",width:24})}];function $e(){const o=ce(),[s,r]=b.useState("general"),a=b.useCallback((c,u)=>{r(u)},[]);return e.jsxs(de,{maxWidth:o.themeStretch?!1:"lg",children:[e.jsx(be,{heading:"Account",links:[{name:"Dashboard",href:U.dashboard.root},{name:"User",href:U.dashboard.user.root},{name:"Account"}],sx:{mb:{xs:3,md:5}}}),e.jsx(Ue,{value:s,onChange:a,sx:{mb:{xs:3,md:5}},children:We.map(c=>e.jsx(ze,{label:c.label,icon:c.icon,value:c.value},c.value))}),s==="general"&&e.jsx(Oe,{}),s==="billing"&&e.jsx(X,{plans:pe,cards:me,invoices:xe,addressBook:ue}),s==="notifications"&&e.jsx(Ge,{}),s==="social"&&e.jsx(Q,{socialLinks:he.socialLinks}),s==="security"&&e.jsx(Me,{})]})}function As(){return e.jsxs(e.Fragment,{children:[e.jsx(je,{children:e.jsx("title",{children:" Dashboard: Account Settings"})}),e.jsx($e,{})]})}export{As as default};
