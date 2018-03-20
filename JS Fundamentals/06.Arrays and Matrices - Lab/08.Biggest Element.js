function biggestElement(matrix) {
    let biggestElement = Number.NEGATIVE_INFINITY;
    if(matrix.length === 1){
        return biggestElement = matrix[0];
    }
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let number = matrix[row][col];

            if(number > biggestElement){
                biggestElement = number;
            }
        }
    }

    return biggestElement;
}


console.log(biggestElement([3]));// 3


console.log(biggestElement([[20, 50, 10],
    [8, 33, 145]]));// 145

console.log(biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]));// 33