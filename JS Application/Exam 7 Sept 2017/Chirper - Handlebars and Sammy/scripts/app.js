$(() => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

        this.get('index.html', loadHomePage);
        this.get('#/home', loadHomePage);

        this.get('#/register', function (ctx) {
            ctx.loadPartials({
                header: "./templates/common/header.hbs",
                footer: "./templates/common/footer.hbs",
                page: "./templates/form/registerForm.hbs"
            }).then(function () {
                this.partial("./templates/main.hbs");
            });
        });

        this.get('#/login', function (ctx) {
            ctx.loadPartials({
                header: "./templates/common/header.hbs",
                footer: "./templates/common/footer.hbs",
                page: "./templates/form/loginForm.hbs"
            }).then(function () {
                this.partial("./templates/main.hbs");
            });
        });

        this.post('#/register', function (ctx) {
            let username = ctx.params.username;
            let password = ctx.params.password;
            let repeatPassword = ctx.params.repeatPass;

            if(username.length < 5){
                notify.showError("Username should be at least 5 characters!");
            }else if(password === ""){
                notify.showError("Password not empty!");
            }else if(password !== repeatPassword){
                notify.showError("Both password must match!")
            }else {
                auth.register(username, password).then(function (userData) {
                    auth.saveSession(userData);
                    notify.showInfo("User registration successful.");
                    ctx.redirect('#/feed');
                }).catch(notify.handleError);
            }

        });

        this.post('#/login', function (ctx) {
            let username = ctx.params.username;
            let password = ctx.params.password;

            if(username === "" || password === ""){
                notify.showError("fields not empty!");
            }

            auth.login(username, password).then((userData) => {
                auth.saveSession(userData);
                notify.showInfo("Login successful.");
                ctx.redirect('#/feed');
            }).catch(notify.handleError);
        });

        this.get('#/logout', function (ctx) {
            auth.logout().then(() => {
                sessionStorage.clear();
                notify.showInfo("Logout successful.");
                ctx.redirect('#/home');
            }).catch(notify.handleError);
        });

        this.get('#/feed', function (ctx) {
            let username = sessionStorage.getItem('username');

            services.getAllChirps().then((allchirps) => {
                allchirps.map(c => {
                    c.time = calcTime(c._kmd.ect);
                });
                ctx.chirps = allchirps;
                ctx.username = username;
                ctx.isAuth = auth.isAuth();
                ctx.author = allchirps.author;
                ctx.isAuthor = username;
                services.getStats(username)
                    .then((stats) => {
                    ctx.stats = {
                        chirps: stats[0],
                        following: stats[1][0].subscriptions.length,
                        followers: stats[2].length
                    };
                    ctx.loadPartials({
                        header: "./templates/common/header.hbs",
                        navigation: "./templates/common/navigation.hbs",
                        footer: "./templates/common/footer.hbs",
                        page: "./templates/feed.hbs"
                    }).then(function () {
                        this.partial("./templates/main.hbs");
                    });
                }).catch(notify.handleError);
            }).catch(notify.handleError);
        });

        this.post('#/create', function (ctx) {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }

           let text = ctx.params.text;
           let author = sessionStorage.getItem('username');

           if(text.length === 0){
               notify.showError("Cannot submit empty chirp");
           }

           if(text.length > 150){
               notify.showError("Chirp cannot be longer than 150 characters");
           }

           services.createChirp(author, text).then(function () {
               notify.showInfo('Chirp published.');
               ctx.redirect('#/me');
           }).catch(notify.handleError);
        });

        this.get('#/me', function (ctx) {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }

            let username = sessionStorage.getItem('username');
            services.userChirps(username).then((myChirps) => {
                myChirps.map(c => {
                    c.time = calcTime(c._kmd.ect);
                    c.isAuthor = c._acl.creator === sessionStorage.getItem('userId');
                });
                ctx.chirps = myChirps;
                ctx.username = username;
                ctx.isAuth = auth.isAuth();
                ctx.author = myChirps.author;
                services.getStats(username).then((stats) => {
                    ctx.stats = {
                        chirps: stats[0],
                        following: stats[1][0].subscriptions.length,
                        followers: stats[2].length
                    };

                    ctx.loadPartials({
                        header: "./templates/common/header.hbs",
                        navigation: "./templates/common/navigation.hbs",
                        footer: "./templates/common/footer.hbs",
                        page: "./templates/me.hbs"
                    }).then(function () {
                        this.partial("./templates/main.hbs");
                    });
                })

            }).catch(notify.handleError);
        });

        this.get('#/delete/:id', function (ctx) {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }

            let id = this.params.id;
            services.deleteChirp(id).then(function () {
                notify.showInfo('Chirp deleted');
                ctx.redirect('#/me');
            }).catch(notify.handleError);
        });

        this.get('#/discover', function (ctx) {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }

            services.discoverPage().then((allUsers) => {
                allUsers.map(u => {
                    let name = u.username;
                    let count = 0;
                    for(let targetUser of allUsers){
                        if(targetUser.subscriptions.includes(name)){
                            count++;
                        }
                    }
                    u.followers = count;
                });

                allUsers = allUsers.filter(u => u.username !== sessionStorage.getItem('username'));
                allUsers = allUsers.sort((a, b) => b.followers - a.followers);

                ctx.users = allUsers;
                ctx.isAuth = auth.isAuth();
                ctx.loadPartials({
                    header: "./templates/common/header.hbs",
                    navigation: "./templates/common/navigation.hbs",
                    footer: "./templates/common/footer.hbs",
                    page: "./templates/discover.hbs",
                }).then(function () {
                    this.partial("./templates/main.hbs");
                })
            }).catch(notify.handleError);
        });

        this.get('#/feed/:username', function (ctx) {
            let targetUser = ctx.params.username;
            let username = sessionStorage.getItem('username');
            let id = sessionStorage.getItem('userId');
            sessionStorage.setItem('targetUser', targetUser);

            remote.get('user', id).then((userData) => {
                let subs = userData['subscriptions'];
                let follow;
                if(subs !== undefined && subs.includes(targetUser)){
                    follow = false;
                }else{
                    follow = true;
                }

                ctx.follow = follow;

                ctx.isAuth = auth.isAuth();
                services.getStats(targetUser).then(function (stats) {
                    ctx.stats = {
                        chirps: stats[0],
                        following: stats[1][0].subscriptions.length,
                        followers: stats[2].length
                    };

                    services.getAllChirps().then((allChirps) => {
                        allChirps.map(c => {
                            c.time = calcTime(c._kmd.ect);
                            c.isAuthor = c._acl.creator === sessionStorage.getItem('userId');
                        });
                        allChirps = allChirps.filter(c => c.author === targetUser);

                        ctx.targetUserChirps = allChirps;
                        ctx.loadPartials({
                            header: "./templates/common/header.hbs",
                            navigation: "./templates/common/navigation.hbs",
                            footer: "./templates/common/footer.hbs",
                            page: "./templates/profile.hbs"
                        }).then(function () {
                            this.partial("./templates/main.hbs");
                        });
                    }).catch(notify.handleError);
                }).catch(notify.handleError);
            }).catch(notify.handleError);
        });

        this.get('#/follow', function (ctx) {
            let targetUser = sessionStorage.getItem('targetUser');
            const userId = sessionStorage.getItem('userId');
            remote.get('user', userId).then((userData) => {
                let subs = userData.subscriptions || [];
                subs.push(targetUser);

                remote.update('user', userId, 'kinvey', {subscriptions: subs})
                    .then(function () {
                        notify.showInfo(`Subscribed to ${targetUser}`);
                        ctx.redirect('#/feed/' + targetUser);
                    }).catch(notify.handleError);
            }).catch(notify.handleError);
        });

        this.get('#/unfollow', function (ctx) {
            let targetUser = sessionStorage.getItem('targetUser');
            const userId = sessionStorage.getItem('userId');
            remote.get('user', userId).then((userData) => {
                let subs = userData.subscriptions || [];
                subs = subs.filter(u => u !== targetUser);

                remote.update('user', userId, 'kinvey', {subscriptions: subs})
                    .then(function () {
                        notify.showInfo(`Unsubscribed to ${targetUser}`);
                        ctx.redirect('#/feed/' + targetUser);
                    }).catch(notify.handleError);
            }).catch(notify.handleError);
        });

        function loadHomePage(ctx) {
            if(auth.isAuth() === false){
                ctx.loadPartials({
                    header: "./templates/common/header.hbs",
                    footer: "./templates/common/footer.hbs",
                    page: "./templates/form/loginForm.hbs"
                }).then(function () {
                    this.partial("./templates/main.hbs");
                });
            }else{
                ctx.redirect('#/feed');
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