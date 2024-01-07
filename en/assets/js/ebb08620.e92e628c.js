"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[3480],{49613:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>g});var a=t(59496);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var c=a.createContext({}),s=function(n){var e=a.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},p=function(n){var e=s(n.components);return a.createElement(c.Provider,{value:e},n.children)},u="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,c=n.parentName,p=o(n,["components","mdxType","originalType","parentName"]),u=s(t),d=r,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return t?a.createElement(g,l(l({ref:e},p),{},{components:t})):a.createElement(g,l({ref:e},p))}));function g(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=n,o[u]="string"==typeof n?n:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},24016:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=t(88028),r=(t(59496),t(49613));const i={sidebar_position:105,description:"Day22 C# \u96de\u790e\u89c0\u5ff5- \u7269\u4ef6\u5c0e\u5411(oop)~\u7269\u4ef6(Object)",key:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd","cSharp"],tags:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd"]},l="\ud83e\udd16 \u7269\u4ef6\u5c0e\u5411(oop)~\u7269\u4ef6(Object)",o={unversionedId:"ironMan13/day22",id:"ironMan13/day22",title:"\ud83e\udd16 \u7269\u4ef6\u5c0e\u5411(oop)~\u7269\u4ef6(Object)",description:"Day22 C# \u96de\u790e\u89c0\u5ff5- \u7269\u4ef6\u5c0e\u5411(oop)~\u7269\u4ef6(Object)",source:"@site/docs/ironMan13/day22.md",sourceDirName:"ironMan13",slug:"/ironMan13/day22",permalink:"/en/docs/ironMan13/day22",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/ironMan13/day22.md",tags:[{label:"C#",permalink:"/en/docs/tags/c"},{label:"\u96de\u790e\u89c0\u5ff5",permalink:"/en/docs/tags/\u96de\u790e\u89c0\u5ff5"},{label:"\u9435\u4eba\u8cfd",permalink:"/en/docs/tags/\u9435\u4eba\u8cfd"}],version:"current",lastUpdatedAt:1704630401,formattedLastUpdatedAt:"Jan 7, 2024",sidebarPosition:105,frontMatter:{sidebar_position:105,description:"Day22 C# \u96de\u790e\u89c0\u5ff5- \u7269\u4ef6\u5c0e\u5411(oop)~\u7269\u4ef6(Object)",key:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd","cSharp"],tags:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd"]},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udd16 \u7269\u4ef6\u5c0e\u5411(oop)~\u985e\u5225(class)",permalink:"/en/docs/ironMan13/day21"},next:{title:"\ud83e\udd16 \u7269\u4ef6\u5c0e\u5411(oop)~\u5c6c\u6027(Property)",permalink:"/en/docs/ironMan13/day23"}},c={},s=[{value:"\u7269\u4ef6\u57fa\u672c\u539f\u7406",id:"\u7269\u4ef6\u57fa\u672c\u539f\u7406",level:3},{value:"\u5be6\u4f8b\u5316\u8a9e\u53e5\u5982\u4e0b:",id:"\u5be6\u4f8b\u5316\u8a9e\u53e5\u5982\u4e0b",level:3},{value:"\u5982\u4f55\u4f7f\u7528\u6210\u54e1\u5462?",id:"\u5982\u4f55\u4f7f\u7528\u6210\u54e1\u5462",level:3},{value:"\u5982\u4f55\u547c\u53eb\u51fd\u5f0f\u5462?",id:"\u5982\u4f55\u547c\u53eb\u51fd\u5f0f\u5462",level:3},{value:"\u7bc4\u4f8b:\u6211\u5011\u6cbf\u7528 Day21 \u7684\u7a0b\u5f0f\u78bc\u4f86\u505a\u7df4\u7fd2",id:"\u7bc4\u4f8b\u6211\u5011\u6cbf\u7528-day21-\u7684\u7a0b\u5f0f\u78bc\u4f86\u505a\u7df4\u7fd2",level:3},{value:"\u7bc4\u4f8b:\u6211\u5011\u770b\u770b\u65b9\u6cd5\u7684\u72c0\u6cc1",id:"\u7bc4\u4f8b\u6211\u5011\u770b\u770b\u65b9\u6cd5\u7684\u72c0\u6cc1",level:3},{value:"\u4ee5\u4e0a\u5c31\u662f\u7269\u4ef6\uff0c\u6700\u57fa\u672c\u5143\u7d20\u7684\u7528\u6cd5\uff0c\u6211\u5011\u660e\u5929\u898b\u55bd",id:"\u4ee5\u4e0a\u5c31\u662f\u7269\u4ef6\u6700\u57fa\u672c\u5143\u7d20\u7684\u7528\u6cd5\u6211\u5011\u660e\u5929\u898b\u55bd",level:3}],p={toc:s},u="wrapper";function m(n){let{components:e,...t}=n;return(0,r.kt)(u,(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-\u7269\u4ef6\u5c0e\u5411oop\u7269\u4ef6object"},"\ud83e\udd16 \u7269\u4ef6\u5c0e\u5411(oop)~\u7269\u4ef6(Object)"),(0,r.kt)("p",null,"\u5728\u7a0b\u5f0f\u8a9e\u8a00\u4e2d\u842c\u7269\u7686\u7269\u4ef6\uff0c",(0,r.kt)("br",null),"\n\u5c31\u5982\u540c\u771f\u5be6\u4e16\u754c\u4e2d\uff0c",(0,r.kt)("br",null),"\n\u6240\u6709\u7269\u8cea\u63a5\u7531\u5143\u7d20\u7d44\u6210\u4e00\u822c"),(0,r.kt)("h3",{id:"\u7269\u4ef6\u57fa\u672c\u539f\u7406"},"\u7269\u4ef6\u57fa\u672c\u539f\u7406"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"C#\u901a\u904e new \u4f86\u5275\u5efa\u7269\u4ef6\uff0c\u57f7\u884c new \u5f8c\u7cfb\u7d71\u6703\u5728\u8a18\u61b6\u9ad4\u5206\u914d\u4e00\u500b\u7a7a\u9593\u7d66\u6578\u64da\u6210\u54e1\uff0c\u9019\u904e\u7a0b\u6211\u5011\u5c07\u5176\u7a31\u70ba\u5be6\u4f8b\u5316"),(0,r.kt)("li",{parentName:"ul"},"\u5be6\u4f8b\u5316\u4e4b\u5f8c\u7684\u6240\u6709\u6210\u54e1\u90fd\u6703\u88ab\u521d\u59cb\u5316\u70ba null,\u6574\u6578\u6210\u54e1\u4e5f\u6703\u88ab\u521d\u59cb\u5316\u70ba 0"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u6211\u5011\u5275\u5efa\u591a\u500b\u7269\u4ef6\u4f46\u90fd\u662f\u540c\u4e00\u500b\u985e\u5225\uff0c\u90a3\u9ebc\u5927\u5bb6\u90fd\u5171\u7528\u540c\u6a23\u7684\u7a0b\u5f0f\u78bc\uff0c\u4f46\u4e0d\u5171\u7528\u6578\u64da\uff0c\u800c\u4e14\u6bcf\u500b\u7269\u4ef6\u90fd\u6703\u5728\u8a18\u61b6\u9ad4\u4e2d\u64c1\u6709\u81ea\u5df1\u7684\u5167\u5b58\u7a7a\u9593")),(0,r.kt)("h3",{id:"\u5be6\u4f8b\u5316\u8a9e\u53e5\u5982\u4e0b"},"\u5be6\u4f8b\u5316\u8a9e\u53e5\u5982\u4e0b:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8a18\u61b6\u9ad4\u5c07\u5207\u5272\u4e00\u500b\u5167\u5b58\u7a7a\u9593\u7d66 Kitty \u505a\u4f7f\u7528\uff0c\u4e26\u4e14 Kitty \u5c07\u6703\u64c1\u6709 Cat \u985e\u5225\u7684\u6240\u6709\u6210\u54e1")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://ithelp.ithome.com.tw/upload/images/20210922/20097001hEsxwvPiIB.png",alt:"mdImg"})),(0,r.kt)("h3",{id:"\u5982\u4f55\u4f7f\u7528\u6210\u54e1\u5462"},"\u5982\u4f55\u4f7f\u7528\u6210\u54e1\u5462?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9019\u908a\u6211\u5011\u9700\u8981\u4f7f\u7528\u5230\u9ede\u904b\u7b97\u7b26\uff0c\u900f\u904e\u9ede\u904b\u7b97\u7b26\u6211\u5011\u53ef\u4ee5\u547c\u53eb\u5230 Kitty \u5e95\u4e0b\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"\u516c\u6709\u6210\u54e1"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://ithelp.ithome.com.tw/upload/images/20210922/20097001oQCmWOEFf4.png",alt:"mdImg"})),(0,r.kt)("h3",{id:"\u5982\u4f55\u547c\u53eb\u51fd\u5f0f\u5462"},"\u5982\u4f55\u547c\u53eb\u51fd\u5f0f\u5462?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e00\u6a23\u4f7f\u7528\u9ede\u904b\u7b97\u7b26\uff0c\u6211\u5011\u5c31\u80fd\u547c\u53eb\u5230 Kitty \u5e95\u4e0b\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"\u516c\u6709\u51fd\u6578"),(0,r.kt)("img",{parentName:"li",src:"https://ithelp.ithome.com.tw/upload/images/20210922/20097001cVi1nCAJFU.png",alt:"mdImg"}))),(0,r.kt)("h3",{id:"\u7bc4\u4f8b\u6211\u5011\u6cbf\u7528-day21-\u7684\u7a0b\u5f0f\u78bc\u4f86\u505a\u7df4\u7fd2"},"\u7bc4\u4f8b:\u6211\u5011\u6cbf\u7528 Day21 \u7684\u7a0b\u5f0f\u78bc\u4f86\u505a\u7df4\u7fd2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace CsharpDemo\n{\n\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            //\u6211\u5011\u5be6\u4f8b\u5316\u5169\u500b\u985e\n            Cat cat1 = new Cat();\n            Cat cat2 = new Cat();\n\n            //\u586b\u5bebcat1\u6578\u64da\u6210\u54e1\n            cat1.name = "\u615a\u6127\u4e00\u96bb\u8c93";\n            cat1.age = 10;\n\n            //\u586b\u5bebcat2\u6578\u64da\u6210\u54e1\n            cat2.name = "\u7121\u6094\u4e00\u96bb\u8c93";\n            cat2.age = 35;\n\n            //\u986f\u793a\u7d50\u679c\n            Console.WriteLine("\u59d3\u540d : " + cat1.name + ",\u5e74\u9f61 : " + cat1.age);\n            Console.WriteLine("\u59d3\u540d : " + cat2.name + ",\u5e74\u9f61 : " + cat2.age);\n            Console.ReadKey();\n        }\n    }\n    class Cat\n    {\n        //\u540d\u7a31\n        public string name;\n        //\u5e74\u9f61\n        public int age;\n        //\u8001\u9f20\u6578\u91cf\n        public int miceCount = 0; //\u8a18\u9304\u6293\u5e7e\u96bb\u8001\u9f20\n        //\u65b9\u6cd5\u6210\u54e1\n        //\u65b9\u6cd5:\u6253\u62db\u547c\n        public void Hello()\n        {\n            Console.WriteLine("\u55e8!\u6211\u662f{0} ", name);\n        }\n        //\u65b9\u6cd5:\u55b5\u55b5\u53eb\n        public void Meow()\n        {\n            Hello();\n            Console.WriteLine("\u55b5~~~~~\u55b5~~~");\n        }\n        //\u65b9\u6cd5:\u6349\u8001\u9f20\n        public void CaseMice()\n        {\n            miceCount++;\n            Hello();\n            Console.WriteLine("\u6211\u5df2\u7d93\u6293\u4e86 {0} \u96bb\u8001\u9f20", miceCount);\n        }\n    }\n}\n')),(0,r.kt)("p",null,"\u7d50\u679c:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u59d3\u540d : \u615a\u6127\u4e00\u96bb\u8c93,\u5e74\u9f61 : 10",(0,r.kt)("br",null),"\n\u59d3\u540d : \u7121\u6094\u4e00\u96bb\u8c93,\u5e74\u9f61 : 35")),(0,r.kt)("h3",{id:"\u7bc4\u4f8b\u6211\u5011\u770b\u770b\u65b9\u6cd5\u7684\u72c0\u6cc1"},"\u7bc4\u4f8b:\u6211\u5011\u770b\u770b\u65b9\u6cd5\u7684\u72c0\u6cc1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace CsharpDemo\n{\n\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            //\u6211\u5011\u5be6\u4f8b\u5316\u5169\u500b\u985e\n            Cat cat1 = new Cat();\n            Cat cat2 = new Cat();\n\n            //\u586b\u5bebcat1\u6578\u64da\u6210\u54e1\n            cat1.name = "\u615a\u6127\u4e00\u96bb\u8c93";\n            cat1.age = 10;\n\n            //\u586b\u5bebcat2\u6578\u64da\u6210\u54e1\n            cat2.name = "\u7121\u6094\u4e00\u96bb\u8c93";\n            cat2.age = 35;\n\n            //\u8b93\u615a\u6127\u4e00\u96bb\u8c93\u6293\u5169\u96bb\u8001\u9f20\n            cat1.CaseMice();\n            cat1.CaseMice();\n\n            //\u8b93\u7121\u6094\u4e00\u96bb\u8c93\u6293\u4e00\u96bb\u8001\u9f20\n            cat2.CaseMice();\n\n            //\u986f\u793a\u7d50\u679c\n            Console.WriteLine("\u59d3\u540d : " + cat1.name + ",\u5e74\u9f61 : " + cat1.age + ",\u5171\u6293 " + cat1.miceCount + " \u96bb\u8001\u9f20");\n            Console.WriteLine("\u59d3\u540d : " + cat2.name + ",\u5e74\u9f61 : " + cat2.age + ",\u5171\u6293 " + cat2.miceCount + " \u96bb\u8001\u9f20");\n            Console.ReadKey();\n        }\n    }\n    class Cat\n    {\n        //\u540d\u7a31\n        public string name;\n        //\u5e74\u9f61\n        public int age;\n        //\u8001\u9f20\u6578\u91cf\n        public int miceCount = 0; //\u8a18\u9304\u6293\u5e7e\u96bb\u8001\u9f20\n        //\u65b9\u6cd5\u6210\u54e1\n        //\u65b9\u6cd5:\u6253\u62db\u547c\n        public void Hello()\n        {\n            Console.WriteLine("\u55e8!\u6211\u662f{0} ", name);\n        }\n        //\u65b9\u6cd5:\u55b5\u55b5\u53eb\n        public void Meow()\n        {\n            Hello();\n            Console.WriteLine("\u55b5~~~~~\u55b5~~~");\n        }\n        //\u65b9\u6cd5:\u6349\u8001\u9f20\n        public void CaseMice()\n        {\n            miceCount++;\n            Hello();\n            Console.WriteLine("\u6211\u5df2\u7d93\u6293\u4e86 {0} \u96bb\u8001\u9f20", miceCount);\n        }\n    }\n   }\n')),(0,r.kt)("p",null,"\u7d50\u679c:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u55e8!\u6211\u662f\u615a\u6127\u4e00\u96bb\u8c93",(0,r.kt)("br",null),"\n\u6211\u5df2\u7d93\u6293\u4e86 1 \u96bb\u8001\u9f20",(0,r.kt)("br",null),"\n\u55e8!\u6211\u662f\u615a\u6127\u4e00\u96bb\u8c93",(0,r.kt)("br",null),"\n\u6211\u5df2\u7d93\u6293\u4e86 2 \u96bb\u8001\u9f20",(0,r.kt)("br",null),"\n\u55e8!\u6211\u662f\u7121\u6094\u4e00\u96bb\u8c93",(0,r.kt)("br",null),"\n\u6211\u5df2\u7d93\u6293\u4e86 1 \u96bb\u8001\u9f20",(0,r.kt)("br",null),"\n\u59d3\u540d : \u615a\u6127\u4e00\u96bb\u8c93,\u5e74\u9f61 : 10,\u5171\u6293 2 \u96bb\u8001\u9f20",(0,r.kt)("br",null),"\n\u59d3\u540d : \u7121\u6094\u4e00\u96bb\u8c93,\u5e74\u9f61 : 35,\u5171\u6293 1 \u96bb\u8001\u9f20")),(0,r.kt)("h3",{id:"\u4ee5\u4e0a\u5c31\u662f\u7269\u4ef6\u6700\u57fa\u672c\u5143\u7d20\u7684\u7528\u6cd5\u6211\u5011\u660e\u5929\u898b\u55bd"},"\u4ee5\u4e0a\u5c31\u662f\u7269\u4ef6\uff0c\u6700\u57fa\u672c\u5143\u7d20\u7684\u7528\u6cd5\uff0c\u6211\u5011\u660e\u5929\u898b\u55bd"))}m.isMDXComponent=!0}}]);