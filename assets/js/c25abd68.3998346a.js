"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[6881],{49613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),g=a,m=u["".concat(c,".").concat(g)]||u[g]||d[g]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},27643:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(88028),a=(r(59496),r(49613));const o={sidebar_position:35,description:"Spring boot actuator",key:["java","Spring Cloud","Microservices","\u5fae\u670d\u52d9","Spring Boot","actuator"],tags:["java","Spring Cloud","Microservices","Spring Boot"]},i="\ud83c\udf24\ufe0f Spring boot actuator",p={unversionedId:"javaSpringCloud/Chapter2/2_7actuator",id:"javaSpringCloud/Chapter2/2_7actuator",title:"\ud83c\udf24\ufe0f Spring boot actuator",description:"Spring boot actuator",source:"@site/docs/javaSpringCloud/Chapter2/2_7actuator.md",sourceDirName:"javaSpringCloud/Chapter2",slug:"/javaSpringCloud/Chapter2/2_7actuator",permalink:"/docs/javaSpringCloud/Chapter2/2_7actuator",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/javaSpringCloud/Chapter2/2_7actuator.md",tags:[{label:"java",permalink:"/docs/tags/java"},{label:"Spring Cloud",permalink:"/docs/tags/spring-cloud"},{label:"Microservices",permalink:"/docs/tags/microservices"},{label:"Spring Boot",permalink:"/docs/tags/spring-boot"}],version:"current",lastUpdatedAt:1702200765,formattedLastUpdatedAt:"2023\u5e7412\u670810\u65e5",sidebarPosition:35,frontMatter:{sidebar_position:35,description:"Spring boot actuator",key:["java","Spring Cloud","Microservices","\u5fae\u670d\u52d9","Spring Boot","actuator"],tags:["java","Spring Cloud","Microservices","Spring Boot"]},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udf24\ufe0f \u76e3\u63a7\u8207\u7ba1\u7406",permalink:"/docs/javaSpringCloud/Chapter2/2_6monitoring"},next:{title:"\ud83c\udf24\ufe0f \u539f\u751f\u7aef\u9ede",permalink:"/docs/javaSpringCloud/Chapter2/2_8actuatorSetting"}},c={},l=[{value:"\u8aaa\u660e",id:"\u8aaa\u660e",level:2},{value:"\u5be6\u4f5c",id:"\u5be6\u4f5c",level:2},{value:"\u5c0e\u5165\u6a21\u7d44",id:"\u5c0e\u5165\u6a21\u7d44",level:3},{value:"\u555f\u52d5\u7a0b\u5f0f",id:"\u555f\u52d5\u7a0b\u5f0f",level:3},{value:"actuator \u7bc4\u672c",id:"actuator-\u7bc4\u672c",level:2}],s={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\ufe0f-spring-boot-actuator"},"\ud83c\udf24\ufe0f Spring boot actuator"),(0,a.kt)("h2",{id:"\u8aaa\u660e"},"\u8aaa\u660e"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Spring Boot \u6709\u63d0\u4f9b\u4e00\u500b\u6a21\u7d44 ",(0,a.kt)("inlineCode",{parentName:"p"},"spring-boot\uff0dstarter-actuator")," \uff0c"),(0,a.kt)("p",{parentName:"blockquote"},"\u4ed6\u53ef\u4ee5\u5927\u5e45\u7684\u7bc0\u7701\uff0c\u958b\u767c\u76e3\u63a7\u7cfb\u7d71\u7684\u6642\u9593")),(0,a.kt)("h2",{id:"\u5be6\u4f5c"},"\u5be6\u4f5c"),(0,a.kt)("h3",{id:"\u5c0e\u5165\u6a21\u7d44"},"\u5c0e\u5165\u6a21\u7d44"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65bc ",(0,a.kt)("inlineCode",{parentName:"li"},"pom.xml")," \u5c0e\u5165\u6b64\u6a21\u7d44")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:"{31-35}","{31-35}":!0},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>3.1.3</version>\n        <relativePath/>\n        \x3c!-- lookup parent from repository --\x3e\n    </parent>\n    <groupId>com.example</groupId>\n    <artifactId>demo</artifactId>\n    <version>0.0.1-SNAPSHOT</version>\n    <name>demo</name>\n    <description>Demo project for Spring Boot</description>\n    <properties>\n        <java.version>17</java.version>\n    </properties>\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-web</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-test</artifactId>\n            <scope>test</scope>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-actuator</artifactId>\n        </dependency>\n    </dependencies>\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-maven-plugin</artifactId>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n')),(0,a.kt)("h3",{id:"\u555f\u52d5\u7a0b\u5f0f"},"\u555f\u52d5\u7a0b\u5f0f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u7db2\u5740\u5217\u8f38\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:8080/actuator/health")),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u770b\u5230")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "UP"\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"actuator-\u7bc4\u672c"},"actuator \u7bc4\u672c"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/LonelyYeezhiChicken/spring-boot-demo/tree/actuator"},"github \u9023\u7d50")))}d.isMDXComponent=!0}}]);