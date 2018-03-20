function spiralMatrix(width, height){
    let matrix = [];
    for (let i = 0; i < width; i++) {
        matrix.push('0'.repeat(height).split('').map(Number));
    }

    let counter = 1;
    while (true){
        counter = rightStep(matrix, counter);
        counter = bottomStep(matrix, counter);
        counter = leftStep(matrix, counter);
        counter = upStep(matrix, counter);
        console.log(matrix);
        if(counter > 8 ){
            break;
        }

    }

    function rightStep(matrix, counter){

        let start = 0;
        let end = row - 1;
        for (let i = start; i < end; i++) {
            matrix[start][i] = counter++;
        }

        return counter;
    }

    function bottomStep(matrix, counter){
        let start = 0;
        let end = row - 1;
        for (let i = start; i < end; i++) {
            matrix[i][end] = counter++;
        }

        return counter;
    }

    function leftStep(matrix, counter){
        let start = 0;
        let end = matrix.length - 1;
        for (let i = end; i >= start; i--) {
            matrix[end][i] = counter++;
        }

        return counter;
    }

    function upStep(matrix, counter) {
        let start = 0;
        let end = matrix.length - 2;
        for (let i = end; i > start; i++) {

        }

        return counter;
    }
}

spiralMatrix(5,5);