function solve(array) {
    let biggestElement = Number.NEGATIVE_INFINITY;
    let newArr =[];
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if(element >= biggestElement){
            biggestElement = element;
            newArr.push(element);
        }
    }

    console.log(newArr.join('\n'));
}

//solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
solve([20, 3, 2, 15, 6, 1, 3, 20]);
