import{l as f,r as e,j as t,m as g,T as j,S as P,p as y,H as b}from"./index-SRBoHPGP.js";import"./_baseToString-LPVRuQgA.js";import"./index-daZlzyRR.js";import"./custom-breadcrumbs-2Vt61DQy.js";import{u as L,a as C,P as O,b as T,c as w,h as H}from"./post-details-home-view-03gMtpgB.js";import{o as i}from"./orderBy-2BB9PfF7.js";import{u as k}from"./use-debounce-bOiAqS5j.js";import"./index-q81m-9gd.js";import"./Autocomplete-uiGe8Sdd.js";import"./Select-1AyAhxkn.js";import"./Close-nuwh-Gc5.js";import"./Chip-1zqzKdIi.js";import"./TextField-ZdzIPEIw.js";import"./format-time-Dhw0Bl7u.js";import"./format-number-Shtyhez5.js";import"./image-i2W_Zcy2.js";import"./text-max-line-aUcIX53U.js";import"./Card-rfFRnjEZ.js";import"./Pagination-rzXLLdrN.js";import"./FirstPage-mpplmv8r.js";import"./rhf-autocomplete-k4aAMY4a.js";import"./upload-avatar-Pxo3KZfm.js";import"./fade-gQOHxT-n.js";import"./Checkbox-PTTPhCTK.js";import"./SwitchBase-ELVdoIZI.js";import"./FormControlLabel-B9iY2wab.js";import"./Switch-QTFGUNLA.js";import"./editor-bLKbFjfu.js";import"./Radio-Yhn9CWE3.js";import"./markdown-iXqTlLDI.js";import"./empty-content-pQ9Ptn5I.js";import"./DialogActions-a6xymSGg.js";import"./LoadingButton-u5k4bW_n.js";import"./CircularProgress-vqzjPLr6.js";import"./CardHeader-7To0ZcbF.js";import"./AvatarGroup-9tAoxvT8.js";import"./CardContent-pecAYf1z.js";import"./Skeleton-ihFS-rOi.js";import"./ListItem-8jG3SovY.js";import"./Fab-ivrv49C2.js";import"./_baseIteratee-sT3ie9FA.js";import"./_baseEach-sPoKw5PR.js";function B(){const s=f(),[r,a]=e.useState("latest"),[p,n]=e.useState(""),m=k(p),{posts:c,postsLoading:l}=L(),{searchResults:d,searchLoading:u}=C(m),h=F({inputData:c,sortBy:r}),x=e.useCallback(o=>{a(o)},[]),S=e.useCallback(o=>{n(o)},[]);return t.jsxs(g,{maxWidth:s.themeStretch?!1:"lg",children:[t.jsx(j,{variant:"h4",sx:{my:{xs:3,md:5}},children:"Blog"}),t.jsxs(P,{spacing:3,justifyContent:"space-between",alignItems:{xs:"flex-end",sm:"center"},direction:{xs:"column",sm:"row"},sx:{mb:{xs:3,md:5}},children:[t.jsx(O,{query:m,results:d,onSearch:S,loading:u,hrefItem:o=>y.post.details(o)}),t.jsx(T,{sort:r,onSort:x,sortOptions:w})]}),t.jsx(H,{posts:h,loading:l})]})}const F=({inputData:s,sortBy:r})=>r==="latest"?i(s,["createdAt"],["desc"]):r==="oldest"?i(s,["createdAt"],["asc"]):r==="popular"?i(s,["totalViews"],["desc"]):s;function Pt(){return t.jsxs(t.Fragment,{children:[t.jsx(b,{children:t.jsx("title",{children:" Post: List"})}),t.jsx(B,{})]})}export{Pt as default};
