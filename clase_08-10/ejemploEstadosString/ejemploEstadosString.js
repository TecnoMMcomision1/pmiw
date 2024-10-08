let fondos = [];

let estado;

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
  estado = "inicio";
}


function draw() {
  background(200);
  //image(fondos[4], 0, 0, 640, 480);
  //cargaFondos(fondos, 2, 0, 0, 480, 480, LEFT);

  if (estado === "inicio") {
    cargaOtroFondo(fondos[0], width-480, 0, 480, 480, RIGHT);

    dibujarBoton(50, 50, 100, 50);
  } else if (estado==="primera") {
    cargaOtroFondo(fondos[1], width-480, 0, 480, 480, RIGHT);

    dibujarBoton(50, 50, 100, 50);
    dibujarBoton(50, height-100, 100, 50);
  }else if (estado==="segunda") {
    cargaOtroFondo(fondos[2], width-480, 0, 480, 480, RIGHT);

    dibujarBoton(50, 50, 100, 50);
    dibujarBoton(50, height-100, 100, 50);
  }
  fill(255, 0, 0);
  textSize(25);
  text(estado, 50, 450);
}

function mousePressed() {
  //estado++;
  if (estado === "inicio") {
    if (detectarBoton(50, 50, 100, 50)) {
      estado="primera";
    }
  } else if (estado==="primera") {
    if (detectarBoton(50, 50, 100, 50)) {
      estado="segunda";
    }
    if (detectarBoton(50, height-100, 100, 50)) {
      estado="inicio";
    }
  }
}

function dibujarBoton(px, py, pan, pal) {
  if (detectarBoton(px, py, pan, pal)) {
    fill(0, 255, 255);
  } else {
    fill(0, 0, 255);
  }
  rect(px, py, pan, pal, pal/4);
}
function detectarBoton(x, y, an, al) {
  return mouseX > x && mouseX < x+an && mouseY > y && mouseY < y+al;
}

function cargaFondos(imag, index, x, y, ancho, alto, alinea) {
  imageMode(alinea);
  image(imag[index], x, y, ancho, alto);
}

function cargaOtroFondo(imag, x, y, ancho, alto, alinea) {
  imageMode(alinea);
  image(imag, x, y, ancho, alto);
}
