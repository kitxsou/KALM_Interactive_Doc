import { setCurrentScreen } from "../main.js";
import { Choice } from "./model/Choice.js";
import { screen11 } from "./screens/screen11.js";
import { startScreen } from "./screens/startScreen.js";

// returns to startscreen
export const restartButton = new Choice(300, 300, 100, 100, "neu starten", () =>
  setCurrentScreen(startScreen)
);

export const iHaveToGoButton = new Choice(
  500,
  500,
  200,
  200,
  "Ich muss weiter.",
  () => setCurrentScreen(screen11)
);
