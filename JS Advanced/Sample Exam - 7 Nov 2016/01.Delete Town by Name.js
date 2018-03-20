function attachEvents() {
    $('#btnDelete').click(function() {
        let townName = $('#townName').val();
        $('#townName').val('');
        let found = false;
        for (let option of $('#towns option'))
            if (option.textContent == townName) {
                found = true;
                option.remove();
            }
        if (found)
            $('#result').text(townName + " deleted.");
        else
            $('#result').text(townName + " not found.");
    });
}