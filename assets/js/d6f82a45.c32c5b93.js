"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[26],{49613:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>h});var r=o(59496);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),i=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},s=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=i(o),y=n,h=d["".concat(c,".").concat(y)]||d[y]||u[y]||l;return o?r.createElement(h,a(a({ref:t},s),{},{components:o})):r.createElement(h,a({ref:t},s))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=o.length,a=new Array(l);a[0]=y;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[d]="string"==typeof e?e:n,a[1]=p;for(var i=2;i<l;i++)a[i]=o[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}y.displayName="MDXCreateElement"},62337:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var r=o(88028),n=(o(59496),o(49613));const l={sidebar_position:10,description:"Apache24 \u8a2d\u5b9a proxy",key:["Apache24","tool","windows","proxy sever"],tags:["Apache24","\u5de5\u5177","proxy sever"]},a="\ud83c\udf42 Apache24 \u8a2d\u5b9a proxy",p={unversionedId:"daylilyTool/toolApache/setProxy",id:"daylilyTool/toolApache/setProxy",title:"\ud83c\udf42 Apache24 \u8a2d\u5b9a proxy",description:"Apache24 \u8a2d\u5b9a proxy",source:"@site/docs/daylilyTool/toolApache/setProxy.md",sourceDirName:"daylilyTool/toolApache",slug:"/daylilyTool/toolApache/setProxy",permalink:"/docs/daylilyTool/toolApache/setProxy",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/daylilyTool/toolApache/setProxy.md",tags:[{label:"Apache24",permalink:"/docs/tags/apache-24"},{label:"\u5de5\u5177",permalink:"/docs/tags/\u5de5\u5177"},{label:"proxy sever",permalink:"/docs/tags/proxy-sever"}],version:"current",lastUpdatedAt:1701959684,formattedLastUpdatedAt:"2023\u5e7412\u67087\u65e5",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"Apache24 \u8a2d\u5b9a proxy",key:["Apache24","tool","windows","proxy sever"],tags:["Apache24","\u5de5\u5177","proxy sever"]},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udf42 Apache24 \u5b89\u88dd",permalink:"/docs/daylilyTool/toolApache/install"},next:{title:"\ud83c\udf42 Apache24 \u8a2d\u5b9a SSL",permalink:"/docs/daylilyTool/toolApache/setSSL"}},c={},i=[{value:"\u74b0\u5883",id:"\u74b0\u5883",level:2},{value:"\u8a2d\u5b9a proxy",id:"\u8a2d\u5b9a-proxy",level:2},{value:"\u555f\u7528\u6a21\u7d44",id:"\u555f\u7528\u6a21\u7d44",level:3},{value:"\u5f15\u7528\u8a2d\u5b9a\u6a94",id:"\u5f15\u7528\u8a2d\u5b9a\u6a94",level:3},{value:"proxy \u898f\u5247",id:"proxy-\u898f\u5247",level:2},{value:"httpd-vhosts \u7bc4\u4f8b",id:"httpd-vhosts-\u7bc4\u4f8b",level:3},{value:"proxy log",id:"proxy-log",level:2},{value:"\u4fee\u6539 log \u7b49\u7d1a",id:"\u4fee\u6539-log-\u7b49\u7d1a",level:3}],s={toc:i},d="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-apache24-\u8a2d\u5b9a-proxy"},"\ud83c\udf42 Apache24 \u8a2d\u5b9a proxy"),(0,n.kt)("h2",{id:"\u74b0\u5883"},"\u74b0\u5883"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"windows10 ~ 11"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.apachehaus.com/cgi-bin/download.plx"},"Apache24"))),(0,n.kt)("h2",{id:"\u8a2d\u5b9a-proxy"},"\u8a2d\u5b9a proxy"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u6a94\u6848: /Apache24/conf/httpd.conf")),(0,n.kt)("h3",{id:"\u555f\u7528\u6a21\u7d44"},"\u555f\u7528\u6a21\u7d44"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"}," LoadModule proxy_module modules/mod_proxy.so\n LoadModule proxy_http_module modules/mod_proxy_http.so\n")),(0,n.kt)("h3",{id:"\u5f15\u7528\u8a2d\u5b9a\u6a94"},"\u5f15\u7528\u8a2d\u5b9a\u6a94"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"}," Include conf/extra/httpd-vhosts.conf\n")),(0,n.kt)("h2",{id:"proxy-\u898f\u5247"},"proxy \u898f\u5247"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u6a94\u6848: /Apache24/conf/extra/httpd-vhosts.conf")),(0,n.kt)("h3",{id:"httpd-vhosts-\u7bc4\u4f8b"},"httpd-vhosts \u7bc4\u4f8b"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u5916\u90e8\u900f\u904e ",(0,n.kt)("inlineCode",{parentName:"p"},"443 port")," \u6703\u5c07\u4ed6\u8f49\u5230 ",(0,n.kt)("inlineCode",{parentName:"p"},"localhost:8080")),(0,n.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u5916\u90e8\u900f\u904e ",(0,n.kt)("inlineCode",{parentName:"p"},"443 port")," \u6703\u5c07\u4ed6\u8f49\u5230 ",(0,n.kt)("inlineCode",{parentName:"p"},"https://blog.lychicken.com/"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<VirtualHost *:443>\n    ServerName blog.lychicken.com\n\n    ProxyRequests off  \n    ProxyPreserveHost on  \n    ProxyPass /chicken http://localhost:8080/chicken flushpackets=on keepalive=on\n    ProxyPassReverse /chicken http://localhost:8080/chicken\n</VirtualHost> \n\n\n<VirtualHost *:80>\n        ServerName blog.lychicken.com\n        Redirect permanent / https://blog.lychicken.com/\n</VirtualHost>\n")),(0,n.kt)("h2",{id:"proxy-log"},"proxy log"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u6a94\u6848: /Apache24/conf/httpd.conf")),(0,n.kt)("h3",{id:"\u4fee\u6539-log-\u7b49\u7d1a"},"\u4fee\u6539 log \u7b49\u7d1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"}," LogLevel warn\n")))}u.isMDXComponent=!0}}]);