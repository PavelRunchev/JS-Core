function wordsUppercase(text){
    "use strict";
    let words = text.toUpperCase().split(/\W+/);
    words = words.filter(w => w !== "");
    console.log(words.join(", "));
}


wordsUppercase('Hi, how are you?');