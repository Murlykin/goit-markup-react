function qf(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function ep(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var fc={exports:{}},mo={},pc={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dr=Symbol.for("react.element"),tp=Symbol.for("react.portal"),np=Symbol.for("react.fragment"),rp=Symbol.for("react.strict_mode"),ip=Symbol.for("react.profiler"),op=Symbol.for("react.provider"),lp=Symbol.for("react.context"),ap=Symbol.for("react.forward_ref"),sp=Symbol.for("react.suspense"),up=Symbol.for("react.memo"),cp=Symbol.for("react.lazy"),Ss=Symbol.iterator;function dp(e){return e===null||typeof e!="object"?null:(e=Ss&&e[Ss]||e["@@iterator"],typeof e=="function"?e:null)}var hc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mc=Object.assign,gc={};function Dn(e,t,n){this.props=e,this.context=t,this.refs=gc,this.updater=n||hc}Dn.prototype.isReactComponent={};Dn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Dn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function vc(){}vc.prototype=Dn.prototype;function Sa(e,t,n){this.props=e,this.context=t,this.refs=gc,this.updater=n||hc}var ja=Sa.prototype=new vc;ja.constructor=Sa;mc(ja,Dn.prototype);ja.isPureReactComponent=!0;var js=Array.isArray,xc=Object.prototype.hasOwnProperty,Aa={current:null},yc={key:!0,ref:!0,__self:!0,__source:!0};function wc(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)xc.call(t,r)&&!yc.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Dr,type:e,key:o,ref:l,props:i,_owner:Aa.current}}function fp(e,t){return{$$typeof:Dr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ca(e){return typeof e=="object"&&e!==null&&e.$$typeof===Dr}function pp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var As=/\/+/g;function bo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?pp(""+e.key):t.toString(36)}function ji(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Dr:case tp:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+bo(l,0):r,js(i)?(n="",e!=null&&(n=e.replace(As,"$&/")+"/"),ji(i,t,n,"",function(c){return c})):i!=null&&(Ca(i)&&(i=fp(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(As,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",js(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+bo(o,s);l+=ji(o,t,n,u,i)}else if(u=dp(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+bo(o,s++),l+=ji(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Qr(e,t,n){if(e==null)return e;var r=[],i=0;return ji(e,r,"","",function(o){return t.call(n,o,i++)}),r}function hp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ye={current:null},Ai={transition:null},mp={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:Ai,ReactCurrentOwner:Aa};L.Children={map:Qr,forEach:function(e,t,n){Qr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Qr(e,function(){t++}),t},toArray:function(e){return Qr(e,function(t){return t})||[]},only:function(e){if(!Ca(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=Dn;L.Fragment=np;L.Profiler=ip;L.PureComponent=Sa;L.StrictMode=rp;L.Suspense=sp;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mp;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=mc({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Aa.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)xc.call(t,u)&&!yc.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Dr,type:e.type,key:i,ref:o,props:r,_owner:l}};L.createContext=function(e){return e={$$typeof:lp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:op,_context:e},e.Consumer=e};L.createElement=wc;L.createFactory=function(e){var t=wc.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:ap,render:e}};L.isValidElement=Ca;L.lazy=function(e){return{$$typeof:cp,_payload:{_status:-1,_result:e},_init:hp}};L.memo=function(e,t){return{$$typeof:up,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Ai.transition;Ai.transition={};try{e()}finally{Ai.transition=t}};L.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};L.useCallback=function(e,t){return ye.current.useCallback(e,t)};L.useContext=function(e){return ye.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return ye.current.useDeferredValue(e)};L.useEffect=function(e,t){return ye.current.useEffect(e,t)};L.useId=function(){return ye.current.useId()};L.useImperativeHandle=function(e,t,n){return ye.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return ye.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return ye.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return ye.current.useMemo(e,t)};L.useReducer=function(e,t,n){return ye.current.useReducer(e,t,n)};L.useRef=function(e){return ye.current.useRef(e)};L.useState=function(e){return ye.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return ye.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return ye.current.useTransition()};L.version="18.2.0";pc.exports=L;var E=pc.exports;const Et=ep(E),Sl=qf({__proto__:null,default:Et},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gp=E,vp=Symbol.for("react.element"),xp=Symbol.for("react.fragment"),yp=Object.prototype.hasOwnProperty,wp=gp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kp={key:!0,ref:!0,__self:!0,__source:!0};function kc(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)yp.call(t,r)&&!kp.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:vp,type:e,key:o,ref:l,props:i,_owner:wp.current}}mo.Fragment=xp;mo.jsx=kc;mo.jsxs=kc;fc.exports=mo;var a=fc.exports,Sc={exports:{}},Re={},jc={exports:{}},Ac={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,O){var R=N.length;N.push(O);e:for(;0<R;){var X=R-1>>>1,ne=N[X];if(0<i(ne,O))N[X]=O,N[R]=ne,R=X;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var O=N[0],R=N.pop();if(R!==O){N[0]=R;e:for(var X=0,ne=N.length,$r=ne>>>1;X<$r;){var Wt=2*(X+1)-1,Uo=N[Wt],Ht=Wt+1,Vr=N[Ht];if(0>i(Uo,R))Ht<ne&&0>i(Vr,Uo)?(N[X]=Vr,N[Ht]=R,X=Ht):(N[X]=Uo,N[Wt]=R,X=Wt);else if(Ht<ne&&0>i(Vr,R))N[X]=Vr,N[Ht]=R,X=Ht;else break e}}return O}function i(N,O){var R=N.sortIndex-O.sortIndex;return R!==0?R:N.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],c=[],h=1,m=null,g=3,k=!1,y=!1,v=!1,j=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var O=n(c);O!==null;){if(O.callback===null)r(c);else if(O.startTime<=N)r(c),O.sortIndex=O.expirationTime,t(u,O);else break;O=n(c)}}function x(N){if(v=!1,p(N),!y)if(n(u)!==null)y=!0,Do(C);else{var O=n(c);O!==null&&Fo(x,O.startTime-N)}}function C(N,O){y=!1,v&&(v=!1,f(T),T=-1),k=!0;var R=g;try{for(p(O),m=n(u);m!==null&&(!(m.expirationTime>O)||N&&!_e());){var X=m.callback;if(typeof X=="function"){m.callback=null,g=m.priorityLevel;var ne=X(m.expirationTime<=O);O=e.unstable_now(),typeof ne=="function"?m.callback=ne:m===n(u)&&r(u),p(O)}else r(u);m=n(u)}if(m!==null)var $r=!0;else{var Wt=n(c);Wt!==null&&Fo(x,Wt.startTime-O),$r=!1}return $r}finally{m=null,g=R,k=!1}}var _=!1,A=null,T=-1,b=5,z=-1;function _e(){return!(e.unstable_now()-z<b)}function Hn(){if(A!==null){var N=e.unstable_now();z=N;var O=!0;try{O=A(!0,N)}finally{O?$n():(_=!1,A=null)}}else _=!1}var $n;if(typeof d=="function")$n=function(){d(Hn)};else if(typeof MessageChannel<"u"){var ks=new MessageChannel,Jf=ks.port2;ks.port1.onmessage=Hn,$n=function(){Jf.postMessage(null)}}else $n=function(){j(Hn,0)};function Do(N){A=N,_||(_=!0,$n())}function Fo(N,O){T=j(function(){N(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){y||k||(y=!0,Do(C))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(N){switch(g){case 1:case 2:case 3:var O=3;break;default:O=g}var R=g;g=O;try{return N()}finally{g=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,O){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var R=g;g=N;try{return O()}finally{g=R}},e.unstable_scheduleCallback=function(N,O,R){var X=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?X+R:X):R=X,N){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=R+ne,N={id:h++,callback:O,priorityLevel:N,startTime:R,expirationTime:ne,sortIndex:-1},R>X?(N.sortIndex=R,t(c,N),n(u)===null&&N===n(c)&&(v?(f(T),T=-1):v=!0,Fo(x,R-X))):(N.sortIndex=ne,t(u,N),y||k||(y=!0,Do(C))),N},e.unstable_shouldYield=_e,e.unstable_wrapCallback=function(N){var O=g;return function(){var R=g;g=O;try{return N.apply(this,arguments)}finally{g=R}}}})(Ac);jc.exports=Ac;var Sp=jc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cc=E,Oe=Sp;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ec=new Set,mr={};function nn(e,t){Pn(e,t),Pn(e+"Capture",t)}function Pn(e,t){for(mr[e]=t,e=0;e<t.length;e++)Ec.add(t[e])}var ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jl=Object.prototype.hasOwnProperty,jp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cs={},Es={};function Ap(e){return jl.call(Es,e)?!0:jl.call(Cs,e)?!1:jp.test(e)?Es[e]=!0:(Cs[e]=!0,!1)}function Cp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ep(e,t,n,r){if(t===null||typeof t>"u"||Cp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function we(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new we(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new we(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new we(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new we(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new we(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new we(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new we(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new we(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new we(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ea=/[\-:]([a-z])/g;function _a(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ea,_a);se[t]=new we(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ea,_a);se[t]=new we(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ea,_a);se[t]=new we(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new we(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new we(e,1,!1,e.toLowerCase(),null,!0,!0)});function Pa(e,t,n,r){var i=se.hasOwnProperty(t)?se[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ep(t,n,i,r)&&(n=null),r||i===null?Ap(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var gt=Cc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Kr=Symbol.for("react.element"),un=Symbol.for("react.portal"),cn=Symbol.for("react.fragment"),Na=Symbol.for("react.strict_mode"),Al=Symbol.for("react.profiler"),_c=Symbol.for("react.provider"),Pc=Symbol.for("react.context"),Ta=Symbol.for("react.forward_ref"),Cl=Symbol.for("react.suspense"),El=Symbol.for("react.suspense_list"),za=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),Nc=Symbol.for("react.offscreen"),_s=Symbol.iterator;function Vn(e){return e===null||typeof e!="object"?null:(e=_s&&e[_s]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,Bo;function nr(e){if(Bo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Bo=t&&t[1]||""}return`
`+Bo+e}var Wo=!1;function Ho(e,t){if(!e||Wo)return"";Wo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{Wo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?nr(e):""}function _p(e){switch(e.tag){case 5:return nr(e.type);case 16:return nr("Lazy");case 13:return nr("Suspense");case 19:return nr("SuspenseList");case 0:case 2:case 15:return e=Ho(e.type,!1),e;case 11:return e=Ho(e.type.render,!1),e;case 1:return e=Ho(e.type,!0),e;default:return""}}function _l(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case cn:return"Fragment";case un:return"Portal";case Al:return"Profiler";case Na:return"StrictMode";case Cl:return"Suspense";case El:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Pc:return(e.displayName||"Context")+".Consumer";case _c:return(e._context.displayName||"Context")+".Provider";case Ta:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case za:return t=e.displayName||null,t!==null?t:_l(e.type)||"Memo";case yt:t=e._payload,e=e._init;try{return _l(e(t))}catch{}}return null}function Pp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _l(t);case 8:return t===Na?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function It(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Tc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Np(e){var t=Tc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Yr(e){e._valueTracker||(e._valueTracker=Np(e))}function zc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Tc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ui(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Pl(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ps(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=It(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Oc(e,t){t=t.checked,t!=null&&Pa(e,"checked",t,!1)}function Nl(e,t){Oc(e,t);var n=It(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Tl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Tl(e,t.type,It(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ns(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Tl(e,t,n){(t!=="number"||Ui(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var rr=Array.isArray;function kn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+It(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function zl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ts(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(rr(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:It(n)}}function Rc(e,t){var n=It(t.value),r=It(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function zs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Lc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ol(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Lc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Gr,Mc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Gr=Gr||document.createElement("div"),Gr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Gr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function gr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var lr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Tp=["Webkit","ms","Moz","O"];Object.keys(lr).forEach(function(e){Tp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),lr[t]=lr[e]})});function Ic(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||lr.hasOwnProperty(e)&&lr[e]?(""+t).trim():t+"px"}function Dc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ic(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var zp=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rl(e,t){if(t){if(zp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Ll(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ml=null;function Oa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Il=null,Sn=null,jn=null;function Os(e){if(e=br(e)){if(typeof Il!="function")throw Error(S(280));var t=e.stateNode;t&&(t=wo(t),Il(e.stateNode,e.type,t))}}function Fc(e){Sn?jn?jn.push(e):jn=[e]:Sn=e}function Uc(){if(Sn){var e=Sn,t=jn;if(jn=Sn=null,Os(e),t)for(e=0;e<t.length;e++)Os(t[e])}}function bc(e,t){return e(t)}function Bc(){}var $o=!1;function Wc(e,t,n){if($o)return e(t,n);$o=!0;try{return bc(e,t,n)}finally{$o=!1,(Sn!==null||jn!==null)&&(Bc(),Uc())}}function vr(e,t){var n=e.stateNode;if(n===null)return null;var r=wo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Dl=!1;if(ft)try{var Qn={};Object.defineProperty(Qn,"passive",{get:function(){Dl=!0}}),window.addEventListener("test",Qn,Qn),window.removeEventListener("test",Qn,Qn)}catch{Dl=!1}function Op(e,t,n,r,i,o,l,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var ar=!1,bi=null,Bi=!1,Fl=null,Rp={onError:function(e){ar=!0,bi=e}};function Lp(e,t,n,r,i,o,l,s,u){ar=!1,bi=null,Op.apply(Rp,arguments)}function Mp(e,t,n,r,i,o,l,s,u){if(Lp.apply(this,arguments),ar){if(ar){var c=bi;ar=!1,bi=null}else throw Error(S(198));Bi||(Bi=!0,Fl=c)}}function rn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Hc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Rs(e){if(rn(e)!==e)throw Error(S(188))}function Ip(e){var t=e.alternate;if(!t){if(t=rn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Rs(i),e;if(o===r)return Rs(i),t;o=o.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function $c(e){return e=Ip(e),e!==null?Vc(e):null}function Vc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Vc(e);if(t!==null)return t;e=e.sibling}return null}var Qc=Oe.unstable_scheduleCallback,Ls=Oe.unstable_cancelCallback,Dp=Oe.unstable_shouldYield,Fp=Oe.unstable_requestPaint,Z=Oe.unstable_now,Up=Oe.unstable_getCurrentPriorityLevel,Ra=Oe.unstable_ImmediatePriority,Kc=Oe.unstable_UserBlockingPriority,Wi=Oe.unstable_NormalPriority,bp=Oe.unstable_LowPriority,Yc=Oe.unstable_IdlePriority,go=null,et=null;function Bp(e){if(et&&typeof et.onCommitFiberRoot=="function")try{et.onCommitFiberRoot(go,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:$p,Wp=Math.log,Hp=Math.LN2;function $p(e){return e>>>=0,e===0?32:31-(Wp(e)/Hp|0)|0}var Xr=64,Zr=4194304;function ir(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=ir(s):(o&=l,o!==0&&(r=ir(o)))}else l=n&~i,l!==0?r=ir(l):o!==0&&(r=ir(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ve(t),i=1<<n,r|=e[n],t&=~i;return r}function Vp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ve(o),s=1<<l,u=i[l];u===-1?(!(s&n)||s&r)&&(i[l]=Vp(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function Ul(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Gc(){var e=Xr;return Xr<<=1,!(Xr&4194240)&&(Xr=64),e}function Vo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Fr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ve(t),e[t]=n}function Kp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ve(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function La(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ve(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var U=0;function Xc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Zc,Ma,Jc,qc,ed,bl=!1,Jr=[],_t=null,Pt=null,Nt=null,xr=new Map,yr=new Map,kt=[],Yp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ms(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":Nt=null;break;case"pointerover":case"pointerout":xr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yr.delete(t.pointerId)}}function Kn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=br(t),t!==null&&Ma(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Gp(e,t,n,r,i){switch(t){case"focusin":return _t=Kn(_t,e,t,n,r,i),!0;case"dragenter":return Pt=Kn(Pt,e,t,n,r,i),!0;case"mouseover":return Nt=Kn(Nt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return xr.set(o,Kn(xr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,yr.set(o,Kn(yr.get(o)||null,e,t,n,r,i)),!0}return!1}function td(e){var t=Qt(e.target);if(t!==null){var n=rn(t);if(n!==null){if(t=n.tag,t===13){if(t=Hc(n),t!==null){e.blockedOn=t,ed(e.priority,function(){Jc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ci(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Bl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ml=r,n.target.dispatchEvent(r),Ml=null}else return t=br(n),t!==null&&Ma(t),e.blockedOn=n,!1;t.shift()}return!0}function Is(e,t,n){Ci(e)&&n.delete(t)}function Xp(){bl=!1,_t!==null&&Ci(_t)&&(_t=null),Pt!==null&&Ci(Pt)&&(Pt=null),Nt!==null&&Ci(Nt)&&(Nt=null),xr.forEach(Is),yr.forEach(Is)}function Yn(e,t){e.blockedOn===t&&(e.blockedOn=null,bl||(bl=!0,Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority,Xp)))}function wr(e){function t(i){return Yn(i,e)}if(0<Jr.length){Yn(Jr[0],e);for(var n=1;n<Jr.length;n++){var r=Jr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_t!==null&&Yn(_t,e),Pt!==null&&Yn(Pt,e),Nt!==null&&Yn(Nt,e),xr.forEach(t),yr.forEach(t),n=0;n<kt.length;n++)r=kt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<kt.length&&(n=kt[0],n.blockedOn===null);)td(n),n.blockedOn===null&&kt.shift()}var An=gt.ReactCurrentBatchConfig,$i=!0;function Zp(e,t,n,r){var i=U,o=An.transition;An.transition=null;try{U=1,Ia(e,t,n,r)}finally{U=i,An.transition=o}}function Jp(e,t,n,r){var i=U,o=An.transition;An.transition=null;try{U=4,Ia(e,t,n,r)}finally{U=i,An.transition=o}}function Ia(e,t,n,r){if($i){var i=Bl(e,t,n,r);if(i===null)tl(e,t,r,Vi,n),Ms(e,r);else if(Gp(i,e,t,n,r))r.stopPropagation();else if(Ms(e,r),t&4&&-1<Yp.indexOf(e)){for(;i!==null;){var o=br(i);if(o!==null&&Zc(o),o=Bl(e,t,n,r),o===null&&tl(e,t,r,Vi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else tl(e,t,r,null,n)}}var Vi=null;function Bl(e,t,n,r){if(Vi=null,e=Oa(r),e=Qt(e),e!==null)if(t=rn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Hc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vi=e,null}function nd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Up()){case Ra:return 1;case Kc:return 4;case Wi:case bp:return 16;case Yc:return 536870912;default:return 16}default:return 16}}var jt=null,Da=null,Ei=null;function rd(){if(Ei)return Ei;var e,t=Da,n=t.length,r,i="value"in jt?jt.value:jt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Ei=i.slice(e,1<r?1-r:void 0)}function _i(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qr(){return!0}function Ds(){return!1}function Le(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?qr:Ds,this.isPropagationStopped=Ds,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qr)},persist:function(){},isPersistent:qr}),t}var Fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fa=Le(Fn),Ur=K({},Fn,{view:0,detail:0}),qp=Le(Ur),Qo,Ko,Gn,vo=K({},Ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ua,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gn&&(Gn&&e.type==="mousemove"?(Qo=e.screenX-Gn.screenX,Ko=e.screenY-Gn.screenY):Ko=Qo=0,Gn=e),Qo)},movementY:function(e){return"movementY"in e?e.movementY:Ko}}),Fs=Le(vo),eh=K({},vo,{dataTransfer:0}),th=Le(eh),nh=K({},Ur,{relatedTarget:0}),Yo=Le(nh),rh=K({},Fn,{animationName:0,elapsedTime:0,pseudoElement:0}),ih=Le(rh),oh=K({},Fn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lh=Le(oh),ah=K({},Fn,{data:0}),Us=Le(ah),sh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ch={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ch[e])?!!t[e]:!1}function Ua(){return dh}var fh=K({},Ur,{key:function(e){if(e.key){var t=sh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_i(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?uh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ua,charCode:function(e){return e.type==="keypress"?_i(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_i(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ph=Le(fh),hh=K({},vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bs=Le(hh),mh=K({},Ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ua}),gh=Le(mh),vh=K({},Fn,{propertyName:0,elapsedTime:0,pseudoElement:0}),xh=Le(vh),yh=K({},vo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wh=Le(yh),kh=[9,13,27,32],ba=ft&&"CompositionEvent"in window,sr=null;ft&&"documentMode"in document&&(sr=document.documentMode);var Sh=ft&&"TextEvent"in window&&!sr,id=ft&&(!ba||sr&&8<sr&&11>=sr),Bs=" ",Ws=!1;function od(e,t){switch(e){case"keyup":return kh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ld(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dn=!1;function jh(e,t){switch(e){case"compositionend":return ld(t);case"keypress":return t.which!==32?null:(Ws=!0,Bs);case"textInput":return e=t.data,e===Bs&&Ws?null:e;default:return null}}function Ah(e,t){if(dn)return e==="compositionend"||!ba&&od(e,t)?(e=rd(),Ei=Da=jt=null,dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return id&&t.locale!=="ko"?null:t.data;default:return null}}var Ch={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ch[e.type]:t==="textarea"}function ad(e,t,n,r){Fc(r),t=Qi(t,"onChange"),0<t.length&&(n=new Fa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ur=null,kr=null;function Eh(e){xd(e,0)}function xo(e){var t=hn(e);if(zc(t))return e}function _h(e,t){if(e==="change")return t}var sd=!1;if(ft){var Go;if(ft){var Xo="oninput"in document;if(!Xo){var $s=document.createElement("div");$s.setAttribute("oninput","return;"),Xo=typeof $s.oninput=="function"}Go=Xo}else Go=!1;sd=Go&&(!document.documentMode||9<document.documentMode)}function Vs(){ur&&(ur.detachEvent("onpropertychange",ud),kr=ur=null)}function ud(e){if(e.propertyName==="value"&&xo(kr)){var t=[];ad(t,kr,e,Oa(e)),Wc(Eh,t)}}function Ph(e,t,n){e==="focusin"?(Vs(),ur=t,kr=n,ur.attachEvent("onpropertychange",ud)):e==="focusout"&&Vs()}function Nh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xo(kr)}function Th(e,t){if(e==="click")return xo(t)}function zh(e,t){if(e==="input"||e==="change")return xo(t)}function Oh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ke=typeof Object.is=="function"?Object.is:Oh;function Sr(e,t){if(Ke(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!jl.call(t,i)||!Ke(e[i],t[i]))return!1}return!0}function Qs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ks(e,t){var n=Qs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qs(n)}}function cd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?cd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function dd(){for(var e=window,t=Ui();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ui(e.document)}return t}function Ba(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Rh(e){var t=dd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&cd(n.ownerDocument.documentElement,n)){if(r!==null&&Ba(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ks(n,o);var l=Ks(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Lh=ft&&"documentMode"in document&&11>=document.documentMode,fn=null,Wl=null,cr=null,Hl=!1;function Ys(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hl||fn==null||fn!==Ui(r)||(r=fn,"selectionStart"in r&&Ba(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),cr&&Sr(cr,r)||(cr=r,r=Qi(Wl,"onSelect"),0<r.length&&(t=new Fa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=fn)))}function ei(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var pn={animationend:ei("Animation","AnimationEnd"),animationiteration:ei("Animation","AnimationIteration"),animationstart:ei("Animation","AnimationStart"),transitionend:ei("Transition","TransitionEnd")},Zo={},fd={};ft&&(fd=document.createElement("div").style,"AnimationEvent"in window||(delete pn.animationend.animation,delete pn.animationiteration.animation,delete pn.animationstart.animation),"TransitionEvent"in window||delete pn.transitionend.transition);function yo(e){if(Zo[e])return Zo[e];if(!pn[e])return e;var t=pn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in fd)return Zo[e]=t[n];return e}var pd=yo("animationend"),hd=yo("animationiteration"),md=yo("animationstart"),gd=yo("transitionend"),vd=new Map,Gs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ft(e,t){vd.set(e,t),nn(t,[e])}for(var Jo=0;Jo<Gs.length;Jo++){var qo=Gs[Jo],Mh=qo.toLowerCase(),Ih=qo[0].toUpperCase()+qo.slice(1);Ft(Mh,"on"+Ih)}Ft(pd,"onAnimationEnd");Ft(hd,"onAnimationIteration");Ft(md,"onAnimationStart");Ft("dblclick","onDoubleClick");Ft("focusin","onFocus");Ft("focusout","onBlur");Ft(gd,"onTransitionEnd");Pn("onMouseEnter",["mouseout","mouseover"]);Pn("onMouseLeave",["mouseout","mouseover"]);Pn("onPointerEnter",["pointerout","pointerover"]);Pn("onPointerLeave",["pointerout","pointerover"]);nn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));nn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));nn("onBeforeInput",["compositionend","keypress","textInput","paste"]);nn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));nn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));nn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var or="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dh=new Set("cancel close invalid load scroll toggle".split(" ").concat(or));function Xs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Mp(r,t,void 0,e),e.currentTarget=null}function xd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==o&&i.isPropagationStopped())break e;Xs(i,s,c),o=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,c=s.currentTarget,s=s.listener,u!==o&&i.isPropagationStopped())break e;Xs(i,s,c),o=u}}}if(Bi)throw e=Fl,Bi=!1,Fl=null,e}function W(e,t){var n=t[Yl];n===void 0&&(n=t[Yl]=new Set);var r=e+"__bubble";n.has(r)||(yd(t,e,2,!1),n.add(r))}function el(e,t,n){var r=0;t&&(r|=4),yd(n,e,r,t)}var ti="_reactListening"+Math.random().toString(36).slice(2);function jr(e){if(!e[ti]){e[ti]=!0,Ec.forEach(function(n){n!=="selectionchange"&&(Dh.has(n)||el(n,!1,e),el(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ti]||(t[ti]=!0,el("selectionchange",!1,t))}}function yd(e,t,n,r){switch(nd(t)){case 1:var i=Zp;break;case 4:i=Jp;break;default:i=Ia}n=i.bind(null,t,n,e),i=void 0,!Dl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function tl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;s!==null;){if(l=Qt(s),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}s=s.parentNode}}r=r.return}Wc(function(){var c=o,h=Oa(n),m=[];e:{var g=vd.get(e);if(g!==void 0){var k=Fa,y=e;switch(e){case"keypress":if(_i(n)===0)break e;case"keydown":case"keyup":k=ph;break;case"focusin":y="focus",k=Yo;break;case"focusout":y="blur",k=Yo;break;case"beforeblur":case"afterblur":k=Yo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Fs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=th;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=gh;break;case pd:case hd:case md:k=ih;break;case gd:k=xh;break;case"scroll":k=qp;break;case"wheel":k=wh;break;case"copy":case"cut":case"paste":k=lh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=bs}var v=(t&4)!==0,j=!v&&e==="scroll",f=v?g!==null?g+"Capture":null:g;v=[];for(var d=c,p;d!==null;){p=d;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,f!==null&&(x=vr(d,f),x!=null&&v.push(Ar(d,x,p)))),j)break;d=d.return}0<v.length&&(g=new k(g,y,null,n,h),m.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",g&&n!==Ml&&(y=n.relatedTarget||n.fromElement)&&(Qt(y)||y[pt]))break e;if((k||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,k?(y=n.relatedTarget||n.toElement,k=c,y=y?Qt(y):null,y!==null&&(j=rn(y),y!==j||y.tag!==5&&y.tag!==6)&&(y=null)):(k=null,y=c),k!==y)){if(v=Fs,x="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(v=bs,x="onPointerLeave",f="onPointerEnter",d="pointer"),j=k==null?g:hn(k),p=y==null?g:hn(y),g=new v(x,d+"leave",k,n,h),g.target=j,g.relatedTarget=p,x=null,Qt(h)===c&&(v=new v(f,d+"enter",y,n,h),v.target=p,v.relatedTarget=j,x=v),j=x,k&&y)t:{for(v=k,f=y,d=0,p=v;p;p=on(p))d++;for(p=0,x=f;x;x=on(x))p++;for(;0<d-p;)v=on(v),d--;for(;0<p-d;)f=on(f),p--;for(;d--;){if(v===f||f!==null&&v===f.alternate)break t;v=on(v),f=on(f)}v=null}else v=null;k!==null&&Zs(m,g,k,v,!1),y!==null&&j!==null&&Zs(m,j,y,v,!0)}}e:{if(g=c?hn(c):window,k=g.nodeName&&g.nodeName.toLowerCase(),k==="select"||k==="input"&&g.type==="file")var C=_h;else if(Hs(g))if(sd)C=zh;else{C=Nh;var _=Ph}else(k=g.nodeName)&&k.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(C=Th);if(C&&(C=C(e,c))){ad(m,C,n,h);break e}_&&_(e,g,c),e==="focusout"&&(_=g._wrapperState)&&_.controlled&&g.type==="number"&&Tl(g,"number",g.value)}switch(_=c?hn(c):window,e){case"focusin":(Hs(_)||_.contentEditable==="true")&&(fn=_,Wl=c,cr=null);break;case"focusout":cr=Wl=fn=null;break;case"mousedown":Hl=!0;break;case"contextmenu":case"mouseup":case"dragend":Hl=!1,Ys(m,n,h);break;case"selectionchange":if(Lh)break;case"keydown":case"keyup":Ys(m,n,h)}var A;if(ba)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else dn?od(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(id&&n.locale!=="ko"&&(dn||T!=="onCompositionStart"?T==="onCompositionEnd"&&dn&&(A=rd()):(jt=h,Da="value"in jt?jt.value:jt.textContent,dn=!0)),_=Qi(c,T),0<_.length&&(T=new Us(T,e,null,n,h),m.push({event:T,listeners:_}),A?T.data=A:(A=ld(n),A!==null&&(T.data=A)))),(A=Sh?jh(e,n):Ah(e,n))&&(c=Qi(c,"onBeforeInput"),0<c.length&&(h=new Us("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=A))}xd(m,t)})}function Ar(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=vr(e,n),o!=null&&r.unshift(Ar(e,o,i)),o=vr(e,t),o!=null&&r.push(Ar(e,o,i))),e=e.return}return r}function on(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Zs(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,i?(u=vr(n,o),u!=null&&l.unshift(Ar(n,u,s))):i||(u=vr(n,o),u!=null&&l.push(Ar(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Fh=/\r\n?/g,Uh=/\u0000|\uFFFD/g;function Js(e){return(typeof e=="string"?e:""+e).replace(Fh,`
`).replace(Uh,"")}function ni(e,t,n){if(t=Js(t),Js(e)!==t&&n)throw Error(S(425))}function Ki(){}var $l=null,Vl=null;function Ql(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kl=typeof setTimeout=="function"?setTimeout:void 0,bh=typeof clearTimeout=="function"?clearTimeout:void 0,qs=typeof Promise=="function"?Promise:void 0,Bh=typeof queueMicrotask=="function"?queueMicrotask:typeof qs<"u"?function(e){return qs.resolve(null).then(e).catch(Wh)}:Kl;function Wh(e){setTimeout(function(){throw e})}function nl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),wr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);wr(t)}function Tt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function eu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Un=Math.random().toString(36).slice(2),qe="__reactFiber$"+Un,Cr="__reactProps$"+Un,pt="__reactContainer$"+Un,Yl="__reactEvents$"+Un,Hh="__reactListeners$"+Un,$h="__reactHandles$"+Un;function Qt(e){var t=e[qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pt]||n[qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=eu(e);e!==null;){if(n=e[qe])return n;e=eu(e)}return t}e=n,n=e.parentNode}return null}function br(e){return e=e[qe]||e[pt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function hn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function wo(e){return e[Cr]||null}var Gl=[],mn=-1;function Ut(e){return{current:e}}function H(e){0>mn||(e.current=Gl[mn],Gl[mn]=null,mn--)}function B(e,t){mn++,Gl[mn]=e.current,e.current=t}var Dt={},ge=Ut(Dt),je=Ut(!1),Zt=Dt;function Nn(e,t){var n=e.type.contextTypes;if(!n)return Dt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ae(e){return e=e.childContextTypes,e!=null}function Yi(){H(je),H(ge)}function tu(e,t,n){if(ge.current!==Dt)throw Error(S(168));B(ge,t),B(je,n)}function wd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,Pp(e)||"Unknown",i));return K({},n,r)}function Gi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Dt,Zt=ge.current,B(ge,e),B(je,je.current),!0}function nu(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=wd(e,t,Zt),r.__reactInternalMemoizedMergedChildContext=e,H(je),H(ge),B(ge,e)):H(je),B(je,n)}var st=null,ko=!1,rl=!1;function kd(e){st===null?st=[e]:st.push(e)}function Vh(e){ko=!0,kd(e)}function bt(){if(!rl&&st!==null){rl=!0;var e=0,t=U;try{var n=st;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}st=null,ko=!1}catch(i){throw st!==null&&(st=st.slice(e+1)),Qc(Ra,bt),i}finally{U=t,rl=!1}}return null}var gn=[],vn=0,Xi=null,Zi=0,Me=[],Ie=0,Jt=null,ut=1,ct="";function $t(e,t){gn[vn++]=Zi,gn[vn++]=Xi,Xi=e,Zi=t}function Sd(e,t,n){Me[Ie++]=ut,Me[Ie++]=ct,Me[Ie++]=Jt,Jt=e;var r=ut;e=ct;var i=32-Ve(r)-1;r&=~(1<<i),n+=1;var o=32-Ve(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,ut=1<<32-Ve(t)+i|n<<i|r,ct=o+e}else ut=1<<o|n<<i|r,ct=e}function Wa(e){e.return!==null&&($t(e,1),Sd(e,1,0))}function Ha(e){for(;e===Xi;)Xi=gn[--vn],gn[vn]=null,Zi=gn[--vn],gn[vn]=null;for(;e===Jt;)Jt=Me[--Ie],Me[Ie]=null,ct=Me[--Ie],Me[Ie]=null,ut=Me[--Ie],Me[Ie]=null}var Te=null,Ne=null,$=!1,$e=null;function jd(e,t){var n=De(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ru(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Te=e,Ne=Tt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Te=e,Ne=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Jt!==null?{id:ut,overflow:ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=De(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Te=e,Ne=null,!0):!1;default:return!1}}function Xl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Zl(e){if($){var t=Ne;if(t){var n=t;if(!ru(e,t)){if(Xl(e))throw Error(S(418));t=Tt(n.nextSibling);var r=Te;t&&ru(e,t)?jd(r,n):(e.flags=e.flags&-4097|2,$=!1,Te=e)}}else{if(Xl(e))throw Error(S(418));e.flags=e.flags&-4097|2,$=!1,Te=e}}}function iu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Te=e}function ri(e){if(e!==Te)return!1;if(!$)return iu(e),$=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ql(e.type,e.memoizedProps)),t&&(t=Ne)){if(Xl(e))throw Ad(),Error(S(418));for(;t;)jd(e,t),t=Tt(t.nextSibling)}if(iu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ne=Tt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ne=null}}else Ne=Te?Tt(e.stateNode.nextSibling):null;return!0}function Ad(){for(var e=Ne;e;)e=Tt(e.nextSibling)}function Tn(){Ne=Te=null,$=!1}function $a(e){$e===null?$e=[e]:$e.push(e)}var Qh=gt.ReactCurrentBatchConfig;function We(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ji=Ut(null),qi=null,xn=null,Va=null;function Qa(){Va=xn=qi=null}function Ka(e){var t=Ji.current;H(Ji),e._currentValue=t}function Jl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Cn(e,t){qi=e,Va=xn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function Ue(e){var t=e._currentValue;if(Va!==e)if(e={context:e,memoizedValue:t,next:null},xn===null){if(qi===null)throw Error(S(308));xn=e,qi.dependencies={lanes:0,firstContext:e}}else xn=xn.next=e;return t}var Kt=null;function Ya(e){Kt===null?Kt=[e]:Kt.push(e)}function Cd(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ya(t)):(n.next=i.next,i.next=n),t.interleaved=n,ht(e,r)}function ht(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var wt=!1;function Ga(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ed(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function dt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function zt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ht(e,n)}return i=r.interleaved,i===null?(t.next=t,Ya(r)):(t.next=i.next,i.next=t),r.interleaved=t,ht(e,n)}function Pi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,La(e,n)}}function ou(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function eo(e,t,n,r){var i=e.updateQueue;wt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,c=u.next;u.next=null,l===null?o=c:l.next=c,l=u;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==l&&(s===null?h.firstBaseUpdate=c:s.next=c,h.lastBaseUpdate=u))}if(o!==null){var m=i.baseState;l=0,h=c=u=null,s=o;do{var g=s.lane,k=s.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:k,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,v=s;switch(g=t,k=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){m=y.call(k,m,g);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,g=typeof y=="function"?y.call(k,m,g):y,g==null)break e;m=K({},m,g);break e;case 2:wt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else k={eventTime:k,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(c=h=k,u=m):h=h.next=k,l|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);en|=l,e.lanes=l,e.memoizedState=m}}function lu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var _d=new Cc.Component().refs;function ql(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var So={isMounted:function(e){return(e=e._reactInternals)?rn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=xe(),i=Rt(e),o=dt(r,i);o.payload=t,n!=null&&(o.callback=n),t=zt(e,o,i),t!==null&&(Qe(t,e,i,r),Pi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=xe(),i=Rt(e),o=dt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=zt(e,o,i),t!==null&&(Qe(t,e,i,r),Pi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=xe(),r=Rt(e),i=dt(n,r);i.tag=2,t!=null&&(i.callback=t),t=zt(e,i,r),t!==null&&(Qe(t,e,r,n),Pi(t,e,r))}};function au(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Sr(n,r)||!Sr(i,o):!0}function Pd(e,t,n){var r=!1,i=Dt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ue(o):(i=Ae(t)?Zt:ge.current,r=t.contextTypes,o=(r=r!=null)?Nn(e,i):Dt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=So,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function su(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&So.enqueueReplaceState(t,t.state,null)}function ea(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=_d,Ga(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ue(o):(o=Ae(t)?Zt:ge.current,i.context=Nn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ql(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&So.enqueueReplaceState(i,i.state,null),eo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Xn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;s===_d&&(s=i.refs={}),l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function ii(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function uu(e){var t=e._init;return t(e._payload)}function Nd(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=Lt(f,d),f.index=0,f.sibling=null,f}function o(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,p,x){return d===null||d.tag!==6?(d=cl(p,f.mode,x),d.return=f,d):(d=i(d,p),d.return=f,d)}function u(f,d,p,x){var C=p.type;return C===cn?h(f,d,p.props.children,x,p.key):d!==null&&(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===yt&&uu(C)===d.type)?(x=i(d,p.props),x.ref=Xn(f,d,p),x.return=f,x):(x=Li(p.type,p.key,p.props,null,f.mode,x),x.ref=Xn(f,d,p),x.return=f,x)}function c(f,d,p,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=dl(p,f.mode,x),d.return=f,d):(d=i(d,p.children||[]),d.return=f,d)}function h(f,d,p,x,C){return d===null||d.tag!==7?(d=Xt(p,f.mode,x,C),d.return=f,d):(d=i(d,p),d.return=f,d)}function m(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=cl(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Kr:return p=Li(d.type,d.key,d.props,null,f.mode,p),p.ref=Xn(f,null,d),p.return=f,p;case un:return d=dl(d,f.mode,p),d.return=f,d;case yt:var x=d._init;return m(f,x(d._payload),p)}if(rr(d)||Vn(d))return d=Xt(d,f.mode,p,null),d.return=f,d;ii(f,d)}return null}function g(f,d,p,x){var C=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return C!==null?null:s(f,d,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Kr:return p.key===C?u(f,d,p,x):null;case un:return p.key===C?c(f,d,p,x):null;case yt:return C=p._init,g(f,d,C(p._payload),x)}if(rr(p)||Vn(p))return C!==null?null:h(f,d,p,x,null);ii(f,p)}return null}function k(f,d,p,x,C){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(p)||null,s(d,f,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Kr:return f=f.get(x.key===null?p:x.key)||null,u(d,f,x,C);case un:return f=f.get(x.key===null?p:x.key)||null,c(d,f,x,C);case yt:var _=x._init;return k(f,d,p,_(x._payload),C)}if(rr(x)||Vn(x))return f=f.get(p)||null,h(d,f,x,C,null);ii(d,x)}return null}function y(f,d,p,x){for(var C=null,_=null,A=d,T=d=0,b=null;A!==null&&T<p.length;T++){A.index>T?(b=A,A=null):b=A.sibling;var z=g(f,A,p[T],x);if(z===null){A===null&&(A=b);break}e&&A&&z.alternate===null&&t(f,A),d=o(z,d,T),_===null?C=z:_.sibling=z,_=z,A=b}if(T===p.length)return n(f,A),$&&$t(f,T),C;if(A===null){for(;T<p.length;T++)A=m(f,p[T],x),A!==null&&(d=o(A,d,T),_===null?C=A:_.sibling=A,_=A);return $&&$t(f,T),C}for(A=r(f,A);T<p.length;T++)b=k(A,f,T,p[T],x),b!==null&&(e&&b.alternate!==null&&A.delete(b.key===null?T:b.key),d=o(b,d,T),_===null?C=b:_.sibling=b,_=b);return e&&A.forEach(function(_e){return t(f,_e)}),$&&$t(f,T),C}function v(f,d,p,x){var C=Vn(p);if(typeof C!="function")throw Error(S(150));if(p=C.call(p),p==null)throw Error(S(151));for(var _=C=null,A=d,T=d=0,b=null,z=p.next();A!==null&&!z.done;T++,z=p.next()){A.index>T?(b=A,A=null):b=A.sibling;var _e=g(f,A,z.value,x);if(_e===null){A===null&&(A=b);break}e&&A&&_e.alternate===null&&t(f,A),d=o(_e,d,T),_===null?C=_e:_.sibling=_e,_=_e,A=b}if(z.done)return n(f,A),$&&$t(f,T),C;if(A===null){for(;!z.done;T++,z=p.next())z=m(f,z.value,x),z!==null&&(d=o(z,d,T),_===null?C=z:_.sibling=z,_=z);return $&&$t(f,T),C}for(A=r(f,A);!z.done;T++,z=p.next())z=k(A,f,T,z.value,x),z!==null&&(e&&z.alternate!==null&&A.delete(z.key===null?T:z.key),d=o(z,d,T),_===null?C=z:_.sibling=z,_=z);return e&&A.forEach(function(Hn){return t(f,Hn)}),$&&$t(f,T),C}function j(f,d,p,x){if(typeof p=="object"&&p!==null&&p.type===cn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Kr:e:{for(var C=p.key,_=d;_!==null;){if(_.key===C){if(C=p.type,C===cn){if(_.tag===7){n(f,_.sibling),d=i(_,p.props.children),d.return=f,f=d;break e}}else if(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===yt&&uu(C)===_.type){n(f,_.sibling),d=i(_,p.props),d.ref=Xn(f,_,p),d.return=f,f=d;break e}n(f,_);break}else t(f,_);_=_.sibling}p.type===cn?(d=Xt(p.props.children,f.mode,x,p.key),d.return=f,f=d):(x=Li(p.type,p.key,p.props,null,f.mode,x),x.ref=Xn(f,d,p),x.return=f,f=x)}return l(f);case un:e:{for(_=p.key;d!==null;){if(d.key===_)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=i(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=dl(p,f.mode,x),d.return=f,f=d}return l(f);case yt:return _=p._init,j(f,d,_(p._payload),x)}if(rr(p))return y(f,d,p,x);if(Vn(p))return v(f,d,p,x);ii(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=i(d,p),d.return=f,f=d):(n(f,d),d=cl(p,f.mode,x),d.return=f,f=d),l(f)):n(f,d)}return j}var zn=Nd(!0),Td=Nd(!1),Br={},tt=Ut(Br),Er=Ut(Br),_r=Ut(Br);function Yt(e){if(e===Br)throw Error(S(174));return e}function Xa(e,t){switch(B(_r,t),B(Er,e),B(tt,Br),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ol(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ol(t,e)}H(tt),B(tt,t)}function On(){H(tt),H(Er),H(_r)}function zd(e){Yt(_r.current);var t=Yt(tt.current),n=Ol(t,e.type);t!==n&&(B(Er,e),B(tt,n))}function Za(e){Er.current===e&&(H(tt),H(Er))}var V=Ut(0);function to(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var il=[];function Ja(){for(var e=0;e<il.length;e++)il[e]._workInProgressVersionPrimary=null;il.length=0}var Ni=gt.ReactCurrentDispatcher,ol=gt.ReactCurrentBatchConfig,qt=0,Q=null,ee=null,re=null,no=!1,dr=!1,Pr=0,Kh=0;function ue(){throw Error(S(321))}function qa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ke(e[n],t[n]))return!1;return!0}function es(e,t,n,r,i,o){if(qt=o,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ni.current=e===null||e.memoizedState===null?Zh:Jh,e=n(r,i),dr){o=0;do{if(dr=!1,Pr=0,25<=o)throw Error(S(301));o+=1,re=ee=null,t.updateQueue=null,Ni.current=qh,e=n(r,i)}while(dr)}if(Ni.current=ro,t=ee!==null&&ee.next!==null,qt=0,re=ee=Q=null,no=!1,t)throw Error(S(300));return e}function ts(){var e=Pr!==0;return Pr=0,e}function Xe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?Q.memoizedState=re=e:re=re.next=e,re}function be(){if(ee===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=re===null?Q.memoizedState:re.next;if(t!==null)re=t,ee=e;else{if(e===null)throw Error(S(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},re===null?Q.memoizedState=re=e:re=re.next=e}return re}function Nr(e,t){return typeof t=="function"?t(e):t}function ll(e){var t=be(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=ee,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,u=null,c=o;do{var h=c.lane;if((qt&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=m,l=r):u=u.next=m,Q.lanes|=h,en|=h}c=c.next}while(c!==null&&c!==o);u===null?l=r:u.next=s,Ke(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Q.lanes|=o,en|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function al(e){var t=be(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Ke(o,t.memoizedState)||(Se=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Od(){}function Rd(e,t){var n=Q,r=be(),i=t(),o=!Ke(r.memoizedState,i);if(o&&(r.memoizedState=i,Se=!0),r=r.queue,ns(Id.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||re!==null&&re.memoizedState.tag&1){if(n.flags|=2048,Tr(9,Md.bind(null,n,r,i,t),void 0,null),ie===null)throw Error(S(349));qt&30||Ld(n,t,i)}return i}function Ld(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Md(e,t,n,r){t.value=n,t.getSnapshot=r,Dd(t)&&Fd(e)}function Id(e,t,n){return n(function(){Dd(t)&&Fd(e)})}function Dd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ke(e,n)}catch{return!0}}function Fd(e){var t=ht(e,1);t!==null&&Qe(t,e,1,-1)}function cu(e){var t=Xe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Nr,lastRenderedState:e},t.queue=e,e=e.dispatch=Xh.bind(null,Q,e),[t.memoizedState,e]}function Tr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ud(){return be().memoizedState}function Ti(e,t,n,r){var i=Xe();Q.flags|=e,i.memoizedState=Tr(1|t,n,void 0,r===void 0?null:r)}function jo(e,t,n,r){var i=be();r=r===void 0?null:r;var o=void 0;if(ee!==null){var l=ee.memoizedState;if(o=l.destroy,r!==null&&qa(r,l.deps)){i.memoizedState=Tr(t,n,o,r);return}}Q.flags|=e,i.memoizedState=Tr(1|t,n,o,r)}function du(e,t){return Ti(8390656,8,e,t)}function ns(e,t){return jo(2048,8,e,t)}function bd(e,t){return jo(4,2,e,t)}function Bd(e,t){return jo(4,4,e,t)}function Wd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hd(e,t,n){return n=n!=null?n.concat([e]):null,jo(4,4,Wd.bind(null,t,e),n)}function rs(){}function $d(e,t){var n=be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&qa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Vd(e,t){var n=be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&qa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Qd(e,t,n){return qt&21?(Ke(n,t)||(n=Gc(),Q.lanes|=n,en|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function Yh(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=ol.transition;ol.transition={};try{e(!1),t()}finally{U=n,ol.transition=r}}function Kd(){return be().memoizedState}function Gh(e,t,n){var r=Rt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Yd(e))Gd(t,n);else if(n=Cd(e,t,n,r),n!==null){var i=xe();Qe(n,e,r,i),Xd(n,t,r)}}function Xh(e,t,n){var r=Rt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yd(e))Gd(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,Ke(s,l)){var u=t.interleaved;u===null?(i.next=i,Ya(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=Cd(e,t,i,r),n!==null&&(i=xe(),Qe(n,e,r,i),Xd(n,t,r))}}function Yd(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function Gd(e,t){dr=no=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,La(e,n)}}var ro={readContext:Ue,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},Zh={readContext:Ue,useCallback:function(e,t){return Xe().memoizedState=[e,t===void 0?null:t],e},useContext:Ue,useEffect:du,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ti(4194308,4,Wd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ti(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ti(4,2,e,t)},useMemo:function(e,t){var n=Xe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Xe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Gh.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var t=Xe();return e={current:e},t.memoizedState=e},useState:cu,useDebugValue:rs,useDeferredValue:function(e){return Xe().memoizedState=e},useTransition:function(){var e=cu(!1),t=e[0];return e=Yh.bind(null,e[1]),Xe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Q,i=Xe();if($){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ie===null)throw Error(S(349));qt&30||Ld(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,du(Id.bind(null,r,o,e),[e]),r.flags|=2048,Tr(9,Md.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Xe(),t=ie.identifierPrefix;if($){var n=ct,r=ut;n=(r&~(1<<32-Ve(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Pr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Kh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Jh={readContext:Ue,useCallback:$d,useContext:Ue,useEffect:ns,useImperativeHandle:Hd,useInsertionEffect:bd,useLayoutEffect:Bd,useMemo:Vd,useReducer:ll,useRef:Ud,useState:function(){return ll(Nr)},useDebugValue:rs,useDeferredValue:function(e){var t=be();return Qd(t,ee.memoizedState,e)},useTransition:function(){var e=ll(Nr)[0],t=be().memoizedState;return[e,t]},useMutableSource:Od,useSyncExternalStore:Rd,useId:Kd,unstable_isNewReconciler:!1},qh={readContext:Ue,useCallback:$d,useContext:Ue,useEffect:ns,useImperativeHandle:Hd,useInsertionEffect:bd,useLayoutEffect:Bd,useMemo:Vd,useReducer:al,useRef:Ud,useState:function(){return al(Nr)},useDebugValue:rs,useDeferredValue:function(e){var t=be();return ee===null?t.memoizedState=e:Qd(t,ee.memoizedState,e)},useTransition:function(){var e=al(Nr)[0],t=be().memoizedState;return[e,t]},useMutableSource:Od,useSyncExternalStore:Rd,useId:Kd,unstable_isNewReconciler:!1};function Rn(e,t){try{var n="",r=t;do n+=_p(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function sl(e,t,n){return{value:e,source:null,stack:null,digest:t??null}}function ta(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var em=typeof WeakMap=="function"?WeakMap:Map;function Zd(e,t,n){n=dt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){oo||(oo=!0,da=r),ta(e,t)},n}function Jd(e,t,n){n=dt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ta(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ta(e,t),typeof r!="function"&&(Ot===null?Ot=new Set([this]):Ot.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function fu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new em;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=hm.bind(null,e,t,n),t.then(e,e))}function pu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function hu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=dt(-1,1),t.tag=2,zt(n,t,1))),n.lanes|=1),e)}var tm=gt.ReactCurrentOwner,Se=!1;function ve(e,t,n,r){t.child=e===null?Td(t,null,n,r):zn(t,e.child,n,r)}function mu(e,t,n,r,i){n=n.render;var o=t.ref;return Cn(t,i),r=es(e,t,n,r,o,i),n=ts(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,mt(e,t,i)):($&&n&&Wa(t),t.flags|=1,ve(e,t,r,i),t.child)}function gu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ds(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,qd(e,t,o,r,i)):(e=Li(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Sr,n(l,r)&&e.ref===t.ref)return mt(e,t,i)}return t.flags|=1,e=Lt(o,r),e.ref=t.ref,e.return=t,t.child=e}function qd(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Sr(o,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,mt(e,t,i)}return na(e,t,n,r,i)}function ef(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(wn,Pe),Pe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(wn,Pe),Pe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,B(wn,Pe),Pe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,B(wn,Pe),Pe|=r;return ve(e,t,i,n),t.child}function tf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function na(e,t,n,r,i){var o=Ae(n)?Zt:ge.current;return o=Nn(t,o),Cn(t,i),n=es(e,t,n,r,o,i),r=ts(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,mt(e,t,i)):($&&r&&Wa(t),t.flags|=1,ve(e,t,n,i),t.child)}function vu(e,t,n,r,i){if(Ae(n)){var o=!0;Gi(t)}else o=!1;if(Cn(t,i),t.stateNode===null)zi(e,t),Pd(t,n,r),ea(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ue(c):(c=Ae(n)?Zt:ge.current,c=Nn(t,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==c)&&su(t,l,r,c),wt=!1;var g=t.memoizedState;l.state=g,eo(t,r,l,i),u=t.memoizedState,s!==r||g!==u||je.current||wt?(typeof h=="function"&&(ql(t,n,h,r),u=t.memoizedState),(s=wt||au(t,n,s,r,g,u,c))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Ed(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:We(t.type,s),l.props=c,m=t.pendingProps,g=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ue(u):(u=Ae(n)?Zt:ge.current,u=Nn(t,u));var k=n.getDerivedStateFromProps;(h=typeof k=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==m||g!==u)&&su(t,l,r,u),wt=!1,g=t.memoizedState,l.state=g,eo(t,r,l,i);var y=t.memoizedState;s!==m||g!==y||je.current||wt?(typeof k=="function"&&(ql(t,n,k,r),y=t.memoizedState),(c=wt||au(t,n,c,r,g,y,u)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return ra(e,t,n,r,o,i)}function ra(e,t,n,r,i,o){tf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&nu(t,n,!1),mt(e,t,o);r=t.stateNode,tm.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=zn(t,e.child,null,o),t.child=zn(t,null,s,o)):ve(e,t,s,o),t.memoizedState=r.state,i&&nu(t,n,!0),t.child}function nf(e){var t=e.stateNode;t.pendingContext?tu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&tu(e,t.context,!1),Xa(e,t.containerInfo)}function xu(e,t,n,r,i){return Tn(),$a(i),t.flags|=256,ve(e,t,n,r),t.child}var ia={dehydrated:null,treeContext:null,retryLane:0};function oa(e){return{baseLanes:e,cachePool:null,transitions:null}}function rf(e,t,n){var r=t.pendingProps,i=V.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),B(V,i&1),e===null)return Zl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Eo(l,r,0,null),e=Xt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=oa(n),t.memoizedState=ia,e):is(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return nm(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Lt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Lt(s,o):(o=Xt(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?oa(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=ia,r}return o=e.child,e=o.sibling,r=Lt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function is(e,t){return t=Eo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function oi(e,t,n,r){return r!==null&&$a(r),zn(t,e.child,null,n),e=is(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nm(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=sl(Error(S(422))),oi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Eo({mode:"visible",children:r.children},i,0,null),o=Xt(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&zn(t,e.child,null,l),t.child.memoizedState=oa(l),t.memoizedState=ia,o);if(!(t.mode&1))return oi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(S(419)),r=sl(o,r),oi(e,t,l,r)}if(s=(l&e.childLanes)!==0,Se||s){if(r=ie,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ht(e,i),Qe(r,e,i,-1))}return cs(),r=sl(Error(S(421))),oi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=mm.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ne=Tt(i.nextSibling),Te=t,$=!0,$e=null,e!==null&&(Me[Ie++]=ut,Me[Ie++]=ct,Me[Ie++]=Jt,ut=e.id,ct=e.overflow,Jt=t),t=is(t,r.children),t.flags|=4096,t)}function yu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Jl(e.return,t,n)}function ul(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function of(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ve(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yu(e,n,t);else if(e.tag===19)yu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(V,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&to(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ul(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&to(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ul(t,!0,n,null,o);break;case"together":ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function mt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),en|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Lt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Lt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function rm(e,t,n){switch(t.tag){case 3:nf(t),Tn();break;case 5:zd(t);break;case 1:Ae(t.type)&&Gi(t);break;case 4:Xa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;B(Ji,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?rf(e,t,n):(B(V,V.current&1),e=mt(e,t,n),e!==null?e.sibling:null);B(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return of(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,ef(e,t,n)}return mt(e,t,n)}var lf,la,af,sf;lf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};la=function(){};af=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Yt(tt.current);var o=null;switch(n){case"input":i=Pl(e,i),r=Pl(e,r),o=[];break;case"select":i=K({},i,{value:void 0}),r=K({},r,{value:void 0}),o=[];break;case"textarea":i=zl(e,i),r=zl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ki)}Rl(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(mr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(mr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&W("scroll",e),o||s===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};sf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Zn(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function im(e,t,n){var r=t.pendingProps;switch(Ha(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return Ae(t.type)&&Yi(),ce(t),null;case 3:return r=t.stateNode,On(),H(je),H(ge),Ja(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ri(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$e!==null&&(ha($e),$e=null))),la(e,t),ce(t),null;case 5:Za(t);var i=Yt(_r.current);if(n=t.type,e!==null&&t.stateNode!=null)af(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return ce(t),null}if(e=Yt(tt.current),ri(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[qe]=t,r[Cr]=o,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(i=0;i<or.length;i++)W(or[i],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":Ps(r,o),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},W("invalid",r);break;case"textarea":Ts(r,o),W("invalid",r)}Rl(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&ni(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&ni(r.textContent,s,e),i=["children",""+s]):mr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&W("scroll",r)}switch(n){case"input":Yr(r),Ns(r,o,!0);break;case"textarea":Yr(r),zs(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ki)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Lc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[qe]=t,e[Cr]=r,lf(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ll(n,r),n){case"dialog":W("cancel",e),W("close",e),i=r;break;case"iframe":case"object":case"embed":W("load",e),i=r;break;case"video":case"audio":for(i=0;i<or.length;i++)W(or[i],e);i=r;break;case"source":W("error",e),i=r;break;case"img":case"image":case"link":W("error",e),W("load",e),i=r;break;case"details":W("toggle",e),i=r;break;case"input":Ps(e,r),i=Pl(e,r),W("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=K({},r,{value:void 0}),W("invalid",e);break;case"textarea":Ts(e,r),i=zl(e,r),W("invalid",e);break;default:i=r}Rl(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?Dc(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Mc(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&gr(e,u):typeof u=="number"&&gr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(mr.hasOwnProperty(o)?u!=null&&o==="onScroll"&&W("scroll",e):u!=null&&Pa(e,o,u,l))}switch(n){case"input":Yr(e),Ns(e,r,!1);break;case"textarea":Yr(e),zs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+It(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?kn(e,!!r.multiple,o,!1):r.defaultValue!=null&&kn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ki)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)sf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Yt(_r.current),Yt(tt.current),ri(t)){if(r=t.stateNode,n=t.memoizedProps,r[qe]=t,(o=r.nodeValue!==n)&&(e=Te,e!==null))switch(e.tag){case 3:ni(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ni(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qe]=t,t.stateNode=r}return ce(t),null;case 13:if(H(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&Ne!==null&&t.mode&1&&!(t.flags&128))Ad(),Tn(),t.flags|=98560,o=!1;else if(o=ri(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[qe]=t}else Tn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),o=!1}else $e!==null&&(ha($e),$e=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?te===0&&(te=3):cs())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return On(),la(e,t),e===null&&jr(t.stateNode.containerInfo),ce(t),null;case 10:return Ka(t.type._context),ce(t),null;case 17:return Ae(t.type)&&Yi(),ce(t),null;case 19:if(H(V),o=t.memoizedState,o===null)return ce(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Zn(o,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=to(e),l!==null){for(t.flags|=128,Zn(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(V,V.current&1|2),t.child}e=e.sibling}o.tail!==null&&Z()>Ln&&(t.flags|=128,r=!0,Zn(o,!1),t.lanes=4194304)}else{if(!r)if(e=to(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Zn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!$)return ce(t),null}else 2*Z()-o.renderingStartTime>Ln&&n!==1073741824&&(t.flags|=128,r=!0,Zn(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Z(),t.sibling=null,n=V.current,B(V,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return us(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Pe&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function om(e,t){switch(Ha(t),t.tag){case 1:return Ae(t.type)&&Yi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return On(),H(je),H(ge),Ja(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Za(t),null;case 13:if(H(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Tn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(V),null;case 4:return On(),null;case 10:return Ka(t.type._context),null;case 22:case 23:return us(),null;case 24:return null;default:return null}}var li=!1,me=!1,lm=typeof WeakSet=="function"?WeakSet:Set,P=null;function yn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Y(e,t,r)}else n.current=null}function aa(e,t,n){try{n()}catch(r){Y(e,t,r)}}var wu=!1;function am(e,t){if($l=$i,e=dd(),Ba(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,c=0,h=0,m=e,g=null;t:for(;;){for(var k;m!==n||i!==0&&m.nodeType!==3||(s=l+i),m!==o||r!==0&&m.nodeType!==3||(u=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(k=m.firstChild)!==null;)g=m,m=k;for(;;){if(m===e)break t;if(g===n&&++c===i&&(s=l),g===o&&++h===r&&(u=l),(k=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=k}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vl={focusedElem:e,selectionRange:n},$i=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,j=y.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:We(t.type,v),j);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(x){Y(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return y=wu,wu=!1,y}function fr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&aa(t,n,o)}i=i.next}while(i!==r)}}function Ao(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function sa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function uf(e){var t=e.alternate;t!==null&&(e.alternate=null,uf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qe],delete t[Cr],delete t[Yl],delete t[Hh],delete t[$h])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cf(e){return e.tag===5||e.tag===3||e.tag===4}function ku(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ua(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ki));else if(r!==4&&(e=e.child,e!==null))for(ua(e,t,n),e=e.sibling;e!==null;)ua(e,t,n),e=e.sibling}function ca(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ca(e,t,n),e=e.sibling;e!==null;)ca(e,t,n),e=e.sibling}var oe=null,He=!1;function xt(e,t,n){for(n=n.child;n!==null;)df(e,t,n),n=n.sibling}function df(e,t,n){if(et&&typeof et.onCommitFiberUnmount=="function")try{et.onCommitFiberUnmount(go,n)}catch{}switch(n.tag){case 5:me||yn(n,t);case 6:var r=oe,i=He;oe=null,xt(e,t,n),oe=r,He=i,oe!==null&&(He?(e=oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):oe.removeChild(n.stateNode));break;case 18:oe!==null&&(He?(e=oe,n=n.stateNode,e.nodeType===8?nl(e.parentNode,n):e.nodeType===1&&nl(e,n),wr(e)):nl(oe,n.stateNode));break;case 4:r=oe,i=He,oe=n.stateNode.containerInfo,He=!0,xt(e,t,n),oe=r,He=i;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&aa(n,t,l),i=i.next}while(i!==r)}xt(e,t,n);break;case 1:if(!me&&(yn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Y(n,t,s)}xt(e,t,n);break;case 21:xt(e,t,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,xt(e,t,n),me=r):xt(e,t,n);break;default:xt(e,t,n)}}function Su(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new lm),t.forEach(function(r){var i=gm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Be(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:oe=s.stateNode,He=!1;break e;case 3:oe=s.stateNode.containerInfo,He=!0;break e;case 4:oe=s.stateNode.containerInfo,He=!0;break e}s=s.return}if(oe===null)throw Error(S(160));df(o,l,i),oe=null,He=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Y(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ff(t,e),t=t.sibling}function ff(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Be(t,e),Ge(e),r&4){try{fr(3,e,e.return),Ao(3,e)}catch(v){Y(e,e.return,v)}try{fr(5,e,e.return)}catch(v){Y(e,e.return,v)}}break;case 1:Be(t,e),Ge(e),r&512&&n!==null&&yn(n,n.return);break;case 5:if(Be(t,e),Ge(e),r&512&&n!==null&&yn(n,n.return),e.flags&32){var i=e.stateNode;try{gr(i,"")}catch(v){Y(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Oc(i,o),Ll(s,l);var c=Ll(s,o);for(l=0;l<u.length;l+=2){var h=u[l],m=u[l+1];h==="style"?Dc(i,m):h==="dangerouslySetInnerHTML"?Mc(i,m):h==="children"?gr(i,m):Pa(i,h,m,c)}switch(s){case"input":Nl(i,o);break;case"textarea":Rc(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var k=o.value;k!=null?kn(i,!!o.multiple,k,!1):g!==!!o.multiple&&(o.defaultValue!=null?kn(i,!!o.multiple,o.defaultValue,!0):kn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Cr]=o}catch(v){Y(e,e.return,v)}}break;case 6:if(Be(t,e),Ge(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){Y(e,e.return,v)}}break;case 3:if(Be(t,e),Ge(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{wr(t.containerInfo)}catch(v){Y(e,e.return,v)}break;case 4:Be(t,e),Ge(e);break;case 13:Be(t,e),Ge(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(as=Z())),r&4&&Su(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(me=(c=me)||h,Be(t,e),me=c):Be(t,e),Ge(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(P=e,h=e.child;h!==null;){for(m=P=h;P!==null;){switch(g=P,k=g.child,g.tag){case 0:case 11:case 14:case 15:fr(4,g,g.return);break;case 1:yn(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){Y(r,n,v)}}break;case 5:yn(g,g.return);break;case 22:if(g.memoizedState!==null){Au(m);continue}}k!==null?(k.return=g,P=k):Au(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{i=m.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=m.stateNode,u=m.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Ic("display",l))}catch(v){Y(e,e.return,v)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(v){Y(e,e.return,v)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Be(t,e),Ge(e),r&4&&Su(e);break;case 21:break;default:Be(t,e),Ge(e)}}function Ge(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(cf(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(gr(i,""),r.flags&=-33);var o=ku(e);ca(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=ku(e);ua(e,s,l);break;default:throw Error(S(161))}}catch(u){Y(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sm(e,t,n){P=e,pf(e)}function pf(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var i=P,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||li;if(!l){var s=i.alternate,u=s!==null&&s.memoizedState!==null||me;s=li;var c=me;if(li=l,(me=u)&&!c)for(P=i;P!==null;)l=P,u=l.child,l.tag===22&&l.memoizedState!==null?Cu(i):u!==null?(u.return=l,P=u):Cu(i);for(;o!==null;)P=o,pf(o),o=o.sibling;P=i,li=s,me=c}ju(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,P=o):ju(e)}}function ju(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:me||Ao(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!me)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:We(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&lu(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}lu(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&wr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}me||t.flags&512&&sa(t)}catch(g){Y(t,t.return,g)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function Au(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function Cu(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ao(4,t)}catch(u){Y(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){Y(t,i,u)}}var o=t.return;try{sa(t)}catch(u){Y(t,o,u)}break;case 5:var l=t.return;try{sa(t)}catch(u){Y(t,l,u)}}}catch(u){Y(t,t.return,u)}if(t===e){P=null;break}var s=t.sibling;if(s!==null){s.return=t.return,P=s;break}P=t.return}}var um=Math.ceil,io=gt.ReactCurrentDispatcher,os=gt.ReactCurrentOwner,Fe=gt.ReactCurrentBatchConfig,I=0,ie=null,q=null,ae=0,Pe=0,wn=Ut(0),te=0,zr=null,en=0,Co=0,ls=0,pr=null,ke=null,as=0,Ln=1/0,at=null,oo=!1,da=null,Ot=null,ai=!1,At=null,lo=0,hr=0,fa=null,Oi=-1,Ri=0;function xe(){return I&6?Z():Oi!==-1?Oi:Oi=Z()}function Rt(e){return e.mode&1?I&2&&ae!==0?ae&-ae:Qh.transition!==null?(Ri===0&&(Ri=Gc()),Ri):(e=U,e!==0||(e=window.event,e=e===void 0?16:nd(e.type)),e):1}function Qe(e,t,n,r){if(50<hr)throw hr=0,fa=null,Error(S(185));Fr(e,n,r),(!(I&2)||e!==ie)&&(e===ie&&(!(I&2)&&(Co|=n),te===4&&St(e,ae)),Ce(e,r),n===1&&I===0&&!(t.mode&1)&&(Ln=Z()+500,ko&&bt()))}function Ce(e,t){var n=e.callbackNode;Qp(e,t);var r=Hi(e,e===ie?ae:0);if(r===0)n!==null&&Ls(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ls(n),t===1)e.tag===0?Vh(Eu.bind(null,e)):kd(Eu.bind(null,e)),Bh(function(){!(I&6)&&bt()}),n=null;else{switch(Xc(r)){case 1:n=Ra;break;case 4:n=Kc;break;case 16:n=Wi;break;case 536870912:n=Yc;break;default:n=Wi}n=kf(n,hf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function hf(e,t){if(Oi=-1,Ri=0,I&6)throw Error(S(327));var n=e.callbackNode;if(En()&&e.callbackNode!==n)return null;var r=Hi(e,e===ie?ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ao(e,r);else{t=r;var i=I;I|=2;var o=gf();(ie!==e||ae!==t)&&(at=null,Ln=Z()+500,Gt(e,t));do try{fm();break}catch(s){mf(e,s)}while(!0);Qa(),io.current=o,I=i,q!==null?t=0:(ie=null,ae=0,t=te)}if(t!==0){if(t===2&&(i=Ul(e),i!==0&&(r=i,t=pa(e,i))),t===1)throw n=zr,Gt(e,0),St(e,r),Ce(e,Z()),n;if(t===6)St(e,r);else{if(i=e.current.alternate,!(r&30)&&!cm(i)&&(t=ao(e,r),t===2&&(o=Ul(e),o!==0&&(r=o,t=pa(e,o))),t===1))throw n=zr,Gt(e,0),St(e,r),Ce(e,Z()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Vt(e,ke,at);break;case 3:if(St(e,r),(r&130023424)===r&&(t=as+500-Z(),10<t)){if(Hi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){xe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Kl(Vt.bind(null,e,ke,at),t);break}Vt(e,ke,at);break;case 4:if(St(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Ve(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*um(r/1960))-r,10<r){e.timeoutHandle=Kl(Vt.bind(null,e,ke,at),r);break}Vt(e,ke,at);break;case 5:Vt(e,ke,at);break;default:throw Error(S(329))}}}return Ce(e,Z()),e.callbackNode===n?hf.bind(null,e):null}function pa(e,t){var n=pr;return e.current.memoizedState.isDehydrated&&(Gt(e,t).flags|=256),e=ao(e,t),e!==2&&(t=ke,ke=n,t!==null&&ha(t)),e}function ha(e){ke===null?ke=e:ke.push.apply(ke,e)}function cm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ke(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function St(e,t){for(t&=~ls,t&=~Co,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ve(t),r=1<<n;e[n]=-1,t&=~r}}function Eu(e){if(I&6)throw Error(S(327));En();var t=Hi(e,0);if(!(t&1))return Ce(e,Z()),null;var n=ao(e,t);if(e.tag!==0&&n===2){var r=Ul(e);r!==0&&(t=r,n=pa(e,r))}if(n===1)throw n=zr,Gt(e,0),St(e,t),Ce(e,Z()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Vt(e,ke,at),Ce(e,Z()),null}function ss(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(Ln=Z()+500,ko&&bt())}}function tn(e){At!==null&&At.tag===0&&!(I&6)&&En();var t=I;I|=1;var n=Fe.transition,r=U;try{if(Fe.transition=null,U=1,e)return e()}finally{U=r,Fe.transition=n,I=t,!(I&6)&&bt()}}function us(){Pe=wn.current,H(wn)}function Gt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,bh(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(Ha(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yi();break;case 3:On(),H(je),H(ge),Ja();break;case 5:Za(r);break;case 4:On();break;case 13:H(V);break;case 19:H(V);break;case 10:Ka(r.type._context);break;case 22:case 23:us()}n=n.return}if(ie=e,q=e=Lt(e.current,null),ae=Pe=t,te=0,zr=null,ls=Co=en=0,ke=pr=null,Kt!==null){for(t=0;t<Kt.length;t++)if(n=Kt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Kt=null}return e}function mf(e,t){do{var n=q;try{if(Qa(),Ni.current=ro,no){for(var r=Q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}no=!1}if(qt=0,re=ee=Q=null,dr=!1,Pr=0,os.current=null,n===null||n.return===null){te=1,zr=t,q=null;break}e:{var o=e,l=n.return,s=n,u=t;if(t=ae,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=s,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var k=pu(l);if(k!==null){k.flags&=-257,hu(k,l,s,o,t),k.mode&1&&fu(o,c,t),t=k,u=c;var y=t.updateQueue;if(y===null){var v=new Set;v.add(u),t.updateQueue=v}else y.add(u);break e}else{if(!(t&1)){fu(o,c,t),cs();break e}u=Error(S(426))}}else if($&&s.mode&1){var j=pu(l);if(j!==null){!(j.flags&65536)&&(j.flags|=256),hu(j,l,s,o,t),$a(Rn(u,s));break e}}o=u=Rn(u,s),te!==4&&(te=2),pr===null?pr=[o]:pr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Zd(o,u,t);ou(o,f);break e;case 1:s=u;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ot===null||!Ot.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Jd(o,s,t);ou(o,x);break e}}o=o.return}while(o!==null)}xf(n)}catch(C){t=C,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function gf(){var e=io.current;return io.current=ro,e===null?ro:e}function cs(){(te===0||te===3||te===2)&&(te=4),ie===null||!(en&268435455)&&!(Co&268435455)||St(ie,ae)}function ao(e,t){var n=I;I|=2;var r=gf();(ie!==e||ae!==t)&&(at=null,Gt(e,t));do try{dm();break}catch(i){mf(e,i)}while(!0);if(Qa(),I=n,io.current=r,q!==null)throw Error(S(261));return ie=null,ae=0,te}function dm(){for(;q!==null;)vf(q)}function fm(){for(;q!==null&&!Dp();)vf(q)}function vf(e){var t=wf(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,t===null?xf(e):q=t,os.current=null}function xf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=om(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,q=null;return}}else if(n=im(n,t,Pe),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);te===0&&(te=5)}function Vt(e,t,n){var r=U,i=Fe.transition;try{Fe.transition=null,U=1,pm(e,t,n,r)}finally{Fe.transition=i,U=r}return null}function pm(e,t,n,r){do En();while(At!==null);if(I&6)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Kp(e,o),e===ie&&(q=ie=null,ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ai||(ai=!0,kf(Wi,function(){return En(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Fe.transition,Fe.transition=null;var l=U;U=1;var s=I;I|=4,os.current=null,am(e,n),ff(n,e),Rh(Vl),$i=!!$l,Vl=$l=null,e.current=n,sm(n),Fp(),I=s,U=l,Fe.transition=o}else e.current=n;if(ai&&(ai=!1,At=e,lo=i),o=e.pendingLanes,o===0&&(Ot=null),Bp(n.stateNode),Ce(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(oo)throw oo=!1,e=da,da=null,e;return lo&1&&e.tag!==0&&En(),o=e.pendingLanes,o&1?e===fa?hr++:(hr=0,fa=e):hr=0,bt(),null}function En(){if(At!==null){var e=Xc(lo),t=Fe.transition,n=U;try{if(Fe.transition=null,U=16>e?16:e,At===null)var r=!1;else{if(e=At,At=null,lo=0,I&6)throw Error(S(331));var i=I;for(I|=4,P=e.current;P!==null;){var o=P,l=o.child;if(P.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(P=c;P!==null;){var h=P;switch(h.tag){case 0:case 11:case 15:fr(8,h,o)}var m=h.child;if(m!==null)m.return=h,P=m;else for(;P!==null;){h=P;var g=h.sibling,k=h.return;if(uf(h),h===c){P=null;break}if(g!==null){g.return=k,P=g;break}P=k}}}var y=o.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var j=v.sibling;v.sibling=null,v=j}while(v!==null)}}P=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,P=l;else e:for(;P!==null;){if(o=P,o.flags&2048)switch(o.tag){case 0:case 11:case 15:fr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,P=f;break e}P=o.return}}var d=e.current;for(P=d;P!==null;){l=P;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,P=p;else e:for(l=d;P!==null;){if(s=P,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ao(9,s)}}catch(C){Y(s,s.return,C)}if(s===l){P=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,P=x;break e}P=s.return}}if(I=i,bt(),et&&typeof et.onPostCommitFiberRoot=="function")try{et.onPostCommitFiberRoot(go,e)}catch{}r=!0}return r}finally{U=n,Fe.transition=t}}return!1}function _u(e,t,n){t=Rn(n,t),t=Zd(e,t,1),e=zt(e,t,1),t=xe(),e!==null&&(Fr(e,1,t),Ce(e,t))}function Y(e,t,n){if(e.tag===3)_u(e,e,n);else for(;t!==null;){if(t.tag===3){_u(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ot===null||!Ot.has(r))){e=Rn(n,e),e=Jd(t,e,1),t=zt(t,e,1),e=xe(),t!==null&&(Fr(t,1,e),Ce(t,e));break}}t=t.return}}function hm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=xe(),e.pingedLanes|=e.suspendedLanes&n,ie===e&&(ae&n)===n&&(te===4||te===3&&(ae&130023424)===ae&&500>Z()-as?Gt(e,0):ls|=n),Ce(e,t)}function yf(e,t){t===0&&(e.mode&1?(t=Zr,Zr<<=1,!(Zr&130023424)&&(Zr=4194304)):t=1);var n=xe();e=ht(e,t),e!==null&&(Fr(e,t,n),Ce(e,n))}function mm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),yf(e,n)}function gm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),yf(e,n)}var wf;wf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||je.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,rm(e,t,n);Se=!!(e.flags&131072)}else Se=!1,$&&t.flags&1048576&&Sd(t,Zi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;zi(e,t),e=t.pendingProps;var i=Nn(t,ge.current);Cn(t,n),i=es(null,t,r,e,i,n);var o=ts();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ae(r)?(o=!0,Gi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ga(t),i.updater=So,t.stateNode=i,i._reactInternals=t,ea(t,r,e,n),t=ra(null,t,r,!0,o,n)):(t.tag=0,$&&o&&Wa(t),ve(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(zi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=xm(r),e=We(r,e),i){case 0:t=na(null,t,r,e,n);break e;case 1:t=vu(null,t,r,e,n);break e;case 11:t=mu(null,t,r,e,n);break e;case 14:t=gu(null,t,r,We(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),na(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),vu(e,t,r,i,n);case 3:e:{if(nf(t),e===null)throw Error(S(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Ed(e,t),eo(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Rn(Error(S(423)),t),t=xu(e,t,r,n,i);break e}else if(r!==i){i=Rn(Error(S(424)),t),t=xu(e,t,r,n,i);break e}else for(Ne=Tt(t.stateNode.containerInfo.firstChild),Te=t,$=!0,$e=null,n=Td(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Tn(),r===i){t=mt(e,t,n);break e}ve(e,t,r,n)}t=t.child}return t;case 5:return zd(t),e===null&&Zl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Ql(r,i)?l=null:o!==null&&Ql(r,o)&&(t.flags|=32),tf(e,t),ve(e,t,l,n),t.child;case 6:return e===null&&Zl(t),null;case 13:return rf(e,t,n);case 4:return Xa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=zn(t,null,r,n):ve(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),mu(e,t,r,i,n);case 7:return ve(e,t,t.pendingProps,n),t.child;case 8:return ve(e,t,t.pendingProps.children,n),t.child;case 12:return ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,B(Ji,r._currentValue),r._currentValue=l,o!==null)if(Ke(o.value,l)){if(o.children===i.children&&!je.current){t=mt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=dt(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Jl(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(S(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Jl(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ve(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Cn(t,n),i=Ue(i),r=r(i),t.flags|=1,ve(e,t,r,n),t.child;case 14:return r=t.type,i=We(r,t.pendingProps),i=We(r.type,i),gu(e,t,r,i,n);case 15:return qd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),zi(e,t),t.tag=1,Ae(r)?(e=!0,Gi(t)):e=!1,Cn(t,n),Pd(t,r,i),ea(t,r,i,n),ra(null,t,r,!0,e,n);case 19:return of(e,t,n);case 22:return ef(e,t,n)}throw Error(S(156,t.tag))};function kf(e,t){return Qc(e,t)}function vm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,t,n,r){return new vm(e,t,n,r)}function ds(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xm(e){if(typeof e=="function")return ds(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ta)return 11;if(e===za)return 14}return 2}function Lt(e,t){var n=e.alternate;return n===null?(n=De(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Li(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")ds(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case cn:return Xt(n.children,i,o,t);case Na:l=8,i|=8;break;case Al:return e=De(12,n,t,i|2),e.elementType=Al,e.lanes=o,e;case Cl:return e=De(13,n,t,i),e.elementType=Cl,e.lanes=o,e;case El:return e=De(19,n,t,i),e.elementType=El,e.lanes=o,e;case Nc:return Eo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _c:l=10;break e;case Pc:l=9;break e;case Ta:l=11;break e;case za:l=14;break e;case yt:l=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=De(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Xt(e,t,n,r){return e=De(7,e,r,t),e.lanes=n,e}function Eo(e,t,n,r){return e=De(22,e,r,t),e.elementType=Nc,e.lanes=n,e.stateNode={isHidden:!1},e}function cl(e,t,n){return e=De(6,e,null,t),e.lanes=n,e}function dl(e,t,n){return t=De(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ym(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vo(0),this.expirationTimes=Vo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function fs(e,t,n,r,i,o,l,s,u){return e=new ym(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=De(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ga(o),e}function wm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:un,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Sf(e){if(!e)return Dt;e=e._reactInternals;e:{if(rn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ae(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ae(n))return wd(e,n,t)}return t}function jf(e,t,n,r,i,o,l,s,u){return e=fs(n,r,!0,e,i,o,l,s,u),e.context=Sf(null),n=e.current,r=xe(),i=Rt(n),o=dt(r,i),o.callback=t??null,zt(n,o,i),e.current.lanes=i,Fr(e,i,r),Ce(e,r),e}function _o(e,t,n,r){var i=t.current,o=xe(),l=Rt(i);return n=Sf(n),t.context===null?t.context=n:t.pendingContext=n,t=dt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=zt(i,t,l),e!==null&&(Qe(e,i,l,o),Pi(e,i,l)),l}function so(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Pu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ps(e,t){Pu(e,t),(e=e.alternate)&&Pu(e,t)}function km(){return null}var Af=typeof reportError=="function"?reportError:function(e){console.error(e)};function hs(e){this._internalRoot=e}Po.prototype.render=hs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));_o(e,t,null,null)};Po.prototype.unmount=hs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;tn(function(){_o(null,e,null,null)}),t[pt]=null}};function Po(e){this._internalRoot=e}Po.prototype.unstable_scheduleHydration=function(e){if(e){var t=qc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<kt.length&&t!==0&&t<kt[n].priority;n++);kt.splice(n,0,e),n===0&&td(e)}};function ms(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function No(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Nu(){}function Sm(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=so(l);o.call(c)}}var l=jf(t,r,e,0,null,!1,!1,"",Nu);return e._reactRootContainer=l,e[pt]=l.current,jr(e.nodeType===8?e.parentNode:e),tn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=so(u);s.call(c)}}var u=fs(e,0,!1,null,null,!1,!1,"",Nu);return e._reactRootContainer=u,e[pt]=u.current,jr(e.nodeType===8?e.parentNode:e),tn(function(){_o(t,u,n,r)}),u}function To(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var u=so(l);s.call(u)}}_o(t,l,e,i)}else l=Sm(n,t,e,i,r);return so(l)}Zc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ir(t.pendingLanes);n!==0&&(La(t,n|1),Ce(t,Z()),!(I&6)&&(Ln=Z()+500,bt()))}break;case 13:tn(function(){var r=ht(e,1);if(r!==null){var i=xe();Qe(r,e,1,i)}}),ps(e,1)}};Ma=function(e){if(e.tag===13){var t=ht(e,134217728);if(t!==null){var n=xe();Qe(t,e,134217728,n)}ps(e,134217728)}};Jc=function(e){if(e.tag===13){var t=Rt(e),n=ht(e,t);if(n!==null){var r=xe();Qe(n,e,t,r)}ps(e,t)}};qc=function(){return U};ed=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};Il=function(e,t,n){switch(t){case"input":if(Nl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wo(r);if(!i)throw Error(S(90));zc(r),Nl(r,i)}}}break;case"textarea":Rc(e,n);break;case"select":t=n.value,t!=null&&kn(e,!!n.multiple,t,!1)}};bc=ss;Bc=tn;var jm={usingClientEntryPoint:!1,Events:[br,hn,wo,Fc,Uc,ss]},Jn={findFiberByHostInstance:Qt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Am={bundleType:Jn.bundleType,version:Jn.version,rendererPackageName:Jn.rendererPackageName,rendererConfig:Jn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$c(e),e===null?null:e.stateNode},findFiberByHostInstance:Jn.findFiberByHostInstance||km,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var si=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!si.isDisabled&&si.supportsFiber)try{go=si.inject(Am),et=si}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jm;Re.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ms(t))throw Error(S(200));return wm(e,t,null,n)};Re.createRoot=function(e,t){if(!ms(e))throw Error(S(299));var n=!1,r="",i=Af;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=fs(e,1,!1,null,null,n,!1,r,i),e[pt]=t.current,jr(e.nodeType===8?e.parentNode:e),new hs(t)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=$c(t),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return tn(e)};Re.hydrate=function(e,t,n){if(!No(t))throw Error(S(200));return To(null,e,t,!0,n)};Re.hydrateRoot=function(e,t,n){if(!ms(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Af;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=jf(t,null,e,1,n??null,i,!1,o,l),e[pt]=t.current,jr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Po(t)};Re.render=function(e,t,n){if(!No(t))throw Error(S(200));return To(null,e,t,!1,n)};Re.unmountComponentAtNode=function(e){if(!No(e))throw Error(S(40));return e._reactRootContainer?(tn(function(){To(null,null,e,!1,function(){e._reactRootContainer=null,e[pt]=null})}),!0):!1};Re.unstable_batchedUpdates=ss;Re.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!No(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return To(e,t,n,!1,r)};Re.version="18.2.0-next-9e3b772b8-20220608";function Cf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cf)}catch(e){console.error(e)}}Cf(),Sc.exports=Re;var Cm=Sc.exports,Ef,Tu=Cm;Ef=Tu.createRoot,Tu.hydrateRoot;/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Or(){return Or=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Or.apply(this,arguments)}var Ct;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ct||(Ct={}));const zu="popstate";function Em(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:s}=r.location;return ma("",{pathname:o,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:uo(i)}return Pm(t,n,null,e)}function G(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function _f(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function _m(){return Math.random().toString(36).substr(2,8)}function Ou(e,t){return{usr:e.state,key:e.key,idx:t}}function ma(e,t,n,r){return n===void 0&&(n=null),Or({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?bn(t):t,{state:n,key:t&&t.key||r||_m()})}function uo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function bn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Pm(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,s=Ct.Pop,u=null,c=h();c==null&&(c=0,l.replaceState(Or({},l.state,{idx:c}),""));function h(){return(l.state||{idx:null}).idx}function m(){s=Ct.Pop;let j=h(),f=j==null?null:j-c;c=j,u&&u({action:s,location:v.location,delta:f})}function g(j,f){s=Ct.Push;let d=ma(v.location,j,f);c=h()+1;let p=Ou(d,c),x=v.createHref(d);try{l.pushState(p,"",x)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(x)}o&&u&&u({action:s,location:v.location,delta:1})}function k(j,f){s=Ct.Replace;let d=ma(v.location,j,f);c=h();let p=Ou(d,c),x=v.createHref(d);l.replaceState(p,"",x),o&&u&&u({action:s,location:v.location,delta:0})}function y(j){let f=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof j=="string"?j:uo(j);return d=d.replace(/ $/,"%20"),G(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let v={get action(){return s},get location(){return e(i,l)},listen(j){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(zu,m),u=j,()=>{i.removeEventListener(zu,m),u=null}},createHref(j){return t(i,j)},createURL:y,encodeLocation(j){let f=y(j);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:k,go(j){return l.go(j)}};return v}var Ru;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ru||(Ru={}));function Nm(e,t,n){n="/";let r=typeof t=="string"?bn(t):t,i=Mn(r.pathname||"/",n);if(i==null)return null;let o=Pf(e);Tm(o);let l=null;for(let s=0;l==null&&s<o.length;++s){let u=Bm(i);l=Um(o[s],u)}return l}function Pf(e,t,n,r){t=[],n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,s)=>{let u={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};u.relativePath.startsWith("/")&&(G(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Mt([r,u.relativePath]),h=n.concat(u);o.children&&o.children.length>0&&(G(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Pf(o.children,t,h,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:Dm(c,o.index),routesMeta:h})};return e.forEach((o,l)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,l);else for(let u of Nf(o.path))i(o,l,u)}),t}function Nf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=Nf(r.join("/")),s=[];return s.push(...l.map(u=>u===""?o:[o,u].join("/"))),i&&s.push(...l),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function Tm(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Fm(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const zm=/^:[\w-]+$/,Om=3,Rm=2,Lm=1,Mm=10,Im=-2,Lu=e=>e==="*";function Dm(e,t){let n=e.split("/"),r=n.length;return n.some(Lu)&&(r+=Im),t&&(r+=Rm),n.filter(i=>!Lu(i)).reduce((i,o)=>i+(zm.test(o)?Om:o===""?Lm:Mm),r)}function Fm(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Um(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let s=n[l],u=l===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",h=ga({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},c);if(!h)return null;Object.assign(r,h.params);let m=s.route;o.push({params:r,pathname:Mt([i,h.pathname]),pathnameBase:Vm(Mt([i,h.pathnameBase])),route:m}),h.pathnameBase!=="/"&&(i=Mt([i,h.pathnameBase]))}return o}function ga(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=bm(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,h,m)=>{let{paramName:g,isOptional:k}=h;if(g==="*"){let v=s[m]||"";l=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const y=s[m];return k&&!y?c[g]=void 0:c[g]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:l,pattern:e}}function bm(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),_f(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,u)=>(r.push({paramName:s,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Bm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return _f(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Mn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Wm(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?bn(e):e;return{pathname:n?n.startsWith("/")?n:Hm(n,t):t,search:Qm(r),hash:Km(i)}}function Hm(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function fl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function $m(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function gs(e,t){let n=$m(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function vs(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=bn(e):(i=Or({},e),G(!i.pathname||!i.pathname.includes("?"),fl("?","pathname","search",i)),G(!i.pathname||!i.pathname.includes("#"),fl("#","pathname","hash",i)),G(!i.search||!i.search.includes("#"),fl("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,s;if(l==null)s=n;else{let m=t.length-1;if(!r&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}s=m>=0?t[m]:"/"}let u=Wm(i,s),c=l&&l!=="/"&&l.endsWith("/"),h=(o||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const Mt=e=>e.join("/").replace(/\/\/+/g,"/"),Vm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Qm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Km=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Tf=["post","put","patch","delete"];new Set(Tf);const Ym=["get",...Tf];new Set(Ym);/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rr(){return Rr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Rr.apply(this,arguments)}const zo=E.createContext(null),Gm=E.createContext(null),vt=E.createContext(null),Oo=E.createContext(null),Bt=E.createContext({outlet:null,matches:[],isDataRoute:!1});function Xm(e,t){let{relative:n}=t===void 0?{}:t;Bn()||G(!1);let{basename:r,navigator:i}=E.useContext(vt),{hash:o,pathname:l,search:s}=Ro(e,{relative:n}),u=l;return r!=="/"&&(u=l==="/"?r:Mt([r,l])),i.createHref({pathname:u,search:s,hash:o})}function Bn(){return E.useContext(Oo)!=null}function Ye(){return Bn()||G(!1),E.useContext(Oo).location}function zf(e){E.useContext(vt).static||E.useLayoutEffect(e)}function Of(){let{isDataRoute:e}=E.useContext(Bt);return e?ag():Zm()}function Zm(){Bn()||G(!1);let e=E.useContext(zo),{basename:t,future:n,navigator:r}=E.useContext(vt),{matches:i}=E.useContext(Bt),{pathname:o}=Ye(),l=JSON.stringify(gs(i,n.v7_relativeSplatPath)),s=E.useRef(!1);return zf(()=>{s.current=!0}),E.useCallback(function(c,h){if(h===void 0&&(h={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let m=vs(c,JSON.parse(l),o,h.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Mt([t,m.pathname])),(h.replace?r.replace:r.push)(m,h.state,h)},[t,r,l,o,e])}const Jm=E.createContext(null);function qm(e){let t=E.useContext(Bt).outlet;return t&&E.createElement(Jm.Provider,{value:e},t)}function Ro(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=E.useContext(vt),{matches:i}=E.useContext(Bt),{pathname:o}=Ye(),l=JSON.stringify(gs(i,r.v7_relativeSplatPath));return E.useMemo(()=>vs(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function eg(e,t){return tg(e,t)}function tg(e,t,n,r){Bn()||G(!1);let{navigator:i}=E.useContext(vt),{matches:o}=E.useContext(Bt),l=o[o.length-1],s=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let c=Ye(),h;if(t){var m;let j=typeof t=="string"?bn(t):t;u==="/"||(m=j.pathname)!=null&&m.startsWith(u)||G(!1),h=j}else h=c;let g=h.pathname||"/",k=g;if(u!=="/"){let j=u.replace(/^\//,"").split("/");k="/"+g.replace(/^\//,"").split("/").slice(j.length).join("/")}let y=Nm(e,{pathname:k}),v=rg(y&&y.map(j=>Object.assign({},j,{params:Object.assign({},s,j.params),pathname:Mt([u,i.encodeLocation?i.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?u:Mt([u,i.encodeLocation?i.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),o,n);return t&&v?E.createElement(Oo.Provider,{value:{location:Rr({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Ct.Pop}},v):v}function ng(e){let{routeContext:t,match:n,children:r}=e,i=E.useContext(zo);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(Bt.Provider,{value:t},r)}function rg(e,t,n,r){var i;if(t===void 0&&(t=[]),n=null,e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let l=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let u=l.findIndex(c=>c.route.id&&(s==null?void 0:s[c.route.id])!==void 0);u>=0||G(!1),l=l.slice(0,Math.min(l.length,u+1))}return l.reduceRight((u,c,h)=>{let m=t.concat(l.slice(0,h+1));return(()=>{let k;return c.route.Component?k=E.createElement(c.route.Component,null):c.route.element?k=c.route.element:k=u,E.createElement(ng,{match:c,routeContext:{outlet:u,matches:m,isDataRoute:n!=null},children:k})})()},null)}var Rf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Rf||{}),Lf=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Lf||{});function ig(e){let t=E.useContext(zo);return t||G(!1),t}function og(e){let t=E.useContext(Bt);return t||G(!1),t}function lg(e){let t=og(),n=t.matches[t.matches.length-1];return n.route.id||G(!1),n.route.id}function ag(){let{router:e}=ig(Rf.UseNavigateStable),t=lg(Lf.UseNavigateStable),n=E.useRef(!1);return zf(()=>{n.current=!0}),E.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Rr({fromRouteId:t},o)))},[e,t])}function sg(e){let{to:t,replace:n,state:r,relative:i}=e;Bn()||G(!1);let{future:o,static:l}=E.useContext(vt),{matches:s}=E.useContext(Bt),{pathname:u}=Ye(),c=Of(),h=vs(t,gs(s,o.v7_relativeSplatPath),u,i==="path"),m=JSON.stringify(h);return E.useEffect(()=>c(JSON.parse(m),{replace:n,state:r,relative:i}),[c,m,i,n,r]),null}function ug(e){return qm(e.context)}function Mi(e){G(!1)}function cg(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Ct.Pop,navigator:o,static:l=!1,future:s}=e;Bn()&&G(!1);let u=t.replace(/^\/*/,"/"),c=E.useMemo(()=>({basename:u,navigator:o,static:l,future:Rr({v7_relativeSplatPath:!1},s)}),[u,s,o,l]);typeof r=="string"&&(r=bn(r));let{pathname:h="/",search:m="",hash:g="",state:k=null,key:y="default"}=r,v=E.useMemo(()=>{let j=Mn(h,u);return j==null?null:{location:{pathname:j,search:m,hash:g,state:k,key:y},navigationType:i}},[u,h,m,g,k,y,i]);return v==null?null:E.createElement(vt.Provider,{value:c},E.createElement(Oo.Provider,{children:n,value:v}))}function dg(e){let{children:t,location:n}=e;return eg(va(t),n)}new Promise(()=>{});function va(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(r,i)=>{if(!E.isValidElement(r))return;let o=[...t,i];if(r.type===E.Fragment){n.push.apply(n,va(r.props.children,o));return}r.type!==Mi&&G(!1),!r.props.index||!r.props.children||G(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=va(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function co(){return co=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},co.apply(this,arguments)}function Mf(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function fg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function pg(e,t){return e.button===0&&(!t||t==="_self")&&!fg(e)}const hg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],mg=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],gg="6";try{window.__reactRouterVersion=gg}catch{}const vg=E.createContext({isTransitioning:!1}),xg="startTransition",Mu=Sl[xg];function yg(e){let{basename:t,children:n,future:r,window:i}=e,o=E.useRef();o.current==null&&(o.current=Em({window:i,v5Compat:!0}));let l=o.current,[s,u]=E.useState({action:l.action,location:l.location}),{v7_startTransition:c}=r||{},h=E.useCallback(m=>{c&&Mu?Mu(()=>u(m)):u(m)},[u,c]);return E.useLayoutEffect(()=>l.listen(h),[l,h]),E.createElement(cg,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l,future:r})}const wg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",kg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Sg=E.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:s,target:u,to:c,preventScrollReset:h,unstable_viewTransition:m}=t,g=Mf(t,hg),{basename:k}=E.useContext(vt),y,v=!1;if(typeof c=="string"&&kg.test(c)&&(y=c,wg))try{let p=new URL(window.location.href),x=c.startsWith("//")?new URL(p.protocol+c):new URL(c),C=Mn(x.pathname,k);x.origin===p.origin&&C!=null?c=C+x.search+x.hash:v=!0}catch{}let j=Xm(c,{relative:i}),f=Ag(c,{replace:l,state:s,target:u,preventScrollReset:h,relative:i,unstable_viewTransition:m});function d(p){r&&r(p),p.defaultPrevented||f(p)}return E.createElement("a",co({},g,{href:y||j,onClick:v||o?r:d,ref:n,target:u}))}),Wr=E.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:l=!1,style:s,to:u,unstable_viewTransition:c,children:h}=t,m=Mf(t,mg),g=Ro(u,{relative:m.relative}),k=Ye(),y=E.useContext(Gm),{navigator:v,basename:j}=E.useContext(vt),f=y!=null&&Cg(g)&&c===!0,d=v.encodeLocation?v.encodeLocation(g).pathname:g.pathname,p=k.pathname,x=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(p=p.toLowerCase(),x=x?x.toLowerCase():null,d=d.toLowerCase()),x&&j&&(x=Mn(x,j)||x);const C=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let _=p===d||!l&&p.startsWith(d)&&p.charAt(C)==="/",A=x!=null&&(x===d||!l&&x.startsWith(d)&&x.charAt(d.length)==="/"),T={isActive:_,isPending:A,isTransitioning:f},b=_?r:void 0,z;typeof o=="function"?z=o(T):z=[o,_?"active":null,A?"pending":null,f?"transitioning":null].filter(Boolean).join(" ");let _e=typeof s=="function"?s(T):s;return E.createElement(Sg,co({},m,{"aria-current":b,className:z,ref:n,style:_e,to:u,unstable_viewTransition:c}),typeof h=="function"?h(T):h)});var xa;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(xa||(xa={}));var Iu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Iu||(Iu={}));function jg(e){let t=E.useContext(zo);return t||G(!1),t}function Ag(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:s}=t===void 0?{}:t,u=Of(),c=Ye(),h=Ro(e,{relative:l});return E.useCallback(m=>{if(pg(m,n)){m.preventDefault();let g=r!==void 0?r:uo(c)===uo(h);u(e,{replace:g,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:s})}},[c,u,h,r,i,n,e,o,l,s])}function Cg(e,t){t={};let n=E.useContext(vg);n==null&&G(!1);let{basename:r}=jg(xa.useViewTransitionState),i=Ro(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=Mn(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=Mn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ga(i.pathname,l)!=null||ga(i.pathname,o)!=null}const Du={HOME:"/",PORTFOLIO:"/portfolio"};function ya(){return ya=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ya.apply(this,arguments)}function If(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Eg=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,_g=If(function(e){return Eg.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function Pg(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Ng(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Tg=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Ng(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=Pg(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),he="-ms-",fo="-moz-",D="-webkit-",Df="comm",xs="rule",ys="decl",zg="@import",Ff="@keyframes",Og="@layer",Rg=Math.abs,Lo=String.fromCharCode,Lg=Object.assign;function Mg(e,t){return le(e,0)^45?(((t<<2^le(e,0))<<2^le(e,1))<<2^le(e,2))<<2^le(e,3):0}function Uf(e){return e.trim()}function Ig(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,n){return e.replace(t,n)}function wa(e,t){return e.indexOf(t)}function le(e,t){return e.charCodeAt(t)|0}function Lr(e,t,n){return e.slice(t,n)}function Ze(e){return e.length}function ws(e){return e.length}function ui(e,t){return t.push(e),e}function Dg(e,t){return e.map(t).join("")}var Mo=1,In=1,bf=0,Ee=0,J=0,Wn="";function Io(e,t,n,r,i,o,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Mo,column:In,length:l,return:""}}function qn(e,t){return Lg(Io("",null,null,"",null,null,0),e,{length:-e.length},t)}function Fg(){return J}function Ug(){return J=Ee>0?le(Wn,--Ee):0,In--,J===10&&(In=1,Mo--),J}function ze(){return J=Ee<bf?le(Wn,Ee++):0,In++,J===10&&(In=1,Mo++),J}function nt(){return le(Wn,Ee)}function Ii(){return Ee}function Hr(e,t){return Lr(Wn,e,t)}function Mr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Bf(e){return Mo=In=1,bf=Ze(Wn=e),Ee=0,[]}function Wf(e){return Wn="",e}function Di(e){return Uf(Hr(Ee-1,ka(e===91?e+2:e===40?e+1:e)))}function bg(e){for(;(J=nt())&&J<33;)ze();return Mr(e)>2||Mr(J)>3?"":" "}function Bg(e,t){for(;--t&&ze()&&!(J<48||J>102||J>57&&J<65||J>70&&J<97););return Hr(e,Ii()+(t<6&&nt()==32&&ze()==32))}function ka(e){for(;ze();)switch(J){case e:return Ee;case 34:case 39:e!==34&&e!==39&&ka(J);break;case 40:e===41&&ka(e);break;case 92:ze();break}return Ee}function Wg(e,t){for(;ze()&&e+J!==57;)if(e+J===84&&nt()===47)break;return"/*"+Hr(t,Ee-1)+"*"+Lo(e===47?e:ze())}function Hg(e){for(;!Mr(nt());)ze();return Hr(e,Ee)}function $g(e){return Wf(Fi("",null,null,null,[""],e=Bf(e),0,[0],e))}function Fi(e,t,n,r,i,o,l,s,u){for(var c=0,h=0,m=l,g=0,k=0,y=0,v=1,j=1,f=1,d=0,p="",x=i,C=o,_=r,A=p;j;)switch(y=d,d=ze()){case 40:if(y!=108&&le(A,m-1)==58){wa(A+=F(Di(d),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:A+=Di(d);break;case 9:case 10:case 13:case 32:A+=bg(y);break;case 92:A+=Bg(Ii()-1,7);continue;case 47:switch(nt()){case 42:case 47:ui(Vg(Wg(ze(),Ii()),t,n),u);break;default:A+="/"}break;case 123*v:s[c++]=Ze(A)*f;case 125*v:case 59:case 0:switch(d){case 0:case 125:j=0;case 59+h:f==-1&&(A=F(A,/\f/g,"")),k>0&&Ze(A)-m&&ui(k>32?Uu(A+";",r,n,m-1):Uu(F(A," ","")+";",r,n,m-2),u);break;case 59:A+=";";default:if(ui(_=Fu(A,t,n,c,h,i,s,p,x=[],C=[],m),o),d===123)if(h===0)Fi(A,t,_,_,x,o,m,s,C);else switch(g===99&&le(A,3)===110?100:g){case 100:case 108:case 109:case 115:Fi(e,_,_,r&&ui(Fu(e,_,_,0,0,i,s,p,i,x=[],m),C),i,C,m,s,r?x:C);break;default:Fi(A,_,_,_,[""],C,0,s,C)}}c=h=k=0,v=f=1,p=A="",m=l;break;case 58:m=1+Ze(A),k=y;default:if(v<1){if(d==123)--v;else if(d==125&&v++==0&&Ug()==125)continue}switch(A+=Lo(d),d*v){case 38:f=h>0?1:(A+="\f",-1);break;case 44:s[c++]=(Ze(A)-1)*f,f=1;break;case 64:nt()===45&&(A+=Di(ze())),g=nt(),h=m=Ze(p=A+=Hg(Ii())),d++;break;case 45:y===45&&Ze(A)==2&&(v=0)}}return o}function Fu(e,t,n,r,i,o,l,s,u,c,h){for(var m=i-1,g=i===0?o:[""],k=ws(g),y=0,v=0,j=0;y<r;++y)for(var f=0,d=Lr(e,m+1,m=Rg(v=l[y])),p=e;f<k;++f)(p=Uf(v>0?g[f]+" "+d:F(d,/&\f/g,g[f])))&&(u[j++]=p);return Io(e,t,n,i===0?xs:s,u,c,h)}function Vg(e,t,n){return Io(e,t,n,Df,Lo(Fg()),Lr(e,2,-2),0)}function Uu(e,t,n,r){return Io(e,t,n,ys,Lr(e,0,r),Lr(e,r+1,-1),r)}function _n(e,t){for(var n="",r=ws(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function Qg(e,t,n,r){switch(e.type){case Og:if(e.children.length)break;case zg:case ys:return e.return=e.return||e.value;case Df:return"";case Ff:return e.return=e.value+"{"+_n(e.children,r)+"}";case xs:e.value=e.props.join(",")}return Ze(n=_n(e.children,r))?e.return=e.value+"{"+n+"}":""}function Kg(e){var t=ws(e);return function(n,r,i,o){for(var l="",s=0;s<t;s++)l+=e[s](n,r,i,o)||"";return l}}function Yg(e){return function(t){t.root||(t=t.return)&&e(t)}}var Gg=function(t,n,r){for(var i=0,o=0;i=o,o=nt(),i===38&&o===12&&(n[r]=1),!Mr(o);)ze();return Hr(t,Ee)},Xg=function(t,n){var r=-1,i=44;do switch(Mr(i)){case 0:i===38&&nt()===12&&(n[r]=1),t[r]+=Gg(Ee-1,n,r);break;case 2:t[r]+=Di(i);break;case 4:if(i===44){t[++r]=nt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Lo(i)}while(i=ze());return t},Zg=function(t,n){return Wf(Xg(Bf(t),n))},bu=new WeakMap,Jg=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!bu.get(r))&&!i){bu.set(t,!0);for(var o=[],l=Zg(n,o),s=r.props,u=0,c=0;u<l.length;u++)for(var h=0;h<s.length;h++,c++)t.props[c]=o[u]?l[u].replace(/&\f/g,s[h]):s[h]+" "+l[u]}}},qg=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Hf(e,t){switch(Mg(e,t)){case 5103:return D+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return D+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return D+e+fo+e+he+e+e;case 6828:case 4268:return D+e+he+e+e;case 6165:return D+e+he+"flex-"+e+e;case 5187:return D+e+F(e,/(\w+).+(:[^]+)/,D+"box-$1$2"+he+"flex-$1$2")+e;case 5443:return D+e+he+"flex-item-"+F(e,/flex-|-self/,"")+e;case 4675:return D+e+he+"flex-line-pack"+F(e,/align-content|flex-|-self/,"")+e;case 5548:return D+e+he+F(e,"shrink","negative")+e;case 5292:return D+e+he+F(e,"basis","preferred-size")+e;case 6060:return D+"box-"+F(e,"-grow","")+D+e+he+F(e,"grow","positive")+e;case 4554:return D+F(e,/([^-])(transform)/g,"$1"+D+"$2")+e;case 6187:return F(F(F(e,/(zoom-|grab)/,D+"$1"),/(image-set)/,D+"$1"),e,"")+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,D+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,D+"box-pack:$3"+he+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+D+e+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,D+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ze(e)-1-t>6)switch(le(e,t+1)){case 109:if(le(e,t+4)!==45)break;case 102:return F(e,/(.+:)(.+)-([^]+)/,"$1"+D+"$2-$3$1"+fo+(le(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~wa(e,"stretch")?Hf(F(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(le(e,t+1)!==115)break;case 6444:switch(le(e,Ze(e)-3-(~wa(e,"!important")&&10))){case 107:return F(e,":",":"+D)+e;case 101:return F(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+D+(le(e,14)===45?"inline-":"")+"box$3$1"+D+"$2$3$1"+he+"$2box$3")+e}break;case 5936:switch(le(e,t+11)){case 114:return D+e+he+F(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return D+e+he+F(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return D+e+he+F(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return D+e+he+e+e}return e}var e0=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case ys:t.return=Hf(t.value,t.length);break;case Ff:return _n([qn(t,{value:F(t.value,"@","@"+D)})],i);case xs:if(t.length)return Dg(t.props,function(o){switch(Ig(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return _n([qn(t,{props:[F(o,/:(read-\w+)/,":"+fo+"$1")]})],i);case"::placeholder":return _n([qn(t,{props:[F(o,/:(plac\w+)/,":"+D+"input-$1")]}),qn(t,{props:[F(o,/:(plac\w+)/,":"+fo+"$1")]}),qn(t,{props:[F(o,/:(plac\w+)/,he+"input-$1")]})],i)}return""})}},t0=[e0],n0=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var j=v.getAttribute("data-emotion");j.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=t.stylisPlugins||t0,o={},l,s=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var j=v.getAttribute("data-emotion").split(" "),f=1;f<j.length;f++)o[j[f]]=!0;s.push(v)});var u,c=[Jg,qg];{var h,m=[Qg,Yg(function(v){h.insert(v)})],g=Kg(c.concat(i,m)),k=function(j){return _n($g(j),g)};u=function(j,f,d,p){h=d,k(j?j+"{"+f.styles+"}":f.styles),p&&(y.inserted[f.name]=!0)}}var y={key:n,sheet:new Tg({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:u};return y.sheet.hydrate(s),y},r0=!0;function i0(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var $f=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||r0===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},o0=function(t,n,r){$f(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function l0(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var a0={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},s0=/[A-Z]|^ms/g,u0=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Vf=function(t){return t.charCodeAt(1)===45},Bu=function(t){return t!=null&&typeof t!="boolean"},pl=If(function(e){return Vf(e)?e:e.replace(s0,"-$&").toLowerCase()}),Wu=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(u0,function(r,i,o){return Je={name:i,styles:o,next:Je},i})}return a0[t]!==1&&!Vf(t)&&typeof n=="number"&&n!==0?n+"px":n};function Ir(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Je={name:n.name,styles:n.styles,next:Je},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Je={name:r.name,styles:r.styles,next:Je},r=r.next;var i=n.styles+";";return i}return c0(e,t,n)}case"function":{if(e!==void 0){var o=Je,l=n(e);return Je=o,Ir(e,t,l)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function c0(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Ir(e,t,n[i])+";";else for(var o in n){var l=n[o];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=o+"{"+t[l]+"}":Bu(l)&&(r+=pl(o)+":"+Wu(o,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var s=0;s<l.length;s++)Bu(l[s])&&(r+=pl(o)+":"+Wu(o,l[s])+";");else{var u=Ir(e,t,l);switch(o){case"animation":case"animationName":{r+=pl(o)+":"+u+";";break}default:r+=o+"{"+u+"}"}}}return r}var Hu=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Je,d0=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";Je=void 0;var l=t[0];l==null||l.raw===void 0?(i=!1,o+=Ir(r,n,l)):o+=l[0];for(var s=1;s<t.length;s++)o+=Ir(r,n,t[s]),i&&(o+=l[s]);Hu.lastIndex=0;for(var u="",c;(c=Hu.exec(o))!==null;)u+="-"+c[1];var h=l0(o)+u;return{name:h,styles:o,next:Je}},f0=function(t){return t()},p0=Sl.useInsertionEffect?Sl.useInsertionEffect:!1,h0=p0||f0,Qf=E.createContext(typeof HTMLElement<"u"?n0({key:"css"}):null);Qf.Provider;var m0=function(t){return E.forwardRef(function(n,r){var i=E.useContext(Qf);return t(n,i,r)})},g0=E.createContext({}),v0=_g,x0=function(t){return t!=="theme"},$u=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?v0:x0},Vu=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(l){return t.__emotion_forwardProp(l)&&o(l)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},y0=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return $f(n,r,i),h0(function(){return o0(n,r,i)}),null},w0=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,l;n!==void 0&&(o=n.label,l=n.target);var s=Vu(t,n,r),u=s||$u(i),c=!u("as");return function(){var h=arguments,m=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&m.push("label:"+o+";"),h[0]==null||h[0].raw===void 0)m.push.apply(m,h);else{m.push(h[0][0]);for(var g=h.length,k=1;k<g;k++)m.push(h[k],h[0][k])}var y=m0(function(v,j,f){var d=c&&v.as||i,p="",x=[],C=v;if(v.theme==null){C={};for(var _ in v)C[_]=v[_];C.theme=E.useContext(g0)}typeof v.className=="string"?p=i0(j.registered,x,v.className):v.className!=null&&(p=v.className+" ");var A=d0(m.concat(x),j.registered,C);p+=j.key+"-"+A.name,l!==void 0&&(p+=" "+l);var T=c&&s===void 0?$u(d):u,b={};for(var z in v)c&&z==="as"||T(z)&&(b[z]=v[z]);return b.className=p,b.ref=f,E.createElement(E.Fragment,null,E.createElement(y0,{cache:j,serialized:A,isStringTag:typeof d=="string"}),E.createElement(d,b))});return y.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",y.defaultProps=t.defaultProps,y.__emotion_real=y,y.__emotion_base=i,y.__emotion_styles=m,y.__emotion_forwardProp=s,Object.defineProperty(y,"toString",{value:function(){return"."+l}}),y.withComponent=function(v,j){return e(v,ya({},n,j,{shouldForwardProp:Vu(y,j,!0)})).apply(void 0,m)},y}},k0=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],w=w0.bind();k0.forEach(function(e){w[e]=w(e)});const S0=w.header`
    background-color: var(--body-background-color);
    border-bottom: 1px solid;
    color: #ececec;
    padding: 0;
`,j0=w.div`
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
    outline: 2px solid var(--technical-color);

    @media screen and (min-width:480px) {
        width: 480px;
    }
    @media screen and (min-width:768px) {
        min-width: 768px;
    }
    @media screen and (min-width:1200px) {
        min-width: 1200px;
    }
`,A0=w(Wr)`
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 24px;
    line-height: 1.16;
    letter-spacing: 0.03em;
    color: var(--text-color);
    text-decoration: none;
    @media (min-width:1200px) {
            font-size: 26px;
            line-height: 1.19;
    display: inline-block;
    margin: 0 0.5rem;
    animation: bounceInLeft; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 2s; /* don't forget to set a duration! */
`,C0=w.span`
    color: var(--beckground-color);
`,E0=w.div`
    display: flex;
    align-items: center;
    padding: 0 15px;
    @media(max-width: 767px) {
        margin-top: 16px;
        justify-content: space-between;
        margin-bottom: 16px;
    }

`;var Kf={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Qu=Et.createContext&&Et.createContext(Kf),_0=["attr","size","title"];function P0(e,t){if(e==null)return{};var n=N0(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function N0(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function po(){return po=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},po.apply(this,arguments)}function Ku(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ho(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ku(Object(n),!0).forEach(function(r){T0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ku(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function T0(e,t,n){return t=z0(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z0(e){var t=O0(e,"string");return typeof t=="symbol"?t:t+""}function O0(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function Yf(e){return e&&e.map((t,n)=>Et.createElement(t.tag,ho({key:n},t.attr),Yf(t.child)))}function Gf(e){return t=>Et.createElement(R0,po({attr:ho({},e.attr)},t),Yf(e.child))}function R0(e){var t=n=>{var{attr:r,size:i,title:o}=e,l=P0(e,_0),s=i||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),Et.createElement("svg",po({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:u,style:ho(ho({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&Et.createElement("title",null,o),e.children)};return Qu!==void 0?Et.createElement(Qu.Consumer,null,n=>t(n)):t(Kf)}function L0(e){return Gf({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"},child:[]}]})(e)}function M0(e){return Gf({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(e)}w.button`
    display: inline-flex;
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
    line-height: 0;

  @media screen and (min-width:768px) {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 796px;

    &.is-open {
        display: block;
    }
}

`;w.svg`
`;w.div`
    position: fixed;
    left: 0;
    top: 0;
    padding: 48px 40px;
    width: 100 %;
    height: 100 %;
    z-index: 100;
    background-color: var(--body-background-color);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: opacity 250ms var(--timing-functione),
        visibility 250ms var(--timing-functione);

`;w.div`
    opacity: 1;
    visibility: visible;
    pointer-events: auto;

`;w.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100 %;
`;w.div`
    margin-bottom: auto;
`;w.button`
    position: absolute;
    top: -25px;
    right: -25px;
    background-color: transparent;
    border: 0;
    padding: 0;
    line-height: 0;

    &:hover,
    &:focus {
        color: var(--body-background-color);
    }

`;w.svg`
    width: 18.67px;
    height: 18.67px;

`;const Yu=w(Wr)`
  display: block;
  color: vap(--text-color);
  font-weight: 500;
  font-size: 40px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  text-decoration: none;
  transition: color 250ms var(--timing-functione);

  &:hover,
  &:focus,
  &.current {
    color: var(--beckground-color);
  }
`,Xf=()=>{const[e,t]=E.useState(!1),n=Ye(),r=E.useRef();return E.useEffect(()=>{const i=o=>{e&&r.current&&!r.current.contains(o.target)&&t(!1)};document.addEventListener("mousedown",i)},[e]),a.jsx(a.Fragment,{children:a.jsxs("nav",{ref:r,className:"navbar",children:[a.jsx("button",{className:"main-nav__button ",onClick:()=>t(i=>!i),children:e?a.jsx(L0,{style:{width:"32px",height:"32px"}}):a.jsx(M0,{className:"main-nav__icone--menu",style:{width:"32px",height:"32px"}})}),a.jsx("div",{className:`menu-nav${e?" show-menu ":""}`,children:a.jsxs("div",{className:"mobile-menu__conteiner",children:[a.jsx("div",{className:"mobile-site-nav__conteiner",children:a.jsxs("ul",{className:"mobile-site-nav",children:[a.jsx("li",{className:"mobile-site-nav__items",children:a.jsx(Yu,{to:"/",state:{from:n},children:"Студія"})}),a.jsx("li",{className:"mobile-site-nav__items",children:a.jsx(Yu,{to:"/portfolio",state:{from:n},children:"Портфоліо"})}),a.jsx("li",{className:"mobile-site-nav__items",children:a.jsx("a",{href:"",className:"mobile-site-nav__link",children:"Контакти"})})]})}),a.jsxs("div",{className:"mobile-auth-nav__conteiner",children:[a.jsxs("ul",{className:"mobile-auth-nav",children:[a.jsx("li",{className:"mobile-auth-nav__item",children:a.jsx("a",{className:"mobile-auth-nav__link mobile-auth-nav__link--phone",href:"tel:+380961111111",children:"+38 096 111 11 11"})}),a.jsx("li",{className:"mobile-auth-nav__items",children:a.jsx("a",{className:"mobile-auth-nav__link",href:"mailto:info@devstudio.com",children:"info@devstudio.com"})})]}),a.jsxs("ul",{className:"mobile-soshmed",children:[a.jsx("li",{className:"mobile-soshmed__item",children:a.jsx("a",{className:"mobile-soshmed__link",href:"#",children:"Instagram"})}),a.jsx("li",{className:"mobile-soshmed__item",children:a.jsx("a",{className:"mobile-soshmed__link",href:"#",children:"Twitter"})}),a.jsx("li",{className:"mobile-soshmed__item",children:a.jsx("a",{className:"mobile-soshmed__link",href:"#",children:"Facebook"})}),a.jsx("li",{className:"mobile-soshmed__item",children:a.jsx("a",{className:"mobile-soshmed__link",href:"#",children:"LinkedIn"})})]})]})]})})]})})},I0=w.ul`
    display: flex;
gap:40px;

    // margin-left: 93px;
    list-style: none;
    text-align: left;
    margin-left: -50px;
    transition: color 250ms var(--timing-functione), fill 250ms var(--timing-functione);

    @media(min-width: 768px) {
        margin-left: 88px;
    }
    @media(max-width: 767px) {
        display: none;
    }
`,hl=w.li`
    display: flex;
    // margin-left: 93px;
    transition: color 250ms var(--timing-functione), fill 250ms var(--timing - functione);
    &:not:last-child {
        margin-right: 50px;
    }
    @media(min-width: 768px) {
        // margin-left: 88px;
    }
    @media(max-width: 767px) {
        display: none;
    }
    &:after {
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
    display: block;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: var(--beckground-color);
    opacity: 0;
    margin-bottom: -1px;
   
    transition: opacity 250ms var(--timing-functione);
    }
    
    &:hover{
    color: var(--beckground-color);
    }
`,ml=w(Wr)`
    font-family: 'Roboto', sans-serif; 
    font-weight: 500;
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.02em;
    text-decoration: none;
    color: var(--text-color);
    position: relative;
    display: block;
    padding-top: 32px;
    padding-bottom: 32px;

    @media screen and(min - width: 1200px) {
        padding-top: 32px;
        padding-bottom: 32px;
    }



    &:hover{
    color: var(--beckground-color); 
    &:after{
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
    display: block;
    width: 100%;
    height: 4px;
    border-ra1dius: 2px;
    background-color: var(--beckground-color);
    opacity: 1;
    margin-bottom: -2px;
    transition: opacity 250ms var(--timing-functione);} 
}

`,D0=w.a`

    color: var(--beckground-color);
    &:after{
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
    display: block;
    width: 100%;
    height: 4px;
    border-ra1dius: 2px;
    background-color: var(--beckground-color);
    opacity: 1;
    margin-bottom: -2px;
    transition: opacity 250ms var(--timing-functione);} 
`;w.div`
    display: none;
    margin-left: auto;
    list-style: none;
    padding: 0;
    margin: 0;   
    // @media screen and(min-width: 1200px) {
    //     padding - right: 15px;
    // }

    // &:not(:first-child) {
    //     @media screen and(min- width: 1200px) {
    //         margin-left: 50px;
    //         margin-top: 0px;
    //     }
    // }
    // @media screen and(min-width: 768px) {
    //     display: block;
    //     margin-top: 10px;

    // }

    // @media screen and(min-width: 1200px) {
    //     display: flex;
    }
`;w.li`
    display: flex;
    margin-left: 93px;
    transition: color 250ms var(--timing - functione), fill 250ms var(--timing - functione);
    &:not:last-child {
        margin - right: 50px;
    }
    @media(min-width: 768px) {
        margin-left: 88px;
    }
    @media(max-width: 767px) {
        display: none;
    }

`;w.a`
    font-weight: 500;
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.02em;
    text-decoration: none;
    color: var(--text-color);
    position: relative;
    display: block;
    padding-top: 32px;
    padding-bottom: 32px;

    @media screen and(min - width: 1200px) {
        padding-top: 32px;
        padding-bottom: 32px;
    }
}
`;const F0=()=>{const e=Ye();return a.jsxs(I0,{children:[a.jsx(hl,{children:a.jsx(ml,{to:"/",state:{from:e},children:a.jsx(D0,{children:"Студія"})})}),a.jsx(hl,{children:a.jsx(ml,{to:"/portfolio",state:{from:e},children:"Портфоліо"})}),a.jsx(hl,{children:a.jsx(ml,{href:"#",children:"Контакти"})})]})},U0=w.ul`
    display: none;
    margin-left: auto;
    //  padding-right: 15px;   
    @media screen and (min-width:1200px) {
    padding-right: 15px;
    }


        @media screen and (min-width:768px) {
            display: block;
            margin-top: 10px;
        }
    
        @media screen and (min-width:1200px) {
            display: flex;
        }
`,Gu=w.li`
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover, 
  &:focus {
    color: var(--beckground-color);
    fill: var(--beckground-color);
  }
  @media screen and(min-width: 1200px) {
    padding-top: 32px;
    padding-bottom: 32px;
  }
  @media (min-width: 768px) {
    margin-left: 48px;
    padding-bottom: 10px;
  }
`,Xu=w.a`
    font-family: 'Roboto', sans-serif;  
    font-weight: 500;
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.02em;
    text-decoration: none;
    color: var(--text-color-p);
    position: relative;
    // display: block;
    display: flex;
    align-content: center;
    //  margin-bottom: 10px;
    // padding-top: 32px;
   
    &:hover{
    color: var(--beckground-color); 
    fill: var(--beckground-color); }

    ;
`,Zu=w.svg`
    margin-right: 10px;
}
`,M="/goit-markup-react/assets/icons-WWKJvoXN.svg",Zf=()=>a.jsxs(U0,{children:[a.jsxs(Gu,{children:[a.jsx(Zu,{width:"16",height:"12",children:a.jsx("use",{href:M+"#poshta"})}),a.jsx(Xu,{href:"mailto:info@devstudio.com",children:"info@devstudio.com"})]}),a.jsx(Gu,{children:a.jsxs(Xu,{href:"tel:+380961111111",children:[a.jsx(Zu,{width:"12",height:"16",children:a.jsx("use",{href:M+"#smartphone"})}),"+38 096 111 11 11"]})})]}),b0=()=>{const e=Ye();return a.jsx(S0,{children:a.jsx(j0,{children:a.jsxs(E0,{children:[a.jsxs(A0,{to:"/",state:{from:e},lang:"en","data-wow-offset":"100",children:[a.jsx(C0,{children:"Web"}),"Studio"]}),a.jsxs(a.Fragment,{children:[" ",a.jsx(F0,{})," ",a.jsx(Zf,{})]})," ",a.jsx(Xf,{})]})})})},B0="/goit-markup-react/assets/%D1%81oworker-mobile-DkjrP_lB.jpg",W0="/goit-markup-react/assets/%D1%81oworker-mobile@2x-CfTHwFb7.jpg",H0="/goit-markup-react/assets/%D1%81oworker-tablet-DNCU7IaL.jpg",$0="/goit-markup-react/assets/%D1%81oworker-tablet@2x-CltOuUgI.jpg",V0="/goit-markup-react/assets/%D1%81oworker-CBK_fIvu.jpg",Q0="/goit-markup-react/assets/%D1%81oworker@2x-DEOHsqO2.jpg",K0=w.section`
  padding-top: 118px;
  padding-bottom: 118px;
  background-color: var(--footer-bacground-color);
  text-align: center;
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${B0});
  background-position: center;
  background-size: cover;
  max-width: 1600px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${H0});
  }

  @media screen and (min-width: 1200px) {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${V0});
    padding-top: 200px;
    padding-bottom: 200px;
  }

  @media screen and (min-device-pixel-ratio: 2) and (max-width: 767px),
    screen and (min-resolution: 192dpi) and (max-width: 767px),
    screen and (min-resolution: 2dppx) and (max-width: 767px) {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${W0});
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 768px),
    screen and (min-resolution: 192dpi) and (min-width: 768px),
    screen and (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${$0});
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1200px),
    screen and (min-resolution: 192dpi) and (min-width: 1200px),
    screen and (min-resolution: 2dppx) and (min-width: 1200px) {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${Q0});
  }
`,Y0=w.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
  outline: 2px solid var(--technical-color);

  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    min-width: 768px;
  }
  @media screen and (min-width: 1200px) {
    min-width: 1200px;
  }
`,G0=w.h1`
  font-weight: 900;
  font-size: 26px;
  line-height: 1.61;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--body-background-color);
  margin-top: 0px;
  margin-bottom: 30px;

  @media (min-width: 1200px) {
    font-size: 44px;
    line-height: 1.36;
  }
`,X0=w.button`
  font-family: "Roboto";
  background: var(--beckground-color);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.87;
  display: inline-block;
  align-items: center;
  text-align: center;
  letter-spacing: 0.06em;
  color: var(--body-background-color);
  border-color: transparent;
  padding: 8px 30px;
  transition: background-color 250ms var(--timing-functione),
    box-shadow 250ms var(--timing-functione),
    border-radius 250ms var(--timing-functione);
  &:hover,
  &:focus {
    background-color: var(--button-hover-focus);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
  }
`,Z0=()=>a.jsx(K0,{children:a.jsxs(Y0,{children:[a.jsxs(G0,{children:["Ефективні рішення для ",a.jsx("br",{}),"вашого бізнесу"]}),a.jsx(X0,{type:"button",id:"data-modal-open",children:"Замовити послугу"})]})}),J0=w.section`
    padding-top: 60px;
        padding-bottom: 60px;
    @media (min-width:1200px) {
            padding-top: 94px;
            padding-bottom: 94px;
        }
`,q0=w.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
  outline: 2px solid var(--technical-color);

  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    min-width: 768px;
  }
  @media screen and (min-width: 1200px) {
    min-width: 1200px;
  }
`,ev=w.h2`
    font-weight: 700;
    font-size: 28px;
    line-height: 1.17;
    text-align: center;
    letter-spacing: 0.03em;
    color: var(--text-color);
    margin: 0px;
    margin-bottom: 30px;
    position: fixed;
    transform: scale(0);

    @media(min-width: 1200px) {
        font-size: 36px;
        line-height: 1.16;
        margin-bottom: 50px;
    }
`,tv=w.ul`
    @media screen and (min-width:768px) {
            display: flex;
            flex-wrap: wrap;
            margin: 0 0 -30px -30px;
        }

    @media screen and (min-width:1200px) {
            display: flex;
            flex-wrap: wrap;

        }
    padding: 0px;
    list-style: none;
    display: inline-block;
    margin: 0 0.5rem;
    animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 3s; /* don't forget to set a duration! */
    animate__fast: 800ms;

`,ci=w.li`
        @media screen and (min-width:768px) {
            flex-basis: calc(100% / 2 - 30px);
            margin-left: 30px;
            margin-bottom: 30px;
            list-style: none;
            }
        @media screen and (min-width:1200px) {
            flex-basis: calc(100% / 4 - 30px);
            margin-left: 30px;
}
`,di=w.div`
    height: 120px;
    margin-bottom: 30px;
    background-color: var(--icone-bg-color);
    display: flex;
    justify-content: center;
    align-items: center;

`,fi=w.svg`
 background - color: var(--icone-bg-color);

`,pi=w.h3`
    font-weight: 700;
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.03em;
    text-align: center;
    color: var(--text-color);
    margin-bottom: 10px;
    margin-top: 0 %;
    text-align: center;
    @media screen and(min-width: 768px) {
        text-align: start;
    }
`,hi=w.p`
    font-size: 14px;
    line-height: 1.71;
    letter-spacing: 0.03em;
    text-decoration: none;
    color: var(--text-color-p);
    margin-top: 0;
    
`,nv=()=>a.jsx(J0,{children:a.jsxs(q0,{children:[a.jsx(ev,{children:"Опис діятельності"}),a.jsxs(tv,{children:[a.jsxs(ci,{children:[a.jsx(di,{children:a.jsx(fi,{width:"70",height:"70",children:a.jsx("use",{href:M+"#antenna"})})}),a.jsx(pi,{children:"УВАГА ДО ДЕТАЛЕЙ"}),a.jsx(hi,{children:"Ідейні міркування, і навіть початок повсякденної роботи з формування позиції."})]}),a.jsxs(ci,{children:[a.jsx(di,{children:a.jsx(fi,{width:"70",height:"70",children:a.jsx("use",{href:M+"#clock"})})}),a.jsx(pi,{children:"ПУНКТУАЛЬНІСТЬ"}),a.jsx(hi,{children:"Завдання організації, особливо рамки і місце навчання кадрів тягне у себе."})]}),a.jsxs(ci,{children:[a.jsx(di,{children:a.jsx(fi,{width:"70",height:"70",children:a.jsx("use",{href:M+"#diagram"})})}),a.jsx(pi,{children:"ПЛАНУВАННЯ"}),a.jsx(hi,{children:"Так само консультація з широким активом значною мірою зумовлює."})]}),a.jsxs(ci,{children:[a.jsx(di,{children:a.jsx(fi,{width:"70",height:"70",children:a.jsx("use",{href:M+"#astronaut"})})}),a.jsx(pi,{children:"СУЧАСНІ ТЕХНОЛОГІЇ"}),a.jsx(hi,{children:"Значимість цих проблем настільки очевидна, що реалізація планових завдань."})]})]})]})}),rv=w.section`

    display: flex;
    justify-content: center;
    align-items: center;

    padding-top: 0;
    @media (max-width:768px) {
    padding-bottom: 0px;
    }





    // // padding-top: 60px;
    //     padding-bottom: 60px;
    //         padding-bottom: 0px;
    // padding: 0px;
    // list-style: none;
    // display: inline-block;
    margin: 0 0.5rem;
    animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 5s; /* don't forget to set a duration! */
  
    @media (min-width:1200px) {
            // padding-top: 94px;
            margin-bottom: 60px;
        }
`,iv=w.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
  outline: 2px solid var(--technical-color);

  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    min-width: 768px;
  }
  @media screen and (min-width: 1200px) {
    min-width: 1200px;
  }
      @media screen and (max-width:1200px) {
        display: none;
    }
`,ov=w.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 1.17;
  text-align: center;
  letter-spacing: 0.03em;
  color: var(--text-color);
  margin: 0px;
  margin-bottom: 30px;

  @media (min-width: 1200px) {
    font-size: 36px;
    line-height: 1.16;
    margin-bottom: 50px;
  }
`,lv=w.ul`
  display: flex;
  gap: 30px;
  align-content: center;
  justify-content: center;

`,gl=w.li`
  display: inline-block;
  position: relative;

  &:before {
    display: inline-block;
    position: absolute;
    content: "";
    width: 100%;
    height: 25%;
    bottom: 0;
    left: 0;
    background-color: rgba(47, 48, 58, 0.8);
  }
  @media screen and(max-width: 1200px) {
    display: none;
  }
`,vl=w.img`
  display: flex;
`,xl=w.p`
  position: absolute;
  margin: 0;
  bottom: 0;
  width: 100%;
  height: 70px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14;
  color: var(--body-background-color);
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
`,Ju="/goit-markup-react/assets/photo_2022-07-14_23-06-50-w-9GE9pw.jpg",qu="/goit-markup-react/assets/photo_2022-07-14_23-08-23-ChSN16Q0.jpg",ec="/goit-markup-react/assets/photo_2022-07-14_23-08-29-DEV7w-ry.jpg",av=()=>a.jsx(rv,{children:a.jsxs(iv,{children:[a.jsx(ov,{children:"Чим ми займаємося"}),a.jsxs(lv,{children:[a.jsxs(gl,{children:[a.jsx("a",{href:Ju,children:a.jsx(vl,{src:Ju,alt:"photo",width:"370",height:"294"})}),a.jsx(xl,{children:"Десктопні додатки"})]}),a.jsxs(gl,{children:[a.jsx("a",{href:qu,children:a.jsx(vl,{src:qu,alt:"photo",width:"370",height:"294"})}),a.jsx(xl,{children:"Мобільні додатки"})]}),a.jsxs(gl,{children:[a.jsx("a",{href:ec,children:a.jsx(vl,{src:ec,alt:"photo",width:"370",height:"294"})}),a.jsx(xl,{children:"Дизайнерські рішення"})]})]})]})}),sv=w.section`
    background-color: var(--teams-bacground-color);
    align-items: center;
    padding-top: 60px;
        // padding-bottom: 60px;
            padding-bottom: 0px;

    
    @media (min-width:1200px) {
            padding-top: 94px;
            padding-bottom: 94px;
            
        }
`,uv=w.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
  outline: 2px solid var(--technical-color);

  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    min-width: 768px;
  }
  @media screen and (min-width: 1200px) {
    min-width: 1200px;
  }
`,cv=w.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 1.17;
  text-align: center;
  letter-spacing: 0.03em;
  color: var(--text-color);
  margin: 0px;
  margin-bottom: 30px;
  @media (min-width: 1200px) {
    font-size: 36px;
    line-height: 1.16;
    margin-bottom: 50px;
  }
`,dv=w.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  padding: 0 0 20px 0;
  list-style: none;
  // display: inline-block;


  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin: 0 0 -30px -30px;
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    flex-wrap: wrap;
  }

  // margin: 0 0.5rem;
  // animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
  // animation-duration: 3s; /* don't forget to set a duration! */
  // animate__fast: 800ms;
`,mi=w.li`
        @media screen and (min-width:768px) {
background-color: var(--body-background-color);
        @media screen and (min-width:1200px) {
background-color: var(--body-background-color);
width: 270px;
}
`,gi=w.div`
  display: block;
  padding: 30px 0;
  margin-top: 0;
  margin-bottom: 0;
  outline: 2px solid var(--technical-color);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 4px 4px;
`,vi=w.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.18;
  text-align: center;
  letter-spacing: 0.03em;
  color: var(--text-color);
  margin-top: 0;
  margin-bottom: 10px;
`,xi=w.p`
  font-size: 16px;
  line-height: 1.18;
  text-align: center;
  letter-spacing: 0.03em;
  color: var(--text-color);
  margin-top: 0;
  font-size: 16px;
  color: var(--text-color-p);
`,yi=w.ul`
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-around;
  justify-content: center;
  gap: 10px;
  margin-top: 16px;
  list-style: none;
  padding: 0;
  // margin: 0
`,de=w.li`
  box-sizing: border-box;
  outline: 2px solid var(--technical-color);
  transition: background-color 250ms var(--timing-functione),
    fill 250ms var(--timing-functione);
`,fe=w.a`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    color: var(--icone-color);
    fill: currentColor;
    outline: 2px solid var(--technical-color);
    transition: background-color 250ms var(--timing-functione), fill 250ms var(--timing-functione);
    &:hover,
    &:focus {
    background-color: var(--beckground-color);
    fill: var(--body-background-color);
`,pe=w.svg`
  &:hover,
  &:focus {
    fill: var(--body-background-color);
  }
`,fv="/goit-markup-react/assets/product-designer-mobile-CR9XjxZR.jpg",pv="/goit-markup-react/assets/frontend-developer-mobile-CKsiOpXf.jpg",hv="/goit-markup-react/assets/marketing-mobile-D4eyMM5O.jpg",mv="/goit-markup-react/assets/ui-mobile-CkzJuxso.jpg",gv=()=>a.jsx(sv,{children:a.jsxs(uv,{class:"animate__animated animate__fadeInUp wow","data-wow-offset":"100",children:[a.jsx(cv,{children:"Наша команда"}),a.jsxs(dv,{children:[a.jsxs(mi,{children:[a.jsx("img",{src:fv,alt:"mikola-tarasov-photo"}),a.jsxs(gi,{children:[a.jsx(vi,{children:"Ігор Дем`яненко"}),a.jsx(xi,{lang:"en",children:"Product Designer"}),a.jsxs(yi,{children:[a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка інстаграм",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-instagram"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка твітер",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-tviter"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка феїсбук",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-facebook"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка линкедін",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-linkedin"})})})})]})]})]}),a.jsxs(mi,{children:[a.jsx("img",{src:pv,alt:"mikola-tarasov-photo"}),a.jsxs(gi,{children:[a.jsx(vi,{children:"Ольга Рєпіна"}),a.jsx(xi,{lang:"en",children:"Frontend Developer"}),a.jsxs(yi,{children:[a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка інстаграм",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-instagram"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка твітер",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-tviter"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка феїсбук",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-facebook"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка линкедін",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-linkedin"})})})})]})]})]}),a.jsxs(mi,{children:[a.jsx("img",{src:hv,alt:"mikola-tarasov-photo"}),a.jsxs(gi,{children:[a.jsx(vi,{children:"Микола Тарасов"}),a.jsx(xi,{lang:"en",children:"Marketing"}),a.jsxs(yi,{children:[a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка інстаграм",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-instagram"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка твітер",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-tviter"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка феїсбук",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-facebook"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка линкедін",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-linkedin"})})})})]})]})]}),a.jsxs(mi,{children:[a.jsx("img",{src:mv,alt:"mikola-tarasov-photo"}),a.jsxs(gi,{children:[a.jsx(vi,{children:"Михайло Єрмаков"}),a.jsx(xi,{lang:"en",children:"UI Designer"}),a.jsxs(yi,{children:[a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка інстаграм",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-instagram"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка твітер",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-tviter"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка феїсбук",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-facebook"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка линкедін",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-linkedin"})})})})]})]})]})]})]})}),vv=w.section`
    padding-top: 60px;
        padding-bottom: 60px;

    
        @media (min-width:1200px) {
            padding-top: 94px;
            padding-bottom: 94px;
        }
`,xv=w.div`
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
    outline: 2px solid var(--technical-color);

    @media screen and (min-width:480px) {
        width: 480px;
    }
    @media screen and (min-width:768px) {
        min-width: 768px;
    }
    @media screen and (min-width:1200px) {
        min-width: 1200px;
    }
`,yv=w.h2`
    font-weight: 700;
    font-size: 36px;
    line-height: 1.16;
    text-align: center;
    letter-spacing: 0.03em;
    color: var(--text-color);
    margin: 0px;
    margin-bottom: 50px;
`,wv=w.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    // column-gap: 30px;
    gap: 28px;
    list-style: none;
    padding: 0;
    margin: 0;
