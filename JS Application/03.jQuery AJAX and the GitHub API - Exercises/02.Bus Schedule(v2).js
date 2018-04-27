let result = (function solve() {
    let currentId = 'depot';
    let oldName = '';

    function depart() {
        $.ajax({
            method: 'GET',
            url: `https://judgetests.firebaseio.com/schedule/${currentId}.json`
        }).then(function (res) {
            $('#info').find('span').text(`Next stop ${res.name}`);
            currentId = res.next;
            oldName = res.name;
            $('#depart').prop('disabled', true);
            $('#arrive').prop('disabled', false);
        }).catch(errorDisplay);
    }

    function arrive() {
        $('#info').find('span').text(`Arriving at ${oldName}`);
        $('#depart').prop('disabled', false);
        $('#arrive').prop('disabled', true);
    }

    function errorDisplay() {
        $('#info').find('span').text('Error');
        $('#depart').prop('disabled', true);
        $('#arrive').prop('disabled', true);
    }

    return {depart, arrive};
})();