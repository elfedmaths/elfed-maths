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
      
      break;
    case 'btn-set-c':
      
      break;
    case 'btn-set-d':
      
      break;
    case 'btn-set-e':
      
      break;
    case 'btn-set-f':
      
      break;
    case 'btn-set-g':
      
      break;
    case 'btn-set-h':
      
      break;

    default:
      break;
  }
  document.getElementById('question-1').innerHTML = quest1[0];
  document.getElementById('question-2').innerHTML = quest2[0];
  document.getElementById('question-3').innerHTML = quest3[0];
  document.getElementById('question-4').innerHTML = quest4[0];
  document.getElementById('question-5').innerHTML = quest5[0];
}