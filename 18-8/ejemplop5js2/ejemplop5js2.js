let posXCirculo, posYCirculo, tamCirculo;
let posXBotonI, posYBotonI, tamXBoton, tamYBoton;
let ARRIBA;
function setup() {
  createCanvas(400, 400);
  posXCirculo=width/2;
  posYCirculo=height-height/3;
  tamCirculo=50;
  posXBotonI=50;
  posYBotonI=100;
  tamXBoton=100;
  tamYBoton=50;
  ARRIBA="ARRIBA"
}


function draw() {
  background(0);
  fill(255, 255, 0);
  circle(posXCirculo, posYCirculo, tamCirculo);
  dibujarBoton(150, 50, tamXBoton, tamYBoton, ARRIBA); //Boton ARR
  dibujarBoton(posXBotonI, posYBotonI, tamXBoton, tamYBoton, "IZQUIERDA");
  dibujarBoton(150, 150, tamXBoton, tamYBoton, "ABAJO");

  if (mouseIsPressed) {
    if (detectarZonaR2(150, 50, tamXBoton, tamYBoton)) {
      posYCirculo--;
    }
    if (detectarZonaR3(150, 150, tamXBoton, tamYBoton)) {
      posYCirculo++;
    }
  }
}
function mousePressed() {
  if (detectarZonaR(posXBotonI, posYBotonI, tamXBoton, tamYBoton)) {
    posXCirculo-=4;
  }
}
function dibujarBoton(x, y, tamX, tamY, nombre) {
  if (detectarZonaR(x, y, tamX, tamY)) {
    fill(0, 255, 255);
  } else {
    fill(0, 0, 255);
  }
  rect(x, y, tamX, tamY, tamY/4);
  textSize(tamY/3);
  textAlign(CENTER, CENTER);
  fill(255);
  text(nombre, x+tamX/2, y+tamY/2);
}
function detectarZonaR(x, y, tamX, tamY) {
  if (mouseX>x && mouseX<x+tamX && mouseY>y && mouseY< y+tamY) {
    return true;
  } else {
    return false;
  }
}
function detectarZonaR2(x, y, tamX, tamY) {
  let sobreZona= mouseX>x && mouseX<x+tamX && mouseY>y && mouseY< y+tamY;

  return sobreZona;
}
function detectarZonaR3(x, y, tamX, tamY) {
  return mouseX>x && mouseX<x+tamX && mouseY>y && mouseY< y+tamY;
}
