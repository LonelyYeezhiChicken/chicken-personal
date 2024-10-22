"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[7482],{49613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(r),b=a,m=u["".concat(p,".").concat(b)]||u[b]||d[b]||l;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=b;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},14641:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=r(88028),a=(r(59496),r(49613));const l={sidebar_position:35,description:"Three JS - WebGL",key:["Three JS","3D","WebGL"],tags:["Three JS","3D","WebGL"]},i="\ud83c\udf0d WebGL \u7c21\u4ecb",o={unversionedId:"threeJs/note1",id:"threeJs/note1",title:"\ud83c\udf0d WebGL \u7c21\u4ecb",description:"Three JS - WebGL",source:"@site/docs/threeJs/note1.md",sourceDirName:"threeJs",slug:"/threeJs/note1",permalink:"/docs/threeJs/note1",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/threeJs/note1.md",tags:[{label:"Three JS",permalink:"/docs/tags/three-js"},{label:"3D",permalink:"/docs/tags/3-d"},{label:"WebGL",permalink:"/docs/tags/web-gl"}],version:"current",lastUpdatedAt:1729561312,formattedLastUpdatedAt:"2024\u5e7410\u670822\u65e5",sidebarPosition:35,frontMatter:{sidebar_position:35,description:"Three JS - WebGL",key:["Three JS","3D","WebGL"],tags:["Three JS","3D","WebGL"]},sidebar:"tutorialSidebar",previous:{title:"Three JS",permalink:"/docs/category/three-js"},next:{title:"\u55ae\u5143\u6e2c\u8a66 \u7b46\u8a18",permalink:"/docs/category/\u55ae\u5143\u6e2c\u8a66-\u7b46\u8a18"}},p={},c=[{value:"1.1 \u4f55\u8b02 WebGL",id:"11-\u4f55\u8b02-webgl",level:2},{value:"1.2 WebGL \u7684\u8a2d\u8a08",id:"12-webgl-\u7684\u8a2d\u8a08",level:2},{value:"1.3 WebGL \u8207 GPU",id:"13-webgl-\u8207-gpu",level:2},{value:"1.4 \u96fb\u8166\u5f71\u50cf\u6982\u5ff5",id:"14-\u96fb\u8166\u5f71\u50cf\u6982\u5ff5",level:2},{value:"1.5 Shader \u7c21\u4ecb",id:"15-shader-\u7c21\u4ecb",level:2}],s={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-webgl-\u7c21\u4ecb"},"\ud83c\udf0d WebGL \u7c21\u4ecb"),(0,a.kt)("h2",{id:"11-\u4f55\u8b02-webgl"},"1.1 \u4f55\u8b02 WebGL"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"WebGL (Web Graphics Library) \u662f\u4e00\u7a2e\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"JavaScript API")),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u5728\u700f\u89bd\u5668\u4e2d\u5448\u73fe 2D \u6216 3D \u4e92\u52d5\u5716\u5f62\u7684\u6280\u8853"),(0,a.kt)("li",{parentName:"ul"},"\u4ed6\u662f\u57fa\u65bc OpenGL \u7d44\u6210"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4f7f\u7528\u6b64\u9023\u7d50\u78ba\u8a8d\u8a2d\u5099\u662f\u5426\u6709\u652f\u63f4 WebGL >> ",(0,a.kt)("a",{parentName:"li",href:"https://get.webgl.org/"},"\u9ede\u6211"))),(0,a.kt)("h2",{id:"12-webgl-\u7684\u8a2d\u8a08"},"1.2 WebGL \u7684\u8a2d\u8a08"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"WebGL \u7684\u8a2d\u8a08\u4f7f\u7528\u4e86 Html \u7684 Canvas\uff0c\u4e26\u63d0\u4f9b\u81ea\u52d5\u8a18\u61b6\u9ad4\u7ba1\u7406\u3002")),(0,a.kt)("h2",{id:"13-webgl-\u8207-gpu"},"1.3 WebGL \u8207 GPU"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b83\u5728 GPU \u4e0a\u88ab\u5206\u70ba\u5169\u500b\u90e8\u5206:",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u8655\u7406\u8cc7\u6599\u6d41 (stream of data)"),(0,a.kt)("li",{parentName:"ol"},"\u5c07\u7b2c\u4e00\u90e8\u4efd\u7684\u8cc7\u6599\u6d41\u756b\u6210\u50cf\u7d20\u9ede (pixels based)")))),(0,a.kt)("h2",{id:"14-\u96fb\u8166\u5f71\u50cf\u6982\u5ff5"},"1.4 \u96fb\u8166\u5f71\u50cf\u6982\u5ff5"),(0,a.kt)("p",null,"\u5728\u96fb\u8166\u4e0a\uff0c\u6211\u5011\u4f7f\u7528\u651d\u5f71\u6a5f (camera) \u7684\u6982\u5ff5\u4f86\u770b\u4e16\u754c\u3002\u651d\u5f71\u6a5f\u62cd\u651d\u756b\u9762\u4e26\u5448\u73fe\u7d66\u4f7f\u7528\u8005\u3002\u56e0\u6b64\uff0c\u6211\u5011\u53ef\u4ee5\u900f\u904e\u8abf\u6574\u651d\u5f71\u6a5f\u3001\u5149\u7dda\u3001\u6750\u8cea\u7b49\u8a2d\u5b9a\u4f86\u5448\u73fe\u4e0d\u540c\u7684\u8996\u89d2\u3002"),(0,a.kt)("h2",{id:"15-shader-\u7c21\u4ecb"},"1.5 Shader \u7c21\u4ecb"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Shader \u662f\u4e00\u7a2e\u7a0b\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"\u5b83\u7528\u65bc\u5728 GPU \u4e0a\u6e32\u67d3 3D \u5716\u5f62"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u5e38\u6703\u5206\u70ba\u5169\u7a2e:",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u9802\u9ede\u8457\u8272\u5668 (vertex shader): \u5c0d\u6bcf\u500b\u9802\u9ede\u9032\u884c\u8a08\u7b97\uff0c\u4f8b\u5982\u8f49\u63db\u5ea7\u6a19\u3001\u8a08\u7b97\u5149\u7167\u548c\u9670\u5f71\u7b49\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u7247\u6bb5\u8457\u8272\u5668 (fragment shader): \u5c0d\u6bcf\u500b\u50cf\u7d20\u9032\u884c\u8a08\u7b97\uff0c\u4f8b\u5982\u8a08\u7b97\u984f\u8272\u548c\u7d0b\u7406\u7b49\u3002"))),(0,a.kt)("li",{parentName:"ul"},"Shader \u662f\u7531\u958b\u767c\u8005\u81ea\u5b9a\u7fa9\u7684\uff0c\u53ef\u4ee5\u4f7f\u7528 GLSL (OpenGL Shading Language) \u7b49\u8a9e\u8a00\u7de8\u5beb\u3002\u4f7f\u7528\u4e0d\u540c\u7684 Shader \u53ef\u4ee5\u5f97\u5230\u4e0d\u540c\u7684\u5716\u5f62\u6548\u679c\uff0c\u4f8b\u5982\u93e1\u9762\u53cd\u5c04\u3001\u9ad8\u5149\u3001\u9670\u5f71\u7b49\u3002")))}d.isMDXComponent=!0}}]);