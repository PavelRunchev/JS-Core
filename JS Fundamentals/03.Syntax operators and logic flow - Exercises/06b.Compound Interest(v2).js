function compoundInterest(array){
    "use strict";
    //formula: F = P * (1 + i/n)^ n * t
    let [p, i, n, t] = array;
    class Deposit{
        constructor(p, i, n, t){
            this.p = p;
            this.i = i;
            this.n = n;
            this.t = t;
        }

        calculate(){
            return this.p * Math.pow(1 + ((this.i / 100) / (12 / this.n)), (12 / this.n) * this.t);
        }
    }

    let deposit = new Deposit(p, i, n, t);
    return deposit.calculate().toFixed(2);
}

console.log(compoundInterest([1500, 4.3, 3, 6]));
console.log(compoundInterest([100000, 5, 12, 25]));