import { setCurrentScreen } from "../../main.js";
import { Choice } from "../model/Choice.js";
import { Screen } from "../model/Screen.js";
import {screen9} from "./screen9.js"
import {screen11} from "./screen11.js"

const choiceA = new Choice(400, 200, 100, 100, "Okay, ist doch ganz interessant. \n Wie funktionierst du?", () =>
  setCurrentScreen(screen9)
);

const choiceB = new Choice(200, 200, 100, 100, "Ich muss weiter.", () =>
setCurrentScreen(screen11)
);

function show() {
  clear();
  image(kalmempty, 0,0,windowWidth, windowWidth * 0.5625);
  text("Wenn du dich im Auto befindest, handelst du automatisch anonymer. Grund ist die eingeschränkte Kommunikation zwischen dir und anderen Verkehrsteilnehmenden. Ich bilde das Sprachrohr für dich und die Einsatzkräfte!", 500, 500);
  choiceA.show();
  choiceB.show();
}

function mouseClicked() {
  choiceA.mouseClicked();
  choiceB.mouseClicked();
}

export const screen10 = new Screen(show, mouseClicked);
