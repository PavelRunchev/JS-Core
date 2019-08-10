function attachEventsListeners() {
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    document.querySelector('#daysBtn').addEventListener('click', convertDays);
    document.getElementById('hoursBtn').addEventListener('click', convertHours);
    document.getElementById('minutesBtn').addEventListener('click', convertMinutes);
    document.getElementById('secondsBtn').addEventListener('click', convertSeconds);

    function convertDays() {
        hours.value = Number(days.value) * 24;
        minutes.value = Number(days.value) * 1440;
        seconds.value = Number(days.value) * 86400;
    }

    function  convertHours() {
        days.value = Number(hours.value) / 24;
        minutes.value = Number(hours.value) * 60;
        seconds.value = (Number(hours.value) * 60) * 60;
    }

    function convertMinutes() {
        days.value = (Number(minutes.value) / 60) / 24;
        hours.value = Number(minutes.value) / 60;
        seconds.value = Number(minutes.value) * 60;
    }

    function convertSeconds() {
        days.value = (Number(seconds.value / 60) / 60) / 24;
        hours.value = (Number(seconds.value)/ 60) / 60;
        minutes.value = Number(seconds.value) / 60;
    }
}
