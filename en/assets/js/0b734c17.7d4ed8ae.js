"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[8300],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),y=c(r),d=o,m=y["".concat(l,".").concat(d)]||y[d]||u[d]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[y]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},70:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:10,description:"\u95dc\u65bc NestJS",key:["NestJS","Node","TypeScript"],tags:["NestJS","Node","TypeScript"]},i="\ud83d\udc69\u200d\ud83d\udcbb NestJS \u8a2d\u5b9a\u555f\u52d5 Port",s={unversionedId:"daylily/nestDaylily/nestStartPort",id:"daylily/nestDaylily/nestStartPort",title:"\ud83d\udc69\u200d\ud83d\udcbb NestJS \u8a2d\u5b9a\u555f\u52d5 Port",description:"\u95dc\u65bc NestJS",source:"@site/docs/daylily/nestDaylily/nestStartPort.md",sourceDirName:"daylily/nestDaylily",slug:"/daylily/nestDaylily/nestStartPort",permalink:"/en/docs/daylily/nestDaylily/nestStartPort",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/daylily/nestDaylily/nestStartPort.md",tags:[{label:"NestJS",permalink:"/en/docs/tags/nest-js"},{label:"Node",permalink:"/en/docs/tags/node"},{label:"TypeScript",permalink:"/en/docs/tags/type-script"}],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"\u95dc\u65bc NestJS",key:["NestJS","Node","TypeScript"],tags:["NestJS","Node","TypeScript"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc69\u200d\ud83d\udcbb \u95dc\u65bc NestJS",permalink:"/en/docs/daylily/nestDaylily/aboutNest"},next:{title:"\ud83d\udc1a MSSQL \u958b\u767c\u96dc\u8a18",permalink:"/en/docs/category/-mssql-\u958b\u767c\u96dc\u8a18"}},l={},c=[],p={toc:c},y="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(y,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-nestjs-\u8a2d\u5b9a\u555f\u52d5-port"},"\ud83d\udc69\u200d\ud83d\udcbb NestJS \u8a2d\u5b9a\u555f\u52d5 Port"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u65bc\u6a94\u6848 src/main.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{6}","{6}":!0},"import { NestFactory } from '@nestjs/core';\nimport { AppModule } from './app.module';\n\nasync function bootstrap() {\n  const app = await NestFactory.create(AppModule);\n  await app.listen(3050);\n}\nbootstrap();\n")))}u.isMDXComponent=!0}}]);