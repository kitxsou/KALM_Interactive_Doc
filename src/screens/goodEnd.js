import { Screen } from "../model/Screen.js";
import { setCurrentScreen } from "../../main.js";
import { iHaveToGoButtonBig, iHaveToGoButtonSmall, restartButtonBig, restartButtonSmall} from "../sharedChoices.js";
import { Choice } from "../model/Choice.js";
import { endScreen1 } from "./endScreen1.js";

let goOnButton;

if(window.innerWidth <= 1024) {
  goOnButton = new Choice(window.innerWidth / 2.6, window.innerHeight / 4.5, 80, 40, "weiter", () =>
   setCurrentScreen(endScreen1)
  );
} else if (window.innerWidth > 1024) {
   goOnButton = new Choice(window.innerWidth / 2.6, window.innerHeight / 2.2, 100, 60, "weiter", () =>
   setCurrentScreen(endScreen1)
  );
}

function show() {
  clear();
  //image(konzept, 0 ,0 , windowWidth, windowWidth * 0.5625);
  textSize(windowWidth /50);
  text("Vielen Dank für deine Kooperation!\n Durch deine rechtzeitige Reaktion konnte der Patientin das Leben gerettet werden \nund der Stau hat sich schnell wieder aufgelöst. \nDu bist rechtzeitig zu deinem Termin gekommen!",windowWidth /2, windowHeight/2);

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

export const goodEnd = new Screen(show, mouseClicked);
