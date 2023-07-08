"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[5895],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1,description:"\u8a2d\u8a08\u6a21\u5f0f\u7b46\u8a18",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern"]},i="\u7269\u4ef6\u5c0e\u5411\u8a2d\u8a08\u539f\u5247\u6982\u8ff0",l={unversionedId:"designPattern/oop/oopOverview",id:"designPattern/oop/oopOverview",title:"\u7269\u4ef6\u5c0e\u5411\u8a2d\u8a08\u539f\u5247\u6982\u8ff0",description:"\u8a2d\u8a08\u6a21\u5f0f\u7b46\u8a18",source:"@site/docs/designPattern/oop/oopOverview.md",sourceDirName:"designPattern/oop",slug:"/designPattern/oop/oopOverview",permalink:"/en/docs/designPattern/oop/oopOverview",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/designPattern/oop/oopOverview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"\u8a2d\u8a08\u6a21\u5f0f\u7b46\u8a18",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern"]},sidebar:"tutorialSidebar",previous:{title:"\u7269\u4ef6\u5c0e\u5411",permalink:"/en/docs/category/\u7269\u4ef6\u5c0e\u5411"},next:{title:"\u55ae\u4e00\u8cac\u4efb\u539f\u5247",permalink:"/en/docs/designPattern/oop/srp"}},p={},s=[{value:"\u7269\u4ef6\u5c0e\u5411\u8a2d\u8a08",id:"\u7269\u4ef6\u5c0e\u5411\u8a2d\u8a08",level:3}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7269\u4ef6\u5c0e\u5411\u8a2d\u8a08\u539f\u5247\u6982\u8ff0"},"\u7269\u4ef6\u5c0e\u5411\u8a2d\u8a08\u539f\u5247\u6982\u8ff0"),(0,a.kt)("h3",{id:"\u7269\u4ef6\u5c0e\u5411\u8a2d\u8a08"},"\u7269\u4ef6\u5c0e\u5411\u8a2d\u8a08"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7269\u4ef6\u5c0e\u5411\u8a2d\u8a08\u4e2d\u4e3b\u8981\u76ee\u6a19\u70ba\u589e\u52a0\u7cfb\u7d71\u7684\u53ef\u7dad\u8b77\u6027\u8207\u8907\u7528\u6027"),(0,a.kt)("li",{parentName:"ul"},"\u6700\u5e38\u898b\u7684\u7269\u4ef6\u5c0e\u5411\u8a2d\u8a08\u539f\u5247\u70ba SOLID")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u7a31"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5b9a\u7fa9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u55ae\u4e00\u8cac\u4efb\u539f\u5247 (SRP) Single Responsibility Principle"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4e00\u500b\u985e\u5225\u61c9\u8a72\u53ea\u6709\u4e00\u500b\u6539\u8b8a\u7684\u7406\u7531\uff01 A class should have only one reason to change")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u958b\u653e\u5c01\u9589\u539f\u5247 (OCP) Open Closed Principle"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8edf\u9ad4\u5be6\u9ad4 (\u985e\u5225\u3001\u6a21\u7d44\u3001\u51fd\u5f0f\u7b49) \u61c9\u80fd\u958b\u653e\u64f4\u5145\u4f46\u5c01\u9589\u4fee\u6539 Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u91cc\u6c0f\u66ff\u63db\u539f\u5247 (LSP) Liskov Substitution Principle"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b50\u578b\u5225\u5fc5\u9700\u53ef\u66ff\u63db\u70ba\u4ed6\u7684\u57fa\u5e95\u578b\u5225 Subtypes must be substitutable for their base types")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u4ecb\u9762\u9694\u96e2\u539f\u5247 (ISP) Interface Segregation Principle"),(0,a.kt)("td",{parentName:"tr",align:null},"\u591a\u500b\u7528\u6236\u7aef\u5c08\u7528\u7684\u4ecb\u9762\u512a\u65bc\u4e00\u500b\u901a\u7528\u9700\u6c42\u4ecb\u9762 Many client specific interfaces are better than one general purpose interface")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u4f9d\u8cf4\u53cd\u8f49\u539f\u5247 (DIP) Dependency Inversion Principle"),(0,a.kt)("td",{parentName:"tr",align:null},"\u62bd\u8c61\u4e0d\u61c9\u8a72\u76f8\u4f9d\u65bc\u7d30\u7bc0\u3002\u800c\u7d30\u7bc0\u5247\u61c9\u8a72\u76f8\u4f9d\u65bc\u62bd\u8c61 Abstractions should not depend on details. Details should depend on abstractions")))))}d.isMDXComponent=!0}}]);