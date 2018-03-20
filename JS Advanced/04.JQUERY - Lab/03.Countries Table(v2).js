function initializeTable(){
    $('#createLink').click(createCountry);
    addCountry('Bulgaria', 'Sofia');
    addCountry('Germany', 'Berlin');
    addCountry('Russia', 'Moscow');

    function fixRow(){
        "use strict";
        $('#countriesTable a').css('display', 'inline');

        let tableRows = $('#countriesTable tr');
        $(tableRows[2]).find("a:contains('Up')").css('display', 'none');
        $(tableRows[tableRows.length - 1]).find("a:contains('Down')").css('display', 'none');
    }

    function createCountry() {
        let country = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();
        addCountry(country, capital)
    }

    function addCountry(country, capital) {
        addCountryToTable(country, capital);
        fixRow();
    }

    function addCountryToTable(country, capital) {
        let row = $('<tr>')
            .append($('<td>').text(country))
            .append($('<td>').text(capital))
            .append($('<td>')
            .append($("<a href='#'>[Up]</a>").click(moveUp))
                .append(" ")
            .append($("<a href='#'>[Down]</a>").click(moveDown))
            .append(" ")
            .append($("<a href='#'>[Delete]</a>").click(deleteRow)));
        row.css('display', 'none');
        $('#countriesTable').append(row);
        row.fadeIn();
    }

    function moveUp() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            "use strict";
            row.insertBefore(row.prev());
            row.fadeIn();
            fixRow();
        })
    }

    function moveDown() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            "use strict";
            row.insertAfter(row.next());
            row.fadeIn();
            fixRow();
        })
    }

    function deleteRow() {
        let row = $(this).parent().parent();
            "use strict";
        row.fadeOut(function () {
            row.remove();
            fixRow();

        })
    }
}