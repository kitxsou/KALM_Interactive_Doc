import { startScreen } from "./src/screens/startScreen.js";
import { kalmScreen } from "./src/screens/kalmScreen.js";
import { screen5 } from "./src/screens/screen5.js";
import { hiScreen } from "./src/screens/hiScreen.js";
import { screen2 } from "./src/screens/screen2.js";
import { peterScreen } from "./src/screens/peterScreen.js";
import { endScreen1 } from "./src/screens/endScreen1.js";
import { goodEnd } from "./src/screens/goodEnd.js";
import { badEnd } from "./src/screens/badEnd.js";

//let currentScreen = startScreen;
let currentScreen = kalmScreen;

export function setCurrentScreen(newScreen) {
  if (newScreen === badEnd || newScreen === "badEnd") {
    localStorage.setItem("end", "badEnd");
    window.location.replace("index.html");
  } else if (newScreen === goodEnd || newScreen === "goodEnd") {
    localStorage.setItem("end", "goodEnd");
    window.location.href = "index.html";
  } else {
    currentScreen = newScreen;
    newScreenSound.play();
  }
}

window.setup = () => {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  getAudioContext().resume().catch(console.error);
};

window.windowResized = () => {
  resizeCanvas(windowWidth, windowHeight);
};

window.draw = () => {
  currentScreen.show();
};

window.mouseClicked = function () {
  currentScreen.mouseClicked();
};
