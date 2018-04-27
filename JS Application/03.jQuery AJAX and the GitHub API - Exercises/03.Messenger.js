function attachEvents() {
    let printMsg = $('#messages');
    $('#refresh').click(refreshMessages);
    $('#submit').click(attachSend);

    function attachSend() {
        let name = $('#author');
        let message = $('#content');

        if(name.val() === "" || message.val() === ""){
            return;
        }

       let messageJSON = {
           "author": name.val(),
           "content": message.val(),
           "timestamp": Date.now()
       };

       let sendMessage = {
           method: 'POST',
           url: 'https://messenger-f616f.firebaseio.com/messenger/.json',
           data: JSON.stringify(messageJSON),
           success: refreshMessages
       };
       
       $.ajax(sendMessage);
       name.val("");
       message.val("");
    }
    
    function refreshMessages() {
        let getMessages = {
            method: 'GET',
            url: 'https://messenger-f616f.firebaseio.com/messenger/.json',
            success: displayMessages,
            error: noMessages
        };

        $.ajax(getMessages);
    }

    function displayMessages(res) {
        printMsg.empty();
        let msg = "";
        for(let key in res){
            msg += `${res[key]['author']}: ${res[key]['content']}\n`
        }

        printMsg.text(msg);
    }

    function noMessages() {
        printMsg.empty();
        printMsg.text('no messeges!')
    }
}