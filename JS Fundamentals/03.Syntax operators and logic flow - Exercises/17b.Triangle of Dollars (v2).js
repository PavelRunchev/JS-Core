function triangleOfDollars(n){
    "use strict";

    for (let row = 1; row <= n; row++) {
        console.log('$'.repeat(row));
    }
}

triangleOfDollars(4);