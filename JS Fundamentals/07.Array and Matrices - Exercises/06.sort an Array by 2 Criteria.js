function sortArray(array){
    "use strict";
    //sorted by Length ascending order and by ascending order
    array.sort()
        .sort((a, b) => a.length - b.length)
        .forEach(e => console.log(e));
}

//sortArray(['alpha', 'beta', 'gamma']);
//sortArray(['test', 'Deny', 'omen', 'Default']);

sortArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);