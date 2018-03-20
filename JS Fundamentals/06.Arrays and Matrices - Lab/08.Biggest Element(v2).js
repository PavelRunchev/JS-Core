function biggestElement(matrix){
    "use strict";
    let biggestNumber = Number.NEGATIVE_INFINITY;
    matrix.forEach(
        e => e.forEach(
            c => biggestNumber = Math.max(biggestNumber, c)
        )
    );
    return biggestNumber;
}


console.log(biggestElement([3]));// 3


console.log(biggestElement([[20, 50, 10],
    [8, 33, 145]]));// 145

console.log(biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]));// 33