import{cA as m,cB as g,cC as A,cD as S,cE as u,cF as d,cG as M,cH as C,az as E}from"./index-8hdvFbfH.js";import{i as v,_ as O,a as D}from"./_baseToString-2yN2sPqC.js";var K=m,R=g,G=1,L=2;function w(r,n,t,e){var a=t.length,s=a,f=!e;if(r==null)return!s;for(r=Object(r);a--;){var i=t[a];if(f&&i[2]?i[1]!==r[i[0]]:!(i[0]in r))return!1}for(;++a<s;){i=t[a];var _=i[0],h=r[_],y=i[1];if(f&&i[2]){if(h===void 0&&!(_ in r))return!1}else{var $=new K;if(e)var c=e(h,y,_,r,n,$);if(!(c===void 0?R(y,h,G|L,e,$):c))return!1}}return!0}var T=w,x=A;function F(r){return r===r&&!x(r)}var P=F,H=P,N=S;function q(r){for(var n=N(r),t=n.length;t--;){var e=n[t],a=r[e];n[t]=[e,a,H(a)]}return n}var U=q;function B(r,n){return function(t){return t==null?!1:t[r]===n&&(n!==void 0||r in Object(t))}}var p=B,Y=T,J=U,Q=p;function W(r){var n=J(r);return n.length==1&&n[0][2]?Q(n[0][0],n[0][1]):function(t){return t===r||Y(t,r,n)}}var X=W,Z=u,z=v,k=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,V=/^\w*$/;function j(r,n){if(Z(r))return!1;var t=typeof r;return t=="number"||t=="symbol"||t=="boolean"||r==null||z(r)?!0:V.test(r)||!k.test(r)||n!=null&&r in Object(n)}var l=j,rr=O;function nr(r){return r==null?"":rr(r)}var tr=nr,er=u,ar=l,ir=D,sr=tr;function fr(r,n){return er(r)?r:ar(r,n)?[r]:ir(sr(r))}var I=fr,ur=v,or=1/0;function _r(r){if(typeof r=="string"||ur(r))return r;var n=r+"";return n=="0"&&1/r==-or?"-0":n}var o=_r,hr=I,lr=o;function yr(r,n){n=hr(n,r);for(var t=0,e=n.length;r!=null&&t<e;)r=r[lr(n[t++])];return t&&t==e?r:void 0}var b=yr,$r=b;function cr(r,n,t){var e=r==null?void 0:$r(r,n);return e===void 0?t:e}var gr=cr;function vr(r,n){return r!=null&&n in Object(r)}var Pr=vr,pr=I,Ir=d,br=u,mr=M,Ar=C,Sr=o;function dr(r,n,t){n=pr(n,r);for(var e=-1,a=n.length,s=!1;++e<a;){var f=Sr(n[e]);if(!(s=r!=null&&t(r,f)))break;r=r[f]}return s||++e!=a?s:(a=r==null?0:r.length,!!a&&Ar(a)&&mr(f,a)&&(br(r)||Ir(r)))}var Mr=dr,Cr=Pr,Er=Mr;function Or(r,n){return r!=null&&Er(r,n,Cr)}var Dr=Or,Kr=g,Rr=gr,Gr=Dr,Lr=l,wr=P,Tr=p,xr=o,Fr=1,Hr=2;function Nr(r,n){return Lr(r)&&wr(n)?Tr(xr(r),n):function(t){var e=Rr(t,r);return e===void 0&&e===n?Gr(t,r):Kr(n,e,Fr|Hr)}}var qr=Nr;function Ur(r){return function(n){return n==null?void 0:n[r]}}var Br=Ur,Yr=b;function Jr(r){return function(n){return Yr(n,r)}}var Qr=Jr,Wr=Br,Xr=Qr,Zr=l,zr=o;function kr(r){return Zr(r)?Wr(zr(r)):Xr(r)}var Vr=kr,jr=X,rn=qr,nn=E,tn=u,en=Vr;function an(r){return typeof r=="function"?r:r==null?nn:typeof r=="object"?tn(r)?rn(r[0],r[1]):jr(r):en(r)}var un=an;export{un as _,b as a};
