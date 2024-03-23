"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[3465],{49613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=m(n),d=r,g=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return n?a.createElement(g,l(l({ref:t},s),{},{components:n})):a.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=n(88028),r=(n(59496),n(49613));const i={sidebar_position:25,description:"Image Compression - JPEG (\u7b46\u8a18)",key:["ML","\u6a5f\u5668\u5b78\u7fd2","JPEG","Entropy","Quantization","dct"],tags:["JPEG","Entropy","Quantization"]},l="\ud83d\udef8 JPEG-\u5716\u7247\u58d3\u7e2e",o={unversionedId:"ml/imageCompressionJPEG",id:"ml/imageCompressionJPEG",title:"\ud83d\udef8 JPEG-\u5716\u7247\u58d3\u7e2e",description:"Image Compression - JPEG (\u7b46\u8a18)",source:"@site/docs/ml/imageCompressionJPEG.md",sourceDirName:"ml",slug:"/ml/imageCompressionJPEG",permalink:"/en/docs/ml/imageCompressionJPEG",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/ml/imageCompressionJPEG.md",tags:[{label:"JPEG",permalink:"/en/docs/tags/jpeg"},{label:"Entropy",permalink:"/en/docs/tags/entropy"},{label:"Quantization",permalink:"/en/docs/tags/quantization"}],version:"current",lastUpdatedAt:1711167668,formattedLastUpdatedAt:"Mar 23, 2024",sidebarPosition:25,frontMatter:{sidebar_position:25,description:"Image Compression - JPEG (\u7b46\u8a18)",key:["ML","\u6a5f\u5668\u5b78\u7fd2","JPEG","Entropy","Quantization","dct"],tags:["JPEG","Entropy","Quantization"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udef8 \u5f71\u7247\u8207\u5716\u7247\u7684\u8272\u5f69",permalink:"/en/docs/ml/colorInImageAndVideo"},next:{title:"\ud83d\udef8 Basics of Video",permalink:"/en/docs/ml/basicsOfVideo"}},p={},m=[{value:"JPEG\u6982\u8ff0",id:"jpeg\u6982\u8ff0",level:2},{value:"\u52d5\u6a5f",id:"\u52d5\u6a5f",level:3},{value:"JPEG Overview",id:"jpeg-overview",level:3},{value:"Discrete Cosine Transform (DCT)",id:"discrete-cosine-transform-dct",level:3},{value:"Quantization",id:"quantization",level:3},{value:"Zig-zag Scan",id:"zig-zag-scan",level:3},{value:"DPCM on DC component",id:"dpcm-on-dc-component",level:3},{value:"RLE on AC components",id:"rle-on-ac-components",level:3},{value:"Entropy Coding",id:"entropy-coding",level:3}],s={toc:m},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-jpeg-\u5716\u7247\u58d3\u7e2e"},"\ud83d\udef8 JPEG-\u5716\u7247\u58d3\u7e2e"),(0,r.kt)("h2",{id:"jpeg\u6982\u8ff0"},"JPEG\u6982\u8ff0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Joint Photographic Expert Group\u57281992\u5e74\u88ab\u8a55\u70ba\u570b\u969b\u6a19\u6e96"),(0,r.kt)("li",{parentName:"ul"},"\u9069\u7528\u65bc\u5f69\u8272\u8207\u7070\u968e\u5716\u7247")),(0,r.kt)("h3",{id:"\u52d5\u6a5f"},"\u52d5\u6a5f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The compression ratio of lossless methods (\u7121\u640d\u58d3\u7e2e\u6f14\u7b97\u6cd5)"),(0,r.kt)("li",{parentName:"ul"},"JPEG\u4f7f\u7528\u8b8a\u63db\u7de8\u78bc:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u5927\u90e8\u5206\u5716\u50cf\u5167\u5bb9\u5728\u5716\u50cf\u8f49\u63db\u4e2d\u662f\u76f8\u5c0d\u8f03\u6162\u7684"),(0,r.kt)("li",{parentName:"ol"},"\u8207\u8f03\u4f4e\u983b\u7387\u7684\u7a7a\u9593\u983b\u7387\u5206\u91cf\u640d\u5931\u76f8\u6bd4\uff0c\u4eba\u985e\u66f4\u5bb9\u6613\u63a5\u53d7\u9ad8\u983b\u7387\u7684\u640d\u5931")))),(0,r.kt)("h3",{id:"jpeg-overview"},"JPEG Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7de8\u78bc\u904e\u7a0b:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://ithelp.ithome.com.tw/upload/images/20211227/20097001MSQ26PMFjJ.png",alt:"https://ithelp.ithome.com.tw/upload/images/20211227/20097001MSQ26PMFjJ.png"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"DCT(Discrete Cosine Transformation) \u2192 ",(0,r.kt)("strong",{parentName:"p"},"\u96e2\u6563\u4f59\u5f26\u8b8a\u63db"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"DPCM(Differential Pulse Code Modulation) \u2192 \u5dee\u5206\u9810\u6e2c\u7de8\u78bc\u8abf\u88fd \u2192 DC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Zigzag Scanning \u2192 \u66f2\u6298\u6383\u63cf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"RLE(Run-Length Encoding) \u2192 AC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Entropy Coding \u2192 \u71b5\u7de8\u78bc\n",(0,r.kt)("img",{parentName:"p",src:"https://ithelp.ithome.com.tw/upload/images/20211227/200970019vPA7n4Dsl.png",alt:"https://ithelp.ithome.com.tw/upload/images/20211227/200970019vPA7n4Dsl.png"})))),(0,r.kt)("h3",{id:"discrete-cosine-transform-dct"},"Discrete Cosine Transform (DCT)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u96e2\u6563\u9918\u5f26\u8b8a\u63db (DCT)\uff1a")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://ithelp.ithome.com.tw/upload/images/20211227/20097001lNW5clsLm4.png",alt:"https://ithelp.ithome.com.tw/upload/images/20211227/20097001lNW5clsLm4.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9006\u96e2\u6563\u9918\u5f26\u8b8a\u63db (IDCT)\uff1a")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://ithelp.ithome.com.tw/upload/images/20211227/20097001f7aEMztwNy.png",alt:"https://ithelp.ithome.com.tw/upload/images/20211227/20097001f7aEMztwNy.png"})),(0,r.kt)("h3",{id:"quantization"},"Quantization"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u91cf\u5316\u7684\u8aa4\u5dee\u662f\u6709\u640d\u58d3\u7e2e\u7684\u4e3b\u8981\u4f86\u6e90"),(0,r.kt)("li",{parentName:"ul"},"\u5747\u8861\u91cf\u5316",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u500bF","[u,v]","\u90fd\u540c\u9664\u4ee5\u5e38\u6578N"))),(0,r.kt)("li",{parentName:"ul"},"\u975e\u5747\u8861\u91cf\u5316",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u91cf\u5316\u8868"),(0,r.kt)("li",{parentName:"ul"},"\u6700\u7d42\u5728\u5c07\u91cf\u5316\u8868\u5b58\u65bctable\u4e4b\u4e2d")))),(0,r.kt)("h3",{id:"zig-zag-scan"},"Zig-zag Scan"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://ithelp.ithome.com.tw/upload/images/20211227/20097001M79dlEYboZ.png",alt:"https://ithelp.ithome.com.tw/upload/images/20211227/20097001M79dlEYboZ.png"})),(0,r.kt)("h3",{id:"dpcm-on-dc-component"},"DPCM on DC component"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u76f4\u6d41\u5206\u91cf\u5927\u4e14\u8b8a\u5316\u591a\u7aef\uff0c\u4f46\u901a\u5e38\u63a5\u8fd1\u5148\u524d\u503c")),(0,r.kt)("h3",{id:"rle-on-ac-components"},"RLE on AC components"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4fdd\u7559\u8df3\u904e\u548c\u503c\uff0c\u5176\u4e2d\u8df3\u904e\u662f\u96f6\u7684\u6578\u91cf\uff0c\u503c\u662f\u4e0b\u4e00\u500b\u975e\u96f6\u5206\u91cf")),(0,r.kt)("h3",{id:"entropy-coding"},"Entropy Coding"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528Huffman Tables"),(0,r.kt)("li",{parentName:"ul"},"Huffman Tables\u662f\u53ef\u4ee5\u81ea\u884c\u5b9a\u7fa9\u7684")))}u.isMDXComponent=!0}}]);