"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[7219],{49613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var a=t(59496);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},h="mdxType",o={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=c(t),m=s,g=h["".concat(p,".").concat(m)]||h[m]||o[m]||i;return t?a.createElement(g,r(r({ref:n},d),{},{components:t})):a.createElement(g,r({ref:n},d))}));function g(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,r=new Array(i);r[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[h]="string"==typeof e?e:s,r[1]=l;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},73098:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=t(88028),s=(t(59496),t(49613));const i={sidebar_position:30,description:"phaser js \u904a\u6232\u5f15\u64ce",key:["phaser3","phaserJS","\u904a\u6232\u5f15\u64ce","game"],tags:["phaser3","phaserJS","\u904a\u6232\u5f15\u64ce","game"]},r="\ud83c\udfae \u57fa\u672c\u8a9e\u6cd5(\u4e94) - \u5834\u666f\u5207\u63db",l={unversionedId:"phaserJs/day7",id:"phaserJs/day7",title:"\ud83c\udfae \u57fa\u672c\u8a9e\u6cd5(\u4e94) - \u5834\u666f\u5207\u63db",description:"phaser js \u904a\u6232\u5f15\u64ce",source:"@site/docs/phaserJs/day7.md",sourceDirName:"phaserJs",slug:"/phaserJs/day7",permalink:"/en/docs/phaserJs/day7",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/phaserJs/day7.md",tags:[{label:"phaser3",permalink:"/en/docs/tags/phaser-3"},{label:"phaserJS",permalink:"/en/docs/tags/phaser-js"},{label:"\u904a\u6232\u5f15\u64ce",permalink:"/en/docs/tags/\u904a\u6232\u5f15\u64ce"},{label:"game",permalink:"/en/docs/tags/game"}],version:"current",lastUpdatedAt:1699970344,formattedLastUpdatedAt:"Nov 14, 2023",sidebarPosition:30,frontMatter:{sidebar_position:30,description:"phaser js \u904a\u6232\u5f15\u64ce",key:["phaser3","phaserJS","\u904a\u6232\u5f15\u64ce","game"],tags:["phaser3","phaserJS","\u904a\u6232\u5f15\u64ce","game"]},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udfae \u57fa\u672c\u8a9e\u6cd5(\u56db) - \u64cd\u4f5c",permalink:"/en/docs/phaserJs/day6"},next:{title:"\ud83c\udfae \u57fa\u672c\u8a9e\u6cd5(\u516d) - \u7fa4\u7d44\u5316\u7269\u4ef6",permalink:"/en/docs/phaserJs/day8"}},p={},c=[{value:"\u6211\u5011\u4eca\u5929\u4f86\u5c07\u5834\u666f\u6a21\u7d44\u5316\uff0c\u8b93\u4ed6\u96a8\u6642\u53ef\u4ee5\u5207\u63db",id:"\u6211\u5011\u4eca\u5929\u4f86\u5c07\u5834\u666f\u6a21\u7d44\u5316\u8b93\u4ed6\u96a8\u6642\u53ef\u4ee5\u5207\u63db",level:2},{value:"\u4f7f\u7528 <code>class</code> \u5305\u88dd\u5834\u666f",id:"\u4f7f\u7528-class-\u5305\u88dd\u5834\u666f",level:2},{value:"\u8a3b\u518a\u5834\u666f",id:"\u8a3b\u518a\u5834\u666f",level:2},{value:"1. \u5229\u7528 <code>constructor</code> \u7684 <code>super()</code> \u8a3b\u518a\u5834\u666f Key",id:"1-\u5229\u7528-constructor-\u7684-super-\u8a3b\u518a\u5834\u666f-key",level:3},{value:"\u8f09\u5165\u7d20\u6750",id:"\u8f09\u5165\u7d20\u6750",level:2},{value:"\u751f\u6210\u7269\u4ef6",id:"\u751f\u6210\u7269\u4ef6",level:2},{value:"\u9ede\u64ca\u4e8b\u4ef6",id:"\u9ede\u64ca\u4e8b\u4ef6",level:2},{value:"\u52a0\u5165\u7b2c\u4e8c\u5834\u666f",id:"\u52a0\u5165\u7b2c\u4e8c\u5834\u666f",level:2},{value:"\u5c07\u5834\u666f\u52a0\u5165\u904a\u6232\u4e2d",id:"\u5c07\u5834\u666f\u52a0\u5165\u904a\u6232\u4e2d",level:2},{value:"\u5ba3\u544a\u5834\u666f",id:"\u5ba3\u544a\u5834\u666f",level:3},{value:"\u52a0\u5165\u904a\u6232\u57fa\u672c\u8a2d\u5b9a\u8207\u5834\u666f",id:"\u52a0\u5165\u904a\u6232\u57fa\u672c\u8a2d\u5b9a\u8207\u5834\u666f",level:2},{value:"\u5834\u666f\u5207\u63db",id:"\u5834\u666f\u5207\u63db",level:2},{value:"\u4eca\u5929\u6211\u5011\u5b78\u5230\u4e86\u5982\u4f55\u5229\u7528 JS \u7684 class \u4f86\u6a21\u7d44\u5316\u5834\u666f\uff0c\u4e26\u4e14\u5982\u4f55\u53bb\u5207\u63db\u5b83\uff0c\u660e\u5929\u6211\u5011\u4f86\u7df4\u7fd2\u7269\u4ef6\u7684\u8907\u88fd\u5427",id:"\u4eca\u5929\u6211\u5011\u5b78\u5230\u4e86\u5982\u4f55\u5229\u7528-js-\u7684-class-\u4f86\u6a21\u7d44\u5316\u5834\u666f\u4e26\u4e14\u5982\u4f55\u53bb\u5207\u63db\u5b83\u660e\u5929\u6211\u5011\u4f86\u7df4\u7fd2\u7269\u4ef6\u7684\u8907\u88fd\u5427",level:2},{value:"\u7a0b\u5f0f\u539f\u78bc",id:"\u7a0b\u5f0f\u539f\u78bc",level:2},{value:"AlpacaScene \u5834\u666f",id:"alpacascene-\u5834\u666f",level:3},{value:"GameStart \u5834\u666f",id:"gamestart-\u5834\u666f",level:3},{value:"\u4e3b\u7a0b\u5f0f \u5834\u666f",id:"\u4e3b\u7a0b\u5f0f-\u5834\u666f",level:3}],d={toc:c},h="wrapper";function o(e){let{components:n,...t}=e;return(0,s.kt)(h,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"-\u57fa\u672c\u8a9e\u6cd5\u4e94---\u5834\u666f\u5207\u63db"},"\ud83c\udfae \u57fa\u672c\u8a9e\u6cd5(\u4e94) - \u5834\u666f\u5207\u63db"),(0,s.kt)("h2",{id:"\u6211\u5011\u4eca\u5929\u4f86\u5c07\u5834\u666f\u6a21\u7d44\u5316\u8b93\u4ed6\u96a8\u6642\u53ef\u4ee5\u5207\u63db"},"\u6211\u5011\u4eca\u5929\u4f86\u5c07\u5834\u666f\u6a21\u7d44\u5316\uff0c\u8b93\u4ed6\u96a8\u6642\u53ef\u4ee5\u5207\u63db"),(0,s.kt)("h2",{id:"\u4f7f\u7528-class-\u5305\u88dd\u5834\u666f"},"\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"h2"},"class")," \u5305\u88dd\u5834\u666f"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u9996\u5148\u6211\u5011\u5728\u8207 ",(0,s.kt)("inlineCode",{parentName:"li"},"index.html")," \u540c\u5c64\u5efa\u7acb ",(0,s.kt)("inlineCode",{parentName:"li"},"scenes")," \u8cc7\u6599\u593e"),(0,s.kt)("li",{parentName:"ol"},"\u5728\u8cc7\u6599\u593e\u4e2d\u5efa\u7acb\u8d77\u59cb\u5834\u666f\u7684\u6a94\u6848 ",(0,s.kt)("inlineCode",{parentName:"li"},"gameStart.js")),(0,s.kt)("li",{parentName:"ol"},"\u4e26\u4e14\u7e7c\u627f ",(0,s.kt)("inlineCode",{parentName:"li"},"Phaser.Scene"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"class GameStart extends Phaser.Scene {\n  // do something\n}\n")),(0,s.kt)("h2",{id:"\u8a3b\u518a\u5834\u666f"},"\u8a3b\u518a\u5834\u666f"),(0,s.kt)("h3",{id:"1-\u5229\u7528-constructor-\u7684-super-\u8a3b\u518a\u5834\u666f-key"},"1. \u5229\u7528 ",(0,s.kt)("inlineCode",{parentName:"h3"},"constructor")," \u7684 ",(0,s.kt)("inlineCode",{parentName:"h3"},"super()")," \u8a3b\u518a\u5834\u666f Key"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'class GameStart extends Phaser.Scene {\n  constructor() {\n    super({ key: "gameStart" });\n  }\n  // do something\n}\n')),(0,s.kt)("h2",{id:"\u8f09\u5165\u7d20\u6750"},"\u8f09\u5165\u7d20\u6750"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u7531\u65bc\u7e7c\u627f\u4e86 ",(0,s.kt)("inlineCode",{parentName:"li"},"Phaser.Scene")),(0,s.kt)("li",{parentName:"ul"},"\u56e0\u6b64\u6211\u5011\u76f4\u63a5\u53ef\u4ee5\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"li"},"preload()")),(0,s.kt)("li",{parentName:"ul"},"\u5c31\u53ef\u4ee5\u8f09\u5165\u7d20\u6750\u4e86")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'class GameStart extends Phaser.Scene {\n  constructor() {\n    super({ key: "gameStart" });\n  }\n  /**\n   * \u8f09\u5165\u7d20\u6750\n   */\n  preload() {\n    this.load.image("bg", "../assets/backgrounds/bg_1.webp");\n    this.load.image("start1", "../assets/others/start/start1.png");\n    this.load.image("gameName", "../assets/others/gameName/alpacaSceneName.png");\n  }\n}\n')),(0,s.kt)("h2",{id:"\u751f\u6210\u7269\u4ef6"},"\u751f\u6210\u7269\u4ef6"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u8ddf ",(0,s.kt)("inlineCode",{parentName:"li"},"preload()")," \u539f\u7406\u76f8\u540c"),(0,s.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"li"},"create()")," \u5373\u53ef"),(0,s.kt)("li",{parentName:"ul"},"\u6211\u5011\u5728\u9019\u908a\u5148\u8f09\u5165\u80cc\u666f\u8ddf\u904a\u6232\u6a19\u984c")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'class GameStart extends Phaser.Scene {\n  constructor() {\n    super({ key: "gameStart" });\n  }\n  /**\n   * \u8f09\u5165\u7d20\u6750\n   */\n  preload() {\n    this.load.image("bg", "../assets/backgrounds/bg_1.webp");\n    this.load.image("start1", "../assets/others/start/start1.png");\n    this.load.image("gameName", "../assets/others/gameName/alpacaSceneName.png");\n  }\n\n  /**\n   * \u751f\u6210\u7269\u4ef6\n   */\n  create() {\n    // 1. \u80cc\u666f\n    let bg = this.add.sprite(0, 0, "bg");\n\n    //\u53d6\u5f97\u5bec\u9ad8\n    let width = this.sys.game.config.width / 2;\n    let height = this.sys.game.config.height / 2;\n\n    //\u8a2d\u5b9a\u4f4d\u7f6e\n    bg.setPosition(width, height);\n\n    // 2. \u904a\u6232\u6a19\u984c\n    let gameName = this.add.sprite(width, height - 50, "gameName", 0);\n  }\n}\n')),(0,s.kt)("h2",{id:"\u9ede\u64ca\u4e8b\u4ef6"},"\u9ede\u64ca\u4e8b\u4ef6"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u63a5\u4e0b\u4f86\u6211\u5011\u8981\u505a\u904a\u6232\u958b\u59cb\u6309\u9215"),(0,s.kt)("li",{parentName:"ul"},"\u56e0\u6b64\u9700\u8981\u5c0d\u6309\u9215\u7269\u4ef6\u4e0b ",(0,s.kt)("inlineCode",{parentName:"li"},"setInteractive()")," \u8868\u793a\u4ed6\u53ef\u4ee5\u8ddf\u73a9\u5bb6\u4e92\u52d5"),(0,s.kt)("li",{parentName:"ul"},"\u4e26\u4e14\u52a0\u4e0a\u4e00\u500b ",(0,s.kt)("inlineCode",{parentName:"li"},"pointerdown")," \u7684\u4e8b\u4ef6"),(0,s.kt)("li",{parentName:"ul"},"\u53ea\u6709\u624b\u6a5f\u6216\u6ed1\u9f20\u9ede\u64ca\u4ed6\u90fd\u6703\u88ab\u89f8\u767c")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'class GameStart extends Phaser.Scene {\n  constructor() {\n    super({ key: "gameStart" });\n  }\n  /**\n   * \u8f09\u5165\u7d20\u6750\n   */\n  preload() {\n    this.load.image("bg", "../assets/backgrounds/bg_1.webp");\n    this.load.image("start1", "../assets/others/start/start1.png");\n    this.load.image("gameName", "../assets/others/gameName/alpacaSceneName.png");\n  }\n\n  /**\n   * \u751f\u6210\u7269\u4ef6\n   */\n  create() {\n    // 1. \u80cc\u666f\n    let bg = this.add.sprite(0, 0, "bg");\n\n    //\u53d6\u5f97\u5bec\u9ad8\n    let width = this.sys.game.config.width / 2;\n    let height = this.sys.game.config.height / 2;\n\n    //\u8a2d\u5b9a\u4f4d\u7f6e\n    bg.setPosition(width, height);\n\n    // 2. \u904a\u6232\u6a19\u984c\n    let gameName = this.add.sprite(width, height - 50, "gameName", 0);\n\n    // 3. \u958b\u59cb\u6309\u9215\n    this.start1 = this.add.sprite(width, height + 50, "start1", 0).setInteractive();\n\n    this.start1.on("pointerdown", () => {\n      console.log("\u6211\u88ab\u9ede\u4e86!");\n    });\n  }\n}\n')),(0,s.kt)("h2",{id:"\u52a0\u5165\u7b2c\u4e8c\u5834\u666f"},"\u52a0\u5165\u7b2c\u4e8c\u5834\u666f"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u5834\u666f\u662f\u5c07 day6 \u7684 js \u5206\u96e2\u51fa\u4f86\uff0c\u56e0\u6b64\u9019\u908a\u4e0d\u5728\u505a\u8a73\u7d30\u7684\u63cf\u8ff0"),(0,s.kt)("li",{parentName:"ul"},"\u5148\u5728 ",(0,s.kt)("inlineCode",{parentName:"li"},"scenes")," \u8cc7\u6599\u593e\u4e2d\u5efa\u52a0\u5165\u5834\u666f\u7684\u6a94\u6848 ",(0,s.kt)("inlineCode",{parentName:"li"},"alpacaScene.js")),(0,s.kt)("li",{parentName:"ul"},"\u4e26\u653e\u5165\u4ee5\u4e0b\u7a0b\u5f0f\u78bc")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'class AlpacaScene extends Phaser.Scene {\n  constructor() {\n    super({ key: "alpacaScene" });\n  }\n\n  /**\n   * \u8f09\u5165\u7d20\u6750\n   */\n  preload() {\n    // \u8f09\u5165\u7d20\u6750\n    // bg1 -> \u5716\u7247\u8f09\u5165\u5f8c\u7684\u7269\u4ef6\u540d\u7a31(key)\n    this.load.image("bg1", "../assets/backgrounds/bg_1.webp");\n    this.load.image("planet1", "../assets/backgrounds/planet.png");\n    this.load.image("player1", "../assets/roles/alpaca.png");\n    this.load.image("player2", "../assets/roles/pinkAlpaca.png");\n    this.load.audio("music1", "../assets/music/crrect_answer3.mp3");\n\n    //\u8f09\u5165\u6280\u80fd,\u4f7f\u7528\u8ff4\u5708\u8f09\u5165\n    for (let i = 1; i < 9; i++) {\n      this.load.image("file" + i, `../assets/skills/fire/file-${i}.png`);\n    }\n  }\n\n  /**\n   * \u751f\u6210\u7269\u4ef6\n   */\n  create() {\n    // 1. \u80cc\u666f\n    let bg = this.add.sprite(0, 0, "bg1");\n\n    //\u53d6\u5f97\u5bec\u9ad8\n    let width = this.sys.game.config.width / 2;\n    let height = this.sys.game.config.height / 2;\n\n    //\u8a2d\u5b9a\u4f4d\u7f6e\n    bg.setPosition(width, height);\n\n    // 2. \u89d2\u8272\n    this.player = this.add.sprite(450, 105, "player1");\n\n    // 3. \u884c\u661f\n    this.planet1 = this.add.sprite(-100, 40, "planet1");\n\n    // 4. \u97f3\u6a02\n    this.music = this.sound.add("music1", {\n      volume: 0.2, //\u97f3\u91cf\n      loop: true, // \u662f\u5426\u8f2a\u64ad\n    });\n\n    this.music.play();\n\n    // 5. \u6280\u80fd\n    this.file = this.add.sprite(360, 65, "file1");\n    this.file.alpha = 0; //\u900f\u660e\u5ea6\u8a2d\u70ba0\n  }\n\n  /**\n   * \u521d\u59cb\u5316\n   */\n  init() {\n    // \u8a2d\u5b9a \u884c\u661f \u7684\u901f\u5ea6\n    this.planet1Speed = 3;\n    //\u8349\u6ce5\u99ac\u9663\u5217\n    this.allPlayer = ["player1", "player2"];\n    //\u8a08\u7b97\u6642\u9593\u8ef8\n    this.index = 0;\n    //\u5674\u706b\n    this.fileArr = ["file1", "file2", "file3", "file4", "file5", "file6", "file7", "file8"];\n  }\n\n  /**\n   * \u66f4\u65b0\u756b\u9762\n   */\n  update() {\n    // \u884c\u661f\u51fa\u73fe\n    if (this.index < 50) this.planet1.x += this.planet1Speed;\n\n    //\u8349\u6ce5\u99ac\u8b8a\u8eab\n    if (this.index % 5 === 0 && this.index > 80 && this.index < 200)\n      this.player.setTexture(this.allPlayer[this.index % 2]);\n\n    //\u8349\u5c3c\u99ac\u5674\u706b\n    if (this.index > 200) {\n      if (this.input.activePointer.isDown) {\n        this.file.alpha = 100; //\u900f\u660e\u5ea6\u8a2d\u70ba100\n        this.file.setTexture(this.fileArr[this.index % 8]);\n      } else {\n        this.file.alpha = 0; //\u900f\u660e\u5ea6\u8a2d\u70ba0\n      }\n    }\n\n    this.index++;\n  }\n}\n')),(0,s.kt)("h2",{id:"\u5c07\u5834\u666f\u52a0\u5165\u904a\u6232\u4e2d"},"\u5c07\u5834\u666f\u52a0\u5165\u904a\u6232\u4e2d"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u6211\u5011\u5c07\u7126\u9ede\u79fb\u56de ",(0,s.kt)("inlineCode",{parentName:"li"},"index.html")," \u4e2d"),(0,s.kt)("li",{parentName:"ul"},"\u9996\u5148\u8981\u5148\u5f15\u7528\u525b\u525b\u5efa\u7acb\u7684\u5169\u500b\u5834\u666f")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},'<body>\n  <div id="app"></div>\n\n  <script src="../lib/phaser.min.js"><\/script>\n  <script src="./scenes/gameStart.js"><\/script>\n  <script src="./scenes/alpacaScene.js"><\/script>\n</body>\n')),(0,s.kt)("h3",{id:"\u5ba3\u544a\u5834\u666f"},"\u5ba3\u544a\u5834\u666f"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u56e0\u70ba\u525b\u525b\u5df2\u7d93\u5c07\u5834\u666f\u5305\u88dd\u6210 ",(0,s.kt)("inlineCode",{parentName:"li"},"class")),(0,s.kt)("li",{parentName:"ul"},"\u56e0\u6b64\u6211\u5011\u9019\u908a\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"li"},"new")," \u95dc\u9375\u5b57\u4f86\u5be6\u4f8b\u5316\u5b83")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},'<body>\n  <div id="app"></div>\n  <script src="../lib/phaser.min.js"><\/script>\n  <script src="./scenes/gameStart.js"><\/script>\n  <script src="./scenes/alpacaScene.js"><\/script>\n  <script>\n    // \u5ba3\u544a\u4e00\u500b\u5834\u666f\n    let scene = new AlpacaScene();\n    let sceneStart = new GameStart();\n  <\/script>\n</body>\n')),(0,s.kt)("h2",{id:"\u52a0\u5165\u904a\u6232\u57fa\u672c\u8a2d\u5b9a\u8207\u5834\u666f"},"\u52a0\u5165\u904a\u6232\u57fa\u672c\u8a2d\u5b9a\u8207\u5834\u666f"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5148\u65b0\u589e\u4e00\u500b\u904a\u6232"),(0,s.kt)("li",{parentName:"ul"},"\u63a5\u4e0b\u4f86\u5728\u65b0\u589e\u5834\u666f"),(0,s.kt)("li",{parentName:"ul"},"\u6700\u5f8c\u555f\u52d5\u5834\u666f")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},'<body>\n  <div id="app"></div>\n\n  <script src="../lib/phaser.min.js"><\/script>\n  <script src="./scenes/gameStart.js"><\/script>\n  <script src="./scenes/alpacaScene.js"><\/script>\n  <script>\n    // \u5ba3\u544a\u4e00\u500b\u5834\u666f\n    let scene = new AlpacaScene();\n    let sceneStart = new GameStart();\n    // \u5ba3\u544a\u904a\u6232\u7684\u57fa\u672c\u8cc7\u8a0a\n    let config = {\n      type: Phaser.AUTO,\n      width: 600, // \u5bec\n      height: 300, // \u9ad8\n    };\n\n    //\u555f\u52d5\u904a\u6232\n    let game = new Phaser.Game(config);\n\n    //\u52a0\u8f09\u5834\u666f\n    game.scene.add("gameStart", sceneStart);\n    game.scene.add("alpacaScene", scene);\n    //\u555f\u52d5\u5834\u666f\n    game.scene.start("gameStart");\n  <\/script>\n</body>\n')),(0,s.kt)("h2",{id:"\u5834\u666f\u5207\u63db"},"\u5834\u666f\u5207\u63db"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u9019\u6642\u6211\u5011\u56de\u5230 ",(0,s.kt)("inlineCode",{parentName:"li"},"gameStart.js")),(0,s.kt)("li",{parentName:"ul"},"\u52a0\u5165\u4e00\u500b\u5834\u666f\u8df3\u8f49( ",(0,s.kt)("inlineCode",{parentName:"li"},"startGame()")," ) \u7684 function"),(0,s.kt)("li",{parentName:"ul"},"\u4e26\u4e14\u79fb\u9664\u6389\u76ee\u524d\u986f\u793a\u7684\u5834\u666f"),(0,s.kt)("li",{parentName:"ul"},"\u5982\u679c\u6c92\u6709\u79fb\u9664\u5834\u666f\u6703\u91cd\u758a"),(0,s.kt)("li",{parentName:"ul"},"\u6700\u5f8c\u5728 ",(0,s.kt)("inlineCode",{parentName:"li"},"pointerdown")," \u4e8b\u4ef6\u4e2d\u89f8\u767c\u5b83"),(0,s.kt)("li",{parentName:"ul"},"\u56e0\u70ba\u5728 class \u547c\u53eb\u81ea\u5df1\u7684 function \u56e0\u6b64\u9019\u908a\u9700\u8981\u7528 ",(0,s.kt)("inlineCode",{parentName:"li"},"this"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'/**\n * \u8d77\u59cb\u5834\u666f\n */\nclass GameStart extends Phaser.Scene {\n  constructor() {\n    super({ key: "gameStart" });\n  }\n  /**\n   * \u8f09\u5165\u7d20\u6750\n   */\n  preload() {\n    this.load.image("bg", "../assets/backgrounds/bg_1.webp");\n    this.load.image("start1", "../assets/others/start/start1.png");\n    this.load.image("gameName", "../assets/others/gameName/alpacaSceneName.png");\n  }\n\n  /**\n   * \u751f\u6210\u7269\u4ef6\n   */\n  create() {\n    // 1. \u80cc\u666f\n    let bg = this.add.sprite(0, 0, "bg");\n\n    //\u53d6\u5f97\u5bec\u9ad8\n    let width = this.sys.game.config.width / 2;\n    let height = this.sys.game.config.height / 2;\n\n    //\u8a2d\u5b9a\u4f4d\u7f6e\n    bg.setPosition(width, height);\n\n    // 2. \u904a\u6232\u6a19\u984c\n    let gameName = this.add.sprite(width, height - 50, "gameName", 0);\n\n    // 3. \u958b\u59cb\u6309\u9215\n    this.start1 = this.add.sprite(width, height + 50, "start1", 0).setInteractive();\n\n    this.start1.on("pointerdown", () => {\n      this.startGame();\n    });\n  }\n\n  /**\n   * \u5834\u666f\u8df3\u8f49\n   */\n  startGame() {\n    game.scene.start("alpacaScene");\n    game.scene.remove("gameStart");\n  }\n}\n')),(0,s.kt)("h2",{id:"\u4eca\u5929\u6211\u5011\u5b78\u5230\u4e86\u5982\u4f55\u5229\u7528-js-\u7684-class-\u4f86\u6a21\u7d44\u5316\u5834\u666f\u4e26\u4e14\u5982\u4f55\u53bb\u5207\u63db\u5b83\u660e\u5929\u6211\u5011\u4f86\u7df4\u7fd2\u7269\u4ef6\u7684\u8907\u88fd\u5427"},"\u4eca\u5929\u6211\u5011\u5b78\u5230\u4e86\u5982\u4f55\u5229\u7528 JS \u7684 class \u4f86\u6a21\u7d44\u5316\u5834\u666f\uff0c\u4e26\u4e14\u5982\u4f55\u53bb\u5207\u63db\u5b83\uff0c\u660e\u5929\u6211\u5011\u4f86\u7df4\u7fd2\u7269\u4ef6\u7684\u8907\u88fd\u5427"),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"\u7a0b\u5f0f\u539f\u78bc"},"\u7a0b\u5f0f\u539f\u78bc"),(0,s.kt)("h3",{id:"alpacascene-\u5834\u666f"},"AlpacaScene \u5834\u666f"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'class AlpacaScene extends Phaser.Scene {\n  constructor() {\n    super({ key: "alpacaScene" });\n  }\n\n  /**\n   * \u8f09\u5165\u7d20\u6750\n   */\n  preload() {\n    // \u8f09\u5165\u7d20\u6750\n    // bg1 -> \u5716\u7247\u8f09\u5165\u5f8c\u7684\u7269\u4ef6\u540d\u7a31(key)\n    this.load.image("bg1", "../assets/backgrounds/bg_1.webp");\n    this.load.image("planet1", "../assets/backgrounds/planet.png");\n    this.load.image("player1", "../assets/roles/alpaca.png");\n    this.load.image("player2", "../assets/roles/pinkAlpaca.png");\n    this.load.audio("music1", "../assets/music/crrect_answer3.mp3");\n\n    //\u8f09\u5165\u6280\u80fd,\u4f7f\u7528\u8ff4\u5708\u8f09\u5165\n    for (let i = 1; i < 9; i++) {\n      this.load.image("file" + i, `../assets/skills/fire/file-${i}.png`);\n    }\n  }\n\n  /**\n   * \u751f\u6210\u7269\u4ef6\n   */\n  create() {\n    // 1. \u80cc\u666f\n    let bg = this.add.sprite(0, 0, "bg1");\n\n    //\u53d6\u5f97\u5bec\u9ad8\n    let width = this.sys.game.config.width / 2;\n    let height = this.sys.game.config.height / 2;\n\n    //\u8a2d\u5b9a\u4f4d\u7f6e\n    bg.setPosition(width, height);\n\n    // 2. \u89d2\u8272\n    this.player = this.add.sprite(450, 105, "player1");\n\n    // 3. \u884c\u661f\n    this.planet1 = this.add.sprite(-100, 40, "planet1");\n\n    // 4. \u97f3\u6a02\n    this.music = this.sound.add("music1", {\n      volume: 0.2, //\u97f3\u91cf\n      loop: true, // \u662f\u5426\u8f2a\u64ad\n    });\n\n    this.music.play();\n\n    // 5. \u6280\u80fd\n    this.file = this.add.sprite(360, 65, "file1");\n    this.file.alpha = 0; //\u900f\u660e\u5ea6\u8a2d\u70ba0\n  }\n\n  /**\n   * \u521d\u59cb\u5316\n   */\n  init() {\n    // \u8a2d\u5b9a \u884c\u661f \u7684\u901f\u5ea6\n    this.planet1Speed = 3;\n    //\u8349\u6ce5\u99ac\u9663\u5217\n    this.allPlayer = ["player1", "player2"];\n    //\u8a08\u7b97\u6642\u9593\u8ef8\n    this.index = 0;\n    //\u5674\u706b\n    this.fileArr = ["file1", "file2", "file3", "file4", "file5", "file6", "file7", "file8"];\n  }\n\n  /**\n   * \u66f4\u65b0\u756b\u9762\n   */\n  update() {\n    // \u884c\u661f\u51fa\u73fe\n    if (this.index < 50) this.planet1.x += this.planet1Speed;\n\n    //\u8349\u6ce5\u99ac\u8b8a\u8eab\n    if (this.index % 5 === 0 && this.index > 80 && this.index < 200)\n      this.player.setTexture(this.allPlayer[this.index % 2]);\n\n    //\u8349\u5c3c\u99ac\u5674\u706b\n    if (this.index > 200) {\n      if (this.input.activePointer.isDown) {\n        this.file.alpha = 100; //\u900f\u660e\u5ea6\u8a2d\u70ba100\n        this.file.setTexture(this.fileArr[this.index % 8]);\n      } else {\n        this.file.alpha = 0; //\u900f\u660e\u5ea6\u8a2d\u70ba0\n      }\n    }\n\n    this.index++;\n  }\n}\n')),(0,s.kt)("h3",{id:"gamestart-\u5834\u666f"},"GameStart \u5834\u666f"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'/**\n * \u8d77\u59cb\u5834\u666f\n */\nclass GameStart extends Phaser.Scene {\n  constructor() {\n    super({ key: "gameStart" });\n  }\n  /**\n   * \u8f09\u5165\u7d20\u6750\n   */\n  preload() {\n    this.load.image("bg", "../assets/backgrounds/bg_1.webp");\n    this.load.image("start1", "../assets/others/start/start1.png");\n    this.load.image("gameName", "../assets/others/gameName/alpacaSceneName.png");\n  }\n\n  /**\n   * \u751f\u6210\u7269\u4ef6\n   */\n  create() {\n    // 1. \u80cc\u666f\n    let bg = this.add.sprite(0, 0, "bg");\n\n    //\u53d6\u5f97\u5bec\u9ad8\n    let width = this.sys.game.config.width / 2;\n    let height = this.sys.game.config.height / 2;\n\n    //\u8a2d\u5b9a\u4f4d\u7f6e\n    bg.setPosition(width, height);\n\n    // 2. \u904a\u6232\u6a19\u984c\n    let gameName = this.add.sprite(width, height - 50, "gameName", 0);\n\n    // 3. \u958b\u59cb\u6309\u9215\n    this.start1 = this.add.sprite(width, height + 50, "start1", 0).setInteractive();\n\n    this.start1.on("pointerdown", () => {\n      this.startGame();\n    });\n  }\n\n  /**\n   * \u5834\u666f\u8df3\u8f49\n   */\n  startGame() {\n    game.scene.start("alpacaScene");\n    game.scene.remove("gameStart");\n  }\n}\n')),(0,s.kt)("h3",{id:"\u4e3b\u7a0b\u5f0f-\u5834\u666f"},"\u4e3b\u7a0b\u5f0f \u5834\u666f"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Game-day7</title>\n</head>\n\n<body>\n    <div id="app"></div>\n\n    <script src="../lib/phaser.min.js"><\/script>\n    <script src="./scenes/gameStart.js"><\/script>\n    <script src="./scenes/alpacaScene.js"><\/script>\n    <script>\n        // \u5ba3\u544a\u4e00\u500b\u5834\u666f\n        let scene = new AlpacaScene();\n        let sceneStart = new GameStart();\n        // \u5ba3\u544a\u904a\u6232\u7684\u57fa\u672c\u8cc7\u8a0a\n        let config = {\n            type: Phaser.AUTO,\n            width: 600, // \u5bec\n            height: 300, // \u9ad8\n        }\n\n        //\u555f\u52d5\u904a\u6232\n        let game = new Phaser.Game(config)\n\n        //\u52a0\u8f09\u5834\u666f\n        game.scene.add(\'gameStart\', sceneStart);\n        game.scene.add(\'alpacaScene\', scene);\n        //\u555f\u52d5\u5834\u666f\n        game.scene.start(\'gameStart\');\n    <\/script>\n\n</body>\n\n</html>\n')))}o.isMDXComponent=!0}}]);