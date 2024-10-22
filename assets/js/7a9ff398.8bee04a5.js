"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[3783],{49613:(e,n,a)=>{a.d(n,{Zo:()=>m,kt:()=>g});var t=a(59496);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),o=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},m=function(e){var n=o(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=o(a),d=r,g=u["".concat(s,".").concat(d)]||u[d]||p[d]||i;return a?t.createElement(g,l(l({ref:n},m),{},{components:a})):t.createElement(g,l({ref:n},m))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[u]="string"==typeof e?e:r,l[1]=c;for(var o=2;o<i;o++)l[o]=a[o];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7160:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var t=a(88028),r=(a(59496),a(49613));const i={sidebar_position:5,description:"\u59d4\u6d3e (Delegate) - \u99ac\u6232\u5718(\u591a\u96bb\u52d5\u7269\u7248)",key:["\u59d4\u6d3e","Delegate"],tags:["\u59d4\u6d3e","Delegate"]},l="\ud83d\udcea \u99ac\u6232\u5718(\u591a\u96bb\u52d5\u7269\u7248)",c={unversionedId:"csDelegate/csDelegate2",id:"csDelegate/csDelegate2",title:"\ud83d\udcea \u99ac\u6232\u5718(\u591a\u96bb\u52d5\u7269\u7248)",description:"\u59d4\u6d3e (Delegate) - \u99ac\u6232\u5718(\u591a\u96bb\u52d5\u7269\u7248)",source:"@site/docs/csDelegate/csDelegate2.md",sourceDirName:"csDelegate",slug:"/csDelegate/csDelegate2",permalink:"/docs/csDelegate/csDelegate2",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/csDelegate/csDelegate2.md",tags:[{label:"\u59d4\u6d3e",permalink:"/docs/tags/\u59d4\u6d3e"},{label:"Delegate",permalink:"/docs/tags/delegate"}],version:"current",lastUpdatedAt:1729561312,formattedLastUpdatedAt:"2024\u5e7410\u670822\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"\u59d4\u6d3e (Delegate) - \u99ac\u6232\u5718(\u591a\u96bb\u52d5\u7269\u7248)",key:["\u59d4\u6d3e","Delegate"],tags:["\u59d4\u6d3e","Delegate"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcea \u99ac\u6232\u5718",permalink:"/docs/csDelegate/csDelegate1"},next:{title:"\ud83d\udcea \u591a\u9ede\u50b3\u9001\u59d4\u6d3e-\u99ac\u6232\u5718(\u591a\u96bb\u52d5\u7269\u7248)",permalink:"/docs/csDelegate/csDelegate3"}},s={},o=[{value:"1. \u65b0\u589e\u5404\u7a2e\u52d5\u7269",id:"1-\u65b0\u589e\u5404\u7a2e\u52d5\u7269",level:2},{value:"2. \u53d6\u6d88\u6389\u59d4\u6d3e\u50b3\u5165\u7684\u540d\u5b57",id:"2-\u53d6\u6d88\u6389\u59d4\u6d3e\u50b3\u5165\u7684\u540d\u5b57",level:2},{value:"3. \u4f7f\u7528\u8ff4\u5708\u5efa\u7acb\u52d5\u7269 List",id:"3-\u4f7f\u7528\u8ff4\u5708\u5efa\u7acb\u52d5\u7269-list",level:2},{value:"4. \u4f7f\u7528<code>foreach</code>\u57f7\u884c\u99ac\u6232\u5718",id:"4-\u4f7f\u7528foreach\u57f7\u884c\u99ac\u6232\u5718",level:2},{value:"\u5b8c\u6574\u7a0b\u5f0f\u78bc",id:"\u5b8c\u6574\u7a0b\u5f0f\u78bc",level:2}],m={toc:o},u="wrapper";function p(e){let{components:n,...a}=e;return(0,r.kt)(u,(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-\u99ac\u6232\u5718\u591a\u96bb\u52d5\u7269\u7248"},"\ud83d\udcea \u99ac\u6232\u5718(\u591a\u96bb\u52d5\u7269\u7248)"),(0,r.kt)("h2",{id:"1-\u65b0\u589e\u5404\u7a2e\u52d5\u7269"},"1. \u65b0\u589e\u5404\u7a2e\u52d5\u7269"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},' /// <summary>\n /// \u8c93\n /// </summary>\n public static void Cat()\n {\n  Console.WriteLine($"\u55b5\u55b5!");\n }\n\n /// <summary>\n /// \u9d28\n /// </summary>\n public static void Duck()\n {\n  Console.WriteLine($"\u5471\u5471!");\n }\n\n /// <summary>\n /// \u96de\n /// </summary>\n public static void Chicken()\n {\n  Console.WriteLine($"\u5495\u5495!");\n }\n')),(0,r.kt)("h2",{id:"2-\u53d6\u6d88\u6389\u59d4\u6d3e\u50b3\u5165\u7684\u540d\u5b57"},"2. \u53d6\u6d88\u6389\u59d4\u6d3e\u50b3\u5165\u7684\u540d\u5b57"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'    /// <summary>\n    /// \u5b9a\u7fa9\u59d4\u6d3e\n    /// </summary>\n    /// <param name="name">\u59d3\u540d</param>\n    private delegate void Animal();\n\n    /// <summary>\n    /// \u5b9a\u7fa9\u51fd\u5f0f\n    /// </summary>\n    /// <param name="animal">\u52d5\u7269\u7684\u59d4\u6d3e</param>\n    /// <param name="name">\u52d5\u7269\u540d\u5b57</param>\n    private static void RunCircus(Animal animal)\n    {\n        animal();\n    }\n')),(0,r.kt)("h2",{id:"3-\u4f7f\u7528\u8ff4\u5708\u5efa\u7acb\u52d5\u7269-list"},"3. \u4f7f\u7528\u8ff4\u5708\u5efa\u7acb\u52d5\u7269 List"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"   List<Animal> deleAnimal = new List<Animal>()\n    {\n        new Animal(Dog),\n        new Animal(Cat),\n        new Animal(Duck),\n        new Animal(Chicken)\n    };\n")),(0,r.kt)("h2",{id:"4-\u4f7f\u7528foreach\u57f7\u884c\u99ac\u6232\u5718"},"4. \u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"h2"},"foreach"),"\u57f7\u884c\u99ac\u6232\u5718"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"}," foreach(var animalFunc in deleAnimal)\n {\n  RunCircus(animalFunc);\n }\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u5b8c\u6574\u7a0b\u5f0f\u78bc"},"\u5b8c\u6574\u7a0b\u5f0f\u78bc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\n\nnamespace csharpExercise.DelegateExercise\n{\n    public class DelegateExercise2\n    {\n        /// <summary>\n        /// \u4e3b\u7a0b\u5f0f\n        /// </summary>\n        public void Main()\n        {\n            List<Animal> deleAnimal = new List<Animal>()\n            {\n                new Animal(Dog),\n                new Animal(Cat),\n                new Animal(Duck),\n                new Animal(Chicken)\n            };\n\n\n            foreach(var animalFunc in deleAnimal)\n            {\n                RunCircus(animalFunc);\n            }\n        }\n\n\n        /// <summary>\n        /// \u5b9a\u7fa9\u59d4\u6d3e\n        /// </summary>\n        private delegate void Animal();\n\n        /// <summary>\n        /// \u5b9a\u7fa9\u51fd\u5f0f\n        /// </summary>\n        /// <param name="animal">\u52d5\u7269\u7684\u59d4\u6d3e</param>\n        private static void RunCircus(Animal animal)\n        {\n            animal();\n        }\n\n        /// <summary>\n        /// \u5c0f\u72d7\u51fd\u5f0f\n        /// </summary>\n        private static void Dog()\n        {\n            Console.WriteLine($"\u6c6a\u6c6a!");\n        }\n\n        /// <summary>\n        /// \u8c93\n        /// </summary>\n        public static void Cat()\n        {\n            Console.WriteLine($"\u55b5\u55b5!");\n        }\n\n        /// <summary>\n        /// \u9d28\n        /// </summary>\n        public static void Duck()\n        {\n            Console.WriteLine($"\u5471\u5471!");\n        }\n\n        /// <summary>\n        /// \u96de\n        /// </summary>\n        public static void Chicken()\n        {\n            Console.WriteLine($"\u5495\u5495!");\n        }\n    }\n}\n\n')))}p.isMDXComponent=!0}}]);