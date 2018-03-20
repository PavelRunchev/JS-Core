function heroicInventory(array){
    let heroData = [];
    for (let element of array) {
        let tokens = element.split(" / ");
        let nameHero = tokens[0];
        let levelHero = Number(tokens[1]);
        let itemHero = [];
        if(tokens.length > 2){
            itemHero = tokens[2].split(", ");
        }
        let hero = {
            name: nameHero,
            level: levelHero,
            items: itemHero
        };
        heroData.push(hero);

    }
    console.log(JSON.stringify(heroData));
}

heroicInventory(["Isacc / 25 / Apple, GravityGun", "Derek / 12 / BarrelVest, DestructionSword", "Hes / 1 / Desolator, Sentinel, Antara"]);