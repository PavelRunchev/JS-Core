function jansNotation(array){
    let saveOperation = [];
    for(let element of array) {
        if (Number(element)) {
            saveOperation.push(element);
        } else {
            let firstOperand;
            let secondOperand;
            switch (element) {
                case "+":
                    firstOperand = saveOperation.pop();
                    secondOperand = saveOperation.pop();
                    if (firstOperand !== undefined && secondOperand !== undefined) {
                        saveOperation.push(firstOperand + secondOperand);
                    } else {
                        console.log("Error: not enough operands!");
                        return;
                    }
                    break;
                case "-":
                    secondOperand = saveOperation.pop();
                    firstOperand = saveOperation.pop();

                    if (firstOperand !== undefined && secondOperand !== undefined) {
                        saveOperation.push(firstOperand - secondOperand);
                    } else {
                        console.log("Error: not enough operands!");
                        return;
                    }
                    break;
                case "*":
                    firstOperand = saveOperation.pop();
                    secondOperand = saveOperation.pop();
                    if (firstOperand !== undefined && secondOperand !== undefined) {
                        saveOperation.push(firstOperand * secondOperand);
                    } else {
                        console.log("Error: not enough operands!");
                        return;
                    }
                    break;
                case "/":
                    secondOperand = saveOperation.pop();
                    firstOperand = saveOperation.pop();
                    if (firstOperand !== undefined && secondOperand !== undefined) {
                        saveOperation.push(firstOperand / secondOperand);
                    } else {
                        console.log("Error: not enough operands!");
                        return;
                    }
                    break;
            }
        }
    }
    if (saveOperation.length === 1) {
        console.log(saveOperation[0]);
    } else {
        console.log("Error: too many operands!");
    }
}

jansNotation([-1, 1, '+', 101, '*', 18, '+', 3, '/']);
// 6
jansNotation([31, 2, '+', 11, '/']);
// 3
jansNotation([15, '/']);
// Error: not enough operands!
jansNotation([7, 33, 8, '-']);
// Error: too many operands!
jansNotation([3, 4, '+']);
// 7
jansNotation([5, 3, 4, '*', '-']);
// -7