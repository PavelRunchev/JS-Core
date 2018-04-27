function loadCommits() {
    let commits = $('#commits');
    let userName = $('#username').val();
    let repo = $('#repo').val();
    commits.empty();

    $.ajax({
        method: 'GET',
        url: `https://api.github.com/repos/${userName}/${repo}/commits`,
    }).then(function (res) {
        for(let repository of res){
            let liRepo = $('<li>')
                .text(`${repository.commit.author.name}: ${repository.commit.message}`);
            commits.append(liRepo);
        }

    }).catch(function (err) {
        let liError = $('<li>').text(`Error: ${err.status} (${err.statusText})`);
        commits.append(liError);
    });

}