var video = document.querySelectorAll('video');

video.forEach(play => play.addEventListener('click', () => {

    var clicked = play.classList.contains('active');

    video.forEach(box => {
        box.classList.remove('active');
        box.controls = false;
        box.currentTime = 1;
        box.pause();
    })

    if(clicked){
        play.classList.remove('active');
        play.controls = false;
        play.currentTime = 1;
        play.pause();
    }else{
        play.classList.add('active');
        play.controls = true;
    }

}));