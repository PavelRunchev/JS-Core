function treasureLocator(array){
    "use strict";
    for (let i = 0; i < array.length; i+= 2) {
        let x = array[i];
        let y = array[i +1];
        console.log(isTreasureLocation(x, y));
    }

    function isTreasureLocation(x, y){
        let locator = "On the bottom of the ocean";
        if((x >= 1 && x <= 3) && (y >= 1 && y <= 3)){
            locator = "Tuvalu";
        }else if((x >= 0 && x <= 2) && (y >= 6 && y <= 8)){
            locator = "Tonga";
        }else if((x >= 5 && x <= 7) && (y >= 3 && y <= 6)){
            locator = "Samoa";
        }else if((x >= 4 && x <= 9) && (y >= 7 && y <= 8)){
            locator = "Cook";
        }else if((x >= 8 && x <= 9) && (y >= 0 && y <= 1)){
            locator = "Tokelau";
        }
        return locator;
    }
}

treasureLocator([6, 4]);
treasureLocator([4, 2, 1.5, 6.5, 1, 3]);