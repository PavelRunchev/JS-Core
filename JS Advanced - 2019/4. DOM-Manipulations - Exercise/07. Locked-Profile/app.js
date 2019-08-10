function lockedProfile() {
    let buttons = document.getElementsByTagName('button');

    for(let button of buttons) {
        button.addEventListener('click', isShow)
    }

    function isShow(ev) {
        let parent = ev.target.parentNode;
        let inputRadio = parent.querySelectorAll('input[type="radio"]')[1];
        let hiddenDiv = parent.querySelector('div');
        let currentBtn = ev.target;

        if(inputRadio.checked) {
            if(currentBtn.textContent === 'Show more') {
                currentBtn.textContent = 'Hide it';
                hiddenDiv.style.display = 'block';
            }
            else {
                currentBtn.textContent = 'Show more';
                hiddenDiv.style.display = 'none';
            }
        }
    }
}
