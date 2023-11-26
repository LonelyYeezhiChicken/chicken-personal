"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[5838],{49613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,y=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(y,o(o({ref:t},s),{},{components:n})):r.createElement(y,o({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},38848:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(88028),a=(n(59496),n(49613));const i={sidebar_position:1,description:"\u5de5\u5ee0\u65b9\u6cd5 (Factory Method Pattern)",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u5de5\u5ee0\u65b9\u6cd5","Factory Method Pattern"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern"]},o="\ud83d\udca1 \u5de5\u5ee0\u6a21\u5f0f",l={unversionedId:"designPattern/creationalPattern/factory/fmp",id:"designPattern/creationalPattern/factory/fmp",title:"\ud83d\udca1 \u5de5\u5ee0\u6a21\u5f0f",description:"\u5de5\u5ee0\u65b9\u6cd5 (Factory Method Pattern)",source:"@site/docs/designPattern/creationalPattern/factory/fmp.md",sourceDirName:"designPattern/creationalPattern/factory",slug:"/designPattern/creationalPattern/factory/fmp",permalink:"/docs/designPattern/creationalPattern/factory/fmp",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/designPattern/creationalPattern/factory/fmp.md",tags:[{label:"\u8a2d\u8a08\u6a21\u5f0f",permalink:"/docs/tags/\u8a2d\u8a08\u6a21\u5f0f"},{label:"Design Pattern",permalink:"/docs/tags/design-pattern"}],version:"current",lastUpdatedAt:1701005397,formattedLastUpdatedAt:"2023\u5e7411\u670826\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"\u5de5\u5ee0\u65b9\u6cd5 (Factory Method Pattern)",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u5de5\u5ee0\u65b9\u6cd5","Factory Method Pattern"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern"]},sidebar:"tutorialSidebar",previous:{title:" \ud83d\udca1 \u5de5\u5ee0\u65b9\u6cd5",permalink:"/docs/category/--\u5de5\u5ee0\u65b9\u6cd5"},next:{title:"\ud83d\udca1 \u7c21\u55ae\u5de5\u5ee0",permalink:"/docs/designPattern/creationalPattern/factory/sfp"}},c={},p=[{value:"Factory Method Pattern",id:"factory-method-pattern",level:2},{value:"\u7bc4\u4f8b",id:"\u7bc4\u4f8b",level:2},{value:"\u5c07\u5716\u8868\u529f\u80fd\u5c01\u88dd\u5728\u4e00\u500b Chart \u985e\u5225\u4e2d",id:"\u5c07\u5716\u8868\u529f\u80fd\u5c01\u88dd\u5728\u4e00\u500b-chart-\u985e\u5225\u4e2d",level:3},{value:"\u7f3a\u9ede",id:"\u7f3a\u9ede",level:2}],s={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-\u5de5\u5ee0\u6a21\u5f0f"},"\ud83d\udca1 \u5de5\u5ee0\u6a21\u5f0f"),(0,a.kt)("h2",{id:"factory-method-pattern"},"Factory Method Pattern"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5de5\u5ee0\u6a21\u5f0f\u662f\u6700\u5e38\u7528\u7684\u4e00\u7a2e\u8a2d\u8a08\u6a21\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"\u6211\u5011\u901a\u5e38\u6307\u7684\u5de5\u5ee0\u6a21\u5f0f\u6307 \u5de5\u5ee0\u65b9\u6cd5\u6a21\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"\u7c21\u55ae\u5de5\u5834\u5247\u662f\u5728\u8edf\u9ad4\u4e4b\u4e2d\uff0c\u4f7f\u7528\u7684\u5341\u5206\u5e73\u51e1")),(0,a.kt)("h2",{id:"\u7bc4\u4f8b"},"\u7bc4\u4f8b"),(0,a.kt)("h3",{id:"\u5c07\u5716\u8868\u529f\u80fd\u5c01\u88dd\u5728\u4e00\u500b-chart-\u985e\u5225\u4e2d"},"\u5c07\u5716\u8868\u529f\u80fd\u5c01\u88dd\u5728\u4e00\u500b Chart \u985e\u5225\u4e2d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'public class Chart {\n    private string type;\n\n    public Chart(object[][] data, string type)\n    {\n        this.type = type;\n        if( type == "histogram")\n        {\n            // init \u67f1\u72c0\u5716\n        }\n        else if( type == "pie")\n        {\n            // init \u5713\u9905\u5716\n        }\n        else if( type == "line")\n        {\n            // init \u6298\u7dda\u5716\n        }\n    }\n\n    public void display()\n    {\n         if( type == "histogram")\n        {\n            // \u986f\u793a \u67f1\u72c0\u5716\n        }\n        else if( type == "pie")\n        {\n            // \u986f\u793a \u5713\u9905\u5716\n        }\n        else if( type == "line")\n        {\n            // \u986f\u793a \u6298\u7dda\u5716\n        }\n    }\n}\n')),(0,a.kt)("h2",{id:"\u7f3a\u9ede"},"\u7f3a\u9ede"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Chart \u88e1\u9762\u5b58\u5728\u8457\u975e\u5e38\u591a\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"if - else")," \uff0ccode \u975e\u5e38\u7684\u58df\u9577\u3001\u96e3\u4ee5\u95b1\u8b80\uff0c\u4e26\u4e14\u96e3\u4ee5\u7dad\u8b77\u8207\u6e2c\u8a66\uff0c\u5c24\u5176\u7d93\u904e\u5927\u91cf\u7684\u689d\u4ef6\u53e5\u5f8c\u4e5f\u6703\u5c0d\u6548\u80fd\u9020\u6210\u5f71\u97ff"),(0,a.kt)("li",{parentName:"ol"},"\u800c\u4e14\u5c07\u521d\u59cb\u5316\u90fd\u96c6\u4e2d\u5728\u4e00\u500b class \u4e2d\u9055\u53cd\u4e86\u55ae\u4e00\u539f\u5247\uff0c\u4e0d\u5229\u65bc\u7a0b\u5f0f\u78bc\u7684\u91cd\u7528\u6027\u8207\u7dad\u8b77"),(0,a.kt)("li",{parentName:"ol"},"\u7576\u9700\u8981\u65b0\u589e\u65b0\u7684 Chart \u6642\uff0c\u9700\u8981\u4fee\u6539 Chart class\uff0c\u9055\u53cd\u4e86\u958b\u9589\u539f\u5247"),(0,a.kt)("li",{parentName:"ol"},"\u5ba2\u6236\u7aef\u53ea\u80fd\u900f\u904e ",(0,a.kt)("inlineCode",{parentName:"li"},"new")," \u95dc\u9375\u5b57\u4f86\u5be6\u4f8b\u5316 Chart \uff0cChart class \u8207\u5ba2\u6236\u7aef\u8026\u5408\u5ea6\u9ad8\uff0c\u5be6\u4f8b\u5316\u8207\u7269\u4ef6\u7121\u6cd5\u5206\u96e2"),(0,a.kt)("li",{parentName:"ol"},"\u5ba2\u6236\u7aef\u5982\u679c\u60f3\u8981\u66f4\u5f48\u6027\u7684\u4f7f\u7528 Chart \u7684\u8a71\uff0c\u6bd4\u5982\u8aaa:\u984f\u8272\u3001\u9ad8\u5ea6\u7b49\u7b49\uff0c\u69cb\u9020\u51fd\u6578\u5247\u7121\u63d0\u4f9b\u521d\u59cb\u5316\u7684\u529f\u80fd\uff0c\u90a3\u6bcf\u6b21\u90fd\u5f97\u7531\u5ba2\u6236\u7aef\u4f86\u5b8c\u6210\uff0c\u90a3\u5bb9\u6613\u9020\u6210\u5927\u91cf\u91cd\u8907\u7684\u7a0b\u5f0f\u78bc")),(0,a.kt)("p",null,"\u4ee5\u4e0a\u6703\u6210 \u9ad8\u8026\u5408\uff0c\u591a\u8077\u8cac\uff0c\u56e0\u6b64\u5ef6\u4f38\u51fa\u4e86\u7c21\u55ae\u5de5\u5ee0\u8a2d\u8a08\u6a21\u5f0f\uff0c\u4ed6\u5728\u4e00\u5b9a\u7684\u7a0b\u5ea6\u4e0a\u89e3\u6c7a\u4e86\u4ee5\u4e0a\u7684\u554f\u984c"))}u.isMDXComponent=!0}}]);