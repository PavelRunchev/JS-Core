function attachEventsListeners() {
    const unitsToMeters = { km: 1000, m: 1, cm: 0.01, mm: 0.001, mi: 1609.34, yrd: 0.9144, ft: 0.3048, in: 0.0254 };
    document.querySelector('#convert').addEventListener('click', convert);

    function convert(e) {
        const inputDistance = document.querySelector('#inputDistance').value;
        const inputUnits = document.querySelector('#inputUnits').value;
        const outputUnits = document.querySelector('#outputUnits').value;
        
        document.querySelector('#outputDistance').value = outputDistance(Number(inputDistance), inputUnits, outputUnits);
    }

    function outputDistance(distance, inputUnits, outputUnits) {
        return distance * unitsToMeters[inputUnits]  / unitsToMeters[outputUnits];
    }
}