function timer() {
    let hours = $('#hours');
    let minutes = $('#minutes');
    let seconds = $('#seconds');
    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');
    let timer = undefined;
    startBtn.on('click', start);
    stopBtn.on('click', stop);

    function start() {
        if(!timer){
            timer = setInterval(step, 1000);
        }
    }

    function stop() {
        clearInterval(timer);
        timer = undefined;
    }

    let totalSeconds = 0;
    function step() {
        totalSeconds++;
        seconds.text(('0' + Math.floor(totalSeconds % 60)).slice(-2));
        let min = totalSeconds / 60;
        minutes.text(('0' + Math.floor(min % 60)).slice(-2));
        let hour = (totalSeconds / 3600);
        hours.text(('0' + Math.floor(hour)).slice(-2));
    }
}