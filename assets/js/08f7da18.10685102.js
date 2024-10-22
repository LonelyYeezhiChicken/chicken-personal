"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[6397],{49613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var a=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),k=n,g=m["".concat(i,".").concat(k)]||m[k]||u[k]||o;return r?a.createElement(g,p(p({ref:t},s),{},{components:r})):a.createElement(g,p({ref:t},s))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=k;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:n,p[1]=l;for(var c=2;c<o;c++)p[c]=r[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},34012:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(88028),n=(r(59496),r(49613));const o={sidebar_position:25,description:"Config \u8a2d\u5b9a",key:["java","Spring Cloud","Microservices","\u5fae\u670d\u52d9","Spring Boot"],tags:["java","Spring Cloud","Microservices","Spring Boot"]},p="\ud83c\udf24\ufe0f Config \u8a2d\u5b9a",l={unversionedId:"javaSpringCloud/Chapter2/2_5config",id:"javaSpringCloud/Chapter2/2_5config",title:"\ud83c\udf24\ufe0f Config \u8a2d\u5b9a",description:"Config \u8a2d\u5b9a",source:"@site/docs/javaSpringCloud/Chapter2/2_5config.md",sourceDirName:"javaSpringCloud/Chapter2",slug:"/javaSpringCloud/Chapter2/2_5config",permalink:"/docs/javaSpringCloud/Chapter2/2_5config",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/javaSpringCloud/Chapter2/2_5config.md",tags:[{label:"java",permalink:"/docs/tags/java"},{label:"Spring Cloud",permalink:"/docs/tags/spring-cloud"},{label:"Microservices",permalink:"/docs/tags/microservices"},{label:"Spring Boot",permalink:"/docs/tags/spring-boot"}],version:"current",lastUpdatedAt:1729561312,formattedLastUpdatedAt:"2024\u5e7410\u670822\u65e5",sidebarPosition:25,frontMatter:{sidebar_position:25,description:"Config \u8a2d\u5b9a",key:["java","Spring Cloud","Microservices","\u5fae\u670d\u52d9","Spring Boot"],tags:["java","Spring Cloud","Microservices","Spring Boot"]},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udf24\ufe0f \u9032\u884c\u55ae\u5143\u6e2c\u8a66",permalink:"/docs/javaSpringCloud/Chapter2/2_4unitTest"},next:{title:"\ud83c\udf24\ufe0f \u76e3\u63a7\u8207\u7ba1\u7406",permalink:"/docs/javaSpringCloud/Chapter2/2_6monitoring"}},i={},c=[{value:"Spring Boot vs Spring",id:"spring-boot-vs-spring",level:2},{value:"\u8a2d\u5b9a\u6587\u4ef6",id:"\u8a2d\u5b9a\u6587\u4ef6",level:2},{value:"\u6587\u4ef6\u4f4d\u7f6e",id:"\u6587\u4ef6\u4f4d\u7f6e",level:3},{value:"\u9810\u8a2d\u8a2d\u5b9a\u6587\u4ef6",id:"\u9810\u8a2d\u8a2d\u5b9a\u6587\u4ef6",level:3},{value:"\u8a2d\u5b9a\u670d\u52d9\u540d\u7a31",id:"\u8a2d\u5b9a\u670d\u52d9\u540d\u7a31",level:3},{value:"\u4f7f\u7528 Yaml",id:"\u4f7f\u7528-yaml",level:3},{value:"\u591a\u74b0\u5883\u8a2d\u5b9a",id:"\u591a\u74b0\u5883\u8a2d\u5b9a",level:3},{value:"\u95dc\u65bc\u8a2d\u5b9a\u6a94\u7684\u8f09\u5165\u9806\u5e8f",id:"\u95dc\u65bc\u8a2d\u5b9a\u6a94\u7684\u8f09\u5165\u9806\u5e8f",level:2}],s={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\ufe0f-config-\u8a2d\u5b9a"},"\ud83c\udf24\ufe0f Config \u8a2d\u5b9a"),(0,n.kt)("h2",{id:"spring-boot-vs-spring"},"Spring Boot vs Spring"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u5728 Spring Boot \u5e95\u4e0b\uff0c\u4e0d\u9700\u8981\u5f15\u5165\u5176\u4ed6\u8a2d\u5b9a\uff0c\u53ea\u9700\u8981\u5f15\u5165 ",(0,n.kt)("inlineCode",{parentName:"p"},"Maven")," \uff0c"),(0,n.kt)("p",{parentName:"blockquote"},"\u96d6\u7136\u8207\u50b3\u7d71 Spring \u4e00\u6a23\uff0c\u90fd\u9700\u8981\u5be6\u4f5c ",(0,n.kt)("inlineCode",{parentName:"p"},"Controller"),"\uff0c"),(0,n.kt)("p",{parentName:"blockquote"},"\u4f46\u5728\u8a2d\u5b9a Spring Boot \u90fd\u662f\u81ea\u52d5\u5316\u7684\u8a2d\u5b9a\uff0c\u9664\u975e\u6709\u5176\u4ed6\u7279\u6b8a\u7684\u5834\u666f\uff0c"),(0,n.kt)("p",{parentName:"blockquote"},"\u624d\u9700\u8981\u624b\u52d5\u8a2d\u5b9a (EX: 8080 port \u8207\u5176\u4ed6\u7db2\u7ad9\u885d\u7a81\u6642\uff0c\u6211\u5011\u5c31\u5fc5\u9808\u624b\u52d5\u4fee\u6539)\uff0c"),(0,n.kt)("p",{parentName:"blockquote"},"\u4fee\u6539 Port \u53ef\u53c3\u8003 ",(0,n.kt)("a",{parentName:"p",href:"https://blog.lychicken.com/docs/daylily/javaDaylily/javaStartPort"},"\u6b64\u7bc7"))),(0,n.kt)("h2",{id:"\u8a2d\u5b9a\u6587\u4ef6"},"\u8a2d\u5b9a\u6587\u4ef6"),(0,n.kt)("h3",{id:"\u6587\u4ef6\u4f4d\u7f6e"},"\u6587\u4ef6\u4f4d\u7f6e"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-test"},"src/main/resources \n")),(0,n.kt)("h3",{id:"\u9810\u8a2d\u8a2d\u5b9a\u6587\u4ef6"},"\u9810\u8a2d\u8a2d\u5b9a\u6587\u4ef6"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"application.properties\n")),(0,n.kt)("h3",{id:"\u8a2d\u5b9a\u670d\u52d9\u540d\u7a31"},"\u8a2d\u5b9a\u670d\u52d9\u540d\u7a31"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u958b\u555f ",(0,n.kt)("inlineCode",{parentName:"li"},"src/main/resources/application.properties"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"spring.application.name=hello\n")),(0,n.kt)("h3",{id:"\u4f7f\u7528-yaml"},"\u4f7f\u7528 Yaml"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"spring boot \u7684\u8a2d\u5b9a\u4e5f\u53ef\u4ee5\u4f7f\u7528 Yaml \u683c\u5f0f"),(0,n.kt)("li",{parentName:"ul"},"\u4ee5\u4e0b\u662f Yaml \u8207\u50b3\u7d71 properties \u6bd4\u8f03")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Yaml")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"environments: \n    dev: \n        url: http://test.com \n        name: Developer Setup \n    prod: \n        url: http://demo.com \n        name: My Demo App\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"properties")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"environments.dev.url=http://test.com\nenvironments.dev.name=Developer Setup \nenvironments.prod.url=http://demo.com \nenvironments.prod.name=My Demo App\n")),(0,n.kt)("h3",{id:"\u591a\u74b0\u5883\u8a2d\u5b9a"},"\u591a\u74b0\u5883\u8a2d\u5b9a"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u53ef\u4ee5\u6839\u64da\u4e0d\u540c\u7684\u8a2d\u5b9a\u6a94\uff0c\u4f86\u5207\u63db\u74b0\u5883"),(0,n.kt)("p",{parentName:"blockquote"},"\u4ee5\u4e0b\u8a2d\u5b9a\u6703\u7c72\u793e\u6703\u8b80\u53d6\u958b\u767c\u74b0\u5883")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"application-dev.properties: \u958b\u767c\u74b0\u5883"),(0,n.kt)("li",{parentName:"ul"},"application-test.properties: \u6e2c\u8a66\u74b0\u5883"),(0,n.kt)("li",{parentName:"ul"},"application-prod.properties: \u6b63\u5f0f\u74b0\u5883")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u8981\u57f7\u884c jar \u4e26\u4e14\u5207\u63db\u8a2d\u5b9a\u6642")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ex: \u6e2c\u8a66\u74b0\u5883")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"java -jar [jar name].jar --application-test.properties=test\n")),(0,n.kt)("h2",{id:"\u95dc\u65bc\u8a2d\u5b9a\u6a94\u7684\u8f09\u5165\u9806\u5e8f"},"\u95dc\u65bc\u8a2d\u5b9a\u6a94\u7684\u8f09\u5165\u9806\u5e8f"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u547d\u4ee4\u884c\u53c3\u6578\uff1a")," \u9996\u5148\uff0c\u60a8\u53ef\u4ee5\u901a\u904e\u547d\u4ee4\u884c\u50b3\u5165\u53c3\u6578\uff0c\u9019\u4e9b\u53c3\u6578\u6703\u5f71\u97ff\u914d\u7f6e\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"SPRING_APPLICATION_JSON \u5c6c\u6027\uff1a")," \u5982\u679c\u60a8\u5728\u7cfb\u7d71\u74b0\u5883\u8b8a\u6578\u4e2d\u4ee5 JSON \u683c\u5f0f\u8a2d\u5b9a\u4e86 SPRING_APPLICATION_JSON \u5c6c\u6027\uff0cSpring Boot \u5c07\u5f9e\u4e2d\u8b80\u53d6\u8a2d\u5b9a\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"java:comp/env \u7684 JNDI \u5c6c\u6027\uff1a")," \u60a8\u53ef\u4ee5\u7372\u53d6\u4f4d\u65bc java:comp/env \u74b0\u5883\u4e0b\u7684 JNDI \u5c6c\u6027\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Java \u7cfb\u7d71\u5c6c\u6027\uff1a")," \u60a8\u53ef\u4ee5\u900f\u904e ",(0,n.kt)("inlineCode",{parentName:"p"},"System.getProperties()")," \u65b9\u6cd5\u7372\u53d6 Java \u7cfb\u7d71\u5c6c\u6027\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u4f5c\u696d\u7cfb\u7d71\u74b0\u5883\u8b8a\u6578\uff1a")," \u7cfb\u7d71\u74b0\u5883\u8b8a\u6578\u4e5f\u53ef\u80fd\u5f71\u97ff\u914d\u7f6e\u8a2d\u5b9a\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u96a8\u6a5f\u5c6c\u6027\u8a2d\u5b9a\uff1a")," \u5982\u679c\u60a8\u900f\u904e random.* \u8a2d\u5b9a\u4e86\u96a8\u6a5f\u5c6c\u6027\uff0c\u9019\u4e9b\u8a2d\u5b9a\u4e5f\u6703\u88ab\u7d0d\u5165\u8003\u616e\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u5916\u90e8\u914d\u7f6e\u6587\u4ef6\uff08\u91dd\u5c0d\u7279\u5b9a\u74b0\u5883\uff09\uff1a")," \u5c0d\u65bc\u7279\u5b9a\u7684 {profile} \u74b0\u5883\uff0c\u60a8\u53ef\u4ee5\u5728\u61c9\u7528 JAR \u5305\u5916\u90e8\u6e96\u5099\u914d\u7f6e\u6587\u4ef6\uff0c\u4f8b\u5982 app-{profile}.properties \u6216\u4f7f\u7528 YAML \u683c\u5f0f\u7684\u6587\u4ef6\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u5167\u90e8\u914d\u7f6e\u6587\u4ef6\uff08\u91dd\u5c0d\u7279\u5b9a\u74b0\u5883\uff09\uff1a")," \u540c\u6a23\u5730\uff0c\u5c0d\u65bc\u7279\u5b9a\u7684 {profile} \u74b0\u5883\uff0c\u60a8\u4e5f\u53ef\u4ee5\u5728\u61c9\u7528 JAR \u5305\u5167\u90e8\u8a2d\u7f6e\u914d\u7f6e\u6587\u4ef6\uff0c\u4f8b\u5982 app-{profile}.properties \u6216\u4f7f\u7528 YAML \u5b9a\u7fa9\u7684\u6587\u4ef6\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u5916\u90e8\u7684 application.properties \u548c YAML \u914d\u7f6e\uff1a")," \u82e5\u9019\u4e9b\u914d\u7f6e\u4f4d\u65bc\u61c9\u7528 JAR \u5305\u7684\u5916\u90e8\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u5167\u90e8\u7684 application.properties \u548c YAML \u914d\u7f6e\uff1a")," \u82e5\u9019\u4e9b\u914d\u7f6e\u4f4d\u65bc\u61c9\u7528 JAR \u5305\u7684\u5167\u90e8\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"@Configuration \u6a19\u8a18\u7684\u985e\u4e2d\u7684 @PropertySource \u5c6c\u6027\uff1a")," \u5728\u88ab @Configuration \u6a19\u8a18\u7684\u985e\u4e2d\uff0c\u60a8\u53ef\u4ee5\u900f\u904e @PropertySource \u6ce8\u89e3\u5b9a\u7fa9\u5c6c\u6027\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u61c9\u7528\u9ed8\u8a8d\u5c6c\u6027\uff1a")," \u6700\u5f8c\uff0c\u4f7f\u7528 SpringApplication.setDefaultProperties \u5b9a\u7fa9\u7684\u61c9\u7528\u9ed8\u8a8d\u5c6c\u6027\u3002"))))}u.isMDXComponent=!0}}]);