function magicMatrices(matrix) {

    let sum = matrix[0].reduce((a, b) => a + b);


    for (let row = 1; row < matrix.length; row++) {
        let rowSum = matrix[row].reduce((a, b) => a + b);
        if(sum !== rowSum){
            return false;
        }
    }

    for (let col = 0; col < matrix[0].length; col++) {
        let colSum = matrix.reduce((a, b) => a + b[col], 0);
        if(colSum !== sum){
            return false;
        }
    }

    return true;
}

console.log(magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
));

console.log(magicMatrices([[11, 32, 45],
    [45, 32, 11]]));

console.log(magicMatrices([[1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]]
));
