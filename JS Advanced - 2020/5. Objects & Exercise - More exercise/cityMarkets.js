function cityMarkets(inputArr) {
    let store = [];
    inputArr.forEach(e => {
        let [town, product, income] = e.split(' -> ');
        let [sale, price] = income.split(' : ');
        const existTown = store.find(t =>  t.name === town);
        if(existTown) {
            existTown.products.push(`$$$${product} : ${Number(sale) * Number(price)}`);
        } else {
            let newTown = { name: town, products: [] };
            newTown.products.push(`$$$${product} : ${Number(sale) * Number(price)}`);
            store.push(newTown);
        }
    });

    return store
        .map(t => t = `Town - ${t.name}\n` + t.products.join('\n'))
        .join('\n');
}

console.log(cityMarkets([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'
]));