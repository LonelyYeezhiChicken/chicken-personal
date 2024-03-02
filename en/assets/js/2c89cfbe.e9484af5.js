"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[8497],{49613:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>d});var a=l(59496);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,a,r=function(e,t){if(null==e)return{};var l,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},c=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var l=e.components,r=e.mdxType,n=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(l),m=r,d=s["".concat(u,".").concat(m)]||s[m]||k[m]||n;return l?a.createElement(d,i(i({ref:t},c),{},{components:l})):a.createElement(d,i({ref:t},c))}));function d(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=l.length,i=new Array(n);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<n;p++)i[p]=l[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,l)}m.displayName="MDXCreateElement"},21152:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var a=l(88028),r=(l(59496),l(49613));const n={sidebar_position:35,description:"12 \u56e0\u5b50\u61c9\u7528\u7a0b\u5f0f",key:["java","Spring Cloud","Microservices","\u5fae\u670d\u52d9","The twelve-factor App"],tags:["java","Spring Cloud","Microservices"]},i="\ud83c\udf27\ufe0f 12 \u56e0\u5b50\u61c9\u7528\u7a0b\u5f0f",o={unversionedId:"javaSpringCloud/ChapterI/1_712factor",id:"javaSpringCloud/ChapterI/1_712factor",title:"\ud83c\udf27\ufe0f 12 \u56e0\u5b50\u61c9\u7528\u7a0b\u5f0f",description:"12 \u56e0\u5b50\u61c9\u7528\u7a0b\u5f0f",source:"@site/docs/javaSpringCloud/ChapterI/1_712factor.md",sourceDirName:"javaSpringCloud/ChapterI",slug:"/javaSpringCloud/ChapterI/1_712factor",permalink:"/en/docs/javaSpringCloud/ChapterI/1_712factor",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/javaSpringCloud/ChapterI/1_712factor.md",tags:[{label:"java",permalink:"/en/docs/tags/java"},{label:"Spring Cloud",permalink:"/en/docs/tags/spring-cloud"},{label:"Microservices",permalink:"/en/docs/tags/microservices"}],version:"current",lastUpdatedAt:1709356183,formattedLastUpdatedAt:"Mar 2, 2024",sidebarPosition:35,frontMatter:{sidebar_position:35,description:"12 \u56e0\u5b50\u61c9\u7528\u7a0b\u5f0f",key:["java","Spring Cloud","Microservices","\u5fae\u670d\u52d9","The twelve-factor App"],tags:["java","Spring Cloud","Microservices"]},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udf27\ufe0f \u5bb9\u932f\u8a2d\u8a08",permalink:"/en/docs/javaSpringCloud/ChapterI/1_6faultTolerance"},next:{title:"\u2601\ufe0f \u7b2c\u4e8c\u7ae0 \u5efa\u7acb\u670d\u52d9",permalink:"/en/docs/category/\ufe0f-\u7b2c\u4e8c\u7ae0-\u5efa\u7acb\u670d\u52d9"}},u={},p=[{value:"\u76ee\u6a19",id:"\u76ee\u6a19",level:2},{value:"12 \u56e0\u5b50",id:"12-\u56e0\u5b50",level:2},{value:"1. \u57fa\u790e\u7a0b\u5f0f\u78bc (Codebase)",id:"1-\u57fa\u790e\u7a0b\u5f0f\u78bc-codebase",level:3},{value:"2. \u4f9d\u8cf4\u8072\u660e (Dependencies)",id:"2-\u4f9d\u8cf4\u8072\u660e-dependencies",level:3},{value:"3. \u8a2d\u5b9a(Config)",id:"3-\u8a2d\u5b9aconfig",level:3},{value:"4. \u5f8c\u7aef\u670d\u52d9(Backing services)",id:"4-\u5f8c\u7aef\u670d\u52d9backing-services",level:3},{value:"5.\u5efa\u7f6e\u3001\u767c\u5e03\u3001\u57f7\u884c(Build, release, run)",id:"5\u5efa\u7f6e\u767c\u5e03\u57f7\u884cbuild-release-run",level:3},{value:"6.\u7a0b\u5e8f(Processes)",id:"6\u7a0b\u5e8fprocesses",level:3},{value:"7.\u7aef\u53e3\u7d81\u5b9a(Port binding)",id:"7\u7aef\u53e3\u7d81\u5b9aport-binding",level:3},{value:"8.\u4f75\u767c(Concurrency)",id:"8\u4f75\u767cconcurrency",level:3},{value:"9. \u4e00\u6b21\u6027\u7684(Disposability)",id:"9-\u4e00\u6b21\u6027\u7684disposability",level:3},{value:"10. \u958b\u767c\u74b0\u5883\u8207\u7dda\u4e0a\u74b0\u5883\u76f8\u540c",id:"10-\u958b\u767c\u74b0\u5883\u8207\u7dda\u4e0a\u74b0\u5883\u76f8\u540c",level:3},{value:"11. \u65e5\u8a8c(Logs)",id:"11-\u65e5\u8a8clogs",level:3},{value:"12. \u7ba1\u7406\u8005\u7a0b\u5e8f(Admin processes)",id:"12-\u7ba1\u7406\u8005\u7a0b\u5e8fadmin-processes",level:3},{value:"\u53c3\u8003",id:"\u53c3\u8003",level:2}],c={toc:p},s="wrapper";function k(e){let{components:t,...l}=e;return(0,r.kt)(s,(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\ufe0f-12-\u56e0\u5b50\u61c9\u7528\u7a0b\u5f0f"},"\ud83c\udf27\ufe0f 12 \u56e0\u5b50\u61c9\u7528\u7a0b\u5f0f"),(0,r.kt)("h2",{id:"\u76ee\u6a19"},"\u76ee\u6a19"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6a19\u6e96\u5316\u6d41\u7a0b"),(0,r.kt)("li",{parentName:"ul"},"\u589e\u52a0\u670d\u52d9\u7684\u53ef\u79fb\u690d\u6027 (portability)"),(0,r.kt)("li",{parentName:"ul"},"\u9069\u5408\u90e8\u5c6c\u5230\u96f2\u5e73\u53f0 (cloud platforms)"),(0,r.kt)("li",{parentName:"ul"},"\u63d0\u9ad8\u6301\u7e8c\u90e8\u5c6c\u7684\u53ef\u884c\u6027 (continuous deployment)"),(0,r.kt)("li",{parentName:"ul"},"\u63d0\u9ad8\u7cfb\u7d71\u7684\u64f4\u5c55\u6027  (scale up)")),(0,r.kt)("h2",{id:"12-\u56e0\u5b50"},"12 \u56e0\u5b50"),(0,r.kt)("h3",{id:"1-\u57fa\u790e\u7a0b\u5f0f\u78bc-codebase"},"1. \u57fa\u790e\u7a0b\u5f0f\u78bc (Codebase)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u57fa\u790e\u7a0b\u5f0f\u78bc",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u96c6\u4e2d\u5f0f\u7248\u63a7\u6307\u7684\u662f\u7cfb\u7d71\u4e0a\u7684\u5132\u5b58\u5eab (ex: SVN\u61c9\u8a72\u4ee5\u6700\u5f8c\u4e00\u500b\u7248\u672c\u70ba\u4e3b)"),(0,r.kt)("li",{parentName:"ul"},"\u5206\u6563\u5f0f\u7248\u63a7\u6307\u7684\u662f\u6700\u4e0a\u6e38\u7684\u5132\u5b58\u5eab (ex: \u5982\u679c git \u4e0a\u7684Repo\u662ffork\u4f86\u7684\uff0c\u61c9\u8a72\u4ee5fork\u524d\u7684\u70ba\u4e3b) (ex: git \u61c9\u8a72\u4ee5\u96f2\u7aef\u6700\u65b0\u7684\u7248\u672c\u70ba\u4e3b)"))),(0,r.kt)("li",{parentName:"ol"},"\u57fa\u790e\u7a0b\u5f0f\u78bc\u8207\u61c9\u7528\u7a0b\u5f0f\u7684\u95dc\u4fc2:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e00\u4efd\u57fa\u790e\u7a0b\u5f0f\u78bc\uff0c\u5c0d\u61c9\u4e00\u500b\u61c9\u7528\u7a0b\u5f0f"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u4efd\u57fa\u790e\u7a0b\u5f0f\u78bc\uff0c\u5c0d\u61c9\u591a\u500b\u61c9\u7528\u7a0b\u5f0f"),(0,r.kt)("li",{parentName:"ul"},"\u591a\u4efd\u57fa\u790e\u7a0b\u5f0f\u78bc\uff0c\u662f\u4e00\u500b\u5206\u6563\u5f0f\u7cfb\u7d71")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u57fa\u790e\u7a0b\u5f0f\u78bc\u53ea\u80fd\u6709\u4e00\u4efd\uff0c\u4f46\u53ef\u4ee5\u90e8\u5c6c\u6210\u591a\u500b\u61c9\u7528\u7a0b\u5f0f")),(0,r.kt)("h3",{id:"2-\u4f9d\u8cf4\u8072\u660e-dependencies"},"2. \u4f9d\u8cf4\u8072\u660e (Dependencies)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f9d\u8cf4\u7ba1\u7406\u5de5\u5177\u53ef\u80fd\u5b89\u88dd\u7684\u5957\u4ef6\u985e\u578b:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7cfb\u7d71\u5c64\u7d1a\u5168\u57df\u7684\u4f9d\u8cf4 (ex: python fastapi)"),(0,r.kt)("li",{parentName:"ul"},"\u61c9\u7528\u7a0b\u5f0f\u5c08\u5c6c\u4f7f\u7528\u7684 (ex: dotnet log4net)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f9d\u8cf4\u7ba1\u7406\u5de5\u5177\u505a\u6cd5: (\u4ee5Python\u70ba\u4f8b)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f9d\u8cf4\u8072\u660e (requirements.txt)"),(0,r.kt)("li",{parentName:"ul"},"\u4f9d\u8cf4\u9694\u96e2 (venv)"),(0,r.kt)("li",{parentName:"ul"},"\u4f9d\u8cf4\u5efa\u7f6e (pip install)")))),(0,r.kt)("h3",{id:"3-\u8a2d\u5b9aconfig"},"3. \u8a2d\u5b9a(Config)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u56e0\u74b0\u5883\u5dee\u7570\u800c\u6709\u6240\u4e0d\u540c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8cc7\u6599\u5eab\u8a2d\u5b9a"),(0,r.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u65b9\u670d\u52d9\u7684\u5b58\u53d6\u6191\u8b49"),(0,r.kt)("li",{parentName:"ul"},"\u74b0\u5883\u7279\u6709\u7684\u8a2d\u5b9a (ex: \u7db2\u57df )")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5efa\u8b70\u4f7f\u7528\u74b0\u5883\u8b8a\u6578")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53cd\u4f8b:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528\u5e38\u6578"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u8a2d\u5b9a\u6a94")))),(0,r.kt)("h3",{id:"4-\u5f8c\u7aef\u670d\u52d9backing-services"},"4. \u5f8c\u7aef\u670d\u52d9(Backing services)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b9a\u7fa9",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u61c9\u7528\u7a0b\u5f0f\u57f7\u884c\u4e2d\u9700\u8981\u900f\u904e\u7db2\u8def\u547c\u53eb\u7684\u670d\u52d9"),(0,r.kt)("li",{parentName:"ul"},"\u8cc7\u6599\u5eab\u3001Queue\u3001SMTP\u3001\u5feb\u53d6\u7b49\uff0c\u5167\u90e8\u670d\u52d9"),(0,r.kt)("li",{parentName:"ul"},"Google API\uff0c\u5916\u90e8\u670d\u52d9")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4f5c\u70ba\u61c9\u7528\u7a0b\u5f0f\u7684\u9644\u52a0\u8cc7\u6e90\uff0c\u4f7f\u7528URL\u6216\u662f\u5176\u4ed6\u5f62\u5f0f\uff0c\u5b58\u5728\u8a2d\u5b9a\u7ba1\u7406"),(0,r.kt)("p",{parentName:"blockquote"},"\u5728\u8cc7\u6599\u5eab\u51fa\u554f\u984c\u6642\uff0c\u61c9\u8a72\u5148\u5c07\u5099\u4efd\u7684\u8cc7\u6599\u5eab\u555f\u52d5\uff0c\u4e26\u4fee\u6539\u74b0\u5883\u8b8a\u6578\u4e2d\u7684\u9023\u7dda\u5b57\u4e32\uff0c\u53ef\u80fd\u6703\u6709\u4e00\u4e9b\u8cc7\u6599\u843d\u5dee\uff0c\u4f46\u7576\u4e0b\u53ef\u4ee5\u5fa9\u6b78\u7cfb\u7d71")),(0,r.kt)("h3",{id:"5\u5efa\u7f6e\u767c\u5e03\u57f7\u884cbuild-release-run"},"5.\u5efa\u7f6e\u3001\u767c\u5e03\u3001\u57f7\u884c(Build, release, run)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b9a\u7fa9\u57fa\u790e\u7a0b\u5f0f\u78bc\u8f49\u63db\u70ba\u90e8\u5c6c\u7684\u968e\u6bb5:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5efa\u7f6e\u968e\u6bb5 > \u900f\u904e\u7de8\u8b6f\u5668\uff0c\u6e96\u5099\u597d\u4f9d\u8cf4\uff0c\u6253\u5305\u6210\u4e00\u500b\u57f7\u884c\u6a94\u2026"),(0,r.kt)("li",{parentName:"ul"},"\u767c\u5e03\u968e\u6bb5 > \u6e96\u5099\u597d\u6253\u5305\u5f8c\u7684\u7a0b\u5f0f\u8207\u8a2d\u5b9a\u6a94"),(0,r.kt)("li",{parentName:"ul"},"\u57f7\u884c\u968e\u6bb5 > \u7576\u7a0b\u5f0f\u78bc\u555f\u52d5\u4e4b\u5f8c\u7522\u751f\u4e00\u500b processes")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Release \u61c9\u8a72\u4f7f\u7528\u7248\u865f\u6216\u662f\u4e00\u500b\u6d41\u6c34\u865f\uff0c\u597d\u8655\u662f\u53ef\u4ee5\u78ba\u5b9aRelease\u5f8c\u7684\u7a0b\u5f0f\u90fd\u61c9\u8a72\u8981\u53ef\u4ee5\u76f4\u63a5\u5728PD\u74b0\u5883\u4e0a\u57f7\u884c")),(0,r.kt)("h3",{id:"6\u7a0b\u5e8fprocesses"},"6.\u7a0b\u5e8f(Processes)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e00\u500b\u61c9\u7528\u7a0b\u5f0f\u901a\u5e38\u662f\u7531\u4e00\u500b\u6216\u591a\u500b\u7a0b\u5e8f\u57f7\u884c\u7684"),(0,r.kt)("li",{parentName:"ul"},"\u7a0b\u5e8f\u9700\u70ba\u7121\u72c0\u614b\u4e14\u7121\u5171\u4eab(\u61c9\u4fdd\u5b58\u5728\u5f8c\u7aef\u670d\u52d9\u5167)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7121\u72c0\u614b  > \u524d\u4e00\u500b\u8acb\u6c42\u4e0d\u61c9\u8a72\u5f71\u97ff\u5230\u4e0b\u4e00\u500b\u8acb\u6c42\u7684\u72c0\u614b"),(0,r.kt)("li",{parentName:"ul"},"\u7121\u5171\u4eab > \u8a18\u61b6\u9ad4\u4e2d\u662f\u4e0d\u6703\u4e92\u76f8\u5f71\u97ff\u7684")))),(0,r.kt)("h3",{id:"7\u7aef\u53e3\u7d81\u5b9aport-binding"},"7.\u7aef\u53e3\u7d81\u5b9a(Port binding)"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u61c9\u7528\u7a0b\u5f0f\u61c9\u8a72\u8981\u80fd\u5920\u81ea\u884c\u5efa\u7acb\u7db2\u8def\u670d\u52d9\uff0c\u4e26\u900f\u904e\u7aef\u53e3\u7d81\u5b9a\u4f86\u63d0\u4f9b\u670d\u52d9")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53cd\u4f8b: C# \u4f9d\u8cf4 IIS \u3001Java \u4f9d\u8cf4 Tomcat"),(0,r.kt)("li",{parentName:"ul"},"\u6b63\u4f8b: C# \u8207 ASP.NET Core\u3001 Java \u8207 Jetty \u6216 Spring Boot")),(0,r.kt)("h3",{id:"8\u4f75\u767cconcurrency"},"8.\u4f75\u767c(Concurrency)"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4ee5PHP\u70ba\u4f8b\uff0c\u5728Apache\u555f\u52d5\u6642\u53ea\u6703\u555f\u52d5\u6700\u5c0fProcesses\uff0c\u4e26\u5728\u4f7f\u7528\u6642\u9032\u884c\u52d5\u614b\u589e\u9577"),(0,r.kt)("p",{parentName:"blockquote"},"\u53e6\u5916\u4ee5Java\u70ba\u4f8b\uff0c\u5728\u555f\u52d5\u6642\u6703\u5c07Processes\u90fd\u5148\u555f\u52d5\u597d\uff0c\u5728\u8acb\u6c42\u9032\u4f86\u6642\uff0c\u9032\u884c\u5206\u914d")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u540c\u7684\u5de5\u4f5c\u6703\u4ea4\u7d66\u4e0d\u540c\u7684\u7a0b\u5e8f\u8655\u7406"),(0,r.kt)("li",{parentName:"ul"},"\u61c9\u8a72\u4f7f\u7a0b\u5e8f\u7ba1\u7406\u5de5\u5177(systemd)\uff0c\u800c\u4e0d\u662f\u4f7f\u7528\u5e38\u99d0\u7a0b\u5f0f")),(0,r.kt)("h3",{id:"9-\u4e00\u6b21\u6027\u7684disposability"},"9. \u4e00\u6b21\u6027\u7684(Disposability)"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u61c9\u7528\u7a0b\u5f0f\u662f\u4e00\u6b21\u6027\u7684")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5feb\u901f\u555f\u52d5 (fast startup)"),(0,r.kt)("li",{parentName:"ul"},"\u512a\u96c5\u7d42\u6b62 (graceful shutdown)")),(0,r.kt)("h3",{id:"10-\u958b\u767c\u74b0\u5883\u8207\u7dda\u4e0a\u74b0\u5883\u76f8\u540c"},"10. \u958b\u767c\u74b0\u5883\u8207\u7dda\u4e0a\u74b0\u5883\u76f8\u540c"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u53ef\u80fd\u7684\u5dee\u7570")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7a0b\u5f0f\u78bc\u5dee\u7570 > \u53ef\u80fd\u56e0\u70ba\u6b63\u5728\u958b\u767c\u65b0\u529f\u80fd\u800c\u9020\u6210\u7a0b\u5f0f\u78bc\u5dee\u7570"),(0,r.kt)("li",{parentName:"ul"},"\u7ba1\u7406\u5dee\u7570 > \u958b\u767c\u8207\u7dad\u904b\u4eba\u54e1\u4e0d\u540c\u9020\u6210\u7ba1\u7406\u5dee\u7570"),(0,r.kt)("li",{parentName:"ul"},"\u670d\u52d9\u5dee\u7570 > \u5f8c\u7aef\u670d\u52d9\u7684\u5dee\u7570\uff0c\u7dda\u4e0a\u4f7f\u7528MySQL\uff0c\u958b\u767c\u4f7f\u7528MSSQL")),(0,r.kt)("h3",{id:"11-\u65e5\u8a8clogs"},"11. \u65e5\u8a8c(Logs)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u5132\u5b58\u3001\u4e0d\u7ba1\u7406\uff0c\u6642\u6a5f\u5230\u4e86\u81ea\u52d5stdout\u51fa\u53bb"),(0,r.kt)("li",{parentName:"ul"},"\u7531\u5176\u4ed6\u63a5\u6536\u9019\u4f86\u8655\u7406\u9019\u4e9bLog (ex: ",(0,r.kt)("a",{parentName:"li",href:"https://www.elastic.co/cn/what-is/elk-stack"},"ELK Stack"),")")),(0,r.kt)("h3",{id:"12-\u7ba1\u7406\u8005\u7a0b\u5e8fadmin-processes"},"12. \u7ba1\u7406\u8005\u7a0b\u5e8f(Admin processes)"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u7ba1\u7406\u4efb\u52d9\u4f5c\u70ba\u4e00\u6b21\u6027\u7a0b\u5e8f\u57f7\u884c"),(0,r.kt)("p",{parentName:"blockquote"},"EX: Entity Framework Core \u4f7f\u7528 dotnet CLI \u522a\u9664\u8cc7\u6599\u5eab")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dotnet ef database drop\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6b64\u4efb\u52d9\u57f7\u884c\u4e00\u6b21\u4e4b\u5f8c\u5c31\u7d50\u675f\u4e86")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u53c3\u8003"},"\u53c3\u8003"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://12factor.net/"},"The Twelve-Factor App")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/P-6uwBmaH-g"},"DevOps Taiwan Community - Meetup 45 - \u96f2\u539f\u751f\u6642\u4ee3\u7684\u8edf\u9ad4\u958b\u767c\u9808\u77e5, Miles Chou")))}k.isMDXComponent=!0}}]);