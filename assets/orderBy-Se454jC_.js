import{dz as m,az as A,dA as e,cE as g,ay as B}from"./index-d_hKz2zC.js";import{i as M,b as o}from"./_baseToString-VsVRvL9P.js";import{a as s,_ as $}from"./_baseIteratee-hxdmfQda.js";import{_ as E}from"./_baseEach--Ra-aBE5.js";var k=E,C=m;function L(n,r){var a=-1,u=C(n)?Array(n.length):[];return k(n,function(t,i,c){u[++a]=r(t,i,c)}),u}var O=L;function w(n,r){var a=n.length;for(n.sort(r);a--;)n[a]=n[a].value;return n}var x=w,y=M;function z(n,r){if(n!==r){var a=n!==void 0,u=n===null,t=n===n,i=y(n),c=r!==void 0,_=r===null,f=r===r,p=y(r);if(!_&&!p&&!i&&n>r||i&&c&&f&&!_&&!p||u&&c&&f||!a&&f||!t)return 1;if(!u&&!i&&!p&&n<r||p&&a&&t&&!u&&!i||_&&a&&t||!c&&t||!f)return-1}return 0}var G=z,U=G;function j(n,r,a){for(var u=-1,t=n.criteria,i=r.criteria,c=t.length,_=a.length;++u<c;){var f=U(t[u],i[u]);if(f){if(u>=_)return f;var p=a[u];return f*(p=="desc"?-1:1)}}return n.index-r.index}var F=j,d=o,q=s,H=$,J=O,K=x,P=e,Q=F,T=A,V=g;function W(n,r,a){r.length?r=d(r,function(i){return V(i)?function(c){return q(c,i.length===1?i[0]:i)}:i}):r=[T];var u=-1;r=d(r,P(H));var t=J(n,function(i,c,_){var f=d(r,function(p){return p(i)});return{criteria:f,index:++u,value:i}});return K(t,function(i,c){return Q(i,c,a)})}var X=W,Y=X,b=g;function Z(n,r,a,u){return n==null?[]:(b(r)||(r=r==null?[]:[r]),a=u?void 0:a,b(a)||(a=a==null?[]:[a]),Y(n,r,a))}var v=Z;const R=B(v);export{R as o};
