function attachEvents() {
    let phonebook = $('#phonebook');

    $('#btnLoad').click(loadPhonebook);
    $('#btnCreate').click(sendPhone);

    function sendPhone() {
        let person = $('#person');
        let phone = $('#phone');

        if(person.val() === "" || phone.val() === ""){
            return;
        }

        let createPerson = {
            "person": person.val(),
            "phone": phone.val()
        };

        let sendRequest = {
            method: 'POST',
            url: 'https://phonebook-nakov.firebaseio.com/phonebook.json',
            data: JSON.stringify(createPerson),
            success: loadPhonebook,
            error: displayError
        };

        $.ajax(sendRequest);
        person.val("");
        phone.val("");
    }


    function loadPhonebook() {
        let getRequest = {
            method: 'GET',
            url: 'https://phonebook-nakov.firebaseio.com/phonebook.json',
            success: displayPhonebook,
            error: displayError
        };

        $.ajax(getRequest);
    }

    function displayPhonebook(res) {
        phonebook.empty();
        console.log(res);
        for(let key in res){
            let newPerson = res[key]['person'];
            let phoneLi = $('<li>').text(`${newPerson}: ${res[key]['phone']} `);
            let btnDelete = $('<button>[Delete]</button>').click(deleteUser.bind(this, key));
            phoneLi.append(btnDelete);
            console.log(phoneLi.textContent);
            phonebook.append(phoneLi);
        }
    }

    function deleteUser( key) {
        let deleteRequest = {
            method: 'DELETE',
            url: "https://phonebook-nakov.firebaseio.com/phonebook/" + key + '.json',
            success: loadPhonebook,
            error: displayError
        };

        $.ajax(deleteRequest);
    }

    function displayError() {
        phonebook.empty();
        phonebook.append($('<li>').text('ERROR'));
    }
}