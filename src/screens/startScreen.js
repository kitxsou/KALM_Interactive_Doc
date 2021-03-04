import { setCurrentScreen } from "../../main.js";
import { Choice } from "../model/Choice.js";
import { Screen } from "../model/Screen.js";
import { peterScreen } from "./peterScreen.js";

const choiceA = new Choice(100, 400, 100, 100, "weiter", () =>
  setCurrentScreen(peterScreen)
);

function OnEndVideo(){
  traileranfang.hide();
  setCurrentScreen(peterScreen);
}

function show() {
  // clear();
  // choiceA.show();
  clear();
  traileranfang.play();
  traileranfang.size(windowWidth, windowWidth * 0.5625);
  traileranfang.noLoop();
  traileranfang.onended(OnEndVideo);
}

function mouseClicked() {
  choiceA.mouseClicked();
}

export const startScreen = new Screen(show, mouseClicked);
