function findWordInSentence(sentence, searchWord){
    let pattern = new RegExp(`\\b${searchWord}\\b`, "gi");
    let match = sentence.match(pattern);
    console.log(match !== null ? match.length : 0);
}

findWordInSentence("", "if");
findWordInSentence("There was one. Therefore I bought it. I wouldn’t buy it otherwise.",
    "there");