function uniqueSequence(array) {
    let uniqueArray = [];
    for (let element of array) {
        let sequence = JSON.parse(element).map(Number);
        let currSum = sequence.reduce((a,b) => a + b);
        if(!uniqueArray.find(arr => arr.reduce((a,b) => a+b) === currSum)){
            uniqueArray.push(sequence);
        }
    }

    let sortedArray = uniqueArray.sort((a,b) => a.length - b.length);
    for (let arr of sortedArray) {
        let sortedNumbersArray = arr.sort((a,b) => b - a);
        console.log(`[${sortedNumbersArray.join(", ")}]`);
    }
}
uniqueSequence(["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"]);

uniqueSequence(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]);

