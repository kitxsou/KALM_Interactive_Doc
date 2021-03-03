import { setCurrentScreen } from "../../main.js";
import { Choice } from "../model/Choice.js";
import { Screen } from "../model/Screen.js";
import { peterScreen } from "./peterScreen.js";

const choiceA = new Choice(-100, 0, 100, 100, "weiter", () =>
  setCurrentScreen(peterScreen)
);

const choiceB = new Choice(100, 0, 100, 100, "blabla", () =>
  alert("nur ein Test")
);

function show() {
  clear();
  choiceA.show();
  choiceB.show();
}

function mouseClicked() {
  choiceA.mouseClicked();
  choiceB.mouseClicked();
}

export const startScreen = new Screen(show, mouseClicked);
