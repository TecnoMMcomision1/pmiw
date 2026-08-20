let sprite=[];
let posX, posY, vel;
let animar;
function preload() {
  //sprite[0]=loadImage("data/0.png");
  //sprite[1]=loadImage("data/1.png");
  for (let i=0; i<5; i++) {
    sprite[i]=loadImage("data/"+i+".png");
  }
}

function setup() {
  createCanvas(800, 600);
  posX=width/2;
  posY=height/2;
  vel=4;
  animar=0;
}


function draw() {
  background(0);
  image(sprite[animar], posX, posY);
  if (animar>=4) {
    animar=0;
  }
  if (frameCount%12===0) {
    animar++;
  }
  if (keyIsPressed) {
    if (key=='d'||key=='D') {
      posX+=vel;
    }
  }
  if (posX>width) {
    posX=-100;
  }
}
