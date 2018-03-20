function aggregates(array) {
    let sum = array.reduce((a, b) => a + b);
    let smallest = array.reduce((a,b) => Math.min(a, b));
    let biggest = array.reduce((a,b) => Math.max(a, b));
    let product = array.reduce((a,b) => a * b);
    let joined = array.join("");
    printAggregates(sum, smallest, biggest, product, joined);
}

function printAggregates(sum, smallest, biggest, product, joined){
    "use strict";
    console.log(`Sum = ${sum}`);
    console.log(`Min = ${smallest}`);
    console.log(`Max = ${biggest}`);
    console.log(`Product = ${product}`);
    console.log(`Join = ${joined}`);
}
aggregates([5, -3, 20, 7, 0.5]);


