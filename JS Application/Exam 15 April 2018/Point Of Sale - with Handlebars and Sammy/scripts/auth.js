let auth = (() => {

    function isAuth() {
        return sessionStorage.getItem('authtoken') !== null;
    }

    function saveSession(userData) {
        sessionStorage.setItem('authtoken', userData._kmd.authtoken);
        sessionStorage.setItem('userId', userData._id);
        sessionStorage.setItem('username', userData.username);
    }

    // user/login
    function login(username, password) {
        let userData = {username, password};

        return remote.post('user', 'login', 'basic', userData);
    }

    // user/register
    function register(username, password) {
        let userData = {username, password, subscriptions: []};

        return remote.post('user', '', 'basic', userData);
    }

    // user/logout
    async function logout() {
        return remote.post('user', '_logout', {authtoken: localStorage.getItem('authtoken')});
    }

    return {
        isAuth,
        saveSession,
        login,
        register,
        logout
    }
})();