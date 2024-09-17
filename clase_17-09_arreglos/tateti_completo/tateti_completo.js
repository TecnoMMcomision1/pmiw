let cant = 3;
let tam;
let azul = [];
let rojo = [];
let turno = 0;

function setup() {
  createCanvas(500, 500);

  tam = width/cant;

  for (let i=0; i<cant; i++) {
    azul[i] = [];
    rojo[i] = [];

    for (let j=0; j<cant; j++) {
      azul[i][j] = false;
      rojo[i][j] = false;
    }
  }
}

function draw() {
  background(200);

  for (let i=0; i<cant; i++) {
    for (let j=0; j<cant; j++) {
      fill(255);
      rect(i*tam, j*tam, tam, tam);

      if (azul[i][j] === true) {
        fichaAzul(i*tam+tam/2, j*tam+tam/2, tam*2/3);
      }
      if (rojo[i][j] === true) {
        fichaRoja(i*tam, j*tam, tam);
      }

      //-------------------------------------condiciones para ganar ROJO
      if (rojo[0][0] && rojo[1][0] && rojo[2][0] ||
          rojo[0][1] && rojo[1][1] && rojo[2][1] ||
          rojo[0][2] && rojo[1][2] && rojo[2][2] ||
          
          rojo[0][0] && rojo[0][1] && rojo[0][2] ||
          rojo[1][0] && rojo[1][1] && rojo[1][2] ||
          rojo[2][0] && rojo[2][1] && rojo[2][2] ||
          
          rojo[0][0] && rojo[1][1] && rojo[2][2] ||
          rojo[0][2] && rojo[1][1] && rojo[2][0]) {
        textSize(20);
        textAlign(CENTER);
        fill(255, 0, 0);
        text("Gana jugador ROJO :D", width/2, height/2);
        pop();
      }
    }
  }

  textSize(20);
  fill(0);
  text(turno, 100, 100);
}

function mousePressed() {
  for (let i=0; i<cant; i++) {
    for (let j=0; j<cant; j++) {
      if (detectarMouse(i*tam, j*tam, tam, tam)) {  //revisar que estoy en una casilla
        if (azul[i][j] === false && !rojo[i][j]) {  //revisar que la casilla esté vacía
          if (turno%2===0) {                        //revisar de quién es el turno
            azul[i][j] = true;
          } else {
            rojo[i][j] = true;
          }
          turno++;                                  //avanzar turno
        }
      }
    }
  }
}

function detectarMouse(x, y, ancho, alto) {
  return mouseX>x && mouseX<x+ancho && mouseY>y && mouseY<y+alto;
}

function fichaAzul(x, y, diam) {
  fill(0, 0, 255);
  ellipse(x, y, diam, diam);
}
function keyPressed() {
  for (let i=0; i<cant; i++) {
    for (let j=0; j<cant; j++) {
      azul[i][j] = false;
      rojo[i][j] = false;
    }
  }
  turno = 0;
}

function fichaRoja(x, y, t) {
  push();
  stroke(255, 0, 0);
  strokeWeight(3);

  line(x, y, x+t, y+t);
  line(x, y+t, x+t, y);
  pop();
}
