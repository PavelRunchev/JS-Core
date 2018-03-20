function dnaHelix(helix){
    "use strict";
    let sequence = ['A','T','C','G','T','T','A','G','G','G'];
    let len = sequence.length;
    let index = 0;
    for (let i = 1; i <= helix; i++) {

        if(index >= len){
            index = 0;
        }
        if(i % 4 === 1){
            console.log(`**${sequence[index]}${sequence[++index]}**`);
        }else if(i % 4 === 2 || i % 4 === 0){
            console.log(`*${sequence[index]}--${sequence[++index]}*`);
        }else{
            console.log(`${sequence[index]}----${sequence[++index]}`);
        }

        index++;
    }
}

dnaHelix(10);