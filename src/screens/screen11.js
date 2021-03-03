import { Screen } from "../model/Screen.js";
import { iHaveToGoButtonBig, iHaveToGoButtonSmall, restartButtonBig, restartButtonSmall } from "../sharedChoices.js";
import { polygons } from "../../assets/wabern.js";

function show() {
  clear();
  image(kalmempty, 0,0,windowWidth, windowWidth * 0.5625);
 
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
}

export const screen11 = new Screen(show, mouseClicked);
