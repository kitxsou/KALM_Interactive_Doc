import { Screen } from "../model/Screen.js";
import { setCurrentScreen } from "../../main.js";
import { iHaveToGoButtonBig, iHaveToGoButtonSmall, restartButtonBig, restartButtonSmall} from "../sharedChoices.js";
import { Choice } from "../model/Choice.js";
import { endScreen3 } from "./endScreen3.js";

let goOnButton;

if(window.innerWidth <= 1024) {
  goOnButton = new Choice(window.innerWidth / 2.6, window.innerHeight / 4.5, 80, 40, "weiter", () =>
   setCurrentScreen(endScreen3)
  );
} else if (window.innerWidth > 1024) {
   goOnButton = new Choice(window.innerWidth / 2.6, window.innerHeight / 2.2, 100, 60, "weiter", () =>
   setCurrentScreen(endScreen3)
  );
}

function show() {
  clear();
  image(technik, 0 ,0 , windowWidth, windowWidth * 0.5625);

  if(window.innerWidth <= 1024) {
   restartButtonSmall.show();
  } else if (window.innerWidth > 1024) {
    restartButtonBig.show();
  }

  goOnButton.show();
}

function mouseClicked() {
  if(window.innerWidth <= 1024) {
    restartButtonSmall.mouseClicked();
  } else if (window.innerWidth > 1024) {
      restartButtonBig.mouseClicked();
  }

  goOnButton.mouseClicked();
}

export const endScreen2 = new Screen(show, mouseClicked);
