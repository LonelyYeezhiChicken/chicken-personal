"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[4159],{49613:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>b});var r=t(59496);function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){l(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,r,l=function(n,e){if(null==n)return{};var t,r,l={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(l[t]=n[t]);return l}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(l[t]=n[t])}return l}var c=r.createContext({}),s=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},u=function(n){var e=s(n.components);return r.createElement(c.Provider,{value:e},n.children)},p="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(n,e){var t=n.components,l=n.mdxType,a=n.originalType,c=n.parentName,u=o(n,["components","mdxType","originalType","parentName"]),p=s(t),k=l,b=p["".concat(c,".").concat(k)]||p[k]||d[k]||a;return t?r.createElement(b,i(i({ref:e},u),{},{components:t})):r.createElement(b,i({ref:e},u))}));function b(n,e){var t=arguments,l=e&&e.mdxType;if("string"==typeof n||l){var a=t.length,i=new Array(a);i[0]=k;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=n,o[p]="string"==typeof n?n:l,i[1]=o;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},98484:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=t(88028),l=(t(59496),t(49613));const a={sidebar_position:90,description:"Day19 C# \u96de\u790e\u89c0\u5ff5- \u8b93\u6642\u9593\u5012\u8f49\u5427~\u905e\u8ff4",key:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd","cSharp"],tags:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd"]},i="\ud83e\udd16 \u8b93\u6642\u9593\u5012\u8f49\u5427~\u905e\u8ff4",o={unversionedId:"ironMan13/day19",id:"ironMan13/day19",title:"\ud83e\udd16 \u8b93\u6642\u9593\u5012\u8f49\u5427~\u905e\u8ff4",description:"Day19 C# \u96de\u790e\u89c0\u5ff5- \u8b93\u6642\u9593\u5012\u8f49\u5427~\u905e\u8ff4",source:"@site/docs/ironMan13/day19.md",sourceDirName:"ironMan13",slug:"/ironMan13/day19",permalink:"/en/docs/ironMan13/day19",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/ironMan13/day19.md",tags:[{label:"C#",permalink:"/en/docs/tags/c"},{label:"\u96de\u790e\u89c0\u5ff5",permalink:"/en/docs/tags/\u96de\u790e\u89c0\u5ff5"},{label:"\u9435\u4eba\u8cfd",permalink:"/en/docs/tags/\u9435\u4eba\u8cfd"}],version:"current",lastUpdatedAt:1699019226,formattedLastUpdatedAt:"Nov 3, 2023",sidebarPosition:90,frontMatter:{sidebar_position:90,description:"Day19 C# \u96de\u790e\u89c0\u5ff5- \u8b93\u6642\u9593\u5012\u8f49\u5427~\u905e\u8ff4",key:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd","cSharp"],tags:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd"]},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udd16 \u56de\u982d\u5427!\u5b69\u5b50~ref \u8207 out \u53c3\u6578\u4fee\u98fe\u8a5e",permalink:"/en/docs/ironMan13/day18"},next:{title:"\ud83e\udd16 \u7269\u4ef6\u5c0e\u5411(oop)\u57fa\u672c\u89c0\u5ff5",permalink:"/en/docs/ironMan13/day20"}},c={},s=[{value:"\u905e\u8ff4",id:"\u905e\u8ff4",level:3},{value:"\u7bc4\u4f8b:\u6211\u5011\u4f86\u8b93 20 \u4e00\u76f4\u5012\u6263\u5230 0\uff0c\u7136\u5f8c\u558a\u51fa\u65b0\u5e74\u5feb\u6a02\u5427",id:"\u7bc4\u4f8b\u6211\u5011\u4f86\u8b93-20-\u4e00\u76f4\u5012\u6263\u5230-0\u7136\u5f8c\u558a\u51fa\u65b0\u5e74\u5feb\u6a02\u5427",level:3},{value:"\u9032\u968e\u7df4\u7fd2:",id:"\u9032\u968e\u7df4\u7fd2",level:3},{value:"\u8cbb\u6ce2\u90a3\u5951\u6578\u5217:",id:"\u8cbb\u6ce2\u90a3\u5951\u6578\u5217",level:3},{value:"\u9019\u5c31\u4e00\u500b C#\u5012\u5e36\u6309\u9375\u7684\u6545\u4e8b~",id:"\u9019\u5c31\u4e00\u500b-c\u5012\u5e36\u6309\u9375\u7684\u6545\u4e8b",level:3}],u={toc:s},p="wrapper";function d(n){let{components:e,...t}=n;return(0,l.kt)(p,(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"-\u8b93\u6642\u9593\u5012\u8f49\u5427\u905e\u8ff4"},"\ud83e\udd16 \u8b93\u6642\u9593\u5012\u8f49\u5427~\u905e\u8ff4"),(0,l.kt)("p",null,"\u96fb\u8996\u53ef\u4ee5\u5012\u5e36\uff0c",(0,l.kt)("br",null),"\n\u7136\u5f8c\u91cd\u64ad\uff0c",(0,l.kt)("br",null),"\n\u559c\u6b61\u770b\u5e7e\u6b21\u5c31\u770b\u5e7e\u6b21\uff0c",(0,l.kt)("br",null),"\nC#\u4e2d\u4e5f\u80fd\u8b93\u7a0b\u5f0f\u5012\u5e36\uff0c\u91cd\u65b0\u57f7\u884c\uff0c",(0,l.kt)("br",null),"\n\u57f7\u884c\u5230\u6eff\u610f\u70ba\u6b62"),(0,l.kt)("h3",{id:"\u905e\u8ff4"},"\u905e\u8ff4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u905e\u8ff4\u5c31\u662f\u5728\u65b9\u6cd5\u4e2d\u547c\u53eb\u65b9\u6cd5\u81ea\u5df1"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u5e38\u6703\u4f7f\u7528\u905e\u8ff4\u7684\u7a0b\u5f0f\u78bc\u90fd\u6bd4\u8f03\u7c21\u6f54"),(0,l.kt)("li",{parentName:"ul"},"\u905e\u8ff4\u901a\u5e38\u57f7\u884c\u6548\u7387\u8f03\u4f4e")),(0,l.kt)("h3",{id:"\u7bc4\u4f8b\u6211\u5011\u4f86\u8b93-20-\u4e00\u76f4\u5012\u6263\u5230-0\u7136\u5f8c\u558a\u51fa\u65b0\u5e74\u5feb\u6a02\u5427"},"\u7bc4\u4f8b:\u6211\u5011\u4f86\u8b93 20 \u4e00\u76f4\u5012\u6263\u5230 0\uff0c\u7136\u5f8c\u558a\u51fa\u65b0\u5e74\u5feb\u6a02\u5427"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace CsharpDemo\n{\n\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            //\u547c\u53eb\u905e\u8ff4\u65b9\u6cd5\n            Fac(20);\n\n            Console.WriteLine("\u65b0\u5e74\u5feb\u6a02!");\n            Console.ReadKey();\n        }\n    //\u5ba3\u544a\u4e00\u500b\u905e\u8ff4\u65b9\u6cd5\n        static void Fac(int n)\n        {\n            Console.WriteLine("n = " + n);\n            //\u5982\u679cn\u7b49\u65bc0\u4e4b\u5f8c\u5c31\u4e0d\u547c\u53eb\u81ea\u5df1\n            if (n != 0)\n            {\n                Fac(n - 1);\n            }\n        }\n    }\n}\n')),(0,l.kt)("p",null,"\u7d50\u679c:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"n = 20",(0,l.kt)("br",null),"\nn = 19",(0,l.kt)("br",null),"\nn = 18",(0,l.kt)("br",null),"\nn = 17",(0,l.kt)("br",null),"\nn = 16",(0,l.kt)("br",null),"\nn = 15",(0,l.kt)("br",null),"\nn = 14",(0,l.kt)("br",null),"\nn = 13",(0,l.kt)("br",null),"\nn = 12",(0,l.kt)("br",null),"\nn = 11",(0,l.kt)("br",null),"\nn = 10",(0,l.kt)("br",null),"\nn = 9",(0,l.kt)("br",null),"\nn = 8",(0,l.kt)("br",null),"\nn = 7",(0,l.kt)("br",null),"\nn = 6",(0,l.kt)("br",null),"\nn = 5",(0,l.kt)("br",null),"\nn = 4",(0,l.kt)("br",null),"\nn = 3",(0,l.kt)("br",null),"\nn = 2",(0,l.kt)("br",null),"\nn = 1",(0,l.kt)("br",null),"\nn = 0",(0,l.kt)("br",null),"\n\u65b0\u5e74\u5feb\u6a02!")),(0,l.kt)("h3",{id:"\u9032\u968e\u7df4\u7fd2"},"\u9032\u968e\u7df4\u7fd2:"),(0,l.kt)("h3",{id:"\u8cbb\u6ce2\u90a3\u5951\u6578\u5217"},"\u8cbb\u6ce2\u90a3\u5951\u6578\u5217:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace CsharpDemo\n{\n\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            //\u5ba3\u544a\u4e00\u500b\u6574\u6578\uff0c\u770b\u8981\u8f38\u51fa\u591a\u5c11\u9805\n            int n = Convert.ToInt32(Console.ReadLine());\n\n            Console.WriteLine("Fibonacci : ");\n            for (int i = 1; i <= n; i++)\n            {\n                //\u8f38\u51fa\u8cbb\u6ce2\u90a3\u5951\u6578\u5217\u7684\u7b2ci\u9805\n                Console.Write(Fibonacci(i) + "\\t");\n\n                //\u6bcf\u8f38\u51fa\u4e94\u9805\u63db\u4e00\u884c\n                if ((i % 5) == 0)\n                {\n                    Console.WriteLine();\n                }\n            }\n\n            Console.ReadKey();\n        }\n\n        //\u5ba3\u544a\u65b9\u6cd5\n        static int Fibonacci(int n)\n        {\n            if (n == 1 || n == 2)\n            {\n                //\u521d\u59cb\u503c\n                return 1;\n            }\n            else\n            {\n                //\u905e\u8ff4\n                return (Fibonacci(n - 1) + Fibonacci(n - 2));\n            }\n        }\n\n\n    }\n  }\n')),(0,l.kt)("p",null,"\u8f38\u5165:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"30")),(0,l.kt)("p",null,"\u8f38\u51fa:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"30\nFibonacci :")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"1       1       2       3       5\n8       13      21      34      55\n89      144     233     377     610\n987     1597    2584    4181    6765\n10946   17711   28657   46368   75025\n121393  196418  317811  514229  832040\n")),(0,l.kt)("h3",{id:"\u9019\u5c31\u4e00\u500b-c\u5012\u5e36\u6309\u9375\u7684\u6545\u4e8b"},"\u9019\u5c31\u4e00\u500b C#\u5012\u5e36\u6309\u9375\u7684\u6545\u4e8b~"))}d.isMDXComponent=!0}}]);