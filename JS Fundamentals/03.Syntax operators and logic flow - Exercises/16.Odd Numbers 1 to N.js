function oddNumbers1ToN(n){
    "use strict";
    for (let i = 1; i <= n; i+=2) {
        if(i % 2 != 0){
            console.log(i);
        }
    }
}

oddNumbers1ToN(7);