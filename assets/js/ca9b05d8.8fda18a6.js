"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[4777],{49613:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var o=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),i=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=i(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=i(r),k=a,m=p["".concat(s,".").concat(k)]||p[k]||u[k]||n;return r?o.createElement(m,l(l({ref:t},d),{},{components:r})):o.createElement(m,l({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=k;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,l[1]=c;for(var i=2;i<n;i++)l[i]=r[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}k.displayName="MDXCreateElement"},18567:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>c,toc:()=>i});var o=r(88028),a=(r(59496),r(49613));const n={sidebar_position:12,description:"\u5728 Linux \u5e95\u4e0b\u5b89\u88dd Docker",key:["Docker","tool","\u865b\u64ec\u5bb9\u5668","Linux"],tags:["Docker","\u5de5\u5177"]},l="\ud83d\udc33 Docker \u5b89\u88dd (Linux)",c={unversionedId:"daylilyTool/toolDocker/setDockerInLinux",id:"daylilyTool/toolDocker/setDockerInLinux",title:"\ud83d\udc33 Docker \u5b89\u88dd (Linux)",description:"\u5728 Linux \u5e95\u4e0b\u5b89\u88dd Docker",source:"@site/docs/daylilyTool/toolDocker/setDockerInLinux.md",sourceDirName:"daylilyTool/toolDocker",slug:"/daylilyTool/toolDocker/setDockerInLinux",permalink:"/docs/daylilyTool/toolDocker/setDockerInLinux",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/daylilyTool/toolDocker/setDockerInLinux.md",tags:[{label:"Docker",permalink:"/docs/tags/docker"},{label:"\u5de5\u5177",permalink:"/docs/tags/\u5de5\u5177"}],version:"current",lastUpdatedAt:1729561312,formattedLastUpdatedAt:"2024\u5e7410\u670822\u65e5",sidebarPosition:12,frontMatter:{sidebar_position:12,description:"\u5728 Linux \u5e95\u4e0b\u5b89\u88dd Docker",key:["Docker","tool","\u865b\u64ec\u5bb9\u5668","Linux"],tags:["Docker","\u5de5\u5177"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc33 Docker \u5b89\u88dd",permalink:"/docs/daylilyTool/toolDocker/setDockerInWin"},next:{title:"\ud83d\udc33 \u532f\u5165\u532f\u51fa Image",permalink:"/docs/daylilyTool/toolDocker/saveImage"}},s={},i=[{value:"\u74b0\u5883",id:"\u74b0\u5883",level:2},{value:"\u958b\u59cb\u5b89\u88dd",id:"\u958b\u59cb\u5b89\u88dd",level:2},{value:"1. \u66f4\u65b0 apt",id:"1-\u66f4\u65b0-apt",level:3},{value:"2. \u5b89\u88dd docker",id:"2-\u5b89\u88dd-docker",level:3},{value:"3. \u5c07 docker \u52a0\u5165\u670d\u52d9",id:"3-\u5c07-docker-\u52a0\u5165\u670d\u52d9",level:3},{value:"4. \u78ba\u8a8d\u670d\u52d9\u72c0\u614b",id:"4-\u78ba\u8a8d\u670d\u52d9\u72c0\u614b",level:3},{value:"5. \u5c07\u4f7f\u7528\u8005\u6b0a\u9650\u52a0\u5165 docker",id:"5-\u5c07\u4f7f\u7528\u8005\u6b0a\u9650\u52a0\u5165-docker",level:3},{value:"\u5b89\u88dd docker compose",id:"\u5b89\u88dd-docker-compose",level:2},{value:"\u8a2d\u5b9a Docker apt repository",id:"\u8a2d\u5b9a-docker-apt-repository",level:3},{value:"Install the Docker packages",id:"install-the-docker-packages",level:3},{value:"\u6aa2\u67e5\u7248\u672c",id:"\u6aa2\u67e5\u7248\u672c",level:3},{value:"REF",id:"ref",level:2}],d={toc:i},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-docker-\u5b89\u88dd-linux"},"\ud83d\udc33 Docker \u5b89\u88dd (Linux)"),(0,a.kt)("h2",{id:"\u74b0\u5883"},"\u74b0\u5883"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ubuntu")),(0,a.kt)("h2",{id:"\u958b\u59cb\u5b89\u88dd"},"\u958b\u59cb\u5b89\u88dd"),(0,a.kt)("h3",{id:"1-\u66f4\u65b0-apt"},"1. \u66f4\u65b0 apt"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update -y\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install curl -y\n")),(0,a.kt)("h3",{id:"2-\u5b89\u88dd-docker"},"2. \u5b89\u88dd docker"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install docker.io\n")),(0,a.kt)("h3",{id:"3-\u5c07-docker-\u52a0\u5165\u670d\u52d9"},"3. \u5c07 docker \u52a0\u5165\u670d\u52d9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl start docker\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable docker\n")),(0,a.kt)("h3",{id:"4-\u78ba\u8a8d\u670d\u52d9\u72c0\u614b"},"4. \u78ba\u8a8d\u670d\u52d9\u72c0\u614b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"service docker status\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6b63\u5e38\u7684\u8a71\u53ef\u4ee5\u770b\u5230\u7da0\u8272\u7684\u72c0\u614b")),(0,a.kt)("h3",{id:"5-\u5c07\u4f7f\u7528\u8005\u6b0a\u9650\u52a0\u5165-docker"},"5. \u5c07\u4f7f\u7528\u8005\u6b0a\u9650\u52a0\u5165 docker"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo groupadd docker\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo gpasswd -a $USER docker\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo usermod -aG docker $USER\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u57f7\u884c\u5b8c\u9700\u8981\u767b\u51fa\u5f8c\u624d\u6703\u751f\u6548")),(0,a.kt)("h2",{id:"\u5b89\u88dd-docker-compose"},"\u5b89\u88dd docker compose"),(0,a.kt)("h3",{id:"\u8a2d\u5b9a-docker-apt-repository"},"\u8a2d\u5b9a Docker apt repository"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Add Docker\'s official GPG key:\nsudo apt-get update\nsudo apt-get install ca-certificates curl\nsudo install -m 0755 -d /etc/apt/keyrings\nsudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc\nsudo chmod a+r /etc/apt/keyrings/docker.asc\n\n# Add the repository to Apt sources:\necho \\\n  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \\\n  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \\\n  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\nsudo apt-get update\n')),(0,a.kt)("h3",{id:"install-the-docker-packages"},"Install the Docker packages"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install docker-compose-plugin\n")),(0,a.kt)("h3",{id:"\u6aa2\u67e5\u7248\u672c"},"\u6aa2\u67e5\u7248\u672c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose version\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"ref"},"REF"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://hackmd.io/hux5UiziTlyoNbj7EOBxQQ?view"},"\u6881\u5927\u54e5\u7b46\u8a18")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository"},"docker \u5b98\u7db2"))))}u.isMDXComponent=!0}}]);