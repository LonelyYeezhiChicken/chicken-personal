"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[358],{3905:(n,t,e)=>{e.d(t,{Zo:()=>c,kt:()=>b});var l=e(7294);function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function i(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,l)}return e}function s(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?i(Object(e),!0).forEach((function(t){r(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function a(n,t){if(null==n)return{};var e,l,r=function(n,t){if(null==n)return{};var e,l,r={},i=Object.keys(n);for(l=0;l<i.length;l++)e=i[l],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(l=0;l<i.length;l++)e=i[l],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var o=l.createContext({}),u=function(n){var t=l.useContext(o),e=t;return n&&(e="function"==typeof n?n(t):s(s({},t),n)),e},c=function(n){var t=u(n.components);return l.createElement(o.Provider,{value:t},n.children)},k="mdxType",m={inlineCode:"code",wrapper:function(n){var t=n.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(n,t){var e=n.components,r=n.mdxType,i=n.originalType,o=n.parentName,c=a(n,["components","mdxType","originalType","parentName"]),k=u(e),p=r,b=k["".concat(o,".").concat(p)]||k[p]||m[p]||i;return e?l.createElement(b,s(s({ref:t},c),{},{components:e})):l.createElement(b,s({ref:t},c))}));function b(n,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof n||r){var i=e.length,s=new Array(i);s[0]=p;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=n,a[k]="string"==typeof n?n:r,s[1]=a;for(var u=2;u<i;u++)s[u]=e[u];return l.createElement.apply(null,s)}return l.createElement.apply(null,e)}p.displayName="MDXCreateElement"},651:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var l=e(7462),r=(e(7294),e(3905));const i={sidebar_position:70,description:"Day15 C# \u96de\u790e\u89c0\u5ff5- \u591a\u7b46\u8cc7\u6599\u7684\u597d\u670b\u53cb~List",key:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd","cSharp"],tags:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd"]},s="\ud83e\udd16 \u591a\u7b46\u8cc7\u6599\u7684\u597d\u670b\u53cb~List",a={unversionedId:"ironMan13/day15",id:"ironMan13/day15",title:"\ud83e\udd16 \u591a\u7b46\u8cc7\u6599\u7684\u597d\u670b\u53cb~List",description:"Day15 C# \u96de\u790e\u89c0\u5ff5- \u591a\u7b46\u8cc7\u6599\u7684\u597d\u670b\u53cb~List",source:"@site/docs/ironMan13/day15.md",sourceDirName:"ironMan13",slug:"/ironMan13/day15",permalink:"/en/docs/ironMan13/day15",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/ironMan13/day15.md",tags:[{label:"C#",permalink:"/en/docs/tags/c"},{label:"\u96de\u790e\u89c0\u5ff5",permalink:"/en/docs/tags/\u96de\u790e\u89c0\u5ff5"},{label:"\u9435\u4eba\u8cfd",permalink:"/en/docs/tags/\u9435\u4eba\u8cfd"}],version:"current",lastUpdatedAt:1688812009,formattedLastUpdatedAt:"Jul 8, 2023",sidebarPosition:70,frontMatter:{sidebar_position:70,description:"Day15 C# \u96de\u790e\u89c0\u5ff5- \u591a\u7b46\u8cc7\u6599\u7684\u597d\u670b\u53cb~List",key:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd","cSharp"],tags:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd"]},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udd16 \u4e0d\u540c\u5c64\u6b21\u7684\u9663\u5217~\u4e8c\u7dad\u9663\u5217",permalink:"/en/docs/ironMan13/day14"},next:{title:"\ud83e\udd16 \u865b\u64ec\u4ee3\u5de5\u5ee0~\u65b9\u6cd5(function)",permalink:"/en/docs/ironMan13/day16"}},o={},u=[{value:"List&lt; T &gt;",id:"list-t-",level:3},{value:"\u7bc4\u4f8b:\u6211\u5011\u5c07\u5341\u4e8c\u751f\u8096\u586b\u5165 List \u4e2d",id:"\u7bc4\u4f8b\u6211\u5011\u5c07\u5341\u4e8c\u751f\u8096\u586b\u5165-list-\u4e2d",level:3},{value:"\u65b0\u589e\u8cc7\u6599",id:"\u65b0\u589e\u8cc7\u6599",level:3},{value:"\u7bc4\u4f8b:\u6709\u4e00\u5929\uff0c\u79d1\u5b78\u5bb6\u767c\u73fe\uff0c\u539f\u4f86\u4e00\u5e74\u6709 13 \u500b\u6708\uff0c\u56e0\u6b64\u5fc5\u9808\u5e6b\u7b2c\u5341\u4e09\u5e74\u88dc\u4e0a\u718a\u7684\u751f\u8096",id:"\u7bc4\u4f8b\u6709\u4e00\u5929\u79d1\u5b78\u5bb6\u767c\u73fe\u539f\u4f86\u4e00\u5e74\u6709-13-\u500b\u6708\u56e0\u6b64\u5fc5\u9808\u5e6b\u7b2c\u5341\u4e09\u5e74\u88dc\u4e0a\u718a\u7684\u751f\u8096",level:3},{value:"\u7bc4\u4f8b:\u5f8c\u4f86\u79d1\u5b78\u5bb6\u767c\u73fe\uff0c\u4e00\u5e74\u4e0d\u53ea 13 \u500b\u6708\uff0c\u5be6\u969b\u4e0a\u6709 15 \u500b\u6708\uff0c\u6240\u4ee5\u9084\u8981\u88dc\u4e0a\u8c61\u3001\u9b5a\u9019\u5169\u7a2e\u52d5\u7269",id:"\u7bc4\u4f8b\u5f8c\u4f86\u79d1\u5b78\u5bb6\u767c\u73fe\u4e00\u5e74\u4e0d\u53ea-13-\u500b\u6708\u5be6\u969b\u4e0a\u6709-15-\u500b\u6708\u6240\u4ee5\u9084\u8981\u88dc\u4e0a\u8c61\u9b5a\u9019\u5169\u7a2e\u52d5\u7269",level:3},{value:"\u79fb\u9664\u8cc7\u6599",id:"\u79fb\u9664\u8cc7\u6599",level:3},{value:"\u7bc4\u4f8b:\u79d1\u5b78\u5bb6\u767c\u73fe\u539f\u4f86\u662f\u5100\u5668\u6545\u969c\u624d\u6703\u7b97\u6210 15 \u5e74\uff0c\u5be6\u969b\u4e0a\u53ea\u6709 14 \u5e74\uff0c\u6240\u4ee5\u8981\u628a\u9b5a\u62ff\u6389",id:"\u7bc4\u4f8b\u79d1\u5b78\u5bb6\u767c\u73fe\u539f\u4f86\u662f\u5100\u5668\u6545\u969c\u624d\u6703\u7b97\u6210-15-\u5e74\u5be6\u969b\u4e0a\u53ea\u6709-14-\u5e74\u6240\u4ee5\u8981\u628a\u9b5a\u62ff\u6389",level:3},{value:"\u7bc4\u4f8b:\u5f8c\u4f86\u79d1\u5b78\u5bb6\u53c8\u767c\u73fe\uff0c\u539f\u4f86\u7814\u7a76\u5100\u5668\u662f\u73a9\u5177\u5e97\u8cb7\u7684\uff0c\u6839\u672c\u6c92\u6709\u90a3\u9ebc\u591a\u500b\u6708\uff0c\u5be6\u969b\u4e0a\u53ea\u6709 12 \u500b\u6708\uff0c\u6240\u4ee5\u8981\u628a\u52d5\u7269\u5fa9\u539f",id:"\u7bc4\u4f8b\u5f8c\u4f86\u79d1\u5b78\u5bb6\u53c8\u767c\u73fe\u539f\u4f86\u7814\u7a76\u5100\u5668\u662f\u73a9\u5177\u5e97\u8cb7\u7684\u6839\u672c\u6c92\u6709\u90a3\u9ebc\u591a\u500b\u6708\u5be6\u969b\u4e0a\u53ea\u6709-12-\u500b\u6708\u6240\u4ee5\u8981\u628a\u52d5\u7269\u5fa9\u539f",level:3},{value:"\u9032\u968e\u7528\u6cd5:\u7d50\u5408 class",id:"\u9032\u968e\u7528\u6cd5\u7d50\u5408-class",level:3},{value:"\u7bc4\u4f8b:\u6211\u5011\u5c07 12 \u500b\u6708\u8207\u751f\u8096\u7d50\u5408\u5427",id:"\u7bc4\u4f8b\u6211\u5011\u5c07-12-\u500b\u6708\u8207\u751f\u8096\u7d50\u5408\u5427",level:3}],c={toc:u},k="wrapper";function m(n){let{components:t,...e}=n;return(0,r.kt)(k,(0,l.Z)({},c,e,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-\u591a\u7b46\u8cc7\u6599\u7684\u597d\u670b\u53cblist"},"\ud83e\udd16 \u591a\u7b46\u8cc7\u6599\u7684\u597d\u670b\u53cb~List"),(0,r.kt)("p",null,"\u6211\u5011\u66fe\u7d93\u8a8d\u8b58\u904e\u9663\u5217(array)\uff0c",(0,r.kt)("br",null),"\n\u4eca\u5929\u4f86\u4ecb\u7d39\u4ed6\u7684\u5144\u5f1f List \u5427"),(0,r.kt)("h3",{id:"list-t-"},"List< T >"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"T \u7684\u90e8\u4efd\u6211\u5011\u53ef\u4ee5\u7528\u5176\u4ed6\u578b\u5225\u4f86\u66ff\u63db\u4ed6"),(0,r.kt)("li",{parentName:"ul"},"\u5e38\u898b\u7684\u65b9\u5f0f\u662f\u5c07 string \u6216 int\uff0c\u751a\u81f3\u662f\u5c07 class \u505a\u6210\u7269\u4ef6\u6a21\u578b\u4f86\u4f7f\u7528\u4ed6"),(0,r.kt)("li",{parentName:"ul"},"\u975e\u5e38\u9069\u5408\u7528\u65bc foreach \u8ff4\u5708")),(0,r.kt)("h3",{id:"\u7bc4\u4f8b\u6211\u5011\u5c07\u5341\u4e8c\u751f\u8096\u586b\u5165-list-\u4e2d"},"\u7bc4\u4f8b:\u6211\u5011\u5c07\u5341\u4e8c\u751f\u8096\u586b\u5165 List \u4e2d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace CsharpDemo\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            //\u5ba3\u544a\u4e00\u500bList\n            List<string> myList = new List<string>() { "\u9f20", "\u725b", "\u864e", "\u5154", "\u9f8d", "\u86c7", "\u99ac", "\u7f8a", "\u7334", "\u96de", "\u72d7", "\u8c6c" };\n\n            Console.WriteLine("\u51fa\u4f86\u542712\u751f\u8096!");\n            //\u6211\u5011\u4f7f\u7528foreach\u8ff4\u5708\u4f86\u5217\u51faList\u7684\u503c\n            foreach(string item in myList)\n            {\n                Console.WriteLine(item);\n            }\n            Console.ReadKey();\n        }\n    }\n }\n')),(0,r.kt)("p",null,"\u7d50\u679c:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u51fa\u4f86\u5427 12 \u751f\u8096!",(0,r.kt)("br",null),"\n\u9f20",(0,r.kt)("br",null),"\n\u725b",(0,r.kt)("br",null),"\n\u864e",(0,r.kt)("br",null),"\n\u5154",(0,r.kt)("br",null),"\n\u9f8d",(0,r.kt)("br",null),"\n\u86c7",(0,r.kt)("br",null),"\n\u99ac",(0,r.kt)("br",null),"\n\u7f8a",(0,r.kt)("br",null),"\n\u7334",(0,r.kt)("br",null),"\n\u96de",(0,r.kt)("br",null),"\n\u72d7",(0,r.kt)("br",null),"\n\u8c6c")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"\u4ed6\u7684\u521d\u59cb\u503c\u7d66\u6cd5\u8ddf\u9663\u5217\u5341\u5206\u76f8\u4f3c\uff0c\u4f46\u5979\u4e0d\u9700\u8981\u7d66\u521d\u59cb\u9577\u5ea6")),(0,r.kt)("h3",{id:"\u65b0\u589e\u8cc7\u6599"},"\u65b0\u589e\u8cc7\u6599"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u6211\u5011\u9700\u8981\u65b0\u589e\u8cc7\u6599\u9032\u5230 List \u5462\uff0c\u53ef\u4ee5\u4f7f\u7528.Add()\u4f86\u65b0\u589e\u55ae\u7b46\u8cc7\u6599"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u9700\u8981\u65b0\u589e\u591a\u7b46\u8cc7\u6599\u5c31\u9808\u4f7f\u7528 AddRange()")),(0,r.kt)("h3",{id:"\u7bc4\u4f8b\u6709\u4e00\u5929\u79d1\u5b78\u5bb6\u767c\u73fe\u539f\u4f86\u4e00\u5e74\u6709-13-\u500b\u6708\u56e0\u6b64\u5fc5\u9808\u5e6b\u7b2c\u5341\u4e09\u5e74\u88dc\u4e0a\u718a\u7684\u751f\u8096"},"\u7bc4\u4f8b:\u6709\u4e00\u5929\uff0c\u79d1\u5b78\u5bb6\u767c\u73fe\uff0c\u539f\u4f86\u4e00\u5e74\u6709 13 \u500b\u6708\uff0c\u56e0\u6b64\u5fc5\u9808\u5e6b\u7b2c\u5341\u4e09\u5e74\u88dc\u4e0a\u718a\u7684\u751f\u8096"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace CsharpDemo\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            //\u5ba3\u544a\u4e00\u500bList\n            List<string> myList = new List<string>() { "\u9f20", "\u725b", "\u864e", "\u5154", "\u9f8d", "\u86c7", "\u99ac", "\u7f8a", "\u7334", "\u96de", "\u72d7", "\u8c6c" };\n\n            //\u4f7f\u7528Add()\u65b0\u589e\u718a\n            myList.Add("\u718a");\n\n            Console.WriteLine("\u51fa\u4f86\u542713\u751f\u8096!");\n            //\u6211\u5011\u4f7f\u7528foreach\u8ff4\u5708\u4f86\u5217\u51faList\u7684\u503c\n            foreach(string item in myList)\n            {\n                Console.WriteLine(item);\n            }\n            Console.ReadKey();\n        }\n    }\n }\n')),(0,r.kt)("p",null,"\u7d50\u679c:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u51fa\u4f86\u5427 13 \u751f\u8096!",(0,r.kt)("br",null),"\n\u9f20",(0,r.kt)("br",null),"\n\u725b",(0,r.kt)("br",null),"\n\u864e",(0,r.kt)("br",null),"\n\u5154",(0,r.kt)("br",null),"\n\u9f8d",(0,r.kt)("br",null),"\n\u86c7",(0,r.kt)("br",null),"\n\u99ac",(0,r.kt)("br",null),"\n\u7f8a",(0,r.kt)("br",null),"\n\u7334",(0,r.kt)("br",null),"\n\u96de",(0,r.kt)("br",null),"\n\u72d7",(0,r.kt)("br",null),"\n\u8c6c",(0,r.kt)("br",null),"\n\u718a")),(0,r.kt)("h3",{id:"\u7bc4\u4f8b\u5f8c\u4f86\u79d1\u5b78\u5bb6\u767c\u73fe\u4e00\u5e74\u4e0d\u53ea-13-\u500b\u6708\u5be6\u969b\u4e0a\u6709-15-\u500b\u6708\u6240\u4ee5\u9084\u8981\u88dc\u4e0a\u8c61\u9b5a\u9019\u5169\u7a2e\u52d5\u7269"},"\u7bc4\u4f8b:\u5f8c\u4f86\u79d1\u5b78\u5bb6\u767c\u73fe\uff0c\u4e00\u5e74\u4e0d\u53ea 13 \u500b\u6708\uff0c\u5be6\u969b\u4e0a\u6709 15 \u500b\u6708\uff0c\u6240\u4ee5\u9084\u8981\u88dc\u4e0a\u8c61\u3001\u9b5a\u9019\u5169\u7a2e\u52d5\u7269"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace CsharpDemo\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            //\u5ba3\u544a\u4e00\u500bList\n            List<string> myList = new List<string>() { "\u9f20", "\u725b", "\u864e", "\u5154", "\u9f8d", "\u86c7", "\u99ac", "\u7f8a", "\u7334", "\u96de", "\u72d7", "\u8c6c" };\n            //\u5ba3\u544a\u4e00\u500b\u8981\u65b0\u589e\u7684List\n            List<string> newList = new List<string>() { "\u718a", "\u8c61", "\u9b5a" };\n\n            //AddRange()\u5c07newList\u65b0\u589e\u5230myList\u4e2d\n            myList.AddRange(newList);\n\n            //\u4f7f\u7528Count()\u4f86\u8868\u793aList\u7b46\u6578\n            Console.WriteLine("\u51fa\u4f86\u5427" + myList.Count() + "\u751f\u8096!");\n            //\u6211\u5011\u4f7f\u7528foreach\u8ff4\u5708\u4f86\u5217\u51faList\u7684\u503c\n            foreach (string item in myList)\n            {\n                Console.WriteLine(item);\n            }\n            Console.ReadKey();\n        }\n    }\n  }\n')),(0,r.kt)("p",null,"\u7d50\u679c:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u51fa\u4f86\u5427 15 \u751f\u8096!",(0,r.kt)("br",null),"\n\u9f20",(0,r.kt)("br",null),"\n\u725b",(0,r.kt)("br",null),"\n\u864e",(0,r.kt)("br",null),"\n\u5154",(0,r.kt)("br",null),"\n\u9f8d",(0,r.kt)("br",null),"\n\u86c7",(0,r.kt)("br",null),"\n\u99ac",(0,r.kt)("br",null),"\n\u7f8a",(0,r.kt)("br",null),"\n\u7334",(0,r.kt)("br",null),"\n\u96de",(0,r.kt)("br",null),"\n\u72d7",(0,r.kt)("br",null),"\n\u8c6c",(0,r.kt)("br",null),"\n\u718a",(0,r.kt)("br",null),"\n\u8c61",(0,r.kt)("br",null),"\n\u9b5a")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"\u6211\u5011\u9019\u908a\u591a\u4f7f\u7528\u4e86myList.Count()\u4f86\u5217\u51fa\u76ee\u524dList\u7684\u7e3d\u7b46\u6578")),(0,r.kt)("h3",{id:"\u79fb\u9664\u8cc7\u6599"},"\u79fb\u9664\u8cc7\u6599"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u55ae\u7b46\u79fb\u9664\u7684\u65b9\u6cd5\u6211\u5011\u4f7f\u7528 Remove()"),(0,r.kt)("li",{parentName:"ul"},"\u591a\u7b46\u79fb\u9664\u5247\u662f\u4f7f\u7528 RemoveRange(\u7b2c\u5e7e\u7b46,\u5171\u522a\u5e7e\u7b46)")),(0,r.kt)("h3",{id:"\u7bc4\u4f8b\u79d1\u5b78\u5bb6\u767c\u73fe\u539f\u4f86\u662f\u5100\u5668\u6545\u969c\u624d\u6703\u7b97\u6210-15-\u5e74\u5be6\u969b\u4e0a\u53ea\u6709-14-\u5e74\u6240\u4ee5\u8981\u628a\u9b5a\u62ff\u6389"},"\u7bc4\u4f8b:\u79d1\u5b78\u5bb6\u767c\u73fe\u539f\u4f86\u662f\u5100\u5668\u6545\u969c\u624d\u6703\u7b97\u6210 15 \u5e74\uff0c\u5be6\u969b\u4e0a\u53ea\u6709 14 \u5e74\uff0c\u6240\u4ee5\u8981\u628a\u9b5a\u62ff\u6389"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace CsharpDemo\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            //\u5ba3\u544a\u4e00\u500bList\n            List<string> myList = new List<string>() { "\u9f20", "\u725b", "\u864e", "\u5154", "\u9f8d", "\u86c7", "\u99ac", "\u7f8a", "\u7334", "\u96de", "\u72d7", "\u8c6c", "\u718a", "\u8c61", "\u9b5a" };\n\n            //\u4f7f\u7528Remove()\u79fb\u9664\u9b5a\n            myList.Remove("\u9b5a");\n\n            //\u4f7f\u7528Count()\u4f86\u8868\u793aList\u7b46\u6578\n            Console.WriteLine("\u51fa\u4f86\u5427" + myList.Count() + "\u751f\u8096!");\n            //\u6211\u5011\u4f7f\u7528foreach\u8ff4\u5708\u4f86\u5217\u51faList\u7684\u503c\n            foreach (string item in myList)\n            {\n                Console.WriteLine(item);\n            }\n            Console.ReadKey();\n        }\n    }\n }\n')),(0,r.kt)("p",null,"\u7d50\u679c:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u51fa\u4f86\u5427 14 \u751f\u8096!",(0,r.kt)("br",null),"\n\u9f20",(0,r.kt)("br",null),"\n\u725b",(0,r.kt)("br",null),"\n\u864e",(0,r.kt)("br",null),"\n\u5154",(0,r.kt)("br",null),"\n\u9f8d",(0,r.kt)("br",null),"\n\u86c7",(0,r.kt)("br",null),"\n\u99ac",(0,r.kt)("br",null),"\n\u7f8a",(0,r.kt)("br",null),"\n\u7334",(0,r.kt)("br",null),"\n\u96de",(0,r.kt)("br",null),"\n\u72d7",(0,r.kt)("br",null),"\n\u8c6c",(0,r.kt)("br",null),"\n\u718a",(0,r.kt)("br",null),"\n\u8c61")),(0,r.kt)("h3",{id:"\u7bc4\u4f8b\u5f8c\u4f86\u79d1\u5b78\u5bb6\u53c8\u767c\u73fe\u539f\u4f86\u7814\u7a76\u5100\u5668\u662f\u73a9\u5177\u5e97\u8cb7\u7684\u6839\u672c\u6c92\u6709\u90a3\u9ebc\u591a\u500b\u6708\u5be6\u969b\u4e0a\u53ea\u6709-12-\u500b\u6708\u6240\u4ee5\u8981\u628a\u52d5\u7269\u5fa9\u539f"},"\u7bc4\u4f8b:\u5f8c\u4f86\u79d1\u5b78\u5bb6\u53c8\u767c\u73fe\uff0c\u539f\u4f86\u7814\u7a76\u5100\u5668\u662f\u73a9\u5177\u5e97\u8cb7\u7684\uff0c\u6839\u672c\u6c92\u6709\u90a3\u9ebc\u591a\u500b\u6708\uff0c\u5be6\u969b\u4e0a\u53ea\u6709 12 \u500b\u6708\uff0c\u6240\u4ee5\u8981\u628a\u52d5\u7269\u5fa9\u539f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace CsharpDemo\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            //\u5ba3\u544a\u4e00\u500bList\n            List<string> myList = new List<string>() { "\u9f20", "\u725b", "\u864e", "\u5154", "\u9f8d", "\u86c7", "\u99ac", "\u7f8a", "\u7334", "\u96de", "\u72d7", "\u8c6c", "\u718a", "\u8c61", "\u9b5a" };\n\n            //\u7531\u65bc\u7b2c\u4e00\u7b46\u662f\u5f9e0\u7b97\u8d77\uff0c\u6240\u4ee5\u8981\u5f9e12\u958b\u59cb\u522a3\u7b46\n            myList.RemoveRange(12,3);\n\n            //\u4f7f\u7528Count()\u4f86\u8868\u793aList\u7b46\u6578\n            Console.WriteLine("\u51fa\u4f86\u5427" + myList.Count() + "\u751f\u8096!");\n            //\u6211\u5011\u4f7f\u7528foreach\u8ff4\u5708\u4f86\u5217\u51faList\u7684\u503c\n            foreach (string item in myList)\n            {\n                Console.WriteLine(item);\n            }\n            Console.ReadKey();\n        }\n    }\n }\n')),(0,r.kt)("p",null,"\u7d50\u679c:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u51fa\u4f86\u5427 12 \u751f\u8096!",(0,r.kt)("br",null),"\n\u9f20",(0,r.kt)("br",null),"\n\u725b",(0,r.kt)("br",null),"\n\u864e",(0,r.kt)("br",null),"\n\u5154",(0,r.kt)("br",null),"\n\u9f8d",(0,r.kt)("br",null),"\n\u86c7",(0,r.kt)("br",null),"\n\u99ac",(0,r.kt)("br",null),"\n\u7f8a",(0,r.kt)("br",null),"\n\u7334",(0,r.kt)("br",null),"\n\u96de",(0,r.kt)("br",null),"\n\u72d7",(0,r.kt)("br",null),"\n\u8c6c")),(0,r.kt)("h3",{id:"\u9032\u968e\u7528\u6cd5\u7d50\u5408-class"},"\u9032\u968e\u7528\u6cd5:\u7d50\u5408 class"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6211\u5011\u53ef\u4ee5\u5229\u7528 class \u7684\u5c6c\u6027\u4f86\u5efa\u7acb\u8cc7\u6599\u6a21\u578b"),(0,r.kt)("li",{parentName:"ul"},"\u5c07\u8cc7\u6599\u6a21\u578b\u505a\u6210 List")),(0,r.kt)("h3",{id:"\u7bc4\u4f8b\u6211\u5011\u5c07-12-\u500b\u6708\u8207\u751f\u8096\u7d50\u5408\u5427"},"\u7bc4\u4f8b:\u6211\u5011\u5c07 12 \u500b\u6708\u8207\u751f\u8096\u7d50\u5408\u5427"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace CsharpDemo\n{\n    //\u5efa\u7acb\u4e00\u500bclass\n    class DataModel\n    {\n        //\u6708\u4efd\n        public int month;\n        //\u52d5\u7269\n        public string animal;\n\n    }\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            //\u5ba3\u544a\u4e00\u500bList\n            List<DataModel> dataList = new List<DataModel>();\n            //\u5ba3\u544a\u4e00\u500bList\n            List<string> myList = new List<string>() { "\u9f20", "\u725b", "\u864e", "\u5154", "\u9f8d", "\u86c7", "\u99ac", "\u7f8a", "\u7334", "\u96de", "\u72d7", "\u8c6c" };\n\n            //\u5ba3\u544a\u6574\u6578\u4f86\u7b97\u6708\u4efd\n            int Count = 1;\n            //\u6211\u5011\u4f7f\u7528foreach\u8ff4\u5708\u4f86\u586b\u5bebdataList\u7684\u503c\n            foreach (string item in myList)\n            {\n                //\u65b0\u589e\u4e00\u7b46\u65b0\u7684\u8cc7\u6599\u6240\u4ee5\u6211\u5011\u8981\u4f7f\u7528new\n                dataList.Add(new DataModel\n                {\n                    month = Count,\n                    animal = item\n                });\n\n                //\u9032\u5165\u4e0b\u500b\u6708\n                Count++;\n            }\n\n            //\u4f7f\u7528Count()\u4f86\u8868\u793aList\u7b46\u6578\n            Console.WriteLine("\u51fa\u4f86\u5427" + dataList.Count() + "\u751f\u8096!");\n            //\u6211\u5011\u4f7f\u7528foreach\u8ff4\u5708\u4f86\u5217\u51faList\u7684\u503c\n            foreach (DataModel item in dataList)\n            {\n                //\u9019\u908a\u9700\u8981\u7528item.\u7269\u4ef6\u540d\u7a31\uff0c\u624d\u6709\u8fa6\u6cd5\u53d6\u5230\u503c\n                Console.WriteLine(item.month + "\u6708 , \u5c6c :" + item.animal);\n            }\n            Console.ReadKey();\n        }\n    }\n  }\n')),(0,r.kt)("p",null,"\u7d50\u679c:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u51fa\u4f86\u5427 12 \u751f\u8096!",(0,r.kt)("br",null),"\n1 \u6708 , \u5c6c :\u9f20",(0,r.kt)("br",null),"\n2 \u6708 , \u5c6c :\u725b",(0,r.kt)("br",null),"\n3 \u6708 , \u5c6c :\u864e",(0,r.kt)("br",null),"\n4 \u6708 , \u5c6c :\u5154",(0,r.kt)("br",null),"\n5 \u6708 , \u5c6c :\u9f8d",(0,r.kt)("br",null),"\n6 \u6708 , \u5c6c :\u86c7",(0,r.kt)("br",null),"\n7 \u6708 , \u5c6c :\u99ac",(0,r.kt)("br",null),"\n8 \u6708 , \u5c6c :\u7f8a",(0,r.kt)("br",null),"\n9 \u6708 , \u5c6c :\u7334",(0,r.kt)("br",null),"\n10 \u6708 , \u5c6c :\u96de",(0,r.kt)("br",null),"\n11 \u6708 , \u5c6c :\u72d7",(0,r.kt)("br",null),"\n12 \u6708 , \u5c6c :\u8c6c")))}m.isMDXComponent=!0}}]);