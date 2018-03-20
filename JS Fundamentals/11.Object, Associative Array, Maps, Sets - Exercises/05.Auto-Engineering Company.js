function autoCompany(input){
    "use strict";
    let dataCars = new Map();
    for (let data of input) {
        let cars = data.split(" | ");
        let brand =cars[0];
        let model = cars[1];
        let produced = Number(cars[2]);
        if(!dataCars.has(brand)){
            dataCars.set(brand, new Map());
        }
        if(!dataCars.get(brand).has(model)){
            dataCars.get(brand).set(model, produced);
        }else{
            let oldProduced = dataCars.get(brand).get(model);
            dataCars.get(brand).set(model, oldProduced + produced);
        }
    }

    for (let [brand, value] of dataCars) {
        console.log(brand);
        for (let [model, produce] of value) {
            console.log(`###${model} -> ${produce}`);
        }
    }
}

autoCompany(["Audi | Q7 | 1000",
"Audi | Q6 | 100",
"BMW | X5 | 1000",
"BMW | X6 | 100",
"Citroen | C4 | 123",
"Volga | GAZ-24 | 10000",
"Lada | Niva | 1000000",
"Lada | Jigula | 100000",
"Citroen | C4 | 22",
"Citroen | C5 | 10"]);