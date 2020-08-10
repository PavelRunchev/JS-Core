function solve() {
    let expOutput = document.querySelector('#expressionOutput');
    let resultOutput = document.querySelector('#resultOutput');
    let keys = document.querySelectorAll('.keys button');

    document.querySelector('.clear').addEventListener('click', function(e){
        e.preventDefault();
        expOutput.textContent = '';
        resultOutput.textContent = '';
    });

    for (let k of keys) {
        k.addEventListener('click', expression);
    }
    
    function expression(e) {
        e.preventDefault();
        if(this.value === '=') equalSign();
        else if(this.value === '+' || this.value === '-' 
        || this.value === '*' || this.value === '/')
            expOutput.textContent += ` ${this.value} `;
        else expOutput.textContent += this.value;
    }

    function equalSign() {
        const [leftOperand, operator, rightOperand] = expOutput.textContent.split(' ');
        
        if(operator === '+' && leftOperand !== '' && rightOperand !== '') 
            resultOutput.textContent = Number(leftOperand) + Number(rightOperand);
        else if(operator === '-' && leftOperand !== '' && rightOperand !== '')
            resultOutput.textContent = Number(leftOperand) - Number(rightOperand);
        else if(operator === '*' && leftOperand !== '' && rightOperand !== '')
            resultOutput.textContent = Number(leftOperand) * Number(rightOperand);
        else if(operator === '/' && leftOperand !== '' && rightOperand !== '') {
            if(rightOperand === '0')
                resultOutput.textContent = NaN;
            else 
                resultOutput.textContent = Number(leftOperand) / Number(rightOperand);
        } else 
            resultOutput.textContent = NaN;
    }
}