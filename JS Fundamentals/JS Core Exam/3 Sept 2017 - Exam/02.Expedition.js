function expedition(primary, secondary, coordinates, startingCoordinates){
    "use strict";
    let step = 1;
    let primaryRow = primary.length;
    let primaryCol = primary[0].length;

    for(let coordinate of coordinates){
        let row = coordinate[0];
        let col = coordinate[1];
        for(let i = 0; i < secondary.length; i++){
            if(i + row < primary.length){
                for(let j = 0; j < secondary[0].length; j++){
                    if(primary[i + row][j + col] !== undefined && secondary[i][j] === 1){
                        let point = primary[i + row][j + col];
                        if(point === 1){
                            primary[i + row][j + col] = 0;
                        }else {
                            primary[i + row][j + col] = 1;
                        }
                    }
                }
            }
        }
    }

    let currentPos = [startingCoordinates[0], startingCoordinates[1]];
    let previousDirection;
    while(true){
        if(currentPos[0] + 1 < primaryRow && primary[currentPos[0] + 1][currentPos[1]] === 0 && previousDirection !== "up"){
            currentPos = [currentPos[0] + 1, currentPos[1]];
            previousDirection = "down";
        }else if(currentPos[1] + 1 < primaryCol && primary[currentPos[0]][currentPos[1] + 1] === 0 && previousDirection !== "left"){
            currentPos = [currentPos[0], currentPos[1] + 1];
            previousDirection = "right";
        }else if(currentPos[0] > 0 && primary[currentPos[0] - 1][currentPos[1]] === 0 && previousDirection !== "down"){
            currentPos = [currentPos[0] - 1, currentPos[1]];
            previousDirection = "up";
        }else if(currentPos[1] > 0 && primary[currentPos[0]][currentPos[1] - 1] === 0 && previousDirection !== "right"){
            currentPos = [currentPos[0], currentPos[1] - 1];
            previousDirection = "left";
        }else{
            break;
        }
        step++;
    }


    console.log(step);
    printPosition(currentPos);

    function printPosition(currentPos){
        let row = currentPos[0];
        let col = currentPos[1];
        if(row === 0){
            console.log("Top");
        }else if(row === primaryRow - 1){
            console.log("Bottom");
        }else if(col === 0){
            console.log("Left");
        }else if(col === primaryCol - 1){
            console.log("Right");
        }else if(row < primaryRow / 2 && col >= primaryCol / 2){
            console.log("Dead end 1");
        }else if(row < primaryRow / 2 && col < primaryCol / 2){
            console.log("Dead end 2");
        }else if(row >= primaryRow / 2 && col < primaryCol / 2){
            console.log("Dead end 3");
        }else if(row >= primaryRow / 2 && col >= primaryCol / 2){
            console.log("Dead end 4");
        }
    }
}


expedition([[1, 1, 0, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 0, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 0, 1],
            [0, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 1, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0]],
        [[0, 1, 1],
        [0, 1, 0],
        [1, 1, 0]],
    [[1, 1], [2, 3], [5, 3]], [0, 2]);


expedition([[1, 1, 0, 1],
        [0, 1, 1, 0],
        [0, 0, 1, 0],
        [1, 0, 1, 0]],
    [[0, 0, 1, 0, 1],
        [1, 0, 0, 1, 1],
        [1, 0, 1, 1, 1],
        [1, 0, 1, 0, 1]],
    [[0, 0],
        [2, 1],
        [1, 0]],
    [2, 0]);