"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[4825],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>m});var a=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var s=a.createContext({}),c=function(n){var e=a.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},u=function(n){var e=c(n.components);return a.createElement(s.Provider,{value:e},n.children)},p="mdxType",k={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,s=n.parentName,u=i(n,["components","mdxType","originalType","parentName"]),p=c(t),d=r,m=p["".concat(s,".").concat(d)]||p[d]||k[d]||o;return t?a.createElement(m,l(l({ref:e},u),{},{components:t})):a.createElement(m,l({ref:e},u))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=n,i[p]="string"==typeof n?n:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7476:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_position:35,description:"Day8 C# \u96de\u790e\u89c0\u5ff5- \u5982\u679c\u6c92\u6709\u5982\u679c\uff0c\u53ea\u6709\u592a\u591a\u7684\u5982\u679cswitch\u9673\u8ff0\u5f0f",key:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd","cSharp"],tags:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd"]},l="\ud83e\udd16 \u5982\u679c\u6c92\u6709\u5982\u679c\uff0c\u53ea\u6709\u592a\u591a\u7684\u5982\u679cswitch\u9673\u8ff0\u5f0f",i={unversionedId:"ironMan13/day8",id:"ironMan13/day8",title:"\ud83e\udd16 \u5982\u679c\u6c92\u6709\u5982\u679c\uff0c\u53ea\u6709\u592a\u591a\u7684\u5982\u679cswitch\u9673\u8ff0\u5f0f",description:"Day8 C# \u96de\u790e\u89c0\u5ff5- \u5982\u679c\u6c92\u6709\u5982\u679c\uff0c\u53ea\u6709\u592a\u591a\u7684\u5982\u679cswitch\u9673\u8ff0\u5f0f",source:"@site/docs/ironMan13/day8.md",sourceDirName:"ironMan13",slug:"/ironMan13/day8",permalink:"/docs/ironMan13/day8",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/ironMan13/day8.md",tags:[{label:"C#",permalink:"/docs/tags/c"},{label:"\u96de\u790e\u89c0\u5ff5",permalink:"/docs/tags/\u96de\u790e\u89c0\u5ff5"},{label:"\u9435\u4eba\u8cfd",permalink:"/docs/tags/\u9435\u4eba\u8cfd"}],version:"current",sidebarPosition:35,frontMatter:{sidebar_position:35,description:"Day8 C# \u96de\u790e\u89c0\u5ff5- \u5982\u679c\u6c92\u6709\u5982\u679c\uff0c\u53ea\u6709\u592a\u591a\u7684\u5982\u679cswitch\u9673\u8ff0\u5f0f",key:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd","cSharp"],tags:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd"]},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udd16 \u4f60\u6709\u9078\u64c7\u969c\u7919\u55ce? \u4ea4\u7d66if\u9673\u8ff0\u5f0f\u89e3\u6c7a\u5427!",permalink:"/docs/ironMan13/day7"},next:{title:"\ud83e\udd16 \u7701\u53bb\u91cd\u8907\u7a0b\u5f0f\u78bc\u7684\u597d\u5e6b\u624b~for\u8ff4\u5708",permalink:"/docs/ironMan13/day9"}},s={},c=[{value:"Switch \u9673\u8ff0\u5f0f",id:"switch-\u9673\u8ff0\u5f0f",level:3},{value:"\u7bc4\u4f8b:\u4f86\u73a9\u73a9\u6211\u5011\u5c0f\u6642\u5019\u7684\u7334\u5b50\u7e5e\u53e3\u4ee4\u5427",id:"\u7bc4\u4f8b\u4f86\u73a9\u73a9\u6211\u5011\u5c0f\u6642\u5019\u7684\u7334\u5b50\u7e5e\u53e3\u4ee4\u5427",level:3},{value:"\u4e00\u5343\u500b\u5982\u679c...\u5c31...\uff0c\u53ea\u8981\u4e00\u500b switch \u5c31\u80fd\u628a\u7a0b\u5f0f\u78bc\u6392\u7684\u6574\u6574\u9f4a\u9f4a\u7684\u4e86\uff0c\u597d\u5566\u5927\u5bb6\u660e\u5929\u898b\u55bd!",id:"\u4e00\u5343\u500b\u5982\u679c\u5c31\u53ea\u8981\u4e00\u500b-switch-\u5c31\u80fd\u628a\u7a0b\u5f0f\u78bc\u6392\u7684\u6574\u6574\u9f4a\u9f4a\u7684\u4e86\u597d\u5566\u5927\u5bb6\u660e\u5929\u898b\u55bd",level:3}],u={toc:c},p="wrapper";function k(n){let{components:e,...t}=n;return(0,r.kt)(p,(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-\u5982\u679c\u6c92\u6709\u5982\u679c\u53ea\u6709\u592a\u591a\u7684\u5982\u679cswitch\u9673\u8ff0\u5f0f"},"\ud83e\udd16 \u5982\u679c\u6c92\u6709\u5982\u679c\uff0c\u53ea\u6709\u592a\u591a\u7684\u5982\u679cswitch\u9673\u8ff0\u5f0f"),(0,r.kt)("p",null,"\u4f60\u662f\u5426\u66fe\u7d93\u5167\u5fc3\u5145\u6eff\u5404\u7a2e\u5982\u679c\u5462?",(0,r.kt)("br",null),"\n\u5982\u679c....\u6211\u5c31....\uff0c",(0,r.kt)("br",null),"\n\u4e00\u7d44",(0,r.kt)("inlineCode",{parentName:"p"},"if"),"\u5df2\u7d93\u6eff\u8db3\u4e0d\u4e86\u4f60\u6642\uff0c",(0,r.kt)("br",null),"\n\u90a3\u8a72\u5982\u4f55\u662f\u597d\u5462?"),(0,r.kt)("h3",{id:"switch-\u9673\u8ff0\u5f0f"},"Switch \u9673\u8ff0\u5f0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u55ae\u6191 if..else..\u53ea\u80fd\u8655\u7406\u4e00\u500b\u689d\u4ef6\uff0c\u4f46 Switch \u662f\u5c08\u9580\u7528\u4f86\u8655\u7406\u591a\u5206\u652f\u7684\u8a9e\u53e5\n",(0,r.kt)("inlineCode",{parentName:"li"},"Switch\u8a9e\u53e5\u4e2d\u7684\u6e2c\u8a66\u91cf\u53ef\u4ee5\u662f\u4e00\u500b\u8b8a\u6578\uff0c\u4e5f\u53ef\u4ee5\u662f\u4e00\u500b\u8868\u9054\u5f0f\u3002\u7a0b\u5f0f\u4e00\u4e00\u6e2c\u8a66case\u5206\u652f\u4e2d\u7684\u503c\uff0c\u6e2c\u8a66\u5339\u914d\u5230\u54ea\u500b\u5206\u652f\u4e2d\u7684\u503c\uff0c\u5c31\u57f7\u884c\u54ea\u500b\u5206\u652f\u4e2d\u7684\u8a9e\u53e5\u3002\n\u6bcf\u500b\u5206\u652f\u90fd\u5df2break\u8a9e\u53e5\u7d50\u675f\uff0c\u6558\u8ff0\u53e5\u4e00\u65e6\u9047\u5230break\uff0c\u5c31\u6703\u7d50\u675f\u6574\u500b\u8a9e\u53e5\u3002"))),(0,r.kt)("h3",{id:"\u7bc4\u4f8b\u4f86\u73a9\u73a9\u6211\u5011\u5c0f\u6642\u5019\u7684\u7334\u5b50\u7e5e\u53e3\u4ee4\u5427"},"\u7bc4\u4f8b:\u4f86\u73a9\u73a9\u6211\u5011\u5c0f\u6642\u5019\u7684\u7334\u5b50\u7e5e\u53e3\u4ee4\u5427"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace CsharpDemo\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            //\u79ae\u62dc\u5e7e\n            string week = Console.ReadLine();\n\n            //\u4f7f\u7528switch\n            switch (week)\n            {\n                case "\u661f\u671f\u4e00":\n                    Console.WriteLine("\u7334\u5b50\u7a7f\u65b0\u8863");\n                    break;\n                case "\u661f\u671f\u4e8c":\n                    Console.WriteLine("\u7334\u5b50\u809a\u5b50\u9913");\n                    break;\n                case "\u661f\u671f\u4e09":\n                    Console.WriteLine("\u7334\u5b50\u53bb\u722c\u5c71");\n                    break;\n                case "\u661f\u671f\u56db":\n                    Console.WriteLine("\u7334\u5b50\u53bb\u8003\u8a66");\n                    break;\n                case "\u661f\u671f\u4e94":\n                    Console.WriteLine("\u7334\u5b50\u53bb\u8df3\u821e");\n                    break;\n                case "\u661f\u671f\u516d":\n                    Console.WriteLine("\u7334\u5b50\u53bb\u6597\u516d");\n                    break;\n                case "\u661f\u671f\u65e5":\n                    Console.WriteLine("\u7334\u5b50\u904e\u751f\u65e5");\n                    break;\n            }\n\n            Console.ReadKey();\n        }\n    }\n  }\n')),(0,r.kt)("p",null,"\u8f38\u5165:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u661f\u671f\u4e00")),(0,r.kt)("p",null,"\u7d50\u679c:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u661f\u671f\u4e00",(0,r.kt)("br",null),"\n\u7334\u5b50\u7a7f\u65b0\u8863")),(0,r.kt)("p",null,"\u8f38\u5165:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u661f\u671f\u4e8c")),(0,r.kt)("p",null,"\u7d50\u679c:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u661f\u671f\u4e8c",(0,r.kt)("br",null),"\n\u7334\u5b50\u809a\u5b50\u9913")),(0,r.kt)("p",null,"###\u96a8\u5802\u5c0f\u7df4\u7fd2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9084\u8a18\u7684\u57fa\u59c6\u62c9\u723e\u68ee\u8a08\u7b97\u516c\u5f0f\u55ce?\u6211\u5011\u4eca\u5929\u4f86\u7528 switch \u5be6\u73fe\u5427"),(0,r.kt)("li",{parentName:"ul"},"\u9019\u904e\u7a0b\u7a0b\u5f0f\u53ef\u80fd\u6703\u8907\u96dc\u9ede\uff0c\u5c6c\u65bc\u6bd4\u8f03\u9032\u968e\u7684\u516c\u5f0f\uff0c\u6709\u8208\u8da3\u7684\u670b\u53cb\u5728\u7814\u7a76\u5c31\u53ef\u4ee5\u4e86")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace CsharpDemo\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            Console.WriteLine("\u8acb\u8f38\u5165\u5e74\u6708\u65e5");\n            int y = Convert.ToInt32(Console.ReadLine());\n            int m = Convert.ToInt32(Console.ReadLine());\n            int d = Convert.ToInt32(Console.ReadLine());\n            int total = 365; //\u5e73\u5e74\n            if ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0)\n                total = 366;\n            switch (m)\n            {\n               case 1:\n                    total -= 31;\n                    goto case 2;\n                case 2:\n                    if ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0) //\u958f\u5e74\n                    {\n                        total -= 29;\n                    }\n                    else\n                    {\n                        total -= 28;\n                    }\n                    goto case 3;\n                case 3:\n                    total -= 31;\n                    goto case 4;\n                case 4:\n                    total -= 30;\n                    goto case 5;\n                case 5:\n                    total -= 31;\n                    goto case 6;\n                case 6:\n                    total -= 30;\n                    goto case 7;\n                case 7:\n                    total -= 31;\n                    goto case 8;\n                case 8:\n                    total -= 31;\n                    goto case 9;\n                case 9:\n                    total -= 30;\n                    goto case 10;\n                case 10:\n                    total -= 31;\n                    goto case 11;\n                case 11:\n                    total -= 30;\n                    goto case 12;\n                case 12:\n                    total -= 31;\n                    goto default;\n                default: total += d; break;\n            }\n            Console.WriteLine(m+"\u6708"+d+"\u65e5\u662f"+y+"\u5e74\u7684\u7b2c"+ total + "\u5929");\n\n            Console.ReadKey();\n        }\n    }\n  }\n')),(0,r.kt)("p",null,"\u8f38\u5165"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"2021",(0,r.kt)("br",null),"\n09",(0,r.kt)("br",null),"\n09")),(0,r.kt)("p",null,"\u7d50\u679c:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8acb\u8f38\u5165\u5e74\u6708\u65e5",(0,r.kt)("br",null),"\n2021",(0,r.kt)("br",null),"\n09",(0,r.kt)("br",null),"\n09",(0,r.kt)("br",null),"\n9 \u6708 9 \u65e5\u662f 2021 \u5e74\u7684\u7b2c 252 \u5929")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"go to \u53ef\u4ee5\u6307\u5b9a\u8981\u53bb\u7684\u689d\u4ef6\uff0c\u5982\u679c\u4e00\u500b\u689d\u4ef6\u4e4b\u4e0b\u8981\u8dd1\u597d\u5e7e\u500b\u5206\u652f\u5c31\u53ef\u4ee5\u62ff\u4f86\u505a\u4f7f\u7528"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"\u5728switch\u4e2d\u7684else\uff0c\u5beb\u4f5cdefault")),(0,r.kt)("h3",{id:"\u4e00\u5343\u500b\u5982\u679c\u5c31\u53ea\u8981\u4e00\u500b-switch-\u5c31\u80fd\u628a\u7a0b\u5f0f\u78bc\u6392\u7684\u6574\u6574\u9f4a\u9f4a\u7684\u4e86\u597d\u5566\u5927\u5bb6\u660e\u5929\u898b\u55bd"},"\u4e00\u5343\u500b\u5982\u679c...\u5c31...\uff0c\u53ea\u8981\u4e00\u500b switch \u5c31\u80fd\u628a\u7a0b\u5f0f\u78bc\u6392\u7684\u6574\u6574\u9f4a\u9f4a\u7684\u4e86\uff0c\u597d\u5566\u5927\u5bb6\u660e\u5929\u898b\u55bd!"))}k.isMDXComponent=!0}}]);