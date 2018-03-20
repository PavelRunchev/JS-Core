function focus(){
    let inputs = document.getElementsByTagName('input');
    for(let input of inputs){
        input.addEventListener('focus', function(){
            input.parentNode.className = 'focused';
        });
        input.addEventListener('blur', function(){
            input.parentNode.className = '';
        });
    }
}