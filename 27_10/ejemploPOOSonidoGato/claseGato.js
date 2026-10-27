class Gato {
  constructor(x, y, imagen, sonido) {

    this.x=x;
    this.y=y;
    this.imagen=imagen;
    this.sonido=sonido;
  }
  dibujarGato() {
    image(this.imagen, this.x, this.y);
  }

  maullar() {
    if (!this.sonido.isPlaying()) {
      this.sonido.play();
    }
  }
}

// ACA EMPIEZA LA OTRA CLASE
