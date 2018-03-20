function oddOrEven(n){
    "use strict";
    let number = n % 2;
    if(number == 0){
        console.log("even");
    }else if(number == Math.round(number)){
        console.log("odd");
    }
    else if(number != Math.round(number)){
        console.log("invalid");
    }
}

oddOrEven(5.2);