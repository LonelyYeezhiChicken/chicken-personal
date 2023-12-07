"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[5631],{49613:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>y});var r=n(59496);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=r.createContext({}),c=function(e){var a=r.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},p=function(e){var a=c(e.components);return r.createElement(s.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=t,y=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(y,i(i({ref:a},p),{},{components:n})):r.createElement(y,i({ref:a},p))}));function y(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[d]="string"==typeof e?e:t,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},75158:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(88028),t=(n(59496),n(49613));const o={sidebar_position:25,description:"Spring Boot  Hibernate \u9023\u63a5 MSSQL",key:["java","\u96dc\u8a18","Hibernate","Spring Boot","MSSQL"],tags:["java","java\u96dc\u8a18","Hibernate","Spring Boot","MSSQL"]},i="\ud83d\udc69\u200d\ud83d\udcbb Spring Boot  Hibernate \u9023\u63a5 MSSQL",l={unversionedId:"daylily/javaDaylily/javaConnentMSSQL",id:"daylily/javaDaylily/javaConnentMSSQL",title:"\ud83d\udc69\u200d\ud83d\udcbb Spring Boot  Hibernate \u9023\u63a5 MSSQL",description:"Spring Boot  Hibernate \u9023\u63a5 MSSQL",source:"@site/docs/daylily/javaDaylily/javaConnentMSSQL.md",sourceDirName:"daylily/javaDaylily",slug:"/daylily/javaDaylily/javaConnentMSSQL",permalink:"/en/docs/daylily/javaDaylily/javaConnentMSSQL",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/daylily/javaDaylily/javaConnentMSSQL.md",tags:[{label:"java",permalink:"/en/docs/tags/java"},{label:"java\u96dc\u8a18",permalink:"/en/docs/tags/java\u96dc\u8a18"},{label:"Hibernate",permalink:"/en/docs/tags/hibernate"},{label:"Spring Boot",permalink:"/en/docs/tags/spring-boot"},{label:"MSSQL",permalink:"/en/docs/tags/mssql"}],version:"current",lastUpdatedAt:1701959684,formattedLastUpdatedAt:"Dec 7, 2023",sidebarPosition:25,frontMatter:{sidebar_position:25,description:"Spring Boot  Hibernate \u9023\u63a5 MSSQL",key:["java","\u96dc\u8a18","Hibernate","Spring Boot","MSSQL"],tags:["java","java\u96dc\u8a18","Hibernate","Spring Boot","MSSQL"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc69\u200d\ud83d\udcbb Spring Data JPA\u8207Hibernate\u7684\u95dc\u4fc2",permalink:"/en/docs/daylily/javaDaylily/javaDataJPAWithHibernate"},next:{title:"\ud83d\udc69\u200d\ud83d\udcbb \u641c\u5c0b class \u4f86\u81ea\u54ea\u500b jar",permalink:"/en/docs/daylily/javaDaylily/javaFindJar"}},s={},c=[{value:"1. \u5728 pom.xml \u4e2d\u6dfb\u52a0 MSSQL \u9a45\u52d5\u7a0b\u5e8f\u7684\u4f9d\u8cf4",id:"1-\u5728-pomxml-\u4e2d\u6dfb\u52a0-mssql-\u9a45\u52d5\u7a0b\u5e8f\u7684\u4f9d\u8cf4",level:2},{value:"2. \u5728 application.properties \u4e2d\u6dfb\u52a0 MSSQL \u9023\u63a5\u5c6c\u6027",id:"2-\u5728-applicationproperties-\u4e2d\u6dfb\u52a0-mssql-\u9023\u63a5\u5c6c\u6027",level:2},{value:"3. \u5728 application.properties \u4e2d\u6dfb\u52a0 Hibernate \u5c6c\u6027",id:"3-\u5728-applicationproperties-\u4e2d\u6dfb\u52a0-hibernate-\u5c6c\u6027",level:2},{value:"4. \u5728\u914d\u7f6e\u985e\u4e2d\u6dfb\u52a0 @EnableTransactionManagement \u8a3b\u89e3",id:"4-\u5728\u914d\u7f6e\u985e\u4e2d\u6dfb\u52a0-enabletransactionmanagement-\u8a3b\u89e3",level:2},{value:"5. \u5728\u914d\u7f6e\u985e\u4e2d\u6dfb\u52a0 EntityManagerFactory \u548c TransactionManager \u7684 Bean",id:"5-\u5728\u914d\u7f6e\u985e\u4e2d\u6dfb\u52a0-entitymanagerfactory-\u548c-transactionmanager-\u7684-bean",level:2}],p={toc:c},d="wrapper";function m(e){let{components:a,...n}=e;return(0,t.kt)(d,(0,r.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"-spring-boot--hibernate-\u9023\u63a5-mssql"},"\ud83d\udc69\u200d\ud83d\udcbb Spring Boot  Hibernate \u9023\u63a5 MSSQL"),(0,t.kt)("p",null,"\u4ee5\u4e0b\u662f\u4f7f\u7528 Spring Boot \u9023\u63a5 MSSQL \u7684\u7bc4\u4f8b\uff1a"),(0,t.kt)("h2",{id:"1-\u5728-pomxml-\u4e2d\u6dfb\u52a0-mssql-\u9a45\u52d5\u7a0b\u5e8f\u7684\u4f9d\u8cf4"},"1. \u5728 pom.xml \u4e2d\u6dfb\u52a0 MSSQL \u9a45\u52d5\u7a0b\u5e8f\u7684\u4f9d\u8cf4"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.microsoft.sqlserver</groupId>\n    <artifactId>mssql-jdbc</artifactId>\n    <version>7.4.1.jre8</version>\n</dependency>\n")),(0,t.kt)("h2",{id:"2-\u5728-applicationproperties-\u4e2d\u6dfb\u52a0-mssql-\u9023\u63a5\u5c6c\u6027"},"2. \u5728 application.properties \u4e2d\u6dfb\u52a0 MSSQL \u9023\u63a5\u5c6c\u6027"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},"spring.datasource.url=jdbc:sqlserver://localhost:1433;databaseName=mydb\nspring.datasource.username=username\nspring.datasource.password=password\nspring.datasource.driver-class-name=com.microsoft.sqlserver.jdbc.SQLServerDriver\n")),(0,t.kt)("h2",{id:"3-\u5728-applicationproperties-\u4e2d\u6dfb\u52a0-hibernate-\u5c6c\u6027"},"3. \u5728 application.properties \u4e2d\u6dfb\u52a0 Hibernate \u5c6c\u6027"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},"spring.jpa.hibernate.ddl-auto=update\nspring.jpa.properties.hibernate.dialect=org.hibernate.dialect.SQLServer2012Dialect\n")),(0,t.kt)("h2",{id:"4-\u5728\u914d\u7f6e\u985e\u4e2d\u6dfb\u52a0-enabletransactionmanagement-\u8a3b\u89e3"},"4. \u5728\u914d\u7f6e\u985e\u4e2d\u6dfb\u52a0 @EnableTransactionManagement \u8a3b\u89e3"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},"@Configuration\n@EnableTransactionManagement\npublic class DatabaseConfig {\n    // ...\n}\n")),(0,t.kt)("h2",{id:"5-\u5728\u914d\u7f6e\u985e\u4e2d\u6dfb\u52a0-entitymanagerfactory-\u548c-transactionmanager-\u7684-bean"},"5. \u5728\u914d\u7f6e\u985e\u4e2d\u6dfb\u52a0 EntityManagerFactory \u548c TransactionManager \u7684 Bean"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},'\n@Bean\npublic LocalContainerEntityManagerFactoryBean entityManagerFactory() {\n    LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();\n    em.setDataSource(dataSource());\n    em.setPackagesToScan(new String[] { "com.example.domain" });\n    JpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();\n    em.setJpaVendorAdapter(vendorAdapter);\n    em.setJpaProperties(additionalProperties());\n    return em;\n}\n\n@Bean\npublic DataSource dataSource(){\n    DriverManagerDataSource dataSource = new DriverManagerDataSource();\n    dataSource.setDriverClassName("com.microsoft.sqlserver.jdbc.SQLServerDriver");\n    dataSource.setUrl("jdbc:sqlserver://localhost:1433;databaseName=mydb");\n    dataSource.setUsername( "username" );\n    dataSource.setPassword( "password" );\n    return dataSource;\n}\n\n@Bean\npublic PlatformTransactionManager transactionManager(EntityManagerFactory emf){\n    JpaTransactionManager transactionManager = new JpaTransactionManager();\n    transactionManager.setEntityManagerFactory(emf);\n    return transactionManager;\n}\n\nProperties additionalProperties() {\n    Properties propertie\n}\n')))}m.isMDXComponent=!0}}]);