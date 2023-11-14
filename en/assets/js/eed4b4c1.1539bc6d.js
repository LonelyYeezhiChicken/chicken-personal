"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[1115],{49613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,k=s["".concat(u,".").concat(m)]||s[m]||d[m]||l;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(88028),a=(n(59496),n(49613));const l={sidebar_position:35,description:"\u4ee3\u7406\u6a21\u5f0f (Proxy Pattern)",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u4ee3\u7406\u6a21\u5f0f","Proxy Pattern"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern"]},i="\ud83d\udca1 \u4ee3\u7406\u6a21\u5f0f",o={unversionedId:"designPattern/structuralPattern/proxy",id:"designPattern/structuralPattern/proxy",title:"\ud83d\udca1 \u4ee3\u7406\u6a21\u5f0f",description:"\u4ee3\u7406\u6a21\u5f0f (Proxy Pattern)",source:"@site/docs/designPattern/structuralPattern/proxy.md",sourceDirName:"designPattern/structuralPattern",slug:"/designPattern/structuralPattern/proxy",permalink:"/en/docs/designPattern/structuralPattern/proxy",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/designPattern/structuralPattern/proxy.md",tags:[{label:"\u8a2d\u8a08\u6a21\u5f0f",permalink:"/en/docs/tags/\u8a2d\u8a08\u6a21\u5f0f"},{label:"Design Pattern",permalink:"/en/docs/tags/design-pattern"}],version:"current",lastUpdatedAt:1699970344,formattedLastUpdatedAt:"Nov 14, 2023",sidebarPosition:35,frontMatter:{sidebar_position:35,description:"\u4ee3\u7406\u6a21\u5f0f (Proxy Pattern)",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u4ee3\u7406\u6a21\u5f0f","Proxy Pattern"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udca1 \u4eab\u5143\u6a21\u5f0f",permalink:"/en/docs/designPattern/structuralPattern/flyweight"},next:{title:"\u884c\u70ba\u6a21\u5f0f",permalink:"/en/docs/category/\u884c\u70ba\u6a21\u5f0f"}},u={},c=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u4ee3\u7406\u6a21\u5f0f\u4e3b\u8981\u89e3\u6c7a\u4ee5\u4e0b\u554f\u984c",id:"\u4ee3\u7406\u6a21\u5f0f\u4e3b\u8981\u89e3\u6c7a\u4ee5\u4e0b\u554f\u984c",level:3},{value:"\u4ee3\u7406\u6a21\u5f0f\u5305\u542b\u4ee5\u4e0b\u89d2\u8272",id:"\u4ee3\u7406\u6a21\u5f0f\u5305\u542b\u4ee5\u4e0b\u89d2\u8272",level:3},{value:"\u7bc4\u4f8b",id:"\u7bc4\u4f8b",level:2},{value:"1. \u5b9a\u7fa9\u62bd\u8c61\u4e3b\u984c",id:"1-\u5b9a\u7fa9\u62bd\u8c61\u4e3b\u984c",level:3},{value:"2. \u5be6\u4f5c\u5be6\u969b\u4e3b\u984c",id:"2-\u5be6\u4f5c\u5be6\u969b\u4e3b\u984c",level:3},{value:"3. \u5be6\u4f5c\u4ee3\u7406",id:"3-\u5be6\u4f5c\u4ee3\u7406",level:3},{value:"4. \u5be6\u969b\u4f7f\u7528",id:"4-\u5be6\u969b\u4f7f\u7528",level:3},{value:"5. \u7d50\u679c",id:"5-\u7d50\u679c",level:3}],p={toc:c},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-\u4ee3\u7406\u6a21\u5f0f"},"\ud83d\udca1 \u4ee3\u7406\u6a21\u5f0f"),(0,a.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.kt)("p",null,"\u4ee3\u7406\u6a21\u5f0f\u662f\u4e00\u7a2e\u7d50\u69cb\u578b\u8a2d\u8a08\u6a21\u5f0f\uff0c\u7528\u65bc\u63a7\u5236\u5c0d\u5176\u4ed6\u7269\u4ef6\u7684\u547c\u53eb\uff0c\u5b83\u63d0\u4f9b\u4e86\u4e00\u500b\u4ee3\u7406\u7269\u4ef6\uff0c\u5141\u8a31\u4ee3\u7406\u7269\u4ef6\u63a7\u5236\u5ba2\u6236\u7aef\u5c0d\u5be6\u969b\u7269\u4ef6\u7684\u547c\u53eb"),(0,a.kt)("p",null,"\u4ee3\u7406\u6a21\u5f0f\u7684\u6838\u5fc3\u601d\u60f3\u662f\u5728\u4e0d\u6539\u8b8a\u5be6\u969b\u7269\u4ef6\u7684\u60c5\u6cc1\u4e0b\uff0c\u63d0\u4f9b\u4e00\u500b\u4ee3\u7406\u7269\u4ef6\uff0c\u5ba2\u6236\u7aef\u901a\u904e\u4ee3\u7406\u7269\u4ef6\u547c\u53eb\u5be6\u969b\u7269\u4ef6"),(0,a.kt)("p",null,"\u9019\u53ef\u4ee5\u7528\u65bc\u5be6\u73fe\u4e0d\u540c\u7684\u529f\u80fd\uff0c\u4f8b\u5982\u9060\u7a0b\u4ee3\u7406\u3001\u865b\u64ec\u4ee3\u7406\u3001\u4fdd\u8b77\u4ee3\u7406\u7b49"),(0,a.kt)("h3",{id:"\u4ee3\u7406\u6a21\u5f0f\u4e3b\u8981\u89e3\u6c7a\u4ee5\u4e0b\u554f\u984c"},"\u4ee3\u7406\u6a21\u5f0f\u4e3b\u8981\u89e3\u6c7a\u4ee5\u4e0b\u554f\u984c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u512a\u9ede",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9060\u7a0b\u4ee3\u7406\uff1a\u4ee3\u7406\u6a21\u5f0f\u53ef\u4ee5\u7528\u65bc\u5be6\u73fe\u9060\u7a0b\u4ee3\u7406\uff0c\u5141\u8a31\u5ba2\u6236\u7aef\u547c\u53eb\u9060\u7a0b\u7269\u4ef6\uff0c\u5c31\u50cf\u547c\u53eb\u672c\u5730\u7269\u4ef6\u4e00\u6a23"),(0,a.kt)("li",{parentName:"ul"},"\u865b\u64ec\u4ee3\u7406\uff1a\u4ee3\u7406\u6a21\u5f0f\u53ef\u4ee5\u7528\u65bc\u5be6\u73fe\u865b\u64ec\u4ee3\u7406\uff0c\u5ef6\u9072\u5be6\u969b\u7269\u4ef6\u7684\u5275\u5efa\u548c\u521d\u59cb\u5316\uff0c\u4ee5\u63d0\u9ad8\u6027\u80fd"),(0,a.kt)("li",{parentName:"ul"},"\u4fdd\u8b77\u4ee3\u7406\uff1a\u4ee3\u7406\u6a21\u5f0f\u53ef\u4ee5\u7528\u65bc\u5be6\u73fe\u4fdd\u8b77\u4ee3\u7406\uff0c\u63a7\u5236\u5ba2\u6236\u7aef\u5c0d\u5be6\u969b\u7269\u4ef6\u7684\u547c\u53eb\u6b0a\u9650"))),(0,a.kt)("li",{parentName:"ul"},"\u7f3a\u9ede",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u589e\u52a0\u8907\u96dc\u6027\uff1a\u5f15\u5165\u4ee3\u7406\u7269\u4ef6\u53ef\u80fd\u589e\u52a0\u7cfb\u7d71\u7684\u8907\u96dc\u6027\uff0c\u9700\u8981\u984d\u5916\u7684\u4ee3\u7406\u985e\u5225\u548c\u4ee3\u7406\u908f\u8f2f")))),(0,a.kt)("h3",{id:"\u4ee3\u7406\u6a21\u5f0f\u5305\u542b\u4ee5\u4e0b\u89d2\u8272"},"\u4ee3\u7406\u6a21\u5f0f\u5305\u542b\u4ee5\u4e0b\u89d2\u8272"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5ba2\u6236\u7aef\uff08Client\uff09\uff1a\u4f7f\u7528\u4ee3\u7406\u7269\u4ef6\u7684\u7269\u4ef6\uff0c\u4e0d\u76f4\u63a5\u547c\u53eb\u5be6\u969b\u7269\u4ef6\uff0c\u800c\u662f\u901a\u904e\u4ee3\u7406\u7269\u4ef6\u9032\u884c\u547c\u53eb\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u62bd\u8c61\u4e3b\u984c\uff08Subject\uff09\uff1a\u5b9a\u7fa9\u4e86\u5be6\u969b\u7269\u4ef6\u548c\u4ee3\u7406\u7269\u4ef6\u7684\u5171\u540c\u4ecb\u9762\uff0c\u5ba2\u6236\u7aef\u901a\u5e38\u9762\u5411\u6b64\u4ecb\u9762\u9032\u884c\u547c\u53eb\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5be6\u969b\u4e3b\u984c\uff08Real Subject\uff09\uff1a\u5be6\u969b\u7684\u7269\u4ef6\uff0c\u4ee3\u7406\u6a21\u5f0f\u7684\u76ee\u7684\u662f\u63a7\u5236\u5c0d\u5be6\u969b\u4e3b\u984c\u7684\u547c\u53eb\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4ee3\u7406\uff08Proxy\uff09\uff1a\u4ee3\u7406\u7269\u4ef6\uff0c\u5be6\u73fe\u4e86\u62bd\u8c61\u4e3b\u984c\u4ecb\u9762\uff0c\u901a\u5e38\u5305\u542b\u5c0d\u5be6\u969b\u4e3b\u984c\u7684\u5f15\u7528\uff0c\u4e26\u5728\u5fc5\u8981\u6642\u5c0d\u547c\u53eb\u9032\u884c\u63a7\u5236\u3002")),(0,a.kt)("h2",{id:"\u7bc4\u4f8b"},"\u7bc4\u4f8b"),(0,a.kt)("h3",{id:"1-\u5b9a\u7fa9\u62bd\u8c61\u4e3b\u984c"},"1. \u5b9a\u7fa9\u62bd\u8c61\u4e3b\u984c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"// \u62bd\u8c61\u4e3b\u984c\npublic interface ISubject\n{\n    void Request();\n}\n")),(0,a.kt)("h3",{id:"2-\u5be6\u4f5c\u5be6\u969b\u4e3b\u984c"},"2. \u5be6\u4f5c\u5be6\u969b\u4e3b\u984c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// \u5be6\u969b\u4e3b\u984c\npublic class RealSubject : ISubject\n{\n    public void Request()\n    {\n        Console.WriteLine("\u57f7\u884c\u5be6\u969b\u4e3b\u984c\u7684\u8acb\u6c42");\n    }\n}\n')),(0,a.kt)("h3",{id:"3-\u5be6\u4f5c\u4ee3\u7406"},"3. \u5be6\u4f5c\u4ee3\u7406"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"// \u4ee3\u7406\npublic class Proxy : ISubject\n{\n    private RealSubject realSubject;\n\n    public void Request()\n    {\n        if (realSubject == null)\n        {\n            realSubject = new RealSubject();\n        }\n\n        // \u5728\u9019\u88e1\u53ef\u4ee5\u6dfb\u52a0\u63a7\u5236\u908f\u8f2f\n\n        realSubject.Request();\n    }\n}\n")),(0,a.kt)("h3",{id:"4-\u5be6\u969b\u4f7f\u7528"},"4. \u5be6\u969b\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"class Program\n{\n    static void Main(string[] args)\n    {\n        ISubject subject = new Proxy();\n        subject.Request();\n    }\n}\n")),(0,a.kt)("h3",{id:"5-\u7d50\u679c"},"5. \u7d50\u679c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8f38\u51fa:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u57f7\u884c\u5be6\u969b\u4e3b\u984c\u7684\u8acb\u6c42\n")),(0,a.kt)("hr",null),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728\u9019\u500b\u7bc4\u4f8b\u4e2d\uff0c\u4ee3\u7406\u6a21\u5f0f\u5141\u8a31\u4ee3\u7406\u7269\u4ef6\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"Proxy"),"\uff09\u63a7\u5236\u5c0d\u5be6\u969b\u4e3b\u984c\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"RealSubject"),"\uff09\u7684\u547c\u53eb"),(0,a.kt)("p",{parentName:"blockquote"},"\u5ba2\u6236\u7aef\u901a\u904e\u4ee3\u7406\u7269\u4ef6\u547c\u53eb\u5be6\u969b\u4e3b\u984c\uff0c\u4e26\u4e14\u4ee3\u7406\u7269\u4ef6\u53ef\u4ee5\u5728\u5fc5\u8981\u6642\u6dfb\u52a0\u63a7\u5236\u908f\u8f2f\uff0c\u800c\u4e0d\u9700\u8981\u6539\u8b8a\u5be6\u969b\u4e3b\u984c\u7684\u7a0b\u5f0f\u78bc"),(0,a.kt)("p",{parentName:"blockquote"},"\u9019\u7a2e\u7d50\u69cb\u53ef\u4ee5\u7528\u65bc\u5be6\u73fe\u5404\u7a2e\u4ee3\u7406\u529f\u80fd\uff0c\u4f8b\u5982\u9060\u7a0b\u4ee3\u7406\u3001\u865b\u64ec\u4ee3\u7406\u3001\u4fdd\u8b77\u4ee3\u7406\u7b49\u3002")))}d.isMDXComponent=!0}}]);