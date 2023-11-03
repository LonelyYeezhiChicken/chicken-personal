"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[9982],{49613:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=c(t),p=a,u=d["".concat(o,".").concat(p)]||d[p]||y[p]||l;return t?r.createElement(u,s(s({ref:n},m),{},{components:t})):r.createElement(u,s({ref:n},m))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,s=new Array(l);s[0]=p;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<l;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},68741:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=t(88028),a=(t(59496),t(49613));const l={sidebar_position:25,description:"\u589e\u522a\u67e5\u8a62 FK",key:["MSSQL","\u96dc\u8a18"],tags:["MSSQL","MSSQL\u96dc\u8a18"]},s="\ud83d\udc69\u200d\ud83d\udcbb \u589e\u522a\u67e5\u8a62 FK (Foreign Key)",i={unversionedId:"daylily/mssqlDaylily/mssqlFK",id:"daylily/mssqlDaylily/mssqlFK",title:"\ud83d\udc69\u200d\ud83d\udcbb \u589e\u522a\u67e5\u8a62 FK (Foreign Key)",description:"\u589e\u522a\u67e5\u8a62 FK",source:"@site/docs/daylily/mssqlDaylily/mssqlFK.md",sourceDirName:"daylily/mssqlDaylily",slug:"/daylily/mssqlDaylily/mssqlFK",permalink:"/en/docs/daylily/mssqlDaylily/mssqlFK",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/daylily/mssqlDaylily/mssqlFK.md",tags:[{label:"MSSQL",permalink:"/en/docs/tags/mssql"},{label:"MSSQL\u96dc\u8a18",permalink:"/en/docs/tags/mssql\u96dc\u8a18"}],version:"current",lastUpdatedAt:1699019226,formattedLastUpdatedAt:"Nov 3, 2023",sidebarPosition:25,frontMatter:{sidebar_position:25,description:"\u589e\u522a\u67e5\u8a62 FK",key:["MSSQL","\u96dc\u8a18"],tags:["MSSQL","MSSQL\u96dc\u8a18"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc69\u200d\ud83d\udcbb \u5b57\u4e32\u8f49\u578b",permalink:"/en/docs/daylily/mssqlDaylily/mssqlCast"},next:{title:"\ud83d\udc69\u200d\ud83d\udcbb \u67e5\u8a62\u6240\u6709 Table",permalink:"/en/docs/daylily/mssqlDaylily/mssqlSelectAllTableName"}},o={},c=[{value:"\u67e5\u8a62\u76ee\u524d\u6240\u6709 Table \u7684 FK",id:"\u67e5\u8a62\u76ee\u524d\u6240\u6709-table-\u7684-fk",level:2},{value:"\u5efa\u7acb FK",id:"\u5efa\u7acb-fk",level:2},{value:"\u522a\u9664 FK",id:"\u522a\u9664-fk",level:2},{value:"\u4e00\u6b21\u89e3\u9664\u6240\u6709 FK",id:"\u4e00\u6b21\u89e3\u9664\u6240\u6709-fk",level:2},{value:"REF",id:"ref",level:2}],m={toc:c},d="wrapper";function y(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-\u589e\u522a\u67e5\u8a62-fk-foreign-key"},"\ud83d\udc69\u200d\ud83d\udcbb \u589e\u522a\u67e5\u8a62 FK (Foreign Key)"),(0,a.kt)("h2",{id:"\u67e5\u8a62\u76ee\u524d\u6240\u6709-table-\u7684-fk"},"\u67e5\u8a62\u76ee\u524d\u6240\u6709 Table \u7684 FK"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT \n    FK.name AS 'FK Name',\n    t.name AS 'Table Name',\n    c1.name AS 'FK List',\n    t2.name AS 'FK Table',\n    c2.name AS 'FK Table List'\nFROM sys.foreign_keys FK\nINNER JOIN sys.tables t\n    ON FK.parent_object_id = t.object_id\nINNER JOIN sys.tables t2\n    ON FK.referenced_object_id = t2.object_id\nINNER JOIN sys.foreign_key_columns fkc\n    ON fkc.constraint_object_id = FK.object_id\nINNER JOIN sys.columns c1\n    ON fkc.parent_column_id = c1.column_id AND c1.object_id = t.object_id\nINNER JOIN sys.columns c2\n    ON fkc.referenced_column_id = c2.column_id AND c2.object_id = t2.object_id\nGO\n")),(0,a.kt)("h2",{id:"\u5efa\u7acb-fk"},"\u5efa\u7acb FK"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [dbo].[TableName]  WITH CHECK ADD  CONSTRAINT [FK_ForeignKeyName] FOREIGN KEY([TableKey])\nREFERENCES [dbo].[FKTableName] ([FKTableNameId])\nGO\n")),(0,a.kt)("h2",{id:"\u522a\u9664-fk"},"\u522a\u9664 FK"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [dbo].[TableName] DROP CONSTRAINT [FK_ForeignKeyName]\nGO\n")),(0,a.kt)("h2",{id:"\u4e00\u6b21\u89e3\u9664\u6240\u6709-fk"},"\u4e00\u6b21\u89e3\u9664\u6240\u6709 FK"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    'IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N''' + DC.Name + ''') and Type = ''D'')\n            ALTER TABLE [' + OBJECT_SCHEMA_NAME(SO.ID) + '].[' + SO.Name + '] DROP CONSTRAINT [' + DC.Name + ']'\nFROM SysObjects SO\nINNER JOIN SysColumns SC\n    ON SO.ID = SC.ID\nINNER JOIN sys.default_constraints DC\n    ON SO.ID = DC.Parent_object_id\n        AND SC.colid = DC.Parent_column_id\nWHERE SO.XTYPE = 'U'\nAND SC.Name = 'msrepl_tran_version'\nUNION\nSELECT\n    'IF EXISTS (SELECT * FROM dbo.syscolumns where id = OBJECT_ID(N''' + SO.Name + ''') and Name = ''msrepl_tran_version'')\n           ALTER TABLE [' + OBJECT_SCHEMA_NAME(SO.ID) + '].[' + SO.Name + '] DROP COLUMN [msrepl_tran_version]  '\nFROM SysObjects SO\nINNER JOIN SysColumns SC\n    ON SO.ID = SC.ID\nINNER JOIN sys.default_constraints DC\n    ON SO.ID = DC.Parent_object_id\n        AND SC.colid = DC.Parent_column_id\nWHERE SO.XTYPE = 'U'\nAND SC.Name = 'msrepl_tran_version'\nORDER BY 1\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"ref"},"REF"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://shunnien.github.io/2017/05/06/remove-database-relationship-constraint/"},"SQL Server \u4e2d\uff0c\u79fb\u9664\u8cc7\u6599\u5eab\u4e2d\u6240\u6709\u7684\u95dc\u806f\u9650\u5236"))))}y.isMDXComponent=!0}}]);