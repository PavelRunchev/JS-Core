function attachEvents() {
    let towns = $('#towns');
    $('#btnDelete').click(function () {

        $(towns).find('option:selected').remove();
    });

    $('#btnAdd').click(function () {
        let text = $('#newItem').val();
        if(text.length === 0){
            return;
        }

        let addTown = $('<option>').text(text);
        towns.append(addTown);
        $('#newItem').val("");
    })
}