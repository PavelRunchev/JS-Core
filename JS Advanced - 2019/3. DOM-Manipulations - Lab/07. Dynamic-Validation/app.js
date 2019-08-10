function validate() {
    let regex = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;
    let email = document.getElementById('email');

    email.addEventListener('change', validateEmail);

    function validateEmail(ev) {
        if(regex.test(email.value)) {
            email.removeAttribute('class');
        }
        else {
            email.className = 'error';
        }
    }
}