"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[8429],{3905:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>k});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var h=i.createContext({}),l=function(e){var n=i.useContext(h),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},o=function(e){var n=l(e.components);return i.createElement(h.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,h=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=l(t),d=a,k=p["".concat(h,".").concat(d)]||p[d]||m[d]||s;return t?i.createElement(k,r(r({ref:n},o),{},{components:t})):i.createElement(k,r({ref:n},o))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,r=new Array(s);r[0]=d;var c={};for(var h in n)hasOwnProperty.call(n,h)&&(c[h]=n[h]);c.originalType=e,c[p]="string"==typeof e?e:a,r[1]=c;for(var l=2;l<s;l++)r[l]=t[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8089:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=t(7462),a=(t(7294),t(3905));const s={sidebar_position:35,description:"phaser js \u904a\u6232\u5f15\u64ce",key:["phaser3","phaserJS","\u904a\u6232\u5f15\u64ce","game"],tags:["phaser3","phaserJS","\u904a\u6232\u5f15\u64ce","game"]},r="\ud83c\udfae \u57fa\u672c\u8a9e\u6cd5(\u4e03) - \u52d5\u756b",c={unversionedId:"phaserJs/day9",id:"phaserJs/day9",title:"\ud83c\udfae \u57fa\u672c\u8a9e\u6cd5(\u4e03) - \u52d5\u756b",description:"phaser js \u904a\u6232\u5f15\u64ce",source:"@site/docs/phaserJs/day9.md",sourceDirName:"phaserJs",slug:"/phaserJs/day9",permalink:"/docs/phaserJs/day9",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/phaserJs/day9.md",tags:[{label:"phaser3",permalink:"/docs/tags/phaser-3"},{label:"phaserJS",permalink:"/docs/tags/phaser-js"},{label:"\u904a\u6232\u5f15\u64ce",permalink:"/docs/tags/\u904a\u6232\u5f15\u64ce"},{label:"game",permalink:"/docs/tags/game"}],version:"current",lastUpdatedAt:1690724133,formattedLastUpdatedAt:"2023\u5e747\u670830\u65e5",sidebarPosition:35,frontMatter:{sidebar_position:35,description:"phaser js \u904a\u6232\u5f15\u64ce",key:["phaser3","phaserJS","\u904a\u6232\u5f15\u64ce","game"],tags:["phaser3","phaserJS","\u904a\u6232\u5f15\u64ce","game"]},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udfae \u57fa\u672c\u8a9e\u6cd5(\u516d) - \u7fa4\u7d44\u5316\u7269\u4ef6",permalink:"/docs/phaserJs/day8"},next:{title:"\u8a2d\u8a08\u6a21\u5f0f \u7b46\u8a18",permalink:"/docs/category/\u8a2d\u8a08\u6a21\u5f0f-\u7b46\u8a18"}},h={},l=[{value:"\u6211\u5011\u4e4b\u524d\u662f\u7528\u571f\u70ae\u7684\u65b9\u5f0f\u4f86\u5207\u63db\u5716\u7247\uff0c\u9054\u5230\u52d5\u756b\u6548\u679c\uff0c\u4eca\u5929\u6211\u5011\u4f86\u7528\u6bd4\u8f03\u6b63\u898f\u5f97\u65b9\u5f0f\u4f86\u505a\u52d5\u756b",id:"\u6211\u5011\u4e4b\u524d\u662f\u7528\u571f\u70ae\u7684\u65b9\u5f0f\u4f86\u5207\u63db\u5716\u7247\u9054\u5230\u52d5\u756b\u6548\u679c\u4eca\u5929\u6211\u5011\u4f86\u7528\u6bd4\u8f03\u6b63\u898f\u5f97\u65b9\u5f0f\u4f86\u505a\u52d5\u756b",level:2},{value:"\u4eca\u5929\u7684\u52d5\u756b\u662f\u8981\u8b93\u96de\u5728\u6c99\u6f20\u8d70\u4f86\u8d70\u53bb",id:"\u4eca\u5929\u7684\u52d5\u756b\u662f\u8981\u8b93\u96de\u5728\u6c99\u6f20\u8d70\u4f86\u8d70\u53bb",level:3},{value:"\u63a5\u4e0b\u63a5\u4e0b\u4f86\u9700\u8981\u8a2d\u5b9a\u96de\u7684\u5716\u7247\u61c9\u8a72\u5f9e\u7b2c\u5e7e\u5075\u958b\u59cb",id:"\u63a5\u4e0b\u63a5\u4e0b\u4f86\u9700\u8981\u8a2d\u5b9a\u96de\u7684\u5716\u7247\u61c9\u8a72\u5f9e\u7b2c\u5e7e\u5075\u958b\u59cb",level:3},{value:"\u5efa\u7acb\u52d5\u756b",id:"\u5efa\u7acb\u52d5\u756b",level:3},{value:"\u64ad\u653e\u52d5\u756b",id:"\u64ad\u653e\u52d5\u756b",level:3},{value:"\u8b93\u96de\u56de\u5bb6",id:"\u8b93\u96de\u56de\u5bb6",level:3},{value:"\u6b64\u6642\u6b64\u523b\u7684\u96de\uff0c\u5c31\u6703\u4e56\u4e56\u6563\u6b65\u4e5f\u4e0d\u6703\u96e2\u5bb6\u51fa\u8d70\u4e86\uff0c\u6211\u5011\u660e\u5929\u518d\u4f86\u76e3\u8996\u9019\u96bb\u96de\u78ba\u4fdd\u4ed6\u4e0d\u6703\u4e82\u8dd1",id:"\u6b64\u6642\u6b64\u523b\u7684\u96de\u5c31\u6703\u4e56\u4e56\u6563\u6b65\u4e5f\u4e0d\u6703\u96e2\u5bb6\u51fa\u8d70\u4e86\u6211\u5011\u660e\u5929\u518d\u4f86\u76e3\u8996\u9019\u96bb\u96de\u78ba\u4fdd\u4ed6\u4e0d\u6703\u4e82\u8dd1",level:3},{value:"\u904a\u6232\u5834\u666f",id:"\u904a\u6232\u5834\u666f",level:3},{value:"\u4e3b\u7a0b\u5f0f",id:"\u4e3b\u7a0b\u5f0f",level:3}],o={toc:l},p="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,i.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-\u57fa\u672c\u8a9e\u6cd5\u4e03---\u52d5\u756b"},"\ud83c\udfae \u57fa\u672c\u8a9e\u6cd5(\u4e03) - \u52d5\u756b"),(0,a.kt)("h2",{id:"\u6211\u5011\u4e4b\u524d\u662f\u7528\u571f\u70ae\u7684\u65b9\u5f0f\u4f86\u5207\u63db\u5716\u7247\u9054\u5230\u52d5\u756b\u6548\u679c\u4eca\u5929\u6211\u5011\u4f86\u7528\u6bd4\u8f03\u6b63\u898f\u5f97\u65b9\u5f0f\u4f86\u505a\u52d5\u756b"},"\u6211\u5011\u4e4b\u524d\u662f\u7528\u571f\u70ae\u7684\u65b9\u5f0f\u4f86\u5207\u63db\u5716\u7247\uff0c\u9054\u5230\u52d5\u756b\u6548\u679c\uff0c\u4eca\u5929\u6211\u5011\u4f86\u7528\u6bd4\u8f03\u6b63\u898f\u5f97\u65b9\u5f0f\u4f86\u505a\u52d5\u756b"),(0,a.kt)("h3",{id:"\u4eca\u5929\u7684\u52d5\u756b\u662f\u8981\u8b93\u96de\u5728\u6c99\u6f20\u8d70\u4f86\u8d70\u53bb"},"\u4eca\u5929\u7684\u52d5\u756b\u662f\u8981\u8b93\u96de\u5728\u6c99\u6f20\u8d70\u4f86\u8d70\u53bb"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5148\u8f09\u5165\u96de\u8207\u80cc\u666f\u7684\u5716\u7247")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6211\u5011\u9019\u908a\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"spritesheet")," \u4f86\u8a2d\u5b9a\u6bcf\u4e00\u5075\u7684\u5bec\u9ad8"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://github.com/LonelyYeezhiChicken/chicken-personal/blob/main/static/mdImgs/phaser/note/roles/chickenGo.png?raw=true",alt:"mImg"})))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'class GameScene extends Phaser.Scene {\n  constructor() {\n    super({ key: "gameScene" });\n  }\n\n  /**\n   * \u8f09\u5165\u7d20\u6750\n   */\n  preload() {\n    // \u8f09\u5165\u7d20\u6750\n    // bg1 -> \u5716\u7247\u8f09\u5165\u5f8c\u7684\u7269\u4ef6\u540d\u7a31(key)\n    this.load.image("bg1", "../assets/backgrounds/desert.webp");\n\n    // \u8f09\u5165\u96de\u52d5\u756b\n    this.load.spritesheet("chicken", "../assets/roles/chickenGo.png", {\n      frameWidth: 32,\n      frameHeight: 32,\n    });\n  }\n}\n')),(0,a.kt)("h3",{id:"\u63a5\u4e0b\u63a5\u4e0b\u4f86\u9700\u8981\u8a2d\u5b9a\u96de\u7684\u5716\u7247\u61c9\u8a72\u5f9e\u7b2c\u5e7e\u5075\u958b\u59cb"},"\u63a5\u4e0b\u63a5\u4e0b\u4f86\u9700\u8981\u8a2d\u5b9a\u96de\u7684\u5716\u7247\u61c9\u8a72\u5f9e\u7b2c\u5e7e\u5075\u958b\u59cb"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6211\u5011\u9019\u908a\u591a\u7d66\u4e00\u500b\u53c3\u6578\u8868\u793a\u5f9e\u7b2c 12 \u683c\u958b\u59cb ",(0,a.kt)("inlineCode",{parentName:"li"},'this.add.sprite(50, 200, "chicken", 12)')),(0,a.kt)("li",{parentName:"ul"},"\u4e26\u4e14\u628a\u96de\u653e\u5927 1.5 \u500d")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'class GameScene extends Phaser.Scene {\n  constructor() {\n    super({ key: "gameScene" });\n  }\n\n  /**\n   * \u8f09\u5165\u7d20\u6750\n   */\n  preload() {\n    // \u8f09\u5165\u7d20\u6750\n    // bg1 -> \u5716\u7247\u8f09\u5165\u5f8c\u7684\u7269\u4ef6\u540d\u7a31(key)\n    this.load.image("bg1", "../assets/backgrounds/desert.webp");\n\n    // \u8f09\u5165\u96de\u52d5\u756b\n    this.load.spritesheet("chicken", "../assets/roles/chickenGo.png", {\n      frameWidth: 32,\n      frameHeight: 32,\n    });\n  }\n\n  /**\n   * \u751f\u6210\u7269\u4ef6\n   */\n  create() {\n    // 1. \u80cc\u666f\n    let bg = this.add.sprite(0, 0, "bg1");\n\n    //\u53d6\u5f97\u5bec\u9ad8\n    let width = this.sys.game.config.width / 2;\n    let height = this.sys.game.config.height / 2;\n\n    //\u8a2d\u5b9a\u4f4d\u7f6e\n    bg.setPosition(width, height);\n\n    // 2. \u96de\n    this.chicken = this.add.sprite(50, 200, "chicken", 12);\n\n    // \u628a\u96de\u653e\u5927 1.5 \u500d\n    this.chicken.setScale(1.5);\n  }\n}\n')),(0,a.kt)("h3",{id:"\u5efa\u7acb\u52d5\u756b"},"\u5efa\u7acb\u52d5\u756b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9019\u908a\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"this.anims.create")," \u4f86\u5efa\u7acb\u52d5\u756b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"start")," ",(0,a.kt)("inlineCode",{parentName:"li"},"end")," \uff0c\u8868\u793a\u52d5\u756b\u61c9\u8a72\u5f9e\u54ea\u683c\u958b\u59cb\u8207\u7d50\u675f"),(0,a.kt)("li",{parentName:"ul"},"\u6211\u5011\u5206\u5225\u5efa\u7acb\u4e00\u500b\u5411\u5de6\u8d70\u8207\u5411\u53f3\u8d70\u7684\u52d5\u756b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'class GameScene extends Phaser.Scene {\n  constructor() {\n    super({ key: "gameScene" });\n  }\n\n  /**\n   * \u8f09\u5165\u7d20\u6750\n   */\n  preload() {\n    // \u8f09\u5165\u7d20\u6750\n    // bg1 -> \u5716\u7247\u8f09\u5165\u5f8c\u7684\u7269\u4ef6\u540d\u7a31(key)\n    this.load.image("bg1", "../assets/backgrounds/desert.webp");\n\n    // \u8f09\u5165\u96de\u52d5\u756b\n    this.load.spritesheet("chicken", "../assets/roles/chickenGo.png", {\n      frameWidth: 32,\n      frameHeight: 32,\n    });\n  }\n\n  /**\n   * \u751f\u6210\u7269\u4ef6\n   */\n  create() {\n    // 1. \u80cc\u666f\n    let bg = this.add.sprite(0, 0, "bg1");\n\n    //\u53d6\u5f97\u5bec\u9ad8\n    let width = this.sys.game.config.width / 2;\n    let height = this.sys.game.config.height / 2;\n\n    //\u8a2d\u5b9a\u4f4d\u7f6e\n    bg.setPosition(width, height);\n\n    // 2. \u96de\n    this.chicken = this.add.sprite(50, 200, "chicken", 12);\n\n    // \u628a\u96de\u653e\u5927 1.5 \u500d\n    this.chicken.setScale(1.5);\n\n    // \u5efa\u7acb\u96de\u5411\u53f3\u8d70\u7684\u52d5\u756b\n    this.anims.create({\n      key: "chickenGoRight",\n      frames: this.anims.generateFrameNumbers("chicken", {\n        start: 12,\n        end: 15,\n      }),\n      frameRate: 4,\n    });\n\n    this.anims.create({\n      key: "chickenGoLeft",\n      frames: this.anims.generateFrameNumbers("chicken", {\n        start: 4,\n        end: 7,\n      }),\n      frameRate: 4,\n    });\n  }\n}\n')),(0,a.kt)("h3",{id:"\u64ad\u653e\u52d5\u756b"},"\u64ad\u653e\u52d5\u756b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9019\u6642\u5019\u6211\u5011\u60f3\u8981\u9ede\u64ca\u756b\u9762\u96de\u5c31\u6703\u51fa\u767c"),(0,a.kt)("li",{parentName:"ul"},"\u9ede\u64ca\u756b\u9762\u6703\u7528\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"this.input.activePointer.isDown")),(0,a.kt)("li",{parentName:"ul"},"\u63a5\u4e0b\u4f86\u5c31\u662f\u64ad\u653e\u52d5\u756b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"li"},'this.chicken.anims.play("chickenGoRight", true)')),(0,a.kt)("li",{parentName:"ul"},"\u4e26\u4e14\u8981\u5e6b\u96de\u7684 x \u8ef8 +1 \u4ed6\u624d\u6703\u5f80\u53f3\u524d\u9032")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'class GameScene extends Phaser.Scene {\n  constructor() {\n    super({ key: "gameScene" });\n  }\n\n  /**\n   * \u8f09\u5165\u7d20\u6750\n   */\n  preload() {\n    // \u8f09\u5165\u7d20\u6750\n    // bg1 -> \u5716\u7247\u8f09\u5165\u5f8c\u7684\u7269\u4ef6\u540d\u7a31(key)\n    this.load.image("bg1", "../assets/backgrounds/desert.webp");\n\n    // \u8f09\u5165\u96de\u52d5\u756b\n    this.load.spritesheet("chicken", "../assets/roles/chickenGo.png", {\n      frameWidth: 32,\n      frameHeight: 32,\n    });\n  }\n\n  /**\n   * \u751f\u6210\u7269\u4ef6\n   */\n  create() {\n    // 1. \u80cc\u666f\n    let bg = this.add.sprite(0, 0, "bg1");\n\n    //\u53d6\u5f97\u5bec\u9ad8\n    let width = this.sys.game.config.width / 2;\n    let height = this.sys.game.config.height / 2;\n\n    //\u8a2d\u5b9a\u4f4d\u7f6e\n    bg.setPosition(width, height);\n\n    // 2. \u96de\n    this.chicken = this.add.sprite(50, 200, "chicken", 12);\n\n    // \u628a\u96de\u653e\u5927 1.5 \u500d\n    this.chicken.setScale(1.5);\n\n    // \u5efa\u7acb\u96de\u5411\u53f3\u8d70\u7684\u52d5\u756b\n    this.anims.create({\n      key: "chickenGoRight",\n      frames: this.anims.generateFrameNumbers("chicken", {\n        start: 12,\n        end: 15,\n      }),\n      frameRate: 4,\n    });\n\n    this.anims.create({\n      key: "chickenGoLeft",\n      frames: this.anims.generateFrameNumbers("chicken", {\n        start: 4,\n        end: 7,\n      }),\n      frameRate: 4,\n    });\n  }\n\n  update() {\n    if (this.input.activePointer.isDown) {\n      this.chicken.x += 1;\n      this.chicken.anims.play("chickenGoRight", true);\n    }\n  }\n}\n')),(0,a.kt)("h3",{id:"\u8b93\u96de\u56de\u5bb6"},"\u8b93\u96de\u56de\u5bb6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u73fe\u5728\u4e00\u76f4\u9ede\u8457\u87a2\u5e55\uff0c\u96de\u5c31\u6703\u96e2\u5bb6\u51fa\u8d70"),(0,a.kt)("li",{parentName:"ul"},"\u8dd1\u51fa\u87a2\u5e55\u5916\u5c31\u56de\u4e0d\u4e86\u5bb6\u4e86"),(0,a.kt)("li",{parentName:"ul"},"\u56e0\u6b64\u6211\u5011\u52a0\u4e00\u500b\u8b8a\u6578\uff0c\u4f86\u5224\u65b7\u96de\u662f\u4e0d\u662f\u8a72\u56de\u5bb6\u4e86"),(0,a.kt)("li",{parentName:"ul"},"\u4e26\u4e14\u5075\u6e2c\u6a5f\u662f\u4e0d\u662f\u8d70\u5230\u4e16\u754c\u7684\u76e1\u982d\uff0c\u662f\u7684\u8a71\u5c31\u8b93\u4ed6\u56de\u982d")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'class GameScene extends Phaser.Scene {\n  constructor() {\n    super({ key: "gameScene" });\n  }\n\n  /**\n   * \u8f09\u5165\u7d20\u6750\n   */\n  preload() {\n    // \u8f09\u5165\u7d20\u6750\n    // bg1 -> \u5716\u7247\u8f09\u5165\u5f8c\u7684\u7269\u4ef6\u540d\u7a31(key)\n    this.load.image("bg1", "../assets/backgrounds/desert.webp");\n\n    // \u8f09\u5165\u96de\u52d5\u756b\n    this.load.spritesheet("chicken", "../assets/roles/chickenGo.png", {\n      frameWidth: 32,\n      frameHeight: 32,\n    });\n  }\n\n  /**\n   * \u751f\u6210\u7269\u4ef6\n   */\n  create() {\n    // 1. \u80cc\u666f\n    let bg = this.add.sprite(0, 0, "bg1");\n\n    //\u53d6\u5f97\u5bec\u9ad8\n    let width = this.sys.game.config.width / 2;\n    let height = this.sys.game.config.height / 2;\n\n    //\u8a2d\u5b9a\u4f4d\u7f6e\n    bg.setPosition(width, height);\n\n    // 2. \u96de\n    this.chicken = this.add.sprite(50, 200, "chicken", 12);\n\n    // \u628a\u96de\u653e\u5927 1.5 \u500d\n    this.chicken.setScale(1.5);\n\n    // \u5efa\u7acb\u96de\u5411\u53f3\u8d70\u7684\u52d5\u756b\n    this.anims.create({\n      key: "chickenGoRight",\n      frames: this.anims.generateFrameNumbers("chicken", {\n        start: 12,\n        end: 15,\n      }),\n      frameRate: 4,\n    });\n\n    this.anims.create({\n      key: "chickenGoLeft",\n      frames: this.anims.generateFrameNumbers("chicken", {\n        start: 4,\n        end: 7,\n      }),\n      frameRate: 4,\n    });\n  }\n\n  #isChickenGoHome = false;\n  update() {\n    // \u96de\u6c92\u6709\u518d\u56de\u5bb6\u624d\u80fd\u8d70\n\n    if (this.input.activePointer.isDown) {\n      if (this.#isChickenGoHome === false) {\n        this.chicken.x += 1;\n        this.chicken.anims.play("chickenGoRight", true);\n      } else {\n        this.chicken.x -= 1;\n        this.chicken.anims.play("chickenGoLeft", true);\n      }\n    }\n\n    // \u5982\u679c\u96de\u8d85\u904e\u5834\u666f\u5c31\u8b93\u4ed6\u8dd1\u56de\u5bb6\n    if (this.chicken.x >= this.sys.game.config.width) {\n      this.#isChickenGoHome = true;\n    } else if (this.chicken.x <= 0) {\n      this.#isChickenGoHome = false;\n    }\n  }\n}\n')),(0,a.kt)("h3",{id:"\u6b64\u6642\u6b64\u523b\u7684\u96de\u5c31\u6703\u4e56\u4e56\u6563\u6b65\u4e5f\u4e0d\u6703\u96e2\u5bb6\u51fa\u8d70\u4e86\u6211\u5011\u660e\u5929\u518d\u4f86\u76e3\u8996\u9019\u96bb\u96de\u78ba\u4fdd\u4ed6\u4e0d\u6703\u4e82\u8dd1"},"\u6b64\u6642\u6b64\u523b\u7684\u96de\uff0c\u5c31\u6703\u4e56\u4e56\u6563\u6b65\u4e5f\u4e0d\u6703\u96e2\u5bb6\u51fa\u8d70\u4e86\uff0c\u6211\u5011\u660e\u5929\u518d\u4f86\u76e3\u8996\u9019\u96bb\u96de\u78ba\u4fdd\u4ed6\u4e0d\u6703\u4e82\u8dd1"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u904a\u6232\u5834\u666f"},"\u904a\u6232\u5834\u666f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'class GameScene extends Phaser.Scene {\n  constructor() {\n    super({ key: "gameScene" });\n  }\n\n  /**\n   * \u8f09\u5165\u7d20\u6750\n   */\n  preload() {\n    // \u8f09\u5165\u7d20\u6750\n    // bg1 -> \u5716\u7247\u8f09\u5165\u5f8c\u7684\u7269\u4ef6\u540d\u7a31(key)\n    this.load.image("bg1", "../assets/backgrounds/desert.webp");\n\n    // \u8f09\u5165\u96de\u52d5\u756b\n    this.load.spritesheet("chicken", "../assets/roles/chickenGo.png", {\n      frameWidth: 32,\n      frameHeight: 32,\n    });\n  }\n\n  /**\n   * \u751f\u6210\u7269\u4ef6\n   */\n  create() {\n    // 1. \u80cc\u666f\n    let bg = this.add.sprite(0, 0, "bg1");\n\n    //\u53d6\u5f97\u5bec\u9ad8\n    let width = this.sys.game.config.width / 2;\n    let height = this.sys.game.config.height / 2;\n\n    //\u8a2d\u5b9a\u4f4d\u7f6e\n    bg.setPosition(width, height);\n\n    // 2. \u96de\n    this.chicken = this.add.sprite(50, 200, "chicken", 12);\n\n    // \u628a\u96de\u653e\u5927 1.5 \u500d\n    this.chicken.setScale(1.5);\n\n    // \u5efa\u7acb\u96de\u5411\u53f3\u8d70\u7684\u52d5\u756b\n    this.anims.create({\n      key: "chickenGoRight",\n      frames: this.anims.generateFrameNumbers("chicken", {\n        start: 12,\n        end: 15,\n      }),\n      frameRate: 4,\n    });\n\n    this.anims.create({\n      key: "chickenGoLeft",\n      frames: this.anims.generateFrameNumbers("chicken", {\n        start: 4,\n        end: 7,\n      }),\n      frameRate: 4,\n    });\n  }\n\n  #isChickenGoHome = false;\n  update() {\n    // \u96de\u6c92\u6709\u518d\u56de\u5bb6\u624d\u80fd\u8d70\n\n    if (this.input.activePointer.isDown) {\n      if (this.#isChickenGoHome === false) {\n        this.chicken.x += 1;\n        this.chicken.anims.play("chickenGoRight", true);\n      } else {\n        this.chicken.x -= 1;\n        this.chicken.anims.play("chickenGoLeft", true);\n      }\n    }\n\n    // \u5982\u679c\u96de\u8d85\u904e\u5834\u666f\u5c31\u8b93\u4ed6\u8dd1\u56de\u5bb6\n    if (this.chicken.x >= this.sys.game.config.width) {\n      this.#isChickenGoHome = true;\n    } else if (this.chicken.x <= 0) {\n      this.#isChickenGoHome = false;\n    }\n  }\n}\n')),(0,a.kt)("h3",{id:"\u4e3b\u7a0b\u5f0f"},"\u4e3b\u7a0b\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Game-day9</title>\n</head>\n\n<body>\n    <div id="app"></div>\n\n    <script src="../lib/phaser.min.js"><\/script>\n    <script src="./scenes/gameScene.js"><\/script>\n    <script>\n        // \u5ba3\u544a\u4e00\u500b\u5834\u666f\n        let scene = new GameScene();\n\n        // \u5ba3\u544a\u5834\u666f\u7684\u57fa\u672c\u8cc7\u8a0a\n        let config = {\n            type: Phaser.AUTO,\n            width: 600, // \u5bec\n            height: 300, // \u9ad8\n        }\n\n        //\u555f\u52d5\u904a\u6232\n        let game = new Phaser.Game(config)\n\n        //\u52a0\u8f09\u5834\u666f\n        game.scene.add(\'gameScene\', scene);\n        //\u555f\u52d5\u5834\u666f\n        game.scene.start(\'gameScene\');\n    <\/script>\n\n</body>\n\n</html>\n')))}m.isMDXComponent=!0}}]);