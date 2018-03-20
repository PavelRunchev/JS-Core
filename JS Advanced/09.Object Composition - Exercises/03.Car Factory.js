function carFactory(inputObj) {
    let carParameters = {
        model: inputObj.model,
        engine: {},
        carriage: {},
        wheels: []
    };
    if(inputObj.power <= 90){
        carParameters['engine']['power'] = 90;
        carParameters['engine']['volume'] = 1800;
    }else if(inputObj.power <= 120){
        carParameters['engine']['power'] = 120;
        carParameters['engine']['volume'] = 2400;
    }else{
        carParameters['engine']['power'] = 200;
        carParameters['engine']['volume'] = 3500;
    }

    carParameters['carriage']['type'] = inputObj.carriage;
    carParameters['carriage']['color'] = inputObj.color;

    let wheelSize = inputObj.wheelsize % 2 === 0 ? --inputObj.wheelsize : inputObj.wheelsize;
    carParameters['wheels'] = [wheelSize, wheelSize, wheelSize, wheelSize];

    return carParameters;
}

console.log(carFactory({ model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }));

console.log(carFactory({ model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }));