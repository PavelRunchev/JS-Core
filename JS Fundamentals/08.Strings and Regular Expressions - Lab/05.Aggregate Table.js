function aggregateTable(array){
    let towns = [];
    let incomes = 0;
    for (let table of array) {
        let tokens = table.split('|').filter(t => t !== "");
        let town = tokens[0].trim();
        let income = Number(tokens[1].trim());
        towns.push(town);
        incomes += income;
    }

    console.log(towns.join(", "));
    console.log(incomes);
}

aggregateTable(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
);