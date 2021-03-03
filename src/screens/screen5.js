import { setCurrentScreen } from "../../main.js";
import { Choice } from "../model/Choice.js";
import { Screen } from "../model/Screen.js";
import {screen6} from "./screen6.js"

let goOnButton;

if(window.innerWidth <= 1024) {
  goOnButton = new Choice(window.innerWidth / 2.6, window.innerHeight / 4.5, 80, 40, "weiter", () =>
   setCurrentScreen(screen6)
  );
} else if (window.innerWidth > 1024) {
   goOnButton = new Choice(window.innerWidth / 2.6, window.innerHeight / 2.2, 100, 60, "weiter", () =>
   setCurrentScreen(screen6)
  );
}

function show() {
  clear();
  image(kalmempty, 0,0,windowWidth, windowWidth * 0.5625);
   if(window.innerWidth <= 1024) {
   text("Danke! Du bist ein Lebensretter :*", windowWidth / 2, windowHeight / 2);
  } else if (window.innerWidth > 1024) {
    text("Danke! Du bist ein Lebensretter :*", windowWidth / 2, windowHeight / 2 + windowHeight / 8);
  }
  goOnButton.show();
}

function mouseClicked() {
  goOnButton.mouseClicked();
}

export const screen5 = new Screen(show, mouseClicked);
