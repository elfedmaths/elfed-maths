//Claswork Settings
const headElem = document.getElementById('classwork');
headElem.addEventListener('click', function() {
  if (headElem.innerHTML == "Gwaith Dosbarth") {
    document.getElementById('classwork').innerHTML = "Classwork";
  }else {
    document.getElementById('classwork').innerHTML = "Gwaith Dosbarth";
  }
});

// Date Settings
const dateElem = document.getElementById('date');
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const dateWelsh = new Date().toLocaleDateString('cy-GB', options);
const dateEng = new Date().toLocaleDateString('en-GB', options);
const dateNew = new Date();
const yyyy = dateNew.getFullYear();
let mm = dateNew.getMonth() + 1;
let dd = dateNew.getDate();
if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;
const dateNumeric = dd + '/' + mm + '/' + yyyy;
dateElem.innerHTML = dateNumeric;
dateElem.addEventListener('click', function() {
  if (dateElem.classList.contains('type-1')) {
    document.getElementById('date').innerHTML = dateWelsh;
    dateElem.classList.remove('type-1');
    dateElem.classList.add('type-2');
  }else if (dateElem.classList.contains('type-2')) {
    document.getElementById('date').innerHTML = dateEng;
    dateElem.classList.remove('type-2');
    dateElem.classList.add('type-3');
  }else if (dateElem.classList.contains('type-3')) {
    document.getElementById('date').innerHTML = dateNumeric;
    dateElem.classList.remove('type-3');
    dateElem.classList.add('type-1');
  }
});

let selectedTopic, numeracyQuestArr;

// Select Topic Options
var selectBtn = document.querySelectorAll('.option-btn');
selectBtn.forEach(function(btn) {
  btn.addEventListener('click', function(e){
    var allmenu = document.querySelectorAll('.option-btn');
    allmenu.forEach(function(elem){
      elem.classList.remove('selected');
    });
    btn.classList.add('selected');
    selectedTopic = btn.id;
  });
});

// New Quest Button
var newQuest = document.getElementById('new-quest-btn');
newQuest.addEventListener('click', newQuestions);
// Refresh All Quest
var refreshQuest = document.getElementById('refresh-quest');
refreshQuest.addEventListener('click', newQuestions);

// New Questions
function newQuestions(){
  hideAns();
  newNumeracyArr(selectedTopic);
  for (let i = 1; i <= 5; i++) {
    genQuest(i);
  }
  closeWindow();
}

// Specific Question
var questBtns = document.querySelectorAll('.quest-num');
questBtns.forEach(questBtn => {
  questBtn.addEventListener('click', function(elem){
    var questNum = elem.target.getAttribute('data-quest');
    hideAns();
    genQuest(questNum);
  })
});

// Numeracy Questions
function newNumeracyArr(type){
  var nfCount = 12;
  var nifCount = 10;
  var nihCount = 14;
  var nhCount = 10;
  switch(type) {
    case 'btn-set-nf':
      numeracyQuestArr = getRandomList(5,1,nfCount);
      numeracyQuestArr = numeracyQuestArr.map(i => 'nf' + i);
      break;
    case 'btn-set-nif':
      numeracyQuestArr = getRandomList(5,1,nifCount);
      numeracyQuestArr = numeracyQuestArr.map(i => 'nif' + i);
      break;
    case 'btn-set-nih':
      numeracyQuestArr = getRandomList(5,1,nihCount);
      numeracyQuestArr = numeracyQuestArr.map(i => 'nih' + i);
      break;
    case 'btn-set-nh':
      numeracyQuestArr = getRandomList(5,1,nhCount);
      numeracyQuestArr = numeracyQuestArr.map(i => 'nh' + i);
      break;
  }
}

//Toggle Answer
var questToggleBtns = document.querySelectorAll('.quest-val');
questToggleBtns.forEach(questToggleBtn => {
  questToggleBtn.addEventListener('click', function(elem){
    var ans = elem.target.nextElementSibling;
    if(ans.classList.contains('show')){
      ans.classList.remove('show');
    }else{
      ans.classList.add('show');
    }
  })
})

