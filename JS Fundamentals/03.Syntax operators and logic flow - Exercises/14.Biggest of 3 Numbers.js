function biggestOf3Numbers(array){
    "use strict";
    let [num1, num2, num3] = array;
    let max =  Math.max(num1, num2, num3);
    console.log(max);
}

biggestOf3Numbers([130, 5, 99]);
