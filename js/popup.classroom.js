/* --- Index Page Popup --- */

const toggleButton = document.querySelector("#settings-menu");
const popupWindow = document.querySelector("#popup-window");
const popupBackground = document.querySelector("#popup-background");

toggleButton.addEventListener("click", function() {
    if(popupWindow.classList.contains("hidden")){
        popupWindow.classList.remove("hidden");
        popupBackground.classList.remove("hidden");
    }else{
        popupWindow.classList.add("hidden");
        popupBackground.classList.add("hidden");
    }
});

function closeWindow(){
    popupWindow.classList.add("hidden");
    popupBackground.classList.add("hidden");
}
