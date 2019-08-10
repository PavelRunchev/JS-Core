let myArr = (function solve() {
    //for judge to skip arr!!!
    //let arr = [1, 5, 8, 4, 2];

    Array.prototype.last = function() { return this[this.length - 1]; }
    Array.prototype.skip = function(n) { return this.slice(n); }
    Array.prototype.take = function(n) { return this.slice(0, n); }
    Array.prototype.sum = function() { return this.reduce((a, b) => a + b); }
    Array.prototype.average = function() { return this.sum() / this.length; }

    //for judge skip return arr!
    //return arr;
})();

console.log(myArr.last());  // 2
console.log(myArr.skip(2)); //[8, 4, 2]
console.log(myArr.take(2)); //[1, 5]
console.log(myArr.sum()); // 20
console.log(myArr.average()); //4