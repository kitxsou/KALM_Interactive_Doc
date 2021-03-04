let petersanitaeter;
let rettungsgasse;
let kalmempty;
//let startscreen;

//let traileranfang;
// let badEnd;
// let goodEnd;

let myFont;

let clickSound;
let newScreenSound;

function preload() {
  petersanitaeter = loadImage("./assets/images/kalm_petersanitaeter.png");
  rettungsgasse = loadImage("./assets/images/kalm_rettungsgasse.png");
  kalmempty = loadImage("./assets/images/kalm_leer.png");
  willkommen = loadImage("./assets/images/HiScreen.png");
 


  //print("https://use.typekit.net/dsk0uwt.css");


  //traileranfang = createVideo( './assets/videos/Anfang.mp4');
  // badEnd = createVideo( './assets/videos/Bad Trailer.mp4');
  // goodEnd = createVideo( './assets/videos/Trailer.mp4');

  clickSound = new Audio("./assets/sounds/click.mp3");
  newScreenSound = new Audio("./assets/sounds/newScreen.mp3");
}

window.preload = preload;
