"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[6944],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),y=a,d=p["".concat(o,".").concat(y)]||p[y]||m[y]||c;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,l=new Array(c);l[0]=y;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<c;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},1429:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const c={sidebar_position:10,description:"\u62bd\u8c61\u5de5\u5ee0 (Abstract Factory)",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u62bd\u8c61\u5de5\u5ee0","Abstract Factory"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern"]},l="\ud83d\udca1 \u62bd\u8c61\u5de5\u5ee0",i={unversionedId:"designPattern/factory/abstractFactory",id:"designPattern/factory/abstractFactory",title:"\ud83d\udca1 \u62bd\u8c61\u5de5\u5ee0",description:"\u62bd\u8c61\u5de5\u5ee0 (Abstract Factory)",source:"@site/docs/designPattern/factory/abstractFactory.md",sourceDirName:"designPattern/factory",slug:"/designPattern/factory/abstractFactory",permalink:"/docs/designPattern/factory/abstractFactory",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/designPattern/factory/abstractFactory.md",tags:[{label:"\u8a2d\u8a08\u6a21\u5f0f",permalink:"/docs/tags/\u8a2d\u8a08\u6a21\u5f0f"},{label:"Design Pattern",permalink:"/docs/tags/design-pattern"}],version:"current",lastUpdatedAt:1688812009,formattedLastUpdatedAt:"2023\u5e747\u67088\u65e5",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"\u62bd\u8c61\u5de5\u5ee0 (Abstract Factory)",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u62bd\u8c61\u5de5\u5ee0","Abstract Factory"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udca1 \u7c21\u55ae\u5de5\u5ee0",permalink:"/docs/designPattern/factory/sfp"},next:{title:"\u5275\u5efa\u6a21\u5f0f",permalink:"/docs/category/\u5275\u5efa\u6a21\u5f0f"}},o={},s=[{value:"Abstract Factory",id:"abstract-factory",level:2},{value:"\u6982\u8ff0:",id:"\u6982\u8ff0",level:3},{value:"\u7bc4\u4f8b:",id:"\u7bc4\u4f8b",level:3},{value:"1. \u5148\u5efa\u7acb\u4e00\u500b\u6c7d\u8eca\u7684 interface",id:"1-\u5148\u5efa\u7acb\u4e00\u500b\u6c7d\u8eca\u7684-interface",level:3},{value:"2. \u5be6\u4f5c <code>\u8dd1\u8eca</code> \u8207 <code>\u5bb6\u5ead\u8eca</code> \u985e\u5225",id:"2-\u5be6\u4f5c-\u8dd1\u8eca-\u8207-\u5bb6\u5ead\u8eca-\u985e\u5225",level:3},{value:"3. \u5efa\u7acb\u62bd\u8c61\u5de5\u5ee0 interface",id:"3-\u5efa\u7acb\u62bd\u8c61\u5de5\u5ee0-interface",level:3},{value:"4. \u5be6\u4f5c <code>\u8dd1\u8eca\u5de5\u5ee0</code> \u8207 <code>\u5bb6\u5ead\u8eca\u5de5\u5ee0</code>",id:"4-\u5be6\u4f5c-\u8dd1\u8eca\u5de5\u5ee0-\u8207-\u5bb6\u5ead\u8eca\u5de5\u5ee0",level:3},{value:"5. \u5be6\u969b\u751f\u7522",id:"5-\u5be6\u969b\u751f\u7522",level:3},{value:"6. \u7d50\u679c",id:"6-\u7d50\u679c",level:3}],u={toc:s},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-\u62bd\u8c61\u5de5\u5ee0"},"\ud83d\udca1 \u62bd\u8c61\u5de5\u5ee0"),(0,a.kt)("h2",{id:"abstract-factory"},"Abstract Factory"),(0,a.kt)("h3",{id:"\u6982\u8ff0"},"\u6982\u8ff0:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4ed6\u7528\u65bc\u5275\u5efa\u7269\u4ef6\u7684\u985e\u5225"),(0,a.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u4e00\u500b interface \uff0c\u4e26\u4e14\u5efa\u7acb\u76f8\u95dc\u7684\u7269\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u4f7f\u7528\u6642\u4e0d\u7528\u53bb\u6307\u5b9a\u4ed6\u5177\u9ad4\u7684\u985e\u5225")),(0,a.kt)("h3",{id:"\u7bc4\u4f8b"},"\u7bc4\u4f8b:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9996\u5148\u6211\u5011\u6709\u4e00\u500b\u9700\u6c42\uff0c\u6703\u6709\u4e00\u500b\u8eca\u5ee0\u4f86\u751f\u7522\u5404\u5f0f\u8eca\u8f1b")),(0,a.kt)("h3",{id:"1-\u5148\u5efa\u7acb\u4e00\u500b\u6c7d\u8eca\u7684-interface"},"1. \u5148\u5efa\u7acb\u4e00\u500b\u6c7d\u8eca\u7684 interface"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"    internal interface ICar\n    {\n        /// <summary>\n        /// \u53d6\u5f97\u8eca\u7a2e\n        /// </summary>\n        /// <returns>\u8eca\u7a2e</returns>\n        string GetCarType();\n    }\n")),(0,a.kt)("h3",{id:"2-\u5be6\u4f5c-\u8dd1\u8eca-\u8207-\u5bb6\u5ead\u8eca-\u985e\u5225"},"2. \u5be6\u4f5c ",(0,a.kt)("inlineCode",{parentName:"h3"},"\u8dd1\u8eca")," \u8207 ",(0,a.kt)("inlineCode",{parentName:"h3"},"\u5bb6\u5ead\u8eca")," \u985e\u5225"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'    /// <summary>\n    /// \u8dd1\u8eca\n    /// </summary>\n    internal class SportsCar : ICar\n    {\n        /// <summary>\n        /// \u53d6\u5f97\u8eca\u7a2e\n        /// </summary>\n        /// <returns>\u8dd1\u8eca</returns>\n        public string GetCarType()\n        {\n            return "Sports Car";\n        }\n    }\n\n    /// <summary>\n    /// \u5bb6\u5ead\u5f0f\n    /// </summary>\n    internal class FamilyCar : ICar\n    {\n        /// <summary>\n        /// \u53d6\u5f97\u8eca\u7a2e\n        /// </summary>\n        /// <returns>\u5bb6\u5ead\u8eca</returns>\n        public string GetCarType()\n        {\n            return "Family Car";\n        }\n    }\n')),(0,a.kt)("h3",{id:"3-\u5efa\u7acb\u62bd\u8c61\u5de5\u5ee0-interface"},"3. \u5efa\u7acb\u62bd\u8c61\u5de5\u5ee0 interface"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"    internal interface ICarFactory\n    {\n        /// <summary>\n        /// \u5275\u5efa\u8eca\u8f1b\u5be6\u9ad4\n        /// </summary>\n        /// <returns></returns>\n        ICar CreateCar();\n    }\n")),(0,a.kt)("h3",{id:"4-\u5be6\u4f5c-\u8dd1\u8eca\u5de5\u5ee0-\u8207-\u5bb6\u5ead\u8eca\u5de5\u5ee0"},"4. \u5be6\u4f5c ",(0,a.kt)("inlineCode",{parentName:"h3"},"\u8dd1\u8eca\u5de5\u5ee0")," \u8207 ",(0,a.kt)("inlineCode",{parentName:"h3"},"\u5bb6\u5ead\u8eca\u5de5\u5ee0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"    /// <summary>\n    /// \u8dd1\u8eca\u5de5\u5ee0\n    /// </summary>\n    internal class SportsCarFactory : ICarFactory\n    {\n        /// <summary>\n        /// \u53d6\u5f97\u8eca\u8f1b\u5be6\u9ad4\n        /// </summary>\n        /// <returns></returns>\n        public ICar CreateCar()\n        {\n            return new SportsCar();\n        }\n    }\n\n    /// <summary>\n    /// \u5bb6\u5ead\u8eca\u5de5\u5ee0\n    /// </summary>\n    internal class FamilyCarFactory : ICarFactory\n    {\n        /// <summary>\n        /// \u53d6\u5f97\u8eca\u8f1b\u5be6\u9ad4\n        /// </summary>\n        /// <returns></returns>\n        public ICar CreateCar()\n        {\n            return new FamilyCar();\n        }\n    }\n")),(0,a.kt)("h3",{id:"5-\u5be6\u969b\u751f\u7522"},"5. \u5be6\u969b\u751f\u7522"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'\nICarFactory factory;\n\nConsole.WriteLine("\u8acb\u8f38\u5165\u8981\u751f\u7522\u7684\u8eca\u7a2e\u4ee3\u865f:");\nConsole.WriteLine(@"1. \u8dd1\u8eca\n2. \u5bb6\u5ead\u8eca");\n\nstring carNo = Console.ReadLine();\n\nswitch (carNo)\n{\n    case "1":\n        factory = new SportsCarFactory();\n        break;\n    case "2":\n        factory = new FamilyCarFactory();\n        break;\n    default:\n        throw new Exception("\u7121\u6b64\u8eca\u7a2e");\n}\n\nICar car = factory.CreateCar();\nConsole.WriteLine($"\u751f\u7522 {car.GetCarType()} X 1");\n')),(0,a.kt)("h3",{id:"6-\u7d50\u679c"},"6. \u7d50\u679c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8f38\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},"1")),(0,a.kt)("li",{parentName:"ul"},"\u8f38\u51fa")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u8acb\u8f38\u5165\u8981\u751f\u7522\u7684\u8eca\u7a2e\u4ee3\u865f:\n1. \u8dd1\u8eca\n2. \u5bb6\u5ead\u8eca\n1\n\u751f\u7522 Sports Car X 1\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8f38\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},"2")),(0,a.kt)("li",{parentName:"ul"},"\u8f38\u51fa")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u8acb\u8f38\u5165\u8981\u751f\u7522\u7684\u8eca\u7a2e\u4ee3\u865f:\n1. \u8dd1\u8eca\n2. \u5bb6\u5ead\u8eca\n2\n\u751f\u7522 Family Car X 1\n")))}m.isMDXComponent=!0}}]);