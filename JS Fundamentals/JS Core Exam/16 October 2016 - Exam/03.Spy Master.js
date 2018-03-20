function spyMaster(array){
    let specialKey = array.shift();
    let regex = new RegExp(`(\\s|^)(${specialKey}\\s+)([A-Z!%$#]{8,})(\\s|\\.|\\,|$)`, "gi");

    for(let i = 0; i < array.length; i++){
        let element = array[i];
        let matched;
        while(matched = regex.exec(element)){
            let key = matched[2];
            let message = matched[3];
            if(message.toUpperCase() !== message){
                continue;
            }

            message = isDecode(message);
            let decodeMessage = matched[1] + key + message + matched[4];
            element = element.replace(matched[0], decodeMessage);
        }
        console.log(element);
    }

    function isDecode(message){
        message = message.replace(/!/g, 1);
        message = message.replace(/%/g, 2);
        message = message.replace(/#/g, 3);
        message = message.replace(/\$/g, 4);
        return message.toLowerCase();
    }
}
spyMaster(['enCode',
    `Some messages are just not encoded what can you do?`,
    `RE - ENCODE THEMNOW! - he said.`,
    `Damn encode, ITSALLHETHINKSABOUT, eNcoDe BULL$#!%.`]);
spyMaster(['specialKey',
    `In this text the specialKey HELLOWORLD! is correct, but`,
    `the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while`,
    `SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!`]);


