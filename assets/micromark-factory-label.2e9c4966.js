import{m as g,f as p}from"./micromark-util-character.472f60a0.js";function w(r,h,E,m,t,x){const S=this;let i=0,a;return b;function b(n){return r.enter(m),r.enter(t),r.consume(n),r.exit(t),r.enter(x),l}function l(n){return n===null||n===91||n===93&&!a||n===94&&!i&&"_hiddenFootnoteSupport"in S.parser.constructs||i>999?E(n):n===93?(r.exit(x),r.enter(t),r.consume(n),r.exit(t),r.exit(m),h):g(n)?(r.enter("lineEnding"),r.consume(n),r.exit("lineEnding"),l):(r.enter("chunkString",{contentType:"string"}),u(n))}function u(n){return n===null||n===91||n===93||g(n)||i++>999?(r.exit("chunkString"),l(n)):(r.consume(n),a=a||!p(n),n===92?o:u)}function o(n){return n===91||n===92||n===93?(r.consume(n),i++,u):u(n)}}export{w as f};