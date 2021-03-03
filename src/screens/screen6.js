import { setCurrentScreen } from "../../main.js";
import { Choice } from "../model/Choice.js";
import { Screen } from "../model/Screen.js";
import {screen7} from "./screen7.js"
import {screen11} from "./screen11.js"


let choiceWhoButton;
let choiceHaveToGoButton;

let yButtonBig = window.innerHeight / 3.5;
let yButtonSmall = window.innerHeight / 9;

let buttonWidthBig = window.innerWidth / 5;
let buttonWidthSmall = window.innerWidth / 6;

let buttonHeightBig = 80;
let buttonHeightSmall = 60;

if(window.innerWidth <= 1024) {
  choiceWhoButton = new Choice(- window.innerWidth / 5, yButtonSmall, buttonWidthSmall, buttonHeightSmall, "Wer bist du?", () =>
    setCurrentScreen(screen7)
  );

  choiceHaveToGoButton = new Choice(window.innerWidth / 5, yButtonSmall, buttonWidthSmall, buttonHeightSmall, "Keine Fragen, \nich muss weiter.", () =>
    setCurrentScreen(screen11)
  );


} else if (window.innerWidth > 1024) {
    choiceWhoButton = new Choice(- window.innerWidth / 6, yButtonBig, buttonWidthBig, buttonHeightBig, "Wer bist du?", () =>
      setCurrentScreen(screen7)
    );

    choiceHaveToGoButton = new Choice(window.innerWidth / 6, yButtonBig, buttonWidthBig, buttonHeightBig, "Keine Fragen, \nich muss weiter.", () =>
      setCurrentScreen(screen11)
    );
}


function show() {
  clear();
  image(kalmempty, 0,0,windowWidth, windowWidth * 0.5625);

  if(window.innerWidth <= 1024) {
   text("Normalerweise würde ich dich jetzt fragen, ob du jemanden anrufen oder \neinen Termin verschieben willst. Da ich aber nur ein Test bin, lasse ich das \n Kann ich dir sonst noch weiterhelfen?", windowWidth / 2, windowHeight / 2);
  } else if (window.innerWidth > 1024) {
     text("Normalerweise würde ich dich jetzt fragen, ob du jemanden anrufen oder \neinen Termin verschieben willst. Da ich aber nur ein Test bin, lasse ich das \n Kann ich dir sonst noch weiterhelfen?", windowWidth / 2, windowHeight / 2 + windowHeight / 8);
  }

  choiceWhoButton.show();
  choiceHaveToGoButton.show();
  
}

function mouseClicked() {
  choiceWhoButton.mouseClicked();
  choiceHaveToGoButton.mouseClicked();
 
}

export const screen6 = new Screen(show, mouseClicked);
