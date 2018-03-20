function splitString(string, delimiter){
    let result = string.split(delimiter)
        .forEach(word => console.log(word));
}

splitString('One-Two-Three-Four-Five', '-');