"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[5453],{49613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var a=t(59496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(t),d=r,k=s["".concat(p,".").concat(d)]||s[d]||m[d]||l;return t?a.createElement(k,o(o({ref:n},u),{},{components:t})):a.createElement(k,o({ref:n},u))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},66592:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=t(88028),r=(t(59496),t(49613));const l={sidebar_position:100,description:"Day21 C# \u96de\u790e\u89c0\u5ff5- \u7269\u4ef6\u5c0e\u5411(oop)~\u985e\u5225(class)",key:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd","cSharp"],tags:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd"]},o="\ud83e\udd16 \u7269\u4ef6\u5c0e\u5411(oop)~\u985e\u5225(class)",i={unversionedId:"ironMan13/day21",id:"ironMan13/day21",title:"\ud83e\udd16 \u7269\u4ef6\u5c0e\u5411(oop)~\u985e\u5225(class)",description:"Day21 C# \u96de\u790e\u89c0\u5ff5- \u7269\u4ef6\u5c0e\u5411(oop)~\u985e\u5225(class)",source:"@site/docs/ironMan13/day21.md",sourceDirName:"ironMan13",slug:"/ironMan13/day21",permalink:"/en/docs/ironMan13/day21",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/ironMan13/day21.md",tags:[{label:"C#",permalink:"/en/docs/tags/c"},{label:"\u96de\u790e\u89c0\u5ff5",permalink:"/en/docs/tags/\u96de\u790e\u89c0\u5ff5"},{label:"\u9435\u4eba\u8cfd",permalink:"/en/docs/tags/\u9435\u4eba\u8cfd"}],version:"current",lastUpdatedAt:1704630401,formattedLastUpdatedAt:"Jan 7, 2024",sidebarPosition:100,frontMatter:{sidebar_position:100,description:"Day21 C# \u96de\u790e\u89c0\u5ff5- \u7269\u4ef6\u5c0e\u5411(oop)~\u985e\u5225(class)",key:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd","cSharp"],tags:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd"]},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udd16 \u7269\u4ef6\u5c0e\u5411(oop)\u57fa\u672c\u89c0\u5ff5",permalink:"/en/docs/ironMan13/day20"},next:{title:"\ud83e\udd16 \u7269\u4ef6\u5c0e\u5411(oop)~\u7269\u4ef6(Object)",permalink:"/en/docs/ironMan13/day22"}},p={},c=[{value:"\u8b8a\u6578\u6210\u54e1\u8207\u65b9\u6cd5\u6210\u54e1",id:"\u8b8a\u6578\u6210\u54e1\u8207\u65b9\u6cd5\u6210\u54e1",level:3},{value:"\u7bc4\u4f8b:\u6211\u5011\u4f86\u5be6\u4f5c\u8c93\u7684\u985e\u5225 \xa0",id:"\u7bc4\u4f8b\u6211\u5011\u4f86\u5be6\u4f5c\u8c93\u7684\u985e\u5225-",level:3},{value:"\u5b78\u6703\u4e86\u985e\u5225\u4e4b\u5f8c\uff0c\u6703\u767c\u73fe\u539f\u4f86\u7a0b\u5f0f\u78bc\uff0c\u4e5f\u53ef\u4ee5\u9019\u6a23\u505a\u5206\u985e\u9d28!",id:"\u5b78\u6703\u4e86\u985e\u5225\u4e4b\u5f8c\u6703\u767c\u73fe\u539f\u4f86\u7a0b\u5f0f\u78bc\u4e5f\u53ef\u4ee5\u9019\u6a23\u505a\u5206\u985e\u9d28",level:3}],u={toc:c},s="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(s,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-\u7269\u4ef6\u5c0e\u5411oop\u985e\u5225class"},"\ud83e\udd16 \u7269\u4ef6\u5c0e\u5411(oop)~\u985e\u5225(class)"),(0,r.kt)("p",null,"\u842c\u7269\u7686\u6709\u4ed6\u7684\u7d50\u69cb\uff0c",(0,r.kt)("br",null),"\n\u5c31\u5982\u540c\u4e16\u754c\u4e0a\u6240\u6709\u6771\u897f\u7686\u7531\u5143\u7d20\u6240\u7d44\u6210\uff0c",(0,r.kt)("br",null),"\n\u800c\u5b9a\u7fa9\u9019\u4e9b\u7d50\u69cb\u5728 C#\u4e2d\u7a31\u70ba class\uff0c",(0,r.kt)("br",null),"\n\u4ed6\u662f\u4e00\u5207\u7684\u85cd\u5716"),(0,r.kt)("h3",{id:"\u8b8a\u6578\u6210\u54e1\u8207\u65b9\u6cd5\u6210\u54e1"},"\u8b8a\u6578\u6210\u54e1\u8207\u65b9\u6cd5\u6210\u54e1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7d50\u69cb:\n",(0,r.kt)("img",{parentName:"li",src:"https://ithelp.ithome.com.tw/upload/images/20210920/20097001TE37hH4gKq.png",alt:"mdImg"}))),(0,r.kt)("h3",{id:"\u7bc4\u4f8b\u6211\u5011\u4f86\u5be6\u4f5c\u8c93\u7684\u985e\u5225-"},"\u7bc4\u4f8b:\u6211\u5011\u4f86\u5be6\u4f5c\u8c93\u7684\u985e\u5225 \xa0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace CsharpDemo\n{\n\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            //\u4f7f\u7528\u985e\u5225\u524d\u8981\u5148\u5be6\u4f8b\u5316\n            Cat cat = new Cat();\n\n            //\u586b\u5beb\u8b8a\u6578\u6210\u54e1\n            Console.WriteLine("\u8acb\u8f38\u5165\u59d3\u540d:");\n            cat.name = Console.ReadLine();\n\n            Console.WriteLine("\u8acb\u8f38\u5165\u5e74\u9f61:");\n            cat.age =Convert.ToInt32(Console.ReadLine());\n\n            //\u547c\u53eb\u65b9\u6cd5\u6210\u54e1\n            //\u55b5\u55b5\u53eb\n            cat.Meow();\n\n            //\u6293\u5230\u8001\u9f20\n            cat.CaseMice();\n\n            Console.ReadKey();\n        }\n    }\n\n    class Cat\n    {\n        //\u540d\u7a31\n        public string name;\n        //\u5e74\u9f61\n        public int age;\n        //\u8001\u9f20\u6578\u91cf\n        public int miceCount = 0; //\u8a18\u9304\u6293\u5e7e\u96bb\u8001\u9f20\n        //\u65b9\u6cd5\u6210\u54e1\n        //\u65b9\u6cd5:\u6253\u62db\u547c\n        public void Hello()\n        {\n            Console.WriteLine("\u55e8!\u6211\u662f{0} ", name);\n        }\n        //\u65b9\u6cd5:\u55b5\u55b5\u53eb\n        public void Meow()\n        {\n            Hello();\n            Console.WriteLine("\u55b5~~~~~\u55b5~~~");\n        }\n        //\u65b9\u6cd5:\u6349\u8001\u9f20\n        public void CaseMice()\n        {\n            miceCount++;\n            Hello();\n            Console.WriteLine("\u6211\u5df2\u7d93\u6293\u4e86 {0} \u96bb\u8001\u9f20", miceCount);\n            Console.ReadKey();\n        }\n    }\n}\n')),(0,r.kt)("p",null,"\u8f38\u5165:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5b64\u7368\u4e00\u96bb\u96de",(0,r.kt)("br",null),"\n48")),(0,r.kt)("p",null,"\u8f38\u51fa:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8acb\u8f38\u5165\u59d3\u540d:",(0,r.kt)("br",null),"\n\u5b64\u7368\u4e00\u96bb\u96de",(0,r.kt)("br",null),"\n\u8acb\u8f38\u5165\u5e74\u9f61:",(0,r.kt)("br",null),"\n48",(0,r.kt)("br",null),"\n\u55e8!\u6211\u662f\u5b64\u7368\u4e00\u96bb\u96de",(0,r.kt)("br",null),"\n\u55b5",(0,r.kt)("del",{parentName:"p"}),"~\u55b5~~~",(0,r.kt)("br",null),"\n\u55e8!\u6211\u662f\u5b64\u7368\u4e00\u96bb\u96de",(0,r.kt)("br",null),"\n\u6211\u5df2\u7d93\u6293\u4e86 1 \u96bb\u8001\u9f20")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728 Cat \u9019\u500b\u985e\u5225\u4e4b\u4e2d\uff0c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8c93\u6709\u4e09\u500b\u5c6c\u6027:",(0,r.kt)("br",null),"\n\xa0 1. \u540d\u5b57 ",(0,r.kt)("br",null),"\n\xa0 2. \u5e74\u9f61 ",(0,r.kt)("br",null),"\n\xa0 3. \u6349\u5230\u8001\u9f20\u6578\u91cf",(0,r.kt)("br",null),"\n\u5206\u5225\u4f7f\u7528 \xa0name \u3001age\u3001\xa0miceCount\xa0 \u4f86\u8868\u793a\uff0c",(0,r.kt)("br",null),"\n\u4ed6\u5011\u7a31\u70ba\u985e\u5225\u7684\u6210\u54e1\u8b8a\u6578(Member Variable)\xa0\n",(0,r.kt)("img",{parentName:"li",src:"https://ithelp.ithome.com.tw/upload/images/20210920/20097001jyYIlCq1wD.png",alt:"mdImg"})))),(0,r.kt)("li",{parentName:"ol"},"\u516c\u7528\u548c\u79c1\u7528 (public/private)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'public/private \u7d71\u7a31\u70ba"\u4fee\u98fe\u8a5e"')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"    public string name;\n    public int age;\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\u21d2 \u516c\u6709\u6210\u54e1\n    public void Meow()\n    public void CaseMice()\n\n    private int miceCount = 0;\xa0\n    private void Hello()\xa0\xa0 \xa0\xa0\xa0 \xa0\u21d2\u79c1\u6709\u6210\u54e1\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"\xa0 \u203b\u628a\u8b8a\u6578\u6216\u51fd\u6578\u6a19\u8a18\u70baprivate\uff0c\u53ef\u4ee5\u78ba\u4fdd\u9019\u4e9b\u6578\u64da\u4e0d\u53d7\u5230\u5916\u754c\u7684\u5f71\u97ff")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5df2\u5ba3\u544a\u5b58\u53d6\u7bc4\u570d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u610f\u7fa9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"public"),(0,r.kt)("td",{parentName:"tr",align:null},"\u672a\u9650\u5236\u5b58\u53d6\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"protected"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b58\u53d6\u9650\u65bc\u5305\u542b\u985e\u5225\u6216\u884d\u751f\u81ea\u5305\u542b\u985e\u5225\u7684\u985e\u578b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"internal"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b58\u53d6\u9650\u65bc\u76ee\u524d\u7d44\u4ef6\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"protected internal"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b58\u53d6\u9650\u65bc\u76ee\u524d\u7d44\u4ef6\u6216\u884d\u751f\u81ea\u5305\u542b\u985e\u5225\u7684\u985e\u578b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"private"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b58\u53d6\u9650\u65bc\u5305\u542b\u985e\u578b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"private protected"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b58\u53d6\u9650\u65bc\u76ee\u524d\u7d44\u4ef6\u5167\u5305\u542b\u985e\u5225\u6216\u884d\u751f\u81ea\u5305\u542b\u985e\u5225\u7684\u985e\u578b\u3002 \u81ea C# 7.2 \u8d77\u53ef\u7528\u3002")))),(0,r.kt)("h3",{id:"\u5b78\u6703\u4e86\u985e\u5225\u4e4b\u5f8c\u6703\u767c\u73fe\u539f\u4f86\u7a0b\u5f0f\u78bc\u4e5f\u53ef\u4ee5\u9019\u6a23\u505a\u5206\u985e\u9d28"},"\u5b78\u6703\u4e86\u985e\u5225\u4e4b\u5f8c\uff0c\u6703\u767c\u73fe\u539f\u4f86\u7a0b\u5f0f\u78bc\uff0c\u4e5f\u53ef\u4ee5\u9019\u6a23\u505a\u5206\u985e\u9d28!"))}m.isMDXComponent=!0}}]);