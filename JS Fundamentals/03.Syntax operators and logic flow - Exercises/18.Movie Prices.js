function moviePrices(arr){
    "use strict";

    let title = arr[0].toLowerCase();
    let day = arr[1].toLowerCase();

    if(title === "the godfather"){
        switch (day.toLowerCase()){
            case "monday": return 12;
            case "tuesday": return 10;
            case "wednesday": return 15;
            case "thursday": return 12.50;
            case "friday": return 15;
            case "saturday": return 25;
            case "sunday": return 30;
            default: return 'error';
        }
    }else if(title ==="schindler's list"){
        switch (day){
            case "monday": return 8.50;
            case "tuesday": return 8.50;
            case "wednesday": return 8.50;
            case "thursday": return 8.50;
            case "friday": return 8.50;
            case "saturday": return 15;
            case "sunday": return 15;
            default: return 'error';
        }
    }else if(title === 'casablanca'){
        switch (day){
            case "monday": return 8;
            case "tuesday": return 8;
            case "wednesday": return 8;
            case "thursday": return 8;
            case "friday": return 8;
            case "saturday": return 10;
            case "sunday": return 10;
            default: return 'error';
        }
    }else if(title === 'the wizard of oz'){
        switch (day){
            case "monday": return 10;
            case "tuesday": return 10;
            case "wednesday": return 10;
            case "thursday": return 10;
            case "friday": return 10;
            case "saturday": return 15;
            case "sunday": return 15;
            default: return 'error';
        }
    }else{
        return 'error';
    }
}

console.log(moviePrices(['The Godfather', 'Friday']));
console.log(moviePrices(['casablanca', 'sunday']));
console.log(moviePrices(["Schindler's LIST", "monday"]));
console.log(moviePrices(["SoftUni", 'Nineday']));