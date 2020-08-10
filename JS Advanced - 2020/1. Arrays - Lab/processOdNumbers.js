function solve(inputArr) {
    return inputArr
        .filter((e, i) => i % 2 === 1)
        .map(e => e = e * 2)
        .reverse()
        .join(' ');
}

console.log(solve([10, 15, 20, 25]));
console.log(solve([3, 0, 10, 4, 7, 3]));