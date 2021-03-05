document.getElementById("beginVideo").addEventListener("ended", startGame);

let beginVideo = document.getElementById("beginVideo");

function playBeginVideo() {
  beginVideo.play();
  change("startGameBtn", "hidden", "hidden");
  change("startOverlay", "hidden", "hidden");
}

function startGame() {
  window.location.href = "game.html";
}

let hasGameFinished = localStorage.getItem("end" || "");
if (hasGameFinished === "badEnd" || hasGameFinished === "goodEnd") {
  endGame(hasGameFinished);
}
function endGame(ending) {
  console.log(ending);
  change("game", "hidden", "show");
  change("body", "overflow", "no-overflow");

  if (ending === "goodEnd") {
    change("badEndVideo", "hidden", "show");
    change("goodEndVideo", "show", "hidden");
  }
  if (ending === "badEnd") {
    change("goodEndVideo", "hidden", "show");
    change("badEndVideo", "show", "hidden");
  }
}

function restartGame() {
  console.log("restart");
  change("startGameBtn", "show", "hidden");
  change("game", "show", "hidden");
  change("body", "no-overflow", "overflow");

  localStorage.setItem("end", null);
  //scroll to the top
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function change(element, classToAdd, classToRemove) {
  let arr;
  let e = document.getElementById(element);
  e.classList.remove(classToAdd);
  e.classList.remove(classToRemove);

  n = classToAdd;
  arr = e.className.split(" ");
  if (arr.indexOf(n) == -1) {
    e.className += " " + n;
  }
}
