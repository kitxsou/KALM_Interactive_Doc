import { startScreen } from "./src/screens/startScreen.js";
import { peterScreen } from "./src/screens/peterScreen.js";
import { screen8 } from "./src/screens/screen8.js";
let currentScreen = screen8;

export function setCurrentScreen(newScreen) {
  currentScreen = newScreen;
  newScreenSound.play();
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
