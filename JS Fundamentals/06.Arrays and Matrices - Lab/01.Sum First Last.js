function sumFirstLastElements(array){
    "use strict";

    let firstElement = Number(array.slice(0, 1));//get first element
    let lastElement = Number(array.pop());//get last element and remove it
    return firstElement + lastElement;
}

console.log(sumFirstLastElements(['20', '30', '40']));