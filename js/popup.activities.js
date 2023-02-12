/* --- Activities Page Popup --- */

const contentBoxes = document.querySelectorAll(".content-box");
contentBoxes.forEach((contentBox) => {
  contentBox.addEventListener("click", function() {
    var contentBack = contentBox.querySelector(".background");
    var contentText = contentBox.querySelector(".content");
    if (contentBack.classList.contains("hidden")) {
      contentBack.classList.remove("hidden");
      contentText.classList.remove("hidden");
      textFit(contentText.querySelectorAll('h3'));
      textFit(contentText.querySelectorAll('p'),{multiline:true});
      textFit(contentText.querySelectorAll('.stopwatch p'),{multiline:true});
    } else {
      contentBack.classList.add("hidden");
      contentText.classList.add("hidden");
    }
  });
});
