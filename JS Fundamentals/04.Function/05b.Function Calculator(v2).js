function calculator(num1, num2, operator){
    "use strict";
    let calculate = function(num1, num2, operator){
        return operator(num1, num2)
    };

    let add = function (num1, num2){
        return num1 + num2;
    };
    let subtract = function (num1, num2){
        return num1 - num2;
    };
    let multiply = function (num1, num2) {
        return num1 * num2;
    };
    let divide = function (num1, num2) {
        return num1 / num2;
    };

    switch (operator){
        case "+": return calculate(num1, num2, add);
        case "-": return calculate(num1, num2, subtract);
        case "*": return calculate(num1, num2, multiply);
        case "/": return calculate(num1, num2, divide);
    }
}



console.log(calculator(2, 4, '+')); //6
console.log(calculator(3, 3, '/')); //1
console.log(calculator(18, -1, '*')); //-18
console.log(calculator(-5, 4, '-')); //-9