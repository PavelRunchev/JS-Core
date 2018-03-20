function isPrime(number){
    "use strict";
    let prime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if(number % i == 0){
            prime = false;
            break;
        }
    }

    return prime && (number > 1);
}

console.log(isPrime(17));