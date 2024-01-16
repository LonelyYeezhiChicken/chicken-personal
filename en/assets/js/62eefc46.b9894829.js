"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[2031],{49613:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>m});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},k=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,m=u["".concat(p,".").concat(d)]||u[d]||c[d]||l;return a?n.createElement(m,i(i({ref:t},k),{},{components:a})):n.createElement(m,i({ref:t},k))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},41690:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(88028),r=(a(59496),a(49613));const l={sidebar_position:15,description:"ActiveMQ \u6301\u4e45\u5316\u548c\u975e\u6301\u4e45\u5316",key:["ActiveMQ","tool","durable","Message Queue"],tags:["ActiveMQ","\u5de5\u5177","Message Queue"]},i="\ud83e\udde3 ActiveMQ \u6301\u4e45\u5316\u548c\u975e\u6301\u4e45\u5316",o={unversionedId:"activeMQ/fundamentals/durable",id:"activeMQ/fundamentals/durable",title:"\ud83e\udde3 ActiveMQ \u6301\u4e45\u5316\u548c\u975e\u6301\u4e45\u5316",description:"ActiveMQ \u6301\u4e45\u5316\u548c\u975e\u6301\u4e45\u5316",source:"@site/docs/activeMQ/fundamentals/durable.md",sourceDirName:"activeMQ/fundamentals",slug:"/activeMQ/fundamentals/durable",permalink:"/en/docs/activeMQ/fundamentals/durable",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/activeMQ/fundamentals/durable.md",tags:[{label:"ActiveMQ",permalink:"/en/docs/tags/active-mq"},{label:"\u5de5\u5177",permalink:"/en/docs/tags/\u5de5\u5177"},{label:"Message Queue",permalink:"/en/docs/tags/message-queue"}],version:"current",lastUpdatedAt:1705414237,formattedLastUpdatedAt:"Jan 16, 2024",sidebarPosition:15,frontMatter:{sidebar_position:15,description:"ActiveMQ \u6301\u4e45\u5316\u548c\u975e\u6301\u4e45\u5316",key:["ActiveMQ","tool","durable","Message Queue"],tags:["ActiveMQ","\u5de5\u5177","Message Queue"]},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udde3 ActiveMQ \u968a\u5217\u548c\u4e3b\u984c",permalink:"/en/docs/activeMQ/fundamentals/queueAndTopic"},next:{title:"\ud83e\udde3 ActiveMQ \u5ef6\u9072\u548c\u512a\u5148\u9806\u5e8f",permalink:"/en/docs/activeMQ/fundamentals/efficientPrioritization"}},p={},s=[{value:"\u6301\u4e45\u5316\u8a0a\u606f",id:"\u6301\u4e45\u5316\u8a0a\u606f",level:2},{value:"\u6301\u4e45\u5316\u8a0a\u606f\u5728 ActiveMQ \u4e2d\u7684\u5be6\u73fe",id:"\u6301\u4e45\u5316\u8a0a\u606f\u5728-activemq-\u4e2d\u7684\u5be6\u73fe",level:3},{value:"\u4ec0\u9ebc\u662f\u6301\u4e45\u5316\u8a0a\u606f\uff1f",id:"\u4ec0\u9ebc\u662f\u6301\u4e45\u5316\u8a0a\u606f",level:3},{value:"ActiveMQ \u4e2d\u7684\u6301\u4e45\u5316\u8a0a\u606f\u6a5f\u5236",id:"activemq-\u4e2d\u7684\u6301\u4e45\u5316\u8a0a\u606f\u6a5f\u5236",level:3},{value:"\u61c9\u7528\u5834\u666f\uff1a\u8a02\u55ae\u8655\u7406\u7cfb\u7d71",id:"\u61c9\u7528\u5834\u666f\u8a02\u55ae\u8655\u7406\u7cfb\u7d71",level:3},{value:"Kahadb \u6301\u4e45\u5316\u6a5f\u5236",id:"kahadb-\u6301\u4e45\u5316\u6a5f\u5236",level:2},{value:"Kahadb \u6301\u4e45\u5316\u6d41\u7a0b",id:"kahadb-\u6301\u4e45\u5316\u6d41\u7a0b",level:3},{value:"Kahadb \u7684\u512a\u52e2",id:"kahadb-\u7684\u512a\u52e2",level:3},{value:"Kahadb \u7684\u8a2d\u5b9a",id:"kahadb-\u7684\u8a2d\u5b9a",level:3},{value:"\u975e\u6301\u4e45\u5316\u8a0a\u606f",id:"\u975e\u6301\u4e45\u5316\u8a0a\u606f",level:2},{value:"\u975e\u6301\u4e45\u5316\u8a0a\u606f\u7684\u7279\u9ede",id:"\u975e\u6301\u4e45\u5316\u8a0a\u606f\u7684\u7279\u9ede",level:3},{value:"\u61c9\u7528\u5834\u666f\uff1a\u5373\u6642\u80a1\u7968\u50f9\u683c\u66f4\u65b0",id:"\u61c9\u7528\u5834\u666f\u5373\u6642\u80a1\u7968\u50f9\u683c\u66f4\u65b0",level:3}],k={toc:s},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-activemq-\u6301\u4e45\u5316\u548c\u975e\u6301\u4e45\u5316"},"\ud83e\udde3 ActiveMQ \u6301\u4e45\u5316\u548c\u975e\u6301\u4e45\u5316"),(0,r.kt)("h2",{id:"\u6301\u4e45\u5316\u8a0a\u606f"},"\u6301\u4e45\u5316\u8a0a\u606f"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6301\u4e45\u5316\u8a0a\u606f\u5728 ActiveMQ \u4e2d\u7684\u5be6\u73fe\u6d89\u53ca\u5230\u8a0a\u606f\u4e2d\u9593\u4ef6\u7684\u5b58\u5132\u6a5f\u5236\u4e00\u65e6\u767c\u9001\u4e00\u689d\u6301\u4e45\u5316\u8a0a\u606f\uff0c\u5b83\u6703\u88ab\u6c38\u4e45\u4fdd\u5b58\u5728\u8a0a\u606f\u4e2d\u9593\u4ef6\u7684\u5b58\u5132\u7cfb\u7d71\u4e2d\uff0c\u901a\u5e38\u662f\u4e00\u7a2e\u53ef\u9760\u4e14\u9ad8\u6548\u7684\u5b58\u5132\u4ecb\u8cea\uff0c\u4f8b\u5982\u8cc7\u6599\u5eab\u9019\u6a23\u7684\u8a2d\u8a08\u78ba\u4fdd\u4e86\u5373\u4f7f\u5728\u8a0a\u606f\u767c\u9001\u5f8c\uff0c\u5982\u679c\u6d88\u8cbb\u8005\u66ab\u6642\u7121\u6cd5\u63a5\u6536\u8a0a\u606f\uff0c\u8a0a\u606f\u4ecd\u7136\u5b89\u5168\u5730\u5b58\u5132\u5728\u7cfb\u7d71\u4e2d\uff0c\u4e0d\u6703\u4e1f\u5931\u9019\u5c0d\u65bc\u9700\u8981\u4fdd\u8b49\u8a0a\u606f\u4e0d\u6703\u4e1f\u5931\u4e14\u80fd\u5920\u88ab\u5f8c\u7e8c\u6d88\u8cbb\u8005\u8655\u7406\u7684\u5834\u666f\u975e\u5e38\u91cd\u8981")),(0,r.kt)("h3",{id:"\u6301\u4e45\u5316\u8a0a\u606f\u5728-activemq-\u4e2d\u7684\u5be6\u73fe"},"\u6301\u4e45\u5316\u8a0a\u606f\u5728 ActiveMQ \u4e2d\u7684\u5be6\u73fe"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u8a0a\u606f\u9a45\u52d5\u7684\u61c9\u7528\u7a0b\u5f0f\u4e2d\uff0c\u8a0a\u606f\u7684\u53ef\u9760\u6027\u662f\u81f3\u95dc\u91cd\u8981\u7684"),(0,r.kt)("li",{parentName:"ul"},"\u78ba\u4fdd\u5373\u4f7f\u5728\u7cfb\u7d71\u6545\u969c\u6216\u6d88\u8cbb\u8005\u66ab\u6642\u7121\u6cd5\u63a5\u6536\u8a0a\u606f\u7684\u60c5\u6cc1\u4e0b\uff0c\u8a0a\u606f\u4ecd\u7136\u5b89\u5168\u5730\u5b58\u5132\u5728\u7cfb\u7d71\u4e2d\u4e0d\u6703\u4e1f\u5931")),(0,r.kt)("h3",{id:"\u4ec0\u9ebc\u662f\u6301\u4e45\u5316\u8a0a\u606f"},"\u4ec0\u9ebc\u662f\u6301\u4e45\u5316\u8a0a\u606f\uff1f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6301\u4e45\u5316\u8a0a\u606f\u662f\u6307\u4e00\u65e6\u767c\u9001\u5230\u8a0a\u606f\u4e2d\u9593\u4ef6\uff0c\u8a72\u8a0a\u606f\u5c07\u88ab\u6c38\u4e45\u4fdd\u5b58\u5728\u4e2d\u9593\u4ef6\u7684\u5b58\u5132\u7cfb\u7d71\u4e2d"),(0,r.kt)("li",{parentName:"ul"},"\u9019\u7a2e\u5b58\u5132\u6a5f\u5236\u901a\u5e38\u4f7f\u7528\u53ef\u9760\u4e14\u9ad8\u6548\u7684\u4ecb\u8cea\uff0c\u6bd4\u5982\u8cc7\u6599\u5eab"),(0,r.kt)("li",{parentName:"ul"},"\u9019\u6a23\u7684\u8a2d\u8a08\u78ba\u4fdd\u4e86\u8a0a\u606f\u7684\u6301\u4e45\u6027\uff0c\u5373\u4f7f\u5728\u767c\u9001\u5f8c\uff0c\u6d88\u8cbb\u8005\u66ab\u6642\u7121\u6cd5\u63a5\u6536\u8a0a\u606f\uff0c\u8a0a\u606f\u4ecd\u7136\u5b58\u5728\u7b49\u5f85\u88ab\u8655\u7406")),(0,r.kt)("h3",{id:"activemq-\u4e2d\u7684\u6301\u4e45\u5316\u8a0a\u606f\u6a5f\u5236"},"ActiveMQ \u4e2d\u7684\u6301\u4e45\u5316\u8a0a\u606f\u6a5f\u5236"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ActiveMQ \u4f7f\u7528\u591a\u7a2e\u65b9\u5f0f\u5be6\u73fe\u6301\u4e45\u5316\u8a0a\u606f\uff0c\u5176\u4e2d\u4e4b\u4e00\u662f\u901a\u904e\u8cc7\u6599\u5eab"),(0,r.kt)("li",{parentName:"ul"},"\u7576\u8a0a\u606f\u88ab\u6a19\u8a18\u70ba\u6301\u4e45\u5316\u6642\uff0cActiveMQ \u5c07\u8a72\u8a0a\u606f\u5b58\u5132\u5728\u8a2d\u5b9a\u7684\u8cc7\u6599\u5eab\u4e2d"),(0,r.kt)("li",{parentName:"ul"},"\u9019\u4f7f\u5f97\u5373\u4f7f\u8a0a\u606f\u4ee3\u7406\u91cd\u555f\uff0c\u8a0a\u606f\u4ecd\u7136\u53ef\u7528\uff0c\u4e26\u4e14\u80fd\u5920\u5728\u9700\u8981\u6642\u88ab\u91cd\u65b0\u767c\u9001\u7d66\u6d88\u8cbb\u8005")),(0,r.kt)("h3",{id:"\u61c9\u7528\u5834\u666f\u8a02\u55ae\u8655\u7406\u7cfb\u7d71"},"\u61c9\u7528\u5834\u666f\uff1a\u8a02\u55ae\u8655\u7406\u7cfb\u7d71"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8b93\u6211\u5011\u4ee5\u4e00\u500b\u8a02\u55ae\u8655\u7406\u7cfb\u7d71\u70ba\u4f8b\uff0c\u4f86\u7406\u89e3\u6301\u4e45\u5316\u8a0a\u606f\u7684\u5be6\u969b\u61c9\u7528")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u9019\u6a23\u7684\u7cfb\u7d71\u4e2d\uff0c\u7576\u7528\u6236\u5efa\u7acb\u4e00\u500b\u65b0\u8a02\u55ae\u6642\uff0c\u4e00\u689d\u8a02\u55ae\u5efa\u7acb\u7684\u8a0a\u606f\u88ab\u767c\u9001\u5230\u8a0a\u606f\u4e2d\u9593\u4ef6\uff0c\u540c\u6642\u88ab\u6a19\u8a18\u70ba\u6301\u4e45\u5316"),(0,r.kt)("li",{parentName:"ul"},"\u9019\u610f\u5473\u8457\u5373\u4f7f\u5728\u8a02\u55ae\u7cfb\u7d71\u767c\u751f\u6545\u969c\u6216\u66ab\u6642\u6027\u7684\u6d88\u8cbb\u8005\u4e0d\u53ef\u7528\u7684\u60c5\u6cc1\u4e0b\uff0c\u8a02\u55ae\u8a0a\u606f\u4ecd\u7136\u5b89\u5168\u5730\u5b58\u5132\u5728\u8cc7\u6599\u5eab\u4e2d"),(0,r.kt)("li",{parentName:"ul"},"\u7576\u7cfb\u7d71\u6062\u5fa9\u6b63\u5e38\u6642\uff0c\u8a0a\u606f\u4e2d\u9593\u4ef6\u5c07\u518d\u6b21\u5617\u8a66\u5c07\u8a0a\u606f\u767c\u9001\u7d66\u6d88\u8cbb\u8005\uff0c\u78ba\u4fdd\u8a02\u55ae\u88ab\u6b63\u78ba\u8655\u7406")),(0,r.kt)("h2",{id:"kahadb-\u6301\u4e45\u5316\u6a5f\u5236"},"Kahadb \u6301\u4e45\u5316\u6a5f\u5236"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728 ActiveMQ \u4e2d\uff0cKahaDB \u662f\u4e00\u500b\u5132\u5b58\u5f15\u64ce\uff0c\u7528\u65bc\u5be6\u73fe\u8a0a\u606f\u7684\u6301\u4e45\u5316\uff0c\u5b83\u63d0\u4f9b\u4e86\u9ad8\u6548\u4e14\u53ef\u9760\u7684\u672c\u5730\u5b58\u5132\u89e3\u6c7a\u65b9\u6848\uff0c\u9069\u7528\u65bc\u9700\u8981\u5feb\u901f\u8a2a\u554f\u8a0a\u606f\u7684\u61c9\u7528\u5834\u666f"),(0,r.kt)("p",{parentName:"blockquote"},"\u4ee5\u4e0b\u662f\u6709\u95dc Kahadb \u6301\u4e45\u5316\u6a5f\u5236\u7684\u88dc\u5145\u8a0a\u606f\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5132\u5b58\u683c\u5f0f\uff1a")," Kahadb \u4f7f\u7528\u4e00\u7a2e\u9ad8\u6548\u7684\u4e8c\u9032\u5236\u683c\u5f0f\u4f86\u5132\u5b58\u8a0a\u606f\uff0c\u9019\u6709\u52a9\u65bc\u63d0\u9ad8\u8b80\u5beb\u6027\u80fd")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u4e8b\u52d9\u652f\u6301\uff1a")," Kahadb \u63d0\u4f9b\u4e86\u4e8b\u52d9\u652f\u6301\uff0c\u78ba\u4fdd\u8a0a\u606f\u7684\u539f\u5b50\u6027\u9019\u610f\u5473\u8457\u7576\u591a\u500b\u8a0a\u606f\u9700\u8981\u88ab\u4e00\u4f75\u8655\u7406\u6642\uff0c\u5b83\u5011\u8981\u9ebc\u5168\u90e8\u6210\u529f\uff0c\u8981\u9ebc\u5168\u90e8\u5931\u6557\uff0c\u5f9e\u800c\u78ba\u4fdd\u8a0a\u606f\u7684\u4e00\u81f4\u6027")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u7d22\u5f15\u7d50\u69cb\uff1a")," Kahadb \u4f7f\u7528 B-tree \u7d22\u5f15\u7d50\u69cb\uff0c\u9019\u4f7f\u5f97\u5728\u5927\u578b\u6578\u64da\u96c6\u4e0a\u9032\u884c\u9ad8\u6548\u7684\u67e5\u8a62\u548c\u6aa2\u7d22\u6210\u70ba\u53ef\u80fd"))),(0,r.kt)("h3",{id:"kahadb-\u6301\u4e45\u5316\u6d41\u7a0b"},"Kahadb \u6301\u4e45\u5316\u6d41\u7a0b"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u8a0a\u606f\u5beb\u5165\uff1a")," \u7576\u4e00\u689d\u8a0a\u606f\u9700\u8981\u88ab\u6301\u4e45\u5316\u6642\uff0cKahadb \u5c07\u8a72\u8a0a\u606f\u8ffd\u52a0\u5230\u65e5\u8a8c\u6587\u4ef6\uff08Log File\uff09\u4e2d")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u7d22\u5f15\u66f4\u65b0\uff1a")," \u540c\u6642\uff0cKahadb \u66f4\u65b0 B-tree \u7d22\u5f15\uff0c\u4ee5\u4fbf\u80fd\u5920\u5feb\u901f\u5730\u67e5\u627e\u548c\u6aa2\u7d22\u8a0a\u606f")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5b9a\u671f\u6a94\u6848\u5408\u4f75\uff1a")," \u70ba\u4e86\u63d0\u9ad8\u6548\u80fd\uff0cKahadb \u57f7\u884c\u5b9a\u671f\u7684\u6a94\u6848\u5408\u4f75\u64cd\u4f5c\uff0c\u5c07\u591a\u500b\u65e5\u8a8c\u6587\u4ef6\u5408\u4f75\u70ba\u4e00\u500b\u66f4\u5927\u7684\u6587\u4ef6\u9019\u6709\u52a9\u65bc\u6e1b\u5c11\u6587\u4ef6\u6578\u91cf\uff0c\u63d0\u9ad8\u67e5\u8a62\u6548\u7387")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5feb\u7167\uff1a")," Kahadb \u9084\u652f\u6301\u5feb\u7167\uff0c\u9019\u662f\u4e00\u7a2e\u5728\u904b\u884c\u6642\u5275\u5efa\u7d22\u5f15\u7684\u65b9\u6cd5\uff0c\u6709\u52a9\u65bc\u52a0\u901f\u555f\u52d5\u6642\u9593"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Kahadb \u6301\u4e45\u5316\u6d41\u7a0b\u53ca B-tree \u7d22\u5f15\u7d50\u69cb")),(0,r.kt)("mermaid",{value:"graph TD\n  subgraph BTree\n    A[Root]\n    B1[Node]\n    B2[Node]\n    C1[Node]\n    C2[Node]\n    C3[Node]\n    D1[Leaf Node]\n    D2[Leaf Node]\n    D3[Leaf Node]\n    D4[Leaf Node]\n    D5[Leaf Node]\n  end\n\n  A --\x3e|Contains Keys| B1\n  A --\x3e|Contains Keys| B2\n  B1 --\x3e|Contains Keys| C1\n  B1 --\x3e|Contains Keys| C2\n  B2 --\x3e|Contains Keys| C3\n  C1 --\x3e|Contains Data| D1\n  C2 --\x3e|Contains Data| D2\n  C2 --\x3e|Contains Data| D3\n  C3 --\x3e|Contains Data| D4\n  C3 --\x3e|Contains Data| D5\n\n  style A stroke:#4caf50,stroke-width:2px;\n  style B1 stroke:#4caf50,stroke-width:2px;\n  style B2 stroke:#4caf50,stroke-width:2px;\n  style C1 stroke:#4caf50,stroke-width:2px;\n  style C2 stroke:#4caf50,stroke-width:2px;\n  style C3 stroke:#4caf50,stroke-width:2px;\n  style D1 stroke:#4caf50,stroke-width:2px;\n  style D2 stroke:#4caf50,stroke-width:2px;\n  style D3 stroke:#4caf50,stroke-width:2px;\n  style D4 stroke:#4caf50,stroke-width:2px;\n  style D5 stroke:#4caf50,stroke-width:2px;"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6a94\u6848\u5408\u4f75\u6d41\u7a0b")),(0,r.kt)("mermaid",{value:"graph TD\n  subgraph Kahadb\n    E[File 1]\n    F[File 2]\n    G[File 3]\n    H[Merged File]\n  end\n\n  E --\x3e|Contents| H\n  F --\x3e|Contents| H\n  G --\x3e|Contents| H\n\n  style E stroke:#4caf50,stroke-width:2px;\n  style F stroke:#4caf50,stroke-width:2px;\n  style G stroke:#4caf50,stroke-width:2px;\n  style H stroke:#4caf50,stroke-width:2px;"}),(0,r.kt)("h3",{id:"kahadb-\u7684\u512a\u52e2"},"Kahadb \u7684\u512a\u52e2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u9ad8\u6027\u80fd\uff1a")," Kahadb \u7684\u4e8c\u9032\u5236\u683c\u5f0f\u548c B-tree \u7d22\u5f15\u7d50\u69cb\u78ba\u4fdd\u4e86\u9ad8\u6027\u80fd\u7684\u8a0a\u606f\u6301\u4e45\u5316\u548c\u6aa2\u7d22")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u53ef\u9760\u6027\uff1a")," \u4e8b\u52d9\u652f\u6301\u78ba\u4fdd\u4e86\u8a0a\u606f\u7684\u539f\u5b50\u6027\uff0c\u5f9e\u800c\u78ba\u4fdd\u4e86\u8a0a\u606f\u7684\u53ef\u9760\u6027\u548c\u4e00\u81f4\u6027")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u6709\u6548\u7684\u6a94\u6848\u7ba1\u7406\uff1a")," \u5b9a\u671f\u7684\u6a94\u6848\u5408\u4f75\u64cd\u4f5c\u6709\u52a9\u65bc\u7dad\u8b77\u6587\u4ef6\u6578\u91cf\uff0c\u63d0\u9ad8\u6574\u9ad4\u6548\u80fd"))),(0,r.kt)("h3",{id:"kahadb-\u7684\u8a2d\u5b9a"},"Kahadb \u7684\u8a2d\u5b9a"),(0,r.kt)("p",null,"\u5728 ActiveMQ \u7684\u8a2d\u5b9a\u6587\u4ef6\u4e2d\uff0c\u53ef\u4ee5\u901a\u904e\u8a2d\u5b9a\u5c6c\u6027\u4f86\u8abf\u6574 Kahadb \u7684\u884c\u70ba\uff0c\u4f8b\u5982\u8abf\u6574\u6a94\u6848\u5408\u4f75\u7684\u983b\u7387\u3001\u8a2d\u7f6e\u5feb\u7167\u7b49\uff0c\u9019\u4e9b\u8a2d\u5b9a\u9078\u9805\u4f7f\u5f97 Kahadb \u53ef\u4ee5\u6839\u64da\u7279\u5b9a\u61c9\u7528\u5834\u666f\u9032\u884c\u8abf\u512a\uff0c\u4ee5\u9054\u5230\u6700\u4f73\u6027\u80fd"),(0,r.kt)("h2",{id:"\u975e\u6301\u4e45\u5316\u8a0a\u606f"},"\u975e\u6301\u4e45\u5316\u8a0a\u606f"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u975e\u6301\u4e45\u5316\u8a0a\u606f\u662f\u4e00\u7a2e\u8a0a\u606f\u8655\u7406\u65b9\u5f0f\uff0c\u5176\u7279\u9ede\u5728\u65bc\u66f4\u52a0\u6ce8\u91cd\u5be6\u6642\u6027\u548c\u5373\u6642\u6027\uff0c\u76f8\u8f03\u65bc\u6301\u4e45\u5316\u8a0a\u606f\u66f4\u8457\u91cd\u65bc\u5373\u6642\u901a\u77e5\u548c\u77ac\u6642\u4e8b\u4ef6\u7684\u50b3\u905e\uff0c\u5728\u9019\u7a2e\u8a2d\u8a08\u4e0b\u8a0a\u606f\u50c5\u5728\u6210\u529f\u767c\u9001\u5230\u6240\u6709\u6d3b\u52d5\u7684\u6d88\u8cbb\u8005\u5f8c\u4fdd\u7559\u5728\u8a18\u61b6\u9ad4\u4e2d\uff0c\u4e26\u5728\u78ba\u4fdd\u6240\u6709\u6d88\u8cbb\u8005\u90fd\u5df2\u63a5\u6536\u8a0a\u606f\u5f8c\u88ab\u7acb\u5373\u522a\u9664")),(0,r.kt)("h3",{id:"\u975e\u6301\u4e45\u5316\u8a0a\u606f\u7684\u7279\u9ede"},"\u975e\u6301\u4e45\u5316\u8a0a\u606f\u7684\u7279\u9ede"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5373\u6642\u6027\uff1a")," \u9019\u985e\u8a0a\u606f\u4e0d\u9700\u8981\u9577\u6642\u9593\u4fdd\u5b58\uff0c\u800c\u662f\u5c08\u6ce8\u65bc\u5373\u6642\u5730\u50b3\u905e\u7d66\u6240\u6709\u9700\u8981\u7684\u6d88\u8cbb\u8005")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u8a18\u61b6\u9ad4\u5b58\u5132\uff1a")," \u8207\u6301\u4e45\u5316\u8a0a\u606f\u4f7f\u7528\u53ef\u9760\u4e14\u9ad8\u6548\u7684\u5b58\u5132\u4ecb\u8cea\uff08\u5982\u8cc7\u6599\u5eab\uff09\u4e0d\u540c\uff0c\u975e\u6301\u4e45\u5316\u8a0a\u606f\u901a\u5e38\u50c5\u5728\u8a18\u61b6\u9ad4\u4e2d\u66ab\u5b58\uff0c\u4ee5\u78ba\u4fdd\u5feb\u901f\u7684\u50b3\u905e\u548c\u5373\u6642\u7684\u53cd\u61c9")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u8cc7\u6e90\u6548\u7387\uff1a")," \u7531\u65bc\u4e0d\u9700\u8981\u5c07\u8a0a\u606f\u6c38\u4e45\u4fdd\u5b58\uff0c\u975e\u6301\u4e45\u5316\u8a0a\u606f\u7684\u8a2d\u8a08\u66f4\u8f15\u91cf\uff0c\u80fd\u5920\u7bc0\u7701\u7cfb\u7d71\u8cc7\u6e90\uff0c\u78ba\u4fdd\u7cfb\u7d71\u9ad8\u6548\u904b\u4f5c"))),(0,r.kt)("h3",{id:"\u61c9\u7528\u5834\u666f\u5373\u6642\u80a1\u7968\u50f9\u683c\u66f4\u65b0"},"\u61c9\u7528\u5834\u666f\uff1a\u5373\u6642\u80a1\u7968\u50f9\u683c\u66f4\u65b0"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e00\u500b\u5178\u578b\u7684\u61c9\u7528\u5834\u666f\u662f\u5373\u6642\u80a1\u7968\u50f9\u683c\u66f4\u65b0")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7576\u80a1\u7968\u50f9\u683c\u767c\u751f\u8b8a\u52d5\u6642\uff0c\u5373\u6642\u6027\u8b8a\u5f97\u81f3\u95dc\u91cd\u8981"),(0,r.kt)("li",{parentName:"ul"},"\u975e\u6301\u4e45\u5316\u8a0a\u606f\u78ba\u4fdd\u50f9\u683c\u8b8a\u52d5\u7684\u8a0a\u606f\u8fc5\u901f\u5730\u88ab\u767c\u9001\u7d66\u6240\u6709\u611f\u8208\u8da3\u7684\u6d88\u8cbb\u8005"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u65e6\u9019\u4e9b\u6d88\u8cbb\u8005\u6210\u529f\u63a5\u6536\u5230\u8a0a\u606f\uff0c\u7cfb\u7d71\u5373\u53ef\u5b89\u5168\u5730\u5c07\u8a0a\u606f\u5f9e\u8a18\u61b6\u9ad4\u4e2d\u79fb\u9664\uff0c\u7bc0\u7701\u8cc7\u6e90\uff0c\u540c\u6642\u78ba\u4fdd\u5f8c\u7e8c\u50f9\u683c\u8b8a\u52d5\u7684\u8a0a\u606f\u4ecd\u80fd\u8fc5\u901f\u800c\u6709\u6548\u5730\u50b3\u905e")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u7e3d\u9ad4\u800c\u8a00\uff0c\u975e\u6301\u4e45\u5316\u8a0a\u606f\u662f\u4e00\u7a2e\u9069\u7528\u65bc\u5373\u6642\u901a\u77e5\u548c\u4e8b\u4ef6\u7684\u8f15\u91cf\u7d1a\u8a2d\u8a08\uff0c\u901a\u5e38\u7528\u65bc\u90a3\u4e9b\u4e0d\u9700\u8981\u9577\u6642\u9593\u4fdd\u5b58\u7684\u8a0a\u606f\uff0c\u4e26\u5f37\u8abf\u7cfb\u7d71\u7684\u5373\u6642\u6027\u548c\u8cc7\u6e90\u6548\u7387")))}c.isMDXComponent=!0}}]);