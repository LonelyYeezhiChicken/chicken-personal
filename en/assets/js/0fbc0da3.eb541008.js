"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[1109],{3905:(e,l,r)=>{r.d(l,{Zo:()=>u,kt:()=>m});var a=r(7294);function t(e,l,r){return l in e?Object.defineProperty(e,l,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[l]=r,e}function n(e,l){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);l&&(a=a.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var l=1;l<arguments.length;l++){var r=null!=arguments[l]?arguments[l]:{};l%2?n(Object(r),!0).forEach((function(l){t(e,l,r[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(r,l))}))}return e}function c(e,l){if(null==e)return{};var r,a,t=function(e,l){if(null==e)return{};var r,a,t={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],l.indexOf(r)>=0||(t[r]=e[r]);return t}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],l.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var i=a.createContext({}),s=function(e){var l=a.useContext(i),r=l;return e&&(r="function"==typeof e?e(l):o(o({},l),e)),r},u=function(e){var l=s(e.components);return a.createElement(i.Provider,{value:l},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var l=e.children;return a.createElement(a.Fragment,{},l)}},d=a.forwardRef((function(e,l){var r=e.components,t=e.mdxType,n=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),d=t,m=p["".concat(i,".").concat(d)]||p[d]||k[d]||n;return r?a.createElement(m,o(o({ref:l},u),{},{components:r})):a.createElement(m,o({ref:l},u))}));function m(e,l){var r=arguments,t=l&&l.mdxType;if("string"==typeof e||t){var n=r.length,o=new Array(n);o[0]=d;var c={};for(var i in l)hasOwnProperty.call(l,i)&&(c[i]=l[i]);c.originalType=e,c[p]="string"==typeof e?e:t,o[1]=c;for(var s=2;s<n;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4033:(e,l,r)=>{r.r(l),r.d(l,{assets:()=>i,contentTitle:()=>o,default:()=>k,frontMatter:()=>n,metadata:()=>c,toc:()=>s});var a=r(7462),t=(r(7294),r(3905));const n={sidebar_position:5,description:"Docker \u4e2d\u5b89\u88dd Oracle",key:["Oracle","\u96dc\u8a18"],tags:["Oracle","MSSQL\u96dc\u8a18","Docker"]},o="\ud83d\udc69\u200d\ud83d\udcbb Docker \u4e2d\u5b89\u88dd Oracle",c={unversionedId:"daylily/oracleDaylily/setIndocker",id:"daylily/oracleDaylily/setIndocker",title:"\ud83d\udc69\u200d\ud83d\udcbb Docker \u4e2d\u5b89\u88dd Oracle",description:"Docker \u4e2d\u5b89\u88dd Oracle",source:"@site/docs/daylily/oracleDaylily/setIndocker.md",sourceDirName:"daylily/oracleDaylily",slug:"/daylily/oracleDaylily/setIndocker",permalink:"/en/docs/daylily/oracleDaylily/setIndocker",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/daylily/oracleDaylily/setIndocker.md",tags:[{label:"Oracle",permalink:"/en/docs/tags/oracle"},{label:"MSSQL\u96dc\u8a18",permalink:"/en/docs/tags/mssql\u96dc\u8a18"},{label:"Docker",permalink:"/en/docs/tags/docker"}],version:"current",lastUpdatedAt:1691901165,formattedLastUpdatedAt:"Aug 13, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Docker \u4e2d\u5b89\u88dd Oracle",key:["Oracle","\u96dc\u8a18"],tags:["Oracle","MSSQL\u96dc\u8a18","Docker"]},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udda4 Oracle \u958b\u767c\u96dc\u8a18",permalink:"/en/docs/category/-oracle-\u958b\u767c\u96dc\u8a18"},next:{title:"\ud83d\udc69\u200d\ud83d\udcbb \u4f7f\u7528 sqldeveloper \u9023\u63a5",permalink:"/en/docs/daylily/oracleDaylily/connectBydev"}},i={},s=[{value:"\u5b89\u88dd\u7248\u672c",id:"\u5b89\u88dd\u7248\u672c",level:2},{value:"\u5b89\u88dd\u6b65\u9a5f",id:"\u5b89\u88dd\u6b65\u9a5f",level:2},{value:"1. \u4e0b\u8f09Image",id:"1-\u4e0b\u8f09image",level:3},{value:"2. \u555f\u52d5\u5bb9\u5668",id:"2-\u555f\u52d5\u5bb9\u5668",level:3},{value:"3. \u8a2d\u5b9a oracle \u5e33\u865f\u5bc6\u78bc",id:"3-\u8a2d\u5b9a-oracle-\u5e33\u865f\u5bc6\u78bc",level:3},{value:"\u9810\u8a2d\u5e33\u865f\u5bc6\u78bc",id:"\u9810\u8a2d\u5e33\u865f\u5bc6\u78bc",level:2}],u={toc:s},p="wrapper";function k(e){let{components:l,...r}=e;return(0,t.kt)(p,(0,a.Z)({},u,r,{components:l,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"-docker-\u4e2d\u5b89\u88dd-oracle"},"\ud83d\udc69\u200d\ud83d\udcbb Docker \u4e2d\u5b89\u88dd Oracle"),(0,t.kt)("h2",{id:"\u5b89\u88dd\u7248\u672c"},"\u5b89\u88dd\u7248\u672c"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Oracle: 11g"),(0,t.kt)("li",{parentName:"ul"},"Image: oracleinanutshell/oracle-xe-11g"),(0,t.kt)("li",{parentName:"ul"},"OS: Windows11")),(0,t.kt)("h2",{id:"\u5b89\u88dd\u6b65\u9a5f"},"\u5b89\u88dd\u6b65\u9a5f"),(0,t.kt)("h3",{id:"1-\u4e0b\u8f09image"},"1. \u4e0b\u8f09Image"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u641c\u5c0b Oracle Image")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"docker search oracle\n")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u770b\u5230\u4ee5\u4e0b\u8cc7\u8a0a")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell",metastring:"{20}","{20}":!0},"NAME                              DESCRIPTION                                      STARS     OFFICIAL   AUTOMATED\noraclelinux                       Official Docker builds of Oracle Linux.          1009      [OK]\nkasmweb/oracle-8-desktop          Oracle Linux 8 desktop for Kasm Workspaces       3\nkasmweb/oracle-7-desktop          Oracle Linux 7 desktop for Kasm Workspaces       1\nkasmweb/oracle-9-desktop          Oracle 9 desktop for Kasm Workspaces             0\ndokken/oraclelinux-7              Oracle Linux 7 image for kitchen-dokken          1\ndokken/oraclelinux-6              Oracle Linux 6 image for kitchen-dokken          0\ndokken/oraclelinux-9              Oracle Linux 9 image for use with Test Kitch\u2026   0\npaketobuildpacks/oracle                                                            0\ndokken/oraclelinux-8                                                               1\nvulhub/oracle                                                                      0\nkasmweb/core-oracle-8             Oracle Linux 8 base image for Kasm Workspace\u2026   1\nkasmweb/core-oracle-7             Oracle Linux 7 base image for Kasm Workspace\u2026   1\nkasmweb/core-oracle-9             Oracle Linux 9 base image for Kasm Workspace\u2026   0\ndockette/adminer                  My most tiniest (10mb) Adminer image with su\u2026   20                   [OK]\ndockette/mvn                      My MVN 3 based on Oracle Java Dockerfile         4                    [OK]\nredislabs/redis-connect-oracle    Redis Connect Oracle Connector for Continuou\u2026   1\ndockette/jdk8                     My Oracle Java 8 Dockerfile                      4                    [OK]\nsismics/debian-java               Debian Jessy + Oracle JDK                        1\noracleinanutshell/oracle-xe-11g                                                    277\noraclecoherence/coherence-ce      Coherence Community Edition                      5\noracledb19c/oracle.19.3.0-ee                                                       31\noracledemo1/hello-world           Test docker build from github                    0                    [OK]\ngvenzl/oracle-xe                  Oracle Database XE (21c, 18c, 11g) for every\u2026   232\niamseth/oracledb_exporter         A Prometheus exporter for Oracle modeled aft\u2026   7\n18fgsa/oracle-client              Hosted version of the Oracle Container Image\u2026   2\n")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u4e0b\u8f09")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull oracleinanutshell/oracle-xe-11g\n")),(0,t.kt)("h3",{id:"2-\u555f\u52d5\u5bb9\u5668"},"2. \u555f\u52d5\u5bb9\u5668"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u5efa\u7acb\u5bb9\u5668\uff0c\u4e26\u5c07 port \u505a\u5c0d\u61c9")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d -p 2122:22 -p 9090:8080 -p 1521:1521 --name oracle-11g oracleinanutshell/oracle-xe-11g\n")),(0,t.kt)("h3",{id:"3-\u8a2d\u5b9a-oracle-\u5e33\u865f\u5bc6\u78bc"},"3. \u8a2d\u5b9a oracle \u5e33\u865f\u5bc6\u78bc"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u9032\u5165\u5bb9\u5668")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"docker exec -it oracle-11g /bin/bash\n")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u5207\u63db\u6b0a\u9650")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"su oracle\n")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u958b\u555f sqlplus")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"$ORACLE_HOME/bin/sqlplus / as sysdba\n")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u5c07\u5bc6\u78bc\u671f\u9650\u8abf\u6574\u70ba\u6c38\u4e0d\u904e\u671f")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"ALTER PROFILE DEFAULT LIMIT PASSWORD_LIFE_TIME UNLIMITED;\n")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u89e3\u9396 system \u6b0a\u9650")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"alter user SYSTEM account unlock;\n")),(0,t.kt)("h2",{id:"\u9810\u8a2d\u5e33\u865f\u5bc6\u78bc"},"\u9810\u8a2d\u5e33\u865f\u5bc6\u78bc"),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528\u8005\u540d\u7a31: system"),(0,t.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528\u8005\u5bc6\u78bc: oracle")),(0,t.kt)("hr",null),(0,t.kt)("p",null,"ref: ",(0,t.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/605595017"},"Docker\u4e2d\u5b89\u88c5Oracle-12c")))}k.isMDXComponent=!0}}]);