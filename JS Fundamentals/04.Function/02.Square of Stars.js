function squareOfStars(n){
    "use strict";
    function printStars(count = n){
        console.log('*' + ' *'.repeat(count - 1));
    }

    for (let row = 1; row <= n; row++) {
        printStars();
    }
}


squareOfStars(5);