function attachEventsListeners() {
    const units = { km: 1000, m: 1, cm: 0.01, mm: 0.001, mi: 1609.34, yrd: 0.9144, ft: 0.3048, in: 0.0254 };

    document.getElementById('convert').addEventListener('click', isConvert);

    function isConvert() {
        let inputDistance = document.getElementById('inputDistance');
        let inputUnit = document.getElementById('inputUnits');

        let outputDistance = document.getElementById('outputDistance');
        let outputUnit = document.getElementById('outputUnits');

        outputDistance.value = calculate(inputDistance, inputUnit, outputUnit);
    }

    function calculate(inputDistance, inputUnit, outputUnit) {
        let convertToMeters = Number(inputDistance.value) * units[inputUnit.value];
        return convertToMeters / units[outputUnit.value];
    }
}