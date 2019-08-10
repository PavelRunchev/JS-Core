function addItem() {
    let newElement = document.getElementById('newItemText');

    //no add empty string in list!
    if(newElement.value.length === 0) return;

    let li = document.createElement('li');
    li.textContent = newElement.value;
    let list = document.getElementById('items').appendChild(li);
    newElement.value = '';
}