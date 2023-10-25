"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[5458],{49613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(59496);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),y=l,m=d["".concat(s,".").concat(y)]||d[y]||u[y]||a;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},56872:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(88028),l=(r(59496),r(49613));const a={sidebar_position:7,description:"Nest CLI \u5e38\u7528\u6307\u4ee4",key:["NestJS","Node","TypeScript","nest cli"],tags:["NestJS","Node","TypeScript"]},o="\ud83d\udc69\u200d\ud83d\udcbb Nest CLI \u5e38\u7528\u6307\u4ee4",i={unversionedId:"daylily/nestDaylily/nestCliCmd",id:"daylily/nestDaylily/nestCliCmd",title:"\ud83d\udc69\u200d\ud83d\udcbb Nest CLI \u5e38\u7528\u6307\u4ee4",description:"Nest CLI \u5e38\u7528\u6307\u4ee4",source:"@site/docs/daylily/nestDaylily/nestCliCmd.md",sourceDirName:"daylily/nestDaylily",slug:"/daylily/nestDaylily/nestCliCmd",permalink:"/docs/daylily/nestDaylily/nestCliCmd",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/daylily/nestDaylily/nestCliCmd.md",tags:[{label:"NestJS",permalink:"/docs/tags/nest-js"},{label:"Node",permalink:"/docs/tags/node"},{label:"TypeScript",permalink:"/docs/tags/type-script"}],version:"current",lastUpdatedAt:1698244538,formattedLastUpdatedAt:"2023\u5e7410\u670825\u65e5",sidebarPosition:7,frontMatter:{sidebar_position:7,description:"Nest CLI \u5e38\u7528\u6307\u4ee4",key:["NestJS","Node","TypeScript","nest cli"],tags:["NestJS","Node","TypeScript"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc69\u200d\ud83d\udcbb \u95dc\u65bc NestJS",permalink:"/docs/daylily/nestDaylily/aboutNest"},next:{title:"\ud83d\udc69\u200d\ud83d\udcbb NestJS \u8a2d\u5b9a\u555f\u52d5 Port",permalink:"/docs/daylily/nestDaylily/nestStartPort"}},s={},c=[{value:"\u5efa\u7acb project",id:"\u5efa\u7acb-project",level:2},{value:"\u5efa\u7acb controller",id:"\u5efa\u7acb-controller",level:2},{value:"\u5efa\u7acb service",id:"\u5efa\u7acb-service",level:2},{value:"\u5efa\u7acb module",id:"\u5efa\u7acb-module",level:2},{value:"\u7e2e\u5beb",id:"\u7e2e\u5beb",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,l.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"-nest-cli-\u5e38\u7528\u6307\u4ee4"},"\ud83d\udc69\u200d\ud83d\udcbb Nest CLI \u5e38\u7528\u6307\u4ee4"),(0,l.kt)("h2",{id:"\u5efa\u7acb-project"},"\u5efa\u7acb project"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"nest new [project-name]\n")),(0,l.kt)("h2",{id:"\u5efa\u7acb-controller"},"\u5efa\u7acb controller"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"nest generate controller [module name]\n")),(0,l.kt)("h2",{id:"\u5efa\u7acb-service"},"\u5efa\u7acb service"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"nest generate service [module name]\n")),(0,l.kt)("h2",{id:"\u5efa\u7acb-module"},"\u5efa\u7acb module"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"nest generate module [module name]\n")),(0,l.kt)("h3",{id:"\u7e2e\u5beb"},"\u7e2e\u5beb"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"nest generate \u7e2e\u5beb")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"nest g\n")))}u.isMDXComponent=!0}}]);