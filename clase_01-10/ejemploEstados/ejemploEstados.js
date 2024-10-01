let fondos = [];

let estado;

const TITULO = 0;
const MAR = 4;

function preload() {
  for (let i=0; i<9; i++) {
    fondos[i] = loadImage("data/fondo"+i+".jpg");
  }
}
function setup() {
  createCanvas(640, 480);
  for (let i=0; i<9; i++) {
    fondos[i].resize(480, 480);
  }

  estado = TITULO;
}


function draw() {
  background(200);
  //image(fondos[4], 0, 0, 640, 480);
  //cargaFondos(fondos, 2, 0, 0, 480, 480, LEFT);

  if (estado === TITULO) {
    cargaOtroFondo(fondos[0], width-480, 0, 480, 480, RIGHT);
  }else if(estado===1){
    cargaOtroFondo(fondos[MAR], width-480, 0, 480, 480, RIGHT);
  }
}

function mousePressed() {
  estado++;
}

function cargaFondos(imag, index, x, y, ancho, alto, alinea) {
  imageMode(alinea);
  image(imag[index], x, y, ancho, alto);
}


function cargaOtroFondo(imag, x, y, ancho, alto, alinea) {
  imageMode(alinea);
  image(imag, x, y, ancho, alto);
}
