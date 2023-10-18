"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[1308],{49613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(59496);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),y=l,k=d["".concat(c,".").concat(y)]||d[y]||u[y]||o;return r?n.createElement(k,a(a({ref:t},p),{},{components:r})):n.createElement(k,a({ref:t},p))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:l,a[1]=i;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},43944:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(88028),l=(r(59496),r(49613));const o={sidebar_position:15,description:"NestJS dockerfile",key:["NestJS","Node","TypeScript","Docker","Dockerfile"],tags:["NestJS","Node","TypeScript","Docker","Dockerfile"]},a="\ud83d\udc69\u200d\ud83d\udcbb NestJS \u7684 dockerfile",i={unversionedId:"daylily/nestDaylily/writeDockerfile",id:"daylily/nestDaylily/writeDockerfile",title:"\ud83d\udc69\u200d\ud83d\udcbb NestJS \u7684 dockerfile",description:"NestJS dockerfile",source:"@site/docs/daylily/nestDaylily/writeDockerfile.md",sourceDirName:"daylily/nestDaylily",slug:"/daylily/nestDaylily/writeDockerfile",permalink:"/docs/daylily/nestDaylily/writeDockerfile",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/daylily/nestDaylily/writeDockerfile.md",tags:[{label:"NestJS",permalink:"/docs/tags/nest-js"},{label:"Node",permalink:"/docs/tags/node"},{label:"TypeScript",permalink:"/docs/tags/type-script"},{label:"Docker",permalink:"/docs/tags/docker"},{label:"Dockerfile",permalink:"/docs/tags/dockerfile"}],version:"current",lastUpdatedAt:1697605422,formattedLastUpdatedAt:"2023\u5e7410\u670818\u65e5",sidebarPosition:15,frontMatter:{sidebar_position:15,description:"NestJS dockerfile",key:["NestJS","Node","TypeScript","Docker","Dockerfile"],tags:["NestJS","Node","TypeScript","Docker","Dockerfile"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc69\u200d\ud83d\udcbb NestJS \u8a2d\u5b9a\u555f\u52d5 Port",permalink:"/docs/daylily/nestDaylily/nestStartPort"},next:{title:"\ud83d\udc69\u200d\ud83d\udcbb NestJS \u7684 Docker Compose",permalink:"/docs/daylily/nestDaylily/useDockerCompose"}},c={},s=[{value:"\u5efa\u7acb\u6a94\u6848",id:"\u5efa\u7acb\u6a94\u6848",level:2},{value:"\u5efa\u7acb image",id:"\u5efa\u7acb-image",level:2},{value:"\u555f\u52d5 nest \u5bb9\u5668",id:"\u555f\u52d5-nest-\u5bb9\u5668",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...r}=e;return(0,l.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"-nestjs-\u7684-dockerfile"},"\ud83d\udc69\u200d\ud83d\udcbb NestJS \u7684 dockerfile"),(0,l.kt)("h2",{id:"\u5efa\u7acb\u6a94\u6848"},"\u5efa\u7acb\u6a94\u6848"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5728\u5c08\u6848\u5e95\u4e0b\u5efa\u7acb\u4e00\u500b\u6a94\u6848 ",(0,l.kt)("inlineCode",{parentName:"p"},"dockerfile"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'# node image\nFROM node:18-alpine\n\n# \u5efa\u7acbapp\u76ee\u9304\nWORKDIR /usr/src/app\n\n# \u8907\u88fd\u4f9d\u8cf4\u6a94\nCOPY  package*.json ./\n\nCOPY tsconfig*.json ./\n\n# \u8907\u88fd\u7a0b\u5f0f\u78bc\nCOPY . .\n\n# \u4e0b\u8f09\u4f9d\u8cf4\nRUN npm install\n\n# \u90e8\u5c6c\u5c08\u6848\nRUN npm run build\n\n# \u555f\u52d5\u670d\u52d9\nCMD [ "node", "dist/main.js" ]\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5728\u5c08\u6848\u5e95\u4e0b\u5efa\u7acb\u4e00\u500b\u6a94\u6848 ",(0,l.kt)("inlineCode",{parentName:"p"},".dockerignore"),"\uff0c\u4f86\u904e\u6ffe\u7528\u4e0d\u5230\u7684\u6a94\u6848")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"dockerfile\n.dockerignore\nnode_modules\nnpm-debug.log\ndist\n")),(0,l.kt)("h2",{id:"\u5efa\u7acb-image"},"\u5efa\u7acb image"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"docker build -t nest-app .\n")),(0,l.kt)("h2",{id:"\u555f\u52d5-nest-\u5bb9\u5668"},"\u555f\u52d5 nest \u5bb9\u5668"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -p 80:3050 nest-app \n")))}u.isMDXComponent=!0}}]);