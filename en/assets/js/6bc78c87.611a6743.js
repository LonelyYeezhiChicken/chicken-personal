"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[6114],{49613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),y=o,m=u["".concat(a,".").concat(y)]||u[y]||d[y]||l;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=y;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},47643:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(88028),o=(n(59496),n(49613));const l={sidebar_position:70,description:"Exception filter",key:["NestJS","Node","TypeScript"],tags:["NestJS","Node","TypeScript"]},i="\ud83d\udc69\u200d\ud83d\udcbb  Exception filter",p={unversionedId:"daylily/nestDaylily/exceptionFilter",id:"daylily/nestDaylily/exceptionFilter",title:"\ud83d\udc69\u200d\ud83d\udcbb  Exception filter",description:"Exception filter",source:"@site/docs/daylily/nestDaylily/exceptionFilter.md",sourceDirName:"daylily/nestDaylily",slug:"/daylily/nestDaylily/exceptionFilter",permalink:"/en/docs/daylily/nestDaylily/exceptionFilter",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/daylily/nestDaylily/exceptionFilter.md",tags:[{label:"NestJS",permalink:"/en/docs/tags/nest-js"},{label:"Node",permalink:"/en/docs/tags/node"},{label:"TypeScript",permalink:"/en/docs/tags/type-script"}],version:"current",lastUpdatedAt:1702200765,formattedLastUpdatedAt:"Dec 10, 2023",sidebarPosition:70,frontMatter:{sidebar_position:70,description:"Exception filter",key:["NestJS","Node","TypeScript"],tags:["NestJS","Node","TypeScript"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc69\u200d\ud83d\udcbb \u4f7f\u7528 TypeORM",permalink:"/en/docs/daylily/nestDaylily/useTypeorm"},next:{title:"\ud83e\udde9 Vue \u958b\u767c\u96dc\u8a18",permalink:"/en/docs/category/-vue-\u958b\u767c\u96dc\u8a18"}},a={},c=[{value:"\u5b9a\u7fa9",id:"\u5b9a\u7fa9",level:2},{value:"\u95dc\u65bc Exception",id:"\u95dc\u65bc-exception",level:3},{value:"\u95dc\u65bc filter",id:"\u95dc\u65bc-filter",level:3},{value:"\u95dc\u65bc Exception filter",id:"\u95dc\u65bc-exception-filter",level:3},{value:"\u5be6\u4f5c Exception filter",id:"\u5be6\u4f5c-exception-filter",level:2},{value:"\u5efa\u7acb\u76ee\u6a94\u6848",id:"\u5efa\u7acb\u76ee\u6a94\u6848",level:3},{value:"\u5efa\u7acb\u5168\u57df\u904e\u6ffe\u5668",id:"\u5efa\u7acb\u5168\u57df\u904e\u6ffe\u5668",level:3},{value:"\u8a3b\u518a\u5168\u57df\u7684\u904e\u6ffe\u5668",id:"\u8a3b\u518a\u5168\u57df\u7684\u904e\u6ffe\u5668",level:3}],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"--exception-filter"},"\ud83d\udc69\u200d\ud83d\udcbb  Exception filter"),(0,o.kt)("h2",{id:"\u5b9a\u7fa9"},"\u5b9a\u7fa9"),(0,o.kt)("h3",{id:"\u95dc\u65bc-exception"},"\u95dc\u65bc Exception"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"exception \u6307\u7684\u662f\u7a0b\u5f0f\u57f7\u884c\u904e\u7a0b\u4e2d\uff0c\u767c\u751f\u7684\u4f8b\u5916\u72c0\u6cc1"),(0,o.kt)("p",{parentName:"blockquote"},"\u5c0e\u81f4\u7a0b\u5f0f\u6c92\u8fa6\u6cd5\u6b63\u78ba\u7684\u57f7\u884c")),(0,o.kt)("h3",{id:"\u95dc\u65bc-filter"},"\u95dc\u65bc filter"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"filter \u7684\u751f\u547d\u9031\u671f\u6703\u662f\uff0c\u5728\u5ba2\u6236\u7aef API \u767c\u9001\u5f8c\uff0c\u5148\u62b5\u9054 controller\uff0c\u63a5\u4e0b\u4f86\u624d\u6703\u56de\u5230 filter")),(0,o.kt)("h3",{id:"\u95dc\u65bc-exception-filter"},"\u95dc\u65bc Exception filter"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5c07\u524d\u9762\u7684\u540d\u8a5e\u5408\u4f75 Exception + filter"),(0,o.kt)("p",{parentName:"blockquote"},"\u9019\u908a\u7684\u7528\u9014\u662f\u5168\u57df\u4f8b\u5916\u6514\u622a\u5668\uff0c\u6574\u500b\u7cfb\u7d71\u7684\u4f8b\u5916\u90fd\u6703\u88ab\u9019\u908a\u6514\u622a\uff0c\u4e26\u4e14\u9032\u884c\u8655\u7406")),(0,o.kt)("h2",{id:"\u5be6\u4f5c-exception-filter"},"\u5be6\u4f5c Exception filter"),(0,o.kt)("h3",{id:"\u5efa\u7acb\u76ee\u6a94\u6848"},"\u5efa\u7acb\u76ee\u6a94\u6848"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5efa\u7acb all-exceptions.filter.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"src\n\u2514\u2500user\n\u2502\n\u2514\u2500app.controller.spec.ts\n\u2502\n\u2514\u2500app.controller.ts\n\u2502\n\u2514\u2500app.module.ts\n\u2502\n\u2514\u2500all-exceptions.filter.ts\n\u2502\n\u2514\u2500app.service.ts\n\u2502\n\u2514\u2500main.ts\n")),(0,o.kt)("h3",{id:"\u5efa\u7acb\u5168\u57df\u904e\u6ffe\u5668"},"\u5efa\u7acb\u5168\u57df\u904e\u6ffe\u5668"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5728\u5168\u57df\u904e\u6ffe\u5668\u4e2d\uff0c\u4e5f\u81ea\u5b9a\u7fa9\u4e86\u4f8b\u5916\u62fe\u56de\u50b3\u7684\u683c\u5f0f")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n    ExceptionFilter,\n    Catch,\n    ArgumentsHost,\n    HttpException,\n    HttpStatus,\n} from '@nestjs/common';\nimport { HttpAdapterHost } from '@nestjs/core';\n\n@Catch()\nexport class AllExceptionsFilter implements ExceptionFilter {\n    constructor(private readonly httpAdapterHost: HttpAdapterHost) { }\n\n    catch(exception: unknown, host: ArgumentsHost): void {\n        // In certain situations `httpAdapter` might not be available in the\n        // constructor method, thus we should resolve it here.\n        const { httpAdapter } = this.httpAdapterHost;\n\n\n        const ctx = host.switchToHttp();\n\n        const msg = exception instanceof Error\n            ? exception.message\n            : 'unknown message';\n\n        const httpStatus =\n            exception instanceof HttpException\n                ? exception.getStatus()\n                : HttpStatus.INTERNAL_SERVER_ERROR;\n\n        const responseBody = {\n            statusCode: httpStatus,\n            msg: msg,\n            timestamp: new Date().toISOString(),\n            path: httpAdapter.getRequestUrl(ctx.getRequest()),\n        };\n\n        httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);\n    }\n}\n")),(0,o.kt)("h3",{id:"\u8a3b\u518a\u5168\u57df\u7684\u904e\u6ffe\u5668"},"\u8a3b\u518a\u5168\u57df\u7684\u904e\u6ffe\u5668"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u65bc app.module.ts \u8a3b\u518a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{7-10}","{7-10}":!0},"@Module({\n  imports: [\n    InhabitantModule,\n  ],\n  controllers: [AppController],\n  providers: [AppService,\n    {\n      provide: APP_FILTER,\n      useClass: AllExceptionsFilter,\n    }\n  ],\n})\nexport class AppModule { }\n")))}d.isMDXComponent=!0}}]);