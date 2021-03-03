import { setCurrentScreen } from "../../main.js";
import { Choice } from "../model/Choice.js";
import { Screen } from "../model/Screen.js";
import {screen5} from "./screen5.js"


let goOnButton;

if(window.innerWidth <= 1024) {
  goOnButton = new Choice(window.innerWidth / 2.6, window.innerHeight / 4.5, 80, 40, "weiter", () =>
   setCurrentScreen(screen5)
  );
} else if (window.innerWidth > 1024) {
   goOnButton = new Choice(window.innerWidth / 2.6, window.innerHeight / 2.2, 100, 60, "weiter", () =>
   setCurrentScreen(screen5)
  );
}

function show() {
  clear();
  image(rettungsgasse, 10, 10,windowWidth, windowWidth * 0.5625);
 goOnButton.show();
 
  
}

function mouseClicked() {
  goOnButton.mouseClicked();
  
}

export const screen4 = new Screen(show, mouseClicked);
