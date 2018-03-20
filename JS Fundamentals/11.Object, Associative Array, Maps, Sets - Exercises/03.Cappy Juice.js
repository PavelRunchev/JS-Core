function    juice(array){
    let bottlesObj = {};
    let juiceObj = {};
    for (let typeJuice of array) {
        let data = typeJuice.split(" => ");
        let juice = data[0];
        let quantity = Number(data[1]);
        if(!juiceObj.hasOwnProperty(juice)){
            juiceObj[juice] = quantity;
        }else{
            juiceObj[juice] += quantity;
        }

        if(juiceObj[juice] >= 1000){
            let bottleCount = Math.floor(juiceObj[juice] / 1000);
            bottlesObj[juice] = bottleCount;
        }
    }

    for (let juiceName in bottlesObj) {
        console.log(`${juiceName} => ${bottlesObj[juiceName]}`);
    }
}


juice(["Kiwi => 234",
    "Pear => 2345",
    "Watermelon => 3456",
    "Kiwi => 4567",
    "Pear => 5678",
    "Watermelon => 6789"]);