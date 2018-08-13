let flightsServices = (() => {
    
    function getFlights() {
        const endPoint = 'flights?query={"isPublic":"true"}';

        return remote.get('appdata', endPoint, 'kinvey');
    }
    
    function createFlight(destination, origin, departure, seats, cost, image, isPublic) {
        const flight = {destination, origin, departure, seats, cost, image, isPublic};

        return remote.post('appdata', 'flights','kinvey', flight);
    }
    
    function editFLight(flightId, destination, origin, departure, seats, cost, image, isPublic) {
        const endpoint = `flights/${flightId}`;
        const editedData = {destination, origin, departure, seats, cost, image, isPublic};

        return remote.update('appdata', endpoint, 'kinvey', editedData);
    }
    
    function deleteFlight(flightId) {
        const endpoint = `flights/${flightId}`;

        return remote.remove('appdata', endpoint, 'kinvey');
    }
    
    function detailsFlights(flightId) {
        const endpoint = `flights/${flightId}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }
    
    function myFlights(userId) {
        const endpoint = `flights?query={"_acl.creator":"${userId}"}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }

    return {
        getFlights,
        createFlight,
        editFLight,
        deleteFlight,
        detailsFlights,
        myFlights
    }
})();