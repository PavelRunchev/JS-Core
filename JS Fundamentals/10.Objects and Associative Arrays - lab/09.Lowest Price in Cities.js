function lowestPricesInCities(array){
    "use strict";
    let dataPrices = new Map();
    for (let element of array) {
        let [town, product, price] = element.split(" | ");
        if(!dataPrices.has(town)){
            dataPrices.set(town, new Map());
        }
        dataPrices.get(town).set(product, Number(price));
    }

    let filtredPrice = new Map();
    for (let [town, value] of dataPrices) {
        for (let [product, price] of value) {
            if(!filtredPrice.has(product)){
                filtredPrice.set(product, new Map());
                filtredPrice.get(product).set(town, price);
            }else{
                let oldPrice = 0;
                let oldTown = "";
                Array.from(filtredPrice.get(product)).forEach(a => oldPrice = a.pop());
                Array.from(filtredPrice.get(product)).forEach(a => oldTown = a.shift());
                if(oldPrice > price){
                    filtredPrice.get(product).delete(oldTown);
                    filtredPrice.get(product).set(town, price);
                }
            }
        }
    }

    for (let [product, priceTown] of filtredPrice) {
        for (let [town, price] of priceTown) {
            console.log(`${product} -> ${price} (${town})`);
        }
    }
}


lowestPricesInCities(["Sofia City | Audi | 100000",
    "Sofia City | BMW | 100000",
    "Sofia City | Mitsubishi | 10000",
    "Sofia City | Mercedes | 10000",
    "Sofia City | NoOffenseToCarLovers | 0",
    "Mexico City | Audi | 1000",
    "Mexico City | BMW | 99999",
    "New York City | Mitsubishi | 10000",
    "New York City | Mitsubishi | 1000",
    "Mexico City | Audi | 100000",
    "Washington City | Mercedes | 1000"]);