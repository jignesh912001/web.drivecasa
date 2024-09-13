import{bu as ne,j as i,s as W,cy as O,ak as te,ah as l,bH as be,r as j,at as xe,ag as ie,ai as se,b9 as Fe,g as Re,ct as Ve,ba as Ce,au as D,aj as Ae,cz as Se}from"./index-xB1vvAyJ.js";import{v as Me}from"./visuallyHidden-DVicuktI.js";const je=ne(i.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),Le=ne(i.jsx("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder"),He=["value"],Ee=["className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"];function ze(o,e,t){return o<e?e:o>t?t:o}function we(o){const e=o.toString().split(".")[1];return e?e.length:0}function J(o,e){if(o==null)return o;const t=Math.round(o/e)*e;return Number(t.toFixed(we(e)))}const Ie=o=>{const{classes:e,size:t,readOnly:f,disabled:L,emptyValueFocused:y,focusVisible:v}=o,b={root:["root",`size${te(t)}`,L&&"disabled",v&&"focusVisible",f&&"readOnly"],label:["label","pristine"],labelEmptyValue:[y&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return Ae(b,Se,e)},Oe=W("span",{name:"MuiRating",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[{[`& .${O.visuallyHidden}`]:e.visuallyHidden},e.root,e[`size${te(t.size)}`],t.readOnly&&e.readOnly]}})(({theme:o,ownerState:e})=>l({display:"inline-flex",position:"relative",fontSize:o.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",WebkitTapHighlightColor:"transparent",[`&.${O.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${O.focusVisible} .${O.iconActive}`]:{outline:"1px solid #999"},[`& .${O.visuallyHidden}`]:Me},e.size==="small"&&{fontSize:o.typography.pxToRem(18)},e.size==="large"&&{fontSize:o.typography.pxToRem(30)},e.readOnly&&{pointerEvents:"none"})),ae=W("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState:o},e)=>[e.label,o.emptyValueFocused&&e.labelEmptyValueActive]})(({ownerState:o})=>l({cursor:"inherit"},o.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"})),Te=W("span",{name:"MuiRating",slot:"Icon",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.icon,t.iconEmpty&&e.iconEmpty,t.iconFilled&&e.iconFilled,t.iconHover&&e.iconHover,t.iconFocus&&e.iconFocus,t.iconActive&&e.iconActive]}})(({theme:o,ownerState:e})=>l({display:"flex",transition:o.transitions.create("transform",{duration:o.transitions.duration.shortest}),pointerEvents:"none"},e.iconActive&&{transform:"scale(1.2)"},e.iconEmpty&&{color:(o.vars||o).palette.action.disabled})),$e=W("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:o=>be(o)&&o!=="iconActive",overridesResolver:(o,e)=>{const{iconActive:t}=o;return[e.decimal,t&&e.iconActive]}})(({iconActive:o})=>l({position:"relative"},o&&{transform:"scale(1.2)"}));function Ne(o){const e=ie(o,He);return i.jsx("span",l({},e))}function oe(o){const{classes:e,disabled:t,emptyIcon:f,focus:L,getLabelText:y,highlightSelectedOnly:v,hover:b,icon:T,IconContainerComponent:H,isActive:$,itemValue:c,labelProps:E,name:x,onBlur:X,onChange:F,onClick:R,onFocus:N,readOnly:P,ownerState:a,ratingValue:u,ratingValueRounded:U}=o,V=v?c===u:c<=u,B=c<=b,C=c<=L,Y=c===U,z=se(),h=i.jsx(Te,{as:H,value:c,className:D(e.icon,V?e.iconFilled:e.iconEmpty,B&&e.iconHover,C&&e.iconFocus,$&&e.iconActive),ownerState:l({},a,{iconEmpty:!V,iconFilled:V,iconHover:B,iconFocus:C,iconActive:$}),children:f&&!V?f:T});return P?i.jsx("span",l({},E,{children:h})):i.jsxs(j.Fragment,{children:[i.jsxs(ae,l({ownerState:l({},a,{emptyValueFocused:void 0}),htmlFor:z},E,{children:[h,i.jsx("span",{className:e.visuallyHidden,children:y(c)})]})),i.jsx("input",{className:e.visuallyHidden,onFocus:N,onBlur:X,onChange:F,onClick:R,disabled:t,value:c,id:z,type:"radio",name:x,checked:Y})]})}const Pe=i.jsx(je,{fontSize:"inherit"}),Be=i.jsx(Le,{fontSize:"inherit"});function ke(o){return`${o} Star${o!==1?"s":""}`}const _e=j.forwardRef(function(e,t){const f=xe({name:"MuiRating",props:e}),{className:L,defaultValue:y=null,disabled:v=!1,emptyIcon:b=Be,emptyLabelText:T="Empty",getLabelText:H=ke,highlightSelectedOnly:$=!1,icon:c=Pe,IconContainerComponent:E=Ne,max:x=5,name:X,onChange:F,onChangeActive:R,onMouseLeave:N,onMouseMove:P,precision:a=1,readOnly:u=!1,size:U="medium",value:V}=f,B=ie(f,Ee),C=se(X),[Y,z]=Fe({controlled:V,default:y,name:"Rating"}),h=J(Y,a),le=Re(),[{hover:d,focus:k},w]=j.useState({hover:-1,focus:-1});let A=h;d!==-1&&(A=d),k!==-1&&(A=k);const{isFocusVisibleRef:K,onBlur:ce,onFocus:re,ref:ue}=Ve(),[de,q]=j.useState(!1),Q=j.useRef(),pe=Ce(ue,Q,t),fe=n=>{P&&P(n);const s=Q.current,{right:r,left:_,width:S}=s.getBoundingClientRect();let M;le.direction==="rtl"?M=(r-n.clientX)/S:M=(n.clientX-_)/S;let p=J(x*M+a/2,a);p=ze(p,a,x),w(g=>g.hover===p&&g.focus===p?g:{hover:p,focus:p}),q(!1),R&&d!==p&&R(n,p)},me=n=>{N&&N(n);const s=-1;w({hover:s,focus:s}),R&&d!==s&&R(n,s)},Z=n=>{let s=n.target.value===""?null:parseFloat(n.target.value);d!==-1&&(s=d),z(s),F&&F(n,s)},ve=n=>{n.clientX===0&&n.clientY===0||(w({hover:-1,focus:-1}),z(null),F&&parseFloat(n.target.value)===h&&F(n,null))},he=n=>{re(n),K.current===!0&&q(!0);const s=parseFloat(n.target.value);w(r=>({hover:r.hover,focus:s}))},ge=n=>{if(d!==-1)return;ce(n),K.current===!1&&q(!1);const s=-1;w(r=>({hover:r.hover,focus:s}))},[ye,ee]=j.useState(!1),I=l({},f,{defaultValue:y,disabled:v,emptyIcon:b,emptyLabelText:T,emptyValueFocused:ye,focusVisible:de,getLabelText:H,icon:c,IconContainerComponent:E,max:x,precision:a,readOnly:u,size:U}),m=Ie(I);return i.jsxs(Oe,l({ref:pe,onMouseMove:fe,onMouseLeave:me,className:D(m.root,L,u&&"MuiRating-readOnly"),ownerState:I,role:u?"img":null,"aria-label":u?H(A):null},B,{children:[Array.from(new Array(x)).map((n,s)=>{const r=s+1,_={classes:m,disabled:v,emptyIcon:b,focus:k,getLabelText:H,highlightSelectedOnly:$,hover:d,icon:c,IconContainerComponent:E,name:C,onBlur:ge,onChange:Z,onClick:ve,onFocus:he,ratingValue:A,ratingValueRounded:h,readOnly:u,ownerState:I},S=r===Math.ceil(A)&&(d!==-1||k!==-1);if(a<1){const M=Array.from(new Array(1/a));return i.jsx($e,{className:D(m.decimal,S&&m.iconActive),ownerState:I,iconActive:S,children:M.map((p,g)=>{const G=J(r-1+(g+1)*a,a);return i.jsx(oe,l({},_,{isActive:!1,itemValue:G,labelProps:{style:M.length-1===g?{}:{width:G===A?`${(g+1)*a*100}%`:"0%",overflow:"hidden",position:"absolute"}}}),G)})},r)}return i.jsx(oe,l({},_,{isActive:S,itemValue:r}),r)}),!u&&!v&&i.jsxs(ae,{className:D(m.label,m.labelEmptyValue),ownerState:I,children:[i.jsx("input",{className:m.visuallyHidden,value:"",id:`${C}-empty`,type:"radio",name:C,checked:h==null,onFocus:()=>ee(!0),onBlur:()=>ee(!1),onChange:Z}),i.jsx("span",{className:m.visuallyHidden,children:T})]})]}))}),Xe=_e;export{Xe as R};
