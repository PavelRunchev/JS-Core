function quadratixEquation(a, b, c){
    "use strict";
    // d = b^ - 4 * a * c
    let d = Math.pow(b, 2) - 4 * a * c;
    if(d > 0){
        //x1 = (-b + sqrt(d)) / (2 * a)
        let x1 = (-b + Math.sqrt(d)) / (2 * a);

        //x1 = (-b - sqrt(d)) / (2 * a)
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        if(x1 < x2){
            console.log(x1);
            console.log(x2);
        }else{
            console.log(x2);
            console.log(x1);
        }
    }else  if(d === 0){

        //x = -b / (2 * a)
        let x = -b / (2 * a);
        console.log(x);
    }
    else{
        console.log('No');
    }
}

quadratixEquation(6, 11, -35);
quadratixEquation(1, -12, 36);
quadratixEquation(5, 2, 1);