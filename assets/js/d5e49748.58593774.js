"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[9177],{49613:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>b});var r=t(59496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=i,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(b,o(o({ref:n},p),{},{components:t})):r.createElement(b,o({ref:n},p))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},80768:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(88028),i=(t(59496),t(49613));const a={sidebar_position:15,description:"Liskov substitution principle",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u7269\u4ef6\u5c0e\u5411\u8a2d\u8a08\u539f\u5247","Liskov substitution principle","\u91cc\u6c0f\u66ff\u63db\u539f\u5247"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u7269\u4ef6\u5c0e\u5411\u8a2d\u8a08\u539f\u5247"]},o="\ud83d\udca1 \u91cc\u6c0f\u66ff\u63db\u539f\u5247",l={unversionedId:"designPattern/oop/lsp",id:"designPattern/oop/lsp",title:"\ud83d\udca1 \u91cc\u6c0f\u66ff\u63db\u539f\u5247",description:"Liskov substitution principle",source:"@site/docs/designPattern/oop/lsp.md",sourceDirName:"designPattern/oop",slug:"/designPattern/oop/lsp",permalink:"/docs/designPattern/oop/lsp",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/designPattern/oop/lsp.md",tags:[{label:"\u8a2d\u8a08\u6a21\u5f0f",permalink:"/docs/tags/\u8a2d\u8a08\u6a21\u5f0f"},{label:"Design Pattern",permalink:"/docs/tags/design-pattern"},{label:"\u7269\u4ef6\u5c0e\u5411\u8a2d\u8a08\u539f\u5247",permalink:"/docs/tags/\u7269\u4ef6\u5c0e\u5411\u8a2d\u8a08\u539f\u5247"}],version:"current",lastUpdatedAt:1711167668,formattedLastUpdatedAt:"2024\u5e743\u670823\u65e5",sidebarPosition:15,frontMatter:{sidebar_position:15,description:"Liskov substitution principle",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u7269\u4ef6\u5c0e\u5411\u8a2d\u8a08\u539f\u5247","Liskov substitution principle","\u91cc\u6c0f\u66ff\u63db\u539f\u5247"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u7269\u4ef6\u5c0e\u5411\u8a2d\u8a08\u539f\u5247"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udca1 \u958b\u9589\u539f\u5247",permalink:"/docs/designPattern/oop/ocp"},next:{title:"\ud83d\udca1 \u4ecb\u9762\u9694\u96e2\u539f\u5247",permalink:"/docs/designPattern/oop/isp"}},s={},c=[{value:"Liskov substitution principle",id:"liskov-substitution-principle",level:2},{value:"\u5fc5\u9808\u7b26\u5408\u56db\u500b\u7e7c\u627f\u7684\u898f\u7bc4",id:"\u5fc5\u9808\u7b26\u5408\u56db\u500b\u7e7c\u627f\u7684\u898f\u7bc4",level:2},{value:"\u7bc4\u4f8b",id:"\u7bc4\u4f8b",level:2}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-\u91cc\u6c0f\u66ff\u63db\u539f\u5247"},"\ud83d\udca1 \u91cc\u6c0f\u66ff\u63db\u539f\u5247"),(0,i.kt)("h2",{id:"liskov-substitution-principle"},"Liskov substitution principle"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5b50\u985e\u5225\u53ef\u4ee5\u64f4\u5145\u7236\u985e\u7684\u529f\u80fd\uff0c\u4f46\u4e0d\u53ef\u4ee5\u6539\u8b8a\u5b83\u539f\u6709\u7684\u529f\u80fd"),(0,i.kt)("li",{parentName:"ul"},"\u5be6\u4f5c\u7e7c\u627f\u5f8c\uff0c\u9700\u8981\u78ba\u4fdd\u4ed6\u7684\u578b\u5225\u88ab\u8f49\u63db\u5f8c\u9084\u53ef\u4ee5\u7372\u5f97\u6b63\u78ba\u7684\u7d50\u679c"),(0,i.kt)("li",{parentName:"ul"},"\u53ea\u6709\u5728\u985e\u5225\u4e4b\u9593\u662f is-a \u95dc\u4fc2\u6642\u624d\u80fd\u7528\u7e7c\u627f")),(0,i.kt)("h2",{id:"\u5fc5\u9808\u7b26\u5408\u56db\u500b\u7e7c\u627f\u7684\u898f\u7bc4"},"\u5fc5\u9808\u7b26\u5408\u56db\u500b\u7e7c\u627f\u7684\u898f\u7bc4"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5b8c\u5168\u5be6\u4f5c\u7236\u985e\u7684\u65b9\u6cd5"),(0,i.kt)("li",{parentName:"ol"},"\u5b50\u985e\u5225\u53ef\u4ee5\u64c1\u6709\u4ed6\u81ea\u5df1\u7684\u7279\u6027"),(0,i.kt)("li",{parentName:"ol"},"Overload \u6642\u8981\u6ce8\u610f\u50b3\u5165\u53c3\u6578\u578b\u5225\u7684\u7236\u5b50\u95dc\u4fc2"),(0,i.kt)("li",{parentName:"ol"},"\u8f38\u51fa\u7684\u7236\u5b50\u95dc\u4fc2\u4e5f\u9700\u8981\u6ce8\u610f")),(0,i.kt)("h2",{id:"\u7bc4\u4f8b"},"\u7bc4\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\n\n// \u7236\u985e Animal\npublic class Animal\n{\n    // \u7236\u985e\u65b9\u6cd5 MakeSound\n    public virtual void MakeSound()\n    {\n        Console.WriteLine("The animal makes a sound.");\n    }\n}\n\n// \u5b50\u985e Dog\npublic class Dog : Animal\n{\n    // \u5b50\u985e\u91cd\u5beb\u7236\u985e\u65b9\u6cd5 MakeSound\n    public override void MakeSound()\n    {\n        Console.WriteLine("The dog barks.");\n    }\n\n    // \u5b50\u985e\u81ea\u5df1\u7684\u65b9\u6cd5 Fetch\n    public void Fetch()\n    {\n        Console.WriteLine("The dog fetches the ball.");\n    }\n}\n\n// \u5b50\u985e Cat\npublic class Cat : Animal\n{\n    // \u5b50\u985e\u91cd\u5beb\u7236\u985e\u65b9\u6cd5 MakeSound\n    public override void MakeSound()\n    {\n        Console.WriteLine("The cat meows.");\n    }\n\n    // \u5b50\u985e\u81ea\u5df1\u7684\u65b9\u6cd5 Scratch\n    public void Scratch()\n    {\n        Console.WriteLine("The cat scratches the furniture.");\n    }\n}\n\npublic class Program\n{\n    public static void Main(string[] args)\n    {\n        // \u4f7f\u7528\u7236\u985e\u5f15\u7528\u8b8a\u6578\u6307\u5411\u5b50\u985e\u5c0d\u8c61\n        Animal animal1 = new Dog();\n        animal1.MakeSound();  // \u8f38\u51fa: The dog barks.\n\n        Animal animal2 = new Cat();\n        animal2.MakeSound();  // \u8f38\u51fa: The cat meows.\n\n        // \u8abf\u7528\u5b50\u985e\u7279\u6709\u7684\u65b9\u6cd5\n        Dog dog = new Dog();\n        dog.Fetch();  // \u8f38\u51fa: The dog fetches the ball.\n\n        Cat cat = new Cat();\n        cat.Scratch();  // \u8f38\u51fa: The cat scratches the furniture.\n    }\n}\n')))}d.isMDXComponent=!0}}]);