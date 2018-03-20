function validityChecker(array){
    "use strict";
    let [x1, y1, x2 , y2] = array;
    console.log(`{${x1}, ${y1}} to {0, 0} ${isValid(x1, y1, 0, 0)}`);
    console.log(`{${x2}, ${y2}} to {0, 0} ${isValid(x2, y2, 0, 0)}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} ${isValid(x1, y1, x2, y2)}`);

    function isValid(x1, y1, x2, y2){
        let valid = "is invalid";
        let distBetweenPoints = distance(x1, y1, x2, y2);
        let integerValue = parseInt(distBetweenPoints);
        if(distBetweenPoints === integerValue){
            valid = "is valid";
        }
        return valid;
    }

    function distance(x1, y1, x2, y2){
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    }
}

validityChecker([3, 0, 0, 4]);
//{3, 0} to {0, 0} is valid
//{0, 4} to {0, 0} is valid
//{3, 0} to {0, 4} is valid

validityChecker([2, 1, 1, 1]);
//{2, 1} to {0, 0} is invalid
//{1, 1} to {0, 0} is invalid
//{2, 1} to {1, 1} is valid
validityChecker([3.3, 0, 0, 4]);
//{3.3, 0} to {0, 0} is invalid
//{0, 4} to {0, 0} is valid
//{3.3, 0} to {0, 4} is invalid
