const BaseUrl = "https://baas.kinvey.com/";
const AppKey = "kid_SyvTdfAqM";
const AppSecretKey = "c5b7145f7f384844a00d6fd7fca3e18f";
const headers = {'Authorization': "Basic " + btoa(AppKey + ":" + AppSecretKey)};

function saveAuthInSession(userInfo) {
    let userAuth = userInfo._kmd.authtoken;
    let userId = userInfo._id;
    let username = userInfo.username;

    sessionStorage.setItem('authToken', userAuth);
    sessionStorage.setItem('userId', userId);
    $('#loggedInUser').text("Welcome, " + username + "!");
}

function showListAdverts() {
    let listView = $('#ads');
    listView.empty();

    $.ajax({
        method: 'GET',
        url: BaseUrl + "appdata/" + AppKey + "/adverts",
        headers: {'Authorization': "Kinvey " + sessionStorage.getItem('authToken')},
    }).then(function (adverts) {
        showInfo('Advertisements loaded.');
        if(adverts.length === 0){
            listView.text('No advertisements available.');
        }else{
            let countId;
            let currentToken;
            let table = $('<table>');
            let headTr = $('<tr>');
            headTr.append('<th>Title</th>');
            headTr.append('<th>Publisher</th>');
            headTr.append('<th>Description</th>');
            headTr.append('<th>Price</th>');
            headTr.append('<th>Date Published</th>');
            headTr.append('<th>Action</th>');
            table.append(headTr);

            for(let advert of adverts.sort((a, b) => b.count - a.count)){
                let tr = $('<tr>');
                tr.append($(`<td>${advert.title}</td>`));
                tr.append($(`<td>${advert.publisher}</td>`));
                tr.append($(`<td>${advert.description}</td>`));
                tr.append($(`<td>${advert.price}</td>`));
                tr.append($(`<td>${advert.datePublished}</td>`));
                tr.append($(`<a data-id="${advert._id}" href="#">[Read More]</a>`).click(function () {
                    $.ajax({
                        method: 'GET',
                        url: BaseUrl + 'appdata/' + AppKey + '/adverts' + `/${advert._id}`,
                        headers: {'Authorization': `Kinvey ${sessionStorage.getItem('authToken')}`},
                    }).then(function () {
                        let readMore = $('#viewDetailsAd');
                        readMore.empty();
                        readMore.append($('<div>').append(
                            $('<img width="400px">').attr("src", advert.image),
                            $('<br>'),
                            $('<label>').text('Title:'),
                            $('<h1>').text(advert.title),
                            $('<label>').text('Description:'),
                            $('<p>').text(advert.description),
                            $('<label>').text('Publisher:'),
                            $('<div>').text(advert.publisher),
                            $('<label>').text('Date:'),
                            $('<div>').text(advert.datePublished),
                            $('<label>').text('Price: '),
                            $('<div>').text(advert.price + ' lv')),
                            $('<div>').text(`Views: ${++advert.count}`))
                    }).catch(handleAjaxError);
                    showView('viewDetailsAd');
                }));
                if(sessionStorage.getItem('userId') === advert._acl.creator){
                    tr.append($(`<a data-id="${advert._id}" href="#">[Delete]</a>`).click(function () {
                            deleteAdvert($(this).attr('data-id'));
                    }));

                    tr.append($(`<a data-id="${advert._id}" href="#">[Edit]</a>`).click(function () {
                            loadAdvertForEdit($(this).attr("data-id"));
                    }));
                }
                table.append(tr);
                listView.append(table);
            }
        }
    }).catch(handleAjaxError);
    showView('viewAds');
}

function showCreateAdvert() {
    let createForm = $('#formCreateAd');
    createForm.trigger('reset');

    showView('viewCreateAd');
}

function loginUser() {
    let username = $('#formLogin').find('input[name=username]').val();
    let password = $('#formLogin').find('input[name=passwd]').val();

    $.ajax({
        method: 'POST',
        url: BaseUrl + "user/" + AppKey + "/login",
        headers: headers,
        data: {username, password}
    }).then(function (userInfo) {
        saveAuthInSession(userInfo);
        showHideMenuLinks();
        showListAdverts();
        showInfo('Login successful.');
    }).catch(handleAjaxError);
}

function registerUser() {
    let username = $('#formRegister').find('input[name=username]').val();
    let password = $('#formRegister').find('input[name=passwd]').val();
    console.log(username);
    console.log(password);

    $.ajax({
        method: 'POST',
        url: BaseUrl + "user/" + AppKey + "/",
        headers: headers,
        data: {username, password}
    }).then(function (res) {
        saveAuthInSession(res);
        showHideMenuLinks();
        showListAdverts();
        showInfo('User registration successful.');
    }).catch(handleAjaxError);
}

