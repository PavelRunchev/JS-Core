function smallestTwoNumbers(array) {
    let newArray = [];
    let smallestTwoElements = 2;
    if(array.length === 1){
        smallestTwoElements = 1;
    }

    for (let i = 0; i < smallestTwoElements; i++) {
        let min = Number.MAX_VALUE;
        let index = 0;
        for (let k = 0; k < array.length; k++) {
            if(array[k] < min){
                min = array[k];
                index = k;
            }
        }
        newArray.push(min);
        array.splice(index, 1);
    }
    console.log(newArray.join(' '));
}

smallestTwoNumbers([3, 0, 10, 4, 7, 3]);//0 3
smallestTwoNumbers([3]);