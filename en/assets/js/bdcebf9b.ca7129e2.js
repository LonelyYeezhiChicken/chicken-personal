"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[9401],{3905:(e,o,n)=>{n.d(o,{Zo:()=>p,kt:()=>d});var t=n(7294);function r(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function i(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?i(Object(n),!0).forEach((function(o){r(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function a(e,o){if(null==e)return{};var n,t,r=function(e,o){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],o.indexOf(n)>=0||(r[n]=e[n]);return r}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=t.createContext({}),s=function(e){var o=t.useContext(c),n=o;return e&&(n="function"==typeof e?e(o):l(l({},o),e)),n},p=function(e){var o=s(e.components);return t.createElement(c.Provider,{value:o},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},f=t.forwardRef((function(e,o){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,d=u["".concat(c,".").concat(f)]||u[f]||y[f]||i;return n?t.createElement(d,l(l({ref:o},p),{},{components:n})):t.createElement(d,l({ref:o},p))}));function d(e,o){var n=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=f;var a={};for(var c in o)hasOwnProperty.call(o,c)&&(a[c]=o[c]);a.originalType=e,a[u]="string"==typeof e?e:r,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9346:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var t=n(7462),r=(n(7294),n(3905));const i={sidebar_position:10,description:"\u751f\u547d\u9031\u671f Hooks\uff08Lifecycle Hooks\uff09",key:["Vue","Vue\u96dc\u8a18","Composition API"],tags:["Vue","Vue\u96dc\u8a18","Composition API"]},l="\ud83d\udc69\u200d\ud83d\udcbb Lifecycle Hooks",a={unversionedId:"daylily/vueDaylily/compositionAPI/lifecycleHooks",id:"daylily/vueDaylily/compositionAPI/lifecycleHooks",title:"\ud83d\udc69\u200d\ud83d\udcbb Lifecycle Hooks",description:"\u751f\u547d\u9031\u671f Hooks\uff08Lifecycle Hooks\uff09",source:"@site/docs/daylily/vueDaylily/compositionAPI/lifecycleHooks.md",sourceDirName:"daylily/vueDaylily/compositionAPI",slug:"/daylily/vueDaylily/compositionAPI/lifecycleHooks",permalink:"/en/docs/daylily/vueDaylily/compositionAPI/lifecycleHooks",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/daylily/vueDaylily/compositionAPI/lifecycleHooks.md",tags:[{label:"Vue",permalink:"/en/docs/tags/vue"},{label:"Vue\u96dc\u8a18",permalink:"/en/docs/tags/vue\u96dc\u8a18"},{label:"Composition API",permalink:"/en/docs/tags/composition-api"}],version:"current",lastUpdatedAt:1695132841,formattedLastUpdatedAt:"Sep 19, 2023",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"\u751f\u547d\u9031\u671f Hooks\uff08Lifecycle Hooks\uff09",key:["Vue","Vue\u96dc\u8a18","Composition API"],tags:["Vue","Vue\u96dc\u8a18","Composition API"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc69\u200d\ud83d\udcbb \u751f\u547d\u9031\u671f",permalink:"/en/docs/daylily/vueDaylily/compositionAPI/compositionAPILife"},next:{title:"\ud83d\udc69\u200d\ud83d\udcbb element ui plus \u5efa\u7f6e",permalink:"/en/docs/daylily/vueDaylily/elementUi"}},c={},s=[{value:"\u751f\u547d\u9031\u671f Hooks\uff08Lifecycle Hooks\uff09",id:"\u751f\u547d\u9031\u671f-hookslifecycle-hooks",level:2},{value:"\u5e38\u898b\u7684 Lifecycle Hooks",id:"\u5e38\u898b\u7684-lifecycle-hooks",level:2}],p={toc:s},u="wrapper";function y(e){let{components:o,...n}=e;return(0,r.kt)(u,(0,t.Z)({},p,n,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-lifecycle-hooks"},"\ud83d\udc69\u200d\ud83d\udcbb Lifecycle Hooks"),(0,r.kt)("h2",{id:"\u751f\u547d\u9031\u671f-hookslifecycle-hooks"},"\u751f\u547d\u9031\u671f Hooks\uff08Lifecycle Hooks\uff09"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728 Composition API \u4e2d\uff0c\u6211\u5011\u53ef\u4ee5\u4f7f\u7528 onBeforeMount\u3001onMounted\u3001onBeforeUpdate\u3001onUpdated\u3001onBeforeUnmount \u7b49\u751f\u547d\u9031\u671f\u9264\u5b50\uff0c\u4f86\u57f7\u884c\u7d44\u4ef6\u751f\u547d\u9031\u671f\u4e2d\u7684\u64cd\u4f5c"),(0,r.kt)("p",{parentName:"blockquote"},"\u9019\u4e9b\u9264\u5b50\u5141\u8a31\u6211\u5011\u5728\u4e0d\u540c\u968e\u6bb5\u7684\u751f\u547d\u9031\u671f\u4e2d\u6dfb\u52a0\u81ea\u5b9a\u7fa9\u908f\u8f2f")),(0,r.kt)("h2",{id:"\u5e38\u898b\u7684-lifecycle-hooks"},"\u5e38\u898b\u7684 Lifecycle Hooks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"onBeforeMount\uff1a\u5728\u7d44\u4ef6\u5373\u5c07\u88ab\u639b\u8f09\u5230 DOM \u524d\u57f7\u884c"),(0,r.kt)("li",{parentName:"ul"},"onMounted\uff1a\u5728\u7d44\u4ef6\u88ab\u639b\u8f09\u5230 DOM \u5f8c\u57f7\u884c"),(0,r.kt)("li",{parentName:"ul"},"onBeforeUpdate\uff1a\u5728\u7d44\u4ef6\u5373\u5c07\u66f4\u65b0\u524d\u57f7\u884c"),(0,r.kt)("li",{parentName:"ul"},"onUpdated\uff1a\u5728\u7d44\u4ef6\u66f4\u65b0\u5b8c\u6210\u5f8c\u57f7\u884c"),(0,r.kt)("li",{parentName:"ul"},"onBeforeUnmount\uff1a\u5728\u7d44\u4ef6\u5373\u5c07\u88ab\u5378\u8f09\u524d\u57f7\u884c")),(0,r.kt)("p",null,"\u9019\u4e9b\u751f\u547d\u9031\u671f\u9264\u5b50\u53ef\u4ee5\u901a\u904e import \u7684\u65b9\u5f0f\u5f15\u5165\uff0c\u7136\u5f8c\u5728\u7d44\u4ef6\u4e2d\u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount } from 'vue';\n\nexport default {\n  setup() {\n    onBeforeMount(() => {\n      // \u5728\u7d44\u4ef6\u5373\u5c07\u88ab\u639b\u8f09\u5230 DOM \u524d\u57f7\u884c\u7684\u908f\u8f2f\n    });\n\n    onMounted(() => {\n      // \u5728\u7d44\u4ef6\u88ab\u639b\u8f09\u5230 DOM \u5f8c\u57f7\u884c\u7684\u908f\u8f2f\n    });\n\n    onBeforeUpdate(() => {\n      // \u5728\u7d44\u4ef6\u5373\u5c07\u66f4\u65b0\u524d\u57f7\u884c\u7684\u908f\u8f2f\n    });\n\n    onUpdated(() => {\n      // \u5728\u7d44\u4ef6\u66f4\u65b0\u5b8c\u6210\u5f8c\u57f7\u884c\u7684\u908f\u8f2f\n    });\n\n    onBeforeUnmount(() => {\n      // \u5728\u7d44\u4ef6\u5373\u5c07\u88ab\u5378\u8f09\u524d\u57f7\u884c\u7684\u908f\u8f2f\n    });\n\n    // \u5176\u4ed6 Composition API \u908f\u8f2f\n\n    return {};\n  },\n};\n")))}y.isMDXComponent=!0}}]);