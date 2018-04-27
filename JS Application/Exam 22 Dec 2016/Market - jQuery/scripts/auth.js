let auth = (() => {
    function isAuthed() {
        return sessionStorage.getItem('authtoken') !== null;
    }

    // user/login
    function login(username, password) {
        let userData = {username, password};

        return remote.post('user', 'login', 'basic', userData);
    }

    // user/register
    function register(username, password, name) {
        let userData = { username, password, name};

        return remote.post('user', '', 'basic', userData);
    }

    // user/logout
    function logout() {
        let logoutData = { authtoken: sessionStorage.getItem('authtoken')};

        return remote.post('user', '_logout', 'kinvey', logoutData);
    }

    function saveSession(userData) {
        sessionStorage.setItem('authtoken', userData._kmd.authtoken);
        sessionStorage.setItem('userId', userData._id);
        sessionStorage.setItem('username', userData.username);
        sessionStorage.setItem('name', userData.name);
    }

    return {
        login,
        register,
        logout,
        isAuthed,
        saveSession
    }
})();