class Principal {

  constructor(cantNaves, tamArma) {
    this.cant=cantNaves;
    this.naves=[];
    this.c=new Arma(tamArma);
    for (let i=0; i<this.cant; i++) {
      this.naves[i]= new Nave();
    }
  }

  dibujar() {
    for (let i=0; i<this.cant; i++) {
      this.naves[i].dibujarNave();
      this.naves[i].moverNave();
    }
    this.c.dibujarArma();
  }
  moverArma() {
    if (keyIsDown(LEFT_ARROW)) {
      this.c.moverIzquierda();
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.c.moverDerecha();
    }
  }
  disparar() {
    this.c.disparar();
  }

  detectarColision() {
    let bala= this.c.b;
    if (bala.disparada) {
      for (let i=0; i<this.cant; i++) {
        if (this.naves[i].colision(bala)) {
          this.naves[i].reiniciarNave();
          bala.disparada=false;
        }
      }
    }
  }
}
