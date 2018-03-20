function cookingByNumbers(array){
    "use strict";

    let number = array[0];
    let operation = "";
    for (let i = 1; i < array.length; i++) {
        operation = array[i];
        let f = perform(number, operation);
        console.log(f);
        number = f;
    }

    function perform(number, operation){
        switch (operation){
            case "chop": return number / 2;
            case "dice": return Math.sqrt(number);
            case "spice": return ++number;
            case "bake": return number * 3;
            case "fillet": return number * 0.80;
        }
    }
}

//cookingByNumbers([32, 'chop', 'chop', 'chop', 'chop', 'chop']);

cookingByNumbers([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);