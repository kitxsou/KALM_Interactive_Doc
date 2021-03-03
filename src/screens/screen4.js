import { setCurrentScreen } from "../../main.js";
import { Choice } from "../model/Choice.js";
import { Screen } from "../model/Screen.js";
import {screen5} from "./screen5.js"



const choiceA = new Choice(400, 200, 100, 100, "weiter", () =>
  setCurrentScreen(screen5)
);



function show() {
  clear();
  image(rettungsgasse, 10, 10,windowWidth, windowWidth * 0.5625);
  choiceA.show();
 
  
}

function mouseClicked() {
  choiceA.mouseClicked();
  
}

export const screen4 = new Screen(show, mouseClicked);
