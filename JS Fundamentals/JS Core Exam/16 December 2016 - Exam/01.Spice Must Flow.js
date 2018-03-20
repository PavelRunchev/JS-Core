function spiceMustFlow(yield) {
    let spice = yield[0];
    let day = 0;
    let workers = 0;
    while(spice >= 100){
        workers += spice - 26;
        day++;
        spice -= 10;
    }

    if(workers >= 26){
        workers -= 26;
    }

    console.log(day);
    console.log(workers);
}

spiceMustFlow([111]);
spiceMustFlow([450]);
spiceMustFlow([200]);