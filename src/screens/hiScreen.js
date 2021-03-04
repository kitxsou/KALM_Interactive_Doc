import { setCurrentScreen } from "../../main.js";
import { Choice } from "../model/Choice.js";
import { Screen } from "../model/Screen.js";
import { peterScreen } from "./peterScreen.js";

import { startScreen } from "./startScreen.js";


let goOnButton;

if(window.innerWidth <= 1024) {
  goOnButton = new Choice(window.innerWidth / 2.6, window.innerHeight / 4.5, 80, 40, "Start", () =>
   setCurrentScreen(peterScreen)
  );
} else if (window.innerWidth > 1024) {
   goOnButton = new Choice(window.innerWidth / 2.6, window.innerHeight / 2.2, 100, 60, "Start", () =>
   setCurrentScreen(peterScreen)
  );
}


function show() {
  clear();
  goOnButton.show();
  textSize(50);
  //textAlign(CENTER,CENTER);
  text("Start", window.innerWidth / 2, window.innerHeight / 5);
  textSize(16);
  text("Text", window.innerWidth / 2, window.innerHeight / 2);

 
}

function mouseClicked() {
  goOnButton.mouseClicked();
}

export const hiScreen = new Screen(show, mouseClicked);
