"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[1581],{49613:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>m});var t=r(59496);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||o;return r?t.createElement(m,i(i({ref:n},p),{},{components:r})):t.createElement(m,i({ref:n},p))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},50095:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var t=r(88028),a=(r(59496),r(49613));const o={sidebar_position:60,description:"Day13 C# \u96de\u790e\u89c0\u5ff5- \u4f86\u500b\u8f2a\u8ff4\u5427~foreach\u8ff4\u5708",key:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd","cSharp"],tags:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd"]},i="\ud83e\udd16 \u4f86\u500b\u8f2a\u8ff4\u5427~foreach\u8ff4\u5708",l={unversionedId:"ironMan13/day13",id:"ironMan13/day13",title:"\ud83e\udd16 \u4f86\u500b\u8f2a\u8ff4\u5427~foreach\u8ff4\u5708",description:"Day13 C# \u96de\u790e\u89c0\u5ff5- \u4f86\u500b\u8f2a\u8ff4\u5427~foreach\u8ff4\u5708",source:"@site/docs/ironMan13/day13.md",sourceDirName:"ironMan13",slug:"/ironMan13/day13",permalink:"/en/docs/ironMan13/day13",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/ironMan13/day13.md",tags:[{label:"C#",permalink:"/en/docs/tags/c"},{label:"\u96de\u790e\u89c0\u5ff5",permalink:"/en/docs/tags/\u96de\u790e\u89c0\u5ff5"},{label:"\u9435\u4eba\u8cfd",permalink:"/en/docs/tags/\u9435\u4eba\u8cfd"}],version:"current",lastUpdatedAt:1709356183,formattedLastUpdatedAt:"Mar 2, 2024",sidebarPosition:60,frontMatter:{sidebar_position:60,description:"Day13 C# \u96de\u790e\u89c0\u5ff5- \u4f86\u500b\u8f2a\u8ff4\u5427~foreach\u8ff4\u5708",key:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd","cSharp"],tags:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd"]},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udd16 \u7576\u6211\u5011\u540c\u5728\u4e00\u8d77~\u9663\u5217(Array)",permalink:"/en/docs/ironMan13/day12"},next:{title:"\ud83e\udd16 \u4e0d\u540c\u5c64\u6b21\u7684\u9663\u5217~\u4e8c\u7dad\u9663\u5217",permalink:"/en/docs/ironMan13/day14"}},c={},s=[{value:"foreach \u8ff4\u5708",id:"foreach-\u8ff4\u5708",level:3},{value:"\u7bc4\u4f8b:\u6211\u5011\u4f86\u7528 foreach \u5217\u51fa\u96de\u7684\u6210\u9577\u904e\u7a0b",id:"\u7bc4\u4f8b\u6211\u5011\u4f86\u7528-foreach-\u5217\u51fa\u96de\u7684\u6210\u9577\u904e\u7a0b",level:4}],p={toc:s},u="wrapper";function f(e){let{components:n,...r}=e;return(0,a.kt)(u,(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-\u4f86\u500b\u8f2a\u8ff4\u5427foreach\u8ff4\u5708"},"\ud83e\udd16 \u4f86\u500b\u8f2a\u8ff4\u5427~foreach\u8ff4\u5708"),(0,a.kt)("p",null,"\u6211\u5011\u66fe\u7d93\u8a8d\u8b58\u904e for\uff0c",(0,a.kt)("br",null),"\n\u5f8c\u4f86\u4e5f\u9047\u5230 While\uff0c",(0,a.kt)("br",null),"\n\u5982\u4eca\u53c8\u51fa\u73fe\u4e00\u500b foreach"),(0,a.kt)("h3",{id:"foreach-\u8ff4\u5708"},"foreach \u8ff4\u5708"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"foreach \u662f\u4e00\u500b\u70ba\u96c6\u5408\u800c\u751f\u7684\u8ff4\u5708"),(0,a.kt)("li",{parentName:"ul"},"\u4ed6\u7684\u7528\u6cd5\u5f88\u985e\u4f3c for \u8ff4\u5708\uff0c\u4f46\u76f8\u8f03\u4e0b\u4f86\u8a9e\u6cd5\u8f03\u70ba\u7c21\u55ae"),(0,a.kt)("li",{parentName:"ul"},"\u4ee5\u4e0b\u662f foreach \u7684\u7d50\u69cb")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://ithelp.ithome.com.tw/upload/images/20210912/20097001BMhTFE799o.png",alt:"mdImg"})),(0,a.kt)("h4",{id:"\u7bc4\u4f8b\u6211\u5011\u4f86\u7528-foreach-\u5217\u51fa\u96de\u7684\u6210\u9577\u904e\u7a0b"},"\u7bc4\u4f8b:\u6211\u5011\u4f86\u7528 foreach \u5217\u51fa\u96de\u7684\u6210\u9577\u904e\u7a0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace CsharpDemo\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            //\u5ba3\u544a\u4e00\u500b\u5b57\u4e32\u9663\u5217\n            string[] storyArray = { "1.\u6211\u662f\u4e00\u9846\u86cb", "2.\u7834\u6bbc\u800c\u51fa", "3.\u5403\u4e86\u5e7e\u9846\u98fc\u6599\uff0c\u597d\u98fd", "4.\u6f38\u6f38\u9577\u5927\u6210\u8089\u96de", "5.\u8fb2\u5834\u4e3b\u4eba\u4f86\u5728\u5927\u5bb6\u53bb\u5e02\u5834\u73a9", "6.\u56e0\u70ba\u592a\u908a\u7de3\u6240\u4ee5\u6c92\u4e0a\u5230\u8eca", "7.\u5927\u5bb6\u4e00\u53bb\u5c31\u6c92\u56de\u4f86", "8.\u6210\u70ba\u5b64\u7368\u4e00\u96bb\u96de" };\n\n            Console.WriteLine("\u9019\u662f\u5f88\u4e45\u5f88\u4e45\u4ee5\u524d\uff0c\u6709\u4e00\u96bb\u96de\u7684\u6545\u4e8b");\n            //\u4f7f\u7528foreach\u8655\u7406\u9663\u5217\n            foreach(string story in storyArray)\n            {\n                Console.WriteLine(story);\n            }\n\n\n            Console.ReadKey();\n        }\n    }\n}\n')),(0,a.kt)("p",null,"\u7d50\u679c"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u9019\u662f\u5f88\u4e45\u5f88\u4e45\u4ee5\u524d\uff0c\u6709\u4e00\u96bb\u96de\u7684\u6545\u4e8b",(0,a.kt)("br",null),"\n1.\u6211\u662f\u4e00\u9846\u86cb",(0,a.kt)("br",null),"\n2.\u7834\u6bbc\u800c\u51fa",(0,a.kt)("br",null),"\n3.\u5403\u4e86\u5e7e\u9846\u98fc\u6599\uff0c\u597d\u98fd",(0,a.kt)("br",null),"\n4.\u6f38\u6f38\u9577\u5927\u6210\u8089\u96de",(0,a.kt)("br",null),"\n5.\u8fb2\u5834\u4e3b\u4eba\u4f86\u5728\u5927\u5bb6\u53bb\u5e02\u5834\u73a9",(0,a.kt)("br",null),"\n6.\u56e0\u70ba\u592a\u908a\u7de3\u6240\u4ee5\u6c92\u4e0a\u5230\u8eca",(0,a.kt)("br",null),"\n7.\u5927\u5bb6\u4e00\u53bb\u5c31\u6c92\u56de\u4f86",(0,a.kt)("br",null),"\n8.\u6210\u70ba\u5b64\u7368\u4e00\u96bb\u96de")))}f.isMDXComponent=!0}}]);