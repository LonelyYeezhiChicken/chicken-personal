"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[9400],{49613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return t?r.createElement(k,l(l({ref:n},c),{},{components:t})):r.createElement(k,l({ref:n},c))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1155:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=t(88028),a=(t(59496),t(49613));const i={sidebar_position:55,description:"Day12 C# \u96de\u790e\u89c0\u5ff5- \u7576\u6211\u5011\u540c\u5728\u4e00\u8d77~\u9663\u5217(Array)",key:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd","cSharp"],tags:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd"]},l="\ud83e\udd16 \u7576\u6211\u5011\u540c\u5728\u4e00\u8d77~\u9663\u5217(Array)",o={unversionedId:"ironMan13/day12",id:"ironMan13/day12",title:"\ud83e\udd16 \u7576\u6211\u5011\u540c\u5728\u4e00\u8d77~\u9663\u5217(Array)",description:"Day12 C# \u96de\u790e\u89c0\u5ff5- \u7576\u6211\u5011\u540c\u5728\u4e00\u8d77~\u9663\u5217(Array)",source:"@site/docs/ironMan13/day12.md",sourceDirName:"ironMan13",slug:"/ironMan13/day12",permalink:"/docs/ironMan13/day12",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/ironMan13/day12.md",tags:[{label:"C#",permalink:"/docs/tags/c"},{label:"\u96de\u790e\u89c0\u5ff5",permalink:"/docs/tags/\u96de\u790e\u89c0\u5ff5"},{label:"\u9435\u4eba\u8cfd",permalink:"/docs/tags/\u9435\u4eba\u8cfd"}],version:"current",lastUpdatedAt:1704630401,formattedLastUpdatedAt:"2024\u5e741\u67087\u65e5",sidebarPosition:55,frontMatter:{sidebar_position:55,description:"Day12 C# \u96de\u790e\u89c0\u5ff5- \u7576\u6211\u5011\u540c\u5728\u4e00\u8d77~\u9663\u5217(Array)",key:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd","cSharp"],tags:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd"]},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udd16 \u628a\u8907\u96dc\u7684\u4e8b\u60c5\u8207\u95dc\u4fc2\u7c21\u55ae\u5316~\u5217\u8209\u8207\u7d50\u69cb",permalink:"/docs/ironMan13/day11"},next:{title:"\ud83e\udd16 \u4f86\u500b\u8f2a\u8ff4\u5427~foreach\u8ff4\u5708",permalink:"/docs/ironMan13/day13"}},s={},p=[{value:"\u9663\u5217(array)",id:"\u9663\u5217array",level:3},{value:"\u7bc4\u4f8b:\u6211\u6709\u570b\uff0c\u82f1\uff0c\u6578\uff0c\u7269\u7406\u56db\u79d1\uff0c\u5206\u6578\u5206\u5225 70\u300189\u300172\u300193\uff0c\u8acb\u5e6b\u6211\u7b97\u5e73\u5747\u5206\u6578",id:"\u7bc4\u4f8b\u6211\u6709\u570b\u82f1\u6578\u7269\u7406\u56db\u79d1\u5206\u6578\u5206\u5225-70897293\u8acb\u5e6b\u6211\u7b97\u5e73\u5747\u5206\u6578",level:3},{value:"\u9663\u5217\u9032\u968e\u7528\u6cd5",id:"\u9663\u5217\u9032\u968e\u7528\u6cd5",level:3},{value:"\u7bc4\u4f8b:\u5c07\u524d\u9762\u7684\u7bc4\u4f8b\u4f7f\u7528 for \u8ff4\u5708\u6539\u5beb",id:"\u7bc4\u4f8b\u5c07\u524d\u9762\u7684\u7bc4\u4f8b\u4f7f\u7528-for-\u8ff4\u5708\u6539\u5beb",level:3},{value:"\u4f7f\u7528\u9663\u5217\u4f86\u8655\u7406\u540c\u6a23\u985e\u578b\u4f46\u5f88\u591a\u7b46\u7684\u8cc7\u6599\u662f\u975e\u5e38\u65b9\u4fbf\u7684\uff0c\u5c31\u8b93\u6211\u5011\u540c\u5728\u4e00\u8d77\u5427!",id:"\u4f7f\u7528\u9663\u5217\u4f86\u8655\u7406\u540c\u6a23\u985e\u578b\u4f46\u5f88\u591a\u7b46\u7684\u8cc7\u6599\u662f\u975e\u5e38\u65b9\u4fbf\u7684\u5c31\u8b93\u6211\u5011\u540c\u5728\u4e00\u8d77\u5427",level:3}],c={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-\u7576\u6211\u5011\u540c\u5728\u4e00\u8d77\u9663\u5217array"},"\ud83e\udd16 \u7576\u6211\u5011\u540c\u5728\u4e00\u8d77~\u9663\u5217(Array)"),(0,a.kt)("p",null,"\u6210\u7e3e\u55ae\u4e0a\u6709\u570b\uff0c\u82f1\uff0c\u6578\uff0c\u7269\u7406\u56db\u79d1",(0,a.kt)("br",null),"\n\u5206\u6578\u5206\u5225 70\u300189\u300172\u300193",(0,a.kt)("br",null),"\n\u9019\u6642\u5019\u6211\u5011\u5c31\u53ef\u4ee5\u7528\u9663\u5217\u5c07\u4ed6\u5011\u7d81\u518d\u4e00\u8d77"),(0,a.kt)("h3",{id:"\u9663\u5217array"},"\u9663\u5217(array)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"\u6ce8\u610f:C#\u7d22\u5f15\u662f\u5f9e0\u958b\u59cb\u8a08\u7b97"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u9663\u5217\u7684\u8a9e\u6cd5\u5982\u4e0b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6574\u6578\u9663\u5217:\n",(0,a.kt)("img",{parentName:"p",src:"https://ithelp.ithome.com.tw/upload/images/20210911/200970019VZBEZhIvR.png",alt:"mdImg"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5b57\u4e32\u9663\u5217:\n",(0,a.kt)("img",{parentName:"p",src:"https://ithelp.ithome.com.tw/upload/images/20210912/20097001MJDkMN4u2w.png",alt:"mdImg"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7576\u6b64\u53e5\u88ab\u57f7\u884c\u6642\uff0c\u7cfb\u7d71\u5c31\u6703\u5728\u5167\u5b58\u4e2d\u5206\u914d\u4e00\u6bb5\u9023\u7e8c\u7684\u7a7a\u9593\u4f86\u5132\u5b58\u9019\u56db\u500b int \u578b\u6578\u64da")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u9663\u5217\u5143\u7d20\u7684\u521d\u59cb\u503c\u5217\u5728\u5927\u62ec\u865f\u88e1\u9762\uff0c\u4e26\u4e14\u7528\u9017\u865f\u9694\u958b"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://ithelp.ithome.com.tw/upload/images/20210911/20097001y7N7yOQaCc.png",alt:"mdImg"})),(0,a.kt)("h3",{id:"\u7bc4\u4f8b\u6211\u6709\u570b\u82f1\u6578\u7269\u7406\u56db\u79d1\u5206\u6578\u5206\u5225-70897293\u8acb\u5e6b\u6211\u7b97\u5e73\u5747\u5206\u6578"},"\u7bc4\u4f8b:\u6211\u6709\u570b\uff0c\u82f1\uff0c\u6578\uff0c\u7269\u7406\u56db\u79d1\uff0c\u5206\u6578\u5206\u5225 70\u300189\u300172\u300193\uff0c\u8acb\u5e6b\u6211\u7b97\u5e73\u5747\u5206\u6578"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace CsharpDemo\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            //\u5ba3\u544a\u6574\u6578\u9663\u5217\n            int[] scores = { 70, 89, 72, 93 };\n\n            //\u8a08\u7b97\u7e3d\u5408\n            int sum = scores[0] + scores[1] + scores[2] + scores[3];\n\n            Console.WriteLine("\u7e3d\u5408 : " + sum);\n\n            //\u8a08\u7b97\u5e73\u5747\u503c\n            Console.WriteLine("\u5e73\u5747\u503c : " + (sum / 4));\n\n            Console.ReadKey();\n        }\n    }\n }\n')),(0,a.kt)("p",null,"\u7d50\u679c:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u7e3d\u5408 : 324",(0,a.kt)("br",null),"\n\u5e73\u5747\u503c : 81")),(0,a.kt)("h3",{id:"\u9663\u5217\u9032\u968e\u7528\u6cd5"},"\u9663\u5217\u9032\u968e\u7528\u6cd5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u53d6\u5f97\u9663\u5217\u9577\u5ea6"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"array.Length")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u9663\u5217\u975e\u5e38\u9069\u5408\u642d\u914d for \u8ff4\u5708\u670d\u7528"))),(0,a.kt)("h3",{id:"\u7bc4\u4f8b\u5c07\u524d\u9762\u7684\u7bc4\u4f8b\u4f7f\u7528-for-\u8ff4\u5708\u6539\u5beb"},"\u7bc4\u4f8b:\u5c07\u524d\u9762\u7684\u7bc4\u4f8b\u4f7f\u7528 for \u8ff4\u5708\u6539\u5beb"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace CsharpDemo\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            //\u5ba3\u544a\u6574\u6578\u9663\u5217\n            int[] scores = { 70, 89, 72, 93 };\n\n            //\u5ba3\u544a\u7e3d\u548c\n            int sum = 0;\n\n            //\u4f7f\u7528for\u8ff4\u5708\uff0c\u689d\u4ef6\u70ba\u9663\u5217\u7684\u9577\u5ea6\n            for (int i = 0; i < scores.Length; i++)\n            {\n                Console.WriteLine(scores[i]);\n                sum += scores[i];\n            }\n\n            //\u5c07\u7e3d\u548c\u7684\u5206\u6578\u9664\u4ee5\u9663\u5217\u9577\u5ea6(\u7e3d\u5171\u5e7e\u9580\u79d1)\n            float average = sum / (scores.Length);\n            Console.WriteLine("\u7e3d\u5206" + sum);\n            Console.WriteLine("\u5e73\u5747\u503c" + average);\n\n            Console.ReadKey();\n        }\n    }\n  }\n')),(0,a.kt)("p",null,"\u7d50\u679c:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"70",(0,a.kt)("br",null),"\n89",(0,a.kt)("br",null),"\n72",(0,a.kt)("br",null),"\n93",(0,a.kt)("br",null),"\n\u7e3d\u5206 324",(0,a.kt)("br",null),"\n\u5e73\u5747\u503c 81")),(0,a.kt)("h3",{id:"\u4f7f\u7528\u9663\u5217\u4f86\u8655\u7406\u540c\u6a23\u985e\u578b\u4f46\u5f88\u591a\u7b46\u7684\u8cc7\u6599\u662f\u975e\u5e38\u65b9\u4fbf\u7684\u5c31\u8b93\u6211\u5011\u540c\u5728\u4e00\u8d77\u5427"},"\u4f7f\u7528\u9663\u5217\u4f86\u8655\u7406\u540c\u6a23\u985e\u578b\u4f46\u5f88\u591a\u7b46\u7684\u8cc7\u6599\u662f\u975e\u5e38\u65b9\u4fbf\u7684\uff0c\u5c31\u8b93\u6211\u5011\u540c\u5728\u4e00\u8d77\u5427!"))}m.isMDXComponent=!0}}]);