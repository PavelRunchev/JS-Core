function secretData(array){
    let patternNames = /(\*[A-Z][A-Za-z]*)(?=\s|$)/g;
    let patternPhone = /(\+[0-9-]{10})(?=\s|$)/g;
    let patternId = /(\![A-Za-z0-9]+)(?=\s|$)/g;
    let patternSecretBases = /(\_[A-Za-z0-9]+)(?=\s|$)/g;
    let text = array.join('\n');
    text = text.replace(patternNames, replaced)
        .replace(patternPhone, replaced)
        .replace(patternId, replaced)
        .replace(patternSecretBases, replaced);


    function replaced(match, gr1, gr2){
        return '|'.repeat(gr1.length); //get first group length (gr1)
    }

    console.log(text);
}

secretData(["Agent *Ivankov was in the room when it all happened.",
"The person in the room was heavily armed.Agent *Ivankov had to act quick in order.",
"He picked up his phone and called some unknown number.",
"I think it was +555-49-796",
"I can't really remember...",
"He said something about 'finishing work' with subject !2491a23BVB34Q and returning to Base _Aurora21",
"Then after that he disappeared from my sight.",
"As if he vanished +---------3 in the shadows.",
"A moment, shorter than a second, later, I saw the person flying off the top floor.",
"I really don't know what happened there.",
"This is all I saw, that night.",
"I cannot explain it myself..."]);


secretData(["Then after that he *Dido*Dido disappeared from my sight and *Didov her."]);