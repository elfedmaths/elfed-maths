/* --- Activities Page Popup --- */

const contentBoxes = document.querySelectorAll(".content-box");
contentBoxes.forEach((contentBox) => {
  if(contentBox.id != "fixed-content"){
    contentBox.addEventListener("click", function() {
      var contentBack = contentBox.querySelector(".background");
      var contentText = contentBox.querySelector(".content");
      var contentTitle = contentBox.querySelector("h2");
      if (contentBack.classList.contains("hidden")) {
        contentBack.classList.remove("hidden");
        contentText.classList.remove("hidden");
        contentTitle.classList.add("hidden-mobile");
        //textFit(contentText.querySelectorAll('h3'));
        //textFit(contentText.querySelectorAll('p'),{multiline:false});
        //textFit(contentText.querySelectorAll('.stopwatch p'),{multiline:true});
      } else {
        contentBack.classList.add("hidden");
        contentText.classList.add("hidden");
        contentTitle.classList.remove("hidden-mobile");
      }
    });
  }
});
