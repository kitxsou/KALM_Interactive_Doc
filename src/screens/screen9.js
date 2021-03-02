import { setCurrentScreen } from "../../main.js";
import { Choice } from "../model/Choice.js";
import { Screen } from "../model/Screen.js";
import {screen11} from "./screen11.js"

const choiceA = new Choice(400, 200, 100, 100, "Verstehe, danke für die Info", () =>
  setCurrentScreen(screen11)
);


function show() {
  clear();
  text("Ich berstehe aus zwei Modulen: eins im Einsatzwagen, eins in deinem Auto, die beide über Funk kommunizieren. Sobald ein Einsatzwagen in deinem Umkreis ist, warne ich dich frühzeitig.", 500, 500);
  choiceA.show();
}

function mouseClicked() {
  choiceA.mouseClicked();
}

export const screen9 = new Screen(show, mouseClicked);
