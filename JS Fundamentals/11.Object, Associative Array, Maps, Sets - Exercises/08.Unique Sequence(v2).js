function uniqueSequence(array) {
    let uniqueMap = new Map();
    for (let element of array) {
        let sequence = JSON.parse(element)
            .map(Number)
            .sort((a,b) => b - a);
        let currSum = sequence.reduce((a,b) => a + b);
        if(!uniqueMap.has(currSum)){
            uniqueMap.set(currSum, sequence);
        }
    }

    let sortedArray = [...uniqueMap.entries()]
        .sort(sortByLength);
    for (let [key, value] of sortedArray) {
        console.log(`[${value.join(", ")}]`);
    }

    function sortByLength(a,b){
        "use strict";
        let lenA = a[1].length;
        let lenB = b[1].length;
        return lenA - lenB;
    }
}
uniqueSequence(["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"]);

uniqueSequence(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]);