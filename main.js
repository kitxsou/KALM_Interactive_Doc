import { startScreen } from "./src/screens/startScreen.js";
import { peterScreen } from "./src/screens/peterScreen.js";
import { screen2 } from "./src/screens/screen2.js";
let currentScreen = screen2;

export function setCurrentScreen(newScreen) {
  currentScreen = newScreen;
}

window.setup = () => {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
};

window.windowResized =() => {
  resizeCanvas(windowWidth, windowHeight);
}

window.draw = () => {
  currentScreen.show();
};

window.mouseClicked = function () {
  currentScreen.mouseClicked();
};

