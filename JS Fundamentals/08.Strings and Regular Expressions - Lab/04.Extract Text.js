function extractText(text){
    let arrayFromText = [];

    let openIndex = text.indexOf('(');
    let closeIndex = text.indexOf(')', openIndex + 1);
    while(openIndex !== -1 && closeIndex !== -1){

        if(openIndex < closeIndex){
            let extract = text.substring(openIndex + 1, closeIndex);
            arrayFromText.push(extract);
        }
        openIndex = text.indexOf('(', closeIndex + 1);
        closeIndex = text.indexOf(')', openIndex + 1);
    }

    console.log(arrayFromText.join(", "));
}

extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');