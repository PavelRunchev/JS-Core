function thePyramidOfKingDjoser(base, increment){
    let step = 1;
    let stones = 0;
    let lazuli = 0;
    let marble = 0;
    while(base > 2){
        let material = (base - 2) ** 2;
        let decoration = (base * 4) - 4;
        if(step % 5 === 0){
            lazuli += decoration * increment;
        }else{
            marble += decoration * increment;
        }
        stones += material * increment;
        step++;
        base -= 2;
    }

    let gold = (base ** 2) * increment;

    console.log(`Stone required: ${Math.ceil(stones)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(step * increment)}`);
}


thePyramidOfKingDjoser(11, 0.75);