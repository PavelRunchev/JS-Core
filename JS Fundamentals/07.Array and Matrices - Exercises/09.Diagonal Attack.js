function diagonalAttack(matrix){
    let newMatrix = [[]];
    for (let row = 0; row < matrix.length; row++) {
        newMatrix[row] = matrix[row].split(' ').map(Number);
    }
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;

    for (let row = 0; row < newMatrix.length; row++) {
        for (let col = 0; col < newMatrix[row].length; col++) {
            if(col === row){
                leftDiagonalSum += newMatrix[row][col];
                rightDiagonalSum += newMatrix[row][newMatrix.length - 1 - row];
            }
        }
    }

    if(leftDiagonalSum === rightDiagonalSum){
        for (let row = 0; row < newMatrix.length; row++) {
            for (let col = 0; col < newMatrix[row].length; col++) {
                if(col !== row && col !== newMatrix.length - 1 - row){
                   newMatrix[row][col] = leftDiagonalSum;
                }
            }
        }
    }

    console.log(newMatrix.map(e => e.join(' ')).join('\n'));
}

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);

diagonalAttack(['1 1 1',
    '1 1 1',
    '1 1 0']
);

