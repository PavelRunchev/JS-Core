function equalNeighbors(matrix){
    "use strict";
    let equalCounter = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {

            let rowLength = matrix[row].length;
            let colLength = matrix.length;

            let right = stepRight(col, rowLength);
            let down = stepDown(row, col, colLength);

            let currentElement = matrix[row][col];
            if(right !== undefined){
                let rightNeighbor = matrix[row][right];
                if(currentElement === rightNeighbor
                    && right < rowLength) {
                    equalCounter++;
                }
            }

            if(down !== undefined){
                let downNeighbor = matrix[down][col];
                if(currentElement === downNeighbor){
                    equalCounter++;
                }
            }
        }
    }

    function stepRight(col, lenRow) {
        if(col >= lenRow - 1){
            return undefined;
        }
        return col + 1;
    }

    function stepDown(row, col, lenCol){
        if(row >= lenCol - 1){
            return undefined;
        }
        return row + 1;
    }

    console.log(equalCounter);
}

equalNeighbors([['2', '2', '2', '2', '2'],
                ['2', '2', '2', '2', '2'],
                ['2', '2', '2', '2', '2']]
);
//22

equalNeighbors([['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
);
//1

equalNeighbors([['yes', 'yo'],
    ['done', 'yo'],
    ['done', 'yet']]
);
//2