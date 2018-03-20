function firsAndLastKNumbers(array) {
    let k = array.shift(0);
    let firstElements = array.slice(0, k);
    let lastElements= array.slice(-k);
    console.log(firstElements);
    console.log(lastElements);
}


firsAndLastKNumbers([2, 7, 8, 9]);
firsAndLastKNumbers([3, 6, 7, 8, 9]);
