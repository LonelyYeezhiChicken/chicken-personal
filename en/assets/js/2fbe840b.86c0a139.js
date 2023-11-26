"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[3111],{49613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),y=a,d=u["".concat(c,".").concat(y)]||u[y]||g[y]||i;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=y;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},31067:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(88028),a=(n(59496),n(49613));const i={sidebar_position:30,description:"\u4eab\u5143\u6a21\u5f0f (Flyweight Pattern)",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u9580\u9762\u6a21\u5f0f","Flyweight Pattern"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern"]},l="\ud83d\udca1 \u4eab\u5143\u6a21\u5f0f",o={unversionedId:"designPattern/structuralPattern/flyweight",id:"designPattern/structuralPattern/flyweight",title:"\ud83d\udca1 \u4eab\u5143\u6a21\u5f0f",description:"\u4eab\u5143\u6a21\u5f0f (Flyweight Pattern)",source:"@site/docs/designPattern/structuralPattern/flyweight.md",sourceDirName:"designPattern/structuralPattern",slug:"/designPattern/structuralPattern/flyweight",permalink:"/en/docs/designPattern/structuralPattern/flyweight",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/designPattern/structuralPattern/flyweight.md",tags:[{label:"\u8a2d\u8a08\u6a21\u5f0f",permalink:"/en/docs/tags/\u8a2d\u8a08\u6a21\u5f0f"},{label:"Design Pattern",permalink:"/en/docs/tags/design-pattern"}],version:"current",lastUpdatedAt:1701005397,formattedLastUpdatedAt:"Nov 26, 2023",sidebarPosition:30,frontMatter:{sidebar_position:30,description:"\u4eab\u5143\u6a21\u5f0f (Flyweight Pattern)",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u9580\u9762\u6a21\u5f0f","Flyweight Pattern"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udca1 \u9580\u9762\u6a21\u5f0f",permalink:"/en/docs/designPattern/structuralPattern/facade"},next:{title:"\ud83d\udca1 \u4ee3\u7406\u6a21\u5f0f",permalink:"/en/docs/designPattern/structuralPattern/proxy"}},c={},s=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u4eab\u5143\u6a21\u5f0f\u4e3b\u8981\u89e3\u6c7a\u4ee5\u4e0b\u554f\u984c",id:"\u4eab\u5143\u6a21\u5f0f\u4e3b\u8981\u89e3\u6c7a\u4ee5\u4e0b\u554f\u984c",level:3},{value:"\u4eab\u5143\u6a21\u5f0f\u5305\u542b",id:"\u4eab\u5143\u6a21\u5f0f\u5305\u542b",level:3},{value:"\u7bc4\u4f8b",id:"\u7bc4\u4f8b",level:2},{value:"1. \u5b9a\u7fa9\u4eab\u5143\u4ecb\u9762",id:"1-\u5b9a\u7fa9\u4eab\u5143\u4ecb\u9762",level:3},{value:"2. \u5be6\u4f5c\u5177\u9ad4\u4eab\u5143\u985e\u5225",id:"2-\u5be6\u4f5c\u5177\u9ad4\u4eab\u5143\u985e\u5225",level:3},{value:"3. \u5be6\u4f5c\u4eab\u5143\u5de5\u5ee0",id:"3-\u5be6\u4f5c\u4eab\u5143\u5de5\u5ee0",level:3},{value:"4. \u5be6\u969b\u4f7f\u7528",id:"4-\u5be6\u969b\u4f7f\u7528",level:3},{value:"5. \u7d50\u679c",id:"5-\u7d50\u679c",level:3}],p={toc:s},u="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-\u4eab\u5143\u6a21\u5f0f"},"\ud83d\udca1 \u4eab\u5143\u6a21\u5f0f"),(0,a.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.kt)("p",null,"\u4eab\u5143\u6a21\u5f0f\u662f\u4e00\u7a2e\u7d50\u69cb\u578b\u8a2d\u8a08\u6a21\u5f0f\uff0c\u7528\u65bc\u6700\u5c0f\u5316\u6216\u5171\u4eab\u7269\u4ef6\uff0c\u4ee5\u7bc0\u7701\u8a18\u61b6\u9ad4\u6216\u63d0\u9ad8\u6027\u80fd"),(0,a.kt)("p",null,"\u8a72\u6a21\u5f0f\u7684\u6838\u5fc3\u601d\u60f3\u662f\u5c07\u5171\u4eab\u7684\u72c0\u614b\uff08\u4e5f\u5c31\u662f\u5167\u90e8\u72c0\u614b\uff09\u8207\u7269\u4ef6\u7684\u5176\u9918\u90e8\u5206\uff08\u5916\u90e8\u72c0\u614b\uff09\u5206\u958b"),(0,a.kt)("p",null,"\u9019\u6a23\u591a\u500b\u7269\u4ef6\u53ef\u4ee5\u5171\u4eab\u76f8\u540c\u7684\u5167\u90e8\u72c0\u614b\uff0c\u5f9e\u800c\u6e1b\u5c11\u8a18\u61b6\u9ad4\u4f7f\u7528"),(0,a.kt)("p",null,"\u4eab\u5143\u6a21\u5f0f\u4e3b\u8981\u7528\u65bc\u7ba1\u7406\u5927\u91cf\u76f8\u4f3c\u7684\u7269\u4ef6\uff0c\u4e26\u78ba\u4fdd\u5b83\u5011\u5728\u8a18\u61b6\u9ad4\u4e2d\u50c5\u6709\u4e00\u500b\u5be6\u9ad4"),(0,a.kt)("p",null,"\u9019\u7a2e\u5171\u4eab\u7684\u65b9\u5f0f\u53ef\u7528\u65bc\u63d0\u9ad8\u7cfb\u7d71\u7684\u6548\u7387\uff0c\u7279\u5225\u662f\u7576\u6709\u5927\u91cf\u76f8\u4f3c\u7269\u4ef6\u9700\u8981\u8655\u7406\u6642"),(0,a.kt)("h3",{id:"\u4eab\u5143\u6a21\u5f0f\u4e3b\u8981\u89e3\u6c7a\u4ee5\u4e0b\u554f\u984c"},"\u4eab\u5143\u6a21\u5f0f\u4e3b\u8981\u89e3\u6c7a\u4ee5\u4e0b\u554f\u984c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u512a\u9ede",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6e1b\u5c11\u8a18\u61b6\u9ad4\u6d88\u8017\uff1a\u4eab\u5143\u6a21\u5f0f\u5141\u8a31\u591a\u500b\u7269\u4ef6\u5171\u4eab\u76f8\u540c\u7684\u5167\u90e8\u72c0\u614b\uff0c\u5f9e\u800c\u6e1b\u5c11\u8a18\u61b6\u9ad4\u6d88\u8017"),(0,a.kt)("li",{parentName:"ul"},"\u63d0\u9ad8\u6027\u80fd\uff1a\u901a\u904e\u5171\u4eab\u5167\u90e8\u72c0\u614b\uff0c\u4eab\u5143\u6a21\u5f0f\u53ef\u4ee5\u63d0\u9ad8\u7cfb\u7d71\u7684\u6027\u80fd\uff0c\u7279\u5225\u662f\u5728\u8655\u7406\u5927\u91cf\u76f8\u4f3c\u7269\u4ef6\u6642"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u5927\u91cf\u7269\u4ef6\uff1a\u4eab\u5143\u6a21\u5f0f\u9069\u7528\u65bc\u9700\u8981\u7ba1\u7406\u5927\u91cf\u76f8\u4f3c\u7269\u4ef6\u7684\u60c5\u6cc1"))),(0,a.kt)("li",{parentName:"ul"},"\u7f3a\u9ede",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8907\u96dc\u6027\u589e\u52a0\uff1a\u5be6\u73fe\u4eab\u5143\u6a21\u5f0f\u53ef\u80fd\u9700\u8981\u5f15\u5165\u984d\u5916\u7684\u8907\u96dc\u6027\uff0c\u5982\u5167\u90e8\u72c0\u614b\u7684\u7ba1\u7406\u548c\u5916\u90e8\u72c0\u614b\u7684\u8655\u7406")))),(0,a.kt)("h3",{id:"\u4eab\u5143\u6a21\u5f0f\u5305\u542b"},"\u4eab\u5143\u6a21\u5f0f\u5305\u542b"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4eab\u5143\u5de5\u5ee0\uff08Flyweight Factory\uff09\uff1a\u8ca0\u8cac\u5efa\u7acb\u548c\u7ba1\u7406\u4eab\u5143\u7269\u4ef6\uff0c\u5b83\u7dad\u8b77\u4e00\u500b\u4eab\u5143\u6c60\uff0c\u4ee5\u4fbf\u91cd\u8907\u4f7f\u7528\u4eab\u5143\u7269\u4ef6"),(0,a.kt)("li",{parentName:"ol"},"\u4eab\u5143\uff08Flyweight\uff09\uff1a\u8868\u793a\u4e00\u500b\u5171\u4eab\u7684\u5167\u90e8\u72c0\u614b\uff0c\u8a72\u72c0\u614b\u53ef\u4ee5\u88ab\u591a\u500b\u7269\u4ef6\u5171\u4eab\uff0c\u4eab\u5143\u7269\u4ef6\u5305\u542b\u5167\u90e8\u72c0\u614b\u548c\u53ef\u4ee5\u8b8a\u5316\u7684\u5916\u90e8\u72c0\u614b"),(0,a.kt)("li",{parentName:"ol"},"\u5ba2\u6236\u7aef\uff08Client\uff09\uff1a\u4f7f\u7528\u4eab\u5143\u7269\u4ef6\u7684\u7269\u4ef6\uff0c\u5ba2\u6236\u7aef\u53ef\u4ee5\u901a\u904e\u4eab\u5143\u5de5\u5ee0\u7372\u53d6\u4eab\u5143\u7269\u4ef6\uff0c\u4e26\u8a2d\u7f6e\u5916\u90e8\u72c0\u614b")),(0,a.kt)("h2",{id:"\u7bc4\u4f8b"},"\u7bc4\u4f8b"),(0,a.kt)("h3",{id:"1-\u5b9a\u7fa9\u4eab\u5143\u4ecb\u9762"},"1. \u5b9a\u7fa9\u4eab\u5143\u4ecb\u9762"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"// \u4eab\u5143\u4ecb\u9762\npublic interface IFlyweight\n{\n    void Operation(string externalState);\n}\n")),(0,a.kt)("h3",{id:"2-\u5be6\u4f5c\u5177\u9ad4\u4eab\u5143\u985e\u5225"},"2. \u5be6\u4f5c\u5177\u9ad4\u4eab\u5143\u985e\u5225"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// \u5177\u9ad4\u4eab\u5143\u985e\u5225\npublic class ConcreteFlyweight : IFlyweight\n{\n    private string intrinsicState; // \u5167\u90e8\u72c0\u614b\n\n    public ConcreteFlyweight(string intrinsicState)\n    {\n        this.intrinsicState = intrinsicState;\n    }\n\n    public void Operation(string externalState)\n    {\n        Console.WriteLine($"\u5167\u90e8\u72c0\u614b\uff1a{intrinsicState}, \u5916\u90e8\u72c0\u614b\uff1a{externalState}");\n    }\n}\n')),(0,a.kt)("h3",{id:"3-\u5be6\u4f5c\u4eab\u5143\u5de5\u5ee0"},"3. \u5be6\u4f5c\u4eab\u5143\u5de5\u5ee0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"// \u4eab\u5143\u5de5\u5ee0\npublic class FlyweightFactory\n{\n    private Dictionary<string, IFlyweight> flyweights = new Dictionary<string, IFlyweight>();\n\n    public IFlyweight GetFlyweight(string key)\n    {\n        if (!flyweights.ContainsKey(key))\n        {\n            flyweights[key] = new ConcreteFlyweight(key);\n        }\n        return flyweights[key];\n    }\n}\n")),(0,a.kt)("h3",{id:"4-\u5be6\u969b\u4f7f\u7528"},"4. \u5be6\u969b\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'class Program\n{\n    static void Main(string[] args)\n    {\n        FlyweightFactory factory = new FlyweightFactory();\n\n        IFlyweight flyweight1 = factory.GetFlyweight("A");\n        flyweight1.Operation("X");\n\n        IFlyweight flyweight2 = factory.GetFlyweight("B");\n        flyweight2.Operation("Y");\n\n        IFlyweight flyweight3 = factory.GetFlyweight("A");\n        flyweight3.Operation("Z");\n    }\n}\n')),(0,a.kt)("h3",{id:"5-\u7d50\u679c"},"5. \u7d50\u679c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8f38\u51fa:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u5167\u90e8\u72c0\u614b\uff1aA, \u5916\u90e8\u72c0\u614b\uff1aX\n\u5167\u90e8\u72c0\u614b\uff1aB, \u5916\u90e8\u72c0\u614b\uff1aY\n\u5167\u90e8\u72c0\u614b\uff1aA, \u5916\u90e8\u72c0\u614b\uff1aZ\n")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u4eab\u5143\u6a21\u5f0f\u5141\u8a31\u5171\u4eab\u5167\u90e8\u72c0\u614b\uff0c\u5f9e\u800c\u6e1b\u5c11\u8a18\u61b6\u9ad4\u6d88\u8017\u4e26\u63d0\u9ad8\u6027\u80fd\uff0c\u9019\u5728\u9700\u8981\u8655\u7406\u5927\u91cf\u76f8\u4f3c\u7269\u4ef6\u7684\u60c5\u6cc1\u4e0b\u7279\u5225\u6709\u7528\uff0c\u901a\u904e\u5c07\u5167\u90e8\u72c0\u614b\u548c\u5916\u90e8\u72c0\u614b\u5206\u96e2\uff0c\u4eab\u5143\u6a21\u5f0f\u5be6\u73fe\u4e86\u5c0d\u7269\u4ef6\u7684\u6709\u6548\u5171\u4eab"))}g.isMDXComponent=!0}}]);