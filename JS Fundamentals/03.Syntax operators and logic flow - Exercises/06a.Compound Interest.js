function compoundInterest(array){
    "use strict";
    //formula: F = P * (1 + i/n)^ n * t
    let principalSum = array[0];
    let interestRate = array[1] / 100;
    let compoudingPeriod = 12 / array[2];
    let time = array[3];
    let f = principalSum * Math.pow((1 + interestRate / (compoudingPeriod)), compoudingPeriod * time);
    return f.toFixed(2);
}

console.log(compoundInterest([1500, 4.3, 3, 6]));
console.log(compoundInterest([100000, 5, 12, 25]));