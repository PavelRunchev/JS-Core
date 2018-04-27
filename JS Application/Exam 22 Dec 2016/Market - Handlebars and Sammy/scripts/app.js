$(() => {
    const app = Sammy('#app', function () {
        this.use('Handlebars', 'hbs');

        this.get('market.html', function () {
            this.loadPartials({
                menu: './templates/common/menu.hbs',
                footer: './templates/common/footer.hbs',
                page: './templates/common/appHome.hbs',
            }).then(function () {
                this.partial('./templates/main.hbs');
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
                    this.partial('./templates/main.hbs');
                })
            }else{
                this.loadPartials({
                    menu: './templates/common/menu.hbs',
                    footer: './templates/common/footer.hbs',
                    page: './templates/common/appHome.hbs',
                }).then(function () {
                    this.partial('./templates/main.hbs');
                })
            }
        });

        this.get('#/register', function (ctx) {
            ctx.loadPartials({
                menu: './templates/common/menu.hbs',
                footer: './templates/common/footer.hbs',
                page: './templates/form/register.hbs'
            }).then(function () {
                this.partial('./templates/main.hbs');
            });
        });

        this.post('#/register', (ctx) => {
            let username = ctx.params.username;
            let password = ctx.params.password;
            let name = ctx.params.name;

            if(username === ""){
                notify.showError('Username connot empty!');
            } else if(password === ""){
                notify.showError('Password connot empty!');
            }else if(name === ""){
                notify.showError('Name connot empty!');
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
                            this.partial('./templates/main.hbs');
                        });
                    }).catch(notify.handleError);
            }
        });

        this.get('#/login', function (ctx) {
            ctx.loadPartials({
                menu: './templates/common/menu.hbs',
                footer: './templates/common/footer.hbs',
                page: './templates/form/login.hbs'
            }).then(function () {
                this.partial('./templates/main.hbs');
            });
        });

        this.post('#/login', function (ctx) {
            let username = ctx.params.username;
            let password = ctx.params.password;

            if(username === "" || password === ""){
                notify.showInfo('All fields should be not empty!');
                return;
            }

            auth.login(username, password)
                .then((userData) => {
                    auth.saveSession(userData);
                    notify.showInfo('Login successful.');
                    ctx.loadPartials({
                        menu: './templates/common/menu.hbs',
                        footer: './templates/common/footer.hbs',
                        page: './templates/common/userHome.hbs'
                    }).then(function () {
                        ctx.username = sessionStorage.getItem('username');
                        this.partial('./templates/main.hbs');
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

        this.get('#/shop', function (ctx) {
            ctx.username = sessionStorage.getItem('username');
            shopService.allProducts().then(function (products) {

               products.forEach(p => p.price = Number(p['price']).toFixed(2));
                ctx.products = products;
                ctx.loadPartials({
                    menu: './templates/common/menu.hbs',
                    footer: './templates/common/footer.hbs',
                    page: './templates/shop.hbs'
                }).then(function () {
                    this.partial('./templates/main.hbs').then(function () {
                        $('button').click((e) => {
                            let productId = $(e.target).attr('data-id');
                            let selectedProduct = {};
                            products.forEach(prod => {
                               if(prod._id === productId){
                                   selectedProduct = prod;
                               }
                            });
                            purchasedProduct(selectedProduct);
                        });
                    })
                })
            }).catch(notify.handleError);
        });

        function purchasedProduct(selectedProduct){
            let productId = selectedProduct._id;
            let userId = sessionStorage.getItem('userId');

            shopService.userList(userId)
                .then((myProducts) => {

                    if(myProducts.cart === null || myProducts.cart === undefined){
                        myProducts.cart = {};
                    }

                    if(myProducts.cart.hasOwnProperty(productId)){
                        myProducts.cart[productId].quantity = Number(myProducts.cart[productId].quantity) + 1;
                    }else{
                        myProducts['cart'][productId] = {
                            quantity: "1",
                            product: {
                                name: selectedProduct.name,
                                description: selectedProduct.description,
                                price: Number(selectedProduct.price).toFixed(2),
                            }
                        }
                    }

                    shopService.userUpdate(userId, myProducts)
                        .then(function (res) {
                            notify.showInfo("Product purchased.");
                        });
                })
        }

        this.get('#/cart', function (ctx) {
            let userId = sessionStorage.getItem('userId');
            shopService.userList(userId).then((myProducts) => {
                for(let key in myProducts.cart){
                    myProducts.cart[key].product.price =
                        (Number(myProducts.cart[key].product.price) * Number(myProducts.cart[key].quantity)).toFixed(2);
                    myProducts.cart[key].id = key;
                }

                ctx.username = sessionStorage.getItem('username');
                ctx.cart = myProducts.cart;
                ctx.loadPartials({
                    menu: './templates/common/menu.hbs',
                    footer: './templates/common/footer.hbs',
                    page: './templates/cart.hbs'
                }).then(function () {
                    this.partial('./templates/main.hbs').then(function () {
                        $('button').click((e) => {
                            let discardId = $(e.target).attr('data-id');
                            $(e.target).parent().parent().remove();
                            let newCart = {};
                            for(let id in myProducts.cart){
                                if(id !== discardId){
                                    newCart[id] = myProducts.cart[id];
                                }
                            }

                            myProducts.cart = newCart;
                            shopService.userUpdate(userId, myProducts)
                                .then(function () {
                                    notify.showInfo('Product discarded.');
                                    ctx.redirect('#/cart');
                                });
                        });
                    });
                });
            }).catch(notify.handleError);
        });
    });

    app.run();
});
