$(() => {
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');

        this.get('index.html', function (ctx) {
            ctx.loadPartials({
                navigation: './templates/common/navigation.hbs',
                page: './templates/forms/login.hbs',
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
            let password = ctx.params.pass;

            if(username === '' || password === '') {
                return notify.showError("Input fields cannot be empty!");
            }

            auth.login(username, password).then(function (userData) {
                auth.saveSession(userData);
                notify.showInfo("Login successful.");
                ctx.redirect('#/catalog');

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
            let password = ctx.params.pass;
            let repeatPass = ctx.params.checkPass;

            if(username.length < 5) {
                return notify.showError("Username should be a string with at least 5 symbols long!");
            } else if (password === '') {
                return notify.showError("Passwords input fields shouldn’t be empty!");
            } else if (repeatPass !== password) {
                return notify.showError("Both passwords should match!");
            }

            auth.register(username, password)
                .then(function (userData) {
                auth.saveSession(userData);
                notify.showInfo("User registration successful.");
                ctx.redirect('#/catalog');
            }).catch(notify.handleError);

        });

        this.get('#/logout', function (ctx) {
            auth.logout().then(function () {
                sessionStorage.clear();
                notify.showInfo("Logout successful.");
                ctx.redirect('#');
            }).catch(notify.handleError);
        });

        this.get('#/catalog', function (ctx) {
            if(!auth.isAuth()) {
                return ctx.redirect('#');
            }

            flightsServices
                .getFlights()
                .then(function (allFlights) {
                    allFlights.map(f => f['departure'] = convertData(f.departure));
                    ctx.flights = allFlights;
                    ctx.username = sessionStorage.getItem('username');
                    ctx.isAuth = auth.isAuth();
                    ctx.loadPartials({
                        navigation: './templates/common/navigation.hbs',
                        page: './templates/catalog.hbs',
                        footer: './templates/common/footer.hbs'
                    }).then(function () {
                        this.partial('./templates/main.hbs');
                    });
            }).catch(notify.handleError);
        });

        this.get('#/createFlight', function (ctx) {
            if(auth.isAuth() === false) {
                return ctx.redirect('#');
            }

            ctx.username = sessionStorage.getItem('username');
            ctx.isAuth = auth.isAuth();
            ctx.loadPartials({
                navigation: './templates/common/navigation.hbs',
                page: './templates/forms/addFlightForm.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/main.hbs');
            });
        });

        this.post('#/createFlight', function (ctx) {
            if (auth.isAuth() === false) {
                return ctx.redirect('#');
            }

            let destination = ctx.params.destination;
            let origin = ctx.params.origin;
            let departureDate = ctx.params.departureDate;
            let departureTime = ctx.params.departureTime;
            let seats = +ctx.params.seats;
            let cost = +ctx.params.cost;
            let image = ctx.params.img;
            let isPublic = ctx.params.public === "on" ? "true" : "false";

            let departure = new Date(departureDate + ' ' + departureTime);

            if(destination === '' || origin === '') {
                return notify.showError("Destination and origin station should be non-empty strings");
            } else if(typeof (seats) !== 'number' || seats <= 0) {
                return notify.showError("Seats should be positive number and greater from zero");
            } else if(typeof (cost) !== 'number' || cost <= 0) {
                return notify.showError("Cost should be positive number and greater from zero");
            }

            flightsServices
                .createFlight(destination, origin, departure, seats, cost, image, isPublic)
                .then(function () {
                    notify.showInfo("Created flight.");
                    ctx.redirect('#/catalog');
                }).catch(notify.handleError);

        });

        this.get('#/detailsFlight/:id', function (ctx) {
            if (auth.isAuth() === false) {
                return ctx.redirect('#');
            }

            let flightId = ctx.params.id;
            flightsServices
                .detailsFlights(flightId)
                .then(function (currentFlight) {
                    ctx.flight = currentFlight;
                    ctx.date = convertData(currentFlight.departure);
                    //get from Date => hour and minutes!!! remove last part of the string!
                    ctx.time = convertTime(currentFlight.departure);
                    ctx.isAuth = auth.isAuth();
                    ctx.username = sessionStorage.getItem('username');

                    //checked for creator current flight => visible edit button!!!
                    ctx.creator = sessionStorage.getItem('userId') === currentFlight._acl.creator;
                    ctx.loadPartials({
                        navigation: './templates/common/navigation.hbs',
                        page: './templates/flights/flightDetails.hbs',
                        footer: './templates/common/footer.hbs'
                    }).then(function () {
                        this.partial('./templates/main.hbs');
                    });
                }).catch(notify.handleError);
        });

        this.get('#/editFlight/:id', function (ctx) {
            if (auth.isAuth() === false) {
                return ctx.redirect('#');
            }

            let flightId = ctx.params.id;
            flightsServices
                .detailsFlights(flightId)
                .then(function (flight) {
                    ctx.date = convertFullDate(flight.departure);
                    ctx.time = convertTime(flight.departure);
                    ctx.flight = flight;
                    ctx.username = sessionStorage.getItem('username');
                    ctx.isAuth = auth.isAuth();
                    ctx.loadPartials({
                        navigation: './templates/common/navigation.hbs',
                        page: './templates/forms/editFlightForm.hbs',
                        footer: './templates/common/footer.hbs'
                    }).then(function () {
                        this.partial('./templates/main.hbs');
                    });
                }).catch(notify.handleError);
        });

        this.post('#/editFlight/:id', function (ctx) {
            if (auth.isAuth() === false) {
                return ctx.redirect('#');
            }

            let flightId = ctx.params.id;
            let destination = ctx.params.destination;
            let origin = ctx.params.origin;
            let departureDate = ctx.params.departureDate;
            let departureTime = ctx.params.departureTime;
            let seats = +ctx.params.seats;
            let cost = +ctx.params.cost;
            let image = ctx.params.img;
            let isPublic = ctx.params.public === "on" ? "true" : "false";

            let departure = new Date(departureDate + ' ' + departureTime);
            if(destination === '' || origin === '') {
                return notify.showError("Destination and origin station should be non-empty strings");
            } else if(typeof (seats) !== 'number' || seats <= 0) {
                return notify.showError("Seats should be positive number and greater from zero");
            } else if(typeof (cost) !== 'number' || cost <= 0) {
                return notify.showError("Cost should be positive number and greater from zero");
            }

            flightsServices
                .editFLight(flightId, destination, origin, departure, seats, cost, image, isPublic)
                .then(function () {
                    notify.showInfo("Successfully edited flight.");
                    ctx.redirect(`#/detailsFlight/${flightId}`);
                }).catch(notify.handleError);
        });

        this.get('#/myFlights', function (ctx) {
            if (auth.isAuth() === false) {
                return ctx.redirect('#');
            }

            let userId = sessionStorage.getItem('userId');
            flightsServices
                .myFlights(userId)
                .then(function (myFlights) {

                    myFlights.map(f => {
                        f['time'] = convertTime(f.departure);
                        f.departure = convertData(f.departure);
                    });
                    ctx.myFlights = myFlights;
                    ctx.isAuth = auth.isAuth();
                    ctx.username = sessionStorage.getItem('username');
                    ctx.loadPartials({
                        navigation: './templates/common/navigation.hbs',
                        page: './templates/flights/myFlights.hbs',
                        footer: './templates/common/footer.hbs'
                    }).then(function () {
                        this.partial('./templates/main.hbs');
                    });
            }).catch(notify.handleError);
        });

        this.get('#/deleteFlight/:id', function (ctx) {
            if (auth.isAuth() === false) {
                return ctx.redirect('#');
            }
            
            let flightId = ctx.params.id;
            flightsServices
                .deleteFlight(flightId)
                .then(function () {
                    notify.showInfo("Flight deleted.");
                    ctx.redirect('#/myFlights');
                }).catch(notify.handleError);
        });


        function convertData(value) {
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let day = new Date(value).getUTCDate();
            let month = Number(new Date(value).getUTCMonth());

            return `${day} ${months[month]}`;
        }

        function convertTime(value) {
            let hours = new Date(value).getHours();
            let minutes = new Date(value).getMinutes();

            if(hours < 10) {
                hours = '0' + hours;
            }

            if(minutes < 10) {
                minutes = '0' + minutes;
            }

            return `${hours}:${minutes}`;
        }

        function convertFullDate(value) {
            let day = new Date(value).getUTCDate();
            let month = new Date(value).getUTCMonth() + 1;
            let year = new Date(value).getFullYear();

            if(day < 10) {
                day = '0' + day;
            }

            if(month < 10) {
                month = '0' + month;
            }

            return `${year}-${month}-${day}`;
        }
    });

    app.run();
});
