let breakfast = function () {
    let robot = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let products = {
        apple:{
            carbohydrate: 1,
            flavour: 2
        },
        coke:{
            carbohydrate: 10,
            flavour: 20
        },
        burger:{
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        omelet:{
            protein: 5,
            fat: 1,
            flavour: 1
        },
        cheverme:{
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };
    
    return function (input) {
        let inputData = input.split(' ');
        let command = inputData[0];

        if(command === 'restock'){
            let microElement = inputData[1];
            robot[microElement] += parseInt(inputData[2]);
            return "Success";
        }else if(command === 'report'){
            return `protein=${robot.protein} carbohydrate=${robot.carbohydrate} fat=${robot.fat} flavour=${robot.flavour}`;
        }else if(command === 'prepare'){
            let recipe = inputData[1];
            let quantity = Number(inputData[2]);
            let statsRecipe = products[recipe];
            let isRecipe = true;
            for(let i = 1; i <= quantity; i++){
                for(let ingredient in statsRecipe){
                    if(robot[ingredient] < statsRecipe[ingredient]){
                        isRecipe = false;
                        return `Error: not enough ${ingredient} in stock`;
                    }
                }
                if(!isRecipe){
                    break;
                }
            }

            if(isRecipe){
                for(let i = 1; i <= quantity; i++) {
                    for(let ingredient in statsRecipe){
                        if(statsRecipe[ingredient] <= robot[ingredient]){
                            robot[ingredient] -= statsRecipe[ingredient];
                        }
                    }
                }
                return "Success";
            }
        }
    }
}

//breakfast('prepare cheverme 1');
//breakfast('restock protein 10');
//breakfast('prepare cheverme 1');
//breakfast('restock carbohydrate 10');
//breakfast('prepare cheverme 1');
//breakfast('restock fat 10');
//breakfast('prepare cheverme 1');
//breakfast('restock flavour 10');
//breakfast('prepare cheverme 1');
//breakfast('report');



//breakfast('restock carbohydrate 10');
//breakfast('restock flavour 10');
//breakfast('prepare apple 1');
//breakfast('restock fat 10');
//breakfast('prepare burger 1');
//breakfast('report');

//breakfast('restock flavour 50');
//breakfast('prepare coke 4');

