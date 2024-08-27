let tunel;
let alto = 25;
let anchoMax;
let alternada = true;
function preload() {
  tunel = loadImage("data/tunel.jpg");
  
}
function setup() {
  createCanvas(800, 400);
  
  tunel.resize(400, 400);
  anchoMax = width/6;
}
function draw() {
  background(0);
  
  image(tunel, 0, 0);
  for (let i=0; i<4; i++) {
    push();
    funcionTunel(600, 200, i*90, alternada);
    alternada=!alternada;
    pop();
  }
  strokeWeight(10);
  bordes();
}
function keyPressed() {
  save("data/efectoTunel.jpg");
}
