function solution() {
    let store = {protein: 0, carbohydrate: 0, fat: 0, flavour: 0 };
    const meats = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };

    function checkForEnoughIngredients(meat, amount, decrementIngredient) {
        let copyStock = Object.assign({}, store);
        for (let i = 0; i < amount; i++) {
            for (const grad in meat) {
                if(decrementIngredient) store[grad] -= meat[grad];
                else if(copyStock[grad] < meat[grad])
                    return `Error: not enough ${grad} in stock`;
            }
        }
        return true;
    }

    return function(input) {
        const [command, ingredMeat, quantity] = input.split(' ');
        if(command === 'report')
            return `protein=${store.protein} carbohydrate=${store.carbohydrate} fat=${store.fat} flavour=${store.flavour}`;
        else if(command === 'restock')
            store[ingredMeat] += Number(quantity);
        else if(command === 'prepare') {
            const desireMeat = meats[ingredMeat.toLowerCase()];
            let notEnough = checkForEnoughIngredients(desireMeat, Number(quantity), false);
            if(typeof notEnough === 'string')
                return notEnough;

            checkForEnoughIngredients(desireMeat, Number(quantity), true);
        }

        return 'Success';
    };
}

let manager = solution();
//console.log(manager('restock flavour 50'));  // Success
//console.log(manager('prepare lemonade 4'));  // Error: not enough carbohydrate in stock

console.log(manager('prepare turkey 1'));
console.log(manager('restock protein 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock carbohydrate 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('report'));
