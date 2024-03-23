"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[4266],{49613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82043:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(88028),a=(n(59496),n(49613));const i={sidebar_position:10,description:"\u6a4b\u63a5\u6a21\u5f0f  (Bridge Pattern)",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u6a4b\u63a5\u6a21\u5f0f","Bridge Pattern"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern"]},l="\ud83d\udca1 \u6a4b\u63a5\u6a21\u5f0f",o={unversionedId:"designPattern/structuralPattern/bridge",id:"designPattern/structuralPattern/bridge",title:"\ud83d\udca1 \u6a4b\u63a5\u6a21\u5f0f",description:"\u6a4b\u63a5\u6a21\u5f0f  (Bridge Pattern)",source:"@site/docs/designPattern/structuralPattern/bridge.md",sourceDirName:"designPattern/structuralPattern",slug:"/designPattern/structuralPattern/bridge",permalink:"/en/docs/designPattern/structuralPattern/bridge",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/designPattern/structuralPattern/bridge.md",tags:[{label:"\u8a2d\u8a08\u6a21\u5f0f",permalink:"/en/docs/tags/\u8a2d\u8a08\u6a21\u5f0f"},{label:"Design Pattern",permalink:"/en/docs/tags/design-pattern"}],version:"current",lastUpdatedAt:1711167668,formattedLastUpdatedAt:"Mar 23, 2024",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"\u6a4b\u63a5\u6a21\u5f0f  (Bridge Pattern)",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u6a4b\u63a5\u6a21\u5f0f","Bridge Pattern"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udca1 \u8f49\u63a5\u5668\u6a21\u5f0f",permalink:"/en/docs/designPattern/structuralPattern/adapter"},next:{title:"\ud83d\udca1 \u7d44\u5408\u6a21\u5f0f",permalink:"/en/docs/designPattern/structuralPattern/composite"}},c={},p=[{value:"Bridge Pattern",id:"bridge-pattern",level:2},{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u6a4b\u63a5\u6a21\u5f0f\u4e3b\u8981\u89e3\u6c7a\u4ee5\u4e0b\u554f\u984c",id:"\u6a4b\u63a5\u6a21\u5f0f\u4e3b\u8981\u89e3\u6c7a\u4ee5\u4e0b\u554f\u984c",level:3},{value:"\u6a4b\u63a5\u6a21\u5f0f\u5305\u542b",id:"\u6a4b\u63a5\u6a21\u5f0f\u5305\u542b",level:3},{value:"\u7bc4\u4f8b",id:"\u7bc4\u4f8b",level:2},{value:"1. \u5b9a\u7fa9\u5be6\u4f5c\u5316\uff08Implementor\uff09\u89d2\u8272",id:"1-\u5b9a\u7fa9\u5be6\u4f5c\u5316implementor\u89d2\u8272",level:3},{value:"2. \u5be6\u4f5c\u5177\u9ad4\u5be6\u4f5c\u5316\uff08Concrete Implementor\uff09\u89d2\u8272",id:"2-\u5be6\u4f5c\u5177\u9ad4\u5be6\u4f5c\u5316concrete-implementor\u89d2\u8272",level:3},{value:"3. \u5b9a\u7fa9\u62bd\u8c61\u5316\uff08Abstraction\uff09\u89d2\u8272",id:"3-\u5b9a\u7fa9\u62bd\u8c61\u5316abstraction\u89d2\u8272",level:3},{value:"4. \u5be6\u4f5c\u5177\u9ad4\u62bd\u8c61\u5316\uff08Refined Abstraction\uff09\u89d2\u8272",id:"4-\u5be6\u4f5c\u5177\u9ad4\u62bd\u8c61\u5316refined-abstraction\u89d2\u8272",level:3},{value:"5. \u5be6\u969b\u4f7f\u7528",id:"5-\u5be6\u969b\u4f7f\u7528",level:3},{value:"6. \u7d50\u679c",id:"6-\u7d50\u679c",level:3}],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-\u6a4b\u63a5\u6a21\u5f0f"},"\ud83d\udca1 \u6a4b\u63a5\u6a21\u5f0f"),(0,a.kt)("h2",{id:"bridge-pattern"},"Bridge Pattern"),(0,a.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.kt)("p",null,"\u6a4b\u63a5\u6a21\u5f0f\u7528\u65bc\u5c07\u62bd\u8c61\u90e8\u5206\u548c\u5be6\u4f5c\u90e8\u5206\u5206\u96e2\uff0c\u4f7f\u5b83\u5011\u53ef\u4ee5\u7368\u7acb\u5730\u8b8a\u5316\u3002\u9019\u7a2e\u6a21\u5f0f\u5141\u8a31\u628a\u4e00\u500b\u985e\u5225\u7684\u5be6\u4f5c\u8207\u5176\u62bd\u8c61\u90e8\u5206\u5206\u96e2\uff0c\u5f9e\u800c\u80fd\u5920\u5728\u5169\u8005\u4e4b\u9593\u5efa\u7acb\u4e00\u500b\u6a4b\u6a11"),(0,a.kt)("h3",{id:"\u6a4b\u63a5\u6a21\u5f0f\u4e3b\u8981\u89e3\u6c7a\u4ee5\u4e0b\u554f\u984c"},"\u6a4b\u63a5\u6a21\u5f0f\u4e3b\u8981\u89e3\u6c7a\u4ee5\u4e0b\u554f\u984c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u512a\u9ede",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5206\u96e2\u62bd\u8c61\u548c\u5be6\u4f5c\uff1a\u6a4b\u63a5\u6a21\u5f0f\u8b93\u62bd\u8c61\u548c\u5be6\u4f5c\u53ef\u4ee5\u7368\u7acb\u5730\u8b8a\u5316\uff0c\u8b93\u5b83\u5011\u4e4b\u9593\u89e3\u8026\u3002\u9019\u6a23\u4e00\u4f86\uff0c\u4fee\u6539\u5be6\u4f5c\u90e8\u5206\u4e0d\u6703\u5f71\u97ff\u62bd\u8c61\u90e8\u5206\u7684\u4ee3\u78bc\uff0c\u53cd\u4e4b\u4ea6\u7136"),(0,a.kt)("li",{parentName:"ul"},"\u589e\u52a0\u64f4\u5c55\u6027\uff1a\u6a4b\u63a5\u6a21\u5f0f\u5141\u8a31\u5728\u62bd\u8c61\u548c\u5be6\u4f5c\u4e4b\u9593\u589e\u52a0\u65b0\u7684\u5b50\u985e\u5225\uff0c\u5f9e\u800c\u64f4\u5c55\u7cfb\u7d71\u7684\u529f\u80fd"),(0,a.kt)("li",{parentName:"ul"},"\u6539\u5584\u53ef\u8b80\u6027\uff1a\u6a4b\u63a5\u6a21\u5f0f\u53ef\u4ee5\u8b93\u8907\u96dc\u7684\u985e\u5225\u62c6\u5206\u6210\u5169\u500b\u7368\u7acb\u7684\u5c64\u6b21\uff0c\u63d0\u9ad8\u4ee3\u78bc\u7684\u53ef\u8b80\u6027\u548c\u53ef\u7dad\u8b77\u6027"))),(0,a.kt)("li",{parentName:"ul"},"\u7f3a\u9ede",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u589e\u52a0\u985e\u5225\u6578\u91cf\uff1a\u6a4b\u63a5\u6a21\u5f0f\u5f15\u5165\u4e86\u591a\u500b\u984d\u5916\u7684\u985e\u5225\uff0c\u9019\u53ef\u80fd\u6703\u589e\u52a0\u7cfb\u7d71\u7684\u8907\u96dc\u6027\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8a2d\u8a08\u904e\u5ea6\uff1a\u5982\u679c\u5c0d\u7cfb\u7d71\u4e2d\u7684\u6bcf\u4e00\u500b\u985e\u5225\u90fd\u61c9\u7528\u6a4b\u63a5\u6a21\u5f0f\uff0c\u800c\u4e14\u6c92\u6709\u8db3\u5920\u7684\u7406\u7531\u53bb\u9019\u9ebc\u505a\uff0c\u53ef\u80fd\u6703\u9020\u6210\u8a2d\u8a08\u904e\u5ea6")))),(0,a.kt)("h3",{id:"\u6a4b\u63a5\u6a21\u5f0f\u5305\u542b"},"\u6a4b\u63a5\u6a21\u5f0f\u5305\u542b"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u62bd\u8c61\u5316\uff08Abstraction\uff09\u89d2\u8272\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5b9a\u7fa9\u4e86\u62bd\u8c61\u90e8\u5206\u7684\u4ecb\u9762\uff0c\u901a\u5e38\u5305\u542b\u9ad8\u5c64\u6b21\u7684\u64cd\u4f5c\uff0c\u4e26\u4e14\u53ef\u80fd\u5305\u542b\u5c0d\u5be6\u4f5c\u90e8\u5206\u7684\u53c3\u8003"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u662f\u62bd\u8c61\u985e\u5225\u6216\u4ecb\u9762"))),(0,a.kt)("li",{parentName:"ol"},"\u5177\u9ad4\u62bd\u8c61\u5316\uff08Refined Abstraction\uff09\u89d2\u8272\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u662f\u62bd\u8c61\u5316\u89d2\u8272\u7684\u5177\u9ad4\u5be6\u73fe"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u5e38\u70ba\u62bd\u8c61\u985e\u5225\u7684\u5b50\u985e\u5225"))),(0,a.kt)("li",{parentName:"ol"},"\u5be6\u4f5c\u5316\uff08Implementor\uff09\u89d2\u8272\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5b9a\u7fa9\u4e86\u5be6\u4f5c\u90e8\u5206\u7684\u4ecb\u9762\uff0c\u901a\u5e38\u5305\u542b\u4f4e\u5c64\u6b21\u7684\u64cd\u4f5c"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u662f\u62bd\u8c61\u985e\u5225\u6216\u4ecb\u9762"))),(0,a.kt)("li",{parentName:"ol"},"\u5177\u9ad4\u5be6\u4f5c\u5316\uff08Concrete Implementor\uff09\u89d2\u8272\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u662f\u5be6\u4f5c\u5316\u89d2\u8272\u7684\u5177\u9ad4\u5be6\u73fe"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u5e38\u70ba\u5be6\u4f5c\u5316\u985e\u5225\u7684\u5b50\u985e\u5225")))),(0,a.kt)("h2",{id:"\u7bc4\u4f8b"},"\u7bc4\u4f8b"),(0,a.kt)("h3",{id:"1-\u5b9a\u7fa9\u5be6\u4f5c\u5316implementor\u89d2\u8272"},"1. \u5b9a\u7fa9\u5be6\u4f5c\u5316\uff08Implementor\uff09\u89d2\u8272"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"// \u5be6\u4f5c\u5316\u89d2\u8272 - \u5f15\u64ce\u4ecb\u9762\npublic interface IEngine\n{\n    void Start();\n}\n")),(0,a.kt)("h3",{id:"2-\u5be6\u4f5c\u5177\u9ad4\u5be6\u4f5c\u5316concrete-implementor\u89d2\u8272"},"2. \u5be6\u4f5c\u5177\u9ad4\u5be6\u4f5c\u5316\uff08Concrete Implementor\uff09\u89d2\u8272"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// \u5177\u9ad4\u5be6\u4f5c\u5316\u89d2\u8272 - \u6c7d\u6cb9\u5f15\u64ce\npublic class PetrolEngine : IEngine\n{\n    public void Start()\n    {\n        Console.WriteLine("\u6c7d\u6cb9\u5f15\u64ce\u555f\u52d5\uff01");\n    }\n}\n\n// \u5177\u9ad4\u5be6\u4f5c\u5316\u89d2\u8272 - \u96fb\u52d5\u5f15\u64ce\npublic class ElectricEngine : IEngine\n{\n    public void Start()\n    {\n        Console.WriteLine("\u96fb\u52d5\u5f15\u64ce\u555f\u52d5\uff01");\n    }\n}\n\n')),(0,a.kt)("h3",{id:"3-\u5b9a\u7fa9\u62bd\u8c61\u5316abstraction\u89d2\u8272"},"3. \u5b9a\u7fa9\u62bd\u8c61\u5316\uff08Abstraction\uff09\u89d2\u8272"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"// \u62bd\u8c61\u5316\u89d2\u8272\npublic abstract class Car\n{\n    // \u5f15\u64ce\n    protected IEngine engine;\n\n    // \u6ce8\u5165\u5f15\u64ce\n    public Car(IEngine engine)\n    {\n        this.engine = engine;\n    }\n\n    // \u555f\u52d5\n    public abstract void Drive();\n}\n")),(0,a.kt)("h3",{id:"4-\u5be6\u4f5c\u5177\u9ad4\u62bd\u8c61\u5316refined-abstraction\u89d2\u8272"},"4. \u5be6\u4f5c\u5177\u9ad4\u62bd\u8c61\u5316\uff08Refined Abstraction\uff09\u89d2\u8272"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// \u5177\u9ad4\u62bd\u8c61\u5316\u89d2\u8272 - \u8dd1\u8eca\npublic class SportsCar : Car\n{\n    public SportsCar(IEngine engine) : base(engine)\n    {\n    }\n\n    public override void Drive()\n    {\n        Console.WriteLine("\u8dd1\u8eca\u555f\u52d5\uff01");\n        engine.Start();\n    }\n}\n\n// \u5177\u9ad4\u62bd\u8c61\u5316\u89d2\u8272 - \u8d8a\u91ce\u8eca\npublic class SUV : Car\n{\n    public SUV(IEngine engine) : base(engine)\n    {\n    }\n\n    public override void Drive()\n    {\n        Console.WriteLine("\u8d8a\u91ce\u8eca\u555f\u52d5\uff01");\n        engine.Start();\n    }\n}\n')),(0,a.kt)("h3",{id:"5-\u5be6\u969b\u4f7f\u7528"},"5. \u5be6\u969b\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"class Program\n{\n    static void Main(string[] args)\n    {\n        // \u5275\u5efa\u6c7d\u8eca\u5be6\u4f8b\u4e26\u4f7f\u7528\u6c7d\u6cb9\u5f15\u64ce\n        Car sportsCar = new SportsCar(new PetrolEngine());\n        sportsCar.Drive();\n\n        // \u5275\u5efa\u6c7d\u8eca\u5be6\u4f8b\u4e26\u4f7f\u7528\u96fb\u52d5\u5f15\u64ce\n        Car suvCar = new SUV(new ElectricEngine());\n        suvCar.Drive();\n    }\n}\n")),(0,a.kt)("h3",{id:"6-\u7d50\u679c"},"6. \u7d50\u679c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8f38\u51fa:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u8dd1\u8eca\u555f\u52d5\uff01\n\u6c7d\u6cb9\u5f15\u64ce\u555f\u52d5\uff01\n\u8d8a\u91ce\u8eca\u555f\u52d5\uff01\n\u96fb\u52d5\u5f15\u64ce\u555f\u52d5\uff01\n")))}d.isMDXComponent=!0}}]);