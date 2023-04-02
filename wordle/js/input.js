var textForm = document.getElementById('text-form');
var textInput = document.getElementById('txt');
var textBtn = document.getElementById('text-btn');

//Toggle Text Input
textBtn.addEventListener('click', function(){
    if(textForm.classList.contains('hidden')){
        textForm.classList.remove('hidden');
        textInput.focus();
    }else{
        textForm.classList.add('hidden');
    }
});

//Encode Text Before Submitting
textInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    var input = document.getElementById("txt").value;
    var encodedInput = btoa(input);
    textInput.value = encodedInput;
    textForm.submit();
  }
});