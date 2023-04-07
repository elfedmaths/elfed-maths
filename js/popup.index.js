const popupBtns = document.querySelectorAll(".popup-menu");
const popupContainers = document.querySelectorAll(".popup-window");
const popupBackground = document.querySelector("#popup-background");

if(popupBtns){
    popupBtns.forEach(popupBtn => {
        popupBtn.addEventListener('click', function(){
            var popupContainer = document.getElementById(popupBtn.dataset.id);
            if(popupContainer.classList.contains('hidden')){
                popupBackground.classList.remove('hidden');
                popupContainer.classList.remove('hidden');
            }else{
                popupBackground.classList.add('hidden');
                popupContainer.classList.add('hidden');
            }
        });
    });
}

function closeWindow(){
    popupContainers.forEach(popupContainer => {
        popupContainer.classList.add("hidden");
    });
    popupBackground.classList.add("hidden");
}

const timerToggleBtn = document.querySelector("#timer-menu");
const hoverWindows = document.querySelectorAll(".hover-window");

if(timerToggleBtn){
    timerToggleBtn.addEventListener("click", function(){
        var currArr = [], allOff = true;
        hoverWindows.forEach(hoverWindow => {
            isDragging = false;
            hoverWindow.style.left = "0px";
            hoverWindow.style.top = "0px";
            if(hoverWindow.classList.contains('show')){
                currArr.push(1);
                allOff = false;
            }else{
                currArr.push(0);
            }
        });
        if(allOff){
            currArr[0] = 1;
        }else{
            for (let i = currArr.length - 1; i >= 0; i--) {
                currArr[i] = currArr[i-1];
            }
            currArr[0] = 0;
        }
        for (let i = 0; i < currArr.length; i++) {
            if(currArr[i] == 1){
                hoverWindows[i].classList.add('show');
            }else{
                hoverWindows[i].classList.remove('show');
            }
        }
    });
}