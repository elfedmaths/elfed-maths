/*
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', function(){
        checkInputs();
    })
});

function checkInputs(){
    document.getElementById('confirm-right').classList.add('disabled');
    checkboxes.forEach(checkbox => {
        if(checkbox.checked){
            document.getElementById('confirm-right').classList.remove('disabled');
        };
    });
};

var arr = [];

var confirmLeft = false, confirmRight = false, minutes = "00";

document.getElementById('confirm-left').addEventListener('click', function(){
    if(!document.getElementById('confirm-left').classList.contains('disabled')){
        confirmLeft = true;
        document.getElementById('confirm-left').classList.add('hide');
        document.getElementById('confirmed-left').classList.remove('hide');
        if(document.querySelector('input[name="timer-opt"]:checked').value == "timed"){
            var mins = document.getElementsByName("minutes");
            mins.forEach(min => {
                if(min.checked){
                    minutes = min.value;
                }
            });
            if(minutes < 10){ minutes = "0" + minutes; }
            document.getElementById("timer").style.display = "block";
            document.getElementById("timer").innerHTML = minutes + " : 00";
        }else if(document.querySelector('input[name="timer-opt"]:checked').value == "none"){
            document.getElementById("timer").style.display = "none";
        }else if(document.querySelector('input[name="timer-opt"]:checked').value == "custom"){
            document.getElementById("timer").style.display ="none";
        }
        confirm();
    }
});

document.getElementById('confirm-right').addEventListener('click', function(){
    if(!document.getElementById('confirm-right').classList.contains('disabled')){
        confirmRight = true;
        document.getElementById('confirm-right').classList.add('hide');
        document.getElementById('confirmed-right').classList.remove('hide');
        confirm();
    }
});

function confirm(){
    if(confirmLeft && confirmRight){
        document.getElementById('center').style.display = "flex";
    }
}

document.getElementById('start-timer-quest').addEventListener('click', function(){
    clearData();
    if(document.querySelector('input[name="timer-opt"]:checked').value == "timed"){
        const mins = document.getElementsByName("minutes");
        mins.forEach(min => {
            if(min.checked){
                minutes = min.value;
            }
        });
        if(minutes < 10){ minutes = "0" + minutes; }
        document.getElementById("timer").style.display ="block";
        document.getElementById("timer").innerHTML = minutes + " : 00";
        startTimer(minutes);
    }else if(document.querySelector('input[name="timer-opt"]:checked').value == "none"){
        document.getElementById("timer").style.display ="none";
    }else if(document.querySelector('input[name="timer-opt"]:checked').value == "custom"){
        document.getElementById("timer").style.display ="none";
    }
    document.getElementById('start-timer-quest').classList.add('disabled');
    document.getElementById('stop-timer-quest').classList.remove('disabled');
    document.getElementById("input-num").disabled = false;
    newChallenge();
});

document.getElementById('stop-timer-quest').addEventListener('click', function(){
    stopTimer();
    stopChallenge();
    document.getElementById('start-timer-quest').classList.remove('disabled');
    document.getElementById('stop-timer-quest').classList.add('disabled');
    document.getElementById("timer").innerHTML = "00 : 00";
});

document.getElementById('input-num').addEventListener('change', function(){
    checkAns(document.getElementById('input-num').value);
});

function newChallenge(){
    arr = [];
    checkboxes.forEach(checkbox => {
        if(checkbox.checked){
            arr.push(checkbox.value);
        }
    });
    var func = getCalc(arr[randomInt(0, arr.length - 1)]);
    var quest = func[0];
    var ans = func[1];
    document.getElementById('question').innerHTML = quest;
    textFit(document.getElementById('question'));
    addAns(ans);
    document.getElementById('input-num').value = "";
    document.getElementById('input-num').focus();
}

function stopChallenge(){
    document.getElementById("input-num").disabled = true;
    if (localStorage.getItem("score") !== null) {
        document.getElementById('question').innerHTML = "Score : " + localStorage.getItem("score");
        textFit(document.getElementById('question'));
        clearData();
    }
}

function addAns(answer){
    try {
        localStorage["answer"] = answer;
    } catch (e) {
        alert("Error when writing to Local Storage\n" + e);
    }
    var score = 0;
    if (localStorage.getItem("score") !== null) {
        score = localStorage.getItem('score');
    }
    try {
        localStorage["score"] = score;
    } catch (e) {
        alert("Error when writing to Local Storage\n" + e);
    }
}

function checkAns(ans){
    if (localStorage.getItem("answer") !== null) {
        var answer = localStorage.getItem('answer');
        if(ans === answer){
            var score = 0;
            if (localStorage.getItem("score") !== null) {
                score = localStorage.getItem('score');
            }
            try {
                localStorage["score"] = parseInt(score) + 1;
            } catch (e) {
                alert("Error when writing to Local Storage\n" + e);
            }
            newChallenge();
        }else{
            document.getElementById('input-num').value = "";
            document.getElementById('input-num').focus();
        }
    }    
}


*/
