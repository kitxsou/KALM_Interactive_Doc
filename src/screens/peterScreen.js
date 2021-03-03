import { Screen } from "../model/Screen.js";
import { setCurrentScreen } from "../../main.js";
import { iHaveToGoButton, restartButton } from "../sharedChoices.js";
import { Choice } from "../model/Choice.js";
import { kalmScreen } from "./kalmScreen.js";

let goOnButton;

if(window.innerWidth <= 1024) {
  goOnButton = new Choice(window.innerWidth / 2.6, window.innerHeight / 4, 100, 60, "weiter", () =>
   setCurrentScreen(kalmScreen)
  );
} else if (window.innerWidth > 1024) {
   goOnButton = new Choice(window.innerWidth / 2.6, window.innerHeight / 2.2, 100, 60, "weiter", () =>
   setCurrentScreen(kalmScreen)
  );
}

function show() {
  clear();
  image(petersanitaeter, 0 ,0 , windowWidth, windowWidth * 0.5625);
  restartButton.show();
  goOnButton.show();
}

function mouseClicked() {
  restartButton.mouseClicked();
  goOnButton.mouseClicked();
}

export const peterScreen = new Screen(show, mouseClicked);
