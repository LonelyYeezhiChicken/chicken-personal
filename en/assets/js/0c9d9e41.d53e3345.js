"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[6371],{3905:(n,e,t)=>{t.d(e,{Zo:()=>k,kt:()=>b});var l=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,l)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,l,r=function(n,e){if(null==n)return{};var t,l,r={},a=Object.keys(n);for(l=0;l<a.length;l++)t=a[l],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(l=0;l<a.length;l++)t=a[l],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var s=l.createContext({}),u=function(n){var e=l.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},k=function(n){var e=u(n.components);return l.createElement(s.Provider,{value:e},n.children)},c="mdxType",p={inlineCode:"code",wrapper:function(n){var e=n.children;return l.createElement(l.Fragment,{},e)}},m=l.forwardRef((function(n,e){var t=n.components,r=n.mdxType,a=n.originalType,s=n.parentName,k=i(n,["components","mdxType","originalType","parentName"]),c=u(t),m=r,b=c["".concat(s,".").concat(m)]||c[m]||p[m]||a;return t?l.createElement(b,o(o({ref:e},k),{},{components:t})):l.createElement(b,o({ref:e},k))}));function b(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var a=t.length,o=new Array(a);o[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=n,i[c]="string"==typeof n?n:r,o[1]=i;for(var u=2;u<a;u++)o[u]=t[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5224:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var l=t(7462),r=(t(7294),t(3905));const a={sidebar_position:30,description:"Day7 C# \u96de\u790e\u89c0\u5ff5- \u4f60\u6709\u9078\u64c7\u969c\u7919\u55ce? \u4ea4\u7d66if\u9673\u8ff0\u5f0f\u89e3\u6c7a\u5427!",key:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd","cSharp"],tags:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd"]},o="\u4f60\u6709\u9078\u64c7\u969c\u7919\u55ce? \u4ea4\u7d66if\u9673\u8ff0\u5f0f\u89e3\u6c7a\u5427!",i={unversionedId:"ironMan13/day7",id:"ironMan13/day7",title:"\u4f60\u6709\u9078\u64c7\u969c\u7919\u55ce? \u4ea4\u7d66if\u9673\u8ff0\u5f0f\u89e3\u6c7a\u5427!",description:"Day7 C# \u96de\u790e\u89c0\u5ff5- \u4f60\u6709\u9078\u64c7\u969c\u7919\u55ce? \u4ea4\u7d66if\u9673\u8ff0\u5f0f\u89e3\u6c7a\u5427!",source:"@site/docs/ironMan13/day7.md",sourceDirName:"ironMan13",slug:"/ironMan13/day7",permalink:"/en/docs/ironMan13/day7",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/ironMan13/day7.md",tags:[{label:"C#",permalink:"/en/docs/tags/c"},{label:"\u96de\u790e\u89c0\u5ff5",permalink:"/en/docs/tags/\u96de\u790e\u89c0\u5ff5"},{label:"\u9435\u4eba\u8cfd",permalink:"/en/docs/tags/\u9435\u4eba\u8cfd"}],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,description:"Day7 C# \u96de\u790e\u89c0\u5ff5- \u4f60\u6709\u9078\u64c7\u969c\u7919\u55ce? \u4ea4\u7d66if\u9673\u8ff0\u5f0f\u89e3\u6c7a\u5427!",key:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd","cSharp"],tags:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd"]},sidebar:"tutorialSidebar",previous:{title:"\u7a0b\u5f0f\u78bc\u64c1\u6709\u5224\u65b7\u771f\u5047\u7684\u80fd\u529b~\u908f\u8f2f\u904b\u7b97\u5b50",permalink:"/en/docs/ironMan13/day6"},next:{title:"\u5982\u679c\u6c92\u6709\u5982\u679c\uff0c\u53ea\u6709\u592a\u591a\u7684\u5982\u679cswitch\u9673\u8ff0\u5f0f",permalink:"/en/docs/ironMan13/day8"}},s={},u=[{value:"if \u9673\u8ff0\u5f0f",id:"if-\u9673\u8ff0\u5f0f",level:3},{value:"\u7bc4\u4f8b 1:\u5982\u679c\u4e0b\u96e8\uff0c\u90a3\u5c31\u5f85\u5728\u5bb6\uff0c\u6c92\u4e0b\u96e8\u5c31\u51fa\u53bb\u73a9",id:"\u7bc4\u4f8b-1\u5982\u679c\u4e0b\u96e8\u90a3\u5c31\u5f85\u5728\u5bb6\u6c92\u4e0b\u96e8\u5c31\u51fa\u53bb\u73a9",level:3},{value:"\u5224\u65b7\u6578\u5b57\u7684\u5927\u5c0f",id:"\u5224\u65b7\u6578\u5b57\u7684\u5927\u5c0f",level:3},{value:"\u7bc4\u4f8b:\u62db\u724c\u4e0a\u9762\u5beb\u8aaa\u672a\u6210\u5e74\u8acb\u52ff\u9032\u5165\uff0c\u90a3\u6211\u5011\u4f86\u505a\u4e00\u500b\u8f38\u5165\u5e74\u9f61\uff0c\u8b93\u96fb\u8166\u5224\u65b7\u80fd\u4e0d\u80fd\u9032\u5165\u5427",id:"\u7bc4\u4f8b\u62db\u724c\u4e0a\u9762\u5beb\u8aaa\u672a\u6210\u5e74\u8acb\u52ff\u9032\u5165\u90a3\u6211\u5011\u4f86\u505a\u4e00\u500b\u8f38\u5165\u5e74\u9f61\u8b93\u96fb\u8166\u5224\u65b7\u80fd\u4e0d\u80fd\u9032\u5165\u5427",level:3},{value:"else if",id:"else-if",level:3},{value:"\u7bc4\u4f8b:\u5982\u679c\u6211\u6eff 18 \u6b72\u5c31\u53ef\u4ee5\u8003\u6a5f\u8eca\u99d5\u7167\uff0c\u4f46\u8981\u6eff 20 \u6b72\u624d\u80fd\u8003\u91cd\u6a5f\u99d5\u7167",id:"\u7bc4\u4f8b\u5982\u679c\u6211\u6eff-18-\u6b72\u5c31\u53ef\u4ee5\u8003\u6a5f\u8eca\u99d5\u7167\u4f46\u8981\u6eff-20-\u6b72\u624d\u80fd\u8003\u91cd\u6a5f\u99d5\u7167",level:3},{value:"\u5de2\u72c0 if",id:"\u5de2\u72c0-if",level:3},{value:"\u7bc4\u4f8b:\u5982\u679c\u662f\u5047\u65e5\u6211\u5c31\u8981\u51fa\u53bb\u73a9\uff0c\u5e73\u65e5\u5c31\u5f97\u4e56\u4e56\u4e0a\u8ab2\uff0c\u5982\u679c\u6674\u5929\u6211\u5c31\u8981\u53bb\u6d77\u908a\uff0c\u4e0d\u7136\u5c31\u53bb\u722c\u5c71",id:"\u7bc4\u4f8b\u5982\u679c\u662f\u5047\u65e5\u6211\u5c31\u8981\u51fa\u53bb\u73a9\u5e73\u65e5\u5c31\u5f97\u4e56\u4e56\u4e0a\u8ab2\u5982\u679c\u6674\u5929\u6211\u5c31\u8981\u53bb\u6d77\u908a\u4e0d\u7136\u5c31\u53bb\u722c\u5c71",level:3},{value:"\u81ea\u5f9e\u5b78\u6703 if \u4e4b\u5f8c\u518d\u4e5f\u6c92\u6709\u9078\u64c7\u969c\u7919\u4e86\uff0c\u4eca\u5929\u7684\u6545\u4e8b\u5c31\u5230\u9019\u908a\u4e86\uff0c\u8b1d\u8b1d\u5927\u5bb6\uff0c\u6211\u5011\u660e\u5929\u518d\u898b",id:"\u81ea\u5f9e\u5b78\u6703-if-\u4e4b\u5f8c\u518d\u4e5f\u6c92\u6709\u9078\u64c7\u969c\u7919\u4e86\u4eca\u5929\u7684\u6545\u4e8b\u5c31\u5230\u9019\u908a\u4e86\u8b1d\u8b1d\u5927\u5bb6\u6211\u5011\u660e\u5929\u518d\u898b",level:3}],k={toc:u},c="wrapper";function p(n){let{components:e,...t}=n;return(0,r.kt)(c,(0,l.Z)({},k,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4f60\u6709\u9078\u64c7\u969c\u7919\u55ce-\u4ea4\u7d66if\u9673\u8ff0\u5f0f\u89e3\u6c7a\u5427"},"\u4f60\u6709\u9078\u64c7\u969c\u7919\u55ce? \u4ea4\u7d66if\u9673\u8ff0\u5f0f\u89e3\u6c7a\u5427!"),(0,r.kt)("p",null,"\u5728\u751f\u6d3b\u4e2d\uff0c\u6211\u5011\u5e38\u5e38\u9762\u81e8\u9078\u64c7\uff0c",(0,r.kt)("br",null),"\n\u4eca\u5929\u5348\u9910\u5403\u4ec0\u9ebc\u597d\u5462?\u98ef\u9084\u662f\u9eb5\u5462?",(0,r.kt)("br",null),"\n\u660e\u5929\u8981\u53bb\u54ea\u88e1\u73a9?\u5c71\u4e0a\u9084\u662f\u6d77\u908a\u5462?",(0,r.kt)("br",null),"\n\u90a3\u9019\u4e9b\u9078\u64c7\u7684\u908f\u8f2f\u7d50\u69cb\u5728 C#\u4e2d\u6211\u5011\u7a31\u70ba",(0,r.kt)("inlineCode",{parentName:"p"},"\u9078\u53d6\u7bc4\u570d\u8a9e\u53e5")),(0,r.kt)("h3",{id:"if-\u9673\u8ff0\u5f0f"},"if \u9673\u8ff0\u5f0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u65e5\u5e38\u5c0d\u8a71\u4e2d\uff0c\u6211\u5011\u5e38\u5e38\u8aaa\uff0c\u5982\u679c...\u5c31..."),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e0b\u96e8\uff0c\u5c31\u5f85\u5728\u5bb6"),(0,r.kt)("li",{parentName:"ul"},"\u5728 C#\u7684\u8868\u9054\u65b9\u5f0f\u5247\u662f\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"if....else..."),"\n\u5b83\u7684\u6a23\u5b50\u6703\u662f",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"if ( \u689d\u4ef6 )\\\n{\\\n..............\\\n}\\\nelse\\\n{\\\n...............\\\n}")))),(0,r.kt)("h3",{id:"\u7bc4\u4f8b-1\u5982\u679c\u4e0b\u96e8\u90a3\u5c31\u5f85\u5728\u5bb6\u6c92\u4e0b\u96e8\u5c31\u51fa\u53bb\u73a9"},"\u7bc4\u4f8b 1:\u5982\u679c\u4e0b\u96e8\uff0c\u90a3\u5c31\u5f85\u5728\u5bb6\uff0c\u6c92\u4e0b\u96e8\u5c31\u51fa\u53bb\u73a9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace CsharpDemo\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            //\u5ba3\u544a\u5929\u6c23\n            string weather = "\u4e0b\u96e8";\n            Console.WriteLine("\u4eca\u5929\u5929\u6c23 : " + weather);\n\n            //\u4f7f\u7528if\u9673\u8ff0\u53e5\u4f86\u505a\u5224\u65b7\n            if(weather == "\u4e0b\u96e8")\n            {\n                Console.WriteLine("\u5f85\u5728\u5bb6");\n            }\n            else\n            {\n                Console.WriteLine("\u51fa\u53bb\u73a9");\n            }\n\n            //\u628a\u5929\u6c23\u6539\u6210\u6674\u5929\uff0c\u518d\u505a\u4e00\u6b21\u5224\u65b7\u8a66\u8a66\u770b\n            weather = "\u6674\u5929";\n            Console.WriteLine("\u4eca\u5929\u5929\u6c23 : " + weather);\n\n            //\u4f7f\u7528if\u9673\u8ff0\u53e5\u4f86\u505a\u5224\u65b7\n            if (weather == "\u4e0b\u96e8")\n            {\n                Console.WriteLine("\u5f85\u5728\u5bb6");\n            }\n            else\n            {\n                Console.WriteLine("\u51fa\u53bb\u73a9");\n            }\n\n            Console.ReadKey();\n        }\n    }\n}\n')),(0,r.kt)("p",null,"\u7d50\u679c:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4eca\u5929\u5929\u6c23 : \u4e0b\u96e8",(0,r.kt)("br",null),"\n\u5f85\u5728\u5bb6",(0,r.kt)("br",null),"\n\u4eca\u5929\u5929\u6c23 : \u6674\u5929",(0,r.kt)("br",null),"\n\u51fa\u53bb\u73a9")),(0,r.kt)("h3",{id:"\u5224\u65b7\u6578\u5b57\u7684\u5927\u5c0f"},"\u5224\u65b7\u6578\u5b57\u7684\u5927\u5c0f"),(0,r.kt)("h3",{id:"\u7bc4\u4f8b\u62db\u724c\u4e0a\u9762\u5beb\u8aaa\u672a\u6210\u5e74\u8acb\u52ff\u9032\u5165\u90a3\u6211\u5011\u4f86\u505a\u4e00\u500b\u8f38\u5165\u5e74\u9f61\u8b93\u96fb\u8166\u5224\u65b7\u80fd\u4e0d\u80fd\u9032\u5165\u5427"},"\u7bc4\u4f8b:\u62db\u724c\u4e0a\u9762\u5beb\u8aaa\u672a\u6210\u5e74\u8acb\u52ff\u9032\u5165\uff0c\u90a3\u6211\u5011\u4f86\u505a\u4e00\u500b\u8f38\u5165\u5e74\u9f61\uff0c\u8b93\u96fb\u8166\u5224\u65b7\u80fd\u4e0d\u80fd\u9032\u5165\u5427"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace CsharpDemo\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            Console.WriteLine("\u8acb\u8f38\u5165\u5e74\u9f61");\n            //\u5ba3\u544a\u5e74\u9f61\uff0c\u4e26\u5c07\u8f38\u5165\u7684\u503c\u8ce6\u4e88\u7d66\u4ed6\n            int age = Convert.ToInt32(Console.ReadLine());\n\n            //\u5224\u65b7\u5e74\u9f61\n            if(age < 18)\n            {\n                Console.WriteLine(age + " \u6b72\u662f\u672a\u6210\u5e74\uff0c\u4e0d\u53ef\u9032\u5165!");\n            }\n            else\n            {\n                Console.WriteLine(age + " \u6b72\u5df2\u6210\u5e74\uff0c\u6b61\u8fce\u5149\u81e8!");\n            }\n\n            Console.ReadKey();\n        }\n    }\n }\n')),(0,r.kt)("p",null,"\u8f38\u5165:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"48")),(0,r.kt)("p",null,"\u7d50\u679c:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8acb\u8f38\u5165\u5e74\u9f61",(0,r.kt)("br",null),"\n48",(0,r.kt)("br",null),"\n48 \u6b72\u5df2\u6210\u5e74\uff0c\u6b61\u8fce\u5149\u81e8!")),(0,r.kt)("p",null,"\u8f38\u5165:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"15")),(0,r.kt)("p",null,"\u7d50\u679c:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8acb\u8f38\u5165\u5e74\u9f61",(0,r.kt)("br",null),"\n15",(0,r.kt)("br",null),"\n15 \u6b72\u662f\u672a\u6210\u5e74\uff0c\u4e0d\u53ef\u9032\u5165!")),(0,r.kt)("h3",{id:"else-if"},"else if"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u6709\u591a\u500b\u8981\u5224\u65b7\u7684\u689d\u4ef6\u6211\u5011\u53ef\u4ee5\u642d\u914d",(0,r.kt)("inlineCode",{parentName:"li"},"else if"),"\u505a\u4f7f\u7528")),(0,r.kt)("h3",{id:"\u7bc4\u4f8b\u5982\u679c\u6211\u6eff-18-\u6b72\u5c31\u53ef\u4ee5\u8003\u6a5f\u8eca\u99d5\u7167\u4f46\u8981\u6eff-20-\u6b72\u624d\u80fd\u8003\u91cd\u6a5f\u99d5\u7167"},"\u7bc4\u4f8b:\u5982\u679c\u6211\u6eff 18 \u6b72\u5c31\u53ef\u4ee5\u8003\u6a5f\u8eca\u99d5\u7167\uff0c\u4f46\u8981\u6eff 20 \u6b72\u624d\u80fd\u8003\u91cd\u6a5f\u99d5\u7167"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace CsharpDemo\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            Console.WriteLine("\u8acb\u8f38\u5165\u5e74\u9f61");\n            //\u5ba3\u544a\u5e74\u9f61\uff0c\u4e26\u5c07\u8f38\u5165\u7684\u503c\u8ce6\u4e88\u7d66\u4ed6\n            int age = Convert.ToInt32(Console.ReadLine());\n\n            //\u5224\u65b7\u5e74\u9f61\n            if (age < 18)\n            {\n                Console.WriteLine(age + " \u6b72\u662f\u672a\u6210\u5e74\uff0c\u4efb\u4f55\u99d5\u7167\u90fd\u4e0d\u80fd\u8003!");\n            }\n            else if (age < 20)\n            {\n                Console.WriteLine(age + " \u6b72\uff0c\u53ef\u4ee5\u8003\u6a5f\u8eca\u99d5\u7167\uff0c\u4f46\u4e0d\u80fd\u8003\u91cd\u6a5f\u99d5\u7167!");\n            }\n            else\n            {\n                Console.WriteLine(age + " \u6b72\uff0c\u4efb\u4f55\u99d5\u7167\u90fd\u53ef\u4ee5\u8003!");\n            }\n           Console.ReadKey();\n        }\n    }\n  }\n')),(0,r.kt)("p",null,"\u8f38\u5165:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"15")),(0,r.kt)("p",null,"\u7d50\u679c:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8acb\u8f38\u5165\u5e74\u9f61",(0,r.kt)("br",null),"\n15",(0,r.kt)("br",null),"\n15 \u6b72\u662f\u672a\u6210\u5e74\uff0c\u4efb\u4f55\u99d5\u7167\u90fd\u4e0d\u80fd\u8003!")),(0,r.kt)("p",null,"\u8f38\u5165:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"19")),(0,r.kt)("p",null,"\u7d50\u679c:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8acb\u8f38\u5165\u5e74\u9f61",(0,r.kt)("br",null),"\n19",(0,r.kt)("br",null),"\n19 \u6b72\uff0c\u53ef\u4ee5\u8003\u6a5f\u8eca\u99d5\u7167\uff0c\u4f46\u4e0d\u80fd\u8003\u91cd\u6a5f\u99d5\u7167!")),(0,r.kt)("p",null,"\u8f38\u5165:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"48")),(0,r.kt)("p",null,"\u7d50\u679c:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8acb\u8f38\u5165\u5e74\u9f61",(0,r.kt)("br",null),"\n48",(0,r.kt)("br",null),"\n48 \u6b72\uff0c\u4efb\u4f55\u99d5\u7167\u90fd\u53ef\u4ee5\u8003!")),(0,r.kt)("h3",{id:"\u5de2\u72c0-if"},"\u5de2\u72c0 if"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6211\u5011\u53ef\u80fd\u6703\u5148\u7b2c\u4e00\u500b\u6c7a\u5b9a\uff0c\u4e4b\u5f8c\u518d\u505a\u7b2c\u4e8c\u500b\u6c7a\u5b9a")),(0,r.kt)("h3",{id:"\u7bc4\u4f8b\u5982\u679c\u662f\u5047\u65e5\u6211\u5c31\u8981\u51fa\u53bb\u73a9\u5e73\u65e5\u5c31\u5f97\u4e56\u4e56\u4e0a\u8ab2\u5982\u679c\u6674\u5929\u6211\u5c31\u8981\u53bb\u6d77\u908a\u4e0d\u7136\u5c31\u53bb\u722c\u5c71"},"\u7bc4\u4f8b:\u5982\u679c\u662f\u5047\u65e5\u6211\u5c31\u8981\u51fa\u53bb\u73a9\uff0c\u5e73\u65e5\u5c31\u5f97\u4e56\u4e56\u4e0a\u8ab2\uff0c\u5982\u679c\u6674\u5929\u6211\u5c31\u8981\u53bb\u6d77\u908a\uff0c\u4e0d\u7136\u5c31\u53bb\u722c\u5c71"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace CsharpDemo\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            //\u4eca\u5929\n            Console.WriteLine("\u4eca\u5929\u661f\u671f\u5e7e?");\n            string today = Console.ReadLine();\n            //\u5929\u6c23\n            Console.WriteLine("\u4eca\u5929\u5929\u6c23?");\n            string weather = Console.ReadLine();\n\n            //\u5148\u5224\u65b7\u4eca\u5929\u65e5\u662f\u4e0d\u662f\u5047\u65e5\n            if (today == "\u661f\u671f\u516d" || today == "\u661f\u671f\u65e5")\n            {\n                if(weather == "\u6674\u5929")\n                {\n                    Console.WriteLine("\u4eca\u5929" + today + "\uff0c" + weather + ",\u4f86\u53bb\u6d77\u908a\u73a9");\n                }\n                else\n                {\n                    Console.WriteLine("\u4eca\u5929" + today + "\uff0c" + weather + ",\u4f86\u53bb\u722c\u5c71");\n                }\n            }\n            else\n            {\n                Console.WriteLine("\u4eca\u5929" + today + "\uff0c\u6240\u4ee5\u8981\u4e0a\u8ab2");\n            }\n\n            Console.ReadKey();\n        }\n    }\n }\n')),(0,r.kt)("p",null,"\u8f38\u5165:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u661f\u671f\u516d",(0,r.kt)("br",null),"\n\u6674\u5929")),(0,r.kt)("p",null,"\u7d50\u679c:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4eca\u5929\u661f\u671f\u5e7e?",(0,r.kt)("br",null),"\n\u661f\u671f\u516d",(0,r.kt)("br",null),"\n\u4eca\u5929\u5929\u6c23?",(0,r.kt)("br",null),"\n\u6674\u5929",(0,r.kt)("br",null),"\n\u4eca\u5929\u661f\u671f\u516d\uff0c\u6674\u5929,\u4f86\u53bb\u6d77\u908a\u73a9")),(0,r.kt)("p",null,"\u8f38\u5165:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u661f\u671f\u65e5",(0,r.kt)("br",null),"\n\u9670\u5929")),(0,r.kt)("p",null,"\u7d50\u679c:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4eca\u5929\u661f\u671f\u5e7e?",(0,r.kt)("br",null),"\n\u661f\u671f\u65e5",(0,r.kt)("br",null),"\n\u4eca\u5929\u5929\u6c23?",(0,r.kt)("br",null),"\n\u9670\u5929",(0,r.kt)("br",null),"\n\u4eca\u5929\u661f\u671f\u65e5\uff0c\u9670\u5929,\u4f86\u53bb\u722c\u5c71")),(0,r.kt)("p",null,"\u8f38\u5165:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u661f\u671f\u4e00",(0,r.kt)("br",null),"\n\u9670\u5929")),(0,r.kt)("p",null,"\u7d50\u679c:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4eca\u5929\u661f\u671f\u5e7e?",(0,r.kt)("br",null),"\n\u661f\u671f\u4e00",(0,r.kt)("br",null),"\n\u4eca\u5929\u5929\u6c23?",(0,r.kt)("br",null),"\n\u9670\u5929",(0,r.kt)("br",null),"\n\u4eca\u5929\u661f\u671f\u4e00\uff0c\u6240\u4ee5\u8981\u4e0a\u8ab2")),(0,r.kt)("h3",{id:"\u81ea\u5f9e\u5b78\u6703-if-\u4e4b\u5f8c\u518d\u4e5f\u6c92\u6709\u9078\u64c7\u969c\u7919\u4e86\u4eca\u5929\u7684\u6545\u4e8b\u5c31\u5230\u9019\u908a\u4e86\u8b1d\u8b1d\u5927\u5bb6\u6211\u5011\u660e\u5929\u518d\u898b"},"\u81ea\u5f9e\u5b78\u6703 if \u4e4b\u5f8c\u518d\u4e5f\u6c92\u6709\u9078\u64c7\u969c\u7919\u4e86\uff0c\u4eca\u5929\u7684\u6545\u4e8b\u5c31\u5230\u9019\u908a\u4e86\uff0c\u8b1d\u8b1d\u5927\u5bb6\uff0c\u6211\u5011\u660e\u5929\u518d\u898b"))}p.isMDXComponent=!0}}]);