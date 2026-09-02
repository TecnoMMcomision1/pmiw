let mario= [];
let posX, posY, velX;
let contadorG;
let contadorA;
let estado;
let sprite;
function preload() {
  for (let i=0; i<6; i++) {
    //mario[i]=loadImage("data/mario"+i+".png");
    mario[i]=loadImage("data/"+i+".png");
  }
}
function setup() {
  createCanvas(500, 500);
  posX=width/2;
  posY=height-height/3;
  velX=2;
  contadorA=0;
  contadorG=0;
  estado=0;
  sprite=0;
}


function draw() {
  background(0);
  contadorG++;
  if (contadorG<50) {
    estado=0;
  } else if (contadorG>50 && contadorG<100) {
    estado=1;
  } else if (contadorG>100) {
    estado=2;
  }
  if (estado===0) {
    sprite=0;
  }
  if (estado===1) {
    contadorA++;
    if (frameCount%6===0) {
      sprite=1;
    } else {
      sprite=0;
    }
  }
  if (estado===2) {
    sprite=5;
    posX+=velX;
  }
  image(mario[sprite], posX, posY);
}
