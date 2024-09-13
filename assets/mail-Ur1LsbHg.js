import{cT as z,r as j,cU as A,j as e,dw as q,f as a,x as $,T as f,k as c,S as n,o as S,$ as L,q as M,t as D,cN as X,A as Z,i as T,I as J,d as u,c as C,dP as je,dZ as be,K as fe,X as G,v as ye,bP as ve,bO as we,V as P,L as ke,B as Ce,ao as Ie,ad as Te,J as O,a as Se,b as Me,l as Le,p as w,m as Ee,d_ as Ne,H as Re}from"./index-8hdvFbfH.js";import{u as B}from"./index-xh0rewYp.js";import{k as Pe,f as Ue}from"./keyBy-2cZScaCL.js";import{E as F}from"./empty-content-NmOrUC5h.js";import{S as I}from"./Skeleton-L9jl8EjT.js";import{T as K}from"./TextField-XB6qHceY.js";import{E as Q}from"./editor-Jqx9Fz6S.js";import{a as Fe}from"./format-time-1aCm4qMf.js";import{M as ze}from"./markdown-JLXk1KGV.js";import{T as Ae}from"./text-max-line-MUj8jKI3.js";import{C as _}from"./Checkbox-J2niBBa-.js";import"./_baseEach-wKigy7BZ.js";import"./_baseIteratee-cBU_bD9J.js";import"./_baseToString-2yN2sPqC.js";import"./Select-zSKw2ZR7.js";import"./index-q81m-9gd.js";import"./image-zKKRrQWq.js";import"./SwitchBase-cpD-JjHB.js";function $e(){const s=A.mail.labels,{data:r,isLoading:o,error:l,isValidating:i}=B(s,z);return j.useMemo(()=>({labels:(r==null?void 0:r.labels)||[],labelsLoading:o,labelsError:l,labelsValidating:i,labelsEmpty:!o&&!(r!=null&&r.labels.length)}),[r==null?void 0:r.labels,l,o,i])}function De(s){const r=s?[A.mail.list,{params:{labelId:s}}]:"",{data:o,isLoading:l,error:i,isValidating:x}=B(r,z);return j.useMemo(()=>{const h=Pe(o==null?void 0:o.mails,"id")||{},m=Object.keys(h)||[];return{mails:{byId:h,allIds:m},mailsLoading:l,mailsError:i,mailsValidating:x,mailsEmpty:!l&&!m.length}},[o==null?void 0:o.mails,i,l,x])}function Be(s){const r=s?[A.mail.details,{params:{mailId:s}}]:"",{data:o,isLoading:l,error:i,isValidating:x}=B(r,z);return j.useMemo(()=>({mail:o==null?void 0:o.mail,mailLoading:l,mailError:i,mailValidating:x}),[o==null?void 0:o.mail,i,l,x])}const Ve={all:"fluent:mail-24-filled",inbox:"solar:inbox-bold",trash:"solar:trash-bin-trash-bold",drafts:"solar:file-text-bold",spam:"solar:danger-bold",sent:"iconamoon:send-fill",starred:"eva:star-fill",important:"material-symbols:label-important-rounded",social:"solar:tag-horizontal-bold-duotone",promotions:"solar:tag-horizontal-bold-duotone",forums:"solar:tag-horizontal-bold-duotone"};function Y({selected:s,label:r,onClickNavItem:o,...l}){const{unreadCount:i,color:x,name:t}=r,h=Ve[r.id];return e.jsxs(q,{disableRipple:!0,onClick:o,sx:{px:0,height:40,color:"text.secondary",...s&&{color:"text.primary"},"&:hover":{bgcolor:"transparent"}},...l,children:[e.jsx(a,{icon:h,width:22,sx:{mr:2,color:x}}),e.jsx($,{primary:t,primaryTypographyProps:{textTransform:"capitalize",typography:s?"subtitle2":"body2"}}),!!i&&e.jsx(f,{variant:"caption",children:i})]})}Y.propTypes={selected:c.bool,label:c.object,onClickNavItem:c.func};function ee({sx:s,...r}){return e.jsxs(n,{spacing:2,direction:"row",alignItems:"center",sx:{py:1,color:o=>S(o.palette.grey[500],.24),...s},...r,children:[e.jsx(I,{variant:"circular",sx:{width:32,height:32,bgcolor:"currentColor"}}),e.jsx(I,{sx:{width:.5,height:10,bgcolor:"currentColor"}})]})}ee.propTypes={sx:c.object};function se({sx:s,...r}){return e.jsxs(n,{spacing:2,direction:"row",alignItems:"center",sx:{py:1,...s},...r,children:[e.jsx(I,{variant:"circular",sx:{width:40,height:40}}),e.jsxs(n,{spacing:1,flexGrow:1,children:[e.jsx(I,{sx:{width:.75,height:10}}),e.jsx(I,{sx:{width:.5,height:10}})]})]})}se.propTypes={sx:c.object};function oe({loading:s,openNav:r,onCloseNav:o,labels:l,selectedLabelId:i,handleClickLabel:x,onToggleCompose:t}){const h=L("up","md"),m=e.jsx(e.Fragment,{children:[...Array(8)].map((d,y)=>e.jsx(ee,{},y))}),p=e.jsx(e.Fragment,{children:l.map(d=>e.jsx(Y,{label:d,selected:i===d.id,onClickNavItem:()=>{x(d.id)}},d.id))}),g=e.jsxs(e.Fragment,{children:[e.jsx(n,{sx:{p:d=>({xs:d.spacing(2.5,2.5,2,2.5),md:d.spacing(2,1.5)})},children:e.jsx(M,{fullWidth:!0,color:"inherit",variant:"contained",startIcon:e.jsx(a,{icon:"solar:pen-bold"}),onClick:t,children:"Compose"})}),e.jsx(D,{children:e.jsxs(n,{sx:{px:{xs:3.5,md:2.5}},children:[s&&m,!!l.length&&p]})})]});return h?e.jsx(n,{sx:{width:200,flexShrink:0},children:g}):e.jsx(X,{open:r,onClose:o,slotProps:{backdrop:{invisible:!0}},PaperProps:{sx:{width:260}},children:g})}oe.propTypes={handleClickLabel:c.func,labels:c.array,loading:c.bool,onCloseNav:c.func,onToggleCompose:c.func,openNav:c.bool,selectedLabelId:c.string};function re({mail:s,selected:r,sx:o,...l}){return e.jsxs(q,{sx:{p:1,mb:.5,borderRadius:1,...r&&{bgcolor:"action.selected"},...o},...l,children:[e.jsx(Z,{alt:s.from.name,src:s.from.avatarUrl?`${s.from.avatarUrl}`:"",sx:{mr:2},children:s.from.name.charAt(0).toUpperCase()}),e.jsxs(e.Fragment,{children:[e.jsx($,{primary:s.from.name,primaryTypographyProps:{noWrap:!0,variant:"subtitle2"},secondary:s.message,secondaryTypographyProps:{noWrap:!0,component:"span",variant:s.isUnread?"subtitle2":"body2",color:s.isUnread?"text.primary":"text.secondary"}}),e.jsxs(n,{alignItems:"flex-end",sx:{ml:2,height:44},children:[e.jsx(f,{noWrap:!0,variant:"body2",component:"span",sx:{mb:1.5,fontSize:12,color:"text.disabled"},children:Ue(new Date(s.createdAt),{addSuffix:!1})}),!!s.isUnread&&e.jsx(T,{sx:{bgcolor:"info.main",width:8,height:8,borderRadius:"50%"}})]})]})]})}re.propTypes={mail:c.object,selected:c.bool,sx:c.object};function ne({loading:s,mails:r,openMail:o,onCloseMail:l,onClickMail:i,selectedLabelId:x,selectedMailId:t}){const h=L("up","md"),m=e.jsx(e.Fragment,{children:[...Array(8)].map((d,y)=>e.jsx(se,{},y))}),p=e.jsx(e.Fragment,{children:r.allIds.map(d=>e.jsx(re,{mail:r.byId[d],selected:t===d,onClick:()=>{i(d)}},d))}),g=e.jsxs(e.Fragment,{children:[e.jsx(n,{sx:{p:2},children:h?e.jsx(K,{placeholder:"Search...",InputProps:{startAdornment:e.jsx(J,{position:"start",children:e.jsx(a,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}):e.jsx(f,{variant:"h6",sx:{textTransform:"capitalize"},children:x})}),e.jsxs(D,{sx:{px:2},children:[s&&m,!!r.allIds.length&&p]})]});return h?e.jsx(n,{sx:{width:320,flexShrink:0,borderRadius:1.5,bgcolor:"background.default"},children:g}):e.jsx(X,{open:o,onClose:l,slotProps:{backdrop:{invisible:!0}},PaperProps:{sx:{width:320}},children:g})}ne.propTypes={loading:c.bool,mails:c.object,onClickMail:c.func,onCloseMail:c.func,openMail:c.bool,selectedLabelId:c.string,selectedMailId:c.string};function ie({onOpenNav:s,onOpenMail:r,...o}){return e.jsxs(n,{spacing:2,direction:"row",alignItems:"center",sx:{py:1},...o,children:[e.jsxs(n,{direction:"row",alignItems:"center",children:[e.jsx(u,{onClick:s,children:e.jsx(a,{icon:"fluent:mail-24-filled"})}),r&&e.jsx(u,{onClick:r,children:e.jsx(a,{icon:"solar:chat-round-dots-bold"})})]}),e.jsx(K,{fullWidth:!0,size:"small",placeholder:"Search...",InputProps:{startAdornment:e.jsx(J,{position:"start",children:e.jsx(a,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})]})}ie.propTypes={onOpenMail:c.func,onOpenNav:c.func};const H=1998,k=24;function te({onCloseCompose:s}){const r=L("up","sm"),[o,l]=j.useState(""),i=C(),x=j.useCallback(t=>{l(t)},[]);return e.jsxs(je,{children:[(i.value||!r)&&e.jsx(be,{open:!0,sx:{zIndex:H}}),e.jsxs(fe,{sx:{right:0,bottom:0,borderRadius:2,display:"flex",position:"fixed",zIndex:H+1,m:`${k}px`,overflow:"hidden",flexDirection:"column",boxShadow:t=>t.customShadows.dropdown,...i.value&&{m:0,right:k/2,bottom:k/2,width:`calc(100% - ${k}px)`,height:`calc(100% - ${k}px)`}},children:[e.jsxs(n,{direction:"row",alignItems:"center",sx:{bgcolor:"background.neutral",p:t=>t.spacing(1.5,1,1.5,2)},children:[e.jsx(f,{variant:"h6",sx:{flexGrow:1},children:"New Message"}),e.jsx(u,{onClick:i.onToggle,children:e.jsx(a,{icon:i?"eva:collapse-fill":"eva:expand-fill"})}),e.jsx(u,{onClick:s,children:e.jsx(a,{icon:"mingcute:close-line"})})]}),e.jsx(G,{placeholder:"To",endAdornment:e.jsxs(n,{direction:"row",spacing:.5,sx:{typography:"subtitle2"},children:[e.jsx(T,{sx:{cursor:"pointer","&:hover":{textDecoration:"underline"}},children:"Cc"}),e.jsx(T,{sx:{cursor:"pointer","&:hover":{textDecoration:"underline"}},children:"Bcc"})]}),sx:{px:2,height:48,borderBottom:t=>`solid 1px ${S(t.palette.grey[500],.08)}`}}),e.jsx(G,{placeholder:"Subject",sx:{px:2,height:48,borderBottom:t=>`solid 1px ${S(t.palette.grey[500],.08)}`}}),e.jsxs(n,{spacing:2,flexGrow:1,sx:{p:2},children:[e.jsx(Q,{simple:!0,id:"compose-mail",value:o,onChange:x,placeholder:"Type a message",sx:{"& .ql-editor":{},...i.value&&{height:1,"& .quill":{height:1},"& .ql-editor":{maxHeight:"unset"}}}}),e.jsxs(n,{direction:"row",alignItems:"center",children:[e.jsxs(n,{direction:"row",alignItems:"center",flexGrow:1,children:[e.jsx(u,{children:e.jsx(a,{icon:"solar:gallery-add-bold"})}),e.jsx(u,{children:e.jsx(a,{icon:"eva:attach-2-fill"})})]}),e.jsx(M,{variant:"contained",color:"primary",endIcon:e.jsx(a,{icon:"iconamoon:send-fill"}),children:"Send"})]})]})]})]})}te.propTypes={onCloseCompose:c.string};function ae({mail:s,renderLabel:r}){const o=C(!0);if(!s)return e.jsx(F,{title:"No Conversation Selected",description:"Select a conversation to read",imgUrl:"/assets/icons/empty/ic_email_selected.svg",sx:{borderRadius:1.5,bgcolor:"background.default"}});const l=e.jsxs(n,{direction:"row",alignItems:"center",flexShrink:0,sx:{height:56,pl:2,pr:1},children:[e.jsx(n,{direction:"row",spacing:1,flexGrow:1,children:s.labelIds.map(p=>{const g=r(p);return g?e.jsx(ye,{sx:{bgcolor:S(g.color,.16),color:d=>d.palette.mode==="light"?ve(g.color,.24):we(g.color,.24)},children:g.name},g.id):null})}),e.jsxs(n,{direction:"row",alignItems:"center",children:[e.jsx(_,{color:"warning",icon:e.jsx(a,{icon:"eva:star-outline"}),checkedIcon:e.jsx(a,{icon:"eva:star-fill"}),checked:s.isStarred}),e.jsx(_,{color:"warning",icon:e.jsx(a,{icon:"material-symbols:label-important-rounded"}),checkedIcon:e.jsx(a,{icon:"material-symbols:label-important-rounded"}),checked:s.isImportant}),e.jsx(P,{title:"Archive",children:e.jsx(u,{children:e.jsx(a,{icon:"solar:archive-down-minimlistic-bold"})})}),e.jsx(P,{title:"Mark Unread",children:e.jsx(u,{children:e.jsx(a,{icon:"fluent:mail-unread-20-filled"})})}),e.jsx(P,{title:"Trash",children:e.jsx(u,{children:e.jsx(a,{icon:"solar:trash-bin-trash-bold"})})}),e.jsx(u,{children:e.jsx(a,{icon:"eva:more-vertical-fill"})})]})]}),i=e.jsxs(n,{spacing:2,direction:"row",flexShrink:0,sx:{p:2},children:[e.jsxs(Ae,{variant:"subtitle2",sx:{flexGrow:1},children:["Re: ",s.subject]}),e.jsxs(n,{spacing:.5,children:[e.jsxs(n,{direction:"row",alignItems:"center",justifyContent:"flex-end",children:[e.jsx(u,{size:"small",children:e.jsx(a,{width:18,icon:"solar:reply-bold"})}),e.jsx(u,{size:"small",children:e.jsx(a,{width:18,icon:"solar:multiple-forward-left-broken"})}),e.jsx(u,{size:"small",children:e.jsx(a,{width:18,icon:"solar:forward-bold"})})]}),e.jsx(f,{variant:"caption",noWrap:!0,sx:{color:"text.disabled"},children:Fe(s.createdAt)})]})]}),x=e.jsxs(n,{flexShrink:0,direction:"row",alignItems:"center",sx:{p:p=>p.spacing(2,2,1,2)},children:[e.jsx(Z,{alt:s.from.name,src:s.from.avatarUrl?`${s.from.avatarUrl}`:"",sx:{mr:2},children:s.from.name.charAt(0).toUpperCase()}),e.jsx($,{primary:e.jsxs(e.Fragment,{children:[s.from.name,e.jsx(T,{component:"span",sx:{typography:"body2",color:"text.disabled"},children:` <${s.from.email}>`})]}),secondary:e.jsxs(e.Fragment,{children:["To: ",s.to.map(p=>e.jsx(ke,{sx:{color:"text.secondary"},children:`${p.email}, `},p.email))]}),secondaryTypographyProps:{mt:.5,noWrap:!0,component:"span",typography:"caption"}})]}),t=e.jsxs(n,{spacing:1,sx:{p:1,borderRadius:1,bgcolor:"background.neutral"},children:[e.jsxs(n,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsxs(Ce,{onClick:o.onToggle,sx:{color:"text.secondary",typography:"caption",borderRadius:.5},children:[e.jsx(a,{icon:"eva:attach-2-fill",sx:{mr:.5}}),s.attachments.length," attachments",e.jsx(a,{icon:o.value?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill",width:16,sx:{ml:.5}})]}),e.jsx(M,{startIcon:e.jsx(a,{icon:"eva:cloud-download-fill"}),children:"Download"})]}),e.jsx(Ie,{in:o.value,unmountOnExit:!0,timeout:"auto",children:e.jsx(n,{direction:"row",flexWrap:"wrap",spacing:1,children:s.attachments.map(p=>e.jsx(n,{alignItems:"center",justifyContent:"center",sx:{width:40,height:40,flexShrink:0,borderRadius:1,overflow:"hidden",position:"relative",backgroundColor:"background.neutral"},children:e.jsx(Te,{tooltip:!0,imageView:!0,file:p.preview,onDownload:()=>console.info("DOWNLOAD"),sx:{width:24,height:24}})},p.id))})})]}),h=e.jsx(T,{sx:{py:3,flexGrow:1,overflow:{xs:"auto",md:"hidden"}},children:e.jsx(D,{children:e.jsx(ze,{children:s.message,sx:{px:2,"& p":{typography:"body2"}}})})}),m=e.jsxs(n,{spacing:2,sx:{p:p=>p.spacing(0,2,2,2)},children:[e.jsx(Q,{simple:!0,id:"reply-mail"}),e.jsxs(n,{direction:"row",alignItems:"center",children:[e.jsxs(n,{direction:"row",alignItems:"center",flexGrow:1,children:[e.jsx(u,{children:e.jsx(a,{icon:"solar:gallery-add-bold"})}),e.jsx(u,{children:e.jsx(a,{icon:"eva:attach-2-fill"})})]}),e.jsx(M,{variant:"contained",color:"primary",endIcon:e.jsx(a,{icon:"iconamoon:send-fill"}),children:"Send"})]})]});return e.jsxs(n,{flexGrow:1,sx:{width:1,minWidth:0,borderRadius:1.5,bgcolor:"background.default"},children:[l,e.jsx(O,{sx:{borderStyle:"dashed"}}),i,e.jsx(O,{sx:{borderStyle:"dashed"}}),x,!!s.attachments.length&&e.jsxs(n,{sx:{px:2},children:[" ",t," "]}),h,m]})}ae.propTypes={mail:c.object,renderLabel:c.func};const U="inbox";function We(){const s=Se(),r=Me(),o=r.get("label")||U,l=r.get("id")||"",i=L("up","md"),x=Le(),t=C(),h=C(),m=C(),{labels:p,labelsLoading:g}=$e(),{mails:d,mailsLoading:y,mailsError:V,mailsEmpty:E}=De(o),{mail:le,mailLoading:ce,mailError:W}=Be(l),N=d.allIds[0]||"",de=j.useCallback(()=>{t.value&&t.onFalse(),m.onToggle()},[m,t]),xe=j.useCallback(b=>{if(i||t.onFalse(),b){const v=b!==U?`${w.dashboard.mail}?label=${b}`:w.dashboard.mail;s.push(v)}},[t,s,i]),R=j.useCallback(b=>{i||h.onFalse();const v=o!==U?`${w.dashboard.mail}?id=${b}&label=${o}`:`${w.dashboard.mail}?id=${b}`;s.push(v)},[h,s,o,i]);j.useEffect(()=>{(V||W)&&s.push(w.dashboard.mail)},[W,V,s]),j.useEffect(()=>{!l&&N&&R(N)},[N,R,l]),j.useEffect(()=>{m.value?document.body.style.overflow="hidden":document.body.style.overflow=""},[m.value]);const pe=e.jsx(Ne,{sx:{borderRadius:1.5,bgcolor:"background.default"}}),he=e.jsx(F,{title:`Nothing in ${o}`,description:"This folder is empty",imgUrl:"/assets/icons/empty/ic_folder_empty.svg",sx:{borderRadius:1.5,maxWidth:{md:320},bgcolor:"background.default"}}),me=e.jsx(oe,{loading:g,openNav:t.value,onCloseNav:t.onFalse,labels:p,selectedLabelId:o,handleClickLabel:xe,onToggleCompose:de}),ue=e.jsx(ne,{mails:d,loading:y,openMail:h.value,onCloseMail:h.onFalse,onClickMail:R,selectedLabelId:o,selectedMailId:l}),ge=e.jsx(e.Fragment,{children:E?e.jsx(F,{imgUrl:"/assets/icons/empty/ic_email_disabled.svg",sx:{borderRadius:1.5,bgcolor:"background.default",...!i&&{display:"none"}}}):e.jsx(ae,{mail:le,renderLabel:b=>p.filter(v=>v.id===b)[0]})});return e.jsxs(e.Fragment,{children:[e.jsxs(Ee,{maxWidth:x.themeStretch?!1:"xl",children:[e.jsx(f,{variant:"h4",sx:{mb:{xs:3,md:5}},children:"Mail"}),e.jsxs(n,{spacing:1,sx:{p:1,borderRadius:2,overflow:"hidden",position:"relative",bgcolor:"background.neutral"},children:[!i&&e.jsx(ie,{onOpenNav:t.onTrue,onOpenMail:E?null:h.onTrue}),e.jsxs(n,{spacing:1,direction:"row",sx:{minHeight:{md:720},height:{xs:800,md:"72vh"}},children:[me,E?he:ue,ce?pe:ge]})]})]}),m.value&&e.jsx(te,{onCloseCompose:m.onFalse})]})}function as(){return e.jsxs(e.Fragment,{children:[e.jsx(Re,{children:e.jsx("title",{children:" Dashboard: Mail"})}),e.jsx(We,{})]})}export{as as default};
