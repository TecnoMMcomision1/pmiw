class Rueda {

  constructor(tamR) {
    this.tamRueda=tamR;
    this.posX=random(100, 500);
    this.posY=random(100, 400);
  }
  dibujarRueda() {
    push();
    translate(this.posX, this.posY);
    rotate(radians(frameCount));
    fill(0);
    circle(0, 0, this.tamRueda);
    stroke(255);
    line(-this.tamRueda/2, 0, this.tamRueda/2, 0);
    line(0, -this.tamRueda/2, 0, this.tamRueda/2);
    pop();
  }
}
