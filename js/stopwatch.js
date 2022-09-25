var seconds = 00; 
var tens = 00; 
var appendTens = document.getElementById("tens")
var appendSeconds = document.getElementById("seconds")
var buttonStart = document.getElementById('button-start');
var buttonStop = document.getElementById('button-stop');
var buttonReset = document.getElementById('button-reset');
var Interval ;
  
buttonStart.onclick = function() {
    clearInterval(Interval);
    Interval = setInterval(startStopwatch, 10);
    buttonStart.classList.add('hide');
    buttonStop.classList.remove('disabled', 'hide');
    buttonReset.classList.remove('disabled', 'hide');
}
    
buttonStop.onclick = function() {
    clearInterval(Interval);
    buttonStart.classList.remove('hide');
    buttonStop.classList.add('hide');
}
    
buttonReset.onclick = function() {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    buttonStart.classList.remove('hide');
    buttonStop.classList.remove('hide');
    buttonStop.classList.add('disabled');
    buttonReset.classList.add('disabled', 'hide');
}
    
function startStopwatch () {
    tens++; 
    if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9){
        appendTens.innerHTML = tens;
    } 
    if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }
    if (seconds > 9){
        appendSeconds.innerHTML = seconds;
    }
}