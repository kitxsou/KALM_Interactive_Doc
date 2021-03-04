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
  textSize(windowWidth /50);
  text("Durch deine fehlende Kooperation hatte der Einsatzwagen große Probleme, \nzum Unfallort durchzukommen.",windowWidth /2, windowHeight/2.5);
  textSize(windowWidth /40);
  text("Durch die Verzögerung konnte das Leben der Patientin nicht mehr gerettet werden!",windowWidth /2, windowHeight/2);
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

export const badEnd = new Screen(show, mouseClicked);
