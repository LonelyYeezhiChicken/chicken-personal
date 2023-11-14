"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[9401],{49613:(e,o,t)=>{t.d(o,{Zo:()=>p,kt:()=>d});var n=t(59496);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?i(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function a(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),s=function(e){var o=n.useContext(c),t=o;return e&&(t="function"==typeof e?e(o):l(l({},o),e)),t},p=function(e){var o=s(e.components);return n.createElement(c.Provider,{value:o},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},f=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=s(t),f=r,d=u["".concat(c,".").concat(f)]||u[f]||y[f]||i;return t?n.createElement(d,l(l({ref:o},p),{},{components:t})):n.createElement(d,l({ref:o},p))}));function d(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=f;var a={};for(var c in o)hasOwnProperty.call(o,c)&&(a[c]=o[c]);a.originalType=e,a[u]="string"==typeof e?e:r,l[1]=a;for(var s=2;s<i;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},86646:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var n=t(88028),r=(t(59496),t(49613));const i={sidebar_position:10,description:"\u751f\u547d\u9031\u671f Hooks\uff08Lifecycle Hooks\uff09",key:["Vue","Vue\u96dc\u8a18","Composition API"],tags:["Vue","Vue\u96dc\u8a18","Composition API"]},l="\ud83d\udc69\u200d\ud83d\udcbb Lifecycle Hooks",a={unversionedId:"daylily/vueDaylily/compositionAPI/lifecycleHooks",id:"daylily/vueDaylily/compositionAPI/lifecycleHooks",title:"\ud83d\udc69\u200d\ud83d\udcbb Lifecycle Hooks",description:"\u751f\u547d\u9031\u671f Hooks\uff08Lifecycle Hooks\uff09",source:"@site/docs/daylily/vueDaylily/compositionAPI/lifecycleHooks.md",sourceDirName:"daylily/vueDaylily/compositionAPI",slug:"/daylily/vueDaylily/compositionAPI/lifecycleHooks",permalink:"/docs/daylily/vueDaylily/compositionAPI/lifecycleHooks",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/daylily/vueDaylily/compositionAPI/lifecycleHooks.md",tags:[{label:"Vue",permalink:"/docs/tags/vue"},{label:"Vue\u96dc\u8a18",permalink:"/docs/tags/vue\u96dc\u8a18"},{label:"Composition API",permalink:"/docs/tags/composition-api"}],version:"current",lastUpdatedAt:1699970344,formattedLastUpdatedAt:"2023\u5e7411\u670814\u65e5",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"\u751f\u547d\u9031\u671f Hooks\uff08Lifecycle Hooks\uff09",key:["Vue","Vue\u96dc\u8a18","Composition API"],tags:["Vue","Vue\u96dc\u8a18","Composition API"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc69\u200d\ud83d\udcbb \u751f\u547d\u9031\u671f",permalink:"/docs/daylily/vueDaylily/compositionAPI/compositionAPILife"},next:{title:"\ud83d\udc69\u200d\ud83d\udcbb element ui plus \u5efa\u7f6e",permalink:"/docs/daylily/vueDaylily/elementUi"}},c={},s=[{value:"\u751f\u547d\u9031\u671f Hooks\uff08Lifecycle Hooks\uff09",id:"\u751f\u547d\u9031\u671f-hookslifecycle-hooks",level:2},{value:"\u5e38\u898b\u7684 Lifecycle Hooks",id:"\u5e38\u898b\u7684-lifecycle-hooks",level:2}],p={toc:s},u="wrapper";function y(e){let{components:o,...t}=e;return(0,r.kt)(u,(0,n.Z)({},p,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-lifecycle-hooks"},"\ud83d\udc69\u200d\ud83d\udcbb Lifecycle Hooks"),(0,r.kt)("h2",{id:"\u751f\u547d\u9031\u671f-hookslifecycle-hooks"},"\u751f\u547d\u9031\u671f Hooks\uff08Lifecycle Hooks\uff09"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728 Composition API \u4e2d\uff0c\u6211\u5011\u53ef\u4ee5\u4f7f\u7528 onBeforeMount\u3001onMounted\u3001onBeforeUpdate\u3001onUpdated\u3001onBeforeUnmount \u7b49\u751f\u547d\u9031\u671f\u9264\u5b50\uff0c\u4f86\u57f7\u884c\u7d44\u4ef6\u751f\u547d\u9031\u671f\u4e2d\u7684\u64cd\u4f5c"),(0,r.kt)("p",{parentName:"blockquote"},"\u9019\u4e9b\u9264\u5b50\u5141\u8a31\u6211\u5011\u5728\u4e0d\u540c\u968e\u6bb5\u7684\u751f\u547d\u9031\u671f\u4e2d\u6dfb\u52a0\u81ea\u5b9a\u7fa9\u908f\u8f2f")),(0,r.kt)("h2",{id:"\u5e38\u898b\u7684-lifecycle-hooks"},"\u5e38\u898b\u7684 Lifecycle Hooks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"onBeforeMount\uff1a\u5728\u7d44\u4ef6\u5373\u5c07\u88ab\u639b\u8f09\u5230 DOM \u524d\u57f7\u884c"),(0,r.kt)("li",{parentName:"ul"},"onMounted\uff1a\u5728\u7d44\u4ef6\u88ab\u639b\u8f09\u5230 DOM \u5f8c\u57f7\u884c"),(0,r.kt)("li",{parentName:"ul"},"onBeforeUpdate\uff1a\u5728\u7d44\u4ef6\u5373\u5c07\u66f4\u65b0\u524d\u57f7\u884c"),(0,r.kt)("li",{parentName:"ul"},"onUpdated\uff1a\u5728\u7d44\u4ef6\u66f4\u65b0\u5b8c\u6210\u5f8c\u57f7\u884c"),(0,r.kt)("li",{parentName:"ul"},"onBeforeUnmount\uff1a\u5728\u7d44\u4ef6\u5373\u5c07\u88ab\u5378\u8f09\u524d\u57f7\u884c")),(0,r.kt)("p",null,"\u9019\u4e9b\u751f\u547d\u9031\u671f\u9264\u5b50\u53ef\u4ee5\u901a\u904e import \u7684\u65b9\u5f0f\u5f15\u5165\uff0c\u7136\u5f8c\u5728\u7d44\u4ef6\u4e2d\u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount } from 'vue';\n\nexport default {\n  setup() {\n    onBeforeMount(() => {\n      // \u5728\u7d44\u4ef6\u5373\u5c07\u88ab\u639b\u8f09\u5230 DOM \u524d\u57f7\u884c\u7684\u908f\u8f2f\n    });\n\n    onMounted(() => {\n      // \u5728\u7d44\u4ef6\u88ab\u639b\u8f09\u5230 DOM \u5f8c\u57f7\u884c\u7684\u908f\u8f2f\n    });\n\n    onBeforeUpdate(() => {\n      // \u5728\u7d44\u4ef6\u5373\u5c07\u66f4\u65b0\u524d\u57f7\u884c\u7684\u908f\u8f2f\n    });\n\n    onUpdated(() => {\n      // \u5728\u7d44\u4ef6\u66f4\u65b0\u5b8c\u6210\u5f8c\u57f7\u884c\u7684\u908f\u8f2f\n    });\n\n    onBeforeUnmount(() => {\n      // \u5728\u7d44\u4ef6\u5373\u5c07\u88ab\u5378\u8f09\u524d\u57f7\u884c\u7684\u908f\u8f2f\n    });\n\n    // \u5176\u4ed6 Composition API \u908f\u8f2f\n\n    return {};\n  },\n};\n")))}y.isMDXComponent=!0}}]);