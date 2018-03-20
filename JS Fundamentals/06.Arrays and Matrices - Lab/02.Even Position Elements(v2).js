function evenPositionElement(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if(i % 2 === 0){
            newArray.push(array[i]);
        }
    }
    return newArray.join(' ');
}

console.log(evenPositionElement(['20', '30', '40']));
console.log(evenPositionElement(['5', '10']));