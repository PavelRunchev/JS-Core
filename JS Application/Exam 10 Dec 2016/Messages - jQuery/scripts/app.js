$(() => {
    showView('AppHome');

    // Attach event handlers
    (() => {
        $('header').find('a[data-target]').click(navigation);
        $('#formRegister').submit(registerUser);
        $('#formLogin').submit(loginUser);
        $('#linkMenuLogout').click(logoutUser);
        $('#formSendMessage').submit(sendMessage);
        $('#linkUserHomeMyMessages').click(() => {
            showView('MyMessages');
            loadReceivedMessages();
        });

        $('#linkUserHomeSendMessage').click(() => {
            showView('SendMessage');
            loadAllUsers();
        });

        $('#linkUserHomeArchiveSent').click(() => {
            showView('ArchiveSent');
            loadSentMessages();
        });

        $('#linkMenuMyMessages').click(loadReceivedMessages);
        $('#linkMenuArchiveSent').click(loadSentMessages);
        $('#linkMenuSendMessage').click(loadAllUsers);
        $('.notification').click(function() {
            $(this).hide();
        })
    })();

    // Shows one view/section at a time
    function showView(viewName) {
        $('main > section').hide();
        $('#view' + viewName).show();
    }


    if(sessionStorage.getItem('authtoken') === null){
        userLoggedOut();
    } else {
        userLoggedIn();
    }
    
    function navigation() {
        let viewName = $(this).attr('data-target');
        showView(viewName);
    }

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
                saveSession(userInfo);
                registerUsername.val("");
                registerPassword.val("");
                registerName.val("");
                notify.showInfo("User registration successful.");
                userLoggedIn();
            }).catch(notify.handleError);
    }

    function loginUser(event) {
        event.preventDefault();
        let inputName = $('#loginUsername');
        let password = $('#loginPasswd');

        auth.login(inputName.val(), password.val())
            .then((userInfo) => {
                saveSession(userInfo);
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

    function loadSentMessages() {
        let username = sessionStorage.getItem('username');
        messageService.loadArchiveMessages(username)
            .then((myMessages) => {
                displayArchivedMessages(myMessages);
            }).catch(notify.handleError);
    }

    function loadReceivedMessages() {
        let username = sessionStorage.getItem('username');
        messageService.loadMyMessages(username)
            .then((myMessages) =>{
                displayAllMessages(myMessages);
            }).catch(notify.handleError);
    }

    function displayAllMessages(myMessagess) {
        let messagesContainer = $('#myMessages');
        messagesContainer.empty();

        let messagesTable = $('<table>');
        messagesTable.append($('<thead>')
            .append($('<tr>')
                .append('<th>From</th>')
                .append('<th>Messages</th>')
                .append('<th>Date Received</th>')));

        let tableBody = $('<tbody>');
        for(let message of myMessagess){
            let tableRow = $('<tr>');
            let sender = formatSender(message['sender_name'], message['sender_username']);
            let messageText = message['text'];
            let messageDate = formatDate(message['_kmd']['lmt']);
            tableRow.append($('<td>').text(sender));
            tableRow.append($('<td>').text(messageText));
            tableRow.append($('<td>').text(messageDate));
            tableBody.append(tableRow);
        }
        messagesTable.append(tableBody);
        messagesContainer.append(messagesTable);
    }
    
    function displayArchivedMessages(myMessages) {
        let messagesContainer = $('#sentMessages');
        messagesContainer.empty();

        let messagesTable = $('<table>');
        messagesTable.append($('<thead>')
            .append($('<tr>')
                .append('<th>To</th>')
                .append('<th>Messages</th>')
                .append('<th>Date Sent</th>')
                .append('<th>Actions</th>')));

        let tableBody = $('<tbody>');

        for(let message of myMessages){
            let tableRow = $('<tr>');
            let recipient = message['recipient_username'];
            let messageText = message['text'];
            let messageDate = formatDate(message['_kmd']['lmt']);
            let deleteBtn = $(`<button value="${message._id}">Delete</button>`)
                .click(deleteMsg);
            tableRow.append($('<td>').text(recipient));
            tableRow.append($('<td>').text(messageText));
            tableRow.append($('<td>').text(messageDate));
            tableRow.append($('<td>').append(deleteBtn));
            tableBody.append(tableRow);
        }
        messagesTable.append(tableBody);
        messagesContainer.append(messagesTable);
    }

    function deleteMsg() {
        let messageId = $(this).val();

        messageService.deleteMessages(messageId)
            .then(() => {
                notify.showInfo('Message deleted.');
                loadSentMessages();
            }).catch(notify.handleError);
    }

    function loadAllUsers() {
        messageService.loadAllUsers()
            .then((allUsers) => {
                let userContainer = $('#msgRecipientUsername');
                userContainer.empty();

                for(let user of allUsers){
                    let username = user['username'];
                    let fullName = formatSender(user['name'], username);
                    if(username !== sessionStorage.getItem('username')){
                        userContainer.append($(`<option value="${username}">${fullName}</option>`));
                    }
                }
            });
    }

    function sendMessage(ev) {
        ev.preventDefault();
        let usernameInput = $('#msgRecipientUsername');
        let textInput = $('#msgText');

        let usernameRecipient = usernameInput.val();
        let text = textInput.val();
        let senderName = sessionStorage.getItem('name');
        let senderUsername = sessionStorage.getItem('username');

        messageService.sendMessages(senderUsername, senderName, usernameRecipient, text)
            .then(() => {
                textInput.val();
                notify.showInfo("Messaged sent.");
                showView('ArchiveSent');
                loadSentMessages();
            }).catch(notify.handleError);
    }

    function saveSession(userInfo) {
        let userAuth = userInfo._kmd.authtoken;
        sessionStorage.setItem('authtoken', userAuth);
        let userId = userInfo._id;
        sessionStorage.setItem('userId', userId);
        let username = userInfo.username;
        sessionStorage.setItem('username', username);
        let name = userInfo.name;
        sessionStorage.setItem('name', name);
    }

    function formatDate(dateISO8601) {
        let date = new Date(dateISO8601);
        if (Number.isNaN(date.getDate()))
            return '';
        return date.getDate() + '.' + padZeros(date.getMonth() + 1) +
            "." + date.getFullYear() + ' ' + date.getHours() + ':' +
            padZeros(date.getMinutes()) + ':' + padZeros(date.getSeconds());

        function padZeros(num) {
            return ('0' + num).slice(-2);
        }
    }

    function formatSender(name, username) {
        if (!name)
            return username;
        else
            return username + ' (' + name + ')';
    }
});