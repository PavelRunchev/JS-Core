$(() => {
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');

        this.get('index.html', loadHomePage);

        this.post('#/register', function (ctx) {
            let username = $('#username-register').val();
            let password = $('#password-register').val();
            let repeatPass = $('#password-register-check').val();

            if(username.length < 5){
                notify.showError("Username should be at least 5 characters!");
            }else if(password === ""){
                notify.showError("Password not empty!");
            }else if(password !== repeatPass){
                notify.showError("Both password must match!");
            }else{
                auth.register(username, password).then(function (userData) {
                    auth.saveSession(userData);
                    notify.showInfo("User registration successful.");
                    ctx.redirect('#/editor');
                }).catch(notify.handleError);
            }
        });

        this.post('#/login', function (ctx) {
            let username = document.getElementById('username-login').value;
            let password = document.getElementById('password-login').value;

            if(username === "" || password === ""){
                notify.showError("fields not empty!");
                return;
            }

            auth.login(username, password).then(function (userData) {
                auth.saveSession(userData);
                notify.showInfo("Login successful.");
                ctx.redirect('#/editor');
            }).catch(notify.handleError);
        });

        this.get('#/logout', function (ctx) {
            auth.logout().then(() => {
                sessionStorage.clear();
                notify.showInfo("Logout successful.");
                ctx.redirect('#');
            });
        });

        this.get('#/editor', function (ctx) {
            if(auth.isAuth() === false){
                ctx.redirect('#');
                return;
            }

            let userId = sessionStorage.getItem('userId');
            services.getActiveReceipt(userId).then(function(activeReceipt) {
                let receiptId;

                if(activeReceipt[0] === undefined){
                    services.createReceipt().then(function (newReceipt) {
                        receiptId = newReceipt._id;
                        console.log(receiptId + " create");
                        services.getEntriesByReceiptId(receiptId).then(function (entries) {
                            entries.map(p => {
                                p.subTotal = (Number(p.quantity) * Number(p.price)).toFixed(2);
                                p.price = Number(p.price).toFixed(2);
                            });

                            ctx.entries = entries;
                            let sum = 0;
                            entries.forEach(p => sum += Number(p.subTotal));
                            ctx.total = sum.toFixed(2);
                            ctx.receiptId = receiptId;
                            ctx.productCount = entries.length;

                            ctx.loadPartials({
                                page: "./templates/editor.hbs",
                                footer: "./templates/common/footer.hbs",
                                header: "./templates/common/header.hbs"
                            }).then(function () {
                                ctx.username = sessionStorage.getItem('username');
                                ctx.isAuth = auth.isAuth();
                                this.partial('./templates/main.hbs');
                            });
                        }).catch(notify.handleError);
                    }).catch(notify.handleError);
                }else{
                    receiptId = activeReceipt[0]._id;
                    console.log(receiptId + " activeReceipt");
                    services.getEntriesByReceiptId(receiptId).then(function (entries) {
                        entries.map(p => {
                            p.subTotal = (Number(p.quantity) * Number(p.price)).toFixed(2);
                            p.price = Number(p.price).toFixed(2);
                        });

                        ctx.entries = entries;
                        let sum = 0;
                        entries.forEach(p => sum += Number(p.subTotal));
                        ctx.total = sum.toFixed(2);
                        ctx.receiptId = receiptId;
                        ctx.productCount = entries.length;

                        ctx.loadPartials({
                            page: "./templates/editor.hbs",
                            footer: "./templates/common/footer.hbs",
                            header: "./templates/common/header.hbs"
                        }).then(function () {
                            ctx.username = sessionStorage.getItem('username');
                            ctx.isAuth = auth.isAuth();
                            this.partial('./templates/main.hbs');
                        });
                    }).catch(notify.handleError);
                }
            }).catch(notify.handleError);
        });

        this.post('#/add', function (ctx) {
            if(auth.isAuth() === false){
                ctx.redirect('#');
                return;
            }

            let productName = ctx.params.type;
            let quantity = Number(ctx.params.qty);
            let price = Number(ctx.params.price);
            let receiptId = ctx.params.receiptId;

            if(productName === ""){
                notify.showError("Product name must be a not empty string!");
            }else if(quantity === 0 || typeof(quantity) !== 'number'){
                notify.showError("Quantity must be a number!");
            }else if(price === 0 || typeof (price) !== 'number'){
                notify.showError("Price must be a number!");
            }else{
                services.addEntry(productName, quantity, price, receiptId).then(function () {
                    notify.showInfo('Entry added');
                    ctx.redirect('#/editor');
                }).catch(notify.handleError);
            }
        });

        this.get('#/delete/:id', function (ctx) {
            if(auth.isAuth() === false){
                ctx.redirect('#');
                return;
            }

            let id = ctx.params.id;
            services.deleteEntry(id).then(function () {
                notify.showInfo("Entry removed");
                ctx.redirect('#/editor');
            }).catch(notify.handleError);
        });

        this.post('#/checkout', function (ctx) {
            let receiptId = ctx.params.receiptId;
            let productCount = ctx.params.productCount;
            let total = ctx.params.total;

            if(productCount === "" || total === ""){
                notify.showError("The receipt contains at least one entry!");
            }else{
                services.commitReceipt(receiptId, productCount, total).then(function (res) {
                    notify.showInfo("Receipt checked out");
                    services.createReceipt().then(function (newReceipt) {
                        ctx.redirect('#/editor');
                    }).catch(notify.handleError);
                }).catch(notify.handleError);
            }
        });

        this.get('#/myReceipts', function (ctx) {
            if(auth.isAuth() === false){
                ctx.redirect('#');
                return;
            }

            services.myReceipts(sessionStorage.getItem('userId'))
                .then(function (myReceipts) {
                    myReceipts.map(rec => rec.time = convertData(rec._kmd.ect));

                    let totalPrice = 0;
                    myReceipts.forEach(rec => totalPrice += Number(rec.total));
                    ctx.isAuth = auth.isAuth();
                    ctx.totalPrice = totalPrice.toFixed(2);
                    ctx.myReceipts = myReceipts;
                    ctx.loadPartials({
                        page: "./templates/myReceipts.hbs",
                        footer: "./templates/common/footer.hbs",
                        header: "./templates/common/header.hbs"
                    }).then(function () {
                        this.partial('./templates/main.hbs');
                });
            }).catch(notify.handleError);
        });

        this.get('#/details/:id', function (ctx) {
            if(auth.isAuth() === false){
                ctx.redirect('#');
                return;
            }

            let receiptId = ctx.params.id;
            services.getEntriesByReceiptId(receiptId).then(function (receiptDetails) {
                receiptDetails.map(e => e.subTotal = (Number(e.quantity) * Number(e.price)).toFixed(2));
                ctx.entreis = receiptDetails;
                ctx.isAuth = auth.isAuth();
                ctx.loadPartials({
                    page: "./templates/receiptDetails.hbs",
                    footer: "./templates/common/footer.hbs",
                    header: "./templates/common/header.hbs"
                }).then(function () {
                   this.partial('./templates/main.hbs');
                });
            }).catch(notify.handleError);
        });

        function loadHomePage(ctx) {
            ctx.loadPartials({
                page: "./templates/welcome.hbs",
                footer: "./templates/common/footer.hbs",
                login: "./templates/form/login.hbs",
                register: "./templates/form/register.hbs"
            }).then(function () {
                this.partial('./templates/main.hbs');
            });
        }

        function convertData(value) {
            let day = new Date(value).getUTCDate();
            let month = new Date(value).getUTCMonth() + 1;
            let year = new Date(value).getUTCFullYear();
            let minutes = new Date(value).getUTCMinutes();
            let hours = new Date(value).getUTCHours();

            return `${year}-${month}-${day} ${hours}:${minutes}`;
        }
    });

    app.run();
});