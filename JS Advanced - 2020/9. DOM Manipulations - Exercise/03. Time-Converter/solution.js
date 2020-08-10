function attachEventsListeners() {
    let days = document.querySelector('#days');
    let hours = document.querySelector('#hours');
    let minutes = document.querySelector('#minutes');
    let seconds = document.querySelector('#seconds');

    document.querySelector('#daysBtn').addEventListener('click', convertDays);
    document.querySelector('#hoursBtn').addEventListener('click', convertHours);
    document.querySelector('#minutesBtn').addEventListener('click', convertMinutes);
    document.querySelector('#secondsBtn').addEventListener('click', convertSeconds);

    function convertDays() {
        hours.value = Number(days.value) * 24;
        minutes.value = Number(days.value) * 24 * 60;
        seconds.value = Number(days.value) * 24 * 60 * 60;
    }

    function convertHours() {
        days.value = Number(hours.value) / 24;
        minutes.value = Number(hours.value) * 60;
        seconds.value = Number(hours.value) * 60 * 60;
    }

    function convertMinutes() {
        days.value = Number(minutes.value) / 60 / 24;
        hours.value = Number(minutes.value) / 60;
        seconds.value = Number(minutes.value) * 60;
    }
    
    function convertSeconds() {
        days.value = Number(seconds.value) / 60 / 60 / 24;
        hours.value = Number(seconds.value) / 60 / 60;
        minutes.value = Number(seconds.value) / 60;
    }
}