"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[5295],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(t),k=a,m=p["".concat(u,".").concat(k)]||p[k]||d[k]||l;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=k;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},9725:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const l={sidebar_position:85,description:"Day18 C# \u96de\u790e\u89c0\u5ff5- \u56de\u982d\u5427!\u5b69\u5b50~ref \u8207 out \u53c3\u6578\u4fee\u98fe\u8a5e",key:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd","cSharp"],tags:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd"]},o="\u56de\u982d\u5427!\u5b69\u5b50~ref \u8207 out \u53c3\u6578\u4fee\u98fe\u8a5e",i={unversionedId:"ironMan13/day18",id:"ironMan13/day18",title:"\u56de\u982d\u5427!\u5b69\u5b50~ref \u8207 out \u53c3\u6578\u4fee\u98fe\u8a5e",description:"Day18 C# \u96de\u790e\u89c0\u5ff5- \u56de\u982d\u5427!\u5b69\u5b50~ref \u8207 out \u53c3\u6578\u4fee\u98fe\u8a5e",source:"@site/docs/ironMan13/day18.md",sourceDirName:"ironMan13",slug:"/ironMan13/day18",permalink:"/en/docs/ironMan13/day18",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/ironMan13/day18.md",tags:[{label:"C#",permalink:"/en/docs/tags/c"},{label:"\u96de\u790e\u89c0\u5ff5",permalink:"/en/docs/tags/\u96de\u790e\u89c0\u5ff5"},{label:"\u9435\u4eba\u8cfd",permalink:"/en/docs/tags/\u9435\u4eba\u8cfd"}],version:"current",sidebarPosition:85,frontMatter:{sidebar_position:85,description:"Day18 C# \u96de\u790e\u89c0\u5ff5- \u56de\u982d\u5427!\u5b69\u5b50~ref \u8207 out \u53c3\u6578\u4fee\u98fe\u8a5e",key:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd","cSharp"],tags:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd"]},sidebar:"tutorialSidebar",previous:{title:"\u50cf\u500b\u90f5\u5dee\u4e00\u6a23~\u503c\u8207\u5740\u7684\u50b3\u905e",permalink:"/en/docs/ironMan13/day17"},next:{title:"\u8b93\u6642\u9593\u5012\u8f49\u5427~\u905e\u8ff4",permalink:"/en/docs/ironMan13/day19"}},u={},s=[{value:"ref \u95dc\u9375\u5b57",id:"ref-\u95dc\u9375\u5b57",level:3},{value:"\u7bc4\u4f8b:\u6211\u5011\u4f86\u8b93\u4e00\u96bb\u96de\u9032\u5316\u5427",id:"\u7bc4\u4f8b\u6211\u5011\u4f86\u8b93\u4e00\u96bb\u96de\u9032\u5316\u5427",level:3},{value:"out \u53c3\u6578\u4fee\u98fe\u8a5e",id:"out-\u53c3\u6578\u4fee\u98fe\u8a5e",level:3},{value:"\u7bc4\u4f8b:\u6211\u5011\u77e5\u9053\u4e00\u500b\u5713\u7684\u534a\u5f91\uff0c\u6c42\u5b83\u7684\u9762\u7a4d\u8207\u5713\u5468\u9577\u5427",id:"\u7bc4\u4f8b\u6211\u5011\u77e5\u9053\u4e00\u500b\u5713\u7684\u534a\u5f91\u6c42\u5b83\u7684\u9762\u7a4d\u8207\u5713\u5468\u9577\u5427",level:3},{value:"ref \u8207 Out \u7684\u5dee\u7570",id:"ref-\u8207-out-\u7684\u5dee\u7570",level:3},{value:"\u4eca\u5929\u7684\u6587\u7ae0\u5c31\u5230\u9019\u908a\uff0c\u5927\u5bb6\u8a18\u5f97\u50cf\u9bad\u9b5a\u4e00\u6a23\uff0c\u660e\u5929\u8a18\u5f97\u56de\u4f86\u770b\u6211\u7684\u6587\u7ae0\u54e6!",id:"\u4eca\u5929\u7684\u6587\u7ae0\u5c31\u5230\u9019\u908a\u5927\u5bb6\u8a18\u5f97\u50cf\u9bad\u9b5a\u4e00\u6a23\u660e\u5929\u8a18\u5f97\u56de\u4f86\u770b\u6211\u7684\u6587\u7ae0\u54e6",level:3}],c={toc:s},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u56de\u982d\u5427\u5b69\u5b50ref-\u8207-out-\u53c3\u6578\u4fee\u98fe\u8a5e"},"\u56de\u982d\u5427!\u5b69\u5b50~ref \u8207 out \u53c3\u6578\u4fee\u98fe\u8a5e"),(0,a.kt)("p",null,"\u9bad\u9b5a\u51fa\u751f\u5f8c\u6703\u5f80\u4e0b\u6e38\u751f\u6d3b\uff0c",(0,a.kt)("br",null),"\n\u5230\u4e86\u7522\u5375\u5b63\u7bc0\uff0c\u6703\u9006\u6e38\u800c\u4e0a\uff0c",(0,a.kt)("br",null),"\n\u56de\u5230\u6700\u521d\u7684\u8d77\u9ede\uff0c\u9032\u884c\u7522\u5375\u7522\u5375\uff0c",(0,a.kt)("br",null),"\nC#\u4e5f\u6709\u50cf\u9bad\u9b5a\u4e00\u6a23\u7684\u884c\u70ba\uff0c",(0,a.kt)("br",null),"\n\u4e00\u500b\u53c3\u6578\u76e1\u65b9\u6cd5\u9032\u884c\u52a0\u5de5\uff0c",(0,a.kt)("br",null),"\n\u52a0\u5de5\u5b8c\u6210\u5f8c\u5c31\u6703\u56de\u5bb6\u4e86"),(0,a.kt)("h3",{id:"ref-\u95dc\u9375\u5b57"},"ref \u95dc\u9375\u5b57"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0a\u56de\u6211\u5011\u8aaa\u597d\u4e86\uff0c\u53c3\u6578\u6709\u5206\u70ba\u50b3\u503c\u8207\u50b3\u5740"),(0,a.kt)("li",{parentName:"ul"},"ref \u95dc\u9375\u5b57\u7684\u7528\u9014\u5c31\u662f\u5c07\u53c3\u6578\u6307\u5b9a\u70ba\u50b3\u5740"),(0,a.kt)("li",{parentName:"ul"},"\u56e0\u6b64\u505a\u4efb\u4f55\u4fee\u6539\u90fd\u6703\u5f71\u97ff\u5230\u539f\u53c3\u6578")),(0,a.kt)("h3",{id:"\u7bc4\u4f8b\u6211\u5011\u4f86\u8b93\u4e00\u96bb\u96de\u9032\u5316\u5427"},"\u7bc4\u4f8b:\u6211\u5011\u4f86\u8b93\u4e00\u96bb\u96de\u9032\u5316\u5427"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace CsharpDemo\n{\n\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            //\u5ba3\u544a\u4e00\u96bb\u96de\n            string chicken = "\u4e00\u96bb\u96de";\n            Console.WriteLine("\u5c0f\u6642\u5019 : " + chicken);\n\n            //\u547c\u53eb\u6210\u9577\u65b9\u6cd5\n            ChangAChicken(ref chicken);\n\n            Console.WriteLine("\u6f02\u6cca\u5b8c\u56de\u5bb6\u5f8c\u7684\u96de : " + chicken);\n            Console.ReadKey();\n        }\n        //\u5ba3\u544a\u5c0f\u96de\u9577\u5927\u7684\u65b9\u6cd5\uff0c\u9019\u908a\u4f7f\u7528\u5e38\u6578\u65b9\u6cd5\uff0c\u4e0d\u9700\u8981\u505areturn\n        static void ChangAChicken(ref string newChicken)\n        {\n            //\u8b93\u96de\u9032\u5316\n            newChicken = "\u5b64\u7368" + newChicken;\n        }\n    }\n  }\n')),(0,a.kt)("p",null,"\u7d50\u679c:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5c0f\u6642\u5019 : \u4e00\u96bb\u96de",(0,a.kt)("br",null),"\n\u6f02\u6cca\u5b8c\u56de\u5bb6\u5f8c\u7684\u96de : \u5b64\u7368\u4e00\u96bb\u96de")),(0,a.kt)("h3",{id:"out-\u53c3\u6578\u4fee\u98fe\u8a5e"},"out \u53c3\u6578\u4fee\u98fe\u8a5e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Out \u7684\u5b58\u5728\u662f\u70ba\u4e86\u89e3\u6c7a\u4e00\u500b\u65b9\u6cd5\u53ea\u80fd\u56de\u50b3\u4e00\u500b\u503c"),(0,a.kt)("li",{parentName:"ul"},"\u4f46\u4f7f\u7528 Out \u5c31\u80fd\u56de\u4f86\u591a\u500b\u503c"),(0,a.kt)("li",{parentName:"ul"},"Out \u7684\u53c3\u6578\uff0c\u4f7f\u7528\u524d\u662f\u4e0d\u80fd\u8ce6\u503c\u7684\uff0c\u5373\u4f7f\u8ce6\u503c\u4e5f\u6703\u88ab\u5ffd\u7565")),(0,a.kt)("h3",{id:"\u7bc4\u4f8b\u6211\u5011\u77e5\u9053\u4e00\u500b\u5713\u7684\u534a\u5f91\u6c42\u5b83\u7684\u9762\u7a4d\u8207\u5713\u5468\u9577\u5427"},"\u7bc4\u4f8b:\u6211\u5011\u77e5\u9053\u4e00\u500b\u5713\u7684\u534a\u5f91\uff0c\u6c42\u5b83\u7684\u9762\u7a4d\u8207\u5713\u5468\u9577\u5427"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace CsharpDemo\n{\n\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            //\u5ba3\u544a\u5713\u534a\u5f91\n            double x = 4;\n            Console.WriteLine("\u5713\u534a\u5f91 : " + x);\n\n            //\u5ba3\u544a\u5713\u5468\u9577\n            double y;\n\n            //\u547c\u53eb\u8a08\u7b97\u65b9\u6cd5\n            double area = GetArea(x, out y);\n\n            Console.WriteLine("\u5713\u5468\u9577 = " + y);\n            Console.WriteLine("\u5713\u9762\u7a4d = " + area);\n            Console.ReadKey();\n        }\n        //\u5ba3\u544a\u65b9\u6cd5\u4f86\u8a08\u7b97\u9762\u7a4d\uff0c\u8981return \u9762\u7a4d\uff0cout  \u5713\u5468\u9577\n        static double GetArea(double r, out double y)\n        {\n            //\u8a08\u7b97\u5713\u5468\u9577\n            y = 2 * r * Math.PI;\n\n            //\u8a08\u7b97\u5713\u9762\u7a4d\n            double s = (r * r) * Math.PI;\n            return s;\n        }\n    }\n  }\n')),(0,a.kt)("p",null,"\u7d50\u679c:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5713\u534a\u5f91 : 4",(0,a.kt)("br",null),"\n\u5713\u5468\u9577 = 25.1327412287183",(0,a.kt)("br",null),"\n\u5713\u9762\u7a4d = 50.2654824574367")),(0,a.kt)("h3",{id:"ref-\u8207-out-\u7684\u5dee\u7570"},"ref \u8207 Out \u7684\u5dee\u7570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ref : \u4f7f\u7528\u524d\u53ef\u4ee5\u7d66\u50b3\u905e\u7684\u53c3\u6578 \u503c"),(0,a.kt)("li",{parentName:"ul"},"Out : \u4f7f\u7528\u524d\u662f\u4e0d\u80fd\u8ce6\u503c\u7684\uff0c\u5373\u4f7f\u8ce6\u503c\u4e5f\u6703\u88ab\u5ffd\u7565"),(0,a.kt)("li",{parentName:"ul"},"\u56e0\u6b64 Out \u7121\u6cd5\u62ff\u4f86\u505a\u6578\u64da\u50b3\u905e\uff0c\u53ea\u80fd\u53d6\u5f97\u8fd4\u56de\u503c")),(0,a.kt)("h3",{id:"\u4eca\u5929\u7684\u6587\u7ae0\u5c31\u5230\u9019\u908a\u5927\u5bb6\u8a18\u5f97\u50cf\u9bad\u9b5a\u4e00\u6a23\u660e\u5929\u8a18\u5f97\u56de\u4f86\u770b\u6211\u7684\u6587\u7ae0\u54e6"},"\u4eca\u5929\u7684\u6587\u7ae0\u5c31\u5230\u9019\u908a\uff0c\u5927\u5bb6\u8a18\u5f97\u50cf\u9bad\u9b5a\u4e00\u6a23\uff0c\u660e\u5929\u8a18\u5f97\u56de\u4f86\u770b\u6211\u7684\u6587\u7ae0\u54e6!"))}d.isMDXComponent=!0}}]);