function showLogout() {
    sessionStorage.clear();
    $('#loggedInUser').text("");
    showHideMenuLinks();
    showView('viewHome');
    showInfo('Logout Successful.');
}

function createAdvert() {

    $.ajax({
        method: 'GET',
        url: BaseUrl + 'user/' + AppKey + '/' + sessionStorage.getItem('userId'),
        headers: {'Authorization': "Kinvey " + sessionStorage.getItem('authToken')}
    }).then(function (publisher) {
        let createData = {
            title: $('#formCreateAd').find('input[name=title]').val(),
            description: $('#formCreateAd').find('textarea[name=description]').val(),
            publisher: publisher.username,
            datePublished: $('#formCreateAd').find('input[name=datePublished]').val(),
            price: Number($('#formCreateAd').find('input[name=price]').val()),
            image: $('#formCreateAd input[name=image]').val(),
            count: +0
        };

        $.ajax({
            method: 'POST',
            url: BaseUrl + 'appdata/' + AppKey + '/adverts',
            headers: {'Authorization': "Kinvey " + sessionStorage.getItem('authToken')},
            data: createData,
        }).then(function (res) {
            showListAdverts();
            showInfo('Advertisement created.');
        }).catch(handleAjaxError);
    }).catch(handleAjaxError);
}

function loadAdvertForEdit(advertId) {
    let editForm = $('#formEditAd');
    editForm.trigger('reset');

    $.ajax({
        method: 'GET',
        url: BaseUrl + 'appdata/' + AppKey + '/adverts/' + advertId,
        headers: {'Authorization': "Kinvey " + sessionStorage.getItem('authToken')}
    }).then(function (advert) {
        $('#formEditAd input[name=id]').val(advert._id);
        $('#formEditAd input[name=title]').val(advert.title);
        $('#formEditAd input[name=publisher]').val(advert.publisher);
        $('#formEditAd textarea[name=description]').val(advert.description);
        $('#formEditAd input[name=datePublished]').val(advert.datePublished);
        $('#formEditAd input[name=price]').val(advert.price);
        $('#formEditAd input[name=image]').val(advert.image);
        showView('viewEditAd');
    }).catch(handleAjaxError);
}

function editAdvert() {
    let title = $('#formEditAd input[name=title]').val();
    let description = $('#formEditAd textarea[name=description]').val();
    let publisher = $('#formEditAd input[name=publisher]').val();
    let datePublished = $('#formEditAd input[name=datePublished]').val();
    let price = Number($('#formEditAd input[name=price]').val());
    let image = $('#formEditAd input[name=image]').val();

    if(title.length === 0){
        $('#errorBox').text('Title canot be empty!');
        $('#errorBox').show();
        return;
    }

    if(description.length === 0){
        $('#errorBox').text('Description canot be empty!');
        $('#errorBox').show();
        return;
    }

    if(Number.isNaN(price)){
        $('#errorBox').text('Price cannot be empty!');
        $('#errorBox').show();
        return;
    }

    let advertData = {
        title:  title,
        description: description,
        publisher: publisher,
        datePublished: datePublished,
        price: price,
        image: image
    };


    $.ajax({
        method: 'PUT',
        url: BaseUrl + 'appdata/' + AppKey + '/adverts/' + $('#formEditAd input[name=id]').val(),
        headers: {'Authorization': "Kinvey " + sessionStorage.getItem('authToken')},
        data: advertData
    }).then(function (res) {
        showListAdverts();
        showInfo('Advertisement edited.');
    }).catch(handleAjaxError);
}

function deleteAdvert(advertId) {
    $.ajax({
        method: 'DELETE',
        url: BaseUrl + 'appdata/' + AppKey + '/adverts/' + advertId,
        headers: {'Authorization': "Kinvey " + sessionStorage.getItem('authToken')}
    }).then(function (res) {
        showListAdverts();
        showInfo('Advertisement deleted!');
    }).catch(handleAjaxError);
}

function handleAjaxError(response) {
    let errorMsg = JSON.stringify(response);
    if (response.readyState === 0)
        errorMsg = "Cannot connect due to network error.";
    if (response.responseJSON && response.responseJSON.description)
        errorMsg = response.responseJSON.description;

    $('#errorBox').text("Error: " + errorMsg);
    $('#errorBox').show();
}