"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[2677],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),y=a,d=p["".concat(o,".").concat(y)]||p[y]||m[y]||c;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=y;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<c;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},3188:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var r=n(88028),a=(n(59496),n(49613));const c={sidebar_position:10,description:"\u62bd\u8c61\u5de5\u5ee0 (Abstract Factory)",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u62bd\u8c61\u5de5\u5ee0","Abstract Factory"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern"]},i="\ud83d\udca1 \u62bd\u8c61\u5de5\u5ee0",l={unversionedId:"designPattern/creationalPattern/factory/abstractFactory",id:"designPattern/creationalPattern/factory/abstractFactory",title:"\ud83d\udca1 \u62bd\u8c61\u5de5\u5ee0",description:"\u62bd\u8c61\u5de5\u5ee0 (Abstract Factory)",source:"@site/docs/designPattern/creationalPattern/factory/abstractFactory.md",sourceDirName:"designPattern/creationalPattern/factory",slug:"/designPattern/creationalPattern/factory/abstractFactory",permalink:"/en/docs/designPattern/creationalPattern/factory/abstractFactory",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/designPattern/creationalPattern/factory/abstractFactory.md",tags:[{label:"\u8a2d\u8a08\u6a21\u5f0f",permalink:"/en/docs/tags/\u8a2d\u8a08\u6a21\u5f0f"},{label:"Design Pattern",permalink:"/en/docs/tags/design-pattern"}],version:"current",lastUpdatedAt:1702200765,formattedLastUpdatedAt:"Dec 10, 2023",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"\u62bd\u8c61\u5de5\u5ee0 (Abstract Factory)",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u62bd\u8c61\u5de5\u5ee0","Abstract Factory"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udca1 \u7c21\u55ae\u5de5\u5ee0",permalink:"/en/docs/designPattern/creationalPattern/factory/sfp"},next:{title:"\ud83d\udca1 \u539f\u578b\u6a21\u5f0f",permalink:"/en/docs/designPattern/creationalPattern/prototype"}},o={},s=[{value:"Abstract Factory",id:"abstract-factory",level:2},{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u7bc4\u4f8b",id:"\u7bc4\u4f8b",level:2},{value:"1. \u5148\u5efa\u7acb\u4e00\u500b\u6c7d\u8eca\u7684 interface",id:"1-\u5148\u5efa\u7acb\u4e00\u500b\u6c7d\u8eca\u7684-interface",level:3},{value:"2. \u5be6\u4f5c <code>\u8dd1\u8eca</code> \u8207 <code>\u5bb6\u5ead\u8eca</code> \u985e\u5225",id:"2-\u5be6\u4f5c-\u8dd1\u8eca-\u8207-\u5bb6\u5ead\u8eca-\u985e\u5225",level:3},{value:"3. \u5efa\u7acb\u62bd\u8c61\u5de5\u5ee0 interface",id:"3-\u5efa\u7acb\u62bd\u8c61\u5de5\u5ee0-interface",level:3},{value:"4. \u5be6\u4f5c <code>\u8dd1\u8eca\u5de5\u5ee0</code> \u8207 <code>\u5bb6\u5ead\u8eca\u5de5\u5ee0</code>",id:"4-\u5be6\u4f5c-\u8dd1\u8eca\u5de5\u5ee0-\u8207-\u5bb6\u5ead\u8eca\u5de5\u5ee0",level:3},{value:"5. \u5be6\u969b\u751f\u7522",id:"5-\u5be6\u969b\u751f\u7522",level:3},{value:"6. \u7d50\u679c",id:"6-\u7d50\u679c",level:3}],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-\u62bd\u8c61\u5de5\u5ee0"},"\ud83d\udca1 \u62bd\u8c61\u5de5\u5ee0"),(0,a.kt)("h2",{id:"abstract-factory"},"Abstract Factory"),(0,a.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4ed6\u7528\u65bc\u5275\u5efa\u7269\u4ef6\u7684\u985e\u5225"),(0,a.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u4e00\u500b interface \uff0c\u4e26\u4e14\u5efa\u7acb\u76f8\u95dc\u7684\u7269\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u4f7f\u7528\u6642\u4e0d\u7528\u53bb\u6307\u5b9a\u4ed6\u5177\u9ad4\u7684\u985e\u5225")),(0,a.kt)("h2",{id:"\u7bc4\u4f8b"},"\u7bc4\u4f8b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9996\u5148\u6211\u5011\u6709\u4e00\u500b\u9700\u6c42\uff0c\u6703\u6709\u4e00\u500b\u8eca\u5ee0\u4f86\u751f\u7522\u5404\u5f0f\u8eca\u8f1b")),(0,a.kt)("h3",{id:"1-\u5148\u5efa\u7acb\u4e00\u500b\u6c7d\u8eca\u7684-interface"},"1. \u5148\u5efa\u7acb\u4e00\u500b\u6c7d\u8eca\u7684 interface"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"    internal interface ICar\n    {\n        /// <summary>\n        /// \u53d6\u5f97\u8eca\u7a2e\n        /// </summary>\n        /// <returns>\u8eca\u7a2e</returns>\n        string GetCarType();\n    }\n")),(0,a.kt)("h3",{id:"2-\u5be6\u4f5c-\u8dd1\u8eca-\u8207-\u5bb6\u5ead\u8eca-\u985e\u5225"},"2. \u5be6\u4f5c ",(0,a.kt)("inlineCode",{parentName:"h3"},"\u8dd1\u8eca")," \u8207 ",(0,a.kt)("inlineCode",{parentName:"h3"},"\u5bb6\u5ead\u8eca")," \u985e\u5225"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'    /// <summary>\n    /// \u8dd1\u8eca\n    /// </summary>\n    internal class SportsCar : ICar\n    {\n        /// <summary>\n        /// \u53d6\u5f97\u8eca\u7a2e\n        /// </summary>\n        /// <returns>\u8dd1\u8eca</returns>\n        public string GetCarType()\n        {\n            return "Sports Car";\n        }\n    }\n\n    /// <summary>\n    /// \u5bb6\u5ead\u5f0f\n    /// </summary>\n    internal class FamilyCar : ICar\n    {\n        /// <summary>\n        /// \u53d6\u5f97\u8eca\u7a2e\n        /// </summary>\n        /// <returns>\u5bb6\u5ead\u8eca</returns>\n        public string GetCarType()\n        {\n            return "Family Car";\n        }\n    }\n')),(0,a.kt)("h3",{id:"3-\u5efa\u7acb\u62bd\u8c61\u5de5\u5ee0-interface"},"3. \u5efa\u7acb\u62bd\u8c61\u5de5\u5ee0 interface"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"    internal interface ICarFactory\n    {\n        /// <summary>\n        /// \u5275\u5efa\u8eca\u8f1b\u5be6\u9ad4\n        /// </summary>\n        /// <returns></returns>\n        ICar CreateCar();\n    }\n")),(0,a.kt)("h3",{id:"4-\u5be6\u4f5c-\u8dd1\u8eca\u5de5\u5ee0-\u8207-\u5bb6\u5ead\u8eca\u5de5\u5ee0"},"4. \u5be6\u4f5c ",(0,a.kt)("inlineCode",{parentName:"h3"},"\u8dd1\u8eca\u5de5\u5ee0")," \u8207 ",(0,a.kt)("inlineCode",{parentName:"h3"},"\u5bb6\u5ead\u8eca\u5de5\u5ee0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"    /// <summary>\n    /// \u8dd1\u8eca\u5de5\u5ee0\n    /// </summary>\n    internal class SportsCarFactory : ICarFactory\n    {\n        /// <summary>\n        /// \u53d6\u5f97\u8eca\u8f1b\u5be6\u9ad4\n        /// </summary>\n        /// <returns></returns>\n        public ICar CreateCar()\n        {\n            return new SportsCar();\n        }\n    }\n\n    /// <summary>\n    /// \u5bb6\u5ead\u8eca\u5de5\u5ee0\n    /// </summary>\n    internal class FamilyCarFactory : ICarFactory\n    {\n        /// <summary>\n        /// \u53d6\u5f97\u8eca\u8f1b\u5be6\u9ad4\n        /// </summary>\n        /// <returns></returns>\n        public ICar CreateCar()\n        {\n            return new FamilyCar();\n        }\n    }\n")),(0,a.kt)("h3",{id:"5-\u5be6\u969b\u751f\u7522"},"5. \u5be6\u969b\u751f\u7522"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'\nICarFactory factory;\n\nConsole.WriteLine("\u8acb\u8f38\u5165\u8981\u751f\u7522\u7684\u8eca\u7a2e\u4ee3\u865f:");\nConsole.WriteLine(@"1. \u8dd1\u8eca\n2. \u5bb6\u5ead\u8eca");\n\nstring carNo = Console.ReadLine();\n\nswitch (carNo)\n{\n    case "1":\n        factory = new SportsCarFactory();\n        break;\n    case "2":\n        factory = new FamilyCarFactory();\n        break;\n    default:\n        throw new Exception("\u7121\u6b64\u8eca\u7a2e");\n}\n\nICar car = factory.CreateCar();\nConsole.WriteLine($"\u751f\u7522 {car.GetCarType()} X 1");\n')),(0,a.kt)("h3",{id:"6-\u7d50\u679c"},"6. \u7d50\u679c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8f38\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},"1")),(0,a.kt)("li",{parentName:"ul"},"\u8f38\u51fa")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u8acb\u8f38\u5165\u8981\u751f\u7522\u7684\u8eca\u7a2e\u4ee3\u865f:\n1. \u8dd1\u8eca\n2. \u5bb6\u5ead\u8eca\n1\n\u751f\u7522 Sports Car X 1\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8f38\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},"2")),(0,a.kt)("li",{parentName:"ul"},"\u8f38\u51fa")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u8acb\u8f38\u5165\u8981\u751f\u7522\u7684\u8eca\u7a2e\u4ee3\u865f:\n1. \u8dd1\u8eca\n2. \u5bb6\u5ead\u8eca\n2\n\u751f\u7522 Family Car X 1\n")))}m.isMDXComponent=!0}}]);