function attachEvents() {
    const URL = 'https://baas.kinvey.com/appdata/kid_Hk2gn38cz/';
    const user = 'peter';
    const password = 'p';
    const base64auth = btoa(user + ":" + password);
    const autho = {"Authorization": "Basic " + base64auth};
    let posts = {};


    $('#btnLoadPosts').click(loadPosts);
    $('#btnViewPost').click(viewPost);

    function loadPosts() {

        $.ajax({
            Method: 'GET',
            url: URL + 'posts',
            headers: autho
        }).then(function (res) {
            $('#posts').empty();
            for(let post of res){
                $('#posts').append(
                    $(`<option value="${post._id}">${post.title}</option>`)
                );
                posts[post._id] = post.body;
            }


        }).catch(function (err) {
            console.log(err);
        });
    }
    
    function viewPost() {
        let postId = $('#posts').val();
        let postTitle = $('#posts').find('option:selected').text();
        $('#post-title').text(postTitle);
        $('#post-body').text(posts[postId]);


        $.ajax({
            method: 'GET',
            headers: autho,
            url: URL + `comments/?query={"post_id":"${postId}"}`
        }).then(function (res) {
            $('#post-comments').empty();
            for(let com of res){
                $('#post-comments').append(
                    $(`<li>${com.text}</li>`));
            }
        }).catch(function (err) {
            console.log(err);
        });
    }
}