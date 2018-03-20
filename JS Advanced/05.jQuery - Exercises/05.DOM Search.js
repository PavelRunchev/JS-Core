function domSearch(selector, BooleanValue) {
    let addControls = $('<div>')
        .addClass('add-controls')
        .append($('<label>').text('Enter text:').append($('<input>')))
        .append($('<a>')
            .addClass('button')
            .css('dispay', 'inline-block')
            .text('Add')
            .click(function () {
                let element = $('label input');
                let newElement = $('<li>')
                    .addClass('list-item')
                    .append($('<a>').addClass('button').text('X').click(function(){
                        "use strict";
                        $(this).parent().remove();
                    }))
                    .append($('<strong>').text(element.val().trim()));
                $('ul.items-list').append(newElement);
                element.val('');
            }));
    let searchControls = $('<div>')
        .addClass('search-controls')
        .append($('<label>').text('Search:').append($('<input>')
            .on('input', function () {
                let search = $(this).val();
                let items = $('.list-item strong').toArray();
                for(let item of items){
                    let current = $(item);
                    if(BooleanValue){
                        if(current.text().indexOf(search) < 0){
                            current.parent().css('display', 'none');
                        }else{
                            current.parent().css('display', "")
                        }
                    }else{
                        if(current.text().toLowerCase().indexOf(search.toLowerCase()) < 0){
                            current.parent().css('display', 'none');
                        }else{
                            current.parent().css('display', "");
                        }
                    }
                }
            })));
    let result = $('<div>').addClass('result-controls')
        .append($('<ul>').addClass('items-list'));
    $(selector)
        .append(addControls)
        .append(searchControls)
        .append(result);
}
