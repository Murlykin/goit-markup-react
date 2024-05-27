function $f(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Vf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var lc={exports:{}},co={},ac={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ir=Symbol.for("react.element"),Qf=Symbol.for("react.portal"),Kf=Symbol.for("react.fragment"),Yf=Symbol.for("react.strict_mode"),Gf=Symbol.for("react.profiler"),Xf=Symbol.for("react.provider"),Zf=Symbol.for("react.context"),Jf=Symbol.for("react.forward_ref"),qf=Symbol.for("react.suspense"),ep=Symbol.for("react.memo"),tp=Symbol.for("react.lazy"),ys=Symbol.iterator;function np(e){return e===null||typeof e!="object"?null:(e=ys&&e[ys]||e["@@iterator"],typeof e=="function"?e:null)}var sc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},uc=Object.assign,cc={};function In(e,t,n){this.props=e,this.context=t,this.refs=cc,this.updater=n||sc}In.prototype.isReactComponent={};In.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};In.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function dc(){}dc.prototype=In.prototype;function ya(e,t,n){this.props=e,this.context=t,this.refs=cc,this.updater=n||sc}var wa=ya.prototype=new dc;wa.constructor=ya;uc(wa,In.prototype);wa.isPureReactComponent=!0;var ws=Array.isArray,fc=Object.prototype.hasOwnProperty,ka={current:null},pc={key:!0,ref:!0,__self:!0,__source:!0};function hc(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)fc.call(t,r)&&!pc.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Ir,type:e,key:o,ref:l,props:i,_owner:ka.current}}function rp(e,t){return{$$typeof:Ir,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Sa(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ir}function ip(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ks=/\/+/g;function Do(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ip(""+e.key):t.toString(36)}function ki(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Ir:case Qf:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Do(l,0):r,ws(i)?(n="",e!=null&&(n=e.replace(ks,"$&/")+"/"),ki(i,t,n,"",function(c){return c})):i!=null&&(Sa(i)&&(i=rp(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(ks,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",ws(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+Do(o,s);l+=ki(o,t,n,u,i)}else if(u=np(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+Do(o,s++),l+=ki(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function $r(e,t,n){if(e==null)return e;var r=[],i=0;return ki(e,r,"","",function(o){return t.call(n,o,i++)}),r}function op(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ye={current:null},Si={transition:null},lp={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:Si,ReactCurrentOwner:ka};O.Children={map:$r,forEach:function(e,t,n){$r(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return $r(e,function(){t++}),t},toArray:function(e){return $r(e,function(t){return t})||[]},only:function(e){if(!Sa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=In;O.Fragment=Kf;O.Profiler=Gf;O.PureComponent=ya;O.StrictMode=Yf;O.Suspense=qf;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lp;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=uc({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=ka.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)fc.call(t,u)&&!pc.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Ir,type:e.type,key:i,ref:o,props:r,_owner:l}};O.createContext=function(e){return e={$$typeof:Zf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Xf,_context:e},e.Consumer=e};O.createElement=hc;O.createFactory=function(e){var t=hc.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:Jf,render:e}};O.isValidElement=Sa;O.lazy=function(e){return{$$typeof:tp,_payload:{_status:-1,_result:e},_init:op}};O.memo=function(e,t){return{$$typeof:ep,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=Si.transition;Si.transition={};try{e()}finally{Si.transition=t}};O.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};O.useCallback=function(e,t){return ye.current.useCallback(e,t)};O.useContext=function(e){return ye.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return ye.current.useDeferredValue(e)};O.useEffect=function(e,t){return ye.current.useEffect(e,t)};O.useId=function(){return ye.current.useId()};O.useImperativeHandle=function(e,t,n){return ye.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return ye.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return ye.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return ye.current.useMemo(e,t)};O.useReducer=function(e,t,n){return ye.current.useReducer(e,t,n)};O.useRef=function(e){return ye.current.useRef(e)};O.useState=function(e){return ye.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return ye.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return ye.current.useTransition()};O.version="18.2.0";ac.exports=O;var P=ac.exports;const ap=Vf(P),yl=$f({__proto__:null,default:ap},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sp=P,up=Symbol.for("react.element"),cp=Symbol.for("react.fragment"),dp=Object.prototype.hasOwnProperty,fp=sp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pp={key:!0,ref:!0,__self:!0,__source:!0};function mc(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)dp.call(t,r)&&!pp.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:up,type:e,key:o,ref:l,props:i,_owner:fp.current}}co.Fragment=cp;co.jsx=mc;co.jsxs=mc;lc.exports=co;var a=lc.exports,gc={exports:{}},Le={},vc={exports:{}},xc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,z){var L=N.length;N.push(z);e:for(;0<L;){var X=L-1>>>1,ne=N[X];if(0<i(ne,z))N[X]=z,N[L]=ne,L=X;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var z=N[0],L=N.pop();if(L!==z){N[0]=L;e:for(var X=0,ne=N.length,br=ne>>>1;X<br;){var Wt=2*(X+1)-1,Io=N[Wt],bt=Wt+1,Hr=N[bt];if(0>i(Io,L))bt<ne&&0>i(Hr,Io)?(N[X]=Hr,N[bt]=L,X=bt):(N[X]=Io,N[Wt]=L,X=Wt);else if(bt<ne&&0>i(Hr,L))N[X]=Hr,N[bt]=L,X=bt;else break e}}return z}function i(N,z){var L=N.sortIndex-z.sortIndex;return L!==0?L:N.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],c=[],h=1,m=null,g=3,k=!1,y=!1,v=!1,j=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=N)r(c),z.sortIndex=z.expirationTime,t(u,z);else break;z=n(c)}}function x(N){if(v=!1,p(N),!y)if(n(u)!==null)y=!0,Oo(C);else{var z=n(c);z!==null&&Mo(x,z.startTime-N)}}function C(N,z){y=!1,v&&(v=!1,f(T),T=-1),k=!0;var L=g;try{for(p(z),m=n(u);m!==null&&(!(m.expirationTime>z)||N&&!Pe());){var X=m.callback;if(typeof X=="function"){m.callback=null,g=m.priorityLevel;var ne=X(m.expirationTime<=z);z=e.unstable_now(),typeof ne=="function"?m.callback=ne:m===n(u)&&r(u),p(z)}else r(u);m=n(u)}if(m!==null)var br=!0;else{var Wt=n(c);Wt!==null&&Mo(x,Wt.startTime-z),br=!1}return br}finally{m=null,g=L,k=!1}}var E=!1,A=null,T=-1,B=5,R=-1;function Pe(){return!(e.unstable_now()-R<B)}function bn(){if(A!==null){var N=e.unstable_now();R=N;var z=!0;try{z=A(!0,N)}finally{z?Hn():(E=!1,A=null)}}else E=!1}var Hn;if(typeof d=="function")Hn=function(){d(bn)};else if(typeof MessageChannel<"u"){var xs=new MessageChannel,Hf=xs.port2;xs.port1.onmessage=bn,Hn=function(){Hf.postMessage(null)}}else Hn=function(){j(bn,0)};function Oo(N){A=N,E||(E=!0,Hn())}function Mo(N,z){T=j(function(){N(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){y||k||(y=!0,Oo(C))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(N){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var L=g;g=z;try{return N()}finally{g=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var L=g;g=N;try{return z()}finally{g=L}},e.unstable_scheduleCallback=function(N,z,L){var X=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?X+L:X):L=X,N){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=L+ne,N={id:h++,callback:z,priorityLevel:N,startTime:L,expirationTime:ne,sortIndex:-1},L>X?(N.sortIndex=L,t(c,N),n(u)===null&&N===n(c)&&(v?(f(T),T=-1):v=!0,Mo(x,L-X))):(N.sortIndex=ne,t(u,N),y||k||(y=!0,Oo(C))),N},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(N){var z=g;return function(){var L=g;g=z;try{return N.apply(this,arguments)}finally{g=L}}}})(xc);vc.exports=xc;var hp=vc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yc=P,ze=hp;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wc=new Set,hr={};function tn(e,t){Pn(e,t),Pn(e+"Capture",t)}function Pn(e,t){for(hr[e]=t,e=0;e<t.length;e++)wc.add(t[e])}var ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wl=Object.prototype.hasOwnProperty,mp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ss={},js={};function gp(e){return wl.call(js,e)?!0:wl.call(Ss,e)?!1:mp.test(e)?js[e]=!0:(Ss[e]=!0,!1)}function vp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function xp(e,t,n,r){if(t===null||typeof t>"u"||vp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function we(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new we(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new we(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new we(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new we(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new we(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new we(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new we(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new we(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new we(e,5,!1,e.toLowerCase(),null,!1,!1)});var ja=/[\-:]([a-z])/g;function Aa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ja,Aa);se[t]=new we(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ja,Aa);se[t]=new we(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ja,Aa);se[t]=new we(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new we(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new we(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ca(e,t,n,r){var i=se.hasOwnProperty(t)?se[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(xp(t,n,i,r)&&(n=null),r||i===null?gp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var gt=yc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vr=Symbol.for("react.element"),sn=Symbol.for("react.portal"),un=Symbol.for("react.fragment"),Ea=Symbol.for("react.strict_mode"),kl=Symbol.for("react.profiler"),kc=Symbol.for("react.provider"),Sc=Symbol.for("react.context"),Pa=Symbol.for("react.forward_ref"),Sl=Symbol.for("react.suspense"),jl=Symbol.for("react.suspense_list"),_a=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),jc=Symbol.for("react.offscreen"),As=Symbol.iterator;function $n(e){return e===null||typeof e!="object"?null:(e=As&&e[As]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,Fo;function tr(e){if(Fo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Fo=t&&t[1]||""}return`
`+Fo+e}var Uo=!1;function Bo(e,t){if(!e||Uo)return"";Uo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{Uo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?tr(e):""}function yp(e){switch(e.tag){case 5:return tr(e.type);case 16:return tr("Lazy");case 13:return tr("Suspense");case 19:return tr("SuspenseList");case 0:case 2:case 15:return e=Bo(e.type,!1),e;case 11:return e=Bo(e.type.render,!1),e;case 1:return e=Bo(e.type,!0),e;default:return""}}function Al(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case un:return"Fragment";case sn:return"Portal";case kl:return"Profiler";case Ea:return"StrictMode";case Sl:return"Suspense";case jl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Sc:return(e.displayName||"Context")+".Consumer";case kc:return(e._context.displayName||"Context")+".Provider";case Pa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _a:return t=e.displayName||null,t!==null?t:Al(e.type)||"Memo";case yt:t=e._payload,e=e._init;try{return Al(e(t))}catch{}}return null}function wp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Al(t);case 8:return t===Ea?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Mt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ac(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function kp(e){var t=Ac(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Qr(e){e._valueTracker||(e._valueTracker=kp(e))}function Cc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ac(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Di(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Cl(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Cs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Mt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ec(e,t){t=t.checked,t!=null&&Ca(e,"checked",t,!1)}function El(e,t){Ec(e,t);var n=Mt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Pl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Pl(e,t.type,Mt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Es(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Pl(e,t,n){(t!=="number"||Di(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var nr=Array.isArray;function wn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Mt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function _l(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ps(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(nr(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Mt(n)}}function Pc(e,t){var n=Mt(t.value),r=Mt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function _s(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function _c(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?_c(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Kr,Nc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Kr=Kr||document.createElement("div"),Kr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Kr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function mr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var or={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sp=["Webkit","ms","Moz","O"];Object.keys(or).forEach(function(e){Sp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),or[t]=or[e]})});function Tc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||or.hasOwnProperty(e)&&or[e]?(""+t).trim():t+"px"}function Rc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Tc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var jp=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Tl(e,t){if(t){if(jp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Rl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zl=null;function Na(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ll=null,kn=null,Sn=null;function Ns(e){if(e=Ur(e)){if(typeof Ll!="function")throw Error(S(280));var t=e.stateNode;t&&(t=go(t),Ll(e.stateNode,e.type,t))}}function zc(e){kn?Sn?Sn.push(e):Sn=[e]:kn=e}function Lc(){if(kn){var e=kn,t=Sn;if(Sn=kn=null,Ns(e),t)for(e=0;e<t.length;e++)Ns(t[e])}}function Oc(e,t){return e(t)}function Mc(){}var Wo=!1;function Ic(e,t,n){if(Wo)return e(t,n);Wo=!0;try{return Oc(e,t,n)}finally{Wo=!1,(kn!==null||Sn!==null)&&(Mc(),Lc())}}function gr(e,t){var n=e.stateNode;if(n===null)return null;var r=go(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Ol=!1;if(ft)try{var Vn={};Object.defineProperty(Vn,"passive",{get:function(){Ol=!0}}),window.addEventListener("test",Vn,Vn),window.removeEventListener("test",Vn,Vn)}catch{Ol=!1}function Ap(e,t,n,r,i,o,l,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var lr=!1,Fi=null,Ui=!1,Ml=null,Cp={onError:function(e){lr=!0,Fi=e}};function Ep(e,t,n,r,i,o,l,s,u){lr=!1,Fi=null,Ap.apply(Cp,arguments)}function Pp(e,t,n,r,i,o,l,s,u){if(Ep.apply(this,arguments),lr){if(lr){var c=Fi;lr=!1,Fi=null}else throw Error(S(198));Ui||(Ui=!0,Ml=c)}}function nn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Dc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ts(e){if(nn(e)!==e)throw Error(S(188))}function _p(e){var t=e.alternate;if(!t){if(t=nn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ts(i),e;if(o===r)return Ts(i),t;o=o.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Fc(e){return e=_p(e),e!==null?Uc(e):null}function Uc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Uc(e);if(t!==null)return t;e=e.sibling}return null}var Bc=ze.unstable_scheduleCallback,Rs=ze.unstable_cancelCallback,Np=ze.unstable_shouldYield,Tp=ze.unstable_requestPaint,Z=ze.unstable_now,Rp=ze.unstable_getCurrentPriorityLevel,Ta=ze.unstable_ImmediatePriority,Wc=ze.unstable_UserBlockingPriority,Bi=ze.unstable_NormalPriority,zp=ze.unstable_LowPriority,bc=ze.unstable_IdlePriority,fo=null,qe=null;function Lp(e){if(qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(fo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:Ip,Op=Math.log,Mp=Math.LN2;function Ip(e){return e>>>=0,e===0?32:31-(Op(e)/Mp|0)|0}var Yr=64,Gr=4194304;function rr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=rr(s):(o&=l,o!==0&&(r=rr(o)))}else l=n&~i,l!==0?r=rr(l):o!==0&&(r=rr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ve(t),i=1<<n,r|=e[n],t&=~i;return r}function Dp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ve(o),s=1<<l,u=i[l];u===-1?(!(s&n)||s&r)&&(i[l]=Dp(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function Il(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Hc(){var e=Yr;return Yr<<=1,!(Yr&4194240)&&(Yr=64),e}function bo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Dr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ve(t),e[t]=n}function Up(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ve(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ra(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ve(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var U=0;function $c(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Vc,za,Qc,Kc,Yc,Dl=!1,Xr=[],Et=null,Pt=null,_t=null,vr=new Map,xr=new Map,kt=[],Bp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zs(e,t){switch(e){case"focusin":case"focusout":Et=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":_t=null;break;case"pointerover":case"pointerout":vr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xr.delete(t.pointerId)}}function Qn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ur(t),t!==null&&za(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Wp(e,t,n,r,i){switch(t){case"focusin":return Et=Qn(Et,e,t,n,r,i),!0;case"dragenter":return Pt=Qn(Pt,e,t,n,r,i),!0;case"mouseover":return _t=Qn(_t,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return vr.set(o,Qn(vr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,xr.set(o,Qn(xr.get(o)||null,e,t,n,r,i)),!0}return!1}function Gc(e){var t=Vt(e.target);if(t!==null){var n=nn(t);if(n!==null){if(t=n.tag,t===13){if(t=Dc(n),t!==null){e.blockedOn=t,Yc(e.priority,function(){Qc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ji(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Fl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);zl=r,n.target.dispatchEvent(r),zl=null}else return t=Ur(n),t!==null&&za(t),e.blockedOn=n,!1;t.shift()}return!0}function Ls(e,t,n){ji(e)&&n.delete(t)}function bp(){Dl=!1,Et!==null&&ji(Et)&&(Et=null),Pt!==null&&ji(Pt)&&(Pt=null),_t!==null&&ji(_t)&&(_t=null),vr.forEach(Ls),xr.forEach(Ls)}function Kn(e,t){e.blockedOn===t&&(e.blockedOn=null,Dl||(Dl=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,bp)))}function yr(e){function t(i){return Kn(i,e)}if(0<Xr.length){Kn(Xr[0],e);for(var n=1;n<Xr.length;n++){var r=Xr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Et!==null&&Kn(Et,e),Pt!==null&&Kn(Pt,e),_t!==null&&Kn(_t,e),vr.forEach(t),xr.forEach(t),n=0;n<kt.length;n++)r=kt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<kt.length&&(n=kt[0],n.blockedOn===null);)Gc(n),n.blockedOn===null&&kt.shift()}var jn=gt.ReactCurrentBatchConfig,bi=!0;function Hp(e,t,n,r){var i=U,o=jn.transition;jn.transition=null;try{U=1,La(e,t,n,r)}finally{U=i,jn.transition=o}}function $p(e,t,n,r){var i=U,o=jn.transition;jn.transition=null;try{U=4,La(e,t,n,r)}finally{U=i,jn.transition=o}}function La(e,t,n,r){if(bi){var i=Fl(e,t,n,r);if(i===null)Jo(e,t,r,Hi,n),zs(e,r);else if(Wp(i,e,t,n,r))r.stopPropagation();else if(zs(e,r),t&4&&-1<Bp.indexOf(e)){for(;i!==null;){var o=Ur(i);if(o!==null&&Vc(o),o=Fl(e,t,n,r),o===null&&Jo(e,t,r,Hi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Jo(e,t,r,null,n)}}var Hi=null;function Fl(e,t,n,r){if(Hi=null,e=Na(r),e=Vt(e),e!==null)if(t=nn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Dc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Hi=e,null}function Xc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rp()){case Ta:return 1;case Wc:return 4;case Bi:case zp:return 16;case bc:return 536870912;default:return 16}default:return 16}}var jt=null,Oa=null,Ai=null;function Zc(){if(Ai)return Ai;var e,t=Oa,n=t.length,r,i="value"in jt?jt.value:jt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Ai=i.slice(e,1<r?1-r:void 0)}function Ci(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zr(){return!0}function Os(){return!1}function Oe(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Zr:Os,this.isPropagationStopped=Os,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zr)},persist:function(){},isPersistent:Zr}),t}var Dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ma=Oe(Dn),Fr=K({},Dn,{view:0,detail:0}),Vp=Oe(Fr),Ho,$o,Yn,po=K({},Fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ia,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yn&&(Yn&&e.type==="mousemove"?(Ho=e.screenX-Yn.screenX,$o=e.screenY-Yn.screenY):$o=Ho=0,Yn=e),Ho)},movementY:function(e){return"movementY"in e?e.movementY:$o}}),Ms=Oe(po),Qp=K({},po,{dataTransfer:0}),Kp=Oe(Qp),Yp=K({},Fr,{relatedTarget:0}),Vo=Oe(Yp),Gp=K({},Dn,{animationName:0,elapsedTime:0,pseudoElement:0}),Xp=Oe(Gp),Zp=K({},Dn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jp=Oe(Zp),qp=K({},Dn,{data:0}),Is=Oe(qp),eh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},th={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=nh[e])?!!t[e]:!1}function Ia(){return rh}var ih=K({},Fr,{key:function(e){if(e.key){var t=eh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ci(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?th[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ia,charCode:function(e){return e.type==="keypress"?Ci(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ci(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),oh=Oe(ih),lh=K({},po,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ds=Oe(lh),ah=K({},Fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ia}),sh=Oe(ah),uh=K({},Dn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ch=Oe(uh),dh=K({},po,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fh=Oe(dh),ph=[9,13,27,32],Da=ft&&"CompositionEvent"in window,ar=null;ft&&"documentMode"in document&&(ar=document.documentMode);var hh=ft&&"TextEvent"in window&&!ar,Jc=ft&&(!Da||ar&&8<ar&&11>=ar),Fs=" ",Us=!1;function qc(e,t){switch(e){case"keyup":return ph.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ed(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cn=!1;function mh(e,t){switch(e){case"compositionend":return ed(t);case"keypress":return t.which!==32?null:(Us=!0,Fs);case"textInput":return e=t.data,e===Fs&&Us?null:e;default:return null}}function gh(e,t){if(cn)return e==="compositionend"||!Da&&qc(e,t)?(e=Zc(),Ai=Oa=jt=null,cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jc&&t.locale!=="ko"?null:t.data;default:return null}}var vh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vh[e.type]:t==="textarea"}function td(e,t,n,r){zc(r),t=$i(t,"onChange"),0<t.length&&(n=new Ma("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var sr=null,wr=null;function xh(e){fd(e,0)}function ho(e){var t=pn(e);if(Cc(t))return e}function yh(e,t){if(e==="change")return t}var nd=!1;if(ft){var Qo;if(ft){var Ko="oninput"in document;if(!Ko){var Ws=document.createElement("div");Ws.setAttribute("oninput","return;"),Ko=typeof Ws.oninput=="function"}Qo=Ko}else Qo=!1;nd=Qo&&(!document.documentMode||9<document.documentMode)}function bs(){sr&&(sr.detachEvent("onpropertychange",rd),wr=sr=null)}function rd(e){if(e.propertyName==="value"&&ho(wr)){var t=[];td(t,wr,e,Na(e)),Ic(xh,t)}}function wh(e,t,n){e==="focusin"?(bs(),sr=t,wr=n,sr.attachEvent("onpropertychange",rd)):e==="focusout"&&bs()}function kh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ho(wr)}function Sh(e,t){if(e==="click")return ho(t)}function jh(e,t){if(e==="input"||e==="change")return ho(t)}function Ah(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ke=typeof Object.is=="function"?Object.is:Ah;function kr(e,t){if(Ke(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!wl.call(t,i)||!Ke(e[i],t[i]))return!1}return!0}function Hs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $s(e,t){var n=Hs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hs(n)}}function id(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?id(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function od(){for(var e=window,t=Di();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Di(e.document)}return t}function Fa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ch(e){var t=od(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&id(n.ownerDocument.documentElement,n)){if(r!==null&&Fa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=$s(n,o);var l=$s(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Eh=ft&&"documentMode"in document&&11>=document.documentMode,dn=null,Ul=null,ur=null,Bl=!1;function Vs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bl||dn==null||dn!==Di(r)||(r=dn,"selectionStart"in r&&Fa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ur&&kr(ur,r)||(ur=r,r=$i(Ul,"onSelect"),0<r.length&&(t=new Ma("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=dn)))}function Jr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fn={animationend:Jr("Animation","AnimationEnd"),animationiteration:Jr("Animation","AnimationIteration"),animationstart:Jr("Animation","AnimationStart"),transitionend:Jr("Transition","TransitionEnd")},Yo={},ld={};ft&&(ld=document.createElement("div").style,"AnimationEvent"in window||(delete fn.animationend.animation,delete fn.animationiteration.animation,delete fn.animationstart.animation),"TransitionEvent"in window||delete fn.transitionend.transition);function mo(e){if(Yo[e])return Yo[e];if(!fn[e])return e;var t=fn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ld)return Yo[e]=t[n];return e}var ad=mo("animationend"),sd=mo("animationiteration"),ud=mo("animationstart"),cd=mo("transitionend"),dd=new Map,Qs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dt(e,t){dd.set(e,t),tn(t,[e])}for(var Go=0;Go<Qs.length;Go++){var Xo=Qs[Go],Ph=Xo.toLowerCase(),_h=Xo[0].toUpperCase()+Xo.slice(1);Dt(Ph,"on"+_h)}Dt(ad,"onAnimationEnd");Dt(sd,"onAnimationIteration");Dt(ud,"onAnimationStart");Dt("dblclick","onDoubleClick");Dt("focusin","onFocus");Dt("focusout","onBlur");Dt(cd,"onTransitionEnd");Pn("onMouseEnter",["mouseout","mouseover"]);Pn("onMouseLeave",["mouseout","mouseover"]);Pn("onPointerEnter",["pointerout","pointerover"]);Pn("onPointerLeave",["pointerout","pointerover"]);tn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));tn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));tn("onBeforeInput",["compositionend","keypress","textInput","paste"]);tn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));tn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));tn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ir="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nh=new Set("cancel close invalid load scroll toggle".split(" ").concat(ir));function Ks(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Pp(r,t,void 0,e),e.currentTarget=null}function fd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==o&&i.isPropagationStopped())break e;Ks(i,s,c),o=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,c=s.currentTarget,s=s.listener,u!==o&&i.isPropagationStopped())break e;Ks(i,s,c),o=u}}}if(Ui)throw e=Ml,Ui=!1,Ml=null,e}function b(e,t){var n=t[Vl];n===void 0&&(n=t[Vl]=new Set);var r=e+"__bubble";n.has(r)||(pd(t,e,2,!1),n.add(r))}function Zo(e,t,n){var r=0;t&&(r|=4),pd(n,e,r,t)}var qr="_reactListening"+Math.random().toString(36).slice(2);function Sr(e){if(!e[qr]){e[qr]=!0,wc.forEach(function(n){n!=="selectionchange"&&(Nh.has(n)||Zo(n,!1,e),Zo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qr]||(t[qr]=!0,Zo("selectionchange",!1,t))}}function pd(e,t,n,r){switch(Xc(t)){case 1:var i=Hp;break;case 4:i=$p;break;default:i=La}n=i.bind(null,t,n,e),i=void 0,!Ol||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Jo(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;s!==null;){if(l=Vt(s),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}s=s.parentNode}}r=r.return}Ic(function(){var c=o,h=Na(n),m=[];e:{var g=dd.get(e);if(g!==void 0){var k=Ma,y=e;switch(e){case"keypress":if(Ci(n)===0)break e;case"keydown":case"keyup":k=oh;break;case"focusin":y="focus",k=Vo;break;case"focusout":y="blur",k=Vo;break;case"beforeblur":case"afterblur":k=Vo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Ms;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Kp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=sh;break;case ad:case sd:case ud:k=Xp;break;case cd:k=ch;break;case"scroll":k=Vp;break;case"wheel":k=fh;break;case"copy":case"cut":case"paste":k=Jp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Ds}var v=(t&4)!==0,j=!v&&e==="scroll",f=v?g!==null?g+"Capture":null:g;v=[];for(var d=c,p;d!==null;){p=d;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,f!==null&&(x=gr(d,f),x!=null&&v.push(jr(d,x,p)))),j)break;d=d.return}0<v.length&&(g=new k(g,y,null,n,h),m.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",g&&n!==zl&&(y=n.relatedTarget||n.fromElement)&&(Vt(y)||y[pt]))break e;if((k||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,k?(y=n.relatedTarget||n.toElement,k=c,y=y?Vt(y):null,y!==null&&(j=nn(y),y!==j||y.tag!==5&&y.tag!==6)&&(y=null)):(k=null,y=c),k!==y)){if(v=Ms,x="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(v=Ds,x="onPointerLeave",f="onPointerEnter",d="pointer"),j=k==null?g:pn(k),p=y==null?g:pn(y),g=new v(x,d+"leave",k,n,h),g.target=j,g.relatedTarget=p,x=null,Vt(h)===c&&(v=new v(f,d+"enter",y,n,h),v.target=p,v.relatedTarget=j,x=v),j=x,k&&y)t:{for(v=k,f=y,d=0,p=v;p;p=rn(p))d++;for(p=0,x=f;x;x=rn(x))p++;for(;0<d-p;)v=rn(v),d--;for(;0<p-d;)f=rn(f),p--;for(;d--;){if(v===f||f!==null&&v===f.alternate)break t;v=rn(v),f=rn(f)}v=null}else v=null;k!==null&&Ys(m,g,k,v,!1),y!==null&&j!==null&&Ys(m,j,y,v,!0)}}e:{if(g=c?pn(c):window,k=g.nodeName&&g.nodeName.toLowerCase(),k==="select"||k==="input"&&g.type==="file")var C=yh;else if(Bs(g))if(nd)C=jh;else{C=kh;var E=wh}else(k=g.nodeName)&&k.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(C=Sh);if(C&&(C=C(e,c))){td(m,C,n,h);break e}E&&E(e,g,c),e==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&Pl(g,"number",g.value)}switch(E=c?pn(c):window,e){case"focusin":(Bs(E)||E.contentEditable==="true")&&(dn=E,Ul=c,ur=null);break;case"focusout":ur=Ul=dn=null;break;case"mousedown":Bl=!0;break;case"contextmenu":case"mouseup":case"dragend":Bl=!1,Vs(m,n,h);break;case"selectionchange":if(Eh)break;case"keydown":case"keyup":Vs(m,n,h)}var A;if(Da)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else cn?qc(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Jc&&n.locale!=="ko"&&(cn||T!=="onCompositionStart"?T==="onCompositionEnd"&&cn&&(A=Zc()):(jt=h,Oa="value"in jt?jt.value:jt.textContent,cn=!0)),E=$i(c,T),0<E.length&&(T=new Is(T,e,null,n,h),m.push({event:T,listeners:E}),A?T.data=A:(A=ed(n),A!==null&&(T.data=A)))),(A=hh?mh(e,n):gh(e,n))&&(c=$i(c,"onBeforeInput"),0<c.length&&(h=new Is("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=A))}fd(m,t)})}function jr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $i(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=gr(e,n),o!=null&&r.unshift(jr(e,o,i)),o=gr(e,t),o!=null&&r.push(jr(e,o,i))),e=e.return}return r}function rn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ys(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,i?(u=gr(n,o),u!=null&&l.unshift(jr(n,u,s))):i||(u=gr(n,o),u!=null&&l.push(jr(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Th=/\r\n?/g,Rh=/\u0000|\uFFFD/g;function Gs(e){return(typeof e=="string"?e:""+e).replace(Th,`
`).replace(Rh,"")}function ei(e,t,n){if(t=Gs(t),Gs(e)!==t&&n)throw Error(S(425))}function Vi(){}var Wl=null,bl=null;function Hl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $l=typeof setTimeout=="function"?setTimeout:void 0,zh=typeof clearTimeout=="function"?clearTimeout:void 0,Xs=typeof Promise=="function"?Promise:void 0,Lh=typeof queueMicrotask=="function"?queueMicrotask:typeof Xs<"u"?function(e){return Xs.resolve(null).then(e).catch(Oh)}:$l;function Oh(e){setTimeout(function(){throw e})}function qo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),yr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);yr(t)}function Nt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Zs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Fn=Math.random().toString(36).slice(2),Je="__reactFiber$"+Fn,Ar="__reactProps$"+Fn,pt="__reactContainer$"+Fn,Vl="__reactEvents$"+Fn,Mh="__reactListeners$"+Fn,Ih="__reactHandles$"+Fn;function Vt(e){var t=e[Je];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pt]||n[Je]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Zs(e);e!==null;){if(n=e[Je])return n;e=Zs(e)}return t}e=n,n=e.parentNode}return null}function Ur(e){return e=e[Je]||e[pt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function go(e){return e[Ar]||null}var Ql=[],hn=-1;function Ft(e){return{current:e}}function H(e){0>hn||(e.current=Ql[hn],Ql[hn]=null,hn--)}function W(e,t){hn++,Ql[hn]=e.current,e.current=t}var It={},ge=Ft(It),je=Ft(!1),Xt=It;function _n(e,t){var n=e.type.contextTypes;if(!n)return It;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ae(e){return e=e.childContextTypes,e!=null}function Qi(){H(je),H(ge)}function Js(e,t,n){if(ge.current!==It)throw Error(S(168));W(ge,t),W(je,n)}function hd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,wp(e)||"Unknown",i));return K({},n,r)}function Ki(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||It,Xt=ge.current,W(ge,e),W(je,je.current),!0}function qs(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=hd(e,t,Xt),r.__reactInternalMemoizedMergedChildContext=e,H(je),H(ge),W(ge,e)):H(je),W(je,n)}var st=null,vo=!1,el=!1;function md(e){st===null?st=[e]:st.push(e)}function Dh(e){vo=!0,md(e)}function Ut(){if(!el&&st!==null){el=!0;var e=0,t=U;try{var n=st;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}st=null,vo=!1}catch(i){throw st!==null&&(st=st.slice(e+1)),Bc(Ta,Ut),i}finally{U=t,el=!1}}return null}var mn=[],gn=0,Yi=null,Gi=0,Me=[],Ie=0,Zt=null,ut=1,ct="";function Ht(e,t){mn[gn++]=Gi,mn[gn++]=Yi,Yi=e,Gi=t}function gd(e,t,n){Me[Ie++]=ut,Me[Ie++]=ct,Me[Ie++]=Zt,Zt=e;var r=ut;e=ct;var i=32-Ve(r)-1;r&=~(1<<i),n+=1;var o=32-Ve(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,ut=1<<32-Ve(t)+i|n<<i|r,ct=o+e}else ut=1<<o|n<<i|r,ct=e}function Ua(e){e.return!==null&&(Ht(e,1),gd(e,1,0))}function Ba(e){for(;e===Yi;)Yi=mn[--gn],mn[gn]=null,Gi=mn[--gn],mn[gn]=null;for(;e===Zt;)Zt=Me[--Ie],Me[Ie]=null,ct=Me[--Ie],Me[Ie]=null,ut=Me[--Ie],Me[Ie]=null}var Te=null,Ne=null,$=!1,$e=null;function vd(e,t){var n=De(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function eu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Te=e,Ne=Nt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Te=e,Ne=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Zt!==null?{id:ut,overflow:ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=De(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Te=e,Ne=null,!0):!1;default:return!1}}function Kl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Yl(e){if($){var t=Ne;if(t){var n=t;if(!eu(e,t)){if(Kl(e))throw Error(S(418));t=Nt(n.nextSibling);var r=Te;t&&eu(e,t)?vd(r,n):(e.flags=e.flags&-4097|2,$=!1,Te=e)}}else{if(Kl(e))throw Error(S(418));e.flags=e.flags&-4097|2,$=!1,Te=e}}}function tu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Te=e}function ti(e){if(e!==Te)return!1;if(!$)return tu(e),$=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Hl(e.type,e.memoizedProps)),t&&(t=Ne)){if(Kl(e))throw xd(),Error(S(418));for(;t;)vd(e,t),t=Nt(t.nextSibling)}if(tu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ne=Nt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ne=null}}else Ne=Te?Nt(e.stateNode.nextSibling):null;return!0}function xd(){for(var e=Ne;e;)e=Nt(e.nextSibling)}function Nn(){Ne=Te=null,$=!1}function Wa(e){$e===null?$e=[e]:$e.push(e)}var Fh=gt.ReactCurrentBatchConfig;function be(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Xi=Ft(null),Zi=null,vn=null,ba=null;function Ha(){ba=vn=Zi=null}function $a(e){var t=Xi.current;H(Xi),e._currentValue=t}function Gl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function An(e,t){Zi=e,ba=vn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function Ue(e){var t=e._currentValue;if(ba!==e)if(e={context:e,memoizedValue:t,next:null},vn===null){if(Zi===null)throw Error(S(308));vn=e,Zi.dependencies={lanes:0,firstContext:e}}else vn=vn.next=e;return t}var Qt=null;function Va(e){Qt===null?Qt=[e]:Qt.push(e)}function yd(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Va(t)):(n.next=i.next,i.next=n),t.interleaved=n,ht(e,r)}function ht(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var wt=!1;function Qa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function dt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Tt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ht(e,n)}return i=r.interleaved,i===null?(t.next=t,Va(r)):(t.next=i.next,i.next=t),r.interleaved=t,ht(e,n)}function Ei(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ra(e,n)}}function nu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ji(e,t,n,r){var i=e.updateQueue;wt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,c=u.next;u.next=null,l===null?o=c:l.next=c,l=u;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==l&&(s===null?h.firstBaseUpdate=c:s.next=c,h.lastBaseUpdate=u))}if(o!==null){var m=i.baseState;l=0,h=c=u=null,s=o;do{var g=s.lane,k=s.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:k,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,v=s;switch(g=t,k=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){m=y.call(k,m,g);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,g=typeof y=="function"?y.call(k,m,g):y,g==null)break e;m=K({},m,g);break e;case 2:wt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else k={eventTime:k,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(c=h=k,u=m):h=h.next=k,l|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);qt|=l,e.lanes=l,e.memoizedState=m}}function ru(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var kd=new yc.Component().refs;function Xl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xo={isMounted:function(e){return(e=e._reactInternals)?nn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=xe(),i=zt(e),o=dt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Tt(e,o,i),t!==null&&(Qe(t,e,i,r),Ei(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=xe(),i=zt(e),o=dt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Tt(e,o,i),t!==null&&(Qe(t,e,i,r),Ei(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=xe(),r=zt(e),i=dt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Tt(e,i,r),t!==null&&(Qe(t,e,r,n),Ei(t,e,r))}};function iu(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!kr(n,r)||!kr(i,o):!0}function Sd(e,t,n){var r=!1,i=It,o=t.contextType;return typeof o=="object"&&o!==null?o=Ue(o):(i=Ae(t)?Xt:ge.current,r=t.contextTypes,o=(r=r!=null)?_n(e,i):It),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=xo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ou(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&xo.enqueueReplaceState(t,t.state,null)}function Zl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=kd,Qa(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ue(o):(o=Ae(t)?Xt:ge.current,i.context=_n(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Xl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&xo.enqueueReplaceState(i,i.state,null),Ji(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Gn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;s===kd&&(s=i.refs={}),l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function ni(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function lu(e){var t=e._init;return t(e._payload)}function jd(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=Lt(f,d),f.index=0,f.sibling=null,f}function o(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,p,x){return d===null||d.tag!==6?(d=al(p,f.mode,x),d.return=f,d):(d=i(d,p),d.return=f,d)}function u(f,d,p,x){var C=p.type;return C===un?h(f,d,p.props.children,x,p.key):d!==null&&(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===yt&&lu(C)===d.type)?(x=i(d,p.props),x.ref=Gn(f,d,p),x.return=f,x):(x=zi(p.type,p.key,p.props,null,f.mode,x),x.ref=Gn(f,d,p),x.return=f,x)}function c(f,d,p,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=sl(p,f.mode,x),d.return=f,d):(d=i(d,p.children||[]),d.return=f,d)}function h(f,d,p,x,C){return d===null||d.tag!==7?(d=Gt(p,f.mode,x,C),d.return=f,d):(d=i(d,p),d.return=f,d)}function m(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=al(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Vr:return p=zi(d.type,d.key,d.props,null,f.mode,p),p.ref=Gn(f,null,d),p.return=f,p;case sn:return d=sl(d,f.mode,p),d.return=f,d;case yt:var x=d._init;return m(f,x(d._payload),p)}if(nr(d)||$n(d))return d=Gt(d,f.mode,p,null),d.return=f,d;ni(f,d)}return null}function g(f,d,p,x){var C=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return C!==null?null:s(f,d,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Vr:return p.key===C?u(f,d,p,x):null;case sn:return p.key===C?c(f,d,p,x):null;case yt:return C=p._init,g(f,d,C(p._payload),x)}if(nr(p)||$n(p))return C!==null?null:h(f,d,p,x,null);ni(f,p)}return null}function k(f,d,p,x,C){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(p)||null,s(d,f,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Vr:return f=f.get(x.key===null?p:x.key)||null,u(d,f,x,C);case sn:return f=f.get(x.key===null?p:x.key)||null,c(d,f,x,C);case yt:var E=x._init;return k(f,d,p,E(x._payload),C)}if(nr(x)||$n(x))return f=f.get(p)||null,h(d,f,x,C,null);ni(d,x)}return null}function y(f,d,p,x){for(var C=null,E=null,A=d,T=d=0,B=null;A!==null&&T<p.length;T++){A.index>T?(B=A,A=null):B=A.sibling;var R=g(f,A,p[T],x);if(R===null){A===null&&(A=B);break}e&&A&&R.alternate===null&&t(f,A),d=o(R,d,T),E===null?C=R:E.sibling=R,E=R,A=B}if(T===p.length)return n(f,A),$&&Ht(f,T),C;if(A===null){for(;T<p.length;T++)A=m(f,p[T],x),A!==null&&(d=o(A,d,T),E===null?C=A:E.sibling=A,E=A);return $&&Ht(f,T),C}for(A=r(f,A);T<p.length;T++)B=k(A,f,T,p[T],x),B!==null&&(e&&B.alternate!==null&&A.delete(B.key===null?T:B.key),d=o(B,d,T),E===null?C=B:E.sibling=B,E=B);return e&&A.forEach(function(Pe){return t(f,Pe)}),$&&Ht(f,T),C}function v(f,d,p,x){var C=$n(p);if(typeof C!="function")throw Error(S(150));if(p=C.call(p),p==null)throw Error(S(151));for(var E=C=null,A=d,T=d=0,B=null,R=p.next();A!==null&&!R.done;T++,R=p.next()){A.index>T?(B=A,A=null):B=A.sibling;var Pe=g(f,A,R.value,x);if(Pe===null){A===null&&(A=B);break}e&&A&&Pe.alternate===null&&t(f,A),d=o(Pe,d,T),E===null?C=Pe:E.sibling=Pe,E=Pe,A=B}if(R.done)return n(f,A),$&&Ht(f,T),C;if(A===null){for(;!R.done;T++,R=p.next())R=m(f,R.value,x),R!==null&&(d=o(R,d,T),E===null?C=R:E.sibling=R,E=R);return $&&Ht(f,T),C}for(A=r(f,A);!R.done;T++,R=p.next())R=k(A,f,T,R.value,x),R!==null&&(e&&R.alternate!==null&&A.delete(R.key===null?T:R.key),d=o(R,d,T),E===null?C=R:E.sibling=R,E=R);return e&&A.forEach(function(bn){return t(f,bn)}),$&&Ht(f,T),C}function j(f,d,p,x){if(typeof p=="object"&&p!==null&&p.type===un&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Vr:e:{for(var C=p.key,E=d;E!==null;){if(E.key===C){if(C=p.type,C===un){if(E.tag===7){n(f,E.sibling),d=i(E,p.props.children),d.return=f,f=d;break e}}else if(E.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===yt&&lu(C)===E.type){n(f,E.sibling),d=i(E,p.props),d.ref=Gn(f,E,p),d.return=f,f=d;break e}n(f,E);break}else t(f,E);E=E.sibling}p.type===un?(d=Gt(p.props.children,f.mode,x,p.key),d.return=f,f=d):(x=zi(p.type,p.key,p.props,null,f.mode,x),x.ref=Gn(f,d,p),x.return=f,f=x)}return l(f);case sn:e:{for(E=p.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=i(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=sl(p,f.mode,x),d.return=f,f=d}return l(f);case yt:return E=p._init,j(f,d,E(p._payload),x)}if(nr(p))return y(f,d,p,x);if($n(p))return v(f,d,p,x);ni(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=i(d,p),d.return=f,f=d):(n(f,d),d=al(p,f.mode,x),d.return=f,f=d),l(f)):n(f,d)}return j}var Tn=jd(!0),Ad=jd(!1),Br={},et=Ft(Br),Cr=Ft(Br),Er=Ft(Br);function Kt(e){if(e===Br)throw Error(S(174));return e}function Ka(e,t){switch(W(Er,t),W(Cr,e),W(et,Br),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Nl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Nl(t,e)}H(et),W(et,t)}function Rn(){H(et),H(Cr),H(Er)}function Cd(e){Kt(Er.current);var t=Kt(et.current),n=Nl(t,e.type);t!==n&&(W(Cr,e),W(et,n))}function Ya(e){Cr.current===e&&(H(et),H(Cr))}var V=Ft(0);function qi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var tl=[];function Ga(){for(var e=0;e<tl.length;e++)tl[e]._workInProgressVersionPrimary=null;tl.length=0}var Pi=gt.ReactCurrentDispatcher,nl=gt.ReactCurrentBatchConfig,Jt=0,Q=null,ee=null,re=null,eo=!1,cr=!1,Pr=0,Uh=0;function ue(){throw Error(S(321))}function Xa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ke(e[n],t[n]))return!1;return!0}function Za(e,t,n,r,i,o){if(Jt=o,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pi.current=e===null||e.memoizedState===null?Hh:$h,e=n(r,i),cr){o=0;do{if(cr=!1,Pr=0,25<=o)throw Error(S(301));o+=1,re=ee=null,t.updateQueue=null,Pi.current=Vh,e=n(r,i)}while(cr)}if(Pi.current=to,t=ee!==null&&ee.next!==null,Jt=0,re=ee=Q=null,eo=!1,t)throw Error(S(300));return e}function Ja(){var e=Pr!==0;return Pr=0,e}function Ge(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?Q.memoizedState=re=e:re=re.next=e,re}function Be(){if(ee===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=re===null?Q.memoizedState:re.next;if(t!==null)re=t,ee=e;else{if(e===null)throw Error(S(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},re===null?Q.memoizedState=re=e:re=re.next=e}return re}function _r(e,t){return typeof t=="function"?t(e):t}function rl(e){var t=Be(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=ee,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,u=null,c=o;do{var h=c.lane;if((Jt&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=m,l=r):u=u.next=m,Q.lanes|=h,qt|=h}c=c.next}while(c!==null&&c!==o);u===null?l=r:u.next=s,Ke(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Q.lanes|=o,qt|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function il(e){var t=Be(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Ke(o,t.memoizedState)||(Se=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ed(){}function Pd(e,t){var n=Q,r=Be(),i=t(),o=!Ke(r.memoizedState,i);if(o&&(r.memoizedState=i,Se=!0),r=r.queue,qa(Td.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||re!==null&&re.memoizedState.tag&1){if(n.flags|=2048,Nr(9,Nd.bind(null,n,r,i,t),void 0,null),ie===null)throw Error(S(349));Jt&30||_d(n,t,i)}return i}function _d(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Nd(e,t,n,r){t.value=n,t.getSnapshot=r,Rd(t)&&zd(e)}function Td(e,t,n){return n(function(){Rd(t)&&zd(e)})}function Rd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ke(e,n)}catch{return!0}}function zd(e){var t=ht(e,1);t!==null&&Qe(t,e,1,-1)}function au(e){var t=Ge();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_r,lastRenderedState:e},t.queue=e,e=e.dispatch=bh.bind(null,Q,e),[t.memoizedState,e]}function Nr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ld(){return Be().memoizedState}function _i(e,t,n,r){var i=Ge();Q.flags|=e,i.memoizedState=Nr(1|t,n,void 0,r===void 0?null:r)}function yo(e,t,n,r){var i=Be();r=r===void 0?null:r;var o=void 0;if(ee!==null){var l=ee.memoizedState;if(o=l.destroy,r!==null&&Xa(r,l.deps)){i.memoizedState=Nr(t,n,o,r);return}}Q.flags|=e,i.memoizedState=Nr(1|t,n,o,r)}function su(e,t){return _i(8390656,8,e,t)}function qa(e,t){return yo(2048,8,e,t)}function Od(e,t){return yo(4,2,e,t)}function Md(e,t){return yo(4,4,e,t)}function Id(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Dd(e,t,n){return n=n!=null?n.concat([e]):null,yo(4,4,Id.bind(null,t,e),n)}function es(){}function Fd(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ud(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Bd(e,t,n){return Jt&21?(Ke(n,t)||(n=Hc(),Q.lanes|=n,qt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function Bh(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=nl.transition;nl.transition={};try{e(!1),t()}finally{U=n,nl.transition=r}}function Wd(){return Be().memoizedState}function Wh(e,t,n){var r=zt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bd(e))Hd(t,n);else if(n=yd(e,t,n,r),n!==null){var i=xe();Qe(n,e,r,i),$d(n,t,r)}}function bh(e,t,n){var r=zt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bd(e))Hd(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,Ke(s,l)){var u=t.interleaved;u===null?(i.next=i,Va(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=yd(e,t,i,r),n!==null&&(i=xe(),Qe(n,e,r,i),$d(n,t,r))}}function bd(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function Hd(e,t){cr=eo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function $d(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ra(e,n)}}var to={readContext:Ue,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},Hh={readContext:Ue,useCallback:function(e,t){return Ge().memoizedState=[e,t===void 0?null:t],e},useContext:Ue,useEffect:su,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_i(4194308,4,Id.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _i(4194308,4,e,t)},useInsertionEffect:function(e,t){return _i(4,2,e,t)},useMemo:function(e,t){var n=Ge();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ge();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Wh.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var t=Ge();return e={current:e},t.memoizedState=e},useState:au,useDebugValue:es,useDeferredValue:function(e){return Ge().memoizedState=e},useTransition:function(){var e=au(!1),t=e[0];return e=Bh.bind(null,e[1]),Ge().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Q,i=Ge();if($){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ie===null)throw Error(S(349));Jt&30||_d(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,su(Td.bind(null,r,o,e),[e]),r.flags|=2048,Nr(9,Nd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ge(),t=ie.identifierPrefix;if($){var n=ct,r=ut;n=(r&~(1<<32-Ve(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Pr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Uh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},$h={readContext:Ue,useCallback:Fd,useContext:Ue,useEffect:qa,useImperativeHandle:Dd,useInsertionEffect:Od,useLayoutEffect:Md,useMemo:Ud,useReducer:rl,useRef:Ld,useState:function(){return rl(_r)},useDebugValue:es,useDeferredValue:function(e){var t=Be();return Bd(t,ee.memoizedState,e)},useTransition:function(){var e=rl(_r)[0],t=Be().memoizedState;return[e,t]},useMutableSource:Ed,useSyncExternalStore:Pd,useId:Wd,unstable_isNewReconciler:!1},Vh={readContext:Ue,useCallback:Fd,useContext:Ue,useEffect:qa,useImperativeHandle:Dd,useInsertionEffect:Od,useLayoutEffect:Md,useMemo:Ud,useReducer:il,useRef:Ld,useState:function(){return il(_r)},useDebugValue:es,useDeferredValue:function(e){var t=Be();return ee===null?t.memoizedState=e:Bd(t,ee.memoizedState,e)},useTransition:function(){var e=il(_r)[0],t=Be().memoizedState;return[e,t]},useMutableSource:Ed,useSyncExternalStore:Pd,useId:Wd,unstable_isNewReconciler:!1};function zn(e,t){try{var n="",r=t;do n+=yp(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ol(e,t,n){return{value:e,source:null,stack:null,digest:t??null}}function Jl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Qh=typeof WeakMap=="function"?WeakMap:Map;function Vd(e,t,n){n=dt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ro||(ro=!0,sa=r),Jl(e,t)},n}function Qd(e,t,n){n=dt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Jl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Jl(e,t),typeof r!="function"&&(Rt===null?Rt=new Set([this]):Rt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function uu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Qh;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=lm.bind(null,e,t,n),t.then(e,e))}function cu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function du(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=dt(-1,1),t.tag=2,Tt(n,t,1))),n.lanes|=1),e)}var Kh=gt.ReactCurrentOwner,Se=!1;function ve(e,t,n,r){t.child=e===null?Ad(t,null,n,r):Tn(t,e.child,n,r)}function fu(e,t,n,r,i){n=n.render;var o=t.ref;return An(t,i),r=Za(e,t,n,r,o,i),n=Ja(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,mt(e,t,i)):($&&n&&Ua(t),t.flags|=1,ve(e,t,r,i),t.child)}function pu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ss(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Kd(e,t,o,r,i)):(e=zi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:kr,n(l,r)&&e.ref===t.ref)return mt(e,t,i)}return t.flags|=1,e=Lt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Kd(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(kr(o,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,mt(e,t,i)}return ql(e,t,n,r,i)}function Yd(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(yn,_e),_e|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(yn,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,W(yn,_e),_e|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,W(yn,_e),_e|=r;return ve(e,t,i,n),t.child}function Gd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ql(e,t,n,r,i){var o=Ae(n)?Xt:ge.current;return o=_n(t,o),An(t,i),n=Za(e,t,n,r,o,i),r=Ja(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,mt(e,t,i)):($&&r&&Ua(t),t.flags|=1,ve(e,t,n,i),t.child)}function hu(e,t,n,r,i){if(Ae(n)){var o=!0;Ki(t)}else o=!1;if(An(t,i),t.stateNode===null)Ni(e,t),Sd(t,n,r),Zl(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ue(c):(c=Ae(n)?Xt:ge.current,c=_n(t,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==c)&&ou(t,l,r,c),wt=!1;var g=t.memoizedState;l.state=g,Ji(t,r,l,i),u=t.memoizedState,s!==r||g!==u||je.current||wt?(typeof h=="function"&&(Xl(t,n,h,r),u=t.memoizedState),(s=wt||iu(t,n,s,r,g,u,c))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,wd(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:be(t.type,s),l.props=c,m=t.pendingProps,g=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ue(u):(u=Ae(n)?Xt:ge.current,u=_n(t,u));var k=n.getDerivedStateFromProps;(h=typeof k=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==m||g!==u)&&ou(t,l,r,u),wt=!1,g=t.memoizedState,l.state=g,Ji(t,r,l,i);var y=t.memoizedState;s!==m||g!==y||je.current||wt?(typeof k=="function"&&(Xl(t,n,k,r),y=t.memoizedState),(c=wt||iu(t,n,c,r,g,y,u)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return ea(e,t,n,r,o,i)}function ea(e,t,n,r,i,o){Gd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&qs(t,n,!1),mt(e,t,o);r=t.stateNode,Kh.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Tn(t,e.child,null,o),t.child=Tn(t,null,s,o)):ve(e,t,s,o),t.memoizedState=r.state,i&&qs(t,n,!0),t.child}function Xd(e){var t=e.stateNode;t.pendingContext?Js(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Js(e,t.context,!1),Ka(e,t.containerInfo)}function mu(e,t,n,r,i){return Nn(),Wa(i),t.flags|=256,ve(e,t,n,r),t.child}var ta={dehydrated:null,treeContext:null,retryLane:0};function na(e){return{baseLanes:e,cachePool:null,transitions:null}}function Zd(e,t,n){var r=t.pendingProps,i=V.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(V,i&1),e===null)return Yl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=So(l,r,0,null),e=Gt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=na(n),t.memoizedState=ta,e):ts(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Yh(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Lt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Lt(s,o):(o=Gt(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?na(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=ta,r}return o=e.child,e=o.sibling,r=Lt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ts(e,t){return t=So({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ri(e,t,n,r){return r!==null&&Wa(r),Tn(t,e.child,null,n),e=ts(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yh(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=ol(Error(S(422))),ri(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=So({mode:"visible",children:r.children},i,0,null),o=Gt(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Tn(t,e.child,null,l),t.child.memoizedState=na(l),t.memoizedState=ta,o);if(!(t.mode&1))return ri(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(S(419)),r=ol(o,r),ri(e,t,l,r)}if(s=(l&e.childLanes)!==0,Se||s){if(r=ie,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ht(e,i),Qe(r,e,i,-1))}return as(),r=ol(Error(S(421))),ri(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=am.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ne=Nt(i.nextSibling),Te=t,$=!0,$e=null,e!==null&&(Me[Ie++]=ut,Me[Ie++]=ct,Me[Ie++]=Zt,ut=e.id,ct=e.overflow,Zt=t),t=ts(t,r.children),t.flags|=4096,t)}function gu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Gl(e.return,t,n)}function ll(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Jd(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ve(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gu(e,n,t);else if(e.tag===19)gu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(V,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&qi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ll(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&qi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ll(t,!0,n,null,o);break;case"together":ll(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ni(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function mt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Lt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Lt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Gh(e,t,n){switch(t.tag){case 3:Xd(t),Nn();break;case 5:Cd(t);break;case 1:Ae(t.type)&&Ki(t);break;case 4:Ka(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;W(Xi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?Zd(e,t,n):(W(V,V.current&1),e=mt(e,t,n),e!==null?e.sibling:null);W(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Jd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,Yd(e,t,n)}return mt(e,t,n)}var qd,ra,ef,tf;qd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ra=function(){};ef=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Kt(et.current);var o=null;switch(n){case"input":i=Cl(e,i),r=Cl(e,r),o=[];break;case"select":i=K({},i,{value:void 0}),r=K({},r,{value:void 0}),o=[];break;case"textarea":i=_l(e,i),r=_l(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vi)}Tl(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(hr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(hr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&b("scroll",e),o||s===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};tf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Xn(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Xh(e,t,n){var r=t.pendingProps;switch(Ba(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return Ae(t.type)&&Qi(),ce(t),null;case 3:return r=t.stateNode,Rn(),H(je),H(ge),Ga(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ti(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$e!==null&&(da($e),$e=null))),ra(e,t),ce(t),null;case 5:Ya(t);var i=Kt(Er.current);if(n=t.type,e!==null&&t.stateNode!=null)ef(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return ce(t),null}if(e=Kt(et.current),ti(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Je]=t,r[Ar]=o,e=(t.mode&1)!==0,n){case"dialog":b("cancel",r),b("close",r);break;case"iframe":case"object":case"embed":b("load",r);break;case"video":case"audio":for(i=0;i<ir.length;i++)b(ir[i],r);break;case"source":b("error",r);break;case"img":case"image":case"link":b("error",r),b("load",r);break;case"details":b("toggle",r);break;case"input":Cs(r,o),b("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},b("invalid",r);break;case"textarea":Ps(r,o),b("invalid",r)}Tl(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&ei(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&ei(r.textContent,s,e),i=["children",""+s]):hr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&b("scroll",r)}switch(n){case"input":Qr(r),Es(r,o,!0);break;case"textarea":Qr(r),_s(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Vi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=_c(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Je]=t,e[Ar]=r,qd(e,t,!1,!1),t.stateNode=e;e:{switch(l=Rl(n,r),n){case"dialog":b("cancel",e),b("close",e),i=r;break;case"iframe":case"object":case"embed":b("load",e),i=r;break;case"video":case"audio":for(i=0;i<ir.length;i++)b(ir[i],e);i=r;break;case"source":b("error",e),i=r;break;case"img":case"image":case"link":b("error",e),b("load",e),i=r;break;case"details":b("toggle",e),i=r;break;case"input":Cs(e,r),i=Cl(e,r),b("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=K({},r,{value:void 0}),b("invalid",e);break;case"textarea":Ps(e,r),i=_l(e,r),b("invalid",e);break;default:i=r}Tl(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?Rc(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Nc(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&mr(e,u):typeof u=="number"&&mr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(hr.hasOwnProperty(o)?u!=null&&o==="onScroll"&&b("scroll",e):u!=null&&Ca(e,o,u,l))}switch(n){case"input":Qr(e),Es(e,r,!1);break;case"textarea":Qr(e),_s(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Mt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?wn(e,!!r.multiple,o,!1):r.defaultValue!=null&&wn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Vi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)tf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Kt(Er.current),Kt(et.current),ti(t)){if(r=t.stateNode,n=t.memoizedProps,r[Je]=t,(o=r.nodeValue!==n)&&(e=Te,e!==null))switch(e.tag){case 3:ei(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ei(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Je]=t,t.stateNode=r}return ce(t),null;case 13:if(H(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&Ne!==null&&t.mode&1&&!(t.flags&128))xd(),Nn(),t.flags|=98560,o=!1;else if(o=ti(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[Je]=t}else Nn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),o=!1}else $e!==null&&(da($e),$e=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?te===0&&(te=3):as())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return Rn(),ra(e,t),e===null&&Sr(t.stateNode.containerInfo),ce(t),null;case 10:return $a(t.type._context),ce(t),null;case 17:return Ae(t.type)&&Qi(),ce(t),null;case 19:if(H(V),o=t.memoizedState,o===null)return ce(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Xn(o,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=qi(e),l!==null){for(t.flags|=128,Xn(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(V,V.current&1|2),t.child}e=e.sibling}o.tail!==null&&Z()>Ln&&(t.flags|=128,r=!0,Xn(o,!1),t.lanes=4194304)}else{if(!r)if(e=qi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Xn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!$)return ce(t),null}else 2*Z()-o.renderingStartTime>Ln&&n!==1073741824&&(t.flags|=128,r=!0,Xn(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Z(),t.sibling=null,n=V.current,W(V,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return ls(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_e&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function Zh(e,t){switch(Ba(t),t.tag){case 1:return Ae(t.type)&&Qi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Rn(),H(je),H(ge),Ga(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ya(t),null;case 13:if(H(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Nn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(V),null;case 4:return Rn(),null;case 10:return $a(t.type._context),null;case 22:case 23:return ls(),null;case 24:return null;default:return null}}var ii=!1,me=!1,Jh=typeof WeakSet=="function"?WeakSet:Set,_=null;function xn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Y(e,t,r)}else n.current=null}function ia(e,t,n){try{n()}catch(r){Y(e,t,r)}}var vu=!1;function qh(e,t){if(Wl=bi,e=od(),Fa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,c=0,h=0,m=e,g=null;t:for(;;){for(var k;m!==n||i!==0&&m.nodeType!==3||(s=l+i),m!==o||r!==0&&m.nodeType!==3||(u=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(k=m.firstChild)!==null;)g=m,m=k;for(;;){if(m===e)break t;if(g===n&&++c===i&&(s=l),g===o&&++h===r&&(u=l),(k=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=k}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(bl={focusedElem:e,selectionRange:n},bi=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,j=y.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:be(t.type,v),j);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(x){Y(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return y=vu,vu=!1,y}function dr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ia(t,n,o)}i=i.next}while(i!==r)}}function wo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function oa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function nf(e){var t=e.alternate;t!==null&&(e.alternate=null,nf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Je],delete t[Ar],delete t[Vl],delete t[Mh],delete t[Ih])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function rf(e){return e.tag===5||e.tag===3||e.tag===4}function xu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function la(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vi));else if(r!==4&&(e=e.child,e!==null))for(la(e,t,n),e=e.sibling;e!==null;)la(e,t,n),e=e.sibling}function aa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(aa(e,t,n),e=e.sibling;e!==null;)aa(e,t,n),e=e.sibling}var oe=null,He=!1;function xt(e,t,n){for(n=n.child;n!==null;)of(e,t,n),n=n.sibling}function of(e,t,n){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(fo,n)}catch{}switch(n.tag){case 5:me||xn(n,t);case 6:var r=oe,i=He;oe=null,xt(e,t,n),oe=r,He=i,oe!==null&&(He?(e=oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):oe.removeChild(n.stateNode));break;case 18:oe!==null&&(He?(e=oe,n=n.stateNode,e.nodeType===8?qo(e.parentNode,n):e.nodeType===1&&qo(e,n),yr(e)):qo(oe,n.stateNode));break;case 4:r=oe,i=He,oe=n.stateNode.containerInfo,He=!0,xt(e,t,n),oe=r,He=i;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&ia(n,t,l),i=i.next}while(i!==r)}xt(e,t,n);break;case 1:if(!me&&(xn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Y(n,t,s)}xt(e,t,n);break;case 21:xt(e,t,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,xt(e,t,n),me=r):xt(e,t,n);break;default:xt(e,t,n)}}function yu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Jh),t.forEach(function(r){var i=sm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function We(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:oe=s.stateNode,He=!1;break e;case 3:oe=s.stateNode.containerInfo,He=!0;break e;case 4:oe=s.stateNode.containerInfo,He=!0;break e}s=s.return}if(oe===null)throw Error(S(160));of(o,l,i),oe=null,He=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Y(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)lf(t,e),t=t.sibling}function lf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(t,e),Ye(e),r&4){try{dr(3,e,e.return),wo(3,e)}catch(v){Y(e,e.return,v)}try{dr(5,e,e.return)}catch(v){Y(e,e.return,v)}}break;case 1:We(t,e),Ye(e),r&512&&n!==null&&xn(n,n.return);break;case 5:if(We(t,e),Ye(e),r&512&&n!==null&&xn(n,n.return),e.flags&32){var i=e.stateNode;try{mr(i,"")}catch(v){Y(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Ec(i,o),Rl(s,l);var c=Rl(s,o);for(l=0;l<u.length;l+=2){var h=u[l],m=u[l+1];h==="style"?Rc(i,m):h==="dangerouslySetInnerHTML"?Nc(i,m):h==="children"?mr(i,m):Ca(i,h,m,c)}switch(s){case"input":El(i,o);break;case"textarea":Pc(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var k=o.value;k!=null?wn(i,!!o.multiple,k,!1):g!==!!o.multiple&&(o.defaultValue!=null?wn(i,!!o.multiple,o.defaultValue,!0):wn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ar]=o}catch(v){Y(e,e.return,v)}}break;case 6:if(We(t,e),Ye(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){Y(e,e.return,v)}}break;case 3:if(We(t,e),Ye(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{yr(t.containerInfo)}catch(v){Y(e,e.return,v)}break;case 4:We(t,e),Ye(e);break;case 13:We(t,e),Ye(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(is=Z())),r&4&&yu(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(me=(c=me)||h,We(t,e),me=c):We(t,e),Ye(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(_=e,h=e.child;h!==null;){for(m=_=h;_!==null;){switch(g=_,k=g.child,g.tag){case 0:case 11:case 14:case 15:dr(4,g,g.return);break;case 1:xn(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){Y(r,n,v)}}break;case 5:xn(g,g.return);break;case 22:if(g.memoizedState!==null){ku(m);continue}}k!==null?(k.return=g,_=k):ku(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{i=m.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=m.stateNode,u=m.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Tc("display",l))}catch(v){Y(e,e.return,v)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(v){Y(e,e.return,v)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:We(t,e),Ye(e),r&4&&yu(e);break;case 21:break;default:We(t,e),Ye(e)}}function Ye(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(rf(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(mr(i,""),r.flags&=-33);var o=xu(e);aa(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=xu(e);la(e,s,l);break;default:throw Error(S(161))}}catch(u){Y(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function em(e,t,n){_=e,af(e)}function af(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var i=_,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||ii;if(!l){var s=i.alternate,u=s!==null&&s.memoizedState!==null||me;s=ii;var c=me;if(ii=l,(me=u)&&!c)for(_=i;_!==null;)l=_,u=l.child,l.tag===22&&l.memoizedState!==null?Su(i):u!==null?(u.return=l,_=u):Su(i);for(;o!==null;)_=o,af(o),o=o.sibling;_=i,ii=s,me=c}wu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,_=o):wu(e)}}function wu(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:me||wo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!me)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:be(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ru(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ru(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&yr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}me||t.flags&512&&oa(t)}catch(g){Y(t,t.return,g)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function ku(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function Su(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{wo(4,t)}catch(u){Y(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){Y(t,i,u)}}var o=t.return;try{oa(t)}catch(u){Y(t,o,u)}break;case 5:var l=t.return;try{oa(t)}catch(u){Y(t,l,u)}}}catch(u){Y(t,t.return,u)}if(t===e){_=null;break}var s=t.sibling;if(s!==null){s.return=t.return,_=s;break}_=t.return}}var tm=Math.ceil,no=gt.ReactCurrentDispatcher,ns=gt.ReactCurrentOwner,Fe=gt.ReactCurrentBatchConfig,I=0,ie=null,q=null,ae=0,_e=0,yn=Ft(0),te=0,Tr=null,qt=0,ko=0,rs=0,fr=null,ke=null,is=0,Ln=1/0,at=null,ro=!1,sa=null,Rt=null,oi=!1,At=null,io=0,pr=0,ua=null,Ti=-1,Ri=0;function xe(){return I&6?Z():Ti!==-1?Ti:Ti=Z()}function zt(e){return e.mode&1?I&2&&ae!==0?ae&-ae:Fh.transition!==null?(Ri===0&&(Ri=Hc()),Ri):(e=U,e!==0||(e=window.event,e=e===void 0?16:Xc(e.type)),e):1}function Qe(e,t,n,r){if(50<pr)throw pr=0,ua=null,Error(S(185));Dr(e,n,r),(!(I&2)||e!==ie)&&(e===ie&&(!(I&2)&&(ko|=n),te===4&&St(e,ae)),Ce(e,r),n===1&&I===0&&!(t.mode&1)&&(Ln=Z()+500,vo&&Ut()))}function Ce(e,t){var n=e.callbackNode;Fp(e,t);var r=Wi(e,e===ie?ae:0);if(r===0)n!==null&&Rs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Rs(n),t===1)e.tag===0?Dh(ju.bind(null,e)):md(ju.bind(null,e)),Lh(function(){!(I&6)&&Ut()}),n=null;else{switch($c(r)){case 1:n=Ta;break;case 4:n=Wc;break;case 16:n=Bi;break;case 536870912:n=bc;break;default:n=Bi}n=mf(n,sf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function sf(e,t){if(Ti=-1,Ri=0,I&6)throw Error(S(327));var n=e.callbackNode;if(Cn()&&e.callbackNode!==n)return null;var r=Wi(e,e===ie?ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=oo(e,r);else{t=r;var i=I;I|=2;var o=cf();(ie!==e||ae!==t)&&(at=null,Ln=Z()+500,Yt(e,t));do try{im();break}catch(s){uf(e,s)}while(!0);Ha(),no.current=o,I=i,q!==null?t=0:(ie=null,ae=0,t=te)}if(t!==0){if(t===2&&(i=Il(e),i!==0&&(r=i,t=ca(e,i))),t===1)throw n=Tr,Yt(e,0),St(e,r),Ce(e,Z()),n;if(t===6)St(e,r);else{if(i=e.current.alternate,!(r&30)&&!nm(i)&&(t=oo(e,r),t===2&&(o=Il(e),o!==0&&(r=o,t=ca(e,o))),t===1))throw n=Tr,Yt(e,0),St(e,r),Ce(e,Z()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:$t(e,ke,at);break;case 3:if(St(e,r),(r&130023424)===r&&(t=is+500-Z(),10<t)){if(Wi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){xe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=$l($t.bind(null,e,ke,at),t);break}$t(e,ke,at);break;case 4:if(St(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Ve(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*tm(r/1960))-r,10<r){e.timeoutHandle=$l($t.bind(null,e,ke,at),r);break}$t(e,ke,at);break;case 5:$t(e,ke,at);break;default:throw Error(S(329))}}}return Ce(e,Z()),e.callbackNode===n?sf.bind(null,e):null}function ca(e,t){var n=fr;return e.current.memoizedState.isDehydrated&&(Yt(e,t).flags|=256),e=oo(e,t),e!==2&&(t=ke,ke=n,t!==null&&da(t)),e}function da(e){ke===null?ke=e:ke.push.apply(ke,e)}function nm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ke(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function St(e,t){for(t&=~rs,t&=~ko,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ve(t),r=1<<n;e[n]=-1,t&=~r}}function ju(e){if(I&6)throw Error(S(327));Cn();var t=Wi(e,0);if(!(t&1))return Ce(e,Z()),null;var n=oo(e,t);if(e.tag!==0&&n===2){var r=Il(e);r!==0&&(t=r,n=ca(e,r))}if(n===1)throw n=Tr,Yt(e,0),St(e,t),Ce(e,Z()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,$t(e,ke,at),Ce(e,Z()),null}function os(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(Ln=Z()+500,vo&&Ut())}}function en(e){At!==null&&At.tag===0&&!(I&6)&&Cn();var t=I;I|=1;var n=Fe.transition,r=U;try{if(Fe.transition=null,U=1,e)return e()}finally{U=r,Fe.transition=n,I=t,!(I&6)&&Ut()}}function ls(){_e=yn.current,H(yn)}function Yt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,zh(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(Ba(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qi();break;case 3:Rn(),H(je),H(ge),Ga();break;case 5:Ya(r);break;case 4:Rn();break;case 13:H(V);break;case 19:H(V);break;case 10:$a(r.type._context);break;case 22:case 23:ls()}n=n.return}if(ie=e,q=e=Lt(e.current,null),ae=_e=t,te=0,Tr=null,rs=ko=qt=0,ke=fr=null,Qt!==null){for(t=0;t<Qt.length;t++)if(n=Qt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Qt=null}return e}function uf(e,t){do{var n=q;try{if(Ha(),Pi.current=to,eo){for(var r=Q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}eo=!1}if(Jt=0,re=ee=Q=null,cr=!1,Pr=0,ns.current=null,n===null||n.return===null){te=1,Tr=t,q=null;break}e:{var o=e,l=n.return,s=n,u=t;if(t=ae,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=s,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var k=cu(l);if(k!==null){k.flags&=-257,du(k,l,s,o,t),k.mode&1&&uu(o,c,t),t=k,u=c;var y=t.updateQueue;if(y===null){var v=new Set;v.add(u),t.updateQueue=v}else y.add(u);break e}else{if(!(t&1)){uu(o,c,t),as();break e}u=Error(S(426))}}else if($&&s.mode&1){var j=cu(l);if(j!==null){!(j.flags&65536)&&(j.flags|=256),du(j,l,s,o,t),Wa(zn(u,s));break e}}o=u=zn(u,s),te!==4&&(te=2),fr===null?fr=[o]:fr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Vd(o,u,t);nu(o,f);break e;case 1:s=u;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Rt===null||!Rt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Qd(o,s,t);nu(o,x);break e}}o=o.return}while(o!==null)}ff(n)}catch(C){t=C,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function cf(){var e=no.current;return no.current=to,e===null?to:e}function as(){(te===0||te===3||te===2)&&(te=4),ie===null||!(qt&268435455)&&!(ko&268435455)||St(ie,ae)}function oo(e,t){var n=I;I|=2;var r=cf();(ie!==e||ae!==t)&&(at=null,Yt(e,t));do try{rm();break}catch(i){uf(e,i)}while(!0);if(Ha(),I=n,no.current=r,q!==null)throw Error(S(261));return ie=null,ae=0,te}function rm(){for(;q!==null;)df(q)}function im(){for(;q!==null&&!Np();)df(q)}function df(e){var t=hf(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?ff(e):q=t,ns.current=null}function ff(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Zh(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,q=null;return}}else if(n=Xh(n,t,_e),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);te===0&&(te=5)}function $t(e,t,n){var r=U,i=Fe.transition;try{Fe.transition=null,U=1,om(e,t,n,r)}finally{Fe.transition=i,U=r}return null}function om(e,t,n,r){do Cn();while(At!==null);if(I&6)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Up(e,o),e===ie&&(q=ie=null,ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||oi||(oi=!0,mf(Bi,function(){return Cn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Fe.transition,Fe.transition=null;var l=U;U=1;var s=I;I|=4,ns.current=null,qh(e,n),lf(n,e),Ch(bl),bi=!!Wl,bl=Wl=null,e.current=n,em(n),Tp(),I=s,U=l,Fe.transition=o}else e.current=n;if(oi&&(oi=!1,At=e,io=i),o=e.pendingLanes,o===0&&(Rt=null),Lp(n.stateNode),Ce(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ro)throw ro=!1,e=sa,sa=null,e;return io&1&&e.tag!==0&&Cn(),o=e.pendingLanes,o&1?e===ua?pr++:(pr=0,ua=e):pr=0,Ut(),null}function Cn(){if(At!==null){var e=$c(io),t=Fe.transition,n=U;try{if(Fe.transition=null,U=16>e?16:e,At===null)var r=!1;else{if(e=At,At=null,io=0,I&6)throw Error(S(331));var i=I;for(I|=4,_=e.current;_!==null;){var o=_,l=o.child;if(_.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(_=c;_!==null;){var h=_;switch(h.tag){case 0:case 11:case 15:dr(8,h,o)}var m=h.child;if(m!==null)m.return=h,_=m;else for(;_!==null;){h=_;var g=h.sibling,k=h.return;if(nf(h),h===c){_=null;break}if(g!==null){g.return=k,_=g;break}_=k}}}var y=o.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var j=v.sibling;v.sibling=null,v=j}while(v!==null)}}_=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,_=l;else e:for(;_!==null;){if(o=_,o.flags&2048)switch(o.tag){case 0:case 11:case 15:dr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,_=f;break e}_=o.return}}var d=e.current;for(_=d;_!==null;){l=_;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,_=p;else e:for(l=d;_!==null;){if(s=_,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:wo(9,s)}}catch(C){Y(s,s.return,C)}if(s===l){_=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,_=x;break e}_=s.return}}if(I=i,Ut(),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(fo,e)}catch{}r=!0}return r}finally{U=n,Fe.transition=t}}return!1}function Au(e,t,n){t=zn(n,t),t=Vd(e,t,1),e=Tt(e,t,1),t=xe(),e!==null&&(Dr(e,1,t),Ce(e,t))}function Y(e,t,n){if(e.tag===3)Au(e,e,n);else for(;t!==null;){if(t.tag===3){Au(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Rt===null||!Rt.has(r))){e=zn(n,e),e=Qd(t,e,1),t=Tt(t,e,1),e=xe(),t!==null&&(Dr(t,1,e),Ce(t,e));break}}t=t.return}}function lm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=xe(),e.pingedLanes|=e.suspendedLanes&n,ie===e&&(ae&n)===n&&(te===4||te===3&&(ae&130023424)===ae&&500>Z()-is?Yt(e,0):rs|=n),Ce(e,t)}function pf(e,t){t===0&&(e.mode&1?(t=Gr,Gr<<=1,!(Gr&130023424)&&(Gr=4194304)):t=1);var n=xe();e=ht(e,t),e!==null&&(Dr(e,t,n),Ce(e,n))}function am(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),pf(e,n)}function sm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),pf(e,n)}var hf;hf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||je.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,Gh(e,t,n);Se=!!(e.flags&131072)}else Se=!1,$&&t.flags&1048576&&gd(t,Gi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ni(e,t),e=t.pendingProps;var i=_n(t,ge.current);An(t,n),i=Za(null,t,r,e,i,n);var o=Ja();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ae(r)?(o=!0,Ki(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Qa(t),i.updater=xo,t.stateNode=i,i._reactInternals=t,Zl(t,r,e,n),t=ea(null,t,r,!0,o,n)):(t.tag=0,$&&o&&Ua(t),ve(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ni(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=cm(r),e=be(r,e),i){case 0:t=ql(null,t,r,e,n);break e;case 1:t=hu(null,t,r,e,n);break e;case 11:t=fu(null,t,r,e,n);break e;case 14:t=pu(null,t,r,be(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:be(r,i),ql(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:be(r,i),hu(e,t,r,i,n);case 3:e:{if(Xd(t),e===null)throw Error(S(387));r=t.pendingProps,o=t.memoizedState,i=o.element,wd(e,t),Ji(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=zn(Error(S(423)),t),t=mu(e,t,r,n,i);break e}else if(r!==i){i=zn(Error(S(424)),t),t=mu(e,t,r,n,i);break e}else for(Ne=Nt(t.stateNode.containerInfo.firstChild),Te=t,$=!0,$e=null,n=Ad(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Nn(),r===i){t=mt(e,t,n);break e}ve(e,t,r,n)}t=t.child}return t;case 5:return Cd(t),e===null&&Yl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Hl(r,i)?l=null:o!==null&&Hl(r,o)&&(t.flags|=32),Gd(e,t),ve(e,t,l,n),t.child;case 6:return e===null&&Yl(t),null;case 13:return Zd(e,t,n);case 4:return Ka(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Tn(t,null,r,n):ve(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:be(r,i),fu(e,t,r,i,n);case 7:return ve(e,t,t.pendingProps,n),t.child;case 8:return ve(e,t,t.pendingProps.children,n),t.child;case 12:return ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,W(Xi,r._currentValue),r._currentValue=l,o!==null)if(Ke(o.value,l)){if(o.children===i.children&&!je.current){t=mt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=dt(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Gl(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(S(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Gl(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ve(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,An(t,n),i=Ue(i),r=r(i),t.flags|=1,ve(e,t,r,n),t.child;case 14:return r=t.type,i=be(r,t.pendingProps),i=be(r.type,i),pu(e,t,r,i,n);case 15:return Kd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:be(r,i),Ni(e,t),t.tag=1,Ae(r)?(e=!0,Ki(t)):e=!1,An(t,n),Sd(t,r,i),Zl(t,r,i,n),ea(null,t,r,!0,e,n);case 19:return Jd(e,t,n);case 22:return Yd(e,t,n)}throw Error(S(156,t.tag))};function mf(e,t){return Bc(e,t)}function um(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,t,n,r){return new um(e,t,n,r)}function ss(e){return e=e.prototype,!(!e||!e.isReactComponent)}function cm(e){if(typeof e=="function")return ss(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Pa)return 11;if(e===_a)return 14}return 2}function Lt(e,t){var n=e.alternate;return n===null?(n=De(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zi(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")ss(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case un:return Gt(n.children,i,o,t);case Ea:l=8,i|=8;break;case kl:return e=De(12,n,t,i|2),e.elementType=kl,e.lanes=o,e;case Sl:return e=De(13,n,t,i),e.elementType=Sl,e.lanes=o,e;case jl:return e=De(19,n,t,i),e.elementType=jl,e.lanes=o,e;case jc:return So(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case kc:l=10;break e;case Sc:l=9;break e;case Pa:l=11;break e;case _a:l=14;break e;case yt:l=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=De(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Gt(e,t,n,r){return e=De(7,e,r,t),e.lanes=n,e}function So(e,t,n,r){return e=De(22,e,r,t),e.elementType=jc,e.lanes=n,e.stateNode={isHidden:!1},e}function al(e,t,n){return e=De(6,e,null,t),e.lanes=n,e}function sl(e,t,n){return t=De(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function dm(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bo(0),this.expirationTimes=bo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function us(e,t,n,r,i,o,l,s,u){return e=new dm(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=De(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qa(o),e}function fm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:sn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function gf(e){if(!e)return It;e=e._reactInternals;e:{if(nn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ae(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ae(n))return hd(e,n,t)}return t}function vf(e,t,n,r,i,o,l,s,u){return e=us(n,r,!0,e,i,o,l,s,u),e.context=gf(null),n=e.current,r=xe(),i=zt(n),o=dt(r,i),o.callback=t??null,Tt(n,o,i),e.current.lanes=i,Dr(e,i,r),Ce(e,r),e}function jo(e,t,n,r){var i=t.current,o=xe(),l=zt(i);return n=gf(n),t.context===null?t.context=n:t.pendingContext=n,t=dt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Tt(i,t,l),e!==null&&(Qe(e,i,l,o),Ei(e,i,l)),l}function lo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Cu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function cs(e,t){Cu(e,t),(e=e.alternate)&&Cu(e,t)}function pm(){return null}var xf=typeof reportError=="function"?reportError:function(e){console.error(e)};function ds(e){this._internalRoot=e}Ao.prototype.render=ds.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));jo(e,t,null,null)};Ao.prototype.unmount=ds.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;en(function(){jo(null,e,null,null)}),t[pt]=null}};function Ao(e){this._internalRoot=e}Ao.prototype.unstable_scheduleHydration=function(e){if(e){var t=Kc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<kt.length&&t!==0&&t<kt[n].priority;n++);kt.splice(n,0,e),n===0&&Gc(e)}};function fs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Co(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Eu(){}function hm(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=lo(l);o.call(c)}}var l=vf(t,r,e,0,null,!1,!1,"",Eu);return e._reactRootContainer=l,e[pt]=l.current,Sr(e.nodeType===8?e.parentNode:e),en(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=lo(u);s.call(c)}}var u=us(e,0,!1,null,null,!1,!1,"",Eu);return e._reactRootContainer=u,e[pt]=u.current,Sr(e.nodeType===8?e.parentNode:e),en(function(){jo(t,u,n,r)}),u}function Eo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var u=lo(l);s.call(u)}}jo(t,l,e,i)}else l=hm(n,t,e,i,r);return lo(l)}Vc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=rr(t.pendingLanes);n!==0&&(Ra(t,n|1),Ce(t,Z()),!(I&6)&&(Ln=Z()+500,Ut()))}break;case 13:en(function(){var r=ht(e,1);if(r!==null){var i=xe();Qe(r,e,1,i)}}),cs(e,1)}};za=function(e){if(e.tag===13){var t=ht(e,134217728);if(t!==null){var n=xe();Qe(t,e,134217728,n)}cs(e,134217728)}};Qc=function(e){if(e.tag===13){var t=zt(e),n=ht(e,t);if(n!==null){var r=xe();Qe(n,e,t,r)}cs(e,t)}};Kc=function(){return U};Yc=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};Ll=function(e,t,n){switch(t){case"input":if(El(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=go(r);if(!i)throw Error(S(90));Cc(r),El(r,i)}}}break;case"textarea":Pc(e,n);break;case"select":t=n.value,t!=null&&wn(e,!!n.multiple,t,!1)}};Oc=os;Mc=en;var mm={usingClientEntryPoint:!1,Events:[Ur,pn,go,zc,Lc,os]},Zn={findFiberByHostInstance:Vt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},gm={bundleType:Zn.bundleType,version:Zn.version,rendererPackageName:Zn.rendererPackageName,rendererConfig:Zn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Fc(e),e===null?null:e.stateNode},findFiberByHostInstance:Zn.findFiberByHostInstance||pm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var li=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!li.isDisabled&&li.supportsFiber)try{fo=li.inject(gm),qe=li}catch{}}Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mm;Le.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fs(t))throw Error(S(200));return fm(e,t,null,n)};Le.createRoot=function(e,t){if(!fs(e))throw Error(S(299));var n=!1,r="",i=xf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=us(e,1,!1,null,null,n,!1,r,i),e[pt]=t.current,Sr(e.nodeType===8?e.parentNode:e),new ds(t)};Le.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Fc(t),e=e===null?null:e.stateNode,e};Le.flushSync=function(e){return en(e)};Le.hydrate=function(e,t,n){if(!Co(t))throw Error(S(200));return Eo(null,e,t,!0,n)};Le.hydrateRoot=function(e,t,n){if(!fs(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=xf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=vf(t,null,e,1,n??null,i,!1,o,l),e[pt]=t.current,Sr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ao(t)};Le.render=function(e,t,n){if(!Co(t))throw Error(S(200));return Eo(null,e,t,!1,n)};Le.unmountComponentAtNode=function(e){if(!Co(e))throw Error(S(40));return e._reactRootContainer?(en(function(){Eo(null,null,e,!1,function(){e._reactRootContainer=null,e[pt]=null})}),!0):!1};Le.unstable_batchedUpdates=os;Le.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Co(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Eo(e,t,n,!1,r)};Le.version="18.2.0-next-9e3b772b8-20220608";function yf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yf)}catch(e){console.error(e)}}yf(),gc.exports=Le;var vm=gc.exports,wf,Pu=vm;wf=Pu.createRoot,Pu.hydrateRoot;/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rr(){return Rr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Rr.apply(this,arguments)}var Ct;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ct||(Ct={}));const _u="popstate";function xm(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:s}=r.location;return fa("",{pathname:o,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ao(i)}return wm(t,n,null,e)}function G(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function kf(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ym(){return Math.random().toString(36).substr(2,8)}function Nu(e,t){return{usr:e.state,key:e.key,idx:t}}function fa(e,t,n,r){return n===void 0&&(n=null),Rr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Un(t):t,{state:n,key:t&&t.key||r||ym()})}function ao(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Un(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function wm(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,s=Ct.Pop,u=null,c=h();c==null&&(c=0,l.replaceState(Rr({},l.state,{idx:c}),""));function h(){return(l.state||{idx:null}).idx}function m(){s=Ct.Pop;let j=h(),f=j==null?null:j-c;c=j,u&&u({action:s,location:v.location,delta:f})}function g(j,f){s=Ct.Push;let d=fa(v.location,j,f);c=h()+1;let p=Nu(d,c),x=v.createHref(d);try{l.pushState(p,"",x)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(x)}o&&u&&u({action:s,location:v.location,delta:1})}function k(j,f){s=Ct.Replace;let d=fa(v.location,j,f);c=h();let p=Nu(d,c),x=v.createHref(d);l.replaceState(p,"",x),o&&u&&u({action:s,location:v.location,delta:0})}function y(j){let f=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof j=="string"?j:ao(j);return d=d.replace(/ $/,"%20"),G(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let v={get action(){return s},get location(){return e(i,l)},listen(j){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(_u,m),u=j,()=>{i.removeEventListener(_u,m),u=null}},createHref(j){return t(i,j)},createURL:y,encodeLocation(j){let f=y(j);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:k,go(j){return l.go(j)}};return v}var Tu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Tu||(Tu={}));function km(e,t,n){n="/";let r=typeof t=="string"?Un(t):t,i=On(r.pathname||"/",n);if(i==null)return null;let o=Sf(e);Sm(o);let l=null;for(let s=0;l==null&&s<o.length;++s){let u=Lm(i);l=Rm(o[s],u)}return l}function Sf(e,t,n,r){t=[],n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,s)=>{let u={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};u.relativePath.startsWith("/")&&(G(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Ot([r,u.relativePath]),h=n.concat(u);o.children&&o.children.length>0&&(G(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Sf(o.children,t,h,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:Nm(c,o.index),routesMeta:h})};return e.forEach((o,l)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,l);else for(let u of jf(o.path))i(o,l,u)}),t}function jf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=jf(r.join("/")),s=[];return s.push(...l.map(u=>u===""?o:[o,u].join("/"))),i&&s.push(...l),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function Sm(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Tm(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const jm=/^:[\w-]+$/,Am=3,Cm=2,Em=1,Pm=10,_m=-2,Ru=e=>e==="*";function Nm(e,t){let n=e.split("/"),r=n.length;return n.some(Ru)&&(r+=_m),t&&(r+=Cm),n.filter(i=>!Ru(i)).reduce((i,o)=>i+(jm.test(o)?Am:o===""?Em:Pm),r)}function Tm(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Rm(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let s=n[l],u=l===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",h=pa({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},c);if(!h)return null;Object.assign(r,h.params);let m=s.route;o.push({params:r,pathname:Ot([i,h.pathname]),pathnameBase:Dm(Ot([i,h.pathnameBase])),route:m}),h.pathnameBase!=="/"&&(i=Ot([i,h.pathnameBase]))}return o}function pa(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=zm(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,h,m)=>{let{paramName:g,isOptional:k}=h;if(g==="*"){let v=s[m]||"";l=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const y=s[m];return k&&!y?c[g]=void 0:c[g]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:l,pattern:e}}function zm(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),kf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,u)=>(r.push({paramName:s,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Lm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return kf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function On(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Om(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Un(e):e;return{pathname:n?n.startsWith("/")?n:Mm(n,t):t,search:Fm(r),hash:Um(i)}}function Mm(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ul(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Im(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ps(e,t){let n=Im(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function hs(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Un(e):(i=Rr({},e),G(!i.pathname||!i.pathname.includes("?"),ul("?","pathname","search",i)),G(!i.pathname||!i.pathname.includes("#"),ul("#","pathname","hash",i)),G(!i.search||!i.search.includes("#"),ul("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,s;if(l==null)s=n;else{let m=t.length-1;if(!r&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}s=m>=0?t[m]:"/"}let u=Om(i,s),c=l&&l!=="/"&&l.endsWith("/"),h=(o||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const Ot=e=>e.join("/").replace(/\/\/+/g,"/"),Dm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Fm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Um=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Af=["post","put","patch","delete"];new Set(Af);const Bm=["get",...Af];new Set(Bm);/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zr(){return zr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zr.apply(this,arguments)}const Po=P.createContext(null),Wm=P.createContext(null),vt=P.createContext(null),_o=P.createContext(null),Bt=P.createContext({outlet:null,matches:[],isDataRoute:!1});function bm(e,t){let{relative:n}=t===void 0?{}:t;Bn()||G(!1);let{basename:r,navigator:i}=P.useContext(vt),{hash:o,pathname:l,search:s}=No(e,{relative:n}),u=l;return r!=="/"&&(u=l==="/"?r:Ot([r,l])),i.createHref({pathname:u,search:s,hash:o})}function Bn(){return P.useContext(_o)!=null}function nt(){return Bn()||G(!1),P.useContext(_o).location}function Cf(e){P.useContext(vt).static||P.useLayoutEffect(e)}function Ef(){let{isDataRoute:e}=P.useContext(Bt);return e?qm():Hm()}function Hm(){Bn()||G(!1);let e=P.useContext(Po),{basename:t,future:n,navigator:r}=P.useContext(vt),{matches:i}=P.useContext(Bt),{pathname:o}=nt(),l=JSON.stringify(ps(i,n.v7_relativeSplatPath)),s=P.useRef(!1);return Cf(()=>{s.current=!0}),P.useCallback(function(c,h){if(h===void 0&&(h={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let m=hs(c,JSON.parse(l),o,h.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Ot([t,m.pathname])),(h.replace?r.replace:r.push)(m,h.state,h)},[t,r,l,o,e])}const $m=P.createContext(null);function Vm(e){let t=P.useContext(Bt).outlet;return t&&P.createElement($m.Provider,{value:e},t)}function No(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=P.useContext(vt),{matches:i}=P.useContext(Bt),{pathname:o}=nt(),l=JSON.stringify(ps(i,r.v7_relativeSplatPath));return P.useMemo(()=>hs(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function Qm(e,t){return Km(e,t)}function Km(e,t,n,r){Bn()||G(!1);let{navigator:i}=P.useContext(vt),{matches:o}=P.useContext(Bt),l=o[o.length-1],s=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let c=nt(),h;if(t){var m;let j=typeof t=="string"?Un(t):t;u==="/"||(m=j.pathname)!=null&&m.startsWith(u)||G(!1),h=j}else h=c;let g=h.pathname||"/",k=g;if(u!=="/"){let j=u.replace(/^\//,"").split("/");k="/"+g.replace(/^\//,"").split("/").slice(j.length).join("/")}let y=km(e,{pathname:k}),v=Gm(y&&y.map(j=>Object.assign({},j,{params:Object.assign({},s,j.params),pathname:Ot([u,i.encodeLocation?i.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?u:Ot([u,i.encodeLocation?i.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),o,n);return t&&v?P.createElement(_o.Provider,{value:{location:zr({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Ct.Pop}},v):v}function Ym(e){let{routeContext:t,match:n,children:r}=e,i=P.useContext(Po);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(Bt.Provider,{value:t},r)}function Gm(e,t,n,r){var i;if(t===void 0&&(t=[]),n=null,e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let l=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let u=l.findIndex(c=>c.route.id&&(s==null?void 0:s[c.route.id])!==void 0);u>=0||G(!1),l=l.slice(0,Math.min(l.length,u+1))}return l.reduceRight((u,c,h)=>{let m=t.concat(l.slice(0,h+1));return(()=>{let k;return c.route.Component?k=P.createElement(c.route.Component,null):c.route.element?k=c.route.element:k=u,P.createElement(Ym,{match:c,routeContext:{outlet:u,matches:m,isDataRoute:n!=null},children:k})})()},null)}var Pf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Pf||{}),_f=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(_f||{});function Xm(e){let t=P.useContext(Po);return t||G(!1),t}function Zm(e){let t=P.useContext(Bt);return t||G(!1),t}function Jm(e){let t=Zm(),n=t.matches[t.matches.length-1];return n.route.id||G(!1),n.route.id}function qm(){let{router:e}=Xm(Pf.UseNavigateStable),t=Jm(_f.UseNavigateStable),n=P.useRef(!1);return Cf(()=>{n.current=!0}),P.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,zr({fromRouteId:t},o)))},[e,t])}function eg(e){let{to:t,replace:n,state:r,relative:i}=e;Bn()||G(!1);let{future:o,static:l}=P.useContext(vt),{matches:s}=P.useContext(Bt),{pathname:u}=nt(),c=Ef(),h=hs(t,ps(s,o.v7_relativeSplatPath),u,i==="path"),m=JSON.stringify(h);return P.useEffect(()=>c(JSON.parse(m),{replace:n,state:r,relative:i}),[c,m,i,n,r]),null}function tg(e){return Vm(e.context)}function Li(e){G(!1)}function ng(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Ct.Pop,navigator:o,static:l=!1,future:s}=e;Bn()&&G(!1);let u=t.replace(/^\/*/,"/"),c=P.useMemo(()=>({basename:u,navigator:o,static:l,future:zr({v7_relativeSplatPath:!1},s)}),[u,s,o,l]);typeof r=="string"&&(r=Un(r));let{pathname:h="/",search:m="",hash:g="",state:k=null,key:y="default"}=r,v=P.useMemo(()=>{let j=On(h,u);return j==null?null:{location:{pathname:j,search:m,hash:g,state:k,key:y},navigationType:i}},[u,h,m,g,k,y,i]);return v==null?null:P.createElement(vt.Provider,{value:c},P.createElement(_o.Provider,{children:n,value:v}))}function rg(e){let{children:t,location:n}=e;return Qm(ha(t),n)}new Promise(()=>{});function ha(e,t){t===void 0&&(t=[]);let n=[];return P.Children.forEach(e,(r,i)=>{if(!P.isValidElement(r))return;let o=[...t,i];if(r.type===P.Fragment){n.push.apply(n,ha(r.props.children,o));return}r.type!==Li&&G(!1),!r.props.index||!r.props.children||G(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=ha(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function so(){return so=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},so.apply(this,arguments)}function Nf(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function ig(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function og(e,t){return e.button===0&&(!t||t==="_self")&&!ig(e)}const lg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],ag=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],sg="6";try{window.__reactRouterVersion=sg}catch{}const ug=P.createContext({isTransitioning:!1}),cg="startTransition",zu=yl[cg];function dg(e){let{basename:t,children:n,future:r,window:i}=e,o=P.useRef();o.current==null&&(o.current=xm({window:i,v5Compat:!0}));let l=o.current,[s,u]=P.useState({action:l.action,location:l.location}),{v7_startTransition:c}=r||{},h=P.useCallback(m=>{c&&zu?zu(()=>u(m)):u(m)},[u,c]);return P.useLayoutEffect(()=>l.listen(h),[l,h]),P.createElement(ng,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l,future:r})}const fg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",pg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hg=P.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:s,target:u,to:c,preventScrollReset:h,unstable_viewTransition:m}=t,g=Nf(t,lg),{basename:k}=P.useContext(vt),y,v=!1;if(typeof c=="string"&&pg.test(c)&&(y=c,fg))try{let p=new URL(window.location.href),x=c.startsWith("//")?new URL(p.protocol+c):new URL(c),C=On(x.pathname,k);x.origin===p.origin&&C!=null?c=C+x.search+x.hash:v=!0}catch{}let j=bm(c,{relative:i}),f=gg(c,{replace:l,state:s,target:u,preventScrollReset:h,relative:i,unstable_viewTransition:m});function d(p){r&&r(p),p.defaultPrevented||f(p)}return P.createElement("a",so({},g,{href:y||j,onClick:v||o?r:d,ref:n,target:u}))}),To=P.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:l=!1,style:s,to:u,unstable_viewTransition:c,children:h}=t,m=Nf(t,ag),g=No(u,{relative:m.relative}),k=nt(),y=P.useContext(Wm),{navigator:v,basename:j}=P.useContext(vt),f=y!=null&&vg(g)&&c===!0,d=v.encodeLocation?v.encodeLocation(g).pathname:g.pathname,p=k.pathname,x=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(p=p.toLowerCase(),x=x?x.toLowerCase():null,d=d.toLowerCase()),x&&j&&(x=On(x,j)||x);const C=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let E=p===d||!l&&p.startsWith(d)&&p.charAt(C)==="/",A=x!=null&&(x===d||!l&&x.startsWith(d)&&x.charAt(d.length)==="/"),T={isActive:E,isPending:A,isTransitioning:f},B=E?r:void 0,R;typeof o=="function"?R=o(T):R=[o,E?"active":null,A?"pending":null,f?"transitioning":null].filter(Boolean).join(" ");let Pe=typeof s=="function"?s(T):s;return P.createElement(hg,so({},m,{"aria-current":B,className:R,ref:n,style:Pe,to:u,unstable_viewTransition:c}),typeof h=="function"?h(T):h)});var ma;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ma||(ma={}));var Lu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Lu||(Lu={}));function mg(e){let t=P.useContext(Po);return t||G(!1),t}function gg(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:s}=t===void 0?{}:t,u=Ef(),c=nt(),h=No(e,{relative:l});return P.useCallback(m=>{if(og(m,n)){m.preventDefault();let g=r!==void 0?r:ao(c)===ao(h);u(e,{replace:g,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:s})}},[c,u,h,r,i,n,e,o,l,s])}function vg(e,t){t={};let n=P.useContext(ug);n==null&&G(!1);let{basename:r}=mg(ma.useViewTransitionState),i=No(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=On(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=On(n.nextLocation.pathname,r)||n.nextLocation.pathname;return pa(i.pathname,l)!=null||pa(i.pathname,o)!=null}const Ou={HOME:"/",PORTFOLIO:"/portfolio"};function ga(){return ga=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ga.apply(this,arguments)}function Tf(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var xg=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,yg=Tf(function(e){return xg.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function wg(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function kg(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Sg=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(kg(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=wg(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),he="-ms-",uo="-moz-",D="-webkit-",Rf="comm",ms="rule",gs="decl",jg="@import",zf="@keyframes",Ag="@layer",Cg=Math.abs,Ro=String.fromCharCode,Eg=Object.assign;function Pg(e,t){return le(e,0)^45?(((t<<2^le(e,0))<<2^le(e,1))<<2^le(e,2))<<2^le(e,3):0}function Lf(e){return e.trim()}function _g(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,n){return e.replace(t,n)}function va(e,t){return e.indexOf(t)}function le(e,t){return e.charCodeAt(t)|0}function Lr(e,t,n){return e.slice(t,n)}function Xe(e){return e.length}function vs(e){return e.length}function ai(e,t){return t.push(e),e}function Ng(e,t){return e.map(t).join("")}var zo=1,Mn=1,Of=0,Ee=0,J=0,Wn="";function Lo(e,t,n,r,i,o,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:zo,column:Mn,length:l,return:""}}function Jn(e,t){return Eg(Lo("",null,null,"",null,null,0),e,{length:-e.length},t)}function Tg(){return J}function Rg(){return J=Ee>0?le(Wn,--Ee):0,Mn--,J===10&&(Mn=1,zo--),J}function Re(){return J=Ee<Of?le(Wn,Ee++):0,Mn++,J===10&&(Mn=1,zo++),J}function tt(){return le(Wn,Ee)}function Oi(){return Ee}function Wr(e,t){return Lr(Wn,e,t)}function Or(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Mf(e){return zo=Mn=1,Of=Xe(Wn=e),Ee=0,[]}function If(e){return Wn="",e}function Mi(e){return Lf(Wr(Ee-1,xa(e===91?e+2:e===40?e+1:e)))}function zg(e){for(;(J=tt())&&J<33;)Re();return Or(e)>2||Or(J)>3?"":" "}function Lg(e,t){for(;--t&&Re()&&!(J<48||J>102||J>57&&J<65||J>70&&J<97););return Wr(e,Oi()+(t<6&&tt()==32&&Re()==32))}function xa(e){for(;Re();)switch(J){case e:return Ee;case 34:case 39:e!==34&&e!==39&&xa(J);break;case 40:e===41&&xa(e);break;case 92:Re();break}return Ee}function Og(e,t){for(;Re()&&e+J!==57;)if(e+J===84&&tt()===47)break;return"/*"+Wr(t,Ee-1)+"*"+Ro(e===47?e:Re())}function Mg(e){for(;!Or(tt());)Re();return Wr(e,Ee)}function Ig(e){return If(Ii("",null,null,null,[""],e=Mf(e),0,[0],e))}function Ii(e,t,n,r,i,o,l,s,u){for(var c=0,h=0,m=l,g=0,k=0,y=0,v=1,j=1,f=1,d=0,p="",x=i,C=o,E=r,A=p;j;)switch(y=d,d=Re()){case 40:if(y!=108&&le(A,m-1)==58){va(A+=F(Mi(d),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:A+=Mi(d);break;case 9:case 10:case 13:case 32:A+=zg(y);break;case 92:A+=Lg(Oi()-1,7);continue;case 47:switch(tt()){case 42:case 47:ai(Dg(Og(Re(),Oi()),t,n),u);break;default:A+="/"}break;case 123*v:s[c++]=Xe(A)*f;case 125*v:case 59:case 0:switch(d){case 0:case 125:j=0;case 59+h:f==-1&&(A=F(A,/\f/g,"")),k>0&&Xe(A)-m&&ai(k>32?Iu(A+";",r,n,m-1):Iu(F(A," ","")+";",r,n,m-2),u);break;case 59:A+=";";default:if(ai(E=Mu(A,t,n,c,h,i,s,p,x=[],C=[],m),o),d===123)if(h===0)Ii(A,t,E,E,x,o,m,s,C);else switch(g===99&&le(A,3)===110?100:g){case 100:case 108:case 109:case 115:Ii(e,E,E,r&&ai(Mu(e,E,E,0,0,i,s,p,i,x=[],m),C),i,C,m,s,r?x:C);break;default:Ii(A,E,E,E,[""],C,0,s,C)}}c=h=k=0,v=f=1,p=A="",m=l;break;case 58:m=1+Xe(A),k=y;default:if(v<1){if(d==123)--v;else if(d==125&&v++==0&&Rg()==125)continue}switch(A+=Ro(d),d*v){case 38:f=h>0?1:(A+="\f",-1);break;case 44:s[c++]=(Xe(A)-1)*f,f=1;break;case 64:tt()===45&&(A+=Mi(Re())),g=tt(),h=m=Xe(p=A+=Mg(Oi())),d++;break;case 45:y===45&&Xe(A)==2&&(v=0)}}return o}function Mu(e,t,n,r,i,o,l,s,u,c,h){for(var m=i-1,g=i===0?o:[""],k=vs(g),y=0,v=0,j=0;y<r;++y)for(var f=0,d=Lr(e,m+1,m=Cg(v=l[y])),p=e;f<k;++f)(p=Lf(v>0?g[f]+" "+d:F(d,/&\f/g,g[f])))&&(u[j++]=p);return Lo(e,t,n,i===0?ms:s,u,c,h)}function Dg(e,t,n){return Lo(e,t,n,Rf,Ro(Tg()),Lr(e,2,-2),0)}function Iu(e,t,n,r){return Lo(e,t,n,gs,Lr(e,0,r),Lr(e,r+1,-1),r)}function En(e,t){for(var n="",r=vs(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function Fg(e,t,n,r){switch(e.type){case Ag:if(e.children.length)break;case jg:case gs:return e.return=e.return||e.value;case Rf:return"";case zf:return e.return=e.value+"{"+En(e.children,r)+"}";case ms:e.value=e.props.join(",")}return Xe(n=En(e.children,r))?e.return=e.value+"{"+n+"}":""}function Ug(e){var t=vs(e);return function(n,r,i,o){for(var l="",s=0;s<t;s++)l+=e[s](n,r,i,o)||"";return l}}function Bg(e){return function(t){t.root||(t=t.return)&&e(t)}}var Wg=function(t,n,r){for(var i=0,o=0;i=o,o=tt(),i===38&&o===12&&(n[r]=1),!Or(o);)Re();return Wr(t,Ee)},bg=function(t,n){var r=-1,i=44;do switch(Or(i)){case 0:i===38&&tt()===12&&(n[r]=1),t[r]+=Wg(Ee-1,n,r);break;case 2:t[r]+=Mi(i);break;case 4:if(i===44){t[++r]=tt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Ro(i)}while(i=Re());return t},Hg=function(t,n){return If(bg(Mf(t),n))},Du=new WeakMap,$g=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Du.get(r))&&!i){Du.set(t,!0);for(var o=[],l=Hg(n,o),s=r.props,u=0,c=0;u<l.length;u++)for(var h=0;h<s.length;h++,c++)t.props[c]=o[u]?l[u].replace(/&\f/g,s[h]):s[h]+" "+l[u]}}},Vg=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Df(e,t){switch(Pg(e,t)){case 5103:return D+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return D+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return D+e+uo+e+he+e+e;case 6828:case 4268:return D+e+he+e+e;case 6165:return D+e+he+"flex-"+e+e;case 5187:return D+e+F(e,/(\w+).+(:[^]+)/,D+"box-$1$2"+he+"flex-$1$2")+e;case 5443:return D+e+he+"flex-item-"+F(e,/flex-|-self/,"")+e;case 4675:return D+e+he+"flex-line-pack"+F(e,/align-content|flex-|-self/,"")+e;case 5548:return D+e+he+F(e,"shrink","negative")+e;case 5292:return D+e+he+F(e,"basis","preferred-size")+e;case 6060:return D+"box-"+F(e,"-grow","")+D+e+he+F(e,"grow","positive")+e;case 4554:return D+F(e,/([^-])(transform)/g,"$1"+D+"$2")+e;case 6187:return F(F(F(e,/(zoom-|grab)/,D+"$1"),/(image-set)/,D+"$1"),e,"")+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,D+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,D+"box-pack:$3"+he+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+D+e+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,D+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xe(e)-1-t>6)switch(le(e,t+1)){case 109:if(le(e,t+4)!==45)break;case 102:return F(e,/(.+:)(.+)-([^]+)/,"$1"+D+"$2-$3$1"+uo+(le(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~va(e,"stretch")?Df(F(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(le(e,t+1)!==115)break;case 6444:switch(le(e,Xe(e)-3-(~va(e,"!important")&&10))){case 107:return F(e,":",":"+D)+e;case 101:return F(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+D+(le(e,14)===45?"inline-":"")+"box$3$1"+D+"$2$3$1"+he+"$2box$3")+e}break;case 5936:switch(le(e,t+11)){case 114:return D+e+he+F(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return D+e+he+F(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return D+e+he+F(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return D+e+he+e+e}return e}var Qg=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case gs:t.return=Df(t.value,t.length);break;case zf:return En([Jn(t,{value:F(t.value,"@","@"+D)})],i);case ms:if(t.length)return Ng(t.props,function(o){switch(_g(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return En([Jn(t,{props:[F(o,/:(read-\w+)/,":"+uo+"$1")]})],i);case"::placeholder":return En([Jn(t,{props:[F(o,/:(plac\w+)/,":"+D+"input-$1")]}),Jn(t,{props:[F(o,/:(plac\w+)/,":"+uo+"$1")]}),Jn(t,{props:[F(o,/:(plac\w+)/,he+"input-$1")]})],i)}return""})}},Kg=[Qg],Yg=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var j=v.getAttribute("data-emotion");j.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=t.stylisPlugins||Kg,o={},l,s=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var j=v.getAttribute("data-emotion").split(" "),f=1;f<j.length;f++)o[j[f]]=!0;s.push(v)});var u,c=[$g,Vg];{var h,m=[Fg,Bg(function(v){h.insert(v)})],g=Ug(c.concat(i,m)),k=function(j){return En(Ig(j),g)};u=function(j,f,d,p){h=d,k(j?j+"{"+f.styles+"}":f.styles),p&&(y.inserted[f.name]=!0)}}var y={key:n,sheet:new Sg({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:u};return y.sheet.hydrate(s),y},Gg=!0;function Xg(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Ff=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||Gg===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},Zg=function(t,n,r){Ff(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function Jg(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var qg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},e0=/[A-Z]|^ms/g,t0=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Uf=function(t){return t.charCodeAt(1)===45},Fu=function(t){return t!=null&&typeof t!="boolean"},cl=Tf(function(e){return Uf(e)?e:e.replace(e0,"-$&").toLowerCase()}),Uu=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(t0,function(r,i,o){return Ze={name:i,styles:o,next:Ze},i})}return qg[t]!==1&&!Uf(t)&&typeof n=="number"&&n!==0?n+"px":n};function Mr(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Ze={name:n.name,styles:n.styles,next:Ze},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Ze={name:r.name,styles:r.styles,next:Ze},r=r.next;var i=n.styles+";";return i}return n0(e,t,n)}case"function":{if(e!==void 0){var o=Ze,l=n(e);return Ze=o,Mr(e,t,l)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function n0(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Mr(e,t,n[i])+";";else for(var o in n){var l=n[o];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=o+"{"+t[l]+"}":Fu(l)&&(r+=cl(o)+":"+Uu(o,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var s=0;s<l.length;s++)Fu(l[s])&&(r+=cl(o)+":"+Uu(o,l[s])+";");else{var u=Mr(e,t,l);switch(o){case"animation":case"animationName":{r+=cl(o)+":"+u+";";break}default:r+=o+"{"+u+"}"}}}return r}var Bu=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Ze,r0=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";Ze=void 0;var l=t[0];l==null||l.raw===void 0?(i=!1,o+=Mr(r,n,l)):o+=l[0];for(var s=1;s<t.length;s++)o+=Mr(r,n,t[s]),i&&(o+=l[s]);Bu.lastIndex=0;for(var u="",c;(c=Bu.exec(o))!==null;)u+="-"+c[1];var h=Jg(o)+u;return{name:h,styles:o,next:Ze}},i0=function(t){return t()},o0=yl.useInsertionEffect?yl.useInsertionEffect:!1,l0=o0||i0,Bf=P.createContext(typeof HTMLElement<"u"?Yg({key:"css"}):null);Bf.Provider;var a0=function(t){return P.forwardRef(function(n,r){var i=P.useContext(Bf);return t(n,i,r)})},s0=P.createContext({}),u0=yg,c0=function(t){return t!=="theme"},Wu=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?u0:c0},bu=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(l){return t.__emotion_forwardProp(l)&&o(l)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},d0=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Ff(n,r,i),l0(function(){return Zg(n,r,i)}),null},f0=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,l;n!==void 0&&(o=n.label,l=n.target);var s=bu(t,n,r),u=s||Wu(i),c=!u("as");return function(){var h=arguments,m=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&m.push("label:"+o+";"),h[0]==null||h[0].raw===void 0)m.push.apply(m,h);else{m.push(h[0][0]);for(var g=h.length,k=1;k<g;k++)m.push(h[k],h[0][k])}var y=a0(function(v,j,f){var d=c&&v.as||i,p="",x=[],C=v;if(v.theme==null){C={};for(var E in v)C[E]=v[E];C.theme=P.useContext(s0)}typeof v.className=="string"?p=Xg(j.registered,x,v.className):v.className!=null&&(p=v.className+" ");var A=r0(m.concat(x),j.registered,C);p+=j.key+"-"+A.name,l!==void 0&&(p+=" "+l);var T=c&&s===void 0?Wu(d):u,B={};for(var R in v)c&&R==="as"||T(R)&&(B[R]=v[R]);return B.className=p,B.ref=f,P.createElement(P.Fragment,null,P.createElement(d0,{cache:j,serialized:A,isStringTag:typeof d=="string"}),P.createElement(d,B))});return y.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",y.defaultProps=t.defaultProps,y.__emotion_real=y,y.__emotion_base=i,y.__emotion_styles=m,y.__emotion_forwardProp=s,Object.defineProperty(y,"toString",{value:function(){return"."+l}}),y.withComponent=function(v,j){return e(v,ga({},n,j,{shouldForwardProp:bu(y,j,!0)})).apply(void 0,m)},y}},p0=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],w=f0.bind();p0.forEach(function(e){w[e]=w(e)});const h0=w.header`
    background-color: var(--body-background-color);
    border-bottom: 1px solid;
    color: #ececec;
    padding: 0;
`,m0=w.div`
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
`,g0=w(To)`
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
`,v0=w.span`
    color: var(--beckground-color);
`,x0=w.div`
    display: flex;
    align-items: center;
    padding: 0 15px;
    @media(max-width: 767px) {
        margin-top: 16px;
        justify-content: space-between;
        margin-bottom: 16px;
    }

`,y0=w.button`
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

`,w0=w.svg`
`,k0=w.div`
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

`,S0=w.div`
    opacity: 1;
    visibility: visible;
    pointer - events: auto;

`,j0=w.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100 %;
`,A0=w.div`
    margin-bottom: auto;
`,C0=w.button`
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

`,E0=w.svg`
    width: 18.67px;
    height: 18.67px;

`,M="/goit-markup-react/assets/icons-WWKJvoXN.svg",Wf=()=>a.jsxs(a.Fragment,{children:[a.jsx(y0,{type:"button",id:"js-open-menu",children:a.jsx(w0,{width:"24",height:"12",children:a.jsx("use",{href:M+"#icon-menu"})})}),a.jsx(k0,{children:a.jsx(S0,{children:a.jsx(j0,{children:a.jsx(A0,{children:a.jsx(C0,{children:a.jsx(E0,{children:a.jsx("use",{href:M+"#icon-close-menu"})})})})})})})]}),P0=w.ul`
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
`,dl=w.li`
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
`,fl=w(To)`
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

`,_0=w.a`

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
`;const N0=()=>{const e=nt();return a.jsxs(P0,{children:[a.jsx(dl,{children:a.jsx(fl,{to:"/",state:{from:e},children:a.jsx(_0,{children:"Студія"})})}),a.jsx(dl,{children:a.jsx(fl,{to:"/portfolio",state:{from:e},children:"Портфоліо"})}),a.jsx(dl,{children:a.jsx(fl,{href:"#",children:"Контакти"})})]})},T0=w.ul`
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
`,Hu=w.li`
    display: flex;
    align-content: center;

`,$u=w.a`
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
    @media screen and(min-width: 1200px) {
        padding-top: 32px;
        padding-bottom: 32px;
    }
    @media(min-width: 768px) {
        margin-left: 48px;
        padding-bottom: 10px;
    }
`,Vu=w.svg`
    margin-right: 10px;
}
`,bf=()=>a.jsxs(T0,{children:[a.jsx(Hu,{children:a.jsxs($u,{href:"mailto:info@devstudio.com",children:[a.jsx(Vu,{width:"16",height:"12",children:a.jsx("use",{href:M+"#poshta"})}),"info@devstudio.com"]})}),a.jsx(Hu,{children:a.jsxs($u,{href:"tel:+380961111111",children:[a.jsx(Vu,{width:"12",height:"16",children:a.jsx("use",{href:M+"#smartphone"})}),"+38 096 111 11 11"]})})]}),R0=()=>{const e=nt();return a.jsx(h0,{children:a.jsx(m0,{children:a.jsxs(x0,{children:[a.jsxs(g0,{to:"/",state:{from:e},lang:"en","data-wow-offset":"100",children:[a.jsx(v0,{children:"Web"}),"Studio"]}),a.jsxs(a.Fragment,{children:[" ",a.jsx(N0,{})," ",a.jsx(bf,{})]})," ",a.jsx(Wf,{id:"js-menu-container"})]})})})},z0="/goit-markup-react/assets/%D1%81oworker-mobile-DkjrP_lB.jpg",L0="/goit-markup-react/assets/%D1%81oworker-mobile@2x-CfTHwFb7.jpg",O0="/goit-markup-react/assets/%D1%81oworker-tablet-DNCU7IaL.jpg",M0="/goit-markup-react/assets/%D1%81oworker-tablet@2x-CltOuUgI.jpg",I0="/goit-markup-react/assets/%D1%81oworker-CBK_fIvu.jpg",D0="/goit-markup-react/assets/%D1%81oworker@2x-DEOHsqO2.jpg",F0=w.section`
  padding-top: 118px;
  padding-bottom: 118px;
  background-color: var(--footer-bacground-color);
  text-align: center;
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${z0});
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
      url(${O0});
  }

  @media screen and (min-width: 1200px) {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${I0});
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
      url(${L0});
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 768px),
    screen and (min-resolution: 192dpi) and (min-width: 768px),
    screen and (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${M0});
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1200px),
    screen and (min-resolution: 192dpi) and (min-width: 1200px),
    screen and (min-resolution: 2dppx) and (min-width: 1200px) {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${D0});
  }
`,U0=w.div`
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
`,B0=w.h1`
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
`,W0=w.button`
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
`,b0=()=>a.jsx(F0,{children:a.jsxs(U0,{children:[a.jsxs(B0,{children:["Ефективні рішення для ",a.jsx("br",{}),"вашого бізнесу"]}),a.jsx(W0,{type:"button","data-modal-open":!0,children:"Замовити послугу"})]})}),H0=w.section`
    padding-top: 60px;
        padding-bottom: 60px;
    @media (min-width:1200px) {
            padding-top: 94px;
            padding-bottom: 94px;
        }
`,$0=w.div`
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
`,V0=w.h2`
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
`,Q0=w.ul`
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

`,si=w.li`
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
`,ui=w.div`
    height: 120px;
    margin-bottom: 30px;
    background-color: var(--icone-bg-color);
    display: flex;
    justify-content: center;
    align-items: center;

`,ci=w.svg`
 background - color: var(--icone-bg-color);

`,di=w.h3`
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
`,fi=w.p`
    font-size: 14px;
    line-height: 1.71;
    letter-spacing: 0.03em;
    text-decoration: none;
    color: var(--text-color-p);
    margin-top: 0;
    
`,K0=()=>a.jsx(H0,{children:a.jsxs($0,{children:[a.jsx(V0,{children:"Опис діятельності"}),a.jsxs(Q0,{children:[a.jsxs(si,{children:[a.jsx(ui,{children:a.jsx(ci,{width:"70",height:"70",children:a.jsx("use",{href:M+"#antenna"})})}),a.jsx(di,{children:"УВАГА ДО ДЕТАЛЕЙ"}),a.jsx(fi,{children:"Ідейні міркування, і навіть початок повсякденної роботи з формування позиції."})]}),a.jsxs(si,{children:[a.jsx(ui,{children:a.jsx(ci,{width:"70",height:"70",children:a.jsx("use",{href:M+"#clock"})})}),a.jsx(di,{children:"ПУНКТУАЛЬНІСТЬ"}),a.jsx(fi,{children:"Завдання організації, особливо рамки і місце навчання кадрів тягне у себе."})]}),a.jsxs(si,{children:[a.jsx(ui,{children:a.jsx(ci,{width:"70",height:"70",children:a.jsx("use",{href:M+"#diagram"})})}),a.jsx(di,{children:"ПЛАНУВАННЯ"}),a.jsx(fi,{children:"Так само консультація з широким активом значною мірою зумовлює."})]}),a.jsxs(si,{children:[a.jsx(ui,{children:a.jsx(ci,{width:"70",height:"70",children:a.jsx("use",{href:M+"#astronaut"})})}),a.jsx(di,{children:"СУЧАСНІ ТЕХНОЛОГІЇ"}),a.jsx(fi,{children:"Значимість цих проблем настільки очевидна, що реалізація планових завдань."})]})]})]})}),Y0=w.section`

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
`,G0=w.div`
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
`,X0=w.h2`
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
`,Z0=w.ul`
  display: flex;
  gap: 30px;
  align-content: center;
  justify-content: center;

`,pl=w.li`
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
`,hl=w.img`
  display: flex;
`,ml=w.p`
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
`,Qu="/goit-markup-react/assets/photo_2022-07-14_23-06-50-w-9GE9pw.jpg",Ku="/goit-markup-react/assets/photo_2022-07-14_23-08-23-ChSN16Q0.jpg",Yu="/goit-markup-react/assets/photo_2022-07-14_23-08-29-DEV7w-ry.jpg",J0=()=>a.jsx(Y0,{children:a.jsxs(G0,{children:[a.jsx(X0,{children:"Чим ми займаємося"}),a.jsxs(Z0,{children:[a.jsxs(pl,{children:[a.jsx("a",{href:Qu,children:a.jsx(hl,{src:Qu,alt:"photo",width:"370",height:"294"})}),a.jsx(ml,{children:"Десктопні додатки"})]}),a.jsxs(pl,{children:[a.jsx("a",{href:Ku,children:a.jsx(hl,{src:Ku,alt:"photo",width:"370",height:"294"})}),a.jsx(ml,{children:"Мобільні додатки"})]}),a.jsxs(pl,{children:[a.jsx("a",{href:Yu,children:a.jsx(hl,{src:Yu,alt:"photo",width:"370",height:"294"})}),a.jsx(ml,{children:"Дизайнерські рішення"})]})]})]})}),q0=w.section`
    background-color: var(--teams-bacground-color);
    align-items: center;
    padding-top: 60px;
        // padding-bottom: 60px;
            padding-bottom: 0px;

    
    @media (min-width:1200px) {
            padding-top: 94px;
            padding-bottom: 94px;
            
        }
`,ev=w.div`
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
`,tv=w.h2`
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
`,nv=w.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin: 0 0 -30px -30px;
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    flex-wrap: wrap;
  }
  padding: 0px;
  list-style: none;
  display: inline-block;
  // margin: 0 0.5rem;
  // animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
  // animation-duration: 3s; /* don't forget to set a duration! */
  // animate__fast: 800ms;
`,pi=w.li`
        @media screen and (min-width:768px) {
background-color: var(--body-background-color);
        @media screen and (min-width:1200px) {
background-color: var(--body-background-color);
width: 270px;
}
`,hi=w.div`
  display: block;
  padding: 30px 0;
  margin-top: 0;
  margin-bottom: 0;
  outline: 2px solid var(--technical-color);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 4px 4px;
`,mi=w.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.18;
  text-align: center;
  letter-spacing: 0.03em;
  color: var(--text-color);
  margin-top: 0;
  margin-bottom: 10px;
`,gi=w.p`
  font-size: 16px;
  line-height: 1.18;
  text-align: center;
  letter-spacing: 0.03em;
  color: var(--text-color);
  margin-top: 0;
  font-size: 16px;
  color: var(--text-color-p);
`,vi=w.ul`
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
`,rv="/goit-markup-react/assets/product-designer-mobile-CR9XjxZR.jpg",iv="/goit-markup-react/assets/frontend-developer-mobile-CKsiOpXf.jpg",ov="/goit-markup-react/assets/marketing-mobile-D4eyMM5O.jpg",lv="/goit-markup-react/assets/ui-mobile-CkzJuxso.jpg",av=()=>a.jsx(q0,{children:a.jsxs(ev,{class:"animate__animated animate__fadeInUp wow","data-wow-offset":"100",children:[a.jsx(tv,{children:"Наша команда"}),a.jsxs(nv,{children:[a.jsxs(pi,{children:[a.jsx("img",{src:rv,alt:"mikola-tarasov-photo"}),a.jsxs(hi,{children:[a.jsx(mi,{children:"Ігор Дем`яненко"}),a.jsx(gi,{lang:"en",children:"Product Designer"}),a.jsxs(vi,{children:[a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка інстаграм",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-instagram"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка твітер",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-tviter"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка феїсбук",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-facebook"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка линкедін",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-linkedin"})})})})]})]})]}),a.jsxs(pi,{children:[a.jsx("img",{src:iv,alt:"mikola-tarasov-photo"}),a.jsxs(hi,{children:[a.jsx(mi,{children:"Ольга Рєпіна"}),a.jsx(gi,{lang:"en",children:"Frontend Developer"}),a.jsxs(vi,{children:[a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка інстаграм",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-instagram"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка твітер",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-tviter"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка феїсбук",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-facebook"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка линкедін",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-linkedin"})})})})]})]})]}),a.jsxs(pi,{children:[a.jsx("img",{src:ov,alt:"mikola-tarasov-photo"}),a.jsxs(hi,{children:[a.jsx(mi,{children:"Микола Тарасов"}),a.jsx(gi,{lang:"en",children:"Marketing"}),a.jsxs(vi,{children:[a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка інстаграм",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-instagram"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка твітер",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-tviter"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка феїсбук",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-facebook"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка линкедін",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-linkedin"})})})})]})]})]}),a.jsxs(pi,{children:[a.jsx("img",{src:lv,alt:"mikola-tarasov-photo"}),a.jsxs(hi,{children:[a.jsx(mi,{children:"Михайло Єрмаков"}),a.jsx(gi,{lang:"en",children:"UI Designer"}),a.jsxs(vi,{children:[a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка інстаграм",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-instagram"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка твітер",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-tviter"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка феїсбук",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-facebook"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка линкедін",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-linkedin"})})})})]})]})]})]})]})}),sv=w.section`
    padding-top: 60px;
        padding-bottom: 60px;

    
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

    @media screen and (min-width:480px) {
        width: 480px;
    }
    @media screen and (min-width:768px) {
        min-width: 768px;
    }
    @media screen and (min-width:1200px) {
        min-width: 1200px;
    }
`,cv=w.h2`
    font-weight: 700;
    font-size: 36px;
    line-height: 1.16;
    text-align: center;
    letter-spacing: 0.03em;
    color: var(--text-color);
    margin: 0px;
    margin-bottom: 50px;
`,dv=w.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    // column-gap: 30px;
    gap: 28px;
    list-style: none;
    padding: 0;
    margin: 0;
