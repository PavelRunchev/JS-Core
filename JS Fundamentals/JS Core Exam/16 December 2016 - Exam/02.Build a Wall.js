function buildAWall(array){
    let wall = [];

    let is30Foot = isFilled(array);
    while(!is30Foot){
        let cubic = 0;
        for(let i = 0; i < array.length; i++){
            let currentSection = array[i];
            if(currentSection < 30){
                cubic += 195;
                array[i]++;
            }
        }
        wall.push(cubic);
        is30Foot = isFilled(array);
    }

    let cost = wall.reduce((a,b) => a + b);
    console.log(wall.join(", "));
    console.log(`${cost * 1900} pesos`);

    function isFilled(array) {
        let isTrue = true;
        for(let element of array){
            if(element < 30){
                isTrue = false;
                break;
            }
        }
        return isTrue;
    }
}

buildAWall([17, 22, 17, 19, 17]);