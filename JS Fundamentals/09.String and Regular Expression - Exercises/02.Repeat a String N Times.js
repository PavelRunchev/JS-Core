function repeatStringNTimes(string, number){
    let repeatedString = "";
    let index = 0;
    while(index < number){
        repeatedString += string;
        index++;
    }
    console.log(repeatedString);
}

repeatStringNTimes('repeat', 5);
