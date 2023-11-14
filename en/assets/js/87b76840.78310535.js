"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[7296],{49613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(59496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=l,m=p["".concat(c,".").concat(d)]||p[d]||k[d]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:l,a[1]=i;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(88028),l=(n(59496),n(49613));const o={sidebar_position:10,description:"\u5728 windows \u5e95\u4e0b\u5b89\u88dd Docker",key:["Docker","tool","\u865b\u64ec\u5bb9\u5668","windows"],tags:["Docker","\u5de5\u5177"]},a="\ud83d\udc33 Docker \u5b89\u88dd",i={unversionedId:"daylilyTool/toolDocker/setDockerInWin",id:"daylilyTool/toolDocker/setDockerInWin",title:"\ud83d\udc33 Docker \u5b89\u88dd",description:"\u5728 windows \u5e95\u4e0b\u5b89\u88dd Docker",source:"@site/docs/daylilyTool/toolDocker/setDockerInWin.md",sourceDirName:"daylilyTool/toolDocker",slug:"/daylilyTool/toolDocker/setDockerInWin",permalink:"/en/docs/daylilyTool/toolDocker/setDockerInWin",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/daylilyTool/toolDocker/setDockerInWin.md",tags:[{label:"Docker",permalink:"/en/docs/tags/docker"},{label:"\u5de5\u5177",permalink:"/en/docs/tags/\u5de5\u5177"}],version:"current",lastUpdatedAt:1699970344,formattedLastUpdatedAt:"Nov 14, 2023",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"\u5728 windows \u5e95\u4e0b\u5b89\u88dd Docker",key:["Docker","tool","\u865b\u64ec\u5bb9\u5668","windows"],tags:["Docker","\u5de5\u5177"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc33 Docker \u5e38\u7528\u6307\u4ee4",permalink:"/en/docs/daylilyTool/toolDocker/commonDirectives"},next:{title:"\ud83d\udc33 \u532f\u5165\u532f\u51fa Image",permalink:"/en/docs/daylilyTool/toolDocker/saveImage"}},c={},u=[{value:"\u5728 Windows \u5e95\u4e0b\u5b89\u88dd Docker",id:"\u5728-windows-\u5e95\u4e0b\u5b89\u88dd-docker",level:2},{value:"1. \u555f\u7528\u865b\u64ec\u6a5f Hyper-V",id:"1-\u555f\u7528\u865b\u64ec\u6a5f-hyper-v",level:2},{value:"2. \u5b89\u88dd Docker Desktop",id:"2-\u5b89\u88dd-docker-desktop",level:2},{value:"\u555f\u52d5\u5f8c\u51fa\u73fe WSL \u7248\u672c\u904e\u4f4e",id:"\u555f\u52d5\u5f8c\u51fa\u73fe-wsl-\u7248\u672c\u904e\u4f4e",level:3},{value:"\u65b0\u589e wsl \u8a18\u61b6\u9ad4\u9650\u5236",id:"\u65b0\u589e-wsl-\u8a18\u61b6\u9ad4\u9650\u5236",level:3},{value:"3. \u555f\u52d5",id:"3-\u555f\u52d5",level:2}],s={toc:u},p="wrapper";function k(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"-docker-\u5b89\u88dd"},"\ud83d\udc33 Docker \u5b89\u88dd"),(0,l.kt)("h2",{id:"\u5728-windows-\u5e95\u4e0b\u5b89\u88dd-docker"},"\u5728 Windows \u5e95\u4e0b\u5b89\u88dd Docker"),(0,l.kt)("p",null,"\u672c\u6b21\u5b89\u88dd\u74b0\u5883\u65bc Windows11"),(0,l.kt)("h2",{id:"1-\u555f\u7528\u865b\u64ec\u6a5f-hyper-v"},"1. \u555f\u7528\u865b\u64ec\u6a5f Hyper-V"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u958b\u59cb > \u8b8a\u66f4\u5e33\u6236\u8a2d\u5b9a > \u61c9\u7528\u7a0b\u5f0f > \u9078\u7528\u529f\u80fd > \u66f4\u591a Windows \u529f\u80fd",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5728\u9019\u500b\u5730\u65b9\u627e\u5230 ",(0,l.kt)("inlineCode",{parentName:"li"},"hyper-v")," \u5c07\u4ed6\u555f\u7528")))),(0,l.kt)("h2",{id:"2-\u5b89\u88dd-docker-desktop"},"2. \u5b89\u88dd Docker Desktop"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.docker.com/products/docker-desktop/"},"\u5b98\u7db2\u9023\u7d50")),(0,l.kt)("li",{parentName:"ul"},"\u4e0b\u8f09\u5f8c\u76f4\u63a5\u57f7\u884c\u5b89\u88dd\u6a94 ",(0,l.kt)("inlineCode",{parentName:"li"},"Docker Desktop Installer.exe"))),(0,l.kt)("h3",{id:"\u555f\u52d5\u5f8c\u51fa\u73fe-wsl-\u7248\u672c\u904e\u4f4e"},"\u555f\u52d5\u5f8c\u51fa\u73fe WSL \u7248\u672c\u904e\u4f4e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6aa2\u67e5 WSL \u7248\u672c\uff0c\u65bc\u7d42\u7aef\u6a5f\u4e2d\u8f38\u5165\u4ee5\u4e0b\u6307\u4ee4")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"    wsl.exe -l -v\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u6709\u5c31\u76f4\u63a5\u66f4\u65b0")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"    wsl --update\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u6c92\u6709\u4efb\u4f55\u7248\u672c\u5c31\u57f7\u884c\u4ee5\u4e0b\u6307\u4ee4")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"    wsl --install\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u756b\u9762\u6703\u986f\u793a\u53ef\u5b89\u88dd\u7248\u672c")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                   FRIENDLY NAME\nUbuntu                                 Ubuntu\nDebian                                 Debian GNU/Linux\nkali-linux                             Kali Linux Rolling\nUbuntu-18.04                           Ubuntu 18.04 LTS\nUbuntu-20.04                           Ubuntu 20.04 LTS\nUbuntu-22.04                           Ubuntu 22.04 LTS\nOracleLinux_7_9                        Oracle Linux 7.9\nOracleLinux_8_7                        Oracle Linux 8.7\nOracleLinux_9_1                        Oracle Linux 9.1\nopenSUSE-Leap-15.5                     openSUSE Leap 15.5\nSUSE-Linux-Enterprise-Server-15-SP4    SUSE Linux Enterprise Server 15 SP4\nSUSE-Linux-Enterprise-15-SP5           SUSE Linux Enterprise 15 SP5\nopenSUSE-Tumbleweed                    openSUSE Tumbleweed\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u672c\u6b21\u9078\u64c7 ",(0,l.kt)("inlineCode",{parentName:"li"},"Ubuntu-22.04"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"    wsl --install -d Ubuntu-22.04\n")),(0,l.kt)("h3",{id:"\u65b0\u589e-wsl-\u8a18\u61b6\u9ad4\u9650\u5236"},"\u65b0\u589e wsl \u8a18\u61b6\u9ad4\u9650\u5236"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65bc ",(0,l.kt)("inlineCode",{parentName:"li"},"C:\\Users\\<user>")," \u5e95\u4e0b\u65b0\u589e\u6587\u6a94 ",(0,l.kt)("inlineCode",{parentName:"li"},".wslconfig"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"[wsl2]\nmemory=6GB\n")),(0,l.kt)("h2",{id:"3-\u555f\u52d5"},"3. \u555f\u52d5"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u958b\u555f Docker Desktop \u756b\u9762\u4e0a\u6c92\u6709\u932f\u8aa4\u8a0a\u606f\u8868\u793a\u5b89\u88dd\u6210\u529f")))}k.isMDXComponent=!0}}]);