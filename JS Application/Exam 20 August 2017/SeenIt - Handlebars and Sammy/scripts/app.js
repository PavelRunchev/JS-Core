$(() => {
    const app = Sammy('#container', function () {
       this.use('Handlebars', 'hbs');

       this.get('index.html', loadWelcomePage);
       this.get('#/home', loadWelcomePage);

        this.post('#/register', (ctx) => {
            let username = ctx.params.username;
            let password = ctx.params.password;
            let repeatPass = ctx.params.repeatPass;

            let patternUsername = /^[A-Za-z]{3,}$/;
            let patternPassword = /^[A-Za-z0-9]{6,}$/;
            if(!patternUsername.test(username)){
                notify.showError('Username should be at least 3 characters');
            } else if(!patternPassword.test(password)){
                notify.showError('Password should be at least 6 characters');
            }else if(repeatPass !== password){
                notify.showError('Both password must match!');
            }else{
                auth.register(username, password)
                    .then((userData) => {
                        auth.saveSession(userData);
                        notify.showInfo('User registration successful!');
                        ctx.redirect('#/catalog');
                    }).catch(notify.handleError);
            }
        });

        this.post('#/login', (ctx) => {
            let username = ctx.params.username;
            let password = ctx.params.password;

            if(username === '' || password === ''){
                notify.showError('All fields should be non-empty!');
            }else{
                auth.login(username, password)
                    .then((userData) => {
                        auth.saveSession(userData);
                        notify.showInfo('Login successful.');
                        ctx.redirect('#/catalog');
                    })
                    .catch(notify.handleError);
            }
        });

        this.get('#/logout', (ctx) => {
            auth.logout()
                .then(() => {
                    sessionStorage.clear();
                    ctx.redirect('#/home');
                })
                .catch(notify.handleError);
        });

        this.get('#/catalog', function (ctx) {
            if(!auth.isAuth()){
                ctx.redirect('#/home');
                return;
            }

            posts.getAllPosts(ctx)
                .then((posts) => {
                    posts.forEach((post, index) => {
                        post.rank = index + 1;
                        post.date = calcTime(post._kmd.ect);
                        post.isAuthor = post._acl.creator === sessionStorage.getItem('userId');
                    });

                    ctx.isAuth = auth.isAuth();
                    ctx.username = sessionStorage.getItem('username');
                    ctx.posts = posts;

                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        navigation: './templates/common/navigation.hbs',
                        post: './templates/form/postForm.hbs',
                        page: './templates/catalog.hbs'
                    }).then(function () {
                        this.partial('./templates/main.hbs');
                    });
                }).catch(notify.handleError);
        });

        this.get('#/createPost', (ctx) => {
            if(!auth.isAuth()){
                ctx.redirect('#/home');
                return;
            }

            ctx.isAuth = auth.isAuth();
            ctx.username = sessionStorage.getItem('username');
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                navigation: './templates/common/navigation.hbs',
                page: './templates/createPost.hbs'
            }).then(function () {
                this.partial('./templates/main.hbs');
            });
        });

        this.post('#/createPost', (ctx) => {
            if(!auth.isAuth()){
                ctx.redirect('#/home');
                return;
            }
            let author = sessionStorage.getItem('username');
            let url = ctx.params.url;
            let imageUrl = ctx.params.imageUrl;
            let title = ctx.params.title;
            let description = ctx.params.description;

            if(title === ""){
                notify.showError('Title is required!');
            }else if(url === ""){
                notify.showError('Url is required!');
            }else if(!url.startsWith('http')){
                notify.showError('Url must be a valid link!');
            }else{
                posts.createPost(author, title, description, url, imageUrl)
                    .then(() => {
                        notify.showInfo('POST CREATED!');
                        ctx.username = sessionStorage.getItem('username');
                        ctx.redirect('#/catalog');
                    }).catch(notify.handleError);
            }
        });

        this.get('#/myPosts', function (ctx) {
            if(!auth.isAuth()){
                ctx.redirect('#/home');
                return;
            }

            let username = sessionStorage.getItem('username');
            posts.getMyPosts(username).then(function(posts) {

                posts.forEach((post, index) => {
                    post.rank = index + 1;
                    post.date = calcTime(post._kmd.ect);
                    post.isAuthor = post._acl.creator === sessionStorage.getItem('userId');
                });

                ctx.posts = posts;
                ctx.isAuth = auth.isAuth();
                ctx.username = sessionStorage.getItem('username');
                ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                    navigation: './templates/common/navigation.hbs',
                    post: './templates/form/postForm.hbs',
                    page: './templates/myPosts.hbs'
                }).then(function () {
                    this.partial('./templates/main.hbs');
                });
            }).catch(notify.handleError);
        });

        this.get('#/editPost/:postId', function (ctx) {
            if(!auth.isAuth()){
                ctx.redirect('#/home');
                return;
            }

            let postId = ctx.params.postId;
            posts.getPostById(postId).then((post) => {
                ctx.isAuth = auth.isAuth();
                ctx.username = sessionStorage.getItem('username');
                ctx.post = post;
                ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                    navigation: './templates/common/navigation.hbs',
                    page: './templates/editPost.hbs'
                }).then(function () {
                    this.partial('./templates/main.hbs');
                });
            }).catch(notify.handleError);
        });

        this.post('#/editPost', (ctx) => {
            let postId = ctx.params.postId;
            let author = sessionStorage.getItem('username');
            let title = ctx.params.title;
            let description = ctx.params.description;
            let url = ctx.params.url;
            let imageUrl = ctx.params.image;

            if(title === ""){
                notify.showError('Title is required!');
            }else if(url === ""){
                notify.showError('Url is required!');
            }else if(!url.startsWith('http')){
                notify.showError('Url must be a valid link!');
            }else{
                posts.editPost(postId, author, title, description, url, imageUrl)
                    .then((res) => {
                        notify.showInfo(`Post ${title} updated.`);
                        ctx.redirect('#/catalog');
                    }).catch(notify.showError);
            }
        });

        this.get('#/deletePost/:postId', (ctx) => {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }

            let postId = ctx.params.postId;
            posts.deletePost(postId)
                .then(() => {
                    notify.showInfo('Post Deleted!');
                    ctx.redirect('#/catalog');
                }).catch(notify.handleError);
        });

        //VARIANT 1
        /*//load current details Post and his all comments
        this.get('#/comments/:postId', (ctx) => {
            let postId = ctx.params.postId;

            const postPromise = posts.getPostById(postId);
            const allCommentsPromise = comments.getPostComments(postId);

            Promise.all([postPromise, allCommentsPromise])
                .then(([post, comments]) => {
                    post.date = calcTime(post._kmd.ect);
                    post.isAuthor = post._acl.creator === sessionStorage.getItem('userId');
                    comments.forEach((c) => {
                        c.date = calcTime(c._kmd.ect);
                        c.commentAuthor = c._acl.creator === sessionStorage.getItem('userId');
                    });

                    ctx.isAuth = auth.isAuth();
                    ctx.author = sessionStorage.getItem('username');
                    ctx.username = sessionStorage.getItem('username');
                    ctx.post = post;
                    ctx.comments = comments;
                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        navigation: './templates/common/navigation.hbs',
                        page: './templates/comments.hbs',
                    }).then(function () {
                        this.partial('./templates/main.hbs');
                    })

                }).catch(notify.handleError);
        });*/

        //VARIANT 2
        //load current details Post and his all comments
        this.get('#/comments/:postId', function (ctx) {
            let postId = ctx.params.postId;

            posts.getPostById(postId).then((post) => {
                post.date = calcTime(post._kmd.ect);
                post.isAuthor = post._acl.creator === sessionStorage.getItem('userId');

                comments.getPostComments(postId).then(function (comments) {
                    comments.forEach((c) => {
                        c.date = calcTime(c._kmd.ect);
                        c.commentAuthor = c._acl.creator === sessionStorage.getItem('userId');
                    });

                    console.log(post.isAuthor);
                    ctx.isAuth = auth.isAuth();
                    ctx.author = sessionStorage.getItem('username');
                    ctx.username = sessionStorage.getItem('username');
                    ctx.post = post;
                    ctx.comments = comments;
                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        navigation: './templates/common/navigation.hbs',
                        page: './templates/comments.hbs',
                    }).then(function () {
                        this.partial('./templates/main.hbs');
                    });
                }).catch(notify.handleError);
            }).catch(notify.handleError);
        });

        //CREATE Comment
        this.post('#/createComment', function (ctx) {
            let author = sessionStorage.getItem('username');
            let content = ctx.params.content;
            let postId = ctx.params.postId;

            if(content === ""){
                notify.showError("Cannot add empty comment");
            }

            comments.createComment(postId, content, author)
                .then(() => {
                    notify.showInfo("Comment created.");
                    ctx.redirect(`#/comments/${postId}`);
                }).catch(notify.handleError);
        });

        //DELETE Comment
        this.get('#/deleteComment/:commentId/post/:postId', function (ctx) {
            let commentId = ctx.params.commentId;
            let postId = ctx.params.postId;

            comments.deleteComment(commentId).then(function () {
                notify.showInfo('Comment deleted.');
                ctx.redirect(`#/comments/${postId}`);
            }).catch(notify.handleError);
        });

        function loadWelcomePage(ctx) {
           if(!auth.isAuth()){
               ctx.loadPartials({
                   header: './templates/common/header.hbs',
                   footer: './templates/common/footer.hbs',
                   loginForm: './templates/form/loginForm.hbs',
                   registerForm: './templates/form/registerForm.hbs'
               }).then(function () {
                   this.partial('./templates/welcome.hbs');
               })
           }else{
               ctx.redirect('./templates/main.hbs');
           }
       }

       function calcTime(dateIsoFormat) {
            let diff = new Date - (new Date(dateIsoFormat));
            diff = Math.floor(diff / 60000);
            if (diff < 1) return 'less than a minute';
            if (diff < 60) return diff + ' minute' + pluralize(diff);
            diff = Math.floor(diff / 60);
            if (diff < 24) return diff + ' hour' + pluralize(diff);
            diff = Math.floor(diff / 24);
            if (diff < 30) return diff + ' day' + pluralize(diff);
            diff = Math.floor(diff / 30);
            if (diff < 12) return diff + ' month' + pluralize(diff);
            diff = Math.floor(diff / 12);
            return diff + ' year' + pluralize(diff);
            function pluralize(value) {
                if (value !== 1) return 's';
                else return '';
            }
        }
    });

    app.run();
});