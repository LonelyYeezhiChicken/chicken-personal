"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[7778],{49613:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>b});var r=t(59496);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},l=Object.keys(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var c=r.createContext({}),u=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},p=function(n){var e=u(n.components);return r.createElement(c.Provider,{value:e},n.children)},s="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,l=n.originalType,c=n.parentName,p=i(n,["components","mdxType","originalType","parentName"]),s=u(t),k=a,b=s["".concat(c,".").concat(k)]||s[k]||m[k]||l;return t?r.createElement(b,o(o({ref:e},p),{},{components:t})):r.createElement(b,o({ref:e},p))}));function b(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var l=t.length,o=new Array(l);o[0]=k;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=n,i[s]="string"==typeof n?n:a,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},61378:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=t(88028),a=(t(59496),t(49613));const l={sidebar_position:140,description:"Day29 C# \u96de\u790e\u89c0\u5ff5- \u7269\u4ef6\u5c0e\u5411(oop)~\u4ecb\u9762(Interface)",key:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd","cSharp"],tags:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd"]},o="\ud83e\udd16 \u7269\u4ef6\u5c0e\u5411(oop)~\u4ecb\u9762(Interface)",i={unversionedId:"ironMan13/day29",id:"ironMan13/day29",title:"\ud83e\udd16 \u7269\u4ef6\u5c0e\u5411(oop)~\u4ecb\u9762(Interface)",description:"Day29 C# \u96de\u790e\u89c0\u5ff5- \u7269\u4ef6\u5c0e\u5411(oop)~\u4ecb\u9762(Interface)",source:"@site/docs/ironMan13/day29.md",sourceDirName:"ironMan13",slug:"/ironMan13/day29",permalink:"/en/docs/ironMan13/day29",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/ironMan13/day29.md",tags:[{label:"C#",permalink:"/en/docs/tags/c"},{label:"\u96de\u790e\u89c0\u5ff5",permalink:"/en/docs/tags/\u96de\u790e\u89c0\u5ff5"},{label:"\u9435\u4eba\u8cfd",permalink:"/en/docs/tags/\u9435\u4eba\u8cfd"}],version:"current",lastUpdatedAt:1699019226,formattedLastUpdatedAt:"Nov 3, 2023",sidebarPosition:140,frontMatter:{sidebar_position:140,description:"Day29 C# \u96de\u790e\u89c0\u5ff5- \u7269\u4ef6\u5c0e\u5411(oop)~\u4ecb\u9762(Interface)",key:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd","cSharp"],tags:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd"]},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udd16 \u7269\u4ef6\u5c0e\u5411(oop)~ \u7e7c\u627f",permalink:"/en/docs/ironMan13/day28"},next:{title:"\ud83e\udd16 Install Tailwind Css with ASP.NET MVC5",permalink:"/en/docs/ironMan13/day30"}},c={},u=[{value:"\u4ecb\u9762(Interface)",id:"\u4ecb\u9762interface",level:3},{value:"\u7bc4\u4f8b:\u6bcf\u53f0 ATM \u90fd\u9700\u8981\u7d71\u4e00\u4ed6\u5011\u7684\u65b9\u6cd5\uff0c\u56e0\u6b64\u6211\u5011\u4f86\u5efa\u7acb\u4e00\u500b ATM \u7684\u4ecb\u9762\u5427",id:"\u7bc4\u4f8b\u6bcf\u53f0-atm-\u90fd\u9700\u8981\u7d71\u4e00\u4ed6\u5011\u7684\u65b9\u6cd5\u56e0\u6b64\u6211\u5011\u4f86\u5efa\u7acb\u4e00\u500b-atm-\u7684\u4ecb\u9762\u5427",level:3},{value:"\u7bc4\u4f8b:\u6211\u5011\u4f86\u5be6\u4f5c\u4e00\u53f0\u96de\u982d\u724c ATM\uff0c\u4e26\u8207\u4ecb\u9762\u7c3d\u5408\u7d04\u5427",id:"\u7bc4\u4f8b\u6211\u5011\u4f86\u5be6\u4f5c\u4e00\u53f0\u96de\u982d\u724c-atm\u4e26\u8207\u4ecb\u9762\u7c3d\u5408\u7d04\u5427",level:3},{value:"\u7bc4\u4f8b:\u65e2\u7136 Atm \u90fd\u84cb\u597d\u4e86\uff0c\u6211\u5011\u5c31\u4f86\u6e2c\u4e00\u4e0b",id:"\u7bc4\u4f8b\u65e2\u7136-atm-\u90fd\u84cb\u597d\u4e86\u6211\u5011\u5c31\u4f86\u6e2c\u4e00\u4e0b",level:3},{value:"\u4f86\u73a9\u770b\u770b\u4ee5\u4e0b\u5287\u60c5\u6703\u7522\u751f\u7684\u7d50\u679c\u5427",id:"\u4f86\u73a9\u770b\u770b\u4ee5\u4e0b\u5287\u60c5\u6703\u7522\u751f\u7684\u7d50\u679c\u5427",level:3},{value:"\u4ee5\u4e0a\u5c31\u662f\u6211\u5011\u7684\u4ecb\u9762\uff0c\u4ed6\u4e3b\u8981\u7528\u9014\u662f\u5728\u7d71\u4e00\u5929\u4e0b\u7684\uff0c\u6211\u5011\u660e\u5929\u518d\u898b\u4e86\u9d28",id:"\u4ee5\u4e0a\u5c31\u662f\u6211\u5011\u7684\u4ecb\u9762\u4ed6\u4e3b\u8981\u7528\u9014\u662f\u5728\u7d71\u4e00\u5929\u4e0b\u7684\u6211\u5011\u660e\u5929\u518d\u898b\u4e86\u9d28",level:3}],p={toc:u},s="wrapper";function m(n){let{components:e,...t}=n;return(0,a.kt)(s,(0,r.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-\u7269\u4ef6\u5c0e\u5411oop\u4ecb\u9762interface"},"\ud83e\udd16 \u7269\u4ef6\u5c0e\u5411(oop)~\u4ecb\u9762(Interface)"),(0,a.kt)("p",null,"\u66f8\u540c\u6587\uff0c\u8eca\u540c\u8ecc\uff0c",(0,a.kt)("br",null),"\n\u807d\u8aaa\u53ec\u559a\u60e1\u9b54\u6642\uff0c\u9700\u8981\u8207\u60e1\u9b54\u7c3d\u8a02\u5951\u7d04\uff0c",(0,a.kt)("br",null),"\n\u5951\u7d04\u5167\u5bb9\u96d9\u65b9\u90fd\u5f97\u9075\u5b88\uff0c",(0,a.kt)("br",null),"\nC#\u4e5f\u64c1\u6709\u8ddf\u985e\u5225\u7c3d\u8a02\u5951\u7d04\u7684\u529f\u80fd"),(0,a.kt)("h3",{id:"\u4ecb\u9762interface"},"\u4ecb\u9762(Interface)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u4ecb\u9762\u547d\u540d\u4e2d\u5927\u5bb6\u7fd2\u6163\u4ee5",(0,a.kt)("inlineCode",{parentName:"li"},"I"),"\u958b\u982d"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u4ecb\u9762\u4e2d\uff0c\u6211\u5011\u8981\u53bb\u5b9a\u7fa9\u8207\u898f\u7bc4\u985e\u5225\u6210\u54e1"),(0,a.kt)("li",{parentName:"ul"},"\u4ecb\u9762\u4e2d\u4e0d\u6703\u53bb\u5beb\u4efb\u4f55\u5f97\u908f\u8f2f"),(0,a.kt)("li",{parentName:"ul"},"\u800c\u4e14\u4ecb\u9762\u7684\u6210\u54e1\u6c38\u9060\u90fd\u662f\u516c\u7528\u7684\uff0c\u6240\u4ee5\u4e0d\u9700\u8981\u4e5f\u4e0d\u80fd\u52a0\u4e0a",(0,a.kt)("inlineCode",{parentName:"li"},"public")),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u9700\u8981\u7c3d\u5408\u7d04\u7684\u985e\u5225\u5c31\u5fc5\u9808\u7e7c\u627f\u4ecb\u9762")),(0,a.kt)("h3",{id:"\u7bc4\u4f8b\u6bcf\u53f0-atm-\u90fd\u9700\u8981\u7d71\u4e00\u4ed6\u5011\u7684\u65b9\u6cd5\u56e0\u6b64\u6211\u5011\u4f86\u5efa\u7acb\u4e00\u500b-atm-\u7684\u4ecb\u9762\u5427"},"\u7bc4\u4f8b:\u6bcf\u53f0 ATM \u90fd\u9700\u8981\u7d71\u4e00\u4ed6\u5011\u7684\u65b9\u6cd5\uff0c\u56e0\u6b64\u6211\u5011\u4f86\u5efa\u7acb\u4e00\u500b ATM \u7684\u4ecb\u9762\u5427"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"}," //ATM\u4ecb\u9762\n    interface IATM\n    {\n        //\u65b9\u6cd5:\u5b58\u6b3e\n        void PayIn(int amount);\n        //\u65b9\u6cd5:\u6536\u6b3e\n        bool GetMoney(int amount);\n        //\u5c6c\u6027:\u5e33\u6236\u9918\u984d\n        int Balance { get; }\n    }\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u9019\u5c31\u662f\u4e00\u500b\u4ecb\u9762\u7684\u6a23\u5b50\u4ecb\u9762\u6700\u5927\u7684\u7528\u9014\u5c31\u662f\u8b93\u6240\u6709\u8207\u4ed6\u7c3d\u5408\u7d04\u7684\u985e\u5225\u4fdd\u6301\u65b9\u6cd5\u8207\u6210\u54e1\u4e00\u81f4")),(0,a.kt)("h3",{id:"\u7bc4\u4f8b\u6211\u5011\u4f86\u5be6\u4f5c\u4e00\u53f0\u96de\u982d\u724c-atm\u4e26\u8207\u4ecb\u9762\u7c3d\u5408\u7d04\u5427"},"\u7bc4\u4f8b:\u6211\u5011\u4f86\u5be6\u4f5c\u4e00\u53f0\u96de\u982d\u724c ATM\uff0c\u4e26\u8207\u4ecb\u9762\u7c3d\u5408\u7d04\u5427"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'    //\u96de\u982d\u724cATM\n    public class ChickenATM : IATM //\u9700\u8981\u7e7c\u627f\u4ecb\u9762\n    {\n        //\u79c1\u6709\u8b8a\u6578\n        private int blance;\n\n        //\u7e7c\u627f\u5f8c\uff0c\u5c31\u5fc5\u9808\u6709\u4ecb\u9762\u88e1\u9762\u5b9a\u7fa9\u7684\u65b9\u6cd5\n        //\u65b9\u6cd5:\u5b58\u6b3e\n        public void PayIn(int amount)\n        {\n            blance += amount;\n        }\n        //\u65b9\u6cd5:\u6536\u6b3e\n        public bool GetMoney(int amount)\n        {\n            //\u5224\u65b7\u9918\u984d\u662f\u5426\u8db3\u5920\n            if (blance >= amount)\n            {\n                blance -= amount;\n                return true;\n            }\n            else\n            {\n                Console.WriteLine("\u9918\u984d\u4e0d\u8db3\uff0c\u53d6\u6b3e\u5931\u6557!");\n                return false;\n            }\n        }\n\n        //\u5c6c\u6027:\u5e33\u6236\u9918\u984d\n        public int Balance\n        {\n            get\n            {\n                return blance;\n            }\n        }\n    }\n')),(0,a.kt)("h3",{id:"\u7bc4\u4f8b\u65e2\u7136-atm-\u90fd\u84cb\u597d\u4e86\u6211\u5011\u5c31\u4f86\u6e2c\u4e00\u4e0b"},"\u7bc4\u4f8b:\u65e2\u7136 Atm \u90fd\u84cb\u597d\u4e86\uff0c\u6211\u5011\u5c31\u4f86\u6e2c\u4e00\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace CsharpDemo\n{\n    class Program\n    {\n        ///\u6709\u5305\u542b\u4ecb\u9762\u7684\u5ba3\u544a\u65b9\u5f0f,\u524d\u9762\u53ef\u5148\u9078\u65b9\u5f0f\n       public static IATM chickenAtm = new ChickenATM();\n\n        static void Main(string[] args)\n        {\n            //\u5148\u8b93\u5ba2\u4eba\u9078\u64c7\u529f\u80fd\n            Console.WriteLine();\n            Console.WriteLine("\u8acb\u9078\u64c7\u9700\u8981\u6a21\u5f0f");\n            Console.WriteLine("\u5b58\u6b3e\u8acb\u63091\uff0c\u9818\u6b3e\u8acb\u63092");\n            string goFuncton = Console.ReadLine();\n\n\n            //\u5224\u65b7\u8981\u4f7f\u7528\u54ea\u500b\u65b9\u6cd5\n            if (goFuncton == "1")//\u9818\u9322\n            {\n                Console.WriteLine("\u8acb\u8f38\u5165\u8981\u5b58\u5165\u7684\u91d1\u984d!");\n                int amount = Convert.ToInt32(Console.ReadLine());\n                //\u4ed8\u6b3e\u65b9\u6cd5\n                chickenAtm.PayIn(amount);\n            }\n            else if(goFuncton == "2")\n            {\n                Console.WriteLine("\u8acb\u8f38\u5165\u8981\u9818\u53d6\u7684\u91d1\u984d!");\n                int amount = Convert.ToInt32(Console.ReadLine());\n                //\u4ed8\u6b3e\u65b9\u6cd5\n                chickenAtm.GetMoney(amount);\n            }\n\n            Console.WriteLine("\u76ee\u524d\u9918\u984d : " + chickenAtm.Balance);\n\n            //\u9019\u908a\u7528\u905e\u8ff4\u4f86\u8b93\u65b9\u6cd5\u53ef\u4ee5\u6301\u7e8c\u8f2a\u8ff4\n            string[] array = new string[0];\n            Main(array);\n        }\n    }\n    //ATM\u4ecb\u9762\n    interface IATM\n    {\n        //\u65b9\u6cd5:\u5b58\u6b3e\n        void PayIn(int amount);\n        //\u65b9\u6cd5:\u6536\u6b3e\n        bool GetMoney(int amount);\n        //\u5c6c\u6027:\u5e33\u6236\u9918\u984d\n        int Balance { get; }\n    }\n    //\u96de\u982d\u724cATM\n    public class ChickenATM : IATM //\u9700\u8981\u7e7c\u627f\u4ecb\u9762\n    {\n        //\u79c1\u6709\u8b8a\u6578\n        private int blance;\n\n        //\u7e7c\u627f\u5f8c\uff0c\u5c31\u5fc5\u9808\u6709\u4ecb\u9762\u88e1\u9762\u5b9a\u7fa9\u7684\u65b9\u6cd5\n        //\u65b9\u6cd5:\u5b58\u6b3e\n        public void PayIn(int amount)\n        {\n            blance += amount;\n        }\n        //\u65b9\u6cd5:\u6536\u6b3e\n        public bool GetMoney(int amount)\n        {\n            //\u5224\u65b7\u9918\u984d\u662f\u5426\u8db3\u5920\n            if (blance >= amount)\n            {\n                blance -= amount;\n                return true;\n            }\n            else\n            {\n                Console.WriteLine("\u9918\u984d\u4e0d\u8db3\uff0c\u53d6\u6b3e\u5931\u6557!");\n                return false;\n            }\n        }\n\n        //\u5c6c\u6027:\u5e33\u6236\u9918\u984d\n        public int Balance\n        {\n            get\n            {\n                return blance;\n            }\n        }\n    }\n   }\n')),(0,a.kt)("h3",{id:"\u4f86\u73a9\u770b\u770b\u4ee5\u4e0b\u5287\u60c5\u6703\u7522\u751f\u7684\u7d50\u679c\u5427"},"\u4f86\u73a9\u770b\u770b\u4ee5\u4e0b\u5287\u60c5\u6703\u7522\u751f\u7684\u7d50\u679c\u5427"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5148\u9818 50 \u5143"),(0,a.kt)("li",{parentName:"ol"},"\u4eca\u5929\u767c\u5de5\u8cc7\u5566\uff0c\u5171 500 \u5143\uff0c\u628a\u9322\u90fd\u5b58\u9032\u53bb\u5427"),(0,a.kt)("li",{parentName:"ol"},"\u5fd8\u8a18\u628a\u5403\u98ef\u9322\u9818\u51fa\u4f86\u4e86\uff0c\u8d95\u5feb\u9818 100 \u4f86\u5403\u98ef")),(0,a.kt)("p",null,"\u7d50\u679c:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8acb\u9078\u64c7\u9700\u8981\u6a21\u5f0f",(0,a.kt)("br",null),"\n\u5b58\u6b3e\u8acb\u6309 1\uff0c\u9818\u6b3e\u8acb\u6309 2",(0,a.kt)("br",null),"\n2",(0,a.kt)("br",null),"\n\u8acb\u8f38\u5165\u8981\u9818\u53d6\u7684\u91d1\u984d!",(0,a.kt)("br",null),"\n50",(0,a.kt)("br",null),"\n\u9918\u984d\u4e0d\u8db3\uff0c\u53d6\u6b3e\u5931\u6557!",(0,a.kt)("br",null),"\n\u76ee\u524d\u9918\u984d : 0")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8acb\u9078\u64c7\u9700\u8981\u6a21\u5f0f",(0,a.kt)("br",null),"\n\u5b58\u6b3e\u8acb\u6309 1\uff0c\u9818\u6b3e\u8acb\u6309 2",(0,a.kt)("br",null),"\n1",(0,a.kt)("br",null),"\n\u8acb\u8f38\u5165\u8981\u5b58\u5165\u7684\u91d1\u984d!",(0,a.kt)("br",null),"\n500",(0,a.kt)("br",null),"\n\u76ee\u524d\u9918\u984d : 500")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8acb\u9078\u64c7\u9700\u8981\u6a21\u5f0f",(0,a.kt)("br",null),"\n\u5b58\u6b3e\u8acb\u6309 1\uff0c\u9818\u6b3e\u8acb\u6309 2",(0,a.kt)("br",null),"\n2",(0,a.kt)("br",null),"\n\u8acb\u8f38\u5165\u8981\u9818\u53d6\u7684\u91d1\u984d!",(0,a.kt)("br",null),"\n100",(0,a.kt)("br",null),"\n\u76ee\u524d\u9918\u984d : 400")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8acb\u9078\u64c7\u9700\u8981\u6a21\u5f0f",(0,a.kt)("br",null),"\n\u5b58\u6b3e\u8acb\u6309 1\uff0c\u9818\u6b3e\u8acb\u6309 2")),(0,a.kt)("h3",{id:"\u4ee5\u4e0a\u5c31\u662f\u6211\u5011\u7684\u4ecb\u9762\u4ed6\u4e3b\u8981\u7528\u9014\u662f\u5728\u7d71\u4e00\u5929\u4e0b\u7684\u6211\u5011\u660e\u5929\u518d\u898b\u4e86\u9d28"},"\u4ee5\u4e0a\u5c31\u662f\u6211\u5011\u7684\u4ecb\u9762\uff0c\u4ed6\u4e3b\u8981\u7528\u9014\u662f\u5728\u7d71\u4e00\u5929\u4e0b\u7684\uff0c\u6211\u5011\u660e\u5929\u518d\u898b\u4e86\u9d28"))}m.isMDXComponent=!0}}]);