import{r as p,j as e,i as S,k as s}from"./index-WqsZrxyt.js";import{u as v,C as w}from"./use-chart-jPrVpt5B.js";import{C as D}from"./Card-O5fbCiLF.js";import{C as F}from"./CardHeader-MvVLinMv.js";function P({handleChartClick:r,title:h,subheader:x,chart:m,...u}){const{labels:o,colors:b,series:a,options:f}=m,[i,W]=p.useState("Month"),C=p.useCallback((t,c,n)=>{const{seriesIndex:d,dataPointIndex:l}=n,k=a[0].data[d].name,y=a[0].data[d].data[l],g=o[l];r&&r({label:g[0],value:y,seriesName:k})},[o,a,r]),j=v({chart:{stacked:!0,events:{dataPointSelection:(t,c,n)=>{C(t,c,n)}}},colors:b,stroke:{width:0},xaxis:{categories:o,labels:{style:{fontWeight:"800"}}},dataLabels:{enabled:!0,dropShadow:{enabled:!1}},tooltip:{y:{formatter:t=>t}},plotOptions:{bar:{borderRadius:i==="Week"&&8||i==="Month"&&6||10,columnWidth:"40%"}},...f});return e.jsx(e.Fragment,{children:e.jsxs(D,{...u,sx:{cursor:"pointer","&:hover":{boxShadow:6}},children:[e.jsx(F,{title:h,subheader:x}),a.map(t=>e.jsx(S,{sx:{mt:3,mx:3},children:t.type===i&&e.jsx(w,{dir:"ltr",type:"bar",series:t.data,options:j,width:"100%",height:500})},t.type))]})})}P.propTypes={chart:s.object,subheader:s.string,title:s.string,handleChartClick:s.func};export{P as F};
