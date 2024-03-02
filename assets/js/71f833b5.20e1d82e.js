"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[2725],{49613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),k=a,v=s["".concat(c,".").concat(k)]||s[k]||d[k]||o;return r?n.createElement(v,i(i({ref:t},u),{},{components:r})):n.createElement(v,i({ref:t},u))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},12899:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(88028),a=(r(59496),r(49613));const o={sidebar_position:20,description:"\u5982\u4f55\u9032\u884c\u70ba\u670d\u52d9",key:["java","Spring Cloud","Microservices","\u5fae\u670d\u52d9"],tags:["java","Spring Cloud","Microservices"]},i="\ud83c\udf27\ufe0f \u53bb\u4e2d\u5fc3\u5316",l={unversionedId:"javaSpringCloud/ChapterI/1_4decentralization",id:"javaSpringCloud/ChapterI/1_4decentralization",title:"\ud83c\udf27\ufe0f \u53bb\u4e2d\u5fc3\u5316",description:"\u5982\u4f55\u9032\u884c\u70ba\u670d\u52d9",source:"@site/docs/javaSpringCloud/ChapterI/1_4decentralization.md",sourceDirName:"javaSpringCloud/ChapterI",slug:"/javaSpringCloud/ChapterI/1_4decentralization",permalink:"/docs/javaSpringCloud/ChapterI/1_4decentralization",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/javaSpringCloud/ChapterI/1_4decentralization.md",tags:[{label:"java",permalink:"/docs/tags/java"},{label:"Spring Cloud",permalink:"/docs/tags/spring-cloud"},{label:"Microservices",permalink:"/docs/tags/microservices"}],version:"current",lastUpdatedAt:1709356183,formattedLastUpdatedAt:"2024\u5e743\u67082\u65e5",sidebarPosition:20,frontMatter:{sidebar_position:20,description:"\u5982\u4f55\u9032\u884c\u70ba\u670d\u52d9",key:["java","Spring Cloud","Microservices","\u5fae\u670d\u52d9"],tags:["java","Spring Cloud","Microservices"]},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udf27\ufe0f \u5982\u4f55\u57f7\u884c\u5fae\u670d\u52d9",permalink:"/docs/javaSpringCloud/ChapterI/1_3howToDo"},next:{title:"\ud83c\udf27\ufe0f \u81ea\u52d5\u5316",permalink:"/docs/javaSpringCloud/ChapterI/1_5autoDev"}},c={},p=[{value:"\u53bb\u4e2d\u5fc3\u5316\u7ba1\u7406",id:"\u53bb\u4e2d\u5fc3\u5316\u7ba1\u7406",level:2},{value:"\u554f\u984c",id:"\u554f\u984c",level:3},{value:"\u5fae\u670d\u52d9\u89e3\u6c7a\u7684\u554f\u984c",id:"\u5fae\u670d\u52d9\u89e3\u6c7a\u7684\u554f\u984c",level:3},{value:"\u53bb\u4e2d\u5fc3\u5316\u7684\u8cc7\u6599\u7ba1\u7406",id:"\u53bb\u4e2d\u5fc3\u5316\u7684\u8cc7\u6599\u7ba1\u7406",level:2},{value:"\u5b9a\u7fa9",id:"\u5b9a\u7fa9",level:3},{value:"\u5be6\u969b\u72c0\u6cc1",id:"\u5be6\u969b\u72c0\u6cc1",level:3},{value:"\u6ce8\u610f\u4e8b\u9805",id:"\u6ce8\u610f\u4e8b\u9805",level:3}],u={toc:p},s="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\ufe0f-\u53bb\u4e2d\u5fc3\u5316"},"\ud83c\udf27\ufe0f \u53bb\u4e2d\u5fc3\u5316"),(0,a.kt)("h2",{id:"\u53bb\u4e2d\u5fc3\u5316\u7ba1\u7406"},"\u53bb\u4e2d\u5fc3\u5316\u7ba1\u7406"),(0,a.kt)("h3",{id:"\u554f\u984c"},"\u554f\u984c"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u7576\u4f7f\u7528\u96c6\u4e2d\u5f0f\u7ba1\u7406\u6642\uff0c\u901a\u5e38\u6703\u5b9a\u7fa9\u7d71\u4e00\u7684\u6a19\u6e96\uff0c"),(0,a.kt)("p",{parentName:"blockquote"},"\u4f46\u6bcf\u7a2e\u6280\u8853\u90fd\u6703\u6709\u7f3a\u9ede\uff0c\u7576\u78b0\u5230\u9019\u500b\u554f\u984c\u6642\uff0c"),(0,a.kt)("p",{parentName:"blockquote"},"\u9700\u8981\u82b1\u5f88\u5927\u7684\u529b\u6c23\u53bb\u89e3\u6c7a\u9019\u554f\u984c\uff0c"),(0,a.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u6c92\u8fa6\u6cd5\u89e3\u6c7a\uff0c\u53ef\u80fd\u6703\u6210\u70ba\u7cfb\u7d71\u7684\u74f6\u9838")),(0,a.kt)("h3",{id:"\u5fae\u670d\u52d9\u89e3\u6c7a\u7684\u554f\u984c"},"\u5fae\u670d\u52d9\u89e3\u6c7a\u7684\u554f\u984c"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6574\u500b\u5fae\u670d\u52d9\u7684\u67b6\u69cb\u90fd\u662f\u900f\u904e\u7d71\u4e00\u7684\u901a\u8a0a\u4ecb\u9762\u9032\u884c\u6e9d\u901a\u7684\uff0c"),(0,a.kt)("p",{parentName:"blockquote"},"\u8b93\u6574\u500b\u670d\u52d9\u4e0d\u6703\u88ab\u4fb7\u9650\u65bc\u67d0\u7a2e\u6280\u8853\u6846\u67b6\uff0c\u53ef\u4ee5\u91dd\u5c0d\u4e0d\u540c\u60c5\u5883\u7684\u5834\u666f\uff0c"),(0,a.kt)("p",{parentName:"blockquote"},"\u4f86\u9078\u64c7\u9069\u5408\u7684\u670d\u52d9")),(0,a.kt)("h2",{id:"\u53bb\u4e2d\u5fc3\u5316\u7684\u8cc7\u6599\u7ba1\u7406"},"\u53bb\u4e2d\u5fc3\u5316\u7684\u8cc7\u6599\u7ba1\u7406"),(0,a.kt)("h3",{id:"\u5b9a\u7fa9"},"\u5b9a\u7fa9"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728\u5fae\u670d\u52d9\u67b6\u69cb\u5e95\u4e0b\uff0c\u6211\u5011\u6703\u671f\u671b\u6bcf\u500b\u670d\u52d9\u7ba1\u7406\u5404\u81ea\u7684\u8cc7\u6599\u5eab\uff0c"),(0,a.kt)("p",{parentName:"blockquote"},"\u9019\u5c31\u662f\u53bb\u4e2d\u5fc3\u5316\u7684\u8cc7\u6599\u7ba1\u7406")),(0,a.kt)("h3",{id:"\u5be6\u969b\u72c0\u6cc1"},"\u5be6\u969b\u72c0\u6cc1"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6709\u53ef\u80fd\u6703\u662f\u5c07\u8cc7\u6599\u5eab\u7684\u8868\u683c\u62c6\u5206\u6210\u597d\u5e7e\u500b Database\uff0c"),(0,a.kt)("p",{parentName:"blockquote"},"\u4e5f\u6709\u53ef\u80fd\u662f\u5c07\u8cc7\u6599\u5132\u5b58\u5230\u5176\u4ed6\u7684\u5132\u5b58\u6280\u8853\u4e2d\uff0c\u5982: \u5c07 log \u5132\u5b58\u9032 MongoDB\u3001\u5c07\u4e00\u4e9b\u6bd4\u8f03\u5373\u6642\u6027\u7684\u8cc7\u6599\u5132\u5b58\u5728 Redis")),(0,a.kt)("h3",{id:"\u6ce8\u610f\u4e8b\u9805"},"\u6ce8\u610f\u4e8b\u9805"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u96d6\u7136\u53bb\u4e2d\u5fc3\u5316\u53ef\u4ee5\u8b93\u8cc7\u6599\u66f4\u7d30\u7dfb\uff0c\u800c\u4e14\u53ef\u4ee5\u900f\u904e\u6280\u8853\u7684\u9078\u64c7\uff0c\u8b93\u6574\u500b\u8cc7\u6599\u5eab\u6027\u80fd\u9054\u5230\u6700\u4f73\u5316\uff0c"),(0,a.kt)("p",{parentName:"blockquote"},"\u4f46\u5728\u9019\u60c5\u5883\u4e0b ",(0,a.kt)("inlineCode",{parentName:"p"},"\u8cc7\u6599\u7684\u4e00\u81f4\u6027")," \u662f\u6700\u81f4\u547d\u7684\u5f31\u9ede\uff0c\u6240\u4ee5\u5728\u5fae\u670d\u52d9\u7684\u67b6\u69cb\u4e2d\uff0c\u53ea\u8981\u6c42\u6700\u5f8c\u8cc7\u6599\u662f\u4e00\u81f4\u7684\u5c31\u53ef\uff0c"),(0,a.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u904e\u7a0b\u4e2d\u767c\u751f\u932f\u8aa4\uff0c\u9700\u8981\u6709\u88dc\u511f\u6a5f\u5236\u4f86\u9032\u884c\u8655\u4f86\uff0c\u8b93\u8cc7\u6599\u6700\u7d42\u53ef\u4ee5\u9054\u5230\u4e00\u81f4\u6027")))}d.isMDXComponent=!0}}]);