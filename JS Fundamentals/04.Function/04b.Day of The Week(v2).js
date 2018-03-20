function dayOfTheWeek(day){
    "use strict";
    let dayOfWeek = {"Monday": 1, "Tuesday": 2, "Wednesday": 3, "Thursday": 4, "Friday": 5,  "Saturday": 6, "Sunday": 7};
    for(let days in dayOfWeek){
        if(days === day){
            return dayOfWeek[days];
        }
    }

    return "error";
}

console.log(dayOfTheWeek("Monday"));
console.log(dayOfTheWeek("Friday"));
console.log(dayOfTheWeek("Sunday"));
console.log(dayOfTheWeek("Wednesday"));
console.log(dayOfTheWeek("Godesday"));
