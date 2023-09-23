"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[3274],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=l,k=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(k,a(a({ref:t},p),{},{components:n})):r.createElement(k,a({ref:t},p))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:l,a[1]=i;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4498:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(8957),l=(n(9496),n(9613));const o={sidebar_position:45,description:"\u5168\u57df\u5de5\u5177\u5305 TimeZone",key:["NestJS","Node","TypeScript"],tags:["NestJS","Node","TypeScript"]},a="\ud83d\udc69\u200d\ud83d\udcbb \u5168\u57df\u5de5\u5177\u5305 TimeZone",i={unversionedId:"daylily/nestDaylily/dateTimeUtail",id:"daylily/nestDaylily/dateTimeUtail",title:"\ud83d\udc69\u200d\ud83d\udcbb \u5168\u57df\u5de5\u5177\u5305 TimeZone",description:"\u5168\u57df\u5de5\u5177\u5305 TimeZone",source:"@site/docs/daylily/nestDaylily/dateTimeUtail.md",sourceDirName:"daylily/nestDaylily",slug:"/daylily/nestDaylily/dateTimeUtail",permalink:"/docs/daylily/nestDaylily/dateTimeUtail",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/daylily/nestDaylily/dateTimeUtail.md",tags:[{label:"NestJS",permalink:"/docs/tags/nest-js"},{label:"Node",permalink:"/docs/tags/node"},{label:"TypeScript",permalink:"/docs/tags/type-script"}],version:"current",lastUpdatedAt:1695476618,formattedLastUpdatedAt:"2023\u5e749\u670823\u65e5",sidebarPosition:45,frontMatter:{sidebar_position:45,description:"\u5168\u57df\u5de5\u5177\u5305 TimeZone",key:["NestJS","Node","TypeScript"],tags:["NestJS","Node","TypeScript"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc69\u200d\ud83d\udcbb \u5168\u57df\u5de5\u5177\u5305 UUID",permalink:"/docs/daylily/nestDaylily/createUtail"},next:{title:"\ud83d\udc69\u200d\ud83d\udcbb \u7406\u89e3 Nest \u7684\u55ae\u5143\u6e2c\u8a66",permalink:"/docs/daylily/nestDaylily/unitTest"}},c={},s=[{value:"\u95dc\u65bc\u5168\u57df\u5de5\u5177\u5305 TimeZone",id:"\u95dc\u65bc\u5168\u57df\u5de5\u5177\u5305-timezone",level:2},{value:"\u88fd\u4f5c\u5168\u57df\u5de5\u5177\u5305 TimeZone",id:"\u88fd\u4f5c\u5168\u57df\u5de5\u5177\u5305-timezone",level:2},{value:"\u5efa\u7acb interface",id:"\u5efa\u7acb-interface",level:3},{value:"\u5efa\u7acb service",id:"\u5efa\u7acb-service",level:3},{value:"\u8a3b\u518a\u6a21\u7d44",id:"\u8a3b\u518a\u6a21\u7d44",level:3}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"-\u5168\u57df\u5de5\u5177\u5305-timezone"},"\ud83d\udc69\u200d\ud83d\udcbb \u5168\u57df\u5de5\u5177\u5305 TimeZone"),(0,l.kt)("h2",{id:"\u95dc\u65bc\u5168\u57df\u5de5\u5177\u5305-timezone"},"\u95dc\u65bc\u5168\u57df\u5de5\u5177\u5305 TimeZone"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u70ba\u751a\u9ebc\u8981\u7279\u5730\u63d0\u4f9b\u4e00\u500b UUID \u670d\u52d9\u5462?")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u70ba\u4e86\u505a\u6e2c\u8a66\u9694\u96e2"),(0,l.kt)("li",{parentName:"ol"},"\u6703\u6709\u597d\u5e7e\u500b\u6a21\u7d44\u9700\u8981\u4f7f\u7528\u5230\u9019\u500b\u529f\u80fd"),(0,l.kt)("li",{parentName:"ol"},"\u5728\u96f2\u7aef\u670d\u52d9\u4e2d\uff0c\u76f4\u63a5\u53d6 localtime \u6703\u53d6\u5230\u4f3a\u670d\u5668\u7576\u5730\u7684\u6642\u9593\uff0c\u9020\u6210\u6642\u9593\u4e0d\u6e96\u78ba\u7684\u554f\u984c")),(0,l.kt)("h2",{id:"\u88fd\u4f5c\u5168\u57df\u5de5\u5177\u5305-timezone"},"\u88fd\u4f5c\u5168\u57df\u5de5\u5177\u5305 TimeZone"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5148\u5efa\u7acb\u4e00\u500b clock \u7684\u8cc7\u6599\u593e")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"src\n\u2514\u2500user\n\u2502\n\u2514\u2500uuid\n\u2502\n\u2514\u2500clock\n\u2502\n\u2514\u2500app.controller.spec.ts\n\u2502\n\u2514\u2500app.controller.ts\n\u2502\n\u2514\u2500app.module.ts\n\u2502\n\u2514\u2500app.service.ts\n\u2502\n\u2514\u2500main.ts\n")),(0,l.kt)("h3",{id:"\u5efa\u7acb-interface"},"\u5efa\u7acb interface"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728 uuid \u8cc7\u6599\u593e\u5e95\u4e0b\uff0c\u5efa\u7acb\u4e00\u500b clock.service.interface.ts")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"clock\n\u2514\u2500clock.service.interface.ts\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"export interface ClockServiceInterface{\n    /**\n     * \u53d6\u5f97 +8 \u6642\u9593\n     */\n    getTime():Date;\n}\n")),(0,l.kt)("h3",{id:"\u5efa\u7acb-service"},"\u5efa\u7acb service"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6b64\u8655\u53ef\u4ee5\u4f7f\u7528 nest cli \u4f86\u5efa\u7acb\u4e00\u500b service")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"nest generate service clock\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"clock\n\u2514\u2500clock.service.interface.ts\n|\n\u2514\u2500clock.service.ts\n|\n\u2514\u2500clock.service.spec.ts\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"clock.service.spec.ts \u662f\u5728\u9032\u884c\u6e2c\u8a66\u4f7f\u7528\u7684")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { Injectable } from '@nestjs/common';\nimport { ClockServiceInterface } from './clock.service.interface';\n\n@Injectable()\nexport class ClockService implements ClockServiceInterface {\n  /**\n   * \u53d6\u5f97\u6a19\u6e96\u6642\u9593\n   * @returns\n   */\n  private getTimeZone(): Date {\n    const utcTime =\n      new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000;\n    return new Date(utcTime);\n  }\n\n  /**\n   * \u53d6\u5f97 +8 \u6642\u9593\n   */\n  getTime(): Date {\n    const offset = 8 * 60; // 8\u5c0f\u6642\u7684\u5206\u9418\u6578\n    const utcTime = this.getTimeZone().getTime(); // \u4f7f\u7528 getTimeZone() \u53d6\u5f97\u6a19\u6e96\u6642\u9593\n    const localTime = new Date(utcTime + offset * 60 * 1000);\n    return localTime;\n  }\n}\n")),(0,l.kt)("h3",{id:"\u8a3b\u518a\u6a21\u7d44"},"\u8a3b\u518a\u6a21\u7d44"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5148\u4f7f\u7528 nest cli \u5efa\u7acb\u4e00\u500b clock.module.ts")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"nest generate module clock\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"clock\n\u2514\u2500clock.service.interface.ts\n|\n\u2514\u2500clock.service.ts\n|\n\u2514\u2500clock.module.ts\n|\n\u2514\u2500clock.service.spec.ts\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8a3b\u518a clock \u670d\u52d9"),(0,l.kt)("li",{parentName:"ul"},"\u4e26\u4e14\u9700\u8981\u505a exports \u4f86\u4e0a\u532f\u51fa\u6a21\u7d44"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"@Global()")," \u4f86\u8868\u793a\u4ed6\u662f\u5168\u57df\u7684\u6a21\u7d44")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"{4}","{4}":!0},"import { Global, Module } from '@nestjs/common';\nimport { ClockService } from './clock.service';\n\n@Global()\n@Module({\n  providers: [\n    {\n      provide: 'ClockServiceInterface',\n      useClass: ClockService,\n    },\n  ],\n  exports: [\n    {\n      provide: 'ClockServiceInterface',\n      useClass: ClockService,\n    },\n  ],\n})\nexport class ClockModule {}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5230 app.module.ts \u5e95\u4e0b\u8a3b\u518a UuidModule")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"{9}","{9}":!0},"import { Module } from '@nestjs/common';\nimport { AppController } from './app.controller';\nimport { AppService } from './app.service';\nimport { UserModule } from './user/user.module';\nimport { UuidModule } from './uuid/uuid.module';\nimport { ClockModule } from './clock/clock.module';\n\n@Module({\n  imports: [UserModule, UuidModule, ClockModule],\n  controllers: [AppController],\n  providers: [AppService],\n})\nexport class AppModule {}\n")))}m.isMDXComponent=!0}}]);