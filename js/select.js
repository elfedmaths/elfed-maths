const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', function(){
        checkInputs();
    })
});

function checkInputs(){
    document.getElementById('hide-quest').classList.remove('hide');
    document.getElementById('start-quest').classList.add('hide');
    checkboxes.forEach(checkbox => {
        if(checkbox.checked){
            document.getElementById('hide-quest').classList.add('hide');
            document.getElementById('start-quest').classList.remove('hide');
        };
    });
};

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
    document.getElementById('question').innerHTML = quest;
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
        document.getElementById("question").innerHTML = rows;
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
    }
}