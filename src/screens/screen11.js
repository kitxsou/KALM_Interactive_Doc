import { Screen } from "../model/Screen.js";
import { setCurrentScreen } from "../../main.js";
import { Choice } from "../model/Choice.js";
import { iHaveToGoButtonBig, iHaveToGoButtonSmall, restartButtonBig, restartButtonSmall } from "../sharedChoices.js";
import { polygons } from "../../assets/wabern.js";
import { goodEnd } from "./goodEnd.js";

let goOnButton;
if(window.innerWidth <= 1024) {
  goOnButton = new Choice(window.innerWidth / 2.6, window.innerHeight / 4.5, 80, 40, "weiter", () =>
   setCurrentScreen(goodEnd)
  );
} else if (window.innerWidth > 1024) {
   goOnButton = new Choice(window.innerWidth / 2.6, window.innerHeight / 2.2, 100, 60, "weiter", () =>
   setCurrentScreen(goodEnd)
  );
}
function show() {
  clear();
  image(kalmempty, 0,0,windowWidth, windowWidth * 0.5625);
  goOnButton.show();
  if(window.innerWidth <= 1024) {
    text("Alles klar! Bleib Kalm und fahr vorsichtig. Der Einsatzwagen wird gleich an dir vorbei fahren.", windowWidth / 2, windowHeight / 2);
   restartButtonSmall.show();
   polygons(0, -180, 1.4, color(253, 112, 87), color(82, 70, 248), 160, 0.01);
  } else if (window.innerWidth > 1024) {
    text("Alles klar! Bleib Kalm und fahr vorsichtig. Der Einsatzwagen wird gleich an dir vorbei fahren.", windowWidth / 2, windowHeight / 2 + windowHeight / 8);
    restartButtonBig.show();
    polygons(0, -150, 2.4, color(253, 112, 87), color(82, 70, 248), 160, 0.01);
  }
  
}

function mouseClicked() {
  if(window.innerWidth <= 1024) {
   restartButtonSmall.mouseClicked();
  } else if (window.innerWidth > 1024) {
    restartButtonBig.mouseClicked();
  }
  goOnButton.mouseClicked();
}

export const screen11 = new Screen(show, mouseClicked);
