function solve(inputArr) {
    let arr = [];
    let biggestElement = inputArr.shift();
    arr.push(biggestElement);
    inputArr.forEach(el => {
        if(el >= biggestElement) {
            biggestElement = el;
            arr.push(el);
        }
    });

    return arr.join('\n');
}

console.log(solve([20, 3, 2, 15,6, 1]));
console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));