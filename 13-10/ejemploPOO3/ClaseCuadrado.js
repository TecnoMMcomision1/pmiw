class Cuadrado {

  constructor(ubicY, alt) {
    // Que caracteristicas necesitamos para que la clase arranque.
    this.posX=0; //this. Obligatorio en p5 POO.
    this.posY=ubicY; //this. indica que la propiedad pertenece a esta clase.
    this.tam=alt;
    this.vel=random(1, 3);
  }
  //Acciones = metodos
  dibujarCuadrado() {
    let mapDaB=map(this.posY, 0, height-this.tam, 255, 20);
    fill(255, 0, 0, mapDaB);
    rect(this.posX, this.posY, this.tam, this.tam);
  }
  moverCuadrado() {
    if (this.posX>=width) {
      this.posX=-this.tam;
    }
    this.posX+=this.vel;
  }
}
