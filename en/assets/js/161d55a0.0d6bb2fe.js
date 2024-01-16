"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[2190],{49613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,b=s["".concat(u,".").concat(m)]||s[m]||p[m]||l;return n?r.createElement(b,i(i({ref:t},d),{},{components:n})):r.createElement(b,i({ref:t},d))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(88028),a=(n(59496),n(49613));const l={sidebar_position:5,description:"\u5275\u9020\u8005\u6a21\u5f0f (Builder Pattern)",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u5275\u9020\u8005\u6a21\u5f0f","Builder Pattern"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern"]},i="\ud83d\udca1 \u5275\u9020\u8005\u6a21\u5f0f",o={unversionedId:"designPattern/creationalPattern/builder",id:"designPattern/creationalPattern/builder",title:"\ud83d\udca1 \u5275\u9020\u8005\u6a21\u5f0f",description:"\u5275\u9020\u8005\u6a21\u5f0f (Builder Pattern)",source:"@site/docs/designPattern/creationalPattern/builder.md",sourceDirName:"designPattern/creationalPattern",slug:"/designPattern/creationalPattern/builder",permalink:"/en/docs/designPattern/creationalPattern/builder",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/designPattern/creationalPattern/builder.md",tags:[{label:"\u8a2d\u8a08\u6a21\u5f0f",permalink:"/en/docs/tags/\u8a2d\u8a08\u6a21\u5f0f"},{label:"Design Pattern",permalink:"/en/docs/tags/design-pattern"}],version:"current",lastUpdatedAt:1705414237,formattedLastUpdatedAt:"Jan 16, 2024",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"\u5275\u9020\u8005\u6a21\u5f0f (Builder Pattern)",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u5275\u9020\u8005\u6a21\u5f0f","Builder Pattern"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udca1 \u539f\u578b\u6a21\u5f0f",permalink:"/en/docs/designPattern/creationalPattern/prototype"},next:{title:"\ud83d\udca1 \u55ae\u4f8b\u6a21\u5f0f",permalink:"/en/docs/designPattern/creationalPattern/singleton"}},u={},c=[{value:"Builder Pattern",id:"builder-pattern",level:2},{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u5275\u9020\u8005\u6a21\u5f0f\u5305\u542b",id:"\u5275\u9020\u8005\u6a21\u5f0f\u5305\u542b",level:3},{value:"\u7bc4\u4f8b",id:"\u7bc4\u4f8b",level:2},{value:"1. \u5148\u5b9a\u7fa9\u7522\u54c1 - \u623f\u5b50",id:"1-\u5148\u5b9a\u7fa9\u7522\u54c1---\u623f\u5b50",level:3},{value:"2. \u5b9a\u7fa9\u5275\u9020\u8005\u4ecb\u9762",id:"2-\u5b9a\u7fa9\u5275\u9020\u8005\u4ecb\u9762",level:3},{value:"3. \u5be6\u4f5c\u5275\u9020\u8005\u4ecb\u9762 - \u5177\u9ad4\u5275\u9020\u8005",id:"3-\u5be6\u4f5c\u5275\u9020\u8005\u4ecb\u9762---\u5177\u9ad4\u5275\u9020\u8005",level:3},{value:"4. \u5efa\u7acb\u6307\u63ee\u8005",id:"4-\u5efa\u7acb\u6307\u63ee\u8005",level:3},{value:"5. \u5ba2\u6236\u7aef\u4f7f\u7528",id:"5-\u5ba2\u6236\u7aef\u4f7f\u7528",level:3},{value:"6.\u7d50\u679c",id:"6\u7d50\u679c",level:3}],d={toc:c},s="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-\u5275\u9020\u8005\u6a21\u5f0f"},"\ud83d\udca1 \u5275\u9020\u8005\u6a21\u5f0f"),(0,a.kt)("h2",{id:"builder-pattern"},"Builder Pattern"),(0,a.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b83\u9069\u7528\u65bc\u5404\u5f0f\u7269\u4ef6\u90fd\u9700\u5206\u958b\u5efa\u7acb\u7684\u8907\u96dc\u60c5\u5883"),(0,a.kt)("li",{parentName:"ul"},"\u512a\u9ede:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5bb9\u6613\u64f4\u5145"),(0,a.kt)("li",{parentName:"ul"},"\u6709\u4e00\u500b\u7d71\u4e00\u7684\u4ecb\u9762\u4f86\u898f\u7bc4\u8907\u96dc\u7269\u4ef6\u7684\u5efa\u7acb"),(0,a.kt)("li",{parentName:"ul"},"\u5206\u958b\u4e86\u7269\u4ef6\u7684\u5efa\u7acb\u904e\u7a0b\uff0c\u8b93\u7269\u4ef6\u5efa\u7acb\u904e\u7a0b\u53ef\u4ee5\u5efa\u7acb\u4e0d\u540c\u7684\u7d44\u5408"))),(0,a.kt)("li",{parentName:"ul"},"\u7f3a\u9ede:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5728\u9700\u6c42\u8907\u96dc\u5ea6\u589e\u52a0\u6642\uff0c\u9700\u8981\u66f4\u591a\u7684\u985e\u5225\u4f86\u5efa\u7acb\u7269\u4ef6\uff0c\u5c0e\u81f4\u958b\u767c\u8207\u7dad\u8b77\u6210\u672c\u63d0\u9ad8")))),(0,a.kt)("h3",{id:"\u5275\u9020\u8005\u6a21\u5f0f\u5305\u542b"},"\u5275\u9020\u8005\u6a21\u5f0f\u5305\u542b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5275\u9020\u8005\u4ecb\u9762 (Builder interface): \u898f\u7bc4\u5efa\u7acb\u7269\u4ef6\u6240\u9700\u8981\u7684\u65b9\u6cd5"),(0,a.kt)("li",{parentName:"ul"},"\u5177\u9ad4\u5275\u9020\u8005 (Concrete Builder): \u5be6\u4f5c\u5275\u9020\u8005\u4ecb\u9762\u7684\u529f\u80fd"),(0,a.kt)("li",{parentName:"ul"},"\u6307\u63ee\u8005 (Director): \u8ca0\u8cac\u8655\u7406\u5efa\u7acb\u6d41\u7a0b"),(0,a.kt)("li",{parentName:"ul"},"\u7522\u54c1 (Product): \u8981\u88ab\u5efa\u7acb\u7684\u7269\u4ef6")),(0,a.kt)("h2",{id:"\u7bc4\u4f8b"},"\u7bc4\u4f8b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9700\u6c42: \u6211\u9700\u8981\u5efa\u7acb\u4e00\u68df\u623f\u5b50\uff0c\u623f\u5b50\u8981\u6709\u9580\u3001\u6709\u7a97\u3001\u6709\u7246")),(0,a.kt)("h3",{id:"1-\u5148\u5b9a\u7fa9\u7522\u54c1---\u623f\u5b50"},"1. \u5148\u5b9a\u7fa9\u7522\u54c1 - \u623f\u5b50"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'    internal class House\n    {\n        /// <summary>\n        /// \u9580\n        /// </summary>\n        public string Door { get; set; }\n        /// <summary>\n        /// \u7246\n        /// </summary>\n        public string Wall { get; set; }\n        /// <summary>\n        /// \u7a97\u6236\n        /// </summary>\n        public string Window { get; set; }\n\n        public override string ToString()\n        {\n            return $"\u623f\u5b50\u5305\u542b: {Door}\u3001{Wall}\u3001{Window}";\n        }\n    }\n')),(0,a.kt)("h3",{id:"2-\u5b9a\u7fa9\u5275\u9020\u8005\u4ecb\u9762"},"2. \u5b9a\u7fa9\u5275\u9020\u8005\u4ecb\u9762"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"    internal abstract class Builder\n    {\n        public abstract void BuildDoor();\n        public abstract void BuildWall();\n        public abstract void BuildWindow();\n        public abstract House GetProduct();\n    }\n")),(0,a.kt)("h3",{id:"3-\u5be6\u4f5c\u5275\u9020\u8005\u4ecb\u9762---\u5177\u9ad4\u5275\u9020\u8005"},"3. \u5be6\u4f5c\u5275\u9020\u8005\u4ecb\u9762 - \u5177\u9ad4\u5275\u9020\u8005"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'    internal class ConcreteBuilder : Builder\n    {\n        private House _product = new();\n\n        public override void BuildDoor()\n        {\n            _product.Door = "\u9580";\n        }\n\n        public override void BuildWall()\n        {\n            _product.Wall = "\u7246\u58c1";\n        }\n\n        public override void BuildWindow()\n        {\n            _product.Window = "\u7a97\u6236";\n        }\n\n        public override House GetProduct()\n        {\n            return _product;\n        }\n    }\n')),(0,a.kt)("h3",{id:"4-\u5efa\u7acb\u6307\u63ee\u8005"},"4. \u5efa\u7acb\u6307\u63ee\u8005"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"    internal class Director\n    {\n        public static void Construct(Builder builder)\n        {\n            builder.BuildDoor();\n            builder.BuildWall();\n            builder.BuildWindow();\n        }\n    }\n")),(0,a.kt)("h3",{id:"5-\u5ba2\u6236\u7aef\u4f7f\u7528"},"5. \u5ba2\u6236\u7aef\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"Builder builder = new ConcreteBuilder();\nDirector.Construct(builder);\n\nvar house = builder.GetProduct();\n\nConsole.WriteLine(house.ToString());\n")),(0,a.kt)("h3",{id:"6\u7d50\u679c"},"6.\u7d50\u679c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8f38\u51fa:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u623f\u5b50\u5305\u542b: \u9580\u3001\u7246\u58c1\u3001\u7a97\u6236\n")))}p.isMDXComponent=!0}}]);