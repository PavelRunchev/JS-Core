function countWordsInAText(array){
    "use strict";
    let dataWords = {};
    for (let sentence of array) {
        let words = sentence
            .split(/[^A-Za-z0-9_]/g)
            .filter(w => w !== "");
        for (let word of words) {
            if(!dataWords.hasOwnProperty(word)){
                dataWords[word] = 0;
            }
            dataWords[word]++;
        }
    }

    console.log(JSON.stringify(dataWords));
}

countWordsInAText(["Far too slow, you're far too slow."]);

countWordsInAText(["JS devs use Node.js for server-side JS.-- JS for devs"]);