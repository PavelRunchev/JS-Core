let shopService = (() => {

    function allProducts() {
        return remote.get('appdata', 'products', 'kinvey');
    }

    function userList(usernameId) {
        return remote.get('user', usernameId, 'kinvey');
    }

    function userUpdate(userId, data) {
        return remote.update('user', userId, 'kinvey', data);
    }

    return{
        allProducts,
        userList,
        userUpdate
    }
})();