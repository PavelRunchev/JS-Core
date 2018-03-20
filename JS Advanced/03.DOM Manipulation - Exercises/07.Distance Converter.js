function attachEventsListeners() {
    document.getElementById('convert')
        .addEventListener('click', convert);
    let rates = {
        'km': 1000,
        'm': 1,
        'cm': 0.01,
        'mm': 0.001,
        'mi': 1609.34,
        'yrd': 0.9144,
        'ft': 0.3048,
        'in': 0.0254
    };

    function convert(){
        let incomingNumber = Number(document.getElementById('inputDistance').value);
        let inUnits = document.getElementById('inputUnits').value;
        let outUnits = document.getElementById('outputUnits').value;
        let result = incomingNumber * (rates[inUnits] / rates[outUnits]);
        document.getElementById('outputDistance').value = result;
    }
}