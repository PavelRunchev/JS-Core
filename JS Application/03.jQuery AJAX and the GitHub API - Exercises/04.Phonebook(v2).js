function attachEvents() {
    $('#btnLoad').click(loadData);
    $('#btnCreate').click(sendData);

    function sendData() {
        let person = $('#person');
        let phone = $('#phone');

        if(person.val() === "" || phone.val() === ""){
            return;
        }

        let user = {
            "person": person.val(),
            "phone": phone.val()
        };

        let sendRequest = {
            method: 'POST',
            url: 'https://phonebook-nakov.firebaseio.com/phonebook.json',
            data: JSON.stringify(user),
            success: loadData,
            error: () => {$('#phonebook').append($('<li>').text('Error, non exist base!'))}
        };

        $.ajax(sendRequest);
        person.val("");
        phone.val("");
    }

    function loadData() {
        let getRequest = {
            method: 'GET',
            url: 'https://phonebook-nakov.firebaseio.com/phonebook.json',
            success: displayPhonebook,
            error: () => {$('#phonebook').append($('<li>').text('Non exist or empty base!'))}
        };

        $.ajax(getRequest);
    }

    function displayPhonebook(res) {
        let printList = $('#phonebook');
        printList.empty();

        for(let key in res){
            let li = $('<li>').text(`${res[key]['person']}: ${res[key]['phone']} `);
            let btnDelete = $('<button>[Delete]</button>').click(deletedUser.bind(this, key));
            li.append(btnDelete);
            printList.append(li);
        }
    }

    function deletedUser(key) {
        let deletedRequest = {
            method: 'DELETE',
            url: `https://phonebook-nakov.firebaseio.com/phonebook/${key}.json`,
            success: loadData
        };

        $.ajax(deletedRequest);
    }
}