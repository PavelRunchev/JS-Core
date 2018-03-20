function solve(array) {
    "use strict";
    let [x1, y1, x2 , y2] = array;

    function distance(x1, y1, x2, y2) {
        return Math.sqrt(((x1 - x2)**2) + ((y1 - y2)**2));
    }

    function isValid(x1, y1, x2, y2){
        let dist = distance(x1, y1, x2, y2);
        if(Number.isInteger(dist)){
            return true;
        }
        return false;
    }
    console.log(isValid(x1, y1, 0, 0) ? `{${x1}, ${y1}} to {0, 0} is valid` : `{${x1}, ${y1}} to {0, 0} is invalid`);
    console.log(isValid(x2, y2, 0, 0) ? `{${x2}, ${y2}} to {0, 0} is valid` : `{${x2}, ${y2}} to {0, 0} is invalid`);
    console.log(isValid(x1, y1, x2, y2) ? `{${x1}, ${y1}} to {${x2}, ${y2}} is valid` : `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
}

solve([2, 1, 1, 1]);
solve([3.3, 0, 0, 4]);

//{3.3, 0} to {0, 0} is invalid
//{0, 4} to {0, 0} is valid
//{3.3, 0} to {0, 4} is invalid