let atras, medio, adelante;
let posXa, posXm, posXad, posY;
let velA, velM, velAd;
function preload() {
  atras=loadImage("data/fondo.png");
  medio=loadImage("data/medio.png");
  adelante=loadImage("data/frente.png");
}


function setup() {
  createCanvas(800, 600);
  imageMode(CENTER, CENTER);
  posXa=width/2;
  posXm=width/2;
  posXad=width/2;
  posY=height/2;
  velA=1;
  velM=1.5;
  velAd=2;
}


function draw() {
  background(0);
  posXa+=velA;
  if (posXa>=width+width/2) {
    posXa=width/2
  }
  image(atras, posXa, posY, width, height);
  image(atras, posXa-width, posY, width, height);

  posXm+=velM;

  if (posXm>=width+width/2) {
    posXm=width/2
  }
  image(medio, posXm, posY, width, height);
  image(medio, posXm-width, posY, width, height);

  posXad+=velAd;
  if (posXad>=width+width/2) {
    posXad=width/2
  }
  image(adelante, posXad, posY, width, height);
  image(adelante, posXad-width, posY, width, height);
}
