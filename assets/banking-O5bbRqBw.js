import{j as e,q as v,f as x,S as l,A as P,x as E,V as G,d as R,k as t,g as w,r as y,c as J,i as h,T as b,W as xe,n as M,X as he,o as O,h as $,C as N,M as C,B as me,t as ge,J as L,Y as ue,Z as je,v as ye,$ as be,l as fe,m as Ce,G as S,a0 as ve,a1 as we,a2 as Y,H as ke}from"./index-8hdvFbfH.js";import{C as W}from"./Card-XXNCROCJ.js";import{C as I}from"./CardHeader-aiz5Eokq.js";import{b as D,a as Te}from"./format-number-CHx-UAWF.js";import{u as q,b as Se,a as Q,C as Be}from"./carousel-arrow-index-1mAh1ZL_.js";import{S as De}from"./Slider-fJ9fvTHd.js";import{I as Ie,i as Ae}from"./Select-zSKw2ZR7.js";import{D as Ee}from"./DialogTitle-geylUioq.js";import{T as Re}from"./TextField-XB6qHceY.js";import{D as Pe}from"./DialogActions-fHc6sLr8.js";import{u as U,C as F}from"./use-chart-RDX6d3lh.js";import{b as We,c as Oe}from"./format-time-1aCm4qMf.js";import{T as ze,a as Me}from"./table-pagination-custom--r0GUeJO.js";import{T as $e,a as Ne,b as Le}from"./TableContainer-M0_TSuSu.js";import{T as B}from"./TablePagination-uptx0Otl.js";import"./visuallyHidden-DVicuktI.js";import"./index-q81m-9gd.js";import"./dialogTitleClasses-9ILaq_SL.js";import"./empty-content-NmOrUC5h.js";import"./Checkbox-J2niBBa-.js";import"./SwitchBase-cpD-JjHB.js";import"./FormControlLabel-Em6mcn3H.js";import"./Switch-xzfdTPjY.js";import"./KeyboardArrowRight-Lz_MywNq.js";import"./FirstPage-YaOE1TvM.js";function X({title:s,subheader:n,list:a,...r}){return e.jsxs(W,{...r,children:[e.jsx(I,{title:s,subheader:n,action:e.jsx(v,{size:"small",color:"inherit",endIcon:e.jsx(x,{icon:"eva:arrow-ios-forward-fill",width:18,sx:{ml:-.5}}),children:"View All"})}),e.jsx(l,{spacing:3,sx:{p:3},children:a.map(i=>e.jsxs(l,{direction:"row",alignItems:"center",children:[e.jsx(P,{src:i.avatarUrl,sx:{width:48,height:48,mr:2}}),e.jsx(E,{primary:i.name,secondary:i.email}),e.jsx(G,{title:"Quick Transfer",children:e.jsx(R,{children:e.jsx(x,{icon:"eva:diagonal-arrow-right-up-fill"})})})]},i.id))})]})}X.propTypes={list:t.array,subheader:t.string,title:t.string};const Z=50,K=0,A=1e3,Ue=40;function ee({title:s,subheader:n,list:a,sx:r,...i}){const p=w(),c=q({centerMode:!0,swipeToSlide:!0,focusOnSelect:!0,centerPadding:"0px",slidesToShow:a.length>7?7:a.length,responsive:[{breakpoint:1600,settings:{slidesToShow:5}},{breakpoint:1400,settings:{slidesToShow:3}},{breakpoint:p.breakpoints.values.md,settings:{slidesToShow:5}},{breakpoint:400,settings:{slidesToShow:3}}]}),[m,o]=y.useState(24),[d,u]=y.useState(0),j=J(),k=a.find((f,T)=>T===c.currentIndex);y.useEffect(()=>{d&&g()},[d]);const g=y.useCallback(()=>{const f=d.toString().length;o(f*24)},[d]),ce=y.useCallback((f,T)=>{u(T)},[]),_=y.useCallback(f=>{u(Number(f.target.value))},[]),V=y.useCallback(()=>{d<0?u(0):d>A&&u(A)},[d]),de=e.jsx(h,{sx:{position:"relative"},children:e.jsx(Se,{filled:!0,onPrev:c.onPrev,onNext:c.onNext,leftButtonProps:{sx:{p:.5,mt:-1.5,left:-8,"& svg":{width:16,height:16}}},rightButtonProps:{sx:{p:.5,mt:-1.5,right:-8,"& svg":{width:16,height:16}}},children:e.jsx(h,{component:Q,ref:c.carouselRef,...c.carouselSettings,sx:{width:1,mx:"auto",maxWidth:Ue*7+160},children:a.map((f,T)=>e.jsx(h,{sx:{py:5},children:e.jsx(G,{title:f.name,arrow:!0,placement:"top",children:e.jsx(P,{src:f.avatarUrl,sx:{mx:"auto",opacity:.48,cursor:"pointer",transition:p.transitions.create("all"),...T===c.currentIndex&&{opacity:1,transform:"scale(1.25)",boxShadow:"-4px 12px 24px 0 rgb(0,0,0,0.24)"}}})},f.id)},f.id))})})}),pe=e.jsxs(l,{spacing:3,children:[e.jsx(b,{variant:"overline",sx:{color:"text.secondary"},children:"insert amount"}),e.jsx(H,{amount:d,onBlur:V,autoWidth:m,onChange:_}),e.jsx(De,{value:typeof d=="number"?d:0,valueLabelDisplay:"auto",step:Z,marks:!0,min:K,max:A,onChange:ce}),e.jsxs(l,{direction:"row",alignItems:"center",sx:{typography:"subtitle1"},children:[e.jsx(h,{component:"span",sx:{flexGrow:1},children:"Your Balance"}),D(34212)]}),e.jsx(v,{size:"large",color:"inherit",variant:"contained",disabled:d===0,onClick:j.onTrue,children:"Transfer Now"})]});return e.jsxs(e.Fragment,{children:[e.jsxs(l,{sx:{borderRadius:2,bgcolor:"background.neutral",...r},...i,children:[e.jsx(I,{title:s,subheader:n}),e.jsxs(l,{sx:{p:3},children:[e.jsxs(l,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsx(b,{variant:"overline",sx:{color:"text.secondary"},children:"Recent"}),e.jsx(v,{size:"small",color:"inherit",endIcon:e.jsx(x,{icon:"eva:arrow-ios-forward-fill",width:18,sx:{ml:-.5}}),sx:{mr:-1},children:"View All"})]}),de,pe]})]}),e.jsx(se,{amount:d,onBlur:V,open:j.value,autoWidth:m,onClose:j.onFalse,contactInfo:k,onChange:_})]})}ee.propTypes={list:t.array,subheader:t.string,sx:t.object,title:t.string};function H({autoWidth:s,amount:n,onBlur:a,onChange:r,sx:i,...p}){return e.jsxs(l,{direction:"row",justifyContent:"center",spacing:1,sx:i,children:[e.jsx(b,{variant:"h5",children:"$"}),e.jsx(Ie,{disableUnderline:!0,size:"small",value:n,onChange:r,onBlur:a,inputProps:{step:Z,min:K,max:A,type:"number"},sx:{[`& .${Ae.input}`]:{p:0,typography:"h3",textAlign:"center",width:s}},...p})]})}H.propTypes={amount:t.number,autoWidth:t.number,onBlur:t.func,onChange:t.func,sx:t.object};function se({open:s,amount:n,autoWidth:a,contactInfo:r,onClose:i,onBlur:p,onChange:c}){return e.jsxs(xe,{open:s,fullWidth:!0,maxWidth:"xs",onClose:i,children:[e.jsx(Ee,{children:"Transfer to"}),e.jsxs(l,{spacing:3,sx:{px:3},children:[e.jsxs(l,{direction:"row",alignItems:"center",spacing:2,children:[e.jsx(P,{src:r==null?void 0:r.avatarUrl,sx:{width:48,height:48}}),e.jsx(E,{primary:r==null?void 0:r.name,secondary:r==null?void 0:r.email,secondaryTypographyProps:{component:"span",mt:.5}})]}),e.jsx(H,{onBlur:p,onChange:c,autoWidth:a,amount:n,disableUnderline:!1,sx:{justifyContent:"flex-end"}}),e.jsx(Re,{fullWidth:!0,multiline:!0,rows:3,placeholder:"Write a message..."})]}),e.jsxs(Pe,{children:[e.jsx(v,{onClick:i,children:"Cancel"}),e.jsx(v,{variant:"contained",disabled:n===0,onClick:i,children:"Confirm & Transfer"})]})]})}se.propTypes={amount:t.number,autoWidth:t.number,contactInfo:t.object,onBlur:t.func,onChange:t.func,onClose:t.func,open:t.bool};function te({img:s,price:n,title:a,description:r,sx:i,...p}){const c=w();return e.jsxs(h,{...p,children:[e.jsx(h,{component:"img",alt:"invite",src:s,sx:{left:40,zIndex:9,width:140,position:"relative",filter:"drop-shadow(0 12px 24px rgba(0,0,0,0.24))",...i}}),e.jsxs(h,{sx:{mt:-15,color:"common.white",borderRadius:2,p:c.spacing(16,5,5,5),...M({direction:"135deg",startColor:c.palette.primary.main,endColor:c.palette.primary.dark})},children:[e.jsxs(l,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsx(h,{sx:{whiteSpace:"pre-line",typography:"h4"},children:a}),e.jsx(h,{sx:{typography:"h2"},children:n})]}),e.jsx(h,{sx:{mt:2,mb:3,typography:"body2"},children:r}),e.jsx(he,{fullWidth:!0,placeholder:"Email",endAdornment:e.jsx(v,{color:"warning",variant:"contained",size:"small",sx:{mr:.5},children:"Invite"}),sx:{pl:1.5,height:40,borderRadius:1,bgcolor:"common.white"}})]})]})}te.propTypes={description:t.string,img:t.string,price:t.string,sx:t.object,title:t.string};function z({title:s,total:n,icon:a,percent:r,color:i="primary",chart:p,sx:c,...m}){const o=w(),{series:d,options:u}=p,j=U({colors:[o.palette[i].dark],chart:{sparkline:{enabled:!0}},xaxis:{labels:{show:!1}},yaxis:{labels:{show:!1}},legend:{show:!1},grid:{show:!1},tooltip:{marker:{show:!1},y:{formatter:k=>D(k),title:{formatter:()=>""}}},...u});return e.jsxs(l,{sx:{...M({direction:"135deg",startColor:O(o.palette[i].light,.2),endColor:O(o.palette[i].main,.2)}),width:1,borderRadius:2,overflow:"hidden",position:"relative",color:`${i}.darker`,backgroundColor:"common.white",...c},...m,children:[e.jsx(x,{icon:a,sx:{p:1.5,top:24,right:24,width:48,height:48,borderRadius:"50%",position:"absolute",color:`${i}.lighter`,bgcolor:`${i}.dark`}}),e.jsxs(l,{spacing:1,sx:{p:3},children:[e.jsx(b,{variant:"subtitle2",children:s}),e.jsx(b,{variant:"h3",children:D(n)}),e.jsxs(l,{spacing:.5,direction:"row",flexWrap:"wrap",alignItems:"center",sx:{typography:"body2"},children:[e.jsx(x,{icon:r<0?"eva:trending-down-fill":"eva:trending-up-fill"}),e.jsxs(h,{sx:{typography:"subtitle2"},children:[r>0&&"+",Te(r)]}),e.jsx(h,{sx:{opacity:.8},children:"than last month"})]})]}),e.jsx(F,{dir:"ltr",type:"area",series:[{data:d}],options:j,width:"100%",height:120})]})}z.propTypes={chart:t.object,color:t.string,icon:t.oneOfType([t.element,t.string]),percent:t.number,sx:t.object,title:t.string,total:t.number};function re({list:s,sx:n}){const a=w(),r=q({fade:!0,speed:100,...Be({sx:{right:16,bottom:16,position:"absolute",color:"primary.light"}})});return e.jsx(h,{sx:{...M({color:O(a.palette.grey[900],.8),imgUrl:"/assets/background/overlay_2.jpg"}),height:262,borderRadius:2,position:"relative",color:"common.white",".slick-slider, .slick-list, .slick-track, .slick-slide > div":{height:1},"&:before, &:after":{left:0,mx:2.5,right:0,zIndex:-2,height:200,bottom:-16,content:"''",opacity:.16,borderRadius:2,bgcolor:"grey.500",position:"absolute"},"&:after":{mx:1,bottom:-8,opacity:.24},...n},children:e.jsx(Q,{...r.carouselSettings,children:s.map(i=>e.jsx(ie,{card:i},i.id))})})}re.propTypes={list:t.array,sx:t.object};function ie({card:s}){const{id:n,cardType:a,balance:r,cardHolder:i,cardNumber:p,cardValid:c}=s,m=J(),o=$(),d=y.useCallback(()=>{o.onClose(),console.info("DELETE",n)},[n,o]),u=y.useCallback(()=>{o.onClose(),console.info("EDIT",n)},[n,o]);return e.jsxs(e.Fragment,{children:[e.jsxs(l,{justifyContent:"space-between",sx:{height:1,p:3},children:[e.jsx(R,{color:"inherit",onClick:o.onOpen,sx:{top:8,right:8,zIndex:9,opacity:.48,position:"absolute",...o.open&&{opacity:1}},children:e.jsx(x,{icon:"eva:more-vertical-fill"})}),e.jsxs("div",{children:[e.jsx(b,{sx:{mb:2,typography:"subtitle2",opacity:.48},children:"Current Balance"}),e.jsxs(l,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(b,{sx:{typography:"h3"},children:m.value?"********":D(r)}),e.jsx(R,{color:"inherit",onClick:m.onToggle,sx:{opacity:.48},children:e.jsx(x,{icon:m.value?"solar:eye-bold":"solar:eye-closed-bold"})})]})]}),e.jsxs(l,{direction:"row",alignItems:"center",justifyContent:"flex-end",sx:{typography:"subtitle1"},children:[e.jsxs(h,{sx:{bgcolor:"white",lineHeight:0,px:.75,borderRadius:.5,mr:1},children:[a==="mastercard"&&e.jsx(x,{width:24,icon:"logos:mastercard"}),a==="visa"&&e.jsx(x,{width:24,icon:"logos:visa"})]}),p]}),e.jsxs(l,{direction:"row",spacing:5,children:[e.jsxs(l,{spacing:1,children:[e.jsx(b,{sx:{typography:"caption",opacity:.48},children:"Card Holder"}),e.jsx(b,{sx:{typography:"subtitle1"},children:i})]}),e.jsxs(l,{spacing:1,children:[e.jsx(b,{sx:{typography:"caption",opacity:.48},children:"Valid Dates"}),e.jsx(b,{sx:{typography:"subtitle1"},children:c})]})]})]}),e.jsxs(N,{open:o.open,onClose:o.onClose,sx:{width:140},children:[e.jsxs(C,{onClick:d,sx:{color:"error.main"},children:[e.jsx(x,{icon:"solar:trash-bin-trash-bold"}),"Delete"]}),e.jsxs(C,{onClick:u,children:[e.jsx(x,{icon:"solar:pen-bold"}),"Edit"]})]})]})}ie.propTypes={card:t.object};function ne({title:s,subheader:n,chart:a,...r}){const{categories:i,colors:p,series:c,options:m}=a,o=$(),[d,u]=y.useState("Year"),j=U({colors:p,stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:i},tooltip:{y:{formatter:g=>`$${g}`}},...m}),k=y.useCallback(g=>{o.onClose(),u(g)},[o]);return e.jsxs(e.Fragment,{children:[e.jsxs(W,{...r,children:[e.jsx(I,{title:s,subheader:n,action:e.jsxs(me,{onClick:o.onOpen,sx:{pl:1,py:.5,pr:.5,borderRadius:1,typography:"subtitle2",bgcolor:"background.neutral"},children:[d,e.jsx(x,{width:16,icon:o.open?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill",sx:{ml:.5}})]})}),c.map(g=>e.jsx(h,{sx:{mt:3,mx:3},children:g.type===d&&e.jsx(F,{dir:"ltr",type:"bar",series:g.data,options:j,width:"100%",height:364})},g.type))]}),e.jsx(N,{open:o.open,onClose:o.onClose,sx:{width:140},children:c.map(g=>e.jsx(C,{selected:g.type===d,onClick:()=>k(g.type),children:g.type},g.type))})]})}ne.propTypes={chart:t.object,subheader:t.string,title:t.string};function ae({title:s,subheader:n,tableLabels:a,tableData:r,...i}){return e.jsxs(W,{...i,children:[e.jsx(I,{title:s,subheader:n,sx:{mb:3}}),e.jsx($e,{sx:{overflow:"unset"},children:e.jsx(ge,{children:e.jsxs(Ne,{sx:{minWidth:720},children:[e.jsx(ze,{headLabel:a}),e.jsx(Le,{children:r.map(p=>e.jsx(oe,{row:p},p.id))})]})})}),e.jsx(L,{sx:{borderStyle:"dashed"}}),e.jsx(h,{sx:{p:2,textAlign:"right"},children:e.jsx(v,{size:"small",color:"inherit",endIcon:e.jsx(x,{icon:"eva:arrow-ios-forward-fill",width:18,sx:{ml:-.5}}),children:"View All"})})]})}ae.propTypes={subheader:t.string,tableData:t.array,tableLabels:t.array,title:t.string};function oe({row:s}){const a=w().palette.mode==="light",r=$(),i=()=>{r.onClose(),console.info("DOWNLOAD",s.id)},p=()=>{r.onClose(),console.info("PRINT",s.id)},c=()=>{r.onClose(),console.info("SHARE",s.id)},m=()=>{r.onClose(),console.info("DELETE",s.id)},o=e.jsx(h,{sx:{position:"relative",mr:2},children:e.jsx(ue,{overlap:"circular",color:s.type==="Income"?"success":"error",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:e.jsx(x,{icon:s.type==="Income"?"eva:diagonal-arrow-left-down-fill":"eva:diagonal-arrow-right-up-fill",width:16}),sx:{[`& .${je.badge}`]:{p:0,width:20}},children:e.jsxs(P,{src:s.avatarUrl||"",sx:{width:48,height:48,color:"text.secondary",bgcolor:"background.neutral"},children:[s.category==="Books"&&e.jsx(x,{icon:"eva:book-fill",width:24}),s.category==="Beauty & Health"&&e.jsx(x,{icon:"solar:heart-bold",width:24})]})})});return e.jsxs(e.Fragment,{children:[e.jsxs(Me,{children:[e.jsxs(B,{sx:{display:"flex",alignItems:"center"},children:[o,e.jsx(E,{primary:s.message,secondary:s.category})]}),e.jsx(B,{children:e.jsx(E,{primary:We(new Date(s.date)),secondary:Oe(new Date(s.date)),primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),e.jsx(B,{children:D(s.amount)}),e.jsx(B,{children:e.jsx(ye,{variant:a?"soft":"filled",color:s.status==="completed"&&"success"||s.status==="progress"&&"warning"||"error",children:s.status})}),e.jsx(B,{align:"right",sx:{pr:1},children:e.jsx(R,{color:r.open?"inherit":"default",onClick:r.onOpen,children:e.jsx(x,{icon:"eva:more-vertical-fill"})})})]}),e.jsxs(N,{open:r.open,onClose:r.onClose,arrow:"right-top",sx:{width:160},children:[e.jsxs(C,{onClick:i,children:[e.jsx(x,{icon:"eva:cloud-download-fill"}),"Download"]}),e.jsxs(C,{onClick:p,children:[e.jsx(x,{icon:"solar:printer-minimalistic-bold"}),"Print"]}),e.jsxs(C,{onClick:c,children:[e.jsx(x,{icon:"solar:share-bold"}),"Share"]}),e.jsx(L,{sx:{borderStyle:"dashed"}}),e.jsxs(C,{onClick:m,sx:{color:"error.main"},children:[e.jsx(x,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})]})}oe.propTypes={row:t.object};function le({title:s,subheader:n,chart:a,...r}){const i=w(),p=be("up","sm"),{colors:c,series:m,options:o}=a,d=m.map(j=>j.value),u=U({colors:c,labels:m.map(j=>j.label),stroke:{colors:[i.palette.background.paper]},fill:{opacity:.8},legend:{position:"right",itemMargin:{horizontal:10,vertical:7}},tooltip:{fillSeriesColor:!1},responsive:[{breakpoint:i.breakpoints.values.sm,options:{legend:{position:"bottom",horizontalAlign:"left"}}}],...o});return e.jsxs(W,{...r,children:[e.jsx(I,{title:s,subheader:n}),e.jsx(h,{sx:{my:5,"& .apexcharts-legend":{m:"auto",height:{sm:160},flexWrap:{sm:"wrap"},width:{xs:240,sm:"50%"}},"& .apexcharts-datalabels-group":{display:"none"}},children:e.jsx(F,{dir:"ltr",type:"polarArea",series:d,options:u,width:"100%",height:p?240:360})}),e.jsx(L,{sx:{borderStyle:"dashed"}}),e.jsxs(h,{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",sx:{textAlign:"center",typography:"h4"},children:[e.jsxs(l,{sx:{py:2,borderRight:`dashed 1px ${i.palette.divider}`},children:[e.jsx(h,{component:"span",sx:{mb:1,typography:"body2",color:"text.secondary"},children:"Categories"}),"9"]}),e.jsxs(l,{sx:{py:2},children:[e.jsx(h,{component:"span",sx:{mb:1,typography:"body2",color:"text.secondary"},children:"Categories"}),"$18,765"]})]})]})}le.propTypes={chart:t.object,subheader:t.string,title:t.string};function Fe(){const s=w(),n=fe();return e.jsx(Ce,{maxWidth:n.themeStretch?!1:"xl",children:e.jsxs(S,{container:!0,spacing:3,children:[e.jsx(S,{xs:12,md:7,children:e.jsxs(l,{direction:{xs:"column",sm:"row"},spacing:3,children:[e.jsx(z,{title:"Income",icon:"eva:diagonal-arrow-left-down-fill",percent:2.6,total:18765,chart:{series:[{x:2010,y:88},{x:2011,y:120},{x:2012,y:156},{x:2013,y:123},{x:2014,y:88},{x:2015,y:66},{x:2016,y:45},{x:2017,y:29},{x:2018,y:45},{x:2019,y:88},{x:2020,y:132},{x:2021,y:146},{x:2022,y:169},{x:2023,y:184}]}}),e.jsx(z,{title:"Expenses",color:"warning",icon:"eva:diagonal-arrow-right-up-fill",percent:-.5,total:8938,chart:{series:[{x:2010,y:88},{x:2011,y:120},{x:2012,y:156},{x:2013,y:123},{x:2014,y:88},{x:2015,y:166},{x:2016,y:145},{x:2017,y:129},{x:2018,y:145},{x:2019,y:188},{x:2020,y:132},{x:2021,y:146},{x:2022,y:169},{x:2023,y:184}]}})]})}),e.jsx(S,{xs:12,md:5,children:e.jsx(re,{list:ve})}),e.jsx(S,{xs:12,md:8,children:e.jsxs(l,{spacing:3,children:[e.jsx(ne,{title:"Balance Statistics",subheader:"(+43% Income | +12% Expense) than last year",chart:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],series:[{type:"Week",data:[{name:"Income",data:[10,41,35,151,49,62,69,91,48]},{name:"Expenses",data:[10,34,13,56,77,88,99,77,45]}]},{type:"Month",data:[{name:"Income",data:[148,91,69,62,49,51,35,41,10]},{name:"Expenses",data:[45,77,99,88,77,56,13,34,10]}]},{type:"Year",data:[{name:"Income",data:[76,42,29,41,27,138,117,86,63]},{name:"Expenses",data:[80,55,34,114,80,130,15,28,55]}]}]}}),e.jsx(le,{title:"Expenses Categories",chart:{series:[{label:"Category 1",value:14},{label:"Category 2",value:23},{label:"Category 3",value:21},{label:"Category 4",value:17},{label:"Category 5",value:15},{label:"Category 6",value:10},{label:"Category 7",value:12},{label:"Category 8",value:17},{label:"Category 9",value:21}],colors:[s.palette.primary.main,s.palette.warning.dark,s.palette.success.darker,s.palette.error.main,s.palette.info.dark,s.palette.info.darker,s.palette.success.main,s.palette.warning.main,s.palette.info.main]}}),e.jsx(ae,{title:"Recent Transitions",tableData:we,tableLabels:[{id:"description",label:"Description"},{id:"date",label:"Date"},{id:"amount",label:"Amount"},{id:"status",label:"Status"},{id:""}]})]})}),e.jsx(S,{xs:12,md:4,children:e.jsxs(l,{spacing:3,children:[e.jsx(ee,{title:"Quick Transfer",list:Y}),e.jsx(X,{title:"Contacts",subheader:"You have 122 contacts",list:Y.slice(-5)}),e.jsx(te,{price:"$50",title:`Invite friends 
 and earn`,description:"Praesent egestas tristique nibh. Duis lobortis massa imperdiet quam.",img:"/assets/illustrations/characters/character_11.png"})]})})]})})}function ms(){return e.jsxs(e.Fragment,{children:[e.jsx(ke,{children:e.jsx("title",{children:" Dashboard: Banking"})}),e.jsx(Fe,{})]})}export{ms as default};
