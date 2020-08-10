function solve(arr) {
    let products = [];
    for (let el of arr) {
        const [townName, productName, productPrice] = el.split('|').map(e => e.trim());
        let existProduct = products.find(p => p.product === productName);
        if(existProduct) {
            let existTown = existProduct.towns.find(t => t.town === townName);
            if(existTown) existTown.price = Number(productPrice);
            else existProduct.towns.push({ town: townName, price: Number(productPrice) });
        } else {
            products.push({ product: productName, towns: [] });
            let currentProduct = products.find(p => p.product === productName);
            currentProduct.towns.push({ town: townName, price: Number(productPrice) });
        }
    }

    return products
        .map(p => {
            let town = p.towns.sort((a,b) => a.price - b.price)[0];
            return `${p.product} -> ${town.price} (${town.town})`;
        }).join('\n');
}

console.log(solve(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000']
));

//output: 
//Audi -> 100000 (Sofia City)
//BMW -> 99999 (Mexico City)
//Mitsubishi -> 1000 (New York City)
//Mercedes -> 1000 (Washington City)
//NoOffenseToCarLovers -> 0 (Sofia City)

console.log('');

console.log(solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
));

//output:
//Sample Product -> 1000 (Sample Town)
//Orange -> 2 (Sample Town)
//Peach -> 1 (Sample Town)
//Burger -> 10 (New York)
