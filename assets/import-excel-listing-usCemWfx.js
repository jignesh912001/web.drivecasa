import{a as H,Y as P,a9 as V,c as G,r as n,em as h,j as a,m as z,p as M,S as v,T as O,k as q,H as Y}from"./index-w2TjI0MF.js";import{c as Z,f as _,u as $,F as W,o as J,w as K}from"./rhf-autocomplete-U6p_PEPK.js";import{C as Q}from"./custom-breadcrumbs-RjSW2biQ.js";import{r as X,u as w}from"./xlsx-_hdJyjoG.js";import{I as ee}from"./neoVerify-p4WSaM1h.js";import{G as p}from"./Grid2-zCgqDIFm.js";import{C as ae}from"./Card-huoyhVY-.js";import{C as te}from"./CardHeader-1ocrqUuB.js";import{L as se}from"./LoadingButton-pMu7UJc1.js";import"./upload-avatar-miqQoreL.js";import"./format-number-EJUytZhm.js";import"./fade-MUwQyQUN.js";import"./image-8XOWnu1q.js";import"./Button-craGvtks.js";import"./TextField-Rnx-roig.js";import"./isMuiElement-c8Cd3wTs.js";import"./Select-fj7_ZCHL.js";import"./index-q81m-9gd.js";import"./Checkbox-MPmUmIhR.js";import"./SwitchBase-0oakK23s.js";import"./Chip-xwffwAcK.js";import"./FormControlLabel-i471xspq.js";import"./Switch-uNCmthE_.js";import"./editor-UzmsDwDj.js";import"./Radio-G0NR0HzA.js";import"./Autocomplete-zVr0giqp.js";import"./Close-f2MhZoYf.js";import"./CircularProgress-DldaBh_H.js";function j({currentPost:s}){H();const y=P("up","md"),{enqueueSnackbar:m}=V(),D=G(),g=Z().shape({coverUrl:_().nullable().required("You must upload a file!")}),d=n.useMemo(()=>({coverUrl:(s==null?void 0:s.coverUrl)||null}),[s]),S=$({resolver:J(g),defaultValues:d}),{reset:u,watch:F,setValue:c,handleSubmit:C,formState:{isSubmitting:I}}=S;F(),n.useEffect(()=>{s&&u(d)},[s,d,u]);const A=n.useCallback(o=>new Promise((t,r)=>{const i=new FileReader;i.onload=l=>{try{const f=new Uint8Array(l.target.result),b=X(f,{type:"array"}),k=b.SheetNames[0],B=b.Sheets[k],x=w.sheet_to_json(B),L=x==null?void 0:x.map(e=>({appId:e["App Id"]||"",id:e.Id||"",type:e.Type||"",applicationDate:h(e["Application Date"])||null,soldDate:h(e["Sold Date"])||null,combAppSoldDate:h(e["Combined App-Sold Date"])||null,completionTime:e["Completion Time"]||"",dealership:e.Dealership||"",appFirstName:e["Applicant First Name"]||"",appLastName:e["Applicant Last Name"]||"",status:e.Status||"",score:e.Score||"",grade:e.Grade||"",customTag:e["Custom Tag"]||"",approvalTier:e["Approval Tier"]||"",downpayment:e.Downpayment||"",addDp:e["Add DP"]||"",salesperson:e.Salesperson||"",brd:e.BDR||"",brD2:e["BDR 2"]||"",decisionedBy:e["Decisioned By"]||"",verifier:e.Verifier||"",advActionLetter:e["Adverse Action Letter"]||"",notes:e.Notes||"",referralSource:e["Referral Source"]||"",referralSourceDetail:e["Referral Source Detail"]||"",email:e.Email||"",cellNumber:e["Cell Number"]||"",homeNumber:e["Home Number"]||"",paycallTier:e["Paycall Tier"]||"",proofOfIncome:e["Proof of Income"]||"",dmsId:e["DMS Id"]||"",income:e.Income||"",monthlyPayment:e["Monthly Payment"]||"",pti:e.PTI||"",creditScore:e["Credit Score"]||"",repossession:e.Repossession||"",financialReportStatus:e["Financial Report Status"]||"",applicantZipcode:e["Applicant Zipcode"]||"",zipCode:e.zipCode||""}));t(L)}catch(f){r(f)}},i.onerror=l=>r(l),i.readAsArrayBuffer(o)}),[]),R=C(async o=>{try{await new Promise(l=>setTimeout(l,500));const t=await A(o.coverUrl),{status:r,message:i}=await ee(t);r?m("Upload success!"):m(i,{variant:"error"}),D.onFalse(),u()}catch(t){m(t,{variant:"error"}),console.error(t)}}),T=n.useCallback(o=>{const t=o[0],r=Object.assign(t,{preview:URL.createObjectURL(t)});t&&c("coverUrl",r,{shouldValidate:!0})},[c]),U=n.useCallback(()=>{c("coverUrl",null)},[c]),N=a.jsx(p,{xs:12,md:12,children:a.jsxs(ae,{children:[!y&&a.jsx(te,{title:"Details"}),a.jsx(v,{spacing:3,sx:{p:3},children:a.jsxs(v,{spacing:1.5,children:[a.jsx(O,{variant:"subtitle2",children:"Upload File"}),a.jsx(K,{name:"coverUrl",accept:{"text/csv":[],"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":[],"application/vnd.ms-excel":[]},onDrop:T,onDelete:U})]})})]})}),E=a.jsxs(a.Fragment,{children:[y&&a.jsx(p,{md:4}),a.jsx(p,{xs:12,md:8,sx:{display:"flex",alignItems:"center",justifyContent:"flex-end"},children:a.jsx(se,{type:"submit",variant:"contained",size:"large",loading:I,sx:{ml:2},children:"Upload  File"})})]});return a.jsxs(z,{maxWidth:!1,sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:[a.jsx(Q,{heading:"Import Excel",links:[{name:"Dashboard",href:M.dashboard.root},{name:"Import Excel"}],sx:{mb:{xs:3,md:5}}}),a.jsx(W,{methods:S,onSubmit:R,children:a.jsxs(p,{container:!0,spacing:3,children:[N,E]})})]})}j.propTypes={currentPost:q.object};function Ee(){return a.jsxs(a.Fragment,{children:[a.jsx(Y,{children:a.jsx("title",{children:" Neo verify | Import Excel "})}),a.jsx(j,{})]})}export{Ee as default};
