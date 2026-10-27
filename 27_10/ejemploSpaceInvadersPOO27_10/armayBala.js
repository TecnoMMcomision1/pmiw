class Arma {

  constructor(tama) {
    this.tam=tama;
    this.xA=width/2;
    this.yA=height-this.tam/2;
    this.b= new Bala(this.tam/2);
  }
  dibujarArma() {
    push();
    rectMode(CENTER);
    fill(255, 0, 0);
    rect(this.xA, this.yA, this.tam/2, this.tam);
    pop();
    this.b.dibujarBala();
    this.b.moverBala(this.xA, this.yA);
  }
  moverIzquierda() {
    if (this.xA>this.tam/4) {
      this.xA-=3;
    }
  }
  moverDerecha() {
    if (this.xA<width-this.tam/4) {
      this.xA+=3;
    }
  }
  disparar() {
    this.b.dispararBala()
  }
}

//ACA EMPIEZA LA CLASE BALA

class Bala {

  constructor(tamBala) {
    this.tam=tamBala;
    this.xB=width/2;
    this.yB=height-this.tam;
    this.disparada=false;
  }
  dibujarBala() {
    fill(120, 200, 0);
    circle(this.xB, this.yB, this.tam);
  }
  moverBala(posX, posY) {
    if (!this.disparada) {
      this.xB=posX;
      this.yB=posY;
    } else {
      this.yB-=10;
    }
    if (this.yB<-this.tam) {
      this.disparada=false;
    }
  }
  dispararBala() {
    this.disparada=true;
  }
}
