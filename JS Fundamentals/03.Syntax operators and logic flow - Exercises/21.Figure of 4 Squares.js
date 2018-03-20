function figureOf4Squares(n){
    "use strict";
    let line = n % 2 === 0 ? n - 1 : n;

    for (let row = 1; row <= line; row++) {
        if(row === 1 || row === line || row === Math.ceil(n / 2)){
            console.log(`+${'-'.repeat(n - 2)}+${'-'.repeat(n - 2)}+`);
        }else{
            console.log(`|${' '.repeat(n - 2)}|${' '.repeat(n - 2)}|`);
        }
    }
}

figureOf4Squares(5);