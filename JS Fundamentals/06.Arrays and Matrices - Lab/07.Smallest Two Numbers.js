function smallestTwoNumbers(array) {
    let sortArray = array.sort((a, b) => a - b);
    let getTwoSmallestElements = sortArray.slice(0, 2);
    console.log(getTwoSmallestElements.join(' '));
}

smallestTwoNumbers([30, 15, 50, 5]);