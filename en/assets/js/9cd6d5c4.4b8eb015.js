"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[9725],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(t),g=i,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||a;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=g;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},9786:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(7462),i=(t(7294),t(3905));const a={sidebar_position:20,description:"interface segregation principle",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u7269\u4ef6\u5c0e\u5411\u8a2d\u8a08\u539f\u5247","interface segregation principle","\u4ecb\u9762\u9694\u96e2\u539f\u5247"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u7269\u4ef6\u5c0e\u5411\u8a2d\u8a08\u539f\u5247"]},o="\u4ecb\u9762\u9694\u96e2\u539f\u5247",l={unversionedId:"designPattern/oop/isp",id:"designPattern/oop/isp",title:"\u4ecb\u9762\u9694\u96e2\u539f\u5247",description:"interface segregation principle",source:"@site/docs/designPattern/oop/isp.md",sourceDirName:"designPattern/oop",slug:"/designPattern/oop/isp",permalink:"/en/docs/designPattern/oop/isp",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/designPattern/oop/isp.md",tags:[{label:"\u8a2d\u8a08\u6a21\u5f0f",permalink:"/en/docs/tags/\u8a2d\u8a08\u6a21\u5f0f"},{label:"Design Pattern",permalink:"/en/docs/tags/design-pattern"},{label:"\u7269\u4ef6\u5c0e\u5411\u8a2d\u8a08\u539f\u5247",permalink:"/en/docs/tags/\u7269\u4ef6\u5c0e\u5411\u8a2d\u8a08\u539f\u5247"}],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,description:"interface segregation principle",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u7269\u4ef6\u5c0e\u5411\u8a2d\u8a08\u539f\u5247","interface segregation principle","\u4ecb\u9762\u9694\u96e2\u539f\u5247"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u7269\u4ef6\u5c0e\u5411\u8a2d\u8a08\u539f\u5247"]},sidebar:"tutorialSidebar",previous:{title:"\u91cc\u6c0f\u66ff\u63db\u539f\u5247",permalink:"/en/docs/designPattern/oop/lsp"},next:{title:"\u4f9d\u8cf4\u53cd\u8f49\u539f\u5247",permalink:"/en/docs/designPattern/oop/dip"}},p={},c=[{value:"interface segregation principle",id:"interface-segregation-principle",level:2},{value:"\u7bc4\u4f8b:",id:"\u7bc4\u4f8b",level:3}],s={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u4ecb\u9762\u9694\u96e2\u539f\u5247"},"\u4ecb\u9762\u9694\u96e2\u539f\u5247"),(0,i.kt)("h2",{id:"interface-segregation-principle"},"interface segregation principle"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u78ba\u4fdd\u6a21\u7d44\u4e4b\u9593\u7684\u8026\u5408\u5ea6\u4f4e"),(0,i.kt)("li",{parentName:"ul"},"\u6240\u6709\u6a21\u7d44\u4e4b\u9593\u7684\u4f9d\u8cf4\u95dc\u4fc2\u61c9\u8a72\u8981\u4f9d\u8cf4\u4ed6\u5011\u6240\u9700\u8981\u7684 interface"),(0,i.kt)("li",{parentName:"ul"},"\u78ba\u4fdd\u5f8c\u7e8c\u7684\u7dad\u8b77\u8207\u4fee\u6539\u53ef\u4ee5\u66f4\u5bb9\u6613\u7684\u9032\u884c")),(0,i.kt)("h3",{id:"\u7bc4\u4f8b"},"\u7bc4\u4f8b:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u52d5\u7269\u7684\u4ecb\u9762")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public interface IAnimal\n{\n    //\u5403\n    void Eat();\n    //\u7761\u89ba\n    void Sleep();\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8c93\u54aa\u985e\u5225")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Cat : IAnimal\n{\n    public void Eat()\n    {\n        // Eat implementation\n    }\n\n    public void Sleep()\n    {\n        // Sleep implementation\n    }\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u72d7\u72d7\u985e\u5225")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Dog : IAnimal\n{\n    public void Eat()\n    {\n        // Eat implementation\n    }\n\n    public void Sleep()\n    {\n        // Sleep implementation\n    }\n}\n")))}d.isMDXComponent=!0}}]);