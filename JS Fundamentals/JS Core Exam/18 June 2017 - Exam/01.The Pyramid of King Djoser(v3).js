function solve(base, increment){
    let height = base % 2 === 0 ? Math.floor(base / 2 - 1) : Math.floor(base / 2) ;
    let stones = 0;
    let marble = 0;
    let lapis = 0;
    step = 1;
    for(let i = 1; i <= height; i++){
        let material = (base - 2) * (base - 2);
        let decoration = (base * base) - material;
        if(i % 5 === 0){
            lapis += decoration * increment;
        }else {
            marble += decoration * increment;
        }
        stones += material * increment;
        step++;
        base -= 2;
    }

    let gold = base * base * increment;
    console.log(`Stone required: ${Math.ceil(stones)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(step * increment)}`);
}

solve(11, 1);
solve(12, 1);
solve(23, 0.5);