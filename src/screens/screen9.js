import { setCurrentScreen } from "../../main.js";
import { Choice } from "../model/Choice.js";
import { Screen } from "../model/Screen.js";
import {screen11} from "./screen11.js"
import { iHaveToGoButtonBig, iHaveToGoButtonSmall, restartButtonBig, restartButtonSmall} from "../sharedChoices.js";

let choiceHaveToGoButton;

let yButtonBig = window.innerHeight / 3.5;
let yButtonSmall = window.innerHeight / 9;

let buttonWidthBig = window.innerWidth / 5;
let buttonWidthSmall = window.innerWidth / 6;

let buttonHeightBig = 80;
let buttonHeightSmall = 60;

if (window.innerWidth <= 1024) {
  choiceHaveToGoButton = new Choice(
    0,
    yButtonSmall,
    buttonWidthSmall,
    buttonHeightSmall,
    "Verstehe, \ndanke für die Info",
    () => setCurrentScreen(screen11)
  );

 
} else if (window.innerWidth > 1024) {
  choiceHaveToGoButton = new Choice(
    0,
    yButtonBig,
    buttonWidthBig,
    buttonHeightBig,
    "Verstehe, danke für die Info",
    () => setCurrentScreen(screen11)
  );

}



function show() {
  clear();
  image(kalmempty, 0,0,windowWidth, windowWidth * 0.5625);
  
  if(window.innerWidth <= 1024) {
    restartButtonSmall.show();
    text("Ich berstehe aus zwei Modulen: eins im Einsatzwagen, eins in deinem Auto, die beide über Funk kommunizieren.\n  Sobald ein Einsatzwagen in deinem Umkreis ist, warne ich dich frühzeitig.", windowWidth / 2, windowHeight / 2);
    choiceHaveToGoButton.show();
   } else if (window.innerWidth > 1024) {
      restartButtonBig.show();
     text("Ich berstehe aus zwei Modulen: eins im Einsatzwagen, eins in deinem Auto, die beide über Funk kommunizieren.\n Sobald ein Einsatzwagen in deinem Umkreis ist, warne ich dich frühzeitig.", windowWidth / 2, windowHeight / 2 + windowHeight / 8);
     choiceHaveToGoButton.show();
   }
  
  
}

function mouseClicked() {

  if(window.innerWidth <= 1024) {
    restartButtonSmall.mouseClicked();
  } else if (window.innerWidth > 1024) {
      restartButtonBig.mouseClicked();
  }

  choiceHaveToGoButton.mouseClicked();
}

export const screen9 = new Screen(show, mouseClicked);
