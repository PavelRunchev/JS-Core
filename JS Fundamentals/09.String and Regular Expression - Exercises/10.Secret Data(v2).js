function secretData(array){
    let patternNamesG = /(\*[A-Z][A-Za-z]*)(?=\s|$)/g;
    let patternNames = /(\*[A-Z][A-Za-z]*)(?=\s|$)/;
    let patternPhoneG = /(\+[0-9\-]{10})(?=\s|$)/g;
    let patternPhone = /(\+[0-9\-]{10})(?=\s|$)/;
    let patternIdG = /(\![A-Za-z0-9]+)(?=\s|$)/g;
    let patternId = /(\![A-Za-z0-9]+)(?=\s|$)/;
    let patternSecretBasesG = /(\_[A-Za-z0-9]+)(?=\s|$)/g;
    let patternSecretBases = /(\_[A-Za-z0-9]+)(?=\s|$)/;
    let text = array.join('\n');

    let matchedName = text.match(patternNamesG);
    if(matchedName !== null){
        for (let i = 0; i < matchedName.length; i++) {
            let name = matchedName[i];
            let lenName = name.length;
            text = text.replace(patternNames, '|'.repeat(lenName));
        }
    }

    let matchedPhone = text.match(patternPhoneG);
    if(matchedPhone !== null){
        for (let i = 0; i < matchedPhone.length; i++) {
            let lenPhone = matchedPhone[i].length;
            text = text.replace(patternPhone, '|'.repeat(lenPhone));
        }
    }

    let matchedId = text.match(patternIdG);
    if(matchedId !== null){
        for (let i = 0; i < matchedId.length; i++) {
            let lenId = matchedId[i].length;
            text = text.replace(patternId, '|'.repeat(lenId));
        }
    }

    let matchedSecretBases = text.match(patternSecretBasesG);
    if(matchedSecretBases !== null){
        for (let i = 0; i < matchedSecretBases.length; i++) {
            let lenSecretBases = matchedSecretBases[i].length;
            text = text.replace(patternSecretBases, '|'.repeat(lenSecretBases));
        }
    }

    console.log(text);
}
secretData(["Then after that he *Didov*Dido disappeared from my sight and *Didov her."]);
//output Then after that he *Didov||||| disappeared from my sight and |||||| her. !!!!!





secretData(["Agent *Ivankov was in the room when it all happened.",
    "The person in the room was heavily armed.Agent *Ivankov had to act quick in order.",
    "He picked up his phone and called some unknown number.",
    "I think it was +555-49-796",
    "I can't really remember...",
    "He said something about 'finishing work' with subject !2491a23BVB34Q and returning to Base _Aurora21",
    "Then after that he disappeared from my sight.",
    "As if he vanished +---------3 in the shadows.",
    "A moment, shorter than a second, later, *I saw the person flying off the top floor.",
    "!I really don't know what happened there.",
    "This is _Aurora all I saw, that night.",
    "I cannot explain it myself..."]);


