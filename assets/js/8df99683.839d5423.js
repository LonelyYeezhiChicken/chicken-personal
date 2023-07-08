"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[7272],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),o=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=o(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=o(t),h=a,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||l;return t?r.createElement(m,p(p({ref:n},s),{},{components:t})):r.createElement(m,p({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,p=new Array(l);p[0]=h;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[u]="string"==typeof e?e:a,p[1]=i;for(var o=2;o<l;o++)p[o]=t[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},2725:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var r=t(7462),a=(t(7294),t(3905));const l={sidebar_position:10,description:"open/closed principle",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u7269\u4ef6\u5c0e\u5411\u8a2d\u8a08\u539f\u5247","open/closed principle","\u958b\u9589\u539f\u5247"]},p="\u958b\u9589\u539f\u5247",i={unversionedId:"designPattern/oop/ocp",id:"designPattern/oop/ocp",title:"\u958b\u9589\u539f\u5247",description:"open/closed principle",source:"@site/docs/designPattern/oop/ocp.md",sourceDirName:"designPattern/oop",slug:"/designPattern/oop/ocp",permalink:"/docs/designPattern/oop/ocp",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/designPattern/oop/ocp.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"open/closed principle",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u7269\u4ef6\u5c0e\u5411\u8a2d\u8a08\u539f\u5247","open/closed principle","\u958b\u9589\u539f\u5247"]},sidebar:"tutorialSidebar",previous:{title:"\u55ae\u4e00\u8cac\u4efb\u539f\u5247",permalink:"/docs/designPattern/oop/srp"},next:{title:"\u91cc\u6c0f\u66ff\u63db\u539f\u5247",permalink:"/docs/designPattern/oop/lsp"}},c={},o=[{value:"open/closed principle",id:"openclosed-principle",level:2},{value:"\u53ef\u64f4\u5145\u7684\u4f5c\u6cd5:",id:"\u53ef\u64f4\u5145\u7684\u4f5c\u6cd5",level:3},{value:"\u7bc4\u4f8b: \u9700\u8981\u53ef\u4ee5\u652f\u63f4\u5404\u5f0f\u5716\u8868",id:"\u7bc4\u4f8b-\u9700\u8981\u53ef\u4ee5\u652f\u63f4\u5404\u5f0f\u5716\u8868",level:3},{value:"1. \u521d\u671f\u65b9\u6848",id:"1-\u521d\u671f\u65b9\u6848",level:3},{value:"2. \u4f7f\u7528 OCP \u539f\u5247\u91cd\u69cb",id:"2-\u4f7f\u7528-ocp-\u539f\u5247\u91cd\u69cb",level:3}],s={toc:o},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u958b\u9589\u539f\u5247"},"\u958b\u9589\u539f\u5247"),(0,a.kt)("h2",{id:"openclosed-principle"},"open/closed principle"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7a0b\u5f0f\u78bc\u90fd\u6709\u53ef\u80fd\u56e0\u70ba\u9700\u6c42\u7684\u589e\u52a0\u9700\u8981\u64f4\u5145"),(0,a.kt)("li",{parentName:"ul"},"\u800c\u64f4\u5145\u4e0d\u61c9\u8a72\u4fee\u6539\u539f\u59cb\u7684\u7a0b\u5f0f\u78bc"),(0,a.kt)("li",{parentName:"ul"},"\u61c9\u8a72\u65b0\u589e\u52a0\u662f\u7a0b\u5f0f\u78bc\u4f86\u64f4\u5145\u539f\u672c\u7684\u7cfb\u7d71")),(0,a.kt)("h3",{id:"\u53ef\u64f4\u5145\u7684\u4f5c\u6cd5"},"\u53ef\u64f4\u5145\u7684\u4f5c\u6cd5:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u900f\u904e\u7e7c\u627f"),(0,a.kt)("li",{parentName:"ol"},"C# \u6709\u64f4\u5145\u65b9\u6cd5")),(0,a.kt)("h3",{id:"\u7bc4\u4f8b-\u9700\u8981\u53ef\u4ee5\u652f\u63f4\u5404\u5f0f\u5716\u8868"},"\u7bc4\u4f8b: \u9700\u8981\u53ef\u4ee5\u652f\u63f4\u5404\u5f0f\u5716\u8868"),(0,a.kt)("h3",{id:"1-\u521d\u671f\u65b9\u6848"},"1. \u521d\u671f\u65b9\u6848"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5713\u9905\u5716\u985e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public class PicChart\n{\n    public void display()\n    {\n        // Create pie chart\n    }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u67f1\u72c0\u5716\u985e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public class BarChart\n{\n    public void display()\n    {\n        // Create bar chart\n    }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"service")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'public class ChartService\n{\n    public void displayChart(string type)\n    {\n        switch(type)\n        {\n            case type.Equals("pie") :\n                PicChart chart = new PicChart();\n                chart.display();\n            case type.Equals("bar") :\n                BarChart chart = new BarChart();\n                chart.display();\n        }\n    }\n}\n')),(0,a.kt)("h3",{id:"2-\u4f7f\u7528-ocp-\u539f\u5247\u91cd\u69cb"},"2. \u4f7f\u7528 OCP \u539f\u5247\u91cd\u69cb"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5716\u8868\u4ecb\u9762")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public interface IChart\n{\n    void display();\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5713\u9905\u5716\u985e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public class PicChart : IChart\n{\n    public void display()\n    {\n        // Create pie chart\n    }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u67f1\u72c0\u5716\u985e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public class BarChart : IChart\n{\n    public void display()\n    {\n        // Create bar chart\n    }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"service")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'public class ChartService\n{\n    // \u5de5\u5ee0\u6a21\u5f0f\n    private IChart SetChart(string type)\n    {\n        switch(type)\n        {\n            case type.Equals("pie") :\n                return new PicChart();\n            case type.Equals("bar") :\n               return new BarChart();\n            default\n                throw new NotImplementedException();\n        }\n    }\n\n    public void displayChart(string type)\n    {\n        IChart chart = SetChart(type);\n        chart.display();\n    }\n}\n')))}d.isMDXComponent=!0}}]);