let juego;
let cantidad=5;
function setup() {
  rectMode(CENTER);
  createCanvas(640, 480);
  juego=new Principal(cantidad, 60);
}


function draw() {
  background(0);
  juego.dibujar();
  juego.moverArma();
  juego.detectarColision();
}
function mousePressed() {
  juego.disparar();
}
