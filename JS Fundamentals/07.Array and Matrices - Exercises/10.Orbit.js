function orbit(array){
    let[width, height, x, y] = array;
    let matrix = [];

    for (let row = 0; row < width; row++) {
        matrix.push('0'.repeat(height).split('').map(Number));
    }

    let number = 1;
    matrix[x][y] = 1;
    let counter = 1;

    while(true){
        number++;
        let isFilled = false;
        let startRow = Math.max(0, x - counter);
        let endRow = Math.min(matrix.length - 1, x + counter);
        let startCol = Math.max(0, y - counter);
        let endCol = Math.min(matrix[0].length - 1, y + counter);

        for (let row = startRow; row <= endRow; row++) {
            for (let col = startCol; col <= endCol; col++) {
                if(matrix[row][col]  === 0){
                    matrix[row][col] = number;
                    isFilled = true;
                }
            }
        }

        counter++;
        if(!isFilled){
            break;
        }
    }

    console.log(matrix.map(e => e.join(' ')).join('\n'));
}


orbit([4, 4, 0, 0]);

orbit([5, 5, 2, 2]);