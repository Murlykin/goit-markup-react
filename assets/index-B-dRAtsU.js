function np(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function rp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var gc={exports:{}},xo={},vc={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Br=Symbol.for("react.element"),ip=Symbol.for("react.portal"),op=Symbol.for("react.fragment"),lp=Symbol.for("react.strict_mode"),ap=Symbol.for("react.profiler"),sp=Symbol.for("react.provider"),up=Symbol.for("react.context"),cp=Symbol.for("react.forward_ref"),dp=Symbol.for("react.suspense"),fp=Symbol.for("react.memo"),pp=Symbol.for("react.lazy"),_s=Symbol.iterator;function hp(e){return e===null||typeof e!="object"?null:(e=_s&&e[_s]||e["@@iterator"],typeof e=="function"?e:null)}var xc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yc=Object.assign,wc={};function Fn(e,t,n){this.props=e,this.context=t,this.refs=wc,this.updater=n||xc}Fn.prototype.isReactComponent={};Fn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Fn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function kc(){}kc.prototype=Fn.prototype;function Ea(e,t,n){this.props=e,this.context=t,this.refs=wc,this.updater=n||xc}var _a=Ea.prototype=new kc;_a.constructor=Ea;yc(_a,Fn.prototype);_a.isPureReactComponent=!0;var Ns=Array.isArray,Sc=Object.prototype.hasOwnProperty,Na={current:null},jc={key:!0,ref:!0,__self:!0,__source:!0};function Ac(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Sc.call(t,r)&&!jc.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Br,type:e,key:o,ref:l,props:i,_owner:Na.current}}function mp(e,t){return{$$typeof:Br,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Pa(e){return typeof e=="object"&&e!==null&&e.$$typeof===Br}function gp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ps=/\/+/g;function $o(e,t){return typeof e=="object"&&e!==null&&e.key!=null?gp(""+e.key):t.toString(36)}function Ci(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Br:case ip:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+$o(l,0):r,Ns(i)?(n="",e!=null&&(n=e.replace(Ps,"$&/")+"/"),Ci(i,t,n,"",function(c){return c})):i!=null&&(Pa(i)&&(i=mp(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Ps,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Ns(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+$o(o,s);l+=Ci(o,t,n,u,i)}else if(u=hp(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+$o(o,s++),l+=Ci(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Yr(e,t,n){if(e==null)return e;var r=[],i=0;return Ci(e,r,"","",function(o){return t.call(n,o,i++)}),r}function vp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ye={current:null},Ei={transition:null},xp={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:Ei,ReactCurrentOwner:Na};M.Children={map:Yr,forEach:function(e,t,n){Yr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Yr(e,function(){t++}),t},toArray:function(e){return Yr(e,function(t){return t})||[]},only:function(e){if(!Pa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=Fn;M.Fragment=op;M.Profiler=ap;M.PureComponent=Ea;M.StrictMode=lp;M.Suspense=dp;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xp;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=yc({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Na.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Sc.call(t,u)&&!jc.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Br,type:e.type,key:i,ref:o,props:r,_owner:l}};M.createContext=function(e){return e={$$typeof:up,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:sp,_context:e},e.Consumer=e};M.createElement=Ac;M.createFactory=function(e){var t=Ac.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:cp,render:e}};M.isValidElement=Pa;M.lazy=function(e){return{$$typeof:pp,_payload:{_status:-1,_result:e},_init:vp}};M.memo=function(e,t){return{$$typeof:fp,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=Ei.transition;Ei.transition={};try{e()}finally{Ei.transition=t}};M.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};M.useCallback=function(e,t){return ye.current.useCallback(e,t)};M.useContext=function(e){return ye.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return ye.current.useDeferredValue(e)};M.useEffect=function(e,t){return ye.current.useEffect(e,t)};M.useId=function(){return ye.current.useId()};M.useImperativeHandle=function(e,t,n){return ye.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return ye.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return ye.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return ye.current.useMemo(e,t)};M.useReducer=function(e,t,n){return ye.current.useReducer(e,t,n)};M.useRef=function(e){return ye.current.useRef(e)};M.useState=function(e){return ye.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return ye.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return ye.current.useTransition()};M.version="18.2.0";vc.exports=M;var E=vc.exports;const yp=rp(E),El=np({__proto__:null,default:yp},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp=E,kp=Symbol.for("react.element"),Sp=Symbol.for("react.fragment"),jp=Object.prototype.hasOwnProperty,Ap=wp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Cp={key:!0,ref:!0,__self:!0,__source:!0};function Cc(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)jp.call(t,r)&&!Cp.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:kp,type:e,key:o,ref:l,props:i,_owner:Ap.current}}xo.Fragment=Sp;xo.jsx=Cc;xo.jsxs=Cc;gc.exports=xo;var a=gc.exports,Ec={exports:{}},ze={},_c={exports:{}},Nc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,R){var O=P.length;P.push(R);e:for(;0<O;){var X=O-1>>>1,ne=P[X];if(0<i(ne,R))P[X]=R,P[O]=ne,O=X;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var R=P[0],O=P.pop();if(O!==R){P[0]=O;e:for(var X=0,ne=P.length,Qr=ne>>>1;X<Qr;){var Ut=2*(X+1)-1,Ho=P[Ut],Wt=Ut+1,Kr=P[Wt];if(0>i(Ho,O))Wt<ne&&0>i(Kr,Ho)?(P[X]=Kr,P[Wt]=O,X=Wt):(P[X]=Ho,P[Ut]=O,X=Ut);else if(Wt<ne&&0>i(Kr,O))P[X]=Kr,P[Wt]=O,X=Wt;else break e}}return R}function i(P,R){var O=P.sortIndex-R.sortIndex;return O!==0?O:P.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],c=[],h=1,m=null,g=3,w=!1,y=!1,v=!1,j=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(P){for(var R=n(c);R!==null;){if(R.callback===null)r(c);else if(R.startTime<=P)r(c),R.sortIndex=R.expirationTime,t(u,R);else break;R=n(c)}}function x(P){if(v=!1,p(P),!y)if(n(u)!==null)y=!0,Uo(C);else{var R=n(c);R!==null&&Wo(x,R.startTime-P)}}function C(P,R){y=!1,v&&(v=!1,f(T),T=-1),w=!0;var O=g;try{for(p(R),m=n(u);m!==null&&(!(m.expirationTime>R)||P&&!_e());){var X=m.callback;if(typeof X=="function"){m.callback=null,g=m.priorityLevel;var ne=X(m.expirationTime<=R);R=e.unstable_now(),typeof ne=="function"?m.callback=ne:m===n(u)&&r(u),p(R)}else r(u);m=n(u)}if(m!==null)var Qr=!0;else{var Ut=n(c);Ut!==null&&Wo(x,Ut.startTime-R),Qr=!1}return Qr}finally{m=null,g=O,w=!1}}var _=!1,A=null,T=-1,B=5,L=-1;function _e(){return!(e.unstable_now()-L<B)}function $n(){if(A!==null){var P=e.unstable_now();L=P;var R=!0;try{R=A(!0,P)}finally{R?Vn():(_=!1,A=null)}}else _=!1}var Vn;if(typeof d=="function")Vn=function(){d($n)};else if(typeof MessageChannel<"u"){var Es=new MessageChannel,tp=Es.port2;Es.port1.onmessage=$n,Vn=function(){tp.postMessage(null)}}else Vn=function(){j($n,0)};function Uo(P){A=P,_||(_=!0,Vn())}function Wo(P,R){T=j(function(){P(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){y||w||(y=!0,Uo(C))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(P){switch(g){case 1:case 2:case 3:var R=3;break;default:R=g}var O=g;g=R;try{return P()}finally{g=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,R){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var O=g;g=P;try{return R()}finally{g=O}},e.unstable_scheduleCallback=function(P,R,O){var X=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?X+O:X):O=X,P){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=O+ne,P={id:h++,callback:R,priorityLevel:P,startTime:O,expirationTime:ne,sortIndex:-1},O>X?(P.sortIndex=O,t(c,P),n(u)===null&&P===n(c)&&(v?(f(T),T=-1):v=!0,Wo(x,O-X))):(P.sortIndex=ne,t(u,P),y||w||(y=!0,Uo(C))),P},e.unstable_shouldYield=_e,e.unstable_wrapCallback=function(P){var R=g;return function(){var O=g;g=R;try{return P.apply(this,arguments)}finally{g=O}}}})(Nc);_c.exports=Nc;var Ep=_c.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pc=E,Re=Ep;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Tc=new Set,xr={};function rn(e,t){Pn(e,t),Pn(e+"Capture",t)}function Pn(e,t){for(xr[e]=t,e=0;e<t.length;e++)Tc.add(t[e])}var ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_l=Object.prototype.hasOwnProperty,_p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ts={},Ls={};function Np(e){return _l.call(Ls,e)?!0:_l.call(Ts,e)?!1:_p.test(e)?Ls[e]=!0:(Ts[e]=!0,!1)}function Pp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Tp(e,t,n,r){if(t===null||typeof t>"u"||Pp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function we(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new we(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new we(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new we(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new we(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new we(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new we(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new we(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new we(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new we(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ta=/[\-:]([a-z])/g;function La(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ta,La);se[t]=new we(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ta,La);se[t]=new we(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ta,La);se[t]=new we(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new we(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new we(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ra(e,t,n,r){var i=se.hasOwnProperty(t)?se[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Tp(t,n,i,r)&&(n=null),r||i===null?Np(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var gt=Pc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gr=Symbol.for("react.element"),cn=Symbol.for("react.portal"),dn=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Nl=Symbol.for("react.profiler"),Lc=Symbol.for("react.provider"),Rc=Symbol.for("react.context"),Oa=Symbol.for("react.forward_ref"),Pl=Symbol.for("react.suspense"),Tl=Symbol.for("react.suspense_list"),Ma=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),zc=Symbol.for("react.offscreen"),Rs=Symbol.iterator;function Qn(e){return e===null||typeof e!="object"?null:(e=Rs&&e[Rs]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,Vo;function rr(e){if(Vo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Vo=t&&t[1]||""}return`
`+Vo+e}var Qo=!1;function Ko(e,t){if(!e||Qo)return"";Qo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{Qo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?rr(e):""}function Lp(e){switch(e.tag){case 5:return rr(e.type);case 16:return rr("Lazy");case 13:return rr("Suspense");case 19:return rr("SuspenseList");case 0:case 2:case 15:return e=Ko(e.type,!1),e;case 11:return e=Ko(e.type.render,!1),e;case 1:return e=Ko(e.type,!0),e;default:return""}}function Ll(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case dn:return"Fragment";case cn:return"Portal";case Nl:return"Profiler";case za:return"StrictMode";case Pl:return"Suspense";case Tl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Rc:return(e.displayName||"Context")+".Consumer";case Lc:return(e._context.displayName||"Context")+".Provider";case Oa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ma:return t=e.displayName||null,t!==null?t:Ll(e.type)||"Memo";case yt:t=e._payload,e=e._init;try{return Ll(e(t))}catch{}}return null}function Rp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ll(t);case 8:return t===za?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Mt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Oc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function zp(e){var t=Oc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xr(e){e._valueTracker||(e._valueTracker=zp(e))}function Mc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Oc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ui(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Rl(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function zs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Mt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ic(e,t){t=t.checked,t!=null&&Ra(e,"checked",t,!1)}function zl(e,t){Ic(e,t);var n=Mt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ol(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ol(e,t.type,Mt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Os(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ol(e,t,n){(t!=="number"||Ui(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ir=Array.isArray;function Sn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Mt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ml(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ms(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(ir(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Mt(n)}}function Dc(e,t){var n=Mt(t.value),r=Mt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Is(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Fc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Il(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Fc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zr,bc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Zr=Zr||document.createElement("div"),Zr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Zr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function yr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ar={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Op=["Webkit","ms","Moz","O"];Object.keys(ar).forEach(function(e){Op.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ar[t]=ar[e]})});function Bc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ar.hasOwnProperty(e)&&ar[e]?(""+t).trim():t+"px"}function Uc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Bc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Mp=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dl(e,t){if(t){if(Mp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Fl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bl=null;function Ia(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bl=null,jn=null,An=null;function Ds(e){if(e=Hr(e)){if(typeof Bl!="function")throw Error(S(280));var t=e.stateNode;t&&(t=jo(t),Bl(e.stateNode,e.type,t))}}function Wc(e){jn?An?An.push(e):An=[e]:jn=e}function Hc(){if(jn){var e=jn,t=An;if(An=jn=null,Ds(e),t)for(e=0;e<t.length;e++)Ds(t[e])}}function $c(e,t){return e(t)}function Vc(){}var Yo=!1;function Qc(e,t,n){if(Yo)return e(t,n);Yo=!0;try{return $c(e,t,n)}finally{Yo=!1,(jn!==null||An!==null)&&(Vc(),Hc())}}function wr(e,t){var n=e.stateNode;if(n===null)return null;var r=jo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Ul=!1;if(ft)try{var Kn={};Object.defineProperty(Kn,"passive",{get:function(){Ul=!0}}),window.addEventListener("test",Kn,Kn),window.removeEventListener("test",Kn,Kn)}catch{Ul=!1}function Ip(e,t,n,r,i,o,l,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var sr=!1,Wi=null,Hi=!1,Wl=null,Dp={onError:function(e){sr=!0,Wi=e}};function Fp(e,t,n,r,i,o,l,s,u){sr=!1,Wi=null,Ip.apply(Dp,arguments)}function bp(e,t,n,r,i,o,l,s,u){if(Fp.apply(this,arguments),sr){if(sr){var c=Wi;sr=!1,Wi=null}else throw Error(S(198));Hi||(Hi=!0,Wl=c)}}function on(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Kc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fs(e){if(on(e)!==e)throw Error(S(188))}function Bp(e){var t=e.alternate;if(!t){if(t=on(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Fs(i),e;if(o===r)return Fs(i),t;o=o.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Yc(e){return e=Bp(e),e!==null?Gc(e):null}function Gc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Gc(e);if(t!==null)return t;e=e.sibling}return null}var Xc=Re.unstable_scheduleCallback,bs=Re.unstable_cancelCallback,Up=Re.unstable_shouldYield,Wp=Re.unstable_requestPaint,Z=Re.unstable_now,Hp=Re.unstable_getCurrentPriorityLevel,Da=Re.unstable_ImmediatePriority,Zc=Re.unstable_UserBlockingPriority,$i=Re.unstable_NormalPriority,$p=Re.unstable_LowPriority,qc=Re.unstable_IdlePriority,yo=null,Je=null;function Vp(e){if(Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(yo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:Yp,Qp=Math.log,Kp=Math.LN2;function Yp(e){return e>>>=0,e===0?32:31-(Qp(e)/Kp|0)|0}var qr=64,Jr=4194304;function or(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Vi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=or(s):(o&=l,o!==0&&(r=or(o)))}else l=n&~i,l!==0?r=or(l):o!==0&&(r=or(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ve(t),i=1<<n,r|=e[n],t&=~i;return r}function Gp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ve(o),s=1<<l,u=i[l];u===-1?(!(s&n)||s&r)&&(i[l]=Gp(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function Hl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Jc(){var e=qr;return qr<<=1,!(qr&4194240)&&(qr=64),e}function Go(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ur(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ve(t),e[t]=n}function Zp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ve(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Fa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ve(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var b=0;function ed(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var td,ba,nd,rd,id,$l=!1,ei=[],Et=null,_t=null,Nt=null,kr=new Map,Sr=new Map,kt=[],qp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bs(e,t){switch(e){case"focusin":case"focusout":Et=null;break;case"dragenter":case"dragleave":_t=null;break;case"mouseover":case"mouseout":Nt=null;break;case"pointerover":case"pointerout":kr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sr.delete(t.pointerId)}}function Yn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Hr(t),t!==null&&ba(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Jp(e,t,n,r,i){switch(t){case"focusin":return Et=Yn(Et,e,t,n,r,i),!0;case"dragenter":return _t=Yn(_t,e,t,n,r,i),!0;case"mouseover":return Nt=Yn(Nt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return kr.set(o,Yn(kr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Sr.set(o,Yn(Sr.get(o)||null,e,t,n,r,i)),!0}return!1}function od(e){var t=Qt(e.target);if(t!==null){var n=on(t);if(n!==null){if(t=n.tag,t===13){if(t=Kc(n),t!==null){e.blockedOn=t,id(e.priority,function(){nd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _i(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Vl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);bl=r,n.target.dispatchEvent(r),bl=null}else return t=Hr(n),t!==null&&ba(t),e.blockedOn=n,!1;t.shift()}return!0}function Us(e,t,n){_i(e)&&n.delete(t)}function eh(){$l=!1,Et!==null&&_i(Et)&&(Et=null),_t!==null&&_i(_t)&&(_t=null),Nt!==null&&_i(Nt)&&(Nt=null),kr.forEach(Us),Sr.forEach(Us)}function Gn(e,t){e.blockedOn===t&&(e.blockedOn=null,$l||($l=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,eh)))}function jr(e){function t(i){return Gn(i,e)}if(0<ei.length){Gn(ei[0],e);for(var n=1;n<ei.length;n++){var r=ei[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Et!==null&&Gn(Et,e),_t!==null&&Gn(_t,e),Nt!==null&&Gn(Nt,e),kr.forEach(t),Sr.forEach(t),n=0;n<kt.length;n++)r=kt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<kt.length&&(n=kt[0],n.blockedOn===null);)od(n),n.blockedOn===null&&kt.shift()}var Cn=gt.ReactCurrentBatchConfig,Qi=!0;function th(e,t,n,r){var i=b,o=Cn.transition;Cn.transition=null;try{b=1,Ba(e,t,n,r)}finally{b=i,Cn.transition=o}}function nh(e,t,n,r){var i=b,o=Cn.transition;Cn.transition=null;try{b=4,Ba(e,t,n,r)}finally{b=i,Cn.transition=o}}function Ba(e,t,n,r){if(Qi){var i=Vl(e,t,n,r);if(i===null)ol(e,t,r,Ki,n),Bs(e,r);else if(Jp(i,e,t,n,r))r.stopPropagation();else if(Bs(e,r),t&4&&-1<qp.indexOf(e)){for(;i!==null;){var o=Hr(i);if(o!==null&&td(o),o=Vl(e,t,n,r),o===null&&ol(e,t,r,Ki,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ol(e,t,r,null,n)}}var Ki=null;function Vl(e,t,n,r){if(Ki=null,e=Ia(r),e=Qt(e),e!==null)if(t=on(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Kc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ki=e,null}function ld(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hp()){case Da:return 1;case Zc:return 4;case $i:case $p:return 16;case qc:return 536870912;default:return 16}default:return 16}}var jt=null,Ua=null,Ni=null;function ad(){if(Ni)return Ni;var e,t=Ua,n=t.length,r,i="value"in jt?jt.value:jt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Ni=i.slice(e,1<r?1-r:void 0)}function Pi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ti(){return!0}function Ws(){return!1}function Oe(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ti:Ws,this.isPropagationStopped=Ws,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ti)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ti)},persist:function(){},isPersistent:ti}),t}var bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wa=Oe(bn),Wr=K({},bn,{view:0,detail:0}),rh=Oe(Wr),Xo,Zo,Xn,wo=K({},Wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ha,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xn&&(Xn&&e.type==="mousemove"?(Xo=e.screenX-Xn.screenX,Zo=e.screenY-Xn.screenY):Zo=Xo=0,Xn=e),Xo)},movementY:function(e){return"movementY"in e?e.movementY:Zo}}),Hs=Oe(wo),ih=K({},wo,{dataTransfer:0}),oh=Oe(ih),lh=K({},Wr,{relatedTarget:0}),qo=Oe(lh),ah=K({},bn,{animationName:0,elapsedTime:0,pseudoElement:0}),sh=Oe(ah),uh=K({},bn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ch=Oe(uh),dh=K({},bn,{data:0}),$s=Oe(dh),fh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ph={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hh[e])?!!t[e]:!1}function Ha(){return mh}var gh=K({},Wr,{key:function(e){if(e.key){var t=fh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ph[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ha,charCode:function(e){return e.type==="keypress"?Pi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vh=Oe(gh),xh=K({},wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vs=Oe(xh),yh=K({},Wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ha}),wh=Oe(yh),kh=K({},bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sh=Oe(kh),jh=K({},wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ah=Oe(jh),Ch=[9,13,27,32],$a=ft&&"CompositionEvent"in window,ur=null;ft&&"documentMode"in document&&(ur=document.documentMode);var Eh=ft&&"TextEvent"in window&&!ur,sd=ft&&(!$a||ur&&8<ur&&11>=ur),Qs=" ",Ks=!1;function ud(e,t){switch(e){case"keyup":return Ch.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fn=!1;function _h(e,t){switch(e){case"compositionend":return cd(t);case"keypress":return t.which!==32?null:(Ks=!0,Qs);case"textInput":return e=t.data,e===Qs&&Ks?null:e;default:return null}}function Nh(e,t){if(fn)return e==="compositionend"||!$a&&ud(e,t)?(e=ad(),Ni=Ua=jt=null,fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return sd&&t.locale!=="ko"?null:t.data;default:return null}}var Ph={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ys(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ph[e.type]:t==="textarea"}function dd(e,t,n,r){Wc(r),t=Yi(t,"onChange"),0<t.length&&(n=new Wa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var cr=null,Ar=null;function Th(e){Sd(e,0)}function ko(e){var t=mn(e);if(Mc(t))return e}function Lh(e,t){if(e==="change")return t}var fd=!1;if(ft){var Jo;if(ft){var el="oninput"in document;if(!el){var Gs=document.createElement("div");Gs.setAttribute("oninput","return;"),el=typeof Gs.oninput=="function"}Jo=el}else Jo=!1;fd=Jo&&(!document.documentMode||9<document.documentMode)}function Xs(){cr&&(cr.detachEvent("onpropertychange",pd),Ar=cr=null)}function pd(e){if(e.propertyName==="value"&&ko(Ar)){var t=[];dd(t,Ar,e,Ia(e)),Qc(Th,t)}}function Rh(e,t,n){e==="focusin"?(Xs(),cr=t,Ar=n,cr.attachEvent("onpropertychange",pd)):e==="focusout"&&Xs()}function zh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ko(Ar)}function Oh(e,t){if(e==="click")return ko(t)}function Mh(e,t){if(e==="input"||e==="change")return ko(t)}function Ih(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ke=typeof Object.is=="function"?Object.is:Ih;function Cr(e,t){if(Ke(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!_l.call(t,i)||!Ke(e[i],t[i]))return!1}return!0}function Zs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qs(e,t){var n=Zs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zs(n)}}function hd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function md(){for(var e=window,t=Ui();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ui(e.document)}return t}function Va(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Dh(e){var t=md(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&hd(n.ownerDocument.documentElement,n)){if(r!==null&&Va(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=qs(n,o);var l=qs(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Fh=ft&&"documentMode"in document&&11>=document.documentMode,pn=null,Ql=null,dr=null,Kl=!1;function Js(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kl||pn==null||pn!==Ui(r)||(r=pn,"selectionStart"in r&&Va(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),dr&&Cr(dr,r)||(dr=r,r=Yi(Ql,"onSelect"),0<r.length&&(t=new Wa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=pn)))}function ni(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hn={animationend:ni("Animation","AnimationEnd"),animationiteration:ni("Animation","AnimationIteration"),animationstart:ni("Animation","AnimationStart"),transitionend:ni("Transition","TransitionEnd")},tl={},gd={};ft&&(gd=document.createElement("div").style,"AnimationEvent"in window||(delete hn.animationend.animation,delete hn.animationiteration.animation,delete hn.animationstart.animation),"TransitionEvent"in window||delete hn.transitionend.transition);function So(e){if(tl[e])return tl[e];if(!hn[e])return e;var t=hn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in gd)return tl[e]=t[n];return e}var vd=So("animationend"),xd=So("animationiteration"),yd=So("animationstart"),wd=So("transitionend"),kd=new Map,eu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dt(e,t){kd.set(e,t),rn(t,[e])}for(var nl=0;nl<eu.length;nl++){var rl=eu[nl],bh=rl.toLowerCase(),Bh=rl[0].toUpperCase()+rl.slice(1);Dt(bh,"on"+Bh)}Dt(vd,"onAnimationEnd");Dt(xd,"onAnimationIteration");Dt(yd,"onAnimationStart");Dt("dblclick","onDoubleClick");Dt("focusin","onFocus");Dt("focusout","onBlur");Dt(wd,"onTransitionEnd");Pn("onMouseEnter",["mouseout","mouseover"]);Pn("onMouseLeave",["mouseout","mouseover"]);Pn("onPointerEnter",["pointerout","pointerover"]);Pn("onPointerLeave",["pointerout","pointerover"]);rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uh=new Set("cancel close invalid load scroll toggle".split(" ").concat(lr));function tu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,bp(r,t,void 0,e),e.currentTarget=null}function Sd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==o&&i.isPropagationStopped())break e;tu(i,s,c),o=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,c=s.currentTarget,s=s.listener,u!==o&&i.isPropagationStopped())break e;tu(i,s,c),o=u}}}if(Hi)throw e=Wl,Hi=!1,Wl=null,e}function W(e,t){var n=t[ql];n===void 0&&(n=t[ql]=new Set);var r=e+"__bubble";n.has(r)||(jd(t,e,2,!1),n.add(r))}function il(e,t,n){var r=0;t&&(r|=4),jd(n,e,r,t)}var ri="_reactListening"+Math.random().toString(36).slice(2);function Er(e){if(!e[ri]){e[ri]=!0,Tc.forEach(function(n){n!=="selectionchange"&&(Uh.has(n)||il(n,!1,e),il(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ri]||(t[ri]=!0,il("selectionchange",!1,t))}}function jd(e,t,n,r){switch(ld(t)){case 1:var i=th;break;case 4:i=nh;break;default:i=Ba}n=i.bind(null,t,n,e),i=void 0,!Ul||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ol(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;s!==null;){if(l=Qt(s),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}s=s.parentNode}}r=r.return}Qc(function(){var c=o,h=Ia(n),m=[];e:{var g=kd.get(e);if(g!==void 0){var w=Wa,y=e;switch(e){case"keypress":if(Pi(n)===0)break e;case"keydown":case"keyup":w=vh;break;case"focusin":y="focus",w=qo;break;case"focusout":y="blur",w=qo;break;case"beforeblur":case"afterblur":w=qo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Hs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=oh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=wh;break;case vd:case xd:case yd:w=sh;break;case wd:w=Sh;break;case"scroll":w=rh;break;case"wheel":w=Ah;break;case"copy":case"cut":case"paste":w=ch;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Vs}var v=(t&4)!==0,j=!v&&e==="scroll",f=v?g!==null?g+"Capture":null:g;v=[];for(var d=c,p;d!==null;){p=d;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,f!==null&&(x=wr(d,f),x!=null&&v.push(_r(d,x,p)))),j)break;d=d.return}0<v.length&&(g=new w(g,y,null,n,h),m.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",g&&n!==bl&&(y=n.relatedTarget||n.fromElement)&&(Qt(y)||y[pt]))break e;if((w||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,w?(y=n.relatedTarget||n.toElement,w=c,y=y?Qt(y):null,y!==null&&(j=on(y),y!==j||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=c),w!==y)){if(v=Hs,x="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(v=Vs,x="onPointerLeave",f="onPointerEnter",d="pointer"),j=w==null?g:mn(w),p=y==null?g:mn(y),g=new v(x,d+"leave",w,n,h),g.target=j,g.relatedTarget=p,x=null,Qt(h)===c&&(v=new v(f,d+"enter",y,n,h),v.target=p,v.relatedTarget=j,x=v),j=x,w&&y)t:{for(v=w,f=y,d=0,p=v;p;p=ln(p))d++;for(p=0,x=f;x;x=ln(x))p++;for(;0<d-p;)v=ln(v),d--;for(;0<p-d;)f=ln(f),p--;for(;d--;){if(v===f||f!==null&&v===f.alternate)break t;v=ln(v),f=ln(f)}v=null}else v=null;w!==null&&nu(m,g,w,v,!1),y!==null&&j!==null&&nu(m,j,y,v,!0)}}e:{if(g=c?mn(c):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var C=Lh;else if(Ys(g))if(fd)C=Mh;else{C=zh;var _=Rh}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(C=Oh);if(C&&(C=C(e,c))){dd(m,C,n,h);break e}_&&_(e,g,c),e==="focusout"&&(_=g._wrapperState)&&_.controlled&&g.type==="number"&&Ol(g,"number",g.value)}switch(_=c?mn(c):window,e){case"focusin":(Ys(_)||_.contentEditable==="true")&&(pn=_,Ql=c,dr=null);break;case"focusout":dr=Ql=pn=null;break;case"mousedown":Kl=!0;break;case"contextmenu":case"mouseup":case"dragend":Kl=!1,Js(m,n,h);break;case"selectionchange":if(Fh)break;case"keydown":case"keyup":Js(m,n,h)}var A;if($a)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else fn?ud(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(sd&&n.locale!=="ko"&&(fn||T!=="onCompositionStart"?T==="onCompositionEnd"&&fn&&(A=ad()):(jt=h,Ua="value"in jt?jt.value:jt.textContent,fn=!0)),_=Yi(c,T),0<_.length&&(T=new $s(T,e,null,n,h),m.push({event:T,listeners:_}),A?T.data=A:(A=cd(n),A!==null&&(T.data=A)))),(A=Eh?_h(e,n):Nh(e,n))&&(c=Yi(c,"onBeforeInput"),0<c.length&&(h=new $s("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=A))}Sd(m,t)})}function _r(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=wr(e,n),o!=null&&r.unshift(_r(e,o,i)),o=wr(e,t),o!=null&&r.push(_r(e,o,i))),e=e.return}return r}function ln(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function nu(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,i?(u=wr(n,o),u!=null&&l.unshift(_r(n,u,s))):i||(u=wr(n,o),u!=null&&l.push(_r(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Wh=/\r\n?/g,Hh=/\u0000|\uFFFD/g;function ru(e){return(typeof e=="string"?e:""+e).replace(Wh,`
`).replace(Hh,"")}function ii(e,t,n){if(t=ru(t),ru(e)!==t&&n)throw Error(S(425))}function Gi(){}var Yl=null,Gl=null;function Xl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zl=typeof setTimeout=="function"?setTimeout:void 0,$h=typeof clearTimeout=="function"?clearTimeout:void 0,iu=typeof Promise=="function"?Promise:void 0,Vh=typeof queueMicrotask=="function"?queueMicrotask:typeof iu<"u"?function(e){return iu.resolve(null).then(e).catch(Qh)}:Zl;function Qh(e){setTimeout(function(){throw e})}function ll(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),jr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);jr(t)}function Pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ou(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Bn=Math.random().toString(36).slice(2),qe="__reactFiber$"+Bn,Nr="__reactProps$"+Bn,pt="__reactContainer$"+Bn,ql="__reactEvents$"+Bn,Kh="__reactListeners$"+Bn,Yh="__reactHandles$"+Bn;function Qt(e){var t=e[qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pt]||n[qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ou(e);e!==null;){if(n=e[qe])return n;e=ou(e)}return t}e=n,n=e.parentNode}return null}function Hr(e){return e=e[qe]||e[pt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function jo(e){return e[Nr]||null}var Jl=[],gn=-1;function Ft(e){return{current:e}}function H(e){0>gn||(e.current=Jl[gn],Jl[gn]=null,gn--)}function U(e,t){gn++,Jl[gn]=e.current,e.current=t}var It={},ge=Ft(It),je=Ft(!1),qt=It;function Tn(e,t){var n=e.type.contextTypes;if(!n)return It;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ae(e){return e=e.childContextTypes,e!=null}function Xi(){H(je),H(ge)}function lu(e,t,n){if(ge.current!==It)throw Error(S(168));U(ge,t),U(je,n)}function Ad(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,Rp(e)||"Unknown",i));return K({},n,r)}function Zi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||It,qt=ge.current,U(ge,e),U(je,je.current),!0}function au(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Ad(e,t,qt),r.__reactInternalMemoizedMergedChildContext=e,H(je),H(ge),U(ge,e)):H(je),U(je,n)}var st=null,Ao=!1,al=!1;function Cd(e){st===null?st=[e]:st.push(e)}function Gh(e){Ao=!0,Cd(e)}function bt(){if(!al&&st!==null){al=!0;var e=0,t=b;try{var n=st;for(b=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}st=null,Ao=!1}catch(i){throw st!==null&&(st=st.slice(e+1)),Xc(Da,bt),i}finally{b=t,al=!1}}return null}var vn=[],xn=0,qi=null,Ji=0,Me=[],Ie=0,Jt=null,ut=1,ct="";function Ht(e,t){vn[xn++]=Ji,vn[xn++]=qi,qi=e,Ji=t}function Ed(e,t,n){Me[Ie++]=ut,Me[Ie++]=ct,Me[Ie++]=Jt,Jt=e;var r=ut;e=ct;var i=32-Ve(r)-1;r&=~(1<<i),n+=1;var o=32-Ve(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,ut=1<<32-Ve(t)+i|n<<i|r,ct=o+e}else ut=1<<o|n<<i|r,ct=e}function Qa(e){e.return!==null&&(Ht(e,1),Ed(e,1,0))}function Ka(e){for(;e===qi;)qi=vn[--xn],vn[xn]=null,Ji=vn[--xn],vn[xn]=null;for(;e===Jt;)Jt=Me[--Ie],Me[Ie]=null,ct=Me[--Ie],Me[Ie]=null,ut=Me[--Ie],Me[Ie]=null}var Te=null,Pe=null,$=!1,$e=null;function _d(e,t){var n=De(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function su(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Te=e,Pe=Pt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Te=e,Pe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Jt!==null?{id:ut,overflow:ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=De(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Te=e,Pe=null,!0):!1;default:return!1}}function ea(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ta(e){if($){var t=Pe;if(t){var n=t;if(!su(e,t)){if(ea(e))throw Error(S(418));t=Pt(n.nextSibling);var r=Te;t&&su(e,t)?_d(r,n):(e.flags=e.flags&-4097|2,$=!1,Te=e)}}else{if(ea(e))throw Error(S(418));e.flags=e.flags&-4097|2,$=!1,Te=e}}}function uu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Te=e}function oi(e){if(e!==Te)return!1;if(!$)return uu(e),$=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Xl(e.type,e.memoizedProps)),t&&(t=Pe)){if(ea(e))throw Nd(),Error(S(418));for(;t;)_d(e,t),t=Pt(t.nextSibling)}if(uu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Pe=Pt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Pe=null}}else Pe=Te?Pt(e.stateNode.nextSibling):null;return!0}function Nd(){for(var e=Pe;e;)e=Pt(e.nextSibling)}function Ln(){Pe=Te=null,$=!1}function Ya(e){$e===null?$e=[e]:$e.push(e)}var Xh=gt.ReactCurrentBatchConfig;function We(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var eo=Ft(null),to=null,yn=null,Ga=null;function Xa(){Ga=yn=to=null}function Za(e){var t=eo.current;H(eo),e._currentValue=t}function na(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function En(e,t){to=e,Ga=yn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function be(e){var t=e._currentValue;if(Ga!==e)if(e={context:e,memoizedValue:t,next:null},yn===null){if(to===null)throw Error(S(308));yn=e,to.dependencies={lanes:0,firstContext:e}}else yn=yn.next=e;return t}var Kt=null;function qa(e){Kt===null?Kt=[e]:Kt.push(e)}function Pd(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,qa(t)):(n.next=i.next,i.next=n),t.interleaved=n,ht(e,r)}function ht(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var wt=!1;function Ja(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Td(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function dt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Tt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ht(e,n)}return i=r.interleaved,i===null?(t.next=t,qa(r)):(t.next=i.next,i.next=t),r.interleaved=t,ht(e,n)}function Ti(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Fa(e,n)}}function cu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function no(e,t,n,r){var i=e.updateQueue;wt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,c=u.next;u.next=null,l===null?o=c:l.next=c,l=u;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==l&&(s===null?h.firstBaseUpdate=c:s.next=c,h.lastBaseUpdate=u))}if(o!==null){var m=i.baseState;l=0,h=c=u=null,s=o;do{var g=s.lane,w=s.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,v=s;switch(g=t,w=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){m=y.call(w,m,g);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,g=typeof y=="function"?y.call(w,m,g):y,g==null)break e;m=K({},m,g);break e;case 2:wt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else w={eventTime:w,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(c=h=w,u=m):h=h.next=w,l|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);tn|=l,e.lanes=l,e.memoizedState=m}}function du(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Ld=new Pc.Component().refs;function ra(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Co={isMounted:function(e){return(e=e._reactInternals)?on(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=xe(),i=Rt(e),o=dt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Tt(e,o,i),t!==null&&(Qe(t,e,i,r),Ti(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=xe(),i=Rt(e),o=dt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Tt(e,o,i),t!==null&&(Qe(t,e,i,r),Ti(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=xe(),r=Rt(e),i=dt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Tt(e,i,r),t!==null&&(Qe(t,e,r,n),Ti(t,e,r))}};function fu(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Cr(n,r)||!Cr(i,o):!0}function Rd(e,t,n){var r=!1,i=It,o=t.contextType;return typeof o=="object"&&o!==null?o=be(o):(i=Ae(t)?qt:ge.current,r=t.contextTypes,o=(r=r!=null)?Tn(e,i):It),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Co,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function pu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Co.enqueueReplaceState(t,t.state,null)}function ia(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Ld,Ja(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=be(o):(o=Ae(t)?qt:ge.current,i.context=Tn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ra(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Co.enqueueReplaceState(i,i.state,null),no(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Zn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;s===Ld&&(s=i.refs={}),l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function li(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function hu(e){var t=e._init;return t(e._payload)}function zd(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=zt(f,d),f.index=0,f.sibling=null,f}function o(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,p,x){return d===null||d.tag!==6?(d=hl(p,f.mode,x),d.return=f,d):(d=i(d,p),d.return=f,d)}function u(f,d,p,x){var C=p.type;return C===dn?h(f,d,p.props.children,x,p.key):d!==null&&(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===yt&&hu(C)===d.type)?(x=i(d,p.props),x.ref=Zn(f,d,p),x.return=f,x):(x=Ii(p.type,p.key,p.props,null,f.mode,x),x.ref=Zn(f,d,p),x.return=f,x)}function c(f,d,p,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=ml(p,f.mode,x),d.return=f,d):(d=i(d,p.children||[]),d.return=f,d)}function h(f,d,p,x,C){return d===null||d.tag!==7?(d=Xt(p,f.mode,x,C),d.return=f,d):(d=i(d,p),d.return=f,d)}function m(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=hl(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Gr:return p=Ii(d.type,d.key,d.props,null,f.mode,p),p.ref=Zn(f,null,d),p.return=f,p;case cn:return d=ml(d,f.mode,p),d.return=f,d;case yt:var x=d._init;return m(f,x(d._payload),p)}if(ir(d)||Qn(d))return d=Xt(d,f.mode,p,null),d.return=f,d;li(f,d)}return null}function g(f,d,p,x){var C=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return C!==null?null:s(f,d,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Gr:return p.key===C?u(f,d,p,x):null;case cn:return p.key===C?c(f,d,p,x):null;case yt:return C=p._init,g(f,d,C(p._payload),x)}if(ir(p)||Qn(p))return C!==null?null:h(f,d,p,x,null);li(f,p)}return null}function w(f,d,p,x,C){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(p)||null,s(d,f,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Gr:return f=f.get(x.key===null?p:x.key)||null,u(d,f,x,C);case cn:return f=f.get(x.key===null?p:x.key)||null,c(d,f,x,C);case yt:var _=x._init;return w(f,d,p,_(x._payload),C)}if(ir(x)||Qn(x))return f=f.get(p)||null,h(d,f,x,C,null);li(d,x)}return null}function y(f,d,p,x){for(var C=null,_=null,A=d,T=d=0,B=null;A!==null&&T<p.length;T++){A.index>T?(B=A,A=null):B=A.sibling;var L=g(f,A,p[T],x);if(L===null){A===null&&(A=B);break}e&&A&&L.alternate===null&&t(f,A),d=o(L,d,T),_===null?C=L:_.sibling=L,_=L,A=B}if(T===p.length)return n(f,A),$&&Ht(f,T),C;if(A===null){for(;T<p.length;T++)A=m(f,p[T],x),A!==null&&(d=o(A,d,T),_===null?C=A:_.sibling=A,_=A);return $&&Ht(f,T),C}for(A=r(f,A);T<p.length;T++)B=w(A,f,T,p[T],x),B!==null&&(e&&B.alternate!==null&&A.delete(B.key===null?T:B.key),d=o(B,d,T),_===null?C=B:_.sibling=B,_=B);return e&&A.forEach(function(_e){return t(f,_e)}),$&&Ht(f,T),C}function v(f,d,p,x){var C=Qn(p);if(typeof C!="function")throw Error(S(150));if(p=C.call(p),p==null)throw Error(S(151));for(var _=C=null,A=d,T=d=0,B=null,L=p.next();A!==null&&!L.done;T++,L=p.next()){A.index>T?(B=A,A=null):B=A.sibling;var _e=g(f,A,L.value,x);if(_e===null){A===null&&(A=B);break}e&&A&&_e.alternate===null&&t(f,A),d=o(_e,d,T),_===null?C=_e:_.sibling=_e,_=_e,A=B}if(L.done)return n(f,A),$&&Ht(f,T),C;if(A===null){for(;!L.done;T++,L=p.next())L=m(f,L.value,x),L!==null&&(d=o(L,d,T),_===null?C=L:_.sibling=L,_=L);return $&&Ht(f,T),C}for(A=r(f,A);!L.done;T++,L=p.next())L=w(A,f,T,L.value,x),L!==null&&(e&&L.alternate!==null&&A.delete(L.key===null?T:L.key),d=o(L,d,T),_===null?C=L:_.sibling=L,_=L);return e&&A.forEach(function($n){return t(f,$n)}),$&&Ht(f,T),C}function j(f,d,p,x){if(typeof p=="object"&&p!==null&&p.type===dn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Gr:e:{for(var C=p.key,_=d;_!==null;){if(_.key===C){if(C=p.type,C===dn){if(_.tag===7){n(f,_.sibling),d=i(_,p.props.children),d.return=f,f=d;break e}}else if(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===yt&&hu(C)===_.type){n(f,_.sibling),d=i(_,p.props),d.ref=Zn(f,_,p),d.return=f,f=d;break e}n(f,_);break}else t(f,_);_=_.sibling}p.type===dn?(d=Xt(p.props.children,f.mode,x,p.key),d.return=f,f=d):(x=Ii(p.type,p.key,p.props,null,f.mode,x),x.ref=Zn(f,d,p),x.return=f,f=x)}return l(f);case cn:e:{for(_=p.key;d!==null;){if(d.key===_)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=i(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=ml(p,f.mode,x),d.return=f,f=d}return l(f);case yt:return _=p._init,j(f,d,_(p._payload),x)}if(ir(p))return y(f,d,p,x);if(Qn(p))return v(f,d,p,x);li(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=i(d,p),d.return=f,f=d):(n(f,d),d=hl(p,f.mode,x),d.return=f,f=d),l(f)):n(f,d)}return j}var Rn=zd(!0),Od=zd(!1),$r={},et=Ft($r),Pr=Ft($r),Tr=Ft($r);function Yt(e){if(e===$r)throw Error(S(174));return e}function es(e,t){switch(U(Tr,t),U(Pr,e),U(et,$r),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Il(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Il(t,e)}H(et),U(et,t)}function zn(){H(et),H(Pr),H(Tr)}function Md(e){Yt(Tr.current);var t=Yt(et.current),n=Il(t,e.type);t!==n&&(U(Pr,e),U(et,n))}function ts(e){Pr.current===e&&(H(et),H(Pr))}var V=Ft(0);function ro(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var sl=[];function ns(){for(var e=0;e<sl.length;e++)sl[e]._workInProgressVersionPrimary=null;sl.length=0}var Li=gt.ReactCurrentDispatcher,ul=gt.ReactCurrentBatchConfig,en=0,Q=null,ee=null,re=null,io=!1,fr=!1,Lr=0,Zh=0;function ue(){throw Error(S(321))}function rs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ke(e[n],t[n]))return!1;return!0}function is(e,t,n,r,i,o){if(en=o,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Li.current=e===null||e.memoizedState===null?tm:nm,e=n(r,i),fr){o=0;do{if(fr=!1,Lr=0,25<=o)throw Error(S(301));o+=1,re=ee=null,t.updateQueue=null,Li.current=rm,e=n(r,i)}while(fr)}if(Li.current=oo,t=ee!==null&&ee.next!==null,en=0,re=ee=Q=null,io=!1,t)throw Error(S(300));return e}function os(){var e=Lr!==0;return Lr=0,e}function Ge(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?Q.memoizedState=re=e:re=re.next=e,re}function Be(){if(ee===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=re===null?Q.memoizedState:re.next;if(t!==null)re=t,ee=e;else{if(e===null)throw Error(S(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},re===null?Q.memoizedState=re=e:re=re.next=e}return re}function Rr(e,t){return typeof t=="function"?t(e):t}function cl(e){var t=Be(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=ee,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,u=null,c=o;do{var h=c.lane;if((en&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=m,l=r):u=u.next=m,Q.lanes|=h,tn|=h}c=c.next}while(c!==null&&c!==o);u===null?l=r:u.next=s,Ke(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Q.lanes|=o,tn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function dl(e){var t=Be(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Ke(o,t.memoizedState)||(Se=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Id(){}function Dd(e,t){var n=Q,r=Be(),i=t(),o=!Ke(r.memoizedState,i);if(o&&(r.memoizedState=i,Se=!0),r=r.queue,ls(Bd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||re!==null&&re.memoizedState.tag&1){if(n.flags|=2048,zr(9,bd.bind(null,n,r,i,t),void 0,null),ie===null)throw Error(S(349));en&30||Fd(n,t,i)}return i}function Fd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function bd(e,t,n,r){t.value=n,t.getSnapshot=r,Ud(t)&&Wd(e)}function Bd(e,t,n){return n(function(){Ud(t)&&Wd(e)})}function Ud(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ke(e,n)}catch{return!0}}function Wd(e){var t=ht(e,1);t!==null&&Qe(t,e,1,-1)}function mu(e){var t=Ge();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rr,lastRenderedState:e},t.queue=e,e=e.dispatch=em.bind(null,Q,e),[t.memoizedState,e]}function zr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Hd(){return Be().memoizedState}function Ri(e,t,n,r){var i=Ge();Q.flags|=e,i.memoizedState=zr(1|t,n,void 0,r===void 0?null:r)}function Eo(e,t,n,r){var i=Be();r=r===void 0?null:r;var o=void 0;if(ee!==null){var l=ee.memoizedState;if(o=l.destroy,r!==null&&rs(r,l.deps)){i.memoizedState=zr(t,n,o,r);return}}Q.flags|=e,i.memoizedState=zr(1|t,n,o,r)}function gu(e,t){return Ri(8390656,8,e,t)}function ls(e,t){return Eo(2048,8,e,t)}function $d(e,t){return Eo(4,2,e,t)}function Vd(e,t){return Eo(4,4,e,t)}function Qd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Kd(e,t,n){return n=n!=null?n.concat([e]):null,Eo(4,4,Qd.bind(null,t,e),n)}function as(){}function Yd(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&rs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Gd(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&rs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Xd(e,t,n){return en&21?(Ke(n,t)||(n=Jc(),Q.lanes|=n,tn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function qh(e,t){var n=b;b=n!==0&&4>n?n:4,e(!0);var r=ul.transition;ul.transition={};try{e(!1),t()}finally{b=n,ul.transition=r}}function Zd(){return Be().memoizedState}function Jh(e,t,n){var r=Rt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qd(e))Jd(t,n);else if(n=Pd(e,t,n,r),n!==null){var i=xe();Qe(n,e,r,i),ef(n,t,r)}}function em(e,t,n){var r=Rt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qd(e))Jd(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,Ke(s,l)){var u=t.interleaved;u===null?(i.next=i,qa(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=Pd(e,t,i,r),n!==null&&(i=xe(),Qe(n,e,r,i),ef(n,t,r))}}function qd(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function Jd(e,t){fr=io=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ef(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Fa(e,n)}}var oo={readContext:be,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},tm={readContext:be,useCallback:function(e,t){return Ge().memoizedState=[e,t===void 0?null:t],e},useContext:be,useEffect:gu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ri(4194308,4,Qd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ri(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ri(4,2,e,t)},useMemo:function(e,t){var n=Ge();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ge();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Jh.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var t=Ge();return e={current:e},t.memoizedState=e},useState:mu,useDebugValue:as,useDeferredValue:function(e){return Ge().memoizedState=e},useTransition:function(){var e=mu(!1),t=e[0];return e=qh.bind(null,e[1]),Ge().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Q,i=Ge();if($){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ie===null)throw Error(S(349));en&30||Fd(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,gu(Bd.bind(null,r,o,e),[e]),r.flags|=2048,zr(9,bd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ge(),t=ie.identifierPrefix;if($){var n=ct,r=ut;n=(r&~(1<<32-Ve(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Lr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Zh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},nm={readContext:be,useCallback:Yd,useContext:be,useEffect:ls,useImperativeHandle:Kd,useInsertionEffect:$d,useLayoutEffect:Vd,useMemo:Gd,useReducer:cl,useRef:Hd,useState:function(){return cl(Rr)},useDebugValue:as,useDeferredValue:function(e){var t=Be();return Xd(t,ee.memoizedState,e)},useTransition:function(){var e=cl(Rr)[0],t=Be().memoizedState;return[e,t]},useMutableSource:Id,useSyncExternalStore:Dd,useId:Zd,unstable_isNewReconciler:!1},rm={readContext:be,useCallback:Yd,useContext:be,useEffect:ls,useImperativeHandle:Kd,useInsertionEffect:$d,useLayoutEffect:Vd,useMemo:Gd,useReducer:dl,useRef:Hd,useState:function(){return dl(Rr)},useDebugValue:as,useDeferredValue:function(e){var t=Be();return ee===null?t.memoizedState=e:Xd(t,ee.memoizedState,e)},useTransition:function(){var e=dl(Rr)[0],t=Be().memoizedState;return[e,t]},useMutableSource:Id,useSyncExternalStore:Dd,useId:Zd,unstable_isNewReconciler:!1};function On(e,t){try{var n="",r=t;do n+=Lp(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function fl(e,t,n){return{value:e,source:null,stack:null,digest:t??null}}function oa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var im=typeof WeakMap=="function"?WeakMap:Map;function tf(e,t,n){n=dt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ao||(ao=!0,ma=r),oa(e,t)},n}function nf(e,t,n){n=dt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){oa(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){oa(e,t),typeof r!="function"&&(Lt===null?Lt=new Set([this]):Lt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function vu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new im;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=xm.bind(null,e,t,n),t.then(e,e))}function xu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function yu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=dt(-1,1),t.tag=2,Tt(n,t,1))),n.lanes|=1),e)}var om=gt.ReactCurrentOwner,Se=!1;function ve(e,t,n,r){t.child=e===null?Od(t,null,n,r):Rn(t,e.child,n,r)}function wu(e,t,n,r,i){n=n.render;var o=t.ref;return En(t,i),r=is(e,t,n,r,o,i),n=os(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,mt(e,t,i)):($&&n&&Qa(t),t.flags|=1,ve(e,t,r,i),t.child)}function ku(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ms(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,rf(e,t,o,r,i)):(e=Ii(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Cr,n(l,r)&&e.ref===t.ref)return mt(e,t,i)}return t.flags|=1,e=zt(o,r),e.ref=t.ref,e.return=t,t.child=e}function rf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Cr(o,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,mt(e,t,i)}return la(e,t,n,r,i)}function of(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(kn,Ne),Ne|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(kn,Ne),Ne|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,U(kn,Ne),Ne|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,U(kn,Ne),Ne|=r;return ve(e,t,i,n),t.child}function lf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function la(e,t,n,r,i){var o=Ae(n)?qt:ge.current;return o=Tn(t,o),En(t,i),n=is(e,t,n,r,o,i),r=os(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,mt(e,t,i)):($&&r&&Qa(t),t.flags|=1,ve(e,t,n,i),t.child)}function Su(e,t,n,r,i){if(Ae(n)){var o=!0;Zi(t)}else o=!1;if(En(t,i),t.stateNode===null)zi(e,t),Rd(t,n,r),ia(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=be(c):(c=Ae(n)?qt:ge.current,c=Tn(t,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==c)&&pu(t,l,r,c),wt=!1;var g=t.memoizedState;l.state=g,no(t,r,l,i),u=t.memoizedState,s!==r||g!==u||je.current||wt?(typeof h=="function"&&(ra(t,n,h,r),u=t.memoizedState),(s=wt||fu(t,n,s,r,g,u,c))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Td(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:We(t.type,s),l.props=c,m=t.pendingProps,g=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=be(u):(u=Ae(n)?qt:ge.current,u=Tn(t,u));var w=n.getDerivedStateFromProps;(h=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==m||g!==u)&&pu(t,l,r,u),wt=!1,g=t.memoizedState,l.state=g,no(t,r,l,i);var y=t.memoizedState;s!==m||g!==y||je.current||wt?(typeof w=="function"&&(ra(t,n,w,r),y=t.memoizedState),(c=wt||fu(t,n,c,r,g,y,u)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return aa(e,t,n,r,o,i)}function aa(e,t,n,r,i,o){lf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&au(t,n,!1),mt(e,t,o);r=t.stateNode,om.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Rn(t,e.child,null,o),t.child=Rn(t,null,s,o)):ve(e,t,s,o),t.memoizedState=r.state,i&&au(t,n,!0),t.child}function af(e){var t=e.stateNode;t.pendingContext?lu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&lu(e,t.context,!1),es(e,t.containerInfo)}function ju(e,t,n,r,i){return Ln(),Ya(i),t.flags|=256,ve(e,t,n,r),t.child}var sa={dehydrated:null,treeContext:null,retryLane:0};function ua(e){return{baseLanes:e,cachePool:null,transitions:null}}function sf(e,t,n){var r=t.pendingProps,i=V.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),U(V,i&1),e===null)return ta(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Po(l,r,0,null),e=Xt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ua(n),t.memoizedState=sa,e):ss(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return lm(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=zt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=zt(s,o):(o=Xt(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?ua(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=sa,r}return o=e.child,e=o.sibling,r=zt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ss(e,t){return t=Po({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ai(e,t,n,r){return r!==null&&Ya(r),Rn(t,e.child,null,n),e=ss(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function lm(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=fl(Error(S(422))),ai(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Po({mode:"visible",children:r.children},i,0,null),o=Xt(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Rn(t,e.child,null,l),t.child.memoizedState=ua(l),t.memoizedState=sa,o);if(!(t.mode&1))return ai(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(S(419)),r=fl(o,r),ai(e,t,l,r)}if(s=(l&e.childLanes)!==0,Se||s){if(r=ie,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ht(e,i),Qe(r,e,i,-1))}return hs(),r=fl(Error(S(421))),ai(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ym.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Pe=Pt(i.nextSibling),Te=t,$=!0,$e=null,e!==null&&(Me[Ie++]=ut,Me[Ie++]=ct,Me[Ie++]=Jt,ut=e.id,ct=e.overflow,Jt=t),t=ss(t,r.children),t.flags|=4096,t)}function Au(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),na(e.return,t,n)}function pl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function uf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ve(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Au(e,n,t);else if(e.tag===19)Au(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(V,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ro(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),pl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ro(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}pl(t,!0,n,null,o);break;case"together":pl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function mt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),tn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function am(e,t,n){switch(t.tag){case 3:af(t),Ln();break;case 5:Md(t);break;case 1:Ae(t.type)&&Zi(t);break;case 4:es(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;U(eo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?sf(e,t,n):(U(V,V.current&1),e=mt(e,t,n),e!==null?e.sibling:null);U(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return uf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),U(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,of(e,t,n)}return mt(e,t,n)}var cf,ca,df,ff;cf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ca=function(){};df=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Yt(et.current);var o=null;switch(n){case"input":i=Rl(e,i),r=Rl(e,r),o=[];break;case"select":i=K({},i,{value:void 0}),r=K({},r,{value:void 0}),o=[];break;case"textarea":i=Ml(e,i),r=Ml(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Gi)}Dl(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(xr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(xr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&W("scroll",e),o||s===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};ff=function(e,t,n,r){n!==r&&(t.flags|=4)};function qn(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function sm(e,t,n){var r=t.pendingProps;switch(Ka(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return Ae(t.type)&&Xi(),ce(t),null;case 3:return r=t.stateNode,zn(),H(je),H(ge),ns(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(oi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$e!==null&&(xa($e),$e=null))),ca(e,t),ce(t),null;case 5:ts(t);var i=Yt(Tr.current);if(n=t.type,e!==null&&t.stateNode!=null)df(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return ce(t),null}if(e=Yt(et.current),oi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[qe]=t,r[Nr]=o,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(i=0;i<lr.length;i++)W(lr[i],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":zs(r,o),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},W("invalid",r);break;case"textarea":Ms(r,o),W("invalid",r)}Dl(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&ii(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&ii(r.textContent,s,e),i=["children",""+s]):xr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&W("scroll",r)}switch(n){case"input":Xr(r),Os(r,o,!0);break;case"textarea":Xr(r),Is(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Gi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Fc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[qe]=t,e[Nr]=r,cf(e,t,!1,!1),t.stateNode=e;e:{switch(l=Fl(n,r),n){case"dialog":W("cancel",e),W("close",e),i=r;break;case"iframe":case"object":case"embed":W("load",e),i=r;break;case"video":case"audio":for(i=0;i<lr.length;i++)W(lr[i],e);i=r;break;case"source":W("error",e),i=r;break;case"img":case"image":case"link":W("error",e),W("load",e),i=r;break;case"details":W("toggle",e),i=r;break;case"input":zs(e,r),i=Rl(e,r),W("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=K({},r,{value:void 0}),W("invalid",e);break;case"textarea":Ms(e,r),i=Ml(e,r),W("invalid",e);break;default:i=r}Dl(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?Uc(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&bc(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&yr(e,u):typeof u=="number"&&yr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(xr.hasOwnProperty(o)?u!=null&&o==="onScroll"&&W("scroll",e):u!=null&&Ra(e,o,u,l))}switch(n){case"input":Xr(e),Os(e,r,!1);break;case"textarea":Xr(e),Is(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Mt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Sn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Sn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Gi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)ff(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Yt(Tr.current),Yt(et.current),oi(t)){if(r=t.stateNode,n=t.memoizedProps,r[qe]=t,(o=r.nodeValue!==n)&&(e=Te,e!==null))switch(e.tag){case 3:ii(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ii(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qe]=t,t.stateNode=r}return ce(t),null;case 13:if(H(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&Pe!==null&&t.mode&1&&!(t.flags&128))Nd(),Ln(),t.flags|=98560,o=!1;else if(o=oi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[qe]=t}else Ln(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),o=!1}else $e!==null&&(xa($e),$e=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?te===0&&(te=3):hs())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return zn(),ca(e,t),e===null&&Er(t.stateNode.containerInfo),ce(t),null;case 10:return Za(t.type._context),ce(t),null;case 17:return Ae(t.type)&&Xi(),ce(t),null;case 19:if(H(V),o=t.memoizedState,o===null)return ce(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)qn(o,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ro(e),l!==null){for(t.flags|=128,qn(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(V,V.current&1|2),t.child}e=e.sibling}o.tail!==null&&Z()>Mn&&(t.flags|=128,r=!0,qn(o,!1),t.lanes=4194304)}else{if(!r)if(e=ro(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),qn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!$)return ce(t),null}else 2*Z()-o.renderingStartTime>Mn&&n!==1073741824&&(t.flags|=128,r=!0,qn(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Z(),t.sibling=null,n=V.current,U(V,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return ps(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ne&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function um(e,t){switch(Ka(t),t.tag){case 1:return Ae(t.type)&&Xi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zn(),H(je),H(ge),ns(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ts(t),null;case 13:if(H(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Ln()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(V),null;case 4:return zn(),null;case 10:return Za(t.type._context),null;case 22:case 23:return ps(),null;case 24:return null;default:return null}}var si=!1,me=!1,cm=typeof WeakSet=="function"?WeakSet:Set,N=null;function wn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Y(e,t,r)}else n.current=null}function da(e,t,n){try{n()}catch(r){Y(e,t,r)}}var Cu=!1;function dm(e,t){if(Yl=Qi,e=md(),Va(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,c=0,h=0,m=e,g=null;t:for(;;){for(var w;m!==n||i!==0&&m.nodeType!==3||(s=l+i),m!==o||r!==0&&m.nodeType!==3||(u=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(w=m.firstChild)!==null;)g=m,m=w;for(;;){if(m===e)break t;if(g===n&&++c===i&&(s=l),g===o&&++h===r&&(u=l),(w=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=w}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gl={focusedElem:e,selectionRange:n},Qi=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,j=y.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:We(t.type,v),j);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(x){Y(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return y=Cu,Cu=!1,y}function pr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&da(t,n,o)}i=i.next}while(i!==r)}}function _o(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function fa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function pf(e){var t=e.alternate;t!==null&&(e.alternate=null,pf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qe],delete t[Nr],delete t[ql],delete t[Kh],delete t[Yh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function hf(e){return e.tag===5||e.tag===3||e.tag===4}function Eu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Gi));else if(r!==4&&(e=e.child,e!==null))for(pa(e,t,n),e=e.sibling;e!==null;)pa(e,t,n),e=e.sibling}function ha(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ha(e,t,n),e=e.sibling;e!==null;)ha(e,t,n),e=e.sibling}var oe=null,He=!1;function xt(e,t,n){for(n=n.child;n!==null;)mf(e,t,n),n=n.sibling}function mf(e,t,n){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(yo,n)}catch{}switch(n.tag){case 5:me||wn(n,t);case 6:var r=oe,i=He;oe=null,xt(e,t,n),oe=r,He=i,oe!==null&&(He?(e=oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):oe.removeChild(n.stateNode));break;case 18:oe!==null&&(He?(e=oe,n=n.stateNode,e.nodeType===8?ll(e.parentNode,n):e.nodeType===1&&ll(e,n),jr(e)):ll(oe,n.stateNode));break;case 4:r=oe,i=He,oe=n.stateNode.containerInfo,He=!0,xt(e,t,n),oe=r,He=i;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&da(n,t,l),i=i.next}while(i!==r)}xt(e,t,n);break;case 1:if(!me&&(wn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Y(n,t,s)}xt(e,t,n);break;case 21:xt(e,t,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,xt(e,t,n),me=r):xt(e,t,n);break;default:xt(e,t,n)}}function _u(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new cm),t.forEach(function(r){var i=wm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ue(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:oe=s.stateNode,He=!1;break e;case 3:oe=s.stateNode.containerInfo,He=!0;break e;case 4:oe=s.stateNode.containerInfo,He=!0;break e}s=s.return}if(oe===null)throw Error(S(160));mf(o,l,i),oe=null,He=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Y(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)gf(t,e),t=t.sibling}function gf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ue(t,e),Ye(e),r&4){try{pr(3,e,e.return),_o(3,e)}catch(v){Y(e,e.return,v)}try{pr(5,e,e.return)}catch(v){Y(e,e.return,v)}}break;case 1:Ue(t,e),Ye(e),r&512&&n!==null&&wn(n,n.return);break;case 5:if(Ue(t,e),Ye(e),r&512&&n!==null&&wn(n,n.return),e.flags&32){var i=e.stateNode;try{yr(i,"")}catch(v){Y(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Ic(i,o),Fl(s,l);var c=Fl(s,o);for(l=0;l<u.length;l+=2){var h=u[l],m=u[l+1];h==="style"?Uc(i,m):h==="dangerouslySetInnerHTML"?bc(i,m):h==="children"?yr(i,m):Ra(i,h,m,c)}switch(s){case"input":zl(i,o);break;case"textarea":Dc(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?Sn(i,!!o.multiple,w,!1):g!==!!o.multiple&&(o.defaultValue!=null?Sn(i,!!o.multiple,o.defaultValue,!0):Sn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Nr]=o}catch(v){Y(e,e.return,v)}}break;case 6:if(Ue(t,e),Ye(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){Y(e,e.return,v)}}break;case 3:if(Ue(t,e),Ye(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{jr(t.containerInfo)}catch(v){Y(e,e.return,v)}break;case 4:Ue(t,e),Ye(e);break;case 13:Ue(t,e),Ye(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ds=Z())),r&4&&_u(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(me=(c=me)||h,Ue(t,e),me=c):Ue(t,e),Ye(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(N=e,h=e.child;h!==null;){for(m=N=h;N!==null;){switch(g=N,w=g.child,g.tag){case 0:case 11:case 14:case 15:pr(4,g,g.return);break;case 1:wn(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){Y(r,n,v)}}break;case 5:wn(g,g.return);break;case 22:if(g.memoizedState!==null){Pu(m);continue}}w!==null?(w.return=g,N=w):Pu(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{i=m.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=m.stateNode,u=m.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Bc("display",l))}catch(v){Y(e,e.return,v)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(v){Y(e,e.return,v)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ue(t,e),Ye(e),r&4&&_u(e);break;case 21:break;default:Ue(t,e),Ye(e)}}function Ye(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(hf(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(yr(i,""),r.flags&=-33);var o=Eu(e);ha(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Eu(e);pa(e,s,l);break;default:throw Error(S(161))}}catch(u){Y(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function fm(e,t,n){N=e,vf(e)}function vf(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||si;if(!l){var s=i.alternate,u=s!==null&&s.memoizedState!==null||me;s=si;var c=me;if(si=l,(me=u)&&!c)for(N=i;N!==null;)l=N,u=l.child,l.tag===22&&l.memoizedState!==null?Tu(i):u!==null?(u.return=l,N=u):Tu(i);for(;o!==null;)N=o,vf(o),o=o.sibling;N=i,si=s,me=c}Nu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,N=o):Nu(e)}}function Nu(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:me||_o(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!me)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:We(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&du(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}du(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&jr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}me||t.flags&512&&fa(t)}catch(g){Y(t,t.return,g)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function Pu(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function Tu(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_o(4,t)}catch(u){Y(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){Y(t,i,u)}}var o=t.return;try{fa(t)}catch(u){Y(t,o,u)}break;case 5:var l=t.return;try{fa(t)}catch(u){Y(t,l,u)}}}catch(u){Y(t,t.return,u)}if(t===e){N=null;break}var s=t.sibling;if(s!==null){s.return=t.return,N=s;break}N=t.return}}var pm=Math.ceil,lo=gt.ReactCurrentDispatcher,us=gt.ReactCurrentOwner,Fe=gt.ReactCurrentBatchConfig,I=0,ie=null,J=null,ae=0,Ne=0,kn=Ft(0),te=0,Or=null,tn=0,No=0,cs=0,hr=null,ke=null,ds=0,Mn=1/0,at=null,ao=!1,ma=null,Lt=null,ui=!1,At=null,so=0,mr=0,ga=null,Oi=-1,Mi=0;function xe(){return I&6?Z():Oi!==-1?Oi:Oi=Z()}function Rt(e){return e.mode&1?I&2&&ae!==0?ae&-ae:Xh.transition!==null?(Mi===0&&(Mi=Jc()),Mi):(e=b,e!==0||(e=window.event,e=e===void 0?16:ld(e.type)),e):1}function Qe(e,t,n,r){if(50<mr)throw mr=0,ga=null,Error(S(185));Ur(e,n,r),(!(I&2)||e!==ie)&&(e===ie&&(!(I&2)&&(No|=n),te===4&&St(e,ae)),Ce(e,r),n===1&&I===0&&!(t.mode&1)&&(Mn=Z()+500,Ao&&bt()))}function Ce(e,t){var n=e.callbackNode;Xp(e,t);var r=Vi(e,e===ie?ae:0);if(r===0)n!==null&&bs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&bs(n),t===1)e.tag===0?Gh(Lu.bind(null,e)):Cd(Lu.bind(null,e)),Vh(function(){!(I&6)&&bt()}),n=null;else{switch(ed(r)){case 1:n=Da;break;case 4:n=Zc;break;case 16:n=$i;break;case 536870912:n=qc;break;default:n=$i}n=Cf(n,xf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function xf(e,t){if(Oi=-1,Mi=0,I&6)throw Error(S(327));var n=e.callbackNode;if(_n()&&e.callbackNode!==n)return null;var r=Vi(e,e===ie?ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=uo(e,r);else{t=r;var i=I;I|=2;var o=wf();(ie!==e||ae!==t)&&(at=null,Mn=Z()+500,Gt(e,t));do try{gm();break}catch(s){yf(e,s)}while(!0);Xa(),lo.current=o,I=i,J!==null?t=0:(ie=null,ae=0,t=te)}if(t!==0){if(t===2&&(i=Hl(e),i!==0&&(r=i,t=va(e,i))),t===1)throw n=Or,Gt(e,0),St(e,r),Ce(e,Z()),n;if(t===6)St(e,r);else{if(i=e.current.alternate,!(r&30)&&!hm(i)&&(t=uo(e,r),t===2&&(o=Hl(e),o!==0&&(r=o,t=va(e,o))),t===1))throw n=Or,Gt(e,0),St(e,r),Ce(e,Z()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:$t(e,ke,at);break;case 3:if(St(e,r),(r&130023424)===r&&(t=ds+500-Z(),10<t)){if(Vi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){xe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Zl($t.bind(null,e,ke,at),t);break}$t(e,ke,at);break;case 4:if(St(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Ve(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pm(r/1960))-r,10<r){e.timeoutHandle=Zl($t.bind(null,e,ke,at),r);break}$t(e,ke,at);break;case 5:$t(e,ke,at);break;default:throw Error(S(329))}}}return Ce(e,Z()),e.callbackNode===n?xf.bind(null,e):null}function va(e,t){var n=hr;return e.current.memoizedState.isDehydrated&&(Gt(e,t).flags|=256),e=uo(e,t),e!==2&&(t=ke,ke=n,t!==null&&xa(t)),e}function xa(e){ke===null?ke=e:ke.push.apply(ke,e)}function hm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ke(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function St(e,t){for(t&=~cs,t&=~No,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ve(t),r=1<<n;e[n]=-1,t&=~r}}function Lu(e){if(I&6)throw Error(S(327));_n();var t=Vi(e,0);if(!(t&1))return Ce(e,Z()),null;var n=uo(e,t);if(e.tag!==0&&n===2){var r=Hl(e);r!==0&&(t=r,n=va(e,r))}if(n===1)throw n=Or,Gt(e,0),St(e,t),Ce(e,Z()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,$t(e,ke,at),Ce(e,Z()),null}function fs(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(Mn=Z()+500,Ao&&bt())}}function nn(e){At!==null&&At.tag===0&&!(I&6)&&_n();var t=I;I|=1;var n=Fe.transition,r=b;try{if(Fe.transition=null,b=1,e)return e()}finally{b=r,Fe.transition=n,I=t,!(I&6)&&bt()}}function ps(){Ne=kn.current,H(kn)}function Gt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,$h(n)),J!==null)for(n=J.return;n!==null;){var r=n;switch(Ka(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xi();break;case 3:zn(),H(je),H(ge),ns();break;case 5:ts(r);break;case 4:zn();break;case 13:H(V);break;case 19:H(V);break;case 10:Za(r.type._context);break;case 22:case 23:ps()}n=n.return}if(ie=e,J=e=zt(e.current,null),ae=Ne=t,te=0,Or=null,cs=No=tn=0,ke=hr=null,Kt!==null){for(t=0;t<Kt.length;t++)if(n=Kt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Kt=null}return e}function yf(e,t){do{var n=J;try{if(Xa(),Li.current=oo,io){for(var r=Q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}io=!1}if(en=0,re=ee=Q=null,fr=!1,Lr=0,us.current=null,n===null||n.return===null){te=1,Or=t,J=null;break}e:{var o=e,l=n.return,s=n,u=t;if(t=ae,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=s,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=xu(l);if(w!==null){w.flags&=-257,yu(w,l,s,o,t),w.mode&1&&vu(o,c,t),t=w,u=c;var y=t.updateQueue;if(y===null){var v=new Set;v.add(u),t.updateQueue=v}else y.add(u);break e}else{if(!(t&1)){vu(o,c,t),hs();break e}u=Error(S(426))}}else if($&&s.mode&1){var j=xu(l);if(j!==null){!(j.flags&65536)&&(j.flags|=256),yu(j,l,s,o,t),Ya(On(u,s));break e}}o=u=On(u,s),te!==4&&(te=2),hr===null?hr=[o]:hr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=tf(o,u,t);cu(o,f);break e;case 1:s=u;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Lt===null||!Lt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=nf(o,s,t);cu(o,x);break e}}o=o.return}while(o!==null)}Sf(n)}catch(C){t=C,J===n&&n!==null&&(J=n=n.return);continue}break}while(!0)}function wf(){var e=lo.current;return lo.current=oo,e===null?oo:e}function hs(){(te===0||te===3||te===2)&&(te=4),ie===null||!(tn&268435455)&&!(No&268435455)||St(ie,ae)}function uo(e,t){var n=I;I|=2;var r=wf();(ie!==e||ae!==t)&&(at=null,Gt(e,t));do try{mm();break}catch(i){yf(e,i)}while(!0);if(Xa(),I=n,lo.current=r,J!==null)throw Error(S(261));return ie=null,ae=0,te}function mm(){for(;J!==null;)kf(J)}function gm(){for(;J!==null&&!Up();)kf(J)}function kf(e){var t=Af(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,t===null?Sf(e):J=t,us.current=null}function Sf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=um(n,t),n!==null){n.flags&=32767,J=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,J=null;return}}else if(n=sm(n,t,Ne),n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);te===0&&(te=5)}function $t(e,t,n){var r=b,i=Fe.transition;try{Fe.transition=null,b=1,vm(e,t,n,r)}finally{Fe.transition=i,b=r}return null}function vm(e,t,n,r){do _n();while(At!==null);if(I&6)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Zp(e,o),e===ie&&(J=ie=null,ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ui||(ui=!0,Cf($i,function(){return _n(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Fe.transition,Fe.transition=null;var l=b;b=1;var s=I;I|=4,us.current=null,dm(e,n),gf(n,e),Dh(Gl),Qi=!!Yl,Gl=Yl=null,e.current=n,fm(n),Wp(),I=s,b=l,Fe.transition=o}else e.current=n;if(ui&&(ui=!1,At=e,so=i),o=e.pendingLanes,o===0&&(Lt=null),Vp(n.stateNode),Ce(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ao)throw ao=!1,e=ma,ma=null,e;return so&1&&e.tag!==0&&_n(),o=e.pendingLanes,o&1?e===ga?mr++:(mr=0,ga=e):mr=0,bt(),null}function _n(){if(At!==null){var e=ed(so),t=Fe.transition,n=b;try{if(Fe.transition=null,b=16>e?16:e,At===null)var r=!1;else{if(e=At,At=null,so=0,I&6)throw Error(S(331));var i=I;for(I|=4,N=e.current;N!==null;){var o=N,l=o.child;if(N.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(N=c;N!==null;){var h=N;switch(h.tag){case 0:case 11:case 15:pr(8,h,o)}var m=h.child;if(m!==null)m.return=h,N=m;else for(;N!==null;){h=N;var g=h.sibling,w=h.return;if(pf(h),h===c){N=null;break}if(g!==null){g.return=w,N=g;break}N=w}}}var y=o.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var j=v.sibling;v.sibling=null,v=j}while(v!==null)}}N=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,N=l;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:pr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,N=f;break e}N=o.return}}var d=e.current;for(N=d;N!==null;){l=N;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,N=p;else e:for(l=d;N!==null;){if(s=N,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:_o(9,s)}}catch(C){Y(s,s.return,C)}if(s===l){N=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,N=x;break e}N=s.return}}if(I=i,bt(),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(yo,e)}catch{}r=!0}return r}finally{b=n,Fe.transition=t}}return!1}function Ru(e,t,n){t=On(n,t),t=tf(e,t,1),e=Tt(e,t,1),t=xe(),e!==null&&(Ur(e,1,t),Ce(e,t))}function Y(e,t,n){if(e.tag===3)Ru(e,e,n);else for(;t!==null;){if(t.tag===3){Ru(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Lt===null||!Lt.has(r))){e=On(n,e),e=nf(t,e,1),t=Tt(t,e,1),e=xe(),t!==null&&(Ur(t,1,e),Ce(t,e));break}}t=t.return}}function xm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=xe(),e.pingedLanes|=e.suspendedLanes&n,ie===e&&(ae&n)===n&&(te===4||te===3&&(ae&130023424)===ae&&500>Z()-ds?Gt(e,0):cs|=n),Ce(e,t)}function jf(e,t){t===0&&(e.mode&1?(t=Jr,Jr<<=1,!(Jr&130023424)&&(Jr=4194304)):t=1);var n=xe();e=ht(e,t),e!==null&&(Ur(e,t,n),Ce(e,n))}function ym(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),jf(e,n)}function wm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),jf(e,n)}var Af;Af=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||je.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,am(e,t,n);Se=!!(e.flags&131072)}else Se=!1,$&&t.flags&1048576&&Ed(t,Ji,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;zi(e,t),e=t.pendingProps;var i=Tn(t,ge.current);En(t,n),i=is(null,t,r,e,i,n);var o=os();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ae(r)?(o=!0,Zi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ja(t),i.updater=Co,t.stateNode=i,i._reactInternals=t,ia(t,r,e,n),t=aa(null,t,r,!0,o,n)):(t.tag=0,$&&o&&Qa(t),ve(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(zi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Sm(r),e=We(r,e),i){case 0:t=la(null,t,r,e,n);break e;case 1:t=Su(null,t,r,e,n);break e;case 11:t=wu(null,t,r,e,n);break e;case 14:t=ku(null,t,r,We(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),la(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),Su(e,t,r,i,n);case 3:e:{if(af(t),e===null)throw Error(S(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Td(e,t),no(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=On(Error(S(423)),t),t=ju(e,t,r,n,i);break e}else if(r!==i){i=On(Error(S(424)),t),t=ju(e,t,r,n,i);break e}else for(Pe=Pt(t.stateNode.containerInfo.firstChild),Te=t,$=!0,$e=null,n=Od(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ln(),r===i){t=mt(e,t,n);break e}ve(e,t,r,n)}t=t.child}return t;case 5:return Md(t),e===null&&ta(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Xl(r,i)?l=null:o!==null&&Xl(r,o)&&(t.flags|=32),lf(e,t),ve(e,t,l,n),t.child;case 6:return e===null&&ta(t),null;case 13:return sf(e,t,n);case 4:return es(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Rn(t,null,r,n):ve(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),wu(e,t,r,i,n);case 7:return ve(e,t,t.pendingProps,n),t.child;case 8:return ve(e,t,t.pendingProps.children,n),t.child;case 12:return ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,U(eo,r._currentValue),r._currentValue=l,o!==null)if(Ke(o.value,l)){if(o.children===i.children&&!je.current){t=mt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=dt(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),na(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(S(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),na(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ve(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,En(t,n),i=be(i),r=r(i),t.flags|=1,ve(e,t,r,n),t.child;case 14:return r=t.type,i=We(r,t.pendingProps),i=We(r.type,i),ku(e,t,r,i,n);case 15:return rf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),zi(e,t),t.tag=1,Ae(r)?(e=!0,Zi(t)):e=!1,En(t,n),Rd(t,r,i),ia(t,r,i,n),aa(null,t,r,!0,e,n);case 19:return uf(e,t,n);case 22:return of(e,t,n)}throw Error(S(156,t.tag))};function Cf(e,t){return Xc(e,t)}function km(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,t,n,r){return new km(e,t,n,r)}function ms(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sm(e){if(typeof e=="function")return ms(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Oa)return 11;if(e===Ma)return 14}return 2}function zt(e,t){var n=e.alternate;return n===null?(n=De(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ii(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")ms(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case dn:return Xt(n.children,i,o,t);case za:l=8,i|=8;break;case Nl:return e=De(12,n,t,i|2),e.elementType=Nl,e.lanes=o,e;case Pl:return e=De(13,n,t,i),e.elementType=Pl,e.lanes=o,e;case Tl:return e=De(19,n,t,i),e.elementType=Tl,e.lanes=o,e;case zc:return Po(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Lc:l=10;break e;case Rc:l=9;break e;case Oa:l=11;break e;case Ma:l=14;break e;case yt:l=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=De(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Xt(e,t,n,r){return e=De(7,e,r,t),e.lanes=n,e}function Po(e,t,n,r){return e=De(22,e,r,t),e.elementType=zc,e.lanes=n,e.stateNode={isHidden:!1},e}function hl(e,t,n){return e=De(6,e,null,t),e.lanes=n,e}function ml(e,t,n){return t=De(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function jm(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Go(0),this.expirationTimes=Go(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Go(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function gs(e,t,n,r,i,o,l,s,u){return e=new jm(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=De(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ja(o),e}function Am(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ef(e){if(!e)return It;e=e._reactInternals;e:{if(on(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ae(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ae(n))return Ad(e,n,t)}return t}function _f(e,t,n,r,i,o,l,s,u){return e=gs(n,r,!0,e,i,o,l,s,u),e.context=Ef(null),n=e.current,r=xe(),i=Rt(n),o=dt(r,i),o.callback=t??null,Tt(n,o,i),e.current.lanes=i,Ur(e,i,r),Ce(e,r),e}function To(e,t,n,r){var i=t.current,o=xe(),l=Rt(i);return n=Ef(n),t.context===null?t.context=n:t.pendingContext=n,t=dt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Tt(i,t,l),e!==null&&(Qe(e,i,l,o),Ti(e,i,l)),l}function co(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function zu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function vs(e,t){zu(e,t),(e=e.alternate)&&zu(e,t)}function Cm(){return null}var Nf=typeof reportError=="function"?reportError:function(e){console.error(e)};function xs(e){this._internalRoot=e}Lo.prototype.render=xs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));To(e,t,null,null)};Lo.prototype.unmount=xs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nn(function(){To(null,e,null,null)}),t[pt]=null}};function Lo(e){this._internalRoot=e}Lo.prototype.unstable_scheduleHydration=function(e){if(e){var t=rd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<kt.length&&t!==0&&t<kt[n].priority;n++);kt.splice(n,0,e),n===0&&od(e)}};function ys(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ro(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ou(){}function Em(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=co(l);o.call(c)}}var l=_f(t,r,e,0,null,!1,!1,"",Ou);return e._reactRootContainer=l,e[pt]=l.current,Er(e.nodeType===8?e.parentNode:e),nn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=co(u);s.call(c)}}var u=gs(e,0,!1,null,null,!1,!1,"",Ou);return e._reactRootContainer=u,e[pt]=u.current,Er(e.nodeType===8?e.parentNode:e),nn(function(){To(t,u,n,r)}),u}function zo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var u=co(l);s.call(u)}}To(t,l,e,i)}else l=Em(n,t,e,i,r);return co(l)}td=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=or(t.pendingLanes);n!==0&&(Fa(t,n|1),Ce(t,Z()),!(I&6)&&(Mn=Z()+500,bt()))}break;case 13:nn(function(){var r=ht(e,1);if(r!==null){var i=xe();Qe(r,e,1,i)}}),vs(e,1)}};ba=function(e){if(e.tag===13){var t=ht(e,134217728);if(t!==null){var n=xe();Qe(t,e,134217728,n)}vs(e,134217728)}};nd=function(e){if(e.tag===13){var t=Rt(e),n=ht(e,t);if(n!==null){var r=xe();Qe(n,e,t,r)}vs(e,t)}};rd=function(){return b};id=function(e,t){var n=b;try{return b=e,t()}finally{b=n}};Bl=function(e,t,n){switch(t){case"input":if(zl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=jo(r);if(!i)throw Error(S(90));Mc(r),zl(r,i)}}}break;case"textarea":Dc(e,n);break;case"select":t=n.value,t!=null&&Sn(e,!!n.multiple,t,!1)}};$c=fs;Vc=nn;var _m={usingClientEntryPoint:!1,Events:[Hr,mn,jo,Wc,Hc,fs]},Jn={findFiberByHostInstance:Qt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Nm={bundleType:Jn.bundleType,version:Jn.version,rendererPackageName:Jn.rendererPackageName,rendererConfig:Jn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Yc(e),e===null?null:e.stateNode},findFiberByHostInstance:Jn.findFiberByHostInstance||Cm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ci=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ci.isDisabled&&ci.supportsFiber)try{yo=ci.inject(Nm),Je=ci}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_m;ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ys(t))throw Error(S(200));return Am(e,t,null,n)};ze.createRoot=function(e,t){if(!ys(e))throw Error(S(299));var n=!1,r="",i=Nf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=gs(e,1,!1,null,null,n,!1,r,i),e[pt]=t.current,Er(e.nodeType===8?e.parentNode:e),new xs(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Yc(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return nn(e)};ze.hydrate=function(e,t,n){if(!Ro(t))throw Error(S(200));return zo(null,e,t,!0,n)};ze.hydrateRoot=function(e,t,n){if(!ys(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Nf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=_f(t,null,e,1,n??null,i,!1,o,l),e[pt]=t.current,Er(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Lo(t)};ze.render=function(e,t,n){if(!Ro(t))throw Error(S(200));return zo(null,e,t,!1,n)};ze.unmountComponentAtNode=function(e){if(!Ro(e))throw Error(S(40));return e._reactRootContainer?(nn(function(){zo(null,null,e,!1,function(){e._reactRootContainer=null,e[pt]=null})}),!0):!1};ze.unstable_batchedUpdates=fs;ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ro(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return zo(e,t,n,!1,r)};ze.version="18.2.0-next-9e3b772b8-20220608";function Pf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pf)}catch(e){console.error(e)}}Pf(),Ec.exports=ze;var Pm=Ec.exports,Tf,Mu=Pm;Tf=Mu.createRoot,Mu.hydrateRoot;/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mr(){return Mr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Mr.apply(this,arguments)}var Ct;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ct||(Ct={}));const Iu="popstate";function Tm(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:s}=r.location;return ya("",{pathname:o,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:fo(i)}return Rm(t,n,null,e)}function G(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Lf(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Lm(){return Math.random().toString(36).substr(2,8)}function Du(e,t){return{usr:e.state,key:e.key,idx:t}}function ya(e,t,n,r){return n===void 0&&(n=null),Mr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Un(t):t,{state:n,key:t&&t.key||r||Lm()})}function fo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Un(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Rm(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,s=Ct.Pop,u=null,c=h();c==null&&(c=0,l.replaceState(Mr({},l.state,{idx:c}),""));function h(){return(l.state||{idx:null}).idx}function m(){s=Ct.Pop;let j=h(),f=j==null?null:j-c;c=j,u&&u({action:s,location:v.location,delta:f})}function g(j,f){s=Ct.Push;let d=ya(v.location,j,f);c=h()+1;let p=Du(d,c),x=v.createHref(d);try{l.pushState(p,"",x)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(x)}o&&u&&u({action:s,location:v.location,delta:1})}function w(j,f){s=Ct.Replace;let d=ya(v.location,j,f);c=h();let p=Du(d,c),x=v.createHref(d);l.replaceState(p,"",x),o&&u&&u({action:s,location:v.location,delta:0})}function y(j){let f=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof j=="string"?j:fo(j);return d=d.replace(/ $/,"%20"),G(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let v={get action(){return s},get location(){return e(i,l)},listen(j){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Iu,m),u=j,()=>{i.removeEventListener(Iu,m),u=null}},createHref(j){return t(i,j)},createURL:y,encodeLocation(j){let f=y(j);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:w,go(j){return l.go(j)}};return v}var Fu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Fu||(Fu={}));function zm(e,t,n){n="/";let r=typeof t=="string"?Un(t):t,i=In(r.pathname||"/",n);if(i==null)return null;let o=Rf(e);Om(o);let l=null;for(let s=0;l==null&&s<o.length;++s){let u=Vm(i);l=Hm(o[s],u)}return l}function Rf(e,t,n,r){t=[],n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,s)=>{let u={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};u.relativePath.startsWith("/")&&(G(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Ot([r,u.relativePath]),h=n.concat(u);o.children&&o.children.length>0&&(G(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Rf(o.children,t,h,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:Um(c,o.index),routesMeta:h})};return e.forEach((o,l)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,l);else for(let u of zf(o.path))i(o,l,u)}),t}function zf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=zf(r.join("/")),s=[];return s.push(...l.map(u=>u===""?o:[o,u].join("/"))),i&&s.push(...l),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function Om(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Wm(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Mm=/^:[\w-]+$/,Im=3,Dm=2,Fm=1,bm=10,Bm=-2,bu=e=>e==="*";function Um(e,t){let n=e.split("/"),r=n.length;return n.some(bu)&&(r+=Bm),t&&(r+=Dm),n.filter(i=>!bu(i)).reduce((i,o)=>i+(Mm.test(o)?Im:o===""?Fm:bm),r)}function Wm(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Hm(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let s=n[l],u=l===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",h=wa({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},c);if(!h)return null;Object.assign(r,h.params);let m=s.route;o.push({params:r,pathname:Ot([i,h.pathname]),pathnameBase:Gm(Ot([i,h.pathnameBase])),route:m}),h.pathnameBase!=="/"&&(i=Ot([i,h.pathnameBase]))}return o}function wa(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=$m(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,h,m)=>{let{paramName:g,isOptional:w}=h;if(g==="*"){let v=s[m]||"";l=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const y=s[m];return w&&!y?c[g]=void 0:c[g]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:l,pattern:e}}function $m(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Lf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,u)=>(r.push({paramName:s,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Vm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Lf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function In(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Qm(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Un(e):e;return{pathname:n?n.startsWith("/")?n:Km(n,t):t,search:Xm(r),hash:Zm(i)}}function Km(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function gl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ym(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ws(e,t){let n=Ym(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ks(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Un(e):(i=Mr({},e),G(!i.pathname||!i.pathname.includes("?"),gl("?","pathname","search",i)),G(!i.pathname||!i.pathname.includes("#"),gl("#","pathname","hash",i)),G(!i.search||!i.search.includes("#"),gl("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,s;if(l==null)s=n;else{let m=t.length-1;if(!r&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}s=m>=0?t[m]:"/"}let u=Qm(i,s),c=l&&l!=="/"&&l.endsWith("/"),h=(o||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const Ot=e=>e.join("/").replace(/\/\/+/g,"/"),Gm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Xm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Zm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Of=["post","put","patch","delete"];new Set(Of);const qm=["get",...Of];new Set(qm);/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ir(){return Ir=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ir.apply(this,arguments)}const Oo=E.createContext(null),Jm=E.createContext(null),vt=E.createContext(null),Mo=E.createContext(null),Bt=E.createContext({outlet:null,matches:[],isDataRoute:!1});function eg(e,t){let{relative:n}=t===void 0?{}:t;Wn()||G(!1);let{basename:r,navigator:i}=E.useContext(vt),{hash:o,pathname:l,search:s}=Io(e,{relative:n}),u=l;return r!=="/"&&(u=l==="/"?r:Ot([r,l])),i.createHref({pathname:u,search:s,hash:o})}function Wn(){return E.useContext(Mo)!=null}function nt(){return Wn()||G(!1),E.useContext(Mo).location}function Mf(e){E.useContext(vt).static||E.useLayoutEffect(e)}function If(){let{isDataRoute:e}=E.useContext(Bt);return e?dg():tg()}function tg(){Wn()||G(!1);let e=E.useContext(Oo),{basename:t,future:n,navigator:r}=E.useContext(vt),{matches:i}=E.useContext(Bt),{pathname:o}=nt(),l=JSON.stringify(ws(i,n.v7_relativeSplatPath)),s=E.useRef(!1);return Mf(()=>{s.current=!0}),E.useCallback(function(c,h){if(h===void 0&&(h={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let m=ks(c,JSON.parse(l),o,h.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Ot([t,m.pathname])),(h.replace?r.replace:r.push)(m,h.state,h)},[t,r,l,o,e])}const ng=E.createContext(null);function rg(e){let t=E.useContext(Bt).outlet;return t&&E.createElement(ng.Provider,{value:e},t)}function Io(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=E.useContext(vt),{matches:i}=E.useContext(Bt),{pathname:o}=nt(),l=JSON.stringify(ws(i,r.v7_relativeSplatPath));return E.useMemo(()=>ks(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function ig(e,t){return og(e,t)}function og(e,t,n,r){Wn()||G(!1);let{navigator:i}=E.useContext(vt),{matches:o}=E.useContext(Bt),l=o[o.length-1],s=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let c=nt(),h;if(t){var m;let j=typeof t=="string"?Un(t):t;u==="/"||(m=j.pathname)!=null&&m.startsWith(u)||G(!1),h=j}else h=c;let g=h.pathname||"/",w=g;if(u!=="/"){let j=u.replace(/^\//,"").split("/");w="/"+g.replace(/^\//,"").split("/").slice(j.length).join("/")}let y=zm(e,{pathname:w}),v=ag(y&&y.map(j=>Object.assign({},j,{params:Object.assign({},s,j.params),pathname:Ot([u,i.encodeLocation?i.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?u:Ot([u,i.encodeLocation?i.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),o,n);return t&&v?E.createElement(Mo.Provider,{value:{location:Ir({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Ct.Pop}},v):v}function lg(e){let{routeContext:t,match:n,children:r}=e,i=E.useContext(Oo);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(Bt.Provider,{value:t},r)}function ag(e,t,n,r){var i;if(t===void 0&&(t=[]),n=null,e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let l=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let u=l.findIndex(c=>c.route.id&&(s==null?void 0:s[c.route.id])!==void 0);u>=0||G(!1),l=l.slice(0,Math.min(l.length,u+1))}return l.reduceRight((u,c,h)=>{let m=t.concat(l.slice(0,h+1));return(()=>{let w;return c.route.Component?w=E.createElement(c.route.Component,null):c.route.element?w=c.route.element:w=u,E.createElement(lg,{match:c,routeContext:{outlet:u,matches:m,isDataRoute:n!=null},children:w})})()},null)}var Df=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Df||{}),Ff=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ff||{});function sg(e){let t=E.useContext(Oo);return t||G(!1),t}function ug(e){let t=E.useContext(Bt);return t||G(!1),t}function cg(e){let t=ug(),n=t.matches[t.matches.length-1];return n.route.id||G(!1),n.route.id}function dg(){let{router:e}=sg(Df.UseNavigateStable),t=cg(Ff.UseNavigateStable),n=E.useRef(!1);return Mf(()=>{n.current=!0}),E.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ir({fromRouteId:t},o)))},[e,t])}function fg(e){let{to:t,replace:n,state:r,relative:i}=e;Wn()||G(!1);let{future:o,static:l}=E.useContext(vt),{matches:s}=E.useContext(Bt),{pathname:u}=nt(),c=If(),h=ks(t,ws(s,o.v7_relativeSplatPath),u,i==="path"),m=JSON.stringify(h);return E.useEffect(()=>c(JSON.parse(m),{replace:n,state:r,relative:i}),[c,m,i,n,r]),null}function pg(e){return rg(e.context)}function Di(e){G(!1)}function hg(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Ct.Pop,navigator:o,static:l=!1,future:s}=e;Wn()&&G(!1);let u=t.replace(/^\/*/,"/"),c=E.useMemo(()=>({basename:u,navigator:o,static:l,future:Ir({v7_relativeSplatPath:!1},s)}),[u,s,o,l]);typeof r=="string"&&(r=Un(r));let{pathname:h="/",search:m="",hash:g="",state:w=null,key:y="default"}=r,v=E.useMemo(()=>{let j=In(h,u);return j==null?null:{location:{pathname:j,search:m,hash:g,state:w,key:y},navigationType:i}},[u,h,m,g,w,y,i]);return v==null?null:E.createElement(vt.Provider,{value:c},E.createElement(Mo.Provider,{children:n,value:v}))}function mg(e){let{children:t,location:n}=e;return ig(ka(t),n)}new Promise(()=>{});function ka(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(r,i)=>{if(!E.isValidElement(r))return;let o=[...t,i];if(r.type===E.Fragment){n.push.apply(n,ka(r.props.children,o));return}r.type!==Di&&G(!1),!r.props.index||!r.props.children||G(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=ka(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function po(){return po=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},po.apply(this,arguments)}function bf(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function gg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function vg(e,t){return e.button===0&&(!t||t==="_self")&&!gg(e)}const xg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],yg=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],wg="6";try{window.__reactRouterVersion=wg}catch{}const kg=E.createContext({isTransitioning:!1}),Sg="startTransition",Bu=El[Sg];function jg(e){let{basename:t,children:n,future:r,window:i}=e,o=E.useRef();o.current==null&&(o.current=Tm({window:i,v5Compat:!0}));let l=o.current,[s,u]=E.useState({action:l.action,location:l.location}),{v7_startTransition:c}=r||{},h=E.useCallback(m=>{c&&Bu?Bu(()=>u(m)):u(m)},[u,c]);return E.useLayoutEffect(()=>l.listen(h),[l,h]),E.createElement(hg,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l,future:r})}const Ag=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Cg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Eg=E.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:s,target:u,to:c,preventScrollReset:h,unstable_viewTransition:m}=t,g=bf(t,xg),{basename:w}=E.useContext(vt),y,v=!1;if(typeof c=="string"&&Cg.test(c)&&(y=c,Ag))try{let p=new URL(window.location.href),x=c.startsWith("//")?new URL(p.protocol+c):new URL(c),C=In(x.pathname,w);x.origin===p.origin&&C!=null?c=C+x.search+x.hash:v=!0}catch{}let j=eg(c,{relative:i}),f=Ng(c,{replace:l,state:s,target:u,preventScrollReset:h,relative:i,unstable_viewTransition:m});function d(p){r&&r(p),p.defaultPrevented||f(p)}return E.createElement("a",po({},g,{href:y||j,onClick:v||o?r:d,ref:n,target:u}))}),Do=E.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:l=!1,style:s,to:u,unstable_viewTransition:c,children:h}=t,m=bf(t,yg),g=Io(u,{relative:m.relative}),w=nt(),y=E.useContext(Jm),{navigator:v,basename:j}=E.useContext(vt),f=y!=null&&Pg(g)&&c===!0,d=v.encodeLocation?v.encodeLocation(g).pathname:g.pathname,p=w.pathname,x=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(p=p.toLowerCase(),x=x?x.toLowerCase():null,d=d.toLowerCase()),x&&j&&(x=In(x,j)||x);const C=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let _=p===d||!l&&p.startsWith(d)&&p.charAt(C)==="/",A=x!=null&&(x===d||!l&&x.startsWith(d)&&x.charAt(d.length)==="/"),T={isActive:_,isPending:A,isTransitioning:f},B=_?r:void 0,L;typeof o=="function"?L=o(T):L=[o,_?"active":null,A?"pending":null,f?"transitioning":null].filter(Boolean).join(" ");let _e=typeof s=="function"?s(T):s;return E.createElement(Eg,po({},m,{"aria-current":B,className:L,ref:n,style:_e,to:u,unstable_viewTransition:c}),typeof h=="function"?h(T):h)});var Sa;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Sa||(Sa={}));var Uu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Uu||(Uu={}));function _g(e){let t=E.useContext(Oo);return t||G(!1),t}function Ng(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:s}=t===void 0?{}:t,u=If(),c=nt(),h=Io(e,{relative:l});return E.useCallback(m=>{if(vg(m,n)){m.preventDefault();let g=r!==void 0?r:fo(c)===fo(h);u(e,{replace:g,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:s})}},[c,u,h,r,i,n,e,o,l,s])}function Pg(e,t){t={};let n=E.useContext(kg);n==null&&G(!1);let{basename:r}=_g(Sa.useViewTransitionState),i=Io(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=In(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=In(n.nextLocation.pathname,r)||n.nextLocation.pathname;return wa(i.pathname,l)!=null||wa(i.pathname,o)!=null}const Wu={HOME:"/",PORTFOLIO:"/portfolio"};function ja(){return ja=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ja.apply(this,arguments)}function Bf(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Tg=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Lg=Bf(function(e){return Tg.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function Rg(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function zg(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Og=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(zg(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=Rg(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),he="-ms-",ho="-moz-",D="-webkit-",Uf="comm",Ss="rule",js="decl",Mg="@import",Wf="@keyframes",Ig="@layer",Dg=Math.abs,Fo=String.fromCharCode,Fg=Object.assign;function bg(e,t){return le(e,0)^45?(((t<<2^le(e,0))<<2^le(e,1))<<2^le(e,2))<<2^le(e,3):0}function Hf(e){return e.trim()}function Bg(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,n){return e.replace(t,n)}function Aa(e,t){return e.indexOf(t)}function le(e,t){return e.charCodeAt(t)|0}function Dr(e,t,n){return e.slice(t,n)}function Xe(e){return e.length}function As(e){return e.length}function di(e,t){return t.push(e),e}function Ug(e,t){return e.map(t).join("")}var bo=1,Dn=1,$f=0,Ee=0,q=0,Hn="";function Bo(e,t,n,r,i,o,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:bo,column:Dn,length:l,return:""}}function er(e,t){return Fg(Bo("",null,null,"",null,null,0),e,{length:-e.length},t)}function Wg(){return q}function Hg(){return q=Ee>0?le(Hn,--Ee):0,Dn--,q===10&&(Dn=1,bo--),q}function Le(){return q=Ee<$f?le(Hn,Ee++):0,Dn++,q===10&&(Dn=1,bo++),q}function tt(){return le(Hn,Ee)}function Fi(){return Ee}function Vr(e,t){return Dr(Hn,e,t)}function Fr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Vf(e){return bo=Dn=1,$f=Xe(Hn=e),Ee=0,[]}function Qf(e){return Hn="",e}function bi(e){return Hf(Vr(Ee-1,Ca(e===91?e+2:e===40?e+1:e)))}function $g(e){for(;(q=tt())&&q<33;)Le();return Fr(e)>2||Fr(q)>3?"":" "}function Vg(e,t){for(;--t&&Le()&&!(q<48||q>102||q>57&&q<65||q>70&&q<97););return Vr(e,Fi()+(t<6&&tt()==32&&Le()==32))}function Ca(e){for(;Le();)switch(q){case e:return Ee;case 34:case 39:e!==34&&e!==39&&Ca(q);break;case 40:e===41&&Ca(e);break;case 92:Le();break}return Ee}function Qg(e,t){for(;Le()&&e+q!==57;)if(e+q===84&&tt()===47)break;return"/*"+Vr(t,Ee-1)+"*"+Fo(e===47?e:Le())}function Kg(e){for(;!Fr(tt());)Le();return Vr(e,Ee)}function Yg(e){return Qf(Bi("",null,null,null,[""],e=Vf(e),0,[0],e))}function Bi(e,t,n,r,i,o,l,s,u){for(var c=0,h=0,m=l,g=0,w=0,y=0,v=1,j=1,f=1,d=0,p="",x=i,C=o,_=r,A=p;j;)switch(y=d,d=Le()){case 40:if(y!=108&&le(A,m-1)==58){Aa(A+=F(bi(d),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:A+=bi(d);break;case 9:case 10:case 13:case 32:A+=$g(y);break;case 92:A+=Vg(Fi()-1,7);continue;case 47:switch(tt()){case 42:case 47:di(Gg(Qg(Le(),Fi()),t,n),u);break;default:A+="/"}break;case 123*v:s[c++]=Xe(A)*f;case 125*v:case 59:case 0:switch(d){case 0:case 125:j=0;case 59+h:f==-1&&(A=F(A,/\f/g,"")),w>0&&Xe(A)-m&&di(w>32?$u(A+";",r,n,m-1):$u(F(A," ","")+";",r,n,m-2),u);break;case 59:A+=";";default:if(di(_=Hu(A,t,n,c,h,i,s,p,x=[],C=[],m),o),d===123)if(h===0)Bi(A,t,_,_,x,o,m,s,C);else switch(g===99&&le(A,3)===110?100:g){case 100:case 108:case 109:case 115:Bi(e,_,_,r&&di(Hu(e,_,_,0,0,i,s,p,i,x=[],m),C),i,C,m,s,r?x:C);break;default:Bi(A,_,_,_,[""],C,0,s,C)}}c=h=w=0,v=f=1,p=A="",m=l;break;case 58:m=1+Xe(A),w=y;default:if(v<1){if(d==123)--v;else if(d==125&&v++==0&&Hg()==125)continue}switch(A+=Fo(d),d*v){case 38:f=h>0?1:(A+="\f",-1);break;case 44:s[c++]=(Xe(A)-1)*f,f=1;break;case 64:tt()===45&&(A+=bi(Le())),g=tt(),h=m=Xe(p=A+=Kg(Fi())),d++;break;case 45:y===45&&Xe(A)==2&&(v=0)}}return o}function Hu(e,t,n,r,i,o,l,s,u,c,h){for(var m=i-1,g=i===0?o:[""],w=As(g),y=0,v=0,j=0;y<r;++y)for(var f=0,d=Dr(e,m+1,m=Dg(v=l[y])),p=e;f<w;++f)(p=Hf(v>0?g[f]+" "+d:F(d,/&\f/g,g[f])))&&(u[j++]=p);return Bo(e,t,n,i===0?Ss:s,u,c,h)}function Gg(e,t,n){return Bo(e,t,n,Uf,Fo(Wg()),Dr(e,2,-2),0)}function $u(e,t,n,r){return Bo(e,t,n,js,Dr(e,0,r),Dr(e,r+1,-1),r)}function Nn(e,t){for(var n="",r=As(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function Xg(e,t,n,r){switch(e.type){case Ig:if(e.children.length)break;case Mg:case js:return e.return=e.return||e.value;case Uf:return"";case Wf:return e.return=e.value+"{"+Nn(e.children,r)+"}";case Ss:e.value=e.props.join(",")}return Xe(n=Nn(e.children,r))?e.return=e.value+"{"+n+"}":""}function Zg(e){var t=As(e);return function(n,r,i,o){for(var l="",s=0;s<t;s++)l+=e[s](n,r,i,o)||"";return l}}function qg(e){return function(t){t.root||(t=t.return)&&e(t)}}var Jg=function(t,n,r){for(var i=0,o=0;i=o,o=tt(),i===38&&o===12&&(n[r]=1),!Fr(o);)Le();return Vr(t,Ee)},e0=function(t,n){var r=-1,i=44;do switch(Fr(i)){case 0:i===38&&tt()===12&&(n[r]=1),t[r]+=Jg(Ee-1,n,r);break;case 2:t[r]+=bi(i);break;case 4:if(i===44){t[++r]=tt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Fo(i)}while(i=Le());return t},t0=function(t,n){return Qf(e0(Vf(t),n))},Vu=new WeakMap,n0=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Vu.get(r))&&!i){Vu.set(t,!0);for(var o=[],l=t0(n,o),s=r.props,u=0,c=0;u<l.length;u++)for(var h=0;h<s.length;h++,c++)t.props[c]=o[u]?l[u].replace(/&\f/g,s[h]):s[h]+" "+l[u]}}},r0=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Kf(e,t){switch(bg(e,t)){case 5103:return D+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return D+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return D+e+ho+e+he+e+e;case 6828:case 4268:return D+e+he+e+e;case 6165:return D+e+he+"flex-"+e+e;case 5187:return D+e+F(e,/(\w+).+(:[^]+)/,D+"box-$1$2"+he+"flex-$1$2")+e;case 5443:return D+e+he+"flex-item-"+F(e,/flex-|-self/,"")+e;case 4675:return D+e+he+"flex-line-pack"+F(e,/align-content|flex-|-self/,"")+e;case 5548:return D+e+he+F(e,"shrink","negative")+e;case 5292:return D+e+he+F(e,"basis","preferred-size")+e;case 6060:return D+"box-"+F(e,"-grow","")+D+e+he+F(e,"grow","positive")+e;case 4554:return D+F(e,/([^-])(transform)/g,"$1"+D+"$2")+e;case 6187:return F(F(F(e,/(zoom-|grab)/,D+"$1"),/(image-set)/,D+"$1"),e,"")+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,D+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,D+"box-pack:$3"+he+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+D+e+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,D+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xe(e)-1-t>6)switch(le(e,t+1)){case 109:if(le(e,t+4)!==45)break;case 102:return F(e,/(.+:)(.+)-([^]+)/,"$1"+D+"$2-$3$1"+ho+(le(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Aa(e,"stretch")?Kf(F(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(le(e,t+1)!==115)break;case 6444:switch(le(e,Xe(e)-3-(~Aa(e,"!important")&&10))){case 107:return F(e,":",":"+D)+e;case 101:return F(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+D+(le(e,14)===45?"inline-":"")+"box$3$1"+D+"$2$3$1"+he+"$2box$3")+e}break;case 5936:switch(le(e,t+11)){case 114:return D+e+he+F(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return D+e+he+F(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return D+e+he+F(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return D+e+he+e+e}return e}var i0=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case js:t.return=Kf(t.value,t.length);break;case Wf:return Nn([er(t,{value:F(t.value,"@","@"+D)})],i);case Ss:if(t.length)return Ug(t.props,function(o){switch(Bg(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Nn([er(t,{props:[F(o,/:(read-\w+)/,":"+ho+"$1")]})],i);case"::placeholder":return Nn([er(t,{props:[F(o,/:(plac\w+)/,":"+D+"input-$1")]}),er(t,{props:[F(o,/:(plac\w+)/,":"+ho+"$1")]}),er(t,{props:[F(o,/:(plac\w+)/,he+"input-$1")]})],i)}return""})}},o0=[i0],l0=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var j=v.getAttribute("data-emotion");j.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=t.stylisPlugins||o0,o={},l,s=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var j=v.getAttribute("data-emotion").split(" "),f=1;f<j.length;f++)o[j[f]]=!0;s.push(v)});var u,c=[n0,r0];{var h,m=[Xg,qg(function(v){h.insert(v)})],g=Zg(c.concat(i,m)),w=function(j){return Nn(Yg(j),g)};u=function(j,f,d,p){h=d,w(j?j+"{"+f.styles+"}":f.styles),p&&(y.inserted[f.name]=!0)}}var y={key:n,sheet:new Og({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:u};return y.sheet.hydrate(s),y},a0=!0;function s0(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Yf=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||a0===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},u0=function(t,n,r){Yf(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function c0(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var d0={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},f0=/[A-Z]|^ms/g,p0=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Gf=function(t){return t.charCodeAt(1)===45},Qu=function(t){return t!=null&&typeof t!="boolean"},vl=Bf(function(e){return Gf(e)?e:e.replace(f0,"-$&").toLowerCase()}),Ku=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(p0,function(r,i,o){return Ze={name:i,styles:o,next:Ze},i})}return d0[t]!==1&&!Gf(t)&&typeof n=="number"&&n!==0?n+"px":n};function br(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Ze={name:n.name,styles:n.styles,next:Ze},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Ze={name:r.name,styles:r.styles,next:Ze},r=r.next;var i=n.styles+";";return i}return h0(e,t,n)}case"function":{if(e!==void 0){var o=Ze,l=n(e);return Ze=o,br(e,t,l)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function h0(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=br(e,t,n[i])+";";else for(var o in n){var l=n[o];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=o+"{"+t[l]+"}":Qu(l)&&(r+=vl(o)+":"+Ku(o,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var s=0;s<l.length;s++)Qu(l[s])&&(r+=vl(o)+":"+Ku(o,l[s])+";");else{var u=br(e,t,l);switch(o){case"animation":case"animationName":{r+=vl(o)+":"+u+";";break}default:r+=o+"{"+u+"}"}}}return r}var Yu=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Ze,m0=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";Ze=void 0;var l=t[0];l==null||l.raw===void 0?(i=!1,o+=br(r,n,l)):o+=l[0];for(var s=1;s<t.length;s++)o+=br(r,n,t[s]),i&&(o+=l[s]);Yu.lastIndex=0;for(var u="",c;(c=Yu.exec(o))!==null;)u+="-"+c[1];var h=c0(o)+u;return{name:h,styles:o,next:Ze}},g0=function(t){return t()},v0=El.useInsertionEffect?El.useInsertionEffect:!1,x0=v0||g0,Xf=E.createContext(typeof HTMLElement<"u"?l0({key:"css"}):null);Xf.Provider;var y0=function(t){return E.forwardRef(function(n,r){var i=E.useContext(Xf);return t(n,i,r)})},w0=E.createContext({}),k0=Lg,S0=function(t){return t!=="theme"},Gu=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?k0:S0},Xu=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(l){return t.__emotion_forwardProp(l)&&o(l)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},j0=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Yf(n,r,i),x0(function(){return u0(n,r,i)}),null},A0=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,l;n!==void 0&&(o=n.label,l=n.target);var s=Xu(t,n,r),u=s||Gu(i),c=!u("as");return function(){var h=arguments,m=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&m.push("label:"+o+";"),h[0]==null||h[0].raw===void 0)m.push.apply(m,h);else{m.push(h[0][0]);for(var g=h.length,w=1;w<g;w++)m.push(h[w],h[0][w])}var y=y0(function(v,j,f){var d=c&&v.as||i,p="",x=[],C=v;if(v.theme==null){C={};for(var _ in v)C[_]=v[_];C.theme=E.useContext(w0)}typeof v.className=="string"?p=s0(j.registered,x,v.className):v.className!=null&&(p=v.className+" ");var A=m0(m.concat(x),j.registered,C);p+=j.key+"-"+A.name,l!==void 0&&(p+=" "+l);var T=c&&s===void 0?Gu(d):u,B={};for(var L in v)c&&L==="as"||T(L)&&(B[L]=v[L]);return B.className=p,B.ref=f,E.createElement(E.Fragment,null,E.createElement(j0,{cache:j,serialized:A,isStringTag:typeof d=="string"}),E.createElement(d,B))});return y.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",y.defaultProps=t.defaultProps,y.__emotion_real=y,y.__emotion_base=i,y.__emotion_styles=m,y.__emotion_forwardProp=s,Object.defineProperty(y,"toString",{value:function(){return"."+l}}),y.withComponent=function(v,j){return e(v,ja({},n,j,{shouldForwardProp:Xu(y,j,!0)})).apply(void 0,m)},y}},C0=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],k=A0.bind();C0.forEach(function(e){k[e]=k(e)});const E0=k.header`
    background-color: var(--body-background-color);
    border-bottom: 1px solid;
    color: #ececec;
    padding: 0;
`,_0=k.div`
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
`,N0=k(Do)`
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
`,P0=k.span`
    color: var(--beckground-color);
`,T0=k.div`
    display: flex;
    align-items: center;
    padding: 0 15px;
    @media(max-width: 767px) {
        margin-top: 16px;
        justify-content: space-between;
        margin-bottom: 16px;
    }

`;function L0(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}else return Array.from(e)}var Cs=!1;if(typeof window<"u"){var Zu={get passive(){Cs=!0}};window.addEventListener("testPassive",null,Zu),window.removeEventListener("testPassive",null,Zu)}var mo=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),Zt=[],go=!1,Zf=-1,gr=void 0,Vt=void 0,vr=void 0,qf=function(t){return Zt.some(function(n){return!!(n.options.allowTouchMove&&n.options.allowTouchMove(t))})},vo=function(t){var n=t||window.event;return qf(n.target)||n.touches.length>1?!0:(n.preventDefault&&n.preventDefault(),!1)},R0=function(t){if(vr===void 0){var n=!!t,r=window.innerWidth-document.documentElement.clientWidth;if(n&&r>0){var i=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);vr=document.body.style.paddingRight,document.body.style.paddingRight=i+r+"px"}}gr===void 0&&(gr=document.body.style.overflow,document.body.style.overflow="hidden")},z0=function(){vr!==void 0&&(document.body.style.paddingRight=vr,vr=void 0),gr!==void 0&&(document.body.style.overflow=gr,gr=void 0)},O0=function(){return window.requestAnimationFrame(function(){if(Vt===void 0){Vt={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var t=window,n=t.scrollY,r=t.scrollX,i=t.innerHeight;document.body.style.position="fixed",document.body.style.top=-n,document.body.style.left=-r,setTimeout(function(){return window.requestAnimationFrame(function(){var o=i-window.innerHeight;o&&n>=i&&(document.body.style.top=-(n+o))})},300)}})},M0=function(){if(Vt!==void 0){var t=-parseInt(document.body.style.top,10),n=-parseInt(document.body.style.left,10);document.body.style.position=Vt.position,document.body.style.top=Vt.top,document.body.style.left=Vt.left,window.scrollTo(n,t),Vt=void 0}},I0=function(t){return t?t.scrollHeight-t.scrollTop<=t.clientHeight:!1},D0=function(t,n){var r=t.targetTouches[0].clientY-Zf;return qf(t.target)?!1:n&&n.scrollTop===0&&r>0||I0(n)&&r<0?vo(t):(t.stopPropagation(),!0)},F0=function(t,n){if(!t){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!Zt.some(function(i){return i.targetElement===t})){var r={targetElement:t,options:{}};Zt=[].concat(L0(Zt),[r]),mo?O0():R0(n),mo&&(t.ontouchstart=function(i){i.targetTouches.length===1&&(Zf=i.targetTouches[0].clientY)},t.ontouchmove=function(i){i.targetTouches.length===1&&D0(i,t)},go||(document.addEventListener("touchmove",vo,Cs?{passive:!1}:void 0),go=!0))}},qu=function(t){if(!t){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}Zt=Zt.filter(function(n){return n.targetElement!==t}),mo&&(t.ontouchstart=null,t.ontouchmove=null,go&&Zt.length===0&&(document.removeEventListener("touchmove",vo,Cs?{passive:!1}:void 0),go=!1)),mo?M0():z0()};const z="/goit-markup-react/assets/icons-WWKJvoXN.svg",Jf=()=>{const[e,t]=E.useState(!1),n=()=>{t(!e)};return E.useEffect(()=>{const r=document.querySelector(".js-open-menu");r.setAttribute("aria-expanded",e);const i=document.querySelector(".js-menu-container");e?(i.classList.add("is-open"),F0(document.body)):(i.classList.remove("is-open"),qu(document.body));const o=window.matchMedia("(min-width: 768px)"),l=s=>{s.matches&&(i.classList.remove("is-open"),r.setAttribute("aria-expanded",!1),qu(document.body),t(!1))};return o.addEventListener("change",l),()=>{o.removeEventListener("change",l)}},[e]),a.jsxs(a.Fragment,{children:[a.jsx("button",{type:"button",className:"main-nav__button js-open-menu","aria-expanded":"false",onClick:n,children:a.jsx("svg",{width:"24",height:"16","aria-label":"перемикач мобільного меню",children:a.jsx("use",{className:"main-nav__icone--menu",href:z+"#icon-menu"})})}),a.jsx("div",{className:"main-nav__mobile-menu js-menu-container",children:a.jsxs("div",{className:"mobile-menu__conteiner",children:[a.jsxs("div",{className:"mobile-site-nav__conteiner",children:[a.jsx("button",{className:"mobile-menu__close-button js-close-menu",onClick:n,children:a.jsx("svg",{className:"mobile-menu__close-icone",children:a.jsx("use",{className:"main-nav__icone--menu",href:z+"#icon-close-menu"})})}),a.jsxs("ul",{className:"mobile-site-nav",children:[a.jsx("li",{className:"mobile-site-nav__items",children:a.jsx("a",{href:"./index.html",className:"mobile-site-nav__link ",children:"Студія"})}),a.jsx("li",{className:"mobile-site-nav__items",children:a.jsx("a",{href:"./portfolio.html",className:"mobile-site-nav__link mobile-site-nav__link--current",children:"Портфоліо"})}),a.jsx("li",{className:"mobile-site-nav__items",children:a.jsx("a",{href:"",className:"mobile-site-nav__link",children:"Контакти"})})]})]}),a.jsxs("div",{className:"mobile-auth-nav__conteiner",children:[a.jsxs("ul",{className:"mobile-auth-nav",children:[a.jsx("li",{className:"mobile-auth-nav__item",children:a.jsx("a",{className:"mobile-auth-nav__link mobile-auth-nav__link--phone",href:"tel:+380961111111",children:"+38 096 111 11 11"})}),a.jsx("li",{className:"mobile-auth-nav__items",children:a.jsx("a",{className:"mobile-auth-nav__link",href:"mailto:info@devstudio.com",children:"info@devstudio.com"})})]}),a.jsxs("ul",{className:"mobile-soshmed",children:[a.jsx("li",{className:"mobile-soshmed__item",children:a.jsx("a",{className:"mobile-soshmed__link",href:"#",children:"Instagram"})}),a.jsx("li",{className:"mobile-soshmed__item",children:a.jsx("a",{className:"mobile-soshmed__link",href:"#",children:"Twitter"})}),a.jsx("li",{className:"mobile-soshmed__item",children:a.jsx("a",{className:"mobile-soshmed__link",href:"#",children:"Facebook"})}),a.jsx("li",{className:"mobile-soshmed__item",children:a.jsx("a",{className:"mobile-soshmed__link",href:"#",children:"LinkedIn"})})]})]})]})})]})},b0=k.ul`
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
`,xl=k.li`
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
`,yl=k(Do)`
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

`,B0=k.a`

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
`;const U0=()=>{const e=nt();return a.jsxs(b0,{children:[a.jsx(xl,{children:a.jsx(yl,{to:"/",state:{from:e},children:a.jsx(B0,{children:"Студія"})})}),a.jsx(xl,{children:a.jsx(yl,{to:"/portfolio",state:{from:e},children:"Портфоліо"})}),a.jsx(xl,{children:a.jsx(yl,{href:"#",children:"Контакти"})})]})},W0=k.ul`
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
`,Ju=k.li`
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
`,ec=k.a`
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
`,tc=k.svg`
    margin-right: 10px;
}
`,ep=()=>a.jsxs(W0,{children:[a.jsxs(Ju,{children:[a.jsx(tc,{width:"16",height:"12",children:a.jsx("use",{href:z+"#poshta"})}),a.jsx(ec,{href:"mailto:info@devstudio.com",children:"info@devstudio.com"})]}),a.jsx(Ju,{children:a.jsxs(ec,{href:"tel:+380961111111",children:[a.jsx(tc,{width:"12",height:"16",children:a.jsx("use",{href:z+"#smartphone"})}),"+38 096 111 11 11"]})})]}),H0=()=>{const e=nt();return a.jsx(E0,{children:a.jsx(_0,{children:a.jsxs(T0,{children:[a.jsxs(N0,{to:"/",state:{from:e},lang:"en","data-wow-offset":"100",children:[a.jsx(P0,{children:"Web"}),"Studio"]}),a.jsxs(a.Fragment,{children:[" ",a.jsx(U0,{})," ",a.jsx(ep,{})]})," ",a.jsx(Jf,{})]})})})},$0="/goit-markup-react/assets/%D1%81oworker-mobile-DkjrP_lB.jpg",V0="/goit-markup-react/assets/%D1%81oworker-mobile@2x-CfTHwFb7.jpg",Q0="/goit-markup-react/assets/%D1%81oworker-tablet-DNCU7IaL.jpg",K0="/goit-markup-react/assets/%D1%81oworker-tablet@2x-CltOuUgI.jpg",Y0="/goit-markup-react/assets/%D1%81oworker-CBK_fIvu.jpg",G0="/goit-markup-react/assets/%D1%81oworker@2x-DEOHsqO2.jpg",X0=k.section`
  padding-top: 118px;
  padding-bottom: 118px;
  background-color: var(--footer-bacground-color);
  text-align: center;
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${$0});
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
      url(${Q0});
  }

  @media screen and (min-width: 1200px) {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${Y0});
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
      url(${V0});
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 768px),
    screen and (min-resolution: 192dpi) and (min-width: 768px),
    screen and (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${K0});
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1200px),
    screen and (min-resolution: 192dpi) and (min-width: 1200px),
    screen and (min-resolution: 2dppx) and (min-width: 1200px) {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${G0});
  }
`,Z0=k.div`
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
`,q0=k.h1`
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
`,J0=k.button`
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
`,ev=()=>{const[e,t]=E.useState(!1),n=()=>{t(r=>!r)};return a.jsx(X0,{children:a.jsxs(Z0,{children:[a.jsxs(q0,{children:["Ефективні рішення для ",a.jsx("br",{}),"вашого бізнесу"]}),a.jsx(J0,{type:"button",id:"data-modal-open",onClick:n,children:"Замовити послугу"}),e&&a.jsx("div",{className:"backdrop is-hidden","data-modal":!0,children:a.jsx("div",{className:"modal",children:a.jsxs("form",{className:"form",children:[a.jsx("h2",{className:"form__text ",children:"Залиште свої дані, ми вам передзвонимо"}),a.jsxs("div",{className:"form__field",children:[a.jsx("label",{className:"form__label",children:"Ім`я"}),a.jsxs("div",{className:"form__icones",children:[a.jsx("input",{className:"form__input",type:"text",name:"name",id:"name"}),a.jsx("svg",{className:"form__icon",width:"18",height:"18",children:a.jsx("use",{href:z+"#icon-person"})})]})]}),a.jsxs("div",{className:"form__field",children:[a.jsx("label",{className:"form__label",children:"Телефон"}),a.jsxs("div",{className:"form__icones",children:[a.jsx("input",{type:"tel",className:"form__input",name:"tel",id:"tel",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}",placeholder:"xxx-xxx-xx-xx"}),a.jsx("svg",{className:"form__icon",width:"18",height:"18",children:a.jsx("use",{href:z+"#icon-phone-2"})})]})]}),a.jsxs("div",{className:"form__field",children:[a.jsx("label",{className:"form__label",children:"Пошта"}),a.jsxs("div",{className:"form__icones",children:[a.jsx("input",{type:"email",className:"form__input",name:"mail",id:"mail"}),a.jsx("svg",{className:"form__icon",width:"18",height:"18",children:a.jsx("use",{href:z+"#icon-email-2"})})]})]}),a.jsxs("div",{className:"form__field",children:[a.jsx("label",{className:"form__label",children:"Коментар"}),a.jsx("textarea",{name:"comment",className:"form__comment",id:"comment",placeholder:"Введіть текст",cols:"30",rows:"10"})]}),a.jsx("div",{className:"agree__field",children:a.jsxs("label",{className:"agree__label",children:[a.jsx("input",{type:"checkbox",className:"agree__input",name:"agree",id:"agree"}),a.jsx("span",{className:"agree__icone"}),a.jsxs("div",{children:["Погоджуюся з розсилкою та приймаю",a.jsx("a",{href:"#",className:"dek",children:"Умови договору"})]})]})}),a.jsx("button",{type:"submit",className:"modal__button",children:"Відправити"}),a.jsx("button",{type:"button",className:"modal__close","data-modal-close":!0,onClick:n,children:a.jsx("svg",{className:"modal__img",width:"18",height:"18",children:a.jsx("use",{href:z+"#icon-close-black"})})})]})})}),";"]})})},tv=k.section`
    padding-top: 60px;
        padding-bottom: 60px;
    @media (min-width:1200px) {
            padding-top: 94px;
            padding-bottom: 94px;
        }
`,nv=k.div`
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
`,rv=k.h2`
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
`,iv=k.ul`
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

`,fi=k.li`
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
`,pi=k.div`
    height: 120px;
    margin-bottom: 30px;
    background-color: var(--icone-bg-color);
    display: flex;
    justify-content: center;
    align-items: center;

`,hi=k.svg`
 background - color: var(--icone-bg-color);

`,mi=k.h3`
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
`,gi=k.p`
    font-size: 14px;
    line-height: 1.71;
    letter-spacing: 0.03em;
    text-decoration: none;
    color: var(--text-color-p);
    margin-top: 0;
    
`,ov=()=>a.jsx(tv,{children:a.jsxs(nv,{children:[a.jsx(rv,{children:"Опис діятельності"}),a.jsxs(iv,{children:[a.jsxs(fi,{children:[a.jsx(pi,{children:a.jsx(hi,{width:"70",height:"70",children:a.jsx("use",{href:z+"#antenna"})})}),a.jsx(mi,{children:"УВАГА ДО ДЕТАЛЕЙ"}),a.jsx(gi,{children:"Ідейні міркування, і навіть початок повсякденної роботи з формування позиції."})]}),a.jsxs(fi,{children:[a.jsx(pi,{children:a.jsx(hi,{width:"70",height:"70",children:a.jsx("use",{href:z+"#clock"})})}),a.jsx(mi,{children:"ПУНКТУАЛЬНІСТЬ"}),a.jsx(gi,{children:"Завдання організації, особливо рамки і місце навчання кадрів тягне у себе."})]}),a.jsxs(fi,{children:[a.jsx(pi,{children:a.jsx(hi,{width:"70",height:"70",children:a.jsx("use",{href:z+"#diagram"})})}),a.jsx(mi,{children:"ПЛАНУВАННЯ"}),a.jsx(gi,{children:"Так само консультація з широким активом значною мірою зумовлює."})]}),a.jsxs(fi,{children:[a.jsx(pi,{children:a.jsx(hi,{width:"70",height:"70",children:a.jsx("use",{href:z+"#astronaut"})})}),a.jsx(mi,{children:"СУЧАСНІ ТЕХНОЛОГІЇ"}),a.jsx(gi,{children:"Значимість цих проблем настільки очевидна, що реалізація планових завдань."})]})]})]})}),lv=k.section`

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
`,av=k.div`
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
`,sv=k.h2`
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
`,uv=k.ul`
  display: flex;
  gap: 30px;
  align-content: center;
  justify-content: center;

`,wl=k.li`
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
`,kl=k.img`
  display: flex;
`,Sl=k.p`
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
`,nc="/goit-markup-react/assets/photo_2022-07-14_23-06-50-w-9GE9pw.jpg",rc="/goit-markup-react/assets/photo_2022-07-14_23-08-23-ChSN16Q0.jpg",ic="/goit-markup-react/assets/photo_2022-07-14_23-08-29-DEV7w-ry.jpg",cv=()=>a.jsx(lv,{children:a.jsxs(av,{children:[a.jsx(sv,{children:"Чим ми займаємося"}),a.jsxs(uv,{children:[a.jsxs(wl,{children:[a.jsx("a",{href:nc,children:a.jsx(kl,{src:nc,alt:"photo",width:"370",height:"294"})}),a.jsx(Sl,{children:"Десктопні додатки"})]}),a.jsxs(wl,{children:[a.jsx("a",{href:rc,children:a.jsx(kl,{src:rc,alt:"photo",width:"370",height:"294"})}),a.jsx(Sl,{children:"Мобільні додатки"})]}),a.jsxs(wl,{children:[a.jsx("a",{href:ic,children:a.jsx(kl,{src:ic,alt:"photo",width:"370",height:"294"})}),a.jsx(Sl,{children:"Дизайнерські рішення"})]})]})]})}),dv=k.section`
    background-color: var(--teams-bacground-color);
    align-items: center;
    padding-top: 60px;
        // padding-bottom: 60px;
            padding-bottom: 0px;

    
    @media (min-width:1200px) {
            padding-top: 94px;
            padding-bottom: 94px;
            
        }
`,fv=k.div`
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
`,pv=k.h2`
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
`,hv=k.ul`
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
`,vi=k.li`
        @media screen and (min-width:768px) {
background-color: var(--body-background-color);
        @media screen and (min-width:1200px) {
background-color: var(--body-background-color);
width: 270px;
}
`,xi=k.div`
  display: block;
  padding: 30px 0;
  margin-top: 0;
  margin-bottom: 0;
  outline: 2px solid var(--technical-color);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 4px 4px;
`,yi=k.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.18;
  text-align: center;
  letter-spacing: 0.03em;
  color: var(--text-color);
  margin-top: 0;
  margin-bottom: 10px;
`,wi=k.p`
  font-size: 16px;
  line-height: 1.18;
  text-align: center;
  letter-spacing: 0.03em;
  color: var(--text-color);
  margin-top: 0;
  font-size: 16px;
  color: var(--text-color-p);
`,ki=k.ul`
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
`,mv="/goit-markup-react/assets/product-designer-mobile-CR9XjxZR.jpg",gv="/goit-markup-react/assets/frontend-developer-mobile-CKsiOpXf.jpg",vv="/goit-markup-react/assets/marketing-mobile-D4eyMM5O.jpg",xv="/goit-markup-react/assets/ui-mobile-CkzJuxso.jpg",yv=()=>a.jsx(dv,{children:a.jsxs(fv,{class:"animate__animated animate__fadeInUp wow","data-wow-offset":"100",children:[a.jsx(pv,{children:"Наша команда"}),a.jsxs(hv,{children:[a.jsxs(vi,{children:[a.jsx("img",{src:mv,alt:"mikola-tarasov-photo"}),a.jsxs(xi,{children:[a.jsx(yi,{children:"Ігор Дем`яненко"}),a.jsx(wi,{lang:"en",children:"Product Designer"}),a.jsxs(ki,{children:[a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка інстаграм",width:"20",height:"20",children:a.jsx("use",{href:z+"#icon-instagram"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка твітер",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:z+"#icon-tviter"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка феїсбук",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:z+"#icon-facebook"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка линкедін",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:z+"#icon-linkedin"})})})})]})]})]}),a.jsxs(vi,{children:[a.jsx("img",{src:gv,alt:"mikola-tarasov-photo"}),a.jsxs(xi,{children:[a.jsx(yi,{children:"Ольга Рєпіна"}),a.jsx(wi,{lang:"en",children:"Frontend Developer"}),a.jsxs(ki,{children:[a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка інстаграм",width:"20",height:"20",children:a.jsx("use",{href:z+"#icon-instagram"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка твітер",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:z+"#icon-tviter"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка феїсбук",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:z+"#icon-facebook"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка линкедін",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:z+"#icon-linkedin"})})})})]})]})]}),a.jsxs(vi,{children:[a.jsx("img",{src:vv,alt:"mikola-tarasov-photo"}),a.jsxs(xi,{children:[a.jsx(yi,{children:"Микола Тарасов"}),a.jsx(wi,{lang:"en",children:"Marketing"}),a.jsxs(ki,{children:[a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка інстаграм",width:"20",height:"20",children:a.jsx("use",{href:z+"#icon-instagram"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка твітер",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:z+"#icon-tviter"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка феїсбук",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:z+"#icon-facebook"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка линкедін",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:z+"#icon-linkedin"})})})})]})]})]}),a.jsxs(vi,{children:[a.jsx("img",{src:xv,alt:"mikola-tarasov-photo"}),a.jsxs(xi,{children:[a.jsx(yi,{children:"Михайло Єрмаков"}),a.jsx(wi,{lang:"en",children:"UI Designer"}),a.jsxs(ki,{children:[a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка інстаграм",width:"20",height:"20",children:a.jsx("use",{href:z+"#icon-instagram"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка твітер",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:z+"#icon-tviter"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка феїсбук",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:z+"#icon-facebook"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка линкедін",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:z+"#icon-linkedin"})})})})]})]})]})]})]})}),wv=k.section`
    padding-top: 60px;
        padding-bottom: 60px;

    
        @media (min-width:1200px) {
            padding-top: 94px;
            padding-bottom: 94px;
        }
`,kv=k.div`
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
`,Sv=k.h2`
    font-weight: 700;
    font-size: 36px;
    line-height: 1.16;
    text-align: center;
    letter-spacing: 0.03em;
    color: var(--text-color);
    margin: 0px;
    margin-bottom: 50px;
`,jv=k.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    // column-gap: 30px;
    gap: 28px;
    list-style: none;
    padding: 0;
    margin: 0;
`,an=k.li`
    // flex-basis: calc((100% - 30px) / 2);

        @media screen and (min-width:768px) {
            flex-basis: calc((100% - 60px) / 3);
        }

        @media screen and (min-width:1200px) {
            flex-basis: calc((100% - 150px) / 6);
        }
`,sn=k.a`
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
`,un=k.svg`
        display: flex;
        align-self: center;
        width: 170px;
        height: 92px;
`,Av=()=>a.jsx(wv,{children:a.jsxs(kv,{children:[a.jsx(Sv,{children:"Постійні клієнти"}),a.jsxs(jv,{children:[a.jsx(an,{children:a.jsx(sn,{children:a.jsx(un,{"aria-label":"іконка логотип",width:"106",height:"60",children:a.jsx("use",{href:z+"#icon-Logo"})})})}),a.jsx(an,{children:a.jsx(sn,{children:a.jsx(un,{"aria-label":"іконка логотип",width:"106",height:"60",children:a.jsx("use",{href:z+"#icon-Logo-2"})})})}),a.jsx(an,{children:a.jsx(sn,{children:a.jsx(un,{"aria-label":"іконка логотип",width:"106",height:"60",children:a.jsx("use",{href:z+"#icon-Logo-3"})})})}),a.jsx(an,{children:a.jsx(sn,{children:a.jsx(un,{"aria-label":"іконка логотип",width:"106",height:"60",children:a.jsx("use",{href:z+"#icon-Logo-4"})})})}),a.jsx(an,{children:a.jsx(sn,{children:a.jsx(un,{width:"106",height:"60",children:a.jsx("use",{href:z+"#icon-Logo-5"})})})}),a.jsx(an,{children:a.jsx(sn,{children:a.jsx(un,{"aria-label":"іконка логотип",width:"106",height:"60",children:a.jsx("use",{href:z+"#icon-Logo-6"})})})})]})]})}),Cv=()=>a.jsxs(a.Fragment,{children:[a.jsx(H0,{}),a.jsx(ev,{}),a.jsx(ov,{}),a.jsx(cv,{}),a.jsx(yv,{}),a.jsx(Av,{})]}),Ev=k.header`
    background-color: var(--body-background-color);
    border-bottom: 1px solid;
    color: #ececec;
    padding: 0;
`,_v=k.div`
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
`,Nv=k(Do)`
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
`,Pv=k.span`
    color: var(--beckground-color);
`,Tv=k.div`
    display: flex;
    align-items: center;
    padding: 0 15px;
    @media(max-width: 767px) {
        margin-top: 16px;
        justify-content: space-between;
        margin-bottom: 16px;
    }

`,Lv=k.ul`
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
`,jl=k.li`
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
`,Al=k(Do)`
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

`,Rv=k.a`

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
`;const zv=()=>{const e=nt();return a.jsxs(Lv,{children:[a.jsx(jl,{children:a.jsx(Al,{to:"/",state:{from:e},children:"Студія"})}),a.jsx(jl,{children:a.jsx(Al,{to:"/portfolio",state:{from:e},children:a.jsx(Rv,{children:"Портфоліо"})})}),a.jsx(jl,{children:a.jsx(Al,{href:"#",children:"Контакти"})})]})},Ov=()=>{const e=nt();return a.jsx(Ev,{children:a.jsx(_v,{children:a.jsxs(Tv,{children:[a.jsxs(Nv,{to:"/",state:{from:e},lang:"en","data-wow-offset":"100",children:[a.jsx(Pv,{children:"Web"}),"Studio"]}),a.jsxs(a.Fragment,{children:[" ",a.jsx(zv,{})," ",a.jsx(ep,{})]})," ",a.jsx(Jf,{id:"js-menu-container"})]})})})},Mv=k.section`
        padding-top: 60px;
        padding-bottom: 60px;
    @media (min-width:1200px) {
            padding-top: 94px;
            padding-bottom: 94px;
        }
`,Iv=k.div`
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
`,Dv=k.h1`
    position: fixed;
    transform: scale(0);

`,Fv=k.ul`
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
`,tr=k.li`
    display: inline-block;
    margin-left: 8px;
    @media screen and(max-width: 767px){
        margin-left: 0px;
    }
`,nr=k.button`
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
`,bv=()=>a.jsxs(a.Fragment,{children:[a.jsx(Dv,{children:"Портфоліо"}),a.jsxs(Fv,{children:[a.jsxs(tr,{children:[" ",a.jsx(nr,{children:"Усі"})," "]}),a.jsx(tr,{children:a.jsx(nr,{children:"Веб-сайти"})}),a.jsx(tr,{children:a.jsx(nr,{children:"Додатки"})}),a.jsx(tr,{children:a.jsx(nr,{children:"Дизайн"})}),a.jsx(tr,{children:a.jsx(nr,{children:"Маркетинг"})})]})]}),Bv=k.ul`
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
`,rt=k.li`
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
`,it=k.div`
    display: block;
    padding: 24px 20px;
    outline: 2px solid var(--technical-color);
    border-left: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    flex-grow: 1;
`,ot=k.h2`
    font-weight: 700;
    font-size: 18px;
    line-height: 2;
    letter-spacing: 0.06em;
    margin-top: 0px;
    margin-bottom: 4px;
    color: var(--text-color);
`,lt=k.p`
 
    font-size: 16px;
    line-height: 1.8;
    letter-spacing: 0.06em;
    color: var(--text-color-p);
    margin-top: 0px;
    margin-bottom: 4px;
`;k.a`
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



`;const oc="/goit-markup-react/assets/img-desktop-DHCT8Soc.jpg",lc="/goit-markup-react/assets/img2-desktop-D7-ZjpYy.jpg",ac="/goit-markup-react/assets/img3-desktop-D_3z_YZf.jpg",sc="/goit-markup-react/assets/img4-desktop-CI8oy9vU.jpg",uc="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAgICAgJCAkKCgkNDgwODRMREBARExwUFhQWFBwrGx8bGx8bKyYuJSMlLiZENS8vNUROQj5CTl9VVV93cXecnNEBCAgICAkICQoKCQ0ODA4NExEQEBETHBQWFBYUHCsbHxsbHxsrJi4lIyUuJkQ1Ly81RE5CPkJOX1VVX3dxd5yc0f/CABEIASYBcgMBIgACEQEDEQH/xAAzAAEAAgMBAQEAAAAAAAAAAAAAAgMBBAUGBwgBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/aAAwDAQACEAMQAAAA+7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIVlkYZhbKiUrUZAAAAAAAAAAAAAAAAAABXAnDGYDUxttuNzuHb1bh9zqzIz6s5TpFyucsgAAAAAAAAAAAAAArps0TbzRdDOcZNXg+pr83fgb/QrpbErJelhGenzb16uxzt8lgJzpqN1xuzIAAAAAAAAAAAACnn9Hmlkoi23XybOdeyFiIo5PdGjvAYpL6eJxTucKimXV9589+hABjWidpjMwAAAAAAAAABVzenyS6VUyQMgnOkbGKa4bWvxtA6PIzRKFSoVqjrfRvmnu623tHQo5umynk9jDol0eZi1fST8xvdHN2Wvsb4BMAAAAAAAPPehwcS6zRN3NFpJjJnGA53R5pysSiVa9+qVUbHTpfidbuT5+iu3Vvx20K9uN745XWrrnCWv1YnGHna37tHzVL78PS8sAAAAAAABGQ5mn34nKsaZuKpEub0OccyKJXrS4Z2Ox5He8z1PZZ8p14npVWr01diUJWK/PRPo/OeP0KabvKnXF49Dnbc1/RA9TxwAAAAAAAAAEZDl6foIHH0Op5UhxNLYNW3bvide+dfmerOVdmO93S461fU+f4vB0pt6KMWRzWQhKshs6mzNf0gPU8cAAAAAAAAAAADFN+DznF93A8Db6zTh5PQ73mPN9XcnVZh0ZzGUubwe9wL1xFGYjCWuS19Tf1y5ff7vV6eP03pfCdHbn9vnznUmN9XYAAAAAAAAAAAMZEY2DU8p7XFb/ACDP1jyXH3eezqz5evU893/NWi2jQ3dctDd9T0uri5fS3Nvbn1dvYvKtqewjG3HYlZsU2l0q5kkRIAAAAAAAAAAAAFHkPbRpf4Zxf0Lx89vnfS71W3PztncuNW/ZuRr7F90qL7Zlds5kbMzMSSAAAAAAAAAAAAAAAMRmKdToYONHswOZbuDXndIqnZkhKWTEgAAAAAAAAAAAAAAAAAAYyMYkI5yMZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//xABAEAACAgECAwQGBwUGBwAAAAABAgADEQQSBSExEEFRYRMgMkBxgQYUM1BygrEiIyRCsiU0UmSRoTBjcHSAwdH/2gAIAQEAAT8A/wDIYv4QOYGB+6y8JJ9QEiBh9zl4ST2Y7OQ7/UyQYG+4y/hCSezEPKPqu5B8zLNYN5TeWcDJRTzxDqLLhaq7gQwClBkj8QPTzBml+tJgWWhmz/KMdhsrDqhdQxGQueZ7c4gfxgIPv1j7FzN+7v8AV1RbaPDvllmosHo2qdCxKnHMYPmMSvT5r2XYcdQDz2/A8olLsBgcvEypKUfbvBsxnGecHp3PPCYbuIbcJXUla7UBx5kn9YSB1lms01TIr2Bd7BVz3k90BBHLtDmBgffNR9mYIth74CD28jDVXn2BCErGdn+gzALnP7eEAJBAOdw+PLEStEAAHQYBJyf9TMgDnLNZWCUQhrAu7ZkbiPIRbNfq9rbPQqeeH5v8CByHyMo4fXUd3MtgAsTliB4mKqryA9Sy2uobnYASnii26qulF5HOSfIe93/ZNBB2K574GB9XUXWVVsyVM+BnC4JPwzGTX6snNnoU7tnN/LmeQ8xNPw+mkcl78+PWAADAHaZbfVUMu4E1HF+oqGPMy3UvYxLMSfOcJbPEtP8AP9D73f8AZN2D1A5gYHv/AOBdqaaRl2A8pqeLMciobR498svd2JLExnjNODHPE9P+b9D6hYKMkgCDWactt3wEH3W77J/hAYD6wYiBx2Z7LtVTT7Tc/AdZqOJWtyQbB/vLLGYkkxjC0ZoTOCn+1NN8W/Q9jMqjJIAluuUcqxnzlltlpy7EzErvuq9hiPKVcRU4Fi48xEsRxlWBHud32b/A9gMB7c+oHIl2prpUM2fIS7X3WZC/sjy6wkmMY0YwmNGM4IccU057huyflLdaByrGfMyyx7DliTLbK6kL2OqKOpY4EHGtO+oFNVNtnMAlV6buh2nnjz7MTEDOhypIPiJVxCxeVg3Dx6GVaqm32X5+B9yt9PRa29f2SxxK7Uboefh2D1c9nEfYr+J7DGjGMYTiIllrba0LHylHBicNe/5VlVFNK7a0Cjsu0d9uoFn121ax0rTAljLen8bpq0o7vSNlt3djHfNMlC1WNpqdpJOcqVLN5k859V4vqWzfYKvJWO1fwhSCT5ky3U6XhulH1jUkitOrsC7f/TNHra9UisqOpK5wVOB+bp2GHlzziab6R0DX6bRJb6U2WBOXML8/cSAQQQCJdw5GyaztPh3RjfQcWLyiWo+MHn4TPrcR9iv4nsMbpHi1W2nbWhYynhI63t+VZXXXUoWtAo8BCTg4GTF1BDBLU2tgklclAB4sQIrq6hlYEHoQcgw3uXK8lHPr5RbPSNsetXXPhkeRl2iqvurssewhOYTcQufEgRX1aEvaK66hyCrlyZXpdFqbFt+qNX6J9yhl2KzH+bHeRMRiACSQAOpmu+kej025af31nl7M1/FtbrSRbZhP8C8hOAHHG+Gn/MJ7myqwIIBBl3D1POo7T4QtdQ22xTEsRxyPy7M9vEfYr+JmYTGMeU6q2hjsb4iUcUpfAsGw/wC0DKQCCCOx0V1KuoZT3EZEWlVsawM+SMBdx2j4CelIYC+gbmbC7cvy8TyGIhrOdhHXu7DCygEsQAOpM130k0lG5aB6Z/Eclmu4rrdaf3tp2dyLyWGMZwU44xw7/ua/6vdWVWBDAES7h4POpsHwM33UnbYpi2o45Ht4if2K/iewy++qkEu4Eu19lh20rgePfNIGAcs2SSIMSm+2j2HI8u6U8TRsC1dp8R0iujLlWBHlBCAZXXVUCK0VQfAYjuqKWdgFHUk4mt+kmmpylA9K/j0WaziWs1rZutO3uUclEMaEwmcKOOK8PP8Ama/6vd3RXGGAIl3D++lseRhe2k7bFMSxW6GcR9iv4mW31UruscKJqOKvYSunX8xE9G7sWtYkmBO4CVKVBg7UtsrOUcqZTxIezavzE+sU7DZ6Rdg78zW/STT1gppl9I3ieSzWcQ1erObrSR3L0A7WMJMJhM4c2OI6I+Gor/qHvLojjDKCJdw7GTS3yM45qNZRXUiVkuWI6Q0XWNuvckxagBgDEWmJT5SxNgXznjiAwQzvnFM/V1/GOwmc8QmNDGhM4ZW9/FNFTVg2Ncu0Z8Dn3rEsqSwEMoImq4HS+TXyPhLeF21H2YNMR1EWia9dgq88wGDszz7OKH9wv4xDDDCciGEyy6usZZo2ouvfZQhyfAZM4LwvVaXV0617NllbZUDmZofpDfyF6g+YlGvouAw0DA+8Y7GQMOYluirbujaIrOOU+j0i245q/wCsrvRuXQ+BgMBEPZxP+7r+MQmEwmGW2pWMs2I+qttbZShyfmZpeBXWkPqWK+Q5maXQU0LtqrC/qZXRKqcSoFeko1Nq98q1WesWxW94xCIVEs09dilXUFT1Bmv+i1bhn0jbT/gbmJdRrNE+y2tl8m6H4GV3IxxnB8DM9nE/7uv4xDCZZalYy7ASzV22tspQ8+neZpeB33HfqGKjw6tNLw+jTriqsDxPeZXREoiVCJXESIkRYkBMDTPvGJiXaem9Cltaup7iJr/oohy+jfH/AC3l1Wr0T+juRl8m/wDRld6Ny6HwM4of4cfjEstSvm7ASzWWWHZSp5/MzS8D1N536higPzaaXh2n04xVWAe89SYlMSiJVFri1xa4qRVirFEEHvt+npvQpbWrqe4ia/6Ljm+kf8jTjtet0tAqZHVzYAAR+k0vAdZqCH1BNa+fNjNJwvT6YAV1jPex5kxaYtMWqLXFqi1xa4tcCQLAsAgEHvxEt09Vow6BviJqOD1NzQYj8Nev+WDTkd0FPlFpi1RaotcVIEgWBYFgEAmPfzCI1anqJZpEbujaTE9DiCqCuBIFgWBYBMTH3GRMQrDWDPRibIFgWYmJj7oxMTExMTH/AFF//8QAKBEAAgECBQIGAwAAAAAAAAAAAQIDABEEECExQDJBBRITImBhIDNx/9oACAECAQE/APn008UIu7Wo+Ji/tiNvs2rC4kYgN7bW42JwLSymQONex7UnhgveSS/0KjjSNQqKAOeWA3PGZ1Xc007HRRajfvSyOuxpZ1PULUCDseCzqu5ppmOi6Ub968jWvkbZIxDCx78GZiJnpXGdwKLZL1D+8HEfufIEivMSPwXccHEqfVbNds1iZqSFV14LIr7ipMKRqmtEEGxFLtSxs1JCo34roj9QpYFX7q1vlP8A/8QAJxEAAgECBQMEAwAAAAAAAAAAAQIAAxEEITEyQBASUSBgcYEzQWH/2gAIAQMBAT8A9/KjMchBQ8tKlPsIz4yVQqgEQ1/AjMSbk88KToDxlRm0ESgo3G8Xt/Uamj6iNh2G3OEEZEcFUZtBEoKM2zghpNa8Igv9QAmPTBRr+DwaCA0UjUyOmcAJgTz0ba3xwcN+FPvoVBnYAfQ20/HBwpBoj+E9T1eqqamVK7NcDIcFKjobqZTxanJxaAgi4MMeqqamPiGbbkISTxEqOm0x8S7AZWhJPun/2Q==",cc="/goit-markup-react/assets/img6-desktop-T8iIHNok.jpg",dc="/goit-markup-react/assets/img7-desktop-Dg4i-DKN.jpg",fc="/goit-markup-react/assets/img8-desktop-CsQ4ePrM.jpg",pc="/goit-markup-react/assets/img9-desktop-Mm3BjZR-.jpg",Uv=()=>a.jsx(a.Fragment,{children:a.jsxs(Bv,{children:[a.jsx(rt,{children:a.jsxs("a",{href:oc,alt:"ноутбук",className:"elements__decoration elements__picture",children:[a.jsxs("div",{className:"port__discript",children:[a.jsx("img",{src:oc,alt:"ноутбук"}),a.jsx("div",{className:"port__paragraph",children:a.jsx("p",{className:"port__curd",children:"Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу."})})]}),a.jsxs(it,{children:[a.jsx(ot,{children:"Технокряк"}),a.jsx(lt,{children:"Веб-сайт"})]})]})}),a.jsx(rt,{children:a.jsxs("a",{src:lc,alt:"баскетбол",className:"elements__decoration elements__picture",children:[a.jsxs("div",{className:"port__discript",children:[a.jsx("img",{src:lc,alt:"баскетбол"}),a.jsx("div",{className:"port__paragraph",children:a.jsx("p",{className:"port__curd",children:"Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу."})})]}),a.jsxs(it,{children:[a.jsxs(ot,{children:["Постер ",a.jsx("span",{lang:"en",children:"New Orlean vs Golden Star"})]}),a.jsx(lt,{children:"Дизайн"})]})]})}),a.jsx(rt,{children:a.jsxs("a",{src:ac,alt:"морська Іжа",className:"elements__decoration elements__picture",children:[a.jsxs("div",{className:"port__discript",children:[a.jsx("img",{src:ac,alt:"морська Іжа"}),a.jsx("div",{className:"port__paragraph",children:a.jsx("p",{className:"port__curd",children:"Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу."})})]}),a.jsxs(it,{children:[a.jsxs(ot,{children:["Ресторан ",a.jsx("span",{lang:"en",children:"Seafood"})]}),a.jsx(lt,{children:"Додаток"})]})]})}),a.jsx(rt,{children:a.jsxs("a",{src:sc,alt:"навушники",className:"elements__decoration elements__picture",children:[a.jsxs("div",{className:"port__discript",children:[a.jsx("img",{src:sc,alt:"навушники"}),a.jsx("div",{className:"port__paragraph",children:a.jsx("p",{className:"port__curd",children:"Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу."})})]}),a.jsxs(it,{children:[a.jsxs(ot,{children:["Проєкт ",a.jsx("span",{lang:"en",children:"Prime"})]}),a.jsx(lt,{children:"Маркетинг"})]})]})}),a.jsx(rt,{children:a.jsxs("a",{src:uc,alt:"дві коробки",className:"elements__decoration elements__picture",children:[a.jsxs("div",{className:"port__discript",children:[a.jsx("img",{src:uc,alt:"дві коробки"}),a.jsx("div",{className:"port__paragraph",children:a.jsx("p",{className:"port__curd",children:"Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу."})})]}),a.jsxs(it,{children:[a.jsxs(ot,{children:["Проєкт ",a.jsx("span",{lang:"en",children:"Boxes"})]}),a.jsx(lt,{children:"Додаток"})]})]})}),a.jsx(rt,{children:a.jsxs("a",{src:cc,alt:"монітор",className:"elements__decoration elements__picture",children:[a.jsxs("div",{className:"port__discript",children:[a.jsx("img",{src:cc,alt:"монітор"}),a.jsx("div",{className:"port__paragraph",children:a.jsx("p",{className:"port__curd",children:"Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу."})})]}),a.jsxs(it,{children:[a.jsx(ot,{lang:"en",children:"Inspiration has no Borders"}),a.jsx(lt,{children:"Веб-сайт"})]})]})}),a.jsx(rt,{children:a.jsxs("a",{src:dc,alt:"журнал",className:"elements__decoration elements__picture",children:[a.jsxs("div",{className:"port__discript",children:[a.jsx("img",{src:dc,alt:"журнал"}),a.jsx("div",{className:"port__paragraph",children:a.jsx("p",{className:"port__curd",children:"Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу."})})]}),a.jsxs(it,{children:[a.jsxs(ot,{children:["Видання ",a.jsx("span",{lang:"en",children:"Limited Edition"})]}),a.jsx(lt,{children:"Дизайн"})]})]})}),a.jsx(rt,{children:a.jsxs("a",{src:fc,alt:"бірка",className:"elements__decoration elements__picture",children:[a.jsxs("div",{className:"port__discript",children:[a.jsx("img",{src:fc,alt:"бірка"}),a.jsx("div",{className:"port__paragraph",children:a.jsx("p",{className:"port__curd",children:"Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу."})})]}),a.jsxs(it,{children:[a.jsxs(ot,{children:["Проєкт ",a.jsx("span",{lang:"en",children:"LAB"})]}),a.jsx(lt,{children:"Маркетинг"})]})]})}),a.jsx(rt,{children:a.jsxs("a",{src:pc,alt:"робота",className:"elements__decoration elements__picture",children:[a.jsxs("div",{className:"port__discript",children:[a.jsx("img",{src:pc,alt:"робота"}),a.jsx("div",{className:"port__paragraph",children:a.jsx("p",{className:"port__curd",children:"Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу."})})]}),a.jsxs(it,{children:[a.jsx(ot,{lang:"en",children:"Growing Business"}),a.jsx(lt,{children:"Додаток"})]})]})})]})}),Wv=()=>a.jsxs(a.Fragment,{children:[a.jsx(Ov,{}),a.jsx(Mv,{children:a.jsxs(Iv,{children:[a.jsx(bv,{}),a.jsx(Uv,{})]})}),a.jsx(E.Suspense,{fallback:a.jsx("div",{children:"Loading page..."}),children:a.jsx(pg,{})})]}),Hv=k.section`
    background: var(--footer-bacground-color);
    padding-top: 60px;
    padding-bottom: 60px;

    @media screen and (max-width:767px) {
        text-align: center;
  }
`,$v=k.div`
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
`,Vv=k.div`
    background: var(--footer-bacground-color);
    padding-top: 60px;
    padding-bottom: 60px;

    @media screen and (max-width:767px) {
        text-align: center;
  }
`,Qv=k.a`
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 26px;
    line-height: 1.19;
    letter-spacing: 0.03em;
    text-decoration: none;
    color: var(--beckground-color);
    display: inline-block;
    margin-bottom: 20px;
`,Kv=k.span`
color: var(--body-background-color);
`,Yv=k.ul`
    list-style: none;
`,Cl=k.li`
    &:not(:last-child) {
    margin-bottom: 9px;
    }

`,Gv=k.a`
    font-size: 14px;
    line-height: 1.7;
    font-style: normal;
    letter-spacing: 0.03em;
    text-decoration: none;
    color: var(--body-background-color);

`,hc=k.a`
    font-size: 14px;
    line-height: 1.7;
    text-decoration: none;
    font-style: normal;
    letter-spacing: 0.03em;
    color: rgba(255, 255, 255, 0.6);

`,Xv=k.div`
    @media screen and (max-width: 768px) {
        margin-bottom: 60px;
        margin-bottom: 0;
      }
  @media screen and (min-width:1200px) {
    margin-bottom: 60px;
    margin-left: 70px;
  }
`,mc=k.h2`
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
`,Zv=k.ul`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;

    @media screen and (max-width: 768px) {
        justify-content: center;
}
`,Si=k.li`
    display: flex;
`,ji=k.a`
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
`,Ai=k.svg`
    background-repeat: no-repeat;
    background-size: 20px 20px;
    background-position: left, center -10px, center, right;
    background-origin: content-box;
    fill: #ffffff;
`,qv=k.div`
// display: flex;

        @media screen and (min-width:1200px) {
            display: flex;
    }
`,Jv=k.div`
    margin: 0;
    padding: 0;
    @media screen and (min-width:1200px) {
    margin-left: auto;
    }
`,ex=k.form`

`,tx=k.input`
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
`,nx=k.button`
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
`,rx=k.svg`
    top: 0;
    right: 0;
`,ix=()=>a.jsx(Hv,{children:a.jsxs($v,{children:[a.jsxs(Vv,{children:[a.jsxs(Qv,{href:"index.html",lang:"en",children:["Web",a.jsx(Kv,{children:"Studio"})]}),a.jsx("address",{children:a.jsxs(Yv,{children:[a.jsx(Cl,{children:a.jsx(Gv,{href:"https://goo.gl/maps/CPtrU1FHBa2aNyZL9",target:"_blank",rel:"noopener noreferrer",children:"м. Київ, пр-т Лесі Українки, 26"})}),a.jsx(Cl,{children:a.jsx(hc,{href:"mailto:info@devstudio.com",children:"info@devstudio.com"})}),a.jsx(Cl,{children:a.jsx(hc,{href:"tel:+380961111111",children:"+38 096 111 11 11"})})]})})]}),a.jsxs(Xv,{children:[a.jsx(mc,{children:"ПРИЄДНУЙТЕСЬ"}),a.jsxs(Zv,{children:[a.jsx(Si,{children:a.jsx(ji,{children:a.jsx(Ai,{"aria-label":"іконка інстаграм",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:z+"#icon-instagram"})})})}),a.jsx(Si,{children:a.jsx(ji,{children:a.jsx(Ai,{"aria-label":"іконка твітер",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:z+"#icon-tviter"})})})}),a.jsx(Si,{children:a.jsx(ji,{children:a.jsx(Ai,{"aria-label":"іконка феїсбук",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:z+"#icon-facebook"})})})}),a.jsx(Si,{children:a.jsx(ji,{children:a.jsx(Ai,{"aria-label":"іконка линкедін",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:z+"#icon-linkedin"})})})})]})]}),a.jsxs(Jv,{children:[a.jsx(mc,{children:"Підпишіться на розсилку"}),a.jsx(ex,{children:a.jsxs(qv,{children:[a.jsx("label",{for:"email"}),a.jsx(tx,{type:"email",name:"mail",id:"mail",placeholder:"E-mail"}),a.jsxs(nx,{type:"submit",children:["Підписатися",a.jsx(rx,{width:"24",height:"24",children:a.jsx("use",{href:z+"#icon-icon-send"})})]})]})})]})]})}),ox=()=>a.jsx(a.Fragment,{children:a.jsxs("body",{children:[a.jsxs(mg,{children:[a.jsx(Di,{path:Wu.HOME,element:a.jsx(Cv,{})}),a.jsx(Di,{path:Wu.PORTFOLIO,element:a.jsx(Wv,{})}),a.jsx(Di,{path:"*",element:a.jsx(fg,{to:"/"})})]}),a.jsx(ix,{})]})}),lx=document.getElementById("root"),ax=Tf(lx);ax.render(a.jsx(E.StrictMode,{children:a.jsx(jg,{basename:"/goit-markup-react/",children:a.jsx(ox,{})})}));
