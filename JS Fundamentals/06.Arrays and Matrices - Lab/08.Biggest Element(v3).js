function biggestElement(matrix){
    "use strict";
    return matrix.map(array => array.sort((a, b) => a < b)[0])
        .sort((a, b) => a < b)
        .shift();
}



biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]);// 33