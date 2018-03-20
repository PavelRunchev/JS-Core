function distanceOverTime(arr){
    "use strict";
    //formula for distance = S = V*T;
    //distance between two object V1 and V2;
    let distance = Math.abs(arr[0] - arr[1]);

    //Time in hour and km (1 hour = 3600sec and 1km = 1000meters);
    let time = arr[2] / 3600 * 1000;

    let speed = distance * time;
    console.log(speed);
}

distanceOverTime([5, -5, 40]);