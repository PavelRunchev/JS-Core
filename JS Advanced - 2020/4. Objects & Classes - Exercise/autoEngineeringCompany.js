function autoEngineeringCompany(inputArr) {
    let carsStore = [];
    inputArr.forEach(e => {
        const [carBrand, carModel, producedCars] = e.split(' | ');
        let existBrand = carsStore.find(b => b.brand === carBrand);
        if(existBrand) {
            if(existBrand.models.has(carModel)) {
                const oldProducedCars = existBrand.models.get(carModel);
                existBrand.models.set(carModel, oldProducedCars + Number(producedCars));
            } else {
                existBrand.models.set(carModel, Number(producedCars));
            }
        } else {
            let newBrand = { brand: carBrand, models: new Map() };
            newBrand.models.set(carModel, Number(producedCars));
            carsStore.push(newBrand);
        }
    });

    return carsStore
        .map(b => {
            const modelsCar = Array.from(b.models)
                .map(m => m = `###${m[0]} -> ${m[1]}`)
                .join('\n');
            return `${b.brand}\n${modelsCar}`;
        }).join('\n');
}

console.log(autoEngineeringCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]));