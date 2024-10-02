import{r as p,g as te,a9 as K,c as k,h as _,o as M,j as e,ce as Ce,cg as U,S as T,ab as q,T as z,w as fe,aa as se,A as ae,f as x,d as N,C as V,M as O,F as Q,k as r,i as S,Q as X,I as ye,t as ve,G as re,d$ as we,am as Z,l as ke,e0 as Te,e1 as De,m as Fe,cN as Re,H as Se}from"./index-w2TjI0MF.js";import{b as Ie,c as Pe,a as Ae,i as Le,d as Ee}from"./format-time-gLo4N_aV.js";import{E as Oe}from"./empty-content-euVssf39.js";import{C as Y}from"./confirm-dialog-Aypc3550.js";import{g as Me}from"./utils-nxuioVAh.js";import{u as Be}from"./use-table-q5zAdmxy.js";import{a as ze,T as $e,c as Ne,d as We}from"./table-pagination-custom-Q_T7ptyt.js";import{u as le,F as ie,a as J,b as ee,c as Ge,d as H}from"./file-manager-folder-item-q76xJDn8.js";import{d as ce}from"./format-number-EJUytZhm.js";import{c as Ue,T as He,a as Ke,b as _e}from"./TableHead-YLlfzKMZ.js";import{T as E}from"./TableCell-Fp4KwiAp.js";import{C as B}from"./Checkbox-MPmUmIhR.js";import{A as de}from"./AvatarGroup-pTPQqkiR.js";import{B as R}from"./Button-craGvtks.js";import{t as qe}from"./TablePagination-cyjZ-mNp.js";import{s as pe,C as Ve}from"./custom-date-range-picker-mppj3hS9.js";import{T as Qe}from"./TextField-Rnx-roig.js";import{C as Ye}from"./CardActionArea-b-C7c9Ha.js";import{T as Je}from"./text-max-line-nWGsi_RG.js";import{C as G}from"./Chip-xwffwAcK.js";import{T as Xe,a as oe}from"./ToggleButtonGroup-FBvHr5IZ.js";import"./DialogTitle-RlTLSsU3.js";import"./dialogTitleClasses-DEvrnnr4.js";import"./DialogContent-ITde-Yrn.js";import"./DialogActions-UxlkhUlJ.js";import"./FormControlLabel-i471xspq.js";import"./Switch-uNCmthE_.js";import"./SwitchBase-0oakK23s.js";import"./ListItem-egfm1Owt.js";import"./isMuiElement-c8Cd3wTs.js";import"./Autocomplete-zVr0giqp.js";import"./Select-fj7_ZCHL.js";import"./index-q81m-9gd.js";import"./Close-f2MhZoYf.js";import"./upload-avatar-miqQoreL.js";import"./fade-MUwQyQUN.js";import"./image-8XOWnu1q.js";import"./KeyboardArrowRight-IzA2QHP7.js";import"./FirstPage-R9DouRzM.js";import"./DatePicker-fnQuhWtt.js";function Ze({click:o,doubleClick:n,timeout:u=250}){const t=p.useRef(),s=()=>{t&&(clearTimeout(t.current),t.current=null)};return p.useCallback(h=>{s(),o&&h.detail===1&&(t.current=setTimeout(()=>{o(h)},u)),h.detail%2===0&&n(h)},[o,n,u])}function he({row:o,selected:n,onSelectRow:u,onDeleteRow:t}){const s=te(),{name:h,size:C,type:i,modifiedAt:f,shared:c,isFavorited:l}=o,{enqueueSnackbar:b}=K(),{copy:v}=le(),[m,y]=p.useState(""),j=k(l),w=k(),d=k(),g=k(),a=_(),P=p.useCallback(F=>{y(F.target.value)},[]),I=Ze({click:()=>{w.onTrue()},doubleClick:()=>console.info("DOUBLE CLICK")}),A=p.useCallback(()=>{b("Copied!"),v(o.url)},[v,b,o.url]),D={borderTop:`solid 1px ${M(s.palette.grey[500],.16)}`,borderBottom:`solid 1px ${M(s.palette.grey[500],.16)}`,"&:first-of-type":{borderTopLeftRadius:16,borderBottomLeftRadius:16,borderLeft:`solid 1px ${M(s.palette.grey[500],.16)}`},"&:last-of-type":{borderTopRightRadius:16,borderBottomRightRadius:16,borderRight:`solid 1px ${M(s.palette.grey[500],.16)}`}};return e.jsxs(e.Fragment,{children:[e.jsxs(Ue,{selected:n,sx:{borderRadius:2,[`&.${Ce.selected}, &:hover`]:{backgroundColor:"background.paper",boxShadow:s.customShadows.z20,transition:s.transitions.create(["background-color","box-shadow"],{duration:s.transitions.duration.shortest}),"&:hover":{backgroundColor:"background.paper",boxShadow:s.customShadows.z20}},[`& .${U.root}`]:{...D},...w.value&&{[`& .${U.root}`]:{...D}}},children:[e.jsx(E,{padding:"checkbox",children:e.jsx(B,{checked:n,onDoubleClick:()=>console.info("ON DOUBLE CLICK"),onClick:u})}),e.jsx(E,{onClick:I,children:e.jsxs(T,{direction:"row",alignItems:"center",spacing:2,children:[e.jsx(q,{file:i,sx:{width:36,height:36}}),e.jsx(z,{noWrap:!0,variant:"inherit",sx:{maxWidth:360,cursor:"pointer",...w.value&&{fontWeight:"fontWeightBold"}},children:h})]})}),e.jsx(E,{onClick:I,sx:{whiteSpace:"nowrap"},children:ce(C)}),e.jsx(E,{onClick:I,sx:{whiteSpace:"nowrap"},children:i}),e.jsx(E,{onClick:I,sx:{whiteSpace:"nowrap"},children:e.jsx(fe,{primary:Ie(f),secondary:Pe(f),primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),e.jsx(E,{align:"right",onClick:I,children:e.jsx(de,{max:4,sx:{display:"inline-flex",[`& .${se.avatar}`]:{width:24,height:24,"&:first-of-type":{fontSize:12}}},children:c&&c.map(F=>e.jsx(ae,{alt:F.name,src:F.avatarUrl},F.id))})}),e.jsxs(E,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:[e.jsx(B,{color:"warning",icon:e.jsx(x,{icon:"eva:star-outline"}),checkedIcon:e.jsx(x,{icon:"eva:star-fill"}),checked:j.value,onChange:j.onToggle,sx:{p:.75}}),e.jsx(N,{color:a.open?"inherit":"default",onClick:a.onOpen,children:e.jsx(x,{icon:"eva:more-vertical-fill"})})]})]}),e.jsxs(V,{open:a.open,onClose:a.onClose,arrow:"right-top",sx:{width:160},children:[e.jsxs(O,{onClick:()=>{a.onClose(),A()},children:[e.jsx(x,{icon:"eva:link-2-fill"}),"Copy Link"]}),e.jsxs(O,{onClick:()=>{a.onClose(),d.onTrue()},children:[e.jsx(x,{icon:"solar:share-bold"}),"Share"]}),e.jsx(Q,{sx:{borderStyle:"dashed"}}),e.jsxs(O,{onClick:()=>{g.onTrue(),a.onClose()},sx:{color:"error.main"},children:[e.jsx(x,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]}),e.jsx(ie,{item:o,favorited:j.value,onFavorite:j.onToggle,onCopyLink:A,open:w.value,onClose:w.onFalse,onDelete:t}),e.jsx(J,{open:d.value,shared:c,inviteEmail:m,onChangeInvite:P,onCopyLink:A,onClose:()=>{d.onFalse(),y("")}}),e.jsx(Y,{open:g.value,onClose:g.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(R,{variant:"contained",color:"error",onClick:t,children:"Delete"})})]})}he.propTypes={row:r.object,selected:r.bool,onDeleteRow:r.func,onSelectRow:r.func};const eo=[{id:"name",label:"Name"},{id:"size",label:"Size",width:120},{id:"type",label:"Type",width:120},{id:"modifiedAt",label:"Modified",width:140},{id:"shared",label:"Shared",align:"right",width:140},{id:"",width:88}];function xe({table:o,notFound:n,onDeleteRow:u,dataFiltered:t,onOpenConfirm:s}){const h=te(),{dense:C,page:i,order:f,orderBy:c,rowsPerPage:l,selected:b,onSelectRow:v,onSelectAllRows:m,onSort:y,onChangeDense:j,onChangePage:w,onChangeRowsPerPage:d}=o;return e.jsxs(e.Fragment,{children:[e.jsxs(S,{sx:{position:"relative",m:h.spacing(-2,-3,-3,-3)},children:[e.jsx(ze,{dense:C,numSelected:b.length,rowCount:t.length,onSelectAllRows:g=>m(g,t.map(a=>a.id)),action:e.jsxs(e.Fragment,{children:[e.jsx(X,{title:"Share",children:e.jsx(N,{color:"primary",children:e.jsx(x,{icon:"solar:share-bold"})})}),e.jsx(X,{title:"Delete",children:e.jsx(N,{color:"primary",onClick:s,children:e.jsx(x,{icon:"solar:trash-bin-trash-bold"})})})]}),sx:{pl:1,pr:2,top:16,left:24,right:24,width:"auto",borderRadius:1.5}}),e.jsx(He,{sx:{p:h.spacing(0,3,3,3)},children:e.jsxs(Ke,{size:C?"small":"medium",sx:{minWidth:960,borderCollapse:"separate",borderSpacing:"0 16px"},children:[e.jsx($e,{order:f,orderBy:c,headLabel:eo,rowCount:t.length,numSelected:b.length,onSort:y,onSelectAllRows:g=>m(g,t.map(a=>a.id)),sx:{[`& .${U.head}`]:{"&:first-of-type":{borderTopLeftRadius:12,borderBottomLeftRadius:12},"&:last-of-type":{borderTopRightRadius:12,borderBottomRightRadius:12}}}}),e.jsxs(_e,{children:[t.slice(i*l,i*l+l).map(g=>e.jsx(he,{row:g,selected:b.includes(g.id),onSelectRow:()=>v(g.id),onDeleteRow:()=>u(g.id)},g.id)),e.jsx(Ne,{notFound:n,sx:{m:-2,borderRadius:1.5,border:`dashed 1px ${h.palette.divider}`}})]})]})})]}),e.jsx(We,{count:t.length,page:i,rowsPerPage:l,onPageChange:w,onRowsPerPageChange:d,dense:C,onChangeDense:j,sx:{[`& .${qe.toolbar}`]:{borderTopColor:"transparent"}}})]})}xe.propTypes={dataFiltered:r.array,notFound:r.bool,onDeleteRow:r.func,onOpenConfirm:r.func,table:r.object};function ue({openDateRange:o,onCloseDateRange:n,onOpenDateRange:u,filters:t,onFilters:s,dateError:h,typeOptions:C}){const i=_(),f=t.type.length?t.type.slice(0,2).join(","):"All type",c=p.useCallback(d=>{s("name",d.target.value)},[s]),l=p.useCallback(d=>{s("startDate",d)},[s]),b=p.useCallback(d=>{s("endDate",d)},[s]),v=p.useCallback(d=>{const g=t.type.includes(d)?t.type.filter(a=>a!==d):[...t.type,d];s("type",g)},[t.type,s]),m=p.useCallback(()=>{i.onClose(),s("type",[])},[s,i]),y=e.jsx(Qe,{value:t.name,onChange:c,placeholder:"Search...",InputProps:{startAdornment:e.jsx(ye,{position:"start",children:e.jsx(x,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},sx:{width:{xs:1,md:260}}}),j=e.jsxs(e.Fragment,{children:[e.jsxs(R,{color:"inherit",onClick:i.onOpen,endIcon:e.jsx(x,{icon:i.open?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill",sx:{ml:-.5}}),children:[f,t.type.length>2&&e.jsxs(ve,{color:"info",sx:{ml:1},children:["+",t.type.length-2]})]}),e.jsx(V,{open:i.open,onClose:i.onClose,sx:{p:2.5},children:e.jsxs(T,{spacing:2.5,children:[e.jsx(S,{gap:1,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(4, 1fr)"},children:C.map(d=>{const g=t.type.includes(d);return e.jsx(Ye,{onClick:()=>v(d),sx:{p:1,borderRadius:1,cursor:"pointer",border:a=>`solid 1px ${M(a.palette.grey[500],.08)}`,...g&&{bgcolor:"action.selected"}},children:e.jsxs(T,{spacing:1,direction:"row",alignItems:"center",children:[e.jsx(q,{file:d}),e.jsx(z,{variant:g?"subtitle2":"body2",children:d})]})},d)})}),e.jsxs(T,{spacing:1.5,direction:"row",alignItems:"center",justifyContent:"flex-end",children:[e.jsx(R,{variant:"outlined",color:"inherit",onClick:m,children:"Clear"}),e.jsx(R,{variant:"contained",onClick:i.onClose,children:"Apply"})]})]})})]}),w=e.jsxs(e.Fragment,{children:[e.jsx(R,{color:"inherit",onClick:u,endIcon:e.jsx(x,{icon:o?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill",sx:{ml:-.5}}),children:t.startDate&&t.endDate?pe(t.startDate,t.endDate):"Select Date"}),e.jsx(Ve,{variant:"calendar",startDate:t.startDate,endDate:t.endDate,onChangeStartDate:l,onChangeEndDate:b,open:o,onClose:n,selected:!!t.startDate&&!!t.endDate,error:h})]});return e.jsxs(T,{spacing:1,direction:{xs:"column",md:"row"},alignItems:{xs:"flex-end",md:"center"},sx:{width:1},children:[y,e.jsxs(T,{spacing:1,direction:"row",alignItems:"center",justifyContent:"flex-end",flexGrow:1,children:[w,j]})]})}ue.propTypes={dateError:r.bool,filters:r.object,onCloseDateRange:r.func,onFilters:r.func,onOpenDateRange:r.func,openDateRange:r.bool,typeOptions:r.array};function me({file:o,selected:n,onSelect:u,onDelete:t,sx:s,...h}){var A;const{enqueueSnackbar:C}=K(),{copy:i}=le(),[f,c]=p.useState(""),l=k(),b=k(),v=k(),m=k(),y=k(o.isFavorited),j=_(),w=p.useCallback(D=>{c(D.target.value)},[]),d=p.useCallback(()=>{C("Copied!"),i(o.url)},[i,C,o.url]),g=(l.value||n)&&u?e.jsx(B,{size:"medium",checked:n,onClick:u,icon:e.jsx(x,{icon:"eva:radio-button-off-fill"}),checkedIcon:e.jsx(x,{icon:"eva:checkmark-circle-2-fill"}),sx:{p:.75}}):e.jsx(q,{file:o.type,sx:{width:36,height:36}}),a=e.jsxs(T,{direction:"row",alignItems:"center",sx:{top:8,right:8,position:"absolute"},children:[e.jsx(B,{color:"warning",icon:e.jsx(x,{icon:"eva:star-outline"}),checkedIcon:e.jsx(x,{icon:"eva:star-fill"}),checked:y.value,onChange:y.onToggle}),e.jsx(N,{color:j.open?"inherit":"default",onClick:j.onOpen,children:e.jsx(x,{icon:"eva:more-vertical-fill"})})]}),P=e.jsxs(e.Fragment,{children:[e.jsx(Je,{persistent:!0,variant:"subtitle2",onClick:m.onTrue,sx:{width:1,mt:2,mb:.5},children:o.name}),e.jsxs(T,{direction:"row",alignItems:"center",sx:{maxWidth:.99,whiteSpace:"nowrap",typography:"caption",color:"text.disabled"},children:[ce(o.size),e.jsx(S,{component:"span",sx:{mx:.75,width:2,height:2,flexShrink:0,borderRadius:"50%",bgcolor:"currentColor"}}),e.jsx(z,{noWrap:!0,component:"span",variant:"caption",children:Ae(o.modifiedAt)})]})]}),I=e.jsx(de,{max:3,sx:{mt:1,[`& .${se.avatar}`]:{width:24,height:24,"&:first-of-type":{fontSize:12}}},children:(A=o.shared)==null?void 0:A.map(D=>e.jsx(ae,{alt:D.name,src:D.avatarUrl},D.id))});return e.jsxs(e.Fragment,{children:[e.jsxs(T,{component:re,variant:"outlined",alignItems:"flex-start",sx:{p:2.5,borderRadius:2,bgcolor:"unset",cursor:"pointer",position:"relative",...(l.value||n)&&{bgcolor:"background.paper",boxShadow:D=>D.customShadows.z20},...s},...h,children:[e.jsx(S,{onMouseEnter:l.onTrue,onMouseLeave:l.onFalse,children:g}),P,I,a]}),e.jsxs(V,{open:j.open,onClose:j.onClose,arrow:"right-top",sx:{width:160},children:[e.jsxs(O,{onClick:()=>{j.onClose(),d()},children:[e.jsx(x,{icon:"eva:link-2-fill"}),"Copy Link"]}),e.jsxs(O,{onClick:()=>{j.onClose(),b.onTrue()},children:[e.jsx(x,{icon:"solar:share-bold"}),"Share"]}),e.jsx(Q,{sx:{borderStyle:"dashed"}}),e.jsxs(O,{onClick:()=>{v.onTrue(),j.onClose()},sx:{color:"error.main"},children:[e.jsx(x,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]}),e.jsx(ie,{item:o,favorited:y.value,onFavorite:y.onToggle,onCopyLink:d,open:m.value,onClose:m.onFalse,onDelete:()=>{m.onFalse(),t()}}),e.jsx(J,{open:b.value,shared:o.shared,inviteEmail:f,onChangeInvite:w,onCopyLink:d,onClose:()=>{b.onFalse(),c("")}}),e.jsx(Y,{open:v.value,onClose:v.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(R,{variant:"contained",color:"error",onClick:t,children:"Delete"})})]})}me.propTypes={file:r.oneOfType([r.string,r.object]),onDelete:r.func,onSelect:r.func,selected:r.bool,sx:r.object};function ge({action:o,selected:n,rowCount:u,numSelected:t,onSelectAllItems:s,sx:h,...C}){return e.jsx(we,{children:e.jsxs(S,{sx:{right:0,zIndex:9,bottom:0,display:"flex",borderRadius:1.5,position:"fixed",alignItems:"center",bgcolor:"text.primary",p:i=>i.spacing(1.5,2,1.5,1),boxShadow:i=>i.customShadows.z20,m:{xs:2,md:3},...h},...C,children:[e.jsx(B,{indeterminate:!!t&&t<u,checked:!!u&&t===u,onChange:i=>s(i.target.checked),icon:e.jsx(x,{icon:"eva:radio-button-off-fill"}),checkedIcon:e.jsx(x,{icon:"eva:checkmark-circle-2-fill"}),indeterminateIcon:e.jsx(x,{icon:"eva:minus-circle-fill"})}),n&&e.jsxs(z,{variant:"subtitle2",sx:{mr:2,color:i=>i.palette.mode==="light"?"common.white":"grey.800"},children:[n.length," Items selected"]}),o&&o]})})}ge.propTypes={action:r.node,numSelected:r.number,onSelectAllItems:r.func,rowCount:r.number,selected:r.array,sx:r.object};function je({table:o,dataFiltered:n,onDeleteItem:u,onOpenConfirm:t}){const{selected:s,onSelectRow:h,onSelectAllRows:C}=o,i=p.useRef(null),[f,c]=p.useState(""),[l,b]=p.useState(""),v=k(),m=k(),y=k(),j=k(),w=k(),d=p.useCallback(a=>{b(a.target.value)},[]),g=p.useCallback(a=>{c(a.target.value)},[]);return e.jsxs(e.Fragment,{children:[e.jsxs(S,{ref:i,children:[e.jsx(ee,{title:"Folders",subTitle:`${n.filter(a=>a.type==="folder").length} folders`,onOpen:m.onTrue,collapse:w.value,onCollapse:w.onToggle}),e.jsx(Z,{in:!w.value,unmountOnExit:!0,children:e.jsx(S,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)",lg:"repeat(4, 1fr)"},children:n.filter(a=>a.type==="folder").map(a=>e.jsx(Ge,{folder:a,selected:s.includes(a.id),onSelect:()=>h(a.id),onDelete:()=>u(a.id),sx:{maxWidth:"auto"}},a.id))})}),e.jsx(Q,{sx:{my:5,borderStyle:"dashed"}}),e.jsx(ee,{title:"Files",subTitle:`${n.filter(a=>a.type!=="folder").length} files`,onOpen:y.onTrue,collapse:j.value,onCollapse:j.onToggle}),e.jsx(Z,{in:!j.value,unmountOnExit:!0,children:e.jsx(S,{display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)",lg:"repeat(4, 1fr)"},gap:3,children:n.filter(a=>a.type!=="folder").map(a=>e.jsx(me,{file:a,selected:s.includes(a.id),onSelect:()=>h(a.id),onDelete:()=>u(a.id),sx:{maxWidth:"auto"}},a.id))})}),!!(s!=null&&s.length)&&e.jsx(ge,{numSelected:s.length,rowCount:n.length,selected:s,onSelectAllItems:a=>C(a,n.map(P=>P.id)),action:e.jsxs(e.Fragment,{children:[e.jsx(R,{size:"small",color:"error",variant:"contained",startIcon:e.jsx(x,{icon:"solar:trash-bin-trash-bold"}),onClick:t,sx:{mr:1},children:"Delete"}),e.jsx(R,{color:"primary",size:"small",variant:"contained",startIcon:e.jsx(x,{icon:"solar:share-bold"}),onClick:v.onTrue,children:"Share"})]})})]}),e.jsx(J,{open:v.value,inviteEmail:l,onChangeInvite:d,onClose:()=>{v.onFalse(),b("")}}),e.jsx(H,{open:y.value,onClose:y.onFalse}),e.jsx(H,{open:m.value,onClose:m.onFalse,title:"New Folder",onCreate:()=>{m.onFalse(),c(""),console.info("CREATE NEW FOLDER",f)},folderName:f,onChangeFolderName:g})]})}je.propTypes={dataFiltered:r.array,onDeleteItem:r.func,onOpenConfirm:r.func,table:r.object};function be({filters:o,onFilters:n,canReset:u,onResetFilters:t,results:s,...h}){const C=pe(o.startDate,o.endDate),i=p.useCallback(()=>{n("name","")},[n]),f=p.useCallback(l=>{const b=o.type.filter(v=>v!==l);n("type",b)},[o.type,n]),c=p.useCallback(()=>{n("startDate",null),n("endDate",null)},[n]);return e.jsxs(T,{spacing:1.5,...h,children:[e.jsxs(S,{sx:{typography:"body2"},children:[e.jsx("strong",{children:s}),e.jsx(S,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),e.jsxs(T,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[!!o.type.length&&e.jsx($,{label:"Types:",children:o.type.map(l=>e.jsx(G,{label:l,size:"small",onDelete:()=>f(l)},l))}),o.startDate&&o.endDate&&e.jsx($,{label:"Date:",children:e.jsx(G,{size:"small",label:C,onDelete:c})}),!!o.name&&e.jsx($,{label:"Keyword:",children:e.jsx(G,{label:o.name,size:"small",onDelete:i})}),u&&e.jsx(R,{color:"error",onClick:t,startIcon:e.jsx(x,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]})}be.propTypes={canReset:r.bool,filters:r.object,onFilters:r.func,onResetFilters:r.func,results:r.number};function $({label:o,children:n,sx:u,...t}){return e.jsxs(T,{component:re,variant:"outlined",spacing:1,direction:"row",sx:{p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed",...u},...t,children:[e.jsx(S,{component:"span",sx:{typography:"subtitle2"},children:o}),e.jsx(T,{spacing:1,direction:"row",flexWrap:"wrap",children:n})]})}$.propTypes={children:r.node,label:r.string,sx:r.object};const ne={name:"",type:[],startDate:null,endDate:null};function oo(){const{enqueueSnackbar:o}=K(),n=Be({defaultRowsPerPage:10}),u=ke(),t=k(),s=k(),h=k(),[C,i]=p.useState("list"),[f,c]=p.useState(Te),[l,b]=p.useState(ne),v=Le(l.startDate,l.endDate),m=no({inputData:f,comparator:Me(n.order,n.orderBy),filters:l,dateError:v}),y=m.slice(n.page*n.rowsPerPage,n.page*n.rowsPerPage+n.rowsPerPage),j=!!l.name||!!l.type.length||!!l.startDate&&!!l.endDate,w=!m.length&&j||!m.length,d=p.useCallback((F,L)=>{L!==null&&i(L)},[]),g=p.useCallback((F,L)=>{n.onResetPage(),b(W=>({...W,[F]:L}))},[n]),a=p.useCallback(()=>{b(ne)},[]),P=p.useCallback(F=>{const L=f.filter(W=>W.id!==F);o("Delete success!"),c(L),n.onUpdatePageDeleteRow(y.length)},[y.length,o,n,f]),I=p.useCallback(()=>{const F=f.filter(L=>!n.selected.includes(L.id));o("Delete success!"),c(F),n.onUpdatePageDeleteRows({totalRowsInPage:y.length,totalRowsFiltered:m.length})},[m.length,y.length,o,n,f]),A=e.jsxs(T,{spacing:2,direction:{xs:"column",md:"row"},alignItems:{xs:"flex-end",md:"center"},children:[e.jsx(ue,{openDateRange:t.value,onCloseDateRange:t.onFalse,onOpenDateRange:t.onTrue,filters:l,onFilters:g,dateError:v,typeOptions:De}),e.jsxs(Xe,{size:"small",value:C,exclusive:!0,onChange:d,children:[e.jsx(oe,{value:"list",children:e.jsx(x,{icon:"solar:list-bold"})}),e.jsx(oe,{value:"grid",children:e.jsx(x,{icon:"mingcute:dot-grid-fill"})})]})]}),D=e.jsx(be,{filters:l,onResetFilters:a,canReset:j,onFilters:g,results:m.length});return e.jsxs(e.Fragment,{children:[e.jsxs(Fe,{maxWidth:u.themeStretch?!1:"lg",children:[e.jsxs(T,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsx(z,{variant:"h4",children:"File Manager"}),e.jsx(R,{variant:"contained",startIcon:e.jsx(x,{icon:"eva:cloud-upload-fill"}),onClick:h.onTrue,children:"Upload"})]}),e.jsxs(T,{spacing:2.5,sx:{my:{xs:3,md:5}},children:[A,j&&D]}),w?e.jsx(Oe,{filled:!0,title:"No Data",sx:{py:10}}):e.jsx(e.Fragment,{children:C==="list"?e.jsx(xe,{table:n,dataFiltered:m,onDeleteRow:P,notFound:w,onOpenConfirm:s.onTrue}):e.jsx(je,{table:n,dataFiltered:m,onDeleteItem:P,onOpenConfirm:s.onTrue})})]}),e.jsx(H,{open:h.value,onClose:h.onFalse}),e.jsx(Y,{open:s.value,onClose:s.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete ",e.jsxs("strong",{children:[" ",n.selected.length," "]})," items?"]}),action:e.jsx(R,{variant:"contained",color:"error",onClick:()=>{I(),s.onFalse()},children:"Delete"})})]})}function no({inputData:o,comparator:n,filters:u,dateError:t}){const{name:s,type:h,startDate:C,endDate:i}=u,f=o.map((c,l)=>[c,l]);return f.sort((c,l)=>{const b=n(c[0],l[0]);return b!==0?b:c[1]-l[1]}),o=f.map(c=>c[0]),s&&(o=o.filter(c=>c.name.toLowerCase().indexOf(s.toLowerCase())!==-1)),h.length&&(o=o.filter(c=>h.includes(Re(c.type)))),t||C&&i&&(o=o.filter(c=>Ee(c.createdAt,C,i))),o}function Ho(){return e.jsxs(e.Fragment,{children:[e.jsx(Se,{children:e.jsx("title",{children:" Dashboard: File Manager"})}),e.jsx(oo,{})]})}export{Ho as default};
