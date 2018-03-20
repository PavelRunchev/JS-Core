function thePyramidOfKingDjoser(base, increment){
    let endRow = base % 2 === 0 ? 2 : 1;
    let step = 0;
    let stones = 0;
    let lazuli = 0;
    let marble = 0;
    let count = 0;
    let gold = 0;
    for(let i = base; i >= 1; i-= 2){
        step++;
        count++;
        let material = Math.pow((base - 2), 2);
        let decoration = (base * 4) - 4;
        if(endRow === base){
            gold = (base ** 2) * increment;
        }else{
            if(count === 5){
                lazuli += decoration * increment;
                count = 0;
            }else{
                marble += decoration * increment;
            }
            stones += material;
            base -= 2;
        }
    }

    console.log(`Stone required: ${Math.ceil(stones * increment)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(step * increment)}`);
}

thePyramidOfKingDjoser(11, 0.75);