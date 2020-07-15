// function getFibonator() {
//     let counter = 0;
//     function fib(n) {
//         if(n <= 1)
//             return 1;
//         return fib(n - 2) + fib(n - 1);
//     }
   
//     return (() => {        
//         let result = fib(counter);
//         counter++;
//         return result;
//     });
// }

function getFibonator() {
    let f0 = 0;
    let f1 = 1;
    let isFirstFib = true;
   
    return (() => {
        if(isFirstFib) {
            isFirstFib = false;
            return 1;
        }
        let fn = f0 + f1;
        f0 = f1;
        f1 = fn;
        return f1;
    });
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
console.log(fib()); //21
