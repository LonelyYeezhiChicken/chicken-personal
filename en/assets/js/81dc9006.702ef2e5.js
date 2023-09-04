"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[2738],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var l=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=l.createContext({}),c=function(e){var t=l.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return l.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},g=l.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),g=n,y=u["".concat(i,".").concat(g)]||u[g]||d[g]||a;return r?l.createElement(y,o(o({ref:t},p),{},{components:r})):l.createElement(y,o({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=g;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9032:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var l=r(7462),n=(r(7294),r(3905));const a={sidebar_position:5,description:"Docker \u4e2d\u5b89\u88dd Postgresql",key:["Postgresql","\u96dc\u8a18"],tags:["Postgresql","Postgresql\u96dc\u8a18","Docker"]},o="\ud83d\udc69\u200d\ud83d\udcbb Docker \u4e2d\u5b89\u88dd Postgresql",s={unversionedId:"daylily/postgreDaylily/setIndocker",id:"daylily/postgreDaylily/setIndocker",title:"\ud83d\udc69\u200d\ud83d\udcbb Docker \u4e2d\u5b89\u88dd Postgresql",description:"Docker \u4e2d\u5b89\u88dd Postgresql",source:"@site/docs/daylily/postgreDaylily/setIndocker.md",sourceDirName:"daylily/postgreDaylily",slug:"/daylily/postgreDaylily/setIndocker",permalink:"/en/docs/daylily/postgreDaylily/setIndocker",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/daylily/postgreDaylily/setIndocker.md",tags:[{label:"Postgresql",permalink:"/en/docs/tags/postgresql"},{label:"Postgresql\u96dc\u8a18",permalink:"/en/docs/tags/postgresql\u96dc\u8a18"},{label:"Docker",permalink:"/en/docs/tags/docker"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Docker \u4e2d\u5b89\u88dd Postgresql",key:["Postgresql","\u96dc\u8a18"],tags:["Postgresql","Postgresql\u96dc\u8a18","Docker"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc18 PostgreSQL \u958b\u767c\u96dc\u8a18",permalink:"/en/docs/category/-postgresql-\u958b\u767c\u96dc\u8a18"},next:{title:"\ud83d\udc69\u200d\ud83d\udcbb \u4f7f\u7528 DBeaver \u9023\u63a5",permalink:"/en/docs/daylily/postgreDaylily/connectByDBeaver"}},i={},c=[{value:"\u5b89\u88dd\u7248\u672c",id:"\u5b89\u88dd\u7248\u672c",level:2},{value:"\u5b89\u88dd\u6b65\u9a5f",id:"\u5b89\u88dd\u6b65\u9a5f",level:2},{value:"1. \u4e0b\u8f09Image",id:"1-\u4e0b\u8f09image",level:3},{value:"2. \u555f\u52d5\u5bb9\u5668",id:"2-\u555f\u52d5\u5bb9\u5668",level:3},{value:"3. \u8a2d\u5b9a oracle \u5e33\u865f\u5bc6\u78bc",id:"3-\u8a2d\u5b9a-oracle-\u5e33\u865f\u5bc6\u78bc",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,l.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-docker-\u4e2d\u5b89\u88dd-postgresql"},"\ud83d\udc69\u200d\ud83d\udcbb Docker \u4e2d\u5b89\u88dd Postgresql"),(0,n.kt)("h2",{id:"\u5b89\u88dd\u7248\u672c"},"\u5b89\u88dd\u7248\u672c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Postgresql: 12.3"),(0,n.kt)("li",{parentName:"ul"},"Image: postgres:12.3"),(0,n.kt)("li",{parentName:"ul"},"OS: Windows11")),(0,n.kt)("h2",{id:"\u5b89\u88dd\u6b65\u9a5f"},"\u5b89\u88dd\u6b65\u9a5f"),(0,n.kt)("h3",{id:"1-\u4e0b\u8f09image"},"1. \u4e0b\u8f09Image"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e0b\u8f09")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull postgres:12.3\n")),(0,n.kt)("h3",{id:"2-\u555f\u52d5\u5bb9\u5668"},"2. \u555f\u52d5\u5bb9\u5668"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5efa\u7acb\u5bb9\u5668\uff0c\u4e26\u5c07 port \u505a\u5c0d\u61c9")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --name postgres12 -e POSTGRES_PASSWORD=[password] -p 5432:5432 -d postgres:12.3\n")),(0,n.kt)("h3",{id:"3-\u8a2d\u5b9a-oracle-\u5e33\u865f\u5bc6\u78bc"},"3. \u8a2d\u5b9a oracle \u5e33\u865f\u5bc6\u78bc"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9032\u5165\u5bb9\u5668")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker exec -it postgres12 /bin/bash\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5207\u63db\u6b0a\u9650")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"su postgres\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5efa\u7acb\u89d2\u8272")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"createuser -P -s -e [user]\n")))}d.isMDXComponent=!0}}]);