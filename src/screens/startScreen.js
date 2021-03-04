import { setCurrentScreen } from "../../main.js";
import { Choice } from "../model/Choice.js";
import { Screen } from "../model/Screen.js";
import { peterScreen } from "./peterScreen.js";



let goOnButton;

if(window.innerWidth <= 1024) {
  goOnButton = new Choice(window.innerWidth / 2.6, window.innerHeight / 4.5, 80, 40, "Start", () =>
   setCurrentScreen(peterScreen)
  );
} else if (window.innerWidth > 1024) {
   goOnButton = new Choice(window.innerWidth / 2.6, window.innerHeight / 2.2, 100, 60, "Start", () =>
   setCurrentScreen(peterScreen)
  );
}


function show() {
  clear();
  textSize(windowWidth /50);
  text("Du bist auf einer viel befahrenen Bundesstraße unterwegs und kommst in einen Stau. \n Schon seit einigen Minuten bewegt sich nichts mehr und du fängst langsam an dich zu ärgern,\n da du dabei bist, einen wichtigen Termin zu verpassen.",windowWidth /2, windowHeight/2.5);
  textSize(windowWidth /40);
  text("Plötzlich bekommst du eine Meldung über KALM...",windowWidth /2, windowHeight/2);
  
  goOnButton.show();
}

function mouseClicked() {
  goOnButton.mouseClicked();
}

export const startScreen = new Screen(show, mouseClicked);
