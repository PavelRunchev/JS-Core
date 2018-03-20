function solve(array) {
    let delimiter = array.pop();
    return array.join(delimiter);
}


console.log(solve(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_']));

console.log(solve(['One', 'Two', 'Three', 'Four', 'Five', 'Six', '-']));