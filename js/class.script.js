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

var menuItems = document.querySelectorAll('.menu > ul > li');

menuItems.forEach(function(item) {
  item.addEventListener('click', function(e) {
    var submenu = e.target.nextElementSibling;
    if (submenu.classList.contains('submenu')) {
      e.preventDefault();
      if (submenu.style.display === 'block') {
        submenu.style.display = 'none';
      } else {
        submenu.style.display = 'block';
      }
    }
  });
});
