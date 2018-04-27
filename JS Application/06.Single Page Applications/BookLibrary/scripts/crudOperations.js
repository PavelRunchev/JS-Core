const BASE_URL = 'https://baas.kinvey.com/';
const APP_KEY = 'kid_rJXRuQ65G';
const APP_SECRET = '2ba688d7beb84b59b050ed58994421c4';
const AUTH_HEADERS = {'Authorization': "Basic " + btoa(APP_KEY + ":" + APP_SECRET)};
const BOOKS_PER_PAGE = 10;

function loginUser() {
    let username = $('#formLogin').find('input[name=username]').val();
    let password = $('#formLogin input[name=passwd]').val();

    let loginRequest = {
       method: 'POST',
       url: BASE_URL + 'user/' + APP_KEY + '/login',
       headers: AUTH_HEADERS,
       data: {username, password}
    };

    $.ajax(loginRequest)
        .then(function (res) {
            signInUser(res, 'Login Successful');
        })
        .catch(handleAjaxError);
}

function registerUser() {
    let username = $('#formRegister input[name=username]').val();
    let password = $('#formRegister').find('input[name=passwd]').val();

    $.ajax({
        method: 'POST',
        url: BASE_URL + 'user/' + APP_KEY + '/',
        headers: AUTH_HEADERS,
        data: {username, password}
    }).then(function (res) {
        signInUser(res, 'Registration succesful');
    }).catch(handleAjaxError);
}

function listBooks() {
    $.ajax({
        method: 'GET',
        url: BASE_URL + 'appdata/' + APP_KEY + '/books',
        headers: {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')}
    }).then(function (res) {
        showView('viewBooks');
        displayPaginationAndBooks(res.reverse());
    }).catch(handleAjaxError);
}


function createBook() {
    let title = $('#formCreateBook input[name=title]').val();
    let author = $('#formCreateBook input[name=author]').val();
    let description = $('#formCreateBook textarea[name=description]').val();

    $.ajax({
        method: 'POST',
        url: BASE_URL + 'appdata/' + APP_KEY + '/books',
        headers: {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')},
        data: {title, author, description}
    }).then(function (res) {
        showInfo('Book created');
        listBooks();
    }).catch(handleAjaxError);
}

function deleteBook(book) {
    $.ajax({
        method: 'DELETE',
        url: BASE_URL + 'appdata/' + APP_KEY + '/books/' + book._id,
        headers: {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')},
    }).then(function (res) {
        showInfo('The book is deleted');
        listBooks();
    }).catch(handleAjaxError);
}

function loadBookForEdit(book) {
    showView('viewEditBook');
    $('#formEditBook input[name=id]').val(book._id);
    $('#formEditBook input[name=title]').val(book.title);
    $('#formEditBook input[name=author]').val(book.author);
    $('#formEditBook textarea[name=description]').val(book.description);
}

function editBook() {
    let id = $('#formEditBook input[name=id]').val();
    let title = $('#formEditBook input[name=title]').val();
    let author = $('#formEditBook input[name=author]').val();
    let description = $('#formEditBook').find('textarea[name=description]').val();

    $.ajax({
        method: 'PUT',
        url: BASE_URL + 'appdata/' + APP_KEY + '/books/' + id,
        headers: {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')},
        data: {title, author, description}
    }).then(function (res) {
        showInfo('Book edited.');
        listBooks();
    }).catch(handleAjaxError);
}

function logoutUser() {
    showInfo('Logout successful.');
    sessionStorage.clear();
    showHomeView();
    showHideMenuLinks();

}

function signInUser(res, message) {
    sessionStorage.setItem('username', res.username);
    sessionStorage.setItem('authToken', res._kmd.authtoken);
    sessionStorage.setItem('userId', res._id);
    showHomeView();
    showHideMenuLinks();
    showInfo(message);
}

function displayPaginationAndBooks(books) {
    let pagination = $('#pagination-demo');
    if(pagination.data("twbs-pagination")){
        pagination.twbsPagination('destroy')
    }
    pagination.twbsPagination({
        totalPages: Math.ceil(books.length / BOOKS_PER_PAGE),
        visiblePages: 5,
        next: 'Next',
        prev: 'Prev',
        onPageClick: function (event, page) {
            $('#books > table').find('tr').each((index, el) => {
               if(index > 0){
                   el.remove();
               }
            });

            let startBook = (page - 1) * BOOKS_PER_PAGE;
            let endBook = Math.min(startBook + BOOKS_PER_PAGE, books.length);
            $(`a:contains(${page})`).addClass('active');
            for (let i = startBook; i < endBook; i++) {
                let tr = $('<tr>');
                tr.append($(`<td>${books[i].title}</td>`));
                tr.append($(`<td>${books[i].author}</td>`));
                tr.append($(`<td>${books[i].description}</td>`));
                if(books[i]._acl.creator === sessionStorage.getItem('userId')){
                    tr.append($('<a href="#">[Edit]</a>').click(function () {
                        loadBookForEdit(books[i]);
                    }));
                    tr.append($('<a href="#">[Delete]</a>').on('click', function () {
                        deleteBook(books[i]);
                    }));
                }
                tr.appendTo($('#books > table'));
            }
        }
    })
}

function handleAjaxError(response) {
    let errorMsg = JSON.stringify(response);
    if (response.readyState === 0)
        errorMsg = "Cannot connect due to network error.";
    if (response.responseJSON && response.responseJSON.description)
        errorMsg = response.responseJSON.description;
    showError(errorMsg);
}