function processOddNumbers(array) {
    let oddPositionArray = array
        .filter((e, index) => index % 2 !== 0)
        .map(e => e * 2)
        .reverse();
    console.log(oddPositionArray.join(" "));
}

processOddNumbers([3, 0, 10, 4, 7, 3]);// 6 8 0