"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[4992],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,f=s["".concat(l,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},939:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:10,description:"map \u51fd\u5f0f",key:["P5 Js","map"]},o="map \u51fd\u5f0f",p={unversionedId:"p5jsNote/MapFunc",id:"p5jsNote/MapFunc",title:"map \u51fd\u5f0f",description:"map \u51fd\u5f0f",source:"@site/docs/p5jsNote/MapFunc.md",sourceDirName:"p5jsNote",slug:"/p5jsNote/MapFunc",permalink:"/docs/p5jsNote/MapFunc",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/p5jsNote/MapFunc.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"map \u51fd\u5f0f",key:["P5 Js","map"]},sidebar:"tutorialSidebar",previous:{title:"\u7dda\u689d\u8207\u8ff4\u5708",permalink:"/docs/p5jsNote/LineAndLoop"},next:{title:"\u5340\u584a\u6f38\u5c64",permalink:"/docs/p5jsNote/Gradient"}},l={},c=[{value:"\u8aaa\u660e:",id:"\u8aaa\u660e",level:3},{value:"\u4f8b:",id:"\u4f8b",level:3}],u={toc:c},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"map-\u51fd\u5f0f"},"map \u51fd\u5f0f"),(0,a.kt)("h3",{id:"\u8aaa\u660e"},"\u8aaa\u660e:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"map \u9996\u5148\u9700\u8981\u8a2d\u5b9a\u539f\u59cb\u53c3\u6578\u7684\u7bc4\u570d"),(0,a.kt)("li",{parentName:"ul"},"\u4e26\u8a2d\u5b9a\u8981\u8a2d\u5b9a\u7684\u6bd4\u4f8b\u7bc4\u570d"),(0,a.kt)("li",{parentName:"ul"},"\u4e26\u8f38\u5165\u9700\u8981\u7e2e\u653e\u7684\u53c3\u6578"),(0,a.kt)("li",{parentName:"ul"},"\u900f\u904e map \u51fd\u5f0f\u6703\u5c07\u8f38\u5165\u7684\u53c3\u6578\u505a\u7b49\u6bd4\u4f8b\u7e2e\u653e")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"}," map(\u8f38\u5165\u7684\u53c3\u6578 , \u539f\u59cb\u53c3\u6578\u8d77\u59cb\u7bc4\u570d, \u539f\u59cb\u53c3\u6578\u7d50\u675f\u7bc4\u570d, \u7e2e\u653e\u8d77\u59cb\u7bc4\u570d, \u7e2e\u653e\u7d50\u675f\u7bc4\u570d)")),(0,a.kt)("h3",{id:"\u4f8b"},"\u4f8b:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6211\u5011\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"li"},"map(1,0,10,0,100)")," \u70ba\u4f8b"),(0,a.kt)("li",{parentName:"ul"},"\u539f\u59cb\u7684\u7bc4\u570d\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"0~10")),(0,a.kt)("li",{parentName:"ul"},"\u6211\u5011\u8981\u5c07\u5b83\u8b8a\u6210 ",(0,a.kt)("inlineCode",{parentName:"li"},"0~100")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0~10")," \u8b8a\u6210 ",(0,a.kt)("inlineCode",{parentName:"li"},"0~100")," \u5247\u9700\u8981\u4e58\u4ee5 10 \u500d"),(0,a.kt)("li",{parentName:"ul"},"\u56e0\u6b64\u6211\u5011\u9700\u8981\u7e2e\u653e\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"1")," \u901a\u904e map \u51fd\u5f0f\u7684\u8a08\u7b97\u5f8c\uff0c\u6703\u8b8a\u6210 ",(0,a.kt)("inlineCode",{parentName:"li"},"10"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://lonelyyeezhichicken.github.io/p5Js-Demo/Method-map/MapDemo.html"},"\u7dda\u4e0a\u6e2c\u8a66")))}m.isMDXComponent=!0}}]);