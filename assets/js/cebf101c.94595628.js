"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[7948],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22095:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(88028),a=(n(59496),n(49613));const i={sidebar_position:25,description:"ActiveMQ \u5ef6\u9072\u548c\u512a\u5148\u9806\u5e8f",key:["ActiveMQ","tool","durable","Message Queue"],tags:["ActiveMQ","\u5de5\u5177","Message Queue"]},o="\ud83e\udde3 ActiveMQ \u8a0a\u606f\u904e\u6ffe",l={unversionedId:"activeMQ/fundamentals/filter",id:"activeMQ/fundamentals/filter",title:"\ud83e\udde3 ActiveMQ \u8a0a\u606f\u904e\u6ffe",description:"ActiveMQ \u5ef6\u9072\u548c\u512a\u5148\u9806\u5e8f",source:"@site/docs/activeMQ/fundamentals/filter.md",sourceDirName:"activeMQ/fundamentals",slug:"/activeMQ/fundamentals/filter",permalink:"/docs/activeMQ/fundamentals/filter",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/activeMQ/fundamentals/filter.md",tags:[{label:"ActiveMQ",permalink:"/docs/tags/active-mq"},{label:"\u5de5\u5177",permalink:"/docs/tags/\u5de5\u5177"},{label:"Message Queue",permalink:"/docs/tags/message-queue"}],version:"current",lastUpdatedAt:1709356183,formattedLastUpdatedAt:"2024\u5e743\u67082\u65e5",sidebarPosition:25,frontMatter:{sidebar_position:25,description:"ActiveMQ \u5ef6\u9072\u548c\u512a\u5148\u9806\u5e8f",key:["ActiveMQ","tool","durable","Message Queue"],tags:["ActiveMQ","\u5de5\u5177","Message Queue"]},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udde3 ActiveMQ \u5ef6\u9072\u548c\u512a\u5148\u9806\u5e8f",permalink:"/docs/activeMQ/fundamentals/efficientPrioritization"}},c={},s=[{value:"\u70ba\u4ec0\u9ebc\u9700\u8981\u8a0a\u606f\u904e\u6ffe\uff1f",id:"\u70ba\u4ec0\u9ebc\u9700\u8981\u8a0a\u606f\u904e\u6ffe",level:2},{value:"ActiveMQ \u4e2d\u7684\u8a0a\u606f\u904e\u6ffe",id:"activemq-\u4e2d\u7684\u8a0a\u606f\u904e\u6ffe",level:2},{value:"\u7bc4\u4f8b",id:"\u7bc4\u4f8b",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-activemq-\u8a0a\u606f\u904e\u6ffe"},"\ud83e\udde3 ActiveMQ \u8a0a\u606f\u904e\u6ffe"),(0,a.kt)("p",null,"\u8a0a\u606f\u904e\u6ffe\u662f\u4e00\u500b\u5728\u8a0a\u606f\u4e2d\u9593\u4ef6\u4e2d\u5e38\u898b\u7684\u6982\u5ff5\uff0c\u5b83\u5141\u8a31\u6d88\u8cbb\u8005\u9078\u64c7\u6027\u5730\u63a5\u6536\u7279\u5b9a\u985e\u578b\u6216\u689d\u4ef6\u7684\u8a0a\u606f\uff0c\u5f9e\u800c\u5be6\u73fe\u66f4\u7d30\u7c92\u5ea6\u7684\u8a0a\u606f\u63a7\u5236\u548c\u8655\u7406"),(0,a.kt)("h2",{id:"\u70ba\u4ec0\u9ebc\u9700\u8981\u8a0a\u606f\u904e\u6ffe"},"\u70ba\u4ec0\u9ebc\u9700\u8981\u8a0a\u606f\u904e\u6ffe\uff1f"),(0,a.kt)("p",null,"\u5728\u5be6\u969b\u61c9\u7528\u4e2d\uff0c\u8a0a\u606f\u7684\u7a2e\u985e\u53ef\u80fd\u975e\u5e38\u591a\u6a23\uff0c\u800c\u6d88\u8cbb\u8005\u4e26\u4e0d\u4e00\u5b9a\u5c0d\u6240\u6709\u7684\u8a0a\u606f\u90fd\u611f\u8208\u8da3"),(0,a.kt)("p",null,"\u9019\u6642\u5c31\u9700\u8981\u4e00\u7a2e\u6a5f\u5236\u4f86\u5be6\u73fe\u8a0a\u606f\u7684\u7be9\u9078\uff0c\u4f7f\u5f97\u6d88\u8cbb\u8005\u53ea\u63a5\u6536\u7b26\u5408\u7279\u5b9a\u689d\u4ef6\u7684\u8a0a\u606f"),(0,a.kt)("p",null,"\u9019\u6a23\u53ef\u4ee5\u964d\u4f4e\u6d88\u8cbb\u8005\u7aef\u7684\u8cc7\u6e90\u6d6a\u8cbb\uff0c\u63d0\u9ad8\u7cfb\u7d71\u7684\u6548\u7387"),(0,a.kt)("h2",{id:"activemq-\u4e2d\u7684\u8a0a\u606f\u904e\u6ffe"},"ActiveMQ \u4e2d\u7684\u8a0a\u606f\u904e\u6ffe"),(0,a.kt)("p",null,"\u5728 ActiveMQ \u4e2d\uff0c\u8a0a\u606f\u904e\u6ffe\u901a\u5e38\u901a\u904e SQL \u8868\u9054\u5f0f\u4f86\u5be6\u73fe\u9019\u4e9b\u8868\u9054\u5f0f\u57fa\u65bc\u8a0a\u606f\u7684\u5c6c\u6027\u9032\u884c\u7be9\u9078\uff0c\u53ea\u6709\u7b26\u5408\u689d\u4ef6\u7684\u8a0a\u606f\u624d\u6703\u88ab\u9078\u64c7\u6027\u5730\u50b3\u9001\u7d66\u76f8\u61c9\u7684\u6d88\u8cbb\u8005\uff0c\u4f8b\u5982\u4e00\u500b\u7c21\u55ae\u7684\u8a0a\u606f\u904e\u6ffe\u689d\u4ef6\u53ef\u4ee5\u662f\u9078\u64c7\u6240\u6709\u5c6c\u6027 ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," \u70ba ",(0,a.kt)("inlineCode",{parentName:"p"},"important")," \u7684\u8a0a\u606f\uff0c\u9019\u6a23\u6d88\u8cbb\u8005\u5c31\u53ea\u6703\u63a5\u6536\u5230\u9019\u4e00\u985e\u578b\u7684\u8a0a\u606f\uff0c\u800c\u5ffd\u7565\u5176\u4ed6\u8a0a\u606f"),(0,a.kt)("h3",{id:"\u7bc4\u4f8b"},"\u7bc4\u4f8b"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u500b\u4f7f\u7528 JMS API \u4e2d\u7684\u8a0a\u606f\u904e\u6ffe\u7684\u7c21\u55ae\u793a\u4f8b\uff0c\u5047\u8a2d\u6709\u4e00\u500b\u8a0a\u606f\u5c6c\u6027\u70ba ",(0,a.kt)("inlineCode",{parentName:"p"},"category"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// \u5efa\u7acb\u4e00\u500b\u904e\u6ffe\u689d\u4ef6\uff0c\u53ea\u63a5\u6536\u5c6c\u6027 "category" \u70ba "urgent" \u7684\u8a0a\u606f\nString messageFilter = "category = \'urgent\'";\n\n// \u8a2d\u5b9a\u8a0a\u606f\u904e\u6ffe\u689d\u4ef6\nconsumer.setMessageSelector(messageFilter);\n\n// \u8a2d\u5b9a\u8a0a\u606f\u904e\u6ffe\u76e3\u807d\u5668\nconsumer.setMessageListener(message -> {\n    // \u5728\u9019\u88e1\u8655\u7406\u7b26\u5408\u904e\u6ffe\u689d\u4ef6\u7684\u8a0a\u606f\n    System.out.println("Received message: " + message);\n});\n')),(0,a.kt)("p",null,"\u5728\u9019\u500b\u4f8b\u5b50\u4e2d\uff0c\u53ea\u6709\u5c6c\u6027 ",(0,a.kt)("inlineCode",{parentName:"p"},"category")," \u70ba ",(0,a.kt)("inlineCode",{parentName:"p"},"urgent")," \u7684\u8a0a\u606f\u624d\u6703\u89f8\u767c\u6d88\u8cbb\u8005\u7684\u8a0a\u606f\u8655\u7406\u908f\u8f2f"))}d.isMDXComponent=!0}}]);