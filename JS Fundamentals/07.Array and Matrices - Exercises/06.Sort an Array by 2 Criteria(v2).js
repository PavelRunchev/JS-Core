function sortArray(array){
    "use strict";
    let sortedArray = array.sort(compare).forEach(e => console.log(e));

    function compare(a, b){
        if(a.length < b.length){
            return -1;
        }else if(a.length > b.length){
            return 1;
        }else{
            if(a < b){
                return - 1;
            }else if(a > b){
                return 1;
            }else {
                return 0;
            }
        }
    }
}

//sortArray(['alpha', 'beta', 'gamma']);
//sortArray(['test', 'Deny', 'omen', 'Default']);

sortArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);