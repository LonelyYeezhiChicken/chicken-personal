"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[7325],{49613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var o=r(59496);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,l=function(e,t){if(null==e)return{};var r,o,l={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=l,m=u["".concat(c,".").concat(d)]||u[d]||k[d]||n;return r?o.createElement(m,a(a({ref:t},s),{},{components:r})):o.createElement(m,a({ref:t},s))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,a=new Array(n);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:l,a[1]=i;for(var p=2;p<n;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},51212:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>k,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var o=r(88028),l=(r(59496),r(49613));const n={sidebar_position:5,description:"Docker \u4e2d\u5b89\u88dd ELK",key:["ELK","tool","Docker"],tags:["ELK","tool","Docker"]},a="\ud83d\udc32 Docker \u4e2d\u5b89\u88dd ELK",i={unversionedId:"daylilyTool/toolELK/elkInDocker",id:"daylilyTool/toolELK/elkInDocker",title:"\ud83d\udc32 Docker \u4e2d\u5b89\u88dd ELK",description:"Docker \u4e2d\u5b89\u88dd ELK",source:"@site/docs/daylilyTool/toolELK/elkInDocker.md",sourceDirName:"daylilyTool/toolELK",slug:"/daylilyTool/toolELK/elkInDocker",permalink:"/docs/daylilyTool/toolELK/elkInDocker",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/daylilyTool/toolELK/elkInDocker.md",tags:[{label:"ELK",permalink:"/docs/tags/elk"},{label:"tool",permalink:"/docs/tags/tool"},{label:"Docker",permalink:"/docs/tags/docker"}],version:"current",lastUpdatedAt:1711175258,formattedLastUpdatedAt:"2024\u5e743\u670823\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Docker \u4e2d\u5b89\u88dd ELK",key:["ELK","tool","Docker"],tags:["ELK","tool","Docker"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc32 Elastic stack \u7b46\u8a18",permalink:"/docs/category/-elastic-stack-\u7b46\u8a18"},next:{title:"\ud83d\udc32 \u8490\u96c6 ActiveMQ Logs",permalink:"/docs/daylilyTool/toolELK/addActiveMq"}},c={},p=[{value:"\u4e0b\u8f09\u8207\u5b89\u88dd",id:"\u4e0b\u8f09\u8207\u5b89\u88dd",level:2},{value:"\u4e0b\u8f09",id:"\u4e0b\u8f09",level:3},{value:"\u5b89\u88dd",id:"\u5b89\u88dd",level:3},{value:"\u555f\u52d5",id:"\u555f\u52d5",level:2},{value:"\u5f8c\u53f0(kibana)",id:"\u5f8c\u53f0kibana",level:3}],s={toc:p},u="wrapper";function k(e){let{components:t,...r}=e;return(0,l.kt)(u,(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"-docker-\u4e2d\u5b89\u88dd-elk"},"\ud83d\udc32 Docker \u4e2d\u5b89\u88dd ELK"),(0,l.kt)("h2",{id:"\u4e0b\u8f09\u8207\u5b89\u88dd"},"\u4e0b\u8f09\u8207\u5b89\u88dd"),(0,l.kt)("h3",{id:"\u4e0b\u8f09"},"\u4e0b\u8f09"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65bc\u5b98\u65b9 Github ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/deviantony/docker-elk/releases"},"\u4e0b\u8f09")),(0,l.kt)("li",{parentName:"ul"},"\u672c\u6b21\u4e0b\u8f09 ",(0,l.kt)("inlineCode",{parentName:"li"},"8.2305.1")," \u7248")),(0,l.kt)("h3",{id:"\u5b89\u88dd"},"\u5b89\u88dd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u89e3\u58d3\u7e2e\u5f8c\uff0c\u5230\u5c08\u6848\u76ee\u9304\u4e0b\uff0c\u958b\u555f\u7d42\u7aef\u6a5f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5efa\u7acb docker-compose"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose up\n")),(0,l.kt)("h2",{id:"\u555f\u52d5"},"\u555f\u52d5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ee5\u4e0b\u662f\u9810\u8a2d\u7684 port")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"5000: Logstash TCP input\n9200: Elasticsearch HTTP\n9300: Elasticsearch TCP transport\n5601: Kibana\n")),(0,l.kt)("h3",{id:"\u5f8c\u53f0kibana"},"\u5f8c\u53f0(kibana)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5f8c\u53f0\u806f\u7d50: ",(0,l.kt)("a",{parentName:"li",href:"http://localhost:5601/"},"http://localhost:5601/")),(0,l.kt)("li",{parentName:"ul"},"\u9810\u8a2d\u5e33\u865f: elastic"),(0,l.kt)("li",{parentName:"ul"},"\u9810\u8a2d\u5bc6\u78bc: changeme")))}k.isMDXComponent=!0}}]);