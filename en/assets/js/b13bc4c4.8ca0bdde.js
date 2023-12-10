"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[1896],{49613:(e,n,o)=>{o.d(n,{Zo:()=>d,kt:()=>g});var t=o(59496);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function l(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function i(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=t.createContext({}),c=function(e){var n=t.useContext(s),o=n;return e&&(o="function"==typeof e?e(n):l(l({},n),e)),o},d=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(o),u=r,g=p["".concat(s,".").concat(u)]||p[u]||m[u]||a;return o?t.createElement(g,l(l({ref:n},d),{},{components:o})):t.createElement(g,l({ref:n},d))}));function g(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=o[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,o)}u.displayName="MDXCreateElement"},40640:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var t=o(88028),r=(o(59496),o(49613));const a={sidebar_position:5,description:"Docker \u4e2d\u5b89\u88dd MongoDB",key:["MongoDB","\u96dc\u8a18"],tags:["MongoDB","MongoDB\u96dc\u8a18","Docker"]},l="\ud83d\udc69\u200d\ud83d\udcbb Docker \u4e2d\u5b89\u88dd MongoDB",i={unversionedId:"daylily/mongoDBDaylily/setIndocker",id:"daylily/mongoDBDaylily/setIndocker",title:"\ud83d\udc69\u200d\ud83d\udcbb Docker \u4e2d\u5b89\u88dd MongoDB",description:"Docker \u4e2d\u5b89\u88dd MongoDB",source:"@site/docs/daylily/mongoDBDaylily/setIndocker.md",sourceDirName:"daylily/mongoDBDaylily",slug:"/daylily/mongoDBDaylily/setIndocker",permalink:"/en/docs/daylily/mongoDBDaylily/setIndocker",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/daylily/mongoDBDaylily/setIndocker.md",tags:[{label:"MongoDB",permalink:"/en/docs/tags/mongo-db"},{label:"MongoDB\u96dc\u8a18",permalink:"/en/docs/tags/mongo-db\u96dc\u8a18"},{label:"Docker",permalink:"/en/docs/tags/docker"}],version:"current",lastUpdatedAt:1702200765,formattedLastUpdatedAt:"Dec 10, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Docker \u4e2d\u5b89\u88dd MongoDB",key:["MongoDB","\u96dc\u8a18"],tags:["MongoDB","MongoDB\u96dc\u8a18","Docker"]},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udf3f MongoDB \u958b\u767c\u96dc\u8a18",permalink:"/en/docs/category/-mongodb-\u958b\u767c\u96dc\u8a18"},next:{title:"\ud83d\udc69\u200d\ud83d\udcbb Docker \u4e2d\u5b89\u88dd Mongo Express",permalink:"/en/docs/daylily/mongoDBDaylily/setMongoExpress"}},s={},c=[{value:"\u5b89\u88dd\u7248\u672c",id:"\u5b89\u88dd\u7248\u672c",level:2},{value:"\u5b89\u88dd\u6b65\u9a5f",id:"\u5b89\u88dd\u6b65\u9a5f",level:2},{value:"1. \u4e0b\u8f09 Image",id:"1-\u4e0b\u8f09-image",level:3},{value:"2. \u555f\u52d5\u5bb9\u5668",id:"2-\u555f\u52d5\u5bb9\u5668",level:3},{value:"3. \u8a2d\u5b9a MongoDB \u5e33\u865f\u5bc6\u78bc",id:"3-\u8a2d\u5b9a-mongodb-\u5e33\u865f\u5bc6\u78bc",level:3}],d={toc:c},p="wrapper";function m(e){let{components:n,...o}=e;return(0,r.kt)(p,(0,t.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-docker-\u4e2d\u5b89\u88dd-mongodb"},"\ud83d\udc69\u200d\ud83d\udcbb Docker \u4e2d\u5b89\u88dd MongoDB"),(0,r.kt)("h2",{id:"\u5b89\u88dd\u7248\u672c"},"\u5b89\u88dd\u7248\u672c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MongoDB: 4.1"),(0,r.kt)("li",{parentName:"ul"},"Image: mongo:4.1"),(0,r.kt)("li",{parentName:"ul"},"OS: Windows11")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u9700\u8981\u8207 Mongo Express \u7684\u5bb9\u5668\u505a\u96c6\u6210\uff0c\u76f4\u63a5\u8df3\u81f3 ",(0,r.kt)("a",{parentName:"p",href:"https://blog.lychicken.com/docs/daylily/mongoDBDaylily/setMongoExpress"},"Docker \u4e2d\u5b89\u88dd MongoDB"))),(0,r.kt)("h2",{id:"\u5b89\u88dd\u6b65\u9a5f"},"\u5b89\u88dd\u6b65\u9a5f"),(0,r.kt)("h3",{id:"1-\u4e0b\u8f09-image"},"1. \u4e0b\u8f09 Image"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e0b\u8f09")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull mongo:4.1\n")),(0,r.kt)("h3",{id:"2-\u555f\u52d5\u5bb9\u5668"},"2. \u555f\u52d5\u5bb9\u5668"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5efa\u7acb\u5bb9\u5668\uff0c\u4e26\u5c07 port \u505a\u5c0d\u61c9")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -itd --name mongo4 -p 27017:27017 mongo:4.1 --auth\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u78ba\u8a8d\u7248\u672c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'docker exec mongo4 mongo --eval "print(version())"\n')),(0,r.kt)("h3",{id:"3-\u8a2d\u5b9a-mongodb-\u5e33\u865f\u5bc6\u78bc"},"3. \u8a2d\u5b9a MongoDB \u5e33\u865f\u5bc6\u78bc"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9032\u5165\u5bb9\u5668")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker exec -it mongo4 mongo admin\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MongoDB 6.0 \u53ca\u4ee5\u4e0a\u7248\u672c\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker exec -it mongo mongosh admin\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5efa\u7acb\u5e33\u865f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"db.createUser({ user:'admin',pwd:'[pwd]',roles:[ { role:'userAdminAnyDatabase', db: 'admin'},\"readWriteAnyDatabase\"]});\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9023\u7dda\u6e2c\u8a66")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"}," db.auth('admin', '[pwd]')\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5be6\u969b\u756b\u9762")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'docker exec -it mongo4 mongo admin\nMongoDB shell version v4.1.13\nconnecting to: mongodb://127.0.0.1:27017/admin?compressors=disabled&gssapiServiceName=mongodb\nImplicit session: session { "id" : UUID("b5414ff1-513c-4c4c-b533-b1bfb76f2acd") }\nMongoDB server version: 4.1.13\nWelcome to the MongoDB shell.\nFor interactive help, type "help".\nFor more comprehensive documentation, see\n        http://docs.mongodb.org/\nQuestions? Try the support group\n        http://groups.google.com/group/mongodb-user\n> db.createUser({ user:\'admin\',pwd:\'test123\',roles:[ { role:\'userAdminAnyDatabase\', db: \'admin\'},"readWriteAnyDatabase"]});\nSuccessfully added user: {\n        "user" : "admin",\n        "roles" : [\n                {\n                        "role" : "userAdminAnyDatabase",\n                        "db" : "admin"\n                },\n                "readWriteAnyDatabase"\n        ]\n}\n> db.auth(\'admin\', \'test123\')\n1\n>\n')))}m.isMDXComponent=!0}}]);