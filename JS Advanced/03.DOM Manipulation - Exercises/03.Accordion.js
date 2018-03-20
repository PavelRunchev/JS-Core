function toggle(){
    let extraDiv = document.getElementById('extra');
    let button = document.getElementsByClassName('button')[0];
    if(extraDiv.style.display === 'none'){
        extraDiv.style.display = 'block';
        button.textContent = 'Less';
    }else{
        extraDiv.style.display = 'none';
        button.textContent = 'More';
    }
}