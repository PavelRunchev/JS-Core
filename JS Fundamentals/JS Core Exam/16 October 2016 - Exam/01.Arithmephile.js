function arithmephile(array){
    let numbers = array.map(Number);
    let biggestProduct = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < numbers.length; i++){
        let number = numbers[i];
        if(number >= 0 && number < 10){
            let currentProduct = 1;
            for(let j = i + 1; j <= i + number; j++) {
                currentProduct *= numbers[j];

            }
            if(currentProduct > biggestProduct){
                biggestProduct = currentProduct;
            }
        }
    }

    console.log(biggestProduct);
}

arithmephile(['100','200', '2', '3', '2', '3', '2', '1', '1']);

arithmephile(['10', '20', '2', '30', '44', '3', '56', '20', '24',]);


