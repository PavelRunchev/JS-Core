function addItem() {
    let text = document.getElementById('newText');
    let list = document.getElementById('items');
    //add event in parent - items!
    list.addEventListener('click', deleteItem);

    if(text.value.length === 0) return;

    let li = document.createElement('li');
    li.textContent = text.value + ' ';
    let link = document.createElement('a');
    link.textContent = '[Delete]';
    link.href = '#';
    li.appendChild(link);
    list.appendChild(li);
    text.value= '';

    function deleteItem(ev){
            //get clicked element
            let currentLi = ev.target.parentNode;

            //remove from parent
            //document.getElementById('items').removeChild(currentLi);

            //remove current element;
            currentLi.remove();
    }
}