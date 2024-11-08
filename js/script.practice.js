// Initial Popup Forms & Buttons

const popupMenu1 = document.getElementById('popup-menu-1');
const popupMenu2 = document.getElementById('popup-menu-2');
const controlsPrac = document.getElementById('practice-controls');
const controlsChal = document.getElementById('challenge-controls');
const closeBtn = document.getElementById('close-quest-menu');
const noChallengeTopics = document.querySelectorAll('.no-challenge')

const practiceBtn = document.getElementById('practice-btn');
practiceBtn.addEventListener('click', function(){
    popupMenu1.classList.add('hidden');
    popupMenu2.classList.remove('hidden');
    controlsPrac.classList.remove('hidden');
    controlsChal.classList.add('hidden');
    closeBtn.classList.remove('hidden');
    closeBtn.classList.remove('hidden');
    noChallengeTopics.forEach(topic => {
        topic.style.display = 'block';
    })
    document.getElementById("question").innerHTML = "";
});

const challengeBtn = document.getElementById('challenge-btn');
challengeBtn.addEventListener('click', function(){
    popupMenu1.classList.add('hidden');
    popupMenu2.classList.remove('hidden');
    controlsPrac.classList.add('hidden');
    controlsChal.classList.remove('hidden');
    closeBtn.classList.remove('hidden');
    closeBtn.classList.remove('hidden');
    noChallengeTopics.forEach(topic => {
        topic.style.display = 'none';
    })
    document.getElementById("question").innerHTML = "";
});

closeBtn.addEventListener('click', function(){
    if(!closeBtn.classList.contains('disabled')){
        closeWindow();
    }
})

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', function(){
        checkInputs();
    })
});

function checkInputs(){
    document.getElementById('hide-quest').classList.remove('hide');
    document.getElementById('start-quest').classList.add('hide');
    document.getElementById('close-quest-menu').classList.add('disabled');
    checkboxes.forEach(checkbox => {
        if(checkbox.checked){
            document.getElementById('hide-quest').classList.add('hide');
            document.getElementById('start-quest').classList.remove('hide');
            document.getElementById('close-quest-menu').classList.remove('disabled');
        };
    });
};

// Practice Questions

var arr = [];

document.getElementById('start-quest').addEventListener('click', newQuest);
document.getElementById('stop-quest').addEventListener('click', stopQuest);
document.getElementById('clear-quest').addEventListener('click', clearQuest);

window.addEventListener("keydown", (event) => {
    if (event.defaultPrevented) {
        return;
    }
    switch (event.key) {
        case " ":
            newQuest();
            break;
        case "ArrowDown":
            newQuest();
            break;
        case "ArrowRight":
            newQuest();
            break;
        case "PageUp":
            newQuest();
            break;
        default:
        return;
    }
    event.preventDefault();
}, true);

function newQuest(){
    arr = [];
    document.getElementById('hide-quest').classList.add("hide");
    document.getElementById('start-quest').classList.remove("disabled", "hide");
    document.getElementById('stop-quest').classList.remove("disabled", "hide");
    document.getElementById('clear-quest').classList.add("hide");
    document.getElementById('start-quest').value = "Next";
    checkboxes.forEach(checkbox => {
        if(checkbox.checked){
            arr.push(checkbox.value);
        }
    });
    var func = getCalc(arr[randomInt(0, arr.length - 1)]);
    var quest = func[0];
    var ans = func[1];
    document.getElementById("question").innerHTML = quest;
    document.getElementById("question").style.display = "block";
    document.getElementById("answer").innerHTML = "";
    document.getElementById("answer").style.display = "none";
    textFit(document.getElementById('question'));
    addRow(quest, ans);
}

function stopQuest(){
    if(!document.getElementById('stop-quest').classList.contains('disabled')){
        document.getElementById('hide-quest').classList.add("hide");
        document.getElementById('start-quest').classList.remove("disabled", "hide");
        document.getElementById('stop-quest').classList.add("hide");
        document.getElementById('clear-quest').classList.remove("hide");
        var rows = "<table id='quest-table'><thead><th>Question</th><th>Answer</th></thead><tbody>";
        var data = fetchData();
        data.forEach(elem => {
            rows += "<tr><td>" + elem[0] + "</td><td>" + elem[1] + "</td></tr>";
        });
        rows += "</tbody></table>"
        document.getElementById("question").innerHTML = "";
        document.getElementById("question").style.display = "none";
        document.getElementById("answer").innerHTML = rows;
        document.getElementById("answer").style.display = "block";
    }
}

function clearQuest(){
    if(!document.getElementById('clear-quest').classList.contains('disabled')){
        checkInputs();
        document.getElementById('stop-quest').classList.remove("hide");
        document.getElementById('stop-quest').classList.add("disabled");
        document.getElementById('clear-quest').classList.add("hide");
        document.getElementById('start-quest').value = "Start";
        clearData();
        document.getElementById("question").innerHTML = "";
        document.getElementById("question").style.display = "none";
        document.getElementById("answer").innerHTML = "";
        document.getElementById("answer").style.display = "none";
    }
}

// Challenge Questions

document.getElementById('start-timer-quest').addEventListener('click', function(){
    clearData();
    document.getElementById('start-timer-quest').classList.add('disabled');
    document.getElementById('stop-timer-quest').classList.remove('disabled');
    document.getElementById("input-num").disabled = false;
    newChallenge();
});

document.getElementById('stop-timer-quest').addEventListener('click', function(){
    stopChallenge();
    document.getElementById('start-timer-quest').classList.remove('disabled');
    document.getElementById('stop-timer-quest').classList.add('disabled');
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
            document.getElementById('question').classList.add("flash-green");
			setTimeout(function() {
                document.getElementById('question').classList.remove("flash-green");
			}, 500);
            newChallenge();
        }else{
            document.getElementById('input-num').value = "";
            document.getElementById('question').classList.add("flash-red");
			setTimeout(function() {
                document.getElementById('question').classList.remove("flash-red");
			}, 500);
            document.getElementById('input-num').focus();
        }
    }    
}
