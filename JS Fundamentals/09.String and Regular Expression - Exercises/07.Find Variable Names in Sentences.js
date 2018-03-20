function findNamesInSentences(sentence){
    let names = [];
    let regex = /(?:\s|^)(?:_)([A-Za-z0-9]+)(?=\s|$)/g;
    let match = regex.exec(sentence);
    while(match !== null){
        names.push(match[1]);
        match = regex.exec(sentence);
    }

    console.log(names.join(","));
}

findNamesInSentences('The _id and _age variables are both integers.');
findNamesInSentences('__invalidVariable _evenMoreInvalidVariable_ _validVariable');