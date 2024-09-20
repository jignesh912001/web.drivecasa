import{c as V,h as q,j as e,i as c,A as N,x as F,v as _,d as y,f as m,ao as pe,S as o,K,C as M,M as I,q as D,k as a,r as j,I as me,ab as ue,l as Y,a as je,ap as Z,p as L,m as ee,o as ge,V as be,t as se,aq as re,T as E,L as ye,J as H,R as we,G as $}from"./index-WqsZrxyt.js";import{b as fe,c as Ce,i as Te,d as ve,a as P}from"./format-time-_tAHxme9.js";import{C as ne}from"./confirm-dialog-MYlpUTbV.js";import{C as Se}from"./custom-breadcrumbs-QEqK1FU9.js";import{e as De,g as ke}from"./utils-nxuioVAh.js";import{u as Pe}from"./use-table-hwufPPQ0.js";import{a as Q,b as Re,T as Ie,c as Ae,d as Oe,e as Fe}from"./table-pagination-custom-GC-hbQqr.js";import{b as v}from"./format-number-NO6AdYpl.js";import{T as f}from"./TablePagination-8T-6Azdf.js";import{C as Le}from"./Checkbox-1fwRKLt1.js";import{D as J}from"./DatePicker-qNTB6Vx9.js";import{f as Be,T as Ne}from"./TextField-2tCbVTps.js";import{s as Ee}from"./custom-date-range-picker-CSYmhMYB.js";import{C as G}from"./Chip-rCFgLS50.js";import{C as W}from"./Card-O5fbCiLF.js";import{T as We,a as Ue}from"./Tabs-f195X-wR.js";import{T as ze,a as He,b as $e}from"./TableContainer-IAKV6XcT.js";import{C as R}from"./CardHeader-MvVLinMv.js";import{T as Ge,t as Ve,a as qe,b as _e,c as Ke,d as Me,e as Qe}from"./TimelineItem--acbqwQD.js";function te({row:r,selected:s,onViewRow:n,onSelectRow:l,onDeleteRow:h}){const{items:x,status:d,orderNumber:t,createdAt:b,customer:p,totalQuantity:u,subTotal:w}=r,A=V(),S=V(),C=q(),k=e.jsxs(Q,{hover:!0,selected:s,children:[e.jsx(f,{padding:"checkbox",children:e.jsx(Le,{checked:s,onClick:l})}),e.jsx(f,{children:e.jsx(c,{onClick:n,sx:{cursor:"pointer","&:hover":{textDecoration:"underline"}},children:t})}),e.jsxs(f,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(N,{alt:p.name,src:p.avatarUrl,sx:{mr:2}}),e.jsx(F,{primary:p.name,secondary:p.email,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled"}})]}),e.jsx(f,{children:e.jsx(F,{primary:fe(b),secondary:Ce(b),primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),e.jsxs(f,{align:"center",children:[" ",u," "]}),e.jsxs(f,{children:[" ",v(w)," "]}),e.jsx(f,{children:e.jsx(_,{variant:"soft",color:d==="completed"&&"success"||d==="pending"&&"warning"||d==="cancelled"&&"error"||"default",children:d})}),e.jsxs(f,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:[e.jsx(y,{color:S.value?"inherit":"default",onClick:S.onToggle,sx:{...S.value&&{bgcolor:"action.hover"}},children:e.jsx(m,{icon:"eva:arrow-ios-downward-fill"})}),e.jsx(y,{color:C.open?"inherit":"default",onClick:C.onOpen,children:e.jsx(m,{icon:"eva:more-vertical-fill"})})]})]}),U=e.jsx(Q,{children:e.jsx(f,{sx:{p:0,border:"none"},colSpan:8,children:e.jsx(pe,{in:S.value,timeout:"auto",unmountOnExit:!0,sx:{bgcolor:"background.neutral"},children:e.jsx(o,{component:K,sx:{m:1.5},children:x.map(T=>e.jsxs(o,{direction:"row",alignItems:"center",sx:{p:O=>O.spacing(1.5,2,1.5,1.5),"&:not(:last-of-type)":{borderBottom:O=>`solid 2px ${O.palette.background.neutral}`}},children:[e.jsx(N,{src:T.coverUrl,variant:"rounded",sx:{width:48,height:48,mr:2}}),e.jsx(F,{primary:T.name,secondary:T.sku,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled",mt:.5}}),e.jsxs(c,{children:["x",T.quantity]}),e.jsx(c,{sx:{width:110,textAlign:"right"},children:v(T.price)})]},T.id))})})})});return e.jsxs(e.Fragment,{children:[k,U,e.jsxs(M,{open:C.open,onClose:C.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(I,{onClick:()=>{A.onTrue(),C.onClose()},sx:{color:"error.main"},children:[e.jsx(m,{icon:"solar:trash-bin-trash-bold"}),"Delete"]}),e.jsxs(I,{onClick:()=>{n(),C.onClose()},children:[e.jsx(m,{icon:"solar:eye-bold"}),"View"]})]}),e.jsx(ne,{open:A.value,onClose:A.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(D,{variant:"contained",color:"error",onClick:h,children:"Delete"})})]})}te.propTypes={row:a.object,selected:a.bool,onViewRow:a.func,onDeleteRow:a.func,onSelectRow:a.func};function oe({filters:r,onFilters:s,dateError:n}){const l=q(),h=j.useCallback(t=>{s("name",t.target.value)},[s]),x=j.useCallback(t=>{s("startDate",t)},[s]),d=j.useCallback(t=>{s("endDate",t)},[s]);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{spacing:2,alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5,pr:{xs:2.5,md:1}},children:[e.jsx(J,{label:"Start date",value:r.startDate,onChange:x,slotProps:{textField:{fullWidth:!0}},sx:{maxWidth:{md:200}}}),e.jsx(J,{label:"End date",value:r.endDate,onChange:d,slotProps:{textField:{fullWidth:!0,error:n,helperText:n&&"End date must be later than start date"}},sx:{maxWidth:{md:200},[`& .${Be.root}`]:{position:{md:"absolute"},bottom:{md:-40}}}}),e.jsxs(o,{direction:"row",alignItems:"center",spacing:2,flexGrow:1,sx:{width:1},children:[e.jsx(Ne,{fullWidth:!0,value:r.name,onChange:h,placeholder:"Search customer or order number...",InputProps:{startAdornment:e.jsx(me,{position:"start",children:e.jsx(m,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsx(y,{onClick:l.onOpen,children:e.jsx(m,{icon:"eva:more-vertical-fill"})})]})]}),e.jsxs(M,{open:l.open,onClose:l.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(I,{onClick:()=>{l.onClose()},children:[e.jsx(m,{icon:"solar:printer-minimalistic-bold"}),"Print"]}),e.jsxs(I,{onClick:()=>{l.onClose()},children:[e.jsx(m,{icon:"solar:import-bold"}),"Import"]}),e.jsxs(I,{onClick:()=>{l.onClose()},children:[e.jsx(m,{icon:"solar:export-bold"}),"Export"]})]})]})}oe.propTypes={dateError:a.bool,filters:a.object,onFilters:a.func};function ae({filters:r,onFilters:s,onResetFilters:n,results:l,...h}){const x=Ee(r.startDate,r.endDate),d=j.useCallback(()=>{s("name","")},[s]),t=j.useCallback(()=>{s("status","all")},[s]),b=j.useCallback(()=>{s("startDate",null),s("endDate",null)},[s]);return e.jsxs(o,{spacing:1.5,...h,children:[e.jsxs(c,{sx:{typography:"body2"},children:[e.jsx("strong",{children:l}),e.jsx(c,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),e.jsxs(o,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[r.status!=="all"&&e.jsx(B,{label:"Status:",children:e.jsx(G,{size:"small",label:r.status,onDelete:t})}),r.startDate&&r.endDate&&e.jsx(B,{label:"Date:",children:e.jsx(G,{size:"small",label:x,onDelete:b})}),!!r.name&&e.jsx(B,{label:"Keyword:",children:e.jsx(G,{label:r.name,size:"small",onDelete:d})}),e.jsx(D,{color:"error",onClick:n,startIcon:e.jsx(m,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]})}ae.propTypes={filters:a.object,onFilters:a.func,onResetFilters:a.func,results:a.number};function B({label:r,children:s,sx:n,...l}){return e.jsxs(o,{component:K,variant:"outlined",spacing:1,direction:"row",sx:{p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed",...n},...l,children:[e.jsx(c,{component:"span",sx:{typography:"subtitle2"},children:r}),e.jsx(o,{spacing:1,direction:"row",flexWrap:"wrap",children:s})]})}B.propTypes={children:a.node,label:a.string,sx:a.object};const Je=[{value:"all",label:"All"},...re],Xe=[{id:"orderNumber",label:"Order",width:116},{id:"name",label:"Customer"},{id:"createdAt",label:"Date",width:140},{id:"totalQuantity",label:"Items",width:120,align:"center"},{id:"totalAmount",label:"Price",width:140},{id:"status",label:"Status",width:110},{id:"",width:88}],X={name:"",status:"all",startDate:null,endDate:null};function ys(){const{enqueueSnackbar:r}=ue(),s=Pe({defaultOrderBy:"orderNumber"}),n=Y(),l=je(),h=V(),[x,d]=j.useState(Z),[t,b]=j.useState(X),p=Te(t.startDate,t.endDate),u=Ye({inputData:x,comparator:ke(s.order,s.orderBy),filters:t,dateError:p}),w=u.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage),A=s.dense?56:76,S=!!t.name||t.status!=="all"||!!t.startDate&&!!t.endDate,C=!u.length&&S||!u.length,k=j.useCallback((i,g)=>{s.onResetPage(),b(z=>({...z,[i]:g}))},[s]),U=j.useCallback(()=>{b(X)},[]),T=j.useCallback(i=>{const g=x.filter(z=>z.id!==i);r("Delete success!"),d(g),s.onUpdatePageDeleteRow(w.length)},[w.length,r,s,x]),O=j.useCallback(()=>{const i=x.filter(g=>!s.selected.includes(g.id));r("Delete success!"),d(i),s.onUpdatePageDeleteRows({totalRowsInPage:w.length,totalRowsFiltered:u.length})},[u.length,w.length,r,s,x]),xe=j.useCallback(i=>{l.push(L.dashboard.order.details(i))},[l]),he=j.useCallback((i,g)=>{k("status",g)},[k]);return e.jsxs(e.Fragment,{children:[e.jsxs(ee,{maxWidth:n.themeStretch?!1:"lg",children:[e.jsx(Se,{heading:"List",links:[{name:"Dashboard",href:L.dashboard.root},{name:"Order",href:L.dashboard.order.root},{name:"List"}],sx:{mb:{xs:3,md:5}}}),e.jsxs(W,{children:[e.jsx(We,{value:t.status,onChange:he,sx:{px:2.5,boxShadow:i=>`inset 0 -2px 0 0 ${ge(i.palette.grey[500],.08)}`},children:Je.map(i=>e.jsx(Ue,{iconPosition:"end",value:i.value,label:i.label,icon:e.jsx(_,{variant:(i.value==="all"||i.value===t.status)&&"filled"||"soft",color:i.value==="completed"&&"success"||i.value==="pending"&&"warning"||i.value==="cancelled"&&"error"||"default",children:["completed","pending","cancelled","refunded"].includes(i.value)?x.filter(g=>g.status===i.value).length:x.length})},i.value))}),e.jsx(oe,{filters:t,onFilters:k,dateError:p}),S&&e.jsx(ae,{filters:t,onFilters:k,onResetFilters:U,results:u.length,sx:{p:2.5,pt:0}}),e.jsxs(ze,{sx:{position:"relative",overflow:"unset"},children:[e.jsx(Re,{dense:s.dense,numSelected:s.selected.length,rowCount:u.length,onSelectAllRows:i=>s.onSelectAllRows(i,u.map(g=>g.id)),action:e.jsx(be,{title:"Delete",children:e.jsx(y,{color:"primary",onClick:h.onTrue,children:e.jsx(m,{icon:"solar:trash-bin-trash-bold"})})})}),e.jsx(se,{children:e.jsxs(He,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(Ie,{order:s.order,orderBy:s.orderBy,headLabel:Xe,rowCount:u.length,numSelected:s.selected.length,onSort:s.onSort,onSelectAllRows:i=>s.onSelectAllRows(i,u.map(g=>g.id))}),e.jsxs($e,{children:[u.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map(i=>e.jsx(te,{row:i,selected:s.selected.includes(i.id),onSelectRow:()=>s.onSelectRow(i.id),onDeleteRow:()=>T(i.id),onViewRow:()=>xe(i.id)},i.id)),e.jsx(Ae,{height:A,emptyRows:De(s.page,s.rowsPerPage,u.length)}),e.jsx(Oe,{notFound:C})]})]})})]}),e.jsx(Fe,{count:u.length,page:s.page,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onRowsPerPageChange:s.onChangeRowsPerPage,dense:s.dense,onChangeDense:s.onChangeDense})]})]}),e.jsx(ne,{open:h.value,onClose:h.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete ",e.jsxs("strong",{children:[" ",s.selected.length," "]})," items?"]}),action:e.jsx(D,{variant:"contained",color:"error",onClick:()=>{O(),h.onFalse()},children:"Delete"})})]})}function Ye({inputData:r,comparator:s,filters:n,dateError:l}){const{status:h,name:x,startDate:d,endDate:t}=n,b=r.map((p,u)=>[p,u]);return b.sort((p,u)=>{const w=s(p[0],u[0]);return w!==0?w:p[1]-u[1]}),r=b.map(p=>p[0]),x&&(r=r.filter(p=>p.orderNumber.toLowerCase().indexOf(x.toLowerCase())!==-1||p.customer.name.toLowerCase().indexOf(x.toLowerCase())!==-1||p.customer.email.toLowerCase().indexOf(x.toLowerCase())!==-1)),h!=="all"&&(r=r.filter(p=>p.status===h)),l||d&&t&&(r=r.filter(p=>ve(p.createdAt,d,t))),r}function le({customer:r,delivery:s,payment:n,shippingAddress:l}){const h=e.jsxs(e.Fragment,{children:[e.jsx(R,{title:"Customer Info",action:e.jsx(y,{children:e.jsx(m,{icon:"solar:pen-bold"})})}),e.jsxs(o,{direction:"row",sx:{p:3},children:[e.jsx(N,{alt:r.name,src:r.avatarUrl,sx:{width:48,height:48,mr:2}}),e.jsxs(o,{spacing:.5,alignItems:"flex-start",sx:{typography:"body2"},children:[e.jsx(E,{variant:"subtitle2",children:r.name}),e.jsx(c,{sx:{color:"text.secondary"},children:r.email}),e.jsxs(c,{children:["IP Address:",e.jsx(c,{component:"span",sx:{color:"text.secondary",ml:.25},children:r.ipAddress})]}),e.jsx(D,{size:"small",color:"error",startIcon:e.jsx(m,{icon:"mingcute:add-line"}),sx:{mt:1},children:"Add to Blacklist"})]})]})]}),x=e.jsxs(e.Fragment,{children:[e.jsx(R,{title:"Delivery",action:e.jsx(y,{children:e.jsx(m,{icon:"solar:pen-bold"})})}),e.jsxs(o,{spacing:1.5,sx:{p:3,typography:"body2"},children:[e.jsxs(o,{direction:"row",alignItems:"center",children:[e.jsx(c,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Ship by"}),s.shipBy]}),e.jsxs(o,{direction:"row",alignItems:"center",children:[e.jsx(c,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Speedy"}),s.speedy]}),e.jsxs(o,{direction:"row",alignItems:"center",children:[e.jsx(c,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Tracking No."}),e.jsx(ye,{underline:"always",color:"inherit",children:s.trackingNumber})]})]})]}),d=e.jsxs(e.Fragment,{children:[e.jsx(R,{title:"Shipping",action:e.jsx(y,{children:e.jsx(m,{icon:"solar:pen-bold"})})}),e.jsxs(o,{spacing:1.5,sx:{p:3,typography:"body2"},children:[e.jsxs(o,{direction:"row",children:[e.jsx(c,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Address"}),l.fullAddress]}),e.jsxs(o,{direction:"row",children:[e.jsx(c,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Phone number"}),l.phoneNumber]})]})]}),t=e.jsxs(e.Fragment,{children:[e.jsx(R,{title:"Payment",action:e.jsx(y,{children:e.jsx(m,{icon:"solar:pen-bold"})})}),e.jsxs(o,{direction:"row",alignItems:"center",sx:{p:3,typography:"body2"},children:[e.jsx(c,{component:"span",sx:{color:"text.secondary",flexGrow:1},children:"Phone number"}),n.cardNumber,e.jsx(m,{icon:"logos:mastercard",width:24,sx:{ml:.5}})]})]});return e.jsxs(W,{children:[h,e.jsx(H,{sx:{borderStyle:"dashed"}}),x,e.jsx(H,{sx:{borderStyle:"dashed"}}),d,e.jsx(H,{sx:{borderStyle:"dashed"}}),t]})}le.propTypes={customer:a.object,delivery:a.object,payment:a.object,shippingAddress:a.object};function ie({items:r,taxes:s,shipping:n,discount:l,subTotal:h,totalAmount:x}){const d=e.jsxs(o,{spacing:2,alignItems:"flex-end",sx:{my:3,textAlign:"right",typography:"body2"},children:[e.jsxs(o,{direction:"row",children:[e.jsx(c,{sx:{color:"text.secondary"},children:"Subtotal"}),e.jsx(c,{sx:{width:160,typography:"subtitle2"},children:v(h)||"-"})]}),e.jsxs(o,{direction:"row",children:[e.jsx(c,{sx:{color:"text.secondary"},children:"Shipping"}),e.jsx(c,{sx:{width:160,...n&&{color:"error.main"}},children:n?`- ${v(n)}`:"-"})]}),e.jsxs(o,{direction:"row",children:[e.jsx(c,{sx:{color:"text.secondary"},children:"Discount"}),e.jsx(c,{sx:{width:160,...l&&{color:"error.main"}},children:l?`- ${v(l)}`:"-"})]}),e.jsxs(o,{direction:"row",children:[e.jsx(c,{sx:{color:"text.secondary"},children:"Taxes"}),e.jsx(c,{sx:{width:160},children:s?v(s):"-"})]}),e.jsxs(o,{direction:"row",sx:{typography:"subtitle1"},children:[e.jsx(c,{children:"Total"}),e.jsx(c,{sx:{width:160},children:v(x)||"-"})]})]});return e.jsxs(W,{children:[e.jsx(R,{title:"Details",action:e.jsx(y,{children:e.jsx(m,{icon:"solar:pen-bold"})})}),e.jsxs(o,{sx:{px:3},children:[e.jsx(se,{children:r.map(t=>e.jsxs(o,{direction:"row",alignItems:"center",sx:{py:3,minWidth:640,borderBottom:b=>`dashed 2px ${b.palette.background.neutral}`},children:[e.jsx(N,{src:t.coverUrl,variant:"rounded",sx:{width:48,height:48,mr:2}}),e.jsx(F,{primary:t.name,secondary:t.sku,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled",mt:.5}}),e.jsxs(c,{sx:{typography:"body2"},children:["x",t.quantity]}),e.jsx(c,{sx:{width:110,textAlign:"right",typography:"subtitle2"},children:v(t.price)})]},t.id))}),d]})]})}ie.propTypes={discount:a.number,items:a.array,shipping:a.number,subTotal:a.number,taxes:a.number,totalAmount:a.number};function ce({status:r,backLink:s,createdAt:n,orderNumber:l,statusOptions:h,onChangeStatus:x}){const d=q();return e.jsxs(e.Fragment,{children:[e.jsxs(o,{spacing:3,direction:{xs:"column",md:"row"},sx:{mb:{xs:3,md:5}},children:[e.jsxs(o,{spacing:1,direction:"row",alignItems:"flex-start",children:[e.jsx(y,{component:we,href:s,children:e.jsx(m,{icon:"eva:arrow-ios-back-fill"})}),e.jsxs(o,{spacing:.5,children:[e.jsxs(o,{spacing:1,direction:"row",alignItems:"center",children:[e.jsxs(E,{variant:"h4",children:[" Order ",l," "]}),e.jsx(_,{variant:"soft",color:r==="completed"&&"success"||r==="pending"&&"warning"||r==="cancelled"&&"error"||"default",children:r})]}),e.jsx(E,{variant:"body2",sx:{color:"text.disabled"},children:P(n)})]})]}),e.jsxs(o,{flexGrow:1,spacing:1.5,direction:"row",alignItems:"center",justifyContent:"flex-end",children:[e.jsx(D,{color:"inherit",variant:"outlined",endIcon:e.jsx(m,{icon:"eva:arrow-ios-downward-fill"}),onClick:d.onOpen,sx:{textTransform:"capitalize"},children:r}),e.jsx(D,{color:"inherit",variant:"outlined",startIcon:e.jsx(m,{icon:"solar:printer-minimalistic-bold"}),children:"Print"}),e.jsx(D,{color:"inherit",variant:"contained",startIcon:e.jsx(m,{icon:"solar:pen-bold"}),children:"Edit"})]})]}),e.jsx(M,{open:d.open,onClose:d.onClose,arrow:"top-right",sx:{width:140},children:h.map(t=>e.jsx(I,{selected:t.value===r,onClick:()=>{d.onClose(),x(t.value)},children:t.label},t.value))})]})}ce.propTypes={backLink:a.string,createdAt:a.instanceOf(Date),onChangeStatus:a.func,orderNumber:a.string,status:a.string,statusOptions:a.array};function de({history:r}){const s=e.jsxs(o,{spacing:2,component:K,variant:"outlined",sx:{p:2.5,minWidth:260,flexShrink:0,borderRadius:2,typography:"body2",borderStyle:"dashed"},children:[e.jsxs(o,{spacing:.5,children:[e.jsx(c,{sx:{color:"text.disabled"},children:"Order time"}),P(r.orderTime)]}),e.jsxs(o,{spacing:.5,children:[e.jsx(c,{sx:{color:"text.disabled"},children:"Payment time"}),P(r.orderTime)]}),e.jsxs(o,{spacing:.5,children:[e.jsx(c,{sx:{color:"text.disabled"},children:"Delivery time for the carrier"}),P(r.orderTime)]}),e.jsxs(o,{spacing:.5,children:[e.jsx(c,{sx:{color:"text.disabled"},children:"Completion time"}),P(r.orderTime)]})]}),n=e.jsx(Ge,{sx:{p:0,m:0,[`& .${Ve.root}:before`]:{flex:0,padding:0}},children:r.timeline.map((l,h)=>{const x=h===0,d=h===r.timeline.length-1;return e.jsxs(qe,{children:[e.jsxs(_e,{children:[e.jsx(Ke,{color:x&&"primary"||"grey"}),d?null:e.jsx(Me,{})]}),e.jsxs(Qe,{children:[e.jsx(E,{variant:"subtitle2",children:l.title}),e.jsx(c,{sx:{color:"text.disabled",typography:"caption",mt:.5},children:P(l.time)})]})]},l.title)})});return e.jsxs(W,{children:[e.jsx(R,{title:"History"}),e.jsxs(o,{spacing:3,alignItems:{md:"flex-start"},direction:{xs:"column-reverse",md:"row"},sx:{p:3},children:[n,s]})]})}de.propTypes={history:a.object};function Ze({id:r}){const s=Y(),n=Z.filter(d=>d.id===r)[0],[l,h]=j.useState(n.status),x=j.useCallback(d=>{h(d)},[]);return e.jsxs(ee,{maxWidth:s.themeStretch?!1:"lg",children:[e.jsx(ce,{backLink:L.dashboard.order.root,orderNumber:n.orderNumber,createdAt:n.createdAt,status:l,onChangeStatus:x,statusOptions:re}),e.jsxs($,{container:!0,spacing:3,children:[e.jsx($,{xs:12,md:8,children:e.jsxs(o,{spacing:3,direction:{xs:"column-reverse",md:"column"},children:[e.jsx(ie,{items:n.items,taxes:n.taxes,shipping:n.shipping,discount:n.discount,subTotal:n.subTotal,totalAmount:n.totalAmount}),e.jsx(de,{history:n.history})]})}),e.jsx($,{xs:12,md:4,children:e.jsx(le,{customer:n.customer,delivery:n.delivery,payment:n.payment,shippingAddress:n.shippingAddress})})]})]})}Ze.propTypes={id:a.string};export{ys as O,Ze as a};
