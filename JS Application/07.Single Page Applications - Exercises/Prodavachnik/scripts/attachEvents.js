function attachAllEvents() {
    //Bind the navigation menu links
    $('#linkHome').on('click', showHomeView);
    $('#linkLogin').on('click', showLoginView);
    $('#linkRegister').on('click', showRegisterView);
    $('#linkLogout').on('click', showLogout);
    $('#linkListAds').on('click', showListAdverts);
    $('#linkCreateAd').on('click', showCreateAdvert);

    //Bind the form submit buttons
    $('#buttonLoginUser').on('click', loginUser);
    $('#buttonRegisterUser').on('click', registerUser);
    $('#buttonCreateAd').on('click', createAdvert);
    $('#buttonEditAd').on('click', editAdvert);

    //Bind the info / error boxes
    $('#infoBox, #errorBox').click(function () {
        $(this).fadeOut();
    });
}