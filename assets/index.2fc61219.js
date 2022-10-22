import{c as N}from"./react-dom.6093bb13.js";import{L as g,H as j}from"./react-router-dom.dd0e15e7.js";import{j as n,F as s,a as t,R as $}from"./react-markdown.7bf3d9a7.js";import{O,a as M,d as H,e,N as q,b as K}from"./react-router.d62c1e10.js";import{R as L}from"./react.190e4860.js";import{b as T}from"./react-lazy-load-image-component.52e7b256.js";import{r as V}from"./remark-gfm.08b713de.js";import{S as U,d as _}from"./react-syntax-highlighter.11e8ee03.js";import{g as R}from"./react-ga4.ac29b200.js";import"./scheduler.6cb12cf2.js";import"./@remix-run.0f90e68c.js";import"./remark-parse.00dd2888.js";import"./mdast-util-from-markdown.c8b8893b.js";import"./mdast-util-to-string.8bc2e9c1.js";import"./micromark.5019e94c.js";import"./micromark-util-combine-extensions.3e12e0b8.js";import"./micromark-util-chunked.d678dd6d.js";import"./micromark-factory-space.cd167e39.js";import"./micromark-util-character.472f60a0.js";import"./micromark-core-commonmark.dc633a3e.js";import"./micromark-util-classify-character.93e0b164.js";import"./micromark-util-resolve-all.11047968.js";import"./decode-named-character-reference.706ddea9.js";import"./micromark-util-subtokenize.6d5e7083.js";import"./micromark-factory-destination.0e7bb721.js";import"./micromark-factory-label.2e9c4966.js";import"./micromark-factory-title.aa9185af.js";import"./micromark-factory-whitespace.3e261dbf.js";import"./micromark-util-normalize-identifier.f257cb72.js";import"./micromark-util-html-tag-name.5207f868.js";import"./micromark-util-decode-numeric-character-reference.9eaaae1c.js";import"./micromark-util-decode-string.d7d7e948.js";import"./unist-util-stringify-position.e39b5eb6.js";import"./prop-types.35640cc6.js";import"./property-information.1f74bece.js";import"./unist-util-visit.a7a81adc.js";import"./unist-util-visit-parents.62f12f83.js";import"./unist-util-is.8abf3982.js";import"./react-is.86684602.js";import"./@babel.75ac2d5c.js";import"./hast-util-whitespace.8f8023d5.js";import"./space-separated-tokens.9ca30725.js";import"./comma-separated-tokens.e44b482b.js";import"./style-to-object.0c02c56a.js";import"./inline-style-parser.6dc90e75.js";import"./unified.72277873.js";import"./bail.26bb36c7.js";import"./is-buffer.19a6d344.js";import"./extend.57c43b10.js";import"./is-plain-obj.c90db913.js";import"./trough.f22441a1.js";import"./vfile.1aead541.js";import"./vfile-message.61c5e3c2.js";import"./remark-rehype.aa0b5315.js";import"./mdast-util-to-hast.2a683211.js";import"./unist-builder.25c4ba97.js";import"./unist-util-position.4cd18ce8.js";import"./unist-util-generated.8f78f123.js";import"./mdast-util-definitions.00f4c50f.js";import"./micromark-util-sanitize-uri.77a0706b.js";import"./micromark-util-encode.df910363.js";import"./mdurl.d391f11c.js";import"./trim-lines.7e841c49.js";import"./micromark-extension-gfm.d9294311.js";import"./micromark-extension-gfm-autolink-literal.917e39e7.js";import"./micromark-extension-gfm-footnote.302a264f.js";import"./micromark-extension-gfm-strikethrough.fac6750f.js";import"./micromark-extension-gfm-table.8780247c.js";import"./micromark-extension-gfm-task-list-item.ac480246.js";import"./mdast-util-gfm.9ad3ff77.js";import"./mdast-util-gfm-autolink-literal.44a03ca8.js";import"./ccount.9f5e0ed9.js";import"./mdast-util-find-and-replace.75ec4cdc.js";import"./mdast-util-gfm-footnote.5af08c84.js";import"./mdast-util-to-markdown.dff2b3a8.js";import"./mdast-util-gfm-strikethrough.a6e485a4.js";import"./mdast-util-gfm-task-list-item.2e82fe4a.js";import"./mdast-util-gfm-table.9b33e91f.js";import"./markdown-table.238e00e3.js";import"./refractor.e8537c6f.js";import"./hastscript.1dccabeb.js";import"./xtend.45b7f156.js";import"./hast-util-parse-selector.8c727e52.js";import"./parse-entities.f4af6d03.js";import"./character-entities-legacy.af741f7d.js";import"./character-reference-invalid.93d522b8.js";import"./is-decimal.0d4f2058.js";import"./is-hexadecimal.d90235b6.js";import"./is-alphanumerical.944fb900.js";import"./is-alphabetical.8e6a3b93.js";(function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))D(c);new MutationObserver(c=>{for(const h of c)if(h.type==="childList")for(const p of h.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&D(p)}).observe(document,{childList:!0,subtree:!0});function C(c){const h={};return c.integrity&&(h.integrity=c.integrity),c.referrerpolicy&&(h.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?h.credentials="include":c.crossorigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function D(c){if(c.ep)return;c.ep=!0;const h=C(c);fetch(c.href,h)}})();function a(){return n(s,{children:n("main",{className:"dark:bg-gray-800 font-mono bg-amber-100 relative overflow-hidden h-screen",children:n(O,{})})})}var r=(i=>(i.Home="/",i.About="/About",i.Find="/continue",i.Portfolio="/portfolio",i.Continue="/continue",i.P5Js="/p5js",i.LineAndLoop="/lineAndLoop",i.MapFunc="/mapFunc",i.Gradient="/gradient",i.Wave="/wave",i.MethodArc="/methodArc",i.RpgGameV1="/rpgGameV1",i.PhaserPage="/phaserPage",i.D1Ph3="/D1Ph3",i.D2Ph3="/D2Ph3",i.D3Ph3="/D3Ph3",i.D4Ph3="/D4Ph3",i.D5Ph3="/D5Ph3",i.D6Ph3="/D6Ph3",i.D7Ph3="/D7Ph3",i.D8Ph3="/D8Ph3",i.D9Ph3="/D9Ph3",i.D10Ph3="/D10Ph3",i.IronMan13="/ironMan13",i.D1no13="/d1no13",i.D2no13="/d2no13",i.D3no13="/d3no13",i.D4no13="/d4no13",i.D5no13="/d5no13",i.D6no13="/d6no13",i.D7no13="/d7no13",i.D8no13="/d8no13",i.D9no13="/d9no13",i.D10no13="/d10no13",i.D11no13="/d11no13",i.D12no13="/d12no13",i.D13no13="/d13no13",i.D14no13="/d14no13",i.D15no13="/d15no13",i.D16no13="/d16no13",i.D17no13="/d17no13",i.D18no13="/d18no13",i.D19no13="/d19no13",i.D20no13="/d20no13",i.D21no13="/d21no13",i.D22no13="/d22no13",i.D23no13="/d23no13",i.D24no13="/d24no13",i.D25no13="/d25no13",i.D26no13="/d26no13",i.D27no13="/d27no13",i.D28no13="/d28no13",i.D29no13="/d29no13",i.D30no13="/d30no13",i.D31no13="/d31no13",i.CsharpEventHome="/csharpEventHome",i.CsDelegate1="/csDelegate1",i.CsDelegate2="/csDelegate2",i.CsDelegate3="/csDelegate3",i.CsDelegate4="/csDelegate4",i.CsDelegate5="/csDelegate5",i.CsDelegate6="/csDelegate6",i.CsDelegate7="/csDelegate7",i.OAuthNote="/oAuthNote",i.OAuthNote1="/oAuthNote1",i.UnitNote="/unitNote",i.UnitNote1="/unitNote1",i.DesignPattern="/designPattern",i.DPOverview1="/dPOverview1",i.DPOverview2="/dPOverview2",i.DPOverview3="/dPOverview3",i.DPOopOverview="/dPOopOverview",i.SRP="/sRP",i.OCP="/oCP",i.LSP="/lSP",i.ISP="/iSP",i.DIP="/dIP",i.FMP="/fMP",i.SFP="/sFP",i))(r||{});function z(){return t("div",{className:"hidden md:block absolute -bottom-32 -left-32 w-96 h-96",children:[t("div",{className:"absolute text-extrabold text-xl right-12 z-20 text-start top-1/4",children:[n("span",{className:"text-7xl",children:"\u{1F423}"}),n("p",{children:"Go to my Github"}),n("a",{href:"https://github.com/LonelyYeezhiChicken",className:"underline",children:"Let's go \u{1F413}"})]}),n("svg",{viewBox:"0 0 200 200",className:"absolute w-full h-full",xmlns:"http://www.w3.org/2000/svg",children:n("path",{fill:"#FFDBB9",d:"M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,74.1,43.2C66.7,57.2,57.6,70.6,45,78.1C32.4,85.6,16.2,87.1,0.7,85.9C-14.8,84.7,-29.6,80.9,-43.9,74.4C-58.3,67.9,-72,58.7,-79.8,45.9C-87.7,33,-89.5,16.5,-88.9,0.3C-88.4,-15.9,-85.4,-31.7,-78.1,-45.4C-70.8,-59.1,-59.1,-70.6,-45.3,-77.9C-31.6,-85.3,-15.8,-88.5,-0.3,-88.1C15.3,-87.6,30.5,-83.5,44.7,-76.4Z",transform:"translate(100 100)"})})]})}let S=document.getElementById("root"),B="\u{1F31B}/\u{1F31E}";function w(){S!==null&&(S.className.includes("dark")?S.classList.remove("dark"):S.classList.add("dark"))}function o(){return n("header",{className:"h-24 sm:h-32 flex items-center z-30 w-full",children:t("div",{className:"container mx-auto px-6 flex items-center justify-between",children:[n("div",{className:"uppercase text-gray-800 dark:text-white font-black text-3xl flex items-center"}),t("div",{className:"flex items-center",children:[t("nav",{className:"font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex md:flex items-center hidden",children:[n(g,{to:r.Home.toString(),className:"py-2 px-6 flex hover:text-gray-400",children:"\u96DE\u820D"}),n(g,{to:r.About.toString(),className:"py-2 px-6 flex hover:text-gray-400",children:"\u95DC\u65BC\u4E00\u96BB\u96DE"}),n(g,{to:r.Portfolio.toString(),className:"py-2 px-6 flex hover:text-gray-400",children:"\u4E00\u96BB\u96DE\u7684\u7B46\u8A18"}),n("button",{className:"py-2 px-6 flex hover:text-gray-400 ",onClick:()=>w(),children:B})]}),t("nav",{className:"font-sen text-gray-800 dark:text-white uppercase text-lg sm:flex lg:hidden md:hidden items-center hidden",children:[n(g,{to:r.Home.toString(),className:"py-2 px-6 flex hover:text-gray-400",children:"\u96DE\u820D"}),n(g,{to:r.About.toString(),className:"py-2 px-6 flex hover:text-gray-300",children:"\u95DC\u65BC"}),n(g,{to:r.Portfolio.toString(),className:"py-2 px-6 flex hover:text-gray-400",children:"\u7B46\u8A18"}),n("button",{className:"py-2 px-6 flex hover:text-gray-400",onClick:()=>w(),children:B})]}),t("nav",{className:"font-sen text-gray-800 dark:text-white uppercase text-lg lg:hidden md:hidden sm:hidden  items-center flex",children:[n(g,{to:r.Home.toString(),className:"py-2 px-6 flex hover:text-gray-400",children:"\u{1F3E0}"}),n(g,{to:r.About.toString(),className:"py-2 px-6 flex hover:text-gray-400",children:"\u{1F4CB}"}),n(g,{to:r.Portfolio.toString(),className:"py-2 px-6 flex hover:text-gray-400",children:"\u{1F3A8}"}),n("button",{className:"py-2 px-6 flex hover:text-gray-400",onClick:()=>w(),children:"\u{1F317}"})]})]})]})})}const G="/assets/chicken.71d85fc0.jpg";function J(){return n("div",{className:"flex relative z-20 items-center",children:n("div",{className:"container mx-auto px-6 flex flex-col justify-between items-center relative py-4",children:t("div",{className:"flex flex-col",children:[n("img",{src:G,className:"rounded-full w-28 mx-auto"}),n("p",{className:"text-3xl my-6 text-center dark:text-white",children:"Hi, I'm Chicken \u{1F414}"}),t("h2",{className:"max-w-3xl text-5xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2",children:["\u9019\u662F\u5B64\u7368\u4E00\u96BB\u96DE\u7684",n("br",{}),"\u6545\u4E8B\u5C0F\u5929\u5730"]})]})})})}function A(){return n("footer",{className:"relative bg-blueGray-50 pt-8 pb-6 mt-2 dark:text-gray-300 text-gray-800",children:n("div",{className:"container mx-auto px-4",children:n("div",{className:"flex flex-wrap items-center md:justify-between justify-center",children:n("div",{className:"w-full md:w-6/12 px-4 mx-auto text-center",children:n("div",{className:"text-sm text-blueGray-500 font-semibold py-1",children:"@BY Lonely Yeezhi Chicken"})})})})})}function u(i){L.useEffect(()=>{const m=document.title;return document.title=i,()=>{document.title=m}})}function X(){return u("Chicken Say Hi | Home"),t("div",{className:"h-screen",children:[n(z,{}),n(o,{}),n(J,{})]})}const Y="/assets/Build.96fa5c94.png";function Q(){const i=M();return t(s,{children:[n(o,{}),n("div",{className:"container mx-auto h-screen pt-32 md:pt-0 px-6 z-10 flex items-center justify-between",children:t("div",{className:"container mx-auto px-6 flex flex-col-reverse lg:flex-row justify-between items-center relative",children:[t("div",{className:"w-full mb-16 md:mb-8 text-center lg:text-left",children:[n("h1",{className:"font-light font-sans text-center lg:text-left text-5xl lg:text-8xl mt-12 md:mt-0 text-gray-700 dark:text-white",children:"Sorry, \u6B64\u529F\u80FD\u9084\u5728\u65BD\u5DE5\u4E2D\u5594!"}),n("button",{className:"px-2 py-2 w-36 mt-16 font-light transition ease-in duration-200 hover:bg-yellow-400 border-2 text-lg border-gray-700 bg-yellow-300 focus:outline-none rounded",onClick:()=>{i(r.Home.toString())},children:"\u5148\u56DE\u96DE\u820D\u7B49"})]}),n("div",{className:"block w-full mx-auto md:mt-0 relative max-w-md lg:max-w-2xl",children:n(T.exports.LazyLoadImage,{src:Y,className:"rounded-lg",effect:"blur"})})]})})]})}function Z({text:i}){return n("h1",{className:"uppercase text-gray-800 dark:text-white font-black text-2xl sm:text-3xl flex items-center ml-5",children:i})}function x({pgId:i,title:m,content:C,imgPath:D}){const c=M();function h(p){let d="/";switch(p){case 1:d=r.P5Js.toString();break;case 2:d=r.PhaserPage.toString();break;case 3:d=r.IronMan13.toString();break;case 4:d=r.CsharpEventHome.toString();break;case 5:d=r.OAuthNote.toString();break;case 6:d=r.UnitNote.toString();break;case 7:d=r.DesignPattern.toString();break}c(d)}return t("div",{className:"flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden m-5",children:[n("div",{className:"w-1/3 bg-cover bg-landscape ",children:n(T.exports.LazyLoadImage,{alt:"",src:D,className:"w-90 sm:h-40 h-32",effect:"blur"})}),t("div",{className:"w-2/3 p-4",children:[n("h1",{className:"text-gray-900 font-bold text-3xl",children:m}),n("p",{className:"mt-2 text-gray-600 text-md",children:C}),n("div",{className:"flex item-center justify-end mt-3",children:n("button",{className:"px-3 py-2 bg-gray-800 text-white text-md font-bold uppercase rounded ",onClick:()=>h(i),children:"Go"})})]})]})}function nn({backPath:i,title:m,text:C}){return t("div",{className:"max-w-screen-xl mx-auto p-8 ",children:[n("h2",{className:"text-3xl font-extrabold leading-9 border-b-2 border-gray-600 dark:border-gray-100 text-gray-800 dark:text-white mb-12",children:m}),n(g,{to:i,className:"dark:text-yellow-50 text-gray-900 mb-10",children:n("b",{children:"\u{1F448} \u56DE\u76EE\u9304"})}),n($,{className:"leading-9 text-gray-700 dark:text-white Md",remarkPlugins:[V],components:{code({node:D,inline:c,className:h,children:p,...d}){const k=/language-(\w+)/.exec(h||"");return!c&&k?n(U,{showLineNumbers:!0,style:_,language:k[1],PreTag:"div",...d,children:String(p).replace(/\n$/,"")}):n("code",{className:h,...d,children:p})}},children:C}),n("footer",{className:"m-10 mb-10",children:n(g,{to:i,className:"dark:text-yellow-50 text-gray-900",children:n("b",{children:"\u{1F448} \u56DE\u76EE\u9304"})})})]})}function y({list:i}){return t("section",{className:"overflow-auto max-h-screen relative bg-white dark:bg-gray-900 rounded-lg",children:[n("div",{className:"flex flex-col sm:flex-row",children:t("div",{className:"mb-10",children:[n("h2",{className:"ml-5 mt-10 text-3xl font-extrabold leading-9 border-b-2 border-gray-600 dark:border-gray-100 text-gray-800 dark:text-white mb-12",children:"\u76EE\u9304:"}),n("nav",{className:"mt-10 px-6 ",children:i.map(m=>t(g,{to:m.goPath,className:"hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg ",children:[t("span",{className:"mx-1 sm:mx-4 text-lg font-normal",children:[m.text," \u{1F449}"]}),n("span",{className:"flex-grow text-right"})]},m.id.toString()))})]})}),n(A,{})]})}function l({backPath:i,title:m,text:C}){return n(s,{children:t("section",{className:"container max-h-full overflow-auto pb-10",children:[n("div",{className:"sm:flex",children:n(nn,{backPath:i,title:m,text:C})}),n(A,{})]})})}const rn="/assets/phaser.a01d1b4c.jpg",en="/assets/iron13.713574ec.png",tn="/assets/p5.a9d4ae48.png",sn="/assets/csharp.b60e1f75.png",an="/assets/oauth2.9bf9d399.png",on="/assets/designPattern.c2656f4e.jpg",b={id:1,title:"P5 Js",content:"\u4E3B\u8981\u70BA\u7F8E\u8853\u7528\u9014\u7684JS",imgPath:tn},F={id:2,title:"phaser Js",content:"\u57FA\u65BCJs\u7684\u904A\u6232\u5F15\u64CE",imgPath:rn},f={id:3,title:"\u7B2C\u5341\u4E09\u5C46\u9435\u4EBA\u8CFD",content:"C# \u96DE\u790E\u89C0\u5FF5",imgPath:en},P={id:4,title:"C# \u59D4\u6D3E\u8207\u4E8B\u4EF6",content:"C# \u59D4\u6D3E\u8207\u4E8B\u4EF6\uFF0C\u57FA\u790E\u7BC4\u4F8B",imgPath:sn},v={id:5,title:"OAuth \u7B46\u8A18",content:"<OAuth2\u5BE6\u6230> \u95B1\u8B80\u7B46\u8A18",imgPath:an},E={id:7,title:"\u8A2D\u8A08\u6A21\u5F0F \u7B46\u8A18",content:"\u8A2D\u8A08\u6A21\u5F0F \u95B1\u8B80\u7B46\u8A18",imgPath:on},un="\u{1F3A8} \u4E00\u96BB\u96DE\u7684\u4F5C\u54C1";function ln(){return u("Chicken Say Hi | \u4F5C\u54C1\u96C6"),t(s,{children:[n(o,{}),n(Z,{text:un}),n("section",{className:"max-h-full overflow-auto",children:t("div",{className:"sm:flex relative z-20 items-center mt-2",children:[t("div",{className:"container mx-auto px-6 flex-col justify-between items-center relative py-4 mt-5",children:[n("div",{className:"flex flex-col",children:n(x,{pgId:f.id,title:f.title,content:f.content,imgPath:f.imgPath})}),n("div",{className:"flex flex-col",children:n(x,{pgId:b.id,title:b.title,content:b.content,imgPath:b.imgPath})}),n("div",{className:"flex flex-col",children:n(x,{pgId:v.id,title:v.title,content:v.content,imgPath:v.imgPath})}),n("div",{className:"flex flex-col sm:m-20"})]}),t("div",{className:"container mx-auto px-6 flex-col justify-between items-center relative sm:py-4 sm:mt-5",children:[n("div",{className:"flex flex-col",children:n(x,{pgId:F.id,title:F.title,content:F.content,imgPath:F.imgPath})}),n("div",{className:"flex flex-col",children:n(x,{pgId:P.id,title:P.title,content:P.content,imgPath:P.imgPath})}),n("div",{className:"flex flex-col",children:n(x,{pgId:E.id,title:E.title,content:E.content,imgPath:E.imgPath})}),n("div",{className:"flex flex-col m-20"})]})]})}),n(A,{})]})}const cn=[{id:1,text:"1. \u7DDA\u8207\u8FF4\u5708",goPath:r.LineAndLoop},{id:2,text:"2. map \u51FD\u5F0F",goPath:r.MapFunc},{id:3,text:"3. \u5340\u584A\u6F38\u5C64",goPath:r.Gradient},{id:4,text:"4. \u8072\u6CE2",goPath:r.Wave},{id:5,text:"5. arc \u51FD\u5F0F",goPath:r.MethodArc}];function mn(){return u("Chicken Say Hi | P5 js"),t(s,{children:[n(o,{}),n(y,{list:cn})]})}const hn=`# 1. \u7DDA\u689D\u8207\u8FF4\u5708\r
\u4F7F\u7528\u56DB\u500B\u8FF4\u5708\u5206\u5225\u756B\u51FA\u56DB\u500B\u5340\u584A\u7684\u6A6B\u7DDA\u8207\u76F4\u7DDA\r
\r
### \u6700\u7D42\u7D50\u679C\r
\r
![mdImg](https://github.com/LonelyYeezhiChicken/chicken-personal/blob/main/src/assets/mdImgs/p5js/LineAndLoop/Line.png?raw=true)\r
\r
### \u5716\u8868\u5EA7\u6A19\r
![mdImg](https://github.com/LonelyYeezhiChicken/p5Js-Demo/blob/main/LineAndLoop/LineXY.png?raw=true)\r
\r
\r
### \u5B9A\u7FA9\u756B\u5E03\r
- \u4F7F\u7528\u8B8A\u6578\u5BA3\u544A\u65B9\u5F0F\uFF0C\u5206\u5225\u5BA3\u544A width(\u5BEC\u5EA6),height(\u9AD8\u5EA6)\r
- \` \u5C07\u5BEC\u5EA6\u8A2D\u5B9A\u70BA 400 \`\r
- \` \u5C07\u9AD8\u5EA6\u8A2D\u5B9A\u70BA 400 \`\r
\r
\`\`\`javascript\r
 function setup() {\r
      let width = 400;//\u5B9A\u7FA9\u5BEC\u5EA6\r
      let height = 400;//\u5B9A\u7FA9\u9AD8\u5EA6\r
      createCanvas(width, height);//\u5C07\u8B8A\u6578\u5E36\u5165\u8A2D\u5B9A\u4E2D\r
      console.log("\u5BEC: " + width + " , \u9AD8: " + height);//\u5728console\u4E0A\u9762\u5370\u51FA\u76EE\u524D\u5BEC\u9AD8\r
    }\r
\`\`\`\r
### line()\u4F7F\u7528\u65B9\u5F0F\r
\r
\`\`\`\r
 line(x1, y1, x2, y2);\r
 \`\`\`\r
\r
 - (x1,y1) (x2, y2) \u5404\u5225\u4EE3\u8868\u4E00\u500B\u9EDE\u7684\u5EA7\u6A19\r
 - \u5169\u500B\u9EDE\u76F8\u9023\u4E4B\u5F8C\uFF0C\u6703\u6210\u70BA\u4E00\u689D\u7DDA\r
\r
 ### \u642D\u914Dfor\u4F7F\u7528\r
\r
 1. \u5DE6\u4E0A\u89D2(\u76F4\u7DDA):\r
    - \u9700\u8981\u5F9E\u4E0B\u5230\u4E0A\uFF0C\u7531\u5DE6\u800C\u53F3\u756B\u51FA\u76F4\u7DDA\r
    - \u56E0\u6B64\u7B2C\u4E00\u500B\u9EDE\u6703\u5F9E( 1 X 10 ,400/2) -> (10,200) \u756B\u5230 (1 X 10,0) -> (10,0)\r
    - for\u8FF4\u5708\u689D\u4EF6 -> \u5C0F\u65BC20\u7684\u539F\u56E0\u662F\u56E0\u70BA\uFF0C\u6211\u5011\u6BCF\u6B21\u90FD\u5C07i X 10\uFF0C\u6574\u5F35\u756B\u5E03\u7684\u5BEC\u662F400\u5207\u6210\u4E00\u534A\u70BA200\r
\r
 \`\`\`javascript\r
  for (let i = 1; i <= 20; i++) {\r
        fill(250);\r
        line(i * 10, height / 2, i * 10, 0);\r
      }\r
\`\`\`\r
\r
 2. \u53F3\u4E0A\u89D2(\u6A6B\u7DDA):\r
    - \u9700\u8981\u5F9E\u4E0A\u5230\u4E0B\uFF0C\u7531\u5DE6\u800C\u53F3\u756B\u51FA\u76F4\u7DDA\r
    - \u56E0\u6B64\u7B2C\u4E00\u500B\u9EDE\u6703\u5F9E( 400/2, 1 X 10) -> (200,10) \u756B\u5230 ( 400,1 X 10) -> (400,10)\r
    - for\u8FF4\u5708\u689D\u4EF6 -> \u5C0F\u65BC20\u7684\u539F\u56E0\u662F\u56E0\u70BA\uFF0C\u6211\u5011\u6BCF\u6B21\u90FD\u5C07i X 10\uFF0C\u6574\u5F35\u756B\u5E03\u7684\u9AD8\u662F400\u5207\u6210\u4E00\u534A\u70BA200\r
\r
 \`\`\`javascript\r
   for (let i = 1; i <= 20; i++) {\r
        fill(250);\r
        line(width / 2, i * 10, width, i * 10);\r
      }\r
\`\`\`\r
\r
 3. \u5DE6\u4E0B\u89D2(\u6A6B\u7DDA):\r
    - \u9700\u8981\u5F9E\u4E0B\u5230\u4E0A\uFF0C\u7531\u5DE6\u800C\u53F3\u756B\u51FA\u76F4\u7DDA\r
    - \u56E0\u6B64\u7B2C\u4E00\u500B\u9EDE\u6703\u5F9E( 0,400 - (1 X 10)) -> (0,390) \u756B\u5230 ( 400/2,400 - (1 X 10)) -> (200,390)\r
    - \u7528\u9AD8\u5EA6\u6E1B\u6389 i X 10\u7684\u539F\u56E0\u662F\u56E0\u70BA\uFF0C\u6211\u5011\u8981\u5F9E\u908A\u754C\u5F80\u4E0A\u756B\uFF0C\u56E0\u6B64\u9700\u8981\u5F9E\u6700\u5927\u908A\u754C\u6BCF\u6B21\u5F80\u4E0A\u6E1B\u638910\r
\r
 \`\`\`javascript\r
   for (let i = 1; i <= 20; i++) {\r
        fill(250);\r
        line(0, height - (i * 10), width / 2, height - (i * 10));\r
      }\r
\`\`\`\r
\r
 4. \u53F3\u4E0B\u89D2(\u76F4\u7DDA):\r
    - \u9700\u8981\u5F9E\u4E0B\u5230\u4E0A\uFF0C\u7531\u53F3\u800C\u5DE6\u756B\u51FA\u76F4\u7DDA\r
    - \u56E0\u6B64\u7B2C\u4E00\u500B\u9EDE\u6703\u5F9E( 400 - (1 X 10),0 ) -> (390,0) \u756B\u5230 (  400 - (1 X 10),400/2 ) -> (390,200)\r
    - \u7528\u5BEC\u5EA6\u6E1B\u6389 i X 10\u7684\u539F\u56E0\u662F\u56E0\u70BA\uFF0C\u6211\u5011\u8981\u5F9E\u908A\u754C\u5F80\u5DE6\u756B\uFF0C\u56E0\u6B64\u9700\u8981\u5F9E\u6700\u5927\u908A\u754C\u6BCF\u6B21\u5F80\u4E0A\u6E1B\u638910\r
\r
 \`\`\`javascript\r
   for (let i = 1; i <= 20; i++) {\r
        fill(250);\r
        line(width - (i * 10), height, width - (i * 10), height / 2);\r
      }\r
\`\`\`\r
\r
`,gn="\u{1F3A8} P5 - \u7DDA\u8207\u8FF4\u5708";function dn(){return u("Chicken Say Hi | P5 \u7DDA\u8207\u8FF4\u5708"),t(s,{children:[n(o,{}),n(l,{backPath:r.P5Js,title:gn,text:hn})]})}const pn="### \u8AAA\u660E:\r\n- map \u9996\u5148\u9700\u8981\u8A2D\u5B9A\u539F\u59CB\u53C3\u6578\u7684\u7BC4\u570D\r\n- \u4E26\u8A2D\u5B9A\u8981\u8A2D\u5B9A\u7684\u6BD4\u4F8B\u7BC4\u570D\r\n- \u4E26\u8F38\u5165\u9700\u8981\u7E2E\u653E\u7684\u53C3\u6578\r\n- \u900F\u904E map \u51FD\u5F0F\u6703\u5C07\u8F38\u5165\u7684\u53C3\u6578\u505A\u7B49\u6BD4\u4F8B\u7E2E\u653E\r\n\r\n` map(\u8F38\u5165\u7684\u53C3\u6578 , \u539F\u59CB\u53C3\u6578\u8D77\u59CB\u7BC4\u570D, \u539F\u59CB\u53C3\u6578\u7D50\u675F\u7BC4\u570D, \u7E2E\u653E\u8D77\u59CB\u7BC4\u570D, \u7E2E\u653E\u7D50\u675F\u7BC4\u570D)`\r\n\r\n### \u4F8B:\r\n- \u6211\u5011\u4EE5 `map(1,0,10,0,100)` \u70BA\u4F8B\r\n- \u539F\u59CB\u7684\u7BC4\u570D\u662F `0~10`\r\n- \u6211\u5011\u8981\u5C07\u5B83\u8B8A\u6210 `0~100`\r\n- `0~10` \u8B8A\u6210 `0~100` \u5247\u9700\u8981\u4E58\u4EE510\u500D\r\n- \u56E0\u6B64\u6211\u5011\u9700\u8981\u7E2E\u653E\u7684 `1` \u901A\u904Emap\u51FD\u5F0F\u7684\u8A08\u7B97\u5F8C\uFF0C\u6703\u8B8A\u6210 `10`\r\n\r\n[\u7DDA\u4E0A\u6E2C\u8A66](https://lonelyyeezhichicken.github.io/p5Js-Demo/Method-map/MapDemo.html)",Cn="\u{1F3A8} P5 - map \u51FD\u5F0F";function yn(){return u("Chicken Say Hi | P5 map \u51FD\u5F0F"),t(s,{children:[n(o,{}),n(l,{backPath:r.P5Js,title:Cn,text:pn})]})}const xn=`# 3. \u5340\u584A\u6F38\u5C64 \r
\r
### \u6700\u7D42\u7D50\u679C\r
![mdImg](https://github.com/LonelyYeezhiChicken/p5Js-Demo/raw/main/Gradient/Gradient.png)\r
\r
\r
### 1. \u7C21\u6613\u4F5C\u6CD5\r
1. \u9996\u5148\u5C07\u5BEC\u5EA6\u9664\u4EE5\u4E94\uFF0C\u4F86\u7372\u5F97\u4E94\u500B\u5340\u584A\r
\r
\`\`\`javascript\r
let linePosition = width / 5;\r
\`\`\`\r
2. \u958B\u59CB\u756B\u7B2C\u4E00\u584A\r
\r
\`\`\`javascript\r
    for (let i = 0; i < height; i++) {\r
        let resAmount = map(i, 0, height, 0, 255);\r
        stroke(resAmount, 100, 200);\r
        line(0, i, linePosition, i);\r
    }\r
\`\`\`\r
3. \u56E0\u70BA\u6211\u5011\u9700\u8981\u5728\u6BCF\u500B\u5340\u584A\u5F9E\u4E0A\u800C\u4E0B\u756B\u7DDA\uFF0C\u800C\u4E14\u7DDA\u9700\u8981\u6F38\u5C64\uFF0C\u6240\u4EE5\u4F7F\u7528map\u8A08\u7B97\u7D05\u8272\r
    - \u7531\u65BCi\u5F9E\u4E0A\u800C\u4E0B\uFF0C\u6240\u4EE5i\u7684\u7BC4\u570D\u662F0~\u756B\u5E03\u7684\u9AD8\r
    - \u8981\u8F49\u63DB\u6210RGB\u7684\u7BC4\u570D0~255\r
    - \u9019\u908A\u63DB\u7B97\u51FA\u4F86\u7684\u662FRGB\u4E2D\u7684R(\u7D05\u8272)\r
    - \u7531\u65BC\u96A8\u8457\u5340\u584A\u589E\u9577\u8981\u8F49\u63DB\u7684\u4E09\u539F\u8272\u8D77\u59CB\u4F4D\u7F6E\u9700\u8981\u8D8A\u4F86\u8D8A\u5927\r
    - \u56E0\u6B64\u5C07\u4ED6\u4E58\u4EE530\u7684\u500D\u6578\r
\r
\`\`\`javascript\r
//\u5340\u584A1\r
    let resAmount = map(i, 0, height, 0, 255);\r
\r
//\u5340\u584A2\r
    let resAmount = map(i, 0, height, 30, 255);\r
\r
//\u5340\u584A3\r
    let resAmount = map(i, 0, height, 60, 255);\r
\r
//\u5340\u584A4\r
    let resAmount = map(i, 0, height, 90, 255);\r
\r
//\u5340\u584A5\r
    let resAmount = map(i, 0, height, 120, 255);\r
\`\`\`\r
4. \u8A2D\u5B9A\u756B\u7B46\u984F\u8272(RGB)\r
    - \u5C07\u6BCF\u6B21\u8A08\u7B97\u5F8C\u7684\u7D05\u8272\u7F6E\u5165\uFF0C\u5176\u4ED6\u5169\u8272\u56FA\u5B9A\r
    - \u7531\u65BC\u7D05\u8272\u96A8\u8457\u8FF4\u5708\uFF0C\u6578\u5B57\u6703\u8D8A\u4F86\u8D8A\u5927\r
    - \u56E0\u6B64\u984F\u8272\u6703\u8D8A\u4F86\u8D8A\u504F\u7D2B\u8272\uFF0C\u85C9\u6B64\u9054\u5230\u6F38\u5C64\u6548\u679C\r
\r
\`\`\`javascript\r
stroke(resAmount, 100, 200);\r
\`\`\`\r
5. \u756B\u7DDA\r
    - \u756B\u7DDA\u7684\u91CD\u9EDE\u5728\u65BC\u8981\u7531\u4E0A\u800C\u4E0B -> \u6240\u4EE5\u8D77\u9EDE\u8207\u7D42\u9EDE\u7684y\u90FD\u5E36\u5165i\r
    - x\u8EF8\u5247\u662F\u9700\u8981\u5F9E\u7B2C\u4E00\u500B\u5340\u584A\u7684\u8D77\u9EDE\u756B\u5230\u7B2C\u4E8C\u500B\u5340\u584A\u7684\u8D77\u9EDE\r
    - \u6240\u4EE5\u6211\u5011\u7528\u4E86\u525B\u525B\u7B97\u597D\u7684\u5340\u584A(linePosition)\r
    - \u4F8B\u5982: \u7B2C\u4E00\u584A\u5C31\u662F\u8981\u5F9E0~\u7B2C\u4E00\u584A\u7684\u7D42\u9EDE\uFF0C\u7B2C\u4E8C\u584A\u5247\u662F\u9700\u8981\u5F9E\u7B2C\u4E00\u584A\u7D42\u9EDE\u5230\u7B2C\u4E8C\u584A\u8D77\u9EDE\r
\r
\`\`\`javascript\r
 //\u7B2C\u4E00\u584A (0 ~ \u7B2C\u4E00\u584A)\r
    line(0, i, linePosition, i);\r
\r
//\u7B2C\u4E8C\u584A (\u7B2C\u4E00\u584A ~ \u7B2C\u4E8C\u584A)\r
    line(linePosition * 1, i, linePosition * 2, i);\r
            \r
//\u7B2C\u4E09\u584A (\u7B2C\u4E8C\u584A ~ \u7B2C\u4E09\u584A)\r
    line(linePosition * 2, i, linePosition * 3, i);\r
\r
//\u7B2C\u56DB\u584A (\u7B2C\u4E09\u584A ~ \u7B2C\u56DB\u584A)\r
    line(linePosition * 3, i, linePosition * 4, i);\r
\r
//\u7B2C\u4E94\u584A (\u7B2C\u56DB\u584A ~ \u7B2C\u4E94\u584A)\r
    line(linePosition * 4, i, linePosition * 5, i);\r
\`\`\`\r
---\r
### 2.\u96D9\u8FF4\u5708\u505A\u6CD5\r
- \u96D9\u8FF4\u5708\u4E3B\u8981\u662F\u5C07\u4EE5\u4E0A\u91CD\u8907\u7684\u7A0B\u5F0F\u7CBE\u7C21\u5316\r
\r
1. \u7D05\u8272\u8A08\u7B97\u7684\u7CBE\u7C21\u5316\r
    - \u7531\u65BCRGB\u7684\u7BC4\u570D\u6BCF\u6B21\u90FD\u662F30\u7684\u500D\u6578\r
    - \u56E0\u6B64\u6211\u5011\u5C07\u4ED6*30\r
\r
\`\`\`javascript\r
let resAmount = map(i, 0, height, position * 30, 255);\r
\`\`\`\r
2. \u4E26\u5C07\u5283\u7DDA\u7684\u9EDE\u5230\u9EDE\u4F7F\u7528\u904B\u7B97\u7684\u65B9\u5F0F\r
\r
\`\`\`javascript\r
line(linePosition * position, i, linePosition * (position + 1), i);\r
\`\`\`\r
\r
`,Dn="\u{1F3A8} P5 - \u5340\u584A\u6F38\u5C64";function Sn(){return u("Chicken Say Hi | P5 Gradient"),t(s,{children:[n(o,{}),n(l,{backPath:r.P5Js,title:Dn,text:xn})]})}const bn=`# 4. \u8072\u6CE2\r
\u4F7F\u7528\u5713\u578B\uFF0Cx\u8EF8\u4E0D\u8B8A\uFF0Cy\u8EF8\u4E0A\u4E0B\u79FB\u52D5\u7D44\u6210\u8072\u6CE2\r
\r
\r
### \u8B8A\u6578\u5BA3\u544A\r
- \u5206\u5225\u5BA3\u544A \uFF1B \r
    - \u89D2\u5EA6(\u7528\u65BCy\u8EF8\u8A08\u7B97)\r
\r
    \`\`\`javascript\r
     let angle = 0.0;\r
     \`\`\`\r
    - \u5713\u7684\u534A\u5F91\u70BA20\r
    \r
    \`\`\`javascript\r
     let radius = 20;\r
     \`\`\`\r
### \u8A2D\u5B9A\u5713\u7684\u6A21\u5F0F\r
- \u534A\u5F91\u6700\u5F8C\u70BA\u534A\u5F91\u6A21\u5F0F \`circle(x, y, \u534A\u5F91) \`\r
\r
    \`\`\`javascript\r
     ellipseMode(RADIUS);\r
     \`\`\`\r
- \u534A\u5F91\u6700\u5F8C\u70BA\u76F4\u5F91\u6A21\u5F0F(\u9810\u8A2D\u6A21\u5F0F) \`circle(x, y, \u76F4\u5F91) \`\r
\r
    \`\`\`javascript\r
     ellipseMode(CENTER);\r
     \`\`\`\r
### \u958B\u59CB\u756B\u5713\r
\r
\`\`\`javascript\r
      //\u756B25\u500B\u5713\r
    for (let i = 0; i < 25; i++) {\r
        //\u8A08\u7B97\u5713\u65B0\u7684x\u8EF8(\u56FA\u5B9A\u4E0D\u8B8A)\r
        let x = map(i, 0, 24, radius, width);\r
        //\u8A08\u7B97\u5713\u7684y\u8EF8 \r
        let y = map(sin(angle + frameCount), -1, 1, radius, height);\r
        //\u756B\u5713\r
        circle(x, y, radius);\r
\r
        //\u6BCF\u6B21\u89D2\u5EA6\u90FD\u52A0\u4E0A 2pi / 8.75\r
        angle += TWO_PI / 8.75;\r
    }\r
\`\`\`\r
`,Fn="\u{1F3A8} P5 - \u8072\u6CE2";function fn(){return u("Chicken Say Hi | P5 \u8072\u6CE2"),t(s,{children:[n(o,{}),n(l,{backPath:r.P5Js,title:Fn,text:bn})]})}const Pn=`# 5. arc \u51FD\u5F0F \r
\r
### \u8AAA\u660E:\r
- \u7528\u9014 : \u5728\u87A2\u5E55\u4E0A\u756B\u4E00\u689D \`\u5F27\u7DDA\`\r
- \u6A21\u5F0F : \r
    1. OPEN : open semi-circle (\u534A\u958B\u5713\u5F62) -> \u7D14\u7CB9\u5F27\u7DDA\uFF0C\u4E26\u7121\u9589\u9396 \r
    2. CHORD : closed semi-circle (\u9589\u9396\u534A\u5713) -> \u5C01\u9589\u5F0F\u534A\u5713\r
    3. PIE : a closed pie segment (\u5713\u9905\u5716) -> \u5C01\u9589\u5F0F\u5713\u9905\u5716\r
- \u5F9E\u8D77\u9EDE\u5230\u7D42\u9EDE\uFF0C\u7A0B\u5F0F\u7686\u7531\u9806\u6642\u9418\u7E6A\u88FD\r
\r
\` arc(x, y, w, h, start, stop, [mode], [detail])\`\r
\r
- x : \u9EDE\u7684 x \u8EF8\r
- y : \u9EDE\u7684 y \u8EF8\r
- w : \u5713\u5F27\u7684\u5BEC\u5EA6\r
- h : \u5713\u5F27\u7684\u9AD8\u5EA6\r
- start : \u8D77\u59CB\u7684\u89D2\u5EA6\r
- stop : \u7D50\u675F\u7684\u89D2\u5EA6\r
- [mode] : \u6A21\u5F0F(OPEN, CHORD, PIE) \`\u975E\u5FC5\u586B\`\r
- [detail] : \u6307\u5B9A\u5713\u5F27\u7684\u5468\u9577\uFF0C\u9ED8\u8A8D\u70BA25\uFF0C\u4E0D\u53EF\u8D85\u904E50 \`\u975E\u5FC5\u586B\`\r
\r
### OPEN \u4F8B:\r
- OPEN : open semi-circle (\u534A\u958B\u5713\u5F62) -> \u7D14\u7CB9\u5F27\u7DDA\uFF0C\u4E26\u7121\u9589\u9396 \r
\`\`\`javascript\r
// \u5F9E\u9EDE(100, 150) \u958B\u59CB\uFF0C\u5283\u51FA 200 x 200 \u7684\u958B\u653E\u5F0F\u534A\u5713\r
arc(100, 150, 200, 200, 0, 10, OPEN);\r
\`\`\`\r
- \u7D50\u679C :\r
![mdImg](https://github.com/LINDuke-Lin/p5Js-Demo/raw/main/Method-arc/img/open.png)\r
\r
### CHORD \u4F8B:\r
- CHORD : closed semi-circle (\u9589\u9396\u534A\u5713) -> \u5C01\u9589\u5F0F\u534A\u5713\r
- \u8207\u958B\u653E\u5F0F\u7684\u5DEE\u7570\u53EA\u5728\u534A\u5713\u53E3\u662F\u5426\u6709\u9ED1\u7DDA\r
\`\`\`javascript\r
// \u5F9E\u9EDE(100, 150) \u958B\u59CB\uFF0C\u5283\u51FA 200 x 200 \u7684\u5C01\u9589\u5F0F\u5F0F\u534A\u5713\r
arc(100, 150, 200, 200, 0, 10, CHORD);\r
\`\`\`\r
- \u7D50\u679C : \r
![mdImg](https://github.com/LINDuke-Lin/p5Js-Demo/raw/main/Method-arc/img/chord.png)\r
\r
### PIE \u4F8B:\r
- PIE : a closed pie segment (\u5713\u9905\u5716) -> \u5C01\u9589\u5F0F\u5713\u9905\u5716\r
\`\`\`javascript\r
// \u5F9E\u9EDE(100, 150) \u958B\u59CB\uFF0C\u5283\u51FA 200 x 200 \u7684\u5713\u9905\u5716\r
arc(100, 150, 200, 200, 0, 10, PIE);\r
\`\`\`\r
- \u7D50\u679C : \r
![mdImg](https://github.com/LINDuke-Lin/p5Js-Demo/raw/main/Method-arc/img/pie.png)`,vn="\u{1F3A8} P5 - arc \u51FD\u5F0F";function En(){return u("Chicken Say Hi | P5 arc \u51FD\u5F0F"),t(s,{children:[n(o,{}),n(l,{backPath:r.P5Js,title:vn,text:Pn})]})}const An=[{id:1,text:"1. RPG Game v1 (\u4F5C\u54C1)",goPath:r.RpgGameV1},{id:2,text:"2. \u524D\u8A00",goPath:r.D1Ph3},{id:3,text:"3. \u74B0\u5883",goPath:r.D2Ph3},{id:4,text:"4. \u57FA\u672C\u8A9E\u6CD5(\u4E00) - \u975C\u614B\u8CC7\u6E90",goPath:r.D3Ph3},{id:5,text:"5. \u57FA\u672C\u8A9E\u6CD5(\u4E8C) - \u5716\u7247",goPath:r.D4Ph3},{id:6,text:"6. \u57FA\u672C\u8A9E\u6CD5(\u4E09) - \u5716\u7247\u4E32\u806F",goPath:r.D5Ph3},{id:7,text:"7. \u57FA\u672C\u8A9E\u6CD5(\u56DB) - \u64CD\u4F5C",goPath:r.D6Ph3},{id:8,text:"8. \u57FA\u672C\u8A9E\u6CD5(\u4E94) - \u5834\u666F\u5207\u63DB",goPath:r.D7Ph3}];function wn(){return u("Chicken Say Hi | Phaser js"),t(s,{children:[n(o,{}),n(y,{list:An})]})}const Ln=`### \u95DC\u65BC Phaser 3\r
- \u4EC0\u9EBC\u662FPhaserjs\u5462?\r
  1. \u4ED6\u662F\u4E00\u500B Game Framework\r
- \u70BA\u4EC0\u9EBC\u8981\u9078\u64C7\u5B83\u5462?\r
  1. \u9996\u5148\u56E0\u70BA\u4ED6\u7684\u6587\u4EF6\u975E\u5E38\u5B8C\u6574\uFF0C\u800C\u4E14\u4E00\u76F4\u6301\u7E8C\u5728\u66F4\u65B0\r
  2. \u63A5\u4E0B\u4F86\u6700\u91CD\u8981\u7684\u662F\u4ED6\u9084\u652F\u6301 TypeScript\r
  3. \u56E0\u70BA\u90FD\u5C6C\u65BC\u975C\u614B\u8CC7\u6E90\uFF0C\u56E0\u6B64\u53EF\u4EE5\u4F7F\u7528Github page\u5EFA\u7ACB\u5C6C\u65BC\u4F60\u7684\u5C0F\u904A\u6232\r
\r
### RPG Game\r
- \u9078\u89D2\u756B\u9762\r
![mdImg](https://github.com/LonelyYeezhiChicken/chicken-personal/blob/main/src/assets/mdImgs/phaser/RpgGame/role.png?raw=true)\r
\r
- \u6230\u58EB\r
![mdImg](https://github.com/LonelyYeezhiChicken/chicken-personal/blob/main/src/assets/mdImgs/phaser/RpgGame/w.png?raw=true)\r
- \u5766\u514B\r
![mdImg](https://github.com/LonelyYeezhiChicken/chicken-personal/blob/main/src/assets/mdImgs/phaser/RpgGame/t.png?raw=true)\r
- \u6CD5\u5E2B\r
![mdImg](https://github.com/LonelyYeezhiChicken/chicken-personal/blob/main/src/assets/mdImgs/phaser/RpgGame/m.png?raw=true)\r
\r
### [\u904A\u6232\u9023\u7D50](https://lonelyyeezhichicken.github.io/rpg-game-v1/)`,Tn="\u{1F3AE} RPG Game v1";function kn(){return u("Chicken Say Hi | RPG Game"),t(s,{children:[n(o,{}),n(l,{backPath:r.PhaserPage,title:Tn,text:Ln})]})}const Bn=`### \u7528\u4E86 Phaser 3 \u5BEB\u51FA\u5C6C\u65BC\u81EA\u5DF1\u7684\u7CDE Game\u5C07\u4E0D\u662F\u5922\r
 \u5728\u8A31\u4E45\u4E4B\u524D\u5C31\u4E00\u76F4\u60F3\u5617\u8A66\u5BEB\u904A\u6232\uFF0C\u5BEB\u51FA\u4E00\u6B3E\u5C6C\u65BC\u81EA\u5DF1\u7684\u7CDEGame\uFF0C\r
 \u53EA\u662F\u6BCF\u6B21\u90FD\u5FC3\u6709\u9918\u529B\u4E0D\u8DB3\uFF0C\u56E0\u6B64\u6C7A\u5B9A\u85C9\u7531\u9019\u6B21\u9435\u4EBA\u8CFD\uFF0C\u908A\u5B78\u908A\u5BEB\u6311\u6230\u770B\u770B\u505A\u51FA\u5C6C\u65BC\u81EA\u5DF1\u7684\u7CDEGame\r
\r
### \u95DC\u65BC Phaser 3\r
- \u4EC0\u9EBC\u662FPhaserjs\u5462?\r
  - \u4ED6\u662F\u4E00\u500B Game Framework\r
- \u70BA\u4EC0\u9EBC\u8981\u9078\u64C7\u5B83\u5462?\r
  - \u9996\u5148\u56E0\u70BA\u4ED6\u7684\u6587\u4EF6\u975E\u5E38\u5B8C\u6574\uFF0C\u800C\u4E14\u4E00\u76F4\u6301\u7E8C\u5728\u66F4\u65B0\r
  - \u63A5\u4E0B\u4F86\u6700\u91CD\u8981\u7684\u662F\u4ED6\u9084\u652F\u6301 \`TypeScript\`\r
  - \u56E0\u70BA\u90FD\u5C6C\u65BC\u975C\u614B\u8CC7\u6E90\uFF0C\u56E0\u6B64\u53EF\u4EE5\u4F7F\u7528 Github page\u5EFA\u7ACB\u5C6C\u65BC\u4F60\u7684\u5C0F\u904A\u6232\r
\r
### \u6211 \u8207 Phaser JS\r
- \u5BE6\u969B\u4E0A\u6211\u6C7A\u5B9A\u5BEB\u6587\u7AE0\u6642\uFF0C\u6211\u8207Phaser JS \u63A5\u89F8\u4E0D\u523024\u5C0F\u6642\r
- \u5C0D\u65BC\u6211\u4F86\u8AAA\u9019\u662F\u5C6C\u65BC\u4E00\u500B\u908A\u7814\u7A76\u908A\u5BEB\u7684\u7B46\u8A18\u6587\u7AE0\r
- \u5E0C\u671B\u5404\u4F4D\u8B80\u8005\u5C0D\u904A\u6232\u6210\u54C1\u5225\u6709\u592A\u9AD8\u7684\u671F\u671B\uFF0C\u56E0\u70BA\u4E00\u5207\u90FD\u662F\u4EE5 \`\u7CDEGame\` \u70BA\u51FA\u767C\u9EDE\r
- \u672C\u7CFB\u5217\u6587\u7AE0\u539F\u672C\u662F\u8981\u5728\u7B2C14\u5C46\u9435\u4EBA\u8CFD\u73FE\u5B78\u73FE\u8CE3\u7684\uFF0C\u4F46\u56E0\u70BA\u6642\u9593\u8207\u5176\u4ED6\u4E00\u4E9B\u56E0\u7D20\uFF0C\u5C31\u6C92\u5C07\u4ED6\u767C\u5E03\u51FA\u53BB\u4E86\r
\r
### \u63A5\u4E0B\u4F86\u5C31\u8B93\u6211\u5011\u752830\u5929\u4F86\u898B\u8B58\u7CDEGame\u7684\u5A01\u529B\u5427!!`,Wn="\u{1F3AE} \u524D\u8A00";function In(){return u("Chicken Say Hi | phaser3 \u524D\u8A00"),t(s,{children:[n(o,{}),n(l,{backPath:r.PhaserPage,title:Wn,text:Bn})]})}const Mn=`### [\u5B98\u7DB2](https://phaser.io/)\r
- \u5B98\u7DB2\u5716\u6587\u8C50\u5BCC\r
- \u5167\u5BB9\u975E\u5E38\u8A73\u7D30\r
\r
### [\u975C\u614B\u8CC7\u6E90](https://phaser.io/download/stable)\r
- \u9996\u5148\u53EF\u4EE5\u5230\u5B98\u7DB2\u4E0B\u8F09\u5B8C\u6574\u7684JS\u8207min.js\r
- \u6216\u662F\u60F3\u7528CDN\u4E5F\u53EF\u4EE5\u4F7F\u7528(\u4EE5\u4E0B\u7248\u672C\u6709\u65E5\u5F8C\u6709\u53EF\u80FD\u6703\u66F4\u65B0\uFF0C\u8ACB\u5230\u5B98\u7DB2\u6293\u53D6\u6700\u65B0\u7248)\r
\`\`\` javascript\r
<script src="//cdn.jsdelivr.net/npm/phaser@3.55.2/dist/phaser.js"><\/script>\r
<script src="//cdn.jsdelivr.net/npm/phaser@3.55.2/dist/phaser.min.js"><\/script>\r
\`\`\`\r
- \u5B98\u65B9\u4E5F\u6709\u63D0\u4F9Bnpm(\u4EE5\u4E0B\u7248\u672C\u6709\u65E5\u5F8C\u6709\u53EF\u80FD\u6703\u66F4\u65B0\uFF0C\u8ACB\u5230\u5B98\u7DB2\u6293\u53D6\u6700\u65B0\u7248)\r
\`\`\`\r
npm install phaser@3.55.2\r
\`\`\`\r
\r
### \u7D20\u6750\u5EAB\r
- [Kenney](https://www.kenney.nl/assets)\r
- [\u611B\u7D66](https://www.aigei.com/)\r
\r
### [\u958B\u767C\u5DE5\u5177](https://code.visualstudio.com/)\r
- \u672C\u6B21\u6587\u7AE0\u4F7F\u7528VS Code\r
- \u53EF\u4F9D\u500B\u4EBA\u4F7F\u7528\u7FD2\u6163\u4F86\u9078\u64C7\u958B\u767C\u5DE5\u5177\r
\r
### \u958B\u767C\u8D77\u624B\u5F0F\r
1. \u5EFA\u7ACB\u756B\u5E03(\u904A\u6232\u5448\u73FE\u7684\u5340\u584A)\r
- \u65BC\`<bod>\`\u52A0\u5165\`div\`\u6A19\u7C64\r
\r
\`\`\`html\r
 <div id="app"></div>\r
\`\`\`\r
\r
2. \u5F15\u7528JS\r
- \u65BC\`<bod>\`\u52A0\u5165\`phaser.js\`\u6A19\u7C64\r
\`\`\` javascript\r
<script src="//cdn.jsdelivr.net/npm/phaser@3.55.2/dist/phaser.js"><\/script>\r
<script src="//cdn.jsdelivr.net/npm/phaser@3.55.2/dist/phaser.min.js"><\/script>\r
\`\`\`\r
\r
3. \u5EFA\u7ACB\u5834\u666F\r
- \u5BA3\u544A\u4E00\u500B\u5834\u666F\r
\`\`\` javascript\r
// \u5BA3\u544A\u4E00\u500B\u5834\u666F\r
 let scene = new Phaser.Scene('Game');\r
\`\`\`\r
- \u5BA3\u544A\u5834\u666F\u7684\u57FA\u672C\u8CC7\u8A0A\r
\`\`\` javascript\r
// \u5BA3\u544A\u5834\u666F\u7684\u57FA\u672C\u8CC7\u8A0A\r
 let config = {\r
        type: Phaser.AUTO,\r
        width: 640, // \u5BEC\r
        height: 320, // \u9AD8\r
        scene // \u7D81\u5B9A\u5BA3\u544A\u7684\u5834\u666F\r
    }\r
\`\`\`\r
- \u555F\u52D5\u904A\u6232\r
\`\`\` javascript\r
 let game = new Phaser.Game(config)\r
\`\`\`\r
\r
4. \u4F7F\u7528\`Open with Live Server\`\u555F\u52D5\u904A\u6232\r
- \u53EF\u4EE5\u770B\u5230\u756B\u9762\u4E0A\u6709\u4E00\u584A\u9ED1\u9ED1\u7684\u5340\u57DF\r
- \u8868\u793A\u6210\u529F\u4E86\u5594\r
\r
\r
### \u4ECA\u5929\u4ECB\u7D39\u4E86\u57FA\u672C\u7684\u958B\u767C\u74B0\u5883\u8207\u958B\u767C\u7684\u8D77\u624B\u5F0F\uFF0C\u660E\u5929\u5C31\u8981\u958B\u59CB\u7DF4\u7FD2 Phaser \u4E86\u5594\r
\r
---\r
### \u7A0B\u5F0F\u539F\u78BC\r
\r
\`\`\` javascript\r
<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta http-equiv="X-UA-Compatible" content="IE=edge">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Game-day1</title>\r
</head>\r
\r
<body>\r
    <div id="app"></div>\r
\r
    <script src="../lib/phaser.min.js"><\/script>\r
    <script>\r
        // \u5BA3\u544A\u4E00\u500B\u5834\u666F\r
        let scene = new Phaser.Scene('Game');\r
        // \u5BA3\u544A\u5834\u666F\u7684\u57FA\u672C\u8CC7\u8A0A\r
        let config = {\r
            type: Phaser.AUTO,\r
            width: 640, // \u5BEC\r
            height: 320, // \u9AD8\r
            scene // \u7D81\u5B9A\u5BA3\u544A\u7684\u5834\u666F\r
        }\r
        //\u555F\u52D5\u904A\u6232\r
        let game = new Phaser.Game(config)\r
    <\/script>\r
\r
</body>\r
\r
</html>\r
\`\`\``,Rn="\u{1F3AE} \u74B0\u5883";function Gn(){return u("Chicken Say Hi | phaser3 \u74B0\u5883"),t(s,{children:[n(o,{}),n(l,{backPath:r.PhaserPage,title:Rn,text:Mn})]})}const Nn=`### \u4ECA\u5929\u958B\u59CB\u4F86\u628A\u80CC\u666F\u8207\u89D2\u8272\u52A0\u8F09\u5230\u904A\u6232\u8CC7\u6E90\u88E1\u9762\u5427!\r
\r
## \u57FA\u672C phaser.js \u529F\u80FD - \u52A0\u8F09\u7D20\u6750\r
### \u4F7F\u7528 \`preload\`\r
- \u9019\u6B65\u9A5F\u7A31\u70BA **\u9810\u52A0\u8F09**\r
1. \u5148\u5230config\u7D81\u5B9A\u4E8B\u4EF6\r
\`\`\`javascript\r
 // \u5BA3\u544A\u5834\u666F\u7684\u57FA\u672C\u8CC7\u8A0A\r
        let config = {\r
            type: Phaser.AUTO,\r
            width: 600, // \u5BEC\r
            height: 300, // \u9AD8\r
            // \u7D81\u5B9A\u5BA3\u544A\u7684\u5834\u666F\r
            scene: {\r
                preload: preload,\r
            }\r
        }\r
\`\`\`\r
2. \`preload()\` \u5C31\u8207preload\u7684\u4E8B\u4EF6\u7D81\u8A02\u4E86\r
\`\`\`javascript\r
function preload() {\r
 // \u8F09\u5165\u7D20\u6750   \r
}\r
\`\`\`\r
\r
### \u8F09\u5165\u8CC7\u6E90 - \u80CC\u666F\u5716\r
1. \u5148\u5EFA\u7ACB\u4E00\u500B\u8CC7\u6599\u593E\r
2. \u540D\u7A31\u547D\u540D\u70BA \`assets\`\r
3. \u518D\u5230\u88E1\u9762\u5EFA\u7ACB\u4E00\u500B \`backgroungs\` \u7684\u8CC7\u6599\u593E\r
4. \u5C07\u80CC\u666F\u5716\u7247\u653E\u5230\u88E1\u9762\r
5. \u5C07\u5716\u7247\u5F15\u5165 \r
   \r
\r
\`\`\`javascript\r
function preload(){\r
  // \u8F09\u5165\u7D20\u6750   \r
 // bg1 -> \u5716\u7247\u8F09\u5165\u5F8C\u7684\u7269\u4EF6\u540D\u7A31(key)\r
  this.load.image('bg1', '../assets/backgrounds/bg_1.webp');\r
}\r
\`\`\`\r
\r
  ![mdImg](https://raw.githubusercontent.com/LonelyYeezhiChicken/chicken-personal/main/src/assets/mdImgs/phaser/note/backgrounds/bg_1.webp)\r
\r
### \u8F09\u5165\u8CC7\u6E90 - \u89D2\u8272\u5716\r
1.  \u5728 \`assets\` \u88E1\u9762\u5EFA\u7ACB\u4E00\u500B \`roles\` \u7684\u8CC7\u6599\u593E\r
2. \u5C07\u80CC\u666F\u5716\u7247\u653E\u5230\u88E1\u9762\r
3. \u5C07\u5716\u7247\u5F15\u5165\r
\r
\`\`\`javascript\r
function preload(){\r
  // \u8F09\u5165\u7D20\u6750   \r
 // bg1 -> \u5716\u7247\u8F09\u5165\u5F8C\u7684\u7269\u4EF6\u540D\u7A31(key)\r
  this.load.image('bg1', '../assets/backgrounds/bg_1.webp');\r
  this.load.image('player1', '../assets/roles/alpaca.png');\r
}\r
\`\`\`\r
  ![\u8349\u6CE5\u99AC\u5716](https://github.com/LonelyYeezhiChicken/chicken-personal/blob/main/src/assets/mdImgs/phaser/note/roles/alpaca.png?raw=true)\r
\r
### \u8F09\u5165\u8CC7\u6E90 - \u97F3\u6A02\r
1.  \u5728 \`assets\` \u88E1\u9762\u5EFA\u7ACB\u4E00\u500B \`music\` \u7684\u8CC7\u6599\u593E\r
2. \u5C07\u80CC\u666F\u5716\u7247\u653E\u5230\u88E1\u9762\r
3. \u5C07\u5716\u7247\u5F15\u5165\r
\r
\`\`\`javascript\r
function preload() {\r
 // \u8F09\u5165\u7D20\u6750   \r
 // bg1 -> \u5716\u7247\u8F09\u5165\u5F8C\u7684\u7269\u4EF6\u540D\u7A31(key)\r
  this.load.image('bg1', '../assets/backgrounds/bg_1.webp');\r
  this.load.image('player1', '../assets/roles/alpaca.png');\r
  this.load.audio('music1', '../assets/music/crrect_answer3.mp3');\r
}\r
\`\`\`\r
\r
### \u4EE5\u4E0A\u5C31\u662F\u4ECA\u5929\u7684\u8CC7\u6E90\u52A0\u8F09\uFF0C\u660E\u5929\u5C31\u6703\u958B\u59CB\u4F7F\u7528\u9019\u4E9B\u8CC7\u6E90\u5566!\r
\r
---\r
### \u7A0B\u5F0F\u539F\u78BC\r
\`\`\` javascript\r
<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta http-equiv="X-UA-Compatible" content="IE=edge">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Game-day2</title>\r
</head>\r
\r
<body>\r
    <div id="app"></div>\r
\r
    <script src="../lib/phaser.min.js"><\/script>\r
    <script>\r
        // \u5BA3\u544A\u4E00\u500B\u5834\u666F\r
        let scene = new Phaser.Scene('Game');\r
        // \u5BA3\u544A\u5834\u666F\u7684\u57FA\u672C\u8CC7\u8A0A\r
        let config = {\r
            type: Phaser.AUTO,\r
            width: 600, // \u5BEC\r
            height: 300, // \u9AD8\r
            // \u7D81\u5B9A\u5BA3\u544A\u7684\u5834\u666F\r
            scene: {\r
                preload: preload,\r
            }\r
        }\r
\r
        //\u555F\u52D5\u904A\u6232\r
        let game = new Phaser.Game(config)\r
\r
        //\u8F09\u5165\u7D20\u6750 \r
        function preload() {\r
            // \u8F09\u5165\u7D20\u6750   \r
            // bg1 -> \u5716\u7247\u8F09\u5165\u5F8C\u7684\u7269\u4EF6\u540D\u7A31(key)\r
            this.load.image('bg1', '../assets/backgrounds/bg_1.webp');\r
            this.load.image('player1', '../assets/roles/alpaca.png');\r
            this.load.audio('music1', '../assets/music/crrect_answer3.mp3');\r
        }\r
    <\/script>\r
\r
</body>\r
\r
</html>\r
\`\`\``,jn="\u{1F3AE} \u57FA\u672C\u8A9E\u6CD5(\u4E00) - \u975C\u614B\u8CC7\u6E90";function $n(){return u("Chicken Say Hi | phaser3 - \u975C\u614B\u8CC7\u6E90"),t(s,{children:[n(o,{}),n(l,{backPath:r.PhaserPage,title:jn,text:Nn})]})}const On=`### \u4ECA\u5929\u4F86\u628A\u80CC\u666F\u8207\u89D2\u8272\u986F\u793A\u51FA\u4F86\u5427!\r
\r
## \u57FA\u672C phaser.js \u529F\u80FD - \u751F\u6210\u7269\u4EF6\r
### \u4F7F\u7528 \`create\`\r
1. \u5148\u5230config\u7D81\u5B9A\u4E8B\u4EF6\r
\`\`\`javascript\r
 // \u5BA3\u544A\u5834\u666F\u7684\u57FA\u672C\u8CC7\u8A0A\r
        let config = {\r
            type: Phaser.AUTO,\r
            width: 600, // \u5BEC\r
            height: 300, // \u9AD8\r
            // \u7D81\u5B9A\u5BA3\u544A\u7684\u5834\u666F\r
            scene: {\r
                preload: preload,\r
                create: create\r
            }\r
        }\r
\`\`\`\r
2. \`create()\` \u5C31\u8207create\u7684\u4E8B\u4EF6\u7D81\u8A02\u4E86\r
\`\`\`javascript\r
function create() {\r
 // \u8F09\u5165\u7D20\u6750   \r
}\r
\`\`\`\r
\r
### \u5EFA\u7ACB\u80CC\u666F\u5716\r
1. \u653E\u5165\u5716\u7247\r
2. \`sprite(0, 0, "bg1")\` \u53C3\u6578\u5206\u5225\u70BA (x, y, \u5716\u7247key)\r
\r
\`\`\`javascript\r
 let bg = this.add.sprite(0, 0, "bg1");\r
\`\`\`\r
\r
3. \`!! \u5716\u7247\u9810\u8A2D\u90FD\u4EE5\u4E2D\u5FC3\u9EDE\u4F86\u505A\u5B9A\u4F4D !!\`\r
4. \u56E0\u6B64\u6211\u5011\u53EF\u4EE5\u8A08\u7B97\u756B\u5E03\u7684\u4E2D\u5FC3\u9EDE\u4F86\u7576\u80CC\u666F\u7684\u4E2D\u5FC3\u9EDE\r
5. \`/ 2\` \u4F86\u8A08\u7B97\u756B\u5E03\u7684\u6B63\u4E2D\u5FC3\r
 \r
 \`\`\`javascript\r
    //\u53D6\u5F97\u5BEC\u9AD8\r
    let width = this.sys.game.config.width / 2;\r
    let height = this.sys.game.config.height / 2;\r
\`\`\`\r
\r
6. \u5C07\u80CC\u666F\u64FA\u81F3\u756B\u5E03\u7684\u6B63\u4E2D\u5FC3\r
\r
 \`\`\`javascript\r
    //\u8A2D\u5B9A\u4F4D\u7F6E\r
    bg.setPosition(width, height);\r
\`\`\`\r
\r
### \u7F6E\u5165\u89D2\u8272\r
1. \u653E\u5165\u5716\u7247\r
2. \u76F4\u63A5\u628A\u89D2\u8272\u7F6E\u5165\u6307\u5B9A\u4F4D\u7F6E\r
3. \u9019\u908A\u6211\u5011\u4F7F\u7528 \`this.player\` \u65B9\u4FBF\u65E5\u5F8C\u63A7\u5236\u89D2\u8272\u4F7F\u7528\r
4. \`sprite(0, 0, "bg1")\` \u53C3\u6578\u5206\u5225\u70BA (x, y, \u5716\u7247key)\r
5. \u9019\u908A\u628A \`x, y\` \u5206\u5225\u8A2D\u5B9A\u6210 \`450, 85\` \u8B93\u8349\u6CE5\u99AC\u7AD9\u5728\u5C71\u4E0A\r
\r
\`\`\`javascript\r
    this.player = this.add.sprite(450, 105, "player1");\r
\`\`\`\r
\r
### \u64AD\u653E\u97F3\u6A02\r
1. \u5EFA\u7ACB\u97F3\u6A02\u6A94\u7269\u4EF6\r
2. \u97F3\u6A02\u5C6C\u6027\r
   - \`volume -> \u97F3\u91CF\`\r
   - \`loop -> \u662F\u5426\u8F2A\u64AD\`\r
\r
\`\`\`javascript\r
this.music = this.sound.add('music1', {\r
    volume: 0.2, //\u97F3\u91CF\r
    loop: true // \u662F\u5426\u8F2A\u64AD\r
});\r
\r
this.music.play();\r
\`\`\`\r
\r
### \u4ECA\u5929\u7D42\u65BC\u5B8C\u6210\u4EF0\u671B\u5927\u5730\u7684\u8349\u6CE5\u99AC\u4E86\uFF0C\u656C\u8ACB\u671F\u5F85\u660E\u5929\u7684\u5167\u5BB9\r
\r
---\r
### \u7A0B\u5F0F\u539F\u78BC\r
\`\`\` javascript\r
<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta http-equiv="X-UA-Compatible" content="IE=edge">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Game-day4</title>\r
</head>\r
\r
<body>\r
    <div id="app"></div>\r
\r
    <script src="../lib/phaser.min.js"><\/script>\r
    <script>\r
        // \u5BA3\u544A\u4E00\u500B\u5834\u666F\r
        let scene = new Phaser.Scene('Game');\r
        // \u5BA3\u544A\u5834\u666F\u7684\u57FA\u672C\u8CC7\u8A0A\r
        let config = {\r
            type: Phaser.AUTO,\r
            width: 600, // \u5BEC\r
            height: 300, // \u9AD8\r
            // \u7D81\u5B9A\u5BA3\u544A\u7684\u5834\u666F\r
            scene: {\r
                preload: preload,\r
                create: create\r
            }\r
        }\r
\r
        //\u555F\u52D5\u904A\u6232\r
        let game = new Phaser.Game(config)\r
\r
        //\u8F09\u5165\u7D20\u6750 \r
        function preload() {\r
            // \u8F09\u5165\u7D20\u6750   \r
            // bg1 -> \u5716\u7247\u8F09\u5165\u5F8C\u7684\u7269\u4EF6\u540D\u7A31(key)\r
            this.load.image('bg1', '../assets/backgrounds/bg_1.webp');\r
            this.load.image('player1', '../assets/roles/alpaca.png');\r
            this.load.audio('music1', '../assets/music/crrect_answer3.mp3');\r
        }\r
\r
        //\u751F\u6210\u7269\u4EF6\r
        function create() {\r
            // 1. \u80CC\u666F\r
            let bg = this.add.sprite(0, 0, "bg1");\r
\r
            //\u53D6\u5F97\u5BEC\u9AD8\r
            let width = this.sys.game.config.width / 2;\r
            let height = this.sys.game.config.height / 2;\r
\r
            //\u8A2D\u5B9A\u4F4D\u7F6E\r
            bg.setPosition(width, height);\r
\r
            // 2. \u89D2\u8272\r
            this.player = this.add.sprite(450, 105, "player1");\r
\r
            // 3. \u97F3\u6A02\r
            this.music = this.sound.add('music1', {\r
                volume: 0.2, //\u97F3\u91CF\r
                loop: true // \u662F\u5426\u8F2A\u64AD\r
            });\r
\r
            this.music.play();\r
        }\r
    <\/script>\r
\r
</body>\r
\r
</html>\r
\`\`\` `,Hn="\u{1F3AE} \u57FA\u672C\u8A9E\u6CD5(\u4E8C) - \u5716\u7247";function qn(){return u("Chicken Say Hi | phaser3 - \u5716\u7247"),t(s,{children:[n(o,{}),n(l,{backPath:r.PhaserPage,title:Hn,text:On})]})}const Kn=`### \u4ECA\u5929\u5C31\u4F86\u8B93\u5716\u7247\u52D5\u8D77\u4F86\u5427!\r
- \u9996\u5148\u6211\u5011\u4ECA\u5929\u6703\u65B0\u589E\u4E00\u500B\u884C\u661F\u7684\u7269\u4EF6\r
- \u53EF\u4EE5\u53C3\u8003\u524D\u5E7E\u7BC7\u4F86\u7F6E\u5165\u884C\u661F\u9019\u908A\u5C31\u4E0D\u518D\u591A\u505A\u8D05\u8FF0\r
\r
![mdImg1](https://github.com/LonelyYeezhiChicken/chicken-personal/blob/main/src/assets/mdImgs/phaser/note/backgrounds/planet.png?raw=true)\r
\r
\`\`\`javascript\r
//\u8F09\u5165\u7D20\u6750 \r
function preload() {\r
    // \u8F09\u5165\u7D20\u6750   \r
    // bg1 -> \u5716\u7247\u8F09\u5165\u5F8C\u7684\u7269\u4EF6\u540D\u7A31(key)\r
    this.load.image('bg1', '../assets/backgrounds/bg_1.webp');\r
    this.load.image('planet1', '../assets/backgrounds/planet.png');// \u884C\u661F\r
    this.load.image('player1', '../assets/roles/alpaca.png');\r
    this.load.image('player2', '../assets/roles/pinkAlpaca.png');\r
    this.load.audio('music1', '../assets/music/crrect_answer3.mp3');\r
}\r
\r
//\u751F\u6210\u7269\u4EF6\r
function create() {\r
    // 1. \u80CC\u666F\r
    let bg = this.add.sprite(0, 0, "bg1");\r
\r
    //\u53D6\u5F97\u5BEC\u9AD8\r
    let width = this.sys.game.config.width / 2;\r
    let height = this.sys.game.config.height / 2;\r
\r
    //\u8A2D\u5B9A\u4F4D\u7F6E\r
    bg.setPosition(width, height);\r
\r
    // 2. \u89D2\u8272\r
    this.player = this.add.sprite(450, 105, "player1");\r
\r
    // 3. \u884C\u661F\r
    this.planet1 = this.add.sprite(-100, 40, "planet1");\r
\r
    // 4. \u97F3\u6A02\r
    this.music = this.sound.add('music1', {\r
        volume: 0.2, //\u97F3\u91CF\r
        loop: true // \u662F\u5426\u8F2A\u64AD\r
    });\r
\r
    this.music.play();\r
}\r
\`\`\`\r
\r
\r
## \u57FA\u672C phaser.js \u529F\u80FD - \u521D\u59CB\u5316\r
### \u4F7F\u7528 \`init\`\r
1. \u5148\u5230config\u7D81\u5B9A\u4E8B\u4EF6\r
\`\`\`javascript\r
 // \u5BA3\u544A\u5834\u666F\u7684\u57FA\u672C\u8CC7\u8A0A\r
let config = {\r
    type: Phaser.AUTO,\r
    width: 600, // \u5BEC\r
    height: 300, // \u9AD8\r
    // \u7D81\u5B9A\u5BA3\u544A\u7684\u5834\u666F\r
    scene: {\r
        preload: preload,\r
        create: create,\r
        init: init\r
    }\r
}\r
\`\`\`\r
2. \`init()\` \u5C31\u8207init\u7684\u4E8B\u4EF6\u7D81\u5B9A\u4E86\r
\`\`\`javascript\r
function init() {\r
 // \u8F09\u5165\u7D20\u6750   \r
}\r
\`\`\`\r
\r
### \u521D\u59CB\u5316\u7269\u4EF6\r
1. \u52A0\u5165\u884C\u661F\u7684\u79FB\u52D5\u901F\u5EA6 - \u6211\u5011\u7B49\u7B49\u8981\u8B93\u884C\u661F\u79FB\u52D5\u8D77\u4F86\r
\`\`\`javascript\r
// \u521D\u59CB\u5316\r
function init() {\r
    // \u8A2D\u5B9A \u884C\u661F \u7684\u901F\u5EA6\r
    this.planet1Speed = 3;\r
}\r
\`\`\`\r
2. \u8349\u6CE5\u99AC\u9663\u5217 - \u9019\u662F\u70BA\u4E86\u8B93\u8349\u6CE5\u99AC\u8B8A\u8EAB\u6E96\u5099\u7684\r
\`\`\`javascript\r
// \u521D\u59CB\u5316\r
function init() {\r
    // \u8A2D\u5B9A \u884C\u661F \u7684\u901F\u5EA6\r
    this.planet1Speed = 3;\r
    //\u8349\u6CE5\u99AC\u9663\u5217\r
    this.allPlayer = ['player1', 'player2'];\r
}\r
\`\`\`\r
3. \u8A08\u7B97\u6642\u9593\u8EF8 - \u7528\u4F86\u571F\u70AE\u6642\u9593\u8EF8\u8B8A\u5316\u4F7F\u7528\u7684\uFF0C\u7A0D\u5F8C\u7684\u6587\u7AE0\u6703\u8AAA\u660E\u7528\u9014\r
\`\`\`javascript\r
// \u521D\u59CB\u5316\r
function init() {\r
    // \u8A2D\u5B9A \u884C\u661F \u7684\u901F\u5EA6\r
    this.planet1Speed = 3;\r
    //\u8349\u6CE5\u99AC\u9663\u5217\r
    this.allPlayer = ['player1', 'player2'];\r
    //\u8A08\u7B97\u6642\u9593\u8EF8\r
    this.index = 0;\r
}\r
\`\`\`\r
\r
## \u57FA\u672C phaser.js \u529F\u80FD - \u756B\u9762\u66F4\u65B0\r
### \u4F7F\u7528 \`update\`\r
- \u5B83\u5C6C\u65BC\u4E00\u500B\u5075\u807D\u5668\r
- \u9810\u8A2D\u6BCF\u4E00\u5E40\u662F\u4EE5\u6BEB\u79D2\u70BA\u55AE\u4F4D\u5728\u505A\u66F4\u65B0\r
1. \u5148\u5230config\u7D81\u5B9A\u4E8B\u4EF6\r
\`\`\`javascript\r
 // \u5BA3\u544A\u5834\u666F\u7684\u57FA\u672C\u8CC7\u8A0A\r
let config = {\r
    type: Phaser.AUTO,\r
    width: 600, // \u5BEC\r
    height: 300, // \u9AD8\r
    // \u7D81\u5B9A\u5BA3\u544A\u7684\u5834\u666F\r
    scene: {\r
        preload: preload,\r
        create: create,\r
        init: init,\r
        update: update\r
    }\r
}\r
\`\`\`\r
2. \`init()\` \u5C31\u8207init\u7684\u4E8B\u4EF6\u7D81\u8A02\u4E86\r
\`\`\`javascript\r
function update() {\r
 // \u76E3\u807D\u4E8B\u4EF6\r
}\r
\`\`\`\r
\r
### \u66F4\u65B0\u756B\u9762\r
- \u6211\u5011\u9019\u908A\u5148\u571F\u70AE\u7528 \`this.index\` \u4F86\u7576\u6642\u9593\u57FA\u6E96\u9EDE\r
- \u5728 \`this.index\` \u4F86\u5230 \`50\` \u4E4B\u524D\uFF0C\u8B93\u884C\u661F\u5F80\u53F3\u79FB\u52D5\r
- \u56E0\u6B64\u5728\u9700\u8981\u5C0D\u884C\u661F\u7684 \`x\` \u8EF8\u505A\u589E\u91CF\r
  \r
\`\`\`javascript\r
 //\u66F4\u65B0\u756B\u9762\r
function update() {\r
    // \u884C\u661F\u51FA\u73FE\r
    if (this.index < 50)\r
        this.planet1.x += this.planet1Speed;\r
\r
    this.index++;\r
}\r
\`\`\`\r
\r
- \u63A5\u4E0B\u4F86\u884C\u661F\u5230\u5B9A\u4F4D\u5F8C\r
- \u8349\u6CE5\u99AC\u8981\u8B8A\u8EAB\r
- \u8349\u6CE5\u99AC\u8B8A\u8EAB\u5230 \`this.index < 200\` \u6642\u5C31\u5B8C\u5168\u8B8A\u8EAB\r
- \u9019\u908A\u4F7F\u7528 \`setTexture\` \u4F86\u5207\u63DB\u5716\u7247\r
- \u7531\u65BC\u8349\u6CE5\u99AC\u5716\u7247\u6709\u5169\u5F35\uFF0C\u6211\u5011\u5C31\u5229\u7528\u53D6\u9918\u904B\u7B97\u5B50 \`%\`\r
- \u91DD\u5C0D\u9663\u5217 \`this.allPlayer\` \u7684 \`0,1\` \u5207\u63DB\r
\`\`\`javascript\r
//\u66F4\u65B0\u756B\u9762\r
function update() {\r
    // \u884C\u661F\u51FA\u73FE\r
    if (this.index < 50)\r
        this.planet1.x += this.planet1Speed\r
    //\u8349\u6CE5\u99AC\u8B8A\u8EAB\r
    if (this.index % 5 === 0 && this.index > 80 && this.index < 200)\r
        this.player.setTexture(this.allPlayer[this.index % 2])\r
 \r
    this.index++;\r
}\r
\`\`\`\r
\r
### \u9019\u6A23\u5C31\u5B8C\u6210\u6211\u5011\u4ECA\u5929\u7684 \`\u82B1\u597D\u6708\u5713\uFF0C\u8349\u6CE5\u99AC\u5927\u8B8A\u8EAB\u7684\` \u529F\u80FD\u4E86!\r
\r
---\r
### \u7A0B\u5F0F\u539F\u78BC\r
\`\`\` javascript\r
<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta http-equiv="X-UA-Compatible" content="IE=edge">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Game-day5</title>\r
</head>\r
\r
<body>\r
    <div id="app"></div>\r
\r
    <script src="../lib/phaser.min.js"><\/script>\r
    <script>\r
        // \u5BA3\u544A\u4E00\u500B\u5834\u666F\r
        let scene = new Phaser.Scene('Game');\r
        // \u5BA3\u544A\u5834\u666F\u7684\u57FA\u672C\u8CC7\u8A0A\r
        let config = {\r
            type: Phaser.AUTO,\r
            width: 600, // \u5BEC\r
            height: 300, // \u9AD8\r
            // \u7D81\u5B9A\u5BA3\u544A\u7684\u5834\u666F\r
            scene: {\r
                preload: preload,\r
                create: create,\r
                init: init,\r
                update: update\r
            }\r
        }\r
\r
        //\u555F\u52D5\u904A\u6232\r
        let game = new Phaser.Game(config)\r
\r
        //\u8F09\u5165\u7D20\u6750 \r
        function preload() {\r
            // \u8F09\u5165\u7D20\u6750   \r
            // bg1 -> \u5716\u7247\u8F09\u5165\u5F8C\u7684\u7269\u4EF6\u540D\u7A31(key)\r
            this.load.image('bg1', '../assets/backgrounds/bg_1.webp');\r
            this.load.image('planet1', '../assets/backgrounds/planet.png');\r
            this.load.image('player1', '../assets/roles/alpaca.png');\r
            this.load.image('player2', '../assets/roles/pinkAlpaca.png');\r
            this.load.audio('music1', '../assets/music/crrect_answer3.mp3');\r
        }\r
\r
        //\u751F\u6210\u7269\u4EF6\r
        function create() {\r
            // 1. \u80CC\u666F\r
            let bg = this.add.sprite(0, 0, "bg1");\r
\r
            //\u53D6\u5F97\u5BEC\u9AD8\r
            let width = this.sys.game.config.width / 2;\r
            let height = this.sys.game.config.height / 2;\r
\r
            //\u8A2D\u5B9A\u4F4D\u7F6E\r
            bg.setPosition(width, height);\r
\r
            // 2. \u89D2\u8272\r
            this.player = this.add.sprite(450, 105, "player1");\r
\r
            // 3. \u884C\u661F\r
            this.planet1 = this.add.sprite(-100, 40, "planet1");\r
\r
            // 4. \u97F3\u6A02\r
            this.music = this.sound.add('music1', {\r
                volume: 0.2, //\u97F3\u91CF\r
                loop: true // \u662F\u5426\u8F2A\u64AD\r
            });\r
\r
            this.music.play();\r
        }\r
\r
        // \u521D\u59CB\u5316\r
        function init() {\r
            // \u8A2D\u5B9A \u884C\u661F \u7684\u901F\u5EA6\r
            this.planet1Speed = 3;\r
            //\u8349\u6CE5\u99AC\u9663\u5217\r
            this.allPlayer = ['player1', 'player2'];\r
            //\u8A08\u7B97\u6642\u9593\u8EF8\r
            this.index = 0;\r
        }\r
\r
        //\u66F4\u65B0\u756B\u9762\r
        function update() {\r
            // \u884C\u661F\u51FA\u73FE\r
            if (this.index < 50)\r
                this.planet1.x += this.planet1Speed;\r
\r
            //\u8349\u6CE5\u99AC\u8B8A\u8EAB\r
            if (this.index % 5 === 0 && this.index > 80 && this.index < 200)\r
                this.player.setTexture(this.allPlayer[this.index % 2]);\r
\r
            this.index++;\r
        }\r
    <\/script>\r
\r
</body>\r
\r
</html>\r
\`\`\``,Vn="\u{1F3AE} \u57FA\u672C\u8A9E\u6CD5(\u4E09) - \u5716\u7247\u4E32\u806F";function Un(){return u("Chicken Say Hi | phaser3 - \u5716\u7247\u4E32\u806F"),t(s,{children:[n(o,{}),n(l,{backPath:r.PhaserPage,title:Vn,text:Kn})]})}const _n=`# \u57FA\u672C\u8A9E\u6CD5(\u56DB) - \u64CD\u4F5C\r
\r
### \u4ECA\u5929\u958B\u59CB\u8981\u4F86\u64CD\u4F5C\u756B\u9762\u4E86\r
- \u4ECA\u5929\u7684\u4EFB\u52D9\u662F\u8981\u8B93\u8B8A\u8EAB\u5F8C\u7684\u8349\u6CE5\u99AC\u5674\u706B\r
- \u56E0\u6B64\u8981\u5148\u653E\u9032\u5674\u706B\u7684\u7269\u4EF6\uFF0C\u9019\u6B21\u4F7F\u7528\u7167\u7247\u4E32\u6D41\u7684\u65B9\u5F0F\r
- \u4E4B\u5F8C\u9084\u6703\u6709\u53E6\u4E00\u7A2E\u52D5\u756B\u7684\u4F7F\u7528\u65B9\u5F0F\r
\r
![\u5674\u706B](https://github.com/LonelyYeezhiChicken/chicken-personal/blob/main/src/assets/mdImgs/phaser/note/skills/fire/file-1.png?raw=true)\r
![\u5674\u706B](https://github.com/LonelyYeezhiChicken/chicken-personal/blob/main/src/assets/mdImgs/phaser/note/skills/fire/file-2.png?raw=true)\r
![\u5674\u706B](https://github.com/LonelyYeezhiChicken/chicken-personal/blob/main/src/assets/mdImgs/phaser/note/skills/fire/file-3.png?raw=true)\r
![\u5674\u706B](https://github.com/LonelyYeezhiChicken/chicken-personal/blob/main/src/assets/mdImgs/phaser/note/skills/fire/file-4.png?raw=true)\r
![\u5674\u706B](https://github.com/LonelyYeezhiChicken/chicken-personal/blob/main/src/assets/mdImgs/phaser/note/skills/fire/file-5.png?raw=true)\r
![\u5674\u706B](https://github.com/LonelyYeezhiChicken/chicken-personal/blob/main/src/assets/mdImgs/phaser/note/skills/fire/file-6.png?raw=true)\r
![\u5674\u706B](https://github.com/LonelyYeezhiChicken/chicken-personal/blob/main/src/assets/mdImgs/phaser/note/skills/fire/file-7.png?raw=true)\r
![\u5674\u706B](https://github.com/LonelyYeezhiChicken/chicken-personal/blob/main/src/assets/mdImgs/phaser/note/skills/fire/file-8.png?raw=true)\r
\r
\r
\`\`\`javascript\r
//\u8F09\u5165\u7D20\u6750 \r
function preload() {\r
    // \u8F09\u5165\u7D20\u6750   \r
    // bg1 -> \u5716\u7247\u8F09\u5165\u5F8C\u7684\u7269\u4EF6\u540D\u7A31(key)\r
    this.load.image('bg1', '../assets/backgrounds/bg_1.webp');\r
    this.load.image('planet1', '../assets/backgrounds/planet.png');\r
    this.load.image('player1', '../assets/roles/alpaca.png');\r
    this.load.image('player2', '../assets/roles/pinkAlpaca.png');\r
    this.load.audio('music1', '../assets/music/crrect_answer3.mp3')\r
    //\u8F09\u5165\u6280\u80FD,\u4F7F\u7528\u8FF4\u5708\u8F09\u5165\r
    for (let i = 1; i < 9; i++) {\r
        this.load.image("file" + i, \`../assets/skills/fire/file-\${i}.png\`);\r
    }\r
}\r
\r
//\u751F\u6210\u7269\u4EF6\r
function create() {\r
     // 1. \u80CC\u666F\r
    let bg = this.add.sprite(0, 0, "bg1");\r
\r
    //\u53D6\u5F97\u5BEC\u9AD8\r
    let width = this.sys.game.config.width / 2;\r
    let height = this.sys.game.config.height / 2;\r
\r
    //\u8A2D\u5B9A\u4F4D\u7F6E\r
    bg.setPosition(width, height);\r
\r
    // 2. \u89D2\u8272\r
    this.player = this.add.sprite(450, 105, "player1");\r
\r
    // 3. \u884C\u661F\r
    this.planet1 = this.add.sprite(-100, 40, "planet1");\r
\r
    // 4. \u97F3\u6A02\r
    this.music = this.sound.add('music1', {\r
        volume: 0.2, //\u97F3\u91CF\r
        loop: true // \u662F\u5426\u8F2A\u64AD\r
    });\r
\r
    this.music.play();\r
\r
    // 5. \u6280\u80FD\r
    this.file = this.add.sprite(360, 65, "file1");\r
    this.file.alpha = 0; //\u900F\u660E\u5EA6\u8A2D\u70BA0\r
}\r
\`\`\`\r
\r
### \u521D\u59CB\u5316\u7269\u4EF6\r
- \u6211\u5011\u4F86\u521D\u59CB\u5316\u5674\u706B\u7684\u9663\u5217\r
\r
\`\`\`javascript\r
// \u521D\u59CB\u5316\r
function init() {\r
    // \u8A2D\u5B9A \u884C\u661F \u7684\u901F\u5EA6\r
    this.planet1Speed = 3;\r
    //\u8349\u6CE5\u99AC\u9663\u5217\r
    this.allPlayer = ['player1', 'player2'];\r
    //\u8A08\u7B97\u6642\u9593\u8EF8\r
    this.index = 0; \r
    //\u5674\u706B\r
    this.fileArr = ['file1', 'file2', 'file3', 'file4', 'file5', 'file6', 'file7', 'file8'];\r
}\r
\`\`\`\r
\r
## \u57FA\u672C phaser.js \u529F\u80FD - \u9EDE\u64CA\r
### \u4F7F\u7528 \`input.activePointer.isDown\`\r
- \u5728\u6ED1\u9F20\u6216\u624B\u6A5F\u756B\u9762\u88AB\u6309\u4F4F\u6642\uFF0C\u4ED6\u6703\u662F \`true\`\r
- \u56E0\u6B64\u6211\u5011\u53EF\u4EE5\u5229\u7528 \`update\` \u4E00\u76F4\u66F4\u65B0\u7684\u7279\u6027\r
\r
1. \u9996\u5148\u5148\u505A\u500B\u5224\u65B7\r
   - \u5224\u65B7\u8349\u6CE5\u99AC\u8B8A\u8EAB\u5F8C\u624D\u80FD\u5674\u706B\r
\`\`\`javascript\r
// \u521D\u59CB\u5316\r
function init() {\r
    // \u884C\u661F\u51FA\u73FE\r
    if (this.index < 50)\r
        this.planet1.x += this.planet1Speed;\r
\r
    //\u8349\u6CE5\u99AC\u8B8A\u8EAB\r
    if (this.index % 5 === 0 && this.index > 80 && this.index < 200)\r
        this.player.setTexture(this.allPlayer[this.index % 2]);\r
\r
    //\u8349\u5C3C\u99AC\u5674\u706B\r
    if (this.index > 200) {\r
      console.log('\u8349\u6CE5\u99AC\u8B8A\u8EAB\u4E86!');\r
    }\r
\r
    this.index++;\r
}\r
\`\`\`\r
\r
2. \u5224\u65B7\u662F\u4E0D\u662F\u6709\u88AB\u9EDE\u64CA\r
   - \u4F7F\u7528 \`input.activePointer.isDown\`\r
   - \u642D\u914D \`if\` \u5224\u65B7\u5F0F\r
\`\`\`javascript\r
// \u521D\u59CB\u5316\r
function init() {\r
    // \u884C\u661F\u51FA\u73FE\r
    if (this.index < 50)\r
        this.planet1.x += this.planet1Speed;\r
\r
    //\u8349\u6CE5\u99AC\u8B8A\u8EAB\r
    if (this.index % 5 === 0 && this.index > 80 && this.index < 200)\r
        this.player.setTexture(this.allPlayer[this.index % 2]);\r
\r
    //\u8349\u5C3C\u99AC\u5674\u706B\r
    if (this.index > 200) {\r
        if (this.input.activePointer.isDown) {          \r
        } else {\r
        }\r
    }\r
\r
    this.index++;\r
}\r
\`\`\`\r
3. \u986F\u793A\u8207\u4E0D\u986F\u793A\u7269\u4EF6\r
   - \u5229\u7528\u7269\u4EF6\u7684\u900F\u660E\u5EA6\u4F86\u8B93\u5B83\u986F\u793A\u8207\u4E0D\u986F\u793A\r
   - \`alpha\` \u70BA\u900F\u660E\u5EA6\u7684\u5C6C\u6027\r
   - \`alpha = 0 \` \u8868\u793A\u5168\u900F\u660E\r
   - \`alpha = 100 \` \u8868\u793A\u4E0D\u900F\u660E\r
\`\`\`javascript\r
// \u521D\u59CB\u5316\r
function init() {\r
    // \u884C\u661F\u51FA\u73FE\r
    if (this.index < 50)\r
        this.planet1.x += this.planet1Speed;\r
\r
    //\u8349\u6CE5\u99AC\u8B8A\u8EAB\r
    if (this.index % 5 === 0 && this.index > 80 && this.index < 200)\r
        this.player.setTexture(this.allPlayer[this.index % 2]);\r
\r
    //\u8349\u5C3C\u99AC\u5674\u706B\r
    if (this.index > 200) {\r
        if (this.input.activePointer.isDown) {\r
            this.file.alpha = 100; //\u900F\u660E\u5EA6\u8A2D\u70BA100\r
        } else {\r
            this.file.alpha = 0;//\u900F\u660E\u5EA6\u8A2D\u70BA0\r
        }\r
    }\r
\r
    this.index++;\r
}\r
\`\`\`\r
4. \u5674\u706B\u52D5\u756B\r
    - \u6700\u5F8C\u5229\u7528 \`update\` \u4E00\u76F4\u66F4\u65B0\u7684\u7279\u6027\r
    - \u4F86\u5207\u63DB\u5716\u7247\u8B93\u706B\u7130\u52D5\u756B\u5448\u73FE\r
\`\`\`javascript\r
// \u521D\u59CB\u5316\r
function init() {\r
    // \u884C\u661F\u51FA\u73FE\r
    if (this.index < 50)\r
        this.planet1.x += this.planet1Speed;\r
\r
    //\u8349\u6CE5\u99AC\u8B8A\u8EAB\r
    if (this.index % 5 === 0 && this.index > 80 && this.index < 200)\r
        this.player.setTexture(this.allPlayer[this.index % 2]);\r
\r
    //\u8349\u5C3C\u99AC\u5674\u706B\r
    if (this.index > 200) {\r
        if (this.input.activePointer.isDown) {\r
            this.file.alpha = 100; //\u900F\u660E\u5EA6\u8A2D\u70BA100\r
            this.file.setTexture(this.fileArr[this.index % 8]);\r
        } else {\r
            this.file.alpha = 0;//\u900F\u660E\u5EA6\u8A2D\u70BA0\r
        }\r
    }\r
\r
    this.index++;\r
}\r
\`\`\`\r
### \u4EE5\u4E0A\u5C31\u662F\u4ECA\u5929\u7684\u64CD\u4F5C\u5566!\r
---\r
### \u7A0B\u5F0F\u539F\u78BC\r
\`\`\` javascript\r
<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta http-equiv="X-UA-Compatible" content="IE=edge">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Game-day6</title>\r
</head>\r
\r
<body>\r
    <div id="app"></div>\r
\r
    <script src="../lib/phaser.min.js"><\/script>\r
    <script>\r
        // \u5BA3\u544A\u4E00\u500B\u5834\u666F\r
        let scene = new Phaser.Scene('Game');\r
        // \u5BA3\u544A\u5834\u666F\u7684\u57FA\u672C\u8CC7\u8A0A\r
        let config = {\r
            type: Phaser.AUTO,\r
            width: 600, // \u5BEC\r
            height: 300, // \u9AD8\r
            // \u7D81\u5B9A\u5BA3\u544A\u7684\u5834\u666F\r
            scene: {\r
                preload: preload,\r
                create: create,\r
                init: init,\r
                update: update\r
            }\r
        }\r
\r
        //\u555F\u52D5\u904A\u6232\r
        let game = new Phaser.Game(config)\r
\r
        //\u8F09\u5165\u7D20\u6750 \r
        function preload() {\r
            // \u8F09\u5165\u7D20\u6750   \r
            // bg1 -> \u5716\u7247\u8F09\u5165\u5F8C\u7684\u7269\u4EF6\u540D\u7A31(key)\r
            this.load.image('bg1', '../assets/backgrounds/bg_1.webp');\r
            this.load.image('planet1', '../assets/backgrounds/planet.png');\r
            this.load.image('player1', '../assets/roles/alpaca.png');\r
            this.load.image('player2', '../assets/roles/pinkAlpaca.png');\r
            this.load.audio('music1', '../assets/music/crrect_answer3.mp3');\r
\r
            //\u8F09\u5165\u6280\u80FD,\u4F7F\u7528\u8FF4\u5708\u8F09\u5165\r
            for (let i = 1; i < 9; i++) {\r
                this.load.image("file" + i, \`../assets/skills/fire/file-\${i}.png\`);\r
            }\r
        }\r
\r
\r
        //\u751F\u6210\u7269\u4EF6\r
        function create() {\r
            // 1. \u80CC\u666F\r
            let bg = this.add.sprite(0, 0, "bg1");\r
\r
            //\u53D6\u5F97\u5BEC\u9AD8\r
            let width = this.sys.game.config.width / 2;\r
            let height = this.sys.game.config.height / 2;\r
\r
            //\u8A2D\u5B9A\u4F4D\u7F6E\r
            bg.setPosition(width, height);\r
\r
            // 2. \u89D2\u8272\r
            this.player = this.add.sprite(450, 105, "player1");\r
\r
            // 3. \u884C\u661F\r
            this.planet1 = this.add.sprite(-100, 40, "planet1");\r
\r
            // 4. \u97F3\u6A02\r
            this.music = this.sound.add('music1', {\r
                volume: 0.2, //\u97F3\u91CF\r
                loop: true // \u662F\u5426\u8F2A\u64AD\r
            });\r
\r
            this.music.play();\r
\r
            // 5. \u6280\u80FD\r
            this.file = this.add.sprite(360, 65, "file1");\r
            this.file.alpha = 0; //\u900F\u660E\u5EA6\u8A2D\u70BA0\r
        }\r
\r
        // \u521D\u59CB\u5316\r
        function init() {\r
            // \u8A2D\u5B9A \u884C\u661F \u7684\u901F\u5EA6\r
            this.planet1Speed = 3;\r
            //\u8349\u6CE5\u99AC\u9663\u5217\r
            this.allPlayer = ['player1', 'player2'];\r
            //\u8A08\u7B97\u6642\u9593\u8EF8\r
            this.index = 0;\r
            //\u5674\u706B\r
            this.fileArr = ['file1', 'file2', 'file3', 'file4', 'file5', 'file6', 'file7', 'file8'];\r
        }\r
\r
        function update() {\r
            // \u884C\u661F\u51FA\u73FE\r
            if (this.index < 50)\r
                this.planet1.x += this.planet1Speed;\r
\r
            //\u8349\u6CE5\u99AC\u8B8A\u8EAB\r
            if (this.index % 5 === 0 && this.index > 80 && this.index < 200)\r
                this.player.setTexture(this.allPlayer[this.index % 2]);\r
\r
            //\u8349\u5C3C\u99AC\u5674\u706B\r
            if (this.index > 200) {\r
                if (this.input.activePointer.isDown) {\r
                    this.file.alpha = 100; //\u900F\u660E\u5EA6\u8A2D\u70BA100\r
                    this.file.setTexture(this.fileArr[this.index % 8]);\r
                } else {\r
                    this.file.alpha = 0;//\u900F\u660E\u5EA6\u8A2D\u70BA0\r
                }\r
            }\r
\r
            this.index++;\r
        }\r
\r
    <\/script>\r
\r
</body>\r
\r
</html>\r
\`\`\`\r
`,zn="\u{1F3AE} \u57FA\u672C\u8A9E\u6CD5(\u56DB) - \u64CD\u4F5C";function Jn(){return u("Chicken Say Hi | phaser3 - \u64CD\u4F5C"),t(s,{children:[n(o,{}),n(l,{backPath:r.PhaserPage,title:zn,text:_n})]})}const Xn=`# \u57FA\u672C\u8A9E\u6CD5(\u4E94) - \u5834\u666F\u5207\u63DB\r
\r
### \u6211\u5011\u4ECA\u5929\u4F86\u5C07\u5834\u666F\u6A21\u7D44\u5316\uFF0C\u8B93\u4ED6\u96A8\u6642\u53EF\u4EE5\u5207\u63DB\r
\r
### \u4F7F\u7528 \`class\` \u5305\u88DD\u5834\u666F\r
1. \u9996\u5148\u6211\u5011\u5728\u8207 \`index.html\` \u540C\u5C64\u5EFA\u7ACB \`scenes\` \u8CC7\u6599\u593E\r
2. \u5728\u8CC7\u6599\u593E\u4E2D\u5EFA\u7ACB\u8D77\u59CB\u5834\u666F\u7684\u6A94\u6848 \`gameStart.js\`\r
3. \u4E26\u4E14\u7E7C\u627F \`Phaser.Scene\`\r
\r
\`\`\`javascript\r
class GameStart extends Phaser.Scene {\r
    // do something\r
}\r
\`\`\`\r
\r
### \u8A3B\u518A\u5834\u666F\r
1. \u5229\u7528 \`constructor\` \u7684 \`super()\` \u8A3B\u518A\u5834\u666FKey\r
\`\`\`javascript\r
class GameStart extends Phaser.Scene {\r
  constructor() {\r
    super({ key: "gameStart" });\r
  }\r
    // do something\r
}\r
\`\`\`\r
\r
### \u8F09\u5165\u7D20\u6750\r
- \u7531\u65BC\u7E7C\u627F\u4E86 \`Phaser.Scene\` \r
- \u56E0\u6B64\u6211\u5011\u76F4\u63A5\u53EF\u4EE5\u4F7F\u7528 \`preload()\`\r
- \u5C31\u53EF\u4EE5\u8F09\u5165\u7D20\u6750\u4E86\r
\`\`\`javascript\r
class GameStart extends Phaser.Scene {\r
  constructor() {\r
    super({ key: "gameStart" });\r
  }\r
  /**\r
   * \u8F09\u5165\u7D20\u6750\r
   */\r
  preload() {\r
    this.load.image("bg", "../assets/backgrounds/bg_1.webp");\r
    this.load.image("start1", "../assets/others/start/start1.png");\r
    this.load.image(\r
      "gameName",\r
      "../assets/others/gameName/alpacaSceneName.png"\r
    );\r
  }\r
}\r
\`\`\`\r
\r
### \u751F\u6210\u7269\u4EF6\r
- \u8DDF \`preload()\` \u539F\u7406\u76F8\u540C\r
- \u76F4\u63A5\u4F7F\u7528 \`create()\` \u5373\u53EF\r
- \u6211\u5011\u5728\u9019\u908A\u5148\u8F09\u5165\u80CC\u666F\u8DDF\u904A\u6232\u6A19\u984C\r
\`\`\`javascript\r
class GameStart extends Phaser.Scene {\r
  constructor() {\r
    super({ key: "gameStart" });\r
  }\r
  /**\r
   * \u8F09\u5165\u7D20\u6750\r
   */\r
  preload() {\r
    this.load.image("bg", "../assets/backgrounds/bg_1.webp");\r
    this.load.image("start1", "../assets/others/start/start1.png");\r
    this.load.image(\r
      "gameName",\r
      "../assets/others/gameName/alpacaSceneName.png"\r
    );\r
  }\r
\r
   /**\r
   * \u751F\u6210\u7269\u4EF6\r
   */\r
  create() {\r
    // 1. \u80CC\u666F\r
    let bg = this.add.sprite(0, 0, "bg");\r
\r
    //\u53D6\u5F97\u5BEC\u9AD8\r
    let width = this.sys.game.config.width / 2;\r
    let height = this.sys.game.config.height / 2;\r
\r
    //\u8A2D\u5B9A\u4F4D\u7F6E\r
    bg.setPosition(width, height);\r
\r
    // 2. \u904A\u6232\u6A19\u984C\r
    let gameName = this.add.sprite(width, height - 50, "gameName", 0);\r
\r
  }\r
}\r
\`\`\`\r
\r
### \u9EDE\u64CA\u4E8B\u4EF6\r
- \u63A5\u4E0B\u4F86\u6211\u5011\u8981\u505A\u904A\u6232\u958B\u59CB\u6309\u9215\r
- \u56E0\u6B64\u9700\u8981\u5C0D\u6309\u9215\u7269\u4EF6\u4E0B \`setInteractive()\` \u8868\u793A\u4ED6\u53EF\u4EE5\u8DDF\u73A9\u5BB6\u4E92\u52D5\r
- \u4E26\u4E14\u52A0\u4E0A\u4E00\u500B \`pointerdown\` \u7684\u4E8B\u4EF6\r
- \u53EA\u6709\u624B\u6A5F\u6216\u6ED1\u9F20\u9EDE\u64CA\u4ED6\u90FD\u6703\u88AB\u89F8\u767C\r
\`\`\`javascript\r
class GameStart extends Phaser.Scene {\r
  constructor() {\r
    super({ key: "gameStart" });\r
  }\r
  /**\r
   * \u8F09\u5165\u7D20\u6750\r
   */\r
  preload() {\r
    this.load.image("bg", "../assets/backgrounds/bg_1.webp");\r
    this.load.image("start1", "../assets/others/start/start1.png");\r
    this.load.image(\r
      "gameName",\r
      "../assets/others/gameName/alpacaSceneName.png"\r
    );\r
  }\r
\r
   /**\r
   * \u751F\u6210\u7269\u4EF6\r
   */\r
  create() {\r
    // 1. \u80CC\u666F\r
    let bg = this.add.sprite(0, 0, "bg");\r
\r
    //\u53D6\u5F97\u5BEC\u9AD8\r
    let width = this.sys.game.config.width / 2;\r
    let height = this.sys.game.config.height / 2;\r
\r
    //\u8A2D\u5B9A\u4F4D\u7F6E\r
    bg.setPosition(width, height);\r
\r
    // 2. \u904A\u6232\u6A19\u984C\r
    let gameName = this.add.sprite(width, height - 50, "gameName", 0);\r
\r
    // 3. \u958B\u59CB\u6309\u9215\r
    this.start1 = this.add\r
      .sprite(width, height + 50, "start1", 0)\r
      .setInteractive();\r
\r
    this.start1.on("pointerdown", () => {\r
      console.log('\u6211\u88AB\u9EDE\u4E86!');\r
    });\r
  }\r
}\r
\`\`\`\r
\r
### \u52A0\u5165\u7B2C\u4E8C\u5834\u666F\r
- \u7B2C\u4E8C\u5834\u666F\u662F\u5C07day6\u7684 js\u5206\u96E2\u51FA\u4F86\uFF0C\u56E0\u6B64\u9019\u908A\u4E0D\u5728\u505A\u8A73\u7D30\u7684\u63CF\u8FF0\r
- \u5148\u5728 \`scenes\` \u8CC7\u6599\u593E\u4E2D\u5EFA\u52A0\u5165\u5834\u666F\u7684\u6A94\u6848 \`alpacaScene.js\`\r
- \u4E26\u653E\u5165\u4EE5\u4E0B\u7A0B\u5F0F\u78BC\r
\`\`\`javascript\r
class AlpacaScene extends Phaser.Scene {\r
  constructor() {\r
    super({ key: "alpacaScene" });\r
  }\r
\r
  /**\r
   * \u8F09\u5165\u7D20\u6750\r
   */\r
  preload() {\r
    // \u8F09\u5165\u7D20\u6750\r
    // bg1 -> \u5716\u7247\u8F09\u5165\u5F8C\u7684\u7269\u4EF6\u540D\u7A31(key)\r
    this.load.image("bg1", "../assets/backgrounds/bg_1.webp");\r
    this.load.image("planet1", "../assets/backgrounds/planet.png");\r
    this.load.image("player1", "../assets/roles/alpaca.png");\r
    this.load.image("player2", "../assets/roles/pinkAlpaca.png");\r
    this.load.audio("music1", "../assets/music/crrect_answer3.mp3");\r
\r
    //\u8F09\u5165\u6280\u80FD,\u4F7F\u7528\u8FF4\u5708\u8F09\u5165\r
    for (let i = 1; i < 9; i++) {\r
      this.load.image("file" + i, \`../assets/skills/fire/file-\${i}.png\`);\r
    }\r
  }\r
\r
  /**\r
   * \u751F\u6210\u7269\u4EF6\r
   */\r
  create() {\r
    // 1. \u80CC\u666F\r
    let bg = this.add.sprite(0, 0, "bg1");\r
\r
    //\u53D6\u5F97\u5BEC\u9AD8\r
    let width = this.sys.game.config.width / 2;\r
    let height = this.sys.game.config.height / 2;\r
\r
    //\u8A2D\u5B9A\u4F4D\u7F6E\r
    bg.setPosition(width, height);\r
\r
    // 2. \u89D2\u8272\r
    this.player = this.add.sprite(450, 105, "player1");\r
\r
    // 3. \u884C\u661F\r
    this.planet1 = this.add.sprite(-100, 40, "planet1");\r
\r
    // 4. \u97F3\u6A02\r
    this.music = this.sound.add("music1", {\r
      volume: 0.2, //\u97F3\u91CF\r
      loop: true, // \u662F\u5426\u8F2A\u64AD\r
    });\r
\r
    this.music.play();\r
\r
    // 5. \u6280\u80FD\r
    this.file = this.add.sprite(360, 65, "file1");\r
    this.file.alpha = 0; //\u900F\u660E\u5EA6\u8A2D\u70BA0\r
  }\r
\r
  /**\r
   * \u521D\u59CB\u5316\r
   */\r
  init() {\r
    // \u8A2D\u5B9A \u884C\u661F \u7684\u901F\u5EA6\r
    this.planet1Speed = 3;\r
    //\u8349\u6CE5\u99AC\u9663\u5217\r
    this.allPlayer = ["player1", "player2"];\r
    //\u8A08\u7B97\u6642\u9593\u8EF8\r
    this.index = 0;\r
    //\u5674\u706B\r
    this.fileArr = [\r
      "file1",\r
      "file2",\r
      "file3",\r
      "file4",\r
      "file5",\r
      "file6",\r
      "file7",\r
      "file8",\r
    ];\r
  }\r
\r
  /**\r
   * \u66F4\u65B0\u756B\u9762\r
   */\r
  update() {\r
    // \u884C\u661F\u51FA\u73FE\r
    if (this.index < 50) this.planet1.x += this.planet1Speed;\r
\r
    //\u8349\u6CE5\u99AC\u8B8A\u8EAB\r
    if (this.index % 5 === 0 && this.index > 80 && this.index < 200)\r
      this.player.setTexture(this.allPlayer[this.index % 2]);\r
\r
    //\u8349\u5C3C\u99AC\u5674\u706B\r
    if (this.index > 200) {\r
      if (this.input.activePointer.isDown) {\r
        this.file.alpha = 100; //\u900F\u660E\u5EA6\u8A2D\u70BA100\r
        this.file.setTexture(this.fileArr[this.index % 8]);\r
      } else {\r
        this.file.alpha = 0; //\u900F\u660E\u5EA6\u8A2D\u70BA0\r
      }\r
    }\r
\r
    this.index++;\r
  }\r
}\r
\`\`\`\r
\r
### \u5C07\u5834\u666F\u52A0\u5165\u904A\u6232\u4E2D\r
- \u6211\u5011\u5C07\u7126\u9EDE\u79FB\u56DE \`index.html\` \u4E2D\r
- \u9996\u5148\u8981\u5148\u5F15\u7528\u525B\u525B\u5EFA\u7ACB\u7684\u5169\u500B\u5834\u666F\r
\`\`\`html\r
<body>\r
    <div id="app"></div>\r
\r
    <script src="../lib/phaser.min.js"><\/script>\r
    <script src="./scenes/gameStart.js"><\/script>\r
    <script src="./scenes/alpacaScene.js"><\/script>\r
</body>\r
\`\`\`\r
\r
### \u5BA3\u544A\u5834\u666F\r
- \u56E0\u70BA\u525B\u525B\u5DF2\u7D93\u5C07\u5834\u666F\u5305\u88DD\u6210 \`class\`\r
- \u56E0\u6B64\u6211\u5011\u9019\u908A\u4F7F\u7528 \`new\` \u95DC\u9375\u5B57\u4F86\u5BE6\u4F8B\u5316\u5B83\r
\`\`\`html\r
<body>\r
    <div id="app"></div>\r
    <script src="../lib/phaser.min.js"><\/script>\r
    <script src="./scenes/gameStart.js"><\/script>\r
    <script src="./scenes/alpacaScene.js"><\/script>\r
    <script>\r
        // \u5BA3\u544A\u4E00\u500B\u5834\u666F\r
        let scene = new AlpacaScene();\r
        let sceneStart = new GameStart();       \r
    <\/script>\r
</body>\r
\`\`\`\r
\r
### \u52A0\u5165\u904A\u6232\u57FA\u672C\u8A2D\u5B9A\u8207\u5834\u666F\r
- \u5148\u65B0\u589E\u4E00\u500B\u904A\u6232\r
- \u63A5\u4E0B\u4F86\u5728\u65B0\u589E\u5834\u666F\r
- \u6700\u5F8C\u555F\u52D5\u5834\u666F\r
\`\`\`html\r
<body>\r
    <div id="app"></div>\r
\r
    <script src="../lib/phaser.min.js"><\/script>\r
    <script src="./scenes/gameStart.js"><\/script>\r
    <script src="./scenes/alpacaScene.js"><\/script>\r
    <script>\r
        // \u5BA3\u544A\u4E00\u500B\u5834\u666F\r
        let scene = new AlpacaScene();\r
        let sceneStart = new GameStart();\r
        // \u5BA3\u544A\u904A\u6232\u7684\u57FA\u672C\u8CC7\u8A0A\r
        let config = {\r
            type: Phaser.AUTO,\r
            width: 600, // \u5BEC\r
            height: 300, // \u9AD8\r
        }\r
\r
        //\u555F\u52D5\u904A\u6232\r
        let game = new Phaser.Game(config)\r
\r
        //\u52A0\u8F09\u5834\u666F\r
        game.scene.add('gameStart', sceneStart);\r
        game.scene.add('alpacaScene', scene);\r
        //\u555F\u52D5\u5834\u666F\r
        game.scene.start('gameStart');\r
    <\/script>\r
\r
</body>\r
\`\`\`\r
\r
### \u5834\u666F\u5207\u63DB\r
- \u9019\u6642\u6211\u5011\u56DE\u5230 \`gameStart.js\`\r
- \u52A0\u5165\u4E00\u500B\u5834\u666F\u8DF3\u8F49( \`startGame()\` ) \u7684function\r
- \u4E26\u4E14\u79FB\u9664\u6389\u76EE\u524D\u986F\u793A\u7684\u5834\u666F\r
- \u5982\u679C\u6C92\u6709\u79FB\u9664\u5834\u666F\u6703\u91CD\u758A\r
- \u6700\u5F8C\u5728 \`pointerdown\` \u4E8B\u4EF6\u4E2D\u89F8\u767C\u5B83\r
- \u56E0\u70BA\u5728class\u547C\u53EB\u81EA\u5DF1\u7684function \u56E0\u6B64\u9019\u908A\u9700\u8981\u7528 \`this\`\r
\`\`\`javascript\r
/**\r
 * \u8D77\u59CB\u5834\u666F\r
 */\r
class GameStart extends Phaser.Scene {\r
  constructor() {\r
    super({ key: "gameStart" });\r
  }\r
  /**\r
   * \u8F09\u5165\u7D20\u6750\r
   */\r
  preload() {\r
    this.load.image("bg", "../assets/backgrounds/bg_1.webp");\r
    this.load.image("start1", "../assets/others/start/start1.png");\r
    this.load.image(\r
      "gameName",\r
      "../assets/others/gameName/alpacaSceneName.png"\r
    );\r
  }\r
\r
  /**\r
   * \u751F\u6210\u7269\u4EF6\r
   */\r
  create() {\r
    // 1. \u80CC\u666F\r
    let bg = this.add.sprite(0, 0, "bg");\r
\r
    //\u53D6\u5F97\u5BEC\u9AD8\r
    let width = this.sys.game.config.width / 2;\r
    let height = this.sys.game.config.height / 2;\r
\r
    //\u8A2D\u5B9A\u4F4D\u7F6E\r
    bg.setPosition(width, height);\r
\r
    // 2. \u904A\u6232\u6A19\u984C\r
    let gameName = this.add.sprite(width, height - 50, "gameName", 0);\r
\r
    // 3. \u958B\u59CB\u6309\u9215\r
    this.start1 = this.add\r
      .sprite(width, height + 50, "start1", 0)\r
      .setInteractive();\r
\r
    this.start1.on("pointerdown", () => {\r
      this.startGame();\r
    });\r
  }\r
\r
  /**\r
   * \u5834\u666F\u8DF3\u8F49\r
   */\r
  startGame() {\r
    game.scene.start("alpacaScene");\r
    game.scene.remove("gameStart");\r
  }\r
}\r
\r
\`\`\`\r
\r
### \u4ECA\u5929\u6211\u5011\u5B78\u5230\u4E86\u5982\u4F55\u5229\u7528JS\u7684class\u4F86\u6A21\u7D44\u5316\u5834\u666F\uFF0C\u4E26\u4E14\u5982\u4F55\u53BB\u5207\u63DB\u5B83\uFF0C\u660E\u5929\u6211\u5011\u4F86\u7DF4\u7FD2\u7269\u4EF6\u7684\u8907\u88FD\u5427!\r
---\r
### \u7A0B\u5F0F\u539F\u78BC\r
### AlpacaScene \u5834\u666F\r
\`\`\` javascript\r
class AlpacaScene extends Phaser.Scene {\r
  constructor() {\r
    super({ key: "alpacaScene" });\r
  }\r
\r
  /**\r
   * \u8F09\u5165\u7D20\u6750\r
   */\r
  preload() {\r
    // \u8F09\u5165\u7D20\u6750\r
    // bg1 -> \u5716\u7247\u8F09\u5165\u5F8C\u7684\u7269\u4EF6\u540D\u7A31(key)\r
    this.load.image("bg1", "../assets/backgrounds/bg_1.webp");\r
    this.load.image("planet1", "../assets/backgrounds/planet.png");\r
    this.load.image("player1", "../assets/roles/alpaca.png");\r
    this.load.image("player2", "../assets/roles/pinkAlpaca.png");\r
    this.load.audio("music1", "../assets/music/crrect_answer3.mp3");\r
\r
    //\u8F09\u5165\u6280\u80FD,\u4F7F\u7528\u8FF4\u5708\u8F09\u5165\r
    for (let i = 1; i < 9; i++) {\r
      this.load.image("file" + i, \`../assets/skills/fire/file-\${i}.png\`);\r
    }\r
  }\r
\r
  /**\r
   * \u751F\u6210\u7269\u4EF6\r
   */\r
  create() {\r
    // 1. \u80CC\u666F\r
    let bg = this.add.sprite(0, 0, "bg1");\r
\r
    //\u53D6\u5F97\u5BEC\u9AD8\r
    let width = this.sys.game.config.width / 2;\r
    let height = this.sys.game.config.height / 2;\r
\r
    //\u8A2D\u5B9A\u4F4D\u7F6E\r
    bg.setPosition(width, height);\r
\r
    // 2. \u89D2\u8272\r
    this.player = this.add.sprite(450, 105, "player1");\r
\r
    // 3. \u884C\u661F\r
    this.planet1 = this.add.sprite(-100, 40, "planet1");\r
\r
    // 4. \u97F3\u6A02\r
    this.music = this.sound.add("music1", {\r
      volume: 0.2, //\u97F3\u91CF\r
      loop: true, // \u662F\u5426\u8F2A\u64AD\r
    });\r
\r
    this.music.play();\r
\r
    // 5. \u6280\u80FD\r
    this.file = this.add.sprite(360, 65, "file1");\r
    this.file.alpha = 0; //\u900F\u660E\u5EA6\u8A2D\u70BA0\r
  }\r
\r
  /**\r
   * \u521D\u59CB\u5316\r
   */\r
  init() {\r
    // \u8A2D\u5B9A \u884C\u661F \u7684\u901F\u5EA6\r
    this.planet1Speed = 3;\r
    //\u8349\u6CE5\u99AC\u9663\u5217\r
    this.allPlayer = ["player1", "player2"];\r
    //\u8A08\u7B97\u6642\u9593\u8EF8\r
    this.index = 0;\r
    //\u5674\u706B\r
    this.fileArr = [\r
      "file1",\r
      "file2",\r
      "file3",\r
      "file4",\r
      "file5",\r
      "file6",\r
      "file7",\r
      "file8",\r
    ];\r
  }\r
\r
  /**\r
   * \u66F4\u65B0\u756B\u9762\r
   */\r
  update() {\r
    // \u884C\u661F\u51FA\u73FE\r
    if (this.index < 50) this.planet1.x += this.planet1Speed;\r
\r
    //\u8349\u6CE5\u99AC\u8B8A\u8EAB\r
    if (this.index % 5 === 0 && this.index > 80 && this.index < 200)\r
      this.player.setTexture(this.allPlayer[this.index % 2]);\r
\r
    //\u8349\u5C3C\u99AC\u5674\u706B\r
    if (this.index > 200) {\r
      if (this.input.activePointer.isDown) {\r
        this.file.alpha = 100; //\u900F\u660E\u5EA6\u8A2D\u70BA100\r
        this.file.setTexture(this.fileArr[this.index % 8]);\r
      } else {\r
        this.file.alpha = 0; //\u900F\u660E\u5EA6\u8A2D\u70BA0\r
      }\r
    }\r
\r
    this.index++;\r
  }\r
}\r
\r
\`\`\`\r
### GameStart \u5834\u666F\r
\`\`\` javascript\r
/**\r
 * \u8D77\u59CB\u5834\u666F\r
 */\r
class GameStart extends Phaser.Scene {\r
  constructor() {\r
    super({ key: "gameStart" });\r
  }\r
  /**\r
   * \u8F09\u5165\u7D20\u6750\r
   */\r
  preload() {\r
    this.load.image("bg", "../assets/backgrounds/bg_1.webp");\r
    this.load.image("start1", "../assets/others/start/start1.png");\r
    this.load.image(\r
      "gameName",\r
      "../assets/others/gameName/alpacaSceneName.png"\r
    );\r
  }\r
\r
  /**\r
   * \u751F\u6210\u7269\u4EF6\r
   */\r
  create() {\r
    // 1. \u80CC\u666F\r
    let bg = this.add.sprite(0, 0, "bg");\r
\r
    //\u53D6\u5F97\u5BEC\u9AD8\r
    let width = this.sys.game.config.width / 2;\r
    let height = this.sys.game.config.height / 2;\r
\r
    //\u8A2D\u5B9A\u4F4D\u7F6E\r
    bg.setPosition(width, height);\r
\r
    // 2. \u904A\u6232\u6A19\u984C\r
    let gameName = this.add.sprite(width, height - 50, "gameName", 0);\r
\r
    // 3. \u958B\u59CB\u6309\u9215\r
    this.start1 = this.add\r
      .sprite(width, height + 50, "start1", 0)\r
      .setInteractive();\r
\r
    this.start1.on("pointerdown", () => {\r
      this.startGame();\r
    });\r
  }\r
\r
  /**\r
   * \u5834\u666F\u8DF3\u8F49\r
   */\r
  startGame() {\r
    game.scene.start("alpacaScene");\r
    game.scene.remove("gameStart");\r
  }\r
}\r
\r
\`\`\`\r
### \u4E3B\u7A0B\u5F0F \u5834\u666F\r
\`\`\` javascript\r
<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta http-equiv="X-UA-Compatible" content="IE=edge">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Game-day7</title>\r
</head>\r
\r
<body>\r
    <div id="app"></div>\r
\r
    <script src="../lib/phaser.min.js"><\/script>\r
    <script src="./scenes/gameStart.js"><\/script>\r
    <script src="./scenes/alpacaScene.js"><\/script>\r
    <script>\r
        // \u5BA3\u544A\u4E00\u500B\u5834\u666F\r
        let scene = new AlpacaScene();\r
        let sceneStart = new GameStart();\r
        // \u5BA3\u544A\u904A\u6232\u7684\u57FA\u672C\u8CC7\u8A0A\r
        let config = {\r
            type: Phaser.AUTO,\r
            width: 600, // \u5BEC\r
            height: 300, // \u9AD8\r
        }\r
\r
        //\u555F\u52D5\u904A\u6232\r
        let game = new Phaser.Game(config)\r
\r
        //\u52A0\u8F09\u5834\u666F\r
        game.scene.add('gameStart', sceneStart);\r
        game.scene.add('alpacaScene', scene);\r
        //\u555F\u52D5\u5834\u666F\r
        game.scene.start('gameStart');\r
    <\/script>\r
\r
</body>\r
\r
</html>\r
\`\`\`\r
`,Yn="\u{1F3AE} \u57FA\u672C\u8A9E\u6CD5(\u4E94) - \u5834\u666F\u5207\u63DB";function Qn(){return u("Chicken Say Hi | phaser3 - \u5834\u666F\u5207\u63DB"),t(s,{children:[n(o,{}),n(l,{backPath:r.PhaserPage,title:Yn,text:Xn})]})}const Zn=[{id:1,text:"[Day1]C# \u96DE\u790E\u89C0\u5FF5- C#\u7C21\u4ECB",goPath:r.D1no13},{id:2,text:"[Day2]C# \u96DE\u790E\u89C0\u5FF5- \u8207C#\u958B\u767C\u5343\u91CC\u4F86\u76F8\u898B",goPath:r.D2no13},{id:3,text:"[Day3]C# \u96DE\u790E\u89C0\u5FF5- \u6838\u5FC3\u7684\u6578\u64DA\u6210\u54E1~\u8B8A\u6578(\u4E00)",goPath:r.D3no13},{id:4,text:"[Day4]C# \u96DE\u790E\u89C0\u5FF5- \u6838\u5FC3\u7684\u6578\u64DA\u6210\u54E1~\u8B8A\u6578(\u4E8C)",goPath:r.D4no13},{id:5,text:"[Day5]C# \u96DE\u790E\u89C0\u5FF5- \u8B93\u8B8A\u6578\u5B78\u6703\u4E03\u5341\u4E8C\u8B8A\u7684\u9AD8\u624B~\u904B\u7B97\u5B50",goPath:r.D5no13},{id:6,text:"[Day6]C# \u96DE\u790E\u89C0\u5FF5- \u7A0B\u5F0F\u78BC\u64C1\u6709\u5224\u65B7\u771F\u5047\u7684\u80FD\u529B~\u908F\u8F2F\u904B\u7B97\u5B50",goPath:r.D6no13},{id:7,text:"[Day7]C# \u96DE\u790E\u89C0\u5FF5- \u4F60\u6709\u9078\u64C7\u969C\u7919\u55CE? \u4EA4\u7D66if\u9673\u8FF0\u5F0F\u89E3\u6C7A\u5427!",goPath:r.D7no13},{id:8,text:"[Day8]C# \u96DE\u790E\u89C0\u5FF5- \u5982\u679C\u6C92\u6709\u5982\u679C\uFF0C\u53EA\u6709\u592A\u591A\u7684\u5982\u679Cswitch\u9673\u8FF0\u5F0F",goPath:r.D8no13},{id:9,text:"[Day9]C# \u96DE\u790E\u89C0\u5FF5- \u7701\u53BB\u91CD\u8907\u7A0B\u5F0F\u78BC\u7684\u597D\u5E6B\u624B~for\u8FF4\u5708",goPath:r.D9no13},{id:10,text:"[Day10]C# \u96DE\u790E\u89C0\u5FF5- \u91CD\u64AD\u8207\u505C\u6B62 while\u8FF4\u5708\u8207break",goPath:r.D10no13},{id:11,text:"[Day11]C# \u96DE\u790E\u89C0\u5FF5- \u628A\u8907\u96DC\u7684\u4E8B\u60C5\u8207\u95DC\u4FC2\u7C21\u55AE\u5316~\u5217\u8209\u8207\u7D50\u69CB",goPath:r.D11no13},{id:12,text:"[Day12]C# \u96DE\u790E\u89C0\u5FF5- \u7576\u6211\u5011\u540C\u5728\u4E00\u8D77~\u9663\u5217(Array)",goPath:r.D12no13},{id:13,text:"[Day13]C# \u96DE\u790E\u89C0\u5FF5- \u4F86\u500B\u8F2A\u8FF4\u5427~foreach\u8FF4\u5708",goPath:r.D13no13},{id:14,text:"[Day14]C# \u96DE\u790E\u89C0\u5FF5- \u4E0D\u540C\u5C64\u6B21\u7684\u9663\u5217~\u4E8C\u7DAD\u9663\u5217",goPath:r.D14no13},{id:15,text:"[Day15]C# \u96DE\u790E\u89C0\u5FF5- \u591A\u7B46\u8CC7\u6599\u7684\u597D\u670B\u53CB~List",goPath:r.D15no13},{id:16,text:"[Day16]C# \u96DE\u790E\u89C0\u5FF5- \u865B\u64EC\u4EE3\u5DE5\u5EE0~\u65B9\u6CD5(function)",goPath:r.D16no13},{id:17,text:"[Day17]C# \u96DE\u790E\u89C0\u5FF5- \u50CF\u500B\u90F5\u5DEE\u4E00\u6A23~\u503C\u8207\u5740\u7684\u50B3\u905E",goPath:r.D17no13},{id:18,text:"[Day18]C# \u96DE\u790E\u89C0\u5FF5- \u56DE\u982D\u5427!\u5B69\u5B50~ref \u8207 out \u53C3\u6578\u4FEE\u98FE\u8A5E",goPath:r.D18no13},{id:19,text:"[Day19]C# \u96DE\u790E\u89C0\u5FF5- \u8B93\u6642\u9593\u5012\u8F49\u5427~\u905E\u8FF4",goPath:r.D19no13},{id:20,text:"[Day20]C# \u96DE\u790E\u89C0\u5FF5- \u7269\u4EF6\u5C0E\u5411(oop)\u57FA\u672C\u89C0\u5FF5",goPath:r.D20no13},{id:21,text:"[Day21]C# \u96DE\u790E\u89C0\u5FF5- \u7269\u4EF6\u5C0E\u5411(oop)~\u985E\u5225(class)",goPath:r.D21no13},{id:22,text:"[Day22]C# \u96DE\u790E\u89C0\u5FF5- \u7269\u4EF6\u5C0E\u5411(oop)~\u7269\u4EF6(Object)",goPath:r.D22no13},{id:23,text:"[Day23]C# \u96DE\u790E\u89C0\u5FF5- \u7269\u4EF6\u5C0E\u5411(oop)~\u5C6C\u6027(Property)",goPath:r.D23no13},{id:24,text:"[Day24]C# \u96DE\u790E\u89C0\u5FF5- \u7269\u4EF6\u5C0E\u5411(oop)~\u5EFA\u69CB\u65B9\u6CD5(Constructor)",goPath:r.D24no13},{id:25,text:"[Day25]C# \u96DE\u790E\u89C0\u5FF5- \u5171\u7522\u4E3B\u7FA9\u8005~\u975C\u614B\u6210\u54E1",goPath:r.D25no13},{id:26,text:"[Day26]C# \u96DE\u790E\u89C0\u5FF5- \u7269\u4EF6\u5C0E\u5411(oop)~ \u591A\u8F09(Overload)",goPath:r.D26no13},{id:27,text:"[Day27]C# \u96DE\u790E\u89C0\u5FF5- \u505A\u932F\u4E8B\u8A72\u600E\u9EBC\u8FA6\u5462?~\u932F\u8AA4\u8655\u7406",goPath:r.D27no13},{id:28,text:"[Day28]C# \u96DE\u790E\u89C0\u5FF5- \u7269\u4EF6\u5C0E\u5411(oop)~ \u7E7C\u627F",goPath:r.D28no13},{id:29,text:"[Day29]C# \u96DE\u790E\u89C0\u5FF5- \u7269\u4EF6\u5C0E\u5411(oop)~\u4ECB\u9762(Interface)",goPath:r.D29no13},{id:30,text:"[Day30]C# \u4E0D\u96DE\u790E\u89C0\u5FF5- Install Tailwind Css with ASP.NET MVC5",goPath:r.D30no13},{id:31,text:"[Day31]C# \u96DE\u790E\u89C0\u5FF5- \u7D50\u8A9E",goPath:r.D31no13}];function nr(){return u("Chicken Say Hi | \u9435\u4EBA 13"),t(s,{children:[n(o,{}),n(y,{list:Zn})]})}const rr=`### \u6545\u4E8B\u6642\u9593\r
   \u5728\u5F88\u4E45\u5F88\u4E45\u4EE5\u524D\u4E16\u754C\u4E0A\u8A95\u751F\u4E86C\u8A9E\u8A00\uFF0C\\\r
   \u9019\u662F\u500B\u975E\u5E38\u9748\u6D3B\u53C8\u9AD8\u6548\u7684\u8A9E\u8A00\uFF0C\r
   \r
   \u5728\u4E0D\u4E45\u4E4B\u5F8C\u4ED6\u7684\u5F8C\u4EE3C++\u8A95\u751F\u4E86\uFF0C\\\r
   C++\u4E0D\u50C5\u7E7C\u627F\u4E86C\u8A9E\u8A00\u7684\u9748\u6D3B\u8207\u9AD8\u6548\uFF0C\\\r
   \u751A\u81F3\u9084\u9032\u5316\u51FA\u7269\u4EF6\u5C0E\u5411\u7684\u6280\u8853\uFF0C\\\r
   \u4E00\u76F4\u5230\u4ECA\u5929\u9084\u662F\u6700\u6709\u751F\u547D\u529B\u7684\u7A0B\u5F0F\u8A9E\u8A00\u3002\r
   \r
   \u4F46C++\u4EE4\u4EBA\u6700\u75DB\u82E6\u7684\u83AB\u904E\u65BC\u5B83\u96E3\u4EE5\u5B78\u7FD2\uFF0C\\\r
   \u5B78\u7FD2\u6B77\u7A0B\u662F\u689D\u8271\u8F9B\u96E3\u8D70\u4E4B\u8DEF\uFF0C\\\r
   \u958B\u767C\u9031\u671F\u4E5F\u9059\u9059\u7121\u671F\uFF0C\r
   \r
\u5728\u6B64\u6642\u6B64\u523B\uFF0C\\\r
    C#\u6084\u6084\u7684\u8A95\u751F\u4E86\uFF0C\u4ED6\u5728\u5B78\u7FD2\u7684\u96E3\u6613\u5EA6\u8207\u958B\u767C\u80FD\u529B\u4E4B\u9593\u53D6\u5F97\u66F4\u597D\u7684\u5E73\u8861\u3002\r
\r
### \u6211\u5011\u5C31\u4F86\u63A2\u8A0EC#\u7684\u512A\u9EDE\u5427\r
1. \u8A9E\u6CD5\u7C21\u6F54\u53C8\u6D41\u66A2:\r
    * C#\u8207C++\u7684\u5DEE\u7570\u5728\u65BC\u5B83\u7684\u985E\u4F3C\u7684\u529F\u80FD\u53EA\u4FDD\u7559\u4E00\u7A2E\u8A9E\u6CD5\uFF0C\u964D\u4F4E\u5B78\u7FD2\u7684\u96E3\u6613\u5EA6\r
    * \u6613\u5B78\u662FC#\u6700\u5F97\u610F\u7684\u7279\u5FB5\r
    \r
2. \u7165\u7136\u4E00\u65B0\u7684\u7269\u4EF6\u5C0E\u5411\u8A2D\u8A08:\r
    * C#\u662F\u4E00\u7A2E\u5F88\u7D14\u7CB9\u7684\u7269\u4EF6\u5C0E\u5411\u8A9E\u8A00\r
    * \u5B83\u5305\u542B\u4E86\u5C01\u88DD\u3001\u7E7C\u627F\u3001\u591A\u614B\u6027\u7B49\u7B49\u7269\u4EF6\u5C0E\u5411\u7684\u95DC\u9375\u6280\u8853\r
    * \u9084\u65B0\u589E\u4E86\u7279\u6027\u3001\u5C6C\u6027\u3001\u59D4\u8A17\u7B49\u7B49\u5F37\u5927\u529F\u80FD\r
    \r
3. \u4E0B\u53EF\u50B3\u7D71\u684C\u9762app\uFF0C\u4E0A\u53EFweb\u958B\u767C:\r
    * C#\u64C1\u6709Winform WPF\u4F86\u9054\u5230\u684C\u9762\u958B\u767C\r
    * \u52A0\u4E0AASP.net MVC \u7DB2\u7AD9\u958B\u767C\r
    * \u751A\u81F3\u9084\u6709ML.net\u6A5F\u5668\u5B78\u7FD2\r
    \r
4. \u56B4\u8B39\u7684\u932F\u8AA4\u8655\u7406\u6A5F\u5236\r
    * \u5783\u573E\u56DE\u6536\u6A5F\u5236 => \u64C1\u6709\u81EA\u52D5\u56DE\u6536\u7121\u7528\u7684\u7269\u4EF6\u6240\u5360\u7528\u7684\u5167\u5B58\r
    * \u7570\u5E38\u8207\u4F8B\u5916\u8655\u7406 => \u63D0\u4F9B\u7570\u5E38\u975E\u5E38\u6709\u7D50\u69CB\u6027\u53C8\u53EF\u64F4\u5145\u7684\u932F\u8AA4\u6AA2\u6E2C\u8207\u8655\u7406\r
\r
> \u5728\u5B78\u7FD2C#\u7684\u904E\u7A0B\u4E2D\u6703\u767C\u73FE\u5230\uFF0C\u4ED6\u64C1\u6709\u5404\u5F0F\u5404\u6A23\u7684\u6846\u67B6\uFF0C\u4E5F\u8A31\u9019\u662F\u500B\u7F3A\u9EDE\uFF0C\u4F46\u4E5F\u662F\u500B\u512A\u9EDE\uFF0C\u6211\u5011\u4E0D\u9700\u8981\u523B\u610F\u53BB\u5B78\u7FD2\u5176\u4ED6\u5F8C\u7AEF\u8A9E\u8A00\u5C31\u80FD\u5BEB\u51FA\u5404\u5F0F\u5404\u6A23\u7684\u4F5C\u54C1\u4E86`,er="\u{1F916}[Day1]C# \u96DE\u790E\u89C0\u5FF5- C#\u7C21\u4ECB";function W(){return u("Chicken Say Hi | \u{1F916} C#\u7C21\u4ECB"),t(s,{children:[n(o,{}),n(l,{backPath:r.IronMan13,title:er,text:rr})]})}const tr=`### \u958B\u767C\u5DE5\u5177:\r
\u6211\u5011\u9019\u908A\u4F7F\u7528Visual Studio 2017\u4F86\u505A\u70BA\u7A0B\u5F0F\u7684\u7DE8\u8B6F\u5DE5\u5177\uFF0C\\\r
\u5176\u4ED6\u7248\u672C\u4F86\u505A\u7DF4\u7FD2\u4E5F\u662F\u6C92\u6709\u554F\u984C\u7684\u3002\r
\r
### \u5C08\u6848\u5EFA\u7ACB:\r
1. \u9996\u5148\u6211\u5011\u958B\u555FVS 2017\u5EFA\u7ACB\u4E00\u500B\u4E3B\u63A7\u53F0\u61C9\u7528\u7A0B\u5F0F\r
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210903/20097001Kr0msktqBx.png)\r
\r
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210903/2009700106rLE7iJkk.png)\r
\r
\u8A18\u5F97\u5E6B\u5C08\u6848\u547D\u540D\uFF0C\u9078\u64C7\u8DEF\u5F91\uFF0C\u547D\u540D\u65B9\u6848\uFF0C\u4E00\u500B\u65B9\u6848\u4E0B\u53EF\u4EE5\u5305\u542B\u591A\u500B\u5C08\u6848\r
\r
2. \u5EFA\u7ACB\u5B8C\u6210\u5F8C\u5C31\u53EF\u4EE5\u770B\u5230\u81EA\u52D5\u7522\u751F\u7684\u7A0B\u5F0F\u78BC\u5566\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
        }\r
    }\r
}\r
\`\`\`\r
\r
### \u7D50\u69CB\u4ECB\u7D39\r
* \u5728C#\u4E4B\u4E2D\u5C31\u50CF\u4E00\u53F0\u8ECA\u5B50\r
* \u6211\u5011\u53EF\u4EE5\u60F3\u50CF**\u5C08\u6848(project)**-\u5C31\u662F\u8ECA\u5B50\u672C\u9AD4\r
* \u63A5\u4E0B\u4F86**\u985E\u5225(class)**- \u5982\u540C\u5404\u5F0F\u6A21\u7D44(\u4F8B\u5982:\u5F15\u64CE)\r
* \u66F4\u5F80\u4E0B\u5C31\u662F**\u7269\u4EF6(object)**-\u7269\u4EF6\u5247\u662F\u500B\u7463\u788E\u7684\u96F6\u4EF6(\u5982:\u87BA\u7D72)\r
* \u6C92\u932FC#\u7C21\u55AE\u4F86\u8AAA\u5C31\u662F\u7531\u4ED6\u5011\u7D44\u6210\u7684\uFF0C\u4ED6\u5011\u4E4B\u9593\u5F80\u5F80\u74B0\u74B0\u76F8\u6263\u7F3A\u4E00\u4E0D\u53EF\r
\r
### \u5BE6\u6230\u6F14\u7DF4\r
\u5728\u8AAA\u660E\u5B8C\u7D50\u69CB\u5F8C\u60F3\u5FC5\u5404\u4F4D\u4E5F\u624B\u7662\u7662\u60F3\u4F86\u5BEB\u5BEB\u770B\u4E86\r
* \u6211\u5011\u5C31\u4F86\u5BEB\u500BHello world \u8B93\u7A0B\u5F0F\u4F86\u8DDF\u9019\u4E16\u754C\u6253\u8072\u62DB\u547C\u5427!\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u5370\u51FA\u6587\u5B57\r
            Console.WriteLine("Hello world");\r
            Console.ReadKey();\r
        }\r
    }\r
}\r
\`\`\`\r
### \u57F7\u884C:\u6211\u5011\u53EF\u4EE5\u6309\u5FEB\u6377\u9375(Ctrl+F5)\u6216\u662F\u9EDE\u9078\u529F\u80FD\u5217\u7684\u958B\u59CB\u57F7\u884C\u7A0B\u5F0F\r
* \u7D50\u679C\u6211\u5011\u6703\u770B\u5230\r
>Hello world\r
\r
\u606D\u559C\u4F60!\u4F60\u7684\u7A0B\u5F0F\u8A95\u751F\u4E86!\r
\u4F46\u525B\u525B\u7A76\u7ADF\u767C\u751F\u4EC0\u9EBC\u4E8B\u60C5\u5462?\u8B93\u6211\u5011\u7E7C\u7E8C\u770B\u4E0B\u53BB!\r
\r
### \u77E5\u8B58\u5C0F\u5B78\u5802\r
* \u539F\u4F86\u5B83\u7684\u7D50\u69CB\u662F\u9019\u6A23\u554A!?\r
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210903/20097001rsm3GQhopw.png)\r
\r
* \u5728\u672A\u4F86\u6211\u5011\u6703\u66F4\u8A73\u7D30\u7684\u8AAA\u660E\u4ED6\u5011\u5176\u4E2D\u7684\u542B\u610F\uFF0C\u6211\u5011\u4ECA\u5929\u5148\u4F86\u6559\u5927\u5BB6\u4E4B\u5F8C\u5E38\u5E38\u6703\u770B\u5230\u7684\u51FD\u5F0F\r
\r
|     \u51FD\u5F0F            | \u7528\u9014|\r
| - | - |\r
|Console.WriteLine() | \u8F38\u51FA(\u6703\u63DB\u884C)|\r
|Console.Write()     | \u8F38\u51FA(\u4E0D\u63DB\u884C)|\r
|Console.ReadLine()  | \u8B80\u53D6\u8F38\u5165\u7684\u8CC7\u6599|\r
|Console.ReadKey()   | \u53D6\u5F97\u4F7F\u7528\u8005\u6309\u4E0B\u7684\u4E0B\u4E00\u500B\u5B57\u5143\u6216\u529F\u80FD\u9375|\r
\r
\r
>\u6211\u5011\u9019\u908A\u7684Console.ReadKey() \u4E3B\u8981\u7528\u9014\u53EA\u662F\u8981\u8B93\u4E3B\u63A7\u53F0\u4E0D\u6703\u8DD1\u5B8C\u7A0B\u5F0F\u5C31\u95DC\u9589\r
\r
### \u96A8\u5802\u5C0F\u7DF4\u7FD2\r
*  \u65E2\u7136\u5927\u5BB6\u90FD\u6703\u4E86\u90A3\u6211\u5011\u5C31\u4F86\u505A\u500B\u5C0F\u7DF4\u7FD2\uFF0C\u7D50\u675F\u4ECA\u5929\u9019\u4E00\u56DE\u5408\u5427!\r
#### \u984C\u76EE:\r
* \u8ACB\u5927\u5BB6\u7528C#\u4F86\u505A\u500B\u7C21\u55AE\u81EA\u6211\u4ECB\u7D39\u5427!\u4ECB\u7D39\u5167\u5BB9\u9700\u6709(\u59D3\u540D\uFF0C\u5E74\u9F61\uFF0C\u8840\u578B\uFF0C\u661F\u5EA7\uFF0C\u81EA\u6211\u4ECB\u7D39)\r
**\u7BC4\u4F8B:**\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u5370\u51FA\u6587\u5B57\r
            Console.WriteLine("\u59D3\u540D : \u5B64\u7368\u4E00\u96BB\u96DE");\r
            Console.WriteLine("\u5E74\u9F61 : 48\u6B72");\r
            Console.WriteLine("\u8840\u578B : O\u578B");\r
            Console.WriteLine("\u661F\u5EA7 : \u91D1\u725B\u5EA7");\r
            Console.WriteLine("\u81EA\u6211\u4ECB\u7D39 : \u6211\u50CF\u662F\u4E00\u96BB\u4F60\u53EF\u6709\u53EF\u7121\u7684\u5C0F\u96DE");\r
            Console.ReadKey();\r
            \r
        }\r
    }\r
}\r
\`\`\`\r
\r
\u7D50\u679C:\r
>\u59D3\u540D : \u5B64\u7368\u4E00\u96BB\u96DE\\\r
>\u5E74\u9F61 : 48\u6B72\\\r
>\u8840\u578B : O\u578B\\\r
>\u661F\u5EA7 : \u91D1\u725B\u5EA7\\\r
>\u81EA\u6211\u4ECB\u7D39 : \u6211\u50CF\u662F\u4E00\u96BB\u4F60\u53EF\u6709\u53EF\u7121\u7684\u5C0F\u96DE\r
\r
### \u6211\u5011\u4ECA\u5929\u6545\u4E8B\u5C31\u544A\u4E00\u6BB5\u843D\u4E86\uFF0C\u656C\u8ACB\u671F\u5F85\u660E\u5929\u7684\u6545\u4E8B~ \u6211\u5011\u660E\u5929\u518D\u898B!`,ir="\u{1F916}[Day2]C# \u96DE\u790E\u89C0\u5FF5- \u8207C#\u958B\u767C\u5343\u91CC\u4F86\u76F8\u898B";function sr(){return u("Chicken Say Hi | \u{1F916} \u8207C#\u958B\u767C\u5343\u91CC\u4F86\u76F8\u898B"),t(s,{children:[n(o,{}),n(l,{backPath:r.IronMan13,title:ir,text:tr})]})}const ar=`### \u8B8A\u6578\u7684\u4E16\u754C\r
\u5728C#\u4E16\u754C\u4E2D\uFF0C\u57FA\u672C\u4E0A\u5927\u5BB6\u90FD\u5E0C\u671B\u6709\u81EA\u5DF1\u7684\u6B78\u5C6C\u611F\uFF0C\u6240\u4EE5\u4ED6\u5011\u90FD\u6703\u88AB\u8CE6\u4E88\u4E00\u500B\u7684\u7A2E\u65CF\uFF0C\\\r
\u9019\u4E5F\u662F\u6240\u8B02\u7684\u5F37\u578B\u5225\u8A9E\u8A00\u64C1\u6709\u7684\u7279\u6027\u3002\\\r
\u6211\u5011\u5F85\u6703\u6703\u8DDF\u5404\u4F4D\u4ECB\u7D39\u5E38\u898B\u7684\u7A2E\u65CF\uFF0C\u6B63\u662F\u6240\u8B02\u7684**\u8B8A\u6578\u578B\u5225**\u3002\r
\r
\u6211\u5011\u5728\u9019\u4E16\u754C\u7121\u8AD6\u6216\u5927\u6216\u5C0F\u90FD\u6703\u6709\u4E00\u500B\u68F2\u8EAB\u4E4B\u8655\uFF0C\u4E5F\u8A31\u662F\u7687\u5BAE\u6216\u8005\u662F\u5929\u6A4B\u4E0B\uFF0C\u7E3D\u6709\u500B\u5730\u65B9\u8B93\u6211\u5011\u7761\u89BA\uFF0C\\\r
\u8B8A\u6578\u4E5F\u662F\u4E00\u6A23\u7684\uFF0C\u5B83\u5011\u5728\u96FB\u8166\u4E16\u754C\u4E2D\u7121\u8AD6\u5982\u4F55\u6700\u7D42\u6703\u6709\u4E00\u500B\u8A18\u61B6\u9AD4\u5167\u5B58\u4F9B\u4ED6\u5011\u5BB9\u8EAB\u3002\r
\r
### \u6578\u5B57\u985E\u578B\u7684\u8B8A\u6578\r
* \u6578\u5B57\u985E\u578B\u7684\u8B8A\u6578\u662F\u8B8A\u6578\u4E2D\u4EBA\u53E3\u6700\u591A\u7684\u7A2E\u65CF\u4E86\uFF0C\u7576\u7136\u4ED6\u5011\u5E95\u4E0B\u4E5F\u7D30\u5206\u6210\u5F88\u591A\u7A2E\u65CF\u7FA4\r
### \u6574\u6578\u8B8A\u6578\r
* \u6574\u6578\u9019\u6771\u897F\u662F\u4EBA\u985E\u5728\u6B77\u53F2\u4E0A\u6700\u65E9\u638C\u63E1\u7684\u6578\u5B57\uFF0C\u6211\u5011\u4F86\u5957\u7528\u4E00\u500B\u53E4\u4EBA\u7684\u540D\u8A00:\r
>\u201C1\u201D\u662F\u6578\u7684\u7B2C\u4E00\u539F\u5247\uFF0C\u842C\u7269\u4E4B\u6BCD\uFF0C\u4E5F\u662F\u667A\u6167\uFF1B\u201C2\u201D\u662F\u5C0D\u7ACB\u548C\u5426\u5B9A\u7684\u539F\u5247\uFF0C\u662F\u610F\u898B\uFF1B\u201C3\u201D\u662F\u842C\u7269\u7684\u5F62\u9AD4\u548C\u5F62\u5F0F\uFF1B\u201C4\u201D\u662F\u6B63\u7FA9\uFF0C\u662F\u5B87\u5B99\u5275\u9020\u8005\u7684\u8C61\u5FB5\uFF1B\u201C5\u201D\u662F\u5947\u6578\u548C\u5076\u6578\uFF0C\u96C4\u6027\u8207\u96CC\u6027\u548C\u7D50\u5408\uFF0C\u4E5F\u662F\u5A5A\u59FB\uFF1B\u201C6\u201D\u662F\u795E\u7684\u751F\u547D\uFF0C\u662F\u9748\u9B42\uFF1B\u201C7\u201D\u662F\u6A5F\u6703\uFF1B\u201C8 \u201D\u662F\u548C\u8AE7\uFF0C\u4E5F\u662F\u611B\u60C5\u548C\u53CB\u8ABC\uFF1B\u201C9\u201D\u662F\u7406\u6027\u548C\u5F37\u5927\uFF1B\u201C10\u201D\u5305\u5BB9\u4E86\u4E00\u5207\u6578\u76EE\uFF0C\u662F\u5B8C\u6EFF\u548C\u7F8E\u597D\u3002\r
>--\u7562\u9054\u54E5\u62C9\u65AF\r
* \u6C92\u932F\u9019\u5C31\u662F\u6A19\u699C"\u842C\u7269\u7686\u6578"\u7684\u7562\u9054\u54E5\u62C9\u65AF\uFF0C\u4ED6\u8B93\u6211\u5011\u4E86\u89E3\u5230\u751F\u6D3B\u4E0A\u8655\u8655\u90FD\u5B58\u5728\u8457\u6574\u6578\u7684\u904B\u7B97\r
* \u63A5\u4E0B\u4F86\u6211\u5011\u5C31\u5FC3\u52D5\u4E0D\u5982\u99AC\u4E0A\u884C\u52D5\uFF0C\u4F86\u770B\u770BC#\u4E16\u754C\u4E2D\u7684\u6574\u6578\u5427!\r
1. \u9996\u5148\u6211\u5011\u525B\u525B\u6709\u8AAA\u904E\uFF0C\u7576\u4E00\u500B\u8B8A\u6578\u51FA\u751F\u524D\uFF0C\u6211\u5011\u5C31\u5F97\u5148\u7D66\u4ED6\u5011\u500B\u7A2E\u65CF(\u985E\u578B)\r
2. \u90A3\u9EBC\u6574\u6578\u7684\u7A2E\u65CF\u6A19\u8A8C\u5C31\u662F **int** \r
3. \u7576\u4E00\u500B\u8B8A\u6578\u88AB\u8CE6\u4E88int\u4E4B\u5F8C\uFF0C\u4ED6\u5C31\u64C1\u6709\u4E00\u500B\u5BB6\u65CF\u4F7F\u547D\uFF0C\u4E26\u99AC\u4E0A\u7372\u5F97\u4ED6\u7684\u9818\u571F(\u5167\u5B58\u4E2D4\u500BByte\u7684\u7A7A\u9593)\r
4. \u4F46\u56E0\u70BA\u525B\u525B\u624D\u51FA\u751F\uFF0C\u6240\u4EE5\u4EC0\u9EBC\u90FD\u4E0D\u6703\uFF0C\u5C31\u5982\u540C\u4E00\u5F35\u767D\u7D19\u4E00\u6A23(\u9ED8\u8A8D\u9810\u8A2D\u503C0)\r
* \u660E\u767D\u6574\u6578\u7684\u8EAB\u4E16\u4E4B\u8B0E\u5F8C\u6211\u5011\u4F86\u4ED6\u73A9\u73A9\u5427!\r
* \u984C\u76EE: \u963F\u5B24\u5230\u83DC\u5E02\u5834\u8CB7\u83DC\uFF0C\u8CB7\u4E86\u4E00\u683950\u5143\u7684\u863F\u8514\u8DDF70\u5143\u7684\u8C6C\u8089\uFF0C\u8ACB\u554F\u963F\u5B24\u5728\u672A\u6BBA\u50F9\u7684\u60C5\u6CC1\u4E0B\u7D66\u4E86\u6524\u4E3B\u591A\u5C11\u9322\u5462?\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u9996\u5148\u8981\u4F86\u4E00\u500B\u578B\u614B\u70BA\u6574\u6578\u7684\u863F\u8514\u8B8A\u6578\r
            int radish;\r
            //\u518D\u4F86\u500B\u578B\u614B\u70BA\u6574\u6578\u7684\u8C6C\u8089\u8B8A\u6578\r
            int pork;\r
            //\u6B64\u6642\u963F\u5B24\u554F\u6524\u4E3B\u863F\u8514\u591A\u5C11\u9322\uFF0C\u6524\u4E3B\u544A\u8A34\u963F\u5B2450\u5143\r
            //\u6211\u5011\u5C31\u53EF\u4EE5\u8B93\u863F\u8514\u8B8A\u621050\u5143\r
            radish = 50;\r
            //\u9019\u6642\u963F\u5B24\u53C8\u554F\u6524\u4E3B\u8C6C\u8089\u591A\u5C11\u9322\uFF0C\u6524\u4E3B\u544A\u8A34\u963F\u5B2470\u5143\r
            //\u6211\u5011\u5C31\u53EF\u4EE5\u5C31\u4F86\u8B93\u8C6C\u8089\u8B8A\u621070\u5143\r
            pork = 70;\r
            //\u963F\u5B24\u70BA\u4E86\u8A08\u7B97\u65B9\u4FBF\u5C31\u5148\u628A\u50F9\u9322\u5BEB\u4E0B\u4F86\u4E86\r
            Console.WriteLine("\u863F\u8514 " + radish + "\u5143 \uFF0C\u8C6C\u8089 " + pork + "\u5143");\r
            //\u9019\u6642\u5019\u5E97\u5BB6\u62FF\u51FA\u8A08\u7B97\u6A5F\u6309\u7D66\u963F\u5B24\u770B\r
            int computer = radish + pork;\r
            //\u963F\u5B24\u770B\u6309\u8A08\u7B97\u6A5F\u4E0A\u9762\u5BEB\u7684\u50F9\u9322\uFF0C\u5C31\u5F9E\u9322\u5305\u62FF\u51FA\u9322\u7D66\u6524\u8CA9\u958B\u5FC3\u56DE\u5BB6\u4E86\r
            Console.WriteLine("\u8A08\u7B97\u6A5F\u756B\u9762 => " + radish + " + " + pork + " = " + computer);\r
            Console.ReadKey();\r
        }\r
       \r
    }\r
 }\r
 \`\`\`\r
\r
### \u57F7\u884C:\u6211\u5011\u53EF\u4EE5\u6309\u5FEB\u6377\u9375(Ctrl+F5)\u6216\u662F\u9EDE\u9078\u529F\u80FD\u5217\u7684\u958B\u59CB\u57F7\u884C\u7A0B\u5F0F\r
>\u863F\u8514 50\u5143 \uFF0C\u8C6C\u8089 70\u5143\\\r
\u8A08\u7B97\u6A5F\u756B\u9762 => 50 + 70 = 120\r
\r
### \u77E5\u8B58\u5C0F\u5B78\u5802\r
* \u9019\u5C31\u662F\u6240\u8B02\u7684\u6574\u6578\u8B8A\u6578\r
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210903/20097001z12TEGntl5.png)\r
* \u9019\u908A\u662F\u6574\u6578\u7684\u5BB6\uFF0C\u5728\u5167\u5B58\u4E2D\u4F54\u4E864Byte\uFF0C\u4E5F\u5C31\u662F32bit\r
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210903/20097001Gg3VvBp5pp.png)\r
\r
### \u5176\u4ED6\u6574\u6578\u985E\u578B\r
* short\u578B(\u77ED\u6574\u6578) : \u9019\u7A2E\u985E\u578B\u53EA\u6703\u5206\u914D\u52302\u500Bbyte\uFF0C\u4ED6\u503C\u7BC4\u570D\u70BA-32768~32768\r
* long\u578B(\u9577\u6574\u6578) : \u4ED6\u64C1\u67098\u500Bbyte\uFF0C\u503C\u7684\u7BC4\u570D\u5247\u662F-9223372036854775808~9223372036854775807\r
\`\r
\u5982\u679C\u6211\u5011\u5728short\u8207long\u524D\u9762\u770B\u5230\u4E00\u500B\u82F1\u6587\u5B57\u6BCDu\uFF0C\u4ED6\u5247\u662F\u7121\u7B26\u865F\u7684\u578B\u5225ushort\uFF0Culong\uFF0C\u4ED6\u5011\u9019\u7A2E\u65CF\u7684\u4E16\u754C\u4E2D\uFF0C\u662F\u6C92\u6709\u8CA0\u9762\u60C5\u7DD2\u7684\uFF0C\u662F\u500B\u5341\u5206\u6A02\u89C0\u7684\u7A2E\u65CF\uFF0C\u6240\u4EE5\u4ED6\u5011\u53EA\u6709\u6B63\u6578\uFF0C\u6C92\u6709\u8CA0\u6578\r
\`\r
\r
### \u73FE\u5728\u6211\u5011\u4F86\u6B78\u7D0D\u4E00\u4E0B\u6574\u6578\u985E\u578B\u5427\r
\r
| C#\u985E\u578B | \u503C\u7684\u7BC4\u570D| \u4E2D\u6587\u540D\u7A31 |\r
| - | - | - |\r
| byte | 0 ~ 255|\u5B57\u7BC0 |\r
| short | -32768 ~ 32767|\u77ED\u6574\u6578 |\r
| ushort | 0 ~ 65535|\u7121\u865F\u77ED\u6574\u6578 |\r
| int| -2147483648 ~ 2147483647|\u6574\u6578 |\r
| uint| 0 ~ 4294967295|\u7121\u865F\u6574\u6578 |\r
| long| -9223372036854775808~9223372036854775807|\u9577\u6574\u6578 |\r
| ulong| 0 ~ 18446744073709551615|\u7121\u865F\u9577\u6574\u6578 |\r
\r
\`\r
\u6CE8\u610F:\u5982\u679C\u4F7F\u7528\u8D85\u51FA\u9019\u4E9B\u7BC4\u570D\u5916\uFF0C\u6211\u5011\u5C07\u5B83\u7A31\u70BA\u6EA2\u4F4D\uFF0C\u7A0B\u5F0F\u6703\u51FA\u932F\uFF0C\r
\u6240\u4EE5\u6211\u5011\u4F7F\u7528\u524D\u61C9\u8A72\u8981\u5148\u60F3\u597D\u6703\u7528\u5230\u591A\u5927\u7684\u6578\u503C\uFF0C\u5225\u5BA3\u544A\u592A\u5C0F\u5C0E\u81F4\u6EA2\u4F4D\uFF0C\r
\u4E5F\u5225\u5BA3\u544A\u592A\u5927\u800C\u4F54\u7528\u5167\u5B58\u7A7A\u9593\r
\`\r
### \u6D6E\u9EDE\u6578\u57F7\u884C\u5225\u8B8A\u6578\r
* \u4EC0\u9EBC\u662F\u6D6E\u9EDE\u6578\u5462?\u6D6E\u9EDE\u6578\u5C31\u662F\u6240\u8B02\u7684\u5C0F\u6578\r
* \u6709\u6642\u5019\u6574\u6578\u7684\u904B\u7B97\uFF0C\u5DF2\u7D93\u7121\u6CD5\u6EFF\u8DB3\u6211\u5011\u7684\u9700\u6C42\uFF0C\u6240\u4EE5C#\u4E2D\u4E5F\u6709\u5C0F\u6578\u7684\u904B\u7B97\r
### \u5C0F\u6578\u6700\u5E38\u898B\u6709\u4E09\u7A2E\u985E\u578B:\r
 | C#\u985E\u578B | \u503C\u7684\u7BC4\u570D| \u6E96\u78BA\u7387 |\r
 | ------------- | ------------- | -  |\r
 | float | \xB11.5 x 10\u221245 ~ \xB13.4 x 1038|~6-9 \u4F4D\u6578 |\r
 | double |\xB15.0 \xD7 10\u2212324 ~ \xB11.7 \xD7 10308|~15-17 \u4F4D\u6578 |\r
 | decimal | \xB11.0 x 10-28 ~ \xB17.9228 x 1028|28-29 \u4F4D\u6578 |\r
\r
### \u6211\u5011\u99AC\u4E0A\u4F86\u7DF4\u7FD2\u770B\u770B\u5427\r
* \u984C\u76EE:\u8ACB\u5206\u5225\u7528float\u8207double\u4F86\u5370\u51FA?\u3002\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u4F7F\u7528float\u578B\u5225\u4F86\u5BA3\u544A\u8B8A\u6578\r
            //\u8A18\u5F97\u6578\u5B57\u6700\u5F8C\u8981\u52A0\u4E0A\u5F8C\u7F6E\u8A5Ef\r
            float pi_f = 3.1415926535879f;\r
\r
            //\u4F7F\u7528double\u4F86\u5BA3\u544A\u8B8A\u6578\r
            double pi_d = 3.1415926535879;\r
\r
            Console.WriteLine("pi_f = " + pi_f);\r
            Console.WriteLine("pi_d = " + pi_d);\r
            Console.ReadKey();\r
        }\r
       \r
    }\r
 }\r
 \`\`\`\r
 ### \u7D50\u679C:\r
 >pi_f = 3.141593\\\r
pi_d = 3.1415926535879\r
\r
* \u7531\u6B64\u6211\u5011\u5C31\u53EF\u4EE5\u770B\u5F97\u51FA\uFF0C\u4ED6\u5011\u578B\u5225\u4E4B\u9593\u7684\u5DEE\u7570\uFF0C\u9019\u6A23\u5728\u4F7F\u7528\u4E4B\u524D\uFF0C\u6211\u5011\u53EF\u4EE5\u512A\u5148\u8003\u616E\uFF0C\u61C9\u8A72\u8981\u7528\u54EA\u500B\u578B\u5225\r
\r
### \u6B61\u6A02\u7684\u6642\u5149\u7E3D\u662F\u904E\u5F97\u7279\u5225\u7684\u5FEB\uFF0C\u4EE5\u4E0A\u5C31\u662F\u6211\u5011\u4ECA\u5929\u7684\u8B8A\u6578\uFF0C\u8ACB\u5927\u5BB6\u8ACB\u671F\u5F85\u660E\u5929\u7684\u5B57\u4E32\u8B8A\u6578`,or="\u{1F916}[Day3]C# \u96DE\u790E\u89C0\u5FF5- \u6838\u5FC3\u7684\u6578\u64DA\u6210\u54E1~\u8B8A\u6578(\u4E00)";function ur(){return u("Chicken Say Hi | \u{1F916} \u6838\u5FC3\u7684\u6578\u64DA\u6210\u54E1~\u8B8A\u6578(\u4E00)"),t(s,{children:[n(o,{}),n(l,{backPath:r.IronMan13,title:or,text:ar})]})}const lr=`### \u5343\u8B8A\u842C\u5316\u7684\u5B57\u4E32\u8B8A\u6578\r
* \u4ED6\u70BA\u4EC0\u9EBC\u5343\u8B8A\u842C\u5316\u5462?\u56E0\u70BA\u5B57\u4E32\u9019\u7A2E\u578B\u5225\uFF0C\u5225\u4EBA\u7D66\u4ED6\u4EC0\u9EBC\u4ED6\u5C31\u662F\u4EC0\u9EBC\r
* \u5C31\u5982\u540C\u4E00\u4F4D\u8A8D\u771F\u5411\u5B78\u7684\u5C0F\u670B\u53CB\uFF0C\u4ED6\u5982\u6B64\u5929\u771F\u7121\u90AA\uFF0C\u8001\u5E2B\u6559\u7684\u90FD\u6703\u8A8D\u771F\u8A18\u4F4F\r
* \u5728C#\u7684\u4E16\u754C\u4E2D\uFF0C\u6211\u5011\u8981\u8868\u660E\u4E00\u500B\u5B57\u4E32\u6642\u90FD\u9700\u8981\u7528\`""\`\u628A\u4ED6\u5305\u8D77\u4F86\r
 \r
### \u7BC4\u4F8B:\u6211\u5011\u4F86\u770B\u770B\u6709\`""\`\u8DDF\u6C92\u6709\`""\`\u7684\u5DEE\u7570\u5427!\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u5BA3\u544A\u4E00\u500B\u6574\u6578\u53EB\u505A hi\uFF0C\u7136\u5F8C\u8CE6\u4E88\u4ED6100\u7684\u503C\r
            int hi = 100;\r
\r
            //\u6211\u5011\u4F86\u5217\u5370\u770B\u770B\r
            Console.WriteLine("\u6211\u6C92\u6709\u52A0\u96D9\u5F15\u865F : " + hi);\r
            Console.WriteLine("\u6211\u6709\u52A0\u96D9\u5F15\u865F : " + "hi");\r
            Console.ReadKey();\r
        }\r
       \r
    }\r
}\r
\`\`\`\r
\r
\u7D50\u679C:\r
>\u6211\u6C92\u6709\u52A0\u96D9\u5F15\u865F : 100\\\r
\u6211\u6709\u52A0\u96D9\u5F15\u865F : hi\r
### \u7531\u6B64\u6211\u5011\u53EF\u4EE5\u767C\u73FE\uFF0C\u52A0\u4E0A\`""\`\u7684"hi"\u4ED6\u662F\u88AB\u7576\u6210\u6587\u5B57\u7684\uFF0C\u6C92\u6709\`""\`\u7684hi\u4ED6\u5247\u662F\u6574\u6578\u8B8A\u6578\uFF0C\u6703\u76F4\u63A5\u5370\u51FA\u4ED6\u7684\u503C\r
### \u6211\u5011\u63A5\u8457\u958B\u59CB\u4ECB\u7D39\u4ED6\u5011\u9019\u578B\u5225\u7684\u6210\u54E1\u5427!\r
\r
### \u9996\u5148\u6B61\u8FCE\u5B57\u5143\u578B\u8B8A\u6578~char![/images/emoticon/emoticon44.gif](/images/emoticon/emoticon44.gif)\r
* char\u4ED6\u9867\u540D\u601D\u7FA9\u53EA\u80FD\u5B58\u4E00\u500B\u5B57\u5143\r
* \u4ED6\u8DDF\u5927\u5BB6\u4E0D\u4E00\u6A23\u7684\u5730\u65B9\u5728\u65BC\uFF0C\u4ED6\u4F7F\u7528\u7684\u662F\u55AE\u5F15\u865F\`''\`\uFF0C\u800C\u4E0D\u662F\u96D9\u5F15\u865F\`""\`\r
\r
### \u7BC4\u4F8B:\u4F7F\u7528\u4E00\u500Bchar\u578B\u5225\u8B8A\u6578\u4F86\u5370\u51FAA B C\u4E09\u500B\u5B57\u6BCD\u5427\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u5BA3\u544A\u4E00\u500Bchar\u578B\u5225\u7684\u8B8A\u6578\r
            char hi;\r
\r
            //\u5148\u8CE6\u503CA\u7D66\u8B8A\u6578hi\uFF0C\u7136\u5F8C\u5370\u51FA\u4F86\r
            hi = 'A';\r
            Console.WriteLine("1. " + hi);\r
\r
            //\u518D\u4F86\u8CE6\u503CB\u7D66\u8B8A\u6578hi\uFF0C\u7136\u5F8C\u5370\u51FA\u4F86\r
            hi = 'B';\r
            Console.WriteLine("2. " + hi);\r
\r
            //\u6700\u5F8C\u8CE6\u503CC\u7D66\u8B8A\u6578hi\uFF0C\u7136\u5F8C\u5370\u51FA\u4F86\r
            hi = 'C';\r
            Console.WriteLine("3. " + hi);\r
\r
            Console.ReadKey();\r
        }\r
       \r
    }\r
 }\r
 \`\`\`\r
 \r
 \u7D50\u679C:\r
>1. A\r
>2. B\r
>3. C\r
\r
### \u518D\u4F86\u662F\u5584\u8B8A\u7684\u5B57\u4E32\u578B\u8B8A\u6578~string\r
* string\u985E\u578B\u53EF\u4EE5\u5B58\u591A\u500B\u5B57\u5143\r
* \u6211\u5011\u5E38\u5E38\u6703\u9700\u8981\u8B93\u7528\u6236\u8F38\u5165\u4E00\u9577\u4E32\u7684\u8CC7\u8A0A\uFF0C\u6216\u662F\u6211\u5011\u9700\u8981\u986F\u793A\u4E00\u4E9B\u63D0\u793A\u7D66\u7528\u6236\uFF0C\u4ED6\u5C31\u662F\u6700\u4F73\u4EBA\u9078\r
\r
### \u7BC4\u4F8B:\u6211\u5011\u8B93\u96FB\u8166\u81EA\u5DF1\u8DDF\u81EA\u5DF1\u4F86\u500B\u5C2C\u804A\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u5BA3\u544A\u4E00\u500Bstring\u578B\u5225\u7684\u8B8A\u6578\r
            string hi;\r
\r
            //\u8B93\u96FB\u8166\u4F86\u500B\u554F\u5019\r
            hi = "\u5B89\u5B89\uFF0C\u4F60\u597D\uFF0C\u5E7E\u6B72?\u4F4F\u54EA\u88E1?";\r
            Console.WriteLine(hi);\r
\r
            //\u8B93\u96FB\u8166\u56DE\u7B54\u81EA\u5DF1\r
            hi = "\u4F60\u597D\uFF0C\u4F60\u662F\u500B\u597D\u4EBA\uFF0C\u4F46\u6211\u624D\u4E0D\u8981\u544A\u8A34\u4F60\u52D2";\r
            Console.WriteLine(hi);\r
\r
            Console.ReadKey();\r
        }\r
       \r
    }\r
}\r
\`\`\`\r
\r
\u7D50\u679C:\r
>\u5B89\u5B89\uFF0C\u4F60\u597D\uFF0C\u5E7E\u6B72?\u4F4F\u54EA\u88E1?\r
\u4F60\u597D\uFF0C\u4F60\u662F\u500B\u597D\u4EBA\uFF0C\u4F46\u6211\u624D\u4E0D\u8981\u544A\u8A34\u4F60\u52D2\r
\r
### \u6211\u5011\u4F86\u73A9\u8F49\u5B57\u4E32\u5427\r
### 1.\u5B57\u4E32\u7684\u8B80\u53D6\r
* \u5728\u9019\u908A\u6211\u5011\u6703\u7528\u5230\`Console.ReadLine()\`\u9019\u500B\u51FD\u5F0F\r
* \u6211\u5011\u4F86\u8A66\u8457\u8DDF\u96FB\u8166\u5C0D\u8A71\u5427\r
### \u7BC4\u4F8B:\u6211\u5011\u4F86\u5C0D\u96FB\u8166\u8F38\u5165\u81EA\u5DF1\u7684\u540D\u5B57\u8B93\u4ED6\u56DE\u7B54\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u6211\u5011\u4E00\u958B\u59CB\u4F7F\u7528Console.ReadLine()\u51FD\u5F0F\uFF0C\u8B93\u96FB\u8166\u807D\u807D\u6211\u5011\u7684\u5FC3\u8072\r
            //\u4E26\u5C07\u8F38\u5165\u7684\u540D\u5B57\u8CE6\u503C\u5230\u5B57\u4E32\u8B8A\u6578\u4E2D\r
            string name = Console.ReadLine();\r
\r
            //\u63A5\u4E0B\u4F86\u8B93\u96FB\u8166\u56DE\u7B54\u6211\u5011\r
            Console.WriteLine(name + "\uFF0C\u5E25\u6C23\u5341\u8DB3!");\r
\r
            Console.ReadKey();\r
        }\r
       \r
    }\r
}\r
\`\`\`\r
\r
\u8F38\u5165:\r
>\u5B64\u7368\u4E00\u96BB\u96DE\r
\r
\u7D50\u679C:\r
>\u5B64\u7368\u4E00\u96BB\u96DE\\\r
\u5B64\u7368\u4E00\u96BB\u96DE\uFF0C\u5E25\u6C23\u5341\u8DB3!\r
  \r
### 2.\u5B57\u5143\u7684\u8B80\u53D6\r
* \u5728\u9019\u908A\u6211\u5011\u6703\u7528\u5230\`Console.Read()\`\u9019\u500B\u51FD\u5F0F\r
* \`\u6CE8\u610F:Console.Read()\u8B80\u51FA\u4F86\u6703\u662F\u5B57\u5143\u7684ASCII\uFF0C\u6240\u4EE5\u6703\u662F\u6574\u6578\`\r
### \u7BC4\u4F8B:\u6211\u5011\u4F86\u5C0D\u96FB\u8166\u8F38\u5165\u4E00\u500B\u5B57\u6BCD\uFF0C\u4F86\u67E5\u8A62\u4ED6ASCII\u7DE8\u78BC\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u6211\u5011\u4F7F\u7528Console.Read()\u51FD\u5F0F\uFF0C\u8B93\u96FB\u8166\u8B80\u53D6\u6211\u5011\u8F38\u5165\u7684\u5B57\u6BCD\r
            //\u96FB\u8166\u6703\u81EA\u52D5\u5C07\u4ED6\u8F49\u6210ASCII\u7DE8\u78BC\r
            //\u4E26\u5C07ASCII\u7DE8\u78BC\u8CE6\u503C\u5230\u8B8A\u6578\u4E2D\r
            int ch = Console.Read();\r
\r
            //\u5370\u51FA\u8F38\u5165\u5B57\u6BCD\u7684 ASCII\r
            Console.WriteLine("The ASCII code is " + ch);\r
            Console.ReadKey();\r
        }\r
\r
    }\r
}\r
\`\`\`\r
\r
\u8F38\u5165:\r
>a\r
\r
\u7D50\u679C:\r
>a\\\r
The ASCII code is 97\r
\r
\u8F38\u5165:\r
>A\\\r
\r
\u7D50\u679C:\r
>A\\\r
The ASCII code is 65\r
\r
\`\u8A3B:\u5C0D\u65BC\u96FB\u8166\u800C\u8A00\uFF0C\u5927\u5BEB\u6216\u5C0F\u5BEB\u751A\u81F3\u662F\u4EFB\u4F55\u7B26\u865F\uFF0C\u90FD\u6709\u81EA\u5DF1\u7279\u6709\u7684\u7DE8\u78BC\u6240\u4EE5\u6211\u5011\u9019\u908A\u8F38\u5165\u5927\u5C0F\u5BEB\u5F8C\u6703\u5F97\u5230\u7684\u7D50\u679C\`\r
\r
### 3.\u6578\u5B57\u7684\u8B80\u53D6\r
* \u5728\u9019\u908A\u6211\u5011\u6703\u7528\u5230\`Convert.ToInt32()\`\u9019\u500B\u51FD\u5F0F\r
* \`Convert.ToInt32()\u9019\u51FD\u5F0F\u7684\u7528\u9014\uFF0C\u5C31\u662F\u5C07\u5176\u4ED6\u578B\u5225\u8F49\u6210\u6574\u6578\u578B\u5225\uFF0C\u7A31\u70BA"\u8F49\u578B"\`\r
* \u5C31\u5982\u540C\u6709\u4EBA\u8981\u79FB\u6C11\u4F86\u5230\u7F8E\u570B\uFF0C\u5C31\u5FC5\u9808\u5230\u79FB\u6C11\u7F72\u8FA6\u7406\u79FB\u6C11\uFF0C\u800C\u4E14\u8981\u7B26\u5408\u4E00\u4E9B\u76F8\u95DC\u7684\u898F\u5B9A\uFF0C\u4E0D\u7136\u662F\u8FA6\u7406\u4E0D\u6210\u529F\u7684\r
### \u7BC4\u4F8B:\u6211\u5011\u4F86\u5C0D\u96FB\u8166\u8F38\u5165\u534A\u5F91\uFF0C\u8B93\u4ED6\u81EA\u52D5\u7B97\u51FA\u5713\u9762\u7A4D\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u5BA3\u544A\u534A\u5F91\u70BA\u6574\u6578\u8B8A\u6578\r
            int r;\r
            //\u5BA3\u544A\u5713\u9762\u7A4D\u70BA\u6D6E\u9EDE\u6578\u8B8A\u6578\r
            double s;\r
            //\u5BA3\u544A\u5713\u5468\u7387\u70BA\u6D6E\u9EDE\u6578\u8B8A\u6578\r
            double \u03C0 = 3.1415926536;\r
\r
            //\u6211\u5011\u8F38\u5165\u4E00\u500B\u534A\u5F91\uFF0C\u4E26\u5C07\u8F38\u5165\u7684\u534A\u5F91\u8F49\u6210\u6574\u6578\uFF0C\u8CE6\u503C\u7D66\u8B8A\u6578r\r
            Console.Write("r = ");\r
            r = Convert.ToInt32(Console.ReadLine());\r
            \r
            //\u8A08\u7B97\u9762\u7A4D \u9762\u7A4D = \u5713\u5468\u7387 X \u534A\u5F91 X \u534A\u5F91\r
            s = \u03C0 * r * r;\r
            //\u5370\u51FA\u7B54\u6848\r
            Console.WriteLine("Ans:" + s);\r
\r
            Console.ReadKey();\r
        }\r
\r
    }\r
 }\r
 \`\`\`\r
 \r
\u8F38\u5165:\r
>5\r
\r
\u7D50\u679C:\r
>r = 5\\\r
Ans:78.53981634\r
 \r
### 4.\u5B57\u4E32\u7684\u7D2F\u52A0\r
* \u7576\u5B57\u4E32\u9047\u898B\u4E86\`\u904B\u7B97\u5B50"+"\`\uFF0C\u7A76\u7ADF\u6703\u7522\u751F\u4EC0\u9EBC\u6A23\u7684\u611B\u6068\u7CFE\u845B\u5462?\r
* \u5B57\u4E32\u6703\u76F4\u63A5\u929C\u63A5\uFF0C\u4E26\u4E0D\u6703\u5408\u9AD4\r
* \u5C31\u5982\u540C\u6211\u5C07\u9694\u58C1\u9130\u5C45\u7684\u5730\u8CB7\u4E0B\u4F86\uFF0C\u90A3\u584A\u5730\u9084\u662F\u5728\u90A3\u500B\u5730\u65B9\uFF0C\u4E26\u4E0D\u6703\u8DDF\u6211\u7684\u571F\u5730\u878D\u5408\r
### \u7BC4\u4F8B:\u6211\u5011\u4F86\u7522\u751F\u5404\u7A2E\u53E3\u5473\u7684\u5B64\u7368\u52D5\u7269\u5427\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u5BA3\u544A\u96DE\r
            string chicken = "\u96DE";\r
            //\u5BA3\u544A\u9B5A\r
            string fish = "\u9B5A";\r
            //\u5BA3\u544A\u72D7\r
            string dog = "\u8C61";\r
            //\u5BA3\u544A\u5F62\u5BB9\u8A5E\r
            string lonely = "\u5B64\u7368\u4E00\u96BB";\r
\r
            //\u5C07\u4ED6\u5011\u505A\u7D2F\u52A0\r
            Console.WriteLine(lonely + chicken);\r
            Console.WriteLine(lonely + fish);\r
            Console.WriteLine(lonely + dog);\r
\r
            Console.ReadKey();\r
        }\r
\r
    }\r
}\r
\`\`\`\r
\r
\u7D50\u679C:\r
>\u5B64\u7368\u4E00\u96BB\u96DE\r
\u5B64\u7368\u4E00\u96BB\u9B5A\r
\u5B64\u7368\u4E00\u96BB\u8C61\r
\r
### \u8B8A\u6578\u7684\u547D\u540D\u898F\u5247\r
* \u6700\u5F8C\u5728\u9019\u908A\u8DDF\u5404\u4F4D\u8AAA\u660E\u4E00\u4E0B\u547D\u540D\u898F\u5247\r
1. \u8B8A\u6578\u7B2C\u4E00\u500B\u5B57\u5FC5\u9808\u662F\u5B57\u6BCD\r
2. \u5E95\u7DDA\u6216\u662F@\u4E4B\u5F8C\u7684\u5B57\u7B26\u53EF\u4EE5\u662F\u5B57\u6BCD\u3001\u6578\u5B57\u6216\u5E95\u7DDA\r
3. \u8B8A\u6578\u4E0D\u80FD\u548C\u95DC\u9375\u5B57\u91CD\u540D\r
### \u7BC4\u4F8B:\r
\u6B63\u78BA\u547D\u540D:\r
>x\\\r
a1\\\r
myname\\\r
flowersCheckedListBox\\\r
_number\\\r
@float\r
\r
\u932F\u8AA4\u547D\u540D:\r
>8thStreet\xA0\xA0 \xA0\xA0 \xA0 //\u4E0D\u80FD\u4EE5\u6578\u5B57\u958B\u982D\u547D\u540D\\\r
float\xA0\xA0 \xA0\xA0 \xA0 \xA0 \xA0 \xA0\xA0 //\u4E0D\u80FD\u548C\u95DC\u9375\u5B57\u540C\u540D\r
\r
\`\u6CE8\u610F: C#\u5340\u5206\u5927\u5C0F\u5BEB\uFF0C\u6BD4\u5982name\u548CName\u662F\u4E0D\u540C\u7684\u8B8A\u6578\uFF0C\u5728\u70BA\u8B8A\u6578\u547D\u540D\u6642\uFF0C\u76E1\u91CF\u9078\u64C7\u6709\u610F\u7FA9\u7684\u540D\u7A31\u3002\`\r
\r
### \u95DC\u65BC\u8B8A\u6578\u7684\u6DD2\u7F8E\u611B\u60C5\u6545\u4E8B\uFF0C\u6211\u5011\u5C31\u4ECB\u7D39\u5230\u9019\u908A\u4E86\uFF0C\u5927\u5BB6\u660E\u5929\u898B!`,cr="\u{1F916}[Day4]C# \u96DE\u790E\u89C0\u5FF5- \u6838\u5FC3\u7684\u6578\u64DA\u6210\u54E1~\u8B8A\u6578(\u4E8C)";function mr(){return u("Chicken Say Hi | \u{1F916} \u6838\u5FC3\u7684\u6578\u64DA\u6210\u54E1~\u8B8A\u6578(\u4E8C)"),t(s,{children:[n(o,{}),n(l,{backPath:r.IronMan13,title:cr,text:lr})]})}const hr=`### \u904B\u7B97\u5B50\r
\u7A0B\u5F0F\u7684\u4E16\u754C\u4E2D\uFF0C\u8B8A\u6578\u662F\u7121\u6642\u7121\u523B\u4E00\u76F4\u5728\u8B8A\u5316\u7684\uFF0C\\\r
\u8B8A\u6578\u7684\u8B8A\u5316\u4E5F\u6210\u70BA\u7A0B\u5F0F\u7684\u7CBE\u96A8\u6240\u5728\uFF0C\\\r
\u4F46\u70BA\u751A\u9EBC\u8B8A\u6578\u6703\u4E00\u76F4\u8B8A\u5316\u5462?\\\r
\u539F\u4F86\u4E00\u5207\u90FD\u662F\u904B\u7B97\u5B50\u60F9\u7684\u798D\u3002\r
\r
### \u7B97\u8853\u904B\u7B97\u5B50\r
* \u5728\u7A0B\u5F0F\u4E4B\u4E2D\u904B\u7B97\u5B50\u6703\u9023\u63A5\u5169\u500B\u7269\u4EF6\uFF0C\u4E26\u5C07\u9019\u5169\u500B\u7269\u4EF6\u5728\u6307\u5B9A\u7684\u904B\u7B97\r
### C#\u4E4B\u4E2D\u7684\u7B97\u8853\u904B\u7B97\u5B50\r
\r
\r
| \u904B\u7B97\u5B50 | \u7528\u9014 | \u7BC4\u4F8B | \u985E\u5225 |\r
| - | - | - | - |\r
|+ | \u52A0 | a + b | \u4E8C\u5143 |\r
|- | \u6E1B | a - b | \u4E8C\u5143 |\r
|* | \u4E58 | a * b | \u4E8C\u5143 |\r
|/ | \u9664 | a / b | \u4E8C\u5143 |\r
|% | \u53D6\u9918\u6578 | a % b | \u4E8C\u5143 |\r
\r
### \u7BC4\u4F8B:\u4F7F\u7528\u57FA\u59C6\u62C9\u723E\u68EE\u8A08\u7B97\u516C\u5F0F\uFF0C\u4F86\u7B97\u51FA\u4ECA\u5929\u79AE\u62DC\u5E7E\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u5BA3\u544A\u4ECA\u5E74\r
            int y = 2021;\r
            //\u5BA3\u544A\u4ECA\u6708\r
            int m = 9;\r
            //\u5BA3\u544A\u4ECA\u65E5\r
            int d = 6;\r
\r
            //\u5957\u7528\u57FA\u59C6\u62C9\u723E\u68EE\u8A08\u7B97\u516C\u5F0F\r
            int week = (d + 2 * m + 3 * (m + 1) / 5 + y + y / 4 - y / 100 + y / 400 + 1) % 7;\r
\r
            //\u5370\u51FA\u65E5\u671F\u8207\u661F\u671F\r
            Console.WriteLine("2021/9/6 \u661F\u671F" + week);\r
\r
            Console.ReadKey();\r
        }\r
\r
    }\r
}\r
\`\`\`\r
\r
\u7D50\u679C:\r
>2021/9/6 \u661F\u671F1\r
\r
\`\u5728\u9019\u516C\u5F0F\u4E2D\u6211\u5011\u4E00\u53E3\u6C23\u7528\u5230\u4E86\u4E94\u500B\u904B\u7B97\u5B50\uFF0C\u4E5F\u9AD4\u6703\u5230C#\u8B93\u4EBA\u5341\u5206\u9A5A\u8C54\u7684\u904B\u7B97\`\r
\r
### \u7279\u5225\u7684\u9664\u6CD5\r
* \u5728C#\u4E2D\u7684\u9664\u6CD5\u80AF\u5B9A\u8DDF\u4F60\u60F3\u50CF\u7684\u6709\u6240\u5DEE\u7570\r
* \u5728\u6574\u6578\u7684\u9664\u6CD5\u4E2D\uFF0C\u5C0F\u6578\u9EDE\u4E4B\u5F8C\u6703\u81EA\u52D5\u88AB\u6368\u53BB\r
### \u7BC4\u4F8B:\u8A66\u8A66\u770B\u75283\u9664\u4EE52\u5427(\u5728\u6211\u5011\u89C0\u5FF5\u4E2D\u61C9\u8A72\u7B54\u6848\u662F1.5)\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u505A\u4E09\u9664\u4EE5\u4E8C\u7684\u904B\u7B97\r
            int ans = 3 / 2;\r
\r
            //\u5370\u51FA\u89E3\u7B54\r
            Console.WriteLine("Ans : " + ans);\r
            Console.ReadKey();\r
        }\r
\r
    }\r
}\r
\`\`\`\r
\r
\u7D50\u679C:\r
>Ans : 1\r
\r
* \u7531\u4E0A\u6211\u5011\u53EF\u4EE5\u5F97\u77E5\u6574\u6578\u9664\u6CD5\u5C0F\u6578\u9EDE\u5F8C\u6703\u76F4\u63A5\u88AB\`\u54110\u7121\u689D\u4EF6\u6368\u53BB\`\r
* \u9664\u975E\u505A\u6D6E\u9EDE\u6578\u9664\u6CD5\uFF0C\u7D50\u679C\u624D\u6703\u8B8A\u6210\u6D6E\u9EDE\u6578\r
\r
### \u7BC4\u4F8B:\u9A57\u8B49\u9664\u6CD5\u5F8C\u518D\u8CE6\u503C\u7D66\u6D6E\u9EDE\u6578\u8B8A\u6578\u8207\u76F4\u63A5\u505A\u6D6E\u9EDE\u6578\u9664\u6CD5\u7684\u5DEE\u7570\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u505A\u6574\u6578\u9664\u6CD5\uFF0C\u4E26\u8CE6\u503C\u7D66\u6D6E\u9EDE\u6578\u8B8A\u6578\r
            double x = 9 / 2;\r
\r
            //\u76F4\u63A5\u505A\u6D6E\u9EDE\u6578\u9664\u6CD5\r
            double y = 9.0 / 2;\r
\r
            //\u5370\u51FA\u7B54\u6848\r
            Console.WriteLine("x = " + x + " \uFF0Cy = " + y);\r
            Console.ReadKey();\r
        }\r
\r
    }\r
}\r
\`\`\`\r
\r
\u7D50\u679C\r
>x = 4 \uFF0Cy = 4.5\r
\r
###  \u9918\u6578\u904B\u7B97\u5B50~%\r
* \u4F7F\u7528\u6B64\u904B\u7B97\u5B50\u53EF\u4EE5\u5F97\u5230a/b\u7684\u9918\u6578\r
* \u8207\u65B9\u6CD5[Math.DivRem](https://docs.microsoft.com/zh-tw/dotnet/api/system.math.divrem?view=net-5.0) \u6703\u5F97\u5230\u4E00\u6A23\u7684\u7D50\u679C\r
### \u7BC4\u4F8B:\u6211\u5011\u5206\u5225\u5C0720~25\u9664\u4EE54\u4F86\u770B\u770B\u4ED6\u5011\u7684\u9918\u6578\u5206\u5225\u662F\u591A\u5C11\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u5206\u5225\u5C0720~25\u82074\u505A\u53D6\u9918\u904B\u7B97\r
            int no20 = 20 % 4;\r
            int no21 = 21 % 4;\r
            int no22 = 22 % 4;\r
            int no23 = 23 % 4;\r
            int no24 = 24 % 4;\r
            int no25 = 25 % 4;\r
\r
            //\u5370\u7D50\u679C\r
            Console.WriteLine("20 % 4 =" + no20);\r
            Console.WriteLine("21 % 4 =" + no21);\r
            Console.WriteLine("22 % 4 =" + no22);\r
            Console.WriteLine("23 % 4 =" + no23);\r
            Console.WriteLine("24 % 4 =" + no24);\r
            Console.WriteLine("25 % 4 =" + no25);\r
\r
            Console.ReadKey();\r
        }\r
    }\r
}\r
\`\`\`\r
\r
\u7D50\u679C:\r
>20 % 4 =0\\\r
21 % 4 =1\\\r
22 % 4 =2\\\r
23 % 4 =3\\\r
24 % 4 =0\\\r
25 % 4 =1\r
\r
### \u65B9\u6CD5(Math)\r
* C#\u4E5F\u6709\u63D0\u4F9B\u6211\u5011\u5F88\u591A\u6578\u5B78\u65B9\u6CD5\r
* \u6211\u5011\u4F86\u4ECB\u7D39\u5E7E\u500B\u6BD4\u8F03\u5E38\u7528\u7684\u65B9\u6CD5\r
\r
| \u529F\u80FD | \u65B9\u6CD5 | \u7BC4\u4F8B | \u6578\u5B78\u8868\u793A |\r
| - | - |- |- |\r
|\u4E58\u51AA| Math.Pow() | Math.Pow(2,3) |\` 2^3\` |\r
|\u5E73\u65B9\u6839| Math.Sqrt() | Math.Sqrt(4) | \`\u221A4\` |\r
|\u7D55\u5C0D\u503C| Math.Abs() | Math.Abs(-4) | \`|-4|\` |\r
\r
* \u53E6\u5916\u65B9\u6CD5\u4E2D\u9084\u70BA\u6211\u5011\u5B9A\u7FA9\u4E09\u500B\u6B04\u4F4D\r
\r
| \u6578\u5B78\u6DB5\u7FA9 | \u7A0B\u5F0F\u8868\u793A | \u8FD1\u4F3C\u503C |\u8AAA\u660E |\r
| - | - |- |- |\r
| \`\u03C4\` | Math.Tau | 6.2831853071795862 |\u5F27\u5EA6 |\r
|\`\u03C0\`| Math.PI | 3.1415926535897931 | \u5713\u5468\u7387 |\r
|\`e\`| Math.E |2.7182818284590451 | \u81EA\u7136\u5C0D\u6578\u5E95\u6578 |\r
\r
### \u96A8\u5802\u5C0F\u7DF4\u7FD2\r
### \u984C\u76EE:\u5DF2\u77E5\u68AF\u5F62\u9762\u7A4D\u516C\u5F0F\u70BA((\u4E0A\u5E95+\u4E0B\u5E95)X\u9AD8/2)\uFF0C\u76EE\u524D\u77E5\u9053\u4E0A\u5E95\u662F30\uFF0C\u4E0B\u5E95\u662F52\uFF0C\u9AD8\u70BA46\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u5BA3\u544A\u4E0A\u5E95\r
            int x = 30;\r
            //\u5BA3\u544A\u4E0B\u5E95\r
            int y = 52;\r
            //\u5BA3\u544A\u9AD8\r
            int z = 46;\r
\r
            //\u9032\u884C\u8A08\u7B97\r
            int ans = (x + y) * z / 2;\r
\r
            //\u5370\u51FA\u7B54\u6848 \r
            Console.WriteLine("Ans : " + ans);\r
\r
            Console.ReadKey();\r
        }\r
    }\r
}\r
\`\`\`\r
\r
\u7D50\u679C:\r
>Ans : 1886\r
\r
### \u905E\u589E\u904B\u7B97\u5B50~++\r
* \u4ED6\u662F\u5C6C\u65BC\u4E00\u5143\u904B\u7B97\u5B50\r
* \u589E\u52A0\u7684\u91CF\u70BA1\r
### \u7BC4\u4F8B1(\u5F8C\u7F6E\u905E\u589E\u904B\u7B97\u5B50):\u6211\u5011\u4F86\u7B97\u7B97\u6211\u4ECA\u5E7448\u6B72\uFF0C\u660E\u5E74\u6211\u5E7E\u6B72?\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u5BA3\u544A\u6211\u4ECA\u5E7448\u6B72\r
            int age = 48;\r
            Console.WriteLine("\u6211\u4ECA\u5E74" + age + "\u6B72");\r
\r
            //\u4F7F\u7528\u5F8C\u7F6E\u905E\u589E\u904B\u7B97\u5B50\uFF0C\u8A08\u7B97\u660E\u5E74\u5E74\u7D00\r
            age++;\r
            Console.WriteLine("\u6211\u660E\u5E74" + age + "\u6B72");\r
\r
            Console.ReadKey();\r
        }\r
    }\r
}\r
\`\`\`\r
\r
\u7D50\u679C:\r
>\u6211\u4ECA\u5E7448\u6B72\\\r
\u6211\u660E\u5E7449\u6B72\r
\r
### \u7BC4\u4F8B2(\u524D\u7F6E\u905E\u589E\u904B\u7B97\u5B50):\u6211\u5011\u4F86\u6BD4\u8F03\u770B\u770B\u524D\u7F6E\u8DDF\u5F8C\u7F6E\u7684\u5DEE\u7570\u5427\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u5F8C\u7F6E\u905E\u589E\u904B\u7B97\u5B50\uFF0C\u5370\u51FA\u5B83\u7684\u8B8A\u5316\u904E\u7A0B\r
            Console.WriteLine("--\u5F8C\u7F6E\u904B\u7B97\u5B50--");\r
            int x = 1;\r
            Console.WriteLine(x);\r
            Console.WriteLine(x++);\r
            Console.WriteLine(x);\r
\r
            //\u524D\u7F6E\u905E\u589E\u904B\u7B97\u5B50\uFF0C\u5370\u51FA\u5B83\u7684\u8B8A\u5316\u904E\u7A0B\r
            Console.WriteLine("--\u524D\u7F6E\u904B\u7B97\u5B50--");\r
            int y = 1;\r
            Console.WriteLine(y);\r
            Console.WriteLine(++y);\r
            Console.WriteLine(y);\r
\r
            Console.ReadKey();\r
        }\r
    }\r
}\r
\`\`\`\r
\r
\u7D50\u679C:\r
>--\u5F8C\u7F6E\u904B\u7B97\u5B50--\\\r
1\\\r
1\\\r
2\\\r
--\u524D\u7F6E\u904B\u7B97\u5B50--\\\r
1\\\r
2\\\r
2\r
\r
\`\u7531\u6B64\u6211\u5011\u53EF\u4EE5\u770B\u5230\u524D\u7F6E\u8DDF\u5F8C\u7F6E\u7684\u5DEE\u7570\u6703\u662F\uFF0C\u5728\u904B\u7B97\u300C\u4E4B\u5F8C\u300D\u6216\u300C\u4E4B\u524D\u300D\u67D0\u6578\u7684\u503C\`\r
\r
### \u65E2\u7136\u6709\u905E\u589E\u90A3\u5FC5\u7136\u6709\u905E\u6E1B\u904B\u7B97\u5B50~--\r
### \u7BC4\u4F8B:\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u905E\u6E1B\u904B\u7B97\u5B50\r
            int x = 5;\r
            //\u5F8C\u7F6E\r
            Console.WriteLine(x--);\r
            //\u524D\u7F6E\r
            Console.WriteLine(--x);\r
\r
            Console.ReadKey();\r
        }\r
    }\r
 }\r
 \`\`\`\r
 \r
 \u7D50\u679C:\r
 >5\\\r
3\r
\r
\u5927\u5BB6\u53EF\u80FD\u6703\u89BA\u5F97\uFF0C\u9019\u7D50\u679C\u4E5F\u592A\u5947\u602A\u4E86\u5427?!\r
\u70BA\u4EC0\u9EBC\u4E0D\u662F5\uFF0C4\u5462?\r
\u539F\u56E0\u5F88\u7C21\u55AE\uFF0C\u56E0\u70BA\u6211\u5011\u5148\u7528\u5F8C\u7F6E\u905E\u6E1B\u904B\u7B97\u5B50\uFF0C\u6240\u4EE5\u4ED6\u662F\u5728\u8F38\u51FA5\u4E4B\u5F8C\uFF0Cx\u8B8A\u62104\u4E86\uFF0C\r
\u63A5\u4E0B\u4F86\u4F7F\u7528\u524D\u7F6E\u905E\u6E1B\u904B\u7B97\u5B50\uFF0C\u6240\u4EE54\u5148\u88AB\u6E1B\u62103\uFF0C\u7136\u5F8C\u624D\u8F38\u51FA\r
\r
### \u6307\u6D3E\u904B\u7B97\u5B50\r
\r
| \u529F\u80FD | \u7BC4\u4F8B | \u7B49\u503C\u5BEB\u6CD5 |\u985E\u5225 |\r
| - | - |- |- |\r
| \`+=\` |x += 100 | x = x + 100 |\u4E8C\u5143 |\r
|\`-=\`| x -= 100 | x = x - 100 | \u4E8C\u5143 |\r
|\`*=\`| x *= 100 |x = x * 100 | \u4E8C\u5143 |\r
|\`/=\`| x /= 100 | x = x / 100 | \u4E8C\u5143 |\r
|\`%=\`| x %= 100 |x = x % 100 | \u4E8C\u5143 |\r
\r
### \u7BC4\u4F8B:\u4F86\u8A66\u8A66\u770B\u52A0\u6CD5\u6307\u6D3E\u904B\u7B97\u5B50 += \r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u52A0\u6CD5\u6307\u6D3E\u904B\u7B97\u5B50 += (\u6574\u6578\u7248)\r
            Console.WriteLine("--\u6574\u6578\u7248--");\r
            int x = 10;\r
            x += 100;\r
            Console.WriteLine(x);\r
\r
            //\u52A0\u6CD5\u6307\u6D3E\u904B\u7B97\u5B50 += (\u5B57\u4E32\u7248)\r
            Console.WriteLine("--\u5B57\u4E32\u7248--");\r
            string name = "\u5B64\u7368\u4E00\u96BB\u96DE";\r
            name += " \u53F2\u4E0A\u6700\u5E25!";\r
            Console.WriteLine(name);\r
\r
            Console.ReadKey();\r
        }\r
    }\r
 }\r
\`\`\`\r
\r
\u7D50\u679C:\r
>--\u6574\u6578\u7248--\r
110\r
--\u5B57\u4E32\u7248--\r
\u5B64\u7368\u4E00\u96BB\u96DE \u53F2\u4E0A\u6700\u5E25!\r
\r
### \u512A\u5148\u7B49\u7D1A\r
* \u5C0F\u6642\u5019\u5B78\u6578\u5B78\u6642\uFF0C\u5E38\u5E38\u6703\u8AAA\u5148\u4E58\u9664\u5F8C\u52A0\u6E1B\uFF0C\u4F46\u9019\u9EBC\u591A\u904B\u7B97\u5B50\u4E2D\u5230\u5E95\u512A\u5148\u9806\u5E8F\u662F\u4EC0\u9EBC\u5462?\r
* \u96D6\u7136\u6709\u512A\u5148\u9806\u5E8F\u9019\u6771\u897F\uFF0C\u4F46\u5BE6\u969B\u4E0A\u7A0B\u5F0F\u64B0\u5BEB\u6642\uFF0C\u9084\u662F\u5EFA\u8B70\u5404\u4F4D\u642D\u914D\`()\`\u505A\u4F7F\u7528\uFF0C\u9019\u6A23\u80FD\u589E\u52A0\u7A0B\u5F0F\u7684\u53EF\u8B80\u6027\r
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210905/20097001WtB02pvpAV.png)\r
\r
### \u7576\u5927\u5BB6\u5B78\u6703\u9019\u4E9B\u904B\u7B97\u4E4B\u5F8C\u5462?\u5C31\u53EF\u4EE5\u8A66\u8457\u53BB\u7DF4\u7FD2\u505A\u4E00\u4E9B\u7C21\u6613\u7684\u52A0\u6E1B\u4E58\u9664\u5566!\r
### \u90A3\u6211\u5011\u4ECA\u5929\u7684\u904B\u7B97\u5B50\u6545\u4E8B\u5C31\u5230\u9019\u908A\u4E86\uFF0C\u5927\u5BB6\u660E\u5929\u898B`,gr="\u{1F916}[Day5]C# \u96DE\u790E\u89C0\u5FF5- \u8B93\u8B8A\u6578\u5B78\u6703\u4E03\u5341\u4E8C\u8B8A\u7684\u9AD8\u624B~\u904B\u7B97\u5B50";function dr(){return u("Chicken Say Hi | \u{1F916} \u8B93\u8B8A\u6578\u5B78\u6703\u4E03\u5341\u4E8C\u8B8A\u7684\u9AD8\u624B~\u904B\u7B97\u5B50"),t(s,{children:[n(o,{}),n(l,{backPath:r.IronMan13,title:gr,text:hr})]})}const pr=`\u5728\u771F\u5BE6\u4E16\u754C\u4E2D\uFF0C\u5927\u5BB6\u90FD\u5F88\u611B\u6BD4\u8F03\uFF0C\u6211\u6BD4\u4F60\u6709\u9322\uFF0C\\\r
\u6211\u9577\u5F97\u6BD4\u4F60\u9AD8\uFF0C\u6211\u6BD4\u4F60\u5E25\uFF0C\\\r
\u6211\u6BD4\u4F60\u6F02\u4EAE\uFF0CC#\u4E16\u754C\u4E5F\u662F\u975E\u5E38\u611B\u6BD4\u8F03\u7684\r
\r
### \u6BD4\u8F03\u904B\u7B97\u5B50\r
* \u96A8\u4FBF\u5169\u500B\u6578\u5B57\u6293\u4F86\u90FD\u662F\u53EF\u4EE5\u505A\u6BD4\u8F03\u7684\uFF0CC#\u7684\u4E16\u754C\u4E5F\u4E0D\u4F8B\u5916\r
\r
| \u904B\u7B97\u5B50 | \u7528\u9014 |  \u985E\u5225 |\r
| - | - | - |\r
|< | \u5C0F\u65BC | \u4E8C\u5143 |\r
|> | \u5927\u65BC | \u4E8C\u5143 |\r
|<= | \u5C0F\u65BC\u7B49\u65BC | \u4E8C\u5143 |\r
|>= | \u5927\u65BC\u7B49\u65BC | \u4E8C\u5143 |\r
|==| \u7B49\u65BC | \u4E8C\u5143 |\r
|!=| \u4E0D\u7B49\u65BC | \u4E8C\u5143 |\r
\r
\`\u6CE8\u610F! \u5404\u4F4D\u5343\u842C\u4E0D\u8981\u628A " == " \u8207 " = "\u641E\u6DF7\u4E86\uFF0C\u524D\u8005\u662F\u6BD4\u8F03\uFF0C\u5F8C\u8005\u662F\u8CE6\u503C\`\r
\r
### \u908F\u8F2F\u8868\u9054\u5F0F\r
* \u642D\u914D\u8457\u6BD4\u8F03\u904B\u7B97\u5B50\uFF0C\u6211\u5011\u53EF\u4EE5\u5217\u51FA\u908F\u8F2F\u8868\u9054\u5F0F\r
* \u5982\u679C\u7B54\u6848\u662F\u6B63\u78BA\u7684\u6211\u5011\u7A31\u4E4B\u70BA"\u771F(true)"\r
* \u53CD\u4E4B\u7B54\u6848\u662F\u4E0D\u6B63\u78BA\u7684\u6211\u5011\u7A31\u4E4B\u70BA"\u5047(false)"\r
\r
\u908F\u8F2F\u8868\u9054\u5F0F | \u7D50\u679C \r
------------- | -------------\r
|1 < 2 | \u771F\r
| 3 > 2 | \u771F \r
| 4 == 5 | \u5047 \r
| (6 / 2) != 3 | \u5047 \r
\r
### \u7BC4\u4F8B:\u6211\u5011\u4F86\u9A57\u8B49\u4E0A\u9762\u7684\u4F8B\u5B50\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u76F4\u63A5\u5370\u51FA\u7D50\u679C\r
            Console.WriteLine(1 < 2);\r
            Console.WriteLine(3 > 2);\r
            Console.WriteLine(4 == 5);\r
            Console.WriteLine((6 / 2) != 3);\r
\r
            Console.ReadKey();\r
        }\r
    }\r
}\r
\`\`\`\r
\r
\u7D50\u679C:\r
>True\\\r
True\\\r
False\\\r
False\r
\r
### \u908F\u8F2F\u904B\u7B97\u5B50\r
\u88E1\u982D\u5305\u542B\u4E86:\r
1. \`&&\` \u4E14 (and) \r
2. \`||\` \u6216 (or)\r
3. \`!\` \u975E (not)\r
\r
### 1. \`&&\` \u4E14 (and) :\u5169\u8005\u689D\u4EF6\u90FD\u8981\u6EFF\u8DB3\r
\r
|P | Q |  P and Q |\r
| - | - |- |\r
|true | true | true |\r
|true | false | false |\r
|false | true | false |\r
|false | false | false |\r
\r
### \u6211\u5011\u4F86\u770B\u770B\u96FB\u8DEF\u5716\uFF0C\u5FC5\u9808\u5169\u500B\u958B\u95DC\u90FD\u5C0E\u901A\uFF0C\u624D\u6703\u901A\u96FB\r
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210905/20097001UVjpqXfioN.png)\r
\r
### \u7BC4\u4F8B:x\u662F\u5927\u65BC10\u7684\u5076\u6578\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u5BA3\u544Ax\u70BA12\r
            int x = 12;\r
\r
            //x\u8981\u5927\u65BC10\uFF0C\u56E0\u70BA\u662F\u5076\u6578\u6240\u4EE5\u53EF\u4EE5\u88AB2\u6574\u9664\r
            Console.WriteLine((x > 10) && (x % 2 == 0));\r
            Console.ReadKey();\r
        }\r
    }\r
 }\r
 \`\`\`\r
 \r
 \u7D50\u679C:\r
 >True\r
\r
### 2. \`||\` \u6216 (or):\u5176\u4E2D\u4E4B\u4E00\u6EFF\u8DB3\u5247\u6210\u7ACB\r
\r
P | Q |  P and Q\r
| - | - |- |\r
|true | true | true |\r
|true | false | true |\r
|false | true | true |\r
|false | false | false |\r
\r
### \u6211\u5011\u4F86\u770B\u770B\u96FB\u8DEF\u5716\uFF0C\u53EA\u8981\u6709\u4E00\u500B\u958B\u95DC\u90FD\u5C0E\u901A\uFF0C\u5C31\u6703\u901A\u96FB\r
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210905/20097001XrHDlQUZwh.png)\r
\r
### \u7BC4\u4F8B:x\u662F\u8CA0\u6578\u6216\u662F x \u662F3\u7684\u500D\u6578\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u5BA3\u544Ax\u70BA12\r
            int x = 12;\r
\r
            //x\u662F\u6B63\u6578\uFF0C\u4F46x\u662F\u4E09\u7684\u500D\u6578\r
            Console.Write("x = " + x+" , ");\r
            Console.WriteLine((x < 10) || (x % 3 == 0));\r
\r
            //x\u662F\u8CA0\u6578\uFF0C\u4F46x\u4E0D\u662F\u4E09\u7684\u500D\u6578\r
            x = -10;\r
            Console.Write("x = " + x + " , ");\r
            Console.WriteLine((x < 10) || (x % 3 == 0));\r
\r
            //x\u662F\u6B63\u6578\uFF0C\u4E5Fx\u4E0D\u662F\u4E09\u7684\u500D\u6578\r
            x = 10;\r
            Console.Write("x = " + x + " , ");\r
            Console.WriteLine((x < 10) || (x % 3 == 0));\r
\r
            Console.ReadKey();\r
        }\r
    }\r
 }\r
 \`\`\`\r
 \r
 \u7D50\u679C:\r
 >x = 12 , True\r
x = -10 , True\r
x = 10 , False\r
\r
### 4. \`!\` \u975E (not):\u8207\u4E8B\u5BE6\u76F8\u53CD\r
* \u5982\u679C1\u4E0D\u7B49\u65BC2\uFF0C\u6211\u5011\u5C31 \`1 != 2\` \u4E5F\u53EF\u4EE5\u4F7F\u7528 \`!(1 == 2)\` \u8868\u793A\r
\r
### \u5E03\u6797\u8B8A\u6578~bool \r
* \u5E03\u6797\u8B8A\u6578\u4E5F\u662FC#\u8B8A\u6578\u6210\u54E1\u7684\u4E00\u7A2E\u578B\u5225\uFF0C\u4ED6\u7684\u7A2E\u65CF\u4EE3\u865F\u662F\`bool\`\r
* \u4ED6\u7684\u503C\u53EA\u6703\u6709\u5169\u7A2E\uFF0C\u4E0D\u662F\u771F\u5C31\u662F\u5047\uFF0C\u5F9E\u4F86\u4E0D\u9A19\u4EBA\r
\r
### \u7BC4\u4F8B:\u6211\u5011\u8F38\u5165\u4E00\u500B\u6574\u6578\uFF0C\u8B93\u96FB\u8166\u4F86\u544A\u8A34\u6211\u5011\u5B83\u662F\u4E0D\u662F\u5076\u6578\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u5BA3\u544A\u4E00\u500B\u5E03\u6797\u8B8A\u6578\r
            bool isEven;\r
\r
            Console.WriteLine("\u4F86\u8F38\u5165\u4E00\u500B\u6574\u6578\u5427!");\r
            int x = Convert.ToInt32(Console.ReadLine());\r
\r
            //\u5224\u65B7\u662F\u4E0D\u662F\u5076\u6578\r
            isEven = (x % 2) == 0;\r
\r
            //\u5217\u5370\u7D50\u679C\r
            Console.Write("\u8ACB\u554F\u795E\u5947\u4E00\u96BB\u96DE\uFF0C" + x + "\u662F\u5076\u6578\u55CE ? ");\r
            Console.WriteLine(isEven);\r
            Console.ReadKey();\r
        }\r
    }\r
}\r
\`\`\`\r
\r
\u8F38\u5165:\r
>10\r
\r
\u7D50\u679C:\r
>\u4F86\u8F38\u5165\u4E00\u500B\u6574\u6578\u5427!\\\r
10\\\r
\u8ACB\u554F\u795E\u5947\u4E00\u96BB\u96DE\uFF0C10\u662F\u5076\u6578\u55CE ? True\r
\r
\u8F38\u5165:\r
>11\r
\r
\u7D50\u679C:\r
>\u4F86\u8F38\u5165\u4E00\u500B\u6574\u6578\u5427!\\\r
1\\\r
\u8ACB\u554F\u795E\u5947\u4E00\u96BB\u96DE\uFF0C1\u662F\u5076\u6578\u55CE ? False\r
\r
### \u5C31\u8AAA\u96FB\u8166\u4E0D\u6703\u9A19\u4EBA\u5427\uFF0C\u5C0D\u5C31\u5C0D\uFF0C\u4E0D\u5C0D\u5C31\u4E0D\u5C0D\uFF0C\u6211\u5011\u73FE\u5728\u5DF2\u7D93\u53EF\u4EE5\u8B93\u96FB\u8166\u7B97\u6578\u5B78\uFF0C\u4E5F\u8B93\u96FB\u8166\u64C1\u6709\u660E\u8FA8\u662F\u975E\u7684\u80FD\u529B\u4E86\uFF0C\u8ACB\u5927\u5BB6\u671F\u5F85\u4E4B\u5F8C\u7684\u6587\u7AE0\uFF0C\u96FB\u8166\u6703\u8D8A\u4F86\u8D8A\u8070\u660E\u7684`,Cr="\u{1F916}[Day6]C# \u96DE\u790E\u89C0\u5FF5- \u7A0B\u5F0F\u78BC\u64C1\u6709\u5224\u65B7\u771F\u5047\u7684\u80FD\u529B~\u908F\u8F2F\u904B\u7B97\u5B50";function yr(){return u("Chicken Say Hi | \u{1F916} \u7A0B\u5F0F\u78BC\u64C1\u6709\u5224\u65B7\u771F\u5047\u7684\u80FD\u529B~\u908F\u8F2F\u904B\u7B97\u5B50"),t(s,{children:[n(o,{}),n(l,{backPath:r.IronMan13,title:Cr,text:pr})]})}const xr=`\u5728\u751F\u6D3B\u4E2D\uFF0C\u6211\u5011\u5E38\u5E38\u9762\u81E8\u9078\u64C7\uFF0C\\\r
\u4ECA\u5929\u5348\u9910\u5403\u4EC0\u9EBC\u597D\u5462?\u98EF\u9084\u662F\u9EB5\u5462?\\\r
\u660E\u5929\u8981\u53BB\u54EA\u88E1\u73A9?\u5C71\u4E0A\u9084\u662F\u6D77\u908A\u5462?\\\r
\u90A3\u9019\u4E9B\u9078\u64C7\u7684\u908F\u8F2F\u7D50\u69CB\u5728C#\u4E2D\u6211\u5011\u7A31\u70BA\`\u9078\u53D6\u7BC4\u570D\u8A9E\u53E5\`\r
\r
### if\u9673\u8FF0\u5F0F\r
* \u5728\u65E5\u5E38\u5C0D\u8A71\u4E2D\uFF0C\u6211\u5011\u5E38\u5E38\u8AAA\uFF0C\u5982\u679C...\u5C31...\r
* \u5982\u679C\u4E0B\u96E8\uFF0C\u5C31\u5F85\u5728\u5BB6\r
* \u5728C#\u7684\u8868\u9054\u65B9\u5F0F\u5247\u662F\uFF0C\`if....else...\`\r
\u5B83\u7684\u6A23\u5B50\u6703\u662F\r
>if ( \u689D\u4EF6 )\\\r
{\\\r
    ..............\\\r
}\\\r
else\\\r
{\\\r
    ...............\\\r
}\r
\r
### \u7BC4\u4F8B1:\u5982\u679C\u4E0B\u96E8\uFF0C\u90A3\u5C31\u5F85\u5728\u5BB6\uFF0C\u6C92\u4E0B\u96E8\u5C31\u51FA\u53BB\u73A9\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u5BA3\u544A\u5929\u6C23\r
            string weather = "\u4E0B\u96E8";\r
            Console.WriteLine("\u4ECA\u5929\u5929\u6C23 : " + weather);\r
\r
            //\u4F7F\u7528if\u9673\u8FF0\u53E5\u4F86\u505A\u5224\u65B7\r
            if(weather == "\u4E0B\u96E8")\r
            {\r
                Console.WriteLine("\u5F85\u5728\u5BB6");\r
            }\r
            else\r
            {\r
                Console.WriteLine("\u51FA\u53BB\u73A9");\r
            }\r
\r
            //\u628A\u5929\u6C23\u6539\u6210\u6674\u5929\uFF0C\u518D\u505A\u4E00\u6B21\u5224\u65B7\u8A66\u8A66\u770B\r
            weather = "\u6674\u5929";\r
            Console.WriteLine("\u4ECA\u5929\u5929\u6C23 : " + weather);\r
\r
            //\u4F7F\u7528if\u9673\u8FF0\u53E5\u4F86\u505A\u5224\u65B7\r
            if (weather == "\u4E0B\u96E8")\r
            {\r
                Console.WriteLine("\u5F85\u5728\u5BB6");\r
            }\r
            else\r
            {\r
                Console.WriteLine("\u51FA\u53BB\u73A9");\r
            }\r
\r
            Console.ReadKey();\r
        }\r
    }\r
}\r
\`\`\`\r
\r
\u7D50\u679C:\r
>\u4ECA\u5929\u5929\u6C23 : \u4E0B\u96E8\\\r
\u5F85\u5728\u5BB6\\\r
\u4ECA\u5929\u5929\u6C23 : \u6674\u5929\\\r
\u51FA\u53BB\u73A9\r
\r
### \u5224\u65B7\u6578\u5B57\u7684\u5927\u5C0F\r
### \u7BC4\u4F8B:\u62DB\u724C\u4E0A\u9762\u5BEB\u8AAA\u672A\u6210\u5E74\u8ACB\u52FF\u9032\u5165\uFF0C\u90A3\u6211\u5011\u4F86\u505A\u4E00\u500B\u8F38\u5165\u5E74\u9F61\uFF0C\u8B93\u96FB\u8166\u5224\u65B7\u80FD\u4E0D\u80FD\u9032\u5165\u5427\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            Console.WriteLine("\u8ACB\u8F38\u5165\u5E74\u9F61");\r
            //\u5BA3\u544A\u5E74\u9F61\uFF0C\u4E26\u5C07\u8F38\u5165\u7684\u503C\u8CE6\u4E88\u7D66\u4ED6\r
            int age = Convert.ToInt32(Console.ReadLine());\r
\r
            //\u5224\u65B7\u5E74\u9F61\r
            if(age < 18)\r
            {\r
                Console.WriteLine(age + " \u6B72\u662F\u672A\u6210\u5E74\uFF0C\u4E0D\u53EF\u9032\u5165!");\r
            }\r
            else\r
            {\r
                Console.WriteLine(age + " \u6B72\u5DF2\u6210\u5E74\uFF0C\u6B61\u8FCE\u5149\u81E8!");\r
            }\r
\r
            Console.ReadKey();\r
        }\r
    }\r
 }\r
 \`\`\`\r
 \r
 \u8F38\u5165:\r
 >48\r
\r
\u7D50\u679C:\r
 >\u8ACB\u8F38\u5165\u5E74\u9F61\\\r
48\\\r
48 \u6B72\u5DF2\u6210\u5E74\uFF0C\u6B61\u8FCE\u5149\u81E8!\r
 \r
 \u8F38\u5165:\r
 >15\r
\r
\u7D50\u679C:\r
 >\u8ACB\u8F38\u5165\u5E74\u9F61\\\r
15\\\r
15 \u6B72\u662F\u672A\u6210\u5E74\uFF0C\u4E0D\u53EF\u9032\u5165!\r
\r
### else if\r
* \u5982\u679C\u6709\u591A\u500B\u8981\u5224\u65B7\u7684\u689D\u4EF6\u6211\u5011\u53EF\u4EE5\u642D\u914D\`else if\`\u505A\u4F7F\u7528\r
### \u7BC4\u4F8B:\u5982\u679C\u6211\u6EFF18\u6B72\u5C31\u53EF\u4EE5\u8003\u6A5F\u8ECA\u99D5\u7167\uFF0C\u4F46\u8981\u6EFF20\u6B72\u624D\u80FD\u8003\u91CD\u6A5F\u99D5\u7167\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            Console.WriteLine("\u8ACB\u8F38\u5165\u5E74\u9F61");\r
            //\u5BA3\u544A\u5E74\u9F61\uFF0C\u4E26\u5C07\u8F38\u5165\u7684\u503C\u8CE6\u4E88\u7D66\u4ED6\r
            int age = Convert.ToInt32(Console.ReadLine());\r
\r
            //\u5224\u65B7\u5E74\u9F61\r
            if (age < 18)\r
            {\r
                Console.WriteLine(age + " \u6B72\u662F\u672A\u6210\u5E74\uFF0C\u4EFB\u4F55\u99D5\u7167\u90FD\u4E0D\u80FD\u8003!");\r
            }\r
            else if (age < 20)\r
            {\r
                Console.WriteLine(age + " \u6B72\uFF0C\u53EF\u4EE5\u8003\u6A5F\u8ECA\u99D5\u7167\uFF0C\u4F46\u4E0D\u80FD\u8003\u91CD\u6A5F\u99D5\u7167!");\r
            }\r
            else\r
            {\r
                Console.WriteLine(age + " \u6B72\uFF0C\u4EFB\u4F55\u99D5\u7167\u90FD\u53EF\u4EE5\u8003!");\r
            }\r
           Console.ReadKey();\r
        }\r
    }\r
  }\r
  \`\`\`\r
  \r
  \u8F38\u5165:\r
  >15\r
\r
\u7D50\u679C:\r
>\u8ACB\u8F38\u5165\u5E74\u9F61\\\r
15\\\r
15 \u6B72\u662F\u672A\u6210\u5E74\uFF0C\u4EFB\u4F55\u99D5\u7167\u90FD\u4E0D\u80FD\u8003!\r
\r
  \u8F38\u5165:\r
  >19\r
\r
\u7D50\u679C:\r
>\u8ACB\u8F38\u5165\u5E74\u9F61\\\r
19\\\r
19 \u6B72\uFF0C\u53EF\u4EE5\u8003\u6A5F\u8ECA\u99D5\u7167\uFF0C\u4F46\u4E0D\u80FD\u8003\u91CD\u6A5F\u99D5\u7167!\r
\r
  \u8F38\u5165:\r
  >48\r
\r
\u7D50\u679C:\r
>\u8ACB\u8F38\u5165\u5E74\u9F61\\\r
48\\\r
48 \u6B72\uFF0C\u4EFB\u4F55\u99D5\u7167\u90FD\u53EF\u4EE5\u8003!\r
\r
### \u5DE2\u72C0if\r
* \u6211\u5011\u53EF\u80FD\u6703\u5148\u7B2C\u4E00\u500B\u6C7A\u5B9A\uFF0C\u4E4B\u5F8C\u518D\u505A\u7B2C\u4E8C\u500B\u6C7A\u5B9A\r
### \u7BC4\u4F8B:\u5982\u679C\u662F\u5047\u65E5\u6211\u5C31\u8981\u51FA\u53BB\u73A9\uFF0C\u5E73\u65E5\u5C31\u5F97\u4E56\u4E56\u4E0A\u8AB2\uFF0C\u5982\u679C\u6674\u5929\u6211\u5C31\u8981\u53BB\u6D77\u908A\uFF0C\u4E0D\u7136\u5C31\u53BB\u722C\u5C71\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u4ECA\u5929\r
            Console.WriteLine("\u4ECA\u5929\u661F\u671F\u5E7E?");\r
            string today = Console.ReadLine();\r
            //\u5929\u6C23\r
            Console.WriteLine("\u4ECA\u5929\u5929\u6C23?");\r
            string weather = Console.ReadLine();\r
\r
            //\u5148\u5224\u65B7\u4ECA\u5929\u65E5\u662F\u4E0D\u662F\u5047\u65E5\r
            if (today == "\u661F\u671F\u516D" || today == "\u661F\u671F\u65E5")\r
            {\r
                if(weather == "\u6674\u5929")\r
                {\r
                    Console.WriteLine("\u4ECA\u5929" + today + "\uFF0C" + weather + ",\u4F86\u53BB\u6D77\u908A\u73A9");\r
                }\r
                else\r
                {\r
                    Console.WriteLine("\u4ECA\u5929" + today + "\uFF0C" + weather + ",\u4F86\u53BB\u722C\u5C71");\r
                }\r
            }\r
            else\r
            {\r
                Console.WriteLine("\u4ECA\u5929" + today + "\uFF0C\u6240\u4EE5\u8981\u4E0A\u8AB2");\r
            }\r
\r
            Console.ReadKey();\r
        }\r
    }\r
 }\r
 \`\`\`\r
 \r
 \u8F38\u5165:\r
 >\u661F\u671F\u516D\\\r
 >\u6674\u5929\r
\r
\u7D50\u679C:\r
>\u4ECA\u5929\u661F\u671F\u5E7E?\\\r
\u661F\u671F\u516D\\\r
\u4ECA\u5929\u5929\u6C23?\\\r
\u6674\u5929\\\r
\u4ECA\u5929\u661F\u671F\u516D\uFF0C\u6674\u5929,\u4F86\u53BB\u6D77\u908A\u73A9\r
\r
 \u8F38\u5165:\r
 >\u661F\u671F\u65E5\\\r
 >\u9670\u5929\r
\r
\u7D50\u679C:\r
>\u4ECA\u5929\u661F\u671F\u5E7E?\\\r
\u661F\u671F\u65E5\\\r
\u4ECA\u5929\u5929\u6C23?\\\r
\u9670\u5929\\\r
\u4ECA\u5929\u661F\u671F\u65E5\uFF0C\u9670\u5929,\u4F86\u53BB\u722C\u5C71\r
\r
 \u8F38\u5165:\r
 >\u661F\u671F\u4E00\\\r
 >\u9670\u5929\r
\r
\u7D50\u679C:\r
>\u4ECA\u5929\u661F\u671F\u5E7E?\\\r
\u661F\u671F\u4E00\\\r
\u4ECA\u5929\u5929\u6C23?\\\r
\u9670\u5929\\\r
\u4ECA\u5929\u661F\u671F\u4E00\uFF0C\u6240\u4EE5\u8981\u4E0A\u8AB2\r
\r
### \u81EA\u5F9E\u5B78\u6703if\u4E4B\u5F8C\u518D\u4E5F\u6C92\u6709\u9078\u64C7\u969C\u7919\u4E86\uFF0C\u4ECA\u5929\u7684\u6545\u4E8B\u5C31\u5230\u9019\u908A\u4E86\uFF0C\u8B1D\u8B1D\u5927\u5BB6\uFF0C\u6211\u5011\u660E\u5929\u518D\u898B`,Dr="\u{1F916}[Day7]C# \u96DE\u790E\u89C0\u5FF5- \u4F60\u6709\u9078\u64C7\u969C\u7919\u55CE? \u4EA4\u7D66if\u9673\u8FF0\u5F0F\u89E3\u6C7A\u5427!";function Sr(){return u("Chicken Say Hi | \u{1F916} \u4EA4\u7D66if\u9673\u8FF0\u5F0F\u89E3\u6C7A\u5427!"),t(s,{children:[n(o,{}),n(l,{backPath:r.IronMan13,title:Dr,text:xr})]})}const br=`\u4F60\u662F\u5426\u66FE\u7D93\u5167\u5FC3\u5145\u6EFF\u5404\u7A2E\u5982\u679C\u5462?\\\r
\u5982\u679C....\u6211\u5C31....\uFF0C\\\r
\u4E00\u7D44\`if\`\u5DF2\u7D93\u6EFF\u8DB3\u4E0D\u4E86\u4F60\u6642\uFF0C\\\r
\u90A3\u8A72\u5982\u4F55\u662F\u597D\u5462?\r
\r
### Switch\u9673\u8FF0\u5F0F\r
* \u55AE\u6191if..else..\u53EA\u80FD\u8655\u7406\u4E00\u500B\u689D\u4EF6\uFF0C\u4F46Switch\u662F\u5C08\u9580\u7528\u4F86\u8655\u7406\u591A\u5206\u652F\u7684\u8A9E\u53E5\r
\`\r
Switch\u8A9E\u53E5\u4E2D\u7684\u6E2C\u8A66\u91CF\u53EF\u4EE5\u662F\u4E00\u500B\u8B8A\u6578\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E00\u500B\u8868\u9054\u5F0F\u3002\u7A0B\u5F0F\u4E00\u4E00\u6E2C\u8A66case\u5206\u652F\u4E2D\u7684\u503C\uFF0C\u6E2C\u8A66\u5339\u914D\u5230\u54EA\u500B\u5206\u652F\u4E2D\u7684\u503C\uFF0C\u5C31\u57F7\u884C\u54EA\u500B\u5206\u652F\u4E2D\u7684\u8A9E\u53E5\u3002\r
\u6BCF\u500B\u5206\u652F\u90FD\u5DF2break\u8A9E\u53E5\u7D50\u675F\uFF0C\u6558\u8FF0\u53E5\u4E00\u65E6\u9047\u5230break\uFF0C\u5C31\u6703\u7D50\u675F\u6574\u500B\u8A9E\u53E5\u3002\r
\`\r
### \u7BC4\u4F8B:\u4F86\u73A9\u73A9\u6211\u5011\u5C0F\u6642\u5019\u7684\u7334\u5B50\u7E5E\u53E3\u4EE4\u5427\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u79AE\u62DC\u5E7E\r
            string week = Console.ReadLine();\r
\r
            //\u4F7F\u7528switch\r
            switch (week)\r
            {\r
                case "\u661F\u671F\u4E00":\r
                    Console.WriteLine("\u7334\u5B50\u7A7F\u65B0\u8863");\r
                    break;\r
                case "\u661F\u671F\u4E8C":\r
                    Console.WriteLine("\u7334\u5B50\u809A\u5B50\u9913");\r
                    break;\r
                case "\u661F\u671F\u4E09":\r
                    Console.WriteLine("\u7334\u5B50\u53BB\u722C\u5C71");\r
                    break;\r
                case "\u661F\u671F\u56DB":\r
                    Console.WriteLine("\u7334\u5B50\u53BB\u8003\u8A66");\r
                    break;\r
                case "\u661F\u671F\u4E94":\r
                    Console.WriteLine("\u7334\u5B50\u53BB\u8DF3\u821E");\r
                    break;\r
                case "\u661F\u671F\u516D":\r
                    Console.WriteLine("\u7334\u5B50\u53BB\u6597\u516D");\r
                    break;\r
                case "\u661F\u671F\u65E5":\r
                    Console.WriteLine("\u7334\u5B50\u904E\u751F\u65E5");\r
                    break;\r
            }\r
            \r
            Console.ReadKey();\r
        }\r
    }\r
  }\r
  \`\`\`\r
  \r
  \u8F38\u5165:\r
  >\u661F\u671F\u4E00\r
\r
\u7D50\u679C:\r
>\u661F\u671F\u4E00\\\r
\u7334\u5B50\u7A7F\u65B0\u8863\r
\r
  \u8F38\u5165:\r
  >\u661F\u671F\u4E8C\r
\r
\u7D50\u679C:\r
>\u661F\u671F\u4E8C\\\r
\u7334\u5B50\u809A\u5B50\u9913\r
\r
###\u96A8\u5802\u5C0F\u7DF4\u7FD2\r
* \u9084\u8A18\u7684\u57FA\u59C6\u62C9\u723E\u68EE\u8A08\u7B97\u516C\u5F0F\u55CE?\u6211\u5011\u4ECA\u5929\u4F86\u7528switch\u5BE6\u73FE\u5427\r
* \u9019\u904E\u7A0B\u7A0B\u5F0F\u53EF\u80FD\u6703\u8907\u96DC\u9EDE\uFF0C\u5C6C\u65BC\u6BD4\u8F03\u9032\u968E\u7684\u516C\u5F0F\uFF0C\u6709\u8208\u8DA3\u7684\u670B\u53CB\u5728\u7814\u7A76\u5C31\u53EF\u4EE5\u4E86\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            Console.WriteLine("\u8ACB\u8F38\u5165\u5E74\u6708\u65E5");\r
            int y = Convert.ToInt32(Console.ReadLine());\r
            int m = Convert.ToInt32(Console.ReadLine());\r
            int d = Convert.ToInt32(Console.ReadLine());\r
            int total = 365; //\u5E73\u5E74\r
            if ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0)\r
                total = 366;\r
            switch (m)\r
            {\r
               case 1:\r
                    total -= 31;\r
                    goto case 2;\r
                case 2:\r
                    if ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0) //\u958F\u5E74\r
                    {\r
                        total -= 29;\r
                    }\r
                    else\r
                    {\r
                        total -= 28;\r
                    }\r
                    goto case 3;\r
                case 3:\r
                    total -= 31;\r
                    goto case 4;\r
                case 4:\r
                    total -= 30;\r
                    goto case 5;\r
                case 5:\r
                    total -= 31;\r
                    goto case 6;\r
                case 6:\r
                    total -= 30;\r
                    goto case 7;\r
                case 7:\r
                    total -= 31;\r
                    goto case 8;\r
                case 8:\r
                    total -= 31;\r
                    goto case 9;\r
                case 9:\r
                    total -= 30;\r
                    goto case 10;\r
                case 10:\r
                    total -= 31;\r
                    goto case 11;\r
                case 11:\r
                    total -= 30;\r
                    goto case 12;\r
                case 12:\r
                    total -= 31;\r
                    goto default;\r
                default: total += d; break;\r
            }\r
            Console.WriteLine(m+"\u6708"+d+"\u65E5\u662F"+y+"\u5E74\u7684\u7B2C"+ total + "\u5929");\r
\r
            Console.ReadKey();\r
        }\r
    }\r
  }\r
  \`\`\`\r
\r
\r
\u8F38\u5165\r
>2021\\\r
09\\\r
09\r
\r
\u7D50\u679C:\r
>\u8ACB\u8F38\u5165\u5E74\u6708\u65E5\\\r
2021\\\r
09\\\r
09\\\r
9\u67089\u65E5\u662F2021\u5E74\u7684\u7B2C252\u5929\r
\r
\`go to \u53EF\u4EE5\u6307\u5B9A\u8981\u53BB\u7684\u689D\u4EF6\uFF0C\u5982\u679C\u4E00\u500B\u689D\u4EF6\u4E4B\u4E0B\u8981\u8DD1\u597D\u5E7E\u500B\u5206\u652F\u5C31\u53EF\u4EE5\u62FF\u4F86\u505A\u4F7F\u7528\`\r
\`\u5728switch\u4E2D\u7684else\uFF0C\u5BEB\u4F5Cdefault\`\r
\r
### \u4E00\u5343\u500B\u5982\u679C...\u5C31...\uFF0C\u53EA\u8981\u4E00\u500Bswitch\u5C31\u80FD\u628A\u7A0B\u5F0F\u78BC\u6392\u7684\u6574\u6574\u9F4A\u9F4A\u7684\u4E86\uFF0C\u597D\u5566\u5927\u5BB6\u660E\u5929\u898B\u55BD!`,Fr="\u{1F916}[Day8]C# \u96DE\u790E\u89C0\u5FF5- \u5982\u679C\u6C92\u6709\u5982\u679C\uFF0C\u53EA\u6709\u592A\u591A\u7684\u5982\u679Cswitch\u9673\u8FF0\u5F0F";function fr(){return u("Chicken Say Hi | \u{1F916} \u5982\u679C\u6C92\u6709\u5982\u679C\uFF0C\u53EA\u6709\u592A\u591A\u7684\u5982\u679Cswitch\u9673\u8FF0\u5F0F"),t(s,{children:[n(o,{}),n(l,{backPath:r.IronMan13,title:Fr,text:br})]})}const Pr=`\u597D\u7169\u597D\u7169\uFF0C\u6709\u6642\u5019\u5C31\u70BA\u4E861+2+..+100\uFF0C\\\r
\u5BEB\u4E86\u8D85\u9577\u7A0B\u5F0F\uFF0C\\\r
\u90A3\u53C8\u81ED\u53C8\u9577\u7684\u7A0B\u5EA6\u582A\u6BD4\u88F9\u8173\u5E03\u554A\u3002\r
\r
### for\u8FF4\u5708\r
* \u5728for\u8FF4\u5708\u4E2D\uFF0C\u6211\u5011\u9700\u8981\u5BA3\u544A\u4E00\u500B\u521D\u59CB\u503C\r
* \u518D\u4F86\u662F\u5BA3\u544A\u689D\u4EF6\u4EC0\u9EBC\u6642\u5019\u8A72\u505C\u4E0B\u4F86\r
* \u4EE5\u4E0B\u662Ffor\u8FF4\u5708\u7684\u7D50\u69CB\r
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210907/200970016wwyC09wTd.png)\r
\r
### \u7BC4\u4F8B:\u6211\u5011\u4F86\u7DF4\u7FD21+2+3+...+100\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u5BA3\u544A\u4E00\u500B\u6574\u6578\uFF0C\u4F86\u8B93\u4ED6\u81EA\u589E\r
            int sum = 0;\r
\r
            //\u958B\u59CB\u4F7F\u7528for\u8FF4\u5708\r
            for (int i = 1; i <= 100; i++)\r
            {\r
                sum += i;//\u4F7F\u7528\u6307\u6D3E\u904B\u7B97\u5B50\r
            }\r
\r
            //\u770B\u7D50\u679C\r
            Console.WriteLine(sum);\r
            Console.ReadKey();\r
        }\r
    }\r
 }\r
 \`\`\`\r
 \r
 \u7D50\u679C:\r
 >5050\r
\r
### \u96A8\u5802\u5C0F\u7DF4\u7FD2\r
### \u7BC4\u4F8B:\u6211\u5011\u4F86\u7528for\u8FF4\u5708\u5BE6\u73FE\u6578\u5B78\u516C\u5F0F\u7684\u968E\u4E58\uFF0Cn!=1 X 2 X.....Xn\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u8B80\u53D6\u7528\u6236\u8F38\u5165\u7684\u6578\u5B57\r
            int n = Convert.ToInt32(Console.ReadLine());\r
\r
            //\u5BA3\u544A\u4E00\u500B\u9577\u6574\u6578\u8B8A\u6578\r
            long a = 1;\r
            for (int i = 1; i <= n; i++)\r
            {\r
                //\u505A\u4E58\u6CD5\u7684\u7D2F\u8A08\r
                a *= i;\r
            }\r
            Console.WriteLine(n + "! = " + a);\r
            Console.ReadKey();\r
        }\r
    }\r
  }\r
  \`\`\`\r
  \r
 \u8F38\u5165:\r
 >20\r
 \r
 \u7D50\u679C:\r
 >20\\\r
20! = 2432902008176640000\r
\r
### \u4EE5\u4E0A\u5C31\u662F\u6211\u5011\u4ECA\u5929\u7684for\u8FF4\u5708\uFF0C\u532F\u4E86\u8FF4\u5708\u4E4B\u5F8C\u53EF\u4EE5\u5927\u5927\u7684\u964D\u4F4E\u7A0B\u5F0F\u7684\u91CD\u8907\u6027\uFF0C\u6211\u5011\u5C31\u660E\u5929\u518D\u898B\u5566!`,vr="\u{1F916}[Day9]C# \u96DE\u790E\u89C0\u5FF5- \u7701\u53BB\u91CD\u8907\u7A0B\u5F0F\u78BC\u7684\u597D\u5E6B\u624B~for\u8FF4\u5708";function Er(){return u("Chicken Say Hi | \u{1F916} \u7701\u53BB\u91CD\u8907\u7A0B\u5F0F\u78BC\u7684\u597D\u5E6B\u624B~for\u8FF4\u5708"),t(s,{children:[n(o,{}),n(l,{backPath:r.IronMan13,title:vr,text:Pr})]})}const Ar=`\u65E5\u5B50\u4E00\u5929\u4E00\u5929\u904E\uFF0C\\\r
\u5468\u800C\u5FA9\u59CB\uFF0C\u7121\u9650\u5FAA\u74B0\\\r
C#\u88E1\u9762\u4E5F\u6709\u91CD\u8907\u4E0D\u65B7\u7684\u8A9E\u53E5\uFF0Cwhile\r
\r
### while\u8FF4\u5708\r
* \u57F7\u884C\u524D\u6703\u5148\u5224\u65B7\u689D\u4EF6\u662F\u5426\u70BA\u771F\r
* \u5982\u679C\u689D\u4EF6\u70BA\u771F\u5C31\u7E7C\u7E8C\u57F7\u884C\uFF0C\u76F4\u5230\u689D\u4EF6\u8B8A\u6210\u5426\r
* \u5982\u679C\u689D\u4EF6\u5F0F\u771F\uFF0C\u7A0B\u5F0F\u6703\u6C38\u9060\u57F7\u884C\r
\r
### \u7BC4\u4F8B:\u6211\u5011\u4F86\u5012\u657810~1\uFF0C\u6578\u52301\u6642\u5C31\u558A\u65B0\u5E74\u5FEB\u6A02\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u5148\u5BA3\u544A\u4E00\u500B\u958B\u95DC\r
            bool open = true;\r
\r
            //\u5BA3\u544A\u4E00\u500B\u5012\u6578\u7528\u7684\u6574\u6578\u8B8A\u6578\r
            int number = 10;\r
\r
            //\u958B\u59CB\u57F7\u884C\u5012\u6578\r
            while (open)\r
            {\r
                //\u5982\u679C\u6578\u52301\u5C31\u628A\u958B\u95DC\u95DC\u6389\uFF0C\u4E0B\u6B21\u5C31\u4E0D\u6703\u57F7\u884C\r
                if(number == 1)\r
                {\r
                    open = false;\r
                }\r
\r
                //\u5370\u51FA\u7576\u524D\u6578\u5B57\uFF0C\u5370\u5B8C\u5F8C\u5C31\u6E1B\u4E00\r
                Console.WriteLine(number--);\r
            }\r
            //\u90FD\u5012\u6578\u5B8C\u5F8C\u5C31\u558A\u65B0\u5E74\u5FEB\u6A02\r
            Console.WriteLine("\u65B0\u5E74\u5FEB\u6A02!");\r
\r
            Console.ReadKey();\r
        }\r
    }\r
  }\r
  \`\`\`\r
  \r
  \u7D50\u679C:\r
  >10\\\r
9\\\r
8\\\r
7\\\r
6\\\r
5\\\r
4\\\r
3\\\r
2\\\r
1\\\r
\u65B0\u5E74\u5FEB\u6A02!\r
\r
### break\r
* \u53EA\u8981\u5728\u8FF4\u5708\u4E2D\u52A0\u5165break\uFF0C\u7121\u8AD6\u8FF4\u5708\u689D\u4EF6\u5982\u4F55\u5C31\u90FD\u76F4\u63A5\u7D50\u675F\u8FF4\u5708\r
* \u5373\u4F7F\u689D\u4EF6\u70BAtrue\u9084\u662F\u6703\u7D50\u675F\u8FF4\u5708\r
### \u7BC4\u4F8B:\u6211\u5011\u4F86\u7528\u525B\u525B\u7684\u7BC4\u4F8B\u4F86\u5BE6\u9A57break\u5427\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u5148\u5BA3\u544A\u4E00\u500B\u958B\u95DC\r
            bool open = true;\r
\r
            //\u5BA3\u544A\u4E00\u500B\u5012\u6578\u7528\u7684\u6574\u6578\u8B8A\u6578\r
            int number = 10;\r
\r
            //\u958B\u59CB\u57F7\u884C\u5012\u6578\r
            while (open)\r
            {\r
               \r
                //\u5370\u51FA\u7576\u524D\u6578\u5B57\r
                Console.WriteLine(number);\r
\r
                //\u5982\u679C\u6578\u52301\u5C31break\uFF0C\u653E\u5F8C\u9762\u7684\u539F\u56E0\u662Fberak\u5F8C\u5C31\u4E0D\u6703\u57F7\u884C\u4E86\r
                if (number == 1)\r
                {\r
                    //\u57F7\u884C\u5230\u9019\u908A\u5C31\u4E2D\u65B7\r
                    break;\r
                }\r
                //break\u5F8C\u5C31\u4E0D\u6703\u57F7\u884C\u4E86\uFF0C\u6240\u4EE5\u905E\u6E1B\u653E\u5230\u5F8C\u9762\r
                number--;\r
            }\r
            //\u90FD\u5012\u6578\u5B8C\u5F8C\u5C31\u558A\u65B0\u5E74\u5FEB\u6A02\r
            Console.WriteLine("\u65B0\u5E74\u5FEB\u6A02!");\r
            \r
             //\u6211\u5011\u5BEB\u770B\u770B\u958B\u95DC\u7684\u503C\r
             Console.WriteLine("\u958B\u95DC = " + open);\r
\r
            Console.ReadKey();\r
        }\r
    }\r
  }\r
  \`\`\`\r
  \r
  \u7D50\u679C:\r
  >10\\\r
9\\\r
8\\\r
7\\\r
6\\\r
5\\\r
4\\\r
3\\\r
2\\\r
1\\\r
\u65B0\u5E74\u5FEB\u6A02!\\\r
\u958B\u95DC = True\r
\r
\`\u5728\u9019\u908A\u6211\u5011\u53EF\u4EE5\u770B\u5230\u958B\u95DC\u7684\u503C\u660E\u660E\u9084\u662Ftrue\uFF0C\u4F46\u4E00\u57F7\u884CBreak\u8FF4\u5708\u5C31\u505C\u6389\u4E86\`\r
\r
### continue\r
* \u4ED6\u8DDFbreak\u4E00\u6A23\u662F\u4E2D\u65B7\u8FF4\u5708\r
* \u4F46\u4E0D\u4E00\u6A23\u7684\u9EDE\uFF0C\u4ED6\u662F\u4E2D\u65B7\`\u672C\u6B21\u8FF4\u5708\`\r
* \u9019\u6B21\u8FF4\u5708\u57F7\u884C\u4E0D\u57F7\u884C\uFF0C\u4F46\u4E0B\u6B21\u9084\u6703\u57F7\u884C\r
\r
### \u7BC4\u4F8B:\u6211\u5011\u5370\u51FA1~10\u7684\u5076\u6578\u5427\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u5BA3\u544A\u4E00\u500B\u8A08\u6578\u7528\u7684\u6574\u6578\u8B8A\u6578\r
            int number = 0;\r
\r
            //\u958B\u59CB\u57F7\u884C\u8A08\u6578\r
            while (number <11)\r
            {\r
                //\u5148\u505A\u52A0\u4E00\r
                number++;\r
                //\u5982\u679C\u4E0D\u662F\u5076\u6578\uFF0C\u672C\u6B21\u5F8C\u9762\u5C31\u4E0D\u57F7\u884C\u4E86\r
                if (number % 2 !=0)\r
                {\r
                    continue;\r
                }\r
                //\u5370\u51FA\u7576\u524D\u6578\u5B57\uFF0C\u4E26\u52A0\u4E00\r
                Console.WriteLine(number);\r
            }\r
\r
            Console.ReadKey();\r
        }\r
    }\r
  }\r
  \`\`\`\r
  \r
  \u7D50\u679C:\r
  >2\\\r
4\\\r
6\\\r
8\\\r
10\r
\r
\`\u6211\u5011\u5C31\u53EF\u4EE5\u767C\u73FE\uFF0C\u7576\u57FA\u6578\u7684\u6642\u5019\u8FF4\u5708\u5C31\u6C92\u5F80\u4E0B\u57F7\u884C\u4E86\uFF0C\u5076\u6578\u624D\u6703\u57F7\u884C\`\r
\r
### \u6211\u5011\u4ECA\u5929\u7684\u6545\u4E8B\u5C31\u5230\u9019\u908A\uFF0CTo be continue....`,wr="\u{1F916}[Day10]C# \u96DE\u790E\u89C0\u5FF5- \u91CD\u64AD\u8207\u505C\u6B62 while\u8FF4\u5708\u8207break";function Lr(){return u("Chicken Say Hi | \u{1F916} \u91CD\u64AD\u8207\u505C\u6B62 while\u8FF4\u5708\u8207break"),t(s,{children:[n(o,{}),n(l,{backPath:r.IronMan13,title:wr,text:Ar})]})}const Tr=`\u5728\u96FB\u8166\u4E16\u754C\u4E2D\uFF0C\u5F88\u591A\u7DE8\u78BC\u90FD\u662F\u8907\u96DC\u4E14\u770B\u4E0D\u61C2\u7684\uFF0C\\\r
\u4F8B\u5982\u984F\u8272\u7DE8\u78BC\uFF0CFF0000\u4EE3\u8868\u7D05\u8272\uFF0C800080\u4EE3\u8868\u7DA0\u8272\uFF0C\\\r
\u4F60\u4E0D\u8AAA\uFF0C\u6211\u4E0D\u8AAA\uFF0C\u6C92\u4EBA\u77E5\u9053\u9019\u7DE8\u78BC\u4EE3\u8868\u7684\u610F\u601D\uFF0C\\\r
\u6211\u5011\u4ECA\u5929\u5C31\u4F86\u5C07\u7DE8\u78BC\u7C21\u5316\u5427\r
\r
### \u5217\u8209(enum)\r
* \u5217\u8209\u985E\u578B(Enueration type)\u80FD\u628A\u5B57\u4E32\u6620\u5C04\u5230\u6578\u5B57\r
* \u589E\u52A0\u53EF\u8B80\u6027\u4E5F\u53EF\u53C3\u52A0\u8A08\u7B97\r
* \u7D50\u69CB\u5982\u4E0B\r
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210909/20097001LTMmcCPN7j.png)\r
\r
\`!\u6CE8\u610F!:WeekDays\u4E0D\u662F\u8B8A\u6578\uFF0C\u800C\u662F\u4E00\u7A2E\u6578\u64DA\u985E\u578B\uFF0C\u662F\u548Cint,double,string\u7B49\u4E00\u6A23\u7684\u6578\u64DA\u985E\u578B\uFF0C\u8A72\u5217\u8209\u985E\u578B\u7684\u503C\u53EA\u80FD\u662F\u4E03\u500B\u5217\u8209\u9805\u4E4B\u4E00\uFF0C\u6BCF\u500B\u5217\u8209\u8868\u9762\u4E0A\u662F\u4E00\u500B\u5B57\u4E32\uFF0C\u80CC\u5F8C\u90FD\u95DC\u806F\u8457\u4E00\u500B\u6574\u6578\u503C\uFF0C\u9ED8\u8A8D\u60C5\u6CC1\u7B2C\u4E00\u500B\u70BA0\u4E4B\u5F8C\u4F9D\u5E8F\u905E\u589E\`\r
\r
### \u7BC4\u4F8B:\u6211\u5011\u4F86\u7528\u5217\u8209\u5B9A\u7FA9\u661F\u671F\u5427\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        //\u5BA3\u544A\u661F\u671F\u7684\u5217\u8209\r
        enum WeekDays { \u661F\u671F\u4E00, \u661F\u671F\u4E8C, \u661F\u671F\u4E09, \u661F\u671F\u56DB, \u661F\u671F\u4E94, \u661F\u671F\u516D, \u661F\u671F\u5929 }\r
        static void Main(string[] args)\r
        {\r
            int a = Convert.ToInt32(Console.ReadLine());\r
\r
            //\u5C07\u8B80\u5230\u7684\u6578\u5B57\u8F49\u70BA\u661F\u671F\r
            WeekDays today = (WeekDays)a;\r
\r
            //\u5224\u65B7\u4ECA\u5929\u662F\u5426\u70BA\u5047\u65E5\r
            if ((today == WeekDays.\u661F\u671F\u5929 || today == WeekDays.\u661F\u671F\u516D))\r
            {\r
                Console.WriteLine("\u653E!\u5047!\u5566!!!!");\r
            }\r
            else\r
            {\r
                Console.WriteLine("\u7121\u60C5\u4E0A\u73ED\u65E5!");\r
            }\r
            Console.ReadKey();\r
        }\r
    }\r
  }\r
  \`\`\`\r
  \r
  \u8F38\u5165:\r
  >1\r
  \r
  \u7D50\u679C:\r
  >1\\\r
\u7121\u60C5\u4E0A\u73ED\u65E5!\r
\r
  \u8F38\u5165:\r
  >6\r
  \r
  \u7D50\u679C:\r
  >6\\\r
\u653E!\u5047!\u5566!!!!\r
\r
### \u5217\u8209\u898F\u5247\r
* \u5728\u9ED8\u8A8D\u60C5\u6CC1\u4E4B\u4E0B\uFF0C\u90FD\u662F\u6574\u6578(int)\u985E\u578B\r
* \u5982\u679C\u6709\u5176\u4ED6\u9700\u8981\uFF0C\u6211\u5011\u53EF\u4EE5\u81EA\u5B9A\u7FA9\u5217\u8209\u578B\u614B\r
* \u95DC\u806F\u76F4\u53EF\u4EE5\u662Fbyte,sbyte,short,ushort,int,uint,long\u548Culong\u7B49\u985E\u578B\r
\r
### \u7BC4\u4F8B: \u5C07\u5217\u8209\u6539\u6210short\u578B\u5225\r
\`\`\`csharp\r
 enum WeekDays : short\r
        {\r
            \u661F\u671F\u4E00,\r
            \u661F\u671F\u4E8C,\r
            \u661F\u671F\u4E09,\r
            \u661F\u671F\u56DB,\r
            \u661F\u671F\u4E94,\r
            \u661F\u671F\u516D,\r
            \u661F\u671F\u65E5\r
        }\r
\`\`\`\r
        \r
### \u4F7F\u7528\u5217\u8209\u7684\u597D\u8655:\r
- \u4F7F\u7528\u503C\u6A19\u793A\u4EE3\u66FF\u6578\u5B57\uFF0C\u589E\u5F37\u7A0B\u5E8F\u7684\u53EF\u8B80\u6027\u3002\r
- \u4F7F\u6BCF\u500B\u5217\u8209\u90FD\u95DC\u806F\u8457\u4E00\u500B\u6578\u5B57\uFF0C\u53EF\u53C3\u52A0\u8A08\u7B97\u548C\u5FAA\u74B0\u3002\r
- \u5217\u8209\u8B8A\u6578\u53EA\u80FD\u8209\u5217\u8209\u9805\u4E2D\u7684\u503C\uFF0C\u6709\u5229\u65BC\u7DE8\u8B6F\u5668\u6AA2\u67E5\u51FA\u975E\u6CD5\u7684\u8CE6\u503C\u3002\r
\r
### \u7D50\u69CB\u9AD4(Structure)\r
* \u5F88\u591A\u4E92\u76F8\u806F\u7E6B\u7684\u4FE1\u606F\u7D44\u6210\u4E00\u500B\u6574\u9AD4\r
* C#\u4E2D\u6211\u5011\u53EF\u4EE5\u628A\u9019\u4E9B\u7DCA\u5BC6\u806F\u7E6B\u7684\u8B8A\u6578\u5B9A\u7FA9\u6210\u7D50\u69CB\u9AD4(Structure)\r
\r
### \u7BC4\u4F8B:\u6211\u5011\u4F86\u5B9A\u7FA9\u4E00\u500B\u7C21\u55AE\u7684\u7D50\u69CB\u9AD4\u8207\u4ED6\u7684\u6578\u64DA\u6210\u54E1\u5427\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        /// <summary>\r
        /// \u5B78\u751F\uFF0C\u7D50\u69CB\u9AD4\r
        /// </summary>\r
        struct Student\r
        {\r
            //\u5B78\u865F\r
            public int number;\r
            //\u59D3\u540D\r
            public string name;\r
            //\u6027\u5225\r
            public string sex;\r
            //\u751F\u65E5\r
            public string birthday;\r
        }\r
\r
        static void Main(string[] args)\r
        {\r
            Student boy;//\u5BA3\u544A\u8B8A\u6578boy\r
            boy.number = 5487;\r
            boy.name = "\u5B64\u7368\u4E00\u96BB\u96DE";\r
            boy.sex = "\u516C";\r
            boy.birthday = "1111.01.01";\r
\r
\r
            Student girl;//\u5BA3\u544A\u8B8A\u6578girl\r
            girl.number = 9527;\r
            girl.name = "\u5B64\u7368\u4E5D\u5341\u4E5D\u96BB\u96DE";\r
            girl.sex = "\u6BCD";\r
            girl.birthday = "9999.09.09";\r
\r
\r
            Console.WriteLine("\u5B78\u865F:" + boy.number);\r
            Console.WriteLine("\u59D3\u540D:" + boy.name);\r
            Console.WriteLine("\u6027\u5225:" + boy.sex);\r
            Console.WriteLine("\u751F\u65E5:" + boy.birthday);\r
            Console.WriteLine("");\r
\r
            Console.WriteLine("\u5B78\u865F:" + girl.number);\r
            Console.WriteLine("\u59D3\u540D:" + girl.name);\r
            Console.WriteLine("\u6027\u5225:" + girl.sex);\r
            Console.WriteLine("\u751F\u65E5:" + girl.birthday);\r
            Console.ReadKey();\r
        }\r
    }\r
  }\r
 \`\`\`\r
\r
\u7D50\u679C:\r
>\u5B78\u865F:5487\\\r
\u59D3\u540D:\u5B64\u7368\u4E00\u96BB\u96DE\\\r
\u6027\u5225:\u516C\\\r
\u751F\u65E5:1111.01.01\r
\r
\u5B78\u865F:9527\\\r
\u59D3\u540D:\u5B64\u7368\u4E5D\u5341\u4E5D\u96BB\u96DE\\\r
\u6027\u5225:\u6BCD\\\r
\u751F\u65E5:9999.09.09\r
\r
### \u6709\u4E86\u5217\u8209\u8DDF\u7D50\u69CB\u9AD4\uFF0C\u8B93\u6211\u5011\u5BEB\u7A0B\u5F0F\u53EF\u4EE5\u66F4\u52A0\u660E\u78BA\u5730\u53BB\u8655\u7406\u8CC7\u6599\uFF0C\u4E5F\u8B93\u53EF\u8B80\u6027\u66F4\u597D`,kr="\u{1F916}[Day11]C# \u96DE\u790E\u89C0\u5FF5- \u628A\u8907\u96DC\u7684\u4E8B\u60C5\u8207\u95DC\u4FC2\u7C21\u55AE\u5316~\u5217\u8209\u8207\u7D50\u69CB";function Br(){return u("Chicken Say Hi | \u{1F916} \u628A\u8907\u96DC\u7684\u4E8B\u60C5\u8207\u95DC\u4FC2\u7C21\u55AE\u5316~\u5217\u8209\u8207\u7D50\u69CB"),t(s,{children:[n(o,{}),n(l,{backPath:r.IronMan13,title:kr,text:Tr})]})}const Wr=`\u6210\u7E3E\u55AE\u4E0A\u6709\u570B\uFF0C\u82F1\uFF0C\u6578\uFF0C\u7269\u7406\u56DB\u79D1\\\r
\u5206\u6578\u5206\u522570\u300189\u300172\u300193\\\r
\u9019\u6642\u5019\u6211\u5011\u5C31\u53EF\u4EE5\u7528\u9663\u5217\u5C07\u4ED6\u5011\u7D81\u518D\u4E00\u8D77\r
\r
### \u9663\u5217(array)\r
* \`\u6CE8\u610F:C#\u7D22\u5F15\u662F\u5F9E0\u958B\u59CB\u8A08\u7B97\`\r
* \u9663\u5217\u7684\u8A9E\u6CD5\u5982\u4E0B\r
\r
* \u6574\u6578\u9663\u5217:\r
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210911/200970019VZBEZhIvR.png)\r
\r
* \u5B57\u4E32\u9663\u5217:\r
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210912/20097001MJDkMN4u2w.png)\r
\r
* \u7576\u6B64\u53E5\u88AB\u57F7\u884C\u6642\uFF0C\u7CFB\u7D71\u5C31\u6703\u5728\u5167\u5B58\u4E2D\u5206\u914D\u4E00\u6BB5\u9023\u7E8C\u7684\u7A7A\u9593\u4F86\u5132\u5B58\u9019\u56DB\u500Bint\u578B\u6578\u64DA\r
* \u9663\u5217\u5143\u7D20\u7684\u521D\u59CB\u503C\u5217\u5728\u5927\u62EC\u865F\u88E1\u9762\uFF0C\u4E26\u4E14\u7528\u9017\u865F\u9694\u958B\r
\r
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210911/20097001y7N7yOQaCc.png)\r
\r
### \u7BC4\u4F8B:\u6211\u6709\u570B\uFF0C\u82F1\uFF0C\u6578\uFF0C\u7269\u7406\u56DB\u79D1\uFF0C\u5206\u6578\u5206\u522570\u300189\u300172\u300193\uFF0C\u8ACB\u5E6B\u6211\u7B97\u5E73\u5747\u5206\u6578\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u5BA3\u544A\u6574\u6578\u9663\u5217\r
            int[] scores = { 70, 89, 72, 93 };\r
\r
            //\u8A08\u7B97\u7E3D\u5408\r
            int sum = scores[0] + scores[1] + scores[2] + scores[3];\r
\r
            Console.WriteLine("\u7E3D\u5408 : " + sum);\r
\r
            //\u8A08\u7B97\u5E73\u5747\u503C\r
            Console.WriteLine("\u5E73\u5747\u503C : " + (sum / 4));\r
\r
            Console.ReadKey();\r
        }\r
    }\r
 }\r
 \`\`\`\r
 \r
 \u7D50\u679C:\r
 >\u7E3D\u5408 : 324\\\r
\u5E73\u5747\u503C : 81\r
\r
### \u9663\u5217\u9032\u968E\u7528\u6CD5\r
* \u53D6\u5F97\u9663\u5217\u9577\u5EA6\r
    * \u4F7F\u7528 \`array.Length\`\r
\r
* \u9663\u5217\u975E\u5E38\u9069\u5408\u642D\u914Dfor\u8FF4\u5708\u670D\u7528\r
\r
### \u7BC4\u4F8B:\u5C07\u524D\u9762\u7684\u7BC4\u4F8B\u4F7F\u7528for\u8FF4\u5708\u6539\u5BEB\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u5BA3\u544A\u6574\u6578\u9663\u5217\r
            int[] scores = { 70, 89, 72, 93 };\r
\r
            //\u5BA3\u544A\u7E3D\u548C\r
            int sum = 0;\r
\r
            //\u4F7F\u7528for\u8FF4\u5708\uFF0C\u689D\u4EF6\u70BA\u9663\u5217\u7684\u9577\u5EA6\r
            for (int i = 0; i < scores.Length; i++)\r
            {\r
                Console.WriteLine(scores[i]);\r
                sum += scores[i];\r
            }\r
\r
            //\u5C07\u7E3D\u548C\u7684\u5206\u6578\u9664\u4EE5\u9663\u5217\u9577\u5EA6(\u7E3D\u5171\u5E7E\u9580\u79D1)\r
            float average = sum / (scores.Length);\r
            Console.WriteLine("\u7E3D\u5206" + sum);\r
            Console.WriteLine("\u5E73\u5747\u503C" + average);\r
\r
            Console.ReadKey();\r
        }\r
    }\r
  }\r
  \`\`\`\r
  \r
  \u7D50\u679C:\r
  >70\\\r
89\\\r
72\\\r
93\\\r
\u7E3D\u5206324\\\r
\u5E73\u5747\u503C81\r
\r
### \u4F7F\u7528\u9663\u5217\u4F86\u8655\u7406\u540C\u6A23\u985E\u578B\u4F46\u5F88\u591A\u7B46\u7684\u8CC7\u6599\u662F\u975E\u5E38\u65B9\u4FBF\u7684\uFF0C\u5C31\u8B93\u6211\u5011\u540C\u5728\u4E00\u8D77\u5427!`,Ir="\u{1F916}[Day12]C# \u96DE\u790E\u89C0\u5FF5- \u7576\u6211\u5011\u540C\u5728\u4E00\u8D77~\u9663\u5217(Array)";function Mr(){return u("Chicken Say Hi | \u{1F916} \u7576\u6211\u5011\u540C\u5728\u4E00\u8D77~\u9663\u5217(Array)"),t(s,{children:[n(o,{}),n(l,{backPath:r.IronMan13,title:Ir,text:Wr})]})}const Rr=`\u6211\u5011\u66FE\u7D93\u8A8D\u8B58\u904E for\uFF0C\\\r
\u5F8C\u4F86\u4E5F\u9047\u5230 While\uFF0C\\\r
\u5982\u4ECA\u53C8\u51FA\u73FE\u4E00\u500Bforeach\r
\r
### foreach\u8FF4\u5708\r
* foreach\u662F\u4E00\u500B\u70BA\u96C6\u5408\u800C\u751F\u7684\u8FF4\u5708\r
* \u4ED6\u7684\u7528\u6CD5\u5F88\u985E\u4F3Cfor\u8FF4\u5708\uFF0C\u4F46\u76F8\u8F03\u4E0B\u4F86\u8A9E\u6CD5\u8F03\u70BA\u7C21\u55AE\r
* \u4EE5\u4E0B\u662Fforeach\u7684\u7D50\u69CB\r
\r
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210912/20097001BMhTFE799o.png)\r
\r
#### \u7BC4\u4F8B:\u6211\u5011\u4F86\u7528foreach\u5217\u51FA\u96DE\u7684\u6210\u9577\u904E\u7A0B\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u5BA3\u544A\u4E00\u500B\u5B57\u4E32\u9663\u5217\r
            string[] storyArray = { "1.\u6211\u662F\u4E00\u9846\u86CB", "2.\u7834\u6BBC\u800C\u51FA", "3.\u5403\u4E86\u5E7E\u9846\u98FC\u6599\uFF0C\u597D\u98FD", "4.\u6F38\u6F38\u9577\u5927\u6210\u8089\u96DE", "5.\u8FB2\u5834\u4E3B\u4EBA\u4F86\u5728\u5927\u5BB6\u53BB\u5E02\u5834\u73A9", "6.\u56E0\u70BA\u592A\u908A\u7DE3\u6240\u4EE5\u6C92\u4E0A\u5230\u8ECA", "7.\u5927\u5BB6\u4E00\u53BB\u5C31\u6C92\u56DE\u4F86", "8.\u6210\u70BA\u5B64\u7368\u4E00\u96BB\u96DE" };\r
\r
            Console.WriteLine("\u9019\u662F\u5F88\u4E45\u5F88\u4E45\u4EE5\u524D\uFF0C\u6709\u4E00\u96BB\u96DE\u7684\u6545\u4E8B");\r
            //\u4F7F\u7528foreach\u8655\u7406\u9663\u5217\r
            foreach(string story in storyArray)\r
            {\r
                Console.WriteLine(story);\r
            }\r
\r
\r
            Console.ReadKey();\r
        }\r
    }\r
}\r
\`\`\`\r
\r
\u7D50\u679C\r
>\u9019\u662F\u5F88\u4E45\u5F88\u4E45\u4EE5\u524D\uFF0C\u6709\u4E00\u96BB\u96DE\u7684\u6545\u4E8B\\\r
1.\u6211\u662F\u4E00\u9846\u86CB\\\r
2.\u7834\u6BBC\u800C\u51FA\\\r
3.\u5403\u4E86\u5E7E\u9846\u98FC\u6599\uFF0C\u597D\u98FD\\\r
4.\u6F38\u6F38\u9577\u5927\u6210\u8089\u96DE\\\r
5.\u8FB2\u5834\u4E3B\u4EBA\u4F86\u5728\u5927\u5BB6\u53BB\u5E02\u5834\u73A9\\\r
6.\u56E0\u70BA\u592A\u908A\u7DE3\u6240\u4EE5\u6C92\u4E0A\u5230\u8ECA\\\r
7.\u5927\u5BB6\u4E00\u53BB\u5C31\u6C92\u56DE\u4F86\\\r
8.\u6210\u70BA\u5B64\u7368\u4E00\u96BB\u96DE\r
`,Gr="\u{1F916}[Day13]C# \u96DE\u790E\u89C0\u5FF5- \u4F86\u500B\u8F2A\u8FF4\u5427~foreach\u8FF4\u5708";function Nr(){return u("Chicken Say Hi | \u{1F916} \u4F86\u500B\u8F2A\u8FF4\u5427~foreach\u8FF4\u5708"),t(s,{children:[n(o,{}),n(l,{backPath:r.IronMan13,title:Gr,text:Rr})]})}const jr=`\u65E2\u7136\u7A7A\u9593\u6709\u7DAD\u5EA6\uFF0C\\\r
\u9663\u5217\u4E5F\u50CF\u662F\u7A7A\u9593\u4E00\u6A23\uFF0C\\\r
\u4ED6\u662F\u64C1\u6709\u7DAD\u5EA6\u7684\uFF0C\\\r
\u5C31\u8B93\u6211\u5011\u63A2\u7D22\u770B\u770B\u5427\r
\r
### \u4E8C\u7DAD\u9663\u5217\r
* \u5C31\u5982\u540C\u8C61\u68CB\u68CB\u76E4\uFF0C\u6211\u5011\u8981\u77E5\u9053\u65D7\u5B50\u7684\u4F4D\u7F6E\uFF0C\u5C31\u5F97\u8AAA\u4ED6\u662F\u7B2C\u5E7E\u884C\u7B2C\u5E7E\u5217\r
* \u7D50\u69CB\u5982\u4E0B\r
\r
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210912/20097001sufcdURA6n.png)\r
\r
* \u4ED6\u770B\u8D77\u4F86\u7684\u6A23\u5B50\u5C31\u50CF\r
\r
|X|\u7B2C0\u5217 | \u7B2C1\u5217 |\u7B2C2\u5217 |\r
| - | - | - | - |\r
| \u7B2C0\u884C | 1 | 2 | 3 |\r
| \u7B2C1\u884C | 4 | 5 | 6 |\r
| \u7B2C2\u884C | 7 | 8 | 9 |\r
\r
* \u4F7F\u7528\u65B9\u5F0F\u8DDF\u4E00\u7DAD\u9663\u5217\u5F88\u50CF\r
### \u7BC4\u4F8B:\u5370\u51FA\u4E0A\u9762\u9663\u5217\u7684\u6392\u5217\u6A23\u5B50\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u5BA3\u544A\u4E00\u500B\u4E8C\u7DAD\u9663\u5217\r
            int[,] Matrix = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } };\r
\r
            //\u958B\u59CB\u7167\u8457\u9663\u5217\u7684\u6A23\u5B50\u6392\u5217\u5427\r
Console.Write(Matrix[0, 0]); Console.Write(Matrix[0, 1]); Console.WriteLine(Matrix[0, 2]);//\u7B2C\u4E00\u884C\r
Console.Write(Matrix[1, 0]); Console.Write(Matrix[1, 1]); Console.WriteLine(Matrix[1, 2]);//\u7B2C\u4E8C\u884C\r
Console.Write(Matrix[2, 0]); Console.Write(Matrix[2, 1]); Console.WriteLine(Matrix[2, 2]);//\u7B2C\u4E09\u884C\r
\r
\r
            Console.ReadKey();\r
        }\r
    }\r
 }\r
 \`\`\`\r
 \r
 \u7D50\u679C:\r
 >123\\\r
456\\\r
789\r
\r
### \u4F7F\u7528for\u8FF4\u5708\u8655\u7406\u4E8C\u7DAD\u9663\u5217\r
* \u9019\u90E8\u5206\u6BD4\u8F03\u9032\u968E\uFF0C\u9700\u8981\u4F7F\u7528\u5169\u5C64\u7684for\u8FF4\u5708\u4F86\u8655\u7406\r
\r
### \u7BC4\u4F8B:\u4F7F\u7528\u96D9\u91CDfor\u8FF4\u5708\uFF0C\u62C6\u958B\u4E8C\u7DAD\u9663\u5217\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u5BA3\u544A\u4E00\u500B\u4E8C\u7DAD\u9663\u5217\r
            int[,] Matrix = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } };\r
\r
            //\u4F7F\u7528\u96D9\u91CD\u8FF4\u5708\r
            //\u7B2C\u4E00\u5C64\uFF0C\u8868\u793A\u7B2C\u5E7E\u884C\r
            for(int i=0; i < 3; i++)\r
            {\r
                //\u7B2C\u4E8C\u5C64\uFF0C\u8868\u793A\u7B2C\u5E7E\u5217\uFF0C\u7531\u65BC\u8B8A\u6578i\u5DF2\u7528\u904E\u6240\u4EE5\u7FD2\u6163\u4E0A\u6703\u7528j\r
                for (int j = 0; j < 3; j++)\r
                {\r
                    Console.Write(Matrix[i, j]+" ");\r
                }\r
                //\u6211\u5011\u9019\u908A\u8981\u7528\u4E00\u500B\u7279\u5225\u7684\u7B26\u865F\uFF0C\u63DB\u884C\u7B26\u865F"\\n"\u5728C#\u4E2D\u8868\u793A\u63DB\u884C\r
                Console.Write("\\n");\r
            }\r
\r
            Console.ReadKey();\r
        }\r
    }\r
 }\r
 \`\`\`\r
 \r
 \u7D50\u679C:\r
 >1 2 3\\\r
4 5 6\\\r
7 8 9\r
\r
### \u4E8C\u7DAD\u9663\u5217\u53EF\u4EE5\u505A\u5230XY\u8EF8\u7684\u7DAD\u5EA6\uFF0C\u4F46\u4F7F\u7528\u4E0A\u4E5F\u76F8\u5C0D\u6BD4\u8F03\u9032\u968E\u4E86\uFF0C\u6240\u4EE5\u6709\u8208\u8DA3\u7684\u670B\u53CB\u5728\u6DF1\u5165\u7814\u7A76\r
`,$r="\u{1F916}[Day14]C# \u96DE\u790E\u89C0\u5FF5- \u4E0D\u540C\u5C64\u6B21\u7684\u9663\u5217~\u4E8C\u7DAD\u9663\u5217";function Or(){return u("Chicken Say Hi | \u{1F916} \u4E0D\u540C\u5C64\u6B21\u7684\u9663\u5217~\u4E8C\u7DAD\u9663\u5217"),t(s,{children:[n(o,{}),n(l,{backPath:r.IronMan13,title:$r,text:jr})]})}const Hr=`\u6211\u5011\u66FE\u7D93\u8A8D\u8B58\u904E\u9663\u5217(array)\uFF0C\\\r
\u4ECA\u5929\u4F86\u4ECB\u7D39\u4ED6\u7684\u5144\u5F1FList\u5427\r
\r
### List< T >\r
* T\u7684\u90E8\u4EFD\u6211\u5011\u53EF\u4EE5\u7528\u5176\u4ED6\u578B\u5225\u4F86\u66FF\u63DB\u4ED6\r
* \u5E38\u898B\u7684\u65B9\u5F0F\u662F\u5C07string\u6216int\uFF0C\u751A\u81F3\u662F\u5C07class\u505A\u6210\u7269\u4EF6\u6A21\u578B\u4F86\u4F7F\u7528\u4ED6\r
* \u975E\u5E38\u9069\u5408\u7528\u65BCforeach\u8FF4\u5708\r
\r
### \u7BC4\u4F8B:\u6211\u5011\u5C07\u5341\u4E8C\u751F\u8096\u586B\u5165List\u4E2D\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u5BA3\u544A\u4E00\u500BList\r
            List<string> myList = new List<string>() { "\u9F20", "\u725B", "\u864E", "\u5154", "\u9F8D", "\u86C7", "\u99AC", "\u7F8A", "\u7334", "\u96DE", "\u72D7", "\u8C6C" };\r
\r
            Console.WriteLine("\u51FA\u4F86\u542712\u751F\u8096!");\r
            //\u6211\u5011\u4F7F\u7528foreach\u8FF4\u5708\u4F86\u5217\u51FAList\u7684\u503C\r
            foreach(string item in myList)\r
            {\r
                Console.WriteLine(item);\r
            }\r
            Console.ReadKey();\r
        }\r
    }\r
 }\r
 \`\`\`\r
 \r
 \u7D50\u679C:\r
 >\u51FA\u4F86\u542712\u751F\u8096!\\\r
\u9F20\\\r
\u725B\\\r
\u864E\\\r
\u5154\\\r
\u9F8D\\\r
\u86C7\\\r
\u99AC\\\r
\u7F8A\\\r
\u7334\\\r
\u96DE\\\r
\u72D7\\\r
\u8C6C\r
\r
\`\u4ED6\u7684\u521D\u59CB\u503C\u7D66\u6CD5\u8DDF\u9663\u5217\u5341\u5206\u76F8\u4F3C\uFF0C\u4F46\u5979\u4E0D\u9700\u8981\u7D66\u521D\u59CB\u9577\u5EA6\`\r
\r
### \u65B0\u589E\u8CC7\u6599\r
* \u5982\u679C\u6211\u5011\u9700\u8981\u65B0\u589E\u8CC7\u6599\u9032\u5230List\u5462\uFF0C\u53EF\u4EE5\u4F7F\u7528.Add()\u4F86\u65B0\u589E\u55AE\u7B46\u8CC7\u6599\r
* \u5982\u679C\u9700\u8981\u65B0\u589E\u591A\u7B46\u8CC7\u6599\u5C31\u9808\u4F7F\u7528AddRange()\r
\r
### \u7BC4\u4F8B:\u6709\u4E00\u5929\uFF0C\u79D1\u5B78\u5BB6\u767C\u73FE\uFF0C\u539F\u4F86\u4E00\u5E74\u670913\u500B\u6708\uFF0C\u56E0\u6B64\u5FC5\u9808\u5E6B\u7B2C\u5341\u4E09\u5E74\u88DC\u4E0A\u718A\u7684\u751F\u8096\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u5BA3\u544A\u4E00\u500BList\r
            List<string> myList = new List<string>() { "\u9F20", "\u725B", "\u864E", "\u5154", "\u9F8D", "\u86C7", "\u99AC", "\u7F8A", "\u7334", "\u96DE", "\u72D7", "\u8C6C" };\r
\r
            //\u4F7F\u7528Add()\u65B0\u589E\u718A\r
            myList.Add("\u718A");\r
\r
            Console.WriteLine("\u51FA\u4F86\u542713\u751F\u8096!");\r
            //\u6211\u5011\u4F7F\u7528foreach\u8FF4\u5708\u4F86\u5217\u51FAList\u7684\u503C\r
            foreach(string item in myList)\r
            {\r
                Console.WriteLine(item);\r
            }\r
            Console.ReadKey();\r
        }\r
    }\r
 }\r
 \`\`\`\r
 \r
 \u7D50\u679C:\r
 >\u51FA\u4F86\u542713\u751F\u8096!\\\r
\u9F20\\\r
\u725B\\\r
\u864E\\\r
\u5154\\\r
\u9F8D\\\r
\u86C7\\\r
\u99AC\\\r
\u7F8A\\\r
\u7334\\\r
\u96DE\\\r
\u72D7\\\r
\u8C6C\\\r
\u718A\r
\r
### \u7BC4\u4F8B:\u5F8C\u4F86\u79D1\u5B78\u5BB6\u767C\u73FE\uFF0C\u4E00\u5E74\u4E0D\u53EA13\u500B\u6708\uFF0C\u5BE6\u969B\u4E0A\u670915\u500B\u6708\uFF0C\u6240\u4EE5\u9084\u8981\u88DC\u4E0A\u8C61\u3001\u9B5A\u9019\u5169\u7A2E\u52D5\u7269\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u5BA3\u544A\u4E00\u500BList\r
            List<string> myList = new List<string>() { "\u9F20", "\u725B", "\u864E", "\u5154", "\u9F8D", "\u86C7", "\u99AC", "\u7F8A", "\u7334", "\u96DE", "\u72D7", "\u8C6C" };\r
            //\u5BA3\u544A\u4E00\u500B\u8981\u65B0\u589E\u7684List\r
            List<string> newList = new List<string>() { "\u718A", "\u8C61", "\u9B5A" };\r
\r
            //AddRange()\u5C07newList\u65B0\u589E\u5230myList\u4E2D\r
            myList.AddRange(newList);\r
\r
            //\u4F7F\u7528Count()\u4F86\u8868\u793AList\u7B46\u6578\r
            Console.WriteLine("\u51FA\u4F86\u5427" + myList.Count() + "\u751F\u8096!");\r
            //\u6211\u5011\u4F7F\u7528foreach\u8FF4\u5708\u4F86\u5217\u51FAList\u7684\u503C\r
            foreach (string item in myList)\r
            {\r
                Console.WriteLine(item);\r
            }\r
            Console.ReadKey();\r
        }\r
    }\r
  }\r
  \`\`\`\r
  \r
  \u7D50\u679C:\r
  >\u51FA\u4F86\u542715\u751F\u8096!\\\r
\u9F20\\\r
\u725B\\\r
\u864E\\\r
\u5154\\\r
\u9F8D\\\r
\u86C7\\\r
\u99AC\\\r
\u7F8A\\\r
\u7334\\\r
\u96DE\\\r
\u72D7\\\r
\u8C6C\\\r
\u718A\\\r
\u8C61\\\r
\u9B5A\r
\r
\`\u6211\u5011\u9019\u908A\u591A\u4F7F\u7528\u4E86myList.Count()\u4F86\u5217\u51FA\u76EE\u524DList\u7684\u7E3D\u7B46\u6578\`\r
\r
### \u79FB\u9664\u8CC7\u6599\r
* \u55AE\u7B46\u79FB\u9664\u7684\u65B9\u6CD5\u6211\u5011\u4F7F\u7528Remove()\r
* \u591A\u7B46\u79FB\u9664\u5247\u662F\u4F7F\u7528RemoveRange(\u7B2C\u5E7E\u7B46,\u5171\u522A\u5E7E\u7B46)\r
\r
### \u7BC4\u4F8B:\u79D1\u5B78\u5BB6\u767C\u73FE\u539F\u4F86\u662F\u5100\u5668\u6545\u969C\u624D\u6703\u7B97\u621015\u5E74\uFF0C\u5BE6\u969B\u4E0A\u53EA\u670914\u5E74\uFF0C\u6240\u4EE5\u8981\u628A\u9B5A\u62FF\u6389\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u5BA3\u544A\u4E00\u500BList\r
            List<string> myList = new List<string>() { "\u9F20", "\u725B", "\u864E", "\u5154", "\u9F8D", "\u86C7", "\u99AC", "\u7F8A", "\u7334", "\u96DE", "\u72D7", "\u8C6C", "\u718A", "\u8C61", "\u9B5A" };\r
\r
            //\u4F7F\u7528Remove()\u79FB\u9664\u9B5A\r
            myList.Remove("\u9B5A");\r
\r
            //\u4F7F\u7528Count()\u4F86\u8868\u793AList\u7B46\u6578\r
            Console.WriteLine("\u51FA\u4F86\u5427" + myList.Count() + "\u751F\u8096!");\r
            //\u6211\u5011\u4F7F\u7528foreach\u8FF4\u5708\u4F86\u5217\u51FAList\u7684\u503C\r
            foreach (string item in myList)\r
            {\r
                Console.WriteLine(item);\r
            }\r
            Console.ReadKey();\r
        }\r
    }\r
 }\r
 \`\`\`\r
 \r
 \u7D50\u679C:\r
 >\u51FA\u4F86\u542714\u751F\u8096!\\\r
\u9F20\\\r
\u725B\\\r
\u864E\\\r
\u5154\\\r
\u9F8D\\\r
\u86C7\\\r
\u99AC\\\r
\u7F8A\\\r
\u7334\\\r
\u96DE\\\r
\u72D7\\\r
\u8C6C\\\r
\u718A\\\r
\u8C61\r
\r
### \u7BC4\u4F8B:\u5F8C\u4F86\u79D1\u5B78\u5BB6\u53C8\u767C\u73FE\uFF0C\u539F\u4F86\u7814\u7A76\u5100\u5668\u662F\u73A9\u5177\u5E97\u8CB7\u7684\uFF0C\u6839\u672C\u6C92\u6709\u90A3\u9EBC\u591A\u500B\u6708\uFF0C\u5BE6\u969B\u4E0A\u53EA\u670912\u500B\u6708\uFF0C\u6240\u4EE5\u8981\u628A\u52D5\u7269\u5FA9\u539F\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u5BA3\u544A\u4E00\u500BList\r
            List<string> myList = new List<string>() { "\u9F20", "\u725B", "\u864E", "\u5154", "\u9F8D", "\u86C7", "\u99AC", "\u7F8A", "\u7334", "\u96DE", "\u72D7", "\u8C6C", "\u718A", "\u8C61", "\u9B5A" };\r
\r
            //\u7531\u65BC\u7B2C\u4E00\u7B46\u662F\u5F9E0\u7B97\u8D77\uFF0C\u6240\u4EE5\u8981\u5F9E12\u958B\u59CB\u522A3\u7B46\r
            myList.RemoveRange(12,3);\r
\r
            //\u4F7F\u7528Count()\u4F86\u8868\u793AList\u7B46\u6578\r
            Console.WriteLine("\u51FA\u4F86\u5427" + myList.Count() + "\u751F\u8096!");\r
            //\u6211\u5011\u4F7F\u7528foreach\u8FF4\u5708\u4F86\u5217\u51FAList\u7684\u503C\r
            foreach (string item in myList)\r
            {\r
                Console.WriteLine(item);\r
            }\r
            Console.ReadKey();\r
        }\r
    }\r
 }\r
 \`\`\`\r
 \r
 \u7D50\u679C:\r
 >\u51FA\u4F86\u542712\u751F\u8096!\\\r
\u9F20\\\r
\u725B\\\r
\u864E\\\r
\u5154\\\r
\u9F8D\\\r
\u86C7\\\r
\u99AC\\\r
\u7F8A\\\r
\u7334\\\r
\u96DE\\\r
\u72D7\\\r
\u8C6C\r
\r
### \u9032\u968E\u7528\u6CD5:\u7D50\u5408class\r
* \u6211\u5011\u53EF\u4EE5\u5229\u7528class\u7684\u5C6C\u6027\u4F86\u5EFA\u7ACB\u8CC7\u6599\u6A21\u578B\r
* \u5C07\u8CC7\u6599\u6A21\u578B\u505A\u6210List\r
\r
### \u7BC4\u4F8B:\u6211\u5011\u5C0712\u500B\u6708\u8207\u751F\u8096\u7D50\u5408\u5427\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    //\u5EFA\u7ACB\u4E00\u500Bclass\r
    class DataModel\r
    {\r
        //\u6708\u4EFD\r
        public int month;\r
        //\u52D5\u7269\r
        public string animal;\r
\r
    }\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u5BA3\u544A\u4E00\u500BList\r
            List<DataModel> dataList = new List<DataModel>();\r
            //\u5BA3\u544A\u4E00\u500BList\r
            List<string> myList = new List<string>() { "\u9F20", "\u725B", "\u864E", "\u5154", "\u9F8D", "\u86C7", "\u99AC", "\u7F8A", "\u7334", "\u96DE", "\u72D7", "\u8C6C" };\r
\r
            //\u5BA3\u544A\u6574\u6578\u4F86\u7B97\u6708\u4EFD\r
            int Count = 1;\r
            //\u6211\u5011\u4F7F\u7528foreach\u8FF4\u5708\u4F86\u586B\u5BEBdataList\u7684\u503C\r
            foreach (string item in myList)\r
            {\r
                //\u65B0\u589E\u4E00\u7B46\u65B0\u7684\u8CC7\u6599\u6240\u4EE5\u6211\u5011\u8981\u4F7F\u7528new\r
                dataList.Add(new DataModel\r
                {\r
                    month = Count,\r
                    animal = item\r
                });\r
\r
                //\u9032\u5165\u4E0B\u500B\u6708\r
                Count++;\r
            }\r
\r
            //\u4F7F\u7528Count()\u4F86\u8868\u793AList\u7B46\u6578\r
            Console.WriteLine("\u51FA\u4F86\u5427" + dataList.Count() + "\u751F\u8096!");\r
            //\u6211\u5011\u4F7F\u7528foreach\u8FF4\u5708\u4F86\u5217\u51FAList\u7684\u503C\r
            foreach (DataModel item in dataList)\r
            {\r
                //\u9019\u908A\u9700\u8981\u7528item.\u7269\u4EF6\u540D\u7A31\uFF0C\u624D\u6709\u8FA6\u6CD5\u53D6\u5230\u503C\r
                Console.WriteLine(item.month + "\u6708 , \u5C6C :" + item.animal);\r
            }\r
            Console.ReadKey();\r
        }\r
    }\r
  }\r
\`\`\`\r
\r
\u7D50\u679C:\r
>\u51FA\u4F86\u542712\u751F\u8096!\\\r
1\u6708 , \u5C6C :\u9F20\\\r
2\u6708 , \u5C6C :\u725B\\\r
3\u6708 , \u5C6C :\u864E\\\r
4\u6708 , \u5C6C :\u5154\\\r
5\u6708 , \u5C6C :\u9F8D\\\r
6\u6708 , \u5C6C :\u86C7\\\r
7\u6708 , \u5C6C :\u99AC\\\r
8\u6708 , \u5C6C :\u7F8A\\\r
9\u6708 , \u5C6C :\u7334\\\r
10\u6708 , \u5C6C :\u96DE\\\r
11\u6708 , \u5C6C :\u72D7\\\r
12\u6708 , \u5C6C :\u8C6C\r
`,qr="\u{1F916}[Day15]C# \u96DE\u790E\u89C0\u5FF5- \u591A\u7B46\u8CC7\u6599\u7684\u597D\u670B\u53CB~List";function Kr(){return u("Chicken Say Hi | \u{1F916} \u591A\u7B46\u8CC7\u6599\u7684\u597D\u670B\u53CB~List"),t(s,{children:[n(o,{}),n(l,{backPath:r.IronMan13,title:qr,text:Hr})]})}const Vr=`\u4EBA\u985E\u7684\u4E16\u754C\u6709\u8A31\u591A\u7684\u5DE5\u5EE0\uFF0C\\\r
\u5C07\u539F\u6599\u9001\u5165\u5F8C\u5C31\u6703\u8B8A\u6210\u5546\u54C1\uFF0C\\\r
C#\u7684\u4E16\u754C\u88E1\u4E5F\u662F\uFF0C\\\r
\u65B9\u6CD5\u5C31\u50CF\u4E00\u9593\u9593\u7684\u5DE5\u5EE0\u4E00\u6A23\uFF0C\\\r
\u4E00\u767C\u5305\u5C31\u80FD\u5F97\u5230\u60F3\u8981\u7684\u6771\u897F\r
\r
### \u65B9\u6CD5(function)\r
* \u70BA\u4E86\u89E3\u6C7A\u4EE5\u4E0B\u554F\u984C:\r
    1.\u7A0B\u5F0F\u78BC\u7684\u91CD\u8907\r
    2.\u7D50\u69CB\u5F88\u4E0D\u6E05\u6670\r
    3.\u6709\u5229\u65BC\u4FEE\u6539\u8207\u7DAD\u8B77\r
* \u4ED6\u5C31\u50CF\u662F\u4E00\u9593\u4EE3\u5DE5\u5EE0\u4E00\u6A23\r
\r
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210916/20097001aX9kdraTMz.png)\r
\r
### \u5B57\u4E32\u65B9\u6CD5\r
* \u6703\u56DE\u50B3\u8655\u7406\u5F8C\u7684\u5B57\u4E32\r
* \u53EF\u4EE5\u81EA\u5DF1\u5B9A\u7FA9\u50B3\u5165\u7684\u53C3\u6578\r
\r
### \u7BC4\u4F8B:\u6211\u5011\u4F86\u56DE\u50B3\u5B64\u7368\u4E00\u96BB\u96DE\u7684\u5B57\u4E32\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u6211\u5011\u4F86\u547C\u53EB\u65B9\u6CD5\u4E26\u8CE6\u503C\u7D66\u8B8A\u6578\r
            string animal = GetChicken();\r
            Console.WriteLine(animal);\r
            Console.ReadKey();\r
        }\r
        //\u5BA3\u544A\u5B57\u4E32\u65B9\u6CD5\r
        static string GetChicken()\r
        {\r
            return "\u5B64\u7368\u4E00\u96BB\u96DE";\r
        }\r
    }\r
  }\r
  \`\`\`\r
  \r
  \u7D50\u679C:\r
>   \u5B64\u7368\u4E00\u96BB\u96DE\r
\r
\`\u4F7F\u7528static\u95DC\u9375\u5B57\u6642\uFF0C\u8868\u793A\u4ED6\u662F\u975C\u614B\u7684\uFF0C\u6240\u4EE5\u4E0D\u9700\u8981\u53BBnew\u4ED6\`\r
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210917/200970012uV77UtFx6.png)\r
\r
### \u7BC4\u4F8B:\u6211\u5011\u62CB\u4ECA\u5929\u7684\u65E5\u671F\u5230\u65B9\u6CD5\u4E2D\uFF0C\u8B93\u4ED6\u81EA\u52D5\u7D44\u6210\u5E74\u6708\u65E5\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u4F86\u53D6\u5F97\u904E\u53BB\u7684\u4E00\u500B\u6642\u9593\u5427\r
            string MtDate = GetDate(1995, 4, 9);\r
            Console.WriteLine(MtDate);\r
\r
            //\u4F86\u53D6\u5F97\u4ECA\u65E5\u7684\u6642\u9593\u5427\r
            MtDate = GetDate(2021, 9, 17);\r
            Console.WriteLine(MtDate);\r
            Console.ReadKey();\r
        }\r
        //\u5BA3\u544A\u4E00\u500B\u7D44\u5408\u65E5\u671F\u7684\u65B9\u6CD5\r
        static string GetDate(int y,int M,int d)\r
        {\r
            //\u56E0\u70BA\u503C\u50B3\u9032\u4F86\u662F\u6B63\u6578\u6240\u4EE5\u9700\u8981\u8F49\u6210\u5B57\u4E32\r
            string Date_y = Convert.ToString(y);//\u7B2C\u4E00\u7A2E\u8F49\u578B\u65B9\u5F0FConvert.To...\r
            string Date_M = M.ToString();//\u7B2C\u4E8C\u7A2E\u8F49\u578B\u65B9\u5F0F \u53C3\u6578.ToString()\r
            string Date_d = d.ToString();\r
\r
            //\u7D44\u5408\u56DE\u50B3\u5B57\u4E32\uFF0C\u7528return\u56DE\u50B3\r
            return Date_y + "\u5E74 " + Date_M + "\u6708 " + Date_d + "\u65E5";\r
        }\r
\r
    }\r
  }\r
  \`\`\`\r
  \r
  \u7D50\u679C:\r
  > 1995\u5E74 4\u6708 9\u65E5\\\r
2021\u5E74 9\u6708 17\u65E5\r
\r
### \u6709\u4E86\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5927\u5927\u964D\u4F4E\u7A0B\u5F0F\u78BC\u7684\u91CD\u8907\u7387\uFF0C\u4E5F\u53EF\u4EE5\u96A8\u8655\u547C\u53EB\u4ED6`,Ur="\u{1F916}[Day16]C# \u96DE\u790E\u89C0\u5FF5- \u865B\u64EC\u4EE3\u5DE5\u5EE0~\u65B9\u6CD5(function)";function _r(){return u("Chicken Say Hi | \u{1F916} \u865B\u64EC\u4EE3\u5DE5\u5EE0~\u65B9\u6CD5(function)"),t(s,{children:[n(o,{}),n(l,{backPath:r.IronMan13,title:Ur,text:Vr})]})}const zr=`\u5728\u547C\u53EB\u65B9\u6CD5\u6642\uFF0C\u96E3\u514D\u6703\u9700\u8981\u50B3\u905E\u53C3\u6578\uFF0C\\\r
\u90A3\u9019\u4E9B\u53C3\u6578\u8A72\u5982\u4F55\u50B3\u905E\u5462?\\\r
\u5728\u50B3\u905E\u7684\u904E\u7A0B\u4E2D\uFF0C\u7A76\u7ADF\u662F\u50B3\u503C\u9084\u662F\u50B3\u5740\u5462?\r
\r
### \u50B3\u503C\r
* \u5728\u547C\u53EB\u65B9\u6CD5\u6642\u6211\u5011\u96E3\u514D\u9700\u8981\u5C07\u53C3\u6578\u505A\u50B3\u905E\r
* \u503C\u5F97\u50B3\u905E\uFF0C\u8868\u793A\u4ED6\u5011\u5728\u8A18\u61B6\u9AD4\u4E2D\uFF0C\u6703\u4F54\u4E0D\u540C\u7684\u7A7A\u9593\r
* \u7576\u503C\u50B3\u905E\u5B8C\u6210\u5F8C\u4ED6\u5011\u4E4B\u9593\u5C07\u6BEB\u7121\u95DC\u4FC2\r
\r
### \u7BC4\u4F8B:\u6211\u5011\u4F86\u8F38\u5165\u5169\u500B\u6578\u5B57\uFF0C\u4E26\u4E14\u5C07\u4ED6\u5011\u6BD4\u5927\u5C0F\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u5BA3\u544AX\u6574\u6578\r
            int x = Convert.ToInt32(Console.ReadLine());\r
            //\u5BA3\u544Ay\u6574\u6578\r
            int y = Convert.ToInt32(Console.ReadLine());\r
\r
            //\u547C\u53EBBigger\u65B9\u6CD5\uFF0C\u4E26\u5C07x\uFF0Cy\u7684\u76F4\u50B3\u5165\r
            int reault = Bigger(x, y);\r
\r
            Console.WriteLine("x = " + x + " ,y = " + y);\r
            Console.WriteLine("\u6700\u5927\u503C\u70BA" + reault);\r
            Console.ReadKey();\r
        }\r
\r
        //\u6BD4\u8F03\u5169\u6578\u5927\u5C0F\u7684\u65B9\u6CD5\uFF0C\u5C07x y \u50B3\u5165\r
        static int Bigger(int x, int y)\r
        {\r
            //\u5224\u65B7x y\u8AB0\u5927\r
            int maxValue = (x >= y) ? x : y;\r
            return maxValue;\r
        }\r
\r
    }\r
  }\r
  \`\`\`\r
  \r
  \u8F38\u5165:\r
  >1\\\r
  >5\r
\r
\u7D50\u679C:\r
>1\\\r
5\\\r
x = 1 ,y = 5\\\r
\u6700\u5927\u503C\u70BA5\r
\r
\u6211\u5011\u9019\u908A\u4F7F\u7528\u5230\u4E86\`\u4E09\u5143\u689D\u4EF6\u904B\u7B97\u5B50\`\uFF0C\u5B83\u7684\u7D50\u69CB\u5982\u4E0B:\r
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210918/20097001jjic7kGdDH.png)\r
\r
### \u4E2D\u65B7\u9EDE\r
* \u4E2D\u65B7\u9EDE\uFF0C\u662Fdebug\u6642\u975E\u5E38\u597D\u7528\u7684\u4E00\u500B\u529F\u80FD\r
* \u5982\u679C\u5C0D\u7A0B\u5F0F\u78BC\u7684\u57F7\u884C\u6709\u4EFB\u4F55\u7591\u554F\uFF0C\u57FA\u672C\u4E0A\u90FD\u662F\u53EF\u4EE5\u4F7F\u7528\u4E2D\u65B7\u9EDE\u505A\u9010\u6B65\u57F7\u884C\u7684\r
### \u4E2D\u65B7\u9EDE\u4F7F\u7528\u65B9\u5F0F:\r
1. \u5728\u60F3\u8981\u505C\u6B62\u7684\u7A0B\u5F0F\u524D\u9762\u9EDE\u4E00\u4E0B\uFF0C\u6703\u51FA\u73FE\u5C0F\u7D05\u9EDE(\u5FEB\u6377\u9375:F9)\r
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210918/20097001fVyeIJeDkP.png)\r
\r
2. \u63A5\u4E0B\u4F86\u6211\u5011\u57F7\u884C\u7A0B\u5F0F\uFF0C\u6703\u767C\u73FE\u57F7\u884C\u5230\u6B64\u884C\u6642\u7A0B\u5F0F\u505C\u4E0B\u4F86\u4E86\r
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210918/20097001a0GKCS8w0E.png)\r
\r
3. \u9019\u6642\u5019\u6211\u5011\u5230\u529F\u80FD\u5217\u4E0A\u6309\u9010\u6B65\u57F7\u884C(\u5FEB\u6377\u9375:F11)\uFF0C\u6703\u767C\u73FE\u6309\u4E00\u4E0B\u5C31\u57F7\u884C\u4E00\u884C\u7A0B\u5F0F\uFF0C\u9019\u6A23\u6211\u5011\u5C31\u53EF\u4EE5\u4E86\u89E3\u7A0B\u5F0F\u5982\u4F55\u57F7\u884C\u4E86\r
![mdImg](https://ithelp.ithome.com.tw/upload/images/20220303/20097001yw7hyHsdQF.png)\r
\r
\`\u5982\u679C\u6211\u5011\u9010\u6B65\u57F7\u884C\u7A0B\u5F0F\u5F8C\uFF0C\u6703\u767C\u73FE\u539F\u4F86\u547C\u53EB\u65B9\u6CD5\u6642\uFF0C\u7A0B\u5F0F\u6703\u5148\u9032\u5165\u65B9\u6CD5\u57F7\u884C\uFF0C\u57F7\u884C\u5B8C\u518D\u56DE\u5230\u539F\u672C\u7A0B\u5F0F\u7E7C\u7E8C\u57F7\u884C\`\r
\r
### \u5740\u7684\u50B3\u905E\r
* \u5047\u8A2D\u6709\u4E00\u500B\u64C1\u6709\u4E0A\u767E\u7684\u53C3\u6578\u7684\u9663\u5217\uFF0C\u505A\u53C3\u6578\u7684\u50B3\u905E\uFF0C\u7B49\u65BC\u53C8\u5F97\u5728\u8A18\u61B6\u9AD4\u4E2D\u5207\u5272\u4E00\u6A23\u5927\u5C0F\u7684\u7A7A\u9593\u51FA\u4F86\r
* \u56E0\u6B64\u50CF\u9663\u5217\u6216\u7D50\u69CB\u9AD4\u8907\u96DC\u7684\u50B3\u905E\uFF0C\u4ED6\u50B3\u7684\u662F\u8A18\u61B6\u9AD4\u6240\u5728\u7684\u4F4D\u5740\uFF0C\u800C\u4E0D\u662F\u50B3\u905E\u53C3\u6578\r
* \u50B3\u905E\u5F8C\u65B0\u7684\u9663\u5217\u4E5F\u6703\u6307\u5411\u76F8\u540C\u7684\u8A18\u61B6\u9AD4\u4F4D\u7F6E\uFF0C\u56E0\u6B64\u505A\u4EFB\u4F55\u7570\u52D5\u6642\u90FD\u6703\u5F71\u97FF\u5230\u539F\u4F86\u7684\u9663\u5217\r
\r
### \u7BC4\u4F8B:\u6211\u5011\u7528List\u4F86\u9A57\u8B49\u50B3\u5740\u7684\u884C\u70BA\u5427\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u5BA3\u544A\u4E00\u500BLlist\r
            List<string> myList = new List<string>() { "\u5B64\u7368\u4E00\u96BB\u96DE", "\u4EBA\u751F\u4E00\u689D\u87F2", "\u5BC2\u5BDE\u4E00\u96BB\u9CE5", "\u7206\u809D\u4E00\u96BB\u9D5D" };\r
            Console.WriteLine("\u539F\u59CB\u7B46\u6578 = " + myList.Count());\r
\r
            //\u547C\u53EB\u65B9\u6CD5\u4E26\u50B3\u5165List\r
            int newCount = ListCount(myList);\r
            Console.WriteLine("\u76EE\u524D\u7B46\u6578 = " + newCount);\r
\r
            //\u9019\u6642\u5019\u6211\u5011\u7528foreach\u8FF4\u5708\u4F86\u62C6\u89E3\u539F\u672C\u7684List\r
            foreach(string item in myList)\r
            {\r
                Console.Write(item + "  ");\r
            }\r
            Console.ReadKey();\r
        }\r
        //\u6211\u5011\u4F7F\u7528\u4E00\u500B\u65B9\u6CD5\u4E26\u63A5\u6536list\u7684\u50B3\u905E\uFF0C\u7136\u5F8C\u56DE\u50B3list\u7684\u7B46\u6578\r
        static int ListCount(List<string> newList)\r
        {\r
            //\u6211\u5011\u5728\u9019list\u5077\u5077\u52A0\u4E00\u96BB\u9B5A\r
            newList.Add("\u9AD8\u51B7\u4E00\u96BB\u9B5A");\r
            return newList.Count();\r
        }\r
}\r
\`\`\`\r
\r
\u7D50\u679C:\r
>\u539F\u59CB\u7B46\u6578 = 4\\\r
\u76EE\u524D\u7B46\u6578 = 5\\\r
\u5B64\u7368\u4E00\u96BB\u96DE  \u4EBA\u751F\u4E00\u689D\u87F2  \u5BC2\u5BDE\u4E00\u96BB\u9CE5  \u7206\u809D\u4E00\u96BB\u9D5D  \u9AD8\u51B7\u4E00\u96BB\u9B5A\r
\r
\`\u6211\u5011\u53EF\u4EE5\u767C\u73FE\uFF0C\u6211\u5011\u660E\u660E\u5728\u65B0\u7684\u65B9\u6CD5\uFF0C\u65B0\u7684List\u53BB\u4FEE\u6539List\uFF0C\u7D50\u679C\u539F\u4F86\u7684List\u537B\u53D7\u5230\u5F71\u97FF\uFF0C\u9019\u5C31\u662F\u56E0\u70BA\u4ED6\u5011\u6307\u5411\u7684\u8A18\u61B6\u9AD4\u4F4D\u7F6E\u662F\u540C\u4E00\u500B\u5730\u65B9\uFF0C\u6240\u4EE5\u53EA\u8981\u4E00\u6709\u8B8A\u52D5\u6240\u6709\u8CC7\u6599\u90FD\u6703\u53D7\u5230\u5F71\u97FF\`\r
\r
### \u4EE5\u4E0A\u5C31\u662F\u6211\u5011\u4ECA\u5929\u5C0F\u90F5\u5DEE\u7684\u6545\u4E8B\uFF0C\u6211\u5011\u660E\u5929\u898B\u55BD! \r
`,Jr="\u{1F916}[Day17]C# \u96DE\u790E\u89C0\u5FF5- \u50CF\u500B\u90F5\u5DEE\u4E00\u6A23~\u503C\u8207\u5740\u7684\u50B3\u905E";function Xr(){return u("Chicken Say Hi | \u{1F916} \u50CF\u500B\u90F5\u5DEE\u4E00\u6A23~\u503C\u8207\u5740\u7684\u50B3\u905E"),t(s,{children:[n(o,{}),n(l,{backPath:r.IronMan13,title:Jr,text:zr})]})}const Yr=`\u9BAD\u9B5A\u51FA\u751F\u5F8C\u6703\u5F80\u4E0B\u6E38\u751F\u6D3B\uFF0C\\\r
\u5230\u4E86\u7522\u5375\u5B63\u7BC0\uFF0C\u6703\u9006\u6E38\u800C\u4E0A\uFF0C\\\r
\u56DE\u5230\u6700\u521D\u7684\u8D77\u9EDE\uFF0C\u9032\u884C\u7522\u5375\u7522\u5375\uFF0C\\\r
C#\u4E5F\u6709\u50CF\u9BAD\u9B5A\u4E00\u6A23\u7684\u884C\u70BA\uFF0C\\\r
\u4E00\u500B\u53C3\u6578\u76E1\u65B9\u6CD5\u9032\u884C\u52A0\u5DE5\uFF0C\\\r
\u52A0\u5DE5\u5B8C\u6210\u5F8C\u5C31\u6703\u56DE\u5BB6\u4E86\r
\r
### ref \u95DC\u9375\u5B57\r
* \u4E0A\u56DE\u6211\u5011\u8AAA\u597D\u4E86\uFF0C\u53C3\u6578\u6709\u5206\u70BA\u50B3\u503C\u8207\u50B3\u5740\r
* ref \u95DC\u9375\u5B57\u7684\u7528\u9014\u5C31\u662F\u5C07\u53C3\u6578\u6307\u5B9A\u70BA\u50B3\u5740\r
* \u56E0\u6B64\u505A\u4EFB\u4F55\u4FEE\u6539\u90FD\u6703\u5F71\u97FF\u5230\u539F\u53C3\u6578\r
\r
### \u7BC4\u4F8B:\u6211\u5011\u4F86\u8B93\u4E00\u96BB\u96DE\u9032\u5316\u5427\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u5BA3\u544A\u4E00\u96BB\u96DE\r
            string chicken = "\u4E00\u96BB\u96DE";\r
            Console.WriteLine("\u5C0F\u6642\u5019 : " + chicken);\r
\r
            //\u547C\u53EB\u6210\u9577\u65B9\u6CD5\r
            ChangAChicken(ref chicken);\r
\r
            Console.WriteLine("\u6F02\u6CCA\u5B8C\u56DE\u5BB6\u5F8C\u7684\u96DE : " + chicken);\r
            Console.ReadKey();\r
        }\r
        //\u5BA3\u544A\u5C0F\u96DE\u9577\u5927\u7684\u65B9\u6CD5\uFF0C\u9019\u908A\u4F7F\u7528\u5E38\u6578\u65B9\u6CD5\uFF0C\u4E0D\u9700\u8981\u505Areturn\r
        static void ChangAChicken(ref string newChicken)\r
        {\r
            //\u8B93\u96DE\u9032\u5316\r
            newChicken = "\u5B64\u7368" + newChicken;\r
        }\r
    }\r
  }\r
  \`\`\`\r
  \r
  \u7D50\u679C:\r
  >\u5C0F\u6642\u5019 : \u4E00\u96BB\u96DE\\\r
\u6F02\u6CCA\u5B8C\u56DE\u5BB6\u5F8C\u7684\u96DE : \u5B64\u7368\u4E00\u96BB\u96DE\r
\r
### out \u53C3\u6578\u4FEE\u98FE\u8A5E\r
* Out\u7684\u5B58\u5728\u662F\u70BA\u4E86\u89E3\u6C7A\u4E00\u500B\u65B9\u6CD5\u53EA\u80FD\u56DE\u50B3\u4E00\u500B\u503C\r
* \u4F46\u4F7F\u7528Out\u5C31\u80FD\u56DE\u4F86\u591A\u500B\u503C\r
* Out\u7684\u53C3\u6578\uFF0C\u4F7F\u7528\u524D\u662F\u4E0D\u80FD\u8CE6\u503C\u7684\uFF0C\u5373\u4F7F\u8CE6\u503C\u4E5F\u6703\u88AB\u5FFD\u7565\r
\r
### \u7BC4\u4F8B:\u6211\u5011\u77E5\u9053\u4E00\u500B\u5713\u7684\u534A\u5F91\uFF0C\u6C42\u5B83\u7684\u9762\u7A4D\u8207\u5713\u5468\u9577\u5427\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u5BA3\u544A\u5713\u534A\u5F91\r
            double x = 4;\r
            Console.WriteLine("\u5713\u534A\u5F91 : " + x);\r
\r
            //\u5BA3\u544A\u5713\u5468\u9577\r
            double y;\r
\r
            //\u547C\u53EB\u8A08\u7B97\u65B9\u6CD5\r
            double area = GetArea(x, out y);\r
\r
            Console.WriteLine("\u5713\u5468\u9577 = " + y);\r
            Console.WriteLine("\u5713\u9762\u7A4D = " + area);\r
            Console.ReadKey();\r
        }\r
        //\u5BA3\u544A\u65B9\u6CD5\u4F86\u8A08\u7B97\u9762\u7A4D\uFF0C\u8981return \u9762\u7A4D\uFF0Cout  \u5713\u5468\u9577\r
        static double GetArea(double r, out double y)\r
        {\r
            //\u8A08\u7B97\u5713\u5468\u9577\r
            y = 2 * r * Math.PI;\r
\r
            //\u8A08\u7B97\u5713\u9762\u7A4D\r
            double s = (r * r) * Math.PI;\r
            return s;\r
        }\r
    }\r
  }\r
  \`\`\`\r
  \r
  \u7D50\u679C:\r
  >\u5713\u534A\u5F91 : 4\\\r
\u5713\u5468\u9577 = 25.1327412287183\\\r
\u5713\u9762\u7A4D = 50.2654824574367\r
\r
### ref\u8207Out\u7684\u5DEE\u7570\r
* ref : \u4F7F\u7528\u524D\u53EF\u4EE5\u7D66\u50B3\u905E\u7684\u53C3\u6578 \u503C\r
* Out : \u4F7F\u7528\u524D\u662F\u4E0D\u80FD\u8CE6\u503C\u7684\uFF0C\u5373\u4F7F\u8CE6\u503C\u4E5F\u6703\u88AB\u5FFD\u7565\r
* \u56E0\u6B64Out\u7121\u6CD5\u62FF\u4F86\u505A\u6578\u64DA\u50B3\u905E\uFF0C\u53EA\u80FD\u53D6\u5F97\u8FD4\u56DE\u503C\r
\r
### \u4ECA\u5929\u7684\u6587\u7AE0\u5C31\u5230\u9019\u908A\uFF0C\u5927\u5BB6\u8A18\u5F97\u50CF\u9BAD\u9B5A\u4E00\u6A23\uFF0C\u660E\u5929\u8A18\u5F97\u56DE\u4F86\u770B\u6211\u7684\u6587\u7AE0\u54E6!`,Qr="\u{1F916}[Day18]C# \u96DE\u790E\u89C0\u5FF5- \u56DE\u982D\u5427!\u5B69\u5B50~ref \u8207 out \u53C3\u6578\u4FEE\u98FE\u8A5E";function Zr(){return u("Chicken Say Hi | \u{1F916} \u56DE\u982D\u5427!\u5B69\u5B50~ref \u8207 out \u53C3\u6578\u4FEE\u98FE\u8A5E"),t(s,{children:[n(o,{}),n(l,{backPath:r.IronMan13,title:Qr,text:Yr})]})}const ne=`\u96FB\u8996\u53EF\u4EE5\u5012\u5E36\uFF0C\\\r
\u7136\u5F8C\u91CD\u64AD\uFF0C\\\r
\u559C\u6B61\u770B\u5E7E\u6B21\u5C31\u770B\u5E7E\u6B21\uFF0C\\\r
C#\u4E2D\u4E5F\u80FD\u8B93\u7A0B\u5F0F\u5012\u5E36\uFF0C\u91CD\u65B0\u57F7\u884C\uFF0C\\\r
\u57F7\u884C\u5230\u6EFF\u610F\u70BA\u6B62\r
\r
### \u905E\u8FF4\r
* \u905E\u8FF4\u5C31\u662F\u5728\u65B9\u6CD5\u4E2D\u547C\u53EB\u65B9\u6CD5\u81EA\u5DF1\r
* \u901A\u5E38\u6703\u4F7F\u7528\u905E\u8FF4\u7684\u7A0B\u5F0F\u78BC\u90FD\u6BD4\u8F03\u7C21\u6F54\r
* \u905E\u8FF4\u901A\u5E38\u57F7\u884C\u6548\u7387\u8F03\u4F4E\r
\r
### \u7BC4\u4F8B:\u6211\u5011\u4F86\u8B9320\u4E00\u76F4\u5012\u6263\u52300\uFF0C\u7136\u5F8C\u558A\u51FA\u65B0\u5E74\u5FEB\u6A02\u5427\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u547C\u53EB\u905E\u8FF4\u65B9\u6CD5\r
            Fac(20);\r
            \r
            Console.WriteLine("\u65B0\u5E74\u5FEB\u6A02!");\r
            Console.ReadKey();\r
        }\r
    //\u5BA3\u544A\u4E00\u500B\u905E\u8FF4\u65B9\u6CD5\r
        static void Fac(int n)\r
        {\r
            Console.WriteLine("n = " + n);\r
            //\u5982\u679Cn\u7B49\u65BC0\u4E4B\u5F8C\u5C31\u4E0D\u547C\u53EB\u81EA\u5DF1\r
            if (n != 0)\r
            {\r
                Fac(n - 1);\r
            }\r
        }\r
    }\r
}\r
\`\`\`\r
\u7D50\u679C:\r
>n = 20\\\r
n = 19\\\r
n = 18\\\r
n = 17\\\r
n = 16\\\r
n = 15\\\r
n = 14\\\r
n = 13\\\r
n = 12\\\r
n = 11\\\r
n = 10\\\r
n = 9\\\r
n = 8\\\r
n = 7\\\r
n = 6\\\r
n = 5\\\r
n = 4\\\r
n = 3\\\r
n = 2\\\r
n = 1\\\r
n = 0\\\r
\u65B0\u5E74\u5FEB\u6A02!\r
\r
### \u9032\u968E\u7DF4\u7FD2:\r
### \u8CBB\u6CE2\u90A3\u5951\u6578\u5217:\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u5BA3\u544A\u4E00\u500B\u6574\u6578\uFF0C\u770B\u8981\u8F38\u51FA\u591A\u5C11\u9805\r
            int n = Convert.ToInt32(Console.ReadLine());\r
\r
            Console.WriteLine("Fibonacci : ");\r
            for (int i = 1; i <= n; i++)\r
            {\r
                //\u8F38\u51FA\u8CBB\u6CE2\u90A3\u5951\u6578\u5217\u7684\u7B2Ci\u9805\r
                Console.Write(Fibonacci(i) + "\\t");\r
\r
                //\u6BCF\u8F38\u51FA\u4E94\u9805\u63DB\u4E00\u884C\r
                if ((i % 5) == 0)\r
                {\r
                    Console.WriteLine();\r
                }\r
            }\r
\r
            Console.ReadKey();\r
        }\r
\r
        //\u5BA3\u544A\u65B9\u6CD5\r
        static int Fibonacci(int n)\r
        {\r
            if (n == 1 || n == 2)\r
            {\r
                //\u521D\u59CB\u503C\r
                return 1;\r
            }\r
            else\r
            {\r
                //\u905E\u8FF4\r
                return (Fibonacci(n - 1) + Fibonacci(n - 2));\r
            }\r
        }\r
\r
\r
    }\r
  }\r
  \`\`\`\r
  \r
  \u8F38\u5165:\r
  >30\r
\r
\u8F38\u51FA:\r
>30\r
>Fibonacci :\r
\`\`\`text\r
1       1       2       3       5\r
8       13      21      34      55\r
89      144     233     377     610\r
987     1597    2584    4181    6765\r
10946   17711   28657   46368   75025\r
121393  196418  317811  514229  832040\r
\`\`\`\r
\r
### \u9019\u5C31\u4E00\u500BC#\u5012\u5E36\u6309\u9375\u7684\u6545\u4E8B~`,re="\u{1F916}[Day19]C# \u96DE\u790E\u89C0\u5FF5- \u8B93\u6642\u9593\u5012\u8F49\u5427~\u905E\u8FF4";function ee(){return u("Chicken Say Hi | \u{1F916} \u8B93\u6642\u9593\u5012\u8F49\u5427~\u905E\u8FF4"),t(s,{children:[n(o,{}),n(l,{backPath:r.IronMan13,title:re,text:ne})]})}const te=`![mdImg](https://ithelp.ithome.com.tw/upload/images/20210920/20097001xizPMY5Y3v.png)\r
\u5728\u7A0B\u5F0F\u8A9E\u8A00\u4E2D\uFF0C\\\r
\u6211\u5011\u4E0D\u53EA\u8981\u638C\u63E1\u57FA\u672C\u7684\u8A9E\u6CD5\uFF0C\\\r
\u9084\u8981\u53BB\u878D\u6703\u8CAB\u901A\uFF0C\\\r
\u638C\u63E1\u5B83\u7684\u7CBE\u96A8\u6240\u5728\uFF0C\\\r
\u800C\u7269\u4EF6\u5C0E\u5411\u6B63\u662FC#\u7684\u7CBE\u96A8\r
\r
### \u7269\u4EF6\u5C0E\u5411(Object-oriented programming)\r
\u7269\u4EF6\u5C0E\u5411\u6982\u5FF5:\r
- \u5C07\u6578\u64DA\u8207\u5C0D\u6578\u64DA\u7684\u64CD\u4F5C\uFF0C\u5305\u88DD\u6210"\u96F6\u4EF6"\uFF0C\u4EBA\u5011\u5229\u7528\u9019\u4E9B\u96F6\u4EF6\u4F86\u7D44\u88DD\u7A0B\u5F0F\r
\r
### \u7269\u4EF6\u5C0E\u5411\u57FA\u672C\u6982\u5FF5\r
1. Class (\u985E\u5225)\r
2. Encapsulation\xA0(\u5C01\u88DD)\r
3. Interface\xA0(\u4ECB\u9762)\r
4. Object\xA0(\u7269\u4EF6)\r
\r
### \u8A73\u7D30\u5167\u5BB9\r
1. Class (\u985E\u5225)\r
	- \u4ED6\u5C31\u5982\u540C\u4E00\u8F1B\u8ECA\u5B50\u7684\u8A2D\u8A08\u85CD\u5716\uFF0C\u4E26\u975E\u6C92\u6709\u5BE6\u9AD4\uFF0C\u7528\u4F86\u5B9A\u7FA9\u898F\u77E9\uFF0C\u8B93\u5927\u5BB6\u7684\u601D\u7DAD\uFF0C\u4FDD\u6301\u4E00\u81F4\r
	- \u5C07\u4E8B\u7269\u7DE8\u5BEB\u70BA\u4E00\u500B\u4E00\u500B\u985E\u5225\uFF0C\u7528\u6578\u64DA\u8868\u793A\u4E8B\u52D9\u7684\u5C6C\u6027\uFF0C\u7528\u51FD\u6578\u5BE6\u73FE\u6578\u64DA\u884C\u70BA\u3002\r
	- \u985E\u5225\u5C31\u50CF\u662F\u4E00\u7A2E\u8CC7\u6599\u6A21\u578B\uFF0C\u7531\u4ED6\u4F86\u5B9A\u7FA9\u8CC7\u6599\u7684\u7D50\u69CB\u61C9\u8A72\u9577\u6210\u751A\u9EBC\u6A23\u5B50\u3002\r
\r
2. Encapsulation\xA0(\u5C01\u88DD)\r
	- \u5C31\u5982\u540C\u8ECA\u5B50\u7684\u96F6\u4EF6\uFF0C\u8B93\u7DAD\u4FEE\u54E1\u53EA\u8981"\u6703\u62C6\u88DD"\uFF0C\u5C31\u80FD\u8B93\u4E00\u53F0\u8ECA\u4E0A\u8DEF\uFF0C\u5927\u5927\u63D0\u5347\u4E86\uFF0C\u8ECA\u8F1B\u751F\u7522\u7684\u6548\u7387\r
	- \u7269\u4EF6\u5C0E\u5411\u6280\u8853\uFF0C\u5C07\u4E8B\u52D9\u7684\u5C6C\u6027\u8207\u884C\u70BA\u7684\u7D30\u7BC0\u5C01\u88DD\u65BC\u985E\u5225\u4E2D\uFF0C\u5F62\u6210\u4E00\u500B\u53EF\u4EE5\u91CD\u8907\u4F7F\u7528\u7684\u96F6\u4EF6\u3002\r
\r
3. Interface\xA0(\u4ECB\u9762)\r
	- \u4ED6\u5C31\u50CF\u662F\u8ECA\u5B50\u7684\u8F2A\u80CE\u898F\u683C\uFF0C\u5C07\u898F\u683C\u5B9A\u7FA9\u597D\uFF0C\u5927\u5BB6\u90FD\u53EF\u4EE5\u4E0D\u7528\u4F7F\u7528\u7279\u88FD\u7684\u8F2A\u80CE\uFF0C\u751A\u81F3\u66F4\u6709\u5229\u65BC\u505A\u8ECA\u5B50\u7684\u6539\u88DD\r
	- \u5728\u7269\u4EF6\u5C0E\u5411\u7A0B\u5F0F\u8A2D\u8A08\u4E2D\uFF0C\u53EA\u8981\u4FDD\u6301\u63A5\u53E3\u4E0D\u8B8A\uFF0C\u5C31\u80FD\u5C07\u4E00\u500B\u8A2D\u8A08\u66F4\u597D\u7684\u985E\u5225\u4F86\u66FF\u63DB\u539F\u4F86\u7684\u985E\u5225\u3002\r
	\r
4. Object\xA0(\u7269\u4EF6)\r
	- \u751F\u6D3B\u4E2D\u8655\u8655\u5145\u65A5\u7269\u4EF6\uFF0CEX:\u4E00\u68DF\u623F\u5B50\u3001\u4E00\u8F1B\u6C7D\u8ECA.....\r
	- \u4ED6\u662F\u52D5\u614B\u7684\uFF0C\u72C0\u614B\u96A8\u6642\u90FD\u6703\u6539\u8B8A\uFF0C\u4F46\u6574\u9AD4\u7684\u7D50\u69CB\u8207\u884C\u70BA\u4E26\u4E0D\u6703\u56E0\u70BA\u4ED6\u7684\u52D5\u800C\u53D7\u5230\u5F71\u97FF\r
\r
### \u6211\u5011\u660E\u5929\u958B\u59CB\u5C31\u4F86\u5B78\u7FD2\u7269\u4EF6\u5C0E\u5411\u7684\u57FA\u790E\u77E5\u8B58\u5427`,ie="\u{1F916}[Day20]C# \u96DE\u790E\u89C0\u5FF5- \u7269\u4EF6\u5C0E\u5411(oop)\u57FA\u672C\u89C0\u5FF5";function se(){return u("Chicken Say Hi | \u{1F916} \u7269\u4EF6\u5C0E\u5411(oop)\u57FA\u672C\u89C0\u5FF5"),t(s,{children:[n(o,{}),n(l,{backPath:r.IronMan13,title:ie,text:te})]})}const ae=`\u842C\u7269\u7686\u6709\u4ED6\u7684\u7D50\u69CB\uFF0C\\\r
\u5C31\u5982\u540C\u4E16\u754C\u4E0A\u6240\u6709\u6771\u897F\u7686\u7531\u5143\u7D20\u6240\u7D44\u6210\uFF0C\\\r
\u800C\u5B9A\u7FA9\u9019\u4E9B\u7D50\u69CB\u5728C#\u4E2D\u7A31\u70BAclass\uFF0C\\\r
\u4ED6\u662F\u4E00\u5207\u7684\u85CD\u5716\r
\r
### \u8B8A\u6578\u6210\u54E1\u8207\u65B9\u6CD5\u6210\u54E1\r
* \u7D50\u69CB:\r
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210920/20097001TE37hH4gKq.png)\r
\r
### \u7BC4\u4F8B:\u6211\u5011\u4F86\u5BE6\u4F5C\u8C93\u7684\u985E\u5225\xA0\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u4F7F\u7528\u985E\u5225\u524D\u8981\u5148\u5BE6\u4F8B\u5316\r
            Cat cat = new Cat();\r
\r
            //\u586B\u5BEB\u8B8A\u6578\u6210\u54E1\r
            Console.WriteLine("\u8ACB\u8F38\u5165\u59D3\u540D:");\r
            cat.name = Console.ReadLine();\r
\r
            Console.WriteLine("\u8ACB\u8F38\u5165\u5E74\u9F61:");\r
            cat.age =Convert.ToInt32(Console.ReadLine());\r
\r
            //\u547C\u53EB\u65B9\u6CD5\u6210\u54E1\r
            //\u55B5\u55B5\u53EB\r
            cat.Meow();\r
\r
            //\u6293\u5230\u8001\u9F20\r
            cat.CaseMice();\r
\r
            Console.ReadKey();\r
        }\r
    }\r
\r
    class Cat\r
    {\r
        //\u540D\u7A31\r
        public string name;\r
        //\u5E74\u9F61\r
        public int age;\r
        //\u8001\u9F20\u6578\u91CF\r
        public int miceCount = 0; //\u8A18\u9304\u6293\u5E7E\u96BB\u8001\u9F20\r
        //\u65B9\u6CD5\u6210\u54E1\r
        //\u65B9\u6CD5:\u6253\u62DB\u547C\r
        public void Hello()\r
        {\r
            Console.WriteLine("\u55E8!\u6211\u662F{0} ", name);\r
        }\r
        //\u65B9\u6CD5:\u55B5\u55B5\u53EB\r
        public void Meow()\r
        {\r
            Hello();\r
            Console.WriteLine("\u55B5~~~~~\u55B5~~~");\r
        }\r
        //\u65B9\u6CD5:\u6349\u8001\u9F20\r
        public void CaseMice()\r
        {\r
            miceCount++;\r
            Hello();\r
            Console.WriteLine("\u6211\u5DF2\u7D93\u6293\u4E86 {0} \u96BB\u8001\u9F20", miceCount);\r
            Console.ReadKey();\r
        }\r
    }\r
}\r
\`\`\`\r
\r
\u8F38\u5165:\r
>\u5B64\u7368\u4E00\u96BB\u96DE\\\r
>48\r
\r
\u8F38\u51FA:\r
>\u8ACB\u8F38\u5165\u59D3\u540D:\\\r
>\u5B64\u7368\u4E00\u96BB\u96DE\\\r
>\u8ACB\u8F38\u5165\u5E74\u9F61:\\\r
>48\\\r
>\u55E8!\u6211\u662F\u5B64\u7368\u4E00\u96BB\u96DE\\\r
>\u55B5~~~~~\u55B5~~~\\\r
>\u55E8!\u6211\u662F\u5B64\u7368\u4E00\u96BB\u96DE\\\r
>\u6211\u5DF2\u7D93\u6293\u4E86 1 \u96BB\u8001\u9F20\r
\r
1. \u5728Cat\u9019\u500B\u985E\u5225\u4E4B\u4E2D\uFF0C\r
    * \u8C93\u6709\u4E09\u500B\u5C6C\u6027:\\\r
	\xA0 1. \u540D\u5B57 \\\r
	\xA0 2. \u5E74\u9F61 \\\r
	\xA0 3. \u6349\u5230\u8001\u9F20\u6578\u91CF\\\r
	\u5206\u5225\u4F7F\u7528\xA0name \u3001age\u3001\xA0miceCount\xA0\u4F86\u8868\u793A\uFF0C\\\r
	\u4ED6\u5011\u7A31\u70BA\u985E\u5225\u7684\u6210\u54E1\u8B8A\u6578(Member Variable)\xA0\r
    ![mdImg](https://ithelp.ithome.com.tw/upload/images/20210920/20097001jyYIlCq1wD.png)\r
    \r
 2. \u516C\u7528\u548C\u79C1\u7528 (public/private)\r
- public/private\u7D71\u7A31\u70BA"\u4FEE\u98FE\u8A5E"\r
\`\`\`csharp\r
	public string name;\r
	public int age;\xA0\xA0 \xA0\xA0\xA0 \xA0\xA0\xA0 \xA0\u21D2 \u516C\u6709\u6210\u54E1\r
	public void Meow()\r
	public void CaseMice()\r
	\r
	private int miceCount = 0;\xA0\r
	private void Hello()\xA0\xA0 \xA0\xA0\xA0 \xA0\u21D2\u79C1\u6709\u6210\u54E1\r
 \`\`\`\r
    \r
\xA0 \`\xA0 \u203B\u628A\u8B8A\u6578\u6216\u51FD\u6578\u6A19\u8A18\u70BAprivate\uFF0C\u53EF\u4EE5\u78BA\u4FDD\u9019\u4E9B\u6578\u64DA\u4E0D\u53D7\u5230\u5916\u754C\u7684\u5F71\u97FF\`\r
  \r
  | \u5DF2\u5BA3\u544A\u5B58\u53D6\u7BC4\u570D | \u610F\u7FA9|\r
  ------------- | -------------\r
| public | \u672A\u9650\u5236\u5B58\u53D6\u3002\r
| protected | \u5B58\u53D6\u9650\u65BC\u5305\u542B\u985E\u5225\u6216\u884D\u751F\u81EA\u5305\u542B\u985E\u5225\u7684\u985E\u578B\u3002\r
| internal | \u5B58\u53D6\u9650\u65BC\u76EE\u524D\u7D44\u4EF6\u3002\r
| protected internal | \u5B58\u53D6\u9650\u65BC\u76EE\u524D\u7D44\u4EF6\u6216\u884D\u751F\u81EA\u5305\u542B\u985E\u5225\u7684\u985E\u578B\u3002\r
| private | \u5B58\u53D6\u9650\u65BC\u5305\u542B\u985E\u578B\u3002\r
| private protected | \u5B58\u53D6\u9650\u65BC\u76EE\u524D\u7D44\u4EF6\u5167\u5305\u542B\u985E\u5225\u6216\u884D\u751F\u81EA\u5305\u542B\u985E\u5225\u7684\u985E\u578B\u3002 \u81EA C# 7.2 \u8D77\u53EF\u7528\u3002\r
\r
### \u5B78\u6703\u4E86\u985E\u5225\u4E4B\u5F8C\uFF0C\u6703\u767C\u73FE\u539F\u4F86\u7A0B\u5F0F\u78BC\uFF0C\u4E5F\u53EF\u4EE5\u9019\u6A23\u505A\u5206\u985E\u9D28!`,oe="\u{1F916}[Day21]C# \u96DE\u790E\u89C0\u5FF5- \u7269\u4EF6\u5C0E\u5411(oop)~\u985E\u5225(class)";function ue(){return u("Chicken Say Hi | \u{1F916} \u7269\u4EF6\u5C0E\u5411(oop)~\u985E\u5225(class)"),t(s,{children:[n(o,{}),n(l,{backPath:r.IronMan13,title:oe,text:ae})]})}const le=`\u5728\u7A0B\u5F0F\u8A9E\u8A00\u4E2D\u842C\u7269\u7686\u7269\u4EF6\uFF0C\\\r
\u5C31\u5982\u540C\u771F\u5BE6\u4E16\u754C\u4E2D\uFF0C\\\r
\u6240\u6709\u7269\u8CEA\u63A5\u7531\u5143\u7D20\u7D44\u6210\u4E00\u822C\r
\r
### \u7269\u4EF6\u57FA\u672C\u539F\u7406\r
- C#\u901A\u904Enew\u4F86\u5275\u5EFA\u7269\u4EF6\uFF0C\u57F7\u884Cnew\u5F8C\u7CFB\u7D71\u6703\u5728\u8A18\u61B6\u9AD4\u5206\u914D\u4E00\u500B\u7A7A\u9593\u7D66\u6578\u64DA\u6210\u54E1\uFF0C\u9019\u904E\u7A0B\u6211\u5011\u5C07\u5176\u7A31\u70BA\u5BE6\u4F8B\u5316\r
- \u5BE6\u4F8B\u5316\u4E4B\u5F8C\u7684\u6240\u6709\u6210\u54E1\u90FD\u6703\u88AB\u521D\u59CB\u5316\u70BAnull,\u6574\u6578\u6210\u54E1\u4E5F\u6703\u88AB\u521D\u59CB\u5316\u70BA0\r
- \u5982\u679C\u6211\u5011\u5275\u5EFA\u591A\u500B\u7269\u4EF6\u4F46\u90FD\u662F\u540C\u4E00\u500B\u985E\u5225\uFF0C\u90A3\u9EBC\u5927\u5BB6\u90FD\u5171\u7528\u540C\u6A23\u7684\u7A0B\u5F0F\u78BC\uFF0C\u4F46\u4E0D\u5171\u7528\u6578\u64DA\uFF0C\u800C\u4E14\u6BCF\u500B\u7269\u4EF6\u90FD\u6703\u5728\u8A18\u61B6\u9AD4\u4E2D\u64C1\u6709\u81EA\u5DF1\u7684\u5167\u5B58\u7A7A\u9593\r
\r
### \u5BE6\u4F8B\u5316\u8A9E\u53E5\u5982\u4E0B:\r
* \u8A18\u61B6\u9AD4\u5C07\u5207\u5272\u4E00\u500B\u5167\u5B58\u7A7A\u9593\u7D66Kitty\u505A\u4F7F\u7528\uFF0C\u4E26\u4E14Kitty\u5C07\u6703\u64C1\u6709Cat\u985E\u5225\u7684\u6240\u6709\u6210\u54E1\r
\r
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210922/20097001hEsxwvPiIB.png)\r
\r
### \u5982\u4F55\u4F7F\u7528\u6210\u54E1\u5462?\r
* \u9019\u908A\u6211\u5011\u9700\u8981\u4F7F\u7528\u5230\u9EDE\u904B\u7B97\u7B26\uFF0C\u900F\u904E\u9EDE\u904B\u7B97\u7B26\u6211\u5011\u53EF\u4EE5\u547C\u53EB\u5230Kitty\u5E95\u4E0B\u7684\`\u516C\u6709\u6210\u54E1\`\r
\r
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210922/20097001oQCmWOEFf4.png)\r
\r
### \u5982\u4F55\u547C\u53EB\u51FD\u5F0F\u5462?\r
* \u4E00\u6A23\u4F7F\u7528\u9EDE\u904B\u7B97\u7B26\uFF0C\u6211\u5011\u5C31\u80FD\u547C\u53EB\u5230Kitty\u5E95\u4E0B\u7684\`\u516C\u6709\u51FD\u6578\`\r
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210922/20097001cVi1nCAJFU.png)\r
\r
### \u7BC4\u4F8B:\u6211\u5011\u6CBF\u7528Day21\u7684\u7A0B\u5F0F\u78BC\u4F86\u505A\u7DF4\u7FD2\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u6211\u5011\u5BE6\u4F8B\u5316\u5169\u500B\u985E\r
            Cat cat1 = new Cat();\r
            Cat cat2 = new Cat();\r
\r
            //\u586B\u5BEBcat1\u6578\u64DA\u6210\u54E1\r
            cat1.name = "\u615A\u6127\u4E00\u96BB\u8C93";\r
            cat1.age = 10;\r
\r
            //\u586B\u5BEBcat2\u6578\u64DA\u6210\u54E1\r
            cat2.name = "\u7121\u6094\u4E00\u96BB\u8C93";\r
            cat2.age = 35;\r
\r
            //\u986F\u793A\u7D50\u679C\r
            Console.WriteLine("\u59D3\u540D : " + cat1.name + ",\u5E74\u9F61 : " + cat1.age);\r
            Console.WriteLine("\u59D3\u540D : " + cat2.name + ",\u5E74\u9F61 : " + cat2.age);\r
            Console.ReadKey();\r
        }\r
    }\r
    class Cat\r
    {\r
        //\u540D\u7A31\r
        public string name;\r
        //\u5E74\u9F61\r
        public int age;\r
        //\u8001\u9F20\u6578\u91CF\r
        public int miceCount = 0; //\u8A18\u9304\u6293\u5E7E\u96BB\u8001\u9F20\r
        //\u65B9\u6CD5\u6210\u54E1\r
        //\u65B9\u6CD5:\u6253\u62DB\u547C\r
        public void Hello()\r
        {\r
            Console.WriteLine("\u55E8!\u6211\u662F{0} ", name);\r
        }\r
        //\u65B9\u6CD5:\u55B5\u55B5\u53EB\r
        public void Meow()\r
        {\r
            Hello();\r
            Console.WriteLine("\u55B5~~~~~\u55B5~~~");\r
        }\r
        //\u65B9\u6CD5:\u6349\u8001\u9F20\r
        public void CaseMice()\r
        {\r
            miceCount++;\r
            Hello();\r
            Console.WriteLine("\u6211\u5DF2\u7D93\u6293\u4E86 {0} \u96BB\u8001\u9F20", miceCount);\r
        }\r
    }\r
}\r
\`\`\`\r
\r
\u7D50\u679C:\r
>\u59D3\u540D : \u615A\u6127\u4E00\u96BB\u8C93,\u5E74\u9F61 : 10\\\r
\u59D3\u540D : \u7121\u6094\u4E00\u96BB\u8C93,\u5E74\u9F61 : 35\r
\r
### \u7BC4\u4F8B:\u6211\u5011\u770B\u770B\u65B9\u6CD5\u7684\u72C0\u6CC1\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u6211\u5011\u5BE6\u4F8B\u5316\u5169\u500B\u985E\r
            Cat cat1 = new Cat();\r
            Cat cat2 = new Cat();\r
\r
            //\u586B\u5BEBcat1\u6578\u64DA\u6210\u54E1\r
            cat1.name = "\u615A\u6127\u4E00\u96BB\u8C93";\r
            cat1.age = 10;\r
\r
            //\u586B\u5BEBcat2\u6578\u64DA\u6210\u54E1\r
            cat2.name = "\u7121\u6094\u4E00\u96BB\u8C93";\r
            cat2.age = 35;\r
\r
            //\u8B93\u615A\u6127\u4E00\u96BB\u8C93\u6293\u5169\u96BB\u8001\u9F20\r
            cat1.CaseMice();\r
            cat1.CaseMice();\r
\r
            //\u8B93\u7121\u6094\u4E00\u96BB\u8C93\u6293\u4E00\u96BB\u8001\u9F20\r
            cat2.CaseMice();\r
\r
            //\u986F\u793A\u7D50\u679C\r
            Console.WriteLine("\u59D3\u540D : " + cat1.name + ",\u5E74\u9F61 : " + cat1.age + ",\u5171\u6293 " + cat1.miceCount + " \u96BB\u8001\u9F20");\r
            Console.WriteLine("\u59D3\u540D : " + cat2.name + ",\u5E74\u9F61 : " + cat2.age + ",\u5171\u6293 " + cat2.miceCount + " \u96BB\u8001\u9F20");\r
            Console.ReadKey();\r
        }\r
    }\r
    class Cat\r
    {\r
        //\u540D\u7A31\r
        public string name;\r
        //\u5E74\u9F61\r
        public int age;\r
        //\u8001\u9F20\u6578\u91CF\r
        public int miceCount = 0; //\u8A18\u9304\u6293\u5E7E\u96BB\u8001\u9F20\r
        //\u65B9\u6CD5\u6210\u54E1\r
        //\u65B9\u6CD5:\u6253\u62DB\u547C\r
        public void Hello()\r
        {\r
            Console.WriteLine("\u55E8!\u6211\u662F{0} ", name);\r
        }\r
        //\u65B9\u6CD5:\u55B5\u55B5\u53EB\r
        public void Meow()\r
        {\r
            Hello();\r
            Console.WriteLine("\u55B5~~~~~\u55B5~~~");\r
        }\r
        //\u65B9\u6CD5:\u6349\u8001\u9F20\r
        public void CaseMice()\r
        {\r
            miceCount++;\r
            Hello();\r
            Console.WriteLine("\u6211\u5DF2\u7D93\u6293\u4E86 {0} \u96BB\u8001\u9F20", miceCount);\r
        }\r
    }\r
   }\r
   \`\`\`\r
   \r
   \u7D50\u679C:\r
   >\u55E8!\u6211\u662F\u615A\u6127\u4E00\u96BB\u8C93\\\r
\u6211\u5DF2\u7D93\u6293\u4E86 1 \u96BB\u8001\u9F20\\\r
\u55E8!\u6211\u662F\u615A\u6127\u4E00\u96BB\u8C93\\\r
\u6211\u5DF2\u7D93\u6293\u4E86 2 \u96BB\u8001\u9F20\\\r
\u55E8!\u6211\u662F\u7121\u6094\u4E00\u96BB\u8C93\\\r
\u6211\u5DF2\u7D93\u6293\u4E86 1 \u96BB\u8001\u9F20\\\r
\u59D3\u540D : \u615A\u6127\u4E00\u96BB\u8C93,\u5E74\u9F61 : 10,\u5171\u6293 2 \u96BB\u8001\u9F20\\\r
\u59D3\u540D : \u7121\u6094\u4E00\u96BB\u8C93,\u5E74\u9F61 : 35,\u5171\u6293 1 \u96BB\u8001\u9F20\r
\r
### \u4EE5\u4E0A\u5C31\u662F\u7269\u4EF6\uFF0C\u6700\u57FA\u672C\u5143\u7D20\u7684\u7528\u6CD5\uFF0C\u6211\u5011\u660E\u5929\u898B\u55BD`,ce="\u{1F916}[Day22]C# \u96DE\u790E\u89C0\u5FF5- \u7269\u4EF6\u5C0E\u5411(oop)~\u7269\u4EF6(Object)";function me(){return u("Chicken Say Hi | \u{1F916} \u7269\u4EF6\u5C0E\u5411(oop)~\u7269\u4EF6(Object)"),t(s,{children:[n(o,{}),n(l,{backPath:r.IronMan13,title:ce,text:le})]})}const he=`\u6BCF\u5929\u90FD\u5728\u601D\u8003\uFF0C\\\r
\u5982\u679C\u4E8B\u60C5\u81EA\u5DF1\u6703\u505A\u597D\u5C31\u597D\u4E86\uFF0C\\\r
\u7A0B\u5F0F\u81EA\u5DF1\u6703\u81EA\u52D5\u6AA2\u67E5\u5C31\u597D\u4E86\uFF0C\\\r
\u4ECA\u5929C#\u4E5F\u6709\u81EA\u52D5\u6AA2\u67E5\u8B8A\u6578\u662F\u5426\u7B26\u5408\u8981\u6C42\u7684\u529F\u80FD\uFF0C\\\r
\u6211\u5011\u6709\u8ACB\u5C6C\u6027!\r
\r
### \u8A2A\u554F\u5668 (Assessor)\r
* \u628A\u8B8A\u6578\u6539\u70BA\u79C1\u7528\`private int age;\`\r
* \u4E26\u52A0\u5165\u5169\u884C\u9650\u5236\r
\r
### \u7BC4\u4F8B:\u6211\u5011\u5EFA\u7ACB\u4E00\u500B\u72D7\u7684\u985E\u5225\u505A\u7DF4\u7FD2\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            Dog dog = new Dog();\r
            //\u8A2D\u5B9A\u70BA\u4E09\u6B72\r
            dog.SetAge(3);\r
            Console.WriteLine(dog.GetAge());\r
\r
            //\u8A2D\u5B9A\u70BA-1\u6B72\r
            dog.SetAge(-1);\r
            Console.WriteLine(dog.GetAge());\r
\r
            Console.ReadKey();\r
        }\r
    }\r
    //\u72D7\u7684\u985E\u5225\r
    class Dog\r
    {\r
        //\u540D\u7A31\r
        public string name;\r
        //\u5E74\u9F61\r
        private int age;\r
\r
        //\u8A2D\u5B9A\u5E74\u9F61\r
        public void SetAge(int ageValue)\r
        {\r
            //\u5982\u679C\u5E74\u9F61\u70BA\u8CA0\u6578\u5C31\u6539\u62100\r
            if (ageValue <= 0)\r
            {\r
                age = 0;\r
            }\r
            else\r
            {\r
                age = ageValue;\r
            }\r
        }\r
        //\u56DE\u50B3\u8A2D\u5B9A\u5F8C\u7684\u5E74\u9F61\r
        public int GetAge()\r
        {\r
            return age;\r
        }\r
    }\r
   }\r
   \`\`\`\r
   \r
   \u7D50\u679C:\r
   >3\\\r
   >0\r
\r
\`\u203B\u8A2A\u554F\u5668\u96D6\u7136\u89E3\u6C7A\u4E86\u554F\u984C\uFF0C\u4F46\u5927\u5BB6\u9084\u662F\u7FD2\u6163\u628A\u5E74\u9F61\u4F5C\u70BA\u8B8A\u6578\u4F7F\u7528\u3002\`\r
\`\u5C6C\u6027\u5C31\u662F\u9019\u800C\u751F\u7684\`\r
\r
### \u5C6C\u6027(Property)\r
- \u5C6C\u6027\u7684\u597D\u8655:\r
	- \u6709\u5C01\u88DD\u6027\r
	- \u53EF\u4EE5\u9032\u884C\u5408\u6CD5\u6027\u7684\u6AA2\u67E5\r
	- \u7B26\u5408\u8B8A\u6578\u7684\u4F7F\u7528\u65B9\u5F0F\r
- \u7528\u6CD5:\r
	- \u7FD2\u6163\u5C07\u8B8A\u6578\u547D\u540D\u6210\u5C0F\u5BEB\uFF0C\u5C6C\u6027\u547D\u540D\u70BA\u5927\u5BEB\r
- \u5B9A\u7FA9\u4E86 get \u8207 set \u5169\u500B\u8A2A\u554F\u5668\xA0\r
		\u2780get\u8A2A\u554F\u5668\u7528\u4F86\u8B80\u53D6\u8B8A\u6578\u7684\u503C\r
		\u2781set\u8A2A\u554F\u5668\u7528\u4F86\u4FEE\u6539\u8B8A\u6578\u7684\u503C\r
        \r
### \u7BC4\u4F8B:\u6211\u5011\u4F86\u5EFA\u7ACB\u4E00\u500B\u9D28\u5B50\u985E\u5225\u4F86\u7DF4\u7FD2\u5427\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            Duck duck = new Duck();\r
            //\u8A2D\u5B9A\u70BA\u4E09\u6B72\r
            duck.duckAge = 3;\r
            Console.WriteLine(duck.duckAge);\r
\r
            //\u8A2D\u5B9A\u70BA-1\u6B72\r
            duck.duckAge = -1;\r
            Console.WriteLine(duck.duckAge);\r
\r
            Console.ReadKey();\r
        }\r
    }\r
    /// <summary>\r
    /// Day23-02\r
    /// \u9D28\u7684\u985E\u5225\r
    /// </summary>\r
    class Duck\r
    {\r
        //\u540D\u7A31\r
        public string name;\r
        //\u5E74\u9F61\r
        private int age;\r
        //\u5C6C\u6027\r
        public int duckAge\r
        {\r
            get//\u56DE\u50B3\u503C\r
            {\r
                //\u56DE\u50B3\u8A2D\u5B9A\u5F8C\u7684\u503C\r
                return age;\r
            }\r
            set //\u8A2D\u5B9A\u503C\r
            {\r
                if (value <= 0)\r
                {\r
                    age = 0;\r
                }\r
                else\r
                {\r
                    age = value;\r
                }\r
            }\r
        }\r
    }\r
  }\r
  \`\`\`\r
  \r
  \u7D50\u679C:\r
  >3\\\r
  >0\r
\r
### \u5C6C\u6027\u89E3\u6C7A\u4E86\u6211\u5011\u559C\u63DB\u7528\u8B8A\u6578\uFF0C\u53C8\u53EF\u4EE5\u81EA\u52D5\u6AA2\u67E5\uFF0C\u4E26\u4E14\u53C8\u5177\u6709\u5C01\u88DD\u6027\uFF0C\u4E00\u6B21\u89E3\u6C7A\u4E09\u7A2E\u554F\u984C`,ge="\u{1F916}[Day23]C# \u96DE\u790E\u89C0\u5FF5- \u7269\u4EF6\u5C0E\u5411(oop)~\u5C6C\u6027(Property)";function de(){return u("Chicken Say Hi | \u{1F916} \u7269\u4EF6\u5C0E\u5411(oop)~\u5C6C\u6027(Property)"),t(s,{children:[n(o,{}),n(l,{backPath:r.IronMan13,title:ge,text:he})]})}const pe=`\u8001\u95C6\u6211\u8981\u4E00\u500B\u8C6C\u6392\u6F22\u5821\uFF0C\\\r
\u4E0D\u8981\u756A\u8304\uFF0C\u4E0D\u8981\u5C0F\u9EC3\u74DC\uFF0C\\\r
\u6D0B\u8525\u52A0\u91CF\uFF0C\u52A0\u8D77\u53F8\uFF0C\\\r
\u73FE\u5BE6\u751F\u6D3B\u4E2D\uFF0C\u6211\u5011\u5E38\u5E38\u6703\u5728\u9EDE\u9910\u6642\u8DDF\u8001\u95C6\u6307\u5B9A\u4E00\u4E9B\u914D\u6599\uFF0C\\\r
\u800C\u4E0D\u662F\u9910\u9EDE\u4E0A\u4E86\uFF0C\u624D\u628A\u4E0D\u559C\u6B61\u7684\u6311\u6389\uFF0C\\\r
C#\u4E16\u754C\u4E2D\uFF0C\u4E5F\u6709\u9019\u6A23\u7684\u9EDE\u9910\u65B9\u5F0F\uFF0C\\\r
\u90A3\u5C31\u662F\u6240\u8B02\u7684\u5EFA\u69CB\u65B9\u6CD5\r
\r
### \u5EFA\u69CB\u65B9\u6CD5\r
* \u5728\u6211\u5011\u5275\u5EFA\u7269\u4EF6\u6642\uFF0C\u7CFB\u7D71\u70BA\u7269\u4EF6\u7684\u6210\u54E1\u5206\u914D\u8A18\u61B6\u9AD4\uFF0C\u7136\u5F8C\u901A\u904E\u5EFA\u69CB\u65B9\u6CD5\u4F86\u521D\u59CB\u5316\u7269\u4EF6\u7684\u6210\u54E1\u8B8A\u6578\r
\r
### 1. \u9ED8\u8A8D\u5EFA\u69CB\u65B9\u6CD5 : \u6BCF\u500B\u985E\u5225\u90FD\u6709\u4E00\u500B\u9ED8\u8A8D\u7684\u8207\u985E\u5225\u540C\u540D\u7684\u5EFA\u69CB\u65B9\u6CD5\r
- \u5EFA\u69CB\u65B9\u6CD5\u7E3D\u662F\u5B58\u5728\u7684\uFF0C\u5373\u4F7F\u6C92\u6709\u7279\u5225\u986F\u793A\u5B9A\u7FA9\uFF0C\u7DE8\u8B6F\u5668\u4E5F\u6703\u70BA\u985E\u5225\u5206\u914D\u4E00\u500B\u9ED8\u8A8D\u7684\u5EFA\u69CB\u65B9\u6CD5\r
- \u6BCF\u7576\u985E\u5225\u5BE6\u4F8B\u5316\u6642\uFF0C\u6BCF\u500B\u6210\u54E1\u90FD\u6703\u5728\u8A18\u61B6\u9AD4\u5206\u5230\u5167\u5B58\u7A7A\u9593\uFF0C\u4E26\u5BEB\u5B58\u5165\u521D\u59CB\u503C\\\r
	EX:\\\r
		\u6574\u578B\u8B8A\u6578 \u521D\u59CB >> 0\\\r
		\u5BE6\u578B\u8B8A\u6578\xA0\u521D\u59CB >> 0.0\\\r
		\u5E03\u6797\u8B8A\u6578\xA0\u521D\u59CB >> false\\\r
		\u5B57\u4E32\u8B8A\u6578\xA0\u521D\u59CB >> null\r
        \r
### \u7BC4\u4F8B:\u6211\u5011\u5EFA\u7ACB\u4E00\u500B\u8C6C\u7684\u985E\u5225\u4F86\u770B\u770B\u7D50\u679C\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            Pig pig = new Pig();\r
            Console.WriteLine("name = " + pig.name);\r
            Console.WriteLine("age = " + pig.age);\r
\r
            Console.ReadKey();\r
        }\r
    }\r
    //\u8C6C\u7684\u985E\u5225\r
    class Pig\r
    {\r
        //\u540D\u7A31\r
        public string name;\r
        //\u5E74\u9F61\r
        public int age;\r
    }\r
 }\r
\`\`\`\r
\r
\u7D50\u679C:\r
>name =\\\r
age = 0\r
\r
### 2. \u5E36\u53C3\u6578\u7684\u5EFA\u69CB\u65B9\u6CD5\r
\`\u203B\u5EFA\u69CB\u65B9\u6CD5\u662F\u4E00\u7A2E\u7279\u6B8A\u6DB5\u5F0F\uFF0C\u5979\u5FC5\u9808\u548C\u985E\u5225\u540C\u540D\uFF0C\u4E26\u4E14\u6C92\u6709\u8FD4\u56DE\u985E\u578B(\u9023void\u4E5F\u6C92\u6709)\`\r
\r
### \u7BC4\u4F8B:\u6211\u5011\u4FEE\u6539\u4E00\u4E0B\u8C6C\u985E\u5225\u5427\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u4F7F\u7528\u5EFA\u69CB\u65B9\u6CD5\r
            Pig pig = new Pig("\u80A5\u561F\u561F\u4E00\u96BB\u8C6C", 3);\r
\r
            Console.WriteLine("\u59D3\u540D: " + pig.name);\r
            Console.WriteLine("\u5E74\u9F61: " + pig.age);\r
\r
            Console.ReadKey();\r
        }\r
    }\r
    //\u8C6C\u7684\u985E\u5225\r
    class Pig\r
    {\r
        //\u540D\u7A31\r
        public string name;\r
        //\u5E74\u9F61\r
        public int age;\r
\r
        //\u4F7F\u7528\u5EFA\u69CB\u65B9\u6CD5\r
        public Pig()\r
        {\r
            //\u521D\u59CB\u5316\u8B8A\u6578\r
            name = nameValue;\r
            age = ageValue;\r
        }\r
    }\r
  }\r
  \`\`\`\r
  \r
  \u7D50\u679C:\r
>\u59D3\u540D: \u80A5\u561F\u561F\u4E00\u96BB\u8C6C\r
>\u5E74\u9F61: 3\r
\r
  ![mdImg](https://ithelp.ithome.com.tw/upload/images/20210925/20097001st53NPtdIy.png)\r
  \r
### 3.\u7121\u53C3\u6578\u5EFA\u69CB\u65B9\u6CD5\r
* \u7576\u6211\u5011\u5B9A\u7FA9\u5EFA\u69CB\u65B9\u6CD5\u5F8C\uFF0C\u9ED8\u8A8D\u7684\u51FD\u6578\u5C31\u5931\u6548\u4E86\uFF0C\u5982\u679C\u60F3\u7E7C\u7E8C\u7528\u7121\u53C3\u6578\u5EFA\u69CB\u65B9\uFF0C\u5C31\u5FC5\u9808\u986F\u5F0F\u5B9A\u7FA9\r
    \r
### \u7BC4\u4F8B:\u6211\u5011\u5728\u4FEE\u6539\u4E00\u4E0B\u8C6C\u7684\u985E\u5225\r
 \`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            Pig pig = new Pig();\r
            Console.WriteLine("name = " + pig.name);\r
            Console.WriteLine("age = " + pig.age);\r
            Console.ReadKey();\r
        }\r
    }\r
    //\u8C6C\u7684\u985E\u5225\r
    class Pig\r
    {\r
        //\u540D\u7A31\r
        public string name;\r
        //\u5E74\u9F61\r
        public int age;\r
\r
        //\u4F7F\u7528\u5EFA\u69CB\u65B9\u6CD5\r
        public Pig()\r
        {\r
            //\u521D\u59CB\u5316\u8B8A\u6578\r
            name = "\u80A5\u80A5\u4E00\u96BB\u8C6C";\r
            age = 20;\r
        }\r
    }\r
   }\r
   \`\`\`\r
   \r
   \u7D50\u679C:\r
   >name = \u80A5\u80A5\u4E00\u96BB\u8C6C\\\r
age = 20\r
\r
### \u4EE5\u4E0A\u5C31\u662F\u6211\u5011\u4ECA\u5929\u7684\u5EFA\u69CB\u65B9\u6CD5\uFF0C\u671F\u5F85\u5927\u5BB6\u5728\u9EDE\u9910\u524D\u5C31\u80FD\u60F3\u597D\u81EA\u5DF1\u8981\u4EC0\u9EBC\u4E86`,Ce="\u{1F916}[Day24]C# \u96DE\u790E\u89C0\u5FF5- \u7269\u4EF6\u5C0E\u5411(oop)~\u5EFA\u69CB\u65B9\u6CD5(Constructor)";function ye(){return u("Chicken Say Hi | \u{1F916} \u7269\u4EF6\u5C0E\u5411(oop)~\u5EFA\u69CB\u65B9\u6CD5(Constructor)"),t(s,{children:[n(o,{}),n(l,{backPath:r.IronMan13,title:Ce,text:pe})]})}const xe=`\u8FB2\u5834\u88E1\u7684\u96DE\u98FC\u6599\u90FD\u662F\u5927\u628A\u5927\u628A\u7684\u6492\u5728\u5730\u4E0A\uFF0C\\\r
\u6BCF\u96BB\u96DE\u90FD\u53BB\u5403\u90A3\u4E9B\u98FC\u6599\uFF0C\u5403\u5B8C\u5C31\u6C92\u4E86\uFF0C\\\r
\u800C\u4E0D\u50CF\u5176\u4ED6\u5BF5\u7269\u6709\u7368\u7ACB\u7684\u98FC\u990A\u7C60\uFF0C\\\r
\u5C08\u7528\u7684\u98EF\u7897\uFF0C\u5403\u98EF\u6642\u90FD\u4E0D\u7528\u6436\u98DF\uFF0C\\\r
C#\u4E2D\u4E5F\u6709\u50CF\u96DE\u98FC\u6599\u7684\u7528\u6CD5\uFF0C\\\r
\u6492\u5728\u5730\u4E0A\u5927\u5BB6\u4E00\u8D77\u5171\u7528\r
\r
### \u975C\u614B\u8B8A\u6578\r
* \u4E00\u822C\u60C5\u6CC1\u4E0B\u8B8A\u6578\u6210\u54E1\u4E26\u4E0D\u6703\u4E92\u76F8\u5F71\u97FF\r
* \u5982\u540C\u6BCF\u500B\u4EBA\u90FD\u6709\u81EA\u5DF1\u7684\u5E74\u9F61\uFF0C\u4E26\u4E0D\u6703\u4E92\u76F8\u5F71\u97FF\r
* \u4F46\u975C\u614B\u8B8A\u6578\u4E0D\u4E00\u6A23\uFF0C\u4ED6\u7684\u503C\u5728\u8A18\u61B6\u9AD4\u4E2D\u53EA\u6703\u5B58\u4E00\u4EFD\uFF0C\u7136\u5F8C\u5927\u5BB6\u4E00\u8D77\u5171\u7528\u4ED6\r
* \u7D50\u69CB\r
\r
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210925/20097001QhRt9Z7xf4.png)\r
\r
#### \u7BC4\u4F8B: \u6211\u5011\u4F86\u505A\u4E00\u500B\u5C0F\u904A\u6232\r
* \u76EE\u524D\u8FB2\u5834\u670930\u96BB\u96DE\r
* \u4E00\u5929\u6703\u51FA\u751F3\u96BB\u96DE\r
* \u6BCF\u904E\u5169\u5929\uFF0C\u8FB2\u592B\u5C31\u6703\u8F098\u96BB\u96DE\u53BB\u5E02\u5834\u8CE3\u6389\r
* \u53EA\u8981\u8FB2\u5834\u7684\u96DE\u8B8A\u62100\uFF0C\u90A3\u8FB2\u5834\u5C31\u5012\u9589\u4E86\r
* \u90A3\u4E00\u500B\u6708\u5F8C\u8FB2\u5834\u6703\u4E0D\u6703\u5012\u9589\u5462?\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
\r
\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            for(int i = 1; i <= 31; i++)\r
            {\r
                Console.WriteLine();\r
                Console.WriteLine("---\u65B0\u7684\u4E00\u5929--");\r
                Console.WriteLine("\u4ECA\u5929 : " + i + "\u865F");\r
                //\u65B0\u7684\u4E00\u5929\u9700\u8981\u751F\u65B0\u7684\u96DE\r
                Chicken chickenClass = new Chicken();\r
                chickenClass.NewDayChicken();\r
                Console.WriteLine("\u76EE\u524D\u8FB2\u5834\u6709 : " + Chicken.ChickenCount + "\u96BB\u96DE");\r
\r
                //\u5224\u65B7\u4ECA\u5929\u662F\u5426\u6709\u8981\u53BB\u5E02\u5834\r
                if ((i % 2) == 0)\r
                {\r
                    //\u8FB2\u592B\u53BB\u5E02\u5834\u8CE3\u96DE\r
                    Farmer farmerClass = new Farmer();\r
                    Console.WriteLine("\u8FB2\u592B\u8F09\u96DE\u53BB\u8CE3\u4E86...");\r
                    farmerClass.GoToMarket();\r
                    Console.WriteLine("\u8CE3\u5B8C\u96DE\u5F8C\u5269\u4E0B : " + Chicken.ChickenCount + "\u96BB\u96DE");\r
                }\r
                //\u5224\u65B7\u96DE\u9084\u5269\u5E7E\u96BB\r
                if(Chicken.ChickenCount <= 0)\r
                {\r
                    Console.WriteLine();\r
                    Console.WriteLine("!!!!!!!\u96DE\u88AB\u8CE3\u5149\u5149\u4E86!!!!!");\r
                    Console.WriteLine("\u8FB2\u5834\u5012\u9589!");\r
\r
                    //\u65E2\u7136\u71DF\u696D\u4E0D\u4E0B\u53BB\u5C31\u8DF3\u812B\u8FF4\u5708\u5427\r
                    break;\r
                }\r
            }\r
            Console.ReadKey();\r
        }\r
    }\r
    //\u5B9A\u7FA9\u96DE\u7684\u985E\u5225\r
    class Chicken\r
    {\r
        //\u5BA3\u544A\u4E00\u500B\u96DE\u6578\u91CF\u7684\u975C\u614B\u8B8A\u6578\r
        public static int ChickenCount = 30;\r
\r
        //\u65B0\u7684\u4E00\u5929\u751F\u56DB\u96BB\u96DE\r
        public void NewDayChicken()\r
        {\r
            ChickenCount += 3;\r
        }\r
    }\r
    //\u5B9A\u7FA9\u8FB2\u592B\u7684\u985E\u5225\r
    class Farmer\r
    {\r
        public void GoToMarket()\r
        {\r
            //\u4F7F\u7528\u975C\u614B\u8B8A\u6578\u4E0D\u9700\u8981\u5BE6\u4F8B\u5316\r
            Chicken.ChickenCount -= 8;\r
        }\r
    }\r
}\r
\`\`\`\r
\r
\u7D50\u679C:\r
> ---\u65B0\u7684\u4E00\u5929--\\\r
> \u4ECA\u5929 : 1\u865F\\\r
> \u76EE\u524D\u8FB2\u5834\u6709 : 33\u96BB\u96DE\\\r
> \\\r
> ---\u65B0\u7684\u4E00\u5929--\\\r
> \u4ECA\u5929 : 2\u865F\\\r
> \u76EE\u524D\u8FB2\u5834\u6709 : 36\u96BB\u96DE\\\r
> \u8FB2\u592B\u8F09\u96DE\u53BB\u8CE3\u4E86...\\\r
> \u8CE3\u5B8C\u96DE\u5F8C\u5269\u4E0B : 28\u96BB\u96DE\\\r
> \\\r
> ---\u65B0\u7684\u4E00\u5929--\\\r
> \u4ECA\u5929 : 3\u865F\\\r
> \u76EE\u524D\u8FB2\u5834\u6709 : 31\u96BB\u96DE\\\r
> \\\r
> ---\u65B0\u7684\u4E00\u5929--\\\r
> \u4ECA\u5929 : 4\u865F\\\r
> \u76EE\u524D\u8FB2\u5834\u6709 : 34\u96BB\u96DE\\\r
> \u8FB2\u592B\u8F09\u96DE\u53BB\u8CE3\u4E86...\\\r
> \u8CE3\u5B8C\u96DE\u5F8C\u5269\u4E0B : 26\u96BB\u96DE\\\r
> .\\\r
> .\\\r
> .\\\r
> .\\\r
> ---\u65B0\u7684\u4E00\u5929--\\\r
> \u4ECA\u5929 : 29\u865F\\\r
> \u76EE\u524D\u8FB2\u5834\u6709 : 5\u96BB\u96DE\\\r
> \\\r
> ---\u65B0\u7684\u4E00\u5929--\\\r
> \u4ECA\u5929 : 30\u865F\\\r
> \u76EE\u524D\u8FB2\u5834\u6709 : 8\u96BB\u96DE\\\r
> \u8FB2\u592B\u8F09\u96DE\u53BB\u8CE3\u4E86...\\\r
> \u8CE3\u5B8C\u96DE\u5F8C\u5269\u4E0B : 0\u96BB\u96DE\\\r
> \\\r
> !!!!!!!\u96DE\u88AB\u8CE3\u5149\u5149\u4E86!!!!!\\\r
> \u8FB2\u5834\u5012\u9589!\r
\r
\` \u6700\u7D42\u96DE\u9084\u662F\u4F9B\u4E0D\u61C9\u6C42\u8CE3\u5149\u5149\u4E86!\u8FB2\u5834\u96E3\u9003\u5012\u9589\u5371\u6A5F!\`\r
\r
### \u975C\u614B\u8B8A\u6578\u53EA\u6709\u5728\u5275\u5EFA\u985E\u5225\u7684\u6642\u5019\u6703\u505A\u4E00\u6B21\u521D\u59CB\u5316\u800C\u5DF2\uFF0C\u9019\u9EDE\u662F\u5927\u5BB6\u9808\u7279\u5225\u6CE8\u610F\u7684\uFF0C\u6211\u5011\u5C31\u660E\u5929\u898B\u55BD`,De="\u{1F916}[Day25]C# \u96DE\u790E\u89C0\u5FF5- \u5171\u7522\u4E3B\u7FA9\u8005~\u975C\u614B\u6210\u54E1";function Se(){return u("Chicken Say Hi | \u{1F916} \u5171\u7522\u4E3B\u7FA9\u8005~\u975C\u614B\u6210\u54E1"),t(s,{children:[n(o,{}),n(l,{backPath:r.IronMan13,title:De,text:xe})]})}const be=`\u5F88\u591A\u4FBF\u5229\u5546\u5E97\u90FD\u6709\u4ED6\u5011\u7684\u5236\u670D\uFF0C\\\r
\u7A7F\u8457\u4E00\u6A21\u4E00\u6A23\u7684\u5236\u670D\uFF0C\\\r
\u5C31\u7B97\u96E2\u958B\u5E97\u9762\uFF0C\\\r
\u5927\u5BB6\u90FD\u9084\u662F\u64C1\u6709\u6975\u9AD8\u7684\u8FA8\u8B58\u5EA6\uFF0C\\\r
C#\u4E5F\u64C1\u6709\u5171\u540C\u5236\u670D\u7684\u529F\u80FD\r
\r
### \u591A\u8F09\r
### \u7BC4\u4F8B:\u6211\u5011\u5148\u4F86\u770B\u4E00\u6BB5\u7A0B\u5F0F\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            Console.WriteLine("Int : " + Calculate.DivideInt(10, 20));\r
            Console.WriteLine("Double : " + Calculate.DivideDouble(10.11, 20.22));\r
            Console.ReadKey();\r
        }\r
    }\r
    //\u5B9A\u7FA9\u8A08\u7B97\u7684\u985E\u5225\r
    class Calculate\r
    {\r
        //\u5BA3\u544A\u975C\u614B\u6CD5\u4F86\u8A08\u7B97\u6574\u6578\r
        public static int DivideInt(int x, int y)\r
        {\r
            return x * y;\r
        }\r
        //\u5BA3\u544A\u975C\u614B\u6CD5\u4F86\u8A08\u7B97\u6D6E\u9EDE\u6578\r
        public static double DivideDouble(double x, double y)\r
        {\r
            return x * y;\r
        }\r
    }\r
  }\r
\`\`\`\r
\r
\u7D50\u679C:\r
>Int : 200\\\r
Double : 204.4242\r
\r
\`\u5982\u679C\u9700\u8981\u4E0D\u540C\u7684\u7B97\u6CD5\uFF0C\u6211\u5011\u5C31\u9700\u8981\u5BEB\u7A2E\u65B9\u6CD5\uFF0C\u4F46\u5C0D\u65BC\u591A\u8F09\u4F86\u8AAA\u5B83\u53EF\u4EE5\u5E6B\u4ED6\u5011\u7A7F\u4E0A\u5236\u670D\`\r
\r
### \u7BC4\u4F8B:\u4F7F\u7528\u591A\u8F09\u4F86\u8655\u7406\u4E0A\u9762\u7684\u7A0B\u5F0F\u5427\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
\r
\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            Console.WriteLine("Int : " + Calculate.Divide(10, 20));\r
            Console.WriteLine("Double : " + Calculate.Divide(10.11, 20.22));\r
            Console.ReadKey();\r
        }\r
    }\r
    // \u5B9A\u7FA9\u8A08\u7B97\u7684\u985E\u5225\r
    class Calculate\r
    {\r
        //\u5BA3\u544A\u975C\u614B\u6CD5\u4F86\u8A08\u7B97\u6574\u6578\r
        public static int Divide(int x, int y)\r
        {\r
            return x * y;\r
        }\r
        //\u5BA3\u544A\u975C\u614B\u6CD5\u4F86\u8A08\u7B97\u6D6E\u9EDE\u6578\r
        public static double Divide(double x, double y)\r
        {\r
            return x * y;\r
        }\r
    }\r
 }\r
 \`\`\`\r
 \r
 \u7D50\u679C:\r
 >Int : 200\\\r
Double : 204.4242\r
\r
\`\u5404\u4F4D\u53EF\u80FD\u6703\u7A81\u7136\u9813\u609F\uFF0C\u554A\u539F\u4F86\u591A\u8F09\u5C31\u662F\u4E00\u6A23\u540D\u5B57\u7684\u65B9\u6CD5\uFF0C\u537B\u53EF\u4EE5\u505A\u4E0D\u540C\u4E8B\u60C5\`\r
\r
### \u5E0C\u671B\u5927\u5BB6\u90FD\u5B78\u6703\u5E6B\u81EA\u5DF1\u7684\u7A0B\u5F0F\u7A7F\u4E0A\u4E00\u6A23\u7684\u5236\u670D\u5594\uFF0C\u6211\u5011\u660E\u5929\u898B`,Fe="\u{1F916}[Day26]C# \u96DE\u790E\u89C0\u5FF5- \u7269\u4EF6\u5C0E\u5411(oop)~ \u591A\u8F09(Overload)";function fe(){return u("Chicken Say Hi | \u{1F916} \u7269\u4EF6\u5C0E\u5411(oop)~ \u591A\u8F09(Overload)"),t(s,{children:[n(o,{}),n(l,{backPath:r.IronMan13,title:Fe,text:be})]})}const Pe=`\u4EBA\u7E3D\u662F\u6703\u6709\u72AF\u932F\u7684\u4E00\u5929\uFF0C\\\r
\u7A0B\u5F0F\u60F3\u5FC5\u4E5F\u662F\u5982\u6B64\uFF0C\\\r
\u4F46\u72AF\u932F\u4E4B\u5F8C\u8A72\u600E\u9EBC\u8FA6\u5462?\\\r
\u6211\u5011\u4ECA\u5929\u4F86\u63A2\u8A0EC#\u7684\u932F\u8AA4\u8655\u7406\r
\r
### \u7570\u5E38(Exception)\r
* \u7A0B\u5F0F\u4E0D\u53EF\u80FD\u842C\u7121\u4E00\u5931\uFF0C\u7E3D\u6703\u6709\u51FA\u932F\u7684\u4E00\u5929\r
* \u4F46\u5982\u679C\u4E0D\u8655\u7406\u9019\u4E9B\u932F\u8AA4\uFF0C\u53EF\u80FD\u6703\u9020\u6210\u7A0B\u5F0F\u5D29\u6F70\r
\r
### \u7BC4\u4F8B:\u6211\u5011\u5BEB\u4E00\u500B\u5206\u6578\uFF0C\u4E26\u770B\u770B\u5206\u6BCD\u70BA\u96F6\u6703\u767C\u751F\u4EC0\u9EBC\u4E8B\u60C5\u5427\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u5BA3\u544A\u5206\u5B50\r
            int x = 100;\r
\r
            //\u5BA3\u544A\u5206\u6BCD\r
            int y = 0;\r
\r
            int z = x / y;\r
\r
            Console.WriteLine("\u7D50\u679C : " + z);\r
\r
            Console.ReadKey();\r
        }\r
    }\r
  }\r
  \`\`\`\r
  \r
  \u7D50\u679C:\r
  >\u672A\u8655\u7406\u7684\u4F8B\u5916\u72C0\u6CC1: System.DivideByZeroException: \u5617\u8A66\u4EE5\u96F6\u9664\u3002\\\r
   \u65BC CsharpDemo.Program.Main(String[] args) \u65BC C:\\CsharpDemo\\Program.cs: \u884C 21\r
   \r
\`\u6211\u5011\u6703\u767C\u73FE\u7A0B\u5F0F\u62CB\u51FA\u4E86\u4E00\u500BDivideByZeroException\u985E\u5225\u7684\u932F\u8AA4\uFF0C\u4F86\u63D0\u9192\u958B\u767C\u8005\u767C\u751F\u4EC0\u9EBC\u4E8B\u60C5\u4E86\`\r
\r
### \u6355\u6349\u7570\u5E38~try-catch\r
* try-chatch \u80FD\u5E6B\u6211\u5011\u628A\u7570\u5E38\u6355\u6349\u51FA\u4F86\uFF0C\u4E26\u4E14\u8B93\u6211\u5011\u6C7A\u5B9A\u5F8C\u7E8C\u7684\u8655\u7406\r
\r
### \u7BC4\u4F8B:\u6211\u5011\u8B93\u4F7F\u7528\u8005\u8F38\u5165\u5206\u6BCD\uFF0C\u4E26\u4E14\u4F86\u6355\u6349\u932F\u8AA4\u5427\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
\r
\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            try\r
            {\r
                Console.WriteLine("\u8ACB\u8F38\u5165\u5206\u6BCD");\r
                //\u5BA3\u544A\u5206\u5B50\r
                int x = 100;\r
\r
                //\u5BA3\u544A\u5206\u6BCD\r
                int y = Convert.ToInt32(Console.ReadLine());\r
\r
                int z = x / y;\r
\r
                Console.WriteLine("\u7D50\u679C : " + z);\r
            }\r
            catch (DivideByZeroException)//\u6355\u6349\u5206\u6BCD\u70BA0\u7684\u932F\u8AA4\r
            {\r
                Console.WriteLine("\u5206\u6BCD\u4E0D\u53EF\u4EE5\u70BA0");\r
            }\r
            catch (FormatException)//\u6355\u6349\u683C\u5F0F\u932F\u8AA4\r
            {\r
                Console.WriteLine("\u683C\u5F0F\u4E0D\u6B63\u78BA");\r
            }\r
\r
            Console.ReadKey();\r
        }\r
    }\r
  }\r
  \`\`\`\r
  \r
  \u8F38\u5165:\r
  >0\r
\r
\u7D50\u679C:\r
>\u8ACB\u8F38\u5165\u5206\u6BCD\\\r
0\\\r
\u5206\u6BCD\u4E0D\u53EF\u4EE5\u70BA0\r
\r
  \u8F38\u5165:\r
  >\u5B64\u7368\u4E00\u96BB\u96DE\r
\r
\u7D50\u679C:\r
>\u8ACB\u8F38\u5165\u5206\u6BCD\\\r
\u5B64\u7368\u4E00\u96BB\u96DE\\\r
\u683C\u5F0F\u4E0D\u6B63\u78BA\r
\r
### \u6700\u5F8C\u7684\u8655\u7406~try-catch-finally\r
* \u4EBA\u4E0D\u7BA1\u6709\u6C92\u6709\u72AF\u932F\uFF0C\u9084\u662F\u5F97\u5403\u98EF\r
* \u7A0B\u5F0F\u4E5F\u4E00\u6A23\uFF0C\u6709\u4E9B\u4E8B\u60C5\u5C31\u7B97\u72AF\u932F\u4E86\u9084\u662F\u5F97\u5427\u4ED6\u505A\u5B8C\r
\r
### \u7BC4\u4F8B:\u6211\u5011\u4F86\u8A66\u8A66\u770B\u5427\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            try\r
            {\r
                Console.WriteLine("\u8ACB\u8F38\u5165\u5206\u6BCD");\r
                //\u5BA3\u544A\u5206\u5B50\r
                int x = 100;\r
\r
                //\u5BA3\u544A\u5206\u6BCD\r
                int y = Convert.ToInt32(Console.ReadLine());\r
\r
                int z = x / y;\r
\r
                Console.WriteLine("\u7D50\u679C : " + z);\r
            }\r
            catch (Exception ex)//\u6355\u6349\u6240\u6709\u767C\u751F\u7684\u932F\u8AA4\uFF0C\u5982\u679C\u4E0D\u77E5\u9053\u53EF\u80FD\u6703\u767C\u751F\u7684\u932F\u8AA4\u53EF\u4EE5\u4F7F\u7528\u6B64\u985E\u5225\r
            {\r
                //ex.Message\u53EF\u5F97\u5230\u7C21\u6613\u7684\u932F\u8AA4\u63CF\u8FF0\uFF0C\u5982\u679C\u9700\u8981\u8A73\u60C5\uFF0C\u5EFA\u8B70\u4F7F\u7528 ex.ToString()\r
                Console.WriteLine(ex.Message);\r
            }\r
            finally//\u6700\u7D42\u8981\u8655\u7406\u7684\u4E8B\u60C5\r
            {\r
                Console.WriteLine("\u65E2\u7136\u90FD\u72AF\u932F\u4E86\uFF0C\u90A3\u5C31\u6536\u5DE5\u5403\u98EF\u5427!");\r
            }\r
\r
\r
            Console.ReadKey();\r
        }\r
    }\r
  }\r
  \`\`\`\r
  \r
   \u8F38\u5165:\r
  >0\r
\r
\u7D50\u679C:\r
>\u8ACB\u8F38\u5165\u5206\u6BCD\\\r
0\\\r
\u5617\u8A66\u4EE5\u96F6\u9664\u3002\\\r
\u65E2\u7136\u90FD\u72AF\u932F\u4E86\uFF0C\u90A3\u5C31\u6536\u5DE5\u5403\u98EF\u5427!\r
\r
### \u628A\u7570\u5E38\u4E1F\u51FA\u4F86~throw\r
* \u5982\u679C\u539F\u672C\u7684\u7570\u5E38\u4E0D\u5920\u6211\u5011\u7528\uFF0C\u90A3\u6211\u5011\u5C31\u4EBA\u5DE5\u4F86\u62CB\u7570\u5E38\u5427\r
\r
### \u7BC4\u4F8B:\u6211\u5011\u4F86\u8F38\u51651~10\u7684\u6578\u5B57\u5427\uFF0C\u8D85\u904E\u5C31\u628A\u932F\u8AA4\u62CB\u51FA\u4F86\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            try\r
            {\r
                Console.WriteLine("\u8ACB\u8F38\u51651~10\u4EFB\u4E00\u6578");\r
                int number = Convert.ToInt32(Console.ReadLine());\r
\r
                //\u5224\u65B7\u662F\u5426\u6709\u8D85\u904E\u7BC4\u570D\r
                if (number < 1 || number > 10)\r
                {\r
                    //\u62CB\u51FA\u8D85\u51FA\u7BC4\u570D\u7684\u7570\u5E38\r
                    throw new IndexOutOfRangeException();\r
                }\r
                else\r
                {\r
                    Console.WriteLine("\u4F60\u8F38\u5165\u4E86 : " + number);\r
                }\r
            }\r
            catch (Exception ex)//\u6355\u6349\u6240\u6709\u767C\u751F\u7684\u932F\u8AA4\uFF0C\u5982\u679C\u4E0D\u77E5\u9053\u53EF\u80FD\u6703\u767C\u751F\u7684\u932F\u8AA4\u53EF\u4EE5\u4F7F\u7528\u6B64\u985E\u5225\r
            {\r
                //ex.Message\u53EF\u5F97\u5230\u7C21\u6613\u7684\u932F\u8AA4\u63CF\u8FF0\uFF0C\u5982\u679C\u9700\u8981\u8A73\u60C5\uFF0C\u5EFA\u8B70\u4F7F\u7528 ex.ToString()\r
                Console.WriteLine(ex.Message);\r
            }\r
            finally//\u6700\u7D42\u8981\u8655\u7406\u7684\u4E8B\u60C5\r
            {\r
                Console.WriteLine("\u65E2\u7136\u90FD\u72AF\u932F\u4E86\uFF0C\u90A3\u5C31\u6536\u5DE5\u5403\u98EF\u5427!");\r
            }\r
\r
\r
            Console.ReadKey();\r
        }\r
    }\r
  }\r
  \`\`\`\r
  \r
  \u8F38\u5165:\r
  >11\r
  \r
  \u7D50\u679C:\r
  >\u8ACB\u8F38\u51651~10\u4EFB\u4E00\u6578\\\r
11\\\r
\u7D22\u5F15\u5728\u9663\u5217\u7684\u754C\u9650\u4E4B\u5916\u3002\\\r
\u65E2\u7136\u90FD\u72AF\u932F\u4E86\uFF0C\u90A3\u5C31\u6536\u5DE5\u5403\u98EF\u5427!\r
\r
### \u4ECA\u5929\u5B78\u6703\u932F\u8AA4\u8655\u7406\u4E4B\u5F8C\uFF0C\u7A0B\u5F0F\u5C31\u4E0D\u6703\u56E0\u70BA\u4E00\u9EDE\u9EDE\u5C0F\u6BDB\u75C5\u5C31\u7576\u6389\u5566\uFF0C\u671F\u5F85\u6211\u5011\u660E\u5929\u518D\u6703\u5566`,ve="\u{1F916}[Day27]C# \u96DE\u790E\u89C0\u5FF5- \u505A\u932F\u4E8B\u8A72\u600E\u9EBC\u8FA6\u5462?~\u932F\u8AA4\u8655\u7406";function Ee(){return u("Chicken Say Hi | \u{1F916} \u505A\u932F\u4E8B\u8A72\u600E\u9EBC\u8FA6\u5462?~\u932F\u8AA4\u8655\u7406"),t(s,{children:[n(o,{}),n(l,{backPath:r.IronMan13,title:ve,text:Pe})]})}const Ae=`\u5728\u4EBA\u985E\u4E2D\uFF0C\u57FA\u56E0\u80AF\u5B9A\u662F\u4E16\u4E16\u4EE3\u4EE3\u5728\u50B3\u627F\uFF0C\\\r
\u4E0B\u4E00\u4EE3\u9664\u4E86\u63A5\u6536\u4E86\u4E0A\u4E00\u4EE3\u7684\u57FA\u56E0\u4E4B\u5916\uFF0C\\\r
\u53EF\u80FD\u9084\u6703\u5077\u5077\u7684\u9032\u5316\uFF0C\\\r
C#\u4E2D\u4E5F\u662F\u5982\u6B64\uFF0C\\\r
\u6211\u5011\u5C31\u4F86\u4E00\u63A2\u7A76\u7ADFC#\u6F14\u5316\u7684\u5967\u5999\u5427\r
\r
### \u7E7C\u627F\u6982\u8FF0\r
* \u7E7C\u627F\u7684\u6982\u5FF5\u5C31\u5982\u540C\u751F\u7269\u5B78\u88E1\u9762\u7684\uFF0C\`\u754C\u9580\u7DB1\u76EE\u79D1\u5C6C\u7A2E\`\r
* \u95DC\u4FC2\u662F\u4E00\u5C64\u4E00\u5C64\u7E7C\u627F\u4E0B\u4F86\u7684\r
* \u5C31\u5982\u540C\u810A\u690E\u52D5\u7269\u7684\u7279\u5FB5\u90FD\u662F\uFF0C\`\u6709\u810A\u690E\uFF0C\u6709\u9AD4\u6EAB\uFF0C\u6703\u547C\u5438\`\uFF0C\u9CE5\u985E\u4E5F\u6709\u4EE5\u4E0A\u7279\u5FB5\uFF0C\u56E0\u6B64\u53EA\u9700\u8981\u53BB\u7E7C\u627F\u810A\u690E\u52D5\u7269\u7684\u7279\u5FB5\uFF0C\u4E26\u52A0\u4E0A\u81EA\u5DF1\u7684\u7279\u5FB5\uFF0C\`\u6709\u7FC5\u8180\uFF0C\u6703\u4E0B\u86CB\`\uFF0C\u96DE\u66F4\u5C6C\u65BC\u4ED6\u5011\u7684\u4E0B\u5C64\uFF0C\u56E0\u6B64\u96DE\u4E5F\u53EF\u4EE5\u7E7C\u627F\u4EE5\u4E0A\u7684\u7279\u5FB5\uFF0C\u4E26\u4E14\u52A0\u4E0A\u81EA\u5DF1\u7684\u7279\u5FB5\uFF0C\`\u6709\u96DE\u51A0\uFF0C\u6703\u5495\u5495\u53EB\`\r
* \u5982\u540C\u4E0A\u9762\u689D\u4EF6\`\u810A\u690E\u52D5\u7269\`\uFF0C\u6211\u5011\u6703\u628A\u5B83\u7A31\u70BA\`\u57FA\u5E95\u985E\u5225(Base class)\`\r
* \u518D\u4F86\u5C31\u662F\u7E7C\u627F\u4ED6\u7684\u985E\u5225\u6211\u5011\u7A31\u4E4B\u70BA\`\u884D\u751F\u985E\u5225\uFF08Derived class\uFF09\`\r
\r
### \u5C0F\u7DF4\u7FD2\r
### 1. \u5EFA\u7ACB\`\u96DE\`\u5E95\u985E\u5225\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
\r
\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            vertebrate vertebrateClass = new vertebrate();\r
            //\u5148\u500B\u5225\u5370\u7279\u5FB5\r
            Console.WriteLine("\u5404\u5225\u986F\u793A\u7279\u5FB5");\r
            vertebrateClass.VertebrateFeature1();\r
            vertebrateClass.VertebrateFeature2();\r
            vertebrateClass.VertebrateFeature3();\r
            //\u4E00\u6B21\u5168\u5370\r
            Console.WriteLine();\r
            Console.WriteLine("\u4E00\u6B21\u5217\u51FA\u6240\u6709\u7279\u5FB5");\r
            vertebrateClass.ShowALLVertebrateFeature();\r
            Console.ReadKey();\r
        }\r
    }\r
    //\u810A\u690E\u52D5\u7269\u985E\r
    class vertebrate\r
    {\r
        //\u7279\u5FB51:\u6703\u547C\u5438\r
        public void VertebrateFeature1()\r
        {\r
            Console.WriteLine("\u6211\u6703\u547C\u5438");\r
        }\r
        //\u7279\u5FB52:\u6709\u810A\u690E\r
        public void VertebrateFeature2()\r
        {\r
            Console.WriteLine("\u6211\u6709\u810A\u690E");\r
        }\r
        //\u7279\u5FB53:\u6709\u9AD4\u6EAB\r
        public void VertebrateFeature3()\r
        {\r
            Console.WriteLine("\u6211\u6709\u9AD4\u6EAB");\r
        }\r
        //\u986F\u793A\u6240\u6709\u7279\u5FB5\r
        public void ShowALLVertebrateFeature()\r
        {\r
            VertebrateFeature1();\r
            VertebrateFeature2();\r
            VertebrateFeature3();\r
        }\r
    }\r
  }\r
  \`\`\`\r
 \r
 \u7D50\u679C:\r
>\u5404\u5225\u986F\u793A\u7279\u5FB5\\\r
\u6211\u6703\u547C\u5438\\\r
\u6211\u6709\u810A\u690E\\\r
\u6211\u6709\u9AD4\u6EAB\\\r
>\\\r
\u4E00\u6B21\u5217\u51FA\u6240\u6709\u7279\u5FB5\\\r
\u6211\u6703\u547C\u5438\\\r
\u6211\u6709\u810A\u690E\\\r
\u6211\u6709\u9AD4\u6EAB\\\r
\r
### 2. \u5EFA\u7ACB\u884D\u751F\u985E\u5225~\u9CE5\u985E\r
* \u7E7C\u627F\u7528\u6CD5\u5C31\u662F\u5728\u65B0\u7684\u884D\u751F\u985E\u5225\u5F8C\u9762\u52A0\u4E0A:\u57FA\u5E95\u985E\u5225\r
* \u5982:\` class Birds: vertebrate\`\r
* \u9019\u6642\u4ED6\u5C07\u6703\u64C1\u6709\u4E0A\u4E00\u500B\u985E\u5225\u7684\u6240\u6709\u7279\u6027\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u5BE6\u4F8B\u5316\u9CE5\u985E\r
            Birds birdsClass = new Birds();\r
            //\u5148\u500B\u5225\u5370\u7279\u5FB5\r
            Console.WriteLine("\u5404\u5225\u986F\u793A\u7279\u5FB5");\r
            birdsClass.BirdsFeature1();\r
            birdsClass.BirdsFeature2();\r
            birdsClass.VertebrateFeature1();\r
            birdsClass.VertebrateFeature2();\r
            birdsClass.VertebrateFeature3();\r
\r
            //\u4E00\u6B21\u5168\u5370\r
            Console.WriteLine();\r
            Console.WriteLine("\u4E00\u6B21\u5217\u51FA\u6240\u6709\u7279\u5FB5");\r
            birdsClass.ShowALLBirdsFeature();\r
            Console.ReadKey();\r
        }\r
    }\r
    //\u9CE5\u985E\uFF0C\u4E26\u4E14\u7E7C\u627F\u810A\u690E\u52D5\u7269\u985E\r
    class Birds : vertebrate\r
    {\r
        //\u7279\u5FB51:\u6703\u547C\u5438\r
        public void BirdsFeature1()\r
        {\r
            Console.WriteLine("\u6211\u6709\u7FC5\u8180");\r
        }\r
        //\u7279\u5FB52:\u6709\u810A\u690E\r
        public void BirdsFeature2()\r
        {\r
            Console.WriteLine("\u6211\u6703\u4E0B\u86CB");\r
        }\r
        //\u986F\u793A\u6240\u6709\u7279\u5FB5\r
        public void ShowALLBirdsFeature()\r
        {\r
            //\u76F4\u63A5\u7528\u810A\u690E\u52D5\u7269\u985E\u7684\u5168\u90E8\u986F\u793A\u65B9\u6CD5\r
            ShowALLVertebrateFeature();\r
            BirdsFeature1();\r
            BirdsFeature2();\r
        }\r
    }\r
    //\u810A\u690E\u52D5\u7269\u985E\r
    class vertebrate\r
    {\r
        //\u7279\u5FB51:\u6703\u547C\u5438\r
        public void VertebrateFeature1()\r
        {\r
            Console.WriteLine("\u6211\u6703\u547C\u5438");\r
        }\r
        //\u7279\u5FB52:\u6709\u810A\u690E\r
        public void VertebrateFeature2()\r
        {\r
            Console.WriteLine("\u6211\u6709\u810A\u690E");\r
        }\r
        //\u7279\u5FB53:\u6709\u9AD4\u6EAB\r
        public void VertebrateFeature3()\r
        {\r
            Console.WriteLine("\u6211\u6709\u9AD4\u6EAB");\r
        }\r
        //\u986F\u793A\u6240\u6709\u7279\u5FB5\r
        public void ShowALLVertebrateFeature()\r
        {\r
            VertebrateFeature1();\r
            VertebrateFeature2();\r
            VertebrateFeature3();\r
        }\r
    }\r
  }\r
  \`\`\`\r
  \r
  \u7D50\u679C:\r
  >\u5404\u5225\u986F\u793A\u7279\u5FB5\\\r
\u6211\u6709\u7FC5\u8180\\\r
\u6211\u6703\u4E0B\u86CB\\\r
\u6211\u6703\u547C\u5438\\\r
\u6211\u6709\u810A\u690E\\\r
\u6211\u6709\u9AD4\u6EAB\\\r
>\\\r
\u4E00\u6B21\u5217\u51FA\u6240\u6709\u7279\u5FB5\\\r
\u6211\u6703\u547C\u5438\\\r
\u6211\u6709\u810A\u690E\\\r
\u6211\u6709\u9AD4\u6EAB\\\r
\u6211\u6709\u7FC5\u8180\\\r
\u6211\u6703\u4E0B\u86CB\r
  \r
  \`\u4F60\u6703\u767C\u73FE\u592A\u795E\u5947\u4E86\u5427\uFF0C\u7E7C\u627F\u4E86\u5225\u7684\u985E\u5225\uFF0C\u5C31\u80FD\u64C1\u6709\u5B83\u7684\u529F\u80FD\uFF0C\u9084\u53EF\u4EE5\u81EA\u5DF1\u589E\u52A0\u65B0\u6771\u897F\`\r
  \r
  ### \u6211\u5011\u4F86\u500B\u8AB2\u5F8C\u7DF4\u7FD2\u5427\r
  ### \u7DF4\u7FD2\u984C:\u8ACB\u7E7C\u627F\u4E0A\u9762\u9CE5\u985E\u4F86\u751F\u51FA\u4E00\u96BB\u96DE\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        static void Main(string[] args)\r
        {\r
            //\u5BE6\u4F8B\u5316\u96DE\u985E\r
            Chicken chickenClass = new Chicken();\r
            //\u5148\u500B\u5225\u5370\u7279\u5FB5\r
            Console.WriteLine("\u5404\u5225\u986F\u793A\u7279\u5FB5");\r
            chickenClass.ChickenFeature1();\r
            chickenClass.ChickenFeature2();\r
            chickenClass.BirdsFeature1();\r
            chickenClass.BirdsFeature2();\r
            chickenClass.VertebrateFeature1();\r
            chickenClass.VertebrateFeature2();\r
            chickenClass.VertebrateFeature3();\r
\r
            //\u4E00\u6B21\u5168\u5370\r
            Console.WriteLine();\r
            Console.WriteLine("\u4E00\u6B21\u5217\u51FA\u6240\u6709\u7279\u5FB5");\r
            chickenClass.ShowALLChickenFeature();\r
            Console.ReadKey();\r
        }\r
    }\r
    //\u96DE\u985E\u75C5\u7E7C\u627F\u9CE5\u985E\r
    class Chicken : Birds\r
    {\r
        //\u7279\u5FB51:\u6703\u547C\u5438\r
        public void ChickenFeature1()\r
        {\r
            Console.WriteLine("\u6211\u6709\u6709\u96DE\u51A0");\r
        }\r
        //\u7279\u5FB52:\u6709\u810A\u690E\r
        public void ChickenFeature2()\r
        {\r
            Console.WriteLine("\u6211\u6703\u5495\u5495\u53EB");\r
        }\r
        //\u986F\u793A\u6240\u6709\u7279\u5FB5\r
        public void ShowALLChickenFeature()\r
        {\r
            //\u76F4\u63A5\u7528\u810A\u690E\u52D5\u7269\u985E\u7684\u5168\u90E8\u986F\u793A\u65B9\u6CD5\r
            ShowALLBirdsFeature();\r
            ChickenFeature1();\r
            ChickenFeature2();\r
        }\r
    }\r
\r
    //\u9CE5\u985E\uFF0C\u4E26\u4E14\u7E7C\u627F\u810A\u690E\u52D5\u7269\u985E\r
    class Birds : vertebrate\r
    {\r
        //\u7279\u5FB51:\u6703\u547C\u5438\r
        public void BirdsFeature1()\r
        {\r
            Console.WriteLine("\u6211\u6709\u7FC5\u8180");\r
        }\r
        //\u7279\u5FB52:\u6709\u810A\u690E\r
        public void BirdsFeature2()\r
        {\r
            Console.WriteLine("\u6211\u6703\u4E0B\u86CB");\r
        }\r
        //\u986F\u793A\u6240\u6709\u7279\u5FB5\r
        public void ShowALLBirdsFeature()\r
        {\r
            //\u76F4\u63A5\u7528\u810A\u690E\u52D5\u7269\u985E\u7684\u5168\u90E8\u986F\u793A\u65B9\u6CD5\r
            ShowALLVertebrateFeature();\r
            BirdsFeature1();\r
            BirdsFeature2();\r
        }\r
    }\r
    //\u810A\u690E\u52D5\u7269\u985E\r
    class vertebrate\r
    {\r
        //\u7279\u5FB51:\u6703\u547C\u5438\r
        public void VertebrateFeature1()\r
        {\r
            Console.WriteLine("\u6211\u6703\u547C\u5438");\r
        }\r
        //\u7279\u5FB52:\u6709\u810A\u690E\r
        public void VertebrateFeature2()\r
        {\r
            Console.WriteLine("\u6211\u6709\u810A\u690E");\r
        }\r
        //\u7279\u5FB53:\u6709\u9AD4\u6EAB\r
        public void VertebrateFeature3()\r
        {\r
            Console.WriteLine("\u6211\u6709\u9AD4\u6EAB");\r
        }\r
        //\u986F\u793A\u6240\u6709\u7279\u5FB5\r
        public void ShowALLVertebrateFeature()\r
        {\r
            VertebrateFeature1();\r
            VertebrateFeature2();\r
            VertebrateFeature3();\r
        }\r
    }\r
  }\r
  \`\`\`\r
  \r
  \u7D50\u679C:\r
  >\u5404\u5225\u986F\u793A\u7279\u5FB5\\\r
\u6211\u6709\u6709\u96DE\u51A0\\\r
\u6211\u6703\u5495\u5495\u53EB\\\r
\u6211\u6709\u7FC5\u8180\\\r
\u6211\u6703\u4E0B\u86CB\\\r
\u6211\u6703\u547C\u5438\\\r
\u6211\u6709\u810A\u690E\\\r
\u6211\u6709\u9AD4\u6EAB\\\r
>\\\r
\u4E00\u6B21\u5217\u51FA\u6240\u6709\u7279\u5FB5\\\r
\u6211\u6703\u547C\u5438\\\r
\u6211\u6709\u810A\u690E\\\r
\u6211\u6709\u9AD4\u6EAB\\\r
\u6211\u6709\u7FC5\u8180\\\r
\u6211\u6703\u4E0B\u86CB\\\r
\u6211\u6709\u6709\u96DE\u51A0\\\r
\u6211\u6703\u5495\u5495\u53EB\r
\r
### \u7E7C\u627F\u662F\u7269\u4EF6\u5C0E\u5411\u8A9E\u8A00\u7684\u8D85\u5F37\u529F\u80FD\uFF0C\u8981\u597D\u597D\u5229\u7528\u4ED6\uFF0C\u80FD\u66F4\u7CBE\u7C21\u7A0B\u5F0F\u78BC\uFF0C\u660E\u5929\u898B\u55BD`,we="\u{1F916}[Day28]C# \u96DE\u790E\u89C0\u5FF5- \u7269\u4EF6\u5C0E\u5411(oop)~ \u7E7C\u627F";function Le(){return u("Chicken Say Hi | \u{1F916} \u505A\u932F\u4E8B\u8A72\u600E\u9EBC\u8FA6\u5462?~\u932F\u8AA4\u8655\u7406"),t(s,{children:[n(o,{}),n(l,{backPath:r.IronMan13,title:we,text:Ae})]})}const Te=`\u66F8\u540C\u6587\uFF0C\u8ECA\u540C\u8ECC\uFF0C\\\r
\u807D\u8AAA\u53EC\u559A\u60E1\u9B54\u6642\uFF0C\u9700\u8981\u8207\u60E1\u9B54\u7C3D\u8A02\u5951\u7D04\uFF0C\\\r
\u5951\u7D04\u5167\u5BB9\u96D9\u65B9\u90FD\u5F97\u9075\u5B88\uFF0C\\\r
C#\u4E5F\u64C1\u6709\u8DDF\u985E\u5225\u7C3D\u8A02\u5951\u7D04\u7684\u529F\u80FD\r
\r
### \u4ECB\u9762(Interface)\r
* \u5728\u4ECB\u9762\u547D\u540D\u4E2D\u5927\u5BB6\u7FD2\u6163\u4EE5\`I\`\u958B\u982D\r
* \u5728\u4ECB\u9762\u4E2D\uFF0C\u6211\u5011\u8981\u53BB\u5B9A\u7FA9\u8207\u898F\u7BC4\u985E\u5225\u6210\u54E1\r
* \u4ECB\u9762\u4E2D\u4E0D\u6703\u53BB\u5BEB\u4EFB\u4F55\u5F97\u908F\u8F2F\r
* \u800C\u4E14\u4ECB\u9762\u7684\u6210\u54E1\u6C38\u9060\u90FD\u662F\u516C\u7528\u7684\uFF0C\u6240\u4EE5\u4E0D\u9700\u8981\u4E5F\u4E0D\u80FD\u52A0\u4E0A\`public\`\r
* \u5982\u679C\u9700\u8981\u7C3D\u5408\u7D04\u7684\u985E\u5225\u5C31\u5FC5\u9808\u7E7C\u627F\u4ECB\u9762\r
\r
\r
### \u7BC4\u4F8B:\u6BCF\u53F0ATM\u90FD\u9700\u8981\u7D71\u4E00\u4ED6\u5011\u7684\u65B9\u6CD5\uFF0C\u56E0\u6B64\u6211\u5011\u4F86\u5EFA\u7ACB\u4E00\u500BATM\u7684\u4ECB\u9762\u5427\r
\`\`\`csharp\r
 //ATM\u4ECB\u9762\r
    interface IATM\r
    {\r
        //\u65B9\u6CD5:\u5B58\u6B3E\r
        void PayIn(int amount);\r
        //\u65B9\u6CD5:\u6536\u6B3E\r
        bool GetMoney(int amount);\r
        //\u5C6C\u6027:\u5E33\u6236\u9918\u984D\r
        int Balance { get; }\r
    }\r
\`\`\`\r
   \r
   \`\u9019\u5C31\u662F\u4E00\u500B\u4ECB\u9762\u7684\u6A23\u5B50\u4ECB\u9762\u6700\u5927\u7684\u7528\u9014\u5C31\u662F\u8B93\u6240\u6709\u8207\u4ED6\u7C3D\u5408\u7D04\u7684\u985E\u5225\u4FDD\u6301\u65B9\u6CD5\u8207\u6210\u54E1\u4E00\u81F4\`\r
   \r
### \u7BC4\u4F8B:\u6211\u5011\u4F86\u5BE6\u4F5C\u4E00\u53F0\u96DE\u982D\u724CATM\uFF0C\u4E26\u8207\u4ECB\u9762\u7C3D\u5408\u7D04\u5427\r
\`\`\`csharp\r
    //\u96DE\u982D\u724CATM\r
    public class ChickenATM : IATM //\u9700\u8981\u7E7C\u627F\u4ECB\u9762\r
    {\r
        //\u79C1\u6709\u8B8A\u6578\r
        private int blance;\r
\r
        //\u7E7C\u627F\u5F8C\uFF0C\u5C31\u5FC5\u9808\u6709\u4ECB\u9762\u88E1\u9762\u5B9A\u7FA9\u7684\u65B9\u6CD5\r
        //\u65B9\u6CD5:\u5B58\u6B3E\r
        public void PayIn(int amount)\r
        {\r
            blance += amount;\r
        }\r
        //\u65B9\u6CD5:\u6536\u6B3E\r
        public bool GetMoney(int amount)\r
        {\r
            //\u5224\u65B7\u9918\u984D\u662F\u5426\u8DB3\u5920\r
            if (blance >= amount)\r
            {\r
                blance -= amount;\r
                return true;\r
            }\r
            else\r
            {\r
                Console.WriteLine("\u9918\u984D\u4E0D\u8DB3\uFF0C\u53D6\u6B3E\u5931\u6557!");\r
                return false;\r
            }\r
        }\r
\r
        //\u5C6C\u6027:\u5E33\u6236\u9918\u984D\r
        public int Balance\r
        {\r
            get\r
            {\r
                return blance;\r
            }\r
        }\r
    }\r
\`\`\`\r
  \r
### \u7BC4\u4F8B:\u65E2\u7136Atm\u90FD\u84CB\u597D\u4E86\uFF0C\u6211\u5011\u5C31\u4F86\u6E2C\u4E00\u4E0B\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
using System.Text;\r
using System.Threading.Tasks;\r
\r
namespace CsharpDemo\r
{\r
    class Program\r
    {\r
        ///\u6709\u5305\u542B\u4ECB\u9762\u7684\u5BA3\u544A\u65B9\u5F0F,\u524D\u9762\u53EF\u5148\u9078\u65B9\u5F0F\r
       public static IATM chickenAtm = new ChickenATM();\r
\r
        static void Main(string[] args)\r
        {\r
            //\u5148\u8B93\u5BA2\u4EBA\u9078\u64C7\u529F\u80FD\r
            Console.WriteLine();\r
            Console.WriteLine("\u8ACB\u9078\u64C7\u9700\u8981\u6A21\u5F0F");\r
            Console.WriteLine("\u5B58\u6B3E\u8ACB\u63091\uFF0C\u9818\u6B3E\u8ACB\u63092");\r
            string goFuncton = Console.ReadLine();\r
            \r
\r
            //\u5224\u65B7\u8981\u4F7F\u7528\u54EA\u500B\u65B9\u6CD5\r
            if (goFuncton == "1")//\u9818\u9322\r
            {\r
                Console.WriteLine("\u8ACB\u8F38\u5165\u8981\u5B58\u5165\u7684\u91D1\u984D!");\r
                int amount = Convert.ToInt32(Console.ReadLine());\r
                //\u4ED8\u6B3E\u65B9\u6CD5\r
                chickenAtm.PayIn(amount);\r
            }\r
            else if(goFuncton == "2")\r
            {\r
                Console.WriteLine("\u8ACB\u8F38\u5165\u8981\u9818\u53D6\u7684\u91D1\u984D!");\r
                int amount = Convert.ToInt32(Console.ReadLine());\r
                //\u4ED8\u6B3E\u65B9\u6CD5\r
                chickenAtm.GetMoney(amount);\r
            }\r
\r
            Console.WriteLine("\u76EE\u524D\u9918\u984D : " + chickenAtm.Balance);\r
\r
            //\u9019\u908A\u7528\u905E\u8FF4\u4F86\u8B93\u65B9\u6CD5\u53EF\u4EE5\u6301\u7E8C\u8F2A\u8FF4\r
            string[] array = new string[0];\r
            Main(array);\r
        }\r
    }\r
    //ATM\u4ECB\u9762\r
    interface IATM\r
    {\r
        //\u65B9\u6CD5:\u5B58\u6B3E\r
        void PayIn(int amount);\r
        //\u65B9\u6CD5:\u6536\u6B3E\r
        bool GetMoney(int amount);\r
        //\u5C6C\u6027:\u5E33\u6236\u9918\u984D\r
        int Balance { get; }\r
    }\r
    //\u96DE\u982D\u724CATM\r
    public class ChickenATM : IATM //\u9700\u8981\u7E7C\u627F\u4ECB\u9762\r
    {\r
        //\u79C1\u6709\u8B8A\u6578\r
        private int blance;\r
\r
        //\u7E7C\u627F\u5F8C\uFF0C\u5C31\u5FC5\u9808\u6709\u4ECB\u9762\u88E1\u9762\u5B9A\u7FA9\u7684\u65B9\u6CD5\r
        //\u65B9\u6CD5:\u5B58\u6B3E\r
        public void PayIn(int amount)\r
        {\r
            blance += amount;\r
        }\r
        //\u65B9\u6CD5:\u6536\u6B3E\r
        public bool GetMoney(int amount)\r
        {\r
            //\u5224\u65B7\u9918\u984D\u662F\u5426\u8DB3\u5920\r
            if (blance >= amount)\r
            {\r
                blance -= amount;\r
                return true;\r
            }\r
            else\r
            {\r
                Console.WriteLine("\u9918\u984D\u4E0D\u8DB3\uFF0C\u53D6\u6B3E\u5931\u6557!");\r
                return false;\r
            }\r
        }\r
\r
        //\u5C6C\u6027:\u5E33\u6236\u9918\u984D\r
        public int Balance\r
        {\r
            get\r
            {\r
                return blance;\r
            }\r
        }\r
    }\r
   }\r
   \`\`\`\r
   \r
### \u4F86\u73A9\u770B\u770B\u4EE5\u4E0B\u5287\u60C5\u6703\u7522\u751F\u7684\u7D50\u679C\u5427\r
1. \u5148\u981850\u5143\r
2. \u4ECA\u5929\u767C\u5DE5\u8CC7\u5566\uFF0C\u5171500\u5143\uFF0C\u628A\u9322\u90FD\u5B58\u9032\u53BB\u5427\r
3. \u5FD8\u8A18\u628A\u5403\u98EF\u9322\u9818\u51FA\u4F86\u4E86\uFF0C\u8D95\u5FEB\u9818100\u4F86\u5403\u98EF\r
\r
\u7D50\u679C:\r
>\r
>\u8ACB\u9078\u64C7\u9700\u8981\u6A21\u5F0F\\\r
\u5B58\u6B3E\u8ACB\u63091\uFF0C\u9818\u6B3E\u8ACB\u63092\\\r
2\\\r
\u8ACB\u8F38\u5165\u8981\u9818\u53D6\u7684\u91D1\u984D!\\\r
50\\\r
\u9918\u984D\u4E0D\u8DB3\uFF0C\u53D6\u6B3E\u5931\u6557!\\\r
\u76EE\u524D\u9918\u984D : 0\r
\r
>\u8ACB\u9078\u64C7\u9700\u8981\u6A21\u5F0F\\\r
\u5B58\u6B3E\u8ACB\u63091\uFF0C\u9818\u6B3E\u8ACB\u63092\\\r
1\\\r
\u8ACB\u8F38\u5165\u8981\u5B58\u5165\u7684\u91D1\u984D!\\\r
500\\\r
\u76EE\u524D\u9918\u984D : 500\r
\r
>\u8ACB\u9078\u64C7\u9700\u8981\u6A21\u5F0F\\\r
\u5B58\u6B3E\u8ACB\u63091\uFF0C\u9818\u6B3E\u8ACB\u63092\\\r
2\\\r
\u8ACB\u8F38\u5165\u8981\u9818\u53D6\u7684\u91D1\u984D!\\\r
100\\\r
\u76EE\u524D\u9918\u984D : 400\r
\r
>\u8ACB\u9078\u64C7\u9700\u8981\u6A21\u5F0F\\\r
\u5B58\u6B3E\u8ACB\u63091\uFF0C\u9818\u6B3E\u8ACB\u63092\r
\r
### \u4EE5\u4E0A\u5C31\u662F\u6211\u5011\u7684\u4ECB\u9762\uFF0C\u4ED6\u4E3B\u8981\u7528\u9014\u662F\u5728\u7D71\u4E00\u5929\u4E0B\u7684\uFF0C\u6211\u5011\u660E\u5929\u518D\u898B\u4E86\u9D28`,ke="\u{1F916}[Day29]C# \u96DE\u790E\u89C0\u5FF5- \u7269\u4EF6\u5C0E\u5411(oop)~\u4ECB\u9762(Interface)";function Be(){return u("Chicken Say Hi | \u{1F916} \u7269\u4EF6\u5C0E\u5411(oop)~\u4ECB\u9762(Interface)"),t(s,{children:[n(o,{}),n(l,{backPath:r.IronMan13,title:ke,text:Te})]})}const We=`![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/20097001lFLnXlnoY5.png)\r
\r
\u4ECA\u5929\u662F\u9435\u4EBA\u8CFD\u6700\u5F8C\u4E00\u5929\uFF0C\\\r
\u6211\u5011\u4F86\u9EDE\u4E0D\u4E00\u6A23\u7684\uFF0C\\\r
\u5C31\u662FTailwind Css\u5566\r
\r
### \u4E00.\u5148\u524D\u6E96\u5099\r
* \u5EFA\u7ACB\u65B0\u8CC7\u6599\u593E\r
* \u5C07\u8CC7\u6599\u593E\u547D\u540D\u70BAjit_init\r
\r
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/20097001JrGFEfSvst.png)\r
\r
* \u958B\u555F\u8CC7\u6599\u593E\u4F4D\u7F6E\r
\r
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/20097001r3Xktr4LA5.png)\r
\r
* \u65BC\u8DEF\u5F91\u8F38\u5165CMD\uFF0C\u4E26\u6309\u4E0BEnter\r
\r
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/2009700104BcIsTBVZ.png)\r
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/20097001XsVYxPv2oh.png)\r
\r
### \u4E8C.\u5C0E\u5165tailwindcss\r
* \u65BC\u4E3B\u63A7\u53F0\u8F38\u5165 \`npx tailwindcss-cli init  --jit\`\r
* \u6210\u529F\u4E4B\u5F8C\u6703\u5728jit_init\u8CC7\u6599\u593E\u770B\u5230tailwind.config.js\u6A94\u6848\r
\r
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/20097001zSFbq0QFnZ.png)\r
\r
* \u5C07\u9644\u6A94package.json\u8907\u88FD\u5230jit_init\u8CC7\u6599\u593E\r
* \u8F38\u5165npm install tailwindcss autoprefixer postcss postcss-cli\r
* \u6210\u529F\u4E4B\u5F8C\u6703\u5728jit_init\u8CC7\u6599\u593E\u770B\u5230node_modules\u76EE\u9304\u4EE5\u53CApackage-lock.json\u6A94\u6848\r
* [package.json (\u9EDE\u6211\u4E0B\u8F09)](https://drive.google.com/file/d/11oIvQ_kwFEmAh6a5j2fphomlnFCexQQM/view)\r
\r
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/20097001MPLJKiuB44.png)\r
\r
* \u5C07\u9644\u6A94public.zip\u89E3\u58D3\u7E2E\u4E26\u8907\u88FD\u5230jit_init\u8CC7\u6599\u593E\r
[public.zip (\u9EDE\u6211\u4E0B\u8F09)](https://drive.google.com/file/d/1xuWGX7GPtmgpxQoAqTe8P89h1i6OHcWC/view)\r
\r
* \u958B\u555Fpackage.json\u4FEE\u6539css\u8F38\u51FA\u8DEF\u5F91\r
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/20097001LHLvJCIQQS.png)\r
\r
* \u958B\u555Ftailwind.config.js\u4FEE\u6539purge(tailwindcss\u4F5C\u7528\u7BC4\u570D)\r
* MVC\u70BA\u4F8B('../Views/**/*.cshtml')\r
\r
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/20097001UnxZwZL42u.png)\r
\r
### \u4E09.\u555F\u52D5tailwindcss-cli\r
* \u65BC\u4E3B\u63A7\u53F0\u8F38\u5165\`npm install\`\r
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/20097001SgxAYmyaXy.png)\r
\r
* \u65BC\u4E3B\u63A7\u53F0\u8F38\u5165\`npm run jit\`\r
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/20097001UbwmaSsmwc.png)\r
\r
### \u56DB.MVC\u5C08\u6848\u8A2D\u5B9A\r
* \u5C07app.css\u5F15\u7528\u5230_Layout.cshtml\r
* \`<link href="~/Content/app.css" rel="stylesheet">\`\r
\r
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/20097001HauTkJGUnc.png)\r
\r
* \u65BC\u65B9\u6848\u7E3D\u7BA1\u9EDE\u9078\u986F\u793A\u6240\u6709\u6A94\u6848\r
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/20097001qtVFJpUf9f.png)\r
\r
* \u5C07app.css\u52A0\u5165\u5C08\u6848\r
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/200970014FtnA0pZSm.png)\r
\r
### \u6CE8\u610F:\u6BCF\u6B21\u91CD\u65B0\u958B\u555F\u5C08\u6848\u6642\uFF0C\u7686\u9700\u57F7\u884Cnpm run jit \u6307\u4EE4\r
* \u9019\u6A23\u7DE8\u8F2FCSS\u6642\uFF0C\u624D\u6709\u8FA6\u6CD5\u505A\u66F4\u65B0\r
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/20097001umMArZ9DoB.png)\r
\r
### \u6700\u5F8C\u6700\u5F8C\uFF0C\u6211\u5011\u8B1D\u8B1D\u5154\u5154\u7576\u6642\u82B1\u5F88\u591A\u6642\u9593\u5728\u5E6B\u6211\u6821\u9019\u4EFD\u7A3F\r
### \u5982\u679C\u5927\u5BB6\u5C0DTailwind Css\u4E0D\u719F\uFF0C\u4F46\u5F88\u60F3\u5165\u9580\uFF0C\u6B61\u8FCE\u53BB\u770B\u4ED6\u7684\u6587\u7AE0\r
### [\u5154\u5154\u50B3\u9001\u9580 (\u9EDE\u6211\u4F86\u53BB\u627E\u5154\u5154)](https://ithelp.ithome.com.tw/users/20138853/ironman/3928)`,Ie="\u{1F916}[Day30]C# \u4E0D\u96DE\u790E\u89C0\u5FF5- Install Tailwind Css with ASP.NET MVC5";function Me(){return u("Chicken Say Hi | \u{1F916} Install Tailwind Css with ASP.NET MVC5"),t(s,{children:[n(o,{}),n(l,{backPath:r.IronMan13,title:Ie,text:We})]})}const Re=`### \u70BA\u4EC0\u9EBC\u6703\u60F3\u5831\u540D\u9D28?\r
\u9019\u662F\u7B2C\u4E00\u6B21\u53C3\u52A0\u9435\u4EBA\u8CFD\uFF0C\\\r
\u6703\u53C3\u52A0\u7684\u539F\u56E0\u90FD\u662F\u4E00\u6642\u885D\u52D5\uFF0C\u771F\u7684\u662F\u4E00\u6642\u885D\u52D5\uFF0C\u5C31\u5831\u540D\u4E0B\u53BB\u4E86\uFF0C\\\r
\u5F8C\u4F86\u60F3\u8AAA\u96A8\u4FBF\u5BEB\u500B\u50CF\u662F\u7B46\u8A18\u7684\u6771\u897F\u89E3\u9396\u500B\u6210\u5C31\uFF0C\\\r
\u60F3\u4E0D\u5230\u8D8A\u4F86\u8D8A\u591A\u4EBA\u8FFD\u8E64\uFF0C\u96A8\u4FBF\u5BEB\u7B46\u8A18\u771F\u7684\u8DDF\u81EA\u5DF1\u7684\u96DE\u5FC3\u904E\u610F\u4E0D\u53BB\uFF0C\\\r
\u958B\u59CB\u7FFB\u904D\u5FAE\u8EDF\u7684\u5B98\u7DB2\u3001\u81EA\u5DF1\u6700\u521D\u5B78\u7FD2\u7684\u7B46\u8A18\u8207\u7576\u521D\u6211\u7684\u555F\u8499\u4E4B\u66F8(\u300A\u53E9\u54CDC#\u4E4B\u95E8\u300B~ \u6881\u658C\u7389)\uFF0C\\\r
\u5728\u901930\u5929\u5167\u6211\u767C\u73FE\u6211\u89C0\u5FF5\u5F88\u591A\u90FD\u4E0D\u592A\u8DB3\u5920\uFF0C\u908A\u5BEB\u908A\u5B78\uFF0C\u6703\u767C\u73FE\u554A!\u539F\u4F86\u9019\u6771\u897F\u662F\u9019\u9EBC\u56DE\u4E8B\u554A!\r
\r
### \u4E00\u96BB\u5E73\u51E1\u7121\u5947\u7684\u96DE\u7684\u6C42\u5B78\u6B77\u7A0B\r
\u6211\u4E26\u4E0D\u662F\u672C\u79D1\u7CFB\u7684\uFF0C\u7576\u5E74\u610F\u5916\u5730\u5728\u7DB2\u8DEF\u4E0A\u7FFB\u5230\u9019\u672C\u300A\u53E9\u54CDC#\u4E4B\u95E8\u300B\u958B\u59CB\u4E86\u6211\u7684C#\u4E4B\u8DEF\uFF0C\\\r
\u6240\u6709\u6240\u6709\u7684\u4E00\u5207\u90FD\u662F\u5F9E\u9019\u672C\u66F8\u958B\u59CB\u7684\uFF0C\u96D6\u7136\u662F20\u5E74\u524D\u7684\u66F8\u4E86\uFF0C\\\r
\u4F46\u57FA\u672C\u7684\u89C0\u5FF5\u9084\u662F\u8207\u73FE\u4ECA\u6C92\u751A\u9EBC\u843D\u5DEE\uFF0C\\\r
\u5728\u6211\u628A\u7A0B\u5F0F\u78BC\u6572\u9032\u96FB\u8166\u6642\uFF0C\u767C\u73FE\u7A0B\u5F0F\u7ADF\u7136\u8DD1\u5F97\u8D77\u4F86\uFF0C\u7576\u4E0B\u662F\u5982\u6B64\u7684\u611F\u52D5\uFF0C\\\r
\u6F38\u6F38\u7684\u8D8A\u5BEB\u8D8A\u6709\u6210\u5C31\u611F\uFF0C\u5C31\u9019\u6A23\u6211\u771F\u7684\u958B\u8D77C#\u4E4B\u9580\u4E86\u3002\r
\r
### \u5077\u5077\u5E6B\u5404\u4F4D\u534A\u9014\u9047\u5230\u7684\u597D\u53CB\u63A8\u92B7\u6587\u7AE0\uFF0C\u5927\u5BB6\u6709\u8208\u8DA3\u53EF\u4EE5\u53BB\u770B\u770B\u54E6\r
#### \u540C\u70BAC#\u7684-\u5C0F\u4E73\u725B\r
[[\u5F9E0\u52301] C#\u5C0F\u4E73\u725B](https://ithelp.ithome.com.tw/users/20137657/articles)\r
#### \u5154\u5154\u6559\u5F97\u4EE3\u8868\u4EBA\u7269-\u5154\u5154\r
[\u6392\u7248\u795E\u5668 Tailwind CSS ](https://ithelp.ithome.com.tw/users/20138853/ironman/3928)\r
#### \u865F\u7A31\u662F\u8DEF\u4EBA\u7684 -\u6DF1\u6C34\u5C0F\u9B5A\r
[\u7576\u62C9\u62C9\u8089\u9047\u5230\u55AE\u5143\u6E2C\u8A66](https://ithelp.ithome.com.tw/users/20105694/ironman/3989)\r
#### Kotlin\u5927\u5E2B-ReccaChao\r
[\u8AC7\u8AC7 Kotlin Exposed \u6846\u67B6](https://ithelp.ithome.com.tw/users/20120550/ironman/4158)\r
#### \u591A\u624D\u591A\u85DD\u7684\u52A9\u6559 -Ray\r
[\u5F9E JavaScript \u89D2\u5EA6\u5B78 Python ](https://ithelp.ithome.com.tw/users/20119486/ironman/3917)\r
#### \u7F8E\u98DF\u5C08\u5BB6 -\u96EA\u502B\r
[\u96EA\u502B\u768430\u5929\u62DC\u8A17\u51B0\u7BB1](https://ithelp.ithome.com.tw/users/20140547/ironman/4622)\r
\r
### \u9019\u6B21\u9435\u4EBA\u8CFD\u7684\u6545\u4E8B\u5C31\u5230\u9019\u908A\u544A\u4E00\u6BB5\u843D\u4E86\uFF0C\u6211\u5011\u6709\u7DE3\u4E0B\u6B21\u898B`,Ge="\u{1F916}[Day31]C# \u96DE\u790E\u89C0\u5FF5- \u7D50\u8A9E";function Ne(){return u("Chicken Say Hi | \u{1F916} \u7D50\u8A9E"),t(s,{children:[n(o,{}),n(l,{backPath:r.IronMan13,title:Ge,text:Re})]})}function je(){return u("Chicken Say Hi | About"),t(s,{children:[n(o,{}),t("section",{className:"relative pt-16 bg-blueGray-50 max-h-full overflow-auto ",children:[n("div",{className:"container mx-auto",children:t("div",{className:"flex flex-wrap items-center",children:[n("div",{className:"w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78",children:t("div",{className:"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg dark:bg-amber-200  bg-amber-500",children:[n(T.exports.LazyLoadImage,{alt:"...",src:G,className:"w-full align-middle rounded-md max-h-62 p-5",effect:"blur"}),t("blockquote",{className:"relative p-8 mb-4",children:[n("h4",{className:"text-xl font-bold text-white dark:text-gray-700 mb-6",children:"\u5B64\u7368\u4E00\u96BB\u96DE"}),n("p",{className:"text-xl font-bold text-white dark:text-gray-700 mb-6",children:"I'm a backend developer."}),t("p",{className:"text-md font-light mt-2 text-gray-100 dark:text-gray-800",children:["\u6211\u5C31\u662F\u4E00\u96BB\u5E73\u51E1\u7121\u5947\u7684\u96DE\uFF0C\u6BCF\u5929\u904E\u8457\u5E73\u51E1\u7121\u5947\u7684\u751F\u6D3B",n("br",{}),n("a",{href:"mailto:lonelyyeezhichicken@gmail.com",children:"e-mail: lonelyyeezhichicken@gmail.com"})]})]})]})}),n("div",{className:"w-full md:w-6/12 px-4 dark:text-gray-300 text-gray-600",children:t("div",{className:"flex flex-wrap",children:[t("div",{className:"w-full md:w-6/12 px-4",children:[n("div",{className:"relative flex flex-col mt-4",children:t("div",{className:"px-4 py-5 flex-auto",children:[n("div",{className:"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full  bg-pink-300 text-4xl text-gray-800",children:"\u{1F5BC}"}),n("h6",{className:"text-xl mb-1 font-semibold ",children:"Front-end"}),t("ul",{className:"mb-4 text-blueGray-500 list-decimal list-inside",children:[n("li",{children:"Vue JS"}),n("li",{children:"Vanilla JS"}),n("li",{children:"TypeScript"}),n("li",{children:"React JS"}),n("li",{children:"Knockout JS"}),n("li",{children:"Tailwind Css"})]})]})}),n("div",{className:"relative flex flex-col min-w-0",children:t("div",{className:"px-4 py-5 flex-auto",children:[n("div",{className:"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-cyan-300 text-4xl text-gray-800",children:"\u{1F6E0}"}),n("h6",{className:"text-xl mb-1 font-semibold",children:"Framework"}),t("ul",{className:"mb-4 text-blueGray-500 list-decimal list-inside",children:[n("li",{children:"Asp.net5"}),n("li",{children:".NET 6"}),n("li",{children:"Spring Boot"}),n("li",{children:"Flask"}),n("li",{children:"Phaser 3"}),n("li",{children:"Laravel"})]})]})})]}),t("div",{className:"w-full md:w-6/12 px-4",children:[n("div",{className:"relative flex flex-col min-w-0 mt-4",children:t("div",{className:"px-4 py-5 flex-auto",children:[n("div",{className:"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-purple-300 text-2xl text-gray-800",children:"\u{1F527}"}),n("h6",{className:"text-xl mb-1 font-semibold",children:"Back-end"}),t("ul",{className:"mb-4 text-blueGray-500 list-decimal list-inside",children:[n("li",{children:"C#"}),n("li",{children:"Java"}),n("li",{children:"Python"}),n("li",{children:"PHP"}),n("li",{children:"MATLAB"}),n("li",{children:"..."})]})]})}),n("div",{className:"relative flex flex-col min-w-0",children:t("div",{className:"px-4 py-5 flex-auto",children:[n("div",{className:"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gray-300 text-2xl text-gray-800",children:"\u{1F4D7}"}),n("h6",{className:"text-xl mb-1 font-semibold",children:"DB & Others"}),t("ul",{className:"mb-4 text-blueGray-500 list-decimal list-inside",children:[n("li",{children:"MSSQL"}),n("li",{children:"MySQL"}),n("li",{children:"Oracle"}),n("li",{children:"Docker"}),n("li",{children:"Message Queue"}),n("li",{children:"PLC"})]})]})})]})]})})]})}),n(A,{})]})]})}const $e=[{id:1,text:"[\u4E00.] \u59D4\u6D3E (Delegate) - \u99AC\u6232\u5718",goPath:r.CsDelegate1},{id:2,text:"[\u4E8C.] \u59D4\u6D3E (Delegate) - \u99AC\u6232\u5718(\u591A\u96BB\u52D5\u7269\u7248)",goPath:r.CsDelegate2},{id:3,text:"[\u4E09.] \u59D4\u6D3E (Delegate(\u591A\u9EDE\u50B3\u9001\u59D4\u6D3E) - \u99AC\u6232\u5718(\u591A\u96BB\u52D5\u7269\u7248)",goPath:r.CsDelegate3},{id:4,text:"[\u56DB.] \u59D4\u6D3E (Delegate)(Action \u59D4\u6D3E) - \u99AC\u6232\u5718",goPath:r.CsDelegate4},{id:5,text:"[\u4E94.] \u59D4\u6D3E (Delegate)(Action \u59D4\u6D3E(\u50B3\u53C3\u6578)) - \u99AC\u6232\u5718",goPath:r.CsDelegate5},{id:6,text:"[\u516D.] \u59D4\u6D3E (Delegate)(Func \u59D4\u6D3E) - \u99AC\u6232\u5718",goPath:r.CsDelegate6},{id:7,text:"[\u4E03.] \u59D4\u6D3E (Delegate)(Func \u59D4\u6D3E(\u50B3\u53C3\u6578)) - \u99AC\u6232\u5718",goPath:r.CsDelegate7}];function Oe(){return u("Chicken Say Hi | \u9435\u4EBA 13"),t(s,{children:[n(o,{}),n(y,{list:$e})]})}const He=`## \u59D4\u6D3E\u7DF4\u7FD21\r
- [\u7A0B\u5F0F\u78BC](https://github.com/LINDuke-Lin/csharp-Exercise/blob/main/csharpExercise/DelegateExercise/delegateExercise1.cs)\r
\r
1. \u5B9A\u7FA9\u8981\u4F7F\u7528\u7684\u59D4\u6D3E\r
- \u4F7F\u7528\`delegate\`\u95DC\u9375\u5B57\r
- \u5B9A\u7FA9\u50B3\u5165\u53C3\u6578\`string name\`\r
\r
\`\`\`csharp\r
    /// <summary>\r
    /// \u5B9A\u7FA9\u59D4\u6D3E\r
    /// </summary>\r
    /// <param name="name">\u59D3\u540D</param>\r
    private delegate void Animal(string name);\r
\`\`\`\r
\r
2. \u5B9A\u7FA9\u8981\u63A5\u6536\u59D4\u6D3E\u7684\u51FD\u5F0F\r
- \u5B9A\u7FA9\u99AC\u6232\u5718\u8868\u6F14\u7684\u51FD\u5F0F\r
- \u50B3\u5165\u59D4\u6D3E\u8207\u52D5\u7269\u59D3\u540D\r
- \u5728\u51FD\u5F0F\u88E1\u5BE6\u73FE\u59D4\u6D3E\`animal(name);\`\r
\`\`\`csharp\r
    /// <summary>\r
    /// \u5B9A\u7FA9\u51FD\u5F0F\r
    /// </summary>\r
    /// <param name="animal">\u52D5\u7269\u7684\u59D4\u6D3E</param>\r
    /// <param name="name">\u52D5\u7269\u540D\u5B57</param>\r
    private static void RunCircus(Animal animal, string name)\r
    {\r
        animal(name);\r
    }\r
\`\`\`\r
\r
3. \u5B9A\u7FA9\u5C0F\u72D7\u51FD\u5F0F\r
\`\`\`csharp\r
    /// <summary>\r
    /// \u5C0F\u72D7\u51FD\u5F0F\r
    /// </summary>\r
    /// <param name="name">\u59D3\u540D</param>\r
    private static void Dog(string name)\r
    {\r
        Console.WriteLine($"\u6C6A\u6C6A! \u6211\u662F{name}");\r
    }\r
\`\`\`\r
\r
4. \u5728\u4E3B\u7A0B\u5F0F\u5BE6\u4F8B\u5316\u52D5\u7269\u59D4\u6D3E\r
- \u5C07\u5C0F\u72D7\u4F5C\u70BA\u51FD\u5F0F\u5E36\u5165\r
\`\`\`csharp\r
   Animal deleDog = new Animal(Dog);\r
\`\`\`\r
\r
5. \u5C07\u547C\u53EB\u99AC\u6232\u5718\u51FD\u5F0F\r
- \u5C07\u52D5\u7269\u59D4\u6D3E\u50B3\u5165\r
\`\`\`csharp\r
  RunCircus(deleDog, "\u5C0F\u72D7");\r
\`\`\`\r
\r
---\r
\r
\r
## \u5B8C\u6574\u7A0B\u5F0F\u78BC\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Text;\r
\r
namespace CSharpExercise.EventDemo\r
{\r
    public class DelegateExercise1\r
    {\r
        /// <summary>\r
        /// \u4E3B\u7A0B\u5F0F\r
        /// </summary>\r
        public void Main()\r
        {\r
            Animal deleDog = new Animal(Dog);\r
\r
            RunCircus(deleDog, "\u5C0F\u72D7");\r
\r
        }\r
\r
        /// <summary>\r
        /// \u5B9A\u7FA9\u59D4\u6D3E\r
        /// </summary>\r
        /// <param name="name">\u59D3\u540D</param>\r
        private delegate void Animal(string name);\r
\r
        /// <summary>\r
        /// \u5B9A\u7FA9\u51FD\u5F0F\r
        /// </summary>\r
        /// <param name="animal">\u52D5\u7269\u7684\u59D4\u6D3E</param>\r
        /// <param name="name">\u52D5\u7269\u540D\u5B57</param>\r
        private static void RunCircus(Animal animal, string name)\r
        {\r
            animal(name);\r
        }\r
\r
        /// <summary>\r
        /// \u5C0F\u72D7\u51FD\u5F0F\r
        /// </summary>\r
        /// <param name="name">\u59D3\u540D</param>\r
        private static void Dog(string name)\r
        {\r
            Console.WriteLine($"\u6C6A\u6C6A! \u6211\u662F{name}");\r
        }\r
\r
\r
    }\r
}\r
\`\`\``,qe="\u{1F4EA} [\u4E00.] \u59D4\u6D3E (Delegate) - \u99AC\u6232\u5718";function Ke(){return u("Chicken Say Hi | \u{1F4EA} [\u4E00.] \u59D4\u6D3E (Delegate)"),t(s,{children:[n(o,{}),n(l,{backPath:r.CsharpEventHome,title:qe,text:He})]})}const Ve=`\r
1. \u65B0\u589E\u5404\u7A2E\u52D5\u7269\r
\`\`\`csharp\r
  \r
	/// <summary>\r
	/// \u8C93\r
	/// </summary>\r
	public static void Cat()\r
	{\r
		Console.WriteLine($"\u55B5\u55B5!");\r
	}\r
	\r
	/// <summary>\r
	/// \u9D28\r
	/// </summary>\r
	public static void Duck()\r
	{\r
		Console.WriteLine($"\u5471\u5471!");\r
	}\r
	\r
	/// <summary>\r
	/// \u96DE\r
	/// </summary>\r
	public static void Chicken()\r
	{\r
		Console.WriteLine($"\u5495\u5495!");\r
	}\r
\`\`\`\r
\r
2. \u53D6\u6D88\u6389\u59D4\u6D3E\u50B3\u5165\u7684\u540D\u5B57\r
\`\`\`csharp\r
    /// <summary>\r
    /// \u5B9A\u7FA9\u59D4\u6D3E\r
    /// </summary>\r
    /// <param name="name">\u59D3\u540D</param>\r
    private delegate void Animal();\r
\r
    /// <summary>\r
    /// \u5B9A\u7FA9\u51FD\u5F0F\r
    /// </summary>\r
    /// <param name="animal">\u52D5\u7269\u7684\u59D4\u6D3E</param>\r
    /// <param name="name">\u52D5\u7269\u540D\u5B57</param>\r
    private static void RunCircus(Animal animal)\r
    {\r
        animal();\r
    }\r
\`\`\`\r
\r
3. \u4F7F\u7528\u8FF4\u5708\u5EFA\u7ACB\u52D5\u7269List\r
\`\`\`csharp\r
   List<Animal> deleAnimal = new List<Animal>()\r
    {\r
        new Animal(Dog),\r
        new Animal(Cat),\r
        new Animal(Duck),\r
        new Animal(Chicken)\r
    };\r
\`\`\`\r
\r
4. \u4F7F\u7528\`foreach\`\u57F7\u884C\u99AC\u6232\u5718\r
\`\`\`csharp\r
	foreach(var animalFunc in deleAnimal)\r
	{\r
		RunCircus(animalFunc);\r
	}\r
\`\`\`\r
\r
---\r
\r
## \u5B8C\u6574\u7A0B\u5F0F\u78BC\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
\r
namespace csharpExercise.DelegateExercise\r
{\r
    public class DelegateExercise2\r
    {\r
        /// <summary>\r
        /// \u4E3B\u7A0B\u5F0F\r
        /// </summary>\r
        public void Main()\r
        {\r
            List<Animal> deleAnimal = new List<Animal>()\r
            {\r
                new Animal(Dog),\r
                new Animal(Cat),\r
                new Animal(Duck),\r
                new Animal(Chicken)\r
            };\r
\r
\r
            foreach(var animalFunc in deleAnimal)\r
            {\r
                RunCircus(animalFunc);\r
            }\r
        }\r
\r
\r
        /// <summary>\r
        /// \u5B9A\u7FA9\u59D4\u6D3E\r
        /// </summary>\r
        private delegate void Animal();\r
\r
        /// <summary>\r
        /// \u5B9A\u7FA9\u51FD\u5F0F\r
        /// </summary>\r
        /// <param name="animal">\u52D5\u7269\u7684\u59D4\u6D3E</param>\r
        private static void RunCircus(Animal animal)\r
        {\r
            animal();\r
        }\r
\r
        /// <summary>\r
        /// \u5C0F\u72D7\u51FD\u5F0F\r
        /// </summary>\r
        private static void Dog()\r
        {\r
            Console.WriteLine($"\u6C6A\u6C6A!");\r
        }\r
\r
        /// <summary>\r
        /// \u8C93\r
        /// </summary>\r
        public static void Cat()\r
        {\r
            Console.WriteLine($"\u55B5\u55B5!");\r
        }\r
\r
        /// <summary>\r
        /// \u9D28\r
        /// </summary>\r
        public static void Duck()\r
        {\r
            Console.WriteLine($"\u5471\u5471!");\r
        }\r
\r
        /// <summary>\r
        /// \u96DE\r
        /// </summary>\r
        public static void Chicken()\r
        {\r
            Console.WriteLine($"\u5495\u5495!");\r
        }\r
    }\r
}\r
\r
\`\`\`\r
`,Ue="\u{1F4EA} [\u4E8C.] \u59D4\u6D3E (Delegate) - \u99AC\u6232\u5718(\u591A\u96BB\u52D5\u7269\u7248)";function _e(){return u("Chicken Say Hi | \u{1F4EA} [\u4E8C.] \u59D4\u6D3E (Delegate)"),t(s,{children:[n(o,{}),n(l,{backPath:r.CsharpEventHome,title:Ue,text:Ve})]})}const ze=`### \u591A\u9EDE\u50B3\u9001\u59D4\u6D3E(MulticastDelegate)\r
\r
1. \u4F7F\u7528\`+=\`\u9032\u884C\u8A3B\u518A\r
\`\`\`csharp\r
	Animal deleAnimal = new Animal(Dog);\r
\r
    deleAnimal += new Animal(Cat);\r
    deleAnimal += new Animal(Duck);\r
    deleAnimal += new Animal(Chicken);\r
\`\`\`\r
\r
---\r
\r
## \u5B8C\u6574\u7A0B\u5F0F\u78BC\r
\`\`\`csharp\r
using System;\r
\r
namespace csharpExercise.DelegateExercise\r
{\r
    public class DelegateExercise3\r
    {\r
\r
        /// <summary>\r
        /// \u4E3B\u7A0B\u5F0F\r
        /// </summary>\r
        public void Main()\r
        {\r
            Animal deleAnimal = new Animal(Dog);\r
\r
            deleAnimal += new Animal(Cat);\r
            deleAnimal += new Animal(Duck);\r
            deleAnimal += new Animal(Chicken);\r
\r
\r
            RunCircus(deleAnimal);\r
        }\r
\r
\r
        /// <summary>\r
        /// \u5B9A\u7FA9\u59D4\u6D3E\r
        /// </summary>\r
        private delegate void Animal();\r
\r
        /// <summary>\r
        /// \u5B9A\u7FA9\u51FD\u5F0F\r
        /// </summary>\r
        /// <param name="animal">\u52D5\u7269\u7684\u59D4\u6D3E</param>\r
        private static void RunCircus(Animal animal)\r
        {\r
            animal();\r
        }\r
\r
        /// <summary>\r
        /// \u5C0F\u72D7\u51FD\u5F0F\r
        /// </summary>\r
        private static void Dog()\r
        {\r
            Console.WriteLine($"\u6C6A\u6C6A!");\r
        }\r
\r
        /// <summary>\r
        /// \u8C93\r
        /// </summary>\r
        public static void Cat()\r
        {\r
            Console.WriteLine($"\u55B5\u55B5!");\r
        }\r
\r
        /// <summary>\r
        /// \u9D28\r
        /// </summary>\r
        public static void Duck()\r
        {\r
            Console.WriteLine($"\u5471\u5471!");\r
        }\r
\r
        /// <summary>\r
        /// \u96DE\r
        /// </summary>\r
        public static void Chicken()\r
        {\r
            Console.WriteLine($"\u5495\u5495!");\r
        }\r
    }\r
}\r
\`\`\``,Je="\u{1F4EA} [\u4E09.] \u59D4\u6D3E (Delegate)(\u591A\u9EDE\u50B3\u9001\u59D4\u6D3E) - \u99AC\u6232\u5718(\u591A\u96BB\u52D5\u7269\u7248)";function Xe(){return u("Chicken Say Hi | \u{1F4EA} [\u4E09.] \u59D4\u6D3E (Delegate)"),t(s,{children:[n(o,{}),n(l,{backPath:r.CsharpEventHome,title:Je,text:ze})]})}const Ye=`### Acton \u6CDB\u578B\u59D4\u6D3E\r
\r
1. \u5B9A\u7FA9\u51FD\u5F0F\r
- \u50B3\u5165\u503C\u8A2D\u5B9A\u70BA Action\r
- Action -> \u53EF\u4EE5\u76F4\u63A5\u50B3\u5165\u51FD\u5F0F\r
\`\`\`csharp\r
	/// <summary>\r
    /// \u5B9A\u7FA9\u51FD\u5F0F\r
    /// </summary>\r
    /// <param name="animal">\u52D5\u7269\u7684\u59D4\u6D3E</param>\r
    private static void RunCircus(Action animal)\r
    {\r
        animal();\r
    }\r
\`\`\`\r
\r
2. \u547C\u53EB\u99AC\u6232\u5718\r
- \u76F4\u63A5\u50B3\u5165\u72D7\u51FD\u5F0F\r
- \u7121\u9808\u505A\u4EFB\u4F55\u5BE6\u4F8B\u5316\r
\`\`\`csharp\r
 RunCircus(Dog);\r
\`\`\`\r
\r
\r
---\r
\r
## \u5B8C\u6574\u7A0B\u5F0F\u78BC\r
\`\`\`csharp\r
using System;\r
\r
namespace csharpExercise.DelegateExercise\r
{\r
    public class DelegateExercise4\r
    {\r
        /// <summary>\r
        /// \u4E3B\u7A0B\u5F0F\r
        /// </summary>\r
        public void Main()\r
        {\r
            RunCircus(Dog);\r
        }\r
\r
\r
        /// <summary>\r
        /// \u5B9A\u7FA9\u51FD\u5F0F\r
        /// </summary>\r
        /// <param name="animal">\u52D5\u7269\u7684\u59D4\u6D3E</param>\r
        private static void RunCircus(Action animal)\r
        {\r
            animal();\r
        }\r
\r
        /// <summary>\r
        /// \u5C0F\u72D7\u51FD\u5F0F\r
        /// </summary>\r
        private static void Dog()\r
        {\r
            Console.WriteLine($"\u6C6A\u6C6A!");\r
        }\r
    }\r
}\r
\`\`\``,Qe="\u{1F4EA} [\u56DB.] \u59D4\u6D3E (Delegate)(Action \u59D4\u6D3E) - \u99AC\u6232\u5718";function Ze(){return u("Chicken Say Hi | \u{1F4EA} [\u56DB.] \u59D4\u6D3E (Delegate)"),t(s,{children:[n(o,{}),n(l,{backPath:r.CsharpEventHome,title:Qe,text:Ye})]})}const nt=`### Acton \u6CDB\u578B\u59D4\u6D3E - \u50B3\u53C3\u6578\r
- [\u7A0B\u5F0F\u78BC](https://github.com/LINDuke-Lin/csharp-Exercise/blob/main/csharpExercise/DelegateExercise/DelegateExercise5.cs)\r
\r
1. \u5B9A\u7FA9\u51FD\u5F0F\r
- \u50B3\u5165\u503C\u8A2D\u5B9A\u70BA Action<string>\r
- <T> \u4E4B\u4E2D\u5E36\u5165\u8981\u50B3\u905E\u7684\u8B8A\u6578\u578B\u5225\r
- Action -> \u53EF\u4EE5\u76F4\u63A5\u50B3\u5165\u51FD\u5F0F\r
\`\`\`csharp\r
    /// <summary>\r
    /// \u5B9A\u7FA9\u51FD\u5F0F\r
    /// </summary>\r
    /// <param name="animal">\u52D5\u7269\u7684\u59D4\u6D3E</param>\r
    private static void RunCircus(Action<string> animal, string name)\r
    {\r
        animal(name);\r
    }\r
\`\`\`\r
\r
2. \u547C\u53EB\u99AC\u6232\u5718\r
- \u76F4\u63A5\u50B3\u5165\u72D7\u51FD\u5F0F\r
- \u7121\u9808\u505A\u4EFB\u4F55\u5BE6\u4F8B\u5316\r
\`\`\`csharp\r
 RunCircus(Dog, "\u72D7\u72D7");\r
\`\`\`\r
\r
---\r
\r
## \u5B8C\u6574\u7A0B\u5F0F\u78BC\r
\`\`\`csharp\r
using System;\r
\r
namespace CSharpExercise.DelegateExercise\r
{\r
    public class DelegateExercise5\r
    {\r
        /// <summary>\r
        /// \u4E3B\u7A0B\u5F0F\r
        /// </summary>\r
        public void Main()\r
        {\r
            RunCircus(Dog, "\u72D7\u72D7");\r
        }\r
\r
\r
        /// <summary>\r
        /// \u5B9A\u7FA9\u51FD\u5F0F\r
        /// </summary>\r
        /// <param name="animal">\u52D5\u7269\u7684\u59D4\u6D3E</param>\r
        private static void RunCircus(Action<string> animal, string name)\r
        {\r
            animal(name);\r
        }\r
\r
        /// <summary>\r
        /// \u5C0F\u72D7\u51FD\u5F0F\r
        /// </summary>\r
        private static void Dog(string name)\r
        {\r
            Console.WriteLine($"\u6C6A\u6C6A!\u6211\u662F{name}");\r
        }\r
    }\r
}\r
\r
\`\`\``,rt="\u{1F4EA} [\u4E94.] \u59D4\u6D3E (Delegate)(Action \u59D4\u6D3E(\u50B3\u53C3\u6578)) - \u99AC\u6232\u5718";function et(){return u("Chicken Say Hi | \u{1F4EA} [\u4E94.] \u59D4\u6D3E (Delegate)"),t(s,{children:[n(o,{}),n(l,{backPath:r.CsharpEventHome,title:rt,text:nt})]})}const tt=`### Func<T> \u6CDB\u578B\u59D4\u6D3E -> \u6709\u56DE\u50B3\u503C\r
\r
\r
1. \u5B9A\u7FA9\u51FD\u5F0F\r
- \u50B3\u5165\u503C\u8A2D\u5B9A\u70BA Func<string>\r
- <T> \u8A2D\u5B9A\u56DE\u50B3\u503C\u578B\u614B\r
- Func<string> -> \u53EF\u4EE5\u76F4\u63A5\u50B3\u5165\u51FD\u5F0F\r
\`\`\`csharp\r
    /// <summary>\r
    /// \u5B9A\u7FA9\u51FD\u5F0F\r
    /// </summary>\r
    /// <param name="animal">\u52D5\u7269\u7684\u59D4\u6D3E</param>\r
    private static void RunCircus(Func<string> animal)\r
    {\r
        string sound = animal();\r
        Console.WriteLine(sound);\r
    }\r
\`\`\`\r
\r
2. \u547C\u53EB\u99AC\u6232\u5718\r
- \u76F4\u63A5\u50B3\u5165\u72D7\u51FD\u5F0F\r
- \u7121\u9808\u505A\u4EFB\u4F55\u5BE6\u4F8B\u5316\r
\`\`\`csharp\r
 RunCircus(Dog);\r
\`\`\`\r
---\r
\r
## \u5B8C\u6574\u7A0B\u5F0F\u78BC\r
\`\`\`csharp\r
using System;\r
\r
namespace csharpExercise.DelegateExercise\r
{\r
    public class DelegateExercise6\r
    {\r
        /// <summary>\r
        /// \u4E3B\u7A0B\u5F0F\r
        /// </summary>\r
        public void Main()\r
        {\r
            RunCircus(Dog);\r
        }\r
\r
\r
        /// <summary>\r
        /// \u5B9A\u7FA9\u51FD\u5F0F\r
        /// </summary>\r
        /// <param name="animal">\u52D5\u7269\u7684\u59D4\u6D3E</param>\r
        private static void RunCircus(Func<string> animal)\r
        {\r
            string sound = animal();\r
            Console.WriteLine(sound);\r
        }\r
\r
        /// <summary>\r
        /// \u5C0F\u72D7\u51FD\u5F0F\r
        /// </summary>\r
        /// <returns></returns>\r
        private static string Dog()\r
        {\r
            return "\u6C6A\u6C6A!";\r
        }\r
    }\r
}\r
\r
\`\`\``,it="\u{1F4EA} [\u516D.] \u59D4\u6D3E (Delegate)(Func \u59D4\u6D3E) - \u99AC\u6232\u5718";function st(){return u("Chicken Say Hi | \u{1F4EA} [\u516D.] \u59D4\u6D3E (Delegate)"),t(s,{children:[n(o,{}),n(l,{backPath:r.CsharpEventHome,title:it,text:tt})]})}const at=`### Func<T,TResult> \u6CDB\u578B\u59D4\u6D3E -> \u6709\u56DE\u50B3\u503C\r
\r
1. \u5B9A\u7FA9\u51FD\u5F0F\r
- \u50B3\u5165\u503C\u8A2D\u5B9A\u70BA \`Func<int, string>\`\r
- \`<T,TResult>\` \r
	- \`T\` -> \u50B3\u5165\u53C3\u6578  \r
	- \`TResult\` -> \u8A2D\u5B9A\u56DE\u50B3\u503C\u578B\u614B\r
- Func<string> -> \u53EF\u4EE5\u76F4\u63A5\u50B3\u5165\u51FD\u5F0F\r
\`\`\`csharp\r
    /// <summary>\r
    /// \u5B9A\u7FA9\u51FD\u5F0F\r
    /// </summary>\r
    /// <param name="animal">\u52D5\u7269\u7684\u59D4\u6D3E</param>\r
    private static void RunCircus(Func<int, string> animal, int age)\r
    {\r
        string sound = animal(age);\r
        Console.WriteLine(sound);\r
    }\r
\`\`\`\r
\r
2. \u547C\u53EB\u99AC\u6232\u5718\r
- \u76F4\u63A5\u50B3\u5165\u72D7\u51FD\u5F0F\r
- \u7121\u9808\u505A\u4EFB\u4F55\u5BE6\u4F8B\u5316\r
- \u5E36\u5165\u5E74\u7D00\r
\`\`\`csharp\r
  RunCircus(Dog, 5);\r
\`\`\`\r
---\r
\r
## \u5B8C\u6574\u7A0B\u5F0F\u78BC\r
\`\`\`csharp\r
using System;\r
\r
namespace csharpExercise.DelegateExercise\r
{\r
    public class DelegateExercise7\r
    {\r
\r
        /// <summary>\r
        /// \u4E3B\u7A0B\u5F0F\r
        /// </summary>\r
        public void Main()\r
        {\r
            RunCircus(Dog, 5);\r
        }\r
\r
\r
        /// <summary>\r
        /// \u5B9A\u7FA9\u51FD\u5F0F\r
        /// </summary>\r
        /// <param name="animal">\u52D5\u7269\u7684\u59D4\u6D3E</param>\r
        private static void RunCircus(Func<int, string> animal, int age)\r
        {\r
            string sound = animal(age);\r
            Console.WriteLine(sound);\r
        }\r
\r
        /// <summary>\r
        /// \u5C0F\u72D7\u51FD\u5F0F\r
        /// </summary>\r
        /// <returns></returns>\r
        private static string Dog(int age)\r
        {\r
            return $"\u6C6A\u6C6A!{age.ToString()} \u6B72";            \r
        }\r
    }\r
}\r
\r
\`\`\``,ot="\u{1F4EA} [\u4E03.] \u59D4\u6D3E (Delegate)(Func \u59D4\u6D3E(\u50B3\u53C3\u6578)) - \u99AC\u6232\u5718";function ut(){return u("Chicken Say Hi | \u{1F4EA} [\u4E03.] \u59D4\u6D3E (Delegate)"),t(s,{children:[n(o,{}),n(l,{backPath:r.CsharpEventHome,title:ot,text:at})]})}const lt=[{id:1,text:"\u7B2C\u4E00\u7AE0 OAuth2.0 \u662F\u4EC0\u9EBC?",goPath:r.OAuthNote1}];function ct(){return u("Chicken Say Hi | OAuth2.0"),t(s,{children:[n(o,{}),n(y,{list:lt})]})}const mt=`## 1-1 OAuth2.0 \u662F\u4EC0\u9EBC?\r
- \u662F\u4E00\u500B\u5B89\u5168\u5354\u8B70\r
- \u4F7F\u7528\u8005\u50CF\u64C1\u6709\u8005\u8ACB\u6C42\u6388\u6B0A\r
- \u64C1\u6709\u8005\u767Ctoken\u7D66\u4E88\u4F7F\u7528\u8005\r
- \u5982\u679C\u6C92\u6709\u523B\u610F\u53BB\u5C0B\u627EOAuth\u7684\u75D5\u8DE1\uFF0C\u662F\u6C38\u9060\u4E0D\u6703\u88AB\u767C\u89BA\u7684\r
  \r
### \u8209\u4F8B\u4F86\u8AAA\r
  \u5982\u540C\u5728\u98EF\u5E97\u88E1\uFF0C\u6AC3\u53F0\u767C\u7D66\u6211\u4E00\u5F35200\u865F\u623F\u7684\u623F\u5361\uFF0C\u6211\u5C31\u53EF\u4EE5\u7372\u5F97200\u865F\u623F\u7684\u4F7F\u7528\u6B0A\uFF0C  \r
\u540C\u6642\u6211\u4E5F\u7121\u6B0A\u4F7F\u7528\u5230\u5176\u4ED6\u623F\u9593\uFF0C\u4E26\u4E14\u98EF\u5E97\u4E5F\u6709\u6B0A\u6536\u56DE\u6211\u7684\u623F\u5361\u3002\r
  \r
### \u9019\u6A23\u7684\u597D\u8655\u5728\u65BC:\r
- \u6211\u53EF\u4EE5\u4E0D\u7528\u5230\u8655\u64C1\u6709\u623F\u5B50\uFF0C\u537B\u53EF\u4EE5\u5230\u8655\u6709\u5730\u65B9\u904E\u591C\r
- \u98EF\u5E97\u53EF\u4EE5\u4E0D\u7528\u64D4\u5FC3\uFF0C\u7121\u6CD5\u7BA1\u7406\u6709\u4EBA\u96A8\u610F\u5165\u4F4F\r
- \u597D\u6BD4\u5BA2\u6236\u7AEF\u4E0D\u9808\u64C1\u6709\u6240\u6709\u7684\u529F\u80FD\r
- \u8CC7\u6E90\u64C1\u6709\u8005\u53EF\u4EE5\u5C07\u6B0A\u9650\u59D4\u8A17\u51FA\u53BB\r
\r
### \u6388\u6B0A\u6846\u67B6\u4E4B\u4E0B\u7684\u7D44\u4EF6\r
1. \u8CC7\u6E90\u64C1\u6709\u8005: \r
   - \u6709\u6B0A\u8A2A\u554FAPI\u7684\u4EBA\r
   - \u80FD\u5C07\u8A2A\u554F\u6B0A\u9650\u59D4\u8A17\u51FA\u53BB\u7684\u4EBA\r
   - \u53EF\u5C07\u4ED6\u8996\u70BA\u5750\u5728\u700F\u89BD\u5668\u524D\u7684\u4EBA\r
2. \u53D7\u4FDD\u8B77\u7684\u8CC7\u6E90: \r
   - \u8CC7\u6E90\u64C1\u6709\u8005\u6709\u6B0A\u5229\u8A2A\u554F\u7684\u8CC7\u6E90\r
   - \u5927\u591A\u6578\u5DF2 \`Web Api\` \u65B9\u5F0F\u5448\u73FE\r
3. \u5BA2\u6236\u7AEF: \r
    - \u4EE3\u8868\u8457\u8CC7\u6E90\u64C1\u6709\u8005\u53BB\u8A2A\u554F\u53D7\u4FDD\u8B77\u7684\u8CC7\u6E90\r
    - \u6B64\u8655\u7684\u5BA2\u6236\u7AEF\uFF0C\u4E26\u4E0D\u5C40\u9650\u65BC\u700F\u89BD\u5668\r
    - \u4ED6\u88AB\u5B9A\u7FA9\u65BC\u547C\u53EB\u53D7\u4FDD\u8B77\u7684API\r
\r
## 1-2 \u820A\u4E16\u4EE3: \u6191\u8B49\u7684\u5171\u7528\u8207\u76DC\u7528\r
- \u904E\u53BB\u6D41\u884C\u7684\u4F5C\u6CD5\u662F\uFF0C\u8907\u88FD\u6191\u8B49\u4E26\u7528\u5B83\u4F86\u767B\u5165\u53E6\u4E00\u500B\u670D\u52D9\r
- \u5047\u88DD\u5979\u662F\u7528\u6236\uFF0C\u4E26\u4E14\u53D6\u5F97\u7528\u8A2A\u554F\u7684\u6B0A\u9650\r
\r
### \u820A\u4E16\u4EE3\u6191\u8B49\u76DC\u7528\u65B9\u5F0F:\r
1. \u53D6\u5F97\u7528\u6236\u7684\u5E33\u865F\u5BC6\u78BC\u6216cookie\r
2. \u4E26\u4F7F\u7528\u4ED6\u5011\u5047\u88DD\u7528\u6236\u901A\u904E\u8EAB\u5206\u8A8D\u8B49\r
3. \u6700\u5F8C\u53D6\u7684\u8CC7\u6E90\r
\r
\r
\r
### (\u6301\u7E8C\u66F4\u65B0\u4E2D ....)`,ht="\u{1F511} \u7B2C\u4E00\u7AE0 OAuth2.0 \u662F\u4EC0\u9EBC?";function gt(){return u("Chicken Say Hi | \u{1F511} OAuth2.0 (\u4E00)"),t(s,{children:[n(o,{}),n(l,{backPath:r.OAuthNote,title:ht,text:mt})]})}const dt=[{id:1,text:"\u7B2C\u4E00\u7AE0 \u55AE\u5143\u6E2C\u8A66\u7684\u57FA\u790E",goPath:r.UnitNote1}];function pt(){return u("Chicken Say Hi | Unit test"),t(s,{children:[n(o,{}),n(y,{list:dt})]})}const Ct=`- \u5B9A\u7FA9\u4E00\u500B\u55AE\u5143\u6E2C\u8A66\r
- \u5C0D\u6BD4\u55AE\u5143\u6E2C\u8A66\u8207\u96C6\u6210\u6E2C\u8A66\r
- \u63A2\u7D22\u4E00\u500B\u7C21\u55AE\u7684\u55AE\u5143\u6E2C\u8A66\u793A\u4F8B\r
- \u7406\u89E3\u6E2C\u8A66\u9A45\u52D5\u958B\u767C\r
\r
### 1.1 \u9010\u6B65\u5B9A\u7FA9\u55AE\u5143\u6E2C\u8A66\r
\r
- \u55AE\u5143\u6E2C\u8A66:\u63D0\u9AD8\u7A0B\u5F0F\u54C1\u8CEA\uFF0C\u66F4\u52A0\u7406\u89E3\u985E\u5225\u8207\u65B9\u6CD5\u7684\u529F\u80FD\u9700\u6C42\r
- \u5DE5\u4F5C\u55AE\u5143:\u5F9E\u547C\u53EB\u516C\u7528\u65B9\u6CD5\u5230\u4E00\u500B\u6E2C\u8A66\u53EF\u898B\u7684\u6700\u7D42\u7D50\u679C\uFF0C\u6B64\u904E\u7A0B\u7A31\u4E4B\u70BA\u5DE5\u4F5C\u55AE\u5143\r
-  \u5B9A\u7FA9:\r
	1. \u4E00\u500B\u55AE\u5143\u6E2C\u8A66\u793A\u4E00\u6BB5\u4EE3\u78BC(\u901A\u5E38\u662F\u4E00\u500B\u65B9\u6CD5\u6216\u4E00\u500B\u51FD\u6578)\uFF0C\u7531\u6B64\u65B9\u6CD5\u53BB\u547C\u53EB\u53E6\u4E00\u6BB5\u65B9\u6CD5\uFF0C\u7136\u5F8C\u6AA2\u9A57\u67D0\u4E9B\u5047\u8A2D\u7684\u6B63\u78BA\u6027\uFF0C\u5982\u679C\u5047\u8A2D\u662F\u932F\u8AA4\uFF0C\u8868\u793A\u55AE\u5143\u6E2C\u8A66\u5931\u6557\r
	2. \u4E3B\u5C08\u6848\u7684\u7A0B\u5F0F\u7A31\u70BA:\u88AB\u6E2C\u8A66\u7CFB\u7D71 (System Under Test  SUT)\uFF0C\u6709\u7684\u4EBA\u559C\u6B61\u7A31\u70BACUT(Class Under Teat)\r
	3. \u6E2C\u8A66\u6700\u7D42\u7D50\u679C\u7684\u5F62\u5F0F:\r
		- \u88AB\u547C\u53EB\u7684\u516C\u5171\u65B9\u6CD5\u8FD4\u56DE\u4E00\u500B\u503C(\u4E00\u500B\u8FD4\u56DE\u503C\u4E0D\u53EF\u70BA\u7A7A\u7684\u51FD\u6578)\r
		- \u65B9\u6CD5\u88AB\u547C\u53EB\u7684\u524D\u5F8C\uFF0C\u7CFB\u7D71\u7684\u72C0\u614B\u6216\u884C\u70BA\u6709\u53EF\u898B\u7684\u8B8A\u5316\uFF0C\u9019\u7A2E\u8B8A\u5316\u7121\u9808\u67E5\u8A62\u79C1\u6709\u72C0\u614B\u5373\u53EF\u5224\u65B7(ex:\u4E00\u500B\u4EE5\u524D\u4E0D\u5B58\u5728\u7684\u7528\u6236\u53EF\u4EE5\u767B\u5165\u7CFB\u7D71)\r
		- \u547C\u53EB\u4E00\u500B\u4E0D\u53D7\u63A7\u5236\u7684\u7B2C\u4E09\u65B9\u7CFB\u7D71\uFF0C\u9019\u500B\u7CFB\u7D71\u4E0D\u6703\u8FD4\u56DE\u4EFB\u4F55\u503C\uFF0C\u6216\u8FD4\u56DE\u503C\u88AB\u5FFD\u7565(ex:\u547C\u53EBlog4Net\uFF0C\u4EE3\u78BC\u4E0D\u662F\u4F60\u5BEB\u7684\uFF0C\u4F60\u4E5F\u6C92\u6E90\u78BC)\r
	4. \u55AE\u5143\u6E2C\u8A66\u6700\u5C0F\u53EF\u4EE5\u5C0F\u5230\u4E00\u500B\u65B9\u6CD5\uFF0C\u5927\u53EF\u4EE5\u5305\u62EC\u5BE6\u73FE\u67D0\u500B\u529F\u80FD\u6216\u591A\u500B\u51FD\u6578\u3002\r
\r
### 1.1.1 \u7DE8\u5BEB\u512A\u79C0\u55AE\u5143\u6E2C\u8A66\u7684\u91CD\u8981\u6027\r
\r
- \u8981\u7406\u89E3\u55AE\u5143\u6E2C\u8A66\uFF0C\u5149\u7406\u89E3\u5DE5\u4F5C\u55AE\u5143\u9084\u4E0D\u69CB\r
- \u5982\u679C\u7DE8\u5BEB\u5DEE\u52C1\u7684\u55AE\u5143\u6E2C\u8A66\u662F\u6C92\u610F\u7FA9\u7684\uFF0C\u9084\u6703\u9020\u6210\u65E5\u5F8C\u7DAD\u8B77\u7684\u9EBB\u7169\r
\r
### 1.1.2 \u6211\u5011\u90FD\u5BEB\u904E\u55AE\u5143\u6E2C\u8A66\r
\r
- \u6216\u8A31\u4F60\u66FE\u7D93\u4F7F\u7528\u904E\u63A7\u5236\u53F0\u7A0B\u5E8F\u4F86\u8ABF\u7528\u4E00\u500B\u985E\u5225\u6216\u7D44\u4EF6\uFF0C\u4F86\u9A57\u8B49\u6700\u7D42\u7D50\u679C\u662F\u5426\u80FD\u8B93\u4F60\u78BA\u4FE1\u4EE3\u78BC\u5DE5\u4F5C\u662F\u6B63\u5E38\u7684\r
- \u9019\u4E9B\u6E2C\u8A66\u6216\u8A31\u5F88\u6709\u7528\uFF0C\u800C\u4E14\u4E5F\u5F88\u63A5\u8FD1\u50B3\u7D71\u7684\u55AE\u5143\u6E2C\u8A66\r
\r
### 1.2 \u512A\u79C0\u55AE\u5143\u6E2C\u8A66\u7684\u7279\u6027\r
\r
- \u4E00\u500B\u55AE\u5143\u6E2C\u8A66\u61C9\u5177\u6709\u4EE5\u4E0B\u7279\u5FB5:\r
	- \u81EA\u52D5\u5316\uFF0C\u4E14\u53EF\u4EE5\u91CD\u8907\u57F7\u884C\r
	- \u5F88\u5BB9\u6613\u5BE6\u73FE\r
	- \u7B2C\u4E8C\u5929\u9084\u8981\u6709\u610F\u7FA9\r
	- \u4EFB\u4F55\u4EBA\u90FD\u61C9\u8A72\u80FD\u4E00\u9375\u904B\u884C\u4ED6\r
	- \u7D50\u679C\u9700\u8981\u662F\u7A69\u5B9A\u7684(\u904B\u884C\u4E4B\u524D\u6C92\u6709\u9032\u884C\u4EFB\u4F55\u4FEE\u6539\u7684\u8A71\uFF0C\u591A\u6B21\u904B\u884C\u4E00\u500B\u6E2C\u8A66\u7D50\u679C\u61C9\u8A72\u8981\u662F\u4E0D\u8B8A\u7684)\r
	- \u8981\u80FD\u5B8C\u5168\u63A7\u5236\u88AB\u6E2C\u8A66\u7684\u55AE\u5143\r
	- \u9700\u8981\u662F\u5B8C\u5168\u9694\u96E2\u7684(\u7368\u7ACB\u65BC\u5176\u4ED6\u7A0B\u5F0F\u7684\u904B\u884C)\r
	- \u5982\u679C\u57F7\u884C\u5931\u6557\uFF0C\u6211\u5011\u8981\u5F88\u5BB9\u6613\u5730\u77E5\u9053\u4EC0\u9EBC\u662F\u671F\u5F85\u7684\u7D50\u679C\uFF0C\u9032\u4E00\u6B65\u5B9A\u4F4D\u554F\u984C\u6240\u5728\r
- \u5F88\u591A\u4EBA\u5C07\u55AE\u5143\u6E2C\u8A66\u7684\u6982\u5FF5\u8207\u8EDF\u9AD4\u6E2C\u8A66\u7684\u884C\u70BA\u6DF7\u70BA\u4E00\u8AC7\uFF0C\u5982\u679C\u8981\u6F84\u6E05\u9019\u554F\u984C\u3002\u9996\u5148\u8981\u5148\u56DE\u9867\u81EA\u5DF1\u4EE5\u524D\u5BEB\u904E\u7684\u6E2C\u8A66\uFF0C\u4E26\u554F\u81EA\u5DF1\u554F\u984C:\r
	- \u4EE5\u524D\u5BEB\u7684\u4E00\u500B\u55AE\u5143\u6E2C\u8A66\uFF0C\u4ECA\u5929\u9084\u80FD\u9806\u5229\u904B\u884C\u55CE\r
	- \u4EE5\u524D\u5BEB\u7684\u6E2C\u8A66\uFF0C\u5718\u968A\u88E1\u6709\u4EFB\u4F55\u4E00\u500B\u4EBA\u53EF\u4EE5\u904B\u884C\u4ED6\u4E26\u5F97\u5230\u7D50\u679C\u55CE\r
	- \u6211\u80FD\u4E00\u9375\u904B\u884C\u904E\u6240\u6709\u7684\u55AE\u5143\u6E2C\u8A66\u55CE\r
	- \u6211\u80FD\u5728\u5E7E\u5206\u9418\u5167\u5BEB\u51FA\u4E00\u500B\u57FA\u672C\u7684\u6E2C\u8A66\u55CE\r
- \u5982\u679C\u4EE5\u4E0A\u7B54\u6848\u4EFB\u4F55\u4E00\u500B\u70BA\u5426\u5B9A\uFF0C\u90A3\u5F88\u53EF\u80FD\u5C31\u4E0D\u662F\u55AE\u5143\u6E2C\u8A66\uFF0C\u5BE6\u969B\u4E0A\u662F\u96C6\u6210\u6E2C\u8A66\r
\r
### 1.3 \u96C6\u6210\u6E2C\u8A66\r
\r
- \u96C6\u6210\u6E2C\u8A66:\u4EFB\u4F55\u6E2C\u8A66\uFF0C\u5982\u679C\u904B\u884C\u901F\u5EA6\u4E0D\u5FEB\uFF0C\u7D50\u679C\u4E0D\u7A69\u5B9A\uFF0C\u6216\u8005\u8981\u7528\u5230\u88AB\u6E2C\u8A66\u55AE\u5143\u4E00\u500B\u6216\u591A\u500B\u771F\u5BE6\u4F9D\u8CF4\u7269\uFF0C(ex:\u4E00\u500B\u6E2C\u8A66\u8981\u4F7F\u7528\u771F\u5BE6\u7684\u7CFB\u7D71\u6642\u9593\uFF0C\u771F\u5BE6\u7684\u6587\u4EF6\u6216\u771F\u5BE6\u7684\u8CC7\u6599\u5EAB)\r
- \u5982\u679C\u4E00\u500B\u6E2C\u8A66\u4E0D\u80FD\u63A7\u5236\u7CFB\u7D71\u6642\u9593\uFF0C\u6BCF\u6B21\u90FD\u8981\u4F7F\u7528DateTime.Now\uFF0C\u90A3\u9EBC\u6BCF\u6B21\u57F7\u884C\u90FD\u662F\u4F7F\u7528\u4E0D\u540C\u7684\u6642\u9593\uFF0C\u56E0\u6B64\u6E2C\u8A66\u7684\u672C\u8CEA\u90FD\u662F\u4E0D\u540C\u7684\uFF0C\u9019\u6E2C\u8A66\u5C31\u4E0D\u7A69\u5B9A\u4E86\r
- \u96C6\u6210\u6E2C\u8A66\u8207\u55AE\u5143\u6E2C\u8A66\u5177\u6709\u76F8\u540C\u7684\u5730\u4F4D\u90FD\u975E\u5E38\u91CD\u8981\uFF0C\u4F46\u5169\u7A2E\u6E2C\u8A66\u61C9\u8A72\u88AB\u88AB\u5206\u958B\u4F86\r
- \u5982\u679C\u4E00\u500B\u6E2C\u8A66\u4F7F\u7528\u7684\u662F\u771F\u5BE6\u8CC7\u6599\u5EAB\uFF0C\u90A3\u9EBC\u548C\u90A3\u4E9B\u53EA\u4F7F\u7528\u5167\u5B58\u4E2D\u7684\u507D\u6578\u64DA\u6E2C\u8A66\u76F8\u6BD4:\r
	1. \u6E2C\u8A66\u75D5\u8DE1\u96E3\u4EE5\u6D88\u9664\r
	2. \u904B\u884C\u6642\u9593\u76F8\u5C0D\u66F4\u9577\r
	3. \u5982\u679C\u6709\u6210\u5343\u4E0A\u842C\u500B\u6E2C\u8A66\uFF0C\u6BCF\u5206\u6BCF\u79D2\u90FD\u662F\u95DC\u9375\r
- \u5927\u591A\u4EBA\u90FD\u662F\u901A\u904E\u7528\u6236\u4ECB\u9762\u7684\u6700\u7D42\u529F\u80FD\u4F86\u6E2C\u8A66\u8EDF\u9AD4\u7684\u529F\u80FD\uFF0C\u55AE\u64CA\u6309\u9215\u6703\u89F8\u767C\u4E00\u7CFB\u5217\u7684\u4E8B\u4EF6\uFF0C\u5982\u679C\u6700\u7D42\u7D50\u679C\u5931\u6557\uFF0C\u90A3\u6240\u6709\u9019\u4E9B\u7D44\u9375\u505A\u70BA\u4E00\u6574\u9AD4\u5C31\u5931\u6557\u4E86\uFF0C\u4E5F\u5F88\u96E3\u627E\u51FA\u6574\u9AD4\u64CD\u4F5C\u7684\u5931\u6557\r
\r
- \u96C6\u6210\u6E2C\u8A66\u5B9A\u7FA9:\r
	1. \u4E00\u500B\u5FAA\u5E8F\u6F38\u9032\u7684\u6E2C\u8A66\uFF0C\u8EDF\u786C\u9AD4\u76F8\u7D50\u5408\u9032\u884C\u6E2C\u8A66\u76F4\u5230\u6574\u500B\u7CFB\u7D71\u96C6\u6210\u5728\u4E00\u8D77\r
	2. \u5C0D\u4E00\u500B\u5DE5\u4F5C\u55AE\u5143\u9032\u884C\u6E2C\u8A66\uFF0C\u9019\u500B\u6E2C\u8A66\u5C0D\u5DE5\u4F5C\u55AE\u5143\u6C92\u6709\u5B8C\u5168\u63A7\u5236\uFF0C\u4E26\u4F7F\u7528\u8A72\u55AE\u5143\u7684\u4E00\u500B\u6216\u591A\u500B\u771F\u5BE6\u4F9D\u8CF4\u7269\r
	3. \u96C6\u6210\u6E2C\u8A66\u6703\u4F7F\u7528\u771F\u5BE6\u4F9D\u8CF4\u7269\uFF0C\u55AE\u5143\u6E2C\u8A66\u5247\u628A\u88AB\u6E2C\u8A66\u55AE\u5143\u548C\u5176\u4F9D\u8CF4\u7269\u9694\u958B\uFF0C\u4EE5\u4FDD\u8B49\u6E2C\u8A66\u7D50\u679C\u9AD8\u5EA6\u7A69\u5B9A\r
\r
### \u8207\u81EA\u52D5\u5316\u55AE\u5143\u6E2C\u8A66\u76F8\u6BD4\uFF0C\u975E\u81EA\u52D5\u5316\u96C6\u6210\u6E2C\u8A66\u7684\u7F3A\u9EDE\r
\r
- \u6211\u5169\u5468\u524D\u5BEB\u7684\u4E00\u500B\u55AE\u5143\u6E2C\u8A66\uFF0C\u4ECA\u5929\u9084\u80FD\u904B\u884C\u4E26\u5F97\u5230\u7D50\u679C\u55CE?\u66F4\u4E45\u4E4B\u524D\u7684\u5462?\r
	- \u5982\u679C\u7B54\u6848\u662F"\u5426"\uFF0C\u90A3\u6216\u8A31\u5DF2\u7D93\u7834\u58DE\u4E4B\u524D\u7684\u529F\u80FD\u4E86\r
	- \u7121\u6CD5\u5C0D\u4E4B\u524D\u6240\u6709\u529F\u80FD\u9032\u884C\u6E2C\u8A66\uFF0C\u5C31\u6709\u53EF\u80FD\u7834\u58DE\u4E86\u67D0\u500B\u529F\u80FD\u800C\u6BEB\u4E0D\u77E5\u60C5\uFF0C\u9019\u7A2E\u60C5\u6CC1\u7A31\u70BA"\u5076\u7136\u5F15\u5165\u7F3A\u9677"\r
	- \u56DE\u6B78\u662F\u4EE5\u524D\u904B\u884C\u826F\u597D\u4F46\u662F\u73FE\u5728\u5E03\u5DE5\u4F5C\u7684\u4E00\u500B\u6216\u591A\u500B\u5DE5\u4F5C\u55AE\u5143\r
\r
### 1.4 \u4EC0\u9EBC\u662F\u512A\u79C0\u7684\u55AE\u5143\u6E2C\u8A66\r
\r
- \u55AE\u5143\u6E2C\u8A66\u6700\u7D42\u5B9A\u7FA9:\r
	- \u4E00\u500B\u55AE\u5143\u6E2C\u8A66\u662F\u4E00\u6BB5\u81EA\u52D5\u5316\u7684\u7A0B\u5F0F\uFF0C\u9019\u6BB5\u7A0B\u5F0F\u53BB\u547C\u53EB\u8981\u88AB\u6E2C\u8A66\u7684\u5DE5\u4F5C\u55AE\u5143\uFF0C\u4E4B\u5F8C\u5C0D\u9019\u500B\u5DE5\u4F5C\u55AE\u5143\u7684\u7D50\u679C\u7684\u67D0\u4E9B\u5047\u8A2D\u9032\u884C\u6AA2\u9A57\uFF0C\r
	- \u5BB9\u6613\u7DE8\u5BEB\uFF0C\u80FD\u5FEB\u901F\u904B\u884C\r
	- \u53EF\u9760\u53EF\u8B80\u5BB9\u6613\u7DAD\u8B77\r
	- \u53EA\u8981\u7A0B\u5F0F\u4E0D\u767C\u751F\u6539\u8B8A\uFF0C\u6E2C\u8A66\u7D50\u679C\u662F\u7A69\u5B9A\u7684\r
\r
### 1.5\u4E00\u500B\u7C21\u55AE\u7684\u55AE\u5143\u6E2C\u8A66\u7BC4\u4F8B\r
\r
- \u6709\u4E00\u500B class (SimpleParser)\u9700\u8981\u88AB\u6E2C\u8A66\uFF0C\u88E1\u9762\u6709\u4E00\u500B\u65B9\u6CD5(ParseAndSum)\r
	- ParseAndSum\u8F38\u5165\u662F\u75310\u6216\u591A\u500B\u9017\u865F\u7D44\u6210\u7684\u5B57\u4E32\u9663\u5217\r
	- \u5982\u679C\u8F38\u5165\u7684\u5B57\u4E32\u4E0D\u542B\u6578\u503C\uFF0C\u5C31\u56DE\u50B30\r
	- \u5982\u679C\u5305\u542B\u55AE\u4E00\u4E00\u500B\u6578\u503C\uFF0C\u5C31\u5C07\u6578\u503C\u8F49\u6210int\u56DE\u50B3\r
	- \u5982\u679C\u5305\u542B\u591A\u500B\u6578\u503C\uFF0C\u5C31\u56DE\u50B3\u6578\u503C\u7E3D\u548C\u7684int\r
\r
\`\`\`csharp\r
\r
// Define other methods and classes here \r
public class SimpleParser \r
{ \r
	public int ParseAndSum(string numbers) \r
	{ \r
	 	if(numbers.Length==0) \r
		{ \r
	 		return 0; \r
	 	} \r
		if(!numbers.Contains(",")) \r
		{ \r
	 		return int.Parse(numbers); \r
	 	} \r
		else \r
		{ \r
		  throw new InvalidOperationException( \r
		  "I can only handle 0 or 1 numbers for now!"); \r
		} \r
	} \r
}\r
\`\`\`\r
\r
\r
### 1.6\u6E2C\u8A66\u9A45\u52D5\u958B\u767C\r
\r
- \u6709\u4E00\u500B class (SimpleParser)\u9700\u8981\u88AB\u6E2C\u8A66\uFF0C\u88E1\u9762\u6709\u4E00\u500B\u65B9\u6CD5(ParseAndSum)\r
`,yt="\u{1F4CB} \u7B2C\u4E00\u7AE0 \u55AE\u5143\u6E2C\u8A66\u7684\u57FA\u790E";function xt(){return u("Chicken Say Hi | \u{1F4CB} Unit test (\u4E00)"),t(s,{children:[n(o,{}),n(l,{backPath:r.UnitNote,title:yt,text:Ct})]})}const Dt=[{id:1,text:"1-1. \u8A2D\u8A08\u6A21\u5F0F\u6982\u8FF0(\u4E00)",goPath:r.DPOverview1},{id:2,text:"1-2. \u8A2D\u8A08\u6A21\u5F0F\u6982\u8FF0(\u4E8C)",goPath:r.DPOverview2},{id:3,text:"1-3. \u8A2D\u8A08\u6A21\u5F0F\u6982\u8FF0(\u4E09)",goPath:r.DPOverview3},{id:4,text:"1-4. \u7269\u4EF6\u5C0E\u5411\u8A2D\u8A08\u539F\u5247\u6982\u8FF0",goPath:r.DPOopOverview},{id:5,text:"2-1. \u55AE\u4E00\u8CAC\u4EFB\u539F\u5247(SRP)",goPath:r.SRP},{id:6,text:"2-2. \u958B\u9589\u539F\u5247 (OCP)",goPath:r.OCP},{id:7,text:"2-3. \u91CC\u6C0F\u66FF\u63DB\u539F\u5247 (Lsp)",goPath:r.LSP},{id:8,text:"2-4. \u4ECB\u9762\u9694\u96E2\u539F\u5247 (ISP)",goPath:r.ISP},{id:9,text:"2-5. \u4F9D\u8CF4\u53CD\u8F49\u539F\u5247 (DIP) ",goPath:r.DIP},{id:10,text:"3-1. \u5DE5\u5EE0\u65B9\u6CD5 (Factory Method Pattern) ",goPath:r.FMP},{id:11,text:"3-2. \u7C21\u55AE\u5DE5\u5EE0 (Simple Factory Pattern) ",goPath:r.SFP}];function St(){return u("Chicken Say Hi | OAuth2.0"),t(s,{children:[n(o,{}),n(y,{list:Dt})]})}const bt=`# [\u8A2D\u8A08\u6A21\u5F0F] 1-1 \u8A2D\u8A08\u6A21\u5F0F\u6982\u8FF0(\u4E00)\r
\r
### \u8A2D\u8A08\u6A21\u5F0F\u7684\u8D77\u6E90:\r
\r
- \u8A2D\u8A08\u6A21\u5F0F\u7684\u8A95\u751F : \u51FA\u81EA\u65BCChristopher Alexander<\u54C8\u4F5B\u5927\u5B78\u5EFA\u7BC9\u5B78\u535A\u58EB>\uFF0C\u865F\u7A31The father of patterns\r
- Christopher Alexander\u8207\u5176\u5718\u968A\u7528\u4E86\u5C07\u8FD120\u5E74\u7684\u6642\u9593\uFF0C\u8ABF\u67E5\u4F4F\u5B85\u5468\u908A\u74B0\u5883\r
- \u4ED6\u5011\u767C\u73FE\u4EBA\u5011\u5C0D\u8212\u9069\u7684\u4F4F\u5B85\u8207\u57CE\u5E02\u74B0\u5883\u4E4B\u9593\u5B58\u5728\u8457\u4E00\u4E9B\u5171\u540C\u7684\u8A8D\u540C\u5B9A\u5F8B\r
- Christopher Alexander\u5728\u8457\u4F5CA Pattern Language: Towns, Buildings, Construction\u4E2D\u628A\u9019\u4E9B\u8A8D\u540C\u898F\u5F8B\u6B78\u7D0D\u70BA253\u4E2A\u6A21\u5F0F\r
- \u6BCF\u500B\u6A21\u5F0F\u90FD\u662F\u5F9E\\\r
		1. Context(\u524D\u63D0\u689D\u4EF6)\\\r
		2. Theme\u6216Problem\uFF08\u76EE\u6A19\u554F\u984C\uFF09\\\r
		3.  Solution\uFF08\u89E3\u6C7A\u65B9\u6848\uFF09\r
\r
\u5F8C\u4F86Christopher Alexander\u7D66\u51FA\u4E86\u4E00\u500B\u5EFA\u8B70:\r
\`\`\`\r
A pattern is a successful or efficient solution to a recurring  problem within a context\r
\u6A21\u5F0F\u662F\u5728\u7279\u5B9A\u74B0\u5883\u4E0B\u4EBA\u5011\u89E3\u6C7A\u67D0\u985E\u91CD\u8907\u51FA\u73FE\u554F\u984C\u7684\u4E00\u5957\u6210\u529F\u7372\u6709\u6548\u7684\u89E3\u6C7A\u65B9\u6848\r
\`\`\`\r
\r
\r
\u8A2D\u8A08\u6A21\u5F0F\u601D\u60F3\u7684\u5F15\u7528:\r
\r
- 1990\u5E74\uFF0C\u8EDF\u9AD4\u5DE5\u7A0B\u754C\u958B\u59CB\u95DC\u6CE8Christopher Alexander\u5728\u4F4F\u5B85\u9818\u57DF\u7684\u7A81\u7834\r
- \u57281991~1992\u5E74\u9593\u7531\u56DB\u4F4D\u8EDF\u9AD4\u5DE5\u7A0B\u7684\u5B78\u8005\uFF0C\u5C07\u5176\u5F15\u5165\u7A0B\u5F0F\u958B\u767C\u4E2D\r
- \u57281994\u5E74\u6B78\u7D0D\u4E26\u767C\u8868\u51FA23\u7A2E\u5E38\u7528\u7684\u8A2D\u8A08\u6A21\u5F0F\r
- \u4E3B\u8981\u7528\u6A21\u5F0F\u4F86\u7D71\u4E00\u6E9D\u901A\u7269\u4EF6\u5C0E\u5411\u57281. \u6E9D\u901A 2. \u8A2D\u8A08 3.\u958B\u767C\u4E4B\u9593\u7684\u4EE3\u6E9D\r
\r
\u8EDF\u9AD4\u6A21\u5F0F(Software Patterns)\u5C31\u6B64\u8A95\u751F\uFF0C\u8EDF\u9AD4\u958B\u767C\u7684\u751F\u547D\u9031\u671F\u4E0A\u90FD\u5B58\u5728\u8457\u4E00\u4E9B\u88AB\u8A8D\u540C\u7684\u6A21\u5F0F\r
\u8EDF\u9AD4\u6A21\u5F0F\u793A\u5716:\r
![mdImg](https://github.com/LonelyYeezhiChicken/chicken-personal/blob/main/src/assets/mdImgs/designPattern/orverviewP1.png?raw=true)\r
`,Ft="\u{1F4A1}1. \u8A2D\u8A08\u6A21\u5F0F\u6982\u8FF0(\u4E00)";function ft(){return u("Chicken Say Hi | \u{1F4A1} 1. \u8A2D\u8A08\u6A21\u5F0F\u6982\u8FF0(\u4E00)"),t(s,{children:[n(o,{}),n(l,{backPath:r.DesignPattern,title:Ft,text:bt})]})}const Pt=`# [\u8A2D\u8A08\u6A21\u5F0F] 1-2 \u8A2D\u8A08\u6A21\u5F0F\u6982\u8FF0(\u4E8C)\r
### \u8A2D\u8A08\u6A21\u5F0F\u662F\u4EC0\u9EBC\uFF1F\r
\r
- \u8A2D\u8A08\u6A21\u5F0F\uFF08Design Pattern\uFF09\u662F\u4E00\u5957\r
	- \u53EF\u4EE5\u53CD\u8986\u4F7F\u7528\r
	- \u591A\u6578\u4EBA\u77E5\u66C9\r
	- \u7D93\u904E\u5206\u985E\r
- \u4F7F\u7528\u8A2D\u8A08\u6A21\u5F0F\u662F\u70BA\u4E86\r
	- \u53EF\u4EE5\u91CD\u8907\u4F7F\u7528\u7A0B\u5F0F\r
	- \u63D0\u5347\u53EF\u8B80\u6027\r
	- \u964D\u4F4E\u51FA\u932F\u7387\r
\r
### \u6A21\u5F0F\u540D\u7A31(Patten Name):\r
\r
- \u8A2D\u8A08\u6A21\u5F0F\u5305\u542B:\r
	1. \u540D\u7A31\r
	2. \u554F\u984C (Problem): \u5305\u542B\u8A2D\u8A08\u4E2D\u5B58\u5728\u7684\u554F\u984C\u8207\u554F\u984C\u5B58\u5728\u7684\u539F\u56E0 \r
	3. \u76EE\u7684\r
	4. \u89E3\u6C7A\u65B9\u6848(Solution):\u63CF\u8FF0\u8A2D\u8A08\u6A21\u5F0F\u7684\u7D44\u6210\uFF0C\u5404\u81EA\u7684\u8077\u8CAC\u8207\u5354\u4F5C\u65B9\u5F0F\r
- \u85C9\u7531\u6A21\u5F0F\u540D\u7A31\u4F86\u63CF\u8FF0\u8A2D\u8A08\u6A21\u5F0F\u5305\u542B\u7684\u9805\u76EE\uFF0C\u4EE5\u9054\u5230\u6700\u6709\u6548\u7684\u6E9D\u901A\r
- \u5927\u591A\u6578\u7684\u6A21\u5F0F\u90FD\u662F\u4F7F\u7528\u5176\u529F\u80FD\uFF0C\u6216\u662F\u6A21\u5F0F\u7D50\u69CB\u4F86\u547D\u540D\u7684\r
\r
\r
### \u8A2D\u8A08\u6A21\u5F0F:\r
\r
- \u8A2D\u8A08\u6A21\u5F0F\u53EF\u5206\u70BA:\r
	1. \u5275\u5EFA\u578B(Creational) -> \u63CF\u8FF0\u5982\u4F55\u5EFA\u7ACB\u7269\u4EF6\r
	2. \u7D50\u69CB\u578B(Structural) -> \u63CF\u8FF0\u5982\u4F55\u5BE6\u73FE\u985E\u5225\u8207\u7269\u4EF6\u7684\u7D44\u5408\r
	3. \u884C\u70BA\u578B(Behavioral) -> \u7528\u65BC\u63CF\u8FF0\u985E\u5225\u8207\u7269\u4EF6\u4E4B\u9593\u600E\u6A23\u4EA4\u4E92\u53CA\u600E\u6A23\u5206\u914D\u8077\u8CAC\r
- \u6B64\u5916\u8A2D\u8A08\u6A21\u5F0F\u4E5F\u53EF\u4EE5\u5206\u70BA:\r
	1. \u985E\u5225\u6A21\u5F0F -> \u4F8B\u5982:\u6A21\u677F\u65B9\u6CD5\u662F\u985E\u5225\u884C\u70BA\u578B\u6A21\u5F0F\r
	2. \u7269\u4EF6\u6A21\u5F0F -> \u4F8B\u5982:\u55AE\u4F8B\u6A21\u5F0F\u662F\u7269\u4EF6\u5275\u5EFA\u578B\u6A21\u5F0F\r
\r
\r
### \u5275\u5EFA\u578B\u6A21\u5F0F - Creational Pattern \r
| \u6A21\u5F0F\u540D\u7A31 |\r
|-------------|\r
| \u5275\u5EFA\u578B\u6A21\u5F0F Creational Pattern |\r
| \u55AE\u4F8B\u6A21\u5F0F Singleton Pattern |\r
| \u7C21\u55AE\u5DE5\u5EE0\u6A21\u5F0F Simple Factory Pattern |\r
| \u5DE5\u5EE0\u65B9\u6CD5\u6A21\u5F0F Factory Method Pattern |\r
| \u62BD\u8C61\u5DE5\u5EE0\u6A21\u5F0F Abstract  Factory Pattern |\r
| \u539F\u578B\u6A21\u5F0F Prototype Pattern |\r
| \u5EFA\u9020\u8005\u6A21\u5F0F Builder Pattern |\r
\r
### \u7D50\u69CB\u884C\u6A21\u5F0F - Structural Pattern\r
| \u6A21\u5F0F\u540D\u7A31 |\r
|-------------|\r
| \u9069\u914D\u5668\u6A21\u5F0F Adapter Pattern |\r
| \u6A4B\u63A5\u6A21\u5F0F Bridge  Pattern |\r
| \u7D44\u5408\u6A21\u5F0F Composite  Pattern |\r
| \u88DD\u98FE\u5668\u6A21\u5F0F Decorator  Pattern |\r
| \u5916\u89C0\u6A21\u5F0F Facade  Pattern |\r
| \u4EAB\u5143\u6A21\u5F0F Flyweight  Pattern |\r
| \u4EE3\u7406\u6A21\u5F0F Proxy  Pattern |\r
\r
### \u884C\u70BA\u6A21\u5F0F - Behavioral Pattern\r
| \u6A21\u5F0F\u540D\u7A31 |\r
|-------------|\r
| \u8077\u8CAC\u93C8\u6A21\u5F0F Chain of Responsibility Pattern |\r
| \u547D\u4EE4\u6A21\u5F0F Command  Pattern |\r
| \u89E3\u91CB\u5668\u6A21\u5F0F Interpreter  Pattern |\r
| \u8FED\u4EE3\u5668\u6A21\u5F0F Iterator  Pattern |\r
| \u4E2D\u4ECB\u8005\u6A21\u5F0F Mediator  Pattern |\r
| \u5099\u5FD8\u9304\u6A21\u5F0F Memento  Pattern |\r
| \u89C0\u5BDF\u8005\u6A21\u5F0F Observer  Pattern |\r
| \u72C0\u614B\u6A21\u5F0F State  Pattern |\r
| \u7B56\u7565\u6A21\u5F0F Strategy  Pattern |\r
| \u6A21\u677F\u65B9\u6CD5\u6A21\u5F0F Template  Method Pattern |\r
| \u8A2A\u554F\u8005\u6A21\u5F0F Visitor  Pattern |\r
`,vt="\u{1F4A1}2. \u8A2D\u8A08\u6A21\u5F0F\u6982\u8FF0(\u4E8C)";function Et(){return u("Chicken Say Hi | \u{1F4A1} 2. \u8A2D\u8A08\u6A21\u5F0F\u6982\u8FF0(\u4E8C)"),t(s,{children:[n(o,{}),n(l,{backPath:r.DesignPattern,title:vt,text:Pt})]})}const At=`# [\u8A2D\u8A08\u6A21\u5F0F] 1-3 \u8A2D\u8A08\u6A21\u5F0F\u6982\u8FF0(\u4E09)\r
\r
### \u8A2D\u8A08\u6A21\u5F0F\u7684\u7528\u9014:\r
1. \u63D0\u9AD8\u53EF\u8907\u7528\u8207\u7DAD\u8B77\u6027 : \u8A2D\u8A08\u6A21\u5F0F\u7D93\u904E\u5404\u5C08\u5BB6\u7684\u7D93\u9A57\u8207\u667A\u6167\uFF0C\u8A2D\u8A08\u6A21\u5F0F\u53EF\u4EE5\u63D0\u9AD8\u6211\u5011\u7684\u958B\u767C\u8207\u6548\u7387\r
2. \u65B9\u4FBF\u6E9D\u901A\u8207\u4EA4\u6D41 : \u7531\u65BC\u8A2D\u8A08\u6A21\u5F0F\u4E0A\u6709\u4E00\u5957\u901A\u7528\u7684\u8A2D\u8A08\u8A5E\u5F59\uFF0C\u56E0\u6B64\u5728\u6E9D\u901A\u4E0A\u53EF\u4EE5\u76F8\u4E92\u7406\u89E3\r
3. \u63D0\u9AD8\u64F4\u5145\u6027 : \u5728\u7CFB\u7D71\u65E5\u76CA\u589E\u5927\uFF0C\u53EF\u64F4\u5145\u6027\u8207\u7DAD\u8B77\u6027\uFF0C\u589E\u52A0\u7CFB\u7D71\u7684\u9748\u6D3B\u6027\u8207\u64F4\u5145\u6027\r
4. \u7D71\u4E00\u601D\u8DEF :\u5982\u679C\u5927\u5BB6\u90FD\u4EE5\u8A2D\u8A08\u6A21\u5F0F\u70BA\u4E3B\u8EF8\uFF0C\u90A3\u5C07\u6709\u52A9\u65BC\u5225\u4EBA\u66F4\u5FEB\u7684\u7406\u89E3\u7CFB\u7D71\r
`,wt="\u{1F4A1}3. \u8A2D\u8A08\u6A21\u5F0F\u6982\u8FF0(\u4E09)";function Lt(){return u("Chicken Say Hi | \u{1F4A1} 3. \u8A2D\u8A08\u6A21\u5F0F\u6982\u8FF0(\u4E09)"),t(s,{children:[n(o,{}),n(l,{backPath:r.DesignPattern,title:wt,text:At})]})}const Tt=`# [\u8A2D\u8A08\u6A21\u5F0F] 1-4 \u7269\u4EF6\u5C0E\u5411\u8A2D\u8A08\u539F\u5247\u6982\u8FF0\r
\r
### \u7269\u4EF6\u5C0E\u5411\u8A2D\u8A08\r
- \u7269\u4EF6\u5C0E\u5411\u8A2D\u8A08\u4E2D\u4E3B\u8981\u76EE\u6A19\u70BA\u589E\u52A0\u7CFB\u7D71\u7684\u53EF\u7DAD\u8B77\u6027\u8207\u8907\u7528\u6027\r
- \u6700\u5E38\u898B\u7684\u7269\u4EF6\u5C0E\u5411\u8A2D\u8A08\u539F\u5247\u70BA SOLID\r
\r
| \u540D\u7A31 | \u5B9A\u7FA9 |\r
| ----- | ----- |\r
| \u55AE\u4E00\u8CAC\u4EFB\u539F\u5247 (SRP) Single Responsibility Principle | \u4E00\u500B\u985E\u5225\u61C9\u8A72\u53EA\u6709\u4E00\u500B\u6539\u8B8A\u7684\u7406\u7531\uFF01 A class should have only one reason to change |\r
| \u958B\u653E\u5C01\u9589\u539F\u5247 (OCP) Open Closed Principle | \u8EDF\u9AD4\u5BE6\u9AD4 (\u985E\u5225\u3001\u6A21\u7D44\u3001\u51FD\u5F0F\u7B49) \u61C9\u80FD\u958B\u653E\u64F4\u5145\u4F46\u5C01\u9589\u4FEE\u6539 Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification |\r
| \u91CC\u6C0F\u66FF\u63DB\u539F\u5247 (LSP) Liskov Substitution Principle| \u5B50\u578B\u5225\u5FC5\u9700\u53EF\u66FF\u63DB\u70BA\u4ED6\u7684\u57FA\u5E95\u578B\u5225 Subtypes must be substitutable for their base types |\r
| \u4ECB\u9762\u9694\u96E2\u539F\u5247 (ISP) Interface Segregation Principle | \u591A\u500B\u7528\u6236\u7AEF\u5C08\u7528\u7684\u4ECB\u9762\u512A\u65BC\u4E00\u500B\u901A\u7528\u9700\u6C42\u4ECB\u9762 Many client specific interfaces are better than one general purpose interface |\r
| \u76F8\u4F9D\u53CD\u8F49\u539F\u5247 (DIP) Dependency Inversion Principle | \u62BD\u8C61\u4E0D\u61C9\u8A72\u76F8\u4F9D\u65BC\u7D30\u7BC0\u3002\u800C\u7D30\u7BC0\u5247\u61C9\u8A72\u76F8\u4F9D\u65BC\u62BD\u8C61 Abstractions should not depend on details. Details should depend on abstractions |\r
`,kt="\u{1F4A1}4. \u7269\u4EF6\u5C0E\u5411\u8A2D\u8A08\u539F\u5247\u6982\u8FF0";function Bt(){return u("Chicken Say Hi | \u{1F4A1} 4. \u7269\u4EF6\u5C0E\u5411\u8A2D\u8A08\u539F\u5247\u6982\u8FF0"),t(s,{children:[n(o,{}),n(l,{backPath:r.DesignPattern,title:kt,text:Tt})]})}const Wt=`### [\u8A2D\u8A08\u6A21\u5F0F] 2-1 \u7269\u4EF6\u5C0E\u5411\u8A2D\u8A08\u539F\u5247-\u55AE\u4E00\u8CAC\u4EFB\u539F\u5247 (single repository principle)\r
\r
## \u55AE\u4E00\u8CAC\u4EFB\u539F\u5247:\r
- \u8CAC\u4EFB(Responsibility)\r
- \u5F37\u8ABF\u9AD8\u5167\u805A\uFF0C\u4F4E\u8026\u5408\r
- \u9700\u5C07\u8CAC\u4EFB\u5C01\u88DD\u65BC\u5404\u500Bclass\u4E4B\u4E2D\r
- \u5982\u679C\u591A\u500B\u8077\u8CAC\u7E3D\u662F\u540C\u6642\u767C\u751F\uFF0C\u53EF\u5C07\u5176\u5C01\u88DD\u65BC\u540C\u4E00class \u4E4B\u4E2D\r
\r
\`\`\`csharp\r
Public class CustomerDataChart{\r
    \r
    // connection\r
    Public void getConnection()\r
    {\r
        //TODO : connection to DB\r
    }\r
    \r
    // Read\r
    Public List<CustomersDto> Read()\r
    {\r
        // TODO : SELECT * FROM Custorm\r
    }\r
\r
    // create\r
    Public void Creat(CustomersDto data)\r
    {\r
        // TODO : create\r
    }\r
\r
    // \u986F\u793A\u5716\u8868\r
    Public void displayChart()\r
    {\r
        // TODO : Show chart\r
    }\r
\r
}\r
\`\`\`\r
\r
\r
### \u7531\u4EE5\u4E0A\u7A0B\u5F0F\u78BC\u53EF\u4EE5\u767C\u73FE\uFF1A\r
- \u4E00\u500Bclass\u4E4B\u4E2D\u5305\u542B\u4E86\r
	- \u8CC7\u6599\u5EAB\u9023\u7DDA\r
	- \u67E5\u8A62\r
	- \u65B0\u589E\r
	- \u4FEE\u6539\r
- \u6B64class\u9055\u80CC\u4E86\u55AE\u4E00\u8077\u8CAC\r
- \u5982\u679C\u9700\u8981\u4FEE\u6539\u8CC7\u6599\u5EAB\u9023\u7DDA\u65B9\u5F0F\r
\r
\r
### \u4EE5\u55AE\u4E00\u8077\u8CAC\u9032\u884C\u91CD\u69CB\r
- \u9996\u5148\u53EF\u4EE5\u5C07\u5176\u5206\u70BA\u4E09\u500BClass\r
	- DBUtil - \u8CC7\u6599\u5EAB\u9023\u7DDA\r
	- CustomerDAO - \u5C0DCustomer\u9032\u884C\u589E\u522A\u6539\u67E5\r
	- CustomerDataChart - \u8CA0\u8CAC\u5716\u8868\u751F\u6210\r
\r
### 1. DBUtil\r
\`\`\`csharp\r
Public class DBUtil\r
{\r
    //DB connection\r
    Public void getConnection()\r
    {\r
        // TODO : connection to db\r
    }\r
}\r
\`\`\`\r
\r
### 2. CustomerDao\r
  \r
\`\`\`csharp\r
Public class CustomerDao\r
{\r
    // Read\r
    Public List<CustomersDTO> Read()\r
    {\r
        // TODO : get data list\r
    }\r
\r
    // Create\r
    Public void Create()\r
    {\r
        // TODO : Create data\r
    }    \r
}\r
\`\`\`\r
\r
### 3. CustomerDataChart  \r
\`\`\`csharp\r
Public class CustomerDataChart\r
{\r
    Public void displayChart()\r
    {\r
        // TODO : show chart\r
    }\r
}\r
\`\`\`\r
\r
### \u5E38\u898B\u554F\u984C:\r
- \u5C07\u6240\u6709\u529F\u80FD\u5BEB\u5728\u540C\u4E00\u500Bclass\r
1. \u9020\u6210 class \u8907\u96DC\u5EA6\u904E\u9AD8\r
2. \u7DAD\u8B77\u6216\u4FEE\u6539\u6642\u627E\u4E0D\u5230\u554F\u984C\r
3. \u4F7F\u7528 class \u6642\u4E0D\u77E5\u9053\u8981\u547C\u53EB\u54EA\u500B function\r
4. \u5207\u5206\u592A\u7D30\u6642\u6703\u9020\u6210\u9AD8\u8026\u5408\u5EA6\u7684\u554F\u984C\r
`,It="\u{1F4A1}1. \u55AE\u4E00\u8CAC\u4EFB\u539F\u5247 (SRP) (single repository principle)";function Mt(){return u("Chicken Say Hi | \u{1F4A1} 1. \u55AE\u4E00\u8CAC\u4EFB\u539F\u5247(SRP)"),t(s,{children:[n(o,{}),n(l,{backPath:r.DesignPattern,title:It,text:Wt})]})}const Rt=`## \u958B\u9589\u539F\u5247:\r
- \u7A0B\u5F0F\u78BC\u90FD\u6709\u53EF\u80FD\u56E0\u70BA\u9700\u6C42\u7684\u589E\u52A0\u9700\u8981\u64F4\u5145\r
- \u800C\u64F4\u5145\u4E0D\u61C9\u8A72\u4FEE\u6539\u539F\u59CB\u7684\u7A0B\u5F0F\u78BC\r
- \u61C9\u8A72\u65B0\u589E\u52A0\u662F\u7A0B\u5F0F\u78BC\u4F86\u64F4\u5145\u539F\u672C\u7684\u7CFB\u7D71\r
\r
### \u53EF\u64F4\u5145\u7684\u4F5C\u6CD5:\r
1. \u900F\u904E\u7E7C\u627F\r
2. C# \u6709\u64F4\u5145\u65B9\u6CD5\r
\r
### \u7BC4\u4F8B: \u9700\u8981\u53EF\u4EE5\u652F\u63F4\u5404\u5F0F\u5716\u8868\r
\r
### 1. \u521D\u671F\u65B9\u6848\r
- \u5713\u9905\u5716\u985E\r
\`\`\`csharp\r
public class PicChart\r
{\r
    public void display()\r
    {\r
        // Create pie chart\r
    }\r
}\r
\`\`\`\r
\r
- \u67F1\u72C0\u5716\u985E\r
\`\`\`csharp\r
public class BarChart \r
{ \r
    public void display() \r
    { \r
        // Create bar chart \r
    } \r
}\r
\`\`\`\r
\r
- service\r
\`\`\`csharp\r
public class ChartService  \r
{ \r
    public void displayChart(string type) \r
    { \r
        switch(type)\r
        {\r
            case type.Equals("pie") :\r
                PicChart chart = new PicChart();\r
                chart.display();\r
            case type.Equals("bar") : \r
                BarChart chart = new BarChart(); \r
                chart.display();\r
        }\r
    } \r
}\r
\`\`\`\r
\r
### 2. \u4F7F\u7528OCP\u539F\u5247\u91CD\u69CB\r
- \u5716\u8868\u4ECB\u9762\r
\`\`\`csharp\r
public interface IChart\r
{\r
    void display();\r
}\r
\`\`\`\r
\r
- \u5713\u9905\u5716\u985E\r
\`\`\`csharp\r
public class PicChart : IChart\r
{\r
    public void display()\r
    {\r
        // Create pie chart\r
    }\r
}\r
\`\`\`\r
\r
- \u67F1\u72C0\u5716\u985E\r
\`\`\`csharp\r
public class BarChart : IChart\r
{\r
    public void display()\r
    {\r
        // Create bar chart \r
    }\r
}\r
\`\`\`\r
\r
\r
- service\r
\`\`\`csharp\r
public class ChartService  \r
{\r
    // \u5DE5\u5EE0\u6A21\u5F0F\r
    private IChart SetChart(string type)\r
    {        \r
        switch(type) \r
        { \r
            case type.Equals("pie") : \r
                return new PicChart();\r
            case type.Equals("bar") :\r
               return new BarChart();\r
            default\r
                throw new NotImplementedException();\r
        }\r
    }\r
\r
    public void displayChart(string type) \r
    {\r
        IChart chart = SetChart(type);\r
        chart.display();\r
    }\r
}\r
\`\`\`\r
`,Gt="\u{1F4A1}2. \u958B\u9589\u539F\u5247 (OCP)  (open closed principle)";function Nt(){return u("Chicken Say Hi | \u{1F4A1} 2.\u958B\u9589\u539F\u5247 (OCP)"),t(s,{children:[n(o,{}),n(l,{backPath:r.DesignPattern,title:Gt,text:Rt})]})}const jt=`## \u91CC\u6C0F\u66FF\u63DB\u539F\u5247:\r
- \u5B50\u985E\u5225\u53EF\u4EE5\u64F4\u5145\u7236\u985E\u7684\u529F\u80FD\uFF0C\u4F46\u4E0D\u53EF\u4EE5\u6539\u8B8A\u5B83\u539F\u6709\u7684\u529F\u80FD\r
- \u5BE6\u4F5C\u7E7C\u627F\u5F8C\uFF0C\u9700\u8981\u78BA\u4FDD\u4ED6\u7684\u578B\u5225\u88AB\u8F49\u63DB\u5F8C\u9084\u53EF\u4EE5\u7372\u5F97\u6B63\u78BA\u7684\u7D50\u679C\r
- \u53EA\u6709\u5728\u985E\u5225\u4E4B\u9593\u662Fis-a\u95DC\u4FC2\u6642\u624D\u80FD\u7528\u7E7C\u627F\r
\r
### \u4ED6\u5FC5\u9808\u7B26\u5408\u56DB\u500B\u7E7C\u627F\u7684\u898F\u7BC4:\r
1. \u5B8C\u5168\u5BE6\u4F5C\u7236\u985E\u7684\u65B9\u6CD5\r
2. \u5B50\u985E\u5225\u53EF\u4EE5\u64C1\u6709\u4ED6\u81EA\u5DF1\u7684\u7279\u6027\r
3. Overload \u6642\u8981\u6CE8\u610F\u50B3\u5165\u53C3\u6578\u578B\u5225\u7684\u7236\u5B50\u95DC\u4FC2\r
4. \u8F38\u51FA\u7684\u7236\u5B50\u95DC\u4FC2\u4E5F\u9700\u8981\u6CE8\u610F`,$t="\u{1F4A1}3. \u91CC\u6C0F\u66FF\u63DB\u539F\u5247(Lsp) (Liskov substitution principle)";function Ot(){return u("Chicken Say Hi | \u{1F4A1} 3. \u91CC\u6C0F\u66FF\u63DB\u539F\u5247 (Liskov substitution principle)"),t(s,{children:[n(o,{}),n(l,{backPath:r.DesignPattern,title:$t,text:jt})]})}const Ht="",qt="\u{1F4A1}4. \u4ECB\u9762\u9694\u96E2\u539F\u5247 (ISP) (interface segregation principle)";function Kt(){return u("Chicken Say Hi | \u{1F4A1} 4. \u4ECB\u9762\u9694\u96E2\u539F\u5247 (interface segregation principle)"),t(s,{children:[n(o,{}),n(l,{backPath:r.DesignPattern,title:qt,text:Ht})]})}const Vt=`## \u4F9D\u8CF4\u53CD\u8F49\u539F\u5247:\r
\r
- \u62BD\u8C61\u4E0D\u61C9\u8A72\u4F9D\u8CF4\u65BC\u7D30\u7BC0\uFF0C\u7D30\u7BC0\u5247\u61C9\u8A72\u8981\u4F9D\u8CF4\u65BC\u62BD\u8C61\r
- \u56E0\u6B64\u6211\u5011\u9700\u8981\u5148\u5BEB\u51FA\u62BD\u8C61\u4ECB\u9762\uFF0C\u5728\u5BE6\u4F5C\u529F\u80FD\r
- \u6240\u6709\u985E\u5225\u90FD\u8981\u76F8\u4F9D\u65BC\u62BD\u8C61\uFF0C\u800C\u4E0D\u662F\u5177\u9AD4\u7684\u5BE6\u4F5C\r
- \u53EF\u900F\u904E DI Container \u9054\u5230\u76EE\u7684\r
- \u70BA\u4E86\u9054\u5230\u4F4E\u8026\u5408\u7684\u76EE\u7684\r
	- \u6240\u6709\u7684\u985E\u5225\u4E4B\u9593\u90FD\u9700\u8981\u900F\u904E\u62BD\u8C61\u4ECB\u9762\r
\r
\r
### \u7BC4\u4F8B:\r
\r
- controller:\r
\`\`\`csharp\r
public class UserController\r
{\r
   private readonly IUserService userService\r
    // DI\r
    public UserController( IUserService userService )\r
    {\r
        this.userService = userService;\r
    }\r
}\r
\`\`\`\r
\r
- service :\r
\`\`\`csharp\r
public interface IUserService\r
{\r
    //define function\r
}\r
\r
public class UserService:IUserService\r
{ \r
    // Do something\r
\r
}\r
\`\`\`\r
\r
\r
\r
`,Ut="\u{1F4A1}5. \u4F9D\u8CF4\u53CD\u8F49\u539F\u5247 (DIP) (dependency inversion principle)";function _t(){return u("Chicken Say Hi | \u{1F4A1} 5. \u4F9D\u8CF4\u53CD\u8F49\u539F\u5247 (dependency inversion principle)"),t(s,{children:[n(o,{}),n(l,{backPath:r.DesignPattern,title:Ut,text:Vt})]})}const zt=`## \u5DE5\u5EE0\u6A21\u5F0F:\r
- \u5DE5\u5EE0\u6A21\u5F0F\u662F\u6700\u5E38\u7528\u7684\u4E00\u7A2E\u8A2D\u8A08\u6A21\u5F0F\r
- \u6211\u5011\u901A\u5E38\u6307\u7684\u5DE5\u5EE0\u6A21\u5F0F\u6307 \u5DE5\u5EE0\u65B9\u6CD5\u6A21\u5F0F\r
- \u7C21\u55AE\u5DE5\u5834\u5247\u662F\u5728\u8EDF\u9AD4\u4E4B\u4E2D\uFF0C\u4F7F\u7528\u7684\u5341\u5206\u5E73\u51E1\r
\r
\r
### \u7BC4\u4F8B: \u5C07\u5716\u8868\u529F\u80FD\u5C01\u88DD\u5728\u4E00\u500BChart\u985E\u5225\u4E2D\r
\r
\`\`\`csharp\r
public class Chart {\r
    private string type;\r
\r
    public Chart(object[][] data, string type)\r
    {\r
        this.type = type;\r
        if( type == "histogram")\r
        {\r
            // init \u67F1\u72C0\u5716\r
        }\r
        else if( type == "pie") \r
        { \r
            // init \u5713\u9905\u5716 \r
        }\r
        else if( type == "line")  \r
        { \r
            // init \u6298\u7DDA\u5716  \r
        }\r
    }\r
\r
    public void display()\r
    {\r
         if( type == "histogram") \r
        { \r
            // \u986F\u793A \u67F1\u72C0\u5716 \r
        } \r
        else if( type == "pie")  \r
        {\r
            // \u986F\u793A \u5713\u9905\u5716  \r
        } \r
        else if( type == "line")   \r
        { \r
            // \u986F\u793A \u6298\u7DDA\u5716   \r
        }\r
    }\r
}\r
\`\`\`\r
\r
\r
\u7F3A\u9EDE:\r
\r
1. Chart \u88E1\u9762\u5B58\u5728\u8457\u975E\u5E38\u591A\u7684 \`if - else\` \uFF0Ccode \u975E\u5E38\u7684\u58DF\u9577\u3001\u96E3\u4EE5\u95B1\u8B80\uFF0C\u4E26\u4E14\u96E3\u4EE5\u7DAD\u8B77\u8207\u6E2C\u8A66\uFF0C\u5C24\u5176\u7D93\u904E\u5927\u91CF\u7684\u689D\u4EF6\u53E5\u5F8C\u4E5F\u6703\u5C0D\u6548\u80FD\u9020\u6210\u5F71\u97FF\r
2. \u800C\u4E14\u5C07\u521D\u59CB\u5316\u90FD\u96C6\u4E2D\u5728\u4E00\u500Bclass\u4E2D\u9055\u53CD\u4E86\u55AE\u4E00\u539F\u5247\uFF0C\u4E0D\u5229\u65BC\u7A0B\u5F0F\u78BC\u7684\u91CD\u7528\u6027\u8207\u7DAD\u8B77\r
3. \u7576\u9700\u8981\u65B0\u589E\u65B0\u7684 Chart \u6642\uFF0C\u9700\u8981\u4FEE\u6539 Chart class\uFF0C\u9055\u53CD\u4E86\u958B\u9589\u539F\u5247\r
4. \u5BA2\u6236\u7AEF\u53EA\u80FD\u900F\u904E \` new \` \u95DC\u9375\u5B57\u4F86\u5BE6\u4F8B\u5316 Chart \uFF0CChart class\u8207\u5BA2\u6236\u7AEF\u8026\u5408\u5EA6\u9AD8\uFF0C\u5BE6\u4F8B\u5316\u8207\u7269\u4EF6\u7121\u6CD5\u5206\u96E2\r
5. \u5BA2\u6236\u7AEF\u5982\u679C\u60F3\u8981\u66F4\u5F48\u6027\u7684\u4F7F\u7528 Chart \u7684\u8A71\uFF0C\u6BD4\u5982\u8AAA:\u984F\u8272\u3001\u9AD8\u5EA6\u7B49\u7B49\uFF0C\u69CB\u9020\u51FD\u6578\u5247\u7121\u63D0\u4F9B\u521D\u59CB\u5316\u7684\u529F\u80FD\uFF0C\u90A3\u6BCF\u6B21\u90FD\u5F97\u7531\u5BA2\u6236\u7AEF\u4F86\u5B8C\u6210\uFF0C\u90A3\u5BB9\u6613\u9020\u6210\u5927\u91CF\u91CD\u8907\u7684\u7A0B\u5F0F\u78BC\r
\r
\u4EE5\u4E0A\u6703\u6210 \u9AD8\u8026\u5408\uFF0C\u591A\u8077\u8CAC\uFF0C\u56E0\u6B64\u5EF6\u4F38\u51FA\u4E86\u7C21\u55AE\u5DE5\u5EE0\u8A2D\u8A08\u6A21\u5F0F\uFF0C\u4ED6\u5728\u4E00\u5B9A\u7684\u7A0B\u5EA6\u4E0A\u89E3\u6C7A\u4E86\u4EE5\u4E0A\u7684\u554F\u984C\r
`,Jt="\u{1F4A1}1. \u5DE5\u5EE0\u65B9\u6CD5 (Factory Method Pattern)";function Xt(){return u("Chicken Say Hi | \u{1F4A1} 1. \u5DE5\u5EE0\u65B9\u6CD5 (Factory Method Pattern)"),t(s,{children:[n(o,{}),n(l,{backPath:r.DesignPattern,title:Jt,text:zt})]})}const Yt=`## \u7C21\u55AE\u5DE5\u5EE0\u6982\u8FF0:\r
- \u4ED6\u4E0D\u5C6C\u65BCGoF 23\u7D93\u5178\u8A2D\u8A08\u6A21\u5F0F\r
- \u4E0D\u904E\u4ED6\u5E38\u5E38\u88AB\u62FF\u4F86\u7576\u4F5C\u5B78\u7FD2\u5176\u4ED6\u5DE5\u5EE0\u6A21\u5F0F\u7684\u57FA\u790E\r
- \u4E3B\u8981\u6982\u5FF5\u70BA: \u50B3\u5165\u6B63\u78BA\u53C3\u6578\uFF0C\u5C31\u53EF\u4EE5\u7372\u5F97\u6240\u9700\u8981\u7684\u7269\u4EF6\uFF0C\u800C\u4E14\u4E0D\u9700\u77E5\u9053\u7D30\u7BC0\r
- \u7531\u65BC\u5EFA\u7ACB\u7269\u4EF6\u901A\u5E38\u7531\u975C\u614B\u51FD\u5F0F\u5BE6\u73FE\uFF0C\u56E0\u6B64\u53C8\u7A31 \`\u975C\u614B\u5DE5\u5EE0\u65B9\u6CD5\`\r
\r
### \u7BC4\u4F8B: \r
### 1. \u5EFA\u7ACB\u5831\u8868\u4ECB\u9762\r
\r
\`\`\`csharp\r
public interface IChart {\r
     void display();\r
}\r
\`\`\`\r
\r
### 2. \u5BE6\u4F5C\u4ECB\u9762\r
\r
\`\`\`csharp\r
public class HistogramChart:IChart {\r
    public void display()\r
    {\r
       // \u986F\u793A \u67F1\u72C0\u5716 \r
    }\r
}\r
\r
public class PiChart:IChart {\r
    public void display()\r
    {\r
        // \u986F\u793A \u5713\u9905\u5716  \r
    }\r
}\r
\r
public class LineChart:IChart {\r
    public void display()\r
    {\r
        // \u986F\u793A \u6298\u7DDA\u5716   \r
    }\r
}\r
\`\`\`\r
\r
### 3. \u5EFA\u7ACB\u5217\u8209\r
\`\`\`csharp\r
public enum ChartType\r
{\r
    histogram,\r
    pie,\r
    line\r
}\r
\`\`\`\r
\r
### 4. \u5DE5\u5EE0\u985E\u5225\r
\r
\`\`\`csharp\r
public class Factory {\r
    // \u975C\u614B\u5DE5\u5EE0\u65B9\u6CD5   \r
   public static IChart GetChart(ChartType chartType)\r
   {\r
    switch (chartType)\r
    {\r
        case ChartType.histogram :\r
            return new HistogramChart();\r
        case ChartType.pie :\r
            return new PiChart();\r
        case ChartType.line :\r
            return new LineChart();\r
        default:\r
        throw new Exception("\u7121\u6B64\u985E\u578B\u7684\u5831\u8868!");\r
    }\r
   }\r
}\r
\`\`\`\r
\r
### 5. \u5BE6\u969B\u4F7F\u7528\r
\`\`\`csharp\r
void Main()\r
{\r
    // \u67F1\u72C0\u5716\r
    Factory.GetChart(ChartType.histogram).display();\r
    // \u5713\u9905\u5716\r
    Factory.GetChart(ChartType.pie).display();\r
    // \u6298\u7DDA\u5716\r
    Factory.GetChart(ChartType.line).display();\r
}\r
\`\`\`\r
\r
## \u7C21\u55AE\u5DE5\u5EE0\u89D2\u8272:\r
### \u7531\u7C21\u55AE\u5DE5\u5EE0\u7684\u7D50\u69CB\u4E2D\uFF0C\u53EF\u4EE5\u6B78\u7D0D\u51FA\u4EE5\u4E0B\u5E7E\u500B\u89D2\u8272\r
1. \u5DE5\u5EE0\u89D2\u8272 \`Factory\` : \r
   - \u4ED6\u662F\u6574\u500B\u6A21\u5F0F\u7684\u6838\u5FC3\uFF0C\u8CA0\u8CAC\u5BE6\u73FE\u6240\u6709\u7522\u54C1\r
   - \u61C9\u8A72\u70BA\u975C\u614B\u65B9\u6CD5\r
   - \u5FC5\u9808\u56DE\u50B3\u62BD\u8C61\u985E\u5225\r
2. \u62BD\u8C61\u7522\u54C1\u89D2\u8272 \`Product\` :\r
   - \u70BA\u6240\u6709\u5546\u54C1\u7684\u7236\u985E\r
   - \u4ED6\u5FC5\u9808\u5B9A\u7FA9\u6240\u6709\u5546\u54C1\u7684\u898F\u683C\r
   - \u4E5F\u6703\u662F\u5DE5\u5EE0\u56DE\u50B3\u7684\u5C0D\u8C61\r
3. \u5BE6\u969B\u7522\u54C1\u89D2\u8272 \`Concrete\` :\r
   - \u662F\u5DE5\u5EE0\u89D2\u8272\u5BE6\u73FE\u7684\u76EE\u6A19\r
   - \u5FC5\u9808\u7E7C\u627F\u4E26\u5BE6\u4F5C\u62BD\u8C61\u7522\u54C1\r
\r
> \u7531\u65BC\u9700\u8981\u5C0D\u62BD\u8C61\u5546\u54C1\u9032\u884C\u91CD\u69CB\\\r
> \u56E0\u6B64\u5546\u54C1\u898F\u683C\u4E0D\u53EF\u4EE5\u5305\u5C71\u5305\u6D77\\\r
> \u61C9\u8A72\u70BA\u55AE\u4E00\u5C64\u6B21\u7684\u7D50\u69CB`,Qt="\u{1F4A1}2. \u7C21\u55AE\u5DE5\u5EE0 (Simple Factory Pattern)";function Zt(){return u("Chicken Say Hi | \u{1F4A1} 2. \u7C21\u55AE\u5DE5\u5EE0 (Simple Factory Pattern)"),t(s,{children:[n(o,{}),n(l,{backPath:r.DesignPattern,title:Qt,text:Yt})]})}function ni(){return t(H,{children:[n(e,{path:r.Home.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(X,{})})}),n(e,{path:r.Portfolio.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(ln,{})})}),n(e,{path:r.About.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(je,{})})}),n(e,{path:r.P5Js.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(mn,{})})}),n(e,{path:r.LineAndLoop.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(dn,{})})}),n(e,{path:r.MapFunc.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(yn,{})})}),n(e,{path:r.Gradient.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(Sn,{})})}),n(e,{path:r.Wave.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(fn,{})})}),n(e,{path:r.MethodArc.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(En,{})})}),n(e,{path:r.PhaserPage.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(wn,{})})}),n(e,{path:r.RpgGameV1.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(kn,{})})}),n(e,{path:r.D1Ph3.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(In,{})})}),n(e,{path:r.D2Ph3.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(Gn,{})})}),n(e,{path:r.D3Ph3.toString(),element:n(a,{}),children:n(e,{index:!0,element:n($n,{})})}),n(e,{path:r.D4Ph3.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(qn,{})})}),n(e,{path:r.D5Ph3.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(Un,{})})}),n(e,{path:r.D6Ph3.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(Jn,{})})}),n(e,{path:r.D7Ph3.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(Qn,{})})}),n(e,{path:r.IronMan13.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(nr,{})})}),n(e,{path:r.D1no13.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(W,{})})}),n(e,{path:r.D1no13.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(W,{})})}),n(e,{path:r.D2no13.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(sr,{})})}),n(e,{path:r.D3no13.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(ur,{})})}),n(e,{path:r.D4no13.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(mr,{})})}),n(e,{path:r.D5no13.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(dr,{})})}),n(e,{path:r.D6no13.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(yr,{})})}),n(e,{path:r.D7no13.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(Sr,{})})}),n(e,{path:r.D8no13.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(fr,{})})}),n(e,{path:r.D9no13.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(Er,{})})}),n(e,{path:r.D10no13.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(Lr,{})})}),n(e,{path:r.D11no13.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(Br,{})})}),n(e,{path:r.D12no13.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(Mr,{})})}),n(e,{path:r.D13no13.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(Nr,{})})}),n(e,{path:r.D14no13.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(Or,{})})}),n(e,{path:r.D15no13.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(Kr,{})})}),n(e,{path:r.D16no13.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(_r,{})})}),n(e,{path:r.D17no13.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(Xr,{})})}),n(e,{path:r.D18no13.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(Zr,{})})}),n(e,{path:r.D19no13.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(ee,{})})}),n(e,{path:r.D20no13.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(se,{})})}),n(e,{path:r.D21no13.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(ue,{})})}),n(e,{path:r.D22no13.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(me,{})})}),n(e,{path:r.D23no13.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(de,{})})}),n(e,{path:r.D24no13.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(ye,{})})}),n(e,{path:r.D25no13.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(Se,{})})}),n(e,{path:r.D26no13.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(fe,{})})}),n(e,{path:r.D27no13.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(Ee,{})})}),n(e,{path:r.D28no13.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(Le,{})})}),n(e,{path:r.D29no13.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(Be,{})})}),n(e,{path:r.D30no13.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(Me,{})})}),n(e,{path:r.D31no13.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(Ne,{})})}),n(e,{path:r.CsharpEventHome.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(Oe,{})})}),n(e,{path:r.CsDelegate1.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(Ke,{})})}),n(e,{path:r.CsDelegate2.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(_e,{})})}),n(e,{path:r.CsDelegate3.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(Xe,{})})}),n(e,{path:r.CsDelegate4.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(Ze,{})})}),n(e,{path:r.CsDelegate5.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(et,{})})}),n(e,{path:r.CsDelegate6.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(st,{})})}),n(e,{path:r.CsDelegate7.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(ut,{})})}),n(e,{path:r.OAuthNote.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(ct,{})})}),n(e,{path:r.OAuthNote1.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(gt,{})})}),n(e,{path:r.UnitNote.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(pt,{})})}),n(e,{path:r.UnitNote1.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(xt,{})})}),n(e,{path:r.DesignPattern.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(St,{})})}),n(e,{path:r.DPOverview1.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(ft,{})})}),n(e,{path:r.DPOverview2.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(Et,{})})}),n(e,{path:r.DPOverview3.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(Lt,{})})}),n(e,{path:r.DPOopOverview.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(Bt,{})})}),n(e,{path:r.SRP.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(Mt,{})})}),n(e,{path:r.OCP.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(Nt,{})})}),n(e,{path:r.LSP.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(Ot,{})})}),n(e,{path:r.ISP.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(Kt,{})})}),n(e,{path:r.DIP.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(_t,{})})}),n(e,{path:r.FMP.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(Xt,{})})}),n(e,{path:r.SFP.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(Zt,{})})}),n(e,{path:r.Continue.toString(),element:n(a,{}),children:n(e,{index:!0,element:n(Q,{})})}),n(e,{path:"*",element:n(q,{to:"/"})})]})}const ri="G-23JXYZ7T1V",I="true",ei=()=>{console.log(I),R.initialize(ri,{testMode:!I})},ti=i=>{R.send({hitType:"pageview",page:i})};function ii(){const i=K();L.useEffect(()=>{ei()},[]),L.useEffect(()=>{const m=i.pathname+i.search;ti(m)},[i])}function si(){return ii(),n(s,{children:n(ni,{})})}const ai=N.createRoot(document.getElementById("root"));ai.render(n(j,{children:n(si,{})}));
