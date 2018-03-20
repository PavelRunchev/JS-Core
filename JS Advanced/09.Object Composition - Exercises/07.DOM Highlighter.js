function highLighter(selector) {
    let deep = 0;
    let deepestElement;
    let noChildElements = $(`${selector} *:not(:has(*))`);
    noChildElements.each(function (index, element) {
        let currentDeepLevel = 0;
        let original = element;
        while(element){
            currentDeepLevel++;
            element = $(element).parent()[0];
        }

        if(currentDeepLevel > deep){
            deep = currentDeepLevel;
            deepestElement = original;
        }
    });

    let selectedElement = $(selector)[0];
    while(deepestElement && deepestElement !== selectedElement){
        $(deepestElement).addClass('highlight');
        deepestElement = $(deepestElement).parent()[0];
    }

    $(selector).addClass('highlight');
}