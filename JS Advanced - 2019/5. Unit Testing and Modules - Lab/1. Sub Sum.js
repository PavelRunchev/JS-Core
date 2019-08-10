function sum(arr, startIndex, endIndex) {

    if(!Array.isArray(arr)) {
        return NaN;
    }

    if(startIndex < 0 || startIndex > arr.length - 1) {
        startIndex = 0;
    }

    if(endIndex > arr.length - 1) {
        endIndex = arr.length - 1;
    }

    let sumArr = 0;
    for(let i = startIndex; i <= endIndex; i++) {
        if(typeof (arr[i]) !== 'number')
            return NaN;

        sumArr += +arr[i];
    }

    return sumArr;
}

console.log(sum([], 0, 0));

module.exports = sum;