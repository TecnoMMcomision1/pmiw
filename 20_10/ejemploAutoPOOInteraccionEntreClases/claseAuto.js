class Auto {

  constructor(tama) {
    this.posX=random(20, 100);
    this.posY=random(tama/2, height-tama/2);
    this.tama=tama;
    this.vel=random(1, 3);
    this.rueda= new Rueda(this.tama/3);
  }
  dibujarAuto() {
    fill(255, 0, 0);
    rect(this.posX, this.posY, this.tama, this.tama/2);
    this.rueda.dibujarRueda(this.posX, this.posY + this.tama/2, this.vel);
    this.rueda.dibujarRueda(this.posX+this.tama, this.posY+this.tama/2, this.vel);
  }
  moverAuto() {
    if (this.posX>width) {
      this.posX=-this.tama;
    }
    this.posX+=this.vel;
  }
}
