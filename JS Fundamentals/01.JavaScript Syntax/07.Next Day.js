function NextDay(year, month, day){
    "use strict";
    let date = new Date(year, month, day);
    let nexrDay = new Date(year, month - 1, date.getDate() + 1);

    console.log(`${nexrDay.getFullYear()}-${nexrDay.getMonth() + 1}-${nexrDay.getDate()}`);
}

NextDay(2016, 12, 31);