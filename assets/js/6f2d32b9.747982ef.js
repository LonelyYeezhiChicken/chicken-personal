"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[8366],{49613:(e,r,t)=>{t.d(r,{Zo:()=>k,kt:()=>m});var a=t(59496);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=a.createContext({}),p=function(e){var r=a.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},k=function(e){var r=p(e.components);return a.createElement(o.Provider,{value:r},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,k=u(e,["components","mdxType","originalType","parentName"]),c=p(t),d=n,m=c["".concat(o,".").concat(d)]||c[d]||s[d]||l;return t?a.createElement(m,i(i({ref:r},k),{},{components:t})):a.createElement(m,i({ref:r},k))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=d;var u={};for(var o in r)hasOwnProperty.call(r,o)&&(u[o]=r[o]);u.originalType=e,u[c]="string"==typeof e?e:n,i[1]=u;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},91860:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=t(88028),n=(t(59496),t(49613));const l={sidebar_position:10,description:"Netflix Eureka",key:["java","Spring Cloud","Microservices","\u5fae\u670d\u52d9"],tags:["java","Spring Cloud","Microservices"]},i="\ud83c\udf27\ufe0f Netflix Eureka",u={unversionedId:"javaSpringCloud/Chapter3/3_2netflixEureka",id:"javaSpringCloud/Chapter3/3_2netflixEureka",title:"\ud83c\udf27\ufe0f Netflix Eureka",description:"Netflix Eureka",source:"@site/docs/javaSpringCloud/Chapter3/3_2netflixEureka.md",sourceDirName:"javaSpringCloud/Chapter3",slug:"/javaSpringCloud/Chapter3/3_2netflixEureka",permalink:"/docs/javaSpringCloud/Chapter3/3_2netflixEureka",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/javaSpringCloud/Chapter3/3_2netflixEureka.md",tags:[{label:"java",permalink:"/docs/tags/java"},{label:"Spring Cloud",permalink:"/docs/tags/spring-cloud"},{label:"Microservices",permalink:"/docs/tags/microservices"}],version:"current",lastUpdatedAt:1705414237,formattedLastUpdatedAt:"2024\u5e741\u670816\u65e5",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"Netflix Eureka",key:["java","Spring Cloud","Microservices","\u5fae\u670d\u52d9"],tags:["java","Spring Cloud","Microservices"]},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udf27\ufe0f Spring Cloud Eureka",permalink:"/docs/javaSpringCloud/Chapter3/3_1eureka"},next:{title:"Single Sign-On",permalink:"/docs/category/single-sign-on"}},o={},p=[{value:"Spring Cloud Eureka",id:"spring-cloud-eureka",level:2},{value:"\u4f7f\u7528 Eureka \u7ba1\u7406",id:"\u4f7f\u7528-eureka-\u7ba1\u7406",level:2},{value:"Eureka \u4f3a\u670d\u7aef\uff08\u670d\u52d9\u8a3b\u518a\u4e2d\u5fc3\uff09",id:"eureka-\u4f3a\u670d\u7aef\u670d\u52d9\u8a3b\u518a\u4e2d\u5fc3",level:2},{value:"Eureka \u5ba2\u6236\u7aef",id:"eureka-\u5ba2\u6236\u7aef",level:2},{value:"\u8a3b\u518a\u8207\u901a\u8a0a",id:"\u8a3b\u518a\u8207\u901a\u8a0a",level:2}],k={toc:p},c="wrapper";function s(e){let{components:r,...t}=e;return(0,n.kt)(c,(0,a.Z)({},k,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\ufe0f-netflix-eureka"},"\ud83c\udf27\ufe0f Netflix Eureka"),(0,n.kt)("h2",{id:"spring-cloud-eureka"},"Spring Cloud Eureka"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u4f7f\u7528 Netflix Eureka \uff0c\u5b83\u5305\u542b\u4e86\u4f3a\u670d\u7aef\u8207\u5ba2\u6236\u7aef\u7684\u6a21\u7d44\uff0c"),(0,n.kt)("p",{parentName:"blockquote"},"\u4e26\u4e14\u5ba2\u6236\u7aef\u8207\u4f3a\u670d\u7aef\u90fd\u662f\u4ee5 java \u64b0\u5beb\u7684\uff0c"),(0,n.kt)("p",{parentName:"blockquote"},"\u56e0\u6b64 Eureka \u9069\u7528\u65bc java \u7684\u5206\u6563\u5f0f\u7cfb\u7d71\u6216\u662f\u76f8\u5bb9 JVM \u8a9e\u8a00\u7684\u7cfb\u7d71")),(0,n.kt)("h2",{id:"\u4f7f\u7528-eureka-\u7ba1\u7406"},"\u4f7f\u7528 Eureka \u7ba1\u7406"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Eureka \u63d0\u4f9b\u5b8c\u6574\u7684 RESTful API\uff0c\u9019\u610f\u5473\u8457\u5373\u4f7f\u662f\u7528\u5176\u4ed6\u8a9e\u8a00\u7de8\u5beb\u7684\u670d\u52d9\u4e5f\u53ef\u4ee5\u8207 Eureka \u9032\u884c\u4ea4\u4e92"),(0,n.kt)("p",{parentName:"blockquote"},"\u9019\u7a2e\u8a9e\u8a00\u7121\u95dc\u6027\u4f7f\u5f97 Eureka \u66f4\u52a0\u9748\u6d3b\u548c\u5ee3\u6cdb\u9069\u7528\uff0c"),(0,n.kt)("p",{parentName:"blockquote"},"\u5c0d\u65bc\u975e Java \u5e73\u53f0\uff0c\u9700\u8981\u958b\u767c\u6216\u4f7f\u7528\u7279\u5b9a\u8a9e\u8a00\u7684 Eureka \u5ba2\u6236\u7aef\uff0c\u5c0d\u65bc\u4e00\u4e9b\u6d41\u884c\u7684\u8a9e\u8a00\uff0c"),(0,n.kt)("p",{parentName:"blockquote"},"\u5982 .NET \u548c Node.js\uff0c\u5df2\u7d93\u6709\u73fe\u6210\u7684\u5ba2\u6236\u7aef\u6846\u67b6\uff0c\u4f8b\u5982: Dotnet \u7684 Steeltoe \u548c Node.js \u7684 eureka-js-client \u5c31\u662f\u9019\u6a23\u7684\u89e3\u6c7a\u65b9\u6848")),(0,n.kt)("h2",{id:"eureka-\u4f3a\u670d\u7aef\u670d\u52d9\u8a3b\u518a\u4e2d\u5fc3"},"Eureka \u4f3a\u670d\u7aef\uff08\u670d\u52d9\u8a3b\u518a\u4e2d\u5fc3\uff09"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u53ef\u7a31\u4e4b\u70ba ",(0,n.kt)("inlineCode",{parentName:"p"},"\u670d\u52d9\u8a3b\u518a\u4e2d\u5fc3"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6240\u6709\u5fae\u670d\u52d9\u90fd\u5728\u6b64\u8a3b\u518a\u81ea\u5df1\uff0c\u4ee5\u4fbf\u65bc\u88ab\u767c\u73fe\u548c\u547c\u53eb")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u652f\u63f4\u9ad8\u5ea6\u53ef\u7528\u7684\u8a2d\u5b9a")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u53ef\u61c9\u5c0d\u4e0d\u540c\u7684\u6545\u969c (ex: \u7576\u6574\u500b\u670d\u52d9\u7fa4\u96c6\u6709\u67d0\u500b\u5206\u7247\u6545\u969c\u6642\uff0c\u6703\u81ea\u52d5\u8f49\u5165\u4fdd\u8b77\u6a21\u5f0f)"))),(0,n.kt)("h2",{id:"eureka-\u5ba2\u6236\u7aef"},"Eureka \u5ba2\u6236\u7aef"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4e3b\u8981\u8655\u7406\u8a3b\u518a\u8207\u767c\u73fe")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5b83\u5c07\u670d\u52d9\u8cc7\u8a0a\u8a3b\u518a\u5230 Eureka \u4f3a\u670d\u7aef\uff0c\u4e26\u5f9e\u4f3a\u670d\u7aef\u67e5\u8a62\u5176\u4ed6\u670d\u52d9\u7684\u8cc7\u8a0a")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u900f\u904e\u8a3b\u89e3\u6216\u662f\u53c3\u6578\u8a2d\u5b9a\u5d4c\u5165\u61c9\u7528\u7684\u7a0b\u5f0f\u78bc\u4e2d")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u7a0b\u5f0f\u904b\u4f5c\u6642\uff0cEureka \u5ba2\u6236\u7aef\u6703\u4e3b\u52d5\u767c\u9001\u751f\u5b58\u78ba\u8a8d\u7d66\u4f3a\u670d\u7aef"))),(0,n.kt)("h2",{id:"\u8a3b\u518a\u8207\u901a\u8a0a"},"\u8a3b\u518a\u8207\u901a\u8a0a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5fae\u670d\u52d9 A\u3001B\u3001C \u4ee3\u8868\u4f7f\u7528 Eureka \u5ba2\u6236\u7aef\u7684\u4e0d\u540c\u5fae\u670d\u52d9"),(0,n.kt)("li",{parentName:"ul"},"\u5b83\u5011\u5404\u81ea\u5411 Eureka \u4f3a\u670d\u7aef\uff08\u670d\u52d9\u8a3b\u518a\u4e2d\u5fc3\uff09\u8a3b\u518a\u81ea\u5df1"),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u65e6\u8a3b\u518a\uff0c\u9019\u4e9b\u5fae\u670d\u52d9\u53ef\u4ee5\u900f\u904e Eureka \u4f3a\u670d\u7aef\u9032\u884c\u670d\u52d9\u767c\u73fe\uff0c\u610f\u5473\u8457\u5b83\u5011\u53ef\u4ee5\u627e\u5230\u5f7c\u6b64\u4e26\u9032\u884c\u76f8\u4e92\u901a\u8a0a"),(0,n.kt)("li",{parentName:"ul"},"Eureka \u4f3a\u670d\u7aef\u7dad\u8b77\u8457\u6240\u6709\u8a3b\u518a\u670d\u52d9\u7684\u5217\u8868\uff0c\u4e26\u5728\u9700\u8981\u6642\u63d0\u4f9b\u9019\u4e9b\u8cc7\u8a0a\u7d66\u5ba2\u6236\u7aef"),(0,n.kt)("li",{parentName:"ul"},"\u5fae\u670d\u52d9\u4e4b\u9593\u7684\u901a\u8a0a\u662f\u76f4\u63a5\u7684\uff0c\u4f46\u662f\u5b83\u5011\u7684\u767c\u73fe\u548c\u8a3b\u518a\u662f\u900f\u904e Eureka \u4f3a\u670d\u7aef\u5b8c\u6210\u7684")),(0,n.kt)("mermaid",{value:"graph LR\n    A[\u5fae\u670d\u52d9 A - Eureka \u5ba2\u6236\u7aef] --\x3e|\u8a3b\u518a| B[Eureka \u4f3a\u670d\u7aef]\n    C[\u5fae\u670d\u52d9 B - Eureka \u5ba2\u6236\u7aef] --\x3e|\u8a3b\u518a| B\n    D[\u5fae\u670d\u52d9 C - Eureka \u5ba2\u6236\u7aef] --\x3e|\u8a3b\u518a| B\n\n    B --\x3e|\u670d\u52d9\u767c\u73fe| A\n    B --\x3e|\u670d\u52d9\u767c\u73fe| C\n    B --\x3e|\u670d\u52d9\u767c\u73fe| D\n\n    A --\x3e|\u76f8\u4e92\u901a\u8a0a| C\n    C --\x3e|\u76f8\u4e92\u901a\u8a0a| D"}))}s.isMDXComponent=!0}}]);