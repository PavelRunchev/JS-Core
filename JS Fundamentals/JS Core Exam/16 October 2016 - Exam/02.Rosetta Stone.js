function rosettaStone(array){
    let length = Number(array.shift());
    let templateMatrix = [];
    for(let i = 0; i < length; i++){
        templateMatrix[i] = array[i].split(" ").map(Number);
    }

    let matrix = [];
    for(let i = length; i < array.length; i++){
        matrix.push(array[i].split(" ").map(Number));
    }

    let stepRight = length;
    let stepDown = templateMatrix[0].length;

    for(let row = 0; row < matrix.length; row+= stepRight){
        for(let col = 0; col < matrix[row].length; col+= stepDown){
            let currentCell = matrix[row][col];
            for(let templateRow = 0; templateRow < templateMatrix.length; templateRow++){
                for(let templateCol = 0; templateCol < templateMatrix[templateRow].length; templateCol++){

                    let targetRow = row + templateRow;
                    let targetCol = col + templateCol;

                    if(targetRow < matrix.length && targetCol < matrix[row].length){
                        let codeNumber = matrix[targetRow][targetCol] + templateMatrix[templateRow][templateCol];
                        codeNumber %= 27;
                        if(codeNumber === 0){
                            matrix[targetRow][targetCol] = " ";
                        }else{
                            matrix[targetRow][targetCol] = String.fromCharCode(codeNumber + 64);
                        }
                    }
                }
            }
        }
    }

    let decodeMessage = "";
    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[row].length; col++){
            decodeMessage += matrix[row][col];
        }
    }

    console.log(decodeMessage.trim());
}

rosettaStone(['1',
'1 3 13',
'12 22 14 13 25 0 4 24 23',
'18 24 2 25 22 0 0 11 18',
'8 25 6 26 8 23 13 4 14',
'14 3 14 10 6 1 6 16 14',
'11 12 2 10 24 2 13 24 0',
'24 24 10 14 15 25 18 24 12',
'4 24 0 8 4 22 19 22 14',
'0 11 18 26 1 19 18 13 15',
'8 15 14 26 24 14 26 24 14']);

//output : MY NAME IS OZYMANDIAS KING OF KINGS LOOK ON MY WORKS YE MIGHTY AND DESPAIR

