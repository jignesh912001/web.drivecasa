import{ar as W,as as A,s as F,B as D,ah as i,bo as G,r as H,ag as J,b9 as K,b7 as M,j as x,au as Q,ak as T,aj as V}from"./index-8hdvFbfH.js";function X(e){return W("PrivateSwitchBase",e)}A("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Y=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Z=e=>{const{classes:o,checked:d,disabled:l,edge:a}=e,r={root:["root",d&&"checked",l&&"disabled",a&&`edge${T(a)}`],input:["input"]};return V(r,X,o)},ee=F(D)(({ownerState:e})=>i({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),se=F("input",{shouldForwardProp:G})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),te=H.forwardRef(function(o,d){const{autoFocus:l,checked:a,checkedIcon:r,className:w,defaultChecked:h,disabled:y,disableFocusRipple:p=!1,edge:R=!1,icon:S,id:P,inputProps:I,inputRef:j,name:v,onBlur:f,onChange:g,onFocus:b,readOnly:z,required:E=!1,tabIndex:N,type:c,value:m}=o,U=J(o,Y),[k,L]=K({controlled:a,default:!!h,name:"SwitchBase",state:"checked"}),t=M(),_=s=>{b&&b(s),t&&t.onFocus&&t.onFocus(s)},q=s=>{f&&f(s),t&&t.onBlur&&t.onBlur(s)},O=s=>{if(s.nativeEvent.defaultPrevented)return;const C=s.target.checked;L(C),g&&g(s,C)};let n=y;t&&typeof n>"u"&&(n=t.disabled);const $=c==="checkbox"||c==="radio",u=i({},o,{checked:k,disabled:n,disableFocusRipple:p,edge:R}),B=Z(u);return x.jsxs(ee,i({component:"span",className:Q(B.root,w),centerRipple:!0,focusRipple:!p,disabled:n,tabIndex:null,role:void 0,onFocus:_,onBlur:q,ownerState:u,ref:d},U,{children:[x.jsx(se,i({autoFocus:l,checked:a,defaultChecked:h,className:B.input,disabled:n,id:$?P:void 0,name:v,onChange:O,readOnly:z,ref:j,required:E,ownerState:u,tabIndex:N,type:c},c==="checkbox"&&m===void 0?{}:{value:m},I)),k?r:S]}))}),ae=te;export{ae as S};
