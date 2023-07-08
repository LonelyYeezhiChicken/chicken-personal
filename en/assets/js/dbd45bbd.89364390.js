"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[8301],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),y=c(n),m=l,d=y["".concat(s,".").concat(m)]||y[m]||u[m]||a;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[y]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5051:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),l=(n(7294),n(3905));const a={sidebar_position:5,description:"\u67e5\u8a62\u6240\u6709Table\u7b46\u6578",key:["MSSQL","\u96dc\u8a18"],tags:["MSSQL","MSSQL\u96dc\u8a18"]},o="\ud83d\udc69\u200d\ud83d\udcbb \u67e5\u8a62\u6240\u6709Table\u7b46\u6578",i={unversionedId:"daylily/mssqlDaylily/mssqlAllTableCount",id:"daylily/mssqlDaylily/mssqlAllTableCount",title:"\ud83d\udc69\u200d\ud83d\udcbb \u67e5\u8a62\u6240\u6709Table\u7b46\u6578",description:"\u67e5\u8a62\u6240\u6709Table\u7b46\u6578",source:"@site/docs/daylily/mssqlDaylily/mssqlAllTableCount.md",sourceDirName:"daylily/mssqlDaylily",slug:"/daylily/mssqlDaylily/mssqlAllTableCount",permalink:"/en/docs/daylily/mssqlDaylily/mssqlAllTableCount",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/daylily/mssqlDaylily/mssqlAllTableCount.md",tags:[{label:"MSSQL",permalink:"/en/docs/tags/mssql"},{label:"MSSQL\u96dc\u8a18",permalink:"/en/docs/tags/mssql\u96dc\u8a18"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"\u67e5\u8a62\u6240\u6709Table\u7b46\u6578",key:["MSSQL","\u96dc\u8a18"],tags:["MSSQL","MSSQL\u96dc\u8a18"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc69\u200d\ud83d\udcbb \u67e5\u8a62\u5360\u7528\u786c\u789f",permalink:"/en/docs/daylily/mssqlDaylily/mssqlSpSpaceused"},next:{title:"C#\u57fa\u790e\u89c0\u5ff5",permalink:"/en/docs/category/c\u57fa\u790e\u89c0\u5ff5"}},s={},c=[],p={toc:c},y="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(y,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"-\u67e5\u8a62\u6240\u6709table\u7b46\u6578"},"\ud83d\udc69\u200d\ud83d\udcbb \u67e5\u8a62\u6240\u6709Table\u7b46\u6578"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"USE [DB] \nGO \nSELECT  O.NAME '\u8cc7\u6599\u8868\u540d\u7a31', P.ROWS '\u7e3d\u6578' \nFROM SYS.OBJECTS O INNER JOIN SYS.SCHEMAS S \nON O.SCHEMA_ID = S.SCHEMA_ID \nINNER JOIN SYS.PARTITIONS P \nON O.OBJECT_ID = P.OBJECT_ID \nWHERE (O.TYPE = 'U') AND \n(P.INDEX_ID IN (0,1)) \nORDER BY S.NAME, O.NAME ASC; \nGO\n")))}u.isMDXComponent=!0}}]);