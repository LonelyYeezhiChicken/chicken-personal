"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[4507],{49613:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var r=a(59496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),o=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=o(e.components);return r.createElement(m.Provider,{value:t},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,m=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),g=o(a),h=n,u=g["".concat(m,".").concat(h)]||g[h]||s[h]||i;return a?r.createElement(u,l(l({ref:t},c),{},{components:a})):r.createElement(u,l({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=h;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p[g]="string"==typeof e?e:n,l[1]=p;for(var o=2;o<i;o++)l[o]=a[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},85070:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var r=a(88028),n=(a(59496),a(49613));const i={slug:"RPG-v1-Game-post",title:"\u7b2c\u4e00\u4ee3 RPG Game",authors:["chicken"],key:["phaser3","phaserJS","\u904a\u6232\u5f15\u64ce","game"],tags:["phaser3","phaserJS","\u904a\u6232\u5f15\u64ce","game"]},l="\u7b2c\u4e00\u4ee3 RPG Game",p={permalink:"/en/blog/RPG-v1-Game-post",editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/blog/2023-06-24-RpgGame/2023-06-24-RpgGame.md",source:"@site/blog/2023-06-24-RpgGame/2023-06-24-RpgGame.md",title:"\u7b2c\u4e00\u4ee3 RPG Game",description:"\u5c01\u9762",date:"2023-06-24T00:00:00.000Z",formattedDate:"June 24, 2023",tags:[{label:"phaser3",permalink:"/en/blog/tags/phaser-3"},{label:"phaserJS",permalink:"/en/blog/tags/phaser-js"},{label:"\u904a\u6232\u5f15\u64ce",permalink:"/en/blog/tags/\u904a\u6232\u5f15\u64ce"},{label:"game",permalink:"/en/blog/tags/game"}],readingTime:.625,hasTruncateMarker:!0,authors:[{name:"\u4e00\u96bb\u96de",title:"Hi Hi",url:"https://blog.lychicken.com/",imageURL:"https://github.com/LonelyYeezhiChicken/chicken-personal/blob/main/static/img/chicken.jpg?raw=true",key:"chicken"}],frontMatter:{slug:"RPG-v1-Game-post",title:"\u7b2c\u4e00\u4ee3 RPG Game",authors:["chicken"],key:["phaser3","phaserJS","\u904a\u6232\u5f15\u64ce","game"],tags:["phaser3","phaserJS","\u904a\u6232\u5f15\u64ce","game"]},nextItem:{title:"vue-ts \u6a21\u677f",permalink:"/en/blog/vue-ts-template-post"}},m={authorsImageUrls:[void 0]},o=[{value:"\u95dc\u65bc Phaser 3",id:"\u95dc\u65bc-phaser-3",level:2},{value:"RPG Game",id:"rpg-game",level:2},{value:"\u904a\u6232\u9023\u7d50",id:"\u904a\u6232\u9023\u7d50",level:2}],c={toc:o},g="wrapper";function s(e){let{components:t,...i}=e;return(0,n.kt)(g,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u5c01\u9762",src:a(97054).Z,width:"400",height:"200"})),(0,n.kt)("h2",{id:"\u95dc\u65bc-phaser-3"},"\u95dc\u65bc Phaser 3"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4ec0\u9ebc\u662f Phaser js \u5462?",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"\u4ed6\u662f\u4e00\u500b Game Framework"))),(0,n.kt)("li",{parentName:"ul"},"\u70ba\u4ec0\u9ebc\u8981\u9078\u64c7\u5b83\u5462?",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"\u9996\u5148\u56e0\u70ba\u4ed6\u7684\u6587\u4ef6\u975e\u5e38\u5b8c\u6574\uff0c\u800c\u4e14\u4e00\u76f4\u6301\u7e8c\u5728\u66f4\u65b0"),(0,n.kt)("li",{parentName:"ol"},"\u63a5\u4e0b\u4f86\u6700\u91cd\u8981\u7684\u662f\u4ed6\u9084\u652f\u6301 TypeScript"),(0,n.kt)("li",{parentName:"ol"},"\u56e0\u70ba\u90fd\u5c6c\u65bc\u975c\u614b\u8cc7\u6e90\uff0c\u56e0\u6b64\u53ef\u4ee5\u4f7f\u7528 Github page \u5efa\u7acb\u5c6c\u65bc\u4f60\u7684\u5c0f\u904a\u6232")))),(0,n.kt)("h2",{id:"rpg-game"},"RPG Game"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u9078\u89d2\u756b\u9762"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://github.com/LonelyYeezhiChicken/chicken-personal/blob/main/static/mdImgs/phaser/RpgGame/role.png?raw=true",alt:"mdImg"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6230\u58eb"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://github.com/LonelyYeezhiChicken/chicken-personal/blob/main/static/mdImgs/phaser/RpgGame/w.png?raw=true",alt:"mdImg"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5766\u514b"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://github.com/LonelyYeezhiChicken/chicken-personal/blob/main/static/mdImgs/phaser/RpgGame/t.png?raw=true",alt:"mdImg"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6cd5\u5e2b"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://github.com/LonelyYeezhiChicken/chicken-personal/blob/main/static/mdImgs/phaser/RpgGame/m.png?raw=true",alt:"mdImg"})))),(0,n.kt)("h2",{id:"\u904a\u6232\u9023\u7d50"},(0,n.kt)("a",{parentName:"h2",href:"https://lonelyyeezhichicken.github.io/rpg-game-v1/"},"\u904a\u6232\u9023\u7d50")))}s.isMDXComponent=!0},97054:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgNDAwIDIwMCI+CiAgICA8ZGVmcz4KICAgICAgICA8bWFzayBpZD0ibWFzayI+CiAgICAgICAgICAgIDxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZmZmIiAvPgogICAgICAgICAgICA8cGF0aCBkPSJNMCwyMDAgTDEwMCwxMDAgTDIwMCwyMDAgWiIgZmlsbD0iIzAwMCIgLz4KICAgICAgICA8L21hc2s+CiAgICA8L2RlZnM+CiAgICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Q0ZjFmOSIgbWFzaz0idXJsKCNtYXNrKSIgLz4KICAgIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iMC4zZW0iIGZvbnQtc2l6ZT0iNDgiIGZpbGw9IiNGRkYiIHN0cm9rZT0iIzAwYTZkNiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHlsZT0iZm9udC1mYW1pbHk6ICdBcmlhbCBCbGFjaycsIHNhbnMtc2VyaWY7IGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDJweCA0cHggIzAwMDAwMCk7Ij5SUEc8L3RleHQ+CiAgICA8dGV4dCB4PSIzMDAiIHk9IjEzMCIgZm9udC1zaXplPSIyMCIgZmlsbD0iI0ZGRiIgc3Ryb2tlPSIjMDBhNmQ2IiBzdHJva2Utd2lkdGg9IjIiIHN0eWxlPSJmb250LWZhbWlseTogJ0FyaWFsIEJsYWNrJywgc2Fucy1zZXJpZjsgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggMnB4IDRweCAjMDAwMDAwKTsiPlBoYXNlcjM8L3RleHQ+Cjwvc3ZnPg=="}}]);