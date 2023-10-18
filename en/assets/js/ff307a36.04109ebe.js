"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[9468],{49613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var l=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=l.createContext({}),s=function(e){var t=l.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return l.createElement(c.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),y=s(r),m=n,d=y["".concat(c,".").concat(m)]||y[m]||u[m]||a;return r?l.createElement(d,o(o({ref:t},p),{},{components:r})):l.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[y]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<a;s++)o[s]=r[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,r)}m.displayName="MDXCreateElement"},54337:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var l=r(88028),n=(r(59496),r(49613));const a={sidebar_position:5,description:"Docker \u4e2d\u5b89\u88dd MySQL",key:["MySQL","\u96dc\u8a18"],tags:["MySQL","MySQL\u96dc\u8a18","Docker"]},o="\ud83d\udc69\u200d\ud83d\udcbb Docker \u4e2d\u5b89\u88dd MySQL",i={unversionedId:"daylily/mysqlDaylily/setIndocker",id:"daylily/mysqlDaylily/setIndocker",title:"\ud83d\udc69\u200d\ud83d\udcbb Docker \u4e2d\u5b89\u88dd MySQL",description:"Docker \u4e2d\u5b89\u88dd MySQL",source:"@site/docs/daylily/mysqlDaylily/setIndocker.md",sourceDirName:"daylily/mysqlDaylily",slug:"/daylily/mysqlDaylily/setIndocker",permalink:"/en/docs/daylily/mysqlDaylily/setIndocker",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/daylily/mysqlDaylily/setIndocker.md",tags:[{label:"MySQL",permalink:"/en/docs/tags/my-sql"},{label:"MySQL\u96dc\u8a18",permalink:"/en/docs/tags/my-sql\u96dc\u8a18"},{label:"Docker",permalink:"/en/docs/tags/docker"}],version:"current",lastUpdatedAt:1697605422,formattedLastUpdatedAt:"Oct 18, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Docker \u4e2d\u5b89\u88dd MySQL",key:["MySQL","\u96dc\u8a18"],tags:["MySQL","MySQL\u96dc\u8a18","Docker"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc2c MySQL \u958b\u767c\u96dc\u8a18",permalink:"/en/docs/category/-mysql-\u958b\u767c\u96dc\u8a18"},next:{title:"\ud83d\udc69\u200d\ud83d\udcbb MySQL \u532f\u51fa\u8cc7\u6599\u5eab\u8173\u672c",permalink:"/en/docs/daylily/mysqlDaylily/exportSql"}},c={},s=[{value:"\u5b89\u88dd\u7248\u672c",id:"\u5b89\u88dd\u7248\u672c",level:2},{value:"\u5b89\u88dd\u6b65\u9a5f",id:"\u5b89\u88dd\u6b65\u9a5f",level:2},{value:"1. \u4e0b\u8f09 Image",id:"1-\u4e0b\u8f09-image",level:3},{value:"2. \u555f\u52d5\u5bb9\u5668",id:"2-\u555f\u52d5\u5bb9\u5668",level:3},{value:"3. \u8a2d\u5b9a MySQL \u5e33\u865f\u5bc6\u78bc",id:"3-\u8a2d\u5b9a-mysql-\u5e33\u865f\u5bc6\u78bc",level:3}],p={toc:s},y="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(y,(0,l.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-docker-\u4e2d\u5b89\u88dd-mysql"},"\ud83d\udc69\u200d\ud83d\udcbb Docker \u4e2d\u5b89\u88dd MySQL"),(0,n.kt)("h2",{id:"\u5b89\u88dd\u7248\u672c"},"\u5b89\u88dd\u7248\u672c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"MySQL: mysql:8.0.18"),(0,n.kt)("li",{parentName:"ul"},"Image: library/mysql:8.0.18 (docker \u5b98\u65b9)"),(0,n.kt)("li",{parentName:"ul"},"OS: Windows11")),(0,n.kt)("h2",{id:"\u5b89\u88dd\u6b65\u9a5f"},"\u5b89\u88dd\u6b65\u9a5f"),(0,n.kt)("h3",{id:"1-\u4e0b\u8f09-image"},"1. \u4e0b\u8f09 Image"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e0b\u8f09")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker image pull library/mysql:8.0.18\n")),(0,n.kt)("h3",{id:"2-\u555f\u52d5\u5bb9\u5668"},"2. \u555f\u52d5\u5bb9\u5668"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5efa\u7acb\u5bb9\u5668\uff0c\u4e26\u5c07 port \u505a\u5c0d\u61c9")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"}," docker run --name mysql8 \\\n  -p 3308:3306 \\\n  -e MYSQL_ROOT_PASSWORD=[password] \\\n  -d mysql:8.0.18 --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci\n")),(0,n.kt)("h3",{id:"3-\u8a2d\u5b9a-mysql-\u5e33\u865f\u5bc6\u78bc"},"3. \u8a2d\u5b9a MySQL \u5e33\u865f\u5bc6\u78bc"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9032\u5165\u5bb9\u5668")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker exec -it mysql8 mysql -u root -p\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u958b\u653e\u9060\u7aef\u9023\u7dda")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"CREATE USER 'root'@'127.0.0.1' IDENTIFIED BY '[your_password]';\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u958b\u653e\u9023\u7dda\u6b0a\u9650")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"GRANT ALL PRIVILEGES ON *.* TO 'root'@'127.0.0.1';\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u66f4\u65b0\u72c0\u614b")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"FLUSH PRIVILEGES;\n")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f7f\u7528 DBeaver \u9023\u7dda\uff0c\u9700\u9032\u884c\u4ee5\u4e0b\u8a2d\u5b9a"),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"Connection settings > Edit Driver Settings"),(0,n.kt)("li",{parentName:"ol"},"Driver properties"),(0,n.kt)("li",{parentName:"ol"},"\u5c07 useSSL \u6539\u70ba false"),(0,n.kt)("li",{parentName:"ol"},"\u5c07 allowPublicKeyRetrieval \u6539\u70ba true"))))}u.isMDXComponent=!0}}]);