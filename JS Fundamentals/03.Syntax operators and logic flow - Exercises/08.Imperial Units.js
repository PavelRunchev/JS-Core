function imperialUnits(inches){
    "use strict";
    let inch = Math.floor(inches / 12);
    let remainder = inches % 12;
    console.log(`${inch}'-${remainder}"`);
}

imperialUnits(55);
imperialUnits(36);
imperialUnits(11);