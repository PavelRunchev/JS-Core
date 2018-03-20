let euclidsAlgorithm = function(num1, num2){
    "use strict";
    return (function () {
        let a = Number(num1);
        let b = Number(num2);
        while(a !== b){
            if(a > b){
                a = a - b;
            }else{
                b = b - a;
            }
        }
        return a;
    })();
};

console.log(euclidsAlgorithm(252, 105));