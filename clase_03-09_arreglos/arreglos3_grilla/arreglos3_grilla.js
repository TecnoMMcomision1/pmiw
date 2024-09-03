let cantidad = 10;
let tam;

let tono = [];

function setup() {
  createCanvas(500, 500);
  tam = width/cantidad;

  for (let i=0; i<cantidad; i++) {
    tono[i] = [];

    for (let j=0; j<cantidad; j++) {
      tono[i][j] = 0;
    }
  }
}


function draw() {
  background(200);
  stroke(170);

  for (let i=0; i<cantidad; i++) {
    for (let j=0; j<cantidad; j++ ) {
      if (estaElMouse(i*tam, j*tam, tam, tam)) {
        tono[i][j] = tono[i][j] + 3;
      }
      fill(tono[i][j]);
      rect(i*tam, j*tam, tam, tam);
    }
  }
}

function estaElMouse(x, y, an, al) {
  let anda = mouseX>x && mouseX<x+an && mouseY>y && mouseY<y+al;
  return anda;
}
