"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[690],{49613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41942:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(88028),a=(n(59496),n(49613));const l={sidebar_position:5,description:"single repository principle",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u7269\u4ef6\u5c0e\u5411\u8a2d\u8a08\u539f\u5247","single repository principle","\u55ae\u4e00\u8cac\u4efb\u539f\u5247"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u7269\u4ef6\u5c0e\u5411\u8a2d\u8a08\u539f\u5247"]},i="\ud83d\udca1 \u55ae\u4e00\u8cac\u4efb\u539f\u5247",o={unversionedId:"designPattern/oop/srp",id:"designPattern/oop/srp",title:"\ud83d\udca1 \u55ae\u4e00\u8cac\u4efb\u539f\u5247",description:"single repository principle",source:"@site/docs/designPattern/oop/srp.md",sourceDirName:"designPattern/oop",slug:"/designPattern/oop/srp",permalink:"/en/docs/designPattern/oop/srp",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/designPattern/oop/srp.md",tags:[{label:"\u8a2d\u8a08\u6a21\u5f0f",permalink:"/en/docs/tags/\u8a2d\u8a08\u6a21\u5f0f"},{label:"Design Pattern",permalink:"/en/docs/tags/design-pattern"},{label:"\u7269\u4ef6\u5c0e\u5411\u8a2d\u8a08\u539f\u5247",permalink:"/en/docs/tags/\u7269\u4ef6\u5c0e\u5411\u8a2d\u8a08\u539f\u5247"}],version:"current",lastUpdatedAt:1702200765,formattedLastUpdatedAt:"Dec 10, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"single repository principle",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u7269\u4ef6\u5c0e\u5411\u8a2d\u8a08\u539f\u5247","single repository principle","\u55ae\u4e00\u8cac\u4efb\u539f\u5247"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern","\u7269\u4ef6\u5c0e\u5411\u8a2d\u8a08\u539f\u5247"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udca1 \u7269\u4ef6\u5c0e\u5411\u8a2d\u8a08\u539f\u5247\u6982\u8ff0",permalink:"/en/docs/designPattern/oop/oopOverview"},next:{title:"\ud83d\udca1 \u958b\u9589\u539f\u5247",permalink:"/en/docs/designPattern/oop/ocp"}},s={},p=[{value:"single repository principle",id:"single-repository-principle",level:2},{value:"\u7531\u4ee5\u4e0a\u7a0b\u5f0f\u78bc\u53ef\u4ee5\u767c\u73fe",id:"\u7531\u4ee5\u4e0a\u7a0b\u5f0f\u78bc\u53ef\u4ee5\u767c\u73fe",level:2},{value:"\u4ee5\u55ae\u4e00\u8077\u8cac\u9032\u884c\u91cd\u69cb",id:"\u4ee5\u55ae\u4e00\u8077\u8cac\u9032\u884c\u91cd\u69cb",level:2},{value:"1. DBUtil",id:"1-dbutil",level:3},{value:"2. CustomerDao",id:"2-customerdao",level:3},{value:"3. CustomerDataChart",id:"3-customerdatachart",level:3},{value:"\u5e38\u898b\u554f\u984c",id:"\u5e38\u898b\u554f\u984c",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-\u55ae\u4e00\u8cac\u4efb\u539f\u5247"},"\ud83d\udca1 \u55ae\u4e00\u8cac\u4efb\u539f\u5247"),(0,a.kt)("h2",{id:"single-repository-principle"},"single repository principle"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8cac\u4efb(Responsibility)"),(0,a.kt)("li",{parentName:"ul"},"\u5f37\u8abf\u9ad8\u5167\u805a\uff0c\u4f4e\u8026\u5408"),(0,a.kt)("li",{parentName:"ul"},"\u9700\u5c07\u8cac\u4efb\u5c01\u88dd\u65bc\u5404\u500b class \u4e4b\u4e2d"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u591a\u500b\u8077\u8cac\u7e3d\u662f\u540c\u6642\u767c\u751f\uff0c\u53ef\u5c07\u5176\u5c01\u88dd\u65bc\u540c\u4e00 class \u4e4b\u4e2d")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"Public class CustomerDataChart{\n\n    // connection\n    Public void getConnection()\n    {\n        //TODO : connection to DB\n    }\n\n    // Read\n    Public List<CustomersDto> Read()\n    {\n        // TODO : SELECT * FROM Custorm\n    }\n\n    // create\n    Public void Creat(CustomersDto data)\n    {\n        // TODO : create\n    }\n\n    // \u986f\u793a\u5716\u8868\n    Public void displayChart()\n    {\n        // TODO : Show chart\n    }\n\n}\n")),(0,a.kt)("h2",{id:"\u7531\u4ee5\u4e0a\u7a0b\u5f0f\u78bc\u53ef\u4ee5\u767c\u73fe"},"\u7531\u4ee5\u4e0a\u7a0b\u5f0f\u78bc\u53ef\u4ee5\u767c\u73fe"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u500b class \u4e4b\u4e2d\u5305\u542b\u4e86",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8cc7\u6599\u5eab\u9023\u7dda"),(0,a.kt)("li",{parentName:"ul"},"\u67e5\u8a62"),(0,a.kt)("li",{parentName:"ul"},"\u65b0\u589e"),(0,a.kt)("li",{parentName:"ul"},"\u4fee\u6539"))),(0,a.kt)("li",{parentName:"ul"},"\u6b64 class \u9055\u80cc\u4e86\u55ae\u4e00\u8077\u8cac"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u9700\u8981\u4fee\u6539\u8cc7\u6599\u5eab\u9023\u7dda\u65b9\u5f0f")),(0,a.kt)("h2",{id:"\u4ee5\u55ae\u4e00\u8077\u8cac\u9032\u884c\u91cd\u69cb"},"\u4ee5\u55ae\u4e00\u8077\u8cac\u9032\u884c\u91cd\u69cb"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9996\u5148\u53ef\u4ee5\u5c07\u5176\u5206\u70ba\u4e09\u500b Class",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"DBUtil - \u8cc7\u6599\u5eab\u9023\u7dda"),(0,a.kt)("li",{parentName:"ul"},"CustomerDAO - \u5c0d Customer \u9032\u884c\u589e\u522a\u6539\u67e5"),(0,a.kt)("li",{parentName:"ul"},"CustomerDataChart - \u8ca0\u8cac\u5716\u8868\u751f\u6210")))),(0,a.kt)("h3",{id:"1-dbutil"},"1. DBUtil"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"Public class DBUtil\n{\n    //DB connection\n    Public void getConnection()\n    {\n        // TODO : connection to db\n    }\n}\n")),(0,a.kt)("h3",{id:"2-customerdao"},"2. CustomerDao"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"Public class CustomerDao\n{\n    // Read\n    Public List<CustomersDTO> Read()\n    {\n        // TODO : get data list\n    }\n\n    // Create\n    Public void Create()\n    {\n        // TODO : Create data\n    }\n}\n")),(0,a.kt)("h3",{id:"3-customerdatachart"},"3. CustomerDataChart"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"Public class CustomerDataChart\n{\n    Public void displayChart()\n    {\n        // TODO : show chart\n    }\n}\n")),(0,a.kt)("h2",{id:"\u5e38\u898b\u554f\u984c"},"\u5e38\u898b\u554f\u984c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c07\u6240\u6709\u529f\u80fd\u5beb\u5728\u540c\u4e00\u500b class")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9020\u6210 class \u8907\u96dc\u5ea6\u904e\u9ad8"),(0,a.kt)("li",{parentName:"ol"},"\u7dad\u8b77\u6216\u4fee\u6539\u6642\u627e\u4e0d\u5230\u554f\u984c"),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528 class \u6642\u4e0d\u77e5\u9053\u8981\u547c\u53eb\u54ea\u500b function"),(0,a.kt)("li",{parentName:"ol"},"\u5207\u5206\u592a\u7d30\u6642\u6703\u9020\u6210\u9ad8\u8026\u5408\u5ea6\u7684\u554f\u984c")))}d.isMDXComponent=!0}}]);