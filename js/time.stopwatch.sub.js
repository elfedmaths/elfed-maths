var seconds = 00; 
var tens = 00; 
let intervalId;

const stopwatchContainer = document.querySelectorAll(".stopwatch");
stopwatchContainer.forEach((stopwatchBtn) => {
  stopwatchBtn.addEventListener("click", function(event) {
    var appendTens = stopwatchBtn.querySelector("#tens");
    var appendSeconds = stopwatchBtn.querySelector("#seconds");
    if (!intervalId) { //Start Stopwatch
        clearInterval(intervalId);
        intervalId = setInterval(function(){
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
        }, 10);
    }else { //Reset Stopwatch
        clearInterval(intervalId);
        intervalId = null;
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }
    event.stopPropagation();
  });
});