`,on=w.li`
    // flex-basis: calc((100% - 30px) / 2);

        @media screen and (min-width:768px) {
            flex-basis: calc((100% - 60px) / 3);
        }

        @media screen and (min-width:1200px) {
            flex-basis: calc((100% - 150px) / 6);
        }
`,ln=w.a`
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
`,an=w.svg`
        display: flex;
        align-self: center;
        width: 170px;
        height: 92px;
`,fv=()=>a.jsx(sv,{children:a.jsxs(uv,{children:[a.jsx(cv,{children:"Постійні клієнти"}),a.jsxs(dv,{children:[a.jsx(on,{children:a.jsx(ln,{children:a.jsx(an,{"aria-label":"іконка логотип",width:"106",height:"60",children:a.jsx("use",{href:M+"#icon-Logo"})})})}),a.jsx(on,{children:a.jsx(ln,{children:a.jsx(an,{"aria-label":"іконка логотип",width:"106",height:"60",children:a.jsx("use",{href:M+"#icon-Logo-2"})})})}),a.jsx(on,{children:a.jsx(ln,{children:a.jsx(an,{"aria-label":"іконка логотип",width:"106",height:"60",children:a.jsx("use",{href:M+"#icon-Logo-3"})})})}),a.jsx(on,{children:a.jsx(ln,{children:a.jsx(an,{"aria-label":"іконка логотип",width:"106",height:"60",children:a.jsx("use",{href:M+"#icon-Logo-4"})})})}),a.jsx(on,{children:a.jsx(ln,{children:a.jsx(an,{width:"106",height:"60",children:a.jsx("use",{href:M+"#icon-Logo-5"})})})}),a.jsx(on,{children:a.jsx(ln,{children:a.jsx(an,{"aria-label":"іконка логотип",width:"106",height:"60",children:a.jsx("use",{href:M+"#icon-Logo-6"})})})})]})]})}),pv=()=>a.jsxs(a.Fragment,{children:[a.jsx(R0,{}),a.jsx(b0,{}),a.jsx(K0,{}),a.jsx(J0,{}),a.jsx(av,{}),a.jsx(fv,{})]}),hv=w.header`
    background-color: var(--body-background-color);
    border-bottom: 1px solid;
    color: #ececec;
    padding: 0;
