import{d as f}from"./micromark-util-character.472f60a0.js";import{e as d}from"./micromark-util-encode.df910363.js";function C(i,s){const e=d(a(i||""));if(!s)return e;const r=e.indexOf(":"),o=e.indexOf("?"),t=e.indexOf("#"),n=e.indexOf("/");return r<0||n>-1&&r>n||o>-1&&r>o||t>-1&&r>t||s.test(e.slice(0,r))?e:""}function a(i){const s=[];let e=-1,r=0,o=0;for(;++e<i.length;){const t=i.charCodeAt(e);let n="";if(t===37&&f(i.charCodeAt(e+1))&&f(i.charCodeAt(e+2)))o=2;else if(t<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(t))||(n=String.fromCharCode(t));else if(t>55295&&t<57344){const c=i.charCodeAt(e+1);t<56320&&c>56319&&c<57344?(n=String.fromCharCode(t,c),o=1):n="\uFFFD"}else n=String.fromCharCode(t);n&&(s.push(i.slice(r,e),encodeURIComponent(n)),r=e+o+1,n=""),o&&(e+=o,o=0)}return s.join("")+i.slice(r)}export{C as s};
