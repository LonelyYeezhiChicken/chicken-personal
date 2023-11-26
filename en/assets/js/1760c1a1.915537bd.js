"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[6542],{49613:(e,t,l)=>{l.d(t,{Zo:()=>k,kt:()=>v});var a=l(59496);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var p=a.createContext({}),o=function(e){var t=a.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},k=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,k=u(e,["components","mdxType","originalType","parentName"]),m=o(l),d=n,v=m["".concat(p,".").concat(d)]||m[d]||c[d]||r;return l?a.createElement(v,i(i({ref:t},k),{},{components:l})):a.createElement(v,i({ref:t},k))}));function v(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=l.length,i=new Array(r);i[0]=d;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[m]="string"==typeof e?e:n,i[1]=u;for(var o=2;o<r;o++)i[o]=l[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,l)}d.displayName="MDXCreateElement"},19975:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>u,toc:()=>o});var a=l(88028),n=(l(59496),l(49613));const r={sidebar_position:20,description:"ActiveMQ \u5ef6\u9072\u548c\u512a\u5148\u9806\u5e8f",key:["ActiveMQ","tool","durable","Message Queue"],tags:["ActiveMQ","\u5de5\u5177","Message Queue"]},i="\ud83e\udde3 ActiveMQ \u5ef6\u9072\u548c\u512a\u5148\u9806\u5e8f",u={unversionedId:"activeMQ/fundamentals/efficientPrioritization",id:"activeMQ/fundamentals/efficientPrioritization",title:"\ud83e\udde3 ActiveMQ \u5ef6\u9072\u548c\u512a\u5148\u9806\u5e8f",description:"ActiveMQ \u5ef6\u9072\u548c\u512a\u5148\u9806\u5e8f",source:"@site/docs/activeMQ/fundamentals/efficientPrioritization.md",sourceDirName:"activeMQ/fundamentals",slug:"/activeMQ/fundamentals/efficientPrioritization",permalink:"/en/docs/activeMQ/fundamentals/efficientPrioritization",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/activeMQ/fundamentals/efficientPrioritization.md",tags:[{label:"ActiveMQ",permalink:"/en/docs/tags/active-mq"},{label:"\u5de5\u5177",permalink:"/en/docs/tags/\u5de5\u5177"},{label:"Message Queue",permalink:"/en/docs/tags/message-queue"}],version:"current",lastUpdatedAt:1700971193,formattedLastUpdatedAt:"Nov 26, 2023",sidebarPosition:20,frontMatter:{sidebar_position:20,description:"ActiveMQ \u5ef6\u9072\u548c\u512a\u5148\u9806\u5e8f",key:["ActiveMQ","tool","durable","Message Queue"],tags:["ActiveMQ","\u5de5\u5177","Message Queue"]},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udde3 ActiveMQ \u6301\u4e45\u5316\u548c\u975e\u6301\u4e45\u5316",permalink:"/en/docs/activeMQ/fundamentals/durable"}},p={},o=[{value:"\u5ef6\u9072\u7ba1\u7406",id:"\u5ef6\u9072\u7ba1\u7406",level:2},{value:"\u5ef6\u9072\u7ba1\u7406\u8207MQTT\u7684\u4e0d\u540c\u7b49\u7d1a",id:"\u5ef6\u9072\u7ba1\u7406\u8207mqtt\u7684\u4e0d\u540c\u7b49\u7d1a",level:2},{value:"QoS 0 (\u6700\u591a\u4e00\u6b21\u50b3\u905e)",id:"qos-0-\u6700\u591a\u4e00\u6b21\u50b3\u905e",level:3},{value:"QoS 1 (\u81f3\u5c11\u4e00\u6b21\u50b3\u905e)",id:"qos-1-\u81f3\u5c11\u4e00\u6b21\u50b3\u905e",level:3},{value:"QoS 2 (\u53ea\u6709\u4e00\u6b21\u50b3\u905e)",id:"qos-2-\u53ea\u6709\u4e00\u6b21\u50b3\u905e",level:3},{value:"MQTT\u7684\u5ef6\u9072\u7ba1\u7406\u9748\u6d3b\u6027",id:"mqtt\u7684\u5ef6\u9072\u7ba1\u7406\u9748\u6d3b\u6027",level:3},{value:"ActiveMQ\u4e2d\u7684\u5ef6\u9072\u7ba1\u7406",id:"activemq\u4e2d\u7684\u5ef6\u9072\u7ba1\u7406",level:2},{value:"\u8a0a\u606f\u6301\u4e45\u6027",id:"\u8a0a\u606f\u6301\u4e45\u6027",level:3},{value:"Prefetch\u7b56\u7565",id:"prefetch\u7b56\u7565",level:3},{value:"Time-to-Live\uff08TTL\uff09",id:"time-to-livettl",level:3},{value:"Redelivery\u7b56\u7565",id:"redelivery\u7b56\u7565",level:3},{value:"\u61c9\u7528\u5834\u666f\u7684\u5ef6\u9072\u9700\u6c42",id:"\u61c9\u7528\u5834\u666f\u7684\u5ef6\u9072\u9700\u6c42",level:2},{value:"\u5373\u6642\u901a\u77e5\uff1a\u6975\u4f4e\u5ef6\u9072\u7684\u8feb\u5207\u9700\u6c42",id:"\u5373\u6642\u901a\u77e5\u6975\u4f4e\u5ef6\u9072\u7684\u8feb\u5207\u9700\u6c42",level:3},{value:"\u975e\u7dca\u6025\u4e8b\u4ef6\uff1a\u9748\u6d3b\u8a2d\u5b9a\u4ee5\u7bc0\u7701\u8cc7\u6e90",id:"\u975e\u7dca\u6025\u4e8b\u4ef6\u9748\u6d3b\u8a2d\u5b9a\u4ee5\u7bc0\u7701\u8cc7\u6e90",level:3},{value:"\u8a0a\u606f\u8655\u7406\u4e2d\u7684\u512a\u5148\u9806\u5e8f\u7ba1\u7406",id:"\u8a0a\u606f\u8655\u7406\u4e2d\u7684\u512a\u5148\u9806\u5e8f\u7ba1\u7406",level:2},{value:"\u512a\u5148\u9806\u5e8f\u8207\u91d1\u878d\u4ea4\u6613",id:"\u512a\u5148\u9806\u5e8f\u8207\u91d1\u878d\u4ea4\u6613",level:3},{value:"\u512a\u5148\u9806\u5e8f\u8207\u5be6\u6642\u8cc7\u6599\u8655\u7406",id:"\u512a\u5148\u9806\u5e8f\u8207\u5be6\u6642\u8cc7\u6599\u8655\u7406",level:3},{value:"\u512a\u5148\u9806\u5e8f\u8207\u7cfb\u7d71\u7a69\u5b9a\u6027",id:"\u512a\u5148\u9806\u5e8f\u8207\u7cfb\u7d71\u7a69\u5b9a\u6027",level:3},{value:"\u512a\u5148\u9806\u5e8f\u7ba1\u7406\u8207\u7570\u5e38\u8655\u7406",id:"\u512a\u5148\u9806\u5e8f\u7ba1\u7406\u8207\u7570\u5e38\u8655\u7406",level:3}],k={toc:o},m="wrapper";function c(e){let{components:t,...l}=e;return(0,n.kt)(m,(0,a.Z)({},k,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-activemq-\u5ef6\u9072\u548c\u512a\u5148\u9806\u5e8f"},"\ud83e\udde3 ActiveMQ \u5ef6\u9072\u548c\u512a\u5148\u9806\u5e8f"),(0,n.kt)("h2",{id:"\u5ef6\u9072\u7ba1\u7406"},"\u5ef6\u9072\u7ba1\u7406"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u5ef6\u9072\u6307\u7684\u662f\u8a0a\u606f\u5f9e\u767c\u9001\u5230\u63a5\u6536\u6240\u9700\u7684\u6642\u9593\uff0c\u5728ActiveMQ\u4e2d\uff0c\u6211\u5011\u4e0d\u50c5\u80fd\u5920\u7d30\u7dfb\u5730\u8a2d\u5b9a\u5ef6\u9072\u6642\u9593\uff0c\u9084\u53ef\u4ee5\u6839\u64da\u61c9\u7528\u7684\u5be6\u969b\u9700\u6c42\u9748\u6d3b\u8abf\u6574\uff0c\u8209\u4f8b\u4f86\u8aaa\uff0c\u5373\u6642\u901a\u77e5\u53ef\u80fd\u8981\u6c42\u6975\u4f4e\u7684\u5ef6\u9072\uff0c\u800c\u67d0\u4e9b\u975e\u7dca\u6025\u4e8b\u4ef6\u53ef\u80fd\u5bb9\u8a31\u8f03\u9577\u7684\u5ef6\u9072")),(0,n.kt)("h2",{id:"\u5ef6\u9072\u7ba1\u7406\u8207mqtt\u7684\u4e0d\u540c\u7b49\u7d1a"},"\u5ef6\u9072\u7ba1\u7406\u8207MQTT\u7684\u4e0d\u540c\u7b49\u7d1a"),(0,n.kt)("p",null,"MQTT \u5b9a\u7fa9\u4e86\u4e0d\u540c\u7684\u670d\u52d9\u54c1\u8cea\uff08Quality of Service, QoS\uff09\u7b49\u7d1a\uff0c\u9019\u4e9b\u7b49\u7d1a\u6c7a\u5b9a\u4e86\u8a0a\u606f\u7684\u50b3\u905e\u4fdd\u8b49\u548c\u5ef6\u9072\u7279\u6027"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u6709\u4e09\u500b\u7b49\u7d1a\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u7b49\u7d1a"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7279\u9ede"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"QoS 0"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fdd\u8b49\u8a0a\u606f\u50b3\u9001\uff0c\u4f46\u4e0d\u4fdd\u8b49\u63a5\u6536\uff0c\u7c21\u55ae\u4e14\u4f4e\u5ef6\u9072"),(0,n.kt)("td",{parentName:"tr",align:null},"\u9069\u7528\u65bc\u4e0d\u592a\u91cd\u8981\u7684\u61c9\u7528\u5834\u666f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"QoS 1"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fdd\u8b49\u8a0a\u606f\u81f3\u5c11\u88ab\u50b3\u9001\u4e00\u6b21\uff0c\u53ef\u80fd\u6709\u91cd\u8907\u8a0a\u606f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63d0\u9ad8\u4e86\u50b3\u905e\u7684\u53ef\u9760\u6027\uff0c\u4f46\u53ef\u80fd\u589e\u52a0\u5ef6\u9072")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"QoS 2"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fdd\u8b49\u8a0a\u606f\u50c5\u88ab\u50b3\u9001\u4e00\u6b21\uff0c\u6d88\u9664\u4e86\u91cd\u8907\u8a0a\u606f\u7684\u53ef\u80fd\u6027"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b\u6700\u9ad8\u7684\u53ef\u9760\u6027\uff0c\u4f46\u4f34\u96a8\u8457\u66f4\u591a\u7684\u5ef6\u9072")))),(0,n.kt)("h3",{id:"qos-0-\u6700\u591a\u4e00\u6b21\u50b3\u905e"},"QoS 0 (\u6700\u591a\u4e00\u6b21\u50b3\u905e)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9019\u500b\u7b49\u7d1a\u4fdd\u8b49\u8a0a\u606f\u6703\u88ab\u50b3\u9001\uff0c\u4f46\u4e0d\u4fdd\u8b49\u5b83\u662f\u5426\u88ab\u63a5\u6536"),(0,n.kt)("li",{parentName:"ul"},"\u9019\u662f\u4e00\u500b\u6700\u7c21\u55ae\u4e14\u5ef6\u9072\u6700\u4f4e\u7684\u7b49\u7d1a\uff0c\u9069\u7528\u65bc\u4e00\u4e9b\u4e0d\u592a\u91cd\u8981\u7684\u61c9\u7528\u5834\u666f")),(0,n.kt)("h3",{id:"qos-1-\u81f3\u5c11\u4e00\u6b21\u50b3\u905e"},"QoS 1 (\u81f3\u5c11\u4e00\u6b21\u50b3\u905e)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9019\u500b\u7b49\u7d1a\u4fdd\u8b49\u8a0a\u606f\u81f3\u5c11\u88ab\u50b3\u9001\u4e00\u6b21\uff0c\u4f46\u53ef\u80fd\u6703\u6709\u91cd\u8907\u8a0a\u606f"),(0,n.kt)("li",{parentName:"ul"},"\u9019\u589e\u52a0\u4e86\u50b3\u905e\u7684\u53ef\u9760\u6027\uff0c\u4f46\u4e5f\u53ef\u80fd\u589e\u52a0\u4e00\u4e9b\u5ef6\u9072")),(0,n.kt)("h3",{id:"qos-2-\u53ea\u6709\u4e00\u6b21\u50b3\u905e"},"QoS 2 (\u53ea\u6709\u4e00\u6b21\u50b3\u905e)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9019\u500b\u7b49\u7d1a\u4fdd\u8b49\u8a0a\u606f\u50c5\u88ab\u50b3\u9001\u4e00\u6b21\uff0c\u6d88\u9664\u4e86\u91cd\u8907\u8a0a\u606f\u7684\u53ef\u80fd\u6027"),(0,n.kt)("li",{parentName:"ul"},"\u540c\u6642\u4e5f\u5e36\u4f86\u4e86\u66f4\u591a\u7684\u5ef6\u9072")),(0,n.kt)("h3",{id:"mqtt\u7684\u5ef6\u9072\u7ba1\u7406\u9748\u6d3b\u6027"},"MQTT\u7684\u5ef6\u9072\u7ba1\u7406\u9748\u6d3b\u6027"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u8207 ActiveMQ \u76f8\u4f3c MQTT \u5354\u8b70\u4e5f\u5141\u8a31\u4f7f\u7528\u8005\u6839\u64da\u4e0d\u540c\u61c9\u7528\u5834\u666f\u7684\u9700\u6c42\u8abf\u6574\u5ef6\u9072\u7ba1\u7406\uff0c\u900f\u904e\u9078\u64c7\u4e0d\u540c\u7684QoS\u7b49\u7d1a\uff0c\u4f7f\u7528\u8005\u53ef\u4ee5\u6b0a\u8861\u8a0a\u606f\u7684\u53ef\u9760\u6027\u548c\u50b3\u905e\u901f\u5ea6"),(0,n.kt)("p",{parentName:"blockquote"},"\u5728\u4e00\u500b\u5373\u6642\u901a\u8a0a\u61c9\u7528\u4e2d\uff0c\u53ef\u80fd\u6703\u9078\u64c7\u4f7f\u7528 QoS 0\uff0c\u4ee5\u964d\u4f4e\u5ef6\u9072\uff0c\u78ba\u4fdd\u8a0a\u606f\u76e1\u5feb\u5230\u9054\uff0c\u5373\u6642\u901a\u77e5\u7d66\u4f7f\u7528\u8005\uff0c\u800c\u5728\u67d0\u4e9b\u975e\u7dca\u6025\u7684\u76e3\u63a7\u61c9\u7528\u4e2d\uff0c\u53ef\u80fd\u66f4\u9858\u610f\u63a5\u53d7\u8f03\u9ad8\u7684\u5ef6\u9072\uff0c\u4ee5\u4fdd\u8b49\u8a0a\u606f\u7684\u5b8c\u6574\u6027\u548c\u552f\u4e00\u6027\uff0c\u9019\u6642\u53ef\u8003\u616e\u4f7f\u7528 QoS 2")),(0,n.kt)("h2",{id:"activemq\u4e2d\u7684\u5ef6\u9072\u7ba1\u7406"},"ActiveMQ\u4e2d\u7684\u5ef6\u9072\u7ba1\u7406"),(0,n.kt)("p",null,"\u5728Apache ActiveMQ\uff08AMQ\uff09\u4e2d\uff0c\u96d6\u7136\u6c92\u6709\u50cfMQTT\u90a3\u6a23\u56b4\u683c\u5b9a\u7fa9\u7684 QoS \u7b49\u7d1a\uff0c\u4f46\u5b83\u63d0\u4f9b\u4e86\u4e00\u4e9b\u7279\u6027\u548c\u8a2d\u5b9a\u9078\u9805\uff0c\u5141\u8a31\u4f7f\u7528\u8005\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u8abf\u6574\u8a0a\u606f\u7684\u50b3\u905e\u548c\u5ef6\u9072\u7ba1\u7406"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ActiveMQ\u4e2d\u7684\u5ef6\u9072\u7ba1\u7406\u53ef\u4ee5\u900f\u904e\u4ee5\u4e0b\u65b9\u5f0f\u5be6\u73fe\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7279\u9ede"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u8a0a\u606f\u6301\u4e45\u6027"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5141\u8a31\u5c07\u8a0a\u606f\u8a2d\u7f6e\u70ba\u6301\u4e45\u6027\uff0c\u78ba\u4fdd\u5373\u4f7f\u5728\u63a5\u6536\u8005\u96e2\u7dda\u6642\uff0c\u8a0a\u606f\u4ecd\u7136\u6703\u5728\u4e4b\u5f8c\u88ab\u50b3\u905e"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fdd\u969c\u8a0a\u606f\u7684\u53ef\u9760\u50b3\u905e\uff0c\u53ef\u80fd\u589e\u52a0\u4e00\u4e9b\u5ef6\u9072")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Prefetch\u7b56\u7565"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5141\u8a31\u6d88\u8cbb\u8005\u9810\u5148\u5f9e\u4ee3\u7406\u4e2d\u7372\u53d6\u591a\u500b\u8a0a\u606f\uff0c\u63d0\u9ad8\u6d88\u8cbb\u8005\u6548\u7387"),(0,n.kt)("td",{parentName:"tr",align:null},"\u901a\u904e\u8abf\u6574\u9810\u53d6\u9650\u5236\u5f71\u97ff\u5ef6\u9072")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Time-to-Live"),(0,n.kt)("td",{parentName:"tr",align:null},"\u53ef\u70ba\u8a0a\u606f\u8a2d\u7f6eTTL\uff0c\u6307\u5b9a\u8a0a\u606f\u5728\u7cfb\u7d71\u4e2d\u5b58\u7559\u7684\u6642\u9593\uff0c\u8d85\u904eTTL\u7684\u8a0a\u606f\u5c07\u88ab\u4e1f\u68c4"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5f71\u97ff\u8a0a\u606f\u7684\u5b58\u7559\u6642\u9593\uff0c\u76f4\u63a5\u5f71\u97ff\u5ef6\u9072")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Redelivery\u7b56\u7565"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5141\u8a31\u8a2d\u5b9a\u91cd\u65b0\u50b3\u905e\u7b56\u7565\uff0c\u78ba\u4fdd\u8a0a\u606f\u5728\u767c\u9001\u6216\u63a5\u6536\u6642\u7684\u53ef\u9760\u6027"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5f71\u97ff\u8a0a\u606f\u7684\u91cd\u65b0\u50b3\u905e\u6a5f\u5236\uff0c\u53ef\u80fd\u5728\u89f8\u767c\u6642\u589e\u52a0\u5ef6\u9072")))),(0,n.kt)("h3",{id:"\u8a0a\u606f\u6301\u4e45\u6027"},"\u8a0a\u606f\u6301\u4e45\u6027"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ActiveMQ\u5141\u8a31\u5c07\u8a0a\u606f\u8a2d\u7f6e\u70ba\u6301\u4e45\u6027\uff0c\u9019\u610f\u5473\u8457\u5373\u4f7f\u5728\u63a5\u6536\u8005\u96e2\u7dda\u6642\uff0c\u8a0a\u606f\u4ecd\u7136\u6703\u5728\u4e4b\u5f8c\u88ab\u50b3\u905e"),(0,n.kt)("li",{parentName:"ul"},"\u9019\u6709\u52a9\u65bc\u78ba\u4fdd\u8a0a\u606f\u7684\u53ef\u9760\u50b3\u905e\uff0c\u4f46\u4e5f\u53ef\u80fd\u589e\u52a0\u4e00\u4e9b\u5ef6\u9072")),(0,n.kt)("h3",{id:"prefetch\u7b56\u7565"},"Prefetch\u7b56\u7565"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Prefetch\u7b56\u7565\u5141\u8a31\u6d88\u8cbb\u8005\u5728\u9810\u5148\u5f9e\u4ee3\u7406\u4e2d\u7372\u53d6\u591a\u500b\u8a0a\u606f\uff0c\u5f9e\u800c\u63d0\u9ad8\u6d88\u8cbb\u8005\u7684\u6548\u7387"),(0,n.kt)("li",{parentName:"ul"},"\u9019\u53ef\u4ee5\u901a\u904e\u8abf\u6574\u9810\u53d6\u9650\u5236\u4f86\u5f71\u97ff\u5ef6\u9072")),(0,n.kt)("h3",{id:"time-to-livettl"},"Time-to-Live\uff08TTL\uff09"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u70ba\u8a0a\u606f\u8a2d\u7f6eTTL\uff0c\u6307\u5b9a\u8a0a\u606f\u5728\u7cfb\u7d71\u4e2d\u5b58\u7559\u7684\u6642\u9593"),(0,n.kt)("li",{parentName:"ul"},"\u8d85\u904eTTL\u7684\u8a0a\u606f\u5c07\u88ab\u4e1f\u68c4\uff0c\u9019\u5f71\u97ff\u4e86\u8a0a\u606f\u7684\u5ef6\u9072")),(0,n.kt)("h3",{id:"redelivery\u7b56\u7565"},"Redelivery\u7b56\u7565"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ActiveMQ\u5141\u8a31\u8a2d\u5b9a\u91cd\u65b0\u50b3\u905e\u7b56\u7565\uff0c\u78ba\u4fdd\u8a0a\u606f\u5728\u767c\u9001\u6216\u63a5\u6536\u6642\u7684\u53ef\u9760\u6027"),(0,n.kt)("li",{parentName:"ul"},"\u9019\u4e5f\u53ef\u80fd\u5f71\u97ff\u5ef6\u9072\uff0c\u7279\u5225\u662f\u5728\u91cd\u65b0\u50b3\u905e\u6a5f\u5236\u89f8\u767c\u6642")),(0,n.kt)("h2",{id:"\u61c9\u7528\u5834\u666f\u7684\u5ef6\u9072\u9700\u6c42"},"\u61c9\u7528\u5834\u666f\u7684\u5ef6\u9072\u9700\u6c42"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u5728\u73fe\u4ee3\u7684\u6578\u4f4d\u5316\u74b0\u5883\u4e2d\uff0c\u61c9\u7528\u5834\u666f\u7684\u591a\u6a23\u6027\u5c0d\u5ef6\u9072\u7ba1\u7406\u63d0\u51fa\u4e86\u4e0d\u540c\u7684\u6311\u6230\u548c\u9700\u6c42"),(0,n.kt)("p",{parentName:"blockquote"},"\u5ef6\u9072\u7ba1\u7406\u6210\u70ba\u7cfb\u7d71\u512a\u5316\u7684\u4e00\u500b\u95dc\u9375\u56e0\u7d20\uff0c\u800c\u4e0d\u540c\u61c9\u7528\u5834\u666f\u7684\u9700\u6c42\u5dee\u7570\u66f4\u51f8\u986f\u4e86\u5176\u91cd\u8981\u6027")),(0,n.kt)("h3",{id:"\u5373\u6642\u901a\u77e5\u6975\u4f4e\u5ef6\u9072\u7684\u8feb\u5207\u9700\u6c42"},"\u5373\u6642\u901a\u77e5\uff1a\u6975\u4f4e\u5ef6\u9072\u7684\u8feb\u5207\u9700\u6c42"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u61c9\u7528\u5834\u666f\u7bc4\u4f8b\uff1a\u5373\u6642\u901a\u8a0a\u61c9\u7528")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5728\u5373\u6642\u901a\u77e5\u7684\u5834\u666f\u4e2d\uff0c\u5982\u5373\u6642\u901a\u8a0a\u61c9\u7528\uff0c\u5c0d\u65bc\u8a0a\u606f\u7684\u50b3\u905e\u901f\u5ea6\u6709\u8457\u6975\u4f4e\u7684\u5ef6\u9072\u8981\u6c42")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u7576\u4e00\u65b9\u4f7f\u7528\u8005\u767c\u9001\u8a0a\u606f\u6642\uff0c\u53e6\u4e00\u65b9\u4f7f\u7528\u8005\u61c9\u76e1\u5feb\u63a5\u6536\u5230\u8a72\u8a0a\u606f\uff0c\u4ee5\u78ba\u4fdd\u5373\u6642\u6027\u548c\u63d0\u5347\u4f7f\u7528\u8005\u9ad4\u9a57")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u9019\u7a2e\u5373\u6642\u901a\u77e5\u7684\u5834\u666f\u5305\u62ec\u804a\u5929\u61c9\u7528\u3001\u793e\u4ea4\u5a92\u9ad4\u8a0a\u606f\u7b49"))),(0,n.kt)("p",null,"ActiveMQ\u7684\u5ef6\u9072\u7ba1\u7406\u5728\u9019\u7a2e\u60c5\u5883\u4e0b\u767c\u63ee\u95dc\u9375\u4f5c\u7528\uff0c\u7cfb\u7d71\u80fd\u5920\u901a\u904e\u8abf\u6574\u5ef6\u9072\u53c3\u6578\uff0c\u78ba\u4fdd\u8a0a\u606f\u7684\u5feb\u901f\u50b3\u905e\uff0c\u5f9e\u800c\u6eff\u8db3\u5373\u6642\u901a\u77e5\u7684\u9700\u6c42\uff0c\u9019\u7a2e\u4f4e\u5ef6\u9072\u7684\u7279\u6027\u78ba\u4fdd\u4e86\u4f7f\u7528\u8005\u4e4b\u9593\u7684\u5373\u6642\u4e92\u52d5\uff0c\u4f7f\u5f97\u901a\u8a0a\u66f4\u52a0\u5be6\u6642\u3001\u6d41\u66a2"),(0,n.kt)("h3",{id:"\u975e\u7dca\u6025\u4e8b\u4ef6\u9748\u6d3b\u8a2d\u5b9a\u4ee5\u7bc0\u7701\u8cc7\u6e90"},"\u975e\u7dca\u6025\u4e8b\u4ef6\uff1a\u9748\u6d3b\u8a2d\u5b9a\u4ee5\u7bc0\u7701\u8cc7\u6e90"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u61c9\u7528\u5834\u666f\u7bc4\u4f8b\uff1a\u7cfb\u7d71\u5831\u544a\u8207\u76e3\u63a7")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u67d0\u4e9b\u61c9\u7528\u5834\u666f\u4e2d\u7684\u4e8b\u4ef6\u53ef\u80fd\u4e26\u4e0d\u7dca\u6025\uff0c\u4e14\u5bb9\u8a31\u8f03\u9577\u7684\u5ef6\u9072")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8209\u4f8b\u4f86\u8aaa\uff0c\u5728\u7cfb\u7d71\u5831\u544a\u548c\u76e3\u63a7\u7684\u5834\u666f\u4e2d\uff0c\u5373\u6642\u6027\u4e26\u975e\u9996\u8981\u8003\u616e\u56e0\u7d20\uff0c\u800c\u662f\u66f4\u95dc\u6ce8\u6709\u6548\u5730\u5229\u7528\u8cc7\u6e90")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u7cfb\u7d71\u53ef\u4ee5\u5c07\u9019\u4e9b\u975e\u7dca\u6025\u4e8b\u4ef6\u7684\u8a0a\u606f\u8a2d\u5b9a\u70ba\u5177\u6709\u8f03\u9577\u5ef6\u9072\u6642\u9593\uff0c\u4ee5\u9054\u5230\u66f4\u6709\u6548\u7684\u8cc7\u6e90\u5206\u914d"))),(0,n.kt)("p",null,"\u9019\u7a2e\u60c5\u5883\u4e0b\uff0cActiveMQ\u7684\u5ef6\u9072\u7ba1\u7406\u5141\u8a31\u7cfb\u7d71\u7ba1\u7406\u54e1\u9748\u6d3b\u8a2d\u5b9a\u5ef6\u9072\u53c3\u6578\uff0c\u4ee5\u6eff\u8db3\u7279\u5b9a\u61c9\u7528\u5834\u666f\u7684\u9700\u6c42\uff0c\u901a\u904e\u8abf\u6574\u5ef6\u9072\u6642\u9593\uff0c\u7cfb\u7d71\u80fd\u5920\u6709\u6548\u5730\u8655\u7406\u975e\u7dca\u6025\u4e8b\u4ef6\uff0c\u964d\u4f4e\u5373\u6642\u901a\u77e5\u6240\u9700\u7684\u8cc7\u6e90\uff0c\u5f9e\u800c\u9054\u5230\u66f4\u597d\u7684\u6548\u80fd"),(0,n.kt)("h2",{id:"\u8a0a\u606f\u8655\u7406\u4e2d\u7684\u512a\u5148\u9806\u5e8f\u7ba1\u7406"},"\u8a0a\u606f\u8655\u7406\u4e2d\u7684\u512a\u5148\u9806\u5e8f\u7ba1\u7406"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u5728\u5be6\u969b\u61c9\u7528\u4e2d\uff0c\u8a0a\u606f\u8655\u7406\u7684\u512a\u5148\u9806\u5e8f\u7ba1\u7406\u4e0d\u50c5\u662f\u7406\u8ad6\u4e0a\u7684\u6982\u5ff5\uff0c\u66f4\u662f\u8a31\u591a\u7cfb\u7d71\u6210\u529f\u904b\u4f5c\u7684\u95dc\u9375\uff0c\u4ee5\u4e0b\u5c07\u900f\u904e\u5be6\u969b\u6848\u4f8b\u4f86\u878d\u5165\u66f4\u591a\u5be6\u52d9\u4e0a\u7684\u5167\u5bb9\uff0c\u4ee5\u66f4\u5168\u9762\u5730\u7406\u89e3\u8a0a\u606f\u8655\u7406\u4e2d\u7684\u512a\u5148\u9806\u5e8f\u7ba1\u7406")),(0,n.kt)("h3",{id:"\u512a\u5148\u9806\u5e8f\u8207\u91d1\u878d\u4ea4\u6613"},"\u512a\u5148\u9806\u5e8f\u8207\u91d1\u878d\u4ea4\u6613"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u5728\u91d1\u878d\u9818\u57df\uff0c\u6bcf\u4e00\u7b46\u4ea4\u6613\u7684\u8655\u7406\u9806\u5e8f\u76f4\u63a5\u95dc\u4fc2\u5230\u4ea4\u6613\u7684\u5408\u6cd5\u6027\u548c\u6e96\u78ba\u6027")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5728\u80a1\u7968\u5e02\u5834\u4e2d\uff0c\u5982\u679c\u67d0\u7b46\u8cb7\u8ce3\u4ea4\u6613\u7684\u8a0a\u606f\u6c92\u6709\u6309\u7167\u6b63\u78ba\u7684\u9806\u5e8f\u8655\u7406\uff0c\u53ef\u80fd\u5c0e\u81f4\u4ea4\u6613\u932f\u8aa4\u6216\u50f9\u683c\u4e0d\u4e00\u81f4\u7684\u60c5\u6cc1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u900f\u904eActiveMQ\u7684\u512a\u5148\u9806\u5e8f\u7ba1\u7406\uff0c\u7cfb\u7d71\u53ef\u4ee5\u78ba\u4fdd\u4ea4\u6613\u8a0a\u606f\u6309\u7167\u6642\u9593\u9806\u5e8f\u88ab\u6b63\u78ba\u8655\u7406\uff0c\u9632\u6b62\u6f5b\u5728\u7684\u98a8\u96aa"))),(0,n.kt)("h3",{id:"\u512a\u5148\u9806\u5e8f\u8207\u5be6\u6642\u8cc7\u6599\u8655\u7406"},"\u512a\u5148\u9806\u5e8f\u8207\u5be6\u6642\u8cc7\u6599\u8655\u7406"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u5728\u5be6\u6642\u5927\u8cc7\u6599\u61c9\u7528\u4e2d\uff0c\u4e0d\u540c\u985e\u578b\u7684\u8cc7\u6599\u53ef\u80fd\u9700\u8981\u4e0d\u540c\u7684\u8655\u7406\u9806\u5e8f")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5728\u4e00\u500b\u76e3\u63a7\u7cfb\u7d71\u4e2d\uff0c\u50b3\u611f\u5668\u8cc7\u6599\u7684\u8655\u7406\u53ef\u80fd\u6bd4\u5176\u4ed6\u65e5\u8a8c\u8a0a\u606f\u66f4\u70ba\u7dca\u6025")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u900f\u904e ActiveMQ \u7684\u512a\u5148\u9806\u5e8f\u7ba1\u7406\uff0c\u7cfb\u7d71\u53ef\u4ee5\u6839\u64da\u8cc7\u6599\u7684\u91cd\u8981\u6027\u548c\u5373\u6642\u6027\u9032\u884c\u8abf\u6574\uff0c\u78ba\u4fdd\u95dc\u9375\u8a0a\u606f\u512a\u5148\u88ab\u8655\u7406"))),(0,n.kt)("h3",{id:"\u512a\u5148\u9806\u5e8f\u8207\u7cfb\u7d71\u7a69\u5b9a\u6027"},"\u512a\u5148\u9806\u5e8f\u8207\u7cfb\u7d71\u7a69\u5b9a\u6027"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u512a\u5148\u9806\u5e8f\u7ba1\u7406\u9084\u76f4\u63a5\u5f71\u97ff\u7cfb\u7d71\u7684\u7a69\u5b9a\u6027")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5728\u67d0\u4e9b\u60c5\u6cc1\u4e0b\uff0c\u7cfb\u7d71\u53ef\u80fd\u9700\u8981\u8655\u7406\u5927\u91cf\u7684\u8a0a\u606f\uff0c\u800c\u5408\u7406\u7684\u512a\u5148\u9806\u5e8f\u53ef\u4ee5\u78ba\u4fdd\u8cc7\u6e90\u7684\u6709\u6548\u5206\u914d\uff0c\u9632\u6b62\u7cfb\u7d71\u904e\u8f09\u6216\u5d29\u6f70")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u9019\u7a2e\u5be6\u52d9\u4e0a\u7684\u8003\u91cf\u5c0d\u65bc\u5efa\u7acb\u9ad8\u6548\u7a69\u5b9a\u7684\u8a0a\u606f\u8655\u7406\u7cfb\u7d71\u81f3\u95dc\u91cd\u8981"))),(0,n.kt)("h3",{id:"\u512a\u5148\u9806\u5e8f\u7ba1\u7406\u8207\u7570\u5e38\u8655\u7406"},"\u512a\u5148\u9806\u5e8f\u7ba1\u7406\u8207\u7570\u5e38\u8655\u7406"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u7cfb\u7d71\u7e3d\u662f\u9762\u81e8\u5404\u7a2e\u7570\u5e38\u60c5\u6cc1\uff0c\u4f8b\u5982\u8a0a\u606f\u4e1f\u5931\u6216\u8655\u7406\u8d85\u6642")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ActiveMQ\u63d0\u4f9b\u4e86\u9032\u968e\u7684\u512a\u5148\u9806\u5e8f\u7ba1\u7406\u529f\u80fd\uff0c\u8b93\u4f7f\u7528\u8005\u80fd\u5920\u91dd\u5c0d\u7570\u5e38\u60c5\u6cc1\u9032\u884c\u66f4\u7d30\u7dfb\u7684\u63a7\u5236")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5c07\u7570\u5e38\u8a0a\u606f\u6a19\u8a18\u70ba\u9ad8\u512a\u5148\u9806\u5e8f\uff0c\u4ee5\u512a\u5148\u8655\u7406\u548c\u89e3\u6c7a\u9019\u4e9b\u7570\u5e38\u60c5\u6cc1\uff0c\u63d0\u9ad8\u7cfb\u7d71\u7684\u97cc\u6027"))))}c.isMDXComponent=!0}}]);