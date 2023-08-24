"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[9328],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),g=o,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3327:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:10,description:"Spring Boot \u7c21\u4ecb",key:["java","Spring Cloud","Microservices","\u5fae\u670d\u52d9","Spring Boot"],tags:["java","Spring Cloud","Microservices","Spring Boot"]},i="\ud83c\udf24\ufe0f Spring Boot \u7c21\u4ecb",p={unversionedId:"javaSpringCloud/Chapter2/2_2springBootOverview",id:"javaSpringCloud/Chapter2/2_2springBootOverview",title:"\ud83c\udf24\ufe0f Spring Boot \u7c21\u4ecb",description:"Spring Boot \u7c21\u4ecb",source:"@site/docs/javaSpringCloud/Chapter2/2_2springBootOverview.md",sourceDirName:"javaSpringCloud/Chapter2",slug:"/javaSpringCloud/Chapter2/2_2springBootOverview",permalink:"/en/docs/javaSpringCloud/Chapter2/2_2springBootOverview",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/javaSpringCloud/Chapter2/2_2springBootOverview.md",tags:[{label:"java",permalink:"/en/docs/tags/java"},{label:"Spring Cloud",permalink:"/en/docs/tags/spring-cloud"},{label:"Microservices",permalink:"/en/docs/tags/microservices"},{label:"Spring Boot",permalink:"/en/docs/tags/spring-boot"}],version:"current",lastUpdatedAt:1692887042,formattedLastUpdatedAt:"Aug 24, 2023",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"Spring Boot \u7c21\u4ecb",key:["java","Spring Cloud","Microservices","\u5fae\u670d\u52d9","Spring Boot"],tags:["java","Spring Cloud","Microservices","Spring Boot"]},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udf24\ufe0f Spring Cloud \u7c21\u4ecb",permalink:"/en/docs/javaSpringCloud/Chapter2/2_1springCloudOverView"},next:{title:"\ud83c\udf24\ufe0f \u5efa\u7acb RESTful API",permalink:"/en/docs/javaSpringCloud/Chapter2/2_3resfulAPI"}},l={},c=[{value:"\u95dc\u65bc",id:"\u95dc\u65bc",level:2},{value:"Spring \u6846\u67b6\u7684\u554f\u984c\u8207 Spring Boot \u7684\u512a\u52e2",id:"spring-\u6846\u67b6\u7684\u554f\u984c\u8207-spring-boot-\u7684\u512a\u52e2",level:2},{value:"Spring \u6846\u67b6\u5c0d\u521d\u5b78\u8005\u548c\u8001\u624b\u7684\u554f\u984c",id:"spring-\u6846\u67b6\u5c0d\u521d\u5b78\u8005\u548c\u8001\u624b\u7684\u554f\u984c",level:3},{value:"\u89e3\u6c7a\u554f\u984c\u7684\u65b9\u6cd5",id:"\u89e3\u6c7a\u554f\u984c\u7684\u65b9\u6cd5",level:3},{value:"Spring Boot\u7684\u512a\u52e2",id:"spring-boot\u7684\u512a\u52e2",level:3},{value:"\u958b\u767c\u512a\u52e2",id:"\u958b\u767c\u512a\u52e2",level:3},{value:"\u5feb\u901f\u5165\u9580",id:"\u5feb\u901f\u5165\u9580",level:2},{value:"\u74b0\u5883\u5b89\u88dd",id:"\u74b0\u5883\u5b89\u88dd",level:3},{value:"\u5c08\u6848\u5efa\u7acb",id:"\u5c08\u6848\u5efa\u7acb",level:3},{value:"\u5c08\u6848\u8aaa\u660e",id:"\u5c08\u6848\u8aaa\u660e",level:3},{value:"\u5efa\u7acb\u5c08\u6848\u7bc4\u672c",id:"\u5efa\u7acb\u5c08\u6848\u7bc4\u672c",level:3}],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\ufe0f-spring-boot-\u7c21\u4ecb"},"\ud83c\udf24\ufe0f Spring Boot \u7c21\u4ecb"),(0,o.kt)("h2",{id:"\u95dc\u65bc"},"\u95dc\u65bc"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Spring Cloud \u662f\u57fa\u65bc Spring Boot \u5ef6\u4f38\u51fa\u4f86\u7684\u5fae\u670d\u52d9\u67b6\u69cb")),(0,o.kt)("h2",{id:"spring-\u6846\u67b6\u7684\u554f\u984c\u8207-spring-boot-\u7684\u512a\u52e2"},"Spring \u6846\u67b6\u7684\u554f\u984c\u8207 Spring Boot \u7684\u512a\u52e2"),(0,o.kt)("h3",{id:"spring-\u6846\u67b6\u5c0d\u521d\u5b78\u8005\u548c\u8001\u624b\u7684\u554f\u984c"},"Spring \u6846\u67b6\u5c0d\u521d\u5b78\u8005\u548c\u8001\u624b\u7684\u554f\u984c"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u521d\u5b78\u8005\u56e0\u7e41\u96dc\u7684\u8a2d\u5b9a\u800c\u671b\u800c\u537b\u6b65"),(0,o.kt)("li",{parentName:"ul"},"\u8001\u624b\u6bcf\u6b21\u65b0\u5efa\u5c08\u6848\u90fd\u9700\u8981\u91cd\u8907\u8907\u88fd\u8cbc\u4e0a\u4e00\u4e9b\u76f8\u4f3c\u7684\u8a2d\u5b9a")),(0,o.kt)("h3",{id:"\u89e3\u6c7a\u554f\u984c\u7684\u65b9\u6cd5"},"\u89e3\u6c7a\u554f\u984c\u7684\u65b9\u6cd5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5229\u7528\u5efa\u69cb\u5de5\u5177\uff08\u5982 Maven\uff09\u5efa\u7acb\u8173\u624b\u67b6\u5c08\u6848\uff0c\u521d\u59cb\u5316\u6a19\u6e96\u5c08\u6848\uff0c\u7c21\u5316\u8a2d\u5b9a\u6d41\u7a0b")),(0,o.kt)("h3",{id:"spring-boot\u7684\u512a\u52e2"},"Spring Boot\u7684\u512a\u52e2"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u81ea\u52d5\u5316\u8a2d\u5b9a\u7c21\u5316\u6a23\u677f\u5316\u8a2d\u5b9a"),(0,o.kt)("li",{parentName:"ul"},"Starter POMs \u96c6\u6210\u529f\u80fd\uff0c\u7c21\u5316\u4f9d\u8cf4\u7ba1\u7406"),(0,o.kt)("li",{parentName:"ul"},"\u652f\u63f4\u5167\u5d4c\u7684 Tomcat\u3001Jetty \u7b49\u5bb9\u5668\uff0c\u8f15\u9b06\u5efa\u69cb\u8207\u90e8\u7f72"),(0,o.kt)("li",{parentName:"ul"},"\u9069\u5408\u5bb9\u5668\u5316\uff0c\u53ef\u6574\u5408 Docker")),(0,o.kt)("h3",{id:"\u958b\u767c\u512a\u52e2"},"\u958b\u767c\u512a\u52e2"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Groovy\u3001Gradle \u7b49\u5de5\u5177\u958b\u767c Spring Boot \u61c9\u7528\u7a0b\u5f0f"),(0,o.kt)("li",{parentName:"ul"},"\u7c21\u6f54\u7bc4\u4f8b\uff1a\u900f\u904e\u7de8\u8b6f\u3001\u6253\u5305\u3001java -jar \u547d\u4ee4\u555f\u52d5 RESTful API")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Spring Boot \u7684\u51fa\u73fe\u6709\u6548\u7c21\u5316\u4e86 Spring \u6846\u67b6\u7684\u8a2d\u5b9a\u8207\u958b\u767c\uff0c\u900f\u904e\u81ea\u52d5\u5316\u8a2d\u5b9a\u3001Starter POMs\u3001\u5167\u5d4c\u5f0f\u5bb9\u5668\u7b49\u7279\u6027\uff0c\u4f7f\u5efa\u69cb\u3001\u90e8\u7f72\u548c\u958b\u767c\u6d41\u7a0b\u66f4\u52a0\u9ad8\u6548\u8f15\u4fbf")),(0,o.kt)("h2",{id:"\u5feb\u901f\u5165\u9580"},"\u5feb\u901f\u5165\u9580"),(0,o.kt)("h3",{id:"\u74b0\u5883\u5b89\u88dd"},"\u74b0\u5883\u5b89\u88dd"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://blog.lychicken.com/docs/daylily/javaDaylily/setJava"},"Java \u5b89\u88dd\u6587\u7ae0\u9023\u7d50")),(0,o.kt)("h3",{id:"\u5c08\u6848\u5efa\u7acb"},"\u5c08\u6848\u5efa\u7acb"),(0,o.kt)("p",null,"\u900f\u904e ",(0,o.kt)("a",{parentName:"p",href:"https://start.spring.io/"},"Spring Initializr")," \u4f86\u5efa\u7acb\u5c08\u6848"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u9078\u64c7 ",(0,o.kt)("inlineCode",{parentName:"li"},"Maven")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Java")),(0,o.kt)("li",{parentName:"ol"},"\u9078\u64c7 Spring Boot \u7248\u672c"),(0,o.kt)("li",{parentName:"ol"},"\u8a2d\u5b9a\u547d\u540d"),(0,o.kt)("li",{parentName:"ol"},"\u9078\u64c7 ",(0,o.kt)("inlineCode",{parentName:"li"},"jar")),(0,o.kt)("li",{parentName:"ol"},"\u9078\u64c7 Java \u7248\u672c"),(0,o.kt)("li",{parentName:"ol"},"\u52a0\u5165",(0,o.kt)("inlineCode",{parentName:"li"},"Spring Web")," \u6a21\u7d44"),(0,o.kt)("li",{parentName:"ol"},"\u6700\u5f8c\u532f\u51fa\u5c08\u6848"),(0,o.kt)("li",{parentName:"ol"},"\u89e3\u58d3\u7e2e\u5c08\u6848\uff0c\u4e26\u4e14\u4f7f\u7528\u7d42\u7aef\u6a5f\u8f38\u5165 ",(0,o.kt)("inlineCode",{parentName:"li"},"code .")),(0,o.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"vs code")," \u958b\u555f\u5c08\u6848")),(0,o.kt)("h3",{id:"\u5c08\u6848\u8aaa\u660e"},"\u5c08\u6848\u8aaa\u660e"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6574\u500b\u5c08\u6848\u7684\u4e3b\u7a0b\u5f0f\u70ba ",(0,o.kt)("inlineCode",{parentName:"p"},"src/main/java/DemoApplication.java"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"package com.example.demo;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n\n@SpringBootApplication\npublic class DemoApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(DemoApplication.class, args);\n    }\n\n}\n\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5c08\u6848\u7684\u8a2d\u5b9a\u6a94\u8207\u975c\u614b\u8cc7\u6e90\u6a94\u5247\u6703\u653e\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"src/main/resources")),(0,o.kt)("p",{parentName:"blockquote"},"\u55ae\u5143\u6e2c\u8a66\u6a94\u6848\u5247\u6703\u653e\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"src/test/")),(0,o.kt)("p",{parentName:"blockquote"},"Maven \u7684\u8a2d\u5b9a\u6a94\u5247\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"pom.xml"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>3.1.3</version>\n        <relativePath/> \x3c!-- lookup parent from repository --\x3e\n    </parent>\n    <groupId>com.example</groupId>\n    <artifactId>demo</artifactId>\n    <version>0.0.1-SNAPSHOT</version>\n    <name>demo</name>\n    <description>Demo project for Spring Boot</description>\n    <properties>\n        <java.version>17</java.version>\n    </properties>\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-web</artifactId>\n        </dependency>\n\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-test</artifactId>\n            <scope>test</scope>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-maven-plugin</artifactId>\n            </plugin>\n        </plugins>\n    </build>\n\n</project>\n')),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"\u5efa\u7acb\u5c08\u6848\u7bc4\u672c"},"\u5efa\u7acb\u5c08\u6848\u7bc4\u672c"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/LonelyYeezhiChicken/spring-boot-demo/tree/Init"},"github \u9023\u7d50")))}d.isMDXComponent=!0}}]);