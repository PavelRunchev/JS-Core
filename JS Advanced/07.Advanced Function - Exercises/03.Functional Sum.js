let func = (function(){
    "use strict";
    let sum = 0;
    return function add(number) {
        sum += number;
        add.toString = function () {
            return sum;
        };

        return add;
    }
})();

console.log(func(1)(6)(-3).toString());


//for judge

//(function(){
//    let sum = 0;
//    return function add(number) {
//        sum += number;
//        add.toString = function () {
//            return sum;
//        }
//        return add;
//    }
//})()
