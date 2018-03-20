function colorize() {
    let rows = document.getElementsByTagName('tr');
    for(let i = 1; i < rows.length; i+= 2){
        rows[i].style.background = "teal";
    }
}