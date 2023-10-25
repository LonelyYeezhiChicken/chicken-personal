"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[15],{49613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var o=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),i=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=i(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=i(r),k=n,y=d["".concat(c,".").concat(k)]||d[k]||m[k]||l;return r?o.createElement(y,s(s({ref:t},p),{},{components:r})):o.createElement(y,s({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,s=new Array(l);s[0]=k;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:n,s[1]=a;for(var i=2;i<l;i++)s[i]=r[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}k.displayName="MDXCreateElement"},6854:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>a,toc:()=>i});var o=r(88028),n=(r(59496),r(49613));const l={sidebar_position:20,description:"NestJS dockerfile",key:["NestJS","Node","TypeScript","Docker","Docker Compose","Postgresql"],tags:["NestJS","Node","TypeScript","Docker","Docker Compose","Postgresql"]},s="\ud83d\udc69\u200d\ud83d\udcbb NestJS \u7684 Docker Compose",a={unversionedId:"daylily/nestDaylily/useDockerCompose",id:"daylily/nestDaylily/useDockerCompose",title:"\ud83d\udc69\u200d\ud83d\udcbb NestJS \u7684 Docker Compose",description:"NestJS dockerfile",source:"@site/docs/daylily/nestDaylily/useDockerCompose.md",sourceDirName:"daylily/nestDaylily",slug:"/daylily/nestDaylily/useDockerCompose",permalink:"/en/docs/daylily/nestDaylily/useDockerCompose",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/daylily/nestDaylily/useDockerCompose.md",tags:[{label:"NestJS",permalink:"/en/docs/tags/nest-js"},{label:"Node",permalink:"/en/docs/tags/node"},{label:"TypeScript",permalink:"/en/docs/tags/type-script"},{label:"Docker",permalink:"/en/docs/tags/docker"},{label:"Docker Compose",permalink:"/en/docs/tags/docker-compose"},{label:"Postgresql",permalink:"/en/docs/tags/postgresql"}],version:"current",lastUpdatedAt:1698244538,formattedLastUpdatedAt:"Oct 25, 2023",sidebarPosition:20,frontMatter:{sidebar_position:20,description:"NestJS dockerfile",key:["NestJS","Node","TypeScript","Docker","Docker Compose","Postgresql"],tags:["NestJS","Node","TypeScript","Docker","Docker Compose","Postgresql"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc69\u200d\ud83d\udcbb NestJS \u7684 dockerfile",permalink:"/en/docs/daylily/nestDaylily/writeDockerfile"},next:{title:"\ud83d\udc69\u200d\ud83d\udcbb \u5b89\u88dd Swagger",permalink:"/en/docs/daylily/nestDaylily/addSwagger"}},c={},i=[{value:"\u74b0\u5883",id:"\u74b0\u5883",level:2},{value:"Docker Compose \u6e96\u5099",id:"docker-compose-\u6e96\u5099",level:2},{value:"\u64b0\u5beb dockerfile",id:"\u64b0\u5beb-dockerfile",level:3},{value:"\u64b0\u5beb docker-compose.yml",id:"\u64b0\u5beb-docker-composeyml",level:3},{value:"\u555f\u52d5",id:"\u555f\u52d5",level:3}],p={toc:i},d="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-nestjs-\u7684-docker-compose"},"\ud83d\udc69\u200d\ud83d\udcbb NestJS \u7684 Docker Compose"),(0,n.kt)("h2",{id:"\u74b0\u5883"},"\u74b0\u5883"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"NestJs"),(0,n.kt)("li",{parentName:"ul"},"Postgresql")),(0,n.kt)("h2",{id:"docker-compose-\u6e96\u5099"},"Docker Compose \u6e96\u5099"),(0,n.kt)("h3",{id:"\u64b0\u5beb-dockerfile"},"\u64b0\u5beb dockerfile"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u53c3\u8003 ",(0,n.kt)("a",{parentName:"p",href:"https://blog.lychicken.com/docs/daylily/nestDaylily/writeDockerfile"},"\ud83d\udc69\u200d\ud83d\udcbb NestJS \u7684 dockerfile")," \u64b0\u5beb dockerfile")),(0,n.kt)("h3",{id:"\u64b0\u5beb-docker-composeyml"},"\u64b0\u5beb docker-compose.yml"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u5728\u5c08\u6848\u5e95\u4e0b\u5efa\u7acb ",(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yml"},'version: \'3.8\'\nservices:\n  nest-app:\n    container_name: nest-app\n    build:\n      context: .\n      dockerfile: Dockerfile\n    ports:\n      - "80:3050"\n    depends_on:\n      - postgres\n    environment:\n      POSTGRES_HOST: postgres\n      POSTGRES_PORT: 5432\n      POSTGRES_USER: postgres\n      POSTGRES_PASSWORD: test123\n      POSTGRES_DB: [your_database_name]\n\n  postgres:\n    container_name: postgres12\n    image: postgres:12.3\n    environment:\n      POSTGRES_PASSWORD: test123\n    ports:\n      - "5432:5432"\n')),(0,n.kt)("h3",{id:"\u555f\u52d5"},"\u555f\u52d5"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose up\n")))}m.isMDXComponent=!0}}]);