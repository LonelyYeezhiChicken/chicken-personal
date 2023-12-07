"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[1533],{49613:(e,n,o)=>{o.d(n,{Zo:()=>m,kt:()=>d});var t=o(59496);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function l(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function a(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?l(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function s(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)o=l[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)o=l[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=t.createContext({}),p=function(e){var n=t.useContext(i),o=n;return e&&(o="function"==typeof e?e(n):a(a({},n),e)),o},m=function(e){var n=p(e.components);return t.createElement(i.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(o),u=r,d=c["".concat(i,".").concat(u)]||c[u]||g[u]||l;return o?t.createElement(d,a(a({ref:n},m),{},{components:o})):t.createElement(d,a({ref:n},m))}));function d(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=o.length,a=new Array(l);a[0]=u;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[c]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<l;p++)a[p]=o[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}u.displayName="MDXCreateElement"},52530:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var t=o(88028),r=(o(59496),o(49613));const l={sidebar_position:10,description:"Docker \u4e2d\u5b89\u88dd Mongo Express",key:["MongoDB","\u96dc\u8a18"],tags:["MongoDB","MongoDB\u96dc\u8a18","Docker"]},a="\ud83d\udc69\u200d\ud83d\udcbb Docker \u4e2d\u5b89\u88dd Mongo Express",s={unversionedId:"daylily/mongoDBDaylily/setMongoExpress",id:"daylily/mongoDBDaylily/setMongoExpress",title:"\ud83d\udc69\u200d\ud83d\udcbb Docker \u4e2d\u5b89\u88dd Mongo Express",description:"Docker \u4e2d\u5b89\u88dd Mongo Express",source:"@site/docs/daylily/mongoDBDaylily/setMongoExpress.md",sourceDirName:"daylily/mongoDBDaylily",slug:"/daylily/mongoDBDaylily/setMongoExpress",permalink:"/en/docs/daylily/mongoDBDaylily/setMongoExpress",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/daylily/mongoDBDaylily/setMongoExpress.md",tags:[{label:"MongoDB",permalink:"/en/docs/tags/mongo-db"},{label:"MongoDB\u96dc\u8a18",permalink:"/en/docs/tags/mongo-db\u96dc\u8a18"},{label:"Docker",permalink:"/en/docs/tags/docker"}],version:"current",lastUpdatedAt:1701959684,formattedLastUpdatedAt:"Dec 7, 2023",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"Docker \u4e2d\u5b89\u88dd Mongo Express",key:["MongoDB","\u96dc\u8a18"],tags:["MongoDB","MongoDB\u96dc\u8a18","Docker"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc69\u200d\ud83d\udcbb Docker \u4e2d\u5b89\u88dd MongoDB",permalink:"/en/docs/daylily/mongoDBDaylily/setIndocker"},next:{title:"\ud83d\udc2c MySQL \u958b\u767c\u96dc\u8a18",permalink:"/en/docs/category/-mysql-\u958b\u767c\u96dc\u8a18"}},i={},p=[{value:"\u95dc\u65bc Mongo Express",id:"\u95dc\u65bc-mongo-express",level:2},{value:"\u5b89\u88dd\u7248\u672c",id:"\u5b89\u88dd\u7248\u672c",level:3},{value:"\u5b89\u88dd\u6b65\u9a5f (MongoDB)",id:"\u5b89\u88dd\u6b65\u9a5f-mongodb",level:2},{value:"\u74b0\u5883\u6e96\u5099",id:"\u74b0\u5883\u6e96\u5099",level:3},{value:"1. \u4e0b\u8f09 Image",id:"1-\u4e0b\u8f09-image",level:3},{value:"2. \u555f\u52d5 MongoDB \u5bb9\u5668",id:"2-\u555f\u52d5-mongodb-\u5bb9\u5668",level:3},{value:"3. \u8a2d\u5b9a MongoDB \u5e33\u865f\u5bc6\u78bc",id:"3-\u8a2d\u5b9a-mongodb-\u5e33\u865f\u5bc6\u78bc",level:3},{value:"4. \u555f\u52d5 Mongo Express \u5bb9\u5668",id:"4-\u555f\u52d5-mongo-express-\u5bb9\u5668",level:3}],m={toc:p},c="wrapper";function g(e){let{components:n,...o}=e;return(0,r.kt)(c,(0,t.Z)({},m,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-docker-\u4e2d\u5b89\u88dd-mongo-express"},"\ud83d\udc69\u200d\ud83d\udcbb Docker \u4e2d\u5b89\u88dd Mongo Express"),(0,r.kt)("h2",{id:"\u95dc\u65bc-mongo-express"},"\u95dc\u65bc Mongo Express"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Mongo Express \u662f Mongo \u7684 GUI")),(0,r.kt)("h3",{id:"\u5b89\u88dd\u7248\u672c"},"\u5b89\u88dd\u7248\u672c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MongoDB: 4.1"),(0,r.kt)("li",{parentName:"ul"},"MongoDB Image: mongo:4.1"),(0,r.kt)("li",{parentName:"ul"},"Mongo Express: latest"),(0,r.kt)("li",{parentName:"ul"},"Mongo Express Image: mongo-express:latest"),(0,r.kt)("li",{parentName:"ul"},"OS: Windows11")),(0,r.kt)("h2",{id:"\u5b89\u88dd\u6b65\u9a5f-mongodb"},"\u5b89\u88dd\u6b65\u9a5f (MongoDB)"),(0,r.kt)("h3",{id:"\u74b0\u5883\u6e96\u5099"},"\u74b0\u5883\u6e96\u5099"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5efa\u7acb Network \u4f7f\u7528 bridge \u6a21\u5f0f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker network create -d bridge mongo-net\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u78ba\u8a8d\u662f\u5426\u5efa\u7acb\u6210\u529f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker network ls\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6709\u770b\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"mongo-net")," \u8868\u793a\u5efa\u7acb\u6210\u529f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"NETWORK ID     NAME                   DRIVER    SCOPE\n004c88130dc3   bridge                 bridge    local\n48b2a44fc084   host                   host      local\na5b985174541   mongo-net              bridge    local\n")),(0,r.kt)("h3",{id:"1-\u4e0b\u8f09-image"},"1. \u4e0b\u8f09 Image"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e0b\u8f09 MongoDB")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull mongo:4.1\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e0b\u8f09 Mongo Express")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull mongo-express:latest\n")),(0,r.kt)("h3",{id:"2-\u555f\u52d5-mongodb-\u5bb9\u5668"},"2. \u555f\u52d5 MongoDB \u5bb9\u5668"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5efa\u7acb\u5bb9\u5668\uff0c\u4e26\u5c07 port \u505a\u5c0d\u61c9\uff0c\u4e26\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"mongo-net")," \u7db2\u8def")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -itd --name mongo4 --network mongo-net -p 27017:27017 mongo:4.1\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u78ba\u8a8d\u7248\u672c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'docker exec mongo4 mongo --eval "print(version())"\n')),(0,r.kt)("h3",{id:"3-\u8a2d\u5b9a-mongodb-\u5e33\u865f\u5bc6\u78bc"},"3. \u8a2d\u5b9a MongoDB \u5e33\u865f\u5bc6\u78bc"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9032\u5165\u5bb9\u5668")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker exec -it mongo4 mongo admin\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MongoDB 6.0 \u53ca\u4ee5\u4e0a\u7248\u672c\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker exec -it mongo mongosh admin\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5efa\u7acb\u5e33\u865f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"db.createUser({ user:'admin',pwd:'[pwd]',roles:[ { role:'userAdminAnyDatabase', db: 'admin'},\"readWriteAnyDatabase\"]});\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9023\u7dda\u6e2c\u8a66")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"}," db.auth('admin', '[pwd]')\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5be6\u969b\u756b\u9762")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'docker exec -it mongo4 mongo admin\nMongoDB shell version v4.1.13\nconnecting to: mongodb://127.0.0.1:27017/admin?compressors=disabled&gssapiServiceName=mongodb\nImplicit session: session { "id" : UUID("b5414ff1-513c-4c4c-b533-b1bfb76f2acd") }\nMongoDB server version: 4.1.13\nWelcome to the MongoDB shell.\nFor interactive help, type "help".\nFor more comprehensive documentation, see\n        http://docs.mongodb.org/\nQuestions? Try the support group\n        http://groups.google.com/group/mongodb-user\n> db.createUser({ user:\'admin\',pwd:\'test123\',roles:[ { role:\'userAdminAnyDatabase\', db: \'admin\'},"readWriteAnyDatabase"]});\nSuccessfully added user: {\n        "user" : "admin",\n        "roles" : [\n                {\n                        "role" : "userAdminAnyDatabase",\n                        "db" : "admin"\n                },\n                "readWriteAnyDatabase"\n        ]\n}\n> db.auth(\'admin\', \'test123\')\n1\n>\n')),(0,r.kt)("h3",{id:"4-\u555f\u52d5-mongo-express-\u5bb9\u5668"},"4. \u555f\u52d5 Mongo Express \u5bb9\u5668"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ME_CONFIG_MONGODB_SERVER: MongoDB container\u7684\u540d\u7a31"),(0,r.kt)("li",{parentName:"ul"},"ME_CONFIG_MONGODB_ADMINUSERNAME: MongoDB \u7684\u6700\u9ad8\u4f7f\u7528\u8005\u5e33\u865f"),(0,r.kt)("li",{parentName:"ul"},"ME_CONFIG_MONGODB_ADMINPASSWORD: MongoDB \u7684\u6700\u9ad8\u4f7f\u7528\u8005\u5bc6\u78bc"),(0,r.kt)("li",{parentName:"ul"},"ME_CONFIG_BASICAUTH_USERNAME: \u9023\u7dda\u81f3 Mongo Express \u7db2\u9801\u6642\u6240\u9700\u7684\u767b\u5165\u5e33\u865f"),(0,r.kt)("li",{parentName:"ul"},"ME_CONFIG_BASICAUTH_PASSWORD: \u9023\u7dda\u81f3 Mongo Express \u7db2\u9801\u6642\u6240\u9700\u7684\u767b\u5165\u5bc6\u78bc")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --name mongo_express \\\n--network mongo-net  \\\n-e ME_CONFIG_MONGODB_SERVER=mongo4  \\\n-e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \\\n-e ME_CONFIG_MONGODB_ADMINPASSWORD=test123 \\\n-e ME_CONFIG_BASICAUTH_USERNAME=admin \\\n-e ME_CONFIG_BASICAUTH_PASSWORD=test123 \\\n-p 8081:8081 mongo-express:latest\n")))}g.isMDXComponent=!0}}]);