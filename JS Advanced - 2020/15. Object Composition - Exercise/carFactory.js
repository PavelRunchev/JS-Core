function carFactory(inputCar) {
    const engine = inputCar.power <= 90 
        ? { power: 90, volume: 1800 }
        : inputCar.power <= 120 
            ? { power: 120, volume: 2400 }
            : { power: 200, volume: 3500 };
    const carriage = { 
        type: inputCar.carriage, 
        color: inputCar.color 
    };
    const wheels = inputCar.wheelsize % 2 === 0 
        ?  [0, 0, 0, 0].fill(--inputCar.wheelsize)
        :  [0, 0, 0, 0].fill(inputCar.wheelsize); 
    return { model: inputCar.model, engine, carriage, wheels };
}

console.log(carFactory({ 
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 17 
}));