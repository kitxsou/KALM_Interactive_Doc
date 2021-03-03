import { Screen } from "../model/Screen.js";
import { setCurrentScreen } from "../../main.js";
import { Choice } from "../model/Choice.js";
import { iHaveToGoButtonBig, iHaveToGoButtonSmall, restartButtonBig, restartButtonSmall } from "../sharedChoices.js";
import { screen11 } from "./screen11.js";
import { screen2 } from "./screen2.js";
import { screen3 } from "./screen3.js";
import { polygons } from "../../assets/wabern.js";

let choiceYesButton;
let choiceNoButton;
let choiceWhoButton;

let yButtonBig = window.innerHeight / 3.5;
let yButtonSmall = window.innerHeight / 9;

let buttonWidthBig = window.innerWidth / 5;
let buttonWidthSmall = window.innerWidth / 6;

let buttonHeightBig = 80;
let buttonHeightSmall = 60;

if(window.innerWidth <= 1024) {
  choiceYesButton = new Choice(- window.innerWidth / 4, yButtonSmall, buttonWidthSmall, buttonHeightSmall, "Rettungsgasse bilden", () =>
  setCurrentScreen(screen3)
  );

  choiceNoButton = new Choice(0, yButtonSmall, buttonWidthSmall, buttonHeightSmall, "nicht bilden", () =>
  setCurrentScreen(screen11) // Trailer Bad End
  );

  choiceWhoButton = new Choice(window.innerWidth / 4, yButtonSmall, buttonWidthSmall, buttonHeightSmall, "Ich will erst mal \nwissen wer du bist.", () =>
  setCurrentScreen(screen2)
  );

} else if (window.innerWidth > 1024) {
    choiceYesButton = new Choice(- window.innerWidth / 4, yButtonBig, buttonWidthBig, buttonHeightBig, "Rettungsgasse bilden", () =>
    setCurrentScreen(screen3)
    );

    choiceNoButton = new Choice(0, yButtonBig, buttonWidthBig, buttonHeightBig, "nicht bilden", () =>
    setCurrentScreen(screen11) // Trailer Bad End
    );

    choiceWhoButton = new Choice(window.innerWidth / 4, yButtonBig, buttonWidthBig, buttonHeightBig, "Ich will erst mal wissen wer du bist.", () =>
    setCurrentScreen(screen2)
    );
}

function show() {
  clear();
  image(kalmempty, 0,0,windowWidth, windowWidth * 0.5625);
  
  choiceYesButton.show();
  choiceNoButton.show();
  choiceWhoButton.show();

  if(window.innerWidth <= 1024) {
   text("Ich bin Kalm und übernehme ab jetzt. \nBitte helfe, indem du eine Rettungsgasse bildest.", windowWidth / 2, windowHeight / 2);
   restartButtonSmall.show();
   polygons(0, -180, 1.4, color(253, 112, 87), color(82, 70, 248), 160, 0.01);
  } else if (window.innerWidth > 1024) {
    text("Ich bin Kalm und übernehme ab jetzt. \nBitte helfe, indem du eine Rettungsgasse bildest.", windowWidth / 2, windowHeight / 2 + windowHeight / 8);
    restartButtonBig.show();
    polygons(0, -150, 2.4, color(253, 112, 87), color(82, 70, 248), 160, 0.01);
  }
}

function mouseClicked() {
  restartButtonBig.mouseClicked();
  restartButtonSmall.mouseClicked();
  choiceYesButton.mouseClicked();
  choiceNoButton.mouseClicked();
  choiceWhoButton.mouseClicked();
}

export const kalmScreen = new Screen(show, mouseClicked);