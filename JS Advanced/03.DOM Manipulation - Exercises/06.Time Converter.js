function attachEventsListeners(){

    document.getElementById('daysBtn').addEventListener('click', convertDays);
    document.getElementById('hoursBtn').addEventListener('click', convertHours);
    document.getElementById('minutesBtn').addEventListener('click', convertMinutes);
    document.getElementById('secondsBtn').addEventListener('click', convertSeconds);

    let days,  hours, minutes, seconds;
    function convertDays(){
        days = Number(document.getElementById('days').value);
        hours = days * 24;
        minutes = days * 1440;
        seconds = days * 86400;
        document.getElementById('hours').value = hours;
        document.getElementById('minutes').value = minutes;
        document.getElementById('seconds').value = seconds;
    }

    function convertHours() {
        hours = Number(document.getElementById('hours').value);
        minutes = hours * 60;
        seconds = minutes * 60;
        days = hours / 24;
        document.getElementById('minutes').value = minutes;
        document.getElementById('seconds').value = seconds;
        document.getElementById('days').value = days;
    }

    function convertMinutes() {
        minutes = Number(document.getElementById('minutes').value);
        seconds =  minutes * 60;
        hours = minutes / 60;
        days = hours / 24;
        document.getElementById('seconds').value = seconds;
        document.getElementById('hours').value = hours;
        document.getElementById('days').value = days;
    }

    function convertSeconds() {
        seconds = Number(document.getElementById('seconds').value);
        minutes =  seconds / 60;
        hours = minutes / 60;
        days = hours / 24;
        document.getElementById('minutes').value = minutes;
        document.getElementById('hours').value = hours;
        document.getElementById('days').value = days;
    }
}