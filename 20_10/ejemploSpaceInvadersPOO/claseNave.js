class Nave {

  constructor() {
    this.posX=random(-200, -100);
    this.tama=random(20, 40);
    this.posY=random(20, height/2);
    this.vel=random(2, 4);
  }
  dibujarNave() {
    fill(120);
    circle(this.posX, this.posY, this.tama);
    fill(0, 255, 0);
    rect(this.posX, this.posY+this.tama/2, this.tama*2, this.tama);
  }
  moverNave() {
    if (this.posX>width+this.tama) {
      this.posX=-this.tama;
      this.posY=random(20, height/2);
      this.tama=random(20, 40);
    }
    this.posX+=this.vel;
  }
}
