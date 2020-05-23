function solve() {
    selectOptions();

    let convertBtn = document
        .querySelector('#container button')
        .addEventListener('click', function() {
        let number = Number(document.getElementById('input').value);
        let to = document.getElementById('selectMenuTo').value;
        
        let result;
        if(to === 'binary') {
            result = (number >>> 0).toString(2);
        } else if(to === 'hexadecimal') {
            result = number.toString(16).toUpperCase();
        }

        document.getElementById('result').value = result;
    });
    
    function selectOptions() {
        let selectMenuTo = document.getElementById('selectMenuTo');

        let optionBinary = document.createElement('option');
        optionBinary.value = 'binary';
        optionBinary.textContent = 'Binary';

        let optionHexadecimal = document.createElement('option');
        optionHexadecimal.value = 'hexadecimal';
        optionHexadecimal.textContent = 'Hexadecimal';

        selectMenuTo.appendChild(optionBinary);
        selectMenuTo.appendChild(optionHexadecimal);
    }
}