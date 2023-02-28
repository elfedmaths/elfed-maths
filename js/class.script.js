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

// Side Menu Options
var selectBtn = document.querySelectorAll('.menu > ul > li > ul > li > button');
selectBtn.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    genQuest(e.target.id);
    var allmenu = document.querySelectorAll('.submenu');
    allmenu.forEach(function(elem){
      elem.previousElementSibling.classList.remove('selected');
    });
    var submenu = e.target.parentElement.parentElement.previousElementSibling;
    submenu.classList.add('selected');
  });
});

// Generate Questions
function genQuest(id){
  var quest1, quest2, quest3, quest4, quest5;
  switch (id) {
    case 'btn-set-a':
      quest1 = getCalc('int-add');
      quest2 = getCalc('int-mult');
      quest3 = getCalc('perc-find-1');
      quest4 = getCalc('alg-simp-1');
      quest5 = getCalc('seq-mult');
      break;
    case 'btn-set-b':
      quest1 = getCalc('int-mult');
      quest2 = getCalc('dec-add');
      quest3 = getCalc('perc-find-2');
      quest4 = getCalc('int-sub');
      quest5 = getCalc('frac-simp');
      break;
    case 'btn-set-c':
      quest1 = getCalc('dec-sub');
      quest2 = getCalc('int-div');
      quest3 = getCalc('dec-mult');
      quest4 = getCalc('perc-find-3');
      quest5 = getCalc('alg-simp-2');
      break;
    case 'btn-set-d':
      quest1 = getCalc('neg-add');
      quest2 = getCalc('round-dec');
      quest3 = getCalc('perc-inc');
      quest4 = getCalc('frac-add');
      quest5 = getCalc('alg-sub');
      break;
    case 'btn-set-e':
      quest1 = getCalc('round-sig');
      quest2 = getCalc('seq-term');
      quest3 = getCalc('perc-dec');
      quest4 = getCalc('frac-sub');
      quest5 = getCalc('alg-solve-1');
      break;
    case 'btn-set-f':
      quest1 = getCalc('ooo-add-sub');
      quest2 = getCalc('round-sig-dec');
      quest3 = getCalc('perc-mult');
      quest4 = getCalc('frac-mult');
      quest5 = getCalc('alg-solve-2');
      break;
    case 'btn-set-g':
      quest1 = getCalc('ooo-mult-div');
      quest2 = getCalc('alg-exp');
      quest3 = getCalc('neg-div');
      quest4 = getCalc('seq-nth');
      quest5 = getCalc('frac-div');
      break;
    case 'btn-set-h':
      quest1 = getCalc('frac-amount');
      quest2 = getCalc('dec-div');
      quest3 = getCalc('neg-sub');
      quest4 = getCalc('neg-mult');
      quest5 = getCalc('alg-fact');
      break;

    default:
      break;
  }
  // Update Questions
  document.getElementById('question-1').innerHTML = quest1[0];
  document.getElementById('question-2').innerHTML = quest2[0];
  document.getElementById('question-3').innerHTML = quest3[0];
  document.getElementById('question-4').innerHTML = quest4[0];
  document.getElementById('question-5').innerHTML = quest5[0];
  // Update Answers
  document.getElementById('answer-1').innerHTML = quest1[1];
  document.getElementById('answer-2').innerHTML = quest2[1];
  document.getElementById('answer-3').innerHTML = quest3[1];
  document.getElementById('answer-4').innerHTML = quest4[1];
  document.getElementById('answer-5').innerHTML = quest5[1];
}