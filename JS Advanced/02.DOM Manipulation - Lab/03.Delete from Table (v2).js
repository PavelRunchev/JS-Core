function deleteByEmail(){
    let arrayTr = document.getElementsByTagName('tr');
    let target = document.getElementsByName('email')[0].value;
    //search emails
    for(let i = 0; i < arrayTr.length; i++){
        if(target === arrayTr[i].children[1].textContent){
            //remove email
            arrayTr[i].parentNode.removeChild(arrayTr[i]);
            document.getElementById('result').textContent = "Deleted.";
            //clear input
            document.getElementsByName('email')[0].value = '';
            return;
        }
    }
    document.getElementById('result').textContent = "Not found.";
    //clear input
    document.getElementsByName('email')[0].value = '';
}