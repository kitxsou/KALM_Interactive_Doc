import { setCurrentScreen } from "../../main.js";
import { Choice } from "../model/Choice.js";
import { Screen } from "../model/Screen.js";
import {screen6} from "./screen6.js"



const choiceA = new Choice(400, 200, 100, 100, "Danke! Du bist ein Lebensretter :*", () =>
  setCurrentScreen(screen6)
);



function show() {
  clear();
  image(kalmempty, 0,0,windowWidth, windowWidth * 0.5625);
  text(":D", 500, 500);
  choiceA.show();
 
  
}

function mouseClicked() {
  choiceA.mouseClicked();
  
}

export const screen5 = new Screen(show, mouseClicked);
