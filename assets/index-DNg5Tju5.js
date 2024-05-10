function Lf(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Rf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Qu={exports:{}},io={},bu={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lr=Symbol.for("react.element"),zf=Symbol.for("react.portal"),Of=Symbol.for("react.fragment"),If=Symbol.for("react.strict_mode"),Mf=Symbol.for("react.profiler"),Ff=Symbol.for("react.provider"),Df=Symbol.for("react.context"),$f=Symbol.for("react.forward_ref"),Af=Symbol.for("react.suspense"),Uf=Symbol.for("react.memo"),Bf=Symbol.for("react.lazy"),ps=Symbol.iterator;function Wf(e){return e===null||typeof e!="object"?null:(e=ps&&e[ps]||e["@@iterator"],typeof e=="function"?e:null)}var Ku={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yu=Object.assign,Xu={};function zn(e,t,n){this.props=e,this.context=t,this.refs=Xu,this.updater=n||Ku}zn.prototype.isReactComponent={};zn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};zn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Gu(){}Gu.prototype=zn.prototype;function pa(e,t,n){this.props=e,this.context=t,this.refs=Xu,this.updater=n||Ku}var ha=pa.prototype=new Gu;ha.constructor=pa;Yu(ha,zn.prototype);ha.isPureReactComponent=!0;var hs=Array.isArray,Zu=Object.prototype.hasOwnProperty,ma={current:null},Ju={key:!0,ref:!0,__self:!0,__source:!0};function qu(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Zu.call(t,r)&&!Ju.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Lr,type:e,key:o,ref:l,props:i,_owner:ma.current}}function Hf(e,t){return{$$typeof:Lr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ga(e){return typeof e=="object"&&e!==null&&e.$$typeof===Lr}function Vf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ms=/\/+/g;function Ro(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Vf(""+e.key):t.toString(36)}function mi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Lr:case zf:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Ro(l,0):r,hs(i)?(n="",e!=null&&(n=e.replace(ms,"$&/")+"/"),mi(i,t,n,"",function(c){return c})):i!=null&&(ga(i)&&(i=Hf(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(ms,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",hs(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+Ro(o,a);l+=mi(o,t,n,s,i)}else if(s=Wf(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+Ro(o,a++),l+=mi(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function $r(e,t,n){if(e==null)return e;var r=[],i=0;return mi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Qf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},gi={transition:null},bf={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:gi,ReactCurrentOwner:ma};I.Children={map:$r,forEach:function(e,t,n){$r(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return $r(e,function(){t++}),t},toArray:function(e){return $r(e,function(t){return t})||[]},only:function(e){if(!ga(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=zn;I.Fragment=Of;I.Profiler=Mf;I.PureComponent=pa;I.StrictMode=If;I.Suspense=Af;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bf;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Yu({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=ma.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Zu.call(t,s)&&!Ju.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Lr,type:e.type,key:i,ref:o,props:r,_owner:l}};I.createContext=function(e){return e={$$typeof:Df,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ff,_context:e},e.Consumer=e};I.createElement=qu;I.createFactory=function(e){var t=qu.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:$f,render:e}};I.isValidElement=ga;I.lazy=function(e){return{$$typeof:Bf,_payload:{_status:-1,_result:e},_init:Qf}};I.memo=function(e,t){return{$$typeof:Uf,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=gi.transition;gi.transition={};try{e()}finally{gi.transition=t}};I.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};I.useCallback=function(e,t){return xe.current.useCallback(e,t)};I.useContext=function(e){return xe.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};I.useEffect=function(e,t){return xe.current.useEffect(e,t)};I.useId=function(){return xe.current.useId()};I.useImperativeHandle=function(e,t,n){return xe.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return xe.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return xe.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return xe.current.useMemo(e,t)};I.useReducer=function(e,t,n){return xe.current.useReducer(e,t,n)};I.useRef=function(e){return xe.current.useRef(e)};I.useState=function(e){return xe.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return xe.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return xe.current.useTransition()};I.version="18.2.0";bu.exports=I;var _=bu.exports;const Kf=Rf(_),pl=Lf({__proto__:null,default:Kf},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yf=_,Xf=Symbol.for("react.element"),Gf=Symbol.for("react.fragment"),Zf=Object.prototype.hasOwnProperty,Jf=Yf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qf={key:!0,ref:!0,__self:!0,__source:!0};function ec(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Zf.call(t,r)&&!qf.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Xf,type:e,key:o,ref:l,props:i,_owner:Jf.current}}io.Fragment=Gf;io.jsx=ec;io.jsxs=ec;Qu.exports=io;var u=Qu.exports,tc={exports:{}},Oe={},nc={exports:{}},rc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,z){var O=T.length;T.push(z);e:for(;0<O;){var G=O-1>>>1,ne=T[G];if(0<i(ne,z))T[G]=z,T[O]=ne,O=G;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var z=T[0],O=T.pop();if(O!==z){T[0]=O;e:for(var G=0,ne=T.length,Fr=ne>>>1;G<Fr;){var Dt=2*(G+1)-1,Lo=T[Dt],$t=Dt+1,Dr=T[$t];if(0>i(Lo,O))$t<ne&&0>i(Dr,Lo)?(T[G]=Dr,T[$t]=O,G=$t):(T[G]=Lo,T[Dt]=O,G=Dt);else if($t<ne&&0>i(Dr,O))T[G]=Dr,T[$t]=O,G=$t;else break e}}return z}function i(T,z){var O=T.sortIndex-z.sortIndex;return O!==0?O:T.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],c=[],h=1,m=null,g=3,w=!1,x=!1,v=!1,C=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(T){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=T)r(c),z.sortIndex=z.expirationTime,t(s,z);else break;z=n(c)}}function y(T){if(v=!1,p(T),!x)if(n(s)!==null)x=!0,No(E);else{var z=n(c);z!==null&&To(y,z.startTime-T)}}function E(T,z){x=!1,v&&(v=!1,f(L),L=-1),w=!0;var O=g;try{for(p(z),m=n(s);m!==null&&(!(m.expirationTime>z)||T&&!_e());){var G=m.callback;if(typeof G=="function"){m.callback=null,g=m.priorityLevel;var ne=G(m.expirationTime<=z);z=e.unstable_now(),typeof ne=="function"?m.callback=ne:m===n(s)&&r(s),p(z)}else r(s);m=n(s)}if(m!==null)var Fr=!0;else{var Dt=n(c);Dt!==null&&To(y,Dt.startTime-z),Fr=!1}return Fr}finally{m=null,g=O,w=!1}}var P=!1,j=null,L=-1,U=5,R=-1;function _e(){return!(e.unstable_now()-R<U)}function $n(){if(j!==null){var T=e.unstable_now();R=T;var z=!0;try{z=j(!0,T)}finally{z?An():(P=!1,j=null)}}else P=!1}var An;if(typeof d=="function")An=function(){d($n)};else if(typeof MessageChannel<"u"){var fs=new MessageChannel,Tf=fs.port2;fs.port1.onmessage=$n,An=function(){Tf.postMessage(null)}}else An=function(){C($n,0)};function No(T){j=T,P||(P=!0,An())}function To(T,z){L=C(function(){T(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){x||w||(x=!0,No(E))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(T){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var O=g;g=z;try{return T()}finally{g=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,z){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var O=g;g=T;try{return z()}finally{g=O}},e.unstable_scheduleCallback=function(T,z,O){var G=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?G+O:G):O=G,T){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=O+ne,T={id:h++,callback:z,priorityLevel:T,startTime:O,expirationTime:ne,sortIndex:-1},O>G?(T.sortIndex=O,t(c,T),n(s)===null&&T===n(c)&&(v?(f(L),L=-1):v=!0,To(y,O-G))):(T.sortIndex=ne,t(s,T),x||w||(x=!0,No(E))),T},e.unstable_shouldYield=_e,e.unstable_wrapCallback=function(T){var z=g;return function(){var O=g;g=z;try{return T.apply(this,arguments)}finally{g=O}}}})(rc);nc.exports=rc;var ep=nc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ic=_,ze=ep;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var oc=new Set,sr={};function Zt(e,t){Cn(e,t),Cn(e+"Capture",t)}function Cn(e,t){for(sr[e]=t,e=0;e<t.length;e++)oc.add(t[e])}var st=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hl=Object.prototype.hasOwnProperty,tp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gs={},vs={};function np(e){return hl.call(vs,e)?!0:hl.call(gs,e)?!1:tp.test(e)?vs[e]=!0:(gs[e]=!0,!1)}function rp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ip(e,t,n,r){if(t===null||typeof t>"u"||rp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function we(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new we(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new we(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new we(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new we(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new we(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new we(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new we(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new we(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new we(e,5,!1,e.toLowerCase(),null,!1,!1)});var va=/[\-:]([a-z])/g;function ya(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(va,ya);se[t]=new we(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(va,ya);se[t]=new we(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(va,ya);se[t]=new we(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new we(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new we(e,1,!1,e.toLowerCase(),null,!0,!0)});function xa(e,t,n,r){var i=se.hasOwnProperty(t)?se[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ip(t,n,i,r)&&(n=null),r||i===null?np(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ft=ic.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ar=Symbol.for("react.element"),rn=Symbol.for("react.portal"),on=Symbol.for("react.fragment"),wa=Symbol.for("react.strict_mode"),ml=Symbol.for("react.profiler"),lc=Symbol.for("react.provider"),ac=Symbol.for("react.context"),ka=Symbol.for("react.forward_ref"),gl=Symbol.for("react.suspense"),vl=Symbol.for("react.suspense_list"),Sa=Symbol.for("react.memo"),mt=Symbol.for("react.lazy"),sc=Symbol.for("react.offscreen"),ys=Symbol.iterator;function Un(e){return e===null||typeof e!="object"?null:(e=ys&&e[ys]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,zo;function Xn(e){if(zo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);zo=t&&t[1]||""}return`
`+zo+e}var Oo=!1;function Io(e,t){if(!e||Oo)return"";Oo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{Oo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Xn(e):""}function op(e){switch(e.tag){case 5:return Xn(e.type);case 16:return Xn("Lazy");case 13:return Xn("Suspense");case 19:return Xn("SuspenseList");case 0:case 2:case 15:return e=Io(e.type,!1),e;case 11:return e=Io(e.type.render,!1),e;case 1:return e=Io(e.type,!0),e;default:return""}}function yl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case on:return"Fragment";case rn:return"Portal";case ml:return"Profiler";case wa:return"StrictMode";case gl:return"Suspense";case vl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ac:return(e.displayName||"Context")+".Consumer";case lc:return(e._context.displayName||"Context")+".Provider";case ka:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Sa:return t=e.displayName||null,t!==null?t:yl(e.type)||"Memo";case mt:t=e._payload,e=e._init;try{return yl(e(t))}catch{}}return null}function lp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yl(t);case 8:return t===wa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Rt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function uc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ap(e){var t=uc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ur(e){e._valueTracker||(e._valueTracker=ap(e))}function cc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=uc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ri(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function xl(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function xs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Rt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function dc(e,t){t=t.checked,t!=null&&xa(e,"checked",t,!1)}function wl(e,t){dc(e,t);var n=Rt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?kl(e,t.type,n):t.hasOwnProperty("defaultValue")&&kl(e,t.type,Rt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ws(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function kl(e,t,n){(t!=="number"||Ri(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Gn=Array.isArray;function gn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Rt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Sl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ks(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Gn(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Rt(n)}}function fc(e,t){var n=Rt(t.value),r=Rt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ss(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function pc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?pc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Br,hc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Br=Br||document.createElement("div"),Br.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Br.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ur(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var qn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sp=["Webkit","ms","Moz","O"];Object.keys(qn).forEach(function(e){sp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),qn[t]=qn[e]})});function mc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||qn.hasOwnProperty(e)&&qn[e]?(""+t).trim():t+"px"}function gc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=mc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var up=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jl(e,t){if(t){if(up[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function El(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pl=null;function Ca(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _l=null,vn=null,yn=null;function Cs(e){if(e=Or(e)){if(typeof _l!="function")throw Error(S(280));var t=e.stateNode;t&&(t=uo(t),_l(e.stateNode,e.type,t))}}function vc(e){vn?yn?yn.push(e):yn=[e]:vn=e}function yc(){if(vn){var e=vn,t=yn;if(yn=vn=null,Cs(e),t)for(e=0;e<t.length;e++)Cs(t[e])}}function xc(e,t){return e(t)}function wc(){}var Mo=!1;function kc(e,t,n){if(Mo)return e(t,n);Mo=!0;try{return xc(e,t,n)}finally{Mo=!1,(vn!==null||yn!==null)&&(wc(),yc())}}function cr(e,t){var n=e.stateNode;if(n===null)return null;var r=uo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Nl=!1;if(st)try{var Bn={};Object.defineProperty(Bn,"passive",{get:function(){Nl=!0}}),window.addEventListener("test",Bn,Bn),window.removeEventListener("test",Bn,Bn)}catch{Nl=!1}function cp(e,t,n,r,i,o,l,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var er=!1,zi=null,Oi=!1,Tl=null,dp={onError:function(e){er=!0,zi=e}};function fp(e,t,n,r,i,o,l,a,s){er=!1,zi=null,cp.apply(dp,arguments)}function pp(e,t,n,r,i,o,l,a,s){if(fp.apply(this,arguments),er){if(er){var c=zi;er=!1,zi=null}else throw Error(S(198));Oi||(Oi=!0,Tl=c)}}function Jt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Sc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function js(e){if(Jt(e)!==e)throw Error(S(188))}function hp(e){var t=e.alternate;if(!t){if(t=Jt(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return js(i),e;if(o===r)return js(i),t;o=o.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Cc(e){return e=hp(e),e!==null?jc(e):null}function jc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=jc(e);if(t!==null)return t;e=e.sibling}return null}var Ec=ze.unstable_scheduleCallback,Es=ze.unstable_cancelCallback,mp=ze.unstable_shouldYield,gp=ze.unstable_requestPaint,Z=ze.unstable_now,vp=ze.unstable_getCurrentPriorityLevel,ja=ze.unstable_ImmediatePriority,Pc=ze.unstable_UserBlockingPriority,Ii=ze.unstable_NormalPriority,yp=ze.unstable_LowPriority,_c=ze.unstable_IdlePriority,oo=null,qe=null;function xp(e){if(qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(oo,e,void 0,(e.current.flags&128)===128)}catch{}}var Qe=Math.clz32?Math.clz32:Sp,wp=Math.log,kp=Math.LN2;function Sp(e){return e>>>=0,e===0?32:31-(wp(e)/kp|0)|0}var Wr=64,Hr=4194304;function Zn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Mi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=Zn(a):(o&=l,o!==0&&(r=Zn(o)))}else l=n&~i,l!==0?r=Zn(l):o!==0&&(r=Zn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Qe(t),i=1<<n,r|=e[n],t&=~i;return r}function Cp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Qe(o),a=1<<l,s=i[l];s===-1?(!(a&n)||a&r)&&(i[l]=Cp(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function Ll(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Nc(){var e=Wr;return Wr<<=1,!(Wr&4194240)&&(Wr=64),e}function Fo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Rr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Qe(t),e[t]=n}function Ep(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Qe(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ea(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var A=0;function Tc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Lc,Pa,Rc,zc,Oc,Rl=!1,Vr=[],St=null,Ct=null,jt=null,dr=new Map,fr=new Map,vt=[],Pp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ps(e,t){switch(e){case"focusin":case"focusout":St=null;break;case"dragenter":case"dragleave":Ct=null;break;case"mouseover":case"mouseout":jt=null;break;case"pointerover":case"pointerout":dr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fr.delete(t.pointerId)}}function Wn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Or(t),t!==null&&Pa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function _p(e,t,n,r,i){switch(t){case"focusin":return St=Wn(St,e,t,n,r,i),!0;case"dragenter":return Ct=Wn(Ct,e,t,n,r,i),!0;case"mouseover":return jt=Wn(jt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return dr.set(o,Wn(dr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,fr.set(o,Wn(fr.get(o)||null,e,t,n,r,i)),!0}return!1}function Ic(e){var t=Bt(e.target);if(t!==null){var n=Jt(t);if(n!==null){if(t=n.tag,t===13){if(t=Sc(n),t!==null){e.blockedOn=t,Oc(e.priority,function(){Rc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Pl=r,n.target.dispatchEvent(r),Pl=null}else return t=Or(n),t!==null&&Pa(t),e.blockedOn=n,!1;t.shift()}return!0}function _s(e,t,n){vi(e)&&n.delete(t)}function Np(){Rl=!1,St!==null&&vi(St)&&(St=null),Ct!==null&&vi(Ct)&&(Ct=null),jt!==null&&vi(jt)&&(jt=null),dr.forEach(_s),fr.forEach(_s)}function Hn(e,t){e.blockedOn===t&&(e.blockedOn=null,Rl||(Rl=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,Np)))}function pr(e){function t(i){return Hn(i,e)}if(0<Vr.length){Hn(Vr[0],e);for(var n=1;n<Vr.length;n++){var r=Vr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(St!==null&&Hn(St,e),Ct!==null&&Hn(Ct,e),jt!==null&&Hn(jt,e),dr.forEach(t),fr.forEach(t),n=0;n<vt.length;n++)r=vt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<vt.length&&(n=vt[0],n.blockedOn===null);)Ic(n),n.blockedOn===null&&vt.shift()}var xn=ft.ReactCurrentBatchConfig,Fi=!0;function Tp(e,t,n,r){var i=A,o=xn.transition;xn.transition=null;try{A=1,_a(e,t,n,r)}finally{A=i,xn.transition=o}}function Lp(e,t,n,r){var i=A,o=xn.transition;xn.transition=null;try{A=4,_a(e,t,n,r)}finally{A=i,xn.transition=o}}function _a(e,t,n,r){if(Fi){var i=zl(e,t,n,r);if(i===null)bo(e,t,r,Di,n),Ps(e,r);else if(_p(i,e,t,n,r))r.stopPropagation();else if(Ps(e,r),t&4&&-1<Pp.indexOf(e)){for(;i!==null;){var o=Or(i);if(o!==null&&Lc(o),o=zl(e,t,n,r),o===null&&bo(e,t,r,Di,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else bo(e,t,r,null,n)}}var Di=null;function zl(e,t,n,r){if(Di=null,e=Ca(r),e=Bt(e),e!==null)if(t=Jt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Sc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Di=e,null}function Mc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vp()){case ja:return 1;case Pc:return 4;case Ii:case yp:return 16;case _c:return 536870912;default:return 16}default:return 16}}var xt=null,Na=null,yi=null;function Fc(){if(yi)return yi;var e,t=Na,n=t.length,r,i="value"in xt?xt.value:xt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return yi=i.slice(e,1<r?1-r:void 0)}function xi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Qr(){return!0}function Ns(){return!1}function Ie(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Qr:Ns,this.isPropagationStopped=Ns,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qr)},persist:function(){},isPersistent:Qr}),t}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ta=Ie(On),zr=K({},On,{view:0,detail:0}),Rp=Ie(zr),Do,$o,Vn,lo=K({},zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:La,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vn&&(Vn&&e.type==="mousemove"?(Do=e.screenX-Vn.screenX,$o=e.screenY-Vn.screenY):$o=Do=0,Vn=e),Do)},movementY:function(e){return"movementY"in e?e.movementY:$o}}),Ts=Ie(lo),zp=K({},lo,{dataTransfer:0}),Op=Ie(zp),Ip=K({},zr,{relatedTarget:0}),Ao=Ie(Ip),Mp=K({},On,{animationName:0,elapsedTime:0,pseudoElement:0}),Fp=Ie(Mp),Dp=K({},On,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$p=Ie(Dp),Ap=K({},On,{data:0}),Ls=Ie(Ap),Up={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wp[e])?!!t[e]:!1}function La(){return Hp}var Vp=K({},zr,{key:function(e){if(e.key){var t=Up[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Bp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:La,charCode:function(e){return e.type==="keypress"?xi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qp=Ie(Vp),bp=K({},lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rs=Ie(bp),Kp=K({},zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:La}),Yp=Ie(Kp),Xp=K({},On,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gp=Ie(Xp),Zp=K({},lo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jp=Ie(Zp),qp=[9,13,27,32],Ra=st&&"CompositionEvent"in window,tr=null;st&&"documentMode"in document&&(tr=document.documentMode);var eh=st&&"TextEvent"in window&&!tr,Dc=st&&(!Ra||tr&&8<tr&&11>=tr),zs=" ",Os=!1;function $c(e,t){switch(e){case"keyup":return qp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ac(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ln=!1;function th(e,t){switch(e){case"compositionend":return Ac(t);case"keypress":return t.which!==32?null:(Os=!0,zs);case"textInput":return e=t.data,e===zs&&Os?null:e;default:return null}}function nh(e,t){if(ln)return e==="compositionend"||!Ra&&$c(e,t)?(e=Fc(),yi=Na=xt=null,ln=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dc&&t.locale!=="ko"?null:t.data;default:return null}}var rh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Is(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!rh[e.type]:t==="textarea"}function Uc(e,t,n,r){vc(r),t=$i(t,"onChange"),0<t.length&&(n=new Ta("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var nr=null,hr=null;function ih(e){Zc(e,0)}function ao(e){var t=un(e);if(cc(t))return e}function oh(e,t){if(e==="change")return t}var Bc=!1;if(st){var Uo;if(st){var Bo="oninput"in document;if(!Bo){var Ms=document.createElement("div");Ms.setAttribute("oninput","return;"),Bo=typeof Ms.oninput=="function"}Uo=Bo}else Uo=!1;Bc=Uo&&(!document.documentMode||9<document.documentMode)}function Fs(){nr&&(nr.detachEvent("onpropertychange",Wc),hr=nr=null)}function Wc(e){if(e.propertyName==="value"&&ao(hr)){var t=[];Uc(t,hr,e,Ca(e)),kc(ih,t)}}function lh(e,t,n){e==="focusin"?(Fs(),nr=t,hr=n,nr.attachEvent("onpropertychange",Wc)):e==="focusout"&&Fs()}function ah(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ao(hr)}function sh(e,t){if(e==="click")return ao(t)}function uh(e,t){if(e==="input"||e==="change")return ao(t)}function ch(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ke=typeof Object.is=="function"?Object.is:ch;function mr(e,t){if(Ke(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!hl.call(t,i)||!Ke(e[i],t[i]))return!1}return!0}function Ds(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $s(e,t){var n=Ds(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ds(n)}}function Hc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vc(){for(var e=window,t=Ri();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ri(e.document)}return t}function za(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function dh(e){var t=Vc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Hc(n.ownerDocument.documentElement,n)){if(r!==null&&za(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=$s(n,o);var l=$s(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fh=st&&"documentMode"in document&&11>=document.documentMode,an=null,Ol=null,rr=null,Il=!1;function As(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Il||an==null||an!==Ri(r)||(r=an,"selectionStart"in r&&za(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),rr&&mr(rr,r)||(rr=r,r=$i(Ol,"onSelect"),0<r.length&&(t=new Ta("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=an)))}function br(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var sn={animationend:br("Animation","AnimationEnd"),animationiteration:br("Animation","AnimationIteration"),animationstart:br("Animation","AnimationStart"),transitionend:br("Transition","TransitionEnd")},Wo={},Qc={};st&&(Qc=document.createElement("div").style,"AnimationEvent"in window||(delete sn.animationend.animation,delete sn.animationiteration.animation,delete sn.animationstart.animation),"TransitionEvent"in window||delete sn.transitionend.transition);function so(e){if(Wo[e])return Wo[e];if(!sn[e])return e;var t=sn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qc)return Wo[e]=t[n];return e}var bc=so("animationend"),Kc=so("animationiteration"),Yc=so("animationstart"),Xc=so("transitionend"),Gc=new Map,Us="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ot(e,t){Gc.set(e,t),Zt(t,[e])}for(var Ho=0;Ho<Us.length;Ho++){var Vo=Us[Ho],ph=Vo.toLowerCase(),hh=Vo[0].toUpperCase()+Vo.slice(1);Ot(ph,"on"+hh)}Ot(bc,"onAnimationEnd");Ot(Kc,"onAnimationIteration");Ot(Yc,"onAnimationStart");Ot("dblclick","onDoubleClick");Ot("focusin","onFocus");Ot("focusout","onBlur");Ot(Xc,"onTransitionEnd");Cn("onMouseEnter",["mouseout","mouseover"]);Cn("onMouseLeave",["mouseout","mouseover"]);Cn("onPointerEnter",["pointerout","pointerover"]);Cn("onPointerLeave",["pointerout","pointerover"]);Zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jn));function Bs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,pp(r,t,void 0,e),e.currentTarget=null}function Zc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;Bs(i,a,c),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,c=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;Bs(i,a,c),o=s}}}if(Oi)throw e=Tl,Oi=!1,Tl=null,e}function W(e,t){var n=t[Al];n===void 0&&(n=t[Al]=new Set);var r=e+"__bubble";n.has(r)||(Jc(t,e,2,!1),n.add(r))}function Qo(e,t,n){var r=0;t&&(r|=4),Jc(n,e,r,t)}var Kr="_reactListening"+Math.random().toString(36).slice(2);function gr(e){if(!e[Kr]){e[Kr]=!0,oc.forEach(function(n){n!=="selectionchange"&&(mh.has(n)||Qo(n,!1,e),Qo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Kr]||(t[Kr]=!0,Qo("selectionchange",!1,t))}}function Jc(e,t,n,r){switch(Mc(t)){case 1:var i=Tp;break;case 4:i=Lp;break;default:i=_a}n=i.bind(null,t,n,e),i=void 0,!Nl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function bo(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=Bt(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}kc(function(){var c=o,h=Ca(n),m=[];e:{var g=Gc.get(e);if(g!==void 0){var w=Ta,x=e;switch(e){case"keypress":if(xi(n)===0)break e;case"keydown":case"keyup":w=Qp;break;case"focusin":x="focus",w=Ao;break;case"focusout":x="blur",w=Ao;break;case"beforeblur":case"afterblur":w=Ao;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Ts;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Op;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Yp;break;case bc:case Kc:case Yc:w=Fp;break;case Xc:w=Gp;break;case"scroll":w=Rp;break;case"wheel":w=Jp;break;case"copy":case"cut":case"paste":w=$p;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Rs}var v=(t&4)!==0,C=!v&&e==="scroll",f=v?g!==null?g+"Capture":null:g;v=[];for(var d=c,p;d!==null;){p=d;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,f!==null&&(y=cr(d,f),y!=null&&v.push(vr(d,y,p)))),C)break;d=d.return}0<v.length&&(g=new w(g,x,null,n,h),m.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",g&&n!==Pl&&(x=n.relatedTarget||n.fromElement)&&(Bt(x)||x[ut]))break e;if((w||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,w?(x=n.relatedTarget||n.toElement,w=c,x=x?Bt(x):null,x!==null&&(C=Jt(x),x!==C||x.tag!==5&&x.tag!==6)&&(x=null)):(w=null,x=c),w!==x)){if(v=Ts,y="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(v=Rs,y="onPointerLeave",f="onPointerEnter",d="pointer"),C=w==null?g:un(w),p=x==null?g:un(x),g=new v(y,d+"leave",w,n,h),g.target=C,g.relatedTarget=p,y=null,Bt(h)===c&&(v=new v(f,d+"enter",x,n,h),v.target=p,v.relatedTarget=C,y=v),C=y,w&&x)t:{for(v=w,f=x,d=0,p=v;p;p=qt(p))d++;for(p=0,y=f;y;y=qt(y))p++;for(;0<d-p;)v=qt(v),d--;for(;0<p-d;)f=qt(f),p--;for(;d--;){if(v===f||f!==null&&v===f.alternate)break t;v=qt(v),f=qt(f)}v=null}else v=null;w!==null&&Ws(m,g,w,v,!1),x!==null&&C!==null&&Ws(m,C,x,v,!0)}}e:{if(g=c?un(c):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var E=oh;else if(Is(g))if(Bc)E=uh;else{E=ah;var P=lh}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=sh);if(E&&(E=E(e,c))){Uc(m,E,n,h);break e}P&&P(e,g,c),e==="focusout"&&(P=g._wrapperState)&&P.controlled&&g.type==="number"&&kl(g,"number",g.value)}switch(P=c?un(c):window,e){case"focusin":(Is(P)||P.contentEditable==="true")&&(an=P,Ol=c,rr=null);break;case"focusout":rr=Ol=an=null;break;case"mousedown":Il=!0;break;case"contextmenu":case"mouseup":case"dragend":Il=!1,As(m,n,h);break;case"selectionchange":if(fh)break;case"keydown":case"keyup":As(m,n,h)}var j;if(Ra)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else ln?$c(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Dc&&n.locale!=="ko"&&(ln||L!=="onCompositionStart"?L==="onCompositionEnd"&&ln&&(j=Fc()):(xt=h,Na="value"in xt?xt.value:xt.textContent,ln=!0)),P=$i(c,L),0<P.length&&(L=new Ls(L,e,null,n,h),m.push({event:L,listeners:P}),j?L.data=j:(j=Ac(n),j!==null&&(L.data=j)))),(j=eh?th(e,n):nh(e,n))&&(c=$i(c,"onBeforeInput"),0<c.length&&(h=new Ls("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=j))}Zc(m,t)})}function vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $i(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=cr(e,n),o!=null&&r.unshift(vr(e,o,i)),o=cr(e,t),o!=null&&r.push(vr(e,o,i))),e=e.return}return r}function qt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ws(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,i?(s=cr(n,o),s!=null&&l.unshift(vr(n,s,a))):i||(s=cr(n,o),s!=null&&l.push(vr(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var gh=/\r\n?/g,vh=/\u0000|\uFFFD/g;function Hs(e){return(typeof e=="string"?e:""+e).replace(gh,`
`).replace(vh,"")}function Yr(e,t,n){if(t=Hs(t),Hs(e)!==t&&n)throw Error(S(425))}function Ai(){}var Ml=null,Fl=null;function Dl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $l=typeof setTimeout=="function"?setTimeout:void 0,yh=typeof clearTimeout=="function"?clearTimeout:void 0,Vs=typeof Promise=="function"?Promise:void 0,xh=typeof queueMicrotask=="function"?queueMicrotask:typeof Vs<"u"?function(e){return Vs.resolve(null).then(e).catch(wh)}:$l;function wh(e){setTimeout(function(){throw e})}function Ko(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),pr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);pr(t)}function Et(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Qs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var In=Math.random().toString(36).slice(2),Je="__reactFiber$"+In,yr="__reactProps$"+In,ut="__reactContainer$"+In,Al="__reactEvents$"+In,kh="__reactListeners$"+In,Sh="__reactHandles$"+In;function Bt(e){var t=e[Je];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ut]||n[Je]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qs(e);e!==null;){if(n=e[Je])return n;e=Qs(e)}return t}e=n,n=e.parentNode}return null}function Or(e){return e=e[Je]||e[ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function un(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function uo(e){return e[yr]||null}var Ul=[],cn=-1;function It(e){return{current:e}}function H(e){0>cn||(e.current=Ul[cn],Ul[cn]=null,cn--)}function B(e,t){cn++,Ul[cn]=e.current,e.current=t}var zt={},ge=It(zt),Ce=It(!1),bt=zt;function jn(e,t){var n=e.type.contextTypes;if(!n)return zt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function je(e){return e=e.childContextTypes,e!=null}function Ui(){H(Ce),H(ge)}function bs(e,t,n){if(ge.current!==zt)throw Error(S(168));B(ge,t),B(Ce,n)}function qc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,lp(e)||"Unknown",i));return K({},n,r)}function Bi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zt,bt=ge.current,B(ge,e),B(Ce,Ce.current),!0}function Ks(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=qc(e,t,bt),r.__reactInternalMemoizedMergedChildContext=e,H(Ce),H(ge),B(ge,e)):H(Ce),B(Ce,n)}var it=null,co=!1,Yo=!1;function ed(e){it===null?it=[e]:it.push(e)}function Ch(e){co=!0,ed(e)}function Mt(){if(!Yo&&it!==null){Yo=!0;var e=0,t=A;try{var n=it;for(A=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}it=null,co=!1}catch(i){throw it!==null&&(it=it.slice(e+1)),Ec(ja,Mt),i}finally{A=t,Yo=!1}}return null}var dn=[],fn=0,Wi=null,Hi=0,Me=[],Fe=0,Kt=null,ot=1,lt="";function At(e,t){dn[fn++]=Hi,dn[fn++]=Wi,Wi=e,Hi=t}function td(e,t,n){Me[Fe++]=ot,Me[Fe++]=lt,Me[Fe++]=Kt,Kt=e;var r=ot;e=lt;var i=32-Qe(r)-1;r&=~(1<<i),n+=1;var o=32-Qe(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,ot=1<<32-Qe(t)+i|n<<i|r,lt=o+e}else ot=1<<o|n<<i|r,lt=e}function Oa(e){e.return!==null&&(At(e,1),td(e,1,0))}function Ia(e){for(;e===Wi;)Wi=dn[--fn],dn[fn]=null,Hi=dn[--fn],dn[fn]=null;for(;e===Kt;)Kt=Me[--Fe],Me[Fe]=null,lt=Me[--Fe],Me[Fe]=null,ot=Me[--Fe],Me[Fe]=null}var Le=null,Te=null,V=!1,Ve=null;function nd(e,t){var n=De(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ys(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Le=e,Te=Et(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Le=e,Te=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Kt!==null?{id:ot,overflow:lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=De(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Le=e,Te=null,!0):!1;default:return!1}}function Bl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Wl(e){if(V){var t=Te;if(t){var n=t;if(!Ys(e,t)){if(Bl(e))throw Error(S(418));t=Et(n.nextSibling);var r=Le;t&&Ys(e,t)?nd(r,n):(e.flags=e.flags&-4097|2,V=!1,Le=e)}}else{if(Bl(e))throw Error(S(418));e.flags=e.flags&-4097|2,V=!1,Le=e}}}function Xs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Le=e}function Xr(e){if(e!==Le)return!1;if(!V)return Xs(e),V=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Dl(e.type,e.memoizedProps)),t&&(t=Te)){if(Bl(e))throw rd(),Error(S(418));for(;t;)nd(e,t),t=Et(t.nextSibling)}if(Xs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Te=Et(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Te=null}}else Te=Le?Et(e.stateNode.nextSibling):null;return!0}function rd(){for(var e=Te;e;)e=Et(e.nextSibling)}function En(){Te=Le=null,V=!1}function Ma(e){Ve===null?Ve=[e]:Ve.push(e)}var jh=ft.ReactCurrentBatchConfig;function We(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Vi=It(null),Qi=null,pn=null,Fa=null;function Da(){Fa=pn=Qi=null}function $a(e){var t=Vi.current;H(Vi),e._currentValue=t}function Hl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function wn(e,t){Qi=e,Fa=pn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(Fa!==e)if(e={context:e,memoizedValue:t,next:null},pn===null){if(Qi===null)throw Error(S(308));pn=e,Qi.dependencies={lanes:0,firstContext:e}}else pn=pn.next=e;return t}var Wt=null;function Aa(e){Wt===null?Wt=[e]:Wt.push(e)}function id(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Aa(t)):(n.next=i.next,i.next=n),t.interleaved=n,ct(e,r)}function ct(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var gt=!1;function Ua(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function od(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function at(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Pt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ct(e,n)}return i=r.interleaved,i===null?(t.next=t,Aa(r)):(t.next=i.next,i.next=t),r.interleaved=t,ct(e,n)}function wi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ea(e,n)}}function Gs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function bi(e,t,n,r){var i=e.updateQueue;gt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,c=s.next;s.next=null,l===null?o=c:l.next=c,l=s;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==l&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=s))}if(o!==null){var m=i.baseState;l=0,h=c=s=null,a=o;do{var g=a.lane,w=a.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,v=a;switch(g=t,w=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){m=x.call(w,m,g);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,g=typeof x=="function"?x.call(w,m,g):x,g==null)break e;m=K({},m,g);break e;case 2:gt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else w={eventTime:w,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=w,s=m):h=h.next=w,l|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(s=m),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Xt|=l,e.lanes=l,e.memoizedState=m}}function Zs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var ld=new ic.Component().refs;function Vl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fo={isMounted:function(e){return(e=e._reactInternals)?Jt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ye(),i=Nt(e),o=at(r,i);o.payload=t,n!=null&&(o.callback=n),t=Pt(e,o,i),t!==null&&(be(t,e,i,r),wi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ye(),i=Nt(e),o=at(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Pt(e,o,i),t!==null&&(be(t,e,i,r),wi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ye(),r=Nt(e),i=at(n,r);i.tag=2,t!=null&&(i.callback=t),t=Pt(e,i,r),t!==null&&(be(t,e,r,n),wi(t,e,r))}};function Js(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!mr(n,r)||!mr(i,o):!0}function ad(e,t,n){var r=!1,i=zt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ae(o):(i=je(t)?bt:ge.current,r=t.contextTypes,o=(r=r!=null)?jn(e,i):zt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function qs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fo.enqueueReplaceState(t,t.state,null)}function Ql(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=ld,Ua(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ae(o):(o=je(t)?bt:ge.current,i.context=jn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Vl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&fo.enqueueReplaceState(i,i.state,null),bi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Qn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;a===ld&&(a=i.refs={}),l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Gr(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function eu(e){var t=e._init;return t(e._payload)}function sd(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=Tt(f,d),f.index=0,f.sibling=null,f}function o(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,d,p,y){return d===null||d.tag!==6?(d=tl(p,f.mode,y),d.return=f,d):(d=i(d,p),d.return=f,d)}function s(f,d,p,y){var E=p.type;return E===on?h(f,d,p.props.children,y,p.key):d!==null&&(d.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===mt&&eu(E)===d.type)?(y=i(d,p.props),y.ref=Qn(f,d,p),y.return=f,y):(y=Pi(p.type,p.key,p.props,null,f.mode,y),y.ref=Qn(f,d,p),y.return=f,y)}function c(f,d,p,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=nl(p,f.mode,y),d.return=f,d):(d=i(d,p.children||[]),d.return=f,d)}function h(f,d,p,y,E){return d===null||d.tag!==7?(d=Qt(p,f.mode,y,E),d.return=f,d):(d=i(d,p),d.return=f,d)}function m(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=tl(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ar:return p=Pi(d.type,d.key,d.props,null,f.mode,p),p.ref=Qn(f,null,d),p.return=f,p;case rn:return d=nl(d,f.mode,p),d.return=f,d;case mt:var y=d._init;return m(f,y(d._payload),p)}if(Gn(d)||Un(d))return d=Qt(d,f.mode,p,null),d.return=f,d;Gr(f,d)}return null}function g(f,d,p,y){var E=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:a(f,d,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ar:return p.key===E?s(f,d,p,y):null;case rn:return p.key===E?c(f,d,p,y):null;case mt:return E=p._init,g(f,d,E(p._payload),y)}if(Gn(p)||Un(p))return E!==null?null:h(f,d,p,y,null);Gr(f,p)}return null}function w(f,d,p,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(p)||null,a(d,f,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ar:return f=f.get(y.key===null?p:y.key)||null,s(d,f,y,E);case rn:return f=f.get(y.key===null?p:y.key)||null,c(d,f,y,E);case mt:var P=y._init;return w(f,d,p,P(y._payload),E)}if(Gn(y)||Un(y))return f=f.get(p)||null,h(d,f,y,E,null);Gr(d,y)}return null}function x(f,d,p,y){for(var E=null,P=null,j=d,L=d=0,U=null;j!==null&&L<p.length;L++){j.index>L?(U=j,j=null):U=j.sibling;var R=g(f,j,p[L],y);if(R===null){j===null&&(j=U);break}e&&j&&R.alternate===null&&t(f,j),d=o(R,d,L),P===null?E=R:P.sibling=R,P=R,j=U}if(L===p.length)return n(f,j),V&&At(f,L),E;if(j===null){for(;L<p.length;L++)j=m(f,p[L],y),j!==null&&(d=o(j,d,L),P===null?E=j:P.sibling=j,P=j);return V&&At(f,L),E}for(j=r(f,j);L<p.length;L++)U=w(j,f,L,p[L],y),U!==null&&(e&&U.alternate!==null&&j.delete(U.key===null?L:U.key),d=o(U,d,L),P===null?E=U:P.sibling=U,P=U);return e&&j.forEach(function(_e){return t(f,_e)}),V&&At(f,L),E}function v(f,d,p,y){var E=Un(p);if(typeof E!="function")throw Error(S(150));if(p=E.call(p),p==null)throw Error(S(151));for(var P=E=null,j=d,L=d=0,U=null,R=p.next();j!==null&&!R.done;L++,R=p.next()){j.index>L?(U=j,j=null):U=j.sibling;var _e=g(f,j,R.value,y);if(_e===null){j===null&&(j=U);break}e&&j&&_e.alternate===null&&t(f,j),d=o(_e,d,L),P===null?E=_e:P.sibling=_e,P=_e,j=U}if(R.done)return n(f,j),V&&At(f,L),E;if(j===null){for(;!R.done;L++,R=p.next())R=m(f,R.value,y),R!==null&&(d=o(R,d,L),P===null?E=R:P.sibling=R,P=R);return V&&At(f,L),E}for(j=r(f,j);!R.done;L++,R=p.next())R=w(j,f,L,R.value,y),R!==null&&(e&&R.alternate!==null&&j.delete(R.key===null?L:R.key),d=o(R,d,L),P===null?E=R:P.sibling=R,P=R);return e&&j.forEach(function($n){return t(f,$n)}),V&&At(f,L),E}function C(f,d,p,y){if(typeof p=="object"&&p!==null&&p.type===on&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Ar:e:{for(var E=p.key,P=d;P!==null;){if(P.key===E){if(E=p.type,E===on){if(P.tag===7){n(f,P.sibling),d=i(P,p.props.children),d.return=f,f=d;break e}}else if(P.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===mt&&eu(E)===P.type){n(f,P.sibling),d=i(P,p.props),d.ref=Qn(f,P,p),d.return=f,f=d;break e}n(f,P);break}else t(f,P);P=P.sibling}p.type===on?(d=Qt(p.props.children,f.mode,y,p.key),d.return=f,f=d):(y=Pi(p.type,p.key,p.props,null,f.mode,y),y.ref=Qn(f,d,p),y.return=f,f=y)}return l(f);case rn:e:{for(P=p.key;d!==null;){if(d.key===P)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=i(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=nl(p,f.mode,y),d.return=f,f=d}return l(f);case mt:return P=p._init,C(f,d,P(p._payload),y)}if(Gn(p))return x(f,d,p,y);if(Un(p))return v(f,d,p,y);Gr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=i(d,p),d.return=f,f=d):(n(f,d),d=tl(p,f.mode,y),d.return=f,f=d),l(f)):n(f,d)}return C}var Pn=sd(!0),ud=sd(!1),Ir={},et=It(Ir),xr=It(Ir),wr=It(Ir);function Ht(e){if(e===Ir)throw Error(S(174));return e}function Ba(e,t){switch(B(wr,t),B(xr,e),B(et,Ir),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Cl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Cl(t,e)}H(et),B(et,t)}function _n(){H(et),H(xr),H(wr)}function cd(e){Ht(wr.current);var t=Ht(et.current),n=Cl(t,e.type);t!==n&&(B(xr,e),B(et,n))}function Wa(e){xr.current===e&&(H(et),H(xr))}var Q=It(0);function Ki(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xo=[];function Ha(){for(var e=0;e<Xo.length;e++)Xo[e]._workInProgressVersionPrimary=null;Xo.length=0}var ki=ft.ReactCurrentDispatcher,Go=ft.ReactCurrentBatchConfig,Yt=0,b=null,ee=null,re=null,Yi=!1,ir=!1,kr=0,Eh=0;function ue(){throw Error(S(321))}function Va(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ke(e[n],t[n]))return!1;return!0}function Qa(e,t,n,r,i,o){if(Yt=o,b=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ki.current=e===null||e.memoizedState===null?Th:Lh,e=n(r,i),ir){o=0;do{if(ir=!1,kr=0,25<=o)throw Error(S(301));o+=1,re=ee=null,t.updateQueue=null,ki.current=Rh,e=n(r,i)}while(ir)}if(ki.current=Xi,t=ee!==null&&ee.next!==null,Yt=0,re=ee=b=null,Yi=!1,t)throw Error(S(300));return e}function ba(){var e=kr!==0;return kr=0,e}function Xe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?b.memoizedState=re=e:re=re.next=e,re}function Ue(){if(ee===null){var e=b.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=re===null?b.memoizedState:re.next;if(t!==null)re=t,ee=e;else{if(e===null)throw Error(S(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},re===null?b.memoizedState=re=e:re=re.next=e}return re}function Sr(e,t){return typeof t=="function"?t(e):t}function Zo(e){var t=Ue(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=ee,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,c=o;do{var h=c.lane;if((Yt&h)===h)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=m,l=r):s=s.next=m,b.lanes|=h,Xt|=h}c=c.next}while(c!==null&&c!==o);s===null?l=r:s.next=a,Ke(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,b.lanes|=o,Xt|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Jo(e){var t=Ue(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Ke(o,t.memoizedState)||(Se=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function dd(){}function fd(e,t){var n=b,r=Ue(),i=t(),o=!Ke(r.memoizedState,i);if(o&&(r.memoizedState=i,Se=!0),r=r.queue,Ka(md.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||re!==null&&re.memoizedState.tag&1){if(n.flags|=2048,Cr(9,hd.bind(null,n,r,i,t),void 0,null),ie===null)throw Error(S(349));Yt&30||pd(n,t,i)}return i}function pd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=b.updateQueue,t===null?(t={lastEffect:null,stores:null},b.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hd(e,t,n,r){t.value=n,t.getSnapshot=r,gd(t)&&vd(e)}function md(e,t,n){return n(function(){gd(t)&&vd(e)})}function gd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ke(e,n)}catch{return!0}}function vd(e){var t=ct(e,1);t!==null&&be(t,e,1,-1)}function tu(e){var t=Xe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sr,lastRenderedState:e},t.queue=e,e=e.dispatch=Nh.bind(null,b,e),[t.memoizedState,e]}function Cr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=b.updateQueue,t===null?(t={lastEffect:null,stores:null},b.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function yd(){return Ue().memoizedState}function Si(e,t,n,r){var i=Xe();b.flags|=e,i.memoizedState=Cr(1|t,n,void 0,r===void 0?null:r)}function po(e,t,n,r){var i=Ue();r=r===void 0?null:r;var o=void 0;if(ee!==null){var l=ee.memoizedState;if(o=l.destroy,r!==null&&Va(r,l.deps)){i.memoizedState=Cr(t,n,o,r);return}}b.flags|=e,i.memoizedState=Cr(1|t,n,o,r)}function nu(e,t){return Si(8390656,8,e,t)}function Ka(e,t){return po(2048,8,e,t)}function xd(e,t){return po(4,2,e,t)}function wd(e,t){return po(4,4,e,t)}function kd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sd(e,t,n){return n=n!=null?n.concat([e]):null,po(4,4,kd.bind(null,t,e),n)}function Ya(){}function Cd(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Va(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function jd(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Va(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ed(e,t,n){return Yt&21?(Ke(n,t)||(n=Nc(),b.lanes|=n,Xt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function Ph(e,t){var n=A;A=n!==0&&4>n?n:4,e(!0);var r=Go.transition;Go.transition={};try{e(!1),t()}finally{A=n,Go.transition=r}}function Pd(){return Ue().memoizedState}function _h(e,t,n){var r=Nt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_d(e))Nd(t,n);else if(n=id(e,t,n,r),n!==null){var i=ye();be(n,e,r,i),Td(n,t,r)}}function Nh(e,t,n){var r=Nt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_d(e))Nd(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,Ke(a,l)){var s=t.interleaved;s===null?(i.next=i,Aa(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=id(e,t,i,r),n!==null&&(i=ye(),be(n,e,r,i),Td(n,t,r))}}function _d(e){var t=e.alternate;return e===b||t!==null&&t===b}function Nd(e,t){ir=Yi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Td(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ea(e,n)}}var Xi={readContext:Ae,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},Th={readContext:Ae,useCallback:function(e,t){return Xe().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:nu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Si(4194308,4,kd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Si(4194308,4,e,t)},useInsertionEffect:function(e,t){return Si(4,2,e,t)},useMemo:function(e,t){var n=Xe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Xe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=_h.bind(null,b,e),[r.memoizedState,e]},useRef:function(e){var t=Xe();return e={current:e},t.memoizedState=e},useState:tu,useDebugValue:Ya,useDeferredValue:function(e){return Xe().memoizedState=e},useTransition:function(){var e=tu(!1),t=e[0];return e=Ph.bind(null,e[1]),Xe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=b,i=Xe();if(V){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ie===null)throw Error(S(349));Yt&30||pd(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,nu(md.bind(null,r,o,e),[e]),r.flags|=2048,Cr(9,hd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Xe(),t=ie.identifierPrefix;if(V){var n=lt,r=ot;n=(r&~(1<<32-Qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=kr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Eh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Lh={readContext:Ae,useCallback:Cd,useContext:Ae,useEffect:Ka,useImperativeHandle:Sd,useInsertionEffect:xd,useLayoutEffect:wd,useMemo:jd,useReducer:Zo,useRef:yd,useState:function(){return Zo(Sr)},useDebugValue:Ya,useDeferredValue:function(e){var t=Ue();return Ed(t,ee.memoizedState,e)},useTransition:function(){var e=Zo(Sr)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:dd,useSyncExternalStore:fd,useId:Pd,unstable_isNewReconciler:!1},Rh={readContext:Ae,useCallback:Cd,useContext:Ae,useEffect:Ka,useImperativeHandle:Sd,useInsertionEffect:xd,useLayoutEffect:wd,useMemo:jd,useReducer:Jo,useRef:yd,useState:function(){return Jo(Sr)},useDebugValue:Ya,useDeferredValue:function(e){var t=Ue();return ee===null?t.memoizedState=e:Ed(t,ee.memoizedState,e)},useTransition:function(){var e=Jo(Sr)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:dd,useSyncExternalStore:fd,useId:Pd,unstable_isNewReconciler:!1};function Nn(e,t){try{var n="",r=t;do n+=op(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function qo(e,t,n){return{value:e,source:null,stack:null,digest:t??null}}function bl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var zh=typeof WeakMap=="function"?WeakMap:Map;function Ld(e,t,n){n=at(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Zi||(Zi=!0,na=r),bl(e,t)},n}function Rd(e,t,n){n=at(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){bl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){bl(e,t),typeof r!="function"&&(_t===null?_t=new Set([this]):_t.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function ru(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zh;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=bh.bind(null,e,t,n),t.then(e,e))}function iu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ou(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=at(-1,1),t.tag=2,Pt(n,t,1))),n.lanes|=1),e)}var Oh=ft.ReactCurrentOwner,Se=!1;function ve(e,t,n,r){t.child=e===null?ud(t,null,n,r):Pn(t,e.child,n,r)}function lu(e,t,n,r,i){n=n.render;var o=t.ref;return wn(t,i),r=Qa(e,t,n,r,o,i),n=ba(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dt(e,t,i)):(V&&n&&Oa(t),t.flags|=1,ve(e,t,r,i),t.child)}function au(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ns(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,zd(e,t,o,r,i)):(e=Pi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:mr,n(l,r)&&e.ref===t.ref)return dt(e,t,i)}return t.flags|=1,e=Tt(o,r),e.ref=t.ref,e.return=t,t.child=e}function zd(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(mr(o,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,dt(e,t,i)}return Kl(e,t,n,r,i)}function Od(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(mn,Ne),Ne|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(mn,Ne),Ne|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,B(mn,Ne),Ne|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,B(mn,Ne),Ne|=r;return ve(e,t,i,n),t.child}function Id(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Kl(e,t,n,r,i){var o=je(n)?bt:ge.current;return o=jn(t,o),wn(t,i),n=Qa(e,t,n,r,o,i),r=ba(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dt(e,t,i)):(V&&r&&Oa(t),t.flags|=1,ve(e,t,n,i),t.child)}function su(e,t,n,r,i){if(je(n)){var o=!0;Bi(t)}else o=!1;if(wn(t,i),t.stateNode===null)Ci(e,t),ad(t,n,r),Ql(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ae(c):(c=je(n)?bt:ge.current,c=jn(t,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==c)&&qs(t,l,r,c),gt=!1;var g=t.memoizedState;l.state=g,bi(t,r,l,i),s=t.memoizedState,a!==r||g!==s||Ce.current||gt?(typeof h=="function"&&(Vl(t,n,h,r),s=t.memoizedState),(a=gt||Js(t,n,a,r,g,s,c))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,od(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:We(t.type,a),l.props=c,m=t.pendingProps,g=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ae(s):(s=je(n)?bt:ge.current,s=jn(t,s));var w=n.getDerivedStateFromProps;(h=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==m||g!==s)&&qs(t,l,r,s),gt=!1,g=t.memoizedState,l.state=g,bi(t,r,l,i);var x=t.memoizedState;a!==m||g!==x||Ce.current||gt?(typeof w=="function"&&(Vl(t,n,w,r),x=t.memoizedState),(c=gt||Js(t,n,c,r,g,x,s)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=s,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Yl(e,t,n,r,o,i)}function Yl(e,t,n,r,i,o){Id(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Ks(t,n,!1),dt(e,t,o);r=t.stateNode,Oh.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Pn(t,e.child,null,o),t.child=Pn(t,null,a,o)):ve(e,t,a,o),t.memoizedState=r.state,i&&Ks(t,n,!0),t.child}function Md(e){var t=e.stateNode;t.pendingContext?bs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&bs(e,t.context,!1),Ba(e,t.containerInfo)}function uu(e,t,n,r,i){return En(),Ma(i),t.flags|=256,ve(e,t,n,r),t.child}var Xl={dehydrated:null,treeContext:null,retryLane:0};function Gl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fd(e,t,n){var r=t.pendingProps,i=Q.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),B(Q,i&1),e===null)return Wl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=go(l,r,0,null),e=Qt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Gl(n),t.memoizedState=Xl,e):Xa(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Ih(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Tt(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Tt(a,o):(o=Qt(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Gl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Xl,r}return o=e.child,e=o.sibling,r=Tt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Xa(e,t){return t=go({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Zr(e,t,n,r){return r!==null&&Ma(r),Pn(t,e.child,null,n),e=Xa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ih(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=qo(Error(S(422))),Zr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=go({mode:"visible",children:r.children},i,0,null),o=Qt(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Pn(t,e.child,null,l),t.child.memoizedState=Gl(l),t.memoizedState=Xl,o);if(!(t.mode&1))return Zr(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(S(419)),r=qo(o,r),Zr(e,t,l,r)}if(a=(l&e.childLanes)!==0,Se||a){if(r=ie,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ct(e,i),be(r,e,i,-1))}return ts(),r=qo(Error(S(421))),Zr(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Kh.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Te=Et(i.nextSibling),Le=t,V=!0,Ve=null,e!==null&&(Me[Fe++]=ot,Me[Fe++]=lt,Me[Fe++]=Kt,ot=e.id,lt=e.overflow,Kt=t),t=Xa(t,r.children),t.flags|=4096,t)}function cu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Hl(e.return,t,n)}function el(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Dd(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ve(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cu(e,n,t);else if(e.tag===19)cu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(Q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ki(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),el(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ki(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}el(t,!0,n,null,o);break;case"together":el(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ci(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Tt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Tt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mh(e,t,n){switch(t.tag){case 3:Md(t),En();break;case 5:cd(t);break;case 1:je(t.type)&&Bi(t);break;case 4:Ba(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;B(Vi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?Fd(e,t,n):(B(Q,Q.current&1),e=dt(e,t,n),e!==null?e.sibling:null);B(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Dd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,Od(e,t,n)}return dt(e,t,n)}var $d,Zl,Ad,Ud;$d=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zl=function(){};Ad=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ht(et.current);var o=null;switch(n){case"input":i=xl(e,i),r=xl(e,r),o=[];break;case"select":i=K({},i,{value:void 0}),r=K({},r,{value:void 0}),o=[];break;case"textarea":i=Sl(e,i),r=Sl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ai)}jl(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(sr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(sr.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&W("scroll",e),o||a===s||(o=[])):(o=o||[]).push(c,s))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Ud=function(e,t,n,r){n!==r&&(t.flags|=4)};function bn(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Fh(e,t,n){var r=t.pendingProps;switch(Ia(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return je(t.type)&&Ui(),ce(t),null;case 3:return r=t.stateNode,_n(),H(Ce),H(ge),Ha(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Xr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ve!==null&&(oa(Ve),Ve=null))),Zl(e,t),ce(t),null;case 5:Wa(t);var i=Ht(wr.current);if(n=t.type,e!==null&&t.stateNode!=null)Ad(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return ce(t),null}if(e=Ht(et.current),Xr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Je]=t,r[yr]=o,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(i=0;i<Jn.length;i++)W(Jn[i],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":xs(r,o),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},W("invalid",r);break;case"textarea":ks(r,o),W("invalid",r)}jl(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Yr(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Yr(r.textContent,a,e),i=["children",""+a]):sr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&W("scroll",r)}switch(n){case"input":Ur(r),ws(r,o,!0);break;case"textarea":Ur(r),Ss(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ai)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Je]=t,e[yr]=r,$d(e,t,!1,!1),t.stateNode=e;e:{switch(l=El(n,r),n){case"dialog":W("cancel",e),W("close",e),i=r;break;case"iframe":case"object":case"embed":W("load",e),i=r;break;case"video":case"audio":for(i=0;i<Jn.length;i++)W(Jn[i],e);i=r;break;case"source":W("error",e),i=r;break;case"img":case"image":case"link":W("error",e),W("load",e),i=r;break;case"details":W("toggle",e),i=r;break;case"input":xs(e,r),i=xl(e,r),W("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=K({},r,{value:void 0}),W("invalid",e);break;case"textarea":ks(e,r),i=Sl(e,r),W("invalid",e);break;default:i=r}jl(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?gc(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&hc(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&ur(e,s):typeof s=="number"&&ur(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(sr.hasOwnProperty(o)?s!=null&&o==="onScroll"&&W("scroll",e):s!=null&&xa(e,o,s,l))}switch(n){case"input":Ur(e),ws(e,r,!1);break;case"textarea":Ur(e),Ss(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Rt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?gn(e,!!r.multiple,o,!1):r.defaultValue!=null&&gn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ai)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)Ud(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Ht(wr.current),Ht(et.current),Xr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Je]=t,(o=r.nodeValue!==n)&&(e=Le,e!==null))switch(e.tag){case 3:Yr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Yr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Je]=t,t.stateNode=r}return ce(t),null;case 13:if(H(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&Te!==null&&t.mode&1&&!(t.flags&128))rd(),En(),t.flags|=98560,o=!1;else if(o=Xr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[Je]=t}else En(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),o=!1}else Ve!==null&&(oa(Ve),Ve=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?te===0&&(te=3):ts())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return _n(),Zl(e,t),e===null&&gr(t.stateNode.containerInfo),ce(t),null;case 10:return $a(t.type._context),ce(t),null;case 17:return je(t.type)&&Ui(),ce(t),null;case 19:if(H(Q),o=t.memoizedState,o===null)return ce(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)bn(o,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Ki(e),l!==null){for(t.flags|=128,bn(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(Q,Q.current&1|2),t.child}e=e.sibling}o.tail!==null&&Z()>Tn&&(t.flags|=128,r=!0,bn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ki(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),bn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!V)return ce(t),null}else 2*Z()-o.renderingStartTime>Tn&&n!==1073741824&&(t.flags|=128,r=!0,bn(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Z(),t.sibling=null,n=Q.current,B(Q,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return es(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ne&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function Dh(e,t){switch(Ia(t),t.tag){case 1:return je(t.type)&&Ui(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _n(),H(Ce),H(ge),Ha(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Wa(t),null;case 13:if(H(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));En()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(Q),null;case 4:return _n(),null;case 10:return $a(t.type._context),null;case 22:case 23:return es(),null;case 24:return null;default:return null}}var Jr=!1,me=!1,$h=typeof WeakSet=="function"?WeakSet:Set,N=null;function hn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Y(e,t,r)}else n.current=null}function Jl(e,t,n){try{n()}catch(r){Y(e,t,r)}}var du=!1;function Ah(e,t){if(Ml=Fi,e=Vc(),za(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,c=0,h=0,m=e,g=null;t:for(;;){for(var w;m!==n||i!==0&&m.nodeType!==3||(a=l+i),m!==o||r!==0&&m.nodeType!==3||(s=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(w=m.firstChild)!==null;)g=m,m=w;for(;;){if(m===e)break t;if(g===n&&++c===i&&(a=l),g===o&&++h===r&&(s=l),(w=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=w}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fl={focusedElem:e,selectionRange:n},Fi=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,C=x.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:We(t.type,v),C);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(y){Y(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return x=du,du=!1,x}function or(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Jl(t,n,o)}i=i.next}while(i!==r)}}function ho(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ql(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Bd(e){var t=e.alternate;t!==null&&(e.alternate=null,Bd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Je],delete t[yr],delete t[Al],delete t[kh],delete t[Sh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wd(e){return e.tag===5||e.tag===3||e.tag===4}function fu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ea(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ai));else if(r!==4&&(e=e.child,e!==null))for(ea(e,t,n),e=e.sibling;e!==null;)ea(e,t,n),e=e.sibling}function ta(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ta(e,t,n),e=e.sibling;e!==null;)ta(e,t,n),e=e.sibling}var oe=null,He=!1;function ht(e,t,n){for(n=n.child;n!==null;)Hd(e,t,n),n=n.sibling}function Hd(e,t,n){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(oo,n)}catch{}switch(n.tag){case 5:me||hn(n,t);case 6:var r=oe,i=He;oe=null,ht(e,t,n),oe=r,He=i,oe!==null&&(He?(e=oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):oe.removeChild(n.stateNode));break;case 18:oe!==null&&(He?(e=oe,n=n.stateNode,e.nodeType===8?Ko(e.parentNode,n):e.nodeType===1&&Ko(e,n),pr(e)):Ko(oe,n.stateNode));break;case 4:r=oe,i=He,oe=n.stateNode.containerInfo,He=!0,ht(e,t,n),oe=r,He=i;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Jl(n,t,l),i=i.next}while(i!==r)}ht(e,t,n);break;case 1:if(!me&&(hn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Y(n,t,a)}ht(e,t,n);break;case 21:ht(e,t,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,ht(e,t,n),me=r):ht(e,t,n);break;default:ht(e,t,n)}}function pu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new $h),t.forEach(function(r){var i=Yh.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Be(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:oe=a.stateNode,He=!1;break e;case 3:oe=a.stateNode.containerInfo,He=!0;break e;case 4:oe=a.stateNode.containerInfo,He=!0;break e}a=a.return}if(oe===null)throw Error(S(160));Hd(o,l,i),oe=null,He=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){Y(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Vd(t,e),t=t.sibling}function Vd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Be(t,e),Ye(e),r&4){try{or(3,e,e.return),ho(3,e)}catch(v){Y(e,e.return,v)}try{or(5,e,e.return)}catch(v){Y(e,e.return,v)}}break;case 1:Be(t,e),Ye(e),r&512&&n!==null&&hn(n,n.return);break;case 5:if(Be(t,e),Ye(e),r&512&&n!==null&&hn(n,n.return),e.flags&32){var i=e.stateNode;try{ur(i,"")}catch(v){Y(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&dc(i,o),El(a,l);var c=El(a,o);for(l=0;l<s.length;l+=2){var h=s[l],m=s[l+1];h==="style"?gc(i,m):h==="dangerouslySetInnerHTML"?hc(i,m):h==="children"?ur(i,m):xa(i,h,m,c)}switch(a){case"input":wl(i,o);break;case"textarea":fc(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?gn(i,!!o.multiple,w,!1):g!==!!o.multiple&&(o.defaultValue!=null?gn(i,!!o.multiple,o.defaultValue,!0):gn(i,!!o.multiple,o.multiple?[]:"",!1))}i[yr]=o}catch(v){Y(e,e.return,v)}}break;case 6:if(Be(t,e),Ye(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){Y(e,e.return,v)}}break;case 3:if(Be(t,e),Ye(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{pr(t.containerInfo)}catch(v){Y(e,e.return,v)}break;case 4:Be(t,e),Ye(e);break;case 13:Be(t,e),Ye(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ja=Z())),r&4&&pu(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(me=(c=me)||h,Be(t,e),me=c):Be(t,e),Ye(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(N=e,h=e.child;h!==null;){for(m=N=h;N!==null;){switch(g=N,w=g.child,g.tag){case 0:case 11:case 14:case 15:or(4,g,g.return);break;case 1:hn(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(v){Y(r,n,v)}}break;case 5:hn(g,g.return);break;case 22:if(g.memoizedState!==null){mu(m);continue}}w!==null?(w.return=g,N=w):mu(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{i=m.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=m.stateNode,s=m.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=mc("display",l))}catch(v){Y(e,e.return,v)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(v){Y(e,e.return,v)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Be(t,e),Ye(e),r&4&&pu(e);break;case 21:break;default:Be(t,e),Ye(e)}}function Ye(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Wd(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ur(i,""),r.flags&=-33);var o=fu(e);ta(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=fu(e);ea(e,a,l);break;default:throw Error(S(161))}}catch(s){Y(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Uh(e,t,n){N=e,Qd(e)}function Qd(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Jr;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||me;a=Jr;var c=me;if(Jr=l,(me=s)&&!c)for(N=i;N!==null;)l=N,s=l.child,l.tag===22&&l.memoizedState!==null?gu(i):s!==null?(s.return=l,N=s):gu(i);for(;o!==null;)N=o,Qd(o),o=o.sibling;N=i,Jr=a,me=c}hu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,N=o):hu(e)}}function hu(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:me||ho(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!me)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:We(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Zs(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Zs(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&pr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}me||t.flags&512&&ql(t)}catch(g){Y(t,t.return,g)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function mu(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function gu(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ho(4,t)}catch(s){Y(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Y(t,i,s)}}var o=t.return;try{ql(t)}catch(s){Y(t,o,s)}break;case 5:var l=t.return;try{ql(t)}catch(s){Y(t,l,s)}}}catch(s){Y(t,t.return,s)}if(t===e){N=null;break}var a=t.sibling;if(a!==null){a.return=t.return,N=a;break}N=t.return}}var Bh=Math.ceil,Gi=ft.ReactCurrentDispatcher,Ga=ft.ReactCurrentOwner,$e=ft.ReactCurrentBatchConfig,F=0,ie=null,q=null,ae=0,Ne=0,mn=It(0),te=0,jr=null,Xt=0,mo=0,Za=0,lr=null,ke=null,Ja=0,Tn=1/0,rt=null,Zi=!1,na=null,_t=null,qr=!1,wt=null,Ji=0,ar=0,ra=null,ji=-1,Ei=0;function ye(){return F&6?Z():ji!==-1?ji:ji=Z()}function Nt(e){return e.mode&1?F&2&&ae!==0?ae&-ae:jh.transition!==null?(Ei===0&&(Ei=Nc()),Ei):(e=A,e!==0||(e=window.event,e=e===void 0?16:Mc(e.type)),e):1}function be(e,t,n,r){if(50<ar)throw ar=0,ra=null,Error(S(185));Rr(e,n,r),(!(F&2)||e!==ie)&&(e===ie&&(!(F&2)&&(mo|=n),te===4&&yt(e,ae)),Ee(e,r),n===1&&F===0&&!(t.mode&1)&&(Tn=Z()+500,co&&Mt()))}function Ee(e,t){var n=e.callbackNode;jp(e,t);var r=Mi(e,e===ie?ae:0);if(r===0)n!==null&&Es(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Es(n),t===1)e.tag===0?Ch(vu.bind(null,e)):ed(vu.bind(null,e)),xh(function(){!(F&6)&&Mt()}),n=null;else{switch(Tc(r)){case 1:n=ja;break;case 4:n=Pc;break;case 16:n=Ii;break;case 536870912:n=_c;break;default:n=Ii}n=qd(n,bd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function bd(e,t){if(ji=-1,Ei=0,F&6)throw Error(S(327));var n=e.callbackNode;if(kn()&&e.callbackNode!==n)return null;var r=Mi(e,e===ie?ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=qi(e,r);else{t=r;var i=F;F|=2;var o=Yd();(ie!==e||ae!==t)&&(rt=null,Tn=Z()+500,Vt(e,t));do try{Vh();break}catch(a){Kd(e,a)}while(!0);Da(),Gi.current=o,F=i,q!==null?t=0:(ie=null,ae=0,t=te)}if(t!==0){if(t===2&&(i=Ll(e),i!==0&&(r=i,t=ia(e,i))),t===1)throw n=jr,Vt(e,0),yt(e,r),Ee(e,Z()),n;if(t===6)yt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Wh(i)&&(t=qi(e,r),t===2&&(o=Ll(e),o!==0&&(r=o,t=ia(e,o))),t===1))throw n=jr,Vt(e,0),yt(e,r),Ee(e,Z()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Ut(e,ke,rt);break;case 3:if(yt(e,r),(r&130023424)===r&&(t=Ja+500-Z(),10<t)){if(Mi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=$l(Ut.bind(null,e,ke,rt),t);break}Ut(e,ke,rt);break;case 4:if(yt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Qe(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Bh(r/1960))-r,10<r){e.timeoutHandle=$l(Ut.bind(null,e,ke,rt),r);break}Ut(e,ke,rt);break;case 5:Ut(e,ke,rt);break;default:throw Error(S(329))}}}return Ee(e,Z()),e.callbackNode===n?bd.bind(null,e):null}function ia(e,t){var n=lr;return e.current.memoizedState.isDehydrated&&(Vt(e,t).flags|=256),e=qi(e,t),e!==2&&(t=ke,ke=n,t!==null&&oa(t)),e}function oa(e){ke===null?ke=e:ke.push.apply(ke,e)}function Wh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ke(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yt(e,t){for(t&=~Za,t&=~mo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Qe(t),r=1<<n;e[n]=-1,t&=~r}}function vu(e){if(F&6)throw Error(S(327));kn();var t=Mi(e,0);if(!(t&1))return Ee(e,Z()),null;var n=qi(e,t);if(e.tag!==0&&n===2){var r=Ll(e);r!==0&&(t=r,n=ia(e,r))}if(n===1)throw n=jr,Vt(e,0),yt(e,t),Ee(e,Z()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ut(e,ke,rt),Ee(e,Z()),null}function qa(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(Tn=Z()+500,co&&Mt())}}function Gt(e){wt!==null&&wt.tag===0&&!(F&6)&&kn();var t=F;F|=1;var n=$e.transition,r=A;try{if($e.transition=null,A=1,e)return e()}finally{A=r,$e.transition=n,F=t,!(F&6)&&Mt()}}function es(){Ne=mn.current,H(mn)}function Vt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,yh(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(Ia(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ui();break;case 3:_n(),H(Ce),H(ge),Ha();break;case 5:Wa(r);break;case 4:_n();break;case 13:H(Q);break;case 19:H(Q);break;case 10:$a(r.type._context);break;case 22:case 23:es()}n=n.return}if(ie=e,q=e=Tt(e.current,null),ae=Ne=t,te=0,jr=null,Za=mo=Xt=0,ke=lr=null,Wt!==null){for(t=0;t<Wt.length;t++)if(n=Wt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Wt=null}return e}function Kd(e,t){do{var n=q;try{if(Da(),ki.current=Xi,Yi){for(var r=b.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Yi=!1}if(Yt=0,re=ee=b=null,ir=!1,kr=0,Ga.current=null,n===null||n.return===null){te=1,jr=t,q=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=ae,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,h=a,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=iu(l);if(w!==null){w.flags&=-257,ou(w,l,a,o,t),w.mode&1&&ru(o,c,t),t=w,s=c;var x=t.updateQueue;if(x===null){var v=new Set;v.add(s),t.updateQueue=v}else x.add(s);break e}else{if(!(t&1)){ru(o,c,t),ts();break e}s=Error(S(426))}}else if(V&&a.mode&1){var C=iu(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),ou(C,l,a,o,t),Ma(Nn(s,a));break e}}o=s=Nn(s,a),te!==4&&(te=2),lr===null?lr=[o]:lr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Ld(o,s,t);Gs(o,f);break e;case 1:a=s;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(_t===null||!_t.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=Rd(o,a,t);Gs(o,y);break e}}o=o.return}while(o!==null)}Gd(n)}catch(E){t=E,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function Yd(){var e=Gi.current;return Gi.current=Xi,e===null?Xi:e}function ts(){(te===0||te===3||te===2)&&(te=4),ie===null||!(Xt&268435455)&&!(mo&268435455)||yt(ie,ae)}function qi(e,t){var n=F;F|=2;var r=Yd();(ie!==e||ae!==t)&&(rt=null,Vt(e,t));do try{Hh();break}catch(i){Kd(e,i)}while(!0);if(Da(),F=n,Gi.current=r,q!==null)throw Error(S(261));return ie=null,ae=0,te}function Hh(){for(;q!==null;)Xd(q)}function Vh(){for(;q!==null&&!mp();)Xd(q)}function Xd(e){var t=Jd(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,t===null?Gd(e):q=t,Ga.current=null}function Gd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Dh(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,q=null;return}}else if(n=Fh(n,t,Ne),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);te===0&&(te=5)}function Ut(e,t,n){var r=A,i=$e.transition;try{$e.transition=null,A=1,Qh(e,t,n,r)}finally{$e.transition=i,A=r}return null}function Qh(e,t,n,r){do kn();while(wt!==null);if(F&6)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ep(e,o),e===ie&&(q=ie=null,ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qr||(qr=!0,qd(Ii,function(){return kn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=$e.transition,$e.transition=null;var l=A;A=1;var a=F;F|=4,Ga.current=null,Ah(e,n),Vd(n,e),dh(Fl),Fi=!!Ml,Fl=Ml=null,e.current=n,Uh(n),gp(),F=a,A=l,$e.transition=o}else e.current=n;if(qr&&(qr=!1,wt=e,Ji=i),o=e.pendingLanes,o===0&&(_t=null),xp(n.stateNode),Ee(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Zi)throw Zi=!1,e=na,na=null,e;return Ji&1&&e.tag!==0&&kn(),o=e.pendingLanes,o&1?e===ra?ar++:(ar=0,ra=e):ar=0,Mt(),null}function kn(){if(wt!==null){var e=Tc(Ji),t=$e.transition,n=A;try{if($e.transition=null,A=16>e?16:e,wt===null)var r=!1;else{if(e=wt,wt=null,Ji=0,F&6)throw Error(S(331));var i=F;for(F|=4,N=e.current;N!==null;){var o=N,l=o.child;if(N.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(N=c;N!==null;){var h=N;switch(h.tag){case 0:case 11:case 15:or(8,h,o)}var m=h.child;if(m!==null)m.return=h,N=m;else for(;N!==null;){h=N;var g=h.sibling,w=h.return;if(Bd(h),h===c){N=null;break}if(g!==null){g.return=w,N=g;break}N=w}}}var x=o.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var C=v.sibling;v.sibling=null,v=C}while(v!==null)}}N=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,N=l;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:or(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,N=f;break e}N=o.return}}var d=e.current;for(N=d;N!==null;){l=N;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,N=p;else e:for(l=d;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ho(9,a)}}catch(E){Y(a,a.return,E)}if(a===l){N=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,N=y;break e}N=a.return}}if(F=i,Mt(),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(oo,e)}catch{}r=!0}return r}finally{A=n,$e.transition=t}}return!1}function yu(e,t,n){t=Nn(n,t),t=Ld(e,t,1),e=Pt(e,t,1),t=ye(),e!==null&&(Rr(e,1,t),Ee(e,t))}function Y(e,t,n){if(e.tag===3)yu(e,e,n);else for(;t!==null;){if(t.tag===3){yu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_t===null||!_t.has(r))){e=Nn(n,e),e=Rd(t,e,1),t=Pt(t,e,1),e=ye(),t!==null&&(Rr(t,1,e),Ee(t,e));break}}t=t.return}}function bh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ye(),e.pingedLanes|=e.suspendedLanes&n,ie===e&&(ae&n)===n&&(te===4||te===3&&(ae&130023424)===ae&&500>Z()-Ja?Vt(e,0):Za|=n),Ee(e,t)}function Zd(e,t){t===0&&(e.mode&1?(t=Hr,Hr<<=1,!(Hr&130023424)&&(Hr=4194304)):t=1);var n=ye();e=ct(e,t),e!==null&&(Rr(e,t,n),Ee(e,n))}function Kh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zd(e,n)}function Yh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Zd(e,n)}var Jd;Jd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,Mh(e,t,n);Se=!!(e.flags&131072)}else Se=!1,V&&t.flags&1048576&&td(t,Hi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ci(e,t),e=t.pendingProps;var i=jn(t,ge.current);wn(t,n),i=Qa(null,t,r,e,i,n);var o=ba();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,je(r)?(o=!0,Bi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ua(t),i.updater=fo,t.stateNode=i,i._reactInternals=t,Ql(t,r,e,n),t=Yl(null,t,r,!0,o,n)):(t.tag=0,V&&o&&Oa(t),ve(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ci(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Gh(r),e=We(r,e),i){case 0:t=Kl(null,t,r,e,n);break e;case 1:t=su(null,t,r,e,n);break e;case 11:t=lu(null,t,r,e,n);break e;case 14:t=au(null,t,r,We(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),Kl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),su(e,t,r,i,n);case 3:e:{if(Md(t),e===null)throw Error(S(387));r=t.pendingProps,o=t.memoizedState,i=o.element,od(e,t),bi(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Nn(Error(S(423)),t),t=uu(e,t,r,n,i);break e}else if(r!==i){i=Nn(Error(S(424)),t),t=uu(e,t,r,n,i);break e}else for(Te=Et(t.stateNode.containerInfo.firstChild),Le=t,V=!0,Ve=null,n=ud(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(En(),r===i){t=dt(e,t,n);break e}ve(e,t,r,n)}t=t.child}return t;case 5:return cd(t),e===null&&Wl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Dl(r,i)?l=null:o!==null&&Dl(r,o)&&(t.flags|=32),Id(e,t),ve(e,t,l,n),t.child;case 6:return e===null&&Wl(t),null;case 13:return Fd(e,t,n);case 4:return Ba(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Pn(t,null,r,n):ve(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),lu(e,t,r,i,n);case 7:return ve(e,t,t.pendingProps,n),t.child;case 8:return ve(e,t,t.pendingProps.children,n),t.child;case 12:return ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,B(Vi,r._currentValue),r._currentValue=l,o!==null)if(Ke(o.value,l)){if(o.children===i.children&&!Ce.current){t=dt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=at(-1,n&-n),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?s.next=s:(s.next=h.next,h.next=s),c.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Hl(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(S(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Hl(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ve(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,wn(t,n),i=Ae(i),r=r(i),t.flags|=1,ve(e,t,r,n),t.child;case 14:return r=t.type,i=We(r,t.pendingProps),i=We(r.type,i),au(e,t,r,i,n);case 15:return zd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),Ci(e,t),t.tag=1,je(r)?(e=!0,Bi(t)):e=!1,wn(t,n),ad(t,r,i),Ql(t,r,i,n),Yl(null,t,r,!0,e,n);case 19:return Dd(e,t,n);case 22:return Od(e,t,n)}throw Error(S(156,t.tag))};function qd(e,t){return Ec(e,t)}function Xh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,t,n,r){return new Xh(e,t,n,r)}function ns(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gh(e){if(typeof e=="function")return ns(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ka)return 11;if(e===Sa)return 14}return 2}function Tt(e,t){var n=e.alternate;return n===null?(n=De(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Pi(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")ns(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case on:return Qt(n.children,i,o,t);case wa:l=8,i|=8;break;case ml:return e=De(12,n,t,i|2),e.elementType=ml,e.lanes=o,e;case gl:return e=De(13,n,t,i),e.elementType=gl,e.lanes=o,e;case vl:return e=De(19,n,t,i),e.elementType=vl,e.lanes=o,e;case sc:return go(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case lc:l=10;break e;case ac:l=9;break e;case ka:l=11;break e;case Sa:l=14;break e;case mt:l=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=De(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Qt(e,t,n,r){return e=De(7,e,r,t),e.lanes=n,e}function go(e,t,n,r){return e=De(22,e,r,t),e.elementType=sc,e.lanes=n,e.stateNode={isHidden:!1},e}function tl(e,t,n){return e=De(6,e,null,t),e.lanes=n,e}function nl(e,t,n){return t=De(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Zh(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fo(0),this.expirationTimes=Fo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function rs(e,t,n,r,i,o,l,a,s){return e=new Zh(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=De(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ua(o),e}function Jh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ef(e){if(!e)return zt;e=e._reactInternals;e:{if(Jt(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(je(n))return qc(e,n,t)}return t}function tf(e,t,n,r,i,o,l,a,s){return e=rs(n,r,!0,e,i,o,l,a,s),e.context=ef(null),n=e.current,r=ye(),i=Nt(n),o=at(r,i),o.callback=t??null,Pt(n,o,i),e.current.lanes=i,Rr(e,i,r),Ee(e,r),e}function vo(e,t,n,r){var i=t.current,o=ye(),l=Nt(i);return n=ef(n),t.context===null?t.context=n:t.pendingContext=n,t=at(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Pt(i,t,l),e!==null&&(be(e,i,l,o),wi(e,i,l)),l}function eo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function is(e,t){xu(e,t),(e=e.alternate)&&xu(e,t)}function qh(){return null}var nf=typeof reportError=="function"?reportError:function(e){console.error(e)};function os(e){this._internalRoot=e}yo.prototype.render=os.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));vo(e,t,null,null)};yo.prototype.unmount=os.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gt(function(){vo(null,e,null,null)}),t[ut]=null}};function yo(e){this._internalRoot=e}yo.prototype.unstable_scheduleHydration=function(e){if(e){var t=zc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<vt.length&&t!==0&&t<vt[n].priority;n++);vt.splice(n,0,e),n===0&&Ic(e)}};function ls(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wu(){}function em(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=eo(l);o.call(c)}}var l=tf(t,r,e,0,null,!1,!1,"",wu);return e._reactRootContainer=l,e[ut]=l.current,gr(e.nodeType===8?e.parentNode:e),Gt(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=eo(s);a.call(c)}}var s=rs(e,0,!1,null,null,!1,!1,"",wu);return e._reactRootContainer=s,e[ut]=s.current,gr(e.nodeType===8?e.parentNode:e),Gt(function(){vo(t,s,n,r)}),s}function wo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=eo(l);a.call(s)}}vo(t,l,e,i)}else l=em(n,t,e,i,r);return eo(l)}Lc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Zn(t.pendingLanes);n!==0&&(Ea(t,n|1),Ee(t,Z()),!(F&6)&&(Tn=Z()+500,Mt()))}break;case 13:Gt(function(){var r=ct(e,1);if(r!==null){var i=ye();be(r,e,1,i)}}),is(e,1)}};Pa=function(e){if(e.tag===13){var t=ct(e,134217728);if(t!==null){var n=ye();be(t,e,134217728,n)}is(e,134217728)}};Rc=function(e){if(e.tag===13){var t=Nt(e),n=ct(e,t);if(n!==null){var r=ye();be(n,e,t,r)}is(e,t)}};zc=function(){return A};Oc=function(e,t){var n=A;try{return A=e,t()}finally{A=n}};_l=function(e,t,n){switch(t){case"input":if(wl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=uo(r);if(!i)throw Error(S(90));cc(r),wl(r,i)}}}break;case"textarea":fc(e,n);break;case"select":t=n.value,t!=null&&gn(e,!!n.multiple,t,!1)}};xc=qa;wc=Gt;var tm={usingClientEntryPoint:!1,Events:[Or,un,uo,vc,yc,qa]},Kn={findFiberByHostInstance:Bt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},nm={bundleType:Kn.bundleType,version:Kn.version,rendererPackageName:Kn.rendererPackageName,rendererConfig:Kn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Cc(e),e===null?null:e.stateNode},findFiberByHostInstance:Kn.findFiberByHostInstance||qh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ei=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ei.isDisabled&&ei.supportsFiber)try{oo=ei.inject(nm),qe=ei}catch{}}Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tm;Oe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ls(t))throw Error(S(200));return Jh(e,t,null,n)};Oe.createRoot=function(e,t){if(!ls(e))throw Error(S(299));var n=!1,r="",i=nf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=rs(e,1,!1,null,null,n,!1,r,i),e[ut]=t.current,gr(e.nodeType===8?e.parentNode:e),new os(t)};Oe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Cc(t),e=e===null?null:e.stateNode,e};Oe.flushSync=function(e){return Gt(e)};Oe.hydrate=function(e,t,n){if(!xo(t))throw Error(S(200));return wo(null,e,t,!0,n)};Oe.hydrateRoot=function(e,t,n){if(!ls(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=nf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=tf(t,null,e,1,n??null,i,!1,o,l),e[ut]=t.current,gr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new yo(t)};Oe.render=function(e,t,n){if(!xo(t))throw Error(S(200));return wo(null,e,t,!1,n)};Oe.unmountComponentAtNode=function(e){if(!xo(e))throw Error(S(40));return e._reactRootContainer?(Gt(function(){wo(null,null,e,!1,function(){e._reactRootContainer=null,e[ut]=null})}),!0):!1};Oe.unstable_batchedUpdates=qa;Oe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!xo(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return wo(e,t,n,!1,r)};Oe.version="18.2.0-next-9e3b772b8-20220608";function rf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rf)}catch(e){console.error(e)}}rf(),tc.exports=Oe;var rm=tc.exports,of,ku=rm;of=ku.createRoot,ku.hydrateRoot;/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Er(){return Er=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Er.apply(this,arguments)}var kt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(kt||(kt={}));const Su="popstate";function im(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:a}=r.location;return la("",{pathname:o,search:l,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:to(i)}return lm(t,n,null,e)}function X(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function lf(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function om(){return Math.random().toString(36).substr(2,8)}function Cu(e,t){return{usr:e.state,key:e.key,idx:t}}function la(e,t,n,r){return n===void 0&&(n=null),Er({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Mn(t):t,{state:n,key:t&&t.key||r||om()})}function to(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Mn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function lm(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,a=kt.Pop,s=null,c=h();c==null&&(c=0,l.replaceState(Er({},l.state,{idx:c}),""));function h(){return(l.state||{idx:null}).idx}function m(){a=kt.Pop;let C=h(),f=C==null?null:C-c;c=C,s&&s({action:a,location:v.location,delta:f})}function g(C,f){a=kt.Push;let d=la(v.location,C,f);c=h()+1;let p=Cu(d,c),y=v.createHref(d);try{l.pushState(p,"",y)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(y)}o&&s&&s({action:a,location:v.location,delta:1})}function w(C,f){a=kt.Replace;let d=la(v.location,C,f);c=h();let p=Cu(d,c),y=v.createHref(d);l.replaceState(p,"",y),o&&s&&s({action:a,location:v.location,delta:0})}function x(C){let f=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof C=="string"?C:to(C);return d=d.replace(/ $/,"%20"),X(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let v={get action(){return a},get location(){return e(i,l)},listen(C){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(Su,m),s=C,()=>{i.removeEventListener(Su,m),s=null}},createHref(C){return t(i,C)},createURL:x,encodeLocation(C){let f=x(C);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:w,go(C){return l.go(C)}};return v}var ju;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ju||(ju={}));function am(e,t,n){n="/";let r=typeof t=="string"?Mn(t):t,i=Ln(r.pathname||"/",n);if(i==null)return null;let o=af(e);sm(o);let l=null;for(let a=0;l==null&&a<o.length;++a){let s=xm(i);l=vm(o[a],s)}return l}function af(e,t,n,r){t=[],n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,a)=>{let s={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};s.relativePath.startsWith("/")&&(X(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=Lt([r,s.relativePath]),h=n.concat(s);o.children&&o.children.length>0&&(X(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),af(o.children,t,h,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:mm(c,o.index),routesMeta:h})};return e.forEach((o,l)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,l);else for(let s of sf(o.path))i(o,l,s)}),t}function sf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=sf(r.join("/")),a=[];return a.push(...l.map(s=>s===""?o:[o,s].join("/"))),i&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function sm(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:gm(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const um=/^:[\w-]+$/,cm=3,dm=2,fm=1,pm=10,hm=-2,Eu=e=>e==="*";function mm(e,t){let n=e.split("/"),r=n.length;return n.some(Eu)&&(r+=hm),t&&(r+=dm),n.filter(i=>!Eu(i)).reduce((i,o)=>i+(um.test(o)?cm:o===""?fm:pm),r)}function gm(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function vm(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let a=n[l],s=l===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",h=aa({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},c);if(!h)return null;Object.assign(r,h.params);let m=a.route;o.push({params:r,pathname:Lt([i,h.pathname]),pathnameBase:Cm(Lt([i,h.pathnameBase])),route:m}),h.pathnameBase!=="/"&&(i=Lt([i,h.pathnameBase]))}return o}function aa(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ym(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,m)=>{let{paramName:g,isOptional:w}=h;if(g==="*"){let v=a[m]||"";l=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const x=a[m];return w&&!x?c[g]=void 0:c[g]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:l,pattern:e}}function ym(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),lf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function xm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return lf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ln(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function wm(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Mn(e):e;return{pathname:n?n.startsWith("/")?n:km(n,t):t,search:jm(r),hash:Em(i)}}function km(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function rl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Sm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function as(e,t){let n=Sm(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ss(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Mn(e):(i=Er({},e),X(!i.pathname||!i.pathname.includes("?"),rl("?","pathname","search",i)),X(!i.pathname||!i.pathname.includes("#"),rl("#","pathname","hash",i)),X(!i.search||!i.search.includes("#"),rl("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,a;if(l==null)a=n;else{let m=t.length-1;if(!r&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}a=m>=0?t[m]:"/"}let s=wm(i,a),c=l&&l!=="/"&&l.endsWith("/"),h=(o||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||h)&&(s.pathname+="/"),s}const Lt=e=>e.join("/").replace(/\/\/+/g,"/"),Cm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),jm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Em=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,uf=["post","put","patch","delete"];new Set(uf);const Pm=["get",...uf];new Set(Pm);/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pr(){return Pr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pr.apply(this,arguments)}const ko=_.createContext(null),_m=_.createContext(null),pt=_.createContext(null),So=_.createContext(null),Ft=_.createContext({outlet:null,matches:[],isDataRoute:!1});function Nm(e,t){let{relative:n}=t===void 0?{}:t;Fn()||X(!1);let{basename:r,navigator:i}=_.useContext(pt),{hash:o,pathname:l,search:a}=Co(e,{relative:n}),s=l;return r!=="/"&&(s=l==="/"?r:Lt([r,l])),i.createHref({pathname:s,search:a,hash:o})}function Fn(){return _.useContext(So)!=null}function nt(){return Fn()||X(!1),_.useContext(So).location}function cf(e){_.useContext(pt).static||_.useLayoutEffect(e)}function df(){let{isDataRoute:e}=_.useContext(Ft);return e?Am():Tm()}function Tm(){Fn()||X(!1);let e=_.useContext(ko),{basename:t,future:n,navigator:r}=_.useContext(pt),{matches:i}=_.useContext(Ft),{pathname:o}=nt(),l=JSON.stringify(as(i,n.v7_relativeSplatPath)),a=_.useRef(!1);return cf(()=>{a.current=!0}),_.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let m=ss(c,JSON.parse(l),o,h.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Lt([t,m.pathname])),(h.replace?r.replace:r.push)(m,h.state,h)},[t,r,l,o,e])}const Lm=_.createContext(null);function Rm(e){let t=_.useContext(Ft).outlet;return t&&_.createElement(Lm.Provider,{value:e},t)}function Co(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=_.useContext(pt),{matches:i}=_.useContext(Ft),{pathname:o}=nt(),l=JSON.stringify(as(i,r.v7_relativeSplatPath));return _.useMemo(()=>ss(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function zm(e,t){return Om(e,t)}function Om(e,t,n,r){Fn()||X(!1);let{navigator:i}=_.useContext(pt),{matches:o}=_.useContext(Ft),l=o[o.length-1],a=l?l.params:{};l&&l.pathname;let s=l?l.pathnameBase:"/";l&&l.route;let c=nt(),h;if(t){var m;let C=typeof t=="string"?Mn(t):t;s==="/"||(m=C.pathname)!=null&&m.startsWith(s)||X(!1),h=C}else h=c;let g=h.pathname||"/",w=g;if(s!=="/"){let C=s.replace(/^\//,"").split("/");w="/"+g.replace(/^\//,"").split("/").slice(C.length).join("/")}let x=am(e,{pathname:w}),v=Mm(x&&x.map(C=>Object.assign({},C,{params:Object.assign({},a,C.params),pathname:Lt([s,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?s:Lt([s,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),o,n);return t&&v?_.createElement(So.Provider,{value:{location:Pr({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:kt.Pop}},v):v}function Im(e){let{routeContext:t,match:n,children:r}=e,i=_.useContext(ko);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(Ft.Provider,{value:t},r)}function Mm(e,t,n,r){var i;if(t===void 0&&(t=[]),n=null,e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let l=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let s=l.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id])!==void 0);s>=0||X(!1),l=l.slice(0,Math.min(l.length,s+1))}return l.reduceRight((s,c,h)=>{let m=t.concat(l.slice(0,h+1));return(()=>{let w;return c.route.Component?w=_.createElement(c.route.Component,null):c.route.element?w=c.route.element:w=s,_.createElement(Im,{match:c,routeContext:{outlet:s,matches:m,isDataRoute:n!=null},children:w})})()},null)}var ff=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ff||{}),pf=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(pf||{});function Fm(e){let t=_.useContext(ko);return t||X(!1),t}function Dm(e){let t=_.useContext(Ft);return t||X(!1),t}function $m(e){let t=Dm(),n=t.matches[t.matches.length-1];return n.route.id||X(!1),n.route.id}function Am(){let{router:e}=Fm(ff.UseNavigateStable),t=$m(pf.UseNavigateStable),n=_.useRef(!1);return cf(()=>{n.current=!0}),_.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Pr({fromRouteId:t},o)))},[e,t])}function Um(e){let{to:t,replace:n,state:r,relative:i}=e;Fn()||X(!1);let{future:o,static:l}=_.useContext(pt),{matches:a}=_.useContext(Ft),{pathname:s}=nt(),c=df(),h=ss(t,as(a,o.v7_relativeSplatPath),s,i==="path"),m=JSON.stringify(h);return _.useEffect(()=>c(JSON.parse(m),{replace:n,state:r,relative:i}),[c,m,i,n,r]),null}function Bm(e){return Rm(e.context)}function _i(e){X(!1)}function Wm(e){let{basename:t="/",children:n=null,location:r,navigationType:i=kt.Pop,navigator:o,static:l=!1,future:a}=e;Fn()&&X(!1);let s=t.replace(/^\/*/,"/"),c=_.useMemo(()=>({basename:s,navigator:o,static:l,future:Pr({v7_relativeSplatPath:!1},a)}),[s,a,o,l]);typeof r=="string"&&(r=Mn(r));let{pathname:h="/",search:m="",hash:g="",state:w=null,key:x="default"}=r,v=_.useMemo(()=>{let C=Ln(h,s);return C==null?null:{location:{pathname:C,search:m,hash:g,state:w,key:x},navigationType:i}},[s,h,m,g,w,x,i]);return v==null?null:_.createElement(pt.Provider,{value:c},_.createElement(So.Provider,{children:n,value:v}))}function Hm(e){let{children:t,location:n}=e;return zm(sa(t),n)}new Promise(()=>{});function sa(e,t){t===void 0&&(t=[]);let n=[];return _.Children.forEach(e,(r,i)=>{if(!_.isValidElement(r))return;let o=[...t,i];if(r.type===_.Fragment){n.push.apply(n,sa(r.props.children,o));return}r.type!==_i&&X(!1),!r.props.index||!r.props.children||X(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=sa(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function no(){return no=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},no.apply(this,arguments)}function hf(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Vm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Qm(e,t){return e.button===0&&(!t||t==="_self")&&!Vm(e)}const bm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Km=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],Ym="6";try{window.__reactRouterVersion=Ym}catch{}const Xm=_.createContext({isTransitioning:!1}),Gm="startTransition",Pu=pl[Gm];function Zm(e){let{basename:t,children:n,future:r,window:i}=e,o=_.useRef();o.current==null&&(o.current=im({window:i,v5Compat:!0}));let l=o.current,[a,s]=_.useState({action:l.action,location:l.location}),{v7_startTransition:c}=r||{},h=_.useCallback(m=>{c&&Pu?Pu(()=>s(m)):s(m)},[s,c]);return _.useLayoutEffect(()=>l.listen(h),[l,h]),_.createElement(Wm,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l,future:r})}const Jm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,e0=_.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:a,target:s,to:c,preventScrollReset:h,unstable_viewTransition:m}=t,g=hf(t,bm),{basename:w}=_.useContext(pt),x,v=!1;if(typeof c=="string"&&qm.test(c)&&(x=c,Jm))try{let p=new URL(window.location.href),y=c.startsWith("//")?new URL(p.protocol+c):new URL(c),E=Ln(y.pathname,w);y.origin===p.origin&&E!=null?c=E+y.search+y.hash:v=!0}catch{}let C=Nm(c,{relative:i}),f=n0(c,{replace:l,state:a,target:s,preventScrollReset:h,relative:i,unstable_viewTransition:m});function d(p){r&&r(p),p.defaultPrevented||f(p)}return _.createElement("a",no({},g,{href:x||C,onClick:v||o?r:d,ref:n,target:s}))}),jo=_.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:l=!1,style:a,to:s,unstable_viewTransition:c,children:h}=t,m=hf(t,Km),g=Co(s,{relative:m.relative}),w=nt(),x=_.useContext(_m),{navigator:v,basename:C}=_.useContext(pt),f=x!=null&&r0(g)&&c===!0,d=v.encodeLocation?v.encodeLocation(g).pathname:g.pathname,p=w.pathname,y=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;i||(p=p.toLowerCase(),y=y?y.toLowerCase():null,d=d.toLowerCase()),y&&C&&(y=Ln(y,C)||y);const E=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let P=p===d||!l&&p.startsWith(d)&&p.charAt(E)==="/",j=y!=null&&(y===d||!l&&y.startsWith(d)&&y.charAt(d.length)==="/"),L={isActive:P,isPending:j,isTransitioning:f},U=P?r:void 0,R;typeof o=="function"?R=o(L):R=[o,P?"active":null,j?"pending":null,f?"transitioning":null].filter(Boolean).join(" ");let _e=typeof a=="function"?a(L):a;return _.createElement(e0,no({},m,{"aria-current":U,className:R,ref:n,style:_e,to:s,unstable_viewTransition:c}),typeof h=="function"?h(L):h)});var ua;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ua||(ua={}));var _u;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(_u||(_u={}));function t0(e){let t=_.useContext(ko);return t||X(!1),t}function n0(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:a}=t===void 0?{}:t,s=df(),c=nt(),h=Co(e,{relative:l});return _.useCallback(m=>{if(Qm(m,n)){m.preventDefault();let g=r!==void 0?r:to(c)===to(h);s(e,{replace:g,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:a})}},[c,s,h,r,i,n,e,o,l,a])}function r0(e,t){t={};let n=_.useContext(Xm);n==null&&X(!1);let{basename:r}=t0(ua.useViewTransitionState),i=Co(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=Ln(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=Ln(n.nextLocation.pathname,r)||n.nextLocation.pathname;return aa(i.pathname,l)!=null||aa(i.pathname,o)!=null}const Nu={HOME:"/",PORTFOLIO:"/portfolio"};function ca(){return ca=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ca.apply(this,arguments)}function mf(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var i0=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,o0=mf(function(e){return i0.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function l0(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function a0(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var s0=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(a0(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=l0(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),he="-ms-",ro="-moz-",D="-webkit-",gf="comm",us="rule",cs="decl",u0="@import",vf="@keyframes",c0="@layer",d0=Math.abs,Eo=String.fromCharCode,f0=Object.assign;function p0(e,t){return le(e,0)^45?(((t<<2^le(e,0))<<2^le(e,1))<<2^le(e,2))<<2^le(e,3):0}function yf(e){return e.trim()}function h0(e,t){return(e=t.exec(e))?e[0]:e}function $(e,t,n){return e.replace(t,n)}function da(e,t){return e.indexOf(t)}function le(e,t){return e.charCodeAt(t)|0}function _r(e,t,n){return e.slice(t,n)}function Ge(e){return e.length}function ds(e){return e.length}function ti(e,t){return t.push(e),e}function m0(e,t){return e.map(t).join("")}var Po=1,Rn=1,xf=0,Pe=0,J=0,Dn="";function _o(e,t,n,r,i,o,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Po,column:Rn,length:l,return:""}}function Yn(e,t){return f0(_o("",null,null,"",null,null,0),e,{length:-e.length},t)}function g0(){return J}function v0(){return J=Pe>0?le(Dn,--Pe):0,Rn--,J===10&&(Rn=1,Po--),J}function Re(){return J=Pe<xf?le(Dn,Pe++):0,Rn++,J===10&&(Rn=1,Po++),J}function tt(){return le(Dn,Pe)}function Ni(){return Pe}function Mr(e,t){return _r(Dn,e,t)}function Nr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function wf(e){return Po=Rn=1,xf=Ge(Dn=e),Pe=0,[]}function kf(e){return Dn="",e}function Ti(e){return yf(Mr(Pe-1,fa(e===91?e+2:e===40?e+1:e)))}function y0(e){for(;(J=tt())&&J<33;)Re();return Nr(e)>2||Nr(J)>3?"":" "}function x0(e,t){for(;--t&&Re()&&!(J<48||J>102||J>57&&J<65||J>70&&J<97););return Mr(e,Ni()+(t<6&&tt()==32&&Re()==32))}function fa(e){for(;Re();)switch(J){case e:return Pe;case 34:case 39:e!==34&&e!==39&&fa(J);break;case 40:e===41&&fa(e);break;case 92:Re();break}return Pe}function w0(e,t){for(;Re()&&e+J!==57;)if(e+J===84&&tt()===47)break;return"/*"+Mr(t,Pe-1)+"*"+Eo(e===47?e:Re())}function k0(e){for(;!Nr(tt());)Re();return Mr(e,Pe)}function S0(e){return kf(Li("",null,null,null,[""],e=wf(e),0,[0],e))}function Li(e,t,n,r,i,o,l,a,s){for(var c=0,h=0,m=l,g=0,w=0,x=0,v=1,C=1,f=1,d=0,p="",y=i,E=o,P=r,j=p;C;)switch(x=d,d=Re()){case 40:if(x!=108&&le(j,m-1)==58){da(j+=$(Ti(d),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:j+=Ti(d);break;case 9:case 10:case 13:case 32:j+=y0(x);break;case 92:j+=x0(Ni()-1,7);continue;case 47:switch(tt()){case 42:case 47:ti(C0(w0(Re(),Ni()),t,n),s);break;default:j+="/"}break;case 123*v:a[c++]=Ge(j)*f;case 125*v:case 59:case 0:switch(d){case 0:case 125:C=0;case 59+h:f==-1&&(j=$(j,/\f/g,"")),w>0&&Ge(j)-m&&ti(w>32?Lu(j+";",r,n,m-1):Lu($(j," ","")+";",r,n,m-2),s);break;case 59:j+=";";default:if(ti(P=Tu(j,t,n,c,h,i,a,p,y=[],E=[],m),o),d===123)if(h===0)Li(j,t,P,P,y,o,m,a,E);else switch(g===99&&le(j,3)===110?100:g){case 100:case 108:case 109:case 115:Li(e,P,P,r&&ti(Tu(e,P,P,0,0,i,a,p,i,y=[],m),E),i,E,m,a,r?y:E);break;default:Li(j,P,P,P,[""],E,0,a,E)}}c=h=w=0,v=f=1,p=j="",m=l;break;case 58:m=1+Ge(j),w=x;default:if(v<1){if(d==123)--v;else if(d==125&&v++==0&&v0()==125)continue}switch(j+=Eo(d),d*v){case 38:f=h>0?1:(j+="\f",-1);break;case 44:a[c++]=(Ge(j)-1)*f,f=1;break;case 64:tt()===45&&(j+=Ti(Re())),g=tt(),h=m=Ge(p=j+=k0(Ni())),d++;break;case 45:x===45&&Ge(j)==2&&(v=0)}}return o}function Tu(e,t,n,r,i,o,l,a,s,c,h){for(var m=i-1,g=i===0?o:[""],w=ds(g),x=0,v=0,C=0;x<r;++x)for(var f=0,d=_r(e,m+1,m=d0(v=l[x])),p=e;f<w;++f)(p=yf(v>0?g[f]+" "+d:$(d,/&\f/g,g[f])))&&(s[C++]=p);return _o(e,t,n,i===0?us:a,s,c,h)}function C0(e,t,n){return _o(e,t,n,gf,Eo(g0()),_r(e,2,-2),0)}function Lu(e,t,n,r){return _o(e,t,n,cs,_r(e,0,r),_r(e,r+1,-1),r)}function Sn(e,t){for(var n="",r=ds(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function j0(e,t,n,r){switch(e.type){case c0:if(e.children.length)break;case u0:case cs:return e.return=e.return||e.value;case gf:return"";case vf:return e.return=e.value+"{"+Sn(e.children,r)+"}";case us:e.value=e.props.join(",")}return Ge(n=Sn(e.children,r))?e.return=e.value+"{"+n+"}":""}function E0(e){var t=ds(e);return function(n,r,i,o){for(var l="",a=0;a<t;a++)l+=e[a](n,r,i,o)||"";return l}}function P0(e){return function(t){t.root||(t=t.return)&&e(t)}}var _0=function(t,n,r){for(var i=0,o=0;i=o,o=tt(),i===38&&o===12&&(n[r]=1),!Nr(o);)Re();return Mr(t,Pe)},N0=function(t,n){var r=-1,i=44;do switch(Nr(i)){case 0:i===38&&tt()===12&&(n[r]=1),t[r]+=_0(Pe-1,n,r);break;case 2:t[r]+=Ti(i);break;case 4:if(i===44){t[++r]=tt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Eo(i)}while(i=Re());return t},T0=function(t,n){return kf(N0(wf(t),n))},Ru=new WeakMap,L0=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Ru.get(r))&&!i){Ru.set(t,!0);for(var o=[],l=T0(n,o),a=r.props,s=0,c=0;s<l.length;s++)for(var h=0;h<a.length;h++,c++)t.props[c]=o[s]?l[s].replace(/&\f/g,a[h]):a[h]+" "+l[s]}}},R0=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Sf(e,t){switch(p0(e,t)){case 5103:return D+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return D+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return D+e+ro+e+he+e+e;case 6828:case 4268:return D+e+he+e+e;case 6165:return D+e+he+"flex-"+e+e;case 5187:return D+e+$(e,/(\w+).+(:[^]+)/,D+"box-$1$2"+he+"flex-$1$2")+e;case 5443:return D+e+he+"flex-item-"+$(e,/flex-|-self/,"")+e;case 4675:return D+e+he+"flex-line-pack"+$(e,/align-content|flex-|-self/,"")+e;case 5548:return D+e+he+$(e,"shrink","negative")+e;case 5292:return D+e+he+$(e,"basis","preferred-size")+e;case 6060:return D+"box-"+$(e,"-grow","")+D+e+he+$(e,"grow","positive")+e;case 4554:return D+$(e,/([^-])(transform)/g,"$1"+D+"$2")+e;case 6187:return $($($(e,/(zoom-|grab)/,D+"$1"),/(image-set)/,D+"$1"),e,"")+e;case 5495:case 3959:return $(e,/(image-set\([^]*)/,D+"$1$`$1");case 4968:return $($(e,/(.+:)(flex-)?(.*)/,D+"box-pack:$3"+he+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+D+e+e;case 4095:case 3583:case 4068:case 2532:return $(e,/(.+)-inline(.+)/,D+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ge(e)-1-t>6)switch(le(e,t+1)){case 109:if(le(e,t+4)!==45)break;case 102:return $(e,/(.+:)(.+)-([^]+)/,"$1"+D+"$2-$3$1"+ro+(le(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~da(e,"stretch")?Sf($(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(le(e,t+1)!==115)break;case 6444:switch(le(e,Ge(e)-3-(~da(e,"!important")&&10))){case 107:return $(e,":",":"+D)+e;case 101:return $(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+D+(le(e,14)===45?"inline-":"")+"box$3$1"+D+"$2$3$1"+he+"$2box$3")+e}break;case 5936:switch(le(e,t+11)){case 114:return D+e+he+$(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return D+e+he+$(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return D+e+he+$(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return D+e+he+e+e}return e}var z0=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case cs:t.return=Sf(t.value,t.length);break;case vf:return Sn([Yn(t,{value:$(t.value,"@","@"+D)})],i);case us:if(t.length)return m0(t.props,function(o){switch(h0(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Sn([Yn(t,{props:[$(o,/:(read-\w+)/,":"+ro+"$1")]})],i);case"::placeholder":return Sn([Yn(t,{props:[$(o,/:(plac\w+)/,":"+D+"input-$1")]}),Yn(t,{props:[$(o,/:(plac\w+)/,":"+ro+"$1")]}),Yn(t,{props:[$(o,/:(plac\w+)/,he+"input-$1")]})],i)}return""})}},O0=[z0],I0=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var C=v.getAttribute("data-emotion");C.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=t.stylisPlugins||O0,o={},l,a=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var C=v.getAttribute("data-emotion").split(" "),f=1;f<C.length;f++)o[C[f]]=!0;a.push(v)});var s,c=[L0,R0];{var h,m=[j0,P0(function(v){h.insert(v)})],g=E0(c.concat(i,m)),w=function(C){return Sn(S0(C),g)};s=function(C,f,d,p){h=d,w(C?C+"{"+f.styles+"}":f.styles),p&&(x.inserted[f.name]=!0)}}var x={key:n,sheet:new s0({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return x.sheet.hydrate(a),x},M0=!0;function F0(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Cf=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||M0===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},D0=function(t,n,r){Cf(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function $0(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var A0={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},U0=/[A-Z]|^ms/g,B0=/_EMO_([^_]+?)_([^]*?)_EMO_/g,jf=function(t){return t.charCodeAt(1)===45},zu=function(t){return t!=null&&typeof t!="boolean"},il=mf(function(e){return jf(e)?e:e.replace(U0,"-$&").toLowerCase()}),Ou=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(B0,function(r,i,o){return Ze={name:i,styles:o,next:Ze},i})}return A0[t]!==1&&!jf(t)&&typeof n=="number"&&n!==0?n+"px":n};function Tr(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Ze={name:n.name,styles:n.styles,next:Ze},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Ze={name:r.name,styles:r.styles,next:Ze},r=r.next;var i=n.styles+";";return i}return W0(e,t,n)}case"function":{if(e!==void 0){var o=Ze,l=n(e);return Ze=o,Tr(e,t,l)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function W0(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Tr(e,t,n[i])+";";else for(var o in n){var l=n[o];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=o+"{"+t[l]+"}":zu(l)&&(r+=il(o)+":"+Ou(o,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var a=0;a<l.length;a++)zu(l[a])&&(r+=il(o)+":"+Ou(o,l[a])+";");else{var s=Tr(e,t,l);switch(o){case"animation":case"animationName":{r+=il(o)+":"+s+";";break}default:r+=o+"{"+s+"}"}}}return r}var Iu=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Ze,H0=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";Ze=void 0;var l=t[0];l==null||l.raw===void 0?(i=!1,o+=Tr(r,n,l)):o+=l[0];for(var a=1;a<t.length;a++)o+=Tr(r,n,t[a]),i&&(o+=l[a]);Iu.lastIndex=0;for(var s="",c;(c=Iu.exec(o))!==null;)s+="-"+c[1];var h=$0(o)+s;return{name:h,styles:o,next:Ze}},V0=function(t){return t()},Q0=pl.useInsertionEffect?pl.useInsertionEffect:!1,b0=Q0||V0,Ef=_.createContext(typeof HTMLElement<"u"?I0({key:"css"}):null);Ef.Provider;var K0=function(t){return _.forwardRef(function(n,r){var i=_.useContext(Ef);return t(n,i,r)})},Y0=_.createContext({}),X0=o0,G0=function(t){return t!=="theme"},Mu=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?X0:G0},Fu=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(l){return t.__emotion_forwardProp(l)&&o(l)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},Z0=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Cf(n,r,i),b0(function(){return D0(n,r,i)}),null},J0=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,l;n!==void 0&&(o=n.label,l=n.target);var a=Fu(t,n,r),s=a||Mu(i),c=!s("as");return function(){var h=arguments,m=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&m.push("label:"+o+";"),h[0]==null||h[0].raw===void 0)m.push.apply(m,h);else{m.push(h[0][0]);for(var g=h.length,w=1;w<g;w++)m.push(h[w],h[0][w])}var x=K0(function(v,C,f){var d=c&&v.as||i,p="",y=[],E=v;if(v.theme==null){E={};for(var P in v)E[P]=v[P];E.theme=_.useContext(Y0)}typeof v.className=="string"?p=F0(C.registered,y,v.className):v.className!=null&&(p=v.className+" ");var j=H0(m.concat(y),C.registered,E);p+=C.key+"-"+j.name,l!==void 0&&(p+=" "+l);var L=c&&a===void 0?Mu(d):s,U={};for(var R in v)c&&R==="as"||L(R)&&(U[R]=v[R]);return U.className=p,U.ref=f,_.createElement(_.Fragment,null,_.createElement(Z0,{cache:C,serialized:j,isStringTag:typeof d=="string"}),_.createElement(d,U))});return x.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",x.defaultProps=t.defaultProps,x.__emotion_real=x,x.__emotion_base=i,x.__emotion_styles=m,x.__emotion_forwardProp=a,Object.defineProperty(x,"toString",{value:function(){return"."+l}}),x.withComponent=function(v,C){return e(v,ca({},n,C,{shouldForwardProp:Fu(x,C,!0)})).apply(void 0,m)},x}},q0=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],k=J0.bind();q0.forEach(function(e){k[e]=k(e)});const eg=k.header`
    background-color: var(--body-background-color);
    border-bottom: 1px solid;
    color: #ececec;
    padding: 0;
`,tg=k.div`
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
`,ng=k(jo)`
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
`,rg=k.span`
    color: var(--beckground-color);
`,ig=k.div`
    display: flex;
    align-items: center;
    padding: 0 15px;
    @media(max-width: 767px) {
        margin-top: 16px;
        justify-content: space-between;
        margin-bottom: 16px;
    }

`,og=k.button`
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

`,lg=k.svg`
`,ag=k.div`
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

`,sg=k.div`
    opacity: 1;
    visibility: visible;
    pointer - events: auto;

`,ug=k.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100 %;
`,cg=k.div`
    margin-bottom: auto;
`,dg=k.button`
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

`,fg=k.svg`
    width: 18.67px;
    height: 18.67px;

`,M="/goit-markup-react/assets/icons-WWKJvoXN.svg",Pf=()=>u.jsxs(u.Fragment,{children:[u.jsx(og,{type:"button",id:"js-open-menu",children:u.jsx(lg,{width:"24",height:"12",children:u.jsx("use",{href:M+"#icon-menu"})})}),u.jsx(ag,{children:u.jsx(sg,{children:u.jsx(ug,{children:u.jsx(cg,{children:u.jsx(dg,{children:u.jsx(fg,{children:u.jsx("use",{href:M+"#icon-close-menu"})})})})})})})]}),pg=k.ul`
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
`,ol=k.li`
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
`,ll=k(jo)`
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

`,hg=k.a`

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
`;const mg=()=>{const e=nt();return u.jsxs(pg,{children:[u.jsx(ol,{children:u.jsx(ll,{to:"/",state:{from:e},children:u.jsx(hg,{children:"Студія"})})}),u.jsx(ol,{children:u.jsx(ll,{to:"/portfolio",state:{from:e},children:"Портфоліо"})}),u.jsx(ol,{children:u.jsx(ll,{href:"#",children:"Контакти"})})]})},gg=k.ul`
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

`,$u=k.a`
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
`,Au=k.svg`
    margin-right: 10px;
}
`,_f=()=>u.jsxs(gg,{children:[u.jsx(Du,{children:u.jsxs($u,{href:"mailto:info@devstudio.com",children:[u.jsx(Au,{width:"16",height:"12",children:u.jsx("use",{href:M+"#poshta"})}),"info@devstudio.com"]})}),u.jsx(Du,{children:u.jsxs($u,{href:"tel:+380961111111",children:[u.jsx(Au,{width:"12",height:"16",children:u.jsx("use",{href:M+"#smartphone"})}),"+38 096 111 11 11"]})})]}),vg=()=>{const e=nt();return u.jsx(eg,{children:u.jsx(tg,{children:u.jsxs(ig,{children:[u.jsxs(ng,{to:"/",state:{from:e},lang:"en","data-wow-offset":"100",children:[u.jsx(rg,{children:"Web"}),"Studio"]}),u.jsxs(u.Fragment,{children:[" ",u.jsx(mg,{})," ",u.jsx(_f,{})]})," ",u.jsx(Pf,{id:"js-menu-container"})]})})})},yg="/goit-markup-react/assets/%D1%81oworker-mobile-DkjrP_lB.jpg",xg="/goit-markup-react/assets/%D1%81oworker-mobile@2x-CfTHwFb7.jpg",wg="/goit-markup-react/assets/%D1%81oworker-tablet-DNCU7IaL.jpg",kg="/goit-markup-react/assets/%D1%81oworker-tablet@2x-CltOuUgI.jpg",Sg="/goit-markup-react/assets/%D1%81oworker-CBK_fIvu.jpg",Cg="/goit-markup-react/assets/%D1%81oworker@2x-DEOHsqO2.jpg",jg=k.section`
  padding-top: 118px;
  padding-bottom: 118px;
  background-color: var(--footer-bacground-color);
  text-align: center;
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${yg});
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
      url(${wg});
  }

  @media screen and (min-width: 1200px) {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${Sg});
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
      url(${xg});
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 768px),
    screen and (min-resolution: 192dpi) and (min-width: 768px),
    screen and (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${kg});
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1200px),
    screen and (min-resolution: 192dpi) and (min-width: 1200px),
    screen and (min-resolution: 2dppx) and (min-width: 1200px) {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${Cg});
  }
`,Eg=k.div`
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
`,Pg=k.h1`
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
`,_g=k.button`
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
`,Ng=()=>u.jsx(jg,{children:u.jsxs(Eg,{children:[u.jsxs(Pg,{children:["Ефективні рішення для ",u.jsx("br",{}),"вашого бізнесу"]}),u.jsx(_g,{type:"button","data-modal-open":!0,children:"Замовити послугу"})]})}),Tg=k.section`
    padding-top: 60px;
        padding-bottom: 60px;
    @media (min-width:1200px) {
            padding-top: 94px;
            padding-bottom: 94px;
        }
`,Lg=k.div`
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
`,Rg=k.h2`
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
`,zg=k.ul`
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
    
`,Og=()=>u.jsx(Tg,{children:u.jsxs(Lg,{children:[u.jsx(Rg,{children:"Опис діятельності"}),u.jsxs(zg,{children:[u.jsxs(ni,{children:[u.jsx(ri,{children:u.jsx(ii,{width:"70",height:"70",children:u.jsx("use",{href:M+"#antenna"})})}),u.jsx(oi,{children:"УВАГА ДО ДЕТАЛЕЙ"}),u.jsx(li,{children:"Ідейні міркування, і навіть початок повсякденної роботи з формування позиції."})]}),u.jsxs(ni,{children:[u.jsx(ri,{children:u.jsx(ii,{width:"70",height:"70",children:u.jsx("use",{href:M+"#clock"})})}),u.jsx(oi,{children:"ПУНКТУАЛЬНІСТЬ"}),u.jsx(li,{children:"Завдання організації, особливо рамки і місце навчання кадрів тягне у себе."})]}),u.jsxs(ni,{children:[u.jsx(ri,{children:u.jsx(ii,{width:"70",height:"70",children:u.jsx("use",{href:M+"#diagram"})})}),u.jsx(oi,{children:"ПЛАНУВАННЯ"}),u.jsx(li,{children:"Так само консультація з широким активом значною мірою зумовлює."})]}),u.jsxs(ni,{children:[u.jsx(ri,{children:u.jsx(ii,{width:"70",height:"70",children:u.jsx("use",{href:M+"#astronaut"})})}),u.jsx(oi,{children:"СУЧАСНІ ТЕХНОЛОГІЇ"}),u.jsx(li,{children:"Значимість цих проблем настільки очевидна, що реалізація планових завдань."})]})]})]})}),Ig=k.section`

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
`,Mg=k.div`
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
`,Fg=k.h2`
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
`,Dg=k.ul`
  display: flex;
  gap: 30px;
  align-content: center;
  justify-content: center;

`,al=k.li`
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
`,sl=k.img`
  display: flex;
`,ul=k.p`
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
`,Uu="/goit-markup-react/assets/photo_2022-07-14_23-06-50-w-9GE9pw.jpg",Bu="/goit-markup-react/assets/photo_2022-07-14_23-08-23-ChSN16Q0.jpg",Wu="/goit-markup-react/assets/photo_2022-07-14_23-08-29-DEV7w-ry.jpg",$g=()=>u.jsx(Ig,{children:u.jsxs(Mg,{children:[u.jsx(Fg,{children:"Чим ми займаємося"}),u.jsxs(Dg,{children:[u.jsxs(al,{children:[u.jsx("a",{href:Uu,children:u.jsx(sl,{src:Uu,alt:"photo",width:"370",height:"294"})}),u.jsx(ul,{children:"Десктопні додатки"})]}),u.jsxs(al,{children:[u.jsx("a",{href:Bu,children:u.jsx(sl,{src:Bu,alt:"photo",width:"370",height:"294"})}),u.jsx(ul,{children:"Мобільні додатки"})]}),u.jsxs(al,{children:[u.jsx("a",{href:Wu,children:u.jsx(sl,{src:Wu,alt:"photo",width:"370",height:"294"})}),u.jsx(ul,{children:"Дизайнерські рішення"})]})]})]})}),Ag=k.section`
    background-color: var(--teams-bacground-color);
    align-items: center;
    padding-top: 60px;
        // padding-bottom: 60px;
            padding-bottom: 0px;

    
    @media (min-width:1200px) {
            padding-top: 94px;
            padding-bottom: 94px;
            
        }
`,Ug=k.div`
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
`,Bg=k.h2`
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
`,Wg=k.ul`
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
`,Hg="/goit-markup-react/assets/product-designer-mobile-CR9XjxZR.jpg",Vg="/goit-markup-react/assets/frontend-developer-mobile-CKsiOpXf.jpg",Qg="/goit-markup-react/assets/marketing-mobile-D4eyMM5O.jpg",bg="/goit-markup-react/assets/ui-mobile-CkzJuxso.jpg",Kg=()=>u.jsx(Ag,{children:u.jsxs(Ug,{class:"animate__animated animate__fadeInUp wow","data-wow-offset":"100",children:[u.jsx(Bg,{children:"Наша команда"}),u.jsxs(Wg,{children:[u.jsxs(ai,{children:[u.jsx("img",{src:Hg,alt:"mikola-tarasov-photo"}),u.jsxs(si,{children:[u.jsx(ui,{children:"Ігор Дем`яненко"}),u.jsx(ci,{lang:"en",children:"Product Designer"}),u.jsxs(di,{children:[u.jsx(de,{children:u.jsx(fe,{children:u.jsx(pe,{"aria-label":"іконка інстаграм",width:"20",height:"20",children:u.jsx("use",{href:M+"#icon-instagram"})})})}),u.jsx(de,{children:u.jsx(fe,{children:u.jsx(pe,{"aria-label":"іконка твітер",class:"icones",width:"20",height:"20",children:u.jsx("use",{href:M+"#icon-tviter"})})})}),u.jsx(de,{children:u.jsx(fe,{children:u.jsx(pe,{"aria-label":"іконка феїсбук",class:"icones",width:"20",height:"20",children:u.jsx("use",{href:M+"#icon-facebook"})})})}),u.jsx(de,{children:u.jsx(fe,{children:u.jsx(pe,{"aria-label":"іконка линкедін",class:"icones",width:"20",height:"20",children:u.jsx("use",{href:M+"#icon-linkedin"})})})})]})]})]}),u.jsxs(ai,{children:[u.jsx("img",{src:Vg,alt:"mikola-tarasov-photo"}),u.jsxs(si,{children:[u.jsx(ui,{children:"Ольга Рєпіна"}),u.jsx(ci,{lang:"en",children:"Frontend Developer"}),u.jsxs(di,{children:[u.jsx(de,{children:u.jsx(fe,{children:u.jsx(pe,{"aria-label":"іконка інстаграм",width:"20",height:"20",children:u.jsx("use",{href:M+"#icon-instagram"})})})}),u.jsx(de,{children:u.jsx(fe,{children:u.jsx(pe,{"aria-label":"іконка твітер",class:"icones",width:"20",height:"20",children:u.jsx("use",{href:M+"#icon-tviter"})})})}),u.jsx(de,{children:u.jsx(fe,{children:u.jsx(pe,{"aria-label":"іконка феїсбук",class:"icones",width:"20",height:"20",children:u.jsx("use",{href:M+"#icon-facebook"})})})}),u.jsx(de,{children:u.jsx(fe,{children:u.jsx(pe,{"aria-label":"іконка линкедін",class:"icones",width:"20",height:"20",children:u.jsx("use",{href:M+"#icon-linkedin"})})})})]})]})]}),u.jsxs(ai,{children:[u.jsx("img",{src:Qg,alt:"mikola-tarasov-photo"}),u.jsxs(si,{children:[u.jsx(ui,{children:"Микола Тарасов"}),u.jsx(ci,{lang:"en",children:"Marketing"}),u.jsxs(di,{children:[u.jsx(de,{children:u.jsx(fe,{children:u.jsx(pe,{"aria-label":"іконка інстаграм",width:"20",height:"20",children:u.jsx("use",{href:M+"#icon-instagram"})})})}),u.jsx(de,{children:u.jsx(fe,{children:u.jsx(pe,{"aria-label":"іконка твітер",class:"icones",width:"20",height:"20",children:u.jsx("use",{href:M+"#icon-tviter"})})})}),u.jsx(de,{children:u.jsx(fe,{children:u.jsx(pe,{"aria-label":"іконка феїсбук",class:"icones",width:"20",height:"20",children:u.jsx("use",{href:M+"#icon-facebook"})})})}),u.jsx(de,{children:u.jsx(fe,{children:u.jsx(pe,{"aria-label":"іконка линкедін",class:"icones",width:"20",height:"20",children:u.jsx("use",{href:M+"#icon-linkedin"})})})})]})]})]}),u.jsxs(ai,{children:[u.jsx("img",{src:bg,alt:"mikola-tarasov-photo"}),u.jsxs(si,{children:[u.jsx(ui,{children:"Михайло Єрмаков"}),u.jsx(ci,{lang:"en",children:"UI Designer"}),u.jsxs(di,{children:[u.jsx(de,{children:u.jsx(fe,{children:u.jsx(pe,{"aria-label":"іконка інстаграм",width:"20",height:"20",children:u.jsx("use",{href:M+"#icon-instagram"})})})}),u.jsx(de,{children:u.jsx(fe,{children:u.jsx(pe,{"aria-label":"іконка твітер",class:"icones",width:"20",height:"20",children:u.jsx("use",{href:M+"#icon-tviter"})})})}),u.jsx(de,{children:u.jsx(fe,{children:u.jsx(pe,{"aria-label":"іконка феїсбук",class:"icones",width:"20",height:"20",children:u.jsx("use",{href:M+"#icon-facebook"})})})}),u.jsx(de,{children:u.jsx(fe,{children:u.jsx(pe,{"aria-label":"іконка линкедін",class:"icones",width:"20",height:"20",children:u.jsx("use",{href:M+"#icon-linkedin"})})})})]})]})]})]})]})}),Yg=k.section`
    padding-top: 60px;
        padding-bottom: 60px;

    
        @media (min-width:1200px) {
            padding-top: 94px;
            padding-bottom: 94px;
        }
`,Xg=k.div`
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
`,Gg=k.h2`
    font-weight: 700;
    font-size: 36px;
    line-height: 1.16;
    text-align: center;
    letter-spacing: 0.03em;
    color: var(--text-color);
    margin: 0px;
    margin-bottom: 50px;
`,Zg=k.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    // column-gap: 30px;
    gap: 28px;
    list-style: none;
    padding: 0;
    margin: 0;
`,en=k.li`
    // flex-basis: calc((100% - 30px) / 2);

        @media screen and (min-width:768px) {
            flex-basis: calc((100% - 60px) / 3);
        }

        @media screen and (min-width:1200px) {
            flex-basis: calc((100% - 150px) / 6);
        }
`,tn=k.a`
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
`,nn=k.svg`
        display: flex;
        align-self: center;
        width: 170px;
        height: 92px;
`,Jg=()=>u.jsx(Yg,{children:u.jsxs(Xg,{children:[u.jsx(Gg,{children:"Постійні клієнти"}),u.jsxs(Zg,{children:[u.jsx(en,{children:u.jsx(tn,{children:u.jsx(nn,{"aria-label":"іконка логотип",width:"106",height:"60",children:u.jsx("use",{href:M+"#icon-Logo"})})})}),u.jsx(en,{children:u.jsx(tn,{children:u.jsx(nn,{"aria-label":"іконка логотип",width:"106",height:"60",children:u.jsx("use",{href:M+"#icon-Logo-2"})})})}),u.jsx(en,{children:u.jsx(tn,{children:u.jsx(nn,{"aria-label":"іконка логотип",width:"106",height:"60",children:u.jsx("use",{href:M+"#icon-Logo-3"})})})}),u.jsx(en,{children:u.jsx(tn,{children:u.jsx(nn,{"aria-label":"іконка логотип",width:"106",height:"60",children:u.jsx("use",{href:M+"#icon-Logo-4"})})})}),u.jsx(en,{children:u.jsx(tn,{children:u.jsx(nn,{width:"106",height:"60",children:u.jsx("use",{href:M+"#icon-Logo-5"})})})}),u.jsx(en,{children:u.jsx(tn,{children:u.jsx(nn,{"aria-label":"іконка логотип",width:"106",height:"60",children:u.jsx("use",{href:M+"#icon-Logo-6"})})})})]})]})}),qg=k.section`
    background: var(--footer-bacground-color);
    padding-top: 60px;
    padding-bottom: 60px;

    @media screen and (max-width:767px) {
        text-align: center;
  }
`,ev=k.div`
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
`,tv=k.div`
    background: var(--footer-bacground-color);
    padding-top: 60px;
    padding-bottom: 60px;

    @media screen and (max-width:767px) {
        text-align: center;
  }
`,nv=k.a`
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 26px;
    line-height: 1.19;
    letter-spacing: 0.03em;
    text-decoration: none;
    color: var(--beckground-color);
    display: inline-block;
    margin-bottom: 20px;
`,rv=k.span`
color: var(--body-background-color);
`,iv=k.ul`
    list-style: none;
`,cl=k.li`
    &:not(:last-child) {
    margin-bottom: 9px;
    }

`,ov=k.a`
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

`,lv=k.div`
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
`,av=k.ul`
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
`,sv=k.div`
// display: flex;

        @media screen and (min-width:1200px) {
            display: flex;
    }
`,uv=k.div`
    margin: 0;
    padding: 0;
    @media screen and (min-width:1200px) {
    margin-left: auto;
    }
`,cv=k.form`

`,dv=k.input`
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
`,fv=k.button`
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
`,pv=k.svg`
    top: 0;
    right: 0;
`,Nf=()=>u.jsx(qg,{children:u.jsxs(ev,{children:[u.jsxs(tv,{children:[u.jsxs(nv,{href:"index.html",lang:"en",children:["Web",u.jsx(rv,{children:"Studio"})]}),u.jsx("address",{children:u.jsxs(iv,{children:[u.jsx(cl,{children:u.jsx(ov,{href:"https://goo.gl/maps/CPtrU1FHBa2aNyZL9",target:"_blank",rel:"noopener noreferrer",children:"м. Київ, пр-т Лесі Українки, 26"})}),u.jsx(cl,{children:u.jsx(Hu,{href:"mailto:info@devstudio.com",children:"info@devstudio.com"})}),u.jsx(cl,{children:u.jsx(Hu,{href:"tel:+380961111111",children:"+38 096 111 11 11"})})]})})]}),u.jsxs(lv,{children:[u.jsx(Vu,{children:"ПРИЄДНУЙТЕСЬ"}),u.jsxs(av,{children:[u.jsx(fi,{children:u.jsx(pi,{children:u.jsx(hi,{"aria-label":"іконка інстаграм",class:"icones",width:"20",height:"20",children:u.jsx("use",{href:M+"#icon-instagram"})})})}),u.jsx(fi,{children:u.jsx(pi,{children:u.jsx(hi,{"aria-label":"іконка твітер",class:"icones",width:"20",height:"20",children:u.jsx("use",{href:M+"#icon-tviter"})})})}),u.jsx(fi,{children:u.jsx(pi,{children:u.jsx(hi,{"aria-label":"іконка феїсбук",class:"icones",width:"20",height:"20",children:u.jsx("use",{href:M+"#icon-facebook"})})})}),u.jsx(fi,{children:u.jsx(pi,{children:u.jsx(hi,{"aria-label":"іконка линкедін",class:"icones",width:"20",height:"20",children:u.jsx("use",{href:M+"#icon-linkedin"})})})})]})]}),u.jsxs(uv,{children:[u.jsx(Vu,{children:"Підпишіться на розсилку"}),u.jsx(cv,{children:u.jsxs(sv,{children:[u.jsx("label",{for:"email"}),u.jsx(dv,{type:"email",name:"mail",id:"mail",placeholder:"E-mail"}),u.jsxs(fv,{type:"submit",children:["Підписатися",u.jsx(pv,{width:"24",height:"24",children:u.jsx("use",{href:M+"#icon-icon-send"})})]})]})})]})]})}),hv=()=>u.jsxs(u.Fragment,{children:[u.jsx(vg,{}),u.jsx(Ng,{}),u.jsx(Og,{}),u.jsx($g,{}),u.jsx(Kg,{}),u.jsx(Jg,{}),u.jsx(Nf,{})]}),mv=k.header`
    background-color: var(--body-background-color);
    border-bottom: 1px solid;
    color: #ececec;
    padding: 0;
`,gv=k.div`
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
`,vv=k(jo)`
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
`,yv=k.span`
    color: var(--beckground-color);
`,xv=k.div`
    display: flex;
    align-items: center;
    padding: 0 15px;
    @media(max-width: 767px) {
        margin-top: 16px;
        justify-content: space-between;
        margin-bottom: 16px;
    }

`,wv=k.ul`
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
`,dl=k.li`
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
`,fl=k(jo)`
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

`,kv=k.a`

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
`;const Sv=()=>{const e=nt();return u.jsxs(wv,{children:[u.jsx(dl,{children:u.jsx(fl,{to:"/",state:{from:e},children:"Студія"})}),u.jsx(dl,{children:u.jsx(fl,{to:"/portfolio",state:{from:e},children:u.jsx(kv,{children:"Портфоліо"})})}),u.jsx(dl,{children:u.jsx(fl,{href:"#",children:"Контакти"})})]})},Cv=()=>{const e=nt();return u.jsx(mv,{children:u.jsx(gv,{children:u.jsxs(xv,{children:[u.jsxs(vv,{to:"/",state:{from:e},lang:"en","data-wow-offset":"100",children:[u.jsx(yv,{children:"Web"}),"Studio"]}),u.jsxs(u.Fragment,{children:[" ",u.jsx(Sv,{})," ",u.jsx(_f,{})]})," ",u.jsx(Pf,{id:"js-menu-container"})]})})})},jv=()=>u.jsxs(u.Fragment,{children:[u.jsx(Cv,{}),u.jsx(u.Fragment,{children:"ПРИВЕТ"}),u.jsx(Nf,{}),u.jsx(_.Suspense,{fallback:u.jsx("div",{children:"Loading page..."}),children:u.jsx(Bm,{})})," "]}),Ev=()=>u.jsx(u.Fragment,{children:u.jsxs(Hm,{children:[u.jsx(_i,{path:Nu.HOME,element:u.jsx(hv,{})}),u.jsx(_i,{path:Nu.PORTFOLIO,element:u.jsx(jv,{})}),u.jsx(_i,{path:"*",element:u.jsx(Um,{to:"/"})})]})}),Pv=document.getElementById("root"),_v=of(Pv);_v.render(u.jsx(_.StrictMode,{children:u.jsx(Zm,{basename:"/goit-markup-react/",children:u.jsx(Ev,{})})}));
