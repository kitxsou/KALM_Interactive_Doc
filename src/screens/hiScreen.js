import { setCurrentScreen } from "../../main.js";
import { Choice } from "../model/Choice.js";
import { Screen } from "../model/Screen.js";
import { peterScreen } from "./peterScreen.js";
import { startScreen } from "./startScreen.js";

let goOnButton;
let skipButton;
let goodEnd = "goodEnd";
if (window.innerWidth <= 1024) {
  goOnButton = new Choice(
    window.innerWidth / 2.6,
    window.innerHeight / 4.5,
    80,
    40,
    "Start",
    () => setCurrentScreen(startScreen)
  );
  skipButton = new Choice(
    window.innerWidth / 2.6,
    window.innerHeight / 4.5,
    80,
    40,
    "skip",
    () => setCurrentScreen(goodEnd)
  );
} else if (window.innerWidth > 1024) {
  goOnButton = new Choice(
    window.innerWidth / 2.6,
    window.innerHeight / 2.2,
    100,
    60,
    "Start",
    () => setCurrentScreen(startScreen)
  );
  skipButton = new Choice(
    window.innerWidth / 2.6,
    window.innerHeight / 4.5,
    100,
    60,
    "skip",
    () => setCurrentScreen(goodEnd)
  );
}

function show() {
  clear();

  image(willkommen, 0, 0, windowWidth, windowWidth * 0.5625);
  goOnButton.show();
  skipButton.show();
}

function mouseClicked() {
  goOnButton.mouseClicked();
  skipButton.mouseClicked();
}

export const hiScreen = new Screen(show, mouseClicked);
