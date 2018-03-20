function solve(portions, commandsArray){
    let arrayFromMeals = portions.slice(0);

    let mealsCount = 0;
    for(let line of commandsArray){
        let tokens = line.split(" ");
        let command = tokens[0];
        if(command === "End"){
            if(tokens.length === 1){
                break;
            }
        }else if(command === "Serve"){
            if(arrayFromMeals.length > 0){
                let serve = arrayFromMeals.pop();
                console.log(`${serve} served!`);
            }
        }else if(command === "Add"){
                let meal = tokens[1];
                if(meal !== undefined){
                    arrayFromMeals.unshift(meal);
                }
        }else if(command === "Shift"){
                let indexA = Number(tokens[1]);
                let indexB = Number(tokens[2]);
                if(arrayFromMeals[indexA] !== undefined && arrayFromMeals[indexB] !== undefined) {
                    let firstMeal = arrayFromMeals[indexA];
                    arrayFromMeals[indexA] = arrayFromMeals[indexB];
                    arrayFromMeals[indexB] = firstMeal;
                }
        }else if(command === "Eat"){
            if(arrayFromMeals.length > 0){
                let eat = arrayFromMeals.shift();
                console.log(`${eat} eaten`);
                mealsCount++;
            }
        }else if(command === "Consume"){
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            if(arrayFromMeals[startIndex] !== undefined && arrayFromMeals[endIndex] !== undefined){
                let count = endIndex - startIndex + 1;
                arrayFromMeals.splice(startIndex, count);
                mealsCount += count;
                console.log("Burp!");
            }
        }
    }


    if(arrayFromMeals.length > 0){
        console.log(`Meals left: ${arrayFromMeals.join(", ")}`);
    }else{
        console.log("The food is gone");
    }
    console.log(`Meals eaten: ${mealsCount}`);
}


solve(['carrots', 'apple', 'beet'],
    ['Consume 0 2', 'End']);
//Burp!
//The food is gone
//Meals eaten: 3


solve(['fries', 'fish', 'beer', 'chicken', 'beer', 'eggs'],
    ['Add spaghetti', 'Shift 0 1', 'Consume 1 4', 'End']);

//Burp!
//Meals left: fries, beer, eggs
//Meals eaten: 4


solve(['chicken', 'steak', 'eggs'],
    ['Serve', 'Eat', 'End', 'Consume 0 1']);

//eggs served!
//chicken eaten
//Meals left: steak
//Meals eaten: 1



