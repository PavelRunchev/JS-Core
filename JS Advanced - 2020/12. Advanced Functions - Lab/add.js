function solution(value) {
    let number = value;

    return function(n) {
        return number + n;
    }
}

let add5 = solution(5);
console.log(add5(2)); //7
console.log(add5(3)); //8

let add7 = solution(7);
console.log(add7(2)); //9
console.log(add7(3)); //10
