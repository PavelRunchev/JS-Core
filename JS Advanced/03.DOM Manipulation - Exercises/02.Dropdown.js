function addItem() {
    let newItem = document.getElementById('newItemText');
    let newValue = document.getElementById('newItemValue');

    let option = document.createElement('option');
    option.text = newItem.value;
    option.value = newValue.value;

    document.getElementById('menu').appendChild(option);

    newItem.value = '';
    newValue.value = '';
}