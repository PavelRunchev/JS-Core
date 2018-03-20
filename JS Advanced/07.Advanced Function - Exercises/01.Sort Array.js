function sortArray(inputArray, orderMethod) {
    let sortedArray;
    if(orderMethod === "asc"){
        sortedArray = inputArray.sort((a, b) => a - b);
    }else if(orderMethod === "desc"){
        sortedArray = inputArray.sort((a, b) => b - a);
    }

    return sortedArray;
}

sortArray([14, 7, 17, 6, 8], 'desc');