function solve(inputMatrice) {
    const initialSum = inputMatrice[0].reduce((acc, curr) => acc += curr, 0);
    for (let row = 0; row < inputMatrice.length; row++) {
        const rowSum = inputMatrice[row].reduce((acc, curr) => acc += curr, 0);
        if(initialSum !== rowSum) return false;
    }

    for (let col = 0; col < inputMatrice[0].length; col++) {
        const sumCol = inputMatrice.reduce((acc, curr) => acc += curr[col], 0);
        if(initialSum !== sumCol) return false;
    }
    return true;
}

console.log(solve([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]));

console.log(solve([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]));

console.log(solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));

console.log(solve([
    [3, 5, 3],
    [5, 3, 5],
]));

