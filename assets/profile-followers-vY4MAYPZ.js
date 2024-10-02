import{dx as H,dy as V,dz as _,cW as Q,a as ge,r as c,a9 as fe,dA as he,p as z,j as e,i as j,T as P,I as Z,d as S,f as x,M as se,S as u,k as l,l as Ue,m as Ge,dB as We,A as T,w as M,L as k,t as ze,dC as Me,c as Oe,R as $e,dD as Be,g as ie,dE as He,o as L,dF as ae,F as be,G as Ve,V as we,aa as _e,E as Qe,n as Ze,aQ as Je,h as Ke,C as Xe}from"./index-w2TjI0MF.js";import{C as ve}from"./custom-breadcrumbs-RjSW2biQ.js";import{c as xe,a as I,u as Ye,F as es,k as ss,R as W,e as os,o as ts}from"./rhf-autocomplete-U6p_PEPK.js";import{d as rs,c as $,f as me}from"./format-number-EJUytZhm.js";import{G as is,C as as}from"./UserAccess-k2Lt9elC.js";import{G as E}from"./Grid2-zCgqDIFm.js";import{C as w}from"./Card-huoyhVY-.js";import{F as Ce}from"./FormControlLabel-i471xspq.js";import{S as ns}from"./Switch-uNCmthE_.js";import{L as ls}from"./LoadingButton-pMu7UJc1.js";import{E as ue}from"./empty-content-euVssf39.js";import{C as cs}from"./confirm-dialog-Aypc3550.js";import{S as R}from"./Stack-_q8zbVdT.js";import{B as oe}from"./Box-wOnCFSTh.js";import{F as ds,T as Ie}from"./TextField-Rnx-roig.js";import{B}from"./Button-craGvtks.js";import{D as ps}from"./DataGrid-dgsGCI5B.js";import{G as ye}from"./GridActionsCellItem-5YvgnKBE.js";import{I as ne}from"./image-8XOWnu1q.js";import{b as te}from"./format-time-gLo4N_aV.js";import{C as re}from"./CardHeader-1ocrqUuB.js";import{C as hs}from"./Checkbox-MPmUmIhR.js";import{A as xs}from"./AvatarGroup-pTPQqkiR.js";import{F as je}from"./Fab-nuIaAWs7.js";import{u as ms,L as us}from"./use-light-box-YSHcs_4R.js";const ys=async s=>{const t=Q.User.list,a={Payload:H(s)},{data:r,error:o}=await V.post(t,a),n=r!=null&&r.data?_(r==null?void 0:r.data):null;return{result:n||[],isLoading:!o&&!n,isError:o,status:r==null?void 0:r.status,message:r==null?void 0:r.message,vendorsEmpty:!(n!=null&&n.length)}},js=async(s,t)=>{const a=Q.User.AddEditUser,r={Payload:H(s),Files:t},{data:o,error:n}=await V.post(a,r);if(o!=null&&o.status){const p=o!=null&&o.data?_(o==null?void 0:o.data):null;return{data:p||[],isLoading:!n&&!p,isError:n,status:o==null?void 0:o.status,message:o==null?void 0:o.message}}else return{status:o==null?void 0:o.status,message:o==null?void 0:o.message}},gs=async s=>{const t=Q.User.delete,a={payload:H(s)},{data:r,error:o}=await V.post(t,a),n=r!=null&&r.data?_(r==null?void 0:r.data):null;return{data:n||[],isLoading:!o&&!n,isError:o,status:r==null?void 0:r.status,message:r==null?void 0:r.message}},fs=async s=>{const t=Q.User.getbyID,r={payload:H({UserID:s})},{data:o,error:n}=await V.post(t,r),p=o!=null&&o.data?_(o==null?void 0:o.data):null;return{data:p||[],isLoading:!n&&!p,isError:n,status:o==null?void 0:o.status,message:o==null?void 0:o.message}};function Se({currentUser:s}){const t=ge(),[a,r]=c.useState(!0),[o,n]=c.useState([]),[p,y]=c.useState(!1),{enqueueSnackbar:h}=fe(),v=xe().shape({firstName:I().required("FirstName is required"),lastName:I().required("LastName is required"),email:I().required("Email is required").matches(he,"Email must be a valid email address"),password:I().required("Password is required").min(8,"Password must be at least 8 characters long").matches(/[A-Z]/,"Password must contain at least one uppercase letter").matches(/[a-z]/,"Password must contain at least one lowercase letter").matches(/[0-9]/,"Password must contain at least one number").matches(/[@$!%*?&]/,"Password must contain at least one special character"),phoneNumber:I().required("Phonenumber is required"),UserTypeID:I().required("Role is required")}),q=xe().shape({firstName:I().required("FirstName is required"),lastName:I().required("LastName is required"),email:I().required("Email is required").matches(he,"Email must be a valid email address"),phoneNumber:I().required("Phonenumber is required"),UserTypeID:I().required("Role is required")}),N=c.useMemo(()=>({UserID:s!=null&&s.UserID?s==null?void 0:s.UserID:0,firstName:(s==null?void 0:s.FirstName)||"",lastName:(s==null?void 0:s.LastName)||"",email:(s==null?void 0:s.Email)||"",password:(s==null?void 0:s.Password)||"",UserTypeID:s==null?void 0:s.UserTypeID,avatarUrl:s!=null&&s.Photo?`${HOST_API}${s==null?void 0:s.Photo}`:null,phoneNumber:(s==null?void 0:s.PhoneNumber)||"",IsActive:s!=null&&s.IsActive?s==null?void 0:s.IsActive:!1}),[s,o==null?void 0:o.length]),F=Ye({resolver:ts(s?q:v),defaultValues:N}),{reset:C,watch:m,control:U,setValue:G,handleSubmit:g,formState:{isSubmitting:J}}=F;m();const le=async()=>{const i={Search:""},{data:f}=await is(i);n(f==null?void 0:f.data),r(!1)};c.useEffect(()=>{a&&le()},[a]),c.useEffect(()=>{s&&C(N)},[s,N,C]);const K=g(async i=>{var f,A;try{const D=i!=null&&i.avatarUrl?[{FileType:"User",FilePath:(f=i==null?void 0:i.avatarUrl)!=null&&f.includes(HOST_API)?i.avatarUrl.replace(HOST_API,""):i.avatarUrl,filName:"",IsChange:!!((A=i==null?void 0:i.avatarUrl)!=null&&A.includes("base64"))}]:[],Y={UserID:i!=null&&i.UserID?i==null?void 0:i.UserID:0,UserName:i==null?void 0:i.email,FirstName:i==null?void 0:i.firstName,LastName:i==null?void 0:i.lastName,UserTypeID:i==null?void 0:i.UserTypeID,IsActive:i==null?void 0:i.IsActive,Password:i==null?void 0:i.password,Email:i==null?void 0:i.email,PhoneNumber:i==null?void 0:i.phoneNumber,Photo:(s==null?void 0:s.Photo)||null},{status:d,message:b}=await js(Y,D);d?(C(),h(s?"User Updated Successfully!":"User Create Sccessfully!"),t.push(z.dashboard.User.list)):h(b,{variant:"error"})}catch(D){console.error(D)}}),X=c.useCallback(i=>{const f=i[0],A=new FileReader;A.onload=()=>{const D=A.result;Object.assign(f,{preview:URL.createObjectURL(f)}),f&&G("avatarUrl",D,{shouldValidate:!0})},A.readAsDataURL(f)},[G]);return e.jsx(es,{methods:F,onSubmit:K,children:e.jsxs(E,{container:!0,spacing:3,children:[e.jsx(E,{xs:12,md:4,children:e.jsx(w,{sx:{py:5,px:3},children:e.jsx(j,{sx:{my:4},children:e.jsx(ss,{disabled:!0,name:"avatarUrl",maxSize:3145728,onDrop:X,helperText:e.jsxs(P,{variant:"caption",sx:{mt:3,mx:"auto",display:"block",textAlign:"center",color:"text.disabled"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",e.jsx("br",{})," max size of ",rs(3145728)]})})})})}),e.jsx(E,{xs:12,md:8,children:e.jsxs(w,{sx:{p:3},children:[e.jsxs(j,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[e.jsx(W,{name:"firstName",label:"First Name"}),e.jsx(W,{name:"lastName",label:"Last Name"}),e.jsx(W,{name:"phoneNumber",label:"Phone Number",type:"number"}),e.jsx(W,{name:"email",label:"Email Address",disabled:s}),!s&&e.jsx(W,{name:"password",label:"Password",type:p?"text":"password",InputProps:{endAdornment:e.jsx(Z,{position:"end",children:e.jsx(S,{onClick:()=>y(!p),edge:"end",children:e.jsx(x,{icon:p?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(os,{fullWidth:!0,name:"UserTypeID",label:"UserTypeID",PaperPropsSx:{textTransform:"capitalize"},children:o==null?void 0:o.map(i=>e.jsx(se,{value:i==null?void 0:i.UserTypeID,children:i==null?void 0:i.Name},i==null?void 0:i.UserTypeID))}),e.jsx(Ce,{control:e.jsx(ns,{checked:F.watch("IsActive"),onChange:i=>F.setValue("IsActive",i.target.checked),name:"IsActive"}),label:"Is Active"})]}),e.jsx(u,{alignItems:"flex-end",sx:{mt:3},children:e.jsx(ls,{type:"submit",variant:"contained",loading:J,children:s?"Save Changes":"Create User"})})]})})]})})}Se.propTypes={currentUser:l.object};function bs({id:s}){const t=Ue(),[a,r]=c.useState(),[o,n]=c.useState(!0),p=async()=>{const{data:y}=await fs(s);r(y),n(!1)};return c.useEffect(()=>{p()},[s]),e.jsx(Ge,{maxWidth:t.themeStretch?!1:"lg",children:!o&&e.jsxs(e.Fragment,{children:[e.jsx(ve,{heading:"Edit",links:[{name:"Dashboard",href:z.dashboard.root},{name:"User",href:z.dashboard.User.list},{name:a==null?void 0:a.UserName}],sx:{mb:{xs:3,md:5}}}),e.jsx(Se,{currentUser:a})]})})}bs.propTypes={id:l.string};function Te({params:s,handleEditRow:t,permission:a}){var o,n,p,y,h;const r=We();return e.jsxs(R,{direction:"row",alignItems:"center",sx:{py:2,width:1},children:[e.jsx(T,{alt:s.row.FirstName,sx:{mr:2,backgroundColor:r.palette.primary.lighter,color:r.palette.grey[600]},children:(p=(n=(o=s==null?void 0:s.row)==null?void 0:o.FirstName)==null?void 0:n.charAt(0))==null?void 0:p.toUpperCase()}),e.jsx(M,{disableTypography:!0,primary:e.jsx(k,{noWrap:!0,color:"inherit",variant:"subtitle2",onClick:()=>{t(s.row.UserID)},sx:{cursor:"pointer"},children:e.jsx(oe,{sx:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},children:((y=s==null?void 0:s.row)==null?void 0:y.FirstName)+" "+((h=s==null?void 0:s.row)==null?void 0:h.LastName)})}),secondary:e.jsx(oe,{sx:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%",typography:"body2",color:"text.disabled"},children:s.row.Email}),sx:{display:"flex",flexDirection:"column"}})]})}Te.propTypes={params:l.shape({row:l.object})};l.shape({row:l.object});l.shape({row:l.object});function Pe({params:s}){return e.jsx(oe,{sx:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},children:s.row.Email})}Pe.propTypes={params:l.shape({row:l.object})};function Fe({params:s}){return e.jsx(R,{children:s.row.UserType})}Fe.propTypes={params:l.shape({row:l.object})};function Ae({params:s}){return e.jsx(R,{children:s.row.PhoneNumber})}Ae.propTypes={params:l.shape({row:l.object})};function De({params:s}){var t,a,r;return e.jsx(R,{sx:{py:1.5},children:e.jsx(ze,{variant:"soft",color:((t=s==null?void 0:s.row)==null?void 0:t.IsActive)==!0&&"success"||((a=s==null?void 0:s.row)==null?void 0:a.IsActive)==!1&&"error"||"default",children:(r=s.row)!=null&&r.IsActive?"Active":"Inactive"})})}De.propTypes={params:l.shape({row:l.object})};function Ne({search:s,setSearch:t,setLoading:a,setPage:r}){const o=c.useCallback(n=>{t(n.target.value),r(0),a(!0)},[t]);return e.jsx(e.Fragment,{children:e.jsx(R,{gap:2,direction:{xs:"column",md:"row"},m:2,children:e.jsx(ds,{sx:{maxWidth:{md:240},width:"100%"},children:e.jsx(R,{direction:"row",alignItems:"center",children:e.jsx(Ie,{fullWidth:!0,value:s,onChange:o,placeholder:"Search...",InputProps:{startAdornment:e.jsx(Z,{position:"start",children:e.jsx(x,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})})})})}Ne.propTypes={search:l.string.isRequired,setSearch:l.func.isRequired,setLoading:l.func.isRequired,setPage:l.func.isRequired};const ws=()=>{const{enqueueSnackbar:s}=fe();c.useContext(Me);const t=ge(),a=Oe(),[r,o]=c.useState([]),[n,p]=c.useState(""),[y,h]=c.useState(!0),[v,q]=c.useState(""),[N,F]=c.useState(0),[C,m]=c.useState(0),[U,G]=c.useState(10),[g,J]=c.useState({}),[le,K]=c.useState({});c.useState({IsAudit:!1,IsCreate:!1,IsDelete:!1,IsExport:!1,IsPrint:!1,IsEdit:!1});const X=async()=>{var ce,de,pe;const d={Search:n,Limit:U,PageNumber:C,Field:(g==null?void 0:g.length)>0?(ce=g==null?void 0:g[0])==null?void 0:ce.field:"UserID",Sort:(g==null?void 0:g.length)>0?(de=g==null?void 0:g[0])==null?void 0:de.sort:"Desc"},{result:b,isLoading:ee}=await ys(d);F(b==null?void 0:b.TotalRows);const qe=((pe=b==null?void 0:b.data)==null?void 0:pe.map(O=>({...O,id:O==null?void 0:O.UserID})))||[];o(qe),h(ee)};c.useEffect(()=>{y&&X()},[y]);const i=c.useCallback(async()=>{const d={UserID:v},{status:b,message:ee}=await gs(d);b?(s("Delete success!"),h(!0)):s(ee,{variant:"error"})},[s,r,v]),f=c.useCallback(d=>{t.push(z.dashboard.User.edit(d))},[t]),A=d=>{m(d.page),G(d.pageSize),h(!0)},D=[{field:"UserName",headerName:"User Name",minWidth:280,editable:!1,hideable:!1,renderCell:d=>e.jsx(Te,{params:d,handleEditRow:f})},{field:"Email",headerName:"Email",flex:1,minWidth:200,editable:!1,hideable:!1,renderCell:d=>e.jsx(Pe,{params:d})},{field:"UserType",headerName:"Role",flex:1,minWidth:200,editable:!1,hideable:!1,renderCell:d=>e.jsx(Fe,{params:d})},{field:"Phone",headerName:"Phone Number",flex:1,minWidth:180,editable:!1,renderCell:d=>e.jsx(Ae,{params:d})},{field:"Status",headerName:"Status",flex:1,minWidth:120,editable:!1,filterable:!1,hideable:!1,renderCell:d=>e.jsx(De,{params:d})},{type:"actions",field:"actions",headerName:"Actions",align:"right",headerAlign:"right",width:80,sortable:!1,filterable:!1,disableColumnMenu:!0,getActions:d=>[e.jsx(ye,{showInMenu:!0,icon:e.jsx(x,{icon:"solar:pen-bold"}),label:"Edit",onClick:()=>f(d.row.UserID)}),e.jsx(ye,{showInMenu:!0,icon:e.jsx(x,{icon:"solar:trash-bin-trash-bold"}),label:"Deleted",onClick:()=>{q(d.row.UserID),a.onTrue()}})]}],Y=()=>D.filter(d=>{var b;return!((b=Be)!=null&&b.includes(d.field))}).map(d=>d.field);return e.jsxs(e.Fragment,{children:[e.jsxs(as,{maxWidth:!1,sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:[e.jsx(ve,{heading:"Users",links:[{name:""}],action:e.jsx(e.Fragment,{children:e.jsx(B,{component:$e,href:z.dashboard.User.new,variant:"contained",startIcon:e.jsx(x,{icon:"mingcute:add-line"}),children:"New User"})}),sx:{mb:{xs:3,md:3}}}),e.jsxs(w,{sx:{height:600,flexGrow:1,display:"flex",flexDirection:"column"},children:[e.jsx(Ne,{setLoading:h,search:n,setSearch:p,setPage:m,page:C,setPageSize:G,pageSize:U}),e.jsx(ps,{rowCount:N,rows:r,columns:D,loading:y,paginationMode:"server",sortingMode:"server",getRowHeight:()=>"auto",pageSizeOptions:[5,10,25],paginationModel:{page:C,pageSize:U},onPaginationModelChange:A,onFilterModelChange:d=>{K(d)},onSortModelChange:d=>{J(d),h(!0)},initialState:{pagination:{paginationModel:{pageSize:U,page:C}}},slots:{noRowsOverlay:()=>e.jsx(ue,{title:"No Record"}),noResultsOverlay:()=>e.jsx(ue,{title:"No results found"})},slotProps:{columnsPanel:{getTogglableColumns:Y}}})]})]}),e.jsx(cs,{open:a.value,onClose:a.onFalse,title:"Delete",content:e.jsx(e.Fragment,{children:"Are you sure you want to delete this user?"}),action:e.jsx(B,{variant:"contained",color:"error",onClick:()=>{i(),a.onFalse()},children:"Delete"})})]})},eo=ws;function ke({user:s}){const t=ie(),{name:a,coverUrl:r,role:o,totalFollowers:n,totalPosts:p,avatarUrl:y,totalFollowing:h}=s;return e.jsxs(w,{sx:{textAlign:"center"},children:[e.jsxs(j,{sx:{position:"relative"},children:[e.jsx(He,{sx:{left:0,right:0,zIndex:10,mx:"auto",bottom:-26,position:"absolute"}}),e.jsx(T,{alt:a,src:y,sx:{width:64,height:64,zIndex:11,left:0,right:0,bottom:-32,mx:"auto",position:"absolute"}}),e.jsx(ne,{src:r,alt:r,ratio:"16/9",overlay:L(t.palette.grey[900],.48)})]}),e.jsx(M,{sx:{mt:7,mb:1},primary:a,secondary:o,primaryTypographyProps:{typography:"subtitle1"},secondaryTypographyProps:{component:"span",mt:.5}}),e.jsx(u,{direction:"row",alignItems:"center",justifyContent:"center",sx:{mb:2.5},children:ae.map(v=>e.jsx(S,{sx:{color:v.color,"&:hover":{bgcolor:L(v.color,.08)}},children:e.jsx(x,{icon:v.icon})},v.name))}),e.jsx(be,{sx:{borderStyle:"dashed"}}),e.jsxs(j,{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",sx:{py:3,typography:"subtitle1"},children:[e.jsxs("div",{children:[e.jsx(P,{variant:"caption",component:"div",sx:{mb:.5,color:"text.secondary"},children:"Follower"}),$(n)]}),e.jsxs("div",{children:[e.jsx(P,{variant:"caption",component:"div",sx:{mb:.5,color:"text.secondary"},children:"Following"}),$(h)]}),e.jsxs("div",{children:[e.jsx(P,{variant:"caption",component:"div",sx:{mb:.5,color:"text.secondary"},children:"Total Post"}),$(p)]})]})]})}ke.propTypes={user:l.object};function vs({users:s}){return e.jsx(j,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:s.map(t=>e.jsx(ke,{user:t},t.id))})}vs.propTypes={users:l.array};function Le({post:s}){var C;const{user:t}=Qe(),a=c.useRef(null),r=c.useRef(null),[o,n]=c.useState(""),p=c.useCallback(m=>{n(m.target.value)},[]),y=c.useCallback(()=>{r.current&&r.current.click()},[]),h=c.useCallback(()=>{a.current&&a.current.focus()},[]),v=e.jsx(re,{disableTypography:!0,avatar:e.jsx(T,{src:t==null?void 0:t.photoURL,alt:t==null?void 0:t.displayName,children:(C=t==null?void 0:t.displayName)==null?void 0:C.charAt(0).toUpperCase()}),title:e.jsx(k,{color:"inherit",variant:"subtitle1",children:t==null?void 0:t.displayName}),subheader:e.jsx(j,{sx:{color:"text.disabled",typography:"caption",mt:.5},children:te(s.createdAt)}),action:e.jsx(S,{children:e.jsx(x,{icon:"eva:more-vertical-fill"})})}),q=e.jsx(u,{spacing:1.5,sx:{px:3,pb:2},children:s.comments.map(m=>e.jsxs(u,{direction:"row",spacing:2,children:[e.jsx(T,{alt:m.author.name,src:m.author.avatarUrl}),e.jsxs(Ve,{sx:{p:1.5,flexGrow:1,bgcolor:"background.neutral"},children:[e.jsxs(u,{sx:{mb:.5},alignItems:{sm:"center"},justifyContent:"space-between",direction:{xs:"column",sm:"row"},children:[e.jsx(j,{sx:{typography:"subtitle2"},children:m.author.name}),e.jsx(j,{sx:{typography:"caption",color:"text.disabled"},children:te(m.createdAt)})]}),e.jsx(j,{sx:{typography:"body2",color:"text.secondary"},children:m.message})]})]},m.id))}),N=e.jsxs(u,{spacing:2,direction:"row",alignItems:"center",sx:{p:m=>m.spacing(0,3,3,3)},children:[e.jsx(T,{src:t==null?void 0:t.photoURL,alt:t==null?void 0:t.displayName}),e.jsx(we,{fullWidth:!0,value:o,inputRef:a,placeholder:"Write a comment…",onChange:p,endAdornment:e.jsxs(Z,{position:"end",sx:{mr:1},children:[e.jsx(S,{size:"small",onClick:y,children:e.jsx(x,{icon:"solar:gallery-add-bold"})}),e.jsx(S,{size:"small",children:e.jsx(x,{icon:"eva:smiling-face-fill"})})]}),sx:{pl:1.5,height:40,borderRadius:1,border:m=>`solid 1px ${L(m.palette.grey[500],.32)}`}}),e.jsx("input",{type:"file",ref:r,style:{display:"none"}})]}),F=e.jsxs(u,{direction:"row",alignItems:"center",sx:{p:m=>m.spacing(2,3,3,3)},children:[e.jsx(Ce,{control:e.jsx(hs,{defaultChecked:!0,color:"error",icon:e.jsx(x,{icon:"solar:heart-bold"}),checkedIcon:e.jsx(x,{icon:"solar:heart-bold"})}),label:$(s.personLikes.length),sx:{mr:1}}),!!s.personLikes.length&&e.jsx(xs,{sx:{[`& .${_e.avatar}`]:{width:32,height:32}},children:s.personLikes.map(m=>e.jsx(T,{alt:m.name,src:m.avatarUrl},m.name))}),e.jsx(j,{sx:{flexGrow:1}}),e.jsx(S,{onClick:h,children:e.jsx(x,{icon:"solar:chat-round-dots-bold"})}),e.jsx(S,{children:e.jsx(x,{icon:"solar:share-bold"})})]});return e.jsxs(w,{children:[v,e.jsx(P,{variant:"body2",sx:{p:m=>m.spacing(3,3,2,3)},children:s.message}),e.jsx(j,{sx:{p:1},children:e.jsx(ne,{alt:s.media,src:s.media,ratio:"16/9",sx:{borderRadius:1.5}})}),F,!!s.comments.length&&q,N]})}Le.propTypes={post:l.object};function Cs({info:s,posts:t}){const a=c.useRef(null),r=()=>{a.current&&a.current.click()},o=e.jsx(w,{sx:{py:3,textAlign:"center",typography:"h4"},children:e.jsxs(u,{direction:"row",divider:e.jsx(be,{orientation:"vertical",flexItem:!0,sx:{borderStyle:"dashed"}}),children:[e.jsxs(u,{width:1,children:[me(s.totalFollowers),e.jsx(j,{component:"span",sx:{color:"text.secondary",typography:"body2"},children:"Follower"})]}),e.jsxs(u,{width:1,children:[me(s.totalFollowing),e.jsx(j,{component:"span",sx:{color:"text.secondary",typography:"body2"},children:"Following"})]})]})}),n=e.jsxs(w,{children:[e.jsx(re,{title:"About"}),e.jsxs(u,{spacing:2,sx:{p:3},children:[e.jsx(j,{sx:{typography:"body2"},children:s.quote}),e.jsxs(u,{direction:"row",spacing:2,children:[e.jsx(x,{icon:"mingcute:location-fill",width:24}),e.jsxs(j,{sx:{typography:"body2"},children:["Live at ",e.jsx(k,{variant:"subtitle2",color:"inherit",children:s.country})]})]}),e.jsxs(u,{direction:"row",sx:{typography:"body2"},children:[e.jsx(x,{icon:"fluent:mail-24-filled",width:24,sx:{mr:2}}),s.email]}),e.jsxs(u,{direction:"row",spacing:2,children:[e.jsx(x,{icon:"ic:round-business-center",width:24}),e.jsxs(j,{sx:{typography:"body2"},children:[s.role," ","at ",e.jsx(k,{variant:"subtitle2",color:"inherit",children:s.company})]})]}),e.jsxs(u,{direction:"row",spacing:2,children:[e.jsx(x,{icon:"ic:round-business-center",width:24}),e.jsxs(j,{sx:{typography:"body2"},children:["Studied at ",e.jsx(k,{variant:"subtitle2",color:"inherit",children:s.school})]})]})]})]}),p=e.jsxs(w,{sx:{p:3},children:[e.jsx(we,{multiline:!0,fullWidth:!0,rows:4,placeholder:"Share what you are thinking here...",sx:{p:2,mb:3,borderRadius:1,border:h=>`solid 1px ${L(h.palette.grey[500],.2)}`}}),e.jsxs(u,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsxs(u,{direction:"row",spacing:1,alignItems:"center",sx:{color:"text.secondary"},children:[e.jsxs(je,{size:"small",color:"inherit",variant:"softExtended",onClick:r,children:[e.jsx(x,{icon:"solar:gallery-wide-bold",width:24,sx:{color:"success.main"}}),"Image/Video"]}),e.jsxs(je,{size:"small",color:"inherit",variant:"softExtended",children:[e.jsx(x,{icon:"solar:videocamera-record-bold",width:24,sx:{color:"error.main"}}),"Streaming"]})]}),e.jsx(B,{variant:"contained",children:"Post"})]}),e.jsx("input",{ref:a,type:"file",style:{display:"none"}})]}),y=e.jsxs(w,{children:[e.jsx(re,{title:"Social"}),e.jsx(u,{spacing:2,sx:{p:3},children:ae.map(h=>e.jsxs(u,{spacing:2,direction:"row",sx:{wordBreak:"break-all",typography:"body2"},children:[e.jsx(x,{icon:h.icon,width:24,sx:{flexShrink:0,color:h.color}}),e.jsxs(k,{color:"inherit",children:[h.value==="facebook"&&s.socialLinks.facebook,h.value==="instagram"&&s.socialLinks.instagram,h.value==="linkedin"&&s.socialLinks.linkedin,h.value==="twitter"&&s.socialLinks.twitter]})]},h.name))})]});return e.jsxs(E,{container:!0,spacing:3,children:[e.jsx(E,{xs:12,md:4,children:e.jsxs(u,{spacing:3,children:[o,n,y]})}),e.jsx(E,{xs:12,md:8,children:e.jsxs(u,{spacing:3,children:[p,t.map(h=>e.jsx(Le,{post:h},h.id))]})})]})}Cs.propTypes={info:l.object,posts:l.array};function Is({name:s,avatarUrl:t,role:a,coverUrl:r}){const o=ie();return e.jsx(j,{sx:{...Ze({color:L(o.palette.primary.darker,.8),imgUrl:r}),height:1,color:"common.white"},children:e.jsxs(u,{direction:{xs:"column",md:"row"},sx:{left:{md:24},bottom:{md:24},zIndex:{md:10},pt:{xs:6,md:0},position:{md:"absolute"}},children:[e.jsx(T,{alt:s,src:t,sx:{mx:"auto",width:{xs:64,md:128},height:{xs:64,md:128},border:`solid 2px ${o.palette.common.white}`},children:s==null?void 0:s.charAt(0).toUpperCase()}),e.jsx(M,{sx:{mt:3,ml:{md:3},textAlign:{xs:"center",md:"unset"}},primary:s,secondary:a,primaryTypographyProps:{typography:"h4"},secondaryTypographyProps:{mt:.5,color:"inherit",component:"span",typography:"body2",sx:{opacity:.48}}})]})})}Is.propTypes={avatarUrl:l.string,coverUrl:l.string,name:l.string,role:l.string};function Ss({friends:s,searchFriends:t,onSearchFriends:a}){const r=Ts({inputData:s,query:t}),o=!r.length&&!!t;return e.jsxs(e.Fragment,{children:[e.jsxs(u,{spacing:2,justifyContent:"space-between",direction:{xs:"column",sm:"row"},sx:{my:5},children:[e.jsx(P,{variant:"h4",children:"Friends"}),e.jsx(Ie,{value:t,onChange:a,placeholder:"Search friends...",InputProps:{startAdornment:e.jsx(Z,{position:"start",children:e.jsx(x,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},sx:{width:{xs:1,sm:260}}})]}),o?e.jsx(Je,{query:t,sx:{mt:10}}):e.jsx(j,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:r.map(n=>e.jsx(Ee,{friend:n},n.id))})]})}Ss.propTypes={friends:l.array,onSearchFriends:l.func,searchFriends:l.string};function Ee({friend:s}){const{name:t,role:a,avatarUrl:r}=s,o=Ke(),n=()=>{o.onClose(),console.info("DELETE",t)},p=()=>{o.onClose(),console.info("EDIT",t)};return e.jsxs(e.Fragment,{children:[e.jsxs(w,{sx:{py:5,display:"flex",position:"relative",alignItems:"center",flexDirection:"column"},children:[e.jsx(T,{alt:t,src:r,sx:{width:64,height:64,mb:3}}),e.jsx(k,{variant:"subtitle1",color:"text.primary",children:t}),e.jsx(P,{variant:"body2",sx:{color:"text.secondary",mb:1,mt:.5},children:a}),e.jsx(u,{alignItems:"center",justifyContent:"center",direction:"row",children:ae.map(y=>e.jsx(S,{sx:{color:y.color,"&:hover":{bgcolor:L(y.color,.08)}},children:e.jsx(x,{icon:y.icon})},y.name))}),e.jsx(S,{color:o.open?"inherit":"default",onClick:o.onOpen,sx:{top:8,right:8,position:"absolute"},children:e.jsx(x,{icon:"eva:more-vertical-fill"})})]}),e.jsxs(Xe,{open:o.open,onClose:o.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(se,{onClick:n,sx:{color:"error.main"},children:[e.jsx(x,{icon:"solar:trash-bin-trash-bold"}),"Delete"]}),e.jsxs(se,{onClick:p,children:[e.jsx(x,{icon:"solar:pen-bold"}),"Edit"]})]})]})}Ee.propTypes={friend:l.object};function Ts({inputData:s,query:t}){return t?s.filter(a=>a.name.toLowerCase().indexOf(t.toLowerCase())!==-1):s}function Ps({gallery:s}){const t=ie(),a=s.map(o=>({src:o.imageUrl})),r=ms(a);return e.jsxs(e.Fragment,{children:[e.jsx(P,{variant:"h4",sx:{my:5},children:"Gallery"}),e.jsx(j,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:s.map(o=>e.jsxs(w,{sx:{cursor:"pointer",color:"common.white"},children:[e.jsx(S,{color:"inherit",sx:{position:"absolute",top:8,right:8,zIndex:9},children:e.jsx(x,{icon:"eva:more-vertical-fill"})}),e.jsx(M,{sx:{p:3,left:0,width:1,bottom:0,zIndex:9,position:"absolute"},primary:o.title,secondary:te(o.postedAt),primaryTypographyProps:{noWrap:!0,typography:"subtitle1"},secondaryTypographyProps:{mt:.5,color:"inherit",component:"span",typography:"body2",sx:{opacity:.48}}}),e.jsx(ne,{alt:"gallery",ratio:"1/1",src:o.imageUrl,onClick:()=>r.onOpen(o.imageUrl),overlay:`linear-gradient(to bottom, ${L(t.palette.grey[900],0)} 0%, ${t.palette.grey[900]} 75%)`})]},o.id))}),e.jsx(us,{index:r.selected,slides:a,open:r.open,close:r.onClose})]})}Ps.propTypes={gallery:l.array};function Fs({followers:s}){const t=s.slice(4,8).map(n=>n.id),[a,r]=c.useState(t),o=c.useCallback(n=>{const p=a.includes(n)?a.filter(y=>y!==n):[...a,n];r(p)},[a]);return e.jsxs(e.Fragment,{children:[e.jsx(P,{variant:"h4",sx:{my:5},children:"Followers"}),e.jsx(j,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:s.map(n=>e.jsx(Re,{follower:n,selected:a.includes(n.id),onSelected:()=>o(n.id)},n.id))})]})}Fs.propTypes={followers:l.array};function Re({follower:s,selected:t,onSelected:a}){const{name:r,country:o,avatarUrl:n}=s;return e.jsxs(w,{sx:{display:"flex",alignItems:"center",p:p=>p.spacing(3,2,3,3)},children:[e.jsx(T,{alt:r,src:n,sx:{width:48,height:48,mr:2}}),e.jsx(M,{primary:r,secondary:e.jsxs(e.Fragment,{children:[e.jsx(x,{icon:"mingcute:location-fill",width:16,sx:{flexShrink:0,mr:.5}}),o," country country country country country country country country country"]}),primaryTypographyProps:{noWrap:!0,typography:"subtitle2"},secondaryTypographyProps:{mt:.5,noWrap:!0,display:"flex",component:"span",alignItems:"center",typography:"caption",color:"text.disabled"}}),e.jsx(B,{size:"small",variant:t?"text":"outlined",color:t?"success":"inherit",startIcon:t?e.jsx(x,{width:18,icon:"eva:checkmark-fill",sx:{mr:-.75}}):null,onClick:a,sx:{flexShrink:0,ml:1.5},children:t?"Followed":"Follow"})]})}Re.propTypes={follower:l.object,onSelected:l.func,selected:l.bool};export{Is as P,vs as U,Cs as a,Fs as b,Ss as c,Ps as d,eo as e,bs as f,Se as g};
