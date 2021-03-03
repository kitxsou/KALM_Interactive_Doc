function endGame(ending) {
  console.log(ending);
  change("game", "hidden", "show");
  change("body", "overflow", "no-overflow");

  if (ending === "good") {
    change("badEndVideo", "hidden", "show");
    change("goodEndVideo", "show", "hidden");
  }
  if (ending === "bad") {
    change("goodEndVideo", "hidden", "show");
    change("badEndVideo", "show", "hidden");
  }
}

function restartGame() {
  console.log("restart");
  change("game", "show", "hidden");
  change("body", "no-overflow", "overflow");
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
