import { startScreen } from "./src/screens/startScreen.js";
import { peterScreen } from "./src/screens/peterScreen.js";
import { screen6 } from "./src/screens/screen6.js";
let currentScreen = screen6;

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

