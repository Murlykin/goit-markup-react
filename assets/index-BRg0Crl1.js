function Lf(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Rf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Qu={exports:{}},ro={},bu={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tr=Symbol.for("react.element"),zf=Symbol.for("react.portal"),Of=Symbol.for("react.fragment"),If=Symbol.for("react.strict_mode"),Mf=Symbol.for("react.profiler"),Ff=Symbol.for("react.provider"),Df=Symbol.for("react.context"),Af=Symbol.for("react.forward_ref"),$f=Symbol.for("react.suspense"),Uf=Symbol.for("react.memo"),Bf=Symbol.for("react.lazy"),ps=Symbol.iterator;function Wf(e){return e===null||typeof e!="object"?null:(e=ps&&e[ps]||e["@@iterator"],typeof e=="function"?e:null)}var Ku={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yu=Object.assign,Xu={};function On(e,t,n){this.props=e,this.context=t,this.refs=Xu,this.updater=n||Ku}On.prototype.isReactComponent={};On.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};On.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Gu(){}Gu.prototype=On.prototype;function ha(e,t,n){this.props=e,this.context=t,this.refs=Xu,this.updater=n||Ku}var ma=ha.prototype=new Gu;ma.constructor=ha;Yu(ma,On.prototype);ma.isPureReactComponent=!0;var hs=Array.isArray,Zu=Object.prototype.hasOwnProperty,ga={current:null},Ju={key:!0,ref:!0,__self:!0,__source:!0};function qu(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Zu.call(t,r)&&!Ju.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Tr,type:e,key:o,ref:l,props:i,_owner:ga.current}}function Hf(e,t){return{$$typeof:Tr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function va(e){return typeof e=="object"&&e!==null&&e.$$typeof===Tr}function Vf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ms=/\/+/g;function Lo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Vf(""+e.key):t.toString(36)}function mi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Tr:case zf:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Lo(l,0):r,hs(i)?(n="",e!=null&&(n=e.replace(ms,"$&/")+"/"),mi(i,t,n,"",function(c){return c})):i!=null&&(va(i)&&(i=Hf(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(ms,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",hs(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+Lo(o,a);l+=mi(o,t,n,s,i)}else if(s=Wf(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+Lo(o,a++),l+=mi(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Ar(e,t,n){if(e==null)return e;var r=[],i=0;return mi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Qf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},gi={transition:null},bf={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:gi,ReactCurrentOwner:ga};I.Children={map:Ar,forEach:function(e,t,n){Ar(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ar(e,function(){t++}),t},toArray:function(e){return Ar(e,function(t){return t})||[]},only:function(e){if(!va(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=On;I.Fragment=Of;I.Profiler=Mf;I.PureComponent=ha;I.StrictMode=If;I.Suspense=$f;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bf;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Yu({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=ga.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Zu.call(t,s)&&!Ju.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Tr,type:e.type,key:i,ref:o,props:r,_owner:l}};I.createContext=function(e){return e={$$typeof:Df,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ff,_context:e},e.Consumer=e};I.createElement=qu;I.createFactory=function(e){var t=qu.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:Af,render:e}};I.isValidElement=va;I.lazy=function(e){return{$$typeof:Bf,_payload:{_status:-1,_result:e},_init:Qf}};I.memo=function(e,t){return{$$typeof:Uf,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=gi.transition;gi.transition={};try{e()}finally{gi.transition=t}};I.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};I.useCallback=function(e,t){return xe.current.useCallback(e,t)};I.useContext=function(e){return xe.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};I.useEffect=function(e,t){return xe.current.useEffect(e,t)};I.useId=function(){return xe.current.useId()};I.useImperativeHandle=function(e,t,n){return xe.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return xe.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return xe.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return xe.current.useMemo(e,t)};I.useReducer=function(e,t,n){return xe.current.useReducer(e,t,n)};I.useRef=function(e){return xe.current.useRef(e)};I.useState=function(e){return xe.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return xe.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return xe.current.useTransition()};I.version="18.2.0";bu.exports=I;var _=bu.exports;const ec=Rf(_),fl=Lf({__proto__:null,default:ec},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kf=_,Yf=Symbol.for("react.element"),Xf=Symbol.for("react.fragment"),Gf=Object.prototype.hasOwnProperty,Zf=Kf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jf={key:!0,ref:!0,__self:!0,__source:!0};function tc(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Gf.call(t,r)&&!Jf.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Yf,type:e,key:o,ref:l,props:i,_owner:Zf.current}}ro.Fragment=Xf;ro.jsx=tc;ro.jsxs=tc;Qu.exports=ro;var u=Qu.exports,pl={},nc={exports:{}},Oe={},rc={exports:{}},ic={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,z){var O=T.length;T.push(z);e:for(;0<O;){var X=O-1>>>1,ne=T[X];if(0<i(ne,z))T[X]=z,T[O]=ne,O=X;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var z=T[0],O=T.pop();if(O!==z){T[0]=O;e:for(var X=0,ne=T.length,Fr=ne>>>1;X<Fr;){var Ft=2*(X+1)-1,To=T[Ft],Dt=Ft+1,Dr=T[Dt];if(0>i(To,O))Dt<ne&&0>i(Dr,To)?(T[X]=Dr,T[Dt]=O,X=Dt):(T[X]=To,T[Ft]=O,X=Ft);else if(Dt<ne&&0>i(Dr,O))T[X]=Dr,T[Dt]=O,X=Dt;else break e}}return z}function i(T,z){var O=T.sortIndex-z.sortIndex;return O!==0?O:T.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],c=[],h=1,m=null,g=3,w=!1,x=!1,v=!1,C=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(T){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=T)r(c),z.sortIndex=z.expirationTime,t(s,z);else break;z=n(c)}}function y(T){if(v=!1,p(T),!x)if(n(s)!==null)x=!0,_o(E);else{var z=n(c);z!==null&&No(y,z.startTime-T)}}function E(T,z){x=!1,v&&(v=!1,f(L),L=-1),w=!0;var O=g;try{for(p(z),m=n(s);m!==null&&(!(m.expirationTime>z)||T&&!_e());){var X=m.callback;if(typeof X=="function"){m.callback=null,g=m.priorityLevel;var ne=X(m.expirationTime<=z);z=e.unstable_now(),typeof ne=="function"?m.callback=ne:m===n(s)&&r(s),p(z)}else r(s);m=n(s)}if(m!==null)var Fr=!0;else{var Ft=n(c);Ft!==null&&No(y,Ft.startTime-z),Fr=!1}return Fr}finally{m=null,g=O,w=!1}}var P=!1,j=null,L=-1,U=5,R=-1;function _e(){return!(e.unstable_now()-R<U)}function Dn(){if(j!==null){var T=e.unstable_now();R=T;var z=!0;try{z=j(!0,T)}finally{z?An():(P=!1,j=null)}}else P=!1}var An;if(typeof d=="function")An=function(){d(Dn)};else if(typeof MessageChannel<"u"){var fs=new MessageChannel,Tf=fs.port2;fs.port1.onmessage=Dn,An=function(){Tf.postMessage(null)}}else An=function(){C(Dn,0)};function _o(T){j=T,P||(P=!0,An())}function No(T,z){L=C(function(){T(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){x||w||(x=!0,_o(E))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(T){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var O=g;g=z;try{return T()}finally{g=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,z){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var O=g;g=T;try{return z()}finally{g=O}},e.unstable_scheduleCallback=function(T,z,O){var X=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?X+O:X):O=X,T){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=O+ne,T={id:h++,callback:z,priorityLevel:T,startTime:O,expirationTime:ne,sortIndex:-1},O>X?(T.sortIndex=O,t(c,T),n(s)===null&&T===n(c)&&(v?(f(L),L=-1):v=!0,No(y,O-X))):(T.sortIndex=ne,t(s,T),x||w||(x=!0,_o(E))),T},e.unstable_shouldYield=_e,e.unstable_wrapCallback=function(T){var z=g;return function(){var O=g;g=z;try{return T.apply(this,arguments)}finally{g=O}}}})(ic);rc.exports=ic;var qf=rc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oc=_,ze=qf;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lc=new Set,ar={};function Gt(e,t){jn(e,t),jn(e+"Capture",t)}function jn(e,t){for(ar[e]=t,e=0;e<t.length;e++)lc.add(t[e])}var at=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hl=Object.prototype.hasOwnProperty,ep=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gs={},vs={};function tp(e){return hl.call(vs,e)?!0:hl.call(gs,e)?!1:ep.test(e)?vs[e]=!0:(gs[e]=!0,!1)}function np(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function rp(e,t,n,r){if(t===null||typeof t>"u"||np(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function we(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new we(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new we(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new we(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new we(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new we(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new we(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new we(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new we(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new we(e,5,!1,e.toLowerCase(),null,!1,!1)});var ya=/[\-:]([a-z])/g;function xa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ya,xa);se[t]=new we(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ya,xa);se[t]=new we(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ya,xa);se[t]=new we(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new we(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new we(e,1,!1,e.toLowerCase(),null,!0,!0)});function wa(e,t,n,r){var i=se.hasOwnProperty(t)?se[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(rp(t,n,i,r)&&(n=null),r||i===null?tp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var dt=oc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$r=Symbol.for("react.element"),on=Symbol.for("react.portal"),ln=Symbol.for("react.fragment"),ka=Symbol.for("react.strict_mode"),ml=Symbol.for("react.profiler"),ac=Symbol.for("react.provider"),sc=Symbol.for("react.context"),Sa=Symbol.for("react.forward_ref"),gl=Symbol.for("react.suspense"),vl=Symbol.for("react.suspense_list"),Ca=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),uc=Symbol.for("react.offscreen"),ys=Symbol.iterator;function $n(e){return e===null||typeof e!="object"?null:(e=ys&&e[ys]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,Ro;function Yn(e){if(Ro===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ro=t&&t[1]||""}return`
`+Ro+e}var zo=!1;function Oo(e,t){if(!e||zo)return"";zo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{zo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Yn(e):""}function ip(e){switch(e.tag){case 5:return Yn(e.type);case 16:return Yn("Lazy");case 13:return Yn("Suspense");case 19:return Yn("SuspenseList");case 0:case 2:case 15:return e=Oo(e.type,!1),e;case 11:return e=Oo(e.type.render,!1),e;case 1:return e=Oo(e.type,!0),e;default:return""}}function yl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ln:return"Fragment";case on:return"Portal";case ml:return"Profiler";case ka:return"StrictMode";case gl:return"Suspense";case vl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case sc:return(e.displayName||"Context")+".Consumer";case ac:return(e._context.displayName||"Context")+".Provider";case Sa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ca:return t=e.displayName||null,t!==null?t:yl(e.type)||"Memo";case ht:t=e._payload,e=e._init;try{return yl(e(t))}catch{}}return null}function op(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yl(t);case 8:return t===ka?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Lt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function lp(e){var t=cc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ur(e){e._valueTracker||(e._valueTracker=lp(e))}function dc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=cc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Li(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function xl(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function xs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Lt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function fc(e,t){t=t.checked,t!=null&&wa(e,"checked",t,!1)}function wl(e,t){fc(e,t);var n=Lt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?kl(e,t.type,n):t.hasOwnProperty("defaultValue")&&kl(e,t.type,Lt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ws(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function kl(e,t,n){(t!=="number"||Li(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Xn=Array.isArray;function vn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Lt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Sl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ks(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Xn(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Lt(n)}}function pc(e,t){var n=Lt(t.value),r=Lt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ss(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function hc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?hc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Br,mc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Br=Br||document.createElement("div"),Br.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Br.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function sr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Jn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ap=["Webkit","ms","Moz","O"];Object.keys(Jn).forEach(function(e){ap.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Jn[t]=Jn[e]})});function gc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Jn.hasOwnProperty(e)&&Jn[e]?(""+t).trim():t+"px"}function vc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=gc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var sp=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jl(e,t){if(t){if(sp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function El(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pl=null;function ja(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _l=null,yn=null,xn=null;function Cs(e){if(e=zr(e)){if(typeof _l!="function")throw Error(S(280));var t=e.stateNode;t&&(t=so(t),_l(e.stateNode,e.type,t))}}function yc(e){yn?xn?xn.push(e):xn=[e]:yn=e}function xc(){if(yn){var e=yn,t=xn;if(xn=yn=null,Cs(e),t)for(e=0;e<t.length;e++)Cs(t[e])}}function wc(e,t){return e(t)}function kc(){}var Io=!1;function Sc(e,t,n){if(Io)return e(t,n);Io=!0;try{return wc(e,t,n)}finally{Io=!1,(yn!==null||xn!==null)&&(kc(),xc())}}function ur(e,t){var n=e.stateNode;if(n===null)return null;var r=so(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Nl=!1;if(at)try{var Un={};Object.defineProperty(Un,"passive",{get:function(){Nl=!0}}),window.addEventListener("test",Un,Un),window.removeEventListener("test",Un,Un)}catch{Nl=!1}function up(e,t,n,r,i,o,l,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var qn=!1,Ri=null,zi=!1,Tl=null,cp={onError:function(e){qn=!0,Ri=e}};function dp(e,t,n,r,i,o,l,a,s){qn=!1,Ri=null,up.apply(cp,arguments)}function fp(e,t,n,r,i,o,l,a,s){if(dp.apply(this,arguments),qn){if(qn){var c=Ri;qn=!1,Ri=null}else throw Error(S(198));zi||(zi=!0,Tl=c)}}function Zt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Cc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function js(e){if(Zt(e)!==e)throw Error(S(188))}function pp(e){var t=e.alternate;if(!t){if(t=Zt(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return js(i),e;if(o===r)return js(i),t;o=o.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function jc(e){return e=pp(e),e!==null?Ec(e):null}function Ec(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ec(e);if(t!==null)return t;e=e.sibling}return null}var Pc=ze.unstable_scheduleCallback,Es=ze.unstable_cancelCallback,hp=ze.unstable_shouldYield,mp=ze.unstable_requestPaint,G=ze.unstable_now,gp=ze.unstable_getCurrentPriorityLevel,Ea=ze.unstable_ImmediatePriority,_c=ze.unstable_UserBlockingPriority,Oi=ze.unstable_NormalPriority,vp=ze.unstable_LowPriority,Nc=ze.unstable_IdlePriority,io=null,qe=null;function yp(e){if(qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(io,e,void 0,(e.current.flags&128)===128)}catch{}}var Qe=Math.clz32?Math.clz32:kp,xp=Math.log,wp=Math.LN2;function kp(e){return e>>>=0,e===0?32:31-(xp(e)/wp|0)|0}var Wr=64,Hr=4194304;function Gn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ii(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=Gn(a):(o&=l,o!==0&&(r=Gn(o)))}else l=n&~i,l!==0?r=Gn(l):o!==0&&(r=Gn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Qe(t),i=1<<n,r|=e[n],t&=~i;return r}function Sp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Qe(o),a=1<<l,s=i[l];s===-1?(!(a&n)||a&r)&&(i[l]=Sp(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function Ll(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Tc(){var e=Wr;return Wr<<=1,!(Wr&4194240)&&(Wr=64),e}function Mo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Lr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Qe(t),e[t]=n}function jp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Qe(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Pa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var $=0;function Lc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Rc,_a,zc,Oc,Ic,Rl=!1,Vr=[],kt=null,St=null,Ct=null,cr=new Map,dr=new Map,gt=[],Ep="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ps(e,t){switch(e){case"focusin":case"focusout":kt=null;break;case"dragenter":case"dragleave":St=null;break;case"mouseover":case"mouseout":Ct=null;break;case"pointerover":case"pointerout":cr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":dr.delete(t.pointerId)}}function Bn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=zr(t),t!==null&&_a(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Pp(e,t,n,r,i){switch(t){case"focusin":return kt=Bn(kt,e,t,n,r,i),!0;case"dragenter":return St=Bn(St,e,t,n,r,i),!0;case"mouseover":return Ct=Bn(Ct,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return cr.set(o,Bn(cr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,dr.set(o,Bn(dr.get(o)||null,e,t,n,r,i)),!0}return!1}function Mc(e){var t=Ut(e.target);if(t!==null){var n=Zt(t);if(n!==null){if(t=n.tag,t===13){if(t=Cc(n),t!==null){e.blockedOn=t,Ic(e.priority,function(){zc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Pl=r,n.target.dispatchEvent(r),Pl=null}else return t=zr(n),t!==null&&_a(t),e.blockedOn=n,!1;t.shift()}return!0}function _s(e,t,n){vi(e)&&n.delete(t)}function _p(){Rl=!1,kt!==null&&vi(kt)&&(kt=null),St!==null&&vi(St)&&(St=null),Ct!==null&&vi(Ct)&&(Ct=null),cr.forEach(_s),dr.forEach(_s)}function Wn(e,t){e.blockedOn===t&&(e.blockedOn=null,Rl||(Rl=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,_p)))}function fr(e){function t(i){return Wn(i,e)}if(0<Vr.length){Wn(Vr[0],e);for(var n=1;n<Vr.length;n++){var r=Vr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(kt!==null&&Wn(kt,e),St!==null&&Wn(St,e),Ct!==null&&Wn(Ct,e),cr.forEach(t),dr.forEach(t),n=0;n<gt.length;n++)r=gt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<gt.length&&(n=gt[0],n.blockedOn===null);)Mc(n),n.blockedOn===null&&gt.shift()}var wn=dt.ReactCurrentBatchConfig,Mi=!0;function Np(e,t,n,r){var i=$,o=wn.transition;wn.transition=null;try{$=1,Na(e,t,n,r)}finally{$=i,wn.transition=o}}function Tp(e,t,n,r){var i=$,o=wn.transition;wn.transition=null;try{$=4,Na(e,t,n,r)}finally{$=i,wn.transition=o}}function Na(e,t,n,r){if(Mi){var i=zl(e,t,n,r);if(i===null)Qo(e,t,r,Fi,n),Ps(e,r);else if(Pp(i,e,t,n,r))r.stopPropagation();else if(Ps(e,r),t&4&&-1<Ep.indexOf(e)){for(;i!==null;){var o=zr(i);if(o!==null&&Rc(o),o=zl(e,t,n,r),o===null&&Qo(e,t,r,Fi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Qo(e,t,r,null,n)}}var Fi=null;function zl(e,t,n,r){if(Fi=null,e=ja(r),e=Ut(e),e!==null)if(t=Zt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Cc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fi=e,null}function Fc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gp()){case Ea:return 1;case _c:return 4;case Oi:case vp:return 16;case Nc:return 536870912;default:return 16}default:return 16}}var yt=null,Ta=null,yi=null;function Dc(){if(yi)return yi;var e,t=Ta,n=t.length,r,i="value"in yt?yt.value:yt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return yi=i.slice(e,1<r?1-r:void 0)}function xi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Qr(){return!0}function Ns(){return!1}function Ie(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Qr:Ns,this.isPropagationStopped=Ns,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qr)},persist:function(){},isPersistent:Qr}),t}var In={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},La=Ie(In),Rr=K({},In,{view:0,detail:0}),Lp=Ie(Rr),Fo,Do,Hn,oo=K({},Rr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ra,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hn&&(Hn&&e.type==="mousemove"?(Fo=e.screenX-Hn.screenX,Do=e.screenY-Hn.screenY):Do=Fo=0,Hn=e),Fo)},movementY:function(e){return"movementY"in e?e.movementY:Do}}),Ts=Ie(oo),Rp=K({},oo,{dataTransfer:0}),zp=Ie(Rp),Op=K({},Rr,{relatedTarget:0}),Ao=Ie(Op),Ip=K({},In,{animationName:0,elapsedTime:0,pseudoElement:0}),Mp=Ie(Ip),Fp=K({},In,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dp=Ie(Fp),Ap=K({},In,{data:0}),Ls=Ie(Ap),$p={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Up={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Bp[e])?!!t[e]:!1}function Ra(){return Wp}var Hp=K({},Rr,{key:function(e){if(e.key){var t=$p[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Up[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ra,charCode:function(e){return e.type==="keypress"?xi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vp=Ie(Hp),Qp=K({},oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rs=Ie(Qp),bp=K({},Rr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ra}),Kp=Ie(bp),Yp=K({},In,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xp=Ie(Yp),Gp=K({},oo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zp=Ie(Gp),Jp=[9,13,27,32],za=at&&"CompositionEvent"in window,er=null;at&&"documentMode"in document&&(er=document.documentMode);var qp=at&&"TextEvent"in window&&!er,Ac=at&&(!za||er&&8<er&&11>=er),zs=" ",Os=!1;function $c(e,t){switch(e){case"keyup":return Jp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var an=!1;function eh(e,t){switch(e){case"compositionend":return Uc(t);case"keypress":return t.which!==32?null:(Os=!0,zs);case"textInput":return e=t.data,e===zs&&Os?null:e;default:return null}}function th(e,t){if(an)return e==="compositionend"||!za&&$c(e,t)?(e=Dc(),yi=Ta=yt=null,an=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ac&&t.locale!=="ko"?null:t.data;default:return null}}var nh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Is(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!nh[e.type]:t==="textarea"}function Bc(e,t,n,r){yc(r),t=Di(t,"onChange"),0<t.length&&(n=new La("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var tr=null,pr=null;function rh(e){Jc(e,0)}function lo(e){var t=cn(e);if(dc(t))return e}function ih(e,t){if(e==="change")return t}var Wc=!1;if(at){var $o;if(at){var Uo="oninput"in document;if(!Uo){var Ms=document.createElement("div");Ms.setAttribute("oninput","return;"),Uo=typeof Ms.oninput=="function"}$o=Uo}else $o=!1;Wc=$o&&(!document.documentMode||9<document.documentMode)}function Fs(){tr&&(tr.detachEvent("onpropertychange",Hc),pr=tr=null)}function Hc(e){if(e.propertyName==="value"&&lo(pr)){var t=[];Bc(t,pr,e,ja(e)),Sc(rh,t)}}function oh(e,t,n){e==="focusin"?(Fs(),tr=t,pr=n,tr.attachEvent("onpropertychange",Hc)):e==="focusout"&&Fs()}function lh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return lo(pr)}function ah(e,t){if(e==="click")return lo(t)}function sh(e,t){if(e==="input"||e==="change")return lo(t)}function uh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ke=typeof Object.is=="function"?Object.is:uh;function hr(e,t){if(Ke(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!hl.call(t,i)||!Ke(e[i],t[i]))return!1}return!0}function Ds(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function As(e,t){var n=Ds(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ds(n)}}function Vc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qc(){for(var e=window,t=Li();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Li(e.document)}return t}function Oa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ch(e){var t=Qc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Vc(n.ownerDocument.documentElement,n)){if(r!==null&&Oa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=As(n,o);var l=As(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var dh=at&&"documentMode"in document&&11>=document.documentMode,sn=null,Ol=null,nr=null,Il=!1;function $s(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Il||sn==null||sn!==Li(r)||(r=sn,"selectionStart"in r&&Oa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),nr&&hr(nr,r)||(nr=r,r=Di(Ol,"onSelect"),0<r.length&&(t=new La("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=sn)))}function br(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var un={animationend:br("Animation","AnimationEnd"),animationiteration:br("Animation","AnimationIteration"),animationstart:br("Animation","AnimationStart"),transitionend:br("Transition","TransitionEnd")},Bo={},bc={};at&&(bc=document.createElement("div").style,"AnimationEvent"in window||(delete un.animationend.animation,delete un.animationiteration.animation,delete un.animationstart.animation),"TransitionEvent"in window||delete un.transitionend.transition);function ao(e){if(Bo[e])return Bo[e];if(!un[e])return e;var t=un[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in bc)return Bo[e]=t[n];return e}var Kc=ao("animationend"),Yc=ao("animationiteration"),Xc=ao("animationstart"),Gc=ao("transitionend"),Zc=new Map,Us="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zt(e,t){Zc.set(e,t),Gt(t,[e])}for(var Wo=0;Wo<Us.length;Wo++){var Ho=Us[Wo],fh=Ho.toLowerCase(),ph=Ho[0].toUpperCase()+Ho.slice(1);zt(fh,"on"+ph)}zt(Kc,"onAnimationEnd");zt(Yc,"onAnimationIteration");zt(Xc,"onAnimationStart");zt("dblclick","onDoubleClick");zt("focusin","onFocus");zt("focusout","onBlur");zt(Gc,"onTransitionEnd");jn("onMouseEnter",["mouseout","mouseover"]);jn("onMouseLeave",["mouseout","mouseover"]);jn("onPointerEnter",["pointerout","pointerover"]);jn("onPointerLeave",["pointerout","pointerover"]);Gt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zn));function Bs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,fp(r,t,void 0,e),e.currentTarget=null}function Jc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;Bs(i,a,c),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,c=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;Bs(i,a,c),o=s}}}if(zi)throw e=Tl,zi=!1,Tl=null,e}function W(e,t){var n=t[$l];n===void 0&&(n=t[$l]=new Set);var r=e+"__bubble";n.has(r)||(qc(t,e,2,!1),n.add(r))}function Vo(e,t,n){var r=0;t&&(r|=4),qc(n,e,r,t)}var Kr="_reactListening"+Math.random().toString(36).slice(2);function mr(e){if(!e[Kr]){e[Kr]=!0,lc.forEach(function(n){n!=="selectionchange"&&(hh.has(n)||Vo(n,!1,e),Vo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Kr]||(t[Kr]=!0,Vo("selectionchange",!1,t))}}function qc(e,t,n,r){switch(Fc(t)){case 1:var i=Np;break;case 4:i=Tp;break;default:i=Na}n=i.bind(null,t,n,e),i=void 0,!Nl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Qo(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=Ut(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}Sc(function(){var c=o,h=ja(n),m=[];e:{var g=Zc.get(e);if(g!==void 0){var w=La,x=e;switch(e){case"keypress":if(xi(n)===0)break e;case"keydown":case"keyup":w=Vp;break;case"focusin":x="focus",w=Ao;break;case"focusout":x="blur",w=Ao;break;case"beforeblur":case"afterblur":w=Ao;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Ts;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=zp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Kp;break;case Kc:case Yc:case Xc:w=Mp;break;case Gc:w=Xp;break;case"scroll":w=Lp;break;case"wheel":w=Zp;break;case"copy":case"cut":case"paste":w=Dp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Rs}var v=(t&4)!==0,C=!v&&e==="scroll",f=v?g!==null?g+"Capture":null:g;v=[];for(var d=c,p;d!==null;){p=d;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,f!==null&&(y=ur(d,f),y!=null&&v.push(gr(d,y,p)))),C)break;d=d.return}0<v.length&&(g=new w(g,x,null,n,h),m.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",g&&n!==Pl&&(x=n.relatedTarget||n.fromElement)&&(Ut(x)||x[st]))break e;if((w||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,w?(x=n.relatedTarget||n.toElement,w=c,x=x?Ut(x):null,x!==null&&(C=Zt(x),x!==C||x.tag!==5&&x.tag!==6)&&(x=null)):(w=null,x=c),w!==x)){if(v=Ts,y="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(v=Rs,y="onPointerLeave",f="onPointerEnter",d="pointer"),C=w==null?g:cn(w),p=x==null?g:cn(x),g=new v(y,d+"leave",w,n,h),g.target=C,g.relatedTarget=p,y=null,Ut(h)===c&&(v=new v(f,d+"enter",x,n,h),v.target=p,v.relatedTarget=C,y=v),C=y,w&&x)t:{for(v=w,f=x,d=0,p=v;p;p=en(p))d++;for(p=0,y=f;y;y=en(y))p++;for(;0<d-p;)v=en(v),d--;for(;0<p-d;)f=en(f),p--;for(;d--;){if(v===f||f!==null&&v===f.alternate)break t;v=en(v),f=en(f)}v=null}else v=null;w!==null&&Ws(m,g,w,v,!1),x!==null&&C!==null&&Ws(m,C,x,v,!0)}}e:{if(g=c?cn(c):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var E=ih;else if(Is(g))if(Wc)E=sh;else{E=lh;var P=oh}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=ah);if(E&&(E=E(e,c))){Bc(m,E,n,h);break e}P&&P(e,g,c),e==="focusout"&&(P=g._wrapperState)&&P.controlled&&g.type==="number"&&kl(g,"number",g.value)}switch(P=c?cn(c):window,e){case"focusin":(Is(P)||P.contentEditable==="true")&&(sn=P,Ol=c,nr=null);break;case"focusout":nr=Ol=sn=null;break;case"mousedown":Il=!0;break;case"contextmenu":case"mouseup":case"dragend":Il=!1,$s(m,n,h);break;case"selectionchange":if(dh)break;case"keydown":case"keyup":$s(m,n,h)}var j;if(za)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else an?$c(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Ac&&n.locale!=="ko"&&(an||L!=="onCompositionStart"?L==="onCompositionEnd"&&an&&(j=Dc()):(yt=h,Ta="value"in yt?yt.value:yt.textContent,an=!0)),P=Di(c,L),0<P.length&&(L=new Ls(L,e,null,n,h),m.push({event:L,listeners:P}),j?L.data=j:(j=Uc(n),j!==null&&(L.data=j)))),(j=qp?eh(e,n):th(e,n))&&(c=Di(c,"onBeforeInput"),0<c.length&&(h=new Ls("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=j))}Jc(m,t)})}function gr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Di(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ur(e,n),o!=null&&r.unshift(gr(e,o,i)),o=ur(e,t),o!=null&&r.push(gr(e,o,i))),e=e.return}return r}function en(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ws(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,i?(s=ur(n,o),s!=null&&l.unshift(gr(n,s,a))):i||(s=ur(n,o),s!=null&&l.push(gr(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var mh=/\r\n?/g,gh=/\u0000|\uFFFD/g;function Hs(e){return(typeof e=="string"?e:""+e).replace(mh,`
`).replace(gh,"")}function Yr(e,t,n){if(t=Hs(t),Hs(e)!==t&&n)throw Error(S(425))}function Ai(){}var Ml=null,Fl=null;function Dl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Al=typeof setTimeout=="function"?setTimeout:void 0,vh=typeof clearTimeout=="function"?clearTimeout:void 0,Vs=typeof Promise=="function"?Promise:void 0,yh=typeof queueMicrotask=="function"?queueMicrotask:typeof Vs<"u"?function(e){return Vs.resolve(null).then(e).catch(xh)}:Al;function xh(e){setTimeout(function(){throw e})}function bo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),fr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);fr(t)}function jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Qs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Mn=Math.random().toString(36).slice(2),Je="__reactFiber$"+Mn,vr="__reactProps$"+Mn,st="__reactContainer$"+Mn,$l="__reactEvents$"+Mn,wh="__reactListeners$"+Mn,kh="__reactHandles$"+Mn;function Ut(e){var t=e[Je];if(t)return t;for(var n=e.parentNode;n;){if(t=n[st]||n[Je]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qs(e);e!==null;){if(n=e[Je])return n;e=Qs(e)}return t}e=n,n=e.parentNode}return null}function zr(e){return e=e[Je]||e[st],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function cn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function so(e){return e[vr]||null}var Ul=[],dn=-1;function Ot(e){return{current:e}}function H(e){0>dn||(e.current=Ul[dn],Ul[dn]=null,dn--)}function B(e,t){dn++,Ul[dn]=e.current,e.current=t}var Rt={},ge=Ot(Rt),Ce=Ot(!1),Qt=Rt;function En(e,t){var n=e.type.contextTypes;if(!n)return Rt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function je(e){return e=e.childContextTypes,e!=null}function $i(){H(Ce),H(ge)}function bs(e,t,n){if(ge.current!==Rt)throw Error(S(168));B(ge,t),B(Ce,n)}function ed(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,op(e)||"Unknown",i));return K({},n,r)}function Ui(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rt,Qt=ge.current,B(ge,e),B(Ce,Ce.current),!0}function Ks(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=ed(e,t,Qt),r.__reactInternalMemoizedMergedChildContext=e,H(Ce),H(ge),B(ge,e)):H(Ce),B(Ce,n)}var rt=null,uo=!1,Ko=!1;function td(e){rt===null?rt=[e]:rt.push(e)}function Sh(e){uo=!0,td(e)}function It(){if(!Ko&&rt!==null){Ko=!0;var e=0,t=$;try{var n=rt;for($=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}rt=null,uo=!1}catch(i){throw rt!==null&&(rt=rt.slice(e+1)),Pc(Ea,It),i}finally{$=t,Ko=!1}}return null}var fn=[],pn=0,Bi=null,Wi=0,Me=[],Fe=0,bt=null,it=1,ot="";function At(e,t){fn[pn++]=Wi,fn[pn++]=Bi,Bi=e,Wi=t}function nd(e,t,n){Me[Fe++]=it,Me[Fe++]=ot,Me[Fe++]=bt,bt=e;var r=it;e=ot;var i=32-Qe(r)-1;r&=~(1<<i),n+=1;var o=32-Qe(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,it=1<<32-Qe(t)+i|n<<i|r,ot=o+e}else it=1<<o|n<<i|r,ot=e}function Ia(e){e.return!==null&&(At(e,1),nd(e,1,0))}function Ma(e){for(;e===Bi;)Bi=fn[--pn],fn[pn]=null,Wi=fn[--pn],fn[pn]=null;for(;e===bt;)bt=Me[--Fe],Me[Fe]=null,ot=Me[--Fe],Me[Fe]=null,it=Me[--Fe],Me[Fe]=null}var Le=null,Te=null,V=!1,Ve=null;function rd(e,t){var n=De(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ys(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Le=e,Te=jt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Le=e,Te=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=bt!==null?{id:it,overflow:ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=De(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Le=e,Te=null,!0):!1;default:return!1}}function Bl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Wl(e){if(V){var t=Te;if(t){var n=t;if(!Ys(e,t)){if(Bl(e))throw Error(S(418));t=jt(n.nextSibling);var r=Le;t&&Ys(e,t)?rd(r,n):(e.flags=e.flags&-4097|2,V=!1,Le=e)}}else{if(Bl(e))throw Error(S(418));e.flags=e.flags&-4097|2,V=!1,Le=e}}}function Xs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Le=e}function Xr(e){if(e!==Le)return!1;if(!V)return Xs(e),V=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Dl(e.type,e.memoizedProps)),t&&(t=Te)){if(Bl(e))throw id(),Error(S(418));for(;t;)rd(e,t),t=jt(t.nextSibling)}if(Xs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Te=jt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Te=null}}else Te=Le?jt(e.stateNode.nextSibling):null;return!0}function id(){for(var e=Te;e;)e=jt(e.nextSibling)}function Pn(){Te=Le=null,V=!1}function Fa(e){Ve===null?Ve=[e]:Ve.push(e)}var Ch=dt.ReactCurrentBatchConfig;function We(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Hi=Ot(null),Vi=null,hn=null,Da=null;function Aa(){Da=hn=Vi=null}function $a(e){var t=Hi.current;H(Hi),e._currentValue=t}function Hl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function kn(e,t){Vi=e,Da=hn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function $e(e){var t=e._currentValue;if(Da!==e)if(e={context:e,memoizedValue:t,next:null},hn===null){if(Vi===null)throw Error(S(308));hn=e,Vi.dependencies={lanes:0,firstContext:e}}else hn=hn.next=e;return t}var Bt=null;function Ua(e){Bt===null?Bt=[e]:Bt.push(e)}function od(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ua(t)):(n.next=i.next,i.next=n),t.interleaved=n,ut(e,r)}function ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var mt=!1;function Ba(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ld(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Et(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ut(e,n)}return i=r.interleaved,i===null?(t.next=t,Ua(r)):(t.next=i.next,i.next=t),r.interleaved=t,ut(e,n)}function wi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Pa(e,n)}}function Gs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Qi(e,t,n,r){var i=e.updateQueue;mt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,c=s.next;s.next=null,l===null?o=c:l.next=c,l=s;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==l&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=s))}if(o!==null){var m=i.baseState;l=0,h=c=s=null,a=o;do{var g=a.lane,w=a.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,v=a;switch(g=t,w=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){m=x.call(w,m,g);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,g=typeof x=="function"?x.call(w,m,g):x,g==null)break e;m=K({},m,g);break e;case 2:mt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else w={eventTime:w,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=w,s=m):h=h.next=w,l|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(s=m),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Yt|=l,e.lanes=l,e.memoizedState=m}}function Zs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var ad=new oc.Component().refs;function Vl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var co={isMounted:function(e){return(e=e._reactInternals)?Zt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ye(),i=_t(e),o=lt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Et(e,o,i),t!==null&&(be(t,e,i,r),wi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ye(),i=_t(e),o=lt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Et(e,o,i),t!==null&&(be(t,e,i,r),wi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ye(),r=_t(e),i=lt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Et(e,i,r),t!==null&&(be(t,e,r,n),wi(t,e,r))}};function Js(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!hr(n,r)||!hr(i,o):!0}function sd(e,t,n){var r=!1,i=Rt,o=t.contextType;return typeof o=="object"&&o!==null?o=$e(o):(i=je(t)?Qt:ge.current,r=t.contextTypes,o=(r=r!=null)?En(e,i):Rt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=co,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function qs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&co.enqueueReplaceState(t,t.state,null)}function Ql(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=ad,Ba(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=$e(o):(o=je(t)?Qt:ge.current,i.context=En(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Vl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&co.enqueueReplaceState(i,i.state,null),Qi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Vn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;a===ad&&(a=i.refs={}),l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Gr(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function eu(e){var t=e._init;return t(e._payload)}function ud(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=Nt(f,d),f.index=0,f.sibling=null,f}function o(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,d,p,y){return d===null||d.tag!==6?(d=el(p,f.mode,y),d.return=f,d):(d=i(d,p),d.return=f,d)}function s(f,d,p,y){var E=p.type;return E===ln?h(f,d,p.props.children,y,p.key):d!==null&&(d.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ht&&eu(E)===d.type)?(y=i(d,p.props),y.ref=Vn(f,d,p),y.return=f,y):(y=Pi(p.type,p.key,p.props,null,f.mode,y),y.ref=Vn(f,d,p),y.return=f,y)}function c(f,d,p,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=tl(p,f.mode,y),d.return=f,d):(d=i(d,p.children||[]),d.return=f,d)}function h(f,d,p,y,E){return d===null||d.tag!==7?(d=Vt(p,f.mode,y,E),d.return=f,d):(d=i(d,p),d.return=f,d)}function m(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=el(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case $r:return p=Pi(d.type,d.key,d.props,null,f.mode,p),p.ref=Vn(f,null,d),p.return=f,p;case on:return d=tl(d,f.mode,p),d.return=f,d;case ht:var y=d._init;return m(f,y(d._payload),p)}if(Xn(d)||$n(d))return d=Vt(d,f.mode,p,null),d.return=f,d;Gr(f,d)}return null}function g(f,d,p,y){var E=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:a(f,d,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case $r:return p.key===E?s(f,d,p,y):null;case on:return p.key===E?c(f,d,p,y):null;case ht:return E=p._init,g(f,d,E(p._payload),y)}if(Xn(p)||$n(p))return E!==null?null:h(f,d,p,y,null);Gr(f,p)}return null}function w(f,d,p,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(p)||null,a(d,f,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case $r:return f=f.get(y.key===null?p:y.key)||null,s(d,f,y,E);case on:return f=f.get(y.key===null?p:y.key)||null,c(d,f,y,E);case ht:var P=y._init;return w(f,d,p,P(y._payload),E)}if(Xn(y)||$n(y))return f=f.get(p)||null,h(d,f,y,E,null);Gr(d,y)}return null}function x(f,d,p,y){for(var E=null,P=null,j=d,L=d=0,U=null;j!==null&&L<p.length;L++){j.index>L?(U=j,j=null):U=j.sibling;var R=g(f,j,p[L],y);if(R===null){j===null&&(j=U);break}e&&j&&R.alternate===null&&t(f,j),d=o(R,d,L),P===null?E=R:P.sibling=R,P=R,j=U}if(L===p.length)return n(f,j),V&&At(f,L),E;if(j===null){for(;L<p.length;L++)j=m(f,p[L],y),j!==null&&(d=o(j,d,L),P===null?E=j:P.sibling=j,P=j);return V&&At(f,L),E}for(j=r(f,j);L<p.length;L++)U=w(j,f,L,p[L],y),U!==null&&(e&&U.alternate!==null&&j.delete(U.key===null?L:U.key),d=o(U,d,L),P===null?E=U:P.sibling=U,P=U);return e&&j.forEach(function(_e){return t(f,_e)}),V&&At(f,L),E}function v(f,d,p,y){var E=$n(p);if(typeof E!="function")throw Error(S(150));if(p=E.call(p),p==null)throw Error(S(151));for(var P=E=null,j=d,L=d=0,U=null,R=p.next();j!==null&&!R.done;L++,R=p.next()){j.index>L?(U=j,j=null):U=j.sibling;var _e=g(f,j,R.value,y);if(_e===null){j===null&&(j=U);break}e&&j&&_e.alternate===null&&t(f,j),d=o(_e,d,L),P===null?E=_e:P.sibling=_e,P=_e,j=U}if(R.done)return n(f,j),V&&At(f,L),E;if(j===null){for(;!R.done;L++,R=p.next())R=m(f,R.value,y),R!==null&&(d=o(R,d,L),P===null?E=R:P.sibling=R,P=R);return V&&At(f,L),E}for(j=r(f,j);!R.done;L++,R=p.next())R=w(j,f,L,R.value,y),R!==null&&(e&&R.alternate!==null&&j.delete(R.key===null?L:R.key),d=o(R,d,L),P===null?E=R:P.sibling=R,P=R);return e&&j.forEach(function(Dn){return t(f,Dn)}),V&&At(f,L),E}function C(f,d,p,y){if(typeof p=="object"&&p!==null&&p.type===ln&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case $r:e:{for(var E=p.key,P=d;P!==null;){if(P.key===E){if(E=p.type,E===ln){if(P.tag===7){n(f,P.sibling),d=i(P,p.props.children),d.return=f,f=d;break e}}else if(P.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ht&&eu(E)===P.type){n(f,P.sibling),d=i(P,p.props),d.ref=Vn(f,P,p),d.return=f,f=d;break e}n(f,P);break}else t(f,P);P=P.sibling}p.type===ln?(d=Vt(p.props.children,f.mode,y,p.key),d.return=f,f=d):(y=Pi(p.type,p.key,p.props,null,f.mode,y),y.ref=Vn(f,d,p),y.return=f,f=y)}return l(f);case on:e:{for(P=p.key;d!==null;){if(d.key===P)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=i(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=tl(p,f.mode,y),d.return=f,f=d}return l(f);case ht:return P=p._init,C(f,d,P(p._payload),y)}if(Xn(p))return x(f,d,p,y);if($n(p))return v(f,d,p,y);Gr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=i(d,p),d.return=f,f=d):(n(f,d),d=el(p,f.mode,y),d.return=f,f=d),l(f)):n(f,d)}return C}var _n=ud(!0),cd=ud(!1),Or={},et=Ot(Or),yr=Ot(Or),xr=Ot(Or);function Wt(e){if(e===Or)throw Error(S(174));return e}function Wa(e,t){switch(B(xr,t),B(yr,e),B(et,Or),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Cl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Cl(t,e)}H(et),B(et,t)}function Nn(){H(et),H(yr),H(xr)}function dd(e){Wt(xr.current);var t=Wt(et.current),n=Cl(t,e.type);t!==n&&(B(yr,e),B(et,n))}function Ha(e){yr.current===e&&(H(et),H(yr))}var Q=Ot(0);function bi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Yo=[];function Va(){for(var e=0;e<Yo.length;e++)Yo[e]._workInProgressVersionPrimary=null;Yo.length=0}var ki=dt.ReactCurrentDispatcher,Xo=dt.ReactCurrentBatchConfig,Kt=0,b=null,ee=null,re=null,Ki=!1,rr=!1,wr=0,jh=0;function ue(){throw Error(S(321))}function Qa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ke(e[n],t[n]))return!1;return!0}function ba(e,t,n,r,i,o){if(Kt=o,b=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ki.current=e===null||e.memoizedState===null?Nh:Th,e=n(r,i),rr){o=0;do{if(rr=!1,wr=0,25<=o)throw Error(S(301));o+=1,re=ee=null,t.updateQueue=null,ki.current=Lh,e=n(r,i)}while(rr)}if(ki.current=Yi,t=ee!==null&&ee.next!==null,Kt=0,re=ee=b=null,Ki=!1,t)throw Error(S(300));return e}function Ka(){var e=wr!==0;return wr=0,e}function Xe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?b.memoizedState=re=e:re=re.next=e,re}function Ue(){if(ee===null){var e=b.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=re===null?b.memoizedState:re.next;if(t!==null)re=t,ee=e;else{if(e===null)throw Error(S(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},re===null?b.memoizedState=re=e:re=re.next=e}return re}function kr(e,t){return typeof t=="function"?t(e):t}function Go(e){var t=Ue(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=ee,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,c=o;do{var h=c.lane;if((Kt&h)===h)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=m,l=r):s=s.next=m,b.lanes|=h,Yt|=h}c=c.next}while(c!==null&&c!==o);s===null?l=r:s.next=a,Ke(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,b.lanes|=o,Yt|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Zo(e){var t=Ue(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Ke(o,t.memoizedState)||(Se=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function fd(){}function pd(e,t){var n=b,r=Ue(),i=t(),o=!Ke(r.memoizedState,i);if(o&&(r.memoizedState=i,Se=!0),r=r.queue,Ya(gd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||re!==null&&re.memoizedState.tag&1){if(n.flags|=2048,Sr(9,md.bind(null,n,r,i,t),void 0,null),ie===null)throw Error(S(349));Kt&30||hd(n,t,i)}return i}function hd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=b.updateQueue,t===null?(t={lastEffect:null,stores:null},b.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function md(e,t,n,r){t.value=n,t.getSnapshot=r,vd(t)&&yd(e)}function gd(e,t,n){return n(function(){vd(t)&&yd(e)})}function vd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ke(e,n)}catch{return!0}}function yd(e){var t=ut(e,1);t!==null&&be(t,e,1,-1)}function tu(e){var t=Xe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:kr,lastRenderedState:e},t.queue=e,e=e.dispatch=_h.bind(null,b,e),[t.memoizedState,e]}function Sr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=b.updateQueue,t===null?(t={lastEffect:null,stores:null},b.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function xd(){return Ue().memoizedState}function Si(e,t,n,r){var i=Xe();b.flags|=e,i.memoizedState=Sr(1|t,n,void 0,r===void 0?null:r)}function fo(e,t,n,r){var i=Ue();r=r===void 0?null:r;var o=void 0;if(ee!==null){var l=ee.memoizedState;if(o=l.destroy,r!==null&&Qa(r,l.deps)){i.memoizedState=Sr(t,n,o,r);return}}b.flags|=e,i.memoizedState=Sr(1|t,n,o,r)}function nu(e,t){return Si(8390656,8,e,t)}function Ya(e,t){return fo(2048,8,e,t)}function wd(e,t){return fo(4,2,e,t)}function kd(e,t){return fo(4,4,e,t)}function Sd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cd(e,t,n){return n=n!=null?n.concat([e]):null,fo(4,4,Sd.bind(null,t,e),n)}function Xa(){}function jd(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ed(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Pd(e,t,n){return Kt&21?(Ke(n,t)||(n=Tc(),b.lanes|=n,Yt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function Eh(e,t){var n=$;$=n!==0&&4>n?n:4,e(!0);var r=Xo.transition;Xo.transition={};try{e(!1),t()}finally{$=n,Xo.transition=r}}function _d(){return Ue().memoizedState}function Ph(e,t,n){var r=_t(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Nd(e))Td(t,n);else if(n=od(e,t,n,r),n!==null){var i=ye();be(n,e,r,i),Ld(n,t,r)}}function _h(e,t,n){var r=_t(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nd(e))Td(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,Ke(a,l)){var s=t.interleaved;s===null?(i.next=i,Ua(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=od(e,t,i,r),n!==null&&(i=ye(),be(n,e,r,i),Ld(n,t,r))}}function Nd(e){var t=e.alternate;return e===b||t!==null&&t===b}function Td(e,t){rr=Ki=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ld(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Pa(e,n)}}var Yi={readContext:$e,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},Nh={readContext:$e,useCallback:function(e,t){return Xe().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:nu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Si(4194308,4,Sd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Si(4194308,4,e,t)},useInsertionEffect:function(e,t){return Si(4,2,e,t)},useMemo:function(e,t){var n=Xe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Xe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ph.bind(null,b,e),[r.memoizedState,e]},useRef:function(e){var t=Xe();return e={current:e},t.memoizedState=e},useState:tu,useDebugValue:Xa,useDeferredValue:function(e){return Xe().memoizedState=e},useTransition:function(){var e=tu(!1),t=e[0];return e=Eh.bind(null,e[1]),Xe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=b,i=Xe();if(V){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ie===null)throw Error(S(349));Kt&30||hd(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,nu(gd.bind(null,r,o,e),[e]),r.flags|=2048,Sr(9,md.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Xe(),t=ie.identifierPrefix;if(V){var n=ot,r=it;n=(r&~(1<<32-Qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=wr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=jh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Th={readContext:$e,useCallback:jd,useContext:$e,useEffect:Ya,useImperativeHandle:Cd,useInsertionEffect:wd,useLayoutEffect:kd,useMemo:Ed,useReducer:Go,useRef:xd,useState:function(){return Go(kr)},useDebugValue:Xa,useDeferredValue:function(e){var t=Ue();return Pd(t,ee.memoizedState,e)},useTransition:function(){var e=Go(kr)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:fd,useSyncExternalStore:pd,useId:_d,unstable_isNewReconciler:!1},Lh={readContext:$e,useCallback:jd,useContext:$e,useEffect:Ya,useImperativeHandle:Cd,useInsertionEffect:wd,useLayoutEffect:kd,useMemo:Ed,useReducer:Zo,useRef:xd,useState:function(){return Zo(kr)},useDebugValue:Xa,useDeferredValue:function(e){var t=Ue();return ee===null?t.memoizedState=e:Pd(t,ee.memoizedState,e)},useTransition:function(){var e=Zo(kr)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:fd,useSyncExternalStore:pd,useId:_d,unstable_isNewReconciler:!1};function Tn(e,t){try{var n="",r=t;do n+=ip(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Jo(e,t,n){return{value:e,source:null,stack:null,digest:t??null}}function bl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Rh=typeof WeakMap=="function"?WeakMap:Map;function Rd(e,t,n){n=lt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Gi||(Gi=!0,na=r),bl(e,t)},n}function zd(e,t,n){n=lt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){bl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){bl(e,t),typeof r!="function"&&(Pt===null?Pt=new Set([this]):Pt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function ru(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rh;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Qh.bind(null,e,t,n),t.then(e,e))}function iu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ou(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=lt(-1,1),t.tag=2,Et(n,t,1))),n.lanes|=1),e)}var zh=dt.ReactCurrentOwner,Se=!1;function ve(e,t,n,r){t.child=e===null?cd(t,null,n,r):_n(t,e.child,n,r)}function lu(e,t,n,r,i){n=n.render;var o=t.ref;return kn(t,i),r=ba(e,t,n,r,o,i),n=Ka(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ct(e,t,i)):(V&&n&&Ia(t),t.flags|=1,ve(e,t,r,i),t.child)}function au(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!rs(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Od(e,t,o,r,i)):(e=Pi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:hr,n(l,r)&&e.ref===t.ref)return ct(e,t,i)}return t.flags|=1,e=Nt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Od(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(hr(o,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,ct(e,t,i)}return Kl(e,t,n,r,i)}function Id(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(gn,Ne),Ne|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(gn,Ne),Ne|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,B(gn,Ne),Ne|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,B(gn,Ne),Ne|=r;return ve(e,t,i,n),t.child}function Md(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Kl(e,t,n,r,i){var o=je(n)?Qt:ge.current;return o=En(t,o),kn(t,i),n=ba(e,t,n,r,o,i),r=Ka(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ct(e,t,i)):(V&&r&&Ia(t),t.flags|=1,ve(e,t,n,i),t.child)}function su(e,t,n,r,i){if(je(n)){var o=!0;Ui(t)}else o=!1;if(kn(t,i),t.stateNode===null)Ci(e,t),sd(t,n,r),Ql(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=$e(c):(c=je(n)?Qt:ge.current,c=En(t,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==c)&&qs(t,l,r,c),mt=!1;var g=t.memoizedState;l.state=g,Qi(t,r,l,i),s=t.memoizedState,a!==r||g!==s||Ce.current||mt?(typeof h=="function"&&(Vl(t,n,h,r),s=t.memoizedState),(a=mt||Js(t,n,a,r,g,s,c))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,ld(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:We(t.type,a),l.props=c,m=t.pendingProps,g=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=$e(s):(s=je(n)?Qt:ge.current,s=En(t,s));var w=n.getDerivedStateFromProps;(h=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==m||g!==s)&&qs(t,l,r,s),mt=!1,g=t.memoizedState,l.state=g,Qi(t,r,l,i);var x=t.memoizedState;a!==m||g!==x||Ce.current||mt?(typeof w=="function"&&(Vl(t,n,w,r),x=t.memoizedState),(c=mt||Js(t,n,c,r,g,x,s)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=s,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Yl(e,t,n,r,o,i)}function Yl(e,t,n,r,i,o){Md(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Ks(t,n,!1),ct(e,t,o);r=t.stateNode,zh.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=_n(t,e.child,null,o),t.child=_n(t,null,a,o)):ve(e,t,a,o),t.memoizedState=r.state,i&&Ks(t,n,!0),t.child}function Fd(e){var t=e.stateNode;t.pendingContext?bs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&bs(e,t.context,!1),Wa(e,t.containerInfo)}function uu(e,t,n,r,i){return Pn(),Fa(i),t.flags|=256,ve(e,t,n,r),t.child}var Xl={dehydrated:null,treeContext:null,retryLane:0};function Gl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Dd(e,t,n){var r=t.pendingProps,i=Q.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),B(Q,i&1),e===null)return Wl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=mo(l,r,0,null),e=Vt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Gl(n),t.memoizedState=Xl,e):Ga(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Oh(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Nt(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Nt(a,o):(o=Vt(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Gl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Xl,r}return o=e.child,e=o.sibling,r=Nt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ga(e,t){return t=mo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Zr(e,t,n,r){return r!==null&&Fa(r),_n(t,e.child,null,n),e=Ga(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Oh(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Jo(Error(S(422))),Zr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=mo({mode:"visible",children:r.children},i,0,null),o=Vt(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&_n(t,e.child,null,l),t.child.memoizedState=Gl(l),t.memoizedState=Xl,o);if(!(t.mode&1))return Zr(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(S(419)),r=Jo(o,r),Zr(e,t,l,r)}if(a=(l&e.childLanes)!==0,Se||a){if(r=ie,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ut(e,i),be(r,e,i,-1))}return ns(),r=Jo(Error(S(421))),Zr(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=bh.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Te=jt(i.nextSibling),Le=t,V=!0,Ve=null,e!==null&&(Me[Fe++]=it,Me[Fe++]=ot,Me[Fe++]=bt,it=e.id,ot=e.overflow,bt=t),t=Ga(t,r.children),t.flags|=4096,t)}function cu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Hl(e.return,t,n)}function qo(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ad(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ve(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cu(e,n,t);else if(e.tag===19)cu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(Q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&bi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),qo(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&bi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}qo(t,!0,n,null,o);break;case"together":qo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ci(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Yt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Nt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Nt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ih(e,t,n){switch(t.tag){case 3:Fd(t),Pn();break;case 5:dd(t);break;case 1:je(t.type)&&Ui(t);break;case 4:Wa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;B(Hi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?Dd(e,t,n):(B(Q,Q.current&1),e=ct(e,t,n),e!==null?e.sibling:null);B(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ad(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,Id(e,t,n)}return ct(e,t,n)}var $d,Zl,Ud,Bd;$d=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zl=function(){};Ud=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Wt(et.current);var o=null;switch(n){case"input":i=xl(e,i),r=xl(e,r),o=[];break;case"select":i=K({},i,{value:void 0}),r=K({},r,{value:void 0}),o=[];break;case"textarea":i=Sl(e,i),r=Sl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ai)}jl(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ar.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ar.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&W("scroll",e),o||a===s||(o=[])):(o=o||[]).push(c,s))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Bd=function(e,t,n,r){n!==r&&(t.flags|=4)};function Qn(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Mh(e,t,n){var r=t.pendingProps;switch(Ma(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return je(t.type)&&$i(),ce(t),null;case 3:return r=t.stateNode,Nn(),H(Ce),H(ge),Va(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Xr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ve!==null&&(oa(Ve),Ve=null))),Zl(e,t),ce(t),null;case 5:Ha(t);var i=Wt(xr.current);if(n=t.type,e!==null&&t.stateNode!=null)Ud(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return ce(t),null}if(e=Wt(et.current),Xr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Je]=t,r[vr]=o,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(i=0;i<Zn.length;i++)W(Zn[i],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":xs(r,o),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},W("invalid",r);break;case"textarea":ks(r,o),W("invalid",r)}jl(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Yr(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Yr(r.textContent,a,e),i=["children",""+a]):ar.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&W("scroll",r)}switch(n){case"input":Ur(r),ws(r,o,!0);break;case"textarea":Ur(r),Ss(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ai)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=hc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Je]=t,e[vr]=r,$d(e,t,!1,!1),t.stateNode=e;e:{switch(l=El(n,r),n){case"dialog":W("cancel",e),W("close",e),i=r;break;case"iframe":case"object":case"embed":W("load",e),i=r;break;case"video":case"audio":for(i=0;i<Zn.length;i++)W(Zn[i],e);i=r;break;case"source":W("error",e),i=r;break;case"img":case"image":case"link":W("error",e),W("load",e),i=r;break;case"details":W("toggle",e),i=r;break;case"input":xs(e,r),i=xl(e,r),W("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=K({},r,{value:void 0}),W("invalid",e);break;case"textarea":ks(e,r),i=Sl(e,r),W("invalid",e);break;default:i=r}jl(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?vc(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&mc(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&sr(e,s):typeof s=="number"&&sr(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ar.hasOwnProperty(o)?s!=null&&o==="onScroll"&&W("scroll",e):s!=null&&wa(e,o,s,l))}switch(n){case"input":Ur(e),ws(e,r,!1);break;case"textarea":Ur(e),Ss(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Lt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?vn(e,!!r.multiple,o,!1):r.defaultValue!=null&&vn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ai)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)Bd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Wt(xr.current),Wt(et.current),Xr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Je]=t,(o=r.nodeValue!==n)&&(e=Le,e!==null))switch(e.tag){case 3:Yr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Yr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Je]=t,t.stateNode=r}return ce(t),null;case 13:if(H(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&Te!==null&&t.mode&1&&!(t.flags&128))id(),Pn(),t.flags|=98560,o=!1;else if(o=Xr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[Je]=t}else Pn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),o=!1}else Ve!==null&&(oa(Ve),Ve=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?te===0&&(te=3):ns())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return Nn(),Zl(e,t),e===null&&mr(t.stateNode.containerInfo),ce(t),null;case 10:return $a(t.type._context),ce(t),null;case 17:return je(t.type)&&$i(),ce(t),null;case 19:if(H(Q),o=t.memoizedState,o===null)return ce(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Qn(o,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=bi(e),l!==null){for(t.flags|=128,Qn(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(Q,Q.current&1|2),t.child}e=e.sibling}o.tail!==null&&G()>Ln&&(t.flags|=128,r=!0,Qn(o,!1),t.lanes=4194304)}else{if(!r)if(e=bi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Qn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!V)return ce(t),null}else 2*G()-o.renderingStartTime>Ln&&n!==1073741824&&(t.flags|=128,r=!0,Qn(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=G(),t.sibling=null,n=Q.current,B(Q,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return ts(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ne&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function Fh(e,t){switch(Ma(t),t.tag){case 1:return je(t.type)&&$i(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Nn(),H(Ce),H(ge),Va(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ha(t),null;case 13:if(H(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Pn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(Q),null;case 4:return Nn(),null;case 10:return $a(t.type._context),null;case 22:case 23:return ts(),null;case 24:return null;default:return null}}var Jr=!1,me=!1,Dh=typeof WeakSet=="function"?WeakSet:Set,N=null;function mn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Y(e,t,r)}else n.current=null}function Jl(e,t,n){try{n()}catch(r){Y(e,t,r)}}var du=!1;function Ah(e,t){if(Ml=Mi,e=Qc(),Oa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,c=0,h=0,m=e,g=null;t:for(;;){for(var w;m!==n||i!==0&&m.nodeType!==3||(a=l+i),m!==o||r!==0&&m.nodeType!==3||(s=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(w=m.firstChild)!==null;)g=m,m=w;for(;;){if(m===e)break t;if(g===n&&++c===i&&(a=l),g===o&&++h===r&&(s=l),(w=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=w}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fl={focusedElem:e,selectionRange:n},Mi=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,C=x.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:We(t.type,v),C);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(y){Y(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return x=du,du=!1,x}function ir(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Jl(t,n,o)}i=i.next}while(i!==r)}}function po(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ql(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Wd(e){var t=e.alternate;t!==null&&(e.alternate=null,Wd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Je],delete t[vr],delete t[$l],delete t[wh],delete t[kh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hd(e){return e.tag===5||e.tag===3||e.tag===4}function fu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ea(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ai));else if(r!==4&&(e=e.child,e!==null))for(ea(e,t,n),e=e.sibling;e!==null;)ea(e,t,n),e=e.sibling}function ta(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ta(e,t,n),e=e.sibling;e!==null;)ta(e,t,n),e=e.sibling}var oe=null,He=!1;function pt(e,t,n){for(n=n.child;n!==null;)Vd(e,t,n),n=n.sibling}function Vd(e,t,n){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(io,n)}catch{}switch(n.tag){case 5:me||mn(n,t);case 6:var r=oe,i=He;oe=null,pt(e,t,n),oe=r,He=i,oe!==null&&(He?(e=oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):oe.removeChild(n.stateNode));break;case 18:oe!==null&&(He?(e=oe,n=n.stateNode,e.nodeType===8?bo(e.parentNode,n):e.nodeType===1&&bo(e,n),fr(e)):bo(oe,n.stateNode));break;case 4:r=oe,i=He,oe=n.stateNode.containerInfo,He=!0,pt(e,t,n),oe=r,He=i;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Jl(n,t,l),i=i.next}while(i!==r)}pt(e,t,n);break;case 1:if(!me&&(mn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Y(n,t,a)}pt(e,t,n);break;case 21:pt(e,t,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,pt(e,t,n),me=r):pt(e,t,n);break;default:pt(e,t,n)}}function pu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Dh),t.forEach(function(r){var i=Kh.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Be(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:oe=a.stateNode,He=!1;break e;case 3:oe=a.stateNode.containerInfo,He=!0;break e;case 4:oe=a.stateNode.containerInfo,He=!0;break e}a=a.return}if(oe===null)throw Error(S(160));Vd(o,l,i),oe=null,He=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){Y(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Qd(t,e),t=t.sibling}function Qd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Be(t,e),Ye(e),r&4){try{ir(3,e,e.return),po(3,e)}catch(v){Y(e,e.return,v)}try{ir(5,e,e.return)}catch(v){Y(e,e.return,v)}}break;case 1:Be(t,e),Ye(e),r&512&&n!==null&&mn(n,n.return);break;case 5:if(Be(t,e),Ye(e),r&512&&n!==null&&mn(n,n.return),e.flags&32){var i=e.stateNode;try{sr(i,"")}catch(v){Y(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&fc(i,o),El(a,l);var c=El(a,o);for(l=0;l<s.length;l+=2){var h=s[l],m=s[l+1];h==="style"?vc(i,m):h==="dangerouslySetInnerHTML"?mc(i,m):h==="children"?sr(i,m):wa(i,h,m,c)}switch(a){case"input":wl(i,o);break;case"textarea":pc(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?vn(i,!!o.multiple,w,!1):g!==!!o.multiple&&(o.defaultValue!=null?vn(i,!!o.multiple,o.defaultValue,!0):vn(i,!!o.multiple,o.multiple?[]:"",!1))}i[vr]=o}catch(v){Y(e,e.return,v)}}break;case 6:if(Be(t,e),Ye(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){Y(e,e.return,v)}}break;case 3:if(Be(t,e),Ye(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fr(t.containerInfo)}catch(v){Y(e,e.return,v)}break;case 4:Be(t,e),Ye(e);break;case 13:Be(t,e),Ye(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(qa=G())),r&4&&pu(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(me=(c=me)||h,Be(t,e),me=c):Be(t,e),Ye(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(N=e,h=e.child;h!==null;){for(m=N=h;N!==null;){switch(g=N,w=g.child,g.tag){case 0:case 11:case 14:case 15:ir(4,g,g.return);break;case 1:mn(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(v){Y(r,n,v)}}break;case 5:mn(g,g.return);break;case 22:if(g.memoizedState!==null){mu(m);continue}}w!==null?(w.return=g,N=w):mu(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{i=m.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=m.stateNode,s=m.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=gc("display",l))}catch(v){Y(e,e.return,v)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(v){Y(e,e.return,v)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Be(t,e),Ye(e),r&4&&pu(e);break;case 21:break;default:Be(t,e),Ye(e)}}function Ye(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Hd(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(sr(i,""),r.flags&=-33);var o=fu(e);ta(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=fu(e);ea(e,a,l);break;default:throw Error(S(161))}}catch(s){Y(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $h(e,t,n){N=e,bd(e)}function bd(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Jr;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||me;a=Jr;var c=me;if(Jr=l,(me=s)&&!c)for(N=i;N!==null;)l=N,s=l.child,l.tag===22&&l.memoizedState!==null?gu(i):s!==null?(s.return=l,N=s):gu(i);for(;o!==null;)N=o,bd(o),o=o.sibling;N=i,Jr=a,me=c}hu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,N=o):hu(e)}}function hu(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:me||po(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!me)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:We(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Zs(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Zs(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&fr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}me||t.flags&512&&ql(t)}catch(g){Y(t,t.return,g)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function mu(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function gu(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{po(4,t)}catch(s){Y(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Y(t,i,s)}}var o=t.return;try{ql(t)}catch(s){Y(t,o,s)}break;case 5:var l=t.return;try{ql(t)}catch(s){Y(t,l,s)}}}catch(s){Y(t,t.return,s)}if(t===e){N=null;break}var a=t.sibling;if(a!==null){a.return=t.return,N=a;break}N=t.return}}var Uh=Math.ceil,Xi=dt.ReactCurrentDispatcher,Za=dt.ReactCurrentOwner,Ae=dt.ReactCurrentBatchConfig,F=0,ie=null,q=null,ae=0,Ne=0,gn=Ot(0),te=0,Cr=null,Yt=0,ho=0,Ja=0,or=null,ke=null,qa=0,Ln=1/0,nt=null,Gi=!1,na=null,Pt=null,qr=!1,xt=null,Zi=0,lr=0,ra=null,ji=-1,Ei=0;function ye(){return F&6?G():ji!==-1?ji:ji=G()}function _t(e){return e.mode&1?F&2&&ae!==0?ae&-ae:Ch.transition!==null?(Ei===0&&(Ei=Tc()),Ei):(e=$,e!==0||(e=window.event,e=e===void 0?16:Fc(e.type)),e):1}function be(e,t,n,r){if(50<lr)throw lr=0,ra=null,Error(S(185));Lr(e,n,r),(!(F&2)||e!==ie)&&(e===ie&&(!(F&2)&&(ho|=n),te===4&&vt(e,ae)),Ee(e,r),n===1&&F===0&&!(t.mode&1)&&(Ln=G()+500,uo&&It()))}function Ee(e,t){var n=e.callbackNode;Cp(e,t);var r=Ii(e,e===ie?ae:0);if(r===0)n!==null&&Es(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Es(n),t===1)e.tag===0?Sh(vu.bind(null,e)):td(vu.bind(null,e)),yh(function(){!(F&6)&&It()}),n=null;else{switch(Lc(r)){case 1:n=Ea;break;case 4:n=_c;break;case 16:n=Oi;break;case 536870912:n=Nc;break;default:n=Oi}n=ef(n,Kd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Kd(e,t){if(ji=-1,Ei=0,F&6)throw Error(S(327));var n=e.callbackNode;if(Sn()&&e.callbackNode!==n)return null;var r=Ii(e,e===ie?ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ji(e,r);else{t=r;var i=F;F|=2;var o=Xd();(ie!==e||ae!==t)&&(nt=null,Ln=G()+500,Ht(e,t));do try{Hh();break}catch(a){Yd(e,a)}while(!0);Aa(),Xi.current=o,F=i,q!==null?t=0:(ie=null,ae=0,t=te)}if(t!==0){if(t===2&&(i=Ll(e),i!==0&&(r=i,t=ia(e,i))),t===1)throw n=Cr,Ht(e,0),vt(e,r),Ee(e,G()),n;if(t===6)vt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Bh(i)&&(t=Ji(e,r),t===2&&(o=Ll(e),o!==0&&(r=o,t=ia(e,o))),t===1))throw n=Cr,Ht(e,0),vt(e,r),Ee(e,G()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:$t(e,ke,nt);break;case 3:if(vt(e,r),(r&130023424)===r&&(t=qa+500-G(),10<t)){if(Ii(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Al($t.bind(null,e,ke,nt),t);break}$t(e,ke,nt);break;case 4:if(vt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Qe(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Uh(r/1960))-r,10<r){e.timeoutHandle=Al($t.bind(null,e,ke,nt),r);break}$t(e,ke,nt);break;case 5:$t(e,ke,nt);break;default:throw Error(S(329))}}}return Ee(e,G()),e.callbackNode===n?Kd.bind(null,e):null}function ia(e,t){var n=or;return e.current.memoizedState.isDehydrated&&(Ht(e,t).flags|=256),e=Ji(e,t),e!==2&&(t=ke,ke=n,t!==null&&oa(t)),e}function oa(e){ke===null?ke=e:ke.push.apply(ke,e)}function Bh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ke(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vt(e,t){for(t&=~Ja,t&=~ho,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Qe(t),r=1<<n;e[n]=-1,t&=~r}}function vu(e){if(F&6)throw Error(S(327));Sn();var t=Ii(e,0);if(!(t&1))return Ee(e,G()),null;var n=Ji(e,t);if(e.tag!==0&&n===2){var r=Ll(e);r!==0&&(t=r,n=ia(e,r))}if(n===1)throw n=Cr,Ht(e,0),vt(e,t),Ee(e,G()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,$t(e,ke,nt),Ee(e,G()),null}function es(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(Ln=G()+500,uo&&It())}}function Xt(e){xt!==null&&xt.tag===0&&!(F&6)&&Sn();var t=F;F|=1;var n=Ae.transition,r=$;try{if(Ae.transition=null,$=1,e)return e()}finally{$=r,Ae.transition=n,F=t,!(F&6)&&It()}}function ts(){Ne=gn.current,H(gn)}function Ht(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,vh(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(Ma(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$i();break;case 3:Nn(),H(Ce),H(ge),Va();break;case 5:Ha(r);break;case 4:Nn();break;case 13:H(Q);break;case 19:H(Q);break;case 10:$a(r.type._context);break;case 22:case 23:ts()}n=n.return}if(ie=e,q=e=Nt(e.current,null),ae=Ne=t,te=0,Cr=null,Ja=ho=Yt=0,ke=or=null,Bt!==null){for(t=0;t<Bt.length;t++)if(n=Bt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Bt=null}return e}function Yd(e,t){do{var n=q;try{if(Aa(),ki.current=Yi,Ki){for(var r=b.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ki=!1}if(Kt=0,re=ee=b=null,rr=!1,wr=0,Za.current=null,n===null||n.return===null){te=1,Cr=t,q=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=ae,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,h=a,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=iu(l);if(w!==null){w.flags&=-257,ou(w,l,a,o,t),w.mode&1&&ru(o,c,t),t=w,s=c;var x=t.updateQueue;if(x===null){var v=new Set;v.add(s),t.updateQueue=v}else x.add(s);break e}else{if(!(t&1)){ru(o,c,t),ns();break e}s=Error(S(426))}}else if(V&&a.mode&1){var C=iu(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),ou(C,l,a,o,t),Fa(Tn(s,a));break e}}o=s=Tn(s,a),te!==4&&(te=2),or===null?or=[o]:or.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Rd(o,s,t);Gs(o,f);break e;case 1:a=s;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Pt===null||!Pt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=zd(o,a,t);Gs(o,y);break e}}o=o.return}while(o!==null)}Zd(n)}catch(E){t=E,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function Xd(){var e=Xi.current;return Xi.current=Yi,e===null?Yi:e}function ns(){(te===0||te===3||te===2)&&(te=4),ie===null||!(Yt&268435455)&&!(ho&268435455)||vt(ie,ae)}function Ji(e,t){var n=F;F|=2;var r=Xd();(ie!==e||ae!==t)&&(nt=null,Ht(e,t));do try{Wh();break}catch(i){Yd(e,i)}while(!0);if(Aa(),F=n,Xi.current=r,q!==null)throw Error(S(261));return ie=null,ae=0,te}function Wh(){for(;q!==null;)Gd(q)}function Hh(){for(;q!==null&&!hp();)Gd(q)}function Gd(e){var t=qd(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,t===null?Zd(e):q=t,Za.current=null}function Zd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Fh(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,q=null;return}}else if(n=Mh(n,t,Ne),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);te===0&&(te=5)}function $t(e,t,n){var r=$,i=Ae.transition;try{Ae.transition=null,$=1,Vh(e,t,n,r)}finally{Ae.transition=i,$=r}return null}function Vh(e,t,n,r){do Sn();while(xt!==null);if(F&6)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(jp(e,o),e===ie&&(q=ie=null,ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qr||(qr=!0,ef(Oi,function(){return Sn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ae.transition,Ae.transition=null;var l=$;$=1;var a=F;F|=4,Za.current=null,Ah(e,n),Qd(n,e),ch(Fl),Mi=!!Ml,Fl=Ml=null,e.current=n,$h(n),mp(),F=a,$=l,Ae.transition=o}else e.current=n;if(qr&&(qr=!1,xt=e,Zi=i),o=e.pendingLanes,o===0&&(Pt=null),yp(n.stateNode),Ee(e,G()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Gi)throw Gi=!1,e=na,na=null,e;return Zi&1&&e.tag!==0&&Sn(),o=e.pendingLanes,o&1?e===ra?lr++:(lr=0,ra=e):lr=0,It(),null}function Sn(){if(xt!==null){var e=Lc(Zi),t=Ae.transition,n=$;try{if(Ae.transition=null,$=16>e?16:e,xt===null)var r=!1;else{if(e=xt,xt=null,Zi=0,F&6)throw Error(S(331));var i=F;for(F|=4,N=e.current;N!==null;){var o=N,l=o.child;if(N.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(N=c;N!==null;){var h=N;switch(h.tag){case 0:case 11:case 15:ir(8,h,o)}var m=h.child;if(m!==null)m.return=h,N=m;else for(;N!==null;){h=N;var g=h.sibling,w=h.return;if(Wd(h),h===c){N=null;break}if(g!==null){g.return=w,N=g;break}N=w}}}var x=o.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var C=v.sibling;v.sibling=null,v=C}while(v!==null)}}N=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,N=l;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ir(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,N=f;break e}N=o.return}}var d=e.current;for(N=d;N!==null;){l=N;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,N=p;else e:for(l=d;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:po(9,a)}}catch(E){Y(a,a.return,E)}if(a===l){N=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,N=y;break e}N=a.return}}if(F=i,It(),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(io,e)}catch{}r=!0}return r}finally{$=n,Ae.transition=t}}return!1}function yu(e,t,n){t=Tn(n,t),t=Rd(e,t,1),e=Et(e,t,1),t=ye(),e!==null&&(Lr(e,1,t),Ee(e,t))}function Y(e,t,n){if(e.tag===3)yu(e,e,n);else for(;t!==null;){if(t.tag===3){yu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pt===null||!Pt.has(r))){e=Tn(n,e),e=zd(t,e,1),t=Et(t,e,1),e=ye(),t!==null&&(Lr(t,1,e),Ee(t,e));break}}t=t.return}}function Qh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ye(),e.pingedLanes|=e.suspendedLanes&n,ie===e&&(ae&n)===n&&(te===4||te===3&&(ae&130023424)===ae&&500>G()-qa?Ht(e,0):Ja|=n),Ee(e,t)}function Jd(e,t){t===0&&(e.mode&1?(t=Hr,Hr<<=1,!(Hr&130023424)&&(Hr=4194304)):t=1);var n=ye();e=ut(e,t),e!==null&&(Lr(e,t,n),Ee(e,n))}function bh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Jd(e,n)}function Kh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Jd(e,n)}var qd;qd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,Ih(e,t,n);Se=!!(e.flags&131072)}else Se=!1,V&&t.flags&1048576&&nd(t,Wi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ci(e,t),e=t.pendingProps;var i=En(t,ge.current);kn(t,n),i=ba(null,t,r,e,i,n);var o=Ka();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,je(r)?(o=!0,Ui(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ba(t),i.updater=co,t.stateNode=i,i._reactInternals=t,Ql(t,r,e,n),t=Yl(null,t,r,!0,o,n)):(t.tag=0,V&&o&&Ia(t),ve(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ci(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Xh(r),e=We(r,e),i){case 0:t=Kl(null,t,r,e,n);break e;case 1:t=su(null,t,r,e,n);break e;case 11:t=lu(null,t,r,e,n);break e;case 14:t=au(null,t,r,We(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),Kl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),su(e,t,r,i,n);case 3:e:{if(Fd(t),e===null)throw Error(S(387));r=t.pendingProps,o=t.memoizedState,i=o.element,ld(e,t),Qi(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Tn(Error(S(423)),t),t=uu(e,t,r,n,i);break e}else if(r!==i){i=Tn(Error(S(424)),t),t=uu(e,t,r,n,i);break e}else for(Te=jt(t.stateNode.containerInfo.firstChild),Le=t,V=!0,Ve=null,n=cd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Pn(),r===i){t=ct(e,t,n);break e}ve(e,t,r,n)}t=t.child}return t;case 5:return dd(t),e===null&&Wl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Dl(r,i)?l=null:o!==null&&Dl(r,o)&&(t.flags|=32),Md(e,t),ve(e,t,l,n),t.child;case 6:return e===null&&Wl(t),null;case 13:return Dd(e,t,n);case 4:return Wa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=_n(t,null,r,n):ve(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),lu(e,t,r,i,n);case 7:return ve(e,t,t.pendingProps,n),t.child;case 8:return ve(e,t,t.pendingProps.children,n),t.child;case 12:return ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,B(Hi,r._currentValue),r._currentValue=l,o!==null)if(Ke(o.value,l)){if(o.children===i.children&&!Ce.current){t=ct(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=lt(-1,n&-n),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?s.next=s:(s.next=h.next,h.next=s),c.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Hl(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(S(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Hl(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ve(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,kn(t,n),i=$e(i),r=r(i),t.flags|=1,ve(e,t,r,n),t.child;case 14:return r=t.type,i=We(r,t.pendingProps),i=We(r.type,i),au(e,t,r,i,n);case 15:return Od(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),Ci(e,t),t.tag=1,je(r)?(e=!0,Ui(t)):e=!1,kn(t,n),sd(t,r,i),Ql(t,r,i,n),Yl(null,t,r,!0,e,n);case 19:return Ad(e,t,n);case 22:return Id(e,t,n)}throw Error(S(156,t.tag))};function ef(e,t){return Pc(e,t)}function Yh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,t,n,r){return new Yh(e,t,n,r)}function rs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xh(e){if(typeof e=="function")return rs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Sa)return 11;if(e===Ca)return 14}return 2}function Nt(e,t){var n=e.alternate;return n===null?(n=De(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Pi(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")rs(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case ln:return Vt(n.children,i,o,t);case ka:l=8,i|=8;break;case ml:return e=De(12,n,t,i|2),e.elementType=ml,e.lanes=o,e;case gl:return e=De(13,n,t,i),e.elementType=gl,e.lanes=o,e;case vl:return e=De(19,n,t,i),e.elementType=vl,e.lanes=o,e;case uc:return mo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ac:l=10;break e;case sc:l=9;break e;case Sa:l=11;break e;case Ca:l=14;break e;case ht:l=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=De(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Vt(e,t,n,r){return e=De(7,e,r,t),e.lanes=n,e}function mo(e,t,n,r){return e=De(22,e,r,t),e.elementType=uc,e.lanes=n,e.stateNode={isHidden:!1},e}function el(e,t,n){return e=De(6,e,null,t),e.lanes=n,e}function tl(e,t,n){return t=De(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Gh(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mo(0),this.expirationTimes=Mo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function is(e,t,n,r,i,o,l,a,s){return e=new Gh(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=De(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ba(o),e}function Zh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:on,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function tf(e){if(!e)return Rt;e=e._reactInternals;e:{if(Zt(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(je(n))return ed(e,n,t)}return t}function nf(e,t,n,r,i,o,l,a,s){return e=is(n,r,!0,e,i,o,l,a,s),e.context=tf(null),n=e.current,r=ye(),i=_t(n),o=lt(r,i),o.callback=t??null,Et(n,o,i),e.current.lanes=i,Lr(e,i,r),Ee(e,r),e}function go(e,t,n,r){var i=t.current,o=ye(),l=_t(i);return n=tf(n),t.context===null?t.context=n:t.pendingContext=n,t=lt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Et(i,t,l),e!==null&&(be(e,i,l,o),wi(e,i,l)),l}function qi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function os(e,t){xu(e,t),(e=e.alternate)&&xu(e,t)}function Jh(){return null}var rf=typeof reportError=="function"?reportError:function(e){console.error(e)};function ls(e){this._internalRoot=e}vo.prototype.render=ls.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));go(e,t,null,null)};vo.prototype.unmount=ls.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Xt(function(){go(null,e,null,null)}),t[st]=null}};function vo(e){this._internalRoot=e}vo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Oc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gt.length&&t!==0&&t<gt[n].priority;n++);gt.splice(n,0,e),n===0&&Mc(e)}};function as(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function yo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wu(){}function qh(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=qi(l);o.call(c)}}var l=nf(t,r,e,0,null,!1,!1,"",wu);return e._reactRootContainer=l,e[st]=l.current,mr(e.nodeType===8?e.parentNode:e),Xt(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=qi(s);a.call(c)}}var s=is(e,0,!1,null,null,!1,!1,"",wu);return e._reactRootContainer=s,e[st]=s.current,mr(e.nodeType===8?e.parentNode:e),Xt(function(){go(t,s,n,r)}),s}function xo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=qi(l);a.call(s)}}go(t,l,e,i)}else l=qh(n,t,e,i,r);return qi(l)}Rc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Gn(t.pendingLanes);n!==0&&(Pa(t,n|1),Ee(t,G()),!(F&6)&&(Ln=G()+500,It()))}break;case 13:Xt(function(){var r=ut(e,1);if(r!==null){var i=ye();be(r,e,1,i)}}),os(e,1)}};_a=function(e){if(e.tag===13){var t=ut(e,134217728);if(t!==null){var n=ye();be(t,e,134217728,n)}os(e,134217728)}};zc=function(e){if(e.tag===13){var t=_t(e),n=ut(e,t);if(n!==null){var r=ye();be(n,e,t,r)}os(e,t)}};Oc=function(){return $};Ic=function(e,t){var n=$;try{return $=e,t()}finally{$=n}};_l=function(e,t,n){switch(t){case"input":if(wl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=so(r);if(!i)throw Error(S(90));dc(r),wl(r,i)}}}break;case"textarea":pc(e,n);break;case"select":t=n.value,t!=null&&vn(e,!!n.multiple,t,!1)}};wc=es;kc=Xt;var em={usingClientEntryPoint:!1,Events:[zr,cn,so,yc,xc,es]},bn={findFiberByHostInstance:Ut,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},tm={bundleType:bn.bundleType,version:bn.version,rendererPackageName:bn.rendererPackageName,rendererConfig:bn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=jc(e),e===null?null:e.stateNode},findFiberByHostInstance:bn.findFiberByHostInstance||Jh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ei=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ei.isDisabled&&ei.supportsFiber)try{io=ei.inject(tm),qe=ei}catch{}}Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=em;Oe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!as(t))throw Error(S(200));return Zh(e,t,null,n)};Oe.createRoot=function(e,t){if(!as(e))throw Error(S(299));var n=!1,r="",i=rf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=is(e,1,!1,null,null,n,!1,r,i),e[st]=t.current,mr(e.nodeType===8?e.parentNode:e),new ls(t)};Oe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=jc(t),e=e===null?null:e.stateNode,e};Oe.flushSync=function(e){return Xt(e)};Oe.hydrate=function(e,t,n){if(!yo(t))throw Error(S(200));return xo(null,e,t,!0,n)};Oe.hydrateRoot=function(e,t,n){if(!as(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=rf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=nf(t,null,e,1,n??null,i,!1,o,l),e[st]=t.current,mr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new vo(t)};Oe.render=function(e,t,n){if(!yo(t))throw Error(S(200));return xo(null,e,t,!1,n)};Oe.unmountComponentAtNode=function(e){if(!yo(e))throw Error(S(40));return e._reactRootContainer?(Xt(function(){xo(null,null,e,!1,function(){e._reactRootContainer=null,e[st]=null})}),!0):!1};Oe.unstable_batchedUpdates=es;Oe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!yo(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return xo(e,t,n,!1,r)};Oe.version="18.2.0-next-9e3b772b8-20220608";function of(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(of)}catch(e){console.error(e)}}of(),nc.exports=Oe;var nm=nc.exports,ku=nm;pl.createRoot=ku.createRoot,pl.hydrateRoot=ku.hydrateRoot;/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jr(){return jr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jr.apply(this,arguments)}var wt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(wt||(wt={}));const Su="popstate";function rm(e){e===void 0&&(e={});function t(i,o){let{pathname:l="/",search:a="",hash:s=""}=Jt(i.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),la("",{pathname:l,search:a,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let l=i.document.querySelector("base"),a="";if(l&&l.getAttribute("href")){let s=i.location.href,c=s.indexOf("#");a=c===-1?s:s.slice(0,c)}return a+"#"+(typeof o=="string"?o:eo(o))}function r(i,o){ss(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return om(t,n,r,e)}function Z(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ss(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function im(){return Math.random().toString(36).substr(2,8)}function Cu(e,t){return{usr:e.state,key:e.key,idx:t}}function la(e,t,n,r){return n===void 0&&(n=null),jr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Jt(t):t,{state:n,key:t&&t.key||r||im()})}function eo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Jt(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function om(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,a=wt.Pop,s=null,c=h();c==null&&(c=0,l.replaceState(jr({},l.state,{idx:c}),""));function h(){return(l.state||{idx:null}).idx}function m(){a=wt.Pop;let C=h(),f=C==null?null:C-c;c=C,s&&s({action:a,location:v.location,delta:f})}function g(C,f){a=wt.Push;let d=la(v.location,C,f);n&&n(d,C),c=h()+1;let p=Cu(d,c),y=v.createHref(d);try{l.pushState(p,"",y)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(y)}o&&s&&s({action:a,location:v.location,delta:1})}function w(C,f){a=wt.Replace;let d=la(v.location,C,f);n&&n(d,C),c=h();let p=Cu(d,c),y=v.createHref(d);l.replaceState(p,"",y),o&&s&&s({action:a,location:v.location,delta:0})}function x(C){let f=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof C=="string"?C:eo(C);return d=d.replace(/ $/,"%20"),Z(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let v={get action(){return a},get location(){return e(i,l)},listen(C){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(Su,m),s=C,()=>{i.removeEventListener(Su,m),s=null}},createHref(C){return t(i,C)},createURL:x,encodeLocation(C){let f=x(C);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:w,go(C){return l.go(C)}};return v}var ju;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ju||(ju={}));function lm(e,t,n){n="/";let r=typeof t=="string"?Jt(t):t,i=Rn(r.pathname||"/",n);if(i==null)return null;let o=lf(e);am(o);let l=null;for(let a=0;l==null&&a<o.length;++a){let s=ym(i);l=gm(o[a],s)}return l}function lf(e,t,n,r){t=[],n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,a)=>{let s={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};s.relativePath.startsWith("/")&&(Z(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=Tt([r,s.relativePath]),h=n.concat(s);o.children&&o.children.length>0&&(Z(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),lf(o.children,t,h,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:hm(c,o.index),routesMeta:h})};return e.forEach((o,l)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,l);else for(let s of af(o.path))i(o,l,s)}),t}function af(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=af(r.join("/")),a=[];return a.push(...l.map(s=>s===""?o:[o,s].join("/"))),i&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function am(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:mm(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const sm=/^:[\w-]+$/,um=3,cm=2,dm=1,fm=10,pm=-2,Eu=e=>e==="*";function hm(e,t){let n=e.split("/"),r=n.length;return n.some(Eu)&&(r+=pm),t&&(r+=cm),n.filter(i=>!Eu(i)).reduce((i,o)=>i+(sm.test(o)?um:o===""?dm:fm),r)}function mm(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function gm(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let a=n[l],s=l===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",h=aa({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},c);if(!h)return null;Object.assign(r,h.params);let m=a.route;o.push({params:r,pathname:Tt([i,h.pathname]),pathnameBase:Sm(Tt([i,h.pathnameBase])),route:m}),h.pathnameBase!=="/"&&(i=Tt([i,h.pathnameBase]))}return o}function aa(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=vm(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,m)=>{let{paramName:g,isOptional:w}=h;if(g==="*"){let v=a[m]||"";l=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const x=a[m];return w&&!x?c[g]=void 0:c[g]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:l,pattern:e}}function vm(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ss(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function ym(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ss(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Rn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function xm(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Jt(e):e;return{pathname:n?n.startsWith("/")?n:wm(n,t):t,search:Cm(r),hash:jm(i)}}function wm(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function nl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function km(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function sf(e,t){let n=km(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function uf(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Jt(e):(i=jr({},e),Z(!i.pathname||!i.pathname.includes("?"),nl("?","pathname","search",i)),Z(!i.pathname||!i.pathname.includes("#"),nl("#","pathname","hash",i)),Z(!i.search||!i.search.includes("#"),nl("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,a;if(l==null)a=n;else{let m=t.length-1;if(!r&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}a=m>=0?t[m]:"/"}let s=xm(i,a),c=l&&l!=="/"&&l.endsWith("/"),h=(o||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||h)&&(s.pathname+="/"),s}const Tt=e=>e.join("/").replace(/\/\/+/g,"/"),Sm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Cm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,jm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,cf=["post","put","patch","delete"];new Set(cf);const Em=["get",...cf];new Set(Em);/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Er(){return Er=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Er.apply(this,arguments)}const wo=_.createContext(null),Pm=_.createContext(null),Mt=_.createContext(null),ko=_.createContext(null),qt=_.createContext({outlet:null,matches:[],isDataRoute:!1});function _m(e,t){let{relative:n}=t===void 0?{}:t;Ir()||Z(!1);let{basename:r,navigator:i}=_.useContext(Mt),{hash:o,pathname:l,search:a}=So(e,{relative:n}),s=l;return r!=="/"&&(s=l==="/"?r:Tt([r,l])),i.createHref({pathname:s,search:a,hash:o})}function Ir(){return _.useContext(ko)!=null}function ft(){return Ir()||Z(!1),_.useContext(ko).location}function df(e){_.useContext(Mt).static||_.useLayoutEffect(e)}function Nm(){let{isDataRoute:e}=_.useContext(qt);return e?$m():Tm()}function Tm(){Ir()||Z(!1);let e=_.useContext(wo),{basename:t,future:n,navigator:r}=_.useContext(Mt),{matches:i}=_.useContext(qt),{pathname:o}=ft(),l=JSON.stringify(sf(i,n.v7_relativeSplatPath)),a=_.useRef(!1);return df(()=>{a.current=!0}),_.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let m=uf(c,JSON.parse(l),o,h.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Tt([t,m.pathname])),(h.replace?r.replace:r.push)(m,h.state,h)},[t,r,l,o,e])}const Lm=_.createContext(null);function Rm(e){let t=_.useContext(qt).outlet;return t&&_.createElement(Lm.Provider,{value:e},t)}function So(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=_.useContext(Mt),{matches:i}=_.useContext(qt),{pathname:o}=ft(),l=JSON.stringify(sf(i,r.v7_relativeSplatPath));return _.useMemo(()=>uf(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function zm(e,t){return Om(e,t)}function Om(e,t,n,r){Ir()||Z(!1);let{navigator:i}=_.useContext(Mt),{matches:o}=_.useContext(qt),l=o[o.length-1],a=l?l.params:{};l&&l.pathname;let s=l?l.pathnameBase:"/";l&&l.route;let c=ft(),h;if(t){var m;let C=typeof t=="string"?Jt(t):t;s==="/"||(m=C.pathname)!=null&&m.startsWith(s)||Z(!1),h=C}else h=c;let g=h.pathname||"/",w=g;if(s!=="/"){let C=s.replace(/^\//,"").split("/");w="/"+g.replace(/^\//,"").split("/").slice(C.length).join("/")}let x=lm(e,{pathname:w}),v=Mm(x&&x.map(C=>Object.assign({},C,{params:Object.assign({},a,C.params),pathname:Tt([s,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?s:Tt([s,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),o,n);return t&&v?_.createElement(ko.Provider,{value:{location:Er({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:wt.Pop}},v):v}function Im(e){let{routeContext:t,match:n,children:r}=e,i=_.useContext(wo);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(qt.Provider,{value:t},r)}function Mm(e,t,n,r){var i;if(t===void 0&&(t=[]),n=null,e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let l=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let s=l.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id])!==void 0);s>=0||Z(!1),l=l.slice(0,Math.min(l.length,s+1))}return l.reduceRight((s,c,h)=>{let m=t.concat(l.slice(0,h+1));return(()=>{let w;return c.route.Component?w=_.createElement(c.route.Component,null):c.route.element?w=c.route.element:w=s,_.createElement(Im,{match:c,routeContext:{outlet:s,matches:m,isDataRoute:n!=null},children:w})})()},null)}var ff=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ff||{}),pf=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(pf||{});function Fm(e){let t=_.useContext(wo);return t||Z(!1),t}function Dm(e){let t=_.useContext(qt);return t||Z(!1),t}function Am(e){let t=Dm(),n=t.matches[t.matches.length-1];return n.route.id||Z(!1),n.route.id}function $m(){let{router:e}=Fm(ff.UseNavigateStable),t=Am(pf.UseNavigateStable),n=_.useRef(!1);return df(()=>{n.current=!0}),_.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Er({fromRouteId:t},o)))},[e,t])}function Um(e){return Rm(e.context)}function sa(e){Z(!1)}function Bm(e){let{basename:t="/",children:n=null,location:r,navigationType:i=wt.Pop,navigator:o,static:l=!1,future:a}=e;Ir()&&Z(!1);let s=t.replace(/^\/*/,"/"),c=_.useMemo(()=>({basename:s,navigator:o,static:l,future:Er({v7_relativeSplatPath:!1},a)}),[s,a,o,l]);typeof r=="string"&&(r=Jt(r));let{pathname:h="/",search:m="",hash:g="",state:w=null,key:x="default"}=r,v=_.useMemo(()=>{let C=Rn(h,s);return C==null?null:{location:{pathname:C,search:m,hash:g,state:w,key:x},navigationType:i}},[s,h,m,g,w,x,i]);return v==null?null:_.createElement(Mt.Provider,{value:c},_.createElement(ko.Provider,{children:n,value:v}))}function Wm(e){let{children:t,location:n}=e;return zm(ua(t),n)}new Promise(()=>{});function ua(e,t){t===void 0&&(t=[]);let n=[];return _.Children.forEach(e,(r,i)=>{if(!_.isValidElement(r))return;let o=[...t,i];if(r.type===_.Fragment){n.push.apply(n,ua(r.props.children,o));return}r.type!==sa&&Z(!1),!r.props.index||!r.props.children||Z(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=ua(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function to(){return to=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},to.apply(this,arguments)}function hf(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Hm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Vm(e,t){return e.button===0&&(!t||t==="_self")&&!Hm(e)}const Qm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],bm=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],Km="6";try{window.__reactRouterVersion=Km}catch{}const Ym=_.createContext({isTransitioning:!1}),Xm="startTransition",Pu=fl[Xm];function Gm(e){let{basename:t,children:n,future:r,window:i}=e,o=_.useRef();o.current==null&&(o.current=rm({window:i,v5Compat:!0}));let l=o.current,[a,s]=_.useState({action:l.action,location:l.location}),{v7_startTransition:c}=r||{},h=_.useCallback(m=>{c&&Pu?Pu(()=>s(m)):s(m)},[s,c]);return _.useLayoutEffect(()=>l.listen(h),[l,h]),_.createElement(Bm,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l,future:r})}const Zm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Jm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qm=_.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:a,target:s,to:c,preventScrollReset:h,unstable_viewTransition:m}=t,g=hf(t,Qm),{basename:w}=_.useContext(Mt),x,v=!1;if(typeof c=="string"&&Jm.test(c)&&(x=c,Zm))try{let p=new URL(window.location.href),y=c.startsWith("//")?new URL(p.protocol+c):new URL(c),E=Rn(y.pathname,w);y.origin===p.origin&&E!=null?c=E+y.search+y.hash:v=!0}catch{}let C=_m(c,{relative:i}),f=t0(c,{replace:l,state:a,target:s,preventScrollReset:h,relative:i,unstable_viewTransition:m});function d(p){r&&r(p),p.defaultPrevented||f(p)}return _.createElement("a",to({},g,{href:x||C,onClick:v||o?r:d,ref:n,target:s}))}),Co=_.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:l=!1,style:a,to:s,unstable_viewTransition:c,children:h}=t,m=hf(t,bm),g=So(s,{relative:m.relative}),w=ft(),x=_.useContext(Pm),{navigator:v,basename:C}=_.useContext(Mt),f=x!=null&&n0(g)&&c===!0,d=v.encodeLocation?v.encodeLocation(g).pathname:g.pathname,p=w.pathname,y=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;i||(p=p.toLowerCase(),y=y?y.toLowerCase():null,d=d.toLowerCase()),y&&C&&(y=Rn(y,C)||y);const E=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let P=p===d||!l&&p.startsWith(d)&&p.charAt(E)==="/",j=y!=null&&(y===d||!l&&y.startsWith(d)&&y.charAt(d.length)==="/"),L={isActive:P,isPending:j,isTransitioning:f},U=P?r:void 0,R;typeof o=="function"?R=o(L):R=[o,P?"active":null,j?"pending":null,f?"transitioning":null].filter(Boolean).join(" ");let _e=typeof a=="function"?a(L):a;return _.createElement(qm,to({},m,{"aria-current":U,className:R,ref:n,style:_e,to:s,unstable_viewTransition:c}),typeof h=="function"?h(L):h)});var ca;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ca||(ca={}));var _u;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(_u||(_u={}));function e0(e){let t=_.useContext(wo);return t||Z(!1),t}function t0(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:a}=t===void 0?{}:t,s=Nm(),c=ft(),h=So(e,{relative:l});return _.useCallback(m=>{if(Vm(m,n)){m.preventDefault();let g=r!==void 0?r:eo(c)===eo(h);s(e,{replace:g,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:a})}},[c,s,h,r,i,n,e,o,l,a])}function n0(e,t){t={};let n=_.useContext(Ym);n==null&&Z(!1);let{basename:r}=e0(ca.useViewTransitionState),i=So(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=Rn(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=Rn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return aa(i.pathname,l)!=null||aa(i.pathname,o)!=null}const Nu={HOME:"/",PORTFOLIO:"/portfolio"};function da(){return da=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},da.apply(this,arguments)}function mf(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var r0=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,i0=mf(function(e){return r0.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function o0(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function l0(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var a0=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(l0(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=o0(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),he="-ms-",no="-moz-",D="-webkit-",gf="comm",us="rule",cs="decl",s0="@import",vf="@keyframes",u0="@layer",c0=Math.abs,jo=String.fromCharCode,d0=Object.assign;function f0(e,t){return le(e,0)^45?(((t<<2^le(e,0))<<2^le(e,1))<<2^le(e,2))<<2^le(e,3):0}function yf(e){return e.trim()}function p0(e,t){return(e=t.exec(e))?e[0]:e}function A(e,t,n){return e.replace(t,n)}function fa(e,t){return e.indexOf(t)}function le(e,t){return e.charCodeAt(t)|0}function Pr(e,t,n){return e.slice(t,n)}function Ge(e){return e.length}function ds(e){return e.length}function ti(e,t){return t.push(e),e}function h0(e,t){return e.map(t).join("")}var Eo=1,zn=1,xf=0,Pe=0,J=0,Fn="";function Po(e,t,n,r,i,o,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Eo,column:zn,length:l,return:""}}function Kn(e,t){return d0(Po("",null,null,"",null,null,0),e,{length:-e.length},t)}function m0(){return J}function g0(){return J=Pe>0?le(Fn,--Pe):0,zn--,J===10&&(zn=1,Eo--),J}function Re(){return J=Pe<xf?le(Fn,Pe++):0,zn++,J===10&&(zn=1,Eo++),J}function tt(){return le(Fn,Pe)}function _i(){return Pe}function Mr(e,t){return Pr(Fn,e,t)}function _r(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function wf(e){return Eo=zn=1,xf=Ge(Fn=e),Pe=0,[]}function kf(e){return Fn="",e}function Ni(e){return yf(Mr(Pe-1,pa(e===91?e+2:e===40?e+1:e)))}function v0(e){for(;(J=tt())&&J<33;)Re();return _r(e)>2||_r(J)>3?"":" "}function y0(e,t){for(;--t&&Re()&&!(J<48||J>102||J>57&&J<65||J>70&&J<97););return Mr(e,_i()+(t<6&&tt()==32&&Re()==32))}function pa(e){for(;Re();)switch(J){case e:return Pe;case 34:case 39:e!==34&&e!==39&&pa(J);break;case 40:e===41&&pa(e);break;case 92:Re();break}return Pe}function x0(e,t){for(;Re()&&e+J!==57;)if(e+J===84&&tt()===47)break;return"/*"+Mr(t,Pe-1)+"*"+jo(e===47?e:Re())}function w0(e){for(;!_r(tt());)Re();return Mr(e,Pe)}function k0(e){return kf(Ti("",null,null,null,[""],e=wf(e),0,[0],e))}function Ti(e,t,n,r,i,o,l,a,s){for(var c=0,h=0,m=l,g=0,w=0,x=0,v=1,C=1,f=1,d=0,p="",y=i,E=o,P=r,j=p;C;)switch(x=d,d=Re()){case 40:if(x!=108&&le(j,m-1)==58){fa(j+=A(Ni(d),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:j+=Ni(d);break;case 9:case 10:case 13:case 32:j+=v0(x);break;case 92:j+=y0(_i()-1,7);continue;case 47:switch(tt()){case 42:case 47:ti(S0(x0(Re(),_i()),t,n),s);break;default:j+="/"}break;case 123*v:a[c++]=Ge(j)*f;case 125*v:case 59:case 0:switch(d){case 0:case 125:C=0;case 59+h:f==-1&&(j=A(j,/\f/g,"")),w>0&&Ge(j)-m&&ti(w>32?Lu(j+";",r,n,m-1):Lu(A(j," ","")+";",r,n,m-2),s);break;case 59:j+=";";default:if(ti(P=Tu(j,t,n,c,h,i,a,p,y=[],E=[],m),o),d===123)if(h===0)Ti(j,t,P,P,y,o,m,a,E);else switch(g===99&&le(j,3)===110?100:g){case 100:case 108:case 109:case 115:Ti(e,P,P,r&&ti(Tu(e,P,P,0,0,i,a,p,i,y=[],m),E),i,E,m,a,r?y:E);break;default:Ti(j,P,P,P,[""],E,0,a,E)}}c=h=w=0,v=f=1,p=j="",m=l;break;case 58:m=1+Ge(j),w=x;default:if(v<1){if(d==123)--v;else if(d==125&&v++==0&&g0()==125)continue}switch(j+=jo(d),d*v){case 38:f=h>0?1:(j+="\f",-1);break;case 44:a[c++]=(Ge(j)-1)*f,f=1;break;case 64:tt()===45&&(j+=Ni(Re())),g=tt(),h=m=Ge(p=j+=w0(_i())),d++;break;case 45:x===45&&Ge(j)==2&&(v=0)}}return o}function Tu(e,t,n,r,i,o,l,a,s,c,h){for(var m=i-1,g=i===0?o:[""],w=ds(g),x=0,v=0,C=0;x<r;++x)for(var f=0,d=Pr(e,m+1,m=c0(v=l[x])),p=e;f<w;++f)(p=yf(v>0?g[f]+" "+d:A(d,/&\f/g,g[f])))&&(s[C++]=p);return Po(e,t,n,i===0?us:a,s,c,h)}function S0(e,t,n){return Po(e,t,n,gf,jo(m0()),Pr(e,2,-2),0)}function Lu(e,t,n,r){return Po(e,t,n,cs,Pr(e,0,r),Pr(e,r+1,-1),r)}function Cn(e,t){for(var n="",r=ds(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function C0(e,t,n,r){switch(e.type){case u0:if(e.children.length)break;case s0:case cs:return e.return=e.return||e.value;case gf:return"";case vf:return e.return=e.value+"{"+Cn(e.children,r)+"}";case us:e.value=e.props.join(",")}return Ge(n=Cn(e.children,r))?e.return=e.value+"{"+n+"}":""}function j0(e){var t=ds(e);return function(n,r,i,o){for(var l="",a=0;a<t;a++)l+=e[a](n,r,i,o)||"";return l}}function E0(e){return function(t){t.root||(t=t.return)&&e(t)}}var P0=function(t,n,r){for(var i=0,o=0;i=o,o=tt(),i===38&&o===12&&(n[r]=1),!_r(o);)Re();return Mr(t,Pe)},_0=function(t,n){var r=-1,i=44;do switch(_r(i)){case 0:i===38&&tt()===12&&(n[r]=1),t[r]+=P0(Pe-1,n,r);break;case 2:t[r]+=Ni(i);break;case 4:if(i===44){t[++r]=tt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=jo(i)}while(i=Re());return t},N0=function(t,n){return kf(_0(wf(t),n))},Ru=new WeakMap,T0=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Ru.get(r))&&!i){Ru.set(t,!0);for(var o=[],l=N0(n,o),a=r.props,s=0,c=0;s<l.length;s++)for(var h=0;h<a.length;h++,c++)t.props[c]=o[s]?l[s].replace(/&\f/g,a[h]):a[h]+" "+l[s]}}},L0=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Sf(e,t){switch(f0(e,t)){case 5103:return D+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return D+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return D+e+no+e+he+e+e;case 6828:case 4268:return D+e+he+e+e;case 6165:return D+e+he+"flex-"+e+e;case 5187:return D+e+A(e,/(\w+).+(:[^]+)/,D+"box-$1$2"+he+"flex-$1$2")+e;case 5443:return D+e+he+"flex-item-"+A(e,/flex-|-self/,"")+e;case 4675:return D+e+he+"flex-line-pack"+A(e,/align-content|flex-|-self/,"")+e;case 5548:return D+e+he+A(e,"shrink","negative")+e;case 5292:return D+e+he+A(e,"basis","preferred-size")+e;case 6060:return D+"box-"+A(e,"-grow","")+D+e+he+A(e,"grow","positive")+e;case 4554:return D+A(e,/([^-])(transform)/g,"$1"+D+"$2")+e;case 6187:return A(A(A(e,/(zoom-|grab)/,D+"$1"),/(image-set)/,D+"$1"),e,"")+e;case 5495:case 3959:return A(e,/(image-set\([^]*)/,D+"$1$`$1");case 4968:return A(A(e,/(.+:)(flex-)?(.*)/,D+"box-pack:$3"+he+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+D+e+e;case 4095:case 3583:case 4068:case 2532:return A(e,/(.+)-inline(.+)/,D+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ge(e)-1-t>6)switch(le(e,t+1)){case 109:if(le(e,t+4)!==45)break;case 102:return A(e,/(.+:)(.+)-([^]+)/,"$1"+D+"$2-$3$1"+no+(le(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~fa(e,"stretch")?Sf(A(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(le(e,t+1)!==115)break;case 6444:switch(le(e,Ge(e)-3-(~fa(e,"!important")&&10))){case 107:return A(e,":",":"+D)+e;case 101:return A(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+D+(le(e,14)===45?"inline-":"")+"box$3$1"+D+"$2$3$1"+he+"$2box$3")+e}break;case 5936:switch(le(e,t+11)){case 114:return D+e+he+A(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return D+e+he+A(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return D+e+he+A(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return D+e+he+e+e}return e}var R0=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case cs:t.return=Sf(t.value,t.length);break;case vf:return Cn([Kn(t,{value:A(t.value,"@","@"+D)})],i);case us:if(t.length)return h0(t.props,function(o){switch(p0(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Cn([Kn(t,{props:[A(o,/:(read-\w+)/,":"+no+"$1")]})],i);case"::placeholder":return Cn([Kn(t,{props:[A(o,/:(plac\w+)/,":"+D+"input-$1")]}),Kn(t,{props:[A(o,/:(plac\w+)/,":"+no+"$1")]}),Kn(t,{props:[A(o,/:(plac\w+)/,he+"input-$1")]})],i)}return""})}},z0=[R0],O0=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var C=v.getAttribute("data-emotion");C.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=t.stylisPlugins||z0,o={},l,a=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var C=v.getAttribute("data-emotion").split(" "),f=1;f<C.length;f++)o[C[f]]=!0;a.push(v)});var s,c=[T0,L0];{var h,m=[C0,E0(function(v){h.insert(v)})],g=j0(c.concat(i,m)),w=function(C){return Cn(k0(C),g)};s=function(C,f,d,p){h=d,w(C?C+"{"+f.styles+"}":f.styles),p&&(x.inserted[f.name]=!0)}}var x={key:n,sheet:new a0({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return x.sheet.hydrate(a),x},I0=!0;function M0(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Cf=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||I0===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},F0=function(t,n,r){Cf(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function D0(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var A0={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},$0=/[A-Z]|^ms/g,U0=/_EMO_([^_]+?)_([^]*?)_EMO_/g,jf=function(t){return t.charCodeAt(1)===45},zu=function(t){return t!=null&&typeof t!="boolean"},rl=mf(function(e){return jf(e)?e:e.replace($0,"-$&").toLowerCase()}),Ou=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(U0,function(r,i,o){return Ze={name:i,styles:o,next:Ze},i})}return A0[t]!==1&&!jf(t)&&typeof n=="number"&&n!==0?n+"px":n};function Nr(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Ze={name:n.name,styles:n.styles,next:Ze},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Ze={name:r.name,styles:r.styles,next:Ze},r=r.next;var i=n.styles+";";return i}return B0(e,t,n)}case"function":{if(e!==void 0){var o=Ze,l=n(e);return Ze=o,Nr(e,t,l)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function B0(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Nr(e,t,n[i])+";";else for(var o in n){var l=n[o];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=o+"{"+t[l]+"}":zu(l)&&(r+=rl(o)+":"+Ou(o,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var a=0;a<l.length;a++)zu(l[a])&&(r+=rl(o)+":"+Ou(o,l[a])+";");else{var s=Nr(e,t,l);switch(o){case"animation":case"animationName":{r+=rl(o)+":"+s+";";break}default:r+=o+"{"+s+"}"}}}return r}var Iu=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Ze,W0=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";Ze=void 0;var l=t[0];l==null||l.raw===void 0?(i=!1,o+=Nr(r,n,l)):o+=l[0];for(var a=1;a<t.length;a++)o+=Nr(r,n,t[a]),i&&(o+=l[a]);Iu.lastIndex=0;for(var s="",c;(c=Iu.exec(o))!==null;)s+="-"+c[1];var h=D0(o)+s;return{name:h,styles:o,next:Ze}},H0=function(t){return t()},V0=fl.useInsertionEffect?fl.useInsertionEffect:!1,Q0=V0||H0,Ef=_.createContext(typeof HTMLElement<"u"?O0({key:"css"}):null);Ef.Provider;var b0=function(t){return _.forwardRef(function(n,r){var i=_.useContext(Ef);return t(n,i,r)})},K0=_.createContext({}),Y0=i0,X0=function(t){return t!=="theme"},Mu=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?Y0:X0},Fu=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(l){return t.__emotion_forwardProp(l)&&o(l)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},G0=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Cf(n,r,i),Q0(function(){return F0(n,r,i)}),null},Z0=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,l;n!==void 0&&(o=n.label,l=n.target);var a=Fu(t,n,r),s=a||Mu(i),c=!s("as");return function(){var h=arguments,m=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&m.push("label:"+o+";"),h[0]==null||h[0].raw===void 0)m.push.apply(m,h);else{m.push(h[0][0]);for(var g=h.length,w=1;w<g;w++)m.push(h[w],h[0][w])}var x=b0(function(v,C,f){var d=c&&v.as||i,p="",y=[],E=v;if(v.theme==null){E={};for(var P in v)E[P]=v[P];E.theme=_.useContext(K0)}typeof v.className=="string"?p=M0(C.registered,y,v.className):v.className!=null&&(p=v.className+" ");var j=W0(m.concat(y),C.registered,E);p+=C.key+"-"+j.name,l!==void 0&&(p+=" "+l);var L=c&&a===void 0?Mu(d):s,U={};for(var R in v)c&&R==="as"||L(R)&&(U[R]=v[R]);return U.className=p,U.ref=f,_.createElement(_.Fragment,null,_.createElement(G0,{cache:C,serialized:j,isStringTag:typeof d=="string"}),_.createElement(d,U))});return x.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",x.defaultProps=t.defaultProps,x.__emotion_real=x,x.__emotion_base=i,x.__emotion_styles=m,x.__emotion_forwardProp=a,Object.defineProperty(x,"toString",{value:function(){return"."+l}}),x.withComponent=function(v,C){return e(v,da({},n,C,{shouldForwardProp:Fu(x,C,!0)})).apply(void 0,m)},x}},J0=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],k=Z0.bind();J0.forEach(function(e){k[e]=k(e)});const q0=k.header`
    background-color: var(--body-background-color);
    border-bottom: 1px solid;
    color: #ececec;
    padding: 0;
`,eg=k.div`
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
`,tg=k(Co)`
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
`,ng=k.span`
    color: var(--beckground-color);
`,rg=k.div`
    display: flex;
    align-items: center;
    padding: 0 15px;
    @media(max-width: 767px) {
        margin-top: 16px;
        justify-content: space-between;
        margin-bottom: 16px;
    }

`,ig=k.button`
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

`,og=k.svg`
`,lg=k.div`
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

`,ag=k.div`
    opacity: 1;
    visibility: visible;
    pointer - events: auto;

`,sg=k.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100 %;
`,ug=k.div`
    margin-bottom: auto;
`,cg=k.button`
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

`,dg=k.svg`
    width: 18.67px;
    height: 18.67px;

`,M="/goit-markup-react/assets/icons-WWKJvoXN.svg",Pf=()=>u.jsxs(u.Fragment,{children:[u.jsx(ig,{type:"button",id:"js-open-menu",children:u.jsx(og,{width:"24",height:"12",children:u.jsx("use",{href:M+"#icon-menu"})})}),u.jsx(lg,{children:u.jsx(ag,{children:u.jsx(sg,{children:u.jsx(ug,{children:u.jsx(cg,{children:u.jsx(dg,{children:u.jsx("use",{href:M+"#icon-close-menu"})})})})})})})]}),fg=k.ul`
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
`,il=k.li`
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
`,ol=k(Co)`
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

`,pg=k.a`

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
`;k.div`
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
`;k.li`
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

`;k.a`
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
`;const hg=()=>{const e=ft();return u.jsxs(fg,{children:[u.jsx(il,{children:u.jsx(ol,{to:"/",state:{from:e},children:u.jsx(pg,{children:"Студія"})})}),u.jsx(il,{children:u.jsx(ol,{to:"/portfolio",state:{from:e},children:"Портфоліо"})}),u.jsx(il,{children:u.jsx(ol,{href:"#",children:"Контакти"})})]})},mg=k.ul`
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
`,Du=k.li`
    display: flex;
    align-content: center;

`,Au=k.a`
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
`,$u=k.svg`
    margin-right: 10px;
}
`,_f=()=>u.jsxs(mg,{children:[u.jsx(Du,{children:u.jsxs(Au,{href:"mailto:info@devstudio.com",children:[u.jsx($u,{width:"16",height:"12",children:u.jsx("use",{href:M+"#poshta"})}),"info@devstudio.com"]})}),u.jsx(Du,{children:u.jsxs(Au,{href:"tel:+380961111111",children:[u.jsx($u,{width:"12",height:"16",children:u.jsx("use",{href:M+"#smartphone"})}),"+38 096 111 11 11"]})})]}),gg=()=>{const e=ft();return u.jsx(q0,{children:u.jsx(eg,{children:u.jsxs(rg,{children:[u.jsxs(tg,{to:"/",state:{from:e},lang:"en","data-wow-offset":"100",children:[u.jsx(ng,{children:"Web"}),"Studio"]}),u.jsxs(u.Fragment,{children:[" ",u.jsx(hg,{})," ",u.jsx(_f,{})]})," ",u.jsx(Pf,{id:"js-menu-container"})]})})})},vg="/goit-markup-react/assets/%D1%81oworker-mobile-DkjrP_lB.jpg",yg="/goit-markup-react/assets/%D1%81oworker-mobile@2x-CfTHwFb7.jpg",xg="/goit-markup-react/assets/%D1%81oworker-tablet-DNCU7IaL.jpg",wg="/goit-markup-react/assets/%D1%81oworker-tablet@2x-CltOuUgI.jpg",kg="/goit-markup-react/assets/%D1%81oworker-CBK_fIvu.jpg",Sg="/goit-markup-react/assets/%D1%81oworker@2x-DEOHsqO2.jpg",Cg=k.section`
  padding-top: 118px;
  padding-bottom: 118px;
  background-color: var(--footer-bacground-color);
  text-align: center;
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${vg});
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
      url(${xg});
  }

  @media screen and (min-width: 1200px) {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${kg});
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
      url(${yg});
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 768px),
    screen and (min-resolution: 192dpi) and (min-width: 768px),
    screen and (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${wg});
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1200px),
    screen and (min-resolution: 192dpi) and (min-width: 1200px),
    screen and (min-resolution: 2dppx) and (min-width: 1200px) {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${Sg});
  }
`,jg=k.div`
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
`,Eg=k.h1`
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
`,Pg=k.button`
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
`,_g=()=>u.jsx(Cg,{children:u.jsxs(jg,{children:[u.jsxs(Eg,{children:["Ефективні рішення для ",u.jsx("br",{}),"вашого бізнесу"]}),u.jsx(Pg,{type:"button","data-modal-open":!0,children:"Замовити послугу"})]})}),Ng=k.section`
    padding-top: 60px;
        padding-bottom: 60px;
    @media (min-width:1200px) {
            padding-top: 94px;
            padding-bottom: 94px;
        }
`,Tg=k.div`
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
`,Lg=k.h2`
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
`,Rg=k.ul`
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

`,ni=k.li`
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
`,ri=k.div`
    height: 120px;
    margin-bottom: 30px;
    background-color: var(--icone-bg-color);
    display: flex;
    justify-content: center;
    align-items: center;

`,ii=k.svg`
 background - color: var(--icone-bg-color);

`,oi=k.h3`
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
`,li=k.p`
    font-size: 14px;
    line-height: 1.71;
    letter-spacing: 0.03em;
    text-decoration: none;
    color: var(--text-color-p);
    margin-top: 0;
    
`,zg=()=>u.jsx(Ng,{children:u.jsxs(Tg,{children:[u.jsx(Lg,{children:"Опис діятельності"}),u.jsxs(Rg,{children:[u.jsxs(ni,{children:[u.jsx(ri,{children:u.jsx(ii,{width:"70",height:"70",children:u.jsx("use",{href:M+"#antenna"})})}),u.jsx(oi,{children:"УВАГА ДО ДЕТАЛЕЙ"}),u.jsx(li,{children:"Ідейні міркування, і навіть початок повсякденної роботи з формування позиції."})]}),u.jsxs(ni,{children:[u.jsx(ri,{children:u.jsx(ii,{width:"70",height:"70",children:u.jsx("use",{href:M+"#clock"})})}),u.jsx(oi,{children:"ПУНКТУАЛЬНІСТЬ"}),u.jsx(li,{children:"Завдання організації, особливо рамки і місце навчання кадрів тягне у себе."})]}),u.jsxs(ni,{children:[u.jsx(ri,{children:u.jsx(ii,{width:"70",height:"70",children:u.jsx("use",{href:M+"#diagram"})})}),u.jsx(oi,{children:"ПЛАНУВАННЯ"}),u.jsx(li,{children:"Так само консультація з широким активом значною мірою зумовлює."})]}),u.jsxs(ni,{children:[u.jsx(ri,{children:u.jsx(ii,{width:"70",height:"70",children:u.jsx("use",{href:M+"#astronaut"})})}),u.jsx(oi,{children:"СУЧАСНІ ТЕХНОЛОГІЇ"}),u.jsx(li,{children:"Значимість цих проблем настільки очевидна, що реалізація планових завдань."})]})]})]})}),Og=k.section`

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
`,Ig=k.div`
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
`,Mg=k.h2`
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
`,Fg=k.ul`
  display: flex;
  gap: 30px;
  align-content: center;
  justify-content: center;

`,ll=k.li`
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
`,al=k.img`
  display: flex;
`,sl=k.p`
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
`,Uu="/goit-markup-react/assets/photo_2022-07-14_23-06-50-w-9GE9pw.jpg",Bu="/goit-markup-react/assets/photo_2022-07-14_23-08-23-ChSN16Q0.jpg",Wu="/goit-markup-react/assets/photo_2022-07-14_23-08-29-DEV7w-ry.jpg",Dg=()=>u.jsx(Og,{children:u.jsxs(Ig,{children:[u.jsx(Mg,{children:"Чим ми займаємося"}),u.jsxs(Fg,{children:[u.jsxs(ll,{children:[u.jsx("a",{href:Uu,children:u.jsx(al,{src:Uu,alt:"photo",width:"370",height:"294"})}),u.jsx(sl,{children:"Десктопні додатки"})]}),u.jsxs(ll,{children:[u.jsx("a",{href:Bu,children:u.jsx(al,{src:Bu,alt:"photo",width:"370",height:"294"})}),u.jsx(sl,{children:"Мобільні додатки"})]}),u.jsxs(ll,{children:[u.jsx("a",{href:Wu,children:u.jsx(al,{src:Wu,alt:"photo",width:"370",height:"294"})}),u.jsx(sl,{children:"Дизайнерські рішення"})]})]})]})}),Ag=k.section`
    background-color: var(--teams-bacground-color);
    align-items: center;
    padding-top: 60px;
        // padding-bottom: 60px;
            padding-bottom: 0px;

    
    @media (min-width:1200px) {
            padding-top: 94px;
            padding-bottom: 94px;
            
        }
`,$g=k.div`
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
`,Ug=k.h2`
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
`,Bg=k.ul`
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
`,ai=k.li`
        @media screen and (min-width:768px) {
background-color: var(--body-background-color);
        @media screen and (min-width:1200px) {
background-color: var(--body-background-color);
width: 270px;
}
`,si=k.div`
  display: block;
  padding: 30px 0;
  margin-top: 0;
  margin-bottom: 0;
  outline: 2px solid var(--technical-color);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 4px 4px;
`,ui=k.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.18;
  text-align: center;
  letter-spacing: 0.03em;
  color: var(--text-color);
  margin-top: 0;
  margin-bottom: 10px;
`,ci=k.p`
  font-size: 16px;
  line-height: 1.18;
  text-align: center;
  letter-spacing: 0.03em;
  color: var(--text-color);
  margin-top: 0;
  font-size: 16px;
  color: var(--text-color-p);
`,di=k.ul`
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-around;
  justify-content: center;
  gap: 10px;
  margin-top: 16px;
  list-style: none;
  padding: 0;
  // margin: 0
`,de=k.li`
  box-sizing: border-box;
  outline: 2px solid var(--technical-color);
  transition: background-color 250ms var(--timing-functione),
    fill 250ms var(--timing-functione);
`,fe=k.a`
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
`,pe=k.svg`
  &:hover,
  &:focus {
    fill: var(--body-background-color);
  }
`,Wg="/goit-markup-react/assets/product-designer-mobile-CR9XjxZR.jpg",Hg="/goit-markup-react/assets/frontend-developer-mobile-CKsiOpXf.jpg",Vg="/goit-markup-react/assets/marketing-mobile-D4eyMM5O.jpg",Qg="/goit-markup-react/assets/ui-mobile-CkzJuxso.jpg",bg=()=>u.jsx(Ag,{children:u.jsxs($g,{class:"animate__animated animate__fadeInUp wow","data-wow-offset":"100",children:[u.jsx(Ug,{children:"Наша команда"}),u.jsxs(Bg,{children:[u.jsxs(ai,{children:[u.jsx("img",{src:Wg,alt:"mikola-tarasov-photo"}),u.jsxs(si,{children:[u.jsx(ui,{children:"Ігор Дем`яненко"}),u.jsx(ci,{lang:"en",children:"Product Designer"}),u.jsxs(di,{children:[u.jsx(de,{children:u.jsx(fe,{children:u.jsx(pe,{"aria-label":"іконка інстаграм",width:"20",height:"20",children:u.jsx("use",{href:M+"#icon-instagram"})})})}),u.jsx(de,{children:u.jsx(fe,{children:u.jsx(pe,{"aria-label":"іконка твітер",class:"icones",width:"20",height:"20",children:u.jsx("use",{href:M+"#icon-tviter"})})})}),u.jsx(de,{children:u.jsx(fe,{children:u.jsx(pe,{"aria-label":"іконка феїсбук",class:"icones",width:"20",height:"20",children:u.jsx("use",{href:M+"#icon-facebook"})})})}),u.jsx(de,{children:u.jsx(fe,{children:u.jsx(pe,{"aria-label":"іконка линкедін",class:"icones",width:"20",height:"20",children:u.jsx("use",{href:M+"#icon-linkedin"})})})})]})]})]}),u.jsxs(ai,{children:[u.jsx("img",{src:Hg,alt:"mikola-tarasov-photo"}),u.jsxs(si,{children:[u.jsx(ui,{children:"Ольга Рєпіна"}),u.jsx(ci,{lang:"en",children:"Frontend Developer"}),u.jsxs(di,{children:[u.jsx(de,{children:u.jsx(fe,{children:u.jsx(pe,{"aria-label":"іконка інстаграм",width:"20",height:"20",children:u.jsx("use",{href:M+"#icon-instagram"})})})}),u.jsx(de,{children:u.jsx(fe,{children:u.jsx(pe,{"aria-label":"іконка твітер",class:"icones",width:"20",height:"20",children:u.jsx("use",{href:M+"#icon-tviter"})})})}),u.jsx(de,{children:u.jsx(fe,{children:u.jsx(pe,{"aria-label":"іконка феїсбук",class:"icones",width:"20",height:"20",children:u.jsx("use",{href:M+"#icon-facebook"})})})}),u.jsx(de,{children:u.jsx(fe,{children:u.jsx(pe,{"aria-label":"іконка линкедін",class:"icones",width:"20",height:"20",children:u.jsx("use",{href:M+"#icon-linkedin"})})})})]})]})]}),u.jsxs(ai,{children:[u.jsx("img",{src:Vg,alt:"mikola-tarasov-photo"}),u.jsxs(si,{children:[u.jsx(ui,{children:"Микола Тарасов"}),u.jsx(ci,{lang:"en",children:"Marketing"}),u.jsxs(di,{children:[u.jsx(de,{children:u.jsx(fe,{children:u.jsx(pe,{"aria-label":"іконка інстаграм",width:"20",height:"20",children:u.jsx("use",{href:M+"#icon-instagram"})})})}),u.jsx(de,{children:u.jsx(fe,{children:u.jsx(pe,{"aria-label":"іконка твітер",class:"icones",width:"20",height:"20",children:u.jsx("use",{href:M+"#icon-tviter"})})})}),u.jsx(de,{children:u.jsx(fe,{children:u.jsx(pe,{"aria-label":"іконка феїсбук",class:"icones",width:"20",height:"20",children:u.jsx("use",{href:M+"#icon-facebook"})})})}),u.jsx(de,{children:u.jsx(fe,{children:u.jsx(pe,{"aria-label":"іконка линкедін",class:"icones",width:"20",height:"20",children:u.jsx("use",{href:M+"#icon-linkedin"})})})})]})]})]}),u.jsxs(ai,{children:[u.jsx("img",{src:Qg,alt:"mikola-tarasov-photo"}),u.jsxs(si,{children:[u.jsx(ui,{children:"Михайло Єрмаков"}),u.jsx(ci,{lang:"en",children:"UI Designer"}),u.jsxs(di,{children:[u.jsx(de,{children:u.jsx(fe,{children:u.jsx(pe,{"aria-label":"іконка інстаграм",width:"20",height:"20",children:u.jsx("use",{href:M+"#icon-instagram"})})})}),u.jsx(de,{children:u.jsx(fe,{children:u.jsx(pe,{"aria-label":"іконка твітер",class:"icones",width:"20",height:"20",children:u.jsx("use",{href:M+"#icon-tviter"})})})}),u.jsx(de,{children:u.jsx(fe,{children:u.jsx(pe,{"aria-label":"іконка феїсбук",class:"icones",width:"20",height:"20",children:u.jsx("use",{href:M+"#icon-facebook"})})})}),u.jsx(de,{children:u.jsx(fe,{children:u.jsx(pe,{"aria-label":"іконка линкедін",class:"icones",width:"20",height:"20",children:u.jsx("use",{href:M+"#icon-linkedin"})})})})]})]})]})]})]})}),Kg=k.section`
    padding-top: 60px;
        padding-bottom: 60px;

    
        @media (min-width:1200px) {
            padding-top: 94px;
            padding-bottom: 94px;
        }
`,Yg=k.div`
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
`,Xg=k.h2`
    font-weight: 700;
    font-size: 36px;
    line-height: 1.16;
    text-align: center;
    letter-spacing: 0.03em;
    color: var(--text-color);
    margin: 0px;
    margin-bottom: 50px;
`,Gg=k.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    // column-gap: 30px;
    gap: 28px;
    list-style: none;
    padding: 0;
    margin: 0;
`,tn=k.li`
    // flex-basis: calc((100% - 30px) / 2);

        @media screen and (min-width:768px) {
            flex-basis: calc((100% - 60px) / 3);
        }

        @media screen and (min-width:1200px) {
            flex-basis: calc((100% - 150px) / 6);
        }
`,nn=k.a`
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
`,rn=k.svg`
        display: flex;
        align-self: center;
        width: 170px;
        height: 92px;
`,Zg=()=>u.jsx(Kg,{children:u.jsxs(Yg,{children:[u.jsx(Xg,{children:"Постійні клієнти"}),u.jsxs(Gg,{children:[u.jsx(tn,{children:u.jsx(nn,{children:u.jsx(rn,{"aria-label":"іконка логотип",width:"106",height:"60",children:u.jsx("use",{href:M+"#icon-Logo"})})})}),u.jsx(tn,{children:u.jsx(nn,{children:u.jsx(rn,{"aria-label":"іконка логотип",width:"106",height:"60",children:u.jsx("use",{href:M+"#icon-Logo-2"})})})}),u.jsx(tn,{children:u.jsx(nn,{children:u.jsx(rn,{"aria-label":"іконка логотип",width:"106",height:"60",children:u.jsx("use",{href:M+"#icon-Logo-3"})})})}),u.jsx(tn,{children:u.jsx(nn,{children:u.jsx(rn,{"aria-label":"іконка логотип",width:"106",height:"60",children:u.jsx("use",{href:M+"#icon-Logo-4"})})})}),u.jsx(tn,{children:u.jsx(nn,{children:u.jsx(rn,{width:"106",height:"60",children:u.jsx("use",{href:M+"#icon-Logo-5"})})})}),u.jsx(tn,{children:u.jsx(nn,{children:u.jsx(rn,{"aria-label":"іконка логотип",width:"106",height:"60",children:u.jsx("use",{href:M+"#icon-Logo-6"})})})})]})]})}),Jg=k.section`
    background: var(--footer-bacground-color);
    padding-top: 60px;
    padding-bottom: 60px;

    @media screen and (max-width:767px) {
        text-align: center;
  }
`,qg=k.div`
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
`,ev=k.div`
    background: var(--footer-bacground-color);
    padding-top: 60px;
    padding-bottom: 60px;

    @media screen and (max-width:767px) {
        text-align: center;
  }
`,tv=k.a`
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 26px;
    line-height: 1.19;
    letter-spacing: 0.03em;
    text-decoration: none;
    color: var(--beckground-color);
    display: inline-block;
    margin-bottom: 20px;
`,nv=k.span`
color: var(--body-background-color);
`,rv=k.ul`
    list-style: none;
`,ul=k.li`
    &:not(:last-child) {
    margin-bottom: 9px;
    }

`,iv=k.a`
    font-size: 14px;
    line-height: 1.7;
    font-style: normal;
    letter-spacing: 0.03em;
    text-decoration: none;
    color: var(--body-background-color);

`,Hu=k.a`
    font-size: 14px;
    line-height: 1.7;
    text-decoration: none;
    font-style: normal;
    letter-spacing: 0.03em;
    color: rgba(255, 255, 255, 0.6);

`,ov=k.div`
    @media screen and (max-width: 768px) {
        margin-bottom: 60px;
        margin-bottom: 0;
      }
  @media screen and (min-width:1200px) {
    margin-bottom: 60px;
    margin-left: 70px;
  }
`,Vu=k.h2`
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
`,lv=k.ul`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;

    @media screen and (max-width: 768px) {
        justify-content: center;
}
`,fi=k.li`
    display: flex;
`,pi=k.a`
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
`,hi=k.svg`
    background-repeat: no-repeat;
    background-size: 20px 20px;
    background-position: left, center -10px, center, right;
    background-origin: content-box;
    fill: #ffffff;
`,av=k.div`
// display: flex;

        @media screen and (min-width:1200px) {
            display: flex;
    }
`,sv=k.div`
    margin: 0;
    padding: 0;
    @media screen and (min-width:1200px) {
    margin-left: auto;
    }
`,uv=k.form`

`,cv=k.input`
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
`,dv=k.button`
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
`,fv=k.svg`
    top: 0;
    right: 0;
`,Nf=()=>u.jsx(Jg,{children:u.jsxs(qg,{children:[u.jsxs(ev,{children:[u.jsxs(tv,{href:"index.html",lang:"en",children:["Web",u.jsx(nv,{children:"Studio"})]}),u.jsx("address",{children:u.jsxs(rv,{children:[u.jsx(ul,{children:u.jsx(iv,{href:"https://goo.gl/maps/CPtrU1FHBa2aNyZL9",target:"_blank",rel:"noopener noreferrer",children:"м. Київ, пр-т Лесі Українки, 26"})}),u.jsx(ul,{children:u.jsx(Hu,{href:"mailto:info@devstudio.com",children:"info@devstudio.com"})}),u.jsx(ul,{children:u.jsx(Hu,{href:"tel:+380961111111",children:"+38 096 111 11 11"})})]})})]}),u.jsxs(ov,{children:[u.jsx(Vu,{children:"ПРИЄДНУЙТЕСЬ"}),u.jsxs(lv,{children:[u.jsx(fi,{children:u.jsx(pi,{children:u.jsx(hi,{"aria-label":"іконка інстаграм",class:"icones",width:"20",height:"20",children:u.jsx("use",{href:M+"#icon-instagram"})})})}),u.jsx(fi,{children:u.jsx(pi,{children:u.jsx(hi,{"aria-label":"іконка твітер",class:"icones",width:"20",height:"20",children:u.jsx("use",{href:M+"#icon-tviter"})})})}),u.jsx(fi,{children:u.jsx(pi,{children:u.jsx(hi,{"aria-label":"іконка феїсбук",class:"icones",width:"20",height:"20",children:u.jsx("use",{href:M+"#icon-facebook"})})})}),u.jsx(fi,{children:u.jsx(pi,{children:u.jsx(hi,{"aria-label":"іконка линкедін",class:"icones",width:"20",height:"20",children:u.jsx("use",{href:M+"#icon-linkedin"})})})})]})]}),u.jsxs(sv,{children:[u.jsx(Vu,{children:"Підпишіться на розсилку"}),u.jsx(uv,{children:u.jsxs(av,{children:[u.jsx("label",{for:"email"}),u.jsx(cv,{type:"email",name:"mail",id:"mail",placeholder:"E-mail"}),u.jsxs(dv,{type:"submit",children:["Підписатися",u.jsx(fv,{width:"24",height:"24",children:u.jsx("use",{href:M+"#icon-icon-send"})})]})]})})]})]})}),pv=()=>u.jsxs(u.Fragment,{children:[u.jsx(gg,{}),u.jsx(_g,{}),u.jsx(zg,{}),u.jsx(Dg,{}),u.jsx(bg,{}),u.jsx(Zg,{}),u.jsx(Nf,{})]}),hv=k.header`
    background-color: var(--body-background-color);
    border-bottom: 1px solid;
    color: #ececec;
    padding: 0;
`,mv=k.div`
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
`,gv=k(Co)`
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
`,vv=k.span`
    color: var(--beckground-color);
`,yv=k.div`
    display: flex;
    align-items: center;
    padding: 0 15px;
    @media(max-width: 767px) {
        margin-top: 16px;
        justify-content: space-between;
        margin-bottom: 16px;
    }

`,xv=k.ul`
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
`,cl=k.li`
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
`,dl=k(Co)`
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

`,wv=k.a`

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
`;k.div`
    display: none;
    margin-left: auto;
    list-style: none;
    padding: 0;
    margin: 0;   
`;k.li`
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

`;k.a`
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
`;const kv=()=>{const e=ft();return u.jsxs(xv,{children:[u.jsx(cl,{children:u.jsx(dl,{to:"/",state:{from:e},children:"Студія"})}),u.jsx(cl,{children:u.jsx(dl,{to:"/portfolio",state:{from:e},children:u.jsx(wv,{children:"Портфоліо"})})}),u.jsx(cl,{children:u.jsx(dl,{href:"#",children:"Контакти"})})]})},Sv=()=>{const e=ft();return u.jsx(hv,{children:u.jsx(mv,{children:u.jsxs(yv,{children:[u.jsxs(gv,{to:"/",state:{from:e},lang:"en","data-wow-offset":"100",children:[u.jsx(vv,{children:"Web"}),"Studio"]}),u.jsxs(u.Fragment,{children:[" ",u.jsx(kv,{})," ",u.jsx(_f,{})]})," ",u.jsx(Pf,{id:"js-menu-container"})]})})})},Cv=()=>u.jsxs(u.Fragment,{children:[u.jsx(Sv,{}),u.jsx(u.Fragment,{children:"ПРИВЕТ"}),u.jsx(Nf,{}),u.jsx(_.Suspense,{fallback:u.jsx("div",{children:"Loading page..."}),children:u.jsx(Um,{})})," "]}),jv=()=>u.jsx(u.Fragment,{children:u.jsxs(Wm,{children:[u.jsx(sa,{path:Nu.HOME,element:u.jsx(pv,{})}),u.jsx(sa,{path:Nu.PORTFOLIO,element:u.jsx(Cv,{})})]})});pl.createRoot(document.getElementById("root")).render(u.jsx(ec.StrictMode,{children:u.jsx(Gm,{children:u.jsx(jv,{})})}));
