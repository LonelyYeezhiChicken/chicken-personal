"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[4437],{49613:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var l=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,l,a=function(e,t){if(null==e)return{};var r,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=l.createContext({}),p=function(e){var t=l.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return l.createElement(i.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(r),u=a,k=s["".concat(i,".").concat(u)]||s[u]||y[u]||n;return r?l.createElement(k,o(o({ref:t},d),{},{components:r})):l.createElement(k,o({ref:t},d))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[s]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<n;p++)o[p]=r[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2388:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>y,frontMatter:()=>n,metadata:()=>c,toc:()=>p});var l=r(88028),a=(r(59496),r(49613));const n={sidebar_position:10,description:"\u4f7f\u7528 sqldeveloper \u9023\u63a5 Oracle",key:["Oracle","\u96dc\u8a18"],tags:["Oracle","Oracle\u96dc\u8a18"]},o="\ud83d\udc69\u200d\ud83d\udcbb \u4f7f\u7528 sqldeveloper \u9023\u63a5",c={unversionedId:"daylily/oracleDaylily/connectBydev",id:"daylily/oracleDaylily/connectBydev",title:"\ud83d\udc69\u200d\ud83d\udcbb \u4f7f\u7528 sqldeveloper \u9023\u63a5",description:"\u4f7f\u7528 sqldeveloper \u9023\u63a5 Oracle",source:"@site/docs/daylily/oracleDaylily/connectBydev.md",sourceDirName:"daylily/oracleDaylily",slug:"/daylily/oracleDaylily/connectBydev",permalink:"/en/docs/daylily/oracleDaylily/connectBydev",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/daylily/oracleDaylily/connectBydev.md",tags:[{label:"Oracle",permalink:"/en/docs/tags/oracle"},{label:"Oracle\u96dc\u8a18",permalink:"/en/docs/tags/oracle\u96dc\u8a18"}],version:"current",lastUpdatedAt:1711175258,formattedLastUpdatedAt:"Mar 23, 2024",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"\u4f7f\u7528 sqldeveloper \u9023\u63a5 Oracle",key:["Oracle","\u96dc\u8a18"],tags:["Oracle","Oracle\u96dc\u8a18"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc69\u200d\ud83d\udcbb Docker \u4e2d\u5b89\u88dd Oracle",permalink:"/en/docs/daylily/oracleDaylily/setIndocker"},next:{title:"\ud83d\udc69\u200d\ud83d\udcbb \u522a\u9664\u8cc7\u6599\u8868",permalink:"/en/docs/daylily/oracleDaylily/dropTable"}},i={},p=[{value:"\u4e0b\u8f09\u8207\u9810\u5148\u6e96\u5099",id:"\u4e0b\u8f09\u8207\u9810\u5148\u6e96\u5099",level:2},{value:"SQL Developer",id:"sql-developer",level:3},{value:"oracle11g",id:"oracle11g",level:3},{value:"\u9023\u7dda",id:"\u9023\u7dda",level:2},{value:"1. \u65b0\u589e\u9023\u7dda",id:"1-\u65b0\u589e\u9023\u7dda",level:3},{value:"2. \u6e2c\u8a66\u9023\u7dda",id:"2-\u6e2c\u8a66\u9023\u7dda",level:3},{value:"3. \u9023\u7dda",id:"3-\u9023\u7dda",level:3}],d={toc:p},s="wrapper";function y(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,l.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-\u4f7f\u7528-sqldeveloper-\u9023\u63a5"},"\ud83d\udc69\u200d\ud83d\udcbb \u4f7f\u7528 sqldeveloper \u9023\u63a5"),(0,a.kt)("h2",{id:"\u4e0b\u8f09\u8207\u9810\u5148\u6e96\u5099"},"\u4e0b\u8f09\u8207\u9810\u5148\u6e96\u5099"),(0,a.kt)("h3",{id:"sql-developer"},"SQL Developer"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.oracle.com/database/sqldeveloper/technologies/download/"},"\u9023\u7d50")),(0,a.kt)("h3",{id:"oracle11g"},"oracle11g"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://blog.lychicken.com/docs/daylily/oracleDaylily/setIndocker"},"\u5b89\u88dd\u6b65\u9a5f")),(0,a.kt)("h2",{id:"\u9023\u7dda"},"\u9023\u7dda"),(0,a.kt)("h3",{id:"1-\u65b0\u589e\u9023\u7dda"},"1. \u65b0\u589e\u9023\u7dda"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9ede\u9078 UI \u5de6\u5074\u9078\u55ae\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"+")),(0,a.kt)("li",{parentName:"ul"},"\u586b\u5beb\u4ee5\u4e0b\u8cc7\u8a0a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Name: oracle11g-docker (\u53ef\u81ea\u884c\u5b9a\u7fa9)"),(0,a.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528\u8005\u540d\u7a31: system"),(0,a.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528\u8005\u5bc6\u78bc: ****"),(0,a.kt)("p",{parentName:"blockquote"},"\u4e3b\u6a5f\u540d\u7a31: localhost (\u6216\u662f\u5176\u4ed6\u4e3b\u6a5fID)"),(0,a.kt)("p",{parentName:"blockquote"},"\u9023\u63a5\u57e0: 1521"),(0,a.kt)("p",{parentName:"blockquote"},"SID: xe")),(0,a.kt)("h3",{id:"2-\u6e2c\u8a66\u9023\u7dda"},"2. \u6e2c\u8a66\u9023\u7dda"),(0,a.kt)("p",null,"\u9ede\u9078\u6e2c\u8a66\u6309\u9215"),(0,a.kt)("p",null,"\u756b\u9762\u986f\u793a\u9023\u7dda\u6210\u529f\u5373\u53ef"),(0,a.kt)("h3",{id:"3-\u9023\u7dda"},"3. \u9023\u7dda"),(0,a.kt)("p",null,"\u9ede\u9078\u9023\u7dda\u6309\u9215"),(0,a.kt)("p",null,"\u5373\u53ef\u9023\u4e0a\u8cc7\u6599\u5eab"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"ref: ",(0,a.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/605595017"},"Docker\u4e2d\u5b89\u88c5Oracle-12c")))}y.isMDXComponent=!0}}]);