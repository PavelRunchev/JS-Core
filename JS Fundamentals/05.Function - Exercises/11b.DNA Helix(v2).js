function dnaHelix(helix){
    "use strict";
    let sequence = "ATCGTTAGGG";
    let len = sequence.length;
    let index = -1;
    for (let i = 1; i <= helix; i++) {
        index = getIndex(++index, len);
        let firstIndex = sequence.charAt(index);
        index = getIndex(++index, len);
        let secondIndex = sequence.charAt(index);

        if(i % 4 === 1){
            console.log(`**${firstIndex}${secondIndex}**`);
        }else if(i % 4 === 2 || i % 4 === 0){
            console.log(`*${firstIndex}--${secondIndex}*`);
        }else{
            console.log(`${firstIndex}----${secondIndex}`);
        }
    }

    function getIndex(index, len){
        if(index >= len){
            index = 0;
        }
        return index;
    }
}

dnaHelix(10);