"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[6025],{49613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81027:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(88028),o=(n(59496),n(49613));const a={sidebar_position:15,description:"\u7d44\u5408\u6a21\u5f0f  (Composite Pattern)",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u7d44\u5408\u6a21\u5f0f","Composite Pattern"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern"]},i="\ud83d\udca1 \u7d44\u5408\u6a21\u5f0f",l={unversionedId:"designPattern/structuralPattern/composite",id:"designPattern/structuralPattern/composite",title:"\ud83d\udca1 \u7d44\u5408\u6a21\u5f0f",description:"\u7d44\u5408\u6a21\u5f0f  (Composite Pattern)",source:"@site/docs/designPattern/structuralPattern/composite.md",sourceDirName:"designPattern/structuralPattern",slug:"/designPattern/structuralPattern/composite",permalink:"/docs/designPattern/structuralPattern/composite",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/designPattern/structuralPattern/composite.md",tags:[{label:"\u8a2d\u8a08\u6a21\u5f0f",permalink:"/docs/tags/\u8a2d\u8a08\u6a21\u5f0f"},{label:"Design Pattern",permalink:"/docs/tags/design-pattern"}],version:"current",lastUpdatedAt:1709356183,formattedLastUpdatedAt:"2024\u5e743\u67082\u65e5",sidebarPosition:15,frontMatter:{sidebar_position:15,description:"\u7d44\u5408\u6a21\u5f0f  (Composite Pattern)",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u7d44\u5408\u6a21\u5f0f","Composite Pattern"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udca1 \u6a4b\u63a5\u6a21\u5f0f",permalink:"/docs/designPattern/structuralPattern/bridge"},next:{title:"\ud83d\udca1 \u88dd\u98fe\u8005\u6a21\u5f0f",permalink:"/docs/designPattern/structuralPattern/decorator"}},p={},c=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u7d44\u5408\u6a21\u5f0f\u4e3b\u8981\u89e3\u6c7a\u4ee5\u4e0b\u554f\u984c",id:"\u7d44\u5408\u6a21\u5f0f\u4e3b\u8981\u89e3\u6c7a\u4ee5\u4e0b\u554f\u984c",level:2},{value:"\u512a\u9ede",id:"\u512a\u9ede",level:3},{value:"\u7f3a\u9ede",id:"\u7f3a\u9ede",level:3},{value:"\u7d44\u5408\u6a21\u5f0f\u5305\u542b",id:"\u7d44\u5408\u6a21\u5f0f\u5305\u542b",level:3},{value:"\u7bc4\u4f8b",id:"\u7bc4\u4f8b",level:2},{value:"1. \u5b9a\u7fa9 Component \u4ecb\u9762",id:"1-\u5b9a\u7fa9-component-\u4ecb\u9762",level:3},{value:"2. \u5b9a\u7fa9\u8449\u7bc0\u9ede\u89d2\u8272",id:"2-\u5b9a\u7fa9\u8449\u7bc0\u9ede\u89d2\u8272",level:3},{value:"3. \u5b9a\u7fa9\u5bb9\u5668\u89d2\u8272",id:"3-\u5b9a\u7fa9\u5bb9\u5668\u89d2\u8272",level:3},{value:"4. \u4e3b\u7a0b\u5f0f",id:"4-\u4e3b\u7a0b\u5f0f",level:3},{value:"5. \u7d50\u679c",id:"5-\u7d50\u679c",level:3}],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-\u7d44\u5408\u6a21\u5f0f"},"\ud83d\udca1 \u7d44\u5408\u6a21\u5f0f"),(0,o.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,o.kt)("p",null,"\u7d44\u5408\u6a21\u5f0f\u662f\u4e00\u7a2e\u7d50\u69cb\u6027\u8a2d\u8a08\u6a21\u5f0f\uff0c\u7528\u65bc\u5c07\u7269\u4ef6\u7d44\u5408\u6210\u6a39\u72c0\u7d50\u69cb\uff0c\u8868\u793a\u90e8\u5206-\u6574\u9ad4\u5c64\u6b21\u7d50\u69cb\u7d44\u5408\u6a21\u5f0f\u4f7f\u5ba2\u6236\u53ef\u4ee5\u4ee5\u4e00\u81f4\u7684\u65b9\u5f0f\u8655\u7406\u55ae\u4e00\u7269\u4ef6\u548c\u7269\u4ef6\u7d44\u5408"),(0,o.kt)("h2",{id:"\u7d44\u5408\u6a21\u5f0f\u4e3b\u8981\u89e3\u6c7a\u4ee5\u4e0b\u554f\u984c"},"\u7d44\u5408\u6a21\u5f0f\u4e3b\u8981\u89e3\u6c7a\u4ee5\u4e0b\u554f\u984c"),(0,o.kt)("h3",{id:"\u512a\u9ede"},"\u512a\u9ede"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5ba2\u6236\u7aef\u4ee3\u78bc\u4e0d\u9700\u8981\u5340\u5206\u8449\u5b50\u7269\u4ef6\u548c\u5bb9\u5668\u7269\u4ef6\uff0c\u53ef\u4ee5\u7d71\u4e00\u8655\u7406\u5b83\u5011"),(0,o.kt)("li",{parentName:"ul"},"\u7c21\u5316\u5ba2\u6236\u7aef\u4ee3\u78bc\uff0c\u6e1b\u5c11\u4f7f\u7528\u689d\u4ef6\u8a9e\u53e5\u7684\u9700\u6c42"),(0,o.kt)("li",{parentName:"ul"},"\u53ef\u8f15\u9b06\u6dfb\u52a0\u65b0\u985e\u578b\u7684\u7d44\u4ef6\uff0c\u7121\u9700\u66f4\u6539\u73fe\u6709\u5ba2\u6236\u7aef\u4ee3\u78bc")),(0,o.kt)("h3",{id:"\u7f3a\u9ede"},"\u7f3a\u9ede"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9650\u5236\u4e86\u7d44\u4ef6\u985e\u578b\uff0c\u67d0\u4e9b\u64cd\u4f5c\u53ef\u80fd\u7121\u6cd5\u5728\u6240\u6709\u7d44\u4ef6\u4e0a\u57f7\u884c\uff0c\u9700\u8981\u5ba2\u6236\u7aef\u9032\u884c\u985e\u578b\u6aa2\u67e5")),(0,o.kt)("h3",{id:"\u7d44\u5408\u6a21\u5f0f\u5305\u542b"},"\u7d44\u5408\u6a21\u5f0f\u5305\u542b"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u7d44\u4ef6\uff08Component\uff09\u89d2\u8272\uff1a\u5b9a\u7fa9\u8449\u5b50\u548c\u5bb9\u5668\u7269\u4ef6\u7684\u901a\u7528\u63a5\u53e3\uff0c\u4ee5\u4fbf\u5ba2\u6236\u7aef\u4ee5\u4e00\u81f4\u7684\u65b9\u5f0f\u64cd\u4f5c\u5b83\u5011"),(0,o.kt)("li",{parentName:"ol"},"\u8449\u7bc0\u9ede\uff08Leaf\uff09\u89d2\u8272\uff1a\u7d44\u5408\u4e2d\u7684\u8449\u5b50\u7bc0\u9ede\uff0c\u6c92\u6709\u5b50\u7bc0\u9ede"),(0,o.kt)("li",{parentName:"ol"},"\u5bb9\u5668\uff08Composite\uff09\u89d2\u8272\uff1a\u7d44\u5408\u4e2d\u7684\u5bb9\u5668\u7bc0\u9ede\uff0c\u53ef\u4ee5\u5305\u542b\u5b50\u7bc0\u9ede\uff0c\u5305\u62ec\u8449\u5b50\u548c\u5176\u4ed6\u5bb9\u5668"),(0,o.kt)("li",{parentName:"ol"},"\u5ba2\u6236\u7aef\uff08Client\uff09\u89d2\u8272\uff1a\u4f7f\u7528\u7d44\u5408\u6a21\u5f0f\u7684\u5ba2\u6236\u7aef\u4ee3\u78bc\uff0c\u4ee5\u7d71\u4e00\u7684\u65b9\u5f0f\u8655\u7406\u8449\u5b50\u548c\u5bb9\u5668\u7269\u4ef6")),(0,o.kt)("h2",{id:"\u7bc4\u4f8b"},"\u7bc4\u4f8b"),(0,o.kt)("h3",{id:"1-\u5b9a\u7fa9-component-\u4ecb\u9762"},"1. \u5b9a\u7fa9 Component \u4ecb\u9762"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public interface IComponent\n{\n    void Operation();\n}\n")),(0,o.kt)("h3",{id:"2-\u5b9a\u7fa9\u8449\u7bc0\u9ede\u89d2\u8272"},"2. \u5b9a\u7fa9\u8449\u7bc0\u9ede\u89d2\u8272"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'public class Leaf : IComponent\n{\n    public void Operation()\n    {\n        Console.WriteLine("\u8449\u7bc0\u9ede\u64cd\u4f5c");\n    }\n}\n')),(0,o.kt)("h3",{id:"3-\u5b9a\u7fa9\u5bb9\u5668\u89d2\u8272"},"3. \u5b9a\u7fa9\u5bb9\u5668\u89d2\u8272"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'public class Composite : IComponent\n{\n    private List<IComponent> children = new List<IComponent>();\n\n    public void Add(IComponent component)\n    {\n        children.Add(component);\n    }\n\n    public void Remove(IComponent component)\n    {\n        children.Remove(component);\n    }\n\n    public void Operation()\n    {\n        Console.WriteLine("\u5bb9\u5668\u64cd\u4f5c");\n        foreach (IComponent child in children)\n        {\n            child.Operation();\n        }\n    }\n}\n')),(0,o.kt)("h3",{id:"4-\u4e3b\u7a0b\u5f0f"},"4. \u4e3b\u7a0b\u5f0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"class Program\n{\n    static void Main(string[] args)\n    {\n        IComponent leaf1 = new Leaf();\n        IComponent leaf2 = new Leaf();\n\n        Composite composite = new Composite();\n        composite.Add(leaf1);\n        composite.Add(leaf2);\n\n        IComponent leaf3 = new Leaf();\n\n        Composite root = new Composite();\n        root.Add(composite);\n        root.Add(leaf3);\n\n        root.Operation();\n    }\n}\n")),(0,o.kt)("h3",{id:"5-\u7d50\u679c"},"5. \u7d50\u679c"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5bb9\u5668\u64cd\u4f5c"),(0,o.kt)("p",{parentName:"blockquote"},"\u8449\u7bc0\u9ede\u64cd\u4f5c"),(0,o.kt)("p",{parentName:"blockquote"},"\u8449\u7bc0\u9ede\u64cd\u4f5c"),(0,o.kt)("p",{parentName:"blockquote"},"\u8449\u7bc0\u9ede\u64cd\u4f5c")))}d.isMDXComponent=!0}}]);