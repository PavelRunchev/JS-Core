function lastKNumbersSequence(n, k) {
    let array = [1];
    for (let i = 1; i < n; i++) {
        let start = Math.max(0, i - k);
        let end = i - 1;
        let sum = sumFromElements(array, start, end);
        array.push(sum);
    }

    function sumFromElements(array, start, end) {
        let sumArr = 0;
        for (let i = start; i <= end; i++) {
            sumArr += array[i];
        }
        return sumArr;
    }
    console.log(array.join(' '));
}

lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);