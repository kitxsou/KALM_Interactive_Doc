import { Screen } from "../model/Screen.js";
import { restartButton } from "../sharedChoices.js";

function show() {
  clear();
  text(
    "Alles klar! Bleib Kalm und fahr vorsichtig. Der Einsatzwagen wird gleich an dir vorbei fahren.",
    500,
    500
  );

  restartButton.show();
}

function mouseClicked() {
  restartButton.mouseClicked();
}

export const screen11 = new Screen(show, mouseClicked);