`,mv=w.div`
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
`,gv=w(To)`
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
`,vv=w.span`
    color: var(--beckground-color);
`,xv=w.div`
    display: flex;
    align-items: center;
    padding: 0 15px;
    @media(max-width: 767px) {
        margin-top: 16px;
        justify-content: space-between;
        margin-bottom: 16px;
    }

`,yv=w.ul`
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
`,gl=w.li`
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
`,vl=w(To)`
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

`,wv=w.a`

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
`;const kv=()=>{const e=nt();return a.jsxs(yv,{children:[a.jsx(gl,{children:a.jsx(vl,{to:"/",state:{from:e},children:"Студія"})}),a.jsx(gl,{children:a.jsx(vl,{to:"/portfolio",state:{from:e},children:a.jsx(wv,{children:"Портфоліо"})})}),a.jsx(gl,{children:a.jsx(vl,{href:"#",children:"Контакти"})})]})},Sv=()=>{const e=nt();return a.jsx(hv,{children:a.jsx(mv,{children:a.jsxs(xv,{children:[a.jsxs(gv,{to:"/",state:{from:e},lang:"en","data-wow-offset":"100",children:[a.jsx(vv,{children:"Web"}),"Studio"]}),a.jsxs(a.Fragment,{children:[" ",a.jsx(kv,{})," ",a.jsx(bf,{})]})," ",a.jsx(Wf,{id:"js-menu-container"})]})})})},jv=w.section`
        padding-top: 60px;
        padding-bottom: 60px;
    @media (min-width:1200px) {
            padding-top: 94px;
            padding-bottom: 94px;
        }
