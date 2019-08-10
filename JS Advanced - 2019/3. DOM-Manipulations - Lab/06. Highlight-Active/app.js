function focus() {
    const onFocus = function (ev) {
        this.parentNode.classList.add('focused');
    };

    const onBlur = function (ev) {
        this.parentNode.classList.remove('focused');
    };

    [...document.querySelectorAll('input')]
        .forEach(input => {
            input.addEventListener('focus', onFocus);
            input.addEventListener('blur', onBlur);
        });
}


