"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[3217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,u=d["".concat(o,".").concat(m)]||d[m]||h[m]||i;return n?a.createElement(u,l(l({ref:t},c),{},{components:n})):a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:15,description:"phaser js \u904a\u6232\u5f15\u64ce",key:["phaser3","phaserJS","\u904a\u6232\u5f15\u64ce","game"],tags:["phaser3","phaserJS","\u904a\u6232\u5f15\u64ce","game"]},l="\ud83c\udfae \u57fa\u672c\u8a9e\u6cd5(\u4e8c) - \u5716\u7247",s={unversionedId:"phaserJs/day4",id:"phaserJs/day4",title:"\ud83c\udfae \u57fa\u672c\u8a9e\u6cd5(\u4e8c) - \u5716\u7247",description:"phaser js \u904a\u6232\u5f15\u64ce",source:"@site/docs/phaserJs/day4.md",sourceDirName:"phaserJs",slug:"/phaserJs/day4",permalink:"/docs/phaserJs/day4",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/phaserJs/day4.md",tags:[{label:"phaser3",permalink:"/docs/tags/phaser-3"},{label:"phaserJS",permalink:"/docs/tags/phaser-js"},{label:"\u904a\u6232\u5f15\u64ce",permalink:"/docs/tags/\u904a\u6232\u5f15\u64ce"},{label:"game",permalink:"/docs/tags/game"}],version:"current",lastUpdatedAt:1690724133,formattedLastUpdatedAt:"2023\u5e747\u670830\u65e5",sidebarPosition:15,frontMatter:{sidebar_position:15,description:"phaser js \u904a\u6232\u5f15\u64ce",key:["phaser3","phaserJS","\u904a\u6232\u5f15\u64ce","game"],tags:["phaser3","phaserJS","\u904a\u6232\u5f15\u64ce","game"]},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udfae \u57fa\u672c\u8a9e\u6cd5(\u4e00) - \u975c\u614b\u8cc7\u6e90",permalink:"/docs/phaserJs/day3"},next:{title:"\ud83c\udfae \u57fa\u672c\u8a9e\u6cd5(\u4e09) - \u5716\u7247\u4e32\u806f",permalink:"/docs/phaserJs/day5"}},o={},p=[{value:"\u4eca\u5929\u4f86\u628a\u80cc\u666f\u8207\u89d2\u8272\u986f\u793a\u51fa\u4f86\u5427",id:"\u4eca\u5929\u4f86\u628a\u80cc\u666f\u8207\u89d2\u8272\u986f\u793a\u51fa\u4f86\u5427",level:2},{value:"\u57fa\u672c phaser.js \u529f\u80fd - \u751f\u6210\u7269\u4ef6",id:"\u57fa\u672c-phaserjs-\u529f\u80fd---\u751f\u6210\u7269\u4ef6",level:2},{value:"\u4f7f\u7528 <code>create</code>",id:"\u4f7f\u7528-create",level:2},{value:"1. \u5148\u5230 config \u7d81\u5b9a\u4e8b\u4ef6",id:"1-\u5148\u5230-config-\u7d81\u5b9a\u4e8b\u4ef6",level:3},{value:"2. <code>create()</code> \u5c31\u8207 create \u7684\u4e8b\u4ef6\u7d81\u8a02\u4e86",id:"2-create-\u5c31\u8207-create-\u7684\u4e8b\u4ef6\u7d81\u8a02\u4e86",level:3},{value:"\u5efa\u7acb\u80cc\u666f\u5716",id:"\u5efa\u7acb\u80cc\u666f\u5716",level:2},{value:"1. \u653e\u5165\u5716\u7247",id:"1-\u653e\u5165\u5716\u7247",level:3},{value:"2. <code>sprite(0, 0, &quot;bg1&quot;)</code> \u53c3\u6578\u5206\u5225\u70ba (x, y, \u5716\u7247 key)",id:"2-sprite0-0-bg1-\u53c3\u6578\u5206\u5225\u70ba-x-y-\u5716\u7247-key",level:3},{value:"3. <code>!! \u5716\u7247\u9810\u8a2d\u90fd\u4ee5\u4e2d\u5fc3\u9ede\u4f86\u505a\u5b9a\u4f4d !!</code>",id:"3--\u5716\u7247\u9810\u8a2d\u90fd\u4ee5\u4e2d\u5fc3\u9ede\u4f86\u505a\u5b9a\u4f4d-",level:3},{value:"4. \u56e0\u6b64\u6211\u5011\u53ef\u4ee5\u8a08\u7b97\u756b\u5e03\u7684\u4e2d\u5fc3\u9ede\u4f86\u7576\u80cc\u666f\u7684\u4e2d\u5fc3\u9ede",id:"4-\u56e0\u6b64\u6211\u5011\u53ef\u4ee5\u8a08\u7b97\u756b\u5e03\u7684\u4e2d\u5fc3\u9ede\u4f86\u7576\u80cc\u666f\u7684\u4e2d\u5fc3\u9ede",level:3},{value:"5. <code>/ 2</code> \u4f86\u8a08\u7b97\u756b\u5e03\u7684\u6b63\u4e2d\u5fc3",id:"5--2-\u4f86\u8a08\u7b97\u756b\u5e03\u7684\u6b63\u4e2d\u5fc3",level:3},{value:"6. \u5c07\u80cc\u666f\u64fa\u81f3\u756b\u5e03\u7684\u6b63\u4e2d\u5fc3",id:"6-\u5c07\u80cc\u666f\u64fa\u81f3\u756b\u5e03\u7684\u6b63\u4e2d\u5fc3",level:3},{value:"\u7f6e\u5165\u89d2\u8272",id:"\u7f6e\u5165\u89d2\u8272",level:2},{value:"\u64ad\u653e\u97f3\u6a02",id:"\u64ad\u653e\u97f3\u6a02",level:2},{value:"\u4eca\u5929\u7d42\u65bc\u5b8c\u6210\u4ef0\u671b\u5927\u5730\u7684\u8349\u6ce5\u99ac\u4e86\uff0c\u656c\u8acb\u671f\u5f85\u660e\u5929\u7684\u5167\u5bb9",id:"\u4eca\u5929\u7d42\u65bc\u5b8c\u6210\u4ef0\u671b\u5927\u5730\u7684\u8349\u6ce5\u99ac\u4e86\u656c\u8acb\u671f\u5f85\u660e\u5929\u7684\u5167\u5bb9",level:2},{value:"\u7a0b\u5f0f\u539f\u78bc",id:"\u7a0b\u5f0f\u539f\u78bc",level:2}],c={toc:p},d="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-\u57fa\u672c\u8a9e\u6cd5\u4e8c---\u5716\u7247"},"\ud83c\udfae \u57fa\u672c\u8a9e\u6cd5(\u4e8c) - \u5716\u7247"),(0,r.kt)("h2",{id:"\u4eca\u5929\u4f86\u628a\u80cc\u666f\u8207\u89d2\u8272\u986f\u793a\u51fa\u4f86\u5427"},"\u4eca\u5929\u4f86\u628a\u80cc\u666f\u8207\u89d2\u8272\u986f\u793a\u51fa\u4f86\u5427"),(0,r.kt)("h2",{id:"\u57fa\u672c-phaserjs-\u529f\u80fd---\u751f\u6210\u7269\u4ef6"},"\u57fa\u672c phaser.js \u529f\u80fd - \u751f\u6210\u7269\u4ef6"),(0,r.kt)("h2",{id:"\u4f7f\u7528-create"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"h2"},"create")),(0,r.kt)("h3",{id:"1-\u5148\u5230-config-\u7d81\u5b9a\u4e8b\u4ef6"},"1. \u5148\u5230 config \u7d81\u5b9a\u4e8b\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u5ba3\u544a\u5834\u666f\u7684\u57fa\u672c\u8cc7\u8a0a\nlet config = {\n  type: Phaser.AUTO,\n  width: 600, // \u5bec\n  height: 300, // \u9ad8\n  // \u7d81\u5b9a\u5ba3\u544a\u7684\u5834\u666f\n  scene: {\n    preload: preload,\n    create: create,\n  },\n};\n")),(0,r.kt)("h3",{id:"2-create-\u5c31\u8207-create-\u7684\u4e8b\u4ef6\u7d81\u8a02\u4e86"},"2. ",(0,r.kt)("inlineCode",{parentName:"h3"},"create()")," \u5c31\u8207 create \u7684\u4e8b\u4ef6\u7d81\u8a02\u4e86"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function create() {\n  // \u8f09\u5165\u7d20\u6750\n}\n")),(0,r.kt)("h2",{id:"\u5efa\u7acb\u80cc\u666f\u5716"},"\u5efa\u7acb\u80cc\u666f\u5716"),(0,r.kt)("h3",{id:"1-\u653e\u5165\u5716\u7247"},"1. \u653e\u5165\u5716\u7247"),(0,r.kt)("h3",{id:"2-sprite0-0-bg1-\u53c3\u6578\u5206\u5225\u70ba-x-y-\u5716\u7247-key"},"2. ",(0,r.kt)("inlineCode",{parentName:"h3"},'sprite(0, 0, "bg1")')," \u53c3\u6578\u5206\u5225\u70ba (x, y, \u5716\u7247 key)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'  let bg = this.add.sprite(0, 0, "bg1");\n')),(0,r.kt)("h3",{id:"3--\u5716\u7247\u9810\u8a2d\u90fd\u4ee5\u4e2d\u5fc3\u9ede\u4f86\u505a\u5b9a\u4f4d-"},"3. ",(0,r.kt)("inlineCode",{parentName:"h3"},"!! \u5716\u7247\u9810\u8a2d\u90fd\u4ee5\u4e2d\u5fc3\u9ede\u4f86\u505a\u5b9a\u4f4d !!")),(0,r.kt)("h3",{id:"4-\u56e0\u6b64\u6211\u5011\u53ef\u4ee5\u8a08\u7b97\u756b\u5e03\u7684\u4e2d\u5fc3\u9ede\u4f86\u7576\u80cc\u666f\u7684\u4e2d\u5fc3\u9ede"},"4. \u56e0\u6b64\u6211\u5011\u53ef\u4ee5\u8a08\u7b97\u756b\u5e03\u7684\u4e2d\u5fc3\u9ede\u4f86\u7576\u80cc\u666f\u7684\u4e2d\u5fc3\u9ede"),(0,r.kt)("h3",{id:"5--2-\u4f86\u8a08\u7b97\u756b\u5e03\u7684\u6b63\u4e2d\u5fc3"},"5. ",(0,r.kt)("inlineCode",{parentName:"h3"},"/ 2")," \u4f86\u8a08\u7b97\u756b\u5e03\u7684\u6b63\u4e2d\u5fc3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"  //\u53d6\u5f97\u5bec\u9ad8\n  let width = this.sys.game.config.width / 2;\n  let height = this.sys.game.config.height / 2;\n")),(0,r.kt)("h3",{id:"6-\u5c07\u80cc\u666f\u64fa\u81f3\u756b\u5e03\u7684\u6b63\u4e2d\u5fc3"},"6. \u5c07\u80cc\u666f\u64fa\u81f3\u756b\u5e03\u7684\u6b63\u4e2d\u5fc3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"  //\u8a2d\u5b9a\u4f4d\u7f6e\n  bg.setPosition(width, height);\n")),(0,r.kt)("h2",{id:"\u7f6e\u5165\u89d2\u8272"},"\u7f6e\u5165\u89d2\u8272"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u653e\u5165\u5716\u7247"),(0,r.kt)("li",{parentName:"ol"},"\u76f4\u63a5\u628a\u89d2\u8272\u7f6e\u5165\u6307\u5b9a\u4f4d\u7f6e"),(0,r.kt)("li",{parentName:"ol"},"\u9019\u908a\u6211\u5011\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"this.player")," \u65b9\u4fbf\u65e5\u5f8c\u63a7\u5236\u89d2\u8272\u4f7f\u7528"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},'sprite(0, 0, "bg1")')," \u53c3\u6578\u5206\u5225\u70ba (x, y, \u5716\u7247 key)"),(0,r.kt)("li",{parentName:"ol"},"\u9019\u908a\u628a ",(0,r.kt)("inlineCode",{parentName:"li"},"x, y")," \u5206\u5225\u8a2d\u5b9a\u6210 ",(0,r.kt)("inlineCode",{parentName:"li"},"450, 85")," \u8b93\u8349\u6ce5\u99ac\u7ad9\u5728\u5c71\u4e0a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'this.player = this.add.sprite(450, 105, "player1");\n')),(0,r.kt)("h2",{id:"\u64ad\u653e\u97f3\u6a02"},"\u64ad\u653e\u97f3\u6a02"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5efa\u7acb\u97f3\u6a02\u6a94\u7269\u4ef6"),(0,r.kt)("li",{parentName:"ol"},"\u97f3\u6a02\u5c6c\u6027",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"volume -> \u97f3\u91cf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"loop -> \u662f\u5426\u8f2a\u64ad"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'this.music = this.sound.add("music1", {\n  volume: 0.2, //\u97f3\u91cf\n  loop: true, // \u662f\u5426\u8f2a\u64ad\n});\n\nthis.music.play();\n')),(0,r.kt)("h2",{id:"\u4eca\u5929\u7d42\u65bc\u5b8c\u6210\u4ef0\u671b\u5927\u5730\u7684\u8349\u6ce5\u99ac\u4e86\u656c\u8acb\u671f\u5f85\u660e\u5929\u7684\u5167\u5bb9"},"\u4eca\u5929\u7d42\u65bc\u5b8c\u6210\u4ef0\u671b\u5927\u5730\u7684\u8349\u6ce5\u99ac\u4e86\uff0c\u656c\u8acb\u671f\u5f85\u660e\u5929\u7684\u5167\u5bb9"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u7a0b\u5f0f\u539f\u78bc"},"\u7a0b\u5f0f\u539f\u78bc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Game-day4</title>\n</head>\n\n<body>\n    <div id="app"></div>\n\n    <script src="../lib/phaser.min.js"><\/script>\n    <script>\n        // \u5ba3\u544a\u4e00\u500b\u5834\u666f\n        let scene = new Phaser.Scene(\'Game\');\n        // \u5ba3\u544a\u5834\u666f\u7684\u57fa\u672c\u8cc7\u8a0a\n        let config = {\n            type: Phaser.AUTO,\n            width: 600, // \u5bec\n            height: 300, // \u9ad8\n            // \u7d81\u5b9a\u5ba3\u544a\u7684\u5834\u666f\n            scene: {\n                preload: preload,\n                create: create\n            }\n        }\n\n        //\u555f\u52d5\u904a\u6232\n        let game = new Phaser.Game(config)\n\n        //\u8f09\u5165\u7d20\u6750\n        function preload() {\n            // \u8f09\u5165\u7d20\u6750\n            // bg1 -> \u5716\u7247\u8f09\u5165\u5f8c\u7684\u7269\u4ef6\u540d\u7a31(key)\n            this.load.image(\'bg1\', \'../assets/backgrounds/bg_1.webp\');\n            this.load.image(\'player1\', \'../assets/roles/alpaca.png\');\n            this.load.audio(\'music1\', \'../assets/music/crrect_answer3.mp3\');\n        }\n\n        //\u751f\u6210\u7269\u4ef6\n        function create() {\n            // 1. \u80cc\u666f\n            let bg = this.add.sprite(0, 0, "bg1");\n\n            //\u53d6\u5f97\u5bec\u9ad8\n            let width = this.sys.game.config.width / 2;\n            let height = this.sys.game.config.height / 2;\n\n            //\u8a2d\u5b9a\u4f4d\u7f6e\n            bg.setPosition(width, height);\n\n            // 2. \u89d2\u8272\n            this.player = this.add.sprite(450, 105, "player1");\n\n            // 3. \u97f3\u6a02\n            this.music = this.sound.add(\'music1\', {\n                volume: 0.2, //\u97f3\u91cf\n                loop: true // \u662f\u5426\u8f2a\u64ad\n            });\n\n            this.music.play();\n        }\n    <\/script>\n\n</body>\n\n</html>\n')))}h.isMDXComponent=!0}}]);