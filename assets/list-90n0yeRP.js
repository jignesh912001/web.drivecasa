import{l as f,r as e,j as t,m as g,T as j,S as P,p as y,H as b}from"./index-1p47eBME.js";import"./_baseToString-HMzoxlMv.js";import"./index-LN_iJjRn.js";import"./custom-breadcrumbs-ejdItUPy.js";import{u as L,a as C,P as O,b as T,c as w,h as H}from"./post-details-home-view-qBxmoCrF.js";import{o as i}from"./orderBy-_vjV_zut.js";import{u as k}from"./use-debounce-WmRUG8IS.js";import"./index-q81m-9gd.js";import"./Autocomplete-hskIkUhs.js";import"./Select-CkmgtMGF.js";import"./Close-hmHQgjPk.js";import"./Chip-T2QdivAc.js";import"./TextField-icBS-xTH.js";import"./format-time-u79TBH4b.js";import"./format-number-7FdLUPS1.js";import"./image-BjcSxs5i.js";import"./text-max-line-T50Cp6Qh.js";import"./Card-ZB6BdyFv.js";import"./Pagination-2hNK1P-V.js";import"./FirstPage-G8qrJftQ.js";import"./rhf-autocomplete-klHnSo8F.js";import"./upload-avatar-xb4DIdVs.js";import"./fade-xeNKeJyr.js";import"./Checkbox-1dGsy0Fk.js";import"./SwitchBase-KtF9q-fS.js";import"./FormControlLabel-MfjBOrpQ.js";import"./Switch---bTYswk.js";import"./editor-9iav-Uut.js";import"./Radio-Pk6pVOfd.js";import"./markdown-9HVpZ-bB.js";import"./empty-content-0I8dksI7.js";import"./DialogActions-6leSuHgX.js";import"./LoadingButton-w_iRbgq6.js";import"./CircularProgress-9T2H3_E5.js";import"./CardHeader-eNxm5LNN.js";import"./AvatarGroup-lHCH54zI.js";import"./CardContent-y-qRRHoX.js";import"./Skeleton-Jih7rqwS.js";import"./ListItem-3gpHZ7x8.js";import"./Fab-TCoMTNRh.js";import"./_baseIteratee-ltGELmiI.js";import"./_baseEach-LYjtgWpk.js";function B(){const s=f(),[r,a]=e.useState("latest"),[p,n]=e.useState(""),m=k(p),{posts:c,postsLoading:l}=L(),{searchResults:d,searchLoading:u}=C(m),h=F({inputData:c,sortBy:r}),x=e.useCallback(o=>{a(o)},[]),S=e.useCallback(o=>{n(o)},[]);return t.jsxs(g,{maxWidth:s.themeStretch?!1:"lg",children:[t.jsx(j,{variant:"h4",sx:{my:{xs:3,md:5}},children:"Blog"}),t.jsxs(P,{spacing:3,justifyContent:"space-between",alignItems:{xs:"flex-end",sm:"center"},direction:{xs:"column",sm:"row"},sx:{mb:{xs:3,md:5}},children:[t.jsx(O,{query:m,results:d,onSearch:S,loading:u,hrefItem:o=>y.post.details(o)}),t.jsx(T,{sort:r,onSort:x,sortOptions:w})]}),t.jsx(H,{posts:h,loading:l})]})}const F=({inputData:s,sortBy:r})=>r==="latest"?i(s,["createdAt"],["desc"]):r==="oldest"?i(s,["createdAt"],["asc"]):r==="popular"?i(s,["totalViews"],["desc"]):s;function Pt(){return t.jsxs(t.Fragment,{children:[t.jsx(b,{children:t.jsx("title",{children:" Post: List"})}),t.jsx(B,{})]})}export{Pt as default};