//Show-Hide Quest
var ansPane = document.querySelectorAll('.quest-ans');
var toggleAns = document.getElementById('show-ans');
var showIcon = document.getElementById('show-ans-icon');
var hideIcon = document.getElementById('hide-ans-icon');
toggleAns.addEventListener('click', function(){
  if(ansPane[0].classList.contains('show')){
    hideAns();
  }else{
    ansPane.forEach(ansRow => {
      ansRow.classList.add('show');
    });
    showIcon.classList.add('hidden');
    hideIcon.classList.remove('hidden');
  }
});

function hideAns(){
  var ansPane = document.querySelectorAll('.quest-ans');
  var showIcon = document.getElementById('show-ans-icon');
  var hideIcon = document.getElementById('hide-ans-icon');
  ansPane.forEach(ansRow => {
    ansRow.classList.remove('show');
  });
  showIcon.classList.remove('hidden');
  hideIcon.classList.add('hidden');
}

// Format Line Breaks
function formatStr(str){
  str = String(str);
  var brIndex = str.indexOf('<br>');
  if(brIndex >= 0){
    var charAfter = str.charAt(brIndex + 4);
    var charSrc = "<br>" + charAfter;
    str = str.replace(charSrc, " " + charAfter.toLowerCase());
  } 
  var nocalcIndex = str.indexOf('NOCALC');
  if(nocalcIndex >= 0){
    str = str.replace("NOCALC", "<img src='./img/non-calc-icon.svg' alt='No Calc' class='quest-icon'>");
  }
  var calcIndex = str.indexOf('CALC');
  if(calcIndex >= 0){
    str = str.replace("CALC", "<img src='./img/calc-icon.svg' alt='Calc' class='quest-icon'>");
  }
  return str;
};

