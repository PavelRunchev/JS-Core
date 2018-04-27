function loadRepos() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200){
            $('#res').text(this.responseText);
        }
    };

    request.open("GET", "https://api.github.com/users/testnakov/repos", true);
    request.send();
}