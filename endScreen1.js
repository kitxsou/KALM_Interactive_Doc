import { Screen } from "../model/Screen.js";
import { setCurrentScreen } from "../../main.js";
import { iHaveToGoButtonBig, iHaveToGoButtonSmall, restartButtonBig, restartButtonSmall} from "../sharedChoices.js";
import { Choice } from "../model/Choice.js";
import { endScreen2 } from "./endScreen2.js";

let goOnButton;

if(window.innerWidth <= 1024) {
  goOnButton = new Choice(window.innerWidth / 2.6, window.innerHeight / 4.5, 80, 40, "weiter", () =>
   setCurrentScreen(endScreen2)
  );
} else if (window.innerWidth > 1024) {
   goOnButton = new Choice(window.innerWidth / 2.6, window.innerHeight / 2.2, 100, 60, "weiter", () =>
   setCurrentScreen(endScreen2)
  );
}

function show() {
  clear();
  image(konzept, 0 ,0 , windowWidth, windowWidth * 0.5625);

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

export const endScreen1 = new Screen(show, mouseClicked);
