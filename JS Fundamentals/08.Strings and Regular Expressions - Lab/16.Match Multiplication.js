function matchMultiplication(string){
    let regex = /((\-*[0-9]+)\s*\*\s*(\-*[0-9]+\.*[0-9]*))/g;
    let match = regex.exec(string);
    while(match !== null){
        let firstDigit = Number(match[2]);
        let lastDigit = Number(match[3]);
        let replaced = firstDigit * lastDigit;
        string = string.replace(match[0], replaced);
        match = regex.exec(string);
    }
    console.log(string);
}

matchMultiplication('My bill is: 4 * 2.50 (beer); 12* 1.50 (kepab); 1  *4.50 (salad); 2  * -0.5 (deposit).');