"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[4812],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(g,o(o({ref:n},u),{},{components:t})):r.createElement(g,o({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},776:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(8957),a=(t(9496),t(9613));const i={sidebar_position:75,description:"Day16 C# \u96de\u790e\u89c0\u5ff5- \u865b\u64ec\u4ee3\u5de5\u5ee0~\u65b9\u6cd5(function)",key:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd","cSharp"],tags:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd"]},o="\ud83e\udd16 \u865b\u64ec\u4ee3\u5de5\u5ee0~\u65b9\u6cd5(function)",l={unversionedId:"ironMan13/day16",id:"ironMan13/day16",title:"\ud83e\udd16 \u865b\u64ec\u4ee3\u5de5\u5ee0~\u65b9\u6cd5(function)",description:"Day16 C# \u96de\u790e\u89c0\u5ff5- \u865b\u64ec\u4ee3\u5de5\u5ee0~\u65b9\u6cd5(function)",source:"@site/docs/ironMan13/day16.md",sourceDirName:"ironMan13",slug:"/ironMan13/day16",permalink:"/docs/ironMan13/day16",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/ironMan13/day16.md",tags:[{label:"C#",permalink:"/docs/tags/c"},{label:"\u96de\u790e\u89c0\u5ff5",permalink:"/docs/tags/\u96de\u790e\u89c0\u5ff5"},{label:"\u9435\u4eba\u8cfd",permalink:"/docs/tags/\u9435\u4eba\u8cfd"}],version:"current",lastUpdatedAt:1688812009,formattedLastUpdatedAt:"2023\u5e747\u67088\u65e5",sidebarPosition:75,frontMatter:{sidebar_position:75,description:"Day16 C# \u96de\u790e\u89c0\u5ff5- \u865b\u64ec\u4ee3\u5de5\u5ee0~\u65b9\u6cd5(function)",key:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd","cSharp"],tags:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd"]},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udd16 \u591a\u7b46\u8cc7\u6599\u7684\u597d\u670b\u53cb~List",permalink:"/docs/ironMan13/day15"},next:{title:"\ud83e\udd16 \u50cf\u500b\u90f5\u5dee\u4e00\u6a23~\u503c\u8207\u5740\u7684\u50b3\u905e",permalink:"/docs/ironMan13/day17"}},s={},c=[{value:"\u65b9\u6cd5(function)",id:"\u65b9\u6cd5function",level:3},{value:"\u5b57\u4e32\u65b9\u6cd5",id:"\u5b57\u4e32\u65b9\u6cd5",level:3},{value:"\u7bc4\u4f8b:\u6211\u5011\u4f86\u56de\u50b3\u5b64\u7368\u4e00\u96bb\u96de\u7684\u5b57\u4e32",id:"\u7bc4\u4f8b\u6211\u5011\u4f86\u56de\u50b3\u5b64\u7368\u4e00\u96bb\u96de\u7684\u5b57\u4e32",level:3},{value:"\u7bc4\u4f8b:\u6211\u5011\u62cb\u4eca\u5929\u7684\u65e5\u671f\u5230\u65b9\u6cd5\u4e2d\uff0c\u8b93\u4ed6\u81ea\u52d5\u7d44\u6210\u5e74\u6708\u65e5",id:"\u7bc4\u4f8b\u6211\u5011\u62cb\u4eca\u5929\u7684\u65e5\u671f\u5230\u65b9\u6cd5\u4e2d\u8b93\u4ed6\u81ea\u52d5\u7d44\u6210\u5e74\u6708\u65e5",level:3},{value:"\u6709\u4e86\u65b9\u6cd5\uff0c\u53ef\u4ee5\u5927\u5927\u964d\u4f4e\u7a0b\u5f0f\u78bc\u7684\u91cd\u8907\u7387\uff0c\u4e5f\u53ef\u4ee5\u96a8\u8655\u547c\u53eb\u4ed6",id:"\u6709\u4e86\u65b9\u6cd5\u53ef\u4ee5\u5927\u5927\u964d\u4f4e\u7a0b\u5f0f\u78bc\u7684\u91cd\u8907\u7387\u4e5f\u53ef\u4ee5\u96a8\u8655\u547c\u53eb\u4ed6",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-\u865b\u64ec\u4ee3\u5de5\u5ee0\u65b9\u6cd5function"},"\ud83e\udd16 \u865b\u64ec\u4ee3\u5de5\u5ee0~\u65b9\u6cd5(function)"),(0,a.kt)("p",null,"\u4eba\u985e\u7684\u4e16\u754c\u6709\u8a31\u591a\u7684\u5de5\u5ee0\uff0c",(0,a.kt)("br",null),"\n\u5c07\u539f\u6599\u9001\u5165\u5f8c\u5c31\u6703\u8b8a\u6210\u5546\u54c1\uff0c",(0,a.kt)("br",null),"\nC#\u7684\u4e16\u754c\u88e1\u4e5f\u662f\uff0c",(0,a.kt)("br",null),"\n\u65b9\u6cd5\u5c31\u50cf\u4e00\u9593\u9593\u7684\u5de5\u5ee0\u4e00\u6a23\uff0c",(0,a.kt)("br",null),"\n\u4e00\u767c\u5305\u5c31\u80fd\u5f97\u5230\u60f3\u8981\u7684\u6771\u897f"),(0,a.kt)("h3",{id:"\u65b9\u6cd5function"},"\u65b9\u6cd5(function)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u70ba\u4e86\u89e3\u6c7a\u4ee5\u4e0b\u554f\u984c: 1.\u7a0b\u5f0f\u78bc\u7684\u91cd\u8907 2.\u7d50\u69cb\u5f88\u4e0d\u6e05\u6670 3.\u6709\u5229\u65bc\u4fee\u6539\u8207\u7dad\u8b77"),(0,a.kt)("li",{parentName:"ul"},"\u4ed6\u5c31\u50cf\u662f\u4e00\u9593\u4ee3\u5de5\u5ee0\u4e00\u6a23")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://ithelp.ithome.com.tw/upload/images/20210916/20097001aX9kdraTMz.png",alt:"mdImg"})),(0,a.kt)("h3",{id:"\u5b57\u4e32\u65b9\u6cd5"},"\u5b57\u4e32\u65b9\u6cd5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6703\u56de\u50b3\u8655\u7406\u5f8c\u7684\u5b57\u4e32"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u81ea\u5df1\u5b9a\u7fa9\u50b3\u5165\u7684\u53c3\u6578")),(0,a.kt)("h3",{id:"\u7bc4\u4f8b\u6211\u5011\u4f86\u56de\u50b3\u5b64\u7368\u4e00\u96bb\u96de\u7684\u5b57\u4e32"},"\u7bc4\u4f8b:\u6211\u5011\u4f86\u56de\u50b3\u5b64\u7368\u4e00\u96bb\u96de\u7684\u5b57\u4e32"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace CsharpDemo\n{\n\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            //\u6211\u5011\u4f86\u547c\u53eb\u65b9\u6cd5\u4e26\u8ce6\u503c\u7d66\u8b8a\u6578\n            string animal = GetChicken();\n            Console.WriteLine(animal);\n            Console.ReadKey();\n        }\n        //\u5ba3\u544a\u5b57\u4e32\u65b9\u6cd5\n        static string GetChicken()\n        {\n            return "\u5b64\u7368\u4e00\u96bb\u96de";\n        }\n    }\n  }\n')),(0,a.kt)("p",null,"\u7d50\u679c:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5b64\u7368\u4e00\u96bb\u96de")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u4f7f\u7528static\u95dc\u9375\u5b57\u6642\uff0c\u8868\u793a\u4ed6\u662f\u975c\u614b\u7684\uff0c\u6240\u4ee5\u4e0d\u9700\u8981\u53bbnew\u4ed6"),"\n",(0,a.kt)("img",{parentName:"p",src:"https://ithelp.ithome.com.tw/upload/images/20210917/200970012uV77UtFx6.png",alt:"mdImg"})),(0,a.kt)("h3",{id:"\u7bc4\u4f8b\u6211\u5011\u62cb\u4eca\u5929\u7684\u65e5\u671f\u5230\u65b9\u6cd5\u4e2d\u8b93\u4ed6\u81ea\u52d5\u7d44\u6210\u5e74\u6708\u65e5"},"\u7bc4\u4f8b:\u6211\u5011\u62cb\u4eca\u5929\u7684\u65e5\u671f\u5230\u65b9\u6cd5\u4e2d\uff0c\u8b93\u4ed6\u81ea\u52d5\u7d44\u6210\u5e74\u6708\u65e5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace CsharpDemo\n{\n\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            //\u4f86\u53d6\u5f97\u904e\u53bb\u7684\u4e00\u500b\u6642\u9593\u5427\n            string MtDate = GetDate(1995, 4, 9);\n            Console.WriteLine(MtDate);\n\n            //\u4f86\u53d6\u5f97\u4eca\u65e5\u7684\u6642\u9593\u5427\n            MtDate = GetDate(2021, 9, 17);\n            Console.WriteLine(MtDate);\n            Console.ReadKey();\n        }\n        //\u5ba3\u544a\u4e00\u500b\u7d44\u5408\u65e5\u671f\u7684\u65b9\u6cd5\n        static string GetDate(int y,int M,int d)\n        {\n            //\u56e0\u70ba\u503c\u50b3\u9032\u4f86\u662f\u6b63\u6578\u6240\u4ee5\u9700\u8981\u8f49\u6210\u5b57\u4e32\n            string Date_y = Convert.ToString(y);//\u7b2c\u4e00\u7a2e\u8f49\u578b\u65b9\u5f0fConvert.To...\n            string Date_M = M.ToString();//\u7b2c\u4e8c\u7a2e\u8f49\u578b\u65b9\u5f0f \u53c3\u6578.ToString()\n            string Date_d = d.ToString();\n\n            //\u7d44\u5408\u56de\u50b3\u5b57\u4e32\uff0c\u7528return\u56de\u50b3\n            return Date_y + "\u5e74 " + Date_M + "\u6708 " + Date_d + "\u65e5";\n        }\n\n    }\n  }\n')),(0,a.kt)("p",null,"\u7d50\u679c:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"1995 \u5e74 4 \u6708 9 \u65e5",(0,a.kt)("br",null),"\n2021 \u5e74 9 \u6708 17 \u65e5")),(0,a.kt)("h3",{id:"\u6709\u4e86\u65b9\u6cd5\u53ef\u4ee5\u5927\u5927\u964d\u4f4e\u7a0b\u5f0f\u78bc\u7684\u91cd\u8907\u7387\u4e5f\u53ef\u4ee5\u96a8\u8655\u547c\u53eb\u4ed6"},"\u6709\u4e86\u65b9\u6cd5\uff0c\u53ef\u4ee5\u5927\u5927\u964d\u4f4e\u7a0b\u5f0f\u78bc\u7684\u91cd\u8907\u7387\uff0c\u4e5f\u53ef\u4ee5\u96a8\u8655\u547c\u53eb\u4ed6"))}d.isMDXComponent=!0}}]);