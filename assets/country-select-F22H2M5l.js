import{j as r,r as f,f as u,I as C,k as l,aV as g}from"./index-WqsZrxyt.js";import{A as j}from"./Autocomplete-Al4Vq1-g.js";import{T as b}from"./TextField-2tCbVTps.js";import{C as I}from"./Chip-rCFgLS50.js";function P({label:i,error:d,helperText:a,placeholder:y,...s}){const c=s==null?void 0:s.multiple;return r.jsx(j,{autoHighlight:!c,disableCloseOnSelect:c,renderOption:(o,n)=>{var t;const e=m(n);return e.label?f.createElement("li",{...o,key:e.label},r.jsx(u,{icon:`circle-flags:${(t=e.code)==null?void 0:t.toLowerCase()}`,sx:{mr:1}},e.label),e.label," (",e.code,") +",e.phone):null},renderInput:o=>{var t;const n=m(o.inputProps.value),e={...o,label:i,placeholder:y,error:!!d,helperText:a,inputProps:{...o.inputProps,autoComplete:"new-password"}};return c?r.jsx(b,{...e}):r.jsx(b,{...e,InputProps:{...o.InputProps,startAdornment:r.jsx(C,{position:"start",sx:{...!n.code&&{display:"none"}},children:r.jsx(u,{icon:`circle-flags:${(t=n.code)==null?void 0:t.toLowerCase()}`,sx:{mr:-.5,ml:.5}})})}})},renderTags:(o,n)=>o.map((e,t)=>{var x;const p=m(e);return f.createElement(I,{...n({index:t}),key:p.label,label:p.label,icon:r.jsx(u,{icon:`circle-flags:${(x=p.code)==null?void 0:x.toLowerCase()}`}),size:"small",variant:"soft"})}),...s})}P.propTypes={error:l.bool,label:l.string,helperText:l.node,placeholder:l.string};function m(i){return{...g.filter(a=>a.label===i)[0]}}export{P as C};
