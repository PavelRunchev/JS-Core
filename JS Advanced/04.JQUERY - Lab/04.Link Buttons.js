function attachEvents() {
    $('.button').on('click', selected);

    function selected(event){
        "use strict";
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    }
}


