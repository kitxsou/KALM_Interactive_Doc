import { setCurrentScreen } from "../../main.js";
import { Choice } from "../model/Choice.js";
import { Screen } from "../model/Screen.js";
import {screen8} from "./screen8.js"
import {screen9} from "./screen9.js"


const choiceA = new Choice(400, 200, 100, 100, "Aber ich hab doch Augen und Ohren? \n Also ich hab kein Problem dabei.", () =>
  setCurrentScreen(screen8)
);

const choiceB = new Choice(200, 200, 100, 100, "Wie funktionierst du?", () =>
setCurrentScreen(screen9)
);


function show() {
  clear();
  image(kalmempty, 0,0,windowWidth, windowWidth * 0.5625);
  text("Ich bin Kalm und mein Ziel ist es, dir dabei zu helfen, auf eine entspannte und stressfreie Art eine Rettungsgasse zu bilden. So helfen wir dir und den Sanitätern dabei, ungehindert an euer Ziel zu gelangen, sodass keine Menschenleben gefährdet werden.", 500, 500);
  choiceA.show();
  choiceB.show();
  
}

function mouseClicked() {
  choiceA.mouseClicked();
  choiceB.mouseClicked();
 
}

export const screen7 = new Screen(show, mouseClicked);
