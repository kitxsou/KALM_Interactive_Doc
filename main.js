import { startScreen } from "./src/screens/startScreen.js";
import { peterScreen } from "./src/screens/peterScreen.js";

let currentScreen = startScreen;

export function setCurrentScreen(newScreen) {
  currentScreen = newScreen;
}

window.setup = () => {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
};

window.draw = () => {
  currentScreen.show();
};

window.mouseClicked = function () {
  currentScreen.mouseClicked();
};
