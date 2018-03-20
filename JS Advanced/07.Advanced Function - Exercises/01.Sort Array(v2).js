function sortArray(inputArray, orderMethod) {
    let sortedArray;
    let closure = (function () {
        return {
            asc: (arr) => sortedArray = ascendingSorted(arr),
            desc: (arr) => sortedArray = descendingSorted(arr)
        };
    })();

    function ascendingSorted(arr) {
        return arr.sort((a, b) => a - b);
    }

    function descendingSorted(arr){
        return arr.sort((a, b) => b - a);
    }

    closure[orderMethod](inputArray);
    return sortedArray;
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));