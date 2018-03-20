function theHungryProgrammer(meals, commands){
    "use strict";
    let mealsCount = 0;
    for(let element of commands){
        let params = element.split(" ");
        let command = params[0];
        if(command === "End") break;
        switch(command){
            case "Serve":
                if(meals.length > 0 && meals[meals.length - 1] !== undefined){
                    console.log(`${meals.pop()} served!`);
                }
                break;
            case "Add":
                let addPortion = params[1];
                if(addPortion !== undefined){
                    meals.unshift(addPortion);
                }
                break;
            case  "Shift":
            let indexA = Number(params[1]);
            let indexB = Number(params[2]);
            if(indexA !== undefined && indexB !== undefined && meals.length > 0){
                if(indexA >= 0 && indexA < meals.length && indexB >= 0 && indexB < meals.length){
                    let temp = meals[indexA];
                    meals[indexA] = meals[indexB];
                    meals[indexB] = temp;
                }
            }
                break;
            case "Eat":
                if(meals.length > 0 && meals[0] !== undefined) {
                    console.log(`${meals.shift()} eaten`);
                    mealsCount++;
                }
                break;
            case "Consume":
                let startIndex = Number(params[1]);
                let endIndex = Number(params[2]);
                if(startIndex >= 0 && endIndex < meals.length && startIndex < endIndex){
                    let count = Math.abs(startIndex - endIndex) + 1;
                    meals.splice(startIndex, count);
                    mealsCount += count;
                    console.log("Burp!");
                }
                break;
        }
    }
    console.log(meals.length > 0 ? `Meals left: ${meals.join(", ")}` : "The food is gone");
    console.log(`Meals eaten: ${mealsCount}`);
}

theHungryProgrammer(['chicken', 'steak', 'eggs'],
    ['Serve',
        'Eat',
        'End',
        'Consume 0 1']);

theHungryProgrammer(['fries', 'fish', 'beer', 'chicken', 'beer', 'eggs'],
    ['Add spaghetti',
        'Shift 0 1',
        'Consume 1 4',
        'End']);

theHungryProgrammer(['carrots', 'apple', 'beet'],
    ['Consume 0 2',
        'End',]);