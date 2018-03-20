function rounding(array){
    "use strict";
    let number = array[0];
    let precision = array[1];
    let denominator = Math.pow(10, precision);
    return Math.round(number * denominator) / denominator;
}

console.log(rounding([3.1415926535897932384626433832795, 2]));
console.log(rounding([10.5, 3]));