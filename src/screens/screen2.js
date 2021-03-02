import { setCurrentScreen } from "../../main.js";
import { Choice } from "../model/Choice.js";
import { Screen } from "../model/Screen.js";
import {screen3} from "./screen3.js"
import {screen4} from "./screen4.js"

const choiceA = new Choice(400, 200, 100, 100, "Oh stimmt, dann mach ich das mal.", () =>
  setCurrentScreen(screen3)
);

const choiceB = new Choice(200, 200, 100, 100, "Ne, beim nächsten mal vielleicht.", () =>
setCurrentScreen(screen4) // Trailer Bad End
);

function show() {
  clear();
  text("Dir ist schon klar, dass du gerade Leben gefährdest? \n Willst du nicht erst eine Rettungsgasse bilden?", 500, 500);
  choiceA.show();
  choiceB.show();
}

function mouseClicked() {
  choiceA.mouseClicked();
  choiceB.mouseClicked();
}

export const screen2 = new Screen(show, mouseClicked);
