const NUMBER_OF_GUESSES = 6;
let guessesRemaining = NUMBER_OF_GUESSES;
let currentGuess = [];
let nextLetter = 0;
let strCorrect = newRandom().toLocaleLowerCase();
let lenCorrect = strCorrect.length;

function initGame(str){
  if(str){
    if(str.length<=10){
      strCorrect = str;
      lenCorrect = strCorrect.length;
    }else{
      document.getElementById("error-box").innerHTML = "Word not accepted!";
    }
  }
  initBoard();
}

function initBoard() {
  let board = document.getElementById("game-board");
  for (let i = 0; i < NUMBER_OF_GUESSES; i++) {
    let row = document.createElement("div");
    row.classList.add("letter-row");
    for (let j = 0; j < lenCorrect; j++) {
      let box = document.createElement("div");
      box.classList.add("letter-box");
      row.appendChild(box);
    }
    board.appendChild(row);
  }
}

function shadeKeyBoard(letter, color) {
  for (const elem of document.getElementsByClassName("keyboard-button")) {
    if (elem.textContent === letter) {
      let oldColor = elem.style.backgroundColor;
      if (oldColor === "green") {
        return;
      }
      if (oldColor === "yellow" && color !== "green") {
        return;
      }
      elem.style.backgroundColor = color;
      break;
    }
  }
}

function deleteLetter() {
  let row = document.getElementsByClassName("letter-row")[NUMBER_OF_GUESSES - guessesRemaining];
  let box = row.children[nextLetter - 1];
  box.textContent = "";
  box.classList.remove("filled-box");
  currentGuess.pop();
  nextLetter -= 1;
}

function checkGuess() {
  let row = document.getElementsByClassName("letter-row")[NUMBER_OF_GUESSES - guessesRemaining];
  let guessString = "";
  let rightGuess = Array.from(strCorrect);
  for (const val of currentGuess) {
    guessString += val;
  }
  if (guessString.length != lenCorrect) {
    document.getElementById("error-box").innerHTML = "Not enough letters!";
    return;
  }
  var letterColor = []
  for (let i = 0; i < lenCorrect; i++) {
    letterColor.push("gray");
  }
  //check green
  for (let i = 0; i < lenCorrect; i++) {
    if (rightGuess[i] == currentGuess[i]) {
      letterColor[i] = "green";
      rightGuess[i] = "#";
    }
  }
  //check yellow
  //checking guess letters
  for (let i = 0; i < lenCorrect; i++) {
    if (letterColor[i] == "green") continue;
    //checking right letters
    for (let j = 0; j < lenCorrect; j++) {
      if (rightGuess[j] == currentGuess[i]) {
        letterColor[i] = "yellow";
        rightGuess[j] = "#";
      }
    }
  }
  for (let i = 0; i < lenCorrect; i++) {
    let box = row.children[i];
    let delay = 250 * i;
    setTimeout(() => {
      //flip box
      animateCSS(box, "flipInX");
      //shade box
      box.style.backgroundColor = letterColor[i];
      shadeKeyBoard(guessString.charAt(i) + "", letterColor[i]);
    }, delay);
  }
  if (guessString === strCorrect) {
    document.getElementById("success-box").innerHTML = "You guessed right! Game over!";
    guessesRemaining = 0;
    return;
  } else {
    guessesRemaining -= 1;
    currentGuess = [];
    nextLetter = 0;
    document.getElementById("success-box").innerHTML = "";
    document.getElementById("error-box").innerHTML = "";
    if (guessesRemaining === 0) {
      document.getElementById("error-box").innerHTML = `You've run out of guesses! Game over!<br>The right word was: "${strCorrect}"`;
    }
  }
}

function insertLetter(pressedKey) {
  if (nextLetter === lenCorrect) {
    return;
  }
  pressedKey = pressedKey.toLowerCase();
  let row = document.getElementsByClassName("letter-row")[NUMBER_OF_GUESSES - guessesRemaining];
  let box = row.children[nextLetter];
  animateCSS(box, "pulse");
  box.textContent = pressedKey;
  box.classList.add("filled-box");
  currentGuess.push(pressedKey);
  nextLetter += 1;
}

const animateCSS = (element, animation, prefix = "animate__") =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    // const node = document.querySelector(element);
    const node = element;
    node.style.setProperty("--animate-duration", "0.3s");
    node.classList.add(`${prefix}animated`, animationName);
    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve("Animation ended");
    }
    node.addEventListener("animationend", handleAnimationEnd, { once: true });
  });

document.addEventListener("keyup", (e) => {
  if (!e.target.tagName || e.target.tagName.toLowerCase() !== 'input') {
    if (guessesRemaining === 0) {
      return;
    }
    let pressedKey = String(e.key);
    if (pressedKey === "Backspace" && nextLetter !== 0) {
      deleteLetter();
      return;
    }
    if (pressedKey === "Enter") {
      checkGuess();
      return;
    }
    let found = pressedKey.match(/[a-z]/gi);
    if (!found || found.length > 1) {
      return;
    } else {
      insertLetter(pressedKey);
    }
  }
});

document.getElementById("keyboard-cont").addEventListener("click", (e) => {
  const target = e.target;
  if (!target.classList.contains("keyboard-button")) {
    return;
  }
  let key = target.textContent;
  if (key === "Del") {
    key = "Backspace";
  }
  document.dispatchEvent(new KeyboardEvent("keyup", { key: key }));
});

var refreshBtn = document.getElementById("refresh-btn");
refreshBtn.addEventListener("click", function(){
  const url = window.location.href.split("?")[0];
  window.location.href = url;
})

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
if(params.get("txt")){
  const str = atob(params.get("txt"));
  const regex = /^[a-zA-Z]{4,10}$/;
  if (regex.test(str)) {
    initGame(str);
  } else {
    initGame();
    document.getElementById("error-box").innerHTML = "Word not accepted!";
  }
}else{
  initGame();
}