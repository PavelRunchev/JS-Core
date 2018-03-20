function negativePositiveNumbers(array){
    "use strict";
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i] < 0){
            newArray.unshift(array[i]);
        }else{
            newArray.push(array[i]);
        }
    }

    return newArray.join('\n');
}

console.log(negativePositiveNumbers([7, -2, 8, 9]));