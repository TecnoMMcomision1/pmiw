let cantCol = 10;
let cantFil = 10;
let anchoCol, altoFil;

let celda = [];

function setup() {
  createCanvas(640, 480);
  anchoCol = width/cantCol;
  altoFil = height/cantFil;

  for (let i=0; i<cantCol; i++) {
    celda[i] = []; // insertamos una dimensión mas dentro del arreglo.
    for (let j=0; j<cantFil; j++) {

      //celda[i][j] = 0; // asignamos un valor inicial a cada una de las celdas del arreglo.
      //celda[i][j] = i;
      //celda[i][j] = i+j;
      celda[i][j] = i*j;
    }
  }
  textSize(18);
  textAlign(CENTER, CENTER);
}


function draw() {
  background(0);
  for (let i=0; i<cantCol; i++) {
    for (let j=0; j<cantFil; j++) {
      noFill();
      stroke(0, 200, 200);
      //rect(i*anchoCol, j*altoFil, anchoCol, altoFil);
      rect(ubicacion(i, anchoCol), ubicacion(j, altoFil), anchoCol, altoFil);
      fill(255);
      //text(celda[i][j], i*anchoCol+anchoCol/2, j*altoFil+altoFil/2);
      text(celda[i][j], ubicacion(i, anchoCol)+anchoCol/2, ubicacion(j, altoFil)+altoFil/2);
    }
  }
}

function mousePressed() {
  for (let i=0; i<cantCol; i++) {
    for (let j=0; j<cantFil; j++) {
      if (detectarMouse(ubicacion(i, anchoCol), ubicacion(j, altoFil), anchoCol, altoFil)) {
        celda[i][j] +=1;
      }
    }
  }
}

function ubicacion(indice, tam) {
  return indice*tam;
}

function detectarMouse(x, y, ancho, alto) {
  return mouseX>x && mouseX<x+ancho && mouseY>y && mouseY<y+alto;
}
