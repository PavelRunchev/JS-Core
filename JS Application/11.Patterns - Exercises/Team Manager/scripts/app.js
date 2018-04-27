$(() => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

        //HOME PAGE
        this.get('index.html', displayHome);
        this.get('#/home', displayHome);

        //ABOUT PAGE
        this.get('#/about', function (ctx) {
            this.loggedIn = sessionStorage.getItem('authtoken') !== null;
            this.username = sessionStorage.getItem('username');
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/about/about.hbs');
            });
        });
        
        //REGISTER PAGE
        this.get('#/register', function (ctx) {
            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                registerForm: './templates/register/registerForm.hbs'
            }).then(function () {
                this.partial('./templates/register/registerPage.hbs');
            });
        });

        //REGISTER POST
        this.post('#/register', function (ctx) {
            let username = ctx.params.username;
            let password = ctx.params.password;
            let repeatPassword = ctx.params.repeatPassword;

            if(password !== repeatPassword){
                auth.showError('PASSWORD DO NOT MATCH!');
            }else{
                auth.register(username, password)
                    .then(function (userInfo) {
                    auth.saveSession(userInfo);
                    auth.showInfo('REGISTERED!');
                    displayHome(ctx);
                }).catch(auth.handleError);
            }
        });

        //LOGIN PAGE
        this.get('#/login', function (ctx) {
            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                loginForm: './templates/login/loginForm.hbs'
            }).then(function () {
                this.partial('./templates/login/loginPage.hbs');
            });
        });

        //LOGIN POST
        this.post('#/login', function (ctx) {
           let username = ctx.params.username;
           let password = ctx.params.password;

           auth.login(username, password)
               .then(function (userInfo) {
                   auth.saveSession(userInfo);
                   auth.showInfo('LOGGED IN!');
                   displayHome(ctx);
               }).catch(auth.handleError);
        });

        //LOGOUT PAGE
        this.get('#/logout', function (ctx) {
           auth.logout()
               .then(function () {
                   sessionStorage.clear();
                   auth.showInfo('LOGGED OUT!');
                   displayHome(ctx);
               }).catch(auth.handleError);
        });
        
        //CATALOG PAGE
        this.get('#/catalog', displayCatalog);

        //CREATE TEAM PAGE
        this.get('#/create', function (ctx) {
            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                createForm: './templates/create/createForm.hbs'
            }).then(function () {
                this.partial('./templates/create/createPage.hbs');
            })
        });

        //CREATE TEAM
        this.post('#/create', function (ctx) {
            let teamName = ctx.params.name;
            let teamComment = ctx.params.comment;

            teamsService.createTeam(teamName, teamComment)
                .then(function (data) {
                    teamsService.joinTeam(data._id)
                        .then((newData) => {
                            auth.saveSession(newData);
                            auth.showInfo(`TEAM HAS BEEN CREATED!`);
                            displayCatalog(ctx);
                        });
                });
        });

        //TEAM DETAILS PAGE
        this.get('#/catalog/:id', function (ctx) {
            let teamId = ctx.params.id.substr(1);

            teamsService.loadTeamDetails(teamId)
                .then(function (teamInfo) {
                    ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
                    ctx.username = sessionStorage.getItem('username');
                    ctx.teamId = teamId;
                    ctx.name = teamInfo.name;
                    ctx.comment = teamInfo.comment;
                    ctx.isOnTeam = teamInfo._id === sessionStorage.getItem('teamId');
                    ctx.isAuthor = teamInfo._acl.creator === sessionStorage.getItem('userId');
                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        teamControls: './templates/catalog/teamControls.hbs'
                    }).then(function () {
                        this.partial('./templates/catalog/details.hbs');
                    });
                }).catch(auth.handleError);
        });

        //JOIN TEAM BY ID
        this.get('#/join/:id', function (ctx) {
            let teamId = ctx.params.id.substr(1);

            teamsService.joinTeam(teamId)
                .then(function (userInfo) {
                    auth.saveSession(userInfo);
                    auth.showInfo('JOINED TEAM!');
                    displayCatalog(ctx);
                }).catch(auth.handleError);
        });

        //LEAVE TEAM
        this.get('#/leave', function (ctx) {
            teamsService.leaveTeam()
                .then(function (userInfo) {
                    auth.saveSession(userInfo);
                    auth.showInfo('LEFT THE TEAM!');
                    displayCatalog(ctx);
                }).catch(auth.handleError);
        });


        //EDIT PAGE
        this.get('#/edit/:id', function (ctx) {
            let teamId = ctx.params.id.substr(1);
            teamsService.loadTeamDetails(teamId)
                .then(function (teamInfo) {
                    ctx.teamId = teamId;
                    ctx.name = teamInfo.name;
                    ctx.comment = teamInfo.comment;
                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        editForm: './templates/edit/editForm.hbs'
                    }).then(function () {
                        this.partial('./templates/edit/editPage.hbs');
                    });
                }).catch(auth.handleError);
        });

        //EDIT TEAM POST
        this.post('#/edit/:id', function (ctx) {
            let teamId = ctx.params.id.substr(1);
            let teamName = ctx.params.name;
            let teamComment = ctx.params.comment;

            teamsService.edit(teamId, teamName, teamComment)
                .then(function () {
                    auth.showInfo(`TEAM ${teamName} EDITED!`);
                    displayCatalog(ctx);
                }).catch(auth.handleError);
        });

        function displayCatalog(ctx) {
            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');
            teamsService.loadTeams()
                .then(function (teams) {
                    ctx.hasNoTeam = sessionStorage.getItem('teamId') === null
                        || sessionStorage.getItem('teamId') === 'undefined';
                    ctx.teams = teams;
                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        team: './templates/catalog/team.hbs'
                    }).then(function () {
                        this.partial('./templates/catalog/teamCatalog.hbs');
                    });
                });
        }

        function displayHome(ctx){
            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');
            ctx.hasTeam = sessionStorage.getItem('teamId') !== 'undefined'
                || sessionStorage.getItem('teamId') !== null;
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/home/home.hbs');
            });
        }
    });

    app.run();
});