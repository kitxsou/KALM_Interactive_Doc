import { Screen } from "../model/Screen.js";
import { iHaveToGoButton, restartButton } from "../sharedChoices.js";

function show() {
  clear();
  text("Hallo ich bin Peter und ich muss gleich an dir vorbei.", 500, 500);
  restartButton.show();
  iHaveToGoButton.show();
}

function mouseClicked() {
  restartButton.mouseClicked();
  iHaveToGoButton.mouseClicked();
}

export const peterScreen = new Screen(show, mouseClicked);
