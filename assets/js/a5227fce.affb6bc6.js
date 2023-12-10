"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[870],{49613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,v=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(v,l(l({ref:t},s),{},{components:n})):r.createElement(v,l({ref:t},s))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42999:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(88028),a=(n(59496),n(49613));const i={sidebar_position:5,description:"ActiveMQ \u6210\u54e1",key:["ActiveMQ","tool","windows","Message Queue"],tags:["ActiveMQ","\u5de5\u5177","Message Queue"]},l="\ud83e\udde3 ActiveMQ \u6210\u54e1",o={unversionedId:"activeMQ/fundamentals/member",id:"activeMQ/fundamentals/member",title:"\ud83e\udde3 ActiveMQ \u6210\u54e1",description:"ActiveMQ \u6210\u54e1",source:"@site/docs/activeMQ/fundamentals/member.md",sourceDirName:"activeMQ/fundamentals",slug:"/activeMQ/fundamentals/member",permalink:"/docs/activeMQ/fundamentals/member",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/activeMQ/fundamentals/member.md",tags:[{label:"ActiveMQ",permalink:"/docs/tags/active-mq"},{label:"\u5de5\u5177",permalink:"/docs/tags/\u5de5\u5177"},{label:"Message Queue",permalink:"/docs/tags/message-queue"}],version:"current",lastUpdatedAt:1702200765,formattedLastUpdatedAt:"2023\u5e7412\u670810\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"ActiveMQ \u6210\u54e1",key:["ActiveMQ","tool","windows","Message Queue"],tags:["ActiveMQ","\u5de5\u5177","Message Queue"]},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udde3ActiveMQ Basics",permalink:"/docs/category/activemq-basics"},next:{title:"\ud83e\udde3 ActiveMQ \u968a\u5217\u548c\u4e3b\u984c",permalink:"/docs/activeMQ/fundamentals/queueAndTopic"}},c={},u=[{value:"\u8a0a\u606f\uff08Message\uff09",id:"\u8a0a\u606fmessage",level:2},{value:"<code>\u9ede\u5c0d\u9ede \u8a0a\u606f</code>",id:"\u9ede\u5c0d\u9ede-\u8a0a\u606f",level:3},{value:"<code>\u767c\u5e03/\u8a02\u95b1 \u8a0a\u606f</code>",id:"\u767c\u5e03\u8a02\u95b1-\u8a0a\u606f",level:3},{value:"\u751f\u7522\u8005\uff08Producer\uff09",id:"\u751f\u7522\u8005producer",level:2},{value:"\u6d88\u8cbb\u8005\uff08Consumer\uff09",id:"\u6d88\u8cbb\u8005consumer",level:2}],s={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-activemq-\u6210\u54e1"},"\ud83e\udde3 ActiveMQ \u6210\u54e1"),(0,a.kt)("h2",{id:"\u8a0a\u606fmessage"},"\u8a0a\u606f\uff08Message\uff09"),(0,a.kt)("p",null,"\u8a0a\u606f\u662f\u5728 ActiveMQ \u4e2d\u9032\u884c\u6578\u64da\u4ea4\u63db\u7684\u57fa\u672c\u55ae\u4f4d\uff0c\u5b83\u53ef\u4ee5\u5305\u542b\u5404\u7a2e\u985e\u578b\u7684\u5167\u5bb9\uff0c\u4f8b\u5982\u6587\u672c\u3001\u4e8c\u9032\u5236\u6578\u64da\uff0c\u6216\u5176\u4ed6\u683c\u5f0f\u7684\u6578\u64da"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"ActiveMQ \u652f\u63f4\u5169\u7a2e\u4e3b\u8981\u7684\u8a0a\u606f\u985e\u578b\uff1a\u9ede\u5c0d\u9ede\u8a0a\u606f\u548c\u767c\u5e03/\u8a02\u95b1\u8a0a\u606f")),(0,a.kt)("h3",{id:"\u9ede\u5c0d\u9ede-\u8a0a\u606f"},(0,a.kt)("inlineCode",{parentName:"h3"},"\u9ede\u5c0d\u9ede \u8a0a\u606f")),(0,a.kt)("p",null,"\u662f\u4e00\u7a2e\u55ae\u767c\u55ae\u6536\u7684\u6a21\u578b\uff0c\u5176\u4e2d\u751f\u7522\u8005\u5c07\u8a0a\u606f\u767c\u9001\u5230\u7279\u5b9a\u7684\u968a\u5217\uff08Queue\uff09\uff0c\u800c\u50c5\u6709\u4e00\u500b\u6d88\u8cbb\u8005\u53ef\u4ee5\u63a5\u6536\u4e26\u8655\u7406\u8a72\u8a0a\u606f"),(0,a.kt)("p",null,"\u9019\u7a2e\u6a21\u578b\u9069\u7528\u65bc\u9700\u8981\u78ba\u4fdd\u6bcf\u689d\u8a0a\u606f\u50c5\u88ab\u4e00\u500b\u6d88\u8cbb\u8005\u8655\u7406\u7684\u5834\u666f"),(0,a.kt)("h3",{id:"\u767c\u5e03\u8a02\u95b1-\u8a0a\u606f"},(0,a.kt)("inlineCode",{parentName:"h3"},"\u767c\u5e03/\u8a02\u95b1 \u8a0a\u606f")),(0,a.kt)("p",null,"\u5141\u8a31\u751f\u7522\u8005\u5c07\u8a0a\u606f\u767c\u9001\u5230\u7279\u5b9a\u7684\u4e3b\u984c\uff08Topic\uff09\uff0c\u800c\u591a\u500b\u6d88\u8cbb\u8005\u53ef\u4ee5\u8a02\u95b1\u9019\u500b\u4e3b\u984c\u4ee5\u63a5\u6536\u8a0a\u606f"),(0,a.kt)("p",null,"\u9019\u7a2e\u6a21\u578b\u9069\u7528\u65bc\u9700\u8981\u4e00\u689d\u8a0a\u606f\u88ab\u591a\u500b\u6d88\u8cbb\u8005\u8655\u7406\u7684\u5834\u666f"),(0,a.kt)("h2",{id:"\u751f\u7522\u8005producer"},"\u751f\u7522\u8005\uff08Producer\uff09"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u751f\u7522\u8005\u662f\u8ca0\u8cac\u5efa\u7acb\u548c\u767c\u9001\u8a0a\u606f\u7684\u5be6\u9ad4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5b83\u5011\u626e\u6f14\u8457\u5c07\u4fe1\u606f\u6ce8\u5165 ActiveMQ \u7cfb\u7d71\u7684\u89d2\u8272")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u751f\u7522\u8005\u901a\u5e38\u9700\u8981\u6307\u5b9a\u8a0a\u606f\u7684\u76ee\u7684\u5730\uff0c\u5373\u8a0a\u606f\u8981\u767c\u9001\u5230\u7684\u968a\u5217\u6216\u4e3b\u984c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u9019\u6a23\u7684\u8a2d\u5b9a\u78ba\u4fdd\u4e86\u8a0a\u606f\u88ab\u767c\u9001\u5230\u6b63\u78ba\u7684\u5730\u65b9\uff0c\u4ee5\u4fbf\u76f8\u61c9\u7684\u6d88\u8cbb\u8005\u80fd\u5920\u63a5\u6536\u548c\u8655\u7406"))),(0,a.kt)("h2",{id:"\u6d88\u8cbb\u8005consumer"},"\u6d88\u8cbb\u8005\uff08Consumer\uff09"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6d88\u8cbb\u8005\u662f\u8a0a\u606f\u7684\u63a5\u6536\u8005\u548c\u8655\u7406\u8005")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5b83\u5011\u5728 ActiveMQ \u4e2d\u8a02\u95b1\u7279\u5b9a\u7684\u968a\u5217\u6216\u4e3b\u984c\uff0c\u4ee5\u63a5\u6536\u751f\u7522\u8005\u767c\u9001\u7684\u8a0a\u606f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6d88\u8cbb\u8005\u7684\u89d2\u8272\u81f3\u95dc\u91cd\u8981\uff0c\u56e0\u70ba\u5b83\u5011\u78ba\u4fdd\u8a0a\u606f\u5f97\u4ee5\u6709\u6548\u5730\u50b3\u905e\u4e26\u88ab\u9069\u7576\u5730\u5229\u7528")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6d88\u8cbb\u8005\u53ef\u4ee5\u9078\u64c7\u4ee5\u540c\u6b65\u6216\u7570\u6b65\u7684\u65b9\u5f0f\u8655\u7406\u8a0a\u606f\uff0c\u5177\u9ad4\u53d6\u6c7a\u65bc\u61c9\u7528\u7684\u9700\u6c42"))),(0,a.kt)("mermaid",{value:"graph TD\n  subgraph clusterMessage\n    subgraph clusterPointToPoint\n      \u9ede\u5c0d\u9ede\u8a0a\u606f\n    end\n    subgraph clusterPublishSubscribe\n      \u767c\u5e03/\u8a02\u95b1\u8a0a\u606f\n    end\n  end\n\n  subgraph clusterProducer\n    Producer\n  end\n\n  subgraph clusterConsumer\n    Consumer\n  end\n\n  Producer --\x3e|\u767c\u9001\u5230\u968a\u5217| \u9ede\u5c0d\u9ede\u8a0a\u606f\n  Producer --\x3e|\u767c\u9001\u5230\u4e3b\u984c| \u767c\u5e03/\u8a02\u95b1\u8a0a\u606f\n  Consumer --\x3e|\u8a02\u95b1\u968a\u5217| \u9ede\u5c0d\u9ede\u8a0a\u606f\n  Consumer --\x3e|\u8a02\u95b1\u4e3b\u984c| \u767c\u5e03/\u8a02\u95b1\u8a0a\u606f"}))}m.isMDXComponent=!0}}]);