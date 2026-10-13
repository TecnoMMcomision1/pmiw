class Cuadrado {

  constructor(ubicY) {
    // Que caracteristicas necesitamos para que la clase arranque.
    this.posX=0; //this. Obligatorio en p5 POO.
    this.posY=ubicY; //this. indica que la propiedad pertenece a esta clase.
    this.tam=50;
    this.vel=random(1, 3);
  }
  //Acciones = metodos
  dibujarCuadrado() {
    rect(this.posX, this.posY, this.tam, this.tam);
  }
  moverCuadrado() {
    if (this.posX>=width) {
      this.posX=-this.tam;
    }
    this.posX+=this.vel;
  }
}
