"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[1704],{49613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25868:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(88028),r=(n(59496),n(49613));const l={sidebar_position:5,description:"\u7c21\u55ae\u5de5\u5ee0 (Simple Factory Pattern)",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u7c21\u55ae\u5de5\u5ee0","Simple Factory Pattern"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern"]},i="\ud83d\udca1 \u7c21\u55ae\u5de5\u5ee0",o={unversionedId:"designPattern/creationalPattern/factory/sfp",id:"designPattern/creationalPattern/factory/sfp",title:"\ud83d\udca1 \u7c21\u55ae\u5de5\u5ee0",description:"\u7c21\u55ae\u5de5\u5ee0 (Simple Factory Pattern)",source:"@site/docs/designPattern/creationalPattern/factory/sfp.md",sourceDirName:"designPattern/creationalPattern/factory",slug:"/designPattern/creationalPattern/factory/sfp",permalink:"/docs/designPattern/creationalPattern/factory/sfp",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/designPattern/creationalPattern/factory/sfp.md",tags:[{label:"\u8a2d\u8a08\u6a21\u5f0f",permalink:"/docs/tags/\u8a2d\u8a08\u6a21\u5f0f"},{label:"Design Pattern",permalink:"/docs/tags/design-pattern"}],version:"current",lastUpdatedAt:1704630401,formattedLastUpdatedAt:"2024\u5e741\u67087\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"\u7c21\u55ae\u5de5\u5ee0 (Simple Factory Pattern)",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u7c21\u55ae\u5de5\u5ee0","Simple Factory Pattern"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udca1 \u5de5\u5ee0\u6a21\u5f0f",permalink:"/docs/designPattern/creationalPattern/factory/fmp"},next:{title:"\ud83d\udca1 \u62bd\u8c61\u5de5\u5ee0",permalink:"/docs/designPattern/creationalPattern/factory/abstractFactory"}},c={},p=[{value:"Simple Factory Pattern",id:"simple-factory-pattern",level:2},{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u512a\u7f3a\u9ede",id:"\u512a\u7f3a\u9ede",level:2},{value:"\u61c9\u7528\u5834\u666f",id:"\u61c9\u7528\u5834\u666f",level:2},{value:"\u7bc4\u4f8b",id:"\u7bc4\u4f8b",level:2},{value:"1. \u5efa\u7acb\u5831\u8868\u4ecb\u9762",id:"1-\u5efa\u7acb\u5831\u8868\u4ecb\u9762",level:3},{value:"2. \u5be6\u4f5c\u4ecb\u9762",id:"2-\u5be6\u4f5c\u4ecb\u9762",level:3},{value:"3. \u5efa\u7acb\u5217\u8209",id:"3-\u5efa\u7acb\u5217\u8209",level:3},{value:"4. \u5de5\u5ee0\u985e\u5225",id:"4-\u5de5\u5ee0\u985e\u5225",level:3},{value:"5. \u5be6\u969b\u4f7f\u7528",id:"5-\u5be6\u969b\u4f7f\u7528",level:3},{value:"\u7c21\u55ae\u5de5\u5ee0\u89d2\u8272",id:"\u7c21\u55ae\u5de5\u5ee0\u89d2\u8272",level:2},{value:"1. \u5de5\u5ee0\u89d2\u8272 <code>Factory</code>",id:"1-\u5de5\u5ee0\u89d2\u8272-factory",level:3},{value:"2. \u62bd\u8c61\u7522\u54c1\u89d2\u8272 <code>Product</code>",id:"2-\u62bd\u8c61\u7522\u54c1\u89d2\u8272-product",level:3},{value:"3. \u5be6\u969b\u7522\u54c1\u89d2\u8272 <code>Concrete</code>",id:"3-\u5be6\u969b\u7522\u54c1\u89d2\u8272-concrete",level:3}],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-\u7c21\u55ae\u5de5\u5ee0"},"\ud83d\udca1 \u7c21\u55ae\u5de5\u5ee0"),(0,r.kt)("h2",{id:"simple-factory-pattern"},"Simple Factory Pattern"),(0,r.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4ed6\u4e0d\u5c6c\u65bc GoF 23 \u7d93\u5178\u8a2d\u8a08\u6a21\u5f0f"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u904e\u4ed6\u5e38\u5e38\u88ab\u62ff\u4f86\u7576\u4f5c\u5b78\u7fd2\u5176\u4ed6\u5de5\u5ee0\u6a21\u5f0f\u7684\u57fa\u790e"),(0,r.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u6982\u5ff5\u70ba: \u50b3\u5165\u6b63\u78ba\u53c3\u6578\uff0c\u5c31\u53ef\u4ee5\u7372\u5f97\u6240\u9700\u8981\u7684\u7269\u4ef6\uff0c\u800c\u4e14\u4e0d\u9700\u77e5\u9053\u7d30\u7bc0"),(0,r.kt)("li",{parentName:"ul"},"\u7531\u65bc\u5efa\u7acb\u7269\u4ef6\u901a\u5e38\u7531\u975c\u614b\u51fd\u5f0f\u5be6\u73fe\uff0c\u56e0\u6b64\u53c8\u7a31 ",(0,r.kt)("inlineCode",{parentName:"li"},"\u975c\u614b\u5de5\u5ee0\u65b9\u6cd5"))),(0,r.kt)("h2",{id:"\u512a\u7f3a\u9ede"},"\u512a\u7f3a\u9ede"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u512a\u9ede:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u5c07\u5efa\u7acb\u7269\u4ef6\uff0c\u8207\u7269\u4ef6\u7684\u4f7f\u7528\u5206\u96e2"),(0,r.kt)("li",{parentName:"ol"},"\u958b\u767c\u8005\u4e0d\u7528\u77e5\u9053\u985e\u5225\u7684\u540d\u7a31\uff0c\u53ea\u9700\u8981\u77e5\u9053\u53c3\u6578\u7684\u4ee3\u865f\u5373\u53ef\uff0c\u53ef\u5927\u5e45\u6e1b\u5c11\u4f7f\u7528\u8907\u67e5\u547d\u540d\u7684\u932f\u8aa4\u7387"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u53c3\u6578\u900f\u904e\u6a94\u6848\u50b3\u5165\uff0c\u90a3\u53ef\u4ee5\u589e\u52a0\u7cfb\u7d71\u7684\u9748\u6d3b\u6027"))),(0,r.kt)("li",{parentName:"ul"},"\u7f3a\u9ede:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u7531\u65bc\u5b83\u5305\u542b\u4e86\u6240\u6709\u985e\u5225\u7684\u5efa\u7acb\uff0c\u56e0\u4f7f\u8077\u8cac\u6975\u91cd\uff0c\u7576\u4ed6\u7121\u6cd5\u904b\u4f5c\u6703\u5c0d\u7cfb\u7d71\u9020\u6210\u6975\u5927\u7684\u5f71\u97ff"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u7522\u54c1\u5f88\u591a\uff0c\u5bb9\u6613\u9020\u6210\u7cfb\u7d71\u7684\u8907\u96dc\u5ea6\u63d0\u9ad8\u8207\u7a0b\u5f0f\u53ef\u8b80\u6027\u964d\u4f4e"),(0,r.kt)("li",{parentName:"ol"},"\u4e0d\u6613\u64f4\u5c55\uff0c\u6bcf\u7576\u6709\u65b0\u7684\u7522\u54c1\u52a0\u5165\uff0c\u5c31\u4e0d\u5f97\u4e0d\u4fee\u6539\u5de5\u5ee0\u908f\u8f2f")))),(0,r.kt)("h2",{id:"\u61c9\u7528\u5834\u666f"},"\u61c9\u7528\u5834\u666f"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u9700\u5efa\u7acb\u7684\u7522\u54c1\u6bd4\u8f03\u5c11\uff0c\u624d\u4e0d\u6703\u5c0d\u63d0\u9ad8\u5de5\u5ee0\u7684\u8907\u96dc\u7dad\u5ea6"),(0,r.kt)("li",{parentName:"ol"},"\u5ba2\u6236\u7aef\u53ea\u9700\u8981\u77e5\u9053\u53c3\u6578\u5373\u53ef\uff0c\u5c0d\u5982\u4f55\u5efa\u7acb\u7269\u4ef6\u7121\u9808\u77e5\u9053")),(0,r.kt)("h2",{id:"\u7bc4\u4f8b"},"\u7bc4\u4f8b"),(0,r.kt)("h3",{id:"1-\u5efa\u7acb\u5831\u8868\u4ecb\u9762"},"1. \u5efa\u7acb\u5831\u8868\u4ecb\u9762"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public interface IChart {\n     void display();\n}\n")),(0,r.kt)("h3",{id:"2-\u5be6\u4f5c\u4ecb\u9762"},"2. \u5be6\u4f5c\u4ecb\u9762"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public class HistogramChart:IChart {\n    public void display()\n    {\n       // \u986f\u793a \u67f1\u72c0\u5716\n    }\n}\n\npublic class PiChart:IChart {\n    public void display()\n    {\n        // \u986f\u793a \u5713\u9905\u5716\n    }\n}\n\npublic class LineChart:IChart {\n    public void display()\n    {\n        // \u986f\u793a \u6298\u7dda\u5716\n    }\n}\n")),(0,r.kt)("h3",{id:"3-\u5efa\u7acb\u5217\u8209"},"3. \u5efa\u7acb\u5217\u8209"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public enum ChartType\n{\n    histogram,\n    pie,\n    line\n}\n")),(0,r.kt)("h3",{id:"4-\u5de5\u5ee0\u985e\u5225"},"4. \u5de5\u5ee0\u985e\u5225"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public class Factory {\n    // \u975c\u614b\u5de5\u5ee0\u65b9\u6cd5\n   public static IChart GetChart(ChartType chartType)\n   {\n    switch (chartType)\n    {\n        case ChartType.histogram :\n            return new HistogramChart();\n        case ChartType.pie :\n            return new PiChart();\n        case ChartType.line :\n            return new LineChart();\n        default:\n        throw new Exception("\u7121\u6b64\u985e\u578b\u7684\u5831\u8868!");\n    }\n   }\n}\n')),(0,r.kt)("h3",{id:"5-\u5be6\u969b\u4f7f\u7528"},"5. \u5be6\u969b\u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"void Main()\n{\n    // \u67f1\u72c0\u5716\n    Factory.GetChart(ChartType.histogram).display();\n    // \u5713\u9905\u5716\n    Factory.GetChart(ChartType.pie).display();\n    // \u6298\u7dda\u5716\n    Factory.GetChart(ChartType.line).display();\n}\n")),(0,r.kt)("h2",{id:"\u7c21\u55ae\u5de5\u5ee0\u89d2\u8272"},"\u7c21\u55ae\u5de5\u5ee0\u89d2\u8272"),(0,r.kt)("p",null,"\u7531\u7c21\u55ae\u5de5\u5ee0\u7684\u7d50\u69cb\u4e2d\uff0c\u53ef\u4ee5\u6b78\u7d0d\u51fa\u4ee5\u4e0b\u5e7e\u500b\u89d2\u8272"),(0,r.kt)("h3",{id:"1-\u5de5\u5ee0\u89d2\u8272-factory"},"1. \u5de5\u5ee0\u89d2\u8272 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Factory")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4ed6\u662f\u6574\u500b\u6a21\u5f0f\u7684\u6838\u5fc3\uff0c\u8ca0\u8cac\u5be6\u73fe\u6240\u6709\u7522\u54c1"),(0,r.kt)("li",{parentName:"ul"},"\u61c9\u8a72\u70ba\u975c\u614b\u65b9\u6cd5"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9808\u56de\u50b3\u62bd\u8c61\u985e\u5225")),(0,r.kt)("h3",{id:"2-\u62bd\u8c61\u7522\u54c1\u89d2\u8272-product"},"2. \u62bd\u8c61\u7522\u54c1\u89d2\u8272 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Product")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u70ba\u6240\u6709\u5546\u54c1\u7684\u7236\u985e"),(0,r.kt)("li",{parentName:"ul"},"\u4ed6\u5fc5\u9808\u5b9a\u7fa9\u6240\u6709\u5546\u54c1\u7684\u898f\u683c"),(0,r.kt)("li",{parentName:"ul"},"\u4e5f\u6703\u662f\u5de5\u5ee0\u56de\u50b3\u7684\u5c0d\u8c61")),(0,r.kt)("h3",{id:"3-\u5be6\u969b\u7522\u54c1\u89d2\u8272-concrete"},"3. \u5be6\u969b\u7522\u54c1\u89d2\u8272 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Concrete")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u662f\u5de5\u5ee0\u89d2\u8272\u5be6\u73fe\u7684\u76ee\u6a19"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9808\u7e7c\u627f\u4e26\u5be6\u4f5c\u62bd\u8c61\u7522\u54c1")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u7531\u65bc\u9700\u8981\u5c0d\u62bd\u8c61\u5546\u54c1\u9032\u884c\u91cd\u69cb\\\n\u56e0\u6b64\u5546\u54c1\u898f\u683c\u4e0d\u53ef\u4ee5\u5305\u5c71\u5305\u6d77\\\n\u61c9\u8a72\u70ba\u55ae\u4e00\u5c64\u6b21\u7684\u7d50\u69cb")))}d.isMDXComponent=!0}}]);