function extractText(text){
    let regex = /\((.+?)\)/g;
    let result = [];
    let match = regex.exec(text);
    while(match !== null){
        result.push(match[1]);
        match = regex.exec(text);
    }

    console.log(result.join(", "));
}

extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');