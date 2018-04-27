function showHideMenuLinks() {
    $('#linkHome').show();
    if(sessionStorage.getItem('authToken') === null){
        $('#linkLogin').show();
        $('#linkRegister').show();
        $('#linkListAds').hide();
        $('#linkCreateAd').hide();
        $('#linkLogout').hide();
        $('#loggedInUser').hide();
    }else{
        $('#linkLogin').hide();
        $('#linkRegister').hide();
        $('#linkListAds').show();
        $('#linkCreateAd').show();
        $('#linkLogout').show();
        $('#loggedInUser').show();
    }
}

function showView(viewName) {
    // Hide all views and show the selected view only
    $('main > section').hide();
    $('#' + viewName).show();
}

function showInfo(message) {
    $('#infoBox').text(message);
    $('#infoBox').show();
    setTimeout(function () {
        $('#infoBox').fadeOut();
    }, 3000);
}

function showHomeView() {
    showView('viewHome');
}

function showLoginView() {
    $('#formLogin').trigger('reset');
    showView('viewLogin');
}

function showRegisterView() {
    $('#formRegister').trigger('reset');
    showView('viewRegister');
}



