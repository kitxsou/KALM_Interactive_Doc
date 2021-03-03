import { Screen } from "../model/Screen.js";
import { setCurrentScreen } from "../../main.js";
import { Choice } from "../model/Choice.js";
import { iHaveToGoButton, restartButton } from "../sharedChoices.js";
import { screen11 } from "./screen11.js";
import { screen2 } from "./screen2.js";
import { screen3 } from "./screen3.js";

const choiceYesButton = new Choice(200, 200, 100, 100, "Rettungsgasse bilden", () =>
  setCurrentScreen(screen3)
);

const choiceNoButton = new Choice(400, 200, 100, 100, "nicht bilden", () =>
  setCurrentScreen(screen11) // Trailer Bad End
);

const choiceWhoButton = new Choice(600, 200, 100, 100, "Ich will erst mal wissen wer du bist.", () =>
  setCurrentScreen(screen2)
);

function show() {
  clear();
  image(kalmempty, 0,0,windowWidth, windowWidth * 0.5625);
  text("Ich bin Kalm und übernehme ab jetzt. \nBitte helfe, indem du eine Rettungsgasse bildest.", 500, 500);
  restartButton.show();
  choiceYesButton.show();
  choiceNoButton.show();
  choiceWhoButton.show();
}

function mouseClicked() {
  restartButton.mouseClicked();
  choiceYesButton.mouseClicked();
  choiceNoButton.mouseClicked();
  choiceWhoButton.mouseClicked();
}

export const kalmScreen = new Screen(show, mouseClicked);