"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[6978],{49613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(t),k=a,d=p["".concat(s,".").concat(k)]||p[k]||m[k]||i;return t?r.createElement(d,l(l({ref:n},c),{},{components:t})):r.createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=k;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},69775:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=t(88028),a=(t(59496),t(49613));const i={sidebar_position:45,description:"Day10 C# \u96de\u790e\u89c0\u5ff5- \u91cd\u64ad\u8207\u505c\u6b62 while\u8ff4\u5708\u8207break",key:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd","cSharp"],tags:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd"]},l="\ud83e\udd16 \u91cd\u64ad\u8207\u505c\u6b62 while\u8ff4\u5708\u8207break",o={unversionedId:"ironMan13/day10",id:"ironMan13/day10",title:"\ud83e\udd16 \u91cd\u64ad\u8207\u505c\u6b62 while\u8ff4\u5708\u8207break",description:"Day10 C# \u96de\u790e\u89c0\u5ff5- \u91cd\u64ad\u8207\u505c\u6b62 while\u8ff4\u5708\u8207break",source:"@site/docs/ironMan13/day10.md",sourceDirName:"ironMan13",slug:"/ironMan13/day10",permalink:"/docs/ironMan13/day10",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/ironMan13/day10.md",tags:[{label:"C#",permalink:"/docs/tags/c"},{label:"\u96de\u790e\u89c0\u5ff5",permalink:"/docs/tags/\u96de\u790e\u89c0\u5ff5"},{label:"\u9435\u4eba\u8cfd",permalink:"/docs/tags/\u9435\u4eba\u8cfd"}],version:"current",lastUpdatedAt:1704630401,formattedLastUpdatedAt:"2024\u5e741\u67087\u65e5",sidebarPosition:45,frontMatter:{sidebar_position:45,description:"Day10 C# \u96de\u790e\u89c0\u5ff5- \u91cd\u64ad\u8207\u505c\u6b62 while\u8ff4\u5708\u8207break",key:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd","cSharp"],tags:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd"]},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udd16 \u7701\u53bb\u91cd\u8907\u7a0b\u5f0f\u78bc\u7684\u597d\u5e6b\u624b~for\u8ff4\u5708",permalink:"/docs/ironMan13/day9"},next:{title:"\ud83e\udd16 \u628a\u8907\u96dc\u7684\u4e8b\u60c5\u8207\u95dc\u4fc2\u7c21\u55ae\u5316~\u5217\u8209\u8207\u7d50\u69cb",permalink:"/docs/ironMan13/day11"}},s={},u=[{value:"while \u8ff4\u5708",id:"while-\u8ff4\u5708",level:2},{value:"\u7bc4\u4f8b:\u6211\u5011\u4f86\u5012\u6578 10~1\uff0c\u6578\u5230 1 \u6642\u5c31\u558a\u65b0\u5e74\u5feb\u6a02",id:"\u7bc4\u4f8b\u6211\u5011\u4f86\u5012\u6578-101\u6578\u5230-1-\u6642\u5c31\u558a\u65b0\u5e74\u5feb\u6a02",level:3},{value:"break",id:"break",level:3},{value:"\u7bc4\u4f8b:\u6211\u5011\u4f86\u7528\u525b\u525b\u7684\u7bc4\u4f8b\u4f86\u5be6\u9a57 break \u5427",id:"\u7bc4\u4f8b\u6211\u5011\u4f86\u7528\u525b\u525b\u7684\u7bc4\u4f8b\u4f86\u5be6\u9a57-break-\u5427",level:3},{value:"continue",id:"continue",level:3},{value:"\u7bc4\u4f8b:\u6211\u5011\u5370\u51fa 1~10 \u7684\u5076\u6578\u5427",id:"\u7bc4\u4f8b\u6211\u5011\u5370\u51fa-110-\u7684\u5076\u6578\u5427",level:3},{value:"\u6211\u5011\u4eca\u5929\u7684\u6545\u4e8b\u5c31\u5230\u9019\u908a\uff0cTo be continue",id:"\u6211\u5011\u4eca\u5929\u7684\u6545\u4e8b\u5c31\u5230\u9019\u908ato-be-continue",level:3}],c={toc:u},p="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-\u91cd\u64ad\u8207\u505c\u6b62-while\u8ff4\u5708\u8207break"},"\ud83e\udd16 \u91cd\u64ad\u8207\u505c\u6b62 while\u8ff4\u5708\u8207break"),(0,a.kt)("p",null,"\u65e5\u5b50\u4e00\u5929\u4e00\u5929\u904e\uff0c\n\u5468\u800c\u5fa9\u59cb\uff0c\u7121\u9650\u5faa\u74b0\nC#\u88e1\u9762\u4e5f\u6709\u91cd\u8907\u4e0d\u65b7\u7684\u8a9e\u53e5\uff0cwhile"),(0,a.kt)("h2",{id:"while-\u8ff4\u5708"},"while \u8ff4\u5708"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u57f7\u884c\u524d\u6703\u5148\u5224\u65b7\u689d\u4ef6\u662f\u5426\u70ba\u771f"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u689d\u4ef6\u70ba\u771f\u5c31\u7e7c\u7e8c\u57f7\u884c\uff0c\u76f4\u5230\u689d\u4ef6\u8b8a\u6210\u5426"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u689d\u4ef6\u5f0f\u771f\uff0c\u7a0b\u5f0f\u6703\u6c38\u9060\u57f7\u884c")),(0,a.kt)("h3",{id:"\u7bc4\u4f8b\u6211\u5011\u4f86\u5012\u6578-101\u6578\u5230-1-\u6642\u5c31\u558a\u65b0\u5e74\u5feb\u6a02"},"\u7bc4\u4f8b:\u6211\u5011\u4f86\u5012\u6578 10~1\uff0c\u6578\u5230 1 \u6642\u5c31\u558a\u65b0\u5e74\u5feb\u6a02"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace CsharpDemo\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            //\u5148\u5ba3\u544a\u4e00\u500b\u958b\u95dc\n            bool open = true;\n\n            //\u5ba3\u544a\u4e00\u500b\u5012\u6578\u7528\u7684\u6574\u6578\u8b8a\u6578\n            int number = 10;\n\n            //\u958b\u59cb\u57f7\u884c\u5012\u6578\n            while (open)\n            {\n                //\u5982\u679c\u6578\u52301\u5c31\u628a\u958b\u95dc\u95dc\u6389\uff0c\u4e0b\u6b21\u5c31\u4e0d\u6703\u57f7\u884c\n                if(number == 1)\n                {\n                    open = false;\n                }\n\n                //\u5370\u51fa\u7576\u524d\u6578\u5b57\uff0c\u5370\u5b8c\u5f8c\u5c31\u6e1b\u4e00\n                Console.WriteLine(number--);\n            }\n            //\u90fd\u5012\u6578\u5b8c\u5f8c\u5c31\u558a\u65b0\u5e74\u5feb\u6a02\n            Console.WriteLine("\u65b0\u5e74\u5feb\u6a02!");\n\n            Console.ReadKey();\n        }\n    }\n  }\n')),(0,a.kt)("p",null,"\u7d50\u679c:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"10\n9\n8\n7\n6\n5\n4\n3\n2\n1\n\u65b0\u5e74\u5feb\u6a02!")),(0,a.kt)("h3",{id:"break"},"break"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ea\u8981\u5728\u8ff4\u5708\u4e2d\u52a0\u5165 break\uff0c\u7121\u8ad6\u8ff4\u5708\u689d\u4ef6\u5982\u4f55\u5c31\u90fd\u76f4\u63a5\u7d50\u675f\u8ff4\u5708"),(0,a.kt)("li",{parentName:"ul"},"\u5373\u4f7f\u689d\u4ef6\u70ba true \u9084\u662f\u6703\u7d50\u675f\u8ff4\u5708")),(0,a.kt)("h3",{id:"\u7bc4\u4f8b\u6211\u5011\u4f86\u7528\u525b\u525b\u7684\u7bc4\u4f8b\u4f86\u5be6\u9a57-break-\u5427"},"\u7bc4\u4f8b:\u6211\u5011\u4f86\u7528\u525b\u525b\u7684\u7bc4\u4f8b\u4f86\u5be6\u9a57 break \u5427"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace CsharpDemo\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            //\u5148\u5ba3\u544a\u4e00\u500b\u958b\u95dc\n            bool open = true;\n\n            //\u5ba3\u544a\u4e00\u500b\u5012\u6578\u7528\u7684\u6574\u6578\u8b8a\u6578\n            int number = 10;\n\n            //\u958b\u59cb\u57f7\u884c\u5012\u6578\n            while (open)\n            {\n\n                //\u5370\u51fa\u7576\u524d\u6578\u5b57\n                Console.WriteLine(number);\n\n                //\u5982\u679c\u6578\u52301\u5c31break\uff0c\u653e\u5f8c\u9762\u7684\u539f\u56e0\u662fbreak\u5f8c\u5c31\u4e0d\u6703\u57f7\u884c\u4e86\n                if (number == 1)\n                {\n                    //\u57f7\u884c\u5230\u9019\u908a\u5c31\u4e2d\u65b7\n                    break;\n                }\n                //break\u5f8c\u5c31\u4e0d\u6703\u57f7\u884c\u4e86\uff0c\u6240\u4ee5\u905e\u6e1b\u653e\u5230\u5f8c\u9762\n                number--;\n            }\n            //\u90fd\u5012\u6578\u5b8c\u5f8c\u5c31\u558a\u65b0\u5e74\u5feb\u6a02\n            Console.WriteLine("\u65b0\u5e74\u5feb\u6a02!");\n\n             //\u6211\u5011\u5beb\u770b\u770b\u958b\u95dc\u7684\u503c\n             Console.WriteLine("\u958b\u95dc = " + open);\n\n            Console.ReadKey();\n        }\n    }\n  }\n')),(0,a.kt)("p",null,"\u7d50\u679c:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"10\n9\n8\n7\n6\n5\n4\n3\n2\n1\n\u65b0\u5e74\u5feb\u6a02!\n\u958b\u95dc = True")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u5728\u9019\u908a\u6211\u5011\u53ef\u4ee5\u770b\u5230\u958b\u95dc\u7684\u503c\u660e\u660e\u9084\u662ftrue\uff0c\u4f46\u4e00\u57f7\u884cBreak\u8ff4\u5708\u5c31\u505c\u6389\u4e86")),(0,a.kt)("h3",{id:"continue"},"continue"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4ed6\u8ddf break \u4e00\u6a23\u662f\u4e2d\u65b7\u8ff4\u5708"),(0,a.kt)("li",{parentName:"ul"},"\u4f46\u4e0d\u4e00\u6a23\u7684\u9ede\uff0c\u4ed6\u662f\u4e2d\u65b7",(0,a.kt)("inlineCode",{parentName:"li"},"\u672c\u6b21\u8ff4\u5708")),(0,a.kt)("li",{parentName:"ul"},"\u9019\u6b21\u8ff4\u5708\u57f7\u884c\u4e0d\u57f7\u884c\uff0c\u4f46\u4e0b\u6b21\u9084\u6703\u57f7\u884c")),(0,a.kt)("h3",{id:"\u7bc4\u4f8b\u6211\u5011\u5370\u51fa-110-\u7684\u5076\u6578\u5427"},"\u7bc4\u4f8b:\u6211\u5011\u5370\u51fa 1~10 \u7684\u5076\u6578\u5427"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace CsharpDemo\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            //\u5ba3\u544a\u4e00\u500b\u8a08\u6578\u7528\u7684\u6574\u6578\u8b8a\u6578\n            int number = 0;\n\n            //\u958b\u59cb\u57f7\u884c\u8a08\u6578\n            while (number <11)\n            {\n                //\u5148\u505a\u52a0\u4e00\n                number++;\n                //\u5982\u679c\u4e0d\u662f\u5076\u6578\uff0c\u672c\u6b21\u5f8c\u9762\u5c31\u4e0d\u57f7\u884c\u4e86\n                if (number % 2 !=0)\n                {\n                    continue;\n                }\n                //\u5370\u51fa\u7576\u524d\u6578\u5b57\uff0c\u4e26\u52a0\u4e00\n                Console.WriteLine(number);\n            }\n\n            Console.ReadKey();\n        }\n    }\n  }\n")),(0,a.kt)("p",null,"\u7d50\u679c:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"2\n4\n6\n8\n10")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u6211\u5011\u5c31\u53ef\u4ee5\u767c\u73fe\uff0c\u7576\u57fa\u6578\u7684\u6642\u5019\u8ff4\u5708\u5c31\u6c92\u5f80\u4e0b\u57f7\u884c\u4e86\uff0c\u5076\u6578\u624d\u6703\u57f7\u884c")),(0,a.kt)("h3",{id:"\u6211\u5011\u4eca\u5929\u7684\u6545\u4e8b\u5c31\u5230\u9019\u908ato-be-continue"},"\u6211\u5011\u4eca\u5929\u7684\u6545\u4e8b\u5c31\u5230\u9019\u908a\uff0cTo be continue"))}m.isMDXComponent=!0}}]);