function modifyAverage(n){
    "use strict";
    let array = [];
    array = digits(n);
    while(true){
        let averageSum = average(array);
        if(averageSum > 5){
            console.log(array.join(""));
            break;
        }else if(averageSum <= 5){
            addDigitNine(array);
        }
    }

    function digits(n){
        let num = n;

        while(num > 0){
            let digit = num % 10;
            array.push(digit);
            num /= 10;
            num = parseInt(num);
        }
        array.reverse();
        return array;
    }

    function addDigitNine(array){
        array.push(9);
    }

    function average(array){
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum / array.length;
    }
}

modifyAverage(101);
modifyAverage(5835);