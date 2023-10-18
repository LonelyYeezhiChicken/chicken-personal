"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[6104],{49613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,m=u["".concat(p,".").concat(d)]||u[d]||y[d]||a;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67956:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(88028),o=(n(59496),n(49613));const a={sidebar_position:1,description:"\u539f\u578b\u6a21\u5f0f (Prototype Pattern)",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u539f\u578b\u6a21\u5f0f","Prototype Pattern"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern"]},l="\ud83d\udca1 \u539f\u578b\u6a21\u5f0f",i={unversionedId:"designPattern/creationalPattern/prototype",id:"designPattern/creationalPattern/prototype",title:"\ud83d\udca1 \u539f\u578b\u6a21\u5f0f",description:"\u539f\u578b\u6a21\u5f0f (Prototype Pattern)",source:"@site/docs/designPattern/creationalPattern/prototype.md",sourceDirName:"designPattern/creationalPattern",slug:"/designPattern/creationalPattern/prototype",permalink:"/docs/designPattern/creationalPattern/prototype",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/designPattern/creationalPattern/prototype.md",tags:[{label:"\u8a2d\u8a08\u6a21\u5f0f",permalink:"/docs/tags/\u8a2d\u8a08\u6a21\u5f0f"},{label:"Design Pattern",permalink:"/docs/tags/design-pattern"}],version:"current",lastUpdatedAt:1697605422,formattedLastUpdatedAt:"2023\u5e7410\u670818\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"\u539f\u578b\u6a21\u5f0f (Prototype Pattern)",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u539f\u578b\u6a21\u5f0f","Prototype Pattern"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udca1 \u62bd\u8c61\u5de5\u5ee0",permalink:"/docs/designPattern/creationalPattern/factory/abstractFactory"},next:{title:"\ud83d\udca1 \u5275\u9020\u8005\u6a21\u5f0f",permalink:"/docs/designPattern/creationalPattern/builder"}},p={},c=[{value:"Prototype Pattern",id:"prototype-pattern",level:2},{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u539f\u578b\u6a21\u5f0f\u5305\u542b",id:"\u539f\u578b\u6a21\u5f0f\u5305\u542b",level:3},{value:"\u7bc4\u4f8b",id:"\u7bc4\u4f8b",level:2},{value:"1. \u9996\u5148\u5b9a\u7fa9\u4e00\u500b\u539f\u578b interface",id:"1-\u9996\u5148\u5b9a\u7fa9\u4e00\u500b\u539f\u578b-interface",level:3},{value:"2. \u5efa\u7acb\u5b9a\u7fa9 x y \u7684\u985e\u5225",id:"2-\u5efa\u7acb\u5b9a\u7fa9-x-y-\u7684\u985e\u5225",level:3},{value:"3. \u4f7f\u7528",id:"3-\u4f7f\u7528",level:3},{value:"4. \u7d50\u679c",id:"4-\u7d50\u679c",level:3}],s={toc:c},u="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-\u539f\u578b\u6a21\u5f0f"},"\ud83d\udca1 \u539f\u578b\u6a21\u5f0f"),(0,o.kt)("h2",{id:"prototype-pattern"},"Prototype Pattern"),(0,o.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u53ef\u8907\u88fd\u4e00\u500b\u7269\u4ef6\uff0c\u4e26\u628a\u539f\u6709\u7684\u72c0\u614b\u90fd\u50b3\u905e\u7d66\u65b0\u7684\u7269\u4ef6"),(0,o.kt)("li",{parentName:"ul"},"\u512a\u9ede: \u53ef\u4ee5\u964d\u4f4e\u5efa\u7acb\u7269\u4ef6\u7684\u6210\u672c"),(0,o.kt)("li",{parentName:"ul"},"\u7f3a\u9ede: \u5982\u9700\u8981\u5be6\u73fe ICloneable \u4ecb\u9762, \u6709\u6642\u6703\u4f7f\u7a0b\u5f0f\u78bc\u8b8a\u5f97\u8907\u96dc\uff0c\u4e5f\u4e0d\u5bb9\u6613\u63a7\u5236\u7269\u4ef6\u7684\u72c0\u614b")),(0,o.kt)("h3",{id:"\u539f\u578b\u6a21\u5f0f\u5305\u542b"},"\u539f\u578b\u6a21\u5f0f\u5305\u542b"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u539f\u578b\u4ecb\u9762\uff08Prototype Interface\uff09\uff1a\u5b9a\u7fa9\u4e86\u7528\u65bc\u5275\u5efa\u8907\u88fd\u7684\u65b9\u6cd5"),(0,o.kt)("li",{parentName:"ol"},"\u539f\u578b\u7269\u4ef6 \uff08Concrete Prototype\uff09\uff1a \u5be6\u4f5c\u539f\u578b\u4ecb\u9762\u7684\u985e\u5225"),(0,o.kt)("li",{parentName:"ol"},"\u5ba2\u6236\u7aef\uff08Client\uff09\uff1a\u4f7f\u7528\u539f\u578b\u5275\u5efa\u65b0\u7269\u4ef6")),(0,o.kt)("h2",{id:"\u7bc4\u4f8b"},"\u7bc4\u4f8b"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4eca\u5929\u6709\u4e00\u500b\u5b9a\u7fa9 x y \u7684\u985e\u5225\uff0c\u6211\u9700\u8981\u8907\u88fd\u4e26\u6cbf\u7528\u4ed6\u7684 x y \u8a2d\u5b9a")),(0,o.kt)("h3",{id:"1-\u9996\u5148\u5b9a\u7fa9\u4e00\u500b\u539f\u578b-interface"},"1. \u9996\u5148\u5b9a\u7fa9\u4e00\u500b\u539f\u578b interface"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"    internal interface IPrototype\n    {\n        IPrototype Clone();\n    }\n")),(0,o.kt)("h3",{id:"2-\u5efa\u7acb\u5b9a\u7fa9-x-y-\u7684\u985e\u5225"},"2. \u5efa\u7acb\u5b9a\u7fa9 x y \u7684\u985e\u5225"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'    internal class ConcretePrototypeA : IPrototype\n    {\n        public int x;\n        public int y;\n        public string? Name;\n\n        /// <summary>\n        ///  \u6df1\u62f7\u8c9d\u4ecb\u9762\n        /// </summary>\n        /// <returns></returns>\n        public IPrototype Clone()\n        {\n            return (IPrototype)MemberwiseClone();\n        }\n\n        public override string ToString()\n        {\n            return $"x = {x}, y = {y}, Name = {Name}";\n        }\n    }\n')),(0,o.kt)("h3",{id:"3-\u4f7f\u7528"},"3. \u4f7f\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'ConcretePrototypeA prototypeA = new()\n{\n    x = 1,\n    y = 2,\n    Name = "ProtoTypeA"\n};\nConsole.WriteLine(prototypeA.ToString());\n\nConcretePrototypeA prototypeAClone = (ConcretePrototypeA)prototypeA.Clone();\nprototypeAClone.Name = "ProtoTypeAClone";\nConsole.WriteLine(prototypeAClone.ToString());\n')),(0,o.kt)("h3",{id:"4-\u7d50\u679c"},"4. \u7d50\u679c"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8f38\u51fa:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"x = 1, y = 2, Name = ProtoTypeA\nx = 1, y = 2, Name = ProtoTypeAClone\n")))}y.isMDXComponent=!0}}]);