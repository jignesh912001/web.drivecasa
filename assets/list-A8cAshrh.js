import{l as w,c_ as L,c as U,r as n,am as A,j as e,S as O,p as G,eL as Q,eM as q,cZ as B,eN as H,eO as v,m as M,T as V,H as W}from"./index-WqsZrxyt.js";import{u as Y,i as Z,j as z,k as J,l as K,m as X,C as $,n as D}from"./product-shop-details-view-4TXM293v.js";import{o as x}from"./orderBy--GJgwWkr.js";import{u as tt}from"./use-debounce-W48mD5iZ.js";import{E as et}from"./empty-content-pcnM5i_i.js";import"./index-sVjMNdP9.js";import"./confirm-dialog-MYlpUTbV.js";import"./custom-breadcrumbs-QEqK1FU9.js";import"./rhf-autocomplete-VkH9U44y.js";import"./upload-avatar-8kKE7NKE.js";import"./format-number-NO6AdYpl.js";import"./fade-wluPIlLJ.js";import"./image-x2LhMh-p.js";import"./TextField-2tCbVTps.js";import"./Select-HPWYeYpR.js";import"./index-q81m-9gd.js";import"./Checkbox-1fwRKLt1.js";import"./SwitchBase-8LveF_ZT.js";import"./Chip-rCFgLS50.js";import"./FormControlLabel-AH9kGeIu.js";import"./Switch-xDKdgofk.js";import"./editor-xCTDHEJy.js";import"./Radio-tesFmk3V.js";import"./Autocomplete-Al4Vq1-g.js";import"./Close-16ONv8pR.js";import"./Card-O5fbCiLF.js";import"./CardHeader-MvVLinMv.js";import"./LoadingButton-CqpqJIWi.js";import"./CircularProgress-XAfFJQY1.js";import"./color-preview-PU_nJQ_B.js";import"./Fab-wAp55JMq.js";import"./Pagination-pOr0AbDd.js";import"./FirstPage-mmzZ9e_V.js";import"./Slider-1mq-nm0U.js";import"./visuallyHidden-DVicuktI.js";import"./Rating-qx5P7zpO.js";import"./format-time-_tAHxme9.js";import"./Tabs-f195X-wR.js";import"./KeyboardArrowRight-gCRRsuQJ.js";import"./sumBy-m08uBVAW.js";import"./_baseIteratee-4CS5-cx1.js";import"./_baseToString-6yvpBFOD.js";import"./_baseSum-gu02AyRp.js";import"./DialogTitle-rV3M0Rcu.js";import"./dialogTitleClasses-xL_tORQ1.js";import"./DialogContent-eTSRr2KN.js";import"./DialogActions-b1hCZYzf.js";import"./Skeleton-XQIQz_gb.js";import"./incrementer-button-7oRw8IYT.js";import"./use-light-box-sxGuWiBe.js";import"./carousel-arrow-index-X0cx9NpQ.js";import"./markdown-4HpyWpLY.js";import"./_baseEach-FXV1jmSh.js";const R={gender:[],colors:[],rating:"",category:"all",priceRange:[0,200]};function rt(){const t=w(),g=L(),o=U(),[c,d]=n.useState("featured"),[u,h]=n.useState(""),l=tt(u),[s,m]=n.useState(R),{products:r,productsLoading:p,productsEmpty:a}=Y(),{searchResults:P,searchLoading:F}=Z(l),j=n.useCallback((i,k)=>{m(E=>({...E,[i]:k}))},[]),C=n.useCallback(()=>{m(R)},[]),S=ot({inputData:r,filters:s,sortBy:c}),f=!A(R,s),y=!S.length&&f,T=n.useCallback(i=>{d(i)},[]),I=n.useCallback(i=>{h(i)},[]),_=e.jsxs(O,{spacing:3,justifyContent:"space-between",alignItems:{xs:"flex-end",sm:"center"},direction:{xs:"column",sm:"row"},children:[e.jsx(z,{query:l,results:P,onSearch:I,loading:F,hrefItem:i=>G.product.details(i)}),e.jsxs(O,{direction:"row",spacing:1,flexShrink:0,children:[e.jsx(J,{open:o.value,onOpen:o.onTrue,onClose:o.onFalse,filters:s,onFilters:j,canReset:f,onResetFilters:C,colorOptions:Q,ratingOptions:q,genderOptions:B,categoryOptions:["all",...H]}),e.jsx(K,{sort:c,onSort:T,sortOptions:v})]})]}),N=e.jsx(X,{filters:s,onFilters:j,canReset:f,onResetFilters:C,results:S.length}),b=e.jsx(et,{filled:!0,title:"No Data",sx:{py:10}});return e.jsxs(M,{maxWidth:t.themeStretch?!1:"lg",sx:{mb:15},children:[e.jsx($,{totalItems:g.totalItems}),e.jsx(V,{variant:"h4",sx:{my:{xs:3,md:5}},children:"Shop"}),e.jsxs(O,{spacing:2.5,sx:{mb:{xs:3,md:5}},children:[_,f&&N]}),(y||a)&&b,e.jsx(D,{products:S,loading:p})]})}function ot({inputData:t,filters:g,sortBy:o}){const{gender:c,category:d,colors:u,priceRange:h,rating:l}=g,s=h[0],m=h[1];return o==="featured"&&(t=x(t,["totalSold"],["desc"])),o==="newest"&&(t=x(t,["createdAt"],["desc"])),o==="priceDesc"&&(t=x(t,["price"],["desc"])),o==="priceAsc"&&(t=x(t,["price"],["asc"])),c.length&&(t=t.filter(r=>c.includes(r.gender))),d!=="all"&&(t=t.filter(r=>r.category===d)),u.length&&(t=t.filter(r=>r.colors.some(p=>u.includes(p)))),(s!==0||m!==200)&&(t=t.filter(r=>r.price>=s&&r.price<=m)),l&&(t=t.filter(r=>{const p=a=>a==="up4Star"?4:a==="up3Star"?3:a==="up2Star"?2:1;return r.totalRatings>p(l)})),t}function oe(){return e.jsxs(e.Fragment,{children:[e.jsx(W,{children:e.jsx("title",{children:" Product: Shop"})}),e.jsx(rt,{})]})}export{oe as default};
