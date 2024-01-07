"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[8470],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var i=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||a;return n?i.createElement(k,l(l({ref:t},u),{},{components:n})):i.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49604:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var i=n(88028),r=(n(59496),n(49613));const a={sidebar_position:15,description:"\u5340\u584a\u6f38\u5c64",key:["P5 Js","\u5340\u584a\u6f38\u5c64"],tags:["P5JS"]},l="\ud83c\udfa8 \u5340\u584a\u6f38\u5c64",o={unversionedId:"p5jsNote/Gradient",id:"p5jsNote/Gradient",title:"\ud83c\udfa8 \u5340\u584a\u6f38\u5c64",description:"\u5340\u584a\u6f38\u5c64",source:"@site/docs/p5jsNote/Gradient.md",sourceDirName:"p5jsNote",slug:"/p5jsNote/Gradient",permalink:"/en/docs/p5jsNote/Gradient",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/p5jsNote/Gradient.md",tags:[{label:"P5JS",permalink:"/en/docs/tags/p-5-js"}],version:"current",lastUpdatedAt:1704630401,formattedLastUpdatedAt:"Jan 7, 2024",sidebarPosition:15,frontMatter:{sidebar_position:15,description:"\u5340\u584a\u6f38\u5c64",key:["P5 Js","\u5340\u584a\u6f38\u5c64"],tags:["P5JS"]},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udfa8 map \u51fd\u5f0f",permalink:"/en/docs/p5jsNote/MapFunc"},next:{title:"\ud83c\udfa8 \u8072\u6ce2",permalink:"/en/docs/p5jsNote/Wave"}},p={},s=[{value:"\u6700\u7d42\u7d50\u679c",id:"\u6700\u7d42\u7d50\u679c",level:2},{value:"\u7c21\u6613\u4f5c\u6cd5",id:"\u7c21\u6613\u4f5c\u6cd5",level:2},{value:"1. \u9996\u5148\u5c07\u5bec\u5ea6\u9664\u4ee5\u4e94\uff0c\u4f86\u7372\u5f97\u4e94\u500b\u5340\u584a",id:"1-\u9996\u5148\u5c07\u5bec\u5ea6\u9664\u4ee5\u4e94\u4f86\u7372\u5f97\u4e94\u500b\u5340\u584a",level:3},{value:"2. \u958b\u59cb\u756b\u7b2c\u4e00\u584a",id:"2-\u958b\u59cb\u756b\u7b2c\u4e00\u584a",level:3},{value:"3. \u56e0\u70ba\u6211\u5011\u9700\u8981\u5728\u6bcf\u500b\u5340\u584a\u5f9e\u4e0a\u800c\u4e0b\u756b\u7dda\uff0c\u800c\u4e14\u7dda\u9700\u8981\u6f38\u5c64\uff0c\u6240\u4ee5\u4f7f\u7528 map \u8a08\u7b97\u7d05\u8272",id:"3-\u56e0\u70ba\u6211\u5011\u9700\u8981\u5728\u6bcf\u500b\u5340\u584a\u5f9e\u4e0a\u800c\u4e0b\u756b\u7dda\u800c\u4e14\u7dda\u9700\u8981\u6f38\u5c64\u6240\u4ee5\u4f7f\u7528-map-\u8a08\u7b97\u7d05\u8272",level:3},{value:"4. \u8a2d\u5b9a\u756b\u7b46\u984f\u8272(RGB)",id:"4-\u8a2d\u5b9a\u756b\u7b46\u984f\u8272rgb",level:3},{value:"5. \u756b\u7dda",id:"5-\u756b\u7dda",level:3},{value:"\u96d9\u8ff4\u5708\u505a\u6cd5",id:"\u96d9\u8ff4\u5708\u505a\u6cd5",level:2},{value:"1. \u7d05\u8272\u8a08\u7b97\u7684\u7cbe\u7c21\u5316",id:"1-\u7d05\u8272\u8a08\u7b97\u7684\u7cbe\u7c21\u5316",level:3},{value:"2. \u4e26\u5c07\u5283\u7dda\u7684\u9ede\u5230\u9ede\u4f7f\u7528\u904b\u7b97\u7684\u65b9\u5f0f",id:"2-\u4e26\u5c07\u5283\u7dda\u7684\u9ede\u5230\u9ede\u4f7f\u7528\u904b\u7b97\u7684\u65b9\u5f0f",level:3}],u={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-\u5340\u584a\u6f38\u5c64"},"\ud83c\udfa8 \u5340\u584a\u6f38\u5c64"),(0,r.kt)("h2",{id:"\u6700\u7d42\u7d50\u679c"},"\u6700\u7d42\u7d50\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/LonelyYeezhiChicken/p5Js-Demo/raw/main/Gradient/Gradient.png",alt:"mdImg"})),(0,r.kt)("h2",{id:"\u7c21\u6613\u4f5c\u6cd5"},"\u7c21\u6613\u4f5c\u6cd5"),(0,r.kt)("h3",{id:"1-\u9996\u5148\u5c07\u5bec\u5ea6\u9664\u4ee5\u4e94\u4f86\u7372\u5f97\u4e94\u500b\u5340\u584a"},"1. \u9996\u5148\u5c07\u5bec\u5ea6\u9664\u4ee5\u4e94\uff0c\u4f86\u7372\u5f97\u4e94\u500b\u5340\u584a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let linePosition = width / 5;\n")),(0,r.kt)("h3",{id:"2-\u958b\u59cb\u756b\u7b2c\u4e00\u584a"},"2. \u958b\u59cb\u756b\u7b2c\u4e00\u584a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"for (let i = 0; i < height; i++) {\n  let resAmount = map(i, 0, height, 0, 255);\n  stroke(resAmount, 100, 200);\n  line(0, i, linePosition, i);\n}\n")),(0,r.kt)("h3",{id:"3-\u56e0\u70ba\u6211\u5011\u9700\u8981\u5728\u6bcf\u500b\u5340\u584a\u5f9e\u4e0a\u800c\u4e0b\u756b\u7dda\u800c\u4e14\u7dda\u9700\u8981\u6f38\u5c64\u6240\u4ee5\u4f7f\u7528-map-\u8a08\u7b97\u7d05\u8272"},"3. \u56e0\u70ba\u6211\u5011\u9700\u8981\u5728\u6bcf\u500b\u5340\u584a\u5f9e\u4e0a\u800c\u4e0b\u756b\u7dda\uff0c\u800c\u4e14\u7dda\u9700\u8981\u6f38\u5c64\uff0c\u6240\u4ee5\u4f7f\u7528 map \u8a08\u7b97\u7d05\u8272"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7531\u65bc i \u5f9e\u4e0a\u800c\u4e0b\uff0c\u6240\u4ee5 i \u7684\u7bc4\u570d\u662f 0~\u756b\u5e03\u7684\u9ad8"),(0,r.kt)("li",{parentName:"ul"},"\u8981\u8f49\u63db\u6210 RGB \u7684\u7bc4\u570d 0~255"),(0,r.kt)("li",{parentName:"ul"},"\u9019\u908a\u63db\u7b97\u51fa\u4f86\u7684\u662f RGB \u4e2d\u7684 R(\u7d05\u8272)"),(0,r.kt)("li",{parentName:"ul"},"\u7531\u65bc\u96a8\u8457\u5340\u584a\u589e\u9577\u8981\u8f49\u63db\u7684\u4e09\u539f\u8272\u8d77\u59cb\u4f4d\u7f6e\u9700\u8981\u8d8a\u4f86\u8d8a\u5927"),(0,r.kt)("li",{parentName:"ul"},"\u56e0\u6b64\u5c07\u4ed6\u4e58\u4ee5 30 \u7684\u500d\u6578")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"//\u5340\u584a1\nlet resAmount = map(i, 0, height, 0, 255);\n\n//\u5340\u584a2\nlet resAmount = map(i, 0, height, 30, 255);\n\n//\u5340\u584a3\nlet resAmount = map(i, 0, height, 60, 255);\n\n//\u5340\u584a4\nlet resAmount = map(i, 0, height, 90, 255);\n\n//\u5340\u584a5\nlet resAmount = map(i, 0, height, 120, 255);\n")),(0,r.kt)("h3",{id:"4-\u8a2d\u5b9a\u756b\u7b46\u984f\u8272rgb"},"4. \u8a2d\u5b9a\u756b\u7b46\u984f\u8272(RGB)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c07\u6bcf\u6b21\u8a08\u7b97\u5f8c\u7684\u7d05\u8272\u7f6e\u5165\uff0c\u5176\u4ed6\u5169\u8272\u56fa\u5b9a"),(0,r.kt)("li",{parentName:"ul"},"\u7531\u65bc\u7d05\u8272\u96a8\u8457\u8ff4\u5708\uff0c\u6578\u5b57\u6703\u8d8a\u4f86\u8d8a\u5927"),(0,r.kt)("li",{parentName:"ul"},"\u56e0\u6b64\u984f\u8272\u6703\u8d8a\u4f86\u8d8a\u504f\u7d2b\u8272\uff0c\u85c9\u6b64\u9054\u5230\u6f38\u5c64\u6548\u679c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"stroke(resAmount, 100, 200);\n")),(0,r.kt)("h3",{id:"5-\u756b\u7dda"},"5. \u756b\u7dda"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u756b\u7dda\u7684\u91cd\u9ede\u5728\u65bc\u8981\u7531\u4e0a\u800c\u4e0b -> \u6240\u4ee5\u8d77\u9ede\u8207\u7d42\u9ede\u7684 y \u90fd\u5e36\u5165 i"),(0,r.kt)("li",{parentName:"ul"},"x \u8ef8\u5247\u662f\u9700\u8981\u5f9e\u7b2c\u4e00\u500b\u5340\u584a\u7684\u8d77\u9ede\u756b\u5230\u7b2c\u4e8c\u500b\u5340\u584a\u7684\u8d77\u9ede"),(0,r.kt)("li",{parentName:"ul"},"\u6240\u4ee5\u6211\u5011\u7528\u4e86\u525b\u525b\u7b97\u597d\u7684\u5340\u584a(linePosition)"),(0,r.kt)("li",{parentName:"ul"},"\u4f8b\u5982: \u7b2c\u4e00\u584a\u5c31\u662f\u8981\u5f9e 0~\u7b2c\u4e00\u584a\u7684\u7d42\u9ede\uff0c\u7b2c\u4e8c\u584a\u5247\u662f\u9700\u8981\u5f9e\u7b2c\u4e00\u584a\u7d42\u9ede\u5230\u7b2c\u4e8c\u584a\u8d77\u9ede")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"//\u7b2c\u4e00\u584a (0 ~ \u7b2c\u4e00\u584a)\nline(0, i, linePosition, i);\n\n//\u7b2c\u4e8c\u584a (\u7b2c\u4e00\u584a ~ \u7b2c\u4e8c\u584a)\nline(linePosition * 1, i, linePosition * 2, i);\n\n//\u7b2c\u4e09\u584a (\u7b2c\u4e8c\u584a ~ \u7b2c\u4e09\u584a)\nline(linePosition * 2, i, linePosition * 3, i);\n\n//\u7b2c\u56db\u584a (\u7b2c\u4e09\u584a ~ \u7b2c\u56db\u584a)\nline(linePosition * 3, i, linePosition * 4, i);\n\n//\u7b2c\u4e94\u584a (\u7b2c\u56db\u584a ~ \u7b2c\u4e94\u584a)\nline(linePosition * 4, i, linePosition * 5, i);\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u96d9\u8ff4\u5708\u505a\u6cd5"},"\u96d9\u8ff4\u5708\u505a\u6cd5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u96d9\u8ff4\u5708\u4e3b\u8981\u662f\u5c07\u4ee5\u4e0a\u91cd\u8907\u7684\u7a0b\u5f0f\u7cbe\u7c21\u5316")),(0,r.kt)("h3",{id:"1-\u7d05\u8272\u8a08\u7b97\u7684\u7cbe\u7c21\u5316"},"1. \u7d05\u8272\u8a08\u7b97\u7684\u7cbe\u7c21\u5316"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7531\u65bc RGB \u7684\u7bc4\u570d\u6bcf\u6b21\u90fd\u662f 30 \u7684\u500d\u6578"),(0,r.kt)("li",{parentName:"ul"},"\u56e0\u6b64\u6211\u5011\u5c07\u4ed6","*","30")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let resAmount = map(i, 0, height, position * 30, 255);\n")),(0,r.kt)("h3",{id:"2-\u4e26\u5c07\u5283\u7dda\u7684\u9ede\u5230\u9ede\u4f7f\u7528\u904b\u7b97\u7684\u65b9\u5f0f"},"2. \u4e26\u5c07\u5283\u7dda\u7684\u9ede\u5230\u9ede\u4f7f\u7528\u904b\u7b97\u7684\u65b9\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"line(linePosition * position, i, linePosition * (position + 1), i);\n")))}m.isMDXComponent=!0}}]);