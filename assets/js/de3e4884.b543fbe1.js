"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[815],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),g=a,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||o;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6852:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:110,description:"Day23 C# \u96de\u790e\u89c0\u5ff5- \u7269\u4ef6\u5c0e\u5411(oop)~\u5c6c\u6027(Property)",key:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd","cSharp"],tags:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd"]},i="\ud83e\udd16 \u7269\u4ef6\u5c0e\u5411(oop)~\u5c6c\u6027(Property)",l={unversionedId:"ironMan13/day23",id:"ironMan13/day23",title:"\ud83e\udd16 \u7269\u4ef6\u5c0e\u5411(oop)~\u5c6c\u6027(Property)",description:"Day23 C# \u96de\u790e\u89c0\u5ff5- \u7269\u4ef6\u5c0e\u5411(oop)~\u5c6c\u6027(Property)",source:"@site/docs/ironMan13/day23.md",sourceDirName:"ironMan13",slug:"/ironMan13/day23",permalink:"/docs/ironMan13/day23",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/ironMan13/day23.md",tags:[{label:"C#",permalink:"/docs/tags/c"},{label:"\u96de\u790e\u89c0\u5ff5",permalink:"/docs/tags/\u96de\u790e\u89c0\u5ff5"},{label:"\u9435\u4eba\u8cfd",permalink:"/docs/tags/\u9435\u4eba\u8cfd"}],version:"current",sidebarPosition:110,frontMatter:{sidebar_position:110,description:"Day23 C# \u96de\u790e\u89c0\u5ff5- \u7269\u4ef6\u5c0e\u5411(oop)~\u5c6c\u6027(Property)",key:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd","cSharp"],tags:["C#","\u96de\u790e\u89c0\u5ff5","\u9435\u4eba\u8cfd"]},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udd16 \u7269\u4ef6\u5c0e\u5411(oop)~\u7269\u4ef6(Object)",permalink:"/docs/ironMan13/day22"},next:{title:"\ud83e\udd16 \u7269\u4ef6\u5c0e\u5411(oop)~\u5efa\u69cb\u65b9\u6cd5(Constructor)",permalink:"/docs/ironMan13/day24"}},s={},p=[{value:"\u8a2a\u554f\u5668 (Assessor)",id:"\u8a2a\u554f\u5668-assessor",level:3},{value:"\u7bc4\u4f8b:\u6211\u5011\u5efa\u7acb\u4e00\u500b\u72d7\u7684\u985e\u5225\u505a\u7df4\u7fd2",id:"\u7bc4\u4f8b\u6211\u5011\u5efa\u7acb\u4e00\u500b\u72d7\u7684\u985e\u5225\u505a\u7df4\u7fd2",level:3},{value:"\u5c6c\u6027(Property)",id:"\u5c6c\u6027property",level:3},{value:"\u7bc4\u4f8b:\u6211\u5011\u4f86\u5efa\u7acb\u4e00\u500b\u9d28\u5b50\u985e\u5225\u4f86\u7df4\u7fd2\u5427",id:"\u7bc4\u4f8b\u6211\u5011\u4f86\u5efa\u7acb\u4e00\u500b\u9d28\u5b50\u985e\u5225\u4f86\u7df4\u7fd2\u5427",level:3},{value:"\u5c6c\u6027\u89e3\u6c7a\u4e86\u6211\u5011\u559c\u63db\u7528\u8b8a\u6578\uff0c\u53c8\u53ef\u4ee5\u81ea\u52d5\u6aa2\u67e5\uff0c\u4e26\u4e14\u53c8\u5177\u6709\u5c01\u88dd\u6027\uff0c\u4e00\u6b21\u89e3\u6c7a\u4e09\u7a2e\u554f\u984c",id:"\u5c6c\u6027\u89e3\u6c7a\u4e86\u6211\u5011\u559c\u63db\u7528\u8b8a\u6578\u53c8\u53ef\u4ee5\u81ea\u52d5\u6aa2\u67e5\u4e26\u4e14\u53c8\u5177\u6709\u5c01\u88dd\u6027\u4e00\u6b21\u89e3\u6c7a\u4e09\u7a2e\u554f\u984c",level:3}],u={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-\u7269\u4ef6\u5c0e\u5411oop\u5c6c\u6027property"},"\ud83e\udd16 \u7269\u4ef6\u5c0e\u5411(oop)~\u5c6c\u6027(Property)"),(0,a.kt)("p",null,"\u6bcf\u5929\u90fd\u5728\u601d\u8003\uff0c",(0,a.kt)("br",null),"\n\u5982\u679c\u4e8b\u60c5\u81ea\u5df1\u6703\u505a\u597d\u5c31\u597d\u4e86\uff0c",(0,a.kt)("br",null),"\n\u7a0b\u5f0f\u81ea\u5df1\u6703\u81ea\u52d5\u6aa2\u67e5\u5c31\u597d\u4e86\uff0c",(0,a.kt)("br",null),"\n\u4eca\u5929 C#\u4e5f\u6709\u81ea\u52d5\u6aa2\u67e5\u8b8a\u6578\u662f\u5426\u7b26\u5408\u8981\u6c42\u7684\u529f\u80fd\uff0c",(0,a.kt)("br",null),"\n\u6211\u5011\u6709\u8acb\u5c6c\u6027!"),(0,a.kt)("h3",{id:"\u8a2a\u554f\u5668-assessor"},"\u8a2a\u554f\u5668 (Assessor)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u628a\u8b8a\u6578\u6539\u70ba\u79c1\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"private int age;")),(0,a.kt)("li",{parentName:"ul"},"\u4e26\u52a0\u5165\u5169\u884c\u9650\u5236")),(0,a.kt)("h3",{id:"\u7bc4\u4f8b\u6211\u5011\u5efa\u7acb\u4e00\u500b\u72d7\u7684\u985e\u5225\u505a\u7df4\u7fd2"},"\u7bc4\u4f8b:\u6211\u5011\u5efa\u7acb\u4e00\u500b\u72d7\u7684\u985e\u5225\u505a\u7df4\u7fd2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace CsharpDemo\n{\n\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            Dog dog = new Dog();\n            //\u8a2d\u5b9a\u70ba\u4e09\u6b72\n            dog.SetAge(3);\n            Console.WriteLine(dog.GetAge());\n\n            //\u8a2d\u5b9a\u70ba-1\u6b72\n            dog.SetAge(-1);\n            Console.WriteLine(dog.GetAge());\n\n            Console.ReadKey();\n        }\n    }\n    //\u72d7\u7684\u985e\u5225\n    class Dog\n    {\n        //\u540d\u7a31\n        public string name;\n        //\u5e74\u9f61\n        private int age;\n\n        //\u8a2d\u5b9a\u5e74\u9f61\n        public void SetAge(int ageValue)\n        {\n            //\u5982\u679c\u5e74\u9f61\u70ba\u8ca0\u6578\u5c31\u6539\u62100\n            if (ageValue <= 0)\n            {\n                age = 0;\n            }\n            else\n            {\n                age = ageValue;\n            }\n        }\n        //\u56de\u50b3\u8a2d\u5b9a\u5f8c\u7684\u5e74\u9f61\n        public int GetAge()\n        {\n            return age;\n        }\n    }\n   }\n")),(0,a.kt)("p",null,"\u7d50\u679c:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"3",(0,a.kt)("br",null),"\n0")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u203b\u8a2a\u554f\u5668\u96d6\u7136\u89e3\u6c7a\u4e86\u554f\u984c\uff0c\u4f46\u5927\u5bb6\u9084\u662f\u7fd2\u6163\u628a\u5e74\u9f61\u4f5c\u70ba\u8b8a\u6578\u4f7f\u7528\u3002"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"\u5c6c\u6027\u5c31\u662f\u9019\u800c\u751f\u7684")),(0,a.kt)("h3",{id:"\u5c6c\u6027property"},"\u5c6c\u6027(Property)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c6c\u6027\u7684\u597d\u8655:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6709\u5c01\u88dd\u6027"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u9032\u884c\u5408\u6cd5\u6027\u7684\u6aa2\u67e5"),(0,a.kt)("li",{parentName:"ul"},"\u7b26\u5408\u8b8a\u6578\u7684\u4f7f\u7528\u65b9\u5f0f"))),(0,a.kt)("li",{parentName:"ul"},"\u7528\u6cd5:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7fd2\u6163\u5c07\u8b8a\u6578\u547d\u540d\u6210\u5c0f\u5beb\uff0c\u5c6c\u6027\u547d\u540d\u70ba\u5927\u5beb"))),(0,a.kt)("li",{parentName:"ul"},"\u5b9a\u7fa9\u4e86 get \u8207 set \u5169\u500b\u8a2a\u554f\u5668 \xa0\n\u2780get \u8a2a\u554f\u5668\u7528\u4f86\u8b80\u53d6\u8b8a\u6578\u7684\u503c\n\u2781set \u8a2a\u554f\u5668\u7528\u4f86\u4fee\u6539\u8b8a\u6578\u7684\u503c")),(0,a.kt)("h3",{id:"\u7bc4\u4f8b\u6211\u5011\u4f86\u5efa\u7acb\u4e00\u500b\u9d28\u5b50\u985e\u5225\u4f86\u7df4\u7fd2\u5427"},"\u7bc4\u4f8b:\u6211\u5011\u4f86\u5efa\u7acb\u4e00\u500b\u9d28\u5b50\u985e\u5225\u4f86\u7df4\u7fd2\u5427"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace CsharpDemo\n{\n\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            Duck duck = new Duck();\n            //\u8a2d\u5b9a\u70ba\u4e09\u6b72\n            duck.duckAge = 3;\n            Console.WriteLine(duck.duckAge);\n\n            //\u8a2d\u5b9a\u70ba-1\u6b72\n            duck.duckAge = -1;\n            Console.WriteLine(duck.duckAge);\n\n            Console.ReadKey();\n        }\n    }\n    /// <summary>\n    /// Day23-02\n    /// \u9d28\u7684\u985e\u5225\n    /// </summary>\n    class Duck\n    {\n        //\u540d\u7a31\n        public string name;\n        //\u5e74\u9f61\n        private int age;\n        //\u5c6c\u6027\n        public int duckAge\n        {\n            get//\u56de\u50b3\u503c\n            {\n                //\u56de\u50b3\u8a2d\u5b9a\u5f8c\u7684\u503c\n                return age;\n            }\n            set //\u8a2d\u5b9a\u503c\n            {\n                if (value <= 0)\n                {\n                    age = 0;\n                }\n                else\n                {\n                    age = value;\n                }\n            }\n        }\n    }\n  }\n")),(0,a.kt)("p",null,"\u7d50\u679c:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"3",(0,a.kt)("br",null),"\n0")),(0,a.kt)("h3",{id:"\u5c6c\u6027\u89e3\u6c7a\u4e86\u6211\u5011\u559c\u63db\u7528\u8b8a\u6578\u53c8\u53ef\u4ee5\u81ea\u52d5\u6aa2\u67e5\u4e26\u4e14\u53c8\u5177\u6709\u5c01\u88dd\u6027\u4e00\u6b21\u89e3\u6c7a\u4e09\u7a2e\u554f\u984c"},"\u5c6c\u6027\u89e3\u6c7a\u4e86\u6211\u5011\u559c\u63db\u7528\u8b8a\u6578\uff0c\u53c8\u53ef\u4ee5\u81ea\u52d5\u6aa2\u67e5\uff0c\u4e26\u4e14\u53c8\u5177\u6709\u5c01\u88dd\u6027\uff0c\u4e00\u6b21\u89e3\u6c7a\u4e09\u7a2e\u554f\u984c"))}d.isMDXComponent=!0}}]);