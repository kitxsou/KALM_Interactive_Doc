import { setCurrentScreen } from "../../main.js";
import { Choice } from "../model/Choice.js";
import { Screen } from "../model/Screen.js";
import {screen4} from "./screen4.js"
import {screen5} from "./screen5.js"

let choiceYesButton;
let choiceNoButton;

let yButtonBig = window.innerHeight / 3.5;
let yButtonSmall = window.innerHeight / 9;

let buttonWidthBig = window.innerWidth / 5;
let buttonWidthSmall = window.innerWidth / 6;

let buttonHeightBig = 80;
let buttonHeightSmall = 60;

if(window.innerWidth <= 1024) {
  choiceYesButton = new Choice(- window.innerWidth / 5, yButtonSmall, buttonWidthSmall, buttonHeightSmall, "Klar!", () =>
    setCurrentScreen(screen5)
  );

  choiceNoButton = new Choice(window.innerWidth / 5, yButtonSmall, buttonWidthSmall, buttonHeightSmall, "Ich bin mir nicht ganz \nsicher, zeigst du es mir \nnochmal?", () =>
    setCurrentScreen(screen4)
  );


} else if (window.innerWidth > 1024) {
    choiceYesButton = new Choice(- window.innerWidth / 6, yButtonBig, buttonWidthBig, buttonHeightBig, "Klar!", () =>
      setCurrentScreen(screen5)
    );

    choiceNoButton = new Choice(window.innerWidth / 6, yButtonBig, buttonWidthBig, buttonHeightBig, "Ich bin mir nicht ganz sicher, \nzeigst du es mir nochmal?", () =>
      setCurrentScreen(screen4)
    );
}


function show() {
  clear();
  image(kalmempty, 0,0,windowWidth, windowWidth * 0.5625);

  if(window.innerWidth <= 1024) {
   text("Weißt du, wie man eine Rettungsgasse bildet?", windowWidth / 2, windowHeight / 2);
  } else if (window.innerWidth > 1024) {
     text("Weißt du, wie man eine Rettungsgasse bildet?", windowWidth / 2, windowHeight / 2 + windowHeight / 8);
  }

  choiceYesButton.show();
  choiceNoButton.show();
}

function mouseClicked() {
  choiceYesButton.mouseClicked();
  choiceNoButton.mouseClicked();
}

export const screen3 = new Screen(show, mouseClicked);
