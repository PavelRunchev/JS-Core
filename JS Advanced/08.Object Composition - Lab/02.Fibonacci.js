function fibonacci(n) {
    let f0 = 0;
    let f1 = 1;
    return function () {
        let fn = f0 + f1;
        f0 = f1;
        f1 = fn;
        return f0;
    }
}

let func = fibonacci();
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());
