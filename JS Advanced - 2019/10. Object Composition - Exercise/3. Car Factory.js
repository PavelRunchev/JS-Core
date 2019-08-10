function CarFactory(obj) {
    const volume = obj.power <= 90 
        ? 1800 : obj.power <= 120 
        ? 2400 : 3500;
    const power = obj.power <= 90 
        ? 90 : obj.power <= 120 
        ? 120 : 200;

    const diameter = obj.wheelsize % 2 !== 0 
        ? obj.wheelsize 
        : obj.wheelsize - 1;
    const wheels = [0, 0, 0, 0].map(w => w = diameter);

    return {
        model: obj.model,
        engine: { power, volume },
        carriage: { type: obj.carriage, color: obj.color },
        wheels: wheels
    };
}

let car = CarFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
);

console.log(car);