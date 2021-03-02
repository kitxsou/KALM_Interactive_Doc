import { Screen } from "../model/Screen.js";
import { setCurrentScreen } from "../../main.js";
import { iHaveToGoButton, restartButton } from "../sharedChoices.js";
import { Choice } from "../model/Choice.js";
import { kalmScreen } from "./kalmScreen.js";

const goOnButton = new Choice(400, 200, 100, 100, "weiter", () =>
  setCurrentScreen(kalmScreen)
);

function show() {
  clear();
  text("Hallo ich bin Peter und ich muss gleich an dir vorbei.", 500, 500);
  restartButton.show();
  goOnButton.show();
}

function mouseClicked() {
  restartButton.mouseClicked();
  goOnButton.mouseClicked();
}

export const peterScreen = new Screen(show, mouseClicked);
