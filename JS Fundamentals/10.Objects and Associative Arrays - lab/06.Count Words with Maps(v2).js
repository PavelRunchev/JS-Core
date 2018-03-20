function countWords(array) {
    let wordsCount = new Map();
    let words = array.join('\n')
        .toLowerCase()
        .split(/[^A-Za-z0-9_]/)
        .filter(w => w !== "");

    for (let word of words) {
        wordsCount.has(word) ? wordsCount.set(word, wordsCount.get(word) + 1 )
            : wordsCount.set(word,1);
    }

    let sortedWords = Array.from(wordsCount.keys()).sort();

    for (let w of sortedWords) {
        console.log(`'${w}' -> ${wordsCount.get(w)} times`);
    }
}

countWords(["JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --"]);