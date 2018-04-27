const URL = 'https://phonebook-6cf63.firebaseio.com/phonebook';
const person = $('#person');
const phone = $('#phone');
let phonebook = $('#phonebook');


$('#btnLoad').click(loadData);
$('#btnCreate').click(createData);

function createPhone(res) {
    for(let key in res){
        let item = $(`<li>${res[key].name}: ${res[key].phone} </li>`)
            .append($('<a href="#">[Delete]</a>').click(function () {
                $.ajax({
                    method: 'DELETE',
                    url: URL + '/' + key + '.json'
                }).then(() => $(item).remove()).catch(handleError);
            }));
        phonebook.append(item);
    }
}

function loadData() {
    phonebook.empty();
    $.ajax({
        method: 'GET',
        url: URL + '.json',
    }).then(createPhone)
        .catch(handleError);
}

function createData() {
    let name = person.val();
    let phoneName = phone.val();

    if(name !== "" && phone !== ""){
        let postData = JSON.stringify({name, phoneName});

        $.ajax({
            method: 'POST',
            url: URL + '.json',
            data: postData,
            success: appendElement,
            error: handleError
        });
    }

    function appendElement(res) {
        let item = $(`<li>${name}: ${phoneName} </li>`)
            .append($('<a href="#">[Delete]</a>').click(function () {
                $.ajax({
                    method: 'DELETE',
                    url: URL + '/' + key + '.json'
                }).then(() => $(item).remove()).catch(handleError);
            }));
        phonebook.append(item);
    }

    person.val("");
    phone.val("");
}

function handleError(err) {
    console.log(err);
}

