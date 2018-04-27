function loadRepos() {
    let listRepos = $('#repos');
    listRepos.empty();
    $.ajax({
        method: 'GET',
        url: 'https://api.github.com/users/' + $("#username").val() + "/repos",
        success: handleSuccess,
        error: handleError
    });

    function handleSuccess(res) {
        for(let repo of res){
            let item = $('<li>');
            let itemHref = $(`<a href="${repo.html_url}">${repo.full_name}</a>`);
            item.append(itemHref);
            item.appendTo(listRepos);
        }

    }

    function handleError(err) {
        listRepos.append($('<li>').text("Error"));
    }
}