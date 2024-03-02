"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[7921],{49613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(r),g=n,m=s["".concat(l,".").concat(g)]||s[g]||d[g]||a;return r?o.createElement(m,i(i({ref:t},u),{},{components:r})):o.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:n,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6652:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var o=r(88028),n=(r(59496),r(49613));const a={sidebar_position:30,description:"\u76e3\u63a7\u8207\u7ba1\u7406",key:["java","Spring Cloud","Microservices","\u5fae\u670d\u52d9","Spring Boot"],tags:["java","Spring Cloud","Microservices","Spring Boot"]},i="\ud83c\udf24\ufe0f \u76e3\u63a7\u8207\u7ba1\u7406",p={unversionedId:"javaSpringCloud/Chapter2/2_6monitoring",id:"javaSpringCloud/Chapter2/2_6monitoring",title:"\ud83c\udf24\ufe0f \u76e3\u63a7\u8207\u7ba1\u7406",description:"\u76e3\u63a7\u8207\u7ba1\u7406",source:"@site/docs/javaSpringCloud/Chapter2/2_6monitoring.md",sourceDirName:"javaSpringCloud/Chapter2",slug:"/javaSpringCloud/Chapter2/2_6monitoring",permalink:"/docs/javaSpringCloud/Chapter2/2_6monitoring",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/javaSpringCloud/Chapter2/2_6monitoring.md",tags:[{label:"java",permalink:"/docs/tags/java"},{label:"Spring Cloud",permalink:"/docs/tags/spring-cloud"},{label:"Microservices",permalink:"/docs/tags/microservices"},{label:"Spring Boot",permalink:"/docs/tags/spring-boot"}],version:"current",lastUpdatedAt:1709356183,formattedLastUpdatedAt:"2024\u5e743\u67082\u65e5",sidebarPosition:30,frontMatter:{sidebar_position:30,description:"\u76e3\u63a7\u8207\u7ba1\u7406",key:["java","Spring Cloud","Microservices","\u5fae\u670d\u52d9","Spring Boot"],tags:["java","Spring Cloud","Microservices","Spring Boot"]},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udf24\ufe0f Config \u8a2d\u5b9a",permalink:"/docs/javaSpringCloud/Chapter2/2_5config"},next:{title:"\ud83c\udf24\ufe0f Spring boot actuator",permalink:"/docs/javaSpringCloud/Chapter2/2_7actuator"}},l={},c=[{value:"\u74f6\u9838",id:"\u74f6\u9838",level:2},{value:"\u89e3\u6c7a\u65b9\u6848",id:"\u89e3\u6c7a\u65b9\u6848",level:2},{value:"\u9078\u7528 Spring Boot \u8207 Spring Cloud \u63d0\u4f9b\u7684\u529f\u80fd",id:"\u9078\u7528-spring-boot-\u8207-spring-cloud-\u63d0\u4f9b\u7684\u529f\u80fd",level:3},{value:"spring-boot-starter-actuator \u7684\u512a\u52e2",id:"spring-boot-starter-actuator-\u7684\u512a\u52e2",level:3}],u={toc:c},s="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\ufe0f-\u76e3\u63a7\u8207\u7ba1\u7406"},"\ud83c\udf24\ufe0f \u76e3\u63a7\u8207\u7ba1\u7406"),(0,n.kt)("h2",{id:"\u74f6\u9838"},"\u74f6\u9838"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u5728\u5fae\u670d\u52d9\u67b6\u69cb\u4e2d\uff0c\u6211\u5011\u5c07\u539f\u672c\u9f90\u5927\u7684\u55ae\u9ad4\u7cfb\u7d71\u62c6\u5206\u6210\u591a\u500b\u63d0\u4f9b\u4e0d\u540c\u670d\u52d9\u7684\u61c9\u7528\uff0c\u96d6\u7136\u5404\u500b\u61c9\u7528\u7684\u5167\u90e8\u908f\u8f2f\u56e0\u5206\u89e3\u800c\u5f97\u4ee5\u7c21\u5316\uff0c\u4f46\u7531\u65bc\u90e8\u7f72\u61c9\u7528\u7684\u6578\u91cf\u6210\u500d\u589e\u9577\uff0c\u7cfb\u7d71\u7684\u7dad\u8b77\u8907\u96dc\u5ea6\u5927\u5927\u63d0\u5347"),(0,n.kt)("p",{parentName:"blockquote"},"\u904b\u7dad\u4eba\u54e1\u9762\u81e8\u8457\u61c9\u7528\u6578\u91cf\u7684\u4e0d\u65b7\u589e\u591a\uff0c\u7cfb\u7d71\u96c6\u7fa4\u4e2d\u51fa\u73fe\u6545\u969c\u7684\u983b\u7387\u4e5f\u8b8a\u5f97\u8d8a\u4f86\u8d8a\u9ad8\uff0c\u96d6\u7136\u9ad8\u53ef\u7528\u6a5f\u5236\u7684\u4fdd\u8b77\u4e0b\uff0c\u500b\u5225\u6545\u969c\u4e0d\u6703\u5f71\u97ff\u7cfb\u7d71\u5c0d\u5916\u670d\u52d9\uff0c\u4f46\u9019\u4e9b\u983b\u7e41\u51fa\u73fe\u7684\u6545\u969c\u9700\u8981\u88ab\u53ca\u6642\u767c\u73fe\u548c\u8655\u7406\u624d\u80fd\u9577\u671f\u4fdd\u8b49\u7cfb\u7d71\u8655\u65bc\u5065\u5eb7\u53ef\u7528\u72c0\u614b"),(0,n.kt)("p",{parentName:"blockquote"},"\u70ba\u4e86\u80fd\u9ad8\u6548\u904b\u7dad\u6210\u500d\u589e\u9577\u7684\u61c9\u7528\uff0c\u50b3\u7d71\u7684\u904b\u7dad\u65b9\u5f0f\u660e\u986f\u4e0d\u5408\u9069\uff0c\u6211\u5011\u9700\u8981\u5efa\u7acb\u4e00\u5957\u81ea\u52d5\u5316\u7684\u76e3\u63a7\u904b\u7dad\u6a5f\u5236\uff0c\u5176\u904b\u884c\u57fa\u790e\u662f\u6301\u7e8c\u6536\u96c6\u5404\u500b\u5fae\u670d\u52d9\u61c9\u7528\u7684\u5404\u9805\u6307\u6a19\uff0c\u7136\u5f8c\u6839\u64da\u9019\u4e9b\u57fa\u790e\u6307\u6a19\u5236\u5b9a\u76e3\u63a7\u548c\u9810\u8b66\u898f\u5247\uff0c\u751a\u81f3\u5be6\u73fe\u4e00\u4e9b\u81ea\u52d5\u5316\u7684\u904b\u7dad\u64cd\u4f5c")),(0,n.kt)("h2",{id:"\u89e3\u6c7a\u65b9\u6848"},"\u89e3\u6c7a\u65b9\u6848"),(0,n.kt)("h3",{id:"\u9078\u7528-spring-boot-\u8207-spring-cloud-\u63d0\u4f9b\u7684\u529f\u80fd"},"\u9078\u7528 Spring Boot \u8207 Spring Cloud \u63d0\u4f9b\u7684\u529f\u80fd"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u6211\u5011\u5728\u69cb\u5efa\u5fae\u670d\u52d9\u6642\uff0c\u9078\u64c7\u4f7f\u7528 Spring Boot \u4f5c\u70ba\u5fae\u670d\u52d9\u6846\u67b6"),(0,n.kt)("p",{parentName:"blockquote"},"\u9664\u4e86\u5b83\u5f37\u5927\u7684\u5feb\u901f\u958b\u767c\u529f\u80fd\u4e4b\u5916\uff0c\u9084\u6709\u4e00\u500b\u7279\u5225\u7684\u4f9d\u8cf4\u6a21\u7d44 \u2014 spring-boot-starter-actuator\uff0c\u8a72\u6a21\u7d44\u80fd\u5920\u81ea\u52d5\u70ba Spring Boot \u61c9\u7528\u63d0\u4f9b\u4e00\u7cfb\u5217\u7528\u65bc\u76e3\u63a7\u7684\u7aef\u9ede\uff0c"),(0,n.kt)("p",{parentName:"blockquote"},"\u540c\u6642\u5728\u5be6\u73fe\u5404\u500b\u5fae\u670d\u52d9\u7d44\u4ef6\u6642\uff0cSpring Cloud \u5c0d\u8a72\u6a21\u7d44\u9032\u884c\u4e86\u64f4\u5c55\uff0c\u70ba\u539f\u751f\u7aef\u9ede\u589e\u52a0\u4e86\u66f4\u591a\u7684\u6307\u6a19\u548c\u5ea6\u91cf\u4fe1\u606f\uff0c\u4f8b\u5982: \u5728\u6574\u5408 Eureka \u6642\uff0c\u6703\u70ba ",(0,n.kt)("inlineCode",{parentName:"p"},"/health")," \u7aef\u9ede\u589e\u52a0\u76f8\u95dc\u4fe1\u606f\u3002\u5c0d\u65bc\u4e0d\u540c\u7684\u7d44\u4ef6\uff0c\u9084\u63d0\u4f9b\u4e86\u66f4\u591a\u6709\u7528\u7684\u7aef\u9ede\uff0c\u6bd4\u5982 API \u7db2\u95dc\u7d44\u4ef6 Zuul \u63d0\u4f9b\u4e86 ",(0,n.kt)("inlineCode",{parentName:"p"},"/routes")," \u7aef\u9ede\u4f86\u8fd4\u56de\u8def\u7531\u4fe1\u606f")),(0,n.kt)("h3",{id:"spring-boot-starter-actuator-\u7684\u512a\u52e2"},"spring-boot-starter-actuator \u7684\u512a\u52e2"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u5c0d\u65bc\u4e2d\u5c0f\u5718\u968a\u4f86\u8aaa\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"spring-boot-starter-actuator")," \u6a21\u7d44\u7684\u5be6\u73fe\u80fd\u5920\u986f\u8457\u6e1b\u5c11\u76e3\u63a7\u7cfb\u7d71\u5728\u91c7\u96c6\u61c9\u7528\u6307\u6a19\u6642\u7684\u958b\u767c\u5de5\u4f5c\u91cf\uff0c"),(0,n.kt)("p",{parentName:"blockquote"},"\u5118\u7ba1\u5b83\u529f\u80fd\u5f37\u5927\uff0c\u4e26\u975e\u842c\u80fd\u7684\uff0c\u6709\u6642\u5019\u6211\u5011\u53ef\u80fd\u9700\u8981\u5c0d\u5176\u9032\u884c\u4e00\u4e9b\u7c21\u55ae\u7684\u64f4\u5c55\uff0c\u4ee5\u6eff\u8db3\u7cfb\u7d71\u500b\u6027\u5316\u7684\u76e3\u63a7\u9700\u6c42")))}d.isMDXComponent=!0}}]);