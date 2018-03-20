function attachEvents() {
    //click remove Town
    $('#btnDelete').click(function () {
        $('#towns').find(':selected').remove();
    });

    //click add Town if not empty selector! (town !== "")
    $('#btnAdd').on('click', function () {
        let town = $('#newItem').val();
        if(town !== ""){
            let addTown = $('<option>').text(town);
            let towns = $('#towns');
            towns.append(addTown);

            //clear input text
            $('#newItem').val("");
        }
    });
}