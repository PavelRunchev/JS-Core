function processOddNumbers(array) {
    let oddPositionArray = [];
    for (let i = 0; i < array.length; i++) {
        if(i % 2 !== 0){
            oddPositionArray.push(array[i] * 2);
        }
    }
    oddPositionArray.reverse();
    console.log(oddPositionArray.join(" "));
}

processOddNumbers([3, 0, 10, 4, 7, 3]);// 6 8 0