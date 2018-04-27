$(() => {
    const app = Sammy('#app', function () {
        this.use('Handlebars', 'hbs');

        this.get('index.html', function () {
            this.loadPartials({
                menu: './templates/common/menu.hbs',
                footer: './templates/common/footer.hbs',
                page: './templates/common/home.hbs',
            }).then(function () {
                this.partial('./templates/common/main.hbs');
            })
        });

        this.get('#/home', function (ctx) {
            if(auth.isAuthed()){
                ctx.username = sessionStorage.getItem('username');
                this.loadPartials({
                    menu: './templates/common/menu.hbs',
                    footer: './templates/common/footer.hbs',
                    page: './templates/common/userHome.hbs',
                }).then(function () {
                    this.partial('./templates/common/main.hbs');
                })
            }else{
                this.loadPartials({
                    menu: './templates/common/menu.hbs',
                    footer: './templates/common/footer.hbs',
                    page: './templates/common/home.hbs',
                }).then(function () {
                    this.partial('./templates/common/main.hbs');
                })
            }
        });

        this.get('#/register', function (ctx) {
            ctx.loadPartials({
                menu: './templates/common/menu.hbs',
                footer: './templates/common/footer.hbs',
                page: './templates/common/register.hbs'
            }).then(function () {
                this.partial('./templates/common/main.hbs');
            });
        });

        this.post('#/register', (ctx) => {
            let username = ctx.params.username;
            let password = ctx.params.password;
            let name = ctx.params.name;

            if(username === ""){
                notify.showError('Username non empty!');
            } else if(password === ""){
                notify.showError('Password non empty!');
            }else if(name === ""){
                notify.showError('name non empty!');
            }else{
                auth.register(username, password, name)
                    .then((userData) => {
                        auth.saveSession(userData);
                        notify.showInfo('User registration successful!');
                        ctx.loadPartials({
                            menu: './templates/common/menu.hbs',
                            footer: './templates/common/footer.hbs',
                            page: './templates/common/userHome.hbs'
                        }).then(function () {
                            ctx.username = sessionStorage.getItem('username');
                            this.partial('./templates/common/main.hbs');
                        });
                    }).catch(notify.handleError);
            }
        });

        this.get('#/login', function (ctx) {
            ctx.loadPartials({
                menu: './templates/common/menu.hbs',
                footer: './templates/common/footer.hbs',
                page: './templates/common/login.hbs'
            }).then(function () {
                this.partial('./templates/common/main.hbs');
            });
        });

        this.post('#/login', function (ctx) {
            let username = ctx.params.username;
            let password = ctx.params.password;

            if(username === "" || password === ""){
                notify.showInfo('All fields should be non empty!');
                return;
            }

            auth.login(username, password)
                .then((userData) => {
                    auth.saveSession(userData);
                    notify.showInfo('Login successful.');
                    ctx.username = sessionStorage.getItem('username');
                    ctx.loadPartials({
                        menu: './templates/common/menu.hbs',
                        footer: './templates/common/footer.hbs',
                        page: './templates/common/userHome.hbs'
                    }).then(function () {
                        ctx.username = sessionStorage.getItem('username');
                        this.partial('./templates/common/main.hbs');
                    });
                }).catch(notify.handleError);
        });

        this.get('#/logout', function (ctx) {
            auth.logout().then(() => {
                sessionStorage.clear();
                notify.showInfo('Logout successful.');
                ctx.redirect('#');
            });
        });

        this.get('#/myMessages', function (ctx) {
            let username = sessionStorage.getItem('username');
            ctx.username = username;
            messageService.loadMyMessages(username)
                .then(function (messages) {
                    messages.forEach(m => m.timestamp = formatDate(m._kmd.lmt));
                    ctx.messages = messages;
                    ctx.loadPartials({
                        menu: './templates/common/menu.hbs',
                        footer: './templates/common/footer.hbs',
                        page: './templates/myMessages.hbs',
                        messages: './templates/messageList.hbs'
                    }).then(function () {
                        ctx.partials = this.partials;
                        ctx.partial('./templates/common/main.hbs');
                    });
                });

        });

        this.get('#/archive', function (ctx) {
            let username = sessionStorage.getItem('username');
            messageService.loadArchiveMessages(username)
                .then((messages) => {
                    messages.forEach(m => m.timestamp = formatDate(m._kmd.lmt));
                    this.messages = messages;
                    this.loadPartials({
                        menu: './templates/common/menu.hbs',
                        footer: './templates/common/footer.hbs',
                        page: './templates/archiveSent.hbs'
                    }).then(function () {
                        ctx.username = username;
                        this.partial('./templates/common/main.hbs').then(function () {
                            $('button').click((e) => {
                                let id = $(e.target).attr('data-id');
                                remote.remove('appdata', 'messages/' + id).then(() => {
                                    notify.showInfo('Message deleted');
                                    $(e.target).parent().parent().remove();
                                }).catch(notify.handleError);
                            })
                        })
                    })
                }).catch(notify.handleError);
        });

        this.get('#/sendMessage', function (ctx) {
            let username = sessionStorage.getItem('username');
            messageService.loadAllUsers(username)
                .then((userList) => {
                    ctx.username = username;
                    ctx.userList = userList.filter(us => us.username !== sessionStorage.getItem('username'));
                    ctx.loadPartials({
                        menu: './templates/common/menu.hbs',
                        footer: './templates/common/footer.hbs',
                        page: './templates/sendMessage.hbs'
                    }).then(function () {
                        this.partial('./templates/common/main.hbs');
                    })
                })
        });

        this.post('#/sendMessage', function (ctx) {
             let  sender_username = sessionStorage.getItem('username');
             let sender_name = sessionStorage.getItem('name');
             let recipient_username = this.params.recipient;
             let text = this.params.text;

            messageService.sendMessages(sender_username, sender_name, recipient_username, text)
                .then(() => {
                    notify.showInfo('Message sent');
                    ctx.redirect('#/archive');
                }).catch(notify.handleError);
        });

        function formatDate(dateISO8601) {
            let date = new Date(dateISO8601);
            if (Number.isNaN(date.getDate()))
                return '';
            return date.getDate() + '.' + padZeros(date.getMonth() + 1) +
                "." + date.getFullYear() + ' ' + date.getHours() + ':' +
                padZeros(date.getMinutes()) + ':' + padZeros(date.getSeconds());

            function padZeros(num) {
                return ('0' + num).slice(-2);
            }
        }

        function formatSender(name, username) {
            if (!name)
                return username;
            else
                return username + ' (' + name + ')';
        }

    });

    app.run();
});
