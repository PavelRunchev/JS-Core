function cappyJuice(inputJuiceArr) {
    let storeJuice = [];
    let bottlesJuice = [];
    inputJuiceArr.forEach(j => {
        let [name, quantity] = j.split(' => ');
        let existJuice = storeJuice.find(j => j.name === name);
        //push all juices in storeJuice
        if(existJuice) existJuice.quantity += Number(quantity);
        else storeJuice.push({ name, quantity: Number(quantity), bottles: 0 });
        //push if only quantity is much 1000 in bottlesJuice!
        if((existJuice && existJuice.quantity >= 1000)) {
            let existBottlesJuice = bottlesJuice.find(b => b.name === name);
            if(existBottlesJuice) existBottlesJuice.quantity = existJuice.quantity;
            else bottlesJuice.push({ name, quantity: existJuice.quantity, bottles: 0 });
        } else if(Number(quantity) >= 1000) {
            bottlesJuice.push({ name, quantity: Number(quantity), bottles: 0 });
        }
    });

    return bottlesJuice
        .map(b => b = `${b.name} => ${Math.floor(b.quantity / 1000)}`)
        .join('\n');
}



// console.log(cappyJuice([
//     'Orange => 2000',
//     'Peach => 1432',
//     'Banana => 450',
//     'Peach => 600',
//     'Strawberry => 549'
// ]));

// console.log('----');

console.log(cappyJuice([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]));