(function solve() {
    Array.prototype.last = function() {
        return this[this.length - 1];
    };

    Array.prototype.skip = function(n) {
        let arr = [];
        for (let i = n; i < this.length; i++) arr.push(this[i]);

        return arr;
    };

    Array.prototype.take = function(n) {
        let arr = [];
        for (let i = 0; i < n; i++) arr.push(this[i]);

        return arr;
    };

    Array.prototype.sum = function() {
        let sum = 0;
        for (let i = 0; i < this.length; i++) sum += this[i];
            
        return sum;
    };

    Array.prototype.average = function() {
        return this.sum() / this.length;
    };
})();

let array = [5, 4, 3, 6];
console.log(array.last());
console.log(array.sum());
console.log(array.average());
console.log(array.skip(1));
console.log(array.take(2));