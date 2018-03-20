function populationsInTowns(array){
    "use strict";
    let dataTowns = new Map();
    for (let data of array) {
        let [town, population] = data.split(" <-> ");
        if(!dataTowns.has(town)){
            dataTowns.set(town, 0);
        }
        dataTowns.set(town, dataTowns.get(town) + Number(population));
    }

    for (let [key,value] of dataTowns) {
        console.log(key + " : " + value);
    }
}

populationsInTowns(["Sofia <-> 1200000", "Montana <-> 20000", "New York <-> 10000000", "Washington <-> 2345000", "Las Vegas <-> 1000000"]);