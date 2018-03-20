function sumByTown(array){
    "use strict";
    let townsIncome = {};
    for (let i = 0; i < array.length; i+=2) {
        let town = array[i];
        let income = Number(array[i + 1]);
        if(!townsIncome.hasOwnProperty(town)){
            townsIncome[town] = 0;
        }
        townsIncome[town] += income;
    }

    console.log(JSON.stringify(townsIncome));
}

sumByTown(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']);

sumByTown(['Sofia','20','Varna','3','sofia','5','varna', '4']);