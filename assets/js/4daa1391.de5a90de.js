"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[8275],{49613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>y});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(t),d=a,y=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return t?r.createElement(y,i(i({ref:n},c),{},{components:t})):r.createElement(y,i({ref:n},c))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},76430:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=t(88028),a=(t(59496),t(49613));const l={sidebar_position:50,description:"Day11 C# \u96de\u790e\u89c0\u5ff5- \u628a\u8907\u96dc\u7684\u4e8b\u60c5\u8207\u95dc\u4fc2\u7c21\u55ae\u5316~\u5217\u8209\u8207\u7d50\u69cb",key:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd","cSharp"],tags:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd"]},i="\ud83e\udd16 \u628a\u8907\u96dc\u7684\u4e8b\u60c5\u8207\u95dc\u4fc2\u7c21\u55ae\u5316~\u5217\u8209\u8207\u7d50\u69cb",o={unversionedId:"ironMan13/day11",id:"ironMan13/day11",title:"\ud83e\udd16 \u628a\u8907\u96dc\u7684\u4e8b\u60c5\u8207\u95dc\u4fc2\u7c21\u55ae\u5316~\u5217\u8209\u8207\u7d50\u69cb",description:"Day11 C# \u96de\u790e\u89c0\u5ff5- \u628a\u8907\u96dc\u7684\u4e8b\u60c5\u8207\u95dc\u4fc2\u7c21\u55ae\u5316~\u5217\u8209\u8207\u7d50\u69cb",source:"@site/docs/ironMan13/day11.md",sourceDirName:"ironMan13",slug:"/ironMan13/day11",permalink:"/docs/ironMan13/day11",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/ironMan13/day11.md",tags:[{label:"C#",permalink:"/docs/tags/c"},{label:"\u96de\u790e\u89c0\u5ff5",permalink:"/docs/tags/\u96de\u790e\u89c0\u5ff5"},{label:"\u9435\u4eba\u8cfd",permalink:"/docs/tags/\u9435\u4eba\u8cfd"}],version:"current",lastUpdatedAt:1704630401,formattedLastUpdatedAt:"2024\u5e741\u67087\u65e5",sidebarPosition:50,frontMatter:{sidebar_position:50,description:"Day11 C# \u96de\u790e\u89c0\u5ff5- \u628a\u8907\u96dc\u7684\u4e8b\u60c5\u8207\u95dc\u4fc2\u7c21\u55ae\u5316~\u5217\u8209\u8207\u7d50\u69cb",key:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd","cSharp"],tags:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd"]},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udd16 \u91cd\u64ad\u8207\u505c\u6b62 while\u8ff4\u5708\u8207break",permalink:"/docs/ironMan13/day10"},next:{title:"\ud83e\udd16 \u7576\u6211\u5011\u540c\u5728\u4e00\u8d77~\u9663\u5217(Array)",permalink:"/docs/ironMan13/day12"}},s={},u=[{value:"\u5217\u8209(enum)",id:"\u5217\u8209enum",level:2},{value:"\u7bc4\u4f8b:\u6211\u5011\u4f86\u7528\u5217\u8209\u5b9a\u7fa9\u661f\u671f\u5427",id:"\u7bc4\u4f8b\u6211\u5011\u4f86\u7528\u5217\u8209\u5b9a\u7fa9\u661f\u671f\u5427",level:3},{value:"\u5217\u8209\u898f\u5247",id:"\u5217\u8209\u898f\u5247",level:3},{value:"\u7bc4\u4f8b: \u5c07\u5217\u8209\u6539\u6210 short \u578b\u5225",id:"\u7bc4\u4f8b-\u5c07\u5217\u8209\u6539\u6210-short-\u578b\u5225",level:3},{value:"\u4f7f\u7528\u5217\u8209\u7684\u597d\u8655",id:"\u4f7f\u7528\u5217\u8209\u7684\u597d\u8655",level:3},{value:"\u7d50\u69cb\u9ad4(Structure)",id:"\u7d50\u69cb\u9ad4structure",level:3},{value:"\u7bc4\u4f8b:\u6211\u5011\u4f86\u5b9a\u7fa9\u4e00\u500b\u7c21\u55ae\u7684\u7d50\u69cb\u9ad4\u8207\u4ed6\u7684\u6578\u64da\u6210\u54e1\u5427",id:"\u7bc4\u4f8b\u6211\u5011\u4f86\u5b9a\u7fa9\u4e00\u500b\u7c21\u55ae\u7684\u7d50\u69cb\u9ad4\u8207\u4ed6\u7684\u6578\u64da\u6210\u54e1\u5427",level:3},{value:"\u6709\u4e86\u5217\u8209\u8ddf\u7d50\u69cb\u9ad4\uff0c\u8b93\u6211\u5011\u5beb\u7a0b\u5f0f\u53ef\u4ee5\u66f4\u52a0\u660e\u78ba\u5730\u53bb\u8655\u7406\u8cc7\u6599\uff0c\u4e5f\u8b93\u53ef\u8b80\u6027\u66f4\u597d",id:"\u6709\u4e86\u5217\u8209\u8ddf\u7d50\u69cb\u9ad4\u8b93\u6211\u5011\u5beb\u7a0b\u5f0f\u53ef\u4ee5\u66f4\u52a0\u660e\u78ba\u5730\u53bb\u8655\u7406\u8cc7\u6599\u4e5f\u8b93\u53ef\u8b80\u6027\u66f4\u597d",level:3}],c={toc:u},p="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-\u628a\u8907\u96dc\u7684\u4e8b\u60c5\u8207\u95dc\u4fc2\u7c21\u55ae\u5316\u5217\u8209\u8207\u7d50\u69cb"},"\ud83e\udd16 \u628a\u8907\u96dc\u7684\u4e8b\u60c5\u8207\u95dc\u4fc2\u7c21\u55ae\u5316~\u5217\u8209\u8207\u7d50\u69cb"),(0,a.kt)("p",null,"\u5728\u96fb\u8166\u4e16\u754c\u4e2d\uff0c\u5f88\u591a\u7de8\u78bc\u90fd\u662f\u8907\u96dc\u4e14\u770b\u4e0d\u61c2\u7684\uff0c\n\u4f8b\u5982\u984f\u8272\u7de8\u78bc\uff0cFF0000 \u4ee3\u8868\u7d05\u8272\uff0c800080 \u4ee3\u8868\u7da0\u8272\uff0c\n\u4f60\u4e0d\u8aaa\uff0c\u6211\u4e0d\u8aaa\uff0c\u6c92\u4eba\u77e5\u9053\u9019\u7de8\u78bc\u4ee3\u8868\u7684\u610f\u601d\uff0c\n\u6211\u5011\u4eca\u5929\u5c31\u4f86\u5c07\u7de8\u78bc\u7c21\u5316\u5427"),(0,a.kt)("h2",{id:"\u5217\u8209enum"},"\u5217\u8209(enum)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5217\u8209\u985e\u578b(Enueration type)\u80fd\u628a\u5b57\u4e32\u6620\u5c04\u5230\u6578\u5b57"),(0,a.kt)("li",{parentName:"ul"},"\u589e\u52a0\u53ef\u8b80\u6027\u4e5f\u53ef\u53c3\u52a0\u8a08\u7b97"),(0,a.kt)("li",{parentName:"ul"},"\u7d50\u69cb\u5982\u4e0b\n",(0,a.kt)("img",{parentName:"li",src:"https://ithelp.ithome.com.tw/upload/images/20210909/20097001LTMmcCPN7j.png",alt:"mdImg"}))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"!\u6ce8\u610f!:WeekDays\u4e0d\u662f\u8b8a\u6578\uff0c\u800c\u662f\u4e00\u7a2e\u6578\u64da\u985e\u578b\uff0c\u662f\u548cint,double,string\u7b49\u4e00\u6a23\u7684\u6578\u64da\u985e\u578b\uff0c\u8a72\u5217\u8209\u985e\u578b\u7684\u503c\u53ea\u80fd\u662f\u4e03\u500b\u5217\u8209\u9805\u4e4b\u4e00\uff0c\u6bcf\u500b\u5217\u8209\u8868\u9762\u4e0a\u662f\u4e00\u500b\u5b57\u4e32\uff0c\u80cc\u5f8c\u90fd\u95dc\u806f\u8457\u4e00\u500b\u6574\u6578\u503c\uff0c\u9ed8\u8a8d\u60c5\u6cc1\u7b2c\u4e00\u500b\u70ba0\u4e4b\u5f8c\u4f9d\u5e8f\u905e\u589e")),(0,a.kt)("h3",{id:"\u7bc4\u4f8b\u6211\u5011\u4f86\u7528\u5217\u8209\u5b9a\u7fa9\u661f\u671f\u5427"},"\u7bc4\u4f8b:\u6211\u5011\u4f86\u7528\u5217\u8209\u5b9a\u7fa9\u661f\u671f\u5427"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace CsharpDemo\n{\n    class Program\n    {\n        //\u5ba3\u544a\u661f\u671f\u7684\u5217\u8209\n        enum WeekDays { \u661f\u671f\u4e00, \u661f\u671f\u4e8c, \u661f\u671f\u4e09, \u661f\u671f\u56db, \u661f\u671f\u4e94, \u661f\u671f\u516d, \u661f\u671f\u5929 }\n        static void Main(string[] args)\n        {\n            int a = Convert.ToInt32(Console.ReadLine());\n\n            //\u5c07\u8b80\u5230\u7684\u6578\u5b57\u8f49\u70ba\u661f\u671f\n            WeekDays today = (WeekDays)a;\n\n            //\u5224\u65b7\u4eca\u5929\u662f\u5426\u70ba\u5047\u65e5\n            if ((today == WeekDays.\u661f\u671f\u5929 || today == WeekDays.\u661f\u671f\u516d))\n            {\n                Console.WriteLine("\u653e!\u5047!\u5566!!!!");\n            }\n            else\n            {\n                Console.WriteLine("\u7121\u60c5\u4e0a\u73ed\u65e5!");\n            }\n            Console.ReadKey();\n        }\n    }\n  }\n')),(0,a.kt)("p",null,"\u8f38\u5165:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"1")),(0,a.kt)("p",null,"\u7d50\u679c:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"1\n\u7121\u60c5\u4e0a\u73ed\u65e5!")),(0,a.kt)("p",null,"\u8f38\u5165:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"6")),(0,a.kt)("p",null,"\u7d50\u679c:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"6\n\u653e!\u5047!\u5566!!!!")),(0,a.kt)("h3",{id:"\u5217\u8209\u898f\u5247"},"\u5217\u8209\u898f\u5247"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u9ed8\u8a8d\u60c5\u6cc1\u4e4b\u4e0b\uff0c\u90fd\u662f\u6574\u6578(int)\u985e\u578b"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u6709\u5176\u4ed6\u9700\u8981\uff0c\u6211\u5011\u53ef\u4ee5\u81ea\u5b9a\u7fa9\u5217\u8209\u578b\u614b"),(0,a.kt)("li",{parentName:"ul"},"\u95dc\u806f\u76f4\u53ef\u4ee5\u662f byte,sbyte,short,ushort,int,uint,long \u548c ulong \u7b49\u985e\u578b")),(0,a.kt)("h3",{id:"\u7bc4\u4f8b-\u5c07\u5217\u8209\u6539\u6210-short-\u578b\u5225"},"\u7bc4\u4f8b: \u5c07\u5217\u8209\u6539\u6210 short \u578b\u5225"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"}," enum WeekDays : short\n        {\n            \u661f\u671f\u4e00,\n            \u661f\u671f\u4e8c,\n            \u661f\u671f\u4e09,\n            \u661f\u671f\u56db,\n            \u661f\u671f\u4e94,\n            \u661f\u671f\u516d,\n            \u661f\u671f\u65e5\n        }\n")),(0,a.kt)("h3",{id:"\u4f7f\u7528\u5217\u8209\u7684\u597d\u8655"},"\u4f7f\u7528\u5217\u8209\u7684\u597d\u8655"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u503c\u6a19\u793a\u4ee3\u66ff\u6578\u5b57\uff0c\u589e\u5f37\u7a0b\u5e8f\u7684\u53ef\u8b80\u6027\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u6bcf\u500b\u5217\u8209\u90fd\u95dc\u806f\u8457\u4e00\u500b\u6578\u5b57\uff0c\u53ef\u53c3\u52a0\u8a08\u7b97\u548c\u5faa\u74b0\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5217\u8209\u8b8a\u6578\u53ea\u80fd\u8209\u5217\u8209\u9805\u4e2d\u7684\u503c\uff0c\u6709\u5229\u65bc\u7de8\u8b6f\u5668\u6aa2\u67e5\u51fa\u975e\u6cd5\u7684\u8ce6\u503c\u3002")),(0,a.kt)("h3",{id:"\u7d50\u69cb\u9ad4structure"},"\u7d50\u69cb\u9ad4(Structure)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f88\u591a\u4e92\u76f8\u806f\u7e6b\u7684\u4fe1\u606f\u7d44\u6210\u4e00\u500b\u6574\u9ad4"),(0,a.kt)("li",{parentName:"ul"},"C#\u4e2d\u6211\u5011\u53ef\u4ee5\u628a\u9019\u4e9b\u7dca\u5bc6\u806f\u7e6b\u7684\u8b8a\u6578\u5b9a\u7fa9\u6210\u7d50\u69cb\u9ad4(Structure)")),(0,a.kt)("h3",{id:"\u7bc4\u4f8b\u6211\u5011\u4f86\u5b9a\u7fa9\u4e00\u500b\u7c21\u55ae\u7684\u7d50\u69cb\u9ad4\u8207\u4ed6\u7684\u6578\u64da\u6210\u54e1\u5427"},"\u7bc4\u4f8b:\u6211\u5011\u4f86\u5b9a\u7fa9\u4e00\u500b\u7c21\u55ae\u7684\u7d50\u69cb\u9ad4\u8207\u4ed6\u7684\u6578\u64da\u6210\u54e1\u5427"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace CsharpDemo\n{\n    class Program\n    {\n        /// <summary>\n        /// \u5b78\u751f\uff0c\u7d50\u69cb\u9ad4\n        /// </summary>\n        struct Student\n        {\n            //\u5b78\u865f\n            public int number;\n            //\u59d3\u540d\n            public string name;\n            //\u6027\u5225\n            public string sex;\n            //\u751f\u65e5\n            public string birthday;\n        }\n\n        static void Main(string[] args)\n        {\n            Student boy;//\u5ba3\u544a\u8b8a\u6578boy\n            boy.number = 5487;\n            boy.name = "\u5b64\u7368\u4e00\u96bb\u96de";\n            boy.sex = "\u516c";\n            boy.birthday = "1111.01.01";\n\n\n            Student girl;//\u5ba3\u544a\u8b8a\u6578girl\n            girl.number = 9527;\n            girl.name = "\u5b64\u7368\u4e5d\u5341\u4e5d\u96bb\u96de";\n            girl.sex = "\u6bcd";\n            girl.birthday = "9999.09.09";\n\n\n            Console.WriteLine("\u5b78\u865f:" + boy.number);\n            Console.WriteLine("\u59d3\u540d:" + boy.name);\n            Console.WriteLine("\u6027\u5225:" + boy.sex);\n            Console.WriteLine("\u751f\u65e5:" + boy.birthday);\n            Console.WriteLine("");\n\n            Console.WriteLine("\u5b78\u865f:" + girl.number);\n            Console.WriteLine("\u59d3\u540d:" + girl.name);\n            Console.WriteLine("\u6027\u5225:" + girl.sex);\n            Console.WriteLine("\u751f\u65e5:" + girl.birthday);\n            Console.ReadKey();\n        }\n    }\n  }\n')),(0,a.kt)("p",null,"\u7d50\u679c:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5b78\u865f:5487\n\u59d3\u540d:\u5b64\u7368\u4e00\u96bb\u96de\n\u6027\u5225:\u516c\n\u751f\u65e5:1111.01.01")),(0,a.kt)("p",null,"\u5b78\u865f:9527\n\u59d3\u540d:\u5b64\u7368\u4e5d\u5341\u4e5d\u96bb\u96de\n\u6027\u5225:\u6bcd\n\u751f\u65e5:9999.09.09"),(0,a.kt)("h3",{id:"\u6709\u4e86\u5217\u8209\u8ddf\u7d50\u69cb\u9ad4\u8b93\u6211\u5011\u5beb\u7a0b\u5f0f\u53ef\u4ee5\u66f4\u52a0\u660e\u78ba\u5730\u53bb\u8655\u7406\u8cc7\u6599\u4e5f\u8b93\u53ef\u8b80\u6027\u66f4\u597d"},"\u6709\u4e86\u5217\u8209\u8ddf\u7d50\u69cb\u9ad4\uff0c\u8b93\u6211\u5011\u5beb\u7a0b\u5f0f\u53ef\u4ee5\u66f4\u52a0\u660e\u78ba\u5730\u53bb\u8655\u7406\u8cc7\u6599\uff0c\u4e5f\u8b93\u53ef\u8b80\u6027\u66f4\u597d"))}m.isMDXComponent=!0}}]);