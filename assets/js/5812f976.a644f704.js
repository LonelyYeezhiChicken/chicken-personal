"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[6522],{49613:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=p(r),y=o,k=s["".concat(c,".").concat(y)]||s[y]||u[y]||l;return r?n.createElement(k,a(a({ref:t},d),{},{components:r})):n.createElement(k,a({ref:t},d))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},96208:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(88028),o=(r(59496),r(49613));const l={sidebar_position:50,description:"dotnet6 dockerfile",key:["Csharp","\u96dc\u8a18","Docker","Dockerfile"],tags:["C#","C#\u96dc\u8a18","Docker","Dockerfile"]},a="\ud83d\udc69\u200d\ud83d\udcbb dotnet6 \u7684 dockerfile",i={unversionedId:"daylily/csharpDaylily/dotnet6Dockerfile",id:"daylily/csharpDaylily/dotnet6Dockerfile",title:"\ud83d\udc69\u200d\ud83d\udcbb dotnet6 \u7684 dockerfile",description:"dotnet6 dockerfile",source:"@site/docs/daylily/csharpDaylily/dotnet6Dockerfile.md",sourceDirName:"daylily/csharpDaylily",slug:"/daylily/csharpDaylily/dotnet6Dockerfile",permalink:"/docs/daylily/csharpDaylily/dotnet6Dockerfile",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/daylily/csharpDaylily/dotnet6Dockerfile.md",tags:[{label:"C#",permalink:"/docs/tags/c"},{label:"C#\u96dc\u8a18",permalink:"/docs/tags/c-\u96dc\u8a18"},{label:"Docker",permalink:"/docs/tags/docker"},{label:"Dockerfile",permalink:"/docs/tags/dockerfile"}],version:"current",lastUpdatedAt:1698471653,formattedLastUpdatedAt:"2023\u5e7410\u670828\u65e5",sidebarPosition:50,frontMatter:{sidebar_position:50,description:"dotnet6 dockerfile",key:["Csharp","\u96dc\u8a18","Docker","Dockerfile"],tags:["C#","C#\u96dc\u8a18","Docker","Dockerfile"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc69\u200d\ud83d\udcbb \u5224\u65b7\u5b57\u4e32\u662f\u5426\u70ba\u6578\u5b57",permalink:"/docs/daylily/csharpDaylily/csharpCharIsDigit"},next:{title:"\ud83d\udc69\u200d\ud83d\udcbb .NET Framework Self Host",permalink:"/docs/daylily/csharpDaylily/csharpSelfHost"}},c={},p=[{value:"\u5efa\u7acb\u6a94\u6848",id:"\u5efa\u7acb\u6a94\u6848",level:2},{value:"\u5efa\u7acb image",id:"\u5efa\u7acb-image",level:2},{value:"\u555f\u52d5 dotnet6 \u5bb9\u5668",id:"\u555f\u52d5-dotnet6-\u5bb9\u5668",level:2}],d={toc:p},s="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-dotnet6-\u7684-dockerfile"},"\ud83d\udc69\u200d\ud83d\udcbb dotnet6 \u7684 dockerfile"),(0,o.kt)("h2",{id:"\u5efa\u7acb\u6a94\u6848"},"\u5efa\u7acb\u6a94\u6848"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5728\u5c08\u6848\u5e95\u4e0b\u5efa\u7acb\u4e00\u500b\u6a94\u6848 ",(0,o.kt)("inlineCode",{parentName:"p"},"dockerfile"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build-env\nWORKDIR /app\n\n# Copy everything\nCOPY . ./\n# Restore as distinct layers\nRUN dotnet restore\n# Build and publish a release\nRUN dotnet publish -c Release -o out\n\n# Build runtime image\nFROM mcr.microsoft.com/dotnet/aspnet:6.0\nWORKDIR /app\nCOPY --from=build-env /app/out .\nENTRYPOINT ["dotnet", "Foreteller-Backend.dll"]\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5728\u5c08\u6848\u5e95\u4e0b\u5efa\u7acb\u4e00\u500b\u6a94\u6848 ",(0,o.kt)("inlineCode",{parentName:"p"},".dockerignore"),"\uff0c\u4f86\u904e\u6ffe\u7528\u4e0d\u5230\u7684\u6a94\u6848")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"dockerfile\n.dockerignore\n")),(0,o.kt)("h2",{id:"\u5efa\u7acb-image"},"\u5efa\u7acb image"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker build -t dotnet6-app .\n")),(0,o.kt)("h2",{id:"\u555f\u52d5-dotnet6-\u5bb9\u5668"},"\u555f\u52d5 dotnet6 \u5bb9\u5668"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -p 80:3050 dotnet6-app \n")))}u.isMDXComponent=!0}}]);