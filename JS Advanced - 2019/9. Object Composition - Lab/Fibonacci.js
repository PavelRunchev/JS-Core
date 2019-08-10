function getFibonacci() {
    let sum = 0;
    let a = 0;
    let b = 1;

    return function () {
        sum = a + b;
        a = b;
        b = sum;
        return a;
    }
};

let fib = getFibonacci();
console.log(fib());//1
console.log(fib());//1
console.log(fib());//2
console.log(fib());//3
console.log(fib());//5
console.log(fib());//8
console.log(fib());//13
