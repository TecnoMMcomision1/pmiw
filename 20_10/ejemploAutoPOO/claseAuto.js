class Auto {

  constructor(tama) {
    this.posX=random(20, 100);
    this.posY=random(tama/2, height-tama/2);
    this.tama=tama;
    this.vel=random(1, 3);
  }
  dibujarAuto() {
    fill(255, 0, 0);
    rect(this.posX, this.posY, this.tama, this.tama/2);
  }
  moverAuto() {
    if (this.posX>width) {
      this.posX=-this.tama;
    }
    this.posX+=this.vel;
  }
}
