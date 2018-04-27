function solve() {
    let currentId = 'depot';
    let oldName = "";

    function depart(){
        let getRequest = {
            method: 'GET',
            url: `https://judgetests.firebaseio.com/schedule/${currentId}.json`,
            success: busDepart,
            error: displayError
        };

        $.ajax(getRequest);
    }

    function arrive() {
        $('#info').find('span').text(`Arriving at ${oldName}`);
        $('#depart').prop('disabled', false);
        $('#arrive').prop('disabled', true);
    }
    
    function busDepart(busInfo) {

        $('#info').find('span').text(`Next stop ${busInfo.name}`);
        currentId = busInfo.next;
        $('#depart').prop('disabled', true);
        $('#arrive').prop('disabled', false);
        oldName = busInfo.name;
    }

    function displayError() {
        $('#info').find('span').text('Error');
        $('#depart').prop('disabled', true);
        $('#arrive').prop('disabled', true);
    }

    return {
        depart,
        arrive
    };
}
let result = solve();
