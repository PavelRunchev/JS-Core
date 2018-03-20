function solve(array){
    let dataProducts = new Map();
    for(let element of array){
        let [product, price] = element.split(" : ");
        price = Number(price);
        let upLetter = product[0];
        if(!dataProducts.has(upLetter)){
            dataProducts.set(upLetter, new Map());
        }
        if(!dataProducts.get(upLetter).has(product)){
            dataProducts.get(upLetter).set(product, price);
        }
    }

    let sortedInitialNames = [...dataProducts.entries()].sort((a, b) => a[0].localeCompare(b[0]));
    for(let initial of sortedInitialNames){
        console.log(initial[0]);
        let sort = [...initial[1].keys()].sort();
        for(let product of sort){
            console.log(`  ${product}: ${initial[1].get(product)}`);
        }
    }
}