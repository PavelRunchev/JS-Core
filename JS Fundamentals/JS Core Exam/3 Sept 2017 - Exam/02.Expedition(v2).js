function expedition(primary, secondary, overlay, startingCoordinates){
    "use strict";
    let primaryMatrix = primary;
    let secondaryMatrix = secondary;

    for(let element of overlay){
        let overlayRow = element[0];
        let overlayCol = element[1];

        for(let row = 0; row < secondaryMatrix.length; row++){
            for(let col = 0; col < secondaryMatrix[0].length; col++) {
                let secondaryCell = secondaryMatrix[row][col];
                if(secondaryCell === 1){
                    if(row + overlayRow < primaryMatrix.length
                        && col + overlayCol < primaryMatrix[0].length){
                        primaryMatrix[row + overlayRow][col + overlayCol] =
                            primaryMatrix[row + overlayRow][col + overlayCol] === 1 ? 0 : 1;
                    }
                }
            }
        }
     }

    let targetRow = startingCoordinates[0];
    let targetCol = startingCoordinates[1];
    let stepCount = 1;
    let step = "";

     while(true){
        //down
         if(targetRow + 1 < primaryMatrix.length && primaryMatrix[targetRow + 1][targetCol] === 0
             && step !== "up"){
            targetRow++;
            step = "down";
            //right
         }else if(targetCol + 1 < primaryMatrix[0].length && primaryMatrix[targetRow][targetCol + 1] === 0
            && step !== "left"){
             targetCol++;
             step = "right";
             //up
         }else if(targetRow - 1 >= 0 && primaryMatrix[targetRow - 1][targetCol] === 0 && step !== "down"){
             targetRow--;
             step = "up";
             //left
         }else if(targetCol - 1 >= 0 && primaryMatrix[targetRow][targetCol - 1] === 0 && step !== "right"){
             targetCol--;
             step = "left";
         }else{
             break;
         }

          stepCount++;
     }

    console.log(stepCount);
    if(targetRow + 1 >= primaryMatrix.length){
        console.log("Bottom");
    }else if(targetRow - 1 < 0){
        console.log("Top");
    }else if(targetCol + 1 >= primaryMatrix[0].length){
        console.log("Right");
    }else if(targetCol - 1 < 0){
        console.log("Left");
    }else if(targetRow < primaryMatrix.length / 2 && targetCol >= primaryMatrix[0].length / 2){
        console.log("Dead end 1");
    }else if(targetRow < primaryMatrix.length / 2 && targetCol < primaryMatrix[0].length / 2){
        console.log("Dead end 2");
    }else if(targetRow >= primaryMatrix.length / 2 && targetCol < primaryMatrix[0].length / 2){
        console.log("Dead end 3");
    }else if(targetRow >= primaryMatrix.length / 2 && targetCol >= primaryMatrix[0].length / 2){
        console.log("Dead end 4");
    }
}

expedition([[1, 0, 1, 0],
        [1, 0, 1, 1],
        [1, 1, 1, 0],
        [1, 0, 0, 1],
        [1, 1, 0, 1],
        [1, 1, 0, 1],
        [0, 0, 1, 1],
        [0, 1, 1, 0],
        [0, 0, 1, 0],
        [0, 1, 0, 0]],

        [[1, 1, 1, 0],
        [1, 0, 1, 1]],
        [[1, 1],
        [0, 1],
        [6, 0],
        [8, 0]],

    [8, 3]);




