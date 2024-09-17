let bx = [];
let by = [];
let vel = [];

let bCant;
let bt;

let fx, fy, ft;
let fDisparada;

let puntos, fallos;    //condiciones de ganar/perder!!!!!!

function setup() {
  createCanvas(800, 500);

  bCant = 5;
  bt = 50;

  for (let i=0; i<bCant; i++) {
    resetBlanco(i);
  }

  fx = 150;
  fy=height/2;
  ft=150;

  fDisparada = false;
}


function draw() {
  background(200);

  //---------------------------BLANCO
  for (let i=0; i<bCant; i++) {

    //----------------Dibujar
    blanco(bx[i], by[i], bt);

    //----------------mover
    by[i] += vel[i];

    if (by[i] > height+bt/2) {
      resetBlanco(i);
    }

    //----------------colisión
    if (colision(fx, fy, bx[i], by[i], bt)) {
      by[i] = 0;
      vel[i] = 0;
      fx=150;
      fDisparada=false;
    }
  }

  //---------------------------FLECHA

  //----------------Dibujar
  flecha(fx, fy, ft);

  if (fDisparada===true) {
    fx+=10;

    if (fx>width+ft) {
      fx = 150;
      fDisparada=false;
    }
  }

  //----------------mover
  if (keyIsPressed && !fDisparada) {
    if (keyCode===UP_ARROW && fy>0) {
      fy -= 2;
    }
    if (keyCode===DOWN_ARROW && fy<height) {
      fy += 2;
    }
  }
}

function keyPressed() {
  if (keyCode===32) {
    fDisparada=true;
  }
}

function blanco(x, y, d) {
  fill(255, 0, 0);
  ellipse(x, y, d);
}
function resetBlanco(i) {
  bx[i] = random(600, 800);
  by[i] = random(-200, -100);
  vel[i] = random(1, 3);
}

function flecha(x, y, l) {
  push();
  stroke(200, 120, 40);
  strokeWeight(5);
  line(x, y, x-l, y);
  pop();

  noStroke();
  fill(100);
  triangle(x, y, x-l/10, y+l/10, x-l/10, y-l/10);
}

function colision(_fx, _fy, _bx, _by, _bt) {
  let distancia = dist(_fx, _fy, _bx, _by);
  return distancia < _bt/2;
}
