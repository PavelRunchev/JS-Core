function attachEvents(){

    $('#submit').click(sendUser);
    $('#refresh').click(loadData);

    function sendUser() {
        let name = $('#author');
        let content = $('#content');

        if(name.val() === "" || content.val() === ""){
            return;
        }

        let message = {
            "author": name.val(),
            "content": content.val(),
            "timestamp": Date.now()
        };

        let postRequest = {
            method: 'POST',
            url: 'https://messenger-f616f$$.firebaseio.com/messenger.json',
            data: JSON.stringify(message),
            success: loadData,
            error: () => {$('#messages').text('ERROR! Non exist base!')}
        };

        $.ajax(postRequest);
        name.val("");
        content.val("");
    }


    function loadData() {
        let getRequest = {
            method: 'GET',
            url: `https://messenger-f616f.firebaseio.com/messenger.json`,
            success: displayData,
            error: () => {$('#messages').text('no messages!')}
        };

        $.ajax(getRequest);
    }

    function displayData(res) {
        let printMsg = "";
        let output = $('#messages');
        output.empty();
        for(let key in res){
            printMsg += `${res[key]['author']}: ${res[key]['content']}\n`;
        }
        output.text(printMsg);
    }
}