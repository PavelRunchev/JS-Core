function heroicInventory(inputArr) {
    let outputArr = [];
    inputArr.forEach(el => {
        let [ name, level, items ] = el.split(' / ');
        outputArr.push({ 
            name, 
            level: Number(level), 
            items: items ? items.split(', ') : [] 
        });
    });

    return JSON.stringify(outputArr);
}

console.log(heroicInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
));

console.log(heroicInventory(['Jake / 1000 / ']));