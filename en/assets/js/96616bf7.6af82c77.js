"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[6761],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>d});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},l=Object.keys(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var s=r.createContext({}),u=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},c=function(n){var e=u(n.components);return r.createElement(s.Provider,{value:e},n.children)},p="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,l=n.originalType,s=n.parentName,c=o(n,["components","mdxType","originalType","parentName"]),p=u(t),g=a,d=p["".concat(s,".").concat(g)]||p[g]||m[g]||l;return t?r.createElement(d,i(i({ref:e},c),{},{components:t})):r.createElement(d,i({ref:e},c))}));function d(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var l=t.length,i=new Array(l);i[0]=g;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=n,o[p]="string"==typeof n?n:a,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6334:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const l={sidebar_position:115,description:"Day24 C# \u96de\u790e\u89c0\u5ff5- \u7269\u4ef6\u5c0e\u5411(oop)~\u5efa\u69cb\u65b9\u6cd5(Constructor)",key:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd","cSharp"],tags:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd"]},i="\ud83e\udd16 \u7269\u4ef6\u5c0e\u5411(oop)~\u5efa\u69cb\u65b9\u6cd5(Constructor)",o={unversionedId:"ironMan13/day24",id:"ironMan13/day24",title:"\ud83e\udd16 \u7269\u4ef6\u5c0e\u5411(oop)~\u5efa\u69cb\u65b9\u6cd5(Constructor)",description:"Day24 C# \u96de\u790e\u89c0\u5ff5- \u7269\u4ef6\u5c0e\u5411(oop)~\u5efa\u69cb\u65b9\u6cd5(Constructor)",source:"@site/docs/ironMan13/day24.md",sourceDirName:"ironMan13",slug:"/ironMan13/day24",permalink:"/en/docs/ironMan13/day24",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/ironMan13/day24.md",tags:[{label:"C#",permalink:"/en/docs/tags/c"},{label:"\u96de\u790e\u89c0\u5ff5",permalink:"/en/docs/tags/\u96de\u790e\u89c0\u5ff5"},{label:"\u9435\u4eba\u8cfd",permalink:"/en/docs/tags/\u9435\u4eba\u8cfd"}],version:"current",lastUpdatedAt:1688812009,formattedLastUpdatedAt:"Jul 8, 2023",sidebarPosition:115,frontMatter:{sidebar_position:115,description:"Day24 C# \u96de\u790e\u89c0\u5ff5- \u7269\u4ef6\u5c0e\u5411(oop)~\u5efa\u69cb\u65b9\u6cd5(Constructor)",key:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd","cSharp"],tags:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd"]},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udd16 \u7269\u4ef6\u5c0e\u5411(oop)~\u5c6c\u6027(Property)",permalink:"/en/docs/ironMan13/day23"},next:{title:"\ud83e\udd16 \u5171\u7522\u4e3b\u7fa9\u8005~\u975c\u614b\u6210\u54e1",permalink:"/en/docs/ironMan13/day25"}},s={},u=[{value:"\u5efa\u69cb\u65b9\u6cd5",id:"\u5efa\u69cb\u65b9\u6cd5",level:3},{value:"1. \u9ed8\u8a8d\u5efa\u69cb\u65b9\u6cd5 : \u6bcf\u500b\u985e\u5225\u90fd\u6709\u4e00\u500b\u9ed8\u8a8d\u7684\u8207\u985e\u5225\u540c\u540d\u7684\u5efa\u69cb\u65b9\u6cd5",id:"1-\u9ed8\u8a8d\u5efa\u69cb\u65b9\u6cd5--\u6bcf\u500b\u985e\u5225\u90fd\u6709\u4e00\u500b\u9ed8\u8a8d\u7684\u8207\u985e\u5225\u540c\u540d\u7684\u5efa\u69cb\u65b9\u6cd5",level:3},{value:"\u7bc4\u4f8b:\u6211\u5011\u5efa\u7acb\u4e00\u500b\u8c6c\u7684\u985e\u5225\u4f86\u770b\u770b\u7d50\u679c",id:"\u7bc4\u4f8b\u6211\u5011\u5efa\u7acb\u4e00\u500b\u8c6c\u7684\u985e\u5225\u4f86\u770b\u770b\u7d50\u679c",level:3},{value:"2. \u5e36\u53c3\u6578\u7684\u5efa\u69cb\u65b9\u6cd5",id:"2-\u5e36\u53c3\u6578\u7684\u5efa\u69cb\u65b9\u6cd5",level:3},{value:"\u7bc4\u4f8b:\u6211\u5011\u4fee\u6539\u4e00\u4e0b\u8c6c\u985e\u5225\u5427",id:"\u7bc4\u4f8b\u6211\u5011\u4fee\u6539\u4e00\u4e0b\u8c6c\u985e\u5225\u5427",level:3},{value:"3.\u7121\u53c3\u6578\u5efa\u69cb\u65b9\u6cd5",id:"3\u7121\u53c3\u6578\u5efa\u69cb\u65b9\u6cd5",level:3},{value:"\u7bc4\u4f8b:\u6211\u5011\u5728\u4fee\u6539\u4e00\u4e0b\u8c6c\u7684\u985e\u5225",id:"\u7bc4\u4f8b\u6211\u5011\u5728\u4fee\u6539\u4e00\u4e0b\u8c6c\u7684\u985e\u5225",level:3},{value:"\u4ee5\u4e0a\u5c31\u662f\u6211\u5011\u4eca\u5929\u7684\u5efa\u69cb\u65b9\u6cd5\uff0c\u671f\u5f85\u5927\u5bb6\u5728\u9ede\u9910\u524d\u5c31\u80fd\u60f3\u597d\u81ea\u5df1\u8981\u4ec0\u9ebc\u4e86",id:"\u4ee5\u4e0a\u5c31\u662f\u6211\u5011\u4eca\u5929\u7684\u5efa\u69cb\u65b9\u6cd5\u671f\u5f85\u5927\u5bb6\u5728\u9ede\u9910\u524d\u5c31\u80fd\u60f3\u597d\u81ea\u5df1\u8981\u4ec0\u9ebc\u4e86",level:3}],c={toc:u},p="wrapper";function m(n){let{components:e,...t}=n;return(0,a.kt)(p,(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-\u7269\u4ef6\u5c0e\u5411oop\u5efa\u69cb\u65b9\u6cd5constructor"},"\ud83e\udd16 \u7269\u4ef6\u5c0e\u5411(oop)~\u5efa\u69cb\u65b9\u6cd5(Constructor)"),(0,a.kt)("p",null,"\u8001\u95c6\u6211\u8981\u4e00\u500b\u8c6c\u6392\u6f22\u5821\uff0c",(0,a.kt)("br",null),"\n\u4e0d\u8981\u756a\u8304\uff0c\u4e0d\u8981\u5c0f\u9ec3\u74dc\uff0c",(0,a.kt)("br",null),"\n\u6d0b\u8525\u52a0\u91cf\uff0c\u52a0\u8d77\u53f8\uff0c",(0,a.kt)("br",null),"\n\u73fe\u5be6\u751f\u6d3b\u4e2d\uff0c\u6211\u5011\u5e38\u5e38\u6703\u5728\u9ede\u9910\u6642\u8ddf\u8001\u95c6\u6307\u5b9a\u4e00\u4e9b\u914d\u6599\uff0c",(0,a.kt)("br",null),"\n\u800c\u4e0d\u662f\u9910\u9ede\u4e0a\u4e86\uff0c\u624d\u628a\u4e0d\u559c\u6b61\u7684\u6311\u6389\uff0c",(0,a.kt)("br",null),"\nC#\u4e16\u754c\u4e2d\uff0c\u4e5f\u6709\u9019\u6a23\u7684\u9ede\u9910\u65b9\u5f0f\uff0c",(0,a.kt)("br",null),"\n\u90a3\u5c31\u662f\u6240\u8b02\u7684\u5efa\u69cb\u65b9\u6cd5"),(0,a.kt)("h3",{id:"\u5efa\u69cb\u65b9\u6cd5"},"\u5efa\u69cb\u65b9\u6cd5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u6211\u5011\u5275\u5efa\u7269\u4ef6\u6642\uff0c\u7cfb\u7d71\u70ba\u7269\u4ef6\u7684\u6210\u54e1\u5206\u914d\u8a18\u61b6\u9ad4\uff0c\u7136\u5f8c\u901a\u904e\u5efa\u69cb\u65b9\u6cd5\u4f86\u521d\u59cb\u5316\u7269\u4ef6\u7684\u6210\u54e1\u8b8a\u6578")),(0,a.kt)("h3",{id:"1-\u9ed8\u8a8d\u5efa\u69cb\u65b9\u6cd5--\u6bcf\u500b\u985e\u5225\u90fd\u6709\u4e00\u500b\u9ed8\u8a8d\u7684\u8207\u985e\u5225\u540c\u540d\u7684\u5efa\u69cb\u65b9\u6cd5"},"1. \u9ed8\u8a8d\u5efa\u69cb\u65b9\u6cd5 : \u6bcf\u500b\u985e\u5225\u90fd\u6709\u4e00\u500b\u9ed8\u8a8d\u7684\u8207\u985e\u5225\u540c\u540d\u7684\u5efa\u69cb\u65b9\u6cd5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5efa\u69cb\u65b9\u6cd5\u7e3d\u662f\u5b58\u5728\u7684\uff0c\u5373\u4f7f\u6c92\u6709\u7279\u5225\u986f\u793a\u5b9a\u7fa9\uff0c\u7de8\u8b6f\u5668\u4e5f\u6703\u70ba\u985e\u5225\u5206\u914d\u4e00\u500b\u9ed8\u8a8d\u7684\u5efa\u69cb\u65b9\u6cd5"),(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u7576\u985e\u5225\u5be6\u4f8b\u5316\u6642\uff0c\u6bcf\u500b\u6210\u54e1\u90fd\u6703\u5728\u8a18\u61b6\u9ad4\u5206\u5230\u5167\u5b58\u7a7a\u9593\uff0c\u4e26\u5beb\u5b58\u5165\u521d\u59cb\u503c",(0,a.kt)("br",null),"\nEX:",(0,a.kt)("br",null),"\n\u6574\u578b\u8b8a\u6578 \u521d\u59cb >> 0",(0,a.kt)("br",null),"\n\u5be6\u578b\u8b8a\u6578 \xa0 \u521d\u59cb >> 0.0",(0,a.kt)("br",null),"\n\u5e03\u6797\u8b8a\u6578 \xa0 \u521d\u59cb >> false",(0,a.kt)("br",null),"\n\u5b57\u4e32\u8b8a\u6578 \xa0 \u521d\u59cb >> null")),(0,a.kt)("h3",{id:"\u7bc4\u4f8b\u6211\u5011\u5efa\u7acb\u4e00\u500b\u8c6c\u7684\u985e\u5225\u4f86\u770b\u770b\u7d50\u679c"},"\u7bc4\u4f8b:\u6211\u5011\u5efa\u7acb\u4e00\u500b\u8c6c\u7684\u985e\u5225\u4f86\u770b\u770b\u7d50\u679c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace CsharpDemo\n{\n\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            Pig pig = new Pig();\n            Console.WriteLine("name = " + pig.name);\n            Console.WriteLine("age = " + pig.age);\n\n            Console.ReadKey();\n        }\n    }\n    //\u8c6c\u7684\u985e\u5225\n    class Pig\n    {\n        //\u540d\u7a31\n        public string name;\n        //\u5e74\u9f61\n        public int age;\n    }\n }\n')),(0,a.kt)("p",null,"\u7d50\u679c:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"name =",(0,a.kt)("br",null),"\nage = 0")),(0,a.kt)("h3",{id:"2-\u5e36\u53c3\u6578\u7684\u5efa\u69cb\u65b9\u6cd5"},"2. \u5e36\u53c3\u6578\u7684\u5efa\u69cb\u65b9\u6cd5"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u203b\u5efa\u69cb\u65b9\u6cd5\u662f\u4e00\u7a2e\u7279\u6b8a\u6db5\u5f0f\uff0c\u5979\u5fc5\u9808\u548c\u985e\u5225\u540c\u540d\uff0c\u4e26\u4e14\u6c92\u6709\u8fd4\u56de\u985e\u578b(\u9023void\u4e5f\u6c92\u6709)")),(0,a.kt)("h3",{id:"\u7bc4\u4f8b\u6211\u5011\u4fee\u6539\u4e00\u4e0b\u8c6c\u985e\u5225\u5427"},"\u7bc4\u4f8b:\u6211\u5011\u4fee\u6539\u4e00\u4e0b\u8c6c\u985e\u5225\u5427"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace CsharpDemo\n{\n\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            //\u4f7f\u7528\u5efa\u69cb\u65b9\u6cd5\n            Pig pig = new Pig("\u80a5\u561f\u561f\u4e00\u96bb\u8c6c", 3);\n\n            Console.WriteLine("\u59d3\u540d: " + pig.name);\n            Console.WriteLine("\u5e74\u9f61: " + pig.age);\n\n            Console.ReadKey();\n        }\n    }\n    //\u8c6c\u7684\u985e\u5225\n    class Pig\n    {\n        //\u540d\u7a31\n        public string name;\n        //\u5e74\u9f61\n        public int age;\n\n        //\u4f7f\u7528\u5efa\u69cb\u65b9\u6cd5\n        public Pig()\n        {\n            //\u521d\u59cb\u5316\u8b8a\u6578\n            name = nameValue;\n            age = ageValue;\n        }\n    }\n  }\n')),(0,a.kt)("p",null,"\u7d50\u679c:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u59d3\u540d: \u80a5\u561f\u561f\u4e00\u96bb\u8c6c\n\u5e74\u9f61: 3")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://ithelp.ithome.com.tw/upload/images/20210925/20097001st53NPtdIy.png",alt:"mdImg"})),(0,a.kt)("h3",{id:"3\u7121\u53c3\u6578\u5efa\u69cb\u65b9\u6cd5"},"3.\u7121\u53c3\u6578\u5efa\u69cb\u65b9\u6cd5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7576\u6211\u5011\u5b9a\u7fa9\u5efa\u69cb\u65b9\u6cd5\u5f8c\uff0c\u9ed8\u8a8d\u7684\u51fd\u6578\u5c31\u5931\u6548\u4e86\uff0c\u5982\u679c\u60f3\u7e7c\u7e8c\u7528\u7121\u53c3\u6578\u5efa\u69cb\u65b9\uff0c\u5c31\u5fc5\u9808\u986f\u5f0f\u5b9a\u7fa9")),(0,a.kt)("h3",{id:"\u7bc4\u4f8b\u6211\u5011\u5728\u4fee\u6539\u4e00\u4e0b\u8c6c\u7684\u985e\u5225"},"\u7bc4\u4f8b:\u6211\u5011\u5728\u4fee\u6539\u4e00\u4e0b\u8c6c\u7684\u985e\u5225"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace CsharpDemo\n{\n\n   class Program\n   {\n       static void Main(string[] args)\n       {\n           Pig pig = new Pig();\n           Console.WriteLine("name = " + pig.name);\n           Console.WriteLine("age = " + pig.age);\n           Console.ReadKey();\n       }\n   }\n   //\u8c6c\u7684\u985e\u5225\n   class Pig\n   {\n       //\u540d\u7a31\n       public string name;\n       //\u5e74\u9f61\n       public int age;\n\n       //\u4f7f\u7528\u5efa\u69cb\u65b9\u6cd5\n       public Pig()\n       {\n           //\u521d\u59cb\u5316\u8b8a\u6578\n           name = "\u80a5\u80a5\u4e00\u96bb\u8c6c";\n           age = 20;\n       }\n   }\n  }\n')),(0,a.kt)("p",null,"\u7d50\u679c:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"name = \u80a5\u80a5\u4e00\u96bb\u8c6c",(0,a.kt)("br",null),"\nage = 20")),(0,a.kt)("h3",{id:"\u4ee5\u4e0a\u5c31\u662f\u6211\u5011\u4eca\u5929\u7684\u5efa\u69cb\u65b9\u6cd5\u671f\u5f85\u5927\u5bb6\u5728\u9ede\u9910\u524d\u5c31\u80fd\u60f3\u597d\u81ea\u5df1\u8981\u4ec0\u9ebc\u4e86"},"\u4ee5\u4e0a\u5c31\u662f\u6211\u5011\u4eca\u5929\u7684\u5efa\u69cb\u65b9\u6cd5\uff0c\u671f\u5f85\u5927\u5bb6\u5728\u9ede\u9910\u524d\u5c31\u80fd\u60f3\u597d\u81ea\u5df1\u8981\u4ec0\u9ebc\u4e86"))}m.isMDXComponent=!0}}]);