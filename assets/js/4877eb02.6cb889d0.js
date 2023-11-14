"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[1321],{49613:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>s});var n=a(59496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},k="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),k=d(a),m=r,s=k["".concat(p,".").concat(m)]||k[m]||c[m]||l;return a?n.createElement(s,i(i({ref:e},u),{},{components:a})):n.createElement(s,i({ref:e},u))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[k]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},13166:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(88028),r=(a(59496),a(49613));const l={sidebar_position:40,description:"\u539f\u751f\u7aef\u9ede",key:["java","Spring Cloud","Microservices","\u5fae\u670d\u52d9","Spring Boot","actuator"],tags:["java","Spring Cloud","Microservices","Spring Boot"]},i="\ud83c\udf24\ufe0f \u539f\u751f\u7aef\u9ede",o={unversionedId:"javaSpringCloud/Chapter2/2_8actuatorSetting",id:"javaSpringCloud/Chapter2/2_8actuatorSetting",title:"\ud83c\udf24\ufe0f \u539f\u751f\u7aef\u9ede",description:"\u539f\u751f\u7aef\u9ede",source:"@site/docs/javaSpringCloud/Chapter2/2_8actuatorSetting.md",sourceDirName:"javaSpringCloud/Chapter2",slug:"/javaSpringCloud/Chapter2/2_8actuatorSetting",permalink:"/docs/javaSpringCloud/Chapter2/2_8actuatorSetting",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/javaSpringCloud/Chapter2/2_8actuatorSetting.md",tags:[{label:"java",permalink:"/docs/tags/java"},{label:"Spring Cloud",permalink:"/docs/tags/spring-cloud"},{label:"Microservices",permalink:"/docs/tags/microservices"},{label:"Spring Boot",permalink:"/docs/tags/spring-boot"}],version:"current",lastUpdatedAt:1699970344,formattedLastUpdatedAt:"2023\u5e7411\u670814\u65e5",sidebarPosition:40,frontMatter:{sidebar_position:40,description:"\u539f\u751f\u7aef\u9ede",key:["java","Spring Cloud","Microservices","\u5fae\u670d\u52d9","Spring Boot","actuator"],tags:["java","Spring Cloud","Microservices","Spring Boot"]},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udf24\ufe0f Spring boot actuator",permalink:"/docs/javaSpringCloud/Chapter2/2_7actuator"},next:{title:"\u2601\ufe0f \u7b2c\u4e09\u7ae0 \u670d\u52d9\u7ba1\u7406",permalink:"/docs/category/\ufe0f-\u7b2c\u4e09\u7ae0-\u670d\u52d9\u7ba1\u7406"}},p={},d=[{value:"\u8aaa\u660e",id:"\u8aaa\u660e",level:2},{value:"\u61c9\u7528\u8a2d\u5b9a\u985e",id:"\u61c9\u7528\u8a2d\u5b9a\u985e",level:3},{value:"\u76e3\u63a7\u6307\u6a19\u985e",id:"\u76e3\u63a7\u6307\u6a19\u985e",level:3},{value:"\u64cd\u4f5c\u63a7\u5236\u985e",id:"\u64cd\u4f5c\u63a7\u5236\u985e",level:3},{value:"\u95dc\u65bc\u61c9\u7528\u8a2d\u5b9a\u985e",id:"\u95dc\u65bc\u61c9\u7528\u8a2d\u5b9a\u985e",level:2},{value:"\u61c9\u7528\u8a2d\u5b9a\u985e\u8aaa\u660e",id:"\u61c9\u7528\u8a2d\u5b9a\u985e\u8aaa\u660e",level:3},{value:"\u61c9\u7528\u8a2d\u5b9a\u76f8\u95dc\u7684\u7aef\u9ede\u8cc7\u8a0a",id:"\u61c9\u7528\u8a2d\u5b9a\u76f8\u95dc\u7684\u7aef\u9ede\u8cc7\u8a0a",level:3},{value:"\u95dc\u65bc\u76e3\u63a7\u6307\u6a19\u985e",id:"\u95dc\u65bc\u76e3\u63a7\u6307\u6a19\u985e",level:2},{value:"\u76e3\u63a7\u6307\u6a19\u985e\u8aaa\u660e",id:"\u76e3\u63a7\u6307\u6a19\u985e\u8aaa\u660e",level:3},{value:"\u76e3\u63a7\u6307\u6a19\u76f8\u95dc\u7684\u7aef\u9ede\u8cc7\u8a0a",id:"\u76e3\u63a7\u6307\u6a19\u76f8\u95dc\u7684\u7aef\u9ede\u8cc7\u8a0a",level:3},{value:"\u95dc\u65bc\u64cd\u4f5c\u63a7\u5236\u985e",id:"\u95dc\u65bc\u64cd\u4f5c\u63a7\u5236\u985e",level:2},{value:"\u64cd\u4f5c\u63a7\u5236\u985e\u8aaa\u660e",id:"\u64cd\u4f5c\u63a7\u5236\u985e\u8aaa\u660e",level:3},{value:"\u64cd\u4f5c\u63a7\u5236\u76f8\u95dc\u7684\u7aef\u9ede\u8cc7\u8a0a",id:"\u64cd\u4f5c\u63a7\u5236\u76f8\u95dc\u7684\u7aef\u9ede\u8cc7\u8a0a",level:3}],u={toc:d},k="wrapper";function c(t){let{components:e,...a}=t;return(0,r.kt)(k,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\ufe0f-\u539f\u751f\u7aef\u9ede"},"\ud83c\udf24\ufe0f \u539f\u751f\u7aef\u9ede"),(0,r.kt)("h2",{id:"\u8aaa\u660e"},"\u8aaa\u660e"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6839\u64da\u7aef\u9ede\u7684\u7528\u9014\uff0c\u6211\u5011\u5c07\u9019\u4e9b\u539f\u751f\u7aef\u9ede\u5206\u70ba\u4ee5\u4e0b\u4e09\u5927\u985e\uff1a")),(0,r.kt)("h3",{id:"\u61c9\u7528\u8a2d\u5b9a\u985e"},"\u61c9\u7528\u8a2d\u5b9a\u985e"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u53d6\u5f97\u61c9\u7528\u7a0b\u5f0f\u8f09\u5165\u7684\u8a2d\u5b9a\u3001\u74b0\u5883\u8b8a\u6578\u3001\u81ea\u52d5\u8a2d\u5b9a\u5831\u544a\u7b49\uff0c\u9019\u4e9b\u8207 Spring Boot \u61c9\u7528\u7a0b\u5f0f\u7dca\u5bc6\u76f8\u95dc\u7684\u8a2d\u5b9a\u8cc7\u8a0a")),(0,r.kt)("h3",{id:"\u76e3\u63a7\u6307\u6a19\u985e"},"\u76e3\u63a7\u6307\u6a19\u985e"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u53d6\u5f97\u61c9\u7528\u7a0b\u5f0f\u57f7\u884c\u904e\u7a0b\u4e2d\u7528\u65bc\u76e3\u63a7\u7684\u5ea6\u91cf\u6307\u6a19\uff0c\u4f8b\u5982: \u8a18\u61b6\u9ad4\u8cc7\u8a0a\u3001\u57f7\u884c\u7dd2\u6c60\u8cc7\u8a0a\u3001HTTP \u8acb\u6c42\u7d71\u8a08\u7b49")),(0,r.kt)("h3",{id:"\u64cd\u4f5c\u63a7\u5236\u985e"},"\u64cd\u4f5c\u63a7\u5236\u985e"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u63d0\u4f9b\u61c9\u7528\u7a0b\u5f0f\u7684\u95dc\u9589\u7b49\u64cd\u4f5c\u529f\u80fd")),(0,r.kt)("h2",{id:"\u95dc\u65bc\u61c9\u7528\u8a2d\u5b9a\u985e"},"\u95dc\u65bc\u61c9\u7528\u8a2d\u5b9a\u985e"),(0,r.kt)("h3",{id:"\u61c9\u7528\u8a2d\u5b9a\u985e\u8aaa\u660e"},"\u61c9\u7528\u8a2d\u5b9a\u985e\u8aaa\u660e"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u50b3\u7d71\u7684 Spring \u61c9\u7528\u8a2d\u5b9a\u6709\u6642\u5019\u76f8\u7576\u7e41\u7463\uff0c\u8981\u5beb\u5f88\u591a XML \u6a94\u6848"),(0,r.kt)("p",{parentName:"blockquote"},"Spring Boot \u70ba\u4e86\u7c21\u5316\u9019\u4e00\u6b65\u9a5f\uff0c\u5f15\u5165\u4e86\u81ea\u52d5\u6383\u63cf\u548c\u81ea\u52d5\u8a2d\u5b9a\u7684\u65b9\u5f0f\uff0c\u8b93\u6211\u5011\u4e0d\u7528\u5beb\u592a\u591a\u8a2d\u5b9a\u6a94\uff0c\u4ee3\u78bc\u770b\u8d77\u4f86\u6bd4\u8f03\u7c21\u6f54"),(0,r.kt)("p",{parentName:"blockquote"},"\u4f46\u662f\u9019\u7a2e\u505a\u6cd5\u53ef\u80fd\u6703\u5c0e\u81f4\u6211\u5011\u7684\u61c9\u7528\u5be6\u4f8b\u548c\u76f8\u4f9d\u6027\u88ab\u5206\u6563\u5230\u5404\u500b\u8a2d\u5b9a\u985e\u7684\u8a3b\u89e3\u4e0a\uff0c\u9019\u4f7f\u5f97\u5206\u6790\u6574\u500b\u61c9\u7528\u4e2d\u7684\u8cc7\u6e90\u548c\u5be6\u4f8b\u95dc\u4fc2\u8b8a\u5f97\u6709\u9ede\u56f0\u96e3"),(0,r.kt)("p",{parentName:"blockquote"},"\u4e0d\u904e\u6709\u4e9b\u7aef\u9ede\u53ef\u4ee5\u5e6b\u52a9\u6211\u5011\u8f15\u9b06\u7372\u53d6\u6709\u95dc Spring \u61c9\u7528\u8a2d\u5b9a\u7684\u8a73\u7d30\u5831\u544a\uff0c\u5305\u62ec\u81ea\u52d5\u8a2d\u5b9a\u7684\u5831\u544a\u3001Bean \u7684\u5efa\u7acb\u5831\u544a\u548c\u74b0\u5883\u5c6c\u6027\u5831\u544a\u7b49")),(0,r.kt)("h3",{id:"\u61c9\u7528\u8a2d\u5b9a\u76f8\u95dc\u7684\u7aef\u9ede\u8cc7\u8a0a"},"\u61c9\u7528\u8a2d\u5b9a\u76f8\u95dc\u7684\u7aef\u9ede\u8cc7\u8a0a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7aef\u9ede"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7528\u9014"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/configprops")),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b\u61c9\u7528\u7a0b\u5f0f\u7684\u914d\u7f6e\u5c6c\u6027\u53ca\u5176\u4f86\u6e90\u7684\u8a73\u7d30\u8cc7\u8a0a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/env")),(0,r.kt)("td",{parentName:"tr",align:null},"\u67e5\u770b\u61c9\u7528\u7a0b\u5f0f\u7684\u74b0\u5883\u5c6c\u6027\uff0c\u5305\u62ec\u7cfb\u7d71\u5c6c\u6027\u3001\u74b0\u5883\u8b8a\u6578\u548c\u914d\u7f6e\u5c6c\u6027")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/beans")),(0,r.kt)("td",{parentName:"tr",align:null},"\u986f\u793a\u61c9\u7528\u7a0b\u5f0f\u4e2d\u6240\u6709\u53ef\u7528\u7684 Spring Bean \u8cc7\u8a0a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/info")),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b\u6709\u95dc\u61c9\u7528\u7a0b\u5f0f\u7684\u81ea\u8a02\u8cc7\u8a0a\uff0c\u53ef\u4ee5\u6839\u64da\u9700\u8981\u9032\u884c\u914d\u7f6e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/mappings")),(0,r.kt)("td",{parentName:"tr",align:null},"\u986f\u793a\u61c9\u7528\u7a0b\u5f0f\u4e2d\u7684\u6240\u6709 URL \u5c0d\u61c9\uff0c\u5305\u62ec\u63a7\u5236\u5668\u5c0d\u61c9\u548c\u975c\u614b\u8cc7\u6e90\u5c0d\u61c9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/conditions")),(0,r.kt)("td",{parentName:"tr",align:null},"\u986f\u793a\u81ea\u52d5\u8a2d\u5b9a\u689d\u4ef6\u4ee5\u53ca\u5176\u662f\u5426\u7b26\u5408\u7684\u8a73\u7d30\u8cc7\u8a0a")))),(0,r.kt)("h2",{id:"\u95dc\u65bc\u76e3\u63a7\u6307\u6a19\u985e"},"\u95dc\u65bc\u76e3\u63a7\u6307\u6a19\u985e"),(0,r.kt)("h3",{id:"\u76e3\u63a7\u6307\u6a19\u985e\u8aaa\u660e"},"\u76e3\u63a7\u6307\u6a19\u985e\u8aaa\u660e"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u61c9\u7528\u8a2d\u5b9a\u985e\u7684\u7aef\u9ede\u7d66\u4e88\u56fa\u5b9a\u5831\u544a\uff0c\u4f46\u8a08\u91cf\u6307\u6a19\u985e\u7684\u7aef\u9ede\u5247\u662f\u7d66\u52d5\u614b\u8b8a\u52d5\u7684\u57f7\u884c\u6642\u8cc7\u8a0a\uff0c\u6709\u52a9\u65bc\u6253\u9020\u5fae\u670d\u52d9\u76e3\u63a7\u7cfb\u7d71")),(0,r.kt)("h3",{id:"\u76e3\u63a7\u6307\u6a19\u76f8\u95dc\u7684\u7aef\u9ede\u8cc7\u8a0a"},"\u76e3\u63a7\u6307\u6a19\u76f8\u95dc\u7684\u7aef\u9ede\u8cc7\u8a0a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7aef\u9ede"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7528\u9014"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/metrics")),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b\u6709\u95dc\u61c9\u7528\u7a0b\u5f0f\u57f7\u884c\u6642\u7684\u5404\u7a2e\u5ea6\u91cf\u6307\u6a19\u8cc7\u8a0a\uff0c\u4f8b\u5982\u8a18\u61b6\u9ad4\u4f7f\u7528\u3001HTTP \u8acb\u6c42\u7d71\u8a08\u7b49")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/health")),(0,r.kt)("td",{parentName:"tr",align:null},"\u986f\u793a\u61c9\u7528\u7a0b\u5f0f\u7684\u5065\u5eb7\u72c0\u614b\uff0c\u53ef\u7528\u65bc\u76e3\u63a7\u7cfb\u7d71\u7684\u904b\u4f5c\u60c5\u6cc1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/threaddump")),(0,r.kt)("td",{parentName:"tr",align:null},"\u986f\u793a\u6709\u95dc\u57f7\u884c\u7dd2\u7684\u8cc7\u8a0a\uff0c\u53ef\u7528\u65bc\u5206\u6790\u61c9\u7528\u7a0b\u5f0f\u7684\u4f75\u767c\u72c0\u6cc1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e3b\u8981\u7684\u7aef\u9ede\u8def\u5f91\uff0c\u53ef\u4ee5\u67e5\u770b\u6240\u6709\u53ef\u7528\u7684\u76e3\u63a7\u548c\u7ba1\u7406\u7aef\u9ede")))),(0,r.kt)("h2",{id:"\u95dc\u65bc\u64cd\u4f5c\u63a7\u5236\u985e"},"\u95dc\u65bc\u64cd\u4f5c\u63a7\u5236\u985e"),(0,r.kt)("h3",{id:"\u64cd\u4f5c\u63a7\u5236\u985e\u8aaa\u660e"},"\u64cd\u4f5c\u63a7\u5236\u985e\u8aaa\u660e"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u64cd\u4f5c\u63a7\u5236\u985e\u7aef\u9ede\u63d0\u4f9b\u4e86\u64cd\u4f5c\u61c9\u7528\u7a0b\u5f0f\u7684\u65b9\u5f0f\uff0c\u4f7f\u60a8\u80fd\u5920\u57f7\u884c\u5404\u7a2e\u7ba1\u7406\u4efb\u52d9\u548c\u8abf\u6574\u61c9\u7528\u7a0b\u5f0f\u7684\u57f7\u884c\u6642\u884c\u70ba")),(0,r.kt)("h3",{id:"\u64cd\u4f5c\u63a7\u5236\u76f8\u95dc\u7684\u7aef\u9ede\u8cc7\u8a0a"},"\u64cd\u4f5c\u63a7\u5236\u76f8\u95dc\u7684\u7aef\u9ede\u8cc7\u8a0a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7aef\u9ede"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7528\u9014"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/shutdown")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5141\u8a31\u5f9e\u9060\u7a0b\u95dc\u9589\u61c9\u7528\u7a0b\u5f0f\uff0c\u9700\u9032\u884c\u9069\u7576\u7684\u5b89\u5168\u6027\u914d\u7f6e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/restart")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5141\u8a31\u5f9e\u9060\u7a0b\u91cd\u65b0\u555f\u52d5\u61c9\u7528\u7a0b\u5f0f\uff0c\u540c\u6a23\u9700\u8981\u9032\u884c\u9069\u7576\u7684\u5b89\u5168\u6027\u914d\u7f6e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/pause")),(0,r.kt)("td",{parentName:"tr",align:null},"\u66ab\u505c\u63a5\u53d7\u6d41\u91cf\uff0c\u7528\u65bc\u9032\u884c\u7dad\u8b77\u5de5\u4f5c\uff0c\u9700\u8981\u5b89\u5168\u6027\u4fdd\u8b77")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/resume")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6062\u5fa9\u63a5\u53d7\u6d41\u91cf\uff0c\u53d6\u6d88\u66ab\u505c\u72c0\u614b\uff0c\u540c\u6a23\u9700\u8981\u9032\u884c\u9069\u7576\u7684\u5b89\u5168\u6027\u914d\u7f6e")))))}c.isMDXComponent=!0}}]);