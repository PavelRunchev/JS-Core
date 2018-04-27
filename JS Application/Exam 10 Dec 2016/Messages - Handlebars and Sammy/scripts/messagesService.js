let messageService = (() => {

    function loadAllUsers() {
        return remote.get('user', '', 'kinvey');
    }

    function loadMyMessages(username) {
        let endpoint = `messages?query={\"recipient_username":"${username}"}`;
        return remote.get('appdata', endpoint, 'kinvey');
    }

    function loadArchiveMessages(username) {
        let endpoint = `messages?query={"sender_username":"${username}"}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }
    
    function sendMessages(sender_username, sender_name, recipient_username, text) {
        let messageData = {
            sender_username,
            sender_name,
            recipient_username,
            text};

        return remote.post('appdata', 'messages', 'kinvey', messageData);
    }

    function deleteMessages(messageId) {
        let endpoint = `messages/${messageId}`;
        return remote.remove('appdata', endpoint, 'kinvey');
    }

    return{
        loadAllUsers,
        loadMyMessages,
        loadArchiveMessages,
        sendMessages,
        deleteMessages
    }
})();