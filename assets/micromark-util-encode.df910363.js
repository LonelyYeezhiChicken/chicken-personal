const c={'"':"quot","&":"amp","<":"lt",">":"gt"};function n(e){return e.replace(/["&<>]/g,r);function r(t){return"&"+c[t]+";"}}export{n as e};
