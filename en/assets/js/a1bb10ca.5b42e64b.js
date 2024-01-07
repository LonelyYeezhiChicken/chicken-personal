"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[7060],{49613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(59496);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(n),m=s,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(y,a(a({ref:t},p),{},{components:n})):r.createElement(y,a({ref:t},p))}));function y(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:s,a[1]=l;for(var i=2;i<o;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90073:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=n(88028),s=(n(59496),n(49613));const o={sidebar_position:15,description:"SSO \u5efa\u7acb\u5c08\u6848",key:["sso","Single Sign-On","NestJS"],tags:["sso","Single Sign-On","NestJS"]},a="\ud83d\udd10 SSO \u5efa\u7acb\u5c08\u6848",l={unversionedId:"sso/createProject",id:"sso/createProject",title:"\ud83d\udd10 SSO \u5efa\u7acb\u5c08\u6848",description:"SSO \u5efa\u7acb\u5c08\u6848",source:"@site/docs/sso/createProject.md",sourceDirName:"sso",slug:"/sso/createProject",permalink:"/en/docs/sso/createProject",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/sso/createProject.md",tags:[{label:"sso",permalink:"/en/docs/tags/sso"},{label:"Single Sign-On",permalink:"/en/docs/tags/single-sign-on"},{label:"NestJS",permalink:"/en/docs/tags/nest-js"}],version:"current",lastUpdatedAt:1704630401,formattedLastUpdatedAt:"Jan 7, 2024",sidebarPosition:15,frontMatter:{sidebar_position:15,description:"SSO \u5efa\u7acb\u5c08\u6848",key:["sso","Single Sign-On","NestJS"],tags:["sso","Single Sign-On","NestJS"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd10 SSO \u8cc7\u6599\u5eab",permalink:"/en/docs/sso/database"},next:{title:"\u524d\u7aef\u5165\u9580",permalink:"/en/docs/category/\u524d\u7aef\u5165\u9580"}},c={},i=[{value:"\u74b0\u5883",id:"\u74b0\u5883",level:2},{value:"\u5efa\u7acb\u5c08\u6848",id:"\u5efa\u7acb\u5c08\u6848",level:2},{value:"\u5efa\u7acb",id:"\u5efa\u7acb",level:3},{value:"\u9078\u64c7 yarn",id:"\u9078\u64c7-yarn",level:3},{value:"\u8a2d\u5b9a port",id:"\u8a2d\u5b9a-port",level:3},{value:"\u555f\u52d5",id:"\u555f\u52d5",level:3}],p={toc:i},u="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"-sso-\u5efa\u7acb\u5c08\u6848"},"\ud83d\udd10 SSO \u5efa\u7acb\u5c08\u6848"),(0,s.kt)("h2",{id:"\u74b0\u5883"},"\u74b0\u5883"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"TS"),(0,s.kt)("li",{parentName:"ul"},"NestJS")),(0,s.kt)("h2",{id:"\u5efa\u7acb\u5c08\u6848"},"\u5efa\u7acb\u5c08\u6848"),(0,s.kt)("h3",{id:"\u5efa\u7acb"},"\u5efa\u7acb"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"nest new sso\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"\u26a1  We will scaffold your app in a few seconds..\n\n? Which package manager would you \u2764\ufe0f  to use?\n")),(0,s.kt)("h3",{id:"\u9078\u64c7-yarn"},"\u9078\u64c7 yarn"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"? Which package manager would you \u2764\ufe0f  to use? yarn\nCREATE sso/.eslintrc.js (663 bytes)\nCREATE sso/.prettierrc (51 bytes)\nCREATE sso/nest-cli.json (171 bytes)\nCREATE sso/package.json (1934 bytes)\nCREATE sso/README.md (3347 bytes)\nCREATE sso/tsconfig.build.json (97 bytes)\nCREATE sso/tsconfig.json (546 bytes)\nCREATE sso/src/app.controller.spec.ts (617 bytes)\nCREATE sso/src/app.controller.ts (274 bytes)\nCREATE sso/src/app.module.ts (249 bytes)\nCREATE sso/src/app.service.ts (142 bytes)\nCREATE sso/src/main.ts (208 bytes)\nCREATE sso/test/app.e2e-spec.ts (630 bytes)\nCREATE sso/test/jest-e2e.json (183 bytes)\n\n\u2714 Installation in progress... \u2615\n\n\ud83d\ude80  Successfully created project sso\n\ud83d\udc49  Get started with the following commands:\n\n$ cd sso\n$ yarn run start\n")),(0,s.kt)("h3",{id:"\u8a2d\u5b9a-port"},"\u8a2d\u5b9a port"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u65bc\u6a94\u6848 src/main.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"{6}","{6}":!0},"import { NestFactory } from '@nestjs/core';\nimport { AppModule } from './app.module';\n\nasync function bootstrap() {\n  const app = await NestFactory.create(AppModule);\n  await app.listen(3050);\n}\nbootstrap();\n")),(0,s.kt)("h3",{id:"\u555f\u52d5"},"\u555f\u52d5"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u6839\u64da\u8aaa\u660e\u7684\u6307\u4ee4\u555f\u52d5")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"cd sso\n\nyarn run start\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"$ nest start\n[Nest] 81256  - 2023/09/07 \u4e0b\u534810:28:15     LOG [NestFactory] Starting Nest application...\n[Nest] 81256  - 2023/09/07 \u4e0b\u534810:28:15     LOG [InstanceLoader] AppModule dependencies initialized +13ms\n[Nest] 81256  - 2023/09/07 \u4e0b\u534810:28:16     LOG [RoutesResolver] AppController {/}: +72ms\n[Nest] 81256  - 2023/09/07 \u4e0b\u534810:28:16     LOG [RouterExplorer] Mapped {/, GET} route +2ms\n[Nest] 81256  - 2023/09/07 \u4e0b\u534810:28:16     LOG [NestApplication] Nest application successfully started +3ms\n")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"http://localhost:3050/"},"\u555f\u52d5\u5f8c\u958b\u555f\u7db2\u7ad9")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Hello World!")),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/LonelyYeezhiChicken/SSO-v1"},"github \u9023\u7d50")))}d.isMDXComponent=!0}}]);