"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[1254],{49613:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(59496);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),u=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},k=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(t),k=a,m=s["".concat(p,".").concat(k)]||s[k]||d[k]||o;return t?n.createElement(m,i(i({ref:r},c),{},{components:t})):n.createElement(m,i({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=k;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},86456:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=t(88028),a=(t(59496),t(49613));const o={sidebar_position:5,description:"Spring Cloud Eureka",key:["java","Spring Cloud","Microservices","\u5fae\u670d\u52d9"],tags:["java","Spring Cloud","Microservices"]},i="\ud83c\udf27\ufe0f Spring Cloud Eureka",l={unversionedId:"javaSpringCloud/Chapter3/3_1eureka",id:"javaSpringCloud/Chapter3/3_1eureka",title:"\ud83c\udf27\ufe0f Spring Cloud Eureka",description:"Spring Cloud Eureka",source:"@site/docs/javaSpringCloud/Chapter3/3_1eureka.md",sourceDirName:"javaSpringCloud/Chapter3",slug:"/javaSpringCloud/Chapter3/3_1eureka",permalink:"/docs/javaSpringCloud/Chapter3/3_1eureka",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/javaSpringCloud/Chapter3/3_1eureka.md",tags:[{label:"java",permalink:"/docs/tags/java"},{label:"Spring Cloud",permalink:"/docs/tags/spring-cloud"},{label:"Microservices",permalink:"/docs/tags/microservices"}],version:"current",lastUpdatedAt:1702200765,formattedLastUpdatedAt:"2023\u5e7412\u670810\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Spring Cloud Eureka",key:["java","Spring Cloud","Microservices","\u5fae\u670d\u52d9"],tags:["java","Spring Cloud","Microservices"]},sidebar:"tutorialSidebar",previous:{title:"\u2601\ufe0f \u7b2c\u4e09\u7ae0 \u670d\u52d9\u7ba1\u7406",permalink:"/docs/category/\ufe0f-\u7b2c\u4e09\u7ae0-\u670d\u52d9\u7ba1\u7406"},next:{title:"\ud83c\udf27\ufe0f Netflix Eureka",permalink:"/docs/javaSpringCloud/Chapter3/3_2netflixEureka"}},p={},u=[{value:"\u95dc\u65bc Eureka",id:"\u95dc\u65bc-eureka",level:2},{value:"\u670d\u52d9\u7ba1\u7406",id:"\u670d\u52d9\u7ba1\u7406",level:2},{value:"\u670d\u52d9\u8a3b\u518a",id:"\u670d\u52d9\u8a3b\u518a",level:3},{value:"\u670d\u52d9\u767c\u73fe",id:"\u670d\u52d9\u767c\u73fe",level:3}],c={toc:u},s="wrapper";function d(e){let{components:r,...t}=e;return(0,a.kt)(s,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\ufe0f-spring-cloud-eureka"},"\ud83c\udf27\ufe0f Spring Cloud Eureka"),(0,a.kt)("h2",{id:"\u95dc\u65bc-eureka"},"\u95dc\u65bc Eureka"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Spring Cloud Eureka \u662f  Spring Cloud Netflix \u7684\u5176\u4e2d\u4e00\u500b\u5957\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u4ed6\u662f based on ",(0,a.kt)("inlineCode",{parentName:"li"},"Netflix Eureka")," \u9032\u884c\u7b2c\u4e8c\u6b21\u5c01\u88dd"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u900f\u904e\u4ed6\uff0c\u4f86\u5c0d spring boot \u9032\u884c\u81ea\u52d5\u5316\u7684\u8a2d\u5b9a")),(0,a.kt)("h2",{id:"\u670d\u52d9\u7ba1\u7406"},"\u670d\u52d9\u7ba1\u7406"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u670d\u52d9\u7ba1\u7406\u662f\u5fae\u670d\u52d9\u4e2d\uff0c\u6700\u6838\u5fc3\u7684\u4e00\u584a")),(0,a.kt)("p",null,"\u6700\u521d\u53ef\u80fd\u670d\u52d9\u4e0d\u591a\uff0c\u9084\u53ef\u4ee5\u624b\u52d5\u53bb\u8a2d\u5b9a\uff0c\u96a8\u8457\u7cfb\u7d71\u8d8a\u4f86\u8d8a\u9f90\u5927\uff0c\n\u670d\u52d9\u4e0d\u65b7\u589e\u52a0\u624b\u52d5\u8a2d\u5b9a\u975c\u614b\u8cc7\u6e90\u6703\u8b8a\u5f97\u96e3\u4ee5\u7dad\u8b77\uff0c\u9020\u6210\u5927\u91cf\u7684\u4eba\u529b\u6d88\u8017"),(0,a.kt)("h3",{id:"\u670d\u52d9\u8a3b\u518a"},"\u670d\u52d9\u8a3b\u518a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728\u5fae\u670d\u52d9\u7684\u67b6\u69cb\u4e2d\uff0c\u901a\u5e38\u6703\u6709\u4e00\u500b\u8a3b\u518a\u4e2d\u5fc3\uff0c"),(0,a.kt)("p",{parentName:"blockquote"},"\u8b93\u6bcf\u500b\u670d\u52d9\u53bb\u8a3b\u518a\u4ed6\u63d0\u4f9b\u7684\u670d\u52d9\uff0c\u4e26\u4e14\u8a3b\u518a\u4e00\u4e9b\u76f8\u95dc\u8a0a\u606f\uff0c"),(0,a.kt)("p",{parentName:"blockquote"},"\u4f8b\u5982: \u7248\u672c\u865f\u3001\u4e3b\u6a5f\u8207 port \u3001\u901a\u8a0a\u5354\u8b70\u7b49")),(0,a.kt)("h3",{id:"\u670d\u52d9\u767c\u73fe"},"\u670d\u52d9\u767c\u73fe"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728\u6574\u500b\u5fae\u670d\u52d9\u7684\u6846\u67b6\u4e4b\u4e0b\uff0c\u670d\u52d9\u4e4b\u9593\u5c31\u4e0d\u9700\u8981\u77e5\u9053\u5c0d\u65b9\u7684\u5177\u9ad4\u4f4d\u7f6e\uff0c"),(0,a.kt)("p",{parentName:"blockquote"},"\u7576\u4ed6\u9700\u8981\u4f7f\u7528\u670d\u52d9\u6642\uff0c\u6703\u900f\u904e\u670d\u52d9\u4e2d\u5fc3\u4f86\u8a62\u554f\uff0c\u5176\u4ed6\u670d\u52d9\u7684\u76f8\u95dc\u8cc7\u8a0a")))}d.isMDXComponent=!0}}]);