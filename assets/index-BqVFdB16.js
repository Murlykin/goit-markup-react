function Yf(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Gf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var sc={exports:{}},ho={},uc={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ur=Symbol.for("react.element"),Xf=Symbol.for("react.portal"),Zf=Symbol.for("react.fragment"),qf=Symbol.for("react.strict_mode"),Jf=Symbol.for("react.profiler"),ep=Symbol.for("react.provider"),tp=Symbol.for("react.context"),np=Symbol.for("react.forward_ref"),rp=Symbol.for("react.suspense"),ip=Symbol.for("react.memo"),op=Symbol.for("react.lazy"),ks=Symbol.iterator;function lp(e){return e===null||typeof e!="object"?null:(e=ks&&e[ks]||e["@@iterator"],typeof e=="function"?e:null)}var cc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dc=Object.assign,fc={};function Bn(e,t,n){this.props=e,this.context=t,this.refs=fc,this.updater=n||cc}Bn.prototype.isReactComponent={};Bn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Bn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function pc(){}pc.prototype=Bn.prototype;function ja(e,t,n){this.props=e,this.context=t,this.refs=fc,this.updater=n||cc}var Aa=ja.prototype=new pc;Aa.constructor=ja;dc(Aa,Bn.prototype);Aa.isPureReactComponent=!0;var Ss=Array.isArray,hc=Object.prototype.hasOwnProperty,Ca={current:null},mc={key:!0,ref:!0,__self:!0,__source:!0};function gc(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)hc.call(t,r)&&!mc.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Ur,type:e,key:o,ref:l,props:i,_owner:Ca.current}}function ap(e,t){return{$$typeof:Ur,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ea(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ur}function sp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var js=/\/+/g;function Bo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?sp(""+e.key):t.toString(36)}function Ci(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Ur:case Xf:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Bo(l,0):r,Ss(i)?(n="",e!=null&&(n=e.replace(js,"$&/")+"/"),Ci(i,t,n,"",function(c){return c})):i!=null&&(Ea(i)&&(i=ap(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(js,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Ss(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+Bo(o,s);l+=Ci(o,t,n,u,i)}else if(u=lp(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+Bo(o,s++),l+=Ci(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Yr(e,t,n){if(e==null)return e;var r=[],i=0;return Ci(e,r,"","",function(o){return t.call(n,o,i++)}),r}function up(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ye={current:null},Ei={transition:null},cp={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:Ei,ReactCurrentOwner:Ca};O.Children={map:Yr,forEach:function(e,t,n){Yr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Yr(e,function(){t++}),t},toArray:function(e){return Yr(e,function(t){return t})||[]},only:function(e){if(!Ea(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=Bn;O.Fragment=Zf;O.Profiler=Jf;O.PureComponent=ja;O.StrictMode=qf;O.Suspense=rp;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cp;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=dc({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Ca.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)hc.call(t,u)&&!mc.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Ur,type:e.type,key:i,ref:o,props:r,_owner:l}};O.createContext=function(e){return e={$$typeof:tp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ep,_context:e},e.Consumer=e};O.createElement=gc;O.createFactory=function(e){var t=gc.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:np,render:e}};O.isValidElement=Ea;O.lazy=function(e){return{$$typeof:op,_payload:{_status:-1,_result:e},_init:up}};O.memo=function(e,t){return{$$typeof:ip,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=Ei.transition;Ei.transition={};try{e()}finally{Ei.transition=t}};O.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};O.useCallback=function(e,t){return ye.current.useCallback(e,t)};O.useContext=function(e){return ye.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return ye.current.useDeferredValue(e)};O.useEffect=function(e,t){return ye.current.useEffect(e,t)};O.useId=function(){return ye.current.useId()};O.useImperativeHandle=function(e,t,n){return ye.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return ye.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return ye.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return ye.current.useMemo(e,t)};O.useReducer=function(e,t,n){return ye.current.useReducer(e,t,n)};O.useRef=function(e){return ye.current.useRef(e)};O.useState=function(e){return ye.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return ye.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return ye.current.useTransition()};O.version="18.2.0";uc.exports=O;var P=uc.exports;const dp=Gf(P),Sl=Yf({__proto__:null,default:dp},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fp=P,pp=Symbol.for("react.element"),hp=Symbol.for("react.fragment"),mp=Object.prototype.hasOwnProperty,gp=fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vp={key:!0,ref:!0,__self:!0,__source:!0};function vc(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)mp.call(t,r)&&!vp.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:pp,type:e,key:o,ref:l,props:i,_owner:gp.current}}ho.Fragment=hp;ho.jsx=vc;ho.jsxs=vc;sc.exports=ho;var a=sc.exports,xc={exports:{}},Le={},yc={exports:{}},wc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,z){var L=_.length;_.push(z);e:for(;0<L;){var G=L-1>>>1,ne=_[G];if(0<i(ne,z))_[G]=z,_[L]=ne,L=G;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var z=_[0],L=_.pop();if(L!==z){_[0]=L;e:for(var G=0,ne=_.length,Qr=ne>>>1;G<Qr;){var $t=2*(G+1)-1,Uo=_[$t],Vt=$t+1,Kr=_[Vt];if(0>i(Uo,L))Vt<ne&&0>i(Kr,Uo)?(_[G]=Kr,_[Vt]=L,G=Vt):(_[G]=Uo,_[$t]=L,G=$t);else if(Vt<ne&&0>i(Kr,L))_[G]=Kr,_[Vt]=L,G=Vt;else break e}}return z}function i(_,z){var L=_.sortIndex-z.sortIndex;return L!==0?L:_.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],c=[],h=1,m=null,g=3,k=!1,y=!1,v=!1,j=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(_){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=_)r(c),z.sortIndex=z.expirationTime,t(u,z);else break;z=n(c)}}function x(_){if(v=!1,p(_),!y)if(n(u)!==null)y=!0,Do(C);else{var z=n(c);z!==null&&Fo(x,z.startTime-_)}}function C(_,z){y=!1,v&&(v=!1,f(T),T=-1),k=!0;var L=g;try{for(p(z),m=n(u);m!==null&&(!(m.expirationTime>z)||_&&!Pe());){var G=m.callback;if(typeof G=="function"){m.callback=null,g=m.priorityLevel;var ne=G(m.expirationTime<=z);z=e.unstable_now(),typeof ne=="function"?m.callback=ne:m===n(u)&&r(u),p(z)}else r(u);m=n(u)}if(m!==null)var Qr=!0;else{var $t=n(c);$t!==null&&Fo(x,$t.startTime-z),Qr=!1}return Qr}finally{m=null,g=L,k=!1}}var E=!1,A=null,T=-1,B=5,R=-1;function Pe(){return!(e.unstable_now()-R<B)}function Vn(){if(A!==null){var _=e.unstable_now();R=_;var z=!0;try{z=A(!0,_)}finally{z?Qn():(E=!1,A=null)}}else E=!1}var Qn;if(typeof d=="function")Qn=function(){d(Vn)};else if(typeof MessageChannel<"u"){var ws=new MessageChannel,Kf=ws.port2;ws.port1.onmessage=Vn,Qn=function(){Kf.postMessage(null)}}else Qn=function(){j(Vn,0)};function Do(_){A=_,E||(E=!0,Qn())}function Fo(_,z){T=j(function(){_(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){y||k||(y=!0,Do(C))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(_){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var L=g;g=z;try{return _()}finally{g=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,z){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var L=g;g=_;try{return z()}finally{g=L}},e.unstable_scheduleCallback=function(_,z,L){var G=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?G+L:G):L=G,_){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=L+ne,_={id:h++,callback:z,priorityLevel:_,startTime:L,expirationTime:ne,sortIndex:-1},L>G?(_.sortIndex=L,t(c,_),n(u)===null&&_===n(c)&&(v?(f(T),T=-1):v=!0,Fo(x,L-G))):(_.sortIndex=ne,t(u,_),y||k||(y=!0,Do(C))),_},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(_){var z=g;return function(){var L=g;g=z;try{return _.apply(this,arguments)}finally{g=L}}}})(wc);yc.exports=wc;var xp=yc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kc=P,ze=xp;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sc=new Set,vr={};function on(e,t){Rn(e,t),Rn(e+"Capture",t)}function Rn(e,t){for(vr[e]=t,e=0;e<t.length;e++)Sc.add(t[e])}var mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jl=Object.prototype.hasOwnProperty,yp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,As={},Cs={};function wp(e){return jl.call(Cs,e)?!0:jl.call(As,e)?!1:yp.test(e)?Cs[e]=!0:(As[e]=!0,!1)}function kp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Sp(e,t,n,r){if(t===null||typeof t>"u"||kp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function we(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new we(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new we(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new we(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new we(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new we(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new we(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new we(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new we(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new we(e,5,!1,e.toLowerCase(),null,!1,!1)});var Pa=/[\-:]([a-z])/g;function Na(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Pa,Na);se[t]=new we(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Pa,Na);se[t]=new we(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Pa,Na);se[t]=new we(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new we(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new we(e,1,!1,e.toLowerCase(),null,!0,!0)});function _a(e,t,n,r){var i=se.hasOwnProperty(t)?se[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Sp(t,n,i,r)&&(n=null),r||i===null?wp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var yt=kc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gr=Symbol.for("react.element"),fn=Symbol.for("react.portal"),pn=Symbol.for("react.fragment"),Ta=Symbol.for("react.strict_mode"),Al=Symbol.for("react.profiler"),jc=Symbol.for("react.provider"),Ac=Symbol.for("react.context"),Ra=Symbol.for("react.forward_ref"),Cl=Symbol.for("react.suspense"),El=Symbol.for("react.suspense_list"),za=Symbol.for("react.memo"),St=Symbol.for("react.lazy"),Cc=Symbol.for("react.offscreen"),Es=Symbol.iterator;function Kn(e){return e===null||typeof e!="object"?null:(e=Es&&e[Es]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,bo;function ir(e){if(bo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);bo=t&&t[1]||""}return`
`+bo+e}var Wo=!1;function Ho(e,t){if(!e||Wo)return"";Wo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{Wo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ir(e):""}function jp(e){switch(e.tag){case 5:return ir(e.type);case 16:return ir("Lazy");case 13:return ir("Suspense");case 19:return ir("SuspenseList");case 0:case 2:case 15:return e=Ho(e.type,!1),e;case 11:return e=Ho(e.type.render,!1),e;case 1:return e=Ho(e.type,!0),e;default:return""}}function Pl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case pn:return"Fragment";case fn:return"Portal";case Al:return"Profiler";case Ta:return"StrictMode";case Cl:return"Suspense";case El:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ac:return(e.displayName||"Context")+".Consumer";case jc:return(e._context.displayName||"Context")+".Provider";case Ra:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case za:return t=e.displayName||null,t!==null?t:Pl(e.type)||"Memo";case St:t=e._payload,e=e._init;try{return Pl(e(t))}catch{}}return null}function Ap(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pl(t);case 8:return t===Ta?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ec(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Cp(e){var t=Ec(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xr(e){e._valueTracker||(e._valueTracker=Cp(e))}function Pc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ec(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Bi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Nl(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ps(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Nc(e,t){t=t.checked,t!=null&&_a(e,"checked",t,!1)}function _l(e,t){Nc(e,t);var n=Ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Tl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Tl(e,t.type,Ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ns(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Tl(e,t,n){(t!=="number"||Bi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var or=Array.isArray;function An(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ft(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Rl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function _s(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(or(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ft(n)}}function _c(e,t){var n=Ft(t.value),r=Ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ts(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Tc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Tc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zr,Rc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Zr=Zr||document.createElement("div"),Zr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Zr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function xr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var sr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ep=["Webkit","ms","Moz","O"];Object.keys(sr).forEach(function(e){Ep.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),sr[t]=sr[e]})});function zc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||sr.hasOwnProperty(e)&&sr[e]?(""+t).trim():t+"px"}function Lc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=zc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Pp=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ll(e,t){if(t){if(Pp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Ol(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ml=null;function La(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Il=null,Cn=null,En=null;function Rs(e){if(e=Wr(e)){if(typeof Il!="function")throw Error(S(280));var t=e.stateNode;t&&(t=yo(t),Il(e.stateNode,e.type,t))}}function Oc(e){Cn?En?En.push(e):En=[e]:Cn=e}function Mc(){if(Cn){var e=Cn,t=En;if(En=Cn=null,Rs(e),t)for(e=0;e<t.length;e++)Rs(t[e])}}function Ic(e,t){return e(t)}function Dc(){}var $o=!1;function Fc(e,t,n){if($o)return e(t,n);$o=!0;try{return Ic(e,t,n)}finally{$o=!1,(Cn!==null||En!==null)&&(Dc(),Mc())}}function yr(e,t){var n=e.stateNode;if(n===null)return null;var r=yo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Dl=!1;if(mt)try{var Yn={};Object.defineProperty(Yn,"passive",{get:function(){Dl=!0}}),window.addEventListener("test",Yn,Yn),window.removeEventListener("test",Yn,Yn)}catch{Dl=!1}function Np(e,t,n,r,i,o,l,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var ur=!1,bi=null,Wi=!1,Fl=null,_p={onError:function(e){ur=!0,bi=e}};function Tp(e,t,n,r,i,o,l,s,u){ur=!1,bi=null,Np.apply(_p,arguments)}function Rp(e,t,n,r,i,o,l,s,u){if(Tp.apply(this,arguments),ur){if(ur){var c=bi;ur=!1,bi=null}else throw Error(S(198));Wi||(Wi=!0,Fl=c)}}function ln(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Uc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function zs(e){if(ln(e)!==e)throw Error(S(188))}function zp(e){var t=e.alternate;if(!t){if(t=ln(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return zs(i),e;if(o===r)return zs(i),t;o=o.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Bc(e){return e=zp(e),e!==null?bc(e):null}function bc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=bc(e);if(t!==null)return t;e=e.sibling}return null}var Wc=ze.unstable_scheduleCallback,Ls=ze.unstable_cancelCallback,Lp=ze.unstable_shouldYield,Op=ze.unstable_requestPaint,X=ze.unstable_now,Mp=ze.unstable_getCurrentPriorityLevel,Oa=ze.unstable_ImmediatePriority,Hc=ze.unstable_UserBlockingPriority,Hi=ze.unstable_NormalPriority,Ip=ze.unstable_LowPriority,$c=ze.unstable_IdlePriority,mo=null,Je=null;function Dp(e){if(Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(mo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:Bp,Fp=Math.log,Up=Math.LN2;function Bp(e){return e>>>=0,e===0?32:31-(Fp(e)/Up|0)|0}var qr=64,Jr=4194304;function lr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function $i(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=lr(s):(o&=l,o!==0&&(r=lr(o)))}else l=n&~i,l!==0?r=lr(l):o!==0&&(r=lr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ve(t),i=1<<n,r|=e[n],t&=~i;return r}function bp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ve(o),s=1<<l,u=i[l];u===-1?(!(s&n)||s&r)&&(i[l]=bp(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function Ul(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Vc(){var e=qr;return qr<<=1,!(qr&4194240)&&(qr=64),e}function Vo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Br(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ve(t),e[t]=n}function Hp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ve(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ma(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ve(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var U=0;function Qc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Kc,Ia,Yc,Gc,Xc,Bl=!1,ei=[],_t=null,Tt=null,Rt=null,wr=new Map,kr=new Map,At=[],$p="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Os(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":Tt=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":wr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":kr.delete(t.pointerId)}}function Gn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Wr(t),t!==null&&Ia(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Vp(e,t,n,r,i){switch(t){case"focusin":return _t=Gn(_t,e,t,n,r,i),!0;case"dragenter":return Tt=Gn(Tt,e,t,n,r,i),!0;case"mouseover":return Rt=Gn(Rt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return wr.set(o,Gn(wr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,kr.set(o,Gn(kr.get(o)||null,e,t,n,r,i)),!0}return!1}function Zc(e){var t=Yt(e.target);if(t!==null){var n=ln(t);if(n!==null){if(t=n.tag,t===13){if(t=Uc(n),t!==null){e.blockedOn=t,Xc(e.priority,function(){Yc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ml=r,n.target.dispatchEvent(r),Ml=null}else return t=Wr(n),t!==null&&Ia(t),e.blockedOn=n,!1;t.shift()}return!0}function Ms(e,t,n){Pi(e)&&n.delete(t)}function Qp(){Bl=!1,_t!==null&&Pi(_t)&&(_t=null),Tt!==null&&Pi(Tt)&&(Tt=null),Rt!==null&&Pi(Rt)&&(Rt=null),wr.forEach(Ms),kr.forEach(Ms)}function Xn(e,t){e.blockedOn===t&&(e.blockedOn=null,Bl||(Bl=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,Qp)))}function Sr(e){function t(i){return Xn(i,e)}if(0<ei.length){Xn(ei[0],e);for(var n=1;n<ei.length;n++){var r=ei[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_t!==null&&Xn(_t,e),Tt!==null&&Xn(Tt,e),Rt!==null&&Xn(Rt,e),wr.forEach(t),kr.forEach(t),n=0;n<At.length;n++)r=At[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<At.length&&(n=At[0],n.blockedOn===null);)Zc(n),n.blockedOn===null&&At.shift()}var Pn=yt.ReactCurrentBatchConfig,Vi=!0;function Kp(e,t,n,r){var i=U,o=Pn.transition;Pn.transition=null;try{U=1,Da(e,t,n,r)}finally{U=i,Pn.transition=o}}function Yp(e,t,n,r){var i=U,o=Pn.transition;Pn.transition=null;try{U=4,Da(e,t,n,r)}finally{U=i,Pn.transition=o}}function Da(e,t,n,r){if(Vi){var i=bl(e,t,n,r);if(i===null)tl(e,t,r,Qi,n),Os(e,r);else if(Vp(i,e,t,n,r))r.stopPropagation();else if(Os(e,r),t&4&&-1<$p.indexOf(e)){for(;i!==null;){var o=Wr(i);if(o!==null&&Kc(o),o=bl(e,t,n,r),o===null&&tl(e,t,r,Qi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else tl(e,t,r,null,n)}}var Qi=null;function bl(e,t,n,r){if(Qi=null,e=La(r),e=Yt(e),e!==null)if(t=ln(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Uc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qi=e,null}function qc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mp()){case Oa:return 1;case Hc:return 4;case Hi:case Ip:return 16;case $c:return 536870912;default:return 16}default:return 16}}var Et=null,Fa=null,Ni=null;function Jc(){if(Ni)return Ni;var e,t=Fa,n=t.length,r,i="value"in Et?Et.value:Et.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Ni=i.slice(e,1<r?1-r:void 0)}function _i(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ti(){return!0}function Is(){return!1}function Oe(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ti:Is,this.isPropagationStopped=Is,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ti)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ti)},persist:function(){},isPersistent:ti}),t}var bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ua=Oe(bn),br=K({},bn,{view:0,detail:0}),Gp=Oe(br),Qo,Ko,Zn,go=K({},br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ba,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zn&&(Zn&&e.type==="mousemove"?(Qo=e.screenX-Zn.screenX,Ko=e.screenY-Zn.screenY):Ko=Qo=0,Zn=e),Qo)},movementY:function(e){return"movementY"in e?e.movementY:Ko}}),Ds=Oe(go),Xp=K({},go,{dataTransfer:0}),Zp=Oe(Xp),qp=K({},br,{relatedTarget:0}),Yo=Oe(qp),Jp=K({},bn,{animationName:0,elapsedTime:0,pseudoElement:0}),eh=Oe(Jp),th=K({},bn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),nh=Oe(th),rh=K({},bn,{data:0}),Fs=Oe(rh),ih={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ah(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lh[e])?!!t[e]:!1}function Ba(){return ah}var sh=K({},br,{key:function(e){if(e.key){var t=ih[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_i(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?oh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ba,charCode:function(e){return e.type==="keypress"?_i(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_i(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),uh=Oe(sh),ch=K({},go,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Us=Oe(ch),dh=K({},br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ba}),fh=Oe(dh),ph=K({},bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),hh=Oe(ph),mh=K({},go,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gh=Oe(mh),vh=[9,13,27,32],ba=mt&&"CompositionEvent"in window,cr=null;mt&&"documentMode"in document&&(cr=document.documentMode);var xh=mt&&"TextEvent"in window&&!cr,ed=mt&&(!ba||cr&&8<cr&&11>=cr),Bs=" ",bs=!1;function td(e,t){switch(e){case"keyup":return vh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hn=!1;function yh(e,t){switch(e){case"compositionend":return nd(t);case"keypress":return t.which!==32?null:(bs=!0,Bs);case"textInput":return e=t.data,e===Bs&&bs?null:e;default:return null}}function wh(e,t){if(hn)return e==="compositionend"||!ba&&td(e,t)?(e=Jc(),Ni=Fa=Et=null,hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ed&&t.locale!=="ko"?null:t.data;default:return null}}var kh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ws(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!kh[e.type]:t==="textarea"}function rd(e,t,n,r){Oc(r),t=Ki(t,"onChange"),0<t.length&&(n=new Ua("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var dr=null,jr=null;function Sh(e){hd(e,0)}function vo(e){var t=vn(e);if(Pc(t))return e}function jh(e,t){if(e==="change")return t}var id=!1;if(mt){var Go;if(mt){var Xo="oninput"in document;if(!Xo){var Hs=document.createElement("div");Hs.setAttribute("oninput","return;"),Xo=typeof Hs.oninput=="function"}Go=Xo}else Go=!1;id=Go&&(!document.documentMode||9<document.documentMode)}function $s(){dr&&(dr.detachEvent("onpropertychange",od),jr=dr=null)}function od(e){if(e.propertyName==="value"&&vo(jr)){var t=[];rd(t,jr,e,La(e)),Fc(Sh,t)}}function Ah(e,t,n){e==="focusin"?($s(),dr=t,jr=n,dr.attachEvent("onpropertychange",od)):e==="focusout"&&$s()}function Ch(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vo(jr)}function Eh(e,t){if(e==="click")return vo(t)}function Ph(e,t){if(e==="input"||e==="change")return vo(t)}function Nh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ke=typeof Object.is=="function"?Object.is:Nh;function Ar(e,t){if(Ke(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!jl.call(t,i)||!Ke(e[i],t[i]))return!1}return!0}function Vs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qs(e,t){var n=Vs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vs(n)}}function ld(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ld(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ad(){for(var e=window,t=Bi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bi(e.document)}return t}function Wa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function _h(e){var t=ad(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ld(n.ownerDocument.documentElement,n)){if(r!==null&&Wa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Qs(n,o);var l=Qs(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Th=mt&&"documentMode"in document&&11>=document.documentMode,mn=null,Wl=null,fr=null,Hl=!1;function Ks(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hl||mn==null||mn!==Bi(r)||(r=mn,"selectionStart"in r&&Wa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fr&&Ar(fr,r)||(fr=r,r=Ki(Wl,"onSelect"),0<r.length&&(t=new Ua("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=mn)))}function ni(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var gn={animationend:ni("Animation","AnimationEnd"),animationiteration:ni("Animation","AnimationIteration"),animationstart:ni("Animation","AnimationStart"),transitionend:ni("Transition","TransitionEnd")},Zo={},sd={};mt&&(sd=document.createElement("div").style,"AnimationEvent"in window||(delete gn.animationend.animation,delete gn.animationiteration.animation,delete gn.animationstart.animation),"TransitionEvent"in window||delete gn.transitionend.transition);function xo(e){if(Zo[e])return Zo[e];if(!gn[e])return e;var t=gn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in sd)return Zo[e]=t[n];return e}var ud=xo("animationend"),cd=xo("animationiteration"),dd=xo("animationstart"),fd=xo("transitionend"),pd=new Map,Ys="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bt(e,t){pd.set(e,t),on(t,[e])}for(var qo=0;qo<Ys.length;qo++){var Jo=Ys[qo],Rh=Jo.toLowerCase(),zh=Jo[0].toUpperCase()+Jo.slice(1);Bt(Rh,"on"+zh)}Bt(ud,"onAnimationEnd");Bt(cd,"onAnimationIteration");Bt(dd,"onAnimationStart");Bt("dblclick","onDoubleClick");Bt("focusin","onFocus");Bt("focusout","onBlur");Bt(fd,"onTransitionEnd");Rn("onMouseEnter",["mouseout","mouseover"]);Rn("onMouseLeave",["mouseout","mouseover"]);Rn("onPointerEnter",["pointerout","pointerover"]);Rn("onPointerLeave",["pointerout","pointerover"]);on("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));on("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));on("onBeforeInput",["compositionend","keypress","textInput","paste"]);on("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));on("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));on("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lh=new Set("cancel close invalid load scroll toggle".split(" ").concat(ar));function Gs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Rp(r,t,void 0,e),e.currentTarget=null}function hd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==o&&i.isPropagationStopped())break e;Gs(i,s,c),o=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,c=s.currentTarget,s=s.listener,u!==o&&i.isPropagationStopped())break e;Gs(i,s,c),o=u}}}if(Wi)throw e=Fl,Wi=!1,Fl=null,e}function W(e,t){var n=t[Yl];n===void 0&&(n=t[Yl]=new Set);var r=e+"__bubble";n.has(r)||(md(t,e,2,!1),n.add(r))}function el(e,t,n){var r=0;t&&(r|=4),md(n,e,r,t)}var ri="_reactListening"+Math.random().toString(36).slice(2);function Cr(e){if(!e[ri]){e[ri]=!0,Sc.forEach(function(n){n!=="selectionchange"&&(Lh.has(n)||el(n,!1,e),el(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ri]||(t[ri]=!0,el("selectionchange",!1,t))}}function md(e,t,n,r){switch(qc(t)){case 1:var i=Kp;break;case 4:i=Yp;break;default:i=Da}n=i.bind(null,t,n,e),i=void 0,!Dl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function tl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;s!==null;){if(l=Yt(s),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}s=s.parentNode}}r=r.return}Fc(function(){var c=o,h=La(n),m=[];e:{var g=pd.get(e);if(g!==void 0){var k=Ua,y=e;switch(e){case"keypress":if(_i(n)===0)break e;case"keydown":case"keyup":k=uh;break;case"focusin":y="focus",k=Yo;break;case"focusout":y="blur",k=Yo;break;case"beforeblur":case"afterblur":k=Yo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Ds;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Zp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=fh;break;case ud:case cd:case dd:k=eh;break;case fd:k=hh;break;case"scroll":k=Gp;break;case"wheel":k=gh;break;case"copy":case"cut":case"paste":k=nh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Us}var v=(t&4)!==0,j=!v&&e==="scroll",f=v?g!==null?g+"Capture":null:g;v=[];for(var d=c,p;d!==null;){p=d;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,f!==null&&(x=yr(d,f),x!=null&&v.push(Er(d,x,p)))),j)break;d=d.return}0<v.length&&(g=new k(g,y,null,n,h),m.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",g&&n!==Ml&&(y=n.relatedTarget||n.fromElement)&&(Yt(y)||y[gt]))break e;if((k||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,k?(y=n.relatedTarget||n.toElement,k=c,y=y?Yt(y):null,y!==null&&(j=ln(y),y!==j||y.tag!==5&&y.tag!==6)&&(y=null)):(k=null,y=c),k!==y)){if(v=Ds,x="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(v=Us,x="onPointerLeave",f="onPointerEnter",d="pointer"),j=k==null?g:vn(k),p=y==null?g:vn(y),g=new v(x,d+"leave",k,n,h),g.target=j,g.relatedTarget=p,x=null,Yt(h)===c&&(v=new v(f,d+"enter",y,n,h),v.target=p,v.relatedTarget=j,x=v),j=x,k&&y)t:{for(v=k,f=y,d=0,p=v;p;p=sn(p))d++;for(p=0,x=f;x;x=sn(x))p++;for(;0<d-p;)v=sn(v),d--;for(;0<p-d;)f=sn(f),p--;for(;d--;){if(v===f||f!==null&&v===f.alternate)break t;v=sn(v),f=sn(f)}v=null}else v=null;k!==null&&Xs(m,g,k,v,!1),y!==null&&j!==null&&Xs(m,j,y,v,!0)}}e:{if(g=c?vn(c):window,k=g.nodeName&&g.nodeName.toLowerCase(),k==="select"||k==="input"&&g.type==="file")var C=jh;else if(Ws(g))if(id)C=Ph;else{C=Ch;var E=Ah}else(k=g.nodeName)&&k.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(C=Eh);if(C&&(C=C(e,c))){rd(m,C,n,h);break e}E&&E(e,g,c),e==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&Tl(g,"number",g.value)}switch(E=c?vn(c):window,e){case"focusin":(Ws(E)||E.contentEditable==="true")&&(mn=E,Wl=c,fr=null);break;case"focusout":fr=Wl=mn=null;break;case"mousedown":Hl=!0;break;case"contextmenu":case"mouseup":case"dragend":Hl=!1,Ks(m,n,h);break;case"selectionchange":if(Th)break;case"keydown":case"keyup":Ks(m,n,h)}var A;if(ba)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else hn?td(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(ed&&n.locale!=="ko"&&(hn||T!=="onCompositionStart"?T==="onCompositionEnd"&&hn&&(A=Jc()):(Et=h,Fa="value"in Et?Et.value:Et.textContent,hn=!0)),E=Ki(c,T),0<E.length&&(T=new Fs(T,e,null,n,h),m.push({event:T,listeners:E}),A?T.data=A:(A=nd(n),A!==null&&(T.data=A)))),(A=xh?yh(e,n):wh(e,n))&&(c=Ki(c,"onBeforeInput"),0<c.length&&(h=new Fs("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=A))}hd(m,t)})}function Er(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ki(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=yr(e,n),o!=null&&r.unshift(Er(e,o,i)),o=yr(e,t),o!=null&&r.push(Er(e,o,i))),e=e.return}return r}function sn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xs(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,i?(u=yr(n,o),u!=null&&l.unshift(Er(n,u,s))):i||(u=yr(n,o),u!=null&&l.push(Er(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Oh=/\r\n?/g,Mh=/\u0000|\uFFFD/g;function Zs(e){return(typeof e=="string"?e:""+e).replace(Oh,`
`).replace(Mh,"")}function ii(e,t,n){if(t=Zs(t),Zs(e)!==t&&n)throw Error(S(425))}function Yi(){}var $l=null,Vl=null;function Ql(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kl=typeof setTimeout=="function"?setTimeout:void 0,Ih=typeof clearTimeout=="function"?clearTimeout:void 0,qs=typeof Promise=="function"?Promise:void 0,Dh=typeof queueMicrotask=="function"?queueMicrotask:typeof qs<"u"?function(e){return qs.resolve(null).then(e).catch(Fh)}:Kl;function Fh(e){setTimeout(function(){throw e})}function nl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Sr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Sr(t)}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Js(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Wn=Math.random().toString(36).slice(2),qe="__reactFiber$"+Wn,Pr="__reactProps$"+Wn,gt="__reactContainer$"+Wn,Yl="__reactEvents$"+Wn,Uh="__reactListeners$"+Wn,Bh="__reactHandles$"+Wn;function Yt(e){var t=e[qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Js(e);e!==null;){if(n=e[qe])return n;e=Js(e)}return t}e=n,n=e.parentNode}return null}function Wr(e){return e=e[qe]||e[gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function yo(e){return e[Pr]||null}var Gl=[],xn=-1;function bt(e){return{current:e}}function H(e){0>xn||(e.current=Gl[xn],Gl[xn]=null,xn--)}function b(e,t){xn++,Gl[xn]=e.current,e.current=t}var Ut={},ge=bt(Ut),je=bt(!1),Jt=Ut;function zn(e,t){var n=e.type.contextTypes;if(!n)return Ut;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ae(e){return e=e.childContextTypes,e!=null}function Gi(){H(je),H(ge)}function eu(e,t,n){if(ge.current!==Ut)throw Error(S(168));b(ge,t),b(je,n)}function gd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,Ap(e)||"Unknown",i));return K({},n,r)}function Xi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ut,Jt=ge.current,b(ge,e),b(je,je.current),!0}function tu(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=gd(e,t,Jt),r.__reactInternalMemoizedMergedChildContext=e,H(je),H(ge),b(ge,e)):H(je),b(je,n)}var dt=null,wo=!1,rl=!1;function vd(e){dt===null?dt=[e]:dt.push(e)}function bh(e){wo=!0,vd(e)}function Wt(){if(!rl&&dt!==null){rl=!0;var e=0,t=U;try{var n=dt;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}dt=null,wo=!1}catch(i){throw dt!==null&&(dt=dt.slice(e+1)),Wc(Oa,Wt),i}finally{U=t,rl=!1}}return null}var yn=[],wn=0,Zi=null,qi=0,Me=[],Ie=0,en=null,ft=1,pt="";function Qt(e,t){yn[wn++]=qi,yn[wn++]=Zi,Zi=e,qi=t}function xd(e,t,n){Me[Ie++]=ft,Me[Ie++]=pt,Me[Ie++]=en,en=e;var r=ft;e=pt;var i=32-Ve(r)-1;r&=~(1<<i),n+=1;var o=32-Ve(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,ft=1<<32-Ve(t)+i|n<<i|r,pt=o+e}else ft=1<<o|n<<i|r,pt=e}function Ha(e){e.return!==null&&(Qt(e,1),xd(e,1,0))}function $a(e){for(;e===Zi;)Zi=yn[--wn],yn[wn]=null,qi=yn[--wn],yn[wn]=null;for(;e===en;)en=Me[--Ie],Me[Ie]=null,pt=Me[--Ie],Me[Ie]=null,ft=Me[--Ie],Me[Ie]=null}var Te=null,_e=null,$=!1,$e=null;function yd(e,t){var n=De(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function nu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Te=e,_e=zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Te=e,_e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=en!==null?{id:ft,overflow:pt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=De(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Te=e,_e=null,!0):!1;default:return!1}}function Xl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Zl(e){if($){var t=_e;if(t){var n=t;if(!nu(e,t)){if(Xl(e))throw Error(S(418));t=zt(n.nextSibling);var r=Te;t&&nu(e,t)?yd(r,n):(e.flags=e.flags&-4097|2,$=!1,Te=e)}}else{if(Xl(e))throw Error(S(418));e.flags=e.flags&-4097|2,$=!1,Te=e}}}function ru(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Te=e}function oi(e){if(e!==Te)return!1;if(!$)return ru(e),$=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ql(e.type,e.memoizedProps)),t&&(t=_e)){if(Xl(e))throw wd(),Error(S(418));for(;t;)yd(e,t),t=zt(t.nextSibling)}if(ru(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){_e=zt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}_e=null}}else _e=Te?zt(e.stateNode.nextSibling):null;return!0}function wd(){for(var e=_e;e;)e=zt(e.nextSibling)}function Ln(){_e=Te=null,$=!1}function Va(e){$e===null?$e=[e]:$e.push(e)}var Wh=yt.ReactCurrentBatchConfig;function We(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ji=bt(null),eo=null,kn=null,Qa=null;function Ka(){Qa=kn=eo=null}function Ya(e){var t=Ji.current;H(Ji),e._currentValue=t}function ql(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Nn(e,t){eo=e,Qa=kn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function Ue(e){var t=e._currentValue;if(Qa!==e)if(e={context:e,memoizedValue:t,next:null},kn===null){if(eo===null)throw Error(S(308));kn=e,eo.dependencies={lanes:0,firstContext:e}}else kn=kn.next=e;return t}var Gt=null;function Ga(e){Gt===null?Gt=[e]:Gt.push(e)}function kd(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ga(t)):(n.next=i.next,i.next=n),t.interleaved=n,vt(e,r)}function vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var jt=!1;function Xa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Lt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,vt(e,n)}return i=r.interleaved,i===null?(t.next=t,Ga(r)):(t.next=i.next,i.next=t),r.interleaved=t,vt(e,n)}function Ti(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ma(e,n)}}function iu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function to(e,t,n,r){var i=e.updateQueue;jt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,c=u.next;u.next=null,l===null?o=c:l.next=c,l=u;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==l&&(s===null?h.firstBaseUpdate=c:s.next=c,h.lastBaseUpdate=u))}if(o!==null){var m=i.baseState;l=0,h=c=u=null,s=o;do{var g=s.lane,k=s.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:k,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,v=s;switch(g=t,k=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){m=y.call(k,m,g);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,g=typeof y=="function"?y.call(k,m,g):y,g==null)break e;m=K({},m,g);break e;case 2:jt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else k={eventTime:k,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(c=h=k,u=m):h=h.next=k,l|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);nn|=l,e.lanes=l,e.memoizedState=m}}function ou(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var jd=new kc.Component().refs;function Jl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ko={isMounted:function(e){return(e=e._reactInternals)?ln(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=xe(),i=Mt(e),o=ht(r,i);o.payload=t,n!=null&&(o.callback=n),t=Lt(e,o,i),t!==null&&(Qe(t,e,i,r),Ti(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=xe(),i=Mt(e),o=ht(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Lt(e,o,i),t!==null&&(Qe(t,e,i,r),Ti(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=xe(),r=Mt(e),i=ht(n,r);i.tag=2,t!=null&&(i.callback=t),t=Lt(e,i,r),t!==null&&(Qe(t,e,r,n),Ti(t,e,r))}};function lu(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Ar(n,r)||!Ar(i,o):!0}function Ad(e,t,n){var r=!1,i=Ut,o=t.contextType;return typeof o=="object"&&o!==null?o=Ue(o):(i=Ae(t)?Jt:ge.current,r=t.contextTypes,o=(r=r!=null)?zn(e,i):Ut),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ko,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function au(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ko.enqueueReplaceState(t,t.state,null)}function ea(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=jd,Xa(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ue(o):(o=Ae(t)?Jt:ge.current,i.context=zn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Jl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ko.enqueueReplaceState(i,i.state,null),to(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function qn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;s===jd&&(s=i.refs={}),l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function li(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function su(e){var t=e._init;return t(e._payload)}function Cd(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=It(f,d),f.index=0,f.sibling=null,f}function o(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,p,x){return d===null||d.tag!==6?(d=cl(p,f.mode,x),d.return=f,d):(d=i(d,p),d.return=f,d)}function u(f,d,p,x){var C=p.type;return C===pn?h(f,d,p.props.children,x,p.key):d!==null&&(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===St&&su(C)===d.type)?(x=i(d,p.props),x.ref=qn(f,d,p),x.return=f,x):(x=Ii(p.type,p.key,p.props,null,f.mode,x),x.ref=qn(f,d,p),x.return=f,x)}function c(f,d,p,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=dl(p,f.mode,x),d.return=f,d):(d=i(d,p.children||[]),d.return=f,d)}function h(f,d,p,x,C){return d===null||d.tag!==7?(d=qt(p,f.mode,x,C),d.return=f,d):(d=i(d,p),d.return=f,d)}function m(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=cl(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Gr:return p=Ii(d.type,d.key,d.props,null,f.mode,p),p.ref=qn(f,null,d),p.return=f,p;case fn:return d=dl(d,f.mode,p),d.return=f,d;case St:var x=d._init;return m(f,x(d._payload),p)}if(or(d)||Kn(d))return d=qt(d,f.mode,p,null),d.return=f,d;li(f,d)}return null}function g(f,d,p,x){var C=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return C!==null?null:s(f,d,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Gr:return p.key===C?u(f,d,p,x):null;case fn:return p.key===C?c(f,d,p,x):null;case St:return C=p._init,g(f,d,C(p._payload),x)}if(or(p)||Kn(p))return C!==null?null:h(f,d,p,x,null);li(f,p)}return null}function k(f,d,p,x,C){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(p)||null,s(d,f,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Gr:return f=f.get(x.key===null?p:x.key)||null,u(d,f,x,C);case fn:return f=f.get(x.key===null?p:x.key)||null,c(d,f,x,C);case St:var E=x._init;return k(f,d,p,E(x._payload),C)}if(or(x)||Kn(x))return f=f.get(p)||null,h(d,f,x,C,null);li(d,x)}return null}function y(f,d,p,x){for(var C=null,E=null,A=d,T=d=0,B=null;A!==null&&T<p.length;T++){A.index>T?(B=A,A=null):B=A.sibling;var R=g(f,A,p[T],x);if(R===null){A===null&&(A=B);break}e&&A&&R.alternate===null&&t(f,A),d=o(R,d,T),E===null?C=R:E.sibling=R,E=R,A=B}if(T===p.length)return n(f,A),$&&Qt(f,T),C;if(A===null){for(;T<p.length;T++)A=m(f,p[T],x),A!==null&&(d=o(A,d,T),E===null?C=A:E.sibling=A,E=A);return $&&Qt(f,T),C}for(A=r(f,A);T<p.length;T++)B=k(A,f,T,p[T],x),B!==null&&(e&&B.alternate!==null&&A.delete(B.key===null?T:B.key),d=o(B,d,T),E===null?C=B:E.sibling=B,E=B);return e&&A.forEach(function(Pe){return t(f,Pe)}),$&&Qt(f,T),C}function v(f,d,p,x){var C=Kn(p);if(typeof C!="function")throw Error(S(150));if(p=C.call(p),p==null)throw Error(S(151));for(var E=C=null,A=d,T=d=0,B=null,R=p.next();A!==null&&!R.done;T++,R=p.next()){A.index>T?(B=A,A=null):B=A.sibling;var Pe=g(f,A,R.value,x);if(Pe===null){A===null&&(A=B);break}e&&A&&Pe.alternate===null&&t(f,A),d=o(Pe,d,T),E===null?C=Pe:E.sibling=Pe,E=Pe,A=B}if(R.done)return n(f,A),$&&Qt(f,T),C;if(A===null){for(;!R.done;T++,R=p.next())R=m(f,R.value,x),R!==null&&(d=o(R,d,T),E===null?C=R:E.sibling=R,E=R);return $&&Qt(f,T),C}for(A=r(f,A);!R.done;T++,R=p.next())R=k(A,f,T,R.value,x),R!==null&&(e&&R.alternate!==null&&A.delete(R.key===null?T:R.key),d=o(R,d,T),E===null?C=R:E.sibling=R,E=R);return e&&A.forEach(function(Vn){return t(f,Vn)}),$&&Qt(f,T),C}function j(f,d,p,x){if(typeof p=="object"&&p!==null&&p.type===pn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Gr:e:{for(var C=p.key,E=d;E!==null;){if(E.key===C){if(C=p.type,C===pn){if(E.tag===7){n(f,E.sibling),d=i(E,p.props.children),d.return=f,f=d;break e}}else if(E.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===St&&su(C)===E.type){n(f,E.sibling),d=i(E,p.props),d.ref=qn(f,E,p),d.return=f,f=d;break e}n(f,E);break}else t(f,E);E=E.sibling}p.type===pn?(d=qt(p.props.children,f.mode,x,p.key),d.return=f,f=d):(x=Ii(p.type,p.key,p.props,null,f.mode,x),x.ref=qn(f,d,p),x.return=f,f=x)}return l(f);case fn:e:{for(E=p.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=i(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=dl(p,f.mode,x),d.return=f,f=d}return l(f);case St:return E=p._init,j(f,d,E(p._payload),x)}if(or(p))return y(f,d,p,x);if(Kn(p))return v(f,d,p,x);li(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=i(d,p),d.return=f,f=d):(n(f,d),d=cl(p,f.mode,x),d.return=f,f=d),l(f)):n(f,d)}return j}var On=Cd(!0),Ed=Cd(!1),Hr={},et=bt(Hr),Nr=bt(Hr),_r=bt(Hr);function Xt(e){if(e===Hr)throw Error(S(174));return e}function Za(e,t){switch(b(_r,t),b(Nr,e),b(et,Hr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:zl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=zl(t,e)}H(et),b(et,t)}function Mn(){H(et),H(Nr),H(_r)}function Pd(e){Xt(_r.current);var t=Xt(et.current),n=zl(t,e.type);t!==n&&(b(Nr,e),b(et,n))}function qa(e){Nr.current===e&&(H(et),H(Nr))}var V=bt(0);function no(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var il=[];function Ja(){for(var e=0;e<il.length;e++)il[e]._workInProgressVersionPrimary=null;il.length=0}var Ri=yt.ReactCurrentDispatcher,ol=yt.ReactCurrentBatchConfig,tn=0,Q=null,ee=null,re=null,ro=!1,pr=!1,Tr=0,Hh=0;function ue(){throw Error(S(321))}function es(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ke(e[n],t[n]))return!1;return!0}function ts(e,t,n,r,i,o){if(tn=o,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ri.current=e===null||e.memoizedState===null?Kh:Yh,e=n(r,i),pr){o=0;do{if(pr=!1,Tr=0,25<=o)throw Error(S(301));o+=1,re=ee=null,t.updateQueue=null,Ri.current=Gh,e=n(r,i)}while(pr)}if(Ri.current=io,t=ee!==null&&ee.next!==null,tn=0,re=ee=Q=null,ro=!1,t)throw Error(S(300));return e}function ns(){var e=Tr!==0;return Tr=0,e}function Ge(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?Q.memoizedState=re=e:re=re.next=e,re}function Be(){if(ee===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=re===null?Q.memoizedState:re.next;if(t!==null)re=t,ee=e;else{if(e===null)throw Error(S(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},re===null?Q.memoizedState=re=e:re=re.next=e}return re}function Rr(e,t){return typeof t=="function"?t(e):t}function ll(e){var t=Be(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=ee,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,u=null,c=o;do{var h=c.lane;if((tn&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=m,l=r):u=u.next=m,Q.lanes|=h,nn|=h}c=c.next}while(c!==null&&c!==o);u===null?l=r:u.next=s,Ke(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Q.lanes|=o,nn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function al(e){var t=Be(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Ke(o,t.memoizedState)||(Se=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Nd(){}function _d(e,t){var n=Q,r=Be(),i=t(),o=!Ke(r.memoizedState,i);if(o&&(r.memoizedState=i,Se=!0),r=r.queue,rs(zd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||re!==null&&re.memoizedState.tag&1){if(n.flags|=2048,zr(9,Rd.bind(null,n,r,i,t),void 0,null),ie===null)throw Error(S(349));tn&30||Td(n,t,i)}return i}function Td(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Rd(e,t,n,r){t.value=n,t.getSnapshot=r,Ld(t)&&Od(e)}function zd(e,t,n){return n(function(){Ld(t)&&Od(e)})}function Ld(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ke(e,n)}catch{return!0}}function Od(e){var t=vt(e,1);t!==null&&Qe(t,e,1,-1)}function uu(e){var t=Ge();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rr,lastRenderedState:e},t.queue=e,e=e.dispatch=Qh.bind(null,Q,e),[t.memoizedState,e]}function zr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Md(){return Be().memoizedState}function zi(e,t,n,r){var i=Ge();Q.flags|=e,i.memoizedState=zr(1|t,n,void 0,r===void 0?null:r)}function So(e,t,n,r){var i=Be();r=r===void 0?null:r;var o=void 0;if(ee!==null){var l=ee.memoizedState;if(o=l.destroy,r!==null&&es(r,l.deps)){i.memoizedState=zr(t,n,o,r);return}}Q.flags|=e,i.memoizedState=zr(1|t,n,o,r)}function cu(e,t){return zi(8390656,8,e,t)}function rs(e,t){return So(2048,8,e,t)}function Id(e,t){return So(4,2,e,t)}function Dd(e,t){return So(4,4,e,t)}function Fd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ud(e,t,n){return n=n!=null?n.concat([e]):null,So(4,4,Fd.bind(null,t,e),n)}function is(){}function Bd(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&es(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bd(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&es(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Wd(e,t,n){return tn&21?(Ke(n,t)||(n=Vc(),Q.lanes|=n,nn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function $h(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=ol.transition;ol.transition={};try{e(!1),t()}finally{U=n,ol.transition=r}}function Hd(){return Be().memoizedState}function Vh(e,t,n){var r=Mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$d(e))Vd(t,n);else if(n=kd(e,t,n,r),n!==null){var i=xe();Qe(n,e,r,i),Qd(n,t,r)}}function Qh(e,t,n){var r=Mt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($d(e))Vd(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,Ke(s,l)){var u=t.interleaved;u===null?(i.next=i,Ga(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=kd(e,t,i,r),n!==null&&(i=xe(),Qe(n,e,r,i),Qd(n,t,r))}}function $d(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function Vd(e,t){pr=ro=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ma(e,n)}}var io={readContext:Ue,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},Kh={readContext:Ue,useCallback:function(e,t){return Ge().memoizedState=[e,t===void 0?null:t],e},useContext:Ue,useEffect:cu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,zi(4194308,4,Fd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zi(4194308,4,e,t)},useInsertionEffect:function(e,t){return zi(4,2,e,t)},useMemo:function(e,t){var n=Ge();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ge();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Vh.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var t=Ge();return e={current:e},t.memoizedState=e},useState:uu,useDebugValue:is,useDeferredValue:function(e){return Ge().memoizedState=e},useTransition:function(){var e=uu(!1),t=e[0];return e=$h.bind(null,e[1]),Ge().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Q,i=Ge();if($){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ie===null)throw Error(S(349));tn&30||Td(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,cu(zd.bind(null,r,o,e),[e]),r.flags|=2048,zr(9,Rd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ge(),t=ie.identifierPrefix;if($){var n=pt,r=ft;n=(r&~(1<<32-Ve(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Tr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Hh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Yh={readContext:Ue,useCallback:Bd,useContext:Ue,useEffect:rs,useImperativeHandle:Ud,useInsertionEffect:Id,useLayoutEffect:Dd,useMemo:bd,useReducer:ll,useRef:Md,useState:function(){return ll(Rr)},useDebugValue:is,useDeferredValue:function(e){var t=Be();return Wd(t,ee.memoizedState,e)},useTransition:function(){var e=ll(Rr)[0],t=Be().memoizedState;return[e,t]},useMutableSource:Nd,useSyncExternalStore:_d,useId:Hd,unstable_isNewReconciler:!1},Gh={readContext:Ue,useCallback:Bd,useContext:Ue,useEffect:rs,useImperativeHandle:Ud,useInsertionEffect:Id,useLayoutEffect:Dd,useMemo:bd,useReducer:al,useRef:Md,useState:function(){return al(Rr)},useDebugValue:is,useDeferredValue:function(e){var t=Be();return ee===null?t.memoizedState=e:Wd(t,ee.memoizedState,e)},useTransition:function(){var e=al(Rr)[0],t=Be().memoizedState;return[e,t]},useMutableSource:Nd,useSyncExternalStore:_d,useId:Hd,unstable_isNewReconciler:!1};function In(e,t){try{var n="",r=t;do n+=jp(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function sl(e,t,n){return{value:e,source:null,stack:null,digest:t??null}}function ta(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Xh=typeof WeakMap=="function"?WeakMap:Map;function Kd(e,t,n){n=ht(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){lo||(lo=!0,da=r),ta(e,t)},n}function Yd(e,t,n){n=ht(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ta(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ta(e,t),typeof r!="function"&&(Ot===null?Ot=new Set([this]):Ot.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function du(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Xh;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=cm.bind(null,e,t,n),t.then(e,e))}function fu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function pu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ht(-1,1),t.tag=2,Lt(n,t,1))),n.lanes|=1),e)}var Zh=yt.ReactCurrentOwner,Se=!1;function ve(e,t,n,r){t.child=e===null?Ed(t,null,n,r):On(t,e.child,n,r)}function hu(e,t,n,r,i){n=n.render;var o=t.ref;return Nn(t,i),r=ts(e,t,n,r,o,i),n=ns(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,xt(e,t,i)):($&&n&&Ha(t),t.flags|=1,ve(e,t,r,i),t.child)}function mu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!fs(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Gd(e,t,o,r,i)):(e=Ii(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ar,n(l,r)&&e.ref===t.ref)return xt(e,t,i)}return t.flags|=1,e=It(o,r),e.ref=t.ref,e.return=t,t.child=e}function Gd(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ar(o,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,xt(e,t,i)}return na(e,t,n,r,i)}function Xd(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},b(jn,Ne),Ne|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,b(jn,Ne),Ne|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,b(jn,Ne),Ne|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,b(jn,Ne),Ne|=r;return ve(e,t,i,n),t.child}function Zd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function na(e,t,n,r,i){var o=Ae(n)?Jt:ge.current;return o=zn(t,o),Nn(t,i),n=ts(e,t,n,r,o,i),r=ns(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,xt(e,t,i)):($&&r&&Ha(t),t.flags|=1,ve(e,t,n,i),t.child)}function gu(e,t,n,r,i){if(Ae(n)){var o=!0;Xi(t)}else o=!1;if(Nn(t,i),t.stateNode===null)Li(e,t),Ad(t,n,r),ea(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ue(c):(c=Ae(n)?Jt:ge.current,c=zn(t,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==c)&&au(t,l,r,c),jt=!1;var g=t.memoizedState;l.state=g,to(t,r,l,i),u=t.memoizedState,s!==r||g!==u||je.current||jt?(typeof h=="function"&&(Jl(t,n,h,r),u=t.memoizedState),(s=jt||lu(t,n,s,r,g,u,c))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Sd(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:We(t.type,s),l.props=c,m=t.pendingProps,g=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ue(u):(u=Ae(n)?Jt:ge.current,u=zn(t,u));var k=n.getDerivedStateFromProps;(h=typeof k=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==m||g!==u)&&au(t,l,r,u),jt=!1,g=t.memoizedState,l.state=g,to(t,r,l,i);var y=t.memoizedState;s!==m||g!==y||je.current||jt?(typeof k=="function"&&(Jl(t,n,k,r),y=t.memoizedState),(c=jt||lu(t,n,c,r,g,y,u)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return ra(e,t,n,r,o,i)}function ra(e,t,n,r,i,o){Zd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&tu(t,n,!1),xt(e,t,o);r=t.stateNode,Zh.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=On(t,e.child,null,o),t.child=On(t,null,s,o)):ve(e,t,s,o),t.memoizedState=r.state,i&&tu(t,n,!0),t.child}function qd(e){var t=e.stateNode;t.pendingContext?eu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&eu(e,t.context,!1),Za(e,t.containerInfo)}function vu(e,t,n,r,i){return Ln(),Va(i),t.flags|=256,ve(e,t,n,r),t.child}var ia={dehydrated:null,treeContext:null,retryLane:0};function oa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Jd(e,t,n){var r=t.pendingProps,i=V.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),b(V,i&1),e===null)return Zl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Co(l,r,0,null),e=qt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=oa(n),t.memoizedState=ia,e):os(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return qh(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=It(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=It(s,o):(o=qt(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?oa(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=ia,r}return o=e.child,e=o.sibling,r=It(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function os(e,t){return t=Co({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ai(e,t,n,r){return r!==null&&Va(r),On(t,e.child,null,n),e=os(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qh(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=sl(Error(S(422))),ai(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Co({mode:"visible",children:r.children},i,0,null),o=qt(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&On(t,e.child,null,l),t.child.memoizedState=oa(l),t.memoizedState=ia,o);if(!(t.mode&1))return ai(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(S(419)),r=sl(o,r),ai(e,t,l,r)}if(s=(l&e.childLanes)!==0,Se||s){if(r=ie,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,vt(e,i),Qe(r,e,i,-1))}return ds(),r=sl(Error(S(421))),ai(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=dm.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,_e=zt(i.nextSibling),Te=t,$=!0,$e=null,e!==null&&(Me[Ie++]=ft,Me[Ie++]=pt,Me[Ie++]=en,ft=e.id,pt=e.overflow,en=t),t=os(t,r.children),t.flags|=4096,t)}function xu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ql(e.return,t,n)}function ul(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function ef(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ve(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xu(e,n,t);else if(e.tag===19)xu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(b(V,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&no(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ul(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&no(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ul(t,!0,n,null,o);break;case"together":ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Li(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function xt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),nn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=It(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=It(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Jh(e,t,n){switch(t.tag){case 3:qd(t),Ln();break;case 5:Pd(t);break;case 1:Ae(t.type)&&Xi(t);break;case 4:Za(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;b(Ji,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(b(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?Jd(e,t,n):(b(V,V.current&1),e=xt(e,t,n),e!==null?e.sibling:null);b(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ef(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),b(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,Xd(e,t,n)}return xt(e,t,n)}var tf,la,nf,rf;tf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};la=function(){};nf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Xt(et.current);var o=null;switch(n){case"input":i=Nl(e,i),r=Nl(e,r),o=[];break;case"select":i=K({},i,{value:void 0}),r=K({},r,{value:void 0}),o=[];break;case"textarea":i=Rl(e,i),r=Rl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Yi)}Ll(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(vr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(vr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&W("scroll",e),o||s===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};rf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Jn(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function em(e,t,n){var r=t.pendingProps;switch($a(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return Ae(t.type)&&Gi(),ce(t),null;case 3:return r=t.stateNode,Mn(),H(je),H(ge),Ja(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(oi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$e!==null&&(ha($e),$e=null))),la(e,t),ce(t),null;case 5:qa(t);var i=Xt(_r.current);if(n=t.type,e!==null&&t.stateNode!=null)nf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return ce(t),null}if(e=Xt(et.current),oi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[qe]=t,r[Pr]=o,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(i=0;i<ar.length;i++)W(ar[i],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":Ps(r,o),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},W("invalid",r);break;case"textarea":_s(r,o),W("invalid",r)}Ll(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&ii(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&ii(r.textContent,s,e),i=["children",""+s]):vr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&W("scroll",r)}switch(n){case"input":Xr(r),Ns(r,o,!0);break;case"textarea":Xr(r),Ts(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Yi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Tc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[qe]=t,e[Pr]=r,tf(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ol(n,r),n){case"dialog":W("cancel",e),W("close",e),i=r;break;case"iframe":case"object":case"embed":W("load",e),i=r;break;case"video":case"audio":for(i=0;i<ar.length;i++)W(ar[i],e);i=r;break;case"source":W("error",e),i=r;break;case"img":case"image":case"link":W("error",e),W("load",e),i=r;break;case"details":W("toggle",e),i=r;break;case"input":Ps(e,r),i=Nl(e,r),W("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=K({},r,{value:void 0}),W("invalid",e);break;case"textarea":_s(e,r),i=Rl(e,r),W("invalid",e);break;default:i=r}Ll(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?Lc(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Rc(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&xr(e,u):typeof u=="number"&&xr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(vr.hasOwnProperty(o)?u!=null&&o==="onScroll"&&W("scroll",e):u!=null&&_a(e,o,u,l))}switch(n){case"input":Xr(e),Ns(e,r,!1);break;case"textarea":Xr(e),Ts(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ft(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?An(e,!!r.multiple,o,!1):r.defaultValue!=null&&An(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Yi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)rf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Xt(_r.current),Xt(et.current),oi(t)){if(r=t.stateNode,n=t.memoizedProps,r[qe]=t,(o=r.nodeValue!==n)&&(e=Te,e!==null))switch(e.tag){case 3:ii(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ii(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qe]=t,t.stateNode=r}return ce(t),null;case 13:if(H(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&_e!==null&&t.mode&1&&!(t.flags&128))wd(),Ln(),t.flags|=98560,o=!1;else if(o=oi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[qe]=t}else Ln(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),o=!1}else $e!==null&&(ha($e),$e=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?te===0&&(te=3):ds())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return Mn(),la(e,t),e===null&&Cr(t.stateNode.containerInfo),ce(t),null;case 10:return Ya(t.type._context),ce(t),null;case 17:return Ae(t.type)&&Gi(),ce(t),null;case 19:if(H(V),o=t.memoizedState,o===null)return ce(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Jn(o,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=no(e),l!==null){for(t.flags|=128,Jn(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return b(V,V.current&1|2),t.child}e=e.sibling}o.tail!==null&&X()>Dn&&(t.flags|=128,r=!0,Jn(o,!1),t.lanes=4194304)}else{if(!r)if(e=no(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Jn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!$)return ce(t),null}else 2*X()-o.renderingStartTime>Dn&&n!==1073741824&&(t.flags|=128,r=!0,Jn(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=X(),t.sibling=null,n=V.current,b(V,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return cs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ne&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function tm(e,t){switch($a(t),t.tag){case 1:return Ae(t.type)&&Gi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Mn(),H(je),H(ge),Ja(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return qa(t),null;case 13:if(H(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Ln()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(V),null;case 4:return Mn(),null;case 10:return Ya(t.type._context),null;case 22:case 23:return cs(),null;case 24:return null;default:return null}}var si=!1,me=!1,nm=typeof WeakSet=="function"?WeakSet:Set,N=null;function Sn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Y(e,t,r)}else n.current=null}function aa(e,t,n){try{n()}catch(r){Y(e,t,r)}}var yu=!1;function rm(e,t){if($l=Vi,e=ad(),Wa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,c=0,h=0,m=e,g=null;t:for(;;){for(var k;m!==n||i!==0&&m.nodeType!==3||(s=l+i),m!==o||r!==0&&m.nodeType!==3||(u=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(k=m.firstChild)!==null;)g=m,m=k;for(;;){if(m===e)break t;if(g===n&&++c===i&&(s=l),g===o&&++h===r&&(u=l),(k=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=k}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vl={focusedElem:e,selectionRange:n},Vi=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,j=y.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:We(t.type,v),j);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(x){Y(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return y=yu,yu=!1,y}function hr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&aa(t,n,o)}i=i.next}while(i!==r)}}function jo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function sa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function of(e){var t=e.alternate;t!==null&&(e.alternate=null,of(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qe],delete t[Pr],delete t[Yl],delete t[Uh],delete t[Bh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function lf(e){return e.tag===5||e.tag===3||e.tag===4}function wu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ua(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Yi));else if(r!==4&&(e=e.child,e!==null))for(ua(e,t,n),e=e.sibling;e!==null;)ua(e,t,n),e=e.sibling}function ca(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ca(e,t,n),e=e.sibling;e!==null;)ca(e,t,n),e=e.sibling}var oe=null,He=!1;function kt(e,t,n){for(n=n.child;n!==null;)af(e,t,n),n=n.sibling}function af(e,t,n){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(mo,n)}catch{}switch(n.tag){case 5:me||Sn(n,t);case 6:var r=oe,i=He;oe=null,kt(e,t,n),oe=r,He=i,oe!==null&&(He?(e=oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):oe.removeChild(n.stateNode));break;case 18:oe!==null&&(He?(e=oe,n=n.stateNode,e.nodeType===8?nl(e.parentNode,n):e.nodeType===1&&nl(e,n),Sr(e)):nl(oe,n.stateNode));break;case 4:r=oe,i=He,oe=n.stateNode.containerInfo,He=!0,kt(e,t,n),oe=r,He=i;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&aa(n,t,l),i=i.next}while(i!==r)}kt(e,t,n);break;case 1:if(!me&&(Sn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Y(n,t,s)}kt(e,t,n);break;case 21:kt(e,t,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,kt(e,t,n),me=r):kt(e,t,n);break;default:kt(e,t,n)}}function ku(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new nm),t.forEach(function(r){var i=fm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function be(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:oe=s.stateNode,He=!1;break e;case 3:oe=s.stateNode.containerInfo,He=!0;break e;case 4:oe=s.stateNode.containerInfo,He=!0;break e}s=s.return}if(oe===null)throw Error(S(160));af(o,l,i),oe=null,He=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Y(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)sf(t,e),t=t.sibling}function sf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(be(t,e),Ye(e),r&4){try{hr(3,e,e.return),jo(3,e)}catch(v){Y(e,e.return,v)}try{hr(5,e,e.return)}catch(v){Y(e,e.return,v)}}break;case 1:be(t,e),Ye(e),r&512&&n!==null&&Sn(n,n.return);break;case 5:if(be(t,e),Ye(e),r&512&&n!==null&&Sn(n,n.return),e.flags&32){var i=e.stateNode;try{xr(i,"")}catch(v){Y(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Nc(i,o),Ol(s,l);var c=Ol(s,o);for(l=0;l<u.length;l+=2){var h=u[l],m=u[l+1];h==="style"?Lc(i,m):h==="dangerouslySetInnerHTML"?Rc(i,m):h==="children"?xr(i,m):_a(i,h,m,c)}switch(s){case"input":_l(i,o);break;case"textarea":_c(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var k=o.value;k!=null?An(i,!!o.multiple,k,!1):g!==!!o.multiple&&(o.defaultValue!=null?An(i,!!o.multiple,o.defaultValue,!0):An(i,!!o.multiple,o.multiple?[]:"",!1))}i[Pr]=o}catch(v){Y(e,e.return,v)}}break;case 6:if(be(t,e),Ye(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){Y(e,e.return,v)}}break;case 3:if(be(t,e),Ye(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Sr(t.containerInfo)}catch(v){Y(e,e.return,v)}break;case 4:be(t,e),Ye(e);break;case 13:be(t,e),Ye(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ss=X())),r&4&&ku(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(me=(c=me)||h,be(t,e),me=c):be(t,e),Ye(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(N=e,h=e.child;h!==null;){for(m=N=h;N!==null;){switch(g=N,k=g.child,g.tag){case 0:case 11:case 14:case 15:hr(4,g,g.return);break;case 1:Sn(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){Y(r,n,v)}}break;case 5:Sn(g,g.return);break;case 22:if(g.memoizedState!==null){ju(m);continue}}k!==null?(k.return=g,N=k):ju(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{i=m.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=m.stateNode,u=m.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=zc("display",l))}catch(v){Y(e,e.return,v)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(v){Y(e,e.return,v)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:be(t,e),Ye(e),r&4&&ku(e);break;case 21:break;default:be(t,e),Ye(e)}}function Ye(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(lf(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(xr(i,""),r.flags&=-33);var o=wu(e);ca(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=wu(e);ua(e,s,l);break;default:throw Error(S(161))}}catch(u){Y(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function im(e,t,n){N=e,uf(e)}function uf(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||si;if(!l){var s=i.alternate,u=s!==null&&s.memoizedState!==null||me;s=si;var c=me;if(si=l,(me=u)&&!c)for(N=i;N!==null;)l=N,u=l.child,l.tag===22&&l.memoizedState!==null?Au(i):u!==null?(u.return=l,N=u):Au(i);for(;o!==null;)N=o,uf(o),o=o.sibling;N=i,si=s,me=c}Su(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,N=o):Su(e)}}function Su(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:me||jo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!me)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:We(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ou(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ou(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Sr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}me||t.flags&512&&sa(t)}catch(g){Y(t,t.return,g)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function ju(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function Au(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{jo(4,t)}catch(u){Y(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){Y(t,i,u)}}var o=t.return;try{sa(t)}catch(u){Y(t,o,u)}break;case 5:var l=t.return;try{sa(t)}catch(u){Y(t,l,u)}}}catch(u){Y(t,t.return,u)}if(t===e){N=null;break}var s=t.sibling;if(s!==null){s.return=t.return,N=s;break}N=t.return}}var om=Math.ceil,oo=yt.ReactCurrentDispatcher,ls=yt.ReactCurrentOwner,Fe=yt.ReactCurrentBatchConfig,I=0,ie=null,J=null,ae=0,Ne=0,jn=bt(0),te=0,Lr=null,nn=0,Ao=0,as=0,mr=null,ke=null,ss=0,Dn=1/0,ct=null,lo=!1,da=null,Ot=null,ui=!1,Pt=null,ao=0,gr=0,fa=null,Oi=-1,Mi=0;function xe(){return I&6?X():Oi!==-1?Oi:Oi=X()}function Mt(e){return e.mode&1?I&2&&ae!==0?ae&-ae:Wh.transition!==null?(Mi===0&&(Mi=Vc()),Mi):(e=U,e!==0||(e=window.event,e=e===void 0?16:qc(e.type)),e):1}function Qe(e,t,n,r){if(50<gr)throw gr=0,fa=null,Error(S(185));Br(e,n,r),(!(I&2)||e!==ie)&&(e===ie&&(!(I&2)&&(Ao|=n),te===4&&Ct(e,ae)),Ce(e,r),n===1&&I===0&&!(t.mode&1)&&(Dn=X()+500,wo&&Wt()))}function Ce(e,t){var n=e.callbackNode;Wp(e,t);var r=$i(e,e===ie?ae:0);if(r===0)n!==null&&Ls(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ls(n),t===1)e.tag===0?bh(Cu.bind(null,e)):vd(Cu.bind(null,e)),Dh(function(){!(I&6)&&Wt()}),n=null;else{switch(Qc(r)){case 1:n=Oa;break;case 4:n=Hc;break;case 16:n=Hi;break;case 536870912:n=$c;break;default:n=Hi}n=vf(n,cf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function cf(e,t){if(Oi=-1,Mi=0,I&6)throw Error(S(327));var n=e.callbackNode;if(_n()&&e.callbackNode!==n)return null;var r=$i(e,e===ie?ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=so(e,r);else{t=r;var i=I;I|=2;var o=ff();(ie!==e||ae!==t)&&(ct=null,Dn=X()+500,Zt(e,t));do try{sm();break}catch(s){df(e,s)}while(!0);Ka(),oo.current=o,I=i,J!==null?t=0:(ie=null,ae=0,t=te)}if(t!==0){if(t===2&&(i=Ul(e),i!==0&&(r=i,t=pa(e,i))),t===1)throw n=Lr,Zt(e,0),Ct(e,r),Ce(e,X()),n;if(t===6)Ct(e,r);else{if(i=e.current.alternate,!(r&30)&&!lm(i)&&(t=so(e,r),t===2&&(o=Ul(e),o!==0&&(r=o,t=pa(e,o))),t===1))throw n=Lr,Zt(e,0),Ct(e,r),Ce(e,X()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Kt(e,ke,ct);break;case 3:if(Ct(e,r),(r&130023424)===r&&(t=ss+500-X(),10<t)){if($i(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){xe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Kl(Kt.bind(null,e,ke,ct),t);break}Kt(e,ke,ct);break;case 4:if(Ct(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Ve(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*om(r/1960))-r,10<r){e.timeoutHandle=Kl(Kt.bind(null,e,ke,ct),r);break}Kt(e,ke,ct);break;case 5:Kt(e,ke,ct);break;default:throw Error(S(329))}}}return Ce(e,X()),e.callbackNode===n?cf.bind(null,e):null}function pa(e,t){var n=mr;return e.current.memoizedState.isDehydrated&&(Zt(e,t).flags|=256),e=so(e,t),e!==2&&(t=ke,ke=n,t!==null&&ha(t)),e}function ha(e){ke===null?ke=e:ke.push.apply(ke,e)}function lm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ke(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ct(e,t){for(t&=~as,t&=~Ao,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ve(t),r=1<<n;e[n]=-1,t&=~r}}function Cu(e){if(I&6)throw Error(S(327));_n();var t=$i(e,0);if(!(t&1))return Ce(e,X()),null;var n=so(e,t);if(e.tag!==0&&n===2){var r=Ul(e);r!==0&&(t=r,n=pa(e,r))}if(n===1)throw n=Lr,Zt(e,0),Ct(e,t),Ce(e,X()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Kt(e,ke,ct),Ce(e,X()),null}function us(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(Dn=X()+500,wo&&Wt())}}function rn(e){Pt!==null&&Pt.tag===0&&!(I&6)&&_n();var t=I;I|=1;var n=Fe.transition,r=U;try{if(Fe.transition=null,U=1,e)return e()}finally{U=r,Fe.transition=n,I=t,!(I&6)&&Wt()}}function cs(){Ne=jn.current,H(jn)}function Zt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ih(n)),J!==null)for(n=J.return;n!==null;){var r=n;switch($a(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gi();break;case 3:Mn(),H(je),H(ge),Ja();break;case 5:qa(r);break;case 4:Mn();break;case 13:H(V);break;case 19:H(V);break;case 10:Ya(r.type._context);break;case 22:case 23:cs()}n=n.return}if(ie=e,J=e=It(e.current,null),ae=Ne=t,te=0,Lr=null,as=Ao=nn=0,ke=mr=null,Gt!==null){for(t=0;t<Gt.length;t++)if(n=Gt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Gt=null}return e}function df(e,t){do{var n=J;try{if(Ka(),Ri.current=io,ro){for(var r=Q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ro=!1}if(tn=0,re=ee=Q=null,pr=!1,Tr=0,ls.current=null,n===null||n.return===null){te=1,Lr=t,J=null;break}e:{var o=e,l=n.return,s=n,u=t;if(t=ae,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=s,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var k=fu(l);if(k!==null){k.flags&=-257,pu(k,l,s,o,t),k.mode&1&&du(o,c,t),t=k,u=c;var y=t.updateQueue;if(y===null){var v=new Set;v.add(u),t.updateQueue=v}else y.add(u);break e}else{if(!(t&1)){du(o,c,t),ds();break e}u=Error(S(426))}}else if($&&s.mode&1){var j=fu(l);if(j!==null){!(j.flags&65536)&&(j.flags|=256),pu(j,l,s,o,t),Va(In(u,s));break e}}o=u=In(u,s),te!==4&&(te=2),mr===null?mr=[o]:mr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Kd(o,u,t);iu(o,f);break e;case 1:s=u;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ot===null||!Ot.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Yd(o,s,t);iu(o,x);break e}}o=o.return}while(o!==null)}hf(n)}catch(C){t=C,J===n&&n!==null&&(J=n=n.return);continue}break}while(!0)}function ff(){var e=oo.current;return oo.current=io,e===null?io:e}function ds(){(te===0||te===3||te===2)&&(te=4),ie===null||!(nn&268435455)&&!(Ao&268435455)||Ct(ie,ae)}function so(e,t){var n=I;I|=2;var r=ff();(ie!==e||ae!==t)&&(ct=null,Zt(e,t));do try{am();break}catch(i){df(e,i)}while(!0);if(Ka(),I=n,oo.current=r,J!==null)throw Error(S(261));return ie=null,ae=0,te}function am(){for(;J!==null;)pf(J)}function sm(){for(;J!==null&&!Lp();)pf(J)}function pf(e){var t=gf(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,t===null?hf(e):J=t,ls.current=null}function hf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=tm(n,t),n!==null){n.flags&=32767,J=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,J=null;return}}else if(n=em(n,t,Ne),n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);te===0&&(te=5)}function Kt(e,t,n){var r=U,i=Fe.transition;try{Fe.transition=null,U=1,um(e,t,n,r)}finally{Fe.transition=i,U=r}return null}function um(e,t,n,r){do _n();while(Pt!==null);if(I&6)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Hp(e,o),e===ie&&(J=ie=null,ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ui||(ui=!0,vf(Hi,function(){return _n(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Fe.transition,Fe.transition=null;var l=U;U=1;var s=I;I|=4,ls.current=null,rm(e,n),sf(n,e),_h(Vl),Vi=!!$l,Vl=$l=null,e.current=n,im(n),Op(),I=s,U=l,Fe.transition=o}else e.current=n;if(ui&&(ui=!1,Pt=e,ao=i),o=e.pendingLanes,o===0&&(Ot=null),Dp(n.stateNode),Ce(e,X()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(lo)throw lo=!1,e=da,da=null,e;return ao&1&&e.tag!==0&&_n(),o=e.pendingLanes,o&1?e===fa?gr++:(gr=0,fa=e):gr=0,Wt(),null}function _n(){if(Pt!==null){var e=Qc(ao),t=Fe.transition,n=U;try{if(Fe.transition=null,U=16>e?16:e,Pt===null)var r=!1;else{if(e=Pt,Pt=null,ao=0,I&6)throw Error(S(331));var i=I;for(I|=4,N=e.current;N!==null;){var o=N,l=o.child;if(N.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(N=c;N!==null;){var h=N;switch(h.tag){case 0:case 11:case 15:hr(8,h,o)}var m=h.child;if(m!==null)m.return=h,N=m;else for(;N!==null;){h=N;var g=h.sibling,k=h.return;if(of(h),h===c){N=null;break}if(g!==null){g.return=k,N=g;break}N=k}}}var y=o.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var j=v.sibling;v.sibling=null,v=j}while(v!==null)}}N=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,N=l;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:hr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,N=f;break e}N=o.return}}var d=e.current;for(N=d;N!==null;){l=N;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,N=p;else e:for(l=d;N!==null;){if(s=N,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:jo(9,s)}}catch(C){Y(s,s.return,C)}if(s===l){N=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,N=x;break e}N=s.return}}if(I=i,Wt(),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(mo,e)}catch{}r=!0}return r}finally{U=n,Fe.transition=t}}return!1}function Eu(e,t,n){t=In(n,t),t=Kd(e,t,1),e=Lt(e,t,1),t=xe(),e!==null&&(Br(e,1,t),Ce(e,t))}function Y(e,t,n){if(e.tag===3)Eu(e,e,n);else for(;t!==null;){if(t.tag===3){Eu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ot===null||!Ot.has(r))){e=In(n,e),e=Yd(t,e,1),t=Lt(t,e,1),e=xe(),t!==null&&(Br(t,1,e),Ce(t,e));break}}t=t.return}}function cm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=xe(),e.pingedLanes|=e.suspendedLanes&n,ie===e&&(ae&n)===n&&(te===4||te===3&&(ae&130023424)===ae&&500>X()-ss?Zt(e,0):as|=n),Ce(e,t)}function mf(e,t){t===0&&(e.mode&1?(t=Jr,Jr<<=1,!(Jr&130023424)&&(Jr=4194304)):t=1);var n=xe();e=vt(e,t),e!==null&&(Br(e,t,n),Ce(e,n))}function dm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),mf(e,n)}function fm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),mf(e,n)}var gf;gf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||je.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,Jh(e,t,n);Se=!!(e.flags&131072)}else Se=!1,$&&t.flags&1048576&&xd(t,qi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Li(e,t),e=t.pendingProps;var i=zn(t,ge.current);Nn(t,n),i=ts(null,t,r,e,i,n);var o=ns();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ae(r)?(o=!0,Xi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Xa(t),i.updater=ko,t.stateNode=i,i._reactInternals=t,ea(t,r,e,n),t=ra(null,t,r,!0,o,n)):(t.tag=0,$&&o&&Ha(t),ve(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Li(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=hm(r),e=We(r,e),i){case 0:t=na(null,t,r,e,n);break e;case 1:t=gu(null,t,r,e,n);break e;case 11:t=hu(null,t,r,e,n);break e;case 14:t=mu(null,t,r,We(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),na(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),gu(e,t,r,i,n);case 3:e:{if(qd(t),e===null)throw Error(S(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Sd(e,t),to(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=In(Error(S(423)),t),t=vu(e,t,r,n,i);break e}else if(r!==i){i=In(Error(S(424)),t),t=vu(e,t,r,n,i);break e}else for(_e=zt(t.stateNode.containerInfo.firstChild),Te=t,$=!0,$e=null,n=Ed(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ln(),r===i){t=xt(e,t,n);break e}ve(e,t,r,n)}t=t.child}return t;case 5:return Pd(t),e===null&&Zl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Ql(r,i)?l=null:o!==null&&Ql(r,o)&&(t.flags|=32),Zd(e,t),ve(e,t,l,n),t.child;case 6:return e===null&&Zl(t),null;case 13:return Jd(e,t,n);case 4:return Za(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=On(t,null,r,n):ve(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),hu(e,t,r,i,n);case 7:return ve(e,t,t.pendingProps,n),t.child;case 8:return ve(e,t,t.pendingProps.children,n),t.child;case 12:return ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,b(Ji,r._currentValue),r._currentValue=l,o!==null)if(Ke(o.value,l)){if(o.children===i.children&&!je.current){t=xt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=ht(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),ql(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(S(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),ql(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ve(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Nn(t,n),i=Ue(i),r=r(i),t.flags|=1,ve(e,t,r,n),t.child;case 14:return r=t.type,i=We(r,t.pendingProps),i=We(r.type,i),mu(e,t,r,i,n);case 15:return Gd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),Li(e,t),t.tag=1,Ae(r)?(e=!0,Xi(t)):e=!1,Nn(t,n),Ad(t,r,i),ea(t,r,i,n),ra(null,t,r,!0,e,n);case 19:return ef(e,t,n);case 22:return Xd(e,t,n)}throw Error(S(156,t.tag))};function vf(e,t){return Wc(e,t)}function pm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,t,n,r){return new pm(e,t,n,r)}function fs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hm(e){if(typeof e=="function")return fs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ra)return 11;if(e===za)return 14}return 2}function It(e,t){var n=e.alternate;return n===null?(n=De(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ii(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")fs(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case pn:return qt(n.children,i,o,t);case Ta:l=8,i|=8;break;case Al:return e=De(12,n,t,i|2),e.elementType=Al,e.lanes=o,e;case Cl:return e=De(13,n,t,i),e.elementType=Cl,e.lanes=o,e;case El:return e=De(19,n,t,i),e.elementType=El,e.lanes=o,e;case Cc:return Co(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case jc:l=10;break e;case Ac:l=9;break e;case Ra:l=11;break e;case za:l=14;break e;case St:l=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=De(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function qt(e,t,n,r){return e=De(7,e,r,t),e.lanes=n,e}function Co(e,t,n,r){return e=De(22,e,r,t),e.elementType=Cc,e.lanes=n,e.stateNode={isHidden:!1},e}function cl(e,t,n){return e=De(6,e,null,t),e.lanes=n,e}function dl(e,t,n){return t=De(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function mm(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vo(0),this.expirationTimes=Vo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ps(e,t,n,r,i,o,l,s,u){return e=new mm(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=De(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xa(o),e}function gm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function xf(e){if(!e)return Ut;e=e._reactInternals;e:{if(ln(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ae(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ae(n))return gd(e,n,t)}return t}function yf(e,t,n,r,i,o,l,s,u){return e=ps(n,r,!0,e,i,o,l,s,u),e.context=xf(null),n=e.current,r=xe(),i=Mt(n),o=ht(r,i),o.callback=t??null,Lt(n,o,i),e.current.lanes=i,Br(e,i,r),Ce(e,r),e}function Eo(e,t,n,r){var i=t.current,o=xe(),l=Mt(i);return n=xf(n),t.context===null?t.context=n:t.pendingContext=n,t=ht(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Lt(i,t,l),e!==null&&(Qe(e,i,l,o),Ti(e,i,l)),l}function uo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Pu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function hs(e,t){Pu(e,t),(e=e.alternate)&&Pu(e,t)}function vm(){return null}var wf=typeof reportError=="function"?reportError:function(e){console.error(e)};function ms(e){this._internalRoot=e}Po.prototype.render=ms.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Eo(e,t,null,null)};Po.prototype.unmount=ms.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rn(function(){Eo(null,e,null,null)}),t[gt]=null}};function Po(e){this._internalRoot=e}Po.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<At.length&&t!==0&&t<At[n].priority;n++);At.splice(n,0,e),n===0&&Zc(e)}};function gs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function No(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Nu(){}function xm(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=uo(l);o.call(c)}}var l=yf(t,r,e,0,null,!1,!1,"",Nu);return e._reactRootContainer=l,e[gt]=l.current,Cr(e.nodeType===8?e.parentNode:e),rn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=uo(u);s.call(c)}}var u=ps(e,0,!1,null,null,!1,!1,"",Nu);return e._reactRootContainer=u,e[gt]=u.current,Cr(e.nodeType===8?e.parentNode:e),rn(function(){Eo(t,u,n,r)}),u}function _o(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var u=uo(l);s.call(u)}}Eo(t,l,e,i)}else l=xm(n,t,e,i,r);return uo(l)}Kc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=lr(t.pendingLanes);n!==0&&(Ma(t,n|1),Ce(t,X()),!(I&6)&&(Dn=X()+500,Wt()))}break;case 13:rn(function(){var r=vt(e,1);if(r!==null){var i=xe();Qe(r,e,1,i)}}),hs(e,1)}};Ia=function(e){if(e.tag===13){var t=vt(e,134217728);if(t!==null){var n=xe();Qe(t,e,134217728,n)}hs(e,134217728)}};Yc=function(e){if(e.tag===13){var t=Mt(e),n=vt(e,t);if(n!==null){var r=xe();Qe(n,e,t,r)}hs(e,t)}};Gc=function(){return U};Xc=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};Il=function(e,t,n){switch(t){case"input":if(_l(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=yo(r);if(!i)throw Error(S(90));Pc(r),_l(r,i)}}}break;case"textarea":_c(e,n);break;case"select":t=n.value,t!=null&&An(e,!!n.multiple,t,!1)}};Ic=us;Dc=rn;var ym={usingClientEntryPoint:!1,Events:[Wr,vn,yo,Oc,Mc,us]},er={findFiberByHostInstance:Yt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},wm={bundleType:er.bundleType,version:er.version,rendererPackageName:er.rendererPackageName,rendererConfig:er.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Bc(e),e===null?null:e.stateNode},findFiberByHostInstance:er.findFiberByHostInstance||vm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ci=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ci.isDisabled&&ci.supportsFiber)try{mo=ci.inject(wm),Je=ci}catch{}}Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ym;Le.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gs(t))throw Error(S(200));return gm(e,t,null,n)};Le.createRoot=function(e,t){if(!gs(e))throw Error(S(299));var n=!1,r="",i=wf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ps(e,1,!1,null,null,n,!1,r,i),e[gt]=t.current,Cr(e.nodeType===8?e.parentNode:e),new ms(t)};Le.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Bc(t),e=e===null?null:e.stateNode,e};Le.flushSync=function(e){return rn(e)};Le.hydrate=function(e,t,n){if(!No(t))throw Error(S(200));return _o(null,e,t,!0,n)};Le.hydrateRoot=function(e,t,n){if(!gs(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=wf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=yf(t,null,e,1,n??null,i,!1,o,l),e[gt]=t.current,Cr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Po(t)};Le.render=function(e,t,n){if(!No(t))throw Error(S(200));return _o(null,e,t,!1,n)};Le.unmountComponentAtNode=function(e){if(!No(e))throw Error(S(40));return e._reactRootContainer?(rn(function(){_o(null,null,e,!1,function(){e._reactRootContainer=null,e[gt]=null})}),!0):!1};Le.unstable_batchedUpdates=us;Le.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!No(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return _o(e,t,n,!1,r)};Le.version="18.2.0-next-9e3b772b8-20220608";function kf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kf)}catch(e){console.error(e)}}kf(),xc.exports=Le;var km=xc.exports,Sf,_u=km;Sf=_u.createRoot,_u.hydrateRoot;/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Or(){return Or=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Or.apply(this,arguments)}var Nt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Nt||(Nt={}));const Tu="popstate";function Sm(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:s}=r.location;return ma("",{pathname:o,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:co(i)}return Am(t,n,null,e)}function Z(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function jf(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function jm(){return Math.random().toString(36).substr(2,8)}function Ru(e,t){return{usr:e.state,key:e.key,idx:t}}function ma(e,t,n,r){return n===void 0&&(n=null),Or({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Hn(t):t,{state:n,key:t&&t.key||r||jm()})}function co(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Hn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Am(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,s=Nt.Pop,u=null,c=h();c==null&&(c=0,l.replaceState(Or({},l.state,{idx:c}),""));function h(){return(l.state||{idx:null}).idx}function m(){s=Nt.Pop;let j=h(),f=j==null?null:j-c;c=j,u&&u({action:s,location:v.location,delta:f})}function g(j,f){s=Nt.Push;let d=ma(v.location,j,f);c=h()+1;let p=Ru(d,c),x=v.createHref(d);try{l.pushState(p,"",x)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(x)}o&&u&&u({action:s,location:v.location,delta:1})}function k(j,f){s=Nt.Replace;let d=ma(v.location,j,f);c=h();let p=Ru(d,c),x=v.createHref(d);l.replaceState(p,"",x),o&&u&&u({action:s,location:v.location,delta:0})}function y(j){let f=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof j=="string"?j:co(j);return d=d.replace(/ $/,"%20"),Z(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let v={get action(){return s},get location(){return e(i,l)},listen(j){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Tu,m),u=j,()=>{i.removeEventListener(Tu,m),u=null}},createHref(j){return t(i,j)},createURL:y,encodeLocation(j){let f=y(j);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:k,go(j){return l.go(j)}};return v}var zu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(zu||(zu={}));function Cm(e,t,n){n="/";let r=typeof t=="string"?Hn(t):t,i=Fn(r.pathname||"/",n);if(i==null)return null;let o=Af(e);Em(o);let l=null;for(let s=0;l==null&&s<o.length;++s){let u=Dm(i);l=Mm(o[s],u)}return l}function Af(e,t,n,r){t=[],n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,s)=>{let u={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};u.relativePath.startsWith("/")&&(Z(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Dt([r,u.relativePath]),h=n.concat(u);o.children&&o.children.length>0&&(Z(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Af(o.children,t,h,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:Lm(c,o.index),routesMeta:h})};return e.forEach((o,l)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,l);else for(let u of Cf(o.path))i(o,l,u)}),t}function Cf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=Cf(r.join("/")),s=[];return s.push(...l.map(u=>u===""?o:[o,u].join("/"))),i&&s.push(...l),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function Em(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Om(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Pm=/^:[\w-]+$/,Nm=3,_m=2,Tm=1,Rm=10,zm=-2,Lu=e=>e==="*";function Lm(e,t){let n=e.split("/"),r=n.length;return n.some(Lu)&&(r+=zm),t&&(r+=_m),n.filter(i=>!Lu(i)).reduce((i,o)=>i+(Pm.test(o)?Nm:o===""?Tm:Rm),r)}function Om(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Mm(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let s=n[l],u=l===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",h=ga({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},c);if(!h)return null;Object.assign(r,h.params);let m=s.route;o.push({params:r,pathname:Dt([i,h.pathname]),pathnameBase:bm(Dt([i,h.pathnameBase])),route:m}),h.pathnameBase!=="/"&&(i=Dt([i,h.pathnameBase]))}return o}function ga(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Im(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,h,m)=>{let{paramName:g,isOptional:k}=h;if(g==="*"){let v=s[m]||"";l=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const y=s[m];return k&&!y?c[g]=void 0:c[g]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:l,pattern:e}}function Im(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),jf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,u)=>(r.push({paramName:s,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Dm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return jf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Fn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Fm(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Hn(e):e;return{pathname:n?n.startsWith("/")?n:Um(n,t):t,search:Wm(r),hash:Hm(i)}}function Um(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function fl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Bm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ef(e,t){let n=Bm(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Pf(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Hn(e):(i=Or({},e),Z(!i.pathname||!i.pathname.includes("?"),fl("?","pathname","search",i)),Z(!i.pathname||!i.pathname.includes("#"),fl("#","pathname","hash",i)),Z(!i.search||!i.search.includes("#"),fl("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,s;if(l==null)s=n;else{let m=t.length-1;if(!r&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}s=m>=0?t[m]:"/"}let u=Fm(i,s),c=l&&l!=="/"&&l.endsWith("/"),h=(o||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const Dt=e=>e.join("/").replace(/\/\/+/g,"/"),bm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Wm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Hm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Nf=["post","put","patch","delete"];new Set(Nf);const $m=["get",...Nf];new Set($m);/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mr(){return Mr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Mr.apply(this,arguments)}const To=P.createContext(null),Vm=P.createContext(null),Ht=P.createContext(null),Ro=P.createContext(null),an=P.createContext({outlet:null,matches:[],isDataRoute:!1});function Qm(e,t){let{relative:n}=t===void 0?{}:t;$r()||Z(!1);let{basename:r,navigator:i}=P.useContext(Ht),{hash:o,pathname:l,search:s}=zo(e,{relative:n}),u=l;return r!=="/"&&(u=l==="/"?r:Dt([r,l])),i.createHref({pathname:u,search:s,hash:o})}function $r(){return P.useContext(Ro)!=null}function wt(){return $r()||Z(!1),P.useContext(Ro).location}function _f(e){P.useContext(Ht).static||P.useLayoutEffect(e)}function Tf(){let{isDataRoute:e}=P.useContext(an);return e?r0():Km()}function Km(){$r()||Z(!1);let e=P.useContext(To),{basename:t,future:n,navigator:r}=P.useContext(Ht),{matches:i}=P.useContext(an),{pathname:o}=wt(),l=JSON.stringify(Ef(i,n.v7_relativeSplatPath)),s=P.useRef(!1);return _f(()=>{s.current=!0}),P.useCallback(function(c,h){if(h===void 0&&(h={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let m=Pf(c,JSON.parse(l),o,h.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Dt([t,m.pathname])),(h.replace?r.replace:r.push)(m,h.state,h)},[t,r,l,o,e])}const Ym=P.createContext(null);function Gm(e){let t=P.useContext(an).outlet;return t&&P.createElement(Ym.Provider,{value:e},t)}function zo(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=P.useContext(Ht),{matches:i}=P.useContext(an),{pathname:o}=wt(),l=JSON.stringify(Ef(i,r.v7_relativeSplatPath));return P.useMemo(()=>Pf(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function Xm(e,t){return Zm(e,t)}function Zm(e,t,n,r){$r()||Z(!1);let{navigator:i}=P.useContext(Ht),{matches:o}=P.useContext(an),l=o[o.length-1],s=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let c=wt(),h;if(t){var m;let j=typeof t=="string"?Hn(t):t;u==="/"||(m=j.pathname)!=null&&m.startsWith(u)||Z(!1),h=j}else h=c;let g=h.pathname||"/",k=g;if(u!=="/"){let j=u.replace(/^\//,"").split("/");k="/"+g.replace(/^\//,"").split("/").slice(j.length).join("/")}let y=Cm(e,{pathname:k}),v=Jm(y&&y.map(j=>Object.assign({},j,{params:Object.assign({},s,j.params),pathname:Dt([u,i.encodeLocation?i.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?u:Dt([u,i.encodeLocation?i.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),o,n);return t&&v?P.createElement(Ro.Provider,{value:{location:Mr({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Nt.Pop}},v):v}function qm(e){let{routeContext:t,match:n,children:r}=e,i=P.useContext(To);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(an.Provider,{value:t},r)}function Jm(e,t,n,r){var i;if(t===void 0&&(t=[]),n=null,e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let l=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let u=l.findIndex(c=>c.route.id&&(s==null?void 0:s[c.route.id])!==void 0);u>=0||Z(!1),l=l.slice(0,Math.min(l.length,u+1))}return l.reduceRight((u,c,h)=>{let m=t.concat(l.slice(0,h+1));return(()=>{let k;return c.route.Component?k=P.createElement(c.route.Component,null):c.route.element?k=c.route.element:k=u,P.createElement(qm,{match:c,routeContext:{outlet:u,matches:m,isDataRoute:n!=null},children:k})})()},null)}var Rf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Rf||{}),zf=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(zf||{});function e0(e){let t=P.useContext(To);return t||Z(!1),t}function t0(e){let t=P.useContext(an);return t||Z(!1),t}function n0(e){let t=t0(),n=t.matches[t.matches.length-1];return n.route.id||Z(!1),n.route.id}function r0(){let{router:e}=e0(Rf.UseNavigateStable),t=n0(zf.UseNavigateStable),n=P.useRef(!1);return _f(()=>{n.current=!0}),P.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Mr({fromRouteId:t},o)))},[e,t])}function i0(e){return Gm(e.context)}function va(e){Z(!1)}function o0(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Nt.Pop,navigator:o,static:l=!1,future:s}=e;$r()&&Z(!1);let u=t.replace(/^\/*/,"/"),c=P.useMemo(()=>({basename:u,navigator:o,static:l,future:Mr({v7_relativeSplatPath:!1},s)}),[u,s,o,l]);typeof r=="string"&&(r=Hn(r));let{pathname:h="/",search:m="",hash:g="",state:k=null,key:y="default"}=r,v=P.useMemo(()=>{let j=Fn(h,u);return j==null?null:{location:{pathname:j,search:m,hash:g,state:k,key:y},navigationType:i}},[u,h,m,g,k,y,i]);return v==null?null:P.createElement(Ht.Provider,{value:c},P.createElement(Ro.Provider,{children:n,value:v}))}function l0(e){let{children:t,location:n}=e;return Xm(xa(t),n)}new Promise(()=>{});function xa(e,t){t===void 0&&(t=[]);let n=[];return P.Children.forEach(e,(r,i)=>{if(!P.isValidElement(r))return;let o=[...t,i];if(r.type===P.Fragment){n.push.apply(n,xa(r.props.children,o));return}r.type!==va&&Z(!1),!r.props.index||!r.props.children||Z(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=xa(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fo(){return fo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fo.apply(this,arguments)}function Lf(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function a0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function s0(e,t){return e.button===0&&(!t||t==="_self")&&!a0(e)}const u0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],c0=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],d0="6";try{window.__reactRouterVersion=d0}catch{}const f0=P.createContext({isTransitioning:!1}),p0="startTransition",Ou=Sl[p0];function h0(e){let{basename:t,children:n,future:r,window:i}=e,o=P.useRef();o.current==null&&(o.current=Sm({window:i,v5Compat:!0}));let l=o.current,[s,u]=P.useState({action:l.action,location:l.location}),{v7_startTransition:c}=r||{},h=P.useCallback(m=>{c&&Ou?Ou(()=>u(m)):u(m)},[u,c]);return P.useLayoutEffect(()=>l.listen(h),[l,h]),P.createElement(o0,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l,future:r})}const m0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",g0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,v0=P.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:s,target:u,to:c,preventScrollReset:h,unstable_viewTransition:m}=t,g=Lf(t,u0),{basename:k}=P.useContext(Ht),y,v=!1;if(typeof c=="string"&&g0.test(c)&&(y=c,m0))try{let p=new URL(window.location.href),x=c.startsWith("//")?new URL(p.protocol+c):new URL(c),C=Fn(x.pathname,k);x.origin===p.origin&&C!=null?c=C+x.search+x.hash:v=!0}catch{}let j=Qm(c,{relative:i}),f=y0(c,{replace:l,state:s,target:u,preventScrollReset:h,relative:i,unstable_viewTransition:m});function d(p){r&&r(p),p.defaultPrevented||f(p)}return P.createElement("a",fo({},g,{href:y||j,onClick:v||o?r:d,ref:n,target:u}))}),Lo=P.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:l=!1,style:s,to:u,unstable_viewTransition:c,children:h}=t,m=Lf(t,c0),g=zo(u,{relative:m.relative}),k=wt(),y=P.useContext(Vm),{navigator:v,basename:j}=P.useContext(Ht),f=y!=null&&w0(g)&&c===!0,d=v.encodeLocation?v.encodeLocation(g).pathname:g.pathname,p=k.pathname,x=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(p=p.toLowerCase(),x=x?x.toLowerCase():null,d=d.toLowerCase()),x&&j&&(x=Fn(x,j)||x);const C=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let E=p===d||!l&&p.startsWith(d)&&p.charAt(C)==="/",A=x!=null&&(x===d||!l&&x.startsWith(d)&&x.charAt(d.length)==="/"),T={isActive:E,isPending:A,isTransitioning:f},B=E?r:void 0,R;typeof o=="function"?R=o(T):R=[o,E?"active":null,A?"pending":null,f?"transitioning":null].filter(Boolean).join(" ");let Pe=typeof s=="function"?s(T):s;return P.createElement(v0,fo({},m,{"aria-current":B,className:R,ref:n,style:Pe,to:u,unstable_viewTransition:c}),typeof h=="function"?h(T):h)});var ya;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ya||(ya={}));var Mu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Mu||(Mu={}));function x0(e){let t=P.useContext(To);return t||Z(!1),t}function y0(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:s}=t===void 0?{}:t,u=Tf(),c=wt(),h=zo(e,{relative:l});return P.useCallback(m=>{if(s0(m,n)){m.preventDefault();let g=r!==void 0?r:co(c)===co(h);u(e,{replace:g,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:s})}},[c,u,h,r,i,n,e,o,l,s])}function w0(e,t){t={};let n=P.useContext(f0);n==null&&Z(!1);let{basename:r}=x0(ya.useViewTransitionState),i=zo(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=Fn(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=Fn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ga(i.pathname,l)!=null||ga(i.pathname,o)!=null}const Iu={HOME:"/",PORTFOLIO:"/portfolio"};function wa(){return wa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wa.apply(this,arguments)}function Of(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var k0=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,S0=Of(function(e){return k0.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function j0(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function A0(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var C0=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(A0(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=j0(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),he="-ms-",po="-moz-",D="-webkit-",Mf="comm",vs="rule",xs="decl",E0="@import",If="@keyframes",P0="@layer",N0=Math.abs,Oo=String.fromCharCode,_0=Object.assign;function T0(e,t){return le(e,0)^45?(((t<<2^le(e,0))<<2^le(e,1))<<2^le(e,2))<<2^le(e,3):0}function Df(e){return e.trim()}function R0(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,n){return e.replace(t,n)}function ka(e,t){return e.indexOf(t)}function le(e,t){return e.charCodeAt(t)|0}function Ir(e,t,n){return e.slice(t,n)}function Xe(e){return e.length}function ys(e){return e.length}function di(e,t){return t.push(e),e}function z0(e,t){return e.map(t).join("")}var Mo=1,Un=1,Ff=0,Ee=0,q=0,$n="";function Io(e,t,n,r,i,o,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Mo,column:Un,length:l,return:""}}function tr(e,t){return _0(Io("",null,null,"",null,null,0),e,{length:-e.length},t)}function L0(){return q}function O0(){return q=Ee>0?le($n,--Ee):0,Un--,q===10&&(Un=1,Mo--),q}function Re(){return q=Ee<Ff?le($n,Ee++):0,Un++,q===10&&(Un=1,Mo++),q}function tt(){return le($n,Ee)}function Di(){return Ee}function Vr(e,t){return Ir($n,e,t)}function Dr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Uf(e){return Mo=Un=1,Ff=Xe($n=e),Ee=0,[]}function Bf(e){return $n="",e}function Fi(e){return Df(Vr(Ee-1,Sa(e===91?e+2:e===40?e+1:e)))}function M0(e){for(;(q=tt())&&q<33;)Re();return Dr(e)>2||Dr(q)>3?"":" "}function I0(e,t){for(;--t&&Re()&&!(q<48||q>102||q>57&&q<65||q>70&&q<97););return Vr(e,Di()+(t<6&&tt()==32&&Re()==32))}function Sa(e){for(;Re();)switch(q){case e:return Ee;case 34:case 39:e!==34&&e!==39&&Sa(q);break;case 40:e===41&&Sa(e);break;case 92:Re();break}return Ee}function D0(e,t){for(;Re()&&e+q!==57;)if(e+q===84&&tt()===47)break;return"/*"+Vr(t,Ee-1)+"*"+Oo(e===47?e:Re())}function F0(e){for(;!Dr(tt());)Re();return Vr(e,Ee)}function U0(e){return Bf(Ui("",null,null,null,[""],e=Uf(e),0,[0],e))}function Ui(e,t,n,r,i,o,l,s,u){for(var c=0,h=0,m=l,g=0,k=0,y=0,v=1,j=1,f=1,d=0,p="",x=i,C=o,E=r,A=p;j;)switch(y=d,d=Re()){case 40:if(y!=108&&le(A,m-1)==58){ka(A+=F(Fi(d),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:A+=Fi(d);break;case 9:case 10:case 13:case 32:A+=M0(y);break;case 92:A+=I0(Di()-1,7);continue;case 47:switch(tt()){case 42:case 47:di(B0(D0(Re(),Di()),t,n),u);break;default:A+="/"}break;case 123*v:s[c++]=Xe(A)*f;case 125*v:case 59:case 0:switch(d){case 0:case 125:j=0;case 59+h:f==-1&&(A=F(A,/\f/g,"")),k>0&&Xe(A)-m&&di(k>32?Fu(A+";",r,n,m-1):Fu(F(A," ","")+";",r,n,m-2),u);break;case 59:A+=";";default:if(di(E=Du(A,t,n,c,h,i,s,p,x=[],C=[],m),o),d===123)if(h===0)Ui(A,t,E,E,x,o,m,s,C);else switch(g===99&&le(A,3)===110?100:g){case 100:case 108:case 109:case 115:Ui(e,E,E,r&&di(Du(e,E,E,0,0,i,s,p,i,x=[],m),C),i,C,m,s,r?x:C);break;default:Ui(A,E,E,E,[""],C,0,s,C)}}c=h=k=0,v=f=1,p=A="",m=l;break;case 58:m=1+Xe(A),k=y;default:if(v<1){if(d==123)--v;else if(d==125&&v++==0&&O0()==125)continue}switch(A+=Oo(d),d*v){case 38:f=h>0?1:(A+="\f",-1);break;case 44:s[c++]=(Xe(A)-1)*f,f=1;break;case 64:tt()===45&&(A+=Fi(Re())),g=tt(),h=m=Xe(p=A+=F0(Di())),d++;break;case 45:y===45&&Xe(A)==2&&(v=0)}}return o}function Du(e,t,n,r,i,o,l,s,u,c,h){for(var m=i-1,g=i===0?o:[""],k=ys(g),y=0,v=0,j=0;y<r;++y)for(var f=0,d=Ir(e,m+1,m=N0(v=l[y])),p=e;f<k;++f)(p=Df(v>0?g[f]+" "+d:F(d,/&\f/g,g[f])))&&(u[j++]=p);return Io(e,t,n,i===0?vs:s,u,c,h)}function B0(e,t,n){return Io(e,t,n,Mf,Oo(L0()),Ir(e,2,-2),0)}function Fu(e,t,n,r){return Io(e,t,n,xs,Ir(e,0,r),Ir(e,r+1,-1),r)}function Tn(e,t){for(var n="",r=ys(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function b0(e,t,n,r){switch(e.type){case P0:if(e.children.length)break;case E0:case xs:return e.return=e.return||e.value;case Mf:return"";case If:return e.return=e.value+"{"+Tn(e.children,r)+"}";case vs:e.value=e.props.join(",")}return Xe(n=Tn(e.children,r))?e.return=e.value+"{"+n+"}":""}function W0(e){var t=ys(e);return function(n,r,i,o){for(var l="",s=0;s<t;s++)l+=e[s](n,r,i,o)||"";return l}}function H0(e){return function(t){t.root||(t=t.return)&&e(t)}}var $0=function(t,n,r){for(var i=0,o=0;i=o,o=tt(),i===38&&o===12&&(n[r]=1),!Dr(o);)Re();return Vr(t,Ee)},V0=function(t,n){var r=-1,i=44;do switch(Dr(i)){case 0:i===38&&tt()===12&&(n[r]=1),t[r]+=$0(Ee-1,n,r);break;case 2:t[r]+=Fi(i);break;case 4:if(i===44){t[++r]=tt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Oo(i)}while(i=Re());return t},Q0=function(t,n){return Bf(V0(Uf(t),n))},Uu=new WeakMap,K0=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Uu.get(r))&&!i){Uu.set(t,!0);for(var o=[],l=Q0(n,o),s=r.props,u=0,c=0;u<l.length;u++)for(var h=0;h<s.length;h++,c++)t.props[c]=o[u]?l[u].replace(/&\f/g,s[h]):s[h]+" "+l[u]}}},Y0=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function bf(e,t){switch(T0(e,t)){case 5103:return D+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return D+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return D+e+po+e+he+e+e;case 6828:case 4268:return D+e+he+e+e;case 6165:return D+e+he+"flex-"+e+e;case 5187:return D+e+F(e,/(\w+).+(:[^]+)/,D+"box-$1$2"+he+"flex-$1$2")+e;case 5443:return D+e+he+"flex-item-"+F(e,/flex-|-self/,"")+e;case 4675:return D+e+he+"flex-line-pack"+F(e,/align-content|flex-|-self/,"")+e;case 5548:return D+e+he+F(e,"shrink","negative")+e;case 5292:return D+e+he+F(e,"basis","preferred-size")+e;case 6060:return D+"box-"+F(e,"-grow","")+D+e+he+F(e,"grow","positive")+e;case 4554:return D+F(e,/([^-])(transform)/g,"$1"+D+"$2")+e;case 6187:return F(F(F(e,/(zoom-|grab)/,D+"$1"),/(image-set)/,D+"$1"),e,"")+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,D+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,D+"box-pack:$3"+he+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+D+e+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,D+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xe(e)-1-t>6)switch(le(e,t+1)){case 109:if(le(e,t+4)!==45)break;case 102:return F(e,/(.+:)(.+)-([^]+)/,"$1"+D+"$2-$3$1"+po+(le(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ka(e,"stretch")?bf(F(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(le(e,t+1)!==115)break;case 6444:switch(le(e,Xe(e)-3-(~ka(e,"!important")&&10))){case 107:return F(e,":",":"+D)+e;case 101:return F(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+D+(le(e,14)===45?"inline-":"")+"box$3$1"+D+"$2$3$1"+he+"$2box$3")+e}break;case 5936:switch(le(e,t+11)){case 114:return D+e+he+F(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return D+e+he+F(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return D+e+he+F(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return D+e+he+e+e}return e}var G0=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case xs:t.return=bf(t.value,t.length);break;case If:return Tn([tr(t,{value:F(t.value,"@","@"+D)})],i);case vs:if(t.length)return z0(t.props,function(o){switch(R0(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Tn([tr(t,{props:[F(o,/:(read-\w+)/,":"+po+"$1")]})],i);case"::placeholder":return Tn([tr(t,{props:[F(o,/:(plac\w+)/,":"+D+"input-$1")]}),tr(t,{props:[F(o,/:(plac\w+)/,":"+po+"$1")]}),tr(t,{props:[F(o,/:(plac\w+)/,he+"input-$1")]})],i)}return""})}},X0=[G0],Z0=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var j=v.getAttribute("data-emotion");j.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=t.stylisPlugins||X0,o={},l,s=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var j=v.getAttribute("data-emotion").split(" "),f=1;f<j.length;f++)o[j[f]]=!0;s.push(v)});var u,c=[K0,Y0];{var h,m=[b0,H0(function(v){h.insert(v)})],g=W0(c.concat(i,m)),k=function(j){return Tn(U0(j),g)};u=function(j,f,d,p){h=d,k(j?j+"{"+f.styles+"}":f.styles),p&&(y.inserted[f.name]=!0)}}var y={key:n,sheet:new C0({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:u};return y.sheet.hydrate(s),y},q0=!0;function J0(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Wf=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||q0===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},eg=function(t,n,r){Wf(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function tg(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var ng={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},rg=/[A-Z]|^ms/g,ig=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Hf=function(t){return t.charCodeAt(1)===45},Bu=function(t){return t!=null&&typeof t!="boolean"},pl=Of(function(e){return Hf(e)?e:e.replace(rg,"-$&").toLowerCase()}),bu=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(ig,function(r,i,o){return Ze={name:i,styles:o,next:Ze},i})}return ng[t]!==1&&!Hf(t)&&typeof n=="number"&&n!==0?n+"px":n};function Fr(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Ze={name:n.name,styles:n.styles,next:Ze},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Ze={name:r.name,styles:r.styles,next:Ze},r=r.next;var i=n.styles+";";return i}return og(e,t,n)}case"function":{if(e!==void 0){var o=Ze,l=n(e);return Ze=o,Fr(e,t,l)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function og(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Fr(e,t,n[i])+";";else for(var o in n){var l=n[o];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=o+"{"+t[l]+"}":Bu(l)&&(r+=pl(o)+":"+bu(o,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var s=0;s<l.length;s++)Bu(l[s])&&(r+=pl(o)+":"+bu(o,l[s])+";");else{var u=Fr(e,t,l);switch(o){case"animation":case"animationName":{r+=pl(o)+":"+u+";";break}default:r+=o+"{"+u+"}"}}}return r}var Wu=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Ze,lg=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";Ze=void 0;var l=t[0];l==null||l.raw===void 0?(i=!1,o+=Fr(r,n,l)):o+=l[0];for(var s=1;s<t.length;s++)o+=Fr(r,n,t[s]),i&&(o+=l[s]);Wu.lastIndex=0;for(var u="",c;(c=Wu.exec(o))!==null;)u+="-"+c[1];var h=tg(o)+u;return{name:h,styles:o,next:Ze}},ag=function(t){return t()},sg=Sl.useInsertionEffect?Sl.useInsertionEffect:!1,ug=sg||ag,$f=P.createContext(typeof HTMLElement<"u"?Z0({key:"css"}):null);$f.Provider;var cg=function(t){return P.forwardRef(function(n,r){var i=P.useContext($f);return t(n,i,r)})},dg=P.createContext({}),fg=S0,pg=function(t){return t!=="theme"},Hu=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?fg:pg},$u=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(l){return t.__emotion_forwardProp(l)&&o(l)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},hg=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Wf(n,r,i),ug(function(){return eg(n,r,i)}),null},mg=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,l;n!==void 0&&(o=n.label,l=n.target);var s=$u(t,n,r),u=s||Hu(i),c=!u("as");return function(){var h=arguments,m=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&m.push("label:"+o+";"),h[0]==null||h[0].raw===void 0)m.push.apply(m,h);else{m.push(h[0][0]);for(var g=h.length,k=1;k<g;k++)m.push(h[k],h[0][k])}var y=cg(function(v,j,f){var d=c&&v.as||i,p="",x=[],C=v;if(v.theme==null){C={};for(var E in v)C[E]=v[E];C.theme=P.useContext(dg)}typeof v.className=="string"?p=J0(j.registered,x,v.className):v.className!=null&&(p=v.className+" ");var A=lg(m.concat(x),j.registered,C);p+=j.key+"-"+A.name,l!==void 0&&(p+=" "+l);var T=c&&s===void 0?Hu(d):u,B={};for(var R in v)c&&R==="as"||T(R)&&(B[R]=v[R]);return B.className=p,B.ref=f,P.createElement(P.Fragment,null,P.createElement(hg,{cache:j,serialized:A,isStringTag:typeof d=="string"}),P.createElement(d,B))});return y.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",y.defaultProps=t.defaultProps,y.__emotion_real=y,y.__emotion_base=i,y.__emotion_styles=m,y.__emotion_forwardProp=s,Object.defineProperty(y,"toString",{value:function(){return"."+l}}),y.withComponent=function(v,j){return e(v,wa({},n,j,{shouldForwardProp:$u(y,j,!0)})).apply(void 0,m)},y}},gg=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],w=mg.bind();gg.forEach(function(e){w[e]=w(e)});const vg=w.header`
    background-color: var(--body-background-color);
    border-bottom: 1px solid;
    color: #ececec;
    padding: 0;
`,xg=w.div`
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
`,yg=w(Lo)`
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
`,wg=w.span`
    color: var(--beckground-color);
`,kg=w.div`
    display: flex;
    align-items: center;
    padding: 0 15px;
    @media(max-width: 767px) {
        margin-top: 16px;
        justify-content: space-between;
        margin-bottom: 16px;
    }

`,Sg=w.button`
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

`,jg=w.svg`
`,Ag=w.div`
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

`,Cg=w.div`
    opacity: 1;
    visibility: visible;
    pointer - events: auto;

`,Eg=w.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100 %;
`,Pg=w.div`
    margin-bottom: auto;
`,Ng=w.button`
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

`,_g=w.svg`
    width: 18.67px;
    height: 18.67px;

`,M="/goit-markup-react/assets/icons-WWKJvoXN.svg",Vf=()=>a.jsxs(a.Fragment,{children:[a.jsx(Sg,{type:"button",id:"js-open-menu",children:a.jsx(jg,{width:"24",height:"12",children:a.jsx("use",{href:M+"#icon-menu"})})}),a.jsx(Ag,{children:a.jsx(Cg,{children:a.jsx(Eg,{children:a.jsx(Pg,{children:a.jsx(Ng,{children:a.jsx(_g,{children:a.jsx("use",{href:M+"#icon-close-menu"})})})})})})})]}),Tg=w.ul`
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
`,ml=w(Lo)`
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

`,Rg=w.a`

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
`;const zg=()=>{const e=wt();return a.jsxs(Tg,{children:[a.jsx(hl,{children:a.jsx(ml,{to:"/",state:{from:e},children:a.jsx(Rg,{children:"Студія"})})}),a.jsx(hl,{children:a.jsx(ml,{to:"/portfolio",state:{from:e},children:"Портфоліо"})}),a.jsx(hl,{children:a.jsx(ml,{href:"#",children:"Контакти"})})]})},Lg=w.ul`
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
`,Vu=w.li`
    display: flex;
    align-content: center;

`,Qu=w.a`
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
`,Ku=w.svg`
    margin-right: 10px;
}
`,Qf=()=>a.jsxs(Lg,{children:[a.jsx(Vu,{children:a.jsxs(Qu,{href:"mailto:info@devstudio.com",children:[a.jsx(Ku,{width:"16",height:"12",children:a.jsx("use",{href:M+"#poshta"})}),"info@devstudio.com"]})}),a.jsx(Vu,{children:a.jsxs(Qu,{href:"tel:+380961111111",children:[a.jsx(Ku,{width:"12",height:"16",children:a.jsx("use",{href:M+"#smartphone"})}),"+38 096 111 11 11"]})})]}),Og=()=>{const e=wt();return a.jsx(vg,{children:a.jsx(xg,{children:a.jsxs(kg,{children:[a.jsxs(yg,{to:"/",state:{from:e},lang:"en","data-wow-offset":"100",children:[a.jsx(wg,{children:"Web"}),"Studio"]}),a.jsxs(a.Fragment,{children:[" ",a.jsx(zg,{})," ",a.jsx(Qf,{})]})," ",a.jsx(Vf,{id:"js-menu-container"})]})})})},Mg="/goit-markup-react/assets/%D1%81oworker-mobile-DkjrP_lB.jpg",Ig="/goit-markup-react/assets/%D1%81oworker-mobile@2x-CfTHwFb7.jpg",Dg="/goit-markup-react/assets/%D1%81oworker-tablet-DNCU7IaL.jpg",Fg="/goit-markup-react/assets/%D1%81oworker-tablet@2x-CltOuUgI.jpg",Ug="/goit-markup-react/assets/%D1%81oworker-CBK_fIvu.jpg",Bg="/goit-markup-react/assets/%D1%81oworker@2x-DEOHsqO2.jpg",bg=w.section`
  padding-top: 118px;
  padding-bottom: 118px;
  background-color: var(--footer-bacground-color);
  text-align: center;
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${Mg});
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
      url(${Dg});
  }

  @media screen and (min-width: 1200px) {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${Ug});
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
      url(${Ig});
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 768px),
    screen and (min-resolution: 192dpi) and (min-width: 768px),
    screen and (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${Fg});
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1200px),
    screen and (min-resolution: 192dpi) and (min-width: 1200px),
    screen and (min-resolution: 2dppx) and (min-width: 1200px) {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${Bg});
  }
`,Wg=w.div`
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
`,Hg=w.h1`
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
`,$g=w.button`
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
`,Vg=()=>a.jsx(bg,{children:a.jsxs(Wg,{children:[a.jsxs(Hg,{children:["Ефективні рішення для ",a.jsx("br",{}),"вашого бізнесу"]}),a.jsx($g,{type:"button","data-modal-open":!0,children:"Замовити послугу"})]})}),Qg=w.section`
    padding-top: 60px;
        padding-bottom: 60px;
    @media (min-width:1200px) {
            padding-top: 94px;
            padding-bottom: 94px;
        }
`,Kg=w.div`
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
`,Yg=w.h2`
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
`,Gg=w.ul`
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

`,fi=w.li`
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
`,pi=w.div`
    height: 120px;
    margin-bottom: 30px;
    background-color: var(--icone-bg-color);
    display: flex;
    justify-content: center;
    align-items: center;

`,hi=w.svg`
 background - color: var(--icone-bg-color);

`,mi=w.h3`
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
`,gi=w.p`
    font-size: 14px;
    line-height: 1.71;
    letter-spacing: 0.03em;
    text-decoration: none;
    color: var(--text-color-p);
    margin-top: 0;
    
`,Xg=()=>a.jsx(Qg,{children:a.jsxs(Kg,{children:[a.jsx(Yg,{children:"Опис діятельності"}),a.jsxs(Gg,{children:[a.jsxs(fi,{children:[a.jsx(pi,{children:a.jsx(hi,{width:"70",height:"70",children:a.jsx("use",{href:M+"#antenna"})})}),a.jsx(mi,{children:"УВАГА ДО ДЕТАЛЕЙ"}),a.jsx(gi,{children:"Ідейні міркування, і навіть початок повсякденної роботи з формування позиції."})]}),a.jsxs(fi,{children:[a.jsx(pi,{children:a.jsx(hi,{width:"70",height:"70",children:a.jsx("use",{href:M+"#clock"})})}),a.jsx(mi,{children:"ПУНКТУАЛЬНІСТЬ"}),a.jsx(gi,{children:"Завдання організації, особливо рамки і місце навчання кадрів тягне у себе."})]}),a.jsxs(fi,{children:[a.jsx(pi,{children:a.jsx(hi,{width:"70",height:"70",children:a.jsx("use",{href:M+"#diagram"})})}),a.jsx(mi,{children:"ПЛАНУВАННЯ"}),a.jsx(gi,{children:"Так само консультація з широким активом значною мірою зумовлює."})]}),a.jsxs(fi,{children:[a.jsx(pi,{children:a.jsx(hi,{width:"70",height:"70",children:a.jsx("use",{href:M+"#astronaut"})})}),a.jsx(mi,{children:"СУЧАСНІ ТЕХНОЛОГІЇ"}),a.jsx(gi,{children:"Значимість цих проблем настільки очевидна, що реалізація планових завдань."})]})]})]})}),Zg=w.section`

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
`,qg=w.div`
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
`,Jg=w.h2`
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
`,ev=w.ul`
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
`,Yu="/goit-markup-react/assets/photo_2022-07-14_23-06-50-w-9GE9pw.jpg",Gu="/goit-markup-react/assets/photo_2022-07-14_23-08-23-ChSN16Q0.jpg",Xu="/goit-markup-react/assets/photo_2022-07-14_23-08-29-DEV7w-ry.jpg",tv=()=>a.jsx(Zg,{children:a.jsxs(qg,{children:[a.jsx(Jg,{children:"Чим ми займаємося"}),a.jsxs(ev,{children:[a.jsxs(gl,{children:[a.jsx("a",{href:Yu,children:a.jsx(vl,{src:Yu,alt:"photo",width:"370",height:"294"})}),a.jsx(xl,{children:"Десктопні додатки"})]}),a.jsxs(gl,{children:[a.jsx("a",{href:Gu,children:a.jsx(vl,{src:Gu,alt:"photo",width:"370",height:"294"})}),a.jsx(xl,{children:"Мобільні додатки"})]}),a.jsxs(gl,{children:[a.jsx("a",{href:Xu,children:a.jsx(vl,{src:Xu,alt:"photo",width:"370",height:"294"})}),a.jsx(xl,{children:"Дизайнерські рішення"})]})]})]})}),nv=w.section`
    background-color: var(--teams-bacground-color);
    align-items: center;
    padding-top: 60px;
        // padding-bottom: 60px;
            padding-bottom: 0px;

    
    @media (min-width:1200px) {
            padding-top: 94px;
            padding-bottom: 94px;
            
        }
`,rv=w.div`
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
`,iv=w.h2`
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
`,ov=w.ul`
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
`,vi=w.li`
        @media screen and (min-width:768px) {
background-color: var(--body-background-color);
        @media screen and (min-width:1200px) {
background-color: var(--body-background-color);
width: 270px;
}
`,xi=w.div`
  display: block;
  padding: 30px 0;
  margin-top: 0;
  margin-bottom: 0;
  outline: 2px solid var(--technical-color);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 4px 4px;
`,yi=w.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.18;
  text-align: center;
  letter-spacing: 0.03em;
  color: var(--text-color);
  margin-top: 0;
  margin-bottom: 10px;
`,wi=w.p`
  font-size: 16px;
  line-height: 1.18;
  text-align: center;
  letter-spacing: 0.03em;
  color: var(--text-color);
  margin-top: 0;
  font-size: 16px;
  color: var(--text-color-p);
`,ki=w.ul`
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
`,lv="/goit-markup-react/assets/product-designer-mobile-CR9XjxZR.jpg",av="/goit-markup-react/assets/frontend-developer-mobile-CKsiOpXf.jpg",sv="/goit-markup-react/assets/marketing-mobile-D4eyMM5O.jpg",uv="/goit-markup-react/assets/ui-mobile-CkzJuxso.jpg",cv=()=>a.jsx(nv,{children:a.jsxs(rv,{class:"animate__animated animate__fadeInUp wow","data-wow-offset":"100",children:[a.jsx(iv,{children:"Наша команда"}),a.jsxs(ov,{children:[a.jsxs(vi,{children:[a.jsx("img",{src:lv,alt:"mikola-tarasov-photo"}),a.jsxs(xi,{children:[a.jsx(yi,{children:"Ігор Дем`яненко"}),a.jsx(wi,{lang:"en",children:"Product Designer"}),a.jsxs(ki,{children:[a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка інстаграм",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-instagram"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка твітер",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-tviter"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка феїсбук",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-facebook"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка линкедін",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-linkedin"})})})})]})]})]}),a.jsxs(vi,{children:[a.jsx("img",{src:av,alt:"mikola-tarasov-photo"}),a.jsxs(xi,{children:[a.jsx(yi,{children:"Ольга Рєпіна"}),a.jsx(wi,{lang:"en",children:"Frontend Developer"}),a.jsxs(ki,{children:[a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка інстаграм",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-instagram"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка твітер",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-tviter"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка феїсбук",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-facebook"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка линкедін",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-linkedin"})})})})]})]})]}),a.jsxs(vi,{children:[a.jsx("img",{src:sv,alt:"mikola-tarasov-photo"}),a.jsxs(xi,{children:[a.jsx(yi,{children:"Микола Тарасов"}),a.jsx(wi,{lang:"en",children:"Marketing"}),a.jsxs(ki,{children:[a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка інстаграм",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-instagram"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка твітер",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-tviter"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка феїсбук",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-facebook"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка линкедін",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-linkedin"})})})})]})]})]}),a.jsxs(vi,{children:[a.jsx("img",{src:uv,alt:"mikola-tarasov-photo"}),a.jsxs(xi,{children:[a.jsx(yi,{children:"Михайло Єрмаков"}),a.jsx(wi,{lang:"en",children:"UI Designer"}),a.jsxs(ki,{children:[a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка інстаграм",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-instagram"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка твітер",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-tviter"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка феїсбук",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-facebook"})})})}),a.jsx(de,{children:a.jsx(fe,{children:a.jsx(pe,{"aria-label":"іконка линкедін",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-linkedin"})})})})]})]})]})]})]})}),dv=w.section`
    padding-top: 60px;
        padding-bottom: 60px;

    
        @media (min-width:1200px) {
            padding-top: 94px;
            padding-bottom: 94px;
        }
`,fv=w.div`
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
`,pv=w.h2`
    font-weight: 700;
    font-size: 36px;
    line-height: 1.16;
    text-align: center;
    letter-spacing: 0.03em;
    color: var(--text-color);
    margin: 0px;
    margin-bottom: 50px;
`,hv=w.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    // column-gap: 30px;
    gap: 28px;
    list-style: none;
    padding: 0;
    margin: 0;
`,un=w.li`
    // flex-basis: calc((100% - 30px) / 2);

        @media screen and (min-width:768px) {
            flex-basis: calc((100% - 60px) / 3);
        }

        @media screen and (min-width:1200px) {
            flex-basis: calc((100% - 150px) / 6);
        }
`,cn=w.a`
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
`,dn=w.svg`
        display: flex;
        align-self: center;
        width: 170px;
        height: 92px;
`,mv=()=>a.jsx(dv,{children:a.jsxs(fv,{children:[a.jsx(pv,{children:"Постійні клієнти"}),a.jsxs(hv,{children:[a.jsx(un,{children:a.jsx(cn,{children:a.jsx(dn,{"aria-label":"іконка логотип",width:"106",height:"60",children:a.jsx("use",{href:M+"#icon-Logo"})})})}),a.jsx(un,{children:a.jsx(cn,{children:a.jsx(dn,{"aria-label":"іконка логотип",width:"106",height:"60",children:a.jsx("use",{href:M+"#icon-Logo-2"})})})}),a.jsx(un,{children:a.jsx(cn,{children:a.jsx(dn,{"aria-label":"іконка логотип",width:"106",height:"60",children:a.jsx("use",{href:M+"#icon-Logo-3"})})})}),a.jsx(un,{children:a.jsx(cn,{children:a.jsx(dn,{"aria-label":"іконка логотип",width:"106",height:"60",children:a.jsx("use",{href:M+"#icon-Logo-4"})})})}),a.jsx(un,{children:a.jsx(cn,{children:a.jsx(dn,{width:"106",height:"60",children:a.jsx("use",{href:M+"#icon-Logo-5"})})})}),a.jsx(un,{children:a.jsx(cn,{children:a.jsx(dn,{"aria-label":"іконка логотип",width:"106",height:"60",children:a.jsx("use",{href:M+"#icon-Logo-6"})})})})]})]})}),gv=()=>a.jsxs(a.Fragment,{children:[a.jsx(Og,{}),a.jsx(Vg,{}),a.jsx(Xg,{}),a.jsx(tv,{}),a.jsx(cv,{}),a.jsx(mv,{})]}),vv=w.header`
    background-color: var(--body-background-color);
    border-bottom: 1px solid;
    color: #ececec;
    padding: 0;
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
`,yv=w(Lo)`
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
`,wv=w.span`
    color: var(--beckground-color);
`,kv=w.div`
    display: flex;
    align-items: center;
    padding: 0 15px;
    @media(max-width: 767px) {
        margin-top: 16px;
        justify-content: space-between;
        margin-bottom: 16px;
    }

`,Sv=w.ul`
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
`,wl=w(Lo)`
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

`,jv=w.a`

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
`;const Av=()=>{const e=wt();return a.jsxs(Sv,{children:[a.jsx(yl,{children:a.jsx(wl,{to:"/",state:{from:e},children:"Студія"})}),a.jsx(yl,{children:a.jsx(wl,{to:"/portfolio",state:{from:e},children:a.jsx(jv,{children:"Портфоліо"})})}),a.jsx(yl,{children:a.jsx(wl,{href:"#",children:"Контакти"})})]})},Cv=()=>{const e=wt();return a.jsx(vv,{children:a.jsx(xv,{children:a.jsxs(kv,{children:[a.jsxs(yv,{to:"/",state:{from:e},lang:"en","data-wow-offset":"100",children:[a.jsx(wv,{children:"Web"}),"Studio"]}),a.jsxs(a.Fragment,{children:[" ",a.jsx(Av,{})," ",a.jsx(Qf,{})]})," ",a.jsx(Vf,{id:"js-menu-container"})]})})})},Ev=w.section`
        padding-top: 60px;
        padding-bottom: 60px;
    @media (min-width:1200px) {
            padding-top: 94px;
            padding-bottom: 94px;
        }
`,Pv=w.div`
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
`,Nv=w.h1`
    position: fixed;
    transform: scale(0);

`,_v=w.ul`
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
`,nr=w.li`
    display: inline-block;
    margin-left: 8px;
    @media screen and(max-width: 767px){
        margin-left: 0px;
    }
`,rr=w.button`
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
`,Tv=()=>a.jsxs(a.Fragment,{children:[a.jsx(Nv,{children:"Портфоліо"}),a.jsxs(_v,{children:[a.jsxs(nr,{children:[" ",a.jsx(rr,{children:"Усі"})," "]}),a.jsx(nr,{children:a.jsx(rr,{children:"Веб-сайти"})}),a.jsx(nr,{children:a.jsx(rr,{children:"Додатки"})}),a.jsx(nr,{children:a.jsx(rr,{children:"Дизайн"})}),a.jsx(nr,{children:a.jsx(rr,{children:"Маркетинг"})})]})]}),Rv=w.ul`
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
`,nt=w.li`
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
`,rt=w.div`
    position: relative;
    overflow: hidden;
`,it=w.div`
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(33, 150, 243, 0.9);
    padding: 0 24px;
    height: 100%;
    width: 100%;
    transition: transform 250ms var(--timing-functione);
    transform: translateY(101%);

    @media screen and(min-width: 768px) {
        align-items: center;
    }

`,ot=w.p`
    margin: 0;
    color: var(--body-background-color);
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;

    &:hover,
    &:focus {
    transform: translateY(0);
    opacity: 1;
} 

`,lt=w.div`
    display: block;
    padding: 24px 20px;
    // margin-top: 0;
    // margin-bottom: 0;
    outline: 2px solid var(--technical-color);
    border-left: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    flex-grow: 1;
`,at=w.h2`
    font-weight: 700;
    font-size: 18px;
    line-height: 2;
    letter-spacing: 0.06em;
    color: $text-c;
    margin-top: 0px;
    margin-bottom: 4px;
    color: var(--text-color);
`,st=w.p`
    font-weight: 700;
    font-size: 18px;
    line-height: 2;
    letter-spacing: 0.06em;
    color: $text-c;
    margin-top: 0px;
    margin-bottom: 4px;
`,ut=w.a`
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



`,Zu="/goit-markup-react/assets/img-desktop-DHCT8Soc.jpg",qu="/goit-markup-react/assets/img2-desktop-D7-ZjpYy.jpg",Ju="/goit-markup-react/assets/img3-desktop-D_3z_YZf.jpg",ec="/goit-markup-react/assets/img4-desktop-CI8oy9vU.jpg",tc="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAgICAgJCAkKCgkNDgwODRMREBARExwUFhQWFBwrGx8bGx8bKyYuJSMlLiZENS8vNUROQj5CTl9VVV93cXecnNEBCAgICAkICQoKCQ0ODA4NExEQEBETHBQWFBYUHCsbHxsbHxsrJi4lIyUuJkQ1Ly81RE5CPkJOX1VVX3dxd5yc0f/CABEIASYBcgMBIgACEQEDEQH/xAAzAAEAAgMBAQEAAAAAAAAAAAAAAgMBBAUGBwgBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/aAAwDAQACEAMQAAAA+7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIVlkYZhbKiUrUZAAAAAAAAAAAAAAAAAABXAnDGYDUxttuNzuHb1bh9zqzIz6s5TpFyucsgAAAAAAAAAAAAAArps0TbzRdDOcZNXg+pr83fgb/QrpbErJelhGenzb16uxzt8lgJzpqN1xuzIAAAAAAAAAAAACnn9Hmlkoi23XybOdeyFiIo5PdGjvAYpL6eJxTucKimXV9589+hABjWidpjMwAAAAAAAAABVzenyS6VUyQMgnOkbGKa4bWvxtA6PIzRKFSoVqjrfRvmnu623tHQo5umynk9jDol0eZi1fST8xvdHN2Wvsb4BMAAAAAAAPPehwcS6zRN3NFpJjJnGA53R5pysSiVa9+qVUbHTpfidbuT5+iu3Vvx20K9uN745XWrrnCWv1YnGHna37tHzVL78PS8sAAAAAAABGQ5mn34nKsaZuKpEub0OccyKJXrS4Z2Ox5He8z1PZZ8p14npVWr01diUJWK/PRPo/OeP0KabvKnXF49Dnbc1/RA9TxwAAAAAAAAAEZDl6foIHH0Op5UhxNLYNW3bvide+dfmerOVdmO93S461fU+f4vB0pt6KMWRzWQhKshs6mzNf0gPU8cAAAAAAAAAAADFN+DznF93A8Db6zTh5PQ73mPN9XcnVZh0ZzGUubwe9wL1xFGYjCWuS19Tf1y5ff7vV6eP03pfCdHbn9vnznUmN9XYAAAAAAAAAAAMZEY2DU8p7XFb/ACDP1jyXH3eezqz5evU893/NWi2jQ3dctDd9T0uri5fS3Nvbn1dvYvKtqewjG3HYlZsU2l0q5kkRIAAAAAAAAAAAAFHkPbRpf4Zxf0Lx89vnfS71W3PztncuNW/ZuRr7F90qL7Zlds5kbMzMSSAAAAAAAAAAAAAAAMRmKdToYONHswOZbuDXndIqnZkhKWTEgAAAAAAAAAAAAAAAAAAYyMYkI5yMZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//xABAEAACAgECAwQGBwUGBwAAAAABAgADEQQSBSExEEFRYRMgMkBxgQYUM1BygrEiIyRCsiU0UmSRoTBjcHSAwdH/2gAIAQEAAT8A/wDIYv4QOYGB+6y8JJ9QEiBh9zl4ST2Y7OQ7/UyQYG+4y/hCSezEPKPqu5B8zLNYN5TeWcDJRTzxDqLLhaq7gQwClBkj8QPTzBml+tJgWWhmz/KMdhsrDqhdQxGQueZ7c4gfxgIPv1j7FzN+7v8AV1RbaPDvllmosHo2qdCxKnHMYPmMSvT5r2XYcdQDz2/A8olLsBgcvEypKUfbvBsxnGecHp3PPCYbuIbcJXUla7UBx5kn9YSB1lms01TIr2Bd7BVz3k90BBHLtDmBgffNR9mYIth74CD28jDVXn2BCErGdn+gzALnP7eEAJBAOdw+PLEStEAAHQYBJyf9TMgDnLNZWCUQhrAu7ZkbiPIRbNfq9rbPQqeeH5v8CByHyMo4fXUd3MtgAsTliB4mKqryA9Sy2uobnYASnii26qulF5HOSfIe93/ZNBB2K574GB9XUXWVVsyVM+BnC4JPwzGTX6snNnoU7tnN/LmeQ8xNPw+mkcl78+PWAADAHaZbfVUMu4E1HF+oqGPMy3UvYxLMSfOcJbPEtP8AP9D73f8AZN2D1A5gYHv/AOBdqaaRl2A8pqeLMciobR498svd2JLExnjNODHPE9P+b9D6hYKMkgCDWactt3wEH3W77J/hAYD6wYiBx2Z7LtVTT7Tc/AdZqOJWtyQbB/vLLGYkkxjC0ZoTOCn+1NN8W/Q9jMqjJIAluuUcqxnzlltlpy7EzErvuq9hiPKVcRU4Fi48xEsRxlWBHud32b/A9gMB7c+oHIl2prpUM2fIS7X3WZC/sjy6wkmMY0YwmNGM4IccU057huyflLdaByrGfMyyx7DliTLbK6kL2OqKOpY4EHGtO+oFNVNtnMAlV6buh2nnjz7MTEDOhypIPiJVxCxeVg3Dx6GVaqm32X5+B9yt9PRa29f2SxxK7Uboefh2D1c9nEfYr+J7DGjGMYTiIllrba0LHylHBicNe/5VlVFNK7a0Cjsu0d9uoFn121ax0rTAljLen8bpq0o7vSNlt3djHfNMlC1WNpqdpJOcqVLN5k859V4vqWzfYKvJWO1fwhSCT5ky3U6XhulH1jUkitOrsC7f/TNHra9UisqOpK5wVOB+bp2GHlzziab6R0DX6bRJb6U2WBOXML8/cSAQQQCJdw5GyaztPh3RjfQcWLyiWo+MHn4TPrcR9iv4nsMbpHi1W2nbWhYynhI63t+VZXXXUoWtAo8BCTg4GTF1BDBLU2tgklclAB4sQIrq6hlYEHoQcgw3uXK8lHPr5RbPSNsetXXPhkeRl2iqvurssewhOYTcQufEgRX1aEvaK66hyCrlyZXpdFqbFt+qNX6J9yhl2KzH+bHeRMRiACSQAOpmu+kej025af31nl7M1/FtbrSRbZhP8C8hOAHHG+Gn/MJ7myqwIIBBl3D1POo7T4QtdQ22xTEsRxyPy7M9vEfYr+JmYTGMeU6q2hjsb4iUcUpfAsGw/wC0DKQCCCOx0V1KuoZT3EZEWlVsawM+SMBdx2j4CelIYC+gbmbC7cvy8TyGIhrOdhHXu7DCygEsQAOpM130k0lG5aB6Z/Eclmu4rrdaf3tp2dyLyWGMZwU44xw7/ua/6vdWVWBDAES7h4POpsHwM33UnbYpi2o45Ht4if2K/iewy++qkEu4Eu19lh20rgePfNIGAcs2SSIMSm+2j2HI8u6U8TRsC1dp8R0iujLlWBHlBCAZXXVUCK0VQfAYjuqKWdgFHUk4mt+kmmpylA9K/j0WaziWs1rZutO3uUclEMaEwmcKOOK8PP8Ama/6vd3RXGGAIl3D++lseRhe2k7bFMSxW6GcR9iv4mW31UruscKJqOKvYSunX8xE9G7sWtYkmBO4CVKVBg7UtsrOUcqZTxIezavzE+sU7DZ6Rdg78zW/STT1gppl9I3ieSzWcQ1erObrSR3L0A7WMJMJhM4c2OI6I+Gor/qHvLojjDKCJdw7GTS3yM45qNZRXUiVkuWI6Q0XWNuvckxagBgDEWmJT5SxNgXznjiAwQzvnFM/V1/GOwmc8QmNDGhM4ZW9/FNFTVg2Ncu0Z8Dn3rEsqSwEMoImq4HS+TXyPhLeF21H2YNMR1EWia9dgq88wGDszz7OKH9wv4xDDDCciGEyy6usZZo2ouvfZQhyfAZM4LwvVaXV0617NllbZUDmZofpDfyF6g+YlGvouAw0DA+8Y7GQMOYluirbujaIrOOU+j0i245q/wCsrvRuXQ+BgMBEPZxP+7r+MQmEwmGW2pWMs2I+qttbZShyfmZpeBXWkPqWK+Q5maXQU0LtqrC/qZXRKqcSoFeko1Nq98q1WesWxW94xCIVEs09dilXUFT1Bmv+i1bhn0jbT/gbmJdRrNE+y2tl8m6H4GV3IxxnB8DM9nE/7uv4xDCZZalYy7ASzV22tspQ8+neZpeB33HfqGKjw6tNLw+jTriqsDxPeZXREoiVCJXESIkRYkBMDTPvGJiXaem9Cltaup7iJr/oohy+jfH/AC3l1Wr0T+juRl8m/wDRld6Ny6HwM4of4cfjEstSvm7ASzWWWHZSp5/MzS8D1N536higPzaaXh2n04xVWAe89SYlMSiJVFri1xa4qRVirFEEHvt+npvQpbWrqe4ia/6Ljm+kf8jTjtet0tAqZHVzYAAR+k0vAdZqCH1BNa+fNjNJwvT6YAV1jPex5kxaYtMWqLXFqi1xa4tcCQLAsAgEHvxEt09Vow6BviJqOD1NzQYj8Nev+WDTkd0FPlFpi1RaotcVIEgWBYFgEAmPfzCI1anqJZpEbujaTE9DiCqCuBIFgWBYBMTH3GRMQrDWDPRibIFgWYmJj7oxMTExMTH/AFF//8QAKBEAAgECBQIGAwAAAAAAAAAAAQIDABEEECExQDJBBRITImBhIDNx/9oACAECAQE/APn008UIu7Wo+Ji/tiNvs2rC4kYgN7bW42JwLSymQONex7UnhgveSS/0KjjSNQqKAOeWA3PGZ1Xc007HRRajfvSyOuxpZ1PULUCDseCzqu5ppmOi6Ub968jWvkbZIxDCx78GZiJnpXGdwKLZL1D+8HEfufIEivMSPwXccHEqfVbNds1iZqSFV14LIr7ipMKRqmtEEGxFLtSxs1JCo34roj9QpYFX7q1vlP8A/8QAJxEAAgECBQMEAwAAAAAAAAAAAQIAAxEEITEyQBASUSBgcYEzQWH/2gAIAQMBAT8A9/KjMchBQ8tKlPsIz4yVQqgEQ1/AjMSbk88KToDxlRm0ESgo3G8Xt/Uamj6iNh2G3OEEZEcFUZtBEoKM2zghpNa8Igv9QAmPTBRr+DwaCA0UjUyOmcAJgTz0ba3xwcN+FPvoVBnYAfQ20/HBwpBoj+E9T1eqqamVK7NcDIcFKjobqZTxanJxaAgi4MMeqqamPiGbbkISTxEqOm0x8S7AZWhJPun/2Q==",nc="/goit-markup-react/assets/img6-desktop-T8iIHNok.jpg",rc="/goit-markup-react/assets/img7-desktop-Dg4i-DKN.jpg",ic="/goit-markup-react/assets/img8-desktop-CsQ4ePrM.jpg",oc="/goit-markup-react/assets/img9-desktop-Mm3BjZR-.jpg",zv=()=>a.jsx(a.Fragment,{children:a.jsxs(Rv,{children:[a.jsxs(nt,{children:[a.jsx(rt,{children:a.jsx(it,{children:a.jsx(ot,{children:"Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу."})})}),a.jsxs(ut,{src:Zu,children:[a.jsx("img",{src:Zu,alt:"ноутбук"}),a.jsxs(lt,{children:[a.jsx(at,{children:"Технокряк"}),a.jsx(st,{children:"Веб-сайт"})]}),"    "]})]}),a.jsx(nt,{children:a.jsxs(ut,{src:qu,children:[a.jsxs(rt,{children:[a.jsx("img",{src:qu,alt:"баскетбол"}),a.jsx(it,{children:a.jsx(ot,{children:"Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу."})})]}),a.jsxs(lt,{children:[a.jsxs(at,{children:["Постер ",a.jsx("span",{lang:"en",children:"New Orlean vs Golden Star"})]}),a.jsx(st,{children:"Дизайн"})]})]})}),a.jsx(nt,{children:a.jsxs(ut,{src:Ju,children:[a.jsxs(rt,{children:[a.jsx("img",{src:Ju,alt:"морська Іжа"}),a.jsx(it,{children:a.jsx(ot,{children:"Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу."})})]}),a.jsxs(lt,{children:[a.jsxs(at,{children:["Ресторан ",a.jsx("span",{lang:"en",children:"Seafood"})]}),a.jsx(st,{children:"Додаток"})]})]})}),a.jsx(nt,{children:a.jsxs(ut,{src:ec,children:[a.jsxs(rt,{children:[a.jsx("img",{src:ec,alt:"навушники"}),a.jsx(it,{children:a.jsx(ot,{children:"Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу."})})]}),a.jsxs(lt,{children:[a.jsxs(at,{children:["Проєкт ",a.jsx("span",{lang:"en",children:"Prime"})]}),a.jsx(st,{children:"Маркетинг"})]})]})}),a.jsx(nt,{children:a.jsxs(ut,{src:tc,children:[a.jsxs(rt,{children:[a.jsx("img",{src:tc,alt:"дві коробки"}),a.jsx(it,{children:a.jsx(ot,{children:"Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу."})})]}),a.jsxs(lt,{children:[a.jsxs(at,{children:["Проєкт ",a.jsx("span",{lang:"en",children:"Boxes"})]}),a.jsx(st,{children:"Додаток"})]})]})}),a.jsx(nt,{children:a.jsxs(ut,{src:nc,children:[a.jsxs(rt,{children:[a.jsx("img",{src:nc,alt:"монітор"}),a.jsx(it,{children:a.jsx(ot,{children:"Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу."})})]}),a.jsxs(lt,{children:[a.jsx(at,{lang:"en",children:"Inspiration has no Borders"}),a.jsx(st,{children:"Веб-сайт"})]})]})}),a.jsx(nt,{children:a.jsxs(ut,{src:rc,children:[a.jsxs(rt,{children:[a.jsx("img",{src:rc,alt:"журнал"}),a.jsx(it,{children:a.jsx(ot,{children:"Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу."})})]}),a.jsxs(lt,{children:[a.jsxs(at,{children:["Видання ",a.jsx("span",{lang:"en",children:"Limited Edition"})]}),a.jsx(st,{children:"Дизайн"})]})]})}),a.jsx(nt,{children:a.jsxs(ut,{src:ic,children:[a.jsxs(rt,{children:[a.jsx("img",{src:ic,alt:"бірка"}),a.jsx(it,{children:a.jsx(ot,{children:"Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу."})})]}),a.jsxs(lt,{children:[a.jsxs(at,{children:["Проєкт ",a.jsx("span",{lang:"en",children:"LAB"})]}),a.jsx(st,{children:"Маркетинг"})]})]})}),a.jsx(nt,{children:a.jsxs(ut,{src:oc,children:[a.jsxs(rt,{children:[a.jsx("img",{src:oc,alt:"работа"}),a.jsx(it,{children:a.jsx(ot,{children:"Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу."})})]}),a.jsxs(lt,{children:[a.jsx(at,{lang:"en",children:"Growing Business"}),a.jsx(st,{children:"Додаток"})]})]})})]})}),Lv=()=>a.jsxs(a.Fragment,{children:[a.jsx(Cv,{}),a.jsx(Ev,{children:a.jsxs(Pv,{children:[a.jsx(Tv,{}),a.jsx(zv,{})]})}),a.jsx(P.Suspense,{fallback:a.jsx("div",{children:"Loading page..."}),children:a.jsx(i0,{})})]}),Ov=w.section`
    background: var(--footer-bacground-color);
    padding-top: 60px;
    padding-bottom: 60px;

    @media screen and (max-width:767px) {
        text-align: center;
  }
`,Mv=w.div`
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
`,Iv=w.div`
    background: var(--footer-bacground-color);
    padding-top: 60px;
    padding-bottom: 60px;

    @media screen and (max-width:767px) {
        text-align: center;
  }
`,Dv=w.a`
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 26px;
    line-height: 1.19;
    letter-spacing: 0.03em;
    text-decoration: none;
    color: var(--beckground-color);
    display: inline-block;
    margin-bottom: 20px;
`,Fv=w.span`
color: var(--body-background-color);
`,Uv=w.ul`
    list-style: none;
`,kl=w.li`
    &:not(:last-child) {
    margin-bottom: 9px;
    }

`,Bv=w.a`
    font-size: 14px;
    line-height: 1.7;
    font-style: normal;
    letter-spacing: 0.03em;
    text-decoration: none;
    color: var(--body-background-color);

`,lc=w.a`
    font-size: 14px;
    line-height: 1.7;
    text-decoration: none;
    font-style: normal;
    letter-spacing: 0.03em;
    color: rgba(255, 255, 255, 0.6);

`,bv=w.div`
    @media screen and (max-width: 768px) {
        margin-bottom: 60px;
        margin-bottom: 0;
      }
  @media screen and (min-width:1200px) {
    margin-bottom: 60px;
    margin-left: 70px;
  }
`,ac=w.h2`
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
`,Wv=w.ul`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;

    @media screen and (max-width: 768px) {
        justify-content: center;
}
`,Si=w.li`
    display: flex;
`,ji=w.a`
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
`,Ai=w.svg`
    background-repeat: no-repeat;
    background-size: 20px 20px;
    background-position: left, center -10px, center, right;
    background-origin: content-box;
    fill: #ffffff;
`,Hv=w.div`
// display: flex;

        @media screen and (min-width:1200px) {
            display: flex;
    }
`,$v=w.div`
    margin: 0;
    padding: 0;
    @media screen and (min-width:1200px) {
    margin-left: auto;
    }
`,Vv=w.form`

`,Qv=w.input`
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
`,Kv=w.button`
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
`,Yv=w.svg`
    top: 0;
    right: 0;
`,Gv=()=>a.jsx(Ov,{children:a.jsxs(Mv,{children:[a.jsxs(Iv,{children:[a.jsxs(Dv,{href:"index.html",lang:"en",children:["Web",a.jsx(Fv,{children:"Studio"})]}),a.jsx("address",{children:a.jsxs(Uv,{children:[a.jsx(kl,{children:a.jsx(Bv,{href:"https://goo.gl/maps/CPtrU1FHBa2aNyZL9",target:"_blank",rel:"noopener noreferrer",children:"м. Київ, пр-т Лесі Українки, 26"})}),a.jsx(kl,{children:a.jsx(lc,{href:"mailto:info@devstudio.com",children:"info@devstudio.com"})}),a.jsx(kl,{children:a.jsx(lc,{href:"tel:+380961111111",children:"+38 096 111 11 11"})})]})})]}),a.jsxs(bv,{children:[a.jsx(ac,{children:"ПРИЄДНУЙТЕСЬ"}),a.jsxs(Wv,{children:[a.jsx(Si,{children:a.jsx(ji,{children:a.jsx(Ai,{"aria-label":"іконка інстаграм",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-instagram"})})})}),a.jsx(Si,{children:a.jsx(ji,{children:a.jsx(Ai,{"aria-label":"іконка твітер",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-tviter"})})})}),a.jsx(Si,{children:a.jsx(ji,{children:a.jsx(Ai,{"aria-label":"іконка феїсбук",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-facebook"})})})}),a.jsx(Si,{children:a.jsx(ji,{children:a.jsx(Ai,{"aria-label":"іконка линкедін",class:"icones",width:"20",height:"20",children:a.jsx("use",{href:M+"#icon-linkedin"})})})})]})]}),a.jsxs($v,{children:[a.jsx(ac,{children:"Підпишіться на розсилку"}),a.jsx(Vv,{children:a.jsxs(Hv,{children:[a.jsx("label",{for:"email"}),a.jsx(Qv,{type:"email",name:"mail",id:"mail",placeholder:"E-mail"}),a.jsxs(Kv,{type:"submit",children:["Підписатися",a.jsx(Yv,{width:"24",height:"24",children:a.jsx("use",{href:M+"#icon-icon-send"})})]})]})})]})]})}),Xv=()=>{const e=Tf();return a.jsxs(a.Fragment,{children:[a.jsx("button",{onClick:()=>e("/"),children:"Home"}),a.jsx("button",{onClick:()=>e("/porfolio"),children:"About"}),a.jsxs(l0,{children:[a.jsx(va,{path:Iu.HOME,element:a.jsx(gv,{})}),a.jsx(va,{path:Iu.PORTFOLIO,element:a.jsx(Lv,{})})]}),a.jsx(Gv,{})]})},Zv=document.getElementById("root"),qv=Sf(Zv);qv.render(a.jsx(P.StrictMode,{children:a.jsx(h0,{basename:"/goit-markup-react/",children:a.jsx(Xv,{})})}));
