function attachEvents() {

    $('#btnDelete').on('click', deleteTown);

    function deleteTown() {
        let towns = $('#towns option');
        let value = $('#townName').val();

        let isDeleted = false;
        let city = "";
        for (let town of towns) {

            if (town.textContent === value) {
                isDeleted = true;
                city = town;
            }
        }

        if(isDeleted){
            for(let del of towns){
                if(del.textContent === value){
                    $(del).remove();
                }
            }
            $('#result').text(`${city.textContent} deleted.`);
            $('#townName').val("");
        }else{
            $('#result').text(`${value} not found.`);
            $('#townName').val("");
        }
    }
}