import { Screen } from "../model/Screen.js";
import { iHaveToGoButtonBig, iHaveToGoButtonSmall, restartButtonBig, restartButtonSmall } from "../sharedChoices.js";

function show() {
  clear();
  image(kalmempty, 0,0,windowWidth, windowWidth * 0.5625);
  text(
    "Alles klar! Bleib Kalm und fahr vorsichtig. Der Einsatzwagen wird gleich an dir vorbei fahren.",
    500,
    500
  );

  if(window.innerWidth <= 1024) {
   restartButtonSmall.show();
  } else if (window.innerWidth > 1024) {
    restartButtonBig.show();
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
