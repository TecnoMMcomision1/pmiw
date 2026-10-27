let imagenGato, sonidoGato;
let gato;
function preload() {
  imagenGato= loadImage("data/imagen.png");
  sonidoGato= loadSound("data/sonido.mp3");
}

function setup() {
  createCanvas(600, 600);
  gato = new Gato(width/2, width/2, imagenGato, sonidoGato);
}


function draw() {
  background(0);
  gato.dibujarGato();
}
function mousePressed() {
  gato.maullar();
}
