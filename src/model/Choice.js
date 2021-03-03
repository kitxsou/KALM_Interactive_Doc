export class Choice {
  constructor(x, y, width, height, text, onMouseClicked) {
    this.x = x;
    this.y = y;

    this.width = width;
    this.height = height;

    this.text = text;
    this.onMouseClicked = onMouseClicked;
  }

  show() {
    textSize(20);
    noStroke();
    fill("#FD6F57");
    rectMode(CENTER);
    rect(windowWidth / 2 + this.x, windowHeight / 2 + this.y, this.width, this.height);
    fill(255);
    textAlign(CENTER, CENTER);
    text(this.text, windowWidth / 2 + this.x, windowHeight / 2 + this.y, this.width, this.height);
  }

  mouseClicked() {
    if (
      mouseX >= windowWidth / 2 + this.x - this.width / 2 && 
      mouseX <= windowWidth / 2 + this.x + this.width / 2 && 
      mouseY >= windowHeight / 2 + this.y - this.height / 2 && 
      mouseY <= windowHeight / 2 + this.y + this.height / 2
    ) {
      this.onMouseClicked();
    }
  }
}
