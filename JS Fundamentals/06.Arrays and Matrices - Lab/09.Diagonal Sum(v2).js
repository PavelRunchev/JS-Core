function diagonalSums(matrix) {

    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if(row === col){
                leftDiagonalSum += matrix[row][col];
                rightDiagonalSum += matrix[row][matrix.length - 1 - row];
            }
        }
    }

    console.log(leftDiagonalSum + ' ' + rightDiagonalSum);
}

diagonalSums([[20, 40],
    [10, 60]]);