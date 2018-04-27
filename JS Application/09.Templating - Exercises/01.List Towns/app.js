function attachEvents() {
    $('#btnLoadTowns').on('click', function () {
        let towns = $('#towns').val();
        townsObj = towns.split(',')
            .map(el => ({
                name: el.trim()
            }))
            .filter(e => e.name !== "");
        loadTowns(townsObj);
    });

    async function loadTowns(townsObj) {
        let source = await $.get('./template.hbs');
        let template = Handlebars.compile(source);
        let htmlResult = template({
            townsObj
        });
        $('#root').html(htmlResult);
    }
}