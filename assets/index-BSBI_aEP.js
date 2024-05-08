import{R as _e,r as N,j as e}from"./index-BuH7osy7.js";function Pe(){return Pe=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},Pe.apply(this,arguments)}function Ze(t){var n=Object.create(null);return function(i){return n[i]===void 0&&(n[i]=t(i)),n[i]}}var dt=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,lt=Ze(function(t){return dt.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function ht(t){if(t.sheet)return t.sheet;for(var n=0;n<document.styleSheets.length;n++)if(document.styleSheets[n].ownerNode===t)return document.styleSheets[n]}function pt(t){var n=document.createElement("style");return n.setAttribute("data-emotion",t.key),t.nonce!==void 0&&n.setAttribute("nonce",t.nonce),n.appendChild(document.createTextNode("")),n.setAttribute("data-s",""),n}var xt=function(){function t(i){var r=this;this._insertTag=function(a){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(a,s),r.tags.push(a)},this.isSpeedy=i.speedy===void 0?!0:i.speedy,this.tags=[],this.ctr=0,this.nonce=i.nonce,this.key=i.key,this.container=i.container,this.prepend=i.prepend,this.insertionPoint=i.insertionPoint,this.before=null}var n=t.prototype;return n.hydrate=function(r){r.forEach(this._insertTag)},n.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(pt(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var s=ht(a);try{s.insertRule(r,s.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(r));this.ctr++},n.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},t}(),R="-ms-",ue="-moz-",p="-webkit-",Je="comm",Ee="rule",Fe="decl",mt="@import",Qe="@keyframes",gt="@layer",ft=Math.abs,be=String.fromCharCode,ut=Object.assign;function bt(t,n){return S(t,0)^45?(((n<<2^S(t,0))<<2^S(t,1))<<2^S(t,2))<<2^S(t,3):0}function et(t){return t.trim()}function wt(t,n){return(t=n.exec(t))?t[0]:t}function x(t,n,i){return t.replace(n,i)}function Re(t,n){return t.indexOf(n)}function S(t,n){return t.charCodeAt(n)|0}function X(t,n,i){return t.slice(n,i)}function z(t){return t.length}function Ie(t){return t.length}function ee(t,n){return n.push(t),t}function vt(t,n){return t.map(n).join("")}var we=1,q=1,tt=0,O=0,j=0,G="";function ve(t,n,i,r,a,s,c){return{value:t,root:n,parent:i,type:r,props:a,children:s,line:we,column:q,length:c,return:""}}function V(t,n){return ut(ve("",null,null,"",null,null,0),t,{length:-t.length},n)}function yt(){return j}function jt(){return j=O>0?S(G,--O):0,q--,j===10&&(q=1,we--),j}function I(){return j=O<tt?S(G,O++):0,q++,j===10&&(q=1,we++),j}function $(){return S(G,O)}function me(){return O}function Z(t,n){return X(G,t,n)}function K(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function nt(t){return we=q=1,tt=z(G=t),O=0,[]}function it(t){return G="",t}function ge(t){return et(Z(O-1,Oe(t===91?t+2:t===40?t+1:t)))}function kt(t){for(;(j=$())&&j<33;)I();return K(t)>2||K(j)>3?"":" "}function St(t,n){for(;--n&&I()&&!(j<48||j>102||j>57&&j<65||j>70&&j<97););return Z(t,me()+(n<6&&$()==32&&I()==32))}function Oe(t){for(;I();)switch(j){case t:return O;case 34:case 39:t!==34&&t!==39&&Oe(j);break;case 40:t===41&&Oe(t);break;case 92:I();break}return O}function Ct(t,n){for(;I()&&t+j!==57;)if(t+j===84&&$()===47)break;return"/*"+Z(n,O-1)+"*"+be(t===47?t:I())}function At(t){for(;!K($());)I();return Z(t,O)}function Tt(t){return it(fe("",null,null,null,[""],t=nt(t),0,[0],t))}function fe(t,n,i,r,a,s,c,d,b){for(var k=0,g=0,f=c,M=0,E=0,u=0,l=1,w=1,v=1,y=0,C="",D=a,_=s,F=r,m=C;w;)switch(u=y,y=I()){case 40:if(u!=108&&S(m,f-1)==58){Re(m+=x(ge(y),"&","&\f"),"&\f")!=-1&&(v=-1);break}case 34:case 39:case 91:m+=ge(y);break;case 9:case 10:case 13:case 32:m+=kt(u);break;case 92:m+=St(me()-1,7);continue;case 47:switch($()){case 42:case 47:ee(Pt(Ct(I(),me()),n,i),b);break;default:m+="/"}break;case 123*l:d[k++]=z(m)*v;case 125*l:case 59:case 0:switch(y){case 0:case 125:w=0;case 59+g:v==-1&&(m=x(m,/\f/g,"")),E>0&&z(m)-f&&ee(E>32?ze(m+";",r,i,f-1):ze(x(m," ","")+";",r,i,f-2),b);break;case 59:m+=";";default:if(ee(F=Me(m,n,i,k,g,a,d,C,D=[],_=[],f),s),y===123)if(g===0)fe(m,n,F,F,D,s,f,d,_);else switch(M===99&&S(m,3)===110?100:M){case 100:case 108:case 109:case 115:fe(t,F,F,r&&ee(Me(t,F,F,0,0,a,d,C,a,D=[],f),_),a,_,f,d,r?D:_);break;default:fe(m,F,F,F,[""],_,0,d,_)}}k=g=E=0,l=v=1,C=m="",f=c;break;case 58:f=1+z(m),E=u;default:if(l<1){if(y==123)--l;else if(y==125&&l++==0&&jt()==125)continue}switch(m+=be(y),y*l){case 38:v=g>0?1:(m+="\f",-1);break;case 44:d[k++]=(z(m)-1)*v,v=1;break;case 64:$()===45&&(m+=ge(I())),M=$(),g=f=z(C=m+=At(me())),y++;break;case 45:u===45&&z(m)==2&&(l=0)}}return s}function Me(t,n,i,r,a,s,c,d,b,k,g){for(var f=a-1,M=a===0?s:[""],E=Ie(M),u=0,l=0,w=0;u<r;++u)for(var v=0,y=X(t,f+1,f=ft(l=c[u])),C=t;v<E;++v)(C=et(l>0?M[v]+" "+y:x(y,/&\f/g,M[v])))&&(b[w++]=C);return ve(t,n,i,a===0?Ee:d,b,k,g)}function Pt(t,n,i){return ve(t,n,i,Je,be(yt()),X(t,2,-2),0)}function ze(t,n,i,r){return ve(t,n,i,Fe,X(t,0,r),X(t,r+1,-1),r)}function W(t,n){for(var i="",r=Ie(t),a=0;a<r;a++)i+=n(t[a],a,t,n)||"";return i}function Rt(t,n,i,r){switch(t.type){case gt:if(t.children.length)break;case mt:case Fe:return t.return=t.return||t.value;case Je:return"";case Qe:return t.return=t.value+"{"+W(t.children,r)+"}";case Ee:t.value=t.props.join(",")}return z(i=W(t.children,r))?t.return=t.value+"{"+i+"}":""}function Ot(t){var n=Ie(t);return function(i,r,a,s){for(var c="",d=0;d<n;d++)c+=t[d](i,r,a,s)||"";return c}}function Et(t){return function(n){n.root||(n=n.return)&&t(n)}}var Ft=function(n,i,r){for(var a=0,s=0;a=s,s=$(),a===38&&s===12&&(i[r]=1),!K(s);)I();return Z(n,O)},It=function(n,i){var r=-1,a=44;do switch(K(a)){case 0:a===38&&$()===12&&(i[r]=1),n[r]+=Ft(O-1,i,r);break;case 2:n[r]+=ge(a);break;case 4:if(a===44){n[++r]=$()===58?"&\f":"",i[r]=n[r].length;break}default:n[r]+=be(a)}while(a=I());return n},_t=function(n,i){return it(It(nt(n),i))},Le=new WeakMap,Mt=function(n){if(!(n.type!=="rule"||!n.parent||n.length<1)){for(var i=n.value,r=n.parent,a=n.column===r.column&&n.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(n.props.length===1&&i.charCodeAt(0)!==58&&!Le.get(r))&&!a){Le.set(n,!0);for(var s=[],c=_t(i,s),d=r.props,b=0,k=0;b<c.length;b++)for(var g=0;g<d.length;g++,k++)n.props[k]=s[b]?c[b].replace(/&\f/g,d[g]):d[g]+" "+c[b]}}},zt=function(n){if(n.type==="decl"){var i=n.value;i.charCodeAt(0)===108&&i.charCodeAt(2)===98&&(n.return="",n.value="")}};function rt(t,n){switch(bt(t,n)){case 5103:return p+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return p+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return p+t+ue+t+R+t+t;case 6828:case 4268:return p+t+R+t+t;case 6165:return p+t+R+"flex-"+t+t;case 5187:return p+t+x(t,/(\w+).+(:[^]+)/,p+"box-$1$2"+R+"flex-$1$2")+t;case 5443:return p+t+R+"flex-item-"+x(t,/flex-|-self/,"")+t;case 4675:return p+t+R+"flex-line-pack"+x(t,/align-content|flex-|-self/,"")+t;case 5548:return p+t+R+x(t,"shrink","negative")+t;case 5292:return p+t+R+x(t,"basis","preferred-size")+t;case 6060:return p+"box-"+x(t,"-grow","")+p+t+R+x(t,"grow","positive")+t;case 4554:return p+x(t,/([^-])(transform)/g,"$1"+p+"$2")+t;case 6187:return x(x(x(t,/(zoom-|grab)/,p+"$1"),/(image-set)/,p+"$1"),t,"")+t;case 5495:case 3959:return x(t,/(image-set\([^]*)/,p+"$1$`$1");case 4968:return x(x(t,/(.+:)(flex-)?(.*)/,p+"box-pack:$3"+R+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+p+t+t;case 4095:case 3583:case 4068:case 2532:return x(t,/(.+)-inline(.+)/,p+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(z(t)-1-n>6)switch(S(t,n+1)){case 109:if(S(t,n+4)!==45)break;case 102:return x(t,/(.+:)(.+)-([^]+)/,"$1"+p+"$2-$3$1"+ue+(S(t,n+3)==108?"$3":"$2-$3"))+t;case 115:return~Re(t,"stretch")?rt(x(t,"stretch","fill-available"),n)+t:t}break;case 4949:if(S(t,n+1)!==115)break;case 6444:switch(S(t,z(t)-3-(~Re(t,"!important")&&10))){case 107:return x(t,":",":"+p)+t;case 101:return x(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+p+(S(t,14)===45?"inline-":"")+"box$3$1"+p+"$2$3$1"+R+"$2box$3")+t}break;case 5936:switch(S(t,n+11)){case 114:return p+t+R+x(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return p+t+R+x(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return p+t+R+x(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return p+t+R+t+t}return t}var Lt=function(n,i,r,a){if(n.length>-1&&!n.return)switch(n.type){case Fe:n.return=rt(n.value,n.length);break;case Qe:return W([V(n,{value:x(n.value,"@","@"+p)})],a);case Ee:if(n.length)return vt(n.props,function(s){switch(wt(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return W([V(n,{props:[x(s,/:(read-\w+)/,":"+ue+"$1")]})],a);case"::placeholder":return W([V(n,{props:[x(s,/:(plac\w+)/,":"+p+"input-$1")]}),V(n,{props:[x(s,/:(plac\w+)/,":"+ue+"$1")]}),V(n,{props:[x(s,/:(plac\w+)/,R+"input-$1")]})],a)}return""})}},$t=[Lt],Nt=function(n){var i=n.key;if(i==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(l){var w=l.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(l),l.setAttribute("data-s",""))})}var a=n.stylisPlugins||$t,s={},c,d=[];c=n.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+i+' "]'),function(l){for(var w=l.getAttribute("data-emotion").split(" "),v=1;v<w.length;v++)s[w[v]]=!0;d.push(l)});var b,k=[Mt,zt];{var g,f=[Rt,Et(function(l){g.insert(l)})],M=Ot(k.concat(a,f)),E=function(w){return W(Tt(w),M)};b=function(w,v,y,C){g=y,E(w?w+"{"+v.styles+"}":v.styles),C&&(u.inserted[v.name]=!0)}}var u={key:i,sheet:new xt({key:i,container:c,nonce:n.nonce,speedy:n.speedy,prepend:n.prepend,insertionPoint:n.insertionPoint}),nonce:n.nonce,inserted:s,registered:{},insert:b};return u.sheet.hydrate(d),u},Dt=!0;function Ht(t,n,i){var r="";return i.split(" ").forEach(function(a){t[a]!==void 0?n.push(t[a]+";"):r+=a+" "}),r}var ot=function(n,i,r){var a=n.key+"-"+i.name;(r===!1||Dt===!1)&&n.registered[a]===void 0&&(n.registered[a]=i.styles)},Ut=function(n,i,r){ot(n,i,r);var a=n.key+"-"+i.name;if(n.inserted[i.name]===void 0){var s=i;do n.insert(i===s?"."+a:"",s,n.sheet,!0),s=s.next;while(s!==void 0)}};function Bt(t){for(var n=0,i,r=0,a=t.length;a>=4;++r,a-=4)i=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,i=(i&65535)*1540483477+((i>>>16)*59797<<16),i^=i>>>24,n=(i&65535)*1540483477+((i>>>16)*59797<<16)^(n&65535)*1540483477+((n>>>16)*59797<<16);switch(a){case 3:n^=(t.charCodeAt(r+2)&255)<<16;case 2:n^=(t.charCodeAt(r+1)&255)<<8;case 1:n^=t.charCodeAt(r)&255,n=(n&65535)*1540483477+((n>>>16)*59797<<16)}return n^=n>>>13,n=(n&65535)*1540483477+((n>>>16)*59797<<16),((n^n>>>15)>>>0).toString(36)}var Wt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},qt=/[A-Z]|^ms/g,Gt=/_EMO_([^_]+?)_([^]*?)_EMO_/g,at=function(n){return n.charCodeAt(1)===45},$e=function(n){return n!=null&&typeof n!="boolean"},ye=Ze(function(t){return at(t)?t:t.replace(qt,"-$&").toLowerCase()}),Ne=function(n,i){switch(n){case"animation":case"animationName":if(typeof i=="string")return i.replace(Gt,function(r,a,s){return L={name:a,styles:s,next:L},a})}return Wt[n]!==1&&!at(n)&&typeof i=="number"&&i!==0?i+"px":i};function Y(t,n,i){if(i==null)return"";if(i.__emotion_styles!==void 0)return i;switch(typeof i){case"boolean":return"";case"object":{if(i.anim===1)return L={name:i.name,styles:i.styles,next:L},i.name;if(i.styles!==void 0){var r=i.next;if(r!==void 0)for(;r!==void 0;)L={name:r.name,styles:r.styles,next:L},r=r.next;var a=i.styles+";";return a}return Vt(t,n,i)}case"function":{if(t!==void 0){var s=L,c=i(t);return L=s,Y(t,n,c)}break}}if(n==null)return i;var d=n[i];return d!==void 0?d:i}function Vt(t,n,i){var r="";if(Array.isArray(i))for(var a=0;a<i.length;a++)r+=Y(t,n,i[a])+";";else for(var s in i){var c=i[s];if(typeof c!="object")n!=null&&n[c]!==void 0?r+=s+"{"+n[c]+"}":$e(c)&&(r+=ye(s)+":"+Ne(s,c)+";");else if(Array.isArray(c)&&typeof c[0]=="string"&&(n==null||n[c[0]]===void 0))for(var d=0;d<c.length;d++)$e(c[d])&&(r+=ye(s)+":"+Ne(s,c[d])+";");else{var b=Y(t,n,c);switch(s){case"animation":case"animationName":{r+=ye(s)+":"+b+";";break}default:r+=s+"{"+b+"}"}}}return r}var De=/label:\s*([^\s;\n{]+)\s*(;|$)/g,L,Xt=function(n,i,r){if(n.length===1&&typeof n[0]=="object"&&n[0]!==null&&n[0].styles!==void 0)return n[0];var a=!0,s="";L=void 0;var c=n[0];c==null||c.raw===void 0?(a=!1,s+=Y(r,i,c)):s+=c[0];for(var d=1;d<n.length;d++)s+=Y(r,i,n[d]),a&&(s+=c[d]);De.lastIndex=0;for(var b="",k;(k=De.exec(s))!==null;)b+="-"+k[1];var g=Bt(s)+b;return{name:g,styles:s,next:L}},Kt=function(n){return n()},Yt=_e.useInsertionEffect?_e.useInsertionEffect:!1,Zt=Yt||Kt,st=N.createContext(typeof HTMLElement<"u"?Nt({key:"css"}):null);st.Provider;var Jt=function(n){return N.forwardRef(function(i,r){var a=N.useContext(st);return n(i,a,r)})},Qt=N.createContext({}),en=lt,tn=function(n){return n!=="theme"},He=function(n){return typeof n=="string"&&n.charCodeAt(0)>96?en:tn},Ue=function(n,i,r){var a;if(i){var s=i.shouldForwardProp;a=n.__emotion_forwardProp&&s?function(c){return n.__emotion_forwardProp(c)&&s(c)}:s}return typeof a!="function"&&r&&(a=n.__emotion_forwardProp),a},nn=function(n){var i=n.cache,r=n.serialized,a=n.isStringTag;return ot(i,r,a),Zt(function(){return Ut(i,r,a)}),null},rn=function t(n,i){var r=n.__emotion_real===n,a=r&&n.__emotion_base||n,s,c;i!==void 0&&(s=i.label,c=i.target);var d=Ue(n,i,r),b=d||He(a),k=!b("as");return function(){var g=arguments,f=r&&n.__emotion_styles!==void 0?n.__emotion_styles.slice(0):[];if(s!==void 0&&f.push("label:"+s+";"),g[0]==null||g[0].raw===void 0)f.push.apply(f,g);else{f.push(g[0][0]);for(var M=g.length,E=1;E<M;E++)f.push(g[E],g[0][E])}var u=Jt(function(l,w,v){var y=k&&l.as||a,C="",D=[],_=l;if(l.theme==null){_={};for(var F in l)_[F]=l[F];_.theme=N.useContext(Qt)}typeof l.className=="string"?C=Ht(w.registered,D,l.className):l.className!=null&&(C=l.className+" ");var m=Xt(f.concat(D),w.registered,_);C+=w.key+"-"+m.name,c!==void 0&&(C+=" "+c);var ct=k&&d===void 0?He(y):b,J={};for(var Q in l)k&&Q==="as"||ct(Q)&&(J[Q]=l[Q]);return J.className=C,J.ref=v,N.createElement(N.Fragment,null,N.createElement(nn,{cache:w,serialized:m,isStringTag:typeof y=="string"}),N.createElement(y,J))});return u.displayName=s!==void 0?s:"Styled("+(typeof a=="string"?a:a.displayName||a.name||"Component")+")",u.defaultProps=n.defaultProps,u.__emotion_real=u,u.__emotion_base=a,u.__emotion_styles=f,u.__emotion_forwardProp=d,Object.defineProperty(u,"toString",{value:function(){return"."+c}}),u.withComponent=function(l,w){return t(l,Pe({},i,w,{shouldForwardProp:Ue(u,w,!0)})).apply(void 0,f)},u}},on=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],o=rn.bind();on.forEach(function(t){o[t]=o(t)});const an=o.header`
    background-color: var(--body-background-color);
    border-bottom: 1px solid;
    color: #ececec;
    padding: 0;
`,sn=o.div`
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
`,cn=o.a`
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
`,dn=o.span`
    color: var(--beckground-color);
`,ln=o.div`
    display: flex;
    align-items: center;
    padding: 0 15px;
    @media(max-width: 767px) {
        margin-top: 16px;
        justify-content: space-between;
        margin-bottom: 16px;
    }

`,hn=o.button`
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

`,pn=o.svg`
`,xn=o.div`
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

`,mn=o.div`
    opacity: 1;
    visibility: visible;
    pointer - events: auto;

`,gn=o.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100 %;
`,fn=o.div`
    margin-bottom: auto;
`,un=o.button`
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

`,bn=o.svg`
    width: 18.67px;
    height: 18.67px;

`,h="/goit-markup-react/assets/icons-WWKJvoXN.svg",wn=()=>e.jsxs(e.Fragment,{children:[e.jsx(hn,{type:"button",id:"js-open-menu",children:e.jsx(pn,{width:"24",height:"12",children:e.jsx("use",{href:h+"#icon-menu"})})}),e.jsx(xn,{children:e.jsx(mn,{children:e.jsx(gn,{children:e.jsx(fn,{children:e.jsx(un,{children:e.jsx(bn,{children:e.jsx("use",{href:h+"#icon-close-menu"})})})})})})})]}),vn=o.ul`
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
`,je=o.li`
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
`,ke=o.a`
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

`,yn=o.a`

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
`;o.div`
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
`;o.li`
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

`;o.a`
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
`;const jn=()=>e.jsxs(vn,{children:[e.jsx(je,{children:e.jsx(ke,{href:"index.html",children:e.jsx(yn,{children:"Студія"})})}),e.jsx(je,{children:e.jsx(ke,{href:"portfolio.html",children:"Портфоліо"})}),e.jsx(je,{children:e.jsx(ke,{href:"#",children:"Контакти"})})]}),kn=o.ul`
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
`,Be=o.li`
    display: flex;
    align-content: center;

`,We=o.a`
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
`,qe=o.svg`
    margin-right: 10px;
}
`,Sn=()=>e.jsxs(kn,{children:[e.jsx(Be,{children:e.jsxs(We,{href:"mailto:info@devstudio.com",children:[e.jsx(qe,{width:"16",height:"12",children:e.jsx("use",{href:h+"#poshta"})}),"info@devstudio.com"]})}),e.jsx(Be,{children:e.jsxs(We,{href:"tel:+380961111111",children:[e.jsx(qe,{width:"12",height:"16",children:e.jsx("use",{href:h+"#smartphone"})}),"+38 096 111 11 11"]})})]}),Cn=()=>e.jsx(an,{children:e.jsx(sn,{children:e.jsxs(ln,{children:[e.jsxs(cn,{href:"index.html",lang:"en","data-wow-offset":"100",children:[e.jsx(dn,{children:"Web"}),"Studio"]}),e.jsxs(e.Fragment,{children:[" ",e.jsx(jn,{})," ",e.jsx(Sn,{})]})," ",e.jsx(wn,{id:"js-menu-container"})]})})}),An="/goit-markup-react/assets/%D1%81oworker-mobile-DkjrP_lB.jpg",Tn="/goit-markup-react/assets/%D1%81oworker-mobile@2x-CfTHwFb7.jpg",Pn="/goit-markup-react/assets/%D1%81oworker-tablet-DNCU7IaL.jpg",Rn="/goit-markup-react/assets/%D1%81oworker-tablet@2x-CltOuUgI.jpg",On="/goit-markup-react/assets/%D1%81oworker-CBK_fIvu.jpg",En="/goit-markup-react/assets/%D1%81oworker@2x-DEOHsqO2.jpg",Fn=o.section`
  padding-top: 118px;
  padding-bottom: 118px;
  background-color: var(--footer-bacground-color);
  text-align: center;
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${An});
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
      url(${Pn});
  }

  @media screen and (min-width: 1200px) {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${On});
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
      url(${Tn});
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 768px),
    screen and (min-resolution: 192dpi) and (min-width: 768px),
    screen and (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${Rn});
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1200px),
    screen and (min-resolution: 192dpi) and (min-width: 1200px),
    screen and (min-resolution: 2dppx) and (min-width: 1200px) {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${En});
  }
`,In=o.div`
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
`,_n=o.h1`
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
`,Mn=o.button`
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
`,zn=()=>e.jsx(Fn,{children:e.jsxs(In,{children:[e.jsxs(_n,{children:["Ефективні рішення для ",e.jsx("br",{}),"вашого бізнесу"]}),e.jsx(Mn,{type:"button","data-modal-open":!0,children:"Замовити послугу"})]})}),Ln=o.section`
    padding-top: 60px;
        padding-bottom: 60px;
    @media (min-width:1200px) {
            padding-top: 94px;
            padding-bottom: 94px;
        }
`,$n=o.div`
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
`,Nn=o.h2`
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
`,Dn=o.ul`
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

`,te=o.li`
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
`,ne=o.div`
    height: 120px;
    margin-bottom: 30px;
    background-color: var(--icone-bg-color);
    display: flex;
    justify-content: center;
    align-items: center;

`,ie=o.svg`
 background - color: var(--icone-bg-color);

`,re=o.h3`
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
`,oe=o.p`
    font-size: 14px;
    line-height: 1.71;
    letter-spacing: 0.03em;
    text-decoration: none;
    color: var(--text-color-p);
    margin-top: 0;
    
`,Hn=()=>e.jsx(Ln,{children:e.jsxs($n,{children:[e.jsx(Nn,{children:"Опис діятельності"}),e.jsxs(Dn,{children:[e.jsxs(te,{children:[e.jsx(ne,{children:e.jsx(ie,{width:"70",height:"70",children:e.jsx("use",{href:h+"#antenna"})})}),e.jsx(re,{children:"УВАГА ДО ДЕТАЛЕЙ"}),e.jsx(oe,{children:"Ідейні міркування, і навіть початок повсякденної роботи з формування позиції."})]}),e.jsxs(te,{children:[e.jsx(ne,{children:e.jsx(ie,{width:"70",height:"70",children:e.jsx("use",{href:h+"#clock"})})}),e.jsx(re,{children:"ПУНКТУАЛЬНІСТЬ"}),e.jsx(oe,{children:"Завдання організації, особливо рамки і місце навчання кадрів тягне у себе."})]}),e.jsxs(te,{children:[e.jsx(ne,{children:e.jsx(ie,{width:"70",height:"70",children:e.jsx("use",{href:h+"#diagram"})})}),e.jsx(re,{children:"ПЛАНУВАННЯ"}),e.jsx(oe,{children:"Так само консультація з широким активом значною мірою зумовлює."})]}),e.jsxs(te,{children:[e.jsx(ne,{children:e.jsx(ie,{width:"70",height:"70",children:e.jsx("use",{href:h+"#astronaut"})})}),e.jsx(re,{children:"СУЧАСНІ ТЕХНОЛОГІЇ"}),e.jsx(oe,{children:"Значимість цих проблем настільки очевидна, що реалізація планових завдань."})]})]})]})}),Un=o.section`

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
`,Bn=o.div`
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
`,Wn=o.h2`
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
`,qn=o.ul`
  display: flex;
  gap: 30px;
  align-content: center;
  justify-content: center;

`,Se=o.li`
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
`,Ce=o.img`
  display: flex;
`,Ae=o.p`
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
`,Ge="/goit-markup-react/assets/photo_2022-07-14_23-06-50-w-9GE9pw.jpg",Ve="/goit-markup-react/assets/photo_2022-07-14_23-08-23-ChSN16Q0.jpg",Xe="/goit-markup-react/assets/photo_2022-07-14_23-08-29-DEV7w-ry.jpg",Gn=()=>e.jsx(Un,{children:e.jsxs(Bn,{children:[e.jsx(Wn,{children:"Чим ми займаємося"}),e.jsxs(qn,{children:[e.jsxs(Se,{children:[e.jsx("a",{href:Ge,children:e.jsx(Ce,{src:Ge,alt:"photo",width:"370",height:"294"})}),e.jsx(Ae,{children:"Десктопні додатки"})]}),e.jsxs(Se,{children:[e.jsx("a",{href:Ve,children:e.jsx(Ce,{src:Ve,alt:"photo",width:"370",height:"294"})}),e.jsx(Ae,{children:"Мобільні додатки"})]}),e.jsxs(Se,{children:[e.jsx("a",{href:Xe,children:e.jsx(Ce,{src:Xe,alt:"photo",width:"370",height:"294"})}),e.jsx(Ae,{children:"Дизайнерські рішення"})]})]})]})}),Vn=o.section`
    background-color: var(--teams-bacground-color);
    align-items: center;
    padding-top: 60px;
        // padding-bottom: 60px;
            padding-bottom: 0px;

    
    @media (min-width:1200px) {
            padding-top: 94px;
            padding-bottom: 94px;
            
        }
`,Xn=o.div`
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
`,Kn=o.h2`
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
`,Yn=o.ul`
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
`,ae=o.li`
        @media screen and (min-width:768px) {
background-color: var(--body-background-color);
        @media screen and (min-width:1200px) {
background-color: var(--body-background-color);
width: 270px;
}
`,se=o.div`
  display: block;
  padding: 30px 0;
  margin-top: 0;
  margin-bottom: 0;
  outline: 2px solid var(--technical-color);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 4px 4px;
`,ce=o.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.18;
  text-align: center;
  letter-spacing: 0.03em;
  color: var(--text-color);
  margin-top: 0;
  margin-bottom: 10px;
`,de=o.p`
  font-size: 16px;
  line-height: 1.18;
  text-align: center;
  letter-spacing: 0.03em;
  color: var(--text-color);
  margin-top: 0;
  font-size: 16px;
  color: var(--text-color-p);
`,le=o.ul`
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-around;
  justify-content: center;
  gap: 10px;
  margin-top: 16px;
  list-style: none;
  padding: 0;
  // margin: 0
`,A=o.li`
  box-sizing: border-box;
  outline: 2px solid var(--technical-color);
  transition: background-color 250ms var(--timing-functione),
    fill 250ms var(--timing-functione);
`,T=o.a`
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
`,P=o.svg`
  &:hover,
  &:focus {
    fill: var(--body-background-color);
  }
`,Zn="/goit-markup-react/assets/product-designer-mobile-CR9XjxZR.jpg",Jn="/goit-markup-react/assets/frontend-developer-mobile-CKsiOpXf.jpg",Qn="/goit-markup-react/assets/marketing-mobile-D4eyMM5O.jpg",ei="/goit-markup-react/assets/ui-mobile-CkzJuxso.jpg",ti=()=>e.jsx(Vn,{children:e.jsxs(Xn,{class:"animate__animated animate__fadeInUp wow","data-wow-offset":"100",children:[e.jsx(Kn,{children:"Наша команда"}),e.jsxs(Yn,{children:[e.jsxs(ae,{children:[e.jsx("img",{src:Zn,alt:"mikola-tarasov-photo"}),e.jsxs(se,{children:[e.jsx(ce,{children:"Ігор Дем`яненко"}),e.jsx(de,{lang:"en",children:"Product Designer"}),e.jsxs(le,{children:[e.jsx(A,{children:e.jsx(T,{children:e.jsx(P,{"aria-label":"іконка інстаграм",width:"20",height:"20",children:e.jsx("use",{href:h+"#icon-instagram"})})})}),e.jsx(A,{children:e.jsx(T,{children:e.jsx(P,{"aria-label":"іконка твітер",class:"icones",width:"20",height:"20",children:e.jsx("use",{href:h+"#icon-tviter"})})})}),e.jsx(A,{children:e.jsx(T,{children:e.jsx(P,{"aria-label":"іконка феїсбук",class:"icones",width:"20",height:"20",children:e.jsx("use",{href:h+"#icon-facebook"})})})}),e.jsx(A,{children:e.jsx(T,{children:e.jsx(P,{"aria-label":"іконка линкедін",class:"icones",width:"20",height:"20",children:e.jsx("use",{href:h+"#icon-linkedin"})})})})]})]})]}),e.jsxs(ae,{children:[e.jsx("img",{src:Jn,alt:"mikola-tarasov-photo"}),e.jsxs(se,{children:[e.jsx(ce,{children:"Ольга Рєпіна"}),e.jsx(de,{lang:"en",children:"Frontend Developer"}),e.jsxs(le,{children:[e.jsx(A,{children:e.jsx(T,{children:e.jsx(P,{"aria-label":"іконка інстаграм",width:"20",height:"20",children:e.jsx("use",{href:h+"#icon-instagram"})})})}),e.jsx(A,{children:e.jsx(T,{children:e.jsx(P,{"aria-label":"іконка твітер",class:"icones",width:"20",height:"20",children:e.jsx("use",{href:h+"#icon-tviter"})})})}),e.jsx(A,{children:e.jsx(T,{children:e.jsx(P,{"aria-label":"іконка феїсбук",class:"icones",width:"20",height:"20",children:e.jsx("use",{href:h+"#icon-facebook"})})})}),e.jsx(A,{children:e.jsx(T,{children:e.jsx(P,{"aria-label":"іконка линкедін",class:"icones",width:"20",height:"20",children:e.jsx("use",{href:h+"#icon-linkedin"})})})})]})]})]}),e.jsxs(ae,{children:[e.jsx("img",{src:Qn,alt:"mikola-tarasov-photo"}),e.jsxs(se,{children:[e.jsx(ce,{children:"Микола Тарасов"}),e.jsx(de,{lang:"en",children:"Marketing"}),e.jsxs(le,{children:[e.jsx(A,{children:e.jsx(T,{children:e.jsx(P,{"aria-label":"іконка інстаграм",width:"20",height:"20",children:e.jsx("use",{href:h+"#icon-instagram"})})})}),e.jsx(A,{children:e.jsx(T,{children:e.jsx(P,{"aria-label":"іконка твітер",class:"icones",width:"20",height:"20",children:e.jsx("use",{href:h+"#icon-tviter"})})})}),e.jsx(A,{children:e.jsx(T,{children:e.jsx(P,{"aria-label":"іконка феїсбук",class:"icones",width:"20",height:"20",children:e.jsx("use",{href:h+"#icon-facebook"})})})}),e.jsx(A,{children:e.jsx(T,{children:e.jsx(P,{"aria-label":"іконка линкедін",class:"icones",width:"20",height:"20",children:e.jsx("use",{href:h+"#icon-linkedin"})})})})]})]})]}),e.jsxs(ae,{children:[e.jsx("img",{src:ei,alt:"mikola-tarasov-photo"}),e.jsxs(se,{children:[e.jsx(ce,{children:"Михайло Єрмаков"}),e.jsx(de,{lang:"en",children:"UI Designer"}),e.jsxs(le,{children:[e.jsx(A,{children:e.jsx(T,{children:e.jsx(P,{"aria-label":"іконка інстаграм",width:"20",height:"20",children:e.jsx("use",{href:h+"#icon-instagram"})})})}),e.jsx(A,{children:e.jsx(T,{children:e.jsx(P,{"aria-label":"іконка твітер",class:"icones",width:"20",height:"20",children:e.jsx("use",{href:h+"#icon-tviter"})})})}),e.jsx(A,{children:e.jsx(T,{children:e.jsx(P,{"aria-label":"іконка феїсбук",class:"icones",width:"20",height:"20",children:e.jsx("use",{href:h+"#icon-facebook"})})})}),e.jsx(A,{children:e.jsx(T,{children:e.jsx(P,{"aria-label":"іконка линкедін",class:"icones",width:"20",height:"20",children:e.jsx("use",{href:h+"#icon-linkedin"})})})})]})]})]})]})]})}),ni=o.section`
    padding-top: 60px;
        padding-bottom: 60px;

    
        @media (min-width:1200px) {
            padding-top: 94px;
            padding-bottom: 94px;
        }
`,ii=o.div`
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
`,ri=o.h2`
    font-weight: 700;
    font-size: 36px;
    line-height: 1.16;
    text-align: center;
    letter-spacing: 0.03em;
    color: var(--text-color);
    margin: 0px;
    margin-bottom: 50px;
`,oi=o.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    // column-gap: 30px;
    gap: 28px;
    list-style: none;
    padding: 0;
    margin: 0;
`,H=o.li`
    // flex-basis: calc((100% - 30px) / 2);

        @media screen and (min-width:768px) {
            flex-basis: calc((100% - 60px) / 3);
        }

        @media screen and (min-width:1200px) {
            flex-basis: calc((100% - 150px) / 6);
        }
`,U=o.a`
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
`,B=o.svg`
        display: flex;
        align-self: center;
        width: 170px;
        height: 92px;
`,ai=()=>e.jsx(ni,{children:e.jsxs(ii,{children:[e.jsx(ri,{children:"Постійні клієнти"}),e.jsxs(oi,{children:[e.jsx(H,{children:e.jsx(U,{children:e.jsx(B,{"aria-label":"іконка логотип",width:"106",height:"60",children:e.jsx("use",{href:h+"#icon-Logo"})})})}),e.jsx(H,{children:e.jsx(U,{children:e.jsx(B,{"aria-label":"іконка логотип",width:"106",height:"60",children:e.jsx("use",{href:h+"#icon-Logo-2"})})})}),e.jsx(H,{children:e.jsx(U,{children:e.jsx(B,{"aria-label":"іконка логотип",width:"106",height:"60",children:e.jsx("use",{href:h+"#icon-Logo-3"})})})}),e.jsx(H,{children:e.jsx(U,{children:e.jsx(B,{"aria-label":"іконка логотип",width:"106",height:"60",children:e.jsx("use",{href:h+"#icon-Logo-4"})})})}),e.jsx(H,{children:e.jsx(U,{children:e.jsx(B,{width:"106",height:"60",children:e.jsx("use",{href:h+"#icon-Logo-5"})})})}),e.jsx(H,{children:e.jsx(U,{children:e.jsx(B,{"aria-label":"іконка логотип",width:"106",height:"60",children:e.jsx("use",{href:h+"#icon-Logo-6"})})})})]})]})}),si=o.section`
    background: var(--footer-bacground-color);
    padding-top: 60px;
    padding-bottom: 60px;

    @media screen and (max-width:767px) {
        text-align: center;
  }
`,ci=o.div`
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
`,di=o.div`
    background: var(--footer-bacground-color);
    padding-top: 60px;
    padding-bottom: 60px;

    @media screen and (max-width:767px) {
        text-align: center;
  }
`,li=o.a`
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 26px;
    line-height: 1.19;
    letter-spacing: 0.03em;
    text-decoration: none;
    color: var(--beckground-color);
    display: inline-block;
    margin-bottom: 20px;
`,hi=o.span`
color: var(--body-background-color);
`,pi=o.ul`
    list-style: none;
`,Te=o.li`
    &:not(:last-child) {
    margin-bottom: 9px;
    }

`,xi=o.a`
    font-size: 14px;
    line-height: 1.7;
    font-style: normal;
    letter-spacing: 0.03em;
    text-decoration: none;
    color: var(--body-background-color);

`,Ke=o.a`
    font-size: 14px;
    line-height: 1.7;
    text-decoration: none;
    font-style: normal;
    letter-spacing: 0.03em;
    color: rgba(255, 255, 255, 0.6);

`,mi=o.div`
    @media screen and (max-width: 768px) {
        margin-bottom: 60px;
        margin-bottom: 0;
      }
  @media screen and (min-width:1200px) {
    margin-bottom: 60px;
    margin-left: 70px;
  }
`,Ye=o.h2`
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
`,gi=o.ul`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;

    @media screen and (max-width: 768px) {
        justify-content: center;
}
`,he=o.li`
    display: flex;
`,pe=o.a`
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
`,xe=o.svg`
    background-repeat: no-repeat;
    background-size: 20px 20px;
    background-position: left, center -10px, center, right;
    background-origin: content-box;
    fill: #ffffff;
`,fi=o.div`
// display: flex;

        @media screen and (min-width:1200px) {
            display: flex;
    }
`,ui=o.div`
    margin: 0;
    padding: 0;
    @media screen and (min-width:1200px) {
    margin-left: auto;
    }
`,bi=o.form`

`,wi=o.input`
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
`,vi=o.button`
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
`,yi=o.svg`
    top: 0;
    right: 0;
`,ji=()=>e.jsx(si,{children:e.jsxs(ci,{children:[e.jsxs(di,{children:[e.jsxs(li,{href:"index.html",lang:"en",children:["Web",e.jsx(hi,{children:"Studio"})]}),e.jsx("address",{children:e.jsxs(pi,{children:[e.jsx(Te,{children:e.jsx(xi,{href:"https://goo.gl/maps/CPtrU1FHBa2aNyZL9",target:"_blank",rel:"noopener noreferrer",children:"м. Київ, пр-т Лесі Українки, 26"})}),e.jsx(Te,{children:e.jsx(Ke,{href:"mailto:info@devstudio.com",children:"info@devstudio.com"})}),e.jsx(Te,{children:e.jsx(Ke,{href:"tel:+380961111111",children:"+38 096 111 11 11"})})]})})]}),e.jsxs(mi,{children:[e.jsx(Ye,{children:"ПРИЄДНУЙТЕСЬ"}),e.jsxs(gi,{children:[e.jsx(he,{children:e.jsx(pe,{children:e.jsx(xe,{"aria-label":"іконка інстаграм",class:"icones",width:"20",height:"20",children:e.jsx("use",{href:h+"#icon-instagram"})})})}),e.jsx(he,{children:e.jsx(pe,{children:e.jsx(xe,{"aria-label":"іконка твітер",class:"icones",width:"20",height:"20",children:e.jsx("use",{href:h+"#icon-tviter"})})})}),e.jsx(he,{children:e.jsx(pe,{children:e.jsx(xe,{"aria-label":"іконка феїсбук",class:"icones",width:"20",height:"20",children:e.jsx("use",{href:h+"#icon-facebook"})})})}),e.jsx(he,{children:e.jsx(pe,{children:e.jsx(xe,{"aria-label":"іконка линкедін",class:"icones",width:"20",height:"20",children:e.jsx("use",{href:h+"#icon-linkedin"})})})})]})]}),e.jsxs(ui,{children:[e.jsx(Ye,{children:"Підпишіться на розсилку"}),e.jsx(bi,{children:e.jsxs(fi,{children:[e.jsx("label",{for:"email"}),e.jsx(wi,{type:"email",name:"mail",id:"mail",placeholder:"E-mail"}),e.jsxs(vi,{type:"submit",children:["Підписатися",e.jsx(yi,{width:"24",height:"24",children:e.jsx("use",{href:h+"#icon-icon-send"})})]})]})})]})]})}),ki=()=>e.jsxs(e.Fragment,{children:[e.jsx(Cn,{}),e.jsx(zn,{}),e.jsx(Hn,{}),e.jsx(Gn,{}),e.jsx(ti,{}),e.jsx(ai,{}),e.jsx(ji,{})]}),Ci=ki;export{Ci as default};
