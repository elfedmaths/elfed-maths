var formatBtn = document.getElementById('format-btn');
var colorContainer = document.getElementById('color-picker-container');
var colorPicker = document.getElementById('color-picker');
var fontContainer = document.getElementById('font-size-container');
var fontDecrease = document.getElementById('font-decrease-btn');
var fontIncrease = document.getElementById('font-increase-btn');
var classroom = document.getElementById('classroom');

formatBtn.addEventListener('click', function(e){
    if(e.target.id !== 'color-picker' 
        && e.target.id !== 'font-decrease-btn'
        && e.target.id !== 'font-increase-btn'){
        if(colorContainer.classList.contains('show')){
            colorContainer.classList.remove('show');
            fontContainer.classList.remove('show');
        }else{
            colorContainer.classList.add('show');
            fontContainer.classList.add('show');
        }
    }
});

colorPicker.addEventListener('change', function(){
    document.body.style.background = colorPicker.value;
    classroom.style.background = colorPicker.value;
    colorContainer.classList.remove('show');
    fontContainer.classList.remove('show');
});

fontDecrease.addEventListener('click', function(){
    var currFontSize = parseInt(window.getComputedStyle(classroom).fontSize);
    var newFontSize = currFontSize - 2;
    if(newFontSize >= 6){
        classroom.style.fontSize = newFontSize + "px";
    }
});

fontIncrease.addEventListener('click', function(){
    var currFontSize = parseInt(window.getComputedStyle(classroom).fontSize);
    var newFontSize = currFontSize + 2;
    if(newFontSize <= 60){
        classroom.style.fontSize = newFontSize + "px";
    }
});