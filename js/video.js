var video = document.querySelectorAll('video');

video.forEach(play => play.addEventListener('click', () => {

    if(play.classList.contains('active')){
        play.classList.remove('active');
        play.controls = false;
        play.currentTime = 1;
        play.pause();
    }else{
        play.classList.add('active');
        play.controls = true;
    }

}));