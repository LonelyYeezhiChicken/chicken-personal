"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[6744],{49613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),y=a,m=p["".concat(s,".").concat(y)]||p[y]||d[y]||o;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},92626:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(88028),a=(t(59496),t(49613));const o={sidebar_position:125,description:"Day26 C# \u96de\u790e\u89c0\u5ff5- \u7269\u4ef6\u5c0e\u5411(oop)~ \u591a\u8f09(Overload)",key:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd","cSharp"],tags:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd"]},i="\ud83e\udd16 \u7269\u4ef6\u5c0e\u5411(oop)~ \u591a\u8f09(Overload)",l={unversionedId:"ironMan13/day26",id:"ironMan13/day26",title:"\ud83e\udd16 \u7269\u4ef6\u5c0e\u5411(oop)~ \u591a\u8f09(Overload)",description:"Day26 C# \u96de\u790e\u89c0\u5ff5- \u7269\u4ef6\u5c0e\u5411(oop)~ \u591a\u8f09(Overload)",source:"@site/docs/ironMan13/day26.md",sourceDirName:"ironMan13",slug:"/ironMan13/day26",permalink:"/docs/ironMan13/day26",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/ironMan13/day26.md",tags:[{label:"C#",permalink:"/docs/tags/c"},{label:"\u96de\u790e\u89c0\u5ff5",permalink:"/docs/tags/\u96de\u790e\u89c0\u5ff5"},{label:"\u9435\u4eba\u8cfd",permalink:"/docs/tags/\u9435\u4eba\u8cfd"}],version:"current",lastUpdatedAt:1704630401,formattedLastUpdatedAt:"2024\u5e741\u67087\u65e5",sidebarPosition:125,frontMatter:{sidebar_position:125,description:"Day26 C# \u96de\u790e\u89c0\u5ff5- \u7269\u4ef6\u5c0e\u5411(oop)~ \u591a\u8f09(Overload)",key:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd","cSharp"],tags:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd"]},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udd16 \u5171\u7522\u4e3b\u7fa9\u8005~\u975c\u614b\u6210\u54e1",permalink:"/docs/ironMan13/day25"},next:{title:"\ud83e\udd16 \u505a\u932f\u4e8b\u8a72\u600e\u9ebc\u8fa6\u5462?~\u932f\u8aa4\u8655\u7406",permalink:"/docs/ironMan13/day27"}},s={},c=[{value:"\u591a\u8f09",id:"\u591a\u8f09",level:3},{value:"\u7bc4\u4f8b:\u6211\u5011\u5148\u4f86\u770b\u4e00\u6bb5\u7a0b\u5f0f",id:"\u7bc4\u4f8b\u6211\u5011\u5148\u4f86\u770b\u4e00\u6bb5\u7a0b\u5f0f",level:3},{value:"\u7bc4\u4f8b:\u4f7f\u7528\u591a\u8f09\u4f86\u8655\u7406\u4e0a\u9762\u7684\u7a0b\u5f0f\u5427",id:"\u7bc4\u4f8b\u4f7f\u7528\u591a\u8f09\u4f86\u8655\u7406\u4e0a\u9762\u7684\u7a0b\u5f0f\u5427",level:3},{value:"\u5e0c\u671b\u5927\u5bb6\u90fd\u5b78\u6703\u5e6b\u81ea\u5df1\u7684\u7a0b\u5f0f\u7a7f\u4e0a\u4e00\u6a23\u7684\u5236\u670d\u5594\uff0c\u6211\u5011\u660e\u5929\u898b",id:"\u5e0c\u671b\u5927\u5bb6\u90fd\u5b78\u6703\u5e6b\u81ea\u5df1\u7684\u7a0b\u5f0f\u7a7f\u4e0a\u4e00\u6a23\u7684\u5236\u670d\u5594\u6211\u5011\u660e\u5929\u898b",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-\u7269\u4ef6\u5c0e\u5411oop-\u591a\u8f09overload"},"\ud83e\udd16 \u7269\u4ef6\u5c0e\u5411(oop)~ \u591a\u8f09(Overload)"),(0,a.kt)("p",null,"\u5f88\u591a\u4fbf\u5229\u5546\u5e97\u90fd\u6709\u4ed6\u5011\u7684\u5236\u670d\uff0c",(0,a.kt)("br",null),"\n\u7a7f\u8457\u4e00\u6a21\u4e00\u6a23\u7684\u5236\u670d\uff0c",(0,a.kt)("br",null),"\n\u5c31\u7b97\u96e2\u958b\u5e97\u9762\uff0c",(0,a.kt)("br",null),"\n\u5927\u5bb6\u90fd\u9084\u662f\u64c1\u6709\u6975\u9ad8\u7684\u8fa8\u8b58\u5ea6\uff0c",(0,a.kt)("br",null),"\nC#\u4e5f\u64c1\u6709\u5171\u540c\u5236\u670d\u7684\u529f\u80fd"),(0,a.kt)("h3",{id:"\u591a\u8f09"},"\u591a\u8f09"),(0,a.kt)("h3",{id:"\u7bc4\u4f8b\u6211\u5011\u5148\u4f86\u770b\u4e00\u6bb5\u7a0b\u5f0f"},"\u7bc4\u4f8b:\u6211\u5011\u5148\u4f86\u770b\u4e00\u6bb5\u7a0b\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace CsharpDemo\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            Console.WriteLine("Int : " + Calculate.DivideInt(10, 20));\n            Console.WriteLine("Double : " + Calculate.DivideDouble(10.11, 20.22));\n            Console.ReadKey();\n        }\n    }\n    //\u5b9a\u7fa9\u8a08\u7b97\u7684\u985e\u5225\n    class Calculate\n    {\n        //\u5ba3\u544a\u975c\u614b\u6cd5\u4f86\u8a08\u7b97\u6574\u6578\n        public static int DivideInt(int x, int y)\n        {\n            return x * y;\n        }\n        //\u5ba3\u544a\u975c\u614b\u6cd5\u4f86\u8a08\u7b97\u6d6e\u9ede\u6578\n        public static double DivideDouble(double x, double y)\n        {\n            return x * y;\n        }\n    }\n  }\n')),(0,a.kt)("p",null,"\u7d50\u679c:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Int : 200",(0,a.kt)("br",null),"\nDouble : 204.4242")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u5982\u679c\u9700\u8981\u4e0d\u540c\u7684\u7b97\u6cd5\uff0c\u6211\u5011\u5c31\u9700\u8981\u5beb\u7a2e\u65b9\u6cd5\uff0c\u4f46\u5c0d\u65bc\u591a\u8f09\u4f86\u8aaa\u5b83\u53ef\u4ee5\u5e6b\u4ed6\u5011\u7a7f\u4e0a\u5236\u670d")),(0,a.kt)("h3",{id:"\u7bc4\u4f8b\u4f7f\u7528\u591a\u8f09\u4f86\u8655\u7406\u4e0a\u9762\u7684\u7a0b\u5f0f\u5427"},"\u7bc4\u4f8b:\u4f7f\u7528\u591a\u8f09\u4f86\u8655\u7406\u4e0a\u9762\u7684\u7a0b\u5f0f\u5427"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace CsharpDemo\n{\n\n\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            Console.WriteLine("Int : " + Calculate.Divide(10, 20));\n            Console.WriteLine("Double : " + Calculate.Divide(10.11, 20.22));\n            Console.ReadKey();\n        }\n    }\n    // \u5b9a\u7fa9\u8a08\u7b97\u7684\u985e\u5225\n    class Calculate\n    {\n        //\u5ba3\u544a\u975c\u614b\u6cd5\u4f86\u8a08\u7b97\u6574\u6578\n        public static int Divide(int x, int y)\n        {\n            return x * y;\n        }\n        //\u5ba3\u544a\u975c\u614b\u6cd5\u4f86\u8a08\u7b97\u6d6e\u9ede\u6578\n        public static double Divide(double x, double y)\n        {\n            return x * y;\n        }\n    }\n }\n')),(0,a.kt)("p",null,"\u7d50\u679c:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Int : 200",(0,a.kt)("br",null),"\nDouble : 204.4242")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u5404\u4f4d\u53ef\u80fd\u6703\u7a81\u7136\u9813\u609f\uff0c\u554a\u539f\u4f86\u591a\u8f09\u5c31\u662f\u4e00\u6a23\u540d\u5b57\u7684\u65b9\u6cd5\uff0c\u537b\u53ef\u4ee5\u505a\u4e0d\u540c\u4e8b\u60c5")),(0,a.kt)("h3",{id:"\u5e0c\u671b\u5927\u5bb6\u90fd\u5b78\u6703\u5e6b\u81ea\u5df1\u7684\u7a0b\u5f0f\u7a7f\u4e0a\u4e00\u6a23\u7684\u5236\u670d\u5594\u6211\u5011\u660e\u5929\u898b"},"\u5e0c\u671b\u5927\u5bb6\u90fd\u5b78\u6703\u5e6b\u81ea\u5df1\u7684\u7a0b\u5f0f\u7a7f\u4e0a\u4e00\u6a23\u7684\u5236\u670d\u5594\uff0c\u6211\u5011\u660e\u5929\u898b"))}d.isMDXComponent=!0}}]);