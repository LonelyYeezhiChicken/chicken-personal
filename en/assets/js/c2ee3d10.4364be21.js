"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[8645],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>h});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),p=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(o.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,h=d["".concat(o,".").concat(u)]||d[u]||m[u]||l;return a?t.createElement(h,s(s({ref:n},c),{},{components:a})):t.createElement(h,s({ref:n},c))}));function h(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=u;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=a[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3354:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var t=a(7462),r=(a(7294),a(3905));const l={sidebar_position:10,description:"phaser js \u904a\u6232\u5f15\u64ce",key:["phaser3","phaserJS","\u904a\u6232\u5f15\u64ce","game"],tags:["phaser3","phaserJS","\u904a\u6232\u5f15\u64ce","game"]},s="\ud83c\udfae \u57fa\u672c\u8a9e\u6cd5(\u4e00) - \u975c\u614b\u8cc7\u6e90",i={unversionedId:"phaserJs/day3",id:"phaserJs/day3",title:"\ud83c\udfae \u57fa\u672c\u8a9e\u6cd5(\u4e00) - \u975c\u614b\u8cc7\u6e90",description:"phaser js \u904a\u6232\u5f15\u64ce",source:"@site/docs/phaserJs/day3.md",sourceDirName:"phaserJs",slug:"/phaserJs/day3",permalink:"/en/docs/phaserJs/day3",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/phaserJs/day3.md",tags:[{label:"phaser3",permalink:"/en/docs/tags/phaser-3"},{label:"phaserJS",permalink:"/en/docs/tags/phaser-js"},{label:"\u904a\u6232\u5f15\u64ce",permalink:"/en/docs/tags/\u904a\u6232\u5f15\u64ce"},{label:"game",permalink:"/en/docs/tags/game"}],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"phaser js \u904a\u6232\u5f15\u64ce",key:["phaser3","phaserJS","\u904a\u6232\u5f15\u64ce","game"],tags:["phaser3","phaserJS","\u904a\u6232\u5f15\u64ce","game"]},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udfae \u74b0\u5883",permalink:"/en/docs/phaserJs/day2"},next:{title:"\ud83c\udfae \u57fa\u672c\u8a9e\u6cd5(\u4e8c) - \u5716\u7247",permalink:"/en/docs/phaserJs/day4"}},o={},p=[{value:"\u4eca\u5929\u958b\u59cb\u4f86\u628a\u80cc\u666f\u8207\u89d2\u8272\u52a0\u8f09\u5230\u904a\u6232\u8cc7\u6e90\u88e1\u9762\u5427!",id:"\u4eca\u5929\u958b\u59cb\u4f86\u628a\u80cc\u666f\u8207\u89d2\u8272\u52a0\u8f09\u5230\u904a\u6232\u8cc7\u6e90\u88e1\u9762\u5427",level:3},{value:"\u57fa\u672c phaser.js \u529f\u80fd - \u52a0\u8f09\u7d20\u6750",id:"\u57fa\u672c-phaserjs-\u529f\u80fd---\u52a0\u8f09\u7d20\u6750",level:2},{value:"\u4f7f\u7528 <code>preload</code>",id:"\u4f7f\u7528-preload",level:3},{value:"\u8f09\u5165\u8cc7\u6e90 - \u80cc\u666f\u5716",id:"\u8f09\u5165\u8cc7\u6e90---\u80cc\u666f\u5716",level:3},{value:"\u8f09\u5165\u8cc7\u6e90 - \u89d2\u8272\u5716",id:"\u8f09\u5165\u8cc7\u6e90---\u89d2\u8272\u5716",level:3},{value:"\u8f09\u5165\u8cc7\u6e90 - \u97f3\u6a02",id:"\u8f09\u5165\u8cc7\u6e90---\u97f3\u6a02",level:3},{value:"\u4ee5\u4e0a\u5c31\u662f\u4eca\u5929\u7684\u8cc7\u6e90\u52a0\u8f09\uff0c\u660e\u5929\u5c31\u6703\u958b\u59cb\u4f7f\u7528\u9019\u4e9b\u8cc7\u6e90\u5566!",id:"\u4ee5\u4e0a\u5c31\u662f\u4eca\u5929\u7684\u8cc7\u6e90\u52a0\u8f09\u660e\u5929\u5c31\u6703\u958b\u59cb\u4f7f\u7528\u9019\u4e9b\u8cc7\u6e90\u5566",level:3},{value:"\u7a0b\u5f0f\u539f\u78bc",id:"\u7a0b\u5f0f\u539f\u78bc",level:3}],c={toc:p},d="wrapper";function m(e){let{components:n,...a}=e;return(0,r.kt)(d,(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-\u57fa\u672c\u8a9e\u6cd5\u4e00---\u975c\u614b\u8cc7\u6e90"},"\ud83c\udfae \u57fa\u672c\u8a9e\u6cd5(\u4e00) - \u975c\u614b\u8cc7\u6e90"),(0,r.kt)("h3",{id:"\u4eca\u5929\u958b\u59cb\u4f86\u628a\u80cc\u666f\u8207\u89d2\u8272\u52a0\u8f09\u5230\u904a\u6232\u8cc7\u6e90\u88e1\u9762\u5427"},"\u4eca\u5929\u958b\u59cb\u4f86\u628a\u80cc\u666f\u8207\u89d2\u8272\u52a0\u8f09\u5230\u904a\u6232\u8cc7\u6e90\u88e1\u9762\u5427!"),(0,r.kt)("h2",{id:"\u57fa\u672c-phaserjs-\u529f\u80fd---\u52a0\u8f09\u7d20\u6750"},"\u57fa\u672c phaser.js \u529f\u80fd - \u52a0\u8f09\u7d20\u6750"),(0,r.kt)("h3",{id:"\u4f7f\u7528-preload"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"h3"},"preload")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9019\u6b65\u9a5f\u7a31\u70ba ",(0,r.kt)("strong",{parentName:"li"},"\u9810\u52a0\u8f09"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5148\u5230 config \u7d81\u5b9a\u4e8b\u4ef6")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u5ba3\u544a\u5834\u666f\u7684\u57fa\u672c\u8cc7\u8a0a\nlet config = {\n  type: Phaser.AUTO,\n  width: 600, // \u5bec\n  height: 300, // \u9ad8\n  // \u7d81\u5b9a\u5ba3\u544a\u7684\u5834\u666f\n  scene: {\n    preload: preload,\n  },\n};\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"preload()")," \u5c31\u8207 preload \u7684\u4e8b\u4ef6\u7d81\u8a02\u4e86")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function preload() {\n  // \u8f09\u5165\u7d20\u6750\n}\n")),(0,r.kt)("h3",{id:"\u8f09\u5165\u8cc7\u6e90---\u80cc\u666f\u5716"},"\u8f09\u5165\u8cc7\u6e90 - \u80cc\u666f\u5716"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5148\u5efa\u7acb\u4e00\u500b\u8cc7\u6599\u593e"),(0,r.kt)("li",{parentName:"ol"},"\u540d\u7a31\u547d\u540d\u70ba ",(0,r.kt)("inlineCode",{parentName:"li"},"assets")),(0,r.kt)("li",{parentName:"ol"},"\u518d\u5230\u88e1\u9762\u5efa\u7acb\u4e00\u500b ",(0,r.kt)("inlineCode",{parentName:"li"},"backgroungs")," \u7684\u8cc7\u6599\u593e"),(0,r.kt)("li",{parentName:"ol"},"\u5c07\u80cc\u666f\u5716\u7247\u653e\u5230\u88e1\u9762"),(0,r.kt)("li",{parentName:"ol"},"\u5c07\u5716\u7247\u5f15\u5165")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'function preload() {\n  // \u8f09\u5165\u7d20\u6750\n  // bg1 -> \u5716\u7247\u8f09\u5165\u5f8c\u7684\u7269\u4ef6\u540d\u7a31(key)\n  this.load.image("bg1", "../assets/backgrounds/bg_1.webp");\n}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/LonelyYeezhiChicken/chicken-personal/main/static/mdImgs/phaser/note/backgrounds/bg_1.webp",alt:"mdImg"})),(0,r.kt)("h3",{id:"\u8f09\u5165\u8cc7\u6e90---\u89d2\u8272\u5716"},"\u8f09\u5165\u8cc7\u6e90 - \u89d2\u8272\u5716"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"assets")," \u88e1\u9762\u5efa\u7acb\u4e00\u500b ",(0,r.kt)("inlineCode",{parentName:"li"},"roles")," \u7684\u8cc7\u6599\u593e"),(0,r.kt)("li",{parentName:"ol"},"\u5c07\u80cc\u666f\u5716\u7247\u653e\u5230\u88e1\u9762"),(0,r.kt)("li",{parentName:"ol"},"\u5c07\u5716\u7247\u5f15\u5165")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'function preload() {\n  // \u8f09\u5165\u7d20\u6750\n  // bg1 -> \u5716\u7247\u8f09\u5165\u5f8c\u7684\u7269\u4ef6\u540d\u7a31(key)\n  this.load.image("bg1", "../assets/backgrounds/bg_1.webp");\n  this.load.image("player1", "../assets/roles/alpaca.png");\n}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/LonelyYeezhiChicken/chicken-personal/blob/main/static/mdImgs/phaser/note/roles/alpaca.png?raw=true",alt:"\u8349\u6ce5\u99ac\u5716"})),(0,r.kt)("h3",{id:"\u8f09\u5165\u8cc7\u6e90---\u97f3\u6a02"},"\u8f09\u5165\u8cc7\u6e90 - \u97f3\u6a02"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"assets")," \u88e1\u9762\u5efa\u7acb\u4e00\u500b ",(0,r.kt)("inlineCode",{parentName:"li"},"music")," \u7684\u8cc7\u6599\u593e"),(0,r.kt)("li",{parentName:"ol"},"\u5c07\u80cc\u666f\u5716\u7247\u653e\u5230\u88e1\u9762"),(0,r.kt)("li",{parentName:"ol"},"\u5c07\u5716\u7247\u5f15\u5165")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'function preload() {\n  // \u8f09\u5165\u7d20\u6750\n  // bg1 -> \u5716\u7247\u8f09\u5165\u5f8c\u7684\u7269\u4ef6\u540d\u7a31(key)\n  this.load.image("bg1", "../assets/backgrounds/bg_1.webp");\n  this.load.image("player1", "../assets/roles/alpaca.png");\n  this.load.audio("music1", "../assets/music/crrect_answer3.mp3");\n}\n')),(0,r.kt)("h3",{id:"\u4ee5\u4e0a\u5c31\u662f\u4eca\u5929\u7684\u8cc7\u6e90\u52a0\u8f09\u660e\u5929\u5c31\u6703\u958b\u59cb\u4f7f\u7528\u9019\u4e9b\u8cc7\u6e90\u5566"},"\u4ee5\u4e0a\u5c31\u662f\u4eca\u5929\u7684\u8cc7\u6e90\u52a0\u8f09\uff0c\u660e\u5929\u5c31\u6703\u958b\u59cb\u4f7f\u7528\u9019\u4e9b\u8cc7\u6e90\u5566!"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\u7a0b\u5f0f\u539f\u78bc"},"\u7a0b\u5f0f\u539f\u78bc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Game-day2</title>\n</head>\n\n<body>\n    <div id="app"></div>\n\n    <script src="../lib/phaser.min.js"><\/script>\n    <script>\n        // \u5ba3\u544a\u4e00\u500b\u5834\u666f\n        let scene = new Phaser.Scene(\'Game\');\n        // \u5ba3\u544a\u5834\u666f\u7684\u57fa\u672c\u8cc7\u8a0a\n        let config = {\n            type: Phaser.AUTO,\n            width: 600, // \u5bec\n            height: 300, // \u9ad8\n            // \u7d81\u5b9a\u5ba3\u544a\u7684\u5834\u666f\n            scene: {\n                preload: preload,\n            }\n        }\n\n        //\u555f\u52d5\u904a\u6232\n        let game = new Phaser.Game(config)\n\n        //\u8f09\u5165\u7d20\u6750\n        function preload() {\n            // \u8f09\u5165\u7d20\u6750\n            // bg1 -> \u5716\u7247\u8f09\u5165\u5f8c\u7684\u7269\u4ef6\u540d\u7a31(key)\n            this.load.image(\'bg1\', \'../assets/backgrounds/bg_1.webp\');\n            this.load.image(\'player1\', \'../assets/roles/alpaca.png\');\n            this.load.audio(\'music1\', \'../assets/music/crrect_answer3.mp3\');\n        }\n    <\/script>\n\n</body>\n\n</html>\n')))}m.isMDXComponent=!0}}]);