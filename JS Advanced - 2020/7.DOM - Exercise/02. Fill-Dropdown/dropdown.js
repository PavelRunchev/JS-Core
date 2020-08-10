function addItem() {
    let textInput = document.querySelector('#newItemText');
    let valueInput = document.querySelector('#newItemValue');
    if(textInput.value === '' || valueInput.value === '') return;

    let option = document.createElement('option');
    option.textContent = textInput.value;
    option.value = valueInput.value;
    document.querySelector('#menu').appendChild(option);
    textInput.value = '', valueInput.value = '';
}