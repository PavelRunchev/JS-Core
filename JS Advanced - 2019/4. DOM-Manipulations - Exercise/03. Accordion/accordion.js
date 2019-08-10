function toggle() {
    let textExtra = document.getElementById('extra');
    let button = document.getElementsByClassName('button')[0];

    if(textExtra.style.display === 'none'){
        textExtra.style.display = 'block';
        button.textContent = 'Less';
    }
    else {
        textExtra.style.display = 'none';
        button.textContent = 'More';
    }
}