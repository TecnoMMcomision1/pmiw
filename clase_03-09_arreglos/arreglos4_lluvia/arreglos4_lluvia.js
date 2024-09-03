let cant = 1000;
let posX = [];
let posY = [];
let vel = [];

function setup() {
  createCanvas(500, 500);

  for (let i=0; i<cant; i++) {
    posX[i] = random(width);
    posY[i] = random(-200, -50);
    vel[i] = random(0.5, 1.2);
  }
}


function draw() {
  background(0);

  //gotita(width/2, height/2, 100);

  for (let i=0; i<cant; i++) {
    gotita(posX[i], posY[i], 20);
    posY[i] += vel[i];

    if (posY[i] > height+30) {
      posX[i] = random(width);
      posY[i] = random(-200, -50);
      vel[i] = random(0.5, 1.2);
    }
  }
}

function gotita(x, y, tam) {
  noStroke();
  fill(0, 0, 255);

  ellipse(x, y, tam, tam);
  triangle(x-tam/2, y, x+tam/2, y, x, y-tam);
}
