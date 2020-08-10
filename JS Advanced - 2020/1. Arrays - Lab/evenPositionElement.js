function solve(inputArr) {
    return inputArr.filter((e, i) => i % 2 === 0).join(' ');
}

console.log(solve(['20', '30', '40']));
console.log(solve(['5', '10']));

