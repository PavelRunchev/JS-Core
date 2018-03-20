
    let solve = array => {
        "use strict";
        let newArray = [];
        array.forEach(e => (e < 0) ? newArray.unshift(e) : newArray.push(e));
        return newArray.join('\n');
    };


console.log(solve([7, -2, 8, 9]));