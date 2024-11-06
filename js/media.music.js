document.getElementById('audioSelect').addEventListener('change', function(){
    var select = document.getElementById('audioSelect').value;
    var source = document.getElementById('audioSrc');
    source.src = select;
    var audio = document.getElementById('audio');
    audio.load();
    audio.play();
});