function binaryToDecimal(binary){
    "use strict";
    //Convert from binary to decimal:
    let digit = parseInt(binary, 2);
    return digit;
}

console.log(binaryToDecimal('00001001'));
console.log(binaryToDecimal('11110000'));