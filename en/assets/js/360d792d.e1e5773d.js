"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[2118],{49613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(n),k=a,m=s["".concat(o,".").concat(k)]||s[k]||d[k]||l;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=k;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[s]="string"==typeof e?e:a,i[1]=u;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},10692:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=n(88028),a=(n(59496),n(49613));const l={sidebar_position:10,description:"ActiveMQ \u968a\u5217\u548c\u4e3b\u984c",key:["ActiveMQ","tool","windows","Message Queue"],tags:["ActiveMQ","\u5de5\u5177","Message Queue"]},i="\ud83e\udde3 ActiveMQ \u968a\u5217\u548c\u4e3b\u984c",u={unversionedId:"activeMQ/fundamentals/queueAndTopic",id:"activeMQ/fundamentals/queueAndTopic",title:"\ud83e\udde3 ActiveMQ \u968a\u5217\u548c\u4e3b\u984c",description:"ActiveMQ \u968a\u5217\u548c\u4e3b\u984c",source:"@site/docs/activeMQ/fundamentals/queueAndTopic.md",sourceDirName:"activeMQ/fundamentals",slug:"/activeMQ/fundamentals/queueAndTopic",permalink:"/en/docs/activeMQ/fundamentals/queueAndTopic",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/activeMQ/fundamentals/queueAndTopic.md",tags:[{label:"ActiveMQ",permalink:"/en/docs/tags/active-mq"},{label:"\u5de5\u5177",permalink:"/en/docs/tags/\u5de5\u5177"},{label:"Message Queue",permalink:"/en/docs/tags/message-queue"}],version:"current",lastUpdatedAt:1709356183,formattedLastUpdatedAt:"Mar 2, 2024",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"ActiveMQ \u968a\u5217\u548c\u4e3b\u984c",key:["ActiveMQ","tool","windows","Message Queue"],tags:["ActiveMQ","\u5de5\u5177","Message Queue"]},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udde3 ActiveMQ \u6210\u54e1",permalink:"/en/docs/activeMQ/fundamentals/member"},next:{title:"\ud83e\udde3 ActiveMQ \u6301\u4e45\u5316\u548c\u975e\u6301\u4e45\u5316",permalink:"/en/docs/activeMQ/fundamentals/durable"}},o={},p=[{value:"\u968a\u5217\uff08Queue\uff09",id:"\u968a\u5217queue",level:2},{value:"\u968a\u5217\u7684\u61c9\u7528\u5834\u666f",id:"\u968a\u5217\u7684\u61c9\u7528\u5834\u666f",level:3},{value:"\u4e3b\u984c\uff08Topic\uff09",id:"\u4e3b\u984ctopic",level:2},{value:"\u4e3b\u984c\u7684\u61c9\u7528\u5834\u666f",id:"\u4e3b\u984c\u7684\u61c9\u7528\u5834\u666f",level:3},{value:"\u8a0a\u606f\u7684\u751f\u547d\u9031\u671f",id:"\u8a0a\u606f\u7684\u751f\u547d\u9031\u671f",level:2},{value:"\u751f\u7522\u968e\u6bb5",id:"\u751f\u7522\u968e\u6bb5",level:3},{value:"\u5b58\u5132\u968e\u6bb5",id:"\u5b58\u5132\u968e\u6bb5",level:3},{value:"\u6d88\u8cbb\u968e\u6bb5",id:"\u6d88\u8cbb\u968e\u6bb5",level:3},{value:"\u78ba\u8a8d\u968e\u6bb5",id:"\u78ba\u8a8d\u968e\u6bb5",level:3},{value:"\u9032\u968e\u7279\u6027",id:"\u9032\u968e\u7279\u6027",level:3},{value:"\u751f\u547d\u9031\u671f\u5716\u793a",id:"\u751f\u547d\u9031\u671f\u5716\u793a",level:3}],c={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-activemq-\u968a\u5217\u548c\u4e3b\u984c"},"\ud83e\udde3 ActiveMQ \u968a\u5217\u548c\u4e3b\u984c"),(0,a.kt)("p",null,"\u5728 ActiveMQ \u4e2d\uff0c\u968a\u5217\uff08Queue\uff09\u548c\u4e3b\u984c\uff08Topic\uff09\u662f\u5169\u7a2e\u4e0d\u540c\u7684\u8a0a\u606f\u50b3\u905e\u6a21\u578b\uff0c\u5b83\u5011\u5206\u5225\u9069\u7528\u65bc\u4e0d\u540c\u7684\u61c9\u7528\u5834\u666f"),(0,a.kt)("h2",{id:"\u968a\u5217queue"},"\u968a\u5217\uff08Queue\uff09"),(0,a.kt)("p",null,"\u968a\u5217\u662f\u4e00\u7a2e\u9ede\u5c0d\u9ede\uff08Point-to-Point\uff09\u7684\u8a0a\u606f\u50b3\u905e\u6a21\u578b"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728\u968a\u5217\u4e2d\uff0c\u8a0a\u606f\u7684\u751f\u7522\u8005\uff08Producer\uff09\u5c07\u8a0a\u606f\u767c\u9001\u5230\u968a\u5217\u4e2d\uff0c\u800c\u8a0a\u606f\u7684\u6d88\u8cbb\u8005\uff08Consumer\uff09\u5247\u5f9e\u968a\u5217\u4e2d\u63a5\u6536\u8a0a\u606f\uff0c\u6bcf\u689d\u8a0a\u606f\u53ea\u6709\u4e00\u500b\u6d88\u8cbb\u8005\u80fd\u5920\u63a5\u6536\uff0c\u78ba\u4fdd\u8a0a\u606f\u7684\u7368\u7acb\u6027\u5373\u4fbf\u6709\u591a\u500b\u6d88\u8cbb\u8005\uff0c\u6bcf\u689d\u8a0a\u606f\u4e5f\u53ea\u6703\u88ab\u5176\u4e2d\u4e00\u500b\u6d88\u8cbb\u8005\u8655\u7406\uff0c\u9019\u7a2e\u6a21\u578b\u9069\u7528\u65bc\u9700\u8981\u9ede\u5c0d\u9ede\u901a\u4fe1\u7684\u60c5\u5883\uff0c\u5982\u4efb\u52d9\u5206\u914d\u3001\u5de5\u4f5c\u6392\u7a0b\u7b49")),(0,a.kt)("h3",{id:"\u968a\u5217\u7684\u61c9\u7528\u5834\u666f"},"\u968a\u5217\u7684\u61c9\u7528\u5834\u666f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9ede\u5c0d\u9ede\u901a\u4fe1\u9700\u6c42"),(0,a.kt)("li",{parentName:"ul"},"\u78ba\u4fdd\u6bcf\u689d\u8a0a\u606f\u53ea\u88ab\u4e00\u500b\u6d88\u8cbb\u8005\u8655\u7406")),(0,a.kt)("h2",{id:"\u4e3b\u984ctopic"},"\u4e3b\u984c\uff08Topic\uff09"),(0,a.kt)("p",null,"\u4e3b\u984c\u662f\u4e00\u7a2e\u767c\u5e03/\u8a02\u95b1\uff08Publish/Subscribe\uff09\u7684\u8a0a\u606f\u50b3\u905e\u6a21\u578b"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728\u4e3b\u984c\u4e2d\uff0c\u8a0a\u606f\u7684\u751f\u7522\u8005\u5c07\u8a0a\u606f\u767c\u9001\u5230\u4e3b\u984c\uff0c\u800c\u6240\u6709\u8a02\u95b1\u4e86\u8a72\u4e3b\u984c\u7684\u6d88\u8cbb\u8005\u90fd\u80fd\u5920\u63a5\u6536\u9019\u4e9b\u8a0a\u606f\uff0c\u6bcf\u689d\u8a0a\u606f\u6703\u88ab\u6240\u6709\u8a02\u95b1\u8005\u6536\u5230\uff0c\u9019\u7a2e\u6a21\u578b\u9069\u7528\u65bc\u9700\u8981\u4e00\u5c0d\u591a\u901a\u4fe1\u7684\u60c5\u5883\uff0c\u5982\u8a0a\u606f\u901a\u77e5\u3001\u4e8b\u4ef6\u767c\u4f48\u7b49")),(0,a.kt)("h3",{id:"\u4e3b\u984c\u7684\u61c9\u7528\u5834\u666f"},"\u4e3b\u984c\u7684\u61c9\u7528\u5834\u666f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u5c0d\u591a\u901a\u4fe1\u9700\u6c42"),(0,a.kt)("li",{parentName:"ul"},"\u591a\u500b\u6d88\u8cbb\u8005\u9700\u8981\u7372\u53d6\u76f8\u540c\u7684\u8a0a\u606f")),(0,a.kt)("h2",{id:"\u8a0a\u606f\u7684\u751f\u547d\u9031\u671f"},"\u8a0a\u606f\u7684\u751f\u547d\u9031\u671f"),(0,a.kt)("p",null,"\u5728 ActiveMQ \u4e2d\uff0c\u8a0a\u606f\u7684\u751f\u547d\u9031\u671f\u5305\u62ec\u5e7e\u500b\u95dc\u9375\u968e\u6bb5\uff0c\u9019\u4e9b\u968e\u6bb5\u6db5\u84cb\u4e86\u8a0a\u606f\u5f9e\u751f\u7522\u8005\u5230\u6d88\u8cbb\u8005\u7684\u6574\u500b\u50b3\u905e\u904e\u7a0b"),(0,a.kt)("h3",{id:"\u751f\u7522\u968e\u6bb5"},"\u751f\u7522\u968e\u6bb5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7576\u8a0a\u606f\u7684\u751f\u7522\u8005\u5c07\u8a0a\u606f\u767c\u9001\u5230\u968a\u5217\u6216\u4e3b\u984c\u6642\uff0c\u9019\u6a19\u8a8c\u8457\u8a0a\u606f\u7684\u751f\u547d\u9031\u671f\u7684\u8d77\u59cb\u9ede\u5728\u9019\u500b\u968e\u6bb5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8a0a\u606f\u88ab\u5efa\u7acb\uff0c\u4e26\u5305\u542b\u6709\u95dc\u5167\u5bb9\u7684\u5143\u6578\u64da\uff0c\u4f8b\u5982\u8a0a\u606f\u7684\u6a19\u984c\u3001\u5167\u5bb9\u548c\u767c\u9001\u6642\u9593\u6233"))),(0,a.kt)("h3",{id:"\u5b58\u5132\u968e\u6bb5"},"\u5b58\u5132\u968e\u6bb5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e00\u65e6\u8a0a\u606f\u9032\u5165\u968a\u5217\u6216\u4e3b\u984c\uff0c\u5b83\u9032\u5165\u4e86\u5b58\u5132\u968e\u6bb5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728\u9019\u500b\u968e\u6bb5\uff0cActiveMQ \u8ca0\u8cac\u5b58\u5132\u8a0a\u606f\uff0c\u4e26\u6839\u64da\u8a0a\u606f\u7684\u7279\u6027\u9032\u884c\u5206\u767c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728\u968a\u5217\u4e2d\u8a0a\u606f\u6309\u7167\u5148\u9032\u5148\u51fa\uff08FIFO\uff09\u7684\u539f\u5247\u6392\u968a\uff0c\u800c\u5728\u4e3b\u984c\u4e2d\u6240\u6709\u8a02\u95b1\u8005\u90fd\u80fd\u5920\u7372\u53d6\u8a0a\u606f\u7684\u526f\u672c"))),(0,a.kt)("h3",{id:"\u6d88\u8cbb\u968e\u6bb5"},"\u6d88\u8cbb\u968e\u6bb5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7576\u6d88\u8cbb\u8005\u958b\u59cb\u5f9e\u968a\u5217\u6216\u4e3b\u984c\u4e2d\u63a5\u6536\u8a0a\u606f\u6642\uff0c\u9019\u6a19\u8a8c\u8457\u8a0a\u606f\u7684\u6d88\u8cbb\u968e\u6bb5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728\u9019\u500b\u968e\u6bb5\uff0c\u8a0a\u606f\u88ab\u50b3\u905e\u7d66\u6d88\u8cbb\u8005\uff0c\u4e26\u4e14\u6d88\u8cbb\u8005\u53ef\u4ee5\u958b\u59cb\u8655\u7406\u8a0a\u606f\u7684\u5167\u5bb9\u6d88\u8cbb\u8005\u53ef\u80fd\u57f7\u884c\u8207\u8a0a\u606f\u76f8\u95dc\u7684\u696d\u52d9\u908f\u8f2f\uff0c\u4e26\u5728\u9700\u8981\u6642\u9032\u884c\u56de\u61c9"))),(0,a.kt)("h3",{id:"\u78ba\u8a8d\u968e\u6bb5"},"\u78ba\u8a8d\u968e\u6bb5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728\u6210\u529f\u8655\u7406\u5b8c\u8a0a\u606f\u5f8c\uff0c\u6d88\u8cbb\u8005\u53ef\u80fd\u9700\u8981\u5411 ActiveMQ \u767c\u9001\u78ba\u8a8d\uff08acknowledge\uff09\u4ee5\u8868\u660e\u8a0a\u606f\u5df2\u7d93\u88ab\u6210\u529f\u8655\u7406")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u9019\u662f\u78ba\u4fdd\u8a0a\u606f\u8655\u7406\u5b8c\u7562\u4e26\u6210\u529f\u8655\u7406\u7684\u91cd\u8981\u6b65\u9a5f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728\u67d0\u4e9b\u60c5\u6cc1\u4e0b\uff0c\u5982\u679c\u6d88\u8cbb\u8005\u672a\u80fd\u6210\u529f\u8655\u7406\u8a0a\u606f\uff0c\u53ef\u80fd\u9700\u8981\u767c\u9001\u62d2\u7d55\uff08reject\uff09\u901a\u77e5\uff0c\u4ee5\u4fbf\u8a0a\u606f\u80fd\u5920\u88ab\u91cd\u65b0\u8655\u7406\u6216\u9032\u5165\u6b7b\u4fe1\u968a\u5217"))),(0,a.kt)("h3",{id:"\u9032\u968e\u7279\u6027"},"\u9032\u968e\u7279\u6027"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u9664\u4e86\u57fa\u672c\u7684\u8a0a\u606f\u50b3\u905e\u6a21\u578b\u5916\uff0cActiveMQ \u9084\u63d0\u4f9b\u4e86\u4e00\u4e9b\u9032\u968e\u7279\u6027\uff0c\u9019\u4e9b\u7279\u6027\u80fd\u5920\u9032\u4e00\u6b65\u5b9a\u5236\u8a0a\u606f\u7684\u751f\u547d\u9031\u671f\u548c\u8655\u7406\u6d41\u7a0b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f8b\u5982\uff0c\u8a0a\u606f\u7684\u512a\u5148\u7d1a\u3001\u6301\u4e45\u6027\u3001\u4ee5\u53ca\u6b7b\u4fe1\u968a\u5217\u7684\u914d\u7f6e\u90fd\u662f\u53ef\u4ee5\u8abf\u6574\u7684\u53c3\u6578\uff0c\u9019\u4f7f\u5f97\u958b\u767c\u4eba\u54e1\u80fd\u5920\u6839\u64da\u61c9\u7528\u7684\u9700\u6c42\u4f86\u512a\u5316\u8a0a\u606f\u7684\u8655\u7406"))),(0,a.kt)("h3",{id:"\u751f\u547d\u9031\u671f\u5716\u793a"},"\u751f\u547d\u9031\u671f\u5716\u793a"),(0,a.kt)("mermaid",{value:"graph TD\n  A[\u751f\u7522\u968e\u6bb5] --\x3e|\u5efa\u7acb\u8a0a\u606f| B[\u5b58\u5132\u968e\u6bb5]\n  B --\x3e|\u5206\u767c| C[\u6d88\u8cbb\u968e\u6bb5]\n  C --\x3e|\u8655\u7406\u8a0a\u606f| D[\u78ba\u8a8d\u968e\u6bb5]\n  D --\x3e|\u6210\u529f\u8655\u7406| E[\u9032\u968e\u7279\u6027]\n  E --\x3e|\u5b9a\u5236\u8a2d\u5b9a| F[\u7d50\u675f]\n\n  style A stroke:#333,stroke-width:2px;\n  style B stroke:#333,stroke-width:2px;\n  style C stroke:#333,stroke-width:2px;\n  style D stroke:#333,stroke-width:2px;\n  style E stroke:#333,stroke-width:2px;\n  style F stroke:#333,stroke-width:2px;"}))}d.isMDXComponent=!0}}]);