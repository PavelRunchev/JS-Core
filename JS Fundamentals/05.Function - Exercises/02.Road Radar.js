function roadRadar(array){
    "use strict";
    function limit(zone) {
        switch (zone){
            case "city": return 50;
            case "motorway": return 130;
            case "residential": return 20;
            case "interstate": return 90;
        }
    }

    function infraction(speed, limit){
        let getLimit = speed - limit;
        if(getLimit > 0 && getLimit <= 20){
            return "speeding";
        }else if(getLimit > 0 && getLimit <= 40){
            return "excessive speeding";
        }else if(getLimit > 40){
            return "reckless driving";
        }else{
            return "";
        }
    }

    let [speed, zone] = array;
    let limitAway = limit(zone);
    let overSpeed = Math.abs(speed - limitAway);
    if(overSpeed > 0){
        console.log(infraction(speed, limitAway));
    }
}

roadRadar([40, 'city']);
roadRadar([21, 'residential']);
roadRadar([120, 'interstate']);
roadRadar([200, 'motorway']);