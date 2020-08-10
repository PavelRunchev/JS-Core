function solve(inputArr) {
    let arr = [];
    let initialValue = 1;
    inputArr.forEach(c => {
        if(c === 'add') arr.push(initialValue++);
        else if(c === 'remove') {
            arr.pop();
            initialValue++;
        }
    });
    if(arr.length === 0) return 'Empty';
    return arr.join('\n');
}

console.log(solve(['add', 'add', 'add', 'add']));
console.log(solve(['add', 'add', 'remove', 'add', 'add']));
console.log(solve(['remove', 'remove', 'remove']));