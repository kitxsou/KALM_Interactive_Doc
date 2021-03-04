import { setCurrentScreen } from "../../main.js";
import { Choice } from "../model/Choice.js";
import { Screen } from "../model/Screen.js";
import { peterScreen } from "./peterScreen.js";

let goOnButton;

if(window.innerWidth <= 1024) {
  goOnButton = new Choice(window.innerWidth / 2.6, window.innerHeight / 4.5, 80, 40, "weiter", () =>
   setCurrentScreen(kalmScreen)
  );
} else if (window.innerWidth > 1024) {
   goOnButton = new Choice(window.innerWidth / 2.6, window.innerHeight / 2.2, 100, 60, "weiter", () =>
   setCurrentScreen(kalmScreen)
  );
}
function OnEndVideo(){
  traileranfang.hide();
  setCurrentScreen(peterScreen);
}

function show() {
  // clear();
  // goOnButton.show();
  clear();
  // traileranfang.play();
  // traileranfang.size(windowWidth, windowWidth * 0.5625);
  // traileranfang.noLoop();
  // traileranfang.onended(OnEndVideo);
}

function mouseClicked() {
  goOnButton.mouseClicked();
}

export const startScreen = new Screen(show, mouseClicked);
