function stopwatch() {

    let time = document.getElementById('time');
    let startButton = document.getElementById('startBtn');
    let stopButton = document.getElementById('stopBtn');
    let timer = null;
    let seconds = 0;

    startButton.addEventListener('click', start);
    stopButton.addEventListener('click', stop);

    function start(ev) {
        seconds = 0;
        proccessTime(seconds);

        startButton.disabled = true;
        stopButton.disabled = false;
        timer = setInterval(tick, 1000);
    }

    function stop(ev) {
        startButton.disabled = false;
        stopButton.disabled = true;
        clearInterval(timer);
    }

    function tick() {
        seconds++;
        proccessTime(seconds);
    }

    function proccessTime(value){
        time.textContent = ('0' + Math.trunc(value / 60)).slice(-2) + ":" + ('0' + (value % 60)).slice((-2));
    }
}