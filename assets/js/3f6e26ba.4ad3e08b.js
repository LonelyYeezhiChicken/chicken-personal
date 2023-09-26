"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[3923],{9613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(9496);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var y=n.createContext({}),c=function(e){var t=n.useContext(y),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(y.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,y=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(r),m=l,d=s["".concat(y,".").concat(m)]||s[m]||u[m]||a;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var y in t)hasOwnProperty.call(t,y)&&(i[y]=t[y]);i.originalType=e,i[s]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},358:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(8957),l=(r(9496),r(9613));const a={sidebar_position:10,description:"MySQL \u532f\u51fa\u8cc7\u6599\u5eab\u8173\u672c",key:["MySQL","\u96dc\u8a18"],tags:["MySQL","MySQL\u96dc\u8a18","Workbench"]},o="\ud83d\udc69\u200d\ud83d\udcbb MySQL \u532f\u51fa\u8cc7\u6599\u5eab\u8173\u672c",i={unversionedId:"daylily/mysqlDaylily/exportSql",id:"daylily/mysqlDaylily/exportSql",title:"\ud83d\udc69\u200d\ud83d\udcbb MySQL \u532f\u51fa\u8cc7\u6599\u5eab\u8173\u672c",description:"MySQL \u532f\u51fa\u8cc7\u6599\u5eab\u8173\u672c",source:"@site/docs/daylily/mysqlDaylily/exportSql.md",sourceDirName:"daylily/mysqlDaylily",slug:"/daylily/mysqlDaylily/exportSql",permalink:"/docs/daylily/mysqlDaylily/exportSql",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/daylily/mysqlDaylily/exportSql.md",tags:[{label:"MySQL",permalink:"/docs/tags/my-sql"},{label:"MySQL\u96dc\u8a18",permalink:"/docs/tags/my-sql\u96dc\u8a18"},{label:"Workbench",permalink:"/docs/tags/workbench"}],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"MySQL \u532f\u51fa\u8cc7\u6599\u5eab\u8173\u672c",key:["MySQL","\u96dc\u8a18"],tags:["MySQL","MySQL\u96dc\u8a18","Workbench"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc69\u200d\ud83d\udcbb Docker \u4e2d\u5b89\u88dd MySQL",permalink:"/docs/daylily/mysqlDaylily/setIndocker"},next:{title:"\ud83c\udf64 Git \u958b\u767c\u96dc\u8a18",permalink:"/docs/category/-git-\u958b\u767c\u96dc\u8a18"}},y={},c=[{value:"\u74b0\u5883",id:"\u74b0\u5883",level:2},{value:"\u6b65\u9a5f",id:"\u6b65\u9a5f",level:2}],p={toc:c},s="wrapper";function u(e){let{components:t,...r}=e;return(0,l.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"-mysql-\u532f\u51fa\u8cc7\u6599\u5eab\u8173\u672c"},"\ud83d\udc69\u200d\ud83d\udcbb MySQL \u532f\u51fa\u8cc7\u6599\u5eab\u8173\u672c"),(0,l.kt)("h2",{id:"\u74b0\u5883"},"\u74b0\u5883"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"DB GUI: MySQL Workbench 8.0 CE"),(0,l.kt)("li",{parentName:"ul"},"MySQL: 8"),(0,l.kt)("li",{parentName:"ul"},"OS: Windows11")),(0,l.kt)("h2",{id:"\u6b65\u9a5f"},"\u6b65\u9a5f"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u9078\u55ae\u7684 > Sever"),(0,l.kt)("li",{parentName:"ol"},"Data Export"),(0,l.kt)("li",{parentName:"ol"},"Tables to Export \u52fe\u9078\u8981\u532f\u51fa\u7684\u8cc7\u6599\u5eab"),(0,l.kt)("li",{parentName:"ol"},"Export to Self-Contained File > \u9078\u64c7\u532f\u51fa\u8def\u5f91"),(0,l.kt)("li",{parentName:"ol"},"Include Create Schema"),(0,l.kt)("li",{parentName:"ol"},"Start Export")))}u.isMDXComponent=!0}}]);