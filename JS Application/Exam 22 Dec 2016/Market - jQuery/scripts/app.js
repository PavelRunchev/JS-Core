$(() =>{
    showView('AppHome');

    if(sessionStorage.getItem('authtoken') === null){
        userLoggedOut();
    } else {
        userLoggedIn();
    }

    // Shows one view/section at a time
    function showView(viewName) {
        $('main > section').hide();
        $('#view' + viewName).show();
    }

    function navigation() {
        let viewName = $(this).attr('data-target');
        showView(viewName);
    }

    (() => {
        $('header').find('a[data-target]').click(navigation);
        $('#formRegister').submit(registerUser);
        $('#formLogin').submit(loginUser);
        $('#linkMenuLogout').click(logoutUser);

        // Bind user home links
        $("#linkUserHomeShop").click(shopList);
        $("#linkUserHomeCart").click(cart);

        $("#linkMenuShop").click(shopList);
        $("#linkMenuCart").click(cart);

    })();

    function userLoggedIn() {
        $('.anonymous').hide();
        $('.useronly').show();
        let username = sessionStorage.getItem('username');
        $('#viewUserHomeHeading').text(`Welcome, ${username}`);
        $('#spanMenuLoggedInUser').text(`Welcome, ${username}`);
        showView('UserHome');
    }

    function userLoggedOut() {
        $('.anonymous').show();
        $('.useronly').hide();
        $('#spanMenuLoggedInUser').text("");
        showView('AppHome');
    }

    function registerUser(event) {
        event.preventDefault();

        let registerUsername = $('#registerUsername');
        let registerPassword = $('#registerPasswd');
        let registerName = $('#registerName');

        let usernameVal = registerUsername.val();
        let nameVal = registerName.val();
        let passVal = registerPassword.val();

        auth.register(usernameVal, passVal, nameVal)
            .then((userInfo) => {
                auth.saveSession(userInfo);
                registerUsername.val("");
                registerPassword.val("");
                registerName.val("");
                notify.showInfo("User registration successful.");
                userLoggedIn();
            }).catch(notify.handleError);
    }

    function loginUser() {
        event.preventDefault();
        let inputName = $('#loginUsername');
        let password = $('#loginPasswd');

        auth.login(inputName.val(), password.val())
            .then((userInfo) => {
                auth.saveSession(userInfo);
                inputName.val("");
                password.val("");
                notify.showInfo('Login successful.');

                userLoggedIn();
            }).catch(notify.handleError);
    }

    function logoutUser() {
        auth.logout()
            .then(() => {
                sessionStorage.clear();
                notify.showInfo('Logout successful.');
                userLoggedOut();
            }).catch(notify.handleError);
    }

    function shopList() {
        showView('Shop');
        shopService.allProducts().then(function (listProducts) {
            let shopList = $('#shopProducts');
            shopList.empty();

            let table = $('<table>');
            let tread = $('<thead>')
                .append($('<tr>')
                    .append($('<th>').text("Product"))
                    .append($('<th>').text("Description"))
                    .append($('<th>').text("Price"))
                    .append($('<th>').text("Actions")));
            table.append(tread);

            let tBody = $('<tbody>');
            for(let product of listProducts){
                let purchaseBtn = $(`<button data-id="${product._id}">Purchase</button>`)
                    .click(function () {
                        purchaseProduct(product);
                    });
                let tr = $('<tr>')
                    .append($('<td>').text(`${product.name}`))
                    .append($('<td>').text(`${product.description}`))
                    .append($('<td>').text(`${Number(product.price).toFixed(2)}`))
                    .append($('<td>').append(purchaseBtn));
                tBody.append(tr);
            }

            table.append(tBody);
            shopList.append(table);
        }).catch(notify.handleError);
    }

    function purchaseProduct(product) {
        let userId = sessionStorage.getItem('userId');
        let productId = product._id;
        shopService.userList(userId)
            .then(function (myListProducts) {
                myListProducts.cart = myListProducts.cart || {};

                if(myListProducts.cart.hasOwnProperty(productId)){
                    myListProducts.cart[productId].quantity = Number(myListProducts.cart[productId].quantity) + 1;
                }else{
                    myListProducts.cart[productId] = {
                        quantity: "1",
                        id: productId,
                        product: {
                            name: product.name,
                            description: product.description,
                            price: Number(product.price).toFixed(2)
                        }
                    }
                }

                shopService.userUpdate(userId, myListProducts)
                    .then(function () {
                        notify.showInfo("Product purchased.");
                    }).catch(notify.handleError);
            }).catch(notify.handleError);
    }

    function cart() {
        showView('Cart');
        let userId = sessionStorage.getItem('userId');
        shopService.userList(userId)
            .then(function (myListProducts) {
                let myCart = $('#cartProducts');
                myCart.empty();

                let table = $('<table>');
                let tread = $('<thead>')
                    .append($('<tr>')
                        .append($('<th>').text("Product"))
                        .append($('<th>').text("Description"))
                        .append($('<th>').text("Quantity"))
                        .append($('<th>').text("Total Price"))
                        .append($('<th>').text("Actions")));
                table.append(tread);

                let tBody = $('<tbody>');
                for(let key in myListProducts.cart){
                    let discardBtn = $(`<button data-id="${key}">Discard</button>`).click((e) => {
                            let productId = $(e.target).attr('data-id');
                            $(e.target).parent().parent().remove();
                            let newCart = {};

                            for(let id in myListProducts.cart){
                                if(id !== productId){
                                    newCart[id] = myListProducts.cart[id];
                                }
                            }

                            myListProducts.cart = newCart;
                            shopService.userUpdate(userId, myListProducts)
                                .then(function () {
                                    notify.showInfo("Product discarded.");
                                    cart();
                                }).catch(notify.handleError);
                        });
                    let tr = $('<tr>')
                        .append($('<td>').text(`${myListProducts.cart[key]['product']['name']}`))
                        .append($('<td>').text(`${myListProducts.cart[key].product.description}`))
                        .append($('<td>').text(`${myListProducts.cart[key].quantity}`))
                        .append($('<td>').text(`${(Number(myListProducts.cart[key].product.price) * Number(myListProducts.cart[key].quantity)).toFixed(2)}`))
                        .append($('<td>').append(discardBtn));
                    tBody.append(tr);
                }

                table.append(tBody);
                myCart.append(table);
            }).catch(notify.handleError);
    }
});