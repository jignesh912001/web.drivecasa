import{k as T,r as o,j as e,S as E,i as y,t as $,K as q,W as U,T as P,q as K,f as k,d as J,e as Q,em as X,dy as ee,dz as ae,en as te,eo as le,eh as D,e8 as re,m as se,p as ie,H as oe}from"./index-Ks3TOSIq.js";import{C as ne}from"./custom-breadcrumbs-W9bDBBuU.js";import{i as de}from"./format-time-3AQVHoBL.js";import{F as me}from"./file-data-activity-oz_Hqajq.js";import{a as fe,G as ce}from"./neoVerify-ygWn6QrO.js";import{D as I}from"./DatePicker-6LxWtsRu.js";import{f as pe}from"./TextField-tOSLX-sg.js";import{E as ue}from"./empty-content-8lsYOAb1.js";import{u as he}from"./use-table-ZBGcY1K5.js";import"./table-pagination-custom-wpKaXv3B.js";import{T as xe,a as be,d as Ce,c as je,b as w}from"./TableHead-Fp2lapHv.js";import{T as p}from"./TableCell-S3QnDOcP.js";import{a as De,b as ye,c as Ne,d as ge,e as We,f as Se,i as Me,j as Te,k as we,l as Ae}from"./report-table-row-iGfdk7Uf.js";import{u as A,w as ke}from"./xlsx-_hdJyjoG.js";import{D as ve}from"./DialogTitle-748HKyej.js";import{D as Pe}from"./DialogContent-PZfO3X9Z.js";import{D as Ie}from"./DataGrid-cM0FFpq6.js";import{L as Ee}from"./LoadingButton-eRlULjL6.js";import{C as Fe}from"./Card-vdcIGYi0.js";import"./index-q81m-9gd.js";import"./use-chart-4aw_pIQn.js";import"./CardHeader-ltZO9cOf.js";import"./DialogActions-wvrfoWGb.js";import"./ListItem-iEfVvsPe.js";import"./Chip-8HIaCVOq.js";import"./Select-tvpX3YFo.js";import"./Checkbox-cmHmjMjI.js";import"./SwitchBase-GReH0YHb.js";import"./TablePagination-N6zTghaH.js";import"./KeyboardArrowRight-GMUBF4yd.js";import"./FirstPage-tIzHEnDS.js";import"./FormControlLabel-ZMimMnGE.js";import"./Switch-4EoByK6Q.js";import"./Box-x_y77R_r.js";import"./Stack-nN_ktu43.js";import"./dialogTitleClasses-bguNBaBC.js";import"./Autocomplete-nLjhnkfB.js";import"./Close-WYfdXw2Y.js";import"./ClickAwayListener-a3KPNHUm.js";import"./Skeleton-HvX1xqdt.js";import"./CircularProgress-otiFQZT3.js";function F({filters:s,onFilters:n,dateError:t}){const r=o.useCallback(f=>{n("startDate",f)},[n]),u=o.useCallback(f=>{n("endDate",f)},[n]);return e.jsx(e.Fragment,{children:e.jsxs(E,{spacing:2,alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5,pr:{xs:2.5,md:1}},children:[e.jsx(I,{label:"Start date",value:s.startDate,onChange:r,slotProps:{textField:{fullWidth:!0}},sx:{maxWidth:{md:200}}}),e.jsx(I,{label:"End date",value:s.endDate,onChange:u,slotProps:{textField:{fullWidth:!0,error:t}},sx:{maxWidth:{md:200},[`& .${pe.root}`]:{position:{md:"absolute"},bottom:{md:-40}}}})]})})}F.propTypes={dateError:T.bool,filters:T.object,onFilters:T.func};const Le=({neoAppDataSummaryPercents:s})=>{const n=he();return e.jsx(y,{sx:{width:"100%"},children:e.jsx($,{children:e.jsx(xe,{component:q,children:e.jsxs(be,{size:(n.dense,"small"),children:[e.jsx(Ce,{children:e.jsxs(je,{children:[e.jsx(p,{}),s.map((t,r)=>e.jsx(p,{children:t.monthName},r))]})}),e.jsxs(w,{children:[e.jsx(p,{sx:{fontWeight:"bold"},children:"Book To Look"}),s.map((t,r)=>e.jsxs(p,{children:[t.bookToLookPercentage," %"]},r))]}),e.jsxs(w,{children:[e.jsx(p,{sx:{fontWeight:"bold"},children:"Book To Approved"}),s.map((t,r)=>e.jsxs(p,{children:[t.bookToApprovedPercentage," %"]},r))]}),e.jsxs(w,{children:[e.jsx(p,{sx:{fontWeight:"bold"},children:"Approved"}),s.map((t,r)=>e.jsxs(p,{children:[t.approvedPercentage," %"]},r))]})]})})})})},Re=({openFile:s,loading:n,handleClose:t,totalCount:r,tableDataExcel:u})=>{const f=[{field:"appFirstName",headerName:"FirstName",flex:1,minWidth:180,editable:!1,hideable:!1,filterable:!1},{field:"appLastName",headerName:"LastName",flex:1,minWidth:180,editable:!1,hideable:!1,filterable:!1},{field:"email",headerName:"Email",flex:1,minWidth:300,editable:!1,hideable:!1,filterable:!1,renderCell:a=>e.jsx(De,{params:a})},{field:"dmsId",headerName:"DmsId",flex:1,minWidth:180,filterable:!1,disableColumnMenu:!0},{field:"cellNumber",headerName:"Number",flex:1,minWidth:180,filterable:!1,disableColumnMenu:!0,renderCell:a=>e.jsx(ye,{params:a})},{field:"applicationDate",headerName:"Application Date",flex:1,minWidth:180,filterable:!1,disableColumnMenu:!0,renderCell:a=>e.jsx(Ne,{params:a})},{field:"combAppSoldDate",headerName:"CombAppSold Date",flex:1,minWidth:180,filterable:!1,disableColumnMenu:!0,renderCell:a=>e.jsx(ge,{params:a})},{field:"completionTime",headerName:"Completion Time",flex:1,minWidth:180,filterable:!1,disableColumnMenu:!0,renderCell:a=>e.jsx(We,{params:a})},{field:"soldDate",headerName:"Sold Date",flex:1,minWidth:120,filterable:!1,disableColumnMenu:!0,renderCell:a=>e.jsx(Se,{params:a})},{field:"type",headerName:"Type",flex:1,minWidth:120,filterable:!1,disableColumnMenu:!0},{field:"dealership",headerName:"Dealership",flex:1,minWidth:120,filterable:!1,disableColumnMenu:!0},{field:"score",headerName:"Score",flex:1,minWidth:120,filterable:!1,disableColumnMenu:!0},{field:"grade",headerName:"Grade",flex:1,minWidth:120,filterable:!1,disableColumnMenu:!0},{field:"customTag",headerName:"Custom Tag",flex:1,minWidth:120,filterable:!1,disableColumnMenu:!0},{field:"approvalTier",headerName:"ApprovalTier",flex:1,minWidth:120,filterable:!1,disableColumnMenu:!0},{field:"salesperson",headerName:"Sales person",flex:1,minWidth:180,filterable:!1,disableColumnMenu:!0},{field:"decisionedBy",headerName:"Decisioned",flex:1,minWidth:180,filterable:!1,disableColumnMenu:!0},{field:"verifier",headerName:"Verifier",flex:1,minWidth:180,filterable:!1,disableColumnMenu:!0},{field:"advActionLetter",headerName:"AdvActionLetter",flex:1,minWidth:120,filterable:!1,disableColumnMenu:!0},{field:"referralSource",headerName:"Referral Source",flex:1,minWidth:180,filterable:!1,disableColumnMenu:!0},{field:"referralSourceDetail",headerName:"Referral Source Detail",flex:1,minWidth:180,filterable:!1,disableColumnMenu:!0},{field:"homeNumber",headerName:"Home Number",flex:1,minWidth:120,filterable:!1,disableColumnMenu:!0},{field:"paycallTier",headerName:"PaycallTier",flex:1,minWidth:120,filterable:!1,disableColumnMenu:!0},{field:"proofOfIncome",headerName:"ProofOfIncome",flex:1,minWidth:120,filterable:!1,disableColumnMenu:!0},{field:"pti",headerName:"PTI",flex:1,minWidth:120,filterable:!1,disableColumnMenu:!0},{field:"creditScore",headerName:"CreditScore",flex:1,minWidth:120,filterable:!1,disableColumnMenu:!0},{field:"repossession",headerName:"Repossession",flex:1,minWidth:120,filterable:!1,disableColumnMenu:!0},{field:"applicantZipcode",headerName:"Applicant Zipcode",flex:1,minWidth:120,filterable:!1,disableColumnMenu:!0},{field:"zipCode",headerName:"Zipcode",flex:1,minWidth:120,filterable:!1,disableColumnMenu:!0},{field:"income",headerName:"Income",flex:1,minWidth:120,filterable:!1,disableColumnMenu:!0,renderCell:a=>e.jsx(Me,{params:a})},{field:"downpayment",headerName:"Downpayment",flex:1,minWidth:120,filterable:!1,disableColumnMenu:!0,renderCell:a=>e.jsx(Te,{params:a})},{field:"monthlyPayment",headerName:"Monthly Payment",flex:1,minWidth:180,filterable:!1,disableColumnMenu:!0,renderCell:a=>e.jsx(we,{params:a})},{field:"status",headerName:"Status",flex:1,minWidth:120,filterable:!1,disableColumnMenu:!0,renderCell:a=>e.jsx(Ae,{params:a})},{field:"notes",headerName:"Notes",flex:1,minWidth:180,filterable:!1,disableColumnMenu:!0}],d=()=>{const a=f.map(b=>b.headerName),N=u.map(b=>f.map(j=>b[j.field])),m=[a,...N],g=A.aoa_to_sheet(m),x=A.book_new();A.book_append_sheet(x,g,"Sheet1"),ke(x,"Monthly-report.xlsx"),Q("Download successful."),t(!1)};return e.jsx(e.Fragment,{children:e.jsxs(U,{fullWidth:!0,open:s,onClose:t,PaperProps:{sx:{maxWidth:"100%",maxHeight:800}},children:[e.jsx(ve,{children:e.jsxs(y,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx(P,{variant:"h6",children:"Preview"}),e.jsxs(y,{sx:{display:"flex",gap:2},children:[e.jsx(K,{variant:"contained",color:"primary",onClick:d,startIcon:e.jsx(k,{icon:"eva:cloud-download-fill"}),children:"Download"}),e.jsx(J,{variant:"solid",sx:{fontWeight:"900"},onClick:t,children:e.jsx(k,{icon:"eva:close-outline"})})]})]})}),e.jsx(Pe,{children:e.jsx(Ie,{rowCount:r,rows:u,columns:f,loading:n,pageSizeOptions:[],hideFooterPagination:!0,stickyHeader:!0,disableColumnMenu:!0})}),e.jsx(E,{sx:{p:2,display:"flex",justifyContent:"flex-end",flexDirection:"row"},children:e.jsxs(P,{variant:"body2",sx:{pr:2},children:["1–0 of ",r]})})]})})},Be={search:"",startDate:X(),endDate:new Date},Ge=()=>{const s=ee(),{user:n}=o.useContext(ae),[t,r]=o.useState(!0),[u,f]=o.useState(!1),[d,a]=o.useState(Be),N=de(d.startDate,d.endDate),[m,g]=o.useState([]),[x,b]=o.useState(Array),[j,v]=o.useState(!1),[L,R]=o.useState([]),[B,G]=o.useState(0),[W,H]=o.useState({IsAudit:!1,IsExport:!1,IsPrint:!1});o.useEffect(()=>{t&&(Y(),V())},[t]);const V=async()=>{const l={UserTypeID:n==null?void 0:n.UserTypeID},{result:i,status:c}=await te(l);if(c){let C=le(i,"void : monthly new deals created");H(C)}},Y=async()=>{var h;const l={searchStartDate:D(d.startDate),searchEndDate:D(d.endDate),search:d.search},{result:i,isLoading:c}=await fe(l),C=((h=i==null?void 0:i.neoAppDataSummaries)==null?void 0:h.map((S,M)=>({...S,id:M})))||[];b(i==null?void 0:i.neoAppDataSummaryPercents),g(C),r(c)},O=o.useCallback((l,i)=>{a(c=>({...c,[l]:i})),r(!0)},[]),_={labels:m==null?void 0:m.map(l=>[l.monthYear,`Total : ${l.totalApplications}`]),colors:[s.palette.primary.main,s.palette.error.main,s.palette.warning.main,s.palette.text.disabled],series:[{type:"Month",data:[{name:"Funded Sold",data:m.map(l=>l.appsFundedSold)},{name:"Incomplete Applications",data:m.map(l=>l.incompleteApplications)},{name:"Approved Not Sold",data:m.map(l=>l.appsApprovedNotSold)},{name:"Declined",data:m.map(l=>l.appsDeclined)}],options:{}}]},z=()=>{v(!open)},Z=async l=>{try{f(!0);const i={searchStartDate:D(d.startDate),searchEndDate:D(d.endDate),search:d.search},{result:c,isLoading:C}=await ce(i),h=(c==null?void 0:c.map((S,M)=>({...S,id:M})))||[];v(!0),G(h==null?void 0:h.length),R(h),f(C)}catch(i){console.error(i)}};return e.jsx(e.Fragment,{children:t?e.jsx(re,{}):e.jsxs(se,{maxWidth:!1,sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:[e.jsx(ne,{heading:"Monthly report based on new deals created",links:[{name:"Dashboard",href:ie.dashboard.root},{name:"Monthly report based on new deals created"}],action:e.jsx(y,{display:"flex",gap:2,children:(W==null?void 0:W.IsExport)&&e.jsx(Ee,{variant:"contained",startIcon:e.jsx(k,{icon:"solar:export-bold"}),onClick:Z,loading:u,children:"Export"})}),sx:{mb:{xs:3,md:3}}}),e.jsx(F,{filters:d,dateError:N,onFilters:O}),m.length>0?e.jsx(me,{title:"",chart:_}):e.jsx(ue,{title:"No Data"}),m&&x.length>0&&e.jsx(Fe,{sx:{mb:3,marginTop:"30px"},children:e.jsx(Le,{neoAppDataSummaryPercents:x})}),j&&e.jsx(Re,{loading:u,openFile:j,handleClose:z,totalCount:B,tableDataExcel:L})]})})},He=Ge;function Aa(){return e.jsxs(e.Fragment,{children:[e.jsx(oe,{children:e.jsx("title",{children:"Neo Verify | Monthly report based on new deals created"})}),e.jsx(He,{})]})}export{Aa as default};
