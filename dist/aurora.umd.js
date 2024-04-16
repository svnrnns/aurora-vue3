(function(m,b){typeof exports=="object"&&typeof module<"u"?module.exports=b(require("vue")):typeof define=="function"&&define.amd?define(["vue"],b):(m=typeof globalThis<"u"?globalThis:m||self,m.aurora=b(m.Vue))})(this,function(m){"use strict";var on=Object.defineProperty;var an=(m,b,R)=>b in m?on(m,b,{enumerable:!0,configurable:!0,writable:!0,value:R}):m[b]=R;var q=(m,b,R)=>(an(m,typeof b!="symbol"?b+"":b,R),R),We=(m,b,R)=>{if(!b.has(m))throw TypeError("Cannot "+R)};var he=(m,b,R)=>(We(m,b,"read from private field"),R?R.call(m):b.get(m)),Ke=(m,b,R)=>{if(b.has(m))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(m):b.set(m,R)},me=(m,b,R,I)=>(We(m,b,"write to private field"),I?I.call(m,R):b.set(m,R),R);var Y=(m,b,R,I)=>({set _(D){me(m,b,D,R)},get _(){return he(m,b,I)}});var B;function b(e,t){return function(){return e.apply(t,arguments)}}const{toString:R}=Object.prototype,{getPrototypeOf:I}=Object,D=(e=>t=>{const n=R.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),P=e=>(e=e.toLowerCase(),t=>D(t)===e),J=e=>t=>typeof t===e,{isArray:_}=Array,H=J("undefined");function Xe(e){return e!==null&&!H(e)&&e.constructor!==null&&!H(e.constructor)&&T(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ye=P("ArrayBuffer");function Ge(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ye(e.buffer),t}const Qe=J("string"),T=J("function"),be=J("number"),$=e=>e!==null&&typeof e=="object",Ye=e=>e===!0||e===!1,V=e=>{if(D(e)!=="object")return!1;const t=I(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Ze=P("Date"),et=P("File"),tt=P("Blob"),nt=P("FileList"),rt=e=>$(e)&&T(e.pipe),st=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||T(e.append)&&((t=D(e))==="formdata"||t==="object"&&T(e.toString)&&e.toString()==="[object FormData]"))},ot=P("URLSearchParams"),it=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function M(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),_(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function we(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Ee=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Re=e=>!H(e)&&e!==Ee;function Z(){const{caseless:e}=Re(this)&&this||{},t={},n=(r,s)=>{const o=e&&we(t,s)||s;V(t[o])&&V(r)?t[o]=Z(t[o],r):V(r)?t[o]=Z({},r):_(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&M(arguments[r],n);return t}const at=(e,t,n,{allOwnKeys:r}={})=>(M(t,(s,o)=>{n&&T(s)?e[o]=b(s,n):e[o]=s},{allOwnKeys:r}),e),ct=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ut=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},lt=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&I(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},ft=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},dt=e=>{if(!e)return null;if(_(e))return e;let t=e.length;if(!be(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},pt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&I(Uint8Array)),ht=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},mt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},yt=P("HTMLFormElement"),bt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Se=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),wt=P("RegExp"),Oe=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};M(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Et=e=>{Oe(e,(t,n)=>{if(T(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(T(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Rt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return _(e)?r(e):r(String(e).split(t)),n},St=()=>{},Ot=(e,t)=>(e=+e,Number.isFinite(e)?e:t),ee="abcdefghijklmnopqrstuvwxyz",Ae="0123456789",Te={DIGIT:Ae,ALPHA:ee,ALPHA_DIGIT:ee+ee.toUpperCase()+Ae},At=(e=16,t=Te.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Tt(e){return!!(e&&T(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const xt=e=>{const t=new Array(10),n=(r,s)=>{if($(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=_(r)?[]:{};return M(r,(i,c)=>{const p=n(i,s+1);!H(p)&&(o[c]=p)}),t[s]=void 0,o}}return r};return n(e,0)},Ct=P("AsyncFunction"),a={isArray:_,isArrayBuffer:ye,isBuffer:Xe,isFormData:st,isArrayBufferView:Ge,isString:Qe,isNumber:be,isBoolean:Ye,isObject:$,isPlainObject:V,isUndefined:H,isDate:Ze,isFile:et,isBlob:tt,isRegExp:wt,isFunction:T,isStream:rt,isURLSearchParams:ot,isTypedArray:pt,isFileList:nt,forEach:M,merge:Z,extend:at,trim:it,stripBOM:ct,inherits:ut,toFlatObject:lt,kindOf:D,kindOfTest:P,endsWith:ft,toArray:dt,forEachEntry:ht,matchAll:mt,isHTMLForm:yt,hasOwnProperty:Se,hasOwnProp:Se,reduceDescriptors:Oe,freezeMethods:Et,toObjectSet:Rt,toCamelCase:bt,noop:St,toFiniteNumber:Ot,findKey:we,global:Ee,isContextDefined:Re,ALPHABET:Te,generateString:At,isSpecCompliantForm:Tt,toJSONObject:xt,isAsyncFn:Ct,isThenable:e=>e&&($(e)||T(e))&&T(e.then)&&T(e.catch)};function y(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const xe=y.prototype,Ce={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ce[e]={value:e}}),Object.defineProperties(y,Ce),Object.defineProperty(xe,"isAxiosError",{value:!0}),y.from=(e,t,n,r,s,o)=>{const i=Object.create(xe);return a.toFlatObject(e,i,function(p){return p!==Error.prototype},c=>c!=="isAxiosError"),y.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Pt=null;function te(e){return a.isPlainObject(e)||a.isArray(e)}function Pe(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ge(e,t,n){return e?e.concat(t).map(function(s,o){return s=Pe(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function gt(e){return a.isArray(e)&&!e.some(te)}const Nt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function W(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(f,S){return!a.isUndefined(S[f])});const r=n.metaTokens,s=n.visitor||l,o=n.dots,i=n.indexes,p=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function h(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!p&&a.isBlob(d))throw new y("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?p&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function l(d,f,S){let O=d;if(d&&!S&&typeof d=="object"){if(a.endsWith(f,"{}"))f=r?f:f.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&gt(d)||(a.isFileList(d)||a.endsWith(f,"[]"))&&(O=a.toArray(d)))return f=Pe(f),O.forEach(function(C,sn){!(a.isUndefined(C)||C===null)&&t.append(i===!0?ge([f],sn,o):i===null?f:f+"[]",h(C))}),!1}return te(d)?!0:(t.append(ge(S,f,o),h(d)),!1)}const u=[],w=Object.assign(Nt,{defaultVisitor:l,convertValue:h,isVisitable:te});function A(d,f){if(!a.isUndefined(d)){if(u.indexOf(d)!==-1)throw Error("Circular reference detected in "+f.join("."));u.push(d),a.forEach(d,function(O,N){(!(a.isUndefined(O)||O===null)&&s.call(t,O,a.isString(N)?N.trim():N,f,w))===!0&&A(O,f?f.concat(N):[N])}),u.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return A(e),t}function Ne(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ne(e,t){this._pairs=[],e&&W(e,this,t)}const Fe=ne.prototype;Fe.append=function(t,n){this._pairs.push([t,n])},Fe.toString=function(t){const n=t?function(r){return t.call(this,r,Ne)}:Ne;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Ft(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ie(e,t,n){if(!t)return e;const r=n&&n.encode||Ft,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new ne(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class je{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Le={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},It={isBrowser:!0,classes:{URLSearchParams:typeof URLSearchParams<"u"?URLSearchParams:ne,FormData:typeof FormData<"u"?FormData:null,Blob:typeof Blob<"u"?Blob:null},protocols:["http","https","file","blob","url","data"]},Be=typeof window<"u"&&typeof document<"u",jt=(e=>Be&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Lt=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",g={...Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Be,hasStandardBrowserEnv:jt,hasStandardBrowserWebWorkerEnv:Lt},Symbol.toStringTag,{value:"Module"})),...It};function Bt(e,t){return W(e,new g.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return g.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Ut(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Dt(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Ue(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),p=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,p?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=Dt(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Ut(r),s,n,0)}),n}return null}function _t(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const re={transitional:Le,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Ue(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Bt(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return W(c?{"files[]":t}:t,p&&new p,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),_t(t)):t}],transformResponse:[function(t){const n=this.transitional||re.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?y.from(c,y.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:g.classes.FormData,Blob:g.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{re.headers[e]={}});const se=re,kt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),qt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&kt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},De=Symbol("internals");function z(e){return e&&String(e).trim().toLowerCase()}function K(e){return e===!1||e==null?e:a.isArray(e)?e.map(K):String(e)}function Ht(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Mt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function oe(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function zt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function vt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class X{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,p,h){const l=z(p);if(!l)throw new Error("header name must be a non-empty string");const u=a.findKey(s,l);(!u||s[u]===void 0||h===!0||h===void 0&&s[u]!==!1)&&(s[u||p]=K(c))}const i=(c,p)=>a.forEach(c,(h,l)=>o(h,l,p));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!Mt(t)?i(qt(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=z(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Ht(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=z(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||oe(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=z(i),i){const c=a.findKey(r,i);c&&(!n||oe(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||oe(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=K(s),delete n[o];return}const c=t?zt(o):String(o).trim();c!==o&&delete n[o],n[c]=K(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[De]=this[De]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=z(i);r[c]||(vt(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}X.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),a.reduceDescriptors(X.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}}),a.freezeMethods(X);const F=X;function ie(e,t){const n=this||se,r=t||n,s=F.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function _e(e){return!!(e&&e.__CANCEL__)}function v(e,t,n){y.call(this,e??"canceled",y.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(v,y,{__CANCEL__:!0});function Jt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new y("Request failed with status code "+n.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const $t=g.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Vt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Wt(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function ke(e,t){return e&&!Vt(t)?Wt(e,t):t}const Kt=g.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function Xt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Gt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(p){const h=Date.now(),l=r[o];i||(i=h),n[s]=p,r[s]=h;let u=o,w=0;for(;u!==s;)w+=n[u++],u=u%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),h-i<t)return;const A=l&&h-l;return A?Math.round(w*1e3/A):void 0}}function qe(e,t){let n=0;const r=Gt(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,c=o-n,p=r(c),h=o<=i;n=o;const l={loaded:o,total:i,progress:i?o/i:void 0,bytes:c,rate:p||void 0,estimated:p&&i&&h?(i-o)/p:void 0,event:s};l[t?"download":"upload"]=!0,e(l)}}const ae={http:Pt,xhr:typeof XMLHttpRequest<"u"&&function(e){return new Promise(function(n,r){let s=e.data;const o=F.from(e.headers).normalize();let{responseType:i,withXSRFToken:c}=e,p;function h(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}let l;if(a.isFormData(s)){if(g.hasStandardBrowserEnv||g.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((l=o.getContentType())!==!1){const[f,...S]=l?l.split(";").map(O=>O.trim()).filter(Boolean):[];o.setContentType([f||"multipart/form-data",...S].join("; "))}}let u=new XMLHttpRequest;if(e.auth){const f=e.auth.username||"",S=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(f+":"+S))}const w=ke(e.baseURL,e.url);u.open(e.method.toUpperCase(),Ie(w,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function A(){if(!u)return;const f=F.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),O={data:!i||i==="text"||i==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:f,config:e,request:u};Jt(function(C){n(C),h()},function(C){r(C),h()},O),u=null}if("onloadend"in u?u.onloadend=A:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(A)},u.onabort=function(){u&&(r(new y("Request aborted",y.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new y("Network Error",y.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let S=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const O=e.transitional||Le;e.timeoutErrorMessage&&(S=e.timeoutErrorMessage),r(new y(S,O.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,e,u)),u=null},g.hasStandardBrowserEnv&&(c&&a.isFunction(c)&&(c=c(e)),c||c!==!1&&Kt(w))){const f=e.xsrfHeaderName&&e.xsrfCookieName&&$t.read(e.xsrfCookieName);f&&o.set(e.xsrfHeaderName,f)}s===void 0&&o.setContentType(null),"setRequestHeader"in u&&a.forEach(o.toJSON(),function(S,O){u.setRequestHeader(O,S)}),a.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),i&&i!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",qe(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",qe(e.onUploadProgress)),(e.cancelToken||e.signal)&&(p=f=>{u&&(r(!f||f.type?new v(null,e,u):f),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p)));const d=Xt(w);if(d&&g.protocols.indexOf(d)===-1){r(new y("Unsupported protocol "+d+":",y.ERR_BAD_REQUEST,e));return}u.send(s||null)})}};a.forEach(ae,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const He=e=>`- ${e}`,Qt=e=>a.isFunction(e)||e===null||e===!1,Me={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!Qt(n)&&(r=ae[(i=String(n)).toLowerCase()],r===void 0))throw new y(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,p])=>`adapter ${c} `+(p===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(He).join(`
`):" "+He(o[0]):"as no adapter specified";throw new y("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:ae};function ce(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new v(null,e)}function ze(e){return ce(e),e.headers=F.from(e.headers),e.data=ie.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Me.getAdapter(e.adapter||se.adapter)(e).then(function(r){return ce(e),r.data=ie.call(e,e.transformResponse,r),r.headers=F.from(r.headers),r},function(r){return _e(r)||(ce(e),r&&r.response&&(r.response.data=ie.call(e,e.transformResponse,r.response),r.response.headers=F.from(r.response.headers))),Promise.reject(r)})}const ve=e=>e instanceof F?e.toJSON():e;function k(e,t){t=t||{};const n={};function r(h,l,u){return a.isPlainObject(h)&&a.isPlainObject(l)?a.merge.call({caseless:u},h,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(h,l,u){if(a.isUndefined(l)){if(!a.isUndefined(h))return r(void 0,h,u)}else return r(h,l,u)}function o(h,l){if(!a.isUndefined(l))return r(void 0,l)}function i(h,l){if(a.isUndefined(l)){if(!a.isUndefined(h))return r(void 0,h)}else return r(void 0,l)}function c(h,l,u){if(u in t)return r(h,l);if(u in e)return r(void 0,h)}const p={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(h,l)=>s(ve(h),ve(l),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(l){const u=p[l]||s,w=u(e[l],t[l],l);a.isUndefined(w)&&u!==c||(n[l]=w)}),n}const Je="1.6.5",ue={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ue[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const $e={};ue.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Je+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new y(s(i," has been removed"+(n?" in "+n:"")),y.ERR_DEPRECATED);return n&&!$e[i]&&($e[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function Yt(e,t,n){if(typeof e!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],p=c===void 0||i(c,o,e);if(p!==!0)throw new y("option "+o+" must be "+p,y.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new y("Unknown option "+o,y.ERR_BAD_OPTION)}}const le={assertOptions:Yt,validators:ue},j=le.validators;class G{constructor(t){this.defaults=t,this.interceptors={request:new je,response:new je}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=k(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&le.assertOptions(r,{silentJSONParsing:j.transitional(j.boolean),forcedJSONParsing:j.transitional(j.boolean),clarifyTimeoutError:j.transitional(j.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:le.assertOptions(s,{encode:j.function,serialize:j.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],d=>{delete o[d]}),n.headers=F.concat(i,o);const c=[];let p=!0;this.interceptors.request.forEach(function(f){typeof f.runWhen=="function"&&f.runWhen(n)===!1||(p=p&&f.synchronous,c.unshift(f.fulfilled,f.rejected))});const h=[];this.interceptors.response.forEach(function(f){h.push(f.fulfilled,f.rejected)});let l,u=0,w;if(!p){const d=[ze.bind(this),void 0];for(d.unshift.apply(d,c),d.push.apply(d,h),w=d.length,l=Promise.resolve(n);u<w;)l=l.then(d[u++],d[u++]);return l}w=c.length;let A=n;for(u=0;u<w;){const d=c[u++],f=c[u++];try{A=d(A)}catch(S){f.call(this,S);break}}try{l=ze.call(this,A)}catch(d){return Promise.reject(d)}for(u=0,w=h.length;u<w;)l=l.then(h[u++],h[u++]);return l}getUri(t){t=k(this.defaults,t);const n=ke(t.baseURL,t.url);return Ie(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){G.prototype[t]=function(n,r){return this.request(k(r||{},{method:t,url:n,data:(r||{}).data}))}}),a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(k(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}G.prototype[t]=n(),G.prototype[t+"Form"]=n(!0)});const Q=G;class fe{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new v(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new fe(function(s){t=s}),cancel:t}}}const Zt=fe;function en(e){return function(n){return e.apply(null,n)}}function tn(e){return a.isObject(e)&&e.isAxiosError===!0}const de={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(de).forEach(([e,t])=>{de[t]=e});const nn=de;function Ve(e){const t=new Q(e),n=b(Q.prototype.request,t);return a.extend(n,Q.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Ve(k(e,s))},n}const E=Ve(se);E.Axios=Q,E.CanceledError=v,E.CancelToken=Zt,E.isCancel=_e,E.VERSION=Je,E.toFormData=W,E.AxiosError=y,E.Cancel=E.CanceledError,E.all=function(t){return Promise.all(t)},E.spread=en,E.isAxiosError=tn,E.mergeConfig=k,E.AxiosHeaders=F,E.formToJSON=e=>Ue(a.isHTMLForm(e)?new FormData(e):e),E.getAdapter=Me.getAdapter,E.HttpStatusCode=nn,E.default=E;class rn{constructor(t){this.name="AuroraPromiseError",this.msg=t.message,this.errorCode=t.code,this.requestStatus=t.request.status,this.responseStatus=t.response.status,this.axiosInstanceConfig=t.config}}class L extends Error{constructor(t){super(t),this.name="AuroraInstanceError"}}class U extends Error{constructor(t){super(t),this.name="AuroraClassError"}}const x=class x{constructor(t="",n=Number.POSITIVE_INFINITY,r=new AbortController){Ke(this,B,void 0);q(this,"get",this.call.bind(this,"get"));q(this,"post",this.call.bind(this,"post"));q(this,"put",this.call.bind(this,"put"));q(this,"patch",this.call.bind(this,"patch"));q(this,"delete",this.call.bind(this,"delete"));if(typeof t!="string")throw new U("Variable must be of type String");this.axiosInstance=E.create(),this.axiosInstance.defaults.baseURL=t,this.abortController=r,me(this,B,0),this.axiosInstance.defaults.maxConcurrentRequests=n,this.axiosInstance.interceptors.request.use(s=>x.requestInterceptor(s,this),s=>x.simpleFailureInterceptor(s,this)),this.axiosInstance.interceptors.response.use(s=>x.simpleSuccessInterpector(s,this),s=>x.simpleFailureInterceptor(s,this))}static requestInterceptor(t,n){if(Y(n,B)._++,t.maxConcurrentRequests&&x.isMaxConcurrentRequestsReached(n,t.maxConcurrentRequests)){const r=E.CancelToken.source();t.cancelToken=r.token,r.cancel("Too many concurrent requests")}return t}static simpleFailureInterceptor(t,n){return Y(n,B)._--,Promise.reject(t)}static simpleSuccessInterpector(t,n){return Y(n,B)._--,t}static isMaxConcurrentRequestsReached(t,n){return he(t,B)>n}setMaxConcurrentRequestsLimit(t){if(t==null||t===0)this.axiosInstance.defaults.maxConcurrentRequests=Number.POSITIVE_INFINITY;else if(typeof t=="number"&&Number.isFinite(t))this.axiosInstance.defaults.maxConcurrentRequests=t;else throw new U("Param must be of type Number of left empty")}addHeaders(t){if(typeof t=="object"&&t!==null)for(const[n,r]of Object.entries(t))this.axiosInstance.defaults.headers.common[n]=r;else throw new U("Param must be of type Object")}removeHeaders(t){if(t===void 0)this.axiosInstance.defaults.headers.common={};else if(Array.isArray(t))t.forEach(n=>{delete this.axiosInstance.defaults.headers.common[n]});else throw new U("Invalid input. Please provide an array of header names or no params to remove all headers.")}addParams(t){if(typeof t=="object"&&t!==null)for(const[n,r]of Object.entries(t))this.axiosInstance.defaults.params[n]=r;else throw new U("Param must be of type Object")}removeParams(t){if(t===void 0)this.axiosInstance.defaults.params={};else if(Array.isArray(t))t.forEach(n=>{delete this.axiosInstance.defaults.params[n]});else throw new U("Invalid input. Please provide an array of parameter names or no params to remove all parameters.")}addTimeout(t){if(typeof t=="number")this.axiosInstance.defaults.timeout=t;else throw new U("Timeout must be a number in milliseconds.")}removeTimeout(){delete this.axiosInstance.defaults.timeout}abortAll(){this.abortController.abort()}static validateCall(t,n,r,s,o,i){if(n==null||n.trim()=="")throw new L("URL cannot be null");if(typeof t!="string")throw new L("Method must be of type string (get/post/put/patch/delete)");if(r&&typeof r!="object")throw new L("Headers must be of type object.");if(s&&typeof s!="object")throw new L("Query Params must be of type object.");if(o&&typeof o!="object")throw new L("Config must be of type object.");if(i&&typeof i!="object")throw new L("The AbortController must be of type AbortController.")}static combineURL(t,n){const r=t.replace(/\/+$/,""),s=n.replace(/^\/+/,"");return`${r}/${s}`}static mountEndpoint(t,n,r){if(!r&&typeof n=="object")throw new L("URL or Endpoint cannot be of type object if the call is not reactive.");if(typeof n=="number")throw new L("URL or Endpoint cannot be a number");if(r)return n==null?t:t==null||t.trim()==""?n.value:x.combineURL(t,n.value);if(!r)return n==null||n.trim()==""?t:t==null||t.trim()==""?n:x.combineURL(t,n)}call(t,n,r,s,o=null,i=null){const c=!!(o&&o.reactive);let p=x.mountEndpoint(this.axiosInstance.defaults.baseURL,n,c);x.validateCall(t,p,r,s,o,i);let h=i??this.abortController,l=o&&o.timeout?o.timeout:this.axiosInstance.defaults.timeout,u=o&&o.interval?o.interval:0;const w=m.ref(!0),A=m.ref(null),d=m.ref(null),f=()=>{w.value=!0,this.axiosInstance({url:p,method:t.toLowerCase(),headers:r,params:s,signal:h.signal,timeout:l}).then(C=>{A.value=C}).catch(C=>{d.value=new rn(C)}).finally(()=>{w.value=!1})},S=setInterval(f,u);u<=0&&setTimeout(()=>{clearInterval(S)},u+1);const O=()=>{f()},N=()=>{clearInterval(S)};return c&&(n&&m.watch(n,()=>{p=x.mountEndpoint(this.axiosInstance.defaults.baseURL,n,c),f()}),r&&m.watch(r,()=>{f()}),s&&m.watch(s,()=>{f()})),m.computed(()=>({isLoading:w.value,response:A.value,abortController:h,error:d.value,recall:O,stop:N}))}};B=new WeakMap;let pe=x;return pe});