function  cityMarkets(array) {
    let dataTowns = new Map();
    for (let data of array) {
        let [town, product, qualPrice] = data.split(" -> ");
        let income = qualPrice.split(" : ").map(Number)
            .reduce((a,b) => a * b);
        if(!dataTowns.has(town)){
            dataTowns.set(town, new Map());
        }
        dataTowns.get(town).set(product, income);
    }
    for (let [key,value] of dataTowns) {
        console.log(`Town - ${key}`);
        for (let [product, income] of value) {
            console.log(`$$$${product} : ${income}`);
        }
    }
}

cityMarkets(["Sofia -> Laptops HP -> 200 : 2000",
"Sofia -> Raspberry -> 200000 : 1500",
 "Sofia -> Audi Q7 -> 200 : 100000",
"Montana -> Portokals -> 200000 : 1",
"Montana -> Qgodas -> 20000 : 0.2",
"Montana -> Chereshas -> 1000 : 0.3"]);