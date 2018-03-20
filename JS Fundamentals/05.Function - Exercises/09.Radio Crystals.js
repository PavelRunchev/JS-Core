function radioCrystals(array){
    "use strict";
    let opStr = 'Cut';
    let desiredSize = array[0];
    for (let i = 1; i < array.length; i++) {
        let microns = array[i];
        console.log(`Processing chunk ${microns} microns`);
        microns = executeOperation(microns, 'Cut', cut);
        microns = executeOperation(microns, 'Lap', lap);
        microns = executeOperation(microns, 'Grind', grind);
        microns = executeOperation(microns, 'Etch', etch);
        if(microns + 1 === desiredSize){
            microns = xRay(microns);
        }

        finishProcessing(microns);
    }

    function executeOperation(microns, opStr, op) {
        let newSize = op(microns);
        let counter = 0;
        while(newSize >= desiredSize || Math.floor(desiredSize - newSize) === 1){
            microns = newSize;
            newSize = op(microns);
            counter++;
        }

        if(counter > 0){
            console.log(`${opStr} x${counter}`);
            microns = transportingAndWashing(microns);
        }

        return microns;
    }
    
    function cut(crystal){
        return crystal / 4;
    }
    
    function lap(crystal) {
        return crystal * 0.80; //-20%
    }

    function grind(crystal){
        return crystal - 20;
    }

    function etch(crystal){
        return crystal - 2;
    }

    function xRay(crystal) {
        console.log('X-ray x1');
        return ++crystal;
    }

    function transportingAndWashing(crystal) {
        console.log("Transporting and washing");
        return Math.floor(crystal);
    }

    function finishProcessing(microns){
        console.log(`Finished crystal ${microns} microns`)
    }
}

radioCrystals([1000, 4000, 8100]);