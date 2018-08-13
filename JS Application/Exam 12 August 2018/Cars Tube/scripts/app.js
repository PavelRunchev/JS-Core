$(() => {
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');

        this.get('index.html', function (ctx) {
            ctx.loadPartials({
                navigation: './templates/common/navigation.hbs',
                page: './templates/home.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/main.hbs');
            });
        });

        this.get('#/home', function (ctx) {
            ctx.loadPartials({
                navigation: './templates/common/navigation.hbs',
                page: './templates/home.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/main.hbs');
            });
        });

        this.get('#/login', function (ctx) {
            ctx.loadPartials({
                navigation: './templates/common/navigation.hbs',
                page: './templates/forms/login.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/main.hbs');
            });
        });

        this.post('#/login', function (ctx) {
            let username = ctx.params.username;
            let password = ctx.params.password;

            const patternUsername = /^[A-Za-z]{3,}$/;
            const patternPassword = /^[A-Za-z0-9]{6,}$/;

            if(!patternUsername.test(username)) {
                return notify.showError("Username should be a string with at least 3 symbols long!");
            } else if (!patternPassword.test(password)) {
                return notify.showError("Password should be at least 6 characters long!");
            }

            auth.login(username, password).then(function (userData) {
                auth.saveSession(userData);
                notify.showInfo("Login successful.");
                ctx.redirect('#/allCars');

            }).catch(notify.handleError);
        });

        this.get('#/register', function (ctx) {
            ctx.loadPartials({
                navigation: './templates/common/navigation.hbs',
                page: './templates/forms/register.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/main.hbs');
            });
        });

        this.post('#/register', function (ctx) {
            let username = ctx.params.username;
            let password = ctx.params.password;
            let repeatPass = ctx.params.repeatPass;

            const patternUsername = /^[A-Za-z]{3,}$/;
            const patternPassword = /^[A-Za-z0-9]{6,}$/;

            if(!patternUsername.test(username)) {
                return notify.showError("Username should be a string with at least 3 symbols long!");
            } else if (!patternPassword.test(password)) {
                return notify.showError("Password should be at least 6 characters long!");
            } else if (repeatPass !== password) {
                return notify.showError("Both passwords must match!");
            }
            
            auth.register(username, password)
                .then(function (userData) {
                auth.saveSession(userData);
                notify.showInfo("User registration successful.");
                ctx.redirect('#/allCars');
            }).catch(notify.handleError);

        });

        this.get('#/logout', function (ctx) {
            auth.logout().then(function () {
                sessionStorage.clear();
                notify.showInfo("Logout successful.");
                ctx.redirect('#');
            }).catch(notify.handleError);
        });
        
        this.get('#/allCars', function (ctx) {
            if(!auth.isAuth()){
                return ctx.redirect('#/home');
            }

            carServices
                .allCars()
                .then(function (allCars) {
                    allCars.map(c => c.isAuthor = isCreator(c._acl.creator));
                    ctx.cars = allCars;
                    ctx.username = sessionStorage.getItem('username');
                    ctx.isAuth = auth.isAuth();
                    ctx.loadPartials({
                        navigation: './templates/common/navigation.hbs',
                        page: './templates/cars/allCars.hbs',
                        footer: './templates/common/footer.hbs'
                    }).then(function () {
                        this.partial('./templates/main.hbs');
                    });
            }).catch(notify.handleError);
        });

        this.get('#/createCar', function (ctx) {
            if(!auth.isAuth()){
                return ctx.redirect('#/home');
            }

            ctx.username = sessionStorage.getItem('username');
            ctx.isAuth = auth.isAuth();
            ctx.loadPartials({
                navigation: './templates/common/navigation.hbs',
                page: './templates/cars/createCar.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/main.hbs');
            });
        });

        this.post('#/createCar', function (ctx) {
            if(!auth.isAuth()){
                return ctx.redirect('#/home');
            }

            let title = ctx.params.title;
            let description = ctx.params.description;
            let brand = ctx.params.brand;
            let model = ctx.params.model;
            let year = ctx.params.year;
            let imageUrl = ctx.params.imageUrl;
            let fuel = ctx.params.fuelType;
            let price = Number(ctx.params.price);

            if(title === '') {
                return notify.showError("Field title cannot be empty!");
            }

            if(title.length > 33) {
                return notify.showError("The title length must not exceed 33 characters!");
            }

            if(description.length < 30) {
                return notify.showError("Description length should be at least 30 characters!");
            }
            if(description.length > 450) {
                return notify.showError("The description length must not exceed 450 characters!");
            }

            if(brand.length === 0) {
                return notify.showError("Field brand cannot be empty!");
            }

            if(brand.length > 11) {
                return notify.showError("Brand length must not exceed 11 characters!");
            }

            if(model.length > 11) {
                return notify.showError("Model length must not exceed 11 characters!");
            }

            if(model.length < 4) {
                return notify.showError("Model length should be at least 4 characters!");
            }

            if(year.length < 4 || year.length > 4) {
                return notify.showError("The year must be only 4 chars long!");
            }

            if(!imageUrl.startsWith('http')) {
                return notify.showError("Link url should always start with “http");
            }

            if(fuel === '') {
                return notify.showError("Field fuel cannot be empty!");
            }

            if(fuel.length > 11) {
                return notify.showError("Fuel length must not exceed 11 characters!");
            }

            if(price <= 0) {
                return notify.showError("Price cannot be negative number or zero!");
            }

            if(price > 1000000) {
                return notify.showError("The maximum price is 1000000$!");
            }

            carServices
                .createCar(brand, description, fuel, imageUrl, model, price, title, year)
                .then(function () {
                    notify.showInfo("listing created.");
                    ctx.redirect('#/allCars');
                }).catch(notify.handleError);
        });

        this.get('#/editCar/:id', function (ctx) {
            if(!auth.isAuth()){
                return ctx.redirect('#/home');
            }

            let carId = ctx.params.id;
            carServices
                .detailsCar(carId)
                .then(function (car) {
                    ctx.car = car;
                    ctx.username = sessionStorage.getItem('username');
                    ctx.isAuth = auth.isAuth();
                    ctx.loadPartials({
                        navigation: './templates/common/navigation.hbs',
                        page: './templates/cars/editCar.hbs',
                        footer: './templates/common/footer.hbs'
                    }).then(function () {
                        this.partial('./templates/main.hbs');
                    });
            }).catch(notify.handleError);
        });

        this.post('#/editCar/:id', function (ctx) {
            if(!auth.isAuth()){
                return ctx.redirect('#/home');
            }

            let carId = ctx.params.id;
            let title = ctx.params.title;
            let description = ctx.params.description;
            let brand = ctx.params.brand;
            let model = ctx.params.model;
            let year = ctx.params.year;
            let imageUrl = ctx.params.imageUrl;
            let fuel = ctx.params.fuelType;
            let price = Number(ctx.params.price);

            if(title === '') {
                return notify.showError("Field title cannot be empty!");
            }

            if(title.length > 33) {
                return notify.showError("The title length must not exceed 33 characters!");
            }

            if(description.length < 30) {
                return notify.showError("Description length should be at least 30 characters!");
            }
            if(description.length > 450) {
                return notify.showError("The description length must not exceed 450 characters!");
            }

            if(brand.length === 0) {
                return notify.showError("Field brand cannot be empty!");
            }

            if(brand.length > 11) {
                return notify.showError("Brand length must not exceed 11 characters!");
            }

            if(model.length > 11) {
                return notify.showError("Model length must not exceed 11 characters!");
            }

            if(model.length < 4) {
                return notify.showError("Model length should be at least 4 characters!");
            }

            if(year.length < 4 || year.length > 4) {
                return notify.showError("The year must be only 4 chars long!");
            }

            if(!imageUrl.startsWith('http')) {
                return notify.showError("Link url should always start with “http");
            }

            if(fuel === '') {
                return notify.showError("Field fuel cannot be empty!");
            }

            if(fuel.length > 11) {
                return notify.showError("Fuel length must not exceed 11 characters!");
            }

            if(price <= 0) {
                return notify.showError("Price cannot be negative number or zero!");
            }

            if(price > 1000000) {
                return notify.showError("The maximum price is 1000000$!");
            }

            carServices
                .editCar(carId, title, description, brand, model, year, imageUrl, fuel, price)
                .then(() => {
                    notify.showInfo(`Listing ${title} updated.`);
                    ctx.redirect('#/allCars');
            }).catch(notify.handleError);
        });

        this.get('#/myCars', function (ctx) {
            if(!auth.isAuth()){
                return ctx.redirect('#/home');
            }

            let username = sessionStorage.getItem('username');
            carServices
                .myCars(username)
                .then(function (myCars) {

                    console.log(myCars);
                    ctx.myCars = myCars;
                    ctx.username = sessionStorage.getItem('username');
                    ctx.isAuth = auth.isAuth();
                    ctx.loadPartials({
                        navigation: './templates/common/navigation.hbs',
                        page: './templates/cars/myCars.hbs',
                        footer: './templates/common/footer.hbs'
                    }).then(function () {
                        this.partial('./templates/main.hbs');
                    });
            }).catch(notify.handleError);
        });

        this.get('#/detailsCar/:id', function (ctx) {
            if(!auth.isAuth()){
                return ctx.redirect('#/home');
            }

            let carId = ctx.params.id;
            carServices
                .detailsCar(carId)
                .then(function (car) {
                    ctx.username = sessionStorage.getItem('username');
                    ctx.isAuth = auth.isAuth();
                    ctx.car = car;
                    ctx.isCreator = isCreator(car._acl.creator);
                    ctx.loadPartials({
                        navigation: './templates/common/navigation.hbs',
                        page: './templates/cars/detailsCar.hbs',
                        footer: './templates/common/footer.hbs'
                    }).then(function () {
                        this.partial('./templates/main.hbs');
                    });
            }).catch(notify.handleError);
        });

        this.get('#/deleteCar/:id', function (ctx) {
            if(!auth.isAuth()){
                return ctx.redirect('#/home');
            }

            let carId = ctx.params.id;
            carServices.deleteCar(carId).then(() => {
                notify.showInfo("Listing deleted.");
                ctx.redirect('#/allCars');
            }).catch(notify.handleError);
        });
    });

    function isCreator(creator){
        let currentUser = sessionStorage.getItem('userId');
        return  currentUser === creator ? true : false;
    }

    app.run();
});
