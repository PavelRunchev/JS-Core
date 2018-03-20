function triangleOfDollars(n){
    "use strict";

    for (let row = 0; row < n; row++) {
        let line = "";
        for (let col = 0; col <= row; col++) {
            line += "$";
        }
        console.log(line);
    }
}

triangleOfDollars(3);