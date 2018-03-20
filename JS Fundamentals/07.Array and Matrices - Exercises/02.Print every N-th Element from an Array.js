function solve(array){
    "use strict";
    let step = Number(array.pop());
    for (let i = 0; i < array.length; i+= step) {
        console.log(array[i]);
    }
}


solve([5, 20, 31, 4, 20, 2]);
solve(['dsa', 'asd', 'test', 'test', 2]);
solve([1, 2, 3, 4, 5, 6]);