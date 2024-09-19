import{r as d,j as e,M as H,k as n,dU as T,cU as S,l as $,m as q,p as z,i as V,q as J,f as K,S as y,T as Q,H as X}from"./index-1p47eBME.js";import{C as Z}from"./custom-breadcrumbs-ejdItUPy.js";import{D}from"./DatePicker-BzM8vAdR.js";import{f as _,F as ee,I as te}from"./TextField-icBS-xTH.js";import{S as re}from"./Select-CkmgtMGF.js";import{i as ae}from"./format-time-u79TBH4b.js";import{f as j,a as se}from"./Common-6TZMDS_T.js";import{B as c}from"./Box-Cz5Hjvgy.js";import{E as g}from"./empty-content-0I8dksI7.js";import{u as oe}from"./index-LN_iJjRn.js";import{C as ne}from"./Card-ZB6BdyFv.js";import{D as le}from"./DataGrid-bam2EM9g.js";import{G as ie,a as de}from"./GridToolbarColumnsButton-l-1G7gOE.js";import"./index-q81m-9gd.js";import"./DialogActions-6leSuHgX.js";import"./ListItem-3gpHZ7x8.js";import"./Chip-T2QdivAc.js";import"./DialogContent-ZLGfbZeW.js";import"./dialogTitleClasses-0gQIm9Ko.js";import"./Autocomplete-hskIkUhs.js";import"./Close-hmHQgjPk.js";import"./ClickAwayListener-KCtbYRFC.js";import"./Checkbox-1dGsy0Fk.js";import"./SwitchBase-KtF9q-fS.js";import"./Switch---bTYswk.js";import"./Skeleton-Jih7rqwS.js";import"./CircularProgress-9T2H3_E5.js";import"./TablePagination-cYgHTpEI.js";import"./KeyboardArrowRight-I6o-NnvC.js";import"./FirstPage-G8qrJftQ.js";import"./FormControlLabel-MfjBOrpQ.js";function W({filters:t,onFilters:o,dateError:s,GetAllCompanyData:r,selectCompany:i,setSelectCompany:f}){const x=d.useCallback(l=>{f(l.target.value),o("companyId",l.target.value)},[o]),w=d.useCallback(l=>{o("startDate",l)},[o]),p=d.useCallback(l=>{o("endDate",l)},[o]);return e.jsxs(e.Fragment,{children:[e.jsx(D,{label:"Start date",value:t.startDate,onChange:w,slotProps:{textField:{fullWidth:!0}},sx:{maxWidth:{md:300}}}),e.jsx(D,{label:"End date",value:t.endDate,onChange:p,slotProps:{textField:{fullWidth:!0,error:s}},sx:{maxWidth:{md:300},[`& .${_.root}`]:{position:{md:"absolute"},bottom:{md:-40}}}}),e.jsxs(ee,{sx:{maxWidth:{md:240},width:"100%"},children:[e.jsx(te,{id:"demo-simple-select-helper-label",shrink:!!i,children:"Company Name"}),e.jsx(re,{labelId:"demo-simple-select-helper-label",id:"demo-simple-select-helper",value:i,label:"Company Name",onChange:x,children:r==null?void 0:r.map(l=>e.jsx(H,{value:l.companyId,children:l.companyName},l.companyId))})]})]})}W.propTypes={dateError:n.bool,filters:n.object,onFilters:n.func};const ce=async t=>{const o=S.reports.transactionDetailReport,{data:s,error:r}=await T.post(o,t),i=s!=null&&s.data?s==null?void 0:s.data:null;return{result:i||[],isLoading:!r&&!i,isError:r,status:s==null?void 0:s.status,message:s==null?void 0:s.message,vendorsEmpty:!(i!=null&&i.length)}};function R({params:t}){return e.jsx(c,{sx:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},children:t.row.docNumber})}R.propTypes={params:n.shape({row:n.object})};function N({params:t}){return e.jsx(c,{sx:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},children:t.row.name})}N.propTypes={params:n.shape({row:n.object})};function E({params:t}){return e.jsx(c,{sx:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},children:j(t.row.date)})}E.propTypes={params:n.shape({row:n.object})};function I({params:t}){return e.jsx(c,{sx:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},children:t.row.class})}I.propTypes={params:n.shape({row:n.object})};function M({params:t}){return e.jsx(c,{sx:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},children:t.row.account})}M.propTypes={params:n.shape({row:n.object})};function F({params:t}){return e.jsx(c,{sx:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},children:t.row.type})}F.propTypes={params:n.shape({row:n.object})};function O({params:t}){return e.jsx(c,{sx:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},children:`${se(t.row.amount)}`})}O.propTypes={params:n.shape({row:n.object})};function k({params:t}){return e.jsx(c,{sx:{whiteSpace:"wrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},children:t.row.description})}k.propTypes={params:n.shape({row:n.object})};n.shape({row:n.object});const me=async t=>{try{const[o,s]=Array.isArray(t)?t:[t],r=await T.post(o);if(!r.data||!r.data.data)throw new Error("Unexpected response structure");return r.data.data}catch(o){throw console.error("Error in fetcher:",o),o}};function pe(){const t=S.common.companyList,{data:o,error:s}=oe(t,me,{revalidateOnFocus:!1}),r=o||null;return{GetAllCompanyData:r||[],isLoading:!s&&!r,isError:s,EmployeeEmpty:!(r!=null&&r.length)}}function L(){const t=new Date;return new Date(t.setDate(t.getDate()-7))}const v={search:"",startDate:L(),endDate:new Date,companyId:""};function ue(){$();const{GetAllCompanyData:t}=pe(),[o,s]=d.useState(!0),[r,i]=d.useState(v),f=ae(r.startDate,r.endDate),[x,w]=d.useState([]),[p,l]=d.useState(0),[u,C]=d.useState(null);d.useEffect(()=>{o&&A()},[o,u]),d.useEffect(()=>{var a;t.length>0&&u===null&&C((a=t[0])==null?void 0:a.companyId)},[t]);const A=async()=>{const a={searchStartDate:j(r.startDate),searchEndDate:j(r.endDate),search:r.search,companyId:u||r.companyId},{result:m,isLoading:b}=await ce(a),h=(m==null?void 0:m.map((U,Y)=>({...U,id:Y})))||[];l(h==null?void 0:h.length),w(h),s(b)},G=d.useCallback((a,m)=>{i(b=>({...b,[a]:m})),s(!0)},[]),P=()=>{const a={...v,startDate:L(),endDate:new Date};i(a),s(!0)},B=[{field:"type",headerName:"Transaction Type",minWidth:150,editable:!1,hideable:!1,filterable:!1,renderCell:a=>e.jsx(F,{params:a})},{field:"date",headerName:"Date",minWidth:120,editable:!1,hideable:!1,filterable:!1,renderCell:a=>e.jsx(E,{params:a})},{field:"docNumber",headerName:"Num",flex:1,minWidth:250,filterable:!1,disableColumnMenu:!0,renderCell:a=>e.jsx(R,{params:a})},{field:"name",headerName:"Name",editable:!1,flex:1,minWidth:250,filterable:!1,disableColumnMenu:!0,renderCell:a=>e.jsx(N,{params:a})},{field:"description",headerName:"Memo/Description",editable:!1,minWidth:600,filterable:!1,disableColumnMenu:!0,renderCell:a=>e.jsx(k,{params:a})},{field:"account",headerName:"Account",editable:!1,minWidth:250,filterable:!1,disableColumnMenu:!0,renderCell:a=>e.jsx(M,{params:a})},{field:"class",headerName:"Class",editable:!1,minWidth:180,filterable:!1,disableColumnMenu:!0,renderCell:a=>e.jsx(I,{params:a})},{field:"amount",headerName:"Amount",editable:!1,minWidth:180,filterable:!1,disableColumnMenu:!0,renderCell:a=>e.jsx(O,{params:a})}];return e.jsx(e.Fragment,{children:e.jsxs(q,{maxWidth:!1,sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:[e.jsx(Z,{heading:"Transaction Details by Account",links:[{name:"Dashboard",href:z.dashboard.root},{name:"Transaction Detail Report"}],action:e.jsx(V,{display:"flex",gap:2,children:e.jsx(J,{variant:"outlined",startIcon:e.jsx(K,{icon:"material-symbols:refresh"}),onClick:P,children:"Refresh"})}),sx:{mb:{xs:3,md:5}}}),e.jsxs(ne,{sx:{height:{xs:800,md:2},flexGrow:{md:1},display:{md:"flex"},flexDirection:{md:"column"}},children:[e.jsx(le,{rowCount:p,rows:x,columns:B,loading:o,paginationMode:"server",pageSizeOptions:[],hideFooterPagination:!0,disableColumnMenu:!0,slots:{toolbar:()=>e.jsx(e.Fragment,{children:e.jsxs(ie,{children:[e.jsx(W,{filters:r,dateError:f,onFilters:G,setSelectCompany:C,selectCompany:u,GetAllCompanyData:t}),e.jsx(y,{spacing:1,flexGrow:1,direction:"row",alignItems:"center",justifyContent:"flex-end",children:e.jsx(de,{})})]})}),noRowsOverlay:()=>e.jsx(g,{title:"No Data"}),noResultsOverlay:()=>e.jsx(g,{title:"No results found"})}}),e.jsx(y,{sx:{p:2,display:"flex",justifyContent:"flex-end",flexDirection:"row"},children:e.jsxs(Q,{variant:"body2",sx:{pr:2},children:["1–0 of ",p]})})]})]})})}function qe(){return e.jsxs(e.Fragment,{children:[e.jsx(X,{children:e.jsx("title",{children:"  Transaction Details Report "})}),e.jsx(ue,{})]})}export{qe as default};
