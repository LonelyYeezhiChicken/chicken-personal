"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[3533],{9613:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>v});var o=i(9496);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var d=o.createContext({}),s=function(e){var t=o.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},c=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=s(i),m=n,v=p["".concat(d,".").concat(m)]||p[m]||u[m]||r;return i?o.createElement(v,l(l({ref:t},c),{},{components:i})):o.createElement(v,l({ref:t},c))}));function v(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,l=new Array(r);l[0]=m;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a[p]="string"==typeof e?e:n,l[1]=a;for(var s=2;s<r;s++)l[s]=i[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,i)}m.displayName="MDXCreateElement"},3410:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>s});var o=i(8957),n=(i(9496),i(9613));const r={sidebar_position:30,description:"Basics of Video (\u7b46\u8a18)",key:["ML","\u6a5f\u5668\u5b78\u7fd2","video"],tags:["video"]},l="\ud83d\udef8 Basics of Video",a={unversionedId:"ml/basicsOfVideo",id:"ml/basicsOfVideo",title:"\ud83d\udef8 Basics of Video",description:"Basics of Video (\u7b46\u8a18)",source:"@site/docs/ml/basicsOfVideo.md",sourceDirName:"ml",slug:"/ml/basicsOfVideo",permalink:"/docs/ml/basicsOfVideo",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/ml/basicsOfVideo.md",tags:[{label:"video",permalink:"/docs/tags/video"}],version:"current",lastUpdatedAt:1690722001,formattedLastUpdatedAt:"2023\u5e747\u670830\u65e5",sidebarPosition:30,frontMatter:{sidebar_position:30,description:"Basics of Video (\u7b46\u8a18)",key:["ML","\u6a5f\u5668\u5b78\u7fd2","video"],tags:["video"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udef8 JPEG-\u5716\u7247\u58d3\u7e2e",permalink:"/docs/ml/imageCompressionJPEG"},next:{title:"\ud83d\udef8 K \u8fd1\u9130\u6f14\u7b97\u6cd5 (k-NN)",permalink:"/docs/ml/knnPython"}},d={},s=[{value:"Types of Color Video Signals",id:"types-of-color-video-signals",level:2},{value:"Component video",id:"component-video",level:3},{value:"Composite video",id:"composite-video",level:3},{value:"S-Video",id:"s-video",level:3},{value:"Analog Video",id:"analog-video",level:2},{value:"NTSC Video",id:"ntsc-video",level:3},{value:"PAL Video",id:"pal-video",level:3},{value:"Digital Video",id:"digital-video",level:2},{value:"\u597d\u8655",id:"\u597d\u8655",level:3}],c={toc:s},p="wrapper";function u(e){let{components:t,...i}=e;return(0,n.kt)(p,(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-basics-of-video"},"\ud83d\udef8 Basics of Video"),(0,n.kt)("h2",{id:"types-of-color-video-signals"},"Types of Color Video Signals"),(0,n.kt)("h3",{id:"component-video"},"Component video"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u4f5c\u70ba\u55ae\u7368\u7684\u5f71\u7247\u8a0a\u865f\u767c\u9001"),(0,n.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u70baRGB\u6216\u662fluminance-chrominance transformation")),(0,n.kt)("h3",{id:"composite-video"},"Composite video"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u984f\u8272\u548c\u4eae\u5ea6\u8a0a\u865f\u6df7\u5408\u5230\u4e00\u500bcarrier wave"),(0,n.kt)("li",{parentName:"ul"},"\u7121\u6cd5\u907f\u514d\u5169\u500b\u8a0a\u865f\u4e4b\u9593\u7522\u751f\u7684\u5e72\u64fe")),(0,n.kt)("h3",{id:"s-video"},"S-Video"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u70baComponent video\u8207Composite video\u7684\u6298\u8877"),(0,n.kt)("li",{parentName:"ul"},"\u4ed6\u4f7f\u7528\u5169\u689d\u7dda\uff0c\u4e00\u689d\u70baluminance\u8207\u4e00\u689d\u8907\u5408\u8a0a\u865f")),(0,n.kt)("h2",{id:"analog-video"},"Analog Video"),(0,n.kt)("h3",{id:"ntsc-video"},"NTSC Video"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6bcf\u5e40 525 \u689d\u6383\u63cf\u7dda\uff0c\u6bcf\u79d2 30 \u5e40\uff08\u6216\u8005\u6e96\u78ba\u5730\u8aaa\uff0c29.97 fps\uff0c33.37 \u6beb\u79d2/\u5e40\uff09")),(0,n.kt)("h3",{id:"pal-video"},"PAL Video"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6bcf\u5e40 625 \u689d\u6383\u63cf\u7dda\uff0c\u6bcf\u79d2 25 \u5e40\uff0840 \u6beb\u79d2/\u5e40\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 YUV \u984f\u8272\u6a21\u578b")),(0,n.kt)("h2",{id:"digital-video"},"Digital Video"),(0,n.kt)("h3",{id:"\u597d\u8655"},"\u597d\u8655"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u76f4\u63a5\u505a\u975e\u7dda\u6027\u7684\u7de8\u8f2f"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u91cd\u8907\u9304\u97f3"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u7528blanking and sync pulse"),(0,n.kt)("li",{parentName:"ul"},"\u5e7e\u4e4e\u6240\u6709\u7684digital video \u90fd\u4f7f\u7528 component video")))}u.isMDXComponent=!0}}]);