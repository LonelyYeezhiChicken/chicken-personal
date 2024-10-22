"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[4503],{49613:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>m});var a=t(59496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),d=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},o=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),c=d(t),u=i,m=c["".concat(p,".").concat(u)]||c[u]||h[u]||r;return t?a.createElement(m,l(l({ref:n},o),{},{components:t})):a.createElement(m,l({ref:n},o))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[c]="string"==typeof e?e:i,l[1]=s;for(var d=2;d<r;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},18618:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=t(88028),i=(t(59496),t(49613));const r={sidebar_position:20,description:"phaser js \u904a\u6232\u5f15\u64ce",key:["phaser3","phaserJS","\u904a\u6232\u5f15\u64ce","game"],tags:["phaser3","phaserJS","\u904a\u6232\u5f15\u64ce","game"]},l="\ud83c\udfae \u57fa\u672c\u8a9e\u6cd5(\u4e09) - \u5716\u7247\u4e32\u806f",s={unversionedId:"phaserJs/day5",id:"phaserJs/day5",title:"\ud83c\udfae \u57fa\u672c\u8a9e\u6cd5(\u4e09) - \u5716\u7247\u4e32\u806f",description:"phaser js \u904a\u6232\u5f15\u64ce",source:"@site/docs/phaserJs/day5.md",sourceDirName:"phaserJs",slug:"/phaserJs/day5",permalink:"/docs/phaserJs/day5",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/phaserJs/day5.md",tags:[{label:"phaser3",permalink:"/docs/tags/phaser-3"},{label:"phaserJS",permalink:"/docs/tags/phaser-js"},{label:"\u904a\u6232\u5f15\u64ce",permalink:"/docs/tags/\u904a\u6232\u5f15\u64ce"},{label:"game",permalink:"/docs/tags/game"}],version:"current",lastUpdatedAt:1729561312,formattedLastUpdatedAt:"2024\u5e7410\u670822\u65e5",sidebarPosition:20,frontMatter:{sidebar_position:20,description:"phaser js \u904a\u6232\u5f15\u64ce",key:["phaser3","phaserJS","\u904a\u6232\u5f15\u64ce","game"],tags:["phaser3","phaserJS","\u904a\u6232\u5f15\u64ce","game"]},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udfae \u57fa\u672c\u8a9e\u6cd5(\u4e8c) - \u5716\u7247",permalink:"/docs/phaserJs/day4"},next:{title:"\ud83c\udfae \u57fa\u672c\u8a9e\u6cd5(\u56db) - \u64cd\u4f5c",permalink:"/docs/phaserJs/day6"}},p={},d=[{value:"\u4eca\u5929\u5c31\u4f86\u8b93\u5716\u7247\u52d5\u8d77\u4f86\u5427",id:"\u4eca\u5929\u5c31\u4f86\u8b93\u5716\u7247\u52d5\u8d77\u4f86\u5427",level:2},{value:"\u57fa\u672c phaser.js \u529f\u80fd - \u521d\u59cb\u5316",id:"\u57fa\u672c-phaserjs-\u529f\u80fd---\u521d\u59cb\u5316",level:2},{value:"\u4f7f\u7528 <code>init</code>",id:"\u4f7f\u7528-init",level:3},{value:"1. \u5148\u5230 config \u7d81\u5b9a\u4e8b\u4ef6",id:"1-\u5148\u5230-config-\u7d81\u5b9a\u4e8b\u4ef6",level:3},{value:"2. <code>init()</code> \u5c31\u8207 init \u7684\u4e8b\u4ef6\u7d81\u5b9a\u4e86",id:"2-init-\u5c31\u8207-init-\u7684\u4e8b\u4ef6\u7d81\u5b9a\u4e86",level:3},{value:"\u521d\u59cb\u5316\u7269\u4ef6",id:"\u521d\u59cb\u5316\u7269\u4ef6",level:2},{value:"1. \u52a0\u5165\u884c\u661f\u7684\u79fb\u52d5\u901f\u5ea6 - \u6211\u5011\u7b49\u7b49\u8981\u8b93\u884c\u661f\u79fb\u52d5\u8d77\u4f86",id:"1-\u52a0\u5165\u884c\u661f\u7684\u79fb\u52d5\u901f\u5ea6---\u6211\u5011\u7b49\u7b49\u8981\u8b93\u884c\u661f\u79fb\u52d5\u8d77\u4f86",level:3},{value:"2. \u8349\u6ce5\u99ac\u9663\u5217 - \u9019\u662f\u70ba\u4e86\u8b93\u8349\u6ce5\u99ac\u8b8a\u8eab\u6e96\u5099\u7684",id:"2-\u8349\u6ce5\u99ac\u9663\u5217---\u9019\u662f\u70ba\u4e86\u8b93\u8349\u6ce5\u99ac\u8b8a\u8eab\u6e96\u5099\u7684",level:3},{value:"3. \u8a08\u7b97\u6642\u9593\u8ef8 - \u7528\u4f86\u571f\u70ae\u6642\u9593\u8ef8\u8b8a\u5316\u4f7f\u7528\u7684\uff0c\u7a0d\u5f8c\u7684\u6587\u7ae0\u6703\u8aaa\u660e\u7528\u9014",id:"3-\u8a08\u7b97\u6642\u9593\u8ef8---\u7528\u4f86\u571f\u70ae\u6642\u9593\u8ef8\u8b8a\u5316\u4f7f\u7528\u7684\u7a0d\u5f8c\u7684\u6587\u7ae0\u6703\u8aaa\u660e\u7528\u9014",level:3},{value:"\u57fa\u672c phaser.js \u529f\u80fd - \u756b\u9762\u66f4\u65b0",id:"\u57fa\u672c-phaserjs-\u529f\u80fd---\u756b\u9762\u66f4\u65b0",level:2},{value:"\u4f7f\u7528 <code>update</code>",id:"\u4f7f\u7528-update",level:2},{value:"1. \u5148\u5230 config\u7d81\u5b9a\u4e8b\u4ef6",id:"1-\u5148\u5230-config\u7d81\u5b9a\u4e8b\u4ef6",level:3},{value:"2. <code>init()</code> \u5c31\u8207 init \u7684\u4e8b\u4ef6\u7d81\u8a02\u4e86",id:"2-init-\u5c31\u8207-init-\u7684\u4e8b\u4ef6\u7d81\u8a02\u4e86",level:3},{value:"\u66f4\u65b0\u756b\u9762",id:"\u66f4\u65b0\u756b\u9762",level:2},{value:"\u9019\u6a23\u5c31\u5b8c\u6210\u6211\u5011\u4eca\u5929\u7684 <code>\u82b1\u597d\u6708\u5713\uff0c\u8349\u6ce5\u99ac\u5927\u8b8a\u8eab\u7684</code> \u529f\u80fd\u4e86",id:"\u9019\u6a23\u5c31\u5b8c\u6210\u6211\u5011\u4eca\u5929\u7684-\u82b1\u597d\u6708\u5713\u8349\u6ce5\u99ac\u5927\u8b8a\u8eab\u7684-\u529f\u80fd\u4e86",level:2},{value:"\u7a0b\u5f0f\u539f\u78bc",id:"\u7a0b\u5f0f\u539f\u78bc",level:2}],o={toc:d},c="wrapper";function h(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,a.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-\u57fa\u672c\u8a9e\u6cd5\u4e09---\u5716\u7247\u4e32\u806f"},"\ud83c\udfae \u57fa\u672c\u8a9e\u6cd5(\u4e09) - \u5716\u7247\u4e32\u806f"),(0,i.kt)("h2",{id:"\u4eca\u5929\u5c31\u4f86\u8b93\u5716\u7247\u52d5\u8d77\u4f86\u5427"},"\u4eca\u5929\u5c31\u4f86\u8b93\u5716\u7247\u52d5\u8d77\u4f86\u5427"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9996\u5148\u6211\u5011\u4eca\u5929\u6703\u65b0\u589e\u4e00\u500b\u884c\u661f\u7684\u7269\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u53c3\u8003\u524d\u5e7e\u7bc7\u4f86\u7f6e\u5165\u884c\u661f\u9019\u908a\u5c31\u4e0d\u518d\u591a\u505a\u8d05\u8ff0")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/LonelyYeezhiChicken/chicken-personal/blob/main/static/mdImgs/phaser/note/backgrounds/planet.png?raw=true",alt:"mdImg1"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'//\u8f09\u5165\u7d20\u6750\nfunction preload() {\n  // \u8f09\u5165\u7d20\u6750\n  // bg1 -> \u5716\u7247\u8f09\u5165\u5f8c\u7684\u7269\u4ef6\u540d\u7a31(key)\n  this.load.image("bg1", "../assets/backgrounds/bg_1.webp");\n  this.load.image("planet1", "../assets/backgrounds/planet.png"); // \u884c\u661f\n  this.load.image("player1", "../assets/roles/alpaca.png");\n  this.load.image("player2", "../assets/roles/pinkAlpaca.png");\n  this.load.audio("music1", "../assets/music/crrect_answer3.mp3");\n}\n\n//\u751f\u6210\u7269\u4ef6\nfunction create() {\n  // 1. \u80cc\u666f\n  let bg = this.add.sprite(0, 0, "bg1");\n\n  //\u53d6\u5f97\u5bec\u9ad8\n  let width = this.sys.game.config.width / 2;\n  let height = this.sys.game.config.height / 2;\n\n  //\u8a2d\u5b9a\u4f4d\u7f6e\n  bg.setPosition(width, height);\n\n  // 2. \u89d2\u8272\n  this.player = this.add.sprite(450, 105, "player1");\n\n  // 3. \u884c\u661f\n  this.planet1 = this.add.sprite(-100, 40, "planet1");\n\n  // 4. \u97f3\u6a02\n  this.music = this.sound.add("music1", {\n    volume: 0.2, //\u97f3\u91cf\n    loop: true, // \u662f\u5426\u8f2a\u64ad\n  });\n\n  this.music.play();\n}\n')),(0,i.kt)("h2",{id:"\u57fa\u672c-phaserjs-\u529f\u80fd---\u521d\u59cb\u5316"},"\u57fa\u672c phaser.js \u529f\u80fd - \u521d\u59cb\u5316"),(0,i.kt)("h3",{id:"\u4f7f\u7528-init"},"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"h3"},"init")),(0,i.kt)("h3",{id:"1-\u5148\u5230-config-\u7d81\u5b9a\u4e8b\u4ef6"},"1. \u5148\u5230 config \u7d81\u5b9a\u4e8b\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u5ba3\u544a\u5834\u666f\u7684\u57fa\u672c\u8cc7\u8a0a\nlet config = {\n  type: Phaser.AUTO,\n  width: 600, // \u5bec\n  height: 300, // \u9ad8\n  // \u7d81\u5b9a\u5ba3\u544a\u7684\u5834\u666f\n  scene: {\n    preload: preload,\n    create: create,\n    init: init,\n  },\n};\n")),(0,i.kt)("h3",{id:"2-init-\u5c31\u8207-init-\u7684\u4e8b\u4ef6\u7d81\u5b9a\u4e86"},"2. ",(0,i.kt)("inlineCode",{parentName:"h3"},"init()")," \u5c31\u8207 init \u7684\u4e8b\u4ef6\u7d81\u5b9a\u4e86"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"function init() {\n  // \u8f09\u5165\u7d20\u6750\n}\n")),(0,i.kt)("h2",{id:"\u521d\u59cb\u5316\u7269\u4ef6"},"\u521d\u59cb\u5316\u7269\u4ef6"),(0,i.kt)("h3",{id:"1-\u52a0\u5165\u884c\u661f\u7684\u79fb\u52d5\u901f\u5ea6---\u6211\u5011\u7b49\u7b49\u8981\u8b93\u884c\u661f\u79fb\u52d5\u8d77\u4f86"},"1. \u52a0\u5165\u884c\u661f\u7684\u79fb\u52d5\u901f\u5ea6 - \u6211\u5011\u7b49\u7b49\u8981\u8b93\u884c\u661f\u79fb\u52d5\u8d77\u4f86"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u521d\u59cb\u5316\nfunction init() {\n  // \u8a2d\u5b9a \u884c\u661f \u7684\u901f\u5ea6\n  this.planet1Speed = 3;\n}\n")),(0,i.kt)("h3",{id:"2-\u8349\u6ce5\u99ac\u9663\u5217---\u9019\u662f\u70ba\u4e86\u8b93\u8349\u6ce5\u99ac\u8b8a\u8eab\u6e96\u5099\u7684"},"2. \u8349\u6ce5\u99ac\u9663\u5217 - \u9019\u662f\u70ba\u4e86\u8b93\u8349\u6ce5\u99ac\u8b8a\u8eab\u6e96\u5099\u7684"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// \u521d\u59cb\u5316\nfunction init() {\n  // \u8a2d\u5b9a \u884c\u661f \u7684\u901f\u5ea6\n  this.planet1Speed = 3;\n  //\u8349\u6ce5\u99ac\u9663\u5217\n  this.allPlayer = ["player1", "player2"];\n}\n')),(0,i.kt)("h3",{id:"3-\u8a08\u7b97\u6642\u9593\u8ef8---\u7528\u4f86\u571f\u70ae\u6642\u9593\u8ef8\u8b8a\u5316\u4f7f\u7528\u7684\u7a0d\u5f8c\u7684\u6587\u7ae0\u6703\u8aaa\u660e\u7528\u9014"},"3. \u8a08\u7b97\u6642\u9593\u8ef8 - \u7528\u4f86\u571f\u70ae\u6642\u9593\u8ef8\u8b8a\u5316\u4f7f\u7528\u7684\uff0c\u7a0d\u5f8c\u7684\u6587\u7ae0\u6703\u8aaa\u660e\u7528\u9014"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// \u521d\u59cb\u5316\nfunction init() {\n  // \u8a2d\u5b9a \u884c\u661f \u7684\u901f\u5ea6\n  this.planet1Speed = 3;\n  //\u8349\u6ce5\u99ac\u9663\u5217\n  this.allPlayer = ["player1", "player2"];\n  //\u8a08\u7b97\u6642\u9593\u8ef8\n  this.index = 0;\n}\n')),(0,i.kt)("h2",{id:"\u57fa\u672c-phaserjs-\u529f\u80fd---\u756b\u9762\u66f4\u65b0"},"\u57fa\u672c phaser.js \u529f\u80fd - \u756b\u9762\u66f4\u65b0"),(0,i.kt)("h2",{id:"\u4f7f\u7528-update"},"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"h2"},"update")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5b83\u5c6c\u65bc\u4e00\u500b\u5075\u807d\u5668"),(0,i.kt)("li",{parentName:"ul"},"\u9810\u8a2d\u6bcf\u4e00\u5e40\u662f\u4ee5\u6beb\u79d2\u70ba\u55ae\u4f4d\u5728\u505a\u66f4\u65b0")),(0,i.kt)("h3",{id:"1-\u5148\u5230-config\u7d81\u5b9a\u4e8b\u4ef6"},"1. \u5148\u5230 config\u7d81\u5b9a\u4e8b\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u5ba3\u544a\u5834\u666f\u7684\u57fa\u672c\u8cc7\u8a0a\nlet config = {\n  type: Phaser.AUTO,\n  width: 600, // \u5bec\n  height: 300, // \u9ad8\n  // \u7d81\u5b9a\u5ba3\u544a\u7684\u5834\u666f\n  scene: {\n    preload: preload,\n    create: create,\n    init: init,\n    update: update,\n  },\n};\n")),(0,i.kt)("h3",{id:"2-init-\u5c31\u8207-init-\u7684\u4e8b\u4ef6\u7d81\u8a02\u4e86"},"2. ",(0,i.kt)("inlineCode",{parentName:"h3"},"init()")," \u5c31\u8207 init \u7684\u4e8b\u4ef6\u7d81\u8a02\u4e86"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"function update() {\n  // \u76e3\u807d\u4e8b\u4ef6\n}\n")),(0,i.kt)("h2",{id:"\u66f4\u65b0\u756b\u9762"},"\u66f4\u65b0\u756b\u9762"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6211\u5011\u9019\u908a\u5148\u571f\u70ae\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"this.index")," \u4f86\u7576\u6642\u9593\u57fa\u6e96\u9ede"),(0,i.kt)("li",{parentName:"ul"},"\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"this.index")," \u4f86\u5230 ",(0,i.kt)("inlineCode",{parentName:"li"},"50")," \u4e4b\u524d\uff0c\u8b93\u884c\u661f\u5f80\u53f3\u79fb\u52d5"),(0,i.kt)("li",{parentName:"ul"},"\u56e0\u6b64\u5728\u9700\u8981\u5c0d\u884c\u661f\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"x")," \u8ef8\u505a\u589e\u91cf")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"//\u66f4\u65b0\u756b\u9762\nfunction update() {\n  // \u884c\u661f\u51fa\u73fe\n  if (this.index < 50) this.planet1.x += this.planet1Speed;\n\n  this.index++;\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u63a5\u4e0b\u4f86\u884c\u661f\u5230\u5b9a\u4f4d\u5f8c"),(0,i.kt)("li",{parentName:"ul"},"\u8349\u6ce5\u99ac\u8981\u8b8a\u8eab"),(0,i.kt)("li",{parentName:"ul"},"\u8349\u6ce5\u99ac\u8b8a\u8eab\u5230 ",(0,i.kt)("inlineCode",{parentName:"li"},"this.index < 200")," \u6642\u5c31\u5b8c\u5168\u8b8a\u8eab"),(0,i.kt)("li",{parentName:"ul"},"\u9019\u908a\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"setTexture")," \u4f86\u5207\u63db\u5716\u7247"),(0,i.kt)("li",{parentName:"ul"},"\u7531\u65bc\u8349\u6ce5\u99ac\u5716\u7247\u6709\u5169\u5f35\uff0c\u6211\u5011\u5c31\u5229\u7528\u53d6\u9918\u904b\u7b97\u5b50 ",(0,i.kt)("inlineCode",{parentName:"li"},"%")),(0,i.kt)("li",{parentName:"ul"},"\u91dd\u5c0d\u9663\u5217 ",(0,i.kt)("inlineCode",{parentName:"li"},"this.allPlayer")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"0,1")," \u5207\u63db")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"//\u66f4\u65b0\u756b\u9762\nfunction update() {\n  // \u884c\u661f\u51fa\u73fe\n  if (this.index < 50) this.planet1.x += this.planet1Speed;\n  //\u8349\u6ce5\u99ac\u8b8a\u8eab\n  if (this.index % 5 === 0 && this.index > 80 && this.index < 200)\n    this.player.setTexture(this.allPlayer[this.index % 2]);\n\n  this.index++;\n}\n")),(0,i.kt)("h2",{id:"\u9019\u6a23\u5c31\u5b8c\u6210\u6211\u5011\u4eca\u5929\u7684-\u82b1\u597d\u6708\u5713\u8349\u6ce5\u99ac\u5927\u8b8a\u8eab\u7684-\u529f\u80fd\u4e86"},"\u9019\u6a23\u5c31\u5b8c\u6210\u6211\u5011\u4eca\u5929\u7684 ",(0,i.kt)("inlineCode",{parentName:"h2"},"\u82b1\u597d\u6708\u5713\uff0c\u8349\u6ce5\u99ac\u5927\u8b8a\u8eab\u7684")," \u529f\u80fd\u4e86"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u7a0b\u5f0f\u539f\u78bc"},"\u7a0b\u5f0f\u539f\u78bc"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Game-day5</title>\n</head>\n\n<body>\n    <div id=\"app\"></div>\n\n    <script src=\"../lib/phaser.min.js\"><\/script>\n    <script>\n        // \u5ba3\u544a\u4e00\u500b\u5834\u666f\n        let scene = new Phaser.Scene('Game');\n        // \u5ba3\u544a\u5834\u666f\u7684\u57fa\u672c\u8cc7\u8a0a\n        let config = {\n            type: Phaser.AUTO,\n            width: 600, // \u5bec\n            height: 300, // \u9ad8\n            // \u7d81\u5b9a\u5ba3\u544a\u7684\u5834\u666f\n            scene: {\n                preload: preload,\n                create: create,\n                init: init,\n                update: update\n            }\n        }\n\n        //\u555f\u52d5\u904a\u6232\n        let game = new Phaser.Game(config)\n\n        //\u8f09\u5165\u7d20\u6750\n        function preload() {\n            // \u8f09\u5165\u7d20\u6750\n            // bg1 -> \u5716\u7247\u8f09\u5165\u5f8c\u7684\u7269\u4ef6\u540d\u7a31(key)\n            this.load.image('bg1', '../assets/backgrounds/bg_1.webp');\n            this.load.image('planet1', '../assets/backgrounds/planet.png');\n            this.load.image('player1', '../assets/roles/alpaca.png');\n            this.load.image('player2', '../assets/roles/pinkAlpaca.png');\n            this.load.audio('music1', '../assets/music/crrect_answer3.mp3');\n        }\n\n        //\u751f\u6210\u7269\u4ef6\n        function create() {\n            // 1. \u80cc\u666f\n            let bg = this.add.sprite(0, 0, \"bg1\");\n\n            //\u53d6\u5f97\u5bec\u9ad8\n            let width = this.sys.game.config.width / 2;\n            let height = this.sys.game.config.height / 2;\n\n            //\u8a2d\u5b9a\u4f4d\u7f6e\n            bg.setPosition(width, height);\n\n            // 2. \u89d2\u8272\n            this.player = this.add.sprite(450, 105, \"player1\");\n\n            // 3. \u884c\u661f\n            this.planet1 = this.add.sprite(-100, 40, \"planet1\");\n\n            // 4. \u97f3\u6a02\n            this.music = this.sound.add('music1', {\n                volume: 0.2, //\u97f3\u91cf\n                loop: true // \u662f\u5426\u8f2a\u64ad\n            });\n\n            this.music.play();\n        }\n\n        // \u521d\u59cb\u5316\n        function init() {\n            // \u8a2d\u5b9a \u884c\u661f \u7684\u901f\u5ea6\n            this.planet1Speed = 3;\n            //\u8349\u6ce5\u99ac\u9663\u5217\n            this.allPlayer = ['player1', 'player2'];\n            //\u8a08\u7b97\u6642\u9593\u8ef8\n            this.index = 0;\n        }\n\n        //\u66f4\u65b0\u756b\u9762\n        function update() {\n            // \u884c\u661f\u51fa\u73fe\n            if (this.index < 50)\n                this.planet1.x += this.planet1Speed;\n\n            //\u8349\u6ce5\u99ac\u8b8a\u8eab\n            if (this.index % 5 === 0 && this.index > 80 && this.index < 200)\n                this.player.setTexture(this.allPlayer[this.index % 2]);\n\n            this.index++;\n        }\n    <\/script>\n\n</body>\n\n</html>\n")))}h.isMDXComponent=!0}}]);