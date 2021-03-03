import { setCurrentScreen } from "../main.js";
import { Choice } from "./model/Choice.js";
import { screen11 } from "./screens/screen11.js";
import { startScreen } from "./screens/startScreen.js";

// returns to startscreen
 export const restartButtonSmall = new Choice(window.innerWidth / 2.6, window.innerHeight / 4.5, 80, 40, "Neu starten", () =>
   setCurrentScreen(startScreen)
 );

   export const restartButtonBig = new Choice(window.innerWidth / 2.6, window.innerHeight / 2.2, 100, 60, "Neu starten", () =>
   setCurrentScreen(startScreen)
  );

// der sitzt noch nicht richtig, müssen wir evtl eh in der jeweiligen Screen machen, weil der manchmal auf Screens mit zwei und manchmal auf Screens mit drei Buttons kommt
 export const iHaveToGoButtonSmall = new Choice(window.innerWidth / 2.6, window.innerHeight / 4.5, 80, 40, "Ich muss weiter", () =>
   setCurrentScreen(screen11)
 );

   export const iHaveToGoButtonBig = new Choice(window.innerWidth / 2.6, window.innerHeight / 2.2, 100, 60, "ich muss weiter", () =>
   setCurrentScreen(screen11)
  );