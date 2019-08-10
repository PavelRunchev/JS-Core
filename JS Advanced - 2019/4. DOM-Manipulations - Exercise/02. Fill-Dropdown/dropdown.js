function addItem() {
    let newText = document.getElementById('newItemText');
    let newValue = document.getElementById('newItemValue');

    if(newText.value === '' || newValue.value === '') return;

    let option = document.createElement('option');
    option.text = newText.value;
    option.value = newValue.value;

    document.getElementById('menu').appendChild(option);

    newText.value = '';
    newValue.value = '';
}