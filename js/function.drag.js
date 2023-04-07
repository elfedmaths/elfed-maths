let isDragging = false;

const draggables = document.querySelectorAll(".draggable");

draggables.forEach((draggable) => {
    // Get the header element
    const header = draggable.querySelector(".top-drag");

    // Initialize variables
    let offsetX = 0;
    let offsetY = 0;

    // Add event listeners to the header element
    header.addEventListener("mousedown", onMouseDown);
    header.addEventListener("mouseup", onMouseUp);
    header.addEventListener("mousemove", onMouseMove);

    // Functions for handling mouse events
    function onMouseDown(event) {
        isDragging = true;
        offsetX = event.offsetX;
        offsetY = event.offsetY;
    }

    function onMouseUp() {
        isDragging = false;
    }

    function onMouseMove(event) {
        if (isDragging) {
            draggable.style.left = event.pageX - offsetX + "px";
            draggable.style.top = event.pageY - offsetY + "px";
        }
    }

});
