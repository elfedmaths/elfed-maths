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

function newQuest(){
    arr = [];
    document.getElementById('start-quest').value = "Next";
    checkboxes.forEach(checkbox => {
        if(checkbox.checked){
            arr.push(checkbox.value);
        }
    });
    var func = getFunction(arr[randomInt(0, arr.length - 1)]);
    var quest = func[0];
    var ans = func[1];
    document.getElementById('question').innerHTML = quest;
    textFit(document.getElementById('question'));
    addRow(quest, ans);
}

function getFunction(type){
    switch (type) {
        case 'add':
            var int1 = randomInt(1, 100);
            var int2 = randomInt(1, 100);
            var quest = int1 + " + " + int2;
            var ans = int1 + int2;
            break;
        case 'sub':
            var int2 = randomInt(2, 100);
            var int1 = randomInt(1, int2);
            var quest = int1 + " - " + int2;
            var ans = int1 - int2;
            break;
        case 'mult':
            var int1 = randomInt(1, 12);
            var int2 = randomInt(1, 12);
            var quest = int1 + " x " + int2;
            var ans = int1 * int2;
            break;
        case 'div':
            var int1 = randomInt(1, 12);
            var int2 = randomInt(1, 12);
            var quest = (int1 * int2) + " &divide; " + int2;
            var ans = int1;
            break;
        default:
            var quest = 'No Question Selected';
            var ans = '-';
            break;
    }
    return [quest, ans];
}