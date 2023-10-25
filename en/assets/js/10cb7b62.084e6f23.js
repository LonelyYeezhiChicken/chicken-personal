"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[9116],{49613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(b,c(c({ref:t},s),{},{components:n})):r.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,c[1]=l;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79013:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(88028),o=(n(59496),n(49613));const a={sidebar_position:20,description:"\u88dd\u98fe\u8005\u6a21\u5f0f  (Decorator Pattern)",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u88dd\u98fe\u8005\u6a21\u5f0f","Decorator Pattern"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern"]},c="\ud83d\udca1 \u88dd\u98fe\u8005\u6a21\u5f0f",l={unversionedId:"designPattern/structuralPattern/decorator",id:"designPattern/structuralPattern/decorator",title:"\ud83d\udca1 \u88dd\u98fe\u8005\u6a21\u5f0f",description:"\u88dd\u98fe\u8005\u6a21\u5f0f  (Decorator Pattern)",source:"@site/docs/designPattern/structuralPattern/decorator.md",sourceDirName:"designPattern/structuralPattern",slug:"/designPattern/structuralPattern/decorator",permalink:"/en/docs/designPattern/structuralPattern/decorator",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/designPattern/structuralPattern/decorator.md",tags:[{label:"\u8a2d\u8a08\u6a21\u5f0f",permalink:"/en/docs/tags/\u8a2d\u8a08\u6a21\u5f0f"},{label:"Design Pattern",permalink:"/en/docs/tags/design-pattern"}],version:"current",lastUpdatedAt:1698245106,formattedLastUpdatedAt:"Oct 25, 2023",sidebarPosition:20,frontMatter:{sidebar_position:20,description:"\u88dd\u98fe\u8005\u6a21\u5f0f  (Decorator Pattern)",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u88dd\u98fe\u8005\u6a21\u5f0f","Decorator Pattern"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udca1 \u7d44\u5408\u6a21\u5f0f",permalink:"/en/docs/designPattern/structuralPattern/composite"},next:{title:"C# \u59d4\u6d3e\u8207\u4e8b\u4ef6",permalink:"/en/docs/category/c-\u59d4\u6d3e\u8207\u4e8b\u4ef6"}},i={},p=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u88dd\u98fe\u8005\u6a21\u5f0f\u7684\u4e3b\u8981\u512a\u9ede",id:"\u88dd\u98fe\u8005\u6a21\u5f0f\u7684\u4e3b\u8981\u512a\u9ede",level:2},{value:"\u88dd\u98fe\u8005\u6a21\u5f0f\u7684\u7bc4\u4f8b",id:"\u88dd\u98fe\u8005\u6a21\u5f0f\u7684\u7bc4\u4f8b",level:2},{value:"1. \u5b9a\u7fa9 Component \u4ecb\u9762",id:"1-\u5b9a\u7fa9-component-\u4ecb\u9762",level:3},{value:"2. \u5b9a\u7fa9\u5177\u9ad4\u7d44\u4ef6",id:"2-\u5b9a\u7fa9\u5177\u9ad4\u7d44\u4ef6",level:3},{value:"3. \u5b9a\u7fa9\u88dd\u98fe\u8005\u62bd\u8c61\u985e\u5225",id:"3-\u5b9a\u7fa9\u88dd\u98fe\u8005\u62bd\u8c61\u985e\u5225",level:3},{value:"4. \u5b9a\u7fa9\u5177\u9ad4\u88dd\u98fe\u8005",id:"4-\u5b9a\u7fa9\u5177\u9ad4\u88dd\u98fe\u8005",level:3},{value:"5. \u4e3b\u7a0b\u5f0f",id:"5-\u4e3b\u7a0b\u5f0f",level:3},{value:"6. \u7d50\u679c",id:"6-\u7d50\u679c",level:3}],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-\u88dd\u98fe\u8005\u6a21\u5f0f"},"\ud83d\udca1 \u88dd\u98fe\u8005\u6a21\u5f0f"),(0,o.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,o.kt)("p",null,"\u88dd\u98fe\u8005\u6a21\u5f0f\u662f\u4e00\u7a2e\u7d50\u69cb\u578b\u8a2d\u8a08\u6a21\u5f0f\uff0c\u5b83\u5141\u8a31\u4f60\u5728\u4e0d\u4fee\u6539\u73fe\u6709\u7269\u4ef6\u7684\u60c5\u6cc1\u4e0b\uff0c\u52d5\u614b\u5730\u5c07\u65b0\u884c\u70ba\u6dfb\u52a0\u5230\u7269\u4ef6\u9019\u7a2e\u6a21\u5f0f\u662f\u7e7c\u627f\u7684\u4e00\u500b\u66ff\u4ee3\u65b9\u6848\uff0c\u53ef\u4ee5\u7528\u4f86\u64f4\u5145 class \u7684\u529f\u80fd"),(0,o.kt)("p",null,"\u88dd\u98fe\u8005\u6a21\u5f0f\u901a\u5e38\u6d89\u53ca\u4e00\u500b\u62bd\u8c61\u7d44\u4ef6\uff08Component\uff09\uff0c\u5177\u9ad4\u7d44\u4ef6\uff08ConcreteComponent\uff09\uff0c\u88dd\u98fe\u8005\uff08Decorator\uff09\uff0c\u4ee5\u53ca\u5177\u9ad4\u88dd\u98fe\u8005\uff08ConcreteDecorator\uff09\u62bd\u8c61\u7d44\u4ef6\u5b9a\u7fa9\u4e86\u4ecb\u9762\uff0c\u5177\u9ad4\u7d44\u4ef6\u5be6\u73fe\u4e86\u5177\u9ad4\u7684\u529f\u80fd\uff0c\u88dd\u98fe\u8005\u5305\u542b\u4e00\u500b\u6307\u5411\u62bd\u8c61\u7d44\u4ef6\u7684\u5f15\u7528\u4e26\u5be6\u73fe\u4e86\u76f8\u540c\u7684\u4ecb\u9762\uff0c\u5177\u9ad4\u88dd\u98fe\u8005\u64f4\u5145\u4e86\u88dd\u98fe\u8005\u4e26\u6dfb\u52a0\u4e86\u65b0\u7684\u529f\u80fd"),(0,o.kt)("h2",{id:"\u88dd\u98fe\u8005\u6a21\u5f0f\u7684\u4e3b\u8981\u512a\u9ede"},"\u88dd\u98fe\u8005\u6a21\u5f0f\u7684\u4e3b\u8981\u512a\u9ede"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9748\u6d3b\u6027\uff1a\u4f60\u53ef\u4ee5\u52d5\u614b\u6dfb\u52a0\u65b0\u529f\u80fd\uff0c\u800c\u4e0d\u9700\u8981\u4fee\u6539\u73fe\u6709\u4ee3\u78bc"),(0,o.kt)("li",{parentName:"ul"},"\u958b\u653e/\u5c01\u9589\u539f\u5247\uff1a\u4e0d\u9700\u8981\u4fee\u6539\u73fe\u6709\u4ee3\u78bc\uff0c\u5c31\u53ef\u4ee5\u64f4\u5145\u7269\u4ef6\u7684\u884c\u70ba"),(0,o.kt)("li",{parentName:"ul"},"\u7c21\u55ae\u6027\uff1a\u4f60\u53ef\u4ee5\u7528\u591a\u500b\u7c21\u55ae\u7684\u88dd\u98fe\u8005\u7d44\u5408\u4f86\u5be6\u73fe\u8907\u96dc\u7684\u529f\u80fd\uff0c\u800c\u4e0d\u9700\u8981\u4e00\u500b\u9f90\u5927\u7684\u985e\u5c64\u6b21\u7d50\u69cb")),(0,o.kt)("h2",{id:"\u88dd\u98fe\u8005\u6a21\u5f0f\u7684\u7bc4\u4f8b"},"\u88dd\u98fe\u8005\u6a21\u5f0f\u7684\u7bc4\u4f8b"),(0,o.kt)("h3",{id:"1-\u5b9a\u7fa9-component-\u4ecb\u9762"},"1. \u5b9a\u7fa9 Component \u4ecb\u9762"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public interface IComponent\n{\n    void Operation();\n}\n")),(0,o.kt)("h3",{id:"2-\u5b9a\u7fa9\u5177\u9ad4\u7d44\u4ef6"},"2. \u5b9a\u7fa9\u5177\u9ad4\u7d44\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'public class ConcreteComponent : IComponent\n{\n    public void Operation()\n    {\n        Console.WriteLine("\u5177\u9ad4\u7d44\u4ef6\u64cd\u4f5c");\n    }\n}\n')),(0,o.kt)("h3",{id:"3-\u5b9a\u7fa9\u88dd\u98fe\u8005\u62bd\u8c61\u985e\u5225"},"3. \u5b9a\u7fa9\u88dd\u98fe\u8005\u62bd\u8c61\u985e\u5225"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public abstract class Decorator : IComponent\n{\n    protected IComponent component;\n\n    public Decorator(IComponent component)\n    {\n        this.component = component;\n    }\n\n    public virtual void Operation()\n    {\n        component.Operation();\n    }\n}\n")),(0,o.kt)("h3",{id:"4-\u5b9a\u7fa9\u5177\u9ad4\u88dd\u98fe\u8005"},"4. \u5b9a\u7fa9\u5177\u9ad4\u88dd\u98fe\u8005"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'public class ConcreteDecoratorA : Decorator\n{\n    public ConcreteDecoratorA(IComponent component) : base(component)\n    {\n    }\n\n    public override void Operation()\n    {\n        base.Operation();\n        Console.WriteLine("\u5177\u9ad4\u88dd\u98fe\u8005 A \u7684\u64cd\u4f5c");\n    }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'public class ConcreteDecoratorB : Decorator\n{\n    public ConcreteDecoratorB(IComponent component) : base(component)\n    {\n    }\n\n    public override void Operation()\n    {\n        base.Operation();\n        Console.WriteLine("\u5177\u9ad4\u88dd\u98fe\u8005 B \u7684\u64cd\u4f5c");\n    }\n}\n')),(0,o.kt)("h3",{id:"5-\u4e3b\u7a0b\u5f0f"},"5. \u4e3b\u7a0b\u5f0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"class Program\n{\n    static void Main(string[] args)\n    {\n        IComponent component = new ConcreteComponent();\n        Decorator decoratorA = new ConcreteDecoratorA(component);\n        Decorator decoratorB = new ConcreteDecoratorB(decoratorA);\n\n        decoratorB.Operation();\n    }\n}\n")),(0,o.kt)("h3",{id:"6-\u7d50\u679c"},"6. \u7d50\u679c"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5177\u9ad4\u7d44\u4ef6\u64cd\u4f5c"),(0,o.kt)("p",{parentName:"blockquote"},"\u5177\u9ad4\u88dd\u98fe\u8005 A \u7684\u64cd\u4f5c"),(0,o.kt)("p",{parentName:"blockquote"},"\u5177\u9ad4\u88dd\u98fe\u8005 B \u7684\u64cd\u4f5c")))}d.isMDXComponent=!0}}]);