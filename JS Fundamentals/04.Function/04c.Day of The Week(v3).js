function dayOfTheWeek(day){
    "use strict";
    let dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    for(let days of dayOfWeek.keys()){
        if(dayOfWeek[days] === day){
            return ++days;
        }
    }

    return "error";
}

console.log(dayOfTheWeek("Monday"));
console.log(dayOfTheWeek("Friday"));
console.log(dayOfTheWeek("Sunday"));
console.log(dayOfTheWeek("Wednesday"));
console.log(dayOfTheWeek("Godesday"));
