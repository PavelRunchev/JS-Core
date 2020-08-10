function solve(inputArr) {
    let array = [];
    inputArr.forEach(el => {
        if(el < 0) array.unshift(el);
        else    array.push(el);
    });

    return array.join('\n');
}

console.log(solve([3, -2, 0, -1]));