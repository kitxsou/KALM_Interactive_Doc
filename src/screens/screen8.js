import { setCurrentScreen } from "../../main.js";
import { Choice } from "../model/Choice.js";
import { Screen } from "../model/Screen.js";
import {screen9} from "./screen9.js"
import {screen10} from "./screen10.js"
import {screen11} from "./screen11.js"
import { polygons } from "../../assets/wabern.js";

let choiceHowWorkButton;
let choiceTellMoreButton;
let choiceGoOnButton;

let yButtonBig = window.innerHeight / 3.5;
let yButtonSmall = window.innerHeight / 9;

let buttonWidthBig = window.innerWidth / 5;
let buttonWidthSmall = window.innerWidth / 6;

let buttonHeightBig = 80;
let buttonHeightSmall = 60;

if(window.innerWidth <= 1024) {
  choiceHowWorkButton = new Choice(- window.innerWidth / 4, yButtonSmall, buttonWidthSmall, buttonHeightSmall, "Okay, ist doch ganz interessant. \n Wie funktionierst du?", () =>
  setCurrentScreen(screen9)
  );

  choiceTellMoreButton = new Choice(0, yButtonSmall, buttonWidthSmall, buttonHeightSmall, "Erzähl mir mehr!", () =>
  setCurrentScreen(screen10)
  );

  choiceGoOnButton = new Choice(window.innerWidth / 4, yButtonSmall, buttonWidthSmall, buttonHeightSmall, "Okay, ich muss weiter.", () =>
  setCurrentScreen(screen11)
  );

} else if (window.innerWidth > 1024) {
    choiceHowWorkButton = new Choice(- window.innerWidth / 4, yButtonBig, buttonWidthBig, buttonHeightBig, "Okay, ist doch ganz interessant. \n Wie funktionierst du?", () =>
    setCurrentScreen(screen9)
    );

    choiceTellMoreButton = new Choice(0, yButtonBig, buttonWidthBig, buttonHeightBig, "Erzähl mir mehr!", () =>
    setCurrentScreen(screen10)
    );

    choiceGoOnButton = new Choice(window.innerWidth / 4, yButtonBig, buttonWidthBig, buttonHeightBig, "Okay, ich muss weiter.", () =>
    setCurrentScreen(screen11)
    );
}

function show() {
  clear();
  image(kalmempty, 0,0,windowWidth, windowWidth * 0.5625);

  choiceHowWorkButton.show();
  choiceTellMoreButton.show();
  choiceGoOnButton.show();

 if (window.innerWidth <= 1024) {
    text(
      "Ja das kann sein, allerdings zeigt eine Umfrage des DRK, dass in 80% eine Rettungsgasse \nnicht oder zu spät gebildet wird. Dabei gehen wertvolle Minuten verloren, die die Retter dringend brauchen.",
      windowWidth / 2,
      windowHeight / 2
    );
    polygons(0, -180, 1.4, color(253, 112, 87), color(82, 70, 248), 160, 0.01);
  } else if (window.innerWidth > 1024) {
    text(
      "Ja das kann sein, allerdings zeigt eine Umfrage des DRK, dass in 80% eine Rettungsgasse \nnicht oder zu spät gebildet wird. Dabei gehen wertvolle Minuten verloren, die die Retter dringend brauchen.",
      windowWidth / 2,
      windowHeight / 2 + windowHeight / 8
    );
    polygons(0, -150, 2.4, color(253, 112, 87), color(82, 70, 248), 160, 0.01);
  }
}

function mouseClicked() {
  choiceHowWorkButton.mouseClicked();
  choiceTellMoreButton.mouseClicked();
  choiceGoOnButton.mouseClicked();
}

export const screen8 = new Screen(show, mouseClicked);
