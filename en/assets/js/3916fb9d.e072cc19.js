"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[5458],{49613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(59496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),y=l,m=d["".concat(s,".").concat(y)]||d[y]||u[y]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},56872:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(88028),l=(n(59496),n(49613));const a={sidebar_position:7,description:"Nest CLI \u5e38\u7528\u6307\u4ee4",key:["NestJS","Node","TypeScript","nest cli"],tags:["NestJS","Node","TypeScript"]},o="\ud83d\udc69\u200d\ud83d\udcbb Nest CLI \u5e38\u7528\u6307\u4ee4",i={unversionedId:"daylily/nestDaylily/nestCliCmd",id:"daylily/nestDaylily/nestCliCmd",title:"\ud83d\udc69\u200d\ud83d\udcbb Nest CLI \u5e38\u7528\u6307\u4ee4",description:"Nest CLI \u5e38\u7528\u6307\u4ee4",source:"@site/docs/daylily/nestDaylily/nestCliCmd.md",sourceDirName:"daylily/nestDaylily",slug:"/daylily/nestDaylily/nestCliCmd",permalink:"/en/docs/daylily/nestDaylily/nestCliCmd",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/daylily/nestDaylily/nestCliCmd.md",tags:[{label:"NestJS",permalink:"/en/docs/tags/nest-js"},{label:"Node",permalink:"/en/docs/tags/node"},{label:"TypeScript",permalink:"/en/docs/tags/type-script"}],version:"current",lastUpdatedAt:1697605422,formattedLastUpdatedAt:"Oct 18, 2023",sidebarPosition:7,frontMatter:{sidebar_position:7,description:"Nest CLI \u5e38\u7528\u6307\u4ee4",key:["NestJS","Node","TypeScript","nest cli"],tags:["NestJS","Node","TypeScript"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc69\u200d\ud83d\udcbb \u95dc\u65bc NestJS",permalink:"/en/docs/daylily/nestDaylily/aboutNest"},next:{title:"\ud83d\udc69\u200d\ud83d\udcbb NestJS \u8a2d\u5b9a\u555f\u52d5 Port",permalink:"/en/docs/daylily/nestDaylily/nestStartPort"}},s={},c=[{value:"\u5efa\u7acb project",id:"\u5efa\u7acb-project",level:2},{value:"\u5efa\u7acb controller",id:"\u5efa\u7acb-controller",level:2},{value:"\u5efa\u7acb service",id:"\u5efa\u7acb-service",level:2},{value:"\u5efa\u7acb module",id:"\u5efa\u7acb-module",level:2},{value:"\u7e2e\u5beb",id:"\u7e2e\u5beb",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"-nest-cli-\u5e38\u7528\u6307\u4ee4"},"\ud83d\udc69\u200d\ud83d\udcbb Nest CLI \u5e38\u7528\u6307\u4ee4"),(0,l.kt)("h2",{id:"\u5efa\u7acb-project"},"\u5efa\u7acb project"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"nest new [project-name]\n")),(0,l.kt)("h2",{id:"\u5efa\u7acb-controller"},"\u5efa\u7acb controller"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"nest generate controller [module name]\n")),(0,l.kt)("h2",{id:"\u5efa\u7acb-service"},"\u5efa\u7acb service"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"nest generate service [module name]\n")),(0,l.kt)("h2",{id:"\u5efa\u7acb-module"},"\u5efa\u7acb module"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"nest generate module [module name]\n")),(0,l.kt)("h3",{id:"\u7e2e\u5beb"},"\u7e2e\u5beb"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"nest generate \u7e2e\u5beb")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"nest g\n")))}u.isMDXComponent=!0}}]);