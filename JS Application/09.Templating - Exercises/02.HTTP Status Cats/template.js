$(() => {
    renderCatTemplate();

    async function renderCatTemplate() {

        let source = await $.get('./cat-template.hbs');
        let template = Handlebars.compile(source);
        let templated = template({
            cats: window.cats
        });
        $('body').append(templated);
        $('button').click(function (ev) {
            let targetButton = $(ev.target);
            let infoDiv = targetButton.next();
            console.log(targetButton);
            console.log(infoDiv);
            let text = targetButton.text();
            if(text.includes('Show')){
                targetButton.text(text.replace('Show', 'Hide'));
            }else{
                targetButton.text(text.replace('Hide', 'Show'));
            }
            console.log(text);
            infoDiv.toggle();
        })
    }
});
