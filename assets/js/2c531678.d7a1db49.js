"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[4389],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),g=s,m=d["".concat(o,".").concat(g)]||d[g]||h[g]||r;return t?a.createElement(m,i(i({ref:n},c),{},{components:t})):a.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=g;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[d]="string"==typeof e?e:s,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},8856:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(7462),s=(t(7294),t(3905));const r={sidebar_position:35,description:"phaser js \u904a\u6232\u5f15\u64ce",key:["phaser3","phaserJS","\u904a\u6232\u5f15\u64ce","game"],tags:["phaser3","phaserJS","\u904a\u6232\u5f15\u64ce","game"]},i="\ud83c\udfae \u57fa\u672c\u8a9e\u6cd5(\u516d) - \u7fa4\u7d44\u5316\u7269\u4ef6",l={unversionedId:"phaserJs/day8",id:"phaserJs/day8",title:"\ud83c\udfae \u57fa\u672c\u8a9e\u6cd5(\u516d) - \u7fa4\u7d44\u5316\u7269\u4ef6",description:"phaser js \u904a\u6232\u5f15\u64ce",source:"@site/docs/phaserJs/day8.md",sourceDirName:"phaserJs",slug:"/phaserJs/day8",permalink:"/docs/phaserJs/day8",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/phaserJs/day8.md",tags:[{label:"phaser3",permalink:"/docs/tags/phaser-3"},{label:"phaserJS",permalink:"/docs/tags/phaser-js"},{label:"\u904a\u6232\u5f15\u64ce",permalink:"/docs/tags/\u904a\u6232\u5f15\u64ce"},{label:"game",permalink:"/docs/tags/game"}],version:"current",lastUpdatedAt:1688812009,formattedLastUpdatedAt:"2023\u5e747\u67088\u65e5",sidebarPosition:35,frontMatter:{sidebar_position:35,description:"phaser js \u904a\u6232\u5f15\u64ce",key:["phaser3","phaserJS","\u904a\u6232\u5f15\u64ce","game"],tags:["phaser3","phaserJS","\u904a\u6232\u5f15\u64ce","game"]},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udfae \u57fa\u672c\u8a9e\u6cd5(\u4e94) - \u5834\u666f\u5207\u63db",permalink:"/docs/phaserJs/day7"},next:{title:"\ud83c\udfae \u57fa\u672c\u8a9e\u6cd5(\u4e03) - \u52d5\u756b",permalink:"/docs/phaserJs/day9"}},o={},p=[{value:"\u904a\u6232\u88e1\u9762\u80af\u5b9a\u6703\u9047\u5230\u5f88\u591a\u4e00\u6a21\u4e00\u6a23\u7684\u80cc\u666f\u88dd\u98fe\uff0c\u6bcf\u6b21\u90fd\u8981\u5beb\u4e00\u5806\u91cd\u8907\u7684\u8a2d\u5b9a\u592a\u9ebb\u7169\u4e86\uff0c\u56e0\u6b64\u6211\u5011\u4eca\u5929\u5c31\u4f86\u5c07\u7269\u4ef6\u7fa4\u7d44\u5316",id:"\u904a\u6232\u88e1\u9762\u80af\u5b9a\u6703\u9047\u5230\u5f88\u591a\u4e00\u6a21\u4e00\u6a23\u7684\u80cc\u666f\u88dd\u98fe\u6bcf\u6b21\u90fd\u8981\u5beb\u4e00\u5806\u91cd\u8907\u7684\u8a2d\u5b9a\u592a\u9ebb\u7169\u4e86\u56e0\u6b64\u6211\u5011\u4eca\u5929\u5c31\u4f86\u5c07\u7269\u4ef6\u7fa4\u7d44\u5316",level:2},{value:"\u6211\u5011\u4eca\u5929\u5c31\u4f86\u8b93\u6c99\u6f20\u4e2d\u9577\u6eff\u8349\u5427",id:"\u6211\u5011\u4eca\u5929\u5c31\u4f86\u8b93\u6c99\u6f20\u4e2d\u9577\u6eff\u8349\u5427",level:3},{value:"\u5148\u8f09\u5165\u6c99\u6f20\u80cc\u666f\u8207\u8349\u76ae",id:"\u5148\u8f09\u5165\u6c99\u6f20\u80cc\u666f\u8207\u8349\u76ae",level:3},{value:"\u63a5\u4e0b\u4f86\u5c31\u662f\u5927\u5bb6\u719f\u6089\u7684\u5efa\u7acb\u80cc\u666f",id:"\u63a5\u4e0b\u4f86\u5c31\u662f\u5927\u5bb6\u719f\u6089\u7684\u5efa\u7acb\u80cc\u666f",level:3},{value:"\u63a5\u4e0b\u4f86\u9032\u5165\u5efa\u7acb\u8349\u76ae\u7fa4\u7d44\u74b0\u7bc0",id:"\u63a5\u4e0b\u4f86\u9032\u5165\u5efa\u7acb\u8349\u76ae\u7fa4\u7d44\u74b0\u7bc0",level:3},{value:"\u56e0\u70ba\u6c99\u6f20\u592a\u71b1\u4e86\uff0c\u6240\u4ee5\u8349\u8981\u96c6\u9ad4\u7e2e\u6c34",id:"\u56e0\u70ba\u6c99\u6f20\u592a\u71b1\u4e86\u6240\u4ee5\u8349\u8981\u96c6\u9ad4\u7e2e\u6c34",level:3},{value:"\u4eca\u5929\u6211\u5011\u5b78\u6703\u4e86\u5927\u91cf\u8907\u88fd\u5834\u666f\u4e2d\u7684\u7269\u4ef6\u4e86\uff0c\u5927\u5bb6\u53ef\u4ee5\u8a66\u8457\u5728\u6c99\u6f20\u88e1\u64b2\u6eff\u66f4\u591a\u7684\u8349",id:"\u4eca\u5929\u6211\u5011\u5b78\u6703\u4e86\u5927\u91cf\u8907\u88fd\u5834\u666f\u4e2d\u7684\u7269\u4ef6\u4e86\u5927\u5bb6\u53ef\u4ee5\u8a66\u8457\u5728\u6c99\u6f20\u88e1\u64b2\u6eff\u66f4\u591a\u7684\u8349",level:3},{value:"\u904a\u6232\u5834\u666f",id:"\u904a\u6232\u5834\u666f",level:3},{value:"\u4e3b\u7a0b\u5f0f",id:"\u4e3b\u7a0b\u5f0f",level:3}],c={toc:p},d="wrapper";function h(e){let{components:n,...t}=e;return(0,s.kt)(d,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"-\u57fa\u672c\u8a9e\u6cd5\u516d---\u7fa4\u7d44\u5316\u7269\u4ef6"},"\ud83c\udfae \u57fa\u672c\u8a9e\u6cd5(\u516d) - \u7fa4\u7d44\u5316\u7269\u4ef6"),(0,s.kt)("h2",{id:"\u904a\u6232\u88e1\u9762\u80af\u5b9a\u6703\u9047\u5230\u5f88\u591a\u4e00\u6a21\u4e00\u6a23\u7684\u80cc\u666f\u88dd\u98fe\u6bcf\u6b21\u90fd\u8981\u5beb\u4e00\u5806\u91cd\u8907\u7684\u8a2d\u5b9a\u592a\u9ebb\u7169\u4e86\u56e0\u6b64\u6211\u5011\u4eca\u5929\u5c31\u4f86\u5c07\u7269\u4ef6\u7fa4\u7d44\u5316"},"\u904a\u6232\u88e1\u9762\u80af\u5b9a\u6703\u9047\u5230\u5f88\u591a\u4e00\u6a21\u4e00\u6a23\u7684\u80cc\u666f\u88dd\u98fe\uff0c\u6bcf\u6b21\u90fd\u8981\u5beb\u4e00\u5806\u91cd\u8907\u7684\u8a2d\u5b9a\u592a\u9ebb\u7169\u4e86\uff0c\u56e0\u6b64\u6211\u5011\u4eca\u5929\u5c31\u4f86\u5c07\u7269\u4ef6\u7fa4\u7d44\u5316"),(0,s.kt)("h3",{id:"\u6211\u5011\u4eca\u5929\u5c31\u4f86\u8b93\u6c99\u6f20\u4e2d\u9577\u6eff\u8349\u5427"},"\u6211\u5011\u4eca\u5929\u5c31\u4f86\u8b93\u6c99\u6f20\u4e2d\u9577\u6eff\u8349\u5427"),(0,s.kt)("h3",{id:"\u5148\u8f09\u5165\u6c99\u6f20\u80cc\u666f\u8207\u8349\u76ae"},"\u5148\u8f09\u5165\u6c99\u6f20\u80cc\u666f\u8207\u8349\u76ae"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/LonelyYeezhiChicken/chicken-personal/main/static/mdImgs/phaser/note/backgrounds/desert.webp",alt:"mdImg"}),"\n",(0,s.kt)("img",{parentName:"p",src:"https://github.com/LonelyYeezhiChicken/chicken-personal/blob/main/static/mdImgs/phaser/note/others/Grass.png?raw=true",alt:"\u8349\u76ae"})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'class GameScene extends Phaser.Scene {\n  constructor() {\n    super({ key: "gameScene" });\n  }\n\n  /**\n   * \u8f09\u5165\u7d20\u6750\n   */\n  preload() {\n    // \u8f09\u5165\u7d20\u6750\n    // bg1 -> \u5716\u7247\u8f09\u5165\u5f8c\u7684\u7269\u4ef6\u540d\u7a31(key)\n    this.load.image("bg1", "../assets/backgrounds/desert.webp");\n\n    // \u8f09\u5165\u8349\u76ae\n    this.load.image("grass", "../assets/others/Grass.png");\n  }\n}\n')),(0,s.kt)("h3",{id:"\u63a5\u4e0b\u4f86\u5c31\u662f\u5927\u5bb6\u719f\u6089\u7684\u5efa\u7acb\u80cc\u666f"},"\u63a5\u4e0b\u4f86\u5c31\u662f\u5927\u5bb6\u719f\u6089\u7684\u5efa\u7acb\u80cc\u666f"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'class GameScene extends Phaser.Scene {\n  constructor() {\n    super({ key: "gameScene" });\n  }\n\n  /**\n   * \u8f09\u5165\u7d20\u6750\n   */\n  preload() {\n    // \u8f09\u5165\u7d20\u6750\n    // bg1 -> \u5716\u7247\u8f09\u5165\u5f8c\u7684\u7269\u4ef6\u540d\u7a31(key)\n    this.load.image("bg1", "../assets/backgrounds/desert.webp");\n\n    // \u8f09\u5165\u8349\u76ae\n    this.load.image("grass", "../assets/others/Grass.png");\n  }\n\n  /**\n   * \u751f\u6210\u7269\u4ef6\n   */\n  create() {\n    // 1. \u80cc\u666f\n    let bg = this.add.sprite(0, 0, "bg1");\n\n    //\u53d6\u5f97\u5bec\u9ad8\n    let width = this.sys.game.config.width / 2;\n    let height = this.sys.game.config.height / 2;\n\n    //\u8a2d\u5b9a\u4f4d\u7f6e\n    bg.setPosition(width, height);\n  }\n}\n')),(0,s.kt)("h3",{id:"\u63a5\u4e0b\u4f86\u9032\u5165\u5efa\u7acb\u8349\u76ae\u7fa4\u7d44\u74b0\u7bc0"},"\u63a5\u4e0b\u4f86\u9032\u5165\u5efa\u7acb\u8349\u76ae\u7fa4\u7d44\u74b0\u7bc0"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u9996\u5148\u6211\u5011\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"li"},"this.add.group")," \u4f86\u5c0d\u5834\u666f\u52a0\u5165\u7fa4\u7d44"),(0,s.kt)("li",{parentName:"ul"},"\u63a5\u4e0b\u4f86\u8a2d\u5b9a\u7fa4\u7d44\u7684\u53c3\u6578",(0,s.kt)("ol",{parentName:"li"},(0,s.kt)("li",{parentName:"ol"},"\u8a2d\u5b9a\u7fa4\u7d44\u7684\u552f\u4e00\u503c ",(0,s.kt)("inlineCode",{parentName:"li"},' key: "grass"')),(0,s.kt)("li",{parentName:"ol"},"\u8907\u88fd\u591a\u5c11\u7269\u4ef6 ",(0,s.kt)("inlineCode",{parentName:"li"},"repeat: 10, //\u7a2e\u5341\u64ae")))),(0,s.kt)("li",{parentName:"ul"},"\u518d\u4f86\u5c31\u662f\u8a2d\u5b9a\u7269\u4ef6\u7684\u8d77\u59cb\u9ede\u9084\u6709\u898f\u5247")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'class GameScene extends Phaser.Scene {\n  constructor() {\n    super({ key: "gameScene" });\n  }\n\n  /**\n   * \u8f09\u5165\u7d20\u6750\n   */\n  preload() {\n    // \u8f09\u5165\u7d20\u6750\n    // bg1 -> \u5716\u7247\u8f09\u5165\u5f8c\u7684\u7269\u4ef6\u540d\u7a31(key)\n    this.load.image("bg1", "../assets/backgrounds/desert.webp");\n\n    // \u8f09\u5165\u8349\u76ae\n    this.load.image("grass", "../assets/others/Grass.png");\n  }\n\n  /**\n   * \u751f\u6210\u7269\u4ef6\n   */\n  create() {\n    // 1. \u80cc\u666f\n    let bg = this.add.sprite(0, 0, "bg1");\n\n    //\u53d6\u5f97\u5bec\u9ad8\n    let width = this.sys.game.config.width / 2;\n    let height = this.sys.game.config.height / 2;\n\n    //\u8a2d\u5b9a\u4f4d\u7f6e\n    bg.setPosition(width, height);\n\n    // \u5efa\u7acb\u8349\u76ae\u7fa4\u7d44\n    // \u4e00\u6b21\u9577\u5341\u64ae\n    this.grassland = this.add.group({\n      key: "grass",\n      repeat: 10, //\u7a2e\u5341\u64ae\n      setXY: {\n        x: 10, // \u5f9e X 10 \u958b\u59cb\n        y: 250, // \u5f9e Y 250 \u958b\u59cb\n        stepX: 55, // \u6bcf\u9593\u969410\u7a2e\u4e00\u64ae\n        stepY: 0,\n      },\n    });\n  }\n}\n')),(0,s.kt)("h3",{id:"\u56e0\u70ba\u6c99\u6f20\u592a\u71b1\u4e86\u6240\u4ee5\u8349\u8981\u96c6\u9ad4\u7e2e\u6c34"},"\u56e0\u70ba\u6c99\u6f20\u592a\u71b1\u4e86\uff0c\u6240\u4ee5\u8349\u8981\u96c6\u9ad4\u7e2e\u6c34"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u9996\u5148\u53ef\u4ee5\u5148\u53d6\u5f97\u7fa4\u7d44\u5167\u7684\u6240\u6709\u7269\u4ef6 ",(0,s.kt)("inlineCode",{parentName:"li"},"getChildren()")),(0,s.kt)("li",{parentName:"ul"},"\u6b64\u6642\u6211\u5011\u5c31\u53ef\u4ee5\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"li"},"forEach")," \u8ff4\u5708\u4f86\u540c\u6642\u6539\u8b8a\u7fa4\u7d44\u5167\u7684\u6240\u6709\u7269\u4ef6"),(0,s.kt)("li",{parentName:"ul"},"\u653e\u5927\u7e2e\u5c0f\u6211\u5011\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"li"},"setScale()")," \u4f86\u8655\u7406")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'class GameScene extends Phaser.Scene {\n  constructor() {\n    super({ key: "gameScene" });\n  }\n\n  /**\n   * \u8f09\u5165\u7d20\u6750\n   */\n  preload() {\n    // \u8f09\u5165\u7d20\u6750\n    // bg1 -> \u5716\u7247\u8f09\u5165\u5f8c\u7684\u7269\u4ef6\u540d\u7a31(key)\n    this.load.image("bg1", "../assets/backgrounds/desert.webp");\n\n    // \u8f09\u5165\u8349\u76ae\n    this.load.image("grass", "../assets/others/Grass.png");\n  }\n\n  /**\n   * \u751f\u6210\u7269\u4ef6\n   */\n  create() {\n    // 1. \u80cc\u666f\n    let bg = this.add.sprite(0, 0, "bg1");\n\n    //\u53d6\u5f97\u5bec\u9ad8\n    let width = this.sys.game.config.width / 2;\n    let height = this.sys.game.config.height / 2;\n\n    //\u8a2d\u5b9a\u4f4d\u7f6e\n    bg.setPosition(width, height);\n\n    // \u5efa\u7acb\u8349\u76ae\u7fa4\u7d44\n    // \u4e00\u6b21\u9577\u5341\u64ae\n    this.grassland = this.add.group({\n      key: "grass",\n      repeat: 10, //\u7a2e\u5341\u64ae\n      setXY: {\n        x: 10, // \u5f9e X 10 \u958b\u59cb\n        y: 250, // \u5f9e Y 250 \u958b\u59cb\n        stepX: 55, // \u6bcf\u9593\u969410\u7a2e\u4e00\u64ae\n        stepY: 0,\n      },\n    });\n\n    // \u4e00\u6b21\u4fee\u6539\n    this.grassland.getChildren().forEach((item) => {\n      item.setScale(0.5);\n    });\n  }\n}\n')),(0,s.kt)("h3",{id:"\u4eca\u5929\u6211\u5011\u5b78\u6703\u4e86\u5927\u91cf\u8907\u88fd\u5834\u666f\u4e2d\u7684\u7269\u4ef6\u4e86\u5927\u5bb6\u53ef\u4ee5\u8a66\u8457\u5728\u6c99\u6f20\u88e1\u64b2\u6eff\u66f4\u591a\u7684\u8349"},"\u4eca\u5929\u6211\u5011\u5b78\u6703\u4e86\u5927\u91cf\u8907\u88fd\u5834\u666f\u4e2d\u7684\u7269\u4ef6\u4e86\uff0c\u5927\u5bb6\u53ef\u4ee5\u8a66\u8457\u5728\u6c99\u6f20\u88e1\u64b2\u6eff\u66f4\u591a\u7684\u8349"),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"\u904a\u6232\u5834\u666f"},"\u904a\u6232\u5834\u666f"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'class GameScene extends Phaser.Scene {\n  constructor() {\n    super({ key: "gameScene" });\n  }\n\n  /**\n   * \u8f09\u5165\u7d20\u6750\n   */\n  preload() {\n    // \u8f09\u5165\u7d20\u6750\n    // bg1 -> \u5716\u7247\u8f09\u5165\u5f8c\u7684\u7269\u4ef6\u540d\u7a31(key)\n    this.load.image("bg1", "../assets/backgrounds/desert.webp");\n\n    // \u8f09\u5165\u8349\u76ae\n    this.load.image("grass", "../assets/others/Grass.png");\n  }\n\n  /**\n   * \u751f\u6210\u7269\u4ef6\n   */\n  create() {\n    // 1. \u80cc\u666f\n    let bg = this.add.sprite(0, 0, "bg1");\n\n    //\u53d6\u5f97\u5bec\u9ad8\n    let width = this.sys.game.config.width / 2;\n    let height = this.sys.game.config.height / 2;\n\n    //\u8a2d\u5b9a\u4f4d\u7f6e\n    bg.setPosition(width, height);\n\n    // \u5efa\u7acb\u8349\u76ae\u7fa4\u7d44\n    // \u4e00\u6b21\u9577\u5341\u64ae\n    this.grassland = this.add.group({\n      key: "grass",\n      repeat: 10, //\u7a2e\u5341\u64ae\n      setXY: {\n        x: 10, // \u5f9e X 10 \u958b\u59cb\n        y: 250, // \u5f9e Y 250 \u958b\u59cb\n        stepX: 55, // \u6bcf\u9593\u969410\u7a2e\u4e00\u64ae\n        stepY: 0,\n      },\n    });\n\n    // \u4e00\u6b21\u4fee\u6539\n    this.grassland.getChildren().forEach((item) => {\n      item.setScale(0.5);\n    });\n  }\n}\n')),(0,s.kt)("h3",{id:"\u4e3b\u7a0b\u5f0f"},"\u4e3b\u7a0b\u5f0f"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Game-day8</title>\n</head>\n\n<body>\n    <div id="app"></div>\n\n    <script src="../lib/phaser.min.js"><\/script>\n    <script src="./scenes/gameScene.js"><\/script>\n    <script>\n        // \u5ba3\u544a\u4e00\u500b\u5834\u666f\n        let scene = new GameScene();\n\n        // \u5ba3\u544a\u5834\u666f\u7684\u57fa\u672c\u8cc7\u8a0a\n        let config = {\n            type: Phaser.AUTO,\n            width: 600, // \u5bec\n            height: 300, // \u9ad8\n        }\n\n        //\u555f\u52d5\u904a\u6232\n        let game = new Phaser.Game(config)\n\n        //\u52a0\u8f09\u5834\u666f\n        game.scene.add(\'gameScene\', scene);\n        //\u555f\u52d5\u5834\u666f\n        game.scene.start(\'gameScene\');\n    <\/script>\n\n</body>\n\n</html>\n')))}h.isMDXComponent=!0}}]);