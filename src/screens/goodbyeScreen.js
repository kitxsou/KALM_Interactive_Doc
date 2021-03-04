import { Screen } from "../model/Screen.js";

import { iHaveToGoButtonBig, iHaveToGoButtonSmall, restartButtonBig, restartButtonSmall} from "../sharedChoices.js";




function show() {
  clear();
  textSize(50);
  //textAlign(CENTER,CENTER);
  text("Impressum", window.innerWidth / 2, window.innerHeight / 5);
  textSize(16);
  text("Text", window.innerWidth / 2, window.innerHeight / 2);

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

export const goodbyeScreen = new Screen(show, mouseClicked);
