function solve(inputArr) {
    let biggestElement = Number.MIN_SAFE_INTEGER;
    inputArr.forEach(arr => {
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] > biggestElement)
                biggestElement = arr[i];
        }
    });

    return biggestElement;
}

console.log(solve([
    [20, 50, 10],
    [8, 33, 145]
]));

console.log(solve([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
]));

console.log(solve([
    [-0.5, -1.66, -8.025, -0.55]
]));