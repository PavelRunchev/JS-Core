function magicMatrices(matrix) {

    let sum = 0;
    matrix[0].forEach(x => sum += x);
    for (let row = 0; row < matrix.length; row++) {
        let rowSum = 0;
        matrix[row].forEach(x => rowSum += x);
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

