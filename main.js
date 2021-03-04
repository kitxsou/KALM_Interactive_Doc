import { startScreen } from "./src/screens/startScreen.js";
import { kalmScreen } from "./src/screens/kalmScreen.js";
import { screen5 } from "./src/screens/screen5.js";
import { hiScreen } from "./src/screens/hiScreen.js";

//let currentScreen = startScreen;
let currentScreen = hiScreen;

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
