import{r as h,j as i,S as f,B as j,o as d,f as m,k as t,i as g}from"./index-xB1vvAyJ.js";const b=h.forwardRef(({colors:a,selected:e,onSelectColor:o,limit:p="auto",sx:c,...x},u)=>{const r=typeof e=="string",y=h.useCallback(n=>{if(r)n!==e&&o(n);else{const l=e.includes(n)?e.filter(s=>s!==n):[...e,n];o(l)}},[o,e,r]);return i.jsx(f,{ref:u,direction:"row",display:"inline-flex",sx:{flexWrap:"wrap",...p!=="auto"&&{width:p*36,justifyContent:"flex-end"},...c},...x,children:a.map(n=>{const l=r?e===n:e.includes(n);return i.jsx(j,{sx:{width:36,height:36,borderRadius:"50%"},onClick:()=>{y(n)},children:i.jsx(f,{alignItems:"center",justifyContent:"center",sx:{width:20,height:20,bgcolor:n,borderRadius:"50%",border:s=>`solid 1px ${d(s.palette.grey[500],.16)}`,...l&&{transform:"scale(1.3)",boxShadow:`4px 4px 8px 0 ${d(n,.48)}`,outline:`solid 2px ${d(n,.08)}`,transition:s=>s.transitions.create("all",{duration:s.transitions.duration.shortest})}},children:i.jsx(m,{width:l?12:0,icon:"eva:checkmark-fill",sx:{color:s=>s.palette.getContrastText(n),transition:s=>s.transitions.create("all",{duration:s.transitions.duration.shortest})}})})},n)})})});b.propTypes={colors:t.oneOfType([t.string,t.arrayOf(t.string)]),limit:t.number,onSelectColor:t.func,selected:t.oneOfType([t.string,t.arrayOf(t.string)]),sx:t.object};const k=b;function w({colors:a,limit:e=3,sx:o}){const p=a.slice(0,e),c=a.length-e;return i.jsxs(f,{component:"span",direction:"row",alignItems:"center",justifyContent:"flex-end",sx:o,children:[p.map((x,u)=>i.jsx(g,{sx:{ml:-.75,width:16,height:16,bgcolor:x,borderRadius:"50%",border:r=>`solid 2px ${r.palette.background.paper}`,boxShadow:r=>`inset -1px 1px 2px ${d(r.palette.common.black,.24)}`}},x+u)),a.length>e&&i.jsx(g,{component:"span",sx:{typography:"subtitle2"},children:`+${c}`})]})}w.propTypes={colors:t.arrayOf(t.string),limit:t.number,sx:t.object};export{w as C,k as a};
