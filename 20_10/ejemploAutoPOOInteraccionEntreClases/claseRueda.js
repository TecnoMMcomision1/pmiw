class Rueda {

  constructor(tamR) {
    this.tamRueda=tamR;
  }
  dibujarRueda(x, y, vel) {
    push();
    translate(x, y);
    rotate(radians(frameCount*vel));
    fill(0);
    circle(0, 0, this.tamRueda);
    stroke(255);
    line(-this.tamRueda/2, 0, this.tamRueda/2, 0);
    line(0, -this.tamRueda/2, 0, this.tamRueda/2);
    pop();
  }
}
