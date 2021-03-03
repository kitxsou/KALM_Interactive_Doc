import { setCurrentScreen } from "../../main.js";
import { Choice } from "../model/Choice.js";
import { Screen } from "../model/Screen.js";
import {screen4} from "./screen4.js"
import {screen5} from "./screen5.js"

const choiceA = new Choice(400, 200, 100, 100, "Klar!", () =>
  setCurrentScreen(screen5)
);

const choiceB = new Choice(200, 200, 100, 100, "Ich bin mir nicht ganz sicher, zeigst du es mir nochmal?", () =>
setCurrentScreen(screen4)
);

function show() {
  clear();
  image(kalmempty, 0,0,windowWidth, windowWidth * 0.5625);
  text("Weißt du, wie man eine Rettungsgasse bildet?", 500, 500);
  choiceA.show();
  choiceB.show();
}

function mouseClicked() {
  choiceA.mouseClicked();
  choiceB.mouseClicked();
}

export const screen3 = new Screen(show, mouseClicked);
