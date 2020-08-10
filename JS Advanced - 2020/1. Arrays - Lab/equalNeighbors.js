function solve(inputArr) {
    let equalPears = 0;
    for (let i = 0; i < inputArr.length; i++) {
        for (let j = 0; j < inputArr[i].length; j++) {
            const curPosition = inputArr[i][j];
            if(i + 1 < inputArr.length) {
                const nextY = inputArr[i + 1][j];
                if(curPosition === nextY)
                    equalPears++;
            }
            
            if(j + 1 < inputArr[i].length) {
                const nextX = inputArr[i][j + 1];
                if(curPosition === nextX)
                    equalPears++;
            }
        }
    }

    return equalPears
}

console.log(solve([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]));

console.log(solve([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]));

console.log(solve([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]
]));