// Generate Questions
function genQuest(questNum){
  var quest;
  questNum = parseInt(questNum);
  switch (true) {
    case ((selectedTopic === 'btn-set-a') && (questNum === 1)):
      quest = getCalc('int-add');
      break;
    case ((selectedTopic === 'btn-set-a') && (questNum === 2)):
      quest = getCalc('int-mult');
      break;
    case ((selectedTopic === 'btn-set-a') && (questNum === 3)):
      quest = getCalc('perc-find-1');
      break;
    case ((selectedTopic === 'btn-set-a') && (questNum === 4)):
      quest = getCalc('alg-simp-1');
      break;
    case ((selectedTopic === 'btn-set-a') && (questNum === 5)):
      quest = getCalc('seq-mult');
      break;
    case ((selectedTopic === 'btn-set-b') && (questNum === 1)):
      quest = getCalc('int-mult-2x2');
      break;
    case ((selectedTopic === 'btn-set-b') && (questNum === 2)):
      quest = getCalc('dec-add');
      break;
    case ((selectedTopic === 'btn-set-b') && (questNum === 3)):
      quest = getCalc('perc-find-2');
      break;
    case ((selectedTopic === 'btn-set-b') && (questNum === 4)):
      quest = getCalc('int-sub');
      break;
    case ((selectedTopic === 'btn-set-b') && (questNum === 5)):
      quest = getCalc('frac-simp');
      break;
    case ((selectedTopic === 'btn-set-c') && (questNum === 1)):
      quest = getCalc('dec-sub');
      break;
    case ((selectedTopic === 'btn-set-c') && (questNum === 2)):
      quest = getCalc('int-div');
      break;
    case ((selectedTopic === 'btn-set-c') && (questNum === 3)):
      quest = getCalc('dec-mult');
      break;
    case ((selectedTopic === 'btn-set-c') && (questNum === 4)):
      quest = getCalc('perc-find-3');
      break;
    case ((selectedTopic === 'btn-set-c') && (questNum === 5)):
      quest = getCalc('alg-simp-2');
      break;
    case ((selectedTopic === 'btn-set-d') && (questNum === 1)):
      quest = getCalc('neg-add');
      break;
    case ((selectedTopic === 'btn-set-d') && (questNum === 2)):
      quest = getCalc('round-dec');
      break;
    case ((selectedTopic === 'btn-set-d') && (questNum === 3)):
      quest = getCalc('perc-inc');
      break;
    case ((selectedTopic === 'btn-set-d') && (questNum === 4)):
      quest = getCalc('frac-add');
      break;
    case ((selectedTopic === 'btn-set-d') && (questNum === 5)):
      quest = getCalc('alg-sub');
      break;
    case ((selectedTopic === 'btn-set-e') && (questNum === 1)):
      quest = getCalc('round-sig');
      break;
    case ((selectedTopic === 'btn-set-e') && (questNum === 2)):
      quest = getCalc('seq-term');
      break;
    case ((selectedTopic === 'btn-set-e') && (questNum === 3)):
      quest = getCalc('perc-dec');
      break;
    case ((selectedTopic === 'btn-set-e') && (questNum === 4)):
      quest = getCalc('frac-sub');
      break;
    case ((selectedTopic === 'btn-set-e') && (questNum === 5)):
      quest = getCalc('alg-solve-1');
      break;
    case ((selectedTopic === 'btn-set-f') && (questNum === 1)):
      quest = getCalc('ooo-add-sub');
      break;
    case ((selectedTopic === 'btn-set-f') && (questNum === 2)):
      quest = getCalc('round-sig-dec');
      break;
    case ((selectedTopic === 'btn-set-f') && (questNum === 3)):
      quest = getCalc('perc-mult');
      break;
    case ((selectedTopic === 'btn-set-f') && (questNum === 4)):
      quest = getCalc('frac-mult');
      break;
    case ((selectedTopic === 'btn-set-f') && (questNum === 5)):
      quest = getCalc('alg-solve-2');
      break;
    case ((selectedTopic === 'btn-set-g') && (questNum === 1)):
      quest = getCalc('ooo-mult-div');
      break;
    case ((selectedTopic === 'btn-set-g') && (questNum === 2)):
      quest = getCalc('alg-exp');
      break;
    case ((selectedTopic === 'btn-set-g') && (questNum === 3)):
      quest = getCalc('neg-div');
      break;
    case ((selectedTopic === 'btn-set-g') && (questNum === 4)):
      quest = getCalc('seq-nth');
      break;
    case ((selectedTopic === 'btn-set-g') && (questNum === 5)):
      quest = getCalc('frac-div');
      break;
    case ((selectedTopic === 'btn-set-h') && (questNum === 1)):
      quest = getCalc('frac-amount');
      break;
    case ((selectedTopic === 'btn-set-h') && (questNum === 2)):
      quest = getCalc('dec-div');
      break;
    case ((selectedTopic === 'btn-set-h') && (questNum === 3)):
      quest = getCalc('neg-sub');
      break;
    case ((selectedTopic === 'btn-set-h') && (questNum === 4)):
      quest = getCalc('neg-mult');
      break;
    case ((selectedTopic === 'btn-set-h') && (questNum === 5)):
      quest = getCalc('alg-fact');
      break;
    //WJEC Numeracy Questions
    case ((selectedTopic === 'btn-set-nf')):
      quest = getCalcNum(numeracyQuestArr[questNum - 1]);
      break;
    case ((selectedTopic === 'btn-set-nif')):
      quest = getCalcNum(numeracyQuestArr[questNum - 1]);
      break;
    case ((selectedTopic === 'btn-set-nih')):
      quest = getCalcNum(numeracyQuestArr[questNum - 1]);
      break;
    case ((selectedTopic === 'btn-set-nh')):
      quest = getCalcNum(numeracyQuestArr[questNum - 1]);
      break;
    default:
      quest = ["-","-"];
      break;
  }

  // Update Questions & Answers
  if(questNum){
    document.getElementById(`question-${questNum}`).innerHTML = formatStr(quest[0]);
    document.getElementById(`answer-${questNum}`).innerHTML = formatStr(quest[1]);
  }

}