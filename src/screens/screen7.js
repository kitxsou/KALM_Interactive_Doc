import { setCurrentScreen } from "../../main.js";
import { Choice } from "../model/Choice.js";
import { Screen } from "../model/Screen.js";
import {screen8} from "./screen8.js"
import {screen9} from "./screen9.js"
import { polygons } from "../../assets/wabern.js";
import { iHaveToGoButtonBig, iHaveToGoButtonSmall, restartButtonBig, restartButtonSmall} from "../sharedChoices.js";

let choiceDoubtButton;
let choiceHowButton;

let yButtonBig = window.innerHeight / 3.5;
let yButtonSmall = window.innerHeight / 9;

let buttonWidthBig = window.innerWidth / 5;
let buttonWidthSmall = window.innerWidth / 6;

let buttonHeightBig = 80;
let buttonHeightSmall = 60;

if(window.innerWidth <= 1024) {
  choiceDoubtButton = new Choice(- window.innerWidth / 5, yButtonSmall, buttonWidthSmall, buttonHeightSmall, "Aber ich hab doch \nAugen und Ohren?", () =>
    setCurrentScreen(screen8)
  );

  choiceHowButton = new Choice(window.innerWidth / 5, yButtonSmall, buttonWidthSmall, buttonHeightSmall, "Wie funktionierst du?", () =>
    setCurrentScreen(screen9)
  );


} else if (window.innerWidth > 1024) {
    choiceDoubtButton = new Choice(- window.innerWidth / 6, yButtonBig, buttonWidthBig, buttonHeightBig, "Aber ich hab doch \nAugen und Ohren?", () =>
      setCurrentScreen(screen8)
    );

    choiceHowButton = new Choice(window.innerWidth / 6, yButtonBig, buttonWidthBig, buttonHeightBig, "Wie funktionierst du?", () =>
      setCurrentScreen(screen9)
    );
}

function show() {
  clear();
  image(kalmempty, 0,0,windowWidth, windowWidth * 0.5625);


  choiceDoubtButton.show();
  choiceHowButton.show();

 if (window.innerWidth <= 1024) {
    restartButtonSmall.show();
    text(
      "Ich bin Kalm und mein Ziel ist es, dir dabei zu helfen, auf eine entspannte \nund stressfreie Art eine Rettungsgasse zu bilden. So helfen wir dir und den Sanitätern dabei, \nungehindert an euer Ziel zu gelangen, sodass keine Menschenleben gefährdet werden.",
      windowWidth / 2,
      windowHeight / 2
    );
    polygons(0, -180, 1.4, color(253, 112, 87), color(82, 70, 248), 160, 0.01);
  } else if (window.innerWidth > 1024) {
    restartButtonBig.show();
    text(
      "Ich bin Kalm und mein Ziel ist es, dir dabei zu helfen, auf eine entspannte \nund stressfreie Art eine Rettungsgasse zu bilden. So helfen wir dir und den Sanitätern dabei, \nungehindert an euer Ziel zu gelangen, sodass keine Menschenleben gefährdet werden.",
      windowWidth / 2,
      windowHeight / 2 + windowHeight / 8
    );
    polygons(0, -150, 2.4, color(253, 112, 87), color(82, 70, 248), 160, 0.01);
  }

  
}

function mouseClicked() {

  if(window.innerWidth <= 1024) {
    restartButtonSmall.mouseClicked();
  } else if (window.innerWidth > 1024) {
      restartButtonBig.mouseClicked();
  }

  choiceDoubtButton.mouseClicked();
  choiceHowButton.mouseClicked();
 
}

export const screen7 = new Screen(show, mouseClicked);
