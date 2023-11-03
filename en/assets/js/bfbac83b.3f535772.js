"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[1635],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=i,k=s["".concat(p,".").concat(m)]||s[m]||d[m]||l;return n?r.createElement(k,a(a({ref:t},u),{},{components:n})):r.createElement(k,a({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:i,a[1]=o;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48327:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(88028),i=(n(59496),n(49613));const l={sidebar_position:5,description:"\u7dda\u689d\u8207\u8ff4\u5708",key:["P5 Js"],tags:["P5JS"]},a="\ud83c\udfa8 \u7dda\u689d\u8207\u8ff4\u5708",o={unversionedId:"p5jsNote/LineAndLoop",id:"p5jsNote/LineAndLoop",title:"\ud83c\udfa8 \u7dda\u689d\u8207\u8ff4\u5708",description:"\u7dda\u689d\u8207\u8ff4\u5708",source:"@site/docs/p5jsNote/LineAndLoop.md",sourceDirName:"p5jsNote",slug:"/p5jsNote/LineAndLoop",permalink:"/en/docs/p5jsNote/LineAndLoop",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/p5jsNote/LineAndLoop.md",tags:[{label:"P5JS",permalink:"/en/docs/tags/p-5-js"}],version:"current",lastUpdatedAt:1699019226,formattedLastUpdatedAt:"Nov 3, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"\u7dda\u689d\u8207\u8ff4\u5708",key:["P5 Js"],tags:["P5JS"]},sidebar:"tutorialSidebar",previous:{title:"P5 Js",permalink:"/en/docs/category/p5-js"},next:{title:"\ud83c\udfa8 map \u51fd\u5f0f",permalink:"/en/docs/p5jsNote/MapFunc"}},p={},c=[{value:"\u6700\u7d42\u7d50\u679c",id:"\u6700\u7d42\u7d50\u679c",level:2},{value:"\u5716\u8868\u5ea7\u6a19",id:"\u5716\u8868\u5ea7\u6a19",level:2},{value:"\u5b9a\u7fa9\u756b\u5e03",id:"\u5b9a\u7fa9\u756b\u5e03",level:2},{value:"line()\u4f7f\u7528\u65b9\u5f0f",id:"line\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u642d\u914d for \u4f7f\u7528",id:"\u642d\u914d-for-\u4f7f\u7528",level:2},{value:"1.  \u5de6\u4e0a\u89d2(\u76f4\u7dda)",id:"1--\u5de6\u4e0a\u89d2\u76f4\u7dda",level:3},{value:"2. \u53f3\u4e0a\u89d2(\u6a6b\u7dda)",id:"2-\u53f3\u4e0a\u89d2\u6a6b\u7dda",level:3},{value:"3. \u5de6\u4e0b\u89d2(\u6a6b\u7dda)",id:"3-\u5de6\u4e0b\u89d2\u6a6b\u7dda",level:3},{value:"4. \u53f3\u4e0b\u89d2(\u76f4\u7dda)",id:"4-\u53f3\u4e0b\u89d2\u76f4\u7dda",level:3}],u={toc:c},s="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-\u7dda\u689d\u8207\u8ff4\u5708"},"\ud83c\udfa8 \u7dda\u689d\u8207\u8ff4\u5708"),(0,i.kt)("p",null,"\u4f7f\u7528\u56db\u500b\u8ff4\u5708\u5206\u5225\u756b\u51fa\u56db\u500b\u5340\u584a\u7684\u6a6b\u7dda\u8207\u76f4\u7dda"),(0,i.kt)("h2",{id:"\u6700\u7d42\u7d50\u679c"},"\u6700\u7d42\u7d50\u679c"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/LonelyYeezhiChicken/chicken-personal/blob/main//static/mdImgs/p5js/LineAndLoop/Line.png?raw=true",alt:"mdImg"})),(0,i.kt)("h2",{id:"\u5716\u8868\u5ea7\u6a19"},"\u5716\u8868\u5ea7\u6a19"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/LonelyYeezhiChicken/p5Js-Demo/blob/main/LineAndLoop/LineXY.png?raw=true",alt:"mdImg"})),(0,i.kt)("h2",{id:"\u5b9a\u7fa9\u756b\u5e03"},"\u5b9a\u7fa9\u756b\u5e03"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u8b8a\u6578\u5ba3\u544a\u65b9\u5f0f\uff0c\u5206\u5225\u5ba3\u544a width(\u5bec\u5ea6),height(\u9ad8\u5ea6)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"\u5c07\u5bec\u5ea6\u8a2d\u5b9a\u70ba 400")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"\u5c07\u9ad8\u5ea6\u8a2d\u5b9a\u70ba 400"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'function setup() {\n  let width = 400; //\u5b9a\u7fa9\u5bec\u5ea6\n  let height = 400; //\u5b9a\u7fa9\u9ad8\u5ea6\n  createCanvas(width, height); //\u5c07\u8b8a\u6578\u5e36\u5165\u8a2d\u5b9a\u4e2d\n  console.log("\u5bec: " + width + " , \u9ad8: " + height); //\u5728console\u4e0a\u9762\u5370\u51fa\u76ee\u524d\u5bec\u9ad8\n}\n')),(0,i.kt)("h2",{id:"line\u4f7f\u7528\u65b9\u5f0f"},"line()\u4f7f\u7528\u65b9\u5f0f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"}," line(x1, y1, x2, y2);\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(x1,y1) (x2, y2) \u5404\u5225\u4ee3\u8868\u4e00\u500b\u9ede\u7684\u5ea7\u6a19"),(0,i.kt)("li",{parentName:"ul"},"\u5169\u500b\u9ede\u76f8\u9023\u4e4b\u5f8c\uff0c\u6703\u6210\u70ba\u4e00\u689d\u7dda")),(0,i.kt)("h2",{id:"\u642d\u914d-for-\u4f7f\u7528"},"\u642d\u914d for \u4f7f\u7528"),(0,i.kt)("h3",{id:"1--\u5de6\u4e0a\u89d2\u76f4\u7dda"},"1.  \u5de6\u4e0a\u89d2(\u76f4\u7dda)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9700\u8981\u5f9e\u4e0b\u5230\u4e0a\uff0c\u7531\u5de6\u800c\u53f3\u756b\u51fa\u76f4\u7dda"),(0,i.kt)("li",{parentName:"ul"},"\u56e0\u6b64\u7b2c\u4e00\u500b\u9ede\u6703\u5f9e( 1 X 10 ,400/2) -> (10,200) \u756b\u5230 (1 X 10,0) -> (10,0)"),(0,i.kt)("li",{parentName:"ul"},"for \u8ff4\u5708\u689d\u4ef6 -> \u5c0f\u65bc 20 \u7684\u539f\u56e0\u662f\u56e0\u70ba\uff0c\u6211\u5011\u6bcf\u6b21\u90fd\u5c07 i X 10\uff0c\u6574\u5f35\u756b\u5e03\u7684\u5bec\u662f 400 \u5207\u6210\u4e00\u534a\u70ba 200")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"for (let i = 1; i <= 20; i++) {\n  fill(250);\n  line(i * 10, height / 2, i * 10, 0);\n}\n")),(0,i.kt)("h3",{id:"2-\u53f3\u4e0a\u89d2\u6a6b\u7dda"},"2. \u53f3\u4e0a\u89d2(\u6a6b\u7dda)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9700\u8981\u5f9e\u4e0a\u5230\u4e0b\uff0c\u7531\u5de6\u800c\u53f3\u756b\u51fa\u76f4\u7dda"),(0,i.kt)("li",{parentName:"ul"},"\u56e0\u6b64\u7b2c\u4e00\u500b\u9ede\u6703\u5f9e( 400/2, 1 X 10) -> (200,10) \u756b\u5230 ( 400,1 X 10) -> (400,10)"),(0,i.kt)("li",{parentName:"ul"},"for \u8ff4\u5708\u689d\u4ef6 -> \u5c0f\u65bc 20 \u7684\u539f\u56e0\u662f\u56e0\u70ba\uff0c\u6211\u5011\u6bcf\u6b21\u90fd\u5c07 i X 10\uff0c\u6574\u5f35\u756b\u5e03\u7684\u9ad8\u662f 400 \u5207\u6210\u4e00\u534a\u70ba 200")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"for (let i = 1; i <= 20; i++) {\n  fill(250);\n  line(width / 2, i * 10, width, i * 10);\n}\n")),(0,i.kt)("h3",{id:"3-\u5de6\u4e0b\u89d2\u6a6b\u7dda"},"3. \u5de6\u4e0b\u89d2(\u6a6b\u7dda)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9700\u8981\u5f9e\u4e0b\u5230\u4e0a\uff0c\u7531\u5de6\u800c\u53f3\u756b\u51fa\u76f4\u7dda"),(0,i.kt)("li",{parentName:"ul"},"\u56e0\u6b64\u7b2c\u4e00\u500b\u9ede\u6703\u5f9e( 0,400 - (1 X 10)) -> (0,390) \u756b\u5230 ( 400/2,400 - (1 X 10)) -> (200,390)"),(0,i.kt)("li",{parentName:"ul"},"\u7528\u9ad8\u5ea6\u6e1b\u6389 i X 10 \u7684\u539f\u56e0\u662f\u56e0\u70ba\uff0c\u6211\u5011\u8981\u5f9e\u908a\u754c\u5f80\u4e0a\u756b\uff0c\u56e0\u6b64\u9700\u8981\u5f9e\u6700\u5927\u908a\u754c\u6bcf\u6b21\u5f80\u4e0a\u6e1b\u6389 10")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"for (let i = 1; i <= 20; i++) {\n  fill(250);\n  line(0, height - i * 10, width / 2, height - i * 10);\n}\n")),(0,i.kt)("h3",{id:"4-\u53f3\u4e0b\u89d2\u76f4\u7dda"},"4. \u53f3\u4e0b\u89d2(\u76f4\u7dda)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9700\u8981\u5f9e\u4e0b\u5230\u4e0a\uff0c\u7531\u53f3\u800c\u5de6\u756b\u51fa\u76f4\u7dda"),(0,i.kt)("li",{parentName:"ul"},"\u56e0\u6b64\u7b2c\u4e00\u500b\u9ede\u6703\u5f9e( 400 - (1 X 10),0 ) -> (390,0) \u756b\u5230 ( 400 - (1 X 10),400/2 ) -> (390,200)"),(0,i.kt)("li",{parentName:"ul"},"\u7528\u5bec\u5ea6\u6e1b\u6389 i X 10 \u7684\u539f\u56e0\u662f\u56e0\u70ba\uff0c\u6211\u5011\u8981\u5f9e\u908a\u754c\u5f80\u5de6\u756b\uff0c\u56e0\u6b64\u9700\u8981\u5f9e\u6700\u5927\u908a\u754c\u6bcf\u6b21\u5f80\u4e0a\u6e1b\u6389 10")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"for (let i = 1; i <= 20; i++) {\n  fill(250);\n  line(width - i * 10, height, width - i * 10, height / 2);\n}\n")))}d.isMDXComponent=!0}}]);