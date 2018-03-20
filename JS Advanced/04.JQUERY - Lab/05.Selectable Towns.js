function attachEvents(){
    "use strict";
    $('#items > li').on('click', function () {
        if(!$(this).attr('data-selected')){
            $(this).attr('data-selected', true);
            $(this).css('background-color', '#DDD');
        }else{
            $(this).removeAttr('data-selected');
            $(this).css('background-color', 'white');
        }
    });

    $('#showTownsButton').on('click', function () {
        let result = $('#items > li[data-selected]')
            .toArray().map(li => li.textContent).join(", ");
        $('#selectedTowns').text('Selected towns: ' + result);
    });
}