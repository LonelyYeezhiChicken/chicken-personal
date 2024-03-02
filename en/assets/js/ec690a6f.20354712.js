"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[1255],{49613:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>v});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),m=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=m(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(t),u=a,v=d["".concat(c,".").concat(u)]||d[u]||s[u]||i;return t?r.createElement(v,o(o({ref:n},p),{},{components:t})):r.createElement(v,o({ref:n},p))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=t[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},29411:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=t(88028),a=(t(59496),t(49613));const i={sidebar_position:10,description:"\u547d\u4ee4\u6a21\u5f0f (Command Pattern)",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u8077\u8cac\u93c8\u6a21\u5f0f","Command Pattern"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern"]},o="\ud83d\udca1 \u547d\u4ee4\u6a21\u5f0f",l={unversionedId:"designPattern/behavioral/command",id:"designPattern/behavioral/command",title:"\ud83d\udca1 \u547d\u4ee4\u6a21\u5f0f",description:"\u547d\u4ee4\u6a21\u5f0f (Command Pattern)",source:"@site/docs/designPattern/behavioral/command.md",sourceDirName:"designPattern/behavioral",slug:"/designPattern/behavioral/command",permalink:"/en/docs/designPattern/behavioral/command",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/designPattern/behavioral/command.md",tags:[{label:"\u8a2d\u8a08\u6a21\u5f0f",permalink:"/en/docs/tags/\u8a2d\u8a08\u6a21\u5f0f"},{label:"Design Pattern",permalink:"/en/docs/tags/design-pattern"}],version:"current",lastUpdatedAt:1709356183,formattedLastUpdatedAt:"Mar 2, 2024",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"\u547d\u4ee4\u6a21\u5f0f (Command Pattern)",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u8077\u8cac\u93c8\u6a21\u5f0f","Command Pattern"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udca1 \u8077\u8cac\u93c8\u6a21\u5f0f",permalink:"/en/docs/designPattern/behavioral/chainOfResponsibility"},next:{title:"\ud83d\udca1 \u8fed\u4ee3\u5668\u6a21\u5f0f",permalink:"/en/docs/designPattern/behavioral/Iterator"}},c={},m=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u547d\u4ee4\u6a21\u5f0f\u4e3b\u8981\u89e3\u6c7a\u4ee5\u4e0b\u554f\u984c",id:"\u547d\u4ee4\u6a21\u5f0f\u4e3b\u8981\u89e3\u6c7a\u4ee5\u4e0b\u554f\u984c",level:2},{value:"\u512a\u9ede",id:"\u512a\u9ede",level:3},{value:"\u7f3a\u9ede",id:"\u7f3a\u9ede",level:3},{value:"\u547d\u4ee4\u6a21\u5f0f\u5305\u542b\u4ee5\u4e0b\u89d2\u8272",id:"\u547d\u4ee4\u6a21\u5f0f\u5305\u542b\u4ee5\u4e0b\u89d2\u8272",level:2},{value:"\u7bc4\u4f8b",id:"\u7bc4\u4f8b",level:2},{value:"1. \u5b9a\u7fa9\u547d\u4ee4\u4ecb\u9762",id:"1-\u5b9a\u7fa9\u547d\u4ee4\u4ecb\u9762",level:3},{value:"2. \u5be6\u4f5c\u5177\u9ad4\u547d\u4ee4",id:"2-\u5be6\u4f5c\u5177\u9ad4\u547d\u4ee4",level:3},{value:"3. \u5b9a\u7fa9\u63a5\u6536\u8005",id:"3-\u5b9a\u7fa9\u63a5\u6536\u8005",level:3},{value:"4. \u5be6\u4f5c\u767c\u9001\u8005",id:"4-\u5be6\u4f5c\u767c\u9001\u8005",level:3},{value:"5. \u5be6\u969b\u4f7f\u7528",id:"5-\u5be6\u969b\u4f7f\u7528",level:3},{value:"6. \u7d50\u679c",id:"6-\u7d50\u679c",level:3}],p={toc:m},d="wrapper";function s(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-\u547d\u4ee4\u6a21\u5f0f"},"\ud83d\udca1 \u547d\u4ee4\u6a21\u5f0f"),(0,a.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.kt)("p",null,"\u547d\u4ee4\u6a21\u5f0f\u662f\u4e00\u7a2e\u884c\u70ba\u578b\u8a2d\u8a08\u6a21\u5f0f\uff0c\u65e8\u5728\u5c07\u8acb\u6c42\u8f49\u63db\u70ba\u4e00\u500b\u5305\u542b\u8acb\u6c42\u7684\u7368\u7acb\u7269\u4ef6\uff0c\u4f7f\u5f97\u8acb\u6c42\u7684\u53c3\u6578\u5316\u3001\u6392\u968a\u3001\u64cd\u4f5c\u548c\u65e5\u8a8c\u8a18\u9304\u7b49\u529f\u80fd\u6210\u70ba\u53ef\u80fd"),(0,a.kt)("p",null,"\u9019\u7a2e\u6a21\u5f0f\u7684\u95dc\u9375\u9ede\u662f\u5c07\u767c\u9001\u547d\u4ee4\u7684\u7269\u4ef6\u548c\u57f7\u884c\u547d\u4ee4\u7684\u7269\u4ef6\u9032\u884c\u89e3\u8026"),(0,a.kt)("h2",{id:"\u547d\u4ee4\u6a21\u5f0f\u4e3b\u8981\u89e3\u6c7a\u4ee5\u4e0b\u554f\u984c"},"\u547d\u4ee4\u6a21\u5f0f\u4e3b\u8981\u89e3\u6c7a\u4ee5\u4e0b\u554f\u984c"),(0,a.kt)("h3",{id:"\u512a\u9ede"},"\u512a\u9ede"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u89e3\u8026\u767c\u9001\u8005\u548c\u63a5\u6536\u8005\uff1a\u767c\u9001\u8005\u7121\u9700\u77e5\u9053\u5177\u9ad4\u7684\u63a5\u6536\u8005\uff0c\u53ea\u9700\u77e5\u9053\u5982\u4f55\u767c\u9001\u547d\u4ee4\u5373\u53ef")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u53ef\u64f4\u5c55\u6027\uff1a\u6613\u65bc\u64f4\u5c55\u65b0\u7684\u547d\u4ee4\u548c\u63a5\u6536\u8005\uff0c\u56e0\u70ba\u5b83\u5011\u662f\u7368\u7acb\u7684\u7269\u4ef6\u547c\u53eb")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u652f\u6301\u53d6\u6d88\u548c\u6062\u5fa9\u64cd\u4f5c\uff1a\u547d\u4ee4\u7269\u4ef6\u53ef\u4ee5\u8a18\u9304\u64cd\u4f5c\uff0c\u652f\u6301\u64a4\u92b7\uff08\u53d6\u6d88\uff09\u548c\u6062\u5fa9\u64cd\u4f5c"))),(0,a.kt)("h3",{id:"\u7f3a\u9ede"},"\u7f3a\u9ede"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u984d\u5916\u7684\u985e\u5225\uff1a\u5f15\u5165\u4e86\u8a31\u591a\u984d\u5916\u7684\u547d\u4ee4\u985e\u5225\uff0c\u53ef\u80fd\u6703\u5c0e\u81f4\u985e\u5225\u7206\u70b8")),(0,a.kt)("h2",{id:"\u547d\u4ee4\u6a21\u5f0f\u5305\u542b\u4ee5\u4e0b\u89d2\u8272"},"\u547d\u4ee4\u6a21\u5f0f\u5305\u542b\u4ee5\u4e0b\u89d2\u8272"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u547d\u4ee4\uff08Command\uff09"),"\uff1a\u5b9a\u7fa9\u57f7\u884c\u64cd\u4f5c\u7684\u4ecb\u9762\uff0c\u5305\u62ec\u4e00\u500b\u57f7\u884c\uff08execute\uff09\u65b9\u6cd5"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u5177\u9ad4\u547d\u4ee4\uff08Concrete Command\uff09"),"\uff1a\u5be6\u73fe\u547d\u4ee4\u4ecb\u9762\uff0c\u901a\u5e38\u5305\u62ec\u4e00\u500b\u63a5\u6536\u8005\u7269\u4ef6\u548c\u5be6\u969b\u57f7\u884c\u547d\u4ee4\u7684\u64cd\u4f5c"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u767c\u9001\u8005\uff08Invoker\uff09"),"\uff1a\u8981\u6c42\u547d\u4ee4\u7684\u7269\u4ef6\uff0c\u5c07\u547d\u4ee4\u767c\u9001\u7d66\u76f8\u61c9\u7684\u63a5\u6536\u8005"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u63a5\u6536\u8005\uff08Receiver\uff09"),"\uff1a\u5be6\u969b\u57f7\u884c\u547d\u4ee4\u7684\u7269\u4ef6"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u5ba2\u6236\u7aef\uff08Client\uff09"),"\uff1a\u5275\u5efa\u5177\u9ad4\u547d\u4ee4\u7269\u4ef6\uff0c\u8a2d\u7f6e\u5176\u63a5\u6536\u8005\uff0c\u4e26\u5c07\u5176\u767c\u9001\u7d66\u767c\u9001\u8005")),(0,a.kt)("h2",{id:"\u7bc4\u4f8b"},"\u7bc4\u4f8b"),(0,a.kt)("h3",{id:"1-\u5b9a\u7fa9\u547d\u4ee4\u4ecb\u9762"},"1. \u5b9a\u7fa9\u547d\u4ee4\u4ecb\u9762"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"// \u547d\u4ee4\u4ecb\u9762\npublic interface ICommand\n{\n    void Execute();\n}\n")),(0,a.kt)("h3",{id:"2-\u5be6\u4f5c\u5177\u9ad4\u547d\u4ee4"},"2. \u5be6\u4f5c\u5177\u9ad4\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"// \u5177\u9ad4\u547d\u4ee4A\npublic class ConcreteCommandA : ICommand\n{\n    private Receiver receiver;\n\n    public ConcreteCommandA(Receiver receiver)\n    {\n        this.receiver = receiver;\n    }\n\n    public void Execute()\n    {\n        receiver.ActionA();\n    }\n}\n\n// \u5177\u9ad4\u547d\u4ee4B\npublic class ConcreteCommandB : ICommand\n{\n    private Receiver receiver;\n\n    public ConcreteCommandB(Receiver receiver)\n    {\n        this.receiver = receiver;\n    }\n\n    public void Execute()\n    {\n        receiver.ActionB();\n    }\n}\n")),(0,a.kt)("h3",{id:"3-\u5b9a\u7fa9\u63a5\u6536\u8005"},"3. \u5b9a\u7fa9\u63a5\u6536\u8005"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// \u63a5\u6536\u8005\npublic class Receiver\n{\n    public void ActionA()\n    {\n        Console.WriteLine("\u57f7\u884c ActionA");\n    }\n\n    public void ActionB()\n    {\n        Console.WriteLine("\u57f7\u884c ActionB");\n    }\n}\n')),(0,a.kt)("h3",{id:"4-\u5be6\u4f5c\u767c\u9001\u8005"},"4. \u5be6\u4f5c\u767c\u9001\u8005"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"// \u767c\u9001\u8005\npublic class Invoker\n{\n    private ICommand command;\n\n    public void SetCommand(ICommand command)\n    {\n        this.command = command;\n    }\n\n    public void ExecuteCommand()\n    {\n        command.Execute();\n    }\n}\n")),(0,a.kt)("h3",{id:"5-\u5be6\u969b\u4f7f\u7528"},"5. \u5be6\u969b\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"class Program\n{\n    static void Main(string[] args)\n    {\n        // \u5275\u5efa\u63a5\u6536\u8005\n        Receiver receiver = new Receiver();\n\n        // \u5275\u5efa\u5177\u9ad4\u547d\u4ee4\n        ICommand commandA = new ConcreteCommandA(receiver);\n        ICommand commandB = new ConcreteCommandB(receiver);\n\n        // \u5275\u5efa\u767c\u9001\u8005\n        Invoker invoker = new Invoker();\n\n        // \u8a2d\u7f6e\u4e26\u57f7\u884c\u547d\u4ee4A\n        invoker.SetCommand(commandA);\n        invoker.ExecuteCommand();\n\n        // \u8a2d\u7f6e\u4e26\u57f7\u884c\u547d\u4ee4B\n        invoker.SetCommand(commandB);\n        invoker.ExecuteCommand();\n    }\n}\n")),(0,a.kt)("h3",{id:"6-\u7d50\u679c"},"6. \u7d50\u679c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8f38\u51fa:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u57f7\u884c ActionA\n\u57f7\u884c ActionB\n")),(0,a.kt)("hr",null),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728\u9019\u500b\u7bc4\u4f8b\u4e2d\uff0c\u547d\u4ee4\u6a21\u5f0f\u5141\u8a31\u5c07\u767c\u9001\u8005\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"Invoker"),"\uff09\u548c\u63a5\u6536\u8005\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"Receiver"),"\uff09\u89e3\u8026\uff0c\u4e26\u5c07\u547d\u4ee4\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"ICommand"),"\uff09\u4f5c\u70ba\u4e00\u500b\u7368\u7acb\u7684\u7269\u4ef6\u547c\u53eb\uff0c\u5f9e\u800c\u5be6\u73fe\u4e86\u547d\u4ee4\u7684\u53c3\u6578\u5316\u548c\u6392\u968a\u529f\u80fd"),(0,a.kt)("p",{parentName:"blockquote"},"\u5177\u9ad4\u547d\u4ee4\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"ConcreteCommandA"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"ConcreteCommandB"),"\uff09\u5be6\u73fe\u4e86\u547d\u4ee4\u4ecb\u9762\uff0c\u4e26\u5305\u542b\u5c0d\u61c9\u7684\u63a5\u6536\u8005\u548c\u5be6\u969b\u57f7\u884c\u7684\u64cd\u4f5c"),(0,a.kt)("p",{parentName:"blockquote"},"\u767c\u9001\u8005\u8a2d\u7f6e\u5177\u9ad4\u547d\u4ee4\uff0c\u4e26\u57f7\u884c\u547d\u4ee4\uff0c\u800c\u4e0d\u9700\u8981\u4e86\u89e3\u547d\u4ee4\u7684\u5167\u90e8\u5be6\u73fe\u9019\u63d0\u9ad8\u4e86\u7cfb\u7d71\u7684\u9748\u6d3b\u6027\u548c\u53ef\u64f4\u5c55\u6027")))}s.isMDXComponent=!0}}]);