function attachEvents() {
    $('.button').on('click', (event) => {
        $('.selected').removeClass('selected');
        let target = $(event.target);
        target.addClass('selected');
    })
}