"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[5090],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>m});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),l=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,m=u["".concat(s,".").concat(d)]||u[d]||y[d]||i;return r?t.createElement(m,a(a({ref:n},p),{},{components:r})):t.createElement(m,a({ref:n},p))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},180:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>y,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=r(7462),o=(r(7294),r(3905));const i={sidebar_position:30,description:"Func to Expression (Compile())",key:["Csharp","\u96dc\u8a18","\u59d4\u6d3e\u8207\u59d4\u6d3e\u8868\u9054\u6a39","Func to Expression"]},a="\u59d4\u6d3e\u8207\u59d4\u6d3e\u8868\u9054\u6a39",c={unversionedId:"daylily/csharpDaylily/csharpFunc2Expression",id:"daylily/csharpDaylily/csharpFunc2Expression",title:"\u59d4\u6d3e\u8207\u59d4\u6d3e\u8868\u9054\u6a39",description:"Func to Expression (Compile())",source:"@site/docs/daylily/csharpDaylily/csharpFunc2Expression.md",sourceDirName:"daylily/csharpDaylily",slug:"/daylily/csharpDaylily/csharpFunc2Expression",permalink:"/docs/daylily/csharpDaylily/csharpFunc2Expression",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/daylily/csharpDaylily/csharpFunc2Expression.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,description:"Func to Expression (Compile())",key:["Csharp","\u96dc\u8a18","\u59d4\u6d3e\u8207\u59d4\u6d3e\u8868\u9054\u6a39","Func to Expression"]},sidebar:"tutorialSidebar",previous:{title:"List to string \u52a0\u5165\u5206\u9694\u7b26\u865f",permalink:"/docs/daylily/csharpDaylily/csharpList2StringAddWord"},next:{title:"\u53cd\u5c04\u985e\u5225\u5c6c\u6027\uff0c\u53d6\u503c\u8207\u6539\u503c",permalink:"/docs/daylily/csharpDaylily/csharpReflectionClass"}},s={},l=[{value:"Func to Expression (Compile())",id:"func-to-expression-compile",level:2},{value:"Expression to Func",id:"expression-to-func",level:3}],p={toc:l},u="wrapper";function y(e){let{components:n,...r}=e;return(0,o.kt)(u,(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u59d4\u6d3e\u8207\u59d4\u6d3e\u8868\u9054\u6a39"},"\u59d4\u6d3e\u8207\u59d4\u6d3e\u8868\u9054\u6a39"),(0,o.kt)("h2",{id:"func-to-expression-compile"},"Func to Expression (Compile())"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"void Main()\n{\n    data.Where(GetNo5().Compile()).Dump();\n}\npublic Expression<Func<int,bool>> GetNo5()\n{\n    return x => x == 5;\n}\npublic List<int> data = new List<int>(){1,2,3,4,5,6,7,8,9};\n")),(0,o.kt)("h3",{id:"expression-to-func"},"Expression to Func"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"void Main()\n{\n    data.Where(GetNo(No1()).Compile()).Dump();\n    data.Where(GetNo(No5()).Compile()).Dump();\n}\n\npublic Expression<Func<int,bool>> GetNo(Func<int,bool> func)\n{\n    return x => func(x);\n}\n\npublic Func<int,bool> No1() => x => x == 1;\n\npublic Func<int,bool> No5() => x => x == 5;\n\npublic List<int> data = new List<int>(){1,2,3,4,5,6,7,8,9};\n")))}y.isMDXComponent=!0}}]);