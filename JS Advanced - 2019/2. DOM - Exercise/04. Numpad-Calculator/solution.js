function solve() {
    let expression = document.getElementById('expressionOutput');
    let resultOutput = document.getElementById('resultOutput');
    document.querySelector('.clear').addEventListener('click', clearAll);
    
    let keys = document.querySelectorAll('.keys button');
    for (let k of keys) {
        k.addEventListener('click', function() {
            if(this.value === '=') {
                calculate();
            } else {
                outputExpression(this.value);
            }
        });
    }

    function outputExpression(key) {
        const value = Array.from(expression.textContent);
        if(key === '+' || key === '-' || key === '*' || key === '/') {
            if(value.includes('+') || value.includes('-') 
            || value.includes('*') || value.includes('/')) return;

            expression.textContent = `${value.join('')} ${key} `;
        } else {
            expression.textContent = `${value.join('')}${key}`;
        }
    }

    function calculate() {
        const operation = expression.textContent.split(' ').filter(a => a != ' ' && a !== '');
        console.log(operation);
        if(operation.length !== 3) {
            return resultOutput.textContent = 'NaN';
            console.log('NaN');
        }

        const [firstOperand, operator, secondOperand] = operation;
       
        let acumalte;
        if(operator === '+') {
            acumalte = Number(firstOperand) + Number(secondOperand);
        } else if(operator === '-') {
            acumalte = Number(firstOperand) - Number(secondOperand);
        } else if(operator === '*') {
            acumalte = Number(firstOperand) * Number(secondOperand);
        } else if(operator === '/') {
            acumalte = Number(firstOperand) / Number(secondOperand);
        }

        resultOutput.textContent = `${acumalte}`;
    }

    function clearAll() {
        expression.textContent = '';
        resultOutput.textContent = '';
    }
    
}