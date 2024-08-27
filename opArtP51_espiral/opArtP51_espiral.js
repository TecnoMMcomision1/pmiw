let origen;
function preload() {
  origen =loadImage("data/espirales.jpg");
  
}
function setup() {
  createCanvas(800, 400);
  origen.resize(400, 400);
  
  noFill();
  strokeWeight(2);
}
function draw() {
  background(150);
  //image(origen, 0, 0, 400, 400);
  image(origen, 0, 0);
  scale(0.90);
 // coronas(450+width/4, height/2+20, 50, 10);
  for (let i=0; i<2; i++) {
    for (let j=0; j<2; j++) {
      coronas(550+width/4*i, height/3+height/2*j, 25, 8);
    }
  }
}

function coronas ( x,  y,  ubic,  tam) {
  for (let i=0; i<4; i++) {
    vuelta(x-ubic/20, y, ubic+ubic*i, i*10+18);
  }
}

function vuelta ( x,  y,  dist, cant) {
  for (let i=0; i<cant; i++) {
    push();
    translate(x, y);
    rotate(radians(i*360/cant));
    if (par(i)) {
      stroke(90);
    } else {
      stroke(200);
    }
    cuadra(0, dist, 15, i);
    pop();
  }
}
function par( x) {
  return (x)%2==0;
}
function cuadra( x,  y,  tam,  ind) {
  translate(x, y);
  if (par(ind)) {
    rotate(radians(22));
  } else {
    rotate(radians(20));
  }
  rectMode(CENTER);
  rect(0, 0, tam, tam);
}
