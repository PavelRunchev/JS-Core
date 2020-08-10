function sortArray(arrInput, criteria) {
    return arrInput.sort((a, b) => {
        if(criteria === 'asc')
            return a - b;
        return b - a;
    });
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));