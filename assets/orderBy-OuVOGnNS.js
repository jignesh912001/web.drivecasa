import{dJ as m,az as A,dK as e,cA as g,ay as B}from"./index-Ks3TOSIq.js";import{i as M,b as o}from"./_baseToString-VRCXZVIe.js";import{a as s,_ as $}from"./_baseIteratee-_0YtMUMH.js";import{_ as k}from"./_baseEach-ZpsIawga.js";var C=k,E=m;function L(n,r){var a=-1,u=E(n)?Array(n.length):[];return C(n,function(t,i,c){u[++a]=r(t,i,c)}),u}var O=L;function w(n,r){var a=n.length;for(n.sort(r);a--;)n[a]=n[a].value;return n}var x=w,y=M;function G(n,r){if(n!==r){var a=n!==void 0,u=n===null,t=n===n,i=y(n),c=r!==void 0,_=r===null,f=r===r,p=y(r);if(!_&&!p&&!i&&n>r||i&&c&&f&&!_&&!p||u&&c&&f||!a&&f||!t)return 1;if(!u&&!i&&!p&&n<r||p&&a&&t&&!u&&!i||_&&a&&t||!c&&t||!f)return-1}return 0}var U=G,j=U;function z(n,r,a){for(var u=-1,t=n.criteria,i=r.criteria,c=t.length,_=a.length;++u<c;){var f=j(t[u],i[u]);if(f){if(u>=_)return f;var p=a[u];return f*(p=="desc"?-1:1)}}return n.index-r.index}var F=z,d=o,J=s,K=$,q=O,H=x,P=e,Q=F,T=A,V=g;function W(n,r,a){r.length?r=d(r,function(i){return V(i)?function(c){return J(c,i.length===1?i[0]:i)}:i}):r=[T];var u=-1;r=d(r,P(K));var t=q(n,function(i,c,_){var f=d(r,function(p){return p(i)});return{criteria:f,index:++u,value:i}});return H(t,function(i,c){return Q(i,c,a)})}var X=W,Y=X,b=g;function Z(n,r,a,u){return n==null?[]:(b(r)||(r=r==null?[]:[r]),a=u?void 0:a,b(a)||(a=a==null?[]:[a]),Y(n,r,a))}var v=Z;const R=B(v);export{R as o};
