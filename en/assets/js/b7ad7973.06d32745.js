"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[2940],{49613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),v=a,k=s["".concat(c,".").concat(v)]||s[v]||d[v]||o;return r?n.createElement(k,l(l({ref:t},u),{},{components:r})):n.createElement(k,l({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=v;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},70067:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(88028),a=(r(59496),r(49613));const o={sidebar_position:30,description:"\u5bb9\u932f\u8a2d\u8a08",key:["java","Spring Cloud","Microservices","\u5fae\u670d\u52d9"],tags:["java","Spring Cloud","Microservices"]},l="\ud83c\udf27\ufe0f \u5bb9\u932f\u8a2d\u8a08",i={unversionedId:"javaSpringCloud/ChapterI/1_6faultTolerance",id:"javaSpringCloud/ChapterI/1_6faultTolerance",title:"\ud83c\udf27\ufe0f \u5bb9\u932f\u8a2d\u8a08",description:"\u5bb9\u932f\u8a2d\u8a08",source:"@site/docs/javaSpringCloud/ChapterI/1_6faultTolerance.md",sourceDirName:"javaSpringCloud/ChapterI",slug:"/javaSpringCloud/ChapterI/1_6faultTolerance",permalink:"/en/docs/javaSpringCloud/ChapterI/1_6faultTolerance",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/javaSpringCloud/ChapterI/1_6faultTolerance.md",tags:[{label:"java",permalink:"/en/docs/tags/java"},{label:"Spring Cloud",permalink:"/en/docs/tags/spring-cloud"},{label:"Microservices",permalink:"/en/docs/tags/microservices"}],version:"current",lastUpdatedAt:1702200765,formattedLastUpdatedAt:"Dec 10, 2023",sidebarPosition:30,frontMatter:{sidebar_position:30,description:"\u5bb9\u932f\u8a2d\u8a08",key:["java","Spring Cloud","Microservices","\u5fae\u670d\u52d9"],tags:["java","Spring Cloud","Microservices"]},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udf27\ufe0f \u81ea\u52d5\u5316",permalink:"/en/docs/javaSpringCloud/ChapterI/1_5autoDev"},next:{title:"\ud83c\udf27\ufe0f 12 \u56e0\u5b50\u61c9\u7528\u7a0b\u5f0f",permalink:"/en/docs/javaSpringCloud/ChapterI/1_712factor"}},c={},p=[{value:"\u5fae\u670d\u52d9 VS \u55ae\u9ad4\u670d\u52d9",id:"\u5fae\u670d\u52d9-vs-\u55ae\u9ad4\u670d\u52d9",level:2},{value:"\u55ae\u9ad4\u670d\u52d9",id:"\u55ae\u9ad4\u670d\u52d9",level:3},{value:"\u5fae\u670d\u52d9",id:"\u5fae\u670d\u52d9",level:3},{value:"\u5fae\u670d\u52d9\u7684\u8a2d\u8a08\u6f14\u9032",id:"\u5fae\u670d\u52d9\u7684\u8a2d\u8a08\u6f14\u9032",level:2},{value:"\u5fae\u670d\u52d9\u67b6\u69cb\u7279\u9ede",id:"\u5fae\u670d\u52d9\u67b6\u69cb\u7279\u9ede",level:3},{value:"\u6f38\u9032\u5f0f\u69cb\u5efa",id:"\u6f38\u9032\u5f0f\u69cb\u5efa",level:3},{value:"\u5fae\u670d\u52d9\u8f49\u63db",id:"\u5fae\u670d\u52d9\u8f49\u63db",level:3},{value:"\u6838\u5fc3\u5fae\u670d\u52d9",id:"\u6838\u5fc3\u5fae\u670d\u52d9",level:3}],u={toc:p},s="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\ufe0f-\u5bb9\u932f\u8a2d\u8a08"},"\ud83c\udf27\ufe0f \u5bb9\u932f\u8a2d\u8a08"),(0,a.kt)("h2",{id:"\u5fae\u670d\u52d9-vs-\u55ae\u9ad4\u670d\u52d9"},"\u5fae\u670d\u52d9 VS \u55ae\u9ad4\u670d\u52d9"),(0,a.kt)("h3",{id:"\u55ae\u9ad4\u670d\u52d9"},"\u55ae\u9ad4\u670d\u52d9"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e00\u767c\u751f\u932f\u8aa4\uff0c\u5c31\u5168\u90e8\u670d\u52d9\u6545\u969c")),(0,a.kt)("h3",{id:"\u5fae\u670d\u52d9"},"\u5fae\u670d\u52d9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u500b\u670d\u52d9\u90fd\u8dd1\u5728\u7368\u7acb\u7684 Process"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u500b\u670d\u52d9\u6545\u969c\u5f8c\uff0c\u5176\u4ed6\u670d\u52d9\u4e0d\u6703\u53d7\u5f71\u97ff")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5fae\u670d\u52d9\u8a2d\u8a08\u932f\u8aa4\u6709\u53ef\u80fd\u6703\u9020\u6210\uff0c\u67d0\u500b\u670d\u52d9\u6545\u969c\uff0c\u5c0e\u81f4\u5176\u4ed6\u4f9d\u8cf4\u5b83\u7684\u670d\u52d9\u9010\u6f38\u7671\u7613\uff0c"),(0,a.kt)("p",{parentName:"blockquote"},"\u9020\u6210\u6545\u969c\u8513\u5ef6\uff0c\u6700\u5f8c\u5c0e\u81f4\u6240\u6709\u7cfb\u7d71\u7671\u7613\u3002"),(0,a.kt)("p",{parentName:"blockquote"},"\u56e0\u6b64\u5728\u5fae\u670d\u52d9\u7684\u8a2d\u8a08\u4e2d\uff0c\u61c9\u8a72\u8981\u53ef\u4ee5\u5feb\u901f\u6aa2\u6e2c\u6545\u969c\u7684\u539f\u56e0\uff0c\u4e26\u4e14\u81ea\u52d5\u5fa9\u6b78")),(0,a.kt)("h2",{id:"\u5fae\u670d\u52d9\u7684\u8a2d\u8a08\u6f14\u9032"},"\u5fae\u670d\u52d9\u7684\u8a2d\u8a08\u6f14\u9032"),(0,a.kt)("h3",{id:"\u5fae\u670d\u52d9\u67b6\u69cb\u7279\u9ede"},"\u5fae\u670d\u52d9\u67b6\u69cb\u7279\u9ede"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u9700\u8981\u8003\u616e\u591a\u65b9\u9762\u7684\u8a2d\u8a08\u548c\u6210\u672c\uff0c\u5c0d\u65bc\u7f3a\u4e4f\u7d93\u9a57\u7684\u5718\u968a\u4f86\u8aaa\uff0c\u5be6\u65bd\u5b8c\u7f8e\u7684\u5fae\u670d\u52d9\u67b6\u69cb\u53ef\u80fd\u6bd4\u55ae\u9ad4\u61c9\u7528\u66f4\u8cbb\u4ee3\u50f9")),(0,a.kt)("h3",{id:"\u6f38\u9032\u5f0f\u69cb\u5efa"},"\u6f38\u9032\u5f0f\u69cb\u5efa"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8a31\u591a\u60c5\u6cc1\u4e0b\uff0c\u67b6\u69cb\u5e2b\u6703\u9078\u64c7\u4ee5\u6f38\u9032\u7684\u65b9\u5f0f\u5efa\u69cb\u7cfb\u7d71"),(0,a.kt)("p",{parentName:"blockquote"},"\u521d\u671f\u53ef\u80fd\u63a1\u7528\u55ae\u9ad4\u7cfb\u7d71\u8a2d\u8a08\u548c\u5be6\u65bd\uff0c\u56e0\u70ba\u7cfb\u7d71\u521d\u671f\u8f03\u5c0f\uff0c\u6210\u672c\u76f8\u5c0d\u8f03\u4f4e\uff0c\u4e14\u6838\u5fc3\u696d\u52d9\u901a\u5e38\u4e0d\u6703\u6709\u5927\u6539\u8b8a")),(0,a.kt)("h3",{id:"\u5fae\u670d\u52d9\u8f49\u63db"},"\u5fae\u670d\u52d9\u8f49\u63db"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u96a8\u8457\u7cfb\u7d71\u6210\u9577\u548c\u696d\u52d9\u9700\u6c42\uff0c\u67b6\u69cb\u5e2b\u6703\u5c07\u5bb9\u6613\u8b8a\u52d5\u6216\u5177\u6709\u6642\u9593\u6548\u61c9\u7684\u90e8\u5206\u9010\u6b65\u8f49\u63db\u70ba\u5fae\u670d\u52d9\uff0c\u9032\u884c\u5206\u6563\u8655\u7406\uff0c"),(0,a.kt)("p",{parentName:"blockquote"},"\u540c\u6642\u6703\u9010\u6b65\u62c6\u5206\u55ae\u9ad4\u7cfb\u7d71\u4e2d\u591a\u8b8a\u7684\u6a21\u584a")),(0,a.kt)("h3",{id:"\u6838\u5fc3\u5fae\u670d\u52d9"},"\u6838\u5fc3\u5fae\u670d\u52d9"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e0d\u6613\u8b8a\u52d5\u7684\u6a21\u584a\u6703\u5f62\u6210\u6838\u5fc3\u5fae\u670d\u52d9\uff0c\u7a69\u5b9a\u5b58\u5728\u65bc\u6574\u500b\u67b6\u69cb\u4e2d\uff0c\u9019\u6709\u52a9\u65bc\u4fdd\u6301\u7a69\u5b9a\u7684\u57fa\u790e\u67b6\u69cb\uff0c\u4e26\u652f\u63f4\u7cfb\u7d71\u7684\u7a69\u5b9a\u904b\u4f5c")))}d.isMDXComponent=!0}}]);