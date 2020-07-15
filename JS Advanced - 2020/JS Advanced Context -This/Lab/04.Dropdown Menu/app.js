function solve() {
    let dropdown = document.querySelector('#dropdown-ul');
    let box = document.querySelector('#box');
    box.style.background = 'black';
    box.style.color = 'white';
    document.querySelector('#dropdown').addEventListener('click', function() {
        if(dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
            box.style.background = 'black';
            box.style.color = 'white';
        } else {
            dropdown.style.display = 'block';
        }
    });

    let allLi = dropdown.querySelectorAll('li');
    for (let li of allLi) {
        li.addEventListener('click', changeColor);
    }

    function changeColor(e) {
        e.preventDefault();
        box.style.background = this.textContent;
        box.style.color = 'black';
    }
}