"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[413],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=l,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(y,a(a({ref:t},c),{},{components:n})):r.createElement(y,a({ref:t},c))}));function y(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:l,a[1]=o;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7462),l=(n(7294),n(3905));const i={sidebar_position:30,description:"Multi-stage Build",key:["NestJS","Node","TypeScript","Docker","Dockerfile"],tags:["NestJS","Node","TypeScript","Docker","Dockerfile"]},a="\ud83d\udc69\u200d\ud83d\udcbb Multi-stage Build",o={unversionedId:"daylily/nestDaylily/multiStageBuild",id:"daylily/nestDaylily/multiStageBuild",title:"\ud83d\udc69\u200d\ud83d\udcbb Multi-stage Build",description:"Multi-stage Build",source:"@site/docs/daylily/nestDaylily/multiStageBuild.md",sourceDirName:"daylily/nestDaylily",slug:"/daylily/nestDaylily/multiStageBuild",permalink:"/en/docs/daylily/nestDaylily/multiStageBuild",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/daylily/nestDaylily/multiStageBuild.md",tags:[{label:"NestJS",permalink:"/en/docs/tags/nest-js"},{label:"Node",permalink:"/en/docs/tags/node"},{label:"TypeScript",permalink:"/en/docs/tags/type-script"},{label:"Docker",permalink:"/en/docs/tags/docker"},{label:"Dockerfile",permalink:"/en/docs/tags/dockerfile"}],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,description:"Multi-stage Build",key:["NestJS","Node","TypeScript","Docker","Dockerfile"],tags:["NestJS","Node","TypeScript","Docker","Dockerfile"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc69\u200d\ud83d\udcbb \u5b89\u88dd Swagger",permalink:"/en/docs/daylily/nestDaylily/addSwagger"},next:{title:"\ud83e\udde9 Vue \u958b\u767c\u96dc\u8a18",permalink:"/en/docs/category/-vue-\u958b\u767c\u96dc\u8a18"}},p={},s=[{value:"\u70ba\u4f55\u8981\u4f7f\u7528 Multi-stage Build",id:"\u70ba\u4f55\u8981\u4f7f\u7528-multi-stage-build",level:2},{value:"\u8a66\u505a nest Multi-stage Build",id:"\u8a66\u505a-nest-multi-stage-build",level:2},{value:"dockerfile",id:"dockerfile",level:3}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"-multi-stage-build"},"\ud83d\udc69\u200d\ud83d\udcbb Multi-stage Build"),(0,l.kt)("h2",{id:"\u70ba\u4f55\u8981\u4f7f\u7528-multi-stage-build"},"\u70ba\u4f55\u8981\u4f7f\u7528 Multi-stage Build"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5728\u76f4\u63a5\u5efa\u7acb nest \u7684 docker image \u6642\uff0c"),(0,l.kt)("p",{parentName:"blockquote"},"image \u81f3\u5c11\u6703 400 \u591a mb\uff0c\u5982\u679c\u8981\u9032\u884c\u7626\u8eab\u6253\u5305\u90a3\u52e2\u5fc5\u9700\u8981\u57f7\u884c\u6b64\u52d5\u4f5c")),(0,l.kt)("h2",{id:"\u8a66\u505a-nest-multi-stage-build"},"\u8a66\u505a nest Multi-stage Build"),(0,l.kt)("h3",{id:"dockerfile"},"dockerfile"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6b64\u6b65\u9a5f\u662f\u5148\u4f7f\u7528\u958b\u767c\u74b0\u5883\u9032\u884c\u6253\u5305\uff0c\u63a5\u4e0b\u4f86\u4f9d\u9760 pnpm \u4f86\u5b89\u88dd\u751f\u7522\u74b0\u5883\u6240\u9700\u8981\u7528\u5230\u7684\u4f9d\u8cf4")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'# development image\nFROM node:alpine AS development\n\n# \u5efa\u7acbapp\u76ee\u9304\nWORKDIR /usr/src/app\n\n# \u8907\u88fd\u4f9d\u8cf4\u6a94\nCOPY  package*.json ./\n\nCOPY tsconfig*.json ./\n\n# \u4e0b\u8f09 pnpm\nRUN npm i -g pnpm\n\n# \u8907\u88fd\u7a0b\u5f0f\u78bc\nCOPY . . /usr/src/app/\n\n# \u4e0b\u8f09\u4f9d\u8cf4\nRUN pnpm install -r\n\n# \u90e8\u5c6c\u5c08\u6848\nRUN pnpm run build\n\n# production image\nFROM node:alpine AS production\n\n# \u5efa\u7acbapp\u76ee\u9304\nWORKDIR /usr/src/app\n\n# \u8907\u88fd\u4f9d\u8cf4\u6a94\nCOPY package.json ./\n\nCOPY pnpm-lock.yaml ./\n\n# \u4e0b\u8f09 pnpm\nRUN npm i -g pnpm\n\n# \u4e0b\u8f09\u4f9d\u8cf4(\u53ea\u4e0b\u8f09\u9700\u4f7f\u7528\u7684\u4f9d\u8cf4)\nRUN pnpm install --prod\n\n# \u8907\u88fd\u525b\u525b\u6253\u5305\u7684\u6a94\u6848\nCOPY --from=development /usr/src/app/dist ./dist\n\n# \u555f\u52d5\u670d\u52d9\nCMD [ "node", "dist/main.js" ]\n')),(0,l.kt)("hr",null),(0,l.kt)("p",null,"ref:"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://ithelp.ithome.com.tw/articles/10247981?sc=hot"},"Multi-stage Build, Miles")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/nodejs-typescript-classroom/learn-sleepr/blob/master/apps/notifications/Dockerfile"},"\u6881\u5927\u54e5 github")))}d.isMDXComponent=!0}}]);