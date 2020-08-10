function solve() {
    let selectMenuTo = document.querySelector('#selectMenuTo');
    selectMenuTo.appendChild(createOptionElement('Binary', 'binary', true));
    selectMenuTo.appendChild(createOptionElement('Hexadecimal', 'hexadecimal', false));
    document.querySelector('#container button').addEventListener('click', convert);

    function convert(e) {
        e.preventDefault();
        const number = document.querySelector('#input').value;
        if(number === '') return;
        
        let result;
        if(selectMenuTo.value === 'binary') 
            result = toBinaryConvert(Number(number));
        else if(selectMenuTo.value === 'hexadecimal') 
            result = toHexadecimalConvert(Number(number));
        document.querySelector('#result').value = result;
    }

    function createOptionElement(text, textValue, isSelected) {
        let option = document.createElement('option');
        option.value = textValue;
        option.textContent = text;
        if(isSelected) option.selected = true;
        return option;
    }

    function toBinaryConvert(num) {
        return num.toString(2);
    }

    function toHexadecimalConvert(num) {
        return num.toString(16).toUpperCase();
    }
}