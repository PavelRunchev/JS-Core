function lostInTheMountains(keyword, text) {
    let patternMessage = new RegExp(`(${keyword}(.+)${keyword})`, "g");
    let pattern = /(north|east)\D*(\d{2})[^,]*(,)\D*(\d{6})/gi;

    let latOutput = "";
    let longOutput = "";
    let matched = pattern.exec(text);
    while (matched !== null) {
        if (matched[1].toLowerCase() === "north") {
            latOutput = matched[2] + "." + matched[4] + " N";
        } else {
            longOutput = matched[2] + "." + matched[4] + " E";
        }
        matched = pattern.exec(text);
    }

    let matchedMessage = patternMessage.exec(text);
    console.log(latOutput);
    console.log(longOutput);
    console.log(`Message: ${matchedMessage[2]}`);

}
lostInTheMountains('4ds',
    "eaSt 19,432567noRt north east 53,123456north 43,3213454dsNot all those who wander are lost.4dsnorth 47,874532");


lostInTheMountains("<>",
    `o u%&lu43t&^ftgv><nortH4276hrv756dcc,  jytbu64574655k <>ThE sanDwich is iN the refrIGErator<>yl i75evEAsTer23,lfwe 987324tlblu6b`);