`,Av=w.div`
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
`,Cv=w.h1`
    position: fixed;
    transform: scale(0);

`,Ev=w.ul`
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
`,qn=w.li`
    display: inline-block;
    margin-left: 8px;
    @media screen and(max-width: 767px){
        margin-left: 0px;
    }
`,er=w.button`
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
`,Pv=()=>a.jsxs(a.Fragment,{children:[a.jsx(Cv,{children:"Портфоліо"}),a.jsxs(Ev,{children:[a.jsxs(qn,{children:[" ",a.jsx(er,{children:"Усі"})," "]}),a.jsx(qn,{children:a.jsx(er,{children:"Веб-сайти"})}),a.jsx(qn,{children:a.jsx(er,{children:"Додатки"})}),a.jsx(qn,{children:a.jsx(er,{children:"Дизайн"})}),a.jsx(qn,{children:a.jsx(er,{children:"Маркетинг"})})]})]}),_v=w.ul`
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



`;const Gu="/goit-markup-react/assets/img-desktop-DHCT8Soc.jpg",Xu="/goit-markup-react/assets/img2-desktop-D7-ZjpYy.jpg",Zu="/goit-markup-react/assets/img3-desktop-D_3z_YZf.jpg",Ju="/goit-markup-react/assets/img4-desktop-CI8oy9vU.jpg",qu="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAgICAgJCAkKCgkNDgwODRMREBARExwUFhQWFBwrGx8bGx8bKyYuJSMlLiZENS8vNUROQj5CTl9VVV93cXecnNEBCAgICAkICQoKCQ0ODA4NExEQEBETHBQWFBYUHCsbHxsbHxsrJi4lIyUuJkQ1Ly81RE5CPkJOX1VVX3dxd5yc0f/CABEIASYBcgMBIgACEQEDEQH/xAAzAAEAAgMBAQEAAAAAAAAAAAAAAgMBBAUGBwgBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/aAAwDAQACEAMQAAAA+7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIVlkYZhbKiUrUZAAAAAAAAAAAAAAAAAABXAnDGYDUxttuNzuHb1bh9zqzIz6s5TpFyucsgAAAAAAAAAAAAAArps0TbzRdDOcZNXg+pr83fgb/QrpbErJelhGenzb16uxzt8lgJzpqN1xuzIAAAAAAAAAAAACnn9Hmlkoi23XybOdeyFiIo5PdGjvAYpL6eJxTucKimXV9589+hABjWidpjMwAAAAAAAAABVzenyS6VUyQMgnOkbGKa4bWvxtA6PIzRKFSoVqjrfRvmnu623tHQo5umynk9jDol0eZi1fST8xvdHN2Wvsb4BMAAAAAAAPPehwcS6zRN3NFpJjJnGA53R5pysSiVa9+qVUbHTpfidbuT5+iu3Vvx20K9uN745XWrrnCWv1YnGHna37tHzVL78PS8sAAAAAAABGQ5mn34nKsaZuKpEub0OccyKJXrS4Z2Ox5He8z1PZZ8p14npVWr01diUJWK/PRPo/OeP0KabvKnXF49Dnbc1/RA9TxwAAAAAAAAAEZDl6foIHH0Op5UhxNLYNW3bvide+dfmerOVdmO93S461fU+f4vB0pt6KMWRzWQhKshs6mzNf0gPU8cAAAAAAAAAAADFN+DznF93A8Db6zTh5PQ73mPN9XcnVZh0ZzGUubwe9wL1xFGYjCWuS19Tf1y5ff7vV6eP03pfCdHbn9vnznUmN9XYAAAAAAAAAAAMZEY2DU8p7XFb/ACDP1jyXH3eezqz5evU893/NWi2jQ3dctDd9T0uri5fS3Nvbn1dvYvKtqewjG3HYlZsU2l0q5kkRIAAAAAAAAAAAAFHkPbRpf4Zxf0Lx89vnfS71W3PztncuNW/ZuRr7F90qL7Zlds5kbMzMSSAAAAAAAAAAAAAAAMRmKdToYONHswOZbuDXndIqnZkhKWTEgAAAAAAAAAAAAAAAAAAYyMYkI5yMZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//xABAEAACAgECAwQGBwUGBwAAAAABAgADEQQSBSExEEFRYRMgMkBxgQYUM1BygrEiIyRCsiU0UmSRoTBjcHSAwdH/2gAIAQEAAT8A/wDIYv4QOYGB+6y8JJ9QEiBh9zl4ST2Y7OQ7/UyQYG+4y/hCSezEPKPqu5B8zLNYN5TeWcDJRTzxDqLLhaq7gQwClBkj8QPTzBml+tJgWWhmz/KMdhsrDqhdQxGQueZ7c4gfxgIPv1j7FzN+7v8AV1RbaPDvllmosHo2qdCxKnHMYPmMSvT5r2XYcdQDz2/A8olLsBgcvEypKUfbvBsxnGecHp3PPCYbuIbcJXUla7UBx5kn9YSB1lms01TIr2Bd7BVz3k90BBHLtDmBgffNR9mYIth74CD28jDVXn2BCErGdn+gzALnP7eEAJBAOdw+PLEStEAAHQYBJyf9TMgDnLNZWCUQhrAu7ZkbiPIRbNfq9rbPQqeeH5v8CByHyMo4fXUd3MtgAsTliB4mKqryA9Sy2uobnYASnii26qulF5HOSfIe93/ZNBB2K574GB9XUXWVVsyVM+BnC4JPwzGTX6snNnoU7tnN/LmeQ8xNPw+mkcl78+PWAADAHaZbfVUMu4E1HF+oqGPMy3UvYxLMSfOcJbPEtP8AP9D73f8AZN2D1A5gYHv/AOBdqaaRl2A8pqeLMciobR498svd2JLExnjNODHPE9P+b9D6hYKMkgCDWactt3wEH3W77J/hAYD6wYiBx2Z7LtVTT7Tc/AdZqOJWtyQbB/vLLGYkkxjC0ZoTOCn+1NN8W/Q9jMqjJIAluuUcqxnzlltlpy7EzErvuq9hiPKVcRU4Fi48xEsRxlWBHud32b/A9gMB7c+oHIl2prpUM2fIS7X3WZC/sjy6wkmMY0YwmNGM4IccU057huyflLdaByrGfMyyx7DliTLbK6kL2OqKOpY4EHGtO+oFNVNtnMAlV6buh2nnjz7MTEDOhypIPiJVxCxeVg3Dx6GVaqm32X5+B9yt9PRa29f2SxxK7Uboefh2D1c9nEfYr+J7DGjGMYTiIllrba0LHylHBicNe/5VlVFNK7a0Cjsu0d9uoFn121ax0rTAljLen8bpq0o7vSNlt3djHfNMlC1WNpqdpJOcqVLN5k859V4vqWzfYKvJWO1fwhSCT5ky3U6XhulH1jUkitOrsC7f/TNHra9UisqOpK5wVOB+bp2GHlzziab6R0DX6bRJb6U2WBOXML8/cSAQQQCJdw5GyaztPh3RjfQcWLyiWo+MHn4TPrcR9iv4nsMbpHi1W2nbWhYynhI63t+VZXXXUoWtAo8BCTg4GTF1BDBLU2tgklclAB4sQIrq6hlYEHoQcgw3uXK8lHPr5RbPSNsetXXPhkeRl2iqvurssewhOYTcQufEgRX1aEvaK66hyCrlyZXpdFqbFt+qNX6J9yhl2KzH+bHeRMRiACSQAOpmu+kej025af31nl7M1/FtbrSRbZhP8C8hOAHHG+Gn/MJ7myqwIIBBl3D1POo7T4QtdQ22xTEsRxyPy7M9vEfYr+JmYTGMeU6q2hjsb4iUcUpfAsGw/wC0DKQCCCOx0V1KuoZT3EZEWlVsawM+SMBdx2j4CelIYC+gbmbC7cvy8TyGIhrOdhHXu7DCygEsQAOpM130k0lG5aB6Z/Eclmu4rrdaf3tp2dyLyWGMZwU44xw7/ua/6vdWVWBDAES7h4POpsHwM33UnbYpi2o45Ht4if2K/iewy++qkEu4Eu19lh20rgePfNIGAcs2SSIMSm+2j2HI8u6U8TRsC1dp8R0iujLlWBHlBCAZXXVUCK0VQfAYjuqKWdgFHUk4mt+kmmpylA9K/j0WaziWs1rZutO3uUclEMaEwmcKOOK8PP8Ama/6vd3RXGGAIl3D++lseRhe2k7bFMSxW6GcR9iv4mW31UruscKJqOKvYSunX8xE9G7sWtYkmBO4CVKVBg7UtsrOUcqZTxIezavzE+sU7DZ6Rdg78zW/STT1gppl9I3ieSzWcQ1erObrSR3L0A7WMJMJhM4c2OI6I+Gor/qHvLojjDKCJdw7GTS3yM45qNZRXUiVkuWI6Q0XWNuvckxagBgDEWmJT5SxNgXznjiAwQzvnFM/V1/GOwmc8QmNDGhM4ZW9/FNFTVg2Ncu0Z8Dn3rEsqSwEMoImq4HS+TXyPhLeF21H2YNMR1EWia9dgq88wGDszz7OKH9wv4xDDDCciGEyy6usZZo2ouvfZQhyfAZM4LwvVaXV0617NllbZUDmZofpDfyF6g+YlGvouAw0DA+8Y7GQMOYluirbujaIrOOU+j0i245q/wCsrvRuXQ+BgMBEPZxP+7r+MQmEwmGW2pWMs2I+qttbZShyfmZpeBXWkPqWK+Q5maXQU0LtqrC/qZXRKqcSoFeko1Nq98q1WesWxW94xCIVEs09dilXUFT1Bmv+i1bhn0jbT/gbmJdRrNE+y2tl8m6H4GV3IxxnB8DM9nE/7uv4xDCZZalYy7ASzV22tspQ8+neZpeB33HfqGKjw6tNLw+jTriqsDxPeZXREoiVCJXESIkRYkBMDTPvGJiXaem9Cltaup7iJr/oohy+jfH/AC3l1Wr0T+juRl8m/wDRld6Ny6HwM4of4cfjEstSvm7ASzWWWHZSp5/MzS8D1N536higPzaaXh2n04xVWAe89SYlMSiJVFri1xa4qRVirFEEHvt+npvQpbWrqe4ia/6Ljm+kf8jTjtet0tAqZHVzYAAR+k0vAdZqCH1BNa+fNjNJwvT6YAV1jPex5kxaYtMWqLXFqi1xa4tcCQLAsAgEHvxEt09Vow6BviJqOD1NzQYj8Nev+WDTkd0FPlFpi1RaotcVIEgWBYFgEAmPfzCI1anqJZpEbujaTE9DiCqCuBIFgWBYBMTH3GRMQrDWDPRibIFgWYmJj7oxMTExMTH/AFF//8QAKBEAAgECBQIGAwAAAAAAAAAAAQIDABEEECExQDJBBRITImBhIDNx/9oACAECAQE/APn008UIu7Wo+Ji/tiNvs2rC4kYgN7bW42JwLSymQONex7UnhgveSS/0KjjSNQqKAOeWA3PGZ1Xc007HRRajfvSyOuxpZ1PULUCDseCzqu5ppmOi6Ub968jWvkbZIxDCx78GZiJnpXGdwKLZL1D+8HEfufIEivMSPwXccHEqfVbNds1iZqSFV14LIr7ipMKRqmtEEGxFLtSxs1JCo34roj9QpYFX7q1vlP8A/8QAJxEAAgECBQMEAwAAAAAAAAAAAQIAAxEEITEyQBASUSBgcYEzQWH/2gAIAQMBAT8A9/KjMchBQ8tKlPsIz4yVQqgEQ1/AjMSbk88KToDxlRm0ESgo3G8Xt/Uamj6iNh2G3OEEZEcFUZtBEoKM2zghpNa8Igv9QAmPTBRr+DwaCA0UjUyOmcAJgTz0ba3xwcN+FPvoVBnYAfQ20/HBwpBoj+E9T1eqqamVK7NcDIcFKjobqZTxanJxaAgi4MMeqqamPiGbbkISTxEqOm0x8S7AZWhJPun/2Q==",ec="/goit-markup-react/assets/img6-desktop-T8iIHNok.jpg",tc="/goit-markup-react/assets/img7-desktop-Dg4i-DKN.jpg",nc="/goit-markup-react/assets/img8-desktop-CsQ4ePrM.jpg",rc="/goit-markup-react/assets/img9-desktop-Mm3BjZR-.jpg",Nv=()=>a.jsx(a.Fragment,{children:a.jsxs(_v,{children:[a.jsx(rt,{children:a.jsxs("a",{href:Gu,alt:"ноутбук",className:"elements__decoration elements__picture",children:[a.jsxs("div",{className:"port__discript",children:[a.jsx("img",{src:Gu,alt:"ноутбук"}),a.jsx("div",{className:"port__paragraph",children:a.jsx("p",{className:"port__curd",children:"Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу."})})]}),a.jsxs(it,{children:[a.jsx(ot,{children:"Технокряк"}),a.jsx(lt,{children:"Веб-сайт"})]})]})}),a.jsx(rt,{children:a.jsxs("a",{src:Xu,alt:"баскетбол",className:"elements__decoration elements__picture",children:[a.jsxs("div",{className:"port__discript",children:[a.jsx("img",{src:Xu,alt:"баскетбол"}),a.jsx("div",{className:"port__paragraph",children:a.jsx("p",{className:"port__curd",children:"Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу."})})]}),a.jsxs(it,{children:[a.jsxs(ot,{children:["Постер ",a.jsx("span",{lang:"en",children:"New Orlean vs Golden Star"})]}),a.jsx(lt,{children:"Дизайн"})]})]})}),a.jsx(rt,{children:a.jsxs("a",{src:Zu,alt:"морська Іжа",className:"elements__decoration elements__picture",children:[a.jsxs("div",{className:"port__discript",children:[a.jsx("img",{src:Zu,alt:"морська Іжа"}),a.jsx("div",{className:"port__paragraph",children:a.jsx("p",{className:"port__curd",children:"Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу."})})]}),a.jsxs(it,{children:[a.jsxs(ot,{children:["Ресторан ",a.jsx("span",{lang:"en",children:"Seafood"})]}),a.jsx(lt,{children:"Додаток"})]})]})}),a.jsx(rt,{children:a.jsxs("a",{src:Ju,alt:"навушники",className:"elements__decoration elements__picture",children:[a.jsxs("div",{className:"port__discript",children:[a.jsx("img",{src:Ju,alt:"навушники"}),a.jsx("div",{className:"port__paragraph",children:a.jsx("p",{className:"port__curd",children:"Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу."})})]}),a.jsxs(it,{children:[a.jsxs(ot,{children:["Проєкт ",a.jsx("span",{lang:"en",children:"Prime"})]}),a.jsx(lt,{children:"Маркетинг"})]})]})}),a.jsx(rt,{children:a.jsxs("a",{src:qu,alt:"дві коробки",className:"elements__decoration elements__picture",children:[a.jsxs("div",{className:"port__discript",children:[a.jsx("img",{src:qu,alt:"дві коробки"}),a.jsx("div",{className:"port__paragraph",children:a.jsx("p",{className:"port__curd",children:"Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу."})})]}),a.jsxs(it,{children:[a.jsxs(ot,{children:["Проєкт ",a.jsx("span",{lang:"en",children:"Boxes"})]}),a.jsx(lt,{children:"Додаток"})]})]})}),a.jsx(rt,{children:a.jsxs("a",{src:ec,alt:"монітор",className:"elements__decoration elements__picture",children:[a.jsxs("div",{className:"port__discript",children:[a.jsx("img",{src:ec,alt:"монітор"}),a.jsx("div",{className:"port__paragraph",children:a.jsx("p",{className:"port__curd",children:"Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу."})})]}),a.jsxs(it,{children:[a.jsx(ot,{lang:"en",children:"Inspiration has no Borders"}),a.jsx(lt,{children:"Веб-сайт"})]})]})}),a.jsx(rt,{children:a.jsxs("a",{src:tc,alt:"журнал",className:"elements__decoration elements__picture",children:[a.jsxs("div",{className:"port__discript",children:[a.jsx("img",{src:tc,alt:"журнал"}),a.jsx("div",{className:"port__paragraph",children:a.jsx("p",{className:"port__curd",children:"Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу."})})]}),a.jsxs(it,{children:[a.jsxs(ot,{children:["Видання ",a.jsx("span",{lang:"en",children:"Limited Edition"})]}),a.jsx(lt,{children:"Дизайн"})]})]})}),a.jsx(rt,{children:a.jsxs("a",{src:nc,alt:"бірка",className:"elements__decoration elements__picture",children:[a.jsxs("div",{className:"port__discript",children:[a.jsx("img",{src:nc,alt:"бірка"}),a.jsx("div",{className:"port__paragraph",children:a.jsx("p",{className:"port__curd",children:"Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу."})})]}),a.jsxs(it,{children:[a.jsxs(ot,{children:["Проєкт ",a.jsx("span",{lang:"en",children:"LAB"})]}),a.jsx(lt,{children:"Маркетинг"})]})]})}),a.jsx(rt,{children:a.jsxs("a",{src:rc,alt:"робота",className:"elements__decoration elements__picture",children:[a.jsxs("div",{className:"port__discript",children:[a.jsx("img",{src:rc,alt:"робота"}),a.jsx("div",{className:"port__paragraph",children:a.jsx("p",{className:"port__curd",children:"Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу."})})]}),a.jsxs(it,{children:[a.jsx(ot,{lang:"en",children:"Growing Business"}),a.jsx(lt,{children:"Додаток"})]})]})})]})}),Tv=()=>a.jsxs(a.Fragment,{children:[a.jsx(Sv,{}),a.jsx(jv,{children:a.jsxs(Av,{children:[a.jsx(Pv,{}),a.jsx(Nv,{})]})}),a.jsx(P.Suspense,{fallback:a.jsx("div",{children:"Loading page..."}),children:a.jsx(tg,{})})]}),Rv=w.section`
    background: var(--footer-bacground-color);
    padding-top: 60px;
    padding-bottom: 60px;

    @media screen and (max-width:767px) {
        text-align: center;
  }
