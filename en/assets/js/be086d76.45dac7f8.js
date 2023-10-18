"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[4478],{49613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,f=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},30317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(88028),r=(n(59496),n(49613));const i={sidebar_position:15,description:"\u6a19\u6e96\u7cfb\u7d71\u683c\u5f0f (\u7b46\u8a18)",key:["ML","\u6a5f\u5668\u5b78\u7fd2","\u6a19\u6e96\u7cfb\u7d71\u683c\u5f0f"],tags:["\u6a19\u6e96\u7cfb\u7d71\u683c\u5f0f"]},l="\ud83d\udef8 \u6a19\u6e96\u7cfb\u7d71\u683c\u5f0f",o={unversionedId:"ml/standardSystem",id:"ml/standardSystem",title:"\ud83d\udef8 \u6a19\u6e96\u7cfb\u7d71\u683c\u5f0f",description:"\u6a19\u6e96\u7cfb\u7d71\u683c\u5f0f (\u7b46\u8a18)",source:"@site/docs/ml/standardSystem.md",sourceDirName:"ml",slug:"/ml/standardSystem",permalink:"/en/docs/ml/standardSystem",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/ml/standardSystem.md",tags:[{label:"\u6a19\u6e96\u7cfb\u7d71\u683c\u5f0f",permalink:"/en/docs/tags/\u6a19\u6e96\u7cfb\u7d71\u683c\u5f0f"}],version:"current",lastUpdatedAt:1697605422,formattedLastUpdatedAt:"Oct 18, 2023",sidebarPosition:15,frontMatter:{sidebar_position:15,description:"\u6a19\u6e96\u7cfb\u7d71\u683c\u5f0f (\u7b46\u8a18)",key:["ML","\u6a5f\u5668\u5b78\u7fd2","\u6a19\u6e96\u7cfb\u7d71\u683c\u5f0f"],tags:["\u6a19\u6e96\u7cfb\u7d71\u683c\u5f0f"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udef8 \u8072\u97f3\u6578\u64da\u5316",permalink:"/en/docs/ml/multimediaData"},next:{title:"\ud83d\udef8 \u5f71\u7247\u8207\u5716\u7247\u7684\u8272\u5f69",permalink:"/en/docs/ml/colorInImageAndVideo"}},s={},p=[{value:"Standard System Independent Formats(\u6a19\u6e96\u7cfb\u7d71\u7368\u7acb\u683c\u5f0f)",id:"standard-system-independent-formats\u6a19\u6e96\u7cfb\u7d71\u7368\u7acb\u683c\u5f0f",level:2},{value:"Gif",id:"gif",level:3},{value:"JPEG",id:"jpeg",level:3},{value:"TIFF",id:"tiff",level:3},{value:"Graphics Animation Files",id:"graphics-animation-files",level:3},{value:"Postscript/Encapsulated Postscript",id:"postscriptencapsulated-postscript",level:3},{value:"System Dependent Format",id:"system-dependent-format",level:2},{value:"\u4ee5\u4e0b\u662f\u4e00\u4e9b\u5e38\u7528\u7684\u7cfb\u7d71\u76f8\u95dc\u683c\u5f0f",id:"\u4ee5\u4e0b\u662f\u4e00\u4e9b\u5e38\u7528\u7684\u7cfb\u7d71\u76f8\u95dc\u683c\u5f0f",level:2},{value:"Microsoft Windows:BMP",id:"microsoft-windowsbmp",level:3},{value:"Macintosh:PAINT and PICT",id:"macintoshpaint-and-pict",level:3},{value:"X-windows: XBM",id:"x-windows-xbm",level:3}],d={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-\u6a19\u6e96\u7cfb\u7d71\u683c\u5f0f"},"\ud83d\udef8 \u6a19\u6e96\u7cfb\u7d71\u683c\u5f0f"),(0,r.kt)("h2",{id:"standard-system-independent-formats\u6a19\u6e96\u7cfb\u7d71\u7368\u7acb\u683c\u5f0f"},"Standard System Independent Formats(\u6a19\u6e96\u7cfb\u7d71\u7368\u7acb\u683c\u5f0f)"),(0,r.kt)("h3",{id:"gif"},"Gif"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u50c5\u9650\u65bc 8 \u4f4d (256) \u8272\u5716\u50cf\uff0c\u9069\u7528\u65bc\u5f88\u5c11\u6709\u7368\u7279\u984f\u8272\u7684\u5716\u50cf"),(0,r.kt)("li",{parentName:"ul"},"Gif89a \u652f\u63f4\u7c21\u6613\u52d5\u756b")),(0,r.kt)("h3",{id:"jpeg"},"JPEG"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u70ba\u5f71\u50cf\u58d3\u7e2e\u6a19\u6e96"),(0,r.kt)("li",{parentName:"ul"},"\u7531 Joint Photographics Experts Group\u5275\u5efa"),(0,r.kt)("li",{parentName:"ul"},"\u5229\u7528\u4eba\u985e\u8996\u89ba\u7cfb\u7d71\u7684\u4fb7\u9650\u6027\u4f86\u5be6\u73fe\u9ad8\u58d3\u7e2e\u7da0")),(0,r.kt)("h3",{id:"tiff"},"TIFF"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6a19\u8a18\u5716\u7247\u6587\u4ef6\u683c\u5f0f(Tagged Image File Format)"),(0,r.kt)("li",{parentName:"ul"},"\u591a\u7a2e\u4e0d\u540c\u5132\u5b58\u985e\u578b(Ex: \u55ae\u8272\u3001\u7070\u968e\u30018-bit RGB)"),(0,r.kt)("li",{parentName:"ul"},"\u7531 Aldus Corp \u958b\u767c\uff0c\u5f8c\u4f86\u7372\u5f97\u5fae\u8edf\u7684\u652f\u6301"),(0,r.kt)("li",{parentName:"ul"},"TIFF \u662f\u4e00\u7a2e\u7121\u640d\u683c\u5f0f(\u5728\u4e0d\u4f7f\u7528 new JPEG tag\u7684\u524d\u63d0\u4e0b)"),(0,r.kt)("li",{parentName:"ul"},"\u4f46\u8207JPEG\u76f8\u6bd4\u7531\u65bc\u683c\u5f0f\u4e0d\u666e\u904d\uff0c\u6240\u4ee5\u7121\u4efb\u4f55\u512a\u52e2\uff0c\u5c0e\u81f4\u53d7\u6b61\u8fce\u7a0b\u5ea6\u4e0b\u964d")),(0,r.kt)("h3",{id:"graphics-animation-files"},"Graphics Animation Files"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"FLC \u2192 \u4e3b\u8981\u70ba\u52d5\u756b(animation)\u6216\u52d5\u5716\u6587\u4ef6(moving picture file)\u7684\u683c\u5f0f"),(0,r.kt)("li",{parentName:"ul"},"FLI \u2192 \u8207FLC\u76f8\u985e\u4f3c"),(0,r.kt)("li",{parentName:"ul"},"GL \u2192 \u9ad8\u54c1\u8cea\u7684\u52d5\u614b\u5716\u7247\uff0c\u901a\u5e38\u70balarge file sizes")),(0,r.kt)("h3",{id:"postscriptencapsulated-postscript"},"Postscript/Encapsulated Postscript"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e00\u7a2e\u6a19\u7c64\u7684\u8a9e\u8a00(typesetting language)"),(0,r.kt)("li",{parentName:"ul"},"\u5176\u4e2d\u5305\u62ec\u6587\u5b57\u77e2\u91cf\u6216\u7d50\u69cb\u5716\u5f62\u548cbit-mapped images")),(0,r.kt)("h2",{id:"system-dependent-format"},"System Dependent Format"),(0,r.kt)("h2",{id:"\u4ee5\u4e0b\u662f\u4e00\u4e9b\u5e38\u7528\u7684\u7cfb\u7d71\u76f8\u95dc\u683c\u5f0f"},"\u4ee5\u4e0b\u662f\u4e00\u4e9b\u5e38\u7528\u7684\u7cfb\u7d71\u76f8\u95dc\u683c\u5f0f"),(0,r.kt)("h3",{id:"microsoft-windowsbmp"},"Microsoft Windows:BMP"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7cfb\u7d71\u6a19\u6e96\u5716\u5f62\u6587\u4ef6\u683c\u5f0f"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u63f424-bit bit-map images")),(0,r.kt)("h3",{id:"macintoshpaint-and-pict"},"Macintosh:PAINT and PICT"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PAINT \u662f\u6700\u521d\u7528\u65bc MacPaint \u7a0b\u5e8f\uff0c\u6700\u521d\u50c5\u7528\u65bc 1 \u4f4d\u55ae\u8272\u5716\u50cf")),(0,r.kt)("h3",{id:"x-windows-xbm"},"X-windows: XBM"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 24-bit color bit-map"),(0,r.kt)("li",{parentName:"ul"},"\u5e38\u7528\u65bc\u5132\u5b58icon\u3001pixmaps\u3001backdrops")))}m.isMDXComponent=!0}}]);