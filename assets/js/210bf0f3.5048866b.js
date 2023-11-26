"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[1522],{49613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>y});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,y=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},44092:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=t(88028),a=(t(59496),t(49613));const l={sidebar_position:5,description:"\u8077\u8cac\u93c8\u6a21\u5f0f (Chain of Responsibility Pattern)",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u8077\u8cac\u93c8\u6a21\u5f0f","Chain of Responsibility Pattern"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern"]},i="\ud83d\udca1 \u8077\u8cac\u93c8\u6a21\u5f0f",o={unversionedId:"designPattern/behavioral/chainOfResponsibility",id:"designPattern/behavioral/chainOfResponsibility",title:"\ud83d\udca1 \u8077\u8cac\u93c8\u6a21\u5f0f",description:"\u8077\u8cac\u93c8\u6a21\u5f0f (Chain of Responsibility Pattern)",source:"@site/docs/designPattern/behavioral/chainOfResponsibility.md",sourceDirName:"designPattern/behavioral",slug:"/designPattern/behavioral/chainOfResponsibility",permalink:"/docs/designPattern/behavioral/chainOfResponsibility",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/designPattern/behavioral/chainOfResponsibility.md",tags:[{label:"\u8a2d\u8a08\u6a21\u5f0f",permalink:"/docs/tags/\u8a2d\u8a08\u6a21\u5f0f"},{label:"Design Pattern",permalink:"/docs/tags/design-pattern"}],version:"current",lastUpdatedAt:1701006483,formattedLastUpdatedAt:"2023\u5e7411\u670826\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"\u8077\u8cac\u93c8\u6a21\u5f0f (Chain of Responsibility Pattern)",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u8077\u8cac\u93c8\u6a21\u5f0f","Chain of Responsibility Pattern"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern"]},sidebar:"tutorialSidebar",previous:{title:"\u884c\u70ba\u6a21\u5f0f",permalink:"/docs/category/\u884c\u70ba\u6a21\u5f0f"},next:{title:"\ud83d\udca1 \u547d\u4ee4\u6a21\u5f0f",permalink:"/docs/designPattern/behavioral/command"}},s={},p=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u8077\u8cac\u93c8\u6a21\u5f0f\u4e3b\u8981\u89e3\u6c7a\u4ee5\u4e0b\u554f\u984c",id:"\u8077\u8cac\u93c8\u6a21\u5f0f\u4e3b\u8981\u89e3\u6c7a\u4ee5\u4e0b\u554f\u984c",level:3},{value:"\u8077\u8cac\u93c8\u6a21\u5f0f\u5305\u542b\u4ee5\u4e0b\u89d2\u8272",id:"\u8077\u8cac\u93c8\u6a21\u5f0f\u5305\u542b\u4ee5\u4e0b\u89d2\u8272",level:3},{value:"\u7bc4\u4f8b",id:"\u7bc4\u4f8b",level:2},{value:"1. \u5b9a\u7fa9\u62bd\u8c61\u8655\u7406\u8005",id:"1-\u5b9a\u7fa9\u62bd\u8c61\u8655\u7406\u8005",level:3},{value:"2. \u5be6\u4f5c\u5177\u9ad4\u8655\u7406\u8005",id:"2-\u5be6\u4f5c\u5177\u9ad4\u8655\u7406\u8005",level:3},{value:"3. \u5b9a\u7fa9\u8acb\u6c42\u985e\u578b",id:"3-\u5b9a\u7fa9\u8acb\u6c42\u985e\u578b",level:3},{value:"4. \u5be6\u969b\u4f7f\u7528",id:"4-\u5be6\u969b\u4f7f\u7528",level:3},{value:"5. \u7d50\u679c",id:"5-\u7d50\u679c",level:3}],u={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-\u8077\u8cac\u93c8\u6a21\u5f0f"},"\ud83d\udca1 \u8077\u8cac\u93c8\u6a21\u5f0f"),(0,a.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.kt)("p",null,"\u8077\u8cac\u93c8\u6a21\u5f0f\u662f\u4e00\u7a2e\u884c\u70ba\u578b\u8a2d\u8a08\u6a21\u5f0f\uff0c\u7528\u65bc\u8655\u7406\u8907\u96dc\u7684\u8acb\u6c42\uff0c\u4e26\u5c07\u8acb\u6c42\u50b3\u905e\u7d66\u4e00\u500b\u6216\u591a\u500b\u8655\u7406\u8005\uff0c\u76f4\u5230\u6709\u4e00\u500b\u8655\u7406\u8005\u80fd\u5920\u8655\u7406\u5b83"),(0,a.kt)("p",null,"\u8a72\u6a21\u5f0f\u7684\u6838\u5fc3\u601d\u60f3\u662f\u5c07\u8655\u7406\u8005\u7d44\u6210\u4e00\u689d\u93c8\uff0c\u6bcf\u500b\u8655\u7406\u8005\u90fd\u53ef\u4ee5\u6c7a\u5b9a\u662f\u5426\u8655\u7406\u8acb\u6c42\uff0c\u4e26\u5c07\u8acb\u6c42\u50b3\u905e\u7d66\u4e0b\u4e00\u500b\u8655\u7406\u8005"),(0,a.kt)("p",null,"\u9019\u6a23\u53ef\u4ee5\u5be6\u73fe\u8acb\u6c42\u7684\u5206\u96e2\u548c\u8655\u7406\u8005\u7684\u89e3\u8026"),(0,a.kt)("h3",{id:"\u8077\u8cac\u93c8\u6a21\u5f0f\u4e3b\u8981\u89e3\u6c7a\u4ee5\u4e0b\u554f\u984c"},"\u8077\u8cac\u93c8\u6a21\u5f0f\u4e3b\u8981\u89e3\u6c7a\u4ee5\u4e0b\u554f\u984c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u512a\u9ede",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5206\u96e2\u8acb\u6c42\u548c\u8655\u7406\uff1a\u8077\u8cac\u93c8\u6a21\u5f0f\u5c07\u8acb\u6c42\u7684\u767c\u8d77\u548c\u8655\u7406\u8005\u7684\u8077\u8cac\u5206\u96e2\uff0c\u4f7f\u7cfb\u7d71\u66f4\u52a0\u9748\u6d3b\u547c\u53eb"),(0,a.kt)("li",{parentName:"ul"},"\u52d5\u614b\u7d44\u5408\uff1a\u53ef\u4ee5\u52d5\u614b\u7d44\u5408\u4e0d\u540c\u7684\u8655\u7406\u8005\uff0c\u4ee5\u6eff\u8db3\u4e0d\u540c\u7684\u9700\u6c42\u547c\u53eb"),(0,a.kt)("li",{parentName:"ul"},"\u6e1b\u5c11\u8026\u5408\uff1a\u8655\u7406\u8005\u4e4b\u9593\u7684\u8026\u5408\u6e1b\u5c11\uff0c\u6bcf\u500b\u8655\u7406\u8005\u53ea\u9700\u95dc\u5fc3\u81ea\u5df1\u7684\u8655\u7406\u908f\u8f2f\u547c\u53eb"))),(0,a.kt)("li",{parentName:"ul"},"\u7f3a\u9ede",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u98a8\u96aa\uff1a\u5982\u679c\u8077\u8cac\u93c8\u8a2d\u8a08\u4e0d\u7576\uff0c\u53ef\u80fd\u6703\u5c0e\u81f4\u8acb\u6c42\u7121\u6cd5\u8655\u7406\u6216\u7121\u6cd5\u7d42\u6b62\u547c\u53eb"),(0,a.kt)("li",{parentName:"ul"},"\u904e\u591a\u7684\u8655\u7406\u8005\uff1a\u904e\u591a\u7684\u8655\u7406\u8005\u53ef\u80fd\u5c0e\u81f4\u6027\u80fd\u4e0b\u964d\u547c\u53eb")))),(0,a.kt)("h3",{id:"\u8077\u8cac\u93c8\u6a21\u5f0f\u5305\u542b\u4ee5\u4e0b\u89d2\u8272"},"\u8077\u8cac\u93c8\u6a21\u5f0f\u5305\u542b\u4ee5\u4e0b\u89d2\u8272"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u62bd\u8c61\u8655\u7406\u8005\uff08Handler\uff09\uff1a\u5b9a\u7fa9\u8655\u7406\u8acb\u6c42\u7684\u63a5\u53e3\uff0c\u5305\u62ec\u8655\u7406\u8acb\u6c42\u7684\u65b9\u6cd5\u548c\u8a2d\u7f6e\u4e0b\u4e00\u500b\u8655\u7406\u8005\u7684\u65b9\u6cd5\u547c\u53eb"),(0,a.kt)("li",{parentName:"ol"},"\u5177\u9ad4\u8655\u7406\u8005\uff08Concrete Handler\uff09\uff1a\u5be6\u73fe\u62bd\u8c61\u8655\u7406\u8005\u63a5\u53e3\uff0c\u6c7a\u5b9a\u662f\u5426\u8655\u7406\u8acb\u6c42\uff0c\u5982\u679c\u4e0d\u8655\u7406\uff0c\u5247\u5c07\u8acb\u6c42\u50b3\u905e\u7d66\u4e0b\u4e00\u500b\u8655\u7406\u8005\u547c\u53eb"),(0,a.kt)("li",{parentName:"ol"},"\u8acb\u6c42\uff08Request\uff09\uff1a\u5305\u542b\u9700\u8981\u8655\u7406\u7684\u4fe1\u606f\u7684\u5c0d\u8c61\u547c\u53eb"),(0,a.kt)("li",{parentName:"ol"},"\u5ba2\u6236\u7aef\uff08Client\uff09\uff1a\u5275\u5efa\u8077\u8cac\u93c8\uff0c\u5c07\u8acb\u6c42\u50b3\u905e\u7d66\u8077\u8cac\u93c8\u7684\u7b2c\u4e00\u500b\u8655\u7406\u8005\u547c\u53eb")),(0,a.kt)("h2",{id:"\u7bc4\u4f8b"},"\u7bc4\u4f8b"),(0,a.kt)("h3",{id:"1-\u5b9a\u7fa9\u62bd\u8c61\u8655\u7406\u8005"},"1. \u5b9a\u7fa9\u62bd\u8c61\u8655\u7406\u8005"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"// \u62bd\u8c61\u8655\u7406\u8005\npublic abstract class Handler\n{\n    protected Handler nextHandler;\n\n    public void SetNextHandler(Handler handler)\n    {\n        nextHandler = handler;\n    }\n\n    public abstract void HandleRequest(Request request);\n}\n")),(0,a.kt)("h3",{id:"2-\u5be6\u4f5c\u5177\u9ad4\u8655\u7406\u8005"},"2. \u5be6\u4f5c\u5177\u9ad4\u8655\u7406\u8005"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// \u5177\u9ad4\u8655\u7406\u8005A\npublic class ConcreteHandlerA : Handler\n{\n    public override void HandleRequest(Request request)\n    {\n        if (request.Type == RequestType.TypeA)\n        {\n            Console.WriteLine("\u8655\u7406 TypeA \u8acb\u6c42");\n        }\n        else if (nextHandler != null)\n        {\n            nextHandler.HandleRequest(request);\n        }\n    }\n}\n\n// \u5177\u9ad4\u8655\u7406\u8005B\npublic class ConcreteHandlerB : Handler\n{\n    public override void HandleRequest(Request request)\n    {\n        if (request.Type == RequestType.TypeB)\n        {\n            Console.WriteLine("\u8655\u7406 TypeB \u8acb\u6c42");\n        }\n        else if (nextHandler != null)\n        {\n            nextHandler.HandleRequest(request);\n        }\n    }\n}\n')),(0,a.kt)("h3",{id:"3-\u5b9a\u7fa9\u8acb\u6c42\u985e\u578b"},"3. \u5b9a\u7fa9\u8acb\u6c42\u985e\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"// \u8acb\u6c42\u985e\u578b\npublic enum RequestType\n{\n    TypeA,\n    TypeB\n}\n\n// \u8acb\u6c42\u985e\npublic class Request\n{\n    public RequestType Type { get; set; }\n\n    public Request(RequestType type)\n    {\n        Type = type;\n    }\n}\n")),(0,a.kt)("h3",{id:"4-\u5be6\u969b\u4f7f\u7528"},"4. \u5be6\u969b\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"class Program\n{\n    static void Main(string[] args)\n    {\n        // \u5275\u5efa\u5177\u9ad4\u8655\u7406\u8005\n        Handler handlerA = new ConcreteHandlerA();\n        Handler handlerB = new ConcreteHandlerB();\n\n        // \u8a2d\u7f6e\u8655\u7406\u8005\u4e4b\u9593\u7684\u95dc\u4fc2\n        handlerA.SetNextHandler(handlerB);\n\n        // \u5275\u5efa\u8acb\u6c42\n        Request requestA = new Request(RequestType.TypeA);\n        Request requestB = new Request(RequestType.TypeB);\n\n        // \u8655\u7406\u8acb\u6c42\n        handlerA.HandleRequest(requestA);\n        handlerA.HandleRequest(requestB);\n    }\n}\n")),(0,a.kt)("h3",{id:"5-\u7d50\u679c"},"5. \u7d50\u679c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8f38\u51fa:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u8655\u7406 TypeA \u8acb\u6c42\n\u8655\u7406 TypeB \u8acb\u6c42\n")),(0,a.kt)("hr",null),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728\u9019\u500b\u7bc4\u4f8b\u4e2d\uff0c\u8077\u8cac\u93c8\u6a21\u5f0f\u5141\u8a31\u4e0d\u540c\u7684\u8655\u7406\u8005\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"ConcreteHandlerA")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"ConcreteHandlerB"),"\uff09\u6839\u64da\u8acb\u6c42\u7684\u985e\u578b\u4f86\u8655\u7406\u8acb\u6c42"),(0,a.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u67d0\u500b\u8655\u7406\u8005\u7121\u6cd5\u8655\u7406\u8acb\u6c42\uff0c\u5b83\u6703\u5c07\u8acb\u6c42\u50b3\u905e\u7d66\u4e0b\u4e00\u500b\u8655\u7406\u8005\uff0c\u76f4\u5230\u6709\u4e00\u500b\u8655\u7406\u8005\u80fd\u5920\u8655\u7406\u5b83"),(0,a.kt)("p",{parentName:"blockquote"},"\u9019\u6a23\u5be6\u73fe\u4e86\u8acb\u6c42\u7684\u5206\u96e2\u548c\u8655\u7406\u8005\u7684\u89e3\u8026\u547c\u53eb")))}d.isMDXComponent=!0}}]);