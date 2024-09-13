import{k as o,r as a,j as l,dU as We,cU as ke,l as ve,m as ge,p as Le,i as Pe,q as Fe,f as Ae,S as p,T as Oe,H as Ie}from"./index-d_hKz2zC.js";import{C as Ee}from"./custom-breadcrumbs-m3uTbUbB.js";import{D as m}from"./DatePicker-1o6ZobtL.js";import{f as Me}from"./TextField-e_4V3qEH.js";import{a as Ge,i as Ve}from"./format-time-z29mBrbB.js";import{a as d,g as S,f as j}from"./Common-Lq1jqW5E.js";import{E as C}from"./empty-content-rjL4BROV.js";import{B as $e}from"./Box-YEoiatRk.js";import{S as n}from"./Stack-Ulxxs077.js";import{C as Ue}from"./Card-L-UFOQRR.js";import{D as Be}from"./DataGrid-_SaDrd4X.js";import{G as Ye,a as He}from"./GridToolbarColumnsButton-3Qx5kILf.js";import"./index-q81m-9gd.js";import"./DialogActions-61XMFn37.js";import"./ListItem-GcHU8I0M.js";import"./Chip-zv-zFcnm.js";import"./DialogContent-djGsL5zT.js";import"./dialogTitleClasses-eDgHBsb0.js";import"./Select-2T8XbQkD.js";import"./Autocomplete-kTg74uCO.js";import"./Close-xsTIKsBy.js";import"./ClickAwayListener-k95km_zw.js";import"./Checkbox-18nfoWP1.js";import"./SwitchBase-dTKHZsQn.js";import"./Switch-JVioLfQ0.js";import"./Skeleton-UmRw-0hV.js";import"./CircularProgress-HMYL4JU-.js";import"./TablePagination-D8rHsU24.js";import"./KeyboardArrowRight-UESfApTO.js";import"./FirstPage-ebjW-duc.js";import"./FormControlLabel-D_dWO09R.js";function y({filters:e,onFilters:i,dateError:t}){const u=a.useCallback(c=>{i("startDate",c)},[i]),s=a.useCallback(c=>{i("endDate",c)},[i]);return l.jsxs(l.Fragment,{children:[l.jsx(m,{label:"Start date",value:e.startDate,onChange:u,slotProps:{textField:{fullWidth:!0}},sx:{maxWidth:{md:200}}}),l.jsx(m,{label:"End date",value:e.endDate,onChange:s,slotProps:{textField:{fullWidth:!0,error:t}},sx:{maxWidth:{md:200},[`& .${Me.root}`]:{position:{md:"absolute"},bottom:{md:-40}}}})]})}y.propTypes={dateError:o.bool,filters:o.object,onFilters:o.func};const ze=async e=>{const i=ke.omnique.omniqueTicketList,{data:t,error:u}=await We.post(i,e),s=t!=null&&t.data?t==null?void 0:t.data:null;return{result:s||[],isLoading:!u&&!s,isError:u,status:t==null?void 0:t.status,message:t==null?void 0:t.message,vendorsEmpty:!(s!=null&&s.length)}};function T({params:e}){var i,t;return l.jsx($e,{sx:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},children:((i=e.row)==null?void 0:i.customerFirstName)+" "+((t=e.row)==null?void 0:t.customerLastName)})}T.propTypes={params:o.shape({row:o.object})};function w({params:e}){var i;return l.jsx(n,{sx:{py:1.5},children:Ge((i=e==null?void 0:e.row)==null?void 0:i.estimateDateUtc)})}w.propTypes={params:o.shape({row:o.object})};function N({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.ticketCostOfGoodsSubtotal;return i===0?null:l.jsx(n,{sx:{py:1.5},children:`${d(i)}`})}N.propTypes={params:o.shape({row:o.object})};function D({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.ticketDiscountAmount;return i===0?null:l.jsx(n,{sx:{py:1.5},children:`${d(i)}`})}D.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function q({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.ticketDiscount;return i===0?null:l.jsx(n,{sx:{py:1.5},children:`${d(i)}`})}q.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function W({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.ticketDiscountPercent;return i===0?null:l.jsx(n,{sx:{py:1.5},children:i})}W.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function k({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.ticketPartDiscountSubtotal;return i===0?null:l.jsx(n,{sx:{py:1.5},children:`${d(i)}`})}k.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function v({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.ticketLaborDiscountSubtotal;return i===0?null:l.jsx(n,{sx:{py:1.5},children:`${d(i)}`})}v.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function g({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.mileageln;return i===0?null:l.jsx(n,{sx:{py:1.5},children:i})}g.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function L({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.mileageOut;return i===0?null:l.jsx(n,{sx:{py:1.5},children:i})}L.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function P({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.partSubtotal;return i===0?null:l.jsx(n,{sx:{py:1.5},children:`${d(i)}`})}P.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function F({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.laborSubtotal;return i===0?null:l.jsx(n,{sx:{py:1.5},children:`${d(i)}`})}F.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function A({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.partAndLaborSubtotal;return i===0?null:l.jsx(n,{sx:{py:1.5},children:`${d(i)}`})}A.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function O({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.shopPartTax;return i===0?null:l.jsx(n,{sx:{py:1.5},children:d(i)})}O.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function I({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.shopLaborTax;return i===0?null:l.jsx(n,{sx:{py:1.5},children:d(i)})}I.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function E({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.maxShopFeelnDollars;return i===0?null:l.jsx(n,{sx:{py:1.5},children:d(i)})}E.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function M({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.partDiscountSubtotal;return i===0?null:l.jsx(n,{sx:{py:1.5},children:d(i)})}M.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function G({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.laborDiscountSubtotal;return i===0?null:l.jsx(n,{sx:{py:1.5},children:d(i)})}G.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function V({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.discountedPartSubtotal;return i===0?null:l.jsx(n,{sx:{py:1.5},children:d(i)})}V.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function $({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.discountedLaborSubtotal;return i===0?null:l.jsx(n,{sx:{py:1.5},children:d(i)})}$.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function U({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.discountedPartAndLaborSubtotal;return i===0?null:l.jsx(n,{sx:{py:1.5},children:d(i)})}U.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function B({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.discountedPartSubtotal2;return i===0?null:l.jsx(n,{sx:{py:1.5},children:d(i)})}B.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function Y({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.discountedLaborSubtotal2;return i===0?null:l.jsx(n,{sx:{py:1.5},children:d(i)})}Y.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function H({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.discountedPartAndLaborSubtotal2;return i===0?null:l.jsx(n,{sx:{py:1.5},children:d(i)})}H.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function z({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.suggestedShopFee;return i===0?null:l.jsx(n,{sx:{py:1.5},children:d(i)})}z.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function J({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.shopFee;return i===0?null:l.jsx(n,{sx:{py:1.5},children:d(i)})}J.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function K({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.suggestedDisposalFee;return i===0?null:l.jsx(n,{sx:{py:1.5},children:d(i)})}K.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function Q({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.disposalFee;return i===0?null:l.jsx(n,{sx:{py:1.5},children:d(i)})}Q.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function X({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.freight;return i===0?null:l.jsx(n,{sx:{py:1.5},children:d(i)})}X.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function Z({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.towing;return i===0?null:l.jsx(n,{sx:{py:1.5},children:d(i)})}Z.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function _({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.sublet;return i===0?null:l.jsx(n,{sx:{py:1.5},children:d(i)})}_.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function ee({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.deposit;return i===0?null:l.jsx(n,{sx:{py:1.5},children:d(i)})}ee.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function te({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.tax;return i===0?null:l.jsx(n,{sx:{py:1.5},children:d(i)})}te.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function ie({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.grossSales;return i===0?null:l.jsx(n,{sx:{py:1.5},children:d(i)})}ie.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function le({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.netSales;return i===0?null:l.jsx(n,{sx:{py:1.5},children:d(i)})}le.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function re({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.total;return i===0?null:l.jsx(n,{sx:{py:1.5},children:d(i)})}re.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function oe({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.serviceFee;return i===0?null:l.jsx(n,{sx:{py:1.5},children:d(i)})}oe.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function ne({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.advertisingFee;return i===0?null:l.jsx(n,{sx:{py:1.5},children:d(i)})}ne.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function de({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.otherCharges;return i===0?null:l.jsx(n,{sx:{py:1.5},children:d(i)})}de.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function se({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.giftCertificate;return i===0?null:l.jsx(n,{sx:{py:1.5},children:i})}se.propTypes={params:o.shape({row:o.object})};function ae({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.adPrepFee;return i===0?null:l.jsx(n,{sx:{py:1.5},children:i})}ae.propTypes={params:o.shape({row:o.object})};function ue({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.advertisingFee;return i===0?null:l.jsx(n,{sx:{py:1.5},children:d(i)})}ue.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function ce({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.shopRhwTax;return i===0?null:l.jsx(n,{sx:{py:1.5},children:d(i)})}ce.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function fe({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.tireFee;return i===0?null:l.jsx(n,{sx:{py:1.5},children:d(i)})}fe.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function he({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.partCouponSubtotal;return i===0?null:l.jsx(n,{sx:{py:1.5},children:d(i)})}he.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function xe({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.laborCouponSubtotal;return i===0?null:l.jsx(n,{sx:{py:1.5},children:d(i)})}xe.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function be({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.ticketCouponPartSubtotal2;return i===0?null:l.jsx(n,{sx:{py:1.5},children:d(i)})}be.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function pe({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.ticketCouponLaborSubtotal2;return i===0?null:l.jsx(n,{sx:{py:1.5},children:d(i)})}pe.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function me({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.ticketCouponSubtotal;return i===0?null:l.jsx(n,{sx:{py:1.5},children:d(i)})}me.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function je({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.ticketCouponLaborAmount;return i===0?null:l.jsx(n,{sx:{py:1.5},children:d(i)})}je.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};function Ce({params:e}){var t;const i=(t=e==null?void 0:e.row)==null?void 0:t.ticketCouponPartAmount;return i===0?null:l.jsx(n,{sx:{py:1.5},children:d(i)})}Ce.propTypes={params:o.shape({row:o.object.isRequired}).isRequired};const R={search:"",startDate:S(),endDate:new Date},Je=()=>{ve();const[e,i]=a.useState(!0),[t,u]=a.useState(R),s=Ve(t.startDate,t.endDate),[c,Re]=a.useState([]),[b,Se]=a.useState(0);a.useEffect(()=>{e&&ye()},[e]);const ye=async()=>{const r={searchStartDate:j(t.startDate),searchEndDate:j(t.endDate),search:t.search},{result:f,isLoading:x}=await ze(r),h=(f==null?void 0:f.map((De,qe)=>({...De,id:qe})))||[];Se(h==null?void 0:h.length),Re(h),i(x)},Te=a.useCallback((r,f)=>{u(x=>({...x,[r]:f})),i(!0)},[]),we=()=>{const r={...R,startDate:S(),endDate:new Date};u(r),i(!0)},Ne=[{field:"customerFirstName",headerName:"Customer Name",flex:1,minWidth:200,editable:!1,hideable:!1,filterable:!1,renderCell:r=>l.jsx(T,{params:r})},{field:"companyID",headerName:"Company ID",flex:1,minWidth:150,editable:!1},{field:"shopNumber",headerName:"Shop Number",flex:1,minWidth:150,editable:!1},{field:"number",headerName:"Number",flex:1,minWidth:150,editable:!1},{field:"estimateDateUtc",headerName:"Estimate Date",flex:1,minWidth:200,editable:!1,renderCell:r=>l.jsx(w,{params:r})},{field:"marketSourceName",headerName:"Market Source",flex:1,minWidth:200,editable:!1},{field:"vehicleVIN",headerName:"Vehicle VIN",flex:1,minWidth:200,editable:!1},{field:"vehicleOtherIDNumber",headerName:"VehicleOtherID Number",flex:1,minWidth:200,editable:!1},{field:"customerPurchaseOrderNumber",headerName:"Purchase Order Number",flex:1,minWidth:200,editable:!1},{field:"warrantyCodeName",headerName:"Warranty Code Name",flex:1,minWidth:200,editable:!1},{field:"ticketDiscountAmount",headerName:"Ticket Discount Amount",flex:1,minWidth:200,editable:!1,renderCell:r=>l.jsx(D,{params:r})},{field:"ticketDiscountPercent",headerName:"Ticket Discount Percent",flex:1,minWidth:200,editable:!1,renderCell:r=>l.jsx(W,{params:r})},{field:"ticketDiscount",headerName:"Ticket Discount",flex:1,minWidth:200,editable:!1,renderCell:r=>l.jsx(q,{params:r})},{field:"ticketPartDiscountSubtotal",headerName:"Ticket Part Discount Subtotal",flex:1,minWidth:250,editable:!1,renderCell:r=>l.jsx(k,{params:r})},{field:"ticketLaborDiscountSubtotal",headerName:"Ticket Labor Discount Subtotal",flex:1,minWidth:250,editable:!1,renderCell:r=>l.jsx(v,{params:r})},{field:"ticketCostOfGoodsSubtotal",headerName:"Ticket Cost of Goods Subtotal",flex:1,minWidth:250,editable:!1,renderCell:r=>l.jsx(N,{params:r})},{field:"taxExemptNumber",headerName:"Tax Exempt Number",flex:1,minWidth:200,editable:!1},{field:"mileageln",headerName:"Mileage In",flex:1,minWidth:150,editable:!1,renderCell:r=>l.jsx(g,{params:r})},{field:"mileageOut",headerName:"Mileage Out",flex:1,minWidth:150,editable:!1,renderCell:r=>l.jsx(L,{params:r})},{field:"partSubtotal",headerName:"Part Subtotal",flex:1,minWidth:150,editable:!1,renderCell:r=>l.jsx(P,{params:r})},{field:"laborSubtotal",headerName:"Labor Subtotal",flex:1,minWidth:150,editable:!1,renderCell:r=>l.jsx(F,{params:r})},{field:"partAndLaborSubtotal",headerName:"Part and Labor Subtotal",flex:1,minWidth:200,editable:!1,renderCell:r=>l.jsx(A,{params:r})},{field:"shopPartTax",headerName:"Shop Part Tax",flex:1,minWidth:150,editable:!1,renderCell:r=>l.jsx(O,{params:r})},{field:"shopLaborTax",headerName:"Shop Labor Tax",flex:1,minWidth:150,editable:!1,renderCell:r=>l.jsx(I,{params:r})},{field:"maxShopFeelnDollars",headerName:"Max Shop Fee in Dollars",flex:1,minWidth:250,editable:!1,renderCell:r=>l.jsx(E,{params:r})},{field:"partDiscountSubtotal",headerName:"Part Discount Subtotal",flex:1,minWidth:200,editable:!1,renderCell:r=>l.jsx(M,{params:r})},{field:"laborDiscountSubtotal",headerName:"Labor Discount Subtotal",flex:1,minWidth:200,editable:!1,renderCell:r=>l.jsx(G,{params:r})},{field:"discountedPartSubtotal",headerName:"Discounted Part Subtotal",flex:1,minWidth:250,editable:!1,renderCell:r=>l.jsx(V,{params:r})},{field:"discountedLaborSubtotal",headerName:"Discounted Labor Subtotal",flex:1,minWidth:250,editable:!1,renderCell:r=>l.jsx($,{params:r})},{field:"discountedPartAndLaborSubtotal",headerName:"Discounted Part and Labor Subtotal",flex:1,minWidth:300,editable:!1,renderCell:r=>l.jsx(U,{params:r})},{field:"discountedPartSubtotal2",headerName:"Discounted Part Subtotal 2",flex:1,minWidth:250,editable:!1,renderCell:r=>l.jsx(B,{params:r})},{field:"discountedLaborSubtotal2",headerName:"Discounted Labor Subtotal 2",flex:1,minWidth:250,editable:!1,renderCell:r=>l.jsx(Y,{params:r})},{field:"discountedPartAndLaborSubtotal2",headerName:"Discounted Part and Labor Subtotal 2",flex:1,minWidth:300,editable:!1,renderCell:r=>l.jsx(H,{params:r})},{field:"suggestedShopFee",headerName:"Suggested Shop Fee",flex:1,minWidth:200,editable:!1,renderCell:r=>l.jsx(z,{params:r})},{field:"shopFee",headerName:"Shop Fee",flex:1,minWidth:150,editable:!1,renderCell:r=>l.jsx(J,{params:r})},{field:"suggestedDisposalFee",headerName:"Suggested Disposal Fee",flex:1,minWidth:200,editable:!1,renderCell:r=>l.jsx(K,{params:r})},{field:"disposalFee",headerName:"Disposal Fee",flex:1,minWidth:150,editable:!1,renderCell:r=>l.jsx(Q,{params:r})},{field:"freight",headerName:"Freight",flex:1,minWidth:150,editable:!1,renderCell:r=>l.jsx(X,{params:r})},{field:"towing",headerName:"Towing",flex:1,minWidth:150,editable:!1,renderCell:r=>l.jsx(Z,{params:r})},{field:"sublet",headerName:"Sublet",flex:1,minWidth:150,editable:!1,renderCell:r=>l.jsx(_,{params:r})},{field:"deposit",headerName:"Deposit",flex:1,minWidth:150,editable:!1,renderCell:r=>l.jsx(ee,{params:r})},{field:"giftCertificate",headerName:"Gift Certificate",flex:1,minWidth:200,editable:!1,renderCell:r=>l.jsx(se,{params:r})},{field:"tax",headerName:"Tax",flex:1,minWidth:150,editable:!1,renderCell:r=>l.jsx(te,{params:r})},{field:"grossSales",headerName:"Gross Sales",flex:1,minWidth:150,editable:!1,renderCell:r=>l.jsx(ie,{params:r})},{field:"netSales",headerName:"Net Sales",flex:1,minWidth:150,editable:!1,renderCell:r=>l.jsx(le,{params:r})},{field:"total",headerName:"Total",flex:1,minWidth:150,editable:!1,renderCell:r=>l.jsx(re,{params:r})},{field:"serviceFee",headerName:"Service Fee",flex:1,minWidth:150,editable:!1,renderCell:r=>l.jsx(oe,{params:r})},{field:"advertisingFee",headerName:"Advertising Fee",flex:1,minWidth:200,editable:!1,renderCell:r=>l.jsx(ne,{params:r})},{field:"rowVersion",headerName:"Row Version",flex:1,minWidth:200,editable:!1},{field:"defaultEmployeeD",headerName:"Default Employee ID",flex:1,minWidth:200,editable:!1},{field:"lastModifiedDateUtc",headerName:"Last Modified Date",flex:1,minWidth:200,editable:!1},{field:"isShopFeeTaxed",headerName:"Is Shop Fee Taxed",flex:1,minWidth:200,editable:!1},{field:"ticketType",headerName:"Ticket Type",flex:1,minWidth:150,editable:!1},{field:"ticketLinkCompanyld",headerName:"Ticket Link Company ID",flex:1,minWidth:250,editable:!1},{field:"ticketLinkShopNumber",headerName:"Ticket Link Shop Number",flex:1,minWidth:250,editable:!1},{field:"ticketLinkTicketNumber",headerName:"Ticket Link Ticket Number",flex:1,minWidth:250,editable:!1},{field:"serviceAdvisorID",headerName:"Service Advisor ID",flex:1,minWidth:200,editable:!1},{field:"mileageUnitTypelD",headerName:"Mileage Unit Type ID",flex:1,minWidth:200,editable:!1},{field:"otherCharges",headerName:"Other Charges",flex:1,minWidth:200,editable:!1,renderCell:r=>l.jsx(de,{params:r})},{field:"estimatedCompletionDateTime",headerName:"Estimated Completion Date",flex:1,minWidth:250,editable:!1},{field:"repairOrderStatusiD",headerName:"Repair Order Status ID",flex:1,minWidth:250,editable:!1},{field:"repairOrderLocationID",headerName:"Repair Order Location ID",flex:1,minWidth:250,editable:!1},{field:"adPrepFee",headerName:"Ad Prep Fee",flex:1,minWidth:150,editable:!1,renderCell:r=>l.jsx(ae,{params:r})},{field:"defaultTicketLineltemTypelD",headerName:"Default Ticket Line Item Type ID",flex:1,minWidth:300,editable:!1},{field:"totalNumberOfTaxExemptItems",headerName:"Total Tax Exempt Items",flex:1,minWidth:250,editable:!1},{field:"originalInvoiceNumber",headerName:"Original Invoice Number",flex:1,minWidth:250,editable:!1},{field:"ticketStatus",headerName:"Ticket Status",flex:1,minWidth:200,editable:!1},{field:"vehicleMake",headerName:"Vehicle Make",flex:1,minWidth:200,editable:!1},{field:"vehicleModel",headerName:"Vehicle Model",flex:1,minWidth:200,editable:!1},{field:"vehicleYear",headerName:"Vehicle Year",flex:1,minWidth:150,editable:!1},{field:"vehicleOdometerReading",headerName:"Vehicle Odometer",flex:1,minWidth:200,editable:!1},{field:"subMarketSourceName",headerName:"SubMarketSource Name",flex:1,minWidth:200,editable:!1},{field:"roaComment",headerName:"Roa Comment",flex:1,minWidth:200,editable:!1},{field:"pricingLevelOverride",headerName:"Pricing Level Override",flex:1,minWidth:200,editable:!1},{field:"customerBusinessName",headerName:"Customer Business Name",flex:1,minWidth:200,editable:!1},{field:"rhwAmount",headerName:"Rhw Amount",flex:1,minWidth:200,editable:!1,renderCell:r=>l.jsx(ue,{params:r})},{field:"shopRhwTax",headerName:"ShopRhwTax",flex:1,minWidth:200,editable:!1,renderCell:r=>l.jsx(ce,{params:r})},{field:"tireFee",headerName:"Tire Fee",flex:1,minWidth:200,editable:!1,renderCell:r=>l.jsx(fe,{params:r})},{field:"partCouponSubtotal",headerName:"Part Coupon Subtotal",flex:1,minWidth:200,editable:!1,renderCell:r=>l.jsx(he,{params:r})},{field:"laborCouponSubtotal",headerName:"Labor Coupon Subtotal",flex:1,minWidth:200,editable:!1,renderCell:r=>l.jsx(xe,{params:r})},{field:"ticketCouponPartSubtotal2",headerName:"Ticket Coupon Part Subtotal 2",flex:1,minWidth:200,editable:!1,renderCell:r=>l.jsx(be,{params:r})},{field:"ticketCouponLaborSubtotal2",headerName:"Ticket Coupon Labor Subtotal 2",flex:1,minWidth:200,editable:!1,renderCell:r=>l.jsx(pe,{params:r})},{field:"ticketCouponSubtotal",headerName:"Ticket Coupon Subtotal",flex:1,minWidth:200,editable:!1,renderCell:r=>l.jsx(me,{params:r})},{field:"ticketCouponLaborAmount",headerName:"Ticket Coupon Labor Amount",flex:1,minWidth:200,editable:!1,renderCell:r=>l.jsx(je,{params:r})},{field:"ticketCouponPartAmount",headerName:"Ticket Coupon Part Amount",flex:1,minWidth:200,editable:!1,renderCell:r=>l.jsx(Ce,{params:r})}];return l.jsx(l.Fragment,{children:l.jsxs(ge,{maxWidth:!1,sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:[l.jsx(Ee,{heading:"Ticket Data Report",links:[{name:"Dashboard",href:Le.dashboard.root},{name:"Ticket Data Report"}],action:l.jsx(Pe,{display:"flex",gap:2,children:l.jsx(Fe,{variant:"outlined",startIcon:l.jsx(Ae,{icon:"material-symbols:refresh"}),onClick:we,children:"Refresh"})}),sx:{mb:{xs:3,md:3}}}),l.jsxs(Ue,{sx:{height:{xs:800,md:2},flexGrow:{md:1},display:{md:"flex"},flexDirection:{md:"column"}},children:[l.jsx(Be,{rowCount:b,rows:c,columns:Ne,loading:e,pageSizeOptions:[],hideFooterPagination:!0,disableColumnMenu:!0,slots:{toolbar:()=>l.jsx(l.Fragment,{children:l.jsxs(Ye,{children:[l.jsx(y,{filters:t,dateError:s,onFilters:Te}),l.jsx(p,{spacing:1,flexGrow:1,direction:"row",alignItems:"center",justifyContent:"flex-end",children:l.jsx(He,{})})]})}),noRowsOverlay:()=>l.jsx(C,{title:"No Data"}),noResultsOverlay:()=>l.jsx(C,{title:"No results found"})}}),l.jsx(p,{sx:{p:2,display:"flex",justifyContent:"flex-end",flexDirection:"row"},children:l.jsxs(Oe,{variant:"body2",sx:{pr:2},children:["1–0 of ",b]})})]})]})})},Ke=Je;function qt(){return l.jsxs(l.Fragment,{children:[l.jsx(Ie,{children:l.jsx("title",{children:"Omnique | Ticket Data"})}),l.jsx(Ke,{})]})}export{qt as default};
