function    juice(array){
    let bottlesFruits = new Map();
    let fruits = {};
    for (let typeJuice of array) {
        let data = typeJuice.split(/\s=>\s/g);
        let fruit = data[0];
        let quantity = Number(data[1]);
        if(!fruits.hasOwnProperty(fruit)){
            fruits[fruit] = quantity;
        }else{
            fruits[fruit] += quantity;
        }

        if(fruits[fruit] >= 1000){
            let bottleCount = Math.floor(fruits[fruit] / 1000);
            bottlesFruits.set(fruit, bottleCount);
        }
    }

    for (let [fruit, bottles] of bottlesFruits) {
        console.log(fruit + " => " + bottles);
    }
}


juice(["Kiwi => 234",
    "Pear => 2345",
    "Watermelon => 3456",
    "Kiwi => 4567",
    "Pear => 5678",
    "Watermelon => 6789"]);