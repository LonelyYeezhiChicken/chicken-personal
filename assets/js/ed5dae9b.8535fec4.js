"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[8977],{49613:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>s});var r=a(59496);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),m=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},u="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=m(a),c=n,s=u["".concat(p,".").concat(c)]||u[c]||k[c]||l;return a?r.createElement(s,i(i({ref:e},d),{},{components:a})):r.createElement(s,i({ref:e},d))}));function s(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:n,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},28672:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=a(88028),n=(a(59496),a(49613));const l={sidebar_position:5,description:"\u8a2d\u8a08\u6a21\u5f0f\u7b46\u8a18",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern"]},i="\ud83d\udca1 \u8a2d\u8a08\u6a21\u5f0f\u6982\u8ff0(\u4e8c)",o={unversionedId:"designPattern/overview2",id:"designPattern/overview2",title:"\ud83d\udca1 \u8a2d\u8a08\u6a21\u5f0f\u6982\u8ff0(\u4e8c)",description:"\u8a2d\u8a08\u6a21\u5f0f\u7b46\u8a18",source:"@site/docs/designPattern/overview2.md",sourceDirName:"designPattern",slug:"/designPattern/overview2",permalink:"/docs/designPattern/overview2",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/designPattern/overview2.md",tags:[{label:"\u8a2d\u8a08\u6a21\u5f0f",permalink:"/docs/tags/\u8a2d\u8a08\u6a21\u5f0f"},{label:"Design Pattern",permalink:"/docs/tags/design-pattern"}],version:"current",lastUpdatedAt:1700226472,formattedLastUpdatedAt:"2023\u5e7411\u670817\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"\u8a2d\u8a08\u6a21\u5f0f\u7b46\u8a18",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udca1 \u8a2d\u8a08\u6a21\u5f0f\u6982\u8ff0(\u4e00)",permalink:"/docs/designPattern/overview1"},next:{title:"\ud83d\udca1 \u8a2d\u8a08\u6a21\u5f0f\u6982\u8ff0(\u4e09)",permalink:"/docs/designPattern/overview3"}},p={},m=[{value:"\u8a2d\u8a08\u6a21\u5f0f\u662f\u4ec0\u9ebc\uff1f",id:"\u8a2d\u8a08\u6a21\u5f0f\u662f\u4ec0\u9ebc",level:2},{value:"\u6a21\u5f0f\u540d\u7a31(Patten Name)",id:"\u6a21\u5f0f\u540d\u7a31patten-name",level:2},{value:"\u8a2d\u8a08\u6a21\u5f0f",id:"\u8a2d\u8a08\u6a21\u5f0f",level:2},{value:"\u5275\u5efa\u578b\u6a21\u5f0f - Creational Pattern",id:"\u5275\u5efa\u578b\u6a21\u5f0f---creational-pattern",level:3},{value:"\u7d50\u69cb\u578b\u6a21\u5f0f - Structural Pattern",id:"\u7d50\u69cb\u578b\u6a21\u5f0f---structural-pattern",level:3},{value:"\u884c\u70ba\u6a21\u5f0f - Behavioral Pattern",id:"\u884c\u70ba\u6a21\u5f0f---behavioral-pattern",level:3}],d={toc:m},u="wrapper";function k(t){let{components:e,...a}=t;return(0,n.kt)(u,(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-\u8a2d\u8a08\u6a21\u5f0f\u6982\u8ff0\u4e8c"},"\ud83d\udca1 \u8a2d\u8a08\u6a21\u5f0f\u6982\u8ff0(\u4e8c)"),(0,n.kt)("h2",{id:"\u8a2d\u8a08\u6a21\u5f0f\u662f\u4ec0\u9ebc"},"\u8a2d\u8a08\u6a21\u5f0f\u662f\u4ec0\u9ebc\uff1f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8a2d\u8a08\u6a21\u5f0f\uff08Design Pattern\uff09\u662f\u4e00\u5957",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u53cd\u8986\u4f7f\u7528"),(0,n.kt)("li",{parentName:"ul"},"\u591a\u6578\u4eba\u77e5\u66c9"),(0,n.kt)("li",{parentName:"ul"},"\u7d93\u904e\u5206\u985e"))),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u8a2d\u8a08\u6a21\u5f0f\u662f\u70ba\u4e86",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u91cd\u8907\u4f7f\u7528\u7a0b\u5f0f"),(0,n.kt)("li",{parentName:"ul"},"\u63d0\u5347\u53ef\u8b80\u6027"),(0,n.kt)("li",{parentName:"ul"},"\u964d\u4f4e\u51fa\u932f\u7387")))),(0,n.kt)("h2",{id:"\u6a21\u5f0f\u540d\u7a31patten-name"},"\u6a21\u5f0f\u540d\u7a31(Patten Name)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8a2d\u8a08\u6a21\u5f0f\u5305\u542b:  ",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"\u540d\u7a31"),(0,n.kt)("li",{parentName:"ol"},"\u554f\u984c (Problem): \u5305\u542b\u8a2d\u8a08\u4e2d\u5b58\u5728\u7684\u554f\u984c\u8207\u554f\u984c\u5b58\u5728\u7684\u539f\u56e0"),(0,n.kt)("li",{parentName:"ol"},"\u76ee\u7684"),(0,n.kt)("li",{parentName:"ol"},"\u89e3\u6c7a\u65b9\u6848(Solution):\u63cf\u8ff0\u8a2d\u8a08\u6a21\u5f0f\u7684\u7d44\u6210\uff0c\u5404\u81ea\u7684\u8077\u8cac\u8207\u5354\u4f5c\u65b9\u5f0f"))),(0,n.kt)("li",{parentName:"ul"},"\u85c9\u7531\u6a21\u5f0f\u540d\u7a31\u4f86\u63cf\u8ff0\u8a2d\u8a08\u6a21\u5f0f\u5305\u542b\u7684\u9805\u76ee\uff0c\u4ee5\u9054\u5230\u6700\u6709\u6548\u7684\u6e9d\u901a"),(0,n.kt)("li",{parentName:"ul"},"\u5927\u591a\u6578\u7684\u6a21\u5f0f\u90fd\u662f\u4f7f\u7528\u5176\u529f\u80fd\uff0c\u6216\u662f\u6a21\u5f0f\u7d50\u69cb\u4f86\u547d\u540d\u7684")),(0,n.kt)("h2",{id:"\u8a2d\u8a08\u6a21\u5f0f"},"\u8a2d\u8a08\u6a21\u5f0f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8a2d\u8a08\u6a21\u5f0f\u53ef\u5206\u70ba:",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"\u5275\u5efa\u578b(Creational) -> \u63cf\u8ff0\u5982\u4f55\u5efa\u7acb\u7269\u4ef6"),(0,n.kt)("li",{parentName:"ol"},"\u7d50\u69cb\u578b(Structural) -> \u63cf\u8ff0\u5982\u4f55\u5be6\u73fe\u985e\u5225\u8207\u7269\u4ef6\u7684\u7d44\u5408"),(0,n.kt)("li",{parentName:"ol"},"\u884c\u70ba\u578b(Behavioral) -> \u7528\u65bc\u63cf\u8ff0\u985e\u5225\u8207\u7269\u4ef6\u4e4b\u9593\u600e\u6a23\u4ea4\u4e92\u53ca\u600e\u6a23\u5206\u914d\u8077\u8cac"))),(0,n.kt)("li",{parentName:"ul"},"\u6b64\u5916\u8a2d\u8a08\u6a21\u5f0f\u4e5f\u53ef\u4ee5\u5206\u70ba:",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"\u985e\u5225\u6a21\u5f0f -> \u4f8b\u5982:\u6a21\u677f\u65b9\u6cd5\u662f\u985e\u5225\u884c\u70ba\u578b\u6a21\u5f0f"),(0,n.kt)("li",{parentName:"ol"},"\u7269\u4ef6\u6a21\u5f0f -> \u4f8b\u5982:\u55ae\u4f8b\u6a21\u5f0f\u662f\u7269\u4ef6\u5275\u5efa\u578b\u6a21\u5f0f")))),(0,n.kt)("h3",{id:"\u5275\u5efa\u578b\u6a21\u5f0f---creational-pattern"},"\u5275\u5efa\u578b\u6a21\u5f0f - Creational Pattern"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u6a21\u5f0f\u540d\u7a31"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u55ae\u4f8b\u6a21\u5f0f Singleton Pattern")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u7c21\u55ae\u5de5\u5ee0\u6a21\u5f0f Simple Factory Pattern")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u5de5\u5ee0\u65b9\u6cd5\u6a21\u5f0f Factory Method Pattern")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u62bd\u8c61\u5de5\u5ee0\u6a21\u5f0f Abstract Factory Pattern")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u539f\u578b\u6a21\u5f0f Prototype Pattern")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u5efa\u9020\u8005\u6a21\u5f0f Builder Pattern")))),(0,n.kt)("h3",{id:"\u7d50\u69cb\u578b\u6a21\u5f0f---structural-pattern"},"\u7d50\u69cb\u578b\u6a21\u5f0f - Structural Pattern"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u6a21\u5f0f\u540d\u7a31"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u8f49\u63a5\u5668\u6a21\u5f0f Adapter Pattern")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u6a4b\u63a5\u6a21\u5f0f Bridge Pattern")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u7d44\u5408\u6a21\u5f0f Composite Pattern")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u88dd\u98fe\u5668\u6a21\u5f0f Decorator Pattern")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u9580\u9762\u6a21\u5f0f Facade Pattern")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u4eab\u5143\u6a21\u5f0f Flyweight Pattern")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u4ee3\u7406\u6a21\u5f0f Proxy Pattern")))),(0,n.kt)("h3",{id:"\u884c\u70ba\u6a21\u5f0f---behavioral-pattern"},"\u884c\u70ba\u6a21\u5f0f - Behavioral Pattern"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u6a21\u5f0f\u540d\u7a31"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u8077\u8cac\u93c8\u6a21\u5f0f Chain of Responsibility Pattern")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u547d\u4ee4\u6a21\u5f0f Command Pattern")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u89e3\u91cb\u5668\u6a21\u5f0f Interpreter Pattern")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u8fed\u4ee3\u5668\u6a21\u5f0f Iterator Pattern")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u4e2d\u4ecb\u8005\u6a21\u5f0f Mediator Pattern")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u5099\u5fd8\u9304\u6a21\u5f0f Memento Pattern")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u89c0\u5bdf\u8005\u6a21\u5f0f Observer Pattern")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u72c0\u614b\u6a21\u5f0f State Pattern")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u7b56\u7565\u6a21\u5f0f Strategy Pattern")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f Template Method Pattern")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u8a2a\u554f\u8005\u6a21\u5f0f Visitor Pattern")))))}k.isMDXComponent=!0}}]);