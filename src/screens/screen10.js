import { setCurrentScreen } from "../../main.js";
import { Choice } from "../model/Choice.js";
import { Screen } from "../model/Screen.js";
import {screen9} from "./screen9.js"
import {screen11} from "./screen11.js"
import { polygons } from "../../assets/wabern.js";
import { iHaveToGoButtonBig, iHaveToGoButtonSmall, restartButtonBig, restartButtonSmall} from "../sharedChoices.js";


let choiceYesButton;
let choiceNoButton;

let yButtonBig = window.innerHeight / 3.5;
let yButtonSmall = window.innerHeight / 9;

let buttonWidthBig = window.innerWidth / 5;
let buttonWidthSmall = window.innerWidth / 6;

let buttonHeightBig = 80;
let buttonHeightSmall = 60;

if(window.innerWidth <= 1024) {
  choiceYesButton = new Choice(- window.innerWidth / 5, yButtonSmall, buttonWidthSmall, buttonHeightSmall, "Okay, ist doch ganz\n interessant. \n Wie funktionierst du?", () =>
    setCurrentScreen(screen9)
  );

  choiceNoButton = new Choice(window.innerWidth / 5, yButtonSmall, buttonWidthSmall, buttonHeightSmall, "Ich muss weiter.", () =>
    setCurrentScreen(screen11) // Trailer Bad End
  );


} else if (window.innerWidth > 1024) {
    choiceYesButton = new Choice(- window.innerWidth / 6, yButtonBig, buttonWidthBig, buttonHeightBig, "Okay, ist doch ganz interessant. \n Wie funktionierst du?", () =>
      setCurrentScreen(screen9)
    );

    choiceNoButton = new Choice(window.innerWidth / 6, yButtonBig, buttonWidthBig, buttonHeightBig, "Ich muss weiter.", () =>
      setCurrentScreen(screen11) // Trailer Bad End
    );
}


function show() {
  clear();
  image(kalmempty, 0,0,windowWidth, windowWidth * 0.5625);
  
  choiceYesButton.show();
  choiceNoButton.show();

  if(window.innerWidth <= 1024) {
    restartButtonSmall.show();
    text("Wenn du dich im Auto befindest, handelst du automatisch anonymer. \nGrund ist die eingeschränkte Kommunikation zwischen dir und anderen Verkehrsteilnehmenden. \n Ich bilde das Sprachrohr für dich und die Einsatzkräfte!", windowWidth / 2, windowHeight / 2);
    polygons(0, -180, 1.4, color(253, 112, 87), color(82, 70, 248), 160, 0.01);
   } else if (window.innerWidth > 1024) {
     restartButtonBig.show();
      text("Wenn du dich im Auto befindest, handelst du automatisch anonymer. \nGrund ist die eingeschränkte Kommunikation zwischen dir und anderen Verkehrsteilnehmenden. \n Ich bilde das Sprachrohr für dich und die Einsatzkräfte!", windowWidth / 2, windowHeight / 2 + windowHeight / 8);
      polygons(0, -150, 2.4, color(253, 112, 87), color(82, 70, 248), 160, 0.01);
  }
 
}

function mouseClicked() {

  if(window.innerWidth <= 1024) {
    restartButtonSmall.mouseClicked();
  } else if (window.innerWidth > 1024) {
      restartButtonBig.mouseClicked();
  }

  choiceYesButton.mouseClicked();
  choiceNoButton.mouseClicked();
}

export const screen10 = new Screen(show, mouseClicked);
