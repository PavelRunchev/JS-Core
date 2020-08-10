function storeCatalogue(inputArr) {
    let store = [];
    inputArr.forEach(el => {
        let [productName, productPrice] = el.split(' : ');
        let existGroup = store.find(g => g.name === productName[0]);
        if(existGroup) {
            existGroup.products.push({ name: productName, price: Number(productPrice)});
        } else {
            let newObj = { name: productName[0],products: [] };
            newObj.products.push({ name: productName, price: Number(productPrice)});
            store.push(newObj);
        }
    });

    let outputProducts = '';
    for (let group of store.sort((a,b) => a.name.localeCompare(b.name))) {
        outputProducts += `${group.name}\n`;
        for (let p of group.products.sort((a,b) => a.name.localeCompare(b.name))) {
            outputProducts += `  ${p.name}: ${p.price}\n`;
        }
    }

    return outputProducts;
}

console.log(storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]));

console.log(storeCatalogue([
    'Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'
]));