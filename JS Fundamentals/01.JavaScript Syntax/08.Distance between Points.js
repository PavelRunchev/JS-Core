function DistanceBetweenPoints(x1, y1, x2, y2){
    "use strict";
    let point1 = Math.pow((x1 - x2), 2);
    let point2 = Math.pow((y1 - y2), 2);
    let distance = Math.sqrt(point1 + point2);
    return distance;
}

console.log(DistanceBetweenPoints(2.34, 15.66, -13.55, -2.9985));