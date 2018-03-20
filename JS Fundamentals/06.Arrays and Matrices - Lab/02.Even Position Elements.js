function evenPositionElement(array) {
    return array.filter((e, index) => index % 2 === 0).join(' ');
}

console.log(evenPositionElement(['20', '30', '40']));
console.log(evenPositionElement(['5', '10']));