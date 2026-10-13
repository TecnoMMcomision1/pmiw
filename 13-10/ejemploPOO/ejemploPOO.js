let c1, c2, c3;

function setup() {
  createCanvas(500, 500);
  c1= new Cuadrado();
  c2= new Cuadrado();
  c3= new Cuadrado();
}


function draw() {
  background(0);

  c1.dibujarCuadrado();
  c2.dibujarCuadrado();
  c3.dibujarCuadrado();

  c1.moverCuadrado();
  c2.moverCuadrado();
  c3.moverCuadrado();
}
