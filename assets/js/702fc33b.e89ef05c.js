"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[2515],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,k=s["".concat(c,".").concat(m)]||s[m]||d[m]||l;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66642:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(88028),a=(n(59496),n(49613));const l={sidebar_position:95,description:"Day20 C# \u96de\u790e\u89c0\u5ff5- \u7269\u4ef6\u5c0e\u5411(oop)\u57fa\u672c\u89c0\u5ff5",key:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd","cSharp"],tags:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd"]},o="\ud83e\udd16 \u7269\u4ef6\u5c0e\u5411(oop)\u57fa\u672c\u89c0\u5ff5",i={unversionedId:"ironMan13/day20",id:"ironMan13/day20",title:"\ud83e\udd16 \u7269\u4ef6\u5c0e\u5411(oop)\u57fa\u672c\u89c0\u5ff5",description:"Day20 C# \u96de\u790e\u89c0\u5ff5- \u7269\u4ef6\u5c0e\u5411(oop)\u57fa\u672c\u89c0\u5ff5",source:"@site/docs/ironMan13/day20.md",sourceDirName:"ironMan13",slug:"/ironMan13/day20",permalink:"/docs/ironMan13/day20",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/ironMan13/day20.md",tags:[{label:"C#",permalink:"/docs/tags/c"},{label:"\u96de\u790e\u89c0\u5ff5",permalink:"/docs/tags/\u96de\u790e\u89c0\u5ff5"},{label:"\u9435\u4eba\u8cfd",permalink:"/docs/tags/\u9435\u4eba\u8cfd"}],version:"current",lastUpdatedAt:1702200765,formattedLastUpdatedAt:"2023\u5e7412\u670810\u65e5",sidebarPosition:95,frontMatter:{sidebar_position:95,description:"Day20 C# \u96de\u790e\u89c0\u5ff5- \u7269\u4ef6\u5c0e\u5411(oop)\u57fa\u672c\u89c0\u5ff5",key:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd","cSharp"],tags:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd"]},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udd16 \u8b93\u6642\u9593\u5012\u8f49\u5427~\u905e\u8ff4",permalink:"/docs/ironMan13/day19"},next:{title:"\ud83e\udd16 \u7269\u4ef6\u5c0e\u5411(oop)~\u985e\u5225(class)",permalink:"/docs/ironMan13/day21"}},c={},p=[{value:"\u7269\u4ef6\u5c0e\u5411(Object-oriented programming)",id:"\u7269\u4ef6\u5c0e\u5411object-oriented-programming",level:3},{value:"\u7269\u4ef6\u5c0e\u5411\u57fa\u672c\u6982\u5ff5",id:"\u7269\u4ef6\u5c0e\u5411\u57fa\u672c\u6982\u5ff5",level:3},{value:"\u8a73\u7d30\u5167\u5bb9",id:"\u8a73\u7d30\u5167\u5bb9",level:3},{value:"1. Class (\u985e\u5225)",id:"1-class-\u985e\u5225",level:3},{value:"2. Encapsulation\xa0(\u5c01\u88dd)",id:"2-encapsulation\u5c01\u88dd",level:3},{value:"3. Interface\xa0(\u4ecb\u9762)",id:"3-interface\u4ecb\u9762",level:3},{value:"4. Object\xa0(\u7269\u4ef6)",id:"4-object\u7269\u4ef6",level:3},{value:"\u6211\u5011\u660e\u5929\u958b\u59cb\u5c31\u4f86\u5b78\u7fd2\u7269\u4ef6\u5c0e\u5411\u7684\u57fa\u790e\u77e5\u8b58\u5427",id:"\u6211\u5011\u660e\u5929\u958b\u59cb\u5c31\u4f86\u5b78\u7fd2\u7269\u4ef6\u5c0e\u5411\u7684\u57fa\u790e\u77e5\u8b58\u5427",level:3}],u={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-\u7269\u4ef6\u5c0e\u5411oop\u57fa\u672c\u89c0\u5ff5"},"\ud83e\udd16 \u7269\u4ef6\u5c0e\u5411(oop)\u57fa\u672c\u89c0\u5ff5"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://ithelp.ithome.com.tw/upload/images/20210920/20097001xizPMY5Y3v.png",alt:"mdImg"}),"\n\u5728\u7a0b\u5f0f\u8a9e\u8a00\u4e2d\uff0c",(0,a.kt)("br",null),"\n\u6211\u5011\u4e0d\u53ea\u8981\u638c\u63e1\u57fa\u672c\u7684\u8a9e\u6cd5\uff0c",(0,a.kt)("br",null),"\n\u9084\u8981\u53bb\u878d\u6703\u8cab\u901a\uff0c",(0,a.kt)("br",null),"\n\u638c\u63e1\u5b83\u7684\u7cbe\u96a8\u6240\u5728\uff0c",(0,a.kt)("br",null),"\n\u800c\u7269\u4ef6\u5c0e\u5411\u6b63\u662f C#\u7684\u7cbe\u96a8"),(0,a.kt)("h3",{id:"\u7269\u4ef6\u5c0e\u5411object-oriented-programming"},"\u7269\u4ef6\u5c0e\u5411(Object-oriented programming)"),(0,a.kt)("p",null,"\u7269\u4ef6\u5c0e\u5411\u6982\u5ff5:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'\u5c07\u6578\u64da\u8207\u5c0d\u6578\u64da\u7684\u64cd\u4f5c\uff0c\u5305\u88dd\u6210"\u96f6\u4ef6"\uff0c\u4eba\u5011\u5229\u7528\u9019\u4e9b\u96f6\u4ef6\u4f86\u7d44\u88dd\u7a0b\u5f0f')),(0,a.kt)("h3",{id:"\u7269\u4ef6\u5c0e\u5411\u57fa\u672c\u6982\u5ff5"},"\u7269\u4ef6\u5c0e\u5411\u57fa\u672c\u6982\u5ff5"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Class (\u985e\u5225)"),(0,a.kt)("li",{parentName:"ol"},"Encapsulation\xa0(\u5c01\u88dd)"),(0,a.kt)("li",{parentName:"ol"},"Interface\xa0(\u4ecb\u9762)"),(0,a.kt)("li",{parentName:"ol"},"Object\xa0(\u7269\u4ef6)")),(0,a.kt)("h3",{id:"\u8a73\u7d30\u5167\u5bb9"},"\u8a73\u7d30\u5167\u5bb9"),(0,a.kt)("h3",{id:"1-class-\u985e\u5225"},"1. Class (\u985e\u5225)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4ed6\u5c31\u5982\u540c\u4e00\u8f1b\u8eca\u5b50\u7684\u8a2d\u8a08\u85cd\u5716\uff0c\u4e26\u975e\u6c92\u6709\u5be6\u9ad4\uff0c\u7528\u4f86\u5b9a\u7fa9\u898f\u77e9\uff0c\u8b93\u5927\u5bb6\u7684\u601d\u7dad\uff0c\u4fdd\u6301\u4e00\u81f4"),(0,a.kt)("li",{parentName:"ul"},"\u5c07\u4e8b\u7269\u7de8\u5beb\u70ba\u4e00\u500b\u4e00\u500b\u985e\u5225\uff0c\u7528\u6578\u64da\u8868\u793a\u4e8b\u52d9\u7684\u5c6c\u6027\uff0c\u7528\u51fd\u6578\u5be6\u73fe\u6578\u64da\u884c\u70ba\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u985e\u5225\u5c31\u50cf\u662f\u4e00\u7a2e\u8cc7\u6599\u6a21\u578b\uff0c\u7531\u4ed6\u4f86\u5b9a\u7fa9\u8cc7\u6599\u7684\u7d50\u69cb\u61c9\u8a72\u9577\u6210\u751a\u9ebc\u6a23\u5b50\u3002")),(0,a.kt)("h3",{id:"2-encapsulation\u5c01\u88dd"},"2. Encapsulation\xa0(\u5c01\u88dd)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'\u5c31\u5982\u540c\u8eca\u5b50\u7684\u96f6\u4ef6\uff0c\u8b93\u7dad\u4fee\u54e1\u53ea\u8981"\u6703\u62c6\u88dd"\uff0c\u5c31\u80fd\u8b93\u4e00\u53f0\u8eca\u4e0a\u8def\uff0c\u5927\u5927\u63d0\u5347\u4e86\uff0c\u8eca\u8f1b\u751f\u7522\u7684\u6548\u7387'),(0,a.kt)("li",{parentName:"ul"},"\u7269\u4ef6\u5c0e\u5411\u6280\u8853\uff0c\u5c07\u4e8b\u52d9\u7684\u5c6c\u6027\u8207\u884c\u70ba\u7684\u7d30\u7bc0\u5c01\u88dd\u65bc\u985e\u5225\u4e2d\uff0c\u5f62\u6210\u4e00\u500b\u53ef\u4ee5\u91cd\u8907\u4f7f\u7528\u7684\u96f6\u4ef6\u3002")),(0,a.kt)("h3",{id:"3-interface\u4ecb\u9762"},"3. Interface\xa0(\u4ecb\u9762)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4ed6\u5c31\u50cf\u662f\u8eca\u5b50\u7684\u8f2a\u80ce\u898f\u683c\uff0c\u5c07\u898f\u683c\u5b9a\u7fa9\u597d\uff0c\u5927\u5bb6\u90fd\u53ef\u4ee5\u4e0d\u7528\u4f7f\u7528\u7279\u88fd\u7684\u8f2a\u80ce\uff0c\u751a\u81f3\u66f4\u6709\u5229\u65bc\u505a\u8eca\u5b50\u7684\u6539\u88dd"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u7269\u4ef6\u5c0e\u5411\u7a0b\u5f0f\u8a2d\u8a08\u4e2d\uff0c\u53ea\u8981\u4fdd\u6301\u63a5\u53e3\u4e0d\u8b8a\uff0c\u5c31\u80fd\u5c07\u4e00\u500b\u8a2d\u8a08\u66f4\u597d\u7684\u985e\u5225\u4f86\u66ff\u63db\u539f\u4f86\u7684\u985e\u5225\u3002")),(0,a.kt)("h3",{id:"4-object\u7269\u4ef6"},"4. Object\xa0(\u7269\u4ef6)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u751f\u6d3b\u4e2d\u8655\u8655\u5145\u65a5\u7269\u4ef6\uff0cEX:\u4e00\u68df\u623f\u5b50\u3001\u4e00\u8f1b\u6c7d\u8eca....."),(0,a.kt)("li",{parentName:"ul"},"\u4ed6\u662f\u52d5\u614b\u7684\uff0c\u72c0\u614b\u96a8\u6642\u90fd\u6703\u6539\u8b8a\uff0c\u4f46\u6574\u9ad4\u7684\u7d50\u69cb\u8207\u884c\u70ba\u4e26\u4e0d\u6703\u56e0\u70ba\u4ed6\u7684\u52d5\u800c\u53d7\u5230\u5f71\u97ff")),(0,a.kt)("h3",{id:"\u6211\u5011\u660e\u5929\u958b\u59cb\u5c31\u4f86\u5b78\u7fd2\u7269\u4ef6\u5c0e\u5411\u7684\u57fa\u790e\u77e5\u8b58\u5427"},"\u6211\u5011\u660e\u5929\u958b\u59cb\u5c31\u4f86\u5b78\u7fd2\u7269\u4ef6\u5c0e\u5411\u7684\u57fa\u790e\u77e5\u8b58\u5427"))}d.isMDXComponent=!0}}]);