`,zv=w.div`
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
`,Lv=w.div`
    background: var(--footer-bacground-color);
    padding-top: 60px;
    padding-bottom: 60px;

    @media screen and (max-width:767px) {
        text-align: center;
  }
`,Ov=w.a`
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 26px;
    line-height: 1.19;
    letter-spacing: 0.03em;
    text-decoration: none;
    color: var(--beckground-color);
    display: inline-block;
    margin-bottom: 20px;
`,Mv=w.span`
color: var(--body-background-color);
`,Iv=w.ul`
    list-style: none;
`,xl=w.li`
    &:not(:last-child) {
    margin-bottom: 9px;
    }

`,Dv=w.a`
    font-size: 14px;
    line-height: 1.7;
    font-style: normal;
    letter-spacing: 0.03em;
    text-decoration: none;
    color: var(--body-background-color);

`,ic=w.a`
    font-size: 14px;
    line-height: 1.7;
    text-decoration: none;
    font-style: normal;
    letter-spacing: 0.03em;
    color: rgba(255, 255, 255, 0.6);

`,Fv=w.div`
    @media screen and (max-width: 768px) {
        margin-bottom: 60px;
        margin-bottom: 0;
      }
  @media screen and (min-width:1200px) {
    margin-bottom: 60px;
    margin-left: 70px;
  }
