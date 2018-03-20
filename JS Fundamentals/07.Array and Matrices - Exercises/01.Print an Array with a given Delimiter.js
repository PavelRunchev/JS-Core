function solve(array) {
    let delimiter = array[array.length - 1];
    let textWithDelimiter = "";
    let isDelimiter = true;
    for (let i = 0; i < array.length - 1; i++) {
        if(isDelimiter){
            textWithDelimiter += array[i];
            isDelimiter = false;
        }else{
            textWithDelimiter += delimiter + array[i];
        }
    }
    return textWithDelimiter;
}


console.log(solve(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_']));

console.log(solve(['One', 'Two', 'Three', 'Four', 'Five', 'Six', '-']));