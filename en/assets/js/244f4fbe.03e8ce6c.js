"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[2088],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>g});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),c=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},s=function(e){var a=c(e.components);return n.createElement(p.Provider,{value:a},e.children)},b="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=c(t),u=r,g=b["".concat(p,".").concat(u)]||b[u]||d[u]||i;return t?n.createElement(g,o(o({ref:a},s),{},{components:t})):n.createElement(g,o({ref:a},s))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l[b]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},214:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(7462),r=(t(7294),t(3905));const i={sidebar_position:10,description:"Spring Boot \u5b89\u88dd Hibernate",key:["java","\u96dc\u8a18","Hibernate","Spring Boot"],tags:["java","java\u96dc\u8a18","Hibernate","Spring Boot"]},o="\ud83d\udc69\u200d\ud83d\udcbb Spring Boot \u5b89\u88dd Hibernate",l={unversionedId:"daylily/javaDaylily/javaSpringBootSetHibernate",id:"daylily/javaDaylily/javaSpringBootSetHibernate",title:"\ud83d\udc69\u200d\ud83d\udcbb Spring Boot \u5b89\u88dd Hibernate",description:"Spring Boot \u5b89\u88dd Hibernate",source:"@site/docs/daylily/javaDaylily/javaSpringBootSetHibernate.md",sourceDirName:"daylily/javaDaylily",slug:"/daylily/javaDaylily/javaSpringBootSetHibernate",permalink:"/en/docs/daylily/javaDaylily/javaSpringBootSetHibernate",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/daylily/javaDaylily/javaSpringBootSetHibernate.md",tags:[{label:"java",permalink:"/en/docs/tags/java"},{label:"java\u96dc\u8a18",permalink:"/en/docs/tags/java\u96dc\u8a18"},{label:"Hibernate",permalink:"/en/docs/tags/hibernate"},{label:"Spring Boot",permalink:"/en/docs/tags/spring-boot"}],version:"current",lastUpdatedAt:1690721371,formattedLastUpdatedAt:"Jul 30, 2023",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"Spring Boot \u5b89\u88dd Hibernate",key:["java","\u96dc\u8a18","Hibernate","Spring Boot"],tags:["java","java\u96dc\u8a18","Hibernate","Spring Boot"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc69\u200d\ud83d\udcbb Spring Boot \u4fee\u6539\u555f\u52d5 port",permalink:"/en/docs/daylily/javaDaylily/javaStartPort"},next:{title:"\ud83d\udc69\u200d\ud83d\udcbb JDK\u8207\u74b0\u5883\u8b8a\u6578\u5b89\u88dd",permalink:"/en/docs/daylily/javaDaylily/setJava"}},p={},c=[{value:"Spring Boot \u96c6\u6210 Hibernate \u7684\u6b65\u9a5f\u5982\u4e0b",id:"spring-boot-\u96c6\u6210-hibernate-\u7684\u6b65\u9a5f\u5982\u4e0b",level:2},{value:"1. \u5728 pom.xml \u6587\u4ef6\u4e2d\u6dfb\u52a0 Hibernate \u4f9d\u8cf4",id:"1-\u5728-pomxml-\u6587\u4ef6\u4e2d\u6dfb\u52a0-hibernate-\u4f9d\u8cf4",level:3},{value:"2. \u5728 application.properties \u6587\u4ef6\u4e2d\u6dfb\u52a0 Hibernate \u76f8\u95dc\u914d\u7f6e",id:"2-\u5728-applicationproperties-\u6587\u4ef6\u4e2d\u6dfb\u52a0-hibernate-\u76f8\u95dc\u914d\u7f6e",level:3},{value:"3. \u5728 Spring Boot \u4e3b\u985e\u4e2d\u6dfb\u52a0 @EnableTransactionManagement \u6ce8\u89e3",id:"3-\u5728-spring-boot-\u4e3b\u985e\u4e2d\u6dfb\u52a0-enabletransactionmanagement-\u6ce8\u89e3",level:3},{value:"4. \u5728\u9700\u8981\u4f7f\u7528 Hibernate \u7684\u985e\u4e2d\u6dfb\u52a0 @Transactional \u6ce8\u89e3",id:"4-\u5728\u9700\u8981\u4f7f\u7528-hibernate-\u7684\u985e\u4e2d\u6dfb\u52a0-transactional-\u6ce8\u89e3",level:3}],s={toc:c},b="wrapper";function d(e){let{components:a,...t}=e;return(0,r.kt)(b,(0,n.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-spring-boot-\u5b89\u88dd-hibernate"},"\ud83d\udc69\u200d\ud83d\udcbb Spring Boot \u5b89\u88dd Hibernate"),(0,r.kt)("h2",{id:"spring-boot-\u96c6\u6210-hibernate-\u7684\u6b65\u9a5f\u5982\u4e0b"},"Spring Boot \u96c6\u6210 Hibernate \u7684\u6b65\u9a5f\u5982\u4e0b"),(0,r.kt)("h3",{id:"1-\u5728-pomxml-\u6587\u4ef6\u4e2d\u6dfb\u52a0-hibernate-\u4f9d\u8cf4"},"1. \u5728 pom.xml \u6587\u4ef6\u4e2d\u6dfb\u52a0 Hibernate \u4f9d\u8cf4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.hibernate</groupId>\n    <artifactId>hibernate-core</artifactId>\n    <version>5.4.2.Final</version>\n</dependency>\n")),(0,r.kt)("h3",{id:"2-\u5728-applicationproperties-\u6587\u4ef6\u4e2d\u6dfb\u52a0-hibernate-\u76f8\u95dc\u914d\u7f6e"},"2. \u5728 application.properties \u6587\u4ef6\u4e2d\u6dfb\u52a0 Hibernate \u76f8\u95dc\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"spring.jpa.hibernate.ddl-auto=update\nspring.jpa.show-sql=true\nspring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL5Dialect\n")),(0,r.kt)("h3",{id:"3-\u5728-spring-boot-\u4e3b\u985e\u4e2d\u6dfb\u52a0-enabletransactionmanagement-\u6ce8\u89e3"},"3. \u5728 Spring Boot \u4e3b\u985e\u4e2d\u6dfb\u52a0 @EnableTransactionManagement \u6ce8\u89e3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@SpringBootApplication\n@EnableTransactionManagement\npublic class Application {\n    public static void main(String[] args) {\n        SpringApplication.run(Application.class, args);\n    }\n}\n")),(0,r.kt)("h3",{id:"4-\u5728\u9700\u8981\u4f7f\u7528-hibernate-\u7684\u985e\u4e2d\u6dfb\u52a0-transactional-\u6ce8\u89e3"},"4. \u5728\u9700\u8981\u4f7f\u7528 Hibernate \u7684\u985e\u4e2d\u6dfb\u52a0 @Transactional \u6ce8\u89e3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Service\npublic class UserService {\n    @Transactional\n    public void saveUser(User user) {\n        // ...\n    }\n}\n")))}d.isMDXComponent=!0}}]);