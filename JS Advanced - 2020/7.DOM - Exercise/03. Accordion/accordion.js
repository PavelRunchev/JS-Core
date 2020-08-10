function toggle() {
    let button = document.querySelector('.button');
    let content = document.querySelector('#extra');

    if(button.textContent === 'More') {
        button.textContent = 'Less';
        content.style.display = 'block';
    } else if(button.textContent === 'Less') {
        button.textContent = 'More';
        content.style.display = 'none';
    }
}