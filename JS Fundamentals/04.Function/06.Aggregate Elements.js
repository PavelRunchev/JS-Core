function aggregateElements(array){
    "use strict";
    let sum = 0;
    let sumInverse = 0;
    let concat = "";
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        sumInverse += 1 / array[i];
        concat += array[i].toString();
    }

    console.log(sum);
    console.log(sumInverse);
    console.log(concat);
}

aggregateElements([2, 4, 8, 16]);
//output 6
//output 1.8333
//output 123