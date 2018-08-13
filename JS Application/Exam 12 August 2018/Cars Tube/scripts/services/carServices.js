let carServices = (() => {

    function allCars() {
        const endpoint = 'cars?query={}&sort={"_kmd.ect": -1}';
        return remote.get('appdata', endpoint, 'kinvey');
    }

    function createCar(brand, description, fuel, imageUrl, model, price, title, year) {
        const seller = sessionStorage.getItem('username');
        const newCar = {brand, description, fuel, imageUrl, model, price, seller, title, year};

        return remote.post('appdata', 'cars', 'kinvey', newCar);
    }

    function editCar(carId, title, description, brand, model, year, imageUrl, fuel, price) {
        const seller = sessionStorage.getItem('username');
        const endpoint = `cars/${carId}`;
        const editedCar = {seller, title, description, brand, model, year, imageUrl, fuel, price};

        return remote.update('appdata', endpoint, 'kinvey', editedCar);
    }

    function deleteCar(carId) {
        const endpoint = `cars/${carId}`;
        return remote.remove('appdata', endpoint, 'kinvey');
    }
    
    function myCars(username) {
        const endpoint = `cars?query={"seller":"${username}"}&sort={"_kmd.ect": -1}`;
        return remote.get('appdata', endpoint, 'kinvey');
    }
    
    function detailsCar(carId) {
        const endpoint = `cars/${carId}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }

    return {
        allCars,
        createCar,
        editCar,
        deleteCar,
        myCars,
        detailsCar
    }

})();