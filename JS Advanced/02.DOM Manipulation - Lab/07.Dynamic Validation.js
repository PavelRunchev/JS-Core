function validate() {
    let regex = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;
    let input = document.getElementById('email');
    input.addEventListener('change', function(){
        let value = input.value;
        if(regex.test(value)){
            input.removeAttribute('class');
        }else{
            input.className = "error";
        }
    });
}