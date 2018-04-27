function getInfo() {
    let stopId = $('#stopId');
    let stopName = $('#stopName');
    let buses = $('#buses');

    let getResponse = {
        method: 'GET',
        url: `https://judgetests.firebaseio.com/businfo/${stopId.val()}.json`,
        success: displayBusInfo,
        error: displayError
    };
    $.ajax(getResponse);

    function displayBusInfo(res) {
        buses.empty();
        stopName.text(res.name);
        for(let busNumber in res.buses){
            let busLi = $('<li>').text(`Bus ${busNumber} arrives in ${res.buses[busNumber]} minutes`);
            buses.append(busLi);
        }
    }

    function displayError() {
        stopName.empty();
        stopName.text('Error');
    }

    stopId.val("");
}