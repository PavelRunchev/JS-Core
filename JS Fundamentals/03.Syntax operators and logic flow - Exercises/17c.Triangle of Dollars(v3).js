function triangleOfDollars(n){
    "use strict";

    for (let row = 1; row <= n; row++) {
        console.log(new Array(row + 1).join('$'));
    }
}

triangleOfDollars(6);