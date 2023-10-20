"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[6408],{49613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var l=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=l.createContext({}),c=function(e){var t=l.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return l.createElement(i.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),y=c(r),u=n,d=y["".concat(i,".").concat(u)]||y[u]||m[u]||a;return r?l.createElement(d,o(o({ref:t},p),{},{components:r})):l.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[y]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,r)}u.displayName="MDXCreateElement"},98638:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var l=r(88028),n=(r(59496),r(49613));const a={sidebar_position:30,description:"\u67e5\u8a62 Database \u5e95\u4e0b\u6240\u6709 Table",key:["MSSQL","\u96dc\u8a18"],tags:["MSSQL","MSSQL\u96dc\u8a18"]},o="\ud83d\udc69\u200d\ud83d\udcbb \u67e5\u8a62\u6240\u6709 Table",s={unversionedId:"daylily/mssqlDaylily/mssqlSelectAllTableName",id:"daylily/mssqlDaylily/mssqlSelectAllTableName",title:"\ud83d\udc69\u200d\ud83d\udcbb \u67e5\u8a62\u6240\u6709 Table",description:"\u67e5\u8a62 Database \u5e95\u4e0b\u6240\u6709 Table",source:"@site/docs/daylily/mssqlDaylily/mssqlSelectAllTableName.md",sourceDirName:"daylily/mssqlDaylily",slug:"/daylily/mssqlDaylily/mssqlSelectAllTableName",permalink:"/docs/daylily/mssqlDaylily/mssqlSelectAllTableName",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/daylily/mssqlDaylily/mssqlSelectAllTableName.md",tags:[{label:"MSSQL",permalink:"/docs/tags/mssql"},{label:"MSSQL\u96dc\u8a18",permalink:"/docs/tags/mssql\u96dc\u8a18"}],version:"current",lastUpdatedAt:1697807585,formattedLastUpdatedAt:"2023\u5e7410\u670820\u65e5",sidebarPosition:30,frontMatter:{sidebar_position:30,description:"\u67e5\u8a62 Database \u5e95\u4e0b\u6240\u6709 Table",key:["MSSQL","\u96dc\u8a18"],tags:["MSSQL","MSSQL\u96dc\u8a18"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc69\u200d\ud83d\udcbb \u589e\u522a\u67e5\u8a62 FK (Foreign Key)",permalink:"/docs/daylily/mssqlDaylily/mssqlFK"},next:{title:"\ud83e\udda4 Oracle \u958b\u767c\u96dc\u8a18",permalink:"/docs/category/-oracle-\u958b\u767c\u96dc\u8a18"}},i={},c=[],p={toc:c},y="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(y,(0,l.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-\u67e5\u8a62\u6240\u6709-table"},"\ud83d\udc69\u200d\ud83d\udcbb \u67e5\u8a62\u6240\u6709 Table"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT TABLE_NAME\nFROM INFORMATION_SCHEMA.TABLES\nWHERE TABLE_TYPE = 'BASE TABLE';\n")))}m.isMDXComponent=!0}}]);