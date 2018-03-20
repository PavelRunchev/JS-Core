function stopwatch(){
    let output = document.getElementById('time');
    let startButton = document.getElementById('startBtn');
    startButton.addEventListener('click', startPressed);
    let stopButton = document.getElementById('stopBtn');
    stopButton.addEventListener('click', stopPressed);
    let timer = null;
    let seconds = 0;

    function outputTime(value){
        output.textContent = ('0' + Math.trunc(value / 60)).slice(-2)
            + ":" + ('0' + (value % 60)).slice(-2);
    }

    function tick() {
        seconds++;
        outputTime(seconds);
    }

    function startPressed(event) {
        seconds = 0;
        outputTime(seconds);
        startButton.disabled = true;
        stopButton.disabled = false;
        timer = setInterval(tick, 1000);
    }

    function stopPressed() {
        startButton.disabled = false;
        stopButton.disabled = true;
        clearInterval(timer);
    }
}