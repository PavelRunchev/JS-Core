function attachEvents() {
    const URL = 'https://baas.kinvey.com/appdata/kid_Hk2gn38cz/';
    const user = "peter";
    const password = "p";
    const base64Auth = btoa(user + ":" + password);
    const autho = {"Authorization": "Basic " + base64Auth };
    let posts = $('#posts');

    $('#btnLoadPosts').click(loadPosts);
    $('#btnViewPost').click(viewPost);

    function loadPosts() {
        let getPostRequest = {
            method: 'GET',
            url: URL + "posts",
            headers: autho
        };

        $.ajax(getPostRequest)
            .then(displayPosts)
            .catch(displayError);

        function displayPosts(res) {
            posts.empty();
            for(let pos of res){
                let option = $(`<option value="${pos._id}">${pos.title}</option>`);
                posts.append(option);
            }
        }
    }

    function viewPost() {
        let selectedPost = posts.find('option:selected').text();
        $('#post-title').text(selectedPost);
        let postId = posts.val();

        let getPostBody = {
            method: 'GET',
            url: URL + `posts/${postId}`,
            headers: autho
        };

        $.ajax(getPostBody).then(function (res) {
            $('#post-body').text(res.body);
        }).catch(displayError);

        let getPostComment = {
            method: 'GET',
            url: URL + `comments/?query={"post_id":"${postId}"}`,
            headers: autho
        };

        $.ajax(getPostComment).then(function (res) {
            let postComments = $('#post-comments');
            postComments.empty();
            for(let comment of res){
                let li = $('<li>').text(comment.text);
                postComments.append(li);
            }
        }).catch(displayError);
    }

    function displayError(err) {
        $('#post-title').text(`Error: ${err.status} (${err.statusText})`);

    }

}