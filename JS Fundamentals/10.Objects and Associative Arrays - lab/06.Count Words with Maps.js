function countWords(array) {
    let wordsCount = new Map();
    for (let sentence of array) {
        let words = sentence
            .split(/[^A-Za-z0-9_]/)
            .filter(w => w !== "")
            .map(w => w.toLowerCase());
        for (let word of words) {
            if(!wordsCount.has(word)){
                wordsCount.set(word, 0)
            }
            wordsCount.set(word, wordsCount.get(word) + 1)
        }
    }
    let orderdKeys = Array.from(wordsCount).sort()
        .forEach(el => console.log(`'${el[0]}' -> ${el[1]} times`));

}

countWords(["Far too slow, you're far too slow."]);

countWords(["JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --"]);