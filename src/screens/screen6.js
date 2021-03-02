import { setCurrentScreen } from "../../main.js";
import { Choice } from "../model/Choice.js";
import { Screen } from "../model/Screen.js";
import {screen7} from "./screen7.js"
import {screen11} from "./screen11.js"


const choiceA = new Choice(400, 200, 100, 100, "Wer bist du?", () =>
  setCurrentScreen(screen7)
);

const choiceB = new Choice(200, 200, 100, 100, "Keine Fragen, ich muss weiter.", () =>
setCurrentScreen(screen11)
);


function show() {
  clear();
  text("Normalerweise würde ich dich jetzt fragen, ob du jemanden anrufen oder einen Termin verschieben willst. Da ich aber nur ein Test bin, lasse ich das \n Kann ich dir sonst noch weiterhelfen?", 500, 500);
  choiceA.show();
  choiceB.show();
  
}

function mouseClicked() {
  choiceA.mouseClicked();
  choiceB.mouseClicked();
 
}

export const screen6 = new Screen(show, mouseClicked);
