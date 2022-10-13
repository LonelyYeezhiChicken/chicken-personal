/**
 * @remix-run/router v1.0.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}var m;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(m||(m={}));const $="popstate";function te(e){e===void 0&&(e={});function t(a,s){var i,l;let{pathname:o="/",search:h="",hash:c=""}=g(a.location.hash.substr(1));return x("",{pathname:o,search:h,hash:c},((i=s.state)==null?void 0:i.usr)||null,((l=s.state)==null?void 0:l.key)||"default")}function n(a,s){let i=a.document.querySelector("base"),l="";if(i&&i.getAttribute("href")){let o=a.location.href,h=o.indexOf("#");l=h===-1?o:o.slice(0,h)}return l+"#"+(typeof s=="string"?s:B(s))}function r(a,s){O(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return C(t,n,r,e)}function O(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function j(){return Math.random().toString(36).substr(2,8)}function b(e){return{usr:e.state,key:e.key}}function x(e,t,n,r){return n===void 0&&(n=null),w({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?g(t):t,{state:n,key:(t==null?void 0:t.key)||r||j()})}function B(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function g(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function C(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:s=!1}=r,i=a.history,l=m.Pop,o=null;function h(){l=m.Pop,o&&o({action:l,location:u.location})}function c(f,P){l=m.Push;let p=x(u.location,f,P);n==null||n(p,f);let S=b(p),v=u.createHref(p);try{i.pushState(S,"",v)}catch{a.location.assign(v)}s&&o&&o({action:l,location:p})}function d(f,P){l=m.Replace;let p=x(u.location,f,P);n==null||n(p,f);let S=b(p),v=u.createHref(p);i.replaceState(S,"",v),s&&o&&o({action:l,location:p})}let u={get action(){return l},get location(){return e(a,i)},listen(f){if(o)throw new Error("A history only accepts one active listener");return a.addEventListener($,h),o=f,()=>{a.removeEventListener($,h),o=null}},createHref(f){return t(a,f)},push:c,replace:d,go(f){return i.go(f)}};return u}var E;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(E||(E={}));function ne(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?g(t):t,a=J(r.pathname||"/",n);if(a==null)return null;let s=W(e);L(s);let i=null;for(let l=0;i==null&&l<s.length;++l)i=q(s[l],a);return i}function W(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((a,s)=>{let i={relativePath:a.path||"",caseSensitive:a.caseSensitive===!0,childrenIndex:s,route:a};i.relativePath.startsWith("/")&&(R(i.relativePath.startsWith(r),'Absolute route path "'+i.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),i.relativePath=i.relativePath.slice(r.length));let l=y([r,i.relativePath]),o=n.concat(i);a.children&&a.children.length>0&&(R(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),W(a.children,t,o,l)),!(a.path==null&&!a.index)&&t.push({path:l,score:z(l,a.index),routesMeta:o})}),t}function L(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:M(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const T=/^:\w+$/,U=3,V=2,A=1,k=10,_=-2,H=e=>e==="*";function z(e,t){let n=e.split("/"),r=n.length;return n.some(H)&&(r+=_),t&&(r+=V),n.filter(a=>!H(a)).reduce((a,s)=>a+(T.test(s)?U:s===""?A:k),r)}function M(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function q(e,t){let{routesMeta:n}=e,r={},a="/",s=[];for(let i=0;i<n.length;++i){let l=n[i],o=i===n.length-1,h=a==="/"?t:t.slice(a.length)||"/",c=D({path:l.relativePath,caseSensitive:l.caseSensitive,end:o},h);if(!c)return null;Object.assign(r,c.params);let d=l.route;s.push({params:r,pathname:y([a,c.pathname]),pathnameBase:Q(y([a,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(a=y([a,c.pathnameBase]))}return s}function D(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=F(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let s=a[0],i=s.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce((h,c,d)=>{if(c==="*"){let u=l[d]||"";i=s.slice(0,s.length-u.length).replace(/(.)\/+$/,"$1")}return h[c]=G(l[d]||"",c),h},{}),pathname:s,pathnameBase:i,pattern:e}}function F(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),I(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(i,l)=>(r.push(l),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a+=n?"\\/*$":"(?:(?=[@.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(a,t?void 0:"i"),r]}function G(e,t){try{return decodeURIComponent(e)}catch(n){return I(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function J(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function R(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function I(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function K(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?g(e):e;return{pathname:n?n.startsWith("/")?n:N(n,t):t,search:X(r),hash:Y(a)}}function N(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function re(e,t,n,r){r===void 0&&(r=!1);let a=typeof e=="string"?g(e):w({},e),s=e===""||a.pathname==="",i=s?"/":a.pathname,l;if(r||i==null)l=n;else{let d=t.length-1;if(i.startsWith("..")){let u=i.split("/");for(;u[0]==="..";)u.shift(),d-=1;a.pathname=u.join("/")}l=d>=0?t[d]:"/"}let o=K(a,l),h=i&&i!=="/"&&i.endsWith("/"),c=(s||i===".")&&n.endsWith("/");return!o.pathname.endsWith("/")&&(h||c)&&(o.pathname+="/"),o}const y=e=>e.join("/").replace(/\/\/+/g,"/"),Q=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),X=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Y=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Z{constructor(t,n,r){this.status=t,this.statusText=n||"",this.data=r}}function ae(e){return e instanceof Z}export{m as A,ae as a,B as b,te as c,R as i,y as j,ne as m,g as p,re as r,J as s};
