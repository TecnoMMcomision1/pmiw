let anchoCelda ;
let cantCeldas = 3;

function setup() {
  createCanvas(400, 400);
  anchoCelda = width/cantCeldas;
}


function draw() {
  background(200);
  for (let i=0; i < 3; i++) {
    for (let j=0; j < 3; j++) {
      DibujarCirculos((i*anchoCelda)+(anchoCelda/2), (j*anchoCelda)+(anchoCelda/2), anchoCelda, 10);
    }
  }
}




function DibujarCirculos(posX, posY, diametro, numCirculos) {
  for (let i=0; i < numCirculos; i++) {
    if (i % 2 === 0) {
      fill(220, 0, 50);
    } else {
      fill(50, 0, 220);
    }
    let nuevoDiametro = map(i, 0, numCirculos, diametro, diametro/numCirculos);
    let posXInteraccion = map(nuevoDiametro, diametro, diametro/numCirculos, posX, mouseX);
    circle(constrain(posXInteraccion, posX - diametro/2, posX+diametro/2), posY, nuevoDiametro);
  }
}
