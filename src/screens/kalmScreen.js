import { Screen } from "../model/Screen.js";
import { setCurrentScreen } from "../../main.js";
import { Choice } from "../model/Choice.js";
import { iHaveToGoButton, restartButton } from "../sharedChoices.js";
import { screen11 } from "./screen11.js";

const choiceYesButton = new Choice(400, 200, 100, 100, "Rettungsgasse bilden", () =>
  setCurrentScreen(screen11)
);

const choiceNoButton = new Choice(600, 200, 100, 100, "nicht bilden", () =>
  setCurrentScreen(screen11)
);

const choiceWhoButton = new Choice(200, 200, 100, 100, "Ich will erst mal wissen wer du bist.", () =>
  setCurrentScreen(screen11)
);

function show() {
  clear();
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