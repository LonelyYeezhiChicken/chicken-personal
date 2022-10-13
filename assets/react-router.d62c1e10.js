import{A as w,i as d,p as F,s as T,r as J,j as y,m as V,a as k}from"./@remix-run.0f90e68c.js";import{a as P,r as s}from"./react.190e4860.js";import{j as c,a as U,F as _}from"./react-markdown.7bf3d9a7.js";/**
 * React Router v6.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},S.apply(this,arguments)}function $(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const G=typeof Object.is=="function"?Object.is:$,{useState:W,useEffect:X,useLayoutEffect:Y,useDebugValue:q}=P;function z(e,t,n){const r=t(),[{inst:o},l]=W({inst:{value:r,getSnapshot:t}});return Y(()=>{o.value=r,o.getSnapshot=t,R(o)&&l({inst:o})},[e,r,t]),X(()=>(R(o)&&l({inst:o}),e(()=>{R(o)&&l({inst:o})})),[e]),q(r),r}function R(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!G(n,r)}catch{return!0}}function K(e,t,n){return t()}const Q=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Z=!Q,A=Z?K:z;"useSyncExternalStore"in P&&(e=>e.useSyncExternalStore)(P);const H=s.exports.createContext(null),ee=s.exports.createContext(null),D=s.exports.createContext(null),B=s.exports.createContext(null),E=s.exports.createContext(null),x=s.exports.createContext({outlet:null,matches:[]}),L=s.exports.createContext(null);function ve(e,t){let{relative:n}=t===void 0?{}:t;v()||d(!1);let{basename:r,navigator:o}=s.exports.useContext(B),{hash:l,pathname:a,search:u}=oe(e,{relative:n}),i=a;return r!=="/"&&(i=a==="/"?r:y([r,a])),o.createHref({pathname:i,search:u,hash:l})}function v(){return s.exports.useContext(E)!=null}function j(){return v()||d(!1),s.exports.useContext(E).location}function I(e){return e.filter((t,n)=>n===0||!t.route.index&&t.pathnameBase!==e[n-1].pathnameBase)}function te(){v()||d(!1);let{basename:e,navigator:t}=s.exports.useContext(B),{matches:n}=s.exports.useContext(x),{pathname:r}=j(),o=JSON.stringify(I(n).map(u=>u.pathnameBase)),l=s.exports.useRef(!1);return s.exports.useEffect(()=>{l.current=!0}),s.exports.useCallback(function(u,i){if(i===void 0&&(i={}),!l.current)return;if(typeof u=="number"){t.go(u);return}let p=J(u,JSON.parse(o),r,i.relative==="path");e!=="/"&&(p.pathname=p.pathname==="/"?e:y([e,p.pathname])),(i.replace?t.replace:t.push)(p,i.state,i)},[e,t,o,r])}const re=s.exports.createContext(null);function ne(e){let t=s.exports.useContext(x).outlet;return t&&c(re.Provider,{value:e,children:t})}function oe(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=s.exports.useContext(x),{pathname:o}=j(),l=JSON.stringify(I(r).map(a=>a.pathnameBase));return s.exports.useMemo(()=>J(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function ae(e,t){v()||d(!1);let n=s.exports.useContext(D),{matches:r}=s.exports.useContext(x),o=r[r.length-1],l=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let u=j(),i;if(t){var p;let h=typeof t=="string"?F(t):t;a==="/"||((p=h.pathname)==null?void 0:p.startsWith(a))||d(!1),i=h}else i=u;let f=i.pathname||"/",C=a==="/"?f:f.slice(a.length)||"/",m=V(e,{pathname:C}),g=ue(m&&m.map(h=>Object.assign({},h,{params:Object.assign({},l,h.params),pathname:y([a,h.pathname]),pathnameBase:h.pathnameBase==="/"?a:y([a,h.pathnameBase])})),r,n||void 0);return t?c(E.Provider,{value:{location:S({pathname:"/",search:"",hash:"",state:null,key:"default"},i),navigationType:w.Pop},children:g}):g}function se(){let e=pe(),t=k(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},l={padding:"2px 4px",backgroundColor:r};return U(_,{children:[c("h2",{children:"Unhandled Thrown Error!"}),c("h3",{style:{fontStyle:"italic"},children:t}),n?c("pre",{style:o,children:n}):null,c("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),U("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",c("code",{style:l,children:"errorElement"})," props on\xA0",c("code",{style:l,children:"<Route>"})]})]})}class le extends s.exports.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?c(L.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function ie(e){let{routeContext:t,match:n,children:r}=e,o=s.exports.useContext(H);return o&&n.route.errorElement&&(o._deepestRenderedBoundaryId=n.route.id),c(x.Provider,{value:t,children:r})}function ue(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,o=n==null?void 0:n.errors;if(o!=null){let l=r.findIndex(a=>a.route.id&&(o==null?void 0:o[a.route.id]));l>=0||d(!1),r=r.slice(0,Math.min(r.length,l+1))}return r.reduceRight((l,a,u)=>{let i=a.route.id?o==null?void 0:o[a.route.id]:null,p=n?a.route.errorElement||c(se,{}):null,f=()=>c(ie,{match:a,routeContext:{outlet:l,matches:t.concat(r.slice(0,u+1))},children:i?p:a.route.element!==void 0?a.route.element:l});return n&&(a.route.errorElement||u===0)?c(le,{location:n.location,component:p,error:i,children:f()}):f()},null)}var b;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(b||(b={}));function ce(e){let t=s.exports.useContext(D);return t||d(!1),t}function pe(){var e;let t=s.exports.useContext(L),n=ce(b.UseRouteError),r=s.exports.useContext(x),o=r.matches[r.matches.length-1];return t||(r||d(!1),o.route.id||d(!1),(e=n.errors)==null?void 0:e[o.route.id])}function me(e){let{to:t,replace:n,state:r,relative:o}=e;v()||d(!1);let l=s.exports.useContext(D),a=te();return s.exports.useEffect(()=>{l&&l.navigation.state!=="idle"||a(t,{replace:n,state:r,relative:o})}),null}function ge(e){return ne(e.context)}function de(e){d(!1)}function Ce(e){let{basename:t="/",children:n=null,location:r,navigationType:o=w.Pop,navigator:l,static:a=!1}=e;v()&&d(!1);let u=t.replace(/^\/*/,"/"),i=s.exports.useMemo(()=>({basename:u,navigator:l,static:a}),[u,l,a]);typeof r=="string"&&(r=F(r));let{pathname:p="/",search:f="",hash:C="",state:m=null,key:g="default"}=r,h=s.exports.useMemo(()=>{let N=T(p,u);return N==null?null:{pathname:N,search:f,hash:C,state:m,key:g}},[u,p,f,C,m,g]);return h==null?null:c(B.Provider,{value:i,children:c(E.Provider,{children:n,value:{location:h,navigationType:o}})})}function ye(e){let{children:t,location:n}=e,r=s.exports.useContext(ee),o=r&&!t?r.router.routes:O(t);return ae(o,n)}var M;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(M||(M={}));new Promise(()=>{});function O(e,t){t===void 0&&(t=[]);let n=[];return s.exports.Children.forEach(e,(r,o)=>{if(!s.exports.isValidElement(r))return;if(r.type===s.exports.Fragment){n.push.apply(n,O(r.props.children,t));return}r.type!==de&&d(!1);let l=[...t,o],a={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(a.children=O(r.props.children,l)),n.push(a)}),n}export{me as N,ge as O,Ce as R,te as a,j as b,oe as c,ye as d,de as e,ve as u};
