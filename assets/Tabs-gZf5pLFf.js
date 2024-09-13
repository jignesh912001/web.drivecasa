import{s as A,B as zt,ak as Pt,ah as b,d5 as O,r as c,at as ft,ag as rt,au as N,j as S,aj as pt,d6 as Qt,bq as Zt,al as Wt,d7 as Nt,as as Lt,ar as kt,g as $t,bG as lt,bX as ut,bs as te}from"./index-d_hKz2zC.js";import"./index-q81m-9gd.js";import{a as ee,K as oe}from"./KeyboardArrowRight-UESfApTO.js";let U;function Ft(){if(U)return U;const t=document.createElement("div"),e=document.createElement("div");return e.style.width="10px",e.style.height="1px",t.appendChild(e),t.dir="rtl",t.style.fontSize="14px",t.style.width="4px",t.style.height="1px",t.style.position="absolute",t.style.top="-1000px",t.style.overflow="scroll",document.body.appendChild(t),U="reverse",t.scrollLeft>0?U="default":(t.scrollLeft=1,t.scrollLeft===0&&(U="negative")),document.body.removeChild(t),U}function le(t,e){const r=t.scrollLeft;if(e!=="rtl")return r;switch(Ft()){case"negative":return t.scrollWidth-t.clientWidth+r;case"reverse":return t.scrollWidth-t.clientWidth-r;default:return r}}const re=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],ne=t=>{const{classes:e,textColor:r,fullWidth:a,wrapped:n,icon:d,label:h,selected:p,disabled:u}=t,m={root:["root",d&&h&&"labelIcon",`textColor${Pt(r)}`,a&&"fullWidth",n&&"wrapped",p&&"selected",u&&"disabled"],iconWrapper:["iconWrapper"]};return pt(m,Qt,e)},se=A(zt,{name:"MuiTab",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.label&&r.icon&&e.labelIcon,e[`textColor${Pt(r.textColor)}`],r.fullWidth&&e.fullWidth,r.wrapped&&e.wrapped]}})(({theme:t,ownerState:e})=>b({},t.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},e.label&&{flexDirection:e.iconPosition==="top"||e.iconPosition==="bottom"?"column":"row"},{lineHeight:1.25},e.icon&&e.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${O.iconWrapper}`]:b({},e.iconPosition==="top"&&{marginBottom:6},e.iconPosition==="bottom"&&{marginTop:6},e.iconPosition==="start"&&{marginRight:t.spacing(1)},e.iconPosition==="end"&&{marginLeft:t.spacing(1)})},e.textColor==="inherit"&&{color:"inherit",opacity:.6,[`&.${O.selected}`]:{opacity:1},[`&.${O.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.textColor==="primary"&&{color:(t.vars||t).palette.text.secondary,[`&.${O.selected}`]:{color:(t.vars||t).palette.primary.main},[`&.${O.disabled}`]:{color:(t.vars||t).palette.text.disabled}},e.textColor==="secondary"&&{color:(t.vars||t).palette.text.secondary,[`&.${O.selected}`]:{color:(t.vars||t).palette.secondary.main},[`&.${O.disabled}`]:{color:(t.vars||t).palette.text.disabled}},e.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},e.wrapped&&{fontSize:t.typography.pxToRem(12)})),ae=c.forwardRef(function(e,r){const a=ft({props:e,name:"MuiTab"}),{className:n,disabled:d=!1,disableFocusRipple:h=!1,fullWidth:p,icon:u,iconPosition:m="top",indicator:w,label:T,onChange:B,onClick:x,onFocus:j,selected:I,selectionFollowsFocus:g,textColor:H="inherit",value:y,wrapped:nt=!1}=a,X=rt(a,re),Y=b({},a,{disabled:d,disableFocusRipple:h,selected:I,icon:!!u,iconPosition:m,label:!!T,fullWidth:p,textColor:H,wrapped:nt}),D=ne(Y),L=u&&T&&c.isValidElement(u)?c.cloneElement(u,{className:N(D.iconWrapper,u.props.className)}):u,J=R=>{!I&&B&&B(R,y),x&&x(R)},_=R=>{g&&!I&&B&&B(R,y),j&&j(R)};return S.jsxs(se,b({focusRipple:!h,className:N(D.root,n),ref:r,role:"tab","aria-selected":I,disabled:d,onClick:J,onFocus:_,ownerState:Y,tabIndex:I?0:-1},X,{children:[m==="top"||m==="start"?S.jsxs(c.Fragment,{children:[L,T]}):S.jsxs(c.Fragment,{children:[T,L]}),w]}))}),Le=ae;function ie(t){return(1+Math.sin(Math.PI*t-Math.PI/2))/2}function ce(t,e,r,a={},n=()=>{}){const{ease:d=ie,duration:h=300}=a;let p=null;const u=e[t];let m=!1;const w=()=>{m=!0},T=B=>{if(m){n(new Error("Animation cancelled"));return}p===null&&(p=B);const x=Math.min(1,(B-p)/h);if(e[t]=d(x)*(r-u)+u,x>=1){requestAnimationFrame(()=>{n(null)});return}requestAnimationFrame(T)};return u===r?(n(new Error("Element already at target position")),w):(requestAnimationFrame(T),w)}const de=["onChange"],ue={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function be(t){const{onChange:e}=t,r=rt(t,de),a=c.useRef(),n=c.useRef(null),d=()=>{a.current=n.current.offsetHeight-n.current.clientHeight};return Zt(()=>{const h=Wt(()=>{const u=a.current;d(),u!==a.current&&e(a.current)}),p=Nt(n.current);return p.addEventListener("resize",h),()=>{h.clear(),p.removeEventListener("resize",h)}},[e]),c.useEffect(()=>{d(),e(a.current)},[e]),S.jsx("div",b({style:ue,ref:n},r))}function fe(t){return kt("MuiTabScrollButton",t)}const pe=Lt("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),he=pe,ve=["className","slots","slotProps","direction","orientation","disabled"],Se=t=>{const{classes:e,orientation:r,disabled:a}=t;return pt({root:["root",r,a&&"disabled"]},fe,e)},me=A(zt,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.orientation&&e[r.orientation]]}})(({ownerState:t})=>b({width:40,flexShrink:0,opacity:.8,[`&.${he.disabled}`]:{opacity:0}},t.orientation==="vertical"&&{width:"100%",height:40,"& svg":{transform:`rotate(${t.isRtl?-90:90}deg)`}})),xe=c.forwardRef(function(e,r){var a,n;const d=ft({props:e,name:"MuiTabScrollButton"}),{className:h,slots:p={},slotProps:u={},direction:m}=d,w=rt(d,ve),B=$t().direction==="rtl",x=b({isRtl:B},d),j=Se(x),I=(a=p.StartScrollButtonIcon)!=null?a:ee,g=(n=p.EndScrollButtonIcon)!=null?n:oe,H=lt({elementType:I,externalSlotProps:u.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:x}),y=lt({elementType:g,externalSlotProps:u.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:x});return S.jsx(me,b({component:"div",className:N(j.root,h),ref:r,role:null,ownerState:x,tabIndex:null},w,{children:m==="left"?S.jsx(I,b({},H)):S.jsx(g,b({},y))}))}),ge=xe;function Be(t){return kt("MuiTabs",t)}const ye=Lt("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),bt=ye,Ce=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","slots","slotProps","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],Et=(t,e)=>t===e?t.firstChild:e&&e.nextElementSibling?e.nextElementSibling:t.firstChild,Mt=(t,e)=>t===e?t.lastChild:e&&e.previousElementSibling?e.previousElementSibling:t.lastChild,ot=(t,e,r)=>{let a=!1,n=r(t,e);for(;n;){if(n===t.firstChild){if(a)return;a=!0}const d=n.disabled||n.getAttribute("aria-disabled")==="true";if(!n.hasAttribute("tabindex")||d)n=r(t,n);else{n.focus();return}}},we=t=>{const{vertical:e,fixed:r,hideScrollbar:a,scrollableX:n,scrollableY:d,centered:h,scrollButtonsHideMobile:p,classes:u}=t;return pt({root:["root",e&&"vertical"],scroller:["scroller",r&&"fixed",a&&"hideScrollbar",n&&"scrollableX",d&&"scrollableY"],flexContainer:["flexContainer",e&&"flexContainerVertical",h&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",p&&"scrollButtonsHideMobile"],scrollableX:[n&&"scrollableX"],hideScrollbar:[a&&"hideScrollbar"]},Be,u)},Te=A("div",{name:"MuiTabs",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[{[`& .${bt.scrollButtons}`]:e.scrollButtons},{[`& .${bt.scrollButtons}`]:r.scrollButtonsHideMobile&&e.scrollButtonsHideMobile},e.root,r.vertical&&e.vertical]}})(({ownerState:t,theme:e})=>b({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},t.vertical&&{flexDirection:"column"},t.scrollButtonsHideMobile&&{[`& .${bt.scrollButtons}`]:{[e.breakpoints.down("sm")]:{display:"none"}}})),Ie=A("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.scroller,r.fixed&&e.fixed,r.hideScrollbar&&e.hideScrollbar,r.scrollableX&&e.scrollableX,r.scrollableY&&e.scrollableY]}})(({ownerState:t})=>b({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},t.fixed&&{overflowX:"hidden",width:"100%"},t.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},t.scrollableX&&{overflowX:"auto",overflowY:"hidden"},t.scrollableY&&{overflowY:"auto",overflowX:"hidden"})),Ee=A("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.flexContainer,r.vertical&&e.flexContainerVertical,r.centered&&e.centered]}})(({ownerState:t})=>b({display:"flex"},t.vertical&&{flexDirection:"column"},t.centered&&{justifyContent:"center"})),Me=A("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(t,e)=>e.indicator})(({ownerState:t,theme:e})=>b({position:"absolute",height:2,bottom:0,width:"100%",transition:e.transitions.create()},t.indicatorColor==="primary"&&{backgroundColor:(e.vars||e).palette.primary.main},t.indicatorColor==="secondary"&&{backgroundColor:(e.vars||e).palette.secondary.main},t.vertical&&{height:"100%",width:2,right:0})),Re=A(be)({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),Rt={},ze=c.forwardRef(function(e,r){const a=ft({props:e,name:"MuiTabs"}),n=$t(),d=n.direction==="rtl",{"aria-label":h,"aria-labelledby":p,action:u,centered:m=!1,children:w,className:T,component:B="div",allowScrollButtonsMobile:x=!1,indicatorColor:j="primary",onChange:I,orientation:g="horizontal",ScrollButtonComponent:H=ge,scrollButtons:y="auto",selectionFollowsFocus:nt,slots:X={},slotProps:Y={},TabIndicatorProps:D={},TabScrollButtonProps:L={},textColor:J="primary",value:_,variant:R="standard",visibleScrollbar:st=!1}=a,Ot=rt(a,Ce),E=R==="scrollable",C=g==="vertical",V=C?"scrollTop":"scrollLeft",Q=C?"top":"left",Z=C?"bottom":"right",at=C?"clientHeight":"clientWidth",K=C?"height":"width",k=b({},a,{component:B,allowScrollButtonsMobile:x,indicatorColor:j,orientation:g,vertical:C,scrollButtons:y,textColor:J,variant:R,visibleScrollbar:st,fixed:!E,hideScrollbar:E&&!st,scrollableX:E&&!C,scrollableY:E&&C,centered:m&&!E,scrollButtonsHideMobile:!x}),P=we(k),At=lt({elementType:X.StartScrollButtonIcon,externalSlotProps:Y.startScrollButtonIcon,ownerState:k}),jt=lt({elementType:X.EndScrollButtonIcon,externalSlotProps:Y.endScrollButtonIcon,ownerState:k}),[ht,Ht]=c.useState(!1),[$,vt]=c.useState(Rt),[St,Xt]=c.useState(!1),[mt,Dt]=c.useState(!1),[xt,_t]=c.useState(!1),[gt,Ut]=c.useState({overflow:"hidden",scrollbarWidth:0}),Bt=new Map,z=c.useRef(null),F=c.useRef(null),yt=()=>{const o=z.current;let l;if(o){const s=o.getBoundingClientRect();l={clientWidth:o.clientWidth,scrollLeft:o.scrollLeft,scrollTop:o.scrollTop,scrollLeftNormalized:le(o,n.direction),scrollWidth:o.scrollWidth,top:s.top,bottom:s.bottom,left:s.left,right:s.right}}let i;if(o&&_!==!1){const s=F.current.children;if(s.length>0){const f=s[Bt.get(_)];i=f?f.getBoundingClientRect():null}}return{tabsMeta:l,tabMeta:i}},q=ut(()=>{const{tabsMeta:o,tabMeta:l}=yt();let i=0,s;if(C)s="top",l&&o&&(i=l.top-o.top+o.scrollTop);else if(s=d?"right":"left",l&&o){const v=d?o.scrollLeftNormalized+o.clientWidth-o.scrollWidth:o.scrollLeft;i=(d?-1:1)*(l[s]-o[s]+v)}const f={[s]:i,[K]:l?l[K]:0};if(isNaN($[s])||isNaN($[K]))vt(f);else{const v=Math.abs($[s]-f[s]),M=Math.abs($[K]-f[K]);(v>=1||M>=1)&&vt(f)}}),it=(o,{animation:l=!0}={})=>{l?ce(V,z.current,o,{duration:n.transitions.duration.standard}):z.current[V]=o},Ct=o=>{let l=z.current[V];C?l+=o:(l+=o*(d?-1:1),l*=d&&Ft()==="reverse"?-1:1),it(l)},wt=()=>{const o=z.current[at];let l=0;const i=Array.from(F.current.children);for(let s=0;s<i.length;s+=1){const f=i[s];if(l+f[at]>o){s===0&&(l=o);break}l+=f[at]}return l},Yt=()=>{Ct(-1*wt())},Vt=()=>{Ct(wt())},Kt=c.useCallback(o=>{Ut({overflow:null,scrollbarWidth:o})},[]),qt=()=>{const o={};o.scrollbarSizeListener=E?S.jsx(Re,{onChange:Kt,className:N(P.scrollableX,P.hideScrollbar)}):null;const i=E&&(y==="auto"&&(St||mt)||y===!0);return o.scrollButtonStart=i?S.jsx(H,b({slots:{StartScrollButtonIcon:X.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:At},orientation:g,direction:d?"right":"left",onClick:Yt,disabled:!St},L,{className:N(P.scrollButtons,L.className)})):null,o.scrollButtonEnd=i?S.jsx(H,b({slots:{EndScrollButtonIcon:X.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:jt},orientation:g,direction:d?"left":"right",onClick:Vt,disabled:!mt},L,{className:N(P.scrollButtons,L.className)})):null,o},Tt=ut(o=>{const{tabsMeta:l,tabMeta:i}=yt();if(!(!i||!l)){if(i[Q]<l[Q]){const s=l[V]+(i[Q]-l[Q]);it(s,{animation:o})}else if(i[Z]>l[Z]){const s=l[V]+(i[Z]-l[Z]);it(s,{animation:o})}}}),tt=ut(()=>{E&&y!==!1&&_t(!xt)});c.useEffect(()=>{const o=Wt(()=>{z.current&&q()});let l;const i=v=>{v.forEach(M=>{M.removedNodes.forEach(G=>{var W;(W=l)==null||W.unobserve(G)}),M.addedNodes.forEach(G=>{var W;(W=l)==null||W.observe(G)})}),o(),tt()},s=Nt(z.current);s.addEventListener("resize",o);let f;return typeof ResizeObserver<"u"&&(l=new ResizeObserver(o),Array.from(F.current.children).forEach(v=>{l.observe(v)})),typeof MutationObserver<"u"&&(f=new MutationObserver(i),f.observe(F.current,{childList:!0})),()=>{var v,M;o.clear(),s.removeEventListener("resize",o),(v=f)==null||v.disconnect(),(M=l)==null||M.disconnect()}},[q,tt]),c.useEffect(()=>{const o=Array.from(F.current.children),l=o.length;if(typeof IntersectionObserver<"u"&&l>0&&E&&y!==!1){const i=o[0],s=o[l-1],f={root:z.current,threshold:.99},v=dt=>{Xt(!dt[0].isIntersecting)},M=new IntersectionObserver(v,f);M.observe(i);const G=dt=>{Dt(!dt[0].isIntersecting)},W=new IntersectionObserver(G,f);return W.observe(s),()=>{M.disconnect(),W.disconnect()}}},[E,y,xt,w==null?void 0:w.length]),c.useEffect(()=>{Ht(!0)},[]),c.useEffect(()=>{q()}),c.useEffect(()=>{Tt(Rt!==$)},[Tt,$]),c.useImperativeHandle(u,()=>({updateIndicator:q,updateScrollButtons:tt}),[q,tt]);const It=S.jsx(Me,b({},D,{className:N(P.indicator,D.className),ownerState:k,style:b({},$,D.style)}));let et=0;const Gt=c.Children.map(w,o=>{if(!c.isValidElement(o))return null;const l=o.props.value===void 0?et:o.props.value;Bt.set(l,et);const i=l===_;return et+=1,c.cloneElement(o,b({fullWidth:R==="fullWidth",indicator:i&&!ht&&It,selected:i,selectionFollowsFocus:nt,onChange:I,textColor:J,value:l},et===1&&_===!1&&!o.props.tabIndex?{tabIndex:0}:{}))}),Jt=o=>{const l=F.current,i=te(l).activeElement;if(i.getAttribute("role")!=="tab")return;let f=g==="horizontal"?"ArrowLeft":"ArrowUp",v=g==="horizontal"?"ArrowRight":"ArrowDown";switch(g==="horizontal"&&d&&(f="ArrowRight",v="ArrowLeft"),o.key){case f:o.preventDefault(),ot(l,i,Mt);break;case v:o.preventDefault(),ot(l,i,Et);break;case"Home":o.preventDefault(),ot(l,null,Et);break;case"End":o.preventDefault(),ot(l,null,Mt);break}},ct=qt();return S.jsxs(Te,b({className:N(P.root,T),ownerState:k,ref:r,as:B},Ot,{children:[ct.scrollButtonStart,ct.scrollbarSizeListener,S.jsxs(Ie,{className:P.scroller,ownerState:k,style:{overflow:gt.overflow,[C?`margin${d?"Left":"Right"}`:"marginBottom"]:st?void 0:-gt.scrollbarWidth},ref:z,children:[S.jsx(Ee,{"aria-label":h,"aria-labelledby":p,"aria-orientation":g==="vertical"?"vertical":null,className:P.flexContainer,ownerState:k,onKeyDown:Jt,ref:F,role:"tablist",children:Gt}),ht&&It]}),ct.scrollButtonEnd]}))}),ke=ze;export{ke as T,Le as a,bt as t};
