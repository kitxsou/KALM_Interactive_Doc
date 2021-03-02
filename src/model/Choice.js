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
    rect(this.x, this.y, this.width, this.height);
    fill(255);
    text(this.text, this.x + this.width / 4, this.y + this.height / 2);
  }

  mouseClicked() {
    if (
      this.x < mouseX &&
      mouseX < this.x + this.width &&
      this.y < mouseY &&
      mouseY < this.y + this.height
    ) {
      this.onMouseClicked();
    }
  }
}
