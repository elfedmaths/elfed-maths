document.getElementById('start-timer').addEventListener('click', function(){
    const mins = document.getElementsByName("minutes");
    mins.forEach(min => {
        if(min.checked){
            startTimer(min.value);
            document.getElementById('stop-timer').classList.remove('disabled');
        }
    });
});

document.getElementById('stop-timer').addEventListener('click', function(){
    stopTimer();
    document.getElementById("timer").innerHTML = "00:00";
});

var x;

function startTimer(min){
    stopTimer();
    var countDownDate = addMinutes(min);
    x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        if(minutes < 10){ minutes = "0" + minutes; }
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if(seconds < 10){ seconds = "0" + seconds; }
        document.getElementById("timer").innerHTML = minutes + " : " + seconds;
        if (distance < 0) {
            stopTimer();
            document.getElementById("timer").innerHTML = "Time Up";
        }
    }, 1000);
}

function addMinutes(minutes) {
    return new Date(new Date().getTime() + minutes*60000);
}

function stopTimer(){
    document.getElementById('stop-timer').classList.add('disabled');
    clearInterval(x);
}