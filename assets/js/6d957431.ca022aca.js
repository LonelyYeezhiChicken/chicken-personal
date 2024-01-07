"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[8542],{49613:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),g=a,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||i;return t?r.createElement(m,l(l({ref:n},p),{},{components:t})):r.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},53835:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(88028),a=(t(59496),t(49613));const i={sidebar_position:10,description:"\u55ae\u4f8b\u6a21\u5f0f (Singleton Pattern)",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u55ae\u4f8b\u6a21\u5f0f","Singleton Pattern"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern"]},l="\ud83d\udca1 \u55ae\u4f8b\u6a21\u5f0f",o={unversionedId:"designPattern/creationalPattern/singleton",id:"designPattern/creationalPattern/singleton",title:"\ud83d\udca1 \u55ae\u4f8b\u6a21\u5f0f",description:"\u55ae\u4f8b\u6a21\u5f0f (Singleton Pattern)",source:"@site/docs/designPattern/creationalPattern/singleton.md",sourceDirName:"designPattern/creationalPattern",slug:"/designPattern/creationalPattern/singleton",permalink:"/docs/designPattern/creationalPattern/singleton",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/designPattern/creationalPattern/singleton.md",tags:[{label:"\u8a2d\u8a08\u6a21\u5f0f",permalink:"/docs/tags/\u8a2d\u8a08\u6a21\u5f0f"},{label:"Design Pattern",permalink:"/docs/tags/design-pattern"}],version:"current",lastUpdatedAt:1704630401,formattedLastUpdatedAt:"2024\u5e741\u67087\u65e5",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"\u55ae\u4f8b\u6a21\u5f0f (Singleton Pattern)",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u55ae\u4f8b\u6a21\u5f0f","Singleton Pattern"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udca1 \u5275\u9020\u8005\u6a21\u5f0f",permalink:"/docs/designPattern/creationalPattern/builder"},next:{title:"\u7d50\u69cb\u6a21\u5f0f",permalink:"/docs/category/\u7d50\u69cb\u6a21\u5f0f"}},s={},c=[{value:"Singleton Pattern",id:"singleton-pattern",level:2},{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u55ae\u4f8b\u6a21\u5f0f\u4e3b\u8981\u89e3\u6c7a\u4ee5\u4e0b\u5169\u500b\u554f\u984c",id:"\u55ae\u4f8b\u6a21\u5f0f\u4e3b\u8981\u89e3\u6c7a\u4ee5\u4e0b\u5169\u500b\u554f\u984c",level:3},{value:"\u55ae\u4f8b\u6a21\u5f0f\u5305\u542b",id:"\u55ae\u4f8b\u6a21\u5f0f\u5305\u542b",level:3},{value:"\u7bc4\u4f8b",id:"\u7bc4\u4f8b",level:2},{value:"1. \u552f\u4e00\u5be6\u4f8b\uff08Singleton Instance\uff09",id:"1-\u552f\u4e00\u5be6\u4f8bsingleton-instance",level:3},{value:"2. \u55ae\u4f8b\u985e\u5225\uff08Singleton Class\uff09",id:"2-\u55ae\u4f8b\u985e\u5225singleton-class",level:3},{value:"3. \u5275\u5efa\u65b9\u6cd5\uff08Creation Method\uff09",id:"3-\u5275\u5efa\u65b9\u6cd5creation-method",level:3},{value:"4. \u5be6\u969b\u4f7f\u7528",id:"4-\u5be6\u969b\u4f7f\u7528",level:3},{value:"5. \u7d50\u679c",id:"5-\u7d50\u679c",level:3}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-\u55ae\u4f8b\u6a21\u5f0f"},"\ud83d\udca1 \u55ae\u4f8b\u6a21\u5f0f"),(0,a.kt)("h2",{id:"singleton-pattern"},"Singleton Pattern"),(0,a.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.kt)("p",null,"\u55ae\u4f8b\u6a21\u5f0f\u7528\u65bc\u78ba\u4fdd\u4e00\u500b\u985e\u5225\u50c5\u6709\u4e00\u500b\u5be6\u4f8b\u5b58\u5728\uff0c\u4e26\u63d0\u4f9b\u4e00\u500b\u5168\u57df\u8a2a\u554f\u9ede\u4f86\u53d6\u5f97\u9019\u500b\u5be6\u4f8b\u3002"),(0,a.kt)("h3",{id:"\u55ae\u4f8b\u6a21\u5f0f\u4e3b\u8981\u89e3\u6c7a\u4ee5\u4e0b\u5169\u500b\u554f\u984c"},"\u55ae\u4f8b\u6a21\u5f0f\u4e3b\u8981\u89e3\u6c7a\u4ee5\u4e0b\u5169\u500b\u554f\u984c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u512a\u9ede",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u63a7\u5236\u5be6\u4f8b\u6578\u91cf\uff1a\u55ae\u4f8b\u6a21\u5f0f\u78ba\u4fdd\u4e00\u500b\u985e\u5225\u53ea\u80fd\u6709\u4e00\u500b\u5be6\u4f8b\u3002\u9019\u5c0d\u65bc\u67d0\u4e9b\u5834\u666f\u5f88\u6709\u7528\uff0c\u4f8b\u5982: \u9650\u5236\u7cfb\u7d71\u4e2d\u67d0\u4e9b\u8cc7\u6e90\u7684\u4f7f\u7528\u91cf\u6216\u78ba\u4fdd\u67d0\u500b\u7269\u4ef6\u7684\u72c0\u614b\u5168\u57df\u7684"),(0,a.kt)("li",{parentName:"ol"},"\u63d0\u4f9b\u5168\u57df\u8a2a\u554f\u9ede\uff1a\u55ae\u4f8b\u6a21\u5f0f\u63d0\u4f9b\u4e00\u500b\u5168\u57df\u7684\u65b9\u5f0f\u4f86\u8a2a\u554f\u552f\u4e00\u5be6\u4f8b\u3002\u9019\u4f7f\u5f97\u5176\u4ed6\u90e8\u5206\u80fd\u5920\u8f15\u9b06\u5730\u53d6\u5f97\u9019\u500b\u5be6\u4f8b\u4e26\u9032\u884c\u64cd\u4f5c\uff0c\u800c\u4e0d\u9700\u8981\u77e5\u9053\u8a73\u7d30\u7684\u5be6\u4f8b\u5275\u5efa\u908f\u8f2f"))),(0,a.kt)("li",{parentName:"ul"},"\u7f3a\u9ede",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u70ba\u4e86\u89e3\u6c7a\u9019\u5169\u500b\u554f\u984c\uff0c\u5c0e\u81f4\u55ae\u4f8b\u6a21\u5f0f\u9055\u53cd\u55ae\u4e00\u539f\u5247"),(0,a.kt)("li",{parentName:"ul"},"\u55ae\u4e00\u8077\u8cac\u539f\u5247\u5f37\u8abf\u4e00\u500b\u985e\u5225\u61c9\u8a72\u53ea\u6709\u4e00\u500b\u8b8a\u5316\u7684\u539f\u56e0\uff0c\u5373\u53ea\u6709\u4e00\u500b\u8077\u8cac\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u55ae\u4f8b\u6a21\u5f0f\u5728\u4fdd\u8b77\u552f\u4e00\u5be6\u4f8b\u7684\u540c\u6642\uff0c\u5f80\u5f80\u4e5f\u5305\u542b\u4e86\u8a72\u985e\u5225\u7684\u5275\u5efa\u908f\u8f2f\uff0c\u5c0e\u81f4\u9019\u500b\u985e\u5225\u627f\u64d4\u4e86\u5169\u500b\u8077\u8cac")))),(0,a.kt)("h3",{id:"\u55ae\u4f8b\u6a21\u5f0f\u5305\u542b"},"\u55ae\u4f8b\u6a21\u5f0f\u5305\u542b"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u55ae\u4f8b\u985e\u5225\uff08Singleton Class\uff09\uff1a\u78ba\u4fdd\u53ea\u6709\u4e00\u500b\u5be6\u4f8b\u5b58\u5728\u4e26\u63d0\u4f9b\u4e00\u500b\u5168\u57df\u8a2a\u554f\u9ede\u4f86\u53d6\u5f97\u9019\u500b\u552f\u4e00\u5be6\u4f8b\uff0c\u9019\u500b\u985e\u5225\u6703\u5c07\u5176\u69cb\u9020\u51fd\u6578\u8a2d\u70ba\u79c1\u6709\uff08private\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u552f\u4e00\u5be6\u4f8b\uff08Singleton Instance\uff09\uff1a\u9019\u662f\u55ae\u4f8b\u6a21\u5f0f\u4e2d\u552f\u4e00\u5b58\u5728\u7684\u5be6\u4f8b\uff0c\u8a72\u5be6\u4f8b\u901a\u5e38\u662f\u7531\u55ae\u4f8b\u985e\u5225\u5728\u5167\u90e8\u81ea\u884c\u5275\u5efa\u4e26\u4fdd\u6301\u8457"),(0,a.kt)("li",{parentName:"ol"},"\u5275\u5efa\u65b9\u6cd5\uff08Creation Method\uff09\uff1a\u901a\u5e38\u662f\u4e00\u500b\u975c\u614b\uff08static\uff09\u65b9\u6cd5\uff0c\u8ca0\u8cac\u5728\u9700\u8981\u6642\u5275\u5efa\u552f\u4e00\u5be6\u4f8b\u4e26\u8fd4\u56de\u7d66\u547c\u53eb\u8005")),(0,a.kt)("h2",{id:"\u7bc4\u4f8b"},"\u7bc4\u4f8b"),(0,a.kt)("p",null,"\u4ee5\u300c\u5bb6\u300d\u70ba\u4f8b\uff0c\u623f\u5b50\u5c31\u53ef\u4ee5\u8996\u70ba\u4e00\u500b\u985e\u5225\uff0c\u800c\u9019\u500b\u985e\u5225\u53ea\u80fd\u6709\u4e00\u500b\u5be6\u4f8b\uff0c\u5373\u9019\u5ea7\u623f\u5b50\u3002\u5728\u9019\u500b\u4f8b\u5b50\u4e2d\uff0c\u623f\u5b50\u7684\u5efa\u9020\u8207\u62c6\u9664\u662f\u7531\u623f\u5c4b\u516c\u53f8\u638c\u7ba1\u7684\uff0c\u5b83\u5011\u5141\u8a31\u4f60\u900f\u904e\u7279\u5b9a\u7684\u6a5f\u5236\uff0c\u53ea\u80fd\u53d6\u5f97\u9019\u4e00\u5ea7\u7279\u5b9a\u7684\u623f\u5b50\u5be6\u4f8b"),(0,a.kt)("h3",{id:"1-\u552f\u4e00\u5be6\u4f8bsingleton-instance"},"1. \u552f\u4e00\u5be6\u4f8b\uff08Singleton Instance\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"    // \u5ba3\u544a\u4e00\u500b\u79c1\u6709\u975c\u614b\u8b8a\u6578\u4f86\u4fdd\u5b58\u552f\u4e00\u7684\u5be6\u4f8b\n    private static House instance;\n")),(0,a.kt)("h3",{id:"2-\u55ae\u4f8b\u985e\u5225singleton-class"},"2. \u55ae\u4f8b\u985e\u5225\uff08Singleton Class\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'public class House\n{\n    // \u5ba3\u544a\u4e00\u500b\u79c1\u6709\u975c\u614b\u8b8a\u6578\u4f86\u4fdd\u5b58\u552f\u4e00\u7684\u5be6\u4f8b\n    private static House instance;\n\n    // \u5ba3\u544a\u79c1\u6709\u5efa\u69cb\u51fd\u5f0f\uff0c\u9632\u6b62\u5916\u90e8\u5be6\u4f8b\u5316\n    private House()\n    {\n        // \u5728\u6b64\u8655\u521d\u59cb\u5316\u623f\u5b50\u7684\u4e00\u4e9b\u5c6c\u6027\n    }\n\n    public void OpenDoor()\n    {\n        Console.WriteLine("\u623f\u5b50\u7684\u9580\u6253\u958b\u4e86\u3002");\n    }\n}\n')),(0,a.kt)("h3",{id:"3-\u5275\u5efa\u65b9\u6cd5creation-method"},"3. \u5275\u5efa\u65b9\u6cd5\uff08Creation Method\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'public class House\n{\n    // \u5ba3\u544a\u4e00\u500b\u79c1\u6709\u975c\u614b\u8b8a\u6578\u4f86\u4fdd\u5b58\u552f\u4e00\u7684\u5be6\u4f8b\n    private static House instance;\n\n    // \u5ba3\u544a\u79c1\u6709\u5efa\u69cb\u51fd\u5f0f\uff0c\u9632\u6b62\u5916\u90e8\u5be6\u4f8b\u5316\n    private House()\n    {\n        // \u5728\u6b64\u8655\u521d\u59cb\u5316\u623f\u5b50\u7684\u4e00\u4e9b\u5c6c\u6027\n    }\n\n    // \u63d0\u4f9b\u4e00\u500b\u5168\u57df\u7684\u8a2a\u554f\u9ede\uff0c\u8b93\u5ba2\u6236\u7aef\u7a0b\u5f0f\u78bc\u53ef\u4ee5\u53d6\u5f97\u9019\u552f\u4e00\u7684\u5be6\u4f8b\n    public static House GetInstance()\n    {\n        // \u5982\u679c\u9084\u6c92\u6709\u5efa\u7acb\u5be6\u4f8b\uff0c\u5247\u5efa\u7acb\u4e00\u500b\u65b0\u7684\u5be6\u4f8b\n        if (instance == null)\n        {\n            instance = new House();\n        }\n\n        // \u56de\u50b3\u552f\u4e00\u7684\u5be6\u4f8b\n        return instance;\n    }\n\n    public void OpenDoor()\n    {\n        Console.WriteLine("\u623f\u5b50\u7684\u9580\u6253\u958b\u4e86\u3002");\n    }\n}\n')),(0,a.kt)("h3",{id:"4-\u5be6\u969b\u4f7f\u7528"},"4. \u5be6\u969b\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'public class Program\n{\n    static void Main(string[] args)\n    {\n        // \u53d6\u5f97\u623f\u5b50\u7684\u5be6\u4f8b\n        House myHouse = House.GetInstance();\n\n        // \u5617\u8a66\u53d6\u5f97\u53e6\u4e00\u500b\u5be6\u4f8b\uff0c\u4f46\u56e0\u70ba\u55ae\u4f8b\u6a21\u5f0f\u7684\u9650\u5236\uff0c\u5be6\u969b\u4e0a\u6703\u53d6\u5f97\u540c\u4e00\u500b\u5be6\u4f8b\n        House anotherHouse = House.GetInstance();\n\n        // \u6aa2\u67e5\u5169\u500b\u5be6\u4f8b\u662f\u5426\u76f8\u540c\n        if (myHouse == anotherHouse)\n        {\n            Console.WriteLine("\u5169\u500b\u623f\u5b50\u5be6\u4f8b\u662f\u76f8\u540c\u7684");\n        }\n        else\n        {\n            Console.WriteLine("\u9019\u88e1\u4e0d\u61c9\u8a72\u88ab\u57f7\u884c\uff0c\u56e0\u70ba\u55ae\u4f8b\u6a21\u5f0f\u9650\u5236\u4e86\u53ea\u80fd\u6709\u4e00\u500b\u5be6\u4f8b");\n        }\n\n        // \u4f7f\u7528\u623f\u5b50\u7684\u65b9\u6cd5\n        myHouse.OpenDoor();\n\n        // \u8f38\u51fa\u7d50\u679c\uff1a\n        // \u5169\u500b\u623f\u5b50\u5be6\u4f8b\u662f\u76f8\u540c\u7684\u3002\n        // \u623f\u5b50\u7684\u9580\u6253\u958b\u4e86\u3002\n    }\n}\n')),(0,a.kt)("h3",{id:"5-\u7d50\u679c"},"5. \u7d50\u679c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8f38\u51fa:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"    \u5169\u500b\u623f\u5b50\u5be6\u4f8b\u662f\u76f8\u540c\u7684\n    \u623f\u5b50\u7684\u9580\u6253\u958b\u4e86\n")))}d.isMDXComponent=!0}}]);