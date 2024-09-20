import{a as ge,ab as Y,r as b,p as G,j as e,G as L,v as U,i as m,T as C,S as c,q as D,aV as ee,k as l,l as fe,aS as Ce,m as ve,W as we,aU as ke,M as I,c as Z,h as B,A as q,x as E,V as Te,d as v,f as d,C as $,I as H,K as oe,g as M,a$ as Se,o as A,b0 as _,J as se,L as P,X as ae,ac as Fe,F as Ie,n as qe,aW as Re}from"./index-WqsZrxyt.js";import{C as Ae}from"./custom-breadcrumbs-QEqK1FU9.js";import{c as ie,a as j,f as Pe,j as Le,u as te,F as le,k as De,C as Ee,l as Ne,R as u,m as ne,o as re,e as ze}from"./rhf-autocomplete-VkH9U44y.js";import{d as We,c as N,f as J}from"./format-number-NO6AdYpl.js";import{C as k}from"./Card-O5fbCiLF.js";import{F as de}from"./FormControlLabel-AH9kGeIu.js";import{S as Ge}from"./Switch-xDKdgofk.js";import{L as ce}from"./LoadingButton-CqpqJIWi.js";import{C as Ve}from"./confirm-dialog-MYlpUTbV.js";import{D as Oe}from"./DialogTitle-rV3M0Rcu.js";import{D as Be}from"./DialogContent-eTSRr2KN.js";import{A as $e}from"./Alert-QTSj5uLM.js";import{D as He}from"./DialogActions-b1hCZYzf.js";import{a as Me}from"./table-pagination-custom-GC-hbQqr.js";import{T as R}from"./TablePagination-8T-6Azdf.js";import{C as K}from"./Checkbox-1fwRKLt1.js";import{F as _e,I as Ke,T as pe}from"./TextField-2tCbVTps.js";import{S as Qe,O as Ze}from"./Select-HPWYeYpR.js";import{C as W}from"./Chip-rCFgLS50.js";import{I as Q}from"./image-x2LhMh-p.js";import{b as V}from"./format-time-_tAHxme9.js";import{C as O}from"./CardHeader-MvVLinMv.js";import{A as Je}from"./AvatarGroup-WOHrDG8x.js";import{F as X}from"./Fab-wAp55JMq.js";import{u as Xe,L as Ye}from"./use-light-box-sxGuWiBe.js";function xe({currentUser:o}){const s=ge(),{enqueueSnackbar:a}=Y(),i=ie().shape({name:j().required("Name is required"),email:j().required("Email is required").email("Email must be a valid email address"),phoneNumber:j().required("Phone number is required"),address:j().required("Address is required"),country:j().required("Country is required"),company:j().required("Company is required"),state:j().required("State is required"),city:j().required("City is required"),role:j().required("Role is required"),zipCode:j().required("Zip code is required"),avatarUrl:Pe().nullable().required("Avatar is required"),status:j(),isVerified:Le()}),t=b.useMemo(()=>({name:(o==null?void 0:o.name)||"",city:(o==null?void 0:o.city)||"",role:(o==null?void 0:o.role)||"",email:(o==null?void 0:o.email)||"",state:(o==null?void 0:o.state)||"",status:(o==null?void 0:o.status)||"",address:(o==null?void 0:o.address)||"",country:(o==null?void 0:o.country)||"",zipCode:(o==null?void 0:o.zipCode)||"",company:(o==null?void 0:o.company)||"",avatarUrl:(o==null?void 0:o.avatarUrl)||null,phoneNumber:(o==null?void 0:o.phoneNumber)||"",isVerified:(o==null?void 0:o.isVerified)||!0}),[o]),n=te({resolver:re(i),defaultValues:t}),{reset:r,watch:h,control:x,setValue:y,handleSubmit:T,formState:{isSubmitting:g}}=n,f=h(),S=T(async w=>{try{await new Promise(F=>setTimeout(F,500)),r(),a(o?"Update success!":"Create success!"),s.push(G.dashboard.user.list),console.info("DATA",w)}catch(F){console.error(F)}}),p=b.useCallback(w=>{const F=w[0],be=Object.assign(F,{preview:URL.createObjectURL(F)});F&&y("avatarUrl",be,{shouldValidate:!0})},[y]);return e.jsx(le,{methods:n,onSubmit:S,children:e.jsxs(L,{container:!0,spacing:3,children:[e.jsx(L,{xs:12,md:4,children:e.jsxs(k,{sx:{pt:10,pb:5,px:3},children:[o&&e.jsx(U,{color:f.status==="active"&&"success"||f.status==="banned"&&"error"||"warning",sx:{position:"absolute",top:24,right:24},children:f.status}),e.jsx(m,{sx:{mb:5},children:e.jsx(De,{name:"avatarUrl",maxSize:3145728,onDrop:p,helperText:e.jsxs(C,{variant:"caption",sx:{mt:3,mx:"auto",display:"block",textAlign:"center",color:"text.disabled"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",e.jsx("br",{})," max size of ",We(3145728)]})})}),o&&e.jsx(de,{labelPlacement:"start",control:e.jsx(Ee,{name:"status",control:x,render:({field:w})=>e.jsx(Ge,{...w,checked:w.value!=="active",onChange:F=>w.onChange(F.target.checked?"banned":"active")})}),label:e.jsxs(e.Fragment,{children:[e.jsx(C,{variant:"subtitle2",sx:{mb:.5},children:"Banned"}),e.jsx(C,{variant:"body2",sx:{color:"text.secondary"},children:"Apply disable account"})]}),sx:{mx:0,mb:3,width:1,justifyContent:"space-between"}}),e.jsx(Ne,{name:"isVerified",labelPlacement:"start",label:e.jsxs(e.Fragment,{children:[e.jsx(C,{variant:"subtitle2",sx:{mb:.5},children:"Email Verified"}),e.jsx(C,{variant:"body2",sx:{color:"text.secondary"},children:"Disabling this will automatically send the user a verification email"})]}),sx:{mx:0,width:1,justifyContent:"space-between"}}),o&&e.jsx(c,{justifyContent:"center",alignItems:"center",sx:{mt:3},children:e.jsx(D,{variant:"soft",color:"error",children:"Delete User"})})]})}),e.jsx(L,{xs:12,md:8,children:e.jsxs(k,{sx:{p:3},children:[e.jsxs(m,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[e.jsx(u,{name:"name",label:"Full Name"}),e.jsx(u,{name:"email",label:"Email Address"}),e.jsx(u,{name:"phoneNumber",label:"Phone Number"}),e.jsx(ne,{name:"country",type:"country",label:"Country",placeholder:"Choose a country",fullWidth:!0,options:ee.map(w=>w.label),getOptionLabel:w=>w}),e.jsx(u,{name:"state",label:"State/Region"}),e.jsx(u,{name:"city",label:"City"}),e.jsx(u,{name:"address",label:"Address"}),e.jsx(u,{name:"zipCode",label:"Zip/Code"}),e.jsx(u,{name:"company",label:"Company"}),e.jsx(u,{name:"role",label:"Role"})]}),e.jsx(c,{alignItems:"flex-end",sx:{mt:3},children:e.jsx(ce,{type:"submit",variant:"contained",loading:g,children:o?"Save Changes":"Create User"})})]})})]})})}xe.propTypes={currentUser:l.object};function Ue({id:o}){const s=fe(),a=Ce.find(i=>i.id===o);return e.jsxs(ve,{maxWidth:s.themeStretch?!1:"lg",children:[e.jsx(Ae,{heading:"Edit",links:[{name:"Dashboard",href:G.dashboard.root},{name:"User",href:G.dashboard.user.root},{name:a==null?void 0:a.name}],sx:{mb:{xs:3,md:5}}}),e.jsx(xe,{currentUser:a})]})}Ue.propTypes={id:l.string};function me({currentUser:o,open:s,onClose:a}){const{enqueueSnackbar:i}=Y(),t=ie().shape({name:j().required("Name is required"),email:j().required("Email is required").email("Email must be a valid email address"),phoneNumber:j().required("Phone number is required"),address:j().required("Address is required"),country:j().required("Country is required"),company:j().required("Company is required"),state:j().required("State is required"),city:j().required("City is required"),role:j().required("Role is required")}),n=b.useMemo(()=>({name:(o==null?void 0:o.name)||"",email:(o==null?void 0:o.email)||"",phoneNumber:(o==null?void 0:o.phoneNumber)||"",address:(o==null?void 0:o.address)||"",country:(o==null?void 0:o.country)||"",state:(o==null?void 0:o.state)||"",city:(o==null?void 0:o.city)||"",zipCode:(o==null?void 0:o.zipCode)||"",status:o==null?void 0:o.status,company:(o==null?void 0:o.company)||"",role:(o==null?void 0:o.role)||""}),[o]),r=te({resolver:re(t),defaultValues:n}),{reset:h,handleSubmit:x,formState:{isSubmitting:y}}=r,T=x(async g=>{try{await new Promise(f=>setTimeout(f,500)),h(),a(),i("Update success!"),console.info("DATA",g)}catch(f){console.error(f)}});return e.jsx(we,{fullWidth:!0,maxWidth:!1,open:s,onClose:a,PaperProps:{sx:{maxWidth:720}},children:e.jsxs(le,{methods:r,onSubmit:T,children:[e.jsx(Oe,{children:"Quick Update"}),e.jsxs(Be,{children:[e.jsx($e,{variant:"outlined",severity:"info",sx:{mb:3},children:"Account is waiting for confirmation"}),e.jsxs(m,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[e.jsx(ze,{name:"status",label:"Status",children:ke.map(g=>e.jsx(I,{value:g.value,children:g.label},g.value))}),e.jsx(m,{sx:{display:{xs:"none",sm:"block"}}}),e.jsx(u,{name:"name",label:"Full Name"}),e.jsx(u,{name:"email",label:"Email Address"}),e.jsx(u,{name:"phoneNumber",label:"Phone Number"}),e.jsx(ne,{name:"country",type:"country",label:"Country",placeholder:"Choose a country",fullWidth:!0,options:ee.map(g=>g.label),getOptionLabel:g=>g}),e.jsx(u,{name:"state",label:"State/Region"}),e.jsx(u,{name:"city",label:"City"}),e.jsx(u,{name:"address",label:"Address"}),e.jsx(u,{name:"zipCode",label:"Zip/Code"}),e.jsx(u,{name:"company",label:"Company"}),e.jsx(u,{name:"role",label:"Role"})]})]}),e.jsxs(He,{children:[e.jsx(D,{variant:"outlined",onClick:a,children:"Cancel"}),e.jsx(ce,{type:"submit",variant:"contained",loading:y,children:"Update"})]})]})})}me.propTypes={open:l.bool,onClose:l.func,currentUser:l.object};function eo({row:o,selected:s,onEditRow:a,onSelectRow:i,onDeleteRow:t}){const{name:n,avatarUrl:r,company:h,role:x,status:y,email:T,phoneNumber:g}=o,f=Z(),S=Z(),p=B();return e.jsxs(e.Fragment,{children:[e.jsxs(Me,{hover:!0,selected:s,children:[e.jsx(R,{padding:"checkbox",children:e.jsx(K,{checked:s,onClick:i})}),e.jsxs(R,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(q,{alt:n,src:r,sx:{mr:2}}),e.jsx(E,{primary:n,secondary:T,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled"}})]}),e.jsx(R,{sx:{whiteSpace:"nowrap"},children:g}),e.jsx(R,{sx:{whiteSpace:"nowrap"},children:h}),e.jsx(R,{sx:{whiteSpace:"nowrap"},children:x}),e.jsx(R,{children:e.jsx(U,{variant:"soft",color:y==="active"&&"success"||y==="pending"&&"warning"||y==="banned"&&"error"||"default",children:y})}),e.jsxs(R,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:[e.jsx(Te,{title:"Quick Edit",placement:"top",arrow:!0,children:e.jsx(v,{color:S.value?"inherit":"default",onClick:S.onTrue,children:e.jsx(d,{icon:"solar:pen-bold"})})}),e.jsx(v,{color:p.open?"inherit":"default",onClick:p.onOpen,children:e.jsx(d,{icon:"eva:more-vertical-fill"})})]})]}),e.jsx(me,{currentUser:o,open:S.value,onClose:S.onFalse}),e.jsxs($,{open:p.open,onClose:p.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(I,{onClick:()=>{f.onTrue(),p.onClose()},sx:{color:"error.main"},children:[e.jsx(d,{icon:"solar:trash-bin-trash-bold"}),"Delete"]}),e.jsxs(I,{onClick:()=>{a(),p.onClose()},children:[e.jsx(d,{icon:"solar:pen-bold"}),"Edit"]})]}),e.jsx(Ve,{open:f.value,onClose:f.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(D,{variant:"contained",color:"error",onClick:t,children:"Delete"})})]})}eo.propTypes={onDeleteRow:l.func,onEditRow:l.func,onSelectRow:l.func,row:l.object,selected:l.bool};function oo({filters:o,onFilters:s,roleOptions:a}){const i=B(),t=b.useCallback(r=>{s("name",r.target.value)},[s]),n=b.useCallback(r=>{s("role",typeof r.target.value=="string"?r.target.value.split(","):r.target.value)},[s]);return e.jsxs(e.Fragment,{children:[e.jsxs(c,{spacing:2,alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5,pr:{xs:2.5,md:1}},children:[e.jsxs(_e,{sx:{flexShrink:0,width:{xs:1,md:200}},children:[e.jsx(Ke,{children:"Role"}),e.jsx(Qe,{multiple:!0,value:o.role,onChange:n,input:e.jsx(Ze,{label:"Role"}),renderValue:r=>r.map(h=>h).join(", "),MenuProps:{PaperProps:{sx:{maxHeight:240}}},children:a.map(r=>e.jsxs(I,{value:r,children:[e.jsx(K,{disableRipple:!0,size:"small",checked:o.role.includes(r)}),r]},r))})]}),e.jsxs(c,{direction:"row",alignItems:"center",spacing:2,flexGrow:1,sx:{width:1},children:[e.jsx(pe,{fullWidth:!0,value:o.name,onChange:t,placeholder:"Search...",InputProps:{startAdornment:e.jsx(H,{position:"start",children:e.jsx(d,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsx(v,{onClick:i.onOpen,children:e.jsx(d,{icon:"eva:more-vertical-fill"})})]})]}),e.jsxs($,{open:i.open,onClose:i.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(I,{onClick:()=>{i.onClose()},children:[e.jsx(d,{icon:"solar:printer-minimalistic-bold"}),"Print"]}),e.jsxs(I,{onClick:()=>{i.onClose()},children:[e.jsx(d,{icon:"solar:import-bold"}),"Import"]}),e.jsxs(I,{onClick:()=>{i.onClose()},children:[e.jsx(d,{icon:"solar:export-bold"}),"Export"]})]})]})}oo.propTypes={filters:l.object,onFilters:l.func,roleOptions:l.array};function so({filters:o,onFilters:s,onResetFilters:a,results:i,...t}){const n=b.useCallback(()=>{s("name","")},[s]),r=b.useCallback(()=>{s("status","all")},[s]),h=b.useCallback(x=>{const y=o.role.filter(T=>T!==x);s("role",y)},[o.role,s]);return e.jsxs(c,{spacing:1.5,...t,children:[e.jsxs(m,{sx:{typography:"body2"},children:[e.jsx("strong",{children:i}),e.jsx(m,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),e.jsxs(c,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[o.status!=="all"&&e.jsx(z,{label:"Status:",children:e.jsx(W,{size:"small",label:o.status,onDelete:r})}),!!o.role.length&&e.jsx(z,{label:"Role:",children:o.role.map(x=>e.jsx(W,{label:x,size:"small",onDelete:()=>h(x)},x))}),!!o.name&&e.jsx(z,{label:"Keyword:",children:e.jsx(W,{label:o.name,size:"small",onDelete:n})}),e.jsx(D,{color:"error",onClick:a,startIcon:e.jsx(d,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]})}so.propTypes={filters:l.object,onFilters:l.func,onResetFilters:l.func,results:l.number};function z({label:o,children:s,sx:a,...i}){return e.jsxs(c,{component:oe,variant:"outlined",spacing:1,direction:"row",sx:{p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed",...a},...i,children:[e.jsx(m,{component:"span",sx:{typography:"subtitle2"},children:o}),e.jsx(c,{spacing:1,direction:"row",flexWrap:"wrap",children:s})]})}z.propTypes={children:l.node,label:l.string,sx:l.object};function he({user:o}){const s=M(),{name:a,coverUrl:i,role:t,totalFollowers:n,totalPosts:r,avatarUrl:h,totalFollowing:x}=o;return e.jsxs(k,{sx:{textAlign:"center"},children:[e.jsxs(m,{sx:{position:"relative"},children:[e.jsx(Se,{sx:{left:0,right:0,zIndex:10,mx:"auto",bottom:-26,position:"absolute"}}),e.jsx(q,{alt:a,src:h,sx:{width:64,height:64,zIndex:11,left:0,right:0,bottom:-32,mx:"auto",position:"absolute"}}),e.jsx(Q,{src:i,alt:i,ratio:"16/9",overlay:A(s.palette.grey[900],.48)})]}),e.jsx(E,{sx:{mt:7,mb:1},primary:a,secondary:t,primaryTypographyProps:{typography:"subtitle1"},secondaryTypographyProps:{component:"span",mt:.5}}),e.jsx(c,{direction:"row",alignItems:"center",justifyContent:"center",sx:{mb:2.5},children:_.map(y=>e.jsx(v,{sx:{color:y.color,"&:hover":{bgcolor:A(y.color,.08)}},children:e.jsx(d,{icon:y.icon})},y.name))}),e.jsx(se,{sx:{borderStyle:"dashed"}}),e.jsxs(m,{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",sx:{py:3,typography:"subtitle1"},children:[e.jsxs("div",{children:[e.jsx(C,{variant:"caption",component:"div",sx:{mb:.5,color:"text.secondary"},children:"Follower"}),N(n)]}),e.jsxs("div",{children:[e.jsx(C,{variant:"caption",component:"div",sx:{mb:.5,color:"text.secondary"},children:"Following"}),N(x)]}),e.jsxs("div",{children:[e.jsx(C,{variant:"caption",component:"div",sx:{mb:.5,color:"text.secondary"},children:"Total Post"}),N(r)]})]})]})}he.propTypes={user:l.object};function ao({users:o}){return e.jsx(m,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:o.map(s=>e.jsx(he,{user:s},s.id))})}ao.propTypes={users:l.array};function je({post:o}){var S;const{user:s}=Ie(),a=b.useRef(null),i=b.useRef(null),[t,n]=b.useState(""),r=b.useCallback(p=>{n(p.target.value)},[]),h=b.useCallback(()=>{i.current&&i.current.click()},[]),x=b.useCallback(()=>{a.current&&a.current.focus()},[]),y=e.jsx(O,{disableTypography:!0,avatar:e.jsx(q,{src:s==null?void 0:s.photoURL,alt:s==null?void 0:s.displayName,children:(S=s==null?void 0:s.displayName)==null?void 0:S.charAt(0).toUpperCase()}),title:e.jsx(P,{color:"inherit",variant:"subtitle1",children:s==null?void 0:s.displayName}),subheader:e.jsx(m,{sx:{color:"text.disabled",typography:"caption",mt:.5},children:V(o.createdAt)}),action:e.jsx(v,{children:e.jsx(d,{icon:"eva:more-vertical-fill"})})}),T=e.jsx(c,{spacing:1.5,sx:{px:3,pb:2},children:o.comments.map(p=>e.jsxs(c,{direction:"row",spacing:2,children:[e.jsx(q,{alt:p.author.name,src:p.author.avatarUrl}),e.jsxs(oe,{sx:{p:1.5,flexGrow:1,bgcolor:"background.neutral"},children:[e.jsxs(c,{sx:{mb:.5},alignItems:{sm:"center"},justifyContent:"space-between",direction:{xs:"column",sm:"row"},children:[e.jsx(m,{sx:{typography:"subtitle2"},children:p.author.name}),e.jsx(m,{sx:{typography:"caption",color:"text.disabled"},children:V(p.createdAt)})]}),e.jsx(m,{sx:{typography:"body2",color:"text.secondary"},children:p.message})]})]},p.id))}),g=e.jsxs(c,{spacing:2,direction:"row",alignItems:"center",sx:{p:p=>p.spacing(0,3,3,3)},children:[e.jsx(q,{src:s==null?void 0:s.photoURL,alt:s==null?void 0:s.displayName}),e.jsx(ae,{fullWidth:!0,value:t,inputRef:a,placeholder:"Write a comment…",onChange:r,endAdornment:e.jsxs(H,{position:"end",sx:{mr:1},children:[e.jsx(v,{size:"small",onClick:h,children:e.jsx(d,{icon:"solar:gallery-add-bold"})}),e.jsx(v,{size:"small",children:e.jsx(d,{icon:"eva:smiling-face-fill"})})]}),sx:{pl:1.5,height:40,borderRadius:1,border:p=>`solid 1px ${A(p.palette.grey[500],.32)}`}}),e.jsx("input",{type:"file",ref:i,style:{display:"none"}})]}),f=e.jsxs(c,{direction:"row",alignItems:"center",sx:{p:p=>p.spacing(2,3,3,3)},children:[e.jsx(de,{control:e.jsx(K,{defaultChecked:!0,color:"error",icon:e.jsx(d,{icon:"solar:heart-bold"}),checkedIcon:e.jsx(d,{icon:"solar:heart-bold"})}),label:N(o.personLikes.length),sx:{mr:1}}),!!o.personLikes.length&&e.jsx(Je,{sx:{[`& .${Fe.avatar}`]:{width:32,height:32}},children:o.personLikes.map(p=>e.jsx(q,{alt:p.name,src:p.avatarUrl},p.name))}),e.jsx(m,{sx:{flexGrow:1}}),e.jsx(v,{onClick:x,children:e.jsx(d,{icon:"solar:chat-round-dots-bold"})}),e.jsx(v,{children:e.jsx(d,{icon:"solar:share-bold"})})]});return e.jsxs(k,{children:[y,e.jsx(C,{variant:"body2",sx:{p:p=>p.spacing(3,3,2,3)},children:o.message}),e.jsx(m,{sx:{p:1},children:e.jsx(Q,{alt:o.media,src:o.media,ratio:"16/9",sx:{borderRadius:1.5}})}),f,!!o.comments.length&&T,g]})}je.propTypes={post:l.object};function io({info:o,posts:s}){const a=b.useRef(null),i=()=>{a.current&&a.current.click()},t=e.jsx(k,{sx:{py:3,textAlign:"center",typography:"h4"},children:e.jsxs(c,{direction:"row",divider:e.jsx(se,{orientation:"vertical",flexItem:!0,sx:{borderStyle:"dashed"}}),children:[e.jsxs(c,{width:1,children:[J(o.totalFollowers),e.jsx(m,{component:"span",sx:{color:"text.secondary",typography:"body2"},children:"Follower"})]}),e.jsxs(c,{width:1,children:[J(o.totalFollowing),e.jsx(m,{component:"span",sx:{color:"text.secondary",typography:"body2"},children:"Following"})]})]})}),n=e.jsxs(k,{children:[e.jsx(O,{title:"About"}),e.jsxs(c,{spacing:2,sx:{p:3},children:[e.jsx(m,{sx:{typography:"body2"},children:o.quote}),e.jsxs(c,{direction:"row",spacing:2,children:[e.jsx(d,{icon:"mingcute:location-fill",width:24}),e.jsxs(m,{sx:{typography:"body2"},children:["Live at ",e.jsx(P,{variant:"subtitle2",color:"inherit",children:o.country})]})]}),e.jsxs(c,{direction:"row",sx:{typography:"body2"},children:[e.jsx(d,{icon:"fluent:mail-24-filled",width:24,sx:{mr:2}}),o.email]}),e.jsxs(c,{direction:"row",spacing:2,children:[e.jsx(d,{icon:"ic:round-business-center",width:24}),e.jsxs(m,{sx:{typography:"body2"},children:[o.role," ","at ",e.jsx(P,{variant:"subtitle2",color:"inherit",children:o.company})]})]}),e.jsxs(c,{direction:"row",spacing:2,children:[e.jsx(d,{icon:"ic:round-business-center",width:24}),e.jsxs(m,{sx:{typography:"body2"},children:["Studied at ",e.jsx(P,{variant:"subtitle2",color:"inherit",children:o.school})]})]})]})]}),r=e.jsxs(k,{sx:{p:3},children:[e.jsx(ae,{multiline:!0,fullWidth:!0,rows:4,placeholder:"Share what you are thinking here...",sx:{p:2,mb:3,borderRadius:1,border:x=>`solid 1px ${A(x.palette.grey[500],.2)}`}}),e.jsxs(c,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsxs(c,{direction:"row",spacing:1,alignItems:"center",sx:{color:"text.secondary"},children:[e.jsxs(X,{size:"small",color:"inherit",variant:"softExtended",onClick:i,children:[e.jsx(d,{icon:"solar:gallery-wide-bold",width:24,sx:{color:"success.main"}}),"Image/Video"]}),e.jsxs(X,{size:"small",color:"inherit",variant:"softExtended",children:[e.jsx(d,{icon:"solar:videocamera-record-bold",width:24,sx:{color:"error.main"}}),"Streaming"]})]}),e.jsx(D,{variant:"contained",children:"Post"})]}),e.jsx("input",{ref:a,type:"file",style:{display:"none"}})]}),h=e.jsxs(k,{children:[e.jsx(O,{title:"Social"}),e.jsx(c,{spacing:2,sx:{p:3},children:_.map(x=>e.jsxs(c,{spacing:2,direction:"row",sx:{wordBreak:"break-all",typography:"body2"},children:[e.jsx(d,{icon:x.icon,width:24,sx:{flexShrink:0,color:x.color}}),e.jsxs(P,{color:"inherit",children:[x.value==="facebook"&&o.socialLinks.facebook,x.value==="instagram"&&o.socialLinks.instagram,x.value==="linkedin"&&o.socialLinks.linkedin,x.value==="twitter"&&o.socialLinks.twitter]})]},x.name))})]});return e.jsxs(L,{container:!0,spacing:3,children:[e.jsx(L,{xs:12,md:4,children:e.jsxs(c,{spacing:3,children:[t,n,h]})}),e.jsx(L,{xs:12,md:8,children:e.jsxs(c,{spacing:3,children:[r,s.map(x=>e.jsx(je,{post:x},x.id))]})})]})}io.propTypes={info:l.object,posts:l.array};function to({name:o,avatarUrl:s,role:a,coverUrl:i}){const t=M();return e.jsx(m,{sx:{...qe({color:A(t.palette.primary.darker,.8),imgUrl:i}),height:1,color:"common.white"},children:e.jsxs(c,{direction:{xs:"column",md:"row"},sx:{left:{md:24},bottom:{md:24},zIndex:{md:10},pt:{xs:6,md:0},position:{md:"absolute"}},children:[e.jsx(q,{alt:o,src:s,sx:{mx:"auto",width:{xs:64,md:128},height:{xs:64,md:128},border:`solid 2px ${t.palette.common.white}`},children:o==null?void 0:o.charAt(0).toUpperCase()}),e.jsx(E,{sx:{mt:3,ml:{md:3},textAlign:{xs:"center",md:"unset"}},primary:o,secondary:a,primaryTypographyProps:{typography:"h4"},secondaryTypographyProps:{mt:.5,color:"inherit",component:"span",typography:"body2",sx:{opacity:.48}}})]})})}to.propTypes={avatarUrl:l.string,coverUrl:l.string,name:l.string,role:l.string};function lo({friends:o,searchFriends:s,onSearchFriends:a}){const i=no({inputData:o,query:s}),t=!i.length&&!!s;return e.jsxs(e.Fragment,{children:[e.jsxs(c,{spacing:2,justifyContent:"space-between",direction:{xs:"column",sm:"row"},sx:{my:5},children:[e.jsx(C,{variant:"h4",children:"Friends"}),e.jsx(pe,{value:s,onChange:a,placeholder:"Search friends...",InputProps:{startAdornment:e.jsx(H,{position:"start",children:e.jsx(d,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},sx:{width:{xs:1,sm:260}}})]}),t?e.jsx(Re,{query:s,sx:{mt:10}}):e.jsx(m,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:i.map(n=>e.jsx(ye,{friend:n},n.id))})]})}lo.propTypes={friends:l.array,onSearchFriends:l.func,searchFriends:l.string};function ye({friend:o}){const{name:s,role:a,avatarUrl:i}=o,t=B(),n=()=>{t.onClose(),console.info("DELETE",s)},r=()=>{t.onClose(),console.info("EDIT",s)};return e.jsxs(e.Fragment,{children:[e.jsxs(k,{sx:{py:5,display:"flex",position:"relative",alignItems:"center",flexDirection:"column"},children:[e.jsx(q,{alt:s,src:i,sx:{width:64,height:64,mb:3}}),e.jsx(P,{variant:"subtitle1",color:"text.primary",children:s}),e.jsx(C,{variant:"body2",sx:{color:"text.secondary",mb:1,mt:.5},children:a}),e.jsx(c,{alignItems:"center",justifyContent:"center",direction:"row",children:_.map(h=>e.jsx(v,{sx:{color:h.color,"&:hover":{bgcolor:A(h.color,.08)}},children:e.jsx(d,{icon:h.icon})},h.name))}),e.jsx(v,{color:t.open?"inherit":"default",onClick:t.onOpen,sx:{top:8,right:8,position:"absolute"},children:e.jsx(d,{icon:"eva:more-vertical-fill"})})]}),e.jsxs($,{open:t.open,onClose:t.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(I,{onClick:n,sx:{color:"error.main"},children:[e.jsx(d,{icon:"solar:trash-bin-trash-bold"}),"Delete"]}),e.jsxs(I,{onClick:r,children:[e.jsx(d,{icon:"solar:pen-bold"}),"Edit"]})]})]})}ye.propTypes={friend:l.object};function no({inputData:o,query:s}){return s?o.filter(a=>a.name.toLowerCase().indexOf(s.toLowerCase())!==-1):o}function ro({gallery:o}){const s=M(),a=o.map(t=>({src:t.imageUrl})),i=Xe(a);return e.jsxs(e.Fragment,{children:[e.jsx(C,{variant:"h4",sx:{my:5},children:"Gallery"}),e.jsx(m,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:o.map(t=>e.jsxs(k,{sx:{cursor:"pointer",color:"common.white"},children:[e.jsx(v,{color:"inherit",sx:{position:"absolute",top:8,right:8,zIndex:9},children:e.jsx(d,{icon:"eva:more-vertical-fill"})}),e.jsx(E,{sx:{p:3,left:0,width:1,bottom:0,zIndex:9,position:"absolute"},primary:t.title,secondary:V(t.postedAt),primaryTypographyProps:{noWrap:!0,typography:"subtitle1"},secondaryTypographyProps:{mt:.5,color:"inherit",component:"span",typography:"body2",sx:{opacity:.48}}}),e.jsx(Q,{alt:"gallery",ratio:"1/1",src:t.imageUrl,onClick:()=>i.onOpen(t.imageUrl),overlay:`linear-gradient(to bottom, ${A(s.palette.grey[900],0)} 0%, ${s.palette.grey[900]} 75%)`})]},t.id))}),e.jsx(Ye,{index:i.selected,slides:a,open:i.open,close:i.onClose})]})}ro.propTypes={gallery:l.array};function co({followers:o}){const s=o.slice(4,8).map(n=>n.id),[a,i]=b.useState(s),t=b.useCallback(n=>{const r=a.includes(n)?a.filter(h=>h!==n):[...a,n];i(r)},[a]);return e.jsxs(e.Fragment,{children:[e.jsx(C,{variant:"h4",sx:{my:5},children:"Followers"}),e.jsx(m,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:o.map(n=>e.jsx(ue,{follower:n,selected:a.includes(n.id),onSelected:()=>t(n.id)},n.id))})]})}co.propTypes={followers:l.array};function ue({follower:o,selected:s,onSelected:a}){const{name:i,country:t,avatarUrl:n}=o;return e.jsxs(k,{sx:{display:"flex",alignItems:"center",p:r=>r.spacing(3,2,3,3)},children:[e.jsx(q,{alt:i,src:n,sx:{width:48,height:48,mr:2}}),e.jsx(E,{primary:i,secondary:e.jsxs(e.Fragment,{children:[e.jsx(d,{icon:"mingcute:location-fill",width:16,sx:{flexShrink:0,mr:.5}}),t," country country country country country country country country country"]}),primaryTypographyProps:{noWrap:!0,typography:"subtitle2"},secondaryTypographyProps:{mt:.5,noWrap:!0,display:"flex",component:"span",alignItems:"center",typography:"caption",color:"text.disabled"}}),e.jsx(D,{size:"small",variant:s?"text":"outlined",color:s?"success":"inherit",startIcon:s?e.jsx(d,{width:18,icon:"eva:checkmark-fill",sx:{mr:-.75}}):null,onClick:a,sx:{flexShrink:0,ml:1.5},children:s?"Followed":"Follow"})]})}ue.propTypes={follower:l.object,onSelected:l.func,selected:l.bool};export{to as P,ao as U,io as a,co as b,lo as c,ro as d,oo as e,so as f,eo as g,xe as h,Ue as i};
