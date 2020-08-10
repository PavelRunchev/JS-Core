function solve(inputArr) {
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;
    let leftIndex = 0;
    let rightIndex = inputArr[0].length - 1;
    inputArr.forEach(arr => {
        leftDiagonalSum += arr[leftIndex++];
        rightDiagonalSum += arr[rightIndex--];
    });

    return leftDiagonalSum + ' ' + rightDiagonalSum;
}

console.log(solve([
    [20, 40],
    [10, 60]
]));

console.log(solve([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]));