`,ln=w.li`
    // flex-basis: calc((100% - 30px) / 2);

        @media screen and (min-width:768px) {
            flex-basis: calc((100% - 60px) / 3);
        }

        @media screen and (min-width:1200px) {
            flex-basis: calc((100% - 150px) / 6);
        }
`,an=w.a`
    display: flex;
    justify-content: center;
    align-items: centers;
    height: 92px;
    color: var(--icone-color);
    fill: currentColor;
    border: 1px solid var(--icone-color);
    border-radius: 4px;
    outline: 2px solid var(--technical-color);
    transition: fill 250ms var(--timing-functione), border-color 250ms var(--timing-functione);
    &:hover,
    &:focus {
        fill: var(--beckground-color);
        border-color: var(--beckground-color);
`,sn=w.svg`
        display: flex;
        align-self: center;
        width: 170px;
        height: 92px;
`,kv=()=>a.jsx(vv,{children:a.jsxs(xv,{children:[a.jsx(yv,{children:"Постійні клієнти"}),a.jsxs(wv,{children:[a.jsx(ln,{children:a.jsx(an,{children:a.jsx(sn,{"aria-label":"іконка логотип",width:"106",height:"60",children:a.jsx("use",{href:M+"#icon-Logo"})})})}),a.jsx(ln,{children:a.jsx(an,{children:a.jsx(sn,{"aria-label":"іконка логотип",width:"106",height:"60",children:a.jsx("use",{href:M+"#icon-Logo-2"})})})}),a.jsx(ln,{children:a.jsx(an,{children:a.jsx(sn,{"aria-label":"іконка логотип",width:"106",height:"60",children:a.jsx("use",{href:M+"#icon-Logo-3"})})})}),a.jsx(ln,{children:a.jsx(an,{children:a.jsx(sn,{"aria-label":"іконка логотип",width:"106",height:"60",children:a.jsx("use",{href:M+"#icon-Logo-4"})})})}),a.jsx(ln,{children:a.jsx(an,{children:a.jsx(sn,{width:"106",height:"60",children:a.jsx("use",{href:M+"#icon-Logo-5"})})})}),a.jsx(ln,{children:a.jsx(an,{children:a.jsx(sn,{"aria-label":"іконка логотип",width:"106",height:"60",children:a.jsx("use",{href:M+"#icon-Logo-6"})})})})]})]})}),Sv=()=>a.jsxs(a.Fragment,{children:[a.jsx(b0,{}),a.jsx(Z0,{}),a.jsx(nv,{}),a.jsx(av,{}),a.jsx(gv,{}),a.jsx(kv,{})]}),jv=w.header`
    background-color: var(--body-background-color);
    border-bottom: 1px solid;
    color: #ececec;
    padding: 0;
`,Av=w.div`
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
    outline: 2px solid var(--technical-color);

    @media screen and (min-width:480px) {
        width: 480px;
    }
    @media screen and (min-width:768px) {
        min-width: 768px;
    }
    @media screen and (min-width:1200px) {
        min-width: 1200px;
    }
`,Cv=w(Wr)`
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 24px;
    line-height: 1.16;
    letter-spacing: 0.03em;
    color: var(--text-color);
    text-decoration: none;
    @media (min-width:1200px) {
            font-size: 26px;
            line-height: 1.19;
    display: inline-block;
    margin: 0 0.5rem;
    animation: bounceInLeft; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 2s; /* don't forget to set a duration! */
`,Ev=w.span`
    color: var(--beckground-color);
`,_v=w.div`
    display: flex;
    align-items: center;
    padding: 0 15px;
    @media(max-width: 767px) {
        margin-top: 16px;
        justify-content: space-between;
        margin-bottom: 16px;
    }

`,Pv=w.ul`
    display: flex;
    gap:40px;
    list-style: none;
    text-align: left;
    margin-left: -50px;
    transition: color 250ms var(--timing-functione), fill 250ms var(--timing-functione);

    @media(min-width: 768px) {
        margin-left: 88px;
    }
    @media(max-width: 767px) {
        display: none;
    }
`,yl=w.li`
    display: flex;
    // margin-left: 93px;
    transition: color 250ms var(--timing-functione), fill 250ms var(--timing - functione);
    &:not:last-child {
        margin-right: 50px;
    }
    @media(min-width: 768px) {
        // margin-left: 88px;
    }
    @media(max-width: 767px) {
        display: none;
    }
    &:after {
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
    display: block;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: var(--beckground-color);
    opacity: 0;
    margin-bottom: -1px;
    transition: opacity 250ms var(--timing-functione);
    }
    
    &:hover{
    color: var(--beckground-color);
    }
`,wl=w(Wr)`
    font-family: 'Roboto', sans-serif; 
    font-weight: 500;
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.02em;
    text-decoration: none;
    color: var(--text-color);
    position: relative;
    display: block;
    padding-top: 32px;
    padding-bottom: 32px;
    @media screen and(min - width: 1200px) {
        padding-top: 32px;
        padding-bottom: 32px;
    }
    &:hover{
    color: var(--beckground-color); 
    &:after{
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
    display: block;
    width: 100%;
    height: 4px;
    border-ra1dius: 2px;
    background-color: var(--beckground-color);
    opacity: 1;
    margin-bottom: -2px;
    transition: opacity 250ms var(--timing-functione);} 
}

`,Nv=w.a`

    color: var(--beckground-color);
    &:after{
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
    display: block;
    width: 100%;
    height: 4px;
    border-ra1dius: 2px;
    background-color: var(--beckground-color);
    opacity: 1;
    margin-bottom: -2px;
    transition: opacity 250ms var(--timing-functione);} 
`;w.div`
    display: none;
    margin-left: auto;
    list-style: none;
    padding: 0;
    margin: 0;   
`;w.li`
    display: flex;
    margin-left: 93px;
    transition: color 250ms var(--timing - functione), fill 250ms var(--timing - functione);
    &:not:last-child {
        margin - right: 50px;
    }
    @media(min-width: 768px) {
        margin-left: 88px;
    }
    @media(max-width: 767px) {
        display: none;
    }

`;w.a`
    font-weight: 500;
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.02em;
    text-decoration: none;
    color: var(--text-color);
    position: relative;
    display: block;
    padding-top: 32px;
    padding-bottom: 32px;

    @media screen and(min - width: 1200px) {
        padding-top: 32px;
        padding-bottom: 32px;
    }
}
`;const Tv=()=>{const e=Ye();return a.jsxs(Pv,{children:[a.jsx(yl,{children:a.jsx(wl,{to:"/",state:{from:e},children:"Студія"})}),a.jsx(yl,{children:a.jsx(wl,{to:"/portfolio",state:{from:e},children:a.jsx(Nv,{children:"Портфоліо"})})}),a.jsx(yl,{children:a.jsx(wl,{href:"#",children:"Контакти"})})]})},zv=()=>{const e=Ye();return a.jsx(jv,{children:a.jsx(Av,{children:a.jsxs(_v,{children:[a.jsxs(Cv,{to:"/",state:{from:e},lang:"en","data-wow-offset":"100",children:[a.jsx(Ev,{children:"Web"}),"Studio"]}),a.jsxs(a.Fragment,{children:[" ",a.jsx(Tv,{})," ",a.jsx(Zf,{})]})," ",a.jsx(Xf,{id:"js-menu-container"})]})})})},Ov=w.section`
        padding-top: 60px;
        padding-bottom: 60px;
    @media (min-width:1200px) {
            padding-top: 94px;
            padding-bottom: 94px;
        }
`,Rv=w.div`
    display: flex;
    justify-content: center;
    // margin-bottom: 30px;
    flex-direction: column;
    @media screen and (max-width: 767px) {
        flex-wrap: wrap;
        justify-content: start;
        margin-bottom: 40px;
        gap: 15px 8px;

    }
`,Lv=w.h1`
    position: fixed;
    transform: scale(0);

`,Mv=w.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
        @media screen and (max-width: 767px) {
        flex-wrap: wrap;
        justify-content: start;
        margin-bottom: 40px;
        gap: 15px 8px;

    }
`,er=w.li`
    display: inline-block;
    margin-left: 8px;
    @media screen and(max-width: 767px){
        margin-left: 0px;
    }
`,tr=w.button`
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 16px;
    line-height: 1.62;
    border-radius: 4px;
    border-color: transparent;
    text-align: center;
    background: #f5f4fa;
    border-radius: 4px;
    display: inline-block;
    padding: 6px 22px;
    background-color: var(--teams-bacground-color);
    transition: color 250ms var(--timing-functione), background-color 250ms var(--timing-functione),
        box-shadow 250ms var(--timing-functione);

    &:hover,
    &:focus {
        color: var(--body-background-color);
        background-color: var(--button-hover-focus);
        box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
            0px 2px 2px rgba(0, 0, 0, 0.12);
    }
`,Iv=()=>a.jsxs(a.Fragment,{children:[a.jsx(Lv,{children:"Портфоліо"}),a.jsxs(Mv,{children:[a.jsxs(er,{children:[" ",a.jsx(tr,{children:"Усі"})," "]}),a.jsx(er,{children:a.jsx(tr,{children:"Веб-сайти"})}),a.jsx(er,{children:a.jsx(tr,{children:"Додатки"})}),a.jsx(er,{children:a.jsx(tr,{children:"Дизайн"})}),a.jsx(er,{children:a.jsx(tr,{children:"Маркетинг"})})]})]}),Dv=w.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: -30px;

    @media screen and (max-width:768px) {
        margin-top: -30px;
    }
`,rt=w.li`
        margin-left: 30px;
        position: relative;
        flex-basis: calc(100% / 1 -30px);
        margin-top: 30px;


        @media screen and (min-width:768px) {
            margin-left: 30px;
            flex-basis: calc(100% / 2 -30px);
        }

        @media screen and (min-width:1200px) {
            flex-basis: calc(100% / 3 -30px);
        }
`,it=w.div`
    display: block;
    padding: 24px 20px;
    outline: 2px solid var(--technical-color);
    border-left: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    flex-grow: 1;
`,ot=w.h2`
    font-weight: 700;
    font-size: 18px;
    line-height: 2;
    letter-spacing: 0.06em;
    margin-top: 0px;
    margin-bottom: 4px;
    color: var(--text-color);
`,lt=w.p`
 
    font-size: 16px;
    line-height: 1.8;
    letter-spacing: 0.06em;
    color: var(--text-color-p);
    margin-top: 0px;
    margin-bottom: 4px;
`;w.a`
    text-decoration: none;
    display: flex;
    flex-direction: column;
    height: 100%;
    transition: box-shadow 250ms var(--timing-functione);

    &:hover,
    &:focus {
        display: block;
        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
            1px 4px 6px rgba(0, 0, 0, 0.16);
            
    }



`;const tc="/goit-markup-react/assets/img-desktop-DHCT8Soc.jpg",nc="/goit-markup-react/assets/img2-desktop-D7-ZjpYy.jpg",rc="/goit-markup-react/assets/img3-desktop-D_3z_YZf.jpg",ic="/goit-markup-react/assets/img4-desktop-CI8oy9vU.jpg",oc="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAgICAgJCAkKCgkNDgwODRMREBARExwUFhQWFBwrGx8bGx8bKyYuJSMlLiZENS8vNUROQj5CTl9VVV93cXecnNEBCAgICAkICQoKCQ0ODA4NExEQEBETHBQWFBYUHCsbHxsbHxsrJi4lIyUuJkQ1Ly81RE5CPkJOX1VVX3dxd5yc0f/CABEIASYBcgMBIgACEQEDEQH/xAAzAAEAAgMBAQEAAAAAAAAAAAAAAgMBBAUGBwgBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/aAAwDAQACEAMQAAAA+7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIVlkYZhbKiUrUZAAAAAAAAAAAAAAAAAABXAnDGYDUxttuNzuHb1bh9zqzIz6s5TpFyucsgAAAAAAAAAAAAAArps0TbzRdDOcZNXg+pr83fgb/QrpbErJelhGenzb16uxzt8lgJzpqN1xuzIAAAAAAAAAAAACnn9Hmlkoi23XybOdeyFiIo5PdGjvAYpL6eJxTucKimXV9589+hABjWidpjMwAAAAAAAAABVzenyS6VUyQMgnOkbGKa4bWvxtA6PIzRKFSoVqjrfRvmnu623tHQo5umynk9jDol0eZi1fST8xvdHN2Wvsb4BMAAAAAAAPPehwcS6zRN3NFpJjJnGA53R5pysSiVa9+qVUbHTpfidbuT5+iu3Vvx20K9uN745XWrrnCWv1YnGHna37tHzVL78PS8sAAAAAAABGQ5mn34nKsaZuKpEub0OccyKJXrS4Z2Ox5He8z1PZZ8p14npVWr01diUJWK/PRPo/OeP0KabvKnXF49Dnbc1/RA9TxwAAAAAAAAAEZDl6foIHH0Op5UhxNLYNW3bvide+dfmerOVdmO93S461fU+f4vB0pt6KMWRzWQhKshs6mzNf0gPU8cAAAAAAAAAAADFN+DznF93A8Db6zTh5PQ73mPN9XcnVZh0ZzGUubwe9wL1xFGYjCWuS19Tf1y5ff7vV6eP03pfCdHbn9vnznUmN9XYAAAAAAAAAAAMZEY2DU8p7XFb/ACDP1jyXH3eezqz5evU893/NWi2jQ3dctDd9T0uri5fS3Nvbn1dvYvKtqewjG3HYlZsU2l0q5kkRIAAAAAAAAAAAAFHkPbRpf4Zxf0Lx89vnfS71W3PztncuNW/ZuRr7F90qL7Zlds5kbMzMSSAAAAAAAAAAAAAAAMRmKdToYONHswOZbuDXndIqnZkhKWTEgAAAAAAAAAAAAAAAAAAYyMYkI5yMZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//xABAEAACAgECAwQGBwUGBwAAAAABAgADEQQSBSExEEFRYRMgMkBxgQYUM1BygrEiIyRCsiU0UmSRoTBjcHSAwdH/2gAIAQEAAT8A/wDIYv4QOYGB+6y8JJ9QEiBh9zl4ST2Y7OQ7/UyQYG+4y/hCSezEPKPqu5B8zLNYN5TeWcDJRTzxDqLLhaq7gQwClBkj8QPTzBml+tJgWWhmz/KMdhsrDqhdQxGQueZ7c4gfxgIPv1j7FzN+7v8AV1RbaPDvllmosHo2qdCxKnHMYPmMSvT5r2XYcdQDz2/A8olLsBgcvEypKUfbvBsxnGecHp3PPCYbuIbcJXUla7UBx5kn9YSB1lms01TIr2Bd7BVz3k90BBHLtDmBgffNR9mYIth74CD28jDVXn2BCErGdn+gzALnP7eEAJBAOdw+PLEStEAAHQYBJyf9TMgDnLNZWCUQhrAu7ZkbiPIRbNfq9rbPQqeeH5v8CByHyMo4fXUd3MtgAsTliB4mKqryA9Sy2uobnYASnii26qulF5HOSfIe93/ZNBB2K574GB9XUXWVVsyVM+BnC4JPwzGTX6snNnoU7tnN/LmeQ8xNPw+mkcl78+PWAADAHaZbfVUMu4E1HF+oqGPMy3UvYxLMSfOcJbPEtP8AP9D73f8AZN2D1A5gYHv/AOBdqaaRl2A8pqeLMciobR498svd2JLExnjNODHPE9P+b9D6hYKMkgCDWactt3wEH3W77J/hAYD6wYiBx2Z7LtVTT7Tc/AdZqOJWtyQbB/vLLGYkkxjC0ZoTOCn+1NN8W/Q9jMqjJIAluuUcqxnzlltlpy7EzErvuq9hiPKVcRU4Fi48xEsRxlWBHud32b/A9gMB7c+oHIl2prpUM2fIS7X3WZC/sjy6wkmMY0YwmNGM4IccU057huyflLdaByrGfMyyx7DliTLbK6kL2OqKOpY4EHGtO+oFNVNtnMAlV6buh2nnjz7MTEDOhypIPiJVxCxeVg3Dx6GVaqm32X5+B9yt9PRa29f2SxxK7Uboefh2D1c9nEfYr+J7DGjGMYTiIllrba0LHylHBicNe/5VlVFNK7a0Cjsu0d9uoFn121ax0rTAljLen8bpq0o7vSNlt3djHfNMlC1WNpqdpJOcqVLN5k859V4vqWzfYKvJWO1fwhSCT5ky3U6XhulH1jUkitOrsC7f/TNHra9UisqOpK5wVOB+bp2GHlzziab6R0DX6bRJb6U2WBOXML8/cSAQQQCJdw5GyaztPh3RjfQcWLyiWo+MHn4TPrcR9iv4nsMbpHi1W2nbWhYynhI63t+VZXXXUoWtAo8BCTg4GTF1BDBLU2tgklclAB4sQIrq6hlYEHoQcgw3uXK8lHPr5RbPSNsetXXPhkeRl2iqvurssewhOYTcQufEgRX1aEvaK66hyCrlyZXpdFqbFt+qNX6J9yhl2KzH+bHeRMRiACSQAOpmu+kej025af31nl7M1/FtbrSRbZhP8C8hOAHHG+Gn/MJ7myqwIIBBl3D1POo7T4QtdQ22xTEsRxyPy7M9vEfYr+JmYTGMeU6q2hjsb4iUcUpfAsGw/wC0DKQCCCOx0V1KuoZT3EZEWlVsawM+SMBdx2j4CelIYC+gbmbC7cvy8TyGIhrOdhHXu7DCygEsQAOpM130k0lG5aB6Z/Eclmu4rrdaf3tp2dyLyWGMZwU44xw7/ua/6vdWVWBDAES7h4POpsHwM33UnbYpi2o45Ht4if2K/iewy++qkEu4Eu19lh20rgePfNIGAcs2SSIMSm+2j2HI8u6U8TRsC1dp8R0iujLlWBHlBCAZXXVUCK0VQfAYjuqKWdgFHUk4mt+kmmpylA9K/j0WaziWs1rZutO3uUclEMaEwmcKOOK8PP8Ama/6vd3RXGGAIl3D++lseRhe2k7bFMSxW6GcR9iv4mW31UruscKJqOKvYSunX8xE9G7sWtYkmBO4CVKVBg7UtsrOUcqZTxIezavzE+sU7DZ6Rdg78zW/STT1gppl9I3ieSzWcQ1erObrSR3L0A7WMJMJhM4c2OI6I+Gor/qHvLojjDKCJdw7GTS3yM45qNZRXUiVkuWI6Q0XWNuvckxagBgDEWmJT5SxNgXznjiAwQzvnFM/V1/GOwmc8QmNDGhM4ZW9/FNFTVg2Ncu0Z8Dn3rEsqSwEMoImq4HS+TXyPhLeF21H2YNMR1EWia9dgq88wGDszz7OKH9wv4xDDDCciGEyy6usZZo2ouvfZQhyfAZM4LwvVaXV0617NllbZUDmZofpDfyF6g+YlGvouAw0DA+8Y7GQMOYluirbujaIrOOU+j0i245q/wCsrvRuXQ+BgMBEPZxP+7r+MQmEwmGW2pWMs2I+qttbZShyfmZpeBXWkPqWK+Q5maXQU0LtqrC/qZXRKqcSoFeko1Nq98q1WesWxW94xCIVEs09dilXUFT1Bmv+i1bhn0jbT/gbmJdRrNE+y2tl8m6H4GV3IxxnB8DM9nE/7uv4xDCZZalYy7ASzV22tspQ8+neZpeB33HfqGKjw6tNLw+jTriqsDxPeZXREoiVCJXESIkRYkBMDTPvGJiXaem9Cltaup7iJr/oohy+jfH/AC3l1Wr0T+juRl8m/wDRld6Ny6HwM4of4cfjEstSvm7ASzWWWHZSp5/MzS8D1N536higPzaaXh2n04xVWAe89SYlMSiJVFri1xa4qRVirFEEHvt+npvQpbWrqe4ia/6Ljm+kf8jTjtet0tAqZHVzYAAR+k0vAdZqCH1BNa+fNjNJwvT6YAV1jPex5kxaYtMWqLXFqi1xa4tcCQLAsAgEHvxEt09Vow6BviJqOD1NzQYj8Nev+WDTkd0FPlFpi1RaotcVIEgWBYFgEAmPfzCI1anqJZpEbujaTE9DiCqCuBIFgWBYBMTH3GRMQrDWDPRibIFgWYmJj7oxMTExMTH/AFF//8QAKBEAAgECBQIGAwAAAAAAAAAAAQIDABEEECExQDJBBRITImBhIDNx/9oACAECAQE/APn008UIu7Wo+Ji/tiNvs2rC4kYgN7bW42JwLSymQONex7UnhgveSS/0KjjSNQqKAOeWA3PGZ1Xc007HRRajfvSyOuxpZ1PULUCDseCzqu5ppmOi6Ub968jWvkbZIxDCx78GZiJnpXGdwKLZL1D+8HEfufIEivMSPwXccHEqfVbNds1iZqSFV14LIr7ipMKRqmtEEGxFLtSxs1JCo34roj9QpYFX7q1vlP8A/8QAJxEAAgECBQMEAwAAAAAAAAAAAQIAAxEEITEyQBASUSBgcYEzQWH/2gAIAQMBAT8A9/KjMchBQ8tKlPsIz4yVQqgEQ1/AjMSbk88KToDxlRm0ESgo3G8Xt/Uamj6iNh2G3OEEZEcFUZtBEoKM2zghpNa8Igv9QAmPTBRr+DwaCA0UjUyOmcAJgTz0ba3xwcN+FPvoVBnYAfQ20/HBwpBoj+E9T1eqqamVK7NcDIcFKjobqZTxanJxaAgi4MMeqqamPiGbbkISTxEqOm0x8S7AZWhJPun/2Q==",lc="/goit-markup-react/assets/img6-desktop-T8iIHNok.jpg",ac="/goit-markup-react/assets/img7-desktop-Dg4i-DKN.jpg",sc="/goit-markup-react/assets/img8-desktop-CsQ4ePrM.jpg",uc="/goit-markup-react/assets/img9-desktop-Mm3BjZR-.jpg",Fv=()=>a.jsx(a.Fragment,{children:a.jsxs(Dv,{children:[a.jsx(rt,{children:a.jsxs("a",{href:tc,alt:"ноутбук",className:"elements__decoration elements__picture",children:[a.jsxs("div",{className:"port__discript",children:[a.jsx("img",{src:tc,alt:"ноутбук"}),a.jsx("div",{className:"port__paragraph",children:a.jsx("p",{className:"port__curd",children:"Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу."})})]}),a.jsxs(it,{children:[a.jsx(ot,{children:"Технокряк"}),a.jsx(lt,{children:"Веб-сайт"})]})]})}),a.jsx(rt,{children:a.jsxs("a",{src:nc,alt:"баскетбол",className:"elements__decoration elements__picture",children:[a.jsxs("div",{className:"port__discript",children:[a.jsx("img",{src:nc,alt:"баскетбол"}),a.jsx("div",{className:"port__paragraph",children:a.jsx("p",{className:"port__curd",children:"Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу."})})]}),a.jsxs(it,{children:[a.jsxs(ot,{children:["Постер ",a.jsx("span",{lang:"en",children:"New Orlean vs Golden Star"})]}),a.jsx(lt,{children:"Дизайн"})]})]})}),a.jsx(rt,{children:a.jsxs("a",{src:rc,alt:"морська Іжа",className:"elements__decoration elements__picture",children:[a.jsxs("div",{className:"port__discript",children:[a.jsx("img",{src:rc,alt:"морська Іжа"}),a.jsx("div",{className:"port__paragraph",children:a.jsx("p",{className:"port__curd",children:"Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу."})})]}),a.jsxs(it,{children:[a.jsxs(ot,{children:["Ресторан ",a.jsx("span",{lang:"en",children:"Seafood"})]}),a.jsx(lt,{children:"Додаток"})]})]})}),a.jsx(rt,{children:a.jsxs("a",{src:ic,alt:"навушники",className:"elements__decoration elements__picture",children:[a.jsxs("div",{className:"port__discript",children:[a.jsx("img",{src:ic,alt:"навушники"}),a.jsx("div",{className:"port__paragraph",children:a.jsx("p",{className:"port__curd",children:"Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу."})})]}),a.jsxs(it,{children:[a.jsxs(ot,{children:["Проєкт ",a.jsx("span",{lang:"en",children:"Prime"})]}),a.jsx(lt,{children:"Маркетинг"})]})]})}),a.jsx(rt,{children:a.jsxs("a",{src:oc,alt:"дві коробки",className:"elements__decoration elements__picture",children:[a.jsxs("div",{className:"port__discript",children:[a.jsx("img",{src:oc,alt:"дві коробки"}),a.jsx("div",{className:"port__paragraph",children:a.jsx("p",{className:"port__curd",children:"Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу."})})]}),a.jsxs(it,{children:[a.jsxs(ot,{children:["Проєкт ",a.jsx("span",{lang:"en",children:"Boxes"})]}),a.jsx(lt,{children:"Додаток"})]})]})}),a.jsx(rt,{children:a.jsxs("a",{src:lc,alt:"монітор",className:"elements__decoration elements__picture",children:[a.jsxs("div",{className:"port__discript",children:[a.jsx("img",{src:lc,alt:"монітор"}),a.jsx("div",{className:"port__paragraph",children:a.jsx("p",{className:"port__curd",children:"Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу."})})]}),a.jsxs(it,{children:[a.jsx(ot,{lang:"en",children:"Inspiration has no Borders"}),a.jsx(lt,{children:"Веб-сайт"})]})]})}),a.jsx(rt,{children:a.jsxs("a",{src:ac,alt:"журнал",className:"elements__decoration elements__picture",children:[a.jsxs("div",{className:"port__discript",children:[a.jsx("img",{src:ac,alt:"журнал"}),a.jsx("div",{className:"port__paragraph",children:a.jsx("p",{className:"port__curd",children:"Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу."})})]}),a.jsxs(it,{children:[a.jsxs(ot,{children:["Видання ",a.jsx("span",{lang:"en",children:"Limited Edition"})]}),a.jsx(lt,{children:"Дизайн"})]})]})}),a.jsx(rt,{children:a.jsxs("a",{src:sc,alt:"бірка",className:"elements__decoration elements__picture",children:[a.jsxs("div",{className:"port__discript",children:[a.jsx("img",{src:sc,alt:"бірка"}),a.jsx("div",{className:"port__paragraph",children:a.jsx("p",{className:"port__curd",children:"Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу."})})]}),a.jsxs(it,{children:[a.jsxs(ot,{children:["Проєкт ",a.jsx("span",{lang:"en",children:"LAB"})]}),a.jsx(lt,{children:"Маркетинг"})]})]})}),a.jsx(rt,{children:a.jsxs("a",{src:uc,alt:"робота",className:"elements__decoration elements__picture",children:[a.jsxs("div",{className:"port__discript",children:[a.jsx("img",{src:uc,alt:"робота"}),a.jsx("div",{className:"port__paragraph",children:a.jsx("p",{className:"port__curd",children:"Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу."})})]}),a.jsxs(it,{children:[a.jsx(ot,{lang:"en",children:"Growing Business"}),a.jsx(lt,{children:"Додаток"})]})]})})]})}),Uv=()=>a.jsxs(a.Fragment,{children:[a.jsx(zv,{}),a.jsx(Ov,{children:a.jsxs(Rv,{children:[a.jsx(Iv,{}),a.jsx(Fv,{})]})}),a.jsx(E.Suspense,{fallback:a.jsx("div",{children:"Loading page..."}),children:a.jsx(ug,{})})]}),bv=w.section`
    background: var(--footer-bacground-color);
    padding-top: 60px;
    padding-bottom: 60px;

    @media screen and (max-width:767px) {
        text-align: center;
  }
`,Bv=w.div`
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
    outline: 2px solid var(--technical-color);


    @media screen and (min-width:480px) {
        width: 480px;
}

  @media screen and (min-width:768px) {
    display: flex;
    align-items: baseline;
    justify-content: space-around;
    row-gap: 60px;
    flex-wrap: wrap;
    min-width: 768px;
  }

    @media screen and (min-width:1200px) {
    display: flex;
    min-width: 1200px;
  }
`,Wv=w.div`
    background: var(--footer-bacground-color);
    padding-top: 60px;
    padding-bottom: 60px;

    @media screen and (max-width:767px) {
        text-align: center;
  }
`,Hv=w.a`
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 26px;
    line-height: 1.19;
    letter-spacing: 0.03em;
    text-decoration: none;
    color: var(--beckground-color);
    display: inline-block;
    margin-bottom: 20px;
`,$v=w.span`
color: var(--body-background-color);
`,Vv=w.ul`
    list-style: none;
`,kl=w.li`
    &:not(:last-child) {
    margin-bottom: 9px;
    }

`,Qv=w.a`
    font-size: 14px;
    line-height: 1.7;
    font-style: normal;
    letter-spacing: 0.03em;
    text-decoration: none;
    color: var(--body-background-color);

`,cc=w.a`
    font-size: 14px;
    line-height: 1.7;
    text-decoration: none;
    font-style: normal;
    letter-spacing: 0.03em;
    color: rgba(255, 255, 255, 0.6);

`,Kv=w.div`
    @media screen and (max-width: 768px) {
        margin-bottom: 60px;
        margin-bottom: 0;
      }
  @media screen and (min-width:1200px) {
    margin-bottom: 60px;
    margin-left: 70px;
  }
`,dc=w.h2`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin-top: 12px;
  margin-bottom: 20px;
  color: var(--body-background-color);

  @media screen and (min-width:768px) {
    text-align: center;
  }

  @media screen and (min-width:1200px) {
    text-align: start;
  }
`,Yv=w.ul`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;

    @media screen and (max-width: 768px) {
        justify-content: center;
}
`,wi=w.li`
    display: flex;
`,ki=w.a`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    width: 44px;
    height: 44px;
    cursor: pointer;
    border-radius: 50%;
    color: var(--body-background-color);
    fill: var(--body-background-color);
    background-color: rgba(255, 255, 255, 0.1);
    transition: color 250ms var(--timing-functione), background-color 250ms var(--timing-functione);
    &:hover,
    &:focus {
        color: var(--body-background-color);
        background-color: var(--button-hover-focus);
    }
`,Si=w.svg`
    background-repeat: no-repeat;
    background-size: 20px 20px;
    background-position: left, center -10px, center, right;
    background-origin: content-box;
    fill: #ffffff;
`,Gv=w.div`
// display: flex;

        @media screen and (min-width:1200px) {
            display: flex;
    }
`,Xv=w.div`
    margin: 0;
    padding: 0;
    @media screen and (min-width:1200px) {
    margin-left: auto;
    }
`,Zv=w.form`

`,Jv=w.input`
    min-width: 100%;
    min-height: 50px;
    padding-left: 16px;
    background-color: var(--footer-bacground-color);
    border: 1px solid rgba(255, 255, 255, 0.3);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
    border-radius: 4px;
    color: rgba(255, 255, 255, 0.6);
    font-family: 'Roboto';
    margin-bottom: 20px;
    outline: none;
    @media screen and (min-width:768px) {
        min-width: 450px;
    }

    @media screen and (min-width:1200px) {
        min-width: 358px;
        margin-bottom: 0;
    }
`,qv=w.button`
        position: relative;
    color: var(--body-background-color);
    background-color: var(--beckground-color);
    display: inline-block;
    padding: 10px 32px;
    min-width: 216px;
    margin-left: 10px;
    margin: 0 auto;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 16px;
    line-height: 1.87;
    letter-spacing: 0.06em;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    border-color: transparent;
    transition: background-color 250ms var(--timing-functione);
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

        @media screen and (min-width:7680px) {
            margin-left: 50px;
        }
    
        @media screen and (min-width:1200px) {
            margin-left: 12px;
        }
    
    &:hover,
    &:focus {
    background-color: var(--button-hover-focus);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 4px;}
`,e1=w.svg`
    top: 0;
    right: 0;
`,t1=()=>a.jsx(bv,{children:a.jsxs(Bv,{children:[a.jsxs(Wv,{children:[a.jsxs(Hv,{href:"index.html",lang:"en",children:["Web",a.jsx($v,{children:"Studio"})]}),a.jsx("address",{children:a.jsxs(Vv,{children:[a.jsx(kl,{children:a.jsx(Qv,{href:"https://goo.gl/maps/CPtrU1FHBa2aNyZL9",target:"_blank",rel:"noopener noreferrer",children:"м. Київ, пр-т Лесі Українки, 26"})}),a.jsx(kl,{children:a.jsx(cc,{href:"mailto:info@devstudio.com",children:"info@devstudio.com"})}),a.jsx(kl,{children:a.jsx(cc,{href:"tel:+380961111111",children:"+38 096 111 11 11"})})]})})]}),a.jsxs(Kv,{children:[a.jsx(dc,{children:"ПРИЄДНУЙТЕСЬ"}),a.jsxs(Yv,{children:[a.jsx(wi,{children:a.jsx(ki,{children:a.jsx(Si,{"aria-label":"іконка інстаграм",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-instagram"})})})}),a.jsx(wi,{children:a.jsx(ki,{children:a.jsx(Si,{"aria-label":"іконка твітер",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-tviter"})})})}),a.jsx(wi,{children:a.jsx(ki,{children:a.jsx(Si,{"aria-label":"іконка феїсбук",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-facebook"})})})}),a.jsx(wi,{children:a.jsx(ki,{children:a.jsx(Si,{"aria-label":"іконка линкедін",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-linkedin"})})})})]})]}),a.jsxs(Xv,{children:[a.jsx(dc,{children:"Підпишіться на розсилку"}),a.jsx(Zv,{children:a.jsxs(Gv,{children:[a.jsx("label",{for:"email"}),a.jsx(Jv,{type:"email",name:"mail",id:"mail",placeholder:"E-mail"}),a.jsxs(qv,{type:"submit",children:["Підписатися",a.jsx(e1,{width:"24",height:"24",children:a.jsx("use",{href:M+"#icon-icon-send"})})]})]})})]})]})}),n1=()=>a.jsx(a.Fragment,{children:a.jsxs("body",{children:[a.jsxs(dg,{children:[a.jsx(Mi,{path:Du.HOME,element:a.jsx(Sv,{})}),a.jsx(Mi,{path:Du.PORTFOLIO,element:a.jsx(Uv,{})}),a.jsx(Mi,{path:"*",element:a.jsx(sg,{to:"/"})})]}),a.jsx(t1,{})]})}),r1=document.getElementById("root"),i1=Ef(r1);i1.render(a.jsx(E.StrictMode,{children:a.jsx(yg,{basename:"/goit-markup-react/",children:a.jsx(n1,{})})}));
