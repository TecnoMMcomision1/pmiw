function tablero(cantCeldas, tamCeldas) {
  for (let i=0; i<cantCeldas; i++) {
    for (let j=0; j<cantCeldas; j++) {
      rect(i*tamCeldas, j*tamCeldas, tamCeldas, tamCeldas);
    }
  }
}

function ficha1(x, y, t) {
  ellipse(x, y, t, t);
}
function ficha2 (x, y, t) {
  let sep=t/4;
    line(x+sep, y+sep, x+t-sep, y+t-sep);
  line(x+sep, y+t-sep, x+t-sep, y+sep);
}

function estilo(tieneRelleno, relleno, borde, grosor) {
  if (tieneRelleno===true) {
    fill(relleno);
  }
  stroke(borde);
  strokeWeight(grosor);
}
