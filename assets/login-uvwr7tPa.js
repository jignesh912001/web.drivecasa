import{u as F,a as L,r as T,b as I,c as q,e as a,P as A,j as e,S as u,T as H,I as R,d as E,f as k,H as B}from"./index-VrKf3MXp.js";import{c as C,a as p,u as N,F as M,o as U,R as g}from"./rhf-autocomplete-XaM5C1qW.js";import{L as V}from"./LoadingButton-1YL2e73L.js";import"./upload-avatar-5TIgpY_A.js";import"./format-number-p_s9Ejs-.js";import"./fade-Ebl5jnVE.js";import"./image-8QojorRi.js";import"./TextField-M7ya3cUr.js";import"./Select-k0F3GZUn.js";import"./index-q81m-9gd.js";import"./Checkbox-sATYeu_2.js";import"./SwitchBase-gjAkslHG.js";import"./Chip-AL6A0Qza.js";import"./FormControlLabel-SSbvDclG.js";import"./Switch-LShhegwA.js";import"./editor-9Ye9JyHy.js";import"./Radio-H_7hVGj-.js";import"./Autocomplete-ZJ8WBWjP.js";import"./Close-rEFf0etn.js";import"./CircularProgress-hc7Idncv.js";function _(){const{login:s}=F(),h=L(),[$,o]=T.useState(""),x=I().get("returnTo"),t=q(),j=C().shape({email:p().required("UserName is required"),password:p().required("Password is required")}),f={email:"",password:""},i=N({resolver:U(j),defaultValues:f}),{reset:b,handleSubmit:w,formState:{isSubmitting:y}}=i,S=w(async n=>{var m,c,d,l;try{const r=await(s==null?void 0:s(n.email,n.password));(m=r==null?void 0:r.data)!=null&&m.status?(a((c=r==null?void 0:r.data)==null?void 0:c.message),h.push(x||A)):(a((d=r==null?void 0:r.data)==null?void 0:d.message,{variant:"error"}),o((l=r==null?void 0:r.data)==null?void 0:l.message))}catch(r){console.error(r),b(),a(typeof r=="string"?r:r.message,{variant:"error"}),o(typeof r=="string"?r:r.message)}}),P=e.jsx(u,{spacing:2,sx:{mb:5,mt:15},children:e.jsx(H,{variant:"h4",children:"Sign in to DriveCasa"})}),v=e.jsxs(u,{spacing:2.5,children:[e.jsx(g,{name:"email",label:"User Name"}),e.jsx(g,{name:"password",label:"Password",type:t.value?"text":"password",InputProps:{endAdornment:e.jsx(R,{position:"end",children:e.jsx(E,{onClick:t.onToggle,edge:"end",children:e.jsx(k,{icon:t.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(V,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:y,children:"Login"})]});return e.jsxs(e.Fragment,{children:[P,e.jsx(M,{methods:i,onSubmit:S,children:v})]})}function dr(){return e.jsxs(e.Fragment,{children:[e.jsx(B,{children:e.jsx("title",{children:"Login"})}),e.jsx(_,{})]})}export{dr as default};
