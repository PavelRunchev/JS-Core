
function addItem(){
    let input = document.getElementById('newText');
    let newLi = document.createElement('li');
    newLi.textContent = input.value + " ";
    let deleteLink = document.createElement('a');
    deleteLink.textContent = '[Delete]';
    deleteLink.href = '#';
    deleteLink.addEventListener('click', deleteItems);
    newLi.appendChild(deleteLink);


    document.getElementById('items').appendChild(newLi);
    input.value = "";

    function deleteItems(){
        document.getElementById('items').removeChild(this.parentNode);
    }
}