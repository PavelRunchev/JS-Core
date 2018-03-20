
function calculator(num1, num2, operator){
    "use strict";
    switch (operator){
        case "+": return num1 + num2;
        case "-": return num1 - num2;
        case "/": return num1 / num2;
        case "*": return num1 * num2;
    }
}

console.log(calculator(2, 4, '+')); //6
