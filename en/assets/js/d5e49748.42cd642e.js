"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[9177],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:15,description:"Liskov substitution principle",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u7269\u4ef6\u5c0e\u5411\u8a2d\u8a08\u539f\u5247","Liskov substitution principle","\u91cc\u6c0f\u66ff\u63db\u539f\u5247"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u7269\u4ef6\u5c0e\u5411\u8a2d\u8a08\u539f\u5247"]},a="\ud83d\udca1 \u91cc\u6c0f\u66ff\u63db\u539f\u5247",s={unversionedId:"designPattern/oop/lsp",id:"designPattern/oop/lsp",title:"\ud83d\udca1 \u91cc\u6c0f\u66ff\u63db\u539f\u5247",description:"Liskov substitution principle",source:"@site/docs/designPattern/oop/lsp.md",sourceDirName:"designPattern/oop",slug:"/designPattern/oop/lsp",permalink:"/en/docs/designPattern/oop/lsp",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/designPattern/oop/lsp.md",tags:[{label:"\u8a2d\u8a08\u6a21\u5f0f",permalink:"/en/docs/tags/\u8a2d\u8a08\u6a21\u5f0f"},{label:"Design Pattern",permalink:"/en/docs/tags/design-pattern"},{label:"\u7269\u4ef6\u5c0e\u5411\u8a2d\u8a08\u539f\u5247",permalink:"/en/docs/tags/\u7269\u4ef6\u5c0e\u5411\u8a2d\u8a08\u539f\u5247"}],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15,description:"Liskov substitution principle",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u7269\u4ef6\u5c0e\u5411\u8a2d\u8a08\u539f\u5247","Liskov substitution principle","\u91cc\u6c0f\u66ff\u63db\u539f\u5247"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u7269\u4ef6\u5c0e\u5411\u8a2d\u8a08\u539f\u5247"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udca1 \u958b\u9589\u539f\u5247",permalink:"/en/docs/designPattern/oop/ocp"},next:{title:"\ud83d\udca1 \u4ecb\u9762\u9694\u96e2\u539f\u5247",permalink:"/en/docs/designPattern/oop/isp"}},l={},p=[{value:"Liskov substitution principle",id:"liskov-substitution-principle",level:2},{value:"\u4ed6\u5fc5\u9808\u7b26\u5408\u56db\u500b\u7e7c\u627f\u7684\u898f\u7bc4:",id:"\u4ed6\u5fc5\u9808\u7b26\u5408\u56db\u500b\u7e7c\u627f\u7684\u898f\u7bc4",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-\u91cc\u6c0f\u66ff\u63db\u539f\u5247"},"\ud83d\udca1 \u91cc\u6c0f\u66ff\u63db\u539f\u5247"),(0,i.kt)("h2",{id:"liskov-substitution-principle"},"Liskov substitution principle"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5b50\u985e\u5225\u53ef\u4ee5\u64f4\u5145\u7236\u985e\u7684\u529f\u80fd\uff0c\u4f46\u4e0d\u53ef\u4ee5\u6539\u8b8a\u5b83\u539f\u6709\u7684\u529f\u80fd"),(0,i.kt)("li",{parentName:"ul"},"\u5be6\u4f5c\u7e7c\u627f\u5f8c\uff0c\u9700\u8981\u78ba\u4fdd\u4ed6\u7684\u578b\u5225\u88ab\u8f49\u63db\u5f8c\u9084\u53ef\u4ee5\u7372\u5f97\u6b63\u78ba\u7684\u7d50\u679c"),(0,i.kt)("li",{parentName:"ul"},"\u53ea\u6709\u5728\u985e\u5225\u4e4b\u9593\u662f is-a \u95dc\u4fc2\u6642\u624d\u80fd\u7528\u7e7c\u627f")),(0,i.kt)("h3",{id:"\u4ed6\u5fc5\u9808\u7b26\u5408\u56db\u500b\u7e7c\u627f\u7684\u898f\u7bc4"},"\u4ed6\u5fc5\u9808\u7b26\u5408\u56db\u500b\u7e7c\u627f\u7684\u898f\u7bc4:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5b8c\u5168\u5be6\u4f5c\u7236\u985e\u7684\u65b9\u6cd5"),(0,i.kt)("li",{parentName:"ol"},"\u5b50\u985e\u5225\u53ef\u4ee5\u64c1\u6709\u4ed6\u81ea\u5df1\u7684\u7279\u6027"),(0,i.kt)("li",{parentName:"ol"},"Overload \u6642\u8981\u6ce8\u610f\u50b3\u5165\u53c3\u6578\u578b\u5225\u7684\u7236\u5b50\u95dc\u4fc2"),(0,i.kt)("li",{parentName:"ol"},"\u8f38\u51fa\u7684\u7236\u5b50\u95dc\u4fc2\u4e5f\u9700\u8981\u6ce8\u610f")))}d.isMDXComponent=!0}}]);