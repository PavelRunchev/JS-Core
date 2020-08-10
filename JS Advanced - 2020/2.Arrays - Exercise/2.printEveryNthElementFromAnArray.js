function solve(inputArr) {
    const step = Number(inputArr.pop());
    for (let i = 0; i < inputArr.length; i += step) {
        console.log(inputArr[i]);
    }
}

solve(['5', '20', '31', '4', '20', '2']);
solve(['dsa','asd', 'test', 'tset', '2']);
solve(['1', '2','3', '4', '5', '6']);