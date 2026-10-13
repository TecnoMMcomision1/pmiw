let c=[];
let cant=10;
let altura;
function setup() {
  createCanvas(500, 500);
  altura=height/cant;
  for (let i=0; i<cant; i++) {
    c[i]=new Cuadrado(i*altura, altura);
  }
}


function draw() {
  background(0);
  for (let i=0; i<cant; i++) {
    c[i].dibujarCuadrado();
    c[i].moverCuadrado();
  }
}
