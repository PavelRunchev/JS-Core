let func = (function (a, b){
    "use strict";
    return (function() {
        while(b !== 0){
            let t = b;
            b = a % b;
            a = t;
        }
        return a;
    })();
});

console.log(func(252, 105));