import{e as k}from"./escape-string-regexp.6f7d57f0.js";import{v as m}from"./unist-util-visit-parents.62f12f83.js";import{c as P}from"./unist-util-is.8abf3982.js";const I={}.hasOwnProperty,z=function(e,l,t,A){let u,h;typeof l=="string"||l instanceof RegExp?(h=[[l,t]],u=A):(h=l,u=t),u||(u={});const E=P(u.ignore||[]),x=F(h);let y=-1;for(;++y<x.length;)m(e,"text",O);return e;function O(n,o){let c=-1,i;for(;++c<o.length;){const a=o[c];if(E(a,i?i.children.indexOf(a):void 0,i))return;i=a}if(i)return R(n,o)}function R(n,o){const c=o[o.length-1],i=x[y][0],a=x[y][1];let p=0;const d=c.children.indexOf(n);let v=!1,s=[],g;i.lastIndex=0;let f=i.exec(n.value);for(;f;){g=f.index;const j={index:f.index,input:f.input,stack:[...o,n]};let r=a(...f,j);if(typeof r=="string"&&(r=r.length>0?{type:"text",value:r}:void 0),r!==!1&&(p!==g&&s.push({type:"text",value:n.value.slice(p,g)}),Array.isArray(r)?s.push(...r):r&&s.push(r),p=g+f[0].length,v=!0),!i.global)break;f=i.exec(n.value)}return v?(p<n.value.length&&s.push({type:"text",value:n.value.slice(p)}),c.children.splice(d,1,...s)):s=[n],d+s.length}};function F(e){const l=[];if(typeof e!="object")throw new TypeError("Expected array or object as schema");if(Array.isArray(e)){let t=-1;for(;++t<e.length;)l.push([w(e[t][0]),b(e[t][1])])}else{let t;for(t in e)I.call(e,t)&&l.push([w(t),b(e[t])])}return l}function w(e){return typeof e=="string"?new RegExp(k(e),"g"):e}function b(e){return typeof e=="function"?e:()=>e}export{z as f};
