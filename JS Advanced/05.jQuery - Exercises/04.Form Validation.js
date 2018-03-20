function validate() {
    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confirmpassword = $('#confirm-password');
    let companyCheckBox = $('#company');
    let companyInfo = $('#companyInfo');
    let companyNumber = $('#companyNumber');
    let submitBtn = $('#submit');
    let validation = $('#valid');
    let isValid = true;

    companyCheckBox.on('change', function () {
        if(companyCheckBox.is(':checked')){
            companyInfo.css('display', 'block');
        }else{
            companyInfo.css('display', 'none');
        }
    });

    submitBtn.on('click', function (event) {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
        validateInput(username, /^([A-Za-z\d]{3,20})$/g);
        validateInput(email, /^.*@.*\..*$/g);
        if(password.val() === confirmpassword.val()){
            validateInput(password, /^\w{5,15}$/g);
            validateInput(confirmpassword, /^\w{5,15}$/g);
        }else{
            password.css("border", "solid red");
            confirmpassword.css("border", "solid red");
            isValid = false;
        }

        if(companyCheckBox.is(':checked')){
            if(+companyNumber.val() >= 1111 && +companyNumber.val() <= 9999 ){
                companyNumber.css("border", "none");
            }else{
                companyNumber.css("border", "solid red");
                isValid = false;
            }
        }
    }

    submitBtn.on('click', function () {
        if(isValid){
            validation.css('display', 'block');
        }else{
            validation.css('display', 'none');
        }
        isValid = true;
    });


    function validateInput(input, pattern){
        "use strict";
        if(pattern.test(input.val())){
            input.css("border", "none");
        }else{
            input.css("border", "solid red");
            isValid = false;
        }
    }
}
