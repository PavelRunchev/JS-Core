function storeCatalog(array){
    "use strict";
    let products = new Map();
    let unique = new Set();
    let data = [];
    for (let element of array) {
        let store = element.split(" : ");
       let [product, price] = store;
        products.set(product, price);
    }
    let keys = Array.from(products.keys()).sort();
    for (let product of keys) {
        unique.add(product[0]);
    }

    for (let capitalLetter of unique) {
        console.log(capitalLetter);
        for (let key of keys) {
            if(key[0] === capitalLetter){
                console.log(`  ${key}: ${products.get(key)}`);
            }
        }
    }
}

storeCatalog(["Appricot : 20.4",
"Fridge : 1500",
"TV : 1499",
"Deodorant : 10",
"Boiler : 300",
"Apple : 1.25",
"Anti-Bug Spray : 15",
"T-Shirt : 10"]);


storeCatalog(["Banana : 2",
"Rubic's Cube : 5",
"Raspberry P : 4999",
"Rolex : 100000",
"Rollon : 10",
"Rali Car : 2000000",
"Pesho : 0.000001",
"Barrel : 10"]);