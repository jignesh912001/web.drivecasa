import{l as w,d0 as U,c as A,r as n,ak as G,j as r,S as O,p as L,f0 as Q,f1 as q,c$ as B,f2 as H,f3 as v,m as V,T as W,H as Y}from"./index-w2TjI0MF.js";import{u as $,i as z,j as J,k as K,l as M,m as X,C as Z,n as D}from"./product-shop-details-view-JokjJhTq.js";import{o as x}from"./orderBy-PrYStSZG.js";import{u as tt}from"./use-debounce-WnvVlh9g.js";import{E as rt}from"./empty-content-euVssf39.js";import"./confirm-dialog-Aypc3550.js";import"./custom-breadcrumbs-RjSW2biQ.js";import"./rhf-autocomplete-U6p_PEPK.js";import"./upload-avatar-miqQoreL.js";import"./format-number-EJUytZhm.js";import"./fade-MUwQyQUN.js";import"./image-8XOWnu1q.js";import"./Button-craGvtks.js";import"./TextField-Rnx-roig.js";import"./isMuiElement-c8Cd3wTs.js";import"./Select-fj7_ZCHL.js";import"./index-q81m-9gd.js";import"./Checkbox-MPmUmIhR.js";import"./SwitchBase-0oakK23s.js";import"./Chip-xwffwAcK.js";import"./FormControlLabel-i471xspq.js";import"./Switch-uNCmthE_.js";import"./editor-UzmsDwDj.js";import"./Radio-G0NR0HzA.js";import"./Autocomplete-zVr0giqp.js";import"./Close-f2MhZoYf.js";import"./Grid2-zCgqDIFm.js";import"./Card-huoyhVY-.js";import"./CardHeader-1ocrqUuB.js";import"./LoadingButton-pMu7UJc1.js";import"./CircularProgress-DldaBh_H.js";import"./color-preview-5nMjUO68.js";import"./Fab-nuIaAWs7.js";import"./Pagination-iX5A-QW1.js";import"./FirstPage-R9DouRzM.js";import"./Slider-of-Ki4xN.js";import"./visuallyHidden-DVicuktI.js";import"./Rating-ZoqVZfxV.js";import"./format-time-gLo4N_aV.js";import"./Tabs-mlTHhLz-.js";import"./KeyboardArrowRight-IzA2QHP7.js";import"./sumBy-ZziFuIuC.js";import"./_baseIteratee-YwCNjm6p.js";import"./_baseToString-XTbdvgXl.js";import"./_baseSum-gu02AyRp.js";import"./DialogTitle-RlTLSsU3.js";import"./dialogTitleClasses-DEvrnnr4.js";import"./DialogContent-ITde-Yrn.js";import"./DialogActions-UxlkhUlJ.js";import"./Skeleton-t3WH1W5x.js";import"./incrementer-button-BSPJVXzS.js";import"./use-light-box-YSHcs_4R.js";import"./carousel-arrow-index-FQbE_0V8.js";import"./markdown-9Td74xga.js";import"./_baseEach-8T7t06e3.js";const R={gender:[],colors:[],rating:"",category:"all",priceRange:[0,200]};function et(){const t=w(),g=U(),o=A(),[c,d]=n.useState("featured"),[u,f]=n.useState(""),l=tt(u),[s,m]=n.useState(R),{products:e,productsLoading:p,productsEmpty:a}=$(),{searchResults:P,searchLoading:F}=z(l),j=n.useCallback((i,E)=>{m(N=>({...N,[i]:E}))},[]),C=n.useCallback(()=>{m(R)},[]),S=ot({inputData:e,filters:s,sortBy:c}),h=!G(R,s),y=!S.length&&h,T=n.useCallback(i=>{d(i)},[]),I=n.useCallback(i=>{f(i)},[]),k=r.jsxs(O,{spacing:3,justifyContent:"space-between",alignItems:{xs:"flex-end",sm:"center"},direction:{xs:"column",sm:"row"},children:[r.jsx(J,{query:l,results:P,onSearch:I,loading:F,hrefItem:i=>L.product.details(i)}),r.jsxs(O,{direction:"row",spacing:1,flexShrink:0,children:[r.jsx(K,{open:o.value,onOpen:o.onTrue,onClose:o.onFalse,filters:s,onFilters:j,canReset:h,onResetFilters:C,colorOptions:Q,ratingOptions:q,genderOptions:B,categoryOptions:["all",...H]}),r.jsx(M,{sort:c,onSort:T,sortOptions:v})]})]}),_=r.jsx(X,{filters:s,onFilters:j,canReset:h,onResetFilters:C,results:S.length}),b=r.jsx(rt,{filled:!0,title:"No Data",sx:{py:10}});return r.jsxs(V,{maxWidth:t.themeStretch?!1:"lg",sx:{mb:15},children:[r.jsx(Z,{totalItems:g.totalItems}),r.jsx(W,{variant:"h4",sx:{my:{xs:3,md:5}},children:"Shop"}),r.jsxs(O,{spacing:2.5,sx:{mb:{xs:3,md:5}},children:[k,h&&_]}),(y||a)&&b,r.jsx(D,{products:S,loading:p})]})}function ot({inputData:t,filters:g,sortBy:o}){const{gender:c,category:d,colors:u,priceRange:f,rating:l}=g,s=f[0],m=f[1];return o==="featured"&&(t=x(t,["totalSold"],["desc"])),o==="newest"&&(t=x(t,["createdAt"],["desc"])),o==="priceDesc"&&(t=x(t,["price"],["desc"])),o==="priceAsc"&&(t=x(t,["price"],["asc"])),c.length&&(t=t.filter(e=>c.includes(e.gender))),d!=="all"&&(t=t.filter(e=>e.category===d)),u.length&&(t=t.filter(e=>e.colors.some(p=>u.includes(p)))),(s!==0||m!==200)&&(t=t.filter(e=>e.price>=s&&e.price<=m)),l&&(t=t.filter(e=>{const p=a=>a==="up4Star"?4:a==="up3Star"?3:a==="up2Star"?2:1;return e.totalRatings>p(l)})),t}function ir(){return r.jsxs(r.Fragment,{children:[r.jsx(Y,{children:r.jsx("title",{children:" Product: Shop"})}),r.jsx(et,{})]})}export{ir as default};
