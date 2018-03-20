function pointInRectangle(arr){
    "use strict";
    let [x, y, xMin, xMax, yMin, yMax] = arr;

    if((x >= xMin && x <= xMax) && (y >= yMin && y <= yMax)){
        return "inside";
    }else {
        return "outside";
    }
}

console.log(pointInRectangle([12, -4, 2, 12, -3, 3])); //outside
console.log(pointInRectangle([12.5, -1, 2, 12, -3, 3])); //outside
console.log(pointInRectangle([8, -1, 2, 12, -3, 3])); //inside