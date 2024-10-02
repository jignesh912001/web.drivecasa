import{r as Re,bN as ze,g as We,o as $e,j as _e,i as ke,k}from"./index-Ks3TOSIq.js";var De={exports:{}};(()=>{var ce={296:(h,b,u)=>{var ne=/^\s+|\s+$/g,A=/^[-+]0x[0-9a-f]+$/i,J=/^0b[01]+$/i,m=/^0o[0-7]+$/i,D=parseInt,Q=typeof u.g=="object"&&u.g&&u.g.Object===Object&&u.g,ae=typeof self=="object"&&self&&self.Object===Object&&self,ie=Q||ae||Function("return this")(),oe=Object.prototype.toString,Z=Math.max,ue=Math.min,H=function(){return ie.Date.now()};function W(d){var O=typeof d;return!!d&&(O=="object"||O=="function")}function se(d){if(typeof d=="number")return d;if(function(f){return typeof f=="symbol"||function(T){return!!T&&typeof T=="object"}(f)&&oe.call(f)=="[object Symbol]"}(d))return NaN;if(W(d)){var O=typeof d.valueOf=="function"?d.valueOf():d;d=W(O)?O+"":O}if(typeof d!="string")return d===0?d:+d;d=d.replace(ne,"");var $=J.test(d);return $||m.test(d)?D(d.slice(2),$?2:8):A.test(d)?NaN:+d}h.exports=function(d,O,$){var f,T,N,S,E,F,C=0,Y=!1,U=!1,K=!0;if(typeof d!="function")throw new TypeError("Expected a function");function X(I){var _=f,M=T;return f=T=void 0,C=I,S=d.apply(M,_)}function ee(I){var _=I-F;return F===void 0||_>=O||_<0||U&&I-C>=N}function L(){var I=H();if(ee(I))return G(I);E=setTimeout(L,function(_){var M=O-(_-F);return U?ue(M,N-(_-C)):M}(I))}function G(I){return E=void 0,K&&f?X(I):(f=T=void 0,S)}function B(){var I=H(),_=ee(I);if(f=arguments,T=this,F=I,_){if(E===void 0)return function(M){return C=M,E=setTimeout(L,O),Y?X(M):S}(F);if(U)return E=setTimeout(L,O),X(F)}return E===void 0&&(E=setTimeout(L,O)),S}return O=se(O)||0,W($)&&(Y=!!$.leading,N=(U="maxWait"in $)?Z(se($.maxWait)||0,O):N,K="trailing"in $?!!$.trailing:K),B.cancel=function(){E!==void 0&&clearTimeout(E),C=0,f=F=T=E=void 0},B.flush=function(){return E===void 0?S:G(H())},B}},96:(h,b,u)=>{var ne="Expected a function",A=NaN,J="[object Symbol]",m=/^\s+|\s+$/g,D=/^[-+]0x[0-9a-f]+$/i,Q=/^0b[01]+$/i,ae=/^0o[0-7]+$/i,ie=parseInt,oe=typeof u.g=="object"&&u.g&&u.g.Object===Object&&u.g,Z=typeof self=="object"&&self&&self.Object===Object&&self,ue=oe||Z||Function("return this")(),H=Object.prototype.toString,W=Math.max,se=Math.min,d=function(){return ue.Date.now()};function O(f){var T=typeof f;return!!f&&(T=="object"||T=="function")}function $(f){if(typeof f=="number")return f;if(function(S){return typeof S=="symbol"||function(E){return!!E&&typeof E=="object"}(S)&&H.call(S)==J}(f))return A;if(O(f)){var T=typeof f.valueOf=="function"?f.valueOf():f;f=O(T)?T+"":T}if(typeof f!="string")return f===0?f:+f;f=f.replace(m,"");var N=Q.test(f);return N||ae.test(f)?ie(f.slice(2),N?2:8):D.test(f)?A:+f}h.exports=function(f,T,N){var S=!0,E=!0;if(typeof f!="function")throw new TypeError(ne);return O(N)&&(S="leading"in N?!!N.leading:S,E="trailing"in N?!!N.trailing:E),function(F,C,Y){var U,K,X,ee,L,G,B=0,I=!1,_=!1,M=!0;if(typeof F!="function")throw new TypeError(ne);function he(V){var q=U,re=K;return U=K=void 0,B=V,ee=F.apply(re,q)}function ve(V){var q=V-G;return G===void 0||q>=C||q<0||_&&V-B>=X}function te(){var V=d();if(ve(V))return me(V);L=setTimeout(te,function(q){var re=C-(q-G);return _?se(re,X-(q-B)):re}(V))}function me(V){return L=void 0,M&&U?he(V):(U=K=void 0,ee)}function le(){var V=d(),q=ve(V);if(U=arguments,K=this,G=V,q){if(L===void 0)return function(re){return B=re,L=setTimeout(te,C),I?he(re):ee}(G);if(_)return L=setTimeout(te,C),he(G)}return L===void 0&&(L=setTimeout(te,C)),ee}return C=$(C)||0,O(Y)&&(I=!!Y.leading,X=(_="maxWait"in Y)?W($(Y.maxWait)||0,C):X,M="trailing"in Y?!!Y.trailing:M),le.cancel=function(){L!==void 0&&clearTimeout(L),B=0,U=G=K=L=void 0},le.flush=function(){return L===void 0?ee:me(d())},le}(f,T,{leading:S,maxWait:T,trailing:E})}},703:(h,b,u)=>{var ne=u(414);function A(){}function J(){}J.resetWarningCache=A,h.exports=function(){function m(ae,ie,oe,Z,ue,H){if(H!==ne){var W=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw W.name="Invariant Violation",W}}function D(){return m}m.isRequired=m;var Q={array:m,bigint:m,bool:m,func:m,number:m,object:m,string:m,symbol:m,any:m,arrayOf:D,element:m,elementType:m,instanceOf:D,node:m,objectOf:D,oneOf:D,oneOfType:D,shape:D,exact:D,checkPropTypes:J,resetWarningCache:A};return Q.PropTypes=Q,Q}},697:(h,b,u)=>{h.exports=u(703)()},414:h=>{h.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},be={};function j(h){var b=be[h];if(b!==void 0)return b.exports;var u=be[h]={exports:{}};return ce[h](u,u.exports,j),u.exports}j.n=h=>{var b=h&&h.__esModule?()=>h.default:()=>h;return j.d(b,{a:b}),b},j.d=(h,b)=>{for(var u in b)j.o(b,u)&&!j.o(h,u)&&Object.defineProperty(h,u,{enumerable:!0,get:b[u]})},j.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),j.o=(h,b)=>Object.prototype.hasOwnProperty.call(h,b),j.r=h=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(h,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(h,"__esModule",{value:!0})};var de={};(()=>{j.r(de),j.d(de,{LazyLoadComponent:()=>Te,LazyLoadImage:()=>Ve,trackWindowScroll:()=>G});const h=Re;var b=j.n(h),u=j(697);const ne=ze;var A=j.n(ne);function J(){return typeof window<"u"&&"IntersectionObserver"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype}function m(n){return m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(n)}function D(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(l){return Object.getOwnPropertyDescriptor(n,l).enumerable})),o.push.apply(o,i)}return o}function Q(n,e,o){return(e=ie(e))in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function ae(n,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,ie(i.key),i)}}function ie(n){var e=function(o,i){if(m(o)!=="object"||o===null)return o;var l=o[Symbol.toPrimitive];if(l!==void 0){var p=l.call(o,"string");if(m(p)!=="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(n);return m(e)==="symbol"?e:String(e)}function oe(n,e){return oe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,i){return o.__proto__=i,o},oe(n,e)}function Z(n){return Z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Z(n)}var ue=function(n){n.forEach(function(e){e.isIntersecting&&e.target.onVisible()})},H={},W=function(n){(function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&oe(t,r)})(v,n);var e,o,i,l,p=(i=v,l=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var t,r=Z(i);if(l){var a=Z(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return function(c,s){if(s&&(m(s)==="object"||typeof s=="function"))return s;if(s!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(y){if(y===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y}(c)}(this,t)});function v(t){var r;if(function(c,s){if(!(c instanceof s))throw new TypeError("Cannot call a class as a function")}(this,v),(r=p.call(this,t)).supportsObserver=!t.scrollPosition&&t.useIntersectionObserver&&J(),r.supportsObserver){var a=t.threshold;r.observer=function(c){return H[c]=H[c]||new IntersectionObserver(ue,{rootMargin:c+"px"}),H[c]}(a)}return r}return e=v,o=[{key:"componentDidMount",value:function(){this.placeholder&&this.observer&&(this.placeholder.onVisible=this.props.onVisible,this.observer.observe(this.placeholder)),this.supportsObserver||this.updateVisibility()}},{key:"componentWillUnmount",value:function(){this.observer&&this.placeholder&&this.observer.unobserve(this.placeholder)}},{key:"componentDidUpdate",value:function(){this.supportsObserver||this.updateVisibility()}},{key:"getPlaceholderBoundingBox",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.props.scrollPosition,r=this.placeholder.getBoundingClientRect(),a=A().findDOMNode(this.placeholder).style,c=parseInt(a.getPropertyValue("margin-left"),10)||0,s=parseInt(a.getPropertyValue("margin-top"),10)||0;return{bottom:t.y+r.bottom+s,left:t.x+r.left+c,right:t.x+r.right+c,top:t.y+r.top+s}}},{key:"isPlaceholderInViewport",value:function(){if(typeof window>"u"||!this.placeholder)return!1;var t=this.props,r=t.scrollPosition,a=t.threshold,c=this.getPlaceholderBoundingBox(r),s=r.y+window.innerHeight,y=r.x,w=r.x+window.innerWidth,P=r.y;return P-a<=c.bottom&&s+a>=c.top&&y-a<=c.right&&w+a>=c.left}},{key:"updateVisibility",value:function(){this.isPlaceholderInViewport()&&this.props.onVisible()}},{key:"render",value:function(){var t=this,r=this.props,a=r.className,c=r.height,s=r.placeholder,y=r.style,w=r.width;if(s&&typeof s.type!="function")return b().cloneElement(s,{ref:function(g){return t.placeholder=g}});var P=function(g){for(var R=1;R<arguments.length;R++){var x=arguments[R]!=null?arguments[R]:{};R%2?D(Object(x),!0).forEach(function(z){Q(g,z,x[z])}):Object.getOwnPropertyDescriptors?Object.defineProperties(g,Object.getOwnPropertyDescriptors(x)):D(Object(x)).forEach(function(z){Object.defineProperty(g,z,Object.getOwnPropertyDescriptor(x,z))})}return g}({display:"inline-block"},y);return w!==void 0&&(P.width=w),c!==void 0&&(P.height=c),b().createElement("span",{className:a,ref:function(g){return t.placeholder=g},style:P},s)}}],o&&ae(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),v}(b().Component);W.propTypes={onVisible:u.PropTypes.func.isRequired,className:u.PropTypes.string,height:u.PropTypes.oneOfType([u.PropTypes.number,u.PropTypes.string]),placeholder:u.PropTypes.element,threshold:u.PropTypes.number,useIntersectionObserver:u.PropTypes.bool,scrollPosition:u.PropTypes.shape({x:u.PropTypes.number.isRequired,y:u.PropTypes.number.isRequired}),width:u.PropTypes.oneOfType([u.PropTypes.number,u.PropTypes.string])},W.defaultProps={className:"",placeholder:null,threshold:100,useIntersectionObserver:!0};const se=W;var d=j(296),O=j.n(d),$=j(96),f=j.n($),T=function(n){var e=getComputedStyle(n,null);return e.getPropertyValue("overflow")+e.getPropertyValue("overflow-y")+e.getPropertyValue("overflow-x")};const N=function(n){if(!(n instanceof HTMLElement))return window;for(var e=n;e&&e instanceof HTMLElement;){if(/(scroll|auto)/.test(T(e)))return e;e=e.parentNode}return window};function S(n){return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(n)}var E=["delayMethod","delayTime"];function F(){return F=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])}return n},F.apply(this,arguments)}function C(n,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,(l=function(p,v){if(S(p)!=="object"||p===null)return p;var t=p[Symbol.toPrimitive];if(t!==void 0){var r=t.call(p,"string");if(S(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(p)}(i.key),S(l)==="symbol"?l:String(l)),i)}var l}function Y(n,e){return Y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,i){return o.__proto__=i,o},Y(n,e)}function U(n,e){if(e&&(S(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return K(n)}function K(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function X(n){return X=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},X(n)}var ee=function(){return typeof window>"u"?0:window.scrollX||window.pageXOffset},L=function(){return typeof window>"u"?0:window.scrollY||window.pageYOffset};const G=function(n){var e=function(o){(function(a,c){if(typeof c!="function"&&c!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(c&&c.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),c&&Y(a,c)})(r,o);var i,l,p,v,t=(p=r,v=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var a,c=X(p);if(v){var s=X(this).constructor;a=Reflect.construct(c,arguments,s)}else a=c.apply(this,arguments);return U(this,a)});function r(a){var c;if(function(y,w){if(!(y instanceof w))throw new TypeError("Cannot call a class as a function")}(this,r),(c=t.call(this,a)).useIntersectionObserver=a.useIntersectionObserver&&J(),c.useIntersectionObserver)return U(c);var s=c.onChangeScroll.bind(K(c));return a.delayMethod==="debounce"?c.delayedScroll=O()(s,a.delayTime):a.delayMethod==="throttle"&&(c.delayedScroll=f()(s,a.delayTime)),c.state={scrollPosition:{x:ee(),y:L()}},c.baseComponentRef=b().createRef(),c}return i=r,(l=[{key:"componentDidMount",value:function(){this.addListeners()}},{key:"componentWillUnmount",value:function(){this.removeListeners()}},{key:"componentDidUpdate",value:function(){typeof window>"u"||this.useIntersectionObserver||N(A().findDOMNode(this.baseComponentRef.current))!==this.scrollElement&&(this.removeListeners(),this.addListeners())}},{key:"addListeners",value:function(){typeof window>"u"||this.useIntersectionObserver||(this.scrollElement=N(A().findDOMNode(this.baseComponentRef.current)),this.scrollElement.addEventListener("scroll",this.delayedScroll,{passive:!0}),window.addEventListener("resize",this.delayedScroll,{passive:!0}),this.scrollElement!==window&&window.addEventListener("scroll",this.delayedScroll,{passive:!0}))}},{key:"removeListeners",value:function(){typeof window>"u"||this.useIntersectionObserver||(this.scrollElement.removeEventListener("scroll",this.delayedScroll),window.removeEventListener("resize",this.delayedScroll),this.scrollElement!==window&&window.removeEventListener("scroll",this.delayedScroll))}},{key:"onChangeScroll",value:function(){this.useIntersectionObserver||this.setState({scrollPosition:{x:ee(),y:L()}})}},{key:"render",value:function(){var a=this.props,c=(a.delayMethod,a.delayTime,function(y,w){if(y==null)return{};var P,g,R=function(z,ye){if(z==null)return{};var fe,we,Le={},Ie=Object.keys(z);for(we=0;we<Ie.length;we++)fe=Ie[we],ye.indexOf(fe)>=0||(Le[fe]=z[fe]);return Le}(y,w);if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(y);for(g=0;g<x.length;g++)P=x[g],w.indexOf(P)>=0||Object.prototype.propertyIsEnumerable.call(y,P)&&(R[P]=y[P])}return R}(a,E)),s=this.useIntersectionObserver?null:this.state.scrollPosition;return b().createElement(n,F({forwardRef:this.baseComponentRef,scrollPosition:s},c))}}])&&C(i.prototype,l),Object.defineProperty(i,"prototype",{writable:!1}),r}(b().Component);return e.propTypes={delayMethod:u.PropTypes.oneOf(["debounce","throttle"]),delayTime:u.PropTypes.number,useIntersectionObserver:u.PropTypes.bool},e.defaultProps={delayMethod:"throttle",delayTime:300,useIntersectionObserver:!0},e};function B(n){return B=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(n)}function I(n,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,(l=function(p,v){if(B(p)!=="object"||p===null)return p;var t=p[Symbol.toPrimitive];if(t!==void 0){var r=t.call(p,"string");if(B(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(p)}(i.key),B(l)==="symbol"?l:String(l)),i)}var l}function _(n,e){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,i){return o.__proto__=i,o},_(n,e)}function M(n){return M=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},M(n)}var he=function(n){(function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&_(t,r)})(v,n);var e,o,i,l,p=(i=v,l=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var t,r=M(i);if(l){var a=M(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return function(c,s){if(s&&(B(s)==="object"||typeof s=="function"))return s;if(s!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(y){if(y===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y}(c)}(this,t)});function v(t){return function(r,a){if(!(r instanceof a))throw new TypeError("Cannot call a class as a function")}(this,v),p.call(this,t)}return e=v,(o=[{key:"render",value:function(){return b().createElement(se,this.props)}}])&&I(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),v}(b().Component);const ve=G(he);function te(n){return te=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},te(n)}function me(n,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,(l=function(p,v){if(te(p)!=="object"||p===null)return p;var t=p[Symbol.toPrimitive];if(t!==void 0){var r=t.call(p,"string");if(te(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(p)}(i.key),te(l)==="symbol"?l:String(l)),i)}var l}function le(n,e){return le=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,i){return o.__proto__=i,o},le(n,e)}function V(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function q(n){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(n)}var re=function(n){(function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&le(t,r)})(v,n);var e,o,i,l,p=(i=v,l=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var t,r=q(i);if(l){var a=q(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return function(c,s){if(s&&(te(s)==="object"||typeof s=="function"))return s;if(s!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return V(c)}(this,t)});function v(t){var r;(function(w,P){if(!(w instanceof P))throw new TypeError("Cannot call a class as a function")})(this,v),r=p.call(this,t);var a=t.afterLoad,c=t.beforeLoad,s=t.scrollPosition,y=t.visibleByDefault;return r.state={visible:y},y&&(c(),a()),r.onVisible=r.onVisible.bind(V(r)),r.isScrollTracked=!!(s&&Number.isFinite(s.x)&&s.x>=0&&Number.isFinite(s.y)&&s.y>=0),r}return e=v,(o=[{key:"componentDidUpdate",value:function(t,r){r.visible!==this.state.visible&&this.props.afterLoad()}},{key:"onVisible",value:function(){this.props.beforeLoad(),this.setState({visible:!0})}},{key:"render",value:function(){if(this.state.visible)return this.props.children;var t=this.props,r=t.className,a=t.delayMethod,c=t.delayTime,s=t.height,y=t.placeholder,w=t.scrollPosition,P=t.style,g=t.threshold,R=t.useIntersectionObserver,x=t.width;return this.isScrollTracked||R&&J()?b().createElement(se,{className:r,height:s,onVisible:this.onVisible,placeholder:y,scrollPosition:w,style:P,threshold:g,useIntersectionObserver:R,width:x}):b().createElement(ve,{className:r,delayMethod:a,delayTime:c,height:s,onVisible:this.onVisible,placeholder:y,style:P,threshold:g,width:x})}}])&&me(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),v}(b().Component);re.propTypes={afterLoad:u.PropTypes.func,beforeLoad:u.PropTypes.func,useIntersectionObserver:u.PropTypes.bool,visibleByDefault:u.PropTypes.bool},re.defaultProps={afterLoad:function(){return{}},beforeLoad:function(){return{}},useIntersectionObserver:!0,visibleByDefault:!1};const Te=re;function pe(n){return pe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pe(n)}var Ce=["afterLoad","beforeLoad","delayMethod","delayTime","effect","placeholder","placeholderSrc","scrollPosition","threshold","useIntersectionObserver","visibleByDefault","wrapperClassName","wrapperProps"];function Se(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(l){return Object.getOwnPropertyDescriptor(n,l).enumerable})),o.push.apply(o,i)}return o}function Ee(n){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?arguments[e]:{};e%2?Se(Object(o),!0).forEach(function(i){Be(n,i,o[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):Se(Object(o)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(o,i))})}return n}function Be(n,e,o){return(e=xe(e))in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function ge(){return ge=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])}return n},ge.apply(this,arguments)}function Me(n,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,xe(i.key),i)}}function xe(n){var e=function(o,i){if(pe(o)!=="object"||o===null)return o;var l=o[Symbol.toPrimitive];if(l!==void 0){var p=l.call(o,"string");if(pe(p)!=="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(n);return pe(e)==="symbol"?e:String(e)}function Pe(n,e){return Pe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,i){return o.__proto__=i,o},Pe(n,e)}function Oe(n){return Oe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Oe(n)}var je=function(n){(function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&Pe(t,r)})(v,n);var e,o,i,l,p=(i=v,l=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var t,r=Oe(i);if(l){var a=Oe(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return function(c,s){if(s&&(pe(s)==="object"||typeof s=="function"))return s;if(s!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(y){if(y===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y}(c)}(this,t)});function v(t){var r;return function(a,c){if(!(a instanceof c))throw new TypeError("Cannot call a class as a function")}(this,v),(r=p.call(this,t)).state={loaded:!1},r}return e=v,(o=[{key:"onImageLoad",value:function(){var t=this;return this.state.loaded?null:function(r){t.props.onLoad(r),t.props.afterLoad(),t.setState({loaded:!0})}}},{key:"getImg",value:function(){var t=this.props,r=(t.afterLoad,t.beforeLoad,t.delayMethod,t.delayTime,t.effect,t.placeholder,t.placeholderSrc,t.scrollPosition,t.threshold,t.useIntersectionObserver,t.visibleByDefault,t.wrapperClassName,t.wrapperProps,function(a,c){if(a==null)return{};var s,y,w=function(g,R){if(g==null)return{};var x,z,ye={},fe=Object.keys(g);for(z=0;z<fe.length;z++)x=fe[z],R.indexOf(x)>=0||(ye[x]=g[x]);return ye}(a,c);if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(a);for(y=0;y<P.length;y++)s=P[y],c.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(a,s)&&(w[s]=a[s])}return w}(t,Ce));return b().createElement("img",ge({},r,{onLoad:this.onImageLoad()}))}},{key:"getLazyLoadImage",value:function(){var t=this.props,r=t.beforeLoad,a=t.className,c=t.delayMethod,s=t.delayTime,y=t.height,w=t.placeholder,P=t.scrollPosition,g=t.style,R=t.threshold,x=t.useIntersectionObserver,z=t.visibleByDefault,ye=t.width;return b().createElement(Te,{beforeLoad:r,className:a,delayMethod:c,delayTime:s,height:y,placeholder:w,scrollPosition:P,style:g,threshold:R,useIntersectionObserver:x,visibleByDefault:z,width:ye},this.getImg())}},{key:"getWrappedLazyLoadImage",value:function(t){var r=this.props,a=r.effect,c=r.height,s=r.placeholderSrc,y=r.width,w=r.wrapperClassName,P=r.wrapperProps,g=this.state.loaded,R=g?" lazy-load-image-loaded":"",x=g||!s?{}:{backgroundImage:"url(".concat(s,")"),backgroundSize:"100% 100%"};return b().createElement("span",ge({className:w+" lazy-load-image-background "+a+R,style:Ee(Ee({},x),{},{color:"transparent",display:"inline-block",height:c,width:y})},P),t)}},{key:"render",value:function(){var t=this.props,r=t.effect,a=t.placeholderSrc,c=t.visibleByDefault,s=t.wrapperClassName,y=t.wrapperProps,w=this.getLazyLoadImage();return(r||a)&&!c||s||y?this.getWrappedLazyLoadImage(w):w}}])&&Me(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),v}(b().Component);je.propTypes={onLoad:u.PropTypes.func,afterLoad:u.PropTypes.func,beforeLoad:u.PropTypes.func,delayMethod:u.PropTypes.string,delayTime:u.PropTypes.number,effect:u.PropTypes.string,placeholderSrc:u.PropTypes.string,threshold:u.PropTypes.number,useIntersectionObserver:u.PropTypes.bool,visibleByDefault:u.PropTypes.bool,wrapperClassName:u.PropTypes.string,wrapperProps:u.PropTypes.object},je.defaultProps={onLoad:function(){},afterLoad:function(){return{}},beforeLoad:function(){return{}},delayMethod:"throttle",delayTime:300,effect:"",placeholderSrc:null,threshold:100,useIntersectionObserver:!0,visibleByDefault:!1,wrapperClassName:""};const Ve=je})(),De.exports=de})();var Fe=De.exports;function Ue(ce="1/1"){return{"4/3":"calc(100% / 4 * 3)","3/4":"calc(100% / 3 * 4)","6/4":"calc(100% / 6 * 4)","4/6":"calc(100% / 4 * 6)","16/9":"calc(100% / 16 * 9)","9/16":"calc(100% / 9 * 16)","21/9":"calc(100% / 21 * 9)","9/21":"calc(100% / 9 * 21)","1/1":"100%"}[ce]}const Ne=Re.forwardRef(({ratio:ce,overlay:be,disabledEffect:j=!1,alt:de,src:h,afterLoad:b,delayTime:u,threshold:ne,beforeLoad:A,delayMethod:J,placeholder:m,wrapperProps:D,scrollPosition:Q,effect:ae="blur",visibleByDefault:ie,wrapperClassName:oe,useIntersectionObserver:Z,sx:ue,...H},W)=>{const se=We(),d=!!be&&{"&:before":{content:"''",top:0,left:0,width:1,height:1,zIndex:1,position:"absolute",background:be||$e(se.palette.grey[900],.48)}},O=_e.jsx(ke,{component:Fe.LazyLoadImage,alt:de,src:h,afterLoad:b,delayTime:u,threshold:ne,beforeLoad:A,delayMethod:J,placeholder:m,wrapperProps:D,scrollPosition:Q,visibleByDefault:ie,effect:j?void 0:ae,useIntersectionObserver:Z,wrapperClassName:oe||"component-image-wrapper",placeholderSrc:j?"/assets/transparent.png":"/assets/placeholder.svg",sx:{width:1,height:1,objectFit:"cover",verticalAlign:"bottom",...!!ce&&{top:0,left:0,position:"absolute"}}});return _e.jsx(ke,{ref:W,component:"span",className:"component-image",sx:{overflow:"hidden",position:"relative",verticalAlign:"bottom",display:"inline-block",...!!ce&&{width:1},"& span.component-image-wrapper":{width:1,height:1,verticalAlign:"bottom",backgroundSize:"cover !important",...!!ce&&{pt:Ue(ce)}},...d,...ue},...H,children:O})});Ne.propTypes={afterLoad:k.func,alt:k.string,beforeLoad:k.func,delayMethod:k.string,delayTime:k.number,disabledEffect:k.bool,effect:k.string,overlay:k.string,ratio:k.oneOf(["4/3","3/4","6/4","4/6","16/9","9/16","21/9","9/21","1/1"]),scrollPosition:k.object,src:k.string,sx:k.object,threshold:k.number,useIntersectionObserver:k.bool,visibleByDefault:k.bool,wrapperClassName:k.string,wrapperProps:k.object,placeholder:k.element};const Ae=Ne;export{Ae as I};
