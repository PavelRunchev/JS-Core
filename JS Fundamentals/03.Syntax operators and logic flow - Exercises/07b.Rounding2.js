function rounding2(array){
    "use strict";
    let [number, precision] = array;
    if(precision > 15){
        precision = 15;
    }
    return +number.toFixed(precision);
}

console.log(rounding2([3.1415926535897932384626433832795, 5]));
console.log(rounding2([22.55, 3]));