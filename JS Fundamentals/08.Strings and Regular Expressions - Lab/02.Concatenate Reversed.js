function concatAndReverseStrings(array){
    let resultString = "";

    array.forEach(function(el){
        resultString += el;
        return resultString;
    });
    console.log(Array.from(resultString).reverse().join(""));
}

concatAndReverseStrings(['I', 'am', 'student']);
concatAndReverseStrings(['race', 'car']);