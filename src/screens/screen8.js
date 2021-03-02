import { setCurrentScreen } from "../../main.js";
import { Choice } from "../model/Choice.js";
import { Screen } from "../model/Screen.js";
import {screen9} from "./screen9.js"
import {screen10} from "./screen10.js"
import {screen11} from "./screen11.js"

const choiceA = new Choice(400, 200, 100, 100, "Okay, ist doch ganz interessant. \n Wie funktionierst du?", () =>
  setCurrentScreen(screen9)
);

const choiceB = new Choice(200, 200, 100, 100, "Erzähl mir mehr!", () =>
setCurrentScreen(screen10)
);

const choiceC = new Choice(600, 200, 100, 100, "Okay, ich muss weiter.", () =>
setCurrentScreen(screen11)
);

function show() {
  clear();
  text("Ja das kann sein, allerdings zeigt eine Umfrage des DRK, dass in 80% eine Rettungsgasse nicht oder zu spät gebildet wird. Dabei gehen wertvolle Minuten verloren, die die Retter dringend brauchen. (Umfrage verlinken)", 500, 500);
  choiceA.show();
  choiceB.show();
  choiceC.show();
}

function mouseClicked() {
  choiceA.mouseClicked();
  choiceB.mouseClicked();
  choiceC.mouseClicked();
}

export const screen8 = new Screen(show, mouseClicked);