`,oc=w.h2`
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
`,Uv=w.ul`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;

    @media screen and (max-width: 768px) {
        justify-content: center;
}
`,xi=w.li`
    display: flex;
`,yi=w.a`
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
`,wi=w.svg`
    background-repeat: no-repeat;
    background-size: 20px 20px;
    background-position: left, center -10px, center, right;
    background-origin: content-box;
    fill: #ffffff;
`,Bv=w.div`
// display: flex;

        @media screen and (min-width:1200px) {
            display: flex;
    }
`,Wv=w.div`
    margin: 0;
    padding: 0;
    @media screen and (min-width:1200px) {
    margin-left: auto;
    }
`,bv=w.form`

`,Hv=w.input`
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
`,$v=w.button`
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
`,Vv=w.svg`
    top: 0;
    right: 0;
`,Qv=()=>a.jsx(Rv,{children:a.jsxs(zv,{children:[a.jsxs(Lv,{children:[a.jsxs(Ov,{href:"index.html",lang:"en",children:["Web",a.jsx(Mv,{children:"Studio"})]}),a.jsx("address",{children:a.jsxs(Iv,{children:[a.jsx(xl,{children:a.jsx(Dv,{href:"https://goo.gl/maps/CPtrU1FHBa2aNyZL9",target:"_blank",rel:"noopener noreferrer",children:"м. Київ, пр-т Лесі Українки, 26"})}),a.jsx(xl,{children:a.jsx(ic,{href:"mailto:info@devstudio.com",children:"info@devstudio.com"})}),a.jsx(xl,{children:a.jsx(ic,{href:"tel:+380961111111",children:"+38 096 111 11 11"})})]})})]}),a.jsxs(Fv,{children:[a.jsx(oc,{children:"ПРИЄДНУЙТЕСЬ"}),a.jsxs(Uv,{children:[a.jsx(xi,{children:a.jsx(yi,{children:a.jsx(wi,{"aria-label":"іконка інстаграм",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-instagram"})})})}),a.jsx(xi,{children:a.jsx(yi,{children:a.jsx(wi,{"aria-label":"іконка твітер",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-tviter"})})})}),a.jsx(xi,{children:a.jsx(yi,{children:a.jsx(wi,{"aria-label":"іконка феїсбук",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-facebook"})})})}),a.jsx(xi,{children:a.jsx(yi,{children:a.jsx(wi,{"aria-label":"іконка линкедін",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-linkedin"})})})})]})]}),a.jsxs(Wv,{children:[a.jsx(oc,{children:"Підпишіться на розсилку"}),a.jsx(bv,{children:a.jsxs(Bv,{children:[a.jsx("label",{for:"email"}),a.jsx(Hv,{type:"email",name:"mail",id:"mail",placeholder:"E-mail"}),a.jsxs($v,{type:"submit",children:["Підписатися",a.jsx(Vv,{width:"24",height:"24",children:a.jsx("use",{href:M+"#icon-icon-send"})})]})]})})]})]})}),Kv=()=>a.jsx(a.Fragment,{children:a.jsxs("body",{children:[a.jsxs(rg,{children:[a.jsx(Li,{path:Ou.HOME,element:a.jsx(pv,{})}),a.jsx(Li,{path:Ou.PORTFOLIO,element:a.jsx(Tv,{})}),a.jsx(Li,{path:"*",element:a.jsx(eg,{to:"/"})})]}),a.jsx(Qv,{})]})}),Yv=document.getElementById("root"),Gv=wf(Yv);Gv.render(a.jsx(P.StrictMode,{children:a.jsx(dg,{basename:"/goit-markup-react/",children:a.jsx(Kv,{})})}));
