"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[9718],{49613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(88028),a=(n(59496),n(49613));const l={sidebar_position:5,description:"\u8f49\u63a5\u5668\u6a21\u5f0f (Adapter Pattern)",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u8f49\u63a5\u5668\u6a21\u5f0f","Adapter Pattern"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern"]},i="\ud83d\udca1 \u8f49\u63a5\u5668\u6a21\u5f0f",o={unversionedId:"designPattern/structuralPattern/adapter",id:"designPattern/structuralPattern/adapter",title:"\ud83d\udca1 \u8f49\u63a5\u5668\u6a21\u5f0f",description:"\u8f49\u63a5\u5668\u6a21\u5f0f (Adapter Pattern)",source:"@site/docs/designPattern/structuralPattern/adapter.md",sourceDirName:"designPattern/structuralPattern",slug:"/designPattern/structuralPattern/adapter",permalink:"/en/docs/designPattern/structuralPattern/adapter",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/designPattern/structuralPattern/adapter.md",tags:[{label:"\u8a2d\u8a08\u6a21\u5f0f",permalink:"/en/docs/tags/\u8a2d\u8a08\u6a21\u5f0f"},{label:"Design Pattern",permalink:"/en/docs/tags/design-pattern"}],version:"current",lastUpdatedAt:1702200765,formattedLastUpdatedAt:"Dec 10, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"\u8f49\u63a5\u5668\u6a21\u5f0f (Adapter Pattern)",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u8f49\u63a5\u5668\u6a21\u5f0f","Adapter Pattern"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern"]},sidebar:"tutorialSidebar",previous:{title:"\u7d50\u69cb\u6a21\u5f0f",permalink:"/en/docs/category/\u7d50\u69cb\u6a21\u5f0f"},next:{title:"\ud83d\udca1 \u6a4b\u63a5\u6a21\u5f0f",permalink:"/en/docs/designPattern/structuralPattern/bridge"}},c={},s=[{value:"Adapter Pattern",id:"adapter-pattern",level:2},{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u7bc4\u4f8b",id:"\u7bc4\u4f8b",level:2},{value:"1. \u4ee5\u4e0b\u662f\u76ee\u524d\u73fe\u6709\u7684\u8f38\u51fa\u6a94\u6848\u7a0b\u5f0f",id:"1-\u4ee5\u4e0b\u662f\u76ee\u524d\u73fe\u6709\u7684\u8f38\u51fa\u6a94\u6848\u7a0b\u5f0f",level:3},{value:"2. \u5728\u4e0d\u7570\u52d5\u73fe\u6709\u8f38\u51fa\u6a94\u6848\u7a0b\u5f0f\u7684\u60c5\u6cc1\u4e0b\uff0c\u6211\u5011\u9700\u8981\u65b0\u589e\u4e00\u5c64\u8f49\u63a5\u5668",id:"2-\u5728\u4e0d\u7570\u52d5\u73fe\u6709\u8f38\u51fa\u6a94\u6848\u7a0b\u5f0f\u7684\u60c5\u6cc1\u4e0b\u6211\u5011\u9700\u8981\u65b0\u589e\u4e00\u5c64\u8f49\u63a5\u5668",level:3},{value:"3. \u6b64\u8655\u7528\u7c21\u55ae\u5de5\u5ee0\u4f86\u5efa\u7acb\u8f49\u63a5\u5668\uff0c\u4e26\u6ce8\u5165\u8f38\u51fa\u6a94\u6848\u7684\u985e\u5225",id:"3-\u6b64\u8655\u7528\u7c21\u55ae\u5de5\u5ee0\u4f86\u5efa\u7acb\u8f49\u63a5\u5668\u4e26\u6ce8\u5165\u8f38\u51fa\u6a94\u6848\u7684\u985e\u5225",level:3},{value:"4. \u5ba2\u6236\u7aef\u4f7f\u7528",id:"4-\u5ba2\u6236\u7aef\u4f7f\u7528",level:3},{value:"5. \u7d50\u679c",id:"5-\u7d50\u679c",level:3}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-\u8f49\u63a5\u5668\u6a21\u5f0f"},"\ud83d\udca1 \u8f49\u63a5\u5668\u6a21\u5f0f"),(0,a.kt)("h2",{id:"adapter-pattern"},"Adapter Pattern"),(0,a.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u5beb\u7a0b\u5f0f\u7684\u904e\u7a0b\u4e2d\uff0c\u6211\u5011\u7d93\u5e38\u6703\u9762\u81e8\u4e0d\u80fd\u4fee\u6539\u539f\u59cb\u78bc\u6216\u4e0d\u5141\u8a31\u4fee\u6539\u7684\u60c5\u6cc1\u3002\u8f49\u63a5\u5668\u6a21\u5f0f\u5c31\u662f\u70ba\u4e86\u89e3\u6c7a\u9019\u7a2e\u60c5\u5883\u800c\u51fa\u73fe\u7684\u8a2d\u8a08\u6a21\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"\u5b83\u5141\u8a31\u6211\u5011\u5728\u4e0d\u4fee\u6539\u539f\u6709\u985e\u7684\u60c5\u6cc1\u4e0b\uff0c\u5c07\u5176\u8207\u5ba2\u6236\u7aef\u4ee3\u78bc\u76f8\u9069\u914d")),(0,a.kt)("h2",{id:"\u7bc4\u4f8b"},"\u7bc4\u4f8b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9700\u6c42: \u9700\u8981\u4f9d\u7167\u4e0d\u540c\u7684\u60c5\u5883\uff0c\u4f86\u8f38\u51fa\u4e0d\u540c\u7684\u6a94\u6848\u683c\u5f0f")),(0,a.kt)("h3",{id:"1-\u4ee5\u4e0b\u662f\u76ee\u524d\u73fe\u6709\u7684\u8f38\u51fa\u6a94\u6848\u7a0b\u5f0f"},"1. \u4ee5\u4e0b\u662f\u76ee\u524d\u73fe\u6709\u7684\u8f38\u51fa\u6a94\u6848\u7a0b\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'  internal interface IFileWitter\n    {\n        void Write();\n    }\n\n    internal class JsonFileWitter : IFileWitter\n    {\n        public void Write()\n        {\n            Console.WriteLine("File.json");\n        }\n    }\n\n    internal class CsvFileWitter : IFileWitter\n    {\n        public void Write()\n        {\n            Console.WriteLine("File.csv");\n        }\n    }\n')),(0,a.kt)("h3",{id:"2-\u5728\u4e0d\u7570\u52d5\u73fe\u6709\u8f38\u51fa\u6a94\u6848\u7a0b\u5f0f\u7684\u60c5\u6cc1\u4e0b\u6211\u5011\u9700\u8981\u65b0\u589e\u4e00\u5c64\u8f49\u63a5\u5668"},"2. \u5728\u4e0d\u7570\u52d5\u73fe\u6709\u8f38\u51fa\u6a94\u6848\u7a0b\u5f0f\u7684\u60c5\u6cc1\u4e0b\uff0c\u6211\u5011\u9700\u8981\u65b0\u589e\u4e00\u5c64\u8f49\u63a5\u5668"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"    internal interface IFileTool\n    {\n        void Create();\n    }\n\n    internal class Adapter : IFileTool\n    {\n        private readonly IFileWitter _tool;\n\n        public Adapter(IFileWitter tool)\n        {\n            _tool = tool;\n        }\n\n        public void Create()\n        {\n            _tool.Write();\n        }\n    }\n")),(0,a.kt)("h3",{id:"3-\u6b64\u8655\u7528\u7c21\u55ae\u5de5\u5ee0\u4f86\u5efa\u7acb\u8f49\u63a5\u5668\u4e26\u6ce8\u5165\u8f38\u51fa\u6a94\u6848\u7684\u985e\u5225"},"3. \u6b64\u8655\u7528\u7c21\u55ae\u5de5\u5ee0\u4f86\u5efa\u7acb\u8f49\u63a5\u5668\uff0c\u4e26\u6ce8\u5165\u8f38\u51fa\u6a94\u6848\u7684\u985e\u5225"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'    internal static class FileTool\n    {\n        public static IFileTool Factory(string fileType)\n        {\n            return fileType switch\n            {\n                "json" => new Adapter(new JsonFileWitter()),\n                "csv" => new Adapter(new CsvFileWitter()),\n                _ => throw new ArgumentException($"\u5c1a\u672a\u5be6\u505a {fileType}"),\n            };\n        }\n    }\n')),(0,a.kt)("h3",{id:"4-\u5ba2\u6236\u7aef\u4f7f\u7528"},"4. \u5ba2\u6236\u7aef\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'FileTool.Factory("json").Create();\nFileTool.Factory("csv").Create();\n')),(0,a.kt)("h3",{id:"5-\u7d50\u679c"},"5. \u7d50\u679c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8f38\u51fa:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"File.json\nFile.csv\n")))}d.isMDXComponent=!0}}]);