import { Screen } from "../model/Screen.js";
import { iHaveToGoButtonBig, iHaveToGoButtonSmall, restartButtonBig, restartButtonSmall} from "../sharedChoices.js";

function show() {
  clear();
  image(end, 0 ,0 , windowWidth, windowWidth * 0.5625);

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

export const endScreen3 = new Screen(show, mouseClicked);
