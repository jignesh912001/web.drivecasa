import{k,r as p,j as e,S as P,i as O,f as R,t as K,K as B,T as J,q as Z,e as ce,em as me,dy as he,l as pe,dz as fe,en as ue,eo as xe,eh as D,e8 as je,m as be,p as Se,H as De}from"./index-Ks3TOSIq.js";import{C as Ce}from"./custom-breadcrumbs-W9bDBBuU.js";import{i as ge}from"./format-time-3AQVHoBL.js";import{F as Ae}from"./file-data-activity-oz_Hqajq.js";import{b as Ne,N as We}from"./neoVerify-ygWn6QrO.js";import{D as q}from"./DatePicker-6LxWtsRu.js";import{f as ye}from"./TextField-tOSLX-sg.js";import{E}from"./empty-content-8lsYOAb1.js";import{u as Y}from"./use-table-ZBGcY1K5.js";import"./table-pagination-custom-wpKaXv3B.js";import{A as Te,a as Me,b as we}from"./AccordionDetails-kegdQOYV.js";import{T as V,a as G,d as y,c,b as C}from"./TableHead-Fp2lapHv.js";import{T as t}from"./TableCell-S3QnDOcP.js";import{a as ve,b as Fe,c as ke,d as Ie,e as Pe,f as Re,i as Ee,j as Oe,k as Be,l as Ye}from"./report-table-row-iGfdk7Uf.js";import{u as I,w as Ve}from"./xlsx-_hdJyjoG.js";import{C as W}from"./Card-vdcIGYi0.js";import{D as Ge}from"./DialogContent-PZfO3X9Z.js";import{D as $e}from"./DataGrid-cM0FFpq6.js";import{G as ze,a as He}from"./GridToolbarColumnsButton-BnKMud6j.js";import"./index-q81m-9gd.js";import"./use-chart-4aw_pIQn.js";import"./CardHeader-ltZO9cOf.js";import"./DialogActions-wvrfoWGb.js";import"./ListItem-iEfVvsPe.js";import"./Chip-8HIaCVOq.js";import"./Select-tvpX3YFo.js";import"./Checkbox-cmHmjMjI.js";import"./SwitchBase-GReH0YHb.js";import"./TablePagination-N6zTghaH.js";import"./KeyboardArrowRight-GMUBF4yd.js";import"./FirstPage-tIzHEnDS.js";import"./FormControlLabel-ZMimMnGE.js";import"./Switch-4EoByK6Q.js";import"./Box-x_y77R_r.js";import"./Stack-nN_ktu43.js";import"./dialogTitleClasses-bguNBaBC.js";import"./Autocomplete-nLjhnkfB.js";import"./Close-WYfdXw2Y.js";import"./ClickAwayListener-a3KPNHUm.js";import"./Skeleton-HvX1xqdt.js";import"./CircularProgress-otiFQZT3.js";function Q({filters:o,onFilters:r,dateError:d}){const l=p.useCallback(u=>{r("startDate",u)},[r]),g=p.useCallback(u=>{r("endDate",u)},[r]);return e.jsx(e.Fragment,{children:e.jsxs(P,{spacing:2,alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5,pr:{xs:2.5,md:1}},children:[e.jsx(q,{label:"Start date",value:o.startDate,onChange:l,slotProps:{textField:{fullWidth:!0}},sx:{maxWidth:{md:200}}}),e.jsx(q,{label:"End date",value:o.endDate,onChange:g,slotProps:{textField:{fullWidth:!0,error:d}},sx:{maxWidth:{md:200},[`& .${ye.root}`]:{position:{md:"absolute"},bottom:{md:-40}}}})]})})}Q.propTypes={dateError:k.bool,filters:k.object,onFilters:k.func};const _e=({neoAppDataSummaryPercents:o})=>{const r=Y();return e.jsx(O,{sx:{width:"100%"},children:e.jsxs(Te,{children:[e.jsx(Me,{expandIcon:e.jsx(R,{icon:"ooui:expand"}),"aria-controls":"panel1-content",id:"panel1-header",sx:{fontWeight:"bold"},children:"Neo Status"}),e.jsx(we,{children:e.jsx(K,{children:e.jsx(V,{component:B,children:e.jsxs(G,{size:r.dense?"small":"medium",children:[e.jsx(y,{children:e.jsxs(c,{children:[e.jsx(t,{children:"Status"}),e.jsx(t,{align:"left",children:"Neo Status"}),e.jsx(t,{align:"center"})]})}),e.jsxs(C,{children:[e.jsxs(c,{children:[e.jsx(t,{sx:{fontWeight:"bold"},children:"Working"}),e.jsx(t,{children:"Active, Application Submitted, Appointment Set, Fresh (within 30 days), Pending, Underwriting Ready"})]}),e.jsxs(c,{children:[e.jsx(t,{sx:{fontWeight:"bold"},children:"Approved"}),e.jsx(t,{children:"Dead, Sold, Sold - Outside Finan, Sold & Verified (if sold date or DMS Id not there)"})]}),e.jsxs(c,{children:[e.jsx(t,{sx:{fontWeight:"bold"},children:"Ignored"}),e.jsx(t,{children:"Duplicate-Ignore"})]}),e.jsxs(c,{children:[e.jsx(t,{sx:{fontWeight:"bold"},children:"Sold"}),e.jsx(t,{children:"Sold, Sold - Outside Finan, Sold & Verified (Sold Date and DMS Id should be there)"})]}),e.jsxs(c,{children:[e.jsx(t,{sx:{fontWeight:"bold"},children:"Rejected"}),e.jsx(t,{children:"Rejected, Fresh (Older than 30 days)"})]}),e.jsxs(c,{children:[e.jsx(t,{sx:{fontWeight:"bold"},children:"Other"}),e.jsx(t,{children:"Application Ready, Approved - Not Sold, Assign Salesperson, Charged Off, Conditional Approval, Incomplete, Low Balance, Review"})]})]})]})})})})]})})},Ue=({loading:o,totalCount:r,tableDataStatuswise:d,seriesLabel:l,handleRefreshPage:g,permission:u})=>{const i=[{field:"appFirstName",headerName:"FirstName",flex:1,minWidth:180,editable:!1,hideable:!1,filterable:!1},{field:"appLastName",headerName:"LastName",flex:1,minWidth:180,editable:!1,hideable:!1,filterable:!1},{field:"email",headerName:"Email",flex:1,minWidth:300,editable:!1,hideable:!1,filterable:!1,renderCell:n=>e.jsx(ve,{params:n})},{field:"dmsId",headerName:"DmsId",flex:1,minWidth:180,filterable:!1,disableColumnMenu:!0},{field:"cellNumber",headerName:"Number",flex:1,minWidth:180,filterable:!1,disableColumnMenu:!0,renderCell:n=>e.jsx(Fe,{params:n})},{field:"applicationDate",headerName:"Application Date",flex:1,minWidth:180,filterable:!1,disableColumnMenu:!0,renderCell:n=>e.jsx(ke,{params:n})},{field:"combAppSoldDate",headerName:"CombAppSold Date",flex:1,minWidth:180,filterable:!1,disableColumnMenu:!0,renderCell:n=>e.jsx(Ie,{params:n})},{field:"completionTime",headerName:"Completion Time",flex:1,minWidth:180,filterable:!1,disableColumnMenu:!0,renderCell:n=>e.jsx(Pe,{params:n})},{field:"soldDate",headerName:"Sold Date",flex:1,minWidth:120,filterable:!1,disableColumnMenu:!0,renderCell:n=>e.jsx(Re,{params:n})},{field:"type",headerName:"Type",flex:1,minWidth:120,filterable:!1,disableColumnMenu:!0},{field:"dealership",headerName:"Dealership",flex:1,minWidth:120,filterable:!1,disableColumnMenu:!0},{field:"score",headerName:"Score",flex:1,minWidth:120,filterable:!1,disableColumnMenu:!0},{field:"grade",headerName:"Grade",flex:1,minWidth:120,filterable:!1,disableColumnMenu:!0},{field:"customTag",headerName:"Custom Tag",flex:1,minWidth:120,filterable:!1,disableColumnMenu:!0},{field:"approvalTier",headerName:"ApprovalTier",flex:1,minWidth:120,filterable:!1,disableColumnMenu:!0},{field:"salesperson",headerName:"Sales person",flex:1,minWidth:180,filterable:!1,disableColumnMenu:!0},{field:"decisionedBy",headerName:"Decisioned",flex:1,minWidth:180,filterable:!1,disableColumnMenu:!0},{field:"verifier",headerName:"Verifier",flex:1,minWidth:180,filterable:!1,disableColumnMenu:!0},{field:"advActionLetter",headerName:"AdvActionLetter",flex:1,minWidth:120,filterable:!1,disableColumnMenu:!0},{field:"referralSource",headerName:"Referral Source",flex:1,minWidth:180,filterable:!1,disableColumnMenu:!0},{field:"referralSourceDetail",headerName:"Referral Source Detail",flex:1,minWidth:180,filterable:!1,disableColumnMenu:!0},{field:"homeNumber",headerName:"Home Number",flex:1,minWidth:120,filterable:!1,disableColumnMenu:!0},{field:"paycallTier",headerName:"PaycallTier",flex:1,minWidth:120,filterable:!1,disableColumnMenu:!0},{field:"proofOfIncome",headerName:"ProofOfIncome",flex:1,minWidth:120,filterable:!1,disableColumnMenu:!0},{field:"pti",headerName:"PTI",flex:1,minWidth:120,filterable:!1,disableColumnMenu:!0},{field:"creditScore",headerName:"CreditScore",flex:1,minWidth:120,filterable:!1,disableColumnMenu:!0},{field:"repossession",headerName:"Repossession",flex:1,minWidth:120,filterable:!1,disableColumnMenu:!0},{field:"applicantZipcode",headerName:"Applicant Zipcode",flex:1,minWidth:120,filterable:!1,disableColumnMenu:!0},{field:"zipCode",headerName:"Zipcode",flex:1,minWidth:120,filterable:!1,disableColumnMenu:!0},{field:"income",headerName:"Income",flex:1,minWidth:120,filterable:!1,disableColumnMenu:!0,renderCell:n=>e.jsx(Ee,{params:n})},{field:"downpayment",headerName:"Downpayment",flex:1,minWidth:120,filterable:!1,disableColumnMenu:!0,renderCell:n=>e.jsx(Oe,{params:n})},{field:"monthlyPayment",headerName:"Monthly Payment",flex:1,minWidth:180,filterable:!1,disableColumnMenu:!0,renderCell:n=>e.jsx(Be,{params:n})},{field:"status",headerName:"Status",flex:1,minWidth:120,filterable:!1,disableColumnMenu:!0,renderCell:n=>e.jsx(Ye,{params:n})},{field:"notes",headerName:"Notes",flex:1,minWidth:180,filterable:!1,disableColumnMenu:!0}],T=()=>{let n="";l!=null&&l.seriesName?n=`${l.seriesName}-${l.searchStartDate}-TO-${l.searchEndDate}.xlsx`:n=`All Data - ${l==null?void 0:l.searchStartDate}-TO-${l==null?void 0:l.searchEndDate}.xlsx`;const f=i.map(N=>N.headerName),M=d.map(N=>i.map(F=>N[F.field])),w=[f,...M],v=I.aoa_to_sheet(w),A=I.book_new();I.book_append_sheet(A,v,"Sheet1"),Ve(A,n),ce("Download successful."),handleClose(!1)};return e.jsx(e.Fragment,{children:e.jsxs(W,{children:[e.jsx(Ge,{sx:{maxWidth:"100%",height:500},children:e.jsx($e,{rowCount:r,rows:d,columns:i,loading:o,paginationMode:"server",pageSizeOptions:[],hideFooterPagination:!0,stickyHeader:!0,disableColumnMenu:!0,slots:{toolbar:()=>e.jsx(e.Fragment,{children:e.jsxs(ze,{children:[e.jsxs(J,{variant:"h6",children:[l!=null&&l.seriesName?l==null?void 0:l.seriesName:"All Data"," : ",l==null?void 0:l.searchStartDate," To ",l==null?void 0:l.searchEndDate,"   "]}),e.jsxs(P,{spacing:1,flexGrow:1,direction:"row",alignItems:"center",justifyContent:"flex-end",children:[(u==null?void 0:u.IsExport)&&e.jsx(Z,{variant:"contained",color:"primary",onClick:T,startIcon:e.jsx(R,{icon:"eva:cloud-download-fill"}),children:"Download"}),e.jsx(Z,{variant:"outlined",startIcon:e.jsx(R,{icon:"material-symbols:refresh"}),onClick:g,children:"Refresh"}),e.jsx(He,{})]})]})}),noRowsOverlay:()=>e.jsx(E,{title:"No Data"}),noResultsOverlay:()=>e.jsx(E,{title:"No results found"})}})}),e.jsx(P,{sx:{p:2,display:"flex",justifyContent:"flex-end",flexDirection:"row"},children:e.jsxs(J,{variant:"body2",sx:{pr:2},children:["1–0 of ",r]})})]})})},Je=({neoAppDataSummaryPercents:o})=>{const r=Y();return e.jsx(O,{sx:{width:"100%"},children:e.jsx(V,{component:B,children:e.jsxs(G,{size:(r.dense,"small"),children:[e.jsx(y,{children:e.jsxs(c,{children:[e.jsx(t,{children:"Neo AppData Summary Percents"}),o.map((d,l)=>e.jsx(t,{children:d.monthName},l))]})}),e.jsxs(C,{children:[e.jsx(t,{sx:{fontWeight:"bold"},children:"Book To Look"}),o.map((d,l)=>e.jsxs(t,{children:[d.bookToLookPercentage," %"]},l))]}),e.jsxs(C,{children:[e.jsx(t,{sx:{fontWeight:"bold"},children:"Book To Approved"}),o.map((d,l)=>e.jsxs(t,{children:[d.bookToApprovedPercentage," %"]},l))]}),e.jsxs(C,{children:[e.jsx(t,{sx:{fontWeight:"bold"},children:"Approved"}),o.map((d,l)=>e.jsxs(t,{children:[d.approvedPercentage," %"]},l))]})]})})})},Ze=({neoAppDataSummaryPercents:o})=>{const r=Y();return e.jsx(O,{sx:{width:"100%"},children:e.jsx(K,{children:e.jsx(V,{component:B,children:e.jsxs(G,{size:r.dense?"small":"medium",children:[e.jsx(y,{children:e.jsxs(c,{children:[e.jsx(t,{children:"Status"}),e.jsx(t,{align:"left",children:"Neo Status"}),e.jsx(t,{align:"center"})]})}),e.jsxs(C,{children:[e.jsxs(c,{children:[e.jsx(t,{sx:{fontWeight:"bold"},children:"Incomplete Applications"}),e.jsx(t,{children:"Active,Application Submitte,Appointment Set,Assign Salesperson,Charged Off,Fresh,Incomplete,Pending,Underwriting Ready,Working"})]}),e.jsxs(c,{children:[e.jsx(t,{sx:{fontWeight:"bold"},children:"Apps Approved Not Funded/Sold"}),e.jsx(t,{children:"Approved,Approved - Not Sold,Conditional Approval,Dead,Lost"})]}),e.jsxs(c,{children:[e.jsx(t,{sx:{fontWeight:"bold"},children:"Apps Funded/Sold"}),e.jsx(t,{children:"Sold,Sold - Outside Finan,Sold & Verified"})]})]}),e.jsx(y,{children:e.jsxs(c,{children:[e.jsx(t,{}),e.jsx(t,{align:"left",children:"Formulas"}),e.jsx(t,{align:"center"})]})}),e.jsxs(C,{children:[e.jsxs(c,{children:[e.jsx(t,{sx:{fontWeight:"bold"},children:"Book To %"}),e.jsx(t,{children:"FundedOrSoldApplications * 100.0 / TotalApplications"})]}),e.jsxs(c,{children:[e.jsx(t,{sx:{fontWeight:"bold"},children:"Book To %"}),e.jsx(t,{children:"(FundedOrSoldApplications + AppsApprovedNotSold) * 100.0 / (TotalApplications - IncompleteApplications)"})]}),e.jsxs(c,{children:[e.jsx(t,{sx:{fontWeight:"bold"},children:"Book To Approved%"}),e.jsx(t,{children:"FundedOrSoldApplications * 100.0 / (FundedOrSoldApplications + AppsApprovedNotSold)"})]})]})]})})})})},qe={search:"",startDate:me(),endDate:new Date},Ke=()=>{const o=he();pe();const{user:r}=p.useContext(fe),[d,l]=p.useState(!0),[g,u]=p.useState(!1),[i,T]=p.useState(qe),n=ge(i.startDate,i.endDate),[f,M]=p.useState([]),[w,v]=p.useState([]),[A,N]=p.useState(Array);p.useState(!1);const[F,X]=p.useState(0),[L,$]=p.useState(),[ee,te]=p.useState({IsAudit:!1,IsExport:!1,IsPrint:!1});p.useEffect(()=>{d&&(le(),ae(),H())},[d]);const ae=async()=>{const a={UserTypeID:r==null?void 0:r.UserTypeID},{result:s,status:m}=await ue(a);if(m){let h=xe(s,"Monthly Status Wise Summary");te(h)}},le=async()=>{var x;const a={searchStartDate:D(i.startDate),searchEndDate:D(i.endDate),search:i.search},{result:s,isLoading:m}=await Ne(a),h=((x=s==null?void 0:s.neoAppDataStatusWiseSummary)==null?void 0:x.map((j,b)=>({...j,id:b})))||[];N(s==null?void 0:s.neoAppDataSummaryPercents),M(h),l(m)},z=async a=>{const{result:s,isLoading:m}=await We(a),h=(s==null?void 0:s.map((x,j)=>({...x,id:j})))||[];X(h==null?void 0:h.length),v(h),u(m)},se=p.useCallback((a,s)=>{T(m=>({...m,[a]:s})),l(!0)},[]),ne={labels:f==null?void 0:f.map(a=>[a.monthYear,`Total : ${a.totalApplications}`]),colors:[o.palette.primary.main,o.palette.error.main,o.palette.warning.main,o.palette.text.disabled],series:[{type:"Month",data:[{name:"Working Applications",data:f==null?void 0:f.map(a=>a.workingApplications)},{name:"Approved Applications",data:f.map(a=>a.approvedApplications)},{name:"Ignored Application",data:f.map(a=>a.ignoredApplications)},{name:"Rejected Application",data:f.map(a=>a.rejectedApplications)},{name:"Sold Application",data:f.map(a=>a.soldApplications)},{name:"Other Applications",data:f.map(a=>a.otherApplications)}],options:{}}]},ie=(a,s)=>{a=a+1,s=+("20"+s);const m=i.startDate.getFullYear(),h=i.startDate.getMonth()+1,x=i.endDate.getFullYear(),j=i.endDate.getMonth()+1;console.log("1  start ---> ",{startYear:m,startMonth:h}),console.log("2 end ---> ",{endYear:x,endMonth:j}),console.log("3 end ---> ",{month:a,year:s});let b="",S="";return a===h&&s===m&&a===j&&s===x?(b=i.startDate,S=i.endDate):a===h&&s===m?(b=i.startDate,S=new Date(s,a,0)):a===j&&s===x?(b=new Date(s,a-1,1),S=i.endDate):(b=new Date(s,a-1,1),S=new Date(s,a,0)),{startDate:b,endDate:S}},re=async a=>{u(!0);const{label:s,seriesName:m}=a,h=s?s==null?void 0:s.split(" ")[0]:null,x=s?s==null?void 0:s.split(" ")[1]:null,j=m?m.split(" ")[0]:null;if(h){const b=x?parseInt(x,10):new Date().getFullYear(),_={Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11}[h],{startDate:oe,endDate:de}=ie(_,b);if(_!==void 0){const U={searchStartDate:D(oe),searchEndDate:D(de),status:j,seriesName:m,search:""};$(U),await z(U)}else console.log("Invalid month label")}},H=async()=>{const a={searchStartDate:D(i.startDate),searchEndDate:D(i.endDate),status:"",search:""};$(a),u(!0),await z(a)};return e.jsx(e.Fragment,{children:d?e.jsx(je,{}):e.jsxs(be,{maxWidth:!1,sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:[e.jsx(Ce,{heading:"Monthly Status Wise Summary",links:[{name:"Dashboard",href:Se.dashboard.root},{name:"Monthly Status Wise Summary"}],sx:{mb:{xs:3,md:3}}}),e.jsx(Q,{filters:i,dateError:n,onFilters:se}),f.length>0?e.jsx(Ae,{title:"",chart:ne,handleChartClick:re}):e.jsx(E,{title:"No Data"}),e.jsx(W,{sx:{mb:2,marginTop:"20px"},children:e.jsx(_e,{})}),A&&e.jsx(W,{sx:{mb:3,marginTop:"20px"},children:e.jsx(Je,{neoAppDataSummaryPercents:A})}),e.jsx(W,{sx:{mb:2,marginTop:"20px"},children:e.jsx(Ze,{})}),e.jsx(Ue,{permission:ee,loading:g,handleRefreshPage:H,totalCount:F,seriesLabel:L,tableDataStatuswise:w})]})})},Qe=Ke;function Vt(){return e.jsxs(e.Fragment,{children:[e.jsx(De,{children:e.jsx("title",{children:"Neo Verify | Monthly Status Wise Summary"})}),e.jsx(Qe,{})]})}export{Vt as default};
