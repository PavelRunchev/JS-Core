function lastMonth(array){
    "use strict";
    let [day, month, year] = array;
    let date = new Date(year, month - 1, 0);
    console.log(date.getDate());
}
//output: 30
lastMonth([13, 12 , 2004]);