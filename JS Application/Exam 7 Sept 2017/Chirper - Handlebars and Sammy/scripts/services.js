let services = (() => {

    function getAllChirps() {
        let subs = JSON.parse(sessionStorage.getItem('subscriptions'));
        subs = subs.map(e => `"${e}"`);
        return remote.get('appdata', `chirps?query={"author":{"$in": [${subs}]}}&sort={"_kmd.ect": -1}`);
    }

    function createChirp(author, text) {
        let userData = {author, text};

        return remote.post('appdata', 'chirps', 'kinvey', userData);
    }

    function deleteChirp(chirpId) {
        const userData = `chirps/${chirpId}`;

        return remote.remove('appdata', userData, 'kinvey');
    }

    function userChirps(username) {
        const userData = `chirps?query={"author":"${username}"}&sort={"_kmd.ect": 1}`;

        return remote.get('appdata', userData, 'kinvey');
    }

    async function countChirps(username) {
        return (await userChirps(username)).length;
    }

    function countFollowing(username) {
        return remote.get('user', `?query={"username":"${username}"}`, 'kinvey');
    }

    function countFollowers(username) {
        return remote.get('user', `?query={"subscriptions":"${username}"}`);
    }

    function getStats(username) {
        let chirps = services.countChirps(username);
        let following = services.countFollowing(username);
        let followers = services.countFollowers(username);

        return Promise.all([chirps, following, followers]);
    }

    function discoverPage() {
        return remote.get('user', '');
    }

    async function follow(targetUser) {
        const userId = sessionStorage.getItem('userId');
        let subs = (await remote.get('user', userId)).subscriptions || [];
        subs.push(targetUser);

        return remote.update('user', userId, 'kinvey', {subscriptions: subs});
    }

    async function unfollow(targetUser) {
        const userId = sessionStorage.getItem('userId');
        let subs = (await remote.get('user', userId)).subscriptions || [];
        subs = subs.filter(u => u !== targetUser);

        return remote.update('user', userId, 'kinvey', {subscriptions: subs});
    }

    return {
        getAllChirps,
        createChirp,
        deleteChirp,
        userChirps,
        countChirps,
        countFollowers,
        countFollowing,
        getStats,
        discoverPage,
        follow,
        unfollow
    }
})();