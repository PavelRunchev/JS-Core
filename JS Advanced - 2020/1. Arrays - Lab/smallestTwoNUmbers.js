function solve(inputArr) {
    let arr = [];
    for (let i = 0; i < 2; i++) {
        arr.push(getSmallestElemnt()); 
    }

    function getSmallestElemnt() {
        let index = 0;
        let smallestElement = Number.MAX_VALUE;
        for (let g = 0; g < inputArr.length; g++) {
            if(inputArr[g] < smallestElement) {
                index = g;
                smallestElement = inputArr[g];
            }
        }

        return inputArr.splice(index, 1);
    }

    return arr.join(' ');
}

console.log(solve([30, 15, 50, 5])); //5 15
console.log(solve([3, 0, 10, 4, 7, 3])); // 0 3