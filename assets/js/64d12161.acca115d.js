"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[1131],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),k=s(t),m=a,d=k["".concat(c,".").concat(m)]||k[m]||u[m]||o;return t?r.createElement(d,l(l({ref:n},p),{},{components:t})):r.createElement(d,l({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[k]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5765:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:15,description:"knn \u6f14\u7b97\u6cd5 (\u8fd1\u9130\u6f14\u7b97\u6cd5)",key:["ML","\u6a5f\u5668\u5b78\u7fd2","K \u8fd1\u9130\u6f14\u7b97\u6cd5","knn","k-nearest neighbor","k-NN"],tags:["ML","\u6a5f\u5668\u5b78\u7fd2","knn"]},l="K \u8fd1\u9130\u6f14\u7b97\u6cd5 (k-NN)",i={unversionedId:"ml/knnPython",id:"ml/knnPython",title:"K \u8fd1\u9130\u6f14\u7b97\u6cd5 (k-NN)",description:"knn \u6f14\u7b97\u6cd5 (\u8fd1\u9130\u6f14\u7b97\u6cd5)",source:"@site/docs/ml/knnPython.md",sourceDirName:"ml",slug:"/ml/knnPython",permalink:"/docs/ml/knnPython",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/ml/knnPython.md",tags:[{label:"ML",permalink:"/docs/tags/ml"},{label:"\u6a5f\u5668\u5b78\u7fd2",permalink:"/docs/tags/\u6a5f\u5668\u5b78\u7fd2"},{label:"knn",permalink:"/docs/tags/knn"}],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15,description:"knn \u6f14\u7b97\u6cd5 (\u8fd1\u9130\u6f14\u7b97\u6cd5)",key:["ML","\u6a5f\u5668\u5b78\u7fd2","K \u8fd1\u9130\u6f14\u7b97\u6cd5","knn","k-nearest neighbor","k-NN"],tags:["ML","\u6a5f\u5668\u5b78\u7fd2","knn"]},sidebar:"tutorialSidebar",previous:{title:"\u6a5f\u5668\u5b78\u7fd2 \u7b46\u8a18",permalink:"/docs/category/\u6a5f\u5668\u5b78\u7fd2-\u7b46\u8a18"},next:{title:"Three JS",permalink:"/docs/category/three-js"}},c={},s=[{value:"k-nearest neighbor",id:"k-nearest-neighbor",level:2},{value:"K-NN \u4e09\u5927\u8981\u7d20",id:"k-nn-\u4e09\u5927\u8981\u7d20",level:2},{value:"K-NN \u7684\u904b\u4f5c\u65b9\u5f0f\u5982\u4e0b\uff1a",id:"k-nn-\u7684\u904b\u4f5c\u65b9\u5f0f\u5982\u4e0b",level:3},{value:"K-NN \u7684\u512a\u9ede\u5305\u62ec\uff1a",id:"k-nn-\u7684\u512a\u9ede\u5305\u62ec",level:3},{value:"K-NN \u7684\u7f3a\u9ede\u5305\u62ec\uff1a",id:"k-nn-\u7684\u7f3a\u9ede\u5305\u62ec",level:3},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:3},{value:"ref",id:"ref",level:3}],p={toc:s},k="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(k,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"k-\u8fd1\u9130\u6f14\u7b97\u6cd5-k-nn"},"K \u8fd1\u9130\u6f14\u7b97\u6cd5 (k-NN)"),(0,a.kt)("h2",{id:"k-nearest-neighbor"},"k-nearest neighbor"),(0,a.kt)("p",null,"K \u8fd1\u9130\u6f14\u7b97\u6cd5 (k-nearest neighbor, k-NN) \u662f\u4e00\u7a2e\u57fa\u672c\u7684\u5206\u985e\u8207\u56de\u6b78\u65b9\u6cd5\uff0c\u5c6c\u65bc\u975e\u76e3\u7763\u5f0f\u5b78\u7fd2\u3002\u5176\u4e3b\u8981\u529f\u80fd\u662f\u6839\u64da\u8f38\u5165\u7684\u7279\u5fb5\u5411\u91cf\u4f86\u9810\u6e2c\u5be6\u9ad4\u7684\u985e\u5225\u3002\u8a72\u6f14\u7b97\u6cd5\u901a\u904e\u8a08\u7b97\u4e0d\u540c\u6578\u64da\u4e4b\u9593\u7684\u76f8\u4f3c\u5ea6\u4f86\u9032\u884c\u5206\u985e\u6216\u56de\u6b78\uff0c\u4e26\u6839\u64da\u6700\u8fd1\u9130\u7684\u7279\u5fb5\u5411\u91cf\u4f86\u9032\u884c\u9810\u6e2c\u3002"),(0,a.kt)("h2",{id:"k-nn-\u4e09\u5927\u8981\u7d20"},"K-NN \u4e09\u5927\u8981\u7d20"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8ddd\u96e2\u5ea6\u91cf\uff1a\u6b64\u6f14\u7b97\u6cd5\u6703\u8a08\u7b97\u5169\u500b\u6578\u64da\u4e4b\u9593\u7684\u76f8\u4f3c\u5ea6\uff0c\u5e38\u898b\u7684\u8ddd\u96e2\u5ea6\u91cf\u5305\u62ec\u6b50\u57fa\u91cc\u5fb7\u8ddd\u96e2\u3001\u66fc\u54c8\u9813\u8ddd\u96e2\u548c\u5207\u6bd4\u96ea\u592b\u8ddd\u96e2\u7b49\u3002"),(0,a.kt)("li",{parentName:"ol"},"K \u503c\uff1aK \u503c\u5b9a\u7fa9\u4e86\u4f7f\u7528\u591a\u5c11\u500b\u6700\u8fd1\u9130\u9ede\u4f86\u9032\u884c\u9810\u6e2c\uff0c\u901a\u5e38 K \u503c\u8d8a\u5c0f\uff0c\u6a21\u578b\u6703\u8d8a\u8907\u96dc\uff0c\u76f8\u53cd\u5730\uff0cK \u503c\u8d8a\u5927\uff0c\u6a21\u578b\u76f8\u5c0d\u7c21\u55ae\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5206\u985e\u6c7a\u7b56\u898f\u5247\uff1a\u6f14\u7b97\u6cd5\u9700\u8981\u4e00\u7a2e\u65b9\u5f0f\u4f86\u6c7a\u5b9a\u6700\u7d42\u7684\u5206\u985e\u7d50\u679c\uff0c\u4f8b\u5982\u6295\u7968\u6c7a\u7b56\u6216\u52a0\u6b0a\u6295\u7968\u6c7a\u7b56\u7b49\u3002")),(0,a.kt)("h3",{id:"k-nn-\u7684\u904b\u4f5c\u65b9\u5f0f\u5982\u4e0b"},"K-NN \u7684\u904b\u4f5c\u65b9\u5f0f\u5982\u4e0b\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7d66\u5b9a\u7684\u7279\u5fb5\u5411\u91cf\u548c\u76f8\u4f3c\u5ea6\u5ea6\u91cf\u65b9\u6cd5\uff0c\u8a08\u7b97\u5f85\u9810\u6e2c\u6578\u64da\u9ede\u8207\u8a13\u7df4\u96c6\u4e2d\u5404\u6578\u64da\u9ede\u4e4b\u9593\u7684\u8ddd\u96e2\u6216\u76f8\u4f3c\u5ea6\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8ddd\u96e2\u6216\u76f8\u4f3c\u5ea6\u7684\u5927\u5c0f\uff0c\u9078\u53d6\u6700\u63a5\u8fd1\u5f85\u9810\u6e2c\u6578\u64da\u9ede\u7684 K \u500b\u8a13\u7df4\u96c6\u4e2d\u7684\u6578\u64da\u9ede\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u9078\u53d6\u7684 K \u500b\u8a13\u7df4\u96c6\u4e2d\u7684\u6578\u64da\u9ede\u7684\u985e\u5225\uff0c\u4f7f\u7528\u6295\u7968\u6c7a\u7b56\u898f\u5247\u6216\u52a0\u6b0a\u6295\u7968\u6c7a\u7b56\u898f\u5247\u4f86\u9810\u6e2c\u5f85\u9810\u6e2c\u6578\u64da\u9ede\u7684\u985e\u5225\u3002")),(0,a.kt)("h3",{id:"k-nn-\u7684\u512a\u9ede\u5305\u62ec"},"K-NN \u7684\u512a\u9ede\u5305\u62ec\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c21\u55ae\u4e14\u6613\u65bc\u5be6\u73fe\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u9700\u8981\u9032\u884c\u6a21\u578b\u8a13\u7df4\uff0c\u56e0\u6b64\u53ef\u4ee5\u76f4\u63a5\u9032\u884c\u9810\u6e2c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5c0d\u65bc\u591a\u985e\u5225\u5206\u985e\u554f\u984c\u548c\u591a\u6a19\u7c64\u5206\u985e\u554f\u984c\u90fd\u9069\u7528\u3002")),(0,a.kt)("h3",{id:"k-nn-\u7684\u7f3a\u9ede\u5305\u62ec"},"K-NN \u7684\u7f3a\u9ede\u5305\u62ec\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9810\u6e2c\u901f\u5ea6\u76f8\u5c0d\u8f03\u6162\uff0c\u56e0\u70ba\u9700\u8981\u8a08\u7b97\u8207\u8a13\u7df4\u96c6\u4e2d\u6240\u6709\u6578\u64da\u9ede\u7684\u8ddd\u96e2\u6216\u76f8\u4f3c\u5ea6\u3002"),(0,a.kt)("li",{parentName:"ol"},'\u5c0d\u65bc\u9ad8\u7dad\u7279\u5fb5\u7a7a\u9593\u6216\u5927\u898f\u6a21\u6578\u64da\u96c6\u53ef\u80fd\u6548\u679c\u4e0d\u4f73\uff0c\u56e0\u70ba\u5728\u9ad8\u7dad\u7a7a\u9593\u4e2d\uff0c\u8ddd\u96e2\u5ea6\u91cf\u5bb9\u6613\u53d7\u5230"\u7dad\u5ea6\u707d\u96e3"\u7684\u5f71\u97ff\uff0c\u4e14\u9700\u8981\u8f03\u5927\u7684\u5b58\u5132\u7a7a\u9593\u3002'),(0,a.kt)("li",{parentName:"ol"},"\u5c0d\u65bc\u4e0d\u5e73\u8861\u6578\u64da\u96c6\u6216\u566a\u8072\u6578\u64da\u96c6\u5bb9\u6613\u53d7\u5230\u5e72\u64fe\uff0c\u53ef\u80fd\u6703\u7522\u751f\u8aa4\u5224\u3002"),(0,a.kt)("li",{parentName:"ol"},"K \u503c\u7684\u9078\u64c7\u5c0d\u9810\u6e2c\u7d50\u679c\u5177\u6709\u91cd\u8981\u5f71\u97ff\uff0c\u9700\u8981\u4ed4\u7d30\u8abf\u53c3\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u7121\u6cd5\u8655\u7406\u7f3a\u5931\u503c\u6216\u4e0d\u5b8c\u6574\u7684\u6578\u64da\u3002")),(0,a.kt)("h3",{id:"\u7d50\u8ad6"},"\u7d50\u8ad6"),(0,a.kt)("p",null,"K \u8fd1\u9130\u6f14\u7b97\u6cd5 (k-nearest neighbor, k-NN) \u662f\u4e00\u7a2e\u7c21\u55ae\u4e14\u6613\u65bc\u5be6\u73fe\u7684\u975e\u76e3\u7763\u5f0f\u5b78\u7fd2\u65b9\u6cd5\uff0c\u4e3b\u8981\u7528\u65bc\u5206\u985e\u548c\u56de\u6b78\u554f\u984c\u3002\u5176\u57fa\u672c\u601d\u60f3\u662f\u6839\u64da\u7279\u5fb5\u5411\u91cf\u7684\u76f8\u4f3c\u5ea6\u4f86\u9032\u884c\u9810\u6e2c\uff0c\u4e26\u901a\u904e\u9078\u53d6\u6700\u8fd1\u7684 K \u500b\u9130\u5c45\u4f86\u9032\u884c\u5206\u985e\u6216\u56de\u6b78\u3002\u5118\u7ba1 K-NN \u6709\u4e00\u4e9b\u7f3a\u9ede\uff0c\u4f46\u5728\u7279\u5b9a\u7684\u61c9\u7528\u5834\u666f\u4e2d\u4ecd\u7136\u53ef\u4ee5\u662f\u4e00\u500b\u6709\u6548\u7684\u6a5f\u5668\u5b78\u7fd2\u5de5\u5177\u3002\u5728\u5be6\u969b\u61c9\u7528\u4e2d\uff0c\u6211\u5011\u61c9\u8a72\u6839\u64da\u6578\u64da\u96c6\u7684\u7279\u9ede\u548c\u9700\u6c42\u4f86\u9078\u64c7\u5408\u9069\u7684\u8ddd\u96e2\u5ea6\u91cf\u3001K \u503c\u548c\u5206\u985e\u6c7a\u7b56\u898f\u5247\uff0c\u4e26\u9032\u884c\u9069\u7576\u7684\u7279\u5fb5\u5de5\u7a0b\u548c\u6a21\u578b\u8a55\u4f30\uff0c\u4ee5\u7372\u5f97\u8f03\u597d\u7684\u9810\u6e2c\u6548\u679c\u3002"),(0,a.kt)("h3",{id:"ref"},"ref"),(0,a.kt)("hr",null),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Cover, T., & Hart, P. (1967). Nearest neighbor pattern classification. IEEE Transactions on Information Theory, 13(1), 21-27."),(0,a.kt)("li",{parentName:"ol"},"Duda, R. O., Hart, P. E., & Stork, D. G. (2012). Pattern classification. John Wiley & Sons."),(0,a.kt)("li",{parentName:"ol"},"Zhang, D. (2011). Nearest neighbor search: a database perspective. ACM SIGMOD Record, 40(2), 18-25."),(0,a.kt)("li",{parentName:"ol"},"Altman, N. S. (1992). An introduction to kernel and nearest-neighbor nonparametric regression. The American Statistician, 46(3), 175-185."),(0,a.kt)("li",{parentName:"ol"},'Beyer, K., Goldstein, J., Ramakrishnan, R., & Shaft, U. (1999). When is "nearest neighbor" meaningful?. In International Conference on Database Theory (pp. 217-235). Springer.')))}u.isMDXComponent=!0}}]);