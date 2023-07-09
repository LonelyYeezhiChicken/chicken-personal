"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[3021],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>f});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},s=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=i,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?t.createElement(f,a(a({ref:n},s),{},{components:r})):t.createElement(f,a({ref:n},s))}));function f(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[u]="string"==typeof e?e:i,a[1]=p;for(var l=2;l<o;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2214:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var t=r(7462),i=(r(7294),r(3905));const o={sidebar_position:25,description:"dependency inversion principle",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u7269\u4ef6\u5c0e\u5411\u8a2d\u8a08\u539f\u5247","dependency inversion principle","\u4f9d\u8cf4\u53cd\u8f49\u539f\u5247"]},a="\u4f9d\u8cf4\u53cd\u8f49\u539f\u5247",p={unversionedId:"designPattern/oop/dip",id:"designPattern/oop/dip",title:"\u4f9d\u8cf4\u53cd\u8f49\u539f\u5247",description:"dependency inversion principle",source:"@site/docs/designPattern/oop/dip.md",sourceDirName:"designPattern/oop",slug:"/designPattern/oop/dip",permalink:"/en/docs/designPattern/oop/dip",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/designPattern/oop/dip.md",tags:[],version:"current",sidebarPosition:25,frontMatter:{sidebar_position:25,description:"dependency inversion principle",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u7269\u4ef6\u5c0e\u5411\u8a2d\u8a08\u539f\u5247","dependency inversion principle","\u4f9d\u8cf4\u53cd\u8f49\u539f\u5247"]},sidebar:"tutorialSidebar",previous:{title:"\u4ecb\u9762\u9694\u96e2\u539f\u5247",permalink:"/en/docs/designPattern/oop/isp"},next:{title:"\u5de5\u5ee0\u65b9\u6cd5",permalink:"/en/docs/category/\u5de5\u5ee0\u65b9\u6cd5"}},c={},l=[{value:"dependency inversion principle",id:"dependency-inversion-principle",level:2},{value:"\u7bc4\u4f8b:",id:"\u7bc4\u4f8b",level:3}],s={toc:l},u="wrapper";function d(e){let{components:n,...r}=e;return(0,i.kt)(u,(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u4f9d\u8cf4\u53cd\u8f49\u539f\u5247"},"\u4f9d\u8cf4\u53cd\u8f49\u539f\u5247"),(0,i.kt)("h2",{id:"dependency-inversion-principle"},"dependency inversion principle"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u62bd\u8c61\u4e0d\u61c9\u8a72\u4f9d\u8cf4\u65bc\u7d30\u7bc0\uff0c\u7d30\u7bc0\u5247\u61c9\u8a72\u8981\u4f9d\u8cf4\u65bc\u62bd\u8c61"),(0,i.kt)("li",{parentName:"ul"},"\u56e0\u6b64\u6211\u5011\u9700\u8981\u5148\u5beb\u51fa\u62bd\u8c61\u4ecb\u9762\uff0c\u5728\u5be6\u4f5c\u529f\u80fd"),(0,i.kt)("li",{parentName:"ul"},"\u6240\u6709\u985e\u5225\u90fd\u8981\u76f8\u4f9d\u65bc\u62bd\u8c61\uff0c\u800c\u4e0d\u662f\u5177\u9ad4\u7684\u5be6\u4f5c"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u900f\u904e DI Container \u9054\u5230\u76ee\u7684"),(0,i.kt)("li",{parentName:"ul"},"\u70ba\u4e86\u9054\u5230\u4f4e\u8026\u5408\u7684\u76ee\u7684",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6240\u6709\u7684\u985e\u5225\u4e4b\u9593\u90fd\u9700\u8981\u900f\u904e\u62bd\u8c61\u4ecb\u9762")))),(0,i.kt)("h3",{id:"\u7bc4\u4f8b"},"\u7bc4\u4f8b:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"controller:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public class UserController\n{\n   private readonly IUserService userService\n    // DI\n    public UserController( IUserService userService )\n    {\n        this.userService = userService;\n    }\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"service :")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public interface IUserService\n{\n    //define function\n}\n\npublic class UserService:IUserService\n{\n    // Do something\n\n}\n")))}d.isMDXComponent=